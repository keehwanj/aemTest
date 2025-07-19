<%@include file="/libs/foundation/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Calendar"%>
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
final Session session = resource.getResourceResolver().adaptTo(Session.class);
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



  if(properties.get("mediaAssetRef","")!=null && Utils.isNotEmpty(properties.get("mediaAssetRef",""))) {
    Resource asset = resourceResolver.getResource(properties.get("mediaAssetRef",""));
    if(asset!=null) { 
      Node assetNode = asset.adaptTo(Node.class);
      if(assetNode!=null) {
        Node metadata = assetNode.getNode(Nodes.JCR_CONTENT.nodeType()).getNode(CustomNodes.METADATA.nodeName());
        metadata.setProperty("dam:newsRelease",currentPage.getPath());
        metadata.save();
      }
    }
  }

%>

<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%><body id="newsitem">
    <div id="container"  class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>News Item <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <br /><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <br /><br />
                <table  class="table table-bordered table-striped table-hover">
                    <tr><th colspan="2" class="bg-primary"><b>General Properties</b></th></tr>
                    <tr><td width="15%">Publish Time</td><td width="85%"><%=properties.get("cq:lastReplicated","&nbsp;")%></td></tr>
                    <tr><td>Media Asset</td><td><%=properties.get("mediaAssetRef","&nbsp;")%></td></tr>
                    <tr><td>Show Webcast</td><td><%=properties.get("showWebcast","&nbsp;")%></td></tr>
                    <tr><td>Status</td><td><%=properties.get("status","&nbsp;")%></td></tr>
                    <tr><td>Type</td><td><%=properties.get("type","&nbsp;")%></td></tr>
                    <tr><td>Top News</td><td><%=properties.get("topnews","&nbsp;")%></td></tr>
                    <tr><td>Featured News</td><td><%=properties.get("gnbpage","&nbsp;")%></td></tr>
                    <tr><td>Special Event</td><td><%=properties.get("specialevent","&nbsp;")%></td></tr>

                    <tr><th colspan="2" class="bg-primary"><b>English Properties</b></th></tr>
                    <tr><td>Header</td><td>


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
                    <tr><td>Title</td><td><%=properties.get("enTitle","&nbsp;")%></td></tr>
                    <tr><td>Description</td><td><%=properties.get("enDescription","&nbsp;")%></td></tr>
                    <tr><td>Location</td><td><%=properties.get("enLocation","&nbsp;")%></td></tr>
                    <tr><td>Doc. Number</td><td><%=properties.get("enDocNum","&nbsp;")%></td></tr>
                    <tr><td>Article Body</td><td><%=properties.get("enArticleBody","&nbsp;")%></td></tr>
                    <tr><td>Media Contact</td><td><%=properties.get("enMedia","&nbsp;")%></td></tr>
                    <tr><th colspan="2" class="bg-primary"><b>French Properties</b></th></tr>
                    <tr><td>Header</td><td>
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
                    <tr><td>Title</td><td><%=properties.get("frTitle","&nbsp;")%></td></tr>
                    <tr><td>Description</td><td><%=properties.get("frDescription","&nbsp;")%></td></tr>
                    <tr><td>Location</td><td><%=properties.get("frLocation","&nbsp;")%></td></tr>
                    <tr><td>Doc. Number</td><td><%=properties.get("frDocNum","&nbsp;")%></td></tr>
                    <tr><td>Article Body</td><td><%=properties.get("frArticleBody","&nbsp;")%></td></tr>
                    <tr><td>Media Contact</td><td><%=properties.get("frMedia","&nbsp;")%></td></tr>
                </table>
            </div>
        </div>
    </div>


</body>