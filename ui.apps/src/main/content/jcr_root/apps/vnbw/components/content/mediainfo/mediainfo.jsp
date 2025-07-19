<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="java.text.DateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.t4g.cnb.utils.ListItem"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="com.t4g.cnb.enums.Multimedia"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.io.FileNotFoundException"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>

<% 
  String lang = "fr";
  String tagSuffix = "-fra";
  boolean isFrench = true;
  boolean isEnglish = false;
  final Locale locale = currentPage.getLanguage(true);
  String newsRendererPage = properties.get("rendererPage", "");

  if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    isFrench = false;
    isEnglish = true;
    tagSuffix = "-eng";
  }
%>
  <cq:setContentBundle language="<%=lang%>" />
  <%
    String title = "";
    String content = "";
    String presentation = "";

    final String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
    int sc = selectors.length;

    if (selectors.length < 1) {
      log.warn("*** There are no selectors, cannot display mm renderer!  ***");
      return;
    }

    final String selectorPath = String.format("%s/%s/%s.%s", selectors[sc - 4], selectors[sc - 3], selectors[sc - 2],
        selectors[sc - 1]);

    if (selectorPath == null || selectorPath.length() < 1) {
      throw new FileNotFoundException("Bad URL: no selectors defined.");
    }

    final String displayPhoto = Utils.isNotEmpty(slingRequest.getParameter("dphoto")) ? slingRequest
        .getParameter("dphoto") : "1";
    final String baseItemPath = "/content/dam/gnb/multimedia/" + selectorPath;
    final String itemPath = baseItemPath + "/jcr:content/renditions/cq5dam.web.600.400.jpeg";    
    //Kee changed it 2012/1/5
    //final String itemPathBQ = baseItemPath + "/jcr:content/renditions/original";
    final String itemPathBQ = baseItemPath;
    final Node assetNode = WCMUtils.getNode(resourceResolver.getResource(baseItemPath));
    final Node jcrNode = assetNode.getNode(Nodes.JCR_CONTENT.nodeType());
    final Node metadata = jcrNode.getNode(CustomNodes.METADATA.nodeName());
    Page configurationPage = Utils.getConfigurationPage(currentPage.getPageManager());

    StringBuilder dept = new StringBuilder();
    //get a list of all the tags in the metadata
    if (metadata.hasProperty("dam:dept")) {

      TagManager tm = resourceResolver.adaptTo(TagManager.class);

      /**
      String deptDataPage = Utils.getConfigurationProperty("cnbDepartmentMetadata", configurationPage);
      String activePath = deptDataPage+"/active/"; 
      String inactivePath = deptDataPage+"/inactive/"; 
      **/

      Object[] tags = metadata.getProperty("dam:dept").getValues();
      for (int i = 0; i < tags.length; i++) {

        String tagValue = ((Value) tags[i]).getString();

        if (tagValue.contains(tagSuffix + ":org")) {
          	Tag tag = tm.resolve(tagValue);
          	if(tag!=null){
				dept.append(tag.getTitle()).append(",&nbsp;");
          	}
            else{
				tagValue = "in"+tagValue;
				tag = tm.resolve(tagValue);
                if(tag!=null){
                	dept.append(tag.getTitle()).append(",&nbsp;");
                }
            }

        }
      }
    }

    //display link - title
    Property photo1Prop = null;
    if (metadata.hasProperty(Multimedia.PHOTO_1_DOWNLOAD.toString())) {
      photo1Prop = metadata.getProperty(Multimedia.PHOTO_1_DOWNLOAD.toString());
      if (!Utils.isNotEmpty(photo1Prop.getValue().getString())) {
        photo1Prop = null;
        log.warn("No value entered for photo 1 metadata property.");
      }
    }

    Property photo2Prop = null;
    String photo2link = "";
    String path2BQ = "";
    String photo2content = "";
    if (metadata.hasProperty(Multimedia.PHOTO_2_DOWNLOAD.toString())) {
      photo2Prop = metadata.getProperty(Multimedia.PHOTO_2_DOWNLOAD.toString());
      if (!Utils.isNotEmpty(photo2Prop.getValue().getString())) {
        photo2Prop = null;
        log.warn("No value entered for photo 2 metadata property.");
      } else {
        //get the title and content of the related asset      
        Node main2Node = WCMUtils.getNode(resourceResolver.getResource(photo2Prop.getValue().getString()));
        if (main2Node != null) {

          //Kee changed it on 2012/1/5
          //path2BQ = main2Node.getPath() + "/jcr:content/renditions/original";
          path2BQ = main2Node.getPath();

          Node photo2Node = main2Node.getNode(Nodes.JCR_CONTENT.nodeType()).getNode(CustomNodes.METADATA.nodeName());
          if (isEnglish) {
            if (photo2Node.hasProperty(Multimedia.TITLE_E.toString())) {
              photo2link = photo2Node.getProperty(Multimedia.TITLE_E.toString()).getString();
            }
            if (photo2Node.hasProperty(Multimedia.CONTENT_E.toString())) {
              photo2content = photo2Node.getProperty(Multimedia.CONTENT_E.toString()).getString();
            }
            if (photo2Node.hasProperty(Multimedia.PHOTOCONTENT_1_E.toString())) {
              photo2content += String.format("<br>%s",photo2Node.getProperty(Multimedia.PHOTOCONTENT_1_E.toString()).getString());
            }            
          } else {
            if (photo2Node.hasProperty(Multimedia.TITLE_F.toString())) {
              photo2link = photo2Node.getProperty(Multimedia.TITLE_F.toString()).getString();
            }
            if (photo2Node.hasProperty(Multimedia.CONTENT_F.toString())) {
              photo2content = photo2Node.getProperty(Multimedia.CONTENT_F.toString()).getString();
            }
            if (photo2Node.hasProperty(Multimedia.PHOTOCONTENT_1_F.toString())) {
              photo2content += String.format("<br>%s",photo2Node.getProperty(Multimedia.PHOTOCONTENT_1_F.toString()).getString());
            }              
          }
        } else {
          log.warn("**** Not a valid photo 2 property: " + photo2Prop + " ****");
        }
      }
    }

    Property photo3Prop = null;
    String photo3link = "";
    String path3BQ = "";
    String photo3content = "";
    if (metadata.hasProperty(Multimedia.PHOTO_3_DOWNLOAD.toString())) {
      photo3Prop = metadata.getProperty(Multimedia.PHOTO_3_DOWNLOAD.toString());
      if (!Utils.isNotEmpty(photo3Prop.getValue().getString())) {
        photo3Prop = null;
        log.warn("No value entered for photo 3 metadata property.");
      } else {
        //get the title and content of the related asset
        Node main3Node = WCMUtils.getNode(resourceResolver.getResource(photo3Prop.getString()));
        if (main3Node != null) {
          //Kee changed it on 2012/1/5
          //path3BQ = main3Node.getPath() + "/jcr:content/renditions/original";
          path3BQ = main3Node.getPath();
          Node photo3Node = main3Node.getNode(Nodes.JCR_CONTENT.nodeType()).getNode(CustomNodes.METADATA.nodeName());
          if (isEnglish) {
            if (photo3Node.hasProperty(Multimedia.TITLE_E.toString())) {
              photo3link = photo3Node.getProperty(Multimedia.TITLE_E.toString()).getString();
            }
            if (photo3Node.hasProperty(Multimedia.CONTENT_E.toString())) {
              photo3content = photo3Node.getProperty(Multimedia.CONTENT_E.toString()).getString();
            }
            if (photo3Node.hasProperty(Multimedia.PHOTOCONTENT_1_E.toString())) {
              photo3content += String.format("<br>%s",photo3Node.getProperty(Multimedia.PHOTOCONTENT_1_E.toString()).getString());
            }           
          } else {
            if (photo3Node.hasProperty(Multimedia.TITLE_F.toString())) {
              photo3link = photo3Node.getProperty(Multimedia.TITLE_F.toString()).getString();
            }
            if (photo3Node.hasProperty(Multimedia.CONTENT_F.toString())) {
              photo3content = photo3Node.getProperty(Multimedia.CONTENT_F.toString()).getString();
            }
            if (photo3Node.hasProperty(Multimedia.PHOTOCONTENT_1_F.toString())) {
              photo3content += String.format("<br>%s",photo3Node.getProperty(Multimedia.PHOTOCONTENT_1_F.toString()).getString());
            }              
          }
        } else {
          log.warn("**** Not a valid photo 3 property: " + photo3Prop + " ****");
        }
      }
    }

    Property videoOProp = null;
    if (metadata.hasProperty(Multimedia.VIDEOFILENAME_O.toString())) {
      videoOProp = metadata.getProperty(Multimedia.VIDEOFILENAME_O.toString());
      if (!Utils.isNotEmpty(videoOProp.getValue().getString())) {
        videoOProp = null;
        log.warn("No value entered for video o metadata property.");
      }
    }
    Property videoEProp = null;
    if (metadata.hasProperty(Multimedia.VIDEOFILENAME_E.toString())) {
      videoEProp = metadata.getProperty(Multimedia.VIDEOFILENAME_E.toString());
      if (!Utils.isNotEmpty(videoEProp.getValue().getString())) {
        videoEProp = null;
        log.warn("No value entered for video e metadata property.");
      }
    }
    Property videoFProp = null;
    if (metadata.hasProperty(Multimedia.VIDEOFILENAME_F.toString())) {
      videoFProp = metadata.getProperty(Multimedia.VIDEOFILENAME_F.toString());
      if (!Utils.isNotEmpty(videoFProp.getValue().getString())) {
        videoFProp = null;
        log.warn("No value entered for video f metadata property.");
      }
    }

    final boolean hasVideo = (videoOProp != null || videoEProp != null || videoFProp != null);

    Property audioOProp = null;
    if (metadata.hasProperty(Multimedia.AUDIOFILENAME_O.toString())) {
      audioOProp = metadata.getProperty(Multimedia.AUDIOFILENAME_O.toString());
      if (!Utils.isNotEmpty(audioOProp.getValue().getString())) {
        audioOProp = null;
        log.warn("No value entered for audio o metadata property.");
      }
    }
    Property audioEProp = null;
    if (metadata.hasProperty(Multimedia.AUDIOFILENAME_E.toString())) {
      audioEProp = metadata.getProperty(Multimedia.AUDIOFILENAME_E.toString());
      if (!Utils.isNotEmpty(audioEProp.getValue().getString())) {
        audioEProp = null;
        log.warn("No value entered for audio e metadata property.");
      }
    }
    Property audioFProp = null;
    if (metadata.hasProperty(Multimedia.AUDIOFILENAME_F.toString())) {
      audioFProp = metadata.getProperty(Multimedia.AUDIOFILENAME_F.toString());
      if (!Utils.isNotEmpty(audioFProp.getValue().getString())) {
        audioFProp = null;
        log.warn("No value entered for audio f metadata property.");
      }
    }

    final boolean hasAudio = (audioOProp != null || audioEProp != null || audioFProp != null);

    Property mp3OProp = null;
    if (metadata.hasProperty(Multimedia.MP3FILENAME_O.toString())) {
      mp3OProp = metadata.getProperty(Multimedia.MP3FILENAME_O.toString());
      if (!Utils.isNotEmpty(mp3OProp.getValue().getString())) {
        mp3OProp = null;
        log.warn("No value entered for mp3 o metadata property.");
      }
    }

    final boolean hasMp3 = mp3OProp != null;

    Property link1TitleProp = null;
    if (metadata.hasProperty("dam:gallery_1_title_" + lang)) {
      link1TitleProp = metadata.getProperty("dam:gallery_1_title_" + lang);
      if (!Utils.isNotEmpty(link1TitleProp.getValue().getString())) {
        link1TitleProp = null;
        log.warn("No value entered for link 1 title metadata property.");
      }
    }

    Property link1Prop = null;
    if (metadata.hasProperty("dam:gallery_1")) {
      link1Prop = metadata.getProperty("dam:gallery_1");
      if (!Utils.isNotEmpty(link1Prop.getValue().getString())) {
        link1Prop = null;
        log.warn("No value entered for link 1 metadata property.");
      }
    }

    Property link2TitleProp = null;
    if (metadata.hasProperty("dam:gallery_2_title_" + lang)) {
      link2TitleProp = metadata.getProperty("dam:gallery_2_title_" + lang);
      if (!Utils.isNotEmpty(link2TitleProp.getValue().getString())) {
        link2TitleProp = null;
        log.warn("No value entered for link 1 title metadata property.");
      }
    }

    Property link2Prop = null;
    if (metadata.hasProperty("dam:gallery_2")) {
      link2Prop = metadata.getProperty("dam:gallery_2");
      if (!Utils.isNotEmpty(link2Prop.getValue().getString())) {
        link2Prop = null;
        log.warn("No value entered for link 2 metadata property.");
      }
    }

    Property link3TitleProp = null;
    if (metadata.hasProperty("dam:gallery_3_title_" + lang)) {
      link3TitleProp = metadata.getProperty("dam:gallery_3_title_" + lang);
      if (!Utils.isNotEmpty(link3TitleProp.getValue().getString())) {
        link3TitleProp = null;
        log.warn("No value entered for link 3 title metadata property.");
      }
    }

    Property link3Prop = null;
    if (metadata.hasProperty("dam:gallery_3")) {
      link3Prop = metadata.getProperty("dam:gallery_3");
      if (!Utils.isNotEmpty(link3Prop.getValue().getString())) {
        link3Prop = null;
        log.warn("No value entered for link 3 metadata property.");
      }
    }

    final boolean hasLink = (link1Prop != null || link2Prop != null || link3Prop != null);
    
    if ("fr".equals(lang)) {
      if (metadata.hasProperty(Multimedia.CONTENT_F.toString())) {
        content = metadata.getProperty(Multimedia.CONTENT_F.toString()).getString();
      }
      if (metadata.hasProperty(Multimedia.PHOTOCONTENT_1_F.toString())) {
        content += String.format("<br>%s",metadata.getProperty(Multimedia.PHOTOCONTENT_1_F.toString()).getString());
      }      
      if (metadata.hasProperty(Multimedia.TITLE_F.toString())) {
        title = metadata.getProperty(Multimedia.TITLE_F.toString()).getString();
      }
      if (metadata.hasProperty(Multimedia.PRESENTATIONFILENAME_F.toString())) {
        presentation = metadata.getProperty(Multimedia.PRESENTATIONFILENAME_F.toString()).getString();
      }

    } else {
      if (metadata.hasProperty(Multimedia.CONTENT_E.toString())) {
        content = metadata.getProperty(Multimedia.CONTENT_E.toString()).getString();
      }
      if (metadata.hasProperty(Multimedia.PHOTOCONTENT_1_E.toString())) {
        content += String.format("<br>%s",metadata.getProperty(Multimedia.PHOTOCONTENT_1_E.toString()).getString());
      }        
      if (metadata.hasProperty(Multimedia.TITLE_E.toString())) {
        title = metadata.getProperty(Multimedia.TITLE_E.toString()).getString();
      }
      if (metadata.hasProperty(Multimedia.PRESENTATIONFILENAME_E.toString())) {
        presentation = metadata.getProperty(Multimedia.PRESENTATIONFILENAME_E.toString()).getString();
      }
    }

    //News Release
    String newsRelease = "";
    if (metadata.hasProperty("dam:newsRelease")) {
      newsRelease = metadata.getProperty("dam:newsRelease").getString();

      /**Start of new  **/
      String[] newsReleaseArray=newsRelease.split("/");
	  String newsReleaseArray1=newsReleaseArray[newsReleaseArray.length-3];
      String newsReleaseArray2=newsReleaseArray[newsReleaseArray.length-2];
	  String newsReleaseArray3=newsReleaseArray[newsReleaseArray.length-1];

      if(!Utils.isNotEmpty(newsRendererPage)){
      	if(lang.equals("en")){
			newsRendererPage="/content/gnb/en/news/news_release."+newsReleaseArray1+"."+newsReleaseArray2+"."+newsReleaseArray3+".html";
        }
        else{
			newsRendererPage="/content/gnb/fr/nouvelles/communique."+newsReleaseArray1+"."+newsReleaseArray2+"."+newsReleaseArray3+".html";
        }
      }
      else{
		newsRendererPage=newsRendererPage+"."+newsReleaseArray1+"."+newsReleaseArray2+"."+newsReleaseArray3+".html";
      }
	  /**End of of new  **/

    }


    //New Date  - Place
    String itemDate = "";
    if (metadata.hasProperty(Multimedia.NEW_DATE.toString())) {
      Calendar newDate = metadata.getProperty(Multimedia.NEW_DATE.toString()).getDate();
      if (newDate != null) {
        if ("fr".equals(lang)) {
          itemDate = DateFormat.getDateInstance(DateFormat.LONG, Locale.FRENCH).format(newDate.getTime());
        } else {
          itemDate = DateFormat.getDateInstance(DateFormat.LONG).format(newDate.getTime());
        }
      }
    } else {
      itemDate = "-";
    }

    Property placeProp = null;
    String place = "";
    if (metadata.hasProperty(Multimedia.PLACE.toString())) {
      placeProp = metadata.getProperty(Multimedia.PLACE.toString());
      place = placeProp.getValue().getString();
    }
  %>

