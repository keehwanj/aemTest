/* START of dap_cal.js
 * /etc/designs/gnb-bootstrap/clientlibs/js/dap_cal.js
 * component : /apps/gnb/components/content/dap
 */

function adCalc_dap(form) {
    var income_dap = document.getElementById("income_dap").value;

    income_dap = income_dap.replace(/\,/g, '');
    var FTInfants = document.getElementById("FTInfants").value;
    var PTInfants = document.getElementById("PTInfants").value;
    var FTChild = document.getElementById("FTChild").value;
    var PTChild = document.getElementById("PTChild").value;
    //var FTIdays = document.getElementById("FTIdays").value;
    //var PTIdays = document.getElementById("PTIdays").value;
    //var FTCdays = document.getElementById("FTCdays").value;
    //var PTCdays = document.getElementById("PTCdays").value;
    var monthly;
    var ok;
    var incomplete = "Enter your income_dap so we can give you an estimate";
    var totalfamily = document.getElementById("family").value;

    if (income_dap === "") {}
    if (income_dap > 0 && income_dap < 22001) {
        totalfamily = (FTInfants = FTInfants * 28.50) + (PTInfants = PTInfants * 14.50) + (FTChild = FTChild * 24.25) + (PTChild = PTChild * 12.75);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 22001 && income_dap < 23001) {
        totalfamily = (FTInfants = FTInfants * 28.50) + (PTInfants = PTInfants * 14.50) + (FTChild = FTChild * 24.25) + (PTChild = PTChild * 12.75);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 23001 && income_dap < 24001) {
        totalfamily = (FTInfants = FTInfants * 28.50) + (PTInfants = PTInfants * 14.50) + (FTChild = FTChild * 24.25) + (PTChild = PTChild * 12.75);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 24001 && income_dap < 25001) {
        totalfamily = (FTInfants = FTInfants * 28.50) + (PTInfants = PTInfants * 14.50) + (FTChild = FTChild * 24.25) + (PTChild = PTChild * 12.75);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 25001 && income_dap < 26001) {
        totalfamily = (FTInfants = FTInfants * 28.50) + (PTInfants = PTInfants * 14.50) + (FTChild = FTChild * 24.25) + (PTChild = PTChild * 12.75);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 26001 && income_dap < 27001) {
        totalfamily = (FTInfants = FTInfants * 28.50) + (PTInfants = PTInfants * 14.50) + (FTChild = FTChild * 24.25) + (PTChild = PTChild * 12.75);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 27001 && income_dap < 28001) {
        totalfamily = (FTInfants = FTInfants * 28.50) + (PTInfants = PTInfants * 14.50) + (FTChild = FTChild * 24.25) + (PTChild = PTChild * 12.75);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        $("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 28001 && income_dap < 29001) {
        totalfamily = (FTInfants = FTInfants * 28.50) + (PTInfants = PTInfants * 14.50) + (FTChild = FTChild * 24.25) + (PTChild = PTChild * 12.75);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 29001 && income_dap < 30001) {
        totalfamily = (FTInfants = FTInfants * 28.50) + (PTInfants = PTInfants * 14.50) + (FTChild = FTChild * 24.25) + (PTChild = PTChild * 12.75);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 30001 && income_dap < 31001) {
        totalfamily = (FTInfants = FTInfants * 25.01) + (PTInfants = PTInfants * 13.01) + (FTChild = FTChild * 21.27) + (PTChild = PTChild * 11.44);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 31001 && income_dap < 32001) {
        totalfamily = (FTInfants = FTInfants * 21.95) + (PTInfants = PTInfants * 11.67) + (FTChild = FTChild * 18.66) + (PTChild = PTChild * 10.26);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 32001 && income_dap < 33001) {
        totalfamily = (FTInfants = FTInfants * 19.26) + (PTInfants = PTInfants * 10.47) + (FTChild = FTChild * 16.37) + (PTChild = PTChild * 9.20);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 33001 && income_dap < 34001) {
        totalfamily = (FTInfants = FTInfants * 16.90) + (PTInfants = PTInfants * 9.39) + (FTChild = FTChild * 14.36) + (PTChild = PTChild * 8.25);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 34001 && income_dap < 35001) {
        totalfamily = (FTInfants = FTInfants * 14.83) + (PTInfants = PTInfants * 8.42) + (FTChild = FTChild * 12.60) + (PTChild = PTChild * 7.40);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 35001 && income_dap < 36001) {
        totalfamily = (FTInfants = FTInfants * 13.01) + (PTInfants = PTInfants * 7.55) + (FTChild = FTChild * 11.05) + (PTChild = PTChild * 6.64);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 36001 && income_dap < 37001) {
        totalfamily = (FTInfants = FTInfants * 11.42) + (PTInfants = PTInfants * 6.78) + (FTChild = FTChild * 9.69) + (PTChild = PTChild * 5.96);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 37001 && income_dap < 38001) {
        totalfamily = (FTInfants = FTInfants * 10.02) + (PTInfants = PTInfants * 6.08) + (FTChild = FTChild * 8.50) + (PTChild = PTChild * 5.34);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 38000 && income_dap < 39001) {
        totalfamily = (FTInfants = FTInfants * 8.79) + (PTInfants = PTInfants * 5.45) + (FTChild = FTChild * 7.46) + (PTChild = PTChild * 4.79);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //form.monthly.value = monthly.toFixed(2);
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 39001 && income_dap < 40001) {
        totalfamily = (FTInfants = FTInfants * 7.71) + (PTInfants = PTInfants * 4.89) + (FTChild = FTChild * 6.54) + (PTChild = PTChild * 4.30);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 40001 && income_dap < 41001) {
        totalfamily = (FTInfants = FTInfants * 6.77) + (PTInfants = PTInfants * 4.39) + (FTChild = FTChild * 5.74) + (PTChild = PTChild * 3.86);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //$("#monthly").val(FTIdays);
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 41001 && income_dap < 42001) {
        totalfamily = (FTInfants = FTInfants * 5.94) + (PTInfants = PTInfants * 3.93) + (FTChild = FTChild * 5.03) + (PTChild = PTChild * 3.46);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 42001 && income_dap < 43001) {
        totalfamily = (FTInfants = FTInfants * 5.21) + (PTInfants = PTInfants * 3.53) + (FTChild = FTChild * 4.42) + (PTChild = PTChild * 3.10);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 43001 && income_dap < 44001) {
        totalfamily = (FTInfants = FTInfants * 4.57) + (PTInfants = PTInfants * 3.17) + (FTChild = FTChild * 3.87) + (PTChild = PTChild * 2.78);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        $("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 44001 && income_dap < 45001) {
        totalfamily = (FTInfants = FTInfants * 4.01) + (PTInfants = PTInfants * 2.84) + (FTChild = FTChild * 3.40) + (PTChild = PTChild * 2.50);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
       // $("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 45001 && income_dap < 46001) {
        totalfamily = (FTInfants = FTInfants * 3.52) + (PTInfants = PTInfants * 2.55) + (FTChild = FTChild * 2.98) + (PTChild = PTChild * 2.24);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 46001 && income_dap < 47001) {
        totalfamily = (FTInfants = FTInfants * 3.09) + (PTInfants = PTInfants * 2.28) + (FTChild = FTChild * 2.61) + (PTChild = PTChild * 2.01);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 47001 && income_dap < 48001) {
        totalfamily = (FTInfants = FTInfants * 2.71) + (PTInfants = PTInfants * 2.05) + (FTChild = FTChild * 2.29) + (PTChild = PTChild * 1.80);
        //form.family.value = totalfamily.toFixed(2);
		$("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 48001 && income_dap < 49001) {
        totalfamily = (FTInfants = FTInfants * 2.38) + (PTInfants = PTInfants * 1.84) + (FTChild = FTChild * 2.01) + (PTChild = PTChild * 1.62);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 49001 && income_dap < 50001) {
        totalfamily = (FTInfants = FTInfants * 2.09) + (PTInfants = PTInfants * 1.65) + (FTChild = FTChild * 1.75) + (PTChild = PTChild * 1.45);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 50001 && income_dap < 51001) {
        totalfamily = (FTInfants = FTInfants * 1.82) + (PTInfants = PTInfants * 1.47) + (FTChild = FTChild * 1.55) + (PTChild = PTChild * 1.30);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 51001 && income_dap < 52001) {
        totalfamily = (FTInfants = FTInfants * 1.60) + (PTInfants = PTInfants * 1.32) + (FTChild = FTChild * 1.36) + (PTChild = PTChild * 1.16);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 52001 && income_dap < 53001) {
        totalfamily = (FTInfants = FTInfants * 1.40) + (PTInfants = PTInfants * 1.19) + (FTChild = FTChild * 1.19) + (PTChild = PTChild * 1.04);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 53001 && income_dap < 54001) {
        totalfamily = (FTInfants = FTInfants * 1.23) + (PTInfants = PTInfants * 1.06) + (FTChild = FTChild * 1.04) + (PTChild = PTChild * 0.94);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap >= 54001 && income_dap < 55001) {
        totalfamily = (FTInfants = FTInfants * 1.08) + (PTInfants = PTInfants * 0.95) + (FTChild = FTChild * 0.92) + (PTChild = PTChild * 0.84);
        //form.family.value = totalfamily.toFixed(2);
        $("#family").val(totalfamily.toFixed(2));
        //monthly = (FTInfants * FTIdays) + (PTInfants * PTIdays) + (FTChild * FTCdays) + (PTChild * PTCdays);
        //$("#monthly").val(monthly.toFixed(2));
        //form.yearly.value = (monthly * 12).toFixed(2);
        ok++;
    }
    if (income_dap > 55001) {
        //form.family.value = form.monthly.value = form.yearly.value = "0.00";
        //form.family.value = "0.00";
        $("#family").val("0.00");
        //$("#monthly").val("0.00");
        ok++;
    }
}


function UpFTInfants() {
    //document.getElementById("1").selected = "true";
    if (document.getElementById("FTInfants").value == 5) {
        return false;
    } else {
        document.getElementById("FTInfants").innerHTML = document.getElementById("FTInfants").value++;
    }
}

function DownFTInfants() {
    if (document.getElementById("FTInfants").value == 0) {
        return false;
    } else {
        document.getElementById("FTInfants").innerHTML = document.getElementById("FTInfants").value--;
    }
    if (document.getElementById("FTInfants").value == 0) {
        //document.getElementById("0").selected = "true";
    }
}

function UpPTInfants() {
    //document.getElementById("7").selected = "true";
    if (document.getElementById("PTInfants").value == 5) {
        return false;
    } else {
        document.getElementById("PTInfants").innerHTML = document.getElementById("PTInfants").value++;
    }
}

function DownPTInfants() {
    if (document.getElementById("PTInfants").value == 0) {
        return false;
    } else {
        document.getElementById("PTInfants").innerHTML = document.getElementById("PTInfants").value--;
    }
    if (document.getElementById("PTInfants").value == 0) {
        //document.getElementById("6").selected = "true";
    }
}

function UpFTChild() {
    //document.getElementById("13").selected = "true";
    if (document.getElementById("FTChild").value == 10) {
        return false;
    } else {
        document.getElementById("FTChild").innerHTML = document.getElementById("FTChild").value++;
    }
}

function DownFTChild() {
    if (document.getElementById("FTChild").value == 0) {
        return false;
    } else {
        document.getElementById("FTChild").innerHTML = document.getElementById("FTChild").value--;
    }
    if (document.getElementById("FTChild").value == 0) {
        //document.getElementById("12").selected = "true";
    }
}

function UpPTChild() {
    //document.getElementById("18").selected = "true";
    if (document.getElementById("PTChild").value == 10) {
        return false;
    } else {
        document.getElementById("PTChild").innerHTML = document.getElementById("PTChild").value++;
    }
}

function DownPTChild() {
    if (document.getElementById("PTChild").value == 0) {
        return false;
    } else {
        document.getElementById("PTChild").innerHTML = document.getElementById("PTChild").value--;
    }
    if (document.getElementById("PTChild").value == 0) {
        //document.getElementById("17").selected = "true";
    }
}

/* END of dap_cal.js*/