<%@include file="/libs/foundation/global.jsp"%>

<div id="mainNav">
        <cq:include path="mainNav_ipar" resourceType="foundation/components/iparsys"/>
</div>
<div class="clearfloat"></div>
<% if(!properties.get("hideBreadcrumbs",false)) {%>
	<div id="breadcrumbNav">
    	<cq:include path="breadcrumbs" resourceType="oic-bci/components/navigation/breadcrumbs"/>
	</div>
<%} else { %>
<br />
<%} %>
<span class="printHeader"><%=xssAPI.encodeForHTML(properties.get("gnbPublisher","New Brunswick Courts").replace(", Canada","")) %></span>
