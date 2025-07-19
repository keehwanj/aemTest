<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="org.apache.sling.api.SlingHttpServletRequest"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Arrays"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.search.result.ResultPage"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@include file="fragments/init.jsp"%>
<%
try {
  //These are setup in the init.jsp
  final Resource p_resource = resource;
  final SlingHttpServletRequest p_slingRequest = slingRequest;
  final Node p_deptDataNode = (Node)request.getAttribute("deptDataNode");
  final String p_serviceDataPage = (String)request.getAttribute("serviceDataPage");
  final String lang = (String)request.getAttribute("lang");
  final String s=request.getServerName();      

  final Session session = p_resource.getResourceResolver().adaptTo(Session.class);
  final QueryBuilder builder = p_resource.getResourceResolver().adaptTo(QueryBuilder.class);
  SearchResult result = null;
  String service_start = Utils.nullReplace(p_slingRequest.getParameter("service_start"));
  String service_hits = Utils.nullReplace(p_slingRequest.getParameter("service_hits"));
  
  if (p_deptDataNode != null && p_serviceDataPage != null) {
    Map<String, String> querymap = new HashMap<String, String>();
    querymap.put("1_prop", "serviceinfo/DEPTID");
    querymap.put("1_prop.value", p_deptDataNode.getProperty("DEPTID").getString());
   
    if("fr".equals(lang)){
      querymap.put("orderby", "@serviceinfo/@SERVICENAMEFRE_STRIP");
    }else{
      querymap.put("orderby", "@serviceinfo/@SERVICENAME_STRIP");
    }    
    querymap.put("path", p_serviceDataPage);
    querymap.put("type", "cq:Page");

    Query query = builder.createQuery(PredicateGroup.create(querymap), session);
    
    if (Utils.isNotEmpty(service_start)) {
      query.setStart(Long.valueOf(service_start));
    }
    if (Utils.isNotEmpty(service_hits)) {
      query.setHitsPerPage(Integer.parseInt(service_hits));
    } else {
      service_hits = "25";
      query.setHitsPerPage(Integer.parseInt(service_hits));
    }
    result = query.getResult();

  }



  if(result!=null && result.getTotalMatches()>0) {
    List<String> pageCounts = Arrays.asList("100", "50", "25");
 	//changed on 2014-1-23   

    //out.writ(request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()+"<br/>");
    //String s=request.getServerName();
    //out.write("server name  :"+s+"<br/>");
	String url="";
        url = p_slingRequest.getRequestURL().toString().replace("/_jcr_content/","");
        url = url.toString().replace("/jcr:content/","");      
        url = url.toString().replace("/jcr%3acontent/","");            
        url = url.toString().replace("mainContent_par/departmentinfo.servicestab","");      
        url = url+ "?service_start=%s&service_hits=%s#services"; 


    //Output the page count selectors
    out.write("<div id=\"search_column\" style=\"width:100%\">");
    out.write("<div class=\"pagination_top\">");
    for(String pageCount : pageCounts) {
      String link = String.format("<div class=\"item\"><a href=\""+  url + "\">%s</a></div>",0,pageCount,pageCount);
      if(service_hits.equals(pageCount)) {
        link = link.replace("<a","<a class=\"active\"");
      }
      out.write(link);
    }
    out.write(String.format("<div class=\"item\"><span class=\"legend\">%s</span></div>",LocaleSupport.getLocalizedMessage(pageContext, "legendText")));
    out.write("<div class=\"clearfloat\"></div>");
    out.write("</div>");   

    //Iterate the results and include the search result rendering of each
    out.write("<div class=\"table-responsive\">");
    out.write("<table class=\"table table-hover\"><tr>");

    out.write(String.format("<th>%s</th>",LocaleSupport.getLocalizedMessage(pageContext, "title")));
    out.write(String.format("<th>%s</th>",LocaleSupport.getLocalizedMessage(pageContext, "fees")));
    out.write(String.format("<th>%s</th>",LocaleSupport.getLocalizedMessage(pageContext, "forms")));
    out.write(String.format("<th>%s</th>",LocaleSupport.getLocalizedMessage(pageContext, "contacts")));
    out.write(String.format("<th>%s</th>",LocaleSupport.getLocalizedMessage(pageContext, "transactions")));
    out.write("</tr>");
    WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
    // below is what this page was doing before - for each hit result call searchresult.html 
    // which is found at /apps/gnb/components/page/gnbpage/searchresult.jsp  this built the html table row for the services - 
    // checking its properties for fees, etc and diaplaying icons if they were present - to build the url to let people get to the 
    // service - it called quicklink.jsp - found in the same folder - whcih called a java utility built by T4G - this built the 
    // url with selectors, etc.  - all this work is now accomplished below.  

            String langSuffix = "";
            if (lang == "fr") {
                 langSuffix = "FRE";
            } 
            String currntPage = currentPage.getPath(); 
            int nLoc = currntPage.indexOf("/contacts/"); 
            String rendererPage = currntPage.substring(0,nLoc) + "/services/services_renderer."; 
            //out.write ("<br>current page = " + currntPage ); 
            //out.write ("<br>renderer page = " + rendererPage ); 

            List<Hit> list = result.getHits();
            for (int i=0; i<list.size(); i++) {

               Node node = list.get(i).getNode();
               //out.write ("currentnode  = " + node );
               Node serviceDataNode = node.getNode("serviceinfo");
               String description = "";
               String title = ""; 
               if (serviceDataNode.hasProperty("SERVICENAME"+langSuffix) ) {
                     title = serviceDataNode.getProperty("SERVICENAME"+langSuffix).getString();
                     String titleUnder = title.replace("'",""); 
                     titleUnder = titleUnder.replace(" ","_");
                     titleUnder = titleUnder.replace("/","");
                     //description = title; 
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

                     //out.write (description + "<td>" );
                     //String navItem=Utils.getQuicklink(currentNode.getPath(), currentPage, resource);
                     //String sUrl = rendererPage + serviceDataNode.getProperty("SERVICESID").getLong() + ".html";
                     String sUrl = rendererPage + serviceDataNode.getProperty("SERVICESID").getLong() + "." + titleNew + ".html";
                     //out.write ("<tr><td colspan=5>" + sUrl + "</td></tr>"); 
                     out.write ("<tr><td>"); 
                     out.write("<a href=" + sUrl +  ">" + title + "</a>" );
                     out.write ("</td><td>"); 
                     if( serviceDataNode.getProperty("FEESTABLECOUNT").getLong() > 0) {
                         out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/money_dollar.png\" />"); 
                     }else{ 
                         out.write("&nbsp;"); 
                     } 
                     out.write ("</td><td>"); 
                     if(serviceDataNode.getProperty("SERVICESFORMSTABLECOUNT").getLong() > 0) {
                         out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/page_copy.png\" />"); 
                     }else{ 
                         out.write("&nbsp;"); 
                     } 
                     out.write ("</td><td>"); 
                     if(serviceDataNode.getProperty("SERVICESCONTACTSTABLECOUNT").getLong() > 0) {
                         out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/group.png\" />"); 
                     }else{ 
                         out.write("&nbsp;"); 
                     } 
                     out.write ("</td><td>"); 
                     if(serviceDataNode.getProperty("ONLINEPAYMENTTABLECOUNT").getLong() > 0) {
                         out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/mouse.png\" />"); 
                     }else{ 
                         out.write("&nbsp;"); 
                     } 
                     out.write ("</td></tr>"); 
               }

         }        
    out.write("</table>");   
    out.write("</div>");
    
    //Output the bottom pagination
    //START of if  
    if(result.getResultPages().size()>1) {
      out.write("<ul class=\"pagination\">");
      out.write(String.format("<li class=\"item\"><span class=\"legend\">%s</span></li>", LocaleSupport.getLocalizedMessage(pageContext, "resultPagesText")));
      if(result.getPreviousPage()!=null) {
        out.write(String.format("<li class=\"item\"><a href=\""+  url + "\">%s</a></li>",result.getPreviousPage().getStart(),service_hits,LocaleSupport.getLocalizedMessage(pageContext, "previousText")));                  
      }
      //END of for loop    
      for(ResultPage resultPage : result.getResultPages()) {
        String linkText = new Long(resultPage.getIndex() + 1).toString();
        if(resultPage.isCurrentPage()) {
          out.write(String.format("<li class=\"item active\"><a href=\"#\" class=\"active\">%s</a></li>", linkText));
        } else {
          out.write(String.format("<li class=\"item\"><a href=\""+  url + "\">%s</a></li>",resultPage.getStart(),service_hits,linkText));          
        }
      }
      //END of for loop  
      //START of if  
      if(result.getNextPage()!=null) {
        out.write(String.format("<li class=\"item\"><a href=\""+  url + "\">%s</a></li>",result.getNextPage().getStart(),service_hits,LocaleSupport.getLocalizedMessage(pageContext, "nextText")));                  
      }
      //END of if  
      out.write("</ul>");
    }
	//END of if  

    out.write("</div>");
    out.write("<div class=\"clearfloat\"></div>");
    
    
  } // if there are results
} catch (Exception ex) {
  out.write("Unable to display services for this department");
  log.error("DepartmentInfo component unable to render services tab.", ex);
}
%>