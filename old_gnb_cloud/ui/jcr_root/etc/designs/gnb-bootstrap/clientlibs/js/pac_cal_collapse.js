/* START of pac_cal.js
 * /etc/designs/gnb-bootstrap/clientlibs/js/pac_cal.js
 * component : /apps/gnb/components/content/dap
 */
/*START of function adCalc(form)*/
function adCalc_pac(form) {
    var income 			= document.getElementById("income").value.replace(/\,/g, '');
    //income 				= income.replace(/\,/g, '');


    //NEW 
    var select = document.getElementById('location');
	var option = select.options[select.selectedIndex];

	document.getElementById('value').value = option.value;
    document.getElementById('text').value = option.text;

	var urban = option.value;
	//NEW
    if (urban=="large") {
        //determine facility fees based on location
   		var FTInfantsFees 	= 21.00;
        var FTChildFees 	= 18.00;
        var PTInfantsFees 	= 12.00;
        var PTChildFees 	= 7.00;

        //determine factors based on location
		var FTInfant_factor		=0.000003764705882;
        var FTPreschool_factor	=0.000003529411765;
		var PTInfant_factor		=0.000001647058824;
		var PTPreschool_factor	=0.000000941176471;

	} else if(urban=="small") {
        //determine facility fees based on location
   		var FTInfantsFees 	= 19.00;
        var FTChildFees 	= 16.00;
        var PTInfantsFees 	= 12.00;
        var PTChildFees 	= 7.00;

        //determine factors based on location
		var FTInfant_factor		=0.000003294117647;
        var FTPreschool_factor	=0.000003058823529;
		var PTInfant_factor		=0.000001647058824;
		var PTPreschool_factor	=0.000000941176471;


    }
	//gettting values from visitors
    var FTInfantsNo 	= document.getElementById("FTInfantsNo").value;
    var FTInfantsDay 	= document.getElementById("FTInfantsDay").value;

    var FTChildNo 		= document.getElementById("FTChildNo").value;
    var FTChildDay 		= document.getElementById("FTChildDay").value;

    var PTInfantsNo 	= document.getElementById("PTInfantsNo").value;
    var PTInfantsDay 	= document.getElementById("PTInfantsDay").value;

    var PTChildNo 		= document.getElementById("PTChildNo").value;
    var PTChildDay 		= document.getElementById("PTChildDay").value;

 	var monthly;
    var ok;
    var incomplete = "Enter your income so we can give you an estimate";
    //var totalfamily 	= document.getElementById("family").value;
    /*START of Your Estimated Annual Daycare Expences*/
    //Yearly daycare expences
    var yearly_expenses = ((FTInfantsNo * FTInfantsFees*FTInfantsDay) + (FTChildNo * FTChildFees*FTChildDay)) * 52 + ((PTInfantsNo * PTInfantsFees * PTInfantsDay) + (PTChildNo * PTChildFees * PTChildDay))*52;
    var yearly_expenses1 = yearly_expenses.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    $("#yearly_expenses").text(yearly_expenses1);
  	var expense_percent;
    if (income > 0) {
        expense_percent = ((yearly_expenses / income) * 100).toFixed(0);
    }
    //daily daycare expences
    $("#expense_percent").text(expense_percent);    


    var difference;
    //var baseline = 37500;


	//step 3, calculate number of pennies(Steps) between the Gross Family Income and the Floor Income
    var baseline 	= 37500;
	var steps		=(income*100)-(baseline*100)

    //step 4- calculate benifit amount
    /*START of Rate Determination*/
    difference = (income - baseline - 0.00001).toFixed(6);
    /*START of  of FT_INF - factors*/
	//2022-06-28
    //var Assistance_Estimate_FT_INF = findAssistance_Estimate(difference, FTInfantsFees, Factor3_FT_INF, FT_INF);//36.90->FT_INF(21.00 or 19.00)
    var Assistance_Estimate_FT_INF = findAssistance_Estimate(FTInfantsFees, FTInfant_factor, steps);
    $("#Assistance_Estimate_FT_INF").text(Assistance_Estimate_FT_INF); 
    /*END of  of FT_INF - factors*/

    /*START of  of PT_INF - factors*/
    //var Assistance_Estimate_PT_INF = findAssistance_Estimate(difference, PTInfantsFees, Factor3_PT_INF, PT_INF);//19.50->PT_INF(12.00 or 12.00)
    var Assistance_Estimate_PT_INF = findAssistance_Estimate(PTInfantsFees, PTInfant_factor, steps);
    $("#Assistance_Estimate_PT_INF").text(Assistance_Estimate_PT_INF); 
    /*END of  of FT_INF - factors*/

    /*START of  of FT_PRE - factors*/
    //var Assistance_Estimate_FT_PRE = findAssistance_Estimate(difference, FTChildFees, Factor3_FT_PRE, FT_PRE);//31.20->FT_PRE(18.00 or 16.00)
   var Assistance_Estimate_FT_PRE = findAssistance_Estimate(FTChildFees, FTPreschool_factor, steps);
    $("#Assistance_Estimate_FT_PRE").text(Assistance_Estimate_FT_PRE); 
    /*END of  of FT_PRE - factors*/

    /*START of  of PT_PRE - factors*/
    //var Assistance_Estimate_PT_PRE = findAssistance_Estimate(difference, PTChildFees, Factor3_PT_PRE, PT_PRE);//16.60->PT_PRE(7.00 or 7.00)
    var  Assistance_Estimate_PT_PRE = findAssistance_Estimate(PTChildFees, PTPreschool_factor, steps);
    $("#Assistance_Estimate_PT_PRE").text(Assistance_Estimate_PT_PRE); 
    /*END of  of PT_PRE - factors*/
    /*END of Rate Determination*/

    /*START of CALCULATION*/
    /*START of  of FT_INF*/
    //FT_INF - 5
    var Daily_Expense_FT_INF = findDaily_Expense(FTInfantsNo, FTInfantsFees);
    $("#Daily_Expense_FT_INF").text(Daily_Expense_FT_INF); 
    var Total_Subsidy_FT_INF = findTotal_Subsidy(FTInfantsNo, Assistance_Estimate_FT_INF, Daily_Expense_FT_INF, 5.00, FTInfantsFees, income);
    $("#Total_Subsidy_FT_INF").text(Total_Subsidy_FT_INF); 
    var Net_FT_INF = findNet(Daily_Expense_FT_INF, Total_Subsidy_FT_INF);
    $("#Net_FT_INF").text(Net_FT_INF); 
    var Days_in_Care_FT_INF = FTInfantsDay*52;
    $("#Days_in_Care_FT_INF").text(Days_in_Care_FT_INF); 
    var Annaulized_Subsidy_FT_INF = findAnnaulized_Subsidy(Total_Subsidy_FT_INF, Days_in_Care_FT_INF);
    $("#Annaulized_Subsidy_FT_INF").text(Annaulized_Subsidy_FT_INF);
    /*END of  of FT_INF*/

    /*START of  of FT_PreSch*/
    //FT_PreSch - 4.25
    var Daily_Expense_FT_PreSch = findDaily_Expense(FTChildNo, FTChildFees);
    $("#Daily_Expense_FT_PreSch").text(Daily_Expense_FT_PreSch); 
    var Total_Subsidy_FT_PreSch = findTotal_Subsidy(FTChildNo, Assistance_Estimate_FT_PRE, Daily_Expense_FT_PreSch, 4.25, FTChildFees, income);
    $("#Total_Subsidy_FT_PreSch").text(Total_Subsidy_FT_PreSch); 
    var Net_FT_PreSch = findNet(Daily_Expense_FT_PreSch, Total_Subsidy_FT_PreSch);
    $("#Net_FT_PreSch").text(Net_FT_PreSch); 
    var Days_in_Care_FT_PreSch = FTChildDay * 52;
    $("#Days_in_Care_FT_PreSch").text(Days_in_Care_FT_PreSch); 
    var Annaulized_Subsidy_FT_PreSch = findAnnaulized_Subsidy(Total_Subsidy_FT_PreSch, Days_in_Care_FT_PreSch);
    $("#Annaulized_Subsidy_FT_PreSch").text(Annaulized_Subsidy_FT_PreSch);
    /*END of  of FT_PreSch*/

    /*START of  of PT_INF*/
     //PT_INF - 2.64
    var Daily_Expense_PT_INF = findDaily_Expense(PTInfantsNo, PTInfantsFees);
    $("#Daily_Expense_PT_INF").text(Daily_Expense_PT_INF); 
    var Total_Subsidy_PT_INF = findTotal_Subsidy(PTInfantsNo, Assistance_Estimate_PT_INF, Daily_Expense_PT_INF, 2.64, PTInfantsFees, income);
    $("#Total_Subsidy_PT_INF").text(Total_Subsidy_PT_INF); 
    var Net_PT_INF = findNet(Daily_Expense_PT_INF, Total_Subsidy_PT_INF);
    $("#Net_PT_INF").text(Net_PT_INF); 
    var Days_in_Care_PT_INF = PTInfantsDay * 52;
    $("#Days_in_Care_PT_INF").text(Days_in_Care_PT_INF); 
    var Annaulized_Subsidy_PT_INF = findAnnaulized_Subsidy(Total_Subsidy_PT_INF, Days_in_Care_PT_INF);
    $("#Annaulized_Subsidy_PT_INF").text(Annaulized_Subsidy_PT_INF);
    /*END of  of PT_INF*/

    /*START of  of PT_PreSch*/
    //PT_PreSch - 2.26
    var Daily_Expense_PT_PreSch = findDaily_Expense(PTChildNo, PTChildFees);
    $("#Daily_Expense_PT_PreSch").text(Daily_Expense_PT_PreSch); 
    var Total_Subsidy_PT_PreSch = findTotal_Subsidy(PTChildNo, Assistance_Estimate_PT_PRE, Daily_Expense_PT_PreSch, 2.26, PTChildFees, income);
    $("#Total_Subsidy_PT_PreSch").text(Total_Subsidy_PT_PreSch); 
    var Net_PT_PreSch = findNet(Daily_Expense_PT_PreSch, Total_Subsidy_PT_PreSch);
    $("#Net_PT_PreSch").text(Net_PT_PreSch); 
    var Days_in_Care_PT_PreSch = PTChildDay * 52;
    $("#Days_in_Care_PT_PreSch").text(Days_in_Care_PT_PreSch); 
    var Annaulized_Subsidy_PT_PreSch = findAnnaulized_Subsidy(Total_Subsidy_PT_PreSch, Days_in_Care_PT_PreSch);
    $("#Annaulized_Subsidy_PT_PreSch").text(Annaulized_Subsidy_PT_PreSch);
    /*END of  of PT_PreSch*/


	/*START of Daily Daycare Expenses-Day*/
	/*START of NEW (2017-12-21)*/
    var daily_expenses = Daily_Expense_FT_INF + Daily_Expense_FT_PreSch + Daily_Expense_PT_INF + Daily_Expense_PT_PreSch;
    var daily_expenses11 = daily_expenses.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    $("#daily_expenses").text(daily_expenses11);
	/*END of Daily Daycare Expenses-Day*/    


	/*START of Daily Daycare Expenses-Month*/
	/*START of NEW (2018-1-18)*/
    var monthly_expenses = yearly_expenses/12;
    var monthly_expenses1 = monthly_expenses.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    $("#monthly_expenses").text(monthly_expenses1);
	/*END of Daily Daycare Expenses-Month*/    



	/*START of DayCare_Assistance_perYear*/
    var DayCare_Assistance_perYear = findDayCare_Assistance_perYear(Annaulized_Subsidy_FT_INF, Annaulized_Subsidy_FT_PreSch, Annaulized_Subsidy_PT_INF, Annaulized_Subsidy_PT_PreSch,income,yearly_expenses);
    var DayCare_Assistance_perYear1=DayCare_Assistance_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    $("#DayCare_Assistance_perYear").text(DayCare_Assistance_perYear1);
	/*END of DayCare_Assistance_perYear*/

	/*START of DayCare_Assistance_perMonth(2018-1-18)*/
    //=SUMPRODUCT(G6:G9,F34:F37)
    //=(G6*F34+ G7*F35+ G8*F36+ G9*F37)
    var DayCare_Assistance_perMonth = (20*Total_Subsidy_FT_INF)+(20*Total_Subsidy_FT_PreSch)+(20*Total_Subsidy_PT_INF)+(20*Total_Subsidy_PT_PreSch) ;
    var DayCare_Assistance_perMonth1=DayCare_Assistance_perMonth.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    $("#DayCare_Assistance_perMonth").text(DayCare_Assistance_perMonth1);
	/*END of DayCare_Assistance_perMonth(2018-1-18)*/


	/*START of Daycare Assistance_perDay - (2017-12-21)*/
    var Daycare_Assistance_perDay = findDaycare_Assistance_perDay(Total_Subsidy_FT_INF,Total_Subsidy_FT_PreSch,Total_Subsidy_PT_INF,Total_Subsidy_PT_PreSch);
    var Daycare_Assistance_perDay1=Daycare_Assistance_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Daycare_Assistance_perDay").text(Daycare_Assistance_perDay1);
    /*END of Daycare Assistance_perDay*/    

	/*START of Income Cap Assistance perYear*/
    var cap=0.2;
	var IncomeCap_Assistance_perYear = findIncomeCap_Assistance_perYear(yearly_expenses,DayCare_Assistance_perYear, income, cap);
    var IncomeCap_Assistance_perYear1 = IncomeCap_Assistance_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#IncomeCap_Assistance_perYear").text(IncomeCap_Assistance_perYear1);
    /*END of Income Cap Assistance perYear*/

	/*START of Income Cap Assistance perMonth(2018-1-18)*/
	var IncomeCap_Assistance_perMonth = findIncomeCap_Assistance_perMonth(monthly_expenses,DayCare_Assistance_perMonth, income, cap);
    var IncomeCap_Assistance_perMonth1 = IncomeCap_Assistance_perMonth.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#IncomeCap_Assistance_perMonth").text(IncomeCap_Assistance_perMonth1);
    /*END of Income Cap Assistance perYear*/


	/*START of Income Cap Assistance perDay*/
	var IncomeCap_Assistance_perDay = IncomeCap_Assistance_perYear/260;
    //var IncomeCap_Assistance_perDay1 = "$" + IncomeCap_Assistance_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var IncomeCap_Assistance_perDay1 = IncomeCap_Assistance_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#IncomeCap_Assistance_perDay").text(IncomeCap_Assistance_perDay1);
    /*END of Income Cap Assistance perDay*/

	/*START of Total_EstimatedAssistance perYear*/
	var Total_EstimatedAssistance_perYear = DayCare_Assistance_perYear+IncomeCap_Assistance_perYear;
    var Total_EstimatedAssistance_perYear1 = Total_EstimatedAssistance_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Total_EstimatedAssistance_perYear").text(Total_EstimatedAssistance_perYear1);
    /*END of Total_EstimatedAssistance perYear*/    

	/*START of Total_EstimatedAssistance perYear*/
	var Total_EstimatedAssistance_perMonth = DayCare_Assistance_perMonth+IncomeCap_Assistance_perMonth;
    var Total_EstimatedAssistance_perMonth1 = Total_EstimatedAssistance_perMonth.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Total_EstimatedAssistance_perMonth").text(Total_EstimatedAssistance_perMonth1);
    /*END of Total_EstimatedAssistance perYear*/        

	/*START of Total_EstimatedAssistance perDay*/
	var Total_EstimatedAssistance_perDay = Daycare_Assistance_perDay+IncomeCap_Assistance_perDay;
    var Total_EstimatedAssistance_perDay1 = Total_EstimatedAssistance_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Total_EstimatedAssistance_perDay").text(Total_EstimatedAssistance_perDay1);
    /*END of Total_EstimatedAssistance perYear*/    


	/*START of Revised Estimated Anual Daycare Expenses per Year*/
	var Revised_Estimated_Annual_Daycare_perYear = yearly_expenses-Total_EstimatedAssistance_perYear;
    var Revised_Estimated_Annual_Daycare_perYear1 = Revised_Estimated_Annual_Daycare_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Revised_Estimated_Annual_Daycare_perYear").text(Revised_Estimated_Annual_Daycare_perYear1);
    /*END of Total_EstimatedAssistance perYear*/     

	/*START of Revised Estimated Anual Daycare Expenses per Year*/
	var Revised_Estimated_Annual_Daycare_perMonth = monthly_expenses-Total_EstimatedAssistance_perMonth;
    var Revised_Estimated_Annual_Daycare_perMonth1 = Revised_Estimated_Annual_Daycare_perMonth.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Revised_Estimated_Annual_Daycare_perMonth").text(Revised_Estimated_Annual_Daycare_perMonth1);
    /*END of Total_EstimatedAssistance perYear*/         


	/*START of Revised Estimated Anual Daycare Expenses per Day*/
	var Revised_Estimated_Annual_Daycare_perDay = daily_expenses-Total_EstimatedAssistance_perDay;
    var Revised_Estimated_Annual_Daycare_perDay1 = Revised_Estimated_Annual_Daycare_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Revised_Estimated_Annual_Daycare_perDay").text(Revised_Estimated_Annual_Daycare_perDay1);
    /*END of Total_EstimatedAssistance perYear*/    


	var revised_expense_percent;
    if (income > 0) {
        revised_expense_percent = ((Revised_Estimated_Annual_Daycare_perYear / income) * 100);
    }
	$("#revised_expense_percent").text(revised_expense_percent);

    /*END of CALCULATION*/

}
/*END of function adCalc(form)*/

