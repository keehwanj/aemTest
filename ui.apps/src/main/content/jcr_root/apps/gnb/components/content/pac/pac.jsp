<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.*" %>
<%
//text in header
String t_1_1		= properties.get("t_1_1", "Household Income");
String t_1_tootip_1	= properties.get("t_1_tootip_1", "");
String t_1_2		= properties.get("t_1_2", "Net Income");


String t_2_1		= properties.get("t_2_1", "# Infants full-time");
String t_2_tootip_1	= properties.get("t_2_tootip_1", "");
String t_2_2		= properties.get("t_2_2", "Fees for Infant full-time");
String t_2_tootip_2	= properties.get("t_2_tootip_2", "");

String t_3_1		= properties.get("t_3_1", "# Preschool full-time");
String t_3_tootip_1	= properties.get("t_3_tootip_1", "");
String t_3_2		= properties.get("t_3_2", "Fees of Preschool  full-time");
String t_3_tootip_2	= properties.get("t_3_tootip_2", "");

String t_4_1		= properties.get("t_4_1", "# Infants part-time");
String t_4_tootip_1	= properties.get("t_4_tootip_1", "");
String t_4_2		= properties.get("t_4_2", "Fees of Infants part-time");
String t_4_tootip_2	= properties.get("t_4_tootip_2", "");
String t_4_3		= properties.get("t_4_3", "Number of day(s) per week");
String t_4_tootip_3	= properties.get("t_4_tootip_3", "");


String t_5_1		= properties.get("t_5_1", "# Preschool part-time");
String t_5_tootip_1	= properties.get("t_5_tootip_1", "");
String t_5_2		= properties.get("t_5_2", "");
String t_5_tootip_2	= properties.get("t_5_tootip_2", "");
String t_5_3		= properties.get("t_5_3", "Number of day(s) per week");
String t_5_tootip_3	= properties.get("t_5_tootip_3", "");

String t_6_1		= properties.get("t_6_1", "Reset");


//text in result
String r_1_1		= properties.get("r_1_1", "Your Estimated Annual Daycare Expences");
String r_1_tootip_1	= properties.get("r_1_tootip_1", "");
String r_1_2		= properties.get("r_1_2", "Per Day");


String r_2_1		= properties.get("r_2_1", "Estimated Amount of Assistance");
String r_2_tootip_1	= properties.get("r_2_tootip_1", "");
String r_2_2		= properties.get("r_2_2", "- Daycare Assistance");
String r_2_tootip_2	= properties.get("r_2_tootip_2", "");
String r_2_3		= properties.get("r_2_3", "- Income Cap Assistance");
String r_2_tootip_3	= properties.get("r_2_tootip_3", "");
String r_2_4		= properties.get("r_2_4", "Per Day");


String r_3_1		= properties.get("r_3_1", "Total Estimated Assistance");
String r_3_tootip_1	= properties.get("r_3_tootip_1", "");
String r_3_2		= properties.get("r_3_2", "Per Day");


String r_4_1		= properties.get("r_4_1", "Your Revised Estimated Annual Daycare Expenses");
String r_4_tootip_1	= properties.get("r_4_tootip_1", "");
String r_4_2		= properties.get("r_4_2", "Per Day");

String title_1			= properties.get("title_1", "");
String title_1_tootip	= properties.get("title_1_tootip", "");

String title_2			= properties.get("title_2", "");
String title_2_tootip	= properties.get("title_2_tootip", "");

String title_3			= properties.get("title_3", "");
String title_3_tootip	= properties.get("title_3_tootip", "");

String title_4			= properties.get("title_4", "");
String title_4_tootip	= properties.get("title_4_tootip", "");

Random rand = new Random();
int n = rand.nextInt(90000) + 10000;
%>

<!--START of form-->

<form method="POST" class="form-horizontal" role="form" >
  <!--START of well well-sm-->
  <div class="well well-sm">
