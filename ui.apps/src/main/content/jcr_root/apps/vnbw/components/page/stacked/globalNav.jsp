<%@include file="/libs/foundation/global.jsp"%>
 <div id="header" >
	<header class="row">
    	<div class="col-md-6">
			<div id="logoArea">
        		<cq:include path="logo" resourceType="vnbw/components/navigation/logo"/>                
    		</div>
		</div>
    	<div class="col-md-6">
			<div id="topRightNav" class="hidden-xs">
        		<cq:include path="keywordsearch" resourceType="vnbw/components/search/keywordsearch"/>
     		</div>
     		<div id="topCentreNav">

                <cq:include path="globalNav" resourceType="vnbw/components/navigation/globalnav"/>
     		</div>
     		<div id="topText"  class="hidden-sm hidden-xs">
        		<cq:include path="headertext" resourceType="vnbw/components/tools/headertext"/>
     		</div>
     	</div>
	</header>        
 </div>
<div id="heightDivDep"></div><div id="heightDivCat"></div>



