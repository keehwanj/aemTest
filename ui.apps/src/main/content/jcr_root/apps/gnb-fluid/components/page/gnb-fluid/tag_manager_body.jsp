<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    }//end of inner if
%>


<!-- Google Tag Manager_body -->
<%
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {%>
<!-- Google Tag Manager-EN -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGVPDD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager-EN -->

<%
}
else{
%>
<!-- Google Tag Manager-FR -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFLNPR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager-FR -->
<%
}
%>
<!--End of Google Analytics-->   
<!-- End Google Tag Manager_body -->
