<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.*" %>
<%
// Get language and content bundle for that language
String t_1_1= properties.get("t_1_1", "");
String t_1_tootip_1	= properties.get("t_1_tootip_1", "");
String t_1_2= properties.get("t_1_2", "");

String t_2_1= properties.get("t_2_1", "");
String t_2_tootip_1	= properties.get("t_2_tootip_1", "");
String t_2_2= properties.get("t_2_2", "");
String t_2_tootip_2	= properties.get("t_2_tootip_2", "");
String t_2_3= properties.get("t_2_3", "");
String t_2_tootip_3	= properties.get("t_2_tootip_3", "");

String t_3_1= properties.get("t_3_1", "");
String t_3_tootip_1	= properties.get("t_3_tootip_1", "");
String t_3_2= properties.get("t_3_2", "");
String t_3_tootip_2	= properties.get("t_3_tootip_2", "");
String t_3_3= properties.get("t_3_3", "");
String t_3_tootip_3	= properties.get("t_3_tootip_3", "");

String t_4_1= properties.get("t_4_1", "");
String t_4_tootip_1	= properties.get("t_4_tootip_1", "");
String t_4_2= properties.get("t_4_2", "");
String t_4_tootip_2	= properties.get("t_4_tootip_2", "");
String t_4_3= properties.get("t_4_3", "");
String t_4_tootip_3	= properties.get("t_4_tootip_3", "");

String t_5_1= properties.get("t_5_1", "");


String title_1= properties.get("title_1", "");
String title_1_tootip= properties.get("title_1_tootip", "");

String title_2= properties.get("title_2", "");
String title_2_tootip= properties.get("title_2_tootip", "");

String title_3= properties.get("title_3", "");
String title_3_tootip= properties.get("title_3_tootip", "");


Random rand = new Random();
int n = rand.nextInt(90000) + 10000;
%>
<!--START of form-->
<form method="POST" class="form-horizontal" role="form" >
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
            <div class="input-group">
            	<span class="input-group-addon">$</span>
      			<input type="number" min="0" id="income" class="form-control input-sm" name="income" value="" onChange="adCalc(this.form);" placeholder="<%=t_1_2%>" step="1000"/>  
            </div>
    	</div>
	</div>
<!--END of "Family Net Annual Income: $"-->    

<hr class="style4">    

<!--START of TITLE "Childcare Needs - Infants(0-24months)"-->    
<div class="form-group" >
	<%if (title_2_tootip=="") {%>
		<p class="col-sm-12   text-left"><strong><%=title_2%></strong></p>
    <%} else {%>
    	<p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_2_tootip%>" class="red-tooltip"><%=title_2%></a></strong></p>
    <% } %>      
</div>  
<!--END of TITLE "Childcare Needs - Infants(0-24months)"-->    

