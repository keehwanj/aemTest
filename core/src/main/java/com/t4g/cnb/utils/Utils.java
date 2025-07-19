package com.t4g.cnb.utils;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.t4g.cnb.enums.CustomNodes;
import com.t4g.cnb.enums.Multimedia;
import com.t4g.cnb.enums.Nodes;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import javax.jcr.Node;
import javax.jcr.Property;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.Value;
import net.sf.ehcache.Cache;
import net.sf.ehcache.CacheException;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Element;
import org.apache.commons.lang.StringEscapeUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;

public class Utils {

  private static final String UPPERCASE_ASCII =
    "AEIOU" + // grave
    "AEIOUY" + // acute
    "AEIOUY" + // circumflex
    "AON" + // tilde
    "AEIOUY" + // umlaut
    "A" + // ring
    "C" + // cedilla
    "OU"; // double acute

  private static final String UPPERCASE_UNICODE =
    "\u00C0\u00C8\u00CC\u00D2\u00D9" +
    "\u00C1\u00C9\u00CD\u00D3\u00DA\u00DD" +
    "\u00C2\u00CA\u00CE\u00D4\u00DB\u0176" +
    "\u00C3\u00D5\u00D1" +
    "\u00C4\u00CB\u00CF\u00D6\u00DC\u0178" +
    "\u00C5" +
    "\u00C7" +
    "\u0150\u0170";

  public static String toUpperCaseSansAccent(String txt) {
    if (txt == null) {
      return null;
    }
    String txtUpper = txt.toUpperCase();
    StringBuilder sb = new StringBuilder();
    int n = txtUpper.length();
    for (int i = 0; i < n; i++) {
      char c = txtUpper.charAt(i);
      int pos = UPPERCASE_UNICODE.indexOf(c);
      if (pos > -1) {
        sb.append(UPPERCASE_ASCII.charAt(pos));
      } else {
        sb.append(c);
      }
    }
    return sb.toString();
  }

  public static boolean isNotEmpty(String s) {
    return s != null && !"".equals(s.trim());
  }

  public static String nullReplace(String s) {
    return s == null ? "" : s;
  }

  public static String getDepartmentPath(String deptId, Resource resource) {
    //CacheManager manager = CacheManager.getInstance();
    CacheManager manager = CacheManager.create();
    Cache cache = manager.getCache("gnborgcache");
    String path = cache != null ? (String) (cache.get(deptId).getObjectValue()) : null;
    //manager.shutdown();
    return path != null ? path : "";
  }

