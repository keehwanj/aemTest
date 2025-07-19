<%@ include file="/libs/wcm/global.jsp"%>
<%@ page import="javax.sql.DataSource"%>
<%@ page import="com.day.cq.wcm.api.Page"%>
<%@ page import="com.day.cq.search.QueryBuilder"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourcePool"%>
<%@ page import="com.t4g.cnb.replication.ContactReplication"%>

<%@ page  import="java.util.HashMap"%>
<%@ page  import="java.util.Map"%>
<%@ page  import="java.util.Hashtable"%>
<%@ page  import="javax.jcr.Session"%>
<%@ page  import="javax.jcr.Repository"%>
<%@ page  import="javax.jcr.RepositoryException"%>
<%@ page  import="javax.jcr.Node"%>
<%@ page  import="javax.jcr.NodeIterator"%>
<%@ page  import="javax.jcr.SimpleCredentials"%>
<%@ page  import="javax.naming.NamingException"%>
<%@ page  import="javax.naming.InitialContext"%>
<%@ page  import="javax.rmi.PortableRemoteObject"%>
<%@ page  import="org.slf4j.Logger"%>
<%@ page  import="org.slf4j.LoggerFactory"%>
<%@ page  import="java.net.URL"%>
<%@ page  import="net.sf.ehcache.Cache"%>
<%@ page  import="net.sf.ehcache.CacheManager"%>
<%@ page  import="net.sf.ehcache.CacheException"%>
<%@ page  import="net.sf.ehcache.Element"%>
<%@ page  import="org.apache.sling.jcr.api.SlingRepository"%> 
<%@ page  import="org.apache.jackrabbit.commons.JcrUtils"%> 

<%
Page data = pageManager.getPage("/content/data");
out.print("step 1");
out.print("<br/>");
Node dataNode = data.adaptTo(Node.class);
out.print("step 2");
out.print("<br/>");
DataSourcePool dataSourceService = sling.getService(com.day.commons.datasource.poolservice.DataSourcePool.class);
out.print("step 3");
out.print("<br/>");
//Session session = currentNode.getSession();
out.print("step 4");
out.print("<br/>");
DataSource dataSource = (DataSource) dataSourceService.getDataSource("SQLDB");
out.print("step 5");
out.print("<br/>");
final QueryBuilder queryBuilder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
out.print("step 6");
out.print("<br/>");
ContactReplication cr = new ContactReplication();
out.print("step 7");
out.print("<br/>");


log.info("Init Dept Cache...");
String lookupName = "crx";
Hashtable<String, String> env = new Hashtable<String, String>();
out.print("step 8");
out.print("<br/>");
env.put("java.naming.provider.url", "http://jcr.day.com");
out.print("step 9");
out.print("<br/>");
env.put("java.naming.factory.initial", "com.day.util.jndi.provider.MemoryInitialContextFactory");
out.print("step 10");
out.print("<br/>");
final Session session = resource.getResourceResolver().adaptTo(Session.class);
out.print("step 11");
out.print("<br/>");

//Repository repository = JcrUtils.getRepository("http://localhost:4502/crx/server");
out.print("step 12");
out.print("<br/>");

//session = repository.login(new SimpleCredentials("admin", "admin".toCharArray()), "crx.default");
out.print("step 13");
out.print("<br/>");
      Cache cache = getCache("/ehcache.xml", "gnborgcache");
      //remove all the elements from the cache
//log.info("Removing all elements...");
      cache.removeAll();


      Node root = session.getRootNode();
      Node orgNodes = root.getNode("content").getNode("data").getNode("organizations");
      for (NodeIterator nodeIter = orgNodes.getNodes(); nodeIter.hasNext();) {
        Node orgNode = (Node) nodeIter.next();
        if(orgNode.hasNode("orginfo")){
          String deptNo = orgNode.getNode("orginfo").getProperty("DEPTID").getString();

          if(!cache.isElementInMemory(deptNo)){
            Element element = new Element(deptNo, orgNode.getPath());
            cache.put(element);
			log.info("Caching each deptNO... ah ho");
          }

        }
      }


out.print("step 13");
out.print("<br/>");

%>