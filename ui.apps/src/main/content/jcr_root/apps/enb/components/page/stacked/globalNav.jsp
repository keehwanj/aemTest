<%@include file="/libs/foundation/global.jsp"%>
 <div id="header" >
	<header class="row">
    	<div class="col-sm-3 col-md-4">
			<div id="logoArea">
        		<cq:include path="logo" resourceType="enb/components/navigation/logo"/>                
    		</div>
		</div>
    	<div class="col-sm-9 col-md-8">
			<div id="topRightNav" class="visible-lg">
        		<cq:include path="keywordsearch" resourceType="enb/components/search/keywordsearch"/>
     		</div>
     		<div id="topCentreNav">
                <cq:include path="globalNav" resourceType="enb/components/navigation/globalnav"/>
     		</div>
     	</div>
	</header>  
 </div>
<div id="heightDivDep"  class="hidden-xs hidden-sm hidden-md"></div>
<div id="heightDivCat"  class="hidden-xs hidden-sm hidden-md"></div>