<%@include file="/libs/wcm/global.jsp"%>
<%@page session="false"%><%--
  Copyright 1997-2008 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Breadcrumb component

  Draws the breadcrumb

--%><%@include file="/libs/foundation/global.jsp"%><%
%><%

    // get starting point of trail
    long level = properties.get("absParent", 2L);
    long endLevel = properties.get("relParent", 1L);
    String delimStr = properties.get("delim", "&nbsp;&gt;&nbsp;");
    String trailStr = properties.get("trail", "");
    int currentLevel = currentPage.getDepth();
    String delim = "";

	String type = properties.get("type", "wrapper-forest");

%>
<!-- BREADCRUMBS -->
  <div class="<%=type%>">
    <div class="container">
      <div aria-label="breadcrumb">
        <ol class="breadcrumb align-items-center">
<%
    while (level < currentLevel - endLevel) {
        Page trail = currentPage.getAbsoluteParent((int) level);
        if (trail == null) {
            break;
        }
        String title = trail.getNavigationTitle();
        if (title == null || title.equals("")) {
            title = trail.getNavigationTitle();
        }
        if (title == null || title.equals("")) {
            title = trail.getTitle();
        }
        if (title == null || title.equals("")) {
            title = trail.getName();
        }
        %><%= xssAPI.filterHTML(delim) %><%
 		if(!trail.isHideInNav() && trail.isValid()) {
        %>
		<li class="breadcrumb-item"><a href="<%= xssAPI.getValidHref(trail.getPath()+".html") %>"
             onclick="CQ_Analytics.record({event:'followBreadcrumb',values: { breadcrumbPath: '<%= xssAPI.getValidHref(trail.getPath()) %>' },collect: false,options: { obj: this },componentPath: '<%=resource.getResourceType()%>'})"><%
        %><%= xssAPI.encodeForHTML(title) %></a></li>
		<%
        }   
        //delim = delimStr;
        level++;
    }%>
        </ol>
      </div>
    </div>
  </div>
<%

    if (trailStr.length() > 0) {
        %><%= xssAPI.filterHTML(trailStr) %><%
    }

%>
