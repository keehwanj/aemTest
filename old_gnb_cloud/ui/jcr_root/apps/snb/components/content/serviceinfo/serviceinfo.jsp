<%--
  ==============================================================================

  GNB Service Information component

  Displays GNB Service description, fees and location in a tabbed format.

--%>
<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="org.apache.commons.lang.StringEscapeUtils"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@page import="org.apache.commons.lang.StringEscapeUtils"%>
<%@page import="com.day.cq.wcm.foundation.DiffService"%>
<%@page import="com.day.cq.wcm.foundation.DiffInfo"%>
<%@page import="com.day.cq.wcm.foundation.TextFormat"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>

<%@page import="java.text.NumberFormat"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.text.DateFormat"%>

<%@page import="java.util.Comparator"%>
<%@page import="java.util.TreeMap"%>
<%@page import="com.t4g.cnb.utils.KeyComparator"%>

<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>

<%!protected String getCleanPropertyValue(Node node, String key, Logger log) {
        String returnValue = "key";
        try {
            if (node.hasProperty(key)) {
                returnValue = StringEscapeUtils.escapeHtml(node.getProperty(key).getString());
                returnValue = returnValue.replaceAll("\n", "<br>\n");
                returnValue = StringEscapeUtils.unescapeHtml(returnValue);
            }
        } catch (Exception e) {
            log.error("error getting value for [" + key + "] in serviceinfo", e);
        }
        return returnValue;
}%>
<%
  String lang = "fr";
  String langSuffix = "FRE";
  String langSuffix2 = "FRE";
  Locale locale = currentPage.getLanguage(true);
  if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    langSuffix = "";
    langSuffix2 = "ENG";
  }
%>

<cq:setContentBundle language="<%=lang%>" />
<%
  final String SERVICEFEES = "fees";
  final String SERVICEFEESHISTORY = "fees_history";
  final String SERVICEFEESREVENUE = "fees_revenue";
  final String SERVICEFORMS = "forms";
  final String SERVICELINKS = "related_links";
  final String ONLINETRANSACTIONS = "online_transactions";
  final String SERVICECONTACTS = "contacts";
  final String SERVICEACTS = "acts";

  Node serviceDataNode = null;
  String orgRendererPage = "/content/gnb/en/orgdetails";
  String serviceDataPage = "/content/data/services";
  //START of first try	
  try {
    Page configurationPage = pageManager.getPage("/content/gnbconfig");

    // Get the services node based on services id and services path
    String servicesId = properties.get("servicesId", "none");
    if (servicesId.equalsIgnoreCase("none")) {
      String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
      servicesId = selectors[0];
    }
    serviceDataPage = (String) configurationPage.getProperties().get("serviceDataPage");
    String itemPath = String.format("%s/%s/serviceinfo/", serviceDataPage, servicesId);
    orgRendererPage = (String) configurationPage.getProperties().get("organisationRendererPage_" + lang);
    serviceDataNode = WCMUtils.getNode(resourceResolver.getResource(itemPath));
  }//END of first try
  //START of first catch	
  catch (Exception e) {
    log.error("service info page unable to get data node", e);
  }//END of first catch	

  //START of outer try	
  try {
    //START of if (serviceDataNode != null)
    if (serviceDataNode != null) {
      // Get the localized version of the node property names
      String SERVICENAME = "SERVICENAME" + langSuffix;
      String OTHERSERVICEID = "OTHERSERVICEID";
      String SERVICESLINKSURL = "SERVICESLINKSURL" + langSuffix;
      String SERVICESLINKSDESCRIPTION = "SERVICESLINKSDESCRIPTION" + langSuffix;
      String SERVICESONLINEPAYMENT = "SERVICESONLINEPAYMENT" + langSuffix;
      String SERVICESONLINEPAYMENTLINK = "SERVICESONLINEPAYMENTLINK" + langSuffix;
      String FORMNAME = "FORMNAME" + langSuffix;

      //new updating(2020-8-5)
      String formorder = "formorder";

      String FORMURL = "FORMURL" + langSuffix;
      String SERVICEACT = "SERVICEACT" + langSuffix2;
      String SERVICEACTPDF = "SERVICEACTPDF" + langSuffix2;
      String SERVICEACTURL = "SERVICEACTURL" + langSuffix2;
      String REGULATIONS = "REGULATIONS" + langSuffix2;
      String REGULATIONSNUM = "REGULATIONSNUM";
      String REGULATIONSPDF = "REGULATIONSPDF" + langSuffix2;
      String REGULATIONSURL = "REGULATIONSURL" + langSuffix2;
      String SERVICEOVERVIEW = "SERVICEOVERVIEW" + langSuffix;
      String SERVICEELIGIBILITY = "SERVICEELIGIBILITY" + langSuffix;
      String SERVICEDESC = "SERVICEDESC" + langSuffix;
      String SERVICEORGS = "ORGANIZATIONS";
      String SNBOFFERED = "SNBOFFERED";
      String DEPTID = "DEPTID";
      String SERVICESLINKSORDER = "SERVICESLINKSORDER";        

      String FEENAME = "FEENAME" + langSuffix;
      if (lang.equalsIgnoreCase("en"))
        FEENAME = "FEENAMEENG";
      String FEERATE = "FEERATE";
      String FEELEVEL = "FEELEVEL";
      String FEEMODIFICATIONDATE = "FEEMODIFICATIONDATE";
      String FEEDATEOFREVISION = "FEEDATEOFREVISION";

      //START of if (serviceDataNode.hasProperty(SERVICENAME))  
      if (serviceDataNode.hasProperty(SERVICENAME)) {
        // START of div  
        out.write(String.format("<div class=\"pageHeader\"><h1>%s</h1>", serviceDataNode.getProperty(SERVICENAME).getString()));
        String link = null;

        //START of if if (serviceDataNode.hasProperty(DEPTID))   
        if (serviceDataNode.hasProperty(DEPTID)) {
          String deptOrgPath = Utils.getDepartmentPath(serviceDataNode.getProperty(DEPTID).getString(), resource);
          link = Utils.getQuicklink(deptOrgPath, currentPage, resource);
            link=link;
        }
        //END of if if (serviceDataNode.hasProperty(DEPTID))

		//START of if (Utils.isNotEmpty(link))
        if (Utils.isNotEmpty(link)) {
          out.write("<h3 id='departmentid'>");
          link=link.replace("/content/gnb/", "https://www2.gnb.ca/content/gnb/");  
          out.write(link);
          out.write("</h3>");
        }
        //END of if (Utils.isNotEmpty(link))  

        out.write("</div>");// END of div
		out.write("<div class=\"clearfloat\"></div>");          

      }
      //END of if (serviceDataNode.hasProperty(SERVICENAME))
      %>

<!--START of row-->        
<div class="row">
	<!--START of col-sm-8-->              
	<div class="col-sm-8">

<%    //START of service_tabs
	  out.write("<!--START of service_tabs-->");  
      out.write("<div id=\"service_tabs\">");

      out.write("<!--START of ul-->");    
      out.write("<ul  id=\"myTab\" class=\"nav nav-tabs nav-justified\">");        
      out.write(String.format("<li class=\"active\"><a data-toggle=\"tab\" href=\"#serviceDescription\"><span>%s</span></a></li>",LocaleSupport.getLocalizedMessage(pageContext,"descriptionText")));
      if (serviceDataNode.hasNode(SERVICEFEES) && serviceDataNode.getNode(SERVICEFEES).hasNodes())
        out.write(String.format("<li><a data-toggle=\"tab\" href=\"#serviceFees\"><span>%s</span></a></li>", LocaleSupport.getLocalizedMessage(pageContext, "feesText")));
      if ((serviceDataNode.hasNode(SERVICECONTACTS) && serviceDataNode.getNode(SERVICECONTACTS).hasNodes())
          || (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("S"))
          || (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("P")))
        out.write(String.format("<li><a data-toggle=\"tab\" href=\"#serviceLocation\"><span>%s</span></a></li>", LocaleSupport.getLocalizedMessage(pageContext, "svclocationText")));
      out.write("</ul>");
      out.write("<!--END of ul-->");      

      // Services Description Tab


%>

<%
out.write("<div class=\"clearfloat\"></div></div>");
out.write("<!--END of service_tabs-->");          
//END of service_tabs
%>


<!--START of tab-content-->
<div class="tab-content">
  <!--START of serviceDescription-->  
  <div id="serviceDescription" class="tab-pane fade in active">
      <%	  
      //out.write("<!--START of serviceDescription-->");  
      //out.write("<div id=\"serviceDescription\">");
      if (serviceDataNode.hasProperty(SERVICEOVERVIEW)) {
        out.write("<div class=\"item_services\">");
        out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "overviewHeading")));
        out.write(String.format("<p>%s</p></div>", getCleanPropertyValue(serviceDataNode, SERVICEOVERVIEW, log)));
      }

      if (serviceDataNode.hasProperty(SERVICEELIGIBILITY)) {
        out.write("<div class=\"item_services\">");
        out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "eligibilityHeading")));
        out.write(String.format("<p>%s</p></div>", getCleanPropertyValue(serviceDataNode, SERVICEELIGIBILITY, log)));
      }

      if (serviceDataNode.hasProperty(SERVICEDESC)) {
        out.write("<div class=\"item_services\">");
        out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "descriptionHeading")));
        out.write(String.format("<p>%s</p></div>", getCleanPropertyValue(serviceDataNode, SERVICEDESC, log)));
      }
      //out.write("</div>");
      //out.write("<!--END of serviceDescription-->");     
