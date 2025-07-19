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

  Compiles a JSON-formatted list of the available display options to
  draw list items. 

--%><%
%><%@ page import="com.day.cq.wcm.api.WCMMode,
                   com.day.cq.wcm.api.components.DropTarget,
                   com.day.cq.wcm.foundation.List,
                   java.util.Iterator"%><%
%><%@ page import="org.apache.jackrabbit.util.Text" %><%
%><%@include file="/libs/foundation/global.jsp"%><%

    final String regex = "^listitem\\_(.*)\\.jsp$";
    response.setContentType("text/plain");

%>[<%

    try {

        NodeIterator scripts = slingRequest.getResourceResolver().getResource(
            component.getPath()).adaptTo(Node.class).getNodes();
        String delim = "";
        while (scripts.hasNext()) {
            Node script = scripts.nextNode();
            String name = script.getName();
            if (name.matches(regex)) {
                String value = name.replaceFirst(regex, "$1");
                String text = value;
                try {
                    text = script.getProperty("jcr:title").getString();
                } catch (Exception e) { }
                %><%= delim %><%
                %>{<%
                    %>"text":"<%= text %>",<%
                    %>"value":"<%= value %>"<%
                %>}<%
                if ("".equals(delim)) delim = ",";
            }
        }

    } catch (RepositoryException re) {}

%>]