<%@include file="/libs/foundation/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>

<%
//this is try for a whole page
String lang = "fr";
String langSuffix = "_F";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
	langSuffix = "_E";
	lang = "en";
}//end of inner if
%>
<cq:setContentBundle language="<%=lang%>" />
<%
//declearing variables
Page itemPage = null;

//getting selectors
String[] selectors = slingRequest.getRequestPathInfo().getSelectors();


//specifying data source
String config_path="/content/gnb/cnb_data/emo-warning-stations";

//Finding path/page where data(properties) were stored!!
String itemPath="";
if(selectors.length < 1){
    itemPath = String.format("%s/%s", config_path, "1");
}else{
    itemPath = String.format("%s/%s", config_path, selectors[0]);
}

itemPage = pageManager.getPage(itemPath);
    String title="";
    String body=""; 
	String description=""; 

if (itemPage != null) {
	ValueMap props = itemPage.getProperties();
    //String warning =props.get("warning").toString();

	title		=props.get(lang + "_title","").toString();
    body		=props.get(lang + "_body","").toString();


    out.write("<h3>"+title+"</h3>");
    out.write(""+body+"");
}else{
	String empty_message = properties.get("empty_message", "");
	if (!empty_message.isEmpty()) {
		out.write("<p>"+empty_message+"</p>");
	}    
}
%>
<script>
    $(document).ready(function() {
        document.title = "<%=title%>";
    });

</script>
