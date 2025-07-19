<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.wcm.api.components.DropTarget"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/wcm/global.jsp"%>
<%
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}

ArrayList<Object> list = new ArrayList<Object>();
//**IMPORTANT Part - creating array no matter what value is.
String[] destinations    = properties.get("destinations", String[].class) ;
String[] images          = properties.get("images", String[].class) ;  
String[] titles          = properties.get("titles", String[].class) ;    
String[] descriptions    = properties.get("descriptions", String[].class) ;   

int destinations_length=0;
if(destinations!=null){
    destinations_length=destinations.length;
} 


for (int i = 0; i < destinations_length; i++) {
    String destination=destinations[i];
/*
    out.println("Destination : "+destinations[i]+"<br/>");   
    out.println("Image : "+images[i]+"<br/>");   
    out.println("Title : "+titles[i]+"<br/>");   
    out.println("Description : "+descriptions[i]+"<br/>");   
*/
    Page p = currentPage.getPageManager().getPage(destination);
    if (p != null) {
        list.add(p);
    } else if (destinations.length > 0) {
        list.add(destinations[i]);
    }
}
/*
out.println("How many data : "+list.size()+"<br/>");   
*/

if (!list.isEmpty()) {
    out.write("<script type=\"text/javascript\">");
    out.write("jQuery(document).ready(function($) {");
    out.write("var promo = $('#gnbpromo_update');");
    out.write("promo.cycle({");
    out.write("fx: 'fade',");
    out.write("sync: 'false',");
    out.write("speed: '400',");
    out.write("timeout: '10000',");
    out.write("pager: '#pageLinks',");
    out.write("activePagerClass: 'activeSlide'");
    out.write("});");
             
    out.write("if( promo && promo.children().length == 1 ) {");
    out.write("$(promo.children()[0]).show();");
    out.write("}");
        
    out.write("});");
    out.write("</script>");

    out.write("<ul id=\"gnbpromo_update\">");
        
    int index = 1;
    for (Object obj_item : list) {
        String title = titles[index-1];
        String description = descriptions[index-1];
        String link = "http://www.gnb.ca";
        if (obj_item instanceof String) {
            link= (String)obj_item;
        }
        String imagePath = images[index-1];
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

        out.write(String.format("<li style=\"background-image: url(%s);\">", imagePath));

        //checking Title and displaying title
        if(!properties.get("hideTitle",false)) {
            out.write(String.format("<h1><a href=\"%s\">%s</a></h1>", link,title));
        }

        if(!properties.get("hideDescription",false)) {
            out.write(String.format("<p>%s</p>", description));
        }

        if(!properties.get("hideReadMore",false)) {
            out.write(String.format("<p><span class=\"more_link_blue\"><a href=\"%s\">%s</a></span></p>", link, more));
        }
        out.write("</li>");

        index++;
    }
    out.write("</ul><!-- #gnbpromo_update -->");
    if(!properties.get("hideNumber",false)) {
        out.write("<div id=\"pageLinks\"></div>");
    }
}//end of if 
    
else {
%>
    <cq:include script="empty.jsp"/><%
}
%>