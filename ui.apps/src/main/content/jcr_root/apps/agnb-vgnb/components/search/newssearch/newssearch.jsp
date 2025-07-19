<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Arrays"%>
<%@page import="java.util.List"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.day.cq.wcm.foundation.Search"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.ListItem"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.t4g.cnb.tag.DepartmentValueComparator"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>

<%
  // Get language and content bundle for that language
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }
  locale = new Locale(lang);
%>
<%
  //Account for localized images
  String localizedImagePath = "/etc/designs/gnb/images/";
  if (lang == "fr") {
    localizedImagePath += "fr/";
  }
  TagManager tm = resourceResolver.adaptTo(TagManager.class);
%>

<cq:setContentBundle language="<%=lang%>" />
<%
  final String DATE_FORMAT = "en".equals(lang) ? "DD/MM/YYYY" : "JJ/MM/AAAA";
  final String keywordLabel = new String(LocaleSupport.getLocalizedMessage(pageContext, "newskeyword").getBytes("UTF8"), "UTF8");
  final SimpleDateFormat outDateFormat = new SimpleDateFormat("dd MMMM yyyy", locale);
  final SimpleDateFormat queryDateFormat = new SimpleDateFormat("dd/MM/yyyy", Locale.CANADA);
  final Session session = resource.getResourceResolver().adaptTo(Session.class);
  final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);

//**Start of new code(2014-2-10)**/
  String s=slingRequest.getParameter("newsFromDate");
  if(Utils.isNotEmpty(s)){
  	s=slingRequest.getParameter("newsFromDate").replace("%2F","/").replace("%2f","/");

  	if(s.startsWith("DD") || s.startsWith("JJ")){
    	s=DATE_FORMAT;
  	}      
  }


  String e=slingRequest.getParameter("newsToDate");
  if(Utils.isNotEmpty(e)){
  	e=slingRequest.getParameter("newsToDate").replace("%2F","/").replace("%2f","/");

  	if(e.startsWith("DD") || e.startsWith("JJ")){
    	e=DATE_FORMAT;
  	}      
  }
  final String newsFromDate = Utils.nullReplace(s);
	//out.write(newsFromDate);    
  final String newsToDate = Utils.nullReplace(e);
  //final String newsFromDate = Utils.nullReplace(slingRequest.getParameter("newsFromDate"));
  //final String newsToDate = Utils.nullReplace(slingRequest.getParameter("newsToDate"));
//**End of new code(2014-2-10)**/



