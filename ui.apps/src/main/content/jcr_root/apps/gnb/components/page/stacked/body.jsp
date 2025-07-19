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
                    	<%
                    		boolean hideTitle = properties.get("hideTitle",false);
                    		if(!hideTitle) {
                        		out.write("<div class=\"pageHeader\"><h1>");
                        		out.write(currentPage.getTitle());
                        		out.write("</h1></div>");
                    		}%>

                    		<cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
            			</div> <!-- mainContent -->
        		</div><!--col-sm-12-->        
			</div><!--row-->   
    		<!--START  of footer-->
			<div class="clearfloat"></div>
			<cq:include script="pageFooter.jsp"/>   
    		<!--END  of footer-->

		</div><!--main_content_wrapper-->          
	</div><!--container-->        
	<script src="https://cdnjs.cloudflare.com/ajax/libs/powerbi-client/2.18.0/powerbi.min.js"></script>    
</body>