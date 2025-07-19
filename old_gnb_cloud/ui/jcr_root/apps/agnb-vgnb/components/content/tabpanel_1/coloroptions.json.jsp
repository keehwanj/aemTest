<%@include file="/libs/foundation/global.jsp"%>
<%
  response.setContentType("text/plain");  
  if("fr".equals(currentPage.getLanguage(true).getLanguage())){
%>
[{"value":"yellow","text":"Jaune"},{"value":"tan","text":"Beige"},{"value":"green","text":"Vert"},{"value":"blue","text":"Bleu"}]
<% 
  }else{
%>        
[{"value":"yellow","text":"Yellow"},{"value":"tan","text":"Tan"},{"value":"green","text":"Green"},{"value":"blue","text":"Blue"}]
<%
  }
%>