/*START of function - Estimated Amount of Assistance*/
function findIncomeCap_Assistance_perYear(expenses, assistance, salary, high){
    if(expenses-assistance>salary*high){
		return expenses-assistance-salary*high;
    }else{
		return 0;
    }

}
/*START of IncomeCap_Assistance_perMonth(2018-1-18)*/
function findIncomeCap_Assistance_perMonth(expenses, assistance, salary, high){
    if(expenses-assistance>salary/12*high){
		return expenses-assistance-salary/12*high;
    }else{
		return 0;
    }

}
/*END of IncomeCap_Assistance_perMonth(2018-1-18)*/


/*START of Daycare_Assistance_perDay(2017-12-21)*/
function findDaycare_Assistance_perDay(FT_INF,FT_PreSch,PT_INF,PT_PreSch){
	return FT_INF+FT_PreSch+PT_INF+PT_PreSch;
}
/*END of Daycare_Assistance_perDay*/


/*START of Daycare_Assistance_perYear*/
function findDayCare_Assistance_perYear(Annaulized_Subsidy_FT_INF, Annaulized_Subsidy_FT_PreSch, Annaulized_Subsidy_PT_INF, Annaulized_Subsidy_PT_PreSch,netincome, yearly_expences){
    if(netincome<37501){
        return yearly_expences;

    }else{
		return Annaulized_Subsidy_FT_INF+Annaulized_Subsidy_FT_PreSch+Annaulized_Subsidy_PT_INF+Annaulized_Subsidy_PT_PreSch;
    }
}
/*END of Daycare_Assistance_perYear*/
/*END of function - Estimated Amount of Assistance*/

