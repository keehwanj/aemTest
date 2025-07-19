<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.t4g.cnb.test.Text" %>
<%
Text text = new Text();
out.write(text.getText());
%>
