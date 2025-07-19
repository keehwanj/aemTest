<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>

<%
  // Get language and content bundle for that language
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }

  boolean isYouTube = false;
  boolean embedVideo = properties.get("embed",false);
  boolean hideYoutubeTitle = properties.get("hideYoutubeTitle",false);

  Integer height = 315;
  Integer width = 500;
  try { height = Integer.parseInt(properties.get("height","315")); } catch(Exception e) {}
  try { width = Integer.parseInt(properties.get("width","500")); } catch(Exception e) {}
  String youTubeId = properties.get("youtubeId","");

  String videoPath = properties.get("videoPath","");
  String videoPath_lowercase=videoPath.toLowerCase();
  String videoPath_lowercase_mp4="";
  String videoPath_lowercase_ogg="";
  String videoPath_lowercase_webm="";

  if(videoPath.toLowerCase().endsWith("mp4")){
	videoPath_lowercase_mp4=videoPath.toLowerCase();
    videoPath_lowercase_ogg=videoPath.toLowerCase().replace("mp4","ogg");  
    videoPath_lowercase_webm=videoPath.toLowerCase().replace("mp4","webm");    
  }

  if(videoPath.toLowerCase().endsWith("ogg")){
	videoPath_lowercase_ogg=videoPath.toLowerCase();
    videoPath_lowercase_mp4=videoPath.toLowerCase().replace("ogg","mp4");  
    videoPath_lowercase_webm=videoPath.toLowerCase().replace("ogg","webm");    
  }

  if(videoPath.toLowerCase().endsWith("webm")){
	videoPath_lowercase_webm=videoPath.toLowerCase();
    videoPath_lowercase_mp4=videoPath.toLowerCase().replace("webm","mp4");  
    videoPath_lowercase_ogg=videoPath.toLowerCase().replace("webm","ogg");    
  }


  isYouTube = !"".equals(youTubeId);
  String title = properties.get("videoTitle",""); 

  String duration = properties.get("videoDuration","");
  String description = properties.get("videoDescription","");
  String imagePath = properties.get("thumbnailPath","");

  //START of getting image either from youtube or dam
  if("".equals(imagePath) && !"".equals(youTubeId) ) {
    imagePath = "//img.youtube.com/vi/" + youTubeId + "/1.jpg";
  } 
  if("".equals(imagePath) && "".equals(youTubeId) ) {
    Object node = resource.getResourceResolver().getResource(videoPath + "/jcr:content/renditions/cq5dam.thumbnail.140.100.png");
    if(node!=null) {
      imagePath = videoPath + "/jcr:content/renditions/cq5dam.thumbnail.140.100.png";
    }
  } 
  //END of getting image either from youtube or dam

  //setting imageAlt
  String imageAlt = Utils.isNotEmpty(title)?youTubeId:title;
  //setting componentId for setting unique id
  String componentId = "NEW";
  try { 
      componentId = currentNode.getName(); } 
  catch(
          Exception e) {
  }

%>
<cq:setContentBundle language="<%=lang%>" />
<!--<div class="embed_multimedia" id="movieWindow_<%=componentId%>"></div>-->

<%

  String watchVideo = LocaleSupport.getLocalizedMessage(pageContext, "watchVideoText");

  //START of !embedVideo & (!isYouTube&videoPath||isYouTube&youTubeId) for displaying thumbnail and link
  if(!embedVideo && ((!isYouTube && Utils.isNotEmpty(videoPath))  || (isYouTube && Utils.isNotEmpty(youTubeId)) )) {
    out.write("<div class=\"item_multimedia\">");  
    if(Utils.isNotEmpty(imagePath) || Utils.isNotEmpty(title)) {
      //out.write(String.format("<a id=\"image_%s\">",componentId));
      //using Bootstrap modal  
      out.write(String.format("<a href=\"#image_%s\" data-toggle=\"modal\">",componentId));  
      if(Utils.isNotEmpty(imagePath)) out.write(String.format("<img class=\"img-thumbnail img-responsive\" src=\"%s\" alt=\"%s\">",imagePath,imageAlt));
      if(Utils.isNotEmpty(title)) out.write(String.format("<h2>%s</h2>",title));
      out.write("</a>");
    }
    if(Utils.isNotEmpty(duration)) out.write(String.format("<span class=\"duration hidden-xs\">%s</span>",duration));
    if(Utils.isNotEmpty(description)) out.write(String.format("<p class=\"hidden-xs\">%s</p>",description));

    out.write(String.format("<p class=\"hidden-xs\"><span class=\"more_link\"> <a href=\"#image_%s\" data-toggle=\"modal\">%s</a> </span></p>",componentId,watchVideo));
    out.write("</div>");
  }
  //END of !embedVideo & (!isYouTube&videoPath||isYouTube&youTubeId) for displaying thumbnail and link





  //START of in case of youtube
  if(isYouTube && Utils.isNotEmpty(youTubeId)) {
    //START of in case of youtube & !embedVideo
    if(!embedVideo) {    
      if(!Utils.isNotEmpty(title))title=youTubeId;
	%>
		<!-- START of Modal HTML -->
    	<div id="image_<%=componentId%>" class="modal fade">
        	<div class="modal-dialog">
            	<div class="modal-content">
                	<div class="modal-header">
                    	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    	<h4 class="modal-title"><%=title%></h4>
                	</div>
                	<div class="modal-body">
                    	<div class="embed-responsive embed-responsive-16by9">
                    		<iframe id="videoviewer_<%=componentId%>" width="<%=width%>" height="<%=height%>" src="//www.youtube.com/embed/<%=youTubeId%>?hl=<%=lang%>&persist_hl=1&rel=0" frameborder="0" allowfullscreen></iframe>
                    	</div>
                	</div>
            	</div>
        	</div>
    	</div>
		<!-- END of Modal HTML -->
		<!-- START of javascript for clicking × -->
		<script type="text/javascript">
		$(document).ready(function(){
    	/*Get iframe src attribute value i.e. YouTube video url and store it in a variable */
    		var url = $("#videoviewer_<%=componentId%>").attr('src');

    	/*Assign empty url value to the iframe src attribute when modal hide, which stop the video playing */
    		$("#image_<%=componentId%>").on('hide.bs.modal', function(){
        		$("#videoviewer_<%=componentId%>").attr('src', '');
    		});

    	/*Assign the initially stored url back to the iframe src attribute when modal is displayed again */
    		$("#image_<%=componentId%>").on('show.bs.modal', function(){
        		$("#videoviewer_<%=componentId%>").attr('src', url);
    		});
		});
		</script>
		<!-- END of javascript for clicking × -->

  <%}
	//END of in case of youtube & !embedVideo

    //START of in case of youtube & embedVideo  
    else {
	%>
		<div class="embed_multimedia" id="movieWindow_<%=componentId%>">
            <div class="embed-responsive embed-responsive-16by9">
                <%if(hideYoutubeTitle) {%>
					<iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/<%=youTubeId%>?hl=<%=lang%>&persist_hl=1&controls=2&rel=0&showinfo=0"></iframe>
                <%}
        		else {%>
					<iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/<%=youTubeId%>?hl=<%=lang%>&persist_hl=1&controls=2&rel=0"></iframe>
                <%}%>
            </div>
		</div>

	<%   
    }
    //END of in case of youtube & embedVideo    
  } 
