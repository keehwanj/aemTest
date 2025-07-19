<%@include file="/libs/foundation/global.jsp"%>

<footer>
	<div id="footer">


		<div class="row">        
    		<div id="footerNav" class="col-sm-12 hidden-xs hidden-sm hidden-md">
        		<cq:include path="footerNav_ipar" resourceType="foundation/components/iparsys"/>    
    		</div>
		</div>


		<div class="row">        
    		<div id="footerDisclaimer" class="col-sm-12">
        		<cq:include path="siteFooter" resourceType="enb/components/tools/sitefooter"/>    
    		</div>
		</div>
    	<div class="clearfloat"></div>
	</div>
</footer>


<!--Start of Google Analytics-->
	<cq:include path="cloudservices" resourceType="cq/cloudserviceconfigs/components/servicecomponents"/>
<!--End of Google Analytics-->   