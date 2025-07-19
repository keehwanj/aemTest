<%@include file="/libs/foundation/global.jsp" %>
               
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
                			out.write(xssAPI.encodeForHTML(currentPage.getTitle()));
                			out.write("</h1></div>");
						}%>
						<cq:include path="mainContent_par_courts" resourceType="foundation/components/parsys"/>
					</div> <!-- mainContent -->
        		</div><!--col-sm-12-->        
			</div><!--row-->                      
        	<div class="clearfloat"></div>
        	<cq:include script="pageFooter.jsp"/>            
        </div> <!-- main_content_wrapper -->
    </div> 
    <!-- container -->
</body>