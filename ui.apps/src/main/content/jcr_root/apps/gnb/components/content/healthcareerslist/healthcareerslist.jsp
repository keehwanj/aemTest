<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.wcm.api.components.DropTarget"%>
<%@page import="com.day.cq.wcm.foundation.List,java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.components.Component"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Calendar"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@include file = "/libs/foundation/global.jsp"%>
<%@page import="java.text.NumberFormat"%>

<%
//finding the proper language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}
%>

<cq:setContentBundle language="<%=lang%>" />

<%
//date type setting
SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);

//setting header text for English/French
String header_1 = properties.get("header_career_title", "");
if(header_1.equalsIgnoreCase("")){
    header_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "careerTitleText"));
} 

String header_2 = properties.get("header_study_length", "");
if(header_2.equalsIgnoreCase("")){
    header_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "studyLengthText"));
} 

String header_3 = properties.get("header_salary", "");
if(header_3.equalsIgnoreCase("")){
    header_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "salaryText"));
} 

String header_4 = properties.get("year", "");
if(header_4.equalsIgnoreCase("")){
    header_4=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "yearText"));
} 

String renderer_page = properties.get("renderer_page", "");

WCMMode mode = WCMMode.fromRequest(request);

if (mode == WCMMode.EDIT) {
    //drop target css class = dd prefix + name of the drop target in the edit config
    String ddClassName = DropTarget.CSS_CLASS_PREFIX + "pages";
    out.write("<div>");
    }

if (properties.get("feedEnabled", false)) {
      String title = (String)properties.get("feedname", null) != null ? (String)properties.get("feedname", null) : currentNode.getName();
     %><link rel="alternate" type="application/rss+xml" title="<%=title %>" href="<%=resource.getPath()%>.rss.html" /><%
     }
%>

<%
//  }

    /** BUG FIX: If the parent Page is not defined, the list returns empty 
    This is because, List.java defaults the empty parentPage to retrieve relativeParent(3) which
    might not always be right incase this component is deep down the hierarchy
    This fix, sets the parentPagePath to currentPage if the path is not defined
    through the dialog 
     **/

    try {
        String path = properties.get("parentPage", "");
        if (path.equals("")) {
            currentNode.setProperty("parentPage", currentPage.getPath());
            currentNode.save();
        }
    } catch (Exception e) {
    }

    // initialize the list
%>
<cq:include script="init.jsp" /> 
<% 
out.write("<div class=\"table-responsive\">");
out.write("<table class=\"table table-bordered table-hover table-striped\"><tr>");
out.write("<th width='53%'>");
out.write(header_1);
out.write("</th>");
out.write("<th width='22%'>");
out.write(header_2);
out.write("</th>");
out.write("<th width='25%'>");
out.write(header_3);
out.write("</th></tr>");
//out.write("</table>");
%>

<% 
List list = (List) request.getAttribute("list");
WCMMode includemode = WCMMode.DISABLED.toRequest(request);
try {
Iterator<Page> items = list.getPages();
if (!list.isEmpty()) {
    while (items.hasNext()) {
        Page item = items.next();
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);
  
        ValueMap props = itemPage.getProperties();

        //to locate selector and renderer page.
        String[] selectors = itemPage.getPath().split("/");
        String href="";

        if(selectors.length>0){
            String selector = String.format("%s.%s.%s.html", selectors[4], selectors[5], selectors[6]);
            //setting the default rederering pages 
            if(renderer_page.equalsIgnoreCase("")){
                if(lang.equalsIgnoreCase("en")){
                    renderer_page = currentPage.getPath()+"/renderer";
                    }
                else{
                    renderer_page = currentPage.getPath()+"/renderer";
                    }

                }
            href = String.format("%s.%s", renderer_page, selector);
            }
    
     
        String title = (String) props.get(lang + "_title");
        /*
        String lengthstudy_from = (String) props.get("lengthstudy_from");
        String lengthstudy_to = (String) props.get("lengthstudy_to");    
        String salary_from = (String) props.get("salary_from");
        String salary_to = (String) props.get("salary_to");    
        */
        double lengthstudy_from=props.get("lengthstudy_from",0.0);
        double lengthstudy_to=props.get("lengthstudy_to",0.0);
%>
<%
        double salary_from=(double)props.get("salary_from",0);
        double salary_to=(double)props.get("salary_to",0);

        NumberFormat numberFormatter;
        NumberFormat nf = NumberFormat.getCurrencyInstance();
        nf.setMaximumFractionDigits(0);
    
        //table body part
        out.write("<tr><td>");
        out.write(String.format("<a href=\"%s\">%s</a>",href,title));              
        out.write("</td><td>");
       
        out.print(lengthstudy_from);
        if(lengthstudy_from!=lengthstudy_to){
            out.write(" - ");            
            out.print(lengthstudy_to);//display "double"
            }          
        out.write(" "+header_4);
        out.write("</td><td>");
       
        out.print(nf.format(salary_from));//display "double"
        out.write(" - ");            
        out.print(nf.format(salary_to));//display "double"
        out.write("</td></tr>");
    }//end of while

    out.write("</table>"); //end of table
    out.write("</div>");
    if (list.isPaginating()) 
        {
%>
        <cq:include script="pagination.jsp" />
<%
        }
}//end - if (!list.isEmpty()) { 
else {//"if (!list.isEmpty()) {"
    //special code to look to the previous sibling in the paragraph container
    //if it is a section title then we assume it is related to this list and hide it
    //Node currentNode;
    if ((WCMMode.fromRequest(request) == WCMMode.DISABLED || (WCMMode.fromRequest(request) == WCMMode.PREVIEW))) {
%>  
<%
}//end of else
%><cq:include script="empty.jsp" /> <%
}
} 
finally 
{
    //out.write("</ul>");
    includemode.toRequest(request);
    }
%>
<%
if (mode == WCMMode.EDIT) 
    {
    out.write("</div>");
    }
%>