<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.*" %>
<%
//text in header
String t_1_1_pac		= properties.get("t_1_1_pac", "Household Income");
String t_1_tootip_1_pac	= properties.get("t_1_tootip_1_pac", "");
String t_1_2_pac		= properties.get("t_1_2_pac", "Net Income");

//START: NEW(2022-03-18)
String t_location_1_pac			= properties.get("t_location_1_pac", "Location of Childcare Facility");
String t_location_tootip_1_pac	= properties.get("t_location_tootip_1_pac", "");
String t_location_item_1_pac	= properties.get("t_location_item_1_pac", "Please select");
String t_location_item_2_pac	= properties.get("t_location_item_2_pac", "Large urban");
String t_location_item_3_pac	= properties.get("t_location_item_3_pac", "Small urban and rural");
//END: NEW(2022-03-18)

String t_2_1_pac		= properties.get("t_2_1_pac", "# Infants full-time");
String t_2_tootip_1_pac	= properties.get("t_2_tootip_1_pac", "");
String t_2_2_pac		= properties.get("t_2_2_pac", "Fees for Infant full-time");
String t_2_tootip_2_pac	= properties.get("t_2_tootip_2_pac", "");
String t_2_3_pac		= properties.get("t_2_3_pac", "Number of day(s) per week");
String t_2_tootip_3_pac	= properties.get("t_2_tootip_3_pac", "");

String t_3_1_pac		= properties.get("t_3_1_pac", "# Preschool full-time");
String t_3_tootip_1_pac	= properties.get("t_3_tootip_1_pac", "");
String t_3_2_pac		= properties.get("t_3_2_pac", "Fees of Preschool  full-time");
String t_3_tootip_2_pac	= properties.get("t_3_tootip_2_pac", "");
String t_3_3_pac		= properties.get("t_3_3_pac", "Number of day(s) per week");
String t_3_tootip_3_pac	= properties.get("t_3_tootip_3_pac", "");


String t_4_1_pac		= properties.get("t_4_1_pac", "# Infants part-time");
String t_4_tootip_1_pac	= properties.get("t_4_tootip_1_pac", "");
String t_4_2_pac		= properties.get("t_4_2_pac", "Fees of Infants part-time");
String t_4_tootip_2_pac	= properties.get("t_4_tootip_2_pac", "");
String t_4_3_pac		= properties.get("t_4_3_pac", "Number of day(s) per week");
String t_4_tootip_3_pac	= properties.get("t_4_tootip_3_pac", "");


String t_5_1_pac		= properties.get("t_5_1_pac", "# Preschool part-time");
String t_5_tootip_1_pac	= properties.get("t_5_tootip_1_pac", "");
String t_5_2_pac		= properties.get("t_5_2_pac", "");
String t_5_tootip_2_pac	= properties.get("t_5_tootip_2_pac", "");
String t_5_3_pac		= properties.get("t_5_3_pac", "Number of day(s) per week");
String t_5_tootip_3_pac	= properties.get("t_5_tootip_3_pac", "");

String t_6_1_pac		= properties.get("t_6_1_pac", "Reset");


//text in result
String r_1_1_pac		= properties.get("r_1_1_pac", "Estimating the Designated Centre Subsidy");
String r_1_tootip_1_pac	= properties.get("r_1_tootip_1_pac", "");
String r_1_2_pac		= properties.get("r_1_2_pac", "Per Day");


String r_2_1_pac		= properties.get("r_2_1_pac", "Current childcare fees");
String r_2_tootip_1_pac	= properties.get("r_2_tootip_1_pac", "");
String r_2_2_pac		= properties.get("r_2_2_pac", "- Daycare Assistance");
String r_2_tootip_2_pac	= properties.get("r_2_tootip_2_pac", "");
String r_2_3_pac		= properties.get("r_2_3_pac", "- Income Cap Assistance");
String r_2_tootip_3_pac	= properties.get("r_2_tootip_3_pac", "");
String r_2_4_pac		= properties.get("r_2_4_pac", "Per Day");


