<%@include file="/libs/wcm/global.jsp" %>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%
String lang = "fr";
String langSuffix = "_F";
String langSuffix2 = "FRE";
String langSuffix3 = "FRE";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
	langSuffix = "_E";
	lang = "en";
	langSuffix2 = "";
	langSuffix3 = "ENG";
}

String keywords = WCMUtils.getKeywords(currentPage);
String description = properties.get("jcr:description",currentPage.getTitle());
String title = currentPage.getPageTitle() != null ? currentPage.getPageTitle() : currentPage.getTitle() !=null ? currentPage.getTitle() : currentPage.getName();
String created = properties.get("gnbCreated",properties.get("jcr:created",""));
String modified = properties.get("cq:lastModified",properties.get("gnbCreated",properties.get("jcr:created","")));

Page configPage =	 Utils.getConfigurationPage(currentPage.getPageManager());
String[] selectors = slingRequest.getRequestPathInfo().getSelectors();


//Try to get the contact metadata
try {
	String dataPage = Utils.getConfigurationProperty("contactDataPage", configPage);
	String renderer = Utils.getConfigurationProperty(String.format("contactRendererPage_%s", lang), configPage);
	renderer = renderer.replace("<base>","").replace("<dept>","").replace("<dept_alt>","");
	if(renderer.contains("/")) renderer = renderer.substring(renderer.lastIndexOf("/"));
	if (selectors.length>0 && Utils.isNotEmpty(dataPage) && currentPage.getPath().contains(renderer)) {
		int contactId = Integer.parseInt(properties.get("contactId", selectors[0]));
		int bucket = ((contactId / 250) + 1) * 250;
		
		String itemPath = String.format("%s/%s/%s/contactinfo/", dataPage, bucket, contactId);
		Node contactDataNode =	WCMUtils.getNode(resourceResolver.getResource(itemPath));
		if(contactDataNode!=null) {
			StringBuilder nameBuilder = new StringBuilder();
			if (contactDataNode.hasProperty("LASTNAME") && Utils.isNotEmpty(contactDataNode.getProperty("LASTNAME").getString()))
				nameBuilder.append(contactDataNode.getProperty("LASTNAME").getString());
			nameBuilder.append(", ");
			if (contactDataNode.hasProperty("FIRSTNAME") && Utils.isNotEmpty(contactDataNode.getProperty("FIRSTNAME").getString()))
				nameBuilder.append(contactDataNode.getProperty("FIRSTNAME").getString());
			title = nameBuilder.toString();
			description = nameBuilder.toString();
			 
			if(contactDataNode.getParent().hasNode(Nodes.JCR_CONTENT.nodeType())) {
				Node jcrContent = contactDataNode.getParent().getNode(Nodes.JCR_CONTENT.nodeType());
				if(jcrContent.hasProperty("gnbCreated") && Utils.isNotEmpty(jcrContent.getProperty("gnbCreated").getString())) {
					created = modified = jcrContent.getProperty("gnbCreated").getString();
				} else if(jcrContent.hasProperty("jcr:created") && Utils.isNotEmpty(jcrContent.getProperty("jcr:created").getString())) {
					created = modified = jcrContent.getProperty("jcr:created").getString();
				}
				if(jcrContent.hasProperty("cq:lastModified") && Utils.isNotEmpty(jcrContent.getProperty("cq:lastModified").getString())) {
					modified = jcrContent.getProperty("cq:lastModified").getString();
				}
			} 
			
		}
	}
} catch (Exception ex) {
	log.error("unable to get metadata from service", ex);
}

