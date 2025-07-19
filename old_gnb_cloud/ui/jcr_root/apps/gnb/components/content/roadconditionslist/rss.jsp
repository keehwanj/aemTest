<?xml version="1.0" encoding="utf-8"?>
<%@page import="com.t4g.cnb.utils.ListItem"%>
<%@ page session="false"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="javax.jcr.Node"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="javax.jcr.Session"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.Calendar"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="java.util.Locale"%>
<%@include file="/libs/wcm/global.jsp"%>
<%//delete after done!! -'/libs/foundation/global.jsp' %>
<%@page session="false" import="javax.jcr.*,
        org.apache.sling.api.resource.Resource,
        com.day.cq.wcm.commons.WCMUtils,
        com.day.cq.wcm.api.Page,
        com.day.cq.wcm.api.NameConstants,
        com.day.cq.wcm.api.PageManager,
        com.day.cq.wcm.api.designer.Designer,
        com.day.cq.wcm.api.designer.Design,
        com.day.cq.wcm.api.designer.Style,
        org.apache.sling.api.resource.ValueMap,
        com.day.cq.wcm.api.components.ComponentContext,
        com.day.cq.wcm.api.components.EditContext"
%><%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0" %><%
%><%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %><%
%><%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%
%><%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %><%
%><%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %><%
%><cq:defineObjects /><%
    // add more initialization code here
