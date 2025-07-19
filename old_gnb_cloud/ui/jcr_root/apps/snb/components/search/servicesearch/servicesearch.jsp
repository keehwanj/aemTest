<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Arrays"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.TagManager.FindResults"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.search.facets.Bucket"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.search.Predicate"%>
<%@page import="org.apache.sling.jcr.resource.JcrPropertyMap"%>
<%@page import="org.apache.sling.api.SlingHttpServletRequest"%>
<%@page import="org.apache.commons.lang3.StringUtils"%>

<%
  // Get language and content bundle for that language
  String lang = "fr";
  String tagSuffix = "-fra";
  Locale locale = currentPage.getLanguage(true);
  //out.write ("currentPage path = " + currentPage.getPath()) ; 
  String sMessage = "Veuillez ne pas employer un ast&#233risque pour les deux premiers caract&#232;res du mot-cl&#233." ; 
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
    tagSuffix = "-eng";
    sMessage = "Please do not enter an asterisk as either of the first two characters of the keyword" ; 
  }
  //Account for localized images
  String localizedImagePath = "/etc/designs/gnb/images/";
  if (lang == "fr") {
    localizedImagePath += "fr/";
  }
%>  
<cq:setContentBundle language="<%=lang%>" />
<%
  TagManager tm = resourceResolver.adaptTo(TagManager.class);
  int nInvalidSearch = 0; 


  final Session session = resource.getResourceResolver().adaptTo(Session.class);
  SearchResult result = null;
  final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);

  Map<String, String> map = new HashMap<String, String>();
  /*START of XSSS*/
  //final String keyword = xssAPI.encodeForHTML(Utils.nullReplace(slingRequest.getParameter("keyword")));
  final String keyword = Utils.nullReplace(slingRequest.getParameter("keyword"));
  /*END of XSSS*/

  final String tagids[] = slingRequest.getParameterValues("tagid");
  final String start = Utils.nullReplace(slingRequest.getParameter("start"));
  final String facet = Utils.nullReplace(slingRequest.getParameter("facet"));
  String hits = Utils.nullReplace(slingRequest.getParameter("hits"));
  String encodedKeyword = new String(keyword.getBytes("UTF-8"), "UTF-8"); 
   //added by cet Dec 2011 - remove lucene reserved operators from search string before searching 
   //Note - want to replace single quote with '' only in tag search - so don't do that replace here  
  encodedKeyword = encodedKeyword.trim(); 
  encodedKeyword = encodedKeyword.replace("(",""); 
  encodedKeyword = encodedKeyword.replace(")",""); 
  encodedKeyword = encodedKeyword.replace("^",""); 
  encodedKeyword = encodedKeyword.replace("{","");
  encodedKeyword = encodedKeyword.replace("}","");
  encodedKeyword = encodedKeyword.replace("[","");
  encodedKeyword = encodedKeyword.replace("]","");
  encodedKeyword = encodedKeyword.replace("+",""); 

  //added by cet Dec 2011 - default service data path in case config page or property is not found  
  String serviceDataPath = "/content/data/services";
  Page configurationPage = pageManager.getPage("/content/gnbconfig");
  if (configurationPage != null && configurationPage.getProperties() != null
      && configurationPage.getProperties().get("serviceDataPage") != null) {
       serviceDataPath = configurationPage.getProperties().get("serviceDataPage").toString();
  }
 if (encodedKeyword.indexOf("*") == 0 || encodedKeyword.indexOf("*") == 1  ){
     nInvalidSearch = 1;  
     //out.write ("nInvalidSearch = " + nInvalidSearch ); 
 }else {
     if ((Utils.isNotEmpty(encodedKeyword) || Utils.isNotEmpty(properties.get("tagid", "")))  && serviceDataPath != null) {       

       if (Utils.isNotEmpty(encodedKeyword)) {
          map.put("group.p.or", "true");
          //removed by cet Dec 2011 - don't replace single quote with '' in the test search - just in tag search below   

          map.put("group.1_fulltext", encodedKeyword);
          //map.put("group.1_fulltext.relPath", ".//serviceinfo/.");       
          map.put("group.1_fulltext.relPath", "./serviceinfo/.");        
          map.put("group.2_property","jcr:content/cq:tags");

          if (encodedKeyword.length() > 0) {
            FindResults fr = tm.findByTitle(encodedKeyword.replace("'","''"));

            for(int i = 0; i< fr.tags.length; i++){         
                 map.put("group.2_property." + (i+1) + "_value", ((Tag)fr.tags[i]).getTagID() );
            }
          } 
       }
       if(Utils.isNotEmpty(properties.get("tagid", "")) || (tagids!=null && tagids.length>0)) {
         int offset =1;    
        // map.put("1_group.allrequired.value", "true");
        // map.put("1_group.1_property","jcr:content/cq:tags");


         if (tagids!=null && tagids.length>0) {
           int newOffset = offset;
           for(int i = 0; i< tagids.length; i++) {
             map.put(i + offset + "_property","jcr:content/cq:tags");
             map.put(i + offset + "_property.value", tagids[i].toString());
             newOffset = i + offset;

           }
           offset = newOffset +1;
         }

         if(Utils.isNotEmpty(properties.get("tagid", ""))) {
             Object[] values = (Object[])properties.get("tagid");
             for(int i = 0; i< values.length; i++) {
	            if(i<1){
					map.put("property","jcr:content/cq:tags");
                }
               	map.put("property."+(i + offset)+"_value", values[i].toString());
             }

         }
       }

       map.put("tagid.property", "jcr:content/cq:tags");
       map.put("path", serviceDataPath);
       map.put("type", "cq:Page");
       if("fr".equals(lang)){
         map.put("orderby", "@serviceinfo/@SERVICENAMEFRE_STRIP");
       }else{
         map.put("orderby", "@serviceinfo/@SERVICENAME_STRIP");
       }
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

       if(Boolean.valueOf(facet)){
         query.setStart(0);
       }else if (Utils.isNotEmpty(start)) {
           if (StringUtils.isNumeric(start)) {
               query.setStart(Long.valueOf(start));
           }else{
				query.setStart(0);
           }
       }
    
       if (Utils.isNotEmpty(hits)) {
           if (StringUtils.isNumeric(hits)) {
				query.setHitsPerPage(Integer.parseInt(hits));
           }else{
         		hits = "25";
         		query.setHitsPerPage(Integer.parseInt(hits));
           }

       } else {
         hits = "25";
         query.setHitsPerPage(Integer.parseInt(hits));
       }

       result = query.getResult(); 

       pageContext.setAttribute("tagids", tagids);
       pageContext.setAttribute("start", start);
       pageContext.setAttribute("hits", hits);
       pageContext.setAttribute("hitlist", Arrays.asList("100", "50", "25"));
       pageContext.setAttribute("keyword", encodedKeyword);
     }
     pageContext.setAttribute("result", result);
     pageContext.setAttribute("uri", slingRequest.getRequestURL());
  }

