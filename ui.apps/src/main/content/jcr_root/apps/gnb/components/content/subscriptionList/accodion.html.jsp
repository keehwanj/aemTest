<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.dam.api.Asset"%>
<%@page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.net.URLDecoder"%>


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

<%
/*START of Pair class**/    
final class Pair < T,S > {
	private final T first;
	private final S second;

	public Pair(T f, S s) {
		first = f;
		second = s;
	}

	public T getFirst() {
		return first;
	}

	public S getSecond() {
		return second;
	}

	public String toString() {
		return "(" + first.toString() + ", " + second.toString() + ")";
	}
}
/*END of Pair class**/    

//getting values from dialog
String panelColor 		= properties.get("panelColor", "panel-primary");
String headerTitle 		= properties.get("headerTitle", "Subscription List");
String subscribeText 	= properties.get("subscribeText", "click here");
String modalID 			= properties.get("modalID", "myModal");

String formID 			= properties.get("formID", "formID");


//Modal dialog text
String modalHeaderText 		= properties.get("modalHeaderText", "Subscription List");
String emailText 			= properties.get("emailText", "Email");
String emailPlaceholderText	= properties.get("emailPlaceholderText", "Email address");
String typeText 			= properties.get("typeText", "Type");

String typeSubscribeText	= properties.get("typeSubscribeText", "Subscribe");
String typeUnSubscribeText	= properties.get("typeUnSubscribeText", "Unsubscribe");

String subscriptionText		= properties.get("subscriptionText", "Subscription");
String submitText 			= properties.get("submitText", "Submit");
String closeText 			= properties.get("closeText", "Close");

//adding reverse order checkbox
boolean reverseOrder = properties.get("reverseOrder", false);

ArrayList < Pair < String, String >> list = new ArrayList < Pair < String, String >> ();

//**IMPORTANT Part - creating array no matter what value is.
int leng = 0;
int links_text_length = 0;
int links_length = 0;

String[] links_text = properties.get("links_text", String[].class);
String[] links = properties.get("links", String[].class);

if (links_text != null) {
	links_text_length = links_text.length;
}

if (links != null) {
	links_length = links.length;
}

leng = links_text_length;

if (links_length < links_text_length) {
	leng = links_length;
}

//display Reverse Order
if (reverseOrder) {
	for (int i = leng - 1; i >= 0; i--) {
		String link = links[i].trim();
		String linkText = links_text[i];
		if (link.equals("")) {
			link = "nolink";
		}
		if (linkText.startsWith("/")) {
			linkText = linkText.split("/")[linkText.split("/").length - 1];
		}
		if (!link.equals("none")) {
			list.add(new Pair < String, String > (link, linkText));
		}
	}
}

//display as it is
if (!reverseOrder) {
	for (int i = 0; i <= leng - 1; i++) {
		String link = links[i].trim();

		if (link.equals("")) {
			link = "no link";
		}
		String linkText = links_text[i];

		if (linkText.startsWith("/")) {
			linkText = linkText.split("/")[linkText.split("/").length - 1];
		}

		if (!link.equals("none")) {
			list.add(new Pair < String, String > (link, linkText)); //1)link, 2)linkText
		}
	}
}
%>
<!--START of ACCODION-->
<!-- Accodion -->
<form class="form-horizontal" role="form" id="<%=formID%>" method="GET" accept-charset="utf-8">
  <!-- Modal content-->
  <div class="modal-content">
    <!-- START of modal-header-->   
    <div class="modal-header">
      <!--<button type="button" class="close" data-dismiss="modal">&times;</button>-->
      <h4 class="modal-title"><%=modalHeaderText%></h4>
    </div>
    <!-- END of modal-header-->   
    <!-- START of modal-body-->  
    <div class="modal-body">

      <!-- START of email-->
      <div class="form-group">
        <label class="control-label col-sm-3" for="email_c" style="font-size:90%;"><%=emailText%></label>
        <div class="col-sm-9">
          <input class="form-control" type="email" id="email_c" name="email_c" placeholder="<%=emailPlaceholderText%>" required title="">
        </div>
      </div>
      <!-- END of email-->
      <!-- START of Type-->
		<input  id="typeSubscribe" name="type" type="hidden" value="Subscribe">
      <!-- END of Type-->           


      <!-- START of Checkbox-->
      <div class="form-group">
          <label class="control-label col-sm-3" for="email" style="font-size:90%;"><%=subscriptionText%></label>
        <div class="col-sm-9">

