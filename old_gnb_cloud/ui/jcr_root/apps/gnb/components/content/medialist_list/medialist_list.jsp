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
//setting Text-Header text for English/French
String titleText = properties.get("titleText", "");
if(titleText.equalsIgnoreCase("")){
    titleText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "titleText"));
} 

String addressText = properties.get("addressText", "");
if(addressText.equalsIgnoreCase("")){
    addressText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "addressText"));
} 

String contactText = properties.get("contactText", "");
if(contactText.equalsIgnoreCase("")){
    contactText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "contactText"));
} 

String languageText = properties.get("languageText", "");
if(languageText.equalsIgnoreCase("")){
    languageText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "languageText"));
} 

//Text 2
String emailText = properties.get("emailText", "");
if(emailText.equalsIgnoreCase("")){
    emailText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "Email"));
    emailText=emailText+" : ";
} 

String phoneText = properties.get("phoneText", "");
if(phoneText.equalsIgnoreCase("")){
    phoneText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "Phone"));
    phoneText=phoneText+" : ";
} 

String faxText = properties.get("faxText", "");
if(faxText.equalsIgnoreCase("")){
    faxText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "Fax"));
    faxText=faxText+" : ";
} 

String cellText = properties.get("cellText", "");
if(cellText.equalsIgnoreCase("")){
    cellText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "Cell"));
    cellText=cellText+" : ";
} 

