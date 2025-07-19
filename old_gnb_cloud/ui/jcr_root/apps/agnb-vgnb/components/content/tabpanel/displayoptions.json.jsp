<%@include file="/libs/foundation/global.jsp"%>
<%
  response.setContentType("text/plain");

  //the ~ acts as a delimeter.  For special characters that won't save properly as a node 
  //eg. Hotel/Travel, the '/' needs to be converted to an underscore in the tabpanel.jsp Tab(String title) constructor
  
  if("fr".equals(currentPage.getLanguage(true).getLanguage())){
%>
[{"value":"","text":"----"},{"value":"Vivre~&Eacute;tudier~Travailler~Entreprises","text":"General"},{"value":"Comment immigrer~&Eacute;tablissement~&Eacute;tudier~Travailler~Entreprises~Embauche et aide","text":"Immigrer"}]
<%
  } else {
%>
[{"value":"","text":"----"},{"value":"Living~Studying~Working~Business","text":"General"},{"value":"How to Immigrate~Settling~Studying~Working~Business~Hiring and Helping","text":"Immigrating"}]
<%
  }
%>