String r_3_1_pac		= properties.get("r_3_1_pac", "Total Estimated Assistance");
String r_3_tootip_1_pac	= properties.get("r_3_tootip_1_pac", "");
String r_3_2_pac		= properties.get("r_3_2_pac", "Per Day");


String r_4_1_pac		= properties.get("r_4_1_pac", "Projected Childcare fee (family pays)");
String r_4_tootip_1_pac	= properties.get("r_4_tootip_1_pac", "");
String r_4_2_pac		= properties.get("r_4_2_pac", "Per Day");

String title_1_pac			= properties.get("title_1_pac", "");
String title_1_tootip_pac	= properties.get("title_1_tootip_pac", "");



String title_2_pac			= properties.get("title_2_pac", "");
String title_2_tootip_pac	= properties.get("title_2_tootip_pac", "");

String title_3_pac			= properties.get("title_3_pac", "");
String title_3_tootip_pac	= properties.get("title_3_tootip_pac", "");

String title_4_pac			= properties.get("title_4_pac", "");
String title_4_tootip_pac	= properties.get("title_4_tootip_pac", "");

String collapsible_pac		= properties.get("collapsible_pac", "");
String collapsible_title_pac= properties.get("collapsible_title_pac", "Parent Assistance Calculator");
String collapsible_id_pac	= properties.get("collapsible_id_pac", "pac_collapse");
String collapsible_button_pac= properties.get("collapsible_button_pac", "btn-info");

String disclaimer_pac		= properties.get("disclaimer_pac", "");

Random rand = new Random();
int n = rand.nextInt(90000) + 10000;
%>

