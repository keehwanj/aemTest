<%@ include file="/libs/foundation/global.jsp"%>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@ page import="com.day.cq.wcm.foundation.List"%>
<%@ page import="java.util.Iterator"%>

<%
//finding the proper language
String lang = "fr";
String language="French";


Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
   	lang = "en";
	language="English";

}
WCMMode mode = WCMMode.fromRequest(request);
try{ 
  String path = properties.get("parentPage","");
   if(path.equals("")){
       currentNode.setProperty("parentPage",currentPage.getPath());
       currentNode.save();
   }
}catch (Exception e) {}%>

<cq:include script="init.jsp"/>
<cq:setContentBundle language="<%=lang%>" />


<%
List list = (List) request.getAttribute("list");
out.print(list.size());
//out.print(list.getPath());
if (!list.isEmpty()) {
%>

<%
}
%>

