<%@include file="/libs/foundation/global.jsp" %>
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

<%
//// Get language and content bundle for that language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
    lang = "en";
    }
locale = new Locale(lang);
%>

<cq:setContentBundle language="<%=lang%>" />
<script src="/etc/designs/gnb/js/date_<%=lang%>.js" type="text/javascript"></script>

<%
String s=currentStyle.get("searchResultsPath", "");

////Account for localized images
String localizedImagePath = "/etc/designs/gnb/images/";
if (lang == "fr") {
    localizedImagePath += "fr/";
    }

////data type setting
String searchHeadingText = properties.get("title_Text", "");
if(searchHeadingText.equalsIgnoreCase("")){
    searchHeadingText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "searchInputHeadingText"));
} 


String searchWarningText = properties.get("searchWarning_Text", "");
if(searchWarningText.equalsIgnoreCase("")){
    searchWarningText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "searchInputWarningText"));
} 

String betweenText = properties.get("between_Text", "");
if(betweenText.equalsIgnoreCase("")){
    betweenText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "betweenText"));
} 


//selection Locale
String selectText = properties.get("select_Text", "");
if(selectText.equalsIgnoreCase("")){
    selectText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "selectText"));
} 


////setting header text for English/French
String company_name_Text = properties.get("company_name_Text", "");
if(company_name_Text.equalsIgnoreCase("")){
    company_name_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "company_name_Text"));
} 

String operator_Text = properties.get("operator_Text", "");
if(operator_Text.equalsIgnoreCase("")){
    operator_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "operator_Text"));
} 

String city_Text = properties.get("city_Text", "");
if(city_Text.equalsIgnoreCase("")){
    city_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "city_Text"));
} 

String phone_Text = properties.get("phone_Text", "");
if(phone_Text.equalsIgnoreCase("")){
    phone_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "phone_Text"));
} 

String region_Text = properties.get("region_Text", "");
if(region_Text.equalsIgnoreCase("")){
    region_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "region_Text"));
} 

String type_Text = properties.get("type_Text", "");
if(type_Text.equalsIgnoreCase("")){
    type_Text=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "type_Text"));
} 

String renderer_page = properties.get("renderer_page", "");

final String start = Utils.nullReplace(slingRequest.getParameter("start"));


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




final Session session = resource.getResourceResolver().adaptTo(Session.class);
final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);

Map<String, String> map = new HashMap<String, String>();
SearchResult result = null;

//receiving data
String region1 = Utils.nullReplace(slingRequest.getParameter("region"));
String non_convention_type = Utils.nullReplace(slingRequest.getParameter("type")); 

//setting data path
String data_path  = properties.get("data_path", "");
if(data_path.equalsIgnoreCase("")){

    data_path="/content/gnb/doh-data/data";
} 

if(region1.equalsIgnoreCase("central")){

    data_path="/content/gnb/doh-data/data/central";
} 

if(region1.equalsIgnoreCase("east")){

    data_path="/content/gnb/doh-data/data/east";
} 

if(region1.equalsIgnoreCase("north")){

    data_path="/content/gnb/doh-data/data/north";
} 

if(region1.equalsIgnoreCase("south")){

    data_path="/content/gnb/doh-data/data/south";
} 



map.put("type", "cq:Page");
map.put("path", data_path);

map.put("property", "jcr:content/en_non_conventional");  
if(non_convention_type.equals("")){
    map.put("group.p.or", "true");  
    map.put("property.1_value", "Contour");
    map.put("property.2_value", "SystemA");
    map.put("property.3_value", "SystemB");
    map.put("property.4_value", "Etc.");

    //map.put("property.operation", "exists");    
}
else{
    map.put("property.value", non_convention_type);  
}
  
map.put("orderby", "@jcr:content/company_name");    
map.put("orderby.index", "true");      
map.put("orderby.sort", "asc");      

Query query = builder.createQuery(PredicateGroup.create(map), session);

String hits = "25";
query.setHitsPerPage(Integer.parseInt(hits));

if (Utils.isNotEmpty(start)){
  query.setStart(Long.valueOf(start));
}

if (Utils.isNotEmpty(hits)) {
  query.setHitsPerPage(Integer.parseInt(hits));
} 
else 
{
  hits = "25";
  query.setHitsPerPage(Integer.parseInt(hits));
}

result = query.getResult();


