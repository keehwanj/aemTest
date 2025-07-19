<%@include file="/libs/foundation/global.jsp"%>
<%
//text in header
String t_1_1= properties.get("t_1_1", "Household Income");
String t_1_2= properties.get("t_1_2", "Net Income");
String t_1_3= properties.get("t_1_3", "Step 1");

String t_2_1= properties.get("t_2_1", "Infants (fulltime)");
String t_2_2= properties.get("t_2_2", "# of Infants");
String t_2_3= properties.get("t_2_3", "Fees");
String t_2_4= properties.get("t_2_4", "Step 2");

String t_3_1= properties.get("t_3_1", "Preschool (fulltime)");
String t_3_2= properties.get("t_3_2", "# of Preschool");
String t_3_3= properties.get("t_3_3", "Fees");

String t_4_1= properties.get("t_4_1", "Infants (parttime)");
String t_4_2= properties.get("t_4_2", "# of Infants");
String t_4_3= properties.get("t_4_3", "Fees");
String t_4_4= properties.get("t_4_4", "Day/Week");

String t_5_1= properties.get("t_5_1", "Preschool (parttime)");
String t_5_2= properties.get("t_5_2", "# of Preschool");
String t_5_3= properties.get("t_5_3", "Fees");
String t_5_4= properties.get("t_5_4", "Day/Week");

String t_6_1= properties.get("t_6_1", "Reset");
//text in result
String r_1_1= properties.get("r_1_1", "Your Estimated Annual Daycare Expences");
String r_1_2= properties.get("r_1_2", "Per Day");
String r_1_3= properties.get("r_1_3", "Per Year");
String r_1_4= properties.get("r_1_4", "%");

String r_2_1= properties.get("r_2_1", "Estimated Amount of Assistance");
String r_2_2= properties.get("r_2_2", "- Daycare Assistance");
String r_2_3= properties.get("r_2_3", "- Income Cap Assistance");
String r_2_4= properties.get("r_2_4", "Per Day");
String r_2_5= properties.get("r_2_5", "Per Year");

String r_3_1= properties.get("r_3_1", "Total Estimated Assistance");
String r_3_2= properties.get("r_3_2", "Per Day");
String r_3_3= properties.get("r_3_3", "Per Year");

String r_4_1= properties.get("r_4_1", "Your Revised Estimated Annual Daycare Expenses");
String r_4_2= properties.get("r_4_2", "Per Day");
String r_4_3= properties.get("r_4_3", "Per Year");
String r_4_4= properties.get("r_4_4", "%");

