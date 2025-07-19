<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%
  String navItem=Utils.getQuicklink(currentNode.getParent().getPath(), currentPage, resource);
  out.write(navItem);
%>