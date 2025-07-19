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
//setting header text for English/French
String header_1 = properties.get("header_position", "");
if(header_1.equalsIgnoreCase("")){
    header_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "position_Text"));
} 

String header_2 = properties.get("header_location", "");
if(header_2.equalsIgnoreCase("")){
    header_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "location_Text"));
} 

String header_3 = properties.get("header_closingdate", "");
if(header_3.equalsIgnoreCase("")){
    header_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "closingdate_Text"));
} 

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
    out.write("<table width='100%' class=\"table table-striped table-bordered table-hover\"><tr>");
    out.write("<th width='50%'>");
    out.write(header_1);
    out.write("</th>");
    out.write("<th width='20%'>");
    out.write(header_2);
    out.write("</th>");
    out.write("<th width='30%'>");
    out.write(header_3);
    out.write("</th></tr>");

    while (items.hasNext()) {
        Page item = items.next();
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
        ValueMap props = itemPage.getProperties();

        //First/Second tab (English/French)
        String position = (String) props.get("position_"+lang,""); 
        String organization = (String) props.get("organization_"+lang,""); 
        String location = (String) props.get("location_"+lang,""); 
        String date = (String) props.get("date_"+lang,""); 
        String website = (String) props.get("website_"+lang,"");         
        String organization1 = String.format("<a href=\"%s\" title=\"%s\">%s</a>",website,organization,organization);
        //First column
        out.write("<tr><td>");
        /**start of Position/Organization**/        
        if(!(position.equalsIgnoreCase(""))){
            out.write(position+"<br/>");
            out.write(organization1);            
        }
		/**end of Position/Organization**/


        //Second column
        /**start of Location**/          
        out.write("</td><td>");
        if(!(location.equalsIgnoreCase(""))){
            out.write(location);  
        } 
        /**end of Location**/      
        //Third column
        out.write("</td><td>");
        if(!(date.equalsIgnoreCase(""))){
            out.write(date);              
        } 
        out.write("</td></tr>");

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

    out.write("<table width='100%' class=\"table table-striped table-bordered table-hover\"><tr>");
    out.write("<th width='50%'>");
    out.write(header_1);
    out.write("</th>");
    out.write("<th width='20%'>");
    out.write(header_2);
    out.write("</th>");
    out.write("<th width='30%'>");
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