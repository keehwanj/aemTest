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

  Atom feed renderer for list nodes

  Draws the current list as a feed, listing its items as feed entries.

--%><%@ page session="false" %><%
%><%@ page import="java.util.Iterator,
                   com.day.cq.wcm.api.Page,
                   com.t4g.cnb.cq.wcm.foundation.List,
                   com.day.cq.commons.ProductInfoService,
                   com.day.cq.commons.ProductInfo,
                   com.day.cq.wcm.api.WCMMode" %><%
%><%@ taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0" %><%
%><%@ taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %><%
%><%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%
%><%@ taglib prefix="atom" uri="http://sling.apache.org/taglibs/atom/1.0" %><%
%><cq:defineObjects /><%

    try {
        WCMMode.DISABLED.toRequest(request);
        ProductInfo pi = sling.getService(ProductInfoService.class).getInfo();

        String url = slingRequest.getResourceResolver().map(request, currentPage.getPath());
        String link = url + ".html";
        String title = currentPage.getTitle() != null ?
                currentPage.getTitle() : currentNode.getName();
        String subTitle = currentPage.getDescription() != null ?
                currentPage.getDescription() : (String)properties.get("jcr:description", null);
        String genUri = pi.getUrl();
        String genName = pi.getName();
        String genVersion = pi.getShortVersion();

        %><atom:feed id="<%= url %>"><%
            %><atom:title><c:out value="<%= title %>"/></atom:title><%
            if (subTitle != null) {
                %><atom:subtitle><c:out value="<%= subTitle %>"/></atom:subtitle><%
            }
        %><atom:link href="<%= link %>" rel="self"/><%
        %><atom:generator uri="<%= genUri %>" version="<%= genVersion%>"><%= genName %></atom:generator><%

        List list = new List(slingRequest);
        Iterator<Page> i = list.getPages();
        while (i.hasNext()) {
            String path = i.next().getPath() + ".feedentry";
            %><sling:include path="<%= path %>"/><%
        }

        %></atom:feed><%

    } catch (Exception e) {
        log.error("error rendering feed for list", e);
    }
%>