%>      
  </div>
  <!--END of serviceDescription-->  


  <!--START of serviceFees-->    
  <div id="serviceFees" class="tab-pane fade item_services">
  <% 
    //START of if (serviceDataNode.hasNode(SERVICEFEES) && serviceDataNode.getNode(SERVICEFEES).hasNodes())   
    if (serviceDataNode.hasNode(SERVICEFEES) && serviceDataNode.getNode(SERVICEFEES).hasNodes()) {
        Node feesNode;

        //START of try-catch  
        try {
            if (serviceDataNode.hasNode(SERVICEFEESREVENUE) && serviceDataNode.getNode(SERVICEFEESREVENUE).hasNodes()) {
              out.write(String.format("<h2>%s</h2><div class=\"clearfloat\"></div>", LocaleSupport.getLocalizedMessage(pageContext, "feeHistoryMessage")));
              feesNode = serviceDataNode.getNode(SERVICEFEESREVENUE);
              out.write(String.format("<p>%s", LocaleSupport.getLocalizedMessage(pageContext, "feesReviewMessage")));

              String RevenueEstimates = "RevenueEstimatesFre";
              String RevenueEstimatesFile = "RevenueEstimatesFileFre";
              String RevenueEstimatesFile_old = "RevenueEstimatesFileFre_old";   
              if (lang.equalsIgnoreCase("en")) {
                RevenueEstimates = "RevenueEstimatesEng";
                RevenueEstimatesFile = "RevenueEstimatesFileEng";
                RevenueEstimatesFile_old = "RevenueEstimatesFileEng_old";    
              }
              for (NodeIterator nodeIter = feesNode.getNodes(); nodeIter.hasNext();) {
                Node childNode = (Node) nodeIter.next();
                String strFilename = null;
                String linkText = null;
                if (childNode.hasProperty(RevenueEstimatesFile) && Utils.isNotEmpty(childNode.getProperty(RevenueEstimatesFile).getString())) {
                    //strFilename = linkText = URLEncoder.encode(childNode.getProperty(RevenueEstimatesFile).getString(), "UTF-8");
                    strFilename = linkText = childNode.getProperty(RevenueEstimatesFile).getString();
                    strFilename = linkText = strFilename.replaceAll("[+]", "%20");
                }

                if (childNode.hasProperty(RevenueEstimatesFile_old) && Utils.isNotEmpty(childNode.getProperty(RevenueEstimatesFile_old).getString())) {
                    //strFilename = linkText = URLEncoder.encode(childNode.getProperty(RevenueEstimatesFile).getString(), "UTF-8");
                    //strFilename = linkText = childNode.getProperty(RevenueEstimatesFile).getString();
                    //strFilename = linkText = strFilename.replaceAll("[+]", "%20");
                    linkText = childNode.getProperty(RevenueEstimatesFile_old).getString();
                    linkText = strFilename.replaceAll("[+]", "%20");

                }  

                if (childNode.hasProperty(RevenueEstimates) && Utils.isNotEmpty(childNode.getProperty(RevenueEstimates).getString())) {
                  linkText = childNode.getProperty(RevenueEstimates).getString();
                }

                if (childNode.hasProperty(RevenueEstimatesFile_old) && Utils.isNotEmpty(childNode.getProperty(RevenueEstimatesFile_old).getString())) {
                  linkText = childNode.getProperty(RevenueEstimatesFile_old).getString();
                }                     
                  //out.write (strFilename ); 
                  // out.write(String.format("<br /><a href=\"http://app.infoaa.7700.gnb.ca/gnb/PDF/FeesPDF/%s\" title=\"%s\">%s</a>", strFilename, linkText.replaceAll("%20", " "), linkText.replaceAll("%20", " ")));
                out.write(String.format("<br /><a href=\"%s\">%s</a>", strFilename, linkText.replaceAll("%20", " "), linkText.replaceAll("%20", " ")));  
                if (nodeIter.hasNext())
                  out.write(", ");
              }

              out.write("</p><div class=\"clearfloat\"></div>");
			  out.write("<div class=\"spacer\"></div>");  
            } //If SERVICEFEESREVENUE

          } catch (Exception ex) {
            out.write("ERROR");
            out.write("exception" + ex.getMessage());
          }

          //END of try-catch

        //START of try-catch
        try {
            out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "feesHeading")));
            out.write(String.format("<p>%s</p><div class=\"clearfloat\"></div>", LocaleSupport.getLocalizedMessage(pageContext, "feesMessage")));
            out.write("<div class=\"spacer\"></div>");  
		  //START of table
		  out.write("<!--START of table-->");  

		  out.write("<div class=\"table-responsive\">");
          out.write("<table class=\"table table-hover\"><tr>");
          out.write(String.format("<th colspan=\"2\" scope=\"col\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesDescription")));
          out.write(String.format("<th scope=\"col\" nowrap>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesRate")));
          out.write(String.format("<th scope=\"col\" nowrap class=\"feeDate\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesDate")));
          out.write("</tr>");
          feesNode = serviceDataNode.getNode(SERVICEFEES);
          String strDateFormatted = ""; 
          //START of for loop  
          for (NodeIterator nodeIter = feesNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            if (childNode.hasProperty(FEENAME)) {
              String strRate = childNode.hasProperty(FEERATE) ? childNode.getProperty(FEERATE).getString()  : "&nbsp;";
              if(lang.equalsIgnoreCase("fr")) {
                strRate = strRate.replace(",", " ").replace(".",",");
              }
              String desc = childNode.getProperty(FEENAME).getString();
              String feeLevel = childNode.getProperty(FEELEVEL).getString();
                //String strDate = childNode.getProperty(FEEMODIFICATIONDATE).getString();
              String strDate = childNode.getProperty(FEEDATEOFREVISION).getString();
              try {
                DateFormat df = new SimpleDateFormat("yyyy-mm-dd");
                Date today = df.parse(strDate);
                strDate = df.format(today);

              } catch (Exception ex) {

              }
              if ( strDate.length() > 0 ) {
                   strDateFormatted = strDate.substring(6) + "-" + strDate.substring(0,2) + "-" + strDate.substring(3,5);
              } 
              if (strRate.equalsIgnoreCase("&nbsp;"))
                strDate = "&nbsp;";
              // Lower level fees should be indented. Check the fee level
              // 01.02 would be indented under 01.
              // Replication should have sorted them already so just check length
              String feeItem;

              if (feeLevel.length() < 3) {
                feeItem = String.format(locale, "<td colspan=\"2\"><b>%s</b></td><td style=\"text-align: right;\" nowrap>%s</td><td class=\"feeDate\">%s</td>", desc, strRate, strDateFormatted);
              } else {
                feeItem = String.format(locale, "<td>&nbsp;&nbsp;</td><td>%s</td><td style=\"text-align: right;\" nowrap>%s</td><td class=\"feeDate\" >%s</td>", desc, strRate, strDateFormatted);
              }

              out.write(String.format("<tr valign=\"top\" >%s</tr>", feeItem));
            }
          }
          //END of for loop  
          out.write("</table>");
          out.write("</div>");
          out.write("<!--END of table-->");  
          //END of table

        } catch (Exception ex) {
          log.error("exception" + ex.getMessage());
        }
        //END of try-catch  


        //START of if (serviceDataNode.hasNode(SERVICEFEESHISTORY))
        if (serviceDataNode.hasNode(SERVICEFEESHISTORY)) {
          FEENAME = "FeeNameFre";
          if (lang.equalsIgnoreCase("en"))
            FEENAME = "FeeNameEng";
          FEERATE = "FeeRate";
          FEELEVEL = "FeeLevel";
          FEEMODIFICATIONDATE = "FeeModificationDate";
          FEEDATEOFREVISION = "FeeDateOfRevision";

          out.write(String.format("<p><a id=\"feeHistoryToggle\" style=\"cursor:pointer;\">%s</a></p><div class=\"clearfloat\"></div>", LocaleSupport.getLocalizedMessage(pageContext, "feeHistoryMessage")));
          //START of <div id=feeHistory>  
          out.write("<div id=\"feeHistory\">");
          try {
             //Inserted "if condition" by Keehwan             
             feesNode = serviceDataNode.getNode(SERVICEFEESHISTORY);

			 //START of if FeesNode!=null
             if (feesNode != null) {
              out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "feeHistoryHeading")));
			  out.write("<!--START of table-->");  
			  out.write("<div class=\"table-responsive\">");
              //START of table   
              out.write("<table class=\"table table-hover\"><tr>");
              out.write(String.format("<th colspan=\"2\" scope=\"col\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesDescription")));
              out.write(String.format("<th scope=\"col\" nowrap>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesRate")));
              out.write(String.format("<th scope=\"col\" nowrap class=\"feeDate\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesDate")));
              out.write("</tr>");
              //START of for loop
              String strDateFormatted = ""; 
              for (NodeIterator nodeIter = feesNode.getNodes(); nodeIter.hasNext();) {
                Node childNode = (Node) nodeIter.next();
                //START of if (childNode.hasProperty(FEENAME))
                if (childNode.hasProperty(FEENAME)) {
                  String strRate = "&nbsp;";
                  if (childNode.hasProperty(FEERATE)) {
                    strRate = childNode.getProperty(FEERATE).getString();
                    if(lang.equalsIgnoreCase("fr")) {
                      strRate = strRate.replace(",", " ").replace(".",",");
                    }
                  }
                  String desc = childNode.getProperty(FEENAME).getString();
                  String feeLevel = childNode.getProperty(FEELEVEL).getString();
                    //String strDate = childNode.getProperty(FEEMODIFICATIONDATE).getString();
                  String strDate = childNode.getProperty(FEEDATEOFREVISION).getString();
                  if ( strDate.length() > 0 ) {
                       strDateFormatted = strDate.substring(6) + "-" + strDate.substring(0,2) + "-" + strDate.substring(3,5);
                  } 
                  try {
                    DateFormat df = new SimpleDateFormat("yyyy-mm-dd");
                    Date today = df.parse(strDate);
                    strDate = df.format(today);

                  } catch (Exception ex) {

                  }
                  if (strRate.equalsIgnoreCase("&nbsp;"))
                    strDate = "&nbsp;";
                  // Lower level fees should be indented. Check the fee level
                  // 01.02 would be indented under 01.
                  // Replication should have sorted them already so just check length
                  String feeItem;

                  if (feeLevel.length() < 3) {
                    feeItem = String.format(locale, "<td colspan=\"2\"><b>%s</b></td><td align=\"right\" nowrap>%s</td><td class=\"feeDate\">%s</td>", desc, strRate, strDateFormatted);
                  } else {
                    feeItem = String.format(locale, "<td>&nbsp;&nbsp;</td><td>%s</td><td align=\"right\" nowrap>%s</td><td class=\"feeDate\">%s</td>", desc, strRate, strDateFormatted);
                  }
                  out.write(String.format("<tr valign=\"top\" >%s</tr>", feeItem));
                }
                //END of if (childNode.hasProperty(FEENAME))  
              }
              //END of for loop
              out.write("</table>");
              //END of table   
              out.write("</div>");
              out.write("<!--END of table-->");      

            } //END of if FeesNode!=null
          } catch (Exception ex) {
            log.error("exception" + ex.getMessage());
          }
          out.write("</div>");
          //END of <div id=feeHistory>
        }
        //END of if (serviceDataNode.hasNode(SERVICEFEESHISTORY))  

    }          
    //END of if (serviceDataNode.hasNode(SERVICEFEES) && serviceDataNode.getNode(SERVICEFEES).hasNodes()) 

