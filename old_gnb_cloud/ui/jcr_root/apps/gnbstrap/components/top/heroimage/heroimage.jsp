<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%
String title		=properties.get("title","input title");
String description	=properties.get("description","input description");

String type			=properties.get("type","background");

String fileReference		=properties.get("fileReference","").trim();

%>
<!--Start of HeroImage-->
<%if(fileReference==""){%>
<header class="hero-image" style="<%=type%>: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))">
<%} else{%>
<header class="hero-image" style="<%=type%>: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(<%=fileReference%>)">
<%}%>    
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="display-1"><%=title%></h1>
                <p class="lead"><%=description%></p>
            </div>
        </div>
    </div>
</header>

<!--END of HeroImage-->