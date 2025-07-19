<%@ page import="com.day.cq.wcm.api.WCMMode,com.day.cq.wcm.api.components.DropTarget,com.day.cq.wcm.foundation.List,java.util.Iterator,com.day.cq.wcm.api.Page"%>
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
    
    /*checking for big image*/
    boolean bigSize=properties.get("bigSize",false);
    
    
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
        out.write("<script type=\"text/javascript\">");
        out.write("jQuery(document).ready(function($) {");

        out.write("var promo = $('#gnbpromo');");
        /*for big image*/
        if(bigSize){
            out.write("var promo = $('#gnbpromo_big');");
        }

        out.write("promo.cycle({");
        out.write("fx: 'fade',");
        out.write("sync: 'false',");
        out.write("speed: '400',");
        out.write("timeout: '5000',");
        out.write("pager: '#pageLinks',");
        out.write("activePagerClass: 'activeSlide'");
        out.write("});");
             
        out.write("if( promo && promo.children().length == 1 ) {");
        out.write("$(promo.children()[0]).show();");
        out.write("}");
        
        out.write("});");
        out.write("</script>");

        /*for big image*/
        if(bigSize){
            out.write("<ul id=\"gnbpromo_big\">");
        }
        else{
            out.write("<ul id=\"gnbpromo\">");
        }
        
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

        /*for big image*/
        if(bigSize){
            out.write("</ul><!-- #gnbpromo_big -->");
        }
        else{
            out.write("</ul><!-- #gnbpromo -->");
        }


        if(!properties.get("hideNumber",false)) {
            out.write("<div id=\"pageLinks\"></div>");
        }
    } else {
%>
<cq:include script="empty.jsp"/><%
    }
%>