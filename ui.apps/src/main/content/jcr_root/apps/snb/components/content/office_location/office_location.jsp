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
	langSuffix = "ENG";    
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

//getting value from getParametervalue and capitalize first letter
String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
int selectors_length = selectors.length;
//out.print(selectors_length);
String selector_1 = "";
if(selectors_length >= 1){
	selector_1 = selectors[0];
}
selector_1 = WordUtils.capitalize(selector_1);

/*START of selector for Grand Falls or Grand-Sault*/
if(lang.equals("en") && selector_1.equals("Grand-Sault")){
	selector_1="Grand Falls";
}else if(lang.equals("fr") && selector_1.equals("Grand Falls")){
	selector_1="Grand-Sault";
}
/*END of selector for Grand Falls or Grand-Sault*/

//from dialog    
List list = (List) request.getAttribute("list");
Iterator<Page> items = list.getPages();
//XSSAPI myXssAPI = xssAPI.getRequestSpecificAPI(request);
//XSSAPI myXssAPI = xssAPI.getRequestSpecificAPI(request); 

String href="";
String titlename = "";
String email = "";
String city = "";
String mapHref = "";
String locLinkText = "";
String locLink = "";
String location = "";


String renderer_page = properties.get("renderer_page", "");
if(renderer_page==""){
	renderer_page = "//www2.gnb.ca/content/gnb/en/contacts/dept_renderer";
}

//getting data source pool from dialog and setting it.
String show_entries = properties.get("show_entries", "");
if(show_entries.equalsIgnoreCase("")){
	show_entries="10";
} 

String hideLocation = properties.get("hideLocation", "false");
if(hideLocation.equalsIgnoreCase("")){
	hideLocation="false";
} 

String one_id = properties.get("one_id", "");
if(one_id.equalsIgnoreCase("")){
	one_id="online_services";
} 

//setting resource tab for English/French
String contact_information_h = properties.get("contact_information_h", "");
if(contact_information_h.equalsIgnoreCase("")){
	contact_information_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "contact_information_h"));
} 

String email_h = properties.get("email_h", "");
if(email_h.equalsIgnoreCase("")){
	email_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "email_h"));
} 

String location_h = properties.get("location_h", "");
if(location_h.equalsIgnoreCase("")){
	location_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "location_h"));
} 

String address_h = properties.get("address_h", "");
if(address_h.equalsIgnoreCase("")){
	address_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "address_h"));
} 
String pageTitle = properties.get("page_title", "");
if(pageTitle == ""){
	pageTitle=currentPage.getTitle();
}

String pageDescription = properties.get("page_description", "");

%>
<!--START Page title-->
<div class="pageHeader">
<%

if(selector_1==""){
	out.print(String.format("<h1>%s</h1>", pageTitle));
    if(pageDescription!=""){
        out.print(String.format("<br/><p>%s</p>", pageDescription));
    }
}else{
	out.print(String.format("<h1>%s</h1>", pageTitle+" - "+selector_1));
	pageTitle = pageTitle+" - "+selector_1;
    if(pageDescription!=""){
        out.print(String.format("<br/><p>%s</p>", pageDescription));
    }
}

%>
</div>

<!--START of changing document title-->
<script>
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}    

$(document).ready(function() {
    document.title = "<%=pageTitle%>";
});
</script>
<!--END of changing document title-->

