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

<!--[if lte IE 9 ]>   <link href="/etc/designs/gnb-bootstrap/clientlibs/css/ie8.css" rel="stylesheet" type="text/css">   <![endif]-->


<%
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
%>

<%
ArrayList<Object> list = new ArrayList<Object>();
//**IMPORTANT Part - creating array no matter what value is.
String[] destinations    = properties.get("destinations", String[].class) ;
String[] images          = properties.get("images", String[].class) ;  
String[] titles          = properties.get("titles", String[].class) ;    
String[] descriptions    = properties.get("descriptions", String[].class) ;   
String[] buttons		 = properties.get("buttons", String[].class) ;  
//out.print(images.length);
int destinations_length	=0;
int images_length		=0;
int titles_length		=0;
int descriptions_length	=0;
int buttons_length		=0;
//setting length
if(destinations!=null){
    destinations_length	=	destinations.length;
} 
if(images!=null){
    images_length		=	images.length;
} 
if(titles!=null){
    titles_length		=	titles.length;
} 
if(descriptions!=null){
    descriptions_length	=	descriptions.length;
} 
if(buttons!=null){
    buttons_length		=	buttons.length;
} 

//finding min value
int[] data = {destinations_length,images_length,titles_length,descriptions_length,buttons_length};
int max = Integer.MIN_VALUE; 
int min = Integer.MAX_VALUE;
for(int i=0;i<data.length;i++){
	//Max
	if(data[i] > max){
		max = data[i];
	}
	//Min
	if(data[i] < min){  
		min = data[i];
	}
}


for (int i = 0; i < min; i++) {
    String destination=destinations[i];
    Page p = currentPage.getPageManager().getPage(destination);
    if (p != null) {
        list.add(p);
    } else if (destinations.length > 0) {
        list.add(destinations[i]);
    }
}

//rendition
String rendition_48="/jcr:content/renditions/cq5dam.thumbnail.48.48.jpeg";
String rendition_140="/jcr:content/renditions/cq5dam.thumbnail.140.100.jpeg";
String rendition_180="/jcr:content/renditions/cq5dam.web.180.180.jpeg";
String rendition_319="/jcr:content/renditions/cq5dam.thumbnail.319.319.jpeg";
String rendition_340="/jcr:content/renditions/cq5dam.web.340.340.jpeg";
String rendition_640="/jcr:content/renditions/cq5dam.web.640.400.jpeg";
String rendition_1280="/jcr:content/renditions/cq5dam.web.1280.1280.jpeg";

if (!list.isEmpty()) {
  out.write("<div id=\"bs4-slide-carousel\" class=\"carousel slide\" data-ride=\"carousel\">");
    //checking number and display
	if(!properties.get("hideNumber",false)) {
        out.write("<span class=\"d-none d-md-block\">");
		out.write("<ol class=\"carousel-indicators\">");
		for (int i = 0; i < list.size(); i++) {
        	if(i<1){%>
      			<li data-target="#bs4-slide-carousel" data-slide-to="<%=i%>" class="active"></li>
			<% }//end of if
        	else{%>
      			<li data-target="#bs4-slide-carousel" data-slide-to="<%=i%>"></li>
			<%}//end of else
    	}//end of for
    	out.write("</ol>");
        out.write("</span>");
    }

	out.write("<div class=\"carousel-inner\" >");
        int index = 1;
		for (Object obj_item : list) {
        //start of copy    
        String title 		= titles[index-1];
        String description 	= descriptions[index-1];
        String button 		= buttons[index-1];    
        String link 		= "http://www.gnb.ca";
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
            }//end of if
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
            }//end of if

            if(!Utils.isNotEmpty(title)) title =    item.getProperties().get("promoTitle","");
            if(!Utils.isNotEmpty(title)) title =    item.getNavigationTitle();
            if(!Utils.isNotEmpty(title)) title =    "";

            if(!Utils.isNotEmpty(description)) description =    item.getProperties().get("promoDescription","");
            if(!Utils.isNotEmpty(description)) description =    item.getDescription();
            if(!Utils.isNotEmpty(description)) description = "";

            link = item.getPath() + ".html";
        }//end of if 

        if (description.equalsIgnoreCase("null") || description.length()==0) description=" ";
        if (imagePath.equals("none") || imagePath.equals("")) continue;
         //end of copy


        	if(index<2){%>
      			<div class="carousel-item active">
					<img src="<%=imagePath%>" 
					srcset="<%=imagePath%><%=rendition_340%> 320w, 
							<%=imagePath%><%=rendition_640%> 480w, 
							<%=imagePath%><%=rendition_1280%> 1024w" 
							sizes="(min-width: 1024px) 1024px, 100vw" class="d-inline w-100" alt="<%=title%>">

        			<div class="carousel-caption text-success">
        				<div class="">
                        	<% //checking title and display
        					if(!properties.get("hideTitle",false)) {
                				out.write(String.format("<h1 class=text-light>%s</h1>",title));
        					}
							%>                        
                    	</div>                        

        				<div class="d-none d-md-block">
                        	<% 
							//checking description and display
        					if(!properties.get("hideDescription",false)) {
            					out.write(String.format("<p class=\"text-light hidden-md-down\">%s</p>", description));
        					}

							%>                        
                    	</div> 
        				<div class="">                        
                        	<% 
							//checking button text and display
        					if(!properties.get("hideButton",false)) {
                        		out.write(String.format("<a href=\"%s\" class=\"btn btn-primary btn-sm\" role=\"button\">%s</a>",link ,button));
        					}   
							%>
                    	</div>                           
        			</div>
      			</div>
			<% }//end of if
			else{%>
      			<div class="carousel-item">
					<img src="<%=imagePath%>" 
					srcset="<%=imagePath%><%=rendition_340%> 320w, 
							<%=imagePath%><%=rendition_640%> 480w, 
							<%=imagePath%><%=rendition_1280%> 1024w" 
							sizes="(min-width: 1024px) 1024px, 100vw" class="d-inline w-100" alt="<%=title%>">
        			<div class="carousel-caption text-success">
        				<div class="">
                        	<% //checking title and display
        					if(!properties.get("hideTitle",false)) {
                				out.write(String.format("<h1 class=text-light>%s</h1>",title));
        					}
							%>                        
                    	</div>                        

        				<div class="d-none d-md-block">
                        	<% 
							//checking description and display
        					if(!properties.get("hideDescription",false)) {
            					out.write(String.format("<p class=\"text-light hidden-md-down\">%s</p>", description));
        					}

							%>                        
                    	</div> 
        				<div class="">                        
                        	<% 
							//checking button text and display
        					if(!properties.get("hideButton",false)) {
                        		out.write(String.format("<a href=\"%s\" class=\"btn btn-primary btn-sm\" role=\"button\">%s</a>",link ,button));
        					}  
							%>
                    	</div>   
        			</div>
      			</div>
			<%}//end of else
        index++;            
        }//end of for

    out.write("</div>");
	%>
		<!-- Left and right controls -->
<%if(!properties.get("hideReadMore",false)) {%>
		<a class="carousel-control-prev" href="#bs4-slide-carousel" role="button" data-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#bs4-slide-carousel" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
		</a>
<%}%>
  <%out.write("</div>");

}//end of if
else{ 
	%><cq:include script="empty.jsp"/><%
}//end of else
%>