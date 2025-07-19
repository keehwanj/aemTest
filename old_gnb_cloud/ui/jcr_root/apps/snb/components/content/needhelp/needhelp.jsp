<%@include file="/libs/foundation/global.jsp" %>
<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%
String title_text = properties.get("title_text", "Need help?");
String description_text = properties.get("description_text", "If you would like to speak to one of our customer service representative, please call:");
String phone_text = properties.get("phone_text", "1-888-762-8600");
String backgroundImage 	= properties.get("backgroundImage", "/etc/designs/snb-bootstrap/clientlibs/newImages/need-help-bgr.jpg");
%>
<!--needhelp-->
    <div class="needhelp" id="needhelp">
        <div class="col-lg-8 col-lg-offset-2 needhelp-text">

            <div class="col-lg-12 text-center title"><%=title_text%></div>


           <div class="col-lg-12 text-center description">
               <%=description_text%>
          </div>

           <div class="col-lg-12 text-center phone">
               <a href="tel:<%=phone_text%>"><%=phone_text%></a>
          </div>

        </div>
    </div>
<script>
    document.getElementById('needhelp').style.backgroundImage="url(<%=backgroundImage%>)"; 
</script>
<!--/needhelp-->
