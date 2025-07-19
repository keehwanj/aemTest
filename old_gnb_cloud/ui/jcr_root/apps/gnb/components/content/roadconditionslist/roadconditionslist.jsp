<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.wcm.api.components.DropTarget"%>
<%@page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.t4g.cnb.utils.ListItem"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>

<%//delete after done!! -'/libs/foundation/global.jsp' %>
<%@page session="false" import="javax.jcr.*,
        org.apache.sling.api.resource.Resource,
        com.day.cq.wcm.commons.WCMUtils,
        com.day.cq.wcm.api.Page,
        com.day.cq.wcm.api.NameConstants,
        com.day.cq.wcm.api.PageManager,
        com.day.cq.wcm.api.designer.Designer,
        com.day.cq.wcm.api.designer.Design,
        com.day.cq.wcm.api.designer.Style,
        org.apache.sling.api.resource.ValueMap,
        com.day.cq.wcm.api.components.ComponentContext,
        com.day.cq.wcm.api.components.EditContext"
%><%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0" %><%
%><%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %><%
%><%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%
%><%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %><%
%><%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %><%
%><cq:defineObjects /><%
    // add more initialization code here
%>

<%
try{
    //finding the proper language
    String lang = "fr";
    String langSuffix = "FRE";
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
        lang = "en";
        langSuffix = "ENG";
    }
    %>
    <cq:setContentBundle language="<%=lang%>" />
    <%
    //date type setting
    SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
    
    //setting header text for English
    String date_fromHeader = properties.get("dateFromText","Date (from)");
    String date_toHeader = properties.get("dateToText","Date (to)");
    String routeHeader =properties.get("routeText","Route");
    String locationHeader=properties.get("locationText","Location");
    String locationSubtitleHeader=properties.get("locationSubtitleText","(See details)");
    String reasonHeader =properties.get("reasonHeaderText","Reason");
    
    //for renderging page
    String rendererPage=properties.get("rendererRef","");
    //set French renderer and headings
    if (lang.equalsIgnoreCase("fr")){
        
        //setting header text for French 
        if (date_fromHeader.equals("")||(date_fromHeader.equals("Date (from)"))){
            date_fromHeader= "Date (de)";
        }
            
        if (date_toHeader.equals("")||(date_toHeader.equals("Date (to)"))){
            date_toHeader="Date (à)";
        }
        
        if (routeHeader.equals("")||(routeHeader.equals("Route"))){
            routeHeader="Route" ;
        }
            
        if (locationHeader.equals("")||(locationHeader.equals("Location"))){
             locationHeader="Localité";
        }
          
        if (locationSubtitleHeader.equals("")||(locationSubtitleHeader.equals("(See details)"))){
            locationSubtitleHeader="(Voir plus d'information)";
        }
           
        if (reasonHeader.equals("")||(reasonHeader.equals("Reason"))){
             
            reasonHeader="Raison";
        }
        
     
    }//end if of the lang=fr header
    
    String listStyle = properties.get("listStyle", "none");
    
    boolean showDate = properties.get("showDate", false);
    boolean showDescription = properties.get("showDescription", false);
    String moreLink = properties.get("moreLink", "none");
    String moreLinkText = properties.get("moreLinkText", moreLink);
    boolean padded = properties.get("padded", false);
    boolean shaded = properties.get("shaded", false);
    boolean border = properties.get("border", false);   
    WCMMode mode = WCMMode.fromRequest(request);
    
    if (mode == WCMMode.EDIT) {
            //drop target css class = dd prefix + name of the drop target in the edit config
            String ddClassName = DropTarget.CSS_CLASS_PREFIX + "pages";
            out.write("<div>");
    }

    if (properties.get("feedEnabled", false)) {
          String title = (String)properties.get("feedname", null) != null ? (String)properties.get("feedname", null) : currentNode.getName();
         %><link rel="alternate" type="application/rss+xml" title="<%=title %>" href="<%=resource.getPath()%>.rss.html" /><%
    }
      
    try {
        String path = properties.get("parentPage", "");
        
        if (path.equals("")) {
            currentNode.setProperty("parentPage", currentPage.getPath());
            currentNode.save();
            
        }
    } catch (Exception e) {
    }
   
    // initialize the list
