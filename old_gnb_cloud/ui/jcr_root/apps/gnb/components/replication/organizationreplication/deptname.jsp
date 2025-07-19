<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Map"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.t4g.cnb.tag.DepartmentValueComparator"%>

<%
  //get dept nodes
  String deptNodePath = "/content/data/organizations";
  Map<String, String> deptMapENG = new HashMap<String, String>();
  Map<String, String> deptMapFRE = new HashMap<String, String>();
  final Node deptBaseNode = WCMUtils.getNode(resourceResolver.getResource(deptNodePath));
  for (NodeIterator nodeIter = deptBaseNode.getNodes(); nodeIter.hasNext();) {
    Node deptNode = (Node) nodeIter.next();
    Node deptInfoNode = deptNode.getNode("orginfo");
    deptMapENG.put(deptInfoNode.getProperty("DEPTID").getString(), deptInfoNode.getProperty("ORGNAMEENG")
        .getString().trim().replace('/', '-'));
    deptMapFRE.put(deptInfoNode.getProperty("DEPTID").getString(), deptInfoNode.getProperty("ORGNAMEFRE")
        .getString().trim().replace('/', '-'));
  }

  Map<String, String> map = new HashMap<String, String>();
  map.put("path", "/content/data/organizations/*/.");
  map.put("nodename", "orginfo");
  map.put("orderby", "@DEPTID,@ORGNAMEENG");
  final Session session = resource.getResourceResolver().adaptTo(Session.class);
  final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
  Query query = builder.createQuery(PredicateGroup.create(map), session);
  query.setHitsPerPage(10000);
  
  SearchResult result = query.getResult();

  //if this is a dept query need to take off the orginfo
  List<String> hitList = new ArrayList<String>();
  for (Hit hit : result.getHits()) {
    Node orgInfoNode = WCMUtils.getNode(resourceResolver.getResource(hit.getPath()));
    String orgdeptId = orgInfoNode.getProperty("DEPTID").getString();
    System.out.println("Path:" + hit.getPath());
    System.out.println("***  orgInfoNode:" + orgInfoNode.getParent().getName() + " DEPTNAMEENG:" + deptMapENG.get(orgdeptId) + " DEPTNAMEFRE:" + deptMapFRE.get(orgdeptId));
    orgInfoNode.setProperty("DEPTNAMEENG",deptMapENG.get(orgdeptId));
    orgInfoNode.setProperty("DEPTNAMEFRE",deptMapFRE.get(orgdeptId));
    orgInfoNode.save();
  }
%>