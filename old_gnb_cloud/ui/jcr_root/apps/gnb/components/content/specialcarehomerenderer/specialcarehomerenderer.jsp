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
<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@ page import="javax.sql.DataSource"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourceNotFoundException"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourcePool"%>
<%
	//this is try for a whole page
	try {

		//finding the proper language
		String lang = "fr";
		Locale locale = currentPage.getLanguage(true);
		if (locale == null|| locale.getLanguage().equalsIgnoreCase("en")) {
			lang = "en";
		}
    %>
    <cq:setContentBundle language="<%=lang%>" />
    <%
        final Session mySession = slingRequest.getResourceResolver().adaptTo(Session.class);
		Connection conn = null;
		PreparedStatement pstmt = null;

		//out.write(location);

		//database connection
		DataSourcePool dataSourceService = sling.getService(com.day.commons.datasource.poolservice.DataSourcePool.class);
		DataSource dataSource = (DataSource) dataSourceService.getDataSource("AccessSpecialCareHomeDB");
		conn = dataSource.getConnection();
		/*
		 Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
		 String sDBQ = "C:\\database\\SpecialCareHome.mdb";
		 String database = "jdbc:odbc:Driver={Microsoft Access Driver (*.mdb)};DBQ=" + sDBQ + ";DriverID=22;READONLY=true";
		 conn = DriverManager.getConnection(database);
		 */

		//getting selectors
		String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
		String selectors_0 = "";
		try {
			selectors_0 = selectors[0];
		} 
		catch (Exception e) {
			log.error("Selector", e);
		}

		//String location = properties.get("location", "");
		//String location = "215";

		//SQL command using selector
		String SQL = "";
		if (selectors_0.equals("")) {
			SQL = "SELECT * FROM Special_Care_Home";
			SQL = SQL + " ORDER BY  Reg_Name";
		}
		if (!selectors_0.equals("")) {
			SQL = "SELECT * FROM Special_Care_Home WHERE id="+ selectors_0;
		}
		pstmt = conn.prepareStatement(SQL);
		ResultSet rs = pstmt.executeQuery();

		//setting header text for English/French
		String header_facility = properties.get("header_facility", "");
		if (header_facility.equalsIgnoreCase("")) {
			header_facility = String.format("%s",LocaleSupport.getLocalizedMessage(pageContext,"header_facility"));
		}

        String header_region = properties.get("header_region", "");
        if (header_region.equalsIgnoreCase("")) {
            header_region = String.format("%s",LocaleSupport.getLocalizedMessage(pageContext,"header_region"));
        }
		
        String header_address = properties.get("header_address", "");
        if (header_address.equalsIgnoreCase("")) {
            header_address = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "header_address"));
        }

        String header_contact = properties.get("header_contact", "");
        if (header_contact.equalsIgnoreCase("")) {
            header_contact = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "header_contact"));
        }

        String header_phone = properties.get("header_phone", "");
        if (header_phone.equalsIgnoreCase("")) {
            header_phone = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "header_phone"));
        }
        
        String header_language = properties.get("header_language", "");
		if (header_language.equalsIgnoreCase("")) {
			header_language = String.format("%s",LocaleSupport.getLocalizedMessage(pageContext,"header_language"));
		}

		String header_maximum = properties.get("header_maximum", "");
		if (header_maximum.equalsIgnoreCase("")) {
			header_maximum = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "header_maximum"));
		}

		//declaring variables
		String id                 = "";
		String Region             = "";
		String Reg_Num            = "";
		String Reg_Name           = "";
		String contact_Name       = "";
		String service_Lang_en    = "";
		String service_Lang_fr    = "";
		String phone_Num          = "";
		String C_street_Num       = "";
		String street_Type_fr     = "";
		String C_street_Name      = "";
		String street_Type_en     = "";
		String C_city_Town_Name   = "";
		String C_province         = "";
		String C_postalcode       = "";
		String ApprovedSpaces     = "";
		String mailing_address    = "";

		if (rs.next()) {
			//retrieving fields
			id                   = rs.getString("id") + "";
			Region               = rs.getString("Region");
			Reg_Num              = rs.getString("Reg_Num");
			Reg_Name             = rs.getString("Reg_Name");
			contact_Name         = rs.getString("contact_Name");
			service_Lang_en      = rs.getString("service_Lang_en");
			service_Lang_fr      = rs.getString("service_Lang_fr");
			phone_Num            = rs.getString("phone_Num");
			C_street_Num         = rs.getString("C_street_Num");
			street_Type_fr       = rs.getString("street_Type_fr");

			if (street_Type_fr == null) {
				street_Type_fr = "";
			    } 
			else {
				street_Type_fr = " " + street_Type_fr;
			    }

			//out.write(street_Type_fr);

			C_street_Name = rs.getString("C_street_Name");
			street_Type_en = rs.getString("street_Type_en");
			if (street_Type_en == null) {
				street_Type_en = "";
			} else {
				street_Type_en = " " + street_Type_en;
			}

			C_city_Town_Name = rs.getString("C_city_Town_Name");
			C_province = rs.getString("C_province");
			C_postalcode = rs.getString("C_postalcode");

			//if (lang.equals("en")) {
		    mailing_address = C_street_Num;
			mailing_address = mailing_address + street_Type_fr;
			mailing_address = mailing_address + " " + C_street_Name;
			mailing_address = mailing_address + street_Type_en;
			mailing_address = mailing_address + ", " + C_city_Town_Name;
			mailing_address = mailing_address + ", " + C_province;
			mailing_address = mailing_address + ", " + C_postalcode;
			//}

			ApprovedSpaces = rs.getString("ApprovedSpaces");

			//displaying contents
			out.write("<p>");
			out.write("<b>");
			out.write(header_facility + " : ");
			out.write("</b>");
			out.write(Reg_Name);
			out.write("</p>");

			out.write("<p>");
			out.write("<b>");
			out.write(header_region + " : ");
			out.write("</b>");
			out.write(Region);
			out.write("</p>");

			out.write("<p>");
			out.write("<b>");
			out.write(header_address + " : ");
			out.write("</b>");
			out.write(mailing_address);
			out.write("</p>");

			out.write("<p>");
			out.write("<b>");
			out.write(header_contact + " : ");
			out.write("</b>");
			out.write(contact_Name);
			out.write("</p>");

			out.write("<p>");
			out.write("<b>");
			out.write(header_phone + " : ");
			out.write("</b>");
			out.write(phone_Num);
			out.write("</p>");

			out.write("<p>");
			out.write("<b>");
			out.write(header_language + " : ");
			out.write("</b>");
			out.write(service_Lang_en);
			out.write("</p>");

			out.write("<p>");
			out.write("<b>");
			out.write(header_maximum + " : ");
			out.write("</b>");
			out.write(ApprovedSpaces);
			out.write("</p>");

		}
		rs.close();
		pstmt.close();
		conn.close();
		//this is chatch for a whole page.
	}//end of try 

	catch (Exception e) {
		log.error("Something bad happened on the Special Care Home renderer",e);
    %>
        <cq:include script="empty.jsp" />
    <%
	}//end of catch
    %>