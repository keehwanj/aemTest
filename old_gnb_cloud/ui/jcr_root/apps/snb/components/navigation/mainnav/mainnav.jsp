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

<%!protected String[] getStringPropertyValue(Node node, String path1, String path2, String property, Logger log) {
    try {
        if (node.hasNode("jcr:content") && node.getNode("jcr:content").hasNode(path1)&& node.getNode("jcr:content").getNode(path1).hasNode(path2) && node.getNode("jcr:content").getNode(path1).getNode(path2).hasProperty(property)) {
        //if (node.hasNode("jcr:content") && node.getNode("jcr:content").hasNode(path) && node.getNode("jcr:content").getNode(path).hasProperty(property)) {
        Property prop = node.getNode("jcr:content").getNode(path1).getNode(path2).getProperty(property);
        if (prop != null && prop.getValue() != null) {
          String propStringValue = (String) prop.getValue().getString();
          if ((propStringValue != null) && (!propStringValue.equals("")) && (!propStringValue.equals("undefined"))) {
            String currentpage= node.getPath();
            String[] d = new String[]{currentpage, propStringValue};  
            return d;
          }
        }
      }
      if(node==null || node.getDepth()==0) return null;
      return getStringPropertyValue(node.getParent(), path1, path2, property, log);
    } catch (Exception ex) {
      log.error("logo encountered an error climbing the hierarchy for" + property, ex);
      String[] d = new String[]{"something happened","something happened"};  
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
    </script><div class="<%= ddClassName %>" id="mainnav"><%
}
//String brand = properties.get("brand", "Government of New Brunswick");
	String[] brand = new String[2];

  	brand = getStringPropertyValue(currentPage.adaptTo(Node.class), "mainNav_ipar_snb", "mainnav", "brand", log);

  	String path = properties.get("path", "/content/gnb/en/search");
	String att_title = properties.get("att_title", "Search");
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
    			if((brand!=null)){
                    if(!brand[1].trim().equals("")){
						out.write(String.format("<a class=\"navbar-brand visible-xs visible-sm\" href=\"%s.html\">%s</a>", brand[0],brand[1]));        		
                    }
        		}
        	out.write("</div>");   

        //out.write("<div class=\"collapse navbar-collapse mainnav1\" id=\"gnb-navbar-collapse mainnav1\"><ul class=\"nav navbar-nav\" id=\"mainnav\">");
        //out.write("<div class=\"collapse navbar-collapse mainnav1\" id=\"gnb-navbar-collapse\"><ul class=\"nav navbar-nav\" id=\"mainnav\">");
        out.write("<div class=\"collapse navbar-collapse mainnav1\" id=\"gnb-navbar-collapse\">");

        out.write("<div class=\"visible-xs\">");    
        out.write(String.format("<form action=\"%s.html\" title=\"%s\" method=\"get\" id=\"keyword_search_form\" class=\"navbar-form\" role=\"search\">", path, att_title)); 
        out.write("<div class=\"input-group\">");     
		out.write(String.format("<input type=\"text\" class=\"form-control\" aria-labelledby=\"q\" placeholder=\"%s\" name=\"q\">", att_title));         

        //out.write("<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">");  
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
        
        out.write("<ul class=\"nav navbar-nav\" id=\"mainnav\">");

        Iterator<Page> items = list.getPages();
        while (items.hasNext()) {
            Page listItem = items.next();
            if(!listItem.isHideInNav()) {
            String title = listItem.getNavigationTitle();
            if (title == null || title.equals("")) {
                title = listItem.getPageTitle();
            }
            if (title == null || title.equals("")) {
                title = listItem.getTitle();
            }
            if (title == null || title.equals("")) {
                title = listItem.getName();
            }
            String cssClass = "";
            if(!items.hasNext()) cssClass="last ";
            if(currentPage.getPath().startsWith(listItem.getPath())) cssClass+= "active";
			//removeing title attribute for accessibility
            //String navItem = String.format("<li class=\"%s\"><a href=\"%1s.html\" title=\"%2s\">%3s</a></li>",cssClass,listItem.getPath(),title,title);
			String navItem = String.format("<li class=\"%s\"><a href=\"%1s.html\">%3s</a></li>",cssClass,listItem.getPath(),title);                
            if(title.contains("<br") || title.contains("<BR")) {
              String cleantitle = title.replace("<br>","").replace("<br />","").replace("<br/>","");
              cleantitle = cleantitle.replace("<BR>","").replace("<BR />","").replace("<BR/>","");
              //removeing title attribute for accessibility
              //navItem = String.format("<li class=\"%s\"><a style=\"font-size:12px;\" href=\"%1s.html\" title=\"%2s\">%3s</a></li>",cssClass,listItem.getPath(),cleantitle,title);
			  navItem = String.format("<li class=\"%s\"><a style=\"font-size:12px;\" href=\"%1s.html\">%3s</a></li>",cssClass,listItem.getPath(),title);                
            }
            out.write(navItem);
            }
        }

        out.write("</ul>");

        out.write("</div></nav>");        
        out.write("<div class=\"clearfloat\"></div>");        

    } else {
        %><cq:include script="empty.jsp"/><%
    }
    
    if (mode == WCMMode.EDIT) {
        %></div><%
    }
 %>