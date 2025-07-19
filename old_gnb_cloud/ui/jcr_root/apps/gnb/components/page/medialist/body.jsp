<%@include file="/libs/wcm/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
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

%>
<body id="newsitem">
    <div id="container"   class="container">
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
                    <tr><th colspan="2"><b>General Properties 1</b></th></tr>
                    <tr><td width="30%">Type</td><td width="70%"><%=properties.get("type","&nbsp;")%></td></tr>
                    <tr><td width="30%">Language</td><td width="70%"><%=properties.get("language_use","&nbsp;")%></td></tr>
                    <tr><td width="30%">Street</td><td width="70%"><%=properties.get("street","&nbsp;")%></td></tr>
                    <tr><td>P.O. Box</td><td><%=properties.get("po_box","&nbsp;")%></td></tr>
                    <tr><td>Postal Code</td><td><%=properties.get("postal_code","&nbsp;")%></td></tr>
                    <tr><td>Province</td><td><%=properties.get("province","&nbsp;")%></td></tr>                    

                    <tr><th colspan="2"><b>General Properties 2</b></th></tr>
                    <tr><td>Contact</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] contact1 = properties.get("contact", String[].class) ;
                        if(contact1!=null) 
                            {
                            for(int i=0;i<contact1.length;i++) 
                                {
                                out.write(contact1[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Contact's part is wrong",ex);   
                        }
                    %>
                    </td></tr>                                                                                         
                    
                    <tr><td>Email</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] email1 = properties.get("email", String[].class) ;
                        if(email1!=null) 
                            {
                            for(int i=0;i<email1.length;i++) 
                                {
                                out.write(email1[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Email's part is wrong",ex);   
                        }
                    %>
                    </td></tr>                                                                                         
                    
                    <tr><td>Phone</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] phone1 = properties.get("phone", String[].class) ;
                        if(phone1!=null) 
                            {
                            for(int i=0;i<phone1.length;i++) 
                                {
                                out.write(phone1[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Phone's part is wrong",ex);   
                        }
                    %>
                    </td></tr>     

 
  
                    <tr><td>Fax</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] fax1 = properties.get("fax", String[].class) ;
                        if(fax1!=null) 
                            {
                            for(int i=0;i<fax1.length;i++) 
                                {
                                out.write(fax1[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Fax's part is wrong",ex);   
                        }
                    %>
                    </td></tr>   

                    <tr><td>URL</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] url1 = properties.get("url", String[].class) ;
                        if(url1!=null) 
                            {
                            for(int i=0;i<url1.length;i++) 
                                {
                                out.write(url1[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("URL's part is wrong",ex);   
                        }
                    %>
                    </td></tr>   

                    <tr><td>Cell</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] cell1 = properties.get("cell", String[].class) ;
                        if(cell1!=null) 
                            {
                            for(int i=0;i<cell1.length;i++) 
                                {
                                out.write(cell1[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Cell's part is wrong",ex);   
                        }
                    %>
                    </td></tr>   

                    <tr><th colspan="2"><b>English Properties</b></th></tr>
                    <tr><td>Title</td><td><%=properties.get("en_title","&nbsp;")%></td></tr>      
                    <tr><td>City</td><td><%=properties.get("en_city","&nbsp;")%></td></tr>      
                    
                                                            

                    <tr><th colspan="2"><b>French Properties</b></th></tr>
                    <tr><td>Title</td><td><%=properties.get("fr_title","&nbsp;")%></td></tr>      
                    <tr><td>City</td><td><%=properties.get("fr_city","&nbsp;")%></td></tr>      
                </table>

            </div>
        </div>
    </div>
    
</body>