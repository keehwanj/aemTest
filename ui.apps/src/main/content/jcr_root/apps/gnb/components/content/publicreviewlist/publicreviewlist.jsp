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
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Collections"%>

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

//setting text using i18n
String header_contactforinput = properties.get("contactforinput", "");
if(header_contactforinput.equalsIgnoreCase("")){
    header_contactforinput=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "contactforinputText"));
    } 

String header_deadline = properties.get("deadline", "");
if(header_deadline.equalsIgnoreCase("")){
    header_deadline=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "deadlineText"));
    }

String header_linktodraftregulation = properties.get("linktodraftregulation", "");
if(header_linktodraftregulation.equalsIgnoreCase("")){
    header_linktodraftregulation=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "linktoDraftRegulationText"));
    }

String header_title = properties.get("title", "");
if(header_title.equalsIgnoreCase("")){
    header_title=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "titleText"));
    }

String bi_link_text = properties.get("bi_link_text", "");
if(bi_link_text.equalsIgnoreCase("")){
    bi_link_text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "bi_LinkText"));
    }

String en_link_text = properties.get("en_link_text", "");
if(en_link_text.equalsIgnoreCase("")){
    en_link_text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "en_LinkText"));
    }

String fr_link_text = properties.get("fr_link_text", "");
if(fr_link_text.equalsIgnoreCase("")){
    fr_link_text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "fr_LinkText"));
    }

String department_text = properties.get("department_text", "");
if(department_text.equalsIgnoreCase("")){
    department_text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "departmentText"));
    }

String email_text = properties.get("email_text", "");
if(email_text.equalsIgnoreCase("")){
    email_text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "emailText"));
    }

String telephone_text = properties.get("telephone_text", "");
if(telephone_text.equalsIgnoreCase("")){
    telephone_text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "telephoneText"));
    }

String fax_text = properties.get("fax_text", "");
if(fax_text.equalsIgnoreCase("")){
    fax_text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "faxText"));
    }


Page configurationPage = Utils.getConfigurationPage(currentPage.getPageManager());
//out.write(header_contactforinput);
//out.write("<br>");
//out.write(lang);

String listStyle = properties.get("listStyle", "none");
boolean showDate = properties.get("showDate", false);
boolean showDescription = properties.get("showDescription", false);
String moreLink = properties.get("moreLink", "none");
String moreLinkText = properties.get("moreLinkText", moreLink);
boolean padded = properties.get("padded", false);
boolean shaded = properties.get("shaded", false);
boolean border = properties.get("border", false);


WCMMode mode = WCMMode.fromRequest(request);


if (mode == WCMMode.EDIT) {
    //drop target css class = dd prefix + name of the drop target in the edit config
    String ddClassName = DropTarget.CSS_CLASS_PREFIX + "pages";
    out.write("<div>");
    }
/*
    if (properties.get("feedEnabled", false)) {
        String title = (String) properties.get("feedname", null) != null ? (String) properties.get("feedname", null): currentNode.getName();
*/%>

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
            //int index1 = 0;
            //START of table part
            out.write("<div class=\"table-responsive\">");
            out.write("<table class=\"table table-hover table-bordered\"><tr>");
            out.write("<th style='width:31%' scope='col'>");
            out.write(header_title);
            out.write("</th>");
            out.write("<th  style='width:23%' scope='col'>");
            out.write(header_linktodraftregulation);
            out.write("</th>");
            out.write("<th  style='width:30%' scope='col'>");
            out.write(header_contactforinput);
            out.write("</th>");
            out.write("<th  style='width:16%' scope='col'>");
            out.write(header_deadline);
            out.write("</th></tr>");
            //out.write("</table>");
            //out.write("<table>");

            while (items.hasNext()) {
                Page item = items.next();
                //index1=index1+1;
                //out.write(index1);
                //converting Pag to pageManager and property
                String itemPath = item.getPath();
                Page itemPage = pageManager.getPage(itemPath);
                ValueMap props = itemPage.getProperties();

                //getting property and converting it to String/Calendar (1st Tab)
                String bi_draftregulation = (String) props.get("bi_draftregulation");
                //out.write(bi_draftregulation);
                /**
                Object onTime = (Object) props.get("onTime");
                Calendar onTime_c = (Calendar) onTime;
                String onTime_s = String.format("%1s", format.format(onTime_c.getTime()));
                */
                
                Object deadline = (Object) props.get("deadline");
                Calendar deadline_c = (Calendar) deadline;
                String deadline_s = String.format("%1s", format.format(deadline_c.getTime()));

                String email = (String) props.get("email");
                String fax = (String) props.get("fax");
                String telephone = (String) props.get("telephone");

                //getting property and converting it to Object/String (2nd and 3rd Tabs)
                //Object[] tags = (Object[]) props.get(lang + "_department");
                
                
                

                //in order to get tag name from tag
                //TagManager tm = resourceResolver.adaptTo(TagManager.class);

                //String description = (String) props.get(lang + "_description");
                String en_draftregulation = (String) props.get("en_draftregulation");
                String fr_draftregulation = (String) props.get("fr_draftregulation");
                String title = (String) props.get(lang + "_title");
                String note = (String) props.get(lang + "_note");
                
                //table body part
                out.write("<tr><td>");
                out.write(title);
                out.write(note);
                out.write("</td><td>");
                out.write(String.format("<a href=\"%s\">%s</a>",bi_draftregulation,bi_link_text));              
                out.write("<br>");
                out.write(String.format("<a  href=\"%s\">%s</a>",en_draftregulation,en_link_text));
                //out.write(en_link_text);                
                out.write("<br>");
                out.write(String.format("<a  href=\"%s\">%s</a>",fr_draftregulation,fr_link_text));                
                out.write("</td><td>");
                //department tag part
                //out.write(department_text);

         try {
             /**
            String deptDataPage = Utils.getConfigurationProperty("cnbDepartmentMetadata", configurationPage);
            String activePath = deptDataPage+"/active/"; 
            String inactivePath = deptDataPage+"/inactive/"; 
            **/ 
            ArrayList<String> list1 = new ArrayList<String>();
            Object[] tags = (Object[]) props.get(lang + "_department");
            TagManager tm = resourceResolver.adaptTo(TagManager.class);
                    if(tags!=null) {
                      for(int i=0;i<tags.length;i++) {
                        String tagValue=(String) tags[i];

 						Tag tag = tm.resolve(tagValue);
                          if(tag!=null){
							out.write(tag.getTitle() + "<br />");
                          }
                          else{
							tagValue="in"+tagValue;
                            tag = tm.resolve(tagValue);
							out.write(tag.getTitle() + "<br />");                              
                          }
                      	}
                      }
         } catch (Exception ex) {
          log.error("news article data not tagged with a department", ex);
            }

                out.write(email_text);
                out.write("<a href=mailto:"+email+">"+email+"</a>");
                out.write("<br>");

                out.write(telephone_text);
                out.write(telephone);
                out.write("<br>");

                out.write(fax_text);
                out.write(fax);
                out.write("<br>");
                
                out.write("</td><td>");
                out.write(deadline_s);
                out.write("</td></tr>");

            }//end of while

            out.write("</table>");
            out.write("</div>");
            //END of table part

            if (list.isPaginating()) {
 %><cq:include script="pagination.jsp" /> <%
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