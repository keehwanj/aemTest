<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    }//end of inner if
%>
<%boolean hideLeft = properties.get("hideLeft",false);%>
<!-- START of body -->
<body id="rightContent">
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
  <!--<div class="row">-->
  <!--START of header-->
  <cq:include script="globalNav.jsp"/>
  <!--END of header-->
  <!--</div>-->
  <!--START  of content-->
  <div id="main_content_wrapper">
    <cq:include script="pageHeader.jsp"/>
    <!--START  of content-->
    <!--START  of row-->  
    <div class="row">
	  <!--START  of col-sm-3-->  
        <!--<div class="col-sm-3">-->
        <%if(hideLeft){%>
      		<div class="col-sm-3 hidden-xs">
		<%}
		else{%>
			<div class="col-sm-3">
		<%}%>
        <div id="sidebar2">
          <cq:include path="tNav_ipar" resourceType="foundation/components/iparsys"/>
          <cq:include path="tCon_par" resourceType="foundation/components/parsys"/>
        </div>
      </div>
      <!--END  of col-sm-3-->    
      <!--START  of col-sm-9-->    
      <!--<div class="col-sm-9">-->
        <%if(hideLeft){%>
      		<div class="col-sm-9 col-xs-12">
		<%}
		else{%>
			<div class="col-sm-9">
		<%}%>  
        <!--START of mainContent-->
        <div id="mainContent">
            <%
				boolean hideTitle = properties.get("hideTitle",false);
				if(!hideTitle) {
					out.write("<div class=\"pageHeader\"><h1>");
					out.write(currentPage.getTitle());
					out.write("</h1></div>");
				}%>
            <div class="clearfloats"></div>
            <cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
            <div class="clearfloats"></div>

          <div class="clearfloats"></div>
        </div>
        <!--END of mainContent-->
      </div>
	  <!--END  of col-sm-9-->    
    </div>
    <!--END of row-->
    <!--END  of content-->
    <!--START  of footer-->
    <div class="clearfloat"></div>
    <cq:include script="pageFooter.jsp"/>
    <!--END  of footer-->
  </div>
  <!-- main_content_wrapper -->
</div>
<!-- END of container -->

</body>
<!-- END of body -->