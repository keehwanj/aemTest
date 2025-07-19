<%--
  ==============================================================================

  GNB Service Information component

  Displays GNB Service description, fees and location in a tabbed format.

--%>
<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="org.apache.commons.lang.StringEscapeUtils"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@page import="org.apache.commons.lang.StringEscapeUtils"%>
<%@page import="com.day.cq.wcm.foundation.DiffService"%>
<%@page import="com.day.cq.wcm.foundation.DiffInfo"%>
<%@page import="com.day.cq.wcm.foundation.TextFormat"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>

<%@page import="java.text.NumberFormat"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.text.DateFormat"%>

<%@page import="java.util.Comparator"%>
<%@page import="java.util.TreeMap"%>
<%@page import="com.t4g.cnb.utils.KeyComparator"%>

<%!protected String getCleanPropertyValue(Node node, String key, Logger log) {
        String returnValue = "key";
        try {
            if (node.hasProperty(key)) {
                returnValue = StringEscapeUtils.escapeHtml(node
                        .getProperty(key).getString());
                returnValue = returnValue.replaceAll("\n", "<br>\n");
                returnValue = StringEscapeUtils.unescapeHtml(returnValue);
            }
        } catch (Exception e) {
            log
                    .error("error getting value for [" + key
                            + "] in serviceinfo", e);
        }
        return returnValue;
    }%>
<%
  String lang = "fr";
  String langSuffix = "FRE";
  String langSuffix2 = "FRE";
  Locale locale = currentPage.getLanguage(true);
  if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    langSuffix = "";
    langSuffix2 = "ENG";
  }
%>

<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%><cq:setContentBundle
    language="<%=lang%>" />
