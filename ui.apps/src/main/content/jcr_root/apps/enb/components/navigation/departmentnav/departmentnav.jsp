<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="com.day.cq.wcm.api.components.DropTarget" %>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="org.slf4j.Logger"%>
<cq:include script="init.jsp"/>

<%!protected String[] getStringPropertyValue(Node node, String path1,String path2, String property, Logger log) {
    try {
        if (node.hasNode("jcr:content") && node.getNode("jcr:content").hasNode(path1)&& node.getNode("jcr:content").getNode(path1).hasNode(path2) && node.getNode("jcr:content").getNode(path1).getNode(path2).hasProperty(property)) {
        //if (node.hasNode("jcr:content") && node.getNode("jcr:content").hasNode(path) && node.getNode("jcr:content").getNode(path).hasProperty(property)) {
        Property prop = node.getNode("jcr:content").getNode(path1).getNode(path2).getProperty(property);
        if (prop != null && prop.getValue() != null) {
          String propStringValue = (String) prop.getValue().getString();
          if ((propStringValue != null) && (!propStringValue.equals("")) && (!propStringValue.equals("undefined"))) {
            String currentpage= node.getPath();
              //String[] d = new String[]{currentpage,propStringValue};  
            String[] d = new String[]{currentpage,propStringValue};  
            //return currentpage;
            return d;
          }
        }
      }
      if(node==null || node.getDepth()==0) return null;
      return getStringPropertyValue(node.getParent(), path1, path2, property, log);
    } catch (Exception ex) {
      log.error("logo encountered an error climbing the hierarchy for" + property, ex);
        String[] d = new String[]{"something happened","something happened"};  
        //String d = "something happened";  
      return d;
    }
  }%>


<%
WCMMode mode = WCMMode.fromRequest(request);

