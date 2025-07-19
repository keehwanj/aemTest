<%@include file="/libs/foundation/global.jsp"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="org.apache.commons.mail.HtmlEmail"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@page import="com.day.cq.mailer.MailService"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%!protected String getLocalization(String key, String defaultValue, Page currentPage, Logger log) {
        try {
            Page myPage = currentPage;
            while (myPage != null) {
                Node myNode = myPage.adaptTo(Node.class);
                if (myNode != null && myNode.hasNode("jcr:content") && myNode.getNode("jcr:content").hasNode("siteFooter") && myNode.getNode("jcr:content").getNode("siteFooter").hasProperty(key)) {
                    Property prop = myNode.getNode("jcr:content").getNode("siteFooter").getProperty(key);
                    if (prop != null && prop.getValue() != null) {
                        String value = (String) prop.getValue().getString();
                        if (Utils.isNotEmpty(value) && !value.equals("undefined"))
                            return value;
                    }
                }
                myPage = myPage.getParent();
            }
        } catch (Exception e) {
            log.error("error getting value for [" + key + "] in sitefooter", e);
        }
        return defaultValue;
    }%>
<%
    //climb up the hierarchy looking for an oppositePage property
    //of the languageSwitcherNode and stop when we find one
    String feedbackAddress = "wwwqueries@gnb.ca";
    String sUrl = ""; 
    String selectors = ".";
    try {
    	
        Page myPage = currentPage;
        sUrl = myPage.getPath();
        String[] selectorArray = slingRequest.getRequestPathInfo().getSelectors();
        
        //get the selectors - if there are any - to build the url for the page  
        
        for (int i = 0; i < selectorArray.length; i++) {
        	 selectors = selectors + selectorArray[i] + "." ;
        }
        // remove the period after the last selector or remove period if no selectors 
        selectors = selectors.substring(0, selectors.length() -1 ); 

        //sUrl = "http://www2.gnb.ca" + sUrl + selectors + ".html"; 
		sUrl = "https://"+request.getServerName()+":"+request.getServerPort() + sUrl + selectors + ".html"; 
        //out.write("***sUrl = *** = " + sUrl); 
       
        while (myPage != null) {
            if (Utils.isNotEmpty(myPage.getProperties().get("gnbFeedbackAddress", ""))) {
                feedbackAddress = myPage.getProperties().get("gnbFeedbackAddress", "none");
                break;
            }
            myPage = myPage.getParent();
        }
    } catch (Exception ex) {
        log.error("languageSwitcher encountered an error climbing the hierarchy", ex);
    }
%>


<div id="siteFooterNav" class="right">
<ul>
    <li><a id="feedbackButton" style="cursor: pointer;"><%=getLocalization("feedbackText", "Feedback", currentPage, log)%></a></li>
    <li><a href="<%=getLocalization("privacyPath", "/content/agnb-vgnb/en/privacy.html", currentPage, log)%>"><%=getLocalization("privacyText", "Privacy", currentPage, log)%></a></li>
    <li><a href="<%=getLocalization("disclaimerPath", "/content/agnb-vgnb/en/disclaimer.html", currentPage, log)%>"><%=getLocalization("disclaimerText", "Disclaimer", currentPage, log)%></a></li>
</ul>
</div>
<div class="clearfloats"></div>

<%

    if (Utils.isNotEmpty(request.getParameter("name"))) {

        MailService mailer = sling.getService(MailService.class);

        StringBuilder message = new StringBuilder();
        message.append("<p>" + getLocalization("nameText", "Name", currentPage, log) + " : ");
        message.append(request.getParameter("name"));
        message.append("</p>");

        message.append("<p>" + getLocalization("emailText", "Email", currentPage, log) + " : ");
        message.append(request.getParameter("email"));
        message.append("</p>");

        message.append("<p>" + getLocalization("commentsText", "Comments", currentPage, log) + " : ");
        message.append(request.getParameter("comments"));
        message.append("</p>");

        message.append("<p>" + getLocalization("addressText", "Address", currentPage, log) + " : ");
        message.append(request.getParameter("address"));
        message.append("</p>");

        message.append("<p>" + getLocalization("phoneText", "Phone Number", currentPage, log) + " : ");
        message.append(request.getParameter("phone"));
        message.append("</p>");

        message.append("<p>" + getLocalization("faxText", "Fax Number", currentPage, log) + " : ");
        message.append(request.getParameter("fax"));
        message.append("</p>");

        message.append("<p>URL : ");
        message.append(request.getParameter("url"));
        message.append("</p>");

        HtmlEmail mail = new HtmlEmail();
        mail.addTo(feedbackAddress);
        mail.addTo(request.getParameter("email"));        
        mail.setFrom(request.getParameter("email"));

        mail.setHtmlMsg(message.toString());
        //Spelling mistake-"Feeback" to "Feedback" corrected by Keehwan(2011-02-28)
        mail.setSubject("GNB.ca Feedback/ Commentaires " + request.getParameter("name"));

        mailer.sendEmail(mail);
        out.write("<response>SENT</response>");
    }
%>

<!--<link type="text/css" rel="stylesheet" href="/etc/clientlibs/granite/jquery-ui.css">-->
<link type="text/css" rel="stylesheet" href="/etc/designs/gnb/styles/smoothness/jquery-ui-1.7.2.custom.css">
<script src="/etc/designs/vnbw-bootstrap/clientlibs/js/jquery-1.3.2.js" type="text/javascript" ></script>
<script src="/etc/designs/vnbw-bootstrap/clientlibs/js/jquery-ui-1.7.2.custom.min.js" type="text/javascript"></script>

