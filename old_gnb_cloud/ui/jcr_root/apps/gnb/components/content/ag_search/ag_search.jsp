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

%>
 <cq:setContentBundle language="<%=lang%>" />


<%if(lang=="fr") { %>
<script>
  (function() {
    var cx = '004686105439310941724:21zvufs8l-e';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>

<%}else{ %>
<script>
  (function() {
    var cx = '004686105439310941724:piolaswipd4';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>
<%} %>

<div class="clearfloats"></div>