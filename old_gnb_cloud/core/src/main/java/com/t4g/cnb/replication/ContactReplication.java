package com.t4g.cnb.replication;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.t4g.cnb.enums.Nodes;
import com.t4g.cnb.utils.Utils;

/**
* This service executes contact replication
*
* @scr.component
*/
public final class ContactReplication {

  
  // ********************************************************************************************************************************************************************************
  // Note by Connie - my take on how this works - please correct as you see fit - all published people are selected from the person verified table - 
  // rather than deleting the contact nodes and creating new ones to match the results of our sql query (because the creation of nodes takes considerably 
  // more time than updating nodes ) - the person's nodes are found - if they don't have nodes (they are new, essentially) - their nodes are created - if they existed  
  // already - their fields from the sql query  are compared to their old properties and updates are made - or properties are added for new folks or new fields on existing folks.   
  // Each run, a new unique id is generated and if the person's nodes were found or created, we set a property called unq_id on their jcr:node equal to the value 
  // of the generated unique id.  As a final step, we select all the contact nodes that have a unq_id something other than the newly generated one - these folks 
  // must be no longer be in the database, since we didn't touch them in this run - so their nodes are deleted.  
  // *********************************************************************************************************************************************************************************

  final String CONTACT_SQL = "select "
      + "pv.PERSONID, (floor(personid/250)+1)*250 as BUCKET, pv.FIRSTNAME, pv.LASTNAME, pv.MIDDLENAME, pv.ALTERNATENAMES, pv.TITLEID, pv.TITLENAMEENG, pv.TITLENAMEFRE, pv.DESIGNATIONENG,pv.ACTING, "
      + "pv.DESIGNATIONFRE, pv.ORGID, o.DEPTID, ptype.PERSONTYPEID, ptype.PERSONTYPEENG, ptype.PERSONTYPEFRE, g.GENDERENG, g.GENDERFRE, pv.PUBLISHEDPHONE, pv.PUBLISHEDPHONEAREA, pv.FAX, "
      + "pv.FAXAREA, pv.DESKPHONE, pv.DESKPHONEAREA, pv.DESKVOICEID, pv.RECEPTIONPHONE, pv.RECEPTIONPHONEAREA, pv.CELLPHONE, pv.PAGER, PAGERAREA, pv.PUBLISHEDEMAILENG, pv.PUBLISHEDEMAILFRE, "
      + "pv.EMAIL, pv.URLINTERNETENG, pv.URLINTERNETFRE, pt.TITLEENG, pt.TITLEFREM,pt.TITLEFREF, pv.PHYADDRESSID, pb.BLDG_ID as P_BLDG_ID, pb.BLDG_NAME_ENG as P_BLDG_NAME_ENG, "
      + "pb.BLDG_NAME_FRE as P_BLDG_NAME_FRE, pat.ADDRESSENG1 as P_ADDRESSENG1, pat.ADDRESSENG2 as P_ADDRESSENG2, pat.ADDRESSENG3 as P_ADDRESSENG3, pat.CITYENG as P_CITYENG, "
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
      + "join persontitles pt on pv.titleid = pt.titleid "
      + "join persontype ptype on pv.persontypeid = ptype.persontypeid "
      + "join organization o on pv.orgid = o.orgid "
      + "join gendertable g on pv.genderid = g.genderid "
      + "left join (buildingaddress pba join building pb on pba.bldg_id = pb.bldg_id join addresstable pat on pba.addressid=pat.addressid) on pv.phyaddressid=pba.bldgaddressid "
      + "left join (buildingaddress mba join building mb on mba.bldg_id = mb.bldg_id join addresstable mat on mba.addressid=mat.addressid) on pv.mailaddressid=mba.bldgaddressid "
      + "left join (buildingaddress pubba join building pubb on pubba.bldg_id = pubb.bldg_id join addresstable pubat on pubba.addressid=pubat.addressid) on pv.pubaddressid=pubba.bldgaddressid "
      + " where publishpublic = 1 order by personid";
  
//  "and personid < 501";

  final protected Logger log = LoggerFactory.getLogger(this.getClass());
  final private List<String> columnNames = new ArrayList<String>();
  final private static String INFORMATION = "contactinfo";
  final private static String UNIQUE_ID = "unq_id";
  final private static String BUCKET = "BUCKET";
  final private static String PERSONID = "PERSONID";
  final private static String LASTNAME = "LASTNAME";
  final private static String FIRSTNAME = "FIRSTNAME";
  final private static String LASTNAME_STRIP = "LASTNAME_STRIP";
  final private static String FIRSTNAME_STRIP = "FIRSTNAME_STRIP";
  final private static String RESOURCE_TYPE = "sling:resourceType";
  final private static String RESOURCE_TYPE_VALUE = "gnb/components/page/gnbpage";

  public void replicate(DataSource dataSource, Node dataNode, Session session, QueryBuilder queryBuilder)
      throws RepositoryException {
    log.error("Starting contact replication");
    Connection conn = null;
    try {
      conn = dataSource.getConnection();
      Node contactDataNode = dataNode.getNode("contacts");
      String newUniqueId = createContacts(conn, contactDataNode);
      if (newUniqueId != null) {
        cleanUpOldContacts(contactDataNode, session, queryBuilder, newUniqueId);
      }
      log.error("Ending contact replication");
    } catch (SQLException sqle) {
      log.error("SQLException with repository", sqle);
    } finally {
      try {
        if (conn != null)
          conn.close();
      } catch (SQLException sqle) {
        log.error("Exception closing connection.", sqle);
      }
    }
  }

  private String createContacts(Connection conn, Node contactDataNode) throws SQLException, RepositoryException {
    log.error("Creating contacts...");
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
      }
      log.error("Saving contact replication results...");
      contactDataNode.save();
      return newUniqueId;

    }finally {
      if (rs != null)
        rs.close();
      if (pstmt != null)
        pstmt.close();
    }
  }

  private void cleanUpOldContacts(Node contactDataNode, Session session, QueryBuilder builder, String newUniqueId)
      throws RepositoryException {
    log.error("Removing contacts nodes without unique id:" + newUniqueId);
    // Remove any contacts that have an old unique id
    List<Node> paths = new ArrayList<Node>();
    Map<String, String> deleteMap = new HashMap<String, String>();
    // change made by Connie - April 4, 2014 - the new version of CQ does not like having the /. at the end of the path 
    //deleteMap.put("path", contactDataNode.getPath() + "/.");
    deleteMap.put("path", contactDataNode.getPath() );
    deleteMap.put("type", Nodes.PAGE.nodeType());
    deleteMap.put("orderby", "path");
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

}
