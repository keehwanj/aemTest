<%@include file="/libs/wcm/global.jsp"%>
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
<%@page import="java.util.Set"%>


<%
  // Get language and content bundle for that language
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }
  locale = new Locale(lang);
%>
<script src="/etc/designs/gnb/js/date_<%=lang%>.js" type="text/javascript"></script>
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
  final String keywordLabel = new String(
      LocaleSupport.getLocalizedMessage(pageContext, "newskeyword").getBytes("UTF8"), "UTF8");
  final SimpleDateFormat outDateFormat = new SimpleDateFormat("dd MMMM yyyy", locale);
  final SimpleDateFormat queryDateFormat = new SimpleDateFormat("dd/MM/yyyy", Locale.CANADA);
  final Session session = resource.getResourceResolver().adaptTo(Session.class);
  final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
  final String newsFromDate = Utils.nullReplace(slingRequest.getParameter("newsFromDate"));
  final String newsToDate = Utils.nullReplace(slingRequest.getParameter("newsToDate"));
  final String keyword = Utils.nullReplace(slingRequest.getParameter("newskeyword"));
  final String newsdeptId = Utils.nullReplace(slingRequest.getParameter("newsdeptId"));
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
    //out.write(newsPath);
  }
  //out.write(newsPath);
  if ((Utils.isNotEmpty(querynewsFromDate) && Utils.isNotEmpty(querynewsToDate))
      || (Utils.isNotEmpty(encodedKeyword) && !encodedKeyword.equals(keywordLabel)) 
      || Utils.isNotEmpty(newsdeptId) && Utils.isNotEmpty(newsPath)) {
     // out.write(newsPath);
     
    if (Utils.isNotEmpty(querynewsFromDate) && Utils.isNotEmpty(querynewsToDate)) {
      map.put("daterange.lowerBound", querynewsFromDate);
      map.put("daterange.upperBound", querynewsToDate);
      map.put("daterange", "daterange");
      map.put("daterange.property", "onTime");
      //out.write(newsPath);
      //out.write(newsPath);
      out.write(querynewsFromDate);
      out.write("<br/>");
      out.write(querynewsToDate);
    }
    if (Utils.isNotEmpty(encodedKeyword) && !encodedKeyword.equals(keywordLabel)) {
      map.put("fulltext", encodedKeyword);
      out.write("<br/>");
      out.write(encodedKeyword);

    }
    
    if (Utils.isNotEmpty(newsdeptId)) {
      map.put("property", lang + "Department");
      map.put("property.value", newsdeptId);
      out.write("<br/>");
      out.write(newsdeptId);
    }    
    
    map.put("path", newsPath + "/*/*/.");
    map.put("nodename", "jcr:content");
    map.put("orderby", "@onTime");
    map.put("orderby.sort", "desc");

    out.write("<br/>");  
    out.write(map.get("path"));

    out.write("<br/>");  
    out.write(map.get("fulltext"));
    out.write("<br/>");  

/*
    //Get Map in Set interface to get key and value
    Set s=map.entrySet();

    //Move next key and value of Map by iterator
    Iterator it=s.iterator();

    while(it.hasNext())
    {
        // key=value separator this by Map.Entry to get key and value
        Map.Entry m =(Map.Entry)it.next();

        // getKey is used to get key of Map
        String key=(String)m.getKey();

        // getValue is used to get value of key in Map
        String value=(String)m.getValue();

        out.write("<b>Key :</b>"+key+"  ,<b>Value :</b>"+value);
        out.write("<br/>");          
    }

    
*/    

    Query query = builder.createQuery(PredicateGroup.create(map), session);
/*
    out.write("<br/>");
    out.write(query.getQueryStatement());
    out.write("<br/>");
*/
    if (Utils.isNotEmpty(start))
      query.setStart(Long.valueOf(start));

    if (Utils.isNotEmpty(hits)) {
      query.setHitsPerPage(Integer.parseInt(hits));
    } else {
      hits = "25";
      query.setHitsPerPage(Integer.parseInt(hits));
    }
    result = query.getResult();
    //out.write(newsPath);
    //out.write(newsPath);

    
    
    
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
  TreeMap<String, String> sorted_map = new TreeMap<String, String>();
  if (configurationPage != null) {
      //out.write(newsPath);
    if (configurationPage.getProperties().get("organizationTagData_" + lang) != null) {
      //String path = configurationPage.getProperties().get("organizationTagData_" + lang).toString();
      String path = "/content/data/metadata/active/gnb-eng/organizations";
      //out.write(newsPath);
        if (lang == "fr") {
            path = "/content/data/metadata/active/gnb-fra/organisation";
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

<div id="search_box">
<form action="${currentPage.path}.html" id="searchForm" onsubmit="return validate(this);" name="search_form">
  <input type="hidden" name="_charset_" value="utf-8"/>
  <div class="title"><img height="15" width="15" class="reset" alt="" src="/etc/designs/gnb/images/icon_search_grey.gif"> 
    <fmt:message key="newsSearchTitle" />
  </div>
  <input id="defaultDate" type="hidden" value="${defaultDate}" /> 
  <input id="defaultDateMsg" type="hidden" value="<fmt:message key="newsDateErrorMsg"/>" />
  <div class="name">
    <label><fmt:message key="newsStartDate" /></label>
    <input id="newsFromDate" name="newsFromDate" class="dates" value="${newsFromDate}" /> 
    <label><fmt:message key="newsEndDate" /></label> 
    <input id="newsToDate" name="newsToDate" class="dates" value="${newsToDate}" /> 
    <input id="start" name="start" type="hidden" value="${start}" /> 
    <input id="hits" name="hits" type="hidden" value="${hits}" />
  </div>
  <div class="clearfloat"></div>
  <select id="newsdeptId" name="newsdeptId" value="${fn:escapeXml(newsdeptId)}">
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
  <input type="text" class="searchText keyword" name="newskeyword" value="<%=encodedKeyword%>" onclick="this.value='';" /> 
  <input type="image" class="searchButton" value="<fmt:message key="searchButtonText"/>" alt="<fmt:message key="newsSearchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />
</form>
</div>

<div id="sidebar">
    <cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
</div>

<div class="clearfloat"></div>

<c:choose>
    <c:when test="${empty result}">
    </c:when>
    <c:when test="${empty result.hits}">
        <fmt:message key="noResultsText" />
    </c:when>
    <c:otherwise>
        <c:if test="<%= result.getFacets()!=null && result.getFacets().get("tagid")!=null && result.getFacets().get("tagid").getBuckets()!=null%>">
            <div id="search_left_nav">
            <div class="title"><fmt:message key="refineResultsText" /></div>
            <h1 class="left_nav"><fmt:message key="tagsText" /></h1>
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
        </c:if>

        <div class="pagination_top">
          <div class="item left">
            <p class="image_reset">
                <fmt:message key="statisticsText">
                    <fmt:param value="${result.startIndex + 1}"/>
                    <fmt:param value="${result.startIndex + fn:length(result.hits)}"/>
                    <fmt:param value="${result.totalMatches}"/>        
                </fmt:message>
            </p>
          </div>
        <c:forEach var="hitdiv" items="${hitlist}">
            <c:choose>
                <c:when test="${hitdiv == hits}">
                    <div class="item"><a class="active"
                        href="<c:url value="${uri}">
                   <c:param name="_charset_" value="UTF-8"/>
                   <c:param name="newsFromDate" value="${newsFromDate}"/>
                   <c:param name="newsToDate" value="${newsToDate}"/>
                   <c:param name="newskeyword" value="<%=encodedKeyword %>"/>
                   <c:param name="newsdeptId" value="${newsdeptId}"/>
                   <c:param name="start" value="0"/>
                   <c:param name="hits" value="${hitdiv}"/>
                   </c:url>">
                    ${hitdiv}</a></div>
                </c:when>
                <c:otherwise>
                    <div class="item"><a
                        href="<c:url value="${uri}">
                   <c:param name="_charset_" value="UTF-8"/>        
                   <c:param name="newsFromDate" value="${newsFromDate}"/>
                   <c:param name="newsToDate" value="${newsToDate}"/>
                   <c:param name="newskeyword" value="<%=encodedKeyword %>"/>
                   <c:param name="newsdeptId" value="${newsdeptId}"/>
                   <c:param name="start" value="0"/>
                   <c:param name="hits" value="${hitdiv}"/>
                   </c:url>">
                    ${hitdiv}</a></div>
                </c:otherwise>
            </c:choose>
        </c:forEach>
        <div class="item"><span class="legend"><fmt:message
            key="legendText" /></span></div>
        <div class="clearfloat"></div>
        </div>

        <div id="search_column_full">
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
                                    }
                              %>            
          </table>
          <br />

          <div class="pagination"><c:if
            test="${fn:length(result.resultPages) > 1}">
            <div class="item"><span class="legend"><fmt:message
                key="resultPagesText" /></span></div>
            <c:forEach var="page" items="${result.resultPages}">
                <c:choose>
                    <c:when test="${page.currentPage}">
                        <div class="item"><a href="#" class="active">${page.index
                        + 1}</a></div>
                    </c:when>
                    <c:otherwise>
                        <div class="item"><a
                            href="<c:url value="${uri}">
                            <c:param name="_charset_" value="UTF-8"/>
                            <c:param name="newsFromDate" value="${newsFromDate}"/>
                            <c:param name="newsToDate" value="${newsToDate}"/>                        
                            <c:param name="newskeyword" value="<%=encodedKeyword %>"/>
                            <c:param name="newsdeptId" value="${newsdeptId}"/>
                            <c:param name="start" value="${page.start}"/>
                            <c:param name="hits" value="${hits}"/>
                          </c:url>">
                        ${page.index + 1}</a></div>
                    </c:otherwise>
                </c:choose>
            </c:forEach>
            <c:if test="${result.nextPage != null}">
                <div class="item"><a
                    href="<c:url value="${uri}">
                       <c:param name="_charset_" value="UTF-8"/>
                       <c:param name="newsFromDate" value="${newsFromDate}"/>
                       <c:param name="newsToDate" value="${newsToDate}"/>                        
                       <c:param name="newskeyword" value="<%=encodedKeyword %>"/>
                       <c:param name="newsdeptId" value="${newsdeptId}"/>
                       <c:param name="start" value="${result.nextPage.start}"/>
                       <c:param name="hits" value="${hits}"/>
                      </c:url>">
                <fmt:message key="nextText" /></a></div>
            </c:if>
            <c:if test="${result.previousPage != null}">
                <div class="item"><a
                    href="<c:url value="${uri}">
                        <c:param name="_charset_" value="UTF-8"/>
                        <c:param name="newsFromDate" value="${newsFromDate}"/>
                        <c:param name="newsToDate" value="${newsToDate}"/>                        
                        <c:param name="newskeyword" value="<%=encodedKeyword %>"/>
                        <c:param name="newsdeptId" value="${newsdeptId}"/>
                        <c:param name="start" value="${result.previousPage.start}"/>
                        <c:param name="hits" value="${hits}"/>
                      </c:url>">
                <fmt:message key="previousText" /></a></div>
            </c:if>
        </c:if></div>
        </div>
    </c:otherwise>
</c:choose>
<div class="clearfloats"></div>
<script type="text/javascript">
function validate() {   
    var fromDate = $("#newsFromDate").val();       
    var toDate = $("#newsToDate").val();
    var dateErrorMsg = $("#defaultDateMsg").val();
    var defaultDate = $("#defaultDate").val();

    //Bug fixing for Chrome/Safari-use "toLocaleDateString()" : /Invalid|NaN/.test(new Date(d.toLocaleDateString(fromDate))) 
    var d=new Date();
   
    if(fromDate != ''){                          
      //if(defaultDate != fromDate && (/Invalid|NaN/.test(new Date(fromDate)) || !fromDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/))){
      //if(defaultDate != fromDate && (/Invalid|NaN/.test(new Date(d.toLocaleDateString(fromDate))) || !fromDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/))){
      if(defaultDate != fromDate && !fromDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/)){
        alert(dateErrorMsg + defaultDate);
        $("#newsFromDate").focus();
        return false;
       }
     }
     if(toDate != ''){
      //if(defaultDate != toDate && (/Invalid|NaN/.test(new Date(toDate)) || !toDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/))){
      //if(defaultDate != toDate && (/Invalid|NaN/.test(new Date(d.toLocaleDateString(toDate))) || !toDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/))){
      if(defaultDate != toDate && !toDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/)){    
         alert(dateErrorMsg + defaultDate);
         $("#newsToDate").focus();
         return false;
       }
     }
    document.getElementById("start").value = '0';
    return true;              
}
</script>