%>
  </div>   
  <!--END of serviceFees-->    
  <!--UPTO HERE.... DONE-->  


  <!--START of serviceLocation-->    
  <div id="serviceLocation" class="tab-pane fade">
      <% //START of outer if condition
      if ((serviceDataNode.hasNode(SERVICECONTACTS) && serviceDataNode.getNode(SERVICECONTACTS).hasNodes()) 
          || (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("S")) 
          ||(serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("P")) ) {

        TreeMap<String, String> sortedContacts = new TreeMap<String, String>(new KeyComparator());
        TreeMap<String, TreeMap<String, String>> sortedGroups = new TreeMap<String, TreeMap<String, String>>(new KeyComparator());
        String groupKey = "GroupNameEng";
        if(lang.equals("fr"))groupKey = "GroupNameFre";
        if(serviceDataNode.hasNode(SERVICECONTACTS)) {
          Node contactsNode = serviceDataNode.getNode(SERVICECONTACTS);
            for (NodeIterator nodeIter = contactsNode.getNodes(); nodeIter.hasNext();) {
              Node childNode = (Node) nodeIter.next();
              String key = "zz999999";
              String path = "";
              if (childNode.hasProperty("ContactType") && "1".equals(childNode.getProperty("ContactType").getString()) && childNode.hasProperty("ORGID") && Utils.isNotEmpty(childNode.getProperty("ORGID").getString())) {
                path = Utils.getOrgPath(childNode.getProperty("ORGID").getString(), resource, currentPage);
                if (Utils.isNotEmpty(path)) {
                  Node assetNode = resource.getResourceResolver().getResource(path + "/orginfo").adaptTo(Node.class);
                  if (assetNode != null && assetNode.hasProperty("ORGNAME" + langSuffix2) && Utils.isNotEmpty(assetNode.getProperty("ORGNAME" + langSuffix2).getString())) {
                    key = assetNode.getProperty("ORGNAME" + langSuffix2).getString() + path;
                  }
                  sortedContacts.put(key, path);
                }
              }

              if (childNode.hasProperty("ContactType") && "2".equals(childNode.getProperty("ContactType").getString()) && childNode.hasProperty("GroupID") && Utils.isNotEmpty(childNode.getProperty("GroupID").getString()) && childNode.hasProperty(groupKey) && Utils.isNotEmpty(childNode.getProperty(groupKey).getString())) {
                TreeMap<String, String> sortedGroupContacts = new TreeMap<String, String>(new KeyComparator());
                //Search for orgs with the given GroupId
                SearchResult result = null;
                QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
                Map<String, String> map = new HashMap<String, String>();
                Session session = resource.getResourceResolver().adaptTo(Session.class);
                String orgData = Utils.getConfigurationProperty("organisationDataPage",pageManager);
                //map.put("path", orgData + "/*/.");
                map.put("path", orgData);
                map.put("1_property","orginfo/GROUPS");
                map.put("1_property.value", childNode.getProperty("GroupID").getString());
                //map.put("nodename", "orginfo");
                map.put("orderby", "@DEPTNAME" + langSuffix2 + ",@ORGNAME" + langSuffix2);
                Query query = builder.createQuery(PredicateGroup.create(map), session);
                query.setHitsPerPage(999);
                result = query.getResult();

                for (Hit hit : result.getHits()) {
                  String groupContactKey = "zz999999";
                  Node assetNode = resource.getResourceResolver().getResource(hit.getPath() + "/orginfo").adaptTo(Node.class);
                  if (assetNode != null && assetNode.hasProperty("ORGNAME" + langSuffix2) && Utils.isNotEmpty(assetNode.getProperty("ORGNAME" + langSuffix2).getString())) {
                    groupContactKey = assetNode.getProperty("ORGNAME" + langSuffix2).getString() + hit.getPath();
                  }            

                  sortedGroupContacts.put(groupContactKey, hit.getPath());
                }

                sortedGroups.put(childNode.getProperty(groupKey).getString(),sortedGroupContacts);
              }
            }
        }%>


<!--START of table-->
<div class="table-responsive">
<table id="serviceLocation" class="table table-hover">
    <tr>
        <th><fmt:message key="contactText" /></th>
        <th><fmt:message key="emailText" /></th>
        <th><fmt:message key="locationHeading" /></th>
    </tr>

    <%
      WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
      String orgBasePath = Utils.getConfigurationProperty("organisationDataPage", pageManager);
      if (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("S")) {
        %>
    <tr>
        <td><a href="<fmt:message key="snbContactURL"/>"><fmt:message key="snbSContactLabel" /></a></td>
        <td><a href="mailto:<fmt:message key="snbEmail"/>"><fmt:message key="snbEmail" /></a></td>
        <td></td>
    </tr>
    <%
      }
      if (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("P")) {
        %>
    <tr>
        <td><a href="<fmt:message key="snbContactURL"/>"><fmt:message key="snbPContactLabel" /></a></td>
        <td><a href="mailto:<fmt:message key="snbEmail"/>"><fmt:message key="snbEmail" /></a></td>
        <td></td>
    </tr>
    <%
      }
      try {
        for (String path : sortedContacts.values()) {
          %><sling:include path="<%=path + ".snb_searchresult_embeded_narrow.html" %>" /><%
        }

      } finally {
        imcludemode.toRequest(request);
      }
      try {
        for (String key : sortedGroups.keySet()) {
          TreeMap<String, String> sortedGroupContacts = sortedGroups.get(key);
          if(sortedGroupContacts.size()>0 ) {
            out.write(String.format("<tr><td colspan=\"3\"><b>%s</b></td></tr>",key));
              for (String path : sortedGroupContacts.values()) {
                %><sling:include path="<%=path + ".snb_searchresult_embeded_narrow.html" %>" /><%
              }
          }
        }        
      } finally {
        imcludemode.toRequest(request);
      }
%>
	</table>
    </div>
	<!--END of table-->     

      <%}//END of outer if condition 
        %> 
  </div>   
  <!--END of serviceLocation-->    
