<?xml version="1.0" encoding="utf-8"?>
<%@ page session="false"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="javax.jcr.Node"%>
<%@page import="javax.jcr.Session"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.t4g.cnb.utils.ListItem"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Collections"%>

<%@include file="/libs/foundation/global.jsp"%>
<%
try {
    try {
      String path = properties.get("parentPage", "");
      if (path.equals("")) {
        currentNode.setProperty("parentPage", currentPage.getPath());
        currentNode.save();
      }
    } catch (Exception e) {}
    %>
    <cq:include script="init.jsp" />
    
    <%
    WCMMode.DISABLED.toRequest(request);
     
    String lang = "fr";
    String langSuffix = "_F";
    
    Locale locale = currentPage.getLanguage(true);
   
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      lang="en";
      langSuffix = "ENG";
      locale=new Locale("en");
    }
    else locale=new Locale("fr");
    final SimpleDateFormat outDateFormat = new SimpleDateFormat("E, dd MMM yyyy HH:mm:ss '-0400'");     
    //final SimpleDateFormat outDateFormat = new SimpleDateFormat("E, dd MMMM yyyy HH:mm:ss 'AST'", locale);
    //final SimpleDateFormat outDateFormat = new SimpleDateFormat("yyyyMMddHH:mm:ss", locale);  
        
    String host = "https://" + request.getServerName() + ":" + request.getServerPort();
    String url = currentPage.getPath();
    String link = host + url + ".html";
    String title = (String) properties.get("feedname", null) != null ? (String) properties.get("feedname", null) : currentNode.getName();
    String subTitle = (String) properties.get("feeddescription", null) != null ? (String) properties.get("feeddescription", null) : (String) properties.get("jcr:description", null);
    Page configurationPage = Utils.getConfigurationPage(currentPage.getPageManager());
  
    out.write("<rss version=\"2.0\">\n");
    out.write("<channel>\n");
    out.write(String.format("<title>%s</title>\n",title));
    out.write(String.format("<link>%s</link>\n",link));
    out.write(String.format("<description>%s</description>\n",subTitle));

    List list = (List) request.getAttribute("list");
    Date lastUpdated = currentPage.getLastModified().getTime();



    

    if (!list.isEmpty()) {
     
      Iterator<Page> items = list.getPages();

      //String value_title="";
      //String value_description="";
      

      String email="";
      String fax="";
      String telephone="";
      
      String bi_draftregulation="";
      String en_draftregulation="";
      String fr_draftregulation="";

      String en_department="";
      String fr_department="";

      String en_note="";
      String fr_note="";
      //Date deadline = currentPage.getLastModified().getTime();
                  
      int index_of;
      
      while (items.hasNext()) {
        String value_description="";
        String value_title="";
        
        Page item = items.next();

        //converting Pag to pageManager and property
        String itemPath = item.getPath();
        Page itemPage = pageManager.getPage(itemPath);


        ValueMap props = itemPage.getProperties();
        value_title=(String)props.get(lang+"_title");

        /**          
        String deptDataPage = Utils.getConfigurationProperty("cnbDepartmentMetadata", configurationPage);
        String activePath = deptDataPage+"/active/"; 
        String inactivePath = deptDataPage+"/inactive/"; 
		**/

		ArrayList<String> list1 = new ArrayList<String>();
        Object[] tags = (Object[]) props.get(lang + "_department");

        //in order to get tag name from tag
        TagManager tm = resourceResolver.adaptTo(TagManager.class);        
        
        //DESCRIPTION
        //deadline
        SimpleDateFormat format = new SimpleDateFormat("dd MMMM yyyy", locale);
        String deadlineStr="";
        if ((Calendar) props.get("deadline")!=null){
            Calendar deadline = (Calendar) props.get("deadline");
            deadlineStr = String.format("%1s", format.format(deadline.getTime()));
        }
        value_description=value_description+"Deadline / Date limite : "+deadlineStr;
        value_description=value_description+"&lt;br&gt;";

        //email
        value_description=value_description+"Email / Courriel : "+(String)props.get("email");
        value_description=value_description+"&lt;br&gt;";

        //telephone  T&#233;l&#233;phone  =  téléphone
        value_description=value_description+"Telephone / T&#233;l&#233;phone : "+(String)props.get("telephone");
        value_description=value_description+"&lt;br&gt;";
        
        //fax  T&#233;l&#233;copieur  =  télécopieur
        value_description=value_description+"Fax / T&#233;l&#233;copieur : "+(String)props.get("fax");
        value_description=value_description+"&lt;br&gt;";
        

        //pdf
        value_description=value_description+"Bilingual / Bitexte: "+host+(String)props.get("bi_draftregulation");
        value_description=value_description+"&lt;br&gt;";
        value_description=value_description+"English / Anglais : "+host+(String)props.get("en_draftregulation");
        value_description=value_description+"&lt;br&gt;";
        value_description=value_description+"French / Fran&#231;ais : "+host+(String)props.get("fr_draftregulation");
        value_description=value_description+"&lt;br&gt;";        

        //note
    
        //Department(s)  /  Ministères = Minist&#232;res
        //department tag part
        //out.write(department_text);
        if (tags != null) {
                value_description=value_description+"Department(s) / Minist&#232;res : ";
            for (int i = 0; i < tags.length; i++) {
				Tag tag = tm.resolve((String) tags[i]);

                /**
                String temp = (String)tags[i];
                temp = temp.replace(":","/");
                Tag tag = tm.resolve(activePath+temp);            

                if (tag == null) {
                  tag = tm.resolve(inactivePath+temp);
                }
                **/
                
				if (tag!=null) {
                   list1.add(tag.getTitle());
                }              

                //Tag tag = tm.resolve((String) tags[i]);
                //out.write(tag.getTitle());
                               

            }
           String temp1="";
           Collections.sort(list1);
           for (int x=0; x<list1.size();x++) {
             temp1=temp1+ list1.get(x).replace("* ", "")+"; ";

           }//end of if                

        value_description=value_description+temp1+"&lt;br&gt;";                  
        }//end of if
        
        //value_description=deadline;
        //with the href to the rendering page of the report
        //Date deadline=(Date)props.get("deadline");
        //Date deadline = currentPage.getLastModified().getTime();
        //Date deadline = (Date)props.get("deadline");
        
      
        String selector="";
        String href="";
      
        String selectors[]= itemPath.split("/");
      
        if (selectors.length > 0) {
            selector = String.format("html");
            //out.write(selector);
        }
       
        //renderer
       String rendererPage=properties.get("renderer_page",""); 
        //set French rendering page    
        if (rendererPage.equals("")){
            if (lang.equals("en")){
                rendererPage="/content/gnb/en/corporate/public_review_ofdraftregulations";
                
            }
            else
                rendererPage="/content/gnb/fr/corporate/examen_public_des_projets_de_reglements";
        } 
        href=String.format("%s.%s",rendererPage,selector);
  
        Calendar lastModified=(Calendar)props.get("onTime");
        lastUpdated=lastModified.getTime();
        
        out.write("<item>\n");
        out.write(String.format("<title>%s</title>\n",value_title));
        out.write(String.format("<link>%s%s</link>\n", host,href));
        out.write(String.format("<description>%s</description>\n",value_description));
        if (lastUpdated != null) {
          out.write(String.format("<pubDate>%s</pubDate>\n",outDateFormat.format(lastUpdated)));
        }
        out.write("</item>\n");
      }//end of display to public
     }  //end while   

    if(lastUpdated!=null){
      out.write(String.format("<pubDate>%s</pubDate>\n",outDateFormat.format(lastUpdated)));
    }
    out.write("</channel>");
    out.write("</rss>");
} catch (Exception e) {
    log.error("error rendering feed for list", e);
}
%>