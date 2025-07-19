<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.jcr.Node"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%!


private int massTag(Node node, Tag tag, boolean untag) throws Exception {
    return massTag(node, tag, 0, untag);
}
private int massTag(Node node, Tag tag, int count, boolean untag) throws Exception {
    boolean success = true;
    try {
        String[] newValues =null;
        if (node.hasNode("jcr:content")) {
            Node content = node.getNode("jcr:content");
            
            //Tags are stored in the metadata node of dam assets.
            if (content.getPath().contains("/content/dam/")){
                if (content.hasNode("metadata")) { 
                    content= content.getNode("metadata");
                }
                else {
                    content =null;
                }
            }
            if(content!=null && content.hasProperty("cq:tags")) {
                Value[] values = content.getProperty("cq:tags").getValues();
                if (!untag) {
                    newValues = new String[values.length+1];
                    boolean newTag=true;
                    for (int i=0; i<values.length; i++) {
                        newValues[i] = values[i].getString();
                        if (newValues[i].equals(tag.getTagID())) {
                            newTag = false;
                        }
                    }
                    if (newTag) {
                        newValues[values.length] = tag.getTagID();
                        count++;
                    }
                }
                else { 
                    newValues = new String[values.length];
                    for (int i=0; i<values.length; i++) {
                        if(!values[i].getString().equals(tag.getTagID())) {
                            newValues[i]=values[i].getString();
                        }
                        else {
                            count++;
                        }
                    }
                }
            }
            else  if (!untag) {
                newValues = new String[1];
                newValues[0] = tag.getTagID();
                if (content!=null) {
                    count++;
                }
            }
            if (content!=null) {
                content.setProperty("cq:tags", newValues);
            }
        }
    }
        
    catch (Exception e) {
        success= false;
        if (!e.getMessage().contains("node:")) {
            e= new Exception ("Error on node: "+node.getPath());
        }
        throw e;
    }
    try {
        if (node.hasNodes()) {
            NodeIterator iter = node.getNodes();
            while (iter.hasNext()) {
                Node next = iter.nextNode();
                if (!next.isNodeType("cq:PageContent")) {
                    count = massTag(next, tag, count, untag);
                    if(count%50 == 0) {
                        //This line should be used if we run into out of memory exceptions
                        node.getSession().save();
                    }
                }
            }
        }
    }
    catch(Exception e) {
        success= false;
        if (!e.getMessage().contains("node:")) {
            e= new Exception ("Error on node: "+node.getPath());
        }
        throw e;
    }
    return count;
}
%>
<%
Session session = resourceResolver.adaptTo(Session.class);
TagManager tm = resourceResolver.adaptTo(TagManager.class);
String[] tags = slingRequest.getParameterValues("tagField");
String path =  new String(Utils.nullReplace(slingRequest.getParameter("path")).getBytes("UTF-8"),"UTF-8");
String untagString =  new String(Utils.nullReplace(slingRequest.getParameter("untag")).getBytes("UTF-8"),"UTF-8");
boolean untag = Boolean.parseBoolean(untagString);
String[] namespaces = properties.get("namespaces", String[].class);
boolean successful = true;
int count=0;
if (tags!=null && tags.length>0 && path!=null && !path.equals("")) {
   Node node = resourceResolver.getResource(path).adaptTo(Node.class);
   
   for (int i=0; i<tags.length;i++) {
        Tag tag = tm.resolve(tags[i]);
        try {count = count + massTag(node, tag, untag);} 
        catch (Exception e){
            successful=false;
            log.error(e.getMessage());
        }
   }
}
    String namespacesConfig = "";
    if (namespaces != null) {
        for (int i = 0; i < namespaces.length; i++) {
            namespacesConfig += "\"" + namespaces[i] + "\"" +
                    (i == namespaces.length - 1 ? "" : ",");
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
<label for="tags_wrapper">Tag</label>
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
    
                 tagField = new CQ.tagging.TagInputField({
                    "name": "tagField",
                    "renderTo": "tags_wrapper",
                    "hideLabel": false,
                    "namespaces": [<%= namespacesConfig %>],
                    "width": "400"
                });

            });
            var pathField;
            CQ.Ext.onLoad(function() {
               
                newPathField = new CQ.form.PathField({
                    "name": "path",
                    "renderTo": "path_wrapper",
                    "hideLabel": false,
                    "hideTrigger": false
                    
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
<label for="path_wrapper">Start Tagging Here</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="path_wrapper" class="pathfield_wrapper"></div>
        
        <script type="text/javascript">
        
        </script>
    </div>
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

if (!successful && Utils.isNotEmpty(path)) {
    if (!untag) {
        out.write("Could not tag all items in this folder");
    }
    else {
        out.write("Could not untag all items in this folder");
    }
}
else if (Utils.isNotEmpty(path)){
   session.save();

   if (!untag) {
       out.write("Tagging completed, "+count+" tags added");
   }
   else {
       out.write("Untagging completed, "+count+" tags removed");
   }
}
%></div>