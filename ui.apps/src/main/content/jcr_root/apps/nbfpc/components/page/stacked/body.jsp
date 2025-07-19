<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
}
%>                
<body id="stacked">
	<cq:include script="tag_manager_body.jsp"/>
    <!-- START of container -->
    <div id="container" class="container">
        <cq:include script="globalNav.jsp"/>
        <div id="main_content_wrapper">
        	<cq:include script="pageHeader.jsp"/>
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
						<cq:include path="nbfpc_mainContent_par" resourceType="foundation/components/parsys"/>
					</div> <!-- mainContent -->
        		</div><!--col-sm-12-->        
			</div><!--row-->                      
        	<div class="clearfloat"></div>
        	<cq:include script="pageFooter.jsp"/>            
        </div> <!-- main_content_wrapper -->
    </div> 
    <!-- container -->
</body>