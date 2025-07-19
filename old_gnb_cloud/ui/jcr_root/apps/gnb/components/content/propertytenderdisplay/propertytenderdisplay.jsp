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
  Resource rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.600.400.jpeg");  

  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.1280.1280.jpg");  
  }
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.340.340.jpeg");                    
  }   
  if(rendition==null) {
     rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.web.180.180.jpeg");      
  }
  if(rendition==null) {
    rendition = resource.getResourceResolver().getResource(assetPath + "/jcr:content/renditions/cq5dam.thumbnail.319.319.png");                    
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
//this is try for a whole page
try {
    String lang = "fr";
    String langSuffix = "_F";
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      langSuffix = "_E";
      lang = "en";
    }//end of inner if
%>

<cq:setContentBundle language="<%=lang%>" />
<%
//date type setting

//SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
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


    //declearing variables
    Page hcItemPage = null;

    //getting value from getParametervalue for selector
    String para_selector=request.getParameter("selector");

    String[] selectors=null;
    if (Utils.isNotEmpty(para_selector)){
        selectors = para_selector.split("/");
    } 
    else{
        selectors = slingRequest.getRequestPathInfo().getSelectors();
    }
        

    
    //getting selectors
    
    //specifying data source
    String configLG="/content/gnb/ti-data";
    //Finding path/page where data(properties) were stored!!
    String itemPath = String.format("%s/%s/%s/%s", configLG, selectors[0],selectors[1],selectors[2]);

    hcItemPage = pageManager.getPage(itemPath);    
    if (hcItemPage != null) {
        ValueMap props = hcItemPage.getProperties();   
        //
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
                
               
        //array for other_doc  
        String[] other_docs = props.get("other_docs", String[].class) ;
        String rotate_photo = (String) props.get("rotate_photo",""); 
        String imageURL = getRendition(resource,rotate_photo);
        //imageURL=String.format("<img src=\"%s\" alt=\"%s\">", imageURL , "Title");  
        imageURL=String.format("<img class=\"img-responsive\" src=\"%s\" alt=\"%s\">", imageURL , "Title");  

        //Second/Third tap (english_tender/french_tender)
        String address = (String) props.get("address_"+lang,"");              
        String title = (String) props.get("title_"+lang,"");
        String info_sheet = (String) props.get("info_sheet_"+lang,"");   
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

     //START OF IF(TENDER)
     if(kind.equalsIgnoreCase("tender")){

        out.print("<table>");
        //Firs row and first column (Image)
        out.print("<tr><td class='first'>");
        if(!(imageURL.equalsIgnoreCase(""))){
            //out.print(imageURL);              
            out.print("<div class=\"imagecontainer img-thumbnail\">");
            out.print(imageURL);      
            out.print("</div>");                    
        } 
        out.print("</td></tr>");  
                              


        //Second row
        //(tenderNO/Title/Estimate value)
        out.print("<tr><td class='first'>");
        if(!(tender_no.equalsIgnoreCase(""))){
            out.print("<div class=\"boldlarge\">");   
            out.print(String.format("%s%s",tenderNo_Text,tender_no));  
            out.print("</div>");     
            out.print("<br/><br/>");  
        } 

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
               
       // if(!(estimate_value.equalsIgnoreCase(null))){
            out.print("<b>");                     
            out.print(String.format("%s %s",closingDate_Text,format.format(closing_date.getTime())));   
            out.print("</b>");                       
            out.print("<br/>");                        
       //}                


        //Additional Info
            out.print("<br/>");            
            out.print("<b>");   
            out.print(String.format("%s",additionalInfo_Text));   
            out.print("</b>");   
            out.print("<br/>");  
  
        if(!(notice_tender.equalsIgnoreCase(""))){                
            String tenderNotice_Text1=String.format("<a  href=\"%s\">%s</a>",notice_tender,tenderNotice_Text);                
            out.print(String.format("%s",tenderNotice_Text1));                       
            out.print("&nbsp;&nbsp;&nbsp;");      
        } 

        if(!(info_sheet.equalsIgnoreCase(""))){                            
            String informationSheet_Text1=String.format("<a  href=\"%s\">%s</a>",info_sheet,informationSheet_Text);                                    
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
                if(other_docs!=null){

                    for(int i=1;i<other_docs.length+1;i++){
                        String otherDoc_Text1=String.format("<a  href=\"%s\">%s</a>",other_docs[i-1],i);                                
                        out.print("&nbsp;"+otherDoc_Text1+ "&nbsp;");
                    }
                }
            }

            catch(Exception ex){
                log.error("Other docs part is wrong",ex);   
            }
                       
        }
        if(!(extra_info.equalsIgnoreCase(""))){  
            out.print("<br/>");   
            out.print("<br/>");            
            out.print("<div class=\"extrainfo\">");                    
            out.print(extra_info);                   
            out.print("</div>");
        }
        
        
        
        out.print("</td></tr>");

    out.print("</table>"); //end of table

  }//END OF IF TENDER


  //STSRT of ELSE
  else{%>
   <cq:include script="empty.jsp" />
  <%}//END of ELSE

    }  
    else{%>
       <cq:include script="empty.jsp" />
    
    <%}  
}//end of try

catch (Exception e) {
    log.error("Something bad happened on the Health Careers article", e);
    %><cq:include script="empty.jsp" />
<%}//end of catch
%>