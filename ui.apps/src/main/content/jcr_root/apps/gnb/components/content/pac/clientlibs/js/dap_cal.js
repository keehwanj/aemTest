/* START of dap_cal.js
 * /apps/gnb/components/content/dap/clientlibs/js/dap_cal.js
 */

function adCalc(form) {
  var income = document.getElementById('income').value;

  income = income.replace(/\,/g, '');
  var FTInfants = document.getElementById('FTInfants').value;
  var PTInfants = document.getElementById('PTInfants').value;
  var FTChild = document.getElementById('FTChild').value;
  var PTChild = document.getElementById('PTChild').value;
  var FTIdays = document.getElementById('FTIdays').value;
  var PTIdays = document.getElementById('PTIdays').value;
  var FTCdays = document.getElementById('FTCdays').value;
  var PTCdays = document.getElementById('PTCdays').value;
  var monthly;
  var ok;
  var incomplete = 'Enter your income so we can give you an estimate';
  var totalfamily = document.getElementById('family').value;

  if (income === '') {
  }
  if (income > 0 && income < 22001) {
    totalfamily =
      (FTInfants = FTInfants * 28.5) +
      (PTInfants = PTInfants * 14.5) +
      (FTChild = FTChild * 24.25) +
      (PTChild = PTChild * 12.75);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 22000 && income < 23001) {
    totalfamily =
      (FTInfants = FTInfants * 28.5) +
      (PTInfants = PTInfants * 14.5) +
      (FTChild = FTChild * 24.25) +
      (PTChild = PTChild * 12.75);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 23000 && income < 24001) {
    totalfamily =
      (FTInfants = FTInfants * 28.5) +
      (PTInfants = PTInfants * 14.5) +
      (FTChild = FTChild * 24.25) +
      (PTChild = PTChild * 12.75);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 24000 && income < 25001) {
    totalfamily =
      (FTInfants = FTInfants * 28.5) +
      (PTInfants = PTInfants * 14.5) +
      (FTChild = FTChild * 24.25) +
      (PTChild = PTChild * 12.75);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 25000 && income < 26001) {
    totalfamily =
      (FTInfants = FTInfants * 28.5) +
      (PTInfants = PTInfants * 14.5) +
      (FTChild = FTChild * 24.25) +
      (PTChild = PTChild * 12.75);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 26000 && income < 27001) {
    totalfamily =
      (FTInfants = FTInfants * 28.5) +
      (PTInfants = PTInfants * 14.5) +
      (FTChild = FTChild * 24.25) +
      (PTChild = PTChild * 12.75);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 27000 && income < 28001) {
    totalfamily =
      (FTInfants = FTInfants * 28.5) +
      (PTInfants = PTInfants * 14.5) +
      (FTChild = FTChild * 24.25) +
      (PTChild = PTChild * 12.75);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 28000 && income < 29001) {
    totalfamily =
      (FTInfants = FTInfants * 28.5) +
      (PTInfants = PTInfants * 14.5) +
      (FTChild = FTChild * 24.25) +
      (PTChild = PTChild * 12.75);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 29000 && income < 30001) {
    totalfamily =
      (FTInfants = FTInfants * 28.5) +
      (PTInfants = PTInfants * 14.5) +
      (FTChild = FTChild * 24.25) +
      (PTChild = PTChild * 12.75);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 30000 && income < 31001) {
    totalfamily =
      (FTInfants = FTInfants * 25.01) +
      (PTInfants = PTInfants * 13.01) +
      (FTChild = FTChild * 21.27) +
      (PTChild = PTChild * 11.44);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 31000 && income < 32001) {
    totalfamily =
      (FTInfants = FTInfants * 21.95) +
      (PTInfants = PTInfants * 11.67) +
      (FTChild = FTChild * 18.66) +
      (PTChild = PTChild * 10.26);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 32000 && income < 33001) {
    totalfamily =
      (FTInfants = FTInfants * 19.26) +
      (PTInfants = PTInfants * 10.47) +
      (FTChild = FTChild * 16.37) +
      (PTChild = PTChild * 9.2);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 33000 && income < 34001) {
    totalfamily =
      (FTInfants = FTInfants * 16.9) +
      (PTInfants = PTInfants * 9.39) +
      (FTChild = FTChild * 14.36) +
      (PTChild = PTChild * 8.25);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 34000 && income < 35001) {
    totalfamily =
      (FTInfants = FTInfants * 14.83) +
      (PTInfants = PTInfants * 8.42) +
      (FTChild = FTChild * 12.6) +
      (PTChild = PTChild * 7.4);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 35000 && income < 36001) {
    totalfamily =
      (FTInfants = FTInfants * 13.01) +
      (PTInfants = PTInfants * 7.55) +
      (FTChild = FTChild * 11.05) +
      (PTChild = PTChild * 6.64);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 36000 && income < 37001) {
    totalfamily =
      (FTInfants = FTInfants * 11.42) +
      (PTInfants = PTInfants * 6.78) +
      (FTChild = FTChild * 9.69) +
      (PTChild = PTChild * 5.96);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 37000 && income < 38001) {
    totalfamily =
      (FTInfants = FTInfants * 10.02) +
      (PTInfants = PTInfants * 6.08) +
      (FTChild = FTChild * 8.5) +
      (PTChild = PTChild * 5.34);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 38000 && income < 39001) {
    totalfamily =
      (FTInfants = FTInfants * 8.79) +
      (PTInfants = PTInfants * 5.45) +
      (FTChild = FTChild * 7.46) +
      (PTChild = PTChild * 4.79);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 39000 && income < 40001) {
    totalfamily =
      (FTInfants = FTInfants * 7.71) +
      (PTInfants = PTInfants * 4.89) +
      (FTChild = FTChild * 6.54) +
      (PTChild = PTChild * 4.3);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 40000 && income < 41001) {
    totalfamily =
      (FTInfants = FTInfants * 6.77) +
      (PTInfants = PTInfants * 4.39) +
      (FTChild = FTChild * 5.74) +
      (PTChild = PTChild * 3.86);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 41000 && income < 42001) {
    totalfamily =
      (FTInfants = FTInfants * 5.94) +
      (PTInfants = PTInfants * 3.93) +
      (FTChild = FTChild * 5.03) +
      (PTChild = PTChild * 3.46);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 42000 && income < 43001) {
    totalfamily =
      (FTInfants = FTInfants * 5.21) +
      (PTInfants = PTInfants * 3.53) +
      (FTChild = FTChild * 4.42) +
      (PTChild = PTChild * 3.1);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 43000 && income < 44001) {
    totalfamily =
      (FTInfants = FTInfants * 4.57) +
      (PTInfants = PTInfants * 3.17) +
      (FTChild = FTChild * 3.87) +
      (PTChild = PTChild * 2.78);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 44000 && income < 45001) {
    totalfamily =
      (FTInfants = FTInfants * 4.01) +
      (PTInfants = PTInfants * 2.84) +
      (FTChild = FTChild * 3.4) +
      (PTChild = PTChild * 2.5);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 45000 && income < 46001) {
    totalfamily =
      (FTInfants = FTInfants * 3.52) +
      (PTInfants = PTInfants * 2.55) +
      (FTChild = FTChild * 2.98) +
      (PTChild = PTChild * 2.24);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 46000 && income < 47001) {
    totalfamily =
      (FTInfants = FTInfants * 3.09) +
      (PTInfants = PTInfants * 2.28) +
      (FTChild = FTChild * 2.61) +
      (PTChild = PTChild * 2.01);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 47000 && income < 48001) {
    totalfamily =
      (FTInfants = FTInfants * 2.71) +
      (PTInfants = PTInfants * 2.05) +
      (FTChild = FTChild * 2.29) +
      (PTChild = PTChild * 1.8);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 48000 && income < 49001) {
    totalfamily =
      (FTInfants = FTInfants * 2.38) +
      (PTInfants = PTInfants * 1.84) +
      (FTChild = FTChild * 2.01) +
      (PTChild = PTChild * 1.62);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 49000 && income < 50001) {
    totalfamily =
      (FTInfants = FTInfants * 2.09) +
      (PTInfants = PTInfants * 1.65) +
      (FTChild = FTChild * 1.75) +
      (PTChild = PTChild * 1.45);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 50000 && income < 51001) {
    totalfamily =
      (FTInfants = FTInfants * 1.82) +
      (PTInfants = PTInfants * 1.47) +
      (FTChild = FTChild * 1.55) +
      (PTChild = PTChild * 1.3);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 51000 && income < 52001) {
    totalfamily =
      (FTInfants = FTInfants * 1.6) +
      (PTInfants = PTInfants * 1.32) +
      (FTChild = FTChild * 1.36) +
      (PTChild = PTChild * 1.16);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 52000 && income < 53001) {
    totalfamily =
      (FTInfants = FTInfants * 1.4) +
      (PTInfants = PTInfants * 1.19) +
      (FTChild = FTChild * 1.19) +
      (PTChild = PTChild * 1.04);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 53000 && income < 54001) {
    totalfamily =
      (FTInfants = FTInfants * 1.23) +
      (PTInfants = PTInfants * 1.06) +
      (FTChild = FTChild * 1.04) +
      (PTChild = PTChild * 0.94);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 54000 && income < 55001) {
    totalfamily =
      (FTInfants = FTInfants * 1.08) +
      (PTInfants = PTInfants * 0.95) +
      (FTChild = FTChild * 0.92) +
      (PTChild = PTChild * 0.84);
    form.family.value = totalfamily.toFixed(2);
    monthly = FTInfants * FTIdays + PTInfants * PTIdays + FTChild * FTCdays + PTChild * PTCdays;
    form.monthly.value = monthly.toFixed(2);
    form.yearly.value = (monthly * 12).toFixed(2);
    ok++;
  }
  if (income > 55000) {
    form.family.value = form.monthly.value = form.yearly.value = '0.00';
    ok++;
  }
}

