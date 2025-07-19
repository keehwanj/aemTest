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
String current_rent			= properties.get("current_rent", "Current rent");
String clear_button			= properties.get("clear_button", "Clear");
String rent_increase_by		= properties.get("rent_increase_by", "Your rent will increase by:");
String new_rent_not_exceed	= properties.get("new_rent_not_exceed", "New rent cannot exceed:");

Random rand = new Random();
int n = rand.nextInt(90000) + 10000;
%>
<form class="form-horizontal" role="form" class="was-validated" onSubmit="return false";>
   <input value="<%=lang%>" type="hidden"name="lang" id="lang" class="form-control input-sm" />     
   <!--START of well well-sm-->
   <div class="card card-body bg-light">
      <div class="form-group">
         <label for="current_rent"><%=current_rent%></label>  
         <div class="input-group mb-3">
            <div class="input-group-prepend">
               <span class="input-group-text">$</span>
            </div>
            <input type="number" min="0" id="current_rent" name="current_rent" class="form-control input-sm" value="" onChange="adCalc_rent_2(this.form);" placeholder="<%=current_rent%>" step="1" required/>
         </div>
      </div>
      <!--start of result-->
      <div class="row">
         <div class="col-sm-12"><%=rent_increase_by%>
			<span id="rent_increase_by_result"></span>
         </div>

      </div>
      <div class="row">
         <div  class="col-sm-12"><%=new_rent_not_exceed%>
			<span id="new_rent_not_exceed_result"></span>
         </div>

      </div>
      <!--end of result-->
       <br/>
       <input type="Reset" value="<%=clear_button%>"  id="reset" class="btn  btn-sm btn-block btn-info active" aria-labelledby="reset" onClick="clearContent_2();"/> 
    </div>
</form>
<script src="/etc/designs/gnbstrap/clientlibs/js/rent_increase_2.js?v=<%=n%>"></script>
