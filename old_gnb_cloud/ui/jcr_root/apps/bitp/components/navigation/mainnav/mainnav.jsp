<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="java.util.Iterator"%>
<cq:include script="init.jsp" />

<%
  List list = (List) request.getAttribute("list");
  if (!list.isEmpty()) {
    out.write("<span class=\"mainnav\" style=\"-moz-user-select: none;\">");    
    
    for (Iterator<Page> i = list.getPages(); i.hasNext();) {
      Page mainPage = i.next();
            
      boolean hasChildPage = mainPage.hasChild(currentPage.getName());
      boolean inPath = currentPage.getPath().startsWith(mainPage.getPath());
    
      //set the navigation to white for the section we are in      
      if(i.hasNext()){
        out.write("<span class=\"root\">"); 
      }else{
        out.write("<span class=\"root last\"> ");
      }
      //checking title text
      String title=mainPage.getPageTitle();
      if(mainPage.getPageTitle()==null){
    	  title=mainPage.getTitle();
      }
      
      //adding ".html" in case of ending without .html
      out.write("<a " + ((inPath && !hasChildPage) ? "class=\"sel\"":"") +  "href=\"" + mainPage.getPath() +".html" +"\">" + title + "</a>");
      out.write("</span>");

    }    
    out.write("</span>");
    out.write("<div class=\"clearfloat\"></div>");
  } 
%>
