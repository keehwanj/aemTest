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
	<cq:include script="tag_manager_body.jsp"/>     
    <!-- START of container -->
    <div id="container" class="container">
        <cq:include script="globalNav.jsp"/>
        <!--START  of id=main_content_wrapper-->
        <div id="main_content_wrapper">
            <cq:include script="pageHeader.jsp"/>
            <!--START  of content-->
			<!--START  of row-->
    		<div class="row">
				<!--START  of class=col-sm-2-->
            	<div class="col-sm-2">    
            		<!--START  of id=sidebar-->
            		<div id="sidebar">

                		<cq:include path="secondaryNav_ipar_snb" resourceType="foundation/components/iparsys"/>
                		<cq:include path="secondaryContent_par_snb" resourceType="foundation/components/parsys"/>
            		</div>
	            	<!--END  of id=sidebar-->
				</div>    
                <!--END  of class=col-sm-2-->

				<!--START  of class=col-sm-6-->
            	<div class="col-sm-6">   
            		<!--START  of id=mainContent-->
            		<div id="mainContent">
            			<div >
                    	<%
                    		boolean hideTitle = properties.get("hideTitle",false);
                    		if(!hideTitle) {
                        		out.write("<div class=\"pageHeader\"><h1>");
                        		out.write(currentPage.getTitle());
                        		out.write("</h1></div>");
                    		}%>             
                    		<cq:include path="mainContent_par_snb" resourceType="foundation/components/parsys"/>
                    		<div class="clearfloats"></div>
               			</div>                              
               			<div class="clearfloats"></div>      
            		</div>
					<!--END  of id=mainContent-->
				</div>    
                <!--END  of class=col-sm-6-->

				<!--START  of class=col-sm-4-->
            	<div class="col-sm-4">    
            		<!--START  of id=sidebar2-->
            		<div id="sidebar2">
                		<div id="pageToolbar">
                    		<cq:include path="pageToolbar" resourceType="snb/components/tools/pagetools"/>    
                		</div>                        
                		<cq:include path="tNav_ipar_snb" resourceType="foundation/components/iparsys"/>
                		<cq:include path="tCon_par_snb" resourceType="foundation/components/parsys"/>            
            		</div>
					<!--END  of id=sidebar-->
				</div>    
                <!--END  of class=col-sm-4-->

            </div>
    		<!--END of row-->    
            <cq:include script="pageFooter.jsp"/>
        </div>
        <!--END  of id=main_content_wrapper-->
    </div>
    <!-- END of container -->
</body>
<!-- END of body -->