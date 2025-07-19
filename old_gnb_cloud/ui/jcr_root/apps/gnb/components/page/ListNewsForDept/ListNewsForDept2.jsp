<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Collections"%>
<%@page import="java.util.Comparator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.Normalizer"%>
<%!  
private class TitleComparator implements Comparator<Hit>{
    String [] titleLocations=new String[0];
    public int compare(Hit a, Hit b) {    
      try {
      String titleA=a.getNode().getName();
      String titleB=b.getNode().getName();
      boolean titleFound = false;
      for (int j=0; j<titleLocations.length && !titleFound; j++) {
        if (a.getNode().hasProperty(titleLocations[j])) {
           titleA = a.getNode().getProperty(titleLocations[j]).getString();
           titleFound = true;
        }
      }
      titleFound = false;
      for (int j=0; j<titleLocations.length && !titleFound; j++) {
        if (b.getNode().hasProperty(titleLocations[j])) {
           titleB = b.getNode().getProperty(titleLocations[j]).getString();
           titleFound = true;
        }
      }


      int i =(Normalizer.normalize(titleA.toUpperCase(), Normalizer.Form.NFD).replaceAll("[^\\p{ASCII}]", "").compareTo(Normalizer.normalize(titleB.toUpperCase(), Normalizer.Form.NFD).replaceAll("[^\\p{ASCII}]", "")));
        return i;
      }catch (Exception ex) {
        return 0;
      }
    }
    public void setTitleLocations (String[] titleLocations) {
      this.titleLocations = titleLocations;
    }
    public boolean equals(Hit a, Hit b) {
    return true;
    }
 }
// puts the array list of nodes in alphabetical order
private void sortNodesByTitle(List<Hit> nodes, String[] titleLocations) {
  TitleComparator comp = new TitleComparator();
  comp.setTitleLocations(titleLocations);
  Collections.sort(nodes, comp);
}

private void sortNodesByPath(List<Hit> nodes) {
  Collections.sort(nodes, new Comparator<Hit>() {
    public int compare(Hit a, Hit b) {

      try {
      int i =(Normalizer.normalize(a.getNode().getPath().toUpperCase(), Normalizer.Form.NFD).replaceAll("[^\\p{ASCII}]", "").compareTo(Normalizer.normalize(b.getNode().getPath().toUpperCase(), Normalizer.Form.NFD).replaceAll("[^\\p{ASCII}]", "")));
        return i;
      }catch (Exception ex) {
        return 0;
      }
    }
  });
}%>
<%

final Session session = resourceResolver.adaptTo(Session.class);
final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
String deptDataPage = properties.get("DataPage", "");
String searchIn = properties.get("searchIn","");
//out.write("searcgIn : "+searchIn+"<br/>");
String title = properties.get("jcr:title","");
//out.write("title : "+title+"<br/>");
String langSwitch = properties.get("langSwitch","");
//out.write("langSwitch : "+langSwitch+"<br/>");
String language =  new String(Utils.nullReplace(slingRequest.getParameter("Language")).getBytes("UTF-8"),"UTF-8");
//out.write("language : "+language+"<br/>");
String order =  new String(Utils.nullReplace(slingRequest.getParameter("Order")).getBytes("UTF-8"),"UTF-8");
//out.write("order : "+order+"<br/>");
String inact = new String(Utils.nullReplace(slingRequest.getParameter("Toggle")).getBytes("UTF-8"),"UTF-8");
//out.write("inact : "+inact+"<br/>");
String[] namespaces = properties.get("namespaces", String[].class);
String[] namespaces1 = properties.get("namespaces1", String[].class);
boolean inactive = inact.equals("inact");
String[] tags;
if (!inactive) {
    tags = slingRequest.getParameterValues("tagField");
}
else {
     tags = slingRequest.getParameterValues("inactiveTagField");
}


String namespacesConfig = "";
if (namespaces != null) {
	for (int i = 0; i < namespaces.length; i++) {
    	namespacesConfig += "\"" + namespaces[i] + "\"" +
        (i == namespaces.length - 1 ? "" : ",");
    }
}

//out.write ("namespaceconfig = " + namespacesConfig +"<br/>") ; 

String namespacesConfig1 = "";
if (namespaces1 != null) {
	for (int i = 0; i < namespaces1.length; i++) {
    	namespacesConfig1 += "\"" + namespaces1[i] + "\"" +
        (i == namespaces1.length - 1 ? "" : ",");
    }
}

