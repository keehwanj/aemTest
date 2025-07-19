<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.commons.jcr.JcrUtil"%>
<%@page import="org.apache.sling.api.resource.ResourceResolver"%>
<%@page import="java.util.ArrayList"%>
<%
String newFolder = new String(Utils.nullReplace(slingRequest.getParameter("newFolder")).getBytes("UTF-8"),"UTF-8");
String oldFolder = new String(Utils.nullReplace(slingRequest.getParameter("oldFolder")).getBytes("UTF-8"),"UTF-8");
String subfolder = new String(Utils.nullReplace(slingRequest.getParameter("subfolders")).getBytes("UTF-8"),"UTF-8");
if (oldFolder!=null && !oldFolder.isEmpty() && newFolder!=null && !newFolder.isEmpty() && subfolder!=null && !subfolder.isEmpty()) {
    Resource data = resourceResolver.getResource(oldFolder);
    Resource dest = resourceResolver.getResource(newFolder);
    Node dataNode = data.adaptTo(Node.class);
    Node destNode = dest.adaptTo(Node.class);
    Session session = resourceResolver.adaptTo(Session.class);
    Workspace workspace = session.getWorkspace();
    NodeIterator iter = dataNode.getNodes();
    try {
        int filesPerFolder = Integer.parseInt(subfolder);
        int counter = 0;
        ArrayList<Node> subNodes = new ArrayList<Node>();
        if (iter!=null && filesPerFolder>0 && filesPerFolder<iter.getSize()) {
        	for (int i=0; i<iter.getSize(); i=i+filesPerFolder) {
                counter++;
        		subNodes.add(destNode.addNode("sub"+counter));
        	}
        	destNode.setProperty("originalPath", dataNode.getPath());
        	destNode.setProperty("originalType",dataNode.getPrimaryNodeType().getName());
        	session.save();
        	counter = 0;
            while(iter.hasNext()) {

                for (int i=0; i<filesPerFolder && iter.hasNext(); i++) {
                    Node child = iter.nextNode();
                        workspace.copy(child.getPath(), subNodes.get(counter).getPath()+"/"+child.getName());
                }
                counter++;
                session.save();
           }
            session.save();
        }
    }
    catch (Exception e) {
        out.write("<p>Error: "+e.getMessage()+"</p>");
    }
}
%>

<cq:include script="/libs/social/commons/components/formpage/head.jsp"/>
<form action="${currentPage.path}.html" method="get" onsubmit="return validate()">
  <input type="hidden" name="_charset_" value="utf-8">
<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="old_path_wrapper">Folder to split</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="old_path_wrapper" class="pathfield_wrapper"></div>
        
        <script type="text/javascript">
        var oldPathField;
        var newPathField;
            CQ.Ext.onLoad(function() {
               
            	oldPathField = new CQ.form.PathField({
                    "name": "oldFolder",
                    "renderTo": "old_path_wrapper",
                    "hideLabel": false,
                    "hideTrigger": false                  
                });
                oldPathField.setWidth(400);

                newPathField = new CQ.form.PathField({
                    "name": "newFolder",
                    "renderTo": "new_path_wrapper",
                    "hideLabel": false,
                    "hideTrigger": false                  
                });
                newPathField.setWidth(400);
                 
            });
            function validate() {
                var message = "Please fill in the following fields:\n";
                var oldFolder = oldPathField.getValue();
                if (oldFolder.length <1) {
                    message= message + "\tFolder to Split\n";
                }

                var newFolder = newPathField.getValue();
                if (newFolder.length <1) {
                    message= message + "\tWhere Subfolders go\n";
                }
                
                var subfolders = document.getElementById('subfolders').value;
                if (subfolders.length<1) {
                    message = message + "\t# Files per subfolder\n";
                }

                if (oldFolder.length<1 || newFolder.length<1 || subfolders.length<1) {
                    alert(message);
                    return false;
                }
                else if (isNaN(subfolders)) {
                    alert("# Files per subfolder");
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
<label for="path_wrapper">Where Subfolders go</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="new_path_wrapper" class="pathfield_wrapper"></div>
    </div>
</div> 
<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
            <label for="subfolders"># Files per subfolder</label>
        </div>
        <div class="form_leftcolmark">&nbsp;</div>
    </div>
    <div class="form_rightcol">
    <input type="text" id="subfolders" name="subfolders"></input>
    </div>
</div>
<div class="form_row">
<div class="form_rightcol">
<input type="submit" value="Split Folder"></input>
</div>
</div>
</form>
