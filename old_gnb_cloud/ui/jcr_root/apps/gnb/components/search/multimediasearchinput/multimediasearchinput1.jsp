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
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script src="/etc/designs/gnb/js/date_<%=lang%>.js" type="text/javascript"></script>
<%
  final String DATE_FORMAT = "en".equals(lang) ? "DD/MM/YYYY" : "JJ/MM/AAAA";
  final String mmFromDate = Utils.nullReplace(slingRequest.getParameter("mmFromDate"));
  final String mmToDate = Utils.nullReplace(slingRequest.getParameter("mmToDate"));
  
  if (currentStyle.get("multimediaSearchResultsPath", "").length() > 0) {
    String resultsPath = properties.get("multimediaSearchResultsPath", "");
    if (!Utils.isNotEmpty(resultsPath)) {
      log.warn("No path for multimedia search results path.");
    }
    // Account for localized images
    String imagePath = currentDesign.getPath() + "/images/";
    String localizedImagePath = imagePath;
    if (lang == "fr") {
      localizedImagePath += "fr/";
    }

  //Make sure the resource is a Tag Node
    Page configurationPage = pageManager.getPage("/content/gnbconfig");
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

    pageContext.setAttribute("defaultDate", DATE_FORMAT);
    pageContext.setAttribute("mmFromDate", Utils.isNotEmpty(mmFromDate) ? mmFromDate : DATE_FORMAT);
    pageContext.setAttribute("mmToDate", Utils.isNotEmpty(mmToDate) ? mmToDate : DATE_FORMAT);
%>
<cq:setContentBundle language="<%=lang%>" />
<div class="image_box"> 
    <div class="search_header"><div class="rightcurve">&nbsp;</div><h3><fmt:message key="multimediaSearchHeadingText"/></h3></div>
    <form id="searchMultimedia" action="<%=resultsPath%>.html" name="CNB_searchMM" onsubmit="return mmValidate(this);" title="<fmt:message key="multimediaSearchTitle"/>" >
        <input type="hidden" name="_charset_" value="utf-8">         
        <input id="defaultDate" type="hidden" value="${defaultDate}" />
        <input id="defaultDateMsg" type="hidden" value="<fmt:message key="multimediaDateErrorMsg"/>" />         
        <p><fmt:message key="multimediaSearchWarning"/></p>         
        <input id="mmkeyword" class="searchText" type="text" name="mmkeyword" value="<fmt:message key="multimediakeyword"/>" onclick="this.value='';"  />
        <div class="clearfloat"></div>                     
          <input type="text" id="mmFromDate" class="dates" name="mmFromDate" value="${mmFromDate}"/>                                             
          <label><fmt:message key="searchToText"/></label>
          <input type="text" id="mmToDate" class="dates" name="mmToDate" value="${mmToDate}"/>                  
        <div class="clearfloat"></div>
        <select id="mmdeptId" name="mmdeptId"> 
           <option value=""><fmt:message key="multimediaSearchAllDepartmentsText"/></option> 
           <c:forEach var="dept" items="${deptMap}">
            <option value="${dept.key}"><c:out value="${dept.value}"/></option>
           </c:forEach>             
        </select>                 
        <input type="image" id="searchButton"  value="<fmt:message key="searchButtonText"/>" alt="<fmt:message key="mmSearchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />
        <div class="clearfloat"></div>
    </form> 
</div> 

<%
   } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
 %><img src="/libs/widgets/0.gif" class="cq-text-placeholder" alt=""><%
   }
 %>
<script>
  
  function mmValidate() {    
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
         //if(defaultDate != toDate && (/Invalid|NaN/.test(new Date(d.toLocaleDateString(toDate))) || !toDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/))){
         if(defaultDate != toDate && !toDate.match(/^\d\d?\/\d\d?\/\d\d\d\d$/)){
         alert(dateErrorMsg + defaultDate);
         $("#mmToDate").focus();
         return false;
       }
     }
      
     return true;            
  };      
    
</script>
 