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

%><ul class="pager"><%
    if (list.getPreviousPageLink() != null) {
        %><li class="item previous"><%
            %><a href="<%= list.getPreviousPageLink() %>" id="previous">&laquo; <fmt:message key="Previous Page" /></a><%
        %></li><%
    }
    if (list.getNextPageLink() != null) {
        %><li class="item next"><%
            %><a href="<%= list.getNextPageLink() %> " id="next"><fmt:message key="Next Page" /> &raquo;</a><%
        %></li><%
    }
%></ul>
<script>

    var lang = '<%= lang %>';

    var partToRemove;
    if (lang === 'en'){

        partToRemove = '/_jcr_content/mainContent_par/propertytenderlist_0.nocache';
    } 
    else{

        partToRemove = '/_jcr_content/mainContent_par/propertytenderlist.nocache';
    }

    // Get the anchor element by its ID
    var previous = document.getElementById('previous');
    var next = document.getElementById('next');
  

    // Get/Set the current href value
    if(previous!=null){

        var previousHref = previous.getAttribute('href');
        var newPreviousHref = previousHref.replace(partToRemove, '');
        previous.setAttribute('href', newPreviousHref);
    }
    if(next!=null){
        
        var nextHref = next.getAttribute('href');
        var newNextHref = nextHref.replace(partToRemove, '');
        next.setAttribute('href', newNextHref);
    }
</script>