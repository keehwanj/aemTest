<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%

String type		=properties.get("type","");
String link		=properties.get("link","#");
if(link.startsWith("/content")){
	link=link+".html";
}

String title	=properties.get("title","Please input title");
String content	=properties.get("content","Please input content");

%>
<!--Start of Subtopics-->
<div class="card my-2">
   	<div class="card-body">
       	<h3 class="card-title">
            <a class="<%=type%>" href="<%=link%>"><%=title%></a>
       	</h3>
       	<p class="card-text"><%=content%></p>
   	</div>
</div>
<!--END of Subtopics-->