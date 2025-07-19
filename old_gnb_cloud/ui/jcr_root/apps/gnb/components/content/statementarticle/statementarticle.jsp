<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Collections"%>

<%
try {
    String lang = "fr";
    String langSuffix = "_F";
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      langSuffix = "_E";
      lang = "en";
    }
%>
<cq:setContentBundle language="<%=lang%>" />
<%


  Page newsItemPage = null;
  String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
  Page configurationPage = Utils.getConfigurationPage(currentPage.getPageManager());
  //out.write(configurationPage.getPath());
  try {

    String renderer = properties.get("renderer", "statement");
    String statementPath = properties.get("statementPath", "");
    if(statementPath==""){
        statementPath="/content/gnb/cnb_data/statement";
    }
    String itemPath = String.format("%s/%s/%s/%s", statementPath, selectors[0], selectors[1], selectors[2]);
    newsItemPage = pageManager.getPage(itemPath);
  } catch (Exception e) {
    log.error("statement article page unable to get data node", e);
  }
  
  if (newsItemPage != null) {
    // Pull content from the specified news item page to display.
    ValueMap props = newsItemPage.getProperties();
    GregorianCalendar onTime = (GregorianCalendar) props.get("onTime");
    SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
    SimpleDateFormat smallformat = new SimpleDateFormat("dd-MM-yy", locale);
    SimpleDateFormat formatWithTime = new SimpleDateFormat("dd MMM yyyy, h:mm a", locale);
    if(lang.equalsIgnoreCase("fr")) {
      formatWithTime = new SimpleDateFormat("dd MMM yyyy, HH'h'mm", locale);
    }

    String type = (String) props.get("type");
    String type_text="";
    type=type.toLowerCase();
    if(!type.equalsIgnoreCase("")){
        type_text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, type));
        }
    //Generate the type
    out.write("<p><b>" + type_text + "</b></p>");
    //Generate the title
    out.write(String.format("<h2>%s</h2>", props.get(lang + "Title", "&nbsp;")));
    //displaying the minister's name
    out.write("<p><b>" + props.get(lang + "MinisterName","&nbsp;") + "</b></p>");

    //Output the department name
    try {
      if (!properties.get("renderer", "newsArticle").contains("media")) {
        ArrayList<String> list = new ArrayList<String>();
        Object[] tags = (Object[]) props.get(lang + "Department");
        TagManager tm = resourceResolver.adaptTo(TagManager.class);
        if (tags != null) {
          for (int i = 0; i < tags.length; i++) {
            String tagValue=(String) tags[i];
            //Tag tag = tm.resolve((String) tags[i]);
            Tag tag = tm.resolve(tagValue);
              if(tag!=null){
            	out.write("<span class=\"post_date\">" + tag.getTitle() + "</span>");
              }  

              else{
            	tagValue="in"+tagValue;
            	//Tag tag = tm.resolve((String) tags[i]);
            	tag = tm.resolve(tagValue);
     			out.write("<span class=\"post_date\">" + tag.getTitle() + "</span>");
              }

            if (i + 1 < tags.length)
              out.write("<br />");
          }
        }

      }//end of if
    } catch (Exception ex) {
      log.error("news article data not tagged with a department", ex);
    }
    
      out.write("<br />");

      //display the date
      out.write(String.format("<span class=\"post_date\">%s</span>", format.format(onTime.getTime())));
      out.write("<br />");
      out.write("<br/>");

    
    out.write("<div class=\"articleBody\">");
    out.write(props.get(lang + "ArticleBody", "&nbsp;"));
    //out.write("<span class=\"post_date\">");
    //out.write(smallformat.format(onTime.getTime()));
    //out.write("</span>");   
    out.write("</div>");   
  } else {
    %><cq:include script="empty.jsp" /><%
  }
} catch (Exception e) {

  log.error("Something bad happened on the statement article", e);
  %><cq:include script="empty.jsp" /><%
}
%>