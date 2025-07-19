<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="java.util.GregorianCalendar"%>


<%
/**START of try for a whole page**/ 
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
/**START of date type setting**/
	GregorianCalendar now = new GregorianCalendar();

	SimpleDateFormat format_full = new SimpleDateFormat("dd MMMM yyyy", locale);
	SimpleDateFormat format = new SimpleDateFormat("dd MMMMM", locale);
	SimpleDateFormat format_month = new SimpleDateFormat("MMMMM", locale);
	SimpleDateFormat format_day = new SimpleDateFormat("dd", locale);
    SimpleDateFormat format_year = new SimpleDateFormat("yyyy", locale);

	SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yyyy", locale);
	SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);
/**END of date type setting**/


/**START of setting text for English/French**/
    String address_Text = properties.get("address_Text", "");
    if(address_Text.equalsIgnoreCase("")){
    	address_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "address_Text"));
    }
    String pageTitle_Text = properties.get("pageTitle_Text", "");
    if(pageTitle_Text.equalsIgnoreCase("")){
    	pageTitle_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "pageTitle_Text"));
    }
    String date_time_Text = properties.get("date_time_Text", "");
    if(date_time_Text.equalsIgnoreCase("")){
		date_time_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "date_time_Text"));
	}
    String deadline_Text = properties.get("deadline_Text", "");
    if(deadline_Text.equalsIgnoreCase("")){
    	deadline_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "deadline_Text"));
	}




    String description_Text = properties.get("description_Text", "");
	if(description_Text.equalsIgnoreCase("")){
		description_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "description_Text"));
	}
    String email_Text = properties.get("email_Text", "");
	if(email_Text.equalsIgnoreCase("")){
		email_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "email_Text"));
	}
    String event_Text = properties.get("event_Text", "");
	if(event_Text.equalsIgnoreCase("")){
		event_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "event_Text"));
	} 
    String fax_Text = properties.get("fax_Text", "");
    if(fax_Text.equalsIgnoreCase("")){
    	fax_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "fax_Text"));
    }        





    String fee_Text = properties.get("fee_Text", "");
    if(fee_Text.equalsIgnoreCase("")){
    	fee_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "fee_Text"));
    }  
    String ongoing_Text = properties.get("ongoing_Text", "");
    if(ongoing_Text.equalsIgnoreCase("")){
    	ongoing_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "ongoing_Text"));
    }  

    String organization_Text = properties.get("organization_Text", "");
    if(organization_Text.equalsIgnoreCase("")){
    	organization_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "organization_Text"));
    }  

    String region_Text = properties.get("region_Text", "");
    if(region_Text.equalsIgnoreCase("")){
    	region_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "region_Text"));
    }          

    String telephone_Text = properties.get("telephone_Text", "");
    if(telephone_Text.equalsIgnoreCase("")){
    	telephone_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "telephone_Text"));
    }     

    String website_Text = properties.get("website_Text", "");
    if(website_Text.equalsIgnoreCase("")){
    	website_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "website_Text"));
    }     
