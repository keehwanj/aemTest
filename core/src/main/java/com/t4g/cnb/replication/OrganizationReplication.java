package com.t4g.cnb.replication;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.t4g.cnb.enums.Fields;
import com.t4g.cnb.enums.Nodes;
import com.t4g.cnb.utils.Utils;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.UUID;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.sql.DataSource;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * This service executes organization replication
 *
 */
@Component(service = OrganizationReplication.class, immediate = true)
public final class OrganizationReplication {

  //  ******************************************************************************************************
  // Fix for CR 257 - July 4/2012 - made by C Taylor
  // Issue:  Group data not showing in service contacts node
  // Caused By:  Group data was not being stored in OrgInfo nodes
  // Solution: Found that code was checking groupMap when adding orginfo to see if org was in groupmap,
  //           confirmed that data was going into groupMap - but noticed - groupMap was not being handed to
  //           the function that stored the orginfo node (createOrganizationInfoNode) - so - added groupMap
  //           to the function calls and to the function definition
  // Note: Also added some debugging info - printed to log - left some of it in for extra log info.
  //  ******************************************************************************************************
  protected final Logger log = LoggerFactory.getLogger(this.getClass());
  private static final String UNIQUE_ID_TYPE = "unq_id";

  private static final String SLING_RESOURCE_TYPE = "sling:resourceType";
  private static final String SLING_RESOURCE_TYPE_VALUE = "gnb/components/page/gnbpage";
  private static final String ORGANIZATION_PATH = "ORGANIZATION_PATH";
  private static final String CONTACT_INFO = "contactinfo";
  private static final String GROUPS_TYPE = "GROUPS";
  private final Map<String, List<String>> groupMap = new HashMap<String, List<String>>();
  private final List<String> columnNames = new ArrayList<String>();
  Map<String, Node> orgNodes = new HashMap<String, Node>();
  Map<String, List<String>> svcsMap = new HashMap<String, List<String>>();
  // This is to establish which nodes will be deleted.
  String prevUniqueId = "previous";

  static final String ORG_GROUP_SQL = "select orgid, groupid from contactgroupentries order by 1";

  final String ORG_SVC_SQL =
    "select od.ORGID, st.SERVICESID " +
    "from organizationdept od join servicestable st on od.DEPTID = st.DEPTID " +
    "and st.servicetypeid in (2,3) and st.statusid = 'A' " +
    "UNION " +
    "select sc.orgid, st.servicesid " +
    "from servicescontacts sc join servicestable st on sc.servicesid = st.servicesid " +
    "and st.servicetypeid in (2,3) and st.statusid = 'A' " +
    "order by 1" +
    "";

