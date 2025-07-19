<%@include file = "/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Calendar"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    }//end of inner if
%>

<%
String month = "";
String year = "";
String day=currentPage.getName();
String item=currentPage.getName();
  try {
    // Get news item date corresponding to path of the page
    try{
      day = currentPage.getName().split("_")[0];
      item = currentPage.getName().split("_")[1];
    } catch (Exception ex) {
      //ignore them
    }
    month = currentPage.getParent(1).getName();
    year = currentPage.getParent(2).getName();
  } catch(Exception ex) {
  
  }
  
if(!Utils.isNotEmpty(properties.get("onTime",""))) {
    currentNode.setProperty("onTime",Calendar.getInstance());
    currentNode.save();
}

GregorianCalendar now = new GregorianCalendar();
GregorianCalendar from_date = (GregorianCalendar) properties.get("from_date",now);
GregorianCalendar to_date = (GregorianCalendar) properties.get("to_date",now);

SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yyyy", locale);
SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);
%>
<body id="newsitem">
    <div id="container" class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>DAW Event <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <p><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <p /><br />
                <table class="table table-bordered table-striped table-hover">
<!--General Content-->                                    
                    <tr><th colspan="2"><b>General Properties</b></th></tr>
                    <tr><td width="30%">From Date</td><td width="70%"><%=smallformat.format(from_date.getTime())%></td></tr>
                    <tr><td>To Date</td><td><%=smallformat.format(to_date.getTime())%></td></tr>       
                    <tr><td>Region</td><td><%=properties.get("region","&nbsp;")%></td></tr>                    
                    <tr><td>Telephone</td><td><%=properties.get("phone","&nbsp;")%></td></tr>                    
<!--end-->


<!--English Content-->
                    <tr><th colspan="2"><b>English Properties</b></th></tr>
                    <tr><td>Event</td><td><%=properties.get("event_en","&nbsp;")%></td></tr>                    
                    <tr><td>Organization / Contact</td><td><%=properties.get("contact_en","&nbsp;")%></td></tr>                        
                    <tr><td>Website</td><td><%=properties.get("website_en","&nbsp;")%></td></tr>                        
                    <tr><td>Description</td><td>
                        <%out.print("<div class=\"extrainfo\">");%>
                            <%=properties.get("description_en","&nbsp;")%>
                        <%out.print("</div>");%>    
                    </td></tr>                                                                                          
<!--end-->

<!--French Content-->                    
                    <tr><th colspan="2"><b>French Properties</b></th></tr>
                    <tr><td>Event</td><td><%=properties.get("event_fr","&nbsp;")%></td></tr>                    
                    <tr><td>Organization / Contact</td><td><%=properties.get("contact_fr","&nbsp;")%></td></tr>                        
                    <tr><td>Website</td><td><%=properties.get("website_fr","&nbsp;")%></td></tr>                        
                    <tr><td>Description</td><td>
                        <%out.print("<div class=\"extrainfo\">");%>
                            <%=properties.get("description_fr","&nbsp;")%>
                        <%out.print("</div>");%>    
                    </td></tr>                                                                                          
<!--end-->
                </table>
            </div>
        </div>
    </div>
 

</body>