/*START of function - CALCULATION*/
/*START of findAnnaulized_Subsidy*/
function findAnnaulized_Subsidy(Total_Subsidy, Days_in_Care) {
    return (Total_Subsidy * Days_in_Care*100)/100;
}
/*END of findAnnaulized_Subsidy*/


/*START of findNet*/
function findNet(Daily_Expense, Total_Subsidy) {
    return Daily_Expense - Total_Subsidy;
}

/*END of findNet*/

/*START of findfindTotal_Subsidy*/
function findTotal_Subsidy(No,Assistance_Estimate,Daily_Expense,minimum,fees,netincome) {
    if (netincome > 80000) {
        return 0;
    } else {
        if (No==0) {
            return 0;

        }else {
            if(Assistance_Estimate*No>Daily_Expense){
				return Daily_Expense;
            }else{
				if(Daily_Expense<(No*minimum)){
					return fees*No;
				}else{
					return Assistance_Estimate*No;
				}
            }

        }
    }
}
/*END of findfindTotal_Subsidy*/

/*START of findDaily_Expense*/
function findDaily_Expense(no_d, fees_d) {
    return (no_d * fees_d);
}
/*END of findDaily_Expense*/
/*END of function - CALCULATION*/


/*START of function - Rate Determination*/



/*START of function findAssistance_Estimate*/
//2022-06-28
function findAssistance_Estimate(fees, factor, steps) {
	return (Math.min(fees-(factor*steps), fees));
}
/*END of function findAssistance_Estimate*/

