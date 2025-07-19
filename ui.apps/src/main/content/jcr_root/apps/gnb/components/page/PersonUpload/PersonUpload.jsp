<%@page import="java.sql.Connection"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.ResultSetMetaData"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Hashtable"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.UUID"%>
<%@page import="javax.jcr.Node"%>
<%@page import="javax.jcr.Repository"%>
<%@page import="javax.jcr.RepositoryException"%>
<%@page import="javax.sql.DataSource"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="org.slf4j.LoggerFactory"%>
<%@page import="javax.jcr.Session"%>
<%@page import="javax.jcr.SimpleCredentials"%>
<%@page import="javax.naming.InitialContext"%>
<%@page import="javax.naming.NamingException"%>
<%@page import="javax.rmi.PortableRemoteObject"%>
<%@page import="org.apache.jackrabbit.commons.JcrUtils"%>

<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.sql.DataSource"%>
<%@page import="com.day.commons.datasource.poolservice.DataSourceNotFoundException"%>
<%@page import="com.day.commons.datasource.poolservice.DataSourcePool"%>

<%@include file="/libs/foundation/global.jsp"%>

<%@page session="false" %>
<%

// try contact replication as jsp  

  String CONTACT_SQL = "select "
      + "pv.PERSONID, (floor(personid/250)+1)*250 as BUCKET, pv.FIRSTNAME, pv.LASTNAME, pv.MIDDLENAME, pv.ALTERNATENAMES, pv.TITLEID, pv.TITLENAMEENG, pv.TITLENAMEFRE, pv.DESIGNATIONENG,"
      + "pv.DESIGNATIONFRE, pv.ORGID, o.DEPTID, ptype.PERSONTYPEID, ptype.PERSONTYPEENG, ptype.PERSONTYPEFRE, g.GENDERENG, g.GENDERFRE, pv.PUBLISHEDPHONE, pv.PUBLISHEDPHONEAREA, pv.FAX, "
      + "pv.FAXAREA, pv.DESKPHONE, pv.DESKPHONEAREA, pv.DESKVOICEID, pv.RECEPTIONPHONE, pv.RECEPTIONPHONEAREA, pv.CELLPHONE, pv.PAGER, PAGERAREA, pv.PUBLISHEDEMAIL, pv.EMAIL, "
      + "pv.URLINTERNETENG, pv.URLINTERNETFRE, pt.TITLEENG, pt.TITLEFREM,pt.TITLEFREF, pv.PHYADDRESSID, pb.BLDG_ID as P_BLDG_ID, pb.BLDG_NAME_ENG as P_BLDG_NAME_ENG, pb.BLDG_NAME_FRE as P_BLDG_NAME_FRE, "
      + "pat.ADDRESSENG1 as P_ADDRESSENG1, pat.ADDRESSENG2 as P_ADDRESSENG2, pat.ADDRESSENG3 as P_ADDRESSENG3, pat.CITYENG as P_CITYENG, "
      + "pat.PROVINCEENG as P_PROVINCEENG, pat.POSTALCODE as P_POSTALCODE, pat.COUNTRY as P_COUNTRY, pat.LONGITUDE as P_LONGITUDE, pat.LATITUDE as P_LATITUDE, "
      + "pat.ADDRESSFRE1 as P_ADDRESSFRE1, pat.ADDRESSFRE2 as P_ADDRESSFRE2, pat.ADDRESSFRE3 as P_ADDRESSFRE3, pat.CITYFRE as P_CITYFRE, "
      + "pat.PROVINCEFRE as P_PROVINCEFRE, mb.BLDG_ID as M_BLDG_ID, mb.BLDG_NAME_ENG as M_BLDG_NAME_ENG, mb.BLDG_NAME_FRE as M_BLDG_NAME_FRE, "
      + "mat.ADDRESSENG1 as M_ADDRESSENG1, mat.ADDRESSENG2 as M_ADDRESSENG2, mat.ADDRESSENG3 as M_ADDRESSENG3, mat.CITYENG as M_CITYENG, "
      + "mat.PROVINCEENG as M_PROVINCEENG, mat.POSTALCODE as M_POSTALCODE, mat.COUNTRY as M_COUNTRY, mat.LONGITUDE as M_LONGITUDE, mat.LATITUDE as M_LATITUDE, "
      + "mat.ADDRESSFRE1 as M_ADDRESSFRE1, mat.ADDRESSFRE2 as M_ADDRESSFRE2, mat.ADDRESSFRE3 as M_ADDRESSFRE3, mat.CITYFRE as M_CITYFRE, "
      + "mat.PROVINCEFRE as M_PROVINCEFRE, pubb.BLDG_ID as PUB_BLDG_ID, pubb.BLDG_NAME_ENG as PUB_BLDG_NAME_ENG, pubb.BLDG_NAME_FRE as PUB_BLDG_NAME_FRE,"
      + "pubat.ADDRESSENG1 as PUB_ADDRESSENG1, pubat.ADDRESSENG2 as PUB_ADDRESSENG2, pubat.ADDRESSENG3 as PUB_ADDRESSENG3, pubat.CITYENG as PUB_CITYENG, "
      + "pubat.PROVINCEENG as PUB_PROVINCEENG, pubat.POSTALCODE as PUB_POSTALCODE, pubat.COUNTRY as PUB_COUNTRY, pubat.LONGITUDE as PUB_LONGITUDE, pubat.LATITUDE as PUB_LATITUDE, "
      + "pubat.ADDRESSFRE1 as PUB_ADDRESSFRE1, pubat.ADDRESSFRE2 as PUB_ADDRESSFRE2, pubat.ADDRESSFRE3 as PUB_ADDRESSFRE3, pubat.CITYFRE as PUB_CITYFRE, "
      + "pubat.PROVINCEFRE as PUB_PROVINCEFRE "
      + "from personverified pv "
      + "join persontitles pt on pv.titleid = pt.titleid join persontype ptype on pv.persontypeid = ptype.persontypeid "
      + "join organization o on pv.orgid = o.orgid join gendertable g on pv.genderid = g.genderid "
      + "left join (buildingaddress pba join building pb on pba.bldg_id = pb.bldg_id join addresstable pat on pba.addressid=pat.addressid) on pv.phyaddressid=pba.bldgaddressid "
      + "left join (buildingaddress mba join building mb on mba.bldg_id = mb.bldg_id join addresstable mat on mba.addressid=mat.addressid) on pv.mailaddressid=mba.bldgaddressid "
      + "left join (buildingaddress pubba join building pubb on pubba.bldg_id = pubb.bldg_id join addresstable pubat on pubba.addressid=pubat.addressid) on pv.pubaddressid=pubba.bldgaddressid "
      + "where publishpublic = 1 order by personid ";  
      // + "order by personid ";  
  //log.error("SQL Statement Used Is " + CONTACT_SQL);
  // final Logger log = LoggerFactory.getLogger(this.getClass());
  final String RESOURCE_TYPE_VALUE = "gnb/components/page/gnbpage";
  final List<String> columnNames = new ArrayList<String>();
  final String INFORMATION = "contactinfo";
  final String UNIQUE_ID = "unq_id";
  final String BUCKET = "BUCKET";
  final String PERSONID = "PERSONID";
  final String LASTNAME = "LASTNAME";
  final String FIRSTNAME = "FIRSTNAME";
  final String LASTNAME_STRIP = "LASTNAME_STRIP";
  final String FIRSTNAME_STRIP = "FIRSTNAME_STRIP";
  final String RESOURCE_TYPE = "sling:resourceType";

  final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);   
  DataSource ds = null;
  String dataSourceName = "SQLDB";
  DataSourcePool dbService = sling.getService(DataSourcePool.class);
  try {
        ds = (DataSource) dbService.getDataSource(dataSourceName);
  } catch(DataSourceNotFoundException e) {
        log.error("DataSourceNotFoundException while getting DataSource {}.", dataSourceName, e);
  }
  if(ds != null) {
  
     String lookupName = "crx";
     Hashtable<String, String> env = new Hashtable<String, String>();
  
     env.put("java.naming.provider.url", "http://jcr.day.com");
     env.put("java.naming.factory.initial", "com.day.util.jndi.provider.MemoryInitialContextFactory");
     Session session = resourceResolver.adaptTo(Session.class);
     
     //DataSource dataSource = null;        
     //dataSource = (DataSource) dataSourcePool.getDataSource("SQLDB");
     try {
        //InitialContext initial = new InitialContext(env);
        //Object obj = initial.lookup(lookupName);
        //Repository repository = (Repository) PortableRemoteObject.narrow(obj, Repository.class);
        //session = repository.login(new SimpleCredentials("replicate", "sDcDoD45!".toCharArray()), "crx.default");
        //Node root = session.getRootNode();
        //Node dataNode = root.getNode("content").getNode("data");
        Page data = pageManager.getPage("/content/data");
        Node dataNode = data.adaptTo(Node.class);
        log.error("Starting contact replication");
        Connection conn = null;
    
        conn = ds.getConnection();
        Node contactDataNode = dataNode.getNode("contacts");
        log.error("Creating contacts...");
        //String newUniqueId = createContacts(conn, contactDataNode);
        
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        final String newUniqueId = UUID.randomUUID().toString();
        try {
             pstmt = conn.prepareStatement(CONTACT_SQL);
             rs = pstmt.executeQuery();
             ResultSetMetaData rsmd = rs.getMetaData();
             for (int i = 1; i <= rsmd.getColumnCount(); i++) {
                  // store column names
                  columnNames.add(rsmd.getColumnName(i));
             }
             // create unique id to be used flagging what nodes have been updated
             Node bucketNode = null;
             Node contactNode = null;
             Node jcrNode = null;
             Node infoNode = null;
             String contactNodeName = null;
             String bucketId = null;
             int nRecordCount = 0; 
             // Process all contact table results and add contact nodes for each
             while (rs.next()) {
                   bucketId = String.valueOf(rs.getInt(BUCKET));
                   if (!contactDataNode.hasNode(bucketId)) {
                        contactDataNode.addNode(bucketId, Nodes.PAGE.nodeType());
                   }
                   if (bucketNode == null || !bucketNode.getName().equals(String.valueOf(bucketId))) {
                        bucketNode = contactDataNode.getNode(String.valueOf(bucketId));
                   }
                   contactNodeName = rs.getString(PERSONID);
                   // Create Contact node and default content nodes
                   if (!bucketNode.hasNode(contactNodeName)) {
                      // create Node for this contact
                      bucketNode.addNode(contactNodeName, Nodes.PAGE.nodeType());
                   }

                   contactNode = bucketNode.getNode(contactNodeName);
                   if (!contactNode.hasNode(Nodes.JCR_CONTENT.nodeType())) {
                       contactNode.addNode(Nodes.JCR_CONTENT.nodeType(), Nodes.PAGE_CONTENT.nodeType());
                   }
                   jcrNode = contactNode.getNode(Nodes.JCR_CONTENT.nodeType());
                   if (!jcrNode.hasProperty(RESOURCE_TYPE)) {
                      jcrNode.setProperty(RESOURCE_TYPE, RESOURCE_TYPE_VALUE);
                   }
                   jcrNode.setProperty(UNIQUE_ID, newUniqueId);
                   //log.error("Adding Contact " + contactNodeName);
                   if (!contactNode.hasNode(INFORMATION)) {
                      contactNode.addNode(INFORMATION, Nodes.UNSTRUCTURED.nodeType());
                   }
                   infoNode = contactNode.getNode(INFORMATION);
                   for (int i = 0; i < columnNames.size(); i++) {
                       if (LASTNAME.equals(columnNames.get(i))) {
                           String lname = rs.getString(i + 1);
                           if (infoNode.hasProperty(LASTNAME)) {
                               if (!lname.equals(infoNode.getProperty(LASTNAME).getString())) {
                                    infoNode.setProperty(LASTNAME, lname);
                                    infoNode.setProperty(LASTNAME_STRIP, Utils.toUpperCaseSansAccent(lname));
                               }
                           } else {
                               infoNode.setProperty(LASTNAME, lname);
                               infoNode.setProperty(LASTNAME_STRIP, Utils.toUpperCaseSansAccent(lname));
                           }
                        } else if (FIRSTNAME.equals(columnNames.get(i))) {
                               String fname = rs.getString(i + 1);
                               if (infoNode.hasProperty(FIRSTNAME)) {
                                   if (!fname.equals(infoNode.getProperty(FIRSTNAME).getString())) {
                                       infoNode.setProperty(FIRSTNAME, fname);
                                       infoNode.setProperty(FIRSTNAME_STRIP, Utils.toUpperCaseSansAccent(fname));
                                   }
                               } else {
                                   infoNode.setProperty(FIRSTNAME, fname);
                                   infoNode.setProperty(FIRSTNAME_STRIP, Utils.toUpperCaseSansAccent(fname));
                               }
                        } else {
                               // each property in the record set will be a String property
                               String prop = columnNames.get(i);
                               String newPropValue = Utils.nullReplace(rs.getString(i + 1));
                               if (infoNode.hasProperty(prop)) {
                                  if (!newPropValue.equals(infoNode.getProperty(prop).getString())) {
                                      infoNode.setProperty(columnNames.get(i), newPropValue);
                                  }
                               } else {
                                  infoNode.setProperty(columnNames.get(i), newPropValue);
                               }
                      }
                  }
                  // save every 100 records  
                  nRecordCount = nRecordCount + 1;
                  if (nRecordCount % 100 == 0) { 
                      //log.error("Saving contact replication results...");
                      contactDataNode.save(); 
                  }
             }
             log.error("Saving contact replication results...");
             contactDataNode.save();
             //return newUniqueId;
             if (newUniqueId != null) {
                 log.error("Removing contacts nodes without unique id:" + newUniqueId);
                 // Remove any organizations that have an old unique id
                 List<Node> paths = new ArrayList<Node>();
                 Map<String, String> deleteMap = new HashMap<String, String>();
                 deleteMap.put("path", contactDataNode.getPath() + "/.");
                 deleteMap.put("type", Nodes.PAGE.nodeType());
                 deleteMap.put("orderby", "path");
                 //final QueryBuilder queryBuilder;          
                 final Query query = builder.createQuery(PredicateGroup.create(deleteMap), session);
                 query.setHitsPerPage(29999);
                 final SearchResult result = query.getResult();
                 
                 String temppath = "temppath";
                 for (Hit hit : result.getHits()) {
                     if (!hit.getPath().contains(temppath)) {
                        if(hit.getNode()!=null && hit.getNode().hasNode(Nodes.JCR_CONTENT.nodeType())) {
                            Node jcrContent = hit.getNode().getNode(Nodes.JCR_CONTENT.nodeType());
                            if(jcrContent!=null && jcrContent.hasProperty("unq_id")
                            && !jcrContent.getProperty("unq_id").getString().equals(newUniqueId)) {
                                temppath = hit.getPath();
                                paths.add(hit.getNode());
                            }
                         }
                      }
                  }
                  deleteMap = null;

                  for (Node hitnode : paths) {
                      if (hitnode != null) {
                          log.error("Removing contact node:" + hitnode.getPath());
                          hitnode.remove();
                      }
                  }

                  contactDataNode.save();
                  log.error("Done removing contact nodes.");
       
              }
              log.error("Ending contact replication");  

         }finally {
            if (rs != null) rs.close();
            if (pstmt != null) pstmt.close();
            if (conn != null) conn.close();
         }
       }catch (SQLException sqle) {
            log.error("Exception closing connection.", sqle);
       }
}
%>