%>
<!--START of form-->
<form method="POST" class="form-horizontal" role="form" >

  <!--START of panel-group-->
  <div class="panel-group">



  <!--START of INCOME(panel panel-default)--> 
  <div class="panel panel-default">
    <div class="panel-heading bold"><%=t_1_3%></div> 
    <!--START of panel-body-->   
    <div class="panel-body">
		<!--START of form-group("Family Net Annual Income: $")-->     
		<div class="form-group" >
        	<label class="col-sm-6 control-label " for="income"><%=t_1_1%></label>
    		<div class="col-sm-6 ">
            	<div class="input-group">
            		<span class="input-group-addon">$</span>
      				<input type="number" min="0" id="income" class="form-control input-sm" name="income" value="" onChange="adCalc(this.form);" placeholder="<%=t_1_2%>" step="1000"/>  
            	</div>
    		</div>
		</div>
		<!--END of form-group("Family Net Annual Income: $")-->        
      </div>
      <!--END of panel-body-->   
  </div>
  <!--END of INCOME(panel panel-default)--> 


    <!--START of INFANTS FULLTIME(panel panel-default)-->  
    <div class="panel panel-default">
      <div class="panel-heading bold"><%=t_2_4%></div>   
      <!--START of panel-body-->   
      <div class="panel-body">
        <!--START of outer row-->
        <div class="row">
          <!--START of infant label-->
          <label class="col-sm-4 control-label bold"><%=t_2_1%></label>
          <!--END of infant label-->
          <!--START of infant right column-->
          <div class="col-sm-8">
            <!--START of infant 1st item-->
            <div class="row">
              <label class="col-sm-6 control-label" for="FTInfantsNo"><%=t_2_2%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 1st item-->

            <!--START of infant 2nd item-->
            <div class="row">
              <label class="col-sm-6 control-label" for="FTInfantsFees"><%=t_2_3%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 2nd item-->
          </div>
          <!--END of infant right column-->
        </div>
        <!--END of outer row-->
      </div>
      <!--END of panel-body-->   
    </div>
    <!--END of INFANTS FULLTIME(panel panel-default)-->   




    <!--START of PRESCHOOL FULLTIME(panel panel-default)-->   
    <div class="panel panel-default">
      <!--START of panel-body-->   
      <div class="panel-body">
        <!--START of outer row-->
        <div class="row">
          <!--START of infant label-->
          <label class="col-sm-4 control-label bold"><%=t_3_1%></label>
          <!--END of infant label-->
          <!--START of infant right column-->
          <div class="col-sm-8">
            <!--START of infant 1st item-->
            <div class="row">
              <label class="col-sm-6 control-label" for="FTChildNo"><%=t_3_2%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 1st item-->

            <!--START of infant 2nd item-->
            <div class="row">
              <label class="col-sm-6 control-label" for="FTChildFees"><%=t_3_3%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 2nd item-->
          </div>
          <!--END of infant right column-->
        </div>
        <!--END of outer row-->
      </div>
      <!--END of panel-body-->   
    </div>
    <!--END of PRESCHOOL FULLTIME(panel panel-default)-->     




    <!--START of INFANTS PARTTIME(panel panel-default)-->   
    <div class="panel panel-default">
      <!--START of panel-body-->   
      <div class="panel-body">
        <!--START of outer row-->
        <div class="row">
          <!--START of infant label-->
          <label class="col-sm-4 control-label bold"><%=t_4_1%></label>
          <!--END of infant label-->
          <!--START of infant right column-->
          <div class="col-sm-8">
            <!--START of infant 1st item-->
            <div class="row">
              <label class="col-sm-6 control-label" for="PTInfantsNo"><%=t_4_2%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 1st item-->

            <!--START of infant 2nd item-->
            <div class="row">
              <label class="col-sm-6 control-label" for="PTInfantsFees"><%=t_4_3%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 2nd item-->
            <!--START of infant 3rd item-->
            <div class="row">
                <label class="col-sm-6 control-label" for="PTInfantsDay"><%=t_4_4%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 3rd item-->   

          </div>
          <!--END of infant right column-->
        </div>
        <!--END of outer row-->
      </div>
      <!--END of panel-body-->   
    </div>
    <!--END of INFANTS PARTTIME(panel panel-default)-->      


    <!--START of PRESCHOOL PARTTIME(panel panel-default)-->   
    <div class="panel panel-default">
      <!--START of panel-body-->   
      <div class="panel-body">
        <!--START of outer row-->
        <div class="row">
          <!--START of infant label-->
          <label class="col-sm-4 control-label bold"><%=t_5_1%></label>
          <!--END of infant label-->
          <!--START of infant right column-->
          <div class="col-sm-8">
            <!--START of infant 1st item-->
            <div class="row">
              <label class="col-sm-6 control-label" for="PTChildNo"><%=t_5_2%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 1st item-->

            <!--START of infant 2nd item-->
            <div class="row">
              <label class="col-sm-6 control-label" for="PTChildFees"><%=t_5_3%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 2nd item-->
            <!--START of infant 3rd item-->
            <div class="row">
                <label class="col-sm-6 control-label" for="PTChildDay"><%=t_5_4%></label>
              <div class="col-sm-6 RT" >
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
            <!--END of infant 3rd item-->              
          </div>
          <!--END of infant right column-->
        </div>
        <!--END of outer row-->
      </div>
      <!--END of panel-body-->   
    </div>
    <!--END of  PRESCHOOL PARTTIME(panel panel-default)-->     

