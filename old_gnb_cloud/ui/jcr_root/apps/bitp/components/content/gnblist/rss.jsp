<?xml version="1.0" encoding="utf-8"?>
<%@page session="false"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Iterator"%>
<%@page import="javax.jcr.Node"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="javax.jcr.Session"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Locale"%>
<%@page import= "javax.jcr.RepositoryException"%>
<%@page import= "javax.jcr.Property"%>
<%@page import= "javax.jcr.Value"%>
<%@page import= "java.util.HashMap"%>
<%@page import= "javax.jcr.RepositoryException"%>
<%@page import= "javax.jcr.Node"%>

<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import= "com.day.cq.wcm.api.PageManager"%>

<%@page import= "org.apache.sling.api.resource.ResourceResolver"%>
<%@page import= "org.apache.sling.api.resource.Resource"%>

<%@page import= "com.t4g.cnb.enums.CustomNodes"%>
<%@page import= "com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.utils.Utils"%>


<%@include file="/libs/foundation/global.jsp"%>

<%
final class ListItem {
    private String imageURL = null;
    private String title = null;
    private String description = null;
    private Date date = null;
    private String quicklink = null;
    private String moreLink = "";

    public ListItem(String path, Page currentPage, Resource resource) throws RepositoryException {
      if(currentPage==null) return;

      if(!Utils.isNotEmpty(path))
      {
        populate(currentPage);
      } else {
        try {
          populate(currentPage.getPageManager().getPage(path));
        } catch (Exception e) {}
      }
      try {
        Node currentNode =  resource.getResourceResolver().getResource(path).adaptTo(Node.class);
        populate(currentNode, currentPage, resource);
      } catch (Exception e) {

      }

    }

    private void populate(Page page) throws RepositoryException {
      title = page.getNavigationTitle();
      if (title == null || title.equals("")) title = page.getPageTitle();
      if (title == null || title.equals("")) title = page.getTitle();
      if (title == null || title.equals("")) title = page.getName();

      description = page.getDescription();
      date = page.getLastModified().getTime();
      quicklink = Utils.getQuicklink(page.getPath(),page,page.getContentResource());
      Node node = page.adaptTo(Node.class);
      if(node.getNode(Nodes.JCR_CONTENT.nodeType()).hasNode("thumb")) {
        imageURL = node.getPath() + "/jcr:content/thumb/file/jcr:content";
      }
    }

    private void populate(Node node, Page page, Resource resource) throws RepositoryException  {
      if(node==null || page==null) return;
      if(!node.getName().equalsIgnoreCase(Nodes.JCR_CONTENT.nodeType()) && node.hasNode(Nodes.JCR_CONTENT.nodeType())) {
        node=node.getNode(Nodes.JCR_CONTENT.nodeType());
      }
      String lang = "fr";
      String langSuffix = "FRE";
      String langSuffix2 = "FRE";
      Locale locale = page.getLanguage(true);
      if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
        lang = "en";
        langSuffix = "ENG";
        langSuffix2 = "";
      }
      quicklink = Utils.getQuicklink(node.getParent().getPath(),page,resource);

      PageManager pageManager = page.getPageManager();
      Page configPage =  Utils.getConfigurationPage(pageManager);
      String dataPage = "none";
      if(configPage==null) return;

      
      /**************************************************************************************************************************************
      NEWS RENDERER
       **************************************************************************************************************************************/
      String[] newsTypes = { "newsArticle", "publicAlert", "mediaAdvisory" };
      for (String newsType : newsTypes) {
        dataPage = Utils.getConfigurationProperty(String.format("%sDataPage", newsType), configPage);
        if (Utils.isNotEmpty(dataPage) && node.getPath().startsWith(dataPage.toString())) {

          if (node.hasProperty(String.format("%sTitle", lang)) && Utils.isNotEmpty(node.getProperty(String.format("%sTitle", lang)).getString()))
            title = node.getProperty(String.format("%sTitle", lang)).getString();
          if (node.hasProperty(String.format("%sDescription", lang)) && Utils.isNotEmpty(node.getProperty(String.format("%sDescription", lang)).getString()))
            description = node.getProperty(lang + "Description").getString();
          if (node.hasProperty("onTime") && node.getProperty("onTime").getDate()!=null)
            date = node.getProperty("onTime").getDate().getTime();
          if (node.hasProperty("mediaAssetRef") && Utils.isNotEmpty(node.getProperty("mediaAssetRef").getString()))
            imageURL = node.getProperty("mediaAssetRef").getString();
        }
      }

      /**************************************************************************************************************************************
      MULTIMEDIA RENDERER
      **************************************************************************************************************************************/
      dataPage = Utils.getConfigurationProperty("mmDataPage", configPage);
      if (Utils.isNotEmpty(dataPage) && node.getPath().startsWith(dataPage.toString())) {
        SimpleDateFormat inDateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.CANADA);
        String mm_langSuffix = "_E";
        if(lang.equalsIgnoreCase("fr")) mm_langSuffix = "_F";
        if (!node.getName().equalsIgnoreCase("metadata"))
          node =  node.getNode(CustomNodes.METADATA.nodeName());
        title = description = node.getParent().getParent().getPath().replace(dataPage + "/", "").replace("/", ".");


