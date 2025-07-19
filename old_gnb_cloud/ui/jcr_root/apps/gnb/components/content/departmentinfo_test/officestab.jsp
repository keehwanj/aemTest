<%@page import="org.apache.sling.api.SlingHttpServletRequest"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Arrays"%>
<%@page import="java.util.TreeMap"%>
<%@page import="com.day.cq.search.facets.Bucket"%>
<%@page import="java.net.URLEncoder"%>
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
  final String p_orgDataPage = (String)request.getAttribute("orgDataPage");
  final String p_contactDataPage = (String)request.getAttribute("contactDataPage");
  final String lang = (String) request.getAttribute("lang");
  String langSuffix = "FRE";
  String tabNamer = "bureaux"; 
  if (lang == null || lang.equalsIgnoreCase("en")) {
    langSuffix = "ENG";
    tabNamer = "offices" ; 
  }
  final Session session = p_resource.getResourceResolver().adaptTo(Session.class);
  final QueryBuilder builder = p_resource.getResourceResolver().adaptTo(QueryBuilder.class);
  SearchResult result = null;
  String org_start = Utils.nullReplace(p_slingRequest.getParameter("org_start"));
  String org_hits = Utils.nullReplace(p_slingRequest.getParameter("org_hits"));
  String org_location = Utils.nullReplace(p_slingRequest.getParameter("org_location"));
  String contact_start = Utils.nullReplace(p_slingRequest.getParameter("contact_start"));
  String contact_hits = Utils.nullReplace(p_slingRequest.getParameter("contact_hits"));
  String contact_location = Utils.nullReplace(p_slingRequest.getParameter("contact_location"));
  contact_location = new String(contact_location.getBytes(), "UTF8");
  org_location = new String(org_location.getBytes(), "UTF8");
  
  
  out.write("<div id=\"offices\">");      
  out.write(String.format("<input type=\"hidden\" id=\"toggletextOffice\" value=\"%s\"></input>",LocaleSupport.getLocalizedMessage(pageContext, "toggleOfficeViewText"))); 
  out.write(String.format("<input type=\"hidden\" id=\"toggletextContacts\" value=\"%s\"></input>",LocaleSupport.getLocalizedMessage(pageContext, "toggleContactsViewText")));
  out.write(String.format("<a id=\"officeviewToggle\">%s</a>", LocaleSupport.getLocalizedMessage(pageContext, "toggleContactsViewText")));                 
  out.write("<br />");
  out.write("<div id=\"orgView\">");     
  
  if (p_deptDataNode != null && p_orgDataPage != null) {
    Map<String, String> querymap = new HashMap<String, String>();
    querymap.put("1_prop", "orginfo/DEPTID");
    querymap.put("1_prop.value", p_deptDataNode.getProperty("DEPTID").getString());
    querymap.put("path", p_orgDataPage);
    querymap.put("orderby", "@orginfo/@ORGNAME" + langSuffix + "_STRIP");
    querymap.put("type", "cq:Page");

    if (Utils.isNotEmpty(org_location)) {
      querymap.put("2_prop", "orginfo/P_CITY" + langSuffix);
      querymap.put("2_prop.value", org_location);
    }

    Query query = builder.createQuery(PredicateGroup.create(querymap), session);
    if (Utils.isNotEmpty(org_start)) {
      query.setStart(Long.valueOf(org_start));
    }
    org_hits = Utils.isNotEmpty(org_hits)? org_hits: "25";
    query.setHitsPerPage(Integer.parseInt(org_hits));
    result = query.getResult();
  } //if (p_deptDataNode != null && p_orgDataPage != null)


  if (result != null && result.getTotalMatches() > 0) {
    List<String> pageCounts = Arrays.asList("100", "50", "25");
    //changed on 2014-1-23   
    //String url = p_slingRequest.getRequestURL().toString().replace("/_jcr_content/mainContent_par/departmentinfo.officestab","") + "?org_start=%s&org_location=%s&org_hits=%s#" + tabNamer;
	String url = p_slingRequest.getRequestURL().toString().replace("/jcr:content/mainContent_par/departmentinfo.officestab","") + "?org_start=%s&org_location=%s&org_hits=%s#" + tabNamer;      
    SearchResult facetResult = null;
    Map<String, String> facetmap = new HashMap<String, String>();
    facetmap.put("1_prop", "orginfo/DEPTID");
    facetmap.put("1_prop.value", p_deptDataNode.getProperty("DEPTID").getString());
    facetmap.put("2_prop.property", "orginfo/P_CITY" + langSuffix);
    facetmap.put("path", p_orgDataPage);
    facetmap.put("type", "cq:Page");

    Query facetQuery = builder.createQuery(PredicateGroup.create(facetmap), session);
    facetResult = facetQuery.getResult();

    //Output the facet list
    if (facetResult != null && facetResult.getFacets() != null && facetResult.getFacets().get("2_prop") != null && facetResult.getFacets().get("2_prop").getBuckets() != null) {
      out.write("<div id=\"search_left_nav\">");
      out.write(String.format("<h1 class=\"left_nav\">%s</h1>", LocaleSupport.getLocalizedMessage(pageContext,"locationText")));
      out.write("<ul>");
      Map<String, Long> orderedBucket = new TreeMap<String, Long>();
      for (Bucket bucket : facetResult.getFacets().get("2_prop").getBuckets()) {
        orderedBucket.put(bucket.getValue(), bucket.getCount());
      }
      for (String key : orderedBucket.keySet()) {
        if (Utils.isNotEmpty(key)) {
          String link = String.format("<li><a href=\"" + url + "\">%s (%s)</a></li>", 0, URLEncoder.encode(key,"UTF8"), org_hits, key, orderedBucket.get(key));
          if (org_location.equals(key)) {
            link = String.format("<li><b><a href=\"" + url + "\">%s (%s)</b></a></li>", 0, "", org_hits, key, orderedBucket.get(key));
          }
          out.write(link);
        } // if bucket is empty
      } // for bucket
      out.write("</ul></div>");
    } //if there are facets

    //Output the page count selectors
    out.write("<div id=\"search_column\">");
    out.write("<div class=\"pagination_top\">");
    for (String pageCount : pageCounts) {
      String link = String.format("<div class=\"item\"><a href=\"" + url + "\">%s</a></div>", 0, URLEncoder.encode(org_location, "UTF8"), pageCount, pageCount);
      if (org_hits.equals(pageCount)) {
        link = link.replace("<a", "<a class=\"active\"");
      }
      out.write(link);
    }
    out.write(String.format("<div class=\"item\"><span class=\"legend\">%s</span></div>", LocaleSupport.getLocalizedMessage(pageContext, "legendText")));
    out.write("<div class=\"clearfloat\"></div>");
    out.write("</div>");

    //Iterate the results and include the search result rendering of each
    out.write("<table><tr>");
    out.write(String.format("<th>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "contactText")));
    out.write(String.format("<th>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "emailText")));
    out.write(String.format("<th>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "locationText")));
    out.write("</tr>");
    WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
    try {
      for (Hit hit : result.getHits()) {
        %><sling:include path="<%=hit.getPath() + ".searchresult_embeded_narrow.html" %>" /><%
      }
    } finally {
      imcludemode.toRequest(request);
    }
    out.write("</table>");

    //Output the bottom pagination
    if (result.getResultPages().size() > 1) {
      out.write("<div class=\"pagination\">");
      out.write(String.format("<div class=\"item\"><span class=\"legend\">%s</span></div>", LocaleSupport.getLocalizedMessage(pageContext, "resultPagesText")));
      if (result.getPreviousPage() != null) {
        out.write(String.format("<div class=\"item\"><a href=\"" + url + "\">%s</a></div>", result
            .getPreviousPage().getStart(), URLEncoder.encode(org_location, "UTF8"), org_hits, LocaleSupport
            .getLocalizedMessage(pageContext, "previousText")));
      }
      for (ResultPage resultPage : result.getResultPages()) {
        String linkText = new Long(resultPage.getIndex() + 1).toString();
        if (resultPage.isCurrentPage()) {
          out.write(String.format("<div class=\"item\"><a href=\"#\" class=\"active\">%s</a></div>", linkText));
        } else {
          out.write(String.format("<div class=\"item\"><a href=\"" + url + "\">%s</a></div>", 
              resultPage.getStart(), URLEncoder.encode(org_location, "UTF8"), org_hits, linkText));
        }
      } // for each page
      if (result.getNextPage() != null) {
        out.write(String.format("<div class=\"item\"><a href=\"" + url + "\">%s</a></div>", result.getNextPage()
            .getStart(), URLEncoder.encode(org_location, "UTF8"), org_hits, LocaleSupport.getLocalizedMessage(
            pageContext, "nextText")));
      }
      out.write("</div>");
    } // if 2+ pages

    out.write("</div>");
    out.write("<div class=\"clearfloat\"></div>");

  } // if there are results
  out.write("</div>");

  out.write("<div id=\"contactView\">");   
  result = null;
  if (p_deptDataNode != null && p_contactDataPage != null) {
    Map<String, String> querymap = new HashMap<String, String>();
    querymap.put("1_prop", "contactinfo/DEPTID");
    querymap.put("1_prop.value", p_deptDataNode.getProperty("DEPTID").getString());
    querymap.put("2_prop.property", "contactinfo/P_CITY" + langSuffix);
    querymap.put("orderby", "@contactinfo/@LASTNAME");
    querymap.put("path", p_contactDataPage);
    querymap.put("type", "cq:Page");
    if (Utils.isNotEmpty(contact_location)) {
      querymap.put("2_prop", "contactinfo/P_CITY" + langSuffix);
      querymap.put("2_prop.value", contact_location);
    }

    Query query = builder.createQuery(PredicateGroup.create(querymap), session);

    if (Utils.isNotEmpty(contact_start)) {
      query.setStart(Long.valueOf(contact_start));
    }
    contact_hits = Utils.isNotEmpty(contact_hits) ? contact_hits : "25";
    query.setHitsPerPage(Integer.parseInt(contact_hits));
    result = query.getResult();
  } //if (p_deptDataNode != null && p_contactDataPage != null)

  if (result != null && result.getTotalMatches() > 0) {
    List<String> pageCounts = Arrays.asList("100", "50", "25");
    String url = p_slingRequest.getRequestURL().toString().replace("/_jcr_content/mainContent_par/departmentinfo.officestab","") + "?contact_start=%s&contact_location=%s&contact_hits=%s#offices";

    SearchResult facetResult = null;
    Map<String, String> facetmap = new HashMap<String, String>();
    facetmap.put("1_prop", "contactinfo/DEPTID");
    facetmap.put("1_prop.value", p_deptDataNode.getProperty("DEPTID").getString());
    facetmap.put("2_prop.property", "contactinfo/P_CITY" + langSuffix);
    facetmap.put("path", p_contactDataPage);
    facetmap.put("type", "cq:Page");
    Query facetQuery = builder.createQuery(PredicateGroup.create(facetmap), session);
    facetResult = facetQuery.getResult();

    //Output the facet list
    if (facetResult != null && facetResult.getFacets() != null && facetResult.getFacets().get("2_prop") != null
        && facetResult.getFacets().get("2_prop").getBuckets() != null) {
      out.write("<div id=\"search_left_nav\">");
      out.write(String.format("<h1 class=\"left_nav\">%s</h1>", LocaleSupport.getLocalizedMessage(pageContext, "locationText")));
      out.write("<ul>");
      Map<String, Long> orderedBucket = new TreeMap<String, Long>();
      for (Bucket bucket : facetResult.getFacets().get("2_prop").getBuckets()) {
        orderedBucket.put(bucket.getValue(), bucket.getCount());
      }

      for (String key : orderedBucket.keySet()) {
        if (Utils.isNotEmpty(key)) {
          String link = String.format("<li><a href=\"" + url + "\">%s (%s)</a></li>", 0, URLEncoder.encode(key, "UTF8"), contact_hits, key, orderedBucket.get(key));
          if (contact_location.equals(key)) {
            link = String.format("<li><b><a href=\"" + url + "\">%s (%s)</b></a></li>", 0, "", contact_hits, key, orderedBucket.get(key));
          }
          out.write(link);
        } // if bucket is empty
      } // for bucket
      out.write("</ul></div>");
    } //if there are facets

    //Output the page count selectors
    out.write("<div id=\"search_column\">");
    out.write("<div class=\"pagination_top\">");
    for (String pageCount : pageCounts) {
      String link = String.format("<div class=\"item\"><a href=\"" + url + "\">%s</a></div>", 0, URLEncoder.encode(contact_location, "UTF8"), pageCount, pageCount);
      if (contact_hits.equals(pageCount)) {
        link = link.replace("<a", "<a class=\"active\"");
      }
      out.write(link);
    }
    out.write(String.format("<div class=\"item\"><span class=\"legend\">%s</span></div>", LocaleSupport.getLocalizedMessage(pageContext, "legendText")));
    out.write("<div class=\"clearfloat\"></div>");
    out.write("</div>");

    //Iterate the results and include the search result rendering of each
    out.write("<table><tr>");
    out.write(String.format("<th>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "contactText")));
    out.write(String.format("<th>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "emailText")));
    out.write(String.format("<th>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "locationText")));
    out.write("</tr>");
    WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
    try {
      for (Hit hit : result.getHits()) {
        %><sling:include path="<%=hit.getPath() + ".searchresult_embeded_narrow.html" %>" /><%
      }
    } finally {
      imcludemode.toRequest(request);
    }
    out.write("</table>");

    //Output the bottom pagination
    if (result.getResultPages().size() > 1) {
      out.write("<div class=\"pagination\">");
      out.write(String.format("<div class=\"item\"><span class=\"legend\">%s</span></div>", LocaleSupport.getLocalizedMessage(pageContext, "resultPagesText")));
      if (result.getPreviousPage() != null) {
        out.write(String.format("<div class=\"item\"><a href=\"" + url + "\">%s</a></div>", result
            .getPreviousPage().getStart(), URLEncoder.encode(contact_location, "UTF8"), contact_hits,
            LocaleSupport.getLocalizedMessage(pageContext, "previousText")));
      }
      for (ResultPage resultPage : result.getResultPages()) {
        String linkText = new Long(resultPage.getIndex() + 1).toString();
        if (resultPage.isCurrentPage()) {
          out.write(String.format("<div class=\"item\"><a href=\"#\" class=\"active\">%s</a></div>", linkText));
        } else {
          out.write(String.format("<div class=\"item\"><a href=\"" + url + "\">%s</a></div>", 
              resultPage.getStart(), URLEncoder.encode(contact_location, "UTF8"), contact_hits, linkText));
        }
      } // for each page
      if (result.getNextPage() != null) {
        out.write(String.format("<div class=\"item\"><a href=\"" + url + "\">%s</a></div>", 
            result.getNextPage().getStart(), URLEncoder.encode(contact_location, "UTF8"), contact_hits, 
            LocaleSupport.getLocalizedMessage(pageContext, "nextText")));
      }
      out.write("</div>");
    } // if 2+ pages

    out.write("</div>");
    out.write("<div class=\"clearfloat\"></div>");

  } // if there are results
  else {
	  %><p><%=p_deptDataNode.getProperty("DEPTNAME"+langSuffix).getString()%>    <fmt:message key="noEmployees" /></p><%
  }
  out.write("</div>");
  out.write("</div>"); 
} catch (Exception ex) {
  out.write("Unable to display offices for this department");
  log.error("DepartmentInfo component unable to render offices tab.", ex);
}
%>
      <script   type='text/javascript'>
                   
        $(document).ready(function() {
        
              $('#officeviewToggle').click(function() {
                              $.cookie("tab", null);
                  $("#orgView").toggle();
                  $("#contactView").toggle();                  
                  if( $('#officeviewToggle').html() == $('#toggletextOffice').val() ){
                    $("#officeviewToggle").html($('#toggletextContacts').val());
                  }else{ 
                    $.cookie("tab", "contacts office", { expires: 1 });
                    $("#officeviewToggle").html($('#toggletextOffice').val());
                  }
                  
              });      
        
       if($.cookie("tab")=="contacts office") {
       
          $('#officeviewToggle').click();
        }   
        });

      </script>
