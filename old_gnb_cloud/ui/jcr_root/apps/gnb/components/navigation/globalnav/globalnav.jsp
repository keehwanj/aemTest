<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.Locale"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="org.apache.sling.api.scripting.SlingScriptHelper"%>
<%@page import="com.t4g.cnb.utils.Utils"%>

<div id="globalnav">
<!--START of div id=deptCatButtons-->    
<div id="deptCatButtons" class="hidden-xs hidden-sm hidden-md">
<%!
   protected String getTitle(Page page)
   { 
      if(page==null) return "";
      String title = page.getNavigationTitle();
      if (title == null || title.equals("")) {
        title = page.getPageTitle();
      }
      if (title == null || title.equals("")) {
        title = page.getTitle();
      }
      if (title == null || title.equals("")) {
        title = page.getName();
      }
      return title;
   }

   protected String generateIncludeFromProperty(String path, String defaultValue,  Page currentPage, Logger log) {
     try {
       String contactsPath = getLocalization(path, defaultValue, currentPage, log);
       if(contactsPath!=null) {
         Page contactsPage = currentPage.getPageManager().getPage((String)contactsPath);
         return String.format("%1s.quicklink.html", contactsPage.getPath());
       }
     } catch (Exception e) {
       log.error("error including " + path + " link in globalnav", e);
     }
     return String.format("%s.quicklink.html", currentPage.getPath());
   }

   protected String generateIncludeFromPage(Page page, Logger log) {
     try {
       if(page!=null) {
         return String.format("%s.quicklink.html", page.getPath());
       }
     } catch (Exception e) {
        log.error("error including " + page.getName() + " link in globalnav", e);
     }
     return "";
   }
   
   protected String getLocalization(String key, String defaultValue, Page currentPage, Logger log) {
       try {
           Page myPage = currentPage;
             while (myPage != null) {
                 Node myNode = myPage.adaptTo(Node.class);
                 if(myNode!=null && myNode.hasNode("jcr:content") &&  myNode.getNode("jcr:content").hasNode("globalNav") && myNode.getNode("jcr:content").getNode("globalNav").hasProperty(key)) {
                     Property prop = myNode.getNode("jcr:content").getNode("globalNav").getProperty(key);
                     if(prop!=null && prop.getValue()!=null) {
                         String value = (String) prop.getValue().getString();
                         if (Utils.isNotEmpty(value) && (!value.equals("undefined"))) return value;
                     }
                 }
                 myPage = myPage.getParent();
             }     
       } catch (Exception e) {
          log.error("error getting value for [" + key + "] in sitefooter", e);
       }
       return defaultValue;
     }
%>

<%
  String lang ="fr";
  Locale locale = currentPage.getLanguage(true);
  if(locale==null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang="en";
  }


  //Render the Departments Button
  try {
    Object departmentsPath = getLocalization("departmentsPath","/content/gnb/" + lang + "/departments",currentPage, log);
    if(departmentsPath!=null && departmentsPath instanceof String) {
      Page departmentsPage = currentPage.getPageManager().getPage((String)departmentsPath);
      out.write(String.format("<div class=\"btn_dep\">%s</div>", getTitle(departmentsPage)));
    }
  } catch (Exception e) {
    log.error("error rendering departments button in globalnav", e);
  }

  //Render the Categories Button
  try {
    Object categoriesPath = getLocalization("categoriesPath","/content/gnb/" + lang + "/services",currentPage, log);
    if(categoriesPath!=null && categoriesPath instanceof String) {
      Page categoriesPage = currentPage.getPageManager().getPage((String)categoriesPath);
      out.write(String.format("<div class=\"btn_cat\">%s</div>", getTitle(categoriesPage)));
    }
  } catch (Exception e) {
    log.error("error rendering categories button in globalnav", e);
  }


%>
</div>
<!--END of div id=deptCatButtons--> 


