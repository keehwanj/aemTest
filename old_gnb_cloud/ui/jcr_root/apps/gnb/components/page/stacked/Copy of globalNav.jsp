<%@include file="/libs/wcm/global.jsp" %>
 <div id="header">
    <div id="logoArea">
        <cq:include path="logo" resourceType="gnb/components/navigation/logo"/>
    </div>
<%/* Hiding gloval navagation
boolean hideTitle = properties.get("hideTitle",false);
if(!hideTitle) {
*/
%>
     <div id="topRightNav">

        <cq:include path="keywordsearch" resourceType="gnb/components/search/keywordsearch"/>
     </div>
<%
/*}*/
%>


<%/* Hiding gloval navagation
if(!hideTitle) {
*/
%>

     <div id="topCentreNav">
        <cq:include path="globalNav" resourceType="gnb/components/navigation/globalnav"/>
     </div>
<%
/*}*/
%>

 </div>
<div id="heightDivDep"></div><div id="heightDivCat"></div>