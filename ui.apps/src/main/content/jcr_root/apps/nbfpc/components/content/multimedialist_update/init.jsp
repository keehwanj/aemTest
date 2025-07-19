
<%@page import="com.t4g.cnb.utils.ListItem"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Iterator"%>
<%@page import="javax.jcr.Session"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="javax.jcr.RepositoryException"%>
<%@page import="org.apache.sling.api.resource.Resource"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="javax.jcr.Node"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Date"%>
<%

HashMap<Integer, List<ListItem>> tabs = new HashMap<Integer, List<ListItem>>();

for (int tab = 1; tab < 5; tab++) {
  String queryKey = "savedquery" + tab;
  String readMoreKey = "readmore" + tab;
  String queryLimitKey = "querylimit" + tab;
  int queryLimit = 100;
  QueryBuilder queryBuilder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
  Session localsession = resource.getResourceResolver().adaptTo(Session.class);
  Iterator<Node> nodeIterator = null;

  if (localsession != null && queryBuilder != null && properties.containsKey(queryKey) && Utils.isNotEmpty(properties.get(queryKey, ""))) {
    if (properties.containsKey(queryLimitKey) && Utils.isNotEmpty(properties.get(queryLimitKey, ""))) {
      queryLimit = properties.get(queryLimitKey, 100);
    }
    try {
      Query query = queryBuilder.loadQuery(resource.getPath() + "/" + queryKey, localsession);
      if (query != null) {
        query.setHitsPerPage(queryLimit);
        SearchResult result = query.getResult();
        // store as both page and node iterator
        nodeIterator = result.getNodes();
      }
    } catch (Exception e) {
      log.error("error loading stored querybuilder query from " + resource.getPath() + "/" + queryKey, e);
    }

    if (nodeIterator != null) {
      List<ListItem> tabContent = new ArrayList<ListItem>();
      while (nodeIterator.hasNext()) {
        Node multimediaNode = nodeIterator.next();
        ListItem listItem = new ListItem(multimediaNode.getParent().getPath(),currentPage, resource);
        if (properties.containsKey(readMoreKey) && Utils.isNotEmpty(properties.get(readMoreKey, ""))) {
          listItem.setMorelink(listItem.getQuicklink().replaceFirst(">.*<", ">" + properties.get(readMoreKey, "").replaceAll("[$]","\\$") + "<"));
        }
        tabContent.add(listItem);
      }
      tabs.put(tab,tabContent);
    }
  }
}




%>