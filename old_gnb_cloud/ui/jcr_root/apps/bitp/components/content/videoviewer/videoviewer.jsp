<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>
<div class="videoviewer">
<%
  // Get language and content bundle for that language
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }
  
  boolean isYouTube = false;
  boolean embedVideo = properties.get("embed",false);
  Integer height = 315;
  Integer width = 500;
  try { height = Integer.parseInt(properties.get("height","315")); } catch(Exception e) {}
  try { width = Integer.parseInt(properties.get("width","500")); } catch(Exception e) {}
  String youTubeId = properties.get("youtubeId","");
  String videoPath = properties.get("videoPath","");
  isYouTube = !"".equals(youTubeId);
  String title = properties.get("videoTitle",""); 
  String duration = properties.get("videoDuration","");
  String description = properties.get("videoDescription","");
  String imagePath = properties.get("thumbnailPath","");
  if("".equals(imagePath) && !"".equals(youTubeId) ) {
    imagePath = "http://img.youtube.com/vi/" + youTubeId + "/1.jpg";
  } 
  if("".equals(imagePath) && "".equals(youTubeId) ) {
    Object node = resource.getResourceResolver().getResource(videoPath + "/jcr:content/renditions/cq5dam.thumbnail.140.100.png");
    if(node!=null) {
      imagePath = videoPath + "/jcr:content/renditions/cq5dam.thumbnail.140.100.png";
    }
  } 
  
  String imageAlt = Utils.isNotEmpty(title)?youTubeId:title;
  String componentId = "NEW";
  try { 
	  componentId = currentNode.getName(); 
	  //out.write(componentId);
  } catch(Exception e) {}
%>
<cq:setContentBundle language="<%=lang%>" />
<div class="embed_multimedia" id="movieWindow_<%=componentId%>"></div>

