package com.t4g.cnb.replication;

import com.t4g.cnb.enums.Fields;
import com.t4g.cnb.enums.Nodes;
import com.t4g.cnb.utils.Utils;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.sql.DataSource;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * This service executes service replication (and replication of the associated
 * municipality forms table )
 *
 */
@Component(service = ServiceReplication.class, immediate = true)
public final class ServiceReplication {

  protected final Logger log = LoggerFactory.getLogger(this.getClass());
  private static final String UNIQUE_ID = "unq_id";
  private static final String SERVICEKEYWORDS = "SERVICEKEYWORDS";
  private static final String SERVICEKEYWORDSFRE = "SERVICEKEYWORDSFRE";
  private static final String SERVICENAME = "SERVICENAME";
  private static final String SERVICENAMEFRE = "SERVICENAMEFRE";
  private static final String SERVICENAME_STRIP = "SERVICENAME_STRIP";
  private static final String SERVICENAMEFRE_STRIP = "SERVICENAMEFRE_STRIP";
  private static final String SERVICEFEES = "fees";
  private static final String SERVICEFEESHISTORY = "fees_history";
  private static final String SERVICEFEESREVENUE = "fees_revenue";
  private static final String SERVICEFORMS = "forms";
  private static final String SERVICELINKS = "related_links";
  private static final String ONLINETRANSACTIONS = "online_transactions";
  private static final String SERVICECONTACTS = "contacts";
  private static final String SERVICEACTS = "acts";

  private static final String SERVICE_SQL =
    "select st.* from servicestable st where st.servicetypeid in (2,3) and st.statusid = 'A' and st.internalservice = 'P' ";
  private static final String FEES_SQL =
    "select f.* from fees f inner join servicestable st ON f.servicesid = st.servicesid and st.servicetypeid in (2,3) " +
    "and st.statusid = 'A' and st.internalservice = 'P' order by f.servicesid, f.feelevel";
  private static final String FEE_HISTORY_SQL =
    "select fh.* from feeshistorytable fh inner join servicestable st ON fh.servicesid = st.servicesid and " +
    "st.servicetypeid in (2,3) and st.statusid = 'A' and st.internalservice = 'P' order by fh.servicesid, fh.feelevel";
  private static final String FEE_REVENUE_SQL =
    "select re.* from RevenueEstimatesTable re inner join servicestable st ON re.servicesid = st.servicesid and st.servicetypeid in (2,3) and " +
    "st.statusid = 'A' and st.internalservice = 'P' order by re.servicesid";
  private static final String FORM_SQL =
    "select sf.* from servicesforms sf " +
    "inner join servicestable st ON sf.servicesid = st.servicesid and st.servicetypeid in (2,3) and st.statusid = 'A' and st.internalservice = 'P' order by sf.servicesid";
  private static final String LINKS_SQL =
    "select sl.* from serviceslinks sl " +
    "inner join servicestable st ON sl.servicesid = st.servicesid and st.servicetypeid in (2,3) and st.statusid = 'A' and st.internalservice = 'P' order by sl.servicesid";
  private static final String TRANSACTIONS_SQL =
    "select op.* from onlinepaymenttable op " +
    "inner join servicestable st ON op.servicesid = st.servicesid and st.servicetypeid in (2,3) and st.statusid = 'A' and st.internalservice = 'P' order by op.servicesid";
  private static final String CONTACTS_SQL =
    "select sc.*, cg.GroupNameEng, cg.GroupNameFre, cg.DeptID from SERVICESCONTACTS sc " +
    "left outer join ContactGroupTable cg ON sc.GroupID = cg.GroupID " +
    "inner join servicestable st ON sc.servicesid = st.servicesid and st.servicetypeid in (2,3) and st.statusid = 'A' and st.internalservice = 'P' order by sc.servicesid";
  private static final String ACTS_SQL =
    "select sr.SERVICESID, a.* from ACTS a inner join SERVICEREGULATIONS sr on a.SERVICEACTID = sr.ACTSID " +
    "inner join servicestable st ON sr.servicesid = st.servicesid and st.servicetypeid in (2,3) and st.statusid = 'A' and st.internalservice = 'P' order by sr.servicesid";
  private static final String REGULATIONS_SQL =
    "select sr.SERVICESID, r.* from SERVICEREGULATIONS sr " +
    "inner join REGULATIONSTABLE r ON sr.REGULATIONSID = r.REGULATIONSID AND sr.ACTSID = r.ACTID " +
    "inner join servicestable st ON sr.servicesid = st.servicesid and st.servicetypeid in (2,3) and st.statusid = 'A' and st.internalservice = 'P' " +
    "order by sr.SERVICESID, r.ACTID, r.REGULATIONSID";
  private static final String MUNICIPALITY_SQL = "select m.* from municipalityForms m ";

