<%@ include file="/libs/wcm/global.jsp"%>
<%@ page import="com.t4g.cnb.enums.Multimedia"%>

<%

  String deptTagPath = "/content/cq:tags/organization/department";
  final Node tagNode = WCMUtils.getNode(resourceResolver.getResource(deptTagPath));
  for (NodeIterator nodeIter = tagNode.getNodes(); nodeIter.hasNext();) {
    ((Node) nodeIter.next()).remove();
  }
  
  //get dept nodes
  String deptNodePath = "/content/data/organizations";
  final Node deptBaseNode = WCMUtils.getNode(resourceResolver.getResource(deptNodePath));
  for (NodeIterator nodeIter = deptBaseNode.getNodes(); nodeIter.hasNext();) {
    Node deptNode = (Node) nodeIter.next();
    Node deptInfoNode = deptNode.getNode("orginfo");
    Node n = tagNode.addNode(deptInfoNode.getProperty("ORGNAMEENG").getString().trim().replace('/','-'), "cq:Tag");
    n.setProperty("jcr:description", deptInfoNode.getProperty("DEPTID").getString());
    n.setProperty("jcr:title", deptInfoNode.getProperty("ORGNAMEENG").getString().trim());
    n.setProperty("sling:resourceType", "cq/tagging/components/tag");
    tagNode.save();
  }

%>
