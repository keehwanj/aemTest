<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="com.day.cq.wcm.api.components.DropTarget" %>
<cq:include script="init.jsp"/>
<%WCMMode mode = WCMMode.fromRequest(request);%>

<%if (mode == WCMMode.EDIT) {    
    String ddClassName = DropTarget.CSS_CLASS_PREFIX + "pages";
%>
  <div class="<%= ddClassName %>">
<%}%>
    <div id="secondarynav-pos">
        <cq:include script="<%= "secondarynav_default.jsp" %>"/>
    </div>
<% if (mode == WCMMode.EDIT) {%>
    </div>
<%}%>
