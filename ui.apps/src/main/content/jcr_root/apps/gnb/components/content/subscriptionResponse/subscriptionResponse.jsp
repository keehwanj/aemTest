<%@ include file="/libs/foundation/global.jsp" %>
<%@page import="org.apache.commons.mail.HtmlEmail"%>
<%@page import="com.day.cq.mailer.MailService"%>
<%@page import="org.apache.commons.lang3.StringUtils"%>

<%@page import="java.net.URLEncoder"%>
<%@page import="java.net.URLDecoder"%>



<%
//getting email, type, pages, submit from GET method
//String email	= request.getParameter("email");
String id		= request.getParameter("id");    
String type 	= request.getParameter("type");
String pages 	= request.getParameter("pages");
//String titles 	= request.getParameter("titles");
String titles 	= request.getParameter("titles");

//in case of no titles is passed
if(titles==null || titles.isEmpty()){
	titles=pages;
}

String submit 	= request.getParameter("submit");

//getting values from dialog
String emailText	= properties.get("emailText", "ID");
String typeText		= properties.get("typeText", "Type");
String pageText		= properties.get("pageText", "Pages");

String emailText_e	= properties.get("emailText_e", "ID");
String typeText_e	= properties.get("typeText_e", "Type");
String pageText_e	= properties.get("pageText_e", "Pages");


String buttonColor	= properties.get("buttonColor", "panel-primary");
String buttonText	= properties.get("buttonText", "Submit");

String successText	= properties.get("successText", "Sent message successfully...");
String failText		= properties.get("failText", "Error: unable to send message...");
String resultText	= properties.get("resultText", "Result");
String resultText2	= properties.get("resultText2", "Result2");

String url= request.getQueryString();//The was is used because in request.getParameter("titles")  %2C is same with comma(,)""



/*
for(int i=0;i<title_2.length;i++){
    out.print(URLDecoder.decode(title_2[i]));
    out.print("<br/>");
}
*/
//URLDecoder.decode(param1AfterEncoding, "UTF-8");



String result	= "";

if(StringUtils.isEmpty(id)||StringUtils.isEmpty(type)||StringUtils.isEmpty(pages)){
    id="";
    type="";
    pages="";
    titles="";
    result=failText;
	%>
	<div class="text-center text-primary"><strong><%=result%></strong></div>
	<br/><br/>
<%
}else{
	String[] url_new 			= url.split("\\&", 0); 
/*
for(int i=0; i<url_new.length;i++){
    out.print(url_new[i]);
    out.print("<br/>");
}
*/

	String title_1=url_new[3].replace("titles=","");//title
	String[] title_2=title_1.split("\\,", 0);

    String[] list 			= pages.split("\\,", 0); 
    String[] list_titles 	= titles.split("\\,", 0); 



    String keehwan	="keehwan.jee@snb.ca";
    String jerry	="Jerry.leblanc@gnb.ca ";
    String to		="subscriptions@gnb.ca";
	String from		=to;
	String emailTitle="GNB Subscription Service";
    result=successText;
    type=type.toUpperCase();

     MailService mailer = sling.getService(MailService.class);
     StringBuilder message = new StringBuilder();
	 message.append("ID : "+id+"<br/>");
	 message.append("Type : "+type+"<br/>");
	 message.append("<br/>");

	 for(int i=0; i<list.length;i++){
     	message.append("Subscription : "+(i+1));
    	message.append("<br/>");  

        message.append("Subscription ID : "+list[i]);
    	message.append("<br/>");  
        message.append("<br/>");  
	 }

	 try{
		HtmlEmail mail = new HtmlEmail();
        mail.addTo(jerry);//to
        mail.addTo(keehwan);//to
        mail.addTo(to);//to  
        mail.setFrom(from);//from
		mail.setHtmlMsg(message.toString());

        mail.setSubject(emailTitle);//subject
        mailer.sendEmail(mail);//sending

		result=successText;

	}catch(Exception e){
    	result=failText;

	}
    %>
	<dl>
    	<dt><%=resultText%></dt>
 	<%
	for(int i=0; i<title_2.length;i++){
    %>
        <dd>- <%=URLDecoder.decode(title_2[i])%></dd>
    <%}%>
        <br/>
        <dt><%=resultText2%></dt>
  </dl>  
<%
}  
%>

