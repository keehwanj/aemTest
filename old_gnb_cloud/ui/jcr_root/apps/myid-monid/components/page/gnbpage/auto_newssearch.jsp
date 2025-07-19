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
String serviceDataPage = "/content/gnb/cnb_data/news_nouvelles";

Map<String, String> map = new HashMap<String, String>();

map.put("path", serviceDataPage);
map.put("type", "cq:Page");
map.put("1_property", "jcr:content/cq:template");
map.put("1_property.value", "/apps/gnb/templates/newsdata");
map.put("2_property", "jcr:content/"+lang+"Title");
map.put("2_property.operation", "exists");
map.put("p.limit", "-1");

Query query = builder.createQuery(PredicateGroup.create(map), session);

result = query.getResult(); 


String searchValue = request.getParameter("term").trim().toLowerCase();

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
	Node serviceDataNode = node.getNode("jcr:content");
	String title = ""; 
    title = serviceDataNode.getProperty(lang+"Title").getString().trim().toLowerCase();
	String titleUnder = title.replace("'",""); 
    titleUnder=titleUnder.replace(" - ","-");

    titleUnder=titleUnder.replace(" - ","-");
    titleUnder=titleUnder.replace(" -","-");

    titleUnder=titleUnder.replace("- ","-");
    titleUnder=titleUnder.replace(" - ","-");
    titleUnder=titleUnder.replace(" -","-");
    titleUnder=titleUnder.replace("- ","-");

    //titleUnder = titleUnder.replace(" ","_");
	titleUnder = titleUnder.replace("/","");
	//description = title; 
	//replace the accented characters with the html equiv. 
	titleUnder = titleUnder.replace("\u00C9","&#201;"); 
	titleUnder = titleUnder.replace("\u00E9","&#233;"); 
	titleUnder = titleUnder.replace("é","&#233;");  
	titleUnder = titleUnder.replace("\u00F4","&#244;");
	titleUnder = titleUnder.replace("\u00D4","&#212;");
	titleUnder = titleUnder.replace("\u00E8","&#232;");
	titleUnder = titleUnder.replace("\u00C8","&#200;");
	titleUnder = titleUnder.replace("\u00EE","&#238;");
	titleUnder = titleUnder.replace("\u00CE","&#206;");
	titleUnder = titleUnder.replace("\u00E0","&#224;");
	titleUnder = titleUnder.replace("\u00C7","&#199;");
	titleUnder = titleUnder.replace("\u00E7","&#231;");
	titleUnder = titleUnder.replace("\u00EA","&#234;");
	titleUnder = titleUnder.replace("\u00CA","&#202;");
	titleUnder = titleUnder.replace("\u00EB","&#235;");
	titleUnder = titleUnder.replace("\u00CB","&#203;");
	titleUnder = titleUnder.replace("\u00E2","&#226;");
	titleUnder = titleUnder.replace("\u00C2","&#194;");
	//replace the trademark tm character in the title 
	titleUnder = titleUnder.replace("\u2122","");      

	//replace the squished oe character in the title 
	titleUnder = titleUnder.replace("\u0153","oe");
	//titleUnder = titleUnder.replace("œ","oe");
	//replace en dashes in the title with regular dashes  
	titleUnder = titleUnder.replace("\u2013","-"); 
	//replace left double curly quotes with nothing 
	titleUnder = titleUnder.replace("\u201C","");    
	//eliminate colons and semi-colons 
	titleUnder = titleUnder.replace(":","");  
	titleUnder = titleUnder.replace(";","");
    if(!(titleUnder.contains("&"))){
		dblist.add(titleUnder); 
	}
}

Collections.sort(dblist);

for(String str : dblist) { 
    //if(str.toLowerCase().startsWith(searchValue)) { 
    if(str.toLowerCase().contains(searchValue)) { 
        resultlist.add(str); 
    } 
}

///////////resultlist를 db에서 조회후 뽑아온 list라고 가정한다./////////// 
//뽑은 후 json파싱 
int cnt=1;
for(String str : resultlist) { 
    jsonObj = new JSONObject(); 
    jsonObj.put("data", str); 
    arrayObj.put(jsonObj); 
    if(cnt>=15){
    	break;
    }
     cnt++;
}

PrintWriter pw = response.getWriter(); 
pw.print(arrayObj); 
pw.flush(); 
pw.close();

%>