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
    //out.write(localizedImagePath);
    if (lang=="fr") {
        localizedImagePath += "fr/";
    }
    String inputValue="";
    if(Utils.isNotEmpty(request.getParameter("q"))) inputValue = request.getParameter("q");
%>
 <cq:setContentBundle language="<%=lang%>" />

<div id="search_box">
    <form name=nqgs action="" id="searchForm" onsubmit="if(this.q.value=='')return false;return true">
      <div class="title"><fmt:message key="searchTitle_bitp"/></div>
      <input type="text" name="q" class="searchText"  maxlength=2048 onclick="this.value='';" value="<%=inputValue %>"/>
      <%if(lang=="fr") { %>
        <input type="hidden" name="cx" value="013380799247391142859:8i0ekuh5tla" />
      <%}else{ %>
        <input type="hidden" name="cx" value="013380799247391142859:xtf99edzly8" />
      <%} %>
      <input type=hidden name=as_sitesearch  value="">
      <input type="hidden" name="cof" value="FORID:11" />
      <input type="hidden" name="ie" value="UTF-8" />
      <input type="image" class="searchButton" name="sa" value="<fmt:message key="searchButtonText"/>"  alt="<fmt:message key="searchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />
    </form>
    <script type="text/javascript" src="http://www.google.com/coop/cse/brand?form=cse-search-box&amp;lang=<%=lang%>"></script>
</div>

<div id="search_results">
       <div id="cse-search-results"></div>
       <script type="text/javascript">
        var googleSearchIframeName = "cse-search-results";
        var googleSearchFormName = "nqgs";
        var googleSearchFrameWidth = 700;
        var googleSearchFrameHeight = 1050;
        var googleSearchDomain = "www.google.com";
        var googleSearchPath = "/cse";
        var googleSearchResizeIframe = true;
      </script>
      <script type="text/javascript" src="http://www.google.com/afsonline/show_afs_search.js"></script>
</div>

<div class="clearfloats"></div>