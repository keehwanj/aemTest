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
out.write("Starting Org Update<br/>");
out.flush();
Map<String, String> map = new HashMap<String, String>();
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
  if(orgInfoNode.hasProperty("ORGNAMEENG") && Utils.isNotEmpty(orgInfoNode.getProperty("ORGNAMEENG").getString())) {
    orgInfoNode.setProperty("ORGNAMEENG_STRIP",Utils.toUpperCaseSansAccent(orgInfoNode.getProperty("ORGNAMEENG").getString()));
  }
  if(orgInfoNode.hasProperty("ORGNAMEFRE") && Utils.isNotEmpty(orgInfoNode.getProperty("ORGNAMEFRE").getString())) {
    orgInfoNode.setProperty("ORGNAMEFRE_STRIP",Utils.toUpperCaseSansAccent(orgInfoNode.getProperty("ORGNAMEFRE").getString()));
  }
  if(orgInfoNode.hasProperty("DEPTNAMEENG") && Utils.isNotEmpty(orgInfoNode.getProperty("DEPTNAMEENG").getString())) {
    orgInfoNode.setProperty("DEPTNAMEENG_STRIP",Utils.toUpperCaseSansAccent(orgInfoNode.getProperty("DEPTNAMEENG").getString()));
  }
  if(orgInfoNode.hasProperty("DEPTNAMEFRE") && Utils.isNotEmpty(orgInfoNode.getProperty("DEPTNAMEFRE").getString())) {
    orgInfoNode.setProperty("DEPTNAMEFRE_STRIP",Utils.toUpperCaseSansAccent(orgInfoNode.getProperty("DEPTNAMEFRE").getString()));
  }  
  orgInfoNode.save();
  out.write(". ");
  out.flush();
}
out.write("<br/>Finished Org Update<br/><br/>");
out.flush();


out.write("Starting Service Update<br/>");
out.flush();
  //get dept nodes
  String servicesNodePath = "/content/data/services";
  final Node servicesBaseNode = WCMUtils.getNode(resourceResolver.getResource(servicesNodePath));
  for (NodeIterator nodeIter = servicesBaseNode.getNodes(); nodeIter.hasNext();) {
    Node serviceNode = (Node) nodeIter.next();
    Node serviceInfoNode = serviceNode.getNode("serviceinfo");
    if(serviceInfoNode.hasProperty("SERVICENAME") && Utils.isNotEmpty(serviceInfoNode.getProperty("SERVICENAME").getString())) {
      serviceInfoNode.setProperty("SERVICENAME_STRIP",Utils.toUpperCaseSansAccent(serviceInfoNode.getProperty("SERVICENAME").getString()));
    }
    if(serviceInfoNode.hasProperty("SERVICENAMEFRE") && Utils.isNotEmpty(serviceInfoNode.getProperty("SERVICENAMEFRE").getString())) {
      serviceInfoNode.setProperty("SERVICENAMEFRE_STRIP",Utils.toUpperCaseSansAccent(serviceInfoNode.getProperty("SERVICENAMEFRE").getString()));
    }
    serviceInfoNode.save();
    out.write(". ");
    out.flush();
  }
  out.write("<br/>Finished Service Update<br/><br/>");
  out.flush();
  

  
%>
