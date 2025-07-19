<%@ include file="/libs/foundation/global.jsp" %>
<%@ page import="java.util.Locale"%>
<%@ page import="com.day.cq.search.QueryBuilder"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>
<%@ page import="com.day.cq.search.Query"%>
<%@ page import="com.day.cq.search.result.SearchResult"%>
<%@ page import="com.day.cq.dam.api.Asset"%>
<%@ page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@ page import="com.day.cq.tagging.TagManager"%>
<%@ page import="com.day.cq.tagging.Tag"%>

<%
Locale locale = currentPage.getLanguage(true);

//finding the proper language
String lang = "en";  
String language="English";
if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
    lang = "fr";
    language="French";
}

//getting titles from dialog
String subscription_h		=properties.get("subscription_h","Subscription");
String subscriptionID_h		=properties.get("subscriptionID_h","SubscriptionID");
String title_h				=properties.get("title_h","Title");      
String webPath_h			=properties.get("webPath_h","Web Path");          
String tags_h				=properties.get("tags_h","Tags");              

//querybuilder
QueryBuilder queryBuilder 	= resource.getResourceResolver().adaptTo(QueryBuilder.class);
Session localsession 		= resource.getResourceResolver().adaptTo(Session.class);
Iterator<Node> nodeIterator = null;

int tab=1;
String queryKey 			= "savedquery" + tab;
String queryLimitKey 		= "querylimit" + tab;

int queryLimit 				= 100;

String show_entries 		= properties.get("show_entries", "25");
String idName 				= properties.get("idName", "exampleDAM");

%>
<table id="<%=idName%>" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th><%=subscriptionID_h%><br>
					<%=subscription_h%>
                </th>
                <th><%=title_h%><br/>
                    <%=webPath_h%>
                </th>
                <th><%=tags_h%></th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th><%=subscriptionID_h%><br>
					<%=subscription_h%>
                </th>
                <th><%=title_h%><br/>
                    <%=webPath_h%>
                </th>
                <th><%=tags_h%></th>
            </tr>
        </tfoot>

        <tbody>
<%
if (localsession != null && queryBuilder != null && properties.containsKey(queryKey) && Utils.isNotEmpty(properties.get(queryKey, ""))) {
	queryLimit = properties.get(queryLimitKey, 100);

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
    }//END of try~catch

    if (nodeIterator != null) {
        //defining/setting local variables
        Resource res			=null;
        Node node				=null;
        String fileName			="";
        String damTitleE		="";
        String damTitleF		="";
		String subscription		="";
        String subscriptionID	="";
		Value[] tags			=null;

        while (nodeIterator.hasNext()) {
			Node mediaNode = nodeIterator.next();
            //this path including metadata node
          	String path=mediaNode.getPath();

            //accessing dam file
            fileName=path.substring(0, path.length() - "/jcr:content/metadata".length());

			res = resourceResolver.getResource(path);
			node = res.adaptTo(Node.class);


            if (node.hasProperty("dam:title_E")) {
				damTitleE = node.getProperty("dam:title_E").getValue().getString();

            }else{
                damTitleE="";
            }

            if (node.hasProperty("dam:title_F")) {
				damTitleF = node.getProperty("dam:title_F").getValue().getString();

            }else{
                damTitleF="";
            }

            if (node.hasProperty("subscription")) {
				subscription = node.getProperty("subscription").getValue().getString();

            }else{
				subscription="";
            }

            if (node.hasProperty("subscriptionID")) {
				subscriptionID = node.getProperty("subscriptionID").getValue().getString();
            }else{
				subscriptionID="";
            }          

			%>
            <tr>
                <td style="width:15%;"><%=subscriptionID%><br/>
										<%=subscription%>
                </td>
                <td  style="word-break: break-all"><span class="glyphicon glyphicon-triangle-right small" style="color:gray"></span> <%=damTitleE%> / <%=damTitleF%><br/>
                     <span class="glyphicon glyphicon-triangle-right small" style="color:gray"></span> <%=fileName%>
                </td>
                <td style="width:35%;">
				<%
            //tags part
            try{

            	tags = node.getProperty("cq:tags").getValues() ;
				TagManager tm = resourceResolver.adaptTo(TagManager.class);  

            	//tags
            	if(tags!=null) {
                	for(int i=0;i<tags.length;i++) {
						String tagValue=(String) tags[i].getString();
                    	Tag tag = tm.resolve(tagValue);
						if(tag!=null){
                        	out.write(tag.getTitle() + "<br />");
						}
                	}
            	}
            } catch(Exception e){
				log.error("error tagging ", e);
            }

                %>
                </td>
            </tr>

            <%            

        }//END of while

    }//END of inner if

}//END of outer if

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