  static final String ORG_SQL =
    "select " +
    "o.DEPTID, o.ORGID, o.ORGLEVEL, o.ORGTYPE, o.ORGNAMEENG, o.ORGNAMEFRE, " +
    "odt.ORGNAMEENG as DEPTNAMEENG, odt.ORGNAMEFRE as DEPTNAMEFRE, " +
    "o.ORGABBRENG, o.ORGABBRFRE, ot.ORGTITLEENG, ot.ORGTITLEFRE, ot.ORGTITLEFREFEM, " +
    "pb.BLDG_ID as P_BLDG_ID, pb.BLDG_NAME_ENG as P_BLDG_NAME_ENG, pb.BLDG_NAME_FRE as P_BLDG_NAME_FRE, " +
    "pat.ADDRESSENG1 as P_ADDRESSENG1, pat.ADDRESSENG2 as P_ADDRESSENG2, " +
    "pat.ADDRESSENG3 as P_ADDRESSENG3, pat.CITYENG as P_CITYENG, " +
    "pat.PROVINCEENG as P_PROVINCEENG, pat.POSTALCODE as P_POSTALCODE, " +
    "pat.COUNTRY as P_COUNTRY, pat.LONGITUDE as P_LONGITUDE, pat.LATITUDE as P_LATITUDE, " +
    "pat.ADDRESSFRE1 as P_ADDRESSFRE1, pat.ADDRESSFRE2 as P_ADDRESSFRE2, " +
    "pat.ADDRESSFRE3 as P_ADDRESSFRE3, pat.CITYFRE as P_CITYFRE, " +
    "pat.PROVINCEFRE as P_PROVINCEFRE, " +
    "mb.BLDG_ID as M_BLDG_ID, mb.BLDG_NAME_ENG as M_BLDG_NAME_ENG, mb.BLDG_NAME_FRE as M_BLDG_NAME_FRE, " +
    "mat.ADDRESSENG1 as M_ADDRESSENG1, mat.ADDRESSENG2 as M_ADDRESSENG2, " +
    "mat.ADDRESSENG3 as M_ADDRESSENG3, mat.CITYENG as M_CITYENG, " +
    "mat.PROVINCEENG as M_PROVINCEENG, mat.POSTALCODE as M_POSTALCODE, " +
    "mat.COUNTRY as M_COUNTRY, mat.LONGITUDE as M_LONGITUDE, mat.LATITUDE as M_LATITUDE, " +
    "mat.ADDRESSFRE1 as M_ADDRESSFRE1, mat.ADDRESSFRE2 as M_ADDRESSFRE2, " +
    "mat.ADDRESSFRE3 as M_ADDRESSFRE3, mat.CITYFRE as M_CITYFRE, " +
    "mat.PROVINCEFRE as M_PROVINCEFRE, " +
    "o.GOALENG, o.GOALFRE, o.RECPHONE, " +
    "o.RECAREACODE, o.RECPHONESCHEDULEENG, o.RECPHONESCHEDULEFRE, o.FAX, " +
    "o.FAXAREACODE, o.GENPHONE, o.GENAREACODE, o.GENPHONESCHEDULEENG, " +
    "o.GENPHONESCHEDULEFRE, o.TOLLFREEPHONE, o.TOLLFREESCHEDULEENG, " +
    "o.TOLLFREESCHEDULEFRE, o.FREQCALLEDNUMENG, o.FREQCALLEDNUMFRE, " +
    "o.EMAILENG, o.EMAILFRE, o.PHYSICALADDRESSID, o.PHYSBUILDLOCENG, " +
    "o.PHYSBUILDLOCFRE, o.PHYSROOMENG, o.PHYSROOMFRE, o.PHYSFLOORENG, " +
    "o.PHYSFLOORFRE, o.MAILINGADDRESSID, o.MAILBUILDLOCENG, o.MAILBUILDLOCFRE, " +
    "o.MAILROOMENG, o.MAILROOMFRE, o.MAILFLOORENG, o.MAILFLOORFRE, " +
    "o.PERSONINCHARGE, p.GENDERENG as INCHARGEGENDER, o.PERSONINCHARGE2, pv.GENDERENG as INCHARGEGENDER2, " +
    "o.ORGURLINTERNETENG, o.ORGURLINTERNETFRE, " +
    "o.ORGURLINTRANETENG, o.ORGURLINTRANETFRE, o.KEYWORDSENG, o.KEYWORDSFRE, o.PUBLISH, o.ORGANIZATIONCHANGE, " +
    "o.ORGURLALTEMAILENG, o.ORGURLALTEMAILFRE " +
    "from organizationinq o join orgtype ot on o.orgtype=ot.orgtitleid " +
    "left join organizationdept odt on o.deptid = odt.deptid " +
    "left join personinq p on o.personincharge = p.personid " +
    "left join personverifiedinq pv on o.personincharge2 = pv.personid " +
    "left join (buildingaddress pba join building pb on pba.bldg_id = pb.bldg_id join " +
    "addresstable pat on pba.addressid=pat.addressid) on o.PHYSICALADDRESSID=pba.bldgaddressid " +
    "left join (buildingaddress mba join building mb on mba.bldg_id = mb.bldg_id join " +
    "addresstable mat on mba.addressid=mat.addressid) on o.MAILINGADDRESSID=mba.bldgaddressid " +
    "group by o.deptid, o.orglevel, o.orgid, o.orgtype, " +
    "o.ORGNAMEENG, o.ORGNAMEFRE, o.ORGABBRENG, o.ORGABBRFRE, " +
    "odt.ORGNAMEENG, odt.ORGNAMEFRE, ot.ORGTITLEENG, ot.ORGTITLEFRE, ot.ORGTITLEFREFEM, " +
    "pb.BLDG_ID, pb.BLDG_NAME_ENG, pb.BLDG_NAME_FRE, pat.ADDRESSENG1, " +
    "pat.ADDRESSENG2, pat.ADDRESSENG3, pat.CITYENG, pat.PROVINCEENG, " +
    "pat.POSTALCODE, pat.COUNTRY, pat.LONGITUDE, pat.LATITUDE, pat.ADDRESSFRE1, " +
    "pat.ADDRESSFRE2, pat.ADDRESSFRE3, pat.CITYFRE, pat.PROVINCEFRE, " +
    "mb.BLDG_ID, mb.BLDG_NAME_ENG, mb.BLDG_NAME_FRE, mat.ADDRESSENG1, " +
    "mat.ADDRESSENG2, mat.ADDRESSENG3, mat.CITYENG, mat.PROVINCEENG, " +
    "mat.POSTALCODE, mat.COUNTRY, mat.LONGITUDE, mat.LATITUDE, mat.ADDRESSFRE1, " +
    "mat.ADDRESSFRE2, mat.ADDRESSFRE3, mat.CITYFRE, mat.PROVINCEFRE, " +
    "o.GOALENG, o.GOALFRE, o.RECPHONE, " +
    "o.RECAREACODE, o.RECPHONESCHEDULEENG, o.RECPHONESCHEDULEFRE, o.FAX, " +
    "o.FAXAREACODE, o.GENPHONE, o.GENAREACODE, o.GENPHONESCHEDULEENG, " +
    "o.GENPHONESCHEDULEFRE, o.TOLLFREEPHONE, o.TOLLFREESCHEDULEENG, " +
    "o.TOLLFREESCHEDULEFRE, o.FREQCALLEDNUMENG, o.FREQCALLEDNUMFRE, " +
    "o.EMAILENG, o.EMAILFRE, o.PHYSICALADDRESSID, o.PHYSBUILDLOCENG, " +
    "o.PHYSBUILDLOCFRE, o.PHYSROOMENG, o.PHYSROOMFRE, o.PHYSFLOORENG, " +
    "o.PHYSFLOORFRE, o.MAILINGADDRESSID, o.MAILBUILDLOCENG, o.MAILBUILDLOCFRE, " +
    "o.MAILROOMENG, o.MAILROOMFRE, o.MAILFLOORENG, o.MAILFLOORFRE, " +
    "o.PERSONINCHARGE, p.GENDERENG, o.PERSONINCHARGE2, pv.GENDERENG, o.ORGURLINTERNETENG, o.ORGURLINTERNETFRE, " +
    "o.ORGURLINTRANETENG, o.ORGURLINTRANETFRE, o.KEYWORDSENG, o.KEYWORDSFRE, o.PUBLISH, o.ORGANIZATIONCHANGE, o.ORGURLALTEMAILENG, o.ORGURLALTEMAILFRE " +
    "order by o.deptid, o.orglevel";

