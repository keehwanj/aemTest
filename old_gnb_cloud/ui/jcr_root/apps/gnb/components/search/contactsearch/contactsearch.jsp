<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Arrays"%>
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
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%!
private static final String UPPERCASE_ASCII =
  "AEIOU" // grave
  + "AEIOUY" // acute
  + "AEIOUY" // circumflex
  + "AON" // tilde
  + "AEIOUY" // umlaut
  + "A" // ring
  + "C" // cedilla
  + "OU" // double acute
  ;

private static final String UPPERCASE_UNICODE =
  "\u00C0\u00C8\u00CC\u00D2\u00D9"
  + "\u00C1\u00C9\u00CD\u00D3\u00DA\u00DD"
  + "\u00C2\u00CA\u00CE\u00D4\u00DB\u0176"
  + "\u00C3\u00D5\u00D1"
  + "\u00C4\u00CB\u00CF\u00D6\u00DC\u0178"
  + "\u00C5"
  + "\u00C7"
  + "\u0150\u0170"
  ;

protected static String toUpperCaseSansAccent(String txt) {
     if (txt == null) {
        return null;
     } 
     String txtUpper = txt.toUpperCase();
     StringBuilder sb = new StringBuilder();
     int n = txtUpper.length();
     for (int i = 0; i < n; i++) {
        char c = txtUpper.charAt(i);
        int pos = UPPERCASE_UNICODE.indexOf(c);
        if (pos > -1){
          sb.append(UPPERCASE_ASCII.charAt(pos));
        }
        else {
          sb.append(c);
        }
     }
     return sb.toString();
}


%>
<%
  // Get language and content bundle for that language
  String lang = "fr";
  String langsuffix = "FRE";
  String sMessage = "Veuillez ne pas employer un ast&#233risque pour les deux premiers caract&#232;res du mot-cl&#233."; 
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
    langsuffix = "ENG";
    sMessage = "Please do not enter an asterisk as either of the first two characters of the keyword" ; 
  }

  //Account for localized images
  String localizedImagePath = "/etc/designs/gnb/images/";

  if (lang == "fr") {
    localizedImagePath += "fr/";
  }
  TagManager tm = resourceResolver.adaptTo(TagManager.class);
  int nInvalidSearch = 0; 

%>

<cq:setContentBundle language="<%=lang%>" />
<%
  final Session session = resource.getResourceResolver().adaptTo(Session.class);
  final String keywordLabel = new String(LocaleSupport.getLocalizedMessage(pageContext, "keyword").getBytes("UTF8"),"UTF8");
  Map<String, String> map = new HashMap<String, String>();

	//final String lname = xssAPI.encodeForHTML(Utils.nullReplace(slingRequest.getParameter("lname")));
	//final String fname = xssAPI.encodeForHTML(Utils.nullReplace(slingRequest.getParameter("fname")));

    final String lname = Utils.nullReplace(slingRequest.getParameter("lname"));
    final String fname = Utils.nullReplace(slingRequest.getParameter("fname"));

  String deptId = Utils.nullReplace(slingRequest.getParameter("deptId"));

  final String keyword = Utils.nullReplace(slingRequest.getParameter("keyword")); 
	//final String keyword = xssAPI.encodeForHTML(Utils.nullReplace(slingRequest.getParameter("keyword"))); 
  final String start = Utils.nullReplace(slingRequest.getParameter("start"));
  String hits = Utils.nullReplace(slingRequest.getParameter("hits"));
  final String tagid = Utils.nullReplace(slingRequest.getParameter("tag"));
  String encodedLname =new String(lname.getBytes("UTF8"), "UTF8"); 
  String encodedFname = new String(fname.getBytes("UTF8"), "UTF8"); 
  String encodedKeyword = new String(keyword.getBytes("UTF8"), "UTF8"); 
  encodedKeyword = encodedKeyword.trim();  

/*START of XSSS*/
  encodedKeyword = xssAPI.encodeForHTML(encodedKeyword);   
  encodedLname = xssAPI.encodeForHTML(encodedLname);   
  encodedFname = xssAPI.encodeForHTML(encodedFname);   