  public void replicate(DataSource dataSource, Node dataNode) throws RepositoryException {
    log.error("Starting service replication");
    Connection conn = null;
    try {
      conn = dataSource.getConnection();
      Node serviceDataNode = dataNode.getNode("services");
      Node municDataNode = dataNode.getNode("municipalityforms");
      createServices(conn, serviceDataNode);
      createFees(conn, serviceDataNode);
      createFeeHistory(conn, serviceDataNode);
      createFeeRevenue(conn, serviceDataNode);
      createForm(conn, serviceDataNode);
      createRelatedLinks(conn, serviceDataNode);
      createOnlineTransactions(conn, serviceDataNode);
      createContacts(conn, serviceDataNode);
      createActs(conn, serviceDataNode);
      createRegulations(conn, serviceDataNode);
      createMunicipalityForms(conn, municDataNode);
      log.error("Ending service replication");
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

  private void createServices(Connection conn, Node serviceDataNode) throws SQLException, RepositoryException {
    log.error("Creating service nodes...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(SERVICE_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // create unique id to be used flagging what nodes have been updated
      String uniqueId = UUID.randomUUID().toString();

      // Process all ServiceTable results and add service nodes for each
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");

        // Create Service node and default content nodes
        if (!serviceDataNode.hasNode(serviceNodeName)) {
          // create Node for this service
          serviceDataNode.addNode(serviceNodeName, Nodes.PAGE.nodeType());
        }
        Node serviceNode = serviceDataNode.getNode(serviceNodeName);
        if (!serviceNode.hasNode(Nodes.JCR_CONTENT.nodeName())) {
          // There should be a content node
          serviceNode.addNode(Nodes.JCR_CONTENT.nodeName(), Nodes.PAGE_CONTENT.nodeType());
        }
        serviceNode.getNode(Nodes.JCR_CONTENT.nodeName()).setProperty(UNIQUE_ID, uniqueId);
        serviceNode
          .getNode(Nodes.JCR_CONTENT.nodeName())
          .setProperty("sling:resourceType", "gnb/components/page/gnbpage");

        // Remove old serviceinfo nodes...we will be replacing it
        if (serviceNode.hasNode(Fields.SVC_INFORMATION.text())) {
          serviceNode.getNode(Fields.SVC_INFORMATION.text()).remove();
        }

        // Add new serviceinfo node for parent service
        Node n = serviceNode.addNode(Fields.SVC_INFORMATION.text(), Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          // Service Keywords need to be in uppper case for searching.
          String property = Utils.nullReplace(rs.getString(i + 1));
          if (columnNames.get(i).equals(SERVICEKEYWORDS) || columnNames.get(i).equals(SERVICEKEYWORDSFRE)) {
            property = property.toUpperCase();
          } else if (columnNames.get(i).equals(SERVICENAME)) {
            serviceNode.getNode(Nodes.JCR_CONTENT.nodeName()).setProperty("jcr:title", property);
            n.setProperty(SERVICENAME_STRIP, Utils.toUpperCaseSansAccent(property));
          } else if (columnNames.get(i).equals(SERVICENAMEFRE)) {
            n.setProperty(SERVICENAMEFRE_STRIP, Utils.toUpperCaseSansAccent(property));
          }
          n.setProperty(columnNames.get(i), property);
        }
      }

      // Remove old service nodes that were not part of the current
      for (NodeIterator nodeIter = serviceDataNode.getNodes(); nodeIter.hasNext();) {
        Node childNode = (Node) nodeIter.next();
        if (childNode.hasNode(Nodes.JCR_CONTENT.nodeName())) {
          Node contentNode = childNode.getNode(Nodes.JCR_CONTENT.nodeName());
          if (contentNode.hasProperty(UNIQUE_ID)) {
            if (!contentNode.getProperty(UNIQUE_ID).getValue().getString().equals(uniqueId)) {
              // remove all child nodes that were not in the run
              log.error("Deleting service node:" + childNode.getName());
              childNode.remove();
            }
          }
        }
      }
      serviceDataNode.save();
      log.error("Done creating service nodes.");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createFees(Connection conn, Node serviceDataNode) throws SQLException, RepositoryException {
    log.error("Replicating Fees...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(FEES_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      columnNames.clear();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // Process all Fee results and add fee nodes for each
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");
        if (!serviceDataNode.hasNode(serviceNodeName)) {
          log.warn("Could not find the Service node for fee :" + rs.getString("FEEID"));
          continue;
        }
        if (!serviceDataNode.getNode(serviceNodeName).hasNode(Fields.SVC_INFORMATION.text())) {
          log.warn("Could not find the serviceinfo node for:" + serviceNodeName);
          continue;
        }
        Node serviceinfoNode = serviceDataNode.getNode(serviceNodeName).getNode(Fields.SVC_INFORMATION.text());

        // Add the fees node if it is not there yet
        Node parentNode;
        if (!serviceinfoNode.hasNode(SERVICEFEES)) {
          parentNode = serviceinfoNode.addNode(SERVICEFEES, Nodes.UNSTRUCTURED.nodeType());
        } else {
          parentNode = serviceinfoNode.getNode(SERVICEFEES);
        }

        // add new node and properties
        Node n = parentNode.addNode(rs.getString("FEEID"), Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          n.setProperty(columnNames.get(i), rs.getString(i + 1));
        }
      }
      serviceDataNode.save();
      log.error("Fees Completed Successfully");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createFeeHistory(Connection conn, Node serviceDataNode) throws SQLException, RepositoryException {
    log.error("Replicating FeeHistory...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(FEE_HISTORY_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      columnNames.clear();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // Process all FeeHistoery results and add nodes for each
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");
        if (!serviceDataNode.hasNode(serviceNodeName)) {
          log.warn("Could not find the Service node for fee history :" + rs.getString("FEESHISTORYID"));
          continue;
        }
        if (!serviceDataNode.getNode(serviceNodeName).hasNode(Fields.SVC_INFORMATION.text())) {
          log.warn("Could not find the serviceinfo node for:" + serviceNodeName);
          continue;
        }
        Node serviceinfoNode = serviceDataNode.getNode(serviceNodeName).getNode(Fields.SVC_INFORMATION.text());

        // Add the fees node if it is not there yet
        Node parentNode;
        if (!serviceinfoNode.hasNode(SERVICEFEESHISTORY)) {
          parentNode = serviceinfoNode.addNode(SERVICEFEESHISTORY, Nodes.UNSTRUCTURED.nodeType());
        } else {
          parentNode = serviceinfoNode.getNode(SERVICEFEESHISTORY);
        }

        // add new node and properties
        Node n = parentNode.addNode(rs.getString("FEESHISTORYID"), Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          n.setProperty(columnNames.get(i), rs.getString(i + 1));
        }
      }
      serviceDataNode.save();
      log.error("History Completed Successfully");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createFeeRevenue(Connection conn, Node serviceDataNode) throws SQLException, RepositoryException {
    log.error("Replicating Fee Revenue Estimates...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(FEE_REVENUE_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      columnNames.clear();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }
      // Process all Revenue Estimate results and add nodes for each
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");

        if (!serviceDataNode.hasNode(serviceNodeName)) {
          log.warn("Could not find the Service node for revenue estimate :" + rs.getString("REVENUEESTIMATESID"));
          continue;
        }
        if (!serviceDataNode.getNode(serviceNodeName).hasNode(Fields.SVC_INFORMATION.text())) {
          log.warn("Could not find the serviceinfo node for:" + serviceNodeName);
          continue;
        }
        Node serviceinfoNode = serviceDataNode.getNode(serviceNodeName).getNode(Fields.SVC_INFORMATION.text());

        // Add the node if it is not there yet
        Node parentNode;
        if (!serviceinfoNode.hasNode(SERVICEFEESREVENUE)) {
          parentNode = serviceinfoNode.addNode(SERVICEFEESREVENUE, Nodes.UNSTRUCTURED.nodeType());
        } else {
          parentNode = serviceinfoNode.getNode(SERVICEFEESREVENUE);
        }

        // add new node and properties
        Node n = parentNode.addNode(rs.getString("REVENUEESTIMATESID"), Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          n.setProperty(columnNames.get(i), rs.getString(i + 1));
        }
      }
      serviceDataNode.save();
      log.error("Revenue Completed Successfully");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createForm(Connection conn, Node serviceDataNode) throws SQLException, RepositoryException {
    log.error("Replicating Forms...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(FORM_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      columnNames.clear();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // Process all ServiceForms results and add forms nodes for each
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");

        if (!serviceDataNode.hasNode(serviceNodeName)) {
          log.warn("Could not find the Service node for form :" + rs.getString("SERVICESFORMSID"));
          continue;
        }
        if (!serviceDataNode.getNode(serviceNodeName).hasNode(Fields.SVC_INFORMATION.text())) {
          log.warn("Could not find the serviceinfo node form:" + serviceNodeName);
          continue;
        }
        Node serviceinfoNode = serviceDataNode.getNode(serviceNodeName).getNode(Fields.SVC_INFORMATION.text());

        // Add the parent node if it is not there yet
        Node parentNode;
        if (!serviceinfoNode.hasNode(SERVICEFORMS)) {
          parentNode = serviceinfoNode.addNode(SERVICEFORMS, Nodes.UNSTRUCTURED.nodeType());
        } else {
          parentNode = serviceinfoNode.getNode(SERVICEFORMS);
        }

        // add new node and properties
        Node n = parentNode.addNode(rs.getString("SERVICESFORMSID"), Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          n.setProperty(columnNames.get(i), rs.getString(i + 1));
        }
      }
      serviceDataNode.save();
      log.error("Forms Completed Successfully");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createRelatedLinks(Connection conn, Node serviceDataNode) throws SQLException, RepositoryException {
    log.error("Replicating Related Links...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(LINKS_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      columnNames.clear();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // Process all ServiceForms results and add forms nodes for each
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");

        if (!serviceDataNode.hasNode(serviceNodeName)) {
          log.warn("Could not find the Service node for form :" + rs.getString("SERVICESFORMSID"));
          continue;
        }
        if (!serviceDataNode.getNode(serviceNodeName).hasNode(Fields.SVC_INFORMATION.text())) {
          log.warn("Could not find the serviceinfo node form:" + serviceNodeName);
          continue;
        }
        Node serviceinfoNode = serviceDataNode.getNode(serviceNodeName).getNode(Fields.SVC_INFORMATION.text());

        // Add the parent node if it is not there yet
        Node parentNode;
        if (!serviceinfoNode.hasNode(SERVICELINKS)) {
          parentNode = serviceinfoNode.addNode(SERVICELINKS, Nodes.UNSTRUCTURED.nodeType());
        } else {
          parentNode = serviceinfoNode.getNode(SERVICELINKS);
        }

        // add new node and properties
        Node n = parentNode.addNode(rs.getString("SERVICESLINKSID"), Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          n.setProperty(columnNames.get(i), rs.getString(i + 1));
        }
      }
      serviceDataNode.save();
      log.error("Links Completed Successfully");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createOnlineTransactions(Connection conn, Node serviceDataNode)
    throws SQLException, RepositoryException {
    log.error("Replicating Online Payment Services...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(TRANSACTIONS_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      columnNames.clear();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // Process all ServiceForms results and add forms nodes for each
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");

        if (!serviceDataNode.hasNode(serviceNodeName)) {
          log.warn("Could not find the Service node for form :" + rs.getString("SERVICESFORMSID"));
          continue;
        }
        if (!serviceDataNode.getNode(serviceNodeName).hasNode(Fields.SVC_INFORMATION.text())) {
          log.warn("Could not find the serviceinfo node form:" + serviceNodeName);
          continue;
        }
        Node serviceinfoNode = serviceDataNode.getNode(serviceNodeName).getNode(Fields.SVC_INFORMATION.text());

        // Add the parent node if it is not there yet
        Node parentNode;
        if (!serviceinfoNode.hasNode(ONLINETRANSACTIONS)) {
          parentNode = serviceinfoNode.addNode(ONLINETRANSACTIONS, Nodes.UNSTRUCTURED.nodeType());
        } else {
          parentNode = serviceinfoNode.getNode(ONLINETRANSACTIONS);
        }

        // add new node and properties
        Node n = parentNode.addNode(rs.getString("SERVICESONLINEPAYMENTID"), Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          n.setProperty(columnNames.get(i), rs.getString(i + 1));
        }
      }
      serviceDataNode.save();
      log.error("Online Transactions Completed Successfully");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createContacts(Connection conn, Node serviceDataNode) throws SQLException, RepositoryException {
    log.error("Replicating Service Contacts...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(CONTACTS_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      columnNames.clear();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // Process all ServiceForms results and add forms nodes for each
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");

        if (!serviceDataNode.hasNode(serviceNodeName)) {
          log.warn("Could not find the Service node for form :" + rs.getString("SERVICESFORMSID"));
          continue;
        }
        if (!serviceDataNode.getNode(serviceNodeName).hasNode(Fields.SVC_INFORMATION.text())) {
          log.warn("Could not find the serviceinfo node form:" + serviceNodeName);
          continue;
        }
        Node serviceinfoNode = serviceDataNode.getNode(serviceNodeName).getNode(Fields.SVC_INFORMATION.text());

        // Add the parent node if it is not there yet
        Node parentNode;
        if (!serviceinfoNode.hasNode(SERVICECONTACTS)) {
          parentNode = serviceinfoNode.addNode(SERVICECONTACTS, Nodes.UNSTRUCTURED.nodeType());
        } else {
          parentNode = serviceinfoNode.getNode(SERVICECONTACTS);
        }

        // add new node and properties
        Node n = parentNode.addNode(
          rs.getString("ORGID") + "-" + rs.getString("GROUPID"),
          Nodes.UNSTRUCTURED.nodeType()
        );
        for (int i = 0; i < columnNames.size(); i++) {
          n.setProperty(columnNames.get(i), rs.getString(i + 1));
        }
      }
      serviceDataNode.save();
      log.error("Contacts Completed Successfully");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createActs(Connection conn, Node serviceDataNode) throws SQLException, RepositoryException {
    log.error("Replicating Service Acts...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(ACTS_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      columnNames.clear();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // Process all ServiceForms results and add forms nodes for each
      String currServiceNodeName = "";
      String currActId = "";
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");
        String actId = rs.getString("SERVICEACTID");

        // This query returns multiple rows for each Act.
        // Just store the first one and skip the rest
        if (serviceNodeName.equals(currServiceNodeName) && currActId.equals(actId)) {
          continue;
        } else {
          currServiceNodeName = serviceNodeName;
          currActId = actId;
        }
        if (
          !serviceDataNode.hasNode(serviceNodeName) ||
          !serviceDataNode.getNode(serviceNodeName).hasNode(Fields.SVC_INFORMATION.text())
        ) {
          // There should be a service node and it's info node
          log.warn("Could not find all the Service information for ACT :" + actId);
          continue;
        }

        Node serviceInfoNode = serviceDataNode.getNode(serviceNodeName).getNode(Fields.SVC_INFORMATION.text());

        // Add the parent node if it is not there yet
        Node actsNode;
        if (!serviceInfoNode.hasNode(SERVICEACTS)) {
          actsNode = serviceInfoNode.addNode(SERVICEACTS, Nodes.UNSTRUCTURED.nodeType());
        } else {
          actsNode = serviceInfoNode.getNode(SERVICEACTS);
        }

        // add new node and properties
        Node n = actsNode.addNode(actId, Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          n.setProperty(columnNames.get(i), rs.getString(i + 1));
        }
      }
      serviceDataNode.save();
      log.error("Acts Completed Successfully");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createRegulations(Connection conn, Node serviceDataNode) throws SQLException, RepositoryException {
    log.error("Replicating Service Regulations...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(REGULATIONS_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      columnNames.clear();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // Process all regulation results and add nodes for each
      String regCurrActId = "";
      String currentServicesName = "";
      Node parentNode = null;
      while (rs.next()) {
        String serviceNodeName = rs.getString("SERVICESID");
        String actId = rs.getString("ACTID");

        if (
          !serviceDataNode.hasNode(serviceNodeName) ||
          !serviceDataNode.getNode(serviceNodeName).hasNode(Fields.SVC_INFORMATION.text())
        ) {
          // There should be a service node and it's info node
          log.warn("Could not find all the Service information for ACT Regulation :" + actId);
          continue;
        }
        boolean sameService = currentServicesName.equals(serviceNodeName);
        Node serviceinfoNode = serviceDataNode.getNode(serviceNodeName).getNode(Fields.SVC_INFORMATION.text());

        if (sameService) {
          if (!regCurrActId.equals(actId)) {
            if (serviceinfoNode.getNode(SERVICEACTS).hasNode(actId)) {
              parentNode = serviceinfoNode.getNode(SERVICEACTS).getNode(actId);
              regCurrActId = actId;
            } else {
              log.warn("Could not find the Act Regulation node for Act: " + actId);
              continue;
            }
          }
        } else {
          currentServicesName = serviceNodeName;
          parentNode = serviceinfoNode.getNode(SERVICEACTS).getNode(actId);
        }

        // add new node and properties
        Node n = parentNode.addNode(rs.getString("REGULATIONSID"), Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          n.setProperty(columnNames.get(i), rs.getString(i + 1));
        }
      }
      serviceDataNode.save();
      log.error("Regulations Completed Successfully");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }

  private void createMunicipalityForms(Connection conn, Node municDataNode) throws SQLException, RepositoryException {
    log.error("Creating municipality forms nodes...");
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    final List<String> columnNames = new ArrayList<String>();
    try {
      pstmt = conn.prepareStatement(MUNICIPALITY_SQL);
      rs = pstmt.executeQuery();
      ResultSetMetaData rsmd = rs.getMetaData();
      for (int i = 1; i <= rsmd.getColumnCount(); i++) {
        // store column names
        columnNames.add(rsmd.getColumnName(i));
      }

      // create unique id to be used flagging what nodes have been updated
      String uniqueId = UUID.randomUUID().toString();

      // Process all municipalityforms results and add municipalityforms nodes for each
      while (rs.next()) {
        String municNodeName = rs.getString("FORMID");

        // Create Municipality Form node and default content nodes
        if (!municDataNode.hasNode(municNodeName)) {
          // create Node for this municipalityform
          municDataNode.addNode(municNodeName, Nodes.PAGE.nodeType());
          log.error("Creating municipality forms node for " + municNodeName);
        }
        Node municNode = municDataNode.getNode(municNodeName);
        if (!municNode.hasNode(Nodes.JCR_CONTENT.nodeName())) {
          // There should be a content node
          municNode.addNode(Nodes.JCR_CONTENT.nodeName(), Nodes.PAGE_CONTENT.nodeType());
        }
        municNode.getNode(Nodes.JCR_CONTENT.nodeName()).setProperty(UNIQUE_ID, uniqueId);
        municNode
          .getNode(Nodes.JCR_CONTENT.nodeName())
          .setProperty("sling:resourceType", "gnb/components/page/gnbpage");

        // Remove old municinfo nodes...we will be replacing it
        if (municNode.hasNode("municinfo")) {
          municNode.getNode("municinfo").remove();
        }

        // Add new municinfo node for municipalityform
        Node n = municNode.addNode("municinfo", Nodes.UNSTRUCTURED.nodeType());
        for (int i = 0; i < columnNames.size(); i++) {
          String property = Utils.nullReplace(rs.getString(i + 1));
          n.setProperty(columnNames.get(i), property);
        }
      }

      // Remove old municipality forms nodes that were not part of the current sync run
      for (NodeIterator nodeIter = municDataNode.getNodes(); nodeIter.hasNext();) {
        Node childNode = (Node) nodeIter.next();
        if (childNode.hasNode(Nodes.JCR_CONTENT.nodeName())) {
          Node contentNode = childNode.getNode(Nodes.JCR_CONTENT.nodeName());
          if (contentNode.hasProperty(UNIQUE_ID)) {
            if (!contentNode.getProperty(UNIQUE_ID).getValue().getString().equals(uniqueId)) {
              // remove this child node since it wasn't created in this run - has different unique_id
              log.error("Deleting municipality forms node:" + childNode.getName());
              childNode.remove();
            }
          }
        }
      }
      municDataNode.save();
      log.error("Done creating municipality forms nodes.");
    } finally {
      if (rs != null) rs.close();
      if (pstmt != null) pstmt.close();
    }
  }
}
