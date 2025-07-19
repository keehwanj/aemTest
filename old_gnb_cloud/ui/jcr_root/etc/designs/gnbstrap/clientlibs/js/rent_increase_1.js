/* START of rent_increase.js
 * /etc/designs/gnb-bootstrap/clientlibs/js/rent_increase_1.js
 * component : /apps/gnb/components/content/rent_increase_1
 */
/*START of calculation_1*/
/*START of function adCalc_1(form)*/


/*START of function adCalc_rent1(form)*/
function adCalc_rent_1(form) {

    //getting values from form and setting them to valuables.
	var lang				= document.getElementById("lang_1").value;
    var TB_OldRent 			= document.getElementById("TB_OldRent").value.replace(/\,/g, '');
    var TB_NewAmountDate	= document.getElementById("TB_NewAmountDate").value;
    var TB_NewRent			= document.getElementById("TB_NewRent").value.replace(/\,/g, '');
	var CB_Arrears 			= $('#CB_Arrears').is(":checked") ? 'on' : 'off';
    //var paymentSchedule 	= document.getElementById("TB_PaymentSchedule").value;
    //var paymentSchedule 	= $('#TB_PaymentSchedule').attr('id');
    //var paymentSchedule		=document.getElementById("TB_PaymentSchedule").textContent;
	//console.log(paymentSchedule);


    //setting month using function
	var monthNames		= monthNames_function(lang); 
    var subsequerntRent	= subsequentRent_function(lang); 
	var fieldsToShow	= fieldsToShow_function(lang);     
	var Owes			= owes_function(lang);
    var fieldsToHide 	= ["TB_TotalMaxLbl","TB_YouOverPaidLbl","TB_MonthsLbl","TB_CreditOwedLbl","TB_PaymentScheduleLbl"];
    var fieldsToClear 	= ["TB_RentCapCredit","TB_NumMonths","TB_CreditOwed","TB_PaymentSchedule"];
    //console.log("moving: "+lang)
    if(TB_OldRent==""||TB_NewAmountDate==""||TB_NewRent==""||CB_Arrears=="off"){
		//do nothing(no calculation)
        document.getElementById("result_display").style.display = "none";
    }else{

        document.getElementById("result_display").style.display = "block";
		var dateIncreased = TB_NewAmountDate;
        var nDate = new Date(dateIncreased);

    	var oldRent = TB_OldRent;
    	var newRent = TB_NewRent;        
 		var paymentSchedule		= document.getElementById("TB_PaymentSchedule").textContent;

        var cap = oldRent * 1.038

        //var capAmount = "$" + numberWithCommas(cap.toFixed(2));   
		var capAmount;
        if(lang=='en'){
			capAmount = "$" + numberWithCommas(cap.toFixed(2));   
        }else{
			capAmount = numberWithCommas(cap.toFixed(2))+" $";   
            capAmount = capAmount.replace(","," ").replace(".",",");
        }


        var monthAdjustment;

		var tDate = new Date();

        if (nDate.getDate() > tDate.getDate()){
            monthAdjustment = 1;
        } else {
            monthAdjustment = 0;
        };

		var monthsOverPaid = tDate.getMonth() - nDate.getMonth() - monthAdjustment + 1;


		// Starting calculations here
        var totalPaid = monthsOverPaid * newRent;
        var shouldHavePaid = monthsOverPaid * cap;
		var credit = totalPaid - shouldHavePaid;


        //Added French currency format!!
		//var creditAmount = "$" + numberWithCommas(credit.toFixed(2));
        var creditAmount;
        if(lang=='en'){
			creditAmount = "$" + numberWithCommas(credit.toFixed(2));
        }else{
			creditAmount = numberWithCommas(credit.toFixed(2))+" $";
            creditAmount = creditAmount.replace(","," ").replace(".",",");
        }
        // Determine num of months to credit
        var numMonths = credit / cap;

        var adjustedPayment;
    	var adjustedPaymentTxt;
    	var errorHndlr = 0;   

        // Start Populating Fields
		document.getElementById("TB_RentCapCredit").innerHTML = capAmount; 
        document.getElementById("TB_NumMonths").innerHTML = monthsOverPaid;
        document.getElementById("TB_CreditOwed").innerHTML = creditAmount;


//2022-03-30
/*
if (numMonths <= 1){
        adjustedPayment = cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 1 && numMonths <= 2) {
        adjustedPayment = 2 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 2 && numMonths <= 3) {
        adjustedPayment = 3 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 3 && numMonths <= 4) {
        adjustedPayment = 4 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : $0.00<br/>" + monthNames[tDate.getMonth()+4] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 4 && numMonths <= 5) {
        adjustedPayment = 5 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : $0.00<br/>" + monthNames[tDate.getMonth()+4] + " : $0.00<br/>" + monthNames[tDate.getMonth()+5] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 5 && numMonths <= 6) {
        adjustedPayment = 6 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : $0.00<br/>" + monthNames[tDate.getMonth()+4] + " : $0.00<br/>" + monthNames[tDate.getMonth()+5] + " : $0.00<br/>" + monthNames[tDate.getMonth()+6] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 6 && numMonths <= 7) {
        adjustedPayment = 7 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : $0.00<br/>" + monthNames[tDate.getMonth()+4] + " : $0.00<br/>" + monthNames[tDate.getMonth()+5] + " : $0.00<br/>" + monthNames[tDate.getMonth()+6] + " : $0.00<br/>" + monthNames[tDate.getMonth()+7] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 7 && numMonths <= 8) {
        adjustedPayment = 8 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : $0.00<br/>" + monthNames[tDate.getMonth()+4] + " : $0.00<br/>" + monthNames[tDate.getMonth()+5] + " : $0.00<br/>" + monthNames[tDate.getMonth()+6] + " : $0.00<br/>" + monthNames[tDate.getMonth()+7] + " : $0.00<br/>" + monthNames[tDate.getMonth()+8] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 8 && numMonths <= 9) {
        adjustedPayment = 9 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : $0.00<br/>" + monthNames[tDate.getMonth()+4] + " : $0.00<br/>" + monthNames[tDate.getMonth()+5] + " : $0.00<br/>" + monthNames[tDate.getMonth()+6] + " : $0.00<br/>" + monthNames[tDate.getMonth()+7] + " : $0.00<br/>" + monthNames[tDate.getMonth()+8] + " : $0.00<br/>" + monthNames[tDate.getMonth()+9] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 9 && numMonths <= 10) {
        adjustedPayment = 10 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : $0.00<br/>" + monthNames[tDate.getMonth()+4] + " : $0.00<br/>" + monthNames[tDate.getMonth()+5] + " : $0.00<br/>" + monthNames[tDate.getMonth()+6] + " : $0.00<br/>" + monthNames[tDate.getMonth()+7] + " : $0.00<br/>" + monthNames[tDate.getMonth()+8] + " : $0.00<br/>" + monthNames[tDate.getMonth()+9] + " : $0.00<br/>" + monthNames[tDate.getMonth()+10] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 10 && numMonths <= 11) {
        adjustedPayment = 11 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : $0.00<br/>" + monthNames[tDate.getMonth()+4] + " : $0.00<br/>" + monthNames[tDate.getMonth()+5] + " : $0.00<br/>" + monthNames[tDate.getMonth()+6] + " : $0.00<br/>" + monthNames[tDate.getMonth()+7] + " : $0.00<br/>" + monthNames[tDate.getMonth()+8] + " : $0.00<br/>" + monthNames[tDate.getMonth()+9] + " : $0.00<br/>" + monthNames[tDate.getMonth()+10] + " : $0.00<br/>" + monthNames[tDate.getMonth()+11] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else if (numMonths > 11 && numMonths <= 12) {
        adjustedPayment = 12 * cap - credit;
        adjustedPaymentTxt = monthNames[tDate.getMonth()+1] + " : $0.00<br/>" + monthNames[tDate.getMonth()+2] + " : $0.00<br/>" + monthNames[tDate.getMonth()+3] + " : $0.00<br/>" + monthNames[tDate.getMonth()+4] + " : $0.00<br/>" + monthNames[tDate.getMonth()+5] + " : $0.00<br/>" + monthNames[tDate.getMonth()+6] + " : $0.00<br/>" + monthNames[tDate.getMonth()+7] + " : $0.00<br/>" + monthNames[tDate.getMonth()+8] + " : $0.00<br/>" + monthNames[tDate.getMonth()+9] + " : $0.00<br/>" + monthNames[tDate.getMonth()+10] + " : $0.00<br/>" + monthNames[tDate.getMonth()+11] + " : $0.00<br/>" + monthNames[tDate.getMonth()+12] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
    } else {
        errorHndlr = 1;
    };
*/
// do French format at home(2022-03-30)
console.log(lang);
if (lang == 'en') {
	if (numMonths <= 1) {
		adjustedPayment = cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 1 && numMonths <= 2) {
		adjustedPayment = 2 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 2 && numMonths <= 3) {
		adjustedPayment = 3 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 3 && numMonths <= 4) {
		adjustedPayment = 4 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 4] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 4 && numMonths <= 5) {
		adjustedPayment = 5 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 4] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 5] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 5 && numMonths <= 6) {
		adjustedPayment = 6 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 4] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 5] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 6] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 6 && numMonths <= 7) {
		adjustedPayment = 7 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 4] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 5] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 6] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 7] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 7 && numMonths <= 8) {
		adjustedPayment = 8 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 4] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 5] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 6] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 7] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 8] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 8 && numMonths <= 9) {
		adjustedPayment = 9 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 4] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 5] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 6] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 7] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 8] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 9] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 9 && numMonths <= 10) {
		adjustedPayment = 10 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 4] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 5] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 6] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 7] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 8] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 9] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 10] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 10 && numMonths <= 11) {
		adjustedPayment = 11 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 4] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 5] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 6] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 7] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 8] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 9] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 10] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 11] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else if (numMonths > 11 && numMonths <= 12) {
		adjustedPayment = 12 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 2] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 3] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 4] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 5] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 6] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 7] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 8] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 9] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 10] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 11] + " : $0.00<br/>" + monthNames[tDate.getMonth() + 12] + " : " + "$" + numberWithCommas(adjustedPayment.toFixed(2));
	} else {
		errorHndlr = 1;
	};

} else {
	if (numMonths <= 1) {
		adjustedPayment = cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : " + numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 1 && numMonths <= 2) {
		adjustedPayment = 2 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : " + numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 2 && numMonths <= 3) {
		adjustedPayment = 3 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : " + numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 3 && numMonths <= 4) {
		adjustedPayment = 4 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 4] + " : " +  numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 4 && numMonths <= 5) {
		adjustedPayment = 5 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 4] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 5] + " : " +  numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 5 && numMonths <= 6) {
		adjustedPayment = 6 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 4] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 5] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 6] + " : " +  numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 6 && numMonths <= 7) {
		adjustedPayment = 7 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 4] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 5] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 6] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 7] + " : " +  numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 7 && numMonths <= 8) {
		adjustedPayment = 8 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 4] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 5] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 6] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 7] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 8] + " : " +  numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 8 && numMonths <= 9) {
		adjustedPayment = 9 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 4] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 5] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 6] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 7] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 8] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 9] + " : " +  numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 9 && numMonths <= 10) {
		adjustedPayment = 10 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 4] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 5] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 6] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 7] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 8] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 9] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 10] + " : " +  numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 10 && numMonths <= 11) {
		adjustedPayment = 11 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 4] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 5] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 6] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 7] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 8] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 9] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 10] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 11] + " : " +  numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else if (numMonths > 11 && numMonths <= 12) {
		adjustedPayment = 12 * cap - credit;
		adjustedPaymentTxt = monthNames[tDate.getMonth() + 1] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 2] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 3] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 4] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 5] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 6] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 7] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 8] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 9] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 10] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 11] + " : 0,00 $<br/>" + monthNames[tDate.getMonth() + 12] + " : " + numberWithCommas(adjustedPayment.toFixed(2)).replace(","," ").replace(".",",")+ " $" ;
	} else {
		errorHndlr = 1;
	};

};


    // Text to display
    if(errorHndlr !== 1){
 		document.getElementById("TB_PaymentSchedule").innerHTML = adjustedPaymentTxt + "<br/><br/>"+ subsequerntRent + capAmount + "."+"<br/><br/>";
    };    

    }
}




