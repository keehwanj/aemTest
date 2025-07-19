<%@ include file="/libs/foundation/global.jsp" %>
<%@ page import="java.util.Locale"%>
<%@ page import="com.day.cq.search.QueryBuilder"%>
<%@ page import="java.util.Iterator"%>

<%
Locale locale = currentPage.getLanguage(true);

//finding the proper language
String lang = "en";  
String language="English";
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
    lang = "fr";
    language="French";
}


//querybuilder
QueryBuilder queryBuilder 	= resource.getResourceResolver().adaptTo(QueryBuilder.class);
Session localsession 		= resource.getResourceResolver().adaptTo(Session.class);
Iterator<Node> nodeIterator = null;

int tab=1;
String queryKey 			= "savedquery" + tab;
String queryLimitKey 		= "querylimit" + tab;

//getting titles from dialog
String damPath_t				=properties.get("damPath","damPath");
String damSize_t				=properties.get("damSize","damSize");
String noReferences_t			=properties.get("noReferences","noReferences");    

int queryLimit 				= 10000;

String show_entries 		= properties.get("show_entries", "100");
String idName 				= properties.get("idName", "damReference");
boolean one_header 			= properties.get("one_header", false);

%>
<table id="<%=idName%>" class="table table-striped table-bordered" style="width:100%">
	<thead>
    	<tr>
            <% if(one_header){ %>
            	<th style="width:100%"><%=damPath_t%></th>
            <% } else{ %>
            		<th style="width:80%"><%=damPath_t%></th>
            		<th style="width:13%"><%=damSize_t%></th>
            		<th style="width:7%"><%=noReferences_t%></th>
            <%}%>
		</tr>
	</thead>
	<tfoot>
    	<tr>
			<% if(one_header){ %>
            	<th><%=damPath_t%></th>
            <%} else{ %>
        		<th><%=damPath_t%></th>
            	<th><%=damSize_t%></th>
            	<th><%=noReferences_t%></th>
            <%}%>
		</tr>
	</tfoot>
	<tbody>



	</tbody>
</table>  
<script>
$(document).ready(function() {
    $('#<%=idName%>').DataTable( {

        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/<%=language%>.json",
            "decimal": ","
         },
        "iDisplayLength": <%=show_entries%>
    });
} );
</script>

image based culture

