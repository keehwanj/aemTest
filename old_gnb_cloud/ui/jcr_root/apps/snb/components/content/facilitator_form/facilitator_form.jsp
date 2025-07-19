<%@include file="/libs/foundation/global.jsp"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="org.apache.commons.mail.HtmlEmail"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@page import="com.day.cq.mailer.MailService"%>
<%@page import="java.util.HashMap"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
HashMap<String,String> resources = new HashMap<String,String>();
String lang = "fr";
Locale locale = currentPage.getLanguage(true);

if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    resources.put("global","Value not valid");
    resources.put("thank","Thank you for your submission");    

    resources.put("q1","You&rsquo;re required to fill in the name of the company!");
    resources.put("q2","You&rsquo;re required to fill in the address!");
    resources.put("q3","You&rsquo;re required to fill in the contact person(s) and their coordinates!");
    resources.put("q4","You&rsquo;re required to fill in the website address!");
    resources.put("q5","You&rsquo;re required to fill in the contract costs!");
    resources.put("q6","You&rsquo;re required to fill in the travel expenses!");
    resources.put("q7","You&rsquo;re required to fill in a brief description of courses offered!");
    resources.put("q8","You&rsquo;re required to fill in the area(s) of speciality!");
    resources.put("q9","You&rsquo;re required to fill in the online training!");
    resources.put("q10","You&rsquo;re required to fill in the bilingual capacity!");
    resources.put("q11","You&rsquo;re required to fill in the years of business!");
    resources.put("q12","You&rsquo;re required to fill in the experience teaching the public sector!");
	resources.put("q13","References to contact re teaching in the public service");    


} else {
    resources.put("global","Valeur mesure non valable");
    resources.put("thank","Merci pour votre commentaire");   

    resources.put("q1","Vous devez indiquer le nom de l&rsquo;entreprise!");
    resources.put("q2","Vous devez indiquer l&rsquo;adresse!");
    resources.put("q3","Vous devez indiquer le nom des personnes-ressources et leurs coordonn&eacute;es!");
    resources.put("q4","Vous devez indiquer l&rsquo;adresse du site Web!");
    resources.put("q5","Vous devez indiquer les co&ucirc;ts li&eacute;s au contrat!");
    resources.put("q6","Vous devez indiquer les frais de d&eacute;placement!");
    resources.put("q7","Vous devez fournir une br&egrave;ve description des cours  offerts!");
    resources.put("q8","Vous devez indiquer les domaines de sp&eacute;cialisation!");
    resources.put("q9","Vous devez indiquer la formation en ligne!");
    resources.put("q10","Vous devez indiquer la capacit&eacute; bilingue!");
    resources.put("q11","Vous devez indiquer le nombre d&rsquo;ann&eacute;es en affaires!");
    resources.put("q12","Vous devez indiquer l&rsquo;exp&eacute;rience en enseignement dans  la fonction publique!");
	resources.put("q13","Vous devez indiquer le nom des r&eacute;f&eacute;rences avec  lesquelles communiquer concernant l&rsquo;enseignement dans la fonction publique!");  

}
%>

