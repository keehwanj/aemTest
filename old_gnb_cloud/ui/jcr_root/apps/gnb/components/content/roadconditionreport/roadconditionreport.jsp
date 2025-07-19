<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="java.util.Calendar"%>
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
    String lang = "fr";
    String langSuffix = "_F";
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      langSuffix = "_E";
      lang = "en";
    }
%>
<cq:setContentBundle language="<%=lang%>" />
<%
  Page itemPage=null;
  String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
  
  String roadConditionReportURL = String.format("%s/%s/%s/%s","/content/gnb/trafficdata",selectors[0],selectors[1],selectors[2]);
  itemPage = pageManager.getPage(roadConditionReportURL);
    
  if (itemPage!=null){
      
    //setting header text for English
        String dateFromHeader = properties.get("dateFromText","Date (from)");
        String dateToHeader = properties.get("dateToText","Date (to)");
        String detailsHeader=properties.get("detailsText","Details");
        String reasonHeader =properties.get("reasonHeaderText","Reason");
        String regionHeader=properties.get("regionText","Region");
        String routeHeader =properties.get("routeText","Route");
        String locationHeader=properties.get("locationText","Location");
        
        //set French header text
        if (lang.equalsIgnoreCase("fr")){
            if (dateFromHeader.equals("")||(dateFromHeader.equalsIgnoreCase("Date (from)"))){
                dateFromHeader= "Date (de)";
            }
                
            if (dateToHeader.equals("")||(dateToHeader.equalsIgnoreCase("Date (to)"))){
                dateToHeader="Date (à)";
            }
            
            if (detailsHeader.equals("")||(detailsHeader.equalsIgnoreCase("Details"))){
                detailsHeader="Détails";
            }
         
            if (reasonHeader.equals("")||(reasonHeader.equalsIgnoreCase("Reason"))){
                reasonHeader="Raison";
            }
            
            if (regionHeader.equals("")||(regionHeader.equalsIgnoreCase("Region"))){
                reasonHeader="Région";
            }
            
            if (routeHeader.equals("")||(routeHeader.equalsIgnoreCase("Route"))){
                routeHeader="Route" ;
            }
         
            if (locationHeader.equals("")||(locationHeader.equalsIgnoreCase("Location"))){
                locationHeader="Localité";
            }
        }
  
      ValueMap props = itemPage.getProperties();
     
      SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);
      if(lang.equalsIgnoreCase("fr")) {
            formatWithTime = new SimpleDateFormat("dd MMM yyyy, HH'h'mm", locale);
      }
        
      SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
      
      String fromDateStr="-";
      String toDateStr="-";
    
      if ((GregorianCalendar) props.get("fromDate")!=null){
          GregorianCalendar fromDate = (GregorianCalendar) props.get("fromDate");
          fromDateStr = String.format("%1s", format.format(fromDate.getTime()));
      }
      
      if ((GregorianCalendar) props.get("toDate")!=null){
          GregorianCalendar toDate = (GregorianCalendar) props.get("toDate");
          toDateStr = String.format("%1s", format.format(toDate.getTime()));
      }
   
      String regionText="-";
      String routeText="-";
      String locationText="-";
      String reasonText="-";
      String dateFromText=fromDateStr;
      //new update needed to qa
      String dateToText="-";
      if (!toDateStr.equals(dateFromText)){
          dateToText=toDateStr;
      }
      String detailText="-";
      String otherDetailText="";
      
      if (props.get("region")!=null){
       regionText=(String)props.get("region");
      }
      
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
      
      compareDifference=(time1-time2)/(1000*60*60); //the difference in hours
      if (compareDifference<=48.0){
          if (lang.equals("en")){
                regionText=regionText+ String.format("\t"+ "<font color='red'>NEW!</font>");
          }
          else
                regionText=regionText+ String.format("\t"+ "<font color='red'>NOUVEAU!</font>");
      }
      
      if (props.get(lang+"Route")!=null){
          routeText=(String)props.get(lang+"Route");
      }
    
      
      if (props.get(lang+"Location")!=null && Utils.isNotEmpty(props.get(lang+"Location").toString())){
          locationText=(String)props.get(lang+"Location");
      }
     
      if (props.get("reason")!=null && Utils.isNotEmpty(props.get("reason").toString())){
          reasonText=LocaleSupport.getLocalizedMessage(pageContext,props.get("reason")+"Text");
      }
      
      if (props.get(lang+"Description")!=null && Utils.isNotEmpty(props.get(lang+"Description").toString())){
          detailText=(String)props.get(lang+"Description");
      }
      
      //write out the table
      out.write("<table border='3'>");
      out.write("<tr><td width='15%'><b>");
      out.write(regionHeader);
      out.write("</b></td><td>");
      out.write(regionText);
      out.write("</td></tr><tr><td><b>");
      out.write(routeHeader);
      out.write("</b></td><td>");
      out.write(routeText);
      out.write("</td></tr><tr><td><b>");
      out.write(locationHeader);
      out.write("</b></td><td>");
      out.write(locationText);
      out.write("</td></tr><tr><td><b>");
      out.write(reasonHeader);
      out.write("</b></td><td>");
      out.write(reasonText);
      out.write("</td></tr>");
      
      if (!dateFromText.equals("-")){
          out.write("<tr><td><b>");
          out.write(dateFromHeader);
          out.write("</b></td><td>");
          out.write(dateFromText);
          out.write("</td></tr>");
      }
      
      if (!dateToText.equals("-")){
          out.write("<tr><td><b>");
          out.write(dateToHeader);
          out.write("</b></td><td>");
          out.write(dateToText);
          out.write("</td></tr>");
      }
  
      out.write("<tr><td><b>");
      out.write(detailsHeader);
      out.write("</b></td><td>");
    
    //get the list of details
    //1. closed to emergency vehicle
      if (props.get("closedToEmergencyVehicles")!=null && Utils.isNotEmpty(props.get("closedToEmergencyVehicles").toString())){
           if (lang.equals("fr")){
               otherDetailText= "- Fermé aux véhicules d'uregence: Oui";
           }      
           else 
               otherDetailText= "- Closed to Emergency Vehicles: Yes";
               out.write("<p style= 'font-size:100%;'>"+ otherDetailText+"</p>");
          }
       else{
           if (lang.equals("fr")){
                otherDetailText= "- Fermé aux véhicules d'uregence: Non";
           }      
           else 
                otherDetailText= "- Closed to Emergency Vehicles: No";
                out.write("<p style= 'font-size:100%;'>"+ otherDetailText+"</p>");
      }
       
     
      //2. emergency closure
     if (props.get("emergencyClosure")!=null && Utils.isNotEmpty(props.get("emergencyClosure").toString())){
             
           if (lang.equals("fr")){
                otherDetailText="- Fermeture D'urgence : Oui";
           }
           else otherDetailText="- Emergency Closure: Yes";
           
           out.write("<p style= 'font-size:100%;'>"+ otherDetailText+"</p>");
      }
     /* else{
           if (lang.equals("fr")){
               otherDetailText="- Fermeture d'urgence : Non";
           }
           else otherDetailText="- Emergency Closure : No";
          
           out.write("<p style= 'font-size:100%;'>"+ otherDetailText+"</p>");
             
     }*/
    
     //3. full closure property
     if (props.get("fullClosure")!=null && Utils.isNotEmpty(props.get("fullClosure").toString())){
             
           if (lang.equals("fr")){
                otherDetailText="- Fermeture Complète";
           }
            else otherDetailText="- Full Closure";
           
           out.write("<p style= 'font-size:100%;'>"+ otherDetailText+"</p>");
     }
   
     //4. detour signs in place property
     if (props.get("detourSignsInPlace")!=null && Utils.isNotEmpty(props.get("detourSignsInPlace").toString())){
         
         if (lang.equals("fr")){
              otherDetailText="- Le détour signe le registre l'endroit";
         }
          else otherDetailText="- Detour Signs in Place";
         
         out.write("<p style= 'font-size:100%;'>"+ otherDetailText+"</p>");
     }
    
     //5. reduced to one lane property
     if (props.get("reducedToOneLane")!=null && Utils.isNotEmpty(props.get("reducedToOneLane").toString())){
         
         if (lang.equals("fr")){
              otherDetailText="- Réduit à une petite route";
         }
          else otherDetailText="- Reduced to One Lane";
         
         out.write("<p style= 'font-size:100%;'> "+ otherDetailText+"</p>");
     }
   
     //6. closed to trucks property
     if (props.get("closedToTrucks")!=null && Utils.isNotEmpty(props.get("closedToTrucks").toString())){
         
         if (lang.equals("fr")){
              otherDetailText="- Fermé aux camions";
         }
          else otherDetailText="- Closed to Trucks";
         
         out.write("<p style= 'font-size:100%;'>"+ otherDetailText+"</p>");
      }
     
   
      //7. replacement ferry in service
      if (props.get("replacementFerryInService")!=null && Utils.isNotEmpty(props.get("replacementFerryInService").toString())){
         
         if (lang.equals("fr")){
              otherDetailText="- Bac de remplacement dans le service";
         }
          else otherDetailText="- Replacement Ferry in Service";
         
         out.write("<p style= 'font-size:100%;'>"+ otherDetailText+"</p>");
      }
   
      //8. expect delays 
      if (props.get("expectDelays")!=null && Utils.isNotEmpty(props.get("expectDelays").toString())){
          
          if (lang.equals("fr")){
               otherDetailText="- Attendez-vous au retard";
          }
           else otherDetailText="- Expect Delays";
          
          out.write("<p style= 'font-size:100%;'>"+ otherDetailText+"</p>");
       }
    //9. Other Details
      if (props.get(lang+"Description")!=null && Utils.isNotEmpty(props.get(lang+"Description").toString())){
          otherDetailText=(String)props.get(lang+"Description");
          out.write("<p style= 'font-size:100%;'>- "+ otherDetailText+"</p>");
      }
   
    //10. Traffic content
      if (props.get(lang+"ReportContent")!=null && Utils.isNotEmpty(props.get(lang+"ReportContent").toString())){
          //otherDetailText=(String)props.get(lang+"ReportContent");
          out.write("<p style= 'font-size:100%;'>- Further information: </p>");
          out.write(props.get(lang + "ReportContent", "&nbsp;"));
          //out.write("<br/>"+ "\""+otherDetailText+"\"</p>");
      }
    
      out.write("</td></tr>");
      out.write("</table>");
    
     
  }//if no page found
  else
      if (lang.equals("en")) {
       out.write("Sorry, no information found.");
      } else
          out.write ("Désolé, aucune information trouvée.");
}catch (Exception e){//this catches for the try in the beginning with finding language
    log.error ("Something bad happened on the road condition report",e);
    %><cq:include script="empty.jsp"/><%
}
//styling the table for some bottom border

%>  
