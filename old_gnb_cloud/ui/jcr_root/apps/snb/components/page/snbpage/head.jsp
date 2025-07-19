 <%@include file="/libs/foundation/global.jsp" %>
<%@include file="head_top.jsp" %>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Multimedia"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="utf-8">
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
boolean nosnippet = properties.get("nosnippet",false);
boolean nocache_css = properties.get("nocache_css",false);
boolean nocrawl = properties.get("nocrawl",false);

if(nosnippet){%>
    <!--START of nosnippet-->    
	<meta name="robots" content="nosnippet" />
    <!--END of nosnippet-->
<%}

if(nocache){%>
    <!--START of no cacahe-->    
	<meta http-equiv="cache-control" content="max-age=0" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
	<meta http-equiv="pragma" content="no-cache" />
    <!--END of no cacahe-->
<%}%>

	<% //Google Custom Search - Site Owner Verification for SNB
	String url = currentPage.getPath();
	if(url.equalsIgnoreCase("/content/snb")){
	%>
    	<meta name="google-site-verification" content="W52-g3Codsn03uTy3OQ7Ap-dUYSStAO_5NZxwB2NMo4" />
	<%}%>

	<cq:include script="/apps/snb/init/init.jsp"/>
	<cq:includeClientLib categories="cq.query"/>    
    <cq:includeClientLib categories="cq.widgets"/>        
	<cq:includeClientLib categories="snb.bootstrap.all"/>     

    


	<link rel="shortcut icon" href="/etc/designs/snb-bootstrap/clientlibs/favicon.ico" type="image/x-icon" /> 


    <cq:include script="/libs/wcm/mobile/components/simulator/simulator.jsp"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <cq:include script="tag_manager_head.jsp"/>	
	<title><%= title %></title>
	<script type="text/javascript">


    	jQuery(document).ready(function($)
    	{
        	$('#mainnav a:has(br)').add('#departmentNav a:has(br)').css({
            	'font-size': '85%',
            	'line-height': '1.07em',
            	'height': '50px',
            	'padding-top': '12px'
        	});
        	$('div.table table').attr("border","0");
    	});

	</script>
    <!--START of image map for responsive-->
    <script>
		$(document).ready(function(e) {
			$('img[usemap]').rwdImageMaps();

			$('area').on('click', function() {
                //alert($(this).attr('alt') + ' clicked');
			});
		});
	</script>
	<!--START of image map for responsive-->    

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
		jQuery('a[href$=".pdf"]').each(function(){  
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

<%if(nocache_css){%>
    <!--START of no cacahe for css by adding date time on the end of css-->       
	<script>
	$(document).ready(function(){  
		jQuery('link[href$=".css"]').each(function(){  
			var url = $(this).attr('href');
   			$(this).attr('href', url+ '?random=' + (new Date()).getTime());
		});
	});  
	</script>    
	<!--END of  of no cacahe for pdf/doc by adding date time on the end of href-->         
<%}%>

<%if(nocrawl){%>
    <!--START of nocrawl-->    
    <meta name="robots" content="noindex" />
    <!--END of nocrawl-->
<%}%>
</head>