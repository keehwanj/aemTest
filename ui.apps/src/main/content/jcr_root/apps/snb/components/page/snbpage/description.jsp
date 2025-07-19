<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%
  Page thisPage;
  try {
    PageManager pm = currentPage.getPageManager();
    thisPage = pm.getPage(currentNode.getParent().getPath());
  } catch (Exception e) {
    log.error("error getting current page on gnbpage in description selector", e);
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

  String description = thisPage.getDescription();
  if (currentNode.hasProperty(lang + "Description")) description = currentNode.getProperty(lang + "Description").getString();
  if (currentNode.getParent().hasNode("orginfo") && currentNode.getParent().getNode("orginfo").hasProperty("GOAL" + langSuffix) && Utils.isNotEmpty(currentNode.getParent().getNode("orginfo").getProperty("GOAL" + langSuffix).getString())) {
    description = currentNode.getParent().getNode("orginfo").getProperty("GOAL" + langSuffix).getString();
  }
  
  if (currentNode.getParent().hasNode("serviceinfo")) {
    if (lang == "fr" && currentNode.getParent().getNode("serviceinfo").hasProperty("SERVICEDESCFRE"))
      description = currentNode.getParent().getNode("serviceinfo").getProperty("SERVICEDESCFRE").getString();
    if (lang == "en" && currentNode.getParent().getNode("serviceinfo").hasProperty("SERVICEDESC"))
      description = currentNode.getParent().getNode("serviceinfo").getProperty("SERVICEDESC").getString();
  }
  
  if (currentNode.getParent().hasNode("contactinfo") && currentNode.getParent().getNode("contactinfo").hasProperty("PERSONTYPE" + langSuffix) && Utils.isNotEmpty(currentNode.getParent().getNode("contactinfo").getProperty("PERSONTYPE" + langSuffix).getString())) {
    description = currentNode.getParent().getNode("contactinfo").getProperty("PERSONTYPE" + langSuffix).getString();
  }
  int length = 30; //limit description to 30 words
  if (length > 0 && description!=null) {
    int index = 0;
    for (int i = 0; i < length; i++) {
      index = description.indexOf(" ", index + 1);
      if (index == -1)
        break;
    }
    if (index != -1) {
      description= description.substring(0, index) + " ...";
    }
  }
  
  if (Utils.isNotEmpty(description)) {
    out.write(String.format("<p>%s</p>", description));

  }
%>