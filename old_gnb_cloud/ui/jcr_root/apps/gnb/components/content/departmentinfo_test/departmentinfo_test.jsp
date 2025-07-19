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
<%@page import="java.net.URLEncoder"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.apache.sling.api.request.RequestDispatcherOptions"%>
<%@page import="org.apache.sling.api.scripting.SlingScriptHelper"%>
<%@include file="fragments/init.jsp"%>

<% 
try {
  
  // note: If these strings are changed, the associated css must also be changed in etc/designs/gnb/styles/departmentinfo.css
  // and etc/designs/gnb/styles/print.css
  String contactsTitle = "contacts";
  String structureTitle = "structure";
  String mandatesTitle = "mandat";
  String employeeTitle = "employés";
  String officeTitle = "bureaux";
  
  //These are setup in the init.jsp
  final Resource p_resource = resource;
  final Page p_currentPage = currentPage;
  final Integer p_orgId = (Integer)request.getAttribute("orgId");
  @SuppressWarnings("unchecked")
  final ArrayList<Node> p_children = (ArrayList<Node>) request.getAttribute("children");
  Node p_deptDataNode = (Node)request.getAttribute("deptDataNode");    
  Node p_orgDataNode = (Node)request.getAttribute("orgDataNode");   
  final String lang = (String) request.getAttribute("lang");
  String langSuffix = "FRE";
  String spinnerText = "<em>Chargement&#8230;</em>";
  if (lang == null || lang.equalsIgnoreCase("en")) {
    langSuffix = "ENG";
    spinnerText = "<em>Loading&#8230;</em>";
    mandatesTitle = "mandates"; 
    employeeTitle = "employees" ; 
    officeTitle = "offices" ; 
  }  
    
  if (p_deptDataNode != null && p_orgDataNode!=null) {   
    final String ORGNAME = "ORGNAME" + langSuffix;
    String locORGTITLE = "ORGTITLE" + langSuffix;
    final String SERVICES = "SERVICES";  
    

    if (p_orgDataNode.hasProperty(ORGNAME) && Utils.isNotEmpty(p_orgDataNode.getProperty(ORGNAME).getString())) {
      String orgName = "";
      if(p_orgDataNode.hasProperty(ORGNAME) && Utils.isNotEmpty(p_orgDataNode.getProperty(ORGNAME).getString())) {
        orgName = p_orgDataNode.getProperty(ORGNAME).getString();
      }
      // if we have an inchargegender and it is not null - set field = that value - otherwise - default to male 
      String inChargeGender = "Male";
      if (p_orgDataNode.hasProperty("INCHARGEGENDER") && Utils.isNotEmpty(p_orgDataNode.getProperty("INCHARGEGENDER").getString())  ) {
            inChargeGender = p_orgDataNode.getProperty("INCHARGEGENDER").getString(); 
      }
      if (inChargeGender.equals("Female") && langSuffix == "FRE" ) {
          // *** if french page and in charge person is female - display the feminine french org title ***
          locORGTITLE = locORGTITLE + "FEM";  
      }
      if(!p_orgDataNode.getPath().equals(p_deptDataNode.getPath()) && p_orgDataNode.hasProperty(locORGTITLE) && Utils.isNotEmpty(p_orgDataNode.getProperty(locORGTITLE).getString())) {
        orgName += " (" + p_orgDataNode.getProperty(locORGTITLE).getString() +  ")";
      }     
      out.write(String.format("<div class=\"pageHeader\"><h1>%s</h1>", orgName));
      if(!p_orgDataNode.getPath().equals(p_deptDataNode.getPath())) {
        out.write("<h3>");
        out.write(Utils.getQuicklink(p_deptDataNode.getParent().getPath(),p_currentPage,p_resource));
        out.write("</h3>");
      }
      out.write("</div><div class=\"clearfloat\"></div>");
    }    
    
    out.write("<div id=\"department_tabs\" style=\"display:hidden;\"><ul>");
    out.write(String.format("<li><a href=\"%s.contactstab.%s.html?%s\" title=\"%s\"><span>%s</span></a></li>",p_resource.getPath(),slingRequest.getRequestPathInfo().getSelectorString(),request.getQueryString(), contactsTitle, LocaleSupport.getLocalizedMessage(pageContext, "contactText")));

    if(p_children.size()>0)
      out.write(String.format("<li><a href=\"%s.structuretab.%s.html\" title=\"%s\"><span>%s</span></a></li>",p_resource.getPath(),slingRequest.getRequestPathInfo().getSelectorString(), structureTitle, LocaleSupport.getLocalizedMessage(pageContext, "structureText")));
    if(p_children.size()>0)
      out.write(String.format("<li><a href=\"%s.mandatestab.%s.html\" title=\"%s\"><span>%s</span></a></li>",p_resource.getPath(),slingRequest.getRequestPathInfo().getSelectorString(), mandatesTitle, LocaleSupport.getLocalizedMessage(pageContext, "mandatesText")));
    out.write(String.format("<li><a href=\"%s.employeestab.%s.html?%s\" title=\"%s\"><span>%s</span></a></li>",p_resource.getPath(),slingRequest.getRequestPathInfo().getSelectorString(),request.getQueryString(),  employeeTitle, LocaleSupport.getLocalizedMessage(pageContext, "employeesText")));
    out.write(String.format("<li><a href=\"%s.officestab.%s.html?%s\" title=\"%s\"><span>%s</span></a></li>",p_resource.getPath(),slingRequest.getRequestPathInfo().getSelectorString(),request.getQueryString(),  officeTitle, LocaleSupport.getLocalizedMessage(pageContext, "officesText")));
    if(p_deptDataNode.hasProperty(SERVICES)) 
      out.write(String.format("<li><a href=\"%s.servicestab.%s.html?%s\" title=\"services\"><span>%s</span></a></li>",p_resource.getPath(),slingRequest.getRequestPathInfo().getSelectorString(),request.getQueryString(), LocaleSupport.getLocalizedMessage(pageContext, "servicesText")));
    out.write("</ul>");
%>
    <div class="clearfloat"></div></div>
    <script language="javascript">
        function refreshpage()
        {
        window.location.reload();
        }
        </script>
    <script type="text/javascript">

      $( function() {
        $('#department_tabs').tabs( {spinner: '<%=spinnerText%>', fxFade :true,fxSpeed :'fast',bookmarkable: true, ajaxOptions: { async: false, cache: true, dataType: 'html' }});
$('#department_tabs').show();
        $('#department_tabs .ui-corner-all, #department_tabs.ui-corner-all').removeClass('ui-corner-all');
        $('#department_tabs .ui-widget-header, #department_tabs.ui-widget-header').removeClass('ui-widget-header');
        $('#department_tabs .ui-corner-top, #department_tabs .ui-corner-top').removeClass('ui-corner-top');
        $('#department_tabs .ui-corner-bottom, #department_tabs .ui-corner-bottom').removeClass('ui-corner-bottom');
        $('#department_tabs .ui-widget-content, #department_tabs.ui-widget-content').removeClass('ui-widget-content');
              
        $('.ui-tabs-nav a').click(function() {
          $.cookie("tab", null);
          var hash = $(this).attr("href").replace( /^#/, '' );
          $(this).attr("href","notset");
          $('head').attr("id",hash);
          location.hash = hash;
          $('head').attr("id","");
          $(this).attr("href","#" + hash);
          // this will refresh the page if someone selects the structure tab 
          // added and commented out by Connie - Feb 2013 - because of better solution in structuretab.jsp 
          //if(hash == "structure"){
              // refreshpage();
          //}
           

        });        
              
        setTimeout(function() { window.scrollTo(0, 0);}, 1000);

      });
    </script>
<%    
    } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
      %><img src="/libs/widgets/0.gif" class="cq-text-placeholder" alt="">
<%
    }
  } catch (Exception ex) {
    log.error("departmentinfo component encountered an error:", ex);
  }
%>