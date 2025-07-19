<%@ include file="/libs/wcm/global.jsp"%>
<%@page import="net.sf.ehcache.Cache"%>
<%@page import="net.sf.ehcache.CacheManager"%>
<%@page import="net.sf.ehcache.Element"%>
<%@page import="com.t4g.cnb.utils.CacheLoad"%>

<%  
CacheManager manager = CacheManager.getInstance();
Cache cache = manager.getCache("gnborgcache");
CacheLoad cl = new CacheLoad();
cl.initDeptMap();
out.write("The gnborgcache size:" + cache.getSize());
out.write("cache:" + cache.getKeys() );
out.write("\n");
out.write("The gnborgcache refreshed!");
 

%>