<%
/*START of outer IF*/
if (!list.isEmpty()) {
	for (Pair < String, String > listitem: list) {
		if (listitem.getFirst().startsWith("/")) {
			String link = listitem.getFirst();
			String title_d = listitem.getSecond();

			String title = ""; // title
			String jcrTitle = ""; // jcr:title property -3
			String navTitle = ""; // navTitle property -2
			String pageTitle = ""; // pageTitle property -1
			String dam_title = "";

			String subscription = "";
			String subscriptionID = "";

			String navItem = "";
			Page itemPage = null;
			ValueMap props = null;
            Object[] cqtag=null;  

			//START - IN CASE of page
			if(link.contains("/content/gnb")||link.contains("/content/snb")||link.contains("/content/myid-monid")||link.contains("/content/agnb-vgnb")||link.contains("/content/wcat-taat")||link.contains("/content/wel-bien")||link.contains("/content/enb")){
				itemPage = pageManager.getPage(link);
				props = itemPage.getProperties();

				jcrTitle = (String) props.get("jcr:title");
				navTitle = (String) props.get("navTitle");
				pageTitle = (String) props.get("pageTitle");
                //out.print(pageTitle);
				subscription = (String) props.get("subscription");
				subscriptionID = (String) props.get("subscriptionID");

                //title = pageTitle != "" ? pageTitle: title_d != "" ? title_d: navTitle;
                //title 	= jcrTitle != null ? jcrTitle : title_d != "" ? title_d : pageTitle; 
                title = !title_d.isEmpty()? title_d : jcrTitle != null ? jcrTitle : pageTitle;

				title	= title.replace('\"','\'');
            	title	= title.replace("#","");
       	    	title	= title.replace("%","");
           		title	= title.replace("^","");
                title   = title.replace(":","");
				title   = title.replace("&","");




                //new code for checking tags  
            	cqtag = (Object[])props.get("cq:tags") ;


				navItem = String.format("<p><a href=\"%s\"><span class=\"glyphicon glyphicon-triangle-right %s\"></span>%s</a></p>", link + ".html", subscriptionID, title);
			}
			//END - IN CASE of page

			//START - IN CASE of DAM  
			else if (link.contains("/content/dam")) {
				//Resource resource = resourceResolver.getResource(link); 

				Resource res = resourceResolver.getResource(link);
				Resource metadataResource = res.getChild("jcr:content/metadata");

				props = ResourceUtil.getValueMap(metadataResource);

				dam_title = (String) props.get("dam:title" + lang1);

				subscription = props.get("subscription", "false");
				subscriptionID = props.get("subscriptionID", "");


                //new code for checking tags  
            	cqtag = (Object[])props.get("cq:tags") ;

                //title 	= dam_title != null ? dam_title : title_d; 
                if(title_d!=null && !title_d.trim().isEmpty()){
					title	=title_d;
					title	= title.replace('\"','\'');
    	        	title	= title.replace("#","");
        	    	title	= title.replace("%","");
            		title	= title.replace("^","");
	                title   = title.replace(":","");
					title   = title.replace("&","");



                }
                else if(dam_title!=null && !dam_title.trim().isEmpty()){
					title 	= dam_title;
					title	= title.replace('\"','\'');
    	        	title	= title.replace("#","");
        	    	title	= title.replace("%","");
            		title	= title.replace("^","");
	                title   = title.replace(":","");
					title   = title.replace("&","");


                }



                //navItem = String.format("<p><a href=\"%s\"><span class=\"glyphicon glyphicon-triangle-right %s\"></span>%s</a></p>", link, subscriptionID, title);
			}
			//END - IN CASE of DAM  
            //out.write(navItem);
            //if(subscriptionID != null && !subscriptionID.trim().isEmpty()){
            if(!title.trim().isEmpty() && cqtag!=null && cqtag.length!=0 && subscriptionID != null && !subscriptionID.trim().isEmpty() && subscription!=null && !subscription.equalsIgnoreCase("")&& !subscription.equalsIgnoreCase("false")){    
            %>
			<div class="form-check">
  				<input class="form-check-input subscriptionItem <%=modalID%>" type="checkbox" value="<%=link%>^<%=subscriptionID%>^<%=title%>" name="subscriptionItem"  checked>
                <label class="form-check-label" for="<%=title%>" style="font-weight: normal; font-size:90%;">
    				<%=title%>
  				</label>
			</div>
            <%
            }
		}
	}
}
/*END of outer IF*/
%>
        </div>
      </div>
      <!-- END of Checkbox-->   
    </div>
    <!-- END of modal-body-->  
    <!-- START of modal-footer-->  
    <div class="modal-footer">
      <button type="submit" class="btn btn-primary" id="submit"><%=submitText%></button>  
      <!--<button type="button" class="btn btn-default" data-dismiss="modal"><%=closeText%></button>-->
    </div>
    <!-- END of modal-footer-->   
  </div>
  <!---->
