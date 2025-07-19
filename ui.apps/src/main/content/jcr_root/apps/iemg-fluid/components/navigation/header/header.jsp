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
            boolean result = prop.isMultiple();
            String t	=	"";
            if(result){
				Value[] values = prop.getValues();
            	for(int i=0;i<values.length;i++){
                	if(t.equals("")){
						t	=	values[i].getString();
                	}else{
                        t	=	t+"@"+values[i].getString();//@ is special charecter, don't use it in page title and link
                	}
            	}
            }else{
				t=(String) prop.getValue().getString();
            }
			return t;   
        }  

      }
      if(node==null || node.getDepth()==0) return null;
      return getStringPropertyValue(node.getParent(), path, property, log, bool);
    } catch (Exception ex) {
      log.error("logo encountered an error climbing the hierarchy");
        return "something happened";
    }
}%>
<!--END of Method for inheritence type property -->

<!--START of language switcher -->
<%
String oppositeUrl = "/";
//String linkText_lang = "Fran&ccedil;ais";
String linkText_lang = "FR";
Locale lang = currentPage.getLanguage(false);
if(lang!=null && lang.getLanguage()=="fr") {
    //linkText_lang = "English";
    linkText_lang = "EN";
}

try {
WCMMode mode = WCMMode.fromRequest(request);
    if (mode == WCMMode.EDIT) {
    String setting = properties.get("oppositePage","/");

    if(!setting.equals("/")) {
        Page oppositePage = pageManager.getPage(setting);
        if(oppositePage!=null) {
            Node oppositeNode = oppositePage.adaptTo(Node.class);
            if(oppositeNode!=null && oppositeNode.hasNode("jcr:content")) {
                if(!oppositeNode.getNode("jcr:content").hasNode("header")) {
                    oppositeNode.getNode("jcr:content").addNode("header");
                    oppositeNode.save();
                }
                Node langSwitcher = oppositeNode.getNode("jcr:content").getNode("header");
                langSwitcher.setProperty("oppositePage",currentPage.getPath());
                langSwitcher.save();
            }
        }
    }
    }
}
catch (Exception ex) {

    log.error(ex.getMessage());
}

//climb up the hierarchy looking for an oppositePage property
//of the languageSwitcherNode and stop when we find one
try{
    Page myPage = currentPage;
    while (myPage != null) {
        Node myNode = myPage.adaptTo(Node.class);
        if(myNode!=null && myNode.hasNode("jcr:content") &&  myNode.getNode("jcr:content").hasNode("header")) {
            Property prop = myNode.getNode("jcr:content").getNode("header").getProperty("oppositePage");
            if(prop!=null && prop.getValue()!=null) {
                String oppositePage = (String) prop.getValue().getString();
                if ((oppositePage != null) && (!oppositePage.equals("")) && (!oppositePage.equals("undefined"))) {
                    if(Utils.isNotEmpty(slingRequest.getRequestPathInfo().getSelectorString())) {
                        oppositeUrl = String.format("%s.%s.html",oppositePage,slingRequest.getRequestPathInfo().getSelectorString());
                    } else {
                        oppositeUrl = String.format("%s.html",oppositePage);
                    }
                    break;
                }
            }
        }
        myPage = myPage.getParent();

    }
}
catch (Exception ex) {
    log.error("languageSwitcher encountered an error climbing the hierarchy");
}

%>
<!--END of language switcher -->

<!--START of logo -->
<%
String backgroundLogo 	= getStringPropertyValue(currentPage.adaptTo(Node.class), "header", "logo", log, "false");
String link 			= getStringPropertyValue(currentPage.adaptTo(Node.class), "header", "link", log, "false");
String linkText 		= getStringPropertyValue(currentPage.adaptTo(Node.class), "header", "linkText", log, "false");



if (linkText == null && link != null){
	linkText = link;

}
if(link != null && !link.startsWith("http")){
 link += ".html";
}
%>
<!--END of logo -->


<!--START of header list-->
<%

//header text, header link which are array
int headerLeng					=	0;
int headerLinksTextLength		=	0;
int headerLinksLength			=	0;

String headerLinkText 			= 	getStringPropertyValue(currentPage.adaptTo(Node.class), "header", "headerLinkText", log, "true");
String[] headerLinkTextArray	=null;
if(headerLinkText!=null){
	headerLinkTextArray			=	headerLinkText.split("@");
    headerLinksTextLength		=	headerLinkText.split("@").length;
}

String headerLinks	 			= 	getStringPropertyValue(currentPage.adaptTo(Node.class), "header", "headerLinks", log, "true");
String[] headerLinksArray=null;
if(headerLinks!=null){
	headerLinksArray			=	headerLinks.split("@");
    headerLinksLength			=	headerLinks.split("@").length;
}

headerLeng=headerLinksTextLength;

if(headerLinksLength<headerLinksTextLength){
	headerLeng=headerLinksLength;  
} 

%>
<!--END of header list-->


<!-- START of Header -->
<% if(!properties.get("hideHeader",false)) {%>
<header>
	<nav class="navbar navbar-expand-md bg-light navbar-light">
		<!--START of LOGO-->
        <%
		if (backgroundLogo != null) {
    		if (link != null) {
			%>
				<a class="navbar-brand" href="<%=link%>"><img src="<%=backgroundLogo%>"  class="d-inline-block align-top img-responsive" alt="<%=linkText%>"></a>
        	<%
    		}
		}
    	%>
		<!--END of LOGO-->

		<!--START of language switcher-->
    	<a href="<%=oppositeUrl%>" class="btn btn-outline-success ml-auto mr-2" role="button"><%=linkText_lang %></a>
		<!--END of language switcher-->
		<!--START of navigation-->
    	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-label="header navigation">
        	<span class="navbar-toggler-icon"></span>
    	</button>
    	<div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        	<ul class="navbar-nav text-right">
                <%if(headerLeng>0){
                	for(int i=0;i<headerLeng;i++){
                        %>
						<li class="nav-item">
                    		<a class="nav-link" href="<%=headerLinksArray[i]%>.html"><%=headerLinkTextArray[i]%></a>
      					</li>
					<%}
        		}else{
   					%><%
        		}%>
        	</ul>
    	</div>
        <!--END of navigation-->
	</nav>
	<!--START of breadcrumbs-->
	<% if(!properties.get("hideBreadcrumbs",false)) {%>
		<div id="breadcrumbNav">
    		<cq:include path="breadcrumbs" resourceType="gnb-fluid/components/navigation/breadcrumbs"/>     
		</div>
	<%} else { %>
	<cq:include script="empty.jsp"/>
	<%} %>
	<!--END of breadcrumbs-->
</header>
<%} else { %>
	<cq:include script="empty.jsp"/>
<%} %>
<!-- END of Header -->