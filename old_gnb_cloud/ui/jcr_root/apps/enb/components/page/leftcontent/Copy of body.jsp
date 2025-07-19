<%@include file="/libs/foundation/global.jsp"%>
<body id="leftContent">
    <div id="container">
        <cq:include script="globalNav.jsp"/>
        <div id="main_content_wrapper">
            <cq:include script="pageHeader.jsp"/>

            <div id="sidebar">
            <%if(currentPage.getDepth()!=3) { %>
                <div id="pageToolbar">
                    <cq:include path="pageToolbar" resourceType="gnb/components/tools/pagetools"/>
                </div>
            <%} %>    
                <cq:include path="secondaryNav_ipar" resourceType="foundation/components/iparsys"/>
                <cq:include path="secondaryContent_par" resourceType="foundation/components/parsys"/>
            </div>
            <div id="mainContent">
                <div id="leftcontentwrapper">
                    <%
                    boolean hideTitle = properties.get("hideTitle",false);
                    if(!hideTitle) {
                        out.write("<div class=\"pageHeader\"><h1>");
                        out.write(currentPage.getTitle());
                        out.write("</h1></div>");
                    }
                    %>
                    
                    <cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
                    </div>
            </div>
            <div class="clearfloat" /></div>
        <cq:include script="pageFooter.jsp"/>
    </div>
</div>
</body>
