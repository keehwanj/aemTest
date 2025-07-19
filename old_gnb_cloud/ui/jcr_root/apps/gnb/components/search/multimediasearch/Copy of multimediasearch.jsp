<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Arrays"%>
<%@page import="java.util.List"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.day.cq.wcm.foundation.Search"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.ListItem"%>
<%@page import="com.t4g.cnb.bean.Metadata"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.t4g.cnb.tag.DepartmentValueComparator"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%!
protected String getRendition(Resource resource, String assetPath) throws RepositoryException{
  Resource rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.180.180.jpeg");
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.340.340.jpeg");                    
  }
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.600.400.jpeg");                    
  }   
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.thumbnail.319.319.png");                    
  }
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.1280.1280.jpg");                    
  }            
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath);                    
  }      
  if(rendition!=null) {
    return rendition.adaptTo(Node.class).getPath();
  }
  return assetPath;
}
%>

<%
  // Get language and content bundle for that language
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }
%>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script src="/etc/designs/gnb/js/date_<%=lang%>.js" type="text/javascript"></script>
<%
  //Account for localized images
  String localizedImagePath = "/etc/designs/gnb/images/";
  if (lang == "fr") {
    localizedImagePath += "fr/";
  }
%>  

<cq:setContentBundle language="<%=lang%>" />
<%
  final String DATE_FORMAT = "en".equals(lang) ? "DD/MM/YYYY" : "JJ/MM/AAAA";
  final String keywordLabel = new String(
      LocaleSupport.getLocalizedMessage(pageContext, "mmkeyword").getBytes("UTF8"), "UTF8");
  final Session session = resource.getResourceResolver().adaptTo(Session.class);
  SearchResult result = null;
  
  final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);

//**Start of new code(2014-2-10)**/
  String s=slingRequest.getParameter("newsFromDate");
  if(Utils.isNotEmpty(s)){
  	s=slingRequest.getParameter("newsFromDate").replace("%2F","/");

  	if(s.startsWith("DD") || s.startsWith("JJ")){
    	s=DATE_FORMAT;
  	}      
  }


  String e=slingRequest.getParameter("newsToDate");
  if(Utils.isNotEmpty(e)){
  	e=slingRequest.getParameter("newsToDate").replace("%2F","/");

  	if(e.startsWith("DD") || e.startsWith("JJ")){
    	e=DATE_FORMAT;
  	}      
  }


  final String mmFromDate = Utils.nullReplace(s);
  final String mmToDate = Utils.nullReplace(e);
