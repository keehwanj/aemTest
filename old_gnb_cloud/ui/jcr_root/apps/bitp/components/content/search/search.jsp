<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.day.cq.i18n.I18n"%>

<%     
I18n i18n = new I18n(slingRequest.getResourceBundle(currentPage.getLanguage(true)));    
%>

<div id="searchContainer" class="<%= currentPage.getProperties().get("fontColor") %>">

  <div class="searchField">
    <span id="search">      
      <input type="text" id="txtSearch" class="searchText" maxlength="255" size="20" />&nbsp;
      <a class="searchLabel" href="."><%= i18n.get("search") %></a>      
    </span>
  </div>
        
  <div class="contactUs">
    <a href="http://beinthisplace.ca/contactus.aspx"><%= i18n.get("contact_us") %></a>
  </div>

  <div class="languageOption">  
    <a href="http://etreicionlepeut.ca/Immigrationet%C3%A9tablissement.aspx"><%= i18n.get("lang") %></a>
  </div>

</div>