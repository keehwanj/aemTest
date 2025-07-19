<%@page import="java.util.ArrayList"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="org.slf4j.Logger"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@include file="fragments/init.jsp"%>
<%
try {
  //These are setup in the init.jsp
  final Resource p_resource = resource;
  final Page p_currentPage = currentPage;
  final Logger p_log = log;
  final Node p_deptDataNode = (Node) request.getAttribute("deptDataNode");
  final String p_orgDataPage = (String) request.getAttribute("orgDataPage");
  final String lang = (String) request.getAttribute("lang");
  String langSuffix = "FRE";
  if (lang == null || lang.equalsIgnoreCase("en")) {
    langSuffix = "ENG";
  }
  final Session session = p_resource.getResourceResolver().adaptTo(Session.class);
  final QueryBuilder builder = p_resource.getResourceResolver().adaptTo(QueryBuilder.class);
  SearchResult result = null;
  Map<String, String> map = new HashMap<String, String>();
%>

  <div class="row">
    <div class="col-lg-8">
<%
//START of if condition  
  if (p_deptDataNode != null && p_orgDataPage != null) {
    map.put("1_property", "orginfo/DEPTID");
    map.put("1_property.value", p_deptDataNode.getProperty("DEPTID").getString());
    map.put("path", p_orgDataPage);
    map.put("type", "cq:Page");
    map.put("orderby", "@orginfo/ORGLEVEL");
    Query query = builder.createQuery(PredicateGroup.create(map), session);
    query.setHitsPerPage(1000);
    result = query.getResult();
    out.write("<div id=\"mandates\"><div class=\"item_services\">");
    boolean hasMandates = false;
    //START of for loop  
    for (Hit hit : result.getHits()) {
      Node nodeHit = p_currentPage.getPageManager().getPage(hit.getPath()).adaptTo(Node.class);
      if (nodeHit != null && nodeHit.hasNode("orginfo") && nodeHit.getNode("orginfo").hasProperty("GOAL" + langSuffix) && Utils.isNotEmpty(nodeHit.getNode("orginfo").getProperty("GOAL" + langSuffix).getString())) {
        hasMandates = true;
    	String includeScript = hit.getPath() + ".quicklink.html";
        %><h3><sling:include path="<%= includeScript %>" /></h3>
        <p><%=Utils.cleanPropertyValue(nodeHit.getNode("orginfo").getProperty("GOAL" + langSuffix).getString())%></p>
        <%
      }
    }
    //END of for loop

    if(!hasMandates) {
        %><p><%=p_deptDataNode.getProperty("DEPTNAME"+langSuffix).getString()%>    <fmt:message key="noMandates" /></p><%
    }
    out.write("</div></div>");
  }
  //END of if condition

} catch (Exception ex) {
    out.write("Unable to display mandates for this department");
    log.error("DepartmentInfo component unable to render mandates tab.");
    log.error(ex.getMessage());
  }
%>

    </div>
    <div class="col-lg-4">
        <cq:include path="secondaryContent_par" resourceType="foundation/components/parsys"/>
    </div>
  </div>


