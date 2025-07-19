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

    $('body').hide().fadeIn(500);

$('#submit').click(function() {
    var failure = function(err) {
             alert("Unable to retrive data "+err);
   };

    //Get the user-defined values to persist in the database
    //var women_no= $('#women_no').val() ; 
    //var women_dollar= $('#women_dollar').val() ; 
    //var women_cent= $('#women_cent').val() ; 

    //var men_no= $('#men_no').val() ; 
    //var men_dollar= $('#men_dollar').val() ; 
    //var men_cent= $('#men_cent').val() ; 

    var women_no= 2 ; 
    var women_dollar= 33 ; 
    var women_cent= 33 ; 

    var men_no= 2 ; 
    var men_dollar= 99 ; 
    var men_cent= 99 ; 


    var url = location.pathname.replace(".html", "/_jcr_content.cal");

    $.ajax(url, {
        dataType: "text",
        success: function(rawData, status, xhr) {
            var data;
            try {
                //data = $.parseJSON(rawData);
                data = rawData;

                //Set the fields in the forum
                $('#custId').val(data); 
             } catch(err) {
                failure(err);
            }
        },
        error: function(xhr, status, err) {
			alert("code : " + request.status + "\r\nmessage : " + request.reponseText);
        } 
    });
  });

}); // end ready
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

