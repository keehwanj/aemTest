<%@include file="/libs/foundation/global.jsp"%>

<%@ page import="java.util.Properties"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.io.IOException"%>
<%@ page import="com.day.cq.wcm.api.WCMMode"%>

<script type="text/javascript"
	src="/apps/bitp/components/content/tabpanel/jquery-bbq-plugin.js"></script>


<div id="tabcontent" class="tabs_<%= properties.get("tabColor", "yellow")%>"">
<%
  //Page currentPage = null;  

WCMMode mode = WCMMode.fromRequest(request);
  StringBuilder sb_list = new StringBuilder();
  TabbedPanel panel = new TabbedPanel(currentNode, mode);
  //currentNode.getSession().save();  
  if (panel.getTabs().isEmpty()) {
%><cq:include script="empty.jsp" /> <%
   } else {
     panel.drawTabsBegin(out);
     panel.drawTabsListBegin(sb_list);
     for (TabbedPanel.Tab tab : panel.getTabs()) {
       panel.drawTabList(tab, sb_list);
     }
     panel.drawTabsListEnd(sb_list);
     out.write(sb_list.toString());
     for (TabbedPanel.Tab tab : panel.getTabs()) {
       panel.drawTabContentBegin(tab, out, currentPage);
       pageContext.setAttribute("title", tab.getTitle());
       pageContext.setAttribute("title_us", tab.getTitleUS());
 %>
<div class id="tabContent_${title_us}"><cq:include path="tab_${title_us}" resourceType="foundation/components/parsys" /></div>
<%
  panel.drawTabContentEnd(tab, out);
      if (mode == WCMMode.EDIT) {
        panel.createDesginNodeStructure(currentNode, currentPage);
        panel.createTabContentComponent("tab_" + tab.getTitleUS());
      }
    }
    panel.drawTabsEnd(out);
    currentNode.getSession().save();
  }

  //setDesignContent(currentPage, currentNode);
