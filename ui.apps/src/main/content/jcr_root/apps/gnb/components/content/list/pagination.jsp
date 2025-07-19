<%@ page session="false"  import="com.t4g.cnb.cq.wcm.foundation.List" %><%

List list = (List)request.getAttribute("list");

%><div class="pagination"><%
    if (list.getPreviousPageLink() != null) {
        %><div class="previous"><%
            %><a href="<%= list.getPreviousPageLink() %>">&laquo; Previous</a><%
        %></div><%
    }
    if (list.getNextPageLink() != null) {
        %><div class="next"><%
            %><a href="<%= list.getNextPageLink() %>">Next &raquo;</a><%
        %></div><%
    }
%></div>