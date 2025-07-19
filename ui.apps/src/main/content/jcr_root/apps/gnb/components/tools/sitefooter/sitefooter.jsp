<%@include file="/libs/foundation/global.jsp"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="org.apache.commons.mail.HtmlEmail"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@page import="com.day.cq.mailer.MailService"%>
<%@page import="java.util.HashMap"%>
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
        //sUrl = "https://www2.gnb.ca" + sUrl + selectors + ".html";
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


<%
    HashMap<String,String> resources = new HashMap<String,String>();
    String lang = "fr";
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
        lang = "en";
        resources.put("global","Value not valid");
        resources.put("name_1","Name not valid");
        resources.put("name_2","Name is required");
        resources.put("name_3","The full name can only consist of alphabetical letters and spaces");
        resources.put("email_1","Email address required");
        resources.put("email_2","The input is not a valid email address");
        resources.put("comments_1","Comment not valid");
        resources.put("comments_2","Comment is required");
        resources.put("thank","Thank you for your submission");
        resources.put("robot","Please verify that you are not a robot");



    } else {
        resources.put("global","Valeur mesure non valable");
        resources.put("name_1","Nom n’est pas valide");
        resources.put("name_2","Nom est obligatoire");
        resources.put("name_3","Le nom ne peut etre compose que de lettres alphabetiques et d’espaces");
        resources.put("email_1","Adresse de courriel requise");
        resources.put("email_2","L’entrée n’est pas une adresse de courriel valable");
        resources.put("comments_1","Commentaire n’est pas valide");
        resources.put("comments_2","Commentaire est requis");
        resources.put("thank","Merci pour votre commentaire");
        resources.put("robot","Verifiez que vous n’etes pas un robot s’il vous plait");
    }

%>


<script src='https://www.google.com/recaptcha/api.js?hl=<%=lang%>'></script>

<div class="row">
    <div class="col-lg-7 col-md-7 visible-md-block visible-lg-block">
        <span><%=getLocalization("copyrightText", "Copyright", currentPage, log)%></span>
    </div>
    <div class="col-lg-5 col-md-5  col-xs-12">
        <div id="siteFooterNav" class="right">
            <ul>
                <li><a id="feedbackButton" style="cursor: pointer;" data-toggle="modal" data-target="#myModal"><%=getLocalization("feedbackText", "Feedback", currentPage, log)%></a></li>
                <li><a href="<%=getLocalization("socialmediaPath", "/content/gnb/en/privacy.html", currentPage, log)%>.html"><%=getLocalization("socialmediaText", "Social Media", currentPage, log)%></a></li>
                <li><a href="<%=getLocalization("privacyPath", "/content/gnb/en/privacy.html", currentPage, log)%>.html"><%=getLocalization("privacyText", "Privacy", currentPage, log)%></a></li>
                <li><a href="<%=getLocalization("disclaimerPath", "/content/gnb/en/disclaimer.html", currentPage, log)%>.html"><%=getLocalization("disclaimerText", "Disclaimer", currentPage, log)%></a></li>
            </ul>
        </div>
    </div>
</div>


