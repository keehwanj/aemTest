<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.t4g.cnb.utils.KeyComparator"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.wcm.commons.WCMUtils"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.text.Normalizer"%>


<%
String lang = "fr";
String langSuffix = "Fre";
String langSuffix2 = "FRE";
String language="French";
//String type="TypeF";

Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
	lang = "en";
    langSuffix = "Eng";
	langSuffix2 = "ENG";
	language="English";
    //type="TypeE";    
}
%>
<%
String orgRendererPage = "/content/gnb/en/orgdetails";
String serviceDataPage = "/content/data/services";
final String SERVICEFORMS = "forms";
String DEPTID = "DEPTID";
String serviceRenderer = "//www2.gnb.ca/content/gnb/"+lang+"/services/services_renderer.";

String pageTitle = currentPage.getTitle();
%>
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
<script src="//cdn.datatables.net/plug-ins/1.10.16/sorting/intl.js"></script>

<%


//setting header of Form for English/French
String form_h = properties.get("form_h", "");
if(form_h.equalsIgnoreCase("")){
	form_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "form_h"));
} 

//setting header of Department for English/French
String village_h = properties.get("village_h", "");
if(village_h.equalsIgnoreCase("")){
	village_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "village_h"));
} 


//Buttons text
//setting button text for English/French
String copy_key = properties.get("copy_key", "");
if(copy_key.equalsIgnoreCase("")){
   	copy_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "copy_key"));
} 

String csv_key = properties.get("csv_key", "");
if(csv_key.equalsIgnoreCase("")){
   	csv_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "csv_key"));
} 

String excel_key = properties.get("excel_key", "");
if(excel_key.equalsIgnoreCase("")){
   	excel_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "excel_key"));
} 

String pdf_key = properties.get("pdf_key", "");
if(pdf_key.equalsIgnoreCase("")){
   	pdf_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "pdf_key"));
} 

String print_key = properties.get("print_key", "");
if(print_key.equalsIgnoreCase("")){
   	print_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "print_key"));
} 

//getting data source pool from dialog and setting it.
String show_entries = properties.get("show_entries", "");
if(show_entries.equalsIgnoreCase("")){
	show_entries="10";
} 

//getting data source pool from dialog and setting it.
String all = properties.get("all", "");
if(all.equalsIgnoreCase("")){
	all="All";
    if (locale == null || locale.getLanguage().equalsIgnoreCase("fr")) {
		all="Toute";
    }
} 


List list = (List) request.getAttribute("list");
list.setLimit(500);
int service_no = 0;
int form_no = 0;

String serviceInfoPath="";
Node serviceDataNode = null;

String FormName = "FormName" + langSuffix;
String FormUrl = "FormUrl" + langSuffix;

String Municipality = "Municipality";

%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="table-responsive">
  <table id="list" class="table table-striped table-bordered dt-responsive" style="width:100%">
    <thead>
      <tr class="success">
        <th class="col-md-7"><%=form_h%></th>
        <th class="col-md-5"><%=village_h%></th>        
      </tr>
    </thead>
    <tbody>
<%
//START of first try	
try{
	Iterator<Page> items = list.getPages();
	while (items.hasNext()) {
		Page item = items.next();
        serviceInfoPath = item.getPath()+"/municinfo";
		serviceDataNode = WCMUtils.getNode(resourceResolver.getResource(serviceInfoPath));        
        if (serviceDataNode != null) {
         %>
         <tr>   
            <td> 
            <%    
            if (serviceDataNode.hasProperty(FormName)) {
				//pdf icon display
             	String title = serviceDataNode.getProperty(FormName).getString();
             	String url = serviceDataNode.getProperty(FormUrl).getString();

				String docType = "";             
				if (url.toLowerCase().trim().endsWith(".pdf")) {
					docType =" <i class=\"fa fa-file-pdf-o\" style=\"color:red\"></i>";
				} else if (url.toLowerCase().trim().endsWith(".doc")) {
					docType =" <i class=\"fa fa-file-word-o\" style=\"color:red\"></i>";
				} else if (url.toLowerCase().trim().endsWith(".docx")) {
					docType =" <i class=\"fa fa-file-word-o\" style=\"color:red\"></i>";
				}                        
                String navItem = String.format("<a href=\"%s\" title=\"%s\">%s</a>", url, title, title);
                out.write(navItem+docType);
            } 
            %>
            </td>
            <td>
            <%    
            if (serviceDataNode.hasProperty(Municipality)) {
             	String village = serviceDataNode.getProperty(Municipality).getString();
                out.write(village);
            } 
            %>
            </td>             
         </tr>
      	<%
        } //end of "if (serviceDataNode != null)"

        service_no++;

    }//END of while

} //END of first try
//START of first catch	
catch (Exception e) {
	log.error("service info page unable to get data node", e);
}//END of first catch	
%>
    </tbody>
  </table>
</div>

<script>
$(document).ready(function() {
    $.fn.dataTable.ext.order.intl();
    $('#list').dataTable( {
        "aaSorting": [[ 1, "asc" ]],
        "language": {"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/<%=language%>.json"},
        "iDisplayLength": <%=show_entries%>,   
        dom: 'lBfrtip',
        "columnDefs": [ {
			"targets": 1,
			"orderable": false
		} ],

    aLengthMenu: [
        [25, 50, 100, 200, -1],
        [25, 50, 100, 200, "<%=all%>"]
    ],

   //iDisplayLength: 50,                         

   		buttons: [
        {
            extend: 'copy',
            text: '<%=copy_key%>',
            header:false,
            footer:true,
            title:'<%=pageTitle%>'                         

        },
        {
            extend: 'csv',
            text: '<%=csv_key%>',
            header:false,
            footer:true,
            title:'<%=pageTitle%>'                         
        },
        {
            extend: 'excel',
            text: '<%=excel_key%>',
            header:false,
            footer:true,
            title:'<%=pageTitle%>'                         
        },

        {
            extend: 'pdf',
            text: '<%=pdf_key%>',
			header:false,                             
			footer:true,
            title:'<%=pageTitle%>'                         
        },

        {
            extend: 'print',
            text: '<%=print_key%>',
            header:false,
            footer:true,
            title:'<%=pageTitle%>'                         
        }
    ],
       /*new*/
        initComplete: function() {
                this.api().columns().every(function(i) {
                    //console.log(i);
                    if (i == 2) {
                        var column = this;
                        //console.log(this.length);
                        var select = $('<select><option value=""><%=village_h%></option></select>')
                            .appendTo($(column.header()).empty())
                            .on('change', function() {
                                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                                console.log(val);

                                column.search(val ? '^' + val + '$' : '', true, false).draw();
                            });
                        //column.data().unique().sort().each(function(d, j) {
                        column.data().unique().each(function(d, j) {
                            var dd= $(d).text();
                            var dd_t= dd;
                            if(dd.length > 25){
								var dd_t=dd.substr(0, 25)+'...';
                            }

                            select.append('<option value="' + dd + '">' + dd_t + '</option>')
                        });
                    }
                });
            }
            /*/new */
    } );
} );   
</script>