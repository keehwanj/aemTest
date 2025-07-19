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

    String wel_biensPath = configurationPage.getProperties().get("wel_bien_" + lang,String.class);

    Page departmentsPage = pageManager.getPage(departmentsPath);

    Page wel_biensPage = pageManager.getPage(wel_biensPath);    

    Page potentialDepartmentsPage = currentPage;
    Page potentialWel_biensPage = currentPage;

    Page potentialDepartmentalPage = null;
    Page potentialWel_bienPage = null;

    //department
    while (potentialDepartmentsPage != null) {
        if(potentialDepartmentsPage.getPath().equals(departmentsPage.getPath()) ) {
            break;
        }
        potentialDepartmentalPage = potentialDepartmentsPage;
        potentialDepartmentsPage = potentialDepartmentsPage.getParent();
    }

    //wel_bien
    while (potentialWel_biensPage != null) {
        potentialWel_bienPage = potentialWel_biensPage;
        if(potentialWel_biensPage.getPath().equals(wel_biensPage.getPath()) ) {
            break;
        }
        potentialWel_biensPage = potentialWel_biensPage.getParent();
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
    //wel-bien 
    if(potentialWel_bienPage!=null && potentialWel_biensPage!= null) {
            out.write("<div class=\"deptPageHeader hidden-xs hidden-sm\" style=\"background:transparent'\"><a href=\"");
        	out.write(potentialWel_bienPage.getPath());         
        	out.write(".html\"><h2 class=\"department\">");
        	out.write(potentialWel_bienPage.getTitle());
        	out.write("</h2></a></div>");
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