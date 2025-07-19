<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.List"%>
<%@page import="org.apache.sling.api.resource.ResourceResolver"%>
<%@page import="javax.jcr.Node"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%
String message="";
String OutErrors = "<br><br>"; 
String OutTagged = "<br><br>" ; 
String OutRemoved = "<br><br>" ; 
String OutConsidered = "<br><br>" ; 
String pathout = "";
String sBuffer = "&nbsp;&nbsp;&nbsp;";
Session session = resourceResolver.adaptTo(Session.class);
TagManager tm = resourceResolver.adaptTo(TagManager.class);
String path =  new String(Utils.nullReplace(slingRequest.getParameter("path")).getBytes("UTF-8"),"UTF-8");
String[] currentTags = slingRequest.getParameterValues("currentTagField");
//out.write(currentTags[0]+"<br/>");


String untagString =  new String(Utils.nullReplace(slingRequest.getParameter("untag")).getBytes("UTF-8"),"UTF-8");
boolean untag = Boolean.parseBoolean(untagString);
String[] namespaces = properties.get("namespaces", String[].class);
boolean successful = true;
int count=0;
int nCantTag= 0; 
int nConsidered = 0;  
    String namespacesConfig = "";
    if (namespaces != null) {
        for (int i = 0; i < namespaces.length; i++) {
            namespacesConfig += "\"" + namespaces[i] + "\"" +
                    (i == namespaces.length - 1 ? "" : ",");
        }
    }
