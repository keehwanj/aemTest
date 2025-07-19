<%@include file="/libs/wcm/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.util.GregorianCalendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Calendar"%>
<%@page import="com.t4g.cnb.enums.Nodes"%>
<%@page import="com.t4g.cnb.enums.CustomNodes"%>
<%@page import="java.text.NumberFormat"%>
<%@ page import="com.day.cq.wcm.api.components.Component"%>

<%
String month = "";
String year = "";
String day=currentPage.getName();
String item=currentPage.getName();

  try {
    // Get news item date corresponding to path of the page
    try{
      day = currentPage.getName().split("_")[0];
      item = currentPage.getName().split("_")[1];
      //item=item.toUpperCase();
      item="";
    } catch (Exception ex) {
      //ignore them
    }
    month = currentPage.getParent(1).getName();
    year = currentPage.getParent(2).getName();
  } catch(Exception ex) {
  
  }
  
  if(!Utils.isNotEmpty(properties.get("onTime",""))) {
    currentNode.setProperty("onTime",Calendar.getInstance());
    currentNode.save();
  }
//Creating new property for French sorting!!
  //if(!Utils.isNotEmpty(properties.get("fr_title_strip",""))) {
    String fr_title_strip=Utils.toUpperCaseSansAccent(properties.get("fr_title",""));
    currentNode.setProperty("fr_title_strip",fr_title_strip);
    currentNode.save();
  //}


%>
<%
double lengthstudy_from=properties.get("lengthstudy_from",0.0);
double lengthstudy_to=properties.get("lengthstudy_to",0.0);

double salary_from=properties.get("salary_from",0.0);
double salary_to=properties.get("salary_to",0.0);

NumberFormat numberFormatter;
NumberFormat nf = NumberFormat.getCurrencyInstance();
nf.setMaximumFractionDigits(0);
%>

    <div id="container"   class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">
                    <div class="healthcareers_page">
                    <br />
                    <h1><%=item.toUpperCase()%> for <%=year%>/<%=month%></h1>
                </div>
                <br /><br />
                Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these values.
                <br /><br />

                <table class="table table-bordered table-hover">

                    <tr><th colspan="2"><b>General Properties</b></th></tr>
                    <tr><td width="30%">Type of Health Careers</td><td width="70%"><%=properties.get("type","&nbsp;")%></td></tr>
                    <tr><td>Length of Study</td><td><%=lengthstudy_from%>
                    <%if (lengthstudy_from!=lengthstudy_to) { 
                        if(lengthstudy_to!=0.0){%>
                        -<%=lengthstudy_to%>
                        <%} 
                    }%>
                     years / ans
                    </td></tr>
                    <tr><td>Salary</td><td><%=nf.format(salary_from)%>
                    <%if (salary_from!=salary_to){
                        if(salary_to!=0) { %>
                        - <%=nf.format(salary_to)%>
                        <%} 
                     }%>
                    </td></tr>

                    <tr><th colspan="2"><b>English Properties</b></th></tr>
                    <tr><td>Title</td><td><%=properties.get("en_title","&nbsp;")%></td></tr>
                    <tr><td>Description</td><td><%=properties.get("en_description","&nbsp;")%></td></tr>
                    <tr><td>An Exciting Field of Work</td><td><%=properties.get("en_exciting_field","&nbsp;")%></td></tr>
                    <tr><td>Personal Characteristics / Skills</td><td><%=properties.get("en_personal_characteristics","&nbsp;")%></td></tr>
                    <tr><td>Education and Training</td><td><%=properties.get("en_education_training","&nbsp;")%></td></tr>                                        

                    <tr><td>Education program offered in New Brunswick</td><td><%=properties.get("en_education_program","&nbsp;")%></td></tr>                                        
                    <tr><td>Licence and certification</td><td><%=properties.get("en_licence_certification","&nbsp;")%></td></tr>                                        
                    <tr><td>Helpful High School Courses</td><td><%=properties.get("en_high_school_courses","&nbsp;")%></td></tr>                                        
                    <tr><td>Employment and Common Working Conditions</td><td><%=properties.get("en_employment","&nbsp;")%></td></tr>                                        
                    <tr><td>Employment Prospects</td><td><%=properties.get("en_prospects","&nbsp;")%></td></tr>                                        
                    <tr><td>Good Text</td><td><%=properties.get("en_good_text","&nbsp;")%></td></tr>   

                    <tr><th colspan="2"><b>French Properties</b></th></tr>
                    <tr><td>Title</td><td><%=properties.get("fr_title","&nbsp;")%></td></tr>
                    <tr><td>Description</td><td><%=properties.get("fr_description","&nbsp;")%></td></tr>
                    <tr><td>An Exciting Field of Work</td><td><%=properties.get("fr_exciting_field","&nbsp;")%></td></tr>
                    <tr><td>Personal Characteristics / Skills</td><td><%=properties.get("fr_personal_characteristics","&nbsp;")%></td></tr>
                    <tr><td>Education and Training</td><td><%=properties.get("fr_education_training","&nbsp;")%></td></tr>                                        

                    <tr><td>Education program offered in New Brunswick</td><td><%=properties.get("fr_education_program","&nbsp;")%></td></tr>                                        
                    <tr><td>Licence and certification</td><td><%=properties.get("fr_licence_certification","&nbsp;")%></td></tr>                                        
                    <tr><td>Helpful High School Courses</td><td><%=properties.get("fr_high_school_courses","&nbsp;")%></td></tr>                                        
                    <tr><td>Employment and Common Working Conditions</td><td><%=properties.get("fr_employment","&nbsp;")%></td></tr>                                        
                    <tr><td>Employment Prospects</td><td><%=properties.get("fr_prospects","&nbsp;")%></td></tr>                                        
                    <tr><td>Good Text</td><td><%=properties.get("fr_good_text","&nbsp;")%></td></tr>                                        
                    
                </table>
            </div>
        </div>
    </div>
</div>