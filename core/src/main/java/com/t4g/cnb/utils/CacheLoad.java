package com.t4g.cnb.utils;

import java.net.URL;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import net.sf.ehcache.Cache;
import net.sf.ehcache.CacheException;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Element;
import net.sf.ehcache.config.CacheConfiguration;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.jcr.api.SlingRepository;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//import org.apache.jackrabbit.api.JackrabbitSession;

@Component(service = CacheLoad.class, immediate = true)
public class CacheLoad {

  @Reference
  private SlingRepository repository;

  @Reference
  private ResourceResolverFactory resolverFactory;

  protected final Logger log = LoggerFactory.getLogger(this.getClass());

  //private JackrabbitSession session;
  /**
   *
   * Get a list of all the top level organizations.
   *
   **/
  public void initDeptMap() throws RepositoryException {}

  public void initDeptMap(SlingRepository repository) throws RepositoryException {
    log.info("Init Dept Cache...");
    //String lookupName = "crx";
    //Hashtable<String, String> env = new Hashtable<String, String>();
    //env.put("java.naming.provider.url", "http://jcr.day.com");
    //env.put("java.naming.factory.initial", "com.day.util.jndi.provider.MemoryInitialContextFactory");

    Session session = null;
    ResourceResolver resolver = null;
    try {
      //gnborgcache has been preconfigured in the configuration file
      //Create a singleton CacheManager using defaults
      //new code
      log.info("Creating CacheManager");
      CacheManager cachemanager = CacheManager.create();

      //cache.removeAll();
      //log.info("Removing all elements...in IF");

      //log.info("removeing previous cache in IF2");
      cachemanager.removeCache("gnborgcache");

      log.info("creating new cache");
      cachemanager.addCache("gnborgcache");
      Cache cache = cachemanager.getCache("gnborgcache");

      CacheConfiguration config1 = cache.getCacheConfiguration();
      //config1.setTimeToIdleSeconds(600000);//166 hrs
      //config1.setTimeToLiveSeconds(1200000);//333 hrs
      config1.eternal(true);

      //Cache cache = getCache("/ehcache.xml", "gnborgcache");
      //log.info("Cache size: " + cache.getSize() + ", cache memory store size: " + cache.getMemoryStoreSize());
      //remove all the elements from the cache
      //log.info("Removing all elements...");

      //cache.removeAll();
      //InitialContext initial = new InitialContext(env);
      //Object obj = initial.lookup(lookupName);
      //Repository repository = (Repository) PortableRemoteObject.narrow(obj, Repository.class);

      log.info("Accessing repository");
      this.repository = repository;
      //Repository repository = JcrUtils.getRepository("http://localhost:4502/crx/server");

      /**
	  log.info("Accessing repository(RMI)...");
	  Repository repository = JcrUtils.getRepository("rmi://localhost:4502/crx");
**/
      /**
	  log.info("Accessing repository(JNDI)...");
	  Repository repository =  JcrUtils.getRepository("jndi://"
       + "crx"
       + "?org.apache.jackrabbit.repository.jndi.name=crx"
       + "&java.naming.factory.initial"
       + "=com.day.util.jndi.provider.MemoryInitialContextFactory"
       + "&java.naming.provider.url=http://jcr.day.com");
**/
      log.info("after accessing repository... befor session");
      //this.session = (JackrabbitSession) repository.loginAdministrative(null);
      //session = repository.login(new SimpleCredentials("admin", "admin".toCharArray()), "crx.default");
      resolver = ResourceUtils.getWriteResourceResolver(resolverFactory);
      session = ResourceUtils.getServiceUserSession(resolver);
      log.info("after session...");

      Node root = session.getRootNode();
      String rootname = root.getName();
      String rootpath = root.getPath();
      log.info("rootname : " + rootname);
      log.info("rootname : " + rootpath);
      log.info("after getting rootnode...");

      Node orgNodes = root.getNode("content").getNode("data").getNode("organizations");
      log.info("after getting organization node...");
      for (NodeIterator nodeIter = orgNodes.getNodes(); nodeIter.hasNext();) {
        log.info("for...");
        Node orgNode = (Node) nodeIter.next();
        log.info("orgNode name:" + orgNode.getName());
        if (orgNode.hasNode("orginfo")) {
          String deptNo = orgNode.getNode("orginfo").getProperty("DEPTID").getString();
          log.info("deptNo: " + deptNo);

          if (!cache.isElementInMemory(deptNo)) {
            Element element = new Element(deptNo, orgNode.getPath());
            cache.put(element);
            log.info("Caching each deptNO... yah ho");
            log.info("Caching each deptNO... yah ho " + deptNo + " : " + orgNode.getPath());
            log.info("cache value " + cache.get(deptNo).getObjectValue() + " : " + orgNode.getPath());
          }
          /**
          if(cache.isElementInMemory(deptNo)){
            //Element element = new Element(deptNo, orgNode.getPath());
            //cache.put(element);
			log.info("this cache exist"+deptNo+" : "+orgNode.getPath());
          }
		  else{
            Element element = new Element(deptNo, orgNode.getPath());
            //cache.put(element);
			log.info("Caching each deptNO... yah ho"+deptNo+" : "+orgNode.getPath());
		  }**/
        }
      }

      log.info("Cache size: " + cache.getSize() + ", cache memory store size: " + cache.getMemoryStoreSize());
      log.info("The gnborgcache size :" + cache.getSize());
      log.info("Disk Store Size :" + cache.getDiskStoreSize());
      log.info("gnborgcache: " + cache.getKeys());
    } catch (RepositoryException re) {
      log.error("Exception with repository", re);
      //	} catch (NamingException ne) {
      //	  log.error("Exception with naming explanation: "+ne.getExplanation() +", cause: "+ ne.getCause(), ne);
    } finally {
      ResourceUtils.terminateSession(session);
      ResourceUtils.terminateResourceResolver(resolver);
    }
  }

  private Cache getCache(String cacheFile, String cacheName) throws CacheException {
    URL url = getClass().getResource(cacheFile);
    CacheManager manager = CacheManager.getInstance();
    String[] cacheNames = manager.getCacheNames();
    Cache cache = manager.getCache(cacheName);
    return cache;
  }
}
