<%@include file="/libs/wcm/global.jsp" %>
<body id="multimedia">
    <div id="container">
        <cq:include script="globalNav.jsp"/>
        <div id="main_content_wrapper">
            <cq:include script="pageHeader.jsp"/>
            <div id="media_content">
                    <cq:include path="media_component_content" resourceType="gnb/components/content/mediainfo" />                               
            </div>
        </div>
        <cq:include script="pageFooter.jsp"/>
    </div>
   
</body>
