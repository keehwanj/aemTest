/* START of pac_cal.js
 * /etc/designs/gnb-bootstrap/clientlibs/js/pac_cal.js
 * component : /apps/gnb/components/content/dap
 */
/*START of function adCalc(form)*/
function adCalc(form) {
    var income 			= document.getElementById("income").value.replace(/\,/g, '');
    //income 				= income.replace(/\,/g, '');

    var FTInfantsNo 	= document.getElementById("FTInfantsNo").value;
    var FTInfantsFees 	= document.getElementById("FTInfantsFees").value;

    var FTChildNo 		= document.getElementById("FTChildNo").value;
    var FTChildFees 	= document.getElementById("FTChildFees").value;

    var PTInfantsNo 	= document.getElementById("PTInfantsNo").value;
    var PTInfantsFees 	= document.getElementById("PTInfantsFees").value;
    var PTInfantsDay 	= document.getElementById("PTInfantsDay").value;

    var PTChildNo 		= document.getElementById("PTChildNo").value;
    var PTChildFees 	= document.getElementById("PTChildFees").value;
    var PTChildDay 		= document.getElementById("PTChildDay").value;

    var monthly;
    var ok;
    var incomplete = "Enter your income so we can give you an estimate";
    //var totalfamily 	= document.getElementById("family").value;
    /*START of Your Estimated Annual Daycare Expences*/
    //Yearly daycare expences
    //var yearly_expenses = ((FTInfantsNo * FTInfantsFees) + (FTChildNo * FTChildFees)) * 260 + ((PTInfantsNo * PTInfantsFees * PTInfantsDay) + (PTChildNo * PTChildFees * PTChildDay)) * 52;
    var yearly_expenses = ((FTInfantsNo * FTInfantsFees) + (FTChildNo * FTChildFees)+(PTInfantsNo * PTInfantsFees) + (PTChildNo * PTChildFees)) *260;
    //var yearly_expenses1 = "$" + yearly_expenses.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var yearly_expenses1 = yearly_expenses.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    $("#yearly_expenses").text(yearly_expenses1);
  	var expense_percent;
    if (income > 0) {
        expense_percent = ((yearly_expenses / income) * 100).toFixed(0);
    }
    //daily daycare expences
    $("#expense_percent").text(expense_percent);    

    var difference;
    var baseline = 37500;


    /*END of Your Estimated Annual Daycare Expences*/

    /*START of Rate Determination*/
    //difference = Math.round(income - baseline - 0.00001);
    difference = (income - baseline - 0.00001).toFixed(6);
	//$("#test1").text(difference); 
    /*START of  of FT_INF - factors*/
    var Factor1_FT_INF = findFactor1(difference);
	//$("#test1").text(Factor1_FT_INF); 
    var Factor2_FT_INF = findFactor2(Factor1_FT_INF);
    //$("#test2").text(Factor2_FT_INF); 
    var Factor3_FT_INF = findFactor3(Factor1_FT_INF, Factor2_FT_INF);
    //$("#test3").text(Factor3_FT_INF); 
    var Assistance_Estimate_FT_INF = findAssistance_Estimate(difference, FTInfantsFees, Factor3_FT_INF, 36.90);
    //$("#test4").text(Assistance_Estimate_FT_INF); 
    /*END of  of FT_INF - factors*/

    /*START of  of PT_INF - factors*/
    var Factor1_PT_INF = Factor1_FT_INF;
    //$("#test1").text(Factor1_PT_INF); 
    var Factor2_PT_INF = findFactor2(Factor1_PT_INF);
    //$("#test2").text(Factor2_PT_INF); 
    var Factor3_PT_INF = findFactor3(Factor1_PT_INF, Factor2_PT_INF);
    //$("#test3").text(Factor3_PT_INF); 
    var Assistance_Estimate_PT_INF = findAssistance_Estimate(difference, PTInfantsFees, Factor3_PT_INF, 19.50);
    //$("#test4").text(Assistance_Estimate_PT_INF); 
    /*END of  of FT_INF - factors*/


    /*START of  of FT_PRE - factors*/
    var Factor1_FT_PRE = Factor1_PT_INF;
    $("#test1").text(Factor1_FT_PRE); 
    var Factor2_FT_PRE = findFactor2_PRE(Factor1_FT_PRE);
    $("#test2").text(Factor2_FT_PRE); 
    var Factor3_FT_PRE = findFactor3(Factor1_FT_PRE, Factor2_FT_PRE);
    $("#test3").text(Factor3_FT_PRE); 
    var Assistance_Estimate_FT_PRE = findAssistance_Estimate(difference, FTChildFees, Factor3_FT_PRE, 31.20);
    $("#test4").text(Assistance_Estimate_FT_PRE); 
    /*END of  of FT_PRE - factors*/

    /*START of  of PT_PRE - factors*/
    var Factor1_PT_PRE = Factor1_FT_PRE;
    //$("#test1").text(Factor1_PT_PRE); 
    var Factor2_PT_PRE = findFactor2_PRE(Factor1_PT_PRE);
    //$("#test2").text(Factor2_PT_PRE); 
    var Factor3_PT_PRE = findFactor3(Factor1_PT_PRE, Factor2_PT_PRE);
    //$("#test3").text(Factor3_PT_PRE); 
    var Assistance_Estimate_PT_PRE = findAssistance_Estimate(difference, PTChildFees, Factor3_PT_PRE, 16.60);
    //$("#test4").text(Assistance_Estimate_PT_PRE); 
    /*END of  of PT_PRE - factors*/
    /*END of Rate Determination*/

    /*START of CALCULATION*/
    /*START of  of FT_INF*/
    //FT_INF - 5
    var Daily_Expense_FT_INF = findDaily_Expense(FTInfantsNo, FTInfantsFees);
    var Total_Subsidy_FT_INF = findTotal_Subsidy(FTInfantsNo, Assistance_Estimate_FT_INF, Daily_Expense_FT_INF, 5.00, FTInfantsFees, income);
    var Net_FT_INF = findNet(Daily_Expense_FT_INF, Total_Subsidy_FT_INF);
    var Days_in_Care_FT_INF = 260;
    var Annaulized_Subsidy_FT_INF = findAnnaulized_Subsidy(Total_Subsidy_FT_INF, Days_in_Care_FT_INF);
    $("#Annaulized_Subsidy_FT_INF").text(Annaulized_Subsidy_FT_INF);
    /*END of  of FT_INF*/

    /*START of  of FT_PreSch*/
    //FT_PreSch - 4.25
    var Daily_Expense_FT_PreSch = findDaily_Expense(FTChildNo, FTChildFees);
    var Total_Subsidy_FT_PreSch = findTotal_Subsidy(FTChildNo, Assistance_Estimate_FT_PRE, Daily_Expense_FT_PreSch, 4.25, FTChildFees, income);
    var Net_FT_PreSch = findNet(Daily_Expense_FT_PreSch, Total_Subsidy_FT_PreSch);
    var Days_in_Care_FT_PreSch = 260;
    var Annaulized_Subsidy_FT_PreSch = findAnnaulized_Subsidy(Total_Subsidy_FT_PreSch, Days_in_Care_FT_PreSch);
    $("#Annaulized_Subsidy_FT_PreSch").text(Annaulized_Subsidy_FT_PreSch);
    /*END of  of FT_PreSch*/

    /*START of  of PT_INF*/
     //PT_INF - 2.64
    var Daily_Expense_PT_INF = findDaily_Expense(PTInfantsNo, PTInfantsFees);
    var Total_Subsidy_PT_INF = findTotal_Subsidy(PTInfantsNo, Assistance_Estimate_PT_INF, Daily_Expense_PT_INF, 2.64, PTInfantsFees, income);
    var Net_PT_INF = findNet(Daily_Expense_PT_INF, Total_Subsidy_PT_INF);
    var Days_in_Care_PT_INF = PTInfantsDay * 52;
    var Annaulized_Subsidy_PT_INF = findAnnaulized_Subsidy(Total_Subsidy_PT_INF, Days_in_Care_PT_INF);
    $("#Annaulized_Subsidy_PT_INF").text(Annaulized_Subsidy_PT_INF);
    /*END of  of PT_INF*/

    /*START of  of PT_PreSch*/
    //PT_PreSch - 2.26
    var Daily_Expense_PT_PreSch = findDaily_Expense(PTChildNo, PTChildFees);
    var Total_Subsidy_PT_PreSch = findTotal_Subsidy(PTChildNo, Assistance_Estimate_PT_PRE, Daily_Expense_PT_PreSch, 2.26, PTChildFees, income);
    var Net_PT_PreSch = findNet(Daily_Expense_PT_PreSch, Total_Subsidy_PT_PreSch);
    var Days_in_Care_PT_PreSch = PTChildDay * 52;
    var Annaulized_Subsidy_PT_PreSch = findAnnaulized_Subsidy(Total_Subsidy_PT_PreSch, Days_in_Care_PT_PreSch);
    /*END of  of PT_PreSch*/


	/*START of Daily Daycare Expenses-Day*/
	/*START of NEW (2017-12-21)*/
    var daily_expenses = Daily_Expense_FT_INF+Daily_Expense_FT_PreSch+Daily_Expense_PT_INF+Daily_Expense_PT_PreSch;
    //var daily_expenses1 = "$" + daily_expenses.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var daily_expenses1 = daily_expenses.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    $("#daily_expenses").text(daily_expenses1);

	/*END of Daily Daycare Expenses-Day*/    


	/*START of Daily Daycare Expenses-Year*/
	//var yearly_daycare_expences=(((FTInfantsNo*FTInfantsFees)+(FTChildNo*FTChildFees)+(PTInfantsNo*PTInfantsFees)+(PTChildNo*PTChildFees))*260);
	/*END of Daily Daycare Expenses-Year*/

	/*START of DayCare_Assistance_perYear*/
    var DayCare_Assistance_perYear = findDayCare_Assistance_perYear(Annaulized_Subsidy_FT_INF, Annaulized_Subsidy_FT_PreSch, Annaulized_Subsidy_PT_INF, Annaulized_Subsidy_PT_PreSch,income,yearly_expenses);
    var DayCare_Assistance_perYear1=DayCare_Assistance_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    $("#DayCare_Assistance_perYear").text(DayCare_Assistance_perYear1);
	/*END of DayCare_Assistance_perYear*/

	/*START of Daycare Assistance_perDay - (2017-12-21)*/
	//var Daycare_Assistance_perDay = findDaycare_Assistance_perDay(DayCare_Assistance_perYear, 260);
    var Daycare_Assistance_perDay = findDaycare_Assistance_perDay(DayCare_Assistance_perYear);
    var Daycare_Assistance_perDay1=Daycare_Assistance_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Daycare_Assistance_perDay").text(Daycare_Assistance_perDay1);
    /*END of Daycare Assistance_perDay*/    

	/*START of Income Cap Assistance perYear*/
    var cap=0.2;
	var IncomeCap_Assistance_perYear = findIncomeCap_Assistance_perYear(yearly_expenses,DayCare_Assistance_perYear, income, cap);
    //var IncomeCap_Assistance_perYear1 = "$" + IncomeCap_Assistance_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var IncomeCap_Assistance_perYear1 = IncomeCap_Assistance_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#IncomeCap_Assistance_perYear").text(IncomeCap_Assistance_perYear1);
    /*END of Income Cap Assistance perYear*/

	/*START of Income Cap Assistance perDay*/
	var IncomeCap_Assistance_perDay = IncomeCap_Assistance_perYear/260;
    //var IncomeCap_Assistance_perDay1 = "$" + IncomeCap_Assistance_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var IncomeCap_Assistance_perDay1 = IncomeCap_Assistance_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#IncomeCap_Assistance_perDay").text(IncomeCap_Assistance_perDay1);
    /*END of Income Cap Assistance perDay*/

	/*START of Total_EstimatedAssistance perYear*/
	var Total_EstimatedAssistance_perYear = DayCare_Assistance_perYear+IncomeCap_Assistance_perYear;
    //var Total_EstimatedAssistance_perYear1 = "$" + Total_EstimatedAssistance_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var Total_EstimatedAssistance_perYear1 = Total_EstimatedAssistance_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Total_EstimatedAssistance_perYear").text(Total_EstimatedAssistance_perYear1);
    /*END of Total_EstimatedAssistance perYear*/    

	/*START of Total_EstimatedAssistance perDay*/
	var Total_EstimatedAssistance_perDay = Daycare_Assistance_perDay+IncomeCap_Assistance_perDay;
    //var Total_EstimatedAssistance_perDay1 = "$" + Total_EstimatedAssistance_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var Total_EstimatedAssistance_perDay1 = Total_EstimatedAssistance_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Total_EstimatedAssistance_perDay").text(Total_EstimatedAssistance_perDay1);
    /*END of Total_EstimatedAssistance perYear*/    


	/*START of Revised Estimated Anual Daycare Expenses per Year*/
	var Revised_Estimated_Annual_Daycare_perYear = yearly_expenses-Total_EstimatedAssistance_perYear;
    //var Revised_Estimated_Annual_Daycare_perYear1 = "$" + Revised_Estimated_Annual_Daycare_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var Revised_Estimated_Annual_Daycare_perYear1 = Revised_Estimated_Annual_Daycare_perYear.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Revised_Estimated_Annual_Daycare_perYear").text(Revised_Estimated_Annual_Daycare_perYear1);
    /*END of Total_EstimatedAssistance perYear*/       


	/*START of Revised Estimated Anual Daycare Expenses per Day*/
	var Revised_Estimated_Annual_Daycare_perDay = daily_expenses-Total_EstimatedAssistance_perDay;
    //var Revised_Estimated_Annual_Daycare_perDay1 = "$" + Revised_Estimated_Annual_Daycare_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    var Revised_Estimated_Annual_Daycare_perDay1 = Revised_Estimated_Annual_Daycare_perDay.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	$("#Revised_Estimated_Annual_Daycare_perDay").text(Revised_Estimated_Annual_Daycare_perDay1);
    /*END of Total_EstimatedAssistance perYear*/    


	var revised_expense_percent;
    if (income > 0) {
        //revised_expense_percent = ((Revised_Estimated_Annual_Daycare_perYear / income) * 100).toFixed(0);
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
/*START of IncomeCap_Assistance_perYear*/


/*END of IncomeCap_Assistance_perYear*/


/*START of Daycare_Assistance_perDay(2017-12-21)*/
//function findDaycare_Assistance_perDay(DayCare_Assistance_perYear, number){
function findDaycare_Assistance_perDay(yearly_assistance){
	return yearly_assistance/260;
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
    return Total_Subsidy * Days_in_Care;
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
function findDaily_Expense(no, fees) {
    return no * fees;
}
/*END of findDaily_Expense*/
/*END of function - CALCULATION*/


/*START of function - Rate Determination*/



/*START of function findAssistance_Estimate*/
function findAssistance_Estimate(difference, FTInfantsFees, Factor3, static) {
    if (difference < 0) {
        return FTInfantsFees;
    } else {
        return (Factor3*static).toFixed(6);

/**
        if (FTInfantsFees < static) {
            return (FTInfantsFees * Factor3).toFixed(6);
        } else {
            return (Factor3 * static).toFixed(6);
        }
**/        
    }
}
/*END of function findAssistance_Estimate*/

/*START of function Factor3*/
function findFactor3(Factor1, Factor2) {
    if (Factor1 === 0) {
        return 0;
    } else {
        return (Math.pow(Factor2, Factor1)).toFixed(6);
        //return (Math.pow(Factor2, Factor1));
    }
}
/*END of function Factor3*/
/*START of function Factor2_PRE*/
function findFactor2_PRE(Factor1) {
    if (Factor1 === 0) {
        return 0-0.0005;
    } else {
        return (0.954697480936099 - 0.0005).toFixed(6);
    }
}
/*END of function Factor2_PRE*/

/*START of function Factor2 -new(removed Factor2_PRE)*/
function findFactor2(Factor1) {
    if (Factor1 === 0) {
        return (0 - 0.0005).toFixed(6);
    } else {
        return (0.954580363497432 - 0.0005).toFixed(6);
        //return (0.954580363497432 - 0.0005);
    }
}
/*END of function Factor2*/


/*START of function Factor1*/
function findFactor1(difference) {
    if (difference > (80000 - 37500)) {
        return 0;
    } else {
       return (difference / 1000).toFixed(6);
       //return (difference / 1000);
    }
}
/*END of function Factor1*/
/*END of function - Rate Determination*/




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
/*END of FULLTIME*/

/*START of INFANTS*/
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
        if (document.getElementById("PTInfantsDay").value >= 5) {
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
        if (document.getElementById("PTChildDay").value >= 5) {
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
/*END of INFANTS*/
/* END of pac_cal.js*/