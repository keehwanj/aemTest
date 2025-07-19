package com.t4g.cnb.schedule;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map;

import javax.jcr.Node;
import javax.jcr.Repository;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.SimpleCredentials;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.rmi.PortableRemoteObject;
import javax.sql.DataSource;

import org.apache.sling.commons.scheduler.Job;
import org.apache.sling.commons.scheduler.JobContext;
import org.apache.sling.commons.scheduler.Scheduler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.commons.datasource.poolservice.DataSourceNotFoundException;
import com.day.commons.datasource.poolservice.DataSourcePool;
import com.day.cq.search.QueryBuilder;
import com.t4g.cnb.replication.ContactReplication;
import com.t4g.cnb.replication.OrganizationReplication;
import com.t4g.cnb.replication.ServiceReplication;
import com.t4g.cnb.utils.CacheLoad;

import org.apache.sling.jcr.api.SlingRepository; 
/**
 * This service executes scheduled jobs
 *
 * @scr.component
 */

public class ReplicationScheduledService {

  /** Default log. */
  protected final Logger log = LoggerFactory.getLogger(this.getClass());

  /**
   * @scr.reference policy="static"
   *                interface="org.apache.sling.commons.scheduler.Scheduler"
   *                bind="bindScheduler"
   **/
  private Scheduler scheduler;

  /**
   * @scr.reference policy="static"
   *                interface="com.day.commons.datasource.poolservice.DataSourcePool"
   *                bind="bindDataSource"
   **/
  private DataSourcePool dataSourcePool;

  /**
   * @scr.reference policy="static" interface="com.day.cq.search.QueryBuilder"
   *                bind="bindQueryBuilder"
   **/
  private QueryBuilder queryBuilder;

  /**
   * @scr.reference policy="static" interface="org.apache.sling.jcr.api.SlingRepository"
   *                bind="bindRepository""
   **/
  private SlingRepository repository; 


  public void bindScheduler(Scheduler scheduler) throws Exception {
    log.info("Initializing scheduler.");
    this.scheduler = scheduler;
    if (this.dataSourcePool != null && this.queryBuilder != null) {
      log.info("Schedule jobs from scheduler.");
      scheduleJobs();
    }
  }

  public void bindDataSource(DataSourcePool dataSourcePool) throws Exception {
    log.info("Initializing data source pool.");
    this.dataSourcePool = dataSourcePool;
    if (this.scheduler != null && this.queryBuilder != null) {
      log.info("Schedule jobs from data source.");
      scheduleJobs();
    }
  }

  public void bindQueryBuilder(QueryBuilder queryBuilder) throws Exception {
    log.info("Initializing query builder.");
    this.queryBuilder = queryBuilder;
    if (this.scheduler != null && this.dataSourcePool != null) {
      log.info("Schedule jobs from query builder.");
      scheduleJobs();
    }
  }

  public void bindRepository(SlingRepository repository) throws Exception {
    log.info("Getting repository");
    this.repository = repository; 
      log.info("Schedule jobs from repository.");
  }


  public void scheduleJobs() throws Exception {
    Map<String, Serializable> config = new HashMap<String, Serializable>();

    try{
      Job servicejob = new ServiceReplicationTask(this.dataSourcePool);
      String serviceExpression = "0 12 1 ? * MON-SAT";
      scheduler.addJob("service replication job", servicejob, config, serviceExpression, false);
    }catch(DataSourceNotFoundException dse){
	  log.error("ServiceReplicationTask Error finding Data Source: Look into DataSource configuration for 'SQLDB'", dse);
    }

    try{
      Job contactjob = new ContactReplicationTask(this.dataSourcePool);
      String contactExpression = "0 30 1 ? * MON-SAT";
      scheduler.addJob("contact replication job", contactjob, config, contactExpression, false);
    }catch(DataSourceNotFoundException dse){
	  log.error("ContactReplicationTask Error finding Data Source: Look into DataSource configuration for 'SQLDB'", dse);
    }

    try{
      Job orgjob = new OrganizationReplicationTask(this.dataSourcePool);
      String orgExpression = "0 10 2 ? * MON-SAT";
      scheduler.addJob("organization replication job", orgjob, config, orgExpression, false);
    }catch(DataSourceNotFoundException dse){
		log.error("OrganizationReplicationTask Error finding Data Source: Look into DataSource configuration for 'SQLDB'", dse);
    }

    Job initjob = new InitializeTask();
    String initExpression = "0 45 12 ? * MON-SAT";
    scheduler.addJob("initialization job", initjob, config, initExpression, false);
  }



  private class ServiceReplicationTask implements Job {
    DataSource dataSource;