  public void replicate(DataSource dataSource, Node dataNode, Session session, QueryBuilder queryBuilder)
    throws RepositoryException {
    log.error("Starting the organization replication");
    Connection conn = null;
    try {
      conn = dataSource.getConnection();
      Node orgDataNode = dataNode.getNode("organizations");
      Node svcDataNode = dataNode.getNode("services");
      Node contactDataNode = dataNode.getNode("contacts");
      Map<String, List<String>> groupMap = createGroupMap(conn);
      String newUniqueId = createOrgNodes(conn, orgDataNode, groupMap);
      syncOrganizationsWithServices(conn, orgDataNode);
      syncServicesWithOrganizations(svcDataNode);
      syncContactsWithOrganizations(contactDataNode, session, queryBuilder);
      if (newUniqueId != null) cleanUpOldOrganizations(orgDataNode, session, queryBuilder, newUniqueId);
      log.error("Ending organization replication");
    } catch (SQLException sqle) {
      log.error("SQLException with repository", sqle);
    } finally {
      try {
        if (conn != null) conn.close();
      } catch (SQLException sqle) {
        log.error("Exception closing connection.", sqle);
      }
    }
  }

  private Map<String, List<String>> createGroupMap(Connection conn) throws SQLException {
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    Map<String, List<String>> groupMap = new TreeMap<String, List<String>>();
    try {
      pstmt = conn.prepareStatement(ORG_GROUP_SQL);
      rs = pstmt.executeQuery();
      while (rs.next()) {
        final String orgId = rs.getString("orgid");
        if (groupMap.containsKey(orgId)) {
          groupMap.get(orgId).add(rs.getString("groupid"));
          //log.error("Add to groupmap :" + groupMap.get(orgId) + " item : " + rs.getString("groupid") ) ;
        } else {
          final List<String> groupList = new ArrayList<String>();
          groupList.add(rs.getString("groupid"));
          //log.error("Putting in group list : " +  rs.getString("groupid") ) ;
          groupMap.put(orgId, groupList);
          //log.error("Creating group map : " + orgId + " with entry : " + groupList ) ;
        }
      }
    } finally {
      rs.close();
      pstmt.close();
    }
    return groupMap;
  }

