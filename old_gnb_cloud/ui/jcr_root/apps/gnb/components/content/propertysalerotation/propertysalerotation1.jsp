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
<%@page import="java.text.NumberFormat"%>
<%@page import="java.util.GregorianCalendar"%>

<%@include file = "/libs/foundation/global.jsp"%>

<%!
protected String getRendition(Resource resource, String assetPath) throws RepositoryException{
  Resource rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.180.180.jpeg");
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.thumbnail.319.319.png");  
  }
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.340.340.jpeg");                    
  }   
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.600.400.jpeg");        
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

//SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yyyy", locale);
SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);

NumberFormat numberFormatter;
NumberFormat nf = NumberFormat.getCurrencyInstance();
nf.setMaximumFractionDigits(0);





//setting header text for English/French
String tenderNo_Text = properties.get("tenderNo_Text", "");
if(tenderNo_Text.equalsIgnoreCase("")){
    tenderNo_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "tenderNo_Text"));
} 

String county_Text = properties.get("county_Text", "");
if(county_Text.equalsIgnoreCase("")){
    county_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "county_Text"));
} 

String estimateValue_Text = properties.get("estimateValue_Text", "");
if(estimateValue_Text.equalsIgnoreCase("")){
    estimateValue_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "estimateValue_Text"));
} 

String closingDate_Text = properties.get("closingDate_Text", "");
if(closingDate_Text.equalsIgnoreCase("")){
    closingDate_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "closingDate_Text"));
} 

String additionalInfo_Text = properties.get("additionalInfo_Text", "");
if(additionalInfo_Text.equalsIgnoreCase("")){
    additionalInfo_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "additionalInfo_Text"));
} 

String tenderNotice_Text = properties.get("tenderNotice_Text", "");
if(tenderNotice_Text.equalsIgnoreCase("")){
    tenderNotice_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "tenderNotice_Text"));
} 

String informationSheet_Text = properties.get("informationSheet_Text", "");
if(informationSheet_Text.equalsIgnoreCase("")){
    informationSheet_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "informationSheet_Text"));
} 

String map_Text = properties.get("map_Text", "");
if(map_Text.equalsIgnoreCase("")){
    map_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "map_Text"));
} 

String photo_Text = properties.get("photo_Text", "");
if(photo_Text.equalsIgnoreCase("")){
    photo_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "photo_Text"));
} 

String otherDoc_Text = properties.get("otherDoc_Text", "");
if(otherDoc_Text.equalsIgnoreCase("")){
    otherDoc_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "otherDoc_Text"));
} 


String nodata_Text = properties.get("nodata_Text", "");
if(nodata_Text.equalsIgnoreCase("")){
    nodata_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "nodata_Text"));
} 