</div>
<!--END of tab-content-->


	</div>
    <!--END of col-sm-8-->    

    <!--START of col-sm-4-->        
    <div class="col-sm-4">
	<%
     // Start the sidebar
	  out.write("<!--START of sidebar-->");
      out.write("<div id=\"sidebar\" >");



      // START of Online transactions
      //START of if (serviceDataNode.hasNode(ONLINETRANSACTIONS))   
      if (serviceDataNode.hasNode(ONLINETRANSACTIONS)) {
        Node txnsNode = serviceDataNode.getNode(ONLINETRANSACTIONS);
        //START of if (txnsNode.hasNodes()) 
        if (txnsNode.hasNodes()) {
          String serviceImg = "";
          String serviceByline = "";
		  out.write("<!--START of box shaded-->"); 
          out.write("<div class=\"box shaded\" style=\"padding-top:0px;\">");
          //START of if
          if (serviceDataNode.hasProperty(SNBOFFERED) && (serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("S") || serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("P"))) {
            	serviceImg = String.format("<img class=\"img-thumbnail serviceicon\" src=\"%s/etc/designs/gnb/images/SNB-online.jpg\" alt=\"%s\" /> ", request.getContextPath(), LocaleSupport.getLocalizedMessage(pageContext, "saveTimeText"));
				// cnb no longer wants this paragraph 
            	//serviceByline = String.format("<p class=\"subheader\">%s</p>", LocaleSupport.getLocalizedMessage(pageContext, "visitOnlineText"));

            	out.write(serviceImg);
            	out.write("<div class=\"text_wrapper\">");

            	// cnb wants the text but not the a href 
                //out.write(String.format("<h1><span class=\"more_link_blue\"><a href=\"%s\">%s</a></span></h1>", LocaleSupport.getLocalizedMessage(pageContext, "saveTimeLink"), LocaleSupport.getLocalizedMessage(pageContext, "saveTimeText")));
            	out.write(String.format("<h1><span class=\"more_link_blue\">%s</span></h1>", LocaleSupport.getLocalizedMessage(pageContext, "saveTimeText")));
            	// cnb  no longer wants this paragraph - nov 2017
            	//out.write(serviceByline);
              	out.write ("<br>"); 

          } else {
              	serviceImg = String.format("<img class=\"img-thumbnail serviceicon\" src=\"%s/etc/designs/gnb-bootstrap/clientlibs/images/GNBonline-feature.jpg\" alt=\"%s\" /> ", request.getContextPath(), LocaleSupport.getLocalizedMessage(pageContext, "doItOnlineText"));
                out.write(serviceImg);
            	out.write("<div class=\"text_wrapper\">");
            	out.write(String.format("<h1><span class=\"more_link_blue\">%s</span></h1>", LocaleSupport.getLocalizedMessage(pageContext, "doItOnlineText")));
          }
          //END of if

          out.write("<ul class=\"formsLinks\">");
          TreeMap<String, Node> sorted_map = new TreeMap<String, Node>(new KeyComparator());
          //START of for loop
          for (NodeIterator nodeIter = txnsNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            String key = "zz999999";
            if (childNode.hasProperty(SERVICESONLINEPAYMENT) && Utils.isNotEmpty(childNode.getProperty(SERVICESONLINEPAYMENT).getString())) {
              key = childNode.getProperty(SERVICESONLINEPAYMENT).getString();
            }
            sorted_map.put(key, childNode);
          }
		  //END of for loop
		  //START of for loop
          for (Node childNode : sorted_map.values()) {
            //START of if  
            if ((childNode.hasProperty(SERVICESONLINEPAYMENT)) && (childNode.hasProperty(SERVICESONLINEPAYMENTLINK))) {
              String navItem = String.format("<li><a  href=\"%s\" title=\"%s\">%s</a><span class=\"pdf\"></span></li>", childNode.getProperty(SERVICESONLINEPAYMENTLINK).getString(), childNode.getProperty(SERVICESONLINEPAYMENT).getString(), childNode.getProperty(
                  SERVICESONLINEPAYMENT).getString());
              out.write(navItem);
            }
            //END of if
          }
          //END of for loop  
          out.write("</ul></div></div><br />");
		  out.write("<!--END of box shaded-->"); 
        }
        //END of if (txnsNode.hasNodes())   
      }
      //END of if (serviceDataNode.hasNode(ONLINETRANSACTIONS))  
	  //END of Online transactions


      // START of Forms
      if (serviceDataNode.hasNode(SERVICEFORMS)) {
        Node formsNode = serviceDataNode.getNode(SERVICEFORMS);
        //START of if  
        if (formsNode.hasNodes()) {
          out.write("<!--START of sectiontitle-->");   
          out.write(String.format("<div class=\"sectiontitle\"><div class=\"normal\"><div class=\"rightcurve\">&nbsp;</div><div class=\"leftcurve\"><h3 class=\"title\">%s</h3></div></div></div>", LocaleSupport.getLocalizedMessage(pageContext, "formsHeading2")));
          out.write("<!--END of sectiontitle-->");     

		  out.write("<!--START of class_box shaded-->"); 
          out.write("<div class=\"box shaded\">");
          out.write("<div class=\"text_wrapper\">");
          out.write("<p class=\"subheader\">");
          out.write(LocaleSupport.getLocalizedMessage(pageContext,"formsText").replaceAll("\\[link\\]",LocaleSupport.getLocalizedMessage(pageContext,"adobeLink")));
          out.write("</p>");
          out.write("<ul class=\"formsLinks\">");

          TreeMap<String, Node> sorted_map = new TreeMap<String, Node>(new KeyComparator());
		  //START of for loop  
          for (NodeIterator nodeIter = formsNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            String key = "zz999999";
            if (childNode.hasProperty(FORMNAME) && Utils.isNotEmpty(childNode.getProperty(FORMNAME).getString())) {
              key = childNode.getProperty(FORMNAME).getString();

              //new updating(2020-8-5)
              if (childNode.hasProperty(formorder) && Utils.isNotEmpty(childNode.getProperty(formorder).getString())) {
              	key=childNode.getProperty(formorder).getString()+key;
              }
              //new updating(2020-8-5)  
                
            }
            sorted_map.put(key, childNode);
          }
          //END of for loop  
		  //START of for loop
          for (Node childNode : sorted_map.values()) {
            //START of if  
            if ((childNode.hasProperty(FORMNAME)) && (childNode.hasProperty(FORMURL))) {
              String url = childNode.getProperty(FORMURL).getString();
              String desc = childNode.getProperty(FORMNAME).getString();

              String docType = "";
              if (url.endsWith(".pdf")) {
                docType = "PDF";
              } else if (url.endsWith(".doc")) {
                docType = "DOC";
              }
              String navItem = String.format("<li><a href=\"%s\" title=\"%s\">%s</a><span class=\"download_spec\">%s</span></li>", url, desc, desc, docType);
              out.write(navItem);
            }
            //END of if  
          }
          //END of for loop
          out.write("</ul></div></div>");
          out.write("<!--END of class_box shaded-->");   
        }
		//END of if
      }
	  // END of Forms

      // START of Related Links - only show this section if there are links
      //START of if (serviceDataNode.hasNode(SERVICELINKS))  
      if (serviceDataNode.hasNode(SERVICELINKS)) {
        Node linksNode = serviceDataNode.getNode(SERVICELINKS);
		//START of if (linksNode.hasNodes())
        if (linksNode.hasNodes()) {
		  out.write("<!--START of sectiontitle-->");   
          out.write(String.format("<div class=\"sectiontitle\"><div class=\"links\"><div class=\"rightcurve\">&nbsp;</div><div class=\"leftcurve\"><h3 class=\"title\">%s</h3></div></div></div>", LocaleSupport.getLocalizedMessage(pageContext, "linksHeading")));
		  out.write("<!--END of sectiontitle-->");   

          TreeMap<String, Node> sorted_map = new TreeMap<String, Node>(new KeyComparator());

          //START of of for loop  
          for (NodeIterator nodeIter = linksNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            String key = "zz999999";
			String order_val=""; 
            if (childNode.hasProperty(SERVICESLINKSORDER) && Utils.isNotEmpty(childNode.getProperty(SERVICESLINKSORDER).getString())) {
            	order_val = childNode.getProperty(SERVICESLINKSORDER).getString();              
            }

			//START of if
            if (childNode.hasProperty(SERVICESLINKSDESCRIPTION) && Utils.isNotEmpty(childNode.getProperty(SERVICESLINKSDESCRIPTION).getString())) {
              key =order_val+""+childNode.getProperty(SERVICESLINKSDESCRIPTION).getString();
            } else if (childNode.hasProperty(OTHERSERVICEID) && Utils.isNotEmpty(childNode.getProperty(OTHERSERVICEID).getString())) {
              Resource r = slingRequest.getResourceResolver().getResource(serviceDataPage + "/" + childNode.getProperty(OTHERSERVICEID).getString());
              if (r!=null) {
                Node otherService = r.adaptTo(Node.class);
                if (otherService.hasProperty("serviceinfo/"+SERVICENAME+"_STRIP")) {
                  key =order_val+""+otherService.getProperty("serviceinfo/SERVICENAME"+langSuffix).getString();
                }
                else {
                 // changed by CET - Sept7/11 - Diane wants all these sorted as one group  - comment out old 
                 // key = "zy" +childNode.getProperty(OTHERSERVICEID).getString();
                 key =order_val+""+childNode.getProperty(OTHERSERVICEID).getString();
                }
              }
              else {
                // changed by CET - Sept7/11 - Diane wants all these sorted as one group  - comment out old 
                // key = "zz" + childNode.getProperty(OTHERSERVICEID).getString();
                key = order_val+""+childNode.getProperty(OTHERSERVICEID).getString();
              }
            }
            //END of if  
            //out.write(key+"<br/>");
            sorted_map.put(key, childNode);
          }
          //END of for loop

		  out.write("<!--START of class box shaded-->");   
          out.write("<ul class=\"box shaded\">");

          //START of for (Node childNode : sorted_map.values())  
          for (Node childNode : sorted_map.values()) {
            if (childNode.hasProperty(SERVICESLINKSURL) && childNode.hasProperty(SERVICESLINKSDESCRIPTION) && Utils.isNotEmpty(childNode.getProperty(SERVICESLINKSURL).getString())
                && Utils.isNotEmpty(childNode.getProperty(SERVICESLINKSDESCRIPTION).getString())) {
              String navItem = String.format("<li><a href=\"%1s\" title=\"%2s\">%3s</a></li>",childNode.getProperty(SERVICESLINKSURL).getString(),childNode.getProperty(SERVICESLINKSDESCRIPTION).getString(),childNode.getProperty(SERVICESLINKSDESCRIPTION).getString());
                out.write(navItem);
            } else if (childNode.hasProperty(OTHERSERVICEID) && Utils.isNotEmpty(childNode.getProperty(OTHERSERVICEID).getString())) {
              Resource r = slingRequest.getResourceResolver().getResource(serviceDataPage + "/" + childNode.getProperty(OTHERSERVICEID).getString());



               if (r != null) {
                //****this is the part needed to be fixed***  
				Node node = r.adaptTo(Node.class);
                Node serviceDataNode_otherserviceid = node.getNode("serviceinfo");
               	String title = "";
                String path = "";  
                String titleNew = "";  
                if (serviceDataNode_otherserviceid.hasProperty("SERVICENAME"+langSuffix)) {
					title 			= serviceDataNode_otherserviceid.getProperty("SERVICENAME"+langSuffix).getString();
					String titleUnder = title.replace(" ","_");
					titleUnder = titleUnder.replace("’","_");  
					titleUnder = titleUnder.replace("'","_");  
					titleUnder = titleUnder.replace("’","_");
					titleUnder = titleUnder.replace("/","");
					//replace the accented characters with the html equiv. 
					titleUnder = titleUnder.replace("\u00C9","&#201;"); 
					titleUnder = titleUnder.replace("\u00E9","&#233;"); 
                    titleUnder = titleUnder.replace("é","&#233;");  
                    titleUnder = titleUnder.replace("\u00F4","&#244;");
                    titleUnder = titleUnder.replace("\u00D4","&#212;");
                    titleUnder = titleUnder.replace("\u00E8","&#232;");
                    titleUnder = titleUnder.replace("\u00C8","&#200;");
                    titleUnder = titleUnder.replace("\u00EE","&#238;");
                    titleUnder = titleUnder.replace("\u00CE","&#206;");
                    titleUnder = titleUnder.replace("\u00E0","&#224;");
                    titleUnder = titleUnder.replace("\u00C7","&#199;");
                    titleUnder = titleUnder.replace("\u00E7","&#231;");
                    titleUnder = titleUnder.replace("\u00EA","&#234;");
                    titleUnder = titleUnder.replace("\u00CA","&#202;");
                    titleUnder = titleUnder.replace("\u00EB","&#235;");
                    titleUnder = titleUnder.replace("\u00CB","&#203;");
                    titleUnder = titleUnder.replace("\u00E2","&#226;");
                    titleUnder = titleUnder.replace("\u00C2","&#194;");
                    //replace the trademark tm character in the title 
                    titleUnder = titleUnder.replace("\u2122","");                    
                    //replace the squished oe character in the title 
                    titleUnder = titleUnder.replace("\u0153","oe");
                    //titleUnder = titleUnder.replace("œ","oe");
                    //out.write("titleunder = " + titleUnder);
                    //replace en dashes in the title with regular dashes  
                    titleUnder = titleUnder.replace("\u2013","-"); 
                    //replace left double curly quotes with nothing 
                    titleUnder = titleUnder.replace("\u201C","");    
                    //eliminate colons and semi-colons 
                    titleUnder = titleUnder.replace(":","");  

                    //titleUnder = titleUnder.replace(";","");

                    //check to see if the string contains a final quote punctuation - if so, replace it with an underscore - sometimes used like apostrophes.  

                    char[] c = titleUnder.toCharArray();
                    for (int pos = 0; pos < c.length; pos++) {
						int type = Character.getType(c[pos]);
                        if (type == 30) {
                        	titleNew = titleNew + "_";
                        }else{
                        	titleNew = titleNew + c[pos]; 
                        }
					}

				}       
                  path = String.format("%s.%s.%s.html","services_renderer",childNode.getProperty(OTHERSERVICEID).getString(),titleNew);
                  String includePath = serviceDataPage + "/" + childNode.getProperty(OTHERSERVICEID).getString() + ".quicklink.html";
                  //out.write(request.getRequestURL().toString());
                %>
        			<li><a href="<%=path%>" title="<%=title%>"><%=title%></a></li>
				<%
              }


                else {
                log.info("Other service for related links " + childNode.getProperty(OTHERSERVICEID).getString() + " not found for service:" + serviceDataNode.getPath() + ".");
              }

            }
          }
          //END of for (Node childNode : sorted_map.values())  

          out.write("</ul><br />");
          out.write("<!--END of class box shaded-->");     
        }
        //END of if (linksNode.hasNodes())  
      }
      //START of if (serviceDataNode.hasNode(SERVICELINKS))  
      // END of Related Links - only show this section if there are links  



		// START of Acts - only show this section if there are links
      //START of if (serviceDataNode.hasNode(SERVICEACTS))  
      if (serviceDataNode.hasNode(SERVICEACTS)) {
        Node actsNode = serviceDataNode.getNode(SERVICEACTS);
		//START of if (actsNode.hasNodes())
        if (actsNode.hasNodes()) {
          out.write("<!--START of section title-->");  
          out.write(String.format("<div class=\"sectiontitle\"><div class=\"links\"><div class=\"rightcurve\">&nbsp;</div><div class=\"leftcurve\"><h3 class=\"title\">%s</h3></div></div></div>", LocaleSupport.getLocalizedMessage(pageContext, "actsHeading")));
		  out.write("<!--END of section title-->");   

          //START of box shaded  
          out.write("<!--START of box shaded-->");     
          out.write("<div class=\"box shaded\">");
          out.write("<div class=\"text_wrapper\">");
          out.write("<ul class=\"actsLinks\">");
		  //START of for loop
          for (NodeIterator nodeIter = actsNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            //START of if  
            if ((childNode.hasProperty(SERVICEACT)) && (childNode.hasProperty(SERVICEACTPDF)) && (childNode.hasProperty(SERVICEACTURL))) {
              String name = childNode.getProperty(SERVICEACT).getString();
              String pdf = childNode.getProperty(SERVICEACTPDF).getString();
              String html = childNode.getProperty(SERVICEACTURL).getString();

              out.write ("<li>"); 
              //START of if  
              if (childNode.getProperty("FEDERAL").getString().equalsIgnoreCase("1")) { 
                  out.write ( "<img src=\"" + request.getContextPath() + "/etc/designs/gnb/images/canada_flag.jpg\" alt=\"Canada\" /> " ); 
              }
              //END of if  
              String navItem = String.format("%s&nbsp;<a href=\"%s\" title=\"%s\">PDF</a>&nbsp;|&nbsp;<a href=\"%s\" title=\"%s\">HTML</a></li>", name, pdf, name, html, name);
              out.write(navItem);

              //START of inner for loop  
              for (NodeIterator subnodeIter = childNode.getNodes(); subnodeIter.hasNext();) {
                Node grandchildNode = (Node) subnodeIter.next();
                //START of inner if   
                if ((grandchildNode.hasProperty(REGULATIONS)) && (grandchildNode.hasProperty(REGULATIONSNUM)) && (grandchildNode.hasProperty(REGULATIONSPDF)) && (grandchildNode.hasProperty(REGULATIONSURL))) {
                  name = grandchildNode.getProperty(REGULATIONS).getString();
                  String number = grandchildNode.getProperty(REGULATIONSNUM).getString();
                  pdf = grandchildNode.getProperty(REGULATIONSPDF).getString();
                  html = grandchildNode.getProperty(REGULATIONSURL).getString();

                  navItem = String.format("<li>%s&nbsp;%s&nbsp;<a href=\"%s\" title=\"%s\">PDF</a>&nbsp;|&nbsp;<a href=\"%s\" title=\"%s\">HTML</a></li>", number, name, pdf, name, html, name);
                  out.write(navItem);

                }//END of inner if   
              }//END of inner for loop
            }//END of if 
          }
          //END of for loop  
          out.write("</ul></div></div>");
          out.write("<!--END of box shaded-->");       
		  //END of box shaded  
        }
        //END of if (actsNode.hasNodes())
      }
      //END of if (serviceDataNode.hasNode(SERVICEACTS))    
	  //END of Acts - only show this section if there are links




      out.write("</div>");
      out.write("<!--END of sidebar-->");  
      //End of Sidebar
