<%@page session="false"%><%--
  Copyright 1997-2011 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Form 'element' component

  Draws an element of a form

--%>
<%@include file="/libs/foundation/global.jsp" %><%
%><%@ page import="com.day.cq.wcm.foundation.forms.FormsHelper,
                   com.day.cq.wcm.foundation.forms.LayoutHelper,
                   java.util.Collections,
                   java.util.List,
                   java.util.Map,
                   java.util.Locale,
				   java.util.ResourceBundle,
				   com.day.cq.i18n.I18n,
                   org.apache.commons.lang3.StringEscapeUtils" %><%
	
	final Locale pageLocale = currentPage.getLanguage(true);
	final ResourceBundle resourceBundle = slingRequest.getResourceBundle(pageLocale);
	I18n i18n = new I18n(resourceBundle); 
					
    final String name = FormsHelper.getParameterName(resource);
    final String id = FormsHelper.getFieldId(slingRequest, resource);
    final boolean required = FormsHelper.isRequired(resource);
    final boolean hideTitle = properties.get("hideTitle", false);
    final String title = FormsHelper.getTitle(resource, i18n.get("Selection"));

    final List<String> values = FormsHelper.getValuesAsList(slingRequest, resource);

    Map<String, String> displayValues = FormsHelper.getOptions(slingRequest, resource);
    if (displayValues == null) {
        displayValues = Collections.singletonMap("item1", i18n.get("Item 1"));
    }

    %>
	<div class="form_row form-group checkbox_bottom_remove row">
		<div class="col-sm-4 control-label">
			<%LayoutHelper.printTitle(id, title, required, hideTitle, out);%>
        </div>
		<div class="form_rightcol col-sm-8" style="display: none;">&nbsp;</div>
    </div>
	<%
    int i = 0;
    for (String v : displayValues.keySet()) {
        final String t = displayValues.get(v);
        final String currentId = id + "-" + i;%>
		<div class="form_row form-group checkbox_bottom_remove row">
			<div class="col-sm-4 control-label">
            	<%LayoutHelper.printTitle(currentId, t, false, true, out);%>
            </div>
            <div class="form_rightcol col-sm-8 item_content">
                <%
                String checked = "";
                if (values.contains(v)) {
                    checked = " checked=\"checked\"";
                }
            %><input class="<%= FormsHelper.getCss(properties, "form_field form_field_checkbox") %>" type="checkbox"
                     id="<%= StringEscapeUtils.escapeHtml4(currentId) %>" name="<c:out value="<%= name %>"/>"
                     value="<c:out value="<%= v %>"/>" <%= checked %> />&nbsp;<c:out value="<%= t %>" />
        </div>
    </div><%

        i++;
    }


%>
<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-8">
    <%
    LayoutHelper.printDescription(FormsHelper.getDescription(resource, ""), out);
    LayoutHelper.printErrors(slingRequest, name, hideTitle, out);
	%>
  </div>
</div>