<div id="feedbackForm" title="<%=getLocalization("feedbackTitleText", "Feedback", currentPage, log)%>">
<p id="validateTips"><%=getLocalization("requiredFieldsText", "Name, Email and Comments are required", currentPage, log)%></p>
<form id="FeedbackForm" method="GET" accept-charset="utf-8">
<!--<input type="hidden" name="_charset_" value="utf-8">-->
<fieldset id="feedbackInput">
  <div class="row">
    <div class="col-sm-12">
    <label for="name"><%=getLocalization("nameText", "Name", currentPage, log)%></label>
	<input type="text" id="name" class="text ui-widget-content ui-corner-all" style="border: 1px solid #aaaaaa;" />  
    <label for="email"><%=getLocalization("emailText", "Email", currentPage, log)%></label>
	<input type="text" id="email" value="" class="text ui-widget-content ui-corner-all" style="border: 1px solid #aaaaaa;" /> 
    <label for="comments"><%=getLocalization("commentsText", "Comments", currentPage, log)%></label> 
    <textarea rows="4" id="comments" class="text ui-widget-content ui-corner-all" style="border: 1px solid #aaaaaa;"></textarea> 
    <label for="address"><%=getLocalization("addressText", "Address", currentPage, log)%></label> 
    <textarea rows="4" id="address" class="text ui-widget-content ui-corner-all" style="border: 1px solid #aaaaaa;"></textarea> 
    <label for="phone"><%=getLocalization("phoneText", "Phone Number", currentPage, log)%></label> 
    <input type="text" id="phone" value="" class="text ui-widget-content ui-corner-all" style="border: 1px solid #aaaaaa;" /> 
    <label for="fax"><%=getLocalization("faxText", "Fax Number", currentPage, log)%></label> 
    <input type="text" id="fax" value="" class="text ui-widget-content ui-corner-all" style="border: 1px solid #aaaaaa;" />
    <input type="hidden" id="url" value="<%=sUrl%>" class="text ui-widget-content ui-corner-all" /> 
        
  	</div>
  </div>
</fieldset>
</form>
</div>

<script type="text/javascript">

    $(function() {

        var name = $("#name"),
            email = $("#email"),
            comments = $("#comments"),            
            address = $("#address"),
            phone = $("#phone"),
            fax = $("#fax"),
            url = $("#url"),

            allFields = $([]).add(name).add(email).add(comments).add(address).add(phone).add(fax).add(url),

            tips = $("#validateTips");

        function updateTips(t) {
            tips.text(t).effect("highlight",{},1500);
        }

        function checkRequired(o) {
            if(o.val().length!=0) {
                return true;
            } else {
                o.addClass('ui-state-error');
                updateTips('<%=getLocalization("requiredFieldErrorText", "Check highlighted field", currentPage, log)%>');
            }
        }

        function checkRegexp(o,regexp,n) {

            if ( !( regexp.test( o.val() ) ) ) {
                o.addClass('ui-state-error');
                updateTips(n);
                return false;
            } else {
                return true;
            }

        }

        $("#feedbackForm").dialog({
            bgiframe: true,
            autoOpen: false,
            height: 500,
            width:390,
            modal: true,
            buttons: {
                '<%=getLocalization("sendFeedbackText", "Send Feedback", currentPage, log)%>': function() {
                    var bValid = true;
                    allFields.removeClass('ui-state-error');

                    bValid = bValid && checkRequired(name);
                    bValid = bValid && checkRequired(email);
                    bValid = bValid && checkRequired(comments);
                                        
                    // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
                    bValid = bValid && checkRegexp(email,/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,'<%=getLocalization("emailErrorText", "e.g. feedback@gnb.ca", currentPage, log)%>');

                    var dataString = {name:name.val(),email:email.val(),comments:comments.val(),address:address.val(),phone:phone.val(),fax:fax.val(), url:url.val()};
                    if (bValid) {
                        $.get("<%=currentPage.getPath()%>.html?_charset_=utf-8", dataString, function(data){
                              var sentResponse = "<response>";
                              sentResponse += "SENT";
                              sentResponse += "</response>";
                              if(data.indexOf(sentResponse)>0) {
                                  $("#feedbackForm").dialog('close');
                              } else {
                                  updateTips("<%=getLocalization("notSentText", "The email was not sent", currentPage, log)%>");
                              }
                            });

                    }
                },
                '<%=getLocalization("clearText", "Clear", currentPage, log)%>': function() {
                    allFields.val('').removeClass('ui-state-error');
                    updateTips("<%=getLocalization("requiredFieldsText", "Name, Email and Comments are required", currentPage, log)%>");
                    tips.attr("style","");
                },
                '<%=getLocalization("cancelText", "Cancel", currentPage, log)%>': function() {
                    $(this).dialog('close');
                }
            },
            close: function() {
                allFields.val('').removeClass('ui-state-error');
                updateTips("<%=getLocalization("requiredFieldsText", "Name, Email and Comments are required", currentPage, log)%>");
                tips.attr("style","");
            }
        });




        $('#feedbackButton').click(function() {
            $('#feedbackForm').dialog('open');
        })

    });
    </script>

<div id="response"></div>