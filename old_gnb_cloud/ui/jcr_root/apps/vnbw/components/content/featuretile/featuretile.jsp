<%@include file="/libs/foundation/global.jsp" %>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.commons.Doctype"%>
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
  return assetPath;
} 
%>
<%String sectionTitle="";
  String featureTitleLink = "";
  String teaser = "";
  String moreLink = "";
  boolean padded = properties.get("padded", false);
  boolean shaded = properties.get("shaded", false);
  boolean border = properties.get("border", false);
  String style = properties.get("style", "normal");
  String destination = properties.get("destination", "");
  boolean openNewpage = properties.get("openNewpage", false);
  String alt_text = properties.get("alt_text", " ");
  String imagePath = "";

  if(Utils.isNotEmpty(destination)) {
      if (destination.startsWith("/")) {
        Page destinationPage = pageManager.getPage(destination);
        if(destinationPage!=null) {
            teaser = destinationPage.getProperties().get("jcr:description", "");
        }
        featureTitleLink = moreLink = Utils.getQuicklink(destination, currentPage, resource); 

      } else {

        featureTitleLink = String.format("<a href=\"%s\">%s</a>", destination, destination);
          if(openNewpage){
				featureTitleLink = String.format("<a href=\"%s\"%s\"\">%s</a>", destination,"target='_blank'", destination);
          }

      }
  }


  //override the title text
  if (properties.get("sectionTitle") != null) {
    sectionTitle = properties.get("sectionTitle", String.class);
    if (Utils.isNotEmpty(featureTitleLink)) {
      featureTitleLink = featureTitleLink.replaceFirst(">.*<", ">" + sectionTitle.replaceAll("[$]","\\$") + "<");
    } else {
      featureTitleLink = sectionTitle;
    }
  }

  //override the teaser text
  if (properties.get("sectionTitleTeaser") != null) {
    teaser = properties.get("sectionTitleTeaser", String.class);
  }

  //if more link text is provided then we will display the more link
  if (properties.get("moreLinkText") != null) {
    String moreLinkText = properties.get("moreLinkText", String.class);
    //override the more destination
    if (properties.get("moreLink") != null) {
      String moreLinkString = properties.get("moreLink", String.class);
      //internal page
      if (moreLinkString.startsWith("/")) {
          moreLink = Utils.getQuicklink(moreLinkString, currentPage, resource);          
      } else {
        moreLink = String.format("<a href=\"%s\">%s</a>", moreLinkString, moreLinkString);
      }
    }

    if (Utils.isNotEmpty(moreLink)) {
      moreLink = moreLink.replaceFirst(">.*<", ">" + moreLinkText.replaceAll("[$]","\\$") + "<");
    } else {
      moreLink = null;
    }
  } else {
    moreLink = null;
  }


  Boolean hasContent = Utils.isNotEmpty(imagePath) || Utils.isNotEmpty(featureTitleLink) || Utils.isNotEmpty(teaser) || Utils.isNotEmpty(moreLink);
  String containerClass = style + " ";
  if (padded)    containerClass += "padded ";
  if (shaded)    containerClass += "shaded ";
  if (border)    containerClass += "bottomborder ";
  out.write(String.format("<div class=\"%s\">", containerClass));
    Image img = new Image(resource, "image");
    //March 23, 2011 priority 2, issue h: set alt=blank
    //img.setAlt("");
    if(Utils.isNotEmpty(img.getFileReference())) {
      img.setFileReference(getRendition(resource, img.getFileReference()));
      img.setFileNodePath("");
    } else {
      img.setSelector(".img");
      if(Utils.isNotEmpty(img.getFileNodePath())) {
        img.setFileNodePath(getRendition(resource, img.getFileNodePath()));
        img.setFileReference("");
      }
    }

    if(Utils.isNotEmpty(img.get("linkURL")) && img.get("linkURL").startsWith("/")) {
      String link = Utils.getQuicklink(img.get("linkURL"), currentPage, resource);
      String href = link.substring(link.indexOf("\"") + 1);
      href = href.substring(0, href.indexOf("\""));
      img.set("linkURL",href);
    }
    img.setDoctype(Doctype.fromRequest(request));
	String title = img.getTitle();

	/**start of new code*/
	if(alt_text!=" "){
        sectionTitle=sectionTitle.replaceAll("<br>"," ").replaceAll("<br/>"," ");
        img.setTitle(sectionTitle);
		img.setAlt(alt_text);        
	}
	else{
        img.setTitle(" ");
        img.setAlt(" ");        
	}
	/**end of new code*/

    if (title.length() > 0) {
        title = img.getTitle(true);
    }
/**
    if(img.hasContent() || WCMMode.fromRequest(request) == WCMMode.EDIT) {
        out.write("<div class=\"imagecontainer\">");
        img.draw(out);
        out.write("</div>");
    }
**/
/*start of new code-fix for taking space in edit mode*/
	if(WCMMode.fromRequest(request) == WCMMode.EDIT) {
    	if(img.hasContent()) {
		  	out.write("<div class=\"imagecontainer\">");
        	img.draw(out);
        	out.write("</div>");
        }
        else{
			img.draw(out);
        }
    }        
    else{
		if(img.hasContent()) {
        	out.write("<div class=\"imagecontainer\">");
            img.draw(out);%>
			<!--<img title="" alt="" src=<%=img.getSrc()%> class="img-thumbnail img-responsive">-->            
    		<%
            out.write("</div>");
        }
    }        
/*end of new code*/


  if (Utils.isNotEmpty(featureTitleLink)) {
    if(featureTitleLink.contains("href")) {
      out.write(String.format("<h2 class=\"%s\">%s<span></span></h2>", style, featureTitleLink));
    } else {
      out.write(String.format("<h2 class=\"%s\">%s</h2>", style, featureTitleLink));

    }

  }
  if (Utils.isNotEmpty(teaser)) {
    out.write(String.format("<p>%s</p>", teaser));
  }
  if (Utils.isNotEmpty(moreLink)) {
    out.write(String.format("<div class=\"featuretile_more\">%s</div>", moreLink));
  }
  out.write("</div>");
%>


<script>
$(document).ready(function() {
  $('div.imagecontainer img').each(function(){
    var $img = $(this);
    var title = $img.attr('title')      
    var alt_text = $img.attr('alt')
    var class_text = $img.attr('class')    
    var src_text = $img.attr('src')    

    var newalt_text = $.trim(alt_text);
	var new_title = $.trim(title);      
    var new_src = $.trim(src_text);        
	var new_class = $.trim(class_text);   
    if((new_class.indexOf("img-responsive") > -1) ||new_src.indexOf("/etc/designs/default/0.gif") > -1){
		new_class	=new_class;
    }
    else{
		new_class=new_class+" img-responsive"
    }      

    $img.attr('alt', newalt_text);
    $img.attr('title', new_title);   

    $img.attr('class', new_class);         
  });
});    
</script>   

