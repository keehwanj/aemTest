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
%>
<cq:setContentBundle language="<%=lang%>" />

<!--START of globalsitesearch row--> 
<div class="row">
	<div class="col-sm-8">
        <div id="search_box">
			<div class="panel panel-default">
				<div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="searchTitle"/></div>
			</div>

    		<form name=nqgs action="" id="searchForm" onsubmit="if(this.q.value=='')return false;return true">
				<!--START last name -->
  				<div class="form-group">
    				<label for="q"> </label>
    				<div class="col-sm-12">
      					
                        <input type="text" class="form-control" name="q" class="searchText"  maxlength=2048  value="<%=inputValue %>">
    				</div>
  				</div>   
            	<!--END last name -->


      			<%if(lang=="fr") { %>
        			<input type="hidden" name="cx" value="004686105439310941724:htfkrpmgd14" />
      			<%}else{ %>
        			<input type="hidden" name="cx" value="004686105439310941724:3leejyo91sk" />
      			<%} %>
      			<input type=hidden name=as_sitesearch  value="">
      			<input type="hidden" name="cof" value="FORID:11" />
      			<input type="hidden" name="ie" value="UTF-8" />
      			<!--<input type="image" class="searchButton" name="sa" value="<fmt:message key="searchButtonText"/>"  alt="<fmt:message key="searchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />-->

                <button type="submit" class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="searchButtonText"/></button>
    		</form>
    		<script type="text/javascript" src="//www.google.com/coop/cse/brand?form=cse-search-box&amp;lang=<%=lang%>"></script>
		</div>
    </div>
    <div class="col-sm-4">
		<div id="sidebar">
    		<cq:include path="mainContent_par_snb" resourceType="foundation/components/parsys"/>
		</div>
    </div>
</div>
<!--END of globalsitesearch row--> 




<!--START of row--> 
<div class="row">
	<div class="col-sm-12">
		<%if(lang=="fr") { %>
    		<div id="cse" style="width: 100%;">Bourrage</div>
		<%}else{ %>
    		<div id="cse" style="width: 100%;">Loading</div>
	<%} %>

<script src="//www.google.com/jsapi" type="text/javascript"></script><br />
<script type="text/javascript"> 
<%if(lang=="fr") { %>
  google.load('search', '1', {language : 'fr', style : google.loader.themes.V2_DEFAULT});
<%}else{ %>
  google.load('search', '1', {language : 'en', style : google.loader.themes.V2_DEFAULT});
<%} %>
  google.setOnLoadCallback(function() {
    var customSearchOptions = {};

    var orderByOptions = {};

<%if(lang=="fr") { %>
    orderByOptions['keys'] = [{label: 'Relevance', key: ''},{label: 'Date', key: 'date'}];
<%}else{ %>
    orderByOptions['keys'] = [{label: 'Relevance', key: ''},{label: 'Date', key: 'date'}];
<%} %>

    customSearchOptions['enableOrderBy'] = false;
    customSearchOptions['orderByOptions'] = orderByOptions;

    var imageSearchOptions = {};
    imageSearchOptions['layout'] = google.search.ImageSearch.LAYOUT_CLASSIC;
    customSearchOptions['enableImageSearch'] = true;
    customSearchOptions['imageSearchOptions'] = imageSearchOptions;

    var googleAnalyticsOptions = {};
    googleAnalyticsOptions['queryParameter'] = 'q';
    googleAnalyticsOptions['categoryParameter'] = '';

<%if(lang=="fr") { %>
    customSearchOptions['googleAnalyticsOptions'] = googleAnalyticsOptions;  var customSearchControl = new google.search.CustomSearchControl(
      '004686105439310941724:htfkrpmgd14', customSearchOptions);
<%}else{ %>
    customSearchOptions['googleAnalyticsOptions'] = googleAnalyticsOptions;  var customSearchControl = new google.search.CustomSearchControl(
      '004686105439310941724:3leejyo91sk', customSearchOptions);
<%} %>

    customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);

    var options = new google.search.DrawOptions();
    options.setAutoComplete(true);
<%if(lang=="fr") { %>
    customSearchControl.setAutoCompletionId('004686105439310941724:htfkrpmgd14+qptype:1');
<%}else{ %>
    customSearchControl.setAutoCompletionId('004686105439310941724:3leejyo91sk+qptype:1');
<%} %>

    options.enableSearchResultsOnly(); 
    customSearchControl.draw('cse', options);
    function parseParamsFromUrl() {
      var params = {};
      var parts = window.location.search.substr(1).split('\x26');
      for (var i = 0; i < parts.length; i++) {
        var keyValuePair = parts[i].split('=');
        var key = decodeURIComponent(keyValuePair[0]);
        params[key] = keyValuePair[1] ?
            decodeURIComponent(keyValuePair[1].replace(/\+/g, ' ')) :
            keyValuePair[1];
      }
      return params;
    }

    var urlParams = parseParamsFromUrl();
    var queryParamName = "q";
    if (urlParams[queryParamName]) {
      customSearchControl.execute(urlParams[queryParamName]);
    }
  }, true);
</script>

	</div>
</div>
<!--END of row--> 