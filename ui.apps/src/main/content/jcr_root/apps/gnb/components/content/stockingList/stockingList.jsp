<%@ include file="/libs/foundation/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@ page import="java.util.Locale"%>
<%@ page import="com.day.cq.wcm.api.components.DropTarget" %>
<%@ page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@ page import="com.day.cq.wcm.api.components.Component"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>

<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>



<%
//finding the proper language
String lang = "fr";
String language="French";
String langSuffix = "_F";

Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
   	lang = "en";
	language="English";
    langSuffix = "_E";
}
//Header text
String year_key 			= properties.get("year", "Year");
String season_key 			= properties.get("season", "Season");
String county_key 			= properties.get("county", "County");
String waterName_key 		= properties.get("waterName", "Water Name");
String numberStocked_key 	= properties.get("numberStocked", "Number Stocked");
String lifeStage_key 		= properties.get("lifeStage", "Life Stage");
String clip_key		 		= properties.get("clip", "Clip");
String waterfishing_key		= properties.get("waterfishing", "Open to Winter Fishing");

//new fields(2020-7-13)
String type 				= properties.get("type", "Species");
String salmon 				= properties.get("salmon", "Landlocked Salmon");
String trout 				= properties.get("trout", "Brook Trout");

//Buttons text
//setting button text for English/French
String copy_key 	= properties.get("copy_key", "Copy");
String csv_key 		= properties.get("csv_key", "CSV");
String excel_key 	= properties.get("excel_key", "Excel");
String pdf_key 		= properties.get("pdf_key", "PDF");
String print_key 	= properties.get("print_key", "Print");

String show_entries = properties.get("show_entries", "25");
String idName 		= properties.get("idName", "stocking");


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
<cq:include script="init.jsp" />
<cq:setContentBundle language="<%=lang%>" />
<link href="https://cdn.datatables.net/buttons/1.2.1/css/buttons.dataTables.min.css" rel="stylesheet" type="text/css">
<script src="https://cdn.datatables.net/buttons/1.2.1/js/dataTables.buttons.min.js"></script>
<script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.flash.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
<script src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
<script src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
<script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.html5.min.js"></script>
<script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.print.min.js"></script>

<div class="table-responsive">
<table id="<%=idName%>" class="display responsive table table-striped table-hover table-bordered" cellspacing="0" style="width:100%">
	<thead>
		<tr>
        	<th><%=year_key%></th>
            <th><%=season_key%></th>
            <th><%=county_key%></th>
            <th><%=waterName_key%></th>
            <th><%=type%></th>
            <th><%=numberStocked_key%></th>
            <th><%=lifeStage_key%></th>
            <th><%=clip_key%></th>
            <th><%=waterfishing_key%></th>

		</tr>
	</thead>
	<tfoot>
		<tr>
        	<th><%=year_key%></th>
            <th><%=season_key%></th>
            <th><%=county_key%></th>
            <th><%=waterName_key%></th>
            <th><%=type%></th>
            <th><%=numberStocked_key%></th>
            <th><%=lifeStage_key%></th>
            <th><%=clip_key%></th>
            <th><%=waterfishing_key%></th>

		</tr>
	</tfoot>    
	<tbody>
<%
List list = (List) request.getAttribute("list");

if (!list.isEmpty()) {
	WCMMode includemode = WCMMode.DISABLED.toRequest(request);
    try {
      Iterator<Page> items = list.getPages();
      int index = 0;
      String href="";  
      while (items.hasNext()) {
        Page item 					= items.next();
        String itemPath 			= item.getPath();
        String type_text			= trout; 
          if(itemPath.contains("/content/gnb/erd-data/stockings/salmon")){
              type_text=salmon;
          }  

        Page itemPage 				= pageManager.getPage(itemPath);
        ValueMap props 				= itemPage.getProperties();

        String year		 			= (String) props.get("year","");
        String season				= (String) props.get(lang + "Season", "");

 		String county				= (String) props.get("county","");

        String waterName			= (String) props.get(lang + "WaterName","");          
        String waterNameLink		= (String) props.get(lang + "WaterNameLink","");          

        String numberStocked		= (String) props.get("numberStocked","");
        String lifeStage			= (String) props.get(lang + "LifeStage","");          
        String clip					= (String) props.get(lang + "Clip","");    
        String winterfishing		= (String) props.get("winterfishing","").trim();

        if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
        	if(winterfishing.equals("Yes")){
            	winterfishing="Yes**";
        	}else{
         		winterfishing="No";
        	}  
        }else{

        	if(winterfishing.equals("Yes")){
            	winterfishing="Oui**";
        	}else{
         		winterfishing="Non";
        	}  
        }


%>
		<tr>
        	<td style="width:6%;"><%=year%></td>
            <td style="width:10%;"><%=season%></td>
            <td style="width:15%;"><%=county%></td>
            <td class="<%=itemPath%>">
            <%if(waterNameLink==null ||waterNameLink=="") {%>
            	<%=waterName%>
            <%} else{%>
            	<a href="<%=waterNameLink%>" target="_blank"><%=waterName%></a>
            <%}%>
            </td>   
            <td style="width:10%;"><%=type_text%></td>
            <td style="width:8%;"><%=numberStocked%></td>
            <td style="width:6%;"><%=lifeStage%></td>
            <td style="width:6%;"><%=clip%></td>
            <td style="width:10%;"><%=winterfishing%></td>

		</tr>
<%
      }

    }catch(Exception ex){ 
		log.error("emoWarningList component is wrong",ex); 

	}finally {
      includemode.toRequest(request);
    }
%>
	</tbody>
</table>
</div>
<%    
  } else {
 	if ((WCMMode.fromRequest(request) != WCMMode.DISABLED || (WCMMode.fromRequest(request) != WCMMode.PREVIEW))) {%>
    	<cq:include script="empty.jsp" />
   <%}  
  }
%>
<script>
$(document).ready(function() {
    $('#<%=idName%>').DataTable( {
        "order": [[ 0, "desc" ]],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/<%=language%>.json",
            "decimal": ","
                    },
        "iDisplayLength": <%=show_entries%>,        
        //dom: 'Bfrtip',
        dom: 'lBfrtip',

        buttons: [
        {
            extend: 'copy',
            text: '<%=copy_key%>'
        },
        {
            extend: 'csv',
            text: '<%=csv_key%>'
        },
        {
            extend: 'excel',
            text: '<%=excel_key%>'
        },

        {
            extend: 'pdf',
            text: '<%=pdf_key%>'
        },

        {
            extend: 'print',
            text: '<%=print_key%>'
        }
    ]
    } );
} );
</script>