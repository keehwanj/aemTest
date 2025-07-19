<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    }//end of inner if
%>

<footer>
	<div id="footer">
		<div class="row" id="footerDisclaimer" >
			<div class="col-sm-8 visible-md-block visible-lg-block" >
        		<cq:include path="footerNav_ipar" resourceType="foundation/components/iparsys"/>   
    		</div>
    		<div class="clearfloat"></div>

    		<div class="col-sm-4">
        		<cq:include path="siteFooter" resourceType="vnbw/components/tools/sitefooter"/>    
    		</div>
    		<div class="clearfloat"></div>
    	</div>
	</div>
</footer>
<!--Start of Google Analytics-->
	<cq:include path="cloudservices" resourceType="cq/cloudserviceconfigs/components/servicecomponents"/>
<!--End of Google Analytics-->    
