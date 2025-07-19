<%@include file="/libs/wcm/global.jsp" %>
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
%>
<body id="newsitem">
    <div id="container" class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>Public Review Item <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <br /><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <br /><br />
                <table class="table table-bordered table-striped table-hover">
                    <tr><th colspan="2"  class="bg-primary">General Properties</th></tr>
                    <tr><td width="30%">Emergency?</td><td width="70%"><%=properties.get("warning","&nbsp;")%></td></tr>


                    <tr><th colspan="2"  class="bg-primary">Emergency (Warning)</th></tr>
                    <tr><td >Title - English</td><td><%=properties.get("en_title","&nbsp;")%></td></tr>
                    <tr><td>Title - French</td><td><%=properties.get("fr_title","&nbsp;")%></td></tr>                    
                    <tr><td>Description - English</td><td><%=properties.get("en_description","&nbsp;")%></td></tr>
                    <tr><td>Description - French</td><td><%=properties.get("fr_description","&nbsp;")%></td></tr>
                    <tr><td>Body - English</td><td><%=properties.get("en_body","&nbsp;")%></td></tr>
                    <tr><td>Body - French</td><td><%=properties.get("fr_body","&nbsp;")%></td></tr> 



                    <tr><th colspan="2"  class="bg-primary">No Emergency</th></tr>
                    <tr><td>Title - English</td><td><%=properties.get("en_title_normal","&nbsp;")%></td></tr>
                    <tr><td>Title - French</td><td><%=properties.get("fr_title_normal","&nbsp;")%></td></tr>  
                    <tr><td>Description - English</td><td><%=properties.get("en_description_normal","&nbsp;")%></td></tr>
                    <tr><td>Description - French</td><td><%=properties.get("fr_description_normal","&nbsp;")%></td></tr>



                </table>
            </div>
        </div>
    </div>
</body>