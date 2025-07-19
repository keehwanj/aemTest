<%@ include file="/libs/wcm/global.jsp"%>
<%@ page import="javax.sql.DataSource"%>
<%@ page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourcePool"%>
<%@ page import="com.t4g.cnb.replication.ContactReplication"%>
<%
  Page data = pageManager.getPage("/content/data");
  Node dataNode = data.adaptTo(Node.class);
  DataSourcePool dataSourceService = sling.getService(com.day.commons.datasource.poolservice.DataSourcePool.class);
  Session session = currentNode.getSession();
  DataSource dataSource = (DataSource) dataSourceService.getDataSource("SQLDB");
  final QueryBuilder queryBuilder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
  ContactReplication cr = new ContactReplication();
  cr.replicate(dataSource, dataNode, session, queryBuilder);
%>