//out.write ("namespaceconfig1 = " + namespacesConfig1 +"<br/>") ; 




String lang = "";
String lang1= "";
String serviceLang="";
String[] props = properties.get("properties", new String[0]);

if ((Utils.isNotEmpty(language) && language.equals("fra"))) {
    lang = "fr";
    lang1="F";
    serviceLang="FRE";
}
else {
    lang = "en";
    lang1="E";
    serviceLang="";
}
TagManager tm = resourceResolver.adaptTo(TagManager.class);
SearchResult result = null;
List<Hit> list = new ArrayList<Hit>();
if (tags!=null && tags.length >0) {    
    for (int j =0; j<props.length; j++) {

        Map<String, String> map = new HashMap<String, String>();
        for (int i=0; i<tags.length;i++) {
            String property = props[j];
            String str=tags[i].replace("+in","");
            str=str.replace("+","");
			out.write ("tags = "+ str ) ; 
            out.write ("<br/>") ; 
            if (property.startsWith("lang+")) {
                if (tags[i].toUpperCase().contains("ENG")) {
                    property=property.replace("lang+", "en");
                }
                else if(tags[i].toUpperCase().contains("FRA")) {
                    property=property.replace("lang+", "fr");
                }
            }
            map.put(i+"_prop", property);
            //map.put(i+"_prop.value", tags[i]);
            map.put(i+"_prop.value", str);
            out.write (i+"_prop = " + property +"<br/>" );
            //out.write (i+"_prop.value is " + tags[i] + "         " +"<br/>" );
        }
        map.put("path", searchIn);
        //out.write ("path = " + searchIn +"<br/>");
        Query query = builder.createQuery(PredicateGroup.create(map), session);
        query.setHitsPerPage(0);
        result = query.getResult();
        list.addAll(result.getHits());
    }
}
%>


<cq:include script="/libs/collab/commons/components/formpage/head.jsp"/>
<style>
@import url(<%= resourceResolver.map(request, "/libs/foundation/components/form/tags/tags.css") %>);
h3 {
font-size:medium; 
font-family:Arial;
padding:5px 5px 5px 5px;
}

/* ie7 fix */
.ext-ie .pathfield_wrapper {
margin-left: -104px;
}

</style>

<h3><%=title %></h3>

<form action="${currentPage.path}.html" method="get" onsubmit="return path()">
  <input type="hidden" name="_charset_" value="utf-8">
<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="tags_wrapper">Search for:</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="tags_wrapper" ></div>
        
        <script type="text/javascript">
        var tagField;
        var inactiveTagField;
        CQ.Ext.onLoad(function() {
                tagField = new CQ.tagging.TagInputField({
                    "name": "tagField",
                    "renderTo": "tags_wrapper",
                    "width": "400",
                    "namespaces": [<%= namespacesConfig %>],

                });

                inactiveTagField = new CQ.tagging.TagInputField({
                    "name": "inactiveTagField",
                    "renderTo": "tags_wrapper",                    
                    "width": "400",
                    "namespaces": [<%= namespacesConfig1 %>],

                });

                tagField.setVisible(<%=!inactive%>);
                inactiveTagField.setVisible(<%=inactive%>);


                tagField.setValue([
                                   <% if (!inactive && tags!=null) {
                                   for (int i = 0; i < tags.length; i++) {%>
									<%

            							String str=tags[i].replace("+in","");
            							str=str.replace("+","");
                                        //out.write ("tags = "+ str ) ; 
                                        //out.write ("<br/>") ; 
    								%>

                                       "<%= str %>"<%= i != tags.length - 1 ? "," : "" %>
                                   <% } }%>
                               ]);

                inactiveTagField.setValue([
                                   <% if (inactive && tags!=null) {
                                   for (int i = 0; i < tags.length; i++) {%>
									<%

            							String str=tags[i].replace("+in","");
            							str=str.replace("+","");
                                        //out.write ("tags = "+ str ) ; 
                                        //out.write ("<br/>") ; 
    								%>


                    					"<%= str %>"<%= i != tags.length - 1 ? "," : "" %>
                                   <% } }%>
                               ]);
            
            });
            
            function path() {
                var message = "Please fill in the following fields:\n";
                var path = searchPathField.getValue();
                if (path.length <1) {
                    message= message + "\tData\n";
                    alert(message);
                    return false;
                }
                
                else {
                    return true;
                }                
            }
            function toggle() {
                if (tagField.isVisible()) {
                   tagField.setVisible(false)
                   tagField.setWidth(0);
                   inactiveTagField.setVisible(true);
                   inactiveTagField.setWidth(400);
                }
                else {
                    inactiveTagField.setVisible(false);
                    inactiveTagField.setWidth(0);
                    tagField.setVisible(true)
                    tagField.setWidth(400);  
                }
            }
            function testing() {
                tagField.setValue([]);
                inactiveTagField.setValue([]);
                if (!tagField.isVisible()) {
                   toggle();
                } 
            }

        </script>
    </div>