/*END of XSSS*/

  List<String> hitList = new ArrayList<String>();
  String phase = "contact";
  SearchResult result = null;
  final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);

  Page configuationPage = pageManager.getPage("/content/gnbconfig");
  TreeMap<String, String> sorted_map = new TreeMap<String, String>();
  //Make sure the resource is a Tag Node  
  if (configuationPage != null) {
      if (configuationPage.getProperties().get("organizationTagData_" + lang) != null) {
      String path = configuationPage.getProperties().get("organizationTagData_" + lang).toString();
      // line below - this gets us a resource that points to (is associated with ) /etc/tags/gnb-eng/organizations
      Resource res = resourceResolver.getResource(path);
      Map<String, String> deptMap = new HashMap<String, String>();
      DepartmentValueComparator bvc = new DepartmentValueComparator(deptMap);
      sorted_map = new TreeMap<String, String>(bvc);
      if (res != null && "cq/tagging/components/tag".equalsIgnoreCase(res.getResourceType())) {
        final Tag tn = res.adaptTo(Tag.class);
        //first iteration gives headers; second gives all the departments/agencies/secretaries/etc...
        for (Iterator<Tag> orgTagItr = tn.listAllSubTags(); orgTagItr.hasNext();) {          
          Tag headTag = orgTagItr.next();
          for (Iterator<Tag> headTagItr = headTag.listAllSubTags(); headTagItr.hasNext();) {
            Tag baseTag = headTagItr.next();
            // cycle through the tags in our tag resource (based on path from config page) - place tags in deptMap 
            deptMap.put(baseTag.getDescription(), baseTag.getTitle());
          }
        }
        sorted_map.putAll(deptMap);

    /*START of map string for writing querybuilder*/
    /*
	for (Map.Entry<String, String> entry : sorted_map.entrySet())
	{
        out.write(entry.getKey() + ":" + entry.getValue());
        out.write("<br/>");
	}
    */
    /*END of map string  for writing querybuilder*/




        pageContext.setAttribute("deptMap", sorted_map);
      } else {
        log.warn("The resource needs to point to a validTag List.");
      }
    } else {
      log.warn("No organization tags defined in configuration.");
    }
  }
  //check for wildcard character in keyword field 
  //char c = encodedKeyword.charAt(0); 
  //String cStr; 
  //cStr = Character.toString(c); 
  //out.write ("<br>index of" + encodedKeyword.indexOf("*")); 
  //out.write ("<br>encodedKeyword cstr = " + cStr ); 
  if (encodedKeyword.indexOf("*") == 0 || encodedKeyword.indexOf("*") == 1  ){
     nInvalidSearch = 1;  
     //out.write ("nInvalidSearch = " + nInvalidSearch ); 
  }else {
      //First Business Request does a check to see if the only thing selected is dept id.
     //out.write ("<br>dept id" + properties.get("departmentId", "")); 
     if (!Utils.isNotEmpty(properties.get("departmentId", "")) && Utils.isNotEmpty(deptId) && !Utils.isNotEmpty(lname) && !Utils.isNotEmpty(fname)
         && (!Utils.isNotEmpty(encodedKeyword) || encodedKeyword.equals(keywordLabel))) {
       String deptPath = Utils.getDepartmentPath(deptId, resource);
       //out.write ("<br>deptPath =  " + deptPath ); 
       String deptLink = Utils.getQuicklink(deptPath,currentPage,resource);
       if(deptLink!=null) {

         String href = deptLink.substring(deptLink.indexOf("\"") + 1);
         href = href.substring(0, href.indexOf("\""));

         /**changed jsp code to jquery code due to jsp code not working in AEM6.2(form action works first in AEM6.2)**/
           //response.sendRedirect(href);
           %>
			<script type="text/javascript">
                $(location).attr('href', '<%=href%>')
			</script>
			<%

       } else {
       
         log.warn("*** No department renderer defined in configuration. ***");
       }
     }


     //Second Business Request does a check to see if there is only a keyword entered.
     if ((Utils.isNotEmpty(encodedKeyword) && !encodedKeyword.equals(keywordLabel))&& !Utils.isNotEmpty(fname) && !Utils.isNotEmpty(lname) && !Utils.isNotEmpty(properties.get("departmentId", ""))) {
        phase = "dept";

         if (Utils.isNotEmpty(deptId)) {
           //show all the organizations under this dept with the keyword
           String organizationDataPage = configuationPage.getProperties().get("organisationDataPage", "");

            if (Utils.isNotEmpty(organizationDataPage)) {
              String deptOrgId = Utils.getDepartmentPath(deptId, resource).replace(organizationDataPage + "/", "");

                //deptOrgId is a number so we have to convert it to how xpath reads numbers      
              if (Utils.isNotEmpty(deptOrgId)) {
				 /*START of new orderby in AEM 6.2*/
				 map.put("path", organizationDataPage+ "/"+ new StringBuilder(deptOrgId.substring(0, 1)).append(deptOrgId.substring(1)).append("/").toString());
                 map.put("type", "cq:Page");  
                 map.put("group.p.or","true");   
                 map.put("group.1_fulltext", encodedKeyword.replace("'","''"));
                 map.put("group.1_fulltext.relPath", "./orginfo/."); 
                 map.put("group.2_property", "jcr:content/cq:tags");
                 map.put("group.2_property.1_value", encodedKeyword.replace("'","''"));  
                 map.put("orderby", "@ORGNAME" + langsuffix + "_STRIP");
                  //map.put("p.guessTotal", "true");  //newly added  
				 /*END of new orderby in AEM 6.2*/                  

              } else {
                 log.warn("*** INVALID DEPTARTMENT ID: " + deptId +" ***");
              }
           } else {
              log.warn("*** No organisation data page set in config.");
           }

         } else {
            /*START of new orderby in AEM 6.2*/
            map.put("path", "/content/data/organizations");
            map.put("type", "cq:Page");  
            map.put("group.p.or","true");   
            map.put("group.1_fulltext", encodedKeyword.replace("'","''"));
            map.put("group.1_fulltext.relPath", "./orginfo/."); 
            map.put("group.2_property", "jcr:content/cq:tags");
            map.put("group.2_property.1_value", encodedKeyword.replace("'","''"));  

            map.put("1_orderby", "@orginfo/DEPTNAME"+ langsuffix  + "_STRIP");
            map.put("2_orderby", "@orginfo/ORGNAME" + langsuffix + "_STRIP"); 
             //map.put("p.guessTotal", "true");  //newly added 
			/*END of new orderby in AEM 6.2*/
         }
      }

      //Business Cases with first and/or last name are entered
      if (Utils.isNotEmpty(lname) || Utils.isNotEmpty(fname) || Utils.isNotEmpty(properties.get("departmentId", "")) ) {
         if(Utils.isNotEmpty(properties.get("departmentId", ""))) {
           deptId =  properties.get("departmentId", "");
         }
         if (Utils.isNotEmpty(encodedFname)) {
            map.put("1_prop", "contactinfo/FIRSTNAME_STRIP");
            map.put("1_prop.operation", "like");      
            map.put("1_prop.value", toUpperCaseSansAccent(encodedFname.replace("'","''").toUpperCase()) + "%");                  
         }
         if (Utils.isNotEmpty(encodedLname)) {
            map.put("2_prop", "contactinfo/LASTNAME_STRIP");
            map.put("2_prop.value", toUpperCaseSansAccent(encodedLname.replace("'","''").toUpperCase()) + "%");
            map.put("2_prop.operation", "like");
         }
         if (Utils.isNotEmpty(deptId)) {
            map.put("3_prop", "contactinfo/DEPTID");
            map.put("3_prop.value", deptId);
            // out.write("  deptid2 = " + deptId); 
         }
         //BR 7,8 - only use keyword search if fname AND lname are blank
         if (!Utils.isNotEmpty(encodedFname) && !Utils.isNotEmpty(encodedLname) && Utils.isNotEmpty(encodedKeyword) && !encodedKeyword.equals(keywordLabel)) {
            map.put("fulltext", encodedKeyword.replace("'","''"));
         }

         if (Utils.isNotEmpty(tagid)) {
            map.put("tagid", tagid);
         }

         String dataPage = configuationPage.getProperties().get("contactDataPage", "");
         if (Utils.isNotEmpty(dataPage)) {

           /** Not work in CQ5.6.1(changed by Keehwan Jee) 
            map.put("path", dataPage + "/.");
           **/
            map.put("path", dataPage); 

            map.put("type", Nodes.PAGE.nodeType());
            /*START of new orderby in AEM 6.2*/
            //map.put("orderby", "@contactinfo/@LASTNAME_STRIP, contactinfo/@FIRSTNAME_STRIP");
            map.put("2_orderby", "@contactinfo/@LASTNAME_STRIP");
            map.put("1_orderby", "@contactinfo/@FIRSTNAME_STRIP"); 
			/*END of new orderby in AEM 6.2*/

            map.put("tagid.property", "jcr:content/cq:tags");
         } else {
            log.warn("*** No contact data page defined in configuration. ***");
         }
      }
  }
  if (!map.isEmpty()) {
    /*START of map string for writing querybuilder*/
      /*
	for (Map.Entry<String, String> entry : map.entrySet())
	{
        out.write(entry.getKey() + "=" + entry.getValue());
        out.write("<br/>");
	}
    */
    /*END of map string  for writing querybuilder*/

    Query query = builder.createQuery(PredicateGroup.create(map), session);
    if (Utils.isNotEmpty(start))
      query.setStart(Long.valueOf(start));

    if (Utils.isNotEmpty(hits)) {
      query.setHitsPerPage(Integer.parseInt(hits));
    } else {
      hits = "25";
      query.setHitsPerPage(Integer.parseInt(hits));
    }

    result = query.getResult();

    //if this is a dept query need to take off the orginfo
    if ("dept".equals(phase)) {
      for (Hit hit : result.getHits()) {
        hitList.add(hit.getPath().replace("/orginfo", ""));
      }
    }
  }

  if(!Utils.isNotEmpty(encodedKeyword) && !encodedKeyword.equals(keywordLabel)){    
    encodedKeyword = keywordLabel;
  }
  pageContext.setAttribute("phase", phase);
  pageContext.setAttribute("hitList", hitList);
  pageContext.setAttribute("start", start);
  pageContext.setAttribute("hits", hits);
  pageContext.setAttribute("hitlist", Arrays.asList("100", "50", "25"));
  pageContext.setAttribute("lname", encodedLname);
  pageContext.setAttribute("fname", encodedFname);
  pageContext.setAttribute("deptId", deptId);
  pageContext.setAttribute("keyword", encodedKeyword);
  pageContext.setAttribute("tagid", tagid);
  pageContext.setAttribute("uri", slingRequest.getRequestURL());
  pageContext.setAttribute("result", result);
  if(!properties.get("hideCriteria", false)) {
%>
<!--START of contactsearch row--> 
<div class="row">
    <!--START of col-sm-12 col-md-8 col-lg-8 col-xs-12-->  
	<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
         <!--START of search_box--> 
        <div id="search_box">
  			<div class="panel panel-default">
    			<div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="contactSearchTitle" /></div>
  			</div>
			<!--START of form-->
			<form action="${currentPage.path}.html" class="form-horizontal searchNews" id="contact_searchForm" method="get" title="<fmt:message key="contactSearchTitle"/>"  name="search_form" accept-charset="utf-8" role="form">
              				<input type="hidden" name="_charset_" value="utf-8">
				<!--START last name -->
  				<div class="form-group">
    				<label class="control-label col-sm-3 hidden-xs" for="lname"><fmt:message key="contactLastName" /></label>
    				<div class="col-sm-9">
      					<input type="text" name="lname" class="form-control searchText" id="lname" value="<%=encodedLname %>" placeholder="<fmt:message key="contactLastName" />" onclick="this.value='';">
    				</div>
  				</div>   
            	<!--END last name -->
            	<!--START first name -->
            	<div class="form-group">
    				<label class="control-label col-sm-3 hidden-xs" for="fname"><fmt:message key="contactFirstName" /></label>
    				<div class="col-sm-9">
      					<input type="text" name="fname" class="form-control searchText" id="fname" value="<%=encodedFname %>"placeholder="<fmt:message key="contactFirstName" />" onclick="this.value='';">
    				</div>
  				</div>
				<!--END first name -->

        		<input id="start" name="start" type="hidden" value="${start}" />
  				<input id="hits" name="hits" type="hidden" value="${hits}" />

            	<!--START keyword -->
            	<div class="form-group">
    				<label class="control-label col-sm-3 hidden-xs" for="keyword"><fmt:message key="keyword" /></label>
    				<div class="col-sm-9">
      					<input type="text" name="keyword"  id="keyword" class="form-control searchText searchText keyword" value="${keyword}"  placeholder="${keyword}" onclick="this.value='';">

    				</div>
  				</div>   
				<!--END of keyword -->

				<!--START of department select-->   
            	<div class="form-group">
					<label class="control-label col-sm-3 hidden-xs" for="deptId"><fmt:message key="contact_department" /></label>
            	<div class="col-sm-9">    
				<%if(!Utils.isNotEmpty(properties.get("departmentId", ""))) { %>            
	  			<select title="<fmt:message key="newsSearchAllDepartmentsText"/>" id="deptId" name="deptId" class="form-control">  
      				<option value=""><fmt:message key="newsSearchAllDepartmentsText" /></option>
    					<c:forEach var="dept" items="${deptMap}">
      						<c:choose>
        						<c:when test="${dept.key eq deptId}">
        							<option value="${dept.key}" selected="selected">
           								<c:out value="${dept.value}" />
        							</option>
        						</c:when>
        						<c:otherwise>
	    							<option value="${dept.key}"><c:out value="${dept.value}" /></option>
        						</c:otherwise>
      						</c:choose>
    					</c:forEach>
  				</select>
            	<%} %>
            	</div> 

            	</div>  
				<!--END of department select-->  


        		<!--START of submit button-->    
    			<button type="submit" class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="searchButtonText"/></button>
        		<!--END of submit button-->   

				<p><i><fmt:message key="contactSearchText" /></i></p>
			</form>
        	<!--END of form-->
		</div>
        <!--END of search_box--> 
    </div>
	<!--END of col-sm-12 col-md-8 col-lg-8 col-xs-12--> 
	<%} %>

  <!--START of col-md-4 col-lg-4 hidden-xs hidden-sm--> 
  <div class="col-md-4 col-lg-4 hidden-xs hidden-sm" >
    <cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
  </div>
  <!--END of col-md-4 col-lg-4 hidden-xs hidden-sm-->     