<cq:setContentBundle language="<%=lang%>" />
<%
//setting resource tab for English/French
String q1 = properties.get("q1", "");
if(q1.equalsIgnoreCase("")){
	q1 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q1"));
} 
String q2 = properties.get("q2", "");
if(q2.equalsIgnoreCase("")){
	q2 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q2"));
} 
String q3 = properties.get("q3", "");
if(q3.equalsIgnoreCase("")){
	q3 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q3"));
} 
String q4 = properties.get("q4", "");
if(q4.equalsIgnoreCase("")){
	q4 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q4"));
} 
String q5 = properties.get("q5", "");
if(q5.equalsIgnoreCase("")){
	q5 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q5"));
} 
String q6 = properties.get("q6", "");
if(q6.equalsIgnoreCase("")){
	q6 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q6"));
} 
String q7 = properties.get("q7", "");
if(q7.equalsIgnoreCase("")){
	q7 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q7"));
} 
String q8 = properties.get("q8", "");
if(q8.equalsIgnoreCase("")){
	q8 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q8"));
} 
String q9 = properties.get("q9", "");
if(q9.equalsIgnoreCase("")){
	q9 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q9"));
} 
String q10 = properties.get("q10", "");
if(q10.equalsIgnoreCase("")){
	q10 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q10"));
} 
String q11 = properties.get("q11", "");
if(q11.equalsIgnoreCase("")){
	q11 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q11"));
} 
String q12 = properties.get("q12", "");
if(q12.equalsIgnoreCase("")){
	q12 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q12"));
} 
String q13 = properties.get("q13", "");
if(q13.equalsIgnoreCase("")){
	q13 = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q13"));
} 

String q1_h = properties.get("q1_h", "");
if(q1_h.equalsIgnoreCase("")){
	q1_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q1"));
} 
String q2_h = properties.get("q2_h", "");
if(q2_h.equalsIgnoreCase("")){
	q2_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q2"));
} 
String q3_h = properties.get("q3_h", "");
if(q3_h.equalsIgnoreCase("")){
	q3_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q3"));
} 
String q4_h = properties.get("q4_h", "");
if(q4_h.equalsIgnoreCase("")){
	q4_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q4"));
} 
String q5_h = properties.get("q5_h", "");
if(q5_h.equalsIgnoreCase("")){
	q5_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q5"));
} 
String q6_h = properties.get("q6_h", "");
if(q6_h.equalsIgnoreCase("")){
	q6_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q6"));
} 
String q7_h = properties.get("q7", "");
if(q7_h.equalsIgnoreCase("")){
	q7_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q7"));
} 
String q8_h = properties.get("q8_h", "");
if(q8_h.equalsIgnoreCase("")){
	q8_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q8"));
} 
String q9_h = properties.get("q9_h", "");
if(q9_h.equalsIgnoreCase("")){
	q9_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q9"));
} 
String q10_h = properties.get("q10_h", "");
if(q10_h.equalsIgnoreCase("")){
	q10_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q10"));
} 
String q11_h = properties.get("q11_h", "");
if(q11_h.equalsIgnoreCase("")){
	q11_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q11"));
} 
String q12_h = properties.get("q12_h", "");
if(q12_h.equalsIgnoreCase("")){
	q12_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q12"));
} 
String q13_h = properties.get("q13_h", "");
if(q13_h.equalsIgnoreCase("")){
	q13_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "q13"));
} 

String submit = properties.get("submit", "Submit");

String clear = properties.get("clear", "Clear");

String email = properties.get("email_address", "");


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
    sUrl = "http://www2.snb.ca" + sUrl + selectors + ".html"; 
    //out.write("***sUrl = *** = " + sUrl); 

    } catch (Exception ex) {
        log.error("page url problem", ex);
    }

%>