/*END of function - Rate Determination*/



//EXTRA FUNCTION
//clear text in result
function clearContent() {
    $("#yearly_expenses").text("");
    $("#daily_expenses").text("");
    $("#expense_percent").text("");
    $("#Daycare_Assistance_perDay").text("");    
    $("#DayCare_Assistance_perYear").text("");    
    $("#IncomeCap_Assistance_perDay").text("");  
    $("#IncomeCap_Assistance_perYear").text("");  
    $("#Total_EstimatedAssistance_perDay").text("");  
    $("#Total_EstimatedAssistance_perYear").text("");  
    $("#Revised_Estimated_Annual_Daycare_perDay").text("");  
    $("#Revised_Estimated_Annual_Daycare_perYear").text("");  
    $("#revised_expense_percent").text("");  
}


/*START of FULLTIME*/
/*START of UpFTInfantsNo()*/
function UpFTInfantsNo() {
    if (document.getElementById("FTInfantsNo").value == null) {
        document.getElementById("FTInfantsNo").innerHTML = 1;
    } else {
        if (document.getElementById("FTInfantsNo").value >= 20) {
            return false;
        } else {
            document.getElementById("FTInfantsNo").innerHTML = document.getElementById("FTInfantsNo").value++;
        }
    }
}
/*END of UpFTInfantsNo()*/