<!--START of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"-->
  <div class="form-group">

        <%if (t_2_tootip_1=="") {%>
        	<label class="col-sm-8 control-label" for="FTInfants"><%=t_2_1%></label> 
        <%} else {%>
        	<label class="col-sm-8 control-label " for="FTInfants"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_1%>" class="red-tooltip"><%=t_2_1%></a></label>
        <% } %>

    <div class="col-sm-4 RT" >
		<div class="input-group">
            <div class="input-group-btn">
				<button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTInfants(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>    
			<input type="text" id="FTInfants" name="FTInfants" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
            <div class="input-group-btn">
                <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTInfants(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
            </div> 
        </div>    
    </div>
  </div>
<!--END of "Number of children needing full time child care (more than 4 hours) aged less than 24 months"--> 



<!--START of "Number of day(s) per week"-->
  <div class="form-group">

        <%if (t_2_tootip_2=="") {%>
        	<label class="col-sm-8 control-label" for="FTIdays"><%=t_2_2%></label> 
        <%} else {%>
        	<label class="col-sm-8 control-label " for="FTIdays"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_2%>" class="red-tooltip"><%=t_2_2%></a></label>
        <% } %>

    <div class="col-sm-4 RT" >
     	<select id="FTIdays" onChange="adCalc(this.form);" class="form-control input-sm">
            <option id="0" value="4.2" selected="selected"></option>
            <option id="1" value="4.2">1</option>
            <option id="2" value="8.4">2</option>
            <option id="3" value="12.6">3</option>
            <option id="4" value="16.8">4</option>
            <option id="5" value="21">5</option>
        </select>
    </div>
  </div>
<!--END of "Number of day(s) per week"--> 



<!--START of "Number of children needing part time child care (less than 4 hours) aged less than 24 months"-->
  <div class="form-group">

        <%if (t_2_tootip_3=="") {%>
        	<label class="col-sm-8 control-label" for="PTInfants"><%=t_2_3%></label>   
        <%} else {%>
        	<label class="col-sm-8 control-label " for="PTInfants"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_3%>" class="red-tooltip"><%=t_2_3%></a></label>
        <% } %>      
    <div class="col-sm-4 RT" >
		<div class="input-group">
			<div class="input-group-btn">
                <button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTInfants();adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>    
			<input type="text" id="PTInfants" name="PTInfants" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
			<div class="input-group-btn">
				<button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTInfants();adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
        	</div>    
        </div>
    </div>
  </div>
<!--END of "Number of children needing part time child care (less than 4 hours) aged less than 24 months"--> 

<!--START of "Number of day(s) per week"-->
  <div class="form-group">

        <%if (t_2_tootip_2=="") {%>
        	<label class="col-sm-8 control-label" for="PTIdays"><%=t_2_2%></label> 
        <%} else {%>
        	<label class="col-sm-8 control-label " for="PTIdays"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_2_tootip_2%>" class="red-tooltip"><%=t_2_2%></a></label>
        <% } %>    

    <div class="col-sm-4 RT" >
      <select name="PTIdays" id="PTIdays" onclick="adCalc(this.form);" class="form-control input-sm">
    	<option id="6" value="4.2" selected="selected"></option>
    	<option id="7" value="4.2">1</option>
    	<option id="8" value="8.4">2</option>
    	<option id="9" value="12.6">3</option>
    	<option id="10" value="16.8">4</option>
    	<option id="11" value="21">5</option>
  	  </select>
    </div>
  </div>
<!--END of "Number of day(s) per week"--> 

<hr class="style4">
<!--START of TITLE "Childcare Needs - Pre-school and After School Children(2-12years old)"-->    
<div class="form-group" >
	<%if (title_3_tootip=="") {%>
		<p class="col-sm-12   text-left"><strong><%=title_3%></strong></p>
    <%} else {%>
    	<p class="col-sm-12   text-left"><strong><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=title_3_tootip%>" class="red-tooltip"><%=title_3%></a></strong></p>
    <% } %>       
</div>  
<!--END of TITLE "Childcare Needs - Pre-school and After School Children(2-12years old)"-->    


<!--START of "Number of children needing full time child care (more than 4 hours) between 2 -12 years old"-->
  <div class="form-group">

        <%if (t_3_tootip_1=="") {%>
        	<label class="col-sm-8 control-label" for="FTChild"><%=t_3_1%></label>  
        <%} else {%>
        	<label class="col-sm-8 control-label " for="FTChild"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_1%>" class="red-tooltip"><%=t_3_1%></a></label>
        <% } %>     

    <div class="col-sm-4 RT" >
		<div class="input-group">
			<div class="input-group-btn">
				<button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownFTChild(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>    
			<input type="text" id="FTChild" name="FTChild" class="form-control input-number input-sm" onChange="adCalc(this.form);" />
			<div class="input-group-btn">
                <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpFTChild(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
        	</div>    
        </div>
    </div>
  </div>
<!--END of "Number of children needing full time child care (more than 4 hours) between 2 -12 years old"--> 

<!--START of "Number of day(s) per week"-->
  <div class="form-group">

        <%if (t_3_tootip_2=="") {%>
        	<label class="col-sm-8 control-label" for="FTCdays"><%=t_3_2%></label>  
        <%} else {%>
        	<label class="col-sm-8 control-label " for="FTCdays"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_2%>" class="red-tooltip"><%=t_3_2%></a></label>
        <% } %>          
    <div class="col-sm-4 RT" >
    <select name="FTCdays" id="FTCdays" onChange="adCalc(this.form);" class="form-control input-sm">
    	<option id="12" value="4.2" selected="selected"></option>
    	<option id="13" value="4.2">1</option>
    	<option value="8.4">2</option>
    	<option id="14" value="12.6">3</option>
    	<option id="15" value="16.8">4</option>
    	<option id="16" value="21">5</option>
  	</select>
    </div>
  </div>
<!--END of "Number of day(s) per week"--> 

<!--START of "Number of children part time child care (less than 4 hours) between 2 -12 years old"-->
  <div class="form-group">

        <%if (t_3_tootip_3=="") {%>
        	<label class="col-sm-8 control-label" for="PTChild"><%=t_3_3%></label>    
        <%} else {%>
        	<label class="col-sm-8 control-label " for="PTChild"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_3%>" class="red-tooltip"><%=t_3_3%></a></label>
        <% } %>        
    <div class="col-sm-4 RT" >
		<div class="input-group">
			<div class="input-group-btn">
				<button class="btn btn-default btn-number btn-sm" type="button"  onClick="DownPTChild(); adCalc(this.form);" aria-label="minus"><span class="glyphicon glyphicon-minus"></span></button>
            </div>    
			<input type="text" id="PTChild" name="PTChild"  class="form-control input-number input-sm" onChange="adCalc(this.form);" />
			<div class="input-group-btn">
                <button class="btn btn-default btn-number btn-sm" type="button" onClick="UpPTChild(); adCalc(this.form);" aria-label="plus"><span class="glyphicon glyphicon-plus"></span></button>
        	</div>    
        </div>
    </div>
  </div>
<!--END of "Number of children part time child care (less than 4 hours) between 2 -12 years old"-->    

<!--START of "Number of day(s) per week"-->
  <div class="form-group">

        <%if (t_3_tootip_2=="") {%>
        	<label class="col-sm-8 control-label" for="PTCdays"><%=t_3_2%></label>    
        <%} else {%>
        	<label class="col-sm-8 control-label " for="PTCdays"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_3_tootip_2%>" class="red-tooltip"><%=t_3_2%></a></label>
        <% } %>       
    <div class="col-sm-4 RT" >
    <select name="PTCdays" id="PTCdays" onChange="adCalc(this.form);" class="form-control input-sm">
    	<option id="17" value="4.2" selected="selected"></option>
    	<option id="18" value="4.2">1</option>
    	<option id="19" value="8.4">2</option>
    	<option id="20" value="12.6">3</option>
    	<option id="21" value="16.8">4</option>
    	<option id="22" value="21">5</option>
  	</select>
    </div>
  </div>
<!--END of "Number of day(s) per week"-->   

<hr class="style4">

<!--START of "Est. per day $"-->
  <div class="form-group">

        <%if (t_4_tootip_1=="") {%>
        	<label class="col-sm-8 control-label" for="family"><%=t_4_1%></label>     
        <%} else {%>
        	<label class="col-sm-8 control-label " for="family"><a href="#" data-toggle="tooltip" data-placement="bottom" title="<%=t_4_tootip_1%>" class="red-tooltip"><%=t_4_2%></a></label>
        <% } %> 

    <div class="col-sm-4" >
		<div class="input-group">
			<span class="input-group-addon">$</span>           
    		<input type="text" id="family" name="family" size="8" value="" class="noborder noedit form-control input-sm" disabled="disabled" />
        </div>
    </div>
  </div>
<!--END of "Est. per day $"-->       

<!--START of "Est. per month $"-->

<div class="form-group">
    <label class="col-sm-8 control-label" for="monthly"><%=t_4_2%></label>   
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
    <label class="col-sm-8 control-label" for="yearly"><%=t_4_3%></label>    
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
    <input type="Reset" value="<%=t_5_1%>"  id="reset" class="btn  btn-sm btn-block btn-info active" aria-labelledby="reset"/>
    </div>
  </div>
<!--END of reset button-->       
</div>
</form>
<!--END of form-->
<script src="/etc/designs/gnb-bootstrap/clientlibs/js/dap_cal.js?v=<%=n%>"></script>