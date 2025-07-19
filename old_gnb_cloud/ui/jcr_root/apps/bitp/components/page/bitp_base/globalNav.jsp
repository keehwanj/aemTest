<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.day.cq.i18n.I18n"%>

<%     
I18n i18n = new I18n(slingRequest.getResourceBundle(currentPage.getLanguage(true)));    
%>

<div id="searchContainer" class="<%= currentPage.getProperties().get("fontColor") %>">

  <div class="searchField">
    <span id="search">      
        <cq:include path="keywordsearch" resourceType="bitp/components/search/keywordsearch"/>
    </span>
  </div>
        
  <div class="contactUs">
    <cq:include path="contactus" resourceType="bitp/components/tools/contactus" />
  </div>

  <div class="languageOption">  
        <cq:include path="languageSwitcher" resourceType="bitp/components/tools/languageswitcher" />
  </div>

</div>