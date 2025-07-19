<%@ include file="/libs/wcm/global.jsp"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Map"%>
<%@ page import="java.util.Set"%>
<%@ page import="java.util.HashSet"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.ResultSetMetaData"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="javax.sql.DataSource"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@ page
	import="com.day.commons.datasource.poolservice.DataSourceNotFoundException"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourcePool"%>

<%
/**

/gnb-eng/categories/community_and_culture/culture/genealogy
/gnb-eng/categories/environment_and_land_planning/resource_management_and_land_planning/energy
/gnb-eng/categories/environment_and_land_planning/resource_management_and_land_planning/mines_petroleum_and_quarries
/gnb-eng/categories/environment_and_land_planning/resource_management_and_land_planning
/gnb-eng/categories/health/diseases/communicable_disease_control
/gnb-eng/categories/safety_and_courts/financials_and_securities
/gnb-eng/categories/safety_and_courts/safety_and_protection/animals
/gnb-eng/categories/tourism
/gnb-eng/content_type/information_types/licences_and_permits
*/

  String prevsvcid = "";
  Set<String> sectTagPath = new HashSet<String>();
  // Database connection
  DataSourcePool dataSourceService = sling.getService(com.day.commons.datasource.poolservice.DataSourcePool.class);
  DataSource dataSource = (DataSource) dataSourceService.getDataSource("SQLDB");
  Connection conn = dataSource.getConnection();
  String sqlString = "select "
      + "inq.servicesid as SVCID, inq.servicename, inq.areaid, "
      + "ca.classificationareanameeng as CLASSENG, "
      + "ca.classificationareanamefre as CLASSFRE, "
      + "inq.sectorid, inq.sectorname as SECTENG, "
      + "inq.sectornamefre as SECTFRE, "
      + "inq.transactionname as TRANSENG, "
      + "inq.transactionnamefre as TRANSFRE, "
      + "inq.transactionid, inq.transactionname from servicestable st join servicesectorstransactionsinq inq join classificationarea ca "
      + "on inq.areaid = ca.classificationareaid on st.servicesid=inq.servicesid and st.servicetypeid in (2,3) and st.statusId='A' "
      + "and st.internalservice='P' and st.servicesid < 550 order by st.servicesid";
