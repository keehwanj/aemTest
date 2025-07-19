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

<cq:defineObjects />

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
String header_1 = properties.get("header_title", "");
if(header_1.equalsIgnoreCase("")){
    header_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "titleText"));
} 

String header_2 = properties.get("header_a_b_c", "");
if(header_2.equalsIgnoreCase("")){
    header_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "abcText"));
} 
 
String header_3 = properties.get("header_term", "");
if(header_3.equalsIgnoreCase("")){
    header_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "termText"));
} 

String header_4 = properties.get("header_deadline", "");
if(header_4.equalsIgnoreCase("")){
    header_4=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "deadlineText"));
} 

String renderer_page = properties.get("renderer_page", "");

String listStyle = properties.get("listStyle", "none");
boolean showDate = properties.get("showDate", false);
boolean showDescription = properties.get("showDescription", false);
String moreLink = properties.get("moreLink", "none");
String moreLinkText = properties.get("moreLinkText", moreLink);
boolean padded = properties.get("padded", false);
boolean shaded = properties.get("shaded", false);
boolean border = properties.get("border", false);

//in order to find out whether it is for "Open" or for "Filled"
String open_filled = properties.get("open_filled", "open");

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
     */

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
    List list = (List) request.getAttribute("list");
    if (!list.isEmpty()) {
        
        String containerClass = listStyle + " ";
        if (padded)
            containerClass += "padded ";
        if (shaded)
            containerClass += "shaded ";
        if (border)
            containerClass += "border ";
          out.write(String.format("<div class=\"%s\">", containerClass));
        //  out.write("<ul>");


        WCMMode includemode = WCMMode.DISABLED.toRequest(request);
        try {
            Iterator<Page> items = list.getPages();
            //table header part
            //in case of position not filled(yes_no=no)
            if(open_filled.equalsIgnoreCase("open")){
            	//START of table part
            	out.write("<div class=\"table-responsive\">");
                out.write("<table class=\"table table-hover table-bordered\"><tr>");
                out.write("<th style='width:30%' scope='col'>");
                out.write(header_2);
                out.write("</th>");

                out.write("<th style='width:25%' scope='col'>");
                out.write(header_1);
                out.write("</th>");

                out.write("<th style='width:30%' scope='col'>");
                out.write(header_3);
                out.write("</th>");
                out.write("<th style='width:15%' scope='col'>");
                out.write(header_4);
                out.write("</th></tr>");
                //out.write("</table>");
                //out.write("<table>");
            }
            else{
            	//START of table part
            	out.write("<div class=\"table-responsive\">");                
                out.write("<table class=\"table table-hover table-bordered\"><tr>");
                out.write("<th style='width:40%' scope='col'>");
                out.write(header_1);
                out.write("</th>");
                out.write("<th style='width:60%' scope='col'>");
                out.write(header_2);
                out.write("</th>");
            }
            while (items.hasNext()) {
                Page item = items.next();
                String itemPath = item.getPath();
                Page itemPage = pageManager.getPage(itemPath);
                ValueMap props = itemPage.getProperties();

                //getting property and converting it to String/Calendar (1st Tab)
                Object deadline = (Object) props.get("deadline");
                Calendar deadline_c = (Calendar) deadline;
                String deadline_s = String.format("%1s", format.format(deadline_c.getTime()));

                //in case of not date type...
                if(deadline_s.contains("2030")){
					deadline_s="Open";
                    if(lang.equals("fr")){
                    	deadline_s="Ouvert";
                    }
                }

                //getting property and converting it to Object/String (2nd and 3rd Tabs)
                //in order to get tag name from tag
                TagManager tm = resourceResolver.adaptTo(TagManager.class);

                //to locate selector and renderer page.
                String[] selectors = itemPage.getPath().split("/");
                String href="";
                if(selectors.length>0){
                    String selector = String.format("%s.%s.%s.html", selectors[5], selectors[6], selectors[7]);
                    //setting the default rederering pages 
                    if(renderer_page.equalsIgnoreCase("")){
                        if(lang.equalsIgnoreCase("en")){
                            renderer_page = "/content/gnb/en/corporate/abc/current_opportunities/abc_renderer";
                        }
                        else{
                            renderer_page = "/content/gnb/fr/corporate/abc/perspectives_actuelles/abc_renderer";
                        }

                    }
                    href = String.format("%s.%s", renderer_page, selector);
                }
                String term = (String) props.get(lang + "_term");
                String job_title = (String) props.get(lang + "_job_title");
				job_title=job_title.trim();
                String job_rank = (String) props.get(lang + "_job_rank");
                String yes_no = (String) props.get("yes_no");
                
                //table body part
                if(open_filled.equalsIgnoreCase("open")){
                    if(yes_no.equalsIgnoreCase("no")){
                        if(!job_title.equals("")){
	                        out.write("<tr><td>");
    	                    out.write(job_title);                             

        	                out.write("</td><td>");
            	            out.write(String.format("<a href=\"%s\">%s</a>",href,job_rank));  
                	        out.write("</td><td>");
                    	    out.write(term);
                        	out.write("</td><td>");
                        	out.write(deadline_s);
                        	out.write("</td></tr>");

                        	}
                        }
                    }
                else{
                    if(yes_no.equalsIgnoreCase("yes")){
                        out.write("<tr><td>");
                        out.write(String.format("<a href=\"%s\">%s</a>",href,job_rank));                           
                        out.write("</td><td>");
                        out.write(job_title);                        
                        out.write("</td></tr>");
                        }
                    }
                }//end of while

            out.write("</table>");
            out.write("</div>");
            //END of table part


            if (list.isPaginating()) {
 %><cq:include script="pagination.jsp" /><%
    }
        } finally {
            //out.write("</ul>");
            includemode.toRequest(request);
        }

        if (!moreLink.equalsIgnoreCase("none")) {
            out.write("<div class=\"morelink\">");

            if (moreLink.startsWith("/")) {
                String link = Utils.getQuicklink(moreLink, currentPage,resource);
                if (Utils.isNotEmpty(moreLinkText)
                        && !moreLink.equalsIgnoreCase(moreLinkText)) {
                    link = link.replaceFirst(">.*<", ">"
                            + moreLinkText.replaceAll("[$]", "\\$")
                            + "<");
                }
                out.write(link);

            } else {
                out.write(String.format(
                        "<a class=\"external\" href=\"%s\">%s</a>",
                        moreLink, moreLinkText));
            }
            out.write("</div>");
        }

        
        out.write("</div>");

    } else {
        //special code to look to the previous sibling in the paragraph container
        //if it is a section title then we assume it is related to this list and hide it
        //Node currentNode;

        if ((WCMMode.fromRequest(request) == WCMMode.DISABLED || (WCMMode.fromRequest(request) == WCMMode.PREVIEW))) {
 %>  <%
 }
 %><cq:include script="empty.jsp" /> <%
 }

    if (mode == WCMMode.EDIT) {
        out.write("</div>");
       }
 %>