<%@include file="/libs/wcm/global.jsp"%>

<div id='calendar'>
  <div style="position: absolute; display: none;" id='eventdisplay'>
  </div>
</div>   

<%if(true){ %>
  <script type='text/javascript' src='/etc/designs/bitp/js/date_en.js'></script>
<% } else {%>
  <script type='text/javascript' src='/etc/designs/bitp/js/date_fr.js'></script>
<% } %>
<script type='text/javascript' src='/etc/designs/bitp/js/fullcalendar.js'></script>

    
<script type='text/javascript'>

    $(document).ready(function() {
        
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();          

        var monthFull = monthNames;
        var monthShort = monthNamesShort;
        var dayFull = dayNames;
        var dayShort = dayNamesMin;
                        
        var jsonevents = [];
        
        $('#calendar').fullCalendar({
            editable: false,
            weekMode: 'liquid',
            monthNames: monthFull,
            monthNamesShort: monthShort,
            dayNames: dayFull,
            dayNamesShort: dayShort,
            header: {
                left: 'title',
                center: '',
                right: ''
            },
            titleFormat: {
                month: 'MMM, yyyy',
                week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
                day: 'dddd, MMM d, yyyy'
            },                       
            events: getEvents(),
            eventMouseover: function(calEvent, jsEvent, view) {                
            	var startDate = new Date(calEvent.start);
            	var endDate = new Date(calEvent.end);            	
                var tabledata = "<table id='eventtable'>";
                tabledata += "<tr class='header'><td>&nbsp;</td><td/><td>&nbsp;</td></tr>";
                tabledata += "<tr><td>&nbsp;</td><td class='title'>" + calEvent.title + "</td><td>&nbsp;</td></tr>";
                tabledata += "<tr><td>&nbsp;</td><td class='info'>";
                tabledata += startDate.getHours() + ":" + startDate.getMinutes();
                tabledata += " - ";
                tabledata += endDate.getHours() + ":" + endDate.getMinutes();
                tabledata += "</td><td>&nbsp;</td></tr>";
                tabledata += "<tr class='footer'><td/><td/><td/></tr>";
                tabledata += "</table>";                               
                $('#eventdisplay').html(tabledata);                
                $('#eventdisplay').css( { "left": getLeftPositionWidth(jsEvent.pageX, 959) + "px", "top":jsEvent.pageY + "px" } );
                $('#eventdisplay').show();
            },
            eventMouseout: function(calEvent, jsEvent, view) {
            	$('#eventdisplay').hide();
            }            
                    
        });
              
    });

    function getEvents(){
    	var req = null;                
        if(window.XMLHttpRequest)
             req = new XMLHttpRequest();
         else if (window.ActiveXObject)
             req  = new ActiveXObject(Microsoft.XMLHTTP);
        var url = "/apps/bitp/content/calendar.json";
        req.open("GET",url, false);  
        req.send();          
        return jQuery.parseJSON(req.responseText);
    }

    function getLeftPositionWidth(currentPosition, contentWidth) {
    	  var myWidth = 0;
    	  if( typeof( window.innerWidth ) == 'number' ) {
    	    //Non-IE
    	    myWidth = window.innerWidth;    	    
    	  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    	    //IE 6+ in 'standards compliant mode'
    	    myWidth = document.documentElement.clientWidth;    	    
    	  }
    	   
    	  return currentPosition - (myWidth-contentWidth)/2;
    }
</script>