pageContext.setAttribute("region", region1);
pageContext.setAttribute("type", non_convention_type);
pageContext.setAttribute("result", result);
pageContext.setAttribute("uri", slingRequest.getRequestURL());


%>
<div id="hc_salary_search_box">
<form action="${currentPage.path}.html" id="searchForm" onsubmit="return validate(this);" name="search_form">
  <input type="hidden" name="_charset_" value="utf-8"/>
  <input id="start" name="start" type="hidden" value="${start}" /> 
  <input id="hits" name="hits" type="hidden" value="${hits}" />  

  <div class="title"><img height="15" width="15" class="reset" alt="" src="/etc/designs/gnb/images/icon_search_grey.gif"> 
    <fmt:message key="<%=searchHeadingText%>" />
  </div>

  <div class="name">
    <label><fmt:message key="hcStartDate" /></label>
          <select name="region" id="region">
              <%if (Utils.isNotEmpty(region1))  {%>
                <option value="<%=region1%>"><%=region1%></option>                
              <%}%>
              <option value=""><fmt:message key="<%=selectText%>" /></option>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] region_value = properties.get("region_value", String[].class) ;
                        String[] region_text = properties.get("region_text", String[].class) ;                        
                        if(region_value!=null) 
                            {
                            for(int i=0;i<region_value.length;i++) 
                                {%>
                                  <option value="<%=region_value[i]%>"><%=region_text[i]%></option>                                   
                                <%}
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Region array part is wrong",ex);   
                        }
                    %>

          </select>
          <label><fmt:message key="<%=betweenText%>" /></label>                                                              

          <select name="type" id="type">
              <%if (Utils.isNotEmpty(non_convention_type))  {%>
                <option value="<%=non_convention_type%>"><%=non_convention_type%></option>                
              <%}%>          
              <option value=""><fmt:message key="<%=selectText%>" /></option>
                    <%
                    try
                    {
                        //**IMPORTANT Part - creating array no matter what value is.
                        String[] nonconventional_value = properties.get("nonconventional_value", String[].class) ;
                        String[] nonconventional_text = properties.get("nonconventional_text", String[].class) ;                        
                        if(nonconventional_value!=null) 
                            {
                            for(int i=0;i<nonconventional_value.length;i++) 
                                {%>
                                  <option value="<%=nonconventional_value[i]%>"><%=nonconventional_text[i]%></option>                                   
                                <%}
                            }
                        }
                    catch(Exception ex) 
                    {
                        log.error("Non-Conventional License's array part is wrong",ex);   
                        }
                    %>
          </select>      
  </div>
  <input type="image" class="searchButton" value="<fmt:message key="searchButtonText"/>" alt="<fmt:message key="newsSearchButtonText"/>" src="<%=localizedImagePath%>btn_search.gif" />
</form>
</div>

<div id="sidebar">
    <cq:include path="mainContent_par" resourceType="foundation/components/parsys"/>
</div>

<div class="clearfloat"></div>
<c:choose>
    <c:when test="${empty result}">
    </c:when>
    <c:when test="${empty result.hits}">
        <fmt:message key="noResultsText" />
    </c:when>
    <c:otherwise>
<% 
    out.write("<table><tr>");
    out.write("<th width='28%'>");
    out.write(company_name_Text);//company name
    out.write("</th>");
    out.write("<th width='18%'>");
    out.write(operator_Text); //last name, first name
    out.write("</th>");
    out.write("<th width='17%'>");
    out.write(city_Text); // city name
    out.write("</th>");
    out.write("<th width='11%'>");
    out.write(region_Text);//region
    out.write("</th>");
    out.write("<th width='13%'>");
    out.write(phone_Text);//phone no
    out.write("</th>");
    out.write("<th width='13%'>");
    out.write(type_Text);//type
    out.write("</th></tr>");
    //out.write("</table>");
%>

