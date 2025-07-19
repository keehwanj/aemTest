<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="java.util.Calendar"%>
<%@page import="org.apache.commons.lang.StringEscapeUtils"%>

<%
//======Start
//finding the proper language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
//======End

//SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd", locale);

String listStyle = properties.get("listStyle", "none");
boolean padded = properties.get("padded", false);
boolean shaded = properties.get("shaded", false);
boolean border = properties.get("border", false);
Calendar event_date = (GregorianCalendar) properties.get("event_date", new GregorianCalendar());
Calendar now = new GregorianCalendar();

int year = event_date.get(Calendar.YEAR);
int month = event_date.get(Calendar.MONTH);
int day = event_date.get(Calendar.DAY_OF_MONTH);


String before_body = properties.get("before_body", "");
String after_body = properties.get("after_body", "");
String result_link = properties.get("result_link", "");
String result_text = properties.get("result_text", "");

//setting text for English/French
/**
String deadlineText = properties.get("deadlineText", "");
if(deadlineText.equalsIgnoreCase("")){
	deadlineText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "deadline"));
}
**/
if(Utils.isNotEmpty(before_body) && Utils.isNotEmpty(before_body)){
//======Start of css
	String containerClass = listStyle + " ";
	if (padded){
		containerClass += "padded ";
	}
	if (shaded){
    	containerClass += "shaded ";
	}
	if (border){
    	containerClass += "border ";
	}
//======End of css

	out.write(String.format("<div class=\"%s\">", containerClass));

//======Start of body
	if(event_date.after(now)){
		out.print(before_body);
	}
	else{
		out.print(after_body);
	}	
//======End of body

//======Start of result
	if(Utils.isNotEmpty(result_link) && Utils.isNotEmpty(result_text)){
		Date eventDate = new GregorianCalendar(year, month, day).getTime();
		Date today = new Date();
		long diff = (today.getTime()-eventDate.getTime())/(1000 * 60 * 60 * 24);    
        //out.print("diff : " +diff+ "<br/>");
		if((diff>=-4)&&(diff<11)){
			out.print("<p class='bluearrow'>");
    		String result ="";
			if (result_link.startsWith("/")) {    
    			result = String.format("<a href=\"%s.html\">%s</a>", result_link, result_text);    
    		}
    		else{
    			result = String.format("<a href=\"%s\">%s</a>", result_link, result_text);    
    		}
			out.write(result);
			out.print("</p>");    
        }
	}
//======End of result
	out.write("</div>");
}
else{
    %><img src="/libs/cq/ui/resources/0.gif" class="cq-list-placeholder" alt=""><%
}
%>

