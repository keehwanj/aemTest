<%@include file="/libs/foundation/global.jsp" %>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Multimedia"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%
String lang = "fr";
String langSuffix = "_F";
String langSuffix2 = "FRE";
String langSuffix3 = "FRE";
String tagSuffix = "-fra";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    langSuffix = "_E";
    lang = "en";
    langSuffix2 = "";
    langSuffix3 = "ENG";
    tagSuffix = "-eng";
}

String keywords = WCMUtils.getKeywords(currentPage);
//2013-12-7, added by Keehwan Jee
//keywords =keywords+" , "+currentPage.getTitle();
//String keywords = "Connie Is Great!";

String description = properties.get("jcr:description",currentPage.getTitle());
String title = currentPage.getPageTitle() != null ? currentPage.getPageTitle() : currentPage.getTitle() !=null ? currentPage.getTitle() : currentPage.getName();
//START of NEW
if(keywords.equals("")||keywords==null){
    keywords=title;
}
//END of NEW
String created = properties.get("gnbCreated",properties.get("jcr:created",""));
String modified = properties.get("cq:lastModified",properties.get("gnbCreated",properties.get("jcr:created","")));

%>
