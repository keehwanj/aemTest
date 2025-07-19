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
    resources.put("smaller","Make font smaller");
    resources.put("normal","Make font normal");
    resources.put("bigger","Make font bigger");
    resources.put("share","Share");      
    resources.put("data_ga_property","UA-17231199-1");         

} else {
    resources.put("email","Envoyer cette page par courriel");
    resources.put("print","Imprimer cette page");
    resources.put("subscribe","S'inscrire à cette page");
    resources.put("smaller","Faire le jeu de caract&egrave;res plus petit");
    resources.put("normal","Faire le jeu de caract&egrave;res normal");
    resources.put("bigger","Faire le jeu de caract&egrave;res plus grand");
    resources.put("share","Partager");    
    resources.put("data_ga_property","UA-17266347-1");             
}

%>
<script src="/etc/designs/gnb/js/styleswitcher.js" type="text/javascript"></script>
<script type="text/javascript">
  var addthis_config = {
     ui_language: "<%=lang%>",
     ui_click: "true",
      //data_ga_property: "<%=resources.get("data_ga_property")%>"    
}
</script> 
<%   
boolean hideTitle = properties.get("hideTitle",false);
if(!hideTitle) {
%>
<div class="addthis_toolbox addthis_default_style">
    <div id="styleswitcher">
        <a title="<%=resources.get("smaller")%>" onclick="setActiveStyleSheet('smaller'); return false;" href="#">
            <span class="smaller"><%=resources.get("smaller")%></span>
        </a>
        <a title="<%=resources.get("normal")%>" onclick="setActiveStyleSheet('normal'); return false;" href="#">
            <span class="normal"><%=resources.get("normal")%></span>
        </a>
        <a title="<%=resources.get("bigger")%>" onclick="setActiveStyleSheet('bigger'); return false;" href="#">
            <span class="bigger"><%=resources.get("bigger")%></span>
        </a>       
    </div>

    <a title ="<%=resources.get("email")%>" class="addthis_button_email"></a>

    <a title ="<%=resources.get("print")%>" class="addthis_button_print"></a>

    <a href="//www.addthis.com/bookmark.php?v=250&amp;username=commnb">
        <!--removed title attribute for accessibilty-->
        <!--<img alt="<%=resources.get("share")%>" title="<%=resources.get("share")%>" src="http://s7.addthis.com/static/btn/v2/lg-share-<%=lang%>.gif" width="125" height="16" style="border:0"/>-->
        <img alt="<%=resources.get("share")%>" src="//s7.addthis.com/static/btn/v2/lg-share-<%=lang%>.gif" width="125" height="16" style="border:0"/>
    </a>    

</div>
<%
}
%>
<div class="\clearfloat"></div>