<%@include file="/libs/wcm/global.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="com.day.cq.wcm.foundation.Search"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.ListItem"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="java.text.NumberFormat"%>
<%
  // Get language and content bundle for that language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
    }
locale = new Locale(lang);
%>
<script src="/etc/designs/gnb/js/date_<%=lang%>.js" type="text/javascript"></script>
<%
  //Account for localized images
String localizedImagePath = "/etc/designs/gnb/images/";
if (lang == "fr") {
    localizedImagePath += "fr/";
    }
%>
<cq:setContentBundle language="<%=lang%>" />

<%
//setting header text for English/French
String header_1 = properties.get("header_career_title", "");
if(header_1.equalsIgnoreCase("")){
    header_1=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "careerTitleText"));
} 

String header_2 = properties.get("header_study_length", "");
if(header_2.equalsIgnoreCase("")){
    header_2=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "studyLengthText"));
} 

String header_3 = properties.get("header_salary", "");
if(header_3.equalsIgnoreCase("")){
    header_3=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "salaryText"));
} 

String header_4 = properties.get("year", "");
if(header_4.equalsIgnoreCase("")){
    header_4=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "yearText"));
} 

//setting the default rederering pages 
String ps_renderer  = properties.get("ps_renderer", "");
String nr_renderer  = properties.get("nr_renderer", "");
String lmi_renderer = properties.get("lmi_renderer", "");
String ah_renderer  = properties.get("ah_renderer", "");
String renderer="";



final Session session = resource.getResourceResolver().adaptTo(Session.class);
final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);

Map<String, String> map = new HashMap<String, String>();
SearchResult result = null;

/*
  //double lengthstudy_from=props.get("lengthstudy_from",0.0);
String get_salary_from = Utils.nullReplace(slingRequest.getParameter("salary_from"));
int int_salary_from=0;
if(Utils.isNotEmpty(get_salary_from)){
    int_salary_from = Integer.parseInt(get_salary_from);
    }
  //double get_salary_from1 = Double.parseDouble(get_salary_from);
String get_salary_to = Utils.nullReplace(slingRequest.getParameter("salary_to")); 
int int_salary_to=0;
if(Utils.isNotEmpty(get_salary_to)){
    int_salary_to = Integer.parseInt(get_salary_to);
    }
*/

//double lengthstudy_from=props.get("lengthstudy_from",0.0);
String get_year_from = Utils.nullReplace(slingRequest.getParameter("year_from"));
int int_year_from=0;
double double_year_from=0.0;
if(Utils.isNotEmpty(get_year_from)){
    int_year_from = Integer.parseInt(get_year_from);
    double_year_from = Double.parseDouble(get_year_from);    
    }
  //double get_salary_from1 = Double.parseDouble(get_salary_from);
String get_year_to = Utils.nullReplace(slingRequest.getParameter("year_to")); 
int int_year_to=0;
double double_year_to=0.0;
if(Utils.isNotEmpty(get_year_to)){
    int_year_to = Integer.parseInt(get_year_to);
    double_year_to = Double.parseDouble(get_year_to);
    }

String newsPath = properties.get("newsPath", "");
NumberFormat numberFormatter;
NumberFormat nf = NumberFormat.getCurrencyInstance();
nf.setMaximumFractionDigits(0);

String sortBy = "@en_title";
if (lang == "fr") {
    sortBy = "@fr_title";
    }

String data_path  = properties.get("data_path", "");
if(data_path.equalsIgnoreCase("")){
    data_path="/content/gnb/doh-data/heath-careers";
} 


if ((Utils.isNotEmpty(get_year_from) && Utils.isNotEmpty(get_year_to))) {
  map.put("path", data_path);   
  map.put("property", "cq:template");
  map.put("property.value", "/apps/gnb/templates/healthcareers");    
  map.put("nodename", "jcr:content");
  map.put("orderby", sortBy);
  map.put("orderby.sort", "asc");
  Query query = builder.createQuery(PredicateGroup.create(map), session);

  String hits = "100";
  query.setHitsPerPage(Integer.parseInt(hits));
    
  result = query.getResult();

  }
pageContext.setAttribute("result", result);
%>