<%
  String watchVideo = LocaleSupport.getLocalizedMessage(pageContext, "watchVideoText");


  if(!embedVideo && ((!isYouTube && Utils.isNotEmpty(videoPath))  || (isYouTube && Utils.isNotEmpty(youTubeId)) )) {
    out.write("<div class=\"item_multimedia\">");
    if(Utils.isNotEmpty(imagePath) || Utils.isNotEmpty(title)) {
      out.write(String.format("<a id=\"image_%s\">",componentId));
      if(Utils.isNotEmpty(imagePath)) out.write(String.format("<img src=\"%s\" alt=\"%s\">",imagePath,imageAlt));
      if(Utils.isNotEmpty(title)) out.write(String.format("<h2>%s</h2>",title));
      out.write("</a>");
    }
    if(Utils.isNotEmpty(duration)) out.write(String.format("<span class=\"duration\">%s</span>",duration));
    if(Utils.isNotEmpty(description)) out.write(String.format("<p>%s</p>",description));
    
    out.write(String.format("<p><span class=\"more_link\"><a id=\"text_%s\">%s</a></span></p>",componentId,watchVideo));
    out.write("</div>");

  }
  
  
  if(isYouTube && Utils.isNotEmpty(youTubeId)) {
    String youTubeUrl = String.format("http://www.youtube.com/v/%s&hl=%s&fs=1&rel=0",youTubeId,locale.toString());
    StringBuilder youtubeEmbed = new StringBuilder();

    youtubeEmbed.append(String.format("<object width=\"%s\" height=\"%s\">",width,height));
    youtubeEmbed.append(String.format("<param name=\"movie\" value=\"%s\"></param>",youTubeUrl));
    youtubeEmbed.append("<param name=\"allowFullScreen\" value=\"true\"></param>");
    youtubeEmbed.append("<param name=\"allowscriptaccess\" value=\"always\"></param>");
    youtubeEmbed.append("<param name=\"wmode\" value=\"transparent\"></param>");
    //youtubeEmbed.append(String.format("<embed src=\"%s\" type=\"application/x-shockwave-flash\"  allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"%s\" height=\"%s\"></embed>", youTubeUrl,width,height));
    youtubeEmbed.append(String.format("<embed src=\"%s\" type=\"application/x-shockwave-flash\" wmode=\"transparent\" allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"%s\" height=\"%s\"></embed>", youTubeUrl,width,height));
    youtubeEmbed.append("</object>");
    
    
    if(!embedVideo) {    
	  if(!Utils.isNotEmpty(title))title=youTubeId;
	  out.write("<script type=\"text/javascript\">\n");
	  out.write("$(function() {");
	  out.write(String.format(" $(\"#movieWindow_%s\").dialog({modal:true,bgiframe:false,autoOpen:false,height:%s,width:%s,title:'%s'});",componentId,height+60,width+60,title));
	  out.write(String.format(" $(\"#image_%s, #text_%s\").click(function() { ",componentId,componentId));
      out.write(String.format(" $(\"#movieWindow_%s\").html('%s');",componentId,youtubeEmbed));
	  out.write(String.format(" $(\"#movieWindow_%s\").dialog('open');",componentId));
      out.write("})");
      out.write("});");
      out.write("</script>");

      
      } else {
      out.write("<script type=\"text/javascript\">");
      out.write("$(function() {");
      out.write(String.format("$(\"#movieWindow_%s\").html('%s')",componentId,youtubeEmbed));
      out.write("});");
      out.write("</script>");     
    }
  }//end of if(line 50) 
  
  else if(!isYouTube && Utils.isNotEmpty(videoPath))  {
    if(!Utils.isNotEmpty(title))title=youTubeId;
    if(!Utils.isNotEmpty(description))description=title;
    %>
    <script type="text/javascript" src="<%=component.getPath()%>/mediaplayer/silverlight.js"></script>
    <script type="text/javascript" src="<%=component.getPath()%>/mediaplayer/player.js"></script>
    <script type="text/javascript" src="<%=component.getPath()%>/mediaplayer/wmvplayer.js"></script>
    <script type='text/javascript' src="<%=component.getPath()%>/mediaplayer/swfobject.js"></script>
    <script type='text/javascript'>
    function writeLongtail() {
        <% if(videoPath.endsWith("wmv") || videoPath.endsWith("WMV")) { %>
        
        var elm = document.getElementById("movieWindow_<%=componentId%>");

        var src = '<%=component.getPath()%>/mediaplayer/wmvplayer.xaml';
        var cfg = {
            file:'<%=videoPath%>',
            width:'<%=width%>',
            height:'<%=height%>',
            title:'<%=title%>',
            description: '<%=description%>'
        };       
        var ply = new jeroenwijering.Player(elm,src,cfg);
        <% } else { %>

        var so = new SWFObject('<%=component.getPath()%>/mediaplayer/player.swf','mpl','<%=width%>','<%=height%>','9');
        so.addParam('allowfullscreen','true');
        so.addParam('allowscriptaccess','always');
        so.addParam('wmode','opaque');
        so.addVariable('description','<%=description%>');
        so.addVariable('file','<%=videoPath%>');
        so.addVariable('title','<%=title%>');
        so.write('movieWindow_<%=componentId%>');
        <%}%>
     }
	 </script>
	 <%
     if(!embedVideo) {    
       if(!Utils.isNotEmpty(title))title=youTubeId;
       out.write("<script type=\"text/javascript\">\n");
       out.write("$(function() {");
       out.write(String.format(" $(\"#movieWindow_%s\").dialog({modal:true,bgiframe:false,autoOpen:false,height:%s,width:%s,title:'%s'});",componentId,height+60,width+60,title));
       out.write(String.format(" $(\"#image_%s, #text_%s\").click(function() { ",componentId,componentId));
       out.write("writeLongtail();");
       out.write(String.format(" $(\"#movieWindow_%s\").dialog('open');",componentId));
       out.write("})");
       out.write("});");
       out.write("</script>");


     } else {
       out.write("<script type=\"text/javascript\">");
       out.write("writeLongtail();");
       out.write("</script>");     
     }	 
	 
	 
  }//end of else if(line 100) 
  
  else {
    %><cq:include script="empty.jsp"/><%  
  }
%>
</div>


