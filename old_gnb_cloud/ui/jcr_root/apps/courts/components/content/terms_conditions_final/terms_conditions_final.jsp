<%@include file="/libs/foundation/global.jsp" %>
<%@ page session="false" import="com.day.cq.wcm.api.WCMMode"%>
<%
String sourceURL	= properties.get("sourceURL", "/content/cour/en/terms-and-conditions");
String oppositeURL	= properties.get("oppositeURL", "");
String referer  	= request.getHeader("referer");
String a			= request.getParameter("a");

if (WCMMode.fromRequest(slingRequest) == WCMMode.EDIT){
    %><img src="/libs/cq/ui/resources/0.gif" class="cq-list-placeholder" alt=""><%
}else{
	if(a==""||a==null){
        if(referer!=null){
	        if(referer.contains(oppositeURL)){
				%><cq:include script="empty.jsp" /><%
        	}else{
                response.sendRedirect(sourceURL+".html");
        	}
        }else{
            response.sendRedirect(sourceURL+".html");
        }
	}else{
		%><cq:include script="empty.jsp" /><%
	}
}
%>
