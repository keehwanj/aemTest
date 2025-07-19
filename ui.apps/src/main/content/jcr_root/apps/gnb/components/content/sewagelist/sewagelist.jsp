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
//setting header text for English/French
String company_name_Text = properties.get("company_name_Text", "");
if(company_name_Text.equalsIgnoreCase("")){
    company_name_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "company_name_Text"));
} 

String operator_Text = properties.get("operator_Text", "");
if(operator_Text.equalsIgnoreCase("")){
    operator_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "operator_Text"));
} 

String city_Text = properties.get("city_Text", "");
if(city_Text.equalsIgnoreCase("")){
    city_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "city_Text"));
} 

String phone_Text = properties.get("phone_Text", "");
if(phone_Text.equalsIgnoreCase("")){
    phone_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "phone_Text"));
} 

String region_Text = properties.get("region_Text", "");
if(region_Text.equalsIgnoreCase("")){
    region_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "region_Text"));
} 

String type_Text = properties.get("type_Text", "");
if(type_Text.equalsIgnoreCase("")){
    type_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "type_Text"));
} 

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
    
    if (!list.isEmpty()) {
        WCMMode includemode = WCMMode.DISABLED.toRequest(request);
        try {
            Iterator<Page> items = list.getPages();
            //table header part
            //in case of position not filled(yes_no=no)
                
                out.write("<table><tr>");
                out.write("<th width='25%'>");
                out.write(company_name_Text);//company name
                out.write("</th>");
                out.write("<th width='15%'>");
                out.write(operator_Text); //last name, first name
                out.write("</th>");
                out.write("<th width='15%'>");
                out.write(city_Text); // city name
                out.write("</th>");
                out.write("<th width='15%'>");
                out.write(region_Text);//region
                out.write("</th>");
                out.write("<th width='15%'>");
                out.write(phone_Text);//phone no
                out.write("</th>");
                out.write("<th width='15%'>");
                out.write(type_Text);//type
                out.write("</th></tr>");
                
                //out.write("</table>");
                //out.write("<table>");

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
                            renderer_page = "/content/gnb/en";
                        }
                        else{
                            renderer_page = "/content/gnb/fr";
                        }
                    }
                    href = String.format("%s.%s", renderer_page, selector);
                }

                //First column (Company Name)
                String company_name  = (String) props.get("company_name","");
                
                //Second column (Operator)
                String first_name = (String) props.get("first_name",""); 
                String last_name = (String) props.get("last_name"); 
                
                //Third column (City)
                String city_name = (String) props.get("city_name",""); 

                //Fouth column (Region)
                String region = (String) props.get("region",""); 
                //region text
                if(region.equalsIgnoreCase("Central")){
                    region=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "centralText"));
                } 

                if(region.equalsIgnoreCase("East")){
                    region=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "eastText"));
                } 

                if(region.equalsIgnoreCase("North")){
                    region=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "northText"));
                } 

                if(region.equalsIgnoreCase("South")){
                    region=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "southText"));
                } 
                                

                //Fifth column (Phone Number)
                String phone_no = (String) props.get("phone_no",""); 
                String phone_no_2 = (String) props.get("phone_no_2","");   
                                                              
                //Sixth column (Type)
                String[] non_conventional = (String[]) props.get(lang + "_non_conventional", String[].class) ;                
                                                                
                //First column (Company Name)
                out.write("<tr><td>");
                if(!(company_name.equalsIgnoreCase(""))){
                    out.write(company_name);              
                }
                
                //Second column (Contact)
                out.write("</td>");
                out.write("<td>");
                if(!(last_name.equalsIgnoreCase(""))){
                    out.write(last_name);  
                    out.write(", ");  
                } 
                if(!(first_name.equalsIgnoreCase(""))){
                    out.write(first_name);  
                } 

                //Third column (City)
                out.write("</td>");
                out.write("<td>");                
                if(!(city_name.equalsIgnoreCase(""))){
                    out.write(city_name);              
                } 
                
                //Fouth column (Region)
                out.write("</td>");
                out.write("<td>");                
                if(!(region.equalsIgnoreCase(""))){
                    out.write(region);              
                }                 

                //Fifth column (Phone)
                out.write("</td>");
                out.write("<td>");                
                if(!(phone_no.equalsIgnoreCase(""))){
                    out.write(phone_no);              
                } 
                if(!(phone_no_2.equalsIgnoreCase(""))){
                    out.write("<br/>");              
                    out.write(phone_no_2);              
                } 
                
                //Sixth column (Type)                
                out.write("</td>");
                out.write("<td>");                

                try
                {
                    //**IMPORTANT Part - creating array no matter what value is.
                    if(non_conventional!=null) 
                        {
                        for(int i=0;i<non_conventional.length;i++) 
                            {
                            out.write(non_conventional[i] + "<br />");
                            }
                        }
                }
                catch(Exception ex) 
                {
                    log.error("Non-Conventional License's part is wrong",ex);   
                }
                out.write("</td></tr>");

            }//end of while

            out.write("</table>"); //end of table
            
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

        out.write("<table><tr>");
        out.write("<th width='25%'>");
        out.write(company_name_Text);//company name
        out.write("</th>");
        out.write("<th width='15%'>");
        out.write(operator_Text); //last name, first name
        out.write("</th>");
        out.write("<th width='15%'>");
        out.write(city_Text); // city name
        out.write("</th>");
        out.write("<th width='15%'>");
        out.write(region_Text);//region
        out.write("</th>");
        out.write("<th width='15%'>");
        out.write(phone_Text);//phone no
        out.write("</th>");
        out.write("<th width='15%'>");
        out.write(type_Text);//type
        out.write("</th></tr>");
        //out.write("</table>"); //end of table                
 
        out.write("<tr>");
        out.write("<td colspan='4'>");
 %><cq:include script="empty.jsp" /> 
 <%
        out.write("</td>");
        out.write("</tr>");
        out.write("</table>");
}
%>