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

SimpleDateFormat format_full = new SimpleDateFormat("dd MMMM yyyy", locale);
SimpleDateFormat format = new SimpleDateFormat("dd MMMMM", locale);
SimpleDateFormat format_month = new SimpleDateFormat("MMMMM", locale);
SimpleDateFormat format_day = new SimpleDateFormat("dd", locale);
SimpleDateFormat format_year = new SimpleDateFormat("yyyy", locale);

SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yyyy", locale);
SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);

//setting header text for English/French
String header_1 = properties.get("header_community", "");
if(header_1.equalsIgnoreCase("")){
    header_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "community_Text"));
} 

String header_2 = properties.get("header_river_basin", "");
if(header_2.equalsIgnoreCase("")){
    header_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "river_Text"));
} 

String header_3 = properties.get("header_date_jam", "");
if(header_3.equalsIgnoreCase("")){
    header_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "datejam_Text"));
} 

String header_4 = properties.get("header_description", "");
if(header_4.equalsIgnoreCase("")){
    header_4=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "description_Text"));
} 

String header_5 = properties.get("header_status", "");
if(header_5.equalsIgnoreCase("")){
    header_5=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "status_Text"));
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
    out.write("<div class=\"table-responsive\">");  
    out.write("<table width='100%' class=\"table  table-striped table-bordered table-hover\"><tr>");
    out.write("<th width='20%'>");
    out.write(header_1);
    out.write("</th>");
    out.write("<th width='20%'>");
    out.write(header_2);
    out.write("</th>");
	out.write("<th width='15%'>");
    out.write(header_3);
    out.write("</th>");
	out.write("<th width='30%'>");
    out.write(header_4);
    out.write("</th>");        
    out.write("<th width='15%'>");
    out.write(header_5);
    out.write("</th></tr>");

    while (items.hasNext()) {
        Page item = items.next();
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
        ValueMap props = itemPage.getProperties();

        //First tab (General)
        GregorianCalendar date = (GregorianCalendar) props.get("date");
		String full_date = (String)format_full.format(date.getTime());
        String small_date = (String)smallformat.format(date.getTime());
        String small_month = (String)format_month.format(date.getTime());
        String small_day = format_day.format(date.getTime());

        String status = (String) props.get("status","");   

        if(!(status.equalsIgnoreCase(""))){
    		status=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, status));
        }         

        //Second/Third tab (English/French)
        String community = (String) props.get("community_"+lang,""); 
        String river_basin = (String) props.get("river_basin_"+lang,""); 
        String description = (String) props.get("description_"+lang,""); 

        out.write("<tr>");

        /**START of First column**/
        out.write("<td>");        
        if(!(community.equalsIgnoreCase(""))){
            out.write(community);              
        } 
        out.write("</td>");
        /**End of First column**/

        /**START of Second column**/
        out.write("<td>");        
        if(!(river_basin.equalsIgnoreCase(""))){
            out.write(river_basin);              
        } 
        out.write("</td>");
        /**End of Second column**/


        /**START of Third column**/
        out.write("<td>");        
        if(!(full_date.equalsIgnoreCase(""))){
            out.write(full_date);              
        } 
        out.write("</td>");
        /**End of Third column**/

        /**START of Fouth column**/
        out.write("<td>");        
        if(!(description.equalsIgnoreCase(""))){
			out.write(description);   
        } 
        out.write("</td>");
        /**End of Fouth column**/


        /**START of Fifth column**/
        out.write("<td>");        
        if(!(status.equalsIgnoreCase(""))){
            out.write(status);              
        } 
        out.write("</td>");
        /**End of Fifth column**/

        out.write("</tr>");        

    }//end of while
    out.write("</table>"); //end of table
    out.write("</div>");    

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

    out.write("<table width='100%' class=\"table  table-striped table-bordered table-hover\"><tr>");
    out.write("<th width='20%'>");
    out.write(header_1);
    out.write("</th>");
    out.write("<th width='20%'>");
    out.write(header_2);
    out.write("</th>");
    out.write("<th width='15%'>");
    out.write(header_3);
    out.write("</th>");
    out.write("<th width='30%'>");
    out.write(header_4);
    out.write("</th>");
    out.write("<th width='15%'>");
    out.write(header_5);
    out.write("</th></tr>");
    //out.write("</table>"); //end of table                


    out.write("<tr>");
    out.write("<td colspan='5'>");
     %><cq:include script="empty.jsp" /> 
 <%
    out.write("</td>");
    out.write("</tr>");
    out.write("</table>");
}
%>