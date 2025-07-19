<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.List"%>
<%@page import="java.util.StringTokenizer"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="java.util.ArrayList"%>
<head>
<style>
 .leftcol {
            float:left;
            width:600px;
            padding:10px;
        }
        
        .rightcol, .loading {
            position: absolute;
            left: 640px;
            padding: 10px;
            margin-left: 30px;
            margin-right: 30px;
        }
        
        .loading {
            z-index: 0;
        }
        
        .rightcol {
            /* overlay .loading div */
            z-index: 10;
        }
        </style>
        </head>
        <body bgcolor='Pink'>
<%
try {
final Session session = resource.getResourceResolver().adaptTo(Session.class);
final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
Map<String, String> map = new HashMap<String, String>();
String queryString = slingRequest.getParameter("query");
String props = slingRequest.getParameter("props");
StringTokenizer tokenizer = null;
SearchResult result = null;
List<Hit> list = new ArrayList<Hit>();
ArrayList<String> cols = new ArrayList<String>();
if (queryString != null && !queryString.equals("")) {
	tokenizer = new StringTokenizer(queryString,"\n");
	while (tokenizer.hasMoreTokens()) {
		String row = tokenizer.nextToken();
		if (row.indexOf(',')>0) {
			String key = row.substring(0, row.indexOf(','));
			String value = row.substring(row.indexOf(',')+1);
			key =key.trim();
			value = value.trim();
			map.put(key,value);
		}
	}
	if (props != null && !props.equals("") ) {
	    tokenizer = new StringTokenizer(props,",");
        while (tokenizer.hasMoreTokens()) {
            String row = tokenizer.nextToken().trim();
            if (!row.equals("")) {
                cols.add(row.trim());
            }
            
        }
	}
	Query query = builder.createQuery(PredicateGroup.create(map), session);
	query.setHitsPerPage(0);
	result = query.getResult();
	list = result.getHits();
}

else {
	queryString="";
	props="";
}
%>

<div class="leftcol">
<p>Enter your query in the textbox bellow.  <br/>
Entries here go into a Map that is used to create the query. <br/>
Each key-value pair should be separated by a new line, <br/>
while the key and value should be separated by a comma.</p>


<form action="${currentPage.path}.html" method="get" onsubmit="">

    <input type="hidden" name="_charset_" value="utf-8">
    <table>
    <tr>
    <td><textarea rows="7" cols="40" name="query" id="query"><%=queryString %></textarea></td>
    <td>Example: Get all contacts who's first name is Sally<br/>
    1_prop, contactinfo/FIRSTNAME<br/>
    1_prop.value, SALLY<br/>
    path, /content/data/contacts/.<br/>
    type, cq:Page</td>
    </tr>
    <tr><td><br></br></td></tr>
    <tr>
    <td>
    Enter the properties you would like to select bellow.(Optional) <br/>
    Separate each property with a comma.
    </td>
    </tr>
    <tr>
    <td><textarea rows="4" cols="20" name="props" id="props"><%=props %></textarea></td>
    <td>Example: Show first name and last name in results table<br/>
    contactinfo/FIRSTNAME, contactinfo/LASTNAME
    </td>
    </tr>
    </table>
    <br/>
    <input type="submit" value="Submit Query"></input>
</form>


<%
if (list.size()>0){ %>
  <p>Count: <%=list.size() %></p>
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Path</th>
      <%for (int i =0; i<cols.size(); i++) {
    	  out.write("<th>"+cols.get(i)+"</th>");
      }%>
    </tr>
    <%
    for(int i = 0; i<list.size(); i++) {
      Hit hit = list.get(i);
      Node node = hit.getNode();
      %><tr>
          <td><%=node.getName()%></td>
          <td><%=node.getPath()%></td>
          <%for (int j =0; j<cols.size(); j++) {
        	  if (node.hasProperty(cols.get(j))) {
                  out.write("<td>"+node.getProperty(cols.get(j)).getString()+"</td>");
        	  }
        	  else {
        		  out.write("<td>Node does not have property "+cols.get(j)+"</td>");
        	  }
      }%>
        </tr>
      <%
    }

%>
</table>
<%
}
else {
	out.write("<p>Your query did not return any results</p>");
}
}
catch (Exception e) {
	%><p>An error occured while processing your query.  Please make sure your query was properly formed<br/>Error: <%=e.getMessage() %></p><%
}

%></div>
<div class="rightcol">
<p>Link to content explorer to lookup column names:<br/>
<a href="/../crx/browser/index.jsp?Path=/content/data/" target="_blank">Content Explorer</a>
</p>
</div>

</body>