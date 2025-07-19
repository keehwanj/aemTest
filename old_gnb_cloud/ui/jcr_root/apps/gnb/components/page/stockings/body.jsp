<%@ include file="/libs/wcm/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@ page import="java.util.GregorianCalendar"%>
<%@ page import="java.util.Date"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>
<%@ page import="java.util.Calendar"%>
<%@ page import="com.t4g.cnb.enums.Nodes"%>
<%@ page import="com.t4g.cnb.enums.CustomNodes"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Locale"%>
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

//String winterfishing=properties.get("winterfishing","&nbsp;");

%>
<body id="newsitem">
<!-- START of container -->    
    <div id="container"  class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>Salmon / Trout Item <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <br /><br />
                <p>Click the <kbd>Custom Page Properties...</kbd> button in the <kbd>Page</kbd> tab of the Sidekick to edit these values.</p>
                <br /><br />

                <table class="table table-bordered table-hover">

                    <tr><th colspan="2" class="bg-primary"><strong>General Properties</strong></th></tr>
                    <tr><td width="15%"><strong>Publish Time</strong></td><td width="85%"><%=properties.get("onTime","&nbsp;")%></td></tr>
                    <tr><td><strong>Year</strong></td><td><%=properties.get("year","&nbsp;")%></td></tr>

                    <tr><td><strong>County</strong></td><td><%=properties.get("county","&nbsp;")%></td></tr>
                    <tr><td><strong>Number Stocked</strong></td><td><%=properties.get("numberStocked","&nbsp;")%></td></tr>                    
                    <tr><td><strong>Open to Winter Fishing </strong></td><td><%=properties.get("winterfishing","No")%></td></tr>                    


                    <tr><th colspan="2" class="bg-primary"><b>English Properties</b></th></tr>
                     <tr><td><strong>Season</strong></td><td><%=properties.get("enSeason","&nbsp;")%></td></tr>
                    <tr><td><strong>Water Name</strong></td><td><%=properties.get("enWaterName","&nbsp;")%></td></tr>
                    <tr><td><strong>Water Name Link</strong></td><td><%=properties.get("enWaterNameLink","&nbsp;")%></td></tr>
                    <tr><td><strong>Life Stage</strong></td><td><%=properties.get("enLifeStage","&nbsp;")%></td></tr>
                    <tr><td><strong>Clip</strong></td><td><%=properties.get("enClip","&nbsp;")%></td></tr>  


                    <tr><th colspan="2" class="bg-primary"><b>French Properties</b></th></tr>
                     <tr><td><strong>Season</strong></td><td><%=properties.get("frSeason","&nbsp;")%></td></tr>
                    <tr><td><strong>Water Name</strong></td><td><%=properties.get("frWaterName","&nbsp;")%></td></tr>
                    <tr><td><strong>Water Name Link</strong></td><td><%=properties.get("frWaterNameLink","&nbsp;")%></td></tr>
                    <tr><td><strong>Life Stage</strong></td><td><%=properties.get("frLifeStage","&nbsp;")%></td></tr>
                    <tr><td><strong>Clip</strong></td><td><%=properties.get("frClip","&nbsp;")%></td></tr>                      

                </table>
            </div>
        </div>
    </div><!--container-->   
</body>