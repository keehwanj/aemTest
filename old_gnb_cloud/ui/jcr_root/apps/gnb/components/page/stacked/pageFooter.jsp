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
    		<div id="footerDisclaimer" class="col-sm-12">
        		<cq:include path="siteFooter" resourceType="gnb/components/tools/sitefooter"/>    
    		</div>
		</div>
    	<div class="clearfloat"></div>
	</div>
</footer>