<!-- START of form-->
<form class="form-horizontal" role="form" id="FeedbackForm1" method="GET" accept-charset="utf-8">
  <!-- START of modal-content-->
  <!-- START of Name of Company-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q1"><%=q1%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q1" name="q1" placeholder="<%=q1_h%>" required title="<%=resources.get("q1")%>">
    </div>
  </div>
  <!-- END of Name of Company-->

  <!-- START of Address-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q2"><%=q2%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q2" name="q2" placeholder="<%=q2_h%>" required title="<%=resources.get("q2")%>">
    </div>
  </div>
  <!-- END of Address-->

  <!-- START of Contact person(s) & their coordinates(phone, fax & e-mail)-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q3"><%=q3%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q3" name="q3" placeholder="<%=q3_h%>" required title="<%=resources.get("q3")%>">
    </div>
  </div>
  <!-- END of Contact person(s) & their coordinates(phone, fax & e-mail)-->

  <!-- START of Website address-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q4"><%=q4%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q4" name="q4" placeholder="<%=q4_h%>" required title="<%=resources.get("q4")%>">
    </div>
  </div>
  <!-- END of Website address-->

  <!-- START of Contract costs (1 day, ½ day)-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q5"><%=q5%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q5" name="q5" placeholder="<%=q5_h%>" required title="<%=resources.get("q5")%>">
    </div>
  </div>
  <!-- END of  Contract costs (1 day, ½ day)-->

  <!-- START of Travel expenses-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q6"><%=q6%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q6" name="q6" placeholder="<%=q6_h%>" required title="<%=resources.get("q6")%>">
    </div>
  </div>
  <!-- END of  Travel expenses-->


  <!-- START of Brief description of courses offered-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q7"><%=q7%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q7" name="q7" placeholder="<%=q7_h%>" required title="<%=resources.get("q7")%>">
    </div>
  </div>
  <!-- END of  Brief description of courses offered-->

  <!-- START of Area(s) of specialty-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q8"><%=q8%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q8" name="q8" placeholder="<%=q8_h%>" required title="<%=resources.get("q8")%>">
    </div>
  </div>
  <!-- END of  Area(s) of specialty-->

  <!-- START of Online training(if any)-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q9"><%=q9%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q9" name="q9" placeholder="<%=q9_h%>" required title="<%=resources.get("q9")%>">
    </div>
  </div>
  <!-- END of  Online training(if any)-->

  <!-- START of Bilingual Capacity-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q10"><%=q10%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q10" name="q10" placeholder="<%=q10_h%>" required title="<%=resources.get("q10")%>">
    </div>
  </div>
  <!-- END of Bilingual Capacity-->

  <!-- START of Years in business-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q11"><%=q11%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q11" name="q11" placeholder="<%=q11_h%>" required title="<%=resources.get("q11")%>">
    </div>
  </div>
  <!-- END of  Online training(if any)-->

  <!-- START of Experience teaching the public sector-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q12"><%=q12%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q12" name="q12" placeholder="<%=q12_h%>" required title="<%=resources.get("q12")%>">
    </div>
  </div>
  <!-- END of Experience teaching the public sector-->

  <!-- START of References to contact re teaching in the public service-->
  <div class="form-group">
    <label class="control-label col-sm-3" for="q13"><%=q13%></label>
    <div class="col-sm-9">
      <input class="form-control" type="text" id="q13" name="q13" placeholder="<%=q13_h%>" required title="<%=resources.get("q13")%>">
    </div>
  </div>
  <!-- END of  References to contact re teaching in the public service-->
  <!-- START of url-->
  <input class="form-control" type="hidden" id="url" name="url" value="<%=sUrl%>"/> 
  <!-- END of url-->

  <!-- START of url-->
  <input class="form-control" type="hidden" id="email" name="email" value="<%=email%>"/> 
  <!-- END of url-->


 <!-- START of button-->
  <div class="form-group centered">
   	<div class="col-sm-12 text-center">   
  		<button type="submit" class="btn btn-primary btn-md" id="submit"><%=submit%></button>
        <!--<button type="reset" class="btn btn-md btn-danger" ><%=clear%></button>-->
        <a href="<%= currentPage.getPath() %>.html" class="btn btn-md btn-danger" role="button" style="text-decoration:none !important;"><%=clear%></a>
   	</div>
<!--  	<div class="col-sm-6">
  		<button type="reset" class="btn btn-default" >Clear</button>
    </div>-->
  </div>    
 <!-- END of button-->   
</form>
<!-- END of form-->




