<%@include file="/libs/wcm/global.jsp" %>
<body>
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PKZVLJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PKZVLJ');</script>
<!-- End Google Tag Manager -->

    <div id="container" class="<%= properties.get("fontColor","") %>">
<%   
/* Hiding gloval navagation*/
boolean hideTop = properties.get("hideTop",false);
if(!hideTop) {

%>
       <cq:include script="globalNav.jsp"/>
<%
}
%>        
        <div id="header">
            <div id="headerContent">          
              <cq:include path="headercontent" resourceType="foundation/components/iparsys" />      
            </div> 
        </div> 

        <div id="contentArea">
            <div id="content">
                <div id="mainContent" class="<%= currentPage.getTemplate().getName()%>">
                    <cq:include path="maincontent" resourceType="foundation/components/parsys" />                                         

<%   
/* Hiding Footer tool*/
boolean hideFooter = properties.get("hideFooter",false);
if(!hideFooter) {
%>

                <cq:include path="footerToolbar" resourceType="bitp/components/tools/footertools"/>  
<%
}
%> 
                </div>      
                <div class="clearfloat"></div>
            </div> 
        </div> 
       
        <div id="footer">
  
            <div id="footerContent">
                <cq:include path="footercontent" resourceType="foundation/components/iparsys" />
            </div> 
        </div> 
    </div>  
<script src="/etc/designs/gnb/js/tracking_dam_v4.js" type="text/javascript" ></script>    
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-25455870-1', 'auto');
  ga('send', 'pageview');

</script>    
</body>

