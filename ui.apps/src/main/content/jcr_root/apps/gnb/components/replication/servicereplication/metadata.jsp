<%@ include file="/libs/wcm/global.jsp"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.day.cq.wcm.foundation.Search"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.ResultSetMetaData"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>

<%
  log.info("******************  START Metadata fix  ***********************");
  final Session session = resource.getResourceResolver().adaptTo(Session.class);
  final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);

  Map<String, String> map = new HashMap<String, String>();
  map.put("path", "/content/dam/gnb/multimedia/*/*/*/*");
  map.put("type", "nt:unstructured");
  map.put("nodename", "metadata");

  Query query = builder.createQuery(PredicateGroup.create(map), session);
  query.setHitsPerPage(19999);

  SearchResult result = query.getResult();

  for (Hit hit : result.getHits()) {
    boolean edit = false;
    Node metaNode = WCMUtils.getNode(resourceResolver.getResource(hit.getPath()));
    if (metaNode.hasProperty("DEPTID")) {
      metaNode.setProperty("dam:DEPTID", metaNode.getProperty("DEPTID").getString());
      metaNode.getProperty("DEPTID").remove();
      edit = true;
    }

    if (metaNode.hasProperty("DEPTID_2")) {
      metaNode.setProperty("dam:DEPTID_2", metaNode.getProperty("DEPTID_2").getString());
      metaNode.getProperty("DEPTID_2").remove();
      edit = true;
    }
    if (edit) {
      metaNode.save();
      log.info("Modifying metadata node: " + metaNode.getPath());
    }
  }
  
  log.info("****************  END Metadata fix  **********************");
%>