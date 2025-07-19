<%@page import="java.util.Locale"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/wcm/global.jsp"%>
<%
  String initLang = "fr"; 
  try {
    String lang = "fr";
    String langSuffix = "FRE";
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      lang = initLang = "en";
      langSuffix = "ENG";
    }

    Node deptDataNode = null;
    Node orgDataNode = null;

    String serviceDataPage = "/content/data/services";
    String orgDataPage = "/content/data/organisations";
    String contactDataPage = "/content/data/contacts";

    Page configurationPage = Utils.getConfigurationPage(currentPage.getPageManager());

    String selectorString = slingRequest.getRequestPathInfo().getSelectorString(); 
    selectorString =  selectorString.replace("contactstab","")
                                    .replace("servicestab","")
                                    .replace("mandatestab","")
                                    .replace("employeestab","")
                                    .replace("officestab","")
                                    .replace("structuretab","");
    if(selectorString.startsWith(".")) selectorString = selectorString.substring(1);
    int orgId = Integer.parseInt(properties.get("orgId", "0"));
    if (orgId == 0) {
      if(selectorString.contains(".")) {
        orgId  = Integer.parseInt(selectorString.split("[.]")[0]);
      } else {
        orgId  = Integer.parseInt(selectorString);
      }
    }

    serviceDataPage = Utils.getConfigurationProperty("serviceDataPage", configurationPage);
    orgDataPage = Utils.getConfigurationProperty("organisationDataPage", configurationPage);
    contactDataPage = Utils.getConfigurationProperty("contactDataPage", configurationPage);

    String itemPath = String.format("%s/%s/orginfo/", orgDataPage, orgId);
    deptDataNode = WCMUtils.getNode(resourceResolver.getResource(itemPath));

    itemPath = String.format("%s/%s/orginfo/", orgDataPage, selectorString.replace(".", "/"));
    orgDataNode = WCMUtils.getNode(resourceResolver.getResource(itemPath));

    ArrayList<Node> children = new ArrayList<Node>();
    for (NodeIterator nodeIter = deptDataNode.getParent().getNodes(); nodeIter.hasNext();) {
      Node childNode = (Node) nodeIter.next();
      if (!childNode.getName().equalsIgnoreCase("orginfo")) 
          children.add(childNode);
    }

    request.setAttribute("orgId", orgId);
    request.setAttribute("lang", lang);
    request.setAttribute("deptDataNode", deptDataNode);
    request.setAttribute("orgDataNode", orgDataNode);
    request.setAttribute("serviceDataPage", serviceDataPage);
    request.setAttribute("orgDataPage", orgDataPage);
    request.setAttribute("contactDataPage", contactDataPage);
    request.setAttribute("children", children);

    
  } catch (Exception e) {
    request.setAttribute("orgId", null);
    request.setAttribute("lang", null);
    request.setAttribute("deptDataNode", null);
    request.setAttribute("orgDataNode", null);
    request.setAttribute("serviceDataPage", null);
    request.setAttribute("orgDataPage", null);
    request.setAttribute("contactDataPage", null);
    request.setAttribute("children", null);
    log.error("DepartmentInfo component unable to initialize.", e);
  }
%>
<cq:setContentBundle language="<%=initLang%>" />