//Try to get the department metadata
try {
	String dataPage = Utils.getConfigurationProperty("organisationDataPage", configPage);
	String renderer = Utils.getConfigurationProperty(String.format("organisationRendererPage_%s", lang), configPage);
	renderer = renderer.replace("<base>","").replace("<dept>","").replace("<dept_alt>","");
	if(renderer.contains("/")) renderer = renderer.substring(renderer.lastIndexOf("/"));
	if (selectors.length>0 && Utils.isNotEmpty(dataPage) && currentPage.getPath().contains(renderer)) {
		String itemPath = String.format("%s/%s/orginfo/", dataPage, slingRequest.getRequestPathInfo().getSelectorString().replace(".","/"));
		Node orgDataNode =	WCMUtils.getNode(resourceResolver.getResource(itemPath));
		if(orgDataNode!=null) {
			if(orgDataNode.hasProperty("KEYWORDS" + langSuffix3) && Utils.isNotEmpty(orgDataNode.getProperty("KEYWORDS" + langSuffix3).getString())) {
				keywords = orgDataNode.getProperty("KEYWORDS" + langSuffix3).getString();
			}
			if(orgDataNode.hasProperty("ORGNAME" + langSuffix3) && Utils.isNotEmpty(orgDataNode.getProperty("ORGNAME" + langSuffix3).getString())) {
				title = orgDataNode.getProperty("ORGNAME" + langSuffix3).getString();
			}
			if(orgDataNode.hasProperty("ORGTITLE" + langSuffix3) && Utils.isNotEmpty(orgDataNode.getProperty("ORGTITLE" + langSuffix3).getString())) {
				title += " (" + orgDataNode.getProperty("ORGTITLE" + langSuffix3).getString() +	 ")";
			}	 
			description = title;
			if(orgDataNode.hasProperty("GOAL" + langSuffix3) && Utils.isNotEmpty(orgDataNode.getProperty("GOAL" + langSuffix3).getString())) {
				description = orgDataNode.getProperty("GOAL" + langSuffix3).getString();
			}		 
			
			if(orgDataNode.getParent().hasNode(Nodes.JCR_CONTENT.nodeType())) {
				Node jcrContent = orgDataNode.getParent().getNode(Nodes.JCR_CONTENT.nodeType());
				if(jcrContent.hasProperty("gnbCreated") && Utils.isNotEmpty(jcrContent.getProperty("gnbCreated").getString())) {
					created = modified = jcrContent.getProperty("gnbCreated").getString();
				} else if(jcrContent.hasProperty("jcr:created") && Utils.isNotEmpty(jcrContent.getProperty("jcr:created").getString())) {
					created = modified = jcrContent.getProperty("jcr:created").getString();
				}
				if(jcrContent.hasProperty("cq:lastModified") && Utils.isNotEmpty(jcrContent.getProperty("cq:lastModified").getString())) {
					modified = jcrContent.getProperty("cq:lastModified").getString();
				}
			}

			
			if(orgDataNode.getParent().hasNode(Nodes.JCR_CONTENT.nodeType()) && orgDataNode.getParent().getNode(Nodes.JCR_CONTENT.nodeType()).hasProperty("cq:tags")) {
				Object[] tags = orgDataNode.getParent().getNode(Nodes.JCR_CONTENT.nodeType()).getProperty("cq:tags").getValues();
				TagManager tm = resourceResolver.adaptTo(TagManager.class);
				if (tags != null) {
					for (int i = 0; i < tags.length; i++) {
						String tagValue = ((Value) tags[i]).getString();
						Tag tag = tm.resolve(tagValue);
						if(tag!=null) {
							if(keywords.length()>0) keywords+= ",";
							keywords+= tag.getTitle();
						}
					}
				}
			}
		}
	}
} catch (Exception ex) {
	log.error("unable to get metadata from organisation", ex);
}


