<%@include file="/libs/foundation/global.jsp"%>

<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="com.day.cq.wcm.api.components.DropTarget" %>
<%@page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>

<%@page import="java.net.URLEncoder"%>
<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@ page import="org.apache.commons.lang.WordUtils"%>

<%
//======Start
//finding the proper language
String lang = "fr";
String langSuffix = "FRE"; 
String language="French";
Locale locale = currentPage.getLanguage(true);

if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
	langSuffix = "";    
	language="English";
}
//======End
%>
<%
// initialize the list
%>
<cq:include script="init.jsp" />
<cq:setContentBundle language="<%=lang%>" />

<%



//from dialog    
List list = (List) request.getAttribute("list");
Iterator<Page> items = list.getPages();

String href="";
String titlename = "";


String renderer_page = properties.get("renderer_page", "")+".";
if(renderer_page==""){
    renderer_page = "/content/snb/en/services/services_renderer.";
}


//getting data source pool from dialog and setting it.
String show_entries = properties.get("show_entries", "");
if(show_entries.equalsIgnoreCase("")){
	show_entries="25";
} 

String unique_id = properties.get("unique_id", "");
if(unique_id.equalsIgnoreCase("")){
	unique_id="servicelist";
} 

//setting resource tab for English/French
String title_h = properties.get("title_h", "");
//out.write(title_h);
if(title_h.equalsIgnoreCase("")){
	title_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "title_h"));
} 

String fees_h = properties.get("fees_h", "");
if(fees_h.equalsIgnoreCase("")){
	fees_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "fees_h"));
} 

String contacts_h = properties.get("contacts_h", "");
if(contacts_h.equalsIgnoreCase("")){
	contacts_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "contacts_h"));
} 

String forms_h = properties.get("forms_h", "");
if(forms_h.equalsIgnoreCase("")){
	forms_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "forms_h"));
} 
String online_h = properties.get("online_h", "");
if(online_h.equalsIgnoreCase("")){
	online_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "online_h"));
} 
String pageTitle = properties.get("page_title", "");
if(pageTitle == ""){
	pageTitle=currentPage.getTitle();
}

%>
<!--START Page title-->
<div class="pageHeader">

<%
    //out.print(String.format("<h1>%s</h1>", pageTitle));
%>

</div>


