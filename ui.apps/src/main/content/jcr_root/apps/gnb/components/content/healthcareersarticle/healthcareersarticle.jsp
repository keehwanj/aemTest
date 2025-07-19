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
<%@page import="java.text.NumberFormat"%>
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
    Page hcItemPage = null;
    //getting selectors
    String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
	String newTitle="";

    //specifying data source
    String configHC="/content/gnb/doh-data";
    //Finding path/page where data(properties) were stored!!
    String itemPath = String.format("%s/%s/%s/%s", configHC, selectors[0],selectors[1],selectors[2]);
    hcItemPage = pageManager.getPage(itemPath);

    //double lengthstudy_from=properties.get("lengthstudy_from",0.0);
    //double lengthstudy_to=properties.get("lengthstudy_to",0.0);

    //double salary_from=properties.get("salary_from",0);
    //double salary_to=properties.get("salary_to",0);

    NumberFormat numberFormatter;
    NumberFormat nf = NumberFormat.getCurrencyInstance();
    nf.setMaximumFractionDigits(0);

    //Pulling content from the specified Health Careers item page to be displayed.
    //coding for main part
    if (hcItemPage != null) {
        ValueMap props = hcItemPage.getProperties();



        //setting text for English/French
        String exiting_field_work_Text = properties.get("exiting_field_work_Text", "");
        if(exiting_field_work_Text.equalsIgnoreCase("")){
            exiting_field_work_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "exiting_field_work"));
           }
        String personal_characteristics_Text = properties.get("personal_characteristics_Text", "");
        if(personal_characteristics_Text.equalsIgnoreCase("")){
            personal_characteristics_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "personal_characteristics"));
            }

        String education_training_Text = properties.get("education_training_Text", "");
        if(education_training_Text.equalsIgnoreCase("")){
            education_training_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "education_training"));
            }

        String education_program_offered_Text = properties.get("education_program_offered_Text", "");
        if(education_program_offered_Text.equalsIgnoreCase("")){
            education_program_offered_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "education_program_offered"));
            }

        String length_study_Text = properties.get("length_study_Text", "");
        if(length_study_Text.equalsIgnoreCase("")){
            length_study_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "length_study"));
            }        

        String licence_certification_Text = properties.get("licence_certification_Text", "");
        if(licence_certification_Text.equalsIgnoreCase("")){
            licence_certification_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "licence_certification"));
            }                

        String helpful_hs_courses_Text = properties.get("helpful_hs_courses_Text", "");
        if(helpful_hs_courses_Text.equalsIgnoreCase("")){
            helpful_hs_courses_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "helpful_hs_courses"));
            }            

        String working_conditions_Text = properties.get("working_conditions_Text", "");
        if(working_conditions_Text.equalsIgnoreCase("")){
            working_conditions_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "working_conditions"));
            }   

        String employment_prospects_Text = properties.get("employment_prospects_Text", "");
        if(employment_prospects_Text.equalsIgnoreCase("")){
            employment_prospects_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "employment_prospects"));
            }           

        String hc_years=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "hc_years"));
        //String very_good=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "very_good"));        


        //displaying title and description
        if (props.get(lang + "_title") != null) {
            out.write("<h4><u>"+props.get(lang + "_title").toString()+"</u></h4>");
            newTitle=props.get(lang + "_title").toString();
		%>
		<!--START of changing document title-->
		<script type="text/javascript">
    		$(document).ready(function() {
        		newTitle1=document.title;
                document.title = "<%=newTitle%> : "+newTitle1;
    		});
		</script>
		<!--END of changing document title-->
		<%
            }     
        if (props.get(lang + "_description") != null) {
            out.write("<p>"+props.get(lang + "_description")+"</p>");
            }     

        //displaying An Exciting Field of Work
        out.write("<br/>");
        out.write("<p><u><b>"+exiting_field_work_Text+"</b></u></p>");
        if (props.get(lang + "_exciting_field") != null) {
            out.write("<p>"+props.get(lang + "_exciting_field")+"</p>");
            }             

        //displaying Personal Characteristics / Skills
        out.write("<br/>");
        out.write("<p><u><b>"+personal_characteristics_Text+"</b></u></p>");
        if (props.get(lang + "_personal_characteristics") != null) {
            out.write("<p>"+props.get(lang + "_personal_characteristics")+"</p>");
            }             

        //displaying Education and Training
        out.write("<br/>");
        out.write("<p><u><b>"+education_training_Text+"</b></u></p>");
        if (props.get(lang + "_education_training") != null) {
            out.write("<p>"+props.get(lang + "_education_training")+"</p>");
            }            

        //displaying program offered in New Brunswick
        out.write("<br/>");
        out.write("<p><u><b>"+education_program_offered_Text+"</b></u></p>");
        if (props.get(lang + "_education_program") != null) {
            out.write("<p>"+props.get(lang + "_education_program")+"</p>");
            }               

        //displaying Length of Study / Training
        out.write("<br/>");
        out.write("<p><u><b>"+length_study_Text+"</b></u></p>");
        if (props.get("lengthstudy_from") != null) {
            double lengthstudy_from=props.get("lengthstudy_from",0.0);
            double lengthstudy_to=props.get("lengthstudy_to",0.0);

            out.write("<p>"+props.get("lengthstudy_from",0.0));
            if(lengthstudy_from!=lengthstudy_to){
                out.write(" - ");            
                out.print(lengthstudy_to);//display "double"
                }  
            out.write(" "+hc_years+"</p>");    

        }

        //displaying licence and certification
        out.write("<br/>");
        out.write("<p><u><b>"+licence_certification_Text+"</b></u></p>");
        if (props.get(lang + "_licence_certification") != null) {
            out.write("<p>"+props.get(lang + "_licence_certification")+"</p>");
            }     

        //displaying helpful high school courses
        out.write("<br/>");
        out.write("<p><u><b>"+helpful_hs_courses_Text+"</b></u></p>");
        if (props.get(lang + "_high_school_courses") != null) {
            out.write("<p>"+props.get(lang + "_high_school_courses")+"</p>");
            }             

        //displaying employment and common working conditions
        out.write("<br/>");
        out.write("<p><u><b>"+working_conditions_Text+"</b></u></p>");
        if (props.get(lang + "_employment") != null) {
            out.write("<p>"+props.get(lang + "_employment")+"</p>");
            }             
        out.write("<br/>");

        //displaying employment prospects
        String good_text=props.get(lang + "_good_text").toString();
        out.write("<p><b><u>"+employment_prospects_Text+"</u>  - "+good_text+"</b></p>");
        if (props.get(lang + "_prospects") != null) {
            out.write("<p>"+props.get(lang + "_prospects")+"</p>");
            }                

     }//end of outer "if (hcItemPage != null)"

    else{%>
       <cq:include script="empty.jsp" />
    <%
        }//end of else
            //this is chatch for a whole page.
}//end of try

catch (Exception e) {
    log.error("Something bad happened on the Health Careers article", e);
%><cq:include script="empty.jsp" />
<%}//end of catch
%>
