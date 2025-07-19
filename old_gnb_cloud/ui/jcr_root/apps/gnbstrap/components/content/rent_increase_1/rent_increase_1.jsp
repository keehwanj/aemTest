<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.*" %>
<%
  // Get language and content bundle for that language
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }
  locale = new Locale(lang);
%>

<%
//general    
String rent_amount				= properties.get("rent_amount", "Rent amount prior to my rent increase:");
String rent_increased_date		= properties.get("rent_increased_date", "My rent increased on (yyyy/mm/dd): ");
String new_rent_amount			= properties.get("new_rent_amount", "New rent amount: ");
String confirm_note				= properties.get("confirm_note", "I confirm that I have paid my rent in full and owe no arrears.");
String clear_button				= properties.get("clear_button", "Clear");

//result
String max_rent					= properties.get("max_rent", "The Maximum rent increase is :");
String overpaid					= properties.get("overpaid", "You overpaid :");
String months					= properties.get("months", "months");
String credit_owed				= properties.get("credit_owed", "Credit owed :");
String payment_schedule			= properties.get("payment_schedule", "Your payment schedule will be :");

Random rand = new Random();
int n = rand.nextInt(90000) + 10000;
%>

<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/css/bootstrap-datepicker.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/js/bootstrap-datepicker.min.js"></script>
<script src="https://cdn.jsdelivr.net/bootstrap.datepicker-fork/1.3.0/js/locales/bootstrap-datepicker.fr.js"></script>

<div class="card card-body bg-light">
   <form method="POST" class="form-horizontal" role="form" class="was-validated">
      <input type="hidden"name="lang_1" id="lang_1" class="form-control input-sm" value="<%=lang%>" /> 
      <!--Start: rent amount-->
      <div class="form-group">
         <label for="TB_OldRent" class="col-form-label"><%=rent_amount%></label>  
         <div class="input-group mb-3">
            <div class="input-group-prepend">
               <span class="input-group-text">$</span>
            </div>
            <input type="number" min="0" id="TB_OldRent" name="TB_OldRent" class="form-control input-sm" value="" onChange="adCalc_rent_1(this.form);" placeholder="<%=rent_amount%>" step="1" required/>
         </div>
      </div>
      <!--End: rent amount-->

      <!--Start: rent_increased_date-->
      <div class="form-group">
         <label for="TB_NewAmountDate" class="col-form-label" ><%=rent_increased_date%></label>
         <div class="input-group mb-3">
            <!--<input type="date" name="TB_NewAmountDate"  id="TB_NewAmountDate" class="form-control" onChange="adCalc_rent1(this.form);" required/>-->
			<div id="bootstrap-datepicker" class="input-group date">
    			<input onChange="adCalc_rent_1(this.form);"  type="text" name="TB_NewAmountDate"  id="TB_NewAmountDate" class="form-control" required /><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
			</div>
         </div>
      </div>

      <!--End: rent_increased_date-->

      <!--Start: rent amount-->
      <div class="form-group">
         <label for="TB_NewRent"><%=new_rent_amount%></label>  
         <div class="input-group mb-3">
            <div class="input-group-prepend">
               <span class="input-group-text">$</span>
            </div>
            <input type="number" min="0" name="TB_NewRent" id="TB_NewRent" class="form-control input-sm"  value="" onChange="adCalc_rent_1(this.form);" placeholder="<%=new_rent_amount%>" step="1" required/>
         </div>
      </div>

      <!--End: rent amount-->  

      <!--START: confirm_note-->
      <div class="form-group form-check">
         <label class="form-check-label">
         <input class="form-check-input" value="ON" type="checkbox" name="CB_Arrears" id="CB_Arrears" onChange="adCalc_rent_1(this.form);"><%=confirm_note%></label>
      </div>

      <!--END: confirm_note-->
<hr>

    <!--START:result-->
    <div class="result_display" id="result_display"  style="display:none">
      <div class="row">
          <div  class="col-sm-12">
              <span class="font-weight-bold"><%=max_rent%></span>
             <span class="font-weight" id="TB_RentCapCredit"></span>
          </div>
      </div>    

      <div class="row">
         <div  class="col-sm-12">
             <span class="font-weight-bold"><%=overpaid%></span>
 	        &nbsp;<span class="font-weight " id="TB_NumMonths"></span>
    	    &nbsp;<span class="font-weight"><%=months%></span> 
         </div>
      </div>    

      <div class="row">
         <div  class="col-sm-12">
             <span class="font-weight-bold"><%=credit_owed%></span>
			<span class="font-weight" id="TB_CreditOwed"></span>
         </div>

      </div>    

      <div class="row">
         <div  class="col-sm-12 font-weight-bold"><%=payment_schedule%></div>
         <div  class="col-sm-12 font-weight" id="TB_PaymentSchedule"></div>
      </div>    
    </div>
	<!--END:result-->

      <!--Start: clear_buttonrent-->    
      <input type="Reset" value="<%=clear_button%>"  id="Btn_Calculate1" name="Btn_Calculate1" class="btn  btn-sm btn-block btn-info active" aria-labelledby="reset" onClick="clearContent_1();"/> 
      <!--End: clear_buttonrent-->        
   </form>



</div>
<script src="/etc/designs/gnbstrap/clientlibs/js/rent_increase_1.js?v=<%=n%>"></script>

<script>
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy+ '/' + mm + '/' + dd;

$(function() {
  if (!$.fn.bootstrapDP && $.fn.datepicker && $.fn.datepicker.noConflict) {
    var datepicker = $.fn.datepicker.noConflict();
    $.fn.bootstrapDP = datepicker;
  }
    //$("#jquery-ui-datepicker").datepicker({});
  $('#bootstrap-datepicker').bootstrapDP({
      startDate: '2022/01/01',
      endDate: today,
      format: 'yyyy/mm/dd',
      language: '<%=lang%>'
  });
});    
</script>