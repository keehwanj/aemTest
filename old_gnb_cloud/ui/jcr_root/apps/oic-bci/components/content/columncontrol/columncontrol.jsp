<jsp:directive.include file="/libs/foundation/global.jsp"/>
<jsp:directive.page session="false" />
<jsp:scriptlet>
	pageContext.setAttribute("coltype", xssAPI.filterHTML(properties.get("coltype","")));
</jsp:scriptlet>

<c:if test="${empty coltype}">
	This is column control component
</c:if>

<c:if test="${not empty coltype}">
<c:set var = "column" value = "${properties.coltype}" />
<c:set var = "color" value = "${properties.color}" />
<div class="row">
	<c:choose>
		<c:when test="${coltype eq '8-4-col'}">
		  	<div class="col-sm-8 first ${color}" ><cq:include path="col-8-4-1" resourceType="/libs/foundation/components/parsys" /></div>
		  	<div class="col-sm-4 last"><cq:include path="col-8-4-2" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '4-8-col'}">
	  		<div class="col-sm-4 first ${color}"><cq:include path="col-4-8-1" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-8 last"><cq:include path="col-4-8-2" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '4-4-4-col'}">
		  	<div class="col-sm-4 first ${color}"><cq:include path="col-4-4-4-1" resourceType="/libs/foundation/components/parsys" /></div>
		  	<div class="col-sm-4 ${color}"><cq:include path="col-4-4-4-2" resourceType="/libs/foundation/components/parsys" /></div>
		  	<div class="col-sm-4 last"><cq:include path="col-4-4-4-3" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '6-6-col'}">
		  	<div class="col-sm-6 first ${color}"><cq:include path="col-6-6-1" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-6 last"><cq:include path="col-6-6-2" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '5-7-col'}">
	  		<div class="col-sm-5 first ${color}"><cq:include path="col-5-7-1" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-7 last"><cq:include path="col-5-7-2" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '7-5-col'}">
	  		<div class="col-sm-7 first ${color}"><cq:include path="col-7-5-1" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-5 last"><cq:include path="col-7-5-2" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>

		<c:when test="${coltype eq '3-3-3-3-col'}">
		  	<div class="col-sm-3 first ${color}"><cq:include path="col-3-3-3-3-1" resourceType="/libs/foundation/components/parsys" /></div>
		  	<div class="col-sm-3  ${color}"><cq:include path="col-3-3-3-3-2" resourceType="/libs/foundation/components/parsys" /></div>
		  	<div class="col-sm-3  ${color}"><cq:include path="col-3-3-3-3-3" resourceType="/libs/foundation/components/parsys" /></div>
		 	<div class="col-sm-3 last"><cq:include path="col-3-3-3-3-4" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '2-2-2-2-2-2-col'}">
			<div class="col-xs-6 col-sm-4 col-md-2 first ${color}"><cq:include path="col-2-2-2-2-2-2-1" resourceType="/libs/foundation/components/parsys" /></div>
			<div class="col-xs-6 col-sm-4 col-md-2 ${color}"><cq:include path="col-2-2-2-2-2-2-2" resourceType="/libs/foundation/components/parsys" /></div>
			<div class="col-xs-6 col-sm-4 col-md-2 ${color}"><cq:include path="col-2-2-2-2-2-2-3" resourceType="/libs/foundation/components/parsys" /></div>
			<div class="col-xs-6 col-sm-4 col-md-2 ${color}"><cq:include path="col-2-2-2-2-2-2-4" resourceType="/libs/foundation/components/parsys" /></div>
			<div class="col-xs-6 col-sm-4 col-md-2 ${color}"><cq:include path="col-2-2-2-2-2-2-5" resourceType="/libs/foundation/components/parsys" /></div>
			<div class="col-xs-6 col-sm-4 col-md-2 last"><cq:include path="col-2-2-2-2-2-2-6" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '3-9-col'}">
			<div class="col-sm-3 first ${color}"><cq:include path="col-3-9-1" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-9 last"><cq:include path="col-3-9-2" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '9-3-col'}">
			<div class="col-sm-9 first ${color}"><cq:include path="col-9-3-1" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-3 last"><cq:include path="col-9-3-2" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '3-3-6-col'}">
			<div class=" col-sm-3 first ${color}"><cq:include path="col-3-3-6-1" resourceType="/libs/foundation/components/parsys" /></div>
		  	<div class=" col-sm-3 ${color}"><cq:include path="col-3-3-6-2" resourceType="/libs/foundation/components/parsys" /></div>
		  	<div class="col-sm-6 last"><cq:include path="col-3-3-6-3" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '6-3-3-col'}">
			<div class="col-sm-6 first ${color}"><cq:include path="col-6-3-3-1" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-3  ${color}"><cq:include path="col-6-3-3-2" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-3 last"><cq:include path="col-6-3-3-3" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
		<c:when test="${coltype eq '3-6-3-col'}">
			<div class="col-sm-3 first ${color}"><cq:include path="col-3-6-3-1" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-6 ${color}"><cq:include path="col-3-6-3-2" resourceType="/libs/foundation/components/parsys" /></div>
	  		<div class="col-sm-3 last"><cq:include path="col-3-6-3-3" resourceType="/libs/foundation/components/parsys" /></div>
		</c:when>
	</c:choose>
</div>
</c:if>