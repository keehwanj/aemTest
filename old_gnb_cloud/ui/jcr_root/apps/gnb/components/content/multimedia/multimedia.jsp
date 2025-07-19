<%@ include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.DateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.Calendar"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="com.t4g.cnb.enums.Multimedia"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.io.FileNotFoundException"%>
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

String lang = "fr";
String langSuffix = "F";
final Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
  lang = "en";
  langSuffix = "";
}

String mmDataPath = Utils.getConfigurationProperty("mmDataPage", pageManager);
  final String AUDIO_PATH = mmDataPath + "/../audios/";
  final String VIDEO_PATH = mmDataPath + "/../videos/";
  final String PHOTO_PATH = mmDataPath + "/../photos/";
  final String MP3_PATH = mmDataPath + "/../mp3s/";
  
  //Construct the video tab content  
  StringBuilder[] tabContent = new StringBuilder[3];
  for(int j=0; j<3; j++) {
    String propertyPrefix = "video";
    String multimediaProperty_E = Multimedia.VIDEOFILENAME_E.toString();
    String multimediaProperty_F = Multimedia.VIDEOFILENAME_F.toString();
    String multimediaBasePath = VIDEO_PATH;
    String more_link= "Watch Video";
    StringBuilder sb = tabContent[j] = new StringBuilder();
    switch(j) {
      case 1:
        propertyPrefix = "audio";
        multimediaProperty_E = Multimedia.AUDIOFILENAME_E.toString();
        multimediaProperty_F = Multimedia.AUDIOFILENAME_F.toString();
        multimediaBasePath = AUDIO_PATH;
        more_link= "Listen to Audio";
        break;
      case 2:
        propertyPrefix = "photo";
        multimediaProperty_E = Multimedia.PHOTO_1.toString();
        multimediaProperty_F = Multimedia.PHOTO_1.toString(); 
        multimediaBasePath = mmDataPath;
        more_link= "View Photo";
        break;
    }
	  for(int i=1;i<=4; i++) {

	    //Get the dialog values
	    String itemPath = properties.get(String.format("%s%s",propertyPrefix,i),"");
	    String itemTitle = properties.get(String.format("%stitle%s",propertyPrefix,i),"");
	    String itemDescription = properties.get(String.format("%sdescription%s",propertyPrefix,i),"");
	    String itemImage = properties.get(String.format("%simage%s",propertyPrefix,i),"");
	    if(j==2 && itemPath.contains("/")) multimediaBasePath = itemPath.substring(0,itemPath.lastIndexOf("/")) + "/";
	    if(!Utils.isNotEmpty(itemPath)) continue;
	    
	    //get the multimedia asset
	    Node assetNode = resourceResolver.getResource(itemPath).adaptTo(Node.class);
	    Node metadata = assetNode.getNode(Nodes.JCR_CONTENT.nodeType()).getNode(CustomNodes.METADATA.nodeName());  
	    Property multimedia =  metadata.getProperty(multimediaProperty_E);
	    Property title = metadata.getProperty(Multimedia.TITLE_E.toString());
	    Property description = metadata.getProperty(Multimedia.CONTENT_E.toString());
	    if("fr".equalsIgnoreCase(lang)) {
	      multimedia =  metadata.getProperty(multimediaProperty_F);
	      title = metadata.getProperty(Multimedia.TITLE_E.toString());
	      description = metadata.getProperty(Multimedia.CONTENT_F.toString());
	    }

	    //If we have a piece of multimedia
	    if(multimedia!=null && Utils.isNotEmpty(multimedia.getString())) {
	      //override the values from the multimedia asset
	      if(!Utils.isNotEmpty(itemImage)) itemImage = getRendition(resource,itemPath);
	      if(!Utils.isNotEmpty(itemTitle) && title!=null && Utils.isNotEmpty(title.getString()) ) itemTitle = title.getString();
	      if(!Utils.isNotEmpty(itemDescription) && description!=null && Utils.isNotEmpty(description.getString()) ) itemDescription = description.getString();
	      String quicklink=Utils.getQuicklink(itemPath,currentPage,resource); 
	      if(Utils.isNotEmpty(itemTitle)) quicklink = quicklink.replaceFirst(">.*<",">" + itemTitle.replaceAll("[$]","\\$") + "<");
	      
	      //Build the content
	      sb.append("<div class=\"multimedia_item\">");
	      sb.append(String.format("<img src=\"%s\" alt=\"%s\">",itemImage,itemTitle));
	      sb.append(String.format("<h2>%s</h2>",quicklink));
	      if(itemDescription!=null && Utils.isNotEmpty(itemDescription)) sb.append(String.format("<p>%s</p>",itemDescription));
	      sb.append(String.format("<p><span class=\"more_link\"><a href=\"%s%s\" title=\"%s\">%s</a></span></p>",multimediaBasePath,multimedia.getString(),itemTitle,more_link));
	      sb.append("</div>");
	    }    
	  }
	  if(sb.length()>0) {
	    sb.insert(0,String .format("<div id=\"multimedia_%s\">",propertyPrefix));
	    sb.append("</div><div class=\"clearfloats\"></div>");
	  }
  }
  if(tabContent[0].length()>0 || tabContent[1].length()>0 || tabContent[2].length()>0) {
    out.write("<div id=\"multimedia_tabs\"><ul>");
    if(tabContent[0].length()>0) out.write("<li><a href=\"#multimedia_video\">Videos</a></li>");
    if(tabContent[1].length()>0) out.write("<li><a href=\"#multimedia_audio\">Audio</a></li>");
    if(tabContent[2].length()>0) out.write("<li><a href=\"#multimedia_photo\">Photos</a></li>"); 
    out.write("</ul>");
    if(tabContent[0].length()>0) out.write(tabContent[0].toString());
    if(tabContent[1].length()>0) out.write(tabContent[1].toString());
    if(tabContent[2].length()>0) out.write(tabContent[2].toString());
    out.write("<div class=\"clearfloats\"></div></div><div class=\"clearfloats\"></div>");
  
  } else {
    %><cq:include script="empty.jsp"/><%
  }
%>

<script type="text/javascript">
 $(function() {
   $('#multimedia_tabs').tabs({ fxFade: true, fxSpeed: 'fast' });
 });
</script>
  