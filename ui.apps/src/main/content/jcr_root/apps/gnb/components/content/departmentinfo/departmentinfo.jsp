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

  //START for employeestab
  String orgcontact_start=request.getParameter("orgcontact_start");
  orgcontact_start = Utils.isNotEmpty(orgcontact_start) ? orgcontact_start : "0";

  String orgcontact_hits=request.getParameter("orgcontact_hits");
  orgcontact_hits = Utils.isNotEmpty(orgcontact_hits) ? orgcontact_hits : "25";
  //END for employeestab

  //START for officestab
  String org_start=request.getParameter("org_start");
  org_start = Utils.isNotEmpty(org_start) ? org_start : "0";

  String org_hits=request.getParameter("org_hits");
  org_hits = Utils.isNotEmpty(org_hits) ? org_hits : "25";

  String org_location=request.getParameter("org_location");
  org_location = Utils.isNotEmpty(org_location) ? org_location : "";    
  org_location=URLEncoder.encode(org_location,"UTF8");

  String contact_start=request.getParameter("contact_start");
  contact_start = Utils.isNotEmpty(contact_start) ? contact_start : "0";

  String contact_hits=request.getParameter("contact_hits");
  contact_hits = Utils.isNotEmpty(contact_hits) ? contact_hits : "25";

  String contact_location=request.getParameter("contact_location");
  contact_location = Utils.isNotEmpty(contact_location) ? contact_location : "";   
  contact_location=URLEncoder.encode(contact_location,"UTF8");  
  //END for officestab

  //START for servicestab
  String service_start=request.getParameter("service_start");
  service_start = Utils.isNotEmpty(service_start) ? service_start : "0";

  String service_hits=request.getParameter("service_hits");
  service_hits = Utils.isNotEmpty(service_hits) ? service_hits : "25";
  //END for servicestab



  // note: If these strings are changed, the associated css must also be changed in etc/designs/gnb/styles/departmentinfo.css
  // and etc/designs/gnb/styles/print.css
  String contactsTitle = "contacts";
  String structureTitle = "structure";
  String mandatesTitle = "mandat";
  String employeeTitle = "employs";
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
%>

<!--START of orgchart(new)-->
	<script src='//www.google.com/jsapi' type='text/javascript' ></script>
	<script>
        google.load('visualization', '1', {packages:['orgchart']}); 
 	</script>
<!--END of orgchart(new)-->

	<div class="tabbable">
		<ul class="nav nav-tabs nav-justified" id="myTab">
			<li class="active">
				<a href="#<%=contactsTitle%>" data-toggle="tab">
					<%=LocaleSupport.getLocalizedMessage(pageContext, "contactText")%>
				</a>
        	</li>
            <%if(p_children.size()>0){ %>  
      		<li>
                <a href="#<%=structureTitle%>" data-toggle="tab" data-tab-remote="<%=p_resource.getPath()%>.structuretab.<%=slingRequest.getRequestPathInfo().getSelectorString()%>.html">
                    <%=LocaleSupport.getLocalizedMessage(pageContext, "structureText")%>
                </a>
            </li>
      		<%}%>  
	  		<%if(p_children.size()>0){ %>              
      		<li>
                <a href="#<%=mandatesTitle%>" data-toggle="tab" data-tab-remote="<%=p_resource.getPath()%>.mandatestab.<%=slingRequest.getRequestPathInfo().getSelectorString()%>.html">
                    <%=LocaleSupport.getLocalizedMessage(pageContext, "mandatesText")%>
                </a>
            </li>  
        	<%}%>              
      		<li>
                <a href="#<%=employeeTitle%>" data-toggle="tab" data-tab-remote="<%=p_resource.getPath()%>.employeestab.<%=slingRequest.getRequestPathInfo().getSelectorString()%>.html?orgcontact_start=<%=orgcontact_start%>&orgcontact_hits=<%=orgcontact_hits%>">
                    <%=LocaleSupport.getLocalizedMessage(pageContext, "employeesText")%>
                </a>
            </li>   
      		<li>
                <a href="#<%=officeTitle%>" data-toggle="tab" data-tab-remote="<%=p_resource.getPath()%>.officestab.<%=slingRequest.getRequestPathInfo().getSelectorString()%>.html?org_start=<%=org_start%>&org_location=<%=org_location%>&org_hits=<%=org_hits%>&contact_start=<%=contact_start%>&contact_location=<%=contact_location%>&contact_hits=<%=contact_hits%>">
                    <%=LocaleSupport.getLocalizedMessage(pageContext, "officesText")%>
                </a>
            </li>  
	  		<%if(p_deptDataNode.hasProperty(SERVICES)) { %>             
      		<li>
                <a href="#services" data-toggle="tab"  data-tab-remote="<%=p_resource.getPath()%>.servicestab.<%=slingRequest.getRequestPathInfo().getSelectorString()%>.html?service_start=<%=service_start%>&service_hits=<%=service_hits%>">
                    <%=LocaleSupport.getLocalizedMessage(pageContext, "servicesText")%>
                </a>
            </li>   
      		<%}%>             
    	</ul>
	</div>
    <div class="tab-content">
      <div class="tab-pane active" id="<%=contactsTitle%>">
          <% String contact = p_resource.getPath() + ".contactstab."+slingRequest.getRequestPathInfo().getSelectorString()+".html"; %>
          <sling:include path="<%= contact %>" />
      </div>
      <div class="tab-pane" id="<%=structureTitle%>">
        <button class="btn btn-md btn-primary btn-block disabled"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading... please wait / Chargement, veuillez patienter</button>          
      </div>
      <div class="tab-pane" id="<%=mandatesTitle%>">
		<button class="btn btn-md btn-primary btn-block disabled"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading... please wait / Chargement, veuillez patienter</button>          
      </div>
      <div class="tab-pane" id="<%=employeeTitle%>">
		<button class="btn btn-md btn-primary btn-block disabled"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading... please wait / Chargement, veuillez patienter</button>          
      </div>
      <div class="tab-pane" id="<%=officeTitle%>">
		<button class="btn btn-md btn-primary btn-block disabled"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading... please wait / Chargement, veuillez patienter</button>          
      </div>
      <div class="tab-pane" id="services">
		<button class="btn btn-md btn-primary btn-block disabled"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading... please wait / Chargement, veuillez patienter</button>          
      </div>
	</div>


<script>
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    currTabTarget = $(e.target).attr('href');

    var remoteUrl = $(this).attr('data-tab-remote')


    if (remoteUrl !== '') {                

        $(currTabTarget).load(remoteUrl)
    } 
})
</script>


<script>
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // store the currently selected tab in the hash value
    $("ul.nav-tabs > li > a").on("shown.bs.tab", function (e) {
        var id = $(e.target).attr("href").substr(1);
        window.location.hash = id;
    });

    // on load of the page: switch to the currently selected tab
    var hash = window.location.hash;

    $('#myTab a[href="' + hash + '"]').tab('show');
    $(this).attr("href", "#" + hash);

</script>

<%    
    } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {
      %><img src="/libs/widgets/0.gif" class="cq-text-placeholder" alt="">
<%
    }
  } catch (Exception ex) {
    log.error("departmentinfo component encountered an error:");
  }
%>