<%--
==============================================================================
  Copyright 2012 Department of Government Services
  Web Services

  All Rights Reserved.

  Media list Indailies component
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
<%@ page import="org.apache.commons.lang.WordUtils"%>

<%
final Session mySession = slingRequest.getResourceResolver().adaptTo(Session.class);
Connection conn = null;
PreparedStatement pstmt = null;

Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
String sDBQ = "C:\\database\\cnb\\mediaList.mdb";
String database = "jdbc:odbc:Driver={Microsoft Access Driver (*.mdb)};DBQ=" + sDBQ + ";DriverID=22;READONLY=true";
conn = DriverManager.getConnection(database);

String SQL="";
String st="Media Online";
SQL="SELECT * FROM mainQuery WHERE typeName_E='"+st+"'";
SQL=SQL + " ORDER BY title_E";

pstmt = conn.prepareStatement(SQL);
ResultSet rs = pstmt.executeQuery();
//general 1
String id;
String type;
String language_use;
String street;
String po_box;
String postal_code;
String province;

//general 2
String contact;
String email;
String phone;
String fax;
String url;

//english
String en_title;
String en_city;

//french
String fr_title;
String fr_city;



int num=0;
NodeIterator nodeIter;

while (rs.next()) 
    {
    num=num+1;
    //out.write(num+"");
    //id               =rs.getString("id")+"";
    id               =num+"";
    out.println(num);
    out.println("\t");
    type     =rs.getString("typeName_E");
    out.println(type);
    out.println("\t");

    //general 1  
    language_use     =rs.getString("languageName_E");
    street           =rs.getString("street");
    po_box           =rs.getString("poBox");
    postal_code      =rs.getString("postalCode");  
    province         =rs.getString("provinceName_E");  

    //general 2  
    contact          =rs.getString("contact");   
    email            =rs.getString("e_Mail_1");    
    phone            =rs.getString("phone_1");   
    fax              =rs.getString("fax_1");    
    url              =rs.getString("URL");    

    //english  
    en_title         =rs.getString("title_E");   
    en_city          =rs.getString("cityName_E");   

    //french  
    fr_title         =rs.getString("title_F");   
    fr_city          =rs.getString("cityName_F");   

    //creating node
    final Node gnbNode = WCMUtils.getNode(resourceResolver.getResource("/content/gnb/cnb_data/medialist/mo"));    
    nodeIter = gnbNode.getNodes();
    out.print(nodeIter.getSize());
    out.print("<br/>");    


    gnbNode.addNode("mo"+id, Nodes.PAGE.nodeType());//change 11 with id
    gnbNode.save();

    //setting jcr:content node
    final Node jcrContentNode = gnbNode.getNode("mo"+id);//change the "11" with id   
    jcrContentNode.addNode(Nodes.JCR_CONTENT.nodeName(),Nodes.PAGE_CONTENT.nodeType());
    jcrContentNode.save();  

    //setting properties
    final Node jcrNode = jcrContentNode.getNode(Nodes.JCR_CONTENT.nodeName());
    jcrNode.setProperty("jcr:title", en_title);

    jcrNode.setProperty("id", id);
    jcrNode.setProperty("type", type);
    jcrNode.setProperty("language_use", language_use);
    jcrNode.setProperty("street", street);
    jcrNode.setProperty("po_box", po_box);
    jcrNode.setProperty("postal_code", postal_code);
    jcrNode.setProperty("province", province);
    
    jcrNode.setProperty("contact", contact);
    jcrNode.setProperty("email", email);
    jcrNode.setProperty("phone", phone);
    jcrNode.setProperty("fax", fax);
    jcrNode.setProperty("url", url);

    jcrNode.setProperty("en_title", en_title);
    jcrNode.setProperty("en_city", en_city);

    jcrNode.setProperty("fr_title", fr_title);
    jcrNode.setProperty("fr_city", fr_city);
            
    jcrNode.setProperty("cq:template", "/apps/gnb/templates/medialist");   
    jcrNode.setProperty("sling:resourceType", "gnb/components/page/medialist");        
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