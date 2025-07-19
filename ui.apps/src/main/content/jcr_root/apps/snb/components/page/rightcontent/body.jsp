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
	<cq:include script="tag_manager_body.jsp"/>
	<!-- START of container -->
	<div id="container" class="container">
  	<!--<div class="row">-->
  	<!--START of header-->
  		<cq:include script="globalNav.jsp"/>
  	<!--END of header-->
  	<!--</div>-->
  <!--START  of main_content_wrapper-->
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
            <cq:include path="mainContent_par_snb" resourceType="foundation/components/parsys"/>
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