  public static String getOrgPath(String orgId, Resource resource, Page page) throws RepositoryException {
    final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);
    final Session session = resource.getResourceResolver().adaptTo(Session.class);
    HashMap<String, String> map = new HashMap<String, String>();
    map.put("path", getConfigurationProperty("organisationDataPage", page.getPageManager()));
    map.put("nodename", orgId);
    map.put("type", "cq:Page");
    Query query = builder.createQuery(PredicateGroup.create(map), session);
    query.setHitsPerPage(1);
    SearchResult result = query.getResult();
    if (result.getHits().size() > 0) {
      return result.getHits().get(0).getPath();
    }
    return "";
  }

  public static Page getConfigurationPage(PageManager pageManager) {
    try {
      return pageManager.getPage("/content/gnbconfig");
    } catch (Exception ex) {
      // should log this
    }
    return null;
  }

  public static String getConfigurationProperty(String key, PageManager pageManger) {
    try {
      Page configPage = getConfigurationPage(pageManger);
      return getConfigurationProperty(key, configPage);
    } catch (Exception ex) {
      // should log this
    }
    return "";
  }

  public static String getConfigurationProperty(String key, Page configPage) {
    try {
      if (configPage != null && configPage.getProperties() != null) {
        return configPage.getProperties().get(key, "");
      }
    } catch (Exception ex) {
      // should log this
    }
    return "";
  }

  public static String getQuicklink(String path, Page currentPage, Resource resource) {
    if (currentPage == null || resource == null || !isNotEmpty(path)) return "";
    PageManager pageManager = currentPage.getPageManager();
    ResourceResolver resourceResolver = resource.getResourceResolver();
    Page thisPage = null;
    Node currentNode = null;
    try {
      thisPage = pageManager.getPage(path);
      currentNode = thisPage.adaptTo(Node.class).getNode("jcr:content");
    } catch (Exception e) {
      // should log this
      thisPage = currentPage;
    }

    String lang = "fr";
    String langSuffix = "FRE";
    String langSuffix2 = "FRE";
    Locale locale = currentPage.getLanguage(true);
    if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
      lang = "en";
      langSuffix = "ENG";
      langSuffix2 = "";
    }

    String title = thisPage.getNavigationTitle();
    if (title == null || title.equals("")) title = thisPage.getPageTitle();
    if (title == null || title.equals("")) title = thisPage.getTitle();
    if (title == null || title.equals("")) title = thisPage.getName();

    String navItem = "";
    String href = thisPage.getPath() + ".html";
    String description = "";
    try {
      Page configPage = getConfigurationPage(pageManager);
      String dataPage = "";
      String rendererPage = "";
      String dept = "";
      String selector = "";
      if (path.contains(".")) {
        Node directlinkNode = resourceResolver.getResource(path).adaptTo(Node.class);
        if (directlinkNode != null) {
          href = directlinkNode.getPath();
        }
      }

      if (configPage != null) {
        String orgDataPath = getConfigurationProperty("organisationDataPage", configPage) + "/";

        /**************************************************************************************************************************************
         * NEWS RENDERER
         **************************************************************************************************************************************/
        String[] newsTypes = { "newsArticle", "publicAlert", "mediaAdvisory" };
        for (String newsType : newsTypes) {
          dataPage = getConfigurationProperty(String.format("%sDataPage", newsType), configPage);

          if (isNotEmpty(dataPage) && thisPage.getPath().startsWith(dataPage.toString())) {
            rendererPage = getConfigurationProperty(String.format("%sRendererPage_%s", newsType, lang), configPage);

            // construct the selector for this item's renderer
            String[] selectors = thisPage.getPath().replace(dataPage + "/", "").split("/");
            if (selectors.length > 1) {
              selector = String.format("%s.%s.%s.html", selectors[0], selectors[1], selectors[2]);
            }

            // build the link text
            if (
              currentNode.hasProperty(String.format("%sTitle", lang)) &&
              isNotEmpty(currentNode.getProperty(String.format("%sTitle", lang)).getString())
            ) title = currentNode.getProperty(String.format("%sTitle", lang)).getString();
            if (
              currentNode.hasProperty(String.format("%sDescription", lang)) &&
              isNotEmpty(currentNode.getProperty(String.format("%sDescription", lang)).getString())
            ) description = currentNode.getProperty(lang + "Description").getString();

            // get the department that this item is tagged with
            String targetDept = "";
            String deptBase = getConfigurationProperty("departmentsPage_" + lang, configPage) + "/";
            if (currentPage.getPath().startsWith(deptBase)) {
              String deptPath = targetDept = currentPage.getPath().replace(deptBase, "");
              if (deptPath.contains("/")) {
                targetDept = deptPath.substring(0, deptPath.indexOf("/"));
              }
            }
            if (currentNode.hasProperty(String.format("%sDepartment", lang))) {
              Property prop = currentNode.getProperty(String.format("%sDepartment", lang));
              for (Value value : prop.getValues()) {
                try {
                  TagManager tm = resourceResolver.adaptTo(TagManager.class);
                  Tag tag = tm.resolve(value.getString());
                  String orgPath = getDepartmentPath(tag.getDescription(), resource);

                  if (!isNotEmpty(orgPath)) continue;
                  orgPath = orgPath.replace(orgDataPath, "");
                  if (orgPath.contains("/")) {
                    orgPath = orgPath.substring(0, orgPath.indexOf("/"));
                  }

                  dept = getConfigurationProperty(String.format("org_%s_%s", orgPath, lang), configPage);
                  if (!isNotEmpty(dept)) continue;
                  if (!isNotEmpty(targetDept)) break;
                  if (targetDept.equalsIgnoreCase(dept)) break;
                } catch (Exception e) {}
              }
            }
          }
        }
        /**************************************************************************************************************************************
         * MULTIMEDIA RENDERER
         **************************************************************************************************************************************/
        dataPage = getConfigurationProperty("mmDataPage", configPage);
        if (isNotEmpty(dataPage) && path.startsWith(dataPage.toString())) {
          rendererPage = getConfigurationProperty(String.format("mmRendererPage_%s", lang), configPage);

          // construct the selector for this item's renderer
          selector = String.format("%s.html", path.replace(dataPage + "/", "").replace("/", "."));

          title = description = path.replace(dataPage + "/", "").replace("/", ".");

          Node assetNode = resourceResolver.getResource(path).adaptTo(Node.class);
          if (
            assetNode != null &&
            assetNode.hasNode(Nodes.JCR_CONTENT.nodeType()) &&
            assetNode.getNode(Nodes.JCR_CONTENT.nodeType()).hasNode(CustomNodes.METADATA.nodeName())
          ) {
            Node metadata = assetNode.getNode(Nodes.JCR_CONTENT.nodeType()).getNode(CustomNodes.METADATA.nodeName());
            if (metadata != null) {
              Property titleProp = metadata.getProperty(Multimedia.TITLE_E.toString());
              if (lang.equals("fr")) {
                titleProp = metadata.getProperty(Multimedia.TITLE_F.toString());
              }
              if (titleProp != null && isNotEmpty(titleProp.getString())) {
                title = description = titleProp.getString();
              }

              // get the department that this item is tagged with
              String targetDept = "";
              String deptBase = getConfigurationProperty("departmentsPage_" + lang, configPage) + "/";
              if (currentPage.getPath().startsWith(deptBase)) {
                String deptPath = targetDept = currentPage.getPath().replace(deptBase, "");
                if (deptPath.contains("/")) {
                  targetDept = deptPath.substring(0, deptPath.indexOf("/"));
                }
              }
              if (metadata.hasProperty("dam:dept")) {
                Property prop = metadata.getProperty("dam:dept");
                for (Value value : prop.getValues()) {
                  try {
                    TagManager tm = resourceResolver.adaptTo(TagManager.class);
                    Tag tag = tm.resolve(value.getString());
                    String orgPath = getDepartmentPath(tag.getDescription(), resource);

                    if (!isNotEmpty(orgPath)) continue;
                    orgPath = orgPath.replace(orgDataPath, "");
                    if (orgPath.contains("/")) {
                      orgPath = orgPath.substring(0, orgPath.indexOf("/"));
                    }

                    dept = getConfigurationProperty(String.format("org_%s_%s", orgPath, lang), configPage);
                    if (!isNotEmpty(dept)) continue;
                    if (!isNotEmpty(targetDept)) break;
                    if (targetDept.equalsIgnoreCase(dept)) break;
                  } catch (Exception e) {}
                }
              }
            }
          }
        }

        /**************************************************************************************************************************************
         * CONTACT RENDERER
         **************************************************************************************************************************************/
        dataPage = getConfigurationProperty("contactDataPage", configPage);
        if (isNotEmpty(dataPage) && thisPage.getPath().startsWith(dataPage.toString())) {
          rendererPage = getConfigurationProperty(String.format("contactRendererPage_%s", lang), configPage);

          // construct the selector for this item's renderer
          String[] selectors = thisPage.getPath().replace(dataPage + "/", "").split("/");
          if (selectors.length > 1) {
            selector = String.format("%s.html", selectors[1]);
          }

          // get the contact data
          if (currentNode.getParent().hasNode("contactinfo")) {
            Node contactDataNode = currentNode.getParent().getNode("contactinfo");

            // build the link text
            StringBuilder nameBuilder = new StringBuilder();
            if (
              contactDataNode.hasProperty("LASTNAME") && isNotEmpty(contactDataNode.getProperty("LASTNAME").getString())
            ) nameBuilder.append(contactDataNode.getProperty("LASTNAME").getString());
            nameBuilder.append(", ");
            if (
              contactDataNode.hasProperty("FIRSTNAME") &&
              isNotEmpty(contactDataNode.getProperty("FIRSTNAME").getString())
            ) nameBuilder.append(contactDataNode.getProperty("FIRSTNAME").getString());
            title = nameBuilder.toString();
            description = nameBuilder.toString();

            // get the department that this item is tagged with
            if (contactDataNode.hasProperty("DEPTID")) {
              String orgPath = getDepartmentPath(contactDataNode.getProperty("DEPTID").getString(), resource);
              String[] orgIds = orgPath.replace(orgDataPath, "").split("/");
              if (orgIds.length > 0) {
                dept = getConfigurationProperty(String.format("org_%s_%s", orgIds[0], lang), configPage);
              }
            }
          }
        }

        /**************************************************************************************************************************************
         * ORGANISATION RENDERER
         **************************************************************************************************************************************/
        dataPage = getConfigurationProperty("organisationDataPage", configPage);
        if (isNotEmpty(dataPage) && thisPage.getPath().startsWith(dataPage.toString())) {
          rendererPage = getConfigurationProperty(String.format("organisationRendererPage_%s", lang), configPage);

          // construct the selector for this item's renderer
          selector = thisPage.getPath().replace(dataPage + "/", "").replace("/", ".");
          boolean isDept = !selector.contains("."); // dept will be top level
          // orgs and therefore will
          // not have a . in the
          // selector
          selector += ".html";

          // get the org data
          if (currentNode.getParent().hasNode("orginfo")) {
            Node orgDataNode = currentNode.getParent().getNode("orginfo");

            // build the link text
            if (
              orgDataNode.hasProperty(String.format("ORGNAME%s", langSuffix)) &&
              isNotEmpty(orgDataNode.getProperty(String.format("ORGNAME%s", langSuffix)).getString())
            ) {
              title = orgDataNode.getProperty(String.format("ORGNAME%s", langSuffix)).getString();
            }

            // if we have an inchargegender and it is not null - set field = that value - otherwise - default to male
            String inChargeGender = "Male";
            if (
              orgDataNode.hasProperty("INCHARGEGENDER") &&
              isNotEmpty(orgDataNode.getProperty("INCHARGEGENDER").getString())
            ) {
              inChargeGender = orgDataNode.getProperty("INCHARGEGENDER").getString();
            }
            String ORGTITLE = "ORGTITLE" + langSuffix;
            if (inChargeGender.equals("Female") && langSuffix == "FRE") {
              // *** if french page and in charge person is female - display the feminine french org title ***
              ORGTITLE = ORGTITLE + "FEM";
            }

            if (
              !isDept && orgDataNode.hasProperty(ORGTITLE) && isNotEmpty(orgDataNode.getProperty(ORGTITLE).getString())
            ) {
              title += " (" + orgDataNode.getProperty(ORGTITLE).getString() + ")";
            }
            description = title;

            // get the department that this item is tagged with
            String[] orgIds = selector.split("[.]");
            if (orgIds.length > 0) {
              dept = getConfigurationProperty(String.format("org_%s_%s", orgIds[0].replace(".", ""), lang), configPage);
            }
          }
        }

        /**************************************************************************************************************************************
         * SERVICE RENDERER
         **************************************************************************************************************************************/
        dataPage = getConfigurationProperty("serviceDataPage", configPage);
        if (isNotEmpty(dataPage) && thisPage.getPath().startsWith(dataPage.toString())) {
          rendererPage = getConfigurationProperty(String.format("serviceRendererPage_%s", lang), configPage);

          // construct the selector for this item's renderer
          String[] selectors = thisPage.getPath().replace(dataPage + "/", "").split("/");
          if (selectors.length > 0) {
            selector = String.format("%s.html", selectors[0]);
          }

          // get the service data
          if (currentNode.getParent().hasNode("serviceinfo")) {
            Node serviceDataNode = currentNode.getParent().getNode("serviceinfo");

            // build the link text
            if (
              serviceDataNode.hasProperty(String.format("SERVICENAME%s", langSuffix2)) &&
              isNotEmpty(serviceDataNode.getProperty(String.format("SERVICENAME%s", langSuffix2)).getString())
            ) {
              title = serviceDataNode.getProperty(String.format("SERVICENAME%s", langSuffix2)).getString();
              description = title;
            }

            // get the department that this item is tagged with
            if (serviceDataNode.hasProperty("DEPTID")) {
              String orgPath = getDepartmentPath(serviceDataNode.getProperty("DEPTID").getString(), resource);
              String[] orgIds = orgPath.replace(orgDataPath, "").split("/");
              if (orgIds.length > 0) {
                dept = getConfigurationProperty(String.format("org_%s_%s", orgIds[0], lang), configPage);
              }
            }
          }
        }
        if (isNotEmpty(selector) && isNotEmpty(rendererPage)) {
          String genericRendererBasePage =
            getConfigurationProperty("genericRendererBasePage_" + lang, configPage) + "/";
          String departmentsPage = getConfigurationProperty("departmentsPage_" + lang, configPage) + "/";
          if (isNotEmpty(dept)) dept = dept + "/";

          // to make sure we don't accidentally link to the data page
          href = "";
          Page renderer = null;
          if (currentPage.getPath().startsWith(departmentsPage)) {
            renderer =
              pageManager.getPage(
                rendererPage.replaceAll("<base>", departmentsPage).replace("<dept>", dept).replace("<dept_alt>", "")
              );
            if (renderer == null) {
              renderer =
                pageManager.getPage(
                  rendererPage.replaceAll("<base>", departmentsPage).replace("<dept>", "").replace("<dept_alt>", dept)
                );
            }
            if (renderer == null) {
              renderer =
                pageManager.getPage(
                  rendererPage.replaceAll("<base>", departmentsPage).replace("<dept>", "").replace("<dept_alt>", "")
                );
            }
          }
          if (renderer == null) {
            renderer =
              pageManager.getPage(
                rendererPage
                  .replaceAll("<base>", genericRendererBasePage)
                  .replace("<dept>", dept)
                  .replace("<dept_alt>", "")
              );
          }
          if (renderer == null) {
            renderer =
              pageManager.getPage(
                rendererPage
                  .replaceAll("<base>", genericRendererBasePage)
                  .replace("<dept>", "")
                  .replace("<dept_alt>", dept)
              );
          }
          if (renderer == null) {
            renderer =
              pageManager.getPage(
                rendererPage
                  .replaceAll("<base>", genericRendererBasePage)
                  .replace("<dept>", "")
                  .replace("<dept_alt>", "")
              );
          }
          if (renderer != null) {
            href = String.format("%s.%s", renderer.getPath(), selector);
          }
        }
      }
    } catch (Exception e) {
      // should log this
    }
    String cleantitle = title.replace("<br>", "").replace("<br />", "").replace("<br/>", "");
    cleantitle = cleantitle.replace("<BR>", "").replace("<BR />", "").replace("<BR/>", "");

    if (!href.equalsIgnoreCase("none")) {
      //removeed title attribute for accessibility
      //navItem = String.format("<a href=\"%s\" title=\"%s\">%s</a>", href, description, cleantitle);
      navItem = String.format("<a href=\"%s\">%s</a>", href, cleantitle);
    } else {
      navItem = cleantitle;
    }
    return navItem;
  }

  public static String cleanPropertyValue(String key) {
    if (key != null) {
      String returnValue = StringEscapeUtils.escapeHtml(key);
      returnValue = returnValue.replaceAll("\n", "<br>\n");
      return StringEscapeUtils.unescapeHtml(returnValue);
    }
    return "";
  }
}
