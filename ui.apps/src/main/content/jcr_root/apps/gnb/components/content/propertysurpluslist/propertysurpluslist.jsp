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
/*
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    format = new SimpleDateFormat("MMMM dd, yyyy", locale);
}
*///end of inner if
    
SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yyyy", locale);
SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);

NumberFormat numberFormatter;

//NumberFormat nf = NumberFormat.getCurrencyInstance();
/*start of new code*/
NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.CANADA);
if (locale.getLanguage().equalsIgnoreCase("fr")) {
    nf = NumberFormat.getCurrencyInstance(Locale.CANADA_FRENCH);
}
/*end of new code*/

nf.setMaximumFractionDigits(0);

//setting header text for English/French
String file_Text = properties.get("file_Text", "");
if(file_Text.equalsIgnoreCase("")){
    file_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "file_Text"));
} 

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

String location_Text = properties.get("location_Text", "");
if(location_Text.equalsIgnoreCase("")){
    location_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "location_Text"));
} 

String description_Text = properties.get("description_Text", "");
if(description_Text.equalsIgnoreCase("")){
    description_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "description_Text"));
} 

String pid_Text = properties.get("pid_Text", "");
if(pid_Text.equalsIgnoreCase("")){
    pid_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "pid_Text"));
} 

String pan_Text = properties.get("pan_Text", "");
if(pan_Text.equalsIgnoreCase("")){
    pan_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "pan_Text"));
} 

String area_Text = properties.get("area_Text", "");
if(area_Text.equalsIgnoreCase("")){
    area_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "area_Text"));
} 

String zoning_Text = properties.get("zoning_Text", "");
if(zoning_Text.equalsIgnoreCase("")){
    zoning_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "zoning_Text"));
} 

String buildingSize_Text = properties.get("buildingSize_Text", "");
if(buildingSize_Text.equalsIgnoreCase("")){
    buildingSize_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "buildingSize_Text"));
} 


