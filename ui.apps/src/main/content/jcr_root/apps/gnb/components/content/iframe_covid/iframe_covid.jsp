<%@include file="/libs/foundation/global.jsp"%>
<%
//retreiving values from dialog    
String attr_id 			= properties.get("attr_id", "");  
String iframe_address 	= properties.get("iframe_address", "");  

//starting using pym.js - http://blog.apps.npr.org/pym.js/
//this component is form parent part.

if ((iframe_address != "") ) { %>
	<iframe id="myIframe" style="width: 1px; min-width: 100%;" src="https://my-symptom.appcatalyst.com/1/app/<%=iframe_address%>" frameborder="0" scrolling="no"></iframe>
	<script type="text/javascript" src="https://my-symptom.appcatalyst.com/1/pub/iframe-embedder.js">
	</script><script>new IFrameEmbedder('#myIframe', null, {checkOrigin: ["https://my-symptom.appcatalyst.com"]})</script>
<%}
else{%>
	<cq:include script="empty.jsp" />
<%}%>
