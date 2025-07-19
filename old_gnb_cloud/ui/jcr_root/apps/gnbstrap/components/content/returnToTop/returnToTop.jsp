<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%

String text	=properties.get("text","Return to top of page");
String top	=properties.get("top","top");

%>
<!--Start of Return to Top-->

<div class="container py-2">
	<p class="text-lg-right text-center text-dark">
		<a href="#<%=top%>"><%=text%> <i class="fas fa-chevron-circle-up"></i></a>
    </p>
</div>
<!--END of Return to Top-->