<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="org.apache.commons.lang3.math.NumberUtils"%>


<%

String oppositeUrl = "/";
String oppositePageNew = "";
String linkText = "Fran&ccedil;ais";

String langSuffix = "FRE";
Locale lang = currentPage.getLanguage(false);
if(lang!=null && lang.getLanguage()=="fr") {
    linkText = "English";
    langSuffix = "";


}
try {
WCMMode mode = WCMMode.fromRequest(request);
    if (mode == WCMMode.EDIT) {
    String setting = properties.get("oppositePage","/");

    if(!setting.equals("/")) {
        Page oppositePage = pageManager.getPage(setting);
        if(oppositePage!=null) {
            Node oppositeNode = oppositePage.adaptTo(Node.class);
            if(oppositeNode!=null && oppositeNode.hasNode("jcr:content")) {
                if(!oppositeNode.getNode("jcr:content").hasNode("globalNav")) {
                    oppositeNode.getNode("jcr:content").addNode("globalNav");
                    oppositeNode.save();
                }
                if(!oppositeNode.getNode("jcr:content").getNode("globalNav").hasNode("languageSwitcher")) {
                    oppositeNode.getNode("jcr:content").getNode("globalNav").addNode("languageSwitcher");
                    oppositeNode.save();
                }
                Node langSwitcher = oppositeNode.getNode("jcr:content").getNode("globalNav").getNode("languageSwitcher");
                langSwitcher.setProperty("oppositePage",currentPage.getPath());
                langSwitcher.save();
            }
        }
    }
    }
}
catch (Exception ex) {

    log.error(ex.getMessage());
}

//climb up the hierarchy looking for an oppositePage property
//of the languageSwitcherNode and stop when we find one
try{
    Page myPage = currentPage;
    while (myPage != null) {
        Node myNode = myPage.adaptTo(Node.class);
        if(myNode!=null && myNode.hasNode("jcr:content") &&  myNode.getNode("jcr:content").hasNode("globalNav") && myNode.getNode("jcr:content").getNode("globalNav").hasNode("languageSwitcher")) {
            Property prop = myNode.getNode("jcr:content").getNode("globalNav").getNode("languageSwitcher").getProperty("oppositePage");
            if(prop!=null && prop.getValue()!=null) {
                String oppositePage = (String) prop.getValue().getString();
                if ((oppositePage != null) && (!oppositePage.equals("")) && (!oppositePage.equals("undefined"))) {
                    if(Utils.isNotEmpty(slingRequest.getRequestPathInfo().getSelectorString())) {

                        //New code in order to add proper title content into selectors(2020-12-16)
                        String strs[]=slingRequest.getRequestPathInfo().getSelectors();
                        //checking 1)first selector is numberic, 2) the no of selector ==2, 3) url contains "services/services_renderer"
                        //if(NumberUtils.isParsable(strs[0])&&strs.length==2 && currentNode.getParent().getPath().contains("services/services_renderer")){
                        if(currentNode.getParent().getPath().contains("services/services_renderer") && NumberUtils.isParsable(strs[0]) && strs.length==2){
                            Resource res= resourceResolver.getResource("/content/data/services/"+strs[0]);
                            Node node = res.adaptTo(Node.class);
                            Node serviceDataNode = node.getNode("serviceinfo");
               				String title = ""; 
                            if (serviceDataNode.hasProperty("SERVICENAME"+langSuffix) ) { 
								title = serviceDataNode.getProperty("SERVICENAME"+langSuffix).getString();
                                String titleUnder = title.replace(" ","_");
                     			titleUnder = titleUnder.replace("’","_");  
                     			titleUnder = titleUnder.replace("'","_");  
                     			titleUnder = titleUnder.replace("’","_");
                     			titleUnder = titleUnder.replace("/","");
                     			//replace the accented characters with the html equiv. 
                     			titleUnder = titleUnder.replace("\u00C9","&#201;"); 
                     			titleUnder = titleUnder.replace("\u00E9","&#233;"); 
                     			titleUnder = titleUnder.replace("é","&#233;");  
                     			titleUnder = titleUnder.replace("\u00F4","&#244;");
                     			titleUnder = titleUnder.replace("\u00D4","&#212;");
                     			titleUnder = titleUnder.replace("\u00E8","&#232;");
                     			titleUnder = titleUnder.replace("\u00C8","&#200;");
                     			titleUnder = titleUnder.replace("\u00EE","&#238;");
                     			titleUnder = titleUnder.replace("\u00CE","&#206;");
                     			titleUnder = titleUnder.replace("\u00E0","&#224;");
                     			titleUnder = titleUnder.replace("\u00C7","&#199;");
                     			titleUnder = titleUnder.replace("\u00E7","&#231;");
                     			titleUnder = titleUnder.replace("\u00EA","&#234;");
                     			titleUnder = titleUnder.replace("\u00CA","&#202;");
                     			titleUnder = titleUnder.replace("\u00EB","&#235;");
                     			titleUnder = titleUnder.replace("\u00CB","&#203;");
                     			titleUnder = titleUnder.replace("\u00E2","&#226;");
                     			titleUnder = titleUnder.replace("\u00C2","&#194;");
                     			//replace the trademark tm character in the title 
                     			titleUnder = titleUnder.replace("\u2122","");                    
                     			//replace the squished oe character in the title 
                     			titleUnder = titleUnder.replace("\u0153","oe");
                     			//titleUnder = titleUnder.replace("œ","oe");
                     			//out.write("titleunder = " + titleUnder);
                     			//replace en dashes in the title with regular dashes  
                     			titleUnder = titleUnder.replace("\u2013","-"); 
                     			//replace left double curly quotes with nothing 
                     			titleUnder = titleUnder.replace("\u201C","");    
                     			//eliminate colons and semi-colons 
                     			titleUnder = titleUnder.replace(":","");  

                                //titleUnder = titleUnder.replace(";","");

                                //check to see if the string contains a final quote punctuation - if so, replace it with an underscore - sometimes used like apostrophes.  
                     			String titleNew = ""; 
                     			char[] c = titleUnder.toCharArray();
                     			for (int pos = 0; pos < c.length; pos++) {
                         			int type = Character.getType(c[pos]);
                         			if (type == 30) {
                            			titleNew = titleNew + "_";
                         			}else{
                            			titleNew = titleNew + c[pos]; 
                          			}
                     			}
                                //out.write(currentNode.getParent().getPath());
                                oppositeUrl = String.format("%s.%s.html",oppositePage,strs[0]+"."+titleNew);

                            }                           

                        }
                        else{
							oppositeUrl = String.format("%s.%s.html",oppositePage,slingRequest.getRequestPathInfo().getSelectorString());
                        }
                        //end of New code


                    } else {
                        oppositeUrl = String.format("%s.html",oppositePage);
                    }
                    break;
                }
            }
        }
        myPage = myPage.getParent();

    }
}
catch (Exception ex) {
    log.error("languageSwitcher encountered an error climbing the hierarchy",ex);
}
%>

<a href="<%=oppositeUrl%>"><%=linkText %></a>
