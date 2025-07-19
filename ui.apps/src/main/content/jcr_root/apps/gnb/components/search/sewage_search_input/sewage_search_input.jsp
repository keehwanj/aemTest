<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>


<%
  // Get language and content bundle for that language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
  lang = "en";
}
%>
<cq:setContentBundle language="<%=lang%>" />
<script src="/etc/designs/gnb/js/date_<%=lang%>.js" type="text/javascript"></script>
<%
String s=currentStyle.get("searchResultsPath", "");


//data type setting
String searchHeadingText = properties.get("title_Text", "");
if(searchHeadingText.equalsIgnoreCase("")){
    searchHeadingText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "searchInputHeadingText"));
} 


String searchWarningText = properties.get("searchWarning_Text", "");
if(searchWarningText.equalsIgnoreCase("")){
    searchWarningText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "searchInputWarningText"));
} 

String betweenText = properties.get("between_Text", "");
if(betweenText.equalsIgnoreCase("")){
    betweenText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "betweenText"));
} 

//selection Locale
String selectText = properties.get("select_Text", "");
if(selectText.equalsIgnoreCase("")){
    selectText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "selectText"));
} 

//data display
  String resultsPath = properties.get("searchResultsPath", "");
  
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
    <div class="image_box"> 
    <div class="search_header"><div class="rightcurve">&nbsp;</div><h3><fmt:message key="<%=searchHeadingText%>"/></h3></div>

      <form id="hc_salary_search_input" action="<%=resultsPath%>.html" name="CNB_searchMM" title="<fmt:message key="<%=searchHeadingText%>"/>" >
          <input type="hidden" name="_charset_" value="utf-8">
          <p><fmt:message key="<%=searchWarningText%>"/></p>       
          <div class="clearfloat"></div>

          <select name="region" id="region" width="5">
              <option value=""><fmt:message key="<%=selectText%>" /></option>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] region_value = properties.get("region_value", String[].class) ;
                        String[] region_text = properties.get("region_text", String[].class) ;                        
                        if(region_value!=null) 
                            {
                            for(int i=0;i<region_value.length;i++) 
                                {%>
                                  <option value="<%=region_value[i]%>"><%=region_text[i]%></option>                                   
                                <%}
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Region array part is wrong",ex);   
                        }
                    %>

          </select>
          <label><fmt:message key="<%=betweenText%>" /></label>                                                              

          <select name="type" id="type">
              <option value=""><fmt:message key="<%=selectText%>" /></option>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] nonconventional_value = properties.get("nonconventional_value", String[].class) ;
                        String[] nonconventional_text = properties.get("nonconventional_text", String[].class) ;                        
                        if(nonconventional_value!=null) 
                            {
                            for(int i=0;i<nonconventional_value.length;i++) 
                                {%>
                                  <option value="<%=nonconventional_value[i]%>"><%=nonconventional_text[i]%></option>                                   
                                <%}
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Non-Conventional License's array part is wrong",ex);   
                        }
                    %>
          </select>              

          <div class="clearfloat"></div>
          <input type="image" id="searchButton" value="<fmt:message key="searchButtonText"/>" alt="<fmt:message key="newsSearchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />
          <div class="clearfloat"></div>
    </form> 

    </div> 
    