<%@include file="/libs/wcm/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="java.util.HashMap"%>
<%

String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    } 

%>


<div class="addthis_toolbox addthis_default_style">
    <a class="addthis_button" 
        href="http://www.addthis.com/bookmark.php?v=250&amp;pub=xa-4a561e854c66a32d" 
        onmouseover="return addthis_open(this, '', '[URL]', '[TITLE]')" 
        onmouseout="addthis_close()" onclick="return addthis_sendto()">
        <img src="http://s7.addthis.com/static/btn/v2/lg-share-<%=lang%>.gif" 
        width="125" height="16" style="border:0"/>
    </a>
    <script type="text/javascript" 
        src="http://s7.addthis.com/js/250/addthis_widget.js?pub=xa-4a561e854c66a32d">
    </script>
</div>