<%
   for (Hit hit : result.getHits()) {
       String path=hit.getPath();
       ValueMap props=hit.getProperties();
            //ValueMap props = itemPage.getProperties();
       String[] selectors = hit.getPath().split("/");
       String href="";
                

       //First column (Company Name)
       String company_name  = (String) props.get("company_name","");
                
       //Second column (Operator)
       String first_name = (String) props.get("first_name",""); 
       String last_name = (String) props.get("last_name"); 
                
       //Third column (City)
       String city_name = (String) props.get("city_name",""); 

       //Fouth column (Region)
       String region = (String) props.get("region",""); 
       //region text
       if(region.equalsIgnoreCase("Central")){
           region=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "centralText"));
       } 

       if(region.equalsIgnoreCase("East")){
           region=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "eastText"));
       } 

       if(region.equalsIgnoreCase("North")){
           region=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "northText"));
       } 

       if(region.equalsIgnoreCase("South")){
           region=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "southText"));
       } 

       //Fifth column (Phone Number)
       String phone_no = (String) props.get("phone_no",""); 
       String phone_no_2 = (String) props.get("phone_no_2","");   
                                                             
       //Sixth column (Type)
       String[] non_conventional = (String[]) props.get(lang + "_non_conventional", String[].class) ;                
                                                                
       //First column (Company Name)
       out.write("<tr><td>");
       if(!(company_name.equalsIgnoreCase(""))){
           out.write(company_name);              
       }
               
       //Second column (Contact)
       out.write("</td>");
       out.write("<td>");
       if(!(last_name.equalsIgnoreCase(""))){
           out.write(last_name);  
           out.write(", ");  
       } 
       if(!(first_name.equalsIgnoreCase(""))){
           out.write(first_name);  
       } 

       //Third column (City)
       out.write("</td>");
       out.write("<td>");                
       if(!(city_name.equalsIgnoreCase(""))){
           out.write(city_name);              
       } 
                
       //Fouth column (Region)
       out.write("</td>");
       out.write("<td>");                
       if(!(region.equalsIgnoreCase(""))){
           out.write(region);              
       }                 

       //Fifth column (Phone)
       out.write("</td>");
       out.write("<td>");                
       if(!(phone_no.equalsIgnoreCase(""))){
           out.write(phone_no);              
       } 
       if(!(phone_no_2.equalsIgnoreCase(""))){
           out.write("<br/>");              
           out.write(phone_no);              
       } 
                
       //Sixth column (Type)                
       out.write("</td>");
       out.write("<td>");                

       try
       {
           //**IMPORTANT Part - creating array no matter what value is.
           if(non_conventional!=null) 
               {
               for(int i=0;i<non_conventional.length;i++) 
                   {
                   out.write(non_conventional[i] + "<br />");
                   }
               }
       }
       catch(Exception ex) 
       {
           log.error("Non-Conventional License's part is wrong",ex);   
       }
       out.write("</td></tr>");
   }

       out.write("</table>"); //end of table
%>

<br/>
          <div class="pagination">
           <c:if test="${fn:length(result.resultPages) > 1}">
            <div class="item"><span class="legend"><fmt:message key="resultPagesText" /></span></div>
            <c:forEach var="page" items="${result.resultPages}">
                <c:choose>
                    <c:when test="${page.currentPage}">
                        <div class="item"><a href="#" class="active">${page.index+ 1}</a></div>
                    </c:when>
                    <c:otherwise>
                        <div class="item"><a href="<c:url value="${uri}">
                            <c:param name="_charset_" value="UTF-8"/>
                            <c:param name="region" value="<%=region1%>"/>
                            <c:param name="type" value="<%=non_convention_type%>"/>
                            <c:param name="start" value="${page.start}"/>
                          </c:url>">
                        ${page.index + 1}</a>
                        </div>
                    </c:otherwise>
                </c:choose>
            </c:forEach>
            <c:if test="${result.nextPage != null}">
                <div class="item"><a href="<c:url value="${uri}">
                       <c:param name="_charset_" value="UTF-8"/>
                       <c:param name="region" value="<%=region1%>"/>
                       <c:param name="type" value="<%=non_convention_type%>"/>
                       <c:param name="start" value="${result.nextPage.start}"/>
                      </c:url>">
                <fmt:message key="nextText" /></a>
                </div>
            </c:if>
            <c:if test="${result.previousPage != null}">
                <div class="item"><a href="<c:url value="${uri}">
                        <c:param name="_charset_" value="UTF-8"/>
                        <c:param name="region" value="<%=region1%>"/>
                        <c:param name="type" value="<%=non_convention_type%>"/>
                        <c:param name="start" value="${result.previousPage.start}"/>
                      </c:url>">
                <fmt:message key="previousText" /></a>
                </div>
            </c:if>
        </c:if>
        </div>




    </c:otherwise>
</c:choose>
<div class="clearfloats"></div>