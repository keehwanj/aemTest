<%@page import="org.apache.sling.api.SlingHttpServletRequest"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Arrays"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.search.result.ResultPage"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@include file="fragments/init.jsp"%>
<%

try {
  //These are setup in the init.jsp
  final Resource p_resource = resource;
  final SlingHttpServletRequest p_slingRequest = slingRequest;
  final Node p_deptDataNode = (Node)request.getAttribute("deptDataNode");
  final Node p_orgDataNode = (Node)request.getAttribute("orgDataNode");
  final String p_contactDataPage = (String)request.getAttribute("contactDataPage");
  final String lang = (String) request.getAttribute("lang");
  String langSuffix = "FRE";
  String tabNamer = "employs"; 
  if (lang == null || lang.equalsIgnoreCase("en")) {
    langSuffix = "ENG";
    tabNamer = "employees";
  }

  final boolean isDepartment = p_deptDataNode.getPath().equalsIgnoreCase(p_orgDataNode.getPath());
  final Session session = p_resource.getResourceResolver().adaptTo(Session.class);
  final QueryBuilder builder = p_resource.getResourceResolver().adaptTo(QueryBuilder.class);
  String orgcontact_start = Utils.nullReplace(p_slingRequest.getParameter("orgcontact_start"));
  String orgcontact_hits = Utils.nullReplace(p_slingRequest.getParameter("orgcontact_hits"));
  SearchResult result = null;

  if (p_orgDataNode != null && p_contactDataPage != null) {

    Map<String, String> querymap = new HashMap<String, String>();
    querymap.put("1_prop", "contactinfo/ORGANIZATION_PATH");
    out.write("1_prop =contactinfo/ORGANIZATION_PATH"+"<br/>");

    querymap.put("1_prop.value", p_orgDataNode.getPath().replace("/orginfo","%"));
    out.write("1_prop.value ="+p_orgDataNode.getPath().replace("/orginfo","%")+"<br/>");


    querymap.put("1_prop.operation", "like");
	out.write("1_prop.operation =like"+"<br/>");

    querymap.put("2_prop", "contactinfo/DEPTID");
	out.write("2_prop =contactinfo/DEPTID"+"<br/>");

    querymap.put("2_prop.value", p_deptDataNode.getProperty("DEPTID").getString()); 
	out.write("2_prop.value ="+p_deptDataNode.getProperty("DEPTID").getString()+"<br/>");

    querymap.put("orderby", "@contactinfo/@LASTNAME_STRIP, contactinfo/@FIRSTNAME_STRIP");
	out.write("orderby =@contactinfo/@LASTNAME_STRIP, contactinfo/@FIRSTNAME_STRIP"+"<br/>");      


    querymap.put("path", p_contactDataPage);
	out.write("path ="+p_contactDataPage+"<br/>");

    querymap.put("type", "cq:Page");
	out.write("type =cq:Page"+"<br/>");

    Query query = builder.createQuery(PredicateGroup.create(querymap), session);    
    if (Utils.isNotEmpty(orgcontact_start)) {
      query.setStart(Long.valueOf(orgcontact_start));
    }
    orgcontact_hits = Utils.isNotEmpty(orgcontact_hits) ? orgcontact_hits : "25";
    query.setHitsPerPage(Integer.parseInt(orgcontact_hits));
    result = query.getResult();

  } //if (p_orgDataNode != null && p_contactDataPage != null)


  if(result!=null && result.getTotalMatches()>0) {
    List<String> pageCounts = Arrays.asList("100", "50", "25");
    //changed on 2014-1-23 
    //String url = p_slingRequest.getRequestURL().toString().replace("/_jcr_content/mainContent_par/departmentinfo.employeestab","") + "?orgcontact_start=%s&orgcontact_hits=%s#" + tabNamer;
 	String url = p_slingRequest.getRequestURL().toString().replace("/jcr:content/mainContent_par/departmentinfo.employeestab","") + "?orgcontact_start=%s&orgcontact_hits=%s#" + tabNamer;
      out.write(url+"<br/>");
      //Output the page count selectors
    out.write("<div id=\"search_column\" style=\"width:100%\">");
    out.write("<div class=\"pagination_top\">");
    for(String pageCount : pageCounts) {
      String link = String.format("<div class=\"item\"><a href=\""+  url + "\">%s</a></div>",0,pageCount,pageCount);
      if(orgcontact_hits.equals(pageCount)) {
        link = link.replace("<a","<a class=\"active\"");
      }
      out.write(link);
    }
    out.write(String.format("<div class=\"item\"><span class=\"legend\">%s</span></div>",LocaleSupport.getLocalizedMessage(pageContext, "legendText")));
    out.write("<div class=\"clearfloat\"></div>");
    out.write("</div>");   

    //Iterate the results and include the search result rendering of each
    out.write("<table><tr>");

    out.write(String.format("<th>%s</th>",LocaleSupport.getLocalizedMessage(pageContext, "contactText")));
    out.write(String.format("<th>%s</th>",LocaleSupport.getLocalizedMessage(pageContext, "phoneText")));
    out.write(String.format("<th>%s</th>",LocaleSupport.getLocalizedMessage(pageContext, "emailText")));
    out.write(String.format("<th>%s</th>",LocaleSupport.getLocalizedMessage(pageContext, "locationText")));

    out.write("</tr>");
    WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
    try { 
      for(Hit hit : result.getHits()) {
        %><sling:include path="<%=hit.getPath() + ".searchresult_embeded.html" %>" /><%
      }
    } finally {
      imcludemode.toRequest(request);
    }
    out.write("</table>");   


    //Output the bottom pagination
    if(result.getResultPages().size()>1) {
      out.write("<div class=\"pagination\">");
      out.write(String.format("<div class=\"item\"><span class=\"legend\">%s</span></div>", LocaleSupport.getLocalizedMessage(pageContext, "resultPagesText")));
      if(result.getPreviousPage()!=null) {
        out.write(String.format("<div class=\"item\"><a href=\""+  url + "\">%s</a></div>",
            result.getPreviousPage().getStart(),orgcontact_hits,LocaleSupport.getLocalizedMessage(pageContext, "previousText")));                  
      } 
      for(ResultPage resultPage : result.getResultPages()) {
        String linkText = new Long(resultPage.getIndex() + 1).toString();
        if(resultPage.isCurrentPage()) {
          out.write(String.format("<div class=\"item\"><a href=\"#\" class=\"active\">%s</a></div>", linkText));
        } else {
          out.write(String.format("<div class=\"item\"><a href=\""+  url + "\">%s</a></div>",resultPage.getStart(),orgcontact_hits,linkText));          
        }
      } // for each page
      if(result.getNextPage()!=null) {
        out.write(String.format("<div class=\"item\"><a href=\""+  url + "\">%s</a></div>",
            result.getNextPage().getStart(),orgcontact_hits,LocaleSupport.getLocalizedMessage(pageContext, "nextText")));                  
      }
      out.write("</div>");
    } // if 2+ pages

    out.write("</div>");
    out.write("<div class=\"clearfloat\"></div>");  
  } //if(result!=null && result.getTotalMatches()>0)


  else {
	  %><p><%=p_orgDataNode.getProperty("ORGNAME"+langSuffix).getString()%>    <fmt:message key="noEmployees" /></p><%
  }

} catch (Exception ex) {
  out.write("Unable to display employees for this department ");
  log.error("DepartmentInfo component unable to render employees tab.", ex);
}

%>


