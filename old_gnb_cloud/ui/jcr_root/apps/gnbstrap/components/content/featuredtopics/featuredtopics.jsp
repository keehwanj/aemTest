<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%
String type		=properties.get("type","alert-information");
String image	=properties.get("image","");

String link		=properties.get("link","");
if(link.startsWith("/content")){
	link=link+".html";
}

String linkText	=properties.get("linkText","Link text");
String title	=properties.get("title","Please input title");
String content	=properties.get("content","Please input content");



%>
<!--Start of Featured Card-->
<div class="card shadow-sm my-3">
    <img src="<%=image%>" class="feature-card-img-top">
    <div class="card-body d-flex flex-column">
        <h3 class="card-title"><a href="<%=link%>"><%=title%></a></h3>
        <p class="card-text"><%=content%></p>
    </div>
</div>
<!--END of Featured Card-->