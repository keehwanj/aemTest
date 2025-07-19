<%@include file="/libs/wcm/global.jsp" %>
<%@ page import="java.util.Iterator,
        com.day.text.Text,
        com.day.cq.wcm.api.PageFilter, com.day.cq.wcm.api.Page" %>
<%@page import="java.util.Locale"%>
<%
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
try {
    Page configurationPage = pageManager.getPage("/content/gnbconfig");
    String departmentsPath = configurationPage.getProperties().get("departmentsPage_" + lang,String.class);
    Page departmentsPage = pageManager.getPage(departmentsPath);
    Page potentialDepartmentsPage = currentPage;
    Page potentialDepartmentalPage = null;

    //department
    while (potentialDepartmentsPage != null) {
        if(potentialDepartmentsPage.getPath().equals(departmentsPage.getPath()) ) {
            break;
        }
        potentialDepartmentalPage = potentialDepartmentsPage;
        potentialDepartmentsPage = potentialDepartmentsPage.getParent();
    }

    //gnb department
    if(potentialDepartmentalPage!=null && potentialDepartmentsPage!= null) {

        //checking if public library website?(public library want department name to be moved next to logo.
        if(!potentialDepartmentalPage.getPath().contains("/departments/nbpl")&&!potentialDepartmentalPage.getPath().contains("/ministeres/bpnb")){
            out.write("<div class=\"deptPageHeader hidden-xs hidden-sm\" style=\"background:transparent'\"><a href=\"");
        	out.write(potentialDepartmentalPage.getPath());         
        	out.write(".html\"><h2 class=\"department\">");
        	out.write(potentialDepartmentalPage.getTitle());
        	out.write("</h2></a></div>");
        }
    }

}catch (Exception e) {
    log.error("unable to get depatments page",e);
}
%>
<div id="mainNav">
	<cq:include path="mainNav_ipar" resourceType="foundation/components/iparsys"/>
</div>
<div class="clearfloat"></div>
<% if(!properties.get("hideBreadcrumbs",false)) {%>
	<div id="breadcrumbNav">
    	<cq:include path="breadcrumbs" resourceType="gnb/components/navigation/breadcrumbs"/>
	</div>
<%} else { %>
<br />
<%} %>
<span class="printHeader"><%=properties.get("gnbPublisher","Government of New Brunswick").replace(", Canada","") %></span>