/*START of DownFTInfantsNo()*/
function DownFTInfantsNo() {
    if (document.getElementById("FTInfantsNo").value == 0) {
        return false;
    } else {
        document.getElementById("FTInfantsNo").innerHTML = document.getElementById("FTInfantsNo").value--;
    }
}
/*END of DownFTInfantsNo()*/


/*START of UpFTInfantsFees()*/
function UpFTInfantsFees() {
    if (document.getElementById("FTInfantsFees").value == null) {
        document.getElementById("FTInfantsFees").innerHTML = 1;
    } else {
        if (document.getElementById("FTInfantsFees").value >= 100) {
            return false;
        } else {
            document.getElementById("FTInfantsFees").innerHTML = document.getElementById("FTInfantsFees").value++;
        }
    }
}
/*END of UpFTInfantsFees()*/


/*START of DownFTInfantsFees()*/
function DownFTInfantsFees() {
    if (document.getElementById("FTInfantsFees").value == 0) {
        return false;
    } else {
        document.getElementById("FTInfantsFees").innerHTML = document.getElementById("FTInfantsFees").value--;
    }
}
/*END of DownFTInfantsFees()*/

/*START of UpFTInfantsDay()*/
function UpFTInfantsDay() {
    if (document.getElementById("FTInfantsDay").value == null) {
        document.getElementById("FTInfantsDay").innerHTML = 1;
    } else {
        if (document.getElementById("FTInfantsDay").value >= 7) {
            return false;
        } else {
            document.getElementById("FTInfantsDay").innerHTML = document.getElementById("FTInfantsDay").value++;
        }
    }
}
/*END of UpFTInfantsDay()*/

