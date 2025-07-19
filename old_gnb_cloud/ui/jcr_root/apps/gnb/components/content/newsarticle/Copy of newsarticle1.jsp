<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Collections"%>

<%!

protected String getRendition(Resource resource, String assetPath) throws RepositoryException{
  Resource rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.340.340.jpeg");
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
  return null;
}

%>
<%
try {
    String lang = "fr";
    String langSuffix = "_F";
    Locale locale = currentPage.getLanguage(true);
    String mmRendererPage = properties.get("rendererPage", "");    
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      langSuffix = "_E";
      lang = "en";
    }
%>
<cq:setContentBundle language="<%=lang%>" />
<%
  Page newsItemPage = null;
  String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
  String liveWebcastOriginalURL = "";
  String liveWebcastInterpretedURL = "";
  Page configurationPage = Utils.getConfigurationPage(currentPage.getPageManager());
  try {   
    String renderer = properties.get("renderer", "newsArticle");
    String itemPath = String.format("%s/%s/%s/%s", configurationPage.getProperties().get(renderer + "DataPage"), selectors[0], selectors[1], selectors[2]);
    newsItemPage = pageManager.getPage(itemPath);
    liveWebcastOriginalURL = configurationPage.getProperties().get("liveWebcastOriginal", String.class);
    liveWebcastInterpretedURL = configurationPage.getProperties().get("liveWebcastInterpreted_" + lang, String.class);
  } catch (Exception e) {
    log.error("news article page unable to get data node", e);
  }
  if (newsItemPage != null) {
    // Pull content from the specified news item page to display.
    ValueMap props = newsItemPage.getProperties();
    GregorianCalendar onTime = (GregorianCalendar) props.get("onTime");
    GregorianCalendar fromDate = (GregorianCalendar) props.get("fromDate");
    GregorianCalendar toDate = (GregorianCalendar) props.get("toDate");
    SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
    SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yy", locale);
    SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMMM yyyy, h:mm a", locale);
    if(lang.equalsIgnoreCase("fr")) {
      formatWithTime = new SimpleDateFormat("dd MMMM yyyy, HH'h'mm", locale);
    }

    //Output the department name
    try {

      if (!properties.get("renderer", "newsArticle").contains("media")) {
        Object[] tags = (Object[]) props.get(lang + "Department");
        TagManager tm = resourceResolver.adaptTo(TagManager.class);
        if (tags != null) {
          for (int i = 0; i < tags.length; i++) {
            String tagValue=(String) tags[i];
            //Tag tag = tm.resolve((String) tags[i]);
            Tag tag = tm.resolve(tagValue);
              if(tag!=null){
            	out.write("<span class=\"post_date\">" + tag.getTitle() + "</span>");
              }  

              else{
            	tagValue="in"+tagValue;
            	//Tag tag = tm.resolve((String) tags[i]);
            	tag = tm.resolve(tagValue);
     			out.write("<span class=\"post_date\">" + tag.getTitle() + "</span>");
              }

            if (i + 1 < tags.length)
              out.write("<br />");
          }
        }
      }        

    } catch (Exception ex) {
      log.error("news article data not tagged with a department", ex);
    }

    //Generate the title
    if (properties.get("renderer", "newsArticle").contains("media")) {
      if (props.get("status") != null && Utils.isNotEmpty(props.get("status").toString())) {
        out.write(String.format("<h2>%s - %s</h2>", props.get(lang + "Title", "&nbsp;"), LocaleSupport.getLocalizedMessage(pageContext, props.get("status") + "Text")));
      } else {
        out.write(String.format("<h2>%s</h2>", props.get(lang + "Title", "&nbsp;")));
      }
    } else {
      out.write(String.format("<h2>%s</h2>", props.get(lang + "Title", "&nbsp;")));
      out.write(String.format("<span class=\"post_date\">%s</span>", format.format(onTime.getTime())));
    }

    //Generate the sidebar items
    out.write("<div id=\"sidebar\" >");
    String sidebarTitle = "<div class=\"sectiontitle\"><div class=\"normal\"><div class=\"rightcurve\">&nbsp;</div><div class=\"leftcurve\"><h3 class=\"title\">%s</h3></div></div></div>";
    
    //Generate the images
    if (Utils.isNotEmpty(props.get("mediaAssetRef", ""))) {
      //String multimediaLink = Utils.getQuicklink(props.get("mediaAssetRef", ""), currentPage, resource);  

      /**start of new code**/  
      String mediaAssetRef=  props.get("mediaAssetRef", "");
      String[] mediaAssetRefArray=mediaAssetRef.split("/");
	  String mediaAssetRefArray1=mediaAssetRefArray[mediaAssetRefArray.length-3];
      String mediaAssetRefArray2=mediaAssetRefArray[mediaAssetRefArray.length-2];
	  String mediaAssetRefArray3=mediaAssetRefArray[mediaAssetRefArray.length-1];  

      if(!Utils.isNotEmpty(mmRendererPage)){
      	if(lang.equals("en")){
			mmRendererPage="/content/gnb/en/multimedia/mmrenderer."+mediaAssetRefArray1+"."+mediaAssetRefArray2+"."+mediaAssetRefArray3+".html";
        }
        else{
			mmRendererPage="/content/gnb/fr/multimedia/mmrenderer."+mediaAssetRefArray1+"."+mediaAssetRefArray2+"."+mediaAssetRefArray3+".html";
        }
      }
      else{
		mmRendererPage=mmRendererPage+"."+mediaAssetRefArray1+"."+mediaAssetRefArray2+"."+mediaAssetRefArray3+".html";
      }        
	  String multimediaLink=String.format("<a href=\"%s\" title=\"%s\">%s</a>",mmRendererPage,props.get(lang + "Title", "&nbsp;"),props.get(lang + "Title", "&nbsp;"));
      /**end of new code**/  

      String imageTag = String.format("<img id=\"switcherTarget\" src=\"%1s\"/>", getRendition(resource,props.get("mediaAssetRef", "")));
      String imageLink = multimediaLink.replaceFirst(">.*<", ">" + imageTag.replaceAll("[$]","\\$") + "<");
      out.write(imageLink);
      out.write("<br />");
      try {
        Node assetNode = resource.getResourceResolver().getResource(props.get("mediaAssetRef", "")).adaptTo(Node.class);
        Node metadataNode = assetNode.getNode(Nodes.JCR_CONTENT.nodeType()).getNode(CustomNodes.METADATA.nodeName());

        out.write("<div class=\"toolbar\">");
        String more = LocaleSupport.getLocalizedMessage(pageContext, "moreText");
        out.write("<div style=\"float:right;\">");
        out.write( multimediaLink.replaceFirst(">.*<", ">" + more.replaceAll("[$]","\\$") + "&nbsp;&gt;<"));
        out.write("</div>");
        
        if (metadataNode != null && ((metadataNode.hasProperty("dam:photo_2_download")
            && Utils.isNotEmpty(metadataNode.getProperty("dam:photo_2_download").getString()))
            || (metadataNode.hasProperty("dam:photo_3_download") 
            && Utils.isNotEmpty(metadataNode.getProperty("dam:photo_3_download").getString())))) {
          String title = props.get("mediaAssetRef", "");
          title = title.substring(title.lastIndexOf("/")+1);
          if(metadataNode.hasProperty("dam:title" + langSuffix) && Utils.isNotEmpty(metadataNode.getProperty("dam:title" + langSuffix).getString())) {
            title = metadataNode.getProperty("dam:title" + langSuffix).getString();
          }
          out.write(String.format("<a href=\"%s\" title=\"%s\" class=\"imageSwitcher\">%s</a>&nbsp;", getRendition(resource,props.get("mediaAssetRef", "")), title, "Photo 1"));
        }
        if (metadataNode != null && metadataNode.hasProperty("dam:photo_2_download") 
          && Utils.isNotEmpty(metadataNode.getProperty("dam:photo_2_download").getString())) {
          Node photoAssetNode = resource.getResourceResolver().getResource(metadataNode.getProperty("dam:photo_2_download").getString()).adaptTo(Node.class);
          Node photoMetadataNode = photoAssetNode.getNode(Nodes.JCR_CONTENT.nodeType()).getNode(CustomNodes.METADATA.nodeName());
          String title = metadataNode.getProperty("dam:photo_2_download").getString();
          title = title.substring(title.lastIndexOf("/")+1);
          if(photoMetadataNode.hasProperty("dam:title" + langSuffix) && Utils.isNotEmpty(photoMetadataNode.getProperty("dam:title" + langSuffix).getString())) {
            title = photoMetadataNode.getProperty("dam:title" + langSuffix).getString();
          }
          out.write(String.format("&nbsp|&nbsp;<a href=\"%s\" title=\"%s\" class=\"imageSwitcher\">%s</a>&nbsp;", getRendition(resource,metadataNode.getProperty("dam:photo_2_download").getString()), title, "Photo 2"));
        }
        if (metadataNode != null && metadataNode.hasProperty("dam:photo_3_download")
          && Utils.isNotEmpty(metadataNode.getProperty("dam:photo_3_download").getString())) {
          Node photoAssetNode = resource.getResourceResolver().getResource(metadataNode.getProperty("dam:photo_3_download").getString()).adaptTo(Node.class);
          Node photoMetadataNode = photoAssetNode.getNode(Nodes.JCR_CONTENT.nodeType()).getNode(CustomNodes.METADATA.nodeName());
          String title = metadataNode.getProperty("dam:photo_3_download").getString();
          title = title.substring(title.lastIndexOf("/")+1);
          if(photoMetadataNode.hasProperty("dam:title" + langSuffix) && Utils.isNotEmpty(photoMetadataNode.getProperty("dam:title" + langSuffix).getString())) {
            title = photoMetadataNode.getProperty("dam:title" + langSuffix).getString();
          }
          out.write(String.format("&nbsp|&nbsp;<a href=\"%s\" title=\"%s\" class=\"imageSwitcher\">%s</a>&nbsp;", getRendition(resource,metadataNode.getProperty("dam:photo_3_download").getString()), title, "Photo 3"));
        }

        
        out.write("</div><br />");
      } catch (Exception e) {
        log.error("Exception occurred rendering multimedia for newsarticle", e);
      }
      %> 
      <script language="javaScript">
        $(document).ready(function() {
          $(".imageSwitcher").click(function() {
            $("#switcherTarget").attr("src",$(this).attr("href"));
            $("#switcherTarget").parent().attr("title",$(this).attr("title"));
            return false;
          });
        });
      </script>
      <%
    }

    
    
    //Generate the Media Contact
    if (Utils.isNotEmpty(props.get(lang + "Media", ""))) {
      out.write(String.format(sidebarTitle, LocaleSupport.getLocalizedMessage(pageContext, "mediaContactTitle")));
      out.write("<div class=\"box shaded padded\">");
      out.write(props.get(lang + "Media", "&nbsp;"));
      out.write("</div>");
    }

    //Generate the webcast links
    if (props.get("showWebcast", false) && (Utils.isNotEmpty(liveWebcastOriginalURL) || Utils.isNotEmpty(liveWebcastInterpretedURL))) {
      out.write(String.format(sidebarTitle, LocaleSupport.getLocalizedMessage(pageContext, "webcastHeading")));
      out.write("<div class=\"box shaded\">");
      if (Utils.isNotEmpty(liveWebcastOriginalURL)) {
        out.write(String.format("<div class=\"webcast\"><img class=\"icon\" src=\"/etc/designs/gnb/images/video.png\"><a href=\"%s\">%s</a></div>", liveWebcastOriginalURL, LocaleSupport.getLocalizedMessage(pageContext, "liveWebcastOriginalText")));
      }
      if (Utils.isNotEmpty(liveWebcastInterpretedURL)) {
        out.write(String.format("<div class=\"webcast\"><img class=\"icon\" src=\"/etc/designs/gnb/images/video.png\"><a href=\"%s\">%s</a></div>", liveWebcastInterpretedURL, LocaleSupport.getLocalizedMessage(pageContext, "liveWebcastInterpretedText")));
      }
      out.write("</ul></div>");
    }
    
    
    out.write("</div><!--sidebar-->");
    
    out.write("<div class=\"articleBody\">");
    if (properties.get("renderer", "newsArticle").contains("media")) {
      out.write("<p><b>");
      if(Utils.isNotEmpty(props.get("type",""))) {
        out.write(LocaleSupport.getLocalizedMessage(pageContext, props.get("type") + "Text") + " : ");
      }
      if (props.get(lang + "Location") != null) {
          out.write(props.get(lang + "Location").toString());
      }
      if((props.get(lang + "Location") != null) && ((fromDate != null && props.get("showFromDate", false)) || (toDate != null && props.get("showToDate", false)))) {
        out.write(" : ");
      }
      if (fromDate != null && props.get("showFromDate", false)) {
      //&& fromDate.get(Calendar.AM_PM) ==0 added to check AM/PM by Keehwan Jee 
        if (fromDate.get(Calendar.HOUR) == 0 && fromDate.get(Calendar.MINUTE) == 0 && fromDate.get(Calendar.AM_PM) ==0) {

         out.write(format.format(fromDate.getTime()));
//         out.write("HOUR_AM: " + fromDate.get(Calendar.HOUR));
//         out.write("AM_PM(AM): " + fromDate.get(Calendar.AM_PM));

        } else {
          out.write(formatWithTime.format(fromDate.getTime()));
//         out.write("HOUR_PM: " + fromDate.get(Calendar.HOUR));          
//         out.write("AM_PM(PM): " + fromDate.get(Calendar.AM_PM));          
        
        }
      }
      if (fromDate != null && toDate != null && props.get("showFromDate", false) && props.get("showToDate", false)) {
          out.write(" - ");
      }
      if (toDate != null && props.get("showToDate", false)) {
      //&& toDate.get(Calendar.AM_PM) ==0 added to check AM/PM by Keehwan Jee       
        if (toDate.get(Calendar.HOUR) == 0 && toDate.get(Calendar.MINUTE) == 0 && toDate.get(Calendar.AM_PM) ==0) {
          out.write(format.format(toDate.getTime()));
//         out.write("HOUR_AM: " + toDate.get(Calendar.HOUR));
//         out.write("AM_PM(AM): " + toDate.get(Calendar.AM_PM));          
        } else {
          out.write(formatWithTime.format(toDate.getTime()));
//         out.write("HOUR_PM: " + toDate.get(Calendar.HOUR));          
//         out.write("AM_PM(PM): " + toDate.get(Calendar.AM_PM));           
        }
      }
      out.write("</b></p>");
    }

    out.write(props.get(lang + "ArticleBody", "&nbsp;"));
    if (!properties.get("renderer", "newsArticle").contains("media")) {
      out.write("<span class=\"post_date\">");
      out.write(smallformat.format(onTime.getTime()));
      out.write("</span>");   
    }
    out.write("</div>");   
  } else {
    %><cq:include script="empty.jsp" /><%
  }
} catch (Exception e) {

  log.error("Something bad happened on the newsarticle", e);
  %><cq:include script="empty.jsp" /><%
}
%>