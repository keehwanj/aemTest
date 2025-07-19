<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
String tag_manager_body = "tag_manager_body_en.jsp";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    tag_manager_body = "tag_manager_body_fr.jsp";
    }//end of inner if
%>
<body>
	<!--Start of Google Tag Manager-->
	<cq:include script="<%=tag_manager_body%>"/> 
	<!--End of Google Analytics-->   
	<!-- START of TOP --> 
	<div class="container-fluid">
        <cq:include path="gnbstrap-top" resourceType="foundation/components/parsys"/>
    </div>
	<!-- END of TOP -->   
    <!-- START of MIDDLE --> 
    <div class="container">
        <cq:include path="gnbstrap-middle" resourceType="foundation/components/parsys"/>
	</div>    
    <!-- END of MIDDLE -->
    <!-- START of FOOTER --> 
	<div class="container-fluid">
        <cq:include path="gnbstrap-footer" resourceType="foundation/components/parsys"/>
	</div>
	<!-- END of FOOTER -->
<!-- END of container -->  
</body>