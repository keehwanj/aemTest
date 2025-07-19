<%@include file="/libs/foundation/global.jsp"%>
 <div id="header" >
	<header class="row">
    	<div class="col-sm-3 col-md-2" style="padding-right: 5px;">
			<div id="logoArea">
        		<cq:include path="logo" resourceType="wcat-taat/components/navigation/logo"/>                
    		</div>
		</div>
    	<div class="col-sm-9 col-md-10" style="padding-left: 5px;">
			<div id="topRightNav" class="visible-lg">
        		<cq:include path="keywordsearch" resourceType="wcat-taat/components/search/keywordsearch"/>
     		</div>
     		<div id="topCentreNav">
                <cq:include path="globalNav" resourceType="wcat-taat/components/navigation/globalnav"/>
     		</div>
     	</div>
		<!--START of WCAT-->     
     	<div id="topText" class="hidden-xs hidden-sm">
        	<cq:include path="headertext" resourceType="wcat-taat/components/tools/deptname"/>
     	</div>
		<!--END of WCAT-->               
	</header>  
 </div>
<div id="heightDivDep"  class="hidden-xs hidden-sm hidden-md"></div>
<div id="heightDivCat"  class="hidden-xs hidden-sm hidden-md"></div>