String websiteText = properties.get("websiteText", "");
if(websiteText.equalsIgnoreCase("")){
    websiteText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "Web Site"));
    websiteText=websiteText+" : ";
} 


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
    
    if (!list.isEmpty()) {
        WCMMode includemode = WCMMode.DISABLED.toRequest(request);
        try {
            Iterator<Page> items = list.getPages();
            //table header part
            //in case of position not filled(yes_no=no)
                out.print("<div class=\"table-responsive\">");
                out.print("<table class=\"table table-striped table-bordered table-hover\"><tr>");
                out.print("<th width='25%'>");
                out.print(titleText);//company name
                out.print("</th>");

                out.print("<th width='32%'>");
                out.print(addressText); //last name, first name
                out.print("</th>");

                out.print("<th width='33%'>");
                out.print(contactText);//phone no
                out.print("</th>");

                out.print("<th width='10%'>");
                out.print(languageText);//type
                out.print("</th></tr>");
                
                //out.print("</table>");
                //out.print("<table>");

            while (items.hasNext()) {
                Page item = items.next();
                String itemPath = item.getPath();
                Page itemPage = pageManager.getPage(itemPath);
                ValueMap props = itemPage.getProperties();

                //First column (General 1)
                String type  = (String) props.get("type","");
                String language_use  = (String) props.get("language_use","");           
                //out.println(language_use);     
                String street  = (String) props.get("street","");     
                String po_box  = (String) props.get("po_box","");                     
                String postal_code  = (String) props.get("postal_code","");                     
                String province  = (String) props.get("province","");                      
                
                                                
                //Second column (General 2)
                String[] contact = (String[]) props.get("contact", String[].class) ;                       
                String[] email = (String[]) props.get("email", String[].class) ;           
                String[] phone = (String[]) props.get("phone", String[].class) ;           
                String[] fax = (String[]) props.get("fax", String[].class) ;           
                String[] cell = (String[]) props.get("cell", String[].class) ;   
                String[] url = (String[]) props.get("url", String[].class) ;                           
                                
                //Third/Fourth column (English/French)
                String title = (String) props.get(lang+"_title",""); 
                String city = (String) props.get(lang+"_city","");                 
                                                                
                //First column (Title)
                out.print("<tr><td>");
                if(!(title.equalsIgnoreCase(""))){
                    out.print(title);              
                }
                out.print("</td>");

                //Second column (Address)                
                out.print("<td>");
                if(!(street.equalsIgnoreCase(""))){
                    out.print(street + "<br />");  
                } 
                if(!(po_box.equalsIgnoreCase(""))){
                    out.print(po_box + "<br />");  
                } 

                if(!(city.equalsIgnoreCase(""))){
                    out.print(city);  

                }                 

                if(!(province.equalsIgnoreCase(""))){
                    out.print(", ");  
                    out.print(LocaleSupport.getLocalizedMessage(pageContext, province));        
                }    

                if(!(postal_code.equalsIgnoreCase(""))){
                    out.print(", ");  
                    out.print(postal_code);  
                    //out.print(", ");  
                }    
                out.print("</td>");

                //Third column (Contact)
                out.print("<td>"); 

                //Contact
                try
                {
                    //**IMPORTANT Part - creating array no matter what value is.
                    if(contact!=null&&contact.length>0) 
                        {
                        for(int i=0;i<contact.length;i++) 
                            {
                            out.print(contact[i] + "<br />");
                            }
                        }
                }
                catch(Exception ex) 
                {
                    log.error("Contact's part is wrong",ex);   
                }                
                
                //Email
                try
                {
                    //**IMPORTANT Part - creating array no matter what value is.
                    if(email!=null&&email.length>0){
                        out.print("<b>"+emailText+"</b>");      
                        //out.print(emailText);                                         
                        for(int i=0;i<email.length;i++) 
                            {
                            out.write(String.format("<a href=\"mailto://%s\">%s</a> ", email[i],email[i]));                            
                            //out.print(String.format("<a href=\"%s\">%s</a>",email[i],email[i]));                                   
                            out.print("<br />");
                            }
                        }
                }
                catch(Exception ex) 
                {
                    log.error("Email's part is wrong",ex);   
                }     

                //Phone
                try
                {
                    //**IMPORTANT Part - creating array no matter what value is.
                    if(phone!=null&&phone.length>0){
                        out.print("<b>"+phoneText+"</b>");      
                        //out.print(phoneText);                                         
                        for(int i=0;i<phone.length;i++) 
                            {
                            out.print(phone[i] + "<br />");
                            }
                        }
                }
                catch(Exception ex) 
                {
                    log.error("Phone's part is wrong",ex);   
                }  

                //Cell
                try
                {
                    //**IMPORTANT Part - creating array no matter what value is.
                    if(cell!=null&&cell.length>0){
                        out.print("<b>"+phoneText+"</b>");                                                                                               
                        //out.print(phoneText);   
                        for(int i=0;i<cell.length;i++) 
                            {
                            out.print(cell[i] + "<br />");
                            }
                        }
                }
                catch(Exception ex) 
                {
                    log.error("Fax's part is wrong",ex);   
                }  
                

                //Fax
                try
                {
                    //**IMPORTANT Part - creating array no matter what value is.
                    if(fax!=null&&fax.length>0){
                        out.print("<b>"+faxText+"</b>");                                                                                               
                        //out.print(faxText);                                                                               
                        for(int i=0;i<fax.length;i++) 
                            {
                            out.print(fax[i] + "<br />");
                            }
                        }
                }
                catch(Exception ex) 
                {
                    log.error("Fax's part is wrong",ex);   
                }  


                //website
                try
                {
                    //**IMPORTANT Part - creating array no matter what value is.
                    if(url!=null&&url.length>0){
                        out.print("<b>"+websiteText+"</b>");                         
                        //out.print(websiteText);                                                 
                        for(int i=0;i<url.length;i++) 
                            {
                            out.print(String.format("<a href=\"%s\">%s</a>",url[i],url[i]));                                      
                            out.print("<br />");
                            }
                        }
                }
                catch(Exception ex) 
                {
                    log.error("Fax's part is wrong",ex);   
                }                  

                out.print("</td>");


                //Fouth column (Language)        
                out.print("<td>");                

                if(!(language_use.equalsIgnoreCase(""))){
                    out.print(LocaleSupport.getLocalizedMessage(pageContext, language_use));              
                    //out.print(LocaleSupport.getLocalizedMessage(pageContext, "New Brunswick"));              
                }      
                
                
                out.print("</td></tr>");

            }//end of while

            out.print("</table>"); //end of table
            out.print("</div>");
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

        out.print("<table class=\"table table-striped table-bordered table-hover\"><tr>");
        out.print("<th width='25%'>");
        out.print(titleText);//company name
        out.print("</th>");
        out.print("<th width='32%'>");
        out.print(addressText); //last name, first name
        out.print("</th>");

        out.print("<th width='33%'>");
        out.print(contactText);//phone no
        out.print("</th>");
        out.print("<th width='10%'>");
        out.print(languageText);//type
        out.print("</th></tr>");
        //out.print("</table>"); //end of table                
 
        out.print("<tr>");
        out.print("<td colspan='4'>");
 %><cq:include script="empty.jsp" /> 
 <%
        out.print("</td>");
        out.print("</tr>");
        out.print("</table>");
}
%>