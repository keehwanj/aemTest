<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.io.FileNotFoundException"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.tag.DepartmentValueComparator"%>
<%@page import="com.t4g.cnb.utils.Utils"%>

<%
  // Get language and content bundle for that language
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }
%>


<cq:includeClientLib css="ag.components.newssearchinput"/>
<cq:includeClientLib js="ag.components.newssearchinput"/>
<!--
<script src="/etc/designs/gnb/js/jquery-1.9.1.js"  type="text/javascript"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
-->

<script src="/etc/designs/gnb/js/date_<%=lang%>.js" type="text/javascript"></script>

<%
  final String DATE_FORMAT = "en".equals(lang) ? "DD/MM/YYYY" : "JJ/MM/AAAA";
  final String newsFromDate = Utils.nullReplace(slingRequest.getParameter("newsnewsFromDate"));
  final String newsToDate = Utils.nullReplace(slingRequest.getParameter("newsToDate"));
  if (currentStyle.get("newsSearchResultsPath", "").length() > 0) {
    String resultsPath = properties.get("newsSearchResultsPath", "");
    if (!Utils.isNotEmpty(resultsPath)) {
      log.warn("No path for news search results path.");
    }
    // Account for localized images
      String imagePath = currentDesign.getPath() + "/clientlib/images/";
      //out.write(imagePath);  
    String localizedImagePath = imagePath;
    if (lang == "fr") {
      localizedImagePath += "fr/";
    }

    //Make sure the resource is a Tag Node
    //changed by Keehwan Jee 2013-11-29
    Page configurationPage = pageManager.getPage("/content/gnbconfig");
    TreeMap<String, String> sorted_map = new TreeMap<String, String>();
    if (configurationPage != null) {
      if (configurationPage.getProperties().get("organizationTagData_" + lang) != null) {
        // String path = configurationPage.getProperties().get("organizationTagData_" + lang).toString();
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

    pageContext.setAttribute("defaultDate", DATE_FORMAT);
    pageContext.setAttribute("newsFromDate", Utils.isNotEmpty(newsFromDate) ? newsFromDate : DATE_FORMAT);
    pageContext.setAttribute("newsToDate", Utils.isNotEmpty(newsToDate) ? newsToDate : DATE_FORMAT);
%>
<cq:setContentBundle language="<%=lang%>" />
<div class="image_box"> 
    <div class="search_header"><div class="rightcurve">&nbsp;</div><h3><fmt:message key="newsSearchHeadingText"/></h3></div>
    <form id="searchMultimedia" action="<%=resultsPath%>.html" name="searchMultimedia" onsubmit="return newsValidate(this);" title="<fmt:message key="newsSearchTitle"/>" accept-charset="utf-8">
        <input type="hidden" name="_charset_" value="utf-8">
        <input id="defaultDate" type="hidden" value="${defaultDate}" />
        <input id="defaultDateMsg" type="hidden" value="<fmt:message key="newsDateErrorMsg"/>" />         
        <p><fmt:message key="newsSearchWarning"/></p>  
        <!--<label  for="newskeyword" class="inv"><fmt:message key="newskeyword"/></label>new code-->        
        <input title="<fmt:message key="newskeyword"/>" id="newskeyword" class="searchText" type="text" name="newskeyword" value="<fmt:message key="newskeyword"/>" onclick="this.value='';"  /><!--added title-->
        <div class="clearfloat"></div>   
        <!--<label  for="newsFromDate"  class="inv">${newsFromDate}</label>new code-->   
          <input title="${newsFromDate}" type="text" id="newsFromDate" class="dates" name="newsFromDate" value="${newsFromDate}"/><!--added title-->
          <label for="newsToDate"><fmt:message key="searchToText"/></label>
          <input type="text" id="newsToDate" class="dates" name="newsToDate" value="${newsToDate}"/>                  
        <div class="clearfloat"></div>
        <!--<label for="newsdeptId"  class="inv"><fmt:message key="newsSearchAllDepartmentsText"/></label>new code--> 
        <select title="<fmt:message key="newsSearchAllDepartmentsText"/>" id="newsdeptId" name="newsdeptId"><!--added title--> 
           <option value=""><fmt:message key="newsSearchAllDepartmentsText"/></option> 
           <c:forEach var="dept" items="${deptMap}">
            <option value="${dept.key}"><c:out value="${dept.value}"/></option>
           </c:forEach>   
        </select>   
        <input type="image" id="searchButton" value="<fmt:message key="searchButtonText"/>" alt="<fmt:message key="newsSearchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />
        <div class="clearfloat"></div>
    </form> 
</div> 
<%
   } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
    %><img src="/libs/cq/ui/resources/0.gif" class="cq-list-placeholder" alt=""><%
   }
 %>

<script>
  
  function newsValidate() {    
    var fromDate = $("#newsFromDate").val();       
    var toDate = $("#newsToDate").val();
    var dateErrorMsg = $("#defaultDateMsg").val();
    var defaultDate = $("#defaultDate").val();

    //Bug fixing for Chrome/Safari-use "toLocaleDateString()" : /Invalid|NaN/.test(new Date(d.toLocaleDateString(fromDate))) 
    var d=new Date();

    if(fromDate != ''){                          
      //if(defaultDate != fromDate && (/Invalid|NaN/.test(new Date(d.toLocaleDateString(fromDate))) || !fromDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/))){
      if(defaultDate != fromDate && !fromDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/)){
          
        alert(dateErrorMsg + defaultDate);
        $("#newsFromDate").focus();
        return false;
       }
     }
     if(toDate != ''){
         //if(defaultDate != toDate && (/Invalid|NaN/.test(new Date(d.toLocaleDateString(toDate))) || !toDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/))){
         if(defaultDate != toDate && !toDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/)){
         alert(dateErrorMsg + defaultDate);
         $("#newsToDate").focus();
         return false;
       }
     }
      
     return true;            
  };      
 
</script>