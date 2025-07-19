  $(document).ready(function() {
    $(".dates").datepicker({
      dateFormat: 'dd/mm/yy',
      changeYear: 'true', 
      changeMonth: 'true',       
      yearRange: '2000:2100',
      maxDate:'+0',
      showOn: 'both',
      buttonImageOnly: true, 
      dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
      dayNamesMin: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
      monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
      monthNamesShort: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
      prevText: 'Mois précédent',
      nextText: 'Le mois prochain',
      closeText: 'Fin'        
    });

  });