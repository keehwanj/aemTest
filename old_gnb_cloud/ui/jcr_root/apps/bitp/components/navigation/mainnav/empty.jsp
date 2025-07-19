<%@ page session="false" import="com.day.cq.wcm.api.WCMMode"%><%
%><%@include file="/libs/foundation/global.jsp"%><%

if (WCMMode.fromRequest(slingRequest) == WCMMode.EDIT){
    %><img src="/libs/cq/ui/resources/0.gif" class="cq-list-placeholder" alt=""><%
}

%>