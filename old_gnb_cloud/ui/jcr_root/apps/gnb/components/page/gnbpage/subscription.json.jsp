<%@include file="/libs/foundation/global.jsp"%>
<%@page import="org.apache.sling.commons.json.io.*,com.cdyne.ws.weatherws.*" %>
<%@page import="com.day.cq.mailer.MailService"%>
<%@page import="org.apache.commons.mail.HtmlEmail"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="org.apache.commons.mail.HtmlEmail"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@page import="com.day.cq.mailer.MailService"%>

<%
//======Start
//finding the proper language
String lang = "fr";
String lang1 = "_F";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
	lang = "en";
	lang1 = "_E";
}
//======End


//this is ajax code for /apps/gnb/components/content/subscriptionList

String email 			= request.getParameter("email");
String type 			= request.getParameter("type").toUpperCase();
String subscriptionItem = request.getParameter("subscriptionItem");

String emailTitle="GNB Subscription Service";
/**
if(type.equals("unsubscribe@gnb.ca")||type.equals("Unsubscribe")){
	emailTitle="GNB unsubscription request";
}
**/
//remove ":" in front
String subString		= subscriptionItem.substring(1);

//seperating with ":"
String[] sub 			= subString.split(":");
int len = sub.length;
%>
<%
if (Utils.isNotEmpty(email)) {

	MailService mailer = sling.getService(MailService.class);

	StringBuilder message = new StringBuilder();
    message.append("Email : "+email+"<br/>");
    message.append("Type : "+type+"<br/>");
    message.append("Language : "+lang+"<br/>");
    message.append("<br/>");

    //Title sttting
    String[] itemText={"Path","Subscription ID","Page Title"};
    //appending data to StringBuilder
    for(int i=0; i<sub.length;i++){
        message.append("Subscription : "+(i+1)+"<br/>");
        String[] sub_sub=sub[i].split("\\^");
        for(int j=0;j<sub_sub.length;j++){
            if(sub_sub[j].contains("/content/gnb")){													//gnb web
                message.append(itemText[j]+" : "+"https://www2.gnb.ca"+sub_sub[j]+".html"+"<br/>");
            } else if(sub_sub[j].contains("/content/dam/gnb")){											//gnb dam
    			message.append(itemText[j]+" : "+"https://www2.gnb.ca"+sub_sub[j]+"<br/>");
 			} else if(sub_sub[j].contains("/content/enb")){												//enb web
    			message.append(itemText[j]+" : "+"https://www.electionsnb.ca"+sub_sub[j]+".html"+"<br/>");
            } else if(sub_sub[j].contains("/content/dam/enb")){											//enb dam
    			message.append(itemText[j]+" : "+"https://www.electionsnb.ca"+sub_sub[j]+"<br/>");                
            } else if(sub_sub[j].contains("/content/snb")){												//snb web
    			message.append(itemText[j]+" : "+"https://www2.snb.ca"+sub_sub[j]+".html"+"<br/>");
            } else if(sub_sub[j].contains("/content/dam/snb")){											//snb dam
    			message.append(itemText[j]+" : "+"https://www2.snb.ca"+sub_sub[j]+"<br/>");
            } else if(sub_sub[j].contains("/content/myid-monid")){										//myid web
    			message.append(itemText[j]+" : "+"https://myid.gnb.ca"+sub_sub[j]+".html"+"<br/>");
            } else if(sub_sub[j].contains("/content/dam/myid")){										//myid dam
    			message.append(itemText[j]+" : "+"https://myid.gnb.ca"+sub_sub[j]+"<br/>");
            } else if(sub_sub[j].contains("/content/agnb-vgnb")){										//agnb-vgnb web
    			message.append(itemText[j]+" : "+"https://www.agnb-vgnb.ca"+sub_sub[j]+".html"+"<br/>");
            } else if(sub_sub[j].contains("/content/dam/agnb-vgnb")){									//agnb-vgnb dam
    			message.append(itemText[j]+" : "+"https://www.agnb-vgnb.ca"+sub_sub[j]+"<br/>");
            } else if(sub_sub[j].contains("/content/wcat-taat")){										//nbwcat-taatnb web
    			message.append(itemText[j]+" : "+"https://www.nbwcat-taatnb.ca"+sub_sub[j]+".html"+"<br/>");
            } else if(sub_sub[j].contains("/content/dam/wcat-taat")){									//nbwcat-taatnb dam
    			message.append(itemText[j]+" : "+"https://www.nbwcat-taatnb.ca"+sub_sub[j]+"<br/>");
            } else if(sub_sub[j].contains("/content/wel-bien")){										//immigration web
    			message.append(itemText[j]+" : "+"https://www.welcomenb.ca"+sub_sub[j]+".html"+"<br/>");
            } else if(sub_sub[j].contains("/content/dam/wel-bien")){									//immigration dam
    			message.append(itemText[j]+" : "+"https://www.welcomenb.ca"+sub_sub[j]+"<br/>");
            } else{
				message.append(itemText[j]+" : "+sub_sub[j]+"<br/>");
            }
        }//END of inner FOR
         message.append("<br/>");
    }//END of outer FOR

	HtmlEmail mail = new HtmlEmail();
    mail.addTo("subscriptions@gnb.ca"); 
    mail.addTo("keehwan.jee@snb.ca");   
    mail.addTo("Jerry.LeBlanc@snb.ca");   

	mail.setFrom(email);
	mail.setHtmlMsg(message.toString());
    //mail.setSubject("GNB subscription request - " + new String(request.getParameter("type").getBytes("iso-8859-1"), "UTF-8"));
    mail.setSubject(emailTitle);

    mailer.sendEmail(mail);
}
%>

<%
JSONWriter writer = new JSONWriter(response.getWriter());
writer.object();

writer.key("email");
writer.value(email);

writer.endObject();
%>