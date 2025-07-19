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
String DEPTID = "DEPTID";
String serviceRenderer = "http://www2.gnb.ca/content/gnb/"+lang+"/services/services_renderer.";

%>
<cq:include script="init.jsp" />
<cq:setContentBundle language="<%=lang%>" />
<%
//setting header of Services for English/French
String service_h = properties.get("service_h", "");
if(service_h.equalsIgnoreCase("")){
	service_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "service_h"));
} 

//setting header of Services for English/French
String total_service_h = properties.get("total_service_h", "");
if(total_service_h.equalsIgnoreCase("")){
	total_service_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "total_service_h"));
} 

//setting header of Form for English/French
String form_h = properties.get("form_h", "");
if(form_h.equalsIgnoreCase("")){
	form_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "form_h"));
} 

//setting header of Form for English/French
String total_form_h = properties.get("total_form_h", "");
if(total_form_h.equalsIgnoreCase("")){
	total_form_h = String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "total_form_h"));
} 
List list = (List) request.getAttribute("list");
list.setLimit(500);
int service_no = 0;
int form_no = 0;

String serviceInfoPath="";
Node serviceDataNode = null;

String SERVICENAME = "SERVICENAME" + langSuffix;
String DEPTNAME = "DEPTNAME" + langSuffix;
String FORMNAME = "FORMNAME" + langSuffix;
String FORMURL = "FORMURL" + langSuffix;
String serviceName="";
String servicesid="";
String sUrl="";
%>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="table-responsive">
  <table id="list" class="table table-striped table-bordered dt-responsive" style="width:100%">
    <thead>
      <tr class="success">
        <th class="col-md-4">Service</th>
        <th class="col-md-6">Form</th>
        <th class="col-md-2">Department</th>        
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
		serviceDataNode = WCMUtils.getNode(resourceResolver.getResource(serviceInfoPath));        
        if (serviceDataNode != null) {
         %>
         <tr>   
          <td>
          <%
            String title = ""; 
            if (serviceDataNode.hasProperty(SERVICENAME)) {
             	title = serviceDataNode.getProperty("SERVICENAME"+langSuffix).getString();
                //title for selector in webaddress
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
                titleUnder = titleUnder.replace(";","");
                //check to see if the string contains a final quote punctuation - if so, replace it with an underscore - sometimes used like apostrophes.  
                String titleNew = ""; 
                char[] c = titleUnder.toCharArray();
                //title for selector in web address
                for (int pos = 0; pos < c.length; pos++) {
                	int type = Character.getType(c[pos]);
                    if (type == 30) {
                    	titleNew = titleNew + "_";
                    }else{
                    	titleNew = titleNew + c[pos]; 
                    }
            	}
             	sUrl = serviceRenderer + serviceDataNode.getProperty("SERVICESID").getLong() + "." + titleNew + ".html";
             	serviceName=serviceDataNode.getProperty(SERVICENAME).getString();
             	out.write("<a href=" + sUrl +  ">" + serviceName + "</a>" );
             	out.write("<br/>");             
            } %>
          </td>
          <td>          
            <%
            if (serviceDataNode.hasNode(SERVICEFORMS)) {
				Node formsNode = serviceDataNode.getNode(SERVICEFORMS);
                if (formsNode.hasNodes()) {
          			TreeMap<String, Node> sorted_map = new TreeMap<String, Node>(new KeyComparator());
		  			//START of for loop for sorting
          			for (NodeIterator nodeIter = formsNode.getNodes(); nodeIter.hasNext();) {
            			Node childNode = (Node) nodeIter.next();
            			String key = "zz999999";
            			if (childNode.hasProperty(FORMNAME) && Utils.isNotEmpty(childNode.getProperty(FORMNAME).getString())) {
              				key = childNode.getProperty(FORMNAME).getString().trim();
            			}
            			sorted_map.put(key, childNode);
          			}
                    //END of for loop  
		  			//START of for loop for display
          			for (Node childNode : sorted_map.values()) {
            			//START of if  
            			if ((childNode.hasProperty(FORMNAME)) && (childNode.hasProperty(FORMURL))) {
              				String url = childNode.getProperty(FORMURL).getString();
              				String desc = childNode.getProperty(FORMNAME).getString();
		 					String docType = "";
                            //pdf icon display
              				if (url.toLowerCase().trim().endsWith(".pdf")) {
                				docType =" <i class=\"fa fa-file-pdf-o\" style=\"color:red\"></i>";
              				} else if (url.toLowerCase().trim().endsWith(".doc")) {
                				docType =" <i class=\"fa fa-file-word-o\" style=\"color:red\"></i>";
              				} else if (url.toLowerCase().trim().endsWith(".docx")) {
                				docType =" <i class=\"fa fa-file-word-o\" style=\"color:red\"></i>";
              				}                        
              				String navItem = String.format("<a href=\"%s\" title=\"%s\">%s</a>", url, desc, desc);
              				out.write(navItem+docType);
                            form_no++;
            			}
                        out.write("<br/>");                        
            			//END of if  
          			}
          			//END of for loop
                }
            }
			%>
            </td>
             <td>
            <%
        		String link = null;

        		//START of if if (serviceDataNode.hasProperty(DEPTID))   
        		if (serviceDataNode.hasProperty(DEPTID)) {
          			String deptOrgPath = Utils.getDepartmentPath(serviceDataNode.getProperty(DEPTID).getString(), resource);
                    //link = Utils.getQuicklink(deptOrgPath, currentPage, resource);
                    link = Utils.getQuicklink(deptOrgPath, currentPage, resource).replace("/content/gnb/","http://www2.gnb.ca/content/gnb/");
            		link=link;
        		}
        		//END of if if (serviceDataNode.hasProperty(DEPTID))

				//START of if (Utils.isNotEmpty(link))
        		if (Utils.isNotEmpty(link)) {
                    //out.write("<span id='departmentlink'>");
          			out.write(link);
                    //out.write("</span>");
        		}
        		//END of if (Utils.isNotEmpty(link))  
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
        <tr class="danger">
        	<td><%=total_service_h%> : <%=service_no%></td>
            <td><%=total_form_h%>  : <%=form_no%></td>
            <td><%=total_form_h%>  : <%=form_no%></td>            
        </tr>
    </tbody>
  </table>
</div>
<script>
$(document).ready(function() {
    $('#list').dataTable( {

    } );
} );   
</script>   