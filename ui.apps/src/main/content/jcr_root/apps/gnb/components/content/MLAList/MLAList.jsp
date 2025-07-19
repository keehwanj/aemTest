<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Map"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.t4g.cnb.tag.DepartmentValueComparator"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%
SearchResult result = null;
final Session session = resource.getResourceResolver().adaptTo(Session.class);
final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
Map<String, String> map = new HashMap<String, String>();


// Get language and content bundle for that language
String lang = "fr";
String langsuffix = "FRE";
Locale locale = currentPage.getLanguage(true);
if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
  lang = "en";
  langsuffix = "ENG";
}
String president = "<A HREF=\"http://www1.gnb.ca/legis/bios1/bio-f.asp?IDNo=209&legisNo=57&version=f\"><b>Pr�sident de l'Assembl�e l�gislative</b>";
String mlaPdf = "Nota: Pour une liste incluant les coordonn�es, consultez les formats <a href=\"MLAReport.html\">HTML</a> ou <a href=\"http://app.infoaa.7700.gnb.ca/gnb/PDF/deputes.pdf\"><font size=\"-1\">PDF</font></a>.";
String adobe = "Note: Les documents disponibles en format Adobe (PDF) n�cessitent le lecteur Adobe, disponible au site<A href=\"http://get.adobe.com/reader/\"> Adobe  </a>";
if (lang.equals("en")) {
    adobe = "Note: Documents in the Adobe format (PDF) require the Adobe Reader, which can be downloaded from the <A href=\"http://get.adobe.com/reader/\">Adobe Homepage</a> ";
    president = "<A HREF=\"http://www1.gnb.ca/legis/bios1/bio-e.asp?IDNo=209&version=e&legisNO=57\"><b>Speaker of the Legislative Assembly</b></a>";
    mlaPdf = "Note: For a list including contact information, refer to the  <a href=\"MLAReport.html\">HTML</a> or <a href=\"http://app.infoaa.7700.gnb.ca/gnb/PDF/MLAs.pdf\"><font size=\"-1\">PDF </font></a> versions."; 
}
%>
<cq:setContentBundle language="<%=lang%>" />
<% 
Page configurationPage = pageManager.getPage("/content/gnbconfig");
String dataPage="";
if (configurationPage != null) {
     dataPage = configurationPage.getProperties().get("contactDataPage", "");
}
else {
   dataPage = "/content/data/contacts";
}  
map.put("property", "contactinfo/PERSONTYPEID");
map.put("property.operation", "like");      
map.put("property.value", "2");
map.put("path", dataPage + "/.");
map.put("type", Nodes.PAGE.nodeType());
map.put("orderby", "@contactinfo/@LASTNAME_STRIP, contactinfo/@FIRSTNAME_STRIP");
map.put("tagid.property", "jcr:content/cq:tags");
   
Query query = builder.createQuery(PredicateGroup.create(map), session);
  query.setHitsPerPage(0);
try {
  result = query.getResult();
}
catch (Exception e) {

}
  
  //Sorts the results by electoral districts
  List<Hit> test = result.getHits();
  ArrayList<Hit> list = new ArrayList<Hit>();

  for (int i = 0; i<test.size(); i++) {
      list.add(test.get(i));
  }
  for (int i=0; i<list.size(); i++) {
      Hit temp = list.get(i);
      for (int j=i+1; j<list.size(); j++) {
          if (temp.getNode().getProperty("contactinfo/ORGANIZATION_PATH").getNode().getProperty("orginfo/ORGNAME"+langsuffix+"_STRIP").getString().compareTo(list.get(j).getNode().getProperty("contactinfo/ORGANIZATION_PATH").getNode().getProperty("orginfo/ORGNAME"+langsuffix+"_STRIP").getString())>0 ) {
              temp = list.get(j);
          }
      }
      list.remove(temp);
      list.add(i,temp);
  }
  pageContext.setAttribute("result", result);
%>

<table width="800" border="0" cellspacing="0" cellpadding="0">
<tr>
   <td><%=mlaPdf%></td>
</tr>
</table>
<div class="clearfloat"></div>
<TABLE width="800" border="0" cellspacing="0" cellpadding="0">
   <TR>
     <td><font size="+1"><%=president %></font></TD>
   </TR>
</TABLE>
<c:choose>
    <c:when test="${empty result}">
    </c:when>
    <c:when test="${empty result.hits}">
        <fmt:message key="contactNoResultsText" />
    </c:when>
    <c:otherwise>
        <div id="search_column_full">
        <table>
            <tr>
                        <th><fmt:message key="constituency" /></th>
                        <th><fmt:message key="name" /></th>
                        <th><fmt:message key="biography" /></th>

                        <%  //List<Hit> list = result.getHits();
                        for (int i=0; i<list.size(); i++) {
                             Node node = list.get(i).getNode();
                             Property orgpath = node.getProperty("contactinfo/ORGANIZATION_PATH").getNode().getProperty("orginfo/ORGNAME"+langsuffix);
                             Property fname =node.getProperty("contactinfo/FIRSTNAME");
                             Property lname =node.getProperty("contactinfo/LASTNAME");
                             Property des = node.getProperty("contactinfo/DESIGNATION"+langsuffix);
                             Property title = node.getProperty("contactinfo/TITLENAME"+langsuffix);
                             Property url = node.getProperty("contactinfo/URLINTERNET"+langsuffix);
                             String temp = node.getPath();
                             temp = temp.substring(temp.lastIndexOf('/')+1);
                             String nodeurl = "contacts_renderer."+temp+".html";
                             temp = node.getProperty("contactinfo/ORGANIZATION_PATH").getString();
                             temp = temp.substring(temp.indexOf("organizations/")+14);
                             temp = temp.replaceAll("/",".");
                             String orgurl = "dept_renderer." + temp +".html";
                             
                            
                             %><tr>
                             <td><a href=<%=orgurl%>><%=orgpath.getString() %></a> </td>
                             <td><a href=<%=nodeurl %>><%=title.getString()+" " +fname.getString()+" " +lname.getString()+" "+des.getString()%></a> </td>
                             <% if (!url.getString().equals("")) { %>
                             <td><a href=<%=url.getString() %>><fmt:message key="biography"/> </a></td>
                             <%}
                             else{
                             %><td/>  <% 
                             }%>
                             </tr><%
                             }             
                        %>
            </tr>
        </table>
        <br />
        <p><%=adobe %></p>
        </div>
    </c:otherwise>
</c:choose>
