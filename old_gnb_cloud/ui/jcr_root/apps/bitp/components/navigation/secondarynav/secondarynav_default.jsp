<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<cq:include script="init.jsp" />

<%
  List list = (List) request.getAttribute("list");
  if (!list.isEmpty()) {
    out.write("<div id=\"navSecondary\">");
%>
    <cq:include script="<%= "base_body.jsp" %>" />
<%    
    out.write("</div>");
    out.write("<div class=\"clearfloat\"></div>");
  } else {
%>
    <cq:include script="empty.jsp" />
<%
  }
%>
