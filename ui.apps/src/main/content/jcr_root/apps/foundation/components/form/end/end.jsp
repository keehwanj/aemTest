<%@page session="false"%><%--
  Copyright 1997-2010 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Form 'end' component

  Draws the end of a form

--%><%@include file="/libs/foundation/global.jsp"%>
    <%@include file="/libs/foundation/components/form/common.jsp"%><%
%><%@ page import="com.day.cq.i18n.I18n,
                   com.day.cq.wcm.api.WCMMode,
                   com.day.cq.wcm.foundation.Placeholder,
                   com.day.cq.wcm.foundation.forms.FormsHelper,
                   com.day.cq.wcm.foundation.forms.LayoutHelper, org.apache.jackrabbit.util.Text" %>

<div class="form_row form-group row">
   <div class="col-sm-4"></div>
   <div class="col-sm-8">
<%
    final WCMMode wcmMode = WCMMode.fromRequest(request);
    final boolean isEditMode = (wcmMode == WCMMode.EDIT) || (wcmMode == WCMMode.DESIGN);
    final boolean hasSubmit = properties.get("submit", Boolean.FALSE);
    if ( hasSubmit ) {
        final boolean isSubmittable = FormsHelper.checkRule(resource, slingRequest,
                pageContext, "submittableRule");
        if (isSubmittable || isEditMode) {
            final String name = properties.get("name", "Submit");
            final String title = FormsHelper.getTitle(resource, i18n.get("Submit"));
            boolean clientValidation = FormsHelper.doClientValidation(slingRequest);
            //out.write("<input class=\"form_button_submit btn btn-primary\" type=\"" + (clientValidation ? "button" : "submit") + "\"");
            out.write("<input onclick=\"this.disabled=true; this.form.submit()\"  class=\"form_button_submit btn btn-primary\" type=\"" + (clientValidation ? "button" : "submit") + "\"");
            if (FormsHelper.isReadOnly(slingRequest)) {
                out.write(" disabled=\"disabled\"");
            }
            if ( name.length() > 0 ) {
                out.write(" name=\"");
                out.write(Text.encodeIllegalXMLCharacters(name));
                out.write("\"");
            }
            if ( title.length() > 0 ) {
                out.write(" value=\"");
                out.write(Text.encodeIllegalXMLCharacters(title));
                out.write("\"");
            }
            if (clientValidation) {
                StringBuilder clickBuilder = new StringBuilder();
                clickBuilder.append("if (")
                    .append(FormsHelper.getFormsPreCheckMethodName(slingRequest))
                    .append("('");
                if ( name.length() > 0 ) {
                    clickBuilder.append(name);
                }
                clickBuilder.append("'))")
                    .append(" { document.forms['")
                    .append(FormsHelper.getFormId(slingRequest))
                    .append("'].submit();} else return false;");

                out.write(" onclick=\"");
                out.write(xssAPI.encodeForHTMLAttr(clickBuilder.toString()));
                out.write("\"");
            }
            if (!isSubmittable) {
                out.write(" disabled=\"\"");
            }
            out.write(">");
        }
    }
    final boolean hasReset = properties.get("reset", Boolean.FALSE);
    if ( hasReset ) {
        %>&nbsp;&nbsp;&nbsp;<%
        String resetTitle = properties.get("resetTitle", i18n.get("Reset"));
        out.write("<input class=\"form_button_reset btn btn-default\" type=\"reset\"");
        if (FormsHelper.isReadOnly(slingRequest)) {
            out.write(" disabled=\"disabled\"");
        }
        if ( resetTitle.length() > 0 ) {
            out.write(" value=\"");
            out.write(Text.encodeIllegalXMLCharacters(resetTitle));
            out.write("\"");
        }
        out.write(">");
    }
    %></div>
  </div><%
    // draw the placeholder for UI mode touch
    if (!hasSubmit && !hasReset) {
        %><%= Placeholder.getDefaultPlaceholder(slingRequest, "Form End", "", "cq-marker-end") %><%
    }

    LayoutHelper.printDescription(FormsHelper.getDescription(resource, ""), out);
    FormsHelper.endForm(slingRequest);

    // turn of decoration and close the decorating DIV
    componentContext.setDecorate(false);
    %></div><%

    // draw the edit bar
    if (editContext != null) {
        editContext.includeEpilog(slingRequest, slingResponse, wcmMode);
    }
%></form>
