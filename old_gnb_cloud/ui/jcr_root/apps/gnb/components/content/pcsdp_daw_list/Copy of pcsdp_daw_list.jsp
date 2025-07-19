<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Calendar"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="java.util.GregorianCalendar"%>
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
//date type setting
GregorianCalendar now = new GregorianCalendar();

//SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
SimpleDateFormat format = new SimpleDateFormat("MMMMM dd", locale);
SimpleDateFormat format_month = new SimpleDateFormat("MMMMM", locale);
SimpleDateFormat format_day = new SimpleDateFormat("dd", locale);

SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yyyy", locale);
SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);

//setting header text for English/French
String header_1 = properties.get("header_date", "");
if(header_1.equalsIgnoreCase("")){
    header_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "date_Text"));
} 

String header_2 = properties.get("header_event", "");
if(header_2.equalsIgnoreCase("")){
    header_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "event_Text"));
} 

String header_3 = properties.get("header_region", "");
if(header_3.equalsIgnoreCase("")){
    header_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "region_Text"));
} 

String ongoing_Text = properties.get("ongoing", "");
if(ongoing_Text.equalsIgnoreCase("")){
    ongoing_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "ongoing_Text"));
} 

String renderer_page = properties.get("renderer_page", "");
WCMMode mode = WCMMode.fromRequest(request);
%>

<%

/** BUG FIX: If the parent Page is not defined, the list returns empty 
This is because, List.java defaults the empty parentPage to retrieve relativeParent(3) which
might not always be right incase this component is deep down the hierarchy
This fix, sets the parentPagePath to currentPage if the path is not defined
through the dialog 
**/
try {
    String path = properties.get("parentPage", "");
    if (path.equals("")) {
        currentNode.setProperty("parentPage", currentPage.getPath());
        currentNode.save();
    }
} 
catch (Exception e) {
}

%>
<cq:include script="init.jsp" /> 
<%
// initialize the list    
List list = (List) request.getAttribute("list");

if (!list.isEmpty()) {
    WCMMode includemode = WCMMode.DISABLED.toRequest(request);
    try {
    Iterator<Page> items = list.getPages();

    //table header part
    out.write("<table width='100%'><tr>");
    out.write("<th width='30%'>");
    out.write(header_1);
    out.write("</th>");
    out.write("<th width='50%'>");
    out.write(header_2);
    out.write("</th>");
        
    out.write("<th width='20%'>");
    out.write(header_3);
    out.write("</th></tr>");

    while (items.hasNext()) {
        Page item = items.next();
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
        ValueMap props = itemPage.getProperties();

        String[] selectors = itemPage.getPath().split("/");
        String href="";

        if(selectors.length>0){
            String selector = String.format("%s.%s.%s.html", selectors[5], selectors[6], selectors[7]);
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

        //First tab (General)

        GregorianCalendar from_date = (GregorianCalendar) props.get("from_date");
		String small_from_date = (String)smallformat.format(from_date.getTime());
        String small_from_month = (String)format_month.format(from_date.getTime());
        String small_from_day = format_day.format(from_date.getTime());

        GregorianCalendar to_date = (GregorianCalendar) props.get("to_date");           
		String small_to_date = smallformat.format(to_date.getTime());
        String small_to_month = format_month.format(to_date.getTime());
        String small_to_day = format_day.format(to_date.getTime());

        String region = (String) props.get("region","");   
        String phone = (String) props.get("phone","");      



        //Second/Third tab (English/French)
        String event = (String) props.get("event_"+lang,""); 

        String contact = (String) props.get("contact_"+lang,""); 
        String website = (String) props.get("website_"+lang,""); 



        String description = (String) props.get("description_"+lang,"");         

/**START of 1st column**/
        out.write("<tr><td>");
        String from_date1="";   
        /**starte of non-ongoing**/

        if(small_from_date.compareTo(small_to_date)==0){
        	from_date1=String.format("%s",format.format(from_date.getTime()));
            out.write(from_date1);
         } 
        else{
            if(small_from_month.compareTo(small_to_month)==0){
				from_date1=String.format("%s - %s",format.format(from_date.getTime()),format_day.format(to_date.getTime()));                   
            	out.write(from_date1);   
            }
            else{
				from_date1=String.format("%s - %s %s",format.format(from_date.getTime()),format_month.format(to_date.getTime()),format_day.format(to_date.getTime()));                   
            	out.write(from_date1);                   
            }
        }
		/**end of non-ongoing**/
/**START of 1st column**/

/**START of 2rd column**/
        out.write("</td><td>");
        if(!(event.equalsIgnoreCase(""))){
            event=String.format("<a href=\"%s\">%s</a>",href,event);
            out.write(event);  
        } 
/**END of 2rd column**/
/**START of 3rd column**/
        out.write("</td><td>");
        if(!(region.equalsIgnoreCase(""))){
            out.write(region);              
        } 
        out.write("</td></tr>");
/**END of 3rd column**/
    }//end of while

    out.write("</table>"); //end of table

    if (list.isPaginating()) {
        %><cq:include script="pagination.jsp" /><%
    }
    }//end of try
    catch(Exception ex){
        log.error("list is wrong",ex);  
    }//end of catch
    finally {
        includemode.toRequest(request);
    }

} else {

    out.write("<table width='100%'><tr>");
    out.write("<th width='30%'>");
    out.write(header_1);
    out.write("</th>");
    out.write("<th width='50%'>");
    out.write(header_2);
    out.write("</th>");
    out.write("<th width='20%'>");
    out.write(header_3);
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