/*START of DownFTInfantsDay()*/
function DownFTInfantsDay() {
    if (document.getElementById("FTInfantsDay").value == 0) {
        return false;
    } else {
        document.getElementById("FTInfantsDay").innerHTML = document.getElementById("FTInfantsDay").value--;
    }
}
/*END of DownFTInfantsDay()*/



/*START of UpFTChildNo()*/
function UpFTChildNo() {
    if (document.getElementById("FTChildNo").value == null) {
        document.getElementById("FTChildNo").innerHTML = 1;
    } else {
        if (document.getElementById("FTChildNo").value >= 20) {
            return false;
        } else {
            document.getElementById("FTChildNo").innerHTML = document.getElementById("FTChildNo").value++;
        }
    }
}
/*END of UpFTChildNo()*/

/*START of DownFTChildNo()*/
function DownFTChildNo() {
    if (document.getElementById("FTChildNo").value == 0) {
        return false;
    } else {
        document.getElementById("FTChildNo").innerHTML = document.getElementById("FTChildNo").value--;
    }
}
/*END of DownFTChildNo()*/

/*START of UpFTChildFees()*/
function UpFTChildFees() {
    if (document.getElementById("FTChildFees").value == null) {
        document.getElementById("FTChildFees").innerHTML = 1;
    } else {
        if (document.getElementById("FTChildFees").value >= 100) {
            return false;
        } else {
            document.getElementById("FTChildFees").innerHTML = document.getElementById("FTChildFees").value++;
        }
    }
}
/*END of UpFTChildFees()*/

