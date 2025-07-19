<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>

<%
int numberOfItems = Integer.parseInt(properties.get("numItems", "3"));
String nameOfAC = properties.get("name", "name");
String componentPath = componentContext.getResource().getPath();

String id = "ac_" + componentPath.substring(componentPath.lastIndexOf("/") + 1);


String first = properties.get("first", "false");

String[] sectionTitles = properties.get("sectionTitles", new String[0]);
boolean editMode = (WCMMode.fromRequest(request) == WCMMode.EDIT);
%>

<!--https://www.codeply.com/go/506qHaPe9M/bootstrap-4-accordion-collapse-icons-->
<!--START of ACCORDION-->
    <div id="<%= xssAPI.encodeForHTMLAttr(id) %>" class="accordion">
        <div class="card mb-0">
            <%for (int i = 0; i < numberOfItems; i++) {%>
            <div class="card-header collapsed" data-toggle="collapse" href="#collapse_<%= i %>_<%=nameOfAC%>">
                <a class="card-title">
                    <%= (sectionTitles.length > i) ? xssAPI.encodeForHTML(sectionTitles[i]) : "Section #" + (i + 1) %>
                </a>
            </div>
            <div id="collapse_<%= i %>_<%=nameOfAC%>" class="card-body collapse" data-parent="#<%= xssAPI.encodeForHTMLAttr(id) %>" >
                <p><cq:include path="<%= "accordion-par-" + i %>" resourceType="foundation/components/parsys" /></p>
            </div>
  			<%}%>


        </div>
    </div>
<!--END of ACCORDION-->