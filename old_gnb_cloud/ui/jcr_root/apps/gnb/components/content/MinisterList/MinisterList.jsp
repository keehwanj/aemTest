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
<%@page import="com.day.cq.commons.jcr.JcrUtil"%>
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
String president = "<A HREF=\"http://www1.gnb.ca/legis/bios1/bio-f.asp?IDNo=209&legisNo=57&version=f\"><b>Pr&eacute;sident de l'Assembl&eacute;e l&eacute;gislative</b>";
String minPdf = "Nota: Pour une liste incluant les coordonn&eacute;es, consultez les formats <a href=\"minReport.html\">HTML</a> ou <a href=\"http://app.infoaa.7700.gnb.ca/gnb/PDF/ministres.pdf\"><font size=\"-1\">PDF</font></a>.";
String order = "Les noms des ministres apparaissent selon l'ordre d'apparition de leurs minist&egrave;res tel que d&eacute;cr&eacute;t&eacute; par la <i>Loi sur le Conseil ex&eacute;cutif</i>";
String adobe = "Note: Les documents disponibles en format Adobe (PDF) n&eacute;cessitent le lecteur Adobe, disponible au site<A href=\"http://get.adobe.com/reader/\"> Adobe  </a>";
if (lang.equals("en")) {
    adobe = "Note: Documents in the Adobe format (PDF) require the Adobe Reader, which can be downloaded from the <A href=\"http://get.adobe.com/reader/\">Adobe Homepage</a> ";
    president = "<A HREF=\"http://www1.gnb.ca/legis/bios1/bio-e.asp?IDNo=209&version=e&legisNO=57\"><b>Speaker of the Legislative Assembly</b></a>";
    minPdf = "Note: For a list including contact information, refer to the <a href=\"minReport.html\">HTML</a> or <a href=\"http://app.infoaa.7700.gnb.ca/gnb/PDF/Ministers.pdf\"><font size=\"-1\">PDF </font></a> versions.";
    order = "Ministers' names are listed in the order their departments appear in the <i>Executive Council Act</i>";
}

%>
<cq:setContentBundle language="<%=lang%>" />
<% 
Page configurationPage = pageManager.getPage("/content/gnbconfig");
String dataPage;
if (configurationPage != null) {
     dataPage = configurationPage.getProperties().get("organisationDataPage", "");
}
else {
   dataPage = "/content/data/organizations";
}  
map.put("1_prop", "orginfo/ORGLEVEL");
map.put("1_prop.operation", "like");      
map.put("1_prop.value", "01");
map.put("path", dataPage);
map.put("type", Nodes.PAGE.nodeType());
map.put("tagid.property", "jcr:content/cq:tags");
   
Query query = builder.createQuery(PredicateGroup.create(map), session);
query.setHitsPerPage(0);
try {
  result = query.getResult();
}
catch (Exception e) {
}
  

//sorts the results by Publish
List<Hit> test = result.getHits();
ArrayList<Hit> list = new ArrayList<Hit>();

for (int i = 0; i<test.size(); i++) {
    test.get(i).getNode().getProperty("orginfo/PERSONINCHARGE");
    if (!test.get(i).getNode().getProperty("orginfo/PERSONINCHARGE").getString().equals("0")) {
        list.add(test.get(i));
    }
}
for (int i=0; i<list.size(); i++) {
    Hit temp = list.get(i);
    for (int j=i+1; j<list.size(); j++) {
        if (Integer.parseInt(temp.getNode().getProperty("orginfo/PUBLISH").getString())>Integer.parseInt(list.get(j).getNode().getProperty("orginfo/PUBLISH").getString()) ) {
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
   <td><%=minPdf %></td>
</tr>
</table>
<div class="clearfloat"></div>
<TABLE width="800" border="0" cellspacing="0" cellpadding="0">
   <TR>
     <td><font size="+1"><%=president %></font></TD>
   </TR>
   <tr><td><%=order%></td></tr>
</TABLE>

<c:choose>
    <c:when test="${empty result}"><p><%=result.getQueryStatement() %></p>
    </c:when>
    <c:when test="${empty result.hits}">
        <fmt:message key="contactNoResultsText" />
    </c:when>
    <c:otherwise>
        <div id="search_column_full">
        <table width="100%" > 
            <tr>
                        <th colspan="2"><fmt:message key="hon" /></th>
                        <th><fmt:message key="cabinet" /></th>
                        <th><fmt:message key="biography" /></th>
            </tr>
                        <%   String contactDataPage = configurationPage.getProperties().get("contactDataPage", "");
                       for (int i=0; i<list.size(); i++) {
                             Node dept = list.get(i).getNode();
                             
                             int contactID = Integer.parseInt(dept.getProperty("orginfo/PERSONINCHARGE").getString());
                             int contactBucket = (contactID/250+1)*250; 
                             Node contact = JcrUtil.createPath(contactDataPage+"/"+contactBucket+"/"+contactID+"/",Nodes.PAGE.nodeType(), session);
                             
                             if (contact.getProperty("contactinfo/PERSONTYPEID").getString().equals("5")) {
                                   Property deptName = dept.getProperty("orginfo/DEPTNAME"+langsuffix);
                                   Property fname =contact.getProperty("contactinfo/FIRSTNAME");
                                   Property lname =contact.getProperty("contactinfo/LASTNAME");
                                   Property title;
                                   if (langsuffix != "FRE") {
                                        title = contact.getProperty("contactinfo/TITLE"+langsuffix);
                                   }
                                   else {
                                        title = contact.getProperty("contactinfo/TITLE"+langsuffix+"M");
                                   }
                                   Property url = contact.getProperty("contactinfo/URLINTERNET"+langsuffix);
                                   String temp = contact.getPath();
                                   temp = temp.substring(temp.lastIndexOf('/')+1);
                                   String nodeurl = "contacts_renderer."+temp+".html";
                             
                                   temp = dept.getPath();
                                   temp = temp.substring(temp.indexOf("organizations/")+14);
                                   String orgurl = "dept_renderer." + temp +".html";
                             
                                 %><tr>
                                      <td><a href=<%=nodeurl %>><%=fname.getString()+" " +lname.getString()%></a> </td>
                                      <td><%=title.getString() %></td>
                                      <td><a href=<%=orgurl%>><%=deptName.getString() %></a> </td>
                                      <% if (!url.getString().equals("")) { %>
                                      <td><a href=<%=url.getString() %>><fmt:message key="biography"/> </a></td>
                                      <% }
                                      else{
                                         %><td/>   <% 
                                      }%>
                                 </tr><%
                             }
                       }
                                 %>
                         
                         
        </table>
        <br />
        <p><%=adobe %></p>
        </div>
    </c:otherwise>
</c:choose>