  private String createOrgNodes(Connection conn, Node orgDataNode, Map<String, List<String>> groupMap)
    throws RepositoryException, SQLException {
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final String newUniqueId = UUID.randomUUID().toString();
    try {
      pstmt = conn.prepareStatement(ORG_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        this.columnNames.add(rsmd.getColumnName(i));
      }
      // Process all org results and add org nodes for each
      boolean firstTrans = true;
      String transPrefix = "";
      int tempId = -1;
      Node headNode = null;
      Node previousNode = null;
      log.error("Process all org results and add org nodes for each...");
      while (rs.next()) {
        // grouped by dept id so start new head node when this changes
        int deptId = rs.getInt(Fields.DEPARTMENT_ID.text());
        String orgId = rs.getString(Fields.ORGANIZATION_ID.text());
        //log.error("Org = " + orgId + " deptid = " + deptId + " tempid = " + tempId ) ;
        String orgLevel = Utils.nullReplace(rs.getString(Fields.ORGANIZATION_LEVEL.text()));
        if (tempId != deptId) {
          tempId = deptId;
          if (orgDataNode.hasNode(String.valueOf(orgId))) {
            headNode = orgDataNode.getNode(String.valueOf(orgId));
          } else {
            headNode = orgDataNode.addNode(String.valueOf(orgId), Nodes.PAGE.nodeType());
          }
          if (prevUniqueId.equals("previous")) {
            if (headNode.hasNode(Nodes.JCR_CONTENT.nodeType())) {
              if (headNode.getNode(Nodes.JCR_CONTENT.nodeType()).hasProperty("unq_id")) {
                prevUniqueId = headNode.getNode(Nodes.JCR_CONTENT.nodeType()).getProperty("unq_id").getString();
              }
            }
          }
          createOrganizationInfoNode(headNode, deptId, orgLevel, newUniqueId, rs, groupMap);
          //log.error("Created org info node :  Org = " + orgId + " deptid = " + deptId + " newuniqueid= " + newUniqueId ) ;
          previousNode = null;
          firstTrans = true;
          transPrefix = "";
          this.orgNodes.put(orgId, headNode);
        } else {
          if (orgLevel.startsWith("TRN.")) {
            if (firstTrans) {
              transPrefix = orgLevel;
              previousNode = null;
              firstTrans = false;
            } else if (!orgLevel.startsWith(transPrefix)) {
              // new transfer org
              transPrefix = orgLevel;
              previousNode = null;
            }
          }

          if (previousNode == null) {
            // create a new Node off the Head
            if (headNode.hasNode(String.valueOf(orgId))) {
              previousNode = headNode.getNode(String.valueOf(orgId));
            } else {
              previousNode = headNode.addNode(String.valueOf(orgId), Nodes.PAGE.nodeType());
            }
            createOrganizationInfoNode(previousNode, deptId, orgLevel, newUniqueId, rs, groupMap);
          } else {
            String previousLevel = previousNode
              .getNode(Fields.ORG_INFORMATION.text())
              .getProperty(Fields.ORGANIZATION_LEVEL.text())
              .getString();
            if (orgLevel.length() == previousLevel.length()) {
              // create sibling of previousNode
              Node parentNode = previousNode.getParent();
              if (parentNode.hasNode(String.valueOf(orgId))) {
                previousNode = parentNode.getNode(String.valueOf(orgId));
              } else {
                previousNode = parentNode.addNode(String.valueOf(orgId), Nodes.PAGE.nodeType());
              }
              createOrganizationInfoNode(previousNode, deptId, orgLevel, newUniqueId, rs, groupMap);
            } else if (orgLevel.length() > previousLevel.length()) {
              // create child of previousNode
              if (previousNode.hasNode(String.valueOf(orgId))) {
                previousNode = previousNode.getNode(String.valueOf(orgId));
              } else {
                previousNode = previousNode.addNode(String.valueOf(orgId), Nodes.PAGE.nodeType());
              }
              createOrganizationInfoNode(previousNode, deptId, orgLevel, newUniqueId, rs, groupMap);
            } else {
              // go back till we are on the same level
              int diff = (previousLevel.length() - orgLevel.length()) / 3;
              //log.error("Org = " + orgId + " deptid = " + deptId + " tempid = " + tempId ) ;
              //log.error("Going route 4 for orgId = " + orgId + " diff = " + diff ) ;
              //log.error("prev level.length = " + previousLevel.length() + " orglevel.len = " + orgLevel.length() ) ;
              for (int i = 0; i <= diff; i++) {
                previousNode = previousNode.getParent();
              }
              if (previousNode.hasNode(String.valueOf(orgId))) {
                previousNode = previousNode.getNode(String.valueOf(orgId));
              } else {
                previousNode = previousNode.addNode(String.valueOf(orgId), Nodes.PAGE.nodeType());
              }
              createOrganizationInfoNode(previousNode, deptId, orgLevel, newUniqueId, rs, groupMap);
            }
          }
          this.orgNodes.put(orgId, previousNode);
        }
      }
      orgDataNode.save();
      log.error("Done Processing all org results.");
      return newUniqueId;
    } finally {
      rs.close();
      pstmt.close();
    }
  }