String registrationInfo_Text = properties.get("registrationInfo_Text", "");
if(registrationInfo_Text.equalsIgnoreCase("")){
    registrationInfo_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "registrationInfo_Text"));
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
                out.print("<table  width='100%'>");

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

                String county = (String) props.get("county",""); 
                double estimate_value=(double)props.get("estimate_value",0); 
                // out.print(estimate_value);              

                String notice_tender = (String) props.get("notice_tender","");
                //String info_sheet = (String) props.get("info_sheet","");                
                //String map = (String) props.get("map","");   
                String[] maps = props.get("maps", String[].class) ;                
                String photo = (String) props.get("photo",""); 
                
                //array for other_doc  
                String[] other_docs = props.get("other_docs", String[].class) ;

                String rotate_photo = (String) props.get("rotate_photo",""); 
                String imageURL = getRendition(resource,rotate_photo);
                imageURL=String.format("<a href=\"%s\"><img class=\"img-responsive img-thumbnail\" src=\"%s\" alt=\"%s\"></a>",href, imageURL , "Title");  
                
                
                //Second/Third tap (english_tender/french_tender)
                String address = (String) props.get("address_"+lang,"");                   
                String title = (String) props.get("title_"+lang,""); 
                String info_sheet_s = (String) props.get("info_sheet_s_"+lang,"");   
                String extra_info = (String) props.get("extra_info_"+lang,""); 
                
                //Fourth tab (general-surplus)
                String file_no  = (String) props.get("file_no","");
                String pid = (String) props.get("pid","");
                String pan = (String) props.get("pan","");                
                
                //Fifth/Sixth tap (english_surplus/french_surplus)
                String area = (String) props.get("area_"+lang,"");   
                String buildingsize = (String) props.get("buildingsize_"+lang,"");                   
                String description = (String) props.get("description_"+lang,"");     
                String zone = (String) props.get("zone_"+lang,""); 
                String regi_info = (String) props.get("regi_info_"+lang,""); 
                String extra_info1 = (String) props.get("extra_info1_"+lang,"");                 


                //First row (Tender No/Title/Estimate Value)
                out.print("<tr><td colspan='2' class='first'>");
             

                if(!(file_no.equalsIgnoreCase(""))){
                    out.print("<div class=\"boldlarge\">");   
                    out.print(String.format("%s%s",file_Text,file_no));  
                    out.print("</div>");     
                    out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");                          
                } 
                if(!(title.equalsIgnoreCase(""))){
                    out.print("<div class=\"boldlarge\">");                   
                    out.print(String.format("%s",title)); 
                    out.print("</div>");                         
                    out.print("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");                           
                } 
                /*
                if(estimate_value!=0.0){
                    out.print("<div class=\"boldlarge\">");                   
                    out.print(String.format("%s%s",estimateValue_Text,nf.format(estimate_value)));                   
                    out.print("</div>");    
                } 
                */                                      
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
                if(!(address.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",location_Text));  
                    out.print("</b>&nbsp;");                    
                    out.print(String.format("%s",address));  
                    out.print("<br/>");    
                }

                if(!(description.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",description_Text));  
                    out.print("</b>&nbsp;");                    
                    out.print(String.format("%s",description));  
                    out.print("<br/>");    
                }

                if(!(pid.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",pid_Text));  
                    out.print("</b>&nbsp;");                    
                    out.print(String.format("%s",pid));  
                    out.print("<br/>");    
                }

                if(!(pan.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",pan_Text));  
                    out.print("</b>&nbsp;");                    
                    out.print(String.format("%s",pan));  
                    out.print("<br/>");    
                }

                if(!(area.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",area_Text));  
                    out.print("</b>&nbsp;");                    
                    out.print(String.format("%s",area));  
                    out.print("<br/>");    
                }

                if(!(buildingsize.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",buildingSize_Text));  
                    out.print("</b>&nbsp;");                    
                    out.print(String.format("%s",buildingsize));  
                    out.print("<br/>");    
                }

                if(!(zone.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",zoning_Text));  
                    out.print("</b>&nbsp;");                    
                    out.print(String.format("%s",zone));  
                    out.print("<br/>");    
                }

                if(!(regi_info.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",registrationInfo_Text));  
                    out.print("</b>&nbsp;");                    
                    out.print(String.format("%s",regi_info));  
                    out.print("<br/>");    
                }

            

                out.print("</td></tr>");

                //Third row (additional info and extra information)
                out.print("<tr><td colspan='2'>");

                if(estimate_value!=0.0){
                    out.print("<div class=\"boldlarge\">");                   
                    out.print(String.format("%s%s",estimateValue_Text,nf.format(estimate_value)));                   
                    out.print("</div>"); 
                    out.print("<br/>");  
                    out.print("<br/>");                          
                    
                }              

                    out.print("<b>");   
                    out.print(String.format("%s",additionalInfo_Text));   
                    out.print("</b>");   
                    out.print("<br/>");  
                /*  
                if(!(notice_tender.equalsIgnoreCase(""))){                
                    tenderNotice_Text=String.format("<a  href=\"%s\">%s</a>",notice_tender,tenderNotice_Text);                
                    out.print(String.format("%s",tenderNotice_Text));                       
                    out.print("&nbsp;&nbsp;&nbsp;");      
                } 
                */
                if(!(info_sheet_s.equalsIgnoreCase(""))){                            
                    String informationSheet_Text1=String.format("<a  href=\"%s\">%s</a>",info_sheet_s,informationSheet_Text);                                    
                    out.print(String.format("%s",informationSheet_Text1));   
                    out.print("&nbsp;&nbsp;&nbsp;");      
                }
                /*
                if(!(map.equalsIgnoreCase(""))){                            
                    map_Text=String.format("<a  href=\"%s\">%s</a>",map,map_Text);
                    out.print(String.format("%s",map_Text));   
                    out.print("&nbsp;&nbsp;&nbsp;");    
                }
                */
        if(maps!=null ){                      
           out.print(String.format("%s",map_Text));   

            try
            {
            //**IMPORTANT Part - creating array no matter what value is.
            //String[] other_docs = properties.get("other_docs", String[].class) ;
                if(maps!=null){

                    for(int i=1;i<maps.length+1;i++){
                        String map_Text1=String.format("<a  href=\"%s\">%s</a>",maps[i-1],i);                                
                        out.print("&nbsp;"+map_Text1+ "&nbsp;");
                    }
                }
            }

            catch(Exception ex){
                log.error("map part is wrong",ex);   
            }
                       
        }
        out.print("&nbsp;&nbsp;&nbsp;");     
                
                if(!(photo.equalsIgnoreCase(""))){      
                    String photo_Text1=String.format("<a  href=\"%s\">%s</a>",photo,photo_Text);
                    out.print(String.format("%s",photo_Text1));                                           
                    out.print("<br/>");    
                }

                if(other_docs!=null ){                                   
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
                    out.print(extra_info1);                   
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