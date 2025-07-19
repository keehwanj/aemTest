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
String deptDataPage = Utils.getConfigurationProperty("cnbDepartmentMetadata", configurationPage);
String activePath = deptDataPage+"/active/"; 
String inactivePath = deptDataPage+"/inactive/"; 
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
                    <tr><th colspan="2">General Properties</th></tr>
                    <tr><td width="30%">Deadline</td><td width="70%"><%=properties.get("deadline","&nbsp;")%></td></tr>
                    <tr><td>Email address</td><td><%=properties.get("email","&nbsp;")%></td></tr>
                    <tr><td>Telephone</td><td><%=properties.get("telephone","&nbsp;")%></td></tr>
                    <tr><td>Fax</td><td><%=properties.get("fax","&nbsp;")%></td></tr>
                    <tr><td>Bilingual Draft Reguation(PDF)</td><td><%=properties.get("bi_draftregulation","&nbsp;")%></td></tr>                    
                    <tr><th colspan="2">English Properties</th></tr>
                    <tr><td>Department</td><td>
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
                    <tr><td>Title</td><td><%=properties.get("en_title","&nbsp;")%></td></tr>
                    <tr><td>Note</td><td><%=properties.get("en_note","&nbsp;")%></td></tr>
                    <tr><td>English Draft Reguation(PDF)</td><td><%=properties.get("en_draftregulation","&nbsp;")%></td></tr>


                    <tr><th colspan="2">French Properties</th></tr>
                    <tr><td>Department</td><td>
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
                    <tr><td>Title</td><td><%=properties.get("fr_title","&nbsp;")%></td></tr>
                    <tr><td>Note</td><td><%=properties.get("fr_note","&nbsp;")%></td></tr>
                    <tr><td>French Draft Reguation(PDF)</td><td><%=properties.get("fr_draftregulation","&nbsp;")%></td></tr>                    
                </table>
            </div>
        </div>
    </div>


</body>