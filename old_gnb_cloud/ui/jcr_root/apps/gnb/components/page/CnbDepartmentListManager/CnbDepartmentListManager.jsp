<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="javax.jcr.Node"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Calendar"%>
<%@page import="com.day.cq.commons.jcr.JcrUtil"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.day.cq.wcm.foundation.forms.FormsHelper"%>
<%@page import="com.day.cq.wcm.foundation.forms.FormsConstants"%>
<%@page import="com.day.cq.wcm.foundation.forms.LayoutHelper"%>
<%@page import="com.day.cq.wcm.foundation.forms.ValidationInfo"%>
<%@page import="org.apache.sling.api.resource.ResourceResolver"%>
<%@page import="com.day.cq.widget.HtmlLibraryManager" %>
<%@page import="java.util.Collections"%>
<%@page import="java.util.Comparator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.Normalizer"%>


<%! 
// puts the array list of nodes in alphabetical order
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
     try {  
    Resource r = rr.getResource(path);
    test="2";
    Node n =r.adaptTo(Node.class);
    test="3";
    ArrayList<Node> tags = new ArrayList<Node>();
    test="4";

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
%>

<% 
/**
String deptDataPage = Utils.getConfigurationProperty("cnbDepartmentMetadata",pageManager);
out.write("deptDataPage :"+deptDataPage+"<br/>");
String activeTags = deptDataPage+"/active";
out.write("deptDataPage/active :"+deptDataPage+"/active"+"<br/>");
String inactiveTags = deptDataPage+"/inactive";
out.write("deptDataPage/inactive :"+deptDataPage+"/inactive"+"<br/>");
**/


String deptDataPage = "/etc/tags";
//out.write("deptDataPage :"+deptDataPage+"<br/>");
String activeTags = deptDataPage;
//out.write("activeTags :"+activeTags+"<br/>");
String inactiveTags = deptDataPage;
//out.write("inactiveTags :"+inactiveTags+"<br/>");


ResourceResolver rr = slingRequest.getResourceResolver(); 
Session session = rr.adaptTo(Session.class);
Workspace workspace = session.getWorkspace();
TagManager tm = rr.adaptTo(TagManager.class);
String[] tags = slingRequest.getParameterValues("tagField");

//
if (tags !=null) {
    for (int i=0; i<tags.length; i++) {
		out.write(tags[i]);
    }
}
//

String[] namespaces = properties.get("namespaces", String[].class);
    String namespacesConfig = "";
    if (namespaces != null) {
        for (int i = 0; i < namespaces.length; i++) {
            namespacesConfig += "\"" + namespaces[i] + "\"" +
                    (i == namespaces.length - 1 ? "" : ",");
        }
    }

//out.write("namespaces :"+namespacesConfig+"<br/>");

String[] namespaces1 = properties.get("namespaces1", String[].class);
    String namespacesConfig1 = "";
    if (namespaces1 != null) {
        for (int i = 0; i < namespaces1.length; i++) {
            namespacesConfig1 += "\"" + namespaces1[i] + "\"" +
                    (i == namespaces1.length - 1 ? "" : ",");
        }
    }

//out.write("namespaces1 :"+namespacesConfig1+"<br/>");

//Making Metadata Inactive
if (tags !=null) {
    for (int i=0; i<tags.length; i++) {
        String tag = (String)tags[i].replace("+","");
        tag = tag.replace(":","/");
        //out.write("tag :"+tag+"<br/>");
        String activePath = activeTags+"/"+tag;
        //out.write("activePath :"+activePath+"<br/>");
        String inactivePath = inactiveTags+"/"+tag.replace("active","inactive"); 
        //out.write("inactivePath :"+inactivePath+"<br/>");
        String inactiveFolder = inactivePath.substring(0, inactivePath.lastIndexOf("/"));
        //out.write("inactiveFolder :"+inactiveFolder+"<br/>");        

        if (tm.resolve(activePath)!=null && tm.resolve(inactivePath)==null ){
            JcrUtil.createPath(inactiveFolder,"cq:Tag",session);
            session.save();
            Resource r = rr.getResource(activePath);
            pageManager.move(r,inactivePath, null,false,true,null);
            reorderTags(rr,inactiveFolder);
            session.save();

        }
        else {
            log.error("Could not move " +tags[i] +" to inactive folder, it has possibly already been moved");
        }
    }
    
}






//done
String newPath  = new String(Utils.nullReplace(slingRequest.getParameter("newTagPath")).getBytes("UTF-8"),"UTF-8");
String newName  = new String(Utils.nullReplace(slingRequest.getParameter("newTagName")).getBytes("UTF-8"),"UTF-8");
String newTitle = new String(Utils.nullReplace(slingRequest.getParameter("newTagTitle")).getBytes("UTF-8"),"UTF-8");
if (newPath!=null && !newPath.isEmpty() && newName!=null && !newName.isEmpty() && newTitle!=null && !newTitle.isEmpty()) {

    if (newPath.contains(activeTags)) {
        if (tm.canCreateTag(newPath+"/"+newName)) {
           //case for a new tag that can be created in both the active and inactive folders
           if (tm.canCreateTag(newPath.replace("active","inactive")+"/"+newName)) {
              tm.createTag(newPath+"/"+newName, newTitle,"");
              reorderTags(rr,newPath);
              session.save();
           }
           //case where the new tag shares it's path and name with an inactive tag and 
           else {
               Tag tag = tm.resolve(newPath.replace("active","inactive")+"/"+newName);
               //if user is trying to create a tag that exactly matches an inactive tag, reactivate the tag
               if (tag != null && tag.getTitle().equals(newTitle)) {
                   %><script type="text/javascript">
                   alert("This piece of metadata already exists in the inactive folder.  Either reactivate the metadata or choose a new name.");
                   </script><%
                  
               }
               else {
                  %><script type="text/javascript">
                     alert("Metadata already exists with this name in the inactive directory.  Please use a different name.");
                  </script><%
               }
           }
        }
        //case where a tag with that path and that name already exist in the active folder
        else {
            %><script type="text/javascript">
            alert("Metadata already exists with this name.  Please use a different name.");
            </script><%
            log.error("Could not create metadata at: "+newPath+"/"+newName);
        }
    }
    else {
        %><script type="text/javascript">
        alert("Metadata must be put in " + "<%=activeTags%>");
        </script><%
        log.error("New metadta must go in "+activeTags);
    }
}





//done
String editPath = slingRequest.getParameter("editTagPath");
String editTitle = slingRequest.getParameter("editTagTitle");

if (editPath!=null && !editPath.isEmpty() && editTitle!=null && !editTitle.isEmpty()) {
    
    if (tm.resolve(editPath)!= null  && editPath.contains(activeTags) ) {

        Node tag = JcrUtil.createPath(editPath, "cq:Tag",session);
        tag.setProperty("jcr:title", editTitle);
        reorderTags(rr,editPath.substring(0,editPath.lastIndexOf('/')));
        session.save();
        log.error(editTitle);
    }
    else {
        %><script type="text/javascript">
        alert("Failed to change metadata.  Please make sure both fields are filled in properly.");
       </script><%
        log.error("Failed to change metadata title");
    }
    
}


String inactivePath = slingRequest.getParameter("inactivePathField");
//out.write("inactivePath : "+inactivePath+"<br/>");





//done
if (inactivePath!=null && !inactivePath.isEmpty()) {
    Resource oldResource = rr.getResource(inactivePath);
	Resource newResource =null;
	if (inactivePath.contains("inactive")) {
        out.write("inactivePath : "+inactivePath+"<br/>");
    	newResource = pageManager.move(oldResource,inactivePath.replace("inactive","active"),null, false, true,null);
    }

	else{
        out.write("inactivePath : "+inactivePath+"<br/>");
    	newResource = pageManager.move(oldResource,inactivePath.replace("active","inactive"),null, false, true,null);
    }

    String newParent = newResource.adaptTo(Node.class).getParent().getPath();
    //String newParent = newResource.adaptTo(Node.class).getPath();
    out.write("newParent : "+newParent+"<br/>");

    reorderTags(rr,newParent);
    session.save();
}


final String name = properties.get(FormsConstants.ELEMENT_PROPERTY_NAME, "./cq:tags");
String[] values = FormsHelper.getValues(slingRequest, name, null);
if (values == null) {
    values = new String[]{};
}

%>

<cq:include script="/apps/gnb/init/init.jsp"/>
<cq:include script="/libs/collab/commons/components/formpage/head.jsp"/>
<style>
@import url(<%= rr.map(request, "/libs/foundation/components/form/tags/tags.css") %>);
h3 {
font-size:medium; 
font-family:Arial;
padding:5px 5px 5px 5px;
}


</style>
<h3>Making Metadata Inactive</h3>
<form action="${currentPage.path}.html" method="get" onsubmit="return makeInactive()">
  <input type="hidden" name="_charset_" value="utf-8">
<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="tags_wrapper">Metadata to make inactive</label>
</div>

</div>

        <div id="tags_wrapper" class="form_rightcol"> </div>
        
        <script type="text/javascript">
        var tagField;
            CQ.Ext.onLoad(function() {
    
                 tagField = new CQ.tagging.TagInputField({
                    "name": "tagField",
                    "renderTo": "tags_wrapper",
                    "hideLabel": false,
                    "width": "500",
                    "namespaces": [<%= namespacesConfig %>],
                    "tagsBasePath": "<%=activeTags%>"
                });

                tagField.setValue([
                    <% for (int i = 0; i < values.length; i++) {%>
                        "<%= values[i] %>"<%= i != values.length - 1 ? "," : "" %>
                    <% } %>
                ]);
            });
            function makeInactive() {
                var array = tagField.getValue();
                if (array.length <1) {
                    alert("Please select metadata to make inactive");
                    return false;
                }
                else {
                    return true;
                }                
            }

        </script>

</div>
<div class="form_row">
<div class="form_rightcol">
<input type="submit" value="Make metadata inactive"></input>
</div>
</div>
</form>
<br/><br/>







<br/>
<br/>
<h3>Adding New Metadata</h3>
    <style>
        /* ie7 fix */
        .ext-ie .pathfield_wrapper {
            margin-left: -104px;
        }
    </style>
<form action="${currentPage.path}.html" method="get" onsubmit="return makeNewTag()">
  <input type="hidden" name="_charset_" value="utf-8">
<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="path_wrapper">Metadata's folder</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="new_path_wrapper" class="pathfield_wrapper"></div>
        
        <script type="text/javascript">
        var newPathField;
            CQ.Ext.onLoad(function() {
               
                newPathField = new CQ.form.PathField({
                    "name": "newTagPath",
                    "renderTo": "new_path_wrapper",
                    "hideLabel": false,
                    "hideTrigger": false,
                    "rootPath": "<%=activeTags%>"                   
                });
                newPathField.setWidth(500);
                
            });
            function makeNewTag() {
                var message = "Please fill in the following fields:\n";
                var path = newPathField.getValue();
                if (path.length <1) {
                    message= message + "\tFolder\n";
                }
                var name = document.getElementById('newTagName').value;
                if (name.length<1) {
                    message = message + "\tName\n";
                }

                var title = document.getElementById('newTagTitle').value;
                if (title.length<1) {
                    message = message + "\tTitle\n";
                }
                if (name.length<1 || path.length<1 || title.length<1) {
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
            <label for="newTagName">Name</label>
        </div>
    </div>
    <div class="form_rightcol">
    <input type="text" id="newTagName" name="newTagName"></input>
    </div>
</div>

<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
            <label for="newTagTitle">Title</label>
        </div>
        <div class="form_leftcolmark">&nbsp;</div>
    </div>
    <div class="form_rightcol">
    <input type="text" id="newTagTitle" name="newTagTitle"></input>
    </div>
</div>
<div class="form_row">
<div class="form_rightcol">
<input type="submit" value="Add new metadata"></input>
</div>
</div>
</form>
<br/><br/>










<h3>Edit Metadata</h3>
    <style>
        /* ie7 fix */
        .ext-ie .pathfield_wrapper {
            margin-left: -104px;
        }
    </style>

<form action="${currentPage.path}.html" method="get" onsubmit="return editTag()">
  <input type="hidden" name="_charset_" value="utf-8">
<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="path_wrapper">Metadata to edit</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="edit_path_wrapper" class="pathfield_wrapper"></div>
        
        <script type="text/javascript">
        var editPathField;
            CQ.Ext.onLoad(function() {
    
                editPathField = new CQ.form.PathField({
                    "name": "editTagPath",
                    "renderTo": "edit_path_wrapper",
                    "hideLabel": false,
                    "hideTrigger": false,
                    "rootPath": "<%=activeTags%>"                   
                });
                editPathField.setWidth(500);
            });
            function editTag() {
                var message = "Please fill in the following fields:\n";
                var path = editPathField.getValue();
                if (path.length <1) {
                    message= message + "\tMetadata to edit\n";
                }
                
                var title = document.getElementById('editTagTitle').value;
                if (title.length<1) {
                    message = message + "\tTitle\n";
                }
                if (path.length<1 || title.length<1) {
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
            <label for="editTagTitle">Title</label>
        </div>
    </div>
    <div class="form_rightcol">
    <input type="text" id="editTagTitle" name="editTagTitle"></input>
    </div>
</div>
<div class="form_row">
<div class="form_rightcol">
<input type="submit" value="Make change"></input>
</div>
</div>
</form>

<br/>
<br/>
<h3>Review Inactive Metadata</h3>
    <style>
        /* ie7 fix */
        .ext-ie .pathfield_wrapper {
            margin-left: -104px;
        }
    </style>


<form action="${currentPage.path}.html" method="get" onsubmit="return reactivate()">
  <input type="hidden" name="_charset_" value="utf-8">
<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="path_wrapper">Inactive metadata</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="inactive_path_wrapper" class="pathfield_wrapper"></div>

        <script type="text/javascript">
        var inactivePathField;
            CQ.Ext.onLoad(function() {

                inactivePathField = new CQ.form.PathField({
                    "name": "inactivePathField",
                    "renderTo": "inactive_path_wrapper",
                    "rootPath": "<%=inactiveTags%>"
                });
                inactivePathField.setWidth(500);
            });

            function reactivate() {
                var message = "Please fill in the following fields:\n";             
                var path = inactivePathField.getValue();
                if (path.length <1) {
                    message= message + "\tInactive Metadata\n";
                }                  
                if (path.length<1) {
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
<input type="submit" value="Reactivate"></input>
</div>
</div>
</form>  
<br/><br/>
