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

  List component sub-script

  Draws a list item as a news headline.
                                               r
  request attributes:
  - {com.day.cq.wcm.foundation.List} list The list
  - {com.day.cq.wcm.api.Page} listitem The list item as a page

--%><%
%><%@ page session="false"
           import="java.text.DateFormat,
                   java.util.Date,
                   com.day.cq.wcm.api.Page"%><%

    Page listItem = (Page)request.getAttribute("listitem");
    String title = listItem.getTitle() != null ? listItem.getTitle() : listItem.getName();
    String description = listItem.getDescription() != null ? listItem.getDescription() : "";
    Date defaultDate = new Date();
    Date date = listItem.getProperties().get("date", listItem.getProperties().get("cq:lastModified", defaultDate));

    %><li><p><a href="<%= listItem.getPath() %>.html" title="<%= title %>"><%

    if (defaultDate.getTime() != date.getTime()) {
        %><span class="news-date"><%= DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.SHORT).format(date) %></span>:&nbsp;<%
    }

    %><span class="news-title"><%= title %></span></a><%

    if (!"".equals(description)) {
        %><br/><span class="news-description"><%= description %></span><%
    }

%></p></li>