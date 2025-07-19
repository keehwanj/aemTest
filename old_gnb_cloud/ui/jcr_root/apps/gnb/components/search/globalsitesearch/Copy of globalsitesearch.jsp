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
    String encodedInputValue="";
    if(Utils.isNotEmpty(request.getParameter("q"))){
        inputValue = request.getParameter("q");
        //replace the accented characters with the html equiv. 
        encodedInputValue = new String(inputValue.getBytes("UTF-8"), "UTF-8");         
        encodedInputValue = encodedInputValue.replace("\u00C9","&#201;"); 
        encodedInputValue = encodedInputValue.replace("\u00E9","&#233;"); 
        encodedInputValue = encodedInputValue.replace("é","&#233;");  
        encodedInputValue = encodedInputValue.replace("\u00F4","&#244;");
        encodedInputValue = encodedInputValue.replace("\u00D4","&#212;");
        encodedInputValue = encodedInputValue.replace("\u00E8","&#232;");
        encodedInputValue = encodedInputValue.replace("\u00C8","&#200;");
        encodedInputValue = encodedInputValue.replace("\u00EE","&#238;");
        encodedInputValue = encodedInputValue.replace("\u00CE","&#206;");
        encodedInputValue = encodedInputValue.replace("\u00E0","&#224;");
        encodedInputValue = encodedInputValue.replace("\u00C7","&#199;");
        encodedInputValue = encodedInputValue.replace("\u00E7","&#231;");
        encodedInputValue = encodedInputValue.replace("\u00EA","&#234;");
        encodedInputValue = encodedInputValue.replace("\u00CA","&#202;");
        encodedInputValue = encodedInputValue.replace("\u00EB","&#235;");
        encodedInputValue = encodedInputValue.replace("\u00CB","&#203;");
        encodedInputValue = encodedInputValue.replace("\u00E2","&#226;");
        encodedInputValue = encodedInputValue.replace("\u00C2","&#194;");
        //replace the trademark tm character in the title 
        encodedInputValue = encodedInputValue.replace("\u2122","");                    
        //replace the squished oe character in the title 
        encodedInputValue = encodedInputValue.replace("\u0153","oe");
        //titleUnder = titleUnder.replace("œ","oe");
        //out.write("titleunder = " + titleUnder);
        //replace en dashes in the title with regular dashes  
        encodedInputValue = encodedInputValue.replace("\u2013","-"); 
        //replace left double curly quotes with nothing 
        encodedInputValue = encodedInputValue.replace("\u201C","");    
        //eliminate colons and semi-colons 
        encodedInputValue = encodedInputValue.replace(":","");  
        encodedInputValue = encodedInputValue.replace(";","");        
        out.write(encodedInputValue);
    } 
%>
 <cq:setContentBundle language="<%=lang%>" />

<div id="search_box">
    <form name=nqgs action="" id="searchForm" onsubmit="if(this.q.value=='')return false;return true">
      <div class="title"><fmt:message key="searchTitle"/></div>
      <input type="text" name="q" class="searchText"  maxlength=2048 onclick="this.value='';" value="<%=encodedInputValue %>"/>
      <%if(lang=="fr") { %>
        <input type="hidden" name="cx" value="004686105439310941724:htfkrpmgd14" />
      <%}else{ %>
        <input type="hidden" name="cx" value="004686105439310941724:3leejyo91sk" />
      <%} %>
      <input type=hidden name=as_sitesearch  value="">
      <input type="hidden" name="cof" value="FORID:11" />
      <input type="hidden" name="ie" value="UTF-8" />
      <input type="image" class="searchButton" name="sa" value="<fmt:message key="searchButtonText"/>"  alt="<fmt:message key="searchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />
    </form>
    <script type="text/javascript" src="http://www.google.com/coop/cse/brand?form=cse-search-box&amp;lang=<%=lang%>"></script>
</div>
<div class="clearfloats"></div>
<div id="search_results">
       <div id="cse-search-results"></div>
       <script type="text/javascript">
        var googleSearchIframeName = "cse-search-results";
        var googleSearchFormName = "nqgs";
        var googleSearchFrameWidth = 900;
        var googleSearchFrameHeight = 1300;
        var googleSearchDomain = "www.google.com";
        var googleSearchPath = "/cse";
        var googleSearchResizeIframe = true;
      </script>
      <script type="text/javascript" src="http://www.google.com/afsonline/show_afs_search.js"></script>
     <script type="text/javascript">
        try{document.getElementsByName('googleSearchFrame')[0].height=1300;}catch(e){}
     </script>
</div>

<div class="clearfloats"></div>