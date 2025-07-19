<%@include file = "/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Calendar"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.NumberFormat"%>
<%
String lang = "fr";
String langSuffix = "_F";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    langSuffix = "_E";
    lang = "en";
    }
%>

<%
String month = "";
String year = "";
String day=currentPage.getName();
String item=currentPage.getName();
  try {
    // Get news item date corresponding to path of the page
    try{
      day = currentPage.getName().split("_")[0];
      item = currentPage.getName().split("_")[1];
    } catch (Exception ex) {
      //ignore them
    }
    month = currentPage.getParent(1).getName();
    year = currentPage.getParent(2).getName();
  } catch(Exception ex) {
  
  }
  
if(!Utils.isNotEmpty(properties.get("onTime",""))) {
    currentNode.setProperty("onTime",Calendar.getInstance());
    currentNode.save();
}

GregorianCalendar now = new GregorianCalendar();
GregorianCalendar date = (GregorianCalendar) properties.get("date",now);


SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
SimpleDateFormat smallformat = new SimpleDateFormat("yyyy-MM-dd", locale);
SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);
%>
<body id="newsitem">
<!--Start of Google Tag Manager-->
<%
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {%>
<!-- Google Tag Manager-EN -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-MGVPDD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGVPDD');</script>
<!-- End Google Tag Manager-EN -->

<%
}
else{
%>
<!-- Google Tag Manager-FR -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WFLNPR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WFLNPR');</script>
<!-- End Google Tag Manager-FR -->
<%
}
%>
<!-- End Google Tag Manager -->

    <div id="container"   class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <br />
                    <h1>Ice Jams Monitoring <%=item%> for <%=year%>/<%=month%>/<%=day%></h1>
                </div>
                <p><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <p /><br />
                <table  class="table table-bordered table-hover">
<!--General Content-->                                    
                    <tr><th colspan="2"><b>General Properties</b></th></tr>
                    <tr><td width="30%">Date Jam Formed</td><td width="70%"><%=smallformat.format(date.getTime())%></td></tr>
                    <tr><td>Status</td><td><%=properties.get("status","&nbsp;")%></td></tr>                    
<!--end-->


<!--English Content-->
                    <tr><th colspan="2"><b>English Properties</b></th></tr>
                    <tr><td>Community</td><td><%=properties.get("community_en","&nbsp;")%></td></tr>                    
                    <tr><td>River Basin</td><td><%=properties.get("river_basin_en","&nbsp;")%></td></tr>  
                    <tr><td>Description</td><td><%=properties.get("description_en","&nbsp;")%></td></tr>                                                                                          
<!--end-->

<!--French Content-->                    
                    <tr><th colspan="2"><b>French Properties</b></th></tr>
                    <tr><td>Community</td><td><%=properties.get("community_fr","&nbsp;")%></td></tr>                    
                    <tr><td>River Basin</td><td><%=properties.get("river_basin_fr","&nbsp;")%></td></tr>  
                    <tr><td>Description</td><td><%=properties.get("description_fr","&nbsp;")%></td></tr>                                                                                          
<!--end-->
                </table>
            </div>
        </div>
    </div>
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