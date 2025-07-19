<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>

<%@page import="org.apache.commons.lang.StringEscapeUtils"%>

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
<%	String newTitle="";
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

    String email_Text = properties.get("email_Text", "");
    if(email_Text.equalsIgnoreCase("")){
        email_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "email_Text"));
    } 

    String nb_Text = properties.get("nb_Text", "");
    if(nb_Text.equalsIgnoreCase("")){
        nb_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "nb_Text"));
    }

    String address_Text = properties.get("address_Text", "");
    if(address_Text.equalsIgnoreCase("")){
        address_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "address_Text"));
    }

    String language_Text = properties.get("language_Text", "");
    if(language_Text.equalsIgnoreCase("")){
        language_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "language_Text"));
    }

    String county_Text = properties.get("county_Text", "");
    if(county_Text.equalsIgnoreCase("")){
        county_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "county_Text"));
    }

    //new field added on 2020-8-17
    String description_Text = properties.get("description_Text", "");
    if(description_Text.equalsIgnoreCase("")){
        description_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "description_Text"));
    }

    //setting the default image
    String default_image = properties.get("default_image", "");
    if(default_image.equals("")){
        default_image="/content/dam/gnb/Gateways/Promos/broadband-promo.jpg/_jcr_content/renditions/cq5dam.web.600.400.jpeg";
    }
    else{
        default_image=default_image+"/_jcr_content/renditions/cq5dam.web.600.400.jpeg";    
    }//end of setting the default image  


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
    String configLG="/content/gnb/lg-data";
    //Finding path/page where data(properties) were stored!!
    String itemPath = String.format("%s/%s/%s/%s", configLG, selectors[0],selectors[1],selectors[2]);

    hcItemPage = pageManager.getPage(itemPath);
    
    //Pulling content from the specified Health Careers item page to be displayed.
    //coding for main part
    if (hcItemPage != null) {
        ValueMap props = hcItemPage.getProperties();

        //First column (Cities)
        String cities  = (String) props.get(lang + "_city","");
        String address = (String) props.get(lang + "_address","");
        String address1 = (String) props.get(lang + "_address1","");                
        String address2 = (String) props.get(lang + "_address2","");   
        String city = (String) props.get(lang + "_city","");      
        String postal_code = (String) props.get(lang + "_postal_code",""); 
                
        //Second column (Contact)
        String telephone = (String) props.get("telephone",""); 
        String fax = (String) props.get("fax",""); 
        String email = (String) props.get("email",""); 
        String homepage = (String) props.get(lang + "_homepage",""); 
        int homepageIndex=homepage.indexOf("www.");
        String homepage_text ="" ; 
        if(homepage.startsWith("http://")){
            if(homepageIndex!=-1){
				homepage_text=homepage.substring(homepageIndex);
            }else{
				homepage_text=homepage;
            }

        }
                
        //Third column (Contact)
        String mayor = (String) props.get("mayor",""); 
                
        //Forth column (Councilors)
        String[] councilors = props.get("councillors", String[].class) ;

        //community image
        //Utils.isNotEmpty(props.get("mediaAssetRef", "")
        String community_image = (String) props.get("community_image","");  

        String working_language = (String) props.get("working_language","");  

        //county
        String county = (String) props.get("county","");    

        //description
        String description  = (String) props.get(lang + "_description","");

        //displaying Page Header
        %>
        <div class="pageHeader">
        <%//Generating the title
        out.print(String.format("<h1>%s</h1>", currentPage.getTitle()+" - "+props.get(lang+"_community_name","not title")));
        newTitle=props.get(lang + "_community_name","not title").toString();
        %>
        </div>

		<!--START of changing document title-->
		<script type="text/javascript">
    		$(document).ready(function() {
        		newTitle1=document.title;
                document.title = "<%=newTitle%> - "+newTitle1;
    		});
		</script>
		<!--END of changing document title-->

        <%

        //displaying title and description, Utils.isNotEmpty(moreLinkText)
        out.print("<div class='image'>");             
        if (community_image.equals("")) {
        %>
            <img class="img-rounded img-responsive" title="" alt=" " src="<%=default_image%>">           
        <%
        }
        else
        {
        %>
            <img class="img-rounded img-responsive" title="" alt=" " src="<%=props.get("community_image")+"/jcr:content/renditions/cq5dam.web.600.400.jpeg"%>">        
             
        <%
        }//end of inner if
        out.print("</div>");             

%>
 <div class="row">
    <div class="col-xs-6">
<%
        //START of class=left_contents
        out.print("<div class='left_contents'>");           
        out.print("<p>");
        out.print("<b>"+address_Text+"</b><br/>");
        if(!(address.equalsIgnoreCase(""))){
            out.print(address);              
            out.print("<br/>");  
        } 
        if(!(address1.equalsIgnoreCase(""))){
            out.print(address1);              
            out.print("<br/>");  
        } 
        if(!(address2.equalsIgnoreCase(""))){
            out.print(address2);              
            out.print("<br/>");  
        } 
        if(!(city.equalsIgnoreCase(""))){
            out.print(city);              
            out.print(", ");  
            out.print(nb_Text);  
            out.print(" ");  
            out.print(postal_code);   
        }        
        out.print("</p>");  
        out.print("<br/>");   

        //displaying County    
        if(!(county.equalsIgnoreCase(""))){
        out.print("<p>");
        out.print("<b>"+county_Text+"</b><br/>");
            out.print(county);              
            out.print("<br/>");  
        out.print("</p>");  
        out.print("<br/>");   
        }         
                     
        //displaying Contacts
        out.print("<p>");
        out.print("<b>"+header_2+"</b><br/>");
        if(!(telephone.equalsIgnoreCase(""))){
            out.print(telephone_Text);  
            out.print(telephone);              
            out.print("<br/>");  
        } 
        if(!(fax.equalsIgnoreCase(""))){
            out.print(fax_Text);  
            out.print(fax);              
            out.print("<br/>");  
        } 
        if(!(email.equalsIgnoreCase(""))){
            out.print(email_Text);  
            //out.print(String.format("<a href=\"mailto://%s\">%s</a>",email,email));               
            //out.print(String.format("<a href=\"%s\">%s</a>",email,email));      
            //out.print(email);              
            out.print(String.format("<a href=\"mailto:%s\">%s</a>",email,email));  
            out.print("<br/>");  
        } 
              
        if(!(homepage.equalsIgnoreCase(""))){
            out.print("<br/>");  
            out.print(String.format("<a href=\"%s\">%s</a>",homepage,homepage_text));                        
            out.print("<br/>");  
            out.print("<br/>");   
        } 
        out.print("</p>");  

        //displaying Working Language    
        out.print("<p>");
        out.print("<b>"+language_Text+"</b><br/>");
        if(!(working_language.equalsIgnoreCase(""))){
            out.print(String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, working_language)));              
            out.print("<br/>");  
        } 
        out.print("</p>");  
        out.print("</div>");
        //END of class=left_contents


