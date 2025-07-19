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

<%
  String link = "";
  String title = "";
  String content = "";
  final String ENGLISH = "English";
  final String FRENCH = "French";
  final String ORIGINAL = "Original";

  String lang = "fr";
  final Locale locale = currentPage.getLanguage(true);
  if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
  }

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
  final String itemPath = "/content/dam/gnb/multimedia/" + selectorPath;
  final Node assetNode = WCMUtils.getNode(resourceResolver.getResource(itemPath));
  final Node metadata = assetNode.getNode(Nodes.JCR_CONTENT.nodeType()).getNode(CustomNodes.METADATA.nodeName());

  //display link - title
  Property photoOProp = null;
  String photoO = "";
  if (metadata.hasProperty(Multimedia.PHOTO_1_DOWNLOAD.toString())) {
    photoOProp = metadata.getProperty(Multimedia.PHOTO_1_DOWNLOAD.toString());
    if (!Utils.isNotEmpty(photoOProp.getValue().getString())) {
      photoOProp = null;
      log.warn("No value entered for photo o metadata property.");
    } else {
      photoO = photoOProp.getValue().getString();
    }
  }

  Property photo2Prop = null;
  String photo2Path = "";
  if (metadata.hasProperty(Multimedia.PHOTO_2_DOWNLOAD.toString())) {
    photo2Prop = metadata.getProperty(Multimedia.PHOTO_2_DOWNLOAD.toString());
    if (!Utils.isNotEmpty(photo2Prop.getValue().getString())) {
      photo2Prop = null;
      log.warn("No value entered for photo 2 metadata property.");
    } else {
      photo2Path = photo2Prop.getValue().getString();
    }
  }  

  Property photo3Prop = null;
  String photo3Path = "";
  if (metadata.hasProperty(Multimedia.PHOTO_3_DOWNLOAD.toString())) {
    photo3Prop = metadata.getProperty(Multimedia.PHOTO_3_DOWNLOAD.toString());
    if (!Utils.isNotEmpty(photo3Prop.getValue().getString())) {
      photo3Prop = null;
      log.warn("No value entered for photo 3 metadata property.");
    } else {
      photo3Path = photo3Prop.getValue().getString();
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

  if ("fr".equals(lang)) {
    if (metadata.hasProperty(Multimedia.CONTENT_F.toString())) {
      content = metadata.getProperty(Multimedia.CONTENT_F.toString()).getString();
    }
    if (metadata.hasProperty(Multimedia.TITLE_F.toString())) {
      title = metadata.getProperty(Multimedia.TITLE_F.toString()).getString();
    }
  } else {
    if (metadata.hasProperty(Multimedia.CONTENT_E.toString())) {
      content = metadata.getProperty(Multimedia.CONTENT_E.toString()).getString();
    }
    if (metadata.hasProperty(Multimedia.TITLE_E.toString())) {
      title = metadata.getProperty(Multimedia.TITLE_E.toString()).getString();
    }
  }

  //New Date  - Place
  String itemDate = "";
  if (metadata.hasProperty(Multimedia.NEW_DATE.toString())) {
    Calendar newDate = metadata.getProperty(Multimedia.NEW_DATE.toString()).getDate();
    if (newDate != null) {
      itemDate = DateFormat.getDateInstance(DateFormat.LONG).format(newDate.getTime());
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

<div id="metadata">
<div id="md_photo"><img src="<%=itemPath%>" alt="<%=photoO%>"></div>
<div id="md_link"><a href="<%=link%>"><%=title%></a></div>
<div id="md_newDate"><%=itemDate%>-<%=place%></div>
<div id="md_dept"></div>
<div id="md_content"><%=content%></div>
<div id="md_mPhoto">
    <img src="/etc/designs/gnb/images/camera.jpg" alt="Photo 1">
    <a href="<%=itemPath%>">Photo 1</a>
<% if(photo2Prop != null) { %>    
    (<a href="<%=photo2Path%>">Photo 2</a>)
<% }  
   if(photo3Prop != null) { %>
    (<a href="<%=photo3Path%>">Photo 3</a>)
<% } %>
</div>
<%
  if (photoOProp != null && Utils.isNotEmpty(photoO)) {
%>
<div id="md_oPhoto">
    <img src="/etc/designs/gnb/images/film.jpg" alt="Download Best Quaility">
    <a href="<%=photoO%>">Best Quality Photo</a>
</div>
<%
  }
%>

<div id="md_video">
<%
  if (hasVideo) {
%><img src="/etc/designs/gnb/images/d_camera.jpg"><%
  }
  if (videoOProp != null) {
%> (<a href="<%=videoOProp.getValue().getString()%>"><%=ORIGINAL%></a>) <%
  }
  if (videoEProp != null) {
%> (<a href="<%=videoEProp.getValue().getString()%>"><%=ENGLISH%></a>) <%
  }
  if (videoFProp != null) {
%>(<a href="<%=videoFProp.getValue().getString()%>"><%=FRENCH%></a>) <%
  }
%>
</div>

<div id="md_audio">
<%
  if (hasAudio) {
%><img src="/etc/designs/gnb/images/speaker.jpg"><%
  }
  if (audioOProp != null) {
%> (<a href="<%=audioOProp.getValue().getString()%>"><%=ORIGINAL%></a>) <%
  }
  if (audioEProp != null) {
%> (<a href="<%=audioEProp.getString()%>"><%=ENGLISH%></a>) <%
  }
  if (audioFProp != null) {
%>(<a href="<%=audioFProp.getString()%>"><%=FRENCH%></a>) <%
  }
%>
</div>

<div id="md_mp3">
<%
  if (hasMp3) {
%><img src="/etc/designs/gnb/images/note.jpg"><%
  }
  if (mp3OProp != null) {
%> (<a href="<%=mp3OProp.getString()%>"><%=ORIGINAL%></a>) <%
  }
%>
</div>

</div>