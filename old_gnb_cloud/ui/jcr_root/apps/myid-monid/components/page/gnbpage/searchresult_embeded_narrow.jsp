<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="com.t4g.cnb.enums.Fields"%>
<%
  Page thisPage;
  try {
    PageManager pm = currentPage.getPageManager();
    thisPage = pm.getPage(currentNode.getParent().getPath());
  } catch (Exception e) {
    log.error("error getting current page on gnbpage in searchresult selector", e);
    thisPage = currentPage;
  }

  //fortunately for us the currentpage when doing a sling:include is set to the including page so we can determine the lag from it
  String lang = "fr";
  String langSuffix = "FRE";
  Locale locale = currentPage.getLanguage(true);
  if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    langSuffix = "ENG";
  }

  String orgPath = "";
  String contactPath="";
  String email = "";
  String city = "";
  String mapHref = "";
  String locLink = "";
  String locLinkText = "";
  String titlename = "";
  try {
    Page configurationPage = pageManager.getPage("/content/gnbconfig");
    if (configurationPage != null) {
      if (configurationPage.getProperties().get("contactDataPage") != null
          && thisPage.getPath().startsWith(configurationPage.getProperties().get("contactDataPage").toString())) {
        if (currentNode.getParent().hasNode("contactinfo")) {
          Node contactDataNode = currentNode.getParent().getNode("contactinfo");
          contactPath = currentNode.getParent().getPath();
          if (contactDataNode.hasProperty("ORGANIZATION_PATH")) {
            orgPath = contactDataNode.getProperty("ORGANIZATION_PATH").getString();
          }
          if (contactDataNode.hasProperty("PUBLISHEDEMAIL" + langSuffix) && Utils.isNotEmpty(contactDataNode.getProperty("PUBLISHEDEMAIL" + langSuffix).getString()))
            email = contactDataNode.getProperty("PUBLISHEDEMAIL" + langSuffix).getString();
          if ("en".equals(lang)) {
            if (contactDataNode.hasProperty("TITLEENG")) {
              titlename = contactDataNode.getProperty("TITLEENG").getString();
            }
          } else {
            String gender = Fields.GENDER_MALE_FRE.text().equals(
                contactDataNode.getProperty("GENDERFRE").getString()) ? "M" : "F";
            if (contactDataNode.hasProperty("TITLEFRE" + gender)) {
              titlename = contactDataNode.getProperty("TITLEFRE" + gender).getString();
            }
          }
          
         
          
          StringBuilder address = new StringBuilder();
          if (contactDataNode.hasProperty("PUB_ADDRESS" + langSuffix + "1") && Utils.isNotEmpty(contactDataNode.getProperty("PUB_ADDRESS" + langSuffix + "1").getString())) {
            locLinkText =contactDataNode.getProperty("PUB_ADDRESS" + langSuffix + "1").getString();
              address.append(contactDataNode.getProperty("PUB_ADDRESS" + langSuffix + "1").getString());
              address.append("\n");
          }
          if (contactDataNode.hasProperty("PUB_CITY" + langSuffix) && Utils.isNotEmpty(contactDataNode.getProperty("PUB_CITY" + langSuffix).getString())) {
              address.append(contactDataNode.getProperty("PUB_CITY" + langSuffix).getString());
              city = contactDataNode.getProperty("PUB_CITY" + langSuffix).getString();
              address.append(", ");
          }
          if (contactDataNode.hasProperty("PUB_PROVINCE" + langSuffix) && Utils.isNotEmpty(contactDataNode.getProperty("PUB_PROVINCE" + langSuffix).getString())) {
              address.append(contactDataNode.getProperty("PUB_PROVINCE" + langSuffix).getString());
              address.append("\n");
          }
          if (contactDataNode.hasProperty("PUB_POSTALCODE") && Utils.isNotEmpty(contactDataNode.getProperty("PUB_POSTALCODE").getString())) {
              address.append(contactDataNode.getProperty("PUB_POSTALCODE").getString());
              address.append("\n");
          }
          if (contactDataNode.hasProperty("PUB_COUNTRY") && Utils.isNotEmpty(contactDataNode.getProperty("PUB_COUNTRY").getString())) {
              address.append(contactDataNode.getProperty("PUB_COUNTRY").getString());
          }

          String mapPin = URLEncoder.encode(address.toString().replace("\n", ","), "UTF8");
          mapHref = String.format("http://maps.google.com/maps?f=q&source=s_q&hl=%s&q=%s@%s,%s&ie=UTF8&z=14&iwloc=r8", lang, mapPin,
                  contactDataNode.getProperty("PUB_LATITUDE").getString(), contactDataNode.getProperty("PUB_LONGITUDE").getString());

          
          
        }
      }
      
      if (configurationPage.getProperties().get("organisationDataPage") != null
          && thisPage.getPath().startsWith(configurationPage.getProperties().get("organisationDataPage").toString())) {
        if (currentNode.getParent().hasNode("orginfo")) {
          Node orgDataNode = currentNode.getParent().getNode("orginfo");
          orgPath = currentNode.getParent().getPath();
          
          StringBuilder address = new StringBuilder();
          if (orgDataNode.hasProperty("P_ADDRESS" + langSuffix + "1") && Utils.isNotEmpty(orgDataNode.getProperty("P_ADDRESS" + langSuffix + "1").getString())) {
            locLinkText =orgDataNode.getProperty("P_ADDRESS" + langSuffix + "1").getString();
              address.append(orgDataNode.getProperty("P_ADDRESS" + langSuffix + "1").getString());
              address.append("\n");
          }
          if (orgDataNode.hasProperty("P_CITY" + langSuffix) && Utils.isNotEmpty(orgDataNode.getProperty("P_CITY" + langSuffix).getString())) {
              address.append(orgDataNode.getProperty("P_CITY" + langSuffix).getString());
              city = orgDataNode.getProperty("P_CITY" + langSuffix).getString();
              address.append(", ");
          }
          if (orgDataNode.hasProperty("P_PROVINCE" + langSuffix) && Utils.isNotEmpty(orgDataNode.getProperty("P_PROVINCE" + langSuffix).getString())) {
              address.append(orgDataNode.getProperty("P_PROVINCE" + langSuffix).getString());
              address.append("\n");
          }
          if (orgDataNode.hasProperty("P_POSTALCODE") && Utils.isNotEmpty(orgDataNode.getProperty("P_POSTALCODE").getString())) {
              address.append(orgDataNode.getProperty("P_POSTALCODE").getString());
              address.append("\n");
          }
          if (orgDataNode.hasProperty("P_COUNTRY") && Utils.isNotEmpty(orgDataNode.getProperty("P_COUNTRY").getString())) {
              address.append(orgDataNode.getProperty("P_COUNTRY").getString());
          }

          String mapPin = URLEncoder.encode(address.toString().replace("\n", ","), "UTF8");
          mapHref = String.format("http://maps.google.com/maps?f=q&source=s_q&hl=%s&q=%s@%s,%s&ie=UTF8&z=14&iwloc=r8", lang, mapPin,
              orgDataNode.getProperty("P_LATITUDE").getString(), orgDataNode.getProperty("P_LONGITUDE").getString());

          
          
          if (orgDataNode.hasProperty("EMAIL" + langSuffix))
            email = orgDataNode.getProperty("EMAIL" + langSuffix).getString();

        }
      }
      
    }

  } catch (Exception e) {
    log.error("An error occured trying to build the href for a searchresults rendereding", e);
  }
  locLink = String.format("<a target=\"_blank\" href=\"%s\" title=\"%s\">%s</a>", mapHref, locLinkText, locLinkText);

  try {
%>





<tr>
  <td>
    <%if(contactPath.length()>0) { %><div><sling:include path="<%= contactPath + ".quicklink.html" %>"/>&nbsp;(<%=titlename %>)</div><%} %>                               
    <%if(orgPath.length()>0) { %><div><sling:include path="<%= orgPath + ".quicklink.html" %>"/></div><%} %>      

  </td>
  <td class="text-nowrap">
    <%if(email.length()>0) { %><div><a href="mailto:<%=email%>"><%=email%></a></div><%} %> 
  </td>
  <td class="text-nowrap">
    <div><%=locLink%></div>
    <div><%=city%></div>
  </td>
</tr>
<%
  } catch (Exception e) {
    log.error("error including quicklink on gnbpage in searchresult selector", e);
  }
%>