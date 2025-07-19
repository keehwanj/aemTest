<%@include file="/libs/wcm/global.jsp" %>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.io.FileNotFoundException"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.tag.DepartmentValueComparator"%>
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
final String DATE_FORMAT = "en".equals(lang) ? "DD/MM/YYYY" : "JJ/MM/AAAA";
final String newsFromDate = Utils.nullReplace(slingRequest.getParameter("newsnewsFromDate"));
final String newsToDate = Utils.nullReplace(slingRequest.getParameter("newsToDate"));
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
<!--START of hc_salary_searchinput form-->  
<div class="image_box"> 
  <div class="panel panel-default">
    <div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="hc_searchInputHeadingText_salary"/></div>
  </div>        

      <form class="form-horizontal" id="hc_salary_search_input" action="<%=resultsPath%>.html" name="CNB_searchMM" title="<fmt:message key="hc_searchInputHeadingText_salary"/>" accept-charset="utf-8" role="form">
          <input type="hidden" name="_charset_" value="utf-8">
          <input id="defaultDateMsg" type="hidden" value="<fmt:message key="newsDateErrorMsg"/>" />         
          <p><fmt:message key="hc_SearchInputWarning_salary"/></p>         
          <div class="clearfloat"></div>

		<!--START from/to searchinput-->
		<div class="input-group  input-group-sm">
		<!--START of from select-->    
		<select  name="salary_from" id="salary_from" class="form-control" required >
              <option value=""><fmt:message key="hcSelect" /></option>
                <%for(int i=30000;i<=650000;i=i+10000){%>
                    <option value="<%=i%>"><%=nf.format(i)%></option>            
                <%}%> 
		</select>   
		<!--END of from select-->  
    		<span class="input-group-addon"><fmt:message key="searchToText"/></span>
		<!--START of to select-->    
		<select  name="salary_to" id="salary_to" class="form-control" required>
              <option value=""><fmt:message key="hcSelect" /></option>
                <%for(int i=30000;i<=650000;i=i+10000){%>
                    <option value="<%=i%>"><%=nf.format(i)%></option>            
                <%}%> 
		</select>   
		<!--END of to select-->              
		</div>
		<!--END from/to searchinput-->    

          <div class="clearfloat"></div>
        <!--START of submit button-->    
    	<button type="submit" class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="searchButtonText"/></button>    
        <!--END of submit button-->  


          
          <div class="clearfloat"></div>
    </form> 
    </div> 
<!--END of hc_salary_searchinput form-->  
<%
 } 
else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {%>
    <img src="/libs/widgets/0.gif" class="cq-text-placeholder" alt=""><%
    } %>
    