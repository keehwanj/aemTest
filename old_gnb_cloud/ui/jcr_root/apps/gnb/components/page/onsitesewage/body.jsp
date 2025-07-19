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
                    <h1>Public Review Item <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <br /><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <br /><br />


                <table  class="table table-bordered table-striped table-hover">
                    <tr><th colspan="2"><b>General Properties</b></th></tr>
                    <tr><td width="30%">Hide This Data?</td><td width="70%"><%=properties.get("hideYesNo","&nbsp;")%></td></tr>
                    <tr><td width="30%">ID</td><td width="70%"><%=properties.get("id","&nbsp;")%></td></tr>
                    <tr><td width="30%">Company Name</td><td width="70%"><%=properties.get("company_name","&nbsp;")%></td></tr>
                    <tr><td>Licence #</td><td><%=properties.get("licence_no","&nbsp;")%></td></tr>
                    <tr><td>Last Name</td><td><%=properties.get("last_name","&nbsp;")%></td></tr>
                    <tr><td>First Name</td><td><%=properties.get("first_name","&nbsp;")%></td></tr>                    
                    <tr><td>City</td><td><%=properties.get("city_name","&nbsp;")%></td></tr>                    
                    <tr><td>Region</td><td><%=properties.get("region","&nbsp;")%></td></tr>          
                    <tr><td>Business Phone</td><td><%=properties.get("phone_no","&nbsp;")%></td></tr>          
                    <tr><td>Business Phone 2</td><td><%=properties.get("phone_no_2","&nbsp;")%></td></tr>          

                    <tr><th colspan="2"><b>English Properties</b></th></tr>
                    <tr><td>Type of Non Conventinal License</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] en_props = properties.get("en_non_conventional", String[].class) ;
                        if(en_props!=null) 
                            {
                            for(int i=0;i<en_props.length;i++) 
                                {
                                out.write(en_props[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Non-Conventional License's part is wrong",ex);   
                        }
                    %>
                    </td></tr>                                                                                         

                    <tr><th colspan="2"><b>French Properties</b></th></tr>
                    <tr><td>Type of Non Conventinal License</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] fr_props = properties.get("fr_non_conventional", String[].class) ;
                        if(fr_props!=null) 
                            {
                            for(int i=0;i<fr_props.length;i++) 
                                {
                                out.write(fr_props[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Non-Conventional License's part is wrong",ex);   
                        }
                    %>
                    </td></tr>                                                                                         
                </table>


            </div>
        </div>
    </div>

</body>