<%@include file="/libs/foundation/global.jsp"%>
<%@ page import="org.apache.sling.commons.json.io.*,com.cdyne.ws.weatherws.*" %>
<%@ page import="com.day.cq.mailer.MailService"%>
<%@ page import="org.apache.commons.mail.HtmlEmail"%>
<%@ page import="org.slf4j.Logger"%>
<%@ page import="java.util.Locale"%>
<%@ page import="com.day.cq.wcm.api.Page"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>
<%@ page import="org.apache.commons.mail.HtmlEmail"%>
<%@ page import="org.apache.sling.api.resource.ValueMap"%>
<%@ page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@ page import="com.day.cq.mailer.MailService"%>
<%
    String sUrl = ""; 
    String selectors = ".";
    try {
    	
        Page myPage = currentPage;
        sUrl = myPage.getPath();
        String[] selectorArray = slingRequest.getRequestPathInfo().getSelectors();
        
        //get the selectors - if there are any - to build the url for the page  
        
        for (int i = 0; i < selectorArray.length; i++) {
        	 selectors = selectors + selectorArray[i] + "." ;
        }
        // remove the period after the last selector or remove period if no selectors 
        selectors = selectors.substring(0, selectors.length() -1 ); 
        sUrl = "http://www2.gnb.ca" + sUrl + selectors + ".html"; 
        //out.write("***sUrl = *** = " + sUrl); 
       
    } catch (Exception ex) {
        log.error("languageSwitcher encountered an error climbing the hierarchy", ex);
    }
%>


<%
    //String email = "keehwan.jee@snb.ca";

	String q1=new String(request.getParameter("q1").getBytes("iso-8859-1"), "UTF-8");
	String q2=new String(request.getParameter("q2").getBytes("iso-8859-1"), "UTF-8");
	String q3=new String(request.getParameter("q3").getBytes("iso-8859-1"), "UTF-8");
	String q4=new String(request.getParameter("q4").getBytes("iso-8859-1"), "UTF-8");
	String q5=new String(request.getParameter("q5").getBytes("iso-8859-1"), "UTF-8");
	String q6=new String(request.getParameter("q6").getBytes("iso-8859-1"), "UTF-8");
	String q7=new String(request.getParameter("q7").getBytes("iso-8859-1"), "UTF-8");

	String q8=new String(request.getParameter("q8").getBytes("iso-8859-1"), "UTF-8");
	String q9=new String(request.getParameter("q9").getBytes("iso-8859-1"), "UTF-8");
	String q10=new String(request.getParameter("q10").getBytes("iso-8859-1"), "UTF-8");
	String q11=new String(request.getParameter("q11").getBytes("iso-8859-1"), "UTF-8");
	String q12=new String(request.getParameter("q12").getBytes("iso-8859-1"), "UTF-8");
	String q13=new String(request.getParameter("q13").getBytes("iso-8859-1"), "UTF-8");
	String url=new String(request.getParameter("url").getBytes("iso-8859-1"), "UTF-8");
	String email=new String(request.getParameter("email").getBytes("iso-8859-1"), "UTF-8");

//String email = properties.get("email_address", "");

%>
<%

    if (Utils.isNotEmpty(request.getParameter("q1"))) {

        MailService mailer = sling.getService(MailService.class);

        StringBuilder message = new StringBuilder();
        message.append("<p>1. Name of Company : ");
    	//French accent issue
     	//message.append(request.getParameter("name"));
    	message.append(q1);
        message.append("</p>");

        message.append("<p>2. Address : ");
        message.append(q2);
        message.append("</p>");

        message.append("<p>3. Contact person(s) & their coordinates(phone, fax & e-mail) : ");
       	message.append(q3);
        message.append("</p>");    

        message.append("<p>4. Website address : ");
       	message.append(q4);
        message.append("</p>");    

        message.append("<p>5. Contract costs (1 day, ½ day) : ");
       	message.append(q5);
        message.append("</p>");  


        message.append("<p>6. Travel expenses : ");
       	message.append(q6);
        message.append("</p>");


        message.append("<p>7. Brief description of courses offered : ");
       	message.append(q7);
        message.append("</p>");

        message.append("<p>8. Area(s) of specialty : ");
       	message.append(q8);
        message.append("</p>");

        message.append("<p>9. Online training (if any) : ");
       	message.append(q9);
        message.append("</p>");    

        message.append("<p>10. Bilingual Capacity : ");
       	message.append(q10);
        message.append("</p>");

        message.append("<p>11. Years in business : ");
       	message.append(q11);
        message.append("</p>");

        message.append("<p>12. Experience teaching the public sector : ");
       	message.append(q12);
        message.append("</p>");  

        message.append("<p>13. References to contact re teaching in the public service : ");
       	message.append(q13);
        message.append("</p>");  

        message.append("<p>13. URL : ");
       	message.append(url);
        message.append("</p>");      

        HtmlEmail mail = new HtmlEmail();
    //mail.addTo(feedbackAddress);
        mail.addTo(email);        
        mail.setFrom(email);

        mail.setHtmlMsg(message.toString());
        //Spelling mistake-"Feeback" to "Feedback" corrected by Keehwan(2011-02-28)
    	//French accent issue
        //mail.setSubject("GNB.ca Feedback/ Commentaires " + request.getParameter("name"));
    	mail.setSubject("Service Provider Information-" + new String(request.getParameter("q1").getBytes("iso-8859-1"), "UTF-8"));

        mailer.sendEmail(mail);
    //out.write("<response>SENT</response>");
    }
%>


<%


JSONWriter writer = new JSONWriter(response.getWriter());
writer.object();
writer.key("q1");
writer.value(q1);
writer.key("q2");
writer.value(q2);
writer.key("q3");
writer.value(q3);
writer.key("q4");
writer.value(q4);
writer.key("q5");
writer.value(q5);
writer.key("q6");
writer.value(q6);
writer.key("q7");
writer.value(q7);

writer.key("q8");
writer.value(q8);
writer.key("q9");
writer.value(q9);
writer.key("q10");
writer.value(q10);
writer.key("q11");
writer.value(q11);
writer.key("q12");
writer.value(q12);
writer.key("q13");
writer.value(q13);


writer.endObject();
%>