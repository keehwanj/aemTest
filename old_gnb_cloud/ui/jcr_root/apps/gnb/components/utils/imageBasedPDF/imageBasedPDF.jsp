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

<%@ page import="org.apache.pdfbox.text.PDFTextStripper"%>





<%
Locale locale = currentPage.getLanguage(true);

//finding the proper language
String lang = "en";  
String language="English";
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
    lang = "fr";
    language="French";
}

PDFTextStripper pdfStripper = new PDFTextStripper();

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
          	<th><%=damPath_t%></th>
       		<th><%=damPath_t%></th>
       		<th><%=damSize_t%></th>
       		<th><%=noReferences_t%></th>
		</tr>
	</thead>
	<tfoot>
    	<tr>
           	<th><%=damPath_t%></th>
       		<th><%=damPath_t%></th>
           	<th><%=damSize_t%></th>
           	<th><%=noReferences_t%></th>
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

        //PDFTextStripper			=pdfStripper;
        //pdfStripper				=new PDFTextStripper();

        while (nodeIterator.hasNext()) {

			Node mediaNode 	= 	nodeIterator.next();
            String path		=	mediaNode.getPath();

            //accessing dam file
            //fileName	=path.substring(0, path.length() - "/jcr:content/metadata".length());            
			res 		= resourceResolver.getResource(path);
			node 		= res.adaptTo(Node.class);

       		Asset asset = res.adaptTo(Asset.class); 


			%>
        		<tr>   
       				<td>1</td>
       				<td>2</td>
					<td>3</td>
					<td>4</td>
				</tr>

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

image based culture