  private void syncOrganizationsWithServices(Connection conn, Node orgDataNode)
    throws RepositoryException, SQLException {
    log.error("Saving all related services to the organizations...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    try {
      pstmt = conn.prepareStatement(ORG_SVC_SQL);
      rs = pstmt.executeQuery();
      List<String> svcs = new ArrayList<String>();
      Node orgNode = null;
      int initid = -1;
      int orgId = 0;
      while (rs.next()) {
        orgId = rs.getInt(Fields.ORGANIZATION_ID.text());
        if (initid == -1) {
          initid = orgId;
          orgNode = this.orgNodes.get(String.valueOf(orgId));
        } else if (orgId != initid) {
          Node n2 = orgNode.getNode(Fields.ORG_INFORMATION.text());
          n2.setProperty(Fields.SERVICES_PROP.text(), svcs.toArray(new String[0]));
          svcs.clear();
          orgNode = this.orgNodes.get(String.valueOf(orgId));
          initid = orgId;
        }
        String svcId = rs.getString("servicesid");
        svcs.add(svcId);
        // add to the service:org map
        List<String> a = this.svcsMap.get(svcId);
        if (a == null) {
          a = new ArrayList<String>();
          a.add(orgNode.getPath());
          this.svcsMap.put(svcId, a);
        } else {
          this.svcsMap.get(svcId).add(orgNode.getPath());
        }
      }
      if (orgNode != null) {
        orgNode
          .getNode(Fields.ORG_INFORMATION.text())
          .setProperty(Fields.SERVICES_PROP.text(), svcs.toArray(new String[0]));
      }
      orgDataNode.save();
      log.error("Done saving all related services to the organizations.");
    } finally {
      rs.close();
      pstmt.close();
    }
  }

