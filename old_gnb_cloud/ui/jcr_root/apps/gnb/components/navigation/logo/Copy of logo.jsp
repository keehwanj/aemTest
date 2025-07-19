<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="org.slf4j.Logger"%>
<%!protected String getStringPropertyValue(Node node, String path, String property, Logger log) {
    try {
      if (node.hasNode("jcr:content") && node.getNode("jcr:content").hasNode(path) && node.getNode("jcr:content").getNode(path).hasProperty(property)) {
        Property prop = node.getNode("jcr:content").getNode(path).getProperty(property);
        if (prop != null && prop.getValue() != null) {
          String propStringValue = (String) prop.getValue().getString();
          if ((propStringValue != null) && (!propStringValue.equals("")) && (!propStringValue.equals("undefined"))) {
            return propStringValue;
          }
        }
      }
      if(node==null || node.getDepth()==0) return null;
      return getStringPropertyValue(node.getParent(), path, property, log);
    } catch (Exception ex) {
      log.error("logo encountered an error climbing the hierarchy for" + property, ex);
      return "something happened";
    }
  }%>

<%
  String backgroundLogo = getStringPropertyValue(currentPage.adaptTo(Node.class), "logo", "logo", log);
  String link = getStringPropertyValue(currentPage.adaptTo(Node.class), "logo", "link", log);
  String linkText = getStringPropertyValue(currentPage.adaptTo(Node.class), "logo", "linkText", log);
  if (linkText == null && link != null)
    linkText = link;
  if(link != null && !link.startsWith("http")) link += ".html";
  if (backgroundLogo != null) {
    out.write(String.format("<div id=\"logoImg\" style=\"background:url('%s') no-repeat top left\">", backgroundLogo));
    if (link != null) {
      out.write(String.format("<a href=\"%s\" title=\"%s\"><span id=\"logo_area\"></span></a>", link, linkText));
    }
    out.write("</div>");
  } else {
   %><cq:include script="empty.jsp"/><%
  }
%>