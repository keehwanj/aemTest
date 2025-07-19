<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    }//end of inner if
%>
<body id="stacked">
<!-- Google Tag Manager -->
<cq:include script="tag_manager_body.jsp"/>
<!-- End Google Tag Manager -->
<!-- START of container -->
	<div id="container" class="container">
    	<!--START of header-->
    	<cq:include script="globalNav.jsp"/>
    	<!--END of header-->
  		<!--START  of content-->
 		<div id="main_content_wrapper">
			<cq:include script="pageHeader.jsp"/>      
    		<!--START  of content-->
    		<div class="row">
      			<div class="col-sm-12">
            			<div id="mainContent">
                    		<cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
            			</div> <!-- mainContent -->
        		</div><!--col-sm-12-->        
			</div><!--row-->   
    		<!--START  of footer-->
			<div class="clearfloat"></div>

    		<!--END  of footer-->
		</div><!--main_content_wrapper-->          
	</div><!--container-->          
</body>