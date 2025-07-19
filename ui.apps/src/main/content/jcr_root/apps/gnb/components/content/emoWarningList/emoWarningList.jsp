<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@ page import="java.util.Locale"%>
<%@ page import="com.day.cq.wcm.api.components.DropTarget" %>
<%@ page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@ page import="com.day.cq.wcm.api.components.Component"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/foundation/global.jsp" %>

<%
//finding the proper language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
String renderer_page = properties.get("renderer", "");


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
        Page itemPage 				= pageManager.getPage(itemPath);
        ValueMap props 				= itemPage.getProperties();

        String[] selectors = itemPage.getPath().split("/");    

        String selector="";

        if(selectors.length>0){
            selector = String.format("%s.html", selectors[5]);
            //setting the default rederering pages 

            if(renderer_page.equalsIgnoreCase("")){
                if(lang.equalsIgnoreCase("en")){
                    renderer_page = "/content/gnb/en/departments/emo1/test";
                }
                else{
                    renderer_page = "/content/gnb/fr/nouvelles/communique";
                }
            }

            href = String.format("%s.%s", renderer_page, selector);
        }

        String warning	 			= (String) props.get("warning");

        //rederer page with text
        String link_text=""; 
		if(lang.equalsIgnoreCase("en")){
			link_text   = "<a href="+href+">Click here</a> for more details.";
		}
		else{
			link_text   = "<a href="+href+">Cliquez ici</a> pour plus de d&eacute;tails.";
		}

        //displaying with bootstrap
 		String title;
        String description;  

        String class_warning	="\"alert alert-warning\"";   
        if(warning.equals("true")){
            title		= (String) props.get(lang + "_title");
            description	= (String) props.get(lang + "_description","");
        }else{
            title		= (String) props.get(lang + "_title_normal"); 
            description	= (String) props.get(lang + "_description_normal","");
            //out.write(description);
            //class_warning	="\"alert alert-info\""; 
            link_text	="";
        }  
        out.write("<div class="+class_warning+">");     
		out.write("<center><h4>"+title+"</h4></center>");   
        out.write("<center><b>"+description+"</b></center>");  
        out.write("<center><b>"+link_text+"</b></center>");    
        out.write("</div>"); 
      }

    }catch(Exception ex){ 
		log.error("emoWarningList component is wrong",ex); 

	}finally {
      includemode.toRequest(request);
    }

  } else {
 	if ((WCMMode.fromRequest(request) != WCMMode.DISABLED || (WCMMode.fromRequest(request) != WCMMode.PREVIEW))) {%>
    	<cq:include script="empty.jsp" />
   <%}  
  }
%>