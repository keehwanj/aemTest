<%@page import="org.slf4j.Logger"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.io.IOException"%>
<%@include file="/libs/wcm/global.jsp"%>


<%!protected void writeOrgStructureNode(Node orgNode, int topDepth, StringBuilder sb, Page currentPage,
      Resource resource, Logger log) {
    try {
      if (orgNode != null && !orgNode.getName().equalsIgnoreCase("jcr:content")) {
        ArrayList<Node> children = new ArrayList<Node>();
        for (NodeIterator nodeIter = orgNode.getNodes(); nodeIter.hasNext();) {
          Node childNode = (Node) nodeIter.next();
          if (!childNode.getName().equalsIgnoreCase("orginfo") && !childNode.getName().equalsIgnoreCase("jcr:content"))
            children.add(childNode);
        }
        
        int hLevel = orgNode.getDepth() - topDepth;

        //headers go from h1 to h6, so we want hlevel to have a max value of 6 
        if (hLevel > 6 ) { 
            hLevel = 6; 
        }
        String navItem = Utils.getQuicklink(orgNode.getPath(), currentPage, resource);
        sb.append(String.format("<li><h%s>%s</h%s>", hLevel, navItem, hLevel));
 
        //sorts the results by orgLevel
        // first :  create a new array without the jcr:content node 
        ArrayList<Node> childarray = new ArrayList<Node>();
        for (int i = 0; i < children.size(); i++) {
             if (!children.get(i).getName().equalsIgnoreCase("jcr:content")) {
                 childarray.add(children.get(i));
             }
        }
        
        for (int i=0; i < childarray.size(); i++) {
             Node temp = childarray.get(i);
             for (int j=i+1; j<childarray.size(); j++) {
                 if (temp.getProperty("orginfo/ORGLEVEL").getString().compareTo(childarray.get(j).getProperty("orginfo/ORGLEVEL").getString())>0 ) {
                     temp = childarray.get(j);
                 }       
             }
             childarray.remove(temp);
             childarray.add(i,temp); 
         }
        
        if (children.size() != 0) {
          sb.append(String.format("<ul id=\"children_org%s\">", orgNode.getName()));
          //for (NodeIterator nodeIter = orgNode.getNodes(); nodeIter.hasNext();) {
            //Node childNode = (Node) nodeIter.next();
            //if (!childNode.getName().equalsIgnoreCase("orginfo"))
              //writeOrgStructureNode(childNode, topDepth, sb, currentPage, resource, log);
          //}
          // instead of cycling through the nodes (code above) - we now cycle through our sorted array (below)  
          for (Node childitem : childarray) {
              writeOrgStructureNode(childitem, topDepth, sb, currentPage, resource, log);
          }
          sb.append("</ul>");
        }
        sb.append("</li>");
      }
    } catch (Exception e) {
      log.error("error writing OrgStructureNode in departmentinfo", e);
    }
  }
  
  // *********************************************************************************
  //
  // generateGoogleDataNodeContent - called from writeGoogleDataNode  (find below) 
  //
  //  - calls:   
  //
  // *********************************************************************************


  protected String generateGoogleDataNodeContent(Node orgNode, Page currentPage, Resource resource, Logger log) {
    String returnValue = "";
    try {
      String RECAREACODE = "RECAREACODE";
      String RECPHONE = "RECPHONE";
      String PERSONINCHARGE = "PERSONINCHARGE";
      if (orgNode != null && orgNode.hasNode("orginfo")) {
        Node orgInfoNode = orgNode.getNode("orginfo");

        //Figure out the phone number
        String phone = "";
        if (orgInfoNode != null && orgInfoNode.hasProperty(RECAREACODE) && orgInfoNode.hasProperty(RECPHONE)
            && Utils.isNotEmpty(orgInfoNode.getProperty(RECAREACODE).getString())
            && Utils.isNotEmpty(orgInfoNode.getProperty(RECPHONE).getString())) {
          phone = String.format("(%s) %s", orgInfoNode.getProperty(RECAREACODE).getString(), orgInfoNode.getProperty(
              RECPHONE).getString());
        }

        String navItem = Utils.getQuicklink(orgNode.getPath(), currentPage, resource);
        navItem = navItem.substring(0, navItem.lastIndexOf("(")) + "</a>";

        String contactItem = "";
        try {
          String p_contactDataPage = Utils.getConfigurationProperty("contactDataPage", currentPage.getPageManager());
          int contactId = Integer.parseInt(orgInfoNode.getProperty(PERSONINCHARGE).getString());
          if (contactId > 0) {
            int bucket = ((contactId / 250) + 1) * 250;
            String itemPath = String.format("%s/%s/%s", p_contactDataPage, bucket, contactId);
            contactItem = Utils.getQuicklink(itemPath, currentPage, resource);
          }
        } catch (Exception ex) {
          log.error("error getting person in charge in departmentinfo", ex);
        }

        returnValue = String.format("<div class=\"title\">%s</div>", navItem.replace("\'", "\\'"));
        if (Utils.isNotEmpty(contactItem))
          returnValue += String.format("<div class=\"name\">%s</div>", contactItem.replace("\'", "\\'"));
        returnValue += String.format("<div class=\"phone\">%s</div>", phone);
      }
    } catch (Exception e) {
      log.error("error generating GoogleDataNodeContent in departmentinfo", e);
    }
    return returnValue;
  }
  
  // *********************************************************************************
  //
  // writeGoogleDataNode - called from GenerateGoogleDataTable  (find below) 
  //
  //  - calls:  generateGoogleDataNodeContent (find above) 
  //
  // *********************************************************************************

  protected void writeGoogleDataNode(Node orgNode, Node secondaryOrgNode, int linkTarget, String parentalOverride,
      JspWriter out, Page currentPage, Resource resource, Logger log, String debugger) {
    try {
      String Expand = "Expand";
      String Contract = "Return";
      if (currentPage.getLanguage(true).getLanguage().equalsIgnoreCase("fr")) {
        Expand = "&Eacute;largir";
        Contract = "Retourner";
      }

      if (orgNode != null && orgNode.hasNode("orginfo")) {
        Node orgInfoNode = orgNode.getNode("orginfo");

        //Determine if the parent is included in this dataset
        //If this node is an link up the tree then the parent doesn't exist
        String parent = "";
        if (linkTarget >= 0)
          parent = orgNode.getParent().getName();
        if (Utils.isNotEmpty(parentalOverride))
          parent = parentalOverride;
        if (parent.equals("organizations"))
          parent = "";

        //Write out the main node data
        out.write(String.format("[{v:'%s',f:'", orgNode.getName()));
        if (secondaryOrgNode == null) {
          out.write(generateGoogleDataNodeContent(orgNode, currentPage, resource, log));
        } else {
          out.write("<table><tr><td style=\"font-size:100%;border-right:1px solid #D3D3D3;border-bottom:0px;\">");
          out.write(generateGoogleDataNodeContent(orgNode, currentPage, resource, log));
          out.write("</td><td style=\"font-size:100%;border-bottom:0px;\">");
          out.write(generateGoogleDataNodeContent(secondaryOrgNode, currentPage, resource, log));
          out.write("</td></tr></table>");
        }

        //Write out the link
        
        // out.write (debugger);
        
        if (linkTarget != 0) {
          String linkId = orgNode.getName();
          if (linkTarget < 0) {
            Node uplink = orgNode;
            for (int i = 0; i > linkTarget; i--)
              uplink = uplink.getParent();
            linkId = uplink.getName();
          }
          
          if (linkTarget > 0) {
            out.write(String.format("<a class=\"chartExpander\" id=\"chartExpander%s\">%s</a>", linkId, Expand));
            
          } else {
            out.write(String.format("<a class=\"chartExpander\" id=\"chartExpander%s\">%s</a>", linkId, Contract));

          }
        }

        //Write out the end of the node
        out.write(String.format("'}, '%s']", parent));

      }
    } catch (Exception e) {
      log.error("error writing GoogleDataNode in departmentinfo", e);
    }
  }
  
  
  // *********************************************************************************
  //
  // GenerateGoogleDataTable - called from structure.jsp and from itself.  
  //
  //  - calls:  writeGoogleDataNode, specialOrgTypeCase
  //
  // *********************************************************************************

  protected String generateGoogleDataTable(Node orgNode, String chartArray, int level, JspWriter out, Page currentPage,
      Resource resource, Logger log) {
    try {
      out.write("var data = new google.visualization.DataTable();\n");
      out.write("data.addColumn('string', 'Name');\n");
      out.write("data.addColumn('string', 'Manager');\n");
      String ORGLEVEL = "ORGLEVEL";
      String ORGTYPE = "ORGTYPE";
      String parentalOverride = null;

      if (orgNode.hasNode("orginfo") && orgNode.getNode("orginfo").hasProperty(ORGLEVEL)
          && orgNode.getNode("orginfo").getProperty(ORGLEVEL).getString().equalsIgnoreCase("01")) {
        //This is the dept node, it gets special treatment
        Node minister = null;
        Node deputyMinister = null;
        Node deputyMinister2 = null;
        Node board = null;
        //for loop - iterating through top level nodes of a dept
        for (NodeIterator nodeIter = orgNode.getNodes(); nodeIter.hasNext();) {
          Node child = (Node) nodeIter.next();
          if (child.getName().equalsIgnoreCase("orginfo"))
            continue;
          if (child.getName().equalsIgnoreCase("jcr:content"))
            continue;
          Node orgInfoNode = child.getNode("orginfo");

          if (orgInfoNode.getProperty(ORGTYPE).getString().equals("26")) {
            board = child;
            continue;
          }

          //If there is a Premier, there won't be a minister
          if (orgInfoNode.getProperty(ORGTYPE).getString().equals("291")
              && orgInfoNode.getProperty(ORGLEVEL).getString().equals("01.01")) {
            minister = child;
            continue;
          }

          if (orgInfoNode.getProperty(ORGTYPE).getString().equals("16")) {
            minister = child;
            continue;
          }
          //   treat a speak of the house the same as a minister's office 
          if (orgInfoNode.getProperty(ORGTYPE).getString().equals("431")) {
            minister = child;
            continue;
          }

          if (orgInfoNode.getProperty(ORGTYPE).getString().equals("17")) {
            if (deputyMinister == null)
              deputyMinister = child;
            else
              deputyMinister2 = child;
            continue;
          }

          if (orgInfoNode.getProperty(ORGLEVEL).getString().equals("01.02")) {
            board = child;
          }

        } //end of :  for loop - iterating through top level nodes of dept 
        parentalOverride = "organizations";

        if (minister != null) {
          /*
           * March 22 Priority 2 Fix 2b
           * If the minister has more than 2 children then write out its table and make it exandable
           * One node will be jcr:content and the other will be orginfo. The rest are valid children.
           */
          int minLevel = level;
          if (minister.getNodes().getSize() > 2) {
            minLevel = 1;
            specialOrgTypeCase(minister, "ministerdata", chartArray, level, out, log, currentPage, parentalOverride,
                resource);
          }
          out.write("data.addRow(");
          writeGoogleDataNode(minister, null, minLevel, parentalOverride, out, currentPage, resource, log, "");
          out.write(");\n");
          
          parentalOverride = minister.getName();
        }
        if (board != null) {
          int boardLevel = level;
          if (board.getNodes().getSize() > 2) {
            boardLevel = 1;
            specialOrgTypeCase(board, "boarddata", chartArray, level, out, log, currentPage, parentalOverride,
                resource);
          }         
          out.write("data.addRow(");
          writeGoogleDataNode(board, null, boardLevel, parentalOverride, out, currentPage, resource, log, "");
          out.write(");\n");
          
          parentalOverride = board.getName();
        }
        if (deputyMinister != null) {
          int deptLevel = level;
          if (deputyMinister.getNodes().getSize() > 2) {
            deptLevel = 1;
            specialOrgTypeCase(deputyMinister, "deputyministerdata", chartArray, level, out, log, currentPage,
                parentalOverride, resource);
          }
          out.write("data.addRow(");
          writeGoogleDataNode(deputyMinister, deputyMinister2, deptLevel, parentalOverride, out, currentPage, resource,
                log, "");
          out.write(");\n");
          
          parentalOverride = deputyMinister.getName();
        }
      } else {  // not a dept node 
        out.write("data.addRow(");
        //out.write ("call to write google data node number 1 = linktarget = " + level ); 
        writeGoogleDataNode(orgNode, null, level, null, out, currentPage, resource, log, "call to write google data node number 1 = linktarget = " + level);
        out.write(");\n");
      } 
     //sorts the org nodes by orgLevel
     // dump our org nodes into an array - ignoring the orginfo, jcr:content, minister, deputy minister, etc nodes 
     ArrayList<Node> childrennodes = new ArrayList<Node>();
     for (NodeIterator nodeIter = orgNode.getNodes(); nodeIter.hasNext();) {
         Node childNode = (Node) nodeIter.next();
         //this ignore code was in the for loop below - moved it here - no sense sorting nodes we are going to ignore.   
         if (childNode.getName().equalsIgnoreCase("orginfo"))
             continue;
           if (childNode.getName().equalsIgnoreCase("jcr:content"))
             continue;
           Node orgInfoNode = childNode.getNode("orginfo");
           if (orgInfoNode.getProperty(ORGTYPE).getString().equals("16"))
             continue;
           if (orgInfoNode.getProperty(ORGTYPE).getString().equals("17"))
             continue;
           if (orgInfoNode.getProperty(ORGTYPE).getString().equals("26"))
             continue;
           if (orgInfoNode.getProperty(ORGTYPE).getString().equals("291")
               && orgInfoNode.getProperty(ORGLEVEL).getString().equals("01.01"))
             continue;
           if (orgInfoNode.getProperty(ORGLEVEL).getString().equals("01.02") && orgInfoNode.getProperty(ORGLEVEL).getString().equals("01.01"))
             continue;
           if (orgInfoNode.getProperty(ORGTYPE).getString().equals("431"))
             continue;
          
          childrennodes.add(childNode);
     }
     //perform the sort 
     for (int i=0; i < childrennodes.size(); i++) {
           Node temp = childrennodes.get(i);
           for (int j=i+1; j<childrennodes.size(); j++) {
               if (temp.getProperty("orginfo/ORGLEVEL").getString().compareTo(childrennodes.get(j).getProperty("orginfo/ORGLEVEL").getString())>0 ) {
                   temp = childrennodes.get(j);
               }       
           }
           childrennodes.remove(temp);
           childrennodes.add(i,temp); 
      }
     
      //for (NodeIterator nodeIter = orgNode.getNodes(); nodeIter.hasNext();) {
          // Node child = (Node) nodeIter.next();
      //    
      // cycle through all the children nodes - if a child has more than 4 children - just write the child node with an expand 
      // otherwise - print each node 
      //
      for (Node child : childrennodes) { 
        
        if (child.getNodes().getSize() <= 4) {
          out.write("data.addRow(");
          //out.write ("call to write google data node number 2 = linktarget = 0" ); 
          writeGoogleDataNode(child, null, 0, parentalOverride, out, currentPage, resource, log, "call to write google data node number 2 = linktarget = 0");
          out.write(");\n");
          
          //sorts the org nodes by orgLevel
          // dump our org nodes into an array - ignoring the orginfo, jcr:content nodes 
          //
          //get all the nodes below our child node - call them grandchild nodes  - then sort 'em and cycle through them
          //
          ArrayList<Node> grandchildren = new ArrayList<Node>();
          for (NodeIterator childNodeIter = child.getNodes(); childNodeIter.hasNext();) {
              Node grandchild = (Node) childNodeIter.next();
              //this ignore code was in the for loop below - moved it here - no sense sorting nodes we are going to ignore. 
              if (grandchild.getName().equalsIgnoreCase("orginfo"))
                 continue;
              if (grandchild.getName().equalsIgnoreCase("jcr:content"))
                 continue;  
              grandchildren.add(grandchild);
          }
          //perform the sort 
          for (int i=0; i < grandchildren.size(); i++) {
                Node temp = grandchildren.get(i);
                for (int j=i+1; j < grandchildren.size(); j++) {
                    if (temp.getProperty("orginfo/ORGLEVEL").getString().compareTo(grandchildren.get(j).getProperty("orginfo/ORGLEVEL").getString())>0 ) {
                        temp = grandchildren.get(j);
                    }       
                }
                grandchildren.remove(temp);
                grandchildren.add(i,temp); 
          }
          //    
          // cycle through all the grandchildren nodes - if a grandchild has more than 4 children - just write the grandchild node with an expand 
          // otherwise - print each node 
          //
          for (Node grandchild : grandchildren) {  
            if (grandchild.getNodes().getSize() <= 4) {
              out.write("data.addRow(");
              //out.write ("call to write google data node number 3 = linktarget = 0 - size = "  + grandchild.getNodes().getSize() " ); 
              writeGoogleDataNode(grandchild, null, 0, null, out, currentPage, resource, log, "call to write google data node number 3 = linktarget = 0 - size = "  + grandchild.getNodes().getSize() );
              out.write(");\n");  
              //sorts the org nodes by orgLevel
              // dump our org nodes into an array - ignoring the orginfo, jcr:content nodes 
              ArrayList<Node> greatgrandchildren = new ArrayList<Node>();
              for (NodeIterator grandchildNodeIter = grandchild.getNodes(); grandchildNodeIter.hasNext();) {
                  Node greatgrandchild = (Node) grandchildNodeIter.next();
                  //this ignore code was in the for loop below - moved it here - no sense sorting nodes we are going to ignore. 
                  if (greatgrandchild.getName().equalsIgnoreCase("orginfo"))
                      continue;
                  if (greatgrandchild.getName().equalsIgnoreCase("jcr:content"))
                      continue; 
                  greatgrandchildren.add(greatgrandchild);
              }
              //perform the sort 
              for (int i=0; i < greatgrandchildren.size(); i++) {
                    Node temp = greatgrandchildren.get(i);
                    for (int j=i+1; j < greatgrandchildren.size(); j++) {
                        if (temp.getProperty("orginfo/ORGLEVEL").getString().compareTo(greatgrandchildren.get(j).getProperty("orginfo/ORGLEVEL").getString())>0 ) {
                            temp = greatgrandchildren.get(j);
                        }       
                    }
                    greatgrandchildren.remove(temp);
                    greatgrandchildren.add(i,temp); 
               }
               //    
               // cycle through all the greatgrandchildren nodes - if a greatgrandchild has more than 4 children - just write the greatgrandchild node with an expand 
               // otherwise - print each node 
               //
               for (Node greatgrandchild : greatgrandchildren) {   
              
                    //  added if else structure here - like child and grandchild - checking to see how many babies this great grandchild has - if more than 4 - expand.  
                    if (grandchild.getNodes().getSize() <= 4) {
                        out.write("data.addRow(");
                        writeGoogleDataNode(greatgrandchild, null, 0, null, out, currentPage, resource, log, "call to write google data node number 4 = linktarget = 1 hc - size = "  + grandchild.getNodes().getSize()  );
                        out.write(");\n");
                    } else {
                        // this greatgrandchild node has more than 4 children - just write this node out with an expand
                        out.write("data.addRow(");
                        writeGoogleDataNode(greatgrandchild, null, 1, null, out, currentPage, resource, log, "call to write google data node number 5 = linktarget = 1 hc - size = "  + grandchild.getNodes().getSize()  );
                        out.write(");\n");
                    }
               }
            } else {
              // this grandchild node has more than 4 children - just write this node out with an expand
              out.write("data.addRow(");
              writeGoogleDataNode(grandchild, null, 1, null, out, currentPage, resource, log, "call to write google data node number 6 = linktarget = 1 hc" );
              out.write(");\n");
            }
          }
        } else {
          // this child node has more than 4 children - just write this node out with an expand 
          out.write("data.addRow(");
          writeGoogleDataNode(child, null, 1, parentalOverride, out, currentPage, resource, log, "call to write google data node number 7 = linktarget = 1 hc ");
          out.write(");\n");
        }

      }
      out.write(String.format("%s['id%s'] = data;\n", chartArray, orgNode.getName()));
      // geneate their own tables for the nodes that have more than 4 children (of interest) - no need to sort here 
      // their data will be sorted when they this routine again 
      for (NodeIterator nodeIter = orgNode.getNodes(); nodeIter.hasNext();) {
        Node child = (Node) nodeIter.next();
        if (child.getName().equalsIgnoreCase("orginfo"))
          continue;
        if (child.getName().equalsIgnoreCase("jcr:content"))
          continue;
        if (child.getNodes().getSize() <= 4) {
          for (NodeIterator childNodeIter = child.getNodes(); childNodeIter.hasNext();) {
            Node grandchild = (Node) childNodeIter.next();
            if (grandchild.getName().equalsIgnoreCase("orginfo"))
              continue;
            if (grandchild.getName().equalsIgnoreCase("jcr:content"))
              continue;
            if (grandchild.getNodes().getSize() <= 4) {
              for (NodeIterator grandchildNodeIter = grandchild.getNodes(); grandchildNodeIter.hasNext();) {
                Node greatgrandchild = (Node) grandchildNodeIter.next();
                if (greatgrandchild.getName().equalsIgnoreCase("orginfo"))
                  continue;
                if (greatgrandchild.getName().equalsIgnoreCase("jcr:content"))
                  continue;
                generateGoogleDataTable(greatgrandchild, chartArray, -3, out, currentPage, resource, log);
              }
            } else {
              generateGoogleDataTable(grandchild, chartArray, -2, out, currentPage, resource, log);
            }
          }
        } else {
          generateGoogleDataTable(child, chartArray, -1, out, currentPage, resource, log);
        }
      }

    } catch (Exception e) {
      log.error("error generating GoogleDataTable in departmentinfo", e);
    }
    return "";
  }

  // ******************************************************************************************************
  // *********                       FUNCTION - SPECIAL ORG TYPE CASE                   *******************
  // for ministers, deputies, etc, that actually have nodes under them - add an expand on their chart area.  
  // ******************************************************************************************************
    
  private void specialOrgTypeCase(Node orgNode, String orgDataName, String chartArray, int level, JspWriter out,
      Logger log, Page currentPage, String parentalOverride, Resource resource) throws IOException, RepositoryException {
    out.write("var " + orgDataName + " = new google.visualization.DataTable();\n");
    out.write(orgDataName + ".addColumn('string', 'Name');\n");
    out.write(orgDataName + ".addColumn('string', 'Manager');\n");
    out.write(orgDataName + ".addRow(");
    writeGoogleDataNode(orgNode, null, -1, "organizations", out, currentPage, resource, log, "");
    out.write(");\n");
    
    //sorts the org nodes by orgLevel
    // dump our org nodes into an array - ignoring the orginfo, jcr:content nodes 
    ArrayList<Node> childgroup = new ArrayList<Node>();
    for (NodeIterator cNodeIter = orgNode.getNodes(); cNodeIter.hasNext();) {
        Node child = (Node) cNodeIter.next();
        //this ignore code was in the for loop below - moved it here - no sense sorting nodes we are going to ignore.   
        if (child.getName().equalsIgnoreCase("orginfo"))
            continue;
        if (child.getName().equalsIgnoreCase("jcr:content"))
            continue;
        childgroup.add(child);
    }
    //perform the sort 
    for (int i=0; i < childgroup.size(); i++) {
          Node temp = childgroup.get(i);
          for (int j=i+1; j < childgroup.size(); j++) {
              if (temp.getProperty("orginfo/ORGLEVEL").getString().compareTo(childgroup.get(j).getProperty("orginfo/ORGLEVEL").getString())>0 ) {
                  temp = childgroup.get(j);
              }       
          }
          childgroup.remove(temp);
          childgroup.add(i,temp); 
    }
    for (Node child : childgroup) {  
      out.write(orgDataName + ".addRow(");
      writeGoogleDataNode(child, null, 0, null, out, currentPage, resource, log, "");
      out.write(");\n");

      //sorts the org nodes by orgLevel
      // dump our org nodes into an array - ignoring the orginfo, jcr:content nodes 
      ArrayList<Node> grandchildgroup = new ArrayList<Node>();
      for (NodeIterator gNodeIter = orgNode.getNodes(); gNodeIter.hasNext();) {
          Node grandchild = (Node) gNodeIter.next();
          //this ignore code was in the for loop below - moved it here - no sense sorting nodes we are going to ignore.   
          if (grandchild.getName().equalsIgnoreCase("orginfo"))
              continue;
          if (grandchild.getName().equalsIgnoreCase("jcr:content"))
              continue;
          grandchildgroup.add(grandchild);
      }
      //perform the sort 
      for (int i=0; i < grandchildgroup.size(); i++) {
            Node temp = grandchildgroup.get(i);
            for (int j=i+1; j < grandchildgroup.size(); j++) {
                if (temp.getProperty("orginfo/ORGLEVEL").getString().compareTo(grandchildgroup.get(j).getProperty("orginfo/ORGLEVEL").getString())>0 ) {
                    temp = grandchildgroup.get(j);
                }       
            }
            grandchildgroup.remove(temp);
            grandchildgroup.add(i,temp); 
      }
      for (Node grandchild : grandchildgroup) {  
        if (grandchild.getNodes().getSize() <= 4) {
          out.write(orgDataName + ".addRow(");
          writeGoogleDataNode(grandchild, null, 0, null, out, currentPage, resource, log, "");
          out.write(");\n");
        }
      }
    }
    out.write(String.format("%s['id%s'] = " + orgDataName + ";\n", chartArray, orgNode.getName()));

  }%>