%>
<cq:include script="init.jsp" /> 

<%
    List list = (List) request.getAttribute("list");
    if (!list.isEmpty()) {
      
    String containerClass = listStyle + " ";
        if (padded)
            containerClass += "padded ";
        if (shaded)
            containerClass += "shaded ";
        if (border)
            containerClass += "border ";
       out.write(String.format("<div class=\"%s\">", containerClass));

        WCMMode includemode = WCMMode.DISABLED.toRequest(request);
       
        try {
            Iterator<Page> items = list.getPages();
            Date lastUpdated = currentPage.getLastModified().getTime();
            
          //header stuff
            out.write("<table border='2' ><tr>");
            out.write("<th width='15%'>");
            out.write(date_fromHeader);
            out.write("</th><th width='15%'>");
            out.write(date_toHeader);
            out.write("</th><th width='12%'>");
            out.write(routeHeader);
            out.write("</th><th >");
            out.write(locationHeader);
            out.write("<font size='1'> ");
            out.write (locationSubtitleHeader);
            out.write ("</font></th><th width='34%'>");
            out.write(reasonHeader);
            out.write("</th></tr>");
            
            
            while (items.hasNext()) {
                Page item = items.next();
                //converting Page to pageManager and property
                String itemPath = item.getPath();
                Page itemPage = pageManager.getPage(itemPath);
                ValueMap props = itemPage.getProperties();
               
                if (props.get("displayToPublic")!=null && Utils.isNotEmpty(props.get("displayToPublic").toString())){
                    String fromDateStr ="-";      
                    String toDateStr ="-";
                    
                    if ((Calendar) props.get("fromDate")!=null){
                        Calendar fromDate = (Calendar) props.get("fromDate");
                        fromDateStr = String.format("%1s", format.format(fromDate.getTime()));
                    }
                    
                    if ((Calendar) props.get("toDate")!=null){
                        Calendar toDate = (Calendar) props.get("toDate");
                        toDateStr = String.format("%1s", format.format(toDate.getTime()));
                        if (toDateStr.equalsIgnoreCase(fromDateStr)){
                            toDateStr="-";
                        }
                    }
                    //get the route from the english or french tab
                    String routeStr= "-";
                    if (props.get(lang+"Route")!=null){
                        routeStr= (String) props.get(lang+"Route");
                    }
                    
                                  
                    String reasonStr="-";
                    if (props.get("reason")!=null && Utils.isNotEmpty(props.get("reason").toString())){
                        reasonStr=LocaleSupport.getLocalizedMessage(pageContext,props.get("reason")+"Text");
                    }
                    String emergencyVeh="";
                    
                    if (props.get("closedToEmergencyVehicles")!=null && Utils.isNotEmpty(props.get("closedToEmergencyVehicles").toString())){
                        if (lang.equals("en")) {
                            emergencyVeh="<br/> <font color='#800517'>Closed to Emergency Vehicles</font>";
                        }
                        else
                            emergencyVeh="<br/> <font color='#800517'>Fermé aux véhicules d'uregence</font>"; 
                     
                    }
                  
                    // Calculate time and difference whether it is a new report or not
                    // If it is within 48 hours of the publish/updated date, it is a new report
                    Calendar currentTime=Calendar.getInstance();
                    Calendar lastUpdatedTime= (Calendar) props.get("cq:lastModified");
                    Calendar createdTime= (Calendar) props.get("jcr:created");
                    
                    Date updated= lastUpdatedTime.getTime();
                    Date created= createdTime.getTime();
                    if (updated.before(created)){
                        updated=created;
                    }
                    long time1=currentTime.getTimeInMillis();
                    long time2=lastUpdatedTime.getTimeInMillis();
                    double compareDifference=0.00;
                    
                    compareDifference=(time1-time2)/(1000*60*60);
                    
                    if (compareDifference<=48.0){
                        if (lang.equals("en")){
                              reasonStr=reasonStr + String.format("\t"+ "<font color='red'>NEW!</font>")+emergencyVeh;
                        }
                        else{
                              reasonStr=reasonStr + String.format("\t"+ "<font color='red'>NOUVEAU!</font>")+emergencyVeh;
                        }
                    }
                    else{
                        if (lang.equals("en")){  
                            reasonStr=reasonStr +emergencyVeh;
                        }
                        else{
                            reasonStr=reasonStr +emergencyVeh;
                        }
                    }
                    
                   String locationStr= "-";
                    if (props.get(lang+"Location")!=null){
                        locationStr= (String) props.get(lang+"Location");
                    } 
                    
                  
                  //get the location from the english or french tab 
                    //with the href to the rendering page of the report
                    String selector="";
                    String href="";
                    String selectors[]= itemPath.split("/");
                    
                    if (selectors.length > 0) {
                        selector = String.format("%s.%s.%s.html", selectors[4], selectors[5], selectors[6]);
                    }
                    if (rendererPage.equals("")){
                        if (lang.equalsIgnoreCase("en")){
                            rendererPage="/content/gnb/en/corporate/roadconditionslist/roadconditionreport";
                            
                        }
                        else
                            rendererPage="/content/gnb/fr/corporate/roadconditionslist_fr/roadconditionreport_fr";
                    }   
                                  
                   href=String.format("%s.%s",rendererPage,selector);
                  
                    //table body part
                    out.write("<tr><td>");
                    out.write(fromDateStr);
                    out.write("</td><td>");
                    out.write(toDateStr);
                    out.write("</td><td>");
                    out.write(routeStr);
                    out.write("</td> <td>");
                    //out.write(href);
                    out.write(String.format("<a href=\"%s\">%s</a>",href,locationStr));   
                    out.write("</td> <td>");
                    out.write(reasonStr);
                    
                    out.write("</td> </tr>");
                
                  }//end of if displayToPublic
      
            }//end of while
            out.write("</table>"); //end of table
            
            if (list.isPaginating()) {
 %><cq:include script="pagination.jsp" /> <%
            }
        //end of try iterator
        } finally {
            //out.write("</ul>");
            includemode.toRequest(request);
        }

       if (!moreLink.equalsIgnoreCase("none")) {
            out.write("<div class=\"morelink\">");

            if (moreLink.startsWith("/")) {
                String link = Utils.getQuicklink(moreLink, currentPage,resource);
                if (Utils.isNotEmpty(moreLinkText)
                        && !moreLink.equalsIgnoreCase(moreLinkText)) {
                    link = link.replaceFirst(">.*<", ">"
                            + moreLinkText.replaceAll("[$]", "\\$")
                            + "<");
                }
                out.write(link);

            } else {
                out.write(String.format(
                        "<a class=\"external\" href=\"%s\">%s</a>",
                        moreLink, moreLinkText));
            }
            out.write("</div>");
        }//end of if more Link

        out.write("</div>");
    //end of if the list!=empty    
    } else {
        //special code to look to the previous sibling in the paragraph container
        //if it is a section title then we assume it is related to this list and hide it
        //Node currentNode;

        if ((WCMMode.fromRequest(request) == WCMMode.DISABLED || (WCMMode
                .fromRequest(request) == WCMMode.PREVIEW))) {
 %>  <%
        }//end of if the WCMMode If
 %><cq:include script="empty.jsp" /> <%
    }// end of else list!=empty

    if (mode == WCMMode.EDIT) {
        out.write("</div>");
    }
 
        
  // }//end of for loop to iterate through different parent pages
  //}//end of try list according to language page (the first try)


} catch (Exception e){//this catches for the try in the beginning with finding language
        log.error ("Something bad happened on the road condition list",e);
        %><cq:include script="empty.jsp"/><%
}

 %>