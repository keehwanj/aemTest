<%@include file="/libs/wcm/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Calendar"%>
<%
String month = "";
String year = "";
String day=currentPage.getName();
String item=currentPage.getName();
  try {
    // Get road conditions report date corresponding to path of the page
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

  
//media ref here, media ref is where the metadata of the page is or where the 2nd component is
  
%>

<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%><body id="trafficitem">
    <div id="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>Road Conditions Report Item <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <br /><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <br /><br />
                <table border="1" cellpadding="5" cellspacing="0" width="95%">
                    <tr><th colspan="2">General Properties</th></tr>
                   
                    <tr><td>Region</td><td><%=properties.get("region","&nbsp;")%></td></tr>
                    <tr><td>Reason</td><td><%=properties.get("reason","&nbsp;")%></td></tr>
                    <tr><td>Closed to Emergency Vehicles</td><td><%=properties.get("closedToEmergencyVehicles","&nbsp;")%></td></tr>
                    <tr><td>Closed to Trucks</td><td><%=properties.get("closedToTrucks","&nbsp;")%></td></tr>
                    <tr><td>Detour Signs in Place</td><td><%=properties.get("detourSignsInPlace","&nbsp;")%></td></tr>
                    <tr><td>Emergency Closure</td><td><%=properties.get("emergencyClosure","&nbsp;")%></td></tr>
                    <tr><td>Expect Delays</td><td><%=properties.get("expectDelays","&nbsp;")%></td></tr> 
                    <tr><td>Full Closure</td><td><%=properties.get("fullClosure","&nbsp;")%></td></tr>
                    <tr><td>Replacement Ferry in Service</td><td><%=properties.get("replacementFerryInService","&nbsp;")%></td></tr>
                    <tr><td>Display to Public</td><td><%=properties.get("displayToPublic","&nbsp;")%></td></tr>
                    <tr><td>Reduced to One Lane</td><td><%=properties.get("reducedToOneLane","&nbsp;")%></td></tr>
       
                    <tr><th colspan="2">English Properties</th></tr>
                    
                    <%
                    //department tr was before the bracket percent
                    /* <tr><td>Department</td><td>*/
                    /*try{
                        
                    Object[] props = (Object[])properties.get("enDepartment") ;
                    if(props!=null) {
                        TagManager tm = resourceResolver.adaptTo(TagManager.class);
                     for(int i=0;i<props.length;i++) {
                         Tag tag = tm.resolve((String)props[i]);
                        out.write(tag.getTitle() + "<br />");
                        
                    }
                    }
                    }catch(Exception ex) {
                         log.error("news article data not tagged with a department",ex);   
                    }*/
                    %>
                    </td></tr>
                    <tr><td>Detail</td><td><%=properties.get("enDescription","&nbsp;")%></td></tr>
                    <tr><td>Location</td><td><%=properties.get("enLocation","&nbsp;")%></td></tr>
                    <tr><td>Route</td><td><%=properties.get("enRoute","&nbsp;")%></td></tr>
                    <tr><td>Traffic Report Content</td><td><%=properties.get("enReportContent","&nbsp;")%></td></tr>
                    
                    <tr><th colspan="2">French Properties</th></tr>
                    
                    <%
                    /*<tr><td>Department</td><td> */
                    /*try {
                        Object[] props = (Object[])properties.get("frDepartment") ;
                    if(props!=null) {
                        TagManager tm = resourceResolver.adaptTo(TagManager.class);
                     for(int i=0;i<props.length;i++) {
                         Tag tag = tm.resolve((String)props[i]);
                        out.write(tag.getTitle() + "<br />");
                        
                    }
                    }
                }catch(Exception ex) {
                    log.error("news article data not tagged with a department",ex);   
               }*/
                    %>
                    </td></tr>
                    <tr><td>Detail</td><td><%=properties.get("frDescription","&nbsp;")%></td></tr>
                    <tr><td>Location</td><td><%=properties.get("frLocation","&nbsp;")%></td></tr>
                    <tr><td>Route</td><td><%=properties.get("frRoute","&nbsp;")%></td></tr>
                    <tr><td>Traffic Report Content</td><td><%=properties.get("frReportContent","&nbsp;")%></td></tr>
                    
                </table>
            </div>
        </div>
    </div>
</body>
