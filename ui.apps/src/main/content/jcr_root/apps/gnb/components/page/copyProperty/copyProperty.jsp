<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%!
private boolean copyProp(Node node, String iProp, String oProp) {
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
            if(content!=null && content.hasProperty(iProp)) {
            	int type = content.getProperty(iProp).getType();
            	if (content.getProperty(iProp).isMultiple()){
                    Value[] values = content.getProperty(iProp).getValues();
            	    content.setProperty(oProp, values, type);               
                }
            	else {
            		Value value = content.getProperty(iProp).getValue();
            		content.setProperty(oProp, value, type);
            	}
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
            while (iter.hasNext() &&successful) {
                Node next = iter.nextNode();
                if (!next.isNodeType("dam:AssetContent")) {
                	successful = copyProp(next, iProp,oProp);
                }
            }
        }
    }
    catch(Exception e) {
        successful= false;
    }
    
    return successful;
}

private boolean setProp(Node node, String oProp, String val) throws Exception{
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
            if (content!=null) {
                if (content.hasProperty(oProp) && content.getProperty(oProp).isMultiple()) {
                	String[] arr = new String[1];
                	arr[0]=val;
                	content.setProperty(oProp,arr);
                }
                else {
                    content.setProperty(oProp,val);
                }
            }
        }       
    }
    catch(Exception e) {
        successful =false; 
        throw e;
    }
    try {
        if (node.hasNodes()) {
            NodeIterator iter = node.getNodes();
            while (iter.hasNext() && successful) {
                Node next = iter.nextNode();
                if (!next.isNodeType("dam:AssetContent")) {
                    successful = setProp(next, oProp,val);
                }
            }
        }
        node.getSession().save();
    }
    catch(Exception e) {
        successful= false;
        throw e;
    }
    
    return successful;
}
%>
<%
boolean successful = false;
Session session = resourceResolver.adaptTo(Session.class);
String path =  new String(Utils.nullReplace(slingRequest.getParameter("path")).getBytes("UTF-8"),"UTF-8");
String iProp =  new String(Utils.nullReplace(slingRequest.getParameter("iProp")).getBytes("UTF-8"),"UTF-8");
String oProp =  new String(Utils.nullReplace(slingRequest.getParameter("oProp")).getBytes("UTF-8"),"UTF-8");
String value =  new String(Utils.nullReplace(slingRequest.getParameter("default")).getBytes("UTF-8"),"UTF-8");
String radio = new String(Utils.nullReplace(slingRequest.getParameter("switch")).getBytes("UTF-8"),"UTF-8");
if (path!=null && !path.equals("") && oProp!=null && !oProp.equals("")) {
	Node node = resourceResolver.getResource(path).adaptTo(Node.class);
	if (radio.equals("prop") && iProp!=null && !iProp.equals("")) {
        successful = copyProp(node, iProp,oProp);
	}
	else {
		try {
		successful = setProp(node,oProp,value);
		}
		catch (Exception e) {
			out.write(e.getMessage());
		}
	}

}

%>
<body onload="toggle()">
<cq:include script="/libs/social/commons/components/formpage/head.jsp"/>
<style>
@import url(<%= resourceResolver.map(request, "/libs/foundation/components/form/tags/tags.css") %>);
h3 {
font-size:medium; 
font-family:Arial;
padding:5px 5px 5px 5px;
}
</style>


<form action="${currentPage.path}.html" method="get" autocomplete="off" onclick="hideResults()" onsubmit="return validate()">
  <input type="hidden" name="_charset_" value="utf-8">

<div class="form_row">
<div class="form_leftcol">
<div class="form_leftcollabel">
<label for="path_wrapper">Add property to this tree</label>
</div>
</div>
    <div class="form_rightcol">
        <div id="path_wrapper" class="pathfield_wrapper" ></div>
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
                var radio = document.getElementsByName("switch");
                var def = document.getElementById("default").value;
                var iProp = document.getElementById("iProp").value;
                var oProp = document.getElementById("oProp").value; 
                var path = newPathField.getValue();
                if (path.length <1) {
                    message= message + "\tTree\n";
                }
                if (radio[0].checked && iProp.length<1) {
                    message = message + "\tExisting Property\n";
                }

                if (oProp.length<1) {
                    message =message +"\tNew Property\n";
                }
                if (path.length<1 || (radio[0].checked && iProp.length<1) || oProp.length<1) {
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
           <label for="path_wrapper">Value for new property</label>
        </div>
    </div>
    
    <div class="form_rightcol">
    <input type="radio" name="switch" value="prop" checked="checked" onchange="toggle()" />Copy from existing property
    <input type="radio" name="switch" value="default" onchange="toggle()" />Use default value
    <script type="text/javascript">
        function toggle() {
            var radio = document.getElementsByName("switch");
            var def = document.getElementById("default");
            var iProp = document.getElementById("iProp");
            var oProp = document.getElementById("oProp");
            if (radio[0].checked) {
                def.value="";
                def.disabled =true;
                iProp.disabled =false;
                def.style.background="#DFDFDF";
                def.style.border = "0px solid #A1A1A1";
                iProp.style.background = oProp.style.background;
                iProp.style.border =oProp.style.border;

            }
            if (radio[1].checked) {
                iProp.value ="";
                iProp.disabled =true;
                def.disabled =false;
                iProp.style.background="#DFDFDF";
                iProp.style.border = "0px solid #A1A1A1";
                def.style.background = oProp.style.background;
                def.style.border =oProp.style.border;
            }
            
        }
    </script>
    </div>

</div>
<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
           <label for="path_wrapper">Existing Property to copy</label>
        </div>
    </div>
    <div class="form_rightcol">
        <input type="text" id="iProp" name="iProp"></input>
    </div>
</div>

<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
           <label for="path_wrapper">Default value</label>
        </div>
    </div>
    <div class="form_rightcol">
        <input type="text" id="default" name="default" disabled="true"></input>
    </div>
</div>

<div class="form_row">
    <div class="form_leftcol">
        <div class="form_leftcollabel">
           <label for="path_wrapper">New Property</label>
        </div>
    </div>
    <div class="form_rightcol">
        <input type="text" id="oProp" name="oProp"></input>
    </div>
</div>

<div class="form_row">
<div class="form_rightcol">
<input type="submit" value="Create new property"></input>
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
%></div></body>