if (mode == WCMMode.EDIT) {
    //drop target css class = dd prefix + name of the drop target in the edit config
    String ddClassName = DropTarget.CSS_CLASS_PREFIX + "pages";
    %><script type="text/javascript">
        function list_switchDialogTab(tp, value) {
            if (value == "search") {
                tp.activate(tp.items.get(3));
                tp.unhideTabStripItem(3);
                tp.hideTabStripItem(2);
                tp.hideTabStripItem(1);
            } else if (value == "static") {
                tp.activate(tp.items.get(2));
                tp.unhideTabStripItem(2);
                tp.hideTabStripItem(1);
                tp.hideTabStripItem(3);
            } else if (value == "children"){
                tp.activate(tp.items.get(1));
                tp.unhideTabStripItem(1);
                tp.hideTabStripItem(2);
                tp.hideTabStripItem(3);
            }
            tp.doLayout();
        }
    </script><div class="<%= ddClassName %>" id="departmentNav"><%
}
	//String brand = properties.get("brand", "Government of New Brunswick");
	//String brand = getStringPropertyValue(currentPage.adaptTo(Node.class), "mainNav_ipar", "departmentnav", "brand", log);

	String[] brand = new String[2];
	brand = getStringPropertyValue(currentPage.adaptTo(Node.class), "mainNav_ipar", "departmentnav", "brand", log);
  	String path = properties.get("path", "/content/gnb/en/search");
	String att_title = properties.get("att_title", "Recherche");
	String att_google = properties.get("att_google", "004686105439310941724:vjorlpwulkq");

    List list = (List)request.getAttribute("list");
    if (!list.isEmpty()) {
        out.write("<nav class=\"navbar navbar-custom\" role=\"navigation\">");        
        //out.write("<nav class=\"navbar navbar-default\" role=\"navigation\">");        
        	out.write("<div class=\"navbar-header\">");
        		out.write("<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#gnb-navbar-collapse\">");     
        			out.write("<span class=\"sr-only\">Toggle navigation</span>");     
        			out.write("<span class=\"icon-bar\"></span> ");  
 					out.write("<span class=\"icon-bar\"></span> ");  
 					out.write("<span class=\"icon-bar\"></span> ");          
        		out.write("</button>");   
        		//have to get the value of GNB from somewhere.
        		//out.write("<a class=\"navbar-brand visible-xs\" href=\"#\">Government of New Brunswick</a>");   
        if(brand!=null){
			if(!brand[1].trim().equals("")){
				out.write(String.format("<a class=\"navbar-brand visible-xs visible-sm\" href=\"%s.html\">%s</a>", brand[0],brand[1]));        		
            }
        }
        	out.write("</div>");   

        //out.write("<div class=\"collapse navbar-collapse departmentNav1\" id=\"gnb-navbar-collapse departmentNav1\"><ul class=\"nav navbar-nav\" id=\"departmentNav\">");
        //out.write("<div class=\"collapse navbar-collapse departmentNav1\" id=\"gnb-navbar-collapse\"><ul class=\"nav navbar-nav\" id=\"departmentNav\">");
        out.write("<div class=\"collapse navbar-collapse departmentNav1\" id=\"gnb-navbar-collapse\">");



        out.write("<div class=\"visible-xs\">");    
        out.write(String.format("<form action=\"%s.html\" title=\"%s\" method=\"get\" id=\"keyword_search_form\" class=\"navbar-form\" role=\"search\">", path, att_title)); 
        out.write("<div class=\"input-group\">");     

		out.write(String.format("<input type=\"text\" class=\"form-control\" aria-labelledby=\"q\" placeholder=\"%s\" name=\"q\">", att_title));              
		out.write(String.format("<input type=\"hidden\" name=\"cx\" value=\"%s\">", att_google)); 
		out.write("<input type=\"hidden\" name=\"as_sitesearch\" value=\"\">");  
        out.write("<input type=\"hidden\" name=\"cof\" value=\"FORID:11\">");  
		out.write("<input type=\"hidden\" name=\"ie\" value=\"UTF-8\">");  

        out.write("<div class=\"input-group-btn\">");     

        out.write("<button class=\"btn btn-default\" type=\"submit\">");      
        out.write("<i class=\"glyphicon glyphicon-search\"></i>");      
        out.write("<span class=\"sr-only\">submit</span>");      
        out.write("</button>");  

        out.write("</div>");     
        out.write("</div>");  
        out.write("</form>");     
        out.write("</div>");  


        out.write("<ul class=\"nav navbar-nav\" id=\"departmentNav\">");
        for (Iterator<Page> i = list.getPages(); i.hasNext(); ) {
            Page child = i.next();
            if(child!=null && !child.isHideInNav()) {
                String cssClass = "";
                if(!i.hasNext()) cssClass="last";

                String grandchildren = new String();
                for (Iterator<Page> j = child.listChildren(); j.hasNext(); ) {
                    Page grandchild = j.next();
                    if(!grandchild.isHideInNav()) {
                    String title = grandchild.getNavigationTitle();
                    if (title == null || title.equals("")) {
                        title = grandchild.getPageTitle();
                    }
                    if (title == null || title.equals("")) {
                        title = grandchild.getTitle();
                    }
                    if (title == null || title.equals("")) {
                        title = grandchild.getName();
                    }
                    if(grandchild.getPath().equals(currentPage.getPath())) cssClass+= " active";
                        //grandchildren += String.format("<li class=\"parent\"><a href=\"%s.html\" class=\"btn_nav\"><small><span class=\"glyphicon glyphicon-play\"></span></small> %s</a></li>",grandchild.getPath(),title);
                        grandchildren += String.format("<li class=\"parent\"><a href=\"%s.html\" class=\"btn_nav\"><b class=\"right-caret\"></b> %s</a></li>",grandchild.getPath(),title);
                    }
                }

                String title = child.getNavigationTitle();
                if (title == null || title.equals("")) {
                    title = child.getPageTitle();
                }
                if (title == null || title.equals("")) {
                    title = child.getTitle();
                }
                if (title == null || title.equals("")) {
                    title = child.getName();
                }

                if(child.getPath().equals(currentPage.getPath())) cssClass+= " active";
                String cleantitle = title;
                String multilineStyle = "";
                if(title.contains("<br") || title.contains("<BR")) {
                  cleantitle = title.replace("<br>","").replace("<br />","").replace("<br/>","");
                  cleantitle = cleantitle.replace("<BR>","").replace("<BR />","").replace("<BR/>","");
                  multilineStyle = "style=\"font-size:12px;\" ";
                }
                //first parents do not have any content so that we do not need to have a link to the first parent page.
                //if no child, the navigation does not go anywhere.
                //String navItem = String.format("<li class=\"%s\"><a %s href=\"\" title=\"%2s\">%3s</a></li>",cssClass, multilineStyle,"",cleantitle,title);
                //if no child, the navigation go to the page which contains the link..
                String navItem = String.format("<li class=\"%s\"><a %s href=\"%1s.html\">%3s</a></li>",cssClass,multilineStyle ,child.getPath(),title);

                if(grandchildren.length()>0){
					//first parents do not have any content so that we do not need to have a link to the first parent page.                    
                    //navItem = String.format("<li class=\"parent %s %s\"><a %s href=\"%s.html\" title=\"%s\" class=\"btn_nav %s\" data-toggle=\"dropdown\">%s <b class=\"caret\"></b></a><ul class=\"dropdown-menu\">%s</ul></li>","dropdown", cssClass,multilineStyle ,child.getPath(),cleantitle, "dropdown-toggle" ,title,grandchildren);
                    navItem = String.format("<li class=\"parent %s %s\"><a %s href=\"%s.html\" class=\"btn_nav %s\" data-toggle=\"dropdown\">%s <b class=\"caret\"></b></a><ul class=\"dropdown-menu\">%s</ul></li>", "dropdown",cssClass,multilineStyle, child.getPath(), "dropdown-toggle", title, grandchildren);
                } 
                out.write(navItem);
            }
        }
        out.write("</ul>");



        out.write("</div></nav>");        
        out.write("<div class=\"clearfloat\"></div>");        
    }else {
        %><cq:include script="empty.jsp"/><%
    }

    if (mode == WCMMode.EDIT) {
        %></div><%
    }
 %>