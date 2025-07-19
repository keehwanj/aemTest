<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.t4g.cnb.enums.Fields"%>
<%@page import="com.t4g.cnb.utils.Utils"%>

<%
  Page thisPage;
  String langsuffix = "FRE";
  try {
    PageManager pm = currentPage.getPageManager();
    thisPage = pm.getPage(currentNode.getParent().getPath());
  } catch (Exception e) {
    log.error("error getting current page on gnbpage in searchresult selector", e);
    thisPage = currentPage;
  }

  //fortunately for us the currentpage when doing a sling:include is set to the including page so we can determine the lag from it
  String lang = "fr";
  Locale locale = currentPage.getLanguage(true);
  if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    langsuffix = "ENG";
  }

  String title = thisPage.getNavigationTitle();
  if (title == null || title.equals(""))
    title = thisPage.getPageTitle();
  if (title == null || title.equals(""))
    title = thisPage.getTitle();
  if (title == null || title.equals(""))
    title = thisPage.getName();

  String navItem = "";
  String contactPath = "";
  String servicePath = "";
  String orgPath = "";
  String deptPath = "";

  String dept = "";
  String org = "";
  String phonearea = "";
  String phone = "";
  String faxarea = "";
  String fax = "";
  String email = "";
  String titlename = "";
  String created = "";
  String building = "";
  String location = "";
  boolean hasOnlineTransactions = false;
  boolean hasFees = false;
  boolean hasForms = false;
  boolean hasContacts = false;
  
  int mode = 0;

  String href = thisPage.getPath() + ".html";
  
  try {
    Page configurationPage = pageManager.getPage("/content/gnbconfig");
    if (configurationPage != null) {
      if (configurationPage.getProperties().get("contactDataPage") != null
          && thisPage.getPath().startsWith(configurationPage.getProperties().get("contactDataPage").toString())) {
        mode = 1;
        contactPath = currentNode.getParent().getPath();
        if (currentNode.getParent().hasNode("contactinfo")) {
          Node contactDataNode = currentNode.getParent().getNode("contactinfo");
          if ("en".equals(lang)) {
                if (contactDataNode.hasProperty("TITLEENG")) {
                      titlename = contactDataNode.getProperty("TITLEENG").getString();
                      if (contactDataNode.hasProperty("acting")) {
                         if("Y".equals(contactDataNode.getProperty("acting").getString())) { 
                            titlename = titlename + " (Acting) ";
                         } 
                      }
             	}
          } else {
            String gender = Fields.GENDER_MALE_FRE.text().equals(
                contactDataNode.getProperty("GENDERFRE").getString()) ? "M" : "F";
            if (contactDataNode.hasProperty("TITLEFRE" + gender)) {
              		titlename = contactDataNode.getProperty("TITLEFRE" + gender).getString();
                	if (contactDataNode.hasProperty("acting")) {
            				if("Y".equals(contactDataNode.getProperty("acting").getString())) { 
                                titlename = titlename + " (Par int&eacute;rim ) ";
                                // out.write(" (Par int&eacute;rim) ");
            				} 
        			}
            }
          }

          if (contactDataNode.hasProperty("ORGANIZATION_PATH")) {
            orgPath = contactDataNode.getProperty("ORGANIZATION_PATH").getString();
            String organisationDataPage = Utils.getConfigurationProperty("organisationDataPage",pageManager);
            deptPath = orgPath.replace(organisationDataPage + "/","");
            if(deptPath.indexOf("/")>0) {
              deptPath = organisationDataPage + "/" + deptPath.substring(0,deptPath.indexOf("/"));
            } else {
              deptPath = orgPath;
            }
          }
          
          if (contactDataNode.hasProperty("PUBLISHEDPHONEAREA")) {
            phonearea = "(" + contactDataNode.getProperty("PUBLISHEDPHONEAREA").getString() + ") ";
          } else {
            phonearea = "() ";
          }
          
          if (contactDataNode.hasProperty("PUBLISHEDPHONE")) {
            phone = ("en".equals(lang) ? "P: " : "N: ") + phonearea + contactDataNode.getProperty("PUBLISHEDPHONE").getString();
          } else {
            phone = ("en".equals(lang) ? "P: " : "N: ") + phonearea + "###-####";
          }

          if (contactDataNode.hasProperty("FAXAREA")) {
            faxarea = "(" + contactDataNode.getProperty("FAXAREA").getString() + ") ";
          } else {
            faxarea = "() ";
          }

          if (contactDataNode.hasProperty("FAX"))
            fax = ("en".equals(lang) ? "F: " : "T: ") + faxarea + contactDataNode.getProperty("FAX").getString();

          if (contactDataNode.hasProperty("PUBLISHEDEMAIL" + langsuffix))
            email = contactDataNode.getProperty("PUBLISHEDEMAIL" + langsuffix).getString();
        }
      }

      if (configurationPage.getProperties().get("serviceDataPage") != null
          && thisPage.getPath().startsWith(configurationPage.getProperties().get("serviceDataPage").toString())) {
        mode = 2;
        servicePath = currentNode.getParent().getPath();
        if (currentNode.getParent().hasNode("serviceinfo")) {
          Node serviceDataNode = currentNode.getParent().getNode("serviceinfo");
            //figure out the services
            if(serviceDataNode.hasProperty("ONLINEPAYMENTTABLECOUNT") && Utils.isNotEmpty(serviceDataNode.getProperty("ONLINEPAYMENTTABLECOUNT").getString())) {
              hasOnlineTransactions =  serviceDataNode.getProperty("ONLINEPAYMENTTABLECOUNT").getLong() > 0;
            }
            if(serviceDataNode.hasProperty("FEESTABLECOUNT") && Utils.isNotEmpty(serviceDataNode.getProperty("FEESTABLECOUNT").getString())) {
              hasFees =  serviceDataNode.getProperty("FEESTABLECOUNT").getLong() > 0;
            }
            if(serviceDataNode.hasProperty("SERVICESFORMSTABLECOUNT") && Utils.isNotEmpty(serviceDataNode.getProperty("SERVICESFORMSTABLECOUNT").getString())) {
              hasForms = serviceDataNode.getProperty("SERVICESFORMSTABLECOUNT").getLong() > 0;
            }
            if(serviceDataNode.hasProperty("SERVICESCONTACTSTABLECOUNT") && Utils.isNotEmpty(serviceDataNode.getProperty("SERVICESCONTACTSTABLECOUNT").getString())) {
              hasContacts = serviceDataNode.getProperty("SERVICESCONTACTSTABLECOUNT").getLong() > 0;
            }
        }
      }

      if ((configurationPage.getProperties().get("newsArticleDataPage") != null && thisPage.getPath().startsWith(
          configurationPage.getProperties().get("newsArticleDataPage").toString()))
          || (configurationPage.getProperties().get("publicAlertDataPage") != null && thisPage.getPath()
              .startsWith(configurationPage.getProperties().get("publicAlertDataPage").toString()))
          || (configurationPage.getProperties().get("mediaAdvisoryDataPage") != null && thisPage.getPath()
              .startsWith(configurationPage.getProperties().get("mediaAdvisoryDataPage").toString()))) {
        mode = 3;
        String dateString = null;
        if (currentNode.hasProperty("onTime"))
          dateString = currentNode.getProperty("onTime").getString();
        if (dateString != null && Utils.isNotEmpty(dateString)) {
          final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.CANADA);
          Calendar cal = Calendar.getInstance();
          Date tDate = dateFormat.parse(dateString);
          cal.setTime(tDate);
          int day = cal.get(Calendar.DAY_OF_MONTH);
          int month = cal.get(Calendar.MONTH) + 1;
          created = cal.get(Calendar.YEAR) + "-" + (month < 10 ? "0" + (month) : (month)) + "-"
              + (day < 10 ? "0" + (day) : (day));
        }
        navItem = Utils.getQuicklink(thisPage.getPath(), currentPage, resource);
      }

      if (configurationPage.getProperties().get("organisationDataPage") != null
          && thisPage.getPath()
              .startsWith(configurationPage.getProperties().get("organisationDataPage").toString())) {
        mode = 4;        
        orgPath = currentNode.getParent().getPath();
        if (currentNode.getParent().hasNode("orginfo")) {
          Node orgDataNode = currentNode.getParent().getNode("orginfo");
          
          String organisationDataPage = Utils.getConfigurationProperty("organisationDataPage",pageManager);
          deptPath = orgPath.replace(organisationDataPage + "/","");
          if(deptPath.indexOf("/")>0) {
            deptPath = organisationDataPage + "/" + deptPath.substring(0,deptPath.indexOf("/"));
          } else {
            deptPath = orgPath;
          }
          
         // deptPath = Utils.getDepartmentPath(orgDataNode.getProperty("DEPTID").getString(), resource);
          building = orgDataNode.getProperty("M_BLDG_NAME_" + langsuffix).getString();
          location = orgDataNode.getProperty("M_CITY" + langsuffix).getString();
          String phonePrefix = "en".equals(lang) ? "P" : "N";
          if (orgDataNode.hasProperty("RECAREACODE")) {
            phonearea = phonePrefix + ": (" + orgDataNode.getProperty("RECAREACODE").getString() + ") ";
          } else {
            phonearea = phonePrefix + ": () ";
          }
          if (orgDataNode.hasProperty("RECPHONE") && Utils.isNotEmpty(orgDataNode.getProperty("RECPHONE").getString()) ) {
            phone = phonearea + orgDataNode.getProperty("RECPHONE").getString();
          } else {
            phone = phonePrefix + ": (###) ###-####";
          }
        }
      }

    }
  } catch (Exception e) {
    log.error("An error occured trying to build the href for a searchresults rendereding", e);
  }

  try {
    switch (mode) {
    case 1:
%>
<tr>
    <td><sling:include path="<%= contactPath + ".quicklink.html" %>" />
    <br />
    <%=titlename%></td>
    <td>
       <sling:include path="<%= deptPath + ".quicklink.html" %>" />
       <sling:include path="<%= orgPath + ".quicklink.html" %>" />
    </td>
    <td style="white-space:nowrap"><%=phone%><br /><%=fax%></td>
    <td><a href="mailto:<%=email%>"><%=email%></a></td>
</tr>
<%
  break;
    case 2:
%>
<tr>
    <td><sling:include path="<%= servicePath + ".quicklink.html" %>" /></td>
    <td><%if(hasFees) out.write(String.format("<img src=\"%s/images/money_dollar.png\" />",currentStyle.getDesign().getPath())); else out.write("&nbsp;"); %></td>
    <td><%if(hasForms) out.write(String.format("<img src=\"%s/images/page_copy.png\" />",currentStyle.getDesign().getPath())); else out.write("&nbsp;"); %></td>
    <td><%if(hasContacts) out.write(String.format("<img src=\"%s/images/group.png\" />",currentStyle.getDesign().getPath())); else out.write("&nbsp;"); %></td>
    <td><%if(hasOnlineTransactions) out.write(String.format("<img src=\"%s/images/mouse.png\" />",currentStyle.getDesign().getPath())); else out.write("&nbsp;"); %></td>
</tr>
<%
  break;
    case 3:
%>
<tr>
    <td><%=navItem%></td>
    <td><%=created%></td>
</tr>
<%
  break;
    case 4:
%>
<tr>
    <td>
      <sling:include path="<%= deptPath + ".quicklink.html" %>" />
      <sling:include path="<%= orgPath + ".quicklink.html" %>" />
    </td>
    <td style="white-space:nowrap"><%=phone%></td>
    <td><%=building%></td>
    <td><%=location%></td>
</tr>
<%
  break;
    }
  } catch (Exception e) {
    log.error("error including searchresult on gnbpage in searchresult selector", e);
  }
%>


