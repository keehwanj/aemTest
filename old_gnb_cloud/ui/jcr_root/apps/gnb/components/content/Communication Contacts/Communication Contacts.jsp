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

map.put("1_prop", "contactinfo/PERSONTYPEID");
map.put("1_prop.operation", "like");      
map.put("1_prop.value", "71");
//CQ5.6.1 line 50 not work, line 51 works fine(2014-1-21)
//map.put("path", dataPage + "/.");
map.put("path", dataPage);
map.put("type", Nodes.PAGE.nodeType());
map.put("orderby", "@contactinfo/@LASTNAME_STRIP, contactinfo/@FIRSTNAME_STRIP");
map.put("tagid.property", "jcr:content/cq:tags");
//out.write("path="+dataPage+"<br/>");
//out.write("type="+Nodes.PAGE.nodeType()+"<br/>");

Query query = builder.createQuery(PredicateGroup.create(map), session);
query.setHitsPerPage(0);
  try {
      result = query.getResult();
  }
  catch (Exception e) {
      %><%
  }
  //sorts the results by department
  List<Hit> test = result.getHits();
  ArrayList<Hit> list = new ArrayList<Hit>();

  for (int i = 0; i<test.size(); i++) {
      list.add(test.get(i));
  }
  for (int i=0; i<list.size(); i++) {
      Hit temp = list.get(i);
      for (int j=i+1; j<list.size(); j++) {
          if (temp.getNode().getProperty("contactinfo/ORGANIZATION_PATH").getNode().getProperty("orginfo/DEPTNAME"+langsuffix+"_STRIP").getString().compareTo(list.get(j).getNode().getProperty("contactinfo/ORGANIZATION_PATH").getNode().getProperty("orginfo/DEPTNAME"+langsuffix+"_STRIP").getString())>0 ) {
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
        
        <div class="clearfloat"></div>
<div class="table-responsive">
        <table width="100%" class="table table-striped table-bordered table-hover"> 
            <tr>
                <th style="width:40%"><fmt:message key="dept" /></th>
                        <th style="width:22%"><fmt:message key="name"  /></th>
                        <th style="width:14%"><fmt:message key="line"/></th>
                        <!--<th><fmt:message key="fax"/></th>-->
                		<th style="width:24%"><fmt:message key="email"/></th>
                        
                        <%  
                        //List<Hit> list = result.getHits();
                        String lastOrgName="";
                        for (int i=0; i<list.size(); i++) {
                             Node node = list.get(i).getNode();
                             Property orgName = node.getProperty("contactinfo/ORGANIZATION_PATH").getNode().getProperty("orginfo/DEPTNAME"+langsuffix);
                             Property fname =node.getProperty("contactinfo/FIRSTNAME");
                             Property lname =node.getProperty("contactinfo/LASTNAME");
                             Property phone = node.getProperty("contactinfo/DESKPHONE");
                             Property phoneArea = node.getProperty("contactinfo/DESKPHONEAREA");
                             if (phone.getString().equals("")) {
                                 phone = node.getProperty("contactinfo/PUBLISHEDPHONE");
                                 phoneArea = node.getProperty("contactinfo/PUBLISHEDPHONEAREA");
                             }
                                
                             Property email = node.getProperty("contactinfo/EMAIL");

                             Property fax = node.getProperty("contactinfo/FAX");
                             Property faxArea = node.getProperty("contactinfo/FAXAREA");
                             
                             String temp = node.getPath();
                             temp = temp.substring(temp.lastIndexOf('/')+1);
                             String nodeurl = "contacts_renderer."+temp+".html";
                             temp = node.getProperty("contactinfo/ORGANIZATION_PATH").getString();
                             temp = temp.substring(temp.indexOf("organizations/")+14);
                             if (temp.indexOf('/')>0) {
                                 temp = temp.substring(0, temp.indexOf('/'));
                             }
                             String orgurl = "dept_renderer." + temp +".html";                        
                            
                             %><tr>
                             <% if (!orgName.getString().equals(lastOrgName)) { %>
                             <td style="with:150px"><a href=<%=orgurl%>><%=orgName.getString() %></a> </td>
                             <% }
                             else {%>
                             <td></td>
                             <%}
                             lastOrgName = orgName.getString();%>
                             <td><a href=<%=nodeurl %>><%=fname.getString()+" " +lname.getString()%></a> </td>
                             <td><%="("+phoneArea.getString()+") "+phone.getString() %> </a></td>
                             <!--<td><%="("+email.getString()+") "+email.getString() %> </a></td>-->
            				<td><a href=mailto:<%=email.getString() %>><%=email.getString()%></a> </td>    

                             </tr><%
                             }             
                        %>
            </tr>
        </table>
    </div>
        <br />
        </div>
    </c:otherwise>
</c:choose>