<%
//in case of list is not empty
if (!list.isEmpty()) {
%>
<div class="table-responsive">
<table id="<%=unique_id%>" class="display responsive table table-striped table-hover table-bordered" cellspacing="0" width="100%">
	<thead>
		<tr>
			<th><%=xssAPI.encodeForHTML(title_h)%></th>              
			<th><%=xssAPI.encodeForHTML(fees_h)%></th>
            <th><%=xssAPI.encodeForHTML(forms_h)%></th>
            <th><%=xssAPI.encodeForHTML(contacts_h)%></th>
            <th><%=xssAPI.encodeForHTML(online_h)%></th>
        </tr>
	</thead>
    <tfoot>
    	<tr>

			<th><%=xssAPI.encodeForHTML(title_h)%></th>              
			<th><%=xssAPI.encodeForHTML(fees_h)%></th>
            <th><%=xssAPI.encodeForHTML(forms_h)%></th>
            <th><%=xssAPI.encodeForHTML(contacts_h)%></th>
            <th><%=xssAPI.encodeForHTML(online_h)%></th>

		</tr>
	</tfoot>
    <tbody>
<%
  try{    
	while (items.hasNext()) {
		Page item = items.next();
    	String itemPath = item.getPath();

    	//for getting page of data
    	Page itemPage = pageManager.getPage(itemPath);

		href = String.format("%s", renderer_page);

    	//getting serviceinfo node as a resource
    	Node dataNode = itemPage.getContentResource().adaptTo(Node.class);
 		if (dataNode.getParent().hasNode("serviceinfo")) {
    		Node serviceDataNode = dataNode.getParent().getNode("serviceinfo");

    		//getting properties in order to display
    		String title =  serviceDataNode.getProperty("SERVICENAME"+langSuffix).getString();


            // title = serviceDataNode.getProperty("SERVICENAME"+langSuffix).getString();
            String titleUnder = title.replace(" ","_");
            titleUnder = titleUnder.replace("’","_");  
            titleUnder = titleUnder.replace("'","_");  
            titleUnder = titleUnder.replace("’","_");
            titleUnder = titleUnder.replace("/","");
            //replace the accented characters with the html equiv. 
            titleUnder = titleUnder.replace("\u00C9","&#201;"); 
            titleUnder = titleUnder.replace("\u00E9","&#233;"); 
            titleUnder = titleUnder.replace("é","&#233;");  
            titleUnder = titleUnder.replace("\u00F4","&#244;");
            titleUnder = titleUnder.replace("\u00D4","&#212;");
            titleUnder = titleUnder.replace("\u00E8","&#232;");
            titleUnder = titleUnder.replace("\u00C8","&#200;");
            titleUnder = titleUnder.replace("\u00EE","&#238;");
            titleUnder = titleUnder.replace("\u00CE","&#206;");
            titleUnder = titleUnder.replace("\u00E0","&#224;");
            titleUnder = titleUnder.replace("\u00C7","&#199;");
            titleUnder = titleUnder.replace("\u00E7","&#231;");
            titleUnder = titleUnder.replace("\u00EA","&#234;");
            titleUnder = titleUnder.replace("\u00CA","&#202;");
            titleUnder = titleUnder.replace("\u00EB","&#235;");
            titleUnder = titleUnder.replace("\u00CB","&#203;");
            titleUnder = titleUnder.replace("\u00E2","&#226;");
            titleUnder = titleUnder.replace("\u00C2","&#194;");
            //replace the trademark tm character in the title 
            titleUnder = titleUnder.replace("\u2122","");                    
            //replace the squished oe character in the title 
            titleUnder = titleUnder.replace("\u0153","oe");
            //titleUnder = titleUnder.replace("œ","oe");
            //out.write("titleunder = " + titleUnder);
            //replace en dashes in the title with regular dashes  
            titleUnder = titleUnder.replace("\u2013","-"); 
            //replace left double curly quotes with nothing 
            titleUnder = titleUnder.replace("\u201C","");    
            //eliminate colons and semi-colons 
            titleUnder = titleUnder.replace(":","");  

            //titleUnder = titleUnder.replace(";","");

            //check to see if the string contains a final quote punctuation - if so, replace it with an underscore - sometimes used like apostrophes.  
            String titleNew = ""; 
            char[] c = titleUnder.toCharArray();
            for (int pos = 0; pos < c.length; pos++) {
                int type = Character.getType(c[pos]);
                if (type == 30) {
                    titleNew = titleNew + "_";
                }else{
                    titleNew = titleNew + c[pos]; 
                }
            }
            //description = title;
            
            //out.write (description + "<td>" );
            //String navItem=Utils.getQuicklink(currentNode.getPath(), currentPage, resource);
            //String sUrl = rendererPage + serviceDataNode.getProperty("SERVICESID").getLong() + ".html";
           	String sUrl = renderer_page + serviceDataNode.getProperty("SERVICESID").getLong() + "." + titleNew + ".html";



            out.write ("<tr><td>"); 
            out.write("<a href=" + sUrl +  ">" + xssAPI.encodeForHTML(title) + "</a>" );
            out.write ("</td><td>"); 
            if( serviceDataNode.getProperty("FEESTABLECOUNT").getLong() > 0) {
                     //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/money_dollar.png\" />"); 
                     out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/money_dollar.png\" alt=\"\"/>"); 
            }else{ 
                     out.write("&nbsp;"); 
            } 
            out.write ("</td><td>"); 
            if(serviceDataNode.getProperty("SERVICESFORMSTABLECOUNT").getLong() > 0) {
                //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/page_copy.png\" />"); 
                out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/page_copy.png\" alt=\"\"/>"); 
            }else{ 
                out.write("&nbsp;"); 
            } 
            out.write ("</td><td>"); 
            if(serviceDataNode.getProperty("SERVICESCONTACTSTABLECOUNT").getLong() > 0) {
                //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/group.png\" />"); 
                out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/group.png\" alt=\"\"/>"); 
            }
            /**START of new(2015-1-5)-Dawn Stevens request**/
            else if(serviceDataNode.getProperty("SNBOFFERED").getString().endsWith("S")) {
                //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/group.png\" />"); 
                out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/group.png\" />"); 
            }  
            else if(serviceDataNode.getProperty("SNBOFFERED").getString().endsWith("P")) {
                //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/group.png\" />"); 
                out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/group.png\" alt=\"\"/>"); 
            }                     
            /**END of new(2015-1-5)**/
            else{ 
                out.write("&nbsp;"); 
            } 
            out.write ("</td><td>"); 
            if(serviceDataNode.getProperty("ONLINEPAYMENTTABLECOUNT").getLong() > 0) {
                //out.write("<img src=\"" + currentStyle.getDesign().getPath() + "/images/mouse.png\" />"); 
                out.write("<img src=\"/etc/designs/gnb-bootstrap/clientlibs/images/mouse.png\" alt=\"\"/>"); 
            }else{ 
                out.write("&nbsp;"); 
            } 
            out.write ("</td></tr>"); 


        //address.append("\n");


        }//end of if        

	}//end of while

  } catch (Exception e) {
    log.error("An error occured trying to build table content", e);
  }
%>

	</tbody>
</table>
</div>
<%
}//end if (!list.isEmpty())
//in case of list is empty
else{%>
	<cq:include script="empty.jsp" /><%
}//end of else
%>

<script>
$(document).ready(function() {
    $('#<%=unique_id%>').DataTable({
 	"language": {"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/<%=language%>.json"},
    "iDisplayLength": <%=show_entries%>,      
    "columnDefs": [{ "width": "45%", "targets": 0 }]
    }
    );
} );    
</script>