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
    String snbPath = configurationPage.getProperties().get("org_snb_" + lang,String.class);
    Page snbsPage = pageManager.getPage(snbPath);  
    Page potentialsnbsPage = currentPage;
    Page potentialsnbPage = null;

    //snb
    while (potentialsnbsPage != null) {
        potentialsnbPage = potentialsnbsPage;
        if(potentialsnbsPage.getPath().equals(snbsPage.getPath()) ) {
            break;
        }
        potentialsnbsPage = potentialsnbsPage.getParent();
    }    

    //snb 
    if(potentialsnbPage!=null && potentialsnbsPage!= null) {
            out.write("<div class=\"deptPageHeader hidden-xs hidden-sm\" style=\"background:transparent'\"><a href=\"");
        	out.write(potentialsnbPage.getPath());         
        	out.write(".html\"><h2 class=\"department\">");
        	out.write(potentialsnbPage.getTitle());
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
    	<cq:include path="breadcrumbs" resourceType="snb/components/navigation/breadcrumbs"/>
	</div>
<%} else { %>
<!--<br />-->
<%} %>
<span class="printHeader"><%=properties.get("gnbPublisher","Services of New Brunswick").replace(", Canada","") %></span>