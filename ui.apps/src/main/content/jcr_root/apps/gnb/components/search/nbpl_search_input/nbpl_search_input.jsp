<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.text.NumberFormat"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%
  // Get language and content bundle for that language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
  lang = "en";
}
%>
<cq:setContentBundle language="<%=lang%>" />
<%

  // Account for localized images
  String imagePath = currentDesign.getPath() + "/images/";
  String localizedImagePath = imagePath;
  if (lang == "fr") {
    localizedImagePath += "fr/";
  }
  
//general tap
String destination = properties.get("destination", "http://www.gnb.ca");
if(destination.startsWith("/")){
    destination=destination+".html";
}

String parameter = properties.get("parameter", "q");

//box tap
String inputText = properties.get("inputText", "");
//setting header text for English/French
if(inputText.equalsIgnoreCase("")){
    inputText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "input_text"));
} 

%>

<div class="nbpl_search_box" style="text-align: center;"> <br />
  <form name="nqgs" action="<%=destination%>" id="searchForm" onsubmit="if(this.q.value=='')return false;return true">
	<input type="text" name="<%=parameter%>" class="form-control nbpl_input" value="<%=inputText%>" placeholder="<%=inputText%>" onclick="this.value='';">

    <!--<input type="text" name="<%=parameter%>" class="nbpl_input" maxlength="2048" onclick="this.value='';" value="<%=inputText%>">-->
    <input type="hidden" name="ie" value="UTF-8">
    <input type="hidden" name="t" value="smart">      
    <input type="hidden" name="locale" value="<%=lang%>-CA">            
    <br />
    <!--<input type="image" id="searchButton" value="<fmt:message key="searchButtonText"/>" alt="<fmt:message key="newsSearchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />-->
	<!--START of submit button-->    
    <button type="submit" class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="searchButtonText"/></button>
    <!--END of submit button-->   



    <br />
  </form>
</div>