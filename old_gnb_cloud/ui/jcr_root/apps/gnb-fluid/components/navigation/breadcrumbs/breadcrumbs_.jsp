<%@include file="/libs/wcm/global.jsp"%>
<%@ page import="java.util.Iterator,
        java.util.Formatter,
        com.day.text.Text,
        com.day.cq.wcm.api.PageFilter,
        com.day.cq.wcm.api.NameConstants,
        org.apache.commons.lang.StringEscapeUtils,
        com.day.cq.wcm.api.Page" %>
        
<%@page import="com.day.cq.wcm.api.WCMMode"%><%

      //climb up the hierarchy looking for an absParent property
      //of the breadcrumbsNode and stop when we find one
      long level = 2l;
      try{
          Page myPage = currentPage;
          while (myPage != null) {
              Node myNode = myPage.adaptTo(Node.class);
              if(myNode!=null && myNode.hasNode("jcr:content") &&  myNode.getNode("jcr:content").hasNode("breadcrumbs")) {
                  Property prop = myNode.getNode("jcr:content").getNode("breadcrumbs").getProperty("absParent");
                  if(prop!=null && prop.getValue()!=null) {
                	  level = (long) prop.getValue().getLong();
                      break;
                  }
              }
              myPage = myPage.getParent();
          
          }
      }
      catch (Exception ex) {
          log.error("breadcrumbs encountered an error climbing the hierarchy",ex);
      }        
    //This is to ensure the current page isn't included in breadcrumbs  
    int currentLevel = currentPage.getDepth()-1;
    
    while (level < currentLevel) {
        Page trail = currentPage.getAbsoluteParent((int) level);
        if (trail == null) {
            break;
        }
        if(!trail.isHideInNav() && trail.isValid()) {
          WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
          try {
            %><sling:include path="<%=trail.getPath() + ".quicklink.html" %>" /><%
          } finally {
            imcludemode.toRequest(request);
          }
         }
        level++;
    }
%>
