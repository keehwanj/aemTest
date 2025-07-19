<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.*" %>
<%
// Get language and content bundle for that language
String t_1_1_dap				= properties.get("t_1_1_dap", "Annual Family Net Income <br><i>(Combined after taxes income of parent(s) <br>and spouse/partner living in the home)</i>");
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
<%if (collapsible_dap.equals("true")){ %>
<button type="button" class="dap btn <%=collapsible_button_dap%> collapsed" data-toggle="collapse" data-target="#<%=collapsible_id_dap%>"><%=collapsible_title_dap%></button>
<!--START of collapse-->
<div id="<%=collapsible_id_dap%>" class="collapse">
<%}%>    
  <!--START of form-->
  <form method="POST" class="form-horizontal" role="form" >
    <div class="well well-sm">
      <!--START of TITLE "Income"-->
      <div class="form-group" >
        <%if (title_1_tootip_dap=="") {%>
        <p class="col-sm-12   text-left"><strong><%=title_1_dap%></strong></p>
        <%} else {%>
        <p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_1_tootip_dap%>" class="red-tooltip"><%=title_1_dap%></a></strong></p>
        <% } %>
      </div>
      <!--END of TITLE "Income"-->
      <!--START of "Family Net Annual Income: $"-->
      <div class="form-group" >
        <%if (t_1_tootip_1_dap=="") {%>
        <label class="col-sm-8 control-label " for="income_dap"><%=t_1_1_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="income_dap"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_1_tootip_1_dap%>" class="red-tooltip"><%=t_1_1_dap%></a></label>
        <% } %>
        <div class="col-sm-4 ">
          <div class="input-group"> <span class="input-group-addon">$</span>
            <input type="number" min="0" id="income_dap" class="form-control input-sm" name="income_dap" value="" onChange="adCalc_dap(this.form);" placeholder="<%=t_1_2_dap%>" step="1000"/>
          </div>
        </div>
      </div>
      <!--END of "Family Net Annual Income: $"-->
      <hr class="style4">
      <!--START of TITLE "Childcare Needs - Infants(0-24months)"-->
      <div class="form-group" >
        <%if (title_2_tootip_dap=="") {%>
        <p class="col-sm-12   text-left"><strong><%=title_2_dap%></strong></p>
        <%} else {%>
        <p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_2_tootip_dap%>" class="red-tooltip"><%=title_2_dap%></a></strong></p>
        <% } %>
      </div>
      <!--END of TITLE "Childcare Needs - Infants(0-24months)"-->
      <!--START of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
      <div class="form-group">
        <%if (t_2_tootip_1_dap=="") {%>
        <label class="col-sm-8 control-label" for="FTInfants"><%=t_2_1_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="FTInfants"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_1_dap%>" class="red-tooltip"><%=t_2_1_dap%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTInfants(); adCalc_dap(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="FTInfants" name="FTInfants" class="form-control input-number input-sm" onChange="adCalc_dap(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTInfants(); adCalc_dap(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
      <!--START of "Number of day(s) per week"-->
      <div class="form-group">
        <%if (t_2_tootip_2_dap=="") {%>
        <label class="col-sm-8 control-label" for="FTIdays"><%=t_2_2_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="FTIdays"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_2_dap%>" class="red-tooltip"><%=t_2_2_dap%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <select id="FTIdays" onChange="adCalc_dap(this.form);" class="form-control input-sm">
            <option id="0" value="4" selected="selected"></option>
            <option id="1" value="4">1</option>
            <option id="2" value="8">2</option>
            <option id="3" value="12">3</option>
            <option id="4" value="16">4</option>
            <option id="5" value="20">5</option>
          </select>
        </div>
      </div>
      <!--END of "Number of day(s) per week"-->
      <!--START of "Number of children needing part time child care (less than 4 hours) aged less than 24 months"-->
      <div class="form-group">
        <%if (t_2_tootip_3_dap=="") {%>
        <label class="col-sm-8 control-label" for="PTInfants"><%=t_2_3_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="PTInfants"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_3_dap%>" class="red-tooltip"><%=t_2_3_dap%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTInfants();adCalc_dap(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="PTInfants" name="PTInfants" class="form-control input-number input-sm" onChange="adCalc_dap(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTInfants();adCalc_dap(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Number of children needing part time child care (less than 4 hours) aged less than 24 months"-->
      <!--START of "Number of day(s) per week"-->
      <div class="form-group">
        <%if (t_2_tootip_2_dap=="") {%>
        <label class="col-sm-8 control-label" for="PTIdays"><%=t_2_2_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="PTIdays"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_2_dap%>" class="red-tooltip"><%=t_2_2_dap%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <select name="PTIdays" id="PTIdays" onclick="adCalc_dap(this.form);" class="form-control input-sm">
            <option id="6" value="4" selected="selected"></option>
            <option id="7" value="4">1</option>
            <option id="8" value="8">2</option>
            <option id="9" value="12">3</option>
            <option id="10" value="16">4</option>
            <option id="11" value="20">5</option>
          </select>
        </div>
      </div>
      <!--END of "Number of day(s) per week"-->
      <hr class="style4">
      <!--START of TITLE "Childcare Needs - Pre-school and After School Children(2-12years old)"-->
      <div class="form-group" >
        <%if (title_3_tootip_dap=="") {%>
        <p class="col-sm-12   text-left"><strong><%=title_3_dap%></strong></p>
        <%} else {%>
        <p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_3_tootip_dap%>" class="red-tooltip"><%=title_3_dap%></a></strong></p>
        <% } %>
      </div>
      <!--END of TITLE "Childcare Needs - Pre-school and After School Children(2-12years old)"-->
      <!--START of "Number of children needing full time child care (more than 4 hours) between 2 -12 years old"-->
      <div class="form-group">
        <%if (t_3_tootip_1_dap=="") {%>
        <label class="col-sm-8 control-label" for="FTChild"><%=t_3_1_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="FTChild"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_1_dap%>" class="red-tooltip"><%=t_3_1_dap%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTChild(); adCalc_dap(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="FTChild" name="FTChild" class="form-control input-number input-sm" onChange="adCalc_dap(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTChild(); adCalc_dap(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Number of children needing full time child care (more than 4 hours) between 2 -12 years old"-->
      <!--START of "Number of day(s) per week"-->
      <div class="form-group">
        <%if (t_3_tootip_2_dap=="") {%>
        <label class="col-sm-8 control-label" for="FTCdays"><%=t_3_2_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="FTCdays"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_2_dap%>" class="red-tooltip"><%=t_3_2_dap%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <select name="FTCdays" id="FTCdays" onChange="adCalc_dap(this.form);" class="form-control input-sm">
            <option id="12" value="4" selected="selected"></option>
            <option id="13" value="4">1</option>
            <option value="8">2</option>
            <option id="14" value="12">3</option>
            <option id="15" value="16">4</option>
            <option id="16" value="20">5</option>
          </select>
        </div>
      </div>
      <!--END of "Number of day(s) per week"-->
      <!--START of "Number of children part time child care (less than 4 hours) between 2 -12 years old"-->
      <div class="form-group">
        <%if (t_3_tootip_3_dap=="") {%>
        <label class="col-sm-8 control-label" for="PTChild"><%=t_3_3_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="PTChild"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_3_dap%>" class="red-tooltip"><%=t_3_3_dap%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTChild(); adCalc_dap(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="PTChild" name="PTChild"  class="form-control input-number input-sm" onChange="adCalc_dap(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTChild(); adCalc_dap(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Number of children part time child care (less than 4 hours) between 2 -12 years old"-->
      <!--START of "Number of day(s) per week"-->
      <div class="form-group">
        <%if (t_3_tootip_2_dap=="") {%>
        <label class="col-sm-8 control-label" for="PTCdays"><%=t_3_2_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="PTCdays"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_2_dap%>" class="red-tooltip"><%=t_3_2_dap%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <select name="PTCdays" id="PTCdays" onChange="adCalc_dap(this.form);" class="form-control input-sm">
            <option id="17" value="4" selected="selected"></option>
            <option id="18" value="4">1</option>
            <option id="19" value="8">2</option>
            <option id="20" value="12">3</option>
            <option id="21" value="16">4</option>
            <option id="22" value="20">5</option>
          </select>
        </div>
      </div>
      <!--END of "Number of day(s) per week"-->
      <hr class="style4">
      <!--START of "Est. per day $"-->
      <div class="form-group">
        <%if (t_4_tootip_1_dap=="") {%>
        <label class="col-sm-8 control-label" for="family"><%=t_4_1_dap%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="family"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_4_tootip_1_dap%>" class="red-tooltip"><%=t_4_2_dap%></a></label>
        <% } %>
        <div class="col-sm-4" >
          <div class="input-group"> <span class="input-group-addon">$</span>
            <input type="text" id="family" name="family" size="8" value="" class="noborder noedit form-control input-sm" disabled="disabled" />
          </div>
        </div>
      </div>
      <!--END of "Est. per day $"-->

      <!--START of "Est. per month $"-->
  <div class="form-group">
    <label class="col-sm-8 control-label" for="monthly"><%=t_4_2_dap%></label>   
    <div class="col-sm-4" >
		<div class="input-group">
			<span class="input-group-addon">$</span>           
    		<input type="text" id="monthly" name="monthly" size="8" value="" class="noborder noedit form-control input-sm" disabled="disabled" />
        </div>
    </div>
  </div>

      <!--END of "Est. per day $"-->
      <!--START of "Est. per year $"-->
      <!--    
  <div class="form-group">
    <label class="col-sm-8 control-label" for="yearly"><%=t_4_3_dap%></label>    
    <div class="col-sm-4" >
		<div class="input-group">
			<span class="input-group-addon">$</span>   
    	<input type="text" id="yearly" name="yearly" size="8" value="" class="noborder noedit form-control input-sm" disabled="disabled" />
        </div>
    </div>
  </div>
-->
      <!--END of "Est. per year $"-->
      <!--START of reset button-->
      <div class="form-group">
        <div class="col-sm-12" >
          <input type="Reset" value="<%=t_5_1_dap%>"  id="reset" class="btn  btn-sm btn-block btn-info active" aria-labelledby="reset"/>
        </div>
      </div>
      <!--END of reset button-->
    </div>
  </form>
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
