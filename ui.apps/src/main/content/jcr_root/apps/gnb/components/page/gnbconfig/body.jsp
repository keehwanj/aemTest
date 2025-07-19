<%@include file="/libs/wcm/global.jsp" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%@page import="java.util.Date"%>
<%@page import="java.util.Locale"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="java.util.Map"%>
<%@page import="org.apache.commons.lang.StringEscapeUtils"%>
<body id="configuration">
    <div id="container"   class="container">
        <div id="main_content_wrapper">
            <div id="mainContent">
                <div class="pageHeader">

                    <h1>Configuration</h1>
                </div>
				<p>
                - Click the "Custom Page Properties..." button in the "Page" tab of the Sidekick to edit these balues.
                <br />
                - Number in metadata and tag after orgnanization name like New Brunswick Liquor Corporation (1) is from /content/data/organizations/.
                <br />
                - Description under http://gnbcqauth1va:4502/tagging should be filled with number from DEPTID in each organization node(/content/data/organizations).
                </p>

                <table  class="table table-bordered table-hover table-condensed">
                    <tr><th colspan="2" class="bg-primary"><b>General Properties</b></th></tr>
                    <tr><td>Live Webcast (original)</td><td><%=properties.get("liveWebcastOriginal","&nbsp;")%></td></tr>
                    <tr><td>Service Data</td><td><%=properties.get("serviceDataPage","&nbsp;")%></td></tr>
                    <tr><td>Contact Data</td><td><%=properties.get("contactDataPage","&nbsp;")%></td></tr>
                    <tr><td>Organisation Data</td><td><%=properties.get("organisationDataPage","&nbsp;")%></td></tr>
                    <tr><td>Multimedia Data</td><td><%=properties.get("mmDataPage","&nbsp;")%></td></tr>
                    <tr><td>News Article Data</td><td><%=properties.get("newsArticleDataPage","&nbsp;")%></td></tr>
                    <tr><td>Public Alert Data</td><td><%=properties.get("publicAlertDataPage","&nbsp;")%></td></tr>
                    <tr><td>Media Advisory Data</td><td><%=properties.get("mediaAdvisoryDataPage","&nbsp;")%></td></tr>                    
                    <%
                    Locale[] locales = {new Locale("en"), new Locale("fr")};
                    for(Locale locale: locales) {
                    %>
                    <tr><th colspan="2" class="bg-primary"><b><%=locale.getDisplayLanguage() %> Properties</b></th></tr>
                    <tr><td>Departments Page</td><td><%=properties.get("departmentsPage_" +  locale.getLanguage() ,"&nbsp;")%></td></tr>                    
                    <tr><td>Organization Tag Data</td><td><%=properties.get("organizationTagData_" + locale.getLanguage(),"&nbsp;")%></td></tr>                    
                    <tr><td>Live Webcast (interpreted)</td><td><%=properties.get("liveWebcastInterpreted_" +  locale.getLanguage(),"&nbsp;")%></td></tr>                    
                    <tr><td>Generic Renderer Base Page</td><td><%=properties.get("genericRendererBasePage_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Service Renderer</td><td><%=StringEscapeUtils.escapeHtml(properties.get("serviceRendererPage_" +  locale.getLanguage(),"&nbsp;"))%></td></tr>
                    <tr><td>Contact Renderer</td><td><%=StringEscapeUtils.escapeHtml(properties.get("contactRendererPage_" +  locale.getLanguage(),"&nbsp;"))%></td></tr>
                    <tr><td>Organisation Renderer</td><td><%=StringEscapeUtils.escapeHtml(properties.get("organisationRendererPage_" +  locale.getLanguage(),"&nbsp;"))%></td></tr>
                    <tr><td>Multimedia Renderer</td><td><%=StringEscapeUtils.escapeHtml(properties.get("mmRendererPage_" +  locale.getLanguage(),"&nbsp;"))%></td></tr>
                    <tr><td>News Article Renderer</td><td><%=StringEscapeUtils.escapeHtml(properties.get("newsArticleRendererPage_" +  locale.getLanguage(),"&nbsp;"))%></td></tr>
                    <tr><td>Public Alert Renderer</td><td><%=StringEscapeUtils.escapeHtml(properties.get("publicAlertRendererPage_" +  locale.getLanguage(),"&nbsp;"))%></td></tr>
                    <tr><td>Media Advisory Renderer</td><td><%=StringEscapeUtils.escapeHtml(properties.get("mediaAdvisoryRendererPage_" +  locale.getLanguage(),"&nbsp;"))%></td></tr>
                    <!--STAT of department/agency-->
                    <tr><td>Aboriginal Affairs Secretariat (202233)</td><td><%=properties.get("org_202233_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Agriculture and Aquaculture (137)</td><td><%=properties.get("org_137_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Coll&egrave;ge communautaire du Nouveau-Brunswick (201112)</td><td><%=properties.get("org_201112_" +  locale.getLanguage(),"&nbsp;")%></td></tr> 
	                <tr><td>Council of Atlantic Premiers' Secretariat (152)</td><td><%=properties.get("org_152_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Economic and Social Inclusion Corporation (201148)</td><td><%=properties.get("org_201148_" +  locale.getLanguage(),"&nbsp;")%></td></tr>

                    <tr><td>Economic Development and Small Business (95650)</td><td><%=properties.get("org_95650_" +  locale.getLanguage(),"&nbsp;")%></td></tr>

                    <tr><td>Education and Early Childhood Development (151)</td><td><%=properties.get("org_151_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Education and New Economy Fund (202447)</td><td><%=properties.get("org_202447_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Elections New Brunswick (164)</td><td><%=properties.get("org_164_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Environment and Local Government(139)</td><td><%=properties.get("org_139_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Energy and Utilities Board (158)</td><td><%=properties.get("org_158_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Executive Council Office (153)</td><td><%=properties.get("org_153_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Federal Government (4004)</td><td><%=properties.get("org_4004_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Financial and Consumer Services Commission (11923)</td><td><%=properties.get("org_11923_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <!--<tr><td>Finance (147)</td><td><%=properties.get("org_147_" +  locale.getLanguage(),"&nbsp;")%></td></tr>-->
                    <tr><td>Finance and Treasury Board (202937)</td><td><%=properties.get("org_202937_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Francophonie (4450)</td><td><%=properties.get("org_4450_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Health  (141)</td><td><%=properties.get("org_141_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Innovation (202449)</td><td><%=properties.get("org_202449_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Labour and Employment Board (176)</td><td><%=properties.get("org_176_" +  locale.getLanguage(),"&nbsp;")%></td></tr>  
                    <tr><td>Legislative Assembly (201936)</td><td><%=properties.get("org_201936_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Literacy (202455)</td><td><%=properties.get("org_202455_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Maritime Provinces Higher Education Commission (201370)</td><td><%=properties.get("org_201370_" +  locale.getLanguage(),"&nbsp;")%></td></tr> 
                    <tr><td>Military Affairs (202453)</td><td><%=properties.get("org_202453_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Natural Resources and Energy Development (604)</td><td><%=properties.get("org_604_" +  locale.getLanguage(),"&nbsp;")%></td></tr> 

                    <tr><td>NB Power (161)</td><td><%=properties.get("org_161_" +  locale.getLanguage(),"&nbsp;")%></td></tr> 
                    <tr><td>NB Research and Productivity Council (162)</td><td><%=properties.get("org_162_" +  locale.getLanguage(),"&nbsp;")%></td></tr> 
                    <tr><td>New Brunswick Community College (201113)</td><td><%=properties.get("org_201113_" +  locale.getLanguage(),"&nbsp;")%></td></tr> 
					<tr><td>New Brunswick Investment Management Corporation (159)</td><td><%=properties.get("org_159_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>New Brunswick Legal Aid Services Commission (201556)</td><td><%=properties.get("org_201556_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>New Brunswick Liquor Corporation (1)</td><td><%=properties.get("org_1_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>New Brunswick Police Commission (160)</td><td><%=properties.get("org_160_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>New Brunswick Women's Council (201925)</td><td><%=properties.get("org_201925_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Office of the Access to Information and Privacy Commissioner (201145)</td><td><%=properties.get("org_201145_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Office of the Attorney General (201794)</td><td><%=properties.get("org_201794_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Office of the Child and Youth Advocate (201262)</td><td><%=properties.get("org_201262_" +  locale.getLanguage(),"&nbsp;")%></td></tr> 
                    <tr><td>Office of the Commissioner of Official Languages for NB (9263)</td><td><%=properties.get("org_9263_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Office of the Consumer Advocate for Insurance (13863)</td><td><%=properties.get("org_13863_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Office of the Lieutenant-Governor (166)</td><td><%=properties.get("org_166_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Office of the Ombudsman (167)</td><td><%=properties.get("org_167_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Office of the Premier (168)</td><td><%=properties.get("org_168_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Opportunities NB (201264)</td><td><%=properties.get("org_201264_" +  locale.getLanguage(),"&nbsp;")%></td></tr> 
                    <tr><td>Organizations, Associations (Non Governmental) (3859)</td><td><%=properties.get("org_3859_" +  locale.getLanguage(),"&nbsp;")%></td></tr> 
                    <tr><td>Post-Secondary Education, Training and Labour (145)</td><td><%=properties.get("org_145_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
					<tr><td>Premier's Council on the Status of Disabled Persons (170)</td><td><%=properties.get("org_170_" +  locale.getLanguage(),"&nbsp;")%></td></tr>    
					<tr><td>Regional Development Corporation (172)</td><td><%=properties.get("org_172_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Right to Information and Protection of Personal Information Task Force (19383)</td><td><%=properties.get("org_19383" +  locale.getLanguage(),"&nbsp;")%></td></tr> 
                    <tr><td>Rural Affairs (201479)</td><td><%=properties.get("org_201479_" +  locale.getLanguage(),"&nbsp;")%></td></tr>  
                    <tr><td>Service New Brunswick (173)</td><td><%=properties.get("org_173_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Social Development (140)</td><td><%=properties.get("org_140_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <!--<tr><td>Treasury Board (201505)</td><td><%=properties.get("org_201505_" +  locale.getLanguage(),"&nbsp;")%></td></tr>-->
                    <tr><td>Vestcor Pension Services Corporation (202525)</td><td><%=properties.get("org_202525_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>Workers’ Compensation Appeals Tribunal (202098)</td><td><%=properties.get("org_202098_" +  locale.getLanguage(),"&nbsp;")%></td></tr>
                    <tr><td>WorkSafeNB (174)</td><td><%=properties.get("org_174_" +  locale.getLanguage(),"&nbsp;")%></td></tr>  
                    <tr class="info"><td>SNB for department name showing</td><td><%=properties.get("org_snb_" +  locale.getLanguage(),"&nbsp;")%></td></tr>  
                    <tr class="info"><td>MyID for department name showing</td><td><%=properties.get("org_myid_" +  locale.getLanguage(),"&nbsp;")%></td></tr>                      
                    <tr class="info"><td>Wel Bien(Immigration) for department name showing</td><td><%=properties.get("wel_bien_" +  locale.getLanguage(),"&nbsp;")%></td></tr>                      

                    <!--<tr><td>Energy and Mines (900001)</td><td><%=properties.get("org_900001_" +  locale.getLanguage(),"&nbsp;")%></td></tr> -->
					<!--END of department/agency-->
                    <%} %>
                </table>
            </div>
        </div>
    </div>
</body>