<!--START of TITLE "Income"-->    
<div class="form-group" >
	<%if (title_1_tootip=="") {%>
		<p class="col-sm-12   text-left"><strong><%=title_1%></strong></p>
    <%} else {%>
    	<p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_1_tootip%>" class="red-tooltip"><%=title_1%></a></strong></p>
    <% } %>  
</div>  
<!--END of TITLE "Income"-->          
    <!--START of "Family Net Annual Income: $"-->
    <div class="form-group" >
        <%if (t_1_tootip_1=="") {%>
        	<label class="col-sm-8 control-label " for="income"><%=t_1_1%></label>
        <%} else {%>
        	<label class="col-sm-8 control-label " for="income"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_1_tootip_1%>" class="red-tooltip"><%=t_1_1%></a></label>
        <% } %>
      <div class="col-sm-4 ">
        <div class="input-group"> <span class="input-group-addon">$</span>
          <input type="number" min="0" id="income" class="form-control input-sm" name="income" value="" onChange="adCalc(this.form);" placeholder="<%=t_1_2%>" step="1000"/>
        </div>
      </div>
    </div>
    <!--END of "Family Net Annual Income: $"-->
<hr class="style4">
<!--START of TITLE "Childcare Needs - Full Time"-->    
<div class="form-group" >
	<%if (title_2_tootip=="") {%>
		<p class="col-sm-12   text-left"><strong><%=title_2%></strong></p>
    <%} else {%>
    	<p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_2_tootip%>" class="red-tooltip"><%=title_2%></a></strong></p>
    <% } %>  
