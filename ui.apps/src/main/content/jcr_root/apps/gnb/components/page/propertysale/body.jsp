<%@include file="/libs/wcm/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
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

GregorianCalendar now = new GregorianCalendar();
GregorianCalendar closing_date = (GregorianCalendar) properties.get("closing_date",now);

SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yyyy", locale);
SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);

NumberFormat numberFormatter;


//NumberFormat nf = NumberFormat.getCurrencyInstance();
/*start of new code*/
NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.CANADA);
if (locale.getLanguage().equalsIgnoreCase("fr")) {
    nf = NumberFormat.getCurrencyInstance(Locale.CANADA_FRENCH);
}
/*end of new code*/

nf.setMaximumFractionDigits(0);

double estimate_value=(double)properties.get("estimate_value",0);
%>
<body id="newsitem">
    <div id="container" class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>Property Sale <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <br /><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <br /><br />
                <table class="table table-bordered table-striped table-hover">
<!--General Content of Tender-->                                    
                    <tr><th colspan="2"><b>General Properties - Tender</b></th></tr>
                    <tr><td width="30%">Rank</td><td width="70%"><%=properties.get("rank","&nbsp;")%></td></tr>
                    <tr><td width="30%">Kind</td><td width="70%"><%=properties.get("kind","&nbsp;")%></td></tr>
                    <tr><td>Tender No</td><td><%=properties.get("tender_no","&nbsp;")%></td></tr>       
                    <tr><td>Closing Date</td><td><%=smallformat.format(closing_date.getTime())%></td></tr>
                    <tr><td>County</td><td><%=properties.get("county","&nbsp;")%></td></tr>                    
                    <tr><td>Property Value</td><td><%=nf.format(estimate_value)%></td></tr>                    
                    <tr><td>Notice of Tender</td><td><%=properties.get("notice_tender","&nbsp;")%></td></tr>          

                    <tr><td>Maps</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] maps = properties.get("maps", String[].class) ;
                        if(maps!=null) 
                            {
                            for(int i=0;i<maps.length;i++) 
                                {
                                out.write(maps[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("map part is wrong",ex);   
                        }
                    %>
                    </td></tr>     

                    <tr><td>Photo</td><td><%=properties.get("photo","&nbsp;")%></td></tr>       

                    <tr><td>Other Docs</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] other_docs = properties.get("other_docs", String[].class) ;
                        if(other_docs!=null) 
                            {
                            for(int i=0;i<other_docs.length;i++) 
                                {
                                out.write(other_docs[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Other docs part is wrong",ex);   
                        }
                    %>
                    </td></tr>     
                    <tr><td>Rotating Photo</td><td><%=properties.get("rotate_photo","&nbsp;")%></td></tr>      
<!--end-->
<!--English Content of Tender-->
                    <tr><th colspan="2"><b>English Properties - Tender</b></th></tr>
                    <tr><td>Address</td><td><%=properties.get("address_en","&nbsp;")%></td></tr>                    
                    <tr><td>Title</td><td><%=properties.get("title_en","&nbsp;")%></td></tr>  
                    <tr><td>Information Sheet</td><td><%=properties.get("info_sheet_en","&nbsp;")%></td></tr>                        
                    <tr><td>Extra Information</td><td>
                    <%
                    out.print("<div class=\"extrainfo\">");                    
                    %>
                    <%=properties.get("extra_info_en","&nbsp;")%>
                    <%
                    out.print("</div>");
                    %>                         
                    </td></tr>           
                    
<!--end-->
<!--French Content of Tender-->                    
                    <tr><th colspan="2"><b>French Properties - Tender</b></th></tr>
                    <tr><td>Address</td><td><%=properties.get("address_fr","&nbsp;")%></td></tr>                    
                    <tr><td>Title</td><td><%=properties.get("title_fr","&nbsp;")%></td></tr>                                                                                   
                    <tr><td>Information Sheet</td><td><%=properties.get("info_sheet_fr","&nbsp;")%></td></tr>                                                                                                                                  
                    <tr><td>Extra Information</td><td>
                    <%
                    out.print("<div class=\"extrainfo\">");                    
                    %>
                    <%=properties.get("extra_info_fr","&nbsp;")%>
                    <%
                    out.print("</div>");
                    %>                         
                    </td></tr>    
<!--end-->
<!--General Content of Surplus-->                    
                    <tr><th colspan="2"><b>General Properties - Surplus</b></th></tr>
                    <tr><td width="30%">File No</td><td width="70%"><%=properties.get("file_no","&nbsp;")%></td></tr>
                    <tr><td width="30%">PID</td><td width="70%"><%=properties.get("pid","&nbsp;")%></td></tr>
                    <tr><td>PAN</td><td><%=properties.get("pan","&nbsp;")%></td></tr>       
<!--end-->
<!--English Content of Surplus-->                    
                    <tr><th colspan="2"><b>English Properties - Surplus</b></th></tr>
                    <tr><td>Area</td><td><%=properties.get("area_en","&nbsp;")%></td></tr>
                    <tr><td>Building Size</td><td><%=properties.get("buildingsize_en","&nbsp;")%></td></tr>
                    <tr><td>Description</td><td><%=properties.get("description_en","&nbsp;")%></td></tr>                               
                    <tr><td>Zoning</td><td><%=properties.get("zone_en","&nbsp;")%></td></tr>                                                                                   
                    <tr><td>Information Sheet</td><td><%=properties.get("info_sheet_s_en","&nbsp;")%></td></tr>         
                    <tr><td>Registration Information</td><td><%=properties.get("regi_info_en","&nbsp;")%></td></tr>           
                    <tr><td>Extra Information</td><td>
                    <%
                    out.print("<div class=\"extrainfo\">");                    
                    %>
                    <%=properties.get("extra_info1_en","&nbsp;")%>
                    <%
                    out.print("</div>");
                    %>                    
                    </td></tr>                               
<!--end-->                    
<!--French Content of Surplus-->                                        
                    <tr><th colspan="2"><b>French Properties - Surplus</b></th></tr>
                    <tr><td>Area</td><td><%=properties.get("area_fr","&nbsp;")%></td></tr>
                    <tr><td>Building Size</td><td><%=properties.get("buildingsize_fr","&nbsp;")%></td></tr>
                    <tr><td>Description</td><td><%=properties.get("description_fr","&nbsp;")%></td></tr>                               
                    <tr><td>Zoning</td><td><%=properties.get("zone_fr","&nbsp;")%></td></tr>                                                                                   
                    <tr><td>Information Sheet</td><td><%=properties.get("info_sheet_s_fr","&nbsp;")%></td></tr>         
                    <tr><td>Registration Information</td><td><%=properties.get("regi_info_fr","&nbsp;")%></td></tr>           
                    <tr><td>Extra Information</td><td>
                    <%
                    out.print("<div class=\"extrainfo\">");                    
                    %>
                    <%=properties.get("extra_info1_fr","&nbsp;")%>
                    <%
                    out.print("</div>");
                    %>                      
                    </td></tr>                               
<!--end-->
                           
                </table>


            </div>
        </div>
    </div>

</body>