<%
  final String SERVICEFEES = "fees";
  final String SERVICEFEESHISTORY = "fees_history";
  final String SERVICEFEESREVENUE = "fees_revenue";
  final String SERVICEFORMS = "forms";
  final String SERVICELINKS = "related_links";
  final String ONLINETRANSACTIONS = "online_transactions";
  final String SERVICECONTACTS = "contacts";
  final String SERVICEACTS = "acts";

  Node serviceDataNode = null;
  String orgRendererPage = "/content/gnb/en/orgdetails";
  String serviceDataPage = "/content/data/services";
  try {
    Page configurationPage = pageManager.getPage("/content/gnbconfig");

    // Get the services node based on services id and services path
    String servicesId = properties.get("servicesId", "none");
    if (servicesId.equalsIgnoreCase("none")) {
      String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
      servicesId = selectors[0];
    }
    serviceDataPage = (String) configurationPage.getProperties().get("serviceDataPage");
    String itemPath = String.format("%s/%s/serviceinfo/", serviceDataPage, servicesId);
    orgRendererPage = (String) configurationPage.getProperties().get("organisationRendererPage_" + lang);
    serviceDataNode = WCMUtils.getNode(resourceResolver.getResource(itemPath));
  } catch (Exception e) {
    log.error("service info page unable to get data node", e);
  }

  try {
    if (serviceDataNode != null) {
      // Get the localized version of the node property names
      String SERVICENAME = "SERVICENAME" + langSuffix;
      String OTHERSERVICEID = "OTHERSERVICEID";
      String SERVICESLINKSURL = "SERVICESLINKSURL" + langSuffix;
      String SERVICESLINKSDESCRIPTION = "SERVICESLINKSDESCRIPTION" + langSuffix;
      String SERVICESONLINEPAYMENT = "SERVICESONLINEPAYMENT" + langSuffix;
      String SERVICESONLINEPAYMENTLINK = "SERVICESONLINEPAYMENTLINK" + langSuffix;
      String FORMNAME = "FORMNAME" + langSuffix;
      String FORMURL = "FORMURL" + langSuffix;
      String SERVICEACT = "SERVICEACT" + langSuffix2;
      String SERVICEACTPDF = "SERVICEACTPDF" + langSuffix2;
      String SERVICEACTURL = "SERVICEACTURL" + langSuffix2;
      String REGULATIONS = "REGULATIONS" + langSuffix2;
      String REGULATIONSNUM = "REGULATIONSNUM";
      String REGULATIONSPDF = "REGULATIONSPDF" + langSuffix2;
      String REGULATIONSURL = "REGULATIONSURL" + langSuffix2;
      String SERVICEOVERVIEW = "SERVICEOVERVIEW" + langSuffix;
      String SERVICEELIGIBILITY = "SERVICEELIGIBILITY" + langSuffix;
      String SERVICEDESC = "SERVICEDESC" + langSuffix;
      String SERVICEORGS = "ORGANIZATIONS";
      String SNBOFFERED = "SNBOFFERED";
      String DEPTID = "DEPTID";

      String FEENAME = "FEENAME" + langSuffix;
      if (lang.equalsIgnoreCase("en"))
        FEENAME = "FEENAMEENG";
      String FEERATE = "FEERATE";
      String FEELEVEL = "FEELEVEL";
      String FEEMODIFICATIONDATE = "FEEMODIFICATIONDATE";
      if (serviceDataNode.hasProperty(SERVICENAME)) {
        out.write(String.format("<div class=\"pageHeader\"><h1>%s</h1>", serviceDataNode.getProperty(SERVICENAME).getString()));
        String link = null;
        if (serviceDataNode.hasProperty(DEPTID)) {
          String deptOrgPath = Utils.getDepartmentPath(serviceDataNode.getProperty(DEPTID).getString(), resource);
          link = Utils.getQuicklink(deptOrgPath, currentPage, resource);
        }
        if (Utils.isNotEmpty(link)) {
          out.write("<h3>");
          out.write(link);
          out.write("</h3>");
        }

        out.write("</div><div class=\"clearfloat\"></div>");

      }

      // Start the sidebar
      out.write("<div id=\"sidebar\" >");

      // Acts - only show this section if there are links
      if (serviceDataNode.hasNode(SERVICEACTS)) {
        Node actsNode = serviceDataNode.getNode(SERVICEACTS);

        if (actsNode.hasNodes()) {
          out.write(String.format("<div class=\"sectiontitle\"><div class=\"links\"><div class=\"rightcurve\">&nbsp;</div><div class=\"leftcurve\"><h3 class=\"title\">%s</h3></div></div></div>", LocaleSupport.getLocalizedMessage(pageContext,
              "actsHeading")));
          out.write("<div class=\"box shaded\">");
          out.write("<div class=\"text_wrapper\">");
          out.write("<ul class=\"actsLinks\">");

          for (NodeIterator nodeIter = actsNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            if ((childNode.hasProperty(SERVICEACT)) && (childNode.hasProperty(SERVICEACTPDF)) && (childNode.hasProperty(SERVICEACTURL))) {
              String name = childNode.getProperty(SERVICEACT).getString();
              String pdf = childNode.getProperty(SERVICEACTPDF).getString();
              String html = childNode.getProperty(SERVICEACTURL).getString();
              
              out.write ("<li>"); 
              if (childNode.getProperty("FEDERAL").getString().equalsIgnoreCase("1")) { 
                  out.write ( "<img src=\"" + request.getContextPath() + "/etc/designs/gnb/images/canada_flag.jpg\" alt=\"Canada\" /> " ); 
              }  
              String navItem = String.format("%s&nbsp;<a href=\"%s\" title=\"%s\">PDF</a>&nbsp;|&nbsp;<a href=\"%s\" title=\"%s\">HTML</a></li>", name, pdf, name, html, name);
              out.write(navItem);
              for (NodeIterator subnodeIter = childNode.getNodes(); subnodeIter.hasNext();) {
                Node grandchildNode = (Node) subnodeIter.next();
                if ((grandchildNode.hasProperty(REGULATIONS)) && (grandchildNode.hasProperty(REGULATIONSNUM)) && (grandchildNode.hasProperty(REGULATIONSPDF)) && (grandchildNode.hasProperty(REGULATIONSURL))) {
                  name = grandchildNode.getProperty(REGULATIONS).getString();
                  String number = grandchildNode.getProperty(REGULATIONSNUM).getString();
                  pdf = grandchildNode.getProperty(REGULATIONSPDF).getString();
                  html = grandchildNode.getProperty(REGULATIONSURL).getString();

                  navItem = String.format("<li>%s&nbsp;%s&nbsp;<a href=\"%s\" title=\"%s\">PDF</a>&nbsp;|&nbsp;<a href=\"%s\" title=\"%s\">HTML</a></li>", number, name, pdf, name, html, name);
                  out.write(navItem);

                }
              }
            }
          }
          out.write("</ul></div></div>");

        }
      }

      // Online transactions
      if (serviceDataNode.hasNode(ONLINETRANSACTIONS)) {
        Node txnsNode = serviceDataNode.getNode(ONLINETRANSACTIONS);
        if (txnsNode.hasNodes()) {
          String serviceImg = "";
          String serviceByline = "";

          out.write("<div class=\"box shaded\" style=\"padding-top:0px;\">");

          if (serviceDataNode.hasProperty(SNBOFFERED) && (serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("S") || serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("P"))) {
            serviceImg = String.format("<img class=\"serviceicon\" src=\"%s/etc/designs/gnb/images/SNB-online.jpg\" alt=\"%s\" /> ", request.getContextPath(), LocaleSupport.getLocalizedMessage(pageContext, "saveTimeText"));
            serviceByline = String.format("<p class=\"subheader\">%s</p>", LocaleSupport.getLocalizedMessage(pageContext, "visitOnlineText"));

            out.write(serviceImg);
            out.write("<div class=\"text_wrapper\">");
            out.write(String.format("<h1><span class=\"more_link_blue\"><a href=\"%s\">%s</a></span></h1>", LocaleSupport.getLocalizedMessage(pageContext, "saveTimeLink"), LocaleSupport.getLocalizedMessage(pageContext, "saveTimeText")));
            out.write(serviceByline);
          } else {
            serviceImg = String.format("<img class=\"serviceicon\" src=\"%s/etc/designs/gnb/images/GNBonline-feature.jpg\" alt=\"%s\" /> ", request.getContextPath(), LocaleSupport.getLocalizedMessage(pageContext, "doItOnlineText"));
            out.write(serviceImg);
            out.write("<div class=\"text_wrapper\">");
            out.write(String.format("<h1><span class=\"more_link_blue\">%s</span></h1>", LocaleSupport.getLocalizedMessage(pageContext, "doItOnlineText")));
          }

          out.write("<ul class=\"formsLinks\">");
          TreeMap<String, Node> sorted_map = new TreeMap<String, Node>(new KeyComparator());

          for (NodeIterator nodeIter = txnsNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            String key = "zz999999";
            if (childNode.hasProperty(SERVICESONLINEPAYMENT) && Utils.isNotEmpty(childNode.getProperty(SERVICESONLINEPAYMENT).getString())) {
              key = childNode.getProperty(SERVICESONLINEPAYMENT).getString();
            }
            sorted_map.put(key, childNode);
          }

          for (Node childNode : sorted_map.values()) {
            if ((childNode.hasProperty(SERVICESONLINEPAYMENT)) && (childNode.hasProperty(SERVICESONLINEPAYMENTLINK))) {
              String navItem = String.format("<li><a  href=\"%s\" title=\"%s\">%s</a><span class=\"pdf\"></span></li>", childNode.getProperty(SERVICESONLINEPAYMENTLINK).getString(), childNode.getProperty(SERVICESONLINEPAYMENT).getString(), childNode.getProperty(
                  SERVICESONLINEPAYMENT).getString());
              out.write(navItem);
            }
          }
          out.write("</ul></div></div><br />");
        }
      }

      // Forms
      if (serviceDataNode.hasNode(SERVICEFORMS)) {
        Node formsNode = serviceDataNode.getNode(SERVICEFORMS);
        if (formsNode.hasNodes()) {
          out.write(String.format("<div class=\"sectiontitle\"><div class=\"normal\"><div class=\"rightcurve\">&nbsp;</div><div class=\"leftcurve\"><h3 class=\"title\">%s</h3></div></div></div>", LocaleSupport.getLocalizedMessage(pageContext,
              "formsHeading")));
          out.write("<div class=\"box shaded\">");
          out.write("<div class=\"text_wrapper\">");
          out.write("<p class=\"subheader\">");
          out.write(LocaleSupport.getLocalizedMessage(pageContext, "formsText").replaceAll("\\[link\\]", LocaleSupport.getLocalizedMessage(pageContext, "adobeLink")));
          out.write("</p>");
          out.write("<ul class=\"formsLinks\">");

          TreeMap<String, Node> sorted_map = new TreeMap<String, Node>(new KeyComparator());

          for (NodeIterator nodeIter = formsNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            String key = "zz999999";
            if (childNode.hasProperty(FORMNAME) && Utils.isNotEmpty(childNode.getProperty(FORMNAME).getString())) {
              key = childNode.getProperty(FORMNAME).getString();
            }
            sorted_map.put(key, childNode);
          }

          for (Node childNode : sorted_map.values()) {
            if ((childNode.hasProperty(FORMNAME)) && (childNode.hasProperty(FORMURL))) {
              String url = childNode.getProperty(FORMURL).getString();
              String desc = childNode.getProperty(FORMNAME).getString();

              String docType = "";
              if (url.endsWith(".pdf")) {
                docType = "PDF";
              } else if (url.endsWith(".doc")) {
                docType = "DOC";
              }
              String navItem = String.format("<li><a href=\"%s\" title=\"%s\">%s</a><span class=\"download_spec\">%s</span></li>", url, desc, desc, docType);
              out.write(navItem);
            }
          }
          out.write("</ul></div></div>");
        }
      }

      // Related Links - only show this section if there are links
      if (serviceDataNode.hasNode(SERVICELINKS)) {
        Node linksNode = serviceDataNode.getNode(SERVICELINKS);

        if (linksNode.hasNodes()) {
          out.write(String.format("<div class=\"sectiontitle\"><div class=\"links\"><div class=\"rightcurve\">&nbsp;</div><div class=\"leftcurve\"><h3 class=\"title\">%s</h3></div></div></div>", LocaleSupport.getLocalizedMessage(pageContext,
              "linksHeading")));

          TreeMap<String, Node> sorted_map = new TreeMap<String, Node>(new KeyComparator());
          for (NodeIterator nodeIter = linksNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            String key = "zz999999";
            if (childNode.hasProperty(SERVICESLINKSDESCRIPTION) && Utils.isNotEmpty(childNode.getProperty(SERVICESLINKSDESCRIPTION).getString())) {
              key = childNode.getProperty(SERVICESLINKSDESCRIPTION).getString();
            } else if (childNode.hasProperty(OTHERSERVICEID) && Utils.isNotEmpty(childNode.getProperty(OTHERSERVICEID).getString())) {
              Resource r = slingRequest.getResourceResolver().getResource(serviceDataPage + "/" + childNode.getProperty(OTHERSERVICEID).getString());
              if (r!=null) {
                Node otherService = r.adaptTo(Node.class);
                if (otherService.hasProperty("serviceinfo/"+SERVICENAME+"_STRIP")) {
                  key = otherService.getProperty("serviceinfo/SERVICENAME"+langSuffix).getString();
                }
                else {
                 // changed by CET - Sept7/11 - Diane wants all these sorted as one group  - comment out old 
                 // key = "zy" +childNode.getProperty(OTHERSERVICEID).getString();
                 key = childNode.getProperty(OTHERSERVICEID).getString();
                }
              }
              else {
                // changed by CET - Sept7/11 - Diane wants all these sorted as one group  - comment out old 
                // key = "zz" + childNode.getProperty(OTHERSERVICEID).getString();
                key = "zz" + childNode.getProperty(OTHERSERVICEID).getString();
              }
            }
            //out.write(key+"<br/>");
            sorted_map.put(key, childNode);
          }

          out.write("<ul class=\"box shaded\">");

          for (Node childNode : sorted_map.values()) {
            if (childNode.hasProperty(SERVICESLINKSURL) && childNode.hasProperty(SERVICESLINKSDESCRIPTION) && Utils.isNotEmpty(childNode.getProperty(SERVICESLINKSURL).getString())
                && Utils.isNotEmpty(childNode.getProperty(SERVICESLINKSDESCRIPTION).getString())) {
              String navItem = String.format("<li><a href=\"%1s\" title=\"%2s\">%3s</a></li>", childNode.getProperty(SERVICESLINKSURL).getString(), childNode.getProperty(SERVICESLINKSDESCRIPTION).getString(), childNode.getProperty(
                  SERVICESLINKSDESCRIPTION).getString());
              out.write(navItem);
            } else if (childNode.hasProperty(OTHERSERVICEID) && Utils.isNotEmpty(childNode.getProperty(OTHERSERVICEID).getString())) {
              Resource r = slingRequest.getResourceResolver().getResource(serviceDataPage + "/" + childNode.getProperty(OTHERSERVICEID).getString());
              if (r != null) {
                String includePath = serviceDataPage + "/" + childNode.getProperty(OTHERSERVICEID).getString() + ".quicklink.html";
                %><li><sling:include path="<%= includePath %>" /></li>
<%
              } else {
                log.info("Other service for related links " + childNode.getProperty(OTHERSERVICEID).getString() + " not found for service:" + serviceDataNode.getPath() + ".");
              }

            }
          }
          out.write("</ul><br />");
        }
      }

      //End of Sidebar
      out.write("</div>");
      
%>

<script type="text/javascript">
//detecting IE
var browser;
var service_tabs;
browser = navigator.appName;
if(browser=="Microsoft Internet Explorer"){
    service_tabs="\"service_tabs\"";
}
else{
    service_tabs="\"service_tabs1\"";
}
document.write("<div id="+service_tabs+" style=\"display:none;\"><ul>")
</script>

<%      
/*
For detecting IE in JSP, but not work in JSP, so used Javascript instead
String browser = request.getHeader( "User-Agent" );
String service_tabs="";
if((browser.indexOf("MSIE") > 0) ||(browser.indexOf("msie") > 0)){
    service_tabs="\"service_tabs\"";
}
else {
    service_tabs="\"service_tabs1\"";
}
*/
      //out.write("<div id=\"service_tabs\" style=\"display:none;\"><ul>");
      //out.write("<div id="+service_tabs+" style=\"display:none;\"><ul>");
      out.write(String.format("<li><a href=\"#serviceDescription\"><span>%s</span></a></li>", LocaleSupport.getLocalizedMessage(pageContext, "descriptionText")));
      if (serviceDataNode.hasNode(SERVICEFEES) && serviceDataNode.getNode(SERVICEFEES).hasNodes())
        out.write(String.format("<li><a href=\"#serviceFees\"><span>%s</span></a></li>", LocaleSupport.getLocalizedMessage(pageContext, "feesText")));
      if ((serviceDataNode.hasNode(SERVICECONTACTS) && serviceDataNode.getNode(SERVICECONTACTS).hasNodes())
          || (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("S"))
          || (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("P")))
        out.write(String.format("<li><a href=\"#serviceLocation\"><span>%s</span></a></li>", LocaleSupport.getLocalizedMessage(pageContext, "svclocationText")));
      out.write("</ul>");

      // Services Description Tab
      out.write("<div id=\"serviceDescription\">");
      if (serviceDataNode.hasProperty(SERVICEOVERVIEW)) {
        out.write("<div class=\"item_services\">");
        out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "overviewHeading")));
        out.write(String.format("<p>%s</p></div>", getCleanPropertyValue(serviceDataNode, SERVICEOVERVIEW, log)));
      }

      if (serviceDataNode.hasProperty(SERVICEELIGIBILITY)) {
        out.write("<div class=\"item_services\">");
        out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "eligibilityHeading")));
        out.write(String.format("<p>%s</p></div>", getCleanPropertyValue(serviceDataNode, SERVICEELIGIBILITY, log)));
      }

      if (serviceDataNode.hasProperty(SERVICEDESC)) {
        out.write("<div class=\"item_services\">");
        out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "descriptionHeading")));
        out.write(String.format("<p>%s</p></div>", getCleanPropertyValue(serviceDataNode, SERVICEDESC, log)));
      }
      out.write("</div>");
      
      //fees
      if (serviceDataNode.hasNode(SERVICEFEES) && serviceDataNode.getNode(SERVICEFEES).hasNodes()) {
        Node feesNode;
        
        out.write("<div id=\"serviceFees\"><div class=\"item_services fee_message\">");
        try {
            if (serviceDataNode.hasNode(SERVICEFEESREVENUE) && serviceDataNode.getNode(SERVICEFEESREVENUE).hasNodes()) {
                out.write(String.format("<h2>%s</h2><div class=\"clearfloat\"></div>", LocaleSupport.getLocalizedMessage(pageContext, "feeHistoryMessage")));
              feesNode = serviceDataNode.getNode(SERVICEFEESREVENUE);
              out.write(String.format("<p>%s", LocaleSupport.getLocalizedMessage(pageContext, "feesReviewMessage")));

              String RevenueEstimates = "RevenueEstimatesFre";
              String RevenueEstimatesFile = "RevenueEstimatesFileFre";
              if (lang.equalsIgnoreCase("en")) {
                RevenueEstimates = "RevenueEstimatesEng";
                RevenueEstimatesFile = "RevenueEstimatesFileEng";
              }
              for (NodeIterator nodeIter = feesNode.getNodes(); nodeIter.hasNext();) {
                Node childNode = (Node) nodeIter.next();
                String strFilename = null;
                String linkText = null;
                if (childNode.hasProperty(RevenueEstimatesFile) && Utils.isNotEmpty(childNode.getProperty(RevenueEstimatesFile).getString())) {
                  strFilename = linkText = URLEncoder.encode(childNode.getProperty(RevenueEstimatesFile).getString(), "UTF-8");
                  strFilename = linkText = strFilename.replaceAll("[+]", "%20");
                }
                if (childNode.hasProperty(RevenueEstimates) && Utils.isNotEmpty(childNode.getProperty(RevenueEstimates).getString())) {
                  linkText = childNode.getProperty(RevenueEstimates).getString();
                }
                out.write(String.format("<br /><a href=\"http://app.infoaa.7700.gnb.ca/gnb/PDF/FeesPDF/%s\" title=\"%s\">%s</a>", strFilename, linkText.replaceAll("%20", " "), linkText.replaceAll("%20", " ")));
                if (nodeIter.hasNext())
                  out.write(", ");
              }

              out.write("</p><div class=\"clearfloat\"></div>");
              out.write("<br/>");
            } //If SERVICEFEESREVENUE



          } catch (Exception ex) {
            out.write("ERROR");
            out.write("exception" + ex.getMessage());
          }
        
        try {
         

          out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "feesHeading")));
          out.write(String.format("<p>%s</p></div><div class=\"clearfloat\"></div>", LocaleSupport.getLocalizedMessage(pageContext, "feesMessage")));

          out.write("<table><tr>");
          out.write(String.format("<th colspan=\"2\" scope=\"col\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesDescription")));
          out.write(String.format("<th scope=\"col\" nowrap>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesRate")));
          out.write(String.format("<th scope=\"col\" nowrap class=\"feeDate\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesDate")));
          out.write("</tr>");
          feesNode = serviceDataNode.getNode(SERVICEFEES);
          for (NodeIterator nodeIter = feesNode.getNodes(); nodeIter.hasNext();) {
            Node childNode = (Node) nodeIter.next();
            if (childNode.hasProperty(FEENAME)) {
              String strRate = childNode.hasProperty(FEERATE) ? childNode.getProperty(FEERATE).getString()  : "&nbsp;";
              if(lang.equalsIgnoreCase("fr")) {
                strRate = strRate.replace(",", " ").replace(".",",");
              }
              String desc = childNode.getProperty(FEENAME).getString();
              String feeLevel = childNode.getProperty(FEELEVEL).getString();
              String strDate = childNode.getProperty(FEEMODIFICATIONDATE).getString();
              try {
                DateFormat df = new SimpleDateFormat("yyyy-mm-dd");
                Date today = df.parse(strDate);
                strDate = df.format(today);

              } catch (Exception ex) {

              }
              if (strRate.equalsIgnoreCase("&nbsp;"))
                strDate = "&nbsp;";
              // Lower level fees should be indented. Check the fee level
              // 01.02 would be indented under 01.
              // Replication should have sorted them already so just check length
              String feeItem;

              if (feeLevel.length() < 3) {
                feeItem = String.format(locale, "<td colspan=\"2\"><b>%s</b></td><td style=\"text-align: right;\" nowrap>%s</td><td class=\"feeDate\">%s</td>", desc, strRate, strDate);
              } else {
                feeItem = String.format(locale, "<td>&nbsp;&nbsp;</td><td>%s</td><td style=\"text-align: right;\" nowrap>%s</td><td class=\"feeDate\" >%s</td>", desc, strRate, strDate);
              }

              out.write(String.format("<tr valign=\"top\" >%s</tr>", feeItem));
            }
          }
          out.write("</table>");
        } catch (Exception ex) {
          log.error("exception" + ex.getMessage());
        }

        if (serviceDataNode.hasNode(SERVICEFEESHISTORY)) {
          FEENAME = "FeeNameFre";
          if (lang.equalsIgnoreCase("en"))
            FEENAME = "FeeNameEng";
          FEERATE = "FeeRate";
          FEELEVEL = "FeeLevel";
          FEEMODIFICATIONDATE = "FeeModificationDate";

          out.write(String.format("<p><a id=\"feeHistoryToggle\" style=\"cursor:pointer;\">%s</a></p><div class=\"clearfloat\"></div>", LocaleSupport.getLocalizedMessage(pageContext, "feeHistoryMessage")));
          out.write("<div id=\"feeHistory\">");
          try {
             //Inserted "if condition" by Keehwan             
             feesNode = serviceDataNode.getNode(SERVICEFEESHISTORY);
            
             if (feesNode != null) {

              out.write(String.format("<h2>%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "feeHistoryHeading")));

              out.write("<table><tr>");
              out.write(String.format("<th colspan=\"2\" scope=\"col\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesDescription")));
              out.write(String.format("<th scope=\"col\" nowrap>%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesRate")));
              out.write(String.format("<th scope=\"col\" nowrap class=\"feeDate\">%s</th>", LocaleSupport.getLocalizedMessage(pageContext, "feesDate")));
              out.write("</tr>");
              for (NodeIterator nodeIter = feesNode.getNodes(); nodeIter.hasNext();) {
                Node childNode = (Node) nodeIter.next();
                if (childNode.hasProperty(FEENAME)) {
                  String strRate = "&nbsp;";
                  if (childNode.hasProperty(FEERATE)) {
                    strRate = childNode.getProperty(FEERATE).getString();
                    if(lang.equalsIgnoreCase("fr")) {
                      strRate = strRate.replace(",", " ").replace(".",",");
                    }
                  }
                  String desc = childNode.getProperty(FEENAME).getString();
                  String feeLevel = childNode.getProperty(FEELEVEL).getString();
                  String strDate = childNode.getProperty(FEEMODIFICATIONDATE).getString();
                  try {
                    DateFormat df = new SimpleDateFormat("yyyy-mm-dd");
                    Date today = df.parse(strDate);
                    strDate = df.format(today);

                  } catch (Exception ex) {

                  }
                  if (strRate.equalsIgnoreCase("&nbsp;"))
                    strDate = "&nbsp;";
                  // Lower level fees should be indented. Check the fee level
                  // 01.02 would be indented under 01.
                  // Replication should have sorted them already so just check length
                  String feeItem;

                  if (feeLevel.length() < 3) {
                    feeItem = String.format(locale, "<td colspan=\"2\"><b>%s</b></td><td align=\"right\" nowrap>%s</td><td class=\"feeDate\">%s</td>", desc, strRate, strDate);
                  } else {
                    feeItem = String.format(locale, "<td>&nbsp;&nbsp;</td><td>%s</td><td align=\"right\" nowrap>%s</td><td class=\"feeDate\">%s</td>", desc, strRate, strDate);
                  }
                  out.write(String.format("<tr valign=\"top\" >%s</tr>", feeItem));
                }
              }
              out.write("</table>");
            } //if FeesNode!=null
          } catch (Exception ex) {
            log.error("exception" + ex.getMessage());
          }
          out.write("</div>");
        }

        out.write("</div>");

      }

      if ((serviceDataNode.hasNode(SERVICECONTACTS) && serviceDataNode.getNode(SERVICECONTACTS).hasNodes())
          || (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("S"))
          ||(serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("P")) ){
        

        TreeMap<String, String> sortedContacts = new TreeMap<String, String>(new KeyComparator());
        TreeMap<String, TreeMap<String, String>> sortedGroups = new TreeMap<String, TreeMap<String, String>>(new KeyComparator());
        String groupKey = "GroupNameEng";
        if(lang.equals("fr"))groupKey = "GroupNameFre";
        if(serviceDataNode.hasNode(SERVICECONTACTS)) {
          Node contactsNode = serviceDataNode.getNode(SERVICECONTACTS);
            for (NodeIterator nodeIter = contactsNode.getNodes(); nodeIter.hasNext();) {
              Node childNode = (Node) nodeIter.next();
              String key = "zz999999";
              String path = "";
              if (childNode.hasProperty("ContactType") && "1".equals(childNode.getProperty("ContactType").getString()) && childNode.hasProperty("ORGID") && Utils.isNotEmpty(childNode.getProperty("ORGID").getString())) {
                path = Utils.getOrgPath(childNode.getProperty("ORGID").getString(), resource, currentPage);
                if (Utils.isNotEmpty(path)) {
                  Node assetNode = resource.getResourceResolver().getResource(path + "/orginfo").adaptTo(Node.class);
                  if (assetNode != null && assetNode.hasProperty("ORGNAME" + langSuffix2) && Utils.isNotEmpty(assetNode.getProperty("ORGNAME" + langSuffix2).getString())) {
                    key = assetNode.getProperty("ORGNAME" + langSuffix2).getString() + path;
                  }
                  sortedContacts.put(key, path);
                }
              }

              if (childNode.hasProperty("ContactType") && "2".equals(childNode.getProperty("ContactType").getString()) 
                  && childNode.hasProperty("GroupID") && Utils.isNotEmpty(childNode.getProperty("GroupID").getString())
                  && childNode.hasProperty(groupKey) && Utils.isNotEmpty(childNode.getProperty(groupKey).getString())) {
                TreeMap<String, String> sortedGroupContacts = new TreeMap<String, String>(new KeyComparator());
                //Search for orgs with the given GroupId
                SearchResult result = null;
                QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
                Map<String, String> map = new HashMap<String, String>();
                Session session = resource.getResourceResolver().adaptTo(Session.class);
                String orgData = Utils.getConfigurationProperty("organisationDataPage",pageManager);
                //map.put("path", orgData + "/*/.");
                map.put("path", orgData);
                map.put("1_property","orginfo/GROUPS");
                map.put("1_property.value", childNode.getProperty("GroupID").getString());
                //map.put("nodename", "orginfo");
                map.put("orderby", "@DEPTNAME" + langSuffix2 + ",@ORGNAME" + langSuffix2);
                Query query = builder.createQuery(PredicateGroup.create(map), session);
                query.setHitsPerPage(999);
                result = query.getResult();
    
                for (Hit hit : result.getHits()) {
                  String groupContactKey = "zz999999";
                  Node assetNode = resource.getResourceResolver().getResource(hit.getPath() + "/orginfo").adaptTo(Node.class);
                  if (assetNode != null && assetNode.hasProperty("ORGNAME" + langSuffix2) && Utils.isNotEmpty(assetNode.getProperty("ORGNAME" + langSuffix2).getString())) {
                    groupContactKey = assetNode.getProperty("ORGNAME" + langSuffix2).getString() + hit.getPath();
                  }            

                  sortedGroupContacts.put(groupContactKey, hit.getPath());
                }
                
                sortedGroups.put(childNode.getProperty(groupKey).getString(),sortedGroupContacts);
              }
            }
        }
        
        //if we have something to display
        if(sortedContacts.size()>0 ||  !sortedGroups.isEmpty() ||
            (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("S"))  ||
            (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("P"))) {
        %>
<table id="serviceLocation">
    <tr>
        <th><fmt:message key="contactText" /></th>
        <th><fmt:message key="emailText" /></th>
        <th><fmt:message key="locationHeading" /></th>
    </tr>

    <%
      WCMMode imcludemode = WCMMode.DISABLED.toRequest(request);
      String orgBasePath = Utils.getConfigurationProperty("organisationDataPage", pageManager);
      if (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("S")) {
        %>
    <tr>
        <td><a href="<fmt:message key="snbContactURL"/>"><fmt:message
            key="snbSContactLabel" /></a></td>
        <td><a href="mailto:<fmt:message key="snbEmail"/>"><fmt:message
            key="snbEmail" /></a></td>
        <td></td>
    </tr>
    <%
      }
      if (serviceDataNode.hasProperty(SNBOFFERED) && serviceDataNode.getProperty(SNBOFFERED).getString().equalsIgnoreCase("P")) {
        %>
    <tr>
        <td><a href="<fmt:message key="snbContactURL"/>"><fmt:message
            key="snbPContactLabel" /></a></td>
        <td><a href="mailto:<fmt:message key="snbEmail"/>"><fmt:message
            key="snbEmail" /></a></td>
        <td></td>
    </tr>
    <%
      }
      try {

        
        for (String path : sortedContacts.values()) {
          %><sling:include
        path="<%=path + ".searchresult_embeded_narrow.html" %>" />
    <%
        }
        
      } finally {
        imcludemode.toRequest(request);
      }
      try {
        for (String key : sortedGroups.keySet()) {
          TreeMap<String, String> sortedGroupContacts = sortedGroups.get(key);
          if(sortedGroupContacts.size()>0 ) {
            out.write(String.format("<tr><td colspan=\"3\"><b>%s</b></td></tr>",key));
              for (String path : sortedGroupContacts.values()) {
                %><sling:include
        path="<%=path + ".searchresult_embeded_narrow.html" %>" />
    <%
              }
          }
        }        
      } finally {
        imcludemode.toRequest(request);
      }
      
      
          out.write("</table>");
        } // If we have something to display
          } //If Service Contacts

          out.write("<div class=\"clearfloat\"></div></div>");

        } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
          %><img src="/libs/widgets/0.gif" class="cq-text-placeholder"
        alt="">
    <%
        }

      } catch (Exception ex) {
        log.error("Serviceinfo component encountered an error:", ex);
      }
    %>
