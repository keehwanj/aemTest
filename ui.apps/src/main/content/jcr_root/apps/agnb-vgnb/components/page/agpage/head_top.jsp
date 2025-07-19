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
//2013-12-7, added by Keehwan Jee
//keywords =keywords+" , "+currentPage.getTitle();
//String keywords = "Connie Is Great!";

String description = properties.get("jcr:description",currentPage.getTitle());
String title = currentPage.getPageTitle() != null ? currentPage.getPageTitle() : currentPage.getTitle() !=null ? currentPage.getTitle() : currentPage.getName();
//START of NEW
if(keywords.equals("")||keywords==null){
    keywords=title;
}
//END of NEW
String created = properties.get("gnbCreated",properties.get("jcr:created",""));
String modified = properties.get("cq:lastModified",properties.get("gnbCreated",properties.get("jcr:created","")));

Page configPage =    Utils.getConfigurationPage(currentPage.getPageManager());
String[] selectors = slingRequest.getRequestPathInfo().getSelectors();

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
                    /**
                    String deptDataPage = Utils.getConfigurationProperty("cnbDepartmentMetadata", configPage);
                    String activePath = deptDataPage+"/active/"; 
                    String inactivePath = deptDataPage+"/inactive/"; 
                    **/
                    Object[] tags = (Object[]) props.get(lang + "Department");
                    TagManager tm = resourceResolver.adaptTo(TagManager.class);
                    if (tags != null) {
                        for (int i = 0; i < tags.length; i++) {
                            /**
                            String temp = (String)tags[i];
                            temp = temp.replace(":","/");
                            Tag tag = tm.resolve(activePath+temp);
                            if (tag == null) {
                              tag = tm.resolve(inactivePath+temp);
                            }
                            **/
                            String tagValue=(String)tags[i];
                            //out.write("tagValue :"+tagValue+"<br/>");

                            //Tag tag = tm.resolve((String) tags[i]);
                            Tag tag = tm.resolve(tagValue);


                            if(tag!=null) {
                                if(keywords.length()>0) keywords+= ",";
                                keywords+= tag.getTitle();
                            }
                            else{
								tagValue="in"+tagValue;
								tag = tm.resolve(tagValue);
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
            if(metadata!=null) {
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

                     if(metadata.hasProperty("dam:dept")) {        
                            Object[] tags = metadata.getProperty("dam:dept").getValues();
                            TagManager tm = resourceResolver.adaptTo(TagManager.class);
                            if (tags != null) {
                                for (int i = 0; i < tags.length; i++) {
                                    String tagValue = ((Value) tags[i]).getString();

                                    if (tagValue.contains(tagSuffix + ":org")) {
										Tag tag = tm.resolve(tagValue);
										if(tag!=null) {
                                        	if(keywords.length()>0) keywords+= ",";
                                        	keywords+= tag.getTitle();
                                    	}
            							else{
											tagValue = "in"+tagValue;
											tag = tm.resolve(tagValue);
                							if(tag!=null){
                								keywords+= tag.getTitle();
                							}
            							}
                                    }
                                }//end of for
                            }//end of if
                    }//end of if
            }
        }
    }
} catch (Exception ex) {
    log.error("unable to get metadata from multimedia asset", ex);
}
%>