<div id="metadata" class="row">
    <!--start of left-->  
    <div class="metadata_left col-sm-8">
        <div id="md_main_photo"><img class="img-thumbnail img-responsive" id="switcherTarget" alt="<fmt:message key="original"/>" src="/etc/designs/gnb/images/icon_external_link.png"/></div><!--added src tag-->
        <div class="clearfloat"></div>
        <input type="hidden" id="dphoto" value="<%=displayPhoto%>" />
        <div id="md_mPhoto">          
          <%if (Utils.isNotEmpty(itemPath)) {%>  
            <img src="/etc/designs/gnb/images/image.png" alt="" title="" />
            <a href="<%=itemPath%>" class="imageSwitcher" id="photo1" name="photo1">Photo 1</a>
            <input type="hidden" id="photo1link" value="<%=title%>" />
            <input type="hidden" id="photo1content" value="<%=content%>" />
            &nbsp;&nbsp;<!--changed id same with name-->                        
              <a href="<%=itemPathBQ%>" id="bestphoto1" class="best" name="bestphoto1" style="display:none;" onclick="window.open('<%=itemPathBQ%>', 'popup'); return false">
                <fmt:message key="best"/>            
                  <img src="/etc/designs/gnb/images/icon_external_link.png"   alt="" title="" /><!--added alt, title-->
                &nbsp;
              </a>
          <%}if (photo2Prop != null) {%>    
            <c:out value=" | "/>
            <a href="<%=photo2Prop.getValue().getString()%>/jcr:content/renditions/cq5dam.web.600.400.jpeg" class="imageSwitcher" id="photo2" name="photo2">Photo 2</a>
            <input type="hidden" id="photo2link" value="<%=photo2link%>" />
            <input type="hidden" id="photo2content" value="<%=photo2content%>" />
            &nbsp;&nbsp;<!--changed id same with name-->            
              <a href="<%=path2BQ%>" id="bestphoto2" class="best" name="bestphoto2" style="display:none;" onclick="window.open('<%=path2BQ%>', 'popup'); return false">
                <fmt:message key="best"/>            
                  <img src="/etc/designs/gnb/images/icon_external_link.png"  alt="" title="" /><!--added alt, title-->
              &nbsp;
              </a>               
          <%}if (photo3Prop != null) {%>
            <c:out value=" | "/>
            <a href="<%=photo3Prop.getValue().getString()%>/jcr:content/renditions/cq5dam.web.600.400.jpeg" class="imageSwitcher" id="photo3" name="photo3">Photo 3</a>
            <input type="hidden" id="photo3link" value="<%=photo3link%>" />
            <input type="hidden" id="photo3content" value="<%=photo3content%>" />
            &nbsp;&nbsp;<!--changed id same with name-->                                      
              <a href="<%=path3BQ%>" id="bestphoto3" class="best" name="bestphoto3" style="display:none;" onclick="window.open('<%=path3BQ%>', 'popup'); return false">
                <fmt:message key="best"/>            
                  <img src="/etc/designs/gnb/images/icon_external_link.png"  alt="" title="" /><!--added alt, title-->
              </a>
          <%
            }
          %>          
        </div>                
        
        <div class="clearfloat"></div>        
        <div id="md_dept"><%=dept.toString()%> <%=itemDate%> - <%=place%></div>        
        <div class="clearfloat"></div>      
        <div id="md_link"><%=title%></div>
        <div class="clearfloat"></div>
        <div id="md_content"><%=content%></div>
        <div class="clearfloat"></div>
    </div><!--end of left-->  
	<!--start of right--> 
    <div class="metadata_right col-sm-4">       
    <%if ( Utils.isNotEmpty(newsRelease) || hasVideo || hasAudio || Utils.isNotEmpty(presentation) || hasLink ) {%>
      <div class="related_box">      
        <div class="related_header"><h3><%=LocaleSupport.getLocalizedMessage(pageContext, "related")%></h3></div>                         
                                
          <%if (Utils.isNotEmpty(newsRelease)) {%>
          <div id="md_newsRelease"><img src="/etc/designs/gnb/images/news.png" alt="" title="" /><!--added alt, title-->
            <a href="<%=newsRendererPage%>"><fmt:message key="newsRelease"/></a>
          </div>              
          <%}%>
          
          <%if (hasVideo) {%>              
          <div id="md_video"> <img src="/etc/designs/gnb/images/video.png" alt="" title="" /> <!--added alt, title--> 
            <%if (videoOProp != null) {%>                             
              <a href="<%=videoOProp.getValue().getString() %>"><fmt:message key="original"/></a>
            <%}if (videoEProp != null) {%>                 
              <c:out value=" | "/><a href="<%=videoEProp.getValue().getString() %>"><fmt:message key="english"/></a>                 
            <%}if (videoFProp != null) {%>                
              <c:out value=" | "/><a href="<%=videoFProp.getValue().getString() %>"><fmt:message key="french"/></a>                 
            <%}%>
            </div>
          <%}%>
          
          <%if (hasAudio) {%>
          <div id="md_audio"><img src="/etc/designs/gnb/images/sound.png" alt="" title="" /><!--added alt, title-->
            <%if (audioOProp != null) {%>                 
               <a href="<%=audioOProp.getValue().getString()%>"><fmt:message key="original"/></a>
            <%}if (audioEProp != null) {%> 
               <c:out value=" | "/> <a href="<%=audioEProp.getString() %>"><fmt:message key="english"/></a>
            <%}if (audioFProp != null) {%>
               <c:out value=" | "/> <a href="<%=audioFProp.getString() %>"><fmt:message key="french"/></a>
            <%}if (mp3OProp != null) {%>                                              
               <c:out value=" | "/> <a href="<%=mp3OProp.getString() %>"><fmt:message key="mp3"/></a>
            <%}%>
            </div>
          <%}%>
          
          <%if (Utils.isNotEmpty(presentation)) {%>
          <div id="md_presentation"><img src="/etc/designs/gnb/images/presentation.png" alt="" title=""/><!--added alt, title-->
                <a href="<%=presentation%>"><fmt:message key="presentation"/></a>
            </div>              
          <%}%>
            
          <%if((link1TitleProp != null && link1Prop != null) || (link2TitleProp != null && link2Prop != null) || (link3TitleProp != null && link3Prop != null)) {%> 
          <div id="md_mLink">                  
            <ul>
            <%if (link1TitleProp != null && link1Prop != null) {%>              
              <li><a href="<%=link1Prop.getValue().getString()%>"><%=link1TitleProp.getValue().getString()%></a></li>             
            <%}if (link2TitleProp != null && link2Prop != null) {%>              
              <li><a href="<%=link2Prop.getValue().getString()%>"><%=link2TitleProp.getValue().getString()%></a></li>             
            <%}if (link3TitleProp != null && link3Prop != null) {%>              
              <li><a href="<%=link3Prop.getValue().getString()%>"><%=link3TitleProp.getValue().getString()%></a></li>            
            <%}%>
            </ul>
          </div>
          <%}%>
           
      </div>
    <%}%>  
    </div>
    <!--end of right-->
  <div class="clearfloat"></div>   
</div>
<div class="clearfloat"></div>
<script language="javaScript">
          $("#switcherTarget").attr("src",$("#photo"+ $("#dphoto").val()).attr("href"));
          $("#md_link").attr("innerHTML", $("#photo"+ $("#dphoto").val() + "link").val());
          $("#md_content").attr("innerHTML", $("#photo" + $("#dphoto").val() + "content").val());          
          $("#bestphoto" + $("#dphoto").val()).show();                               

        $(document).ready(function() {        
          $(".imageSwitcher").click(function() {
            $("#switcherTarget").attr("src",$(this).attr("href"));         
            var link= $(this).attr("name") + 'link';   
            $("#md_link").attr("innerHTML", $("#" + link).val());
            var content= $(this).attr("name") + 'content';
            $("#md_content").attr("innerHTML", $("#" + content).val());
            $(".best").hide();
            var best= '#best' + $(this).attr("name");          
            $(best).show();
            return false;
          });
                
        });        
</script>