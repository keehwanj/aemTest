<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>

<%
  // Get language and content bundle for that language
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
  }
    Calendar cal = Calendar.getInstance();            
    
    //SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
    
    String currentDate=sdf.format(cal.getTime());   
    //java.sql.Date date = new java.sql.Date((new GregorianCalendar(2001, 0, 1)).getTimeInMillis());
    
    //Calendar cal = Calendar.getInstance(); 
    //cal.set( cal.YEAR, cal.get (Calendar.YEAR) ); 
    //cal.set( cal.MONTH, cal.get(Calendar.MONTH)); 
    //cal.set( cal.DATE, cal.get(Calendar.DATE)); 
    //Date currentDate = new Date(cal.getTime().getTime()); 
   
    // add a colon in the time field - in the time zone offset and see if the data is stored as date then?  
    
    out.write ("<form method=POST action='/content/usergenerated/content/forms/gnb/connietestform2/' enctype='multipart/form-data'>"); 
    out.write("Title: <input type='text' name='title' value='' /><br><br>"); 
    out.write("Name: <input type='text' name='text' value='' /><br><br>"); 
    out.write("Last Modified: <input type='text' name='cq:lastModified' value='" + currentDate + "' /><br><br>"); 
    out.write("CQ Distribute: <input type='text' name='cq:distribute' value='true' /><br><br>"); 
    out.write("Last Modified By: <input type='text' name='cq:lastModifiedBy' value='admin' /><br><br>");
    out.write("<input type=Submit />");

    out.write("</form>"); 
%>



