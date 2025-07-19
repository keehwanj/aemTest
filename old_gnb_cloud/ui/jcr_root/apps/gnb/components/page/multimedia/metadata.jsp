<%@ include file="/libs/wcm/global.jsp"%>
<%@ page import="com.t4g.cnb.enums.Multimedia"%>

<%
  String metadataPath = "/apps/dam/content/asseteditors/image/jpeg/formitems";
  final Node itemsNode = WCMUtils.getNode(resourceResolver.getResource(metadataPath));
  
  //delete all nodes under itemsNode
  for (NodeIterator nodeIter = itemsNode.getNodes(); nodeIter.hasNext();) {
    ((Node) nodeIter.next()).remove();
  }
  
  for (Multimedia mm : Multimedia.values()) {
    if (!itemsNode.hasNode(mm.field())) {
      Node n = itemsNode.addNode(mm.field(), "cq:Widget");
      n.setProperty("name", "./" + mm.toString());
      n.setProperty("fieldLabel", mm.label());
      n.setProperty("xtype", mm.xtype());     
    }
  }
  //add these ones as well...
  //contributor
  Node cont = itemsNode.addNode("contributor","cq:Widget");
  cont.setProperty("name", "./dc:contributor");
  cont.setProperty("fieldLabel", "Source");
  cont.setProperty("xtype", "textfield");     

  Node copy = itemsNode.addNode("copyright","cq:Widget");
  copy.setProperty("name", "./dc:rights");
  copy.setProperty("fieldLabel", "Copyright");
  copy.setProperty("xtype", "textfield");     
  
  Node tags = itemsNode.addNode("tags","cq:Widget");
  tags.setProperty("name", "./cq:tags");
  tags.setProperty("fieldLabel", "Tags");
  tags.setProperty("xtype", "tags");     
  
  Node terms = itemsNode.addNode("terms","cq:Widget");
  terms.setProperty("name", "./xmpRights:UsageTerms");
  terms.setProperty("fieldLabel", "Usage Terms");
  terms.setProperty("xtype", "textarea");
  terms.setProperty("height", 54);
  
  itemsNode.save();
%>