//Try to get the service metadata
try {
	String dataPage = Utils.getConfigurationProperty("serviceDataPage", configPage);
	String renderer = Utils.getConfigurationProperty(String.format("serviceRendererPage_%s", lang), configPage);
	renderer = renderer.replace("<base>","").replace("<dept>","").replace("<dept_alt>","");
	if(renderer.contains("/")) renderer = renderer.substring(renderer.lastIndexOf("/"));
	if (selectors.length>0 && Utils.isNotEmpty(dataPage) && currentPage.getPath().contains(renderer)) {
		String servicesId = properties.get("servicesId", selectors[0]);
		String itemPath = String.format("%s/%s/serviceinfo/",dataPage , servicesId);
		Node serviceDataNode =	WCMUtils.getNode(resourceResolver.getResource(itemPath));
		if(serviceDataNode!=null) {
			if (serviceDataNode.hasProperty("SERVICENAME" + langSuffix2) &&	 Utils.isNotEmpty(serviceDataNode.getProperty("SERVICENAME" + langSuffix2).getString())) {
				title = serviceDataNode.getProperty("SERVICENAME" + langSuffix2).getString();
			}
			if (serviceDataNode.hasProperty("SERVICEOVERVIEW" + langSuffix2) &&	 Utils.isNotEmpty(serviceDataNode.getProperty("SERVICEOVERVIEW" + langSuffix2).getString())) {
				description = serviceDataNode.getProperty("SERVICEOVERVIEW" + langSuffix2).getString();
			}		 
			if (serviceDataNode.hasProperty("SERVICECREATIONDATE") &&	 Utils.isNotEmpty(serviceDataNode.getProperty("SERVICECREATIONDATE").getString())) {
				created = serviceDataNode.getProperty("SERVICECREATIONDATE").getString();
				modified = serviceDataNode.getProperty("SERVICECREATIONDATE").getString();
			} 
			if (serviceDataNode.hasProperty("SERVICEMODIFICATIONDATE") &&	 Utils.isNotEmpty(serviceDataNode.getProperty("SERVICEMODIFICATIONDATE").getString())) {
				modified = serviceDataNode.getProperty("SERVICEMODIFICATIONDATE").getString();
			}		
			
			if(serviceDataNode.getParent().hasNode(Nodes.JCR_CONTENT.nodeType()) && serviceDataNode.getParent().getNode(Nodes.JCR_CONTENT.nodeType()).hasProperty("cq:tags")) {
				Object[] tags = serviceDataNode.getParent().getNode(Nodes.JCR_CONTENT.nodeType()).getProperty("cq:tags").getValues();
				TagManager tm = resourceResolver.adaptTo(TagManager.class);
				if (tags != null) {
					for (int i = 0; i < tags.length; i++) {
						String tagValue = ((Value) tags[i]).getString();
						Tag tag = tm.resolve(tagValue);
						if(tag!=null) {
							if(keywords.length()>0) keywords+= ",";
							keywords+= tag.getTitle();
						}
					}
				}
			}
		}
	}
} catch (Exception ex) {
	log.error("unable to get metadata from service", ex);
}


//Try to get the news article metadata
try {
		String[] newsTypes = { "newsArticle", "publicAlert", "mediaAdvisory" };
		for (String newsType : newsTypes) {
			String dataPage = Utils.getConfigurationProperty(String.format("%sDataPage", newsType), configPage);
			if (selectors.length>2 && Utils.isNotEmpty(dataPage)) {
				String itemPath = String.format("%s/%s/%s/%s", dataPage, selectors[0], selectors[1], selectors[2]);
				Page newsItemPage = pageManager.getPage(itemPath);
				if(newsItemPage!=null) {
					ValueMap props = newsItemPage.getProperties();
					GregorianCalendar onTime = (GregorianCalendar) props.get("onTime");
					if(onTime!=null) created = onTime.getTime().toString();
					title = props.get(lang + "Title", title);
					description = props.get(lang + "Description", description);

					
		
					Object[] tags = (Object[]) props.get(lang + "Department");
					TagManager tm = resourceResolver.adaptTo(TagManager.class);
					if (tags != null) {
						for (int i = 0; i < tags.length; i++) {
							Tag tag = tm.resolve((String) tags[i]);
							if(tag!=null) {
								if(keywords.length()>0) keywords+= ",";
								keywords+= tag.getTitle();
							}
						}
					}
				}
			}
		}
} catch (Exception ex) {
	log.error("unable to get metadata from news article", ex);
}