%>
<!--START of row_1-->
<div class="row">
    <!--START of if hideCriteria condition-->        
	<%if(!properties.get("hideCriteria", false)) {%>
    	<!--START of col-xs-12 col-sm-12 col-md-8 col-lg-8-->        
		<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
	   		<!--START of id=search_box-->
	  		<div id="search_box">
      			<form action="${currentPage.path}.html" class="form-horizontal"  id="searchForm_" onsubmit="return validate(this);" name="search_form" role="form">
    				<input type="hidden" name="_charset_" value="utf-8">
    				<input id="start" name="start" type="hidden" value="${start}"/>
    				<input id="hits" name="hits" type="hidden" value="${hits}"/>
  					<div class="panel panel-default">
    					<div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="serviceSearchTitle"/></div>
  					</div>
				<!--START class=form-group-->
                 <br/>
  				<div class="form-group">
    					<label class="control-label col-sm-3" for="keyword"><fmt:message key="keyword"/></label>
    				<div class="col-sm-9">
      					<input type="text" name="keyword" class="form-control servicekeyword" id="keyword" value="<%=encodedKeyword%>" placeholder="<fmt:message key="keyword"/>" onclick="this.value='';">
    				</div>
  				</div>   
        			<!--START of submit button-->    
				<div class="form-group">
    					<button type="submit" class="btn btn-default btn-sm center-block searchButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="contactSearchButtonText"/></button>
				</div>
        			<!--END of submit button-->   
            	<!--END of class=form-group -->
  				</form>
			</div>
	  		<!--END of id=search_box-->        
		</div>
		<!--END of col-xs-12 col-sm-12 col-md-8 col-lg-8-->        
    	<!--START of col-md-4 col-lg-4 hidden-xs hidden-sm-->        
		<div class="col-md-4 col-lg-4 hidden-xs hidden-sm">
			<!--START of id=sidebar-->
			<div id="sidebar">
    			<cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
			</div>
			<!--END of id=sidebar-->        
  		</div>
		<!--END of col-md-4 col-lg-4 hidden-xs hidden-sm-->        
	<%}else{%>
    <!--START of col-sm-12-->  
	<div class="col-sm-12">
		<!--START of id=sidebar-->
		<div id="sidebar">
    		<cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
		</div>
		<!--END of id=sidebar-->        
  	</div>
    <!--END of col-sm-12-->  
	<%}%>
    <!--END of if hideCriteria condition-->   
