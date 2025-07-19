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

<%@page import="java.util.TreeSet"%>
<%@page import="org.apache.commons.lang.WordUtils"%>

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
String serviceDataPage = "/content/data/contacts";
String searchValue = request.getParameter("term");
searchValue = searchValue+"%";
searchValue=searchValue.toUpperCase();
out.println(searchValue);
out.println("</br>");
Map<String, String> map = new HashMap<String, String>();

/*
type=cq:Page
path=/content/data/contacts
1_orderby=@contactinfo/@FIRSTNAME_STRIP
2_property.operation=like
2_property=contactinfo/LASTNAME_STRIP
2_orderby=@contactinfo/@LASTNAME_STRIP
2_property.value=JEE%

tagid.property=jcr:content/cq:tags
*/
map.put("type", "cq:Page");
map.put("path", serviceDataPage);
map.put("1_orderby", "@contactinfo/@FIRSTNAME_STRIP");
map.put("2_property.operation", "like");
map.put("2_property", "contactinfo/LASTNAME_STRIP");
map.put("2_orderby", "@contactinfo/@LASTNAME_STRIP");
map.put("2_property.value", searchValue);
map.put("tagid.property", "jcr:content/cq:tags");
map.put("p.limit", "-1");

/**
  if (!map.isEmpty()) {


	for (Map.Entry<String, String> entry : map.entrySet())
	{
        out.write(entry.getKey() + "=" + entry.getValue());
        out.write("<br/>");
	}

  }

**/


Query query = builder.createQuery(PredicateGroup.create(map), session);

result = query.getResult(); 

JSONArray arrayObj=new JSONArray(); 
JSONObject jsonObj = null;

//////////// 임의의 데이터(db라 가정하자) //////////// 

ArrayList<String> dblist = new ArrayList<String>(); 
ArrayList<String> resultlist = new ArrayList<String>(); 
Set<String> hs = new HashSet<>();

List<Hit> list = result.getHits();
int x=0;
for (int i=0; i<list.size(); i++) {
  Node node = list.get(i).getNode();

	Node serviceDataNode = node.getNode("contactinfo");
	String title = ""; 
    title = serviceDataNode.getProperty("LASTNAME_STRIP").getString().trim();

	String titleUnder = title.replace("'","");

    titleUnder=titleUnder.replace(" - ","-");

    titleUnder=titleUnder.replace(" - ","-");
    titleUnder=titleUnder.replace(" -","-");

    titleUnder=titleUnder.replace("- ","-");
    titleUnder=titleUnder.replace(" - ","-");
    titleUnder=titleUnder.replace(" -","-");
    titleUnder=titleUnder.replace("- ","-");


	titleUnder = titleUnder.replace("/","");


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

	titleUnder = titleUnder.replace("\u2122","");      


	titleUnder = titleUnder.replace("\u0153","oe");

	titleUnder = titleUnder.replace("\u2013","-"); 

	titleUnder = titleUnder.replace("\u201C","");    

	titleUnder = titleUnder.replace(":","");  
	titleUnder = titleUnder.replace(";","");

    if(!(titleUnder.contains("&"))){
		dblist.add(titleUnder); 
	}
}

Collections.sort(dblist);


Set<String> set = new HashSet<String>(dblist);
TreeSet<String> myTreeSet = new TreeSet<String>();
myTreeSet.addAll(set);

for(String str : myTreeSet) { 
    str=str.toLowerCase();
    str=WordUtils.capitalizeFully(str);    
    resultlist.add(str); 

}

int cnt=0;
int cntnew=0;
for(String str : resultlist) { 
    //cntnew++;
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