<%@include file="/libs/foundation/global.jsp" %>
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
  String rendition_48="/jcr:content/renditions/cq5dam.thumbnail.48.48.png";
  String rendition_140="/jcr:content/renditions/cq5dam.thumbnail.140.100.png";
  String rendition_180="/jcr:content/renditions/cq5dam.web.180.180.png";
  String rendition_319="/jcr:content/renditions/cq5dam.thumbnail.319.319.png";
  String rendition_340="/jcr:content/renditions/cq5dam.web.340.340.png";
  String link = getStringPropertyValue(currentPage.adaptTo(Node.class), "logo", "link", log);
  String linkText = getStringPropertyValue(currentPage.adaptTo(Node.class), "logo", "linkText", log);
  if (linkText == null && link != null)
    linkText = link;
  if(link != null && !link.startsWith("http")) link += ".html";
  if (backgroundLogo != null) {
    if (link != null) {%>
		<a href="<%=link%>" title="<%=linkText%>">
<picture>
    <!--[if IE 9]><video style="display: none;"><![endif]-->
    <source srcset="<%=backgroundLogo%>" 				   media="(min-width: 1200px)">
    <source srcset="<%=backgroundLogo%><%=rendition_340%>" media="(min-width: 980px)">
    <source srcset="<%=backgroundLogo%><%=rendition_319%>" media="(min-width: 768px)">
    <source srcset="<%=backgroundLogo%><%=rendition_180%>" media="(min-width: 480px)">
    <source srcset="<%=backgroundLogo%><%=rendition_180%>" media="(min-width: 400px)">   
    <source srcset="<%=backgroundLogo%><%=rendition_180%>" media="(min-width: 200px)">       
    <!--[if IE 9]></video><![endif]-->
    <img src="<%=backgroundLogo%>"  srcset="<%=backgroundLogo%>" alt="<%=linkText%>" class="img-responsive">
</picture>
	<!--<img src="<%=backgroundLogo%>" srcset="<%=backgroundLogo%>" alt="<%=linkText%>" class="img-responsive">-->
		</a>
	<%}
  } else {
   %><cq:include script="empty.jsp"/><%
  }
%>