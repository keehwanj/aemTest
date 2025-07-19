<%@ include file="/libs/foundation/global.jsp"%>
<%@ page import="javax.sql.DataSource"%>
<%@ page import="com.day.cq.search.QueryBuilder"%>
<%@ page import="com.day.cq.wcm.api.Page"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourcePool"%>
<%@ page import="com.t4g.cnb.replication.ServiceReplication"%>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.SQLException" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.ResultSet"%>
<%@page import="java.util.Collections"%>
<%@page import="java.util.Comparator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.day.cq.commons.jcr.JcrUtil"%>
<%!

// puts the array list of nodes in alphabetical order
private void sortbyNames(ArrayList<Node> tags) {
  Collections.sort(tags, new Comparator<Node>() {
    public int compare(Node a, Node b) {
      try {
        if (Integer.parseInt(a.getName())>Integer.parseInt(b.getName())) {
            return 1;
        }
        else if (Integer.parseInt(a.getName())<Integer.parseInt(b.getName())) {
            return -1;
        }
        else {
            return 0;
        }
      }catch (Exception ex) {
        return 0;
      }
     
    }
  });
}

//Sorts the children of the given node in alphabetacal order.
private void sortOrgs(Node n) throws Exception {
  ArrayList<Node> orgs= new ArrayList<Node>();
  try {   
    NodeIterator iter = n.getNodes(); 
    while (iter.hasNext()) {
  Node node = (Node)iter.next();
  orgs.add(node);
    }
    sortbyNames(orgs);
    String[] names = new String[orgs.size()];
    for (int i =0; i<orgs.size(); i++) {
  names[i] = orgs.get(i).getName();
    }
    JcrUtil.setChildNodeOrder(n, names);
  }
  catch (Exception ex) {
    throw ex;
  }
}
%>
<%
  Page data = pageManager.getPage("/content/data");
  Node dataNode = data.adaptTo(Node.class);
//  DataSourcePool dataSourceService = sling.getService(com.day.commons.datasource.poolservice.DataSourcePool.class);
DataSourcePool dspService = sling.getService(DataSourcePool.class);
  Session session = currentNode.getSession();
//  DataSource dataSource = (DataSource) dataSourceService.getDataSource("SQLDB");
DataSource ds = (DataSource) dspService.getDataSource("SQLDB");
  final QueryBuilder queryBuilder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
  ServiceReplication sr = new ServiceReplication();
  sr.replicate(ds, dataNode);
//sort the orgs
  try {
      Node org = dataNode.getNode("services");
      sortOrgs(org);
      session.save();
  }
  catch (Exception e) {
      out.write("<p>"+e.getMessage()+"</p>");
  }
%>