    ServiceReplicationTask(DataSourcePool dataSourcePool) throws DataSourceNotFoundException {
      this.dataSource = (DataSource) dataSourcePool.getDataSource("SQLDB");
    }

    public void execute(JobContext arg0) {
      //String lookupName = "crx";
      //Hashtable<String, String> env = new Hashtable<String, String>();
      //env.put("java.naming.provider.url", "http://jcr.day.com");
      //env.put("java.naming.factory.initial", "com.day.util.jndi.provider.MemoryInitialContextFactory");
	Session session = null;      
	  
      try {
        //InitialContext initial = new InitialContext(env);
        //Object obj = initial.lookup(lookupName);
        //Repository repository = (Repository) PortableRemoteObject.narrow(obj, Repository.class);
        //session = repository.login(new SimpleCredentials("replicate", "sDcDoD45!".toCharArray()), "crx.default");
	  log.info("Accessing repository");
          session = repository.loginAdministrative(null); 
	  log.info("after getting rootnode...");
		
	  Node root = session.getRootNode();
          Node dataNode = root.getNode("content").getNode("data");
	  log.info("after getting data node...");
          ServiceReplication s = new ServiceReplication();
          s.replicate(this.dataSource, dataNode);
      } catch (RepositoryException re) {
          log.error("Exception with repository", re);
//      } catch (NamingException ne) {
//        log.error("Exception with naming", ne);
      } finally {
        if(session !=null) session.logout();
      }
    }
  }



  private class ContactReplicationTask implements Job {
    DataSource dataSource;

    ContactReplicationTask(DataSourcePool dataSourcePool) throws DataSourceNotFoundException {
	  this.dataSource = (DataSource) dataSourcePool.getDataSource("SQLDB");
    }

    public void execute(JobContext arg0) {
      //String lookupName = "crx";
      //Hashtable<String, String> env = new Hashtable<String, String>();
      //env.put("java.naming.provider.url", "http://jcr.day.com");
      //env.put("java.naming.factory.initial", "com.day.util.jndi.provider.MemoryInitialContextFactory");
      Session session=null;
      try {
        //InitialContext initial = new InitialContext(env);
        //Object obj = initial.lookup(lookupName);
        //Repository repository = (Repository) PortableRemoteObject.narrow(obj, Repository.class);
        //session = repository.login(new SimpleCredentials("replicate", "sDcDoD45!".toCharArray()), "crx.default");
	log.info("Accessing repository");
        session = repository.loginAdministrative(null); 
	log.info("after getting rootnode...");
		
        Node root = session.getRootNode();
        Node dataNode = root.getNode("content").getNode("data");
        ContactReplication c = new ContactReplication();
        c.replicate(dataSource, dataNode, session, queryBuilder);
      } catch (RepositoryException re) {
        log.error("Exception with repository", re);
//      } catch (NamingException ne) {
//        log.error("Exception with naming", ne);
      } finally {
        if(session !=null) session.logout();
      }
    }
  }

  private class OrganizationReplicationTask implements Job {
    DataSource dataSource;

    OrganizationReplicationTask(DataSourcePool dataSourcePool) throws DataSourceNotFoundException {
	  this.dataSource = (DataSource) dataSourcePool.getDataSource("SQLDB");
    }

    public void execute(JobContext arg0) {
      //String lookupName = "crx";
      //Hashtable<String, String> env = new Hashtable<String, String>();
      //env.put("java.naming.provider.url", "http://jcr.day.com");
      //env.put("java.naming.factory.initial", "com.day.util.jndi.provider.MemoryInitialContextFactory");
      Session session = null;
      try {
        //InitialContext initial = new InitialContext(env);
        //Object obj = initial.lookup(lookupName);
        //Repository repository = (Repository) PortableRemoteObject.narrow(obj, Repository.class);
        //session = repository.login(new SimpleCredentials("replicate", "sDcDoD45!".toCharArray()), "crx.default");
	log.info("Accessing repository");
        session = repository.loginAdministrative(null); 
	log.info("after getting rootnode...");	
			
        Node root = session.getRootNode();
        Node dataNode = root.getNode("content").getNode("data");
        OrganizationReplication o = new OrganizationReplication();
        o.replicate(this.dataSource, dataNode, session, queryBuilder);
      } catch (RepositoryException re) {
        log.error("Exception with repository", re);
//      } catch (NamingException ne) {
//        log.error("Exception with naming", ne);
      } finally {
        if(session !=null) session.logout();
      }
    }
  }

  private class InitializeTask implements Job {
    public void execute(JobContext arg0) {
      try {
		log.info("Scheduler Initialize Cache Load");
		CacheLoad cl = new CacheLoad();
		cl.initDeptMap();
      } catch (Exception re) {
        log.error("Exception loading data", re);
      }
    }
  }



}
