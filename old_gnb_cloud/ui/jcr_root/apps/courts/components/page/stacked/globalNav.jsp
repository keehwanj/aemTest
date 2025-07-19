<%@include file="/libs/foundation/global.jsp"%>
 <div id="header" >
	<header class="row">
    	<div class="col-xs-6  col-sm-7 col-md-7">
			<div id="logoArea">
        		<cq:include path="logo" resourceType="courts/components/navigation/logo"/>                
    		</div>
		</div>

    	<div class="col-xs-6 col-sm-5 col-md-5">
            <div class="top_space"></div>
			<div id="topRightNav" class="visible-lg">
        		<cq:include path="keywordsearch" resourceType="courts/components/search/keywordsearch"/>
     		</div>
     		<div id="topCentreNav">
                <cq:include path="globalNav" resourceType="courts/components/navigation/globalnav"/>
     		</div>
     	</div>
	</header>  
 </div>
<div id="heightDivDep"  class="hidden-xs hidden-sm hidden-md"></div>
<div id="heightDivCat"  class="hidden-xs hidden-sm hidden-md"></div>