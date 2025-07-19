<%--
  Copyright 1997-2009 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  List component sub-script

--%>
<%@ page session="false" import="com.day.cq.wcm.api.WCMMode"%>
<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
if (WCMMode.fromRequest(slingRequest) == WCMMode.EDIT){
    %><img src="/libs/cq/ui/resources/0.gif" class="cq-list-placeholder" alt=""><%
}

// Get language and content bundle for that language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
}
%>
<cq:setContentBundle language="<%=lang%>" />
<%
String noData="Your search did not match any documents.";
if(lang=="fr"){
    noData="Votre recherche ne correspond à aucun document.";
}

out.print(noData);
%>