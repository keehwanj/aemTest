<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="org.apache.sling.api.resource.ResourceResolver"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%!
private boolean copyTags(Node node, ResourceResolver resourceResolver) {
	boolean successful=true;
	try {
	    
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
                Value[] newValues = new Value[values.length];
                TagManager tagManager = resourceResolver.adaptTo(TagManager.class);
                String str="";
                String str1="";
                for (int i=0; i<values.length; i++) {
                    //if (tagManager.resolve("/content/data/metadata/active/"+values[i].getString().replace(":","/"))!=null || tagManager.resolve("/content/data/metadata/inactive/"+values[i].getString().replace(":","/"))!=null) {
                    if (tagManager.resolve("/etc/tags/"+values[i].getString().replace(":","/"))!=null) {
                        newValues[i] = values[i];

                    }

                }
                content.setProperty("dam:dept", newValues);
                node.getSession().save();
            }
        }       
	}
	catch(Exception e) {
		successful =false;	
	}
	try {
        if (node.hasNodes()) {
            NodeIterator iter = node.getNodes();
            while (iter.hasNext()) {
                Node next = iter.nextNode();
                if (!next.isNodeType("dam:AssetContent")) {
                	successful = copyTags(next, resourceResolver);
                }
            }
        }
    }
    catch(Exception e) {
        successful= false;
    }
	return successful;
}
%>
<%
boolean successful = false;
Session session = resourceResolver.adaptTo(Session.class);
String path =  new String(Utils.nullReplace(slingRequest.getParameter("path")).getBytes("UTF-8"),"UTF-8");
if (path!=null && !path.equals("")) {
	Node node = resourceResolver.getResource(path).adaptTo(Node.class);
	successful = copyTags(node, resourceResolver);

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
</style>
<p>This page was designed to copy the "cq:tags" field to a new property called "dam:dept".  
For each node under the selected starting node, all of that node's tags that have a corresponding piece of metadata found under /content/data/metadata will be copied.  
This may take a few minutes.</p>

<form action="${currentPage.path}.html" method="get" onsubmit="return validate()">
  <input type="hidden" name="_charset_" value="utf-8">

<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="path_wrapper">Copy Tags to Departments Starting Here</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="path_wrapper" class="pathfield_wrapper" onclick="hideResults()"></div>
        <script type="text/javascript">
        function hideResults() {
          var results = document.getElementById('results');
          results.style.display="none"; //hide element
        }
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
                    alert(message);
                    return false;
                }
                else {
                    return true;
                }                
            }
        </script>
        

    </div>
</div>   

<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
           
        </div>
    </div>
</div>

<div class="form_row">
<div class="form_rightcol">
<input type="submit" value="Copy Tags"></input>
</div>
</div>
</form>
<div id="results" style="display:block" >
<% 

if (!successful && Utils.isNotEmpty(path)) {
    out.write("Could not copy all the tags in this folder");
}
else if (Utils.isNotEmpty(path)){
   session.save();
   out.write("Copying completed");
}
%></div>