<%@include file="/libs/foundation/global.jsp" %>
<%@page import="com.t4g.cnb.utils.Utils"%>

<%
  String style = properties.get("style", "unstyled");
  String style_1 = style+"_1";
  String sectionTitleText = properties.get("sectionTitle", "");
  String sectionTitleLinkUrl = properties.get("titleLink", "");
  String sectionRSSLinkUrl = properties.get("rssfeed", "");
  String sectionMoreLinkUrl = properties.get("moreLink", "");
  String sectionMoreLinkText = properties.get("moreLinkText", "");


  String sectionTitle = sectionTitleText;
  if(Utils.isNotEmpty(sectionTitleLinkUrl)){
    if(sectionTitleLinkUrl.startsWith("/")) {
      sectionTitle = Utils.getQuicklink(sectionTitleLinkUrl, currentPage, resource);
    } else {
      sectionTitle = String.format("<a href=\"%s\">%s</a>", sectionTitleLinkUrl, sectionTitleLinkUrl);
    }
    if(Utils.isNotEmpty(sectionTitleText)) {
      sectionTitleText = sectionTitleText.replace("$","");
      sectionTitle = sectionTitle.replaceFirst(">.*<", ">" + sectionTitleText.replaceAll("[$]","\\$") + "<");
    }
  }
  
  String more = "";
  if(Utils.isNotEmpty(sectionMoreLinkUrl)){
    if(sectionMoreLinkUrl.startsWith("/")) {
      more = Utils.getQuicklink(sectionMoreLinkUrl, currentPage, resource);
    } else {
      more = String.format("<a href=\"%s\">%s</a>", sectionMoreLinkUrl, sectionMoreLinkUrl);
    }
    if(Utils.isNotEmpty(sectionMoreLinkText)) {
      sectionMoreLinkText = sectionMoreLinkText.replace("$","");
      more = more.replaceFirst(">.*<", ">" + sectionMoreLinkText.replaceAll("[$]","\\$") + "<");
    }
  }
  if(!Utils.isNotEmpty(sectionTitle)) {
    sectionTitle = "Untitled"; 
  }
  
%>

<%
  if (style.equals("unstyled")) {
    	out.write(sectionTitle);
  } else if (style.equals("pageheader")) {
    	out.write("<div class=\"pageHeader\"><h1>");
    	out.write(sectionTitle);
    	out.write("</h1></div>");
  } else if("standard".equals(style)){
    out.write("<div class=\"standard\"><h2>");
    	out.write(sectionTitle);
    	out.write("</h2></div>");   
  } else {        
    out.write(String.format("<div class=\"%1s\">", style_1));
    	if (Utils.isNotEmpty(sectionRSSLinkUrl)) {
			if(!sectionRSSLinkUrl.contains(".")) sectionRSSLinkUrl += ".feed.rss.xml";
      			out.write(String.format("<a href=\"%s\" class=\"rsslink\"><img src=\"/etc/designs/gnb/images/icon_rss.gif\" title=\"rss\" alt=\"rss\"/></a>", sectionRSSLinkUrl));
    	}
    	if (style.equals("alerts")) {%>
			<img src="/etc/designs/gnb/images/icon_alerts.gif" title="emo" alt="emo"/>
	<%}
    	out.write(String.format("<h3 class=\"title links %1s\">%s</h3>",style, sectionTitle));
    	if (Utils.isNotEmpty(more)) {
    		String extraPadding = "";
    		if(Utils.isNotEmpty(sectionRSSLinkUrl)) {
    			extraPadding = " style=\"margin-right:20px;\"";
    		}
      	out.write(String.format("<span class=\"more_title_link\" %s>%s</span>",  extraPadding,more));
    	}
    out.write("</div><div class=\"clearFloats\"></div>");
  }
%>