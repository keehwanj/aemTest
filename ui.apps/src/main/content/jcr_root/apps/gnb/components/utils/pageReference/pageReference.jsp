<%@ include file="/libs/foundation/global.jsp" %>
<%@ page import="java.util.Locale"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>
<%@ page import="com.day.cq.search.Query"%>
<%@ page import="com.day.cq.search.result.SearchResult"%>
<%@ page import="com.day.cq.wcm.commons.ReferenceSearch" %>
<%@ page import="java.util.Collection" %>
<%@ page import="javax.jcr.Node" %>
<%@ page import="java.util.Map" %>
<%@ page import="com.day.cq.search.QueryBuilder"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="com.day.cq.dam.api.Asset"%>
<%@ page import="com.day.cq.commons.jcr.JcrConstants"%>

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
String pagePath_t				=properties.get("pagePath","Path");
String pageSize_t				=properties.get("pageSize","Size");
String noReferences_t			=properties.get("noReferences","No. References");    


int queryLimit 				= 10000;

String show_entries 		= properties.get("show_entries", "100");
String idName 				= properties.get("idName", "pageReference");
String lesstwo				= properties.get("lesstwo","true");

boolean one_header 			= properties.get("one_header", false);
//out.print(one_header);

%>
<table id="<%=idName%>" class="table table-striped table-bordered" style="width:100%">
	<thead>
    	<tr>
            <% if(one_header){ %>
            	<th style="width:80%"><%=pagePath_t%></th>
            <% } else{ %>
            	<th style="width:80%"><%=pagePath_t%></th>
            	<th style="width:20%"><%=noReferences_t%></th>
            <%}%>


		</tr>
	</thead>
	<tfoot>
    	<tr>
            <% if(one_header){ %>
				<th><%=pagePath_t%></th>
            <% } else{ %>
        		<th><%=pagePath_t%></th>
            	<th><%=noReferences_t%></th>
            <%}%>            

		</tr>
	</tfoot>
	<tbody>

<%        

if (localsession != null && queryBuilder != null && properties.containsKey(queryKey) && Utils.isNotEmpty(properties.get(queryKey, ""))) {
	queryLimit = properties.get(queryLimitKey, queryLimit);

    //START:try
    try{
 		Query query = queryBuilder.loadQuery(resource.getPath() + "/" + queryKey, localsession);
        if (query != null) {
        	query.setHitsPerPage(queryLimit);
        	SearchResult result = query.getResult();
        	// store as both page and node iterator
        	nodeIterator = result.getNodes();
      	}

    }catch(Exception e){
        log.error("error loading stored querybuilder qurery from "+resource.getPath()+"/"+queryKey, e);
    }//END:try~catch

    if (nodeIterator != null) {
        Resource res			=null;
        Node node				=null;
        String fileName			="";
        String damSize			="";   
        long lSize				=0;
		int referenceSize		=-1;

        while (nodeIterator.hasNext()) {

			Node pageNode 	= 	nodeIterator.next();
            String path		=	pageNode.getPath();

            //out.print(path);

            //accessing dam file
            //fileName	=path.substring(0, path.length() - "/jcr:content/metadata".length());   


			res 		= resourceResolver.getResource(path);
			node 		= res.adaptTo(Node.class);

    		Page asset 	= res.adaptTo(Page.class); 
			String title	=	asset.getTitle();
        	lSize=0;
            if(!(one_header)){
            	ReferenceSearch referenceSearch = new ReferenceSearch();
            	Map<String, ReferenceSearch.Info> searchResult = referenceSearch.search(resourceResolver, path);
            	referenceSize=searchResult.size();
            }


            //if (searchResult.isEmpty()) {
            //These are the nodes/assets not referenced anywhere

            if(lesstwo.equals("true") && referenceSize<2){
				%>
        			<tr>   
                    	<% if(one_header){ %>
                    		<td><a href="http://gnbcqqanew:4502/siteadmin#<%=path%>" target="_blank" style="word-break: break-word;"><%=path%></a><br/><%=title%></td>
                    	<%}else{%>
                    		<td><a href="http://gnbcqqanew:4502/siteadmin#<%=path%>" target="_blank" style="word-break: break-word;"><%=path%><br/><%=title%></a></td>
                   			<td>
                       			<%=referenceSize%>
                   			</td>
                    	<%}%>
					</tr>
        		<%                
            }else if(lesstwo.equals("false")){
			%>
				<tr>   
                    <% if(one_header){ %>
                    	<td><a href="http://gnbcqqanew:4502/siteadmin#<%=path%>" target="_blank" style="word-break: break-word;"><%=path%></a><br/><%=title%></td>
                    <%}else{%>
                    	<td><a href="http://gnbcqqanew:4502/siteadmin#<%=path%>" target="_blank" style="word-break: break-word;"><%=path%><br/><%=title%></a></td>
                   		<td>
                       		<%=referenceSize%>
                   		</td>
                    <%}%>
				</tr>
        	<%         
            }

        }//end:  while (nodeIterator.hasNext()) 
    }//end: if (nodeIterator != null)
}//end: if (localsession != null && queryBuilder != null && properties.containsKey(queryKey) && Utils.isNotEmpty(properties.get(queryKey, "")))

%>    
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

