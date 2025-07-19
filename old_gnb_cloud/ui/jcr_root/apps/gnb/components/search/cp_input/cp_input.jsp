<%@include file = "/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.wcm.api.components.DropTarget"%>
<%@page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<cq:include script="init.jsp" /> 


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
/** BUG FIX: If the parent Page is not defined, the list returns empty 
This is because, List.java defaults the empty parentPage to retrieve relativeParent(3) which
might not always be right incase this component is deep down the hierarchy
This fix, sets the parentPagePath to currentPage if the path is not defined
through the dialog 
*/
try {
    String path = properties.get("parentPage", "");
    if (path.equals("")) {
        currentNode.setProperty("parentPage", currentPage.getPath());
        currentNode.save();
    }
} catch (Exception e){}


//data type setting
String cp_searchHeadingText = properties.get("title_Text", "");
if(cp_searchHeadingText.equalsIgnoreCase("")){
    cp_searchHeadingText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "cp_searchHeadingText"));
} 


String cp_searchWarning = properties.get("cp_searchWarning_Text", "");
if(cp_searchWarning.equalsIgnoreCase("")){
    cp_searchWarning=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "cp_searchWarning"));
} 

String renderer_page = properties.get("renderer_page", "");

  // Account for localized images
String imagePath = "/etc/designs/gnb-bootstrap/clientlibs/images/";
String localizedImagePath = imagePath;
if (lang == "fr") {
  localizedImagePath += "fr/";
}

List list = (List) request.getAttribute("list");
if (!list.isEmpty()) {
    Iterator<Page> items = list.getPages();

%>
    <div class="image_box"> 
  <div class="panel panel-default">
    <div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="<%=cp_searchHeadingText%>"/></div>
  </div>
    <!--<div class="search_header"><div class="rightcurve">&nbsp;</div><h3><fmt:message key="<%=cp_searchHeadingText%>"/></h3></div>-->
	<!--<form id="cp_search_input" name="CNB_searchMM" title="<fmt:message key="<%=cp_searchHeadingText%>"/>">-->

	<form id="cp_search_input" name="cp_search_input" title="<fmt:message key="<%=cp_searchHeadingText%>"/>">

<div class="form-group">
    <label for="selector"><fmt:message key="<%=cp_searchWarning%>"/></label>
        <!--<p><fmt:message key="<%=cp_searchWarning%>"/></p>-->
          <div class="clearfloat"></div>
          <select class="form-control" name="selector" id="selector" title="<%=cp_searchHeadingText%>">
              <option value=""><fmt:message key="cp_select" /></option>

    <%
    while (items.hasNext()) {
        Page item = items.next();
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
        ValueMap props = itemPage.getProperties();

        String[] selectors = itemPage.getPath().split("/");
        String href="";
        String selector="";        
        if(selectors.length>0){
            selector = String.format("%s.%s.%s", selectors[4], selectors[5], selectors[6]);
            href = String.format("%s.%s", renderer_page, selector);
            href = href+".html";
        }
        String community_name = (String) props.get(lang+"_community_name"); 
        %>
        <option value="<%=href%>"><%=community_name%></option>    
        <%
    }//end of while
    %>
       </select>
    </div> 
          <div class="clearfloat"></div>
          <a href="#Go" onclick="javascript:formHandler()">
		  <!--<img id="searchButton" alt="<fmt:message key="cp_searchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif"  border="0" value="Go"/>-->
    	  <!--<button class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="searchButtonText"/></button>-->    
          <img class="displayed" id="searchButton" alt="<fmt:message key="cp_searchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif"  border="0"/>
          </a>    

          <div class="clearfloat"></div>
    </form> 
    </div> 
<%} 
else {%>
    <cq:include script="empty.jsp" /> 
<%}%>

<SCRIPT LANGUAGE="JavaScript" type="text/javascript">
function formHandler(form){
    //var URL = document.CNB_searchMM.selector.options[document.CNB_searchMM.selector.selectedIndex].value;
    var URL = document.cp_search_input.selector.options[document.cp_search_input.selector.selectedIndex].value;
    if(URL!=""){
        window.location.href = URL;    
    }
    else{
        return false;
    }
}
// End -->
</SCRIPT>