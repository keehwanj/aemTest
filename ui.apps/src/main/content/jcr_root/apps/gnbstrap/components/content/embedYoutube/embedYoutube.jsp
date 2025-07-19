<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="org.slf4j.Logger"%>

<%
  // Get language and content bundle for that language
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }
%>
<%
String youtube_id	=properties.get("youtube_id","845yQZKCyEU");
%>

<!--Start of Embed-->
<div class="my-3 py-2">
    <div class="embed-responsive embed-responsive-16by9">
		<iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/<%=youtube_id%>?hl=<%=lang%>&persist_hl=1&controls=2&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
    </div>
</div>    
<!--END of Embed-->