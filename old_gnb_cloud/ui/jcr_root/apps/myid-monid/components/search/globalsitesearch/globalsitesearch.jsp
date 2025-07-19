<%--
  ==============================================================================

  Services Search component

  Draws the search form and evaluates a query

--%>
<%@include file="/libs/wcm/global.jsp" %>
<%@page import="java.util.Locale"%>

<%@page import="com.t4g.cnb.utils.Utils"%>
<%
    // Get language and content bundle for that language
    String lang = "fr";
    Locale locale = currentPage.getLanguage(true);
    if ((locale==null) || (locale.getLanguage().equalsIgnoreCase("en"))){
        lang="en";
    }
    
    // Account for localized images
    String imagePath = "/etc/designs/gnb/images/";
    String localizedImagePath = imagePath;
    if (lang=="fr") {
        localizedImagePath += "fr/";
    }
    String inputValue="";
    if(Utils.isNotEmpty(request.getParameter("q"))) {
        //inputValue = request.getParameter("q");
        inputValue=new String(request.getParameter("q").getBytes("iso-8859-1"), "UTF-8");
        //for xss attacks
		inputValue = xssAPI.encodeForHTML(inputValue);   

        //for french accent issues      
        inputValue = new String(inputValue.getBytes("UTF-8"), "UTF-8");         
        inputValue = inputValue.replace("À","&#192;"); 
        inputValue = inputValue.replace("Â","&#194;");         
        inputValue = inputValue.replace("Ä","&#196;");      
        inputValue = inputValue.replace("È","&#200;");              
        inputValue = inputValue.replace("É","&#201;");              
        inputValue = inputValue.replace("Ê","&#202;");              
        inputValue = inputValue.replace("Ë","&#203;");              
        inputValue = inputValue.replace("Î","&#206;");              
        inputValue = inputValue.replace("Ï","&#207;");              
        inputValue = inputValue.replace("Ô","&#212;");              
        inputValue = inputValue.replace("Œ","&#140;");              
        inputValue = inputValue.replace("Ù","&#217;");              
        inputValue = inputValue.replace("Û","&#219;");              
        inputValue = inputValue.replace("Ü","&#220;");              
        inputValue = inputValue.replace("Ÿ","&#159;");              

        inputValue = inputValue.replace("à","&#224;"); 
        inputValue = inputValue.replace("â","&#226;");         
        inputValue = inputValue.replace("ä","&#228;");      
        inputValue = inputValue.replace("è","&#232;");              
        inputValue = inputValue.replace("é","&#233;");              
        inputValue = inputValue.replace("ê","&#234;");              
        inputValue = inputValue.replace("ë","&#235;");        

        inputValue = inputValue.replace("ì","&#236;");               
        
        inputValue = inputValue.replace("î","&#238;");              
        inputValue = inputValue.replace("ï","&#239;");              
        inputValue = inputValue.replace("ô","&#244;");              
        inputValue = inputValue.replace("œ","&#156;");              
        inputValue = inputValue.replace("ù","&#249;");              
        inputValue = inputValue.replace("û","&#251;");              
        inputValue = inputValue.replace("ü","&#252;");              
        inputValue = inputValue.replace("ÿ","&#255;");            

        inputValue = inputValue.replace("Ç","&#199;");            
        inputValue = inputValue.replace("ç","&#231;");            

        inputValue = inputValue.replace("«","&#171;");            
        inputValue = inputValue.replace("»","&#187;");       
        inputValue = inputValue.replace("€","&#128;");    
    }
String partnerid = "004686105439310941724:htfkrpmgd14";
if(lang=="en"){
	partnerid = "004686105439310941724:3leejyo91sk";
}
%>
<cq:setContentBundle language="<%=lang%>" />
<!--START of css--> 
<style>
.gsc-control-cse .gsc-option-selector {
    right: 15px;
}
</style>
<!--END of css--> 

<!--START of globalsitesearch row--> 
<div class="row">
	<div class="col-sm-8">
        <div id="search_box">
			<div class="panel panel-default">
				<div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="searchTitle"/></div>
			</div>
			<!--START of form-->
			<!--START of form-->
    		<form name=nqgs action="" id="searchForm" onsubmit="if(this.q.value=='')return false;return true">
				<!--START last name -->
  				<div class="form-group">
    				<label for="q"> </label>
    				<div class="col-sm-12">
      					
                        <input type="text" class="form-control" name="q" class="searchText"  maxlength=2048  value="<%=inputValue %>" id="q_main">
    				</div>
  				</div>   
            	<!--END last name -->


      			<%if(lang=="fr") { %>
        			<input type="hidden" name="cx" value="<%=partnerid%>" />
      			<%}else{ %>
        			<input type="hidden" name="cx" value="<%=partnerid%>" />
      			<%} %>
      			<input type=hidden name=as_sitesearch  value="">
      			<input type="hidden" name="cof" value="FORID:11" />
      			<input type="hidden" name="ie" value="UTF-8" />
      			<!--<input type="image" class="searchButton" name="sa" value="<fmt:message key="searchButtonText"/>"  alt="<fmt:message key="searchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />-->

                <button type="submit" class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="searchButtonText"/></button>
    		</form>
            <!--END of form-->
            <!--END of form-->

		</div>
    </div>
    <div class="col-sm-4">
		<div id="sidebar">
    		<cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
		</div>
    </div>
</div>
<!--END of globalsitesearch row--> 




<!--START of row--> 
<div class="row">
	<div class="col-sm-12">
<gcse:searchresults-only></gcse:searchresults-only>

    </div>
</div>
<!--END of row--> 
<script>
(function() {
  var cx = '<%=partnerid%>'; // Insert your own Custom Search Engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
  gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();
</script>

<!-- START css/js for all auto complete -->
<!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.2/css/lightness/jquery-ui-1.10.2.custom.min.css"/>-->
<!--<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>-->
<style>
/**
.ui-autocomplete li.ui-menu-item{
	font-size : 90%;
}**/
</style>
<script>
$(function () {
  $("#q_main").autocomplete({
      source: function (request, response) {
        $.ajax({
          url: "//clients1.google.com/complete/search?q=" + request.term + "&hl=<%=lang%>&client=partner&source=gcsc&partnerid=<%=partnerid%>&ds=cse&nocache=" + Math.random().toString(),
          dataType: "jsonp",
          success: function (data) {
            response($.map(data[1], function (item) {
              return {
                label: item[0],
                value: item[0]
              };
            }));
          }
        });
      },
      autoFill: true,
      minChars: 0,
      select: function (event, ui) {
      $(this).closest('input').val(ui.item.value);
      $(this).closest('form').trigger('submit');
      }
    });
});
</script>
<!-- END css/js for all auto complete -->