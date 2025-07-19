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
String header_1 = properties.get("header_cities", "");
if(header_1.equalsIgnoreCase("")){
    header_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "cities_Text"));
} 

String header_2 = properties.get("header_contact", "");
if(header_2.equalsIgnoreCase("")){
    header_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "contact_Text"));
} 

String header_3 = properties.get("header_mayor", "");
if(header_3.equalsIgnoreCase("")){
    header_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "mayor_Text"));
} 

String header_4 = properties.get("header_councillors", "");
if(header_4.equalsIgnoreCase("")){
    header_4=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "councilors_Text"));
} 

String telephone_Text = properties.get("telephone_Text", "");
if(telephone_Text.equalsIgnoreCase("")){
    telephone_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "telephone_Text"));
} 

String fax_Text = properties.get("fax_Text", "");
if(fax_Text.equalsIgnoreCase("")){
    fax_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "fax_Text"));
} 

String nb_Text = properties.get("nb_Text", "");
if(nb_Text.equalsIgnoreCase("")){
    nb_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "nb_Text"));
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
                out.write("<table><tr>");
                out.write("<th width='30%'>");
                out.write(header_1);
                out.write("</th>");
                out.write("<th width='29%'>");
                out.write(header_2);
                out.write("</th>");
                out.write("<th width='19%'>");
                out.write(header_3);
                out.write("</th>");
                out.write("<th width='22%'>");
                out.write(header_4);
                out.write("</th></tr>");
                //out.write("</table>");
                //out.write("<table>");

            while (items.hasNext()) {
                Page item = items.next();
                String itemPath = item.getPath();
                Page itemPage = pageManager.getPage(itemPath);
                ValueMap props = itemPage.getProperties();

                String[] selectors = itemPage.getPath().split("/");
                String href="";
                
                if(selectors.length>0){
                    String selector = String.format("%s.%s.%s.html", selectors[4], selectors[5], selectors[6]);
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

                //First column (Cities)
                String cities  = (String) props.get(lang + "_community_name");
                String address = (String) props.get(lang + "_address");
                String address1 = (String) props.get(lang + "_address1");                
                String address2 = (String) props.get(lang + "_address2","");   
                String city = (String) props.get(lang + "_city");      
                String postal_code = (String) props.get(lang + "_postal_code"); 
                
                //Second column (Contact)
                String telephone = (String) props.get("telephone"); 
                String fax = (String) props.get("fax"); 
                String homepage = (String) props.get(lang + "_homepage"); 
                int homepageIndex=homepage.indexOf("www.");
                String homepage_text ="" ; 
                if(homepage.startsWith("http://")){
                    homepage_text=homepage.substring(homepageIndex);
                }
                
                //Third column (Contact)
                String mayor = (String) props.get("mayor"); 
                
                //Forth column (Councilors)
                String[] councilors = props.get("councillors", String[].class) ;

                                                                
                //First column (Cities)
                out.write("<tr><td>");
                if(!(cities.equalsIgnoreCase(""))){
                    cities=String.format("<a href=\"%s\">%s</a>",href,cities);       
                    out.write("<b>"+cities+"</b>");              
                    out.write("<br/>");  
                } 
                if(!(address.equalsIgnoreCase(""))){
                    out.write(address);              
                    out.write("<br/>");  
                } 
                if(!(address1.equalsIgnoreCase(""))){
                    out.write(address1);              
                    out.write("<br/>");  
                } 
                if(!(address2.equalsIgnoreCase(""))){
                    out.write(address2);              
                    out.write("<br/>");  
                } 
                if(!(city.equalsIgnoreCase(""))){
                    out.write(city);              
                    out.write(", ");  
                    out.write(nb_Text);  
                    out.write(" ");  
                    out.write(postal_code);   
                } 
                
                //Second column (Contact)
                out.write("</td><td>");
                if(!(telephone.equalsIgnoreCase(""))){
                    out.write(telephone_Text);  
                    out.write(telephone);              
                    out.write("<br/>");  
                } 
                if(!(fax.equalsIgnoreCase(""))){
                    out.write(fax_Text);  
                    out.write(fax);              
                    out.write("<br/>");  
                } 
              
                if(!(homepage.equalsIgnoreCase(""))){
                    out.write("<br/>");  
                    out.write(String.format("<a href=\"%s\">%s</a>",homepage,homepage_text));                        
                    out.write("<br/>");  
                } 

                //Third column (Mayor)
                out.write("</td><td>");
                if(!(mayor.equalsIgnoreCase(""))){
                    out.write(mayor);              
                    out.write("<br/>");  
                } 

                //Forth column (Councillors)                
                out.write("</td><td>");
                try
                {
                //**IMPORTANT Part - creating array no matter what value is.
                    if(councilors!=null) 
                    {
                        for(int i=0;i<councilors.length;i++) 
                        {
                            out.write(councilors[i] + "<br />");
                        }
                    }
                }
                catch(Exception ex) 
                {
                    log.error("Councilor's part is wrong",ex);   
                }
                //end of forth column(Councillors)
                
                out.write("</td></tr>");

            }//end of while

            out.write("</table>"); //end of table
            
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