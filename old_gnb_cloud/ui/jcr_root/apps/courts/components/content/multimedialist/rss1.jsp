<?xml version="1.0" encoding="utf-8"?>
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
<%@page import="java.util.List"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@include file="init.jsp"%>
<%
  List<ListItem> items = new ArrayList<ListItem>();
    for (int tab = 1; tab < 5; tab++) {
      if(tabs.containsKey(tab)) {
        List<ListItem> tabItems = tabs.get(tab);
        for(ListItem item :tabItems) {
         items.add(item);
        }
      }
    }

  try {
    WCMMode.DISABLED.toRequest(request);
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      locale = new Locale("en");
    }
    final SimpleDateFormat outDateFormat = new SimpleDateFormat("E, dd MMMM yyyy HH:mm:ss 'AST'", locale);
    //final SimpleDateFormat outDateFormat = new SimpleDateFormat("yyyyMMddHH:mm:ss", locale);    

    //String host1 = "https://" + request.getServerName() + ":" + request.getServerPort();
    String host1 = "https://" + request.getServerName() + ":" + request.getServerPort();
    String host = "https://www2.gnb.ca";

    String url = currentPage.getPath();
    String link = host + url + ".html";
    String link1 = host1 + url + ".html";


    String title = (String) properties.get("feedname", null) != null ? (String) properties.get("feedname", null) : currentNode.getName();
    String subTitle = (String) properties.get("feeddescription", null) != null ? (String) properties.get("feeddescription", null) : (String) properties.get("jcr:description", null);

    out.write("<rss version=\"2.0\">\n");
    out.write("<channel>\n");
    out.write(String.format("<title>%s</title>\n", title));
    out.write(String.format("<link>%s</link>\n", link1));
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