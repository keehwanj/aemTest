<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%
String title		=properties.get("title","input title");
String description	=properties.get("description","input description");

String type			=properties.get("type","wrapper-forest");

%>
<!--Start of Hero-->
<header class="hero <%=type%>">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-white"><%=title%></h1>
                <p class="lead text-white"><%=description%></p>
            </div>
        </div>
    </div>
</header>
<!--END of Hero-->