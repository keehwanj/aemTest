<%@include file="/libs/wcm/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="java.util.HashMap"%>
<%
HashMap<String,String> resources = new HashMap<String,String>();
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    resources.put("email","Email this page");
    resources.put("print","Print this page");
    resources.put("subscribe","Subscribe to this page");
    resources.put("share","Share");     
    
} else {
    resources.put("email","Envoyer cette page par courriel");
    resources.put("print","Imprimer cette page");
    resources.put("subscribe","S'inscrire à cette page");
    resources.put("share","Partager");        
}
 
%>
<script type="text/javascript">

  if(!addthis_config) {
      var addthis_config = {
         ui_language: "<%=lang%>",
         ui_click: "true"
    }
}
</script>
<div class="addthis_toolbox addthis_default_style">

    <a class="addthis_button" href="//www.addthis.com/bookmark.php?v=250&amp;username=commnb">
        <!--removed title attribute for accessibilty-->        
        <!--<img alt ="<%=resources.get("share")%>" title ="<%=resources.get("share")%>" src="http://s7.addthis.com/static/btn/v2/lg-share-<%=lang%>.gif" width="125" height="16" style="border:0"/>-->
        <!--<img alt ="<%=resources.get("share")%>1" src="//s7.addthis.com/static/btn/v2/lg-share-<%=lang%>.gif" width="125" height="16" style="border:0"/>-->
    </a>    

    <!--<a class="addthis_button_email" title ="<%=resources.get("email")%>">&nbsp;<%=resources.get("email") %></a>-->

    <!--<a class="addthis_button_print" title ="<%=resources.get("print")%>">&nbsp;<%=resources.get("print") %></a>-->

</div>
