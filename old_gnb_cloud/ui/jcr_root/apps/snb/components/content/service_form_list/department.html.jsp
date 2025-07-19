<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.t4g.cnb.utils.KeyComparator"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="java.util.Locale"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.wcm.commons.WCMUtils"%>
<%@page import="java.util.TreeMap"%>

<%
String lang = "fr";
String langSuffix = "FRE";
String langSuffix2 = "FRE";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
	lang = "en";
    langSuffix = "";
	langSuffix2 = "ENG";
}
%>
<%
String orgRendererPage = "/content/gnb/en/orgdetails";
String serviceDataPage = "/content/data/services";
final String SERVICEFORMS = "forms";
%>
<cq:setContentBundle language="<%=lang%>" />
<cq:include script="init.jsp" />
<%
List list = (List) request.getAttribute("list");
int index = 0;


String serviceInfoPath="";

Node serviceDataNode = null;

String SERVICENAME = "SERVICENAME" + langSuffix;
String FORMNAME = "FORMNAME" + langSuffix;
String FORMURL = "FORMURL" + langSuffix;
%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="table-responsive">
  <table id="department" class="table table-striped table-bordered" style="width:100%">
    <thead>
      <tr class="success">
        <th class="col-md-4">Service</th>
        <th class="col-md-5">Form</th>
        <th class="col-md-3">Department</th>          
      </tr>
    </thead>
    <tbody>

<%
//START of first try	
try{
	Iterator<Page> items = list.getPages();
	while (items.hasNext()) {
		Page item = items.next();
        serviceInfoPath = item.getPath()+"/serviceinfo";
        //out.write(serviceInfoPath);
		serviceDataNode = WCMUtils.getNode(resourceResolver.getResource(serviceInfoPath));        
        if (serviceDataNode != null) {
         %>
         <tr>   
          <td>
          <%
            if (serviceDataNode.hasProperty(SERVICENAME)) {
             	out.write(serviceInfoPath);
             out.write("<br/>");
                out.write(serviceDataNode.getProperty(SERVICENAME).getString());
            } %>
          </td>
          <td>          
            <%
            if (serviceDataNode.hasNode(SERVICEFORMS)) {
				Node formsNode = serviceDataNode.getNode(SERVICEFORMS);
                if (formsNode.hasNodes()) {
          			TreeMap<String, Node> sorted_map = new TreeMap<String, Node>(new KeyComparator());
		  			//START of for loop  

          			for (NodeIterator nodeIter = formsNode.getNodes(); nodeIter.hasNext();) {
            			Node childNode = (Node) nodeIter.next();
            			String key = "zz999999";
            			if (childNode.hasProperty(FORMNAME) && Utils.isNotEmpty(childNode.getProperty(FORMNAME).getString())) {
              				key = childNode.getProperty(FORMNAME).getString();
            			}
            			sorted_map.put(key, childNode);
          			}
                    //END of for loop  

		  			//START of for loop

          			for (Node childNode : sorted_map.values()) {
            			//START of if  
            			if ((childNode.hasProperty(FORMNAME)) && (childNode.hasProperty(FORMURL))) {
              				String url = childNode.getProperty(FORMURL).getString();
              				String desc = childNode.getProperty(FORMNAME).getString();
		 					String docType = "";
              				if (url.toLowerCase().trim().endsWith(".pdf")) {
                				docType =" <i class=\"fa fa-file-pdf-o\" style=\"color:red\"></i>";
              				} else if (url.toLowerCase().trim().endsWith(".doc")) {
                				docType =" <i class=\"fa fa-file-word-o\" style=\"color:red\"></i>";
              				} else if (url.toLowerCase().trim().endsWith(".docx")) {
                				docType =" <i class=\"fa fa-file-word-o\" style=\"color:red\"></i>";
              				}                        

              				String navItem = String.format("<a href=\"%s\" title=\"%s\">%s</a>", url, desc, desc);
              				out.write(navItem+docType);

            			}
                        out.write("<br/>");                        
            			//END of if  

          			}

          			//END of for loop
                }
            }
			%>
            </td>
             <td>department</td>
           </tr>
      	<%
        }

        index++;

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
    $('#department').DataTable();
} );    
</script>    