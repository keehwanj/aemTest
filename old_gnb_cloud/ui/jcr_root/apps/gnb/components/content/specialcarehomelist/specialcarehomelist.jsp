<%--
  Copyright 2011 Communications New Brunswick
  All Rights Reserved.

  ==============================================================================

  Special Care Home component

--%>
<%@ include file="/libs/wcm/global.jsp"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.DriverManager"%>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@ page import="javax.sql.DataSource"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourceNotFoundException"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourcePool"%>

<%
//finding the proper language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
%>

<cq:setContentBundle language="<%=lang%>" />

<%
final Session mySession = slingRequest.getResourceResolver().adaptTo(Session.class);
Connection conn = null;
PreparedStatement pstmt = null;

//out.write(location);

DataSourcePool dataSourceService = sling.getService(com.day.commons.datasource.poolservice.DataSourcePool.class);
DataSource dataSource = (DataSource) dataSourceService.getDataSource("AccessSpecialCareHomeDB");    
conn = dataSource.getConnection();
/*
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
String sDBQ = "C:\\database\\SpecialCareHome.mdb";
String database = "jdbc:odbc:Driver={Microsoft Access Driver (*.mdb)};DBQ=" + sDBQ + ";DriverID=22;READONLY=true";
conn = DriverManager.getConnection(database);
*/

String location = properties.get("location", "");

String SQL="";
if(location.equals("")){
    SQL="SELECT * FROM Special_Care_Home";  
    SQL=SQL + " ORDER BY  Reg_Name";
}
if(!location.equals("")){
    SQL="SELECT * FROM Special_Care_Home WHERE region='"+location+"'";
    SQL=SQL + " ORDER BY  Reg_Name";
}

//SQL="SELECT * FROM Special_Care_Home WHERE region='"+location+"'";

//out.write(SQL);
//pstmt = conn.prepareStatement("SELECT * FROM Special_Care_Home WHERE region='"+location+"'");
pstmt = conn.prepareStatement(SQL);
ResultSet rs = pstmt.executeQuery();

String id;
String Reg_Name;
String C_city_Town_Name;
String service_Lang;
String ApprovedSpaces;


//setting header text for English/French
String header_facility = properties.get("header_facility", "");
if(header_facility.equalsIgnoreCase("")){
    header_facility=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "header_facility"));
}
String header_language = properties.get("header_language", "");
if(header_language.equalsIgnoreCase("")){
    header_language=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "header_language"));
} 

String header_location = properties.get("header_location", "");
if(header_location.equalsIgnoreCase("")){
    header_location=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "header_location"));
} 

String header_max = properties.get("header_max", "");
if(header_max.equalsIgnoreCase("")){
    header_max=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "header_max"));
} 

String renderer_page = properties.get("renderer_page", "");
String href;
String extention;
int i;

//setting the default rederering pages 
if(renderer_page.equalsIgnoreCase("")){
    if(lang.equalsIgnoreCase("en")){
        renderer_page = "/content/gnb/en/news/abc_renderer";
    }
    else{
        renderer_page = "/content/gnb/fr/nouvelles/abc_renderer";
    }
}

//Table tag 
out.write("<table width='100%'>");
//th tag in Table
out.write("<tr>");
out.write("<th width='5%'>");    
out.write("No");
out.write("</th>");
out.write("<th  width='40%'>");
out.write(header_facility);
out.write("</th>");
out.write("<th  width='20%'>");
out.write(header_location);
out.write("</th>");
out.write("<th  width='20%'>");
out.write(header_language);
out.write("</th>");
out.write("<th  width='15%'>");
out.write(header_max);
out.write("</th>");
out.write("</tr>");
int num=0;
while (rs.next()) 
    {
    num=num+1;
    //out.write(num+"");
    id               =rs.getString("id")+"";
    Reg_Name         =rs.getString("Reg_Name");
    C_city_Town_Name =rs.getString("C_city_Town_Name");
    service_Lang     =rs.getString("service_Lang_"+lang);
    ApprovedSpaces   =rs.getString("ApprovedSpaces");
    extention="html";
    href = String.format("%s.%s.%s", renderer_page, id, extention);
    //out.write(href);
    //out.write("<br/>");
    
//content for data from database
    out.write("<tr>");
    out.write("<td>");    
    out.write(num+"");
    out.write("</td>");
    out.write("<td>");
    out.write(String.format("<a href=\"%s\">%s</a>",href,Reg_Name));     
    //out.write(Reg_Name);
    out.write("</td>");
    out.write("<td>");
    out.write(C_city_Town_Name);
    out.write("</td>");
    out.write("<td>");
    out.write(service_Lang);
    out.write("</td>");
    out.write("<td>");
    out.write(ApprovedSpaces);
    out.write("</td>");
    out.write("</tr>");
}
out.write("</table>");
rs.close();
pstmt.close();
conn.close();  
%>

