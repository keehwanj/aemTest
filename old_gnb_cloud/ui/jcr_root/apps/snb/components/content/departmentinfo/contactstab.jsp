<%@page import="java.util.Arrays"%>
<%@page import="org.apache.sling.api.SlingHttpServletRequest"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="org.apache.commons.lang.StringEscapeUtils"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="java.util.List"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="com.day.cq.search.result.ResultPage"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@include file="fragments/init.jsp"%>
<%
 
try {
  //These are setup in the init.jsp
  final Resource p_resource = resource;
  final SlingHttpServletRequest p_slingRequest = slingRequest;
  final Node p_deptDataNode = (Node)request.getAttribute("deptDataNode");
  final Node p_orgDataNode = (Node)request.getAttribute("orgDataNode");
  final String p_contactDataPage = (String)request.getAttribute("contactDataPage");
  final String lang = (String) request.getAttribute("lang");
  final Integer organizationId = (Integer)request.getAttribute("orgId");
  final String parent_org_id = p_orgDataNode.getParent().getName().toString() ; 
  String langSuffix = "FRE";
  if (lang == null || lang.equalsIgnoreCase("en")) {
    langSuffix = "ENG";
  }

  final boolean isDepartment = p_deptDataNode.getPath().equalsIgnoreCase(p_orgDataNode.getPath());
  final Session session = p_resource.getResourceResolver().adaptTo(Session.class);
  final QueryBuilder builder = p_resource.getResourceResolver().adaptTo(QueryBuilder.class);

  SearchResult result = null;

  final String P_ADDRESS1 = "P_ADDRESS" + langSuffix + "1";
  final String P_CITY = "P_CITY" + langSuffix;  
  final String P_PHYSFLOOR = "PHYSFLOORENG";
  final String P_PHYSROOM = "PHYSROOMENG";
  final String P_PROVINCE = "P_PROVINCE" + langSuffix;
  final String P_COUNTRY = "P_COUNTRY";
  final String P_POSTALCODE = "P_POSTALCODE";
  final String P_LONGITUDE = "P_LONGITUDE";
  final String P_LATITUDE = "P_LATITUDE";
  
  final String M_ADDRESS1 = "M_ADDRESS" + langSuffix + "1";
  final String M_ADDRESS2 = "M_ADDRESS" + langSuffix + "2";
  final String M_ADDRESS3 = "M_ADDRESS" + langSuffix + "3";  
  final String M_MAILFLOOR = "MAILFLOORENG";
  final String M_MAILROOM = "MAILROOMENG";  
  final String M_CITY = "M_CITY" + langSuffix;
  final String M_PROVINCE = "M_PROVINCE" + langSuffix;
  final String M_COUNTRY = "M_COUNTRY";
  final String M_POSTALCODE = "M_POSTALCODE";
  final String P_BLDG_NAME = "P_BLDG_NAME_" + langSuffix;
  final String M_BLDG_NAME = "M_BLDG_NAME_" + langSuffix;
  final String DEPTID = "DEPTID";
  final String GENAREACODE = "GENAREACODE";
  final String GENPHONE = "GENPHONE";
  final String GENPHONESCHEDULE = "GENPHONESCHEDULE" + langSuffix;
  final String TOLLFREEPHONE = "TOLLFREEPHONE";
  final String TOLLFREESCHEDULE = "TOLLFREESCHEDULE" + langSuffix;
  final String RECAREACODE = "RECAREACODE";
  final String RECPHONE = "RECPHONE";
  final String RECPHONESCHEDULE = "RECPHONESCHEDULE" + langSuffix;
  final String FAXAREACODE = "FAXAREACODE";
  final String FAXPHONE = "FAX";
  final String FREQCALLEDNUM = "FREQCALLEDNUM" + langSuffix;
  final String EMAIL = "EMAIL" + langSuffix;
  final String ORGURLINTERNET = "ORGURLINTERNET" + langSuffix;
  final String ORGURLALTEMAIL = "ORGURLALTEMAIL" + langSuffix;
  out.write("<div id=\"contacts\">");

  StringBuilder p_address = new StringBuilder();
  if (p_orgDataNode.hasProperty(P_ADDRESS1)) {
    p_address.append(p_orgDataNode.getProperty(P_ADDRESS1).getString());
    p_address.append("\n");
  }
  if (p_orgDataNode.hasProperty(P_PHYSROOM) && !"".equals(p_orgDataNode.getProperty(P_PHYSROOM).getString()) ) {    
    p_address.append(LocaleSupport.getLocalizedMessage(pageContext, "room"));
    p_address.append(": ");
    p_address.append(p_orgDataNode.getProperty(P_PHYSROOM).getString());    
    if (p_orgDataNode.hasProperty(P_PHYSFLOOR)) {
      p_address.append("  ");
      p_address.append(LocaleSupport.getLocalizedMessage(pageContext, "floor"));
      p_address.append(": ");
      p_address.append(p_orgDataNode.getProperty(P_PHYSFLOOR).getString());           
    }
    p_address.append("\n");
  }else if (p_orgDataNode.hasProperty(P_PHYSFLOOR) && !"".equals(p_orgDataNode.getProperty(P_PHYSFLOOR).getString()) ) {
    p_address.append(LocaleSupport.getLocalizedMessage(pageContext, "floor"));
    p_address.append(": ");
    p_address.append(p_orgDataNode.getProperty(P_PHYSFLOOR).getString());
    p_address.append("\n");
  }  

  if (p_orgDataNode.hasProperty(P_CITY)) {
    p_address.append(p_orgDataNode.getProperty(P_CITY).getString());
    p_address.append(", ");
  }
  if (p_orgDataNode.hasProperty(P_PROVINCE)) {
    p_address.append(p_orgDataNode.getProperty(P_PROVINCE).getString());
    p_address.append("\n");
  }
  if (p_orgDataNode.hasProperty(P_POSTALCODE)) {
    p_address.append(p_orgDataNode.getProperty(P_POSTALCODE).getString());
    p_address.append("\n");
  }
  if (p_orgDataNode.hasProperty(P_COUNTRY)) {
    p_address.append(p_orgDataNode.getProperty(P_COUNTRY).getString());
  }

  StringBuilder m_address = new StringBuilder();
  if(p_orgDataNode.hasProperty("M_BLDG_ID") && !"999999999".equals(p_orgDataNode.getProperty("M_BLDG_ID").getString()) && p_orgDataNode.hasProperty(M_BLDG_NAME)){
    m_address.append(p_orgDataNode.getProperty(M_BLDG_NAME).getString());
    m_address.append("\n");
  }
  
  if (p_orgDataNode.hasProperty(M_MAILROOM) && !"".equals(p_orgDataNode.getProperty(M_MAILROOM).getString()) ) {    
    m_address.append(LocaleSupport.getLocalizedMessage(pageContext, "room"));
    m_address.append(": ");
    m_address.append(p_orgDataNode.getProperty(M_MAILROOM).getString());    
    if (p_orgDataNode.hasProperty(M_MAILFLOOR)) {
      m_address.append("  ");
      m_address.append(LocaleSupport.getLocalizedMessage(pageContext, "floor"));
      m_address.append(": ");
      m_address.append(p_orgDataNode.getProperty(M_MAILFLOOR).getString());           
    }
      m_address.append("\n");
  }else if (p_orgDataNode.hasProperty(M_MAILFLOOR) && !"".equals(p_orgDataNode.getProperty(M_MAILFLOOR).getString()) ) {
    m_address.append(LocaleSupport.getLocalizedMessage(pageContext, "floor"));
    m_address.append(": ");
    m_address.append(p_orgDataNode.getProperty(M_MAILFLOOR).getString());
    m_address.append("\n");
  }

  if (p_orgDataNode.hasProperty(M_ADDRESS1)) {
    m_address.append(p_orgDataNode.getProperty(M_ADDRESS1).getString());
    m_address.append("\n");
  }


   if (p_orgDataNode.hasProperty(M_ADDRESS2)) {
	if (Utils.isNotEmpty(p_orgDataNode.getProperty(M_ADDRESS2).getString())) {//condition for empty string(2014-5-26)
    	m_address.append(p_orgDataNode.getProperty(M_ADDRESS2).getString());
    	m_address.append("\n");
    }
  }

  if (p_orgDataNode.hasProperty(M_ADDRESS3)) {
    if (Utils.isNotEmpty(p_orgDataNode.getProperty(M_ADDRESS3).getString())) {//condition for empty string(2014-5-26)                    
    	m_address.append(p_orgDataNode.getProperty(M_ADDRESS3).getString());
    	m_address.append("\n");
  	}
  }


  if (p_orgDataNode.hasProperty(M_CITY)) {
    m_address.append(p_orgDataNode.getProperty(M_CITY).getString());
    m_address.append(", ");
  }
  if (p_orgDataNode.hasProperty(M_PROVINCE)) {
    m_address.append(p_orgDataNode.getProperty(M_PROVINCE).getString());
    m_address.append("\n");
  }
  if (p_orgDataNode.hasProperty(M_POSTALCODE)) {
    m_address.append(p_orgDataNode.getProperty(M_POSTALCODE).getString());
    m_address.append("\n");
  }
  if (p_orgDataNode.hasProperty(M_COUNTRY)) {
    m_address.append(p_orgDataNode.getProperty(M_COUNTRY).getString());
  }

  StringBuilder mapAddress = new StringBuilder();
  if (!"999999999".equals(p_orgDataNode.getProperty("P_BLDG_ID").getString()) && p_orgDataNode.hasProperty(P_BLDG_NAME)) {
    mapAddress.append(p_orgDataNode.getProperty(P_BLDG_NAME).getString());
  }
  mapAddress.append("\n");
  mapAddress.append(p_address);


%>
<!--START of row-->    
<div class="row">
    <!--START of col-sm-8-->    
	<div class="col-sm-8">
	<%
  	//General Information
    //START of <div class=\"item_services_first\">  
  	out.write("<div class=\"item_services_first\">");
	%>
	<!--START of row-->  
	<div class="row">
        <!--START of col-sm-6(inner)-->  
		<div class="col-sm-6">    

<%
	//START of <div class=\"column\">"  
  	out.write("<div class=\"column\">");

  	out.write(String.format("<h2 class=\"column_title\">%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "generalInformationText")));
  	if (p_orgDataNode.hasProperty(GENAREACODE) && p_orgDataNode.hasProperty(GENPHONE) && Utils.isNotEmpty(p_orgDataNode.getProperty(GENAREACODE).getString()) && Utils.isNotEmpty(p_orgDataNode.getProperty(GENPHONE).getString())) {
    	out.write(String.format("<p><b>(%s) %s</b></p>", p_orgDataNode.getProperty(GENAREACODE).getString(), p_orgDataNode.getProperty(GENPHONE).getString()));
  	}

  	out.write("<p class=\"reset\">");
	if (p_orgDataNode.hasProperty(GENPHONESCHEDULE) && Utils.isNotEmpty(p_orgDataNode.getProperty(GENPHONESCHEDULE).getString())) {
   		out.write(String.format("%s <br />", p_orgDataNode.getProperty(GENPHONESCHEDULE).getString()));
	}
  	if (p_orgDataNode.hasProperty(TOLLFREEPHONE) && Utils.isNotEmpty(p_orgDataNode.getProperty(TOLLFREEPHONE).getString())) {
   		out.write(String.format("%s : %s <br />", LocaleSupport.getLocalizedMessage(pageContext, "tollfreeText"), p_orgDataNode.getProperty(TOLLFREEPHONE).getString()));
  	}
  	if (p_orgDataNode.hasProperty(TOLLFREESCHEDULE) && Utils.isNotEmpty(p_orgDataNode.getProperty(TOLLFREESCHEDULE).getString())) {
   		out.write(String.format("%s <br /><br />", p_orgDataNode.getProperty(TOLLFREESCHEDULE).getString()));
  	}

  if (p_orgDataNode.hasProperty(RECAREACODE) && p_orgDataNode.hasProperty(RECPHONE) && Utils.isNotEmpty(p_orgDataNode.getProperty(RECAREACODE).getString()) && Utils.isNotEmpty(p_orgDataNode.getProperty(RECPHONE).getString())) {
    out.write(String.format("%s : (%s) %s <br />", LocaleSupport.getLocalizedMessage(pageContext, "receptionText"), p_orgDataNode.getProperty(RECAREACODE).getString(), p_orgDataNode.getProperty(RECPHONE).getString()));
  }
  if (p_orgDataNode.hasProperty(RECPHONESCHEDULE) && Utils.isNotEmpty(p_orgDataNode.getProperty(RECPHONESCHEDULE).getString())) {
    out.write(String.format("%s <br /><br />", p_orgDataNode.getProperty(RECPHONESCHEDULE).getString()));
  }
  if (p_orgDataNode.hasProperty(FAXAREACODE) && p_orgDataNode.hasProperty(FAXPHONE) && Utils.isNotEmpty(p_orgDataNode.getProperty(FAXAREACODE).getString()) && Utils.isNotEmpty(p_orgDataNode.getProperty(FAXPHONE).getString())) {
    out.write(String.format("%s : (%s) %s <br />", LocaleSupport.getLocalizedMessage(pageContext, "faxText"), p_orgDataNode.getProperty(FAXAREACODE).getString(), p_orgDataNode.getProperty(FAXPHONE).getString()));
  }
  if (p_orgDataNode.hasProperty(FREQCALLEDNUM) && Utils.isNotEmpty(p_orgDataNode.getProperty(FREQCALLEDNUM).getString())) {
    out.write(String.format("%s : %s <br />", LocaleSupport.getLocalizedMessage(pageContext, "otherText"), p_orgDataNode.getProperty(FREQCALLEDNUM).getString()));
  }
  //old code for email field - replaced with code below by connie - Apr 20 2012
  //if (p_orgDataNode.hasProperty(EMAIL) && Utils.isNotEmpty(p_orgDataNode.getProperty(EMAIL).getString())) {
    //out.write(String.format("%s : <a href=\"mailto:%s\">%s</a> <br />", LocaleSupport.getLocalizedMessage(pageContext, "emailText"), p_orgDataNode.getProperty(EMAIL).getString(), p_orgDataNode.getProperty(EMAIL).getString()));
  //}
  if ( (p_orgDataNode.hasProperty(EMAIL) && Utils.isNotEmpty(p_orgDataNode.getProperty(EMAIL).getString())) || (p_orgDataNode.hasProperty(ORGURLALTEMAIL) && Utils.isNotEmpty(p_orgDataNode.getProperty(ORGURLALTEMAIL).getString())) ) {
      if (p_orgDataNode.hasProperty(ORGURLALTEMAIL) && Utils.isNotEmpty(p_orgDataNode.getProperty(ORGURLALTEMAIL).getString())) {
          out.write(LocaleSupport.getLocalizedMessage(pageContext, "emailText") + ": " + "<a href=" + p_orgDataNode.getProperty(ORGURLALTEMAIL).getString() + ">" +  p_orgDataNode.getProperty(ORGURLALTEMAIL).getString()+ "</a> <br/>" );    
      } 
     else { 
        out.write(String.format("%s : <a href=\"mailto:%s\">%s</a> <br />", LocaleSupport.getLocalizedMessage(pageContext, "emailText"), p_orgDataNode.getProperty(EMAIL).getString(), p_orgDataNode.getProperty(EMAIL).getString()));
      }      
  }
  if (p_orgDataNode.hasProperty(ORGURLINTERNET) && Utils.isNotEmpty(p_orgDataNode.getProperty(ORGURLINTERNET).getString())) {
    out.write(String.format("<a href=\"%s\">%s</a><br />", p_orgDataNode.getProperty(ORGURLINTERNET).getString(), p_orgDataNode.getProperty(ORGURLINTERNET).getString()));
  }
/*START of media contacts*/
    /**START of Receiving property data of Communication List page from Dialog(2014-12-4) **/
    String contactList = properties.get("contactList", "");
      if(!Utils.isNotEmpty(contactList)){
      	if(lang.equals("en")){
			contactList="/content/gnb/en/contacts/communicationsContact.html";
        }
        else{
			contactList="/content/gnb/fr/contacts/communicationsContact.html";
        }
      }
      else{
		contactList=contactList+".html";
      }   
    /**END of Receiving property data of Communication List page from Dialog(2014-12-4) **/

      if (isDepartment ) {  //if not a department - see if there are any media contacts in this branch/unit 
          String mediaContactText=LocaleSupport.getLocalizedMessage(pageContext, "mediaContactText");
          String mediaContactTextLink=String.format("<a href=%s>%s</a>",contactList,mediaContactText);

          out.write(String.format("<p>%s</p>", mediaContactTextLink));
       }  
/*END of media contacts*/
  out.write("</p></div>");
  //END of <div class=\"column\">"  
    %>
    </div>
    <!--END of col-sm-6(inner)-->  
	<!--START of col-sm-6(inner)-->    
	<div class="col-sm-6">   
	<%
  //Mailing Information
  //START of <div class=\"column\">"  
  out.write("<div class=\"column\">");
  out.write(String.format("<h2 class=\"column_title\">%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "mailingText")));
  out.write("<p class=\"reset\">"); 
  out.write(String.format("%s", StringEscapeUtils.escapeHtml(m_address.toString()).replace("\n", "<br />"))); 
  out.write("</p></div>");
  //END of <div class=\"column\">"
    %>
    </div>
    <!--END of col-sm-6(inner)-->    
    </div>
    <!--END of row(inner)-->        
	<%        
  out.write("<div class=\"clearfloat\"></div>");
  out.write("</div>");
  //END of <div class=\"item_services_first\">

  //if(isDepartment) {
    //Contact information

    WCMMode contactincludemode = WCMMode.DISABLED.toRequest(request);

    if (p_orgDataNode != null && p_contactDataPage != null) {
      Map<String, String> map = new HashMap<String, String>();
      map.put("1_prop", "contactinfo/DEPTID");
      map.put("1_prop.value", p_orgDataNode.getProperty("DEPTID").getString());
              
      map.put("2_prop", "contactinfo/PERSONTYPEID");
      map.put("2_prop.value", "71"); //Hard coded value is bad: indicated a the media contact type
      map.put("path", p_contactDataPage);
      
      if (!isDepartment ) {  //if not a department - see if there are any media contacts in this branch/unit 
          map.put("3_prop", "contactinfo/ORGID");        
          map.put("3_prop.value", parent_org_id);
       }
       else { // if it is a dept - then we want the media contact header - even if they don't have one(All Commented out -Moved up to line 149)
           //out.write("<div class=\"item_services\"><div class=\"column\">");
           /**START of Comment out -Original(2014-12-4)**/
           //out.write(String.format("<h2 class=\"column_title\">%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "mediaContactText")));
           /**END of Comment out -Original(2014-12-4)**/
           /**START of NEW(2014-12-4)**/
           //String mediaContactText=LocaleSupport.getLocalizedMessage(pageContext, "mediaContactText");
           //String mediaContactTextLink=String.format("<a href=%s>%s</a>",contactList,mediaContactText);
           //out.write(String.format("<h2 class=\"column_title\">%s</h2>", mediaContactTextLink));
           /**END of NEW(2014-12-4)**/
       }  
   
      map.put("type", "cq:Page");
      Query query = builder.createQuery(PredicateGroup.create(map), session);
      result = query.getResult();
      List<Hit> hits = result.getHits();
      try {
        Integer lpCnt = 0 ; 
        for (Hit hit : hits) {
          if (lpCnt == 0 && !isDepartment ) {
              //out.write("<div class=\"item_services\"><div class=\"column\">");
              //out.write(String.format("<h2 class=\"column_title\">%s</h2>", LocaleSupport.getLocalizedMessage(pageContext, "mediaContactText"))); 
              lpCnt = lpCnt + 1 ; 
          }
          //START of of h3  
            //out.write("<h3 class=\"contact_title\">");
          String includescript = String.format("%s.%s.html", hit.getPath().replace("/contactinfo", ""), "quicklink");
          %>
		  <!--START of Comment out(2014-12-4)-->
		  <!--<sling:include path="<%=includescript%>" />-->
		  <!--END of Comment out(2014-12-4)-->
		  <%
              //out.write("</h3>");
          //END of h3

          //START of <p class=\"reset\">  
          out.write("<p class=\"reset\">");
          Node contactDataNode = WCMUtils.getNode(p_resource.getResourceResolver().getResource(hit.getPath()));
          //TITLE
          if (lang.equalsIgnoreCase("en")) {
            if (contactDataNode.hasProperty("TITLE" + langSuffix)) {
              out.write(contactDataNode.getProperty("TITLE" + langSuffix).getString());
            }
          } else {
            if (contactDataNode.hasProperty("TITLE" + langSuffix + "M") || contactDataNode.hasProperty("TITLE" + langSuffix + "F")) {
              if (contactDataNode.hasProperty("TITLE" + langSuffix + "M"))
                out.write(contactDataNode.getProperty("TITLE" + langSuffix + "M").getString());
              if (contactDataNode.hasProperty("TITLE" + langSuffix + "F")) {
                out.write(" / ");
                out.write(contactDataNode.getProperty("TITLE" + langSuffix + "F").getString());
             }
            }
          }
          out.write("<br />");

          //Contact information
          if (contactDataNode.hasProperty("PUBLISHEDPHONE")) {
            out.write(String.format("%s : (%s) %s <br />", LocaleSupport.getLocalizedMessage(pageContext, "phoneText"), contactDataNode.getProperty("PUBLISHEDPHONEAREA").getString(), contactDataNode.getProperty("PUBLISHEDPHONE").getString()));
          }
          if (contactDataNode.hasProperty("PUBLISHEDFAX")) {
            out.write(String.format("%s : (%s) %s <br />", LocaleSupport.getLocalizedMessage(pageContext, "faxText"), contactDataNode.getProperty("PUBLISHEDFAXAREA").getString(), contactDataNode.getProperty("PUBLISHEDFAX").getString()));
          }
          if (contactDataNode.hasProperty("PUBLISHEDEMAIL" + langSuffix)) {
            out.write(String.format("%s : %s ", LocaleSupport.getLocalizedMessage(pageContext, "emailText"), contactDataNode.getProperty("PUBLISHEDEMAIL" + langSuffix).getString()));
          }
          out.write("</p>");
          //END of <p class=\"reset\">  

        } //for (Hit hit : hits)

            if (result==null || result.getTotalMatches() ==0) {
                if (isDepartment) {
                    /**START of Comment out(2014-12-19)**/
                    //out.write(p_orgDataNode.getProperty("DEPTNAME"+langSuffix).getString()+" "+LocaleSupport.getLocalizedMessage(pageContext, "noMediaContact"));
                    /**END of Comment out(2014-12-19)**/
                }
            }

      } finally {
        contactincludemode.toRequest(request);
      }
    } //if (p_orgDataNode != null && p_contactDataPage != null) 

    //out.write("</div></div>");//causing error in IE7, IE8    
%>        
    </div>
	<!--END of col-sm-8-->     
    <!--START of col-sm-4-->
    <div class="col-sm-4">
<%
  //Map and physical location
  //START of <div id=\"sidebar\">
  out.write("<div id=\"sidebar\">");
  String mapPin = URLEncoder.encode(mapAddress.toString().replace("\n", ","), "UTF8");
  String googleMapLink = String.format("//maps.google.com/maps?f=q&source=s_q&hl=%s&q=%s@%s,%s&ie=UTF8&z=14&iwloc=r3", lang, mapPin, p_orgDataNode.getProperty(P_LATITUDE).getString(), p_orgDataNode.getProperty(P_LONGITUDE).getString());
  out.write(String.format("<script type=\"text/javascript\">window.gmapURL = \"%s&output=embed\";</script>", googleMapLink));
  out.write(String.format("<div class=\"sectiontitle\"><div class=\"links\"><div class=\"rightcurve\">&nbsp;</div><div class=\"leftcurve\"><h3 class=\"title\">%s</h3></div></div></div>", LocaleSupport.getLocalizedMessage(pageContext, "locationText")));
  out.write(String.format("<div id=\"map_wrapper\"><div class=\"directions_container\"><p><a target=\"_blank\" href=\"%s\">%s</a></p></div>", googleMapLink, LocaleSupport.getLocalizedMessage(pageContext, "getDirectionsText")));

  out.write("</div>");
  out.write("<div class=\"box shaded\">");
  out.write("<div class=\"location_post\">");
  out.write(String.format("<p class=\"handicap\">%s</p>", StringEscapeUtils.escapeHtml(mapAddress.toString()).replace("\n", "<br />")));
  out.write("</div>");
  out.write("</div>");
  out.write("</div>");
  //END of <div id=\"sidebar\">
%>        
    </div>
	<!--END of col-sm-4-->    
</div>
<!--END of row-->    


<%

    out.write("</div>");
  //} //if(isDepartment) 
  
} catch (Exception ex) {
  out.write("Unable to display contacts for this department ");
  log.error("DepartmentInfo component unable to render contacts tab.", ex);
}

%>

<script type="text/javascript">
  jQuery(document).ready(function($)
  {
if( window.gmapURL ) {
  $('<iframe width="303" height="230" scrolling="no" class="map_holder" marginwidth="0" marginheight="0" src="' + gmapURL + '"></iframe>').appendTo($('#map_wrapper'))
}
  });
</script>