</div>
<!--END of contactsearch row--> 
<div class="clearfloat"></div>
<br/>
<%
if (nInvalidSearch == 1) { 
    out.write ("<br>" + sMessage + "<br><br>"); 
}
%>   
<!--START of c:choose-->
<c:choose>
    <c:when test="${empty result }"></c:when>
    <c:when test="${empty result.hits}"><fmt:message key="contactNoResultsText" /></c:when>
    <c:otherwise>
        <div id="search_column_full">
        	<div class="pagination_top">
        		<div class="item left">
        			<p class="image_reset">
            			<fmt:message key="statisticsText">
            				<fmt:param value="${result.startIndex + 1}" />
            				<fmt:param value="${result.startIndex + fn:length(result.hits)}" />
            				<fmt:param value="${result.totalMatches}" />
        				</fmt:message>
        			</p>
        		</div>
        		<c:forEach var="hitdiv" items="${hitlist}">
            		<c:choose>
                		<c:when test="${hitdiv eq hits}">
                    		<div class="item">
                            	<c:url var="theUnescapedUrl" value="${uri}">
                        			<c:param name="_charset_" value="UTF-8"/>
                        			<c:param name="fname" value="<%=encodedFname %>"/>
                        			<c:param name="lname" value="<%=encodedLname %>"/>
                        			<c:param name="deptId" value="${deptId}"/>
                        			<c:param name="tagid" value="${tagid}"/>
                        			<c:param name="keyword" value="<%=encodedKeyword%>"/>
                        			<c:param name="start" value="0"/>
                        			<c:param name="hits" value="${hitdiv}"/>
                      			</c:url>
                    			<a class="active" href="<c:out value='${theUnescapedUrl}'/>">${hitdiv}</a> 
                        	</div>
                		</c:when>
                		<c:otherwise>
                    		<div class="item">
                        		<c:url var="theUnescapedUrl" value="${uri}">
                        			<c:param name="_charset_" value="UTF-8"/>
                        			<c:param name="fname" value="<%=encodedFname %>"/>
                        			<c:param name="lname" value="<%=encodedLname %>"/>
                        			<c:param name="deptId" value="${deptId}"/>
                        			<c:param name="tagid" value="${tagid}"/>
                        			<c:param name="keyword" value="<%=encodedKeyword%>"/>
                        			<c:param name="start" value="0"/>
                        			<c:param name="hits" value="${hitdiv}"/>
                      				</c:url>
                    			<a href="<c:out value='${theUnescapedUrl}'/>">${hitdiv}</a> 
            				</div>
                		</c:otherwise>
            		</c:choose>
        		</c:forEach>
        		<div class="item"><span class="legend"><fmt:message key="legendText"/></span></div>
        		<div class="clearfloat"></div>
        	</div>
			<!--START of table"-->
        	<div class="table-responsive">
        		<table width="100%" class="table table-hover"> 
            		<tr>

                		<c:choose>

                    		<c:when test="${phase=='contact'}">
                        		<th><fmt:message key="contact" /><br/><fmt:message key="title" /></th>
                        		<th><fmt:message key="department" /><br/><fmt:message key="organization" /></th>
                        		<th><fmt:message key="telephone" /><br/><fmt:message key="fax" /></th>
                        		<th><fmt:message key="email" /></th>
                        		<c:forEach var="hit" items="${result.hits}" varStatus="status">
                        		<%
                        			WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
                            		try {%>
                                    	<!--*************************************************************************   "-->
                                        <!--the jsp executed here - is in /apps/gnb/components/page/gnbpage/searchresult.jsp   "-->
                                        <!--*************************************************************************   "-->
                            			<sling:include path="${hit.path}.searchresult.html" />
                            		<%
                            		} finally 
                            		{
                            			imcludemode.toRequest(request);
									}%>
                        		</c:forEach>
                    		</c:when>

                    		<c:otherwise>
                        		<th><fmt:message key="organization" /></th>
                        		<th><fmt:message key="telephone" /></th>
                        		<th><fmt:message key="building" /></th>
                        		<th><fmt:message key="location" /></th>
                        		<c:forEach var="hit" items="${hitList}" varStatus="status">
								<%
                        			WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
                            		try {%>
                            			<sling:include path="${hit}.searchresult.html" />
                            		<%
                            		} finally 
                            		{
										imcludemode.toRequest(request);
									}
                            		%>	
                        		</c:forEach>
                    		</c:otherwise>
                		</c:choose>

            		</tr>
        		</table>
			</div>
        	<!--END of table"-->    
			<br/>
 			<!--START of class="pagination"-->
        	<ul class="pagination">
            	<c:if test="${fn:length(result.resultPages) > 1}">
            		<!--<div class="item"><span class="legend"><fmt:message key="resultPagesText" /></span></div>-->
            		<c:forEach var="page" items="${result.resultPages}">
                		<c:choose>
                    		<c:when test="${page.currentPage}">
                        		<li class="active item"><a href="#" class="active">${page.index+ 1}</a></li>
                    		</c:when>
                    		<c:otherwise>
                        		<li class="item">
                                	<c:url var="theUnescapedUrl" value="${uri}">
                                		<c:param name="_charset_" value="UTF-8"/>
                                  		<c:param name="fname" value="${fname}"/>
                                  		<c:param name="lname" value="${lname}"/>
                                  		<c:param name="deptId" value="${deptId}"/>
                                  		<c:param name="tagid" value="${tagid}"/>
                                  		<c:param name="keyword" value="${keyword}"/>
                                  		<c:param name="start" value="${page.start}"/>
                                  		<c:param name="hits" value="${hits}"/>
                                	</c:url>
                                	<a href="<c:out value='${theUnescapedUrl}'/>">${page.index + 1}</a> 
                            	</li>
                    		</c:otherwise>
                		</c:choose>
            		</c:forEach>
            		<c:if test="${result.nextPage != null}">
                		<li class="item">
                  			<c:url var="theUnescapedUrl" value="${uri}">
                        		<c:param name="_charset_" value="UTF-8"/>
                        		<c:param name="fname" value="${fname}"/>
                        		<c:param name="lname" value="${lname}"/>
                        		<c:param name="deptId" value="${deptId}"/>
                        		<c:param name="tagid" value="${tagid}"/>
                        		<c:param name="keyword" value="${keyword}"/>
                        		<c:param name="start" value="${result.nextPage.start}"/>
                        		<c:param name="hits" value="${hits}"/>
                      		</c:url>
                        	<a href="<c:out value='${theUnescapedUrl}'/>"><fmt:message key="nextText" /></a> 
                    	</li>
            		</c:if>
            		<c:if test="${result.previousPage != null}">
                		<li class="item">
 							<c:url var="theUnescapedUrl" value="${uri}">
                        		<c:param name="_charset_" value="UTF-8"/>
                        		<c:param name="fname" value="${fname}"/>
                        		<c:param name="lname" value="${lname}"/>
                        		<c:param name="deptId" value="${deptId}"/>
                        		<c:param name="tagid" value="${tagid}"/>
                        		<c:param name="keyword" value="${keyword}"/>
                        		<c:param name="start" value="${result.previousPage.start}"/>
                        		<c:param name="hits" value="${hits}"/>
                      		</c:url>
                 			<a href="<c:out value='${theUnescapedUrl}'/>"><fmt:message key="previousText" /></a> 
                    	</li>
            		</c:if>
        		</c:if>
        	</ul>
            <!--END of class="pagination"-->
        </div>
	</c:otherwise>
