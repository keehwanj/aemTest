<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@include file="fragments/init.jsp"%>
<%@include file="fragments/methods.jsp"%>

<%
  try {
    final Resource p_resource = resource;
    final Page p_currentPage = currentPage;
    final Logger p_log = log;
    
    //For Reference only - following commented lines are copied from init.jsp  

    //String itemPath = String.format("%s/%s/orginfo/", orgDataPage, orgId);
    //deptDataNode = WCMUtils.getNode(resourceResolver.getResource(itemPath));
    //ArrayList<Node> children = new ArrayList<Node>();
    //for (NodeIterator nodeIter = deptDataNode.getParent().getNodes(); nodeIter.hasNext();) {
    //  Node childNode = (Node) nodeIter.next();
    //  if (!childNode.getName().equalsIgnoreCase("orginfo")) children.add(childNode);
    //}

    final Node p_deptDataNode = (Node) request.getAttribute("deptDataNode");
    @SuppressWarnings("unchecked")
    final ArrayList<Node> p_children = (ArrayList<Node>) request.getAttribute("children");
    final String lang = (String) request.getAttribute("lang");
    String langSuffix = "FRE";
    if (lang == null || lang.equalsIgnoreCase("en")) {
      langSuffix = "ENG";
    }
    final String ORGNAME = "ORGNAME" + langSuffix;
    String locORGTITLE = "ORGTITLE" + langSuffix;
    final String SERVICES = "SERVICES";

    if (p_children.size() > 0 && p_deptDataNode != null) {

        //sorts the results by orgLevel
         ArrayList<Node> childlist = new ArrayList<Node>();
         for (int i = 0; i < p_children.size(); i++) {
              if (!p_children.get(i).getName().equalsIgnoreCase("jcr:content")) {
                  childlist.add(p_children.get(i));  
              }
         }
         for (int i=0; i < childlist.size(); i++) {
              Node temp = childlist.get(i);
              for (int j=i+1; j<childlist.size(); j++) {
                  if (temp.getProperty("orginfo/ORGLEVEL").getString().compareTo(childlist.get(j).getProperty("orginfo/ORGLEVEL").getString())>0 ) {
                      temp = childlist.get(j);
                  }       
              }
              childlist.remove(temp);
              childlist.add(i,temp);
          }

      // below here - replaced p_children with my sorted list - childlist         

      out.write("<div id=\"structure\">");
      out.write(String.format("<input type=\"hidden\" id=\"togglechartText\" value=\"%s\"></input>", LocaleSupport.getLocalizedMessage(pageContext, "toggleChartViewText")));
      out.write(String.format("<input type=\"hidden\" id=\"togglestructText\" value=\"%s\"></input>", LocaleSupport.getLocalizedMessage(pageContext, "toggleStructViewText")));
      out.write(String.format("<a id=\"viewToggle\">%s</a>", LocaleSupport.getLocalizedMessage(pageContext, "toggleChartViewText")));

      //Output the list view
      out.write("<div id=\"listView\">");
      if (p_deptDataNode.hasProperty(ORGNAME) 
          && Utils.isNotEmpty(p_deptDataNode.getProperty(ORGNAME).getString()) 
          && p_deptDataNode.hasProperty(locORGTITLE) 
          && Utils.isNotEmpty(p_deptDataNode.getProperty(locORGTITLE).getString())) {

          // if we have an inchargegender and it is not null - set field = that value - otherwise - default to male 
          String inChargeGender = "Male";
          if (p_deptDataNode.hasProperty("INCHARGEGENDER") && Utils.isNotEmpty(p_deptDataNode.getProperty("INCHARGEGENDER").getString())  ) {
              inChargeGender = p_deptDataNode.getProperty("INCHARGEGENDER").getString(); 
          }
          if (inChargeGender.equals("Female") && langSuffix == "FRE" ) {
              // *** if french page and in charge person is female - display the feminine french org title ***
              locORGTITLE = locORGTITLE + "FEM";  
          }
          String orgChange = p_deptDataNode.getProperty("ORGANIZATIONCHANGE").getString(); 
          if (orgChange.equals("1")  ) {
              // *** Information currently being revised ***   //  *** Cette information est en cours de revision ***
              out.write("<h2><center>" + LocaleSupport.getLocalizedMessage(pageContext, "revisionText") + "</center></h2>" ) ; 
          }
          out.write(String.format("<h1>%s (%s)</h1>", p_deptDataNode.getProperty(ORGNAME).getString(), p_deptDataNode.getProperty(locORGTITLE).getString()));
      }
      out.write("<ul>");

      StringBuilder sb = new StringBuilder();
      for (Node child : childlist) {
          writeOrgStructureNode(child, p_deptDataNode.getDepth() - 2, sb, p_currentPage, p_resource, p_log); 
      }
      out.write(sb.toString());
      out.write("</ul></div>");
      %>
	<div id="chartView" style="display: none;">
      <script type='text/javascript'>
        var chartData = []; 

        $(document).ready(function() {
          <% 
          	out.flush(); 
        	generateGoogleDataTable(p_deptDataNode.getParent(), "chartData", 0, out, p_currentPage, p_resource, p_log);
        	//wherer p_deptDataNode.getParent().getPath() is department node like /content/data/organizations/140 for social development
        	//this is for displaying org chart using Google visualization dataTable
        	//https://developers.google.com/chart/interactive/docs/gallery/orgchart#example
          %>

            $('#viewToggle').click(function() {
              $.cookie("tab", null);
              if($("#listView").is(':visible')) {
                drawChart('<%=p_deptDataNode.getParent().getName()%>');
              }
              $("#listView").toggle();
              $("#chartView").toggle();
              if( $('#viewToggle').html() == $('#togglestructText').val() ){
                $("#viewToggle").html($('#togglechartText').val());
              }else{ 
                $.cookie("tab", "structure chart", { expires: 1 });
                $("#viewToggle").html($('#togglestructText').val());
              }
            });     
           // commented out by Connie - Feb 2013 - see CR423   
          //if($.cookie("tab")=="structure chart") {
              //$('#viewToggle').click();
          //} 

                  
        });


        function drawChart(orgId) {
          var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
          chart.draw(chartData["id" + orgId], {allowHtml:true, size:'small'});
          $('.chartExpander').click(function() { 
              drawChart($(this).attr("id").replace("chartExpander","") ); 
          });

        }
      </script>
      <div id='chart_div'></div>
      </div>
      <%        
      out.write("</div>");
    } //if (p_children.size() > 0 && p_deptDataNode != null)
  } catch (Exception ex) {
   out.write("Unable to display structure for this department");
   log.error("DepartmentInfo component unable to render structure tab.", ex);


  }
%>