<!--START of row-->
<div class="row">
	<div class="col-sm-7">
		<div id="hc_year_search_box">
  			<div class="panel panel-default">
    			<div class="panel-heading"><i class="glyphicon glyphicon-search"></i> <fmt:message key="hc_searchInputHeadingText_year"/></div>
  			</div>    
			<form class="form-horizontal"  action="${currentPage.path}.html" id="searchForm" name="search_form">
				<!--START from/to searchinput-->
				<div class="input-group  input-group-sm name">
					<!--START of from select-->   
					<select  name="year_from" id="year_from" class="form-control" required >
					<option value=""><fmt:message key="hcYears" /></option>
        				<%for(int i=1;i<=15;i=i+1){%>
                			<%if(i== int_year_from){%>
                    			<option value="<%=i%>" selected="selected"><%=i%></option>               
                			<%}
                			else{%>
                    			<option value="<%=i%>"><%=i%></option>            
                			<%}%>
        				<%}%>
					</select>   

					<!--END of from select-->  
    				<span class="input-group-addon"><fmt:message key="searchToText"/></span>
					<!--START of to select-->    
                    <select  name="year_to" id="year_to" class="form-control" required>
  						<option value=""><fmt:message key="hcYears" /></option>
        				<%for(int i=1;i<=15;i=i+1){%>
                			<%if(i== int_year_to){%>
                    			<option value="<%=i%>" selected="selected"><%=i%></option>               
                			<%}
                			else{%>
                    			<option value="<%=i%>"><%=i%></option>            
                			<%}%>
        				<%}%>
  					</select>
					<!--END of to select-->              
				</div>
				<!--END from/to searchinput-->    
        		<!--START of submit button-->    
    			<button type="submit" class="btn btn-default btn-sm center-block newsButton"><span class="glyphicon glyphicon-search"></span> <fmt:message key="searchButtonText"/></button>    
        		<!--END of submit button-->  
			</form>
		</div>        
    </div>
    <div class="col-sm-5 hidden-xs">
  		<div id="sidebar">
    		<cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
		</div>
    </div>
</div>
<!--END of row-->

<div class="clearfloat"></div>
<c:choose>
    <c:when test="${empty result}">
    </c:when>
    <c:when test="${empty result.hits}">
        <fmt:message key="noResultsText" />
    </c:when>
    <c:otherwise>
<%  out.write("<div class=\"table-responsive\">");
    out.write("<table width='100%' class=\"table table-striped table-bordered table-hover\"><tr>");
    out.write("<th width='53%'>");
    out.write(header_1);
    out.write("</th>");
    out.write("<th width='22%'>");
    out.write(header_2);
    out.write("</th>");
    out.write("<th width='25%'>");
    out.write(header_3);
    out.write("</th></tr>");
    //out.write("</table>");
%>

<%
       for (Hit hit : result.getHits()) 
       {
           String path=hit.getPath();
           String[] selectors = path.split("/");
           String href="";


           //out.write(href);
           //out.write("<br/>");
           
           ValueMap props=hit.getProperties();
           String type = (String) props.get("type");
           //out.write(type);
           //out.write("<br/>");           
           String title = (String) props.get(lang + "_title");
           //out.write(selectors.length);
           if(selectors.length>0){
               String selector = String.format("%s.%s.%s.html", selectors[4], selectors[5], selectors[6]);
               //setting the default rederering pages 
               if(type!=null && type.equalsIgnoreCase("pysician")){
                   if(ps_renderer.equalsIgnoreCase("")){
                       renderer = currentPage.getPath()+"/ps_renderer";
                       }
                   else{
                       renderer = ps_renderer;
                       }
                   }

               if(type!=null && type.equalsIgnoreCase("nursing")){
                   if(nr_renderer.equalsIgnoreCase("")){
                       renderer = currentPage.getPath()+"/nr_renderer";
                       }
                   else{
                       renderer = nr_renderer;
                       }
                   }

               if(type!=null && type.equalsIgnoreCase("laboratory_medical_imaging")){
                   if(lmi_renderer.equalsIgnoreCase("")){
                       renderer = currentPage.getPath()+"/lmi_renderer";
                       }
                   else{
                       renderer = lmi_renderer;
                       }
                   }

               if(type!=null && type.equalsIgnoreCase("allied_health")){
                   if(ah_renderer.equalsIgnoreCase("")){
                       renderer = currentPage.getPath()+"/ah_renderer";
                       }
                   else{
                       renderer = ah_renderer;
                       }
                   }
               
               href = String.format("%s.%s", renderer, selector);
               }           
           
           double lengthstudy_from=props.get("lengthstudy_from",0.0);
           double lengthstudy_to=props.get("lengthstudy_to",0.0);
   
           int salary_from=props.get("salary_from",0);
           int salary_to=props.get("salary_to",0);
           
           
               if((lengthstudy_from>=double_year_from)&&(lengthstudy_to<=double_year_to)) 
               {
                  //table body part
                   out.write("<tr><td>");
                   out.write(String.format("<a href=\"%s\">%s</a>",href,title));              
                   out.write("</td><td>");
       
                   out.print(lengthstudy_from);

                    if(lengthstudy_from!=lengthstudy_to){
                        out.write(" - ");            
                        out.print(lengthstudy_to);//display "double"
                        }    

                   out.write(" "+header_4);          
                   out.write("</td><td>");
       
                   out.print(nf.format(salary_from));//display "double"
                   out.write(" - ");            
                   out.print(nf.format(salary_to));//display "double"
                   out.write("</td></tr>");
               
               }//end of if          
           



       }//end of FOR loop
       out.write("</table>"); //end of table
	out.write("</div>");
%>
    </c:otherwise>
</c:choose>
<div class="clearfloats"></div>