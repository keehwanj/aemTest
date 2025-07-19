<%@include file="/libs/wcm/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="org.slf4j.Logger"%>

<%
    // Get language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if ((locale==null) || (locale.getLanguage().equalsIgnoreCase("en"))){
	lang="en";
}
%>
<cq:setContentBundle language="<%=lang%>" />

<%    

//result path
String path_g;
if (properties.get("path_g", "").length() > 0) {
   	path_g = properties.get("path_g", "");
    if(path_g.contains(".html")){
		path_g=path_g;
    }else{
		path_g=path_g+".html";
    }


   	if (!Utils.isNotEmpty(path_g)) {
   		log.warn("No path for search results path.");
   	}
}
else{
	path_g=currentPage.getPath();
}

//search button text
String searchbutton_g;
if (properties.get("searchbutton_g", "").length() > 0) {
    searchbutton_g = properties.get("searchbutton_g", "");
    if (!Utils.isNotEmpty(searchbutton_g)) {
      log.warn("No search button text");
    }
}
else{
	searchbutton_g=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "contactSearchButtonText"));
}

//searchheader
String searchheader_g;
if (properties.get("searchheader_g", "").length() > 0) {
    searchheader_g = properties.get("searchheader_g", "");
    if (!Utils.isNotEmpty(searchheader_g)) {
      log.warn("No search searchheader");
    }
}
else{
	searchheader_g=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "serviceSearchTitle"));
}

//inputkeyword
String inputkeyword_g;
if (properties.get("inputkeyword_g", "").length() > 0) {
    inputkeyword_g = properties.get("inputkeyword_g", "");
    if (!Utils.isNotEmpty(inputkeyword_g)) {
      log.warn("No inputkeyword");
    }
}
else{
	inputkeyword_g=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "keyword"));
}

%>
<div id="service_box">

  <form action="<%=path_g%>" class="form-horizontal"  id="keyword_search_form" onsubmit="if(this.q.value=='')return false;return true" method="get" name="search_form" role="form">


     <div class="panel panel-default globalSearchInput_title">
      <div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <%=searchheader_g%></div>
    </div>

    <div class="input-group">
    	<input type="text" aria-labelledby="q" class="form-control servicekeyword" name="q" placeholder="<%=inputkeyword_g%>" id="q" list="snb-service-ac" />
        <datalist id="snb-service-ac"> </datalist>
		<%if(lang=="fr") { %>
			<input type="hidden" name="cx" value="004686105439310941724:htfkrpmgd14" />
		<%}else{ %>
			<input type="hidden" name="cx" value="004686105439310941724:3leejyo91sk" />
		<%} %>
    	<input type=hidden name=as_sitesearch  value="" />
    	<input type="hidden" name="cof" value="FORID:11" /> 
    	<input type="hidden" name="ie" value="UTF-8" />


      <div class="input-group-btn">
        <button class="btn btn-default" type="submit"> <i class="glyphicon glyphicon-search"></i> <span class="sr-only"><%=searchbutton_g%></span> </button>
      </div>


    </div>
  </form>
</div>