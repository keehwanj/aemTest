<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>

<%
String oppositeUrl = "/";
String linkText_lang = "Fran&ccedil;ais";
String alt="GNB logo";
String linkHome="/content/gnb/en.html";
String linkSearch="/content/gnb/en/search.html";

Locale lang = currentPage.getLanguage(false);
if(lang!=null && lang.getLanguage()=="fr") {
    linkText_lang = "English";
    alt="GNB logo-fr";
    linkHome="/content/gnb/fr.html";
	linkSearch="/content/gnb/fr/recherche.html";
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
                	if(!oppositeNode.getNode("jcr:content").getNode("gnbstrap-top").hasNode("header_dark")) {
                    	oppositeNode.getNode("jcr:content").getNode("gnbstrap-top").addNode("header_dark");
                    	oppositeNode.save();
                	}
                	Node langSwitcher = oppositeNode.getNode("jcr:content").getNode("gnbstrap-top").getNode("header_dark");
                	langSwitcher.setProperty("oppositePage",currentPage.getPath());
                	langSwitcher.save(); 
            	}
        	}
    	}
    }
}
catch (Exception ex) {

    log.error("Error in setting oppositePage");
}

//climb up the hierarchy looking for an oppositePage property
//of the languageSwitcherNode and stop when we find one
try{
    Page myPage = currentPage;
    while (myPage != null) {
        Node myNode = myPage.adaptTo(Node.class);
        if(myNode!=null && myNode.hasNode("jcr:content") &&  myNode.getNode("jcr:content").getNode("gnbstrap-top").hasNode("header_dark")) {
            Property prop = myNode.getNode("jcr:content").getNode("gnbstrap-top").getNode("header_dark").getProperty("oppositePage");
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
//out.print(oppositeUrl);
%>
<!-- NAVIGATION Dark-->
<nav class="gnb-nav gnb-nav-dark">
	<a class="navbar-brand" href="<%=linkHome%>">
		<img src="/content/dam/gnb/gnb-strap/logo/gnb-dark.png" alt="<%=alt%>">
	</a>
	<div class="top-nav">
		<a class="btn btn-outline-light btn-sm my-2 mx-1" href="<%=linkSearch%>"><i class="fas fa-search"></i></a>
		<a class="btn btn-outline-light btn-sm my-2" href="<%=oppositeUrl%>"><%=linkText_lang%></a>
	</div>
</nav>
<!-- / NAVIGATION -->