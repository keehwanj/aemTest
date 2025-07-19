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

  Text component

  Draws text. If it's not rich text it is formatted beforehand.

--%><%@ page import="com.day.cq.wcm.api.WCMMode,
    com.day.cq.wcm.api.components.ComponentEditConfig,
    com.day.cq.wcm.api.components.InplaceEditingConfig,
    com.day.cq.wcm.foundation.DiffInfo,
    com.day.cq.wcm.foundation.DiffService,
    com.day.cq.wcm.foundation.TextFormat" %>
<%@ page import="org.apache.sling.api.resource.ResourceUtil" %>
<%
%><%@include file="/libs/foundation/global.jsp"%><%
    if (properties.get("text", "").length() > 0) {
        String text = properties.get("text", String.class);
        boolean isRichText = properties.get("textIsRich", "false").equals("true");
        final DiffInfo diffInfo = resource.adaptTo(DiffInfo.class);
        if ( diffInfo != null ) {
            final DiffService diffService = sling.getService(DiffService.class);
            final ValueMap map = ResourceUtil.getValueMap(diffInfo.getContent());
            final String diffOutput = DiffInfo.getDiffOutput(diffService, diffInfo, text, isRichText, map.get("text", ""));
            if ( diffOutput != null ) {
                text = diffOutput;
                isRichText = true;
            }
        }
        %><div class="text"><%
        if (isRichText) {
            %><%= text %><%
        } else {
            TextFormat fmt = new TextFormat();
            fmt.setTagUlOpen("<ul>");
            fmt.setTagOlOpen("<ol start=\"%s\">");
            %><%= fmt.format(text) %><%
        }
        %></div><%
    } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
        InplaceEditingConfig ipeConfig = null;
        if (editContext == null) {
            // trying to get determine inplace editing through Component for directly
            // accessed paragraphs
            ComponentEditConfig editConfig = component.getEditConfig();
            if (editConfig != null) {
                ipeConfig = editConfig.getInplaceEditingConfig();
            }
        } else {
            ipeConfig = editContext.getEditConfig().getInplaceEditingConfig();
        }
        if ((ipeConfig != null) && ipeConfig.isActive()) {
            %><div class="text"><span class="cq-text-placeholder-ipe">&para;</span></div><%
        } else {
            %><img src="/libs/cq/ui/resources/0.gif" class="cq-text-placeholder" alt=""><%
        }
    }
%>
