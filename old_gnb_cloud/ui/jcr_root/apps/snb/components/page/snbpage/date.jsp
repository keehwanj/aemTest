<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.text.SimpleDateFormat"%>
<%
  Page thisPage;
  try {
    PageManager pm = currentPage.getPageManager();
    thisPage = pm.getPage(currentNode.getParent().getPath());
  } catch (Exception e) {
    log.error("error getting current page on gnbpage in date selector", e);
    thisPage = currentPage;
  }
  
  Calendar cal = thisPage.getLastModified();
  if (cal == null) {
    Object val = thisPage.getProperties().get("gnbCreated");
    if (val != null && val instanceof Calendar) {
      cal = (Calendar) val;
    }
  }
  
  if (cal == null || thisPage.getProperties().containsKey("onTime")) {
    Object val = thisPage.getProperties().get("onTime");
    if (val != null && val instanceof Calendar) {
      cal = (Calendar) val;
    }
  }
  
  if (cal != null) {
    SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", currentPage.getLanguage(true));
    String dateItem = String.format("<span class=\"post_date\" >%1s</span>", format.format(cal.getTime()));
    out.write(dateItem);
  }

%>