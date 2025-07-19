<%--
  Copyright 1997-2008 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Text-Image component

  Combines the text and the image component

--%><%@ page import="com.day.cq.wcm.foundation.Image,
    com.day.cq.wcm.foundation.TextFormat,
    com.day.cq.wcm.foundation.DiffInfo,
    com.day.cq.wcm.foundation.DiffService,
    org.apache.commons.lang.StringEscapeUtils,
    com.day.cq.wcm.api.components.DropTarget,
    com.day.cq.wcm.api.WCMMode,
    org.apache.sling.api.resource.ResourceUtil,
    org.apache.sling.api.resource.ValueMap,
    com.day.cq.commons.Doctype" %>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/foundation/global.jsp"%>
<%
%><div class="<%= properties.get("cssText", "text") %>"><%

String thumbnail = properties.get("thumbnail", "no");        
String titleUrl = properties.get("titleLink", "");
String alt = properties.get("alt", "");

String alt_text = properties.get("alt_text", "");

String titleLink = "";
String moreURL = properties.get("moreLink", "");
String moreLink = "";
if(Utils.isNotEmpty(titleUrl)) {
  if (titleUrl.startsWith("/")) {
    Page destinationPage = pageManager.getPage(titleUrl);
    if(destinationPage!=null) {
      titleLink = Utils.getQuicklink(titleUrl, destinationPage, resource);
    } else {
      titleLink = Utils.getQuicklink(titleUrl, currentPage, resource);      
    }
  } else {
    titleLink = String.format("<a href=\"%s\">%s</a>", titleUrl, titleUrl);
  }
}


//override the title text
if (properties.get("title") != null) {
    String title = properties.get("title", String.class);
    if (Utils.isNotEmpty(titleLink)) {
      titleLink = titleLink.replaceFirst(">.*<", ">" + title.replaceAll("[$]","\\$") + "<");
    } else {
      titleLink = title;
    }
}
if(Utils.isNotEmpty(titleLink)) {
    out.write("<div class=\"title\">");
    out.write(titleLink);
    out.write("</div>");
}

if(Utils.isNotEmpty(moreURL)) {
  if (moreURL.startsWith("/")) {
    Page destinationPage = pageManager.getPage(moreURL);
    if(destinationPage!=null) {
      moreLink = Utils.getQuicklink(moreURL, destinationPage, resource);
    } else {
      moreLink = Utils.getQuicklink(moreURL, currentPage, resource);      
    }
  } else {
    moreLink = String.format("<a href=\"%s\">%s</a>", moreURL, moreURL);
  }
}

