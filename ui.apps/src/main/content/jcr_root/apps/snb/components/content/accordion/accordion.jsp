<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<!--START of JS for icon of ACCORDION-->
<script>
    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.in").each(function(){
        	$(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
        });

        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });
    });
</script>
<!--END of JS for icon of ACCORDION-->

<%
int numberOfItems = Integer.parseInt(properties.get("numItems", "3"));
String nameOfAC = properties.get("name", "name");
String componentPath = componentContext.getResource().getPath();

String id = "ac_" + componentPath.substring(componentPath.lastIndexOf("/") + 1);


String first = properties.get("first", "false");
String font_bold = properties.get("font_bold", "false");
String fontBold="";
if(font_bold.equals("true")){
    fontBold="font-bold";
}


String[] sectionTitles = properties.get("sectionTitles", new String[0]);
boolean editMode = (WCMMode.fromRequest(request) == WCMMode.EDIT);
%>

<!--START of ACCORDION-->
<div class="accordion" id="<%= xssAPI.encodeForHTMLAttr(id) %>">
	<%for (int i = 0; i < numberOfItems; i++) {%>
	<div class="panel-group" id="accordion">
		<div class="panel panel-default">
			<!--START of panel-heading-->
			<div class="panel-heading">
				<h4 class="panel-title <%=fontBold%>">
					<a data-toggle="collapse" data-parent="#<%= xssAPI.encodeForHTMLAttr(id) %>" href="#collapse_<%= i %>_<%=nameOfAC%>">
                    	<span class="glyphicon glyphicon-plus"></span> <%= (sectionTitles.length > i) ? xssAPI.encodeForHTML(sectionTitles[i]) : "Section #" + (i + 1) %>
                    </a>
				</h4>
			</div>
			<!--END of panel-heading-->
            <!--START of body-->
            <%if (first.equalsIgnoreCase("true")) {%>
				<div id="collapse_<%= i %>_<%=nameOfAC%>" class="panel-collapse collapse <%= (i == 0) ? "in" : "" %>">
            <%} else{%>
                <div id="collapse_<%= i %>_<%=nameOfAC%>" class="panel-collapse collapse %>">
            <%}%>  
				<div class="panel-body">
					<cq:include path="<%= "accordion-par-" + i %>" resourceType="foundation/components/parsys" />
				</div>
			</div>
            <!--END of body-->

        </div>
	</div>
	<%}%>
</div>
<!--END of ACCORDION-->


