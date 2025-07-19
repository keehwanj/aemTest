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
  Resource rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.340.340.jpeg");     
  
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.thumbnail.319.319.png");  
  }
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.180.180.jpeg");
                 
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
/*
      String itemDate = "";
      Calendar newDate = metadata.getProperty(Multimedia.NEW_DATE.toString()).getDate();
      if (newDate != null) {
        if ("fr".equals(lang)) {
          itemDate = DateFormat.getDateInstance(DateFormat.LONG, Locale.FRENCH).format(newDate.getTime());
        } else {
          itemDate = DateFormat.getDateInstance(DateFormat.LONG).format(newDate.getTime());
        }
      }
*/
SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    format = new SimpleDateFormat("MMMM dd, yyyy", locale);
}//end of inner if

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


//EXTRA
String file_Text = properties.get("file_Text", "");
if(file_Text.equalsIgnoreCase("")){
    file_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "file_Text"));
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
String renderer_tender = properties.get("renderer_tender", "");
String renderer_surplus = properties.get("renderer_surplus", "");

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

        out.print("<script type=\"text/javascript\">");
        out.print("jQuery(document).ready(function($) {");
        out.print("var promo = $('#rotation');");
        out.print("promo.cycle({");
        out.print("fx: 'fade',");
        out.print("sync: 'false',");
        out.print("speed: '400',");
        out.print("timeout: '10000',");
        out.print("pager: '#pageLinks1',");
        out.print("activePagerClass: 'activeSlide'");
        out.print("});");
             
        out.print("if( promo && promo.children().length == 1 ) {");
        out.print("$(promo.children()[0]).show();");
        out.print("}");
        
        out.print("});");
        out.print("</script>");

        out.print("<ul id=\"rotation\">");
    

        WCMMode includemode = WCMMode.DISABLED.toRequest(request);
        try {
            Iterator<Page> items = list.getPages();
            //out.print("<table>");
        int index = 1;
            while (items.hasNext()) {
                Page item = items.next();
                String itemPath = item.getPath();
                Page itemPage = pageManager.getPage(itemPath);
                ValueMap props = itemPage.getProperties();

                String[] selectors = itemPage.getPath().split("/");
                String href="";
                


                //First tab (general-tender)
                String rank  = (String) props.get("rank","");
                String kind = (String) props.get("kind","");
                String tender_no = (String) props.get("tender_no","");  
                GregorianCalendar closing_date = (GregorianCalendar) props.get("closing_date");                              
 
                String county = (String) props.get("county",""); 
                double estimate_value=(double)props.get("estimate_value",0);   
                

                String notice_tender = (String) props.get("notice_tender","");
                //String info_sheet = (String) props.get("info_sheet","");                
                //String map = (String) props.get("map","");   
                String[] maps = props.get("maps", String[].class) ;
                                
                String photo = (String) props.get("photo",""); 
                
                if(selectors.length>0){
                    String selector = String.format("%s.%s.%s.html", selectors[4], selectors[5], selectors[6]);

                    //setting the default rederering pages for each
                    if(kind.equalsIgnoreCase("tender")){
                        if(renderer_tender.equalsIgnoreCase("")){                        
                           if(lang.equalsIgnoreCase("en")){
                                renderer_tender = "/content/gnb/en/departments/dti";
                            }
                            else{
                                renderer_tender = "/content/gnb/fr/ministeres/mti";
                            }

                        }
                    
                        href = String.format("%s.%s", renderer_tender, selector);
                    }

                    if(kind.equalsIgnoreCase("surplus")){
                        if(renderer_surplus.equalsIgnoreCase("")){                        
                           if(lang.equalsIgnoreCase("en")){
                                renderer_surplus = "/content/gnb/en/departments/dti";
                            }
                            else{
                                renderer_surplus = "/content/gnb/fr/ministeres/mti";
                            }

                        }
                        href = String.format("%s.%s", renderer_surplus, selector);                    

                    }

                }
                
                //array for other_doc  
                String[] other_docs = props.get("other_docs", String[].class) ;
                String rotate_photo = (String) props.get("rotate_photo",""); 
                String imageURL = getRendition(resource,rotate_photo);
                //out.print(imageURL);
                //out.print("<br/>");                
                imageURL=String.format("<a href=\"%s\"><img src=\"%s\" alt=\"%s\"></a>",href, imageURL , "Title");  
                
                //Second/Third tap (english_tender/french_tender)
                String address = (String) props.get("address_"+lang,"");                      
                String title = (String) props.get("title_"+lang,""); 
                String info_sheet = (String) props.get("info_sheet"+lang,"");     
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



                out.print("<li>");

                
                out.print("<div class=\"leftcontent\">");//start of leftcontent                                
                if(!(imageURL.equalsIgnoreCase(""))){
                    out.print("<div class=\"imagecontainer1\">");
                    out.print(imageURL);      
                    //out.print("<br/>");    
                    out.print("</div>");                    
                } 
                out.print("</div>");//end of leftcontent      
                 
                out.print("<div class=\"rightcontent\">"); //start of right content   

            //START of TENDER
            if(kind.equalsIgnoreCase("tender")){
                if(!(tender_no.equalsIgnoreCase(""))){
                    out.print("<div class=\"boldlarge\">");                
                    out.print(String.format("%s%s",tenderNo_Text,tender_no));  
                    out.print("</div>");                                       
                    out.print("<br/>");     
                    out.print("<br/>");                         
                }                  
                
                if(!(title.equalsIgnoreCase(""))){
                    out.print("<div class=\"boldlarge\">");                
                    out.print(String.format("%s",title));   
                    out.print("<br/>");         
                    out.print("</div>");   
                    out.print("<br/>");     
                }  

                if(!(address.equalsIgnoreCase(""))){
                    out.print(String.format("%s",address));   
                    out.print("<br/>");                        
                } 

                if(!(county.equalsIgnoreCase(""))){
                    //start of modification
                    //English
                    if (locale.getLanguage().equalsIgnoreCase("en")) {
                        out.print(String.format("%s %s",county,county_Text));   
                    }//end of inner if    

                    //French
                    if (locale.getLanguage().equalsIgnoreCase("fr")) {
                        out.print(String.format("%s %s",county_Text,county));   
                    }//end of inner if        
                    //end of modification
                    out.print("<br/>");    
                    out.print("<br/>");                                            
                }                 


                if(estimate_value!=0.0){
                    out.print("<b>");                       
                    out.print(String.format("%s%s",estimateValue_Text,nf.format(estimate_value)));   
                    out.print("</b>");                       
                    out.print("<br/>");                          
                }   
/*
                    out.print("<b>");                       
                    out.print(String.format("%s%s",estimateValue_Text,nf.format(estimate_value)));   
                    out.print("</b>");                       
                    out.print("<br/>");                                               
*/
                    out.print("<b>");                     
                    out.print(String.format("%s %s",closingDate_Text,format.format(closing_date.getTime())));   
                    out.print("</b>");                       
                    out.print("<br/>");    

               
            }//END of TENDER

             //START of SURPLUS
            if(kind.equalsIgnoreCase("surplus")){                   
                if(!(file_no.equalsIgnoreCase(""))){
                    out.print("<div class=\"boldlarge\">");   
                    out.print(String.format("%s%s",file_Text,file_no));  
                    out.print("</div>");     
                    out.print("<br/>");                      
                } 

                if(!(title.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",title)); 
                    out.print("</b>");                            
                    out.print("<br/>");                                  
                } 


                if(estimate_value!=0.0){
                    out.print("<b>");                    
                    out.print(String.format("%s",estimateValue_Text));  
                    out.print("</b>");
                    out.print(String.format("%s",nf.format(estimate_value)));  
                    out.print("<br/>");                        
                    out.print("<br/>");                           
                }                  
                                     

                
                if(!(address.equalsIgnoreCase(""))){
                    out.print(String.format("%s",address));  
                    out.print("<br/>");    
                    out.print("<br/>");                        
                }

/*
                if(!(description.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",description_Text));  
                    out.print("</b>");                    
                    out.print(String.format("%s",description));  
                    out.print("<br/>");    
                }
*/

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
                    out.print("</b>");                    
                    out.print(String.format("%s",pan));  
                    out.print("<br/>");    
                }

                if(!(area.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",area_Text));  
                    out.print("</b>");                    
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
                    out.print("</b>");                    
                    out.print(String.format("%s",zone));  
                    out.print("<br/>");    
                }

/*
                if(!(regi_info.equalsIgnoreCase(""))){
                    out.print("<b>");                    
                    out.print(String.format("%s",registrationInfo_Text));  
                    out.print("</b>");                    
                    out.print(String.format("%s",regi_info));  
                    out.print("<br/>");    
                }
*/                
                            
            }//END of SURPLUS


                out.print("</li>");
                index++;                
            }//end of while



            //out.print("</table>"); //end of table
            /*
            if (list.isPaginating()) {
                 %><cq:include script="pagination.jsp" /><%
            }
            */
            
            out.print("</ul><!-- #rotation -->");
            //numbering
            out.write("<div id=\"pageLinks1\"></div>");               
            
        } finally {
            includemode.toRequest(request);
        }


    } else {
        out.print("<table><tr><td class='first'>");%>
        <cq:include script="empty.jsp" /> 
    <%  out.print("</td></tr></table>");
      }
    %>