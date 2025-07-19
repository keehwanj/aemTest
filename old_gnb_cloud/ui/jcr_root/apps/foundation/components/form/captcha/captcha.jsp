<%--
  Copyright 1997-2008 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Title component.

  Draws a title either store on the resource or from the page

--%><%@include file="/libs/wcm/global.jsp" %>
<%@ page import="java.io.IOException,
   com.day.cq.wcm.foundation.forms.FormsHelper,
   com.day.cq.wcm.foundation.forms.LayoutHelper"%><%

    final String title = FormsHelper.getTitle(resource, "Captcha");
    final boolean required = FormsHelper.isRequired(resource);
    String buttonTitle = properties.get("buttonTitle", "refresh");

%>
<script type="text/javascript">
    var captchaStartTime = 0;

    function captchaRefresh() {
        var captchakey = ("" + Math.random()).substring(3, 8);
        var captchaimg = document.getElementById("cq_captchaimg");
        var captchakeyelem = document.getElementById("cq_captchakey");
        captchaimg.src = captchaimg.src.split("?")[0] + "?id=" + captchakey;
        captchakeyelem.value = captchakey;
        captchaStartTime = new Date().getTime();
    }

    function captchaTimer() {
        var now = new Date().getTime();
        if ((now - captchaStartTime) > 60000) {
            captchaRefresh();
        }
        var captchatimer = document.getElementById("cq_captchatimer");
        var width = Math.floor((60000 - (now - captchaStartTime)) / 60000 * 64);
        captchatimer.innerHTML = "<div class=\"form_captchatimer_bar\" style=\"width:" + width + "px;\"></div>";
        window.setTimeout("captchaTimer()", 500);
    }
</script>
<input type="hidden" name=":cq:captchakey" id="cq_captchakey" value=""/>

<div class="form-group form_row row">
	<div class="col-sm-4 control-label">
    	<% LayoutHelper.printTitle(":cq:captcha", title, required, out); %>
	</div>

    <div class="form_rightcol col-sm-8">

        <div class="row">
        	<div class="form_captcha_input col-sm-5">
            	<input type="text" name=":cq:captcha" class="geo form-control input-sm"/>
        	</div>
        	<div class="form_captcha_img col-sm-3">
            	<img id="cq_captchaimg" src="<%= resource.getPath() %>.captcha.png?id=123" alt="">
        	</div>
        	<div class="form_captcha_refresh col-sm-4">
            	<input type="button" onclick="captchaRefresh()" value="<%=buttonTitle%>" class="geo btn btn-danger">
        	</div>
        </div>

    </div>

</div>

<div class="form_row form-group row">
	<div class="col-sm-5 control-label">
   		<% LayoutHelper.printTitle("cq_captcha", null, false, out); %>
   	</div>

   	<div class="form_rightcol col-sm-7">
       	<div id="cq_captchatimer" class="form_captchatimer"></div>
   	</div>
</div>

<script type="text/javascript">
        captchaTimer();
</script>

<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-8">
	<%
    LayoutHelper.printErrors(slingRequest, ":cq:captcha", out);
	%>
  </div>
</div>


<script>        
$(document).ready(function(){
	$('.captcha  label').each(function(){
    	var len=$(this).text().length
        if(len<=1){
			$(this).css("display","none")
        }
	});
});
</script>