//final String keyword = xssAPI.encodeForHTML(Utils.nullReplace(slingRequest.getParameter("newskeyword")));
  final String keyword = Utils.nullReplace(slingRequest.getParameter("newskeyword"));
  String newsdeptId = Utils.nullReplace(slingRequest.getParameter("newsdeptId"));
  newsdeptId =newsdeptId.replace("%2F","/").replace("%3A",":");



  final String start = Utils.nullReplace(slingRequest.getParameter("start"));
  Map<String, String> map = new HashMap<String, String>();
  SearchResult result = null;
  String hits = Utils.nullReplace(slingRequest.getParameter("hits"));
  String encodedKeyword = new String(keyword.getBytes("UTF-8"), "UTF-8");
  List<ListItem> newsItems = new ArrayList<ListItem>();

  Calendar cal = Calendar.getInstance();

  String newsPath = properties.get("newsPath", "");

  String querynewsFromDate = "";
  if (Utils.isNotEmpty(newsFromDate) && !DATE_FORMAT.equals(newsFromDate.trim())) {
    Date tDate = queryDateFormat.parse(newsFromDate);
    cal.setTime(tDate);
    int day = cal.get(Calendar.DAY_OF_MONTH) - 1;
    int month = cal.get(Calendar.MONTH) + 1;
    int year = cal.get(Calendar.YEAR);
    querynewsFromDate = year + "-" + (month < 10 ? "0" + (month) : (month)) + "-"
        + (day < 10 ? "0" + (day) : (day));
  }
  String querynewsToDate = "";
  if (Utils.isNotEmpty(newsToDate) && !DATE_FORMAT.equals(newsToDate.trim())) {
    Date tDate = queryDateFormat.parse(newsToDate);
    cal.setTime(tDate);
    int day = cal.get(Calendar.DAY_OF_MONTH) + 1;
    int month = cal.get(Calendar.MONTH) + 1;
    int year = cal.get(Calendar.YEAR);
    querynewsToDate = year + "-" + (month < 10 ? "0" + (month) : (month)) + "-" + (day < 10 ? "0" + (day) : (day));
  }

  Page configurationPage = pageManager.getPage("/content/gnbconfig");
  if (!Utils.isNotEmpty(newsPath) && configurationPage != null) {
    newsPath = configurationPage.getProperties().get("newsArticleDataPage").toString();
  }

  if ((Utils.isNotEmpty(querynewsFromDate) && Utils.isNotEmpty(querynewsToDate))
      || (Utils.isNotEmpty(encodedKeyword) && !encodedKeyword.equals(keywordLabel)) 
      || Utils.isNotEmpty(newsdeptId) && Utils.isNotEmpty(newsPath)) {

    if (Utils.isNotEmpty(querynewsFromDate) && Utils.isNotEmpty(querynewsToDate)) {
      map.put("daterange.lowerBound", querynewsFromDate);
      map.put("daterange.upperBound", querynewsToDate);
      map.put("daterange", "daterange");
      map.put("daterange.property", "onTime");
    }
    if (Utils.isNotEmpty(encodedKeyword) && !encodedKeyword.equals(keywordLabel)) {
      map.put("fulltext", encodedKeyword);
    }
    
    if (Utils.isNotEmpty(newsdeptId)) {
      map.put("property", lang + "Department");
      map.put("property.value", newsdeptId);
    }    
    //Bug in CQ5.6.1
    // map.put("path", newsPath + "/*/*/.");
    map.put("path", newsPath + "/");
    map.put("nodename", "jcr:content");
    map.put("orderby", "@onTime");
    map.put("orderby.sort", "desc");

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

    for (Hit hit : result.getHits()) {
      Node jcrNode = WCMUtils.getNode(resourceResolver.getResource(hit.getPath()));
      ListItem listItem = new ListItem(jcrNode.getPath(), currentPage, resource);
      newsItems.add(listItem);
    }

    pageContext.setAttribute("defaultDate", DATE_FORMAT);
    pageContext.setAttribute("hits", hits);
    pageContext.setAttribute("hitlist", Arrays.asList("100", "50", "25"));
    
  }

  //Make sure the resource is a Tag Node
  //changed by Keehwan Jee 2013-11-29
  TreeMap<String, String> sorted_map = new TreeMap<String, String>();
  if (configurationPage != null) {
    if (configurationPage.getProperties().get("organizationTagData_" + lang) != null) {
      //String path = configurationPage.getProperties().get("organizationTagData_" + lang).toString();
       	String path = "/content/cq:tags/active-gnb-eng/organizations";
        if (lang == "fr") {
            path = "/content/cq:tags/active-gnb-fra/organisation";
        } 
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
            deptMap.put(baseTag.getTagID(), baseTag.getTitle());
          }
        }
        sorted_map.putAll(deptMap);
        pageContext.setAttribute("deptMap", sorted_map);
      } else {
        log.warn("The resource needs to point to a validTag List.");
      }
    } else {
      log.warn("No organization tags defined in configuration.");
    }
  }
  if (!Utils.isNotEmpty(encodedKeyword)) {
    encodedKeyword = keywordLabel;
  }

  pageContext.setAttribute("newskeyword", encodedKeyword);
  pageContext.setAttribute("newsdeptId", newsdeptId);
  pageContext.setAttribute("defaultDate", DATE_FORMAT);
  pageContext.setAttribute("newsFromDate", Utils.isNotEmpty(newsFromDate) ? newsFromDate : DATE_FORMAT);
  pageContext.setAttribute("newsToDate", Utils.isNotEmpty(newsToDate) ? newsToDate : DATE_FORMAT);
  pageContext.setAttribute("result", result);
  pageContext.setAttribute("uri", slingRequest.getRequestURL());
