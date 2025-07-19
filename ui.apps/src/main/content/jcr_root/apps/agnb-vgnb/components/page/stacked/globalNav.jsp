<%@include file="/libs/foundation/global.jsp"%>
 <div id="header" >
	<header class="row">
    	<div class="col-sm-3 col-md-6" style="padding-right: 5px;">
			<div id="logoArea">
        		<cq:include path="logo" resourceType="agnb-vgnb/components/navigation/logo"/>                
    		</div>
		</div>
    	<div class="col-sm-9 col-md-6" style="padding-left: 5px;">
			<div id="topRightNav" class="visible-lg">
        		<cq:include path="keywordsearch" resourceType="agnb-vgnb/components/search/keywordsearch"/>
     		</div>
     		<div id="topCentreNav">
                <cq:include path="globalNav" resourceType="agnb-vgnb/components/navigation/globalnav"/>
     		</div>
     	</div>
     	<div id="topText" class="col-md-6 visible-lg" style="float: right;">
        	<cq:include path="headertext" resourceType="agnb-vgnb/components/tools/headertext"/>
     	</div>           
	</header>  
 </div>

<div id="heightDivDep"  class="hidden-xs hidden-sm hidden-md"></div>
<div id="heightDivCat"  class="hidden-xs hidden-sm hidden-md"></div>