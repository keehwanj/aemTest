<%@include file="/libs/foundation/global.jsp" %>

<body id="stacked">
	<cq:include script="tag_manager_body.jsp"/>
	<!-- START of container -->    
	<div id="container" class="container">
    	<!--START of header-->
    	<cq:include script="globalNav.jsp"/>
    	<!--END of header--><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
  		<!--START  of main_content_wrapper-->
 		<div id="main_content_wrapper">
			<cq:include script="pageHeader.jsp"/>      
    		<!--START  of content-->
    		<div class="row">
                <div class="col-sm-2 col-md-2 col-lg-2  home_upper_left">
                    <cq:include path="home_upper_left" resourceType="foundation/components/parsys"/>
    			</div>
      			<div class="col-sm-7 col-md-7 col-lg-7 home_upper_middle">
            			<div id="mainContent">
                    		<cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
            			</div> <!-- mainContent -->
        		</div><!--col-sm-12-->      
				<div class="col-sm-3 col-md-3 col-lg-3 home_upper_right">
                    <cq:include path="home_upper_right" resourceType="foundation/components/parsys"/>
    			</div>
			</div><!--row-->     


  			<div class="row">
    			<div class="col-sm-6 col-md-6 col-lg-5 home_bottom_left">
                    <cq:include path="home_text_left" resourceType="foundation/components/parsys"/>
    			</div>
    			<div class="col-sm-6 col-md-6 col-lg-7 home_bottom_right">
                    <cq:include path="home_text_right" resourceType="foundation/components/parsys"/>
    			</div>
  			</div>

    		<div class="row">
                <div class="col-sm-2 col-md-2 col-lg-2  home_upper_left">
                    <cq:include path="home_bottom_left" resourceType="foundation/components/parsys"/>
    			</div>
      			<div class="col-sm-7 col-md-7 col-lg-7 home_upper_middle">
            			<div id="mainContent">
                    		<cq:include path="mainContent_par_bottom" resourceType="foundation/components/parsys"/>
            			</div> <!-- mainContent -->
        		</div><!--col-sm-12-->      
				<div class="col-sm-3 col-md-3 col-lg-3 home_upper_right">
                    <cq:include path="home_bottom_right" resourceType="foundation/components/parsys"/>
    			</div>
			</div><!--row-->    

			<div class="clearfloat"></div>
		</div>
        <!--END of main_content_wrapper-->          
	</div>
	<!--END of container-->  
</body>