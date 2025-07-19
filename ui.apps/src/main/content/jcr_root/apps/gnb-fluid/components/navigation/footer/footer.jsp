<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="java.util.ArrayList"%>

<!--START of Method for inheritence type property -->
<%!protected String getStringPropertyValue(Node node, String path, String property, Logger log, String bool) {
    try {
      if (node.hasNode("jcr:content") && node.getNode("jcr:content").hasNode(path) && node.getNode("jcr:content").getNode(path).hasProperty(property)) {
        Property prop = node.getNode("jcr:content").getNode(path).getProperty(property);
        if(bool.equals("false")){ //in case of String
        	if (prop != null && prop.getValue() != null) {
          		String propStringValue = (String) prop.getValue().getString();
          		if ((propStringValue != null) && (!propStringValue.equals("")) && (!propStringValue.equals("undefined"))) {
            		return propStringValue;
          		}
        	}
        }else{// in case of array
			Value[] values = prop.getValues();
            String t	=	"";
            for(int i=0;i<values.length;i++){
                if(t.equals("")){
					t	=	values[i].getString();
                }else{
                    t	=	t+"@"+values[i].getString();//@ is special charecter, don't use it in page title and link
                }
            }
			return t;   
        }  
      }
      if(node==null || node.getDepth()==0) return null;
      return getStringPropertyValue(node.getParent(), path, property, log, bool);
    } catch (Exception ex) {
      log.error("logo encountered an error climbing the hierarchy for" + property, ex);
      return "something happened";
    }
}%>
<!--END of Method for inheritence type property -->

<!--START of footer -->
<%
//header text, header link which are array
int footerLeng					=	0;
int footerLinksTextLength		=	0;
int footerLinksLength			=	0;

String footerText 		= getStringPropertyValue(currentPage.adaptTo(Node.class), "footer", "footerText", log, "false");

//footer title, footer link which are array
String footerLinkText 		= 	getStringPropertyValue(currentPage.adaptTo(Node.class), "footer", "footerLinkText", log, "true");

String[] footerLinkTextArray=null;
if(footerLinkText!=null){
	footerLinkTextArray			=	footerLinkText.split("@");
    footerLinksTextLength		=	footerLinkText.split("@").length;
}


String footerLinks	 		= 	getStringPropertyValue(currentPage.adaptTo(Node.class), "footer", "footerLinks", log, "true");


String[] footerLinksArray=null;
if(footerLinks!=null){
	footerLinksArray			=	footerLinks.split("@");
    footerLinksLength			=	footerLinks.split("@").length;
}

footerLeng	=	footerLinksTextLength;

if(footerLinksLength<footerLinksTextLength){
	footerLeng	=	footerLinksLength;  
}

boolean hideFooter = properties.get("hideFooter",false);
String footerColor = properties.get("footerColor","black");
String navbar_color	= "navbar-dark";
String bg_color	= "bg-dark";
String text_color	= "text-light";

if(footerColor.equals("white")){
	navbar_color	= "navbar-light";
	bg_color	= "bg-light";
	text_color	= "text-dark";
}
%>

<%if(!(hideFooter)){%>
<footer class="">
	<nav class="navbar navbar-expand-md <%=navbar_color%> <%=bg_color%> d-print-inline">
        <div class="<%=text_color%> <%=bg_color%>"><%=footerText%></div>
        <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#footerNav" aria-label="footer navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="footerNav">
            <ul class="navbar-nav ml-auto">
 				<%if(footerLeng>0){
            		for(int i=0;i<footerLeng;i++){ %>
                		<li class="nav-item">
                    		<a class="nav-link" href="<%=footerLinksArray[i]%>.html"><%=footerLinkTextArray[i]%></a>
                		</li>                
            		<%}
				}%>
            </ul>
        </div>
	</nav>
</footer>
<%}else{%>
	<cq:include script="empty.jsp"/>
<%}%>
<!--END of footer-->
