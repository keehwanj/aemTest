<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.*" %>
<%
// Get language and content bundle for that language
String t_1_1_dap				= properties.get("t_1_1_dap", "Annual Family Net Income <br><i>(Combined after taxes income of parent(s) and spouse/partner living in the home)</i>");
String t_1_tootip_1_dap			= properties.get("t_1_tootip_1_dap", "");
String t_1_2_dap				= properties.get("t_1_2_dap", "Net Incom");

String t_2_1_dap				= properties.get("t_2_1_dap", "Number of infants (0-24 months) needing full-time childcare (4 or more hours each day)");
String t_2_tootip_1_dap			= properties.get("t_2_tootip_1_dap", "");
String t_2_2_dap				= properties.get("t_2_2_dap", "Number of day(s) per week");
String t_2_tootip_2_dap			= properties.get("t_2_tootip_2_dap", "");
String t_2_3_dap				= properties.get("t_2_3_dap", "Number of infants (0-24 months) needing part-time childcare (more than 2 and less than 4 hours each day)");
String t_2_tootip_3_dap			= properties.get("t_2_tootip_3_dap", "");

String t_3_1_dap				= properties.get("t_3_1_dap", "Number of preschool and after school children (2-12 years old) needing full-time childcare (4 or more hours each day)");
String t_3_tootip_1_dap			= properties.get("t_3_tootip_1_dap", "");
String t_3_2_dap				= properties.get("t_3_2_dap", "Number of day(s) per week");
String t_3_tootip_2_dap			= properties.get("t_3_tootip_2_dap", "");
String t_3_3_dap				= properties.get("t_3_3_dap", "Number of preschool and after school children (2-12 years old) needing part-time childcare (more than two hours each day and less than 4 hours)");
String t_3_tootip_3_dap			= properties.get("t_3_tootip_3_dap", "");

String t_4_1_dap				= properties.get("t_4_1_dap", "Estimate per day *");
String t_4_tootip_1_dap			= properties.get("t_4_tootip_1_dap", "");
String t_4_2_dap				= properties.get("t_4_2_dap", "");
String t_4_tootip_2_dap			= properties.get("t_4_tootip_2_dap", "");
String t_4_3_dap				= properties.get("t_4_3_dap", "");
String t_4_tootip_3_dap			= properties.get("t_4_tootip_3_dap", "");

String t_5_1_dap				= properties.get("t_5_1_dap", "Reset");


String title_1_dap				= properties.get("title_1_dap", "Income");
String title_1_tootip_dap		= properties.get("title_1_tootip_dap", "");

String title_2_dap				= properties.get("title_2_dap", "Childcare Needs - Infants (0-24 months)");
String title_2_tootip_dap		= properties.get("title_2_tootip_dap", "");

String title_3_dap				= properties.get("title_3_dap", "Childcare Needs - Pre-school and After School Children (2-12 years old)");
String title_3_tootip_dap		= properties.get("title_3_tootip_dap", "");


String collapsible_dap			= properties.get("collapsible_dap", "");
String collapsible_title_dap	= properties.get("collapsible_title_dap", "Daycare Assistance Program Estimator");
String collapsible_id_dap		= properties.get("collapsible_id_dap", "dap_collapse");
String collapsible_button_dap	= properties.get("collapsible_button_dap", "btn-info");

String disclaimer_dap			= properties.get("disclaimer_dap", "");

Random rand = new Random();
int n = rand.nextInt(90000) + 10000;
%>
<style>
.input-group-append, .input-group-prepend {
    display: -ms-flexbox;
    display: initial;
}
.mouse-pointer{
	cursor: pointer;
}    
</style>