%>
<div class="row">
  <!--START of newssearch col-xs-12 col-sm-12 col-md-8 col-lg-8-->   
  <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
	<!--START of newssearchinput form-->    
	<div id="search_box">
  		<div class="panel panel-default">
    		<div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="newsSearchHeadingText"/></div>
  		</div>
		<form action="${currentPage.path}.html" class="form-horizontal searchNews" name="searchForm" title="<fmt:message key="newsSearchTitle"/>" accept-charset="utf-8" role="form">
			<input type="hidden" name="_charset_" value="utf-8">
			<input id="defaultDate" type="hidden" value="${defaultDate}" />
			<input id="defaultDateMsg" type="hidden" value="<fmt:message key="newsDateErrorMsg"/>" />   
    		<p><fmt:message key="newsSearchWarning"/></p>  

    		<!--START of keyword-->
    		<input title="<fmt:message key="newskeyword"/>" value="<%=encodedKeyword%>" id="newskeyword" class="form-control searchText newskeyword" type="text" name="newskeyword"  placeholder="<fmt:message key="newskeyword"/>"/>
			<!--END of keyword-->

			<!--START from/to -News searchinput-->
			<div class="input-group input-daterange input-group-sm">
    			<label class="input-group-btn" for="newsFromDate">
        			<span class="btn btn-default">
            			<span class="glyphicon glyphicon-calendar"></span><span class="hidden">newsFromDate</span>
        			</span>
    			</label>       
                <input type="text" class="form-control datepicker" id="newsFromDate" name="newsFromDate" value="<%=newsFromDate%>" data-date-language="<%=lang%>" data-provide="datepicker"  data-date-format="dd/mm/yyyy" placeholder="${newsFromDate}"/>
    			<span class="input-group-addon"><fmt:message key="searchToText"/></span>
                <input type="text" class="form-control datepicker" id="newsToDate" name="newsToDate" value="<%=newsToDate%>"   data-date-language="<%=lang%>" data-provide="datepicker" data-date-format="dd/mm/yyyy" placeholder="${newsToDate}"/>
    			<label class="input-group-btn" for="newsToDate">
    				<span class="btn btn-default">
    					<span class="glyphicon glyphicon-calendar"></span><span class="hidden">newsToDate</span>
    				</span>
    			</label> 
    			<input id="start" name="start" type="hidden" value="${start}" /> 
    			<input id="hits" name="hits" type="hidden" value="${hits}" />                
			</div>
			<!--END from/to -News searchinput-->    

			<!--START of department select-->   
	  		<select title="<fmt:message key="newsSearchAllDepartmentsText"/>" id="newsdeptId" name="newsdeptId" class="form-control">  
      		<option value=""><fmt:message key="newsSearchAllDepartmentsText" /></option>
      		<c:forEach var="dept" items="${deptMap}">
        		<c:choose>
          		<c:when test="${dept.key eq newsdeptId}">
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
			<!--END of department select-->    
        	<!--START of submit button-->    
    		<button type="submit" class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span><fmt:message key="searchButtonText"/></button>
        	<!--END of submit button-->    
		</form>
	</div> 
	<!--END of newssearchinput form-->
  </div>
  <!--END of newssearch col-xs-12 col-sm-12 col-md-8 col-lg-8--> 
  <!--START of newssearch col-md-4 col-lg-4 hidden-xs hidden-sm--> 
  <div class="col-md-4 col-lg-4 hidden-xs hidden-sm">
    <cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
  </div>
  <!--END of newssearch col-md-4 col-lg-4 hidden-xs hidden-sm-->   
</div>
<!--END of newssearch row--> 

