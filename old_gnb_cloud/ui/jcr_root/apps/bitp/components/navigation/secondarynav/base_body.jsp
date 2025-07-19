<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<cq:include script="init.jsp" />

<%
  List list = (List) request.getAttribute("list");
  out.write("<ul>");
  for (Iterator<Page> i = list.getPages(); i.hasNext();) {
    Page child = i.next();
    if (child != null && !child.isHideInNav()) {
      String grandchildren = "";
      if (currentPage.getPath().startsWith(child.getPath())) {                        
        out.write("<li class='nobottom'>");
        out.write("<a class=\"parent\" href=\"" + child.getPath() + ".html\">" + child.getTitle() + "</a>");                
        boolean hasSecondLevel = false;
        for (Iterator<Page> j = child.listChildren(); j.hasNext();) {
          Page grandchild = j.next();
          if (!grandchild.isHideInNav()) {
            if (!hasSecondLevel) {
              out.write("<div class='subNavLevel2Top'></div>");
              out.write("<ul>");
              hasSecondLevel = true;
            }
            out.write("<li class='level2'>");
            if (currentPage.getPath().startsWith(grandchild.getPath())) {              
                out.write("<a class=\"parent\" href=\"" + grandchild.getPath() + ".html\">" + grandchild.getTitle()
                    + "</a>");                            
              boolean hasThirdLevel = false;
              for (Iterator<Page> ggc = grandchild.listChildren(); ggc.hasNext();) {
                Page greatGrandchild = ggc.next();
                if (!greatGrandchild.isHideInNav()) {
                  if (!hasThirdLevel) {
                    out.write("<ul>");
                    hasThirdLevel = true;
                  }
                  out.write("<li class='level3'>");
                  if (currentPage.getPath().startsWith(greatGrandchild.getPath())) {
                    out.write("<a class=\"parent\" href=\"" + greatGrandchild.getPath() + ".html\">"
                        + greatGrandchild.getTitle() + "</a>");
                  } else {
                    out.write("<a href=\"" + greatGrandchild.getPath() + ".html\">" + greatGrandchild.getTitle()
                        + "</a>");
                  }
                  out.write("</li>");                                    
                }                                
              }
              if (hasThirdLevel) {
                out.write("</ul>");
              }
              out.write("</li>");
            } else {
              out.write("<a href=\"" + grandchild.getPath() + ".html\">" + grandchild.getTitle() + "</a>");
            }
          }
        }
        if (hasSecondLevel) {
          out.write("</ul>");
          out.write("<div class='subNavLevel2Bottom'></div>");
        }
        out.write("</li>");
      } else {
        out.write("<li>");
        out.write("<a href=\"" + child.getPath() + ".html\">" + child.getTitle() + "</a>");
        out.write("</li>");
      }
    }
  }
  out.write("</ul>");
%>