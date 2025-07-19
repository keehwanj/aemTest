<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="java.util.Calendar"%>
<%@page import="org.apache.commons.lang.StringEscapeUtils"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Collections"%>

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
    //declearing variables
    Page abcItemPage = null;
    //getting selectors
    String[] selectors = slingRequest.getRequestPathInfo().getSelectors();

    //specifying data source
    String configABC="/content/gnb/pcsdp_data/community";
    //Finding path/page where data(properties) were stored!!
    String itemPath = String.format("%s/%s/%s/%s", configABC, selectors[0],selectors[1],selectors[2]);
    abcItemPage = pageManager.getPage(itemPath);
    //Pulling content from the specified ABC item page to display.
    //coding for main part
    if (abcItemPage != null) {
        ValueMap props = abcItemPage.getProperties();
        // date setting part
		//date type setting
		GregorianCalendar now = new GregorianCalendar();

		//SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
		SimpleDateFormat format = new SimpleDateFormat("MMMMM dd", locale);
		SimpleDateFormat format_month = new SimpleDateFormat("MMMMM", locale);
		SimpleDateFormat format_day = new SimpleDateFormat("dd", locale);

		SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yyyy", locale);
		SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);



        /**START of setting text for English/French**/
        String address_Text = properties.get("address_Text", "");
        if(address_Text.equalsIgnoreCase("")){
            address_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "address_Text"));
           }
        String date_Text = properties.get("date_Text", "");
        if(date_Text.equalsIgnoreCase("")){
            date_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "date_Text"));
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


        Page configurationPage = Utils.getConfigurationPage(currentPage.getPageManager());       

        //displaying title
        if(props.get("yes_no").equals("No")||props.get("yes_no").equals("no")){  
            out.write("<h2>"+vacancy_for_appointmentText+"</h2>");
        }

        if(props.get("yes_no").equals("Yes")||props.get("yes_no").equals("yes")){  
            out.write("<h2>"+filled_positionText+"</h2>");
        }

        //displaying title
        if (props.get(lang + "_job_title") != null) {
            out.write("<h4>"+props.get(lang + "_job_title").toString()+"</h4>");
            }//end of "if (props.get(lang + "_job_title") != null)"       

        if (props.get(lang + "_job_rank") != null) {
            out.write("<p><b><u>"+props.get(lang + "_job_rank").toString()+"</u></b></p>");
            }//end of "if (props.get(lang + "_job_rank") != null)"       
       
        //for "Yes" - in case of position NOT filled
        if(props.get("yes_no").equals("No")||props.get("yes_no").equals("no")){  
            String body=(String)props.get(lang+"_body", "&nbsp;");
            out.write(body);

            //getting deadline and converting Calendar/String object
            Object deadline = (Object) props.get("deadline");
            Calendar deadline_c = (Calendar) deadline;
            String deadline_s = String.format("%1s", format.format(deadline_c.getTime()));

            String[] selectors1 = deadline_s.split(" ");

            //in case of not date type...
            if((selectors1[2].equals("2020"))&&(selectors1[0].equals("31"))){
                if(lang.equals("en")){
                deadline_s="Open";
                }
                if(lang.equals("fr")){
                deadline_s="Ouvert";
                }
            }       

/*
            //in case of not date type...
            if(deadline_s.equalsIgnoreCase("31 December 2020")){
                deadline_s="Open";
            }

            if(deadline_s.equals("31 d�cembre 2020")){
                deadline_s="Ouvert";
            }       
*/

            out.write("<br />");
            out.write("<p><b>"+deadlineText+"</b>");
            out.write("<p>"+deadline_s+"</p>");
            out.write("<br />");
            out.write("<p><b>"+appointment_typeText+"</b>");
            out.write("<p>"+props.get(lang + "_appointment_type")+"</p>");
            out.write("<br />");       
            out.write("<p><b>"+termText+"</b></p>");

            if (props.get(lang + "_term") != null) {
                out.write("<p>"+props.get(lang + "_term").toString()+"</p>");
                }//end of "if (props.get(lang + "_term") != null)"       
                out.write("<br />");



                //pulling tag


    try {
      out.write("<p><b>"+departmentText+"</b></p>");


        Object[] tags = (Object[]) props.get(lang + "_department");
        TagManager tm = resourceResolver.adaptTo(TagManager.class);
        if (tags != null) {
          for (int i = 0; i < tags.length; i++) {
            String tagValue=(String) tags[i];
            //Tag tag = tm.resolve((String) tags[i]);
            Tag tag = tm.resolve(tagValue);
              if(tag!=null){
            	out.write("<span class=\"post_date\">" + tag.getTitle() + "</span>");
              }  

              else{
            	tagValue="in"+tagValue;
            	//Tag tag = tm.resolve((String) tags[i]);
            	tag = tm.resolve(tagValue);
     			out.write("<span class=\"post_date\">" + tag.getTitle() + "</span>");
              }

            if (i + 1 < tags.length)
              out.write("<br />");
          }
        }


    } catch (Exception ex) {
      log.error("news article data not tagged with a department", ex);
    }




                String email=(String)props.get("email");
                String encoded_email=StringEscapeUtils.escapeHtml(email);
                out.write("<p><b>"+emailText+"</b></p>");

                if (props.get("email") != null) {
                    //email link setting
                    out.write("<p>");
                    out.write(String.format("<a href=\"mailto://%s\">%s</a> ", encoded_email,encoded_email));
                    //out.write("<p><a href=mailto:"+props.get("email").toString()+">");
                    out.write("</p>");
                    }//end of "if (props.get("email") != null)"       
                out.write("<br />");
                out.write("<p><b>"+linkText+"</b></p>");



            }//end of inner "if(props.get("yes_no").equals("No"))"


            }//end of outer "if (abcItemPage != null)"
        
            else{
        %><cq:include script="empty.jsp" />
<%
        }//end of else
            //this is chatch for a whole page.
    }//end of try

    catch (Exception e) {
        log.error("Something bad happened on the ABC article", e);
      %><cq:include script="empty.jsp" />
<%
       }//end of catch
%>