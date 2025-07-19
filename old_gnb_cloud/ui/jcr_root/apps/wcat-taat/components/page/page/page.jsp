<%@include file="/libs/foundation/global.jsp" %>
<%@page session="false" contentType="text/html; charset=utf-8" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %>
<%@page import="java.util.Locale"%>
<cq:defineObjects/>
<%
    // Set the page default properties if they are not already set
    // This should hapen in the cq:Page constructor but I don't know how to do that
    if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
      Locale locale = currentPage.getLanguage(true);

        if(properties.get("constructed", "")=="") {
          currentNode.setProperty("constructed",true);

          Property created = currentNode.getParent().getProperty("jcr:created");
          if(created!=null) {
              currentNode.setProperty("gnbCreated",created.getValue().getDate());
            }//end of if
        }//end of if 

        if(locale !=null) {
            currentNode.setProperty("jcr:language",locale.toString());
            currentNode.setProperty("language",locale.getISO3Language() + "-CA");

            //added this part by Keehwan  
            String en_text="Workers Compansation Appeals Trubunal";
            String fr_text="Workers Compansation Appeals Trubunal_F";
            String gnbPublisher_text=properties.get("gnbPublisher","");
            String title=properties.get("jcr:title","");

            String description=properties.get("jcr:description","");
            //checking jcr:description, if blank, take title as default
            if(description.equals("")){
                currentNode.setProperty("jcr:description",title);    
            }


            if (locale != null && locale.getLanguage().equalsIgnoreCase("en")) {
                currentNode.setProperty("gnbCoverage","7005799 New Brunswick (province)");

                if(gnbPublisher_text==""){
                    currentNode.setProperty("gnbPublisher","Workers Compansation Appeals Trubunal");    
                }
                if(gnbPublisher_text.equals(fr_text)){
                    currentNode.setProperty("gnbPublisher","Workers Compansation Appeals Trubunal");    
                }
            }

            if (locale != null && locale.getLanguage().equalsIgnoreCase("fr")) {
                currentNode.setProperty("gnbCoverage","7005799 Nouveau-Brunswick (province)");  

                if(gnbPublisher_text==""){
                    currentNode.setProperty("gnbPublisher","Workers Compansation Appeals Trubunal_F");    
                }
                if(gnbPublisher_text.equals(en_text)){
                    currentNode.setProperty("gnbPublisher","Workers Compansation Appeals Trubunal_F");    
                }
            }

        }

        currentNode.save();
    }//end of if


    // read the redirect target from the 'page properties' and perform the
    // redirect if WCM is disabled.
    String location = properties.get("redirectTarget", "");
    if ((WCMMode.fromRequest(request) == WCMMode.DISABLED || WCMMode.fromRequest(request) == WCMMode.PREVIEW) && location.length() > 0) {
        // check for recursion
        if (!location.equals(currentPage.getPath())) {
            if(location.startsWith("http")||location.startsWith("https")||location.endsWith(".pdf")) {//Keehwan added '||location.endsWith("pdf")'
                response.sendRedirect(location);
            } else {
              if(location.contains("?")) {
                response.sendRedirect(request.getContextPath() + location.replace("?",".html?"));   
              } else if(location.contains("#")) {
                response.sendRedirect(request.getContextPath() + location.replace("#",".html#"));                 
              } else {
                response.sendRedirect(request.getContextPath() + location + ".html");
              }
            }
        } else {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
        return;
    }


%>
<%
String lang = "en";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
	lang = "fr";
    }//end of inner if
%>
<!DOCTYPE html>
<html lang="<%=lang%>">
	<cq:include script="head.jsp"/>
	<cq:include script="body.jsp"/>
</html>