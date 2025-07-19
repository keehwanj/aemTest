<%@include file="/libs/foundation/global.jsp"%>

<%
String twitterInfo = properties.get("twitterInfo", "");
%>

<%
if (twitterInfo.equals("")){%>
	<cq:include script="empty.jsp" />
<%
}
else{
	out.write("<p>");
	out.write(twitterInfo);
    out.write("</p>");
}
%>

