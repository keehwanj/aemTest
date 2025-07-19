<%@include file="/libs/foundation/global.jsp"%>
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
    String imagePath = "/etc/designs/enb/images/";

    String inputValue=getLocalization("search","Search",currentPage,log);
    //String inputValue="";
    String encodedInputValue="";
    if(Utils.isNotEmpty(request.getParameter("q"))){
        inputValue = request.getParameter("q");
        //for xss attacks
		inputValue = xssAPI.encodeForHTML(inputValue);  

        //for french accent issues      
        inputValue = new String(inputValue.getBytes("UTF-8"), "UTF-8");         
        inputValue = inputValue.replace("À","&#192;"); 
        inputValue = inputValue.replace("Â","&#194;");         
        inputValue = inputValue.replace("Ä","&#196;");      
        inputValue = inputValue.replace("È","&#200;");              
        inputValue = inputValue.replace("É","&#201;");              
        inputValue = inputValue.replace("Ê","&#202;");              
        inputValue = inputValue.replace("Ë","&#203;");              
        inputValue = inputValue.replace("Î","&#206;");              
        inputValue = inputValue.replace("Ï","&#207;");              
        inputValue = inputValue.replace("Ô","&#212;");              
        inputValue = inputValue.replace("Œ","&#140;");              
        inputValue = inputValue.replace("Ù","&#217;");              
        inputValue = inputValue.replace("Û","&#219;");              
        inputValue = inputValue.replace("Ü","&#220;");              
        inputValue = inputValue.replace("Ÿ","&#159;");              

        inputValue = inputValue.replace("à","&#224;"); 
        inputValue = inputValue.replace("â","&#226;");         
        inputValue = inputValue.replace("ä","&#228;");      
        inputValue = inputValue.replace("è","&#232;");              
        inputValue = inputValue.replace("é","&#233;");              
        inputValue = inputValue.replace("ê","&#234;");              
        inputValue = inputValue.replace("ë","&#235;");        

        inputValue = inputValue.replace("ì","&#236;");               
        
        inputValue = inputValue.replace("î","&#238;");              
        inputValue = inputValue.replace("ï","&#239;");              
        inputValue = inputValue.replace("ô","&#244;");              
        inputValue = inputValue.replace("œ","&#156;");              
        inputValue = inputValue.replace("ù","&#249;");              
        inputValue = inputValue.replace("û","&#251;");              
        inputValue = inputValue.replace("ü","&#252;");              
        inputValue = inputValue.replace("ÿ","&#255;");            

        inputValue = inputValue.replace("Ç","&#199;");            
        inputValue = inputValue.replace("ç","&#231;");            

        inputValue = inputValue.replace("«","&#171;");            
        inputValue = inputValue.replace("»","&#187;");       
        inputValue = inputValue.replace("€","&#128;");   
     }
%>

<form action="<%=getLocalization("searchPath","/content/cour/"+ lang + "/search",currentPage,log)%>.html" title="<%=getLocalization("searchHint","Search GNB.ca",currentPage,log) %>" method="get" id="keyword_search_form" onsubmit="if(this.q.value=='')return false;return true">
<label for="q"><%=getLocalization("searchLabel","New Brunswick Site Search",currentPage,log)%></label>
<input type="text" onclick="this.value='';" name="q" value="<%=inputValue%>" class="searchText" id="q">
      <%if(lang=="fr") { %>
        <input type="hidden" name="cx" value="017828343373193511149:sdafeterypa" />
      <%}else{ %>
        <input type="hidden" name="cx" value="017828343373193511149:bgwidiuyyhk" />
      <%} %>
      <input type=hidden name=as_sitesearch  value="">
      <input type="hidden" name="cof" value="FORID:11" />
      <input type="hidden" name="ie" value="UTF-8" />
<input type="image" class="searchButton" src="<%=imagePath%>icon_search.gif" alt="<%=getLocalization("search","Search",currentPage,log)%>" value="<%=getLocalization("search","Search",currentPage,log)%>">
</form>