</div>
<!--END of row_1-->
<div class="clearfloat"></div>
<%
if (nInvalidSearch == 1) { 
    out.write ("<br>" + sMessage + "<br><br>"); 
}
%>
<c:choose>
  <c:when test="${empty result}">
  </c:when>
  <c:when test="${empty result.hits}">    
    <fmt:message key="noResultsText">
    <fmt:param value="<%=encodedKeyword%>"/>
    </fmt:message>      
  </c:when>
  <c:otherwise>



<!--START of row_2-->
  <div class="row">

	<!--START of col-sm-9-->
  <%if(!properties.get("hideFacets", false)) {%>
    <div class="col-sm-9 col-sm-push-3">
  <%} else {%>
    <div class="col-sm-12">
  <%}%>
	<!--START of right-->
		<!--START of class=pagination_top-->  
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
              <c:when test="${hitdiv eq hits}">                                        
                <div class="item">
                    <a class="active" href="<c:url value="${uri}">
                    <c:param name="_charset_" value="UTF-8"/>  
                    <c:forEach var="tagid" items="${tagids}"> 
                      <c:param name="tagid" value="${tagid}"/>                                               
                    </c:forEach> 
                    <c:param name="keyword" value="${keyword}"/>
                    <c:param name="start" value="0"/>
                    <c:param name="hits" value="${hitdiv}"/>
                    </c:url>">${hitdiv}</a>
                </div> 
              </c:when>
              <c:otherwise>
                <div class="item">                    
                  <a href="<c:url value="${uri}">    
                    <c:param name="_charset_" value="UTF-8"/>                                            
                    <c:forEach var="tagid" items="${tagids}"> 
                      <c:param name="tagid" value="${tagid}"/>                                               
                    </c:forEach> 
                    <c:param name="keyword" value="${keyword}"/>
                    <c:param name="start" value="0"/>
                    <c:param name="hits" value="${hitdiv}"/>
                    </c:url>">${hitdiv}</a>
                </div>
              </c:otherwise>
            </c:choose>                              
          </c:forEach>                                                                                                                                                       
          <div class="item">
            <span class="legend"><fmt:message key="legendText"/></span>
          </div>
          <div class="clearfloat"></div>                                                      
        </div>         
		<!--END of class=pagination_top-->  
		<!--START of table-->  
        <div class="table-responsive">
        <table width="100%"class="table table-hover table-striped">
            <tr>
                <th style="width: 60%;"><fmt:message key="ssTitle" /></th> 
                <th><fmt:message key="ssFees" /></th>                                
                <th><fmt:message key="ssForms" /></th>                                
                <th><fmt:message key="ssContacts" /></th>                                
                <th><fmt:message key="ssTransactions" /></th>                                    
            </tr>

            <%
            //out.write ("currentPage.path = " + currentPage.getPath() ); 
            String rendererPage = currentPage.getPath(); 
            if (rendererPage.length() > 25) {
                String subRenderer = rendererPage.substring(0,25); 
                //out.write ("subRenderer = " + subRenderer ) ; 
                if (subRenderer.equals("/content/gnb/en/services/") ) {
                    rendererPage = "/content/gnb/en/services"; 
                }else if (subRenderer.equals("/content/gnb/fr/services/") ){
                    rendererPage = "/content/gnb/fr/services";
                }
            }
            rendererPage = rendererPage + "/services_renderer." ;
            //out.write ("<br>renderer page = " + rendererPage ); 
            String langSuffix = "";
            if (lang == "fr") {
                 langSuffix = "FRE";
            } 
            List<Hit> list = result.getHits();
            for (int i=0; i<list.size(); i++) {
               
               Node node = list.get(i).getNode();
               //out.write ("currentnode  = " + node );
               Node serviceDataNode = node.getNode("serviceinfo");
               String description = "";
               String title = ""; 
               if (serviceDataNode.hasProperty("SERVICENAME"+langSuffix) ) {
                     title = serviceDataNode.getProperty("SERVICENAME"+langSuffix).getString();
                     String titleUnder = title.replace(" ","_");
                     titleUnder = titleUnder.replace("’","_");  
                     titleUnder = titleUnder.replace("'","_");  
                     titleUnder = titleUnder.replace("’","_");
                     titleUnder = titleUnder.replace("/","");
                     //replace the accented characters with the html equiv. 
                     titleUnder = titleUnder.replace("\u00C9","&#201;"); 
                     titleUnder = titleUnder.replace("\u00E9","&#233;"); 
                     titleUnder = titleUnder.replace("é","&#233;");  
                     titleUnder = titleUnder.replace("\u00F4","&#244;");
                     titleUnder = titleUnder.replace("\u00D4","&#212;");
                     titleUnder = titleUnder.replace("\u00E8","&#232;");
                     titleUnder = titleUnder.replace("\u00C8","&#200;");
                     titleUnder = titleUnder.replace("\u00EE","&#238;");
                     titleUnder = titleUnder.replace("\u00CE","&#206;");
                     titleUnder = titleUnder.replace("\u00E0","&#224;");
                     titleUnder = titleUnder.replace("\u00C7","&#199;");
                     titleUnder = titleUnder.replace("\u00E7","&#231;");
                     titleUnder = titleUnder.replace("\u00EA","&#234;");
                     titleUnder = titleUnder.replace("\u00CA","&#202;");
                     titleUnder = titleUnder.replace("\u00EB","&#235;");
                     titleUnder = titleUnder.replace("\u00CB","&#203;");
                     titleUnder = titleUnder.replace("\u00E2","&#226;");
                     titleUnder = titleUnder.replace("\u00C2","&#194;");
                     //replace the trademark tm character in the title 
                     titleUnder = titleUnder.replace("\u2122","");                    
                     //replace the squished oe character in the title 
                     titleUnder = titleUnder.replace("\u0153","oe");
                     //titleUnder = titleUnder.replace("œ","oe");
                     //out.write("titleunder = " + titleUnder);
                     //replace en dashes in the title with regular dashes  
                     titleUnder = titleUnder.replace("\u2013","-"); 
                     //replace left double curly quotes with nothing 
                     titleUnder = titleUnder.replace("\u201C","");    
                     //eliminate colons and semi-colons 
                     titleUnder = titleUnder.replace(":","");  

                     //titleUnder = titleUnder.replace(";","");
                   
                     //check to see if the string contains a final quote punctuation - if so, replace it with an underscore - sometimes used like apostrophes.  
                     String titleNew = ""; 
                     char[] c = titleUnder.toCharArray();
                     for (int pos = 0; pos < c.length; pos++) {
                         int type = Character.getType(c[pos]);
                         if (type == 30) {
                            titleNew = titleNew + "_";
                         }else{
                            titleNew = titleNew + c[pos]; 
                          }
                     }
                     //description = title;
                     
                     //out.write (description + "<td>" );
                     //String navItem=Utils.getQuicklink(currentNode.getPath(), currentPage, resource);
                     //String sUrl = rendererPage + serviceDataNode.getProperty("SERVICESID").getLong() + ".html";
                     String sUrl = rendererPage + serviceDataNode.getProperty("SERVICESID").getLong() + "." + titleNew + ".html";
                     //out.write ("<tr><td colspan=5>" + sUrl + "</td></tr>"); 
                     out.write ("<tr><td>"); 
                     out.write("<a href=" + sUrl +  ">" + title + "</a>" );
                     out.write ("</td><td>"); 
                     if( serviceDataNode.getProperty("FEESTABLECOUNT").getLong() > 0) {
                         //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/money_dollar.png\" />"); 
                         out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/money_dollar.png\" alt=\"\"/>"); 
                     }else{ 
                         out.write("&nbsp;"); 
                     } 
                     out.write ("</td><td>"); 
                     if(serviceDataNode.getProperty("SERVICESFORMSTABLECOUNT").getLong() > 0) {
                         //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/page_copy.png\" />"); 
                         out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/page_copy.png\" alt=\"\"/>"); 
                     }else{ 
                         out.write("&nbsp;"); 
                     } 
                     out.write ("</td><td>"); 
                     if(serviceDataNode.getProperty("SERVICESCONTACTSTABLECOUNT").getLong() > 0) {
                         //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/group.png\" />"); 
                         out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/group.png\" alt=\"\"/>"); 
                     }
                   /**START of new(2015-1-5)-Dawn Stevens request**/
                     else if(serviceDataNode.getProperty("SNBOFFERED").getString().endsWith("S")) {
                         //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/group.png\" />"); 
                        out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/group.png\" />"); 
                     }  
                     else if(serviceDataNode.getProperty("SNBOFFERED").getString().endsWith("P")) {
                         //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/group.png\" />"); 
                        out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/group.png\" alt=\"\"/>"); 
                     }                     
                   /**END of new(2015-1-5)**/
                   	 else{ 
                         out.write("&nbsp;"); 
                     } 
                     out.write ("</td><td>"); 
                     if(serviceDataNode.getProperty("ONLINEPAYMENTTABLECOUNT").getLong() > 0) {
                         //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/mouse.png\" />"); 
                         out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/mouse.png\" alt=\"\"/>"); 
                     }else{ 
                         out.write("&nbsp;"); 
                     } 
                     out.write ("</td></tr>"); 
               }
         }        
        %>
        </table>
        </div>    
		<!--END of table-->  

        <!--START of class=pagination-->   
        <ul class="pagination">
            <c:if test="${fn:length(result.resultPages) > 1}">
                <li class="item">
                    <span class="legend"><fmt:message key="resultPagesText" /></span>                    
                </li>                
                <c:forEach var="page" items="${result.resultPages}">
                    <c:choose>
                        <c:when test="${page.currentPage}">
                            <li class="item active">
                              <a href="#" class="active">${page.index + 1}</a>
                             </li>
                        </c:when>
                        <c:otherwise>
                            <li class="item">
                              <a href="<c:url value="${uri}">                                                
                              <c:param name="_charset_" value="UTF-8"/>
                                <c:forEach var="tagid" items="${tagids}"> 
                                  <c:param name="tagid" value="${tagid}"/>                                                
                                </c:forEach> 
                              <c:param name="keyword" value="${keyword}"/>
                              <c:param name="start" value="${page.start}"/>
                              <c:param name="hits" value="${hits}"/>
                              </c:url>">
                              ${page.index + 1}</a>
                            </li>
                        </c:otherwise>
                    </c:choose>
                </c:forEach>
                <c:if test="${result.nextPage != null}">
                <li class="item"><a
                    href="<c:url value="${uri}">
                        <c:param name="_charset_" value="UTF-8"/>
                    <c:forEach var="tagid" items="${tagids}"> 
                      <c:param name="tagid" value="${tagid}"/>                                                
                    </c:forEach> 

                        <c:param name="keyword" value="${keyword}"/>
                        <c:param name="start" value="${result.nextPage.start}"/>
                        <c:param name="hits" value="${hits}"/>
                      </c:url>">
                  <fmt:message key="nextText" /></a>
                </li>
                </c:if>
                <c:if test="${result.previousPage != null  }">
                  <li class="item"><a
                    href="<c:url value="${uri}">
                        <c:param name="_charset_" value="UTF-8"/>
                     <c:forEach var="tagid" items="${tagids}"> 
                      <c:param name="tagid" value="${tagid}"/>                                                
                    </c:forEach> 
                        <c:param name="keyword" value="${keyword}"/>
                        <c:param name="start" value="${result.previousPage.start}"/>
                        <c:param name="hits" value="${hits}"/>
                      </c:url>">
                  <fmt:message key="previousText" /></a>
                 </li>
               </c:if>
            </c:if>
        </ul>
	    <!--END of class=pagination--> 

        <!--END of right-->
    </div>
	<!--END of col-sm-9-->


    <!--START of col-sm-3-->  
  <%if(!properties.get("hideFacets", false)) {%>
    <div class="col-sm-3 col-sm-pull-9">
  <%} else {%>
    <div class="col-sm-3" style="display: none; ">
  <%}%>      
  	<!--START of left-->
  	<c:choose>    
    	<c:when test="<%=!properties.get("hideFacets", false) && result.getFacets()!=null && result.getFacets().get("tagid")!=null && result.getFacets().get("tagid").getBuckets()!=null%>">     
        	<!--START of id=search_services_left_nav in when condition-->  
        	<div id="search_services_left_nav">                                                
            	<div class="title"><fmt:message key="refineResultsText"/></div>        
            	<h1 class="left_nav"><fmt:message key="filterByTopic"/></h1>
            	<ul>         
            	<% 
               		String[] displayTags = {};
               		displayTags = properties.get("displayTagid",displayTags.getClass());
               		Map<String, List<String>> orderedBucket = new TreeMap<String, List<String>>();
               		for (Bucket bucket : result.getFacets().get("tagid").getBuckets()) {
                 	String bucketValue = bucket.getValue();
                 	boolean toDisplay = displayTags==null;
                 	if(!toDisplay) {
                   		for(int i=0;i<displayTags.length;i++) {
                     		toDisplay = bucketValue.startsWith(displayTags[i]);
                     		if(toDisplay) break;
                   		}
                 	}
                 	if(toDisplay) {

                     	Tag t = tm.resolve(bucketValue);
                     	if( t != null && bucketValue.contains(tagSuffix)){
                       		List<String> a = new ArrayList<String>();
                       		a.add(String.valueOf(bucket.getCount()));
                       		a.add(bucketValue);
                       		orderedBucket.put(t.getTitle(), a);
                     	}
                 	}
               		}

               		for (String key : orderedBucket.keySet()) {
                 		if (request.getParameter("tagid") != null && java.util.Arrays.asList(request.getParameterValues("tagid")).contains(orderedBucket.get(key).get(1))) {
                   		%>
                    <li><c:out value="<%=key%>"/> <span class="badge"><c:out value="<%=orderedBucket.get(key).get(0)%>"/></span> - <a href="<cq:requestURL><cq:removeParam name="tagid" value="<%=orderedBucket.get(key).get(1)%>"/><cq:removeParam name="facet" value="true"/></cq:requestURL>"><fmt:message key="filter"/></a></li>
                   		<%
                 		}else{
                   		%>
                   			<li><a title="<fmt:message key="filterResults"/>" href="<cq:requestURL><cq:addParam name="tagid" value="<%=orderedBucket.get(key).get(1)%>"/><cq:addParam name="facet" value="true"/></cq:requestURL>">
                                <c:out value="<%=key%>"/> <span class="badge"><c:out value="<%=orderedBucket.get(key).get(0)%>"/></span>
                   			</a></li>
                   		<%
                 		}
               		}
            		%>
            	</ul>
          </div>  
		  <!--END of id=search_services_left_nav in when condition-->  
    	</c:when>
    <c:otherwise>
        <c:if test="<%= !properties.get("hideFacets", false) && tagids!=null && tagids.length>0 %>">
          <!--START of id=search_services_left_nav in otherwise condition-->  
          <div id="search_services_left_nav">                                                
              <div class="title"><fmt:message key="refineResultsText"/></div>        
              <h1 class="left_nav"><fmt:message key="tagsText"/></h1>
              <ul>
                <c:forEach var="tagid" items="${tagids}"> 
                  <c:set var="tag" value="<%= tm.resolve((String) pageContext.getAttribute("tagid")) %>"/>
                  <li>${tag.title} (<%= result.getTotalMatches() %>) - <a href="<cq:requestURL><cq:removeParam name="tagid" value="${tagid}"/><cq:removeParam name="facet" value="true"/></cq:requestURL>"><fmt:message key="filter"/></a></li>
                </c:forEach>
              </ul>
           </div>
          <!--END of id=search_services_left_nav  in otherwise condition-->              
        	</c:if>            
    </c:otherwise>
  </c:choose>   
<!--END of left-->        
    </div>
<!--END of col-sm-3--> 

  </div>
  <!--END of row_2-->

     </c:otherwise>
</c:choose>
<div class="clearfloats"></div>
<script type="text/javascript">
function validate() {   
    $('#start')[0].value='0';     
    return true;              
}
</script>
<!-- START Javascript -->
<script>
$(function() {
    var fullpath = location.pathname;
    var pathsplit = fullpath.split(".");
    //getting path without selectors
    var path = pathsplit[0] + ".html";
    var auto_service_search = path.replace(".html", "/_jcr_content.auto_service_search");

    $("#keyword").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: auto_service_search,
                dataType: "json",
                data: {
                    term: request.term
                },
                success: function(result) {
                    response(
                        $.map(result, function(item) {
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
        select: function(event, ui) {
      		$(this).closest('input').val(ui.item.value);
      		$(this).closest('form').trigger('submit');
        }
    });
})
</script>
<!-- END Javascript -->