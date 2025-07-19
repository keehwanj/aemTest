<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%
//finding the proper language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
%>
<cq:setContentBundle language="<%=lang%>" />
<%
String title_1 	= properties.get("title_1", "");
String title_2 	= properties.get("title_2", "");
String title_3 	= properties.get("title_3", "");
String title_4 	= properties.get("title_4", "");

String error_1 	= properties.get("error_1", "");
String error_2 	= properties.get("error_2", "");
String error_3 	= properties.get("error_3", "");
String button_1 = properties.get("button_1", "");
String button_2 = properties.get("button_2", "");
String decimal =",";
String first_number ="44";
if(lang=="en"){
	decimal =".";
    first_number ="46";
}

try {    
	//title
	if(title_1.equalsIgnoreCase("")){
    	title_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "title_1_Text"));
	} 

	if(title_2.equalsIgnoreCase("")){
    	title_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "title_2_Text"));
	} 

	if(title_3.equalsIgnoreCase("")){
    	title_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "title_3_Text"));
	} 

	if(title_4.equalsIgnoreCase("")){
    	title_4=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "title_4_Text"));
	} 

	//error
	if(error_1.equalsIgnoreCase("")){
    	error_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "error_1_Text"));
	} 

	if(error_2.equalsIgnoreCase("")){
    	error_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "error_2_Text"));
	} 

	if(error_3.equalsIgnoreCase("")){
    	error_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "error_3_Text"));
	} 

    //button
	if(button_1.equalsIgnoreCase("")){
    	button_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "button_1_Text"));
	} 

	if(button_2.equalsIgnoreCase("")){
    	button_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "button_2_Text"));
	} 


}catch(Exception ex){
	log.error("variables declaration in prorated salary leave component is wrong",ex);   
}    

%>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.77/jquery.form-validator.min.js"></script>

<!--START of form-->
<form class="form-horizontal well has-validation-callback toggle-disabled" id="dprl">
  <!--START of Gross Bi-Weekly Pay-->
  <div class="form-group">
    <label class="control-label col-sm-4" for="gbwp"><%=title_1%></label>
    <div class="col-sm-8 ">
	    <div class="input-group">
            <%if(lang=="en"){%>
            	<span class="input-group-addon">$</span>
            <%}%>
            <input class="form-control" name="gbwp" id="gbwp" type="text" data-validation="number required" data-validation-allowing="float" 
            maxlength="8" data-validation-decimal-separator="<%=decimal%>" data-validation-error-msg="<%=error_1%>"  
            onkeypress='return event.charCode == <%=first_number%> || (event.charCode >= 48 && event.charCode <= 57)' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">  
            <%if(lang=="fr"){%>
            	<span class="input-group-addon">$</span>
            <%}%>            
        </div>
    </div>
  </div>
  <!--END of Gross Bi-Weekly Pay-->

  <!--START of Days to Take Off-->
  <div class="form-group">
    <label class="control-label col-sm-4" for="dto"><%=title_2%></label>
    <div class="col-sm-8 ">
      <input class="form-control" name="dto" id="dto" type="text" data-validation="number required" data-validation-allowing="range[1;40]" maxlength="2" 
        onkeypress='return event.charCode >= 48 && event.charCode <= 57' data-validation-error-msg="<%=error_2%>" 
        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
    </div>
  </div>
  <!--END of Days to Take Off-->

  <!--START of Number of Pays-->
  <div class="form-group">
    <label class="control-label col-sm-4" for="pd"><%=title_3%></label>
    <div class="col-sm-8">
      <input class="form-control" name="pd" id="pd" type="text" data-validation="number required" data-validation-allowing="range[1;26]" maxlength="2" 
        onkeypress='return event.charCode >= 48 && event.charCode <= 57' data-validation-error-msg="<%=error_3%>" 
        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
    </div>
  </div>
  <!--END of Number of Pays-->

  <!--START of buttons-->
  <div class="form-group">
    <div class="col-sm-12 text-center">
      <button type="submit" class="btn btn-info btn-md"><%=button_1%></button>
      <input class="btn btn-default btn-md" type="reset" value="<%=button_2%>">
    </div>
  </div>
  <!--END of buttons-->

  <!--START of Deduction per pay-->
  <div class="form-group">
      <label class="control-label col-sm-4" for="dpp"><b><%=title_4%></b></label>
    <div class="col-sm-8 ">
	    <div class="input-group"> 
            <%if(lang=="en"){%>
            	<span class="input-group-addon">$</span>
            <%}%>
            <input class="form-control" name="dpp" id="dpp" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" disabled>
            <%if(lang=="fr"){%>
            	<span class="input-group-addon">$</span>
            <%}%>                
        </div>
    </div>
  </div>
  <!--END of Deduction per pay-->

</form>
<!--END of form-->


<!--START of javascript-->
<script>
$.validate({
	modules : 'toggleDisabled, security, sanitize',
  	disabledFormFilter : 'form.toggle-disabled',
  	showErrorDialogs : true,
});
</script>


<script>
/*START of English*/
(function () {
	function calculatePayDeductions(gbwp, dto, pd) {
		gbwp = parseFloat(gbwp);
		dto = parseFloat(dto);
		pd = parseFloat(pd);
        var result=(gbwp / 10 * dto / pd).toFixed(2);
        <%if(lang=="fr") { %>
        	result=(gbwp / 10 * dto / pd).toFixed(2).replace(".", ",");
        <%}%>
		return result;
	}

	var PayDeduction = document.getElementById("dprl");
	if (PayDeduction) {
		PayDeduction.onsubmit = function () {
			this.dpp.value = calculatePayDeductions(this.gbwp.value, this.dto.value, this.pd.value);
			return false;
		};
	}
}());
/*END of English*/


</script>
<!--END of javascript-->