</div>
<%
    if (deptDataPage.contains("/etc/tags")) {
%>   
<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
            <label for="toggle">Metadata to view</label>
        </div>
    </div>
    <div class="form_rightcol">
    <input type="radio" name="Toggle" value="act" <% if (!inactive) {%>checked="checked"<%} %> onchange="toggle()">Active
    <input type="radio" name="Toggle" value="inact" <% if (inactive) {%>checked="checked"<%} %> onchange="toggle()">Inactive
    </div>
</div>
<%
}

if (langSwitch!=null && langSwitch.equalsIgnoreCase("true")) {%>
<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
            <label for="Language">Language:</label>
        </div>
    </div>
    <div class="form_rightcol">
    <input type="radio" name="Language" value="eng" checked="checked">English
    <input type="radio" name="Language" value="fra">French
    </div>
</div>

<%} %>

<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
            <label for="Order by">Order by</label>
        </div>
    </div>
    <div class="form_rightcol">
    <input type="radio" name="Order" value="title" checked="checked">Titles
    <input type="radio" name="Order" value="path">Path
    </div>
</div>

<div class="form_row">
<div class="form_rightcol">

<input type="submit" value="List"></input>
<input type="reset" value="New Search" onclick="testing()"></input>
</div>
</div>
</form>
<br />
<%if (list.size()>0) { %>

<table border="1" style="margin:5px" >
<tr>
<th> &nbsp; &nbsp; &nbsp; &nbsp;</th>
<th>Title </th>
<th>Path </th>
</tr>
<%
//Array of possible title locations in order of what should be displayed as title if node has more than 
//one option.  If another title location is required simply added it to the array where appropriate.
//Note: The jcr:content nodes are being returned by the search.  To look at properties in the jcr:content's 
//parent node use ../ 
String [] titleLocations = {lang+"Title", "../serviceinfo/SERVICENAME"+serviceLang,"dam:title_"+lang1, "dc:title_"+lang1, "dc:title", "jcr:title"};
if (order.equals("path")) {
    sortNodesByPath(list);
    }
else {
    sortNodesByTitle(list, titleLocations);
}

for (int i=0; i<list.size(); i++) {
    Node node = list.get(i).getNode();
    String path = node.getPath();
    if (path.contains("/jcr:content")) {
        path = path.substring(0,path.indexOf("/jcr:content"));
    }
    String displayPath = path;

    if (displayPath.contains(searchIn)) {
        displayPath= displayPath.substring(path.indexOf(searchIn)+searchIn.length());
    }
    boolean titleFound=false;
    String nodeTitle = node.getName();
    for (int j=0; j<titleLocations.length && !titleFound; j++) {
        if (node.hasProperty(titleLocations[j])) {
            nodeTitle = node.getProperty(titleLocations[j]).getString();
            titleFound=true;
        }
    }
    int lpCnt = i + 1 ;
    out.write("<tr>");
    out.write("<td>"+lpCnt+ "</td>");
    out.write("<td>"+nodeTitle+ "</td>");
    if (path.startsWith("/content/dam/")) {
        path = "/libs/wcm/core/content/damadmin.html#"+path;
        out.write("<td><a href=\""+path+"\"target=\"_blank\">"+displayPath + "</a></td>");
    }
    else {
        out.write("<td><a href=\""+path+".html\"target=\"_blank\">"+displayPath + "</a></td>");
    }
    out.write("</tr>"); 
}%>
</table>

<%}
else  if (tags!=null && tags.length>0){
out.write("<p style=\"margin:10px\">Your search did not match any documents. </p>");
}%>