<div class="clearfloats"></div>
<!-- START of Modal -->
<div id="myModal" class="modal fade" role="dialog">
    <!-- START of modal-dialog -->
    <div class="modal-dialog">
        <form class="form-horizontal" role="form" id="FeedbackForm" method="GET" accept-charset="utf-8">
            <!-- START of modal-content-->
            <div class="modal-content">
                <!-- START of modal-header-->
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><%=getLocalization("feedbackTitleText", "Feedback", currentPage, log)%></h4>
                </div>
                <!-- END of modal-header-->
                <!-- START of modal-body-->
                <div class="modal-body">
                    <!-- START of name-->
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="name"><%=getLocalization("nameText", "Name", currentPage, log)%></label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" id="name" name="name" placeholder="<%=getLocalization("nameText", "Name", currentPage, log)%>" required title="">
                        </div>
                    </div>
                    <!-- END of name-->
                    <!-- START of email-->
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email"><%=getLocalization("emailText", "Email", currentPage, log)%></label>
                        <div class="col-sm-10">
                            <input class="form-control" type="email" id="email" name="email" placeholder="<%=getLocalization("emailText", "Email", currentPage, log)%>" required title="">
                        </div>
                    </div>
                    <!-- END of email-->
                    <!-- START of comments-->
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="comments"><%=getLocalization("commentsText", "Comments", currentPage, log)%></label>
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="4" id="comments" name="comments" wrap="hard" required ></textarea>
                        </div>
                    </div>
                    <!-- END of comments-->
                    <!-- START of address-->
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="address"><%=getLocalization("addressText", "Address", currentPage, log)%></label>
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="4" id="address" name="address" wrap="hard"></textarea>
                        </div>
                    </div>
                    <!-- END of address-->
                    <!-- START of phone-->
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="phone"><%=getLocalization("phoneText", "Phone Number", currentPage, log)%></label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text" id="phone" name="phone" placeholder="<%=getLocalization("phoneText", "Phone Number", currentPage, log)%>">
                        </div>
                    </div>
                    <!-- END of phone-->
                    <!-- START of fax-->
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="fax"><%=getLocalization("faxText", "Fax Number", currentPage, log)%></label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text"  id="fax" name="fax" placeholder="<%=getLocalization("faxText", "Fax Number", currentPage, log)%>">
                        </div>
                    </div>
                    <!-- END of fax-->

                    <!--Wissam_Testing START of reCaptcha-->

                    <div class="form-group">
                        <label class="control-label col-sm-2"></label>
                        <div class="col-sm-10">
                            <div class="g-recaptcha" data-sitekey="6LcVeXkjAAAAABLbh6-N6eormRz0yrVHf6XWCHb9" data-callback="callback" data-expired-callback="expiredRecaptchaCallback"  style="margin-left:auto;"></div>
                            <span id="error-captcha" style="color: red;"></span>
                        </div>
                    </div>

                    <!--Wissam_Testing END of reCaptcha -->

                    <!-- START of url-->
                    <input class="form-control" type="hidden" id="url" name="url" value="<%=sUrl%>"/>
                    <!-- END of url-->
                </div>
                <!-- END of modal-body-->
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" id="submit"><%=getLocalization("sendFeedbackText", "Send Feedback", currentPage, log)%></button>
                    <!--<button type="button" class="btn btn-default" name="submit" id="submit"><%=getLocalization("sendFeedbackText", "Send Feedback", currentPage, log)%></button>-->
                    <button type="button" class="btn btn-default" data-dismiss="modal"><%=getLocalization("cancelText", "Cancel", currentPage, log)%></button>
                </div>
            </div>
            <!-- END of modal-content-->
        </form>
        <!-- END of form-->
    </div>
    <!-- END of modal-dialog -->
</div>
<!-- END of Modal -->



<script>
    //Enabling submit button on reCAptcha Callback
    function callback(){
        $('#submit.btn').prop('disabled', false);
        $('#error-captcha').empty();
    }


    $(function() {
        //Validate Form
        $('#FeedbackForm').bootstrapValidator({
            message: '<%=resources.get("global")%>',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                name: {
                    message: '<%=resources.get("name_1")%>',
                    validators: {
                        notEmpty: {
                            message: '<%=resources.get("name_2")%>'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z\u00C0-\u017F\s'-.]+$/,
                            message: '<%=resources.get("name_3")%>'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: '<%=resources.get("email_1")%>'
                        },
                        emailAddress: {
                            message: '<%=resources.get("email_2")%>'
                        }
                    }
                },
                comments: {
                    message: '<%=resources.get("comments_1")%>',
                    validators: {
                        notEmpty: {
                            message: '<%=resources.get("comments_2")%>'
                        }
                    }
                }
            }
        })
            .on('success.form.bv', function(e) {

                var response = grecaptcha.getResponse();

                if(response.length == 0)
                {
                    //alert('<%=resources.get("robot")%>')
                    $('#error-captcha').empty()
                    $('#error-captcha').append('<%=resources.get("robot")%>');
                    grecaptcha.reset();
                    return false
                }
                else
                {

                    //Get the user-defined values in bootstrap modal to send
                    var name= $('#name').val() ;
                    var email= $('#email').val() ;
                    var comments= $('#comments').val() ;
                    var address= $('#address').val() ;
                    var phone= $('#phone').val() ;
                    var fax= $('#fax').val() ;
                    var url= $('#url').val() ;

                    //In case with selectors in "location.pathname", we need to get tha path without selectors.
                    var fullpath=location.pathname;
                    var pathsplit=fullpath.split(".");
                    //getting path without selectors
                    var path=pathsplit[0]+".html";
                    if(path==="/.html"|| path.length<15){
                        path="/content/gnb/en.html";
                    }
                    //var server_url = location.pathname.replace(".html", "/_jcr_content.sitefooter.json") + "?name="+ name +"&email="+email +"&comments="+comments+"&address="+address+"&phone="+phone+"&fax="+fax+"&url="+url;
                    var server_url = path.replace(".html", "/_jcr_content.sitefooter.json") + "?name="+ name +"&email="+email +"&comments="+comments+"&address="+address+"&phone="+phone+"&fax="+fax+"&url="+url;
                    $.ajax(server_url, {
                        dataType: "text",
                        success: function(rawData, status, xhr) {
                            var serverResponse;
                            try {
                                data = $.parseJSON(rawData);
                                $('#myModal').modal('hide')
                                alert('<%=resources.get("thank")%>, '+data.name);


                            } catch(err) {
                                failure(err);
                            }
                        },
                        error: function(xhr, status, err) {
                            failure(err);
                        }
                    });
                }

                //alert("Thanks You!!!");//fine by this line
            })


    });
</script>