//getting/setting the renderer page
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
    //out.print("<div>");
        //  out.print("<ul>");
    
    if (!list.isEmpty()) {
        WCMMode includemode = WCMMode.DISABLED.toRequest(request);
        try {
            Iterator<Page> items = list.getPages();
            out.print("<table>");

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
                            renderer_page = "/content/gnb/en/departments/dti";
                        }
                        else{
                            renderer_page = "/content/gnb/fr/ministeres/mti";
                        }

                    }
                    href = String.format("%s.%s", renderer_page, selector);
                }

                //First tab (general-tender)
                String rank  = (String) props.get("rank","");
                String kind = (String) props.get("kind","");
                String tender_no = (String) props.get("tender_no","");  
                GregorianCalendar closing_date = (GregorianCalendar) props.get("closing_date");                              
 
                String address = (String) props.get("address","");      
                String county = (String) props.get("county",""); 
                double estimate_value=props.get("estimate_value",0);                

                String notice_tender = (String) props.get("notice_tender","");
                String info_sheet = (String) props.get("info_sheet","");                
                String map = (String) props.get("map","");   
                String photo = (String) props.get("photo",""); 
                

                
                //array for other_doc  
                String[] other_docs = props.get("other_docs", String[].class) ;
                String rotate_photo = (String) props.get("rotate_photo",""); 
                String imageURL = getRendition(resource,rotate_photo);
                imageURL=String.format("<a href=\"%s\"><img src=\"%s\" alt=\"%s\"></a>",href, imageURL , "Title");  
                
                //Second/Third tap (english_tender/french_tender)
                String title = (String) props.get("title_"+lang,""); 
                String extra_info = (String) props.get("extra_info_"+lang,""); 
                
                //Fourth tab (general-surplus)
                String file_no  = (String) props.get("file_no","");
                String pid = (String) props.get("pid","");
                String pan = (String) props.get("pan","");                
                String area = (String) props.get("area","");   
                String buildingsize = (String) props.get("buildingsize","");   
                
                
                //Fifth/Sixth tap (english_surplus/french_surplus)
                String description = (String) props.get("description_"+lang,"");     
                String zone = (String) props.get("zone_"+lang,""); 
                String regi_info = (String) props.get("regi_info_"+lang,""); 
                String extra_info1 = (String) props.get("extra_info1_"+lang,"");     

                //First row (Tender No)
                out.print("<tr><td colspan='2' class='first'>");
                if(!(title.equalsIgnoreCase(""))){
                    out.print("<div class=\"boldlarge\">");                
                    out.print(String.format("%s%s",tenderNo_Text,tender_no));  
                    out.print("</div>");                                       
                }                          
                out.print("</td></tr>");

                                                                                
                //Second row and first column (Image)
                out.print("<tr><td width='34%' class='first'>");
                if(!(imageURL.equalsIgnoreCase(""))){
                    //out.print(imageURL);              
                    out.print("<div class=\"imagecontainer\">");
                    out.print(imageURL);      
                    out.print("</div>");                    
                } 
                out.print("</td>");                
                //Second row and second column (all information)
                out.print("<td width='66%' class='first'>");
                if(!(title.equalsIgnoreCase(""))){
                    out.print("<div class=\"boldlarge\">");                
                    out.print(String.format("%s",title));   
                    out.print("</div>");   
                    out.print("<br/>");                        
                } 

                if(!(address.equalsIgnoreCase(""))){
                    out.print(String.format("%s",address));   
                    out.print("<br/>");                        
                } 
                if(!(county.equalsIgnoreCase(""))){
                    out.print(String.format("%s %s",county,county_Text));   
                    out.print("<br/>");    
                    out.print("<br/>");                                            
                } 

               // if(!(estimate_value.equalsIgnoreCase(null))){
                    out.print("<b>");                       
                    out.print(String.format("%s%s",estimateValue_Text,nf.format(estimate_value)));   
                    out.print("</b>");                       
                    out.print("<br/>");                        
               // } 
               
               // if(!(estimate_value.equalsIgnoreCase(null))){
                    out.print("<b>");                     
                    out.print(String.format("%s %s",closingDate_Text,format.format(closing_date.getTime())));   
                    out.print("</b>");                       
                    out.print("<br/>");                        
               //}                

                out.print("</td></tr>");

                //Third row (additional info and extra information)
                out.print("<tr><td colspan='2'>");
                    out.print("<b>");   
                    out.print(String.format("%s",additionalInfo_Text));   
                    out.print("</b>");   
                    out.print("<br/>");  
  
                if(!(notice_tender.equalsIgnoreCase(""))){                
                    tenderNotice_Text=String.format("<a  href=\"%s\">%s</a>",notice_tender,tenderNotice_Text);                
                    out.print(String.format("%s",tenderNotice_Text));                       
                    out.print("&nbsp;&nbsp;&nbsp;");      
                } 

                if(!(info_sheet.equalsIgnoreCase(""))){                            
                    informationSheet_Text=String.format("<a  href=\"%s\">%s</a>",info_sheet,informationSheet_Text);                                    
                    out.print(String.format("%s",informationSheet_Text));   
                    out.print("&nbsp;&nbsp;&nbsp;");      
                }
                if(!(map.equalsIgnoreCase(""))){                            
                    map_Text=String.format("<a  href=\"%s\">%s</a>",map,map_Text);
                    out.print(String.format("%s",map_Text));   
                    out.print("&nbsp;&nbsp;&nbsp;");    
                }
                if(!(photo.equalsIgnoreCase(""))){      
                    photo_Text=String.format("<a  href=\"%s\">%s</a>",photo,photo_Text);
                    out.print(String.format("%s",photo_Text));                                           
                    out.print("<br/>");    
                }

                if(other_docs.length>0){                  
                    out.print(String.format("%s",otherDoc_Text));   

                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        //String[] other_docs = properties.get("other_docs", String[].class) ;
                        if(other_docs!=null) 
                            {

                            for(int i=1;i<other_docs.length+1;i++) 
                                {
                                String otherDoc_Text1=String.format("<a  href=\"%s\">%s</a>",other_docs[i-1],i);                                
                                out.print("&nbsp;"+otherDoc_Text1+ "&nbsp;");
                                }
                            }
                        }

                    catch(Exception ex) 
                    {
                        log.error("Other docs part is wrong",ex);   
                        }

                    out.print("<br/>");   
                    out.print("<br/>");                        
                }
                if(!(extra_info.equalsIgnoreCase(""))){  
                   out.print("<div class=\"extrainfo\">");                    
                    out.print(extra_info);                   
                    out.print("</div>");
                }
                out.print("</td></tr>");
            }//end of while

            out.print("</table>"); //end of table
            
            if (list.isPaginating()) {
                 %><cq:include script="pagination.jsp" /><%
            }
        } finally {
            includemode.toRequest(request);
        }


    } else {
        out.print("<table><tr><td class='first'>");%>
        <cq:include script="empty.jsp" /> 
    <%  out.print("</td></tr></table>");
      }
      %>