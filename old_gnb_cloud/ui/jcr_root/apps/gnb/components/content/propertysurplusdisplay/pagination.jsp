<%@ page session="false"  import="com.day.cq.wcm.foundation.List" %>
<%@page import="java.util.Locale"%>
<%@include file="/libs/wcm/global.jsp"%>
<%
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
  lang = "en";
}
%>
<cq:setContentBundle language="<%=lang%>" />
<%
List list = (List)request.getAttribute("list");

%><div class="pagination"><%
    if (list.getPreviousPageLink() != null) {
        %><div class="item"><%
            %><a href="<%= list.getPreviousPageLink() %>">&laquo; <fmt:message key="Previous Page" /></a><%
        %></div><%
    }
    if (list.getNextPageLink() != null) {
        %><div class="item"><%
            %><a href="<%= list.getNextPageLink() %>"><fmt:message key="Next Page" /> &raquo;</a><%
        %></div><%
    }
%></div>