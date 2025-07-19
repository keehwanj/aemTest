<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
}
%>                
<body id="leftContent">
	<cq:include script="tag_manager_body.jsp"/>
	<div id="container" class="container">
        <cq:include script="globalNav.jsp"/>
        <div id="main_content_wrapper">
            <cq:include script="pageHeader.jsp"/>
    		<div class="row">
      			<div class="col-sm-8">
            		<!-- START of mainContent -->
            		<div id="mainContent">
                		<div id="leftcontentwrapper">
                    		<%
                    		boolean hideTitle = properties.get("hideTitle",false);
                    		if(!hideTitle) {
                        		out.write("<div class=\"pageHeader\"><h1>");
                        		out.write(currentPage.getTitle());
                        		out.write("</h1></div>");
                    		}%>
                    		<cq:include path="nbfpc_mainContent_par" resourceType="foundation/components/parsys"/>
                    	</div><!-- leftcontentwrapper -->
            		</div>
            		<!-- END of mainContent -->
      			</div><!--col-sm-8-->  

      			<div class="col-sm-4">
            		<!-- START of sidebar -->
            		<div id="sidebar">
               			<div id="pageToolbar"  class="hidden-xs hidden-sm hidden-md">
                   			<cq:include path="nbfpc_pageToolbar" resourceType="nbfpc-cqnb/components/tools/pagetools"/>
               			</div><!-- pageToolbar -->

                		<cq:include path="nbfpc_secondaryNav_ipar" resourceType="foundation/components/iparsys"/>
                		<cq:include path="nbfpc_secondaryContent_par" resourceType="foundation/components/parsys"/>
            		</div> 
            		<!-- END of sidebar -->          
      			</div><!--col-sm-4-->  
    		</div><!--row-->  
            <div class="clearfloat"></div>
        	<cq:include script="pageFooter.jsp"/>
    	</div>
	</div>

</body>
