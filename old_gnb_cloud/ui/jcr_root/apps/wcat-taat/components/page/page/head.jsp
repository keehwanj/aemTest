<%@include file="/apps/wcat-taat/components/global.jsp" %>
<%@page session="false" %>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1.0"/>
   <title><%= xssAPI.encodeForHTML( currentPage.getTitle() == null ? currentPage.getName() : currentPage.getTitle() ) %></title>
    <cq:includeClientLib categories="wcat.bootstrap.all"/>
	<% currentDesign.writeCssIncludes(pageContext); %>


   	<cq:include script="/libs/wcm/core/components/init/init.jsp"/>
    <cq:include script="/libs/foundation/components/page/stats.jsp"/>
    <cq:include script="/libs/cq/cloudserviceconfigs/components/servicelibs/servicelibs.jsp"/>
    <cq:include script="/libs/wcm/core/browsermap/browsermap.jsp" />
    <cq:include script="/libs/wcm/mobile/components/simulator/simulator.jsp"/>
    <!-- Adobe Edge Web Fonts in use by Geo-media -->
    <script src="//use.edgefonts.net/old-standard.js"></script>
    <script src="//use.edgefonts.net/quattrocento-sans.js"></script>



</head>    