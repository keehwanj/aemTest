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
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Collections"%>
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
Page configurationPage = pageManager.getPage("/content/gnbconfig");
/**
String deptDataPage = Utils.getConfigurationProperty("cnbDepartmentMetadata", configurationPage);
String activePath = deptDataPage+"/active/"; 
String inactivePath = deptDataPage+"/inactive/"; 
**/
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
<!--Start of Google Tag Manager-->
<%
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {%>
<!-- Google Tag Manager-EN -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-MGVPDD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGVPDD');</script>
<!-- End Google Tag Manager-EN -->

<%
}
else{
%>
<!-- Google Tag Manager-FR -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WFLNPR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WFLNPR');</script>
<!-- End Google Tag Manager-FR -->
<%
}
%>
<!-- End Google Tag Manager -->

<!-- START of container -->    
    <div id="container"  class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>ABC Item <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <br /><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <br /><br />

                <table class="table table-bordered table-hover">


                    <tr><th colspan="2">General Properties</th></tr>
                    <tr><td width="30%">Deadline</td><td width="70%"><%=properties.get("deadline","&nbsp;")%></td></tr>
                    <tr><td>Email address</td><td><%=properties.get("email","&nbsp;")%></td></tr>
                    <tr><td>Type</td><td><%=properties.get("type","&nbsp;")%></td></tr>

                    <tr><th colspan="2">English Properties</th></tr>
                    <tr><td>Associated Department(s)</td><td>
                    <%
              try{
                    Object[] tags = (Object[])properties.get("en_department") ;
                    TagManager tm = resourceResolver.adaptTo(TagManager.class);


                    if(tags!=null) {
                      for(int i=0;i<tags.length;i++) {
                        String tagValue=(String) tags[i];

 						Tag tag = tm.resolve(tagValue);
                          if(tag!=null){
							out.write(tag.getTitle() + "<br />");
                          }
                          else{
							tagValue="in"+tagValue;
                            tag = tm.resolve(tagValue);
							out.write(tag.getTitle() + "<br />");                              
                          }
                      	}
                      }
                    }catch(Exception ex) {
                         log.error("news article data not tagged with a department",ex);   
                    }
                    %>
                    </td></tr>
                    <tr><td>Organization</td><td><%=properties.get("en_job_title","&nbsp;")%></td></tr>
                    <tr><td>Job Title</td><td><%=properties.get("en_job_rank","&nbsp;")%></td></tr>
                    <tr><td>Appointment Type</td><td><%=properties.get("en_appointment_type","&nbsp;")%></td></tr>
                    <tr><td>Terms</td><td><%=properties.get("en_term","&nbsp;")%></td></tr>
                    <tr><td>Body</td><td><%=properties.get("en_body","&nbsp;")%></td></tr>                                        

                    <tr><td>Link Text(s)</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] props = properties.get("en_link_text", String[].class) ;
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
                        log.error("English link text part is wrong",ex);   
                        }
                    %>
                    </td></tr>


                    <tr><td>Link(s)</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] props = properties.get("en_link", String[].class) ;
                        if(props!=null) 
                            {
                            for(int i=0;i<props.length;i++) 
                                {
                                out.write((String)props[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("English link part is wrong",ex);   
                        }
                    %>
                    </td></tr>

                    <tr><th colspan="2">French Properties</th></tr>
                    <tr><td>Associated Department(s)</td><td>
                    <%
               try{
                    Object[] tags = (Object[])properties.get("fr_department") ;
                    TagManager tm = resourceResolver.adaptTo(TagManager.class);


                    if(tags!=null) {
                      for(int i=0;i<tags.length;i++) {
                        String tagValue=(String) tags[i];

 						Tag tag = tm.resolve(tagValue);
                          if(tag!=null){
							out.write(tag.getTitle() + "<br />");
                          }
                          else{
							tagValue="in"+tagValue;
                            tag = tm.resolve(tagValue);
							out.write(tag.getTitle() + "<br />");                              
                          }
                      	}
                      }
                    }catch(Exception ex) {
                         log.error("news article data not tagged with a department",ex);   
                    }
                    %>
                    </td></tr>
                    <tr><td>Organization</td><td><%=properties.get("fr_job_title","&nbsp;")%></td></tr>
                    <tr><td>Job Title</td><td><%=properties.get("fr_job_rank","&nbsp;")%></td></tr>
                    <tr><td>Appointment Type</td><td><%=properties.get("fr_appointment_type","&nbsp;")%></td></tr>
                    <tr><td>Terms</td><td><%=properties.get("fr_term","&nbsp;")%></td></tr>                    
                    <tr><td>Body</td><td><%=properties.get("fr_body","&nbsp;")%></td></tr>                                        

                    <tr><td>Link Text(s)</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.   
                        String[] props = properties.get("fr_link_text", String[].class) ;
                        if(props!=null) 
                            {
                            for(int i=0;i<props.length;i++) 
                                {
                                out.write((String)props[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("French link Text part is wrong",ex);   
                        }
                    %>
                    </td></tr>


                    <tr><td>Link(s)</td><td>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] props = properties.get("fr_link", String[].class) ;
                        if(props!=null) 
                            {
                            for(int i=0;i<props.length;i++) 
                                {
                                out.write((String)props[i] + "<br />");
                                }
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("French link part is wrong",ex);   
                        }
                    %>
                    </td></tr>

                    <tr><th colspan="2">In case of position filled</th></tr>

                    <tr><td>Position filled?</td><td><%=properties.get("yes_no","&nbsp;")%></td></tr>
                    
                    <tr><td>Appointment Date</td><td><%=properties.get("appointment_date","&nbsp;")%></td></tr>
                    <tr><td>Appointment Person Information-English</td><td><%=properties.get("en_person_info","&nbsp;")%></td></tr>
                    <tr><td>Appointment Person Information-French</td><td><%=properties.get("fr_person_info","&nbsp;")%></td></tr>


                </table>
            </div>
        </div>
    </div><!--container-->   

</body>