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

<%
  final String DATE_FORMAT = "en".equals(lang) ? "DD/MM/YYYY" : "JJ/MM/AAAA";
  final String newsFromDate = Utils.nullReplace(slingRequest.getParameter("newsnewsFromDate"));
  final String newsToDate = Utils.nullReplace(slingRequest.getParameter("newsToDate"));

  //if (currentStyle.get("newsSearchResultsPath", "").length() > 0) {
  if (properties.get("newsSearchResultsPath", "").length() > 0) {
    String resultsPath = properties.get("newsSearchResultsPath", "");
    if (!Utils.isNotEmpty(resultsPath)) {
      log.warn("No path for news search results path.");
    }
    // Account for localized images
    String imagePath = currentDesign.getPath() + "/images/";
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
<!--START of newssearchinput form-->    
<div class="image_box"> 
  <div class="panel panel-default">
    <div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="newsSearchHeadingText"/></div>
  </div>
	<form class="form-horizontal searchNews"  action="<%=resultsPath%>.html" name="searchMultimedia" title="<fmt:message key="newsSearchTitle"/>" accept-charset="utf-8" role="form">
		<input type="hidden" name="_charset_" value="utf-8">
		<input id="defaultDate" type="hidden" value="${defaultDate}" />
		<input id="defaultDateMsg" type="hidden" value="<fmt:message key="newsDateErrorMsg"/>" />   
    	<p><fmt:message key="newsSearchWarning"/></p>  

    	<!--START of keyword-->
    	<input title="<fmt:message key="newskeyword"/>" id="newskeyword" class="form-control searchText" type="text" name="newskeyword"  placeholder="<fmt:message key="newskeyword"/>"/>
		<!--END of keyword-->

		<!--START from/to -News searchinput-->
		<div class="input-group input-daterange input-group-sm">
    		<label class="input-group-btn" for="newsFromDate">
        		<span class="btn btn-default">
                    <span class="glyphicon glyphicon-calendar"></span><span class="hidden">newsFromDate</span>
        		</span>
    		</label>       
    		<input type="text" class="form-control datepicker" id="newsFromDate" name="newsFromDate" value"" data-date-language="<%=lang%>" data-provide="datepicker"  data-date-format="dd/mm/yyyy" placeholder="${newsFromDate}"/>
    		<span class="input-group-addon"><fmt:message key="searchToText"/></span>
    		<input type="text" class="form-control datepicker" id="newsToDate" name="newsToDate" value=""  data-date-language="<%=lang%>" data-provide="datepicker" data-date-format="dd/mm/yyyy" placeholder="${newsToDate}"/>
    		<label class="input-group-btn" for="newsToDate">
    			<span class="btn btn-default">
    				<span class="glyphicon glyphicon-calendar"></span><span class="hidden">newsToDate</span>
    			</span>
    		</label>    
		</div>
		<!--END from/to -News searchinput-->    

		<!--START of department select-->    
		<select title="<fmt:message key="newsSearchAllDepartmentsText"/>" id="newsdeptId" name="newsdeptId" class="form-control" >
    		<option value=""><fmt:message key="newsSearchAllDepartmentsText"/></option> 
        		<c:forEach var="dept" items="${deptMap}">
    				<option value="${dept.key}"><c:out value="${dept.value}"/></option>
           	</c:forEach>   
		</select>   
		<!--END of department select-->    
        <!--START of submit button-->    
    	<button type="submit" class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="newsSearchButton"/></button>    
        <!--END of submit button-->    
	</form>
</div> 
<!--END of newssearchinput form-->
<%
   } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
 %><img src="/libs/widgets/0.gif" class="cq-text-placeholder" alt=""><%
   }
 %>

<script type="text/javascript">
$(function () {
	$('.datepicker').datepicker({
        autoclose:true,
        format: "dd/mm/yyyy",

        //endDate: new Date(),
        endDate:'+0d',
        todayHighlight: true       
	}).datepicker('update', new Date());;;
});

</script>
<!--END from/to -News searchinput-->