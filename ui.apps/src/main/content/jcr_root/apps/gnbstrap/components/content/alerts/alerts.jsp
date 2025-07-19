<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%

String title	=properties.get("title","Please input title");
String content	=properties.get("content","Please input content");
String link		=properties.get("link","");
if(link.startsWith("/content")){
	link=link+".html";
}
String linkText	=properties.get("linkText","Link text");

String type		=properties.get("type","alert-information");

%>
<!--Start of Alert-->
<div class="alert <%=type%> mt-4 mb-4" role="alert">
    <h3><%=title%></h3>
    <p><%=content%></p>
    <%if(link!=""){ %>
    	<a class="btn btn-primary" href="<%=link%>" role="button"><%=linkText%></a>
    <% } %>
</div>
<!--END of Alert-->