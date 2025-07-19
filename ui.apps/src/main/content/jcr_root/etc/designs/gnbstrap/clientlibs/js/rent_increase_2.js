/* START of rent_increase_2.js
 * /etc/designs/gnb-bootstrap/clientlibs/js/rent_increase_2.js
 * component : /apps/gnb/components/content/rent_increase_2
 */
/*START of calculation_2*/
/*START of function adCalc_2(form)*/

function adCalc_rent_2(form) {
    var lang								= document.getElementById("lang").value;

	var current_rent 						= document.getElementById("current_rent").value.replace(/\,/g, '');

    //for English/French currench format
    var rent_increase_by_result_value;
    var new_rent_not_exceed_result_value;
    if(lang=='en'){
		rent_increase_by_result_value		="$ "+(current_rent*0.038).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        new_rent_not_exceed_result_value	="$ "+(current_rent*1.038).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }else{
		rent_increase_by_result_value		=(current_rent*0.038).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")+" $ ";
		rent_increase_by_result_value		= rent_increase_by_result_value.replace(","," ").replace(".", ",");

        new_rent_not_exceed_result_value	=(current_rent*1.038).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")+" $ ";
        new_rent_not_exceed_result_value	= new_rent_not_exceed_result_value.replace(","," ").replace(".", ",");
    }
    //var new_rent_not_exceed_result_value	="$ "+(current_rent*1.038).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
	//var rent_increase_by_result_value		="$ "+(current_rent*0.038).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

	$("#rent_increase_by_result").text(rent_increase_by_result_value);
    $("#new_rent_not_exceed_result").text(new_rent_not_exceed_result_value);

}

//clear text in result
function clearContent_2() {
    $("#rent_increase_by_result").text("");
    $("#new_rent_not_exceed_result").text("");
}

/*END of calculation_2*/
/* END of rent_increase_2.js*/