/*START of DownFTChildFees()*/
function DownFTChildFees() {
    if (document.getElementById("FTChildFees").value == 0) {
        return false;
    } else {
        document.getElementById("FTChildFees").innerHTML = document.getElementById("FTChildFees").value--;
    }
}
/*END of DownFTInfantsFees()*/

/*START of UpFTChildDay()*/
function UpFTChildDay() {
    if (document.getElementById("FTChildDay").value == null) {
        document.getElementById("FTChildDay").innerHTML = 1;
    } else {
        if (document.getElementById("FTChildDay").value >= 7) {
            return false;
        } else {
            document.getElementById("FTChildDay").innerHTML = document.getElementById("FTChildDay").value++;
        }
    }
}
/*END of UpFTChildDay()*/

/*START of DownFTChildDay()*/
function DownFTChildDay() {
    if (document.getElementById("FTChildDay").value == 0) {
        return false;
    } else {
        document.getElementById("FTChildDay").innerHTML = document.getElementById("FTChildDay").value--;
    }
}
/*END of DownFTChildDay()*/

/*END of FULLTIME*/


/*START of PARTTIME*/
/*START of UpPTInfantsNo()*/
function UpPTInfantsNo() {
    if (document.getElementById("PTInfantsNo").value == null) {
        document.getElementById("PTInfantsNo").innerHTML = 1;
    } else {
        if (document.getElementById("PTInfantsNo").value >= 20) {
            return false;
        } else {
            document.getElementById("PTInfantsNo").innerHTML = document.getElementById("PTInfantsNo").value++;
        }
    }
}
/*END of UpPTInfantsNo()*/

/*START of DownPTInfantsNo()*/
function DownPTInfantsNo() {
    if (document.getElementById("PTInfantsNo").value == 0) {
        return false;
    } else {
        document.getElementById("PTInfantsNo").innerHTML = document.getElementById("PTInfantsNo").value--;
    }
}
/*END of DownPTInfantsNo()*/


