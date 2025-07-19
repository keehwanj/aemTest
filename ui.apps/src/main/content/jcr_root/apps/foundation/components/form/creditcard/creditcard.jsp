<%@page session="false"%><%--

  ADOBE CONFIDENTIAL
  __________________

   Copyright 2012 Adobe Systems Incorporated
   All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe Systems Incorporated and its suppliers,
  if any.  The intellectual and technical concepts contained
  herein are proprietary to Adobe Systems Incorporated and its
  suppliers and are protected by trade secret or copyright law.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe Systems Incorporated.

  ==============================================================================

  An example compound form component which renders fields for collecting
  credit-card details.

  ==============================================================================

--%><%@include file="/libs/foundation/global.jsp"%><%
%><%@ page import="com.day.cq.i18n.I18n,
        com.day.cq.wcm.foundation.forms.FormsHelper,
        com.day.cq.wcm.foundation.forms.LayoutHelper,
        java.util.Locale,
		java.util.ArrayList,
		java.util.List,
		java.util.ResourceBundle,
		org.apache.commons.lang.StringUtils,
		com.day.cq.wcm.foundation.forms.FormsConstants,
		com.adobe.cq.commerce.api.CommerceService,
		org.apache.commons.collections.CollectionUtils" %><%

    final Locale pageLocale = currentPage.getLanguage(true);
    final ResourceBundle bundle = slingRequest.getResourceBundle(pageLocale);
    I18n i18n = new I18n(bundle);

    final String name = FormsHelper.getParameterName(resource);
    final String id = FormsHelper.getFieldId(slingRequest, resource);

    String required = StringUtils.join(properties.get(FormsConstants.ELEMENT_PROPERTY_REQUIRED, String[].class), ",");
    if (required == null) {
        required = "";
    }

    final boolean readOnly = FormsHelper.isReadOnly(slingRequest, resource);
    final boolean hideTitle = properties.get("hideTitle", false);
    final String title = FormsHelper.getTitle(resource, i18n.get("Credit Card"));
    final String[] unfilteredTypeList = properties.get("ccTypes", new String[]{});
    final boolean showCCV = properties.get("showCCV", true);

    final String ccType = FormsHelper.getValue(slingRequest, resource, name + ".credit-card-type");
    final String ccNumber = FormsHelper.getValue(slingRequest, resource, name + ".primary-account-number");
    final String nameOnCard = FormsHelper.getValue(slingRequest, resource, name + ".name-on-card");
    final String expiryMonth = FormsHelper.getValue(slingRequest, resource, name + ".expiration-date-month");
    final String expiryYear = FormsHelper.getValue(slingRequest, resource, name + ".expiration-date-year");
    final String ccv = FormsHelper.getValue(slingRequest, resource, name + ".ccv");

    List<String> ccTypeList = new ArrayList<String>();
    // Check for legacy (pre-PaymentMethod) credit card type filtering:
    if (properties.get("applyCommerceCreditCardTypeFilter", false)) {
        CommerceService commerceService = resource.adaptTo(CommerceService.class);
        List<String> filter = commerceService.getCreditCardTypes();
        for (String ccTypeRecord : unfilteredTypeList) {
            String[] parts = ccTypeRecord.split("=");
            for (String ccCode : filter) {
                if (ccCode.equals("*") || ccCode.equalsIgnoreCase(parts[0])) {
                    ccTypeList.add(ccTypeRecord);
                }
            }
        }
    } else {
        CollectionUtils.addAll(ccTypeList, unfilteredTypeList);
    }

