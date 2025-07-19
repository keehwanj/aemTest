<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%
String text=properties.get("text","input text");
String link=properties.get("link","/content/gnb/en");

String size=properties.get("size","btn-lg");
String color=properties.get("color","btn-primary");

%>
<!--Start of Button-->
<%if(link.startsWith("http")){%>
	<a class="btn <%=color%> <%=size%> my-1" href="<%=link%>" role="button"><%=text%></a>
<%}else{%>
	<a class="btn <%=color%> <%=size%> my-1" href="<%=link%>.html" role="button"><%=text%></a>
<%}%>
<!--END of Button-->