<ul>
    <!--START of department/services/search-->      
    <%if (lang.equals("en")) {%>
    <li class="visible-sm visible-md"><a href="//www2.gnb.ca/content/gnb/en/search.html">Search</a></li>   
    	<li class="visible-xs visible-sm visible-md"><a href="//www2.gnb.ca/content/gnb/en/services.html">Services</a></li>      
    	<li class="visible-xs visible-sm visible-md"><a href="//www2.gnb.ca/content/gnb/en/corporate/government_websites.html">Departments</a></li>   
    <%}
	else{%>
    	<li class="visible-sm visible-md"><a href="//www2.gnb.ca/content/gnb/fr/recherche.html">Recherche</a></li>   
    	<li class="visible-xs visible-sm visible-md"><a href="//www2.gnb.ca/content/gnb/fr/services.html">Services</a></li>      
    	<li class="visible-xs visible-sm visible-md"><a href="//www2.gnb.ca/content/gnb/fr/corporate/site_web.html">Minist&egrave;res</a></li>   
    <%}%>
    <!--END of department/services/search-->    

	<!--START of languageSwitcher-->        
    <li><cq:include path="languageSwitcher" resourceType="gnb/components/tools/languageswitcher" /></li>
    <!--END of languageSwitcher-->       
<%  
WCMMode mode = WCMMode.DISABLED.toRequest(request);
String departmentPageIE6 = currentPage.getPath() + ".html";
String categoryPageIE6 = currentPage.getPath() + ".html";
try {
%>  
    <!--START of home/contacts page-->    
    <li><sling:include path="<%=generateIncludeFromProperty("contactsPath","/content/gnb/" + lang + "/contacts",currentPage,log) %>" /></li>
    <li class="visible-sm visible-md visible-lg"><sling:include path="<%=generateIncludeFromPage(currentPage.getAbsoluteParent(2),log) %>" /></li>
    <% if (currentPage.getPath().contains("/content/gnb/")) { %>
    	<li class="visible-xs"><span class="glyphicon glyphicon-home"></span><a href="<%=currentPage.getAbsoluteParent(2).getPath()%>.html"> GNB</a></li>
    <%}%>
    <% if (currentPage.getPath().contains("/content/wel-bien/")) { %>
    	<li class="visible-xs"><a href="<%=currentPage.getAbsoluteParent(2).getPath()%>.html"><span class="glyphicon glyphicon-home"></span></a></li>
    <%}%>

    <!--END of home/contacts page-->    
</ul>
</div>
<!-- department panel  **************************************************-->
<div id="panel_dep"  class="hidden-xs hidden-sm hidden-md">
  <div id="bkgr_top"></div>
  <div id="bkgr_span">
<%
  try {
    Object departmentsPath =getLocalization("departmentsPath","/content/gnb/" + lang + "/departments",currentPage, log);
    if(departmentsPath!=null && departmentsPath instanceof String) {
      Page departmentsPage = currentPage.getPageManager().getPage((String)departmentsPath);
      if(departmentsPage!=null) {
        departmentPageIE6 = departmentsPage.getPath() + ".html";
      ArrayList<Page> depts = new ArrayList<Page>();
      Iterator<Page> itr = departmentsPage.listChildren();
      while(itr.hasNext()) depts.add(itr.next());
      out.write("<ul class=\"first_list\"><li>");
      %><div class="h2"><sling:include path="<%=generateIncludeFromPage(departmentsPage,log) %>" /></div><%
      int i =0;
      int totalPages = 0;
      for(Page dept: depts) { if(dept.hasContent()  && !dept.isHideInNav())totalPages++; }
      for(Page dept: depts) {
          if (!dept.hasContent()){log.error(dept.getName() +" has no content");}
        if(!dept.hasContent()||dept.isHideInNav()) continue;
        i++;
        %><li><sling:include path="<%=generateIncludeFromPage(dept,log) %>" /></li><%
        if(((i*3)/totalPages)!=(((i-1)*3)/totalPages)) {
          out.write("</ul>");
          if(i<totalPages) {
            out.write("<ul><li>");
            out.write(String.format("<div class=\"h2\"><div class=\"inv\">%s</div></div>", getTitle(departmentsPage)));
          }  
        }
      }
      if(totalPages%3>0) {
        //keep causing error -"No matching start tag found:" from Total validator
        //out.write("</ul>");
        }
      }
    }
  } catch (Exception e) {
    log.error("error rendering departments list in globalnav", e);
  }


  try {
    Object legislaturePath = getLocalization("legislaturePath","/content/gnb/" + lang + "/legislature",currentPage, log);
    Object courtsPath = getLocalization("courtsPath","/content/gnb/" + lang + "/courts",currentPage, log);
    Object otherPath = getLocalization("otherPath","/content/gnb/" + lang + "/other",currentPage, log);
    if(legislaturePath!=null && legislaturePath instanceof String) {
      Page legislaturePage = currentPage.getPageManager().getPage((String)legislaturePath);
      Page courtsPage = currentPage.getPageManager().getPage((String)courtsPath);
      Page otherPage = currentPage.getPageManager().getPage((String)otherPath);
      out.write("<ul>");
      if(legislaturePage!=null) {
      ArrayList<Page> legislatures = new ArrayList<Page>();
      Iterator<Page> itr = legislaturePage.listChildren();
      while(itr.hasNext()) legislatures.add(itr.next());

      %><li><div class="h2"><sling:include path="<%=generateIncludeFromPage(legislaturePage,log) %>" /></div><%
      for(Page legislature: legislatures) {
        if(!legislature.hasContent()||legislature.isHideInNav()) continue;

        %><li><sling:include path="<%=generateIncludeFromPage(legislature,log) %>" /></li><%
      }
      }
      if(courtsPage!=null) {%><li><div class="h2"><sling:include path="<%=generateIncludeFromPage(courtsPage,log) %>" /></div><%}
      if(otherPage!=null) {%><li><div class="h2"><sling:include path="<%=generateIncludeFromPage(otherPage,log) %>" /></div><%}

      out.write("</ul>");
    }
  } catch (Exception e) {
    log.error("error rendering legislature/courts/other list in globalnav", e);
  }

%>
    <div class="clearfloat"></div>
  </div>
  <div id="bkgr_footer"></div>
</div>
<!-- end of department panel  **************************************************-->

<!-- category panel  **************************************************-->
<div id="panel_cat" class="hidden-xs hidden-sm hidden-md">
  <div id="bkgr_top1"></div><!--changed bkgr_top ==>bkgr_top1-->
    <div id="bkgr_span1"><!--changed bkgr_span ==>bkgr_span1-->
<%
  try {
    Object categoriesPath = getLocalization("categoriesPath","/content/gnb/" + lang + "/services",currentPage, log);
    if(categoriesPath!=null && categoriesPath instanceof String) {
      Page categoriesPage = currentPage.getPageManager().getPage((String)categoriesPath);
      if(categoriesPage!=null) {
        categoryPageIE6 = categoriesPage.getPath() + ".html";
      ArrayList<Page> cats = new ArrayList<Page>();
      Iterator<Page> itr = categoriesPage.listChildren();
      while(itr.hasNext()) {
        Page cat = itr.next();
        if(cat.hasContent() && !cat.isHideInNav()) cats.add(cat);
      }
      out.write("<ul class=\"first_list\">");
      int i =0;
      int numPerColumn = (cats.size()+1) /3;
      if((cats.size()+1) %3>0) numPerColumn++;
      for(Page cat: cats) {
        i++;
        %><li><sling:include path="<%=generateIncludeFromPage(cat,log) %>" /></li><%
       if(i%numPerColumn==0) {
          out.write("</ul><ul>");
        }
      }
      out.write("</ul>");
      }
    } 
  } catch (Exception e) {
    log.error("error rendering categories list in globalnav", e);
  }
  String sImagePath = "/etc/designs/gnb/images/";
  String sTitle = "Search Services"; 
  String sShortTitle = "Search";
  if (lang == "fr") {
      sImagePath += "fr/";
      sTitle = "Rechercher un service"; 
      sShortTitle =  "Rechercher" ; 
  }
%>
  <ul><li>
  <!-- 
  change by connie - Aug 2012 - Add a search field and a search button to the services section in the page header, 
  when the button is pressed (or enter is pressed while in the search field), a function is called that redirects to 
  the search services page, with the entered search field as the keyword parameter 
  --> 
    <div class="form-group">
  	<label for="searcher"><%=sTitle%></label>
  	<!--<input type="text" class="form-control" id="searcher" onKeyDown="if (event.keyCode == 13) document.getElementById('btnSearch').click()"  name="searcher" placeholder="<%=sTitle%>" class="searchText" >-->
	<input type="text" class="form-control" id="searcher" onKeyDown="if (event.keyCode == 13) document.getElementById('btnSearch').click()"  placeholder="<%=sTitle%>" class="searchText" >        
    </div>
    <input type="button" id="btnSearch" value="<%=sShortTitle%>" onClick="goToSearch(this,'<%=lang%>')" class="btn btn-default btn-sm">  

  </li></ul>
      <div class="clearfloat"></div>
    </div>
  <div id="bkgr_footer1"></div><!--changed bkgr_footer ==>bkgr_footer1-->
</div>
<!-- end of category panel ******************************************-->
<%
} finally {
  mode.toRequest(request);
}
/*
heightDivDep and heightDivCat are defined on stacked/globalNav.jsp.
This is required because the globalnav component is included in a floating
div and doesn't push the rest of the page down when it grows dynamically
on the client.
*/%>
<script type="text/javascript">
$(document).ready(function(){
    var deptHeight = $("#panel_dep").height()-35;
    var catHeight = $("#panel_cat").height()-35;
    $("#heightDivDep").height(deptHeight);
    $("#heightDivCat").height(catHeight);
    $("#heightDivDep").hide();
    $("#heightDivCat").hide();
    $(".btn_dep").click(function(){
        if (document.all && !window.opera && !window.XMLHttpRequest) {
         window.location="<%=departmentPageIE6%>";
         return false;
        }   
        if($("#panel_dep").is(':visible')) {
            $("#heightDivDep").slideToggle("slow", function() {$("#heightDivDep").height(deptHeight); });
            $("#panel_dep").slideToggle("fast");
        } else {
            if($("#panel_cat").is(':visible')) {
                $("#heightDivCat").slideToggle("slow", function() {$("#heightDivCat").height(catHeight); });
                $("#panel_cat").slideToggle("fast");
                $(".btn_cat").toggleClass("active");
            }            
            $("#heightDivDep").slideToggle("fast", function() {$("#heightDivDep").height(deptHeight); });
            $("#panel_dep").slideToggle("slow");
        }
        $(this).toggleClass("active"); return false;
    });
    $(".btn_cat").click(function(){
        if (document.all && !window.opera && !window.XMLHttpRequest) {
         window.location="<%=categoryPageIE6%>";
         return false;
        }  
        if($("#panel_cat").is(':visible')) {
            $("#heightDivCat").slideToggle("slow", function() {$("#heightDivCat").height(catHeight); });
            $("#panel_cat").slideToggle("fast");
        } else {
            if($("#panel_dep").is(':visible')) {
                $("#heightDivDep").slideToggle("slow", function() {$("#heightDivDep").height(deptHeight); });
                $("#panel_dep").slideToggle("fast");
                $(".btn_dep").toggleClass("active");
            }
            
            $("#heightDivCat").slideToggle("fast", function() {$("#heightDivCat").height(catHeight); });
            $("#panel_cat").slideToggle("slow");
        }

        $(this).toggleClass("active"); return false;
    });
});
</script>

