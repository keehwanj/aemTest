/**START of date_en.js**/
$(document).ready(function () {
  $(".dates").datepicker({
    dateFormat: "dd/mm/yy",
    changeYear: "true",
    changeMonth: "true",
    yearRange: "2000:2100",
    maxDate: "+0",
    showOn: "both",
    buttonImageOnly: true,
  });
});

/**END of date_en.js**/