<script type="text/javascript">
    $(function() {
        $('#service_tabs').tabs( {
            fxFade : true,
            fxSpeed : 'fast',
            bookmarkable : true
        });
        $('#service_tabs').show();
        $('#service_tabs .ui-corner-all, #service_tabs.ui-corner-all')
                .removeClass('ui-corner-all');
        $('#service_tabs .ui-widget-header, #service_tabs.ui-widget-header')
                .removeClass('ui-widget-header');
        $('#service_tabs .ui-corner-top, #service_tabs .ui-corner-top')
                .removeClass('ui-corner-top');
        $('#service_tabs .ui-corner-bottom, #service_tabs .ui-corner-bottom')
                .removeClass('ui-corner-bottom');
        $('#service_tabs .ui-widget-content, #service_tabs.ui-widget-content')
                .removeClass('ui-widget-content');
        $('#feeHistory').hide();
        $('.feeDate').hide();
        $('#feeHistoryToggle').click(function() {
            $('#feeHistory').toggle();
        //  $('.feeDate').toggle();
        });

        $('.ui-tabs-nav a').click(function() {
            var hash = $(this).attr("href").replace(/^#/, '');
            $(this).attr("href", "notset");
            $('head').attr("id", hash);
            location.hash = hash;
            $('head').attr("id", "");
            $(this).attr("href", "#" + hash);
        });

        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 1000);
    });