<script>
$(function() {
 //Validate Form
    $('#FeedbackForm1').bootstrapValidator({
        message: '<%=resources.get("global")%>',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            q1: {
                message: '<%=resources.get("q1")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q1")%>'
                    }
                }
            },
            q2: {
                message: '<%=resources.get("q2")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q2")%>'
                    }
                }
            },
            q3: {
                message: '<%=resources.get("q3")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q3")%>'
                    }
                }
            },
            q4: {
                message: '<%=resources.get("q4")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q4")%>'
                    }
                }
            },
            q5: {
                message: '<%=resources.get("q5")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q5")%>'
                    }
                }
            }, 

            q6: {
                message: '<%=resources.get("q6")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q6")%>'
                    }
                }
            } ,
            q7: {
                message: '<%=resources.get("q7")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q7")%>'
                    }
                }
            },

          q8: {
                message: '<%=resources.get("q8")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q8")%>'
                    }
                }
            } ,

          q9: {
                message: '<%=resources.get("q9")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q9")%>'
                    }
                }
            } ,

          q10: {
                message: '<%=resources.get("q10")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q10")%>'
                    }
                }
            } ,

          q11: {
                message: '<%=resources.get("q11")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q11")%>'
                    }
                }
            } ,

          q12: {
                message: '<%=resources.get("q12")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q12")%>'
                    }
                }
            } ,

          q13: {
                message: '<%=resources.get("q13")%>',
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("q13")%>'
                    }
                }
            } 

        }
    })
    .on('success.form.bv', function(e) {

        //Get the user-defined values in bootstrap modal to send
        var q1= encodeURIComponent($('#q1').val()) ; 
        var q2= encodeURIComponent($('#q2').val()) ; 
        var q3= encodeURIComponent($('#q3').val()) ; 
        var q4= encodeURIComponent($('#q4').val()) ; 
        var q5= encodeURIComponent($('#q5').val()) ; 
        var q6= encodeURIComponent($('#q6').val()) ; 
        var q7= encodeURIComponent($('#q7').val()) ; 

        var q8= encodeURIComponent($('#q8').val()) ; 
        var q9= encodeURIComponent($('#q9').val()) ; 
        var q10= encodeURIComponent($('#q10').val()) ; 
        var q11= encodeURIComponent($('#q11').val()) ; 
        var q12= encodeURIComponent($('#q12').val()) ; 
        var q13= encodeURIComponent($('#q13').val()) ; 
        var url= encodeURIComponent($('#url').val()) ; 
        var email= encodeURIComponent($('#email').val()) ; 



        //In case with selectors in "location.pathname", we need to get tha path without selectors.
		var fullpath=location.pathname;
        var pathsplit=fullpath.split(".");
        //getting path without selectors
		var path=pathsplit[0]+".html";


        var server_url = path.replace(".html", "/_jcr_content.facilitatorform.json") + "?q1="+ q1 +"&q2="+q2+"&q3="+q3+"&q4="+q4+"&q5="+q5+"&q6="+q6+"&q7="+q7+"&q8="+q8+"&q9="+q9+"&q10="+q10+"&q11="+q11+"&q12="+q12+"&q13="+q13+"&url="+url+"&email="+email;
        $.ajax(server_url, {
            dataType: "text",
            success: function(rawData, status, xhr) {
                var serverResponse;
                try {
                    data = $.parseJSON(rawData);
                    alert('<%=resources.get("thank")%>, '+data.q1);
                    location.reload(true);
                /** $('#q1').val("");
                    $('#q2').val("");
                    $('#q3').val("");
                    $('#q4').val("");
                    $('#q5').val("");
					$('#q6').val("");
					$('#q7').val(""); 

                    $('#q7').val(""); 
                    $('#q8').val(""); 
                    $('#q9').val(""); 
                    $('#q10').val(""); 
                    $('#q11').val(""); 
                    $('#q12').val(""); 
                    $('#q13').val(""); 
                    **/

                } catch(err) {
                    failure(err);
                }
            },
            error: function(xhr, status, err) {
                failure(err);
            } 
        });


        //alert("Thanks You!!!");//fine by this line
    })
});
</script>
<script>
$(document).ready(function(){
        $("button.bv-hidden-submit").text("submit button");
});
</script>