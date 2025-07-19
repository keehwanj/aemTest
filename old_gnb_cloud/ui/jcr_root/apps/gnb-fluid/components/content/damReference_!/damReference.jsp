<%@ include file="/libs/foundation/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@ page import="com.day.cq.wcm.foundation.List"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="com.day.cq.tagging.TagManager"%>
<%@ page import="com.day.cq.tagging.Tag"%>

<%
//finding the proper language
String lang = "fr";
String language="French";


Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
   	lang = "en";
	language="English";

}

//getting titles from dialog
String subscription_h		=properties.get("subscription_h","Subscription");
String subscriptionID_h		=properties.get("subscriptionID_h","SubscriptionID");
String title_h				=properties.get("title_h","Title");      
String webPath_h			=properties.get("webPath_h","Web Path");          
String tags_h				=properties.get("tags_h","Tags"); 

String show_entries 		= properties.get("show_entries", "25");
String idName 				= properties.get("idName", "examplePage");

WCMMode mode = WCMMode.fromRequest(request);
/** BUG FIX: 
If the parent Page is not defined, 
the list returns empty This is because, List.java defaults the empty parentPage to retrieve relativeParent(3) 
which might not always be right incase this component is deep down the hierarchy 
This fix, sets the parentPagePath to currentPage if the path is not defined through the dialog 
*/
try{ 
  String path = properties.get("parentPage","");
   if(path.equals("")){
       currentNode.setProperty("parentPage",currentPage.getPath());
       currentNode.save();
   }
}catch (Exception e) {}%>

<cq:include script="init.jsp"/>
<cq:setContentBundle language="<%=lang%>" />

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
List list = (List) request.getAttribute("list");
out.print(list.size());
//out.print(list.getPath());
if (!list.isEmpty()) {
    WCMMode includemode = WCMMode.DISABLED.toRequest(request);
	try {
		Iterator<Page> items = list.getPages();
      	int index = 0;
      	String href="";  


%>
            <tr>
                <td style="width:15%;">subscriptionID</td>
                <td><span class="glyphicon glyphicon-triangle-right small" style="color:gray"></span> title<br/>
                     <span class="glyphicon glyphicon-triangle-right small" style="color:gray"></span> itemPath
                </td>
                <td style="width:35%;">

                </td>
            </tr>
<%

	}catch(Exception ex){ 
		log.error("subAdminPageList component is wrong",ex); 

	}finally {
      includemode.toRequest(request);
    }

} else {
 	if ((WCMMode.fromRequest(request) != WCMMode.DISABLED || (WCMMode.fromRequest(request) != WCMMode.PREVIEW))) {%>
    	<cq:include script="empty.jsp" />
   <%}  
}
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