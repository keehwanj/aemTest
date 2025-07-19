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

%>
<!--START of search_box-->
<div id="service_box">
  <form action="<%=resultsPath%>.html" class="form-horizontal"  id="searchForm_" onSubmit="return validate(this);" name="search_form" role="form">
    <input type="hidden" name="_charset_" value="utf-8">
    <input id="start" name="start" type="hidden" value="0"/>
    <input id="hits" name="hits" type="hidden" value="25"/>
    <div class="panel panel-default serviceSearchInput_title">
      <div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <%=searchheader%></div>
    </div>

    <div class="input-group">
      <input type="text" name="keyword" aria-labelledby="keyword" class="form-control servicekeyword" id="keyword" value="" placeholder="<%=inputkeyword%>" onclick="this.value='';">
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit"> <i class="glyphicon glyphicon-search"></i> <span class="sr-only"><%=searchbutton%></span> </button>
      </div>
    </div>
  </form>
</div>
<!--END of search_box-->