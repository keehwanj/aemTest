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
    String configABC="/content/gnb/eco_data/abc";
    //Finding path/page where data(properties) were stored!!
    String itemPath = String.format("%s/%s/%s/%s", configABC, selectors[0],selectors[1],selectors[2]);
    abcItemPage = pageManager.getPage(itemPath);
    //Pulling content from the specified ABC item page to display.
    //coding for main part
    if (abcItemPage != null) {
        ValueMap props = abcItemPage.getProperties();
        // date setting part
        SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
        SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yy", locale);

        //setting text for English/French
        String deadlineText = properties.get("deadlineText", "");
        if(deadlineText.equalsIgnoreCase("")){
            deadlineText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "deadline"));
           }
        String departmentText = properties.get("departmentText", "");
        if(departmentText.equalsIgnoreCase("")){
            departmentText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "department"));
            }

        String emailText = properties.get("emailText", "");
        if(emailText.equalsIgnoreCase("")){
            emailText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "email1"));
            }

        String linkText = properties.get("linkText", "");
        if(linkText.equalsIgnoreCase("")){
            linkText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "link1"));
            }

        String termText = properties.get("termText", "");
        if(termText.equalsIgnoreCase("")){
            termText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "term"));
            }

        //String nameText = properties.get("name_s", "");
        //if(termText.equalsIgnoreCase("")){
        String nameText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "name_s"));
        //    }
        String appointment_dateText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "appointment_date"));
        String appointment_typeText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "appointment_type"));


        //for title
        String vacancy_for_appointmentText = properties.get("vacancyText", "");
		if(vacancy_for_appointmentText.equalsIgnoreCase("")){
        	vacancy_for_appointmentText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "vacancy_for_appointment"));
        }
        String filled_positionText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "filled_position"));
        String city_town_village_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "city_town_village"));

       Page configurationPage = Utils.getConfigurationPage(currentPage.getPageManager());       
        
        //displaying title
        if(props.get("yes_no").equals("No")||props.get("yes_no").equals("no")){  
            out.write("<h3>"+vacancy_for_appointmentText+"</h3>");
        }

        if(props.get("yes_no").equals("Yes")||props.get("yes_no").equals("yes")){  
            out.write("<h3>"+filled_positionText+"</h3>");
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
            if((selectors1[2].equals("2030"))&&(selectors1[0].equals("31"))){
                if(lang.equals("en")){
                deadline_s="Open";
                }
                if(lang.equals("fr")){
                deadline_s="Ouvert";
                }
            }       

/*
            //in case of not date type...
            if(deadline_s.equalsIgnoreCase("31 December 2030")){
                deadline_s="Open";
            }

            if(deadline_s.equals("31 d�cembre 2030")){
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

            try
            {       
                //**IMPORTANT Part - creating array no matter what value is.  
                String[] link_text = (String[])props.get(lang+"_link_text", String[].class);
                String[] link = (String[])props.get(lang+"_link", String[].class);
                //out.write(lang);

                if(link_text!=null && link!=null){  
                    for(int i=0;i<link_text.length;i++){
                        //finding CQ5 content and adding ".html" in the end.
                        if(!link[i].isEmpty()&&!link_text[i].isEmpty()){
                            if(link[i].startsWith("/")){
                                  link[i]=link[i]+".html";
                                  }//end of inner if
                                //making link
                            out.write("<p><a href="+link[i]+">");
                            out.write((String)link_text[i]+"</a></p>");
                            }//end of outer if
                        }//end of for loop
                    }//end of "if(link_text!=null && link!=null){ "
                    out.write("<br/>");
                    }//end of try
            catch(Exception ex)
            {
                log.error("Link Text part is wrong",ex);  
                }//end of catch
            }//end of inner "if(props.get("yes_no").equals("No"))"

            //for "Yes" - in case of position filled
            if(props.get("yes_no").equals("yes")||props.get("yes_no").equals("Yes")){ 
                String city_town_village=(String)props.get("city_town_village");
                Object appointment_date = (Object) props.get("appointment_date");
                Calendar appointment_date_c = (Calendar) appointment_date;
                String appointment_date_s = String.format("%1s", format.format(appointment_date_c.getTime()));
                out.write("<p><b>"+nameText+"</b></p>");
                //out.write("appointment_date_s");

                if (props.get(lang + "_person_info") != null) {
                    out.write("<p>"+props.get(lang + "_person_info").toString()+"</p>");
                    //out.write("appointment_date_s");
                    }//end of 'if (props.get(lang + "_term") != null)'       
                out.write("<br />");             

                    //displaying City/Town/Village
                /*    
                if ((city_town_village!= null)||!city_town_village.isEmpty()){
                    out.write("<p><b>"+city_town_village_Text+"</b></p>");                   
                    out.write("<p>"+city_town_village+"</p>");
                    out.write("<br />");   
                    }
                */

                if ((appointment_date_s!= null)||!appointment_date_s.isEmpty()){
                    out.write("<p><b>"+appointment_dateText+"</b></p>");                   
                    out.write("<p>"+appointment_date_s+"</p>");
                    out.write("<br />");
                    }
                }//end of "if(props.get("yes_no").equals("Yes"))"
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