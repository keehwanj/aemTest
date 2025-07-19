<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%

String contactusUrl = "/";
String linkText = "Contact Us";
Locale lang = currentPage.getLanguage(false);
if(lang!=null && lang.getLanguage()=="fr") {
    linkText = "Contactez-nous";
}
try {
WCMMode mode = WCMMode.fromRequest(request);
    if (mode == WCMMode.EDIT) {
    String setting = properties.get("contactusPage","/");

    if(!setting.equals("/")) {
        Page contactusPage = pageManager.getPage(setting);
        if(contactusPage!=null) {
            Node contactusNode = contactusPage.adaptTo(Node.class);
            if(contactusNode!=null && contactusNode.hasNode("jcr:content")) {
                if(!contactusNode.getNode("jcr:content").hasNode("contactus")) {
                    contactusNode.getNode("jcr:content").addNode("contactus");
                    contactusNode.save();
                }
                Node contactus = contactusNode.getNode("jcr:content").getNode("contactus");
                contactus.setProperty("contactusPage",currentPage.getPath());
                contactus.save();
            }
        }
    }
    }
}
catch (Exception ex) {

    log.error(ex.getMessage());
}



//climb up the hierarchy looking for an contactusPage property
//of the contactusNode and stop when we find one
try{
    Page myPage = currentPage;
    while (myPage != null) {
        Node myNode = myPage.adaptTo(Node.class);
        if(myNode!=null && myNode.hasNode("jcr:content") && myNode.getNode("jcr:content").hasNode("contactus")) {
            Property prop = myNode.getNode("jcr:content").getNode("contactus").getProperty("contactusPage");
            if(prop!=null && prop.getValue()!=null) {
                String contactusPage = (String) prop.getValue().getString();
                if ((contactusPage != null) && (!contactusPage.equals("")) && (!contactusPage.equals("undefined"))) {
                    if(Utils.isNotEmpty(slingRequest.getRequestPathInfo().getSelectorString())) {
                        contactusUrl = String.format("%s.%s.html",contactusPage,slingRequest.getRequestPathInfo().getSelectorString());
                    } else {
                        contactusUrl = String.format("%s.html",contactusPage);
                    }
                    break;
                }
            }
        }
        myPage = myPage.getParent();

    }
}
catch (Exception ex) {
    log.error("Contactus encountered an error climbing the hierarchy",ex);
}

%>
<a href="<%=contactusUrl%>"><%=linkText %></a>