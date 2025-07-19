<%@include file="/libs/wcm/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Calendar"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="java.util.Locale"%>
<%
String lang = "fr";
String langSuffix = "_F";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    langSuffix = "_E";
    lang = "en";
    }
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

//in order create the node of "community_image
/**
try {
  Property community_image = currentNode.getParent().getProperty("community_image");
    if(community_image!=null) {

    }
    else{
      currentNode.setProperty("community_image","Keehwan Jee");
    }//end of if
}
catch(Exception ex) 
{
    log.error("Community_image's part is wrong",ex);   
}
**/

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
                <table class="table table-bordered table-hover">

                    <tr  class="success"><th colspan="2">General Properties</th></tr>
                    <tr><td width="30%">Type of Community</td><td width="70%"><%=properties.get("type","&nbsp;")%></td></tr>
                    <tr><td>Mayor</td><td><%=properties.get("mayor","&nbsp;")%></td></tr>
                    <tr><td>Councilors</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] props = properties.get("councillors", String[].class) ;
                        if(props!=null) 
                            {
                            for(int i=0;i<props.length;i++) 
                                {
                                out.write(props[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Councilor's part is wrong",ex);   
                        }
                    %>
                    </td></tr>
                    <tr><td>Working Language</td><td><%=properties.get("working_language","&nbsp;")%></td></tr>
                    <tr><td>Telephone</td><td><%=properties.get("telephone","&nbsp;")%></td></tr>                    
                    <tr><td>Fax</td><td><%=properties.get("fax","&nbsp;")%></td></tr>                    
                    <tr><td>Email</td><td><%=properties.get("email","&nbsp;")%></td></tr>    
                    <tr><td>Community Image</td><td><%=properties.get("community_image","&nbsp;")%></td></tr>          

                    <tr  class="success"><th colspan="2">English Properties</th></tr>
                    <tr><td>Community Name</td><td><%=properties.get("en_community_name","&nbsp;")%></td></tr>
                    <tr><td>Homepage</td><td><%=properties.get("en_homepage","&nbsp;")%></td></tr>
                    <tr><td>Address</td><td><%=properties.get("en_address","&nbsp;")%></td></tr>
                    <tr><td>Address1</td><td><%=properties.get("en_address1","&nbsp;")%></td></tr>
                    <tr><td>Address2</td><td><%=properties.get("en_address2","&nbsp;")%></td></tr>
                    <tr><td>City</td><td><%=properties.get("en_city","&nbsp;")%></td></tr>
                    <tr><td>Postal Code</td><td><%=properties.get("en_postal_code","&nbsp;")%></td></tr>                    
                    <tr><td>County</td><td><%=properties.get("county","&nbsp;")%></td></tr>      
                    <tr><td>Description</td><td><%=properties.get("en_description","&nbsp;")%></td></tr>      

                    <tr  class="success"><th colspan="2">French Properties</th></tr>
                    <tr><td>Community Name</td><td><%=properties.get("fr_community_name","&nbsp;")%></td></tr>
                    <tr><td>Homepage</td><td><%=properties.get("fr_homepage","&nbsp;")%></td></tr>
                    <tr><td>Address</td><td><%=properties.get("fr_address","&nbsp;")%></td></tr>
                    <tr><td>Address1</td><td><%=properties.get("fr_address1","&nbsp;")%></td></tr>
                    <tr><td>Address2</td><td><%=properties.get("fr_address2","&nbsp;")%></td></tr>
                    <tr><td>City</td><td><%=properties.get("fr_city","&nbsp;")%></td></tr>
                    <tr><td>Postal Code</td><td><%=properties.get("fr_postal_code","&nbsp;")%></td></tr>                    
                    <tr><td>County</td><td><%=properties.get("county","&nbsp;")%></td></tr>           
                    <tr><td>Description</td><td><%=properties.get("fr_description","&nbsp;")%></td></tr>      
                </table>
            </div>
        </div>
    </div>
  
</body>