</c:choose>
<!--END of c:choose-->
<div class="clearfloats"></div>
<script type="text/javascript">
	function validate() {       
    	var fname = $('#fname')[0].value;
    	var lname = $('#lname')[0].value;
    	var deptId = $('#deptId')[0].value;
    	var keyword = $('#keyword')[0].value;

    	if(fname =='' && lname =='' && deptId =='' && keyword ==''){      
      		return false;
    	}

    	$('#start')[0].value='0';     
    		return true;              
	}
</script>
<!-- FIRST css/js for last name auto complete -->
<script>
    $(function () {
        var fullpath = location.pathname;
        var pathsplit = fullpath.split(".");
        //getting path without selectors
        var path = pathsplit[0] + ".html";
        var auto_service_search = path.replace(".html", "/_jcr_content.auto_contactsearch_lname");
        $("#lname").autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: auto_service_search,
                    dataType: "json",
                    data: {
                        term: request.term
                    },
                    success: function (result) {
                        response(
                        			$.map(result, function (item) {
                        			    return {
                        			        label: item.data,
                        			        value: item.data
                        			    }
                        			})
                    			);
                    }
                });
            },
            minLength: 1,
            select: function (event, ui) {
                //$(this).closest('input').val(ui.item.value);
                //$(this).closest('form').trigger('submit');
            }
        });
    })
</script>
<!-- END css/js for last name auto complete -->
<!-- FIRST css/js for first name auto complete -->
<script>
    $(function () {
        var fullpath = location.pathname;
        var pathsplit = fullpath.split(".");
        //getting path without selectors
        var path = pathsplit[0] + ".html";
        var auto_service_search = path.replace(".html", "/_jcr_content.auto_contactsearch_fname");
        $("#fname").autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: auto_service_search,
                    dataType: "json",
                    data: {
                        term: request.term
                    },
                    success: function (result) {
                        response(
                        			$.map(result, function (item) {
                        			    return {
                        			        label: item.data,
                        			        value: item.data
                        			    }
                        			})
                    			);
                    }
                });
            },
            minLength: 1,
            select: function (event, ui) {
                //$(this).closest('input').val(ui.item.value);
                //$(this).closest('form').trigger('submit');
            }
        });
    })
</script>
<!-- END css/js for first name auto complete -->
<!-- END Javascript -->
