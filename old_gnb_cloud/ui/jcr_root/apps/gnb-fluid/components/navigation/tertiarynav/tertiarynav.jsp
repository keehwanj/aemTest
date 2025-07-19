<%@include file="/libs/wcm/global.jsp"%>
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
        out.write("<ul id=\"tertiaryNav\">");
        for (Iterator<Page> i = list.getPages(); i.hasNext(); ) {
            Page child = i.next();
            if(child!=null && !child.isHideInNav()) {
              String cssClass = "";
              String grandchildren = new String();
              if(!i.hasNext()) cssClass="last";
              if(currentPage.getPath().startsWith(child.getPath())) 
              {
                  out.write(String.format("<li class=\"current %s\">",cssClass));
                  %><sling:include path="<%=child.getPath() +  ".quicklink.html"%>" /><%
                  
                  boolean listStarted = false;
                  for (Iterator<Page> j = child.listChildren(); j.hasNext(); ) {
                    Page grandchild = j.next();
                    if(!grandchild.isHideInNav()) {
                      if(!listStarted) {
                        out.write("<ul>");
                        listStarted=true;
                      }
                      if(currentPage.getPath().startsWith(grandchild.getPath())) {
                        out.write("<li class=\"active %s\">");
                      } else {
                        out.write("<li>");
                      }
                      %><sling:include path="<%=grandchild.getPath() + ".quicklink.html" %>" /><%
                      out.write("</li>");
                    }
                  }
                  if(listStarted) out.write("</ul>");

                  out.write("</li>");
              } else {
                   out.write(String.format("<li class=\"%s\">",cssClass));
                  %><sling:include path="<%=child.getPath()+ ".quicklink.html" %>" /><%
                  out.write("</li>");
              }
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