/**END of setting text for English/French**/



    //declearing variables
    Page itemPage = null;

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
    String configPath="/content/gnb/pcsdp_data/community";
    //Finding path/page where data(properties) were stored!!
    String itemPath = String.format("%s/%s/%s/%s", configPath, selectors[0],selectors[1],selectors[2]);

    itemPage = pageManager.getPage(itemPath);

    //Pulling content from the specified Health Careers item page to be displayed.
    //coding for main part
    if (itemPage != null) {
        ValueMap props = itemPage.getProperties();

/**START of 1st tab (General)**/
        String ongoing  = (String) props.get("ongoing","");
        GregorianCalendar from_date = (GregorianCalendar) props.get("from_date");
		String small_from_date = (String)smallformat.format(from_date.getTime());
        String small_from_month = (String)format_month.format(from_date.getTime());
        String small_from_day = (String)format_day.format(from_date.getTime());
        String small_from_year = (String)format_year.format(from_date.getTime());        

        GregorianCalendar to_date = (GregorianCalendar) props.get("to_date");           
		String small_to_date = (String)smallformat.format(to_date.getTime());
        String small_to_month = (String)format_month.format(to_date.getTime());
        String small_to_day = (String)format_day.format(to_date.getTime());
        String small_to_year = (String)format_year.format(to_date.getTime());        


        String from_date1="";   
        /**starte of ongoing**/        
        if(ongoing.equalsIgnoreCase("yes")){
			from_date1=String.format("%s",ongoing_Text);
        }
		/**end of ongoing**/
        /**starte of non-ongoing**/
        else{
        	if(small_from_date.compareTo(small_to_date)==0){
            	from_date1=String.format("%s",format_full.format(from_date.getTime()));
         	} 
        	else{
            	if(small_from_month.compareTo(small_to_month)==0){
					from_date1=String.format("%s - %s",format_day.format(from_date.getTime()),format_full.format(to_date.getTime()));                   
            	}
            	else{
            		if(small_from_year.compareTo(small_to_year)==0){
						from_date1=String.format("%s - %s",format.format(from_date.getTime()),format_full.format(to_date.getTime()));                   
                	}
                	else{
						from_date1=String.format("%s - %s",format_full.format(from_date.getTime()),format_full.format(to_date.getTime()));                   
                	}
            	}
        	}
        }
		/**end of non-ongoing**/


        String region = (String) props.get("region","");   
        String phone = (String) props.get("phone","");      
        String fax = (String) props.get("fax",""); 
        String email = (String) props.get("email",""); 
/**END of 1st tab (General)**/

/**START of 2nd/3rd tab (English/French)**/
        String event = (String) props.get("event_"+lang,""); 
        String address = (String) props.get("address_"+lang,""); 
        String contact = (String) props.get("contact_"+lang,""); 
        String website = (String) props.get("website_"+lang,""); 

        int websiteIndex=website.indexOf("www.");
        if(website.startsWith("https://")){
            //website=website.substring(websiteIndex);
        }

        String other = (String) props.get("other_"+lang,""); 
        String date_time = (String) props.get("date_time_"+lang,""); 
        String deadline = (String) props.get("deadline_"+lang,""); 
        String fee = (String) props.get("fee_"+lang,""); 
        String description = (String) props.get("description_"+lang,""); 
/**END of 2nd/3rd tab (English/French)**/        
%>
<script type="text/javascript">
    //document.title = "<%=event%>";

    $(document).ready(function() {
        document.title = "<%=event%>";
    });


</script>
<%
/**START of display**/

        //displaying Event
        out.print("<div class='left_contents'>");           

        if(!(event.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+event_Text+"</b> ");
            out.print(event);              
        	out.print("</p>");  
        } 


        //displaying region    
        if(!(region.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+region_Text+"</b> ");
            out.print(region);              
        	out.print("</p>");  
        }         

        //displaying address    
        if(!(address.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+address_Text+"</b> ");
            out.print(address);              
        	out.print("</p>");  
        }         

        //displaying organization    
        if(!(contact.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+organization_Text+"</b> ");
            out.print(contact);              
            out.print("<br/>");  
        	out.print("</p>");  
        	out.print("<br/>");   
        }       

        //displaying phone    
        if(!(phone.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+telephone_Text+"</b> ");
            out.print(phone);              
        	out.print("</p>");  
        }       

        //displaying fax    
        if(!(fax.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+fax_Text+"</b> ");
            out.print(fax);              
        	out.print("</p>");  
        }       
        //displaying email    
        if(!(email.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+email_Text+"</b> ");
			out.print(String.format("<a href=\"mailto:%s\">%s</a>", email,email));                        
        	out.print("</p>");  
        }       

        //displaying website    
        if(!(website.equalsIgnoreCase(""))){
        	out.print("<p>");
        	out.print("<b>"+website_Text+"</b> ");
            //out.print(String.format("<a href=\"http://%s\">%s</a>", website,website));               
            out.print(String.format("<a href=\"%s\">%s</a>", website,website));               
            out.print("<br/>");  
        	out.print("</p>");  
        	out.print("<br/>");   
        }       

        //displaying date_time   
        if(!(date_time.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+date_time_Text+"</b> ");
            out.print(from_date1+", ");               
            out.print(date_time);              
            out.print("</p>");  
        }   

        //displaying registration deadline   
        if(!(deadline.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+deadline_Text+"</b> ");
            out.print(deadline);              
        	out.print("</p>");  
        }   

        //displaying registration fee   
        if(!(fee.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+fee_Text+"</b> ");
            out.print(fee);              
        	out.print("</p>");  
        }   

        //displaying registration fee   
        if(!(description.equalsIgnoreCase(""))){
        	out.print("<p>");
            out.print("<b>"+description_Text+"</b> ");
            out.print("<br/>");              
            out.print(description);              
        	out.print("</p>");  
        }   

        out.print("</div>");
/**END of display**/


     }//end of outer "if (itemPage != null)"

    else{%>
       <cq:include script="empty.jsp" />
    <%
        }//end of else
            //this is chatch for a whole page.
}
/**END of try for a whole page**/

catch (Exception e) {
    log.error("Something bad happened on the Health Careers article", e);
%><cq:include script="empty.jsp" />
<%}//end of catch
%>
