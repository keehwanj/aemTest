<%@include file="/libs/foundation/global.jsp" %>
<%
String linkURL 		= properties.get("linkURL", "");
String content 		= properties.get("content", "");
String button_text 	= properties.get("button_text", "Enter");
%>


<form action="<%=linkURL%>.html" method="GET">
	<p><input type="checkbox" id="a" value="yes" name="a">&nbsp;&nbsp;<%=content%></p>
	<input type="submit" name="b" id="b" class="inputButton btn btn-default" disabled="disabled" value="<%=button_text%>">
</form>

<script>
var checker = document.getElementById('a');
var sendbtn = document.getElementById('b');
 // when unchecked or checked, run the function
checker.onchange = function(){
	if(this.checked){
    	sendbtn.disabled = false;
	} else {
    	sendbtn.disabled = true;
	}
}
</script>