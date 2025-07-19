<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Arrays"%>
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
String phoneMessage = "T�l�phone : ";
String faxMessage = "T�l�copieur : ";
if (lang.equals("en")) {
    phoneMessage = "Phone: ";
    faxMessage = "Fax: ";
}

%>
<cq:setContentBundle language="<%=lang%>" />
<% 
Page configurationPage = pageManager.getPage("/content/gnbconfig");
String dataPage="";
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

<div class="clearfloat"></div>
<c:choose>
    <c:when test="${empty result}">
    </c:when>
    <c:when test="${empty result.hits}">
        <fmt:message key="contactNoResultsText" />
    </c:when>
    <c:otherwise>
        <div id="search_column_full">
        <table class="table table-striped table-bordered table-hover">
                    <%    String contactDataPage = configurationPage.getProperties().get("contactDataPage", "");
                        for (int i=0; i<list.size(); i++) {

                             Node dept = list.get(i).getNode();
                             
                             int contactID = Integer.parseInt(dept.getProperty("orginfo/PERSONINCHARGE").getString());
                             int contactBucket = (contactID/250+1)*250; 
                             Node contact = JcrUtil.createPath(contactDataPage+"/"+contactBucket+"/"+contactID+"/",Nodes.PAGE.nodeType(), session);
                             
                             if (contact.getProperty("contactinfo/PERSONTYPEID").getString().equals("5")) {
                             try {
                             Property deptName = dept.getProperty("orginfo/DEPTNAME"+langsuffix);
                             Property fname =contact.getProperty("contactinfo/FIRSTNAME");
                             Property lname =contact.getProperty("contactinfo/LASTNAME");
                             Property titleName = contact.getProperty("contactinfo/TITLENAME"+langsuffix);
                             Property title;
                             if (langsuffix != "FRE") {
                                   title = contact.getProperty("contactinfo/TITLE"+langsuffix);
                             }
                             else {
                                 title = contact.getProperty("contactinfo/TITLE"+langsuffix+"M");
                             }
                             
                             Property pbuilding = contact.getProperty("contactinfo/PUB_BLDG_NAME_" +langsuffix);
                             Property padd1 =  contact.getProperty("contactinfo/PUB_ADDRESS"+langsuffix+"1");
                             Property padd2 = contact.getProperty("contactinfo/PUB_ADDRESS"+langsuffix+"2");
                             Property padd3 = contact.getProperty("contactinfo/PUB_ADDRESS"+langsuffix+"3");

                             Property pcity = contact.getProperty("contactinfo/PUB_CITY"+langsuffix);
                             Property pprov = contact.getProperty("contactinfo/PUB_PROVINCE"+langsuffix);
                             Property ppost = contact.getProperty("contactinfo/PUB_POSTALCODE");
                             Property pcountry = contact.getProperty("contactinfo/PUB_COUNTRY");
                             
                             Property mbuilding = contact.getProperty("contactinfo/M_BLDG_NAME_" +langsuffix);
                             Property madd1 =  contact.getProperty("contactinfo/M_ADDRESS"+langsuffix+"1");
                             Property madd2 = contact.getProperty("contactinfo/M_ADDRESS"+langsuffix+"2");
                             Property madd3 = contact.getProperty("contactinfo/M_ADDRESS"+langsuffix+"3");

                             Property mcity = contact.getProperty("contactinfo/M_CITY"+langsuffix);
                             Property mprov = contact.getProperty("contactinfo/M_PROVINCE"+langsuffix);
                             Property mpost = contact.getProperty("contactinfo/M_POSTALCODE");
                             Property mcountry = contact.getProperty("contactinfo/M_COUNTRY");
                             
                             Property phone = contact.getProperty("contactinfo/PUBLISHEDPHONE");
                             Property phoneArea = contact.getProperty("contactinfo/PUBLISHEDPHONEAREA");
                             Property fax = contact.getProperty("contactinfo/FAX");
                             Property faxArea = contact.getProperty("contactinfo/FAXAREA");
                             Property email = contact.getProperty("contactinfo/PUBLISHEDEMAIL");
                             
                             
                             String temp = contact.getPath();
                             temp = temp.substring(temp.lastIndexOf('/')+1);
                             String nodeurl = "contacts_renderer."+temp+".html";
                             temp = dept.getPath();
                             temp = temp.substring(temp.indexOf("organizations/")+14);
                             String orgurl = "dept_renderer." + temp +".html";
                             
                             %><tr>
                             <td><font size="4"><a href=<%=nodeurl %>><%=titleName.getString() +" " +fname.getString()+" " +lname.getString()%></a></font></td>
                             </tr>
                             <tr>
                             <td><%=title.getString() %>: <a href=<%=orgurl%>><%=deptName.getString() %></a> </td>
                             </tr>
                             <tr>
                             <td>
                             <b><fmt:message key="physicalAddress" /></b><br />
                             <% if (!pbuilding.getString().equals("9999999999")&& !pbuilding.getString().equals("")) { %>
                             <%=pbuilding.getString()%><br />
                             <%} %>
                            
                             
                             <% if (!padd1.getString().equals("")) { %>
                             <%=padd1.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!padd2.getString().equals("")) { %>
                             <%=padd2.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!padd3.getString().equals("")) { %>
                             <%=padd3.getString()%><br />
                             <%} %>
                             
                             <% if (!pcity.getString().equals("")) { %>
                             <%=pcity.getString()%>, 
                             <%} %>
                             
                             <% if (!pprov.getString().equals("")) { %>
                             <%=pprov.getString()%><br />
                             <%} %>
                             
                             <% if (!ppost.getString().equals("")) { %>
                             <%=ppost.getString()%><br />
                             <%} %>
                             
                             <% if (!pcountry.getString().equals("")) { %>
                             <%=pcountry.getString()%><br />
                             <%} %>
                             
                             <br /><b><fmt:message key="mailingAddress" /></b><br />
                             <% if (!mbuilding.getString().equals("9999999999")&& !mbuilding.getString().equals("")) { %>
                             <%=mbuilding.getString()%><br />
                             <%} %>
                            
                             
                             <% if (!madd1.getString().equals("")) { %>
                             <%=madd1.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!madd2.getString().equals("")) { %>
                             <%=madd2.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!madd3.getString().equals("")) { %>
                             <%=madd3.getString()%><br />
                             <%} %>
                             
                             <% if (!mcity.getString().equals("")) { %>
                             <%=mcity.getString()%>, 
                             <%} %>
                             
                             <% if (!mprov.getString().equals("")) { %>
                             <%=mprov.getString()%><br />
                             <%} %>
                             
                             <% if (!mpost.getString().equals("")) { %>
                             <%=mpost.getString()%><br />
                             <%} %>
                             
                             <% if (!mcountry.getString().equals("")) { %>
                             <%=mcountry.getString()%><br />
                             <%} %>
                             <br />
                             
                             <% if (!phoneArea.getString().equals("")&&!phone.getString().equals("")) { %>
                             <b><%=phoneMessage %></b>(<%=phoneArea.getString() %>) <%=phone.getString() %><br />
                             <%} %>
                             <% if (!faxArea.getString().equals("")&&!fax.getString().equals("")) { %>
                             <b><%=faxMessage %></b>(<%=faxArea.getString() %>) <%=fax.getString() %><br />
                             <%} %>
                             <% if (!email.getString().equals("")) { %>
                             <b><fmt:message key="email" /> </b><%=email.getString()%><br /><br />
                             <%} %>
                             </td>
                             
                             </tr>
                             
                             <%}
                             catch(Exception e) {
                                 
                             }
                             }
                        }             
                        %>
        </table>
        <br />
        </div>
    </c:otherwise>
</c:choose>