if (path!=null && path.length()>0 && currentTags!=null && !currentTags.equals("")) {
    //try {
    SearchResult result = null;
    QueryBuilder builder = resourceResolver.adaptTo(QueryBuilder.class);
    Map<String, String> map = new HashMap<String, String>();
    for (int i=0; i<currentTags.length; i++) {
        map.put(i+"_property", "cq:tags");     
        map.put(i+"_property.value", currentTags[i].replace("+",""));
    }
    //map.put("type", Nodes.PAGE_CONTENT.nodeType());
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
    for (Hit hit: list) {
        //if (hit.getNode().isNodeType("cq:Taggable"))   { 
            Node node = hit.getNode();
            pathout = node.getPath(); 
            Value[] values = hit.getNode().getProperty("cq:tags").getValues();
            String[] newValues;
            String tag = tm.resolve(path).getTagID();
            if (untag) {
                newValues = new String[values.length];
                for (int i =0; i<values.length; i++) {
                    if (!tag.equals(values[i].getString())) {
                        newValues[i] = values[i].getString();
                    }
                    else {
                        count++;
                        OutRemoved = OutRemoved + sBuffer + sBuffer + count + ".  " +pathout + " <br>";
                    }
                }
            }
            else {
                newValues = new String[values.length+1];
                boolean newTag = true;
                for (int i =0; i<values.length; i++) {
                    newValues[i] = values[i].getString();
                    if (tag.equals(values[i].getString())) {
                        newTag=false;
                    }
                }
                if (newTag) {
                    newValues[values.length] = tag;
                    count++;
                    OutTagged = OutTagged + sBuffer + sBuffer + count + ".  " +pathout + " <br>";
                    
                }
            }
            try { 
                hit.getNode().setProperty("cq:tags", newValues);
                nConsidered ++; 
                OutConsidered = OutConsidered + sBuffer + sBuffer + nConsidered + ".  " + pathout + " <br>"; 
              
            } 
            catch (Exception e) { 
                nCantTag++;
                OutErrors = OutErrors  + sBuffer + sBuffer + nCantTag + ".  " + pathout + " <br>";
                 
                }
        //}   // end of if isnodetype("cq:taggable")  
    }  
    //}
//  catch(Exception e ) {
    //  successful = false;
    //  message = e.getMessage();
    //}
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
<label for="path_wrapper">Add/Remove this tag</label>
</div>
</div>
        <div id="path_wrapper" class="form_rightcol" onclick="hideResults()"> </div>
        
        <script type="text/javascript">
        function hideResults() {
          var results = document.getElementById('results');
          results.style.display="none"; //hide element
        }
        var pathField;
        var currentTagField;
            CQ.Ext.onLoad(function() {
                pathField = new CQ.form.PathField({
                    "name": "path",
                    "renderTo": "path_wrapper",
                    "hideLabel": false,
                    "hideTrigger": false,
                    "rootPath": "/content/cq:tags"
                    
                });
                pathField.setWidth(400);
    
                currentTagField = new CQ.tagging.TagInputField({
                    "name": "currentTagField",
                    "renderTo": "current_wrapper",
                    "hideLabel": false,
                    "namespaces": [<%= namespacesConfig %>],
                    "width": "400"
                });

            });
            function validate() {
                var message = "Please fill in the following fields:\n";
                var path = pathField.getValue();
                if (path.length <1) {
                    message= message + "\tNew Tag\n";
                }
                var array = currentTagField.getValue();
                if (array.length <1) {
                     message= message + "\tCurrent Tag\n";
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
<label for="current_wrapper">To content with these tags</label>
</div>
</div>

        <div id="current_wrapper" class="form_rightcol"></div>

</div>   

<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
           
        </div>
    </div>
    <div class="form_rightcol">
    <input type="radio" name="untag" value="false" checked="checked">Tag Selected Tree
    <input type="radio" name="untag" value="true">Untag Selected Tree
    </div>
</div>

<div class="form_row">
<div class="form_rightcol">
<input type="submit" value="Begin Mass Tagging"></input>
</div>
</div>
</form>
<div id="results" style="display:block" >
<% 
if (path!=null &&path.length()>0) {
    if (!successful) {
        if (!untag) {
            out.write(sBuffer + "Could not tag all items in this folder");
        }
        else {
            out.write(sBuffer + "Could not untag all items in this folder");
            out.write(sBuffer + message);
        }
    }
    else {
        session.save();

        if (!untag) {
            out.write("<br><br>" + sBuffer + "Tagging completed, "+count+" tags added<br><br><hr>");
            out.write ("<br>" + sBuffer + "Items with the tags : <br><br>" );
            for (int i=0; i<currentTags.length; i++) {
                out.write( sBuffer + sBuffer + currentTags[i].replace("+","") + "<br>" ); 
            }
            out.write ("<br>" + sBuffer + "were looked at and may or may not have received new tag : <br><br>" + sBuffer + sBuffer + path + "<br><br><hr>" ); 
            out.write("<br>" + sBuffer + "The following items were looked at and may or may not have received a new tag :  " + OutConsidered ); 
            out.write("<br><hr><br>" + sBuffer + "The following items received a new tag :  " + OutTagged ); 
        }
        else {
            out.write("<br><br>" + sBuffer + "Untagging completed, "+count+" tags removed<br><br><hr>");
            out.write ("<br>" + sBuffer + "Items with the tags : <br><br>" );
            for (int i=0; i<currentTags.length; i++) {
                out.write( sBuffer + sBuffer + currentTags[i].replace("+","") + "<br>" ); 
            }
            out.write ("<br>" + sBuffer + "were looked at and may or may not have had this tag removed : <br><br>" + sBuffer + sBuffer + path + "<br><br><hr>" ); 
            out.write("<br>" + sBuffer + "The following items were looked at and may or may not have tags removed:  " + OutConsidered ); 
            out.write("<br><hr><br>" + sBuffer + "The following items had a tag removed:  " + OutRemoved ); 
        }
        if (nCantTag > 0 ) {
            out.write("<br><hr><br>" + sBuffer + "The following " + nCantTag + " items cannot be tagged bacause their 'untaggable' property is set "  + OutErrors );
        }
        
    }
    out.write ("<br><br><br>");
}
%></div>
