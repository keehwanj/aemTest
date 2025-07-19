<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="com.day.cq.wcm.api.components.DropTarget" %>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Locale"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
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
        out.write("<ul id=\"departmentNav\">");
        for (Iterator<Page> i = list.getPages(); i.hasNext(); ) {
            Page child = i.next();
            if(child!=null && !child.isHideInNav()) {
                String cssClass = "";
                if(!i.hasNext()) cssClass="last";

                String grandchildren = new String();
                for (Iterator<Page> j = child.listChildren(); j.hasNext(); ) {
                    Page grandchild = j.next();
                    if(!grandchild.isHideInNav()) {
                    String title = grandchild.getNavigationTitle();
                    if (title == null || title.equals("")) {
                        title = grandchild.getPageTitle();
                    }
                    if (title == null || title.equals("")) {
                        title = grandchild.getTitle();
                    }
                    if (title == null || title.equals("")) {
                        title = grandchild.getName();
                    }
                    if(grandchild.getPath().equals(currentPage.getPath())) cssClass+= " active";
                    grandchildren += String.format("<li class=\"parent\"><a href=\"%s.html\" class=\"btn_nav\">%s</a></li>",grandchild.getPath(),title);
                    }
                }
        
                
                String title = child.getNavigationTitle();
                if (title == null || title.equals("")) {
                    title = child.getPageTitle();
                }
                if (title == null || title.equals("")) {
                    title = child.getTitle();
                }
                if (title == null || title.equals("")) {
                    title = child.getName();
                }

                if(child.getPath().equals(currentPage.getPath())) cssClass+= " active";
                String cleantitle = title;
                String multilineStyle = "";
                if(title.contains("<br") || title.contains("<BR")) {
                  cleantitle = title.replace("<br>","").replace("<br />","").replace("<br/>","");
                  cleantitle = cleantitle.replace("<BR>","").replace("<BR />","").replace("<BR/>","");
                  multilineStyle = "style=\"font-size:12px;\" ";
                }
                String navItem = String.format("<li class=\"%s\"><a %s href=\"%1s.html\" title=\"%2s\">%3s</a></li>",cssClass,multilineStyle ,child.getPath(),cleantitle,title);

                if(grandchildren.length()>0){
                    navItem = String.format("<li class=\"parent %s\"><a %s href=\"%s.html\" title=\"%s\" class=\"btn_nav\">%s</a><ul>%s</ul></li>",cssClass,multilineStyle ,child.getPath(),cleantitle,title,grandchildren);

                } 
                out.write(navItem);
        
            }
            
        }
        out.write("</ul><div class=\"clearfloat\"></div>");
    }else {
        %><cq:include script="empty.jsp"/><%
    }
    
    if (mode == WCMMode.EDIT) {
        %></div><%
    }
 %>
