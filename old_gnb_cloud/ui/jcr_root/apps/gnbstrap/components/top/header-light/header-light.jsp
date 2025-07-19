<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>

<%
String oppositeUrl = "/";
String linkText_lang = "Fran&ccedil;ais";
String alt="GNB logo";
String linkHome="/content/gnb/en.html";

Locale lang = currentPage.getLanguage(false);
if(lang!=null && lang.getLanguage()=="fr") {
    linkText_lang = "English";
    alt="GNB logo-fr";
    linkHome="/content/gnb/fr.html";
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
                	if(!oppositeNode.getNode("jcr:content").getNode("gnbstrap-top").hasNode("header_light")) {
                    	oppositeNode.getNode("jcr:content").getNode("gnbstrap-top").addNode("header_light");
                    	oppositeNode.save();
                	}
                	Node langSwitcher = oppositeNode.getNode("jcr:content").getNode("gnbstrap-top").getNode("header_light");
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
        if(myNode!=null && myNode.hasNode("jcr:content") &&  myNode.getNode("jcr:content").getNode("gnbstrap-top").hasNode("header_light")) {
            Property prop = myNode.getNode("jcr:content").getNode("gnbstrap-top").getNode("header_light").getProperty("oppositePage");
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
    log.error("languageSwitcher encountered an error climbing the hierarchy",ex);
}
//out.print(oppositeUrl);
%>
 <!-- NAVIGATION -->
  <nav class="gnb-nav">
      <a href="<%=linkHome%>">
          <img  src="/content/dam/gnb/gnb-strap/logo/gnb-colour.png" alt="<%=alt%>">
      </a>
      <div class="top-nav">
          <a class="link" href="<%=oppositeUrl%>"><%=linkText_lang%></a>
      </div>
  </nav>
  <!-- / NAVIGATION -->