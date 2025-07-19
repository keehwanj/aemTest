<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@ page import="com.day.cq.wcm.api.components.DropTarget" %>
<%@ page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/wcm/global.jsp"%>

<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%

//======Start
//finding the proper language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
//======End
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
      
///======Start    

      String renderer_page = properties.get("renderer_page", "");
      
///======End


      String href="";
      while (items.hasNext()) {
        Page item = items.next();


///======Start
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
        ValueMap props = itemPage.getProperties();

        String[] selectors = itemPage.getPath().split("/");      

        String selector="";
                
        if(selectors.length>0){
            selector = String.format("%s.%s.%s.html", selectors[5], selectors[6], selectors[7]);
            //setting the default rederering pages 
            if(renderer_page.equalsIgnoreCase("")){
                if(lang.equalsIgnoreCase("en")){
                    renderer_page = "/content/gnb/en/news/news_release";
                }
                else{
                    renderer_page = "/content/gnb/fr/nouvelles/communique";
                }
            }
            href = String.format("%s.%s", renderer_page, selector);
        }
        
///======End
   
        out.write("<li>");
          
        if (showDate) {
          %><sling:include path="<%= String.format("%s.date.html", item.getPath()) %>" /><%
        }
///======Start
  
        String title  = (String) props.get(lang + "Title");
        String description  = (String) props.get(lang + "Description");        
        String newTitle=String.format("<a href=\"%s\">%s</a>",href,title);      
          //String navItem = String.format("<a href=\"%s\" title=\"%s\">%s</a>",href,description,title);
        String navItem = String.format("<a href=\"https://www2.gnb.ca%s\" title=\"%s\">%s</a>",href,description,title);

///======End
        %>

        <div class="h3"><%out.write(navItem);%></div>
        
        <%
        if (showDescription) {
          %>
			<span class="visible-lg visible-md visible-sm visible-xs">
    			<sling:include path="<%= String.format("%s.description.html", item.getPath()) %>" />
			</span>
    	  <%
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