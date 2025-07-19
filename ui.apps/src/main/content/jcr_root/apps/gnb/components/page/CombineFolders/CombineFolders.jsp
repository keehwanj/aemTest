<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.commons.jcr.JcrUtil"%>
<%@page import="org.apache.sling.api.resource.ResourceResolver"%>
<%@page import="java.util.ArrayList"%>
<%
//String newFolder = new String(Utils.nullReplace(slingRequest.getParameter("newFolder")).getBytes("UTF-8"),"UTF-8");
String oldFolder = new String(Utils.nullReplace(slingRequest.getParameter("oldFolder")).getBytes("UTF-8"),"UTF-8");
if (oldFolder!=null && !oldFolder.isEmpty()) {
    Session session = resourceResolver.adaptTo(Session.class);
    Resource data = resourceResolver.getResource(oldFolder);
    Node dataNode = data.adaptTo(Node.class);
    String path = dataNode.getProperty("originalPath").getString();
    String type = dataNode.getProperty("originalType").getString();
    Node destNode = JcrUtil.createPath(path, type, session);
    session.save();
    Workspace workspace = session.getWorkspace();
    NodeIterator parentIter = dataNode.getNodes();
    try {
        while(parentIter.hasNext()) {
            Node sub = parentIter.nextNode();
            NodeIterator subIter = sub.getNodes();
            while (subIter.hasNext()) {
                Node child = subIter.nextNode();
                if (destNode.hasNode(child.getName())) {
                    session.removeItem(destNode.getPath()+"/"+child.getName());
                    session.save();
                }
                workspace.copy(child.getPath(), destNode.getPath()+"/"+child.getName());
            }
            session.save();
        }
        session.save();
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
<label for="old_path_wrapper">Folder to combine</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="old_path_wrapper" class="pathfield_wrapper"></div>
        
        <script type="text/javascript">
        var oldPathField;
            CQ.Ext.onLoad(function() {
               
                oldPathField = new CQ.form.PathField({
                    "name": "oldFolder",
                    "renderTo": "old_path_wrapper",
                    "hideLabel": false,
                    "hideTrigger": false                  
                });
                oldPathField.setWidth(400);
                 
            });
            function validate() {
                var message = "Please fill in the following fields:\n";
                var oldFolder = oldPathField.getValue();
                if (oldFolder.length <1) {
                    message= message + "\tFolder to Split\n";
                }     

                if (oldFolder.length<1) {
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
<div class="form_rightcol">
<input type="submit" value="Combine"></input>
</div>
</div>
</form>