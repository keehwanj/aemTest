<%--
  downloadReport component.
--%>

<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.Calendar"%>
<%@page session="false"%>
<%
out.write("<br/><h1 style=\"font-size:20px;text-align:center\">TAP Download Report</h1><br/>");
SearchResult result = null;
final Session session = resource.getResourceResolver().adaptTo(Session.class);
final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
Map<String, String> map = new HashMap<String, String>();

map.put("path", "/content/usergenerated/content/downloads");
map.put("type", "cq:Page");
map.put("orderby","@jcr:content/cq:lastModified");
map.put("orderby.index","true");
map.put("orderby.sort", "desc");

Query query = builder.createQuery(PredicateGroup.create(map), session);
query.setHitsPerPage(0);
  try {
      result = query.getResult();
  }
  catch (Exception e) {
  }
out.write("<table border=\"1\">");

boolean gray = false;
for (Hit hit:result.getHits()) {
    if (gray) {
       out.write("<tr bgcolor=#D8D8D8>");
    }
    else {
       out.write("<tr>");
    }
    Node node = hit.getNode();
    Calendar lastModified = null;
    String description = "";
    String time = "unknown time";
    String sComment = ""; 
    if(node.hasProperty("jcr:content/jcr:description")){
      description = node.getProperty("jcr:content/jcr:description").getString();
    }
  
    if(node.hasProperty("jcr:content/comment")){
      sComment = node.getProperty("jcr:content/comment").getString();
    }
    if(node.hasProperty("jcr:content/cq:lastModified")){
      lastModified = node.getProperty("jcr:content/cq:lastModified").getDate();
      time = lastModified.get(Calendar.HOUR_OF_DAY)+":"+String.format("%02d", lastModified.get(Calendar.MINUTE))+":"+String.format("%02d", lastModified.get(Calendar.SECOND))+"\t"+lastModified.get(Calendar.DATE)+"/"+(lastModified.get(Calendar.MONTH)+1)+"/"+lastModified.get(Calendar.YEAR);
    } 
    if (!description.equals("")) {
      out.write("<td style=\"padding:5px\">" + description + " at " + time );
    }
    else if (node.hasProperty("jcr:content/name") &&node.hasProperty("jcr:content/email")&&node.hasProperty("jcr:content/resourcePath")) {
      out.write("<td style=\"padding:5px\">" + node.getProperty("jcr:content/name").getString() + " (" + node.getProperty("jcr:content/email").getString() + ") downloaded " + node.getProperty("jcr:content/resourcePath").getString() + " at " + time );
    }
    else {
      out.write("<td style=\"padding:5px\">Unknown download occured at "+ time);
    }
    if (!sComment.equals("")) { 
       out.write("<br>Comment:  " + sComment + "&nbsp;");
    }
    gray = !gray;
    out.write("</td></tr>");

}
  %>
  
  <%-- 
<table border="1">
<tr>
<th>Name</th><th>Email</th><th>Resource Path</th><th>Comment</th><th>Last Modified</th>
</tr>

<%
for (Hit hit:result.getHits()) {
  out.write("<tr>");
  Node node = hit.getNode();
  String name = "";
  String email = "";
  String resourcePath = "";
  String comment = "";
  Calendar lastModified = null;
  
  if(node.hasProperty("jcr:content/name")){
    name = node.getProperty("jcr:content/name").getString();
  }
  if(node.hasProperty("jcr:content/email")){
    email = node.getProperty("jcr:content/email").getString();
  }
  if(node.hasProperty("jcr:content/resourcePath")){
    resourcePath = node.getProperty("jcr:content/resourcePath").getString();
  }
  if(node.hasProperty("jcr:content/comment")){
    comment = node.getProperty("jcr:content/comment").getString();
  }
  if(node.hasProperty("jcr:content/cq:lastModified")){
    lastModified = node.getProperty("jcr:content/cq:lastModified").getDate();
  }   
      
  out.write("<td>"+name+"</td>");
  out.write("<td>"+email+"</td>");
  out.write("<td>"+resourcePath+"</td>");
  out.write("<td>"+comment+"</td>");
  if (lastModified!=null) {
    out.write("<td>"+lastModified.get(Calendar.HOUR_OF_DAY)+":"+String.format("%02d", lastModified.get(Calendar.MINUTE))+":"+String.format("%02d", lastModified.get(Calendar.SECOND))+"\t"+lastModified.get(Calendar.DATE)+"/"+lastModified.get(Calendar.MONTH)+"/"+lastModified.get(Calendar.YEAR)+"</td>");
  }
  else {
    out.write("<td></td>");
  }
  out.write("</tr>");
}
out.write("</table>");
%>  --%>