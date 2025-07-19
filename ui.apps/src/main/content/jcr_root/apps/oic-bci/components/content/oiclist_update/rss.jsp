<?xml version="1.0" encoding="utf-8"?>
<%@page import="java.util.ArrayList"%>
<%@ page session="false"%>
<%@page import="com.t4g.cnb.utils.ListItem"%>
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
<%@page import="java.util.List"%>
<%@page import="java.util.Locale"%>
<%@include file="/libs/wcm/global.jsp"%>

<%
  List<ListItem> items = new ArrayList<ListItem>();

  //**IMPORTANT Part - creating array no matter what value is.
  String[] links_text = properties.get("links_text", String[].class) ;
  String[] links      = properties.get("links", String[].class) ;  
  
/*  
  for (int i = 1; i <= 21; i++) {
*/
  for (int i = 0; i <= links_text.length-1; i++) {
    String link = links[i];
    String linkText = links_text[i];
//    out.println(link+"<br/>");
/*  
    String link = properties.get(String.format("link%s", i), "none");
    String linkText = properties.get(String.format("linktext%s", i), "");
*/
    if (!link.equals("none")) {
      ListItem item = new ListItem(link, currentPage, resource);
      if (Utils.isNotEmpty(linkText)) {
        item.setTitle(linkText);
      }
      items.add(item);
    }
  }
  try {
    WCMMode.DISABLED.toRequest(request);
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      locale = new Locale("en");
    }
    final SimpleDateFormat outDateFormat = new SimpleDateFormat("E, dd MMMM yyyy HH:mm:ss 'AST'", locale);
    String host = "http://" + request.getServerName() + ":" + request.getServerPort();
    String url = currentPage.getPath();
    String link = host + url + ".html";
    String title = (String) properties.get("feedname", null) != null ? (String) properties.get("feedname", null) : currentNode.getName();
    String subTitle = (String) properties.get("feeddescription", null) != null ? (String) properties.get("feeddescription", null) : (String) properties.get("jcr:description", null);

    out.write("<rss version=\"2.0\">\n");
    out.write("<channel>\n");
    out.write(String.format("<title>%s</title>\n", title));
    out.write(String.format("<link>%s</link>\n", link));
    out.write(String.format("<description>%s</description>\n", subTitle));

    Date lastUpdated = currentPage.getLastModified().getTime();

    for (ListItem listItem : items) {
      if (lastUpdated != null && listItem.getDate() != null && lastUpdated.before(listItem.getDate())) {
        lastUpdated = listItem.getDate();
      }
      out.write("<item>\n");
      out.write(String.format("<title>%s</title>\n", listItem.getTitle()));
      out.write(String.format("<link>%s%s</link>\n", host,listItem.getURL()));
      out.write(String.format("<description>%s</description>\n", listItem.getDescription()));
      if (listItem.getDate() != null) {
        out.write(String.format("<pubDate>%s</pubDate>\n", outDateFormat.format(listItem.getDate())));
      }
      if (Utils.isNotEmpty(listItem.getImageURL())) {
        out.write(String.format("<enclosure url=\"%s%s\" length=\"0\" type=\"image/png\" />\n",host, listItem.getImageURL()));
      }
      out.write("</item>\n");
    }
    if (lastUpdated != null) {
      out.write(String.format("<pubDate>%s</pubDate>\n", outDateFormat.format(lastUpdated)));
    }
    out.write("</channel>");
    out.write("</rss>");
  } catch (Exception e) {
    log.error("error rendering feed for list", e);
  }
%>