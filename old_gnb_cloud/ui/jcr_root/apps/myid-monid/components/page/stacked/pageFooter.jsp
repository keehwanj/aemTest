<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
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
		<div class="row">        
    		<div id="footerToolbar" class="col-sm-12 hidden-xs hidden-sm hidden-md">
        		<cq:include path="footerToolbar" resourceType="myid-monid/components/tools/footertools"/>    
    		</div>
		</div>

		<div class="row">        
    		<div id="footerNav" class="col-sm-12 hidden-xs hidden-sm hidden-md">
        		<cq:include path="footerNav_ipar" resourceType="foundation/components/iparsys"/>    
    		</div>
		</div>


		<div class="row">        
    		<div id="footerDisclaimer" class="col-sm-12">
        		<cq:include path="siteFooter" resourceType="myid-monid/components/tools/sitefooter"/>    
    		</div>
		</div>
    	<div class="clearfloat"></div>
	</div>
</footer>

