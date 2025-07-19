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
<body id="mixedContent">
	<cq:include script="tag_manager_body.jsp"/>
    <!-- START of container -->
    <div id="container" class="container">
        <cq:include script="globalNav.jsp"/>
        <!--START  of id=main_content_wrapper-->
        <div id="main_content_wrapper">
            <cq:include script="pageHeader.jsp"/>

            <!--START of row1-->
    		<div class="row">
                <!--START of col-sm-8-->  
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
                    		<cq:include path="mainContent_par_snb" resourceType="foundation/components/parsys"/>
                		</div><!-- leftcontentwrapper -->
            		</div> 
            		<!-- END of mainContent -->
      			</div>
                <!--END of col-sm-8-->  
				<!--START of col-sm-4-->
      			<div class="col-sm-4">
            		<!-- START of sidebar -->
            		<div id="sidebar">
                		<cq:include path="secondaryNav_ipar_snb" resourceType="foundation/components/iparsys"/>
                		<cq:include path="secondaryContent_par_snb" resourceType="foundation/components/parsys"/>
            		</div> 
            		<!-- END of sidebar -->          
      			</div>
                <!--END of col-sm-4--> 
    		</div>
    		<!--END of row1-->    

            <!--START of row2-->
    		<div class="row">
                <!--START of col-sm-12-->  
      			<div class="col-sm-12">
                	<cq:include path="mainContent_par1_snb" resourceType="foundation/components/parsys"/>
      			</div>
                <!--END of col-sm-12-->  
    		</div>
    		<!--END of row2-->    

            <cq:include script="pageFooter.jsp"/>
        </div>
        <!--END  of id=main_content_wrapper-->
    </div>
    <!-- END of container -->
</body>
<!-- END of body -->