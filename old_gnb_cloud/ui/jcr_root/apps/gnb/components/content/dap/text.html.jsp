<%@include file="/libs/foundation/global.jsp"%>
<%@page import="apps.gnb.components.content.dap.Test" %>
<%
Test text = new Test();
out.write(text.getText());
%>
