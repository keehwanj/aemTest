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
<!-- START of body -->
<body id="leftContent">
   <cq:include script="tag_manager_body.jsp"/>
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
                        }
                        %>
                     <cq:include path="mainContent_par_myid" resourceType="foundation/components/parsys"/>
                  </div>
                  <!-- leftcontentwrapper -->
               </div>
               <!-- END of mainContent -->
            </div>
            <!--col-sm-8-->  
            <div class="col-sm-4">
               <!-- START of sidebar -->
               <div id="sidebar">
                  <%if(currentPage.getDepth()!=3) { %>
                  <div id="pageToolbar"  class="hidden-xs hidden-sm hidden-md">
                     <cq:include path="pageToolbar_myid" resourceType="myid-monid/components/tools/pagetools"/>
                  </div>
                  <!-- pageToolbar -->
                  <%} %>    
                  <cq:include path="secondaryNav_ipar_myid" resourceType="foundation/components/iparsys"/>
                  <cq:include path="secondaryContent_par_myid" resourceType="foundation/components/parsys"/>
               </div>
               <!-- END of sidebar -->          
            </div>
            <!--col-sm-4-->  
         </div>
         <!--row-->  
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