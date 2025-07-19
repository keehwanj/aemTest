<%@include file="/libs/foundation/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Calendar"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>

<%
//new
%>
<%@page import="com.day.cq.commons.jcr.JcrUtil"%>
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
//new
final Session session = resource.getResourceResolver().adaptTo(Session.class);
String month = "";
String year = "";
String day=currentPage.getName();
String item=currentPage.getName();

//new
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
    <div id="container"  class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>Statement Item <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <br /><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <br /><br />

                <table  class="table table-bordered table-striped table-hover">


                    <tr><th colspan="2">General Properties</th></tr>
                    <tr><td width="30%">Date</td><td width="70%"><%=properties.get("onTime","&nbsp;")%></td></tr>
                    <tr><td>Type</td><td><%=properties.get("type","&nbsp;")%></td></tr>

                    <tr><th colspan="2">English Properties</th></tr>
                    <tr><td>Title</td><td><%=properties.get("enTitle","&nbsp;")%></td></tr>
                    <tr><td>Description</td><td><%=properties.get("enDescription","&nbsp;")%></td></tr>                    
                    <tr><td>Minister's Name</td><td><%=properties.get("enMinisterName","&nbsp;")%></td></tr>

                    <tr><td>Associated Department(s)</td><td>
                    <%
              try{
                    Object[] tags = (Object[])properties.get("enDepartment") ;
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
                    <tr><td>Body</td><td><%=properties.get("enArticleBody","&nbsp;")%></td></tr>                                        


                    <tr><th colspan="2">French Properties</th></tr>
                    <tr><td>Title</td><td><%=properties.get("frTitle","&nbsp;")%></td></tr>
                    <tr><td>Description</td><td><%=properties.get("frDescription","&nbsp;")%></td></tr>
                    <tr><td>Minister's Name</td><td><%=properties.get("frMinisterName","&nbsp;")%></td></tr>

                    <tr><td>Associated Department(s)</td><td>
                    <%
              try{
                    Object[] tags = (Object[])properties.get("frDepartment") ;
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
                    <tr><td>Body</td><td><%=properties.get("frArticleBody","&nbsp;")%></td></tr>                                        
                </table>
            </div>
        </div>
    </div>
<!--Start of Google Analytics-->
<script src="/etc/designs/gnb/js/tracking_dam_v4.js"></script>
<%
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {%>


<script>
	var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script>
	var pageTracker = _gat._getTracker("UA-17266347-1");
	pageTracker._trackPageview();
</script>

<%
}
else{
%>

<script>
	var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script>
	var pageTracker = _gat._getTracker("UA-17231199-1");
	pageTracker._trackPageview();
</script>

<%
}
%>
<!--End of Google Analytics-->    

</body>
