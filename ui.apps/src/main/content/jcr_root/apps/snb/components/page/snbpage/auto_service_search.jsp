<%@include file="/libs/foundation/global.jsp"%>
<%@ page import="org.slf4j.Logger"%>
<%@ page import="java.util.Locale"%>
<%@ page import="com.day.cq.wcm.api.Page"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>

<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.ArrayList"%>

<%@ page import="org.json.JSONArray"%>
<%@ page import="org.json.JSONObject"%>
<%@ page import="java.io.PrintWriter"%>


<%@page import="java.util.Set"%>
<%@page import="java.util.HashSet"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="java.util.Collections"%>

<%
String lang = "fr";
String langSuffix = "FRE";
String langSuffix2 = "FRE";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
	lang = "en";
	langSuffix = "";
	langSuffix2 = "ENG";
  }



final Session session = resource.getResourceResolver().adaptTo(Session.class);
final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);    
SearchResult result = null;
/*
Node serviceDataNode = null;
String serviceDataPage = "/content/data/services";
serviceDataNode = WCMUtils.getNode(resourceResolver.getResource(itemPath));
*/
String serviceDataPage = "/content/data/services";

Map<String, String> map = new HashMap<String, String>();
map.put("path", serviceDataPage);
map.put("type", "cq:Page");
map.put("p.limit", "-1");

Query query = builder.createQuery(PredicateGroup.create(map), session);

result = query.getResult(); 


String searchValue = request.getParameter("term");



JSONArray arrayObj=new JSONArray(); 
JSONObject jsonObj = null;

//////////// 임의의 데이터(db라 가정하자) //////////// 

ArrayList<String> dblist = new ArrayList<String>(); 
ArrayList<String> resultlist = new ArrayList<String>(); 
Set<String> hs = new HashSet<>();

List<Hit> list = result.getHits();
for (int i=0; i<list.size(); i++) {
  Node node = list.get(i).getNode();
	//out.write ("currentnode  = " + node );
	Node serviceDataNode = node.getNode("serviceinfo");
	String title = ""; 
    title = serviceDataNode.getProperty("SERVICENAME"+langSuffix).getString();
    String titleUnder = title.replace("",""); 
    if(!(titleUnder.contains("&"))){
		dblist.add(titleUnder); 
	}
}

Collections.sort(dblist);

for(String str : dblist) { 
    if(str.contains(searchValue) || (str.toLowerCase().contains(searchValue.toLowerCase()))) { 
        resultlist.add(str); 
    } 
}

///////////resultlist를 db에서 조회후 뽑아온 list라고 가정한다./////////// 
//뽑은 후 json파싱 
int cnt=1;
for(String str : resultlist) { 
    str = str.trim(); 
    str = str.replace(" - ","-");
    str = str.replace(" / ","/");
    str = str.replace("’","_");  
    str = str.replace("'","_");  
    str = str.replace("’","_");

    jsonObj = new JSONObject(); 
    jsonObj.put("data", str); 
    arrayObj.put(jsonObj); 
    if(cnt>=20){
    	break;
    }
     cnt++;
}

PrintWriter pw = response.getWriter(); 
pw.print(arrayObj); 
pw.flush(); 
pw.close();

%>