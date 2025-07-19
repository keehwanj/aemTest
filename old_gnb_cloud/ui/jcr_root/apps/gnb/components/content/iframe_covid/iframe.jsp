<%@include file="/libs/foundation/global.jsp"%>
<%
//retreiving values from dialog    
String attr_id 			= properties.get("attr_id", "");  
String iframe_address 	= properties.get("iframe_address", "");  

//starting using pym.js - http://blog.apps.npr.org/pym.js/
//this component is form parent part.

if ((attr_id != "") && (iframe_address != "") ) { %>
<div id="<%=attr_id%>"></div>
<script>
    var jobs_table_parent = new pym.Parent('<%=attr_id%>', '<%=iframe_address%>', {});
</script>
<%}
else{%>
	<cq:include script="empty.jsp" />
<%}%>
