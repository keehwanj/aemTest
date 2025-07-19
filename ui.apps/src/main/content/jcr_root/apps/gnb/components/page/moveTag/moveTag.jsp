<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.List"%>
<%@page import="javax.jcr.Node"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="org.apache.sling.api.resource.ResourceResolver"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Collections"%>
<%@page import="java.util.Comparator"%>
<%@page import="java.text.Normalizer"%>
<%@page import="com.day.cq.commons.jcr.JcrUtil"%>
<%@page import="com.day.cq.replication.Replicator"%>
<%@page import="com.day.cq.replication.ReplicationActionType"%>

<%!

//puts the array list of nodes in alphabetical order
private void sortTags(ArrayList<Node> tags) {
Collections.sort(tags, new Comparator<Node>() {
 public int compare(Node a, Node b) {
   try {
   int i =(Normalizer.normalize(a.getProperty("jcr:title").getString().toUpperCase(), Normalizer.Form.NFD).replaceAll("[^\\p{ASCII}]", "").compareTo(Normalizer.normalize(b.getProperty("jcr:title").getString().toUpperCase(), Normalizer.Form.NFD).replaceAll("[^\\p{ASCII}]", "")));
     return i;
   }catch (Exception ex) {
     return 0;
   }
   
 }
});
}

//takes in a resource resolver and the path of the folder of metadata and sorts the nodes
private void reorderTags(ResourceResolver rr, String path) throws Exception {
 String test = "1";
 Resource r = rr.getResource(path);
 test="2";
 Node n =r.adaptTo(Node.class);
 test="3";
 ArrayList<Node> tags = new ArrayList<Node>();
 test="4";
 try {   
     test="5";
     NodeIterator iter = n.getNodes();
     test="6";
     while (iter.hasNext()) {
         Node node = (Node)iter.next();
         tags.add(node);
     }
     test="7";
     sortTags(tags);
     test="8";
     String[] names = new String[tags.size()];
     test="9"; 
     for (int i =0; i<names.length; i++) {
         
         names[i] = tags.get(i).getName();
     }
     test="10";
     JcrUtil.setChildNodeOrder(n,names);
     test="11";
 }
 catch (Exception ex) {
     ex = new Exception("In Reorder "+test);
     throw ex;
 }

}

private boolean moveTag(Tag tag, Tag parent, ResourceResolver resourceResolver) throws Exception {
	SearchResult result = null;
	PageManager pageManager = resourceResolver.adaptTo(PageManager.class);
	Session session = resourceResolver.adaptTo(Session.class);
	QueryBuilder builder = resourceResolver.adaptTo(QueryBuilder.class);
	Map<String, String> map = new HashMap<String, String>();
	map.put("1_property", "cq:tags");     
	map.put("1_property.value", tag.getTagID());
	map.put("type", Nodes.PAGE_CONTENT.nodeType());
	Query query = builder.createQuery(PredicateGroup.create(map), session);
	query.setHitsPerPage(0);
	try {
	  result = query.getResult();
	}
	catch (Exception e){
		throw new Exception("test1");
	}
	List<Hit> list = result.getHits();

	for (int i=0; i<list.size(); i++) {
        Node node = list.get(i).getNode();
        Value[] values = node.getProperty("cq:tags").getValues();
        String[] newValues = new String[values.length];
        for (int j=0; j<values.length; j++) {
            if (values[j].getString().equals(tag.getTagID())) {
            	
            	if (parent.isNamespace()) {
                    newValues[j]= parent.getTagID()+tag.getName();
            	}
            	else {
            		newValues[j]= parent.getTagID()+"/"+tag.getName();
            	}
            }
            else {
                newValues[j] = values[j].getString();
            }
        }
        node.setProperty("cq:tags",newValues);
	}
	map = new HashMap<String, String>();
    map.put("1_property", "metadata/cq:tags");     
    map.put("1_property.value", tag.getTagID());
    map.put("type", Nodes.ASSET_CONTENT.nodeType());
    map.put("path", "/content/dam");
    query = builder.createQuery(PredicateGroup.create(map), session);
    query.setHitsPerPage(0);
    try {
      result = query.getResult();
    }
    catch (Exception e){
        throw new Exception("test2");
    }
    list = result.getHits();
    for (int i=0; i<list.size(); i++) {
        Node node = list.get(i).getNode();
        Value[] values = node.getProperty("metadata/cq:tags").getValues();
        String[] newValues = new String[values.length];
        for (int j=0; j<values.length; j++) {
            if (values[j].getString().equals(tag.getTagID())) {
                if (parent.isNamespace()) {
                    newValues[j]= parent.getTagID()+tag.getName();
                }
                else {
                    newValues[j]= parent.getTagID()+"/"+tag.getName();
                }
            }
            else {
                newValues[j] = values[j].getString();
            }
        }
        node.getNode("metadata").setProperty("cq:tags",newValues);
       // node.setProperty("metadata/cq:tags",newValues);
    }
	Resource r = resourceResolver.getResource(tag.getPath());
	session.getWorkspace().move(r.getPath(), parent.getPath()+"/"+tag.getName());
	reorderTags(resourceResolver,parent.getPath());
	return true;
}
%>
<%
boolean successful =false;
Session session = resourceResolver.adaptTo(Session.class);
String tagPath = new String(Utils.nullReplace(slingRequest.getParameter("tagField")).getBytes("UTF-8"),"UTF-8");
String parentPath =  new String(Utils.nullReplace(slingRequest.getParameter("path")).getBytes("UTF-8"),"UTF-8");
TagManager tm = resourceResolver.adaptTo(TagManager.class);
int count=0;
if (tagPath!=null && !tagPath.equals("") && parentPath!=null && !parentPath.equals("")) {
	Tag tag = tm.resolve(tagPath);
	Tag parent = tm.resolve(parentPath);
        try {successful = moveTag(tag, parent, resourceResolver);} 
        catch (Exception e){
            log.error(e.getMessage());
        }

}

