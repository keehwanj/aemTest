<%@include file = "/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Calendar"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="java.text.NumberFormat"%>
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

%>
<body id="newsitem">
    <div id="container"  class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>Career & Volunteer Opportunies <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <p><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <p /><br />
                <table  class="table table-bordered table-striped table-hover">

<!--English Content-->
                    <tr><th colspan="2"><b>English Properties</b></th></tr>
                    <tr><td width="30%">Position</td><td  width="70%"><%=properties.get("position_en","&nbsp;")%></td></tr>                    
                    <tr><td>Organization</td><td><%=properties.get("organization_en","&nbsp;")%></td></tr>  
                    <tr><td>Website</td><td><%=properties.get("website_en","&nbsp;")%></td></tr>     
                    <tr><td>Location</td><td><%=properties.get("location_en","&nbsp;")%></td></tr>                        
                    <tr><td>Closing Date</td><td><%=properties.get("date_en","&nbsp;")%></td></tr>    
<!--end-->

<!--French Content-->                    
                    <tr><th colspan="2"><b>French Properties</b></th></tr>
                    <tr><td>Position</td><td><%=properties.get("position_fr","&nbsp;")%></td></tr>                    
                    <tr><td>Organization</td><td><%=properties.get("organization_fr","&nbsp;")%></td></tr>  
                    <tr><td>Website</td><td><%=properties.get("website_fr","&nbsp;")%></td></tr>     
                    <tr><td>Location</td><td><%=properties.get("location_fr","&nbsp;")%></td></tr>                        
                    <tr><td>Closing Date</td><td><%=properties.get("date_fr","&nbsp;")%></td></tr>                                                                                         
<!--end-->
                </table>
            </div>
        </div>
    </div>

</body>