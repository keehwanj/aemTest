<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.wcm.api.components.DropTarget"%>
<%@page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Calendar"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@include file = "/libs/foundation/global.jsp"%>

<%!
protected String getRendition(Resource resource, String assetPath) throws RepositoryException{
  Resource rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.180.180.jpeg");
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.340.340.jpeg");                    
  }
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


<%
//finding the proper language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
%>

<cq:setContentBundle language="<%=lang%>" />

<%
//date type setting

SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);


//setting header text for English/French
String header_1 = properties.get("header_cities", "");
if(header_1.equalsIgnoreCase("")){
    header_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "cities_Text"));
} 

String header_2 = properties.get("header_contact", "");
if(header_2.equalsIgnoreCase("")){
    header_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "contact_Text"));
} 

String header_3 = properties.get("header_mayor", "");
if(header_3.equalsIgnoreCase("")){
    header_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "mayor_Text"));
} 

String header_4 = properties.get("header_councillors", "");
if(header_4.equalsIgnoreCase("")){
    header_4=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "councilors_Text"));
} 

String telephone_Text = properties.get("telephone_Text", "");
if(telephone_Text.equalsIgnoreCase("")){
    telephone_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "telephone_Text"));
} 

String fax_Text = properties.get("fax_Text", "");
if(fax_Text.equalsIgnoreCase("")){
    fax_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "fax_Text"));
} 

String nb_Text = properties.get("nb_Text", "");
if(nb_Text.equalsIgnoreCase("")){
    nb_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "nb_Text"));
} 

String renderer_page = properties.get("renderer_page", "");



WCMMode mode = WCMMode.fromRequest(request);


%>

<%
//  }

    /** BUG FIX: If the parent Page is not defined, the list returns empty 
    This is because, List.java defaults the empty parentPage to retrieve relativeParent(3) which
    might not always be right incase this component is deep down the hierarchy
    This fix, sets the parentPagePath to currentPage if the path is not defined
    through the dialog 
     */

    try {
        String path = properties.get("parentPage", "");
        if (path.equals("")) {
            currentNode.setProperty("parentPage", currentPage.getPath());
            currentNode.save();
        }
    } catch (Exception e) {
    }

    // initialize the list
%>
<cq:include script="init.jsp" /> 
<%
    List list = (List) request.getAttribute("list");
    //out.write("<div>");
        //  out.write("<ul>");
    
    if (!list.isEmpty()) {
        WCMMode includemode = WCMMode.DISABLED.toRequest(request);
        try {
            Iterator<Page> items = list.getPages();
            //table header part
            //in case of position not filled(yes_no=no)
                /*
                out.write("<table><tr>");
                out.write("<td width='35%'>");
                out.write(header_1);
                out.write("</td>");
                out.write("<td width='65%'>");
                out.write(header_2);
                out.write("</td></tr>");
                */

                out.write("<table>");

                
                //out.write("</table>");
                //out.write("<table>");

            while (items.hasNext()) {
                Page item = items.next();
                String itemPath = item.getPath();
                Page itemPage = pageManager.getPage(itemPath);
                ValueMap props = itemPage.getProperties();

                String[] selectors = itemPage.getPath().split("/");
                String href="";
                
                if(selectors.length>0){
                    String selector = String.format("%s.%s.%s.html", selectors[4], selectors[5], selectors[6]);
                    //setting the default rederering pages 
                    if(renderer_page.equalsIgnoreCase("")){
                        if(lang.equalsIgnoreCase("en")){
                            renderer_page = "/content/gnb/en/corporate/abc/current_opportunities/abc_renderer";
                        }
                        else{
                            renderer_page = "/content/gnb/fr/corporate/abc/perspectives_actuelles/abc_renderer";
                        }

                    }
                    href = String.format("%s.%s", renderer_page, selector);
                }

                //First tab (general-tender)
                String rank  = (String) props.get("rank","");
                String kind = (String) props.get("kind","");
                String tender_no = (String) props.get("tender_no","");                
                String closing_date = (String) props.get("closing_date","");   
                String address = (String) props.get("address","");      
                String county = (String) props.get("county",""); 
                String estimate_value  = (String) props.get("estimate_value","");
                String notice_tender = (String) props.get("notice_tender","");
                String info_sheet = (String) props.get("info_sheet","");                
                String map = (String) props.get("map","");   
                String photo = (String) props.get("photo",""); 
                
                String imageURL = getRendition(resource,photo);
                 imageURL=String.format("<a href=\"%s\"><img src=\"%s\" alt=\"%s\"></a>",renderer_page, imageURL , "Title");  
                
                //array for other_doc  
                String[] other_doc = props.get("other_doc", String[].class) ;
                String rotate_photo = (String) props.get("rotate_photo",""); 

                
                //Second/Third tap (english_tender/french_tender)
                String title = (String) props.get("title_"+lang,""); 
                String extra_info = (String) props.get("extra_info_"+lang,""); 
                
                //Fourth tab (general-surplus)
                String file_no  = (String) props.get("file_no","");
                String pid = (String) props.get("pid","");
                String pan = (String) props.get("pan","");                
                String area = (String) props.get("area","");   

                //Fifth/Sixth tap (english_surplus/french_surplus)
                String zone = (String) props.get("zone_"+lang,""); 
                String regi_info = (String) props.get("regi_info_"+lang,""); 
                String extra_info1 = (String) props.get("extra_info1_"+lang,"");                 





                                                                                
                //First column (Cities)
                out.write("<tr><td width='34%'>");
                if(!(imageURL.equalsIgnoreCase(""))){
                    out.write(imageURL);              
                    out.write("<br/>");  
                } 
                
                //Forth column (Councillors)                
                out.write("</td><td width='66%'>");
                if(!(rank.equalsIgnoreCase(""))){
                    out.write(rank);              
                    out.write("<br/>");  
                } 
                                
                out.write("</td></tr>");
            }//end of while

            out.write("</table>"); //end of table
            
            if (list.isPaginating()) {
                 %><cq:include script="pagination.jsp" /><%
            }
        } finally {
            includemode.toRequest(request);
        }



        


    } else {
        //special code to look to the previous sibling in the paragraph container
        //if it is a section title then we assume it is related to this list and hide it
        //Node currentNode;

        out.write("<table><tr>");
        out.write("<th width='35%'>");
        out.write(header_1);
        out.write("</th>");
        out.write("<th width='65%'>");
        out.write(header_2);
        out.write("</th>");
   

        //out.write("</table>"); //end of table                

 
        out.write("<tr>");
        out.write("<td colspan='4'>");
 %><cq:include script="empty.jsp" /> 
 <%
        out.write("</td>");
        out.write("</tr>");
        out.write("</table>");
}
%>