<%if (collapsible_dap.equals("true")){ %>
<button type="button" class="dap btn <%=collapsible_button_dap%> collapsed" data-toggle="collapse" data-target="#<%=collapsible_id_dap%>"><%=collapsible_title_dap%></button>
<!--START of collapse-->
<div id="<%=collapsible_id_dap%>" class="collapse">
<%}%>    
  <!--START of form-->
  <div class="container">  
  <form method="POST" class="" role="form" >
    <div class="card card-body bg-light">
      <!--START of TITLE "Income"-->
      <div class="form-group row" >
        <%if (title_1_tootip_dap=="") {%>
        <p class="col-lg-12   text-lg-left"><strong><%=title_1_dap%></strong></p>
        <%} else {%>
        <p class="col-lg-12   text-lg-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_1_tootip_dap%>" class="red-tooltip"><%=title_1_dap%></a></strong></p>
        <% } %>

      <!--END of TITLE "Income"-->
      <!--START of "Family Net Annual Income: $"-->

        <%if (t_1_tootip_1_dap=="") {%>
        <label class="col-lg-8 control-label text-lg-right" for="income_dap"><%=t_1_1_dap%></label>
        <%} else {%>
        <label class="col-lg-8 control-label text-lg-right" for="income_dap"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_1_tootip_1_dap%>" class="red-tooltip"><%=t_1_1_dap%></a></label>
        <% } %>
		<!--new--> 
		<div class="input-group mb-3 col-lg-4 ">
  			<div class="input-group-prepend">
    			<span class="input-group-text" id="basic-addon1" aria-label="dollar">$</span>
  			</div>
  			<input type="number" min="0" id="income_dap" class="form-control input-sm" name="income_dap" value="" onChange="adCalc_dap(this.form);" placeholder="<%=t_1_2_dap%>" step="1000"/>
		</div>
        <!--/new---> 
      </div>
      <!--END of "Family Net Annual Income: $"-->
      <hr class="style4">
      <!--START of TITLE "Childcare Needs - Infants(0-24months)"-->
      <div class="form-group row" >
        <%if (title_2_tootip_dap=="") {%>
        <p class="col-lg-12   text-lg-left"><strong><%=title_2_dap%></strong></p>
        <%} else {%>
        <p class="col-lg-12   text-lg-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_2_tootip_dap%>" class="red-tooltip"><%=title_2_dap%></a></strong></p>
        <% } %>
      </div>
      <!--END of TITLE "Childcare Needs - Infants(0-24months)"-->

      <!--START of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
      <div class="form-group row">
        <%if (t_2_tootip_1_dap=="") {%>
        <label class="col-lg-8 control-label text-lg-right" for="FTInfants"><%=t_2_1_dap%></label>
        <%} else {%>
        <label class="col-lg-8 control-label text-lg-right" for="FTInfants"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_1_dap%>" class="red-tooltip"><%=t_2_1_dap%></a></label>
        <% } %>
		<!--new---> 
		<div class="input-group mb-3 col-lg-4 RT">
  			<div class="input-group-prepend">
    			<span class="input-group-text mouse-pointer" onClick="DownFTInfants(); adCalc_dap(this.form);" aria-label="minus">-</span>
  			</div>
  			<input type="text" id="FTInfants" name="FTInfants" class="form-control input-number input-sm" onChange="adCalc_dap(this.form);" />
  			<div class="input-group-append">
    			<span class="input-group-text mouse-pointer" onClick="UpFTInfants(); adCalc_dap(this.form);" aria-label="plus">+</span>
  			</div>
		</div>
      </div>
      <!--/new--->   
      <!--END of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->

      <!--START of "Number of children needing part time child care (less than 4 hours) aged less than 24 months"-->
      <div class="form-group row">
        <%if (t_2_tootip_3_dap=="") {%>
        <label class="col-lg-8 control-label text-lg-right" for="PTInfants"><%=t_2_3_dap%></label>
        <%} else {%>
        <label class="col-lg-8 control-label text-lg-right" for="PTInfants"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_3_dap%>" class="red-tooltip"><%=t_2_3_dap%></a></label>
        <% } %>

		<!--new---> 
		<div class="input-group mb-3 col-lg-4 RT">
  			<div class="input-group-prepend">
    			<span class="input-group-text mouse-pointer" onClick="DownPTInfants();adCalc_dap(this.form);" aria-label="minus">-</span>
  			</div>
  			<input type="text" id="PTInfants" name="PTInfants" class="form-control input-number input-sm" onChange="adCalc_dap(this.form);" />
  			<div class="input-group-append">
    			<span class="input-group-text mouse-pointer" onClick="UpPTInfants();adCalc_dap(this.form);" aria-label="plus">+</span>
  			</div>
		</div>
	    <!--/new--->   
      </div>
      <!--END of "Number of children needing part time child care (less than 4 hours) aged less than 24 months"-->

      <hr class="style4">
      <!--START of TITLE "Childcare Needs - Pre-school and After School Children(2-12years old)"-->
      <div class="form-group row" >
        <%if (title_3_tootip_dap=="") {%>
        <p class="col-lg-12   text-lg-left"><strong><%=title_3_dap%></strong></p>
        <%} else {%>
        <p class="col-lg-12   text-lg-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_3_tootip_dap%>" class="red-tooltip"><%=title_3_dap%></a></strong></p>
        <% } %>
      </div>
      <!--END of TITLE "Childcare Needs - Pre-school and After School Children(2-12years old)"-->
      <!--START of "Number of children needing full time child care (more than 4 hours) between 2 -12 years old"-->
      <div class="form-group row">
        <%if (t_3_tootip_1_dap=="") {%>
        <label class="col-lg-8 control-label text-lg-right" for="FTChild"><%=t_3_1_dap%></label>
        <%} else {%>
        <label class="col-lg-8 control-label text-lg-right" for="FTChild"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_1_dap%>" class="red-tooltip"><%=t_3_1_dap%></a></label>
        <% } %>
		<!--new---> 
		<div class="input-group mb-3 col-lg-4 RT">
  			<div class="input-group-prepend">
    			<span class="input-group-text mouse-pointer" onClick="DownFTChild(); adCalc_dap(this.form);" aria-label="minus">-</span>
  			</div>
  			<input type="text" id="FTChild" name="FTChild" class="form-control input-number input-sm" onChange="adCalc_dap(this.form);" />
  			<div class="input-group-append">
    			<span class="input-group-text mouse-pointer"  onClick="UpFTChild(); adCalc_dap(this.form);">+</span>
  			</div>
		</div>
	    <!--/new--->   
      </div>
      <!--END of "Number of children needing full time child care (more than 4 hours) between 2 -12 years old"-->




      <!--START of "Number of children part time child care (less than 4 hours) between 2 -12 years old"-->
      <div class="form-group row">
        <%if (t_3_tootip_3_dap=="") {%>
        <label class="col-lg-8 control-label text-lg-right" for="PTChild"><%=t_3_3_dap%></label>
        <%} else {%>
        <label class="col-lg-8 control-label text-lg-right" for="PTChild"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_3_dap%>" class="red-tooltip"><%=t_3_3_dap%></a></label>
        <% } %>

		<!--new---> 
		<div class="input-group mb-3 col-lg-4 RT">
  			<div class="input-group-prepend">
    			<span class="input-group-text mouse-pointer" onClick="DownPTChild(); adCalc_dap(this.form);" aria-label="minus">-</span>
  			</div>
  			<input type="text" id="PTChild" name="PTChild"  class="form-control input-number input-sm" onChange="adCalc_dap(this.form);" />
  			<div class="input-group-append">
    			<span class="input-group-text mouse-pointer"  onClick="UpPTChild(); adCalc_dap(this.form);" aria-label="plus">+</span>
  			</div>
		</div>
	    <!--/new--->   
      </div>
      <!--END of "Number of children part time child care (less than 4 hours) between 2 -12 years old"-->


      <hr class="style4">
      <!--START of "Est. per day $"-->
      <div class="form-group row">
        <%if (t_4_tootip_1_dap=="") {%>
        <label class="col-lg-8 control-label text-lg-right" for="family"><%=t_4_1_dap%></label>
        <%} else {%>
        <label class="col-lg-8 control-label text-lg-right" for="family"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_4_tootip_1_dap%>" class="red-tooltip"><%=t_4_2_dap%></a></label>
        <% } %>
		<!--new--> 
		<div class="input-group mb-3 col-lg-4 ">
  			<div class="input-group-prepend">
    			<span class="input-group-text" id="basic-addon1" aria-label="dollar">$</span>
  			</div>
  			<input type="text" id="family" name="family" size="8" value="" class="noborder noedit form-control input-sm" disabled="disabled" />
		</div>
        <!--/new---> 
      </div>
      <!--END of "Est. per day $"-->




      <!--START of reset button-->
      <div class="form-group row">
        <div class="col-lg-12" >
          <input type="Reset" value="<%=t_5_1_dap%>"  id="reset" class="btn  btn-sm btn-block btn-info active" aria-labelledby="reset"/>
        </div>
      </div>
      <!--END of reset button-->
    </div>
  </form>
  </div>    
  <!--END of form-->

  <!--START of disclaimer-->
  <%if (disclaimer_dap!="") {%>
	<p><%=disclaimer_dap%></p>
  <% } %>    
  <!--END of disclaimer-->

<%if (collapsible_dap.equals("true")){ %>    
</div>
<%}%>   
<!--END of collapse-->
<script src="/etc/designs/gnb-bootstrap/clientlibs/js/dap_cal_collapse.js?v=<%=n%>"></script>