%> <%!class TabbedPanel {

    private final static String JCR_CONTENT = "/jcr:content/";
    private List<Tab> tabs = new ArrayList<Tab>();
    private Node parentParsysNode = null;
    private Node tabPanelDesignNode = null;

    public TabbedPanel(Node currentNode, WCMMode mode) throws RepositoryException {
      if (currentNode != null) {
        if (currentNode.hasProperty("tabs")) {
          Property p = currentNode.getProperty("tabs");
          if (p.isMultiple()) {
            Value[] values = p.getValues();
            for (Value title : values) {
              Tab t = new Tab(title.getString());
              //check to see if it has any content              
              boolean isEditable = (mode == WCMMode.EDIT || mode == WCMMode.DESIGN);
              if (isEditable || !isEditable && t.hasContent(currentNode)) {
                tabs.add(t);
              }
            }
          } else {
            String value = p.getString();
            tabs.add(new Tab(p.getString()));
          }
        } else if (currentNode.hasProperty("predefined")) {
          String tabNames[] = currentNode.getProperty("predefined").getString().split("~");
          for (String tabName : tabNames) {
            Tab t = new Tab(tabName);
            //check to see if tab has any content
            boolean isEditable = (mode == WCMMode.EDIT || mode == WCMMode.DESIGN);
            if (isEditable || !isEditable && t.hasContent(currentNode)) {
              tabs.add(t);
            }

          }
        }
      }

    }

    public void drawTabsBegin(JspWriter out) throws IOException {
      out.write("<div class=\"tab\">");
    }

    public void drawTabsEnd(JspWriter out) throws IOException {
      out.write("</div>");
      out.write("<div class=\"tabLabelBottom\"></div>");
    }

    public void drawTabsListBegin(StringBuilder sb_list) throws IOException {
      sb_list.append("<ul id=\"tabs\" class=\"tabs\">");      
    }

    public void drawTabsListEnd(StringBuilder sb_list) throws IOException {
      sb_list.append("</ul>");      
    }

    public void drawTabList(Tab tab, StringBuilder sb_list) throws IOException {
      sb_list.append("<li id=\"tab_" + tab.getTitleUS() + "_li\">");
      sb_list.append("<a href=\"#tab_" + tab.getTitleUS() + "\">" + tab.getTitle() + "</a>");
      sb_list.append("</li>");
    }

    //content

    public void drawTabsContentBegin(JspWriter out) throws IOException {
      out.write("<div class=\"tab_container\">");
    }

    public void drawTabsContentEnd(JspWriter out) throws IOException {
      out.write("</div>");
    }

    public void drawTabContentBegin(Tab tab, JspWriter out, Page currentPage) throws IOException {
      out.write("<div id=\"tab_" + tab.getTitleUS() + "\" class=\"tab_content\">");
      //out.write("<script type=\"text/javascript\">pageTracker._trackPageview('" + currentPage.getPath() + "_" + tab.getTitleUS() + ".html');</script>");
    }

    public void drawTabContentEnd(Tab tab, JspWriter out) throws IOException {
      out.write("</div>");
    }

    public List<Tab> getTabs() {
      return tabs;
    }

    public void createDesginNodeStructure(Node currentNode, Page currentPage) throws ValueFormatException,
        RepositoryException {

      Node pageNode = currentPage.adaptTo(Node.class);
      int i = 0;
      while (!pageNode.getNode("jcr:content").hasProperty("cq:designPath") || i == 6) {
        pageNode = pageNode.getParent();
        i++;
      }

      String designPath = pageNode.getNode("jcr:content").getProperty("cq:designPath").getString();

      //get the nodes from the content directory that have to be under the design directory
      String nodes[] = currentNode.getPath().substring(
          currentNode.getPath().indexOf(JCR_CONTENT) + JCR_CONTENT.length()).split("/");

      //we should ALWAYS have a template node
      this.tabPanelDesignNode = currentNode.getSession().getNode(
          designPath + JCR_CONTENT + currentPage.getTemplate().getName());

      //the parent parsys for this whole component will be the first node after the template
      this.parentParsysNode = this.tabPanelDesignNode.getNode(nodes[0]);

      //create the design directory structure if it doesn't already exist
      for (String node : nodes) {
        if (this.tabPanelDesignNode.hasNode(node)) {
          this.tabPanelDesignNode = this.tabPanelDesignNode.getNode(node);
        } else {
          this.tabPanelDesignNode = this.tabPanelDesignNode.addNode(node, "nt:unstructured");
        }
      }
    }

    public void createTabContentComponent(String name) throws Exception {
      Node parsysNode = null;
      if (!tabPanelDesignNode.hasNode(name)) {
        parsysNode = tabPanelDesignNode.addNode(name, "nt:unstructured");
        parsysNode.setProperty("sling:resourceType", "foundation/components/parsys");
        parsysNode.addNode("section", "nt:unstructured");
      } else {
        parsysNode = tabPanelDesignNode.getNode(name);
      }

      if (this.parentParsysNode.hasProperty("components")) {
        if (parsysNode.hasProperty("components")) {
          parsysNode.getProperty("components").remove();
        }
        if (this.parentParsysNode.getProperty("components").isMultiple()) {
          parsysNode.setProperty("components", this.parentParsysNode.getProperty("components").getValues());
        } else {
          parsysNode.setProperty("components", this.parentParsysNode.getProperty("components").getString());
        }
      } else {
        if (parsysNode.hasProperty("components")) {
          parsysNode.getProperty("components").remove();
        }
      }
    }

    class Tab {

      private String title = null;
      private String titleUS = null;
      private final static String TAB = "tab_";

      Tab(String title) {
        this.title = title;
        this.titleUS = title.replace(' ', '_').replace('/', '_');
      }

      String getTitle() {
        return this.title;
      }

      String getTitleUS() {
        return this.titleUS;
      }

      boolean hasContent(Node currentNode) throws RepositoryException {
        if (currentNode.hasNode(TAB + this.titleUS)) {
          return currentNode.getNode(TAB + this.titleUS).hasNodes();
        } else {
          return false;
        }
      }
    }
  }%></div>
<div style="clear: both;"></div>

<script type="text/javascript">

$(document).ready(function() {   
    var tabContainers = $('div.tab > div');
    var first = 0;    
    tabContainers.hide().filter(':first').show();            
         
    $(window).bind('hashchange', function () {    
      var hash = window.location.hash || $("ul.tabs li:first").find("a").attr("href");                  
      $("ul.tabs li").removeClass("active");
      $(hash + "_li").addClass("active");                                          
      tabContainers.hide();
      tabContainers.filter(hash).show();
<% if (mode == WCMMode.EDIT) { %>
      if(first != 0){
        location.reload(true);
      }      
<% } %>      
    });    
    $(window).trigger("hashchange");
    first = 1;
    
    
});    
</script>

