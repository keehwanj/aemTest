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
<!--Start of Google Tag Manager-->
<%
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {%>

<!-- Google Tag Manager-EN -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-MGVPDD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGVPDD');</script>
<!-- End Google Tag Manager-EN -->

<%
}
else{
%>
<!-- Google Tag Manager-FR -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WFLNPR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WFLNPR');</script>
<!-- End Google Tag Manager-FR -->
<%
}
%>
<!--End of Google Analytics-->   
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





			<div class="clearfloat"></div>
		</div>
        <!--END of main_content_wrapper-->          
	</div>
	<!--END of container-->  
<!-- END of container -->  
</body>