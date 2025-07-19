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
      }//end of try
      
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
    else{ 
        locale=new Locale("fr");
    }
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
    if (!list.isEmpty()) {
      Iterator<Page> items = list.getPages();
      while (items.hasNext()) {
        Page item = items.next();

        //getting the last updated date using ListItem from T4G package
        ListItem listItem = new ListItem(item.getPath(), currentPage, resource);
       if (lastUpdated != null && listItem.getDate() != null && lastUpdated.before(listItem.getDate())) {
         lastUpdated = listItem.getDate();
        }
        
        //converting Page to pageManager and property
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
        ValueMap props = itemPage.getProperties();
        
        SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
        
        //for title, description
        String sub_description = (String) props.get(lang + "_job_title");
        String  sub_title = (String) props.get(lang + "_job_rank");

        
        String selector="";
        String href="";
      
        String selectors[]= itemPath.split("/");
        
        //get the location from the english or french tab 
        //with the href to the rendering page of the report
        
        if (selectors.length > 0) {
            selector = String.format("%s.%s.%s.html", selectors[5], selectors[6], selectors[7]);
        }
       
        //getting the renderer from dialog
       String rendererPage=properties.get("rendererRef",""); 
        
        //set French rendering page    
        if (rendererPage.equals("")){
            if (lang.equals("en")){
                rendererPage="/content/gnb/en/corporate/abc/current_opportunities/abc_renderer";
            }
            else
                rendererPage="/content/gnb/fr/corporate/abc/perspectives_actuelles/abc_renderer";
        } 
        //for link
        href=String.format("%s.%s",rendererPage,selector);
       
 
        //from here, writing RSS feed
        out.write("<item>\n");
        out.write(String.format("<title>%s</title>\n",sub_title));
        out.write(String.format("<link>%s%s</link>\n", host,href));
        out.write(String.format("<description>%s</description>\n",sub_description));
        if (listItem.getDate() != null) {
          out.write(String.format("<pubDate>%s</pubDate>\n",outDateFormat.format(listItem.getDate())));
        }
        out.write("</item>\n");
      }
    }
    if(lastUpdated!=null){
      out.write(String.format("<pubDate>%s</pubDate>\n",outDateFormat.format(lastUpdated)));
    }
    out.write("</channel>");
    out.write("</rss>");
} catch (Exception e) {
    log.error("error rendering feed for list", e);
}
%>