function UpFTInfants() {
  document.getElementById('1').selected = 'true';
  if (document.getElementById('FTInfants').value == 5) {
    return false;
  } else {
    document.getElementById('FTInfants').innerHTML = document.getElementById('FTInfants').value++;
  }
}

function DownFTInfants() {
  if (document.getElementById('FTInfants').value == 0) {
    return false;
  } else {
    document.getElementById('FTInfants').innerHTML = document.getElementById('FTInfants').value--;
  }
  if (document.getElementById('FTInfants').value == 0) {
    document.getElementById('0').selected = 'true';
  }
}

function UpPTInfants() {
  document.getElementById('7').selected = 'true';
  if (document.getElementById('PTInfants').value == 5) {
    return false;
  } else {
    document.getElementById('PTInfants').innerHTML = document.getElementById('PTInfants').value++;
  }
}

function DownPTInfants() {
  if (document.getElementById('PTInfants').value == 0) {
    return false;
  } else {
    document.getElementById('PTInfants').innerHTML = document.getElementById('PTInfants').value--;
  }
  if (document.getElementById('PTInfants').value == 0) {
    document.getElementById('6').selected = 'true';
  }
}

function UpFTChild() {
  document.getElementById('13').selected = 'true';
  if (document.getElementById('FTChild').value == 10) {
    return false;
  } else {
    document.getElementById('FTChild').innerHTML = document.getElementById('FTChild').value++;
  }
}

function DownFTChild() {
  if (document.getElementById('FTChild').value == 0) {
    return false;
  } else {
    document.getElementById('FTChild').innerHTML = document.getElementById('FTChild').value--;
  }
  if (document.getElementById('FTChild').value == 0) {
    document.getElementById('12').selected = 'true';
  }
}

function UpPTChild() {
  document.getElementById('18').selected = 'true';
  if (document.getElementById('PTChild').value == 10) {
    return false;
  } else {
    document.getElementById('PTChild').innerHTML = document.getElementById('PTChild').value++;
  }
}

function DownPTChild() {
  if (document.getElementById('PTChild').value == 0) {
    return false;
  } else {
    document.getElementById('PTChild').innerHTML = document.getElementById('PTChild').value--;
  }
  if (document.getElementById('PTChild').value == 0) {
    document.getElementById('17').selected = 'true';
  }
}

/* END of dap_cal.js*/
