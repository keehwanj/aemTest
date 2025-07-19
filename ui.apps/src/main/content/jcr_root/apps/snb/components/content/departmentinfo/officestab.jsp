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

<%@page import="java.net.URLDecoder"%>
<%
try {
  //These are setup in the init.jsp
  final Resource p_resource = resource;
  final SlingHttpServletRequest p_slingRequest = slingRequest;
  final Node p_deptDataNode = (Node)request.getAttribute("deptDataNode");
  final String p_orgDataPage = (String)request.getAttribute("orgDataPage");
  final String p_contactDataPage = (String)request.getAttribute("contactDataPage");
  final String lang = (String) request.getAttribute("lang");
  final String s=request.getServerName();  
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

  contact_location = URLDecoder.decode(contact_location, "UTF-8");
  org_location = URLDecoder.decode(org_location, "UTF-8");  

  //checking French accent place...Saint-André
  boolean contact_location_sa=contact_location.contains("Saint-Andr");
  boolean org_location_sa=org_location.contains("Saint-Andr");

  //checking French accent place...Lamèque
  boolean contact_location_la=contact_location.contains("Lam");
  boolean org_location_la=org_location.contains("Lam");

  //checking French accent place...Rivière-Verte
  boolean contact_location_rv=contact_location.contains("Rivi");
  boolean org_location_rv=org_location.contains("Rivi");

  //checking French accent place...Saint-Léonard
  boolean contact_location_sl=contact_location.contains("Saint-L");
  boolean org_location_sl=org_location.contains("Saint-L");    


  //START of id=offices
  out.write("<!--START of id=offices-->");    
  out.write("<div id=\"offices\">");      
  out.write(String.format("<input type=\"hidden\" id=\"toggletextOffice\" value=\"%s\"></input>",LocaleSupport.getLocalizedMessage(pageContext, "toggleOfficeViewText"))); 
  out.write(String.format("<input type=\"hidden\" id=\"toggletextContacts\" value=\"%s\"></input>",LocaleSupport.getLocalizedMessage(pageContext, "toggleContactsViewText")));
  //START of id=officeviewToggle
  out.write("<!--START of id=officeviewToggle-->");    
  out.write(String.format("<a id=\"officeviewToggle\">%s</a>", LocaleSupport.getLocalizedMessage(pageContext, "toggleContactsViewText")));                 
  out.write("<!--END of id=officeviewToggle-->");      
  //END of id=officeviewToggle    
  out.write("<br />");

  //START of id="orgView"
  out.write("<!--STRT of id=orgView-->");       
  out.write("<div id=\"orgView\">");     

    //start of 1st testing

  if (p_deptDataNode != null && p_orgDataPage != null) {
    Map<String, String> querymap = new HashMap<String, String>();
    querymap.put("1_property", "orginfo/DEPTID");
    querymap.put("1_property.value", p_deptDataNode.getProperty("DEPTID").getString());
    querymap.put("path", p_orgDataPage);
    querymap.put("orderby", "@orginfo/@ORGNAME" + langSuffix + "_STRIP");
    querymap.put("type", "cq:Page");

    if (Utils.isNotEmpty(org_location)) {
        querymap.put("2_property", "orginfo/P_CITY" + langSuffix);
        //exception for Saint-André
        if(org_location_sa){
      		querymap.put("2_property.value", "%Saint-Andr%");
            querymap.put("2_property.operation", "like");
        }
 		//exception for Lamèque
        else if(org_location_la){
      		querymap.put("2_property.value", "%Lam%");
            querymap.put("2_property.operation", "like");
        }
 		//exception for Rivière-Verte
        else if(org_location_rv){
      		querymap.put("2_property.value", "%Rivi%");
            querymap.put("2_property.operation", "like");
        }
 		//exception for Saint-Léonard
        else if(org_location_sl){
      		querymap.put("2_property.value", "%Saint-L%");
            querymap.put("2_property.operation", "like");
        }

        else{
      		querymap.put("2_property.value", org_location);

        }
    }
      //checking/printing querybuilder
      /*
      out.write("<br/>");
      out.write("the 1st querybuilder");
      out.write("<br/>");
      for(String key: querymap.keySet()){
      	out.print(key + " = " + querymap.get(key));    
          out.print("<br/>");
      }
      */
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

    String url="";  
    url = p_slingRequest.getRequestURL().toString().replace("/_jcr_content/","");
    url = url.toString().replace("/jcr:content/","");     
    url = url.toString().replace("/jcr%3acontent/","");         
    url = url.toString().replace("mainContent_par/departmentinfo.officestab","");      
    url = url+ "?org_start=%s&org_location=%s&org_hits=%s#" + tabNamer;      


    SearchResult facetResult = null;
    Map<String, String> facetmap = new HashMap<String, String>();
    facetmap.put("1_property", "orginfo/DEPTID");
    facetmap.put("1_property.value", p_deptDataNode.getProperty("DEPTID").getString());
    facetmap.put("2_property.property", "orginfo/P_CITY" + langSuffix);
    facetmap.put("path", p_orgDataPage);
    facetmap.put("type", "cq:Page");

      //checking/printing querybuilder
      /*
       out.write("<br/>");
       out.write("the 2nd querybuilder");
       out.write("<br/>");
       for(String key: facetmap.keySet()){
      	out.print(key + " = " + facetmap.get(key));    
          out.print("<br/>");
        }
        */
    Query facetQuery = builder.createQuery(PredicateGroup.create(facetmap), session);
    facetResult = facetQuery.getResult();

%>

  <div class="row">
    <div class="col-sm-2">
<%

    //Output the facet list
    //START of if  
    if (facetResult != null && facetResult.getFacets() != null && facetResult.getFacets().get("2_property") != null && facetResult.getFacets().get("2_property").getBuckets() != null) {
      //START of id=search_left_nav  
      out.write("<!--START of id=search_left_nav-->"); 
      out.write("<div id=\"search_left_nav\">");
      out.write(String.format("<h1 class=\"left_nav\">%s</h1>", LocaleSupport.getLocalizedMessage(pageContext,"locationText")));
      out.write("<ul>");
      Map<String, Long> orderedBucket = new TreeMap<String, Long>();
      for (Bucket bucket : facetResult.getFacets().get("2_property").getBuckets()) {
        orderedBucket.put(bucket.getValue(), bucket.getCount());
      }
      for (String key : orderedBucket.keySet()) {
        if (Utils.isNotEmpty(key)) {
          String link = String.format("<li><a href=\"" + url + "\">%s <span class=\"badge\">%s</span></a></li>", 0, URLEncoder.encode(key,"UTF8"), org_hits, key, orderedBucket.get(key));
          if (org_location.equals(key)) {
            link = String.format("<li><b><a href=\"" + url + "\">%s <span class=\"badge\">%s</span></b></a></li>", 0, "", org_hits, key, orderedBucket.get(key));
          }
          out.write(link);
        } // if bucket is empty
      } // for bucket
      out.write("</ul></div>");
      out.write("<!--END of id=search_left_nav-->");  
      //END of id=search_left_nav  
    } 
    //END of if  


%>        
    </div>
    <div class="col-sm-10">
<%
    //Output the page count selectors
    //START of id=search_column  
    out.write("<!--START of id=search_column-->");   
    out.write("<div id=\"search_column\">");
    out.write("<div class=\"pagination_top\">");
    //STAR of for loop  

    for (String pageCount : pageCounts) {
      String link = String.format("<div class=\"item\"><a href=\"" + url + "\">%s</a></div>", 0, URLEncoder.encode(org_location, "UTF8"), pageCount, pageCount);
      if (org_hits.equals(pageCount)) {
        link = link.replace("<a", "<a class=\"active\"");
      }
      out.write(link);
    }
    //END of for loop  

    out.write(String.format("<div class=\"item\"><span class=\"legend\">%s</span></div>", LocaleSupport.getLocalizedMessage(pageContext, "legendText")));
    out.write("<div class=\"clearfloat\"></div>");
    out.write("</div>");


    //Iterate the results and include the search result rendering of each
    //START of table
    out.write("<!--START of table-->");
    out.write("<div class=\"table-responsive\">");      
    out.write("<table  class=\"table table-hover\"><tr>");
    out.write(String.format("<th>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "contactText")));
    out.write(String.format("<th class=\"text-nowrap\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "emailText")));
    out.write(String.format("<th class=\"text-nowrap\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "locationText")));
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
    out.write("</div>");  
    out.write("<!--END of table-->");
    //END of table

    //Output the bottom pagination
    // START of if  
    if (result.getResultPages().size() > 1) {
      //START of class=pagination
	  out.write("<!--START of class=pagination-->");
      out.write("<ul class=\"pagination\">");
      out.write(String.format("<li class=\"item\"><span class=\"legend\">%s</span></li>", LocaleSupport.getLocalizedMessage(pageContext, "resultPagesText")));
      if (result.getPreviousPage() != null) {
        out.write(String.format("<li class=\"item\"><a href=\"" + url + "\">%s</a></li>", result.getPreviousPage().getStart(), URLEncoder.encode(org_location, "UTF8"), org_hits, LocaleSupport.getLocalizedMessage(pageContext, "previousText")));
      }
      for (ResultPage resultPage : result.getResultPages()) {
        String linkText = new Long(resultPage.getIndex() + 1).toString();
        if (resultPage.isCurrentPage()) {
          out.write(String.format("<li class=\"item active\"><a href=\"#\" class=\"active\">%s</a></li>", linkText));
        } else {
          out.write(String.format("<li class=\"item\"><a href=\"" + url + "\">%s</a></li>",resultPage.getStart(), URLEncoder.encode(org_location, "UTF8"), org_hits, linkText));
        }
      } // for each page
      if (result.getNextPage() != null) {
        out.write(String.format("<li class=\"item\"><a href=\"" + url + "\">%s</a></li>",result.getNextPage().getStart(),URLEncoder.encode(org_location,"UTF8"),org_hits,LocaleSupport.getLocalizedMessage(pageContext,"nextText")));
      }
      out.write("</ul>");
	  out.write("<!--END of class=pagination-->");
	 //END of class=pagination        
    }
    // END of if

    out.write("</div>");
    out.write("<!--END of id=search_column-->"); 
	//END of id=search_column  

    out.write("<div class=\"clearfloat\"></div>");


%>
    </div>
  </div>

<%

  } // if there are results

    //end of 1st testing

  out.write("</div>");
  out.write("<!--END of id=orgView-->");  
  //END of id="orgView"  



  //START of id="contactView"  
  out.write("<!--START of id=contactView-->");     
  out.write("<div id=\"contactView\">");  

  //start of 2nd testing

  result = null;
  if (p_deptDataNode != null && p_contactDataPage != null) {
    Map<String, String> querymap = new HashMap<String, String>();
    querymap.put("1_property", "contactinfo/DEPTID");
    querymap.put("1_property.value", p_deptDataNode.getProperty("DEPTID").getString());
      //querymap.put("2_property.property", "contactinfo/P_CITY" + langSuffix);
    querymap.put("orderby", "@contactinfo/@LASTNAME");
    querymap.put("path", p_contactDataPage);
    querymap.put("type", "cq:Page");
    if (Utils.isNotEmpty(contact_location)) {
        querymap.put("2_property", "contactinfo/P_CITY" + langSuffix);
        if(contact_location_sa){
      		querymap.put("2_property.value", "%Saint-Andr%");
            querymap.put("2_property.operation", "like");
        }

        else if(contact_location_la){
      		querymap.put("2_property.value", "%Lam%");
            querymap.put("2_property.operation", "like");
        }

        else if(contact_location_rv){
      		querymap.put("2_property.value", "%Rivi%");
            querymap.put("2_property.operation", "like");
        }

        else if(contact_location_sl){
      		querymap.put("2_property.value", "%Saint-L%");
            querymap.put("2_property.operation", "like");
        }

        else{
 			querymap.put("2_property.value", contact_location);
        }

    }

      //checking/printing querybuilder
      /*
      out.write("<br/>");
      out.write("the 3rd querybuilder");
      out.write("<br/>");
       for(String key: querymap.keySet()){
      	out.print(key + " = " + querymap.get(key));    
           out.print("<br/>");
       }
	*/

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

      //Changed on 2014-1-23      
      //String s1=request.getServerName();
      String url =""; 

    url = p_slingRequest.getRequestURL().toString().replace("/_jcr_content/","");
    url = url.toString().replace("/jcr:content/","");   
    url = url.toString().replace("/jcr%3acontent/","");           
    url = url.toString().replace("mainContent_par/departmentinfo.officestab","");      
    //url = url+ "?contact_start=%s&contact_location=%s&contact_hits=%s#offices";      
	url = url+ "?contact_start=%s&contact_location=%s&contact_hits=%s#" + tabNamer;         

    SearchResult facetResult = null;
    Map<String, String> facetmap = new HashMap<String, String>();
    facetmap.put("1_property", "contactinfo/DEPTID");
    facetmap.put("1_property.value", p_deptDataNode.getProperty("DEPTID").getString());
    facetmap.put("2_property.property", "contactinfo/P_CITY" + langSuffix);
    facetmap.put("path", p_contactDataPage);
    facetmap.put("type", "cq:Page");

      //checking/printing querybuilder
      // out.write("<br/>");
      // out.write("the 4th querybuilder");
      //out.write("<br/>");
      //for(String key: facetmap.keySet()){
      //	out.print(key + " = " + facetmap.get(key));    
      //    out.print("<br/>");
      // }


    Query facetQuery = builder.createQuery(PredicateGroup.create(facetmap), session);
    facetResult = facetQuery.getResult();

%>

  <div class="row">
    <div class="col-sm-2">
<%
    //Output the facet list
    //START of if    
    if (facetResult != null && facetResult.getFacets() != null && facetResult.getFacets().get("2_property") != null && facetResult.getFacets().get("2_property").getBuckets() != null) {
      //START of id=search_left_nav  
      out.write("<!--START of id=search_left_nav-->");   
      out.write("<div id=\"search_left_nav\">");
      out.write(String.format("<h1 class=\"left_nav\">%s</h1>", LocaleSupport.getLocalizedMessage(pageContext, "locationText")));
      out.write("<ul>");
      Map<String, Long> orderedBucket = new TreeMap<String, Long>();
      for (Bucket bucket : facetResult.getFacets().get("2_property").getBuckets()) {
        orderedBucket.put(bucket.getValue(), bucket.getCount());
      }

      for (String key : orderedBucket.keySet()) {
        if (Utils.isNotEmpty(key)) {
          String link = String.format("<li><a href=\"" + url + "\">%s <span class=\"badge\">%s</span></a></li>", 0, URLEncoder.encode(key, "UTF8"), contact_hits, key, orderedBucket.get(key));
          if (contact_location.equals(key)) {
            link = String.format("<li><b><a href=\"" + url + "\">%s <span class=\"badge\">%s</span></b></a></li>", 0, "", contact_hits, key, orderedBucket.get(key));
          }
          out.write(link);
        } // if bucket is empty
      } // for bucket
      out.write("</ul></div>");
      out.write("<!--END of id=search_left_nav-->");  
      //END of id=search_left_nav          
    }
    //END of if  

%>

    </div>
    <div class="col-sm-10">
<%
    //Output the page count selectors
    //START of id=search_column  
    out.write("<!--START of id=search_column-->");         
    out.write("<div id=\"search_column\">");

    //START of pagination_top 
    out.write("<!--START of pagination_top-->");         
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
    out.write("<!--END of pagination_top-->");         
	//END of pagination_top 

    //Iterate the results and include the search result rendering of each
    //START of table  
    out.write("<!--START of table-->");  
    out.write("<div class=\"table-responsive\">");    
    out.write("<table  class=\"table table-hover\"><tr>");
    out.write(String.format("<th>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "contactText")));
    out.write(String.format("<th class=\"text-nowrap\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "emailText")));
    out.write(String.format("<th class=\"text-nowrap\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "locationText")));
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
      out.write("</div>");   
    out.write("<!--END of table-->");    
    //END of table  

    //Output the bottom pagination
    //START of if 
    if (result.getResultPages().size() > 1) {
      //START of class=pagination  
      out.write("<!--START of class=pagination-->");    
      out.write("<ul class=\"pagination\">");
      out.write(String.format("<li class=\"item\"><span class=\"legend\">%s</span></li>",LocaleSupport.getLocalizedMessage(pageContext, "resultPagesText")));
      if (result.getPreviousPage() != null) {
        out.write(String.format("<li class=\"item\"><a href=\"" + url + "\">%s</a></li>",result.getPreviousPage().getStart(), URLEncoder.encode(contact_location, "UTF8"), contact_hits,LocaleSupport.getLocalizedMessage(pageContext, "previousText")));
      }
      for (ResultPage resultPage : result.getResultPages()) {
        String linkText = new Long(resultPage.getIndex() + 1).toString();
        if (resultPage.isCurrentPage()) {
          out.write(String.format("<li class=\"item active\"><a href=\"#\" class=\"active\">%s</a></li>",linkText));
        } else {
          out.write(String.format("<li class=\"item\"><a href=\"" + url + "\">%s</a></li>",resultPage.getStart(), URLEncoder.encode(contact_location, "UTF8"),contact_hits, linkText));
        }
      } // for each page
      if (result.getNextPage() != null) {
        out.write(String.format("<li class=\"item\"><a href=\"" + url + "\">%s</a></li>",result.getNextPage().getStart(),URLEncoder.encode(contact_location, "UTF8"),contact_hits,LocaleSupport.getLocalizedMessage(pageContext, "nextText")));
      }
      out.write("</ul>");
      out.write("<!--END of class=pagination-->");    
      //END of class=pagination  
    } 
    // END of if

    out.write("</div>");
    out.write("<!--END of id=search_column-->");        
    //END of id=search_column        

%>
    </div>
  </div>
<%
    out.write("<div class=\"clearfloat\"></div>");
  } // if there are results
  else {
	  %><p><%=p_deptDataNode.getProperty("DEPTNAME"+langSuffix).getString()%>    <fmt:message key="noEmployees" /></p><%
  }
  //end of 2nd testing


  out.write("</div>");
  out.write("<!--END of id=contactView-->");  
  //END of id="contactView"     

  out.write("</div>"); 
  out.write("<!--END of id=offices-->");   
  //END of id="offices"

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
			}
            else{ 
				$.cookie("tab", "contacts office", { expires: 1 });
				$("#officeviewToggle").html($('#toggletextOffice').val());
			}
		});      
		if($.cookie("tab")=="contacts office") {
			$('#officeviewToggle').click();
            //alert( $.cookie("tab") );
		}   
	});
</script>
