<?xml version="1.0" encoding="utf-8"?>
<%@ page session="false"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="javax.jcr.Node"%>
<%@page import="javax.jcr.Session"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.t4g.cnb.utils.ListItem"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/foundation/global.jsp"%>
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
    <cq:include script="init.jsp" />
    
    <%
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

    
    if (!list.isEmpty()) {
     
      Iterator<Page> items = list.getPages();
      String value_title="";
      String value_description="";
      while (items.hasNext()) {
        Page item = items.next();

        //converting Pag to pageManager and property
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);


        ValueMap props = itemPage.getProperties();
        value_title=(String)props.get(lang+"Title");
        value_description=(String)props.get(lang+"Description");

        //with the href to the rendering page of the report
      
        String selector="";
        String href="";
      
        String selectors[]= itemPath.split("/");
      
        if (selectors.length > 0) {
            selector = String.format("%s.%s.%s.html", selectors[5], selectors[6], selectors[7]);
            out.write(selector);
        }
       
        //renderer
       String rendererPage=properties.get("renderer_page",""); 
        //set French rendering page    
        if (rendererPage.equals("")){
            if (lang.equals("en")){
                rendererPage="/content/gnb/en/news/statement_test/renderer";
                
            }
            else
                rendererPage="/content/gnb/fr/nouvelles/statement_test/renderer";
        } 
        href=String.format("%s.%s",rendererPage,selector);
  
        Calendar lastModified=(Calendar)props.get("onTime");
        lastUpdated=lastModified.getTime();
        
        out.write("<item>\n");
        out.write(String.format("<title>%s</title>\n",value_title));
        out.write(String.format("<link>%s%s</link>\n", host,href));
        out.write(String.format("<description>%s</description>\n",value_description));
        if (lastUpdated != null) {
          out.write(String.format("<pubDate>%s</pubDate>\n",outDateFormat.format(lastUpdated)));
        }
        out.write("</item>\n");
      }//end of display to public
     }  //end while   

    if(lastUpdated!=null){
      out.write(String.format("<pubDate>%s</pubDate>\n",outDateFormat.format(lastUpdated)));
    }
    out.write("</channel>");
    out.write("</rss>");
} catch (Exception e) {
    log.error("error rendering feed for list", e);
}
%>