//setting owes varialbe using lang
function owes_function(lang){
	let owes;
    if(lang=='en'){
		owes = "This tool is designed to calculate the credit owed by a landlord when rent has been paid in full. If you owe rent, you may contact the Residential Tenancies Tribunal for assistance.\n\nYou may contact us at:\n1-888-762-8600 or snbirentsolve@snb.ca\n";
    }else{
		owes = "Cet outil est conçu pour calculer le crédit dû par un propriétaire lorsque le loyer a été payé en totalité. Si vous devez de l'arrérages, vous pouvez contacter le Tribunal sur la location de locaux d'habitation pour obtenir de l'aide.\n\nVous pouvez nous contacter au :\n1-888-762-8600 ou snbirentsolve@snb.ca";
    }
    return owes;
}


//setting fieldsToshow varialbe using lang
function fieldsToShow_function(lang){
	let fieldsToShow;
    if(lang=='en'){
		fieldsToShow = ["The maximum rent increase is:","You overpaid:","months","Credit owed:","Your payment schedule will be:"];
    }else{
		fieldsToShow = ["L'augmentation maximale du loyer est :","Vous avez surpayé :","mois","Crédit dû :","Votre échéancier de paiement sera :"];
    }
    return fieldsToShow;
}

//settting month variable with array with function and parameter  
function monthNames_function(lang){
	let monthName
    if(lang=='en'){
		monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April","May","June","July","August","September","October","November","December"];
    }else{
		monthNames = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    }
    return monthNames;
}

//settting subsequentRent variable for text  
function subsequentRent_function(lang){
	let subsequentRent
    if(lang=='en'){
        subsequentRent = "Subsequent rent will be : ";
    }else{
		subsequentRent = "Le loyer ulterieur sera : ";
    }
    return subsequentRent;
}

//setting number with comma
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}




//clear text in result
function clearContent_1() {
	document.getElementById("result_display").style.display = "none";
}
/*END of calculation_2*/

/* END of rent_increase_1.js*/

