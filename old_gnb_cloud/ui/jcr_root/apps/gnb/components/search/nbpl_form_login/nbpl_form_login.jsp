<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.text.NumberFormat"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%
  // Get language and content bundle for that language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
  lang = "en";
}
%>
<cq:setContentBundle language="<%=lang%>" />
<%
//General tab
String destination = properties.get("destination", "");
if(destination.equalsIgnoreCase("")){
    destination="https://nbpl.ent.sirsidynix.net/client/en_US/access/search/patronlogin.loginpageform/ACCESS?&t:ac=$002f$002fnbpl.ent.sirsidynix.net$002fclient$002fen_US$002faccess$002fsearch$002faccount$003f";
} 

String title_text = properties.get("title_text", "");
if(title_text.equalsIgnoreCase("")){
    title_text="Login to Renew Your Loans";
} 


String libraryCard_text = properties.get("libraryCard_text", "");
if(libraryCard_text.equalsIgnoreCase("")){
    libraryCard_text="Library Card:";
} 

String id_placehold = properties.get("id_placehold", "");
if(id_placehold.equalsIgnoreCase("")){
    id_placehold="29525";
} 

String pin_text = properties.get("pin_text", "");
if(pin_text.equalsIgnoreCase("")){
    pin_text="PIN:";
}

String password_placehold = properties.get("password_placehold", "");
if(password_placehold.equalsIgnoreCase("")){
    password_placehold="Enter password";
} 

String login_text = properties.get("login_text", "");
if(login_text.equalsIgnoreCase("")){
    login_text="Log In";
} 

String bottom_text = properties.get("bottom_text", "");
if(bottom_text.equalsIgnoreCase("")){
    bottom_text="... and place holds, access your lists, etc.";
} 

//Error tab
String id_error = properties.get("id_error", "");
if(id_error.equalsIgnoreCase("")){
    id_error=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "id_error"));
} 

String password_error = properties.get("password_error", "");
if(password_error.equalsIgnoreCase("")){
    password_error=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "password_error"));
} 

%>
<!--START of Profile-->
<p><%=title_text%></p>


  <form class="form-horizontal" role="form" id="loginPageForm" 
        action="<%=destination%>" method="post" 
        data-bv-message="This value is not valid"
        data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
        data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
        data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">

	<input type="hidden" name="profileAuthServer" value="SYMWS"/>
	<input type="hidden" name="t:formdata" value="Kn+/zmzkevYbJse2tS97gdxJiKc=:H4sIAAAAAAAAAJWRsUoDQRCGJweBYCoFiyBiEy0vFqbRxiAIwhECh3XY20wuG+521529JDZWvoSNTxCs9AlS2PkOPoCNhZWFe0nEgNGQbviZmW/+f8ZvUBweQJWQGd6rtZg1SgYqFvJYG9UVCbLM9gjNAA0ZqCsT+0wz3kPfMo1kzXXd58pgIiI/YoR+I3Ii4/ZcYNKphmgzvX85Kb9uP396UAigzJV0kKTJUrSwFfTZgNUSJuNaaI2Q8clIW9icwxsOHk7haxzZWPfIllEcicIsSgWRUHLy0Dnqfty/eAAjPdyD3SXkfjtzROlc0BXcAFjY+JFWzuQjxT+7NCMaKtNZ2PwtrZyZbd6BypIuyh1aF9HpvxFxlWolUVryp5nY3wndhe+Vp8fbMw+8AEo8Ea77YsrOX4wJpk5ozo0W8peWZvD24UL5Bd2fgeF+AgAA" />

    <div class="form-group">
      <label class="control-label col-md-5 username" id="j_username:label" for="j_username"><%=libraryCard_text%></label>
      <div class="col-md-7">
        <input id="j_username" class="form-control user_name_input" type="text" name="j_username"  maxlength="25" value="29525" placeholder="<%=id_placehold%>"
               data-bv-notempty="true"
               data-bv-notempty-message="<%=id_error%>"/>

      </div>
    </div>

    <div class="form-group">
      <label id="j_password:label" class="control-label col-md-5 password" for="j_password" ><%=pin_text%></label>
      <div class="col-md-7">          
        <input id="j_password" class="form-control password_input" type="password" name="j_password" maxlength="25" 
               placeholder="<%=password_placehold%>" data-bv-notempty="true"
               data-bv-notempty-message="<%=password_error%>"/>  
      </div>
    </div>

    <div class="form-group">        

        <button type="submit" class="btn btn-default center-block"><span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;<%=login_text%></button>

    </div>
  </form>
<p><%=bottom_text%></p>
<!--END of Profile-->

<script>
$(document).ready(function() {
    $('#loginPageForm').bootstrapValidator();
});
</script>