//Try to get the multimedia metadata
try {
	if (selectors.length>3) {
		int sc = selectors.length;
		String selectorPath = String.format("%s/%s/%s.%s", selectors[sc - 4], selectors[sc - 3], selectors[sc - 2],selectors[sc - 1]);
		String itemPath = "/content/dam/gnb/multimedia/" + selectorPath;
		Node assetNode = WCMUtils.getNode(resourceResolver.getResource(itemPath));

		if(assetNode!=null) {
			Node jcrNode = assetNode.getNode(Nodes.JCR_CONTENT.nodeType());
			Node metadata = jcrNode.getNode(CustomNodes.METADATA.nodeName());
			if(metadata!=null) {;
					if(lang.equals("en") ) {
						if(metadata.hasProperty(Multimedia.TITLE_E.toString())) {
							title = description =metadata.getProperty(Multimedia.TITLE_E.toString()).getString(); 
						}					 
					} else {
						if(metadata.hasProperty(Multimedia.TITLE_F.toString())) {
							title = description =metadata.getProperty(Multimedia.TITLE_F.toString()).getString(); 
						}					 
					}
					if(metadata.hasProperty(Multimedia.NEW_DATE.toString())) {
						created = modified =metadata.getProperty(Multimedia.NEW_DATE.toString()).getString(); 
					}
					
					if(metadata.hasProperty("cq:tags")) {		 
							Object[] tags = metadata.getProperty("cq:tags").getValues();
							TagManager tm = resourceResolver.adaptTo(TagManager.class);
							if (tags != null) {
								for (int i = 0; i < tags.length; i++) {
									String tagValue = ((Value) tags[i]).getString();
									Tag tag = tm.resolve(tagValue);
									if(tag!=null) {
										if(keywords.length()>0) keywords+= ",";
										keywords+= tag.getTitle();
									}
								}
							}
					}
			}
		}
	}
} catch (Exception ex) {
	log.error("unable to get metadata from multimedia asset", ex);
}







%>

<%@page import="java.util.Locale"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Multimedia"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="com.t4g.cnb.enums.Nodes"%><head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta http-equiv="keywords" content="<%= keywords %>">
		<meta http-equiv="description" content="<%= description %>">
		<meta http-equiv="title" content="Keehwan Jee">
		<meta http-equiv="created" content="<%=created %>">
		<meta http-equiv="modified" content="<%=modified %>">

		<meta http-equiv="language" content="<%=lang %>">
		<meta http-equiv="coverage" content="<%=properties.get("gnbCoverage","") %>">
		<meta http-equiv="publisher" content="<%=properties.get("gnbPublisher","") %>">
		
		<cq:include script="/apps/gnb/init/init.jsp"/>
		<script type="text/javascript" src="/etc/designs/gnb/js/jquery-1.3.2.js"></script>
		<script src="/etc/designs/gnb/js/jquery.tabs.js" type="text/javascript"></script>
		<script type="text/javascript" src="http://cloud.github.com/downloads/malsup/cycle/jquery.cycle.all.2.72.js"></script>
		<script src="/etc/designs/gnb/js/jquery-ui-1.7.2.custom.min.js" type="text/javascript"></script>
		<script src="/etc/designs/gnb/js/jquery.validate.js" type="text/javascript"></script>
		<script src="/etc/designs/gnb/js/jquery.cookie.js" type="text/javascript"></script>
		<script type='text/javascript' src='http://www.google.com/jsapi'></script>


		<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#username=commnb"></script>
		<% currentDesign.writeCssIncludes(out); %>
		<link rel="stylesheet" href="/etc/designs/gnb/styles/print.css" type="text/css" media="print" />
		<title><%= title %></title>

<script type="text/javascript">
	google.load('visualization', '1', {packages:['orgchart']}); 

	jQuery(document).ready(function($)
	{
		$('#mainnav a:has(br)').add('#departmentNav a:has(br)').css({
			'font-size': '85%',
			'line-height': '1.07em',
			'height': '34px',
			'padding-top': '6px'
		});

		$('div.table table').attr("border","0");
	});
</script>
</head>