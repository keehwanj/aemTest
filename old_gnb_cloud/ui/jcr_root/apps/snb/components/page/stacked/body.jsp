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
	<cq:include script="tag_manager_body.jsp"/> 
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
        			<%if(currentPage.getDepth()!=3) { %>
                		<div id="pageToolbar" style="float:right;width:260px;margin:0 25px 0 0;" class="hidden-xs hidden-sm hidden-md">
                    		<cq:include path="pageToolbar" resourceType="snb/components/tools/pagetools"/>
                		</div>
        			<%} %> 
            			<div id="mainContent">
                    	<%
                    		boolean hideTitle = properties.get("hideTitle",false);
                    		if(!hideTitle) {
                        		out.write("<div class=\"pageHeader\"><h1>");
                        		out.write(currentPage.getTitle());
                        		out.write("</h1></div>");
                    		}%>
                    		<cq:include path="mainContent_par_snb" resourceType="foundation/components/parsys"/>
            			</div> <!-- mainContent -->
        		</div><!--col-sm-12-->        
			</div><!--row-->   
    		<!--START  of footer-->
			<div class="clearfloat"></div>
			<cq:include script="pageFooter.jsp"/>      
    		<!--END  of footer-->

		</div><!--main_content_wrapper-->          
	</div><!--container-->          
</body>