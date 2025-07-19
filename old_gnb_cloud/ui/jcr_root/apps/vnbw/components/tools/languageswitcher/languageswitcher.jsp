<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%

String oppositeUrl = "/";
String linkText = "Fran&ccedil;ais";
Locale lang = currentPage.getLanguage(false);
if(lang!=null && lang.getLanguage()=="fr") {
    linkText = "English";
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
                if(!oppositeNode.getNode("jcr:content").hasNode("globalNav")) {
                    oppositeNode.getNode("jcr:content").addNode("globalNav");
                    oppositeNode.save();
                }
                if(!oppositeNode.getNode("jcr:content").getNode("globalNav").hasNode("languageSwitcher")) {
                    oppositeNode.getNode("jcr:content").getNode("globalNav").addNode("languageSwitcher");
                    oppositeNode.save();
                }
                Node langSwitcher = oppositeNode.getNode("jcr:content").getNode("globalNav").getNode("languageSwitcher");
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
        if(myNode!=null && myNode.hasNode("jcr:content") &&  myNode.getNode("jcr:content").hasNode("globalNav") && myNode.getNode("jcr:content").getNode("globalNav").hasNode("languageSwitcher")) {
            Property prop = myNode.getNode("jcr:content").getNode("globalNav").getNode("languageSwitcher").getProperty("oppositePage");
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
%>

<a href="<%=oppositeUrl%>"><%=linkText %></a>
