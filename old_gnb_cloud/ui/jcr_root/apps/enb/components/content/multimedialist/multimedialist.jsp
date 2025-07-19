<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.NoSuchElementException"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="org.slf4j.Logger"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@include file="init.jsp"%>
<%!
protected String getRendition(Resource resource, String assetPath) throws RepositoryException{
  Resource rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.180.180.jpeg");
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.340.340.jpeg");                    
  }
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.600.400.jpeg");                    
  }   
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.thumbnail.319.319.png");                    
  }
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.1280.1280.jpg");                    
  }            
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath);                    
  }      
  if(rendition!=null) {
    return rendition.adaptTo(Node.class).getPath();
  }
  return assetPath;
}
%>

<%
if(properties.get("feedEnabled", false)) {
String title = (String)properties.get("feedname", null) != null ? (String)properties.get("feedname", null) : currentNode.getName();
%><link rel="alternate" type="application/rss+xml" title="<%=title %>" href="<%=resource.getPath()%>.rss.html" /><%
}

  Locale locale = currentPage.getLanguage(true);
  StringBuilder[] tabContent = new StringBuilder[5];
  for (int tab = 1; tab < 5; tab++) {
    StringBuilder sb = tabContent[tab] = new StringBuilder();
    if(tabs.containsKey(tab)) {
      String descriptionLimitKey = "descriptionlimit" + tab;
      String alternateDisplayKey = "alternatedisplay" + tab;
      int descriptionLimit = 0;
      boolean alternateDisplay = properties.get(alternateDisplayKey, false);
      final SimpleDateFormat outDateFormat = new SimpleDateFormat("dd MMMM yyyy", locale);
      if (properties.containsKey(descriptionLimitKey) && Utils.isNotEmpty(properties.get(descriptionLimitKey, ""))) {
        descriptionLimit = properties.get(descriptionLimitKey, 100);
      }
      List<ListItem> tabItems = tabs.get(tab);
      int rowcount = 0;
      int rowcount_xs = 0;
      int rowcount_sm = 0;
      int rowcount_md = 0;
      int rowcount_lg = 0;

      for(ListItem listItem : tabItems) {
        if (!alternateDisplay) {
         //Build the content
         if(rowcount==3) {
           sb.append("<div class=\"multimedia_item col-lg-3 col-md-4 col-sm-4 col-xs-6\" >");   
         } else {
           sb.append("<div class=\"multimedia_item col-lg-3 col-md-4 col-sm-4 col-xs-6\" >");             
         }
          if (Utils.isNotEmpty(listItem.getImageURL())) {
            String imageURL = listItem.getImageURL();
            if(listItem.getImageURL().startsWith("/")) {
              imageURL = getRendition(resource,listItem.getImageURL());
            }
            sb.append(String.format("<a href=\"%s\"><img src=\"%s\" class=\"thumbnail img-responsive\" alt=\"\"></a>",listItem.getURL(), imageURL));
          }
          if (listItem.getDate()!=null)  sb.append(String.format("<div class=\"post_date\">%s</div>",outDateFormat.format(listItem.getDate())));
          if (Utils.isNotEmpty(listItem.getQuicklink())) sb.append(String.format("<h5>%s</h5>", listItem.getQuicklink()));
          if (Utils.isNotEmpty(listItem.getDescription(descriptionLimit))) sb.append(String.format("<p>%s</p>", listItem.getDescription(descriptionLimit)));
          if (Utils.isNotEmpty(listItem.getMorelink())) sb.append(String.format("<p><span class=\"more_link\">%s</span></p>", listItem.getMorelink()));
          sb.append("</div>");
          rowcount++;
          rowcount_xs++;            
          rowcount_sm++;
          rowcount_md++;            
          rowcount_lg++;

          if (rowcount_xs == 2) {
            rowcount_xs = 0;
              sb.append("<div class=\"clearfloats clearfix visible-xs-block\"></div>");
          }

          if (rowcount_sm == 3) {
            rowcount_sm = 0;
              sb.append("<div class=\"clearfloats clearfix visible-sm-block visible-md-block\"></div>");
          }

          if (rowcount_lg == 4) {
            rowcount_lg = 0;
              sb.append("<div class=\"clearfloats clearfix visible-lg-block\"></div>");
          }
        } else {
          sb.append("<div class=\"wide_multimedia_item\" >"); 
          sb.append("<div class=\"row\" >");  //start of class row               
          String imageURL = listItem.getImageURL();
          if(listItem.getImageURL().startsWith("/")) {
            imageURL = getRendition(resource,listItem.getImageURL());
          }





            if (Utils.isNotEmpty(listItem.getImageURL())){
				//removed link and alt attribute value for accessibility     
            	sb.append("<div class=\"col-sm-4\" >");  //start of class=col-sm-4        
				sb.append(String.format("<a href=\"%s\"><img src=\"%s\"  class=\"thumbnail img-responsive\" alt=\"\"></a>",listItem.getURL(), imageURL));                
          		sb.append("</div>");  //end of class=col-sm-4                     
            }
          sb.append("<div class=\"col-sm-8\" >");  //start of class=col-sm-8     
          sb.append("<div class=\"wide_multimedia_content\">");
          if (listItem.getDate()!=null)  sb.append(String.format("<div class=\"post_date\">%s</div>",outDateFormat.format(listItem.getDate())));
          if (Utils.isNotEmpty(listItem.getQuicklink())) sb.append(String.format("<h5>%s</h5>", listItem.getQuicklink()));
          if (Utils.isNotEmpty(listItem.getDescription(descriptionLimit))) sb.append(String.format("<p class=\"visible-lg visible-md\">%s</p>", listItem.getDescription(descriptionLimit)));
          if (Utils.isNotEmpty(listItem.getMorelink())) sb.append(String.format("<p><span class=\"more_link\">%s</span></p>", listItem.getMorelink()));
          sb.append("</div>");            
          sb.append("</div>");//end of class=col-sm-8
          sb.append("</div>");
          sb.append("</div>");//end of class=row   
        }
      } //For loop
    }// if tabs.get(tab)!=null
  } //tab loop
 // Node currentNode;
  
  if(tabContent[1].length()>0 || tabContent[2].length()>0 || tabContent[3].length()>0  || tabContent[4].length()>0) {
    String moreLink=null;
    if (properties.containsKey("morelink") && Utils.isNotEmpty(properties.get("morelink", ""))) {
      moreLink = String.format("<a href=\"%s\">%s</a>",properties.get("morelink", ""),properties.get("morelink", ""));
      if(properties.get("morelink", "").startsWith("/")) {
        moreLink = Utils.getQuicklink(properties.get("morelink", ""), currentPage, resource);
      }
      if (properties.containsKey("moretext") && Utils.isNotEmpty(properties.get("moretext", ""))) {
        moreLink = moreLink.replaceFirst(">.*<", ">" + properties.get("moretext", "").replaceAll("[$]","\\$") + "<");
      }
    }
    
    if(properties.get("showtabs", false)){
	    out.write(String.format("<div id=\"%s\" class=\"tabbedmultimedialist\"><ul>",currentNode.getName()));
	    if(tabContent[1].length()>0) out.write(String.format("<li><a href=\"#tab1_%s\">%s</a></li>",currentNode.getName(),properties.get("tabname1", "1")));
	    if(tabContent[2].length()>0) out.write(String.format("<li><a href=\"#tab2_%s\">%s</a></li>",currentNode.getName(),properties.get("tabname2", "2")));
	    if(tabContent[3].length()>0) out.write(String.format("<li><a href=\"#tab3_%s\">%s</a></li>",currentNode.getName(),properties.get("tabname3", "3")));
	    if(tabContent[4].length()>0) out.write(String.format("<li><a href=\"#tab4_%s\">%s</a></li>",currentNode.getName(),properties.get("tabname4", "4")));
	    if(Utils.isNotEmpty(moreLink)) out.write(String.format("<span class=\"outsider more_link\">%s</span>",moreLink));
	   out.write("</ul>");
	   if(tabContent[1].length()>0) out.write(String.format("<div id=\"tab1_%s\">%s</div>",currentNode.getName(),tabContent[1].toString()));
	   if(tabContent[2].length()>0) out.write(String.format("<div id=\"tab2_%s\">%s</div>",currentNode.getName(),tabContent[2].toString()));
	   if(tabContent[3].length()>0) out.write(String.format("<div id=\"tab3_%s\">%s</div>",currentNode.getName(),tabContent[3].toString()));
	   if(tabContent[4].length()>0) out.write(String.format("<div id=\"tab4_%s\">%s</div>",currentNode.getName(),tabContent[4].toString()));
	    out.write("<div class=\"clearfloats\"></div></div>");
	    %>

        <script type="text/javascript">
	     $(function() {
	       $('#<%=currentNode.getName()%>').tabs({ fxFade: true, fxSpeed: 'fast' });
	     });
	    </script>
	    <%
    } else {
      if(tabContent[1].length()>0) out.write(String.format("<div id=\"tab1_%s\">%s</div>",currentNode.getName(),tabContent[1].toString()));
      if(tabContent[2].length()>0) out.write(String.format("<div id=\"tab2_%s\">%s</div>",currentNode.getName(),tabContent[2].toString()));
      if(tabContent[3].length()>0) out.write(String.format("<div id=\"tab3_%s\">%s</div>",currentNode.getName(),tabContent[3].toString()));
      if(tabContent[4].length()>0) out.write(String.format("<div id=\"tab4_%s\">%s</div>",currentNode.getName(),tabContent[4].toString()));
      out.write("<div class=\"clearfloats\"></div>");
      if(Utils.isNotEmpty(moreLink)) {
        out.write(String.format("<p ><span class=\"more_link\" style=\"float:right;\">%s</span></p>", moreLink));
        out.write("<div class=\"clearfloats\"></div>");
      }
    }

  } else {
    %><cq:include script="empty.jsp"/><%
  }



%>
