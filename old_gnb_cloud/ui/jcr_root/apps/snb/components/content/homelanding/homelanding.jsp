<%@include file="/libs/foundation/global.jsp"%>
<%
String englishText 	= properties.get("englishText", "English");
String englishLink	= properties.get("englishLink", "/content/snb/en");
if(englishLink.startsWith("/content")){
	englishLink	=	englishLink+".html";
}
String frenchText 	= properties.get("frenchText", "Français");
String frenchLink 	= properties.get("frenchLink", "/content/snb/fr");
if(frenchLink.startsWith("/content")){
	frenchLink	=	frenchLink+".html";
}
String bodyImage 	= properties.get("bodyImage", "/etc/designs/snb-bootstrap/clientlibs/newImages/BackgroundSplash.jpg");

String snbLogo 		= properties.get("snbLogo", "/etc/designs/snb-bootstrap/clientlibs/newImages/BackgroundSplashSNBLogo.jpg");

%>
    <!-- Landing Page container-->
    <div class="container">
        <!-- landing-->
        <div class="landing" id="landing">
            <div class="row">
                <!-- landingContent-->
                <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 landingContent">
                    <!-- row-->
                    <div class="row">
                        <!-- landingIamge-->
                        <div class="col-12 col-lg-12" id="landingIamge">
                        </div>
                        <!-- /landingIamge-->
                    </div>
                    <!-- /row-->
                    <!-- languageButton-->
                    <div class="row languageButton">
                        <div class="col-6 col-lg-6 col-sm-6 col-xs-6">
                            <!-- englishButton-->

                            <a href="<%=englishLink%>" class="btn btn-primary center-block englishButton" role="button"><%=englishText%></a>
                            <!-- /englishButton-->
                        </div>
                        <div class="col-6 col-lg-6 col-sm-6 col-xs-6 ">
                            <!-- frenchButton-->

                            <a href="<%=frenchLink%>" class="btn btn-primary center-block frenchButton" role="button"><%=frenchText%></a>
                            <!-- /frenchButton-->
                        </div>
                    </div>
                    <!-- /languageButton-->
                </div>
                <!-- /landingContent-->
            </div>
        </div>
        <!-- /landing-->
    </div>
    <!-- /Landing Page container-->
<script>
    document.getElementById('landingBackground').style.backgroundImage="url(<%=bodyImage%>)"; 
    document.getElementById('landingIamge').style.backgroundImage="url(<%=snbLogo%>)"; 
</script>