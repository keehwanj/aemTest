<%@include file="/libs/foundation/global.jsp"%>

<div id="mainNav">
        <cq:include path="mainNav_ipar" resourceType="foundation/components/iparsys"/>
</div>
<div class="clearfloat"></div>
<% if(!properties.get("hideBreadcrumbs",false)) {%>
	<div id="breadcrumbNav">
    	<cq:include path="breadcrumbs" resourceType="enb/components/navigation/breadcrumbs"/>
	</div>
<%} else { %>
<br />
<%} %>
<span class="printHeader"><%=properties.get("gnbPublisher","Elections, New Brunswick").replace(", Canada","") %></span>
