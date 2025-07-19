    google.load('visualization', '1', {packages:['orgchart']}); 

    jQuery(document).ready(function($)
    {
        $('#mainnav a:has(br)').add('#departmentNav a:has(br)').css({
            'font-size': '85%',
            'line-height': '1.07em',
            'height': '34px',
            'padding-top': '6px'
        });

        $('div.table table').attr("border","0");
    });