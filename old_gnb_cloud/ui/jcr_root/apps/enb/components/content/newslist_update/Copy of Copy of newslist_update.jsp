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


      String departmentsPage = Utils.getConfigurationProperty("departmentsPage_" + lang, configPage) + "/";
      out.write("<b>departmentsPage  :</b>"+departmentsPage );
      out.write("<br/>");  

      // get the department that this item is tagged with
      String targetDept = "";
      String deptPath ="";
      String deptBase = Utils.getConfigurationProperty("departmentsPage_" + lang, configPage) + "/";
      out.write("<b>deptBase  :</b>"+deptBase );
      out.write("<br/>");  

      if (currentPage.getPath().startsWith(deptBase)) {
        deptPath = targetDept = currentPage.getPath().replace(deptBase, "");//????
        if (deptPath.contains("/")) {
          targetDept = deptPath.substring(0, deptPath.indexOf("/"));
        }
      }
      out.write("<b>targetDept  :</b>"+targetDept );
      out.write("<br/>");  

      out.write("<b>deptPath  :</b>"+deptPath );
      out.write("<br/>");  
      String orgPath="";
      String dept="";

      if (currentNode.hasProperty(String.format("%sDepartment", lang))) {
        Property prop = currentNode.getProperty(String.format("%sDepartment", lang));
        for (Value value : prop.getValues()) {
            try {
                TagManager tm = resourceResolver.adaptTo(TagManager.class);
                Tag tag = tm.resolve(value.getString());
                orgPath = Utils.getDepartmentPath(tag.getDescription(), resource);
                out.write("<b>orgPath  :</b>"+orgPath );
                out.write("<br/>");  

                if (!Utils.isNotEmpty(orgPath))
                  continue;
                orgPath = orgPath.replace(orgDataPath, "");
                if (orgPath.contains("/")) {
                  orgPath = orgPath.substring(0, orgPath.indexOf("/"));
                }

                dept = Utils.getConfigurationProperty(String.format("org_%s_%s", orgPath, lang), configPage);
                out.write("<b>dept  :</b>"+dept );
                out.write("<br/>");                  
                if (!Utils.isNotEmpty(dept))
                  continue;
                if (!Utils.isNotEmpty(targetDept))
                  break;
                if (targetDept.equalsIgnoreCase(dept))
                  break;
              } 
              catch (Exception e) {
              }
            }
      }

      out.write("<b>orgPath  :</b>"+orgPath );
      out.write("<br/>");  

      out.write("<b>dept  :</b>"+dept );
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


      String href="";
      while (items.hasNext()) {
        Page item = items.next();


///======
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
        ValueMap props = itemPage.getProperties();

        String[] selectors = itemPage.getPath().split("/");      


        String selector="";
                
        if(selectors.length>0){
            //String selector = String.format("%s.%s.%s.html", selectors[5], selectors[6], selectors[7]);
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

        
///======


   
        out.write("<li>");
          
        if (showDate) {
          %><sling:include path="<%= String.format("%s.date.html", item.getPath()) %>" /><%
        }
///======

        String[] departments  = (String[]) props.get(lang + "Departments");

        try {
            //if (!properties.get("renderer", "newsArticle").contains("media")) {
            //out.write("<p><b>"+departmentText+"</b></p>");
            Object[] tags = (Object[]) props.get(lang + "Department");
            out.write("tags length :"+tags.length);
            out.write("<br />");
            TagManager tm = resourceResolver.adaptTo(TagManager.class);
            //if (tags != null) {
                for (int i = 0; i < tags.length; i++) {
                    Tag tag = tm.resolve((String) tags[i]);
                    out.write("tat description"+i+" : "+tag.getDescription());
                    out.write("<br />");
                    String orgPath1 = Utils.getDepartmentPath(tag.getDescription(), resource);
                    out.write("orgPath"+i+" : "+orgPath1);
                    out.write("<br />");
                    out.write("tag getTitle+"+i+" : "+tag.getTitle());                    
                    out.write("<br />");
                    }//end of for loop
               // }//end of innter "if (tags != null)"
                out.write("<br />");
                //}
        }//end of try
        catch (Exception ex) {
            log.error("Tag error", ex);
        }//end of catch

  
        String title  = (String) props.get(lang + "Title");
        out.write("<b>title :</b>"+title);
        out.write("<br/>");  
              
        String description  = (String) props.get(lang + "Description");        
        out.write("<b>description :</b>"+description);
        out.write("<br/>");  

        String articlebody  = (String) props.get(lang + "ArticleBody");        
        out.write("<b>description :</b>"+description);
        out.write("<br/>");  

        String newTitle=String.format("<a href='%s'>%s</a>",href,title);      
        String navItem = String.format("<a href='%s' title='%s'>%s</a>",href,description,title);
        out.write("<br/>");  
        out.write("<b>href :</b>"+href);
        out.write("<br/>");          

///======
        %>

        <h3><%out.write(navItem);%></h3>
        
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