<%--
  ==============================================================================

  Services Search component

  Draws the search form and evaluates a query

--%>
<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>

<%@page import="com.t4g.cnb.utils.Utils"%>
<%
    // Get language and content bundle for that language
    String lang = "fr";
    Locale locale = currentPage.getLanguage(true);
    if ((locale==null) || (locale.getLanguage().equalsIgnoreCase("en"))){
        lang="en";
    }
    
    // Account for localized images
    String imagePath = "/etc/designs/enb/images/";
    String localizedImagePath = imagePath;
    if (lang=="fr") {
        localizedImagePath += "fr/";
    }
    String inputValue="";
    if(Utils.isNotEmpty(request.getParameter("q"))) {
        inputValue = request.getParameter("q");
        //for xss attacks
		inputValue = xssAPI.encodeForHTML(inputValue);   
        
        //for french accent issues      
        inputValue = new String(inputValue.getBytes("UTF-8"), "UTF-8");         
        inputValue = inputValue.replace("À","&#192;"); 
        inputValue = inputValue.replace("Â","&#194;");         
        inputValue = inputValue.replace("Ä","&#196;");      
        inputValue = inputValue.replace("È","&#200;");              
        inputValue = inputValue.replace("É","&#201;");              
        inputValue = inputValue.replace("Ê","&#202;");              
        inputValue = inputValue.replace("Ë","&#203;");              
        inputValue = inputValue.replace("Î","&#206;");              
        inputValue = inputValue.replace("Ï","&#207;");              
        inputValue = inputValue.replace("Ô","&#212;");              
        inputValue = inputValue.replace("Œ","&#140;");              
        inputValue = inputValue.replace("Ù","&#217;");              
        inputValue = inputValue.replace("Û","&#219;");              
        inputValue = inputValue.replace("Ü","&#220;");              
        inputValue = inputValue.replace("Ÿ","&#159;");              

        inputValue = inputValue.replace("à","&#224;"); 
        inputValue = inputValue.replace("â","&#226;");         
        inputValue = inputValue.replace("ä","&#228;");      
        inputValue = inputValue.replace("è","&#232;");              
        inputValue = inputValue.replace("é","&#233;");              
        inputValue = inputValue.replace("ê","&#234;");              
        inputValue = inputValue.replace("ë","&#235;");        

        inputValue = inputValue.replace("ì","&#236;");               
        
        inputValue = inputValue.replace("î","&#238;");              
        inputValue = inputValue.replace("ï","&#239;");              
        inputValue = inputValue.replace("ô","&#244;");              
        inputValue = inputValue.replace("œ","&#156;");              
        inputValue = inputValue.replace("ù","&#249;");              
        inputValue = inputValue.replace("û","&#251;");              
        inputValue = inputValue.replace("ü","&#252;");              
        inputValue = inputValue.replace("ÿ","&#255;");            

        inputValue = inputValue.replace("Ç","&#199;");            
        inputValue = inputValue.replace("ç","&#231;");            

        inputValue = inputValue.replace("«","&#171;");            
        inputValue = inputValue.replace("»","&#187;");       
        inputValue = inputValue.replace("€","&#128;");     
     
    }
%>
 <cq:setContentBundle language="<%=lang%>" />


<%if(lang=="fr") { %>
<script src="//www.google.com/jsapi" type="text/javascript"></script><br />
<script>
  (function() {
    var cx = '004686105439310941724:htfkrpmgd14';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>

<%}else{ %>
<script>
  (function() {
    var cx = '004686105439310941724:3leejyo91sk';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>
<%} %>

<div class="clearfloats"></div>