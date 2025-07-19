<%@include file="/libs/foundation/global.jsp"%>
<%@page session="false" contentType="text/html; charset=utf-8" %><%
%><%@ page import="com.day.cq.wcm.api.WCMMode" %><%
%><%@taglib prefix="cq" uri="http://www.day.com/taglibs/cq/1.0" %>
<%@page import="java.util.Locale"%>
<cq:defineObjects/>
<%
    // Set the page default properties if they are not already set
    // This should hapen in the cq:Page constructor but I don't know how to do that
    if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
      Locale locale = currentPage.getLanguage(true);

        if(properties.get("constructed", "")=="") {
          currentNode.setProperty("constructed",true);
          /**removed this part by Keehwan
          currentNode.setProperty("gnbCoverage","7005799 New Brunswick (province)");
          currentNode.setProperty("gnbPublisher","Government of New Brunswick, Canada");
          if (locale != null && locale.getLanguage().equalsIgnoreCase("fr")) {
            currentNode.setProperty("gnbCoverage","7005799 Nouveau-Brunswick (province)");
            currentNode.setProperty("gnbPublisher","Gouvernement du Nouveau-Brunswick, Canada");
            }//end of if
            **/
          Property created = currentNode.getParent().getProperty("jcr:created");
          if(created!=null) {
              currentNode.setProperty("gnbCreated",created.getValue().getDate());
            }//end of if
        }//end of if 

        if(locale !=null) {
            currentNode.setProperty("jcr:language",locale.toString());
            currentNode.setProperty("language",locale.getISO3Language() + "-CA");

            //added this part by Keehwan  
            String en_text="Government of New Brunswick, Canada";
            String fr_text="Gouvernement du Nouveau-Brunswick, Canada";
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
                    currentNode.setProperty("gnbPublisher","Government of New Brunswick, Canada");    
                }
                if(gnbPublisher_text.equals(fr_text)){
                    currentNode.setProperty("gnbPublisher","Government of New Brunswick, Canada");    
                }
            }

            if (locale != null && locale.getLanguage().equalsIgnoreCase("fr")) {
                currentNode.setProperty("gnbCoverage","7005799 Nouveau-Brunswick (province)");  
                          
                if(gnbPublisher_text==""){
                    currentNode.setProperty("gnbPublisher","Gouvernement du Nouveau-Brunswick, Canada");    
                }
                if(gnbPublisher_text.equals(en_text)){
                    currentNode.setProperty("gnbPublisher","Gouvernement du Nouveau-Brunswick, Canada");    
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


%><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    
<cq:include script="stats.jsp"/>

<cq:include script="head.jsp"/>
<cq:include script="body.jsp"/>

<script src="/etc/designs/gnb/js/tracking_dam_v4.js" type="text/javascript" ></script>
<%
Locale locale = currentPage.getLanguage(true);    
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

</html>