<!--START  of row-->
<div class="row">
  <!--START  of col-lg-12-->
  <div class="col-lg-12">
    <!--START of c:choose-->
    <c:choose>
      <c:when test="${empty result}"> </c:when>
      <c:when test="${empty result.hits}">
        <fmt:message key="noResultsText" />
      </c:when>
      <c:otherwise>
        <!--START of c:if-->
        <c:if test="<%= result.getFacets()!=null && result.getFacets().get("tagid")!=null && result.getFacets().get("tagid").getBuckets()!=null%>">
          <!--START of id="search_left_nav"-->
          <div id="search_left_nav">
            <div class="title">
              <fmt:message key="refineResultsText" />
            </div>
            <h1 class="left_nav">
              <fmt:message key="tagsText" />
            </h1>
            <ul>
              <c:forEach var="bucket" items="<%= result.getFacets().get("tagid").getBuckets()%>">
                <c:set var="bucketValue" value="${bucket.value}" />
                <c:set var="tag" value="<%= tm.resolve((String) pageContext.getAttribute("bucketValue")) %>" />
                <c:if test="${tag != null}">
                  <c:set var="label" value="${tag.title}" />
                  <c:choose>
                    <c:when test="<%= request.getParameter("tag") != null && java.util.Arrays.asList(request.getParameterValues("tag")).contains(pageContext.getAttribute("bucketValue")) %>">
                      <li>${label} (${bucket.count}) - <a href="<cq:requestURL><cq:removeParam name="tag" value="${bucket.value}"/></cq:requestURL>">remove filter</a></li>
                    </c:when>
                    <c:otherwise>
                      <li><a title="filter results" href="<cq:requestURL><cq:addParam name="tag" value="${bucket.value}"/></cq:requestURL>"> ${label} (${bucket.count}) </a></li>
                    </c:otherwise>
                  </c:choose>
                </c:if>
              </c:forEach>
            </ul>
          </div>
          <!--END of id="search_left_nav"-->
        </c:if>
        <!--END of c:if-->

        <!--START of class="pagination_top"-->      
        <div class="pagination_top">
          <!--START of class="item left"-->   
          <div class="item left">
            <p class="image_reset">
              <fmt:message key="statisticsText">
                <fmt:param value="${result.startIndex + 1}"/>
                <fmt:param value="${result.startIndex + fn:length(result.hits)}"/>
                <fmt:param value="${result.totalMatches}"/>
              </fmt:message>
            </p>
          </div>
		  <!--END of class="item left"-->  
		  <!--START of c:forEach"-->  
          <c:forEach var="hitdiv" items="${hitlist}">
            <c:choose>
              <c:when test="${hitdiv == hits}">
                <div class="item">
                  <c:url var="theUnescapedUrl" value="${uri}">
                    <c:param name="_charset_" value="UTF-8" />
                    <c:param name="newsFromDate" value="${newsFromDate}" />
                    <c:param name="newsToDate" value="${newsToDate}"/>
                    <c:param name="newskeyword" value="<%=encodedKeyword %>" />
                    <c:param name="newsdeptId" value="${newsdeptId}" />
                    <c:param name="start" value="0" />
                    <c:param name="hits" value="${hitdiv}" />
                  </c:url>
                  <a class="active" href="<c:out value='${theUnescapedUrl}'/>">${hitdiv}</a> </div>
              </c:when>
              <c:otherwise>
                <div class="item">
                  <c:url var="theUnescapedUrl" value="${uri}">
                    <c:param name="_charset_" value="UTF-8" />
                    <c:param name="newsFromDate" value="${newsFromDate}" />
                    <c:param name="newsToDate" value="${newsToDate}"/>
                    <c:param name="newskeyword" value="<%=encodedKeyword %>" />
                    <c:param name="newsdeptId" value="${newsdeptId}" />
                    <c:param name="start" value="0" />
                    <c:param name="hits" value="${hitdiv}" />
                  </c:url>
                  <a href="<c:out value='${theUnescapedUrl}'/>">${hitdiv}</a> </div>
              </c:otherwise>
            </c:choose>
          </c:forEach>
		  <!--END of c:forEach"-->             
          <div class="item"><span class="legend"><fmt:message key="legendText" /></span></div>
          <div class="clearfloat"></div>
        </div>
		<!--END of class="pagination_top"--> 

        <!--START of id="search_column_full"-->  
        <div id="search_column_full">
          <!--START of table"-->    
          <table>
            <%
			WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
            try {
            	for (ListItem listItem : newsItems) {
                	StringBuilder sb = new StringBuilder();
					sb.append("<tr><td>");
                    sb.append("<div class=\"wide_news_item\" >");
                    sb.append("<div class=\"wide_news_content_full\">");
                    if (listItem.getDate() != null)
                    	sb.append(String.format("<div class=\"post_date\">%s</div>", outDateFormat.format(listItem.getDate())));
                    if (Utils.isNotEmpty(listItem.getQuicklink()))
                    	sb.append(String.format("<h2>%s</h2>", listItem.getQuicklink()));
              		if (Utils.isNotEmpty(listItem.getDescription(50)))
                    	sb.append(String.format("<p>%s</p>", listItem.getDescription(50)));
                 	if (Utils.isNotEmpty(listItem.getMorelink()))
                    	sb.append(String.format("<p><span class=\"more_link\">%s</span></p>", listItem.getMorelink()));
                    sb.append("</div>");
                    sb.append("</div>");
                    sb.append("</td></tr>");
                    out.write(sb.toString());
				}
			} finally {
            	imcludemode.toRequest(request);
			}%>
          </table>
          <!--END of table"-->  

          <!--START of class="pagination"-->    
          <ul class="pagination">
            <c:if test="${fn:length(result.resultPages) > 1}">
              <!--<li class="item"><span class="legend"><fmt:message key="resultPagesText" /></span></li>-->
              <c:forEach var="page" items="${result.resultPages}">
                <c:choose>
                  <c:when test="${page.currentPage}">
                    <li class="active item"><a href="#" class="active">${page.index+ 1}</a></li>
                  </c:when>
                  <c:otherwise>
                    <li class="item">
                      <c:url var="theUnescapedUrl" value="${uri}">
                        <c:param name="_charset_" value="UTF-8"/>
                        <c:param name="newsFromDate" value="${newsFromDate}"/>
                        <c:param name="newsToDate" value="${newsToDate}"/>
                        <c:param name="newskeyword" value="<%=encodedKeyword %>"/>
                        <c:param name="newsdeptId" value="${newsdeptId}"/>
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
                    <c:param name="newsFromDate" value="${newsFromDate}"/>
                    <c:param name="newsToDate" value="${newsToDate}"/>
                    <c:param name="newskeyword" value="<%=encodedKeyword %>"/>
                    <c:param name="newsdeptId" value="${newsdeptId}"/>
                    <c:param name="start" value="${result.nextPage.start}"/>  
                    <!--<c:param name="start" value="${page.start}"/>-->
                    <c:param name="hits" value="${hits}"/>
                  </c:url>
                  <a href="<c:out value='${theUnescapedUrl}'/>"><fmt:message key="nextText" /></a> 
                </li>
              </c:if>
              <c:if test="${result.previousPage != null}">
                <li class="item">
                  <c:url var="theUnescapedUrl" value="${uri}">
                    <c:param name="_charset_" value="UTF-8"/>
                    <c:param name="newsFromDate" value="${newsFromDate}"/>
                    <c:param name="newsToDate" value="${newsToDate}"/>
                    <c:param name="newskeyword" value="<%=encodedKeyword %>"/>
                    <c:param name="newsdeptId" value="${newsdeptId}"/>
                    <!--<c:param name="start" value="${page.start}"/>-->
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
        <!--END of id="search_column_full"-->    
      </c:otherwise>
    </c:choose>
  </div>
</div>
<!--END of row-->


<script type="text/javascript">
$(function () {
	$('.datepicker').datepicker({
        autoclose:true,
        format: "dd/mm/yyyy",

        //endDate: new Date(),
        endDate:'+0d',
        todayHighlight: true       
	});
});

</script>

<!--END from/to -News searchinput-->