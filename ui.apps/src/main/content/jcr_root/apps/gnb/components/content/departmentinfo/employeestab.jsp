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
  final String s=request.getServerName();  

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

  //START of if
  if (p_orgDataNode != null && p_contactDataPage != null) {

    Map<String, String> querymap = new HashMap<String, String>();
    querymap.put("1_property", "contactinfo/ORGANIZATION_PATH");

    querymap.put("1_property.value", p_orgDataNode.getPath().replace("/orginfo","%"));

    querymap.put("1_property.operation", "like");
    querymap.put("2_property", "contactinfo/DEPTID");
    querymap.put("2_property.value", p_deptDataNode.getProperty("DEPTID").getString());  


    /*NOT work in AEM6.2*/
    //querymap.put("orderby", "@contactinfo/@LASTNAME_STRIP, contactinfo/@FIRSTNAME_STRIP");
    /*START of new code in AEM6.2*/
    querymap.put("3_orderby", "@contactinfo/@LASTNAME_STRIP");
    querymap.put("3_orderby.sort", "asc");

    querymap.put("4_orderby", "@contactinfo/@FIRSTNAME_STRIP");
    querymap.put("4_orderby.sort", "asc");
	/*START of new code in AEM6.2*/


    querymap.put("path", p_contactDataPage);

    querymap.put("type", "cq:Page");

    Query query = builder.createQuery(PredicateGroup.create(querymap), session);    
    if (Utils.isNotEmpty(orgcontact_start)) {
      query.setStart(Long.valueOf(orgcontact_start));
    }
    orgcontact_hits = Utils.isNotEmpty(orgcontact_hits) ? orgcontact_hits : "25";
    query.setHitsPerPage(Integer.parseInt(orgcontact_hits));
    result = query.getResult();
    /*START of map string for writing querybuilder*/
    /*
	for (Map.Entry<String, String> entry : querymap.entrySet())
	{
        out.write(entry.getKey() + ":" + entry.getValue());
        out.write("<br/>");
	}
    */
    /*END of map string  for writing querybuilder*/


  } 
  //END of if  



  //START of if
  if(result!=null && result.getTotalMatches()>0) {
    List<String> pageCounts = Arrays.asList("100", "50", "25");

    //changed on 2014-1-23 
	String url="";
	url = p_slingRequest.getRequestURL().toString().replace("/_jcr_content/","");
    // for ssl
	if ((WCMMode.fromRequest(request) == WCMMode.DISABLED || (WCMMode.fromRequest(request) == WCMMode.PREVIEW))) {
		url =url.replace("http://","https://");
    }

    url = url.toString().replace("/jcr%3acontent/","");         
    url = url.toString().replace("/jcr:content/","");      
    url = url.toString().replace("mainContent_par/departmentinfo.employeestab","");      
    url = url+ "?orgcontact_start=%s&orgcontact_hits=%s#" + tabNamer;      



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
    out.write("<div class=\"table-responsive\">");  
    out.write("<table class=\"table table-hover\"><tr>");
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
    out.write("</div>");  


    //Output the bottom pagination
    //START of if    
    if(result.getResultPages().size()>1) {
      out.write("<ul class=\"pagination\">");
      out.write(String.format("<li class=\"item\"><span class=\"legend\">%s</span></li>", LocaleSupport.getLocalizedMessage(pageContext, "resultPagesText")));
      if(result.getPreviousPage()!=null) {
        out.write(String.format("<li class=\"item\"><a href=\""+  url + "\">%s</a></li>",
            result.getPreviousPage().getStart(),orgcontact_hits,LocaleSupport.getLocalizedMessage(pageContext, "previousText")));                  
      } 
      for(ResultPage resultPage : result.getResultPages()) {
        String linkText = new Long(resultPage.getIndex() + 1).toString();
        if(resultPage.isCurrentPage()) {
            out.write(String.format("<li class=\"item active\"><a href=\"#\" class=\"active\">%s</a></li>", linkText));
        } else {
            out.write(String.format("<li class=\"item\"><a href=\""+  url + "\">%s</a></li>",resultPage.getStart(),orgcontact_hits,linkText));   
        }
      } // for each page
      if(result.getNextPage()!=null) {
          out.write(String.format("<li class=\"item\"><a href=\""+  url + "\">%s</a></li>",result.getNextPage().getStart(),orgcontact_hits,LocaleSupport.getLocalizedMessage(pageContext, "nextText")));                  
      }
      out.write("</ul>");
    }
    //END of if  

    out.write("</div>");
    out.write("<div class=\"clearfloat\"></div>");  
  }
  //END of if
  //START of else  
  else {
	  %><p><%=p_orgDataNode.getProperty("ORGNAME"+langSuffix).getString()%>    <fmt:message key="noEmployees" /></p><%
  }
  //END of else   
} catch (Exception ex) {
  out.write("Unable to display employees for this department ");
  log.error("DepartmentInfo component unable to render employees tab.");
}

%>