<%
//in case of list is not empty
if (!list.isEmpty()) {
%>
<div class="table-responsive">
<table id="<%=one_id%>" class="display responsive table table-striped table-hover table-bordered" cellspacing="0" width="100%">
	<thead>
		<tr>
            <%if (hideLocation.equalsIgnoreCase("true")){%>
            	<th><%=xssAPI.encodeForHTML(contact_information_h)%></th>
            	<th><%=xssAPI.encodeForHTML(email_h)%></th>
            	<th><%=xssAPI.encodeForHTML(location_h)%></th>
            <%} else{%>
				<th><%=xssAPI.encodeForHTML(location_h)%></th>              
				<th><%=xssAPI.encodeForHTML(contact_information_h)%></th>
            	<th><%=xssAPI.encodeForHTML(email_h)%></th>
            	<th><%=xssAPI.encodeForHTML(address_h)%></th>
            <%}%>            
        </tr>
	</thead>
    <tfoot>
    	<tr>
            <%if (hideLocation.equalsIgnoreCase("true")){%>
            	<th><%=xssAPI.encodeForHTML(contact_information_h)%></th>
            	<th><%=xssAPI.encodeForHTML(email_h)%></th>
            	<th><%=xssAPI.encodeForHTML(location_h)%></th>
            <%} else{%>
				<th><%=xssAPI.encodeForHTML(location_h)%></th>              
				<th><%=xssAPI.encodeForHTML(contact_information_h)%></th>
            	<th><%=xssAPI.encodeForHTML(email_h)%></th>
            	<th><%=xssAPI.encodeForHTML(address_h)%></th>
            <%}%>   
		</tr>
	</tfoot>
    <tbody>
<%
  try{    
	while (items.hasNext()) {
		Page item = items.next();
    	String itemPath = item.getPath();
    	//for getting only selector part like 173.1756.202124.1766 under /content/data/organizations/
    	String forSelector=itemPath.replace("/content/data/organizations/", "");
    	String selector = forSelector.replace("/",".");

    	//for getting page of data
    	Page itemPage = pageManager.getPage(itemPath);

		href = String.format("%s.%s", renderer_page, selector);

    	//getting orginfo node as a resource
    	Node dataNode = itemPage.getContentResource().adaptTo(Node.class);
 		if (dataNode.getParent().hasNode("orginfo")) {
    		Node orgDataNode = dataNode.getParent().getNode("orginfo");

    		//getting properties in order to display
    		titlename =  orgDataNode.getProperty("ORGNAME"+langSuffix).getString();
			titlename =  titlename+" ("+orgDataNode.getProperty("ORGTITLE"+langSuffix).getString()+")";

            //address with google map using String Builder
          	StringBuilder address = new StringBuilder();
          	if (orgDataNode.hasProperty("P_ADDRESS" + langSuffix + "1") && Utils.isNotEmpty(orgDataNode.getProperty("P_ADDRESS" + langSuffix + "1").getString())) {
            	locLinkText =orgDataNode.getProperty("P_ADDRESS" + langSuffix + "1").getString();
              	address.append(orgDataNode.getProperty("P_ADDRESS" + langSuffix + "1").getString());
              	address.append("\n");
          	}

          	if (orgDataNode.hasProperty("P_CITY" + langSuffix) && Utils.isNotEmpty(orgDataNode.getProperty("P_CITY" + langSuffix).getString())) {
              	address.append(orgDataNode.getProperty("P_CITY" + langSuffix).getString());
                //city = orgDataNode.getProperty("P_CITY" + langSuffix).getString();
              	address.append(", ");
          	}

          	if (orgDataNode.hasProperty("P_PROVINCE" + langSuffix) && Utils.isNotEmpty(orgDataNode.getProperty("P_PROVINCE" + langSuffix).getString())) {
              	address.append(orgDataNode.getProperty("P_PROVINCE" + langSuffix).getString());
              	address.append("\n");
          	}

          	if (orgDataNode.hasProperty("P_POSTALCODE") && Utils.isNotEmpty(orgDataNode.getProperty("P_POSTALCODE").getString())) {
              	address.append(orgDataNode.getProperty("P_POSTALCODE").getString());
              	address.append("\n");
          	}

          	if (orgDataNode.hasProperty("P_COUNTRY") && Utils.isNotEmpty(orgDataNode.getProperty("P_COUNTRY").getString())) {
              	address.append(orgDataNode.getProperty("P_COUNTRY").getString());
          	}



            String mapPin = URLEncoder.encode(address.toString().replace("\n", ","), "UTF8");
          	mapHref = String.format("http://maps.google.com/maps?f=q&source=s_q&hl=%s&q=%s@%s,%s&ie=UTF8&z=14&iwloc=r8", lang, mapPin,
          	orgDataNode.getProperty("P_LATITUDE").getString(), orgDataNode.getProperty("P_LONGITUDE").getString());


            if (orgDataNode.hasProperty("EMAIL" + langSuffix)){
            	email = orgDataNode.getProperty("EMAIL" + langSuffix).getString();
            }
            locLink = String.format("<a target=\"_blank\" href=\"%s\" title=\"%s\">%s</a>", mapHref, locLinkText, locLinkText);

            if (orgDataNode.hasProperty("P_CITY" + langSuffix)){
            	location = orgDataNode.getProperty("P_CITY" + langSuffix).getString();
            }


        }//end of if        

    %>
        <%if (selector_1=="") {%>
    	<tr>
            <%if (hideLocation.equalsIgnoreCase("true")){%>
        	<td style="width:45%;"><a href=<%=href%>.html><%=xssAPI.encodeForHTML(titlename)%></a></td>
            <td style="width:25%;"><%if(email.length()>0) { %><a href="mailto:<%=xssAPI.encodeForHTML(email)%>"><%=xssAPI.encodeForHTML(email)%></a><%} %> </td>
            <td style="width:30%;"><%=locLink%><br/><%=xssAPI.encodeForHTML(city)%></td>

            <%} else{%>
        		<td style="width:15%;"><%=xssAPI.encodeForHTML(location)%></td>    
        		<td style="width:35%;"><a href=<%=href%>.html><%=xssAPI.encodeForHTML(titlename)%></a></td>
            	<td style="width:15%;"><%if(email.length()>0) { %><a href="mailto:<%=xssAPI.encodeForHTML(email)%>"><%=xssAPI.encodeForHTML(email)%></a><%} %> </td>
            	<td style="width:25%;"><%=locLink%><br/><%=xssAPI.encodeForHTML(city)%></td>
            <%}%>
		</tr>
        <%}else if(selector_1.equalsIgnoreCase(location)){%>
    	<tr>
            <%if (hideLocation.equalsIgnoreCase("true")){%>
        	<td style="width:45%;"><a href=<%=href%>.html><%=xssAPI.encodeForHTML(titlename)%></a></td>
            <td style="width:25%;"><%if(email.length()>0) { %><a href="mailto:<%=xssAPI.encodeForHTML(email)%>"><%=xssAPI.encodeForHTML(email)%></a><%} %> </td>
            <td style="width:30%;"><%=locLink%><br/><%=xssAPI.encodeForHTML(city)%></td>

            <%} else{%>
        		<td style="width:15%;"><%=xssAPI.encodeForHTML(location)%></td>    
        		<td style="width:35%;"><a href=<%=href%>.html><%=xssAPI.encodeForHTML(titlename)%></a></td>
            	<td style="width:15%;"><%if(email.length()>0) { %><a href="mailto:<%=xssAPI.encodeForHTML(email)%>"><%=xssAPI.encodeForHTML(email)%></a><%} %> </td>
            	<td style="width:25%;"><%=locLink%><br/><%=xssAPI.encodeForHTML(city)%></td>
            <%}%>
		</tr>
        <%}%>
        <%
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
    $('#<%=one_id%>').DataTable({
 	"language": {"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/<%=language%>.json"},
    "iDisplayLength": <%=show_entries%>,      
    "columnDefs": [{ "width": "45%", "targets": 0 }]
    }
    );
} );    
</script>