%>

    </div>
    <div class="col-xs-6">
<%
        //START of class=right_contents
        out.print("<div class='right_contents'>");               
        out.print("<p>");
        out.print("<b>"+header_3+"</b><br/>");
        if(!(mayor.equalsIgnoreCase(""))){
            out.print(mayor);              
            out.print("<br/>");  
        } 
        out.print("</p>");  
        out.print("<br/>");   
        
        //displaying Councilors
        out.print("<p>");
        out.print("<b>"+header_4+"</b><br/>");
        try
        {
        //**IMPORTANT Part - creating array no matter what value is.
            if(councilors!=null) 
            {
                for(int i=0;i<councilors.length;i++) 
                {
                    out.print(councilors[i] + "<br />");
                }
            }
        }
        catch(Exception ex) 
        {
            log.error("Councilor's part is wrong",ex);   
        }
        //end of forth column(Councillors)
        out.print("</p>");   




        out.print("</div>");
		//END of class=right_contents

%>

    </div>
  </div>
 <div class="row">
    <div class="col-xs-12">
        <%
        //displaying description    
        if(!(description.equalsIgnoreCase(""))){
            out.print("<br/>");  
            out.print("<p>");
        	out.print("<b>"+description_Text+"</b>");
            out.print(description);              
            out.print("<br/>");  
            out.print("</p>");  
        	out.print("<br/>");   
        }                   
         %>
    </div>
  </div>
<%
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