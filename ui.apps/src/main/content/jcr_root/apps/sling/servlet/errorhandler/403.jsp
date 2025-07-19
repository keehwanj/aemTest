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

  Generic 403 error handler

  If a sling sends a 403, this can either be a true forbidden, in the case the
  user has no read access to the resource, or it can be a forbidden triggered
  by the default GET servlet that does not allow a certain rendition.
  The latter is currently used to produce a nice "folder" output on author.

--%><%@page session="false"
            pageEncoding="utf-8"
            import="java.util.Iterator,
                    org.apache.sling.api.resource.Resource,
                    com.day.cq.wcm.api.WCMMode,
                    com.day.text.Text" %><%
%><%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0" %><%
%><sling:defineObjects /><%

    // check if resource exists
    if (resource != null) {
        resource = resourceResolver.getResource(resource.getPath());
    }
    if (resource == null || WCMMode.fromRequest(request) == WCMMode.DISABLED) {
        // send 403
        response.setStatus(403);
        %><!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
        <html>
            <head><title>403 Forbidden</title></head>
            <body>
                <h1>Forbidden</h1>
                <p>You don't have permission to access <%= request.getRequestURI() %> on this server.</p>
                <hr>
                <address><%= this.getServletConfig().getServletContext().getServerInfo() %></address>
            </body>
        </html><%
        return;
    }

    String title = Text.getName(resource.getPath());
    String parent = Text.getRelativeParent(resource.getPath(), 1);
    
%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title><%= title %></title>
</head>
<body style="background-color:white">
    <h1><%= title %></h1>
    <ul>
        <li><a href="<%= parent %>">..</a></li>
        <%
            Iterator<Resource> iter = resourceResolver.listChildren(resource);
            while (iter.hasNext()) {
                Resource child = iter.next();
                String path = child.getPath();
                String text = Text.getName(path);
                %><li><a href="<%= path %>"><%= text %></a></li><%
            }
        %>
    </ul>
    <hr>
    <address><%= this.getServletConfig().getServletContext().getServerInfo() %></address>
</body>
</html>

