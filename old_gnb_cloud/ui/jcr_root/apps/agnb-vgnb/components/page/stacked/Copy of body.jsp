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
    <div id="container">
        <cq:include script="globalNav.jsp"/>
        <div id="main_content_wrapper">
        <cq:include script="pageHeader.jsp"/>
        <%if(currentPage.getDepth()!=3) { %>
		<%   
		/* Hiding gloval navagation
		boolean hideTitle = properties.get("hideTitle",false);
		if(!hideTitle) {
		*/
		%>
                <div id="pageToolbar" style="float:right;width:260px;margin:0 25px 0 0;">
                    <cq:include path="pageToolbar" resourceType="ag/components/tools/pagetools"/>
                </div>
		<%
		/*}*/
		%>
        <%} %> 
            <div id="mainContent">
                    <%
                    boolean hideTitle = properties.get("hideTitle",false);
                    if(!hideTitle) {
                        out.write("<div class=\"pageHeader\"><h1>");
                        out.write(currentPage.getTitle());
                        out.write("</h1></div>");
                    }
                    %>
                    <cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
            </div> <!-- mainContent -->
            <div class="clearfloat"></div>
        </div> <!-- main_content_wrapper -->
        <cq:include script="pageFooter.jsp"/>
    </div> <!-- container -->
<!--Start of Google Analytics-->
<script src="/etc/designs/gnb/js/tracking_dam_v4.js" type="text/javascript" ></script>
<%
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {%>
<!--         
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-17266347-1', 'gnb.ca');
  ga('send', 'pageview');
</script>
-->

<script type="text/javascript">
	var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
	var pageTracker = _gat._getTracker("UA-17266347-1");
	pageTracker._trackPageview();
</script>

<%
}
else{
%>
<!--      
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-17231199-1', 'gnb.ca');
  ga('send', 'pageview');
</script>    
-->

<script type="text/javascript">
	var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
	var pageTracker = _gat._getTracker("UA-17231199-1");


	pageTracker._trackPageview();
</script>

<%
}
%>
<!--End of Google Analytics-->    

    
</body>