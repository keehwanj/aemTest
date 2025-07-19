<%@include file="/libs/foundation/global.jsp"%>
<%@ page  import="javax.jcr.Node"%>
<%@ page  import="javax.jcr.NodeIterator"%>
<%@ page  import="net.sf.ehcache.Cache"%>
<%@ page  import="net.sf.ehcache.CacheManager"%>
<%@ page  import="net.sf.ehcache.CacheException"%>
<%@ page  import="net.sf.ehcache.Element"%>
<%@ page  import="net.sf.ehcache.config.CacheConfiguration"%>
<%
final Session session = resource.getResourceResolver().adaptTo(Session.class);
log.info("Creating CacheManager");  
CacheManager cachemanager=CacheManager.create();

log.info("removeing previous cache");  
cachemanager.removeCache("gnborgcache");

log.info("creating new cache");  
cachemanager.addCache("gnborgcache");
Cache cache=cachemanager.getCache("gnborgcache");


CacheConfiguration config1 = cache.getCacheConfiguration();
//config1.setTimeToIdleSeconds(600000);//166 hrs
//config1.setTimeToLiveSeconds(1200000);//333 hrs
config1.eternal(true);

Node root = session.getRootNode();
Node orgNodes = root.getNode("content").getNode("data").getNode("organizations");

for (NodeIterator nodeIter = orgNodes.getNodes(); nodeIter.hasNext();) {
	Node orgNode = (Node) nodeIter.next();
	if(orgNode.hasNode("orginfo")){
		String deptNo = orgNode.getNode("orginfo").getProperty("DEPTID").getString();

		if(!cache.isElementInMemory(deptNo)){
			Element element = new Element(deptNo, orgNode.getPath());
			cache.put(element);
            //log.info("Caching each deptNO... ah ho");  
		}

	}
}

int cacheSize=cache.getSize();
out.print("<p>"+"The gnborgcache size :"+cacheSize+"</p>");

long memoryStoreSize=cache.getMemoryStoreSize();
out.print("<p>"+"Memory Store Size :"+memoryStoreSize+"</p>");

long diskStoreSize=cache.getDiskStoreSize();
out.print("<p>"+"Disk Store Size :"+diskStoreSize+"</p>");

//for (Object key : cache.getKeys()) {
//	out.println("Key:" + key);
// }

out.print("<p>"+"gnborgcache: " + cache.getKeys()+"</p>");


%>