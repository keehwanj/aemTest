<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.*" %>
<%
String current_rent			= properties.get("current_rent", "Current rent");
String clear_button			= properties.get("clear_button", "Clear");
String rent_increase_by		= properties.get("rent_increase_by", "Your rent will increase by:");
String new_rent_not_exceed	= properties.get("new_rent_not_exceed", "New rent cannot exceed:");

Random rand = new Random();
int n = rand.nextInt(90000) + 10000;
%>

<!--START of rent_increase_2-->

<!--START of form-->
<form method="POST" class="form-horizontal" role="form" >
   <!--START of well well-sm-->
   <div class="well well-sm">
      <!--START of "Family Net Annual Income: $"-->
      <div class="form-group" >
         <label class="col-sm-6 control-label " for="current_rent"><%=current_rent%></label>
         <div class="col-sm-6 RT">
            <div class="input-group"> <span class="input-group-addon">$</span>
               <input type="number" min="0" id="current_rent" class="form-control input-sm" name="current_rent" value="" onChange="adCalc_rent2(this.form);" placeholder="<%=current_rent%>" step="5"/>
            </div>
         </div>
      </div>
      <!--START of reset button-->
      <div class="form-group">
         <div class="col-sm-12" >
            <input type="Reset" value="<%=clear_button%>"  id="reset" class="btn  btn-sm btn-block btn-info active" aria-labelledby="reset" onClick="clearContent();"/>
         </div>
      </div>
      <!--END of reset button-->
      <!--START of Result(rent_increase_by)-->
      <div class="form-group">
          <!---->
         <label class="col-sm-6  bold"><%=rent_increase_by%></label>
         <div class="col-sm-6">
            <div class="hidden-sm hidden-md hidden-lg"><small><%=rent_increase_by%></small></div>
            <div class="row">
               <div class="col-sm-12 textRight  normal" id="rent_increase_by_result"></div>
            </div>
         </div>
         <!---->

      </div>
      <!--END of Result(rent_increase_by)-->  

      <!--START of Result(new_rent_not_exceed)-->
      <div class="form-group">
          <!---->
         <label class="col-sm-6  bold"><%=new_rent_not_exceed%></label>
         <div class="col-sm-6">
            <div class="hidden-sm hidden-md hidden-lg"><small><%=new_rent_not_exceed%></small></div>
            <div class="row">
               <div class="col-sm-12 textRight  normal" id="new_rent_not_exceed_result"></div>
            </div>
         </div>
         <!---->          
      </div>
      <!--END of Result(new_rent_not_exceed)-->         
   </div>
   <!--END of well well-sm-->
</form>
<!--END of form-->
<!--END of rent_increase_2-->