</script>

<script type="text/javascript">
    $(function() {
        $('#service_tabs1').tabs( {
            fxFade : true,
            fxSpeed : 'fast',
            bookmarkable : true
        });
        $('#service_tabs1').show();
        $('#service_tabs1 .ui-corner-all, #service_tabs1.ui-corner-all')
                .removeClass('ui-corner-all');
        $('#service_tabs1 .ui-widget-header, #service_tabs1.ui-widget-header')
                .removeClass('ui-widget-header');
        $('#service_tabs1 .ui-corner-top, #service_tabs1 .ui-corner-top')
                .removeClass('ui-corner-top');
        $('#service_tabs1 .ui-corner-bottom, #service_tabs1 .ui-corner-bottom')
                .removeClass('ui-corner-bottom');
        $('#service_tabs1 .ui-widget-content, #service_tabs1.ui-widget-content')
                .removeClass('ui-widget-content');
        $('#feeHistory').hide();
        $('.feeDate').hide();
        $('#feeHistoryToggle').click(function() {
            $('#feeHistory').toggle();
        //  $('.feeDate').toggle();
        });

        $('.ui-tabs-nav a').click(function() {
            var hash = $(this).attr("href").replace(/^#/, '');
            $(this).attr("href", "notset");
            $('head').attr("id", hash);
            location.hash = hash;
            $('head').attr("id", "");
            $(this).attr("href", "#" + hash);
        });

        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 1000);
    });
</script>