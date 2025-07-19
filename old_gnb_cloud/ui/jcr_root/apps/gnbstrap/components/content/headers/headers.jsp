<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Random" %>
<%
String text		=properties.get("text","Please input headline text");
String type		=properties.get("type","text-crimson").trim();
String anchor	=properties.get("anchor","");
Random ran = new Random();
if(anchor==""){
	anchor	=ran.nextInt(1000)+"";
}
%>

<!--Start of Headers-->
<%if(type.equals("h1")){%>
	<h1 class="my-4"><%=text%><a id="<%=anchor%>"></a></h1>
<%} else if(type.equals("h2")){%>
	<h2 class="my-4"><%=text%><a id="<%=anchor%>"></a></h2>
<%} else if(type.equals("h3")){%>
	<h3 class="my-3"><%=text%><a id="<%=anchor%>"></a></h3>
<%} else if(type.equals("h4")){%>
	<h4 class="my-3"><%=text%><a id="<%=anchor%>"></a></h4>
<%} else{%>
	<h1 class="<%=type%>"><%=text%><a id="<%=anchor%>"></a></h1>
<%}%>
<!--END of Headers-->