<!--START of new Result-->
<div class="panel panel-default">
  <div class="panel-body">
    <!--START of  row-->
    <div class="row normal bg-success">
        <label class="col-sm-5  bold"><%=r_1_1%></label>
    	<div class="col-sm-2">
            <div class="textRight"><small><%=r_1_2%></small></div>
			<div class="row">
					<div class="col-sm-12 textRight" id="daily_expenses"></div>    
            </div>
    	</div>
    	<div class="col-sm-3">
			<div class="textRight"><small><%=r_1_3%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="yearly_expenses"></div>    
            </div>
    	</div>
    	<div class="col-sm-2">
			<div class="textRight"><small><%=r_1_4%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="expense_percent"></div>    
            </div>
    	</div>        
    </div>
    <!--END of row-->  

    <!--START of  row-->
    <div class="row">
        <div class="col-sm-12 text-left normal"><%=r_2_1%></div>
    </div>
    <!--END of row--> 
    <!--START of  row-->  
    <div class="row normal">
        <label class="col-sm-5"><%=r_2_2%></label>
    	<div class="col-sm-2">
            <div class="hidden-sm hidden-md hidden-lg"><small><%=r_2_4%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="Daycare_Assistance_perDay"></div>    
            </div>
    	</div>
    	<div class="col-sm-3">
			<div class="hidden-sm hidden-md hidden-lg"><small><%=r_2_5%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="DayCare_Assistance_perYear"> </div>    
            </div>
    	</div>
    	<div class="col-sm-2">
			<div class="hidden-sm hidden-md hidden-lg"><small></small></div>
			<div class="row">
                <div class="col-sm-12"></div>    
            </div>
    	</div>        
    </div>
    <!--END of row-->  

    <!--START of  row-->  
    <div class="row normal">
        <label class="col-sm-5 "><%=r_2_3%></label>
    	<div class="col-sm-2">
            <div class="hidden-sm hidden-md hidden-lg"><small><%=r_2_4%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="IncomeCap_Assistance_perDay"></div>    
            </div>
    	</div>
    	<div class="col-sm-3">
			<div class="hidden-sm hidden-md hidden-lg"><small><%=r_2_5%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="IncomeCap_Assistance_perYear"></div>    
            </div>
    	</div>
    	<div class="col-sm-2">
			<div><small></small></div>
			<div class="row">
                <div class="col-sm-12">

                </div>    
            </div>
    	</div>        
    </div>
    <!--END of row-->      
	<hr class="style4">
    <!--START of  row-->
    <div class="row normal bg-success">
        <label class="col-sm-5  bold"><%=r_3_1%></label>
    	<div class="col-sm-2">
            <div class="hidden-sm hidden-md hidden-lg"><small><%=r_3_2%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="Total_EstimatedAssistance_perDay"></div>    
            </div>
    	</div>
    	<div class="col-sm-3">
			<div class="hidden-sm hidden-md hidden-lg"><small><%=r_3_3%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="Total_EstimatedAssistance_perYear"></div>    
            </div>
    	</div>
    	<div class="col-sm-2">
			<div class="hidden-sm hidden-md hidden-lg"><small></small></div>
			<div class="row">
                <div class="col-sm-12"></div>    
            </div>
    	</div>        
    </div>
    <!--END of row-->  
	<hr class="style4">
    <!--START of  row-->
    <div class="row normal bg-success">
        <label class="col-sm-5  bold"><%=r_4_1%></label>
    	<div class="col-sm-2">
            <div class="hidden-sm hidden-md hidden-lg"><small><%=r_4_2%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="Revised_Estimated_Annual_Daycare_perDay"></div>    
            </div>
    	</div>
    	<div class="col-sm-3">
			<div class="hidden-sm hidden-md hidden-lg"><small><%=r_4_3%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="Revised_Estimated_Annual_Daycare_perYear"></div>    
            </div>
    	</div>
    	<div class="col-sm-2">
			<div class="hidden-sm hidden-md hidden-lg"><small><%=r_4_4%></small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="revised_expense_percent"></div>    
            </div>
    	</div>        
    </div>
    <!--END of row-->  





    </div>
</div>

<!--END of new Result-->
<hr class="style4">
TESTING
<!--START Testing-->
    <!--START of  row-->
    <div class="row normal bg-success">
    	<div class="col-sm-3">
            <div class=""><small>1</small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="test1"></div>    
            </div>
    	</div>
    	<div class="col-sm-3">
			<div class=""><small>2</small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="test2"></div>    
            </div>
    	</div>
    	<div class="col-sm-3">
			<div class=""><small>3</small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="test3"></div>    
            </div>
    	</div>  
    	<div class="col-sm-3">
			<div class=""><small>4</small></div>
			<div class="row">
                <div class="col-sm-12 textRight" id="test4"></div>    
            </div>
    	</div>          
    </div>
    <!--END of row-->  
<!--END Testing-->      
<hr class="style4">
<!--START of reset button-->
  <div class="form-group">
    <div class="col-sm-12" >
    <input type="Reset" value="<%=t_6_1%>"  id="reset" class="btn  btn-sm btn-block btn-info active" aria-labelledby="reset" onClick="clearContent();"/>
    </div>
  </div>
<!--END of reset button-->   


  </div>
  <!--END of panel-group-->
</form>
<!--END of form-->

<script src="/etc/designs/gnb-bootstrap/clientlibs/js/pac_cal.js?v=1"></script>