%>        
    </div>
	<!--END of col-sm-4-->                
</div>
<!--END of row-->        

    <%
    }
    // END of if (serviceDataNode != null)
    //START of else if (WCMMode.fromRequest(request) == WCMMode.EDIT)
    else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
          %><img src="/libs/widgets/0.gif" class="cq-text-placeholder" alt="">
    <%} 
    //END of else if (WCMMode.fromRequest(request) == WCMMode.EDIT)

  }
  //END of outer try

  //START of outer catch (Exception ex)
  catch (Exception ex) {
	log.error("Serviceinfo component encountered an error:", ex);
  }
  //END of outer catch (Exception ex)
  %>


<script>
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // store the currently selected tab in the hash value
    $("ul.nav-tabs > li > a").on("shown.bs.tab", function (e) {
        var id = $(e.target).attr("href").substr(1);
        window.location.hash = id;
    });

    // on load of the page: switch to the currently selected tab
    var hash = window.location.hash;
    $('#myTab a[href="' + hash + '"]').tab('show');
    $(this).attr("href", "#" + hash);
</script>

<script>
	$(document).ready(function(){
    	var url="https://www2.gnb.ca"+$(this).find('#departmentid a:first').attr('href');
        //$(this).find('#departmentid a:first').attr('href', url);
	});
</script>
<script>
	$(document).ready(function(){
        //under Related Links, needs to replace "/content/gnb/" with "/content/snb/"
        let relatedLink = $('.relatedLink a[href]');
        $('.relatedLink a[href]').each(function(){
            let href=this.href.replace('/content/gnb/','/content/snb/');
            this.href = this.href.replace(this, href);
        });
	});
</script>

<script>
	$(document).ready(function(){
        //under Contact, needs to replace "www2.snb.ca" with "www2.gnb.ca"
        let serviceLocationLinks = $('#serviceLocation a[href]');
        //console.log(serviceLocationLinks.length);
        $('#serviceLocation a[href]').each(function(){
            let href=this.href.replace('.snb.ca','.gnb.ca');
            this.href = this.href.replace(this, href);
        });
	});
</script>

