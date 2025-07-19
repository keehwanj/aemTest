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

  Form 'element' component

  Generate the client javascript code to validate this field.

--%>
<%@page session="false" %>
<%@page import="java.util.regex.Matcher,
                java.util.regex.Pattern,
                com.day.cq.wcm.foundation.forms.FormsHelper,
                com.day.cq.wcm.foundation.forms.ValidationHelper"%>
<%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0" %>

<%@page import="com.day.text.Text"%><sling:defineObjects/><%

    final boolean required = FormsHelper.isRequired(resource);
    if(required) {
        final String captchatry = request.getParameter(":cq:captcha");
        if (captchatry != null && captchatry.length()>0) {
            final String captchakey = request.getParameter(":cq:captchakey");

            final String mins = "" + (System.currentTimeMillis() / (60 * 1000));
            final String minsold = "" + (System.currentTimeMillis() / (60 * 1000) - 1);

            final String captchacurrent = (Text.md5("" + (captchakey + mins))).substring(1, 6);
            final String captchaold = (Text.md5("" + (captchakey + minsold))).substring(1, 6);

            if (!captchatry.equals(captchacurrent) && !captchatry.equals(captchaold)) {
                ValidationHelper.getValidationInfo(slingRequest).addErrorMessage(":cq:captcha",
                    ValidationHelper.getConstraintMessage(resource));
            }
        } else {
            ValidationHelper.getValidationInfo(slingRequest).addErrorMessage(":cq:captcha",
                ValidationHelper.getRequiredMessage(resource));
        }

    }

%>

