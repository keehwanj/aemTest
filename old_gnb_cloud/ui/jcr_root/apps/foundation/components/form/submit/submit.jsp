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

--%><%@include file="/libs/foundation/global.jsp"%>
    <%@include file="/libs/foundation/components/form/common.jsp"%><%
%><%@ page import="com.day.cq.wcm.foundation.forms.FormsHelper,
        com.day.cq.wcm.foundation.forms.LayoutHelper,
        org.apache.jackrabbit.util.Text" %><%

    final String name = properties.get("name", "Submit");
    final String title = FormsHelper.getTitle(resource, i18n.get("Submit"));
    final String width = properties.get("width", "");
    final String css = FormsHelper.getCss(properties, "form_button_submit");
%>
    <div class="form_row form-group row">
  		<!--START of col-sm-4-->  
  		<div class="col-sm-4">        
      		<% LayoutHelper.printTitle(null, null, false, out); %>
        </div>    
      <div class="form_rightcol col-sm-4">
        <%
        boolean clientValidation = FormsHelper.doClientValidation(slingRequest);
		out.write("<input type=\"" + (clientValidation ? "button" : "submit") + "\" class=\"btn btn-primary ddd ddd");
		//out.write("<input type=\"" + (clientValidation ? "button" : "submit") + "\" onclick=\"this.disabled = true\" class=\"btn btn-primary ");
        out.write(css);
        out.write("\"");
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
            clickBuilder.append("')) { document.forms['")
                    .append(FormsHelper.getFormId(slingRequest))
                    .append("'].submit();} else return false;");

            out.write(" onclick=\"");
            out.write(xssAPI.encodeForHTMLAttr(clickBuilder.toString()));
            out.write("\"");
        }

        if(width.length()>0) {
            StringBuilder styleBuilder = new StringBuilder();
            styleBuilder.append("width:")
                    .append(width)
                    .append("px;");

            out.write(" style=\"");
            out.write(xssAPI.encodeForHTMLAttr(styleBuilder.toString()));
            out.write("\"");

        }

        out.write(">");
        %>
      </div>
    </div>
    <% LayoutHelper.printDescription(FormsHelper.getDescription(resource, ""), out); %>