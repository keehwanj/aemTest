<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>

<%
String image_path		=properties.get("image_path","/content/dam/gnb/Corporate/promo/hero.jpg");
String image_alt		=properties.get("image_alt","please enter image alt");
String image_caption	=properties.get("image_caption","Please input image caption");
%>

<!--Start of Responsive Image-->
<figure class="figure">
  <img src="<%=image_path%>" class="figure-img img-fluid rounded" alt="<%=image_alt%>">
  <figcaption class="figure-caption"><%=image_caption%></figcaption>
</figure>
<!--END of Responsive Image-->