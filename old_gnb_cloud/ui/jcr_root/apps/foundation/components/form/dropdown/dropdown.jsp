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

  Form 'element' component

  Draws an element of a form

--%><%@include file="/libs/foundation/global.jsp"%><%
%><%@ page import="java.util.LinkedHashMap,
        java.util.List,
        java.util.Map,
        java.util.Collections,
        com.day.cq.wcm.foundation.forms.FormsHelper,
        com.day.cq.wcm.foundation.forms.LayoutHelper,
        com.day.cq.wcm.foundation.forms.ValidationInfo,
		java.util.Locale,
		java.util.ResourceBundle,
		com.day.cq.i18n.I18n" %><%
		
	final Locale pageLocale = currentPage.getLanguage(true);
	final ResourceBundle resourceBundle = slingRequest.getResourceBundle(pageLocale);
	I18n i18n = new I18n(resourceBundle);  
		
    String name = FormsHelper.getParameterName(resource);
    if(name != null)
	name = xssAPI.encodeForHTMLAttr(name);
    String id = FormsHelper.getFieldId(slingRequest, resource);
    if(id != null)
        id = xssAPI.encodeForHTMLAttr(id);
    final boolean required = FormsHelper.isRequired(resource);
    final boolean hideTitle = properties.get("hideTitle", false);
    final String title = FormsHelper.getTitle(resource, i18n.get("Selection"));
    
    final List<String> values = FormsHelper.getValuesAsList(slingRequest, resource);

    Map<String, String> displayValues = FormsHelper.getOptions(slingRequest, resource);
    if ( displayValues == null ) {
        displayValues = new LinkedHashMap<String, String>();
        displayValues.put("item1", i18n.get("Item 1"));
        displayValues.put("item2", i18n.get("Item 2"));
        displayValues.put("item3", i18n.get("Item 3"));
    }
    final boolean multiSelect = FormsHelper.hasMultiSelection(resource);
    final String width = xssAPI.encodeForHTMLAttr(properties.get("width", ""));
%>
    <div class="form_row form-group bottom_remove row">
		<div class="col-sm-4 control-label">
       		<% LayoutHelper.printTitle(id, title, required, hideTitle, out); %>
        </div>

       <div class="form_rightcol col-sm-8">
        <%
        if ( multiSelect ) {
            %><select class="<%= FormsHelper.getCss(properties, "form_field form_field_select form-control input-sm") %>" id="<%=id %>" name="<%=name%>" multiple="multiple" <%= (width.length()>0?"style='width:"+width+"px;'":"") %>><%
        } else {
            %><select class="<%= FormsHelper.getCss(properties, "form_field form_field_select form-control input-sm") %>" id="<%=id %>" name="<%=name%>" <%= (width.length()>0?"style='width:"+ width +"px;'":"") %>><%
        }
        for(String key : displayValues.keySet()) {
            String v = xssAPI.encodeForHTML(key);
            String t = displayValues.get(key);
            t = xssAPI.encodeForHTML(t);
            if ( values.contains(v) ) {
                %><option value="<%=v%>" selected><%=t%></option><%
            } else {
                %><option value="<%=v%>"><%=t%></option><%                        
            }
        }
        %></select>
          </div>
        </div>

<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-8">
    <%
    LayoutHelper.printDescription(FormsHelper.getDescription(resource, ""), out);
    LayoutHelper.printErrors(slingRequest, name, hideTitle, out);
	%>
  </div>
</div>
