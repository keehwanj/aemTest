<%@include file="/libs/wcm/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.text.NumberFormat"%>

<%
  // Get language and content bundle for that language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
  lang = "en";
}
%>
<script src="/etc/designs/gnb/js/date_<%=lang%>.js" type="text/javascript"></script>
<%
String s=currentStyle.get("hcSearchResultsPath", "");

NumberFormat numberFormatter;
NumberFormat nf = NumberFormat.getCurrencyInstance();
nf.setMaximumFractionDigits(0);

  String resultsPath = properties.get("hcSearchResultsPath", "");
if (resultsPath.length() > 0) {
  if (!Utils.isNotEmpty(resultsPath)) {
    log.warn("No path for health career search results path.");
  }
  // Account for localized images
  String imagePath = currentDesign.getPath() + "/images/";
  String localizedImagePath = imagePath;
  if (lang == "fr") {
    localizedImagePath += "fr/";
  }%>
    <cq:setContentBundle language="<%=lang%>" />
<!--START of hc_year_searchinput form-->  
    <div class="image_box"> 
  <div class="panel panel-default">
    <div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="hc_searchInputHeadingText_year"/></div>
  </div> 
      <form id="hc_salary_search_input" action="<%=resultsPath%>.html" name="CNB_searchMM" title="<fmt:message key="hc_searchInputHeadingText_year"/>" >
          <input type="hidden" name="_charset_" value="utf-8">
          <p><fmt:message key="hc_SearchInputWarning_year"/></p>         
          <div class="clearfloat"></div>

		<!--START from/to searchinput-->
		<div class="input-group  input-group-sm">
		<!--START of from select-->    
		<select  name="year_from" id="year_from" class="form-control" required >
              <option value=""><fmt:message key="hcYears" /></option>
                <%for(int i=1;i<=15;i=i+1){%>
                    <option value="<%=i%>"><%=i%></option>            
                <%}%>
		</select>   
		<!--END of from select-->  
    		<span class="input-group-addon"><fmt:message key="searchToText"/></span>
		<!--START of to select-->    
		<select  name="year_to" id="year_to" class="form-control" required>
              <option value=""><fmt:message key="hcYears" /></option>
                <%for(int i=1;i<=15;i=i+1){%>
                    <option value="<%=i%>"><%=i%></option>            
                <%}%>
		</select>   
		<!--END of to select-->              
		</div>
		<!--END from/to searchinput-->  

        <!--START of submit button-->    
    	<button type="submit" class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="searchButtonText"/></button>    
        <!--END of submit button-->            

    </form> 
    </div> 
<!--END of hc_year_searchinput form-->  
<%
 } 
else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {%>
    <img src="/libs/widgets/0.gif" class="cq-text-placeholder" alt=""><%
    } %>

