<%@include file="/libs/foundation/global.jsp" %>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Multimedia"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>

<%
String lang = "fr";
String langSuffix = "_F";
String langSuffix2 = "FRE";
String langSuffix3 = "FRE";
String tagSuffix = "-fra";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    langSuffix = "_E";
    lang = "en";
    langSuffix2 = "";
    langSuffix3 = "ENG";
    tagSuffix = "-eng"; 
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
  <title><%= title %></title>
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
  <cq:include script="/apps/wcm/mobile/components/simulator/simulator.jsp"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--START : Force IE compatibility mode off using tags-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <!--END : Force IE compatibility mode off using tags-->    
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <cq:include script="/apps/gnb-fluid/init/init.jsp"/>  


  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <cq:includeClientLib categories="gnb-fluid.bootstrap.all"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <link rel="shortcut icon" href="/etc/designs/gnb-bootstrap/clientlibs/favicon.ico" type="image/x-icon" />
  <script src='//www.google.com/jsapi' type='text/javascript' ></script>  
  <cq:include script="tag_manager_head.jsp"/>	  

	<script type="text/javascript">
        google.load('visualization', '1', {packages:['orgchart']}); 

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

<%
if(nocrawl){%>
    <!--START of nocrawl-->    
    <meta name="robots" content="noindex" />
    <!--END of nocrawl-->
<%}
%>    
</head>
