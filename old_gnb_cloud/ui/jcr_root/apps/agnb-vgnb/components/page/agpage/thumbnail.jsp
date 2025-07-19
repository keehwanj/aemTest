<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%
  Page thisPage;
  try {
    PageManager pm = currentPage.getPageManager();
    thisPage = pm.getPage(currentNode.getParent().getPath());
  } catch (Exception e) {
    log.error("error getting current page on gnbpage in thumbnail selector", e);
    thisPage = currentPage;
  }

  //fortunately for us the currentpage when doing a sling:include is set to the including page so we can determine the lag from it
  String lang = "fr";
  String langSuffix = "FRE";
  Locale locale = currentPage.getLanguage(true);
  if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    langSuffix = "ENG";
  }

  String title = thisPage.getNavigationTitle();
  if (title == null || title.equals("")) title = thisPage.getPageTitle();
  if (title == null || title.equals("")) title = thisPage.getTitle();
  if (title == null || title.equals("")) title = thisPage.getName();
  if (currentNode.hasProperty(lang + "Title"))  title = currentNode.getProperty(lang + "Title").getString();
  
  if (currentNode.getParent().hasNode("orginfo") && currentNode.getParent().getNode("orginfo").hasProperty("ORGNAME" + langSuffix) && Utils.isNotEmpty(currentNode.getParent().getNode("orginfo").getProperty("ORGNAME" + langSuffix).getString())) {
    title = currentNode.getParent().getNode("orginfo").getProperty("ORGNAME" + langSuffix).getString();

  }
  if (currentNode.getParent().hasNode("orginfo") && currentNode.getParent().getNode("orginfo").hasProperty("ORGTITLE" + langSuffix) && Utils.isNotEmpty(currentNode.getParent().getNode("orginfo").getProperty("ORGTITLE" + langSuffix).getString())) {
    title += " (" + currentNode.getParent().getNode("orginfo").getProperty("ORGTITLE" + langSuffix).getString() + ")";
  }

  if (currentNode.getParent().hasNode("serviceinfo")) {
    if (lang == "fr" && currentNode.getParent().getNode("serviceinfo").hasProperty("SERVICENAMEFRE"))
      title = currentNode.getParent().getNode("serviceinfo").getProperty("SERVICENAMEFRE").getString();
    if (lang == "en" && currentNode.getParent().getNode("serviceinfo").hasProperty("SERVICENAME"))
      title = currentNode.getParent().getNode("serviceinfo").getProperty("SERVICENAME").getString();
  }

  if (thisPage.getContentResource("thumbnail") != null) {
    Image image = new Image(thisPage.getContentResource("thumbnail"), "thumbnail");
    if (image.hasContent()) {
      image.draw(out);
    } else {
      out.write(String.format("<img src=\"%1s\" alt=\"%s\"/>", thisPage.getContentResource("thumbnail").getPath(), title));
    }
  } else if (!thisPage.getProperties().get("thumbnailReference", "none").equals("none")) {
    out.write(String.format("<img src=\"%1s\" alt=\"%s\"/>", thisPage.getProperties().get("thumbnailReference", "none"), title));
  }
%>
