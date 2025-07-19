<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Map"%>
<%@page import="com.day.cq.commons.jcr.JcrUtil"%>
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
String phone = "T�l�phone : ";
String fax = "T�l�copieur : ";
if (lang.equals("en")) {
	phone = "Phone: ";
	fax = "Fax: ";
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
map.put("tagid.property", "jcr:content/cq:tags");
    /*START of map string for writing querybuilder*/
/*
	for (Map.Entry<String, String> entry : map.entrySet())
	{
        out.write(entry.getKey() + "=" + entry.getValue());
        out.write("<br/>");
	}
    */
    /*END of map string  for writing querybuilder*/  
Query query = builder.createQuery(PredicateGroup.create(map), session);
query.setHitsPerPage(0);
try {
  result = query.getResult();
}
catch (Exception e) {
 
}
  //sorts the results by orgName
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
<c:choose>
    <c:when test="${empty result}">
    </c:when>
    <c:when test="${empty result.hits}">
        <fmt:message key="contactNoResultsText" />
    </c:when>
    <c:otherwise>
        <div id="search_column_full">
        <table>
            
                        <%  
                        String contactDataPage = configurationPage.getProperties().get("contactDataPage", "");
                        for (int i=0; i<list.size(); i++) {
                             Node contact = list.get(i).getNode();
                             Node org = JcrUtil.createPath(contact.getProperty("contactinfo/ORGANIZATION_PATH").getString(),Nodes.PAGE.nodeType(), session);
                             try {
                             
                             Property fname =contact.getProperty("contactinfo/FIRSTNAME");
                             Property lname =contact.getProperty("contactinfo/LASTNAME");
                             Property des = contact.getProperty("contactinfo/DESIGNATION"+langsuffix);
                             Property title = contact.getProperty("contactinfo/TITLENAME"+langsuffix);

                             Property cpbuilding = contact.getProperty("contactinfo/PUB_BLDG_NAME_" +langsuffix);
                             Property cpadd1 =  contact.getProperty("contactinfo/PUB_ADDRESS"+langsuffix+"1");
                             Property cpadd2 = contact.getProperty("contactinfo/PUB_ADDRESS"+langsuffix+"2");
                             Property cpadd3 = contact.getProperty("contactinfo/PUB_ADDRESS"+langsuffix+"3");

                             Property cpcity = contact.getProperty("contactinfo/PUB_CITY"+langsuffix);
                             Property cpprov = contact.getProperty("contactinfo/PUB_PROVINCE"+langsuffix);
                             Property cppost = contact.getProperty("contactinfo/PUB_POSTALCODE");
                             Property cpcountry = contact.getProperty("contactinfo/PUB_COUNTRY");
                             
                             Property cmbuilding = contact.getProperty("contactinfo/M_BLDG_NAME_" +langsuffix);
                             Property cmadd1 =  contact.getProperty("contactinfo/M_ADDRESS"+langsuffix+"1");
                             Property cmadd2 = contact.getProperty("contactinfo/M_ADDRESS"+langsuffix+"2");
                             Property cmadd3 = contact.getProperty("contactinfo/M_ADDRESS"+langsuffix+"3");

                             Property cmcity = contact.getProperty("contactinfo/M_CITY"+langsuffix);
                             Property cmprov = contact.getProperty("contactinfo/M_PROVINCE"+langsuffix);
                             Property cmpost = contact.getProperty("contactinfo/M_POSTALCODE");
                             Property cmcountry = contact.getProperty("contactinfo/M_COUNTRY");
                             
                             Property cphone = contact.getProperty("contactinfo/PUBLISHEDPHONE");
                             Property cphoneArea = contact.getProperty("contactinfo/PUBLISHEDPHONEAREA");
                             Property cfax = contact.getProperty("contactinfo/FAX");
                             Property cfaxArea = contact.getProperty("contactinfo/FAXAREA");
                             
                             
                             Property deptName = org.getProperty("orginfo/ORGNAME"+langsuffix);
                             Property opbuilding = org.getProperty("orginfo/P_BLDG_NAME_" +langsuffix);
                             Property opadd1 =  org.getProperty("orginfo/P_ADDRESS"+langsuffix+"1");

                             Property opcity = org.getProperty("orginfo/P_CITY"+langsuffix);
                             Property opprov = org.getProperty("orginfo/P_PROVINCE"+langsuffix);
                             Property oppost = org.getProperty("orginfo/P_POSTALCODE");
                             Property opcountry = org.getProperty("orginfo/P_COUNTRY");
                             
                             Property ombuilding = org.getProperty("orginfo/M_BLDG_NAME_" +langsuffix);
                             Property omadd1 =  org.getProperty("orginfo/M_ADDRESS"+langsuffix+"1");

                             Property omcity = org.getProperty("orginfo/M_CITY"+langsuffix);
                             Property omprov = org.getProperty("orginfo/M_PROVINCE"+langsuffix);
                             Property ompost = org.getProperty("orginfo/M_POSTALCODE");
                             Property omcountry = org.getProperty("orginfo/M_COUNTRY");
                             
                             Property ophone = org.getProperty("orginfo/RECPHONE");
                             Property ophoneArea = org.getProperty("orginfo/RECAREACODE");
                             Property ofax = org.getProperty("orginfo/FAX");
                             Property ofaxArea = org.getProperty("orginfo/FAXAREACODE");
                             Property oemail = org.getProperty("orginfo/EMAIL"+langsuffix);
                             
                             String temp = contact.getPath();
                             temp = temp.substring(temp.lastIndexOf('/')+1);
                             String nodeurl = "contacts_renderer."+temp+".html";
                             temp = org.getPath();
                             temp = temp.substring(temp.indexOf("organizations/")+14);  //substring starts after organizations/
                             temp = temp.replaceAll("/",".");
                             String orgurl = "dept_renderer." + temp +".html";
                             
                             
                             %><tr>
                             <td><font size="4"><a href=<%=orgurl%>><%=deptName.getString() %></a></font></td>
                             <td><font size="4"><a href=<%=nodeurl %>><%=title.getString()+" " +fname.getString()+" " +lname.getString()+" "+des.getString()%></a></font></td>
                             </tr>
                             <tr>
                             <td><fmt:message key ="constituencyOffice" /></td><td><fmt:message key ="govOrPal" /></td>
                             </tr>
                             <tr>
                                                          <td>
                             <b><fmt:message key="physicalAddress" /></b><br />
                             <% if (!opbuilding.getString().equals("9999999999")&& !opbuilding.getString().equals("")) { %>
                             <%=opbuilding.getString()%><br />
                             <%} %>
                            
                             
                             <% if (!opadd1.getString().equals("")) { %>
                             <%=opadd1.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!opcity.getString().equals("")) { %>
                             <%=opcity.getString()%>, 
                             <%} %>
                             
                             <% if (!opprov.getString().equals("")) { %>
                             <%=opprov.getString()%><br />
                             <%} %>
                             
                             <% if (!oppost.getString().equals("")) { %>
                             <%=oppost.getString()%><br />
                             <%} %>
                             
                             <% if (!opcountry.getString().equals("")) { %>
                             <%=opcountry.getString()%><br />
                             <%} %>
                             
                             <br /><b><fmt:message key="mailingAddress" /></b><br />
                             <% if (!ombuilding.getString().equals("9999999999")&& !ombuilding.getString().equals("")) { %>
                             <%=ombuilding.getString()%><br />
                             <%} %>
                            
                             
                             <% if (!omadd1.getString().equals("")) { %>
                             <%=omadd1.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!omcity.getString().equals("")) { %>
                             <%=omcity.getString()%>, 
                             <%} %>
                             
                             <% if (!omprov.getString().equals("")) { %>
                             <%=omprov.getString()%><br />
                             <%} %>
                             
                             <% if (!ompost.getString().equals("")) { %>
                             <%=ompost.getString()%><br />
                             <%} %>
                             
                             <% if (!omcountry.getString().equals("")) { %>
                             <%=omcountry.getString()%><br />
                             <%} %>
                             <br />
                             
                             <% if (!ophoneArea.getString().equals("")&&!ophone.getString().equals("")) { %>
                             <b><fmt:message key="reception" /> </b>(<%=ophoneArea.getString() %>) <%=ophone.getString() %><br />
                             <%} %>
                             <% if (!ofaxArea.getString().equals("")&&!ofax.getString().equals("")) { %>
                             <b><%=fax %></b>(<%=ofaxArea.getString() %>) <%=ofax.getString() %><br />
                             <%} %>
                             <% if (!oemail.getString().equals("")) { %>
                             <b><fmt:message key="email" /> </b><%=oemail.getString()%><br /><br />
                             <%} %>
                             </td>
                             <td>
                             <b><fmt:message key="physicalAddress" /></b><br />
                             <% if (!cpbuilding.getString().equals("9999999999")&& !cpbuilding.getString().equals("")) { %>
                             <%=cpbuilding.getString()%><br />
                             <%} %>
                            
                             
                             <% if (!cpadd1.getString().equals("")) { %>
                             <%=cpadd1.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!cpadd2.getString().equals("")) { %>
                             <%=cpadd2.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!cpadd3.getString().equals("")) { %>
                             <%=cpadd3.getString()%><br />
                             <%} %>
                             
                             <% if (!cpcity.getString().equals("")) { %>
                             <%=cpcity.getString()%>, 
                             <%} %>
                             
                             <% if (!cpprov.getString().equals("")) { %>
                             <%=cpprov.getString()%><br />
                             <%} %>
                             
                             <% if (!cppost.getString().equals("")) { %>
                             <%=cppost.getString()%><br />
                             <%} %>
                             
                             <% if (!cpcountry.getString().equals("")) { %>
                             <%=cpcountry.getString()%><br />
                             <%} %>
                             
                             <br /><b><fmt:message key="mailingAddress" /></b><br />
                             <% if (!cmbuilding.getString().equals("9999999999")&& !cmbuilding.getString().equals("")) { %>
                             <%=cmbuilding.getString()%><br />
                             <%} %>
                            
                             
                             <% if (!cmadd1.getString().equals("")) { %>
                             <%=cmadd1.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!cmadd2.getString().equals("")) { %>
                             <%=cmadd2.getString()%><br />
                             <%} %>
                             
                             
                             <% if (!cmadd3.getString().equals("")) { %>
                             <%=cmadd3.getString()%><br />
                             <%} %>
                             
                             <% if (!cmcity.getString().equals("")) { %>
                             <%=cmcity.getString()%>, 
                             <%} %>
                             
                             <% if (!cmprov.getString().equals("")) { %>
                             <%=cmprov.getString()%><br />
                             <%} %>
                             
                             <% if (!cmpost.getString().equals("")) { %>
                             <%=cmpost.getString()%><br />
                             <%} %>
                             
                             <% if (!cmcountry.getString().equals("")) { %>
                             <%=cmcountry.getString()%><br />
                             <%} %>
                             <br />
                             
                             <% if (!cphoneArea.getString().equals("")&&!cphone.getString().equals("")) { %>
                             <b><%=phone %></b>(<%=cphoneArea.getString() %>) <%=cphone.getString() %><br />
                             <%} %>
                             <% if (!cfaxArea.getString().equals("")&&!cfax.getString().equals("")) { %>
                             <b><%=fax %></b>(<%=cfaxArea.getString() %>) <%=cfax.getString() %><br />
                             <%} %>
                             </td>
                             
                             </tr>
                             
                             <%}
                             catch(Exception e) {

                             }
                        }             
                        %>  
        </table>
        <br />

        </div>
    </c:otherwise>
</c:choose>