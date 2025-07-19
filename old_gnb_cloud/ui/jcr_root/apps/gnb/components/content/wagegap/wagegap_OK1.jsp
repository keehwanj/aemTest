<%@include file="/libs/foundation/global.jsp"%>
<%@page import="ca.gnb.women.wagegap.WageGap"%>

<%
WageGap wg=new WageGap(2,33,33,2,99,99);
double newwg=wg.calculate();
out.write("Wage Gap : "+newwg+"<br/>");

out.write("getWomenNo() :"+wg.getWomenNo()+"<br/>");
out.write("getWomenDollar() : "+wg.getWomenDollar()+"<br/>");
out.write("getWomenCent() : "+wg.getWomenCent()+"<br/>");
out.write("getAverageWomenWage() :"+wg.getAverageWomenWage()+"<br/>");

out.write("getMenNo() : "+wg.getMenNo()+"<br/>");
out.write("getMenDollar() : "+wg.getMenDollar()+"<br/>");
out.write("getMenCent() : "+wg.getMenCent()+"<br/>");
out.write("getAverageMenWage() : "+wg.getAverageMenWage()+"<br/>");

/**
int women_no = (int)request.getParameter("women_no");
int women_dollar = (int)request.getParameter("women_dollar");
int women_cent = (int)request.getParameter("women_cent");

int men_no = (int)request.getParameter("men_no");
int men_dollar = (int)request.getParameter("men_dollar");
int men_cent = (int)request.getParameter("men_cent");

WageGap wg1=new WageGap(women_no,women_dollar,women_cent,men_no,men_dollar,men_cent);
double newwg1=wg.calculate();
**/
%>

<script>
$(document).ready(function() {
             $("#submit").click(function(){
    				var url = location.pathname.replace(".html", "/_jcr_content.cal");                 
                    $.ajax({
                           url:url,
                           type:'post',
                           dataType:'script',
                           error:function(req,txt){
                                 alert('Error');
                           },
                           success:function(obj){
                                 alert('success');
                				 $('#wg').text(obj);                                
                           },
                           beforeSend:function(){
                                 alert('start');
                           },
                           complete:function(){
                                 alert('complete');
                           }
                    });
             })
       });

</script>
        <form name="signup" id="signup">
            <div>
                <input type="button" value="Add Customer!"  name="submit" id="submit" value="Submit">
            </div>
            <div>
                <label for="custId" class="label">Customer Id:</label>
                <input name="custId" type="text" id="custId" readonly="readonly">
          </div>            
        </form>
<div id="wg" class="wg"></div>