//END of in case of youtube


  //START of in case of !youtube (other video like mp4/ogg/webm)  
  else if(!isYouTube && Utils.isNotEmpty(videoPath))  {
    if(!Utils.isNotEmpty(title))title=youTubeId;
    if(!Utils.isNotEmpty(description))description=title;
    //START of in case of !youtube & !embedVideo(other video like mp4/ogg/webm)  
    if(!embedVideo) {  
       if(!Utils.isNotEmpty(title))title=youTubeId;
        %>
		<!-- START of Modal HTML -->
    	<div id="image_<%=componentId%>" class="modal fade">
        	<div class="modal-dialog">
            	<div class="modal-content">
                	<div class="modal-header">
                    	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    	<h4 class="modal-title"><%=title%></h4>
                	</div>
                	<div class="modal-body">
                    	<div class="embed-responsive embed-responsive-16by9">
                            <% //START of in case of !youtube & embedVideo(other video like mp4/ogg/webm)  
            				if(videoPath_lowercase.endsWith("mp4") || videoPath_lowercase.endsWith("ogg") || videoPath_lowercase.endsWith("webm")) {%>
    						<video class="embed-responsive-item"  poster="<%=imagePath%>" width="<%=width%>" height="<%=height%>" controls>
  								<source src="<%=videoPath_lowercase_mp4%>" type="video/mp4">
                    			<source src="<%=videoPath_lowercase_ogg%>" type="video/ogg">
                    			<source src="<%=videoPath_lowercase_webm%>" type="video/webm">
								Your browser does not support the video tag.
    						</video>
                            <%}
        					//END of in case of !youtube & embedVideo(other video like mp4/ogg/webm)  
        					//START of in case of !youtube & !embedVideo(other video like swf)  
         					else if(videoPath_lowercase.endsWith("swf")){%>
								<embed src="<%=videoPath%>"  width="100%" height="100%"> 
                            <%}
        					//END of in case of !youtube & !embedVideo(other video like swf)  
        					%>

                        </div>
                	</div>
            	</div>
        	</div>
    	</div>
		<!-- END of Modal HTML -->
		<!-- START of javascript for clicking × -->
		<script type="text/javascript">
			$('body').on('hidden.bs.modal', '.modal', function () {
				$('video').trigger('pause');
			});
		</script>
		<!-- END of javascript for clicking × -->
	<%}
     //END of in case of !youtube & !embedVideo(other video like mp4/ogg/webm)   

     //START of in case of !youtube & embedVideo   
     else {
         //START of in case of !youtube & embedVideo(other video like mp4/ogg/webm)  
	   	if(videoPath_lowercase.endsWith("mp4") || videoPath_lowercase.endsWith("ogg") || videoPath_lowercase.endsWith("webm")) {
		%>
			<div align="center" class="embed-responsive embed-responsive-16by9">
    			<video class="embed-responsive-item"  poster="<%=imagePath%>" width="<%=width%>" height="<%=height%>" controls>
  					<source src="<%=videoPath%>" type="video/mp4">
                    <source src="<%=videoPath%>" type="video/ogg">
                    <source src="<%=videoPath%>" type="video/webm">
					Your browser does not support the video tag.
    			</video>
			</div><br/>
		<%}
         //END of in case of !youtube & embedVideo(other video like mp4/ogg/webm)  
         //START of in case of !youtube & embedVideo(other video like swf)  
         else if(videoPath_lowercase.endsWith("swf")){%>
			<div align="center" class="embed-responsive embed-responsive-16by9">
				<embed src="<%=videoPath%>"  width="100%" height="100%">  
			</div>
		<%}
         //END of in case of !youtube & embedVideo(other video like swf)  
     }   
	//END of in case of !youtube & embedVideo(other video like mp4/ogg/webm)    
  } 
  //END of in case of !youtube (other video like mp4/ogg/webm) 

  else {
    %><cq:include script="empty.jsp"/><%  
  }
%>