%>
<%
try {
    try {
      String path = properties.get("parentPage", "");
      if (path.equals("")) {
        currentNode.setProperty("parentPage", currentPage.getPath());
        currentNode.save();
      }
    } catch (Exception e) {}
    %>
    <cq:include script="init.jsp" /><%
    WCMMode.DISABLED.toRequest(request);
     
    String lang = "fr";
    String langSuffix = "_F";
    
    Locale locale = currentPage.getLanguage(true);
   
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      lang="en";
      langSuffix = "ENG";
      locale=new Locale("en");
    }
    else locale=new Locale("fr");
    
    //final SimpleDateFormat outDateFormat = new SimpleDateFormat("E, dd MMMM yyyy HH:mm:ss 'AST'", locale);
    final SimpleDateFormat outDateFormat = new SimpleDateFormat("yyyyMMddHH:mm:ss", locale);  
        
    String host = "http://" + request.getServerName() + ":" + request.getServerPort();
    String url = currentPage.getPath();
    String link = host + url + ".html";
    String title = (String) properties.get("feedname", null) != null ? (String) properties.get("feedname", null) : currentNode.getName();
    String subTitle = (String) properties.get("feeddescription", null) != null ? (String) properties.get("feeddescription", null) : (String) properties.get("jcr:description", null);

    out.write("<rss version=\"2.0\">\n");
    out.write("<channel>\n");
    out.write(String.format("<title>%s</title>\n",title));
    out.write(String.format("<link>%s</link>\n",link));
    out.write(String.format("<description>%s</description>\n",subTitle));

    List list = (List) request.getAttribute("list");
    Date lastUpdated = currentPage.getLastModified().getTime();
    //out.write(outDateFormat.format(lastUpdated));
    
    if (!list.isEmpty()) {
     
      Iterator<Page> items = list.getPages();
      while (items.hasNext()) {
        Page item = items.next();
       /* ListItem listItem = new ListItem(item.getPath(), currentPage, resource);
       if (lastUpdated != null && listItem.getDate() != null && lastUpdated.before(listItem.getDate())) {
         lastUpdated = listItem.getDate();
        }*/
        //converting Pag to pageManager and property
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
        ValueMap props = itemPage.getProperties();
      //need to add to new package after fri jun 10  
      if (props.get("displayToPublic")!=null && Utils.isNotEmpty(props.get("displayToPublic").toString())){      
        SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
        String fromDateStr="";
        String toDateStr=""; 
        if ((Calendar) props.get("fromDate")!=null){
            Calendar fromDate = (Calendar) props.get("fromDate");
            fromDateStr = String.format("%1s", format.format(fromDate.getTime()));
        }
        
        if ((Calendar) props.get("toDate")!=null){
            Calendar toDate = (Calendar) props.get("toDate");
            toDateStr = String.format("%1s", format.format(toDate.getTime()));
            if (toDateStr.equalsIgnoreCase(fromDateStr)){
                toDateStr="";
            }
        }
        
        String description = props.get(lang+"Location") + ", " + props.get("region");
        /*if (!fromDateStr.equals("")){
            if (lang.equals("en")){
             description+=" from " + fromDateStr;
            }
            else
                   description+=" de " + fromDateStr;   
        }
        if (!toDateStr.equals("")){
            if (lang.equals("en")){
                description+=" to "+ toDateStr;
             }
            else
               description+=" à " + toDateStr;
        }*/
        
        if (!fromDateStr.equals("")){
              description+= " ("+fromDateStr;

              if (!toDateStr.equals("")){
                  description+= " - "+toDateStr+")";
              }
              else
                  description+=")";
               
        }
        
        String creationTimeStr=""; 
        if ((Calendar) props.get("jcr:created")!=null){
            Calendar val = (Calendar) props.get("jcr:created");
            creationTimeStr = String.format("%1s", format.format(val.getTime()));
        }
        
        
        /* NOT SURE IF THIS IS CORRECT
        If the Date (from) is before the publish Date, choose this date as the report title*/
        /*Calendar fromDateTime=(Calendar) props.get("fromDate");
        Calendar createdTime= (Calendar) props.get("jcr:created");
        if (fromDateTime.before(createdTime)){
            onTimeStr=fromDateStr;
        }*/
       
        //get the location from the english or french tab 
        //with the href to the rendering page of the report
        String selector="";
        String href="";
      
        String selectors[]= itemPath.split("/");
      
        if (selectors.length > 0) {
            selector = String.format("%s.%s.%s.html", selectors[4], selectors[5], selectors[6]);
        }
       
        //renderer
       String rendererPage=properties.get("rendererRef",""); 
        //set French rendering page    
        if (rendererPage.equals("")){
            if (lang.equals("en")){
                rendererPage="/content/gnb/en/corporate/roadconditionslist/roadconditionreport";
                
            }
            else
                rendererPage="/content/gnb/fr/corporate/roadconditionslist_fr/roadconditionreport_fr";
        } 
        href=String.format("%s.%s",rendererPage,selector);
       
        if (lang.equals("en")) {
            creationTimeStr= "Report on "+creationTimeStr;
        }
        else
            creationTimeStr= "Rapport le "+creationTimeStr;

        Calendar lastModified=(Calendar)props.get("cq:lastModified");
        lastUpdated=lastModified.getTime();

        //get the lastUpdated time
       Calendar createdDateCal= (Calendar) props.get("jcr:created");
        Date createdDate= createdDateCal.getTime();
        if (lastUpdated != null && createdDate != null && lastUpdated.before(createdDate)) {
            lastUpdated = createdDate;
        }
        
        out.write("<item>\n");
        out.write(String.format("<title>%s</title>\n",creationTimeStr));
        out.write(String.format("<link>%s%s</link>\n", host,href));
        out.write(String.format("<description>%s</description>\n",description));
        if (lastUpdated != null) {
          out.write(String.format("<pubDate>%s</pubDate>\n",outDateFormat.format(lastUpdated)));
        }
        out.write("</item>\n");
      }//end of display to public
     }  //end while	  
    }//end if not empty
    if(lastUpdated!=null){
      out.write(String.format("<pubDate>%s</pubDate>\n",outDateFormat.format(lastUpdated)));
    }
    out.write("</channel>");
    out.write("</rss>");
} catch (Exception e) {
    log.error("error rendering feed for list", e);
}
%>