//and st.servicesid < 60 
  PreparedStatement stmt = conn.prepareStatement(sqlString);
  ResultSet rs = stmt.executeQuery();

  while (rs.next()) {
    String svcid = rs.getString("SVCID");
    String svcClassEng = rs.getString("CLASSENG");
    String svcClassFre = rs.getString("CLASSFRE");
    String sectorEng = rs.getString("SECTENG");
    String sectorFre = rs.getString("SECTFRE");
    String transEng = rs.getString("TRANSENG");
    String transFre = rs.getString("TRANSFRE");    
    if ("".equals(prevsvcid)) {
      prevsvcid = svcid;
    } else if (!svcid.equals(prevsvcid)) {
      //tag the nodes            
      Node svcNode = pageManager.getPage("/content/data/services/" + prevsvcid).adaptTo(Node.class);
      Node jcrNode = svcNode.getNode("jcr:content");
      List<String> a = new ArrayList<String>();      
      for (String path : sectTagPath) {
        System.out.println("path:" + path);
        Resource res = resourceResolver.getResource("/etc/tags" + path);
        if (res != null) {
          Tag tn = res.adaptTo(Tag.class);
          a.add(tn.getTagID());
        } else {
          log.info("*** Tag Path does not exist:" + path);
        }
      }
      if (jcrNode.hasProperty("cq:tags")) {
        Value[] tags = jcrNode.getProperty("cq:tags").getValues();
        for (int i = 0; i < tags.length; i++) {
          a.add(((Value) tags[i]).getString());
        }        
      }
      jcrNode.setProperty("cq:tags", a.toArray(new String[0]));
      
      System.out.println("id " + prevsvcid + ":" + a.toArray(new String[0]).length);
      jcrNode.save();
      sectTagPath = new HashSet<String>();
      prevsvcid = svcid;
    }

    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Arts, Cultural, Film, Sports")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors/arts_entertainment_and_recreation");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Businesses Registrations and Services")) {
      sectTagPath.add("/gnb-eng/categories/business/registrations_and_searches");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Energy")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors/utilities");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Farms, Fisheries, Producers, Processing")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors/manufacturing");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("government_tenders")) {
      sectTagPath.add("/gnb-eng/categories/business/government_tenders");
    }
    if (svcClassEng.equals("Business and Industry")
        && sectorEng.equals("Insurance, Financial, Securities Businesses")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors/finance_insurance_and_securities");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Investment")) {
      sectTagPath.add("/gnb-eng/categories/business/investments");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Manufacturers")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors/manufacturing");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Minerals, Quarriable Substances")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors/mining_and_oil_and_gas_extraction");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("NB Businesses (Search)")) {
      sectTagPath.add("/gnb-eng/categories/business/registrations_and_searches");
    }
    if (svcClassEng.equals("Business and Industry")
        && sectorEng.equals("Retailers, Wholesalers (other sectorEngs)")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors/retailers_wholesalers");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("taxes")) {
      sectTagPath.add("/gnb-eng/categories/business/taxes");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Vehicles, Truckers, Transports")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors/transportation");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Local Governments, Community Services")) {
      sectTagPath.add("/gnb-eng/categories/community_and_culture/municipalities_and_local_governments");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Employment, Labour, Occupations")) {
      sectTagPath.add("/gnb-eng/categories/employment");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Energy")) {
      sectTagPath
          .add("/gnb-eng/categories/environment_and_land_planning/resource_management_and_land_planning/energy");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Minerals, Quarriable Substances")) {
      sectTagPath
          .add("/gnb-eng/categories/environment_and_land_planning/resource_management_and_land_planning/mines_petroleum_and_quarries");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Buildings, Housing, Construction")) {
      sectTagPath.add("/gnb-eng/categories/land_and_property/building_construction_and_development");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Court Services")) {
      sectTagPath.add("/gnb-eng/categories/safety_and_courts/court_services");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("Safety, Crime Prevention")) {
      sectTagPath.add("/gnb-eng/categories/safety_and_courts/safety_and_protection");
    }
    if (svcClassEng.equals("Business and Industry") && sectorEng.equals("government_tenders")) {
      sectTagPath.add("/gnb-eng/categories/your_government/buying_selling_and_payments/government_tenders");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Animals")) {
      sectTagPath.add("/gnb-eng/categories/safety_and_courts/safety_and_protection/animals");
    }
    if (svcClassEng.equals("Individuals and Families")
        && sectorEng.equals("Birth, Marriage, Death, Change of Name")) {
      sectTagPath.add("/gnb-eng/categories/life_events");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Community Centres, Libraries")) {
      sectTagPath.add("/gnb-eng/categories/community_and_culture/culture");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Drivers, Vehicles Owners")) {
      sectTagPath.add("/gnb-eng/categories/driving_and_vehicles");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Education (K-12), Students")) {
      sectTagPath.add("/gnb-eng/categories/education/k_12");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Employment with Government")) {
      sectTagPath.add("/gnb-eng/categories/employment/government_employment");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Employment, Labour, Occupations")) {
      sectTagPath.add("/gnb-eng/categories/employment/employment_in_n_b");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Financials, Securities")) {
      sectTagPath.add("/gnb-eng/categories/safety_and_courts/financials_and_securities");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Fishing, Hunting")) {
      sectTagPath.add("/gnb-eng/categories/recreation_and_sports");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Genealogy, Archives")) {
      sectTagPath.add("/gnb-eng/categories/community_and_culture/culture/genealogy");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Gov't Stores, Products for Sale")) {
      sectTagPath.add("/gnb-eng/categories/your_government/buying_selling_and_payments");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Health Care System")) {
      sectTagPath.add("/gnb-eng/categories/health/health_care");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Health Services")) {
      sectTagPath.add("/gnb-eng/categories/health/health_care");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Life Milestones")) {
      sectTagPath.add("/gnb-eng/categories/life_events");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Mental Health")) {
      sectTagPath.add("/gnb-eng/categories/health/addiction_and_mental_health");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Post-Secondary Education, Training")) {
      sectTagPath.add("/gnb-eng/categories/education/post_secondary");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Public Health, Communicable Diseases")) {
      sectTagPath.add("/gnb-eng/categories/health/diseases/communicable_disease_control");
    }
    if (svcClassEng.equals("Individuals and Families") && sectorEng.equals("Relocating to/in NB")) {
      sectTagPath.add("/gnb-eng/categories/life_events/new_residents");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && sectorEng.equals("Budget")) {
      sectTagPath.add("/gnb-eng/categories/your_government/publications/budget");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && sectorEng.equals("Elections")) {
      sectTagPath.add("/gnb-eng/categories/your_government/legislative_assembly/elections");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && sectorEng.equals("General Inquiries")) {
      sectTagPath.add("/gnb-eng/categories/your_government/contacts/general_inquiries");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && sectorEng.equals("Lieutenant-Governor")) {
      sectTagPath.add("/gnb-eng/categories/your_government/office_of_the_lieutenant-governor");
    }
    if (svcClassEng.equals("Legislative Assembly and Government")
        && sectorEng.equals("News, Conferences, Webcasts")) {
      sectTagPath.add("/gnb-eng/categories/your_government/information/news_conferences_webcasts");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && sectorEng.equals("Official Languages")) {
      sectTagPath.add("/gnb-eng/categories/your_government/information/official_languages");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && sectorEng.equals("Premier")) {
      sectTagPath.add("/gnb-eng/categories/your_government/office_of_the_premier");
    }
    if (svcClassEng.equals("Tourism New Brunswick") && sectorEng.equals("Camping, Parks (Provincial and National)")) {
      sectTagPath.add("/gnb-eng/categories/tourism");
    }
    if (svcClassEng.equals("Tourism New Brunswick") && sectorEng.equals("Camping, Parks (Provincial and National)")) {
      sectTagPath.add("/gnb-eng/categories/tourism");
    }
    if (svcClassEng.equals("Tourism New Brunswick") && sectorEng.equals("Community Centres, Libraries")) {
      sectTagPath.add("/gnb-eng/categories/community_and_culture/culture");
    }
    if (svcClassEng.equals("Tourism New Brunswick") && sectorEng.equals("Places to Stay, Places for Vacation")) {
      sectTagPath.add("/gnb-eng/categories/tourism");
    }

    //transactions level 3
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Amendments")) {
      sectTagPath.add("/gnb-eng/categories/environment_and_land_planning/resource_management_and_land_planning");
    }
    if (svcClassEng.equals("Business and Industry")
        && transEng.equals("Assesments, Inspections,Investigations, Enforcement")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/inspections");
    }
    if (svcClassEng.equals("Business and Industry")
        && transEng.equals("Assessments, Inspections, Investigations, Enforcement")) {
      sectTagPath.add("/gnb-eng/categories/land_and_property/building_construction_and_development");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Awards")) {
      sectTagPath.add("/gnb-eng/categories/business/support_services");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Awards")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/awards");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Change the name or status")) {
      sectTagPath.add("/gnb-eng/categories/business/registrations_and_searches");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Court Services")) {
      sectTagPath.add("/gnb-eng/categories/safety_and_courts/court_services");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Donation, Endowment, Grant")) {
      sectTagPath.add("/gnb-eng/categories/business/support_services");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Donation, Endowment, Grant")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/financial_assistance");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Expansion, Modernization")) {
      sectTagPath.add("/gnb-eng/categories/business/support_services");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Expansion, Modernization")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/financial_assistance");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Financial Aid, Credits, Refunds")) {
      sectTagPath.add("/gnb-eng/categories/business/support_services");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Financial Aid, Credits, Refunds")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/financial_assistance");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Laboratories")) {
      sectTagPath.add("/gnb-eng/categories/business/agriculture_forestry_fishing_and_hunting");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Leasing")) {
      sectTagPath.add("/gnb-eng/categories/environment_and_land_planning/resource_management_and_land_planning");
    }
    if (svcClassEng.equals("Business and Industry")
        && transEng.equals("Licenses, Permits, Registrations, Certifications, Approvals")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/licences_and_permits");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Marketing, Advertisements, Trade")) {
      sectTagPath.add("/gnb-eng/categories/business/trade_and_export");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Payments (Municipalities)")) {
      sectTagPath.add("/gnb-eng/content_type/transaction_types/municipal_payments");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Personnel, Payroll Related")) {
      sectTagPath.add("/gnb-eng/categories/employment/employment_in_n_b");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Sales, Trade")) {
      sectTagPath.add("/gnb-eng/categories/business/trade_and_export");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Sector Profile")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Sector Profile")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/profiles");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("Start-Up, Investment")) {
      sectTagPath.add("/gnb-eng/categories/business/investments");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("taxes")) {
      sectTagPath.add("/gnb-eng/categories/business/taxes");
    }
    if (svcClassEng.equals("Business and Industry") && transEng.equals("taxes")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/taxes");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Court Services")) {
      sectTagPath.add("/gnb-eng/categories/safety_and_courts/court_services");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Donation, Endowment, Grant")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/financial_assistance");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Drug Coverage")) {
      sectTagPath.add("/gnb-eng/categories/health/health_care");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Financial Aid, Credits, Refunds")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/financial_assistance");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Fines")) {
      sectTagPath.add("/gnb-eng/content_type/transaction_types/payments");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Fines")) {
      sectTagPath.add("/gnb-eng/content_type/transaction_types/payments");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Geographic Information, Maps�")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/maps_charts_and_trails");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Historical Information")) {
      sectTagPath.add("/gnb-eng/categories/community_and_culture/culture");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Information about Diseases")) {
      sectTagPath.add("/gnb-eng/categories/health/diseases");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Laboratories")) {
      sectTagPath.add("/gnb-eng/categories/business/business_sectors");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Leasing")) {
      sectTagPath.add("/gnb-eng/categories/envrionment_and_land_planning/resource_management");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Library")) {
      sectTagPath.add("/gnb-eng/categories/community_and_culture/culture");
    }
    if (svcClassEng.equals("Individuals and Families")
        && transEng.equals("Licenses, Permits, Registrations, Certifications, Approvals")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/licenses_and_permits");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("taxes")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/taxes");
    }
    if (svcClassEng.equals("Individuals and Families") && transEng.equals("Training")) {
      sectTagPath.add("/gnb-eng/categories/employment/employment_in_n_b");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Agreement")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/agreements");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Appointments")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/appointments");
    }
    if (svcClassEng.equals("Legislative Assembly and Government")
        && transEng.equals("Benefits, Employees, Retirees")) {
      sectTagPath.add("/gnb-eng/categories/employment/government_employments");
    }
    if (svcClassEng.equals("Legislative Assembly and Government")
        && transEng.equals("Benefits, Employees, Retirees")) {
      sectTagPath.add("/gnb-eng/categories/employment/public_sector_pensioners");
    }
    if (svcClassEng.equals("Legislative Assembly and Government")
        && transEng.equals("Geographic Information, Maps")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/maps_charts_and_trails");
    }
    if (svcClassEng.equals("Legislative Assembly and Government")
        && transEng.equals("Images, Videos, Virtual Exhibits")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/multimedia");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Inquiries")) {
      sectTagPath.add("/gnb-eng/categories/your_government/contacts");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Lists")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/Lists");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Provincial Court")) {
      sectTagPath.add("/gnb-eng/categories/safety_and_courts/court_services");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Publications")) {
      sectTagPath.add("/gnb-eng/categories/your_government/publications");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Publications")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/publications");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Teacher Certification")) {
      sectTagPath.add("/gnb-eng/categories/employment/employment_in_n_b");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Telephone Directory")) {
      sectTagPath.add("/gnb-eng/categories/your_government/contacts");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Telephone Directory")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/contacts");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Webcasts")) {
      sectTagPath.add("/gnb-eng/categories/your_government/news_conferences_webcasts");
    }
    if (svcClassEng.equals("Legislative Assembly and Government") && transEng.equals("Webcasts")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/news_conferences_webcasts");
    }
    if (svcClassEng.equals("Tourism New Brunswick") && transEng.equals("Images, Videos, Virtual Exhibits")) {
      sectTagPath.add("/gnb-eng/content_type/information_types/multimedia");
    }

  }

  Node svcNode = pageManager.getPage("/content/data/services/" + prevsvcid).adaptTo(Node.class);
  Node jcrNode = svcNode.getNode("jcr:content");
  log.info("End prevsvcid:" + prevsvcid);
  List<String> a = new ArrayList<String>();
  for (String path : sectTagPath) {
    Resource res = resourceResolver.getResource("/etc/tags" + path);
    if (res != null) {
      Tag tn = res.adaptTo(Tag.class);
      a.add(tn.getTagID());
    } else {
      log.info("*** Tag Path does not exist:" + path);
    }
  }
  if (jcrNode.hasProperty("cq:tags")) {
    Value[] tags = jcrNode.getProperty("cq:tags").getValues();
    for (int i = 0; i < tags.length; i++) {
      a.add(((Value) tags[i]).getString());
    }    
  }
  jcrNode.setProperty("cq:tags", a.toArray(new String[0]));
  jcrNode.save();
%>
</body>
</html>