  private void syncServicesWithOrganizations(Node svcDataNode) throws RepositoryException {
    log.error("Sync Services with their Organizations...");
    for (String key : this.svcsMap.keySet()) {
      if (svcDataNode.hasNode(key)) {
        Node svcInfo = svcDataNode.getNode(key).getNode(Fields.SVC_INFORMATION.text());
        svcInfo.setProperty(Fields.ORGANIZATIONS_PROP.text(), this.svcsMap.get(key).toArray(new String[0]));
      } else {
        log.error("There is no related service node for: " + key);
      }
    }
    svcDataNode.save();
    log.error("Done Syncing Services with their Organizations.");
  }

  private void syncContactsWithOrganizations(Node contactDataNode, Session session, QueryBuilder builder)
    throws RepositoryException {
    log.error("Sync Contacts with their Organizations...");
    hasChild(contactDataNode);
    contactDataNode.save();
    log.error("Done Syncing Contacts with their Organizations.");
  }

  private void cleanUpOldOrganizations(Node orgDataNode, Session session, QueryBuilder builder, String newUniqueId)
    throws RepositoryException {
    log.error("Removing organization nodes without unique id:" + newUniqueId);
    // Remove any organizations that have an old unique id
    List<Node> paths = new ArrayList<Node>();
    Map<String, String> deleteMap = new HashMap<String, String>();
    deleteMap.put("path", orgDataNode.getPath() + "/");
    deleteMap.put("type", Nodes.PAGE.nodeType());
    deleteMap.put("orderby", "path");
    final Query query = builder.createQuery(PredicateGroup.create(deleteMap), session);
    query.setHitsPerPage(19999);
    final SearchResult result = query.getResult();
    String temppath = "temppath";
    for (Hit hit : result.getHits()) {
      if (!hit.getPath().contains(temppath)) {
        if (hit.getNode() != null && hit.getNode().hasNode(Nodes.JCR_CONTENT.nodeType())) {
          Node jcrContent = hit.getNode().getNode(Nodes.JCR_CONTENT.nodeType());
          if (
            jcrContent != null &&
            jcrContent.hasProperty("unq_id") &&
            !jcrContent.getProperty("unq_id").getString().equals(newUniqueId)
          ) {
            temppath = hit.getPath();
            paths.add(hit.getNode());
          }
        }
      }
    }
    deleteMap = null;

    for (Node hitnode : paths) {
      // Only delete the main node, child nodes will get deleted automatically.
      // This way an item not found exception will not occur
      if (hitnode != null) {
        log.error("Removing organization node:" + hitnode.getPath());
        hitnode.remove();
      }
    }

    orgDataNode.save();
    log.error("Done removing organization nodes.");
  }

