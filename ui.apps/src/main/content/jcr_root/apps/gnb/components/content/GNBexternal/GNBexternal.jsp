<%--
  Copyright 1997-2008 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  External component

  Shows the contents of another web site, with all links rewritten.

--%><%@ page import="com.day.cq.wcm.api.WCMMode,
        com.day.cq.wcm.commons.WCMUtils,
        com.day.text.Text,
        org.apache.commons.lang.StringEscapeUtils,
	org.apache.commons.httpclient.Header,
	org.apache.sling.api.resource.ResourceUtil,
        java.util.Map" %><%
%><%@include file="/libs/foundation/global.jsp"%>
<%
boolean noCache = properties.get("noCache",false);
if(noCache) {
	response.setHeader("Dispatcher", "no-cache");
  
}
%>
<sling:include addSelectors="spool"/>
