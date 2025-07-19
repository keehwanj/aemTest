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

    </script><div class="<%= ddClassName %>" id="departmentNav"><%
}


    List list = (List)request.getAttribute("list");
    if (!list.isEmpty()) {
        out.write("<div id=\"departmentNav\"><ul id=\"departmentNav\">");
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
                //first parents do not have any content so that we do not need to have a link to the first parent page.
                String navItem = String.format("<li class=\"%s\"><a %s href=\"\" title=\"%2s\">%3s</a></li>",cssClass,multilineStyle ,"",cleantitle,title);
                //String navItem = String.format("<li class=\"%s\"><a %s  title=\"%2s\">%3s</a></li>",cssClass,multilineStyle ,cleantitle,title);

                if(grandchildren.length()>0){
					//first parents do not have any content so that we do not need to have a link to the first parent page.                    
                    navItem = String.format("<li class=\"parent %s\"><a %s href=\"%s.html\" title=\"%s\" class=\"btn_nav\">%s</a><ul>%s</ul></li>",cssClass,multilineStyle ,child.getPath(),cleantitle,title,grandchildren);
                    //navItem = String.format("<li class=\"parent %s\"><a %s  title=\"%s\" class=\"btn_nav\">%s</a><ul>%s</ul></li>",cssClass,multilineStyle ,cleantitle,title,grandchildren);

                } 
                out.write(navItem);
        
            }
            
        }
        out.write("</ul></div><div class=\"clearfloat\"></div>");
    }else {
        %><cq:include script="empty.jsp"/><%
    }
    
    if (mode == WCMMode.EDIT) {
        %></div><%
    }
 %>


<script>
$( document ).ready(function() {

  $('ul#departmentNav > li.parent > ul > li.parent > a.btn_nav').hover(function(){
    var checkElement_1 = $(this).next();
    $(this).css('background-color','#eaeaea');
    },function(){
    $(this).css('background-color','#ffffff');
  });


$('#departmentNav > ul > li > a').click(function(e) {

  $('ul#departmentNav li.parent a').css('background', 'transparent url(/etc/designs/enb/images/arrow_dep.gif) no-repeat right center');	
  $('padding-right').css('background', '30px !important');	

  $('ul#departmentNav li.active ul li a:link').css('background', 'transparent url(/etc/designs/enb/images/arrow_dep_flyout.gif) no-repeat scroll 0 7px');	 
  $('ul#departmentNav li.parent ul li a').css('background', 'transparent url(/etc/designs/enb/images/arrow_dep_flyout.gif) no-repeat scroll 0 7px');

  $('#departmentNav li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
	$(this).css('background', 'transparent');	
	$(this).css('background', 'url(/etc/designs/enb/images/arrow_dep.gif) no-repeat right center');	
    //$(this).css('background', 'transparent url(/etc/designs/enb/images/arrow_dep.gif) no-repeat right center');	
    //$(this).css('padding-right', '30px !important');		
	$(this).css('padding-right', '30px');	
	$(this).css('color', '#000000');

    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');	      
	}

  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
  	$(this).css('background', 'transparent');	
    $(this).css('background', 'url(/etc/designs/enb/images/arrow_dep1.gif) no-repeat right center');	      
    //$(this).css('padding-right', '30px !important');	
	$(this).css('padding-right', '30px'); 		
	$(this).css('color', '#000000');	
      
    $('#departmentNav ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');	      
  }

  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});

});
</script>