</div>  
<!--END of TITLE "Childcare Needs - Full Time"-->    

    <!--START of INFANT FULL-TIME-->
    <!--START of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
    <div class="form-group">
      <%if (t_2_tootip_1=="") {%>
        <label class="col-sm-8 control-label" for="FTInfantsNo"><%=t_2_1%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="FTInfantsNo"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_1%>" class="red-tooltip"><%=t_2_1%></a></label>
      <% } %>  
      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTInfantsNo(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="FTInfantsNo" name="FTInfantsNo" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTInfantsNo(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
          </div>
        </div>
      </div>
    </div>
    <!--END of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
    <!--START of "Number of day(s) per week"-->
    <div class="form-group">
      <%if (t_2_tootip_2=="") {%>
        <label class="col-sm-8 control-label" for="FTInfantsFees"><%=t_2_2%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="FTInfantsFees"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_2%>" class="red-tooltip"><%=t_2_2%></a></label>
      <% } %>         

      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTInfantsFees(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="FTInfantsFees" name="FTInfantsFees" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTInfantsFees(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
          </div>
        </div>
      </div>
    </div>
    <!--END of "Number of day(s) per week"-->
    <!--START of INFANT FULL-TIME-->
    <hr class="style4">
    <!--START of PRESCHOOL(FULL-TIME)-->
    <!--START of "Number of children needing full-time child care (more than 4 hours) between 2-12 years old"-->
    <div class="form-group">
      <%if (t_3_tootip_1=="") {%>
        <label class="col-sm-8 control-label" for="FTChildNo"><%=t_3_1%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="FTChildNo"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_1%>" class="red-tooltip"><%=t_3_1%></a></label>
      <% } %>         
      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTChildNo(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="FTChildNo" name="FTChildNo" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTChildNo(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
          </div>
        </div>
      </div>
    </div>
    <!--END of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
    <!--START of "Number of day(s) per week"-->
    <div class="form-group">
      <%if (t_3_tootip_2=="") {%>
        <label class="col-sm-8 control-label" for="FTChildFees"><%=t_3_2%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="FTChildFees"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_2%>" class="red-tooltip"><%=t_3_2%></a></label>
      <% } %>          
      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTChildFees(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="FTChildFees" name="FTChildFees" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTChildFees(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
          </div>
        </div>
      </div>
    </div>
    <!--END of "Number of day(s) per week"-->
    <!--END of PRESCHOOL(FULL-TIME)-->
<hr class="style4">
<!--START of TITLE "Childcare Needs - Full Time"-->    
<div class="form-group" >
	<%if (title_3_tootip=="") {%>
		<p class="col-sm-12   text-left"><strong><%=title_3%></strong></p>
    <%} else {%>
    	<p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_3_tootip%>" class="red-tooltip"><%=title_3%></a></strong></p>
    <% } %>  
</div>  
<!--END of TITLE "Childcare Needs - Full Time"-->         
    <!--START of INFANTS PARTTIME-->
    <!--START of "Number of children needing part-time child care (less than 4 hours) less than 24 months old"-->
    <div class="form-group">
      <%if (t_4_tootip_1=="") {%>
        <label class="col-sm-8 control-label" for="PTInfantsNo"><%=t_4_1%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="PTInfantsNo"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_4_tootip_1%>" class="red-tooltip"><%=t_4_1%></a></label>
      <% } %>          
      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTInfantsNo(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="PTInfantsNo" name="PTInfantsNo" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTInfantsNo(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
          </div>
        </div>
      </div>
    </div>
    <!--END of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
    <!--START of "Number of day(s) per week"-->
    <div class="form-group">

      <%if (t_4_tootip_2=="") {%>
        <label class="col-sm-8 control-label" for="PTInfantsFees"><%=t_4_2%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="PTInfantsFees"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_4_tootip_2%>" class="red-tooltip"><%=t_4_2%></a></label>
      <% } %>          

      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTInfantsFees(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="PTInfantsFees" name="PTInfantsFees" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTInfantsFees(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
          </div>
        </div>
      </div>
    </div>
    <!--END of "Number of day(s) per week"-->
    <!--START of "Day/Week"-->
    <div class="form-group">
      <%if (t_4_tootip_3=="") {%>
        <label class="col-sm-8 control-label" for="PTInfantsDay"><%=t_4_3%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="PTInfantsDay"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_4_tootip_3%>" class="red-tooltip"><%=t_4_3%></a></label>
      <% } %>           
      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTInfantsDay(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="PTInfantsDay" name="PTInfantsDay" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTInfantsDay(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
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
      <%if (t_5_tootip_1=="") {%>
        <label class="col-sm-8 control-label" for="PTChildNo"><%=t_5_1%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="PTChildNo"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_5_tootip_1%>" class="red-tooltip"><%=t_5_1%></a></label>
      <% } %>          
      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTChildNo(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="PTChildNo" name="PTChildNo" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTChildNo(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
          </div>
        </div>
      </div>
    </div>
    <!--END of "Number of children needing part-time child care (less than 4 hours) between 2-12 years old"-->
    <!--START of "Number of day(s) per week"-->
    <div class="form-group">

      <%if (t_5_tootip_2=="") {%>
        <label class="col-sm-8 control-label" for="PTChildFees"><%=t_5_2%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="PTChildFees"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_5_tootip_2%>" class="red-tooltip"><%=t_5_2%></a></label>
      <% } %>          

      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTChildFees(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="PTChildFees" name="PTChildFees" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTChildFees(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
          </div>
        </div>
      </div>
    </div>
    <!--END of "Number of day(s) per week"-->
    <!--START of "Day/Week"-->
    <div class="form-group">

      <%if (t_5_tootip_3=="") {%>
        <label class="col-sm-8 control-label" for="PTChildDay"><%=t_5_3%></label>
      <%} else {%>
        	<label class="col-sm-8 control-label" for="PTChildDay"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_5_tootip_3%>" class="red-tooltip"><%=t_5_3%></a></label>
      <% } %>           
      <div class="col-sm-4 RT" >
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTChildDay(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
          </div>
          <input type="text" id="PTChildDay" name="PTChildDay" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
          <div class="input-group-btn">
            <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTChildDay(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
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
      <%if (title_4_tootip=="") {%>  
	  	<label class="col-sm-8 bold"><%=title_4%></label>        
      <%} else {%> 
		<label class="col-sm-8 bold"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_4_tootip%>" class="red-tooltip"><%=title_4%></a></label>        
	  <% } %> 
      <div class="col-sm-4">
        <div class="textRight"><small><%=r_1_2%></small></div>
      </div>
    </div>        
    <!--END of  row: Your Estimated Annual Daycare Expenses-->


    <!--START of new Result-->
    <div class="form-group">
      <!--START of  row-->
      <%if (r_1_tootip_1=="") {%>
        <label class="col-sm-8 bold"><%=r_1_1%></label>
      <%} else {%>
        	<label class="col-sm-8 bold"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_1_tootip_1%>" class="red-tooltip"><%=r_1_1%></a></label>
      <% } %>         
      <div class="col-sm-4">
          <div class="textRight  normal" id="daily_expenses"></div>
      </div>
      <!--END of row-->
      <!--START of  row-->

      <%if (r_2_tootip_1=="") {%>
        <div class="col-sm-12 text-left normal"><%=r_2_1%></div>
      <%} else {%>
        	<div class="col-sm-12 text-left normal"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_2_tootip_2%>" class="red-tooltip"><%=r_2_1%></a></div>
      <% } %>           
      <!--END of row-->
      <!--START of  row-->

      <%if (r_2_tootip_2=="") {%>
        <label class="col-sm-8"><%=r_2_2%></label>
      <%} else {%>
        	<label class="col-sm-8"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_2_tootip_2%>" class="red-tooltip"><%=r_2_2%></a></label>
      <% } %>           
      <div class="col-sm-4">
        <div class="hidden-sm hidden-md hidden-lg"><small><%=r_2_4%></small></div>
        <div class="row">
          <div class="col-sm-12 textRight  normal" id="Daycare_Assistance_perDay"></div>
        </div>
      </div>
      <!--END of row-->
      <!--START of  row-->

      <%if (r_2_tootip_3=="") {%>
        <label class="col-sm-8 "><%=r_2_3%></label>
      <%} else {%>
        	<label class="col-sm-8"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_2_tootip_3%>" class="red-tooltip"><%=r_2_3%></a></label>
      <% } %>          
      <div class="col-sm-4">
        <div class="hidden-sm hidden-md hidden-lg"><small><%=r_2_4%></small></div>
        <div class="row">
          <div class="col-sm-12 textRight  normal" id="IncomeCap_Assistance_perDay"></div>
        </div>
      </div>
      <!--END of row-->
      <!--START of  row-->

      <%if (r_3_tootip_1=="") {%>
        <label class="col-sm-8  bold"><%=r_3_1%></label>
      <%} else {%>
        	<label class="col-sm-8 bold"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_3_tootip_1%>" class="red-tooltip"><%=r_3_1%></a></label>
      <% } %>          
      <div class="col-sm-4">
        <div class="hidden-sm hidden-md hidden-lg"><small><%=r_3_2%></small></div>
        <div class="row">
          <div class="col-sm-12 textRight  normal" id="Total_EstimatedAssistance_perDay"></div>
        </div>
      </div>
      <!--END of row-->
      <!--START of  row-->

      <%if (r_4_tootip_1=="") {%>
        <label class="col-sm-8  bold"><%=r_4_1%></label>
      <%} else {%>
        	<label class="col-sm-8 bold"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=r_4_tootip_1%>" class="red-tooltip"><%=r_4_1%></a></label>
      <% } %>         
      <div class="col-sm-4">
        <div class="hidden-sm hidden-md hidden-lg"><small><%=r_4_2%></small></div>
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
        <input type="Reset" value="<%=t_6_1%>"  id="reset" class="btn  btn-sm btn-block btn-info active" aria-labelledby="reset" onClick="clearContent();"/>
      </div>
    </div>
    <!--END of reset button-->
  </div>
  <!--END of well well-sm-->
</form>
<!--END of form-->
<script src="/etc/designs/gnb-bootstrap/clientlibs/js/pac_cal.js?v=<%=n%>"></script>