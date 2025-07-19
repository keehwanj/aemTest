<%@include file="/libs/wcm/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="org.slf4j.Logger"%>
<%!

protected String getLocalization(String key, String defaultValue, Page currentPage, Logger log) {
  try {
      Page myPage = currentPage;
        while (myPage != null) {
            Node myNode = myPage.adaptTo(Node.class);
            if(myNode!=null && myNode.hasNode("jcr:content") &&  myNode.getNode("jcr:content").hasNode("keywordsearch") && myNode.getNode("jcr:content").getNode("keywordsearch").hasProperty(key)) {
                Property prop = myNode.getNode("jcr:content").getNode("keywordsearch").getProperty(key);                
                if(prop!=null && prop.getValue()!=null) {
                    String value = (String) prop.getValue().getString();
                    if (Utils.isNotEmpty(value) && (!value.equals("undefined"))) return value;
                }
            }
            myPage = myPage.getParent();
        }     
  } catch (Exception e) {
     log.error("error getting value for [" + key + "] in keywordsearch", e);
  }
  return defaultValue;
}
%>

<%
    // Get language
    String lang = "fr";
    Locale locale = currentPage.getLanguage(true);
    if ((locale==null) || (locale.getLanguage().equalsIgnoreCase("en"))){
        lang="en";
    }
    
    // Account for localized images
    String imagePath = "/etc/designs/gnb/images/";

    String inputValue=getLocalization("search","Search",currentPage,log);
    if(Utils.isNotEmpty(request.getParameter("q"))) inputValue = request.getParameter("q");
%>


<form action="<%=getLocalization("searchPath","/content/wel-bien/"+ lang + "/search_result",currentPage,log)%>.html" title="<%=getLocalization("searchHint","Search",currentPage,log) %>" method="get" id="keyword_search_form" onsubmit="if(this.q.value=='')return false;return true">
<label><%=getLocalization("searchLabel","",currentPage,log)%></label>
<input type="text" onclick="this.value='';" name="q" value="<%=inputValue%>" class="searchText" id="q">
      <%if(lang=="fr") { %>
        <input type="hidden" name="cx" value="013380799247391142859:8i0ekuh5tla" />
      <%}else{ %>
        <input type="hidden" name="cx" value="013380799247391142859:xtf99edzly8" />
      <%} %>
      <input type=hidden name=as_sitesearch  value="">
      <input type="hidden" name="cof" value="FORID:11" />
      <input type="hidden" name="ie" value="UTF-8" />
<input type="image" class="searchButton" src="<%=imagePath%>icon_search.gif" alt="<%=getLocalization("search","Search",currentPage,log)%>" value="<%=getLocalization("search","Search",currentPage,log)%>">
</form>