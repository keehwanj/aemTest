<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="java.util.HashMap"%>
<%
final Resource p_resource = resource;

//======Start
//finding the proper language
String lang = "fr";
String lang1 = "_F";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
	lang = "en";
	lang1 = "_E";
}
//======End
%>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.8.24/jquery-ui.min.js"></script>
<script src="https://rawgit.com/jasonday/jQuery-UI-Dialog-extended/master/jquery.dialogOptions.js"></script>


<!--START of MODAL-->
<!-- Modal -->
<form class="form-horizontal" role="form" id="formID"  accept-charset="utf-8">
  <!-- Modal content-->
    <!-- END of modal-header-->   
    <!-- START of modal-body-->  
      <div class="form-group">
        <label class="control-label col-sm-3" for="email_c" style="font-size:90%;">emailText</label>
        <div class="col-sm-9">
          <input class="form-control" type="email" id="email_c" name="email_c" placeholder="emailPlaceholderText" required title="">
        </div>
      </div>
      <!-- END of email-->
      <!-- START of Type-->
		<input  id="typeSubscribe" name="type" type="hidden" value="Subscribe">
      <!-- END of Type-->        


      <!-- START of Checkbox-->
      <div class="form-group">
          <label class="control-label col-sm-3" for="email" style="font-size:90%;">subscriptionText</label>
	      <div class="col-sm-9">
			<div class="form-check">
  				<input class="form-check-input subscriptionItem modalID" type="checkbox"  value="link^subscriptionID^title" name="subscriptionItem" checked>
               	<label class="form-check-label" for="title" style="font-weight: normal; font-size:90%;">
    				title
  				</label>
			</div>
        </div>
      </div>
      <!-- END of Checkbox-->   
    <!-- END of modal-body-->  
    <!-- START of modal-footer-->  
    <div class="modal-footer">
      <button type="submit" class="btn btn-primary" id="submitModal">submitText</button>  
      <!--<button type="button" class="btn btn-default" data-dismiss="modal">closeText</button>-->
    </div>
    <!-- END of modal-footer-->   
  <!---->
</form>

<%
HashMap<String,String> resources = new HashMap<String,String>();
lang = "fr";
//Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    resources.put("global","Value not valid");
    resources.put("name_1","Name not valid");
    resources.put("name_2","Name is required");
    resources.put("email_1","Email address required");
    resources.put("email_2","The input is not a valid email address");
    resources.put("comments_1","Comment not valid");
    resources.put("comments_2","Comment is required");    
    resources.put("thank","Thank you for your submission");  
    resources.put("subscriptionItem","You need to select at least one");  

} else {
    resources.put("global","Valeur mesure non valable");
    resources.put("name_1","Nom n’est pas valide");
    resources.put("name_2","Nom est obligatoire");
    resources.put("email_1","Adresse de courriel requise");
    resources.put("email_2","L’entrée n’est pas une adresse de courriel valable");
    resources.put("comments_1","Commentaire n’est pas valide");
    resources.put("comments_2","Commentaire est requis");  
    resources.put("thank","Merci pour votre commentaire");      
	resources.put("subscriptionItem","You need to select at least one_F");      
}
%>
<script>
$(function() {
 //Validate Form
    $('#formID').bootstrapValidator({
        message: '<%=resources.get("global")%>',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email_c: {
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("email_1")%>'
                    },
                    emailAddress: {
                        message: '<%=resources.get("email_2")%>'
                    }
                }
            },//email
            subscriptionItem: {
                validators: {
                    notEmpty: {
                        message: '<%=resources.get("subscriptionItem")%>'
                    }
                }
            }//subscriptionItem
        }
    })
    .on('success.form.bv', function(e) {
        //e.preventDefault();
        //Get the user-defined values in bootstrap modal to send


		var email = $('#formID').find('#email_c').val();

        var type = $("input[name='type']").val();

        var checkedValue = ""; 
        var subscriptionItem = document.getElementsByClassName('modalID');

        //document.write(inputElements.length);
		for(var i=0; subscriptionItem[i]; ++i){
      		if(subscriptionItem[i].checked){
                checkedValue =checkedValue+":"+subscriptionItem[i].value;
      		}
		}

        //In case with selectors in "location.pathname", we need to get tha path without selectors.
		var fullpath		=location.pathname;
        var pathsplit		=fullpath.split(".");

        //getting path without selectors
		var path			=pathsplit[0]+".html";

        //var server_url = location.pathname.replace(".html", "/_jcr_content.sitefooter.json") + "?name="+ name +"&email="+email +"&comments="+comments+"&address="+address+"&phone="+phone+"&fax="+fax+"&url="+url;
        //var server_url = path.replace(".html", "/_jcr_content.subscription.json") + "?email="+ email+"&type="+type+"&subscriptionItem="+checkedValue;
        //var server_url = location.pathname.replace(".html", "<%=resource.getPath()%>/_jcr_content.subscription.json") + "?email="+ email +"&type="+type +"&subscriptionItem="+checkedValue ;
        var server_url = location.pathname.replace(".html", "/_jcr_content.subscription.json") + "?email="+ email +"&type="+type +"&subscriptionItem="+checkedValue ;
		console.log(server_url);
        //document.write(server_url);
        //var server_url = path.replace(".html","/_jcr_content.subscription.json");
		console.log('Before ajax');
         $.ajax(server_url, {
            dataType: "text",
            success: function(rawData, status, xhr) {
                var serverResponse;
                console.log('After ajax');
                try {
                    data = $.parseJSON(rawData);
                    alert('<%=resources.get("thank")%>, '+data.email); 
                    //$('#modalID').modal('hide')
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

