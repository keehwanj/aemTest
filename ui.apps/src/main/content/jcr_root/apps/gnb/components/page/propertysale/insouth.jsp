<%--
==============================================================================
  Copyright 2012 Department of Government Services
  Web Services

  All Rights Reserved.

  Onsite Sewage Insouth component
==============================================================================
--%>

<%@ include file="/libs/wcm/global.jsp"%>

<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@ page import="javax.sql.DataSource"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourceNotFoundException"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourcePool"%>

<%@ page import="com.t4g.cnb.enums.CustomNodes"%>
<%@ page import="com.t4g.cnb.enums.Multimedia"%>
<%@ page import="com.t4g.cnb.enums.Nodes"%>

<%
final Session mySession = slingRequest.getResourceResolver().adaptTo(Session.class);
Connection conn = null;
PreparedStatement pstmt = null;

Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
String sDBQ = "C:\\database\\doh\\onsitesewage\\south.mdb";
String database = "jdbc:odbc:Driver={Microsoft Access Driver (*.mdb)};DBQ=" + sDBQ + ";DriverID=22;READONLY=true";
conn = DriverManager.getConnection(database);

String SQL="";

SQL="SELECT * FROM data";  
SQL=SQL + " ORDER BY company_name";

pstmt = conn.prepareStatement(SQL);
ResultSet rs = pstmt.executeQuery();

String id;
String company_name;
String licence_no;
String last_name;
String first_name;

String city_name;
String region;
String phone_no;
String type_license;
int num=0;
NodeIterator nodeIter;

while (rs.next()) 
    {
    num=num+1;
    //out.write(num+"");
    //id               =rs.getString("id")+"";
    id               =num+"";
    //out.println(id);
    out.println(num);
    out.println("\t");
    company_name     =rs.getString("company_name");
    out.println(company_name);
    out.println("\t");
  
    licence_no       =rs.getString("licence_no");
    last_name        =rs.getString("last_name");
    first_name       =rs.getString("first_name");

    city_name        =rs.getString("city_name");  
    region           =rs.getString("region");    
    phone_no         =rs.getString("phone_no");    
    type_license     =rs.getString("type_license");                
    
    //creating node
    final Node gnbNode = WCMUtils.getNode(resourceResolver.getResource("/content/gnb/doh-data/data/south"));    
    nodeIter = gnbNode.getNodes();
    out.print(nodeIter.getSize());
    out.print("<br/>");    


    gnbNode.addNode("s_"+id, Nodes.PAGE.nodeType());//change 11 with id
    gnbNode.save();

    //setting jcr:content node
    final Node jcrContentNode = gnbNode.getNode("s_"+id);//change the "11" with id   
    jcrContentNode.addNode(Nodes.JCR_CONTENT.nodeName(),Nodes.PAGE_CONTENT.nodeType());
    jcrContentNode.save();  

    //setting properties
    final Node jcrNode = jcrContentNode.getNode(Nodes.JCR_CONTENT.nodeName());
    jcrNode.setProperty("jcr:title", company_name);//change Keehwan with company_name    //jcrNode.setProperty("text", "TEST TEST");  

    jcrNode.setProperty("id", id);
    jcrNode.setProperty("company_name", company_name);
    jcrNode.setProperty("licence_no", licence_no);
    jcrNode.setProperty("last_name", last_name);
    jcrNode.setProperty("first_name", first_name);
    jcrNode.setProperty("city_name", city_name);
    jcrNode.setProperty("region", region);
    jcrNode.setProperty("phone_no", phone_no);
    jcrNode.setProperty("type_license", type_license);

    jcrNode.setProperty("cq:template", "/apps/gnb/templates/onsitesewage");   
    jcrNode.setProperty("sling:resourceType", "gnb/components/page/onsitesewage");        
    jcrNode.setProperty("gnbCoverage", "7005799 New Brunswick (province)");    
    jcrNode.setProperty("gnbPublisher", "Government of New Brunswick, Canada");            
    jcrNode.save();  

    //out.println(Nodes.PAGE.nodeName());  
    //out.println(Nodes.PAGE.nodeType());    

}

rs.close();
pstmt.close();
conn.close(); 
%>