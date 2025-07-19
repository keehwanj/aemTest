<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="org.apache.sling.api.scripting.SlingScriptHelper"%>
<%@page import="com.t4g.cnb.utils.Utils"%>

<div id="globalnav">
<!--START of global function-->    
<%!
   protected String getTitle(Page page)
   { 
      if(page==null) return "";
      String title = page.getNavigationTitle();
      if (title == null || title.equals("")) {
        title = page.getPageTitle();
      }
      if (title == null || title.equals("")) {
        title = page.getTitle();
      }
      if (title == null || title.equals("")) {
        title = page.getName();
      }
      return title;
   }

   protected String generateIncludeFromProperty(String path, String defaultValue,  Page currentPage, Logger log) {
     try {
       String contactsPath = getLocalization(path, defaultValue, currentPage, log);
       if(contactsPath!=null) {
         Page contactsPage = currentPage.getPageManager().getPage((String)contactsPath);
         return String.format("%1s.quicklink.html", contactsPage.getPath());
       }
     } catch (Exception e) {
       log.error("error including " + path + " link in globalnav", e);
     }
     return String.format("%s.quicklink.html", currentPage.getPath());
   }

   protected String generateIncludeFromPage(Page page, Logger log) {
     try {
       if(page!=null) {
         return String.format("%s.quicklink.html", page.getPath());
       }
     } catch (Exception e) {
        log.error("error including " + page.getName() + " link in globalnav", e);
     }
     return "";
   }

   protected String getLocalization(String key, String defaultValue, Page currentPage, Logger log) {
       try {
           Page myPage = currentPage;
             while (myPage != null) {
                 Node myNode = myPage.adaptTo(Node.class);
                 if(myNode!=null && myNode.hasNode("jcr:content") &&  myNode.getNode("jcr:content").hasNode("globalNav") && myNode.getNode("jcr:content").getNode("globalNav").hasProperty(key)) {
                     Property prop = myNode.getNode("jcr:content").getNode("globalNav").getProperty(key);
                     if(prop!=null && prop.getValue()!=null) {
                         String value = (String) prop.getValue().getString();
                         if (Utils.isNotEmpty(value) && (!value.equals("undefined"))) return value;
                     }
                 }
                 myPage = myPage.getParent();
             }     
       } catch (Exception e) {
          log.error("error getting value for [" + key + "] in sitefooter", e);
       }
       return defaultValue;
     }
%>

<%
  String lang ="fr";
  String gnbhome="http://www2.gnb.ca/content/gnb/fr.html";
  String gnbhome_text="GNB";

  String myidhome="/content/myid-monid/fr.html";
  String myidhome_text="Mon ID  num&eacute;rique";


  Locale locale = currentPage.getLanguage(true);
  if(locale==null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang="en";
    gnbhome="http://www2.gnb.ca/content/gnb/en.html";  
    myidhome="/content/myid-monid/en.html";  
    myidhome_text="My Digital ID";      
  }

%>
<!--END of global function-->    
	<ul>
    	<li><cq:include path="languageSwitcher" resourceType="gnb/components/tools/languageswitcher" /></li>              
<%  
WCMMode mode = WCMMode.DISABLED.toRequest(request);
try {
%>  
    	<!--START of home/contacts page-->    

   		<li><a href="<%=gnbhome%>"><span class="glyphicon glyphicon-home"></span> <%=gnbhome_text%></a></li>
   		<li><a href="<%=myidhome%>"><span class="glyphicon glyphicon-home"></span> <%=myidhome_text%></a></li>        
    	<!--END of home/contacts page-->    
	</ul>
</div>

<%}catch (Exception e) {
    log.error("error from globalvav.jsp", e);
} finally {
  mode.toRequest(request);
}
%>
