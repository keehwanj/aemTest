/* START of dap_cal.js
 * /apps/gnb/components/content/prorated_salary_leave/clientlibs/js/prorated_salary_leave.js
 */

(function () {
  function calculatePayDeductions(gbwp, dto, pd) {
    gbwp = parseFloat(gbwp);
    dto = parseFloat(dto);
    pd = parseFloat(pd);
    return (((gbwp / 10) * dto) / pd).toFixed(2);
  }

  var PayDeduction = document.getElementById('dprl');
  if (PayDeduction) {
    PayDeduction.onsubmit = function () {
      this.dpp.value = calculatePayDeductions(this.gbwp.value, this.dto.value, this.pd.value);
      return false;
    };
  }
})();

/* END of prorated_salary_leave.js*/
