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

<%
boolean successful =false;
String OutTagged = "" ; 
String pathout = ""; 
Session session = resourceResolver.adaptTo(Session.class);
String oldTagPath = new String(Utils.nullReplace(slingRequest.getParameter("tagField")).getBytes("UTF-8"),"UTF-8");
String newTagPath =  new String(Utils.nullReplace(slingRequest.getParameter("path")).getBytes("UTF-8"),"UTF-8");
TagManager tm = resourceResolver.adaptTo(TagManager.class);
int count=0;

// if there is data in our tag variables this time through - go ahead and do the replace   

if (oldTagPath!=null && !oldTagPath.equals("") && newTagPath!=null && !newTagPath.equals("")) {
    Tag oldTag = tm.resolve(oldTagPath);
    Tag newTag = tm.resolve(newTagPath);
    OutTagged = "<br><br>The following content has had tag: <br><br>" + oldTag.getTagID() + " <br><br>replaced with <br><br>" + newTag.getTagID() + "<br><br>" ; 
    try {
        SearchResult result = null;
        //PageManager pageManager = resourceResolver.adaptTo(PageManager.class);
        //Session session = resourceResolver.adaptTo(Session.class);
        QueryBuilder builder = resourceResolver.adaptTo(QueryBuilder.class);
        Map<String, String> map = new HashMap<String, String>();
        map.put("1_property", "cq:tags");     
        map.put("1_property.value", oldTag.getTagID());
        map.put("type", Nodes.PAGE_CONTENT.nodeType());
        // only consider items under the content folder - other things should not be tagged, but for some reason the tag utilities are finding 
        // other content that matches the search criteria - and they cause issues - since they are marked cq:untaggable  - so error when you try to tag them 
        map.put("path", "/content");
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
            pathout = node.getPath();
            count ++; 
            OutTagged = OutTagged + count + ".  " + pathout + "<br>"; 
            Value[] values = node.getProperty("cq:tags").getValues();
            String[] newValues = new String[values.length];
            for (int j=0; j<values.length; j++) {
                if (values[j].getString().equals(oldTag.getTagID())) {
                    newValues[j]= newTag.getTagID();
                }
                else {
                    newValues[j] = values[j].getString();
                }
            }
            node.setProperty("cq:tags",newValues);
            try
                {
                 node.setProperty("cq:tags",newValues);
                }
            catch (Exception e)
                {
                out.write("<br><br>Could not set tag values on node: " + pathout + "<br><br> This produced the error: " + e.getMessage() ) ; 
                log.error(e.getMessage());
                } 
        }
        // do the dam content separately - have to set the tag property using  
        // this method for dam stuff : node.getNode("metadata").setProperty("cq:tags",newValues);
        
        map = new HashMap<String, String>();
        map.put("1_property", "metadata/cq:tags");     
        map.put("1_property.value", oldTag.getTagID());
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
            pathout = node.getPath();
            count ++; 
            OutTagged = OutTagged + count + ".  " + pathout + "<br>"; 
            Value[] values = node.getProperty("metadata/cq:tags").getValues();
            String[] newValues = new String[values.length];
            for (int j=0; j<values.length; j++) {
                if (values[j].getString().equals(oldTag.getTagID())) {
                    newValues[j]= newTag.getTagID();
                }
                else {
                    newValues[j] = values[j].getString();
                }
            }
            try
                {
                node.getNode("metadata").setProperty("cq:tags",newValues);
                }
            catch (Exception e)
                {
                out.write("<br><br>Could not set tag values on node: " + pathout + "<br><br> This produced the error: " + e.getMessage() ) ; 
                log.error(e.getMessage());
                } 
        }
        
        successful = true; 
     }
     catch (Exception e){
         out.write("Could not replace tags - error occured" );
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
<label for="tags_wrapper">Tag to replace</label>
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
<label for="path_wrapper">Replace with</label>
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
<input type="submit" value="Replace Tag"></input>
</div>
</div>
</form>
<div id="results" style="display:block" >
<% 

if (!successful && Utils.isNotEmpty(oldTagPath)) {
        out.write("Failed to replace tag");
}
else if (Utils.isNotEmpty(oldTagPath)){
       session.save();
       out.write( OutTagged );

}
%></div>
