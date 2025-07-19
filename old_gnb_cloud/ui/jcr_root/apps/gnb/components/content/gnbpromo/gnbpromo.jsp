<%@ page import="com.day.cq.wcm.api.WCMMode,com.day.cq.wcm.api.components.DropTarget,com.day.cq.wcm.foundation.List,java.util.Iterator,com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/wcm/global.jsp"%>
<!--[if lte IE 9 ]>   <link href="/etc/designs/gnb-bootstrap/clientlibs/css/ie8.css" rel="stylesheet" type="text/css">   <![endif]-->

<%
    String lang = "fr";
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
        lang = "en";
    }

    ArrayList<Object> list = new ArrayList<Object>();
    for (int i = 1; i < 6; i++) {
        Page p = currentPage.getPageManager().getPage(properties.get(String.format("promoDestination%s", i), ""));
        if (p != null) {
            list.add(p);
        } else if (properties.get(String.format("promoDestination%s", i), "").length() > 0) {
            list.add(properties.get(String.format("promoDestination%s", i), ""));
        }
    }


if (!list.isEmpty()) {
	out.write("<div id=\"gnbCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"10000\">");    
    //checking number and display
	if(!properties.get("hideNumber",false)) {
		out.write("<ol class=\"carousel-indicators\">");
		for (int i = 0; i < list.size(); i++) {
        	if(i<1){%>
      			<li data-target="#gnbCarousel" data-slide-to="<%=i%>" class="active"></li>
			<% }//end of if
        	else{%>
      			<li data-target="#gnbCarousel" data-slide-to="<%=i%>"></li>
			<%}//end of else
    	}//end of for
    	out.write("</ol>");
    }


	out.write("<div class=\"carousel-inner\" role=\"listbox\">");
        int index = 1;
        for (Object obj_item : list) {
            String title = properties.get(String.format("promoTitle%s", index),"");
            String description = properties.get(String.format("promoDescription%s", index),"");
            String link = "http://www.gnb.ca";
            if (obj_item instanceof String) {
                link= (String)obj_item;
            }
            String imagePath = properties.get(String.format("promoImage%s", index), "none");
            if (obj_item instanceof Page) {
                Page item = (Page) obj_item;
                if (imagePath.equals("none")) {
                    if (item.getContentResource("promoImage") != null) {
                        Image image = new Image(item.getContentResource("promoImage"), "promoImage");
                        if (image.hasContent()) {
                            imagePath = image.getFileNodePath();
                        } else {
                            imagePath = item.getContentResource("promoImage").getPath();
                        }
                    } else if (!item.getProperties().get("promoImageReference", "none").equals("none")) {
                        imagePath = item.getProperties().get("promoImageReference", "none");
                    }
                }
                if (imagePath.equals("none") || imagePath.equals("")) {
                    if (item.getContentResource("thumbnail") != null) {
                        Image image = new Image(item.getContentResource("thumbnail"), "thumbnail");
                        if (image.hasContent()) {
                            imagePath = image.getFileNodePath();
                        } else {
                            imagePath = item.getContentResource("thumbnail").getPath();
                        }
                    } else if (!item.getProperties().get("thumbnailReference", "none").equals("none")) {
                        imagePath = item.getProperties().get("thumbnailReference", "none");
                    }
                }

                if(!Utils.isNotEmpty(title)) title =    item.getProperties().get("promoTitle","");
                if(!Utils.isNotEmpty(title)) title =    item.getNavigationTitle();
                if(!Utils.isNotEmpty(title)) title =    "";
                
                if(!Utils.isNotEmpty(description)) description =    item.getProperties().get("promoDescription","");
                if(!Utils.isNotEmpty(description)) description =    item.getDescription();
                if(!Utils.isNotEmpty(description)) description = "";
                
                link = item.getPath() + ".html";
            } 

            String more = "Read More";
            if (lang.equalsIgnoreCase("fr")) more = "En savoir plus";
            if (description.equalsIgnoreCase("null") || description.length()==0) description=" ";
            if (imagePath.equals("none") || imagePath.equals("")) continue;
         	//end of copy

        	if(index<2){%>
      			<div class="item active">
        			<img src="<%=imagePath%>" class="img-responsive img-rounded" alt="<%=title%>">
        			<div class="carousel-caption">
                        <% //checking title and display
        				if(!properties.get("hideTitle",false)) {
                        	out.write(String.format("<h3><a href=\"%s\">%s</a></h3>", link,title));

        				}
						//checking description and display
        				if(!properties.get("hideDescription",false)) {
            				out.write(String.format("<p class=\"hidden-xs hidden-sm\">%s</p>", description));
        				}
						%>
        			</div>
      			</div>
			<% }//end of if
			else{%>
      			<div class="item">
        			<img src="<%=imagePath%>" class="img-responsive img-rounded" alt="<%=title%>">
        			<div class="carousel-caption">
                        <% //checking title and display
        				if(!properties.get("hideTitle",false)) {
                        	out.write(String.format("<h3><a href=\"%s\">%s</a></h3>", link,title));

        				}
						//checking description and display
        				if(!properties.get("hideDescription",false)) {
            				out.write(String.format("<p class=\"hidden-xs hidden-sm\">%s</p>", description));
        				}
						%>
        			</div>
      			</div>
			<%}//end of else
        index++;            
        }//end of for

    out.write("</div>");
	%>
		<!-- Left and right controls -->
<%if(!properties.get("hideReadMore",false)) {%>
		<a class="left carousel-control  hidden-xs hidden-sm" href="#gnbCarousel" role="button" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
		</a>
		<a class="right carousel-control  hidden-xs hidden-sm" href="#gnbCarousel" role="button" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
		</a>
<%}%>
  <%out.write("</div>");

}//end of if
else{ 
	%><cq:include script="empty.jsp"/><%
}//end of else
%>