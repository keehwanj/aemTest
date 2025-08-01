<%@include file="/libs/wcm/global.jsp" %>
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
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%
  // Get language and content bundle for that language
  String lang = "fr";
  String rendererPage = "/content/gnb/fr/services";
  Locale locale = currentPage.getLanguage(true);
  //out.write ("currentPage path = " + currentPage.getPath()) ; 
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
    rendererPage = "/content/gnb/en/services";
    }

  TagManager tm = resourceResolver.adaptTo(TagManager.class);
  String sServiceType; 
  String sDeptName; 
  String sActName; 
%>  

<%@page import="com.day.cq.search.Predicate"%>
<%@page import="org.apache.sling.jcr.resource.JcrPropertyMap"%>
<%@page import="org.apache.sling.api.SlingHttpServletRequest"%><cq:setContentBundle language="<%=lang%>" />
<%
 
  final Session session = resource.getResourceResolver().adaptTo(Session.class);
  SearchResult result = null;
  final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);

  Map<String, String> map = new HashMap<String, String>();
  final String start = Utils.nullReplace(slingRequest.getParameter("start"));
  final String facet = Utils.nullReplace(slingRequest.getParameter("facet"));
  String hits = Utils.nullReplace(slingRequest.getParameter("hits"));
  String serviceDataPath = "/content/data/services";
  Page configurationPage = pageManager.getPage("/content/gnbconfig");
  if (configurationPage != null && configurationPage.getProperties() != null
      && configurationPage.getProperties().get("serviceDataPage") != null) {
       serviceDataPath = configurationPage.getProperties().get("serviceDataPage").toString();
  }
  if (serviceDataPath != null) {       

          map.put("group.p.or", "false");      
          map.put("group.1_property","jcr:content/cq:tags");
          if("fr".equals(lang)){
              map.put("group.1_property.1_value","gnb-fra:type_de_contenu/inspections");
              map.put("group.1_property.2_value","gnb-fra:type_de_contenu/licences_et_permis");
              map.put("group.1_property.3_value","gnb-fra:type_de_contenu/enregistrements");
          }else{
              map.put("group.1_property.1_value","gnb-eng:content_type/inspections"); 
              map.put("group.1_property.2_value","gnb-eng:content_type/licences and permits"); 
              map.put("group.1_property.3_value","gnb-eng:content_type/registrations");
          }
          
       map.put("tagid.property", "jcr:content/cq:tags");
       map.put("path", serviceDataPath);
       map.put("type", "cq:Page");
       if("fr".equals(lang)){
         map.put("orderby", "@serviceinfo/@SERVICENAMEFRE_STRIP");
       }else{
         map.put("orderby", "@serviceinfo/@SERVICENAME_STRIP");
       }
    
       Query query = builder.createQuery(PredicateGroup.create(map), session);

       if(Boolean.valueOf(facet)){
         query.setStart(0);
       }else if (Utils.isNotEmpty(start)) {
         query.setStart(Long.valueOf(start));
       }
    
       if (Utils.isNotEmpty(hits)) {
         query.setHitsPerPage(Integer.parseInt(hits));
       } else {
         hits = "150";
         query.setHitsPerPage(Integer.parseInt(hits));
       }

       result = query.getResult(); 

       pageContext.setAttribute("start", start);
       pageContext.setAttribute("hits", hits);
       pageContext.setAttribute("hitlist", Arrays.asList("150", "100", "50"));
     }
     pageContext.setAttribute("result", result);
     pageContext.setAttribute("uri", slingRequest.getRequestURL()); 
 %>
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
                               
        <table class="table table-bordered table-striped table-hover">
            <tr>
                <th><fmt:message key="ssTitle" /></th> 
                <th><fmt:message key="type" /></th>                                
                <th><fmt:message key="ssDept" /></th>                                
                <th><fmt:message key="ssAct" /></th>                                
                <th><fmt:message key="ssReg" /></th>                                    
            </tr>

            <%
            //out.write ("currentPage.path = " + currentPage.getPath() ); 
            // Note:  this page will not be under services - moving to misc - hard code the renderer - cannot
            // build the renderer from current page because there is no renderer in the misc folder.  
            //Note - hard coding is done under the language check at the top 
            //String rendererPage = currentPage.getPath(); 
            //if (rendererPage.length() > 25) {
                //String subRenderer = rendererPage.substring(0,25); 
                //out.write ("subRenderer = " + subRenderer ) ; 
                //if (subRenderer.equals("/content/gnb/en/services/") ) {
                    //rendererPage = "/content/gnb/en/services"; 
                //}else if (subRenderer.equals("/content/gnb/fr/services/") ){
                    //rendererPage = "/content/gnb/fr/services";
                //}
            //}
            rendererPage = rendererPage + "/services_renderer." ;
            //out.write ("<br>renderer page = " + rendererPage ); 
            String langSuffix = "";
            String orgLangSuffix = "ENG"; 
            if (lang == "fr") {
                 langSuffix = "FRE";
                 orgLangSuffix = "FRE"; 
            } 
            List<Hit> list = result.getHits();
            for (int i=0; i<list.size(); i++) {
               
               Node node = list.get(i).getNode();
               //out.write ("currentnode  = " + node );
               Node serviceDataNode = node.getNode("serviceinfo");
               //out.write ("currentnode service data node  = " + serviceDataNode );
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
                     titleUnder = titleUnder.replace(";","");
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
                     if( serviceDataNode.getProperty("SERVICETYPEID").getLong() == 2 ) {
                         sServiceType = LocaleSupport.getLocalizedMessage(pageContext, "servicetype2");
                         out.write( sServiceType); 
                     }else{ 
                         if(serviceDataNode.getProperty("SERVICETYPEID").getLong() == 3) {
                             sServiceType = LocaleSupport.getLocalizedMessage(pageContext, "servicetype3");
                             out.write( sServiceType); 
                         }else{ 
                             sServiceType = "&nbsp;";
                             out.write(sServiceType); 
                         } 
                     } 
                     out.write ("</td><td>"); 
                     //String[] orgs = serviceDataNode.getProperty("ORGANIZATIONS").getValues();
                     Value[] orgs = serviceDataNode.getProperty("ORGANIZATIONS").getValues(); 
                     
                     Node orgnode = session.getNode(orgs[0].getString()); 
                     //out.write ("orgs 0 get string = " + orgs[0].getString() );    
                     if ( orgs[0].getString().equals("/content/data/organizations/0")) { 
                        orgnode = session.getNode(orgs[1].getString());
                     } 
                     
                     //out.write ("currentnode  = " + orgnode );
                     Node orgDataNode = orgnode.getNode("orginfo");
                     //out.write ("currentnode  orgdatanode= " + orgDataNode );
                     
                     if (orgDataNode.hasProperty("DEPTNAME"+orgLangSuffix) ) {
                         sDeptName = orgDataNode.getProperty("DEPTNAME"+orgLangSuffix).getString();
                         out.write(sDeptName); 
                     }else{ 
                         sDeptName = "&nbsp;"; 
                         out.write(sDeptName); 
                     } 
                     
                     if (serviceDataNode.hasNode("acts") ) {
                         // cycle through all the acts 
                         // then cycle through all the regs below each act
                         
                         Node actNode = serviceDataNode.getNode("acts");
                         if (actNode.hasNodes()){ 
                             // there is act data  
                             int actLpCnt = 1; 
                             for (NodeIterator nodeIter = actNode.getNodes(); nodeIter.hasNext();) {
                                  Node actDataNode = (Node) nodeIter.next();
                                  if (actLpCnt > 1){
                                       // there is more than 1 act for this service - we only want to print the first act for this report 
                                  }else{
                                       // stay on the same row - 1st act for this service, but start new col 
                                       out.write ("</td><td>");
                                  
                                      //out.write("act data node name is " + actDataNode);
                                      if (actDataNode.hasProperty("SERVICEACT"+orgLangSuffix) ) {
                                         sActName = actDataNode.getProperty("SERVICEACT"+orgLangSuffix).getString(); 
                                         out.write(sActName); 
                                      }else{ 
                                         sActName = "&nbsp;"; 
                                         out.write("no property " + "SERVICEACT" + orgLangSuffix ); 
                                      } 
                                
                                      //check for regs and cycle through those 
                                      if (actDataNode.hasNodes()){ 
                                     
                                         int lpcnt = 1; 
                                     
                                         for (NodeIterator regnodeIter = actDataNode.getNodes(); regnodeIter.hasNext();) {
                                             Node regNode = (Node) regnodeIter.next();
                                             if (!regNode.getName().equalsIgnoreCase("jcr:content")){ 
                                                if (lpcnt > 1){
                                                   // there is more than 1 reg for this act - we only want to print the first
                                                 }else{
                                                   // stay on the same row - 1st reg for this act, but start new col 
                                                   out.write ("</td><td>");
                                                 
                                                    if (regNode.hasProperty("REGULATIONS"+orgLangSuffix) ) {
                                                           out.write(regNode.getProperty("REGULATIONSNUM").getString() + " " + regNode.getProperty("REGULATIONS"+orgLangSuffix).getString()); 
                                                    }else{ 
                                                           out.write("no property " + "REGULATIONS" + orgLangSuffix ); 
                                                    } 
                                                  }
                                                }else{ 
                                                    out.write("jcrcontent node - should not need this else?" );
                                                }  
                                                lpcnt = lpcnt + 1; 
                                          }  
                                       }else{
                                          //  act data node doesn't have children nodes - no regs - print out start of empty cell
                                          out.write ("</td><td>&nbsp;");
                                      } 
                                      actLpCnt = actLpCnt + 1; 
                                  } 
                             } 
                         }else{
                             out.write("act node doesn't have children nodes (i.e. no act data)  - this would be a problem - shouldn't get here" );
                         } 
                     }else{
                        //  no act node - print out empty act cell and most of empty reg cell"
                        out.write ("</td><td>&nbsp;</td><td>&nbsp;");
                     }
                     out.write ("</td></tr>"); 
               }   
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
                            <div class="item">
                              <a href="<c:url value="${uri}">                                                
                              <c:param name="_charset_" value="UTF-8"/>
                              <c:param name="keyword" value="${keyword}"/>
       à                       <c:param name="start" value="${page.start}"/>
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
                        <c:param name="keyword" value="${keyword}"/>
                        <c:param name="start" value="${result.nextPage.start}"/>
                        <c:param name="hits" value="${hits}"/>
                      </c:url>">
                  <fmt:message key="nextText" /></a></div>
                </c:if>
                <c:if test="${result.previousPage != null  }">
                  <div class="item"><a
                    href="<c:url value="${uri}">
                        <c:param name="_charset_" value="UTF-8"/>
                        <c:param name="keyword" value="${keyword}"/>
                        <c:param name="start" value="${result.previousPage.start}"/>
                        <c:param name="hits" value="${hits}"/>
                      </c:url>">
                  <fmt:message key="previousText" /></a></div>
               </c:if>
            </c:if>
        </div>
        </div>

<div class="clearfloats"></div>
<script type="text/javascript">
function validate() {   
    $('#start')[0].value='0';     
    return true;              
}
</script>