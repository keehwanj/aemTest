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
      if (node.hasNode("jcr:content") && node.getNode("jcr:content").getNode("gnbstrap-footer").hasNode(path) && node.getNode("jcr:content").getNode("gnbstrap-footer").getNode(path).hasProperty(property)) {
        Property prop = node.getNode("jcr:content").getNode("gnbstrap-footer").getNode(path).getProperty(property);
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
                    t	=	t+"~"+values[i].getString();//@ is special charecter, don't use it in page title and link
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

String footerText 		= getStringPropertyValue(currentPage.adaptTo(Node.class), "gnbstrapfooter", "footerText", log, "false");

//footer title, footer link which are array
String footerLinkText 		= 	getStringPropertyValue(currentPage.adaptTo(Node.class), "gnbstrapfooter", "footerLinkText", log, "true");

String[] footerLinkTextArray=null;
if(footerLinkText!=null){
	footerLinkTextArray			=	footerLinkText.split("~");
    footerLinksTextLength		=	footerLinkText.split("~").length;
}


String footerLinks	 		= 	getStringPropertyValue(currentPage.adaptTo(Node.class), "gnbstrapfooter", "footerLinks", log, "true");


String[] footerLinksArray=null;
if(footerLinks!=null){
	footerLinksArray			=	footerLinks.split("~");
    footerLinksLength			=	footerLinks.split("~").length;
}

footerLeng	=	footerLinksTextLength;

if(footerLinksLength<footerLinksTextLength){
	footerLeng	=	footerLinksLength;  
} 
%>
<div class="gnbfooter">
    <div class="container-fluid">
        <div class="d-flex justify-content-between flex-column flex-lg-row">
            <div>
                <p class="text-white"><%=footerText%></p>
            </div>
            <div>
   		<%if(footerLeng>0){
			for(int i=0;i<footerLeng;i++){ %>
            	<%if(footerLinksArray[i].startsWith("/")){%>
            		<a href="<%=footerLinksArray[i]%>.html"><%=footerLinkTextArray[i]%></a>&nbsp;
            	<%}else{%>
					<a href="<%=footerLinksArray[i]%>"><%=footerLinkTextArray[i]%></a>&nbsp;
            	<%}%>
			<%}
		}%>
            </div>
        </div>
    </div>
</div>
<!--END of footer-->