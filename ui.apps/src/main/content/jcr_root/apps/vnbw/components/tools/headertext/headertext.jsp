<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="org.slf4j.Logger"%>
<%
/**finding out header text and climb up to parent node**/ 
%>
<%!protected String getHeaderPropertyValue(Node node, String path, String property, Logger log) {
    try {
      if (node.hasNode("jcr:content") && node.getNode("jcr:content").hasNode(path) && node.getNode("jcr:content").getNode(path).hasProperty(property)) {
        Property prop = node.getNode("jcr:content").getNode(path).getProperty(property);
		boolean propertyType=prop.isMultiple();
		StringBuilder sb = new StringBuilder();          

		if(propertyType){
			Value[] propStringValue = (Value[]) prop.getValues();
       		for(int i=0;i<propStringValue.length;i++) {
   				sb.append(propStringValue[i].getString()+"-");
   			}
			return sb.toString();
		}
       	else{
			Value propStringValue = (Value) prop.getValue();
            if ((propStringValue != null) && (!propStringValue.equals("")) && (!propStringValue.equals("undefined"))) {
       			sb.append(propStringValue.getString()+"-");
            	return sb.toString();
            }
       	}          
      }
      if(node==null || node.getDepth()==0) return null;
      return getHeaderPropertyValue(node.getParent(), path, property, log);
    } catch (Exception ex) {
      log.error("Header Text encountered an error climbing the hierarchy for" + property, ex);
      return "Please set header text";
    }
  }%>

<cq:includeClientLib css="ag.components.headertext"/>
<cq:includeClientLib js="ag.components.headertext"/>
<%
String header_text = getHeaderPropertyValue(currentPage.adaptTo(Node.class), "headertext", "header_text", log);
if (header_text != null) {
    String[] parts = header_text.split("-");
    int last=parts.length-1;
	for(int i=0;i<parts.length;i++) {
        if(i==last){//finding last
			out.write("<span class=\"headerText\" id=\"lastText\">"+parts[i]+"</span>");
        }
        else{
            out.write("<span class=\"headerText\">"+parts[i]+"</span>");
            //out.write("<span class=\"headerText\">"+" "+"</span>");
            //out.write("<span class=\"headerText\">"+"-"+"</span>");            
        }
	}
}
else{
   %><cq:include script="empty.jsp"/><%
}
%>