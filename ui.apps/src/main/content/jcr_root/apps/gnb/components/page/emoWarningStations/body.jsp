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

                    <tr><th colspan="2"  class="bg-primary">ENGLISH</th></tr>
                    <tr><td width="30%">Title</td><td width="70%"><%=properties.get("en_title","&nbsp;")%></td></tr>
                    <tr><td>Body</td><td><%=properties.get("en_body","&nbsp;")%></td></tr>

                    <tr><th colspan="2"  class="bg-primary">FRENCH</th></tr>
                    <tr><td>Title</td><td><%=properties.get("fr_title","&nbsp;")%></td></tr>   
					<tr><td>Body</td><td><%=properties.get("fr_body","&nbsp;")%></td></tr> 

                </table>
            </div>
        </div>
    </div>
</body>