/*START of UpPTInfantsFees()*/
function UpPTInfantsFees() {
    if (document.getElementById("PTInfantsFees").value == null) {
        document.getElementById("PTInfantsFees").innerHTML = 1;
    } else {
        if (document.getElementById("PTInfantsFees").value >= 100) {
            return false;
        } else {
            document.getElementById("PTInfantsFees").innerHTML = document.getElementById("PTInfantsFees").value++;
        }
    }
}
/*END of UpPTInfantsFees()*/

/*START of DownPTInfantsFees()*/
function DownPTInfantsFees() {
    if (document.getElementById("PTInfantsFees").value == 0) {
        return false;
    } else {
        document.getElementById("PTInfantsFees").innerHTML = document.getElementById("PTInfantsFees").value--;
    }
}
/*END of DownPTInfantsFees()*/

/*START of UpPTInfantsDay()*/
function UpPTInfantsDay() {
    if (document.getElementById("PTInfantsDay").value == null) {
        document.getElementById("PTInfantsDay").innerHTML = 1;
    } else {
        if (document.getElementById("PTInfantsDay").value >= 7) {
            return false;
        } else {
            document.getElementById("PTInfantsDay").innerHTML = document.getElementById("PTInfantsDay").value++;
        }
    }
}
/*END of UpPTInfantsDay()*/

/*START of DownPTInfantsDay()*/
function DownPTInfantsDay() {
    if (document.getElementById("PTInfantsDay").value == 0) {
        return false;
    } else {
        document.getElementById("PTInfantsDay").innerHTML = document.getElementById("PTInfantsDay").value--;
    }
}
/*END of DownPTInfantsDay()*/

/*START of UpPTChildNo()*/
function UpPTChildNo() {
    if (document.getElementById("PTChildNo").value == null) {
        document.getElementById("PTChildNo").innerHTML = 1;
    } else {
        if (document.getElementById("PTChildNo").value >= 20) {
            return false;
        } else {
            document.getElementById("PTChildNo").innerHTML = document.getElementById("PTChildNo").value++;
        }
    }
}
/*END of UpPTChildNo()*/

/*START of DownPTChildNo()*/
function DownPTChildNo() {
    if (document.getElementById("PTChildNo").value == 0) {
        return false;
    } else {
        document.getElementById("PTChildNo").innerHTML = document.getElementById("PTChildNo").value--;
    }
}
/*END of DownPTChildNo()*/

/*START of UpPTChildFees()*/
function UpPTChildFees() {
    if (document.getElementById("PTChildFees").value == null) {
        document.getElementById("PTChildFees").innerHTML = 1;
    } else {
        if (document.getElementById("PTChildFees").value >= 100) {
            return false;
        } else {
            document.getElementById("PTChildFees").innerHTML = document.getElementById("PTChildFees").value++;
        }
    }
}
/*END of UpPTChildFees()*/

/*START of DownPTChildFees()*/
function DownPTChildFees() {
    if (document.getElementById("PTChildFees").value == 0) {
        return false;
    } else {
        document.getElementById("PTChildFees").innerHTML = document.getElementById("PTChildFees").value--;
    }
}
/*END of DownPTChildFees()*/

/*START of UpPTChildDay()*/
function UpPTChildDay() {
    if (document.getElementById("PTChildDay").value == null) {
        document.getElementById("PTChildDay").innerHTML = 1;
    } else {
        if (document.getElementById("PTChildDay").value >= 7) {
            return false;
        } else {
            document.getElementById("PTChildDay").innerHTML = document.getElementById("PTChildDay").value++;
        }
    }
}
/*END of UpPTChildDay()*/

/*START of DownPTChildDay()*/
function DownPTChildDay() {
    if (document.getElementById("PTChildDay").value == 0) {
        return false;
    } else {
        document.getElementById("PTChildDay").innerHTML = document.getElementById("PTChildDay").value--;
    }
}
/*END of DownPTChildDay()*/
/*END of PARTTIME*/
/* END of pac_cal.js*/