%>
<cq:include script="/libs/social/commons/components/formpage/head.jsp"/>
<style>
@import url(<%= resourceResolver.map(request, "/libs/foundation/components/form/tags/tags.css") %>);
h3 {
font-size:medium; 
font-family:Arial;
padding:5px 5px 5px 5px;
}
</style>
<form action="${currentPage.path}.html" method="get" onsubmit="return validate()">
  <input type="hidden" name="_charset_" value="utf-8">
<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="tags_wrapper">Tag to move</label>
</div>

</div>

        <div id="tags_wrapper" class="form_rightcol" onclick="hideResults()"> </div>

        <script type="text/javascript">
        function hideResults() {
          var results = document.getElementById('results');
          results.style.display="none"; //hide element
        }
        var tagField;
        CQ.Ext.onLoad(function() {

            tagField = new CQ.form.PathField({
                "name": "tagField",
                "renderTo": "tags_wrapper",
                "hideLabel": false,
                "hideTrigger": false,
                "rootPath":"/content/cq:tags"

            });
            tagField.setWidth(400);

        });
            var pathField;
            CQ.Ext.onLoad(function() {

                newPathField = new CQ.form.PathField({
                    "name": "path",
                    "renderTo": "path_wrapper",
                    "hideLabel": false,
                    "hideTrigger": false,
                    "rootPath":"/content/cq:tags"

                });
                pathField.setWidth(400);

            });
            function validate() {
                var message = "Please fill in the following fields:\n";
                var path = newPathField.getValue();
                if (path.length <1) {
                    message= message + "\tFolder\n";
                }
                var array = tagField.getValue();
                if (array.length <1) {
                     message= message + "\tTag\n";
                }
                if (path.length<1 || array.length<1) {
                    alert(message);
                    return false;
                }
                else {
                    return true;
                }                
            }
        </script>

</div>
<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="path_wrapper">New Parent Folder</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="path_wrapper" class="pathfield_wrapper"></div>

        <script type="text/javascript">

        </script>
    </div>
</div>   


<div class="form_row">
<div class="form_rightcol">
<input type="submit" value="Begin Moving Tags"></input>
</div>
</div>
</form>
<div id="results" style="display:block" >
<% 

if (!successful && Utils.isNotEmpty(tagPath)) {
        out.write("Could not move all tags");
}
else if (Utils.isNotEmpty(tagPath)){
   session.save();
       out.write("Moving Tags completed");

}
%></div>