<%if (collapsible_pac.equals("true")){ %>
<button type="button" class="pac btn <%=collapsible_button_pac%> collapsed" data-toggle="collapse" data-target="#<%=collapsible_id_pac%>">
    <%=collapsible_title_pac%>
</button>
<!--START of collapse-->
<div id="<%=collapsible_id_pac%>" class="collapse">
  <%}%>
  <!--START of form-->
  <form method="POST" class="form-horizontal" role="form" >
    <!--START of well well-sm-->
    <div class="well well-sm">
      <!--START of TITLE "Income"-->
      <div class="form-group" >
        <%if (title_1_tootip_pac=="") {%>
        <p class="col-sm-12   text-left"><strong><%=title_1_pac%></strong></p>
        <%} else {%>
        <p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_1_tootip_pac%>" class="red-tooltip"><%=title_1_pac%></a></strong></p>
        <% } %>
      </div>
      <!--END of TITLE "Income"-->
      <!--START of "Family Net Annual Income: $"-->
      <div class="form-group" >
        <%if (t_1_tootip_1_pac=="") {%>
        <label class="col-sm-8 control-label " for="income"><%=t_1_1_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="income"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_1_tootip_1_pac%>" class="red-tooltip"><%=t_1_1_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT">
          <div class="input-group"> <span class="input-group-addon">$</span>
            <input type="number" min="0" id="income" class="form-control input-sm" name="income" value="" onChange="adCalc_pac(this.form);" placeholder="<%=t_1_2_pac%>" step="1000"/>
          </div>
        </div>
      </div>
      <!--START of "Location(2022-03-18)"-->
      <div class="form-group" >
        <%if (t_location_tootip_1_pac=="") {%>
        <label class="col-sm-8 control-label " for="location"><%=t_location_1_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label " for="location"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_location_tootip_1_pac%>" class="red-tooltip"><%=t_location_1_pac%></a></label>
        <% } %>
        <div class="col-sm-4">
   			<select class="form-control" name="location" id="location" onChange="adCalc_pac(this.form);"> 
				<option value=""><%=t_location_item_1_pac%></option>
				<option value="large"><%=t_location_item_2_pac%></option>
				<option value="small"><%=t_location_item_3_pac%></option>
			</select>
        </div>
      </div>
        <input type="hidden" id="value">
		<input type="hidden" id="text">
        <!--END of "Location(2022-03-18)"-->
      <!--END of "Family Net Annual Income: $"-->

      <hr class="style4">

      <!--START of TITLE "Childcare Needs - Full Time"-->
      <div class="form-group" >
        <%if (title_2_tootip_pac=="") {%>
        <p class="col-sm-12   text-left"><strong><%=title_2_pac%></strong></p>
        <%} else {%>
        <p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_2_tootip_pac%>" class="red-tooltip"><%=title_2_pac%></a></strong></p>
        <% } %>
      </div>
      <!--END of TITLE "Childcare Needs - Full Time"-->

      <!--START of INFANT FULL-TIME-->
      <!--START of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
      <div class="form-group">
        <%if (t_2_tootip_1_pac=="") {%>
        <label class="col-sm-8 control-label" for="FTInfantsNo"><%=t_2_1_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="FTInfantsNo"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_1_pac%>" class="red-tooltip"><%=t_2_1_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTInfantsNo(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="FTInfantsNo" name="FTInfantsNo" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTInfantsNo(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->

      <!--START of "daily fee for infants -Full time"-->
      <div class="form-group">
        <%if (t_2_tootip_2_pac=="") {%>
        <label class="col-sm-8 control-label" for="FTInfantsFees"><%=t_2_2_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="FTInfantsFees"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_2_pac%>" class="red-tooltip"><%=t_2_2_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTInfantsFees(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="FTInfantsFees" name="FTInfantsFees" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTInfantsFees(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "daily fee for infants -Full time"-->

      <!--START of "Day/Week"-->
      <div class="form-group">
        <%if (t_2_tootip_3_pac=="") {%>
        <label class="col-sm-8 control-label" for="FTInfantsDay"><%=t_2_3_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="FTInfantsDay"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_3_pac%>" class="red-tooltip"><%=t_2_3_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTInfantsDay(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="FTInfantsDay" name="FTInfantsDay" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTInfantsDay(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Day/Week"-->

      <!--START of INFANT FULL-TIME-->

      <hr class="style4">

      <!--START of PRESCHOOL(FULL-TIME)-->
      <!--START of "Number of children needing full-time child care (more than 4 hours) between 2-12 years old"-->
      <div class="form-group">
        <%if (t_3_tootip_1_pac=="") {%>
        <label class="col-sm-8 control-label" for="FTChildNo"><%=t_3_1_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="FTChildNo"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_1_pac%>" class="red-tooltip"><%=t_3_1_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTChildNo(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="FTChildNo" name="FTChildNo" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTChildNo(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
      <!--START of "daily fee for preschool -Full time"-->
      <div class="form-group">
        <%if (t_3_tootip_2_pac=="") {%>
        <label class="col-sm-8 control-label" for="FTChildFees"><%=t_3_2_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="FTChildFees"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_2_pac%>" class="red-tooltip"><%=t_3_2_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTChildFees(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="FTChildFees" name="FTChildFees" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTChildFees(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "daily fee for preschool -Full time"-->

      <!--START of "Day/Week"-->
      <div class="form-group">
        <%if (t_3_tootip_3_pac=="") {%>
        <label class="col-sm-8 control-label" for="FTChildDay"><%=t_3_3_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="FTChildDay"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_3_pac%>" class="red-tooltip"><%=t_3_3_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTChildDay(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="FTChildDay" name="FTChildDay" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTChildDay(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Day/Week"-->

      <!--END of PRESCHOOL(FULL-TIME)-->

      <hr class="style4">

      <!--START of TITLE "Childcare Needs - Full Time"-->
      <div class="form-group" >
        <%if (title_3_tootip_pac=="") {%>
        <p class="col-sm-12   text-left"><strong><%=title_3_pac%></strong></p>
        <%} else {%>
        <p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_3_tootip_pac%>" class="red-tooltip"><%=title_3_pac%></a></strong></p>
        <% } %>
      </div>
      <!--END of TITLE "Childcare Needs - Full Time"-->
      <!--START of INFANTS PARTTIME-->
      <!--START of "Number of children needing part-time child care (less than 4 hours) less than 24 months old"-->
      <div class="form-group">
        <%if (t_4_tootip_1_pac=="") {%>
        <label class="col-sm-8 control-label" for="PTInfantsNo"><%=t_4_1_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="PTInfantsNo"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_4_tootip_1_pac%>" class="red-tooltip"><%=t_4_1_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTInfantsNo(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="PTInfantsNo" name="PTInfantsNo" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTInfantsNo(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
      <!--START of "daily fee for intants -Part time"-->
      <div class="form-group">
        <%if (t_4_tootip_2_pac=="") {%>
        <label class="col-sm-8 control-label" for="PTInfantsFees"><%=t_4_2_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="PTInfantsFees"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_4_tootip_2_pac%>" class="red-tooltip"><%=t_4_2_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTInfantsFees(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="PTInfantsFees" name="PTInfantsFees" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTInfantsFees(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "daily fee for intants -Part time"-->
      <!--START of "Day/Week"-->
      <div class="form-group">
        <%if (t_4_tootip_3_pac=="") {%>
        <label class="col-sm-8 control-label" for="PTInfantsDay"><%=t_4_3_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="PTInfantsDay"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_4_tootip_3_pac%>" class="red-tooltip"><%=t_4_3_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTInfantsDay(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="PTInfantsDay" name="PTInfantsDay" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTInfantsDay(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Day/Week"-->
      <!--END of INFANTS PARTTIME-->

      <hr class="style4">

      <!--START of PRESCHOOL PARTTIME-->
      <!--START of "Number of children needing part-time child care (less than 4 hours) between 2-12 years old"-->
      <div class="form-group">
        <%if (t_5_tootip_1_pac=="") {%>
        <label class="col-sm-8 control-label" for="PTChildNo"><%=t_5_1_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="PTChildNo"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_5_tootip_1_pac%>" class="red-tooltip"><%=t_5_1_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTChildNo(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="PTChildNo" name="PTChildNo" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTChildNo(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Number of children needing part-time child care (less than 4 hours) between 2-12 years old"-->
      <!--START of "daily fee for preschool -Part time"-->
      <div class="form-group">
        <%if (t_5_tootip_2_pac=="") {%>
        <label class="col-sm-8 control-label" for="PTChildFees"><%=t_5_2_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="PTChildFees"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_5_tootip_2_pac%>" class="red-tooltip"><%=t_5_2_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTChildFees(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="PTChildFees" name="PTChildFees" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTChildFees(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "daily fee for preschool -Part time"-->
      <!--START of "Day/Week"-->
      <div class="form-group">
        <%if (t_5_tootip_3_pac=="") {%>
        <label class="col-sm-8 control-label" for="PTChildDay"><%=t_5_3_pac%></label>
        <%} else {%>
        <label class="col-sm-8 control-label" for="PTChildDay"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_5_tootip_3_pac%>" class="red-tooltip"><%=t_5_3_pac%></a></label>
        <% } %>
        <div class="col-sm-4 RT" >
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTChildDay(); adCalc_pac(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>
            <input type="text" id="PTChildDay" name="PTChildDay" class="form-control input-number input-sm" onChange="adCalc_pac(this.form);" />
            <div class="input-group-btn">
              <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTChildDay(); adCalc_pac(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
          </div>
        </div>
      </div>
      <!--END of "Day/Week"-->
      <!--END of PRESCHOOL PARTTIME-->

      <hr class="style4">

      <!--START of new Result-->
      <div class="form-group">
        <!--START of  row: Your Estimated Annual Daycare Expenses-->
        <%if (title_4_tootip_pac=="") {%>
        <label class="col-sm-8 bold"><%=title_4_pac%></label>
        <%} else {%>
        <label class="col-sm-8 bold"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_4_tootip_pac%>" class="red-tooltip"><%=title_4_pac%></a></label>
        <% } %>
        <div class="col-sm-4">
          <div class="textRight"><small><%=r_1_2_pac%></small></div>
        </div>
      </div>
      <!--END of  row: Your Estimated Annual Daycare Expenses-->
      <!--START of new Result-->
      <div class="form-group">
        <!--START of  row-->
        <%if (r_1_tootip_1_pac=="") {%>
        <label class="col-sm-8 bold"><%=r_1_1_pac%></label>
        <%} else {%>
        <label class="col-sm-8 bold"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_1_tootip_1_pac%>" class="red-tooltip"><%=r_1_1_pac%></a></label>
        <% } %>
        <div class="col-sm-4">
          <div class="textRight  normal" id="daily_expenses"></div>
        </div>
        <!--END of row-->
        <!--START of  row-->
        <%if (r_2_tootip_1_pac=="") {%>
        <div class="col-sm-12 text-left normal"><%=r_2_1_pac%></div>
        <%} else {%>
        <div class="col-sm-12 text-left normal"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_2_tootip_2_pac%>" class="red-tooltip"><%=r_2_1_pac%></a></div>
        <% } %>
        <!--END of row-->
        <!--START of  row-->
        <%if (r_2_tootip_2_pac=="") {%>
        <label class="col-sm-8"><%=r_2_2_pac%></label>
        <%} else {%>
        <label class="col-sm-8"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_2_tootip_2_pac%>" class="red-tooltip"><%=r_2_2_pac%></a></label>
        <% } %>
        <div class="col-sm-4">
          <div class="hidden-sm hidden-md hidden-lg"><small><%=r_2_4_pac%></small></div>
          <div class="row">
            <div class="col-sm-12 textRight  normal" id="Daycare_Assistance_perDay"></div>
          </div>
        </div>
        <!--END of row-->
        <!--START of  row-->
        <%if (r_2_tootip_3_pac=="") {%>
        <label class="col-sm-8 "><%=r_2_3_pac%></label>
        <%} else {%>
        <label class="col-sm-8"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_2_tootip_3_pac%>" class="red-tooltip"><%=r_2_3_pac%></a></label>
        <% } %>
        <div class="col-sm-4">
          <div class="hidden-sm hidden-md hidden-lg"><small><%=r_2_4_pac%></small></div>
          <div class="row">
            <div class="col-sm-12 textRight  normal" id="IncomeCap_Assistance_perDay"></div>
          </div>
        </div>
        <!--END of row-->
        <!--START of  row-->
        <%if (r_3_tootip_1_pac=="") {%>
        <label class="col-sm-8  bold"><%=r_3_1_pac%></label>
        <%} else {%>
        <label class="col-sm-8 bold"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_3_tootip_1_pac%>" class="red-tooltip"><%=r_3_1_pac%></a></label>
        <% } %>
        <div class="col-sm-4">
          <div class="hidden-sm hidden-md hidden-lg"><small><%=r_3_2_pac%></small></div>
          <div class="row">
            <div class="col-sm-12 textRight  normal" id="Total_EstimatedAssistance_perDay"></div>
          </div>
        </div>
        <!--END of row-->
        <!--START of  row-->
        <%if (r_4_tootip_1_pac=="") {%>
        <label class="col-sm-8  bold"><%=r_4_1_pac%></label>
        <%} else {%>
        <label class="col-sm-8 bold"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_4_tootip_1_pac%>" class="red-tooltip"><%=r_4_1_pac%></a></label>
        <% } %>
        <div class="col-sm-4">
          <div class="hidden-sm hidden-md hidden-lg"><small><%=r_4_2_pac%></small></div>
          <div class="row">
            <div class="col-sm-12 textRight  normal" id="Revised_Estimated_Annual_Daycare_perDay"></div>
          </div>
        </div>
        <!--END of row-->
      </div>
      <!--END of new Result-->

      <hr class="style4">
      <!--START of reset button-->
      <div class="form-group">
        <div class="col-sm-12" >
          <input type="Reset" value="<%=t_6_1_pac%>"  id="reset" class="btn  btn-sm btn-block btn-info active" aria-labelledby="reset" onClick="clearContent();"/>
        </div>
      </div>
      <!--END of reset button-->
    </div>
    <!--END of well well-sm-->
  </form>
  <!--END of form-->

  <!--START of disclaimer-->
  <%if (disclaimer_pac!="") {%>
	<p><%=disclaimer_pac%></p>
  <% } %>    
  <!--END of disclaimer-->

  <%if (collapsible_pac.equals("true")){ %>
</div>
<%}%>
<!--END of collapse-->

<script src="/etc/designs/gnb-bootstrap/clientlibs/js/pac_cal_collapse.js?v=<%=n%>"></script>

