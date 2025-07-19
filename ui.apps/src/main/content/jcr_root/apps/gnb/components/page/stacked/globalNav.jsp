<%@include file="/libs/foundation/global.jsp"%>
 <div id="header" >
	<header class="row">
    	<div class="col-sm-3 col-md-4">
			<div id="logoArea">
        		<cq:include path="logo" resourceType="gnb/components/navigation/logo"/>                
    		</div>
		</div>
    	<div class="col-sm-9 col-md-8">
			<div id="topRightNav" class="visible-lg">
        		<cq:include path="keywordsearch" resourceType="gnb/components/search/keywordsearch"/>
     		</div>
     		<div id="topCentreNav">
                <cq:include path="globalNav" resourceType="gnb/components/navigation/globalnav"/>
     		</div> 
     	</div>
	<!--START of public library-->     
     <%if(currentPage.getPath().contains("/departments/nbpl")||currentPage.getPath().contains("/ministeres/bpnb")){%>          
     <div id="topText" class="hidden-xs hidden-sm">
        <cq:include path="headertext" resourceType="gnb/components/tools/nbplName"/>
     </div>
	<%}%>
	<!--END of public library-->             
	</header>  

 </div>
<div id="heightDivDep"  class="hidden-xs hidden-sm hidden-md"></div>
<div id="heightDivCat"  class="hidden-xs hidden-sm hidden-md"></div>