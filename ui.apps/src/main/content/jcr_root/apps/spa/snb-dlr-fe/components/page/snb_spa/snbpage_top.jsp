<%@include file="/libs/foundation/global.jsp"%>
<%@page session="false" contentType="text/html; charset=utf-8" %>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %>
<%@page import="java.util.Locale"%>



<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) { 
	lang = "fr"; 
    }//end of inner if
%>
