<%@include file="/libs/wcm/global.jsp" %>
<body>
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
</body>