//final String mmFromDate = Utils.nullReplace(slingRequest.getParameter("mmFromDate"));
//final String mmToDate = Utils.nullReplace(slingRequest.getParameter("mmToDate"));
//**End of new code(2014-2-10)**/

  final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.CANADA);
  final SimpleDateFormat queryDateFormat = new SimpleDateFormat("dd/MM/yyyy", Locale.CANADA);
  final SimpleDateFormat outDateFormat = new SimpleDateFormat("dd MMMM yyyy", locale);
  final String keyword = Utils.nullReplace(slingRequest.getParameter("mmkeyword"));
  final String mmdeptId = Utils.nullReplace(slingRequest.getParameter("mmdeptId"));
  final String start = Utils.nullReplace(slingRequest.getParameter("start"));
  String hits = Utils.nullReplace(slingRequest.getParameter("hits"));
  String encodedKeyword = new String(keyword.getBytes("UTF-8"), "UTF-8");
  List<ListItem> mmItems = new ArrayList<ListItem>();

  Calendar cal = Calendar.getInstance();
  Map<String, String> map = new HashMap<String, String>();
  String querymmFromDate = "";
  if (Utils.isNotEmpty(mmFromDate) && !DATE_FORMAT.equals(mmFromDate.trim())) {
    Date tDate = queryDateFormat.parse(Utils.nullReplace(slingRequest.getParameter("mmFromDate")));
    cal.setTime(tDate);
    int day = cal.get(Calendar.DAY_OF_MONTH) - 1;
    int month = cal.get(Calendar.MONTH) + 1;
    int year = cal.get(Calendar.YEAR);
    querymmFromDate = year + "-" + (month < 10 ? "0" + (month) : (month)) + "-" + (day < 10 ? "0" + (day) : (day));
  }
  String querymmToDate = "";
  if (Utils.isNotEmpty(mmToDate) && !DATE_FORMAT.equals(mmToDate.trim())) {
    Date tDate = queryDateFormat.parse(Utils.nullReplace(slingRequest.getParameter("mmToDate")));
    cal.setTime(tDate);
    int day = cal.get(Calendar.DAY_OF_MONTH) + 1;
    int month = cal.get(Calendar.MONTH) + 1;
    int year = cal.get(Calendar.YEAR);
    querymmToDate = year + "-" + (month < 10 ? "0" + (month) : (month)) + "-" + (day < 10 ? "0" + (day) : (day));
  }

  Page configurationPage = pageManager.getPage("/content/gnbconfig");
  if (configurationPage == null) {
    log.warn("*** NO CONFIGURATION PAGE ***");
    return;
  }

  String mmDataPath = configurationPage.getProperties().get("mmDataPage", "").toString();
  String mmRendererPath = configurationPage.getProperties().get("genericRendererBasePage_" + lang, "");
  String mmRenderer = configurationPage.getProperties().get("mmRendererPage_" + lang, "").toString();
  if (!Utils.isNotEmpty(mmDataPath) || !Utils.isNotEmpty(mmRendererPath) || !Utils.isNotEmpty(mmRenderer)) {
    log.warn("*** Not all configuration data has been set... mmDataPath:" + mmDataPath + " mmRendererPath:"
        + mmRendererPath + " mmRenderer:" + mmRenderer);
  }

  if ((Utils.isNotEmpty(querymmFromDate) && Utils.isNotEmpty(querymmToDate))
      || (Utils.isNotEmpty(keyword) && !encodedKeyword.equals(keywordLabel)) 
      ||  Utils.isNotEmpty(mmdeptId) && Utils.isNotEmpty(mmDataPath)) {

    if (Utils.isNotEmpty(querymmFromDate) && Utils.isNotEmpty(querymmToDate)) {
      map.put("daterange.lowerBound", querymmFromDate);
      map.put("daterange.upperBound", querymmToDate);
      map.put("daterange", "daterange");
      map.put("daterange.property", "dam:newDate");
    }
    if (Utils.isNotEmpty(encodedKeyword) && !encodedKeyword.equals(keywordLabel)) {
      map.put("fulltext", encodedKeyword);
    }
    
    if (Utils.isNotEmpty(mmdeptId)) {
      map.put("property", "dam:dept");
      map.put("property.value", mmdeptId);
    }
    
    map.put("orderby", "@dam:newDate");
    map.put("orderby.sort", "desc");
    map.put("path", mmDataPath);
    map.put("type", "nt:unstructured");
    map.put("nodename", "metadata");

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

    List<String> titles = new ArrayList<String>();
    List<String> newDates = new ArrayList<String>();

    for (Hit hit : result.getHits()) {
      cal.clear();
      Node metaNode = WCMUtils.getNode(resourceResolver.getResource(hit.getPath()));
      if (metaNode.hasProperty("dam:newDate")) {
        Date tDate = dateFormat.parse(metaNode.getProperty("dam:newDate").getString());
        cal.setTime(tDate);
        int day = cal.get(Calendar.DAY_OF_MONTH);
        int month = cal.get(Calendar.MONTH) + 1;
        int year = cal.get(Calendar.YEAR);
        newDates.add(year + "-" + (month < 10 ? "0" + (month) : (month)) + "-" + (day < 10 ? "0" + (day) : (day)));
      } else {
        newDates.add("-");
      }
      if ("fr".equals(lang)) {
        if (metaNode.hasProperty("dam:title_F")) {
          titles.add(metaNode.getProperty("dam:title_F").getString());
        } else {
          titles.add("---");
        }
      } else {
        if (metaNode.hasProperty("dam:title_E")) {
          titles.add(metaNode.getProperty("dam:title_E").getString());
        } else {
          titles.add(metaNode.getParent().getParent().getName());
        }
      }

      ListItem listItem = new ListItem(metaNode.getParent().getPath(), currentPage, resource);
      mmItems.add(listItem);
    }
    
    pageContext.setAttribute("start", start);
    pageContext.setAttribute("hits", hits);
    pageContext.setAttribute("hitlist", Arrays.asList("100", "50", "25"));
    pageContext.setAttribute("newDates", newDates);
    pageContext.setAttribute("titles", titles);
  }

  //Make sure the resource is a Tag Node
  TreeMap<String, String> sorted_map = new TreeMap<String, String>();
  if (configurationPage != null) {
    if (configurationPage.getProperties().get("organizationTagData_" + lang) != null) {
      // String path = configurationPage.getProperties().get("organizationTagData_" + lang).toString();
      String path = "/etc/tags/active-gnb-eng/organizations";
        if (lang == "fr") {
            path = "/etc/tags/active-gnb-fra/organisation";
        
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
  pageContext.setAttribute("defaultDate", DATE_FORMAT);  
  pageContext.setAttribute("mmkeyword", encodedKeyword);
  pageContext.setAttribute("mmdeptId", mmdeptId);
  pageContext.setAttribute("mmFromDate", Utils.isNotEmpty(mmFromDate) ? mmFromDate : DATE_FORMAT);
  pageContext.setAttribute("mmToDate", Utils.isNotEmpty(mmToDate) ? mmToDate : DATE_FORMAT);
  pageContext.setAttribute("result", result);
  pageContext.setAttribute("uri", slingRequest.getRequestURL());
%>

<div id="search_box">
  <form action="${currentPage.path}.html" id="searchForm" onsubmit="return validate(this);" name="search_form">
    <input type="hidden" name="_charset_" value="utf-8">
    <div class="title">
      <img height="15" width="15" class="reset" alt="" src="/etc/designs/gnb/images/icon_search_grey.gif">
      <fmt:message key="mmSearchTitle"/>
    </div>
    <input id="defaultDate" type="hidden" value="${defaultDate}" />
    <input id="defaultDateMsg" type="hidden" value="<fmt:message key="multimediaDateErrorMsg"/>" />                 
    <div class="name">                
        <label><fmt:message key="mmStartDate"/></label>
        <input type="text" id="mmFromDate" class="dates" name="mmFromDate" value="${mmFromDate}"/>                                       
        <label><fmt:message key="mmEndDate"/></label>                                  
        <input type="text" id="mmToDate" class="dates" name="mmToDate" value="${mmToDate}"/>  
        <input id="start" name="start" type="hidden" value="${start}"/>
        <input id="hits" name="hits" type="hidden" value="${hits}"/>
    </div>
    <div class="clearfloat"></div>          
    <select id="mmdeptId" name="mmdeptId" value="${fn:escapeXml(mmdeptId)}">
      <option value=""><fmt:message key="newsSearchAllDepartmentsText" /></option>
      <c:forEach var="dept" items="${deptMap}">
        <c:choose>
          <c:when test="${dept.key eq mmdeptId}">
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
    <input class="searchText keyword" name="mmkeyword" value="<%=encodedKeyword%>" onclick="this.value='';"/>
    <input type="image" class="searchButton"  value="<fmt:message key="searchButtonText"/>" alt="<fmt:message key="mmSearchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />    
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
    <fmt:message key="noResultsText"/>      
  </c:when>
  <c:otherwise>
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
                   <c:param name="mmFromDate" value="${mmFromDate}"/>
                   <c:param name="mmToDate" value="${mmToDate}"/>
                   <c:param name="mmkeyword" value="<%=encodedKeyword %>"/>
                   <c:param name="mmdeptId" value="${mmdeptId}"/>
                   <c:param name="start" value="0"/>
                   <c:param name="hits" value="${hitdiv}"/>
                   </c:url>">
                   ${hitdiv}</a>
                </div> 
            </c:when>
            <c:otherwise>
                <div class="item">                    
                    <a href="<c:url value="${uri}">
                    <c:param name="_charset_" value="UTF-8"/>
                   <c:param name="mmFromDate" value="${mmFromDate}"/>
                   <c:param name="mmToDate" value="${mmToDate}"/>
                   <c:param name="mmkeyword" value="<%=encodedKeyword %>"/>
                   <c:param name="mmdeptId" value="${mmdeptId}"/>
                   <c:param name="start" value="0"/>
                   <c:param name="hits" value="${hitdiv}"/>
                   </c:url>">
                   ${hitdiv}</a>
                </div>
            </c:otherwise>
          </c:choose>                              
        </c:forEach>                                                                                                                                                       
        <div class="item">
            <span class="legend"><fmt:message key="legendText"/></span>
        </div>
        <div class="clearfloat"></div>                                                      
      </div>      
      <div id="search_column">        
        <table>                                                        
                  <%
                  WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
                  try {
                    for (ListItem listItem : mmItems) {
                      StringBuilder sb = new StringBuilder();
                      sb.append("<tr><td>");
                      sb.append("<div class=\"wide_multimedia_item\" >");
                      if (Utils.isNotEmpty(listItem.getURL())) {
                        sb.append(String.format("<a href=\"%s\" >", listItem.getURL()));
                        if (Utils.isNotEmpty(listItem.getImageURL())) {
                          sb.append(String.format("<img src=\"%s\" alt=\"%s\">", getRendition(resource,listItem.getImageURL()), listItem.getTitle()));
                        }
                        sb.append("</a>");
                      }
                      sb.append("<div class=\"wide_multimedia_content\">");
                      if (listItem.getDate() != null)
                        sb.append(String.format("<div class=\"post_date\">%s</div>", outDateFormat.format(listItem.getDate())));
                      if (Utils.isNotEmpty(listItem.getQuicklink()))
                        sb.append(String.format("<h2>%s</h2>", listItem.getQuicklink()));
                      if (Utils.isNotEmpty(listItem.getDescription(50)))
                        sb.append(String.format("<p>%s</p>", listItem.getDescription(50)));
                      if (Utils.isNotEmpty(listItem.getMorelink()))
                        sb.append(String.format("<p><span class=\"more_link\">%s</span></p>", listItem.getMorelink()));
                                                                                        
                      if (Utils.isNotEmpty(listItem.getImageURL())) {                                                                        
                        Node assetNode = WCMUtils.getNode(resourceResolver.getResource(listItem.getImageURL()));
                        Metadata m = new Metadata(assetNode, resourceResolver);                        
                        sb.append("<div class=\"mm_related_assets\">");
                        sb.append("<div class=\"mm_related\">");                        
                        if (Utils.isNotEmpty(listItem.getURL())) {
                          sb.append(String.format("<a class=\"photo\" href=\"%s\" >", listItem.getURL())).append("Photo 1 </a>");
                        }
                        if(Utils.isNotEmpty(m.getPhoto2Download())){
                          ListItem photoLI = new ListItem(m.getPhoto2Download(), currentPage, resource);
                          sb.append(String.format("<a class=\"photo\" href=\"%s\" >", listItem.getURL()+ "?dphoto=2")).append("| Photo 2 </a>");
                        }
                        if(Utils.isNotEmpty(m.getPhoto3Download())){
                          ListItem photoLI = new ListItem(m.getPhoto3Download(), currentPage, resource);
                          sb.append(String.format("<a class=\"photo\" href=\"%s\" >", listItem.getURL()+ "?dphoto=3")).append("| Photo 3 </a>");
                        }
                        sb.append("</div>");
                        sb.append("<div class=\"mm_assets\">");  
                        if(m.hasNews()){
                          sb.append(String.format("<img src=\"/etc/designs/gnb/images/news.png\" title=\"%s\" >",
                              LocaleSupport.getLocalizedMessage(pageContext, "mmnews")));
                        }
                        if(m.hasVideo()){
                          sb.append(String.format("<img src=\"/etc/designs/gnb/images/video.png\" title=\"%s\" >",
                              LocaleSupport.getLocalizedMessage(pageContext, "mmvideo")));
                        }
                        if(m.hasAudio()){
                          sb.append(String.format("<img src=\"/etc/designs/gnb/images/sound.png\" title=\"%s\" >",
                              LocaleSupport.getLocalizedMessage(pageContext, "mmaudio")));
                        }
                        if(m.hasPresentation()){
                          sb.append(String.format("<img src=\"/etc/designs/gnb/images/presentation.png\" title=\"%s\" >",
                              LocaleSupport.getLocalizedMessage(pageContext, "mmpresentation")));
                        }
                        if(m.hasLink()){
                          sb.append(String.format("<img src=\"/etc/designs/gnb/images/icon_external_link.png\" title=\"%s\">",
                              LocaleSupport.getLocalizedMessage(pageContext, "mmlink")));
                        }
                        
                        sb.append("</div>");
                        sb.append("</div>");
                        sb.append("</div>");                     
                      }
                                                                  
                      sb.append("</div>");
                      sb.append("</td></tr>");
                      
                      out.write(sb.toString());
                    }
                  } finally {
                    imcludemode.toRequest(request);
                  }
                %>
                                                                                                                        
        </table>
        <br/>         
        
        <div class="pagination">
            <c:if test="${fn:length(result.resultPages) > 1}">
                <div class="item">
                    <span class="legend"><fmt:message key="resultPagesText" /></span>                    
                </div>                
                <c:forEach var="page" items="${result.resultPages}">
                    <c:choose>
                        <c:when test="${page.currentPage}">
                            <div class="item">
                              <a href="#" class="active">${page.index + 1}</a>
                             </div>
                        </c:when>
                        <c:otherwise>
                            <div class="item"><a 
                            href="<c:url value="${uri}">
                            <c:param name="_charset_" value="UTF-8"/>
                            <c:param name="mmFromDate" value="${mmFromDate}"/>
                            <c:param name="mmToDate" value="${mmToDate}"/>                        
                            <c:param name="mmkeyword" value="<%=encodedKeyword %>"/>
                            <c:param name="mmdeptId" value="${mmdeptId}"/>
                            <c:param name="start" value="${page.start}"/>
                            <c:param name="hits" value="${hits}"/>
                          </c:url>">      
                          ${page.index + 1}</a>
                          </div>
                        </c:otherwise>
                    </c:choose>
                </c:forEach>
                <c:if test="${result.nextPage != null}">
                    <div class="item"><a
                        href="<c:url value="${uri}">
                        <c:param name="_charset_" value="UTF-8"/>
                        <c:param name="mmFromDate" value="${mmFromDate}"/>
                        <c:param name="mmToDate" value="${mmToDate}"/>                        
                        <c:param name="mmkeyword" value="<%=encodedKeyword %>"/>
                        <c:param name="mmdeptId" value="${mmdeptId}"/>
                        <c:param name="start" value="${result.nextPage.start}"/>
                        <c:param name="hits" value="${hits}"/>
                      </c:url>">                                          
                      <fmt:message key="nextText" /></a>
                    </div>
                </c:if>
                <c:if test="${result.previousPage != null}">
                    <div class="item"><a
                        href="<c:url value="${uri}">
                        <c:param name="_charset_" value="UTF-8"/>
                        <c:param name="mmFromDate" value="${mmFromDate}"/>
                        <c:param name="mmToDate" value="${mmToDate}"/>                        
                        <c:param name="mmkeyword" value="<%=encodedKeyword %>"/>
                        <c:param name="mmdeptId" value="${mmdeptId}"/>
                        <c:param name="start" value="${result.previousPage.start}"/>
                        <c:param name="hits" value="${hits}"/>
                      </c:url>">                        
                      <fmt:message key="previousText" /></a>
                    </div>
                </c:if>
            </c:if>
        </div>
        </div>
        </c:otherwise>
</c:choose>
<div class="clearfloats"></div>
<script type="text/javascript">
function validate() {   
    
    var fromDate = $("#mmFromDate").val();       
    var toDate = $("#mmToDate").val();
    var dateErrorMsg = $("#defaultDateMsg").val();
    var defaultDate = $("#defaultDate").val();

    //Bug fixing for Chrome/Safari-use "toLocaleDateString()" : /Invalid|NaN/.test(new Date(d.toLocaleDateString(fromDate))) 
    var d=new Date();
    
    if(fromDate != ''){                          
        //if(defaultDate != fromDate && (/Invalid|NaN/.test(new Date(d.toLocaleDateString(fromDate))) || !fromDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/))){
        if(defaultDate != fromDate && !fromDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/)){
        alert(dateErrorMsg + defaultDate);
        $("#mmFromDate").focus();
        return false;
       }
     }
     if(toDate != ''){
         if(defaultDate != toDate && (/Invalid|NaN/.test(new Date(d.toLocaleDateString(toDate))) || !toDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/))){
         if(defaultDate != toDate && !toDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/)){
         alert(dateErrorMsg + defaultDate);
         $("#mmToDate").focus();
         return false;
       }
     }

    document.getElementById("start").value = '0';
    return true;              
}
</script>