if (properties.get("moreLinkText") != null) {
    String moreLinkText = properties.get("moreLinkText", String.class);
    if (Utils.isNotEmpty(moreLink)) {
      moreLink = moreLink.replaceFirst(">.*<", ">" + moreLinkText.replaceAll("[$]","\\$") + "<");
    } else {
      moreLink = titleLink.replaceFirst(">.*<", ">" + moreLinkText.replaceAll("[$]","\\$") + "<");
    }
}



    //drop target css class = dd prefix + name of the drop target in the edit config
    String ddClassName = DropTarget.CSS_CLASS_PREFIX + "image";
    String style = "";
    Image img = new Image(resource, "image");
    //March 23, 2011 priority 2, issue h: set alt=blank
    img.setAlt(" ");
    final DiffInfo diffInfo = resource.adaptTo(DiffInfo.class);
    final Image diffImg = (diffInfo == null || diffInfo.getContent() == null ? null : new Image(diffInfo.getContent(), "image"));
    final DiffService diffService = (diffInfo == null ? null : sling.getService(DiffService.class));
    if (img.hasContent() || WCMMode.fromRequest(request) == WCMMode.EDIT) {        
        String imagePosition = properties.get("imagePosition", "");
        if (imagePosition.equals("right")) { 
          style = "style=\"float:right; margin-left: 10px;\""; 
        }else if (imagePosition.equals("left")){
          style = "style=\"float:left; margin-right: 10px;\""; 
        }
        String cssClass = "image ";
        if ( diffInfo != null ) {
            if ( diffInfo.getType() == DiffInfo.TYPE.ADDED ) {
                cssClass += "imageAdded ";
            } else if ( diffInfo.getType() == DiffInfo.TYPE.REMOVED ) {
                cssClass += "imageRemoved ";
            } else {
                final String path1 = (img.getHref() != null ? img.getHref() : "");
                final String path2 = (diffImg != null && diffImg.getHref() != null ? diffImg.getHref() : "");
                if ( !path1.equals(path2) ) {
                    if ( path1.length() == 0 ) {
                        img.addCssClass("imageRemoved");
                    } else if ( path2.length() == 0 ) {
                        img.addCssClass("imageAdded");
                    } else {
                        int pos = path2.indexOf("jcr:frozenNode/");
                        if ( pos == -1
                             || !path1.endsWith(path2.substring(pos+14))
                             || img.getLastModified().compareTo(diffImg.getLastModified()) != 0 ) {    
                            img.addCssClass("imageChanged");
                        }
                    }
                } else if ( img.getLastModified().compareTo(diffImg.getLastModified()) !=  0 ) {
                    img.addCssClass("imageChanged");                
                }
            }
        }
        %><div <%= style %> class="<%= cssClass %><%= properties.get("cq:cssClass", "") %>"><%
        img.loadStyleData(currentStyle);
        // add design information if not default (i.e. for reference paras)
        if (!currentDesign.equals(resourceDesign)) {
            img.setSuffix(currentDesign.getId());
        }
        img.addCssClass(ddClassName);
        img.addCssClass("img-responsive");
        if(thumbnail.equals("yes")){
			img.addCssClass("img-thumbnail");
        }

        img.setSelector(".img");
        img.setDoctype(Doctype.fromRequest(request));
        String title = img.getTitle();
        if ( title.length() > 0 ) {
            title = img.getTitle(true);
            img.setAlt(title);
        }


        if ( diffInfo != null ) {
            final String other = (diffImg == null ? "" : diffImg.getTitle(true));
            final String diffOutput = DiffInfo.getDiffOutput(diffService, diffInfo, title, false, other);
            if ( diffOutput != null ) {
                title = diffOutput;
            }
        }
        %><% img.draw(out);
        String desc = img.getDescription();
        if ( desc.length() > 0 ) {
            //desc = img.getDescription(true);
            desc = img.getDescription(false);//accepting html tag            
        }
        if ( diffInfo != null ) {
            final String other = (diffImg == null ? "" : diffImg.getDescription(true));
            final String diffOutput = DiffInfo.getDiffOutput(diffService, diffInfo, desc, false, other);
            if ( diffOutput != null ) {
                desc = diffOutput;
            }
        }
        if (desc.length() > 0) {            
            %><!--<small><%= desc %></small>--><span class="post_date"><%= desc %></span><%
        }
        %></div><%
    }
    if (properties.get("text", "").length() > 0) {
        String text = properties.get("text", String.class);
        boolean isRichText = properties.get("textIsRich", "false").equals("true");
        if ( diffInfo != null ) {
            final ValueMap map = ResourceUtil.getValueMap(diffInfo.getContent());
            final String diffOutput = DiffInfo.getDiffOutput(diffService, diffInfo, text, isRichText, map.get("text", ""));
            if ( diffOutput != null ) {
                text = diffOutput;
                isRichText = true;
            }
        }
        if (isRichText) {
            %><%= text %><%
        } else {
            TextFormat fmt = new TextFormat();
            fmt.setTagUlOpen("<ul>");
            fmt.setTagOlOpen("<ol start=\"%s\">");
            %><%= fmt.format(text) %><%
        }
        if(Utils.isNotEmpty(moreLink)) {
          out.write(String.format("<div class=\"%s\">%s</div>",properties.get("cssMore", "more_grey"), moreLink));
        }

    } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
        %><img src="/libs/cq/ui/resources/0.gif" class="cq-text-placeholder <%= ddClassName %>" alt=""><%
    }
    %>
    <div class="clearfloat"></div></div>
<script>
$(document).ready(function() {
  $('div.textimage .text .image img').each(function(){
    var $textimage = $(this);
	$textimage.attr('alt', "<%=alt_text%>");   
	$textimage.attr('title', "");         
  });
});    
</script>   