<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%
  // Get language and content bundle for that language
  String lang = "fr";
  String tagSuffix = "-fra";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }
%>  
<cq:setContentBundle language="<%=lang%>" />
<%

//result path
String resultsPath;
if (properties.get("searchResultsPath", "").length() > 0) {
   	resultsPath = properties.get("searchResultsPath", "");
   	if (!Utils.isNotEmpty(resultsPath)) {
   		log.warn("No path for search results path.");
   	}
}
else{
	resultsPath=currentPage.getPath();
}

//search button text
String searchbutton;
if (properties.get("searchbutton", "").length() > 0) {
    searchbutton = properties.get("searchbutton", "");
    if (!Utils.isNotEmpty(searchbutton)) {
      log.warn("No search button text");
    }
}
else{
	searchbutton=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "contactSearchButtonText"));
}

//searchheader
String searchheader;
if (properties.get("searchheader", "").length() > 0) {
    searchheader = properties.get("searchheader", "");
    if (!Utils.isNotEmpty(searchheader)) {
      log.warn("No search searchheader");
    }
}
else{
	searchheader=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "serviceSearchTitle"));
}

//inputkeyword
String inputkeyword;
if (properties.get("inputkeyword", "").length() > 0) {
    inputkeyword = properties.get("inputkeyword", "");
    if (!Utils.isNotEmpty(inputkeyword)) {
      log.warn("No inputkeyword");
    }
}
else{
	inputkeyword=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "keyword"));
}

//getting hidetitle_a property
boolean hidetitle_a = false;
if (properties.get("hidetitle_a", "").length() > 0) {
   	hidetitle_a = properties.get("hidetitle_a", true);
}

%>


<!--START of search_box-->
<div id="service_box" style="background-color: white;">
  <!--START of form-->  
  <form action="<%=resultsPath%>.html" class="form-horizontal"  id="searchForm_" onSubmit="return validate(this);" name="search_form" role="form">
    <input type="hidden" name="_charset_" value="utf-8">
    <input id="start" name="start" type="hidden" value="0"/>
    <input id="hits" name="hits" type="hidden" value="25"/>
    <!--START of serviceSearchInput_title-->    
	<%if(hidetitle_a==false){%>
    	<div class="panel panel-default serviceSearchInput_title hidden-xs">
      		<div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <%=searchheader%></div>
    	</div>
    <%}%>  
	<!--END of serviceSearchInput_title-->    

    <!--START of input-group-->  
    <div class="input-group">
      <input type="text" name="keyword" aria-labelledby="service_auto" class="form-control servicekeyword" id="service_auto" value="" placeholder="<%=inputkeyword%>">
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit" id="btnSearch_body"> <i class="glyphicon glyphicon-search"></i> <span class="sr-only"><%=searchbutton%></span> </button>
      </div>
    </div>
    <!--END of input-group-->    
  </form>
  <!--END of form-->    
</div>
<!--END of search_box-->

<!-- START autocomplete Javascript -->
<script>
$(function() {
    var fullpath = location.pathname;
    var pathsplit = fullpath.split(".");
    //getting path without selectors
    var path = pathsplit[0] + ".html";
    var auto_service_search = path.replace(".html", "/_jcr_content.auto_service_search");

    $("#service_auto").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: auto_service_search,
                dataType: "json",
                data: {
                    term: request.term
                },
                success: function(result) {
                    response(
                        $.map(result, function(item) {
                            return {
                                label: item.data,
                                value: item.data
                            }
                        })
                    );
                }
            });
        },
        minLength: 1,
        select: function(event, ui) {
      		$(this).closest('input').val(ui.item.value);
            //$(this).closest('form').trigger('submit');
            $('#btnSearch_body').click();
        }
    });
})
</script>
<!-- END autocompleteJavascript -->
