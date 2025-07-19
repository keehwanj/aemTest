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
<%!protected String getLocalization(String key, String defaultValue, Page currentPage, Logger log) {
        try {
            Page myPage = currentPage;
            while (myPage != null) {
                Node myNode = myPage.adaptTo(Node.class);
                if (myNode != null && myNode.hasNode("jcr:content") && myNode.getNode("jcr:content").hasNode("siteFooter") && myNode.getNode("jcr:content").getNode("siteFooter").hasProperty(key)) {
                    Property prop = myNode.getNode("jcr:content").getNode("siteFooter").getProperty(key);
                    if (prop != null && prop.getValue() != null) {
                        String value = (String) prop.getValue().getString();
                        if (Utils.isNotEmpty(value) && !value.equals("undefined"))
                            return value;
                    }
                }
                myPage = myPage.getParent();
            }
        } catch (Exception e) {
            log.error("error getting value for [" + key + "] in sitefooter", e);
        }
        return defaultValue;
    }%>
<%
    //climb up the hierarchy looking for an oppositePage property
    //of the languageSwitcherNode and stop when we find one
    String feedbackAddress = "wwwqueries@gnb.ca";
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
       
        while (myPage != null) {
            if (Utils.isNotEmpty(myPage.getProperties().get("gnbFeedbackAddress", ""))) {
                feedbackAddress = myPage.getProperties().get("gnbFeedbackAddress", "none");
                break;
            }
            myPage = myPage.getParent();
        }
    } catch (Exception ex) {
        log.error("languageSwitcher encountered an error climbing the hierarchy", ex);
    }
%>


<%
    String name = request.getParameter("name");
	byte[]name1 = name.getBytes(StandardCharsets.ISO_8859_1);
	String name2 = new String(name1, StandardCharsets.ISO_8859_1);

    String email = request.getParameter("email");
	byte[] email1 = email.getBytes(StandardCharsets.ISO_8859_1);
	String email2 = new String(email1, StandardCharsets.ISO_8859_1);

	String comments = request.getParameter("comments");
	byte[] comments1 = comments.getBytes(StandardCharsets.ISO_8859_1);
	//String comments2 = new String(comments1, StandardCharsets.UTF_8);
	String comments2 = new String(comments1, StandardCharsets.ISO_8859_1);



%>
<%

    if (Utils.isNotEmpty(request.getParameter("name"))) {

        MailService mailer = sling.getService(MailService.class);

        StringBuilder message = new StringBuilder();
        message.append("<p>" + getLocalization("nameText", "Name", currentPage, log) + " : ");
    	//French accent issue
     	//message.append(request.getParameter("name"));
    	//message.append(new String(request.getParameter("name").getBytes("iso-8859-1"), "UTF-8"));
    	message.append(name2);
        message.append("</p>");

        message.append("<p>" + getLocalization("emailText", "Email", currentPage, log) + " : ");
    	//message.append(request.getParameter("email"));
    	message.append(email2);
        message.append("</p>");

        message.append("<p>" + getLocalization("commentsText", "Comments", currentPage, log) + " : ");
    	//French accent issue
    	//message.append(request.getParameter("comments"));
    	//message.append(new String(request.getParameter("comments").getBytes("iso-8859-1"), "UTF-8"));
		message.append(comments2);

        message.append("</p>");

        message.append("<p>" + getLocalization("addressText", "Address", currentPage, log) + " : ");
        message.append(request.getParameter("address"));
        message.append("</p>");

        message.append("<p>" + getLocalization("phoneText", "Phone Number", currentPage, log) + " : ");
        message.append(request.getParameter("phone"));
        message.append("</p>");

        message.append("<p>" + getLocalization("faxText", "Fax Number", currentPage, log) + " : ");
        message.append(request.getParameter("fax"));
        message.append("</p>");

        message.append("<p>URL : ");
        message.append(request.getParameter("url"));
        message.append("</p>");

        HtmlEmail mail = new HtmlEmail();
        mail.addTo(feedbackAddress);
        mail.addTo(request.getParameter("email"));        
        mail.setFrom(request.getParameter("email"));

        mail.setHtmlMsg(message.toString());
        //Spelling mistake-"Feeback" to "Feedback" corrected by Keehwan(2011-02-28)
    	//French accent issue
        //mail.setSubject("GNB.ca Feedback/ Commentaires " + request.getParameter("name"));
    	//mail.setSubject("GNB.ca Feedback/ Commentaires " + new String(request.getParameter("name").getBytes("iso-8859-1"), "UTF-8"));
		mail.setSubject("GNB.ca Feedback/ Commentaires " + name2);

        mailer.sendEmail(mail);
    //out.write("<response>SENT</response>");
    }
%>


<%


JSONWriter writer = new JSONWriter(response.getWriter());
writer.object();
writer.key("name");
writer.value(name);

writer.key("email");
writer.value(email);

writer.key("comments");
writer.value(comments);

writer.endObject();
%>