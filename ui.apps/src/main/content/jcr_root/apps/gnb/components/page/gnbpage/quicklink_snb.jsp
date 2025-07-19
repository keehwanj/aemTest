<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%
  String navItem=Utils.getQuicklink(currentNode.getParent().getPath(), currentPage, resource).replace("/content/gnb/en/contacts/", "https://www2.gnb.ca/content/gnb/en/contacts/");
  navItem=navItem.replace("/content/gnb/fr/contacts/", "https://www2.gnb.ca/content/gnb/fr/contacts/");
  out.write(navItem);

%>