        imageURL = String.format("%s", node.getParent().getParent().getPath());
        if (node.hasProperty("dam:title" + mm_langSuffix)) {
          title = node.getProperty("dam:title" + mm_langSuffix).getString();
        }
        if (node.hasProperty("dam:newDate")) {
          try {
            date = inDateFormat.parse(node.getProperty("dam:newDate").getString());
          } catch (Exception ex) {
          }
        }
        if (node.hasProperty("dam:content" + mm_langSuffix)) {
          description = node.getProperty("dam:content" + mm_langSuffix).getString();
        }

      }
      /**************************************************************************************************************************************
      CONTACT RENDERER
       **************************************************************************************************************************************/
      dataPage = Utils.getConfigurationProperty("contactDataPage", configPage);
      if (Utils.isNotEmpty(dataPage) && node.getPath().startsWith(dataPage.toString())) {

        //get the contact data
        if (node.getParent().hasNode("contactinfo")) {
          Node contactDataNode = node.getParent().getNode("contactinfo");
          //build the link text
          StringBuilder nameBuilder = new StringBuilder();
          if (contactDataNode.hasProperty("LASTNAME") && Utils.isNotEmpty(contactDataNode.getProperty("LASTNAME").getString()))
            nameBuilder.append(contactDataNode.getProperty("LASTNAME").getString());
          nameBuilder.append(", ");
          if (contactDataNode.hasProperty("FIRSTNAME") && Utils.isNotEmpty(contactDataNode.getProperty("FIRSTNAME").getString()))
            nameBuilder.append(contactDataNode.getProperty("FIRSTNAME").getString());
          title = nameBuilder.toString();
          description = nameBuilder.toString();
        }
      }

      /**************************************************************************************************************************************
      ORGANISATION RENDERER
       **************************************************************************************************************************************/
      dataPage = Utils.getConfigurationProperty("organisationDataPage", configPage);
      if (Utils.isNotEmpty(dataPage) && node.getPath().startsWith(dataPage.toString())) {

        //get the org data
        if (node.getParent().hasNode("orginfo")) {
          Node orgDataNode = node.getParent().getNode("orginfo");

          //build the link text
          if (orgDataNode.hasProperty(String.format("ORGNAME%s", langSuffix)) && Utils.isNotEmpty(orgDataNode.getProperty(String.format("ORGNAME%s", langSuffix)).getString())) {
            title = orgDataNode.getProperty(String.format("ORGNAME%s", langSuffix)).getString();
          }
          if (orgDataNode.hasProperty(String.format("ORGTITLE%s", langSuffix)) && Utils.isNotEmpty(orgDataNode.getProperty(String.format("ORGTITLE%s", langSuffix)).getString())) {
            title += " (" + orgDataNode.getProperty(String.format("ORGTITLE%s", langSuffix)).getString() + ")";
          }
          description = title;
        }
      }

      /**************************************************************************************************************************************
      SERVICE RENDERER
       **************************************************************************************************************************************/
      dataPage = Utils.getConfigurationProperty("serviceDataPage", configPage);
      if (Utils.isNotEmpty(dataPage) && node.getPath().startsWith(dataPage.toString())) {

        //get the service data
        if (node.getParent().hasNode("serviceinfo")) {
          Node serviceDataNode = node.getParent().getNode("serviceinfo");

          //build the link text
          if (serviceDataNode.hasProperty(String.format("SERVICENAME%s", langSuffix2)) && Utils.isNotEmpty(serviceDataNode.getProperty(String.format("SERVICENAME%s", langSuffix2)).getString())) {
            title = serviceDataNode.getProperty(String.format("SERVICENAME%s", langSuffix2)).getString();
            description = title;
          }
        }
      }
    }

    public void setImageURL(String value) {
      imageURL = value;
    }

    public void setTitle(String value) {
      title = value;
    }

    public void setDescription(String value) {
      description = value;
    }

    public void setDate(Date value) {
      date = value;
    }

    public void setQuicklink(String value) {
      quicklink = value;
    }

    public void setMorelink(String value) {
      moreLink = value;
    }

    public String getImageURL() {
      return imageURL;
    }

    public String getTitle() {
      return title;
    }

    public String getDescription() {
      return description;
    }

    public String getDescription(int length) {
      if (length > 0 && description!=null) {
        int index = 0;
        for (int i = 0; i < length; i++) {
          index = description.indexOf(" ", index + 1);
          if (index == -1)
            break;
        }
        if (index != -1) {
          return description.substring(0, index) + " ...";
        }
        return description;
      }
      return null;
    }

    public Date getDate() {
      return date;
    }

    public String getQuicklink() {
      return quicklink;
    }

    public String getMorelink() {
      return moreLink;
    }

    public String getURL() {
      if (Utils.isNotEmpty(quicklink)) {
        String href = quicklink.substring(quicklink.indexOf("\"") + 1);
        href = href.substring(0, href.indexOf("\""));
        return href;
      }
      return null;
    }

  }
%>



<%
  List<ListItem> items = new ArrayList<ListItem>();


  for (int i = 1; i <= 21; i++) {
    String link = properties.get(String.format("link%s", i), "none");

    
    if (!link.equalsIgnoreCase("none")){
    //    out.write(link);
     //   out.write("<br>");
    }
    String linkText = properties.get(String.format("linktext%s", i), "");
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
/*
    for (Pair<String, String> listitem : list) {
    	
        if (listitem.getFirst().startsWith("/")) {
        	out.write("Test");
        }
    
    }
    */
    
    
    

    
    for (ListItem listItem : items) {
      if (lastUpdated != null && listItem.getDate() != null && lastUpdated.before(listItem.getDate())) {
        lastUpdated = listItem.getDate();
      }
      out.write(listItem.getQuicklink());
      
      
      out.write("<item>\n");
      out.write(String.format("<title>%s</title>\n", listItem.getTitle()));
  
      
      out.write(String.format("<link>%s%s</link>\n", listItem.getURL(),listItem.getURL()));
      //out.write(String.format("<link>%s%s</link>\n", host,listItem.getURL()));
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