</form>
<!-- Accodion -->
<!--END of ACCODION-->
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
    resources.put("thank","Thank you for your interest!");  
    resources.put("subscriptionItem","You need to select at least one");  

} else {
    //French accent issue resolved!!
    String thank=URLDecoder.decode(new String("Merci pour ton intérêt, ".getBytes("ISO-8859-1"), "UTF-8"), "UTF-8");
    String subscriptionItem=URLDecoder.decode(new String("Vous devez sélectionner au moins un".getBytes("ISO-8859-1"), "UTF-8"), "UTF-8");

    resources.put("global","Valeur mesure non valable");
    resources.put("name_1","Nom n’est pas valide");
    resources.put("name_2","Nom est obligatoire");
    resources.put("email_1","Adresse de courriel requise");
    resources.put("email_2","L’entrée n’est pas une adresse de courriel valable");
    resources.put("comments_1","Commentaire n’est pas valide");
    resources.put("comments_2","Commentaire est requis");  
    resources.put("thank", thank);      
	resources.put("subscriptionItem",subscriptionItem);      
}
%>
<script>
$(function() {
 //Validate Form
    $('#<%=formID%>').bootstrapValidator({
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

        //Get the user-defined values in bootstrap modal to send

        //var email				= $('#email_c').val() ; 
		var email = $('#<%=formID%>').find('#email_c').val();

        //var type				= $('#typeSubscribe').val() ; 
        //var type = $('#subscriptionForm').find('input[name="type"]').val();
        var type = $("input[name='type']").val();

        var checkedValue = ""; 
        //var subscriptionItem = document.getElementsByClassName('subscriptionItem');
        var subscriptionItem = document.getElementsByClassName('<%=modalID%>');

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

        //document.write(server_url);
        //var server_url = path.replace(".html","/_jcr_content.subscription.json");
        $.ajax(server_url, {
            dataType: "text",
            success: function(rawData, status, xhr) {
                var serverResponse;
                try {
                    data = $.parseJSON(rawData);
                    alert('<%=resources.get("thank")%> '+data.email); 
                    //$('#<%=modalID%>').modal('hide')
                    $(".subscriptionList div#test").removeClass("collapse in");
                    $(".subscriptionList div#test").addClass("collapse");
                    $("#email_c").val("");
                    location.reload(true);
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
    // $("button.bv-hidden-submit").text("submit button");
});
</script>