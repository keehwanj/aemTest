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
String damPath_t				=properties.get("damPath","damPath");
String damSize_t				=properties.get("damSize","damSize");
String noReferences_t			=properties.get("noReferences","noReferences");    


int queryLimit 				= 10000;

String show_entries 		= properties.get("show_entries", "100");
String idName 				= properties.get("idName", "damReference");
boolean one_header 			= properties.get("one_header", false);
//out.print(one_header);

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

			Node mediaNode 	= 	nodeIterator.next();
            String path		=	mediaNode.getPath();

            //accessing dam file
            //fileName	=path.substring(0, path.length() - "/jcr:content/metadata".length());            
			res 		= resourceResolver.getResource(path);
			node 		= res.adaptTo(Node.class);

       		Asset asset = res.adaptTo(Asset.class); 
        	lSize=0;

        	if (asset != null){  
                //Resource currentOriginal = asset.getCurrentOriginal(); //Deprecated: getCurrentOriginal()
                Resource currentOriginal = asset.getOriginal();
            	if (currentOriginal != null & asset != null ) {  
                	Node ori = currentOriginal.adaptTo(Node.class); 
                	lSize = ori.getProperty(JcrConstants.JCR_CONTENT + "/" + JcrConstants.JCR_DATA).getLength(); 
             	}
        	}              

			String sDisp = ""; 

         	if (lSize < 1024) {
				sDisp = lSize + " Bytes" ;
         	} else if (lSize < 1048567) { 
               	sDisp = lSize/1024 + " KB";
         	} else { 
             	sDisp = lSize/1048567 + " MB";
         	}


            //
            if(!(one_header)){
				ReferenceSearch referenceSearch = new ReferenceSearch();
				referenceSearch.setExact(true);
				referenceSearch.setHollow(true);
				referenceSearch.setMaxReferencesPerPage(-1);


            	/*// this is very slow
				Collection<ReferenceSearch.Info> searchResult = referenceSearch.search(resourceResolver, path).values();
             	*/
            	//Map<String, ReferenceSearch.Info> searchResult = referenceSearch.search(resourceResolver, currentNode.getPath());
            	Map<String, ReferenceSearch.Info> searchResult = referenceSearch.search(resourceResolver, path);
            	//if (searchResult.isEmpty()) {
            	//These are the nodes/assets not referenced anywhere
                referenceSize	=	searchResult.size();

             }


            //

			%>
        		<tr>   
                    <% if(one_header){ %>
        				<td><a href="/damadmin#<%=path%>" target="_blank" style="word-break: break-word;"><%=path%></a></td>

                    <%} else{%>
        				<td><a href="/damadmin#<%=path%>" target="_blank" style="word-break: break-word;"><%=path%></a></td>
						<td  style="word-break: break-all"><%=sDisp%></td>
						<td><%= referenceSize%></td>
                    <%}%>
				</tr>
        	<%                

            //}

            %>

        <%

        }//end:  while (nodeIterator.hasNext()) 

    }//end: if (nodeIterator != null)


}//end: if (localsession != null && queryBuilder != null && properties.containsKey(queryKey) && Utils.isNotEmpty(properties.get(queryKey, "")))

//
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
