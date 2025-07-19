<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    }//end of inner if
%>

<% /*Hiding footer  
boolean hideTitle = properties.get("hideTitle",false);
if(!hideTitle) {
*/
%>
<cq:includeClientLib css="ag.components.stacked"/>
<cq:includeClientLib js="ag.components.stacked"/>
	<cq:includeClientLib css="ag.components.page"/>
	<cq:includeClientLib js="ag.components.page"/>
	<cq:includeClientLib css="ag.components.all"/>
	<cq:includeClientLib js="ag.components.all"/>
 <div id="footer">
     <div id="footerToolbar">
        <cq:include path="footerToolbar" resourceType="agnb-vgnb/components/tools/footertools"/>    
    </div>

    <div id="footerNav">
        <cq:include path="footerNav_ipar" resourceType="foundation/components/iparsys"/>    
    </div>
    <div class="clearfloat"></div>

    <div id="footerDisclaimer">
        <cq:include path="siteFooter" resourceType="agnb-vgnb/components/tools/sitefooter"/>    
    </div>
<%
/*}*/
%>
    <div class="clearfloat"></div>
</div>

<!--Start of Google Analytics-->


	<cq:include path="cloudservices" resourceType="cq/cloudserviceconfigs/components/servicecomponents"/>

<!--End of Google Analytics-->     