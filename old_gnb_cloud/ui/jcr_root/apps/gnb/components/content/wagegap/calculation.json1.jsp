<%@include file="/libs/foundation/global.jsp"%>
<%@ page import="org.apache.sling.commons.json.io.*" %>
<%@ page import="com.adobe.cq.*" %>
<%@page import="ca.gnb.women.wagegap.WageGap"%>
<%
/**
String women_no = (int)request.getParameter("women_no");
String women_dollar = (int)request.getParameter("women_dollar");
String women_cent = (int)request.getParameter("women_cent");

String men_no = (int)request.getParameter("men_no");
String men_dollar = (int)request.getParameter("men_dollar");
String men_cent = (int)request.getParameter("men_cent");
**/
//WageGap wg=new WageGap(women_no,women_dollar,women_cent,men_no,men_dollar,men_cent);
//double newwg=wg.calculate();

String women_no = request.getParameter("women_no");
String women_dollar = request.getParameter("women_dollar");
String women_cent = request.getParameter("women_cent");

String men_no = request.getParameter("men_no");
String men_dollar = request.getParameter("men_dollar");
String men_cent = request.getParameter("men_cent");

out.write(women_no);

//Send the data back to the client 
JSONWriter writer = new JSONWriter(response.getWriter());
//writer.object();
/**
writer.key("women_no");
writer.value(women_no);
writer.key("women_dollar");
writer.value(women_dollar);
writer.key("women_cent");
writer.value(women_cent);

writer.key("men_no");
writer.value(men_no);
writer.key("men_dollar");
writer.value(men_dollar);
writer.key("men_cent");
writer.value(women_cent);
**/
writer.key("newwg");
writer.value("KEEEEEE");
writer.endObject();
%>



