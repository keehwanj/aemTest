<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="com.day.cq.wcm.api.components.DropTarget" %>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<cq:include script="init.jsp"/><%
WCMMode mode = WCMMode.fromRequest(request);

if (mode == WCMMode.EDIT) {
    //drop target css class = dd prefix + name of the drop target in the edit config
    String ddClassName = DropTarget.CSS_CLASS_PREFIX + "pages";
    %><script type="text/javascript">
        function list_switchDialogTab(tp, value) {
            if (value == "search") {
                tp.activate(tp.items.get(3));
                tp.unhideTabStripItem(3);
                tp.hideTabStripItem(2);
                tp.hideTabStripItem(1);
            } else if (value == "static") {
                tp.activate(tp.items.get(2));
                tp.unhideTabStripItem(2);
                tp.hideTabStripItem(1);
                tp.hideTabStripItem(3);
            } else if (value == "children"){
                tp.activate(tp.items.get(1));
                tp.unhideTabStripItem(1);
                tp.hideTabStripItem(2);
                tp.hideTabStripItem(3);
            }
            tp.doLayout();
        }
    </script><div class="<%= ddClassName %>"><%
}

    List list = (List)request.getAttribute("list");
    if (!list.isEmpty()) {
        out.write("<ul id=\"mainnav\">");
        Iterator<Page> items = list.getPages();
        while (items.hasNext()) {
            Page listItem = items.next();
            if(!listItem.isHideInNav()) {
            String title = listItem.getNavigationTitle();
            if (title == null || title.equals("")) {
                title = listItem.getPageTitle();
            }
            if (title == null || title.equals("")) {
                title = listItem.getTitle();
            }
            if (title == null || title.equals("")) {
                title = listItem.getName();
            }
            String cssClass = "";
            if(!items.hasNext()) cssClass="last ";
            if(currentPage.getPath().startsWith(listItem.getPath())) cssClass+= "active";
            String navItem = String.format("<li class=\"%s\"><a href=\"%1s.html\" title=\"%2s\">%3s</a></li>",cssClass,listItem.getPath(),title,title);
            if(title.contains("<br") || title.contains("<BR")) {
              String cleantitle = title.replace("<br>","").replace("<br />","").replace("<br/>","");
              cleantitle = cleantitle.replace("<BR>","").replace("<BR />","").replace("<BR/>","");
              navItem = String.format("<li class=\"%s\"><a style=\"font-size:12px;\" href=\"%1s.html\" title=\"%2s\">%3s</a></li>",cssClass,listItem.getPath(),cleantitle,title);
              
            }
            out.write(navItem);
            }
        }
        out.write("</ul><div class=\"clearfloat\"></div>");
    } else {
        %><cq:include script="empty.jsp"/><%
    }
    
    if (mode == WCMMode.EDIT) {
        %></div><%
    }
 %>