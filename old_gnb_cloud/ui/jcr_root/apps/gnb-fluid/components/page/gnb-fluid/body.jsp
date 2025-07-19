<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    }//end of inner if
%>

<body>
	<!--Start of Google Tag Manager-->
	<cq:include script="tag_manager_body.jsp"/> 
	<!--End of Google Analytics-->   
	<!-- START of container -->    
	<div id="container" class="container-fluid">
        <!-- START of header --> 
    	<cq:include path="header" resourceType="gnb-fluid/components/navigation/header_new"/>   
		<!-- END of header --> 
        <!-- START of article --> 
  		<article>
			<cq:include path="par" resourceType="foundation/components/parsys"/>
  		</article>      

		<!-- END of article --> 

        <!-- START of footer --> 
		<cq:include path="footer" resourceType="gnb-fluid/components/navigation/footer"/>   
		<!-- END of footer --> 
	</div>
	<!--END of container-->  
<!-- END of container -->  
</body>