%><cq:includeClientLib categories="cq.foundation.creditcard" /><%

    if (!hideTitle) { %>
        <div class="form_row form-group row">
			<div class="col-sm-4">
            	<% LayoutHelper.printTitle(id, title, false, hideTitle, out); %>
            </div>    
        </div> <%
    }

    if (readOnly) {
        String ccTypeValue = " ";
        for (String ccTypeRecord : ccTypeList) {
            String[] parts = ccTypeRecord.split("=");
            if (parts.length == 2 && parts[0].equalsIgnoreCase(ccType)) {
                ccTypeValue = parts[1];
                break;
            }
        } %>
        <div class="form_row col-sm-8">
            <div class="form_rightcol">
                <%= xssAPI.encodeForHTML(ccTypeValue) %> <%= xssAPI.encodeForHTML(ccNumber != null ? ccNumber : " ") %>
            </div>
            <div class="form_rightcol">
                <%= i18n.get("Name on Card: ")%> <%= xssAPI.encodeForHTML(nameOnCard != null ? nameOnCard : " ") %>
            </div>
            <div class="form_rightcol">
                <%= i18n.get("Expires: ")%> <%= xssAPI.encodeForHTML(expiryMonth != null ? expiryMonth : " ") %>/<%= xssAPI.encodeForHTML(expiryYear != null ? expiryYear : " ") %>
            </div>
            <% // PCI DSS forbids storage of CCV, so there's no point in showing an empty value... %>
        </div> <%
    } else { %>
        <div class="form_row form-group row">    
        <div class="col-sm-4"></div>    
        <div class="col-sm-8">    




        <div class="form_row row">
            <div class="form_rightcol inner-addon right-addon"><%
                LayoutHelper.printDescription(id + "-credit-card-type", bundle.getString("Credit Card Type"), out);
                LayoutHelper.printErrors(slingRequest, name + ".credit-card-type", hideTitle, out); %>
                <select class="<%= FormsHelper.getCss(properties, "form_field form_field_select form_cc_type form-control input-sm") %>"
                        id="<%= xssAPI.encodeForHTMLAttr(id + "-credit-card-type") %>"
                        name="<%= xssAPI.encodeForHTMLAttr(name + ".credit-card-type") %>"><%
                    for (String ccTypeRecord : ccTypeList) {
                        String[] parts = ccTypeRecord.split("=");
                        if (parts.length == 2) {
                            if (parts[0].equalsIgnoreCase(ccType)) {
                                %><option value="<%= xssAPI.encodeForHTMLAttr(parts[0]) %>" selected><%= xssAPI.encodeForHTML(parts[1]) %></option><%
                            } else {
                                %><option value="<%= xssAPI.encodeForHTMLAttr(parts[0]) %>"><%= xssAPI.encodeForHTML(parts[1]) %></option><%
                            }
                        }
                    }%>
                </select>
                <%if(required.contains("credit-card-type")){%>
                	<i class="glyphicon glyphicon-asterisk mysize form_rightcolmark"></i>
                <%}%>    
            </div>
        </div>


        <div class="form_row row">
            <div class="form_rightcol inner-addon right-addon"><%
                LayoutHelper.printDescription(id + "-primary-account-number", bundle.getString("Credit Card Number"), out);
                LayoutHelper.printErrors(slingRequest, name + ".primary-account-number", hideTitle, out); %>
                <input class="<%= FormsHelper.getCss(properties, "form_field form_field_text form_cc_number form-control input-sm") %>"
                       id="<%= xssAPI.encodeForHTMLAttr(id + "-primary-account-number") %>"
                       name="<%= xssAPI.encodeForHTMLAttr(name + ".primary-account-number") %>"
                       value="<%= xssAPI.encodeForHTMLAttr(ccNumber != null ? ccNumber : "") %>"
                       autocomplete="off" size="16">
                <%if(required.contains("primary-account-number")){%>
                	<i class="glyphicon glyphicon-asterisk mysize form_rightcolmark"></i>
                <%}%>                

            </div>
        </div>

        <div class="form_row row">
            <div class="form_rightcol inner-addon right-addon"><%
                LayoutHelper.printDescription(id + "-name-on-card", bundle.getString("Name on Card"), out);
                LayoutHelper.printErrors(slingRequest, name + ".name-on-card", hideTitle, out); %>
                <input class="<%= FormsHelper.getCss(properties, "form_field form_field_text form_cc_nameoncard form-control input-sm") %>"
                       id="<%= xssAPI.encodeForHTMLAttr(id + "-name-on-card") %>"
                       name="<%= xssAPI.encodeForHTMLAttr(name + ".name-on-card") %>"
                       value="<%= xssAPI.encodeForHTMLAttr(nameOnCard != null ? nameOnCard : "") %>"
                       size="16">
                <%if(required.contains("name-on-card")){%>
                	<i class="glyphicon glyphicon-asterisk mysize form_rightcolmark"></i>
                <%}%>
            </div>
        </div>


        <div class="form_row row">
            <div class="form_rightcol inner-addon right-addon">
                <% if (showCCV) { %>
                    <div class="form_cc_security_code"><%
                            LayoutHelper.printDescription(id + "-ccv", bundle.getString("Security Code"), out);
                            LayoutHelper.printErrors(slingRequest, name + ".ccv", hideTitle, out); %>
                        <input class="<%= FormsHelper.getCss(properties, "form_field form_field_text form_cc_ccv form-control input-sm") %>"
                               id="<%= xssAPI.encodeForHTMLAttr(id + "-ccv") %>"
                               name="<%= xssAPI.encodeForHTMLAttr(name + ".ccv") %>"
                               value="<%= xssAPI.encodeForHTMLAttr(ccv != null ? ccv : "") %>"
                               autocomplete="off">
                		<%if(required.contains("ccv")){%>
                			<i class="glyphicon glyphicon-asterisk mysize form_rightcolmark"></i>
                		<%}%>                        

                    </div>
                <% } %>
                <div class="form_cc_expiry_month inner-addon right-addon"><%
                    LayoutHelper.printDescription(id + "-expiration-date-month", bundle.getString("Exp Month"), out);
                    LayoutHelper.printErrors(slingRequest, name + ".expiration-date-month", hideTitle, out); %>
                    <input class="<%= FormsHelper.getCss(properties, "form_field form_field_text form_cc_expiry_month form-control input-sm") %>"
                           id="<%= xssAPI.encodeForHTMLAttr(id + "-expiration-date-month") %>"
                           name="<%= xssAPI.encodeForHTMLAttr(name + ".expiration-date-month") %>"
                           value="<%= xssAPI.encodeForHTMLAttr(expiryMonth != null ? expiryMonth : "") %>" >
                		<%if(required.contains("expiration-date")){%>
                			<i class="glyphicon glyphicon-asterisk mysize form_rightcolmark"></i>
                		<%}%>                      

                </div>
                <div class="form_cc_expiry_separator">/</div>
                <div class="form_cc_expiry_year inner-addon right-addon"><%
                    LayoutHelper.printDescription(id + "-expiration-date-year", bundle.getString("Exp Year"), out);
                    LayoutHelper.printErrors(slingRequest, name + ".expiration-date-year", hideTitle, out); %>
                    <input class="<%= FormsHelper.getCss(properties, "form_field form_field_text form_cc_expiry_year form-control input-sm") %>"
                           id="<%= xssAPI.encodeForHTMLAttr(id + "-expiration-date-year") %>"
                           name="<%= xssAPI.encodeForHTMLAttr(name + ".expiration-date-year") %>"
                           value="<%= xssAPI.encodeForHTMLAttr(expiryYear != null ? expiryYear : "") %>" >
                		<%if(required.contains("expiration-date")){%>
                			<i class="glyphicon glyphicon-asterisk mysize form_rightcolmark"></i>
                		<%}%>                        

                </div>
            </div>
        </div>
      </div>
     </div> 
  <%}%>

<!--START of description-->
<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-8">
	<%
    LayoutHelper.printDescription(FormsHelper.getDescription(resource, ""), out);
    LayoutHelper.printErrors(slingRequest, name, hideTitle, out);
	%>
  </div>
</div>
<!--START of description-->
