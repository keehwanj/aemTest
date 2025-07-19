<%@include file="/libs/foundation/global.jsp"%>

<div id="mainNav">
        <cq:include path="nbfpc_mainNav_ipar" resourceType="foundation/components/iparsys"/>
</div>
<div class="clearfloat"></div>
<% if(!properties.get("hideBreadcrumbs",false)) {%>
	<div id="breadcrumbNav">
    	<cq:include path="nbfpc_breadcrumbs" resourceType="nbfpc/components/navigation/breadcrumbs"/>
	</div>
<%} else { %>
<!--<br />-->
<%} %>
<span class="printHeader"><%=properties.get("gnbPublisher","NB Police Commission").replace(", Canada","") %></span>