<script type="text/javascript">
function goToSearch(obj, sLang){
    location.href='//www2.gnb.ca/content/gnb/' + sLang + '/services.html?keyword=' + document.getElementById('searcher').value;
} 
</script>

<!-- START Javascript -->
<!-- START css/js for all auto complete -->
<!--<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" />-->
<!--<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.2/css/lightness/jquery-ui-1.10.2.custom.min.css" />-->
<!--<script src="//code.jquery.com/ui/1.10.2/jquery-ui.js" ></script>-->
<style>
.ui-autocomplete li.ui-menu-item{
	font-size : 90%;
}
</style>

<!-- END css/js for all auto complete -->
<script>
$(function() {
    var fullpath = location.pathname;
    var pathsplit = fullpath.split(".");
    //getting path without selectors
    var path = pathsplit[0] + ".html";
    var auto_service_search = path.replace(".html", "/_jcr_content.auto_service_search");
    $("#searcher").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: auto_service_search,
                dataType: "json",
                data: {

                    term: request.term
                },
                success: function(result) {
                    response(
                        $.map(result, function(item) {
                            return {

                                label: item.data,
                                value: item.data
                            }
                        })
                    );
                }
            });
        },
        minLength: 1,
        select: function(event, ui) {
      		$(this).closest('input').val(ui.item.value);
            //$(this).closest('form').trigger('submit');
            $('#btnSearch').click();
        }
    });
})
</script>
<!-- END Javascript -->