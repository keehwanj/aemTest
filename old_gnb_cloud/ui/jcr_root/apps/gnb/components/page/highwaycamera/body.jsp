<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    }//end of inner if
%>
<!-- START of body -->
<body id="centreContent">
<!--Start of Google Tag Manager-->
<%
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {%>
<!-- Google Tag Manager-EN -->
<noscript>
<iframe src="//www.googletagmanager.com/ns.html?id=GTM-MGVPDD"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
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
<noscript>
<iframe src="//www.googletagmanager.com/ns.html?id=GTM-WFLNPR"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WFLNPR');</script>
<!-- End Google Tag Manager-FR -->
<%
}
%>
<!--END of Google Tag Manager-->
    <!-- START of container -->
    <div id="container" class="container">
        <cq:include script="globalNav.jsp"/>
        <!--START  of id=main_content_wrapper-->
        <div id="main_content_wrapper">
            <cq:include script="pageHeader.jsp"/>
            <!--START  of content-->
            <div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">    
			<%
            	boolean hideTitle = properties.get("hideTitle",false);
                if(!hideTitle) {
                	out.write("<div class=\"pageHeader\"><h1>");
                	out.write(currentPage.getTitle());
                	out.write("</h1></div>");
                }%>
                </div>
				<div class="col-lg-4  hidden-xs hidden-sm hidden-md">    
					<div id="pageToolbar" style="float:right;width:260px;margin:0 0px 10px 0;">
            			<cq:include path="pageToolbar" resourceType="gnb/components/tools/pagetools"/>    
					</div>
                </div>

            </div>
			<!--START  of row-->
    		<div class="row">
				<!--START  of class=col-md-5 col-lg-5-->
            	<div class="col-xs-12 col-sm-6 col-md-5 col-lg-5">    
            		<!--START  of id=sidebar-->
            		<div id="sidebar">

                		<cq:include path="secondaryNav_ipar" resourceType="foundation/components/iparsys"/>
                		<cq:include path="secondaryContent_par" resourceType="foundation/components/parsys"/>
            		</div>
	            	<!--END  of id=sidebar-->
				</div>    
                <!--END  of class=col-md-5 col-lg-5-->

				<!--START  of class=col-md-4 col-lg-4-->
            	<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">   
            		<!--START  of id=mainContent-->
            		<div id="mainContent">
            			<div >

                    		<cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
                    		<div class="clearfloats"></div>
               			</div>                              
               			<div class="clearfloats"></div>      
            		</div>
					<!--END  of id=mainContent-->
				</div>    
                <!--END  of class=col-sm-4-->

				<!--START  of class=col-sm-3-->
            	<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">    
            		<!--START  of id=sidebar2-->
            		<div id="sidebar2">

                		<cq:include path="tNav_ipar" resourceType="foundation/components/iparsys"/>
                		<cq:include path="tCon_par" resourceType="foundation/components/parsys"/>            
            		</div>
					<!--END  of id=sidebar-->
				</div>    
                <!--END  of class=col-sm-3-->

            </div>
    		<!--END of row-->    
            <cq:include script="pageFooter.jsp"/>
        </div>
        <!--END  of id=main_content_wrapper-->
    </div>
    <!-- END of container -->

</body>
<!-- END of body -->