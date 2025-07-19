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

--%><%@ page import="com.day.cq.wcm.foundation.TextFormat,
    com.day.cq.wcm.foundation.DiffInfo,
    com.day.cq.wcm.foundation.DiffService,
    org.apache.commons.lang.StringEscapeUtils,
    com.day.cq.wcm.api.WCMMode,
    org.apache.sling.api.resource.ResourceUtil,
    org.apache.sling.api.resource.ValueMap" %><%
%><%@include file="/libs/foundation/global.jsp"%><%
boolean isDraft = properties.get("draftOnly", "false").equals("true");
if (!isDraft || WCMMode.fromRequest(request) == WCMMode.EDIT) {
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
        if (isDraft) {
            %><div class="docs-draft"><%
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
        if (isDraft) {
            %></div><%
        }
    } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
        %><img src="/libs/cq/ui/components/widget/0.gif" class="cq-text-placeholder" alt=""><%
    }
}
%>
