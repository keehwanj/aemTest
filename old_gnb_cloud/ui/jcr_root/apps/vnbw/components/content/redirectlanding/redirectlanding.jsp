<%@include file="/libs/foundation/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@ page import="com.t4g.cnb.utils.Utils" %>
<%@ page import="java.util.Locale" %>

<%
String redirect_E = properties.get("redirect_E", "");
if(redirect_E.equalsIgnoreCase("")){
	redirect_E="https://www.nbwomenscouncil.ca/content/vnbw-vfnb/en.html";
}

String redirect_F = properties.get("redirect_F", "");
if(redirect_F.equalsIgnoreCase("")){
	redirect_F="https://www.conseildesfemmesnb.ca/content/vnbw-vfnb/fr.html";
} 

String redirect_o = properties.get("redirect_o", "");
if(redirect_o.equalsIgnoreCase("")){
	redirect_o="https://www.conseildesfemmesnb.ca/content/vnbw-vfnb/fr.html";
} 


String condition_E = properties.get("condition_E", "");
if(condition_E.equalsIgnoreCase("")){
	condition_E="nbwomenscouncil";
} 

String condition_F = properties.get("condition_F", "");
if(condition_F.equalsIgnoreCase("")){
	condition_F="conseildesfemmesnb";
} 

//WCMMode.EDIT
if (WCMMode.fromRequest(request) == WCMMode.EDIT) { %>
	<img src="/libs/cq/ui/resources/0.gif" class="cq-text-placeholder" alt="">
<%
}
//live
else{
	String baseURL="www.nbwomenscouncil.ca";
	String url = request.getRequestURL().toString();
	baseURL = url.substring(0, url.length() - request.getRequestURI().length()) + request.getContextPath() + "/";
	if(baseURL.toLowerCase().contains(condition_E)){
        response.sendRedirect(redirect_E);
	}	
	else if(baseURL.toLowerCase().contains(condition_F)){
        response.sendRedirect(redirect_F);
	}
	else{
        response.sendRedirect(redirect_o);
	}    
}
%>