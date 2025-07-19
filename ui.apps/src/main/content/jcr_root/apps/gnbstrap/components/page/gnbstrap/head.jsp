<%@include file="/apps/gnbstrap/components/global.jsp" %>
<%@page session="false" %>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Multimedia"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>

<%
String lang = "fr";
String langSuffix = "_F";
String langSuffix2 = "FRE";
String langSuffix3 = "FRE";
String tagSuffix = "-fra";
String tag_manager_head = "tag_manager_head_fr.jsp";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    langSuffix = "_E";
    lang = "en";
    langSuffix2 = "";
    langSuffix3 = "ENG";
    tagSuffix = "-eng"; 
    tag_manager_head = "tag_manager_head_en.jsp";
}

String keywords = WCMUtils.getKeywords(currentPage);

String description = properties.get("jcr:description",currentPage.getTitle());
String title = currentPage.getPageTitle() != null ? currentPage.getPageTitle() : currentPage.getTitle() !=null ? currentPage.getTitle() : currentPage.getName();

if(keywords.equals("")||keywords==null){
    keywords=title;
}

String created = properties.get("gnbCreated",properties.get("jcr:created",""));
String modified = properties.get("cq:lastModified",properties.get("gnbCreated",properties.get("jcr:created","")));

Page configPage =    Utils.getConfigurationPage(currentPage.getPageManager());
String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
%>
<head>
   	<title><%= xssAPI.encodeForHTML( currentPage.getTitle() == null ? currentPage.getName() : currentPage.getTitle() ) %></title>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<meta name="description" content="<%= xssAPI.encodeForHTML(description) %>" />
  	<meta name="keywords" content="<%= xssAPI.encodeForHTML(keywords) %>" />    
  	<meta name="dcterms.creator" content="<%=properties.get("gnbPublisher","") %>" />
  	<meta name="dcterms.title" content="<%=title %>" />
  	<meta name="dcterms.issued" title="W3CDTF" content="<%=created %>" />
  	<meta name="dcterms.modified" title="W3CDTF" content="<%=modified %>" />
  	<meta name="dcterms.subject" title="scheme" content="<%=properties.get("gnbCoverage","") %>" />
  	<meta name="dcterms.language" title="ISO639-2"  content="<%=lang %>" />
<%boolean nocache = properties.get("nocache",false);
boolean nocache_a_pdf = properties.get("nocache_a_pdf",false);
boolean nocache_area_pdf = properties.get("nocache_area_pdf",false);
boolean nocrawl = properties.get("nocrawl",false);

if(nocache){%>
    <!--START of no cacahe-->    
	<meta http-equiv="cache-control" content="max-age=0" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
	<meta http-equiv="pragma" content="no-cache" />
    <!--END of no cacahe-->
<%}%>
	<!—Google Fonts -->
	<style>
		@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Public+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
	</style>


   	<!-- FontAwesome icon font -->
  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 

    <!-- Bootstrap CSS -->
  	<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">


    <!-- Custom CSS overrides for this page-->
    <cq:includeClientLib categories="gnbstrap.all"/> 
	<link rel="shortcut icon" href="/etc/designs/gnbstrap/clientlibs/favicon.ico" type="image/x-icon" /> 


   	<cq:include script="/libs/wcm/core/components/init/init.jsp"/>
    <cq:include script="/libs/foundation/components/page/stats.jsp"/>
    <cq:include script="/libs/cq/cloudserviceconfigs/components/servicelibs/servicelibs.jsp"/>
    <cq:include script="/libs/wcm/core/browsermap/browsermap.jsp" />
    <cq:include script="/apps/wcm/mobile/components/simulator/simulator.jsp"/>
    <!-- Adobe Edge Web Fonts in use by Geo-media -->
    <script src="//use.edgefonts.net/old-standard.js"></script>
    <script src="//use.edgefonts.net/quattrocento-sans.js"></script>

    <cq:include script="<%=tag_manager_head%>"/>	  

    <!-- Bootstrap JS -->    
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha512-Ah5hWYPzDsVHf9i2EejFBFrG2ZAPmpu4ZJtW4MfSgpZacn+M9QHDt+Hd/wL1tEkk1UgbzqepJr6KnhZjFKB+0A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


    <!--START of tooltip/popover initiation-->        
	<script>
	$(document).ready(function(){
    	$('[data-toggle="tooltip"]').tooltip(); 
	});
	</script>
	<script>
	$(document).ready(function(){
    	$('[data-toggle="popover"]').popover(); 
	});
	</script>
	<!--END of tooltip/popover initiation-->       


<%if(nocache){%>
	<!--START of no cacahe for image by adding date time on image src-->       
	<script>
	$(document).ready(function(){  
		jQuery('img').each(function(){  
            if(jQuery(this).attr('src')==undefined){
            }else{
				jQuery(this).attr('src',jQuery(this).attr('src')+ '?random=' + (new Date()).getTime());  
            }
		});
	});  
	</script>    
	<!--END of no cacahe for image by adding date time on image src-->        
<%}%>



<%if(nocache_a_pdf){%>
    <!--START of no cacahe for pdf/doc by adding date time on the end of href-->       
	<script>
	$(document).ready(function(){  
		$('a[href$=".pdf"]').each(function(){
			var url = $(this).attr('href');
   			$(this).attr('href', url+ '?random=' + (new Date()).getTime());
		});
	});  
	</script>    
	<!--END of  of no cacahe for pdf/doc by adding date time on the end of href-->         
<%}%>


<%if(nocache_area_pdf){%>
    <!--START of no cacahe for pdf/doc by adding date time on the end of href-->       
	<script>
	$(document).ready(function(){  

		jQuery('area[href$=".pdf"]').each(function(){  
			var url = $(this).attr('href');
   			$(this).attr('href', url+ '?random=' + (new Date()).getTime());
		});
	});  
	</script>    
	<!--END of  of no cacahe for pdf/doc by adding date time on the end of href-->         
<%}%>    

<%
if(nocrawl){%>
    <!--START of nocrawl-->    
    <meta name="robots" content="noindex" />
    <!--END of nocrawl-->
<%}
%>       

</head>