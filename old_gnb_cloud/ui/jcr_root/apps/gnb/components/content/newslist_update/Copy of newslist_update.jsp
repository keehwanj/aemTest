<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@ page import="com.day.cq.wcm.api.components.DropTarget" %>
<%@ page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
//======
//finding the proper language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
//======
%>

<%
  String listStyle = properties.get("listStyle", "none");
  boolean showDate = properties.get("showDate", false);
  boolean showDescription = properties.get("showDescription", false);
  String moreLink = properties.get("moreLink", "none");
  String moreLinkText = properties.get("moreLinkText", moreLink);
  boolean padded = properties.get("padded", false);
  boolean shaded = properties.get("shaded", false);
  boolean border = properties.get("border", false);
  
  WCMMode mode = WCMMode.fromRequest(request);

  if (mode == WCMMode.EDIT) {
    //drop target css class = dd prefix + name of the drop target in the edit config
    String ddClassName = DropTarget.CSS_CLASS_PREFIX + "pages";
    %>
<div class="<%= ddClassName %>"><%
  }
  
  if (properties.get("feedEnabled", false)) {
      String title = (String)properties.get("feedname", null) != null ? (String)properties.get("feedname", null) : currentNode.getName();
     %><link rel="alternate" type="application/rss+xml" title="<%=title %>" href="<%=resource.getPath()%>.rss.html" /><%
  }
  
  /** BUG FIX: If the parent Page is not defined, the list returns empty 
  This is because, List.java defaults the empty parentPage to retrieve relativeParent(3) which
  might not always be right incase this component is deep down the hierarchy
  This fix, sets the parentPagePath to currentPage if the path is not defined
  through the dialog 
  */
  
try{ 
  String path = properties.get("parentPage","");
   if(path.equals("")){
       currentNode.setProperty("parentPage",currentPage.getPath());
       currentNode.save();
   }
}catch (Exception e) {}

  // initialize the list
  %><cq:include script="init.jsp" /><%
  List list = (List) request.getAttribute("list");
  if (!list.isEmpty()) {
    String containerClass = listStyle + " ";
    if (padded)
      containerClass += "padded ";
    if (shaded)
      containerClass += "shaded ";
    if (border)
      containerClass += "border ";
    
    
    out.write(String.format("<div class=\"%s\">", containerClass));
    out.write("<ul>");

    WCMMode includemode = WCMMode.DISABLED.toRequest(request);
    try {
      Iterator<Page> items = list.getPages();
      int index = 0;
      
///======    
      String renderer_page = properties.get("renderer_page", "");
  
      PageManager pageManager1 = currentPage.getPageManager();

      Page configPage = Utils.getConfigurationPage(pageManager1);

      String orgDataPath = Utils.getConfigurationProperty("organisationDataPage", configPage);
      out.write("<b>orgDataPath :</b>"+orgDataPath);
      out.write("<br/>");      
      
      String dataPage = Utils.getConfigurationProperty(String.format("%sDataPage", "newsArticle"), configPage);      
      out.write("<b>dataPage :</b>"+dataPage);
      out.write("<br/>");      
      String rendererPage = Utils.getConfigurationProperty(String.format("%sRendererPage_%s", "newsArticle", "en"), configPage);      
      out.write("<b>rendererPage :</b>"+rendererPage);
      out.write("<br/>");  
/*
      String path=currentNode.getParent().getPath();
      Page thisPage = pageManager.getPage(path);
      
      String[] selectors = thisPage.getPath().replace(dataPage + "/", "").split("/");
      String selector = String.format("%s.%s.%s.html", selectors[0], selectors[1], selectors[2]);
      out.write("<b>selector :</b>"+selector);
      out.write("<br/>");  
*/      
      
///======

      while (items.hasNext()) {
        Page item = items.next();
///======

        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
        ValueMap props = itemPage.getProperties();

        String[] selectors = itemPage.getPath().split("/");      
        String href="";
                
        if(selectors.length>0){
            String selector = String.format("%s.%s.%s.html", selectors[5], selectors[6], selectors[7]);
            //setting the default rederering pages 
            if(renderer_page.equalsIgnoreCase("")){
                if(lang.equalsIgnoreCase("en")){
                    renderer_page = "/content/gnb/en/news/renderer";
                }
                else{
                    renderer_page = "/content/gnb/fr/news/renderer";
                }

            }
            href = String.format("%s.%s", renderer_page, selector);
        }

      out.write("<b>href :</b>"+href);
      out.write("<br/>");  
        
///======
   
        out.write("<li>");

        out.write(item.getPath());
        out.write("<br/>");
          
        if (showDate) {
          %><sling:include path="<%= String.format("%s.date.html", item.getPath()) %>" /><%
        }
        %>
        <h3>test test test</h3>
        <h3><sling:include path="<%= String.format("%s.quicklink.html", item.getPath()) %>" /></h3>
        
        
        <%
        if (showDescription) {
          %><sling:include path="<%= String.format("%s.description.html", item.getPath()) %>" /><%
        }
      }
      if (list.isPaginating()) {
        %><cq:include script="pagination.jsp"/><%
    }
    } finally {
      out.write("</ul>");
      includemode.toRequest(request);
    }
    if (!moreLink.equalsIgnoreCase("none")) {
      out.write("<div class=\"morelink\">");
      
      if (moreLink.startsWith("/")) {
        String link = Utils.getQuicklink(moreLink, currentPage, resource);
        if(Utils.isNotEmpty(moreLinkText) && !moreLink.equalsIgnoreCase(moreLinkText)) {
          link = link.replaceFirst(">.*<",">" + moreLinkText.replaceAll("[$]","\\$") + "<");
        }
        out.write(link);

      } else {
        out.write(String.format("<a class=\"external\" href=\"%s\">%s</a>", moreLink, moreLinkText));
      }
      out.write("</div>");
    }
    out.write("</div>");

  } else {
    //special code to look to the previous sibling in the paragraph container
    //if it is a section title then we assume it is related to this list and hide it
    //Node currentNode;

    

if ((WCMMode.fromRequest(request) == WCMMode.DISABLED || (WCMMode.fromRequest(request) == WCMMode.PREVIEW))) {

    %>
    <script id="toFindDelete">
     $('#toFindDelete').parent().parent().prev().children('.sectiontitle').hide();

     if($('#toFindDelete').parent().prev().hasClass('sectiontitle')) {
       $('#toFindDelete').parent().prev().hide();
     }
    </script>
    <%
    }
    %><cq:include script="empty.jsp" /><%
  }

  if (mode == WCMMode.EDIT) {
    out.write("</div>");
  }
%>