  /**
   * Recursive method to populate contacts with the proper path to their
   * organization node
   **/
  private boolean hasChild(Node contactNode) throws RepositoryException {
    if (!contactNode.hasNodes() && CONTACT_INFO.equals(contactNode.getName())) {
      final String orgId = contactNode.getProperty(Fields.ORGANIZATION_ID.text()).getString();
      if (Utils.isNotEmpty(orgId)) {
        Node n = this.orgNodes.get(orgId);
        if (n != null) {
          final String newOrgPath = n.getPath();
          if (contactNode.hasProperty(ORGANIZATION_PATH)) {
            final String orgPath = contactNode.getProperty(ORGANIZATION_PATH).getString();
            if (orgPath != null && newOrgPath != null && !orgPath.equals(newOrgPath)) {
              contactNode.setProperty(ORGANIZATION_PATH, this.orgNodes.get(orgId).getPath());
            }
          } else {
            contactNode.setProperty(ORGANIZATION_PATH, this.orgNodes.get(orgId).getPath());
          }
        }
      }
    } else {
      for (NodeIterator nodeIter = contactNode.getNodes(); nodeIter.hasNext();) {
        Node n = (Node) nodeIter.next();
        if (!Nodes.JCR_CONTENT.nodeName().equals(n.getName())) {
          hasChild(n);
        }
      }
    }
    return false;
  }

  /**
   * This method creates both a jcr:content node and a orginfo node as children
   * of the node passed in.
   **/
  private void createOrganizationInfoNode(
    Node rootNode,
    int deptId,
    String orgLevel,
    String newUniqueId,
    ResultSet rs,
    Map<String, List<String>> groupMap
  ) throws RepositoryException, SQLException {
    Node jcrNode = null;
    if (rootNode.hasNode(Nodes.JCR_CONTENT.nodeType())) {
      jcrNode = rootNode.getNode(Nodes.JCR_CONTENT.nodeType());
    } else {
      jcrNode = rootNode.addNode(Nodes.JCR_CONTENT.nodeType(), Nodes.PAGE_CONTENT.nodeType());
      jcrNode.setProperty(SLING_RESOURCE_TYPE, SLING_RESOURCE_TYPE_VALUE);
    }
    jcrNode.setProperty(UNIQUE_ID_TYPE, newUniqueId);

    Node infoNode = null;
    if (rootNode.hasNode(Fields.ORG_INFORMATION.text())) {
      infoNode = rootNode.getNode(Fields.ORG_INFORMATION.text());
    } else {
      infoNode = rootNode.addNode(Fields.ORG_INFORMATION.text(), Nodes.UNSTRUCTURED.nodeType());
    }
    // log.error("Checking if groupmap has key : " + rootNode.getName()) ;
    if (groupMap.containsKey(rootNode.getName())) {
      infoNode.setProperty(GROUPS_TYPE, groupMap.get(rootNode.getName()).toArray(new String[0]));
      // log.error("It does - so now we are going to set property : " + GROUPS_TYPE + " to value : " + groupMap.get(rootNode.getName()).toArray(new String[0]) ) ;
    } else {
      //if this org is not part of a group - blank out the groups field in case they were previously part of a group
      infoNode.setProperty(GROUPS_TYPE, new String[0]);
    }

    infoNode.setProperty(Fields.DEPARTMENT_ID.text(), deptId);
    infoNode.setProperty(Fields.ORGANIZATION_LEVEL.text(), orgLevel);
    for (int i = 3; i < this.columnNames.size(); i++) {
      if (this.columnNames.get(i).equals("ORGNAMEENG")) {
        infoNode.setProperty("ORGNAMEENG_STRIP", Utils.toUpperCaseSansAccent(rs.getString(i + 1)));
      } else if (this.columnNames.get(i).equals("ORGNAMEFRE")) {
        infoNode.setProperty("ORGNAMEFRE_STRIP", Utils.toUpperCaseSansAccent(rs.getString(i + 1)));
      } else if (this.columnNames.get(i).equals("DEPTNAMEENG")) {
        infoNode.setProperty("DEPTNAMEENG_STRIP", Utils.toUpperCaseSansAccent(rs.getString(i + 1)));
      } else if (this.columnNames.get(i).equals("DEPTNAMEFRE")) {
        infoNode.setProperty("DEPTNAMEFRE_STRIP", Utils.toUpperCaseSansAccent(rs.getString(i + 1)));
      }
      infoNode.setProperty(this.columnNames.get(i), rs.getString(i + 1));
    }

    jcrNode = null;
    infoNode = null;
  }
}
