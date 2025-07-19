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
<%@page import="com.t4g.cnb.enums.Fields"%>
<%
  String lang = "fr";
  String langSuffix = "FRE";
  Locale locale = currentPage.getLanguage(true);
  if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    langSuffix = "ENG";
  }
%>

<cq:setContentBundle language="<%=lang%>" />
<%
  Node contactDataNode = null;
  try {
    Page configurationPage = pageManager.getPage("/content/gnbconfig");

    // Get the services node based on contact id and contact path
    int contactId = Integer.parseInt(properties.get("contactId", "0"));
    if (contactId == 0) {
      String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
      contactId = Integer.parseInt(selectors[0]);
    }
    int bucket = ((contactId / 250) + 1) * 250;

    /**
    out.write("configurationPage.getProperties().get('contactDataPage') :"+configurationPage.getProperties().get("contactDataPage"));
    out.write("<br/>");
    out.write("bucket :"+bucket);
    out.write("<br/>");
    out.write("contactId :"+contactId);
    out.write("<br/>");
    **/

    String itemPath = String.format("%s/%s/%s/contactinfo/", configurationPage.getProperties().get("contactDataPage"), bucket, contactId);
    Resource r = slingRequest.getResourceResolver().getResource(itemPath);
    if (r == null) {
      log.error("Unable to find contactinfo node for path:" + itemPath);
    } else {
      contactDataNode = r.adaptTo(Node.class);
      if (contactDataNode == null) {
        log.error("Unable to find contactinfo node for path:" + itemPath);
      }
    }
  } catch (Exception e) {

    log.error("contact info page unable to get data node", e);
  }

  try {
    if (contactDataNode != null) {
      StringBuilder nameBuilder = new StringBuilder();

      if (contactDataNode.hasProperty("TITLENAME" + langSuffix)) {
        String property = contactDataNode.getProperty("TITLENAME" + langSuffix).getString();
        if (Utils.isNotEmpty(property)) {
          nameBuilder.append(property).append(" ");
        }
      }
      if (contactDataNode.hasProperty("FIRSTNAME")) {
        nameBuilder.append(contactDataNode.getProperty("FIRSTNAME").getString());
      }
      if (contactDataNode.hasProperty("MIDDLENAME")) {
        nameBuilder.append(" ").append(contactDataNode.getProperty("MIDDLENAME").getString());
      }
      if (contactDataNode.hasProperty("LASTNAME")) {
        nameBuilder.append(" ").append(contactDataNode.getProperty("LASTNAME").getString());
      }
      if (contactDataNode.hasProperty("DESIGNATION" + langSuffix)) {
        String property = contactDataNode.getProperty("DESIGNATION" + langSuffix).getString();
        if (Utils.isNotEmpty(property)) {
          nameBuilder.append(" ").append(property);
        }
      }

      StringBuilder address = new StringBuilder();
      if (contactDataNode.hasProperty("PUB_ADDRESS" + langSuffix + "1")) {
        address.append(contactDataNode.getProperty("PUB_ADDRESS" + langSuffix + "1").getString());
        address.append("\n");
      }

      /**Start of new(2014-5-23)**/  
      if (contactDataNode.hasProperty("PUB_ADDRESS" + langSuffix + "2")) {
      	if (Utils.isNotEmpty(contactDataNode.getProperty("PUB_ADDRESS" + langSuffix + "2").getString())) {          
        	address.append(contactDataNode.getProperty("PUB_ADDRESS" + langSuffix + "2").getString());
        	address.append("\n");
        }
      }
      /**End of new**/  

      if (contactDataNode.hasProperty("PUB_CITY" + langSuffix)) {
        address.append(contactDataNode.getProperty("PUB_CITY" + langSuffix).getString());
        address.append(", ");
      }
      if (contactDataNode.hasProperty("PUB_PROVINCE" + langSuffix)) {
        address.append(contactDataNode.getProperty("PUB_PROVINCE" + langSuffix).getString());
        address.append("\n");
      }
      if (contactDataNode.hasProperty("PUB_POSTALCODE")) {
        address.append(contactDataNode.getProperty("PUB_POSTALCODE").getString());
        address.append("\n");
      }
      if (contactDataNode.hasProperty("PUB_COUNTRY")) {
        address.append(contactDataNode.getProperty("PUB_COUNTRY").getString());
      }

      StringBuilder mapAddress = new StringBuilder();      
      if(!"999999999".equals(contactDataNode.getProperty("PUB_BLDG_ID").getString())){
        mapAddress.append(contactDataNode.getProperty("PUB_BLDG_NAME_" + langSuffix).getString());
        mapAddress.append("\n");
      }
      mapAddress.append(address);

      String mapPin = URLEncoder.encode(mapAddress.toString().replace("\n", ","), "UTF8");
      String googleMapLink = String.format("//maps.google.com/maps?f=q&source=s_q&hl=%s&q=%s@%s,%s&ie=UTF8&z=14&iwloc=near", lang, mapPin,contactDataNode.getProperty("PUB_LATITUDE").getString(), contactDataNode.getProperty("PUB_LONGITUDE").getString());

      out.write("lang :"+lang);
      out.write("<br/>");

      out.write("mapPin :"+mapPin);
      out.write("<br/>");

      out.write("PUB_LATITUDE :"+contactDataNode.getProperty("PUB_LATITUDE").getString());
      out.write("<br/>");


      out.write("PUB_LONGITUDE :"+contactDataNode.getProperty("PUB_LONGITUDE").getString());
      out.write("<br/>");



      out.write(String.format("<div class=\"pageHeader\"><h1>%s</h1></div><div class=\"clearfloat\"></div>",nameBuilder.toString()));
%>
<div class="row">
    <div class="col-md-8">

<%

//<<START of left part>>
      //START of renderer_container
      out.write("<div class=\"renderer_container\">");
      //START of item_services_first  
      out.write("<div class=\"item_services_first\">");
      //TITLE
      if (lang.equalsIgnoreCase("en")) {

                  if (contactDataNode.hasProperty("TITLE" + langSuffix)) {
                      out.write("<h2 class=\"column_title\">");
                      out.write(contactDataNode.getProperty("TITLE" + langSuffix).getString());
                      if (contactDataNode.hasProperty("acting")) {
                         if("Y".equals(contactDataNode.getProperty("acting").getString())) { 
                             out.write(" (Acting) ");
                         } 
                      }
                      out.write("</h2>");
                  }
      } else {
        String gender = Fields.GENDER_MALE_FRE.text().equals(contactDataNode.getProperty("GENDERFRE").getString()) ? "M" : "F";
        out.write("<h2 class=\"column_title\">");
        if (contactDataNode.hasProperty("TITLE" + langSuffix + gender)) {
          	out.write(contactDataNode.getProperty("TITLE" + langSuffix + gender).getString());
          	if (contactDataNode.hasProperty("acting")) {
            	if("Y".equals(contactDataNode.getProperty("acting").getString())) { 
                 	out.write(" (Par int&eacute;rim) ");
            	} 
        	}
        }
        out.write("</h2>");
      }
      WCMMode deptincludemode = WCMMode.DISABLED.toRequest(request);


      try {
        if (contactDataNode.hasProperty("ORGANIZATION_PATH")) {
  
          Node orgNode = WCMUtils.getNode(resourceResolver.getResource(contactDataNode.getProperty("ORGANIZATION_PATH").getString()));
          Node deptNode = null;
          Node climbingNode = orgNode.getParent();
          while (climbingNode.getDepth() > 0) {
            if (climbingNode.hasNode("orginfo") && !climbingNode.getParent().hasNode("orginfo")) {
              deptNode = climbingNode;
            }
            climbingNode = climbingNode.getParent();
          }
          if (orgNode != null) {
            //out.write(String.format("<h4>%s : ", LocaleSupport.getLocalizedMessage(pageContext, "organisationText")));
            out.write(String.format("<h4>"));  
            String includescript = String.format("%s.quicklink.html", orgNode.getPath());%>
			<sling:include path="<%= includescript %>" /><%
  			out.write("</h4>");
          }

          if (deptNode != null) {
            out.write("<h4>");
            String includescript = String.format("%s.quicklink.html", deptNode.getPath());%>
			<sling:include path="<%= includescript %>" /><%
  			out.write("</h4>");
          }
        }
      } finally {
        deptincludemode.toRequest(request);
      }
      out.write("</div>");


      out.write("<div class=\"item_services\">");
	%>
     <!--START of inner row-->
	 <div class="row">
        <!--START of inner col-sm-6--> 
    	<div class="col-sm-6">
        <%
      //START of Contact
      out.write("<div class=\"column\">");  
      out.write(String.format("<h2 class=\"column_title\">%s</h2>", LocaleSupport.getLocalizedMessage(pageContext,"contactText")));
      out.write("<p class=\"reset\">");
      if (contactDataNode.hasProperty("PUBLISHEDPHONE")) {
        out.write(String.format("%s : (%s) %s <br />", LocaleSupport.getLocalizedMessage(pageContext, "phoneText"),contactDataNode.getProperty("PUBLISHEDPHONEAREA").getString(), contactDataNode.getProperty("PUBLISHEDPHONE").getString()));
      }
      if (contactDataNode.hasProperty("FAX")) {
        out.write(String.format("%s : (%s) %s <br />", LocaleSupport.getLocalizedMessage(pageContext, "faxText"),contactDataNode.getProperty("FAXAREA").getString(), contactDataNode.getProperty("FAX").getString()));
      }
      if (contactDataNode.hasProperty("PUBLISHEDEMAIL" + langSuffix)) {
        String encodedEmail = contactDataNode.getProperty("PUBLISHEDEMAIL" + langSuffix).getString();
        encodedEmail = StringEscapeUtils.escapeHtml(encodedEmail);

        out.write(String.format("%s : <a href=\"mailto:%s\">%s</a> ", LocaleSupport.getLocalizedMessage(pageContext, "emailText"),encodedEmail,encodedEmail));//Keehwan - should be mailto:
      }
      out.write("</p></div>");
      //END of Contact  
%>        
    	</div>
        <!--END of inner col-sm-6-->  
        <!--START of inner col-sm-6-->  
    	<div class="col-sm-6"">
       <%
      //Mailing Information
      address = new StringBuilder();

      if(contactDataNode.hasProperty("M_BLDG_ID") && !"999999999".equals(contactDataNode.getProperty("M_BLDG_ID").getString())){
        address.append(contactDataNode.getProperty("M_BLDG_NAME_" + langSuffix).getString());
        address.append("\n");
      }

      if (contactDataNode.hasProperty("M_ADDRESS" + langSuffix + "1")) {
        address.append(contactDataNode.getProperty("M_ADDRESS" + langSuffix + "1").getString());
        address.append("\n");
      }

      /**Start of new(2014-5-23)**/  
      if (contactDataNode.hasProperty("M_ADDRESS" + langSuffix + "2")) {
   		if (Utils.isNotEmpty(contactDataNode.getProperty("M_ADDRESS" + langSuffix + "2").getString())) {                    
        	address.append(contactDataNode.getProperty("M_ADDRESS" + langSuffix + "2").getString());
        	address.append("\n");
        }
      }
      /**End of new**/  

      if (contactDataNode.hasProperty("M_CITY" + langSuffix)) {
        address.append(contactDataNode.getProperty("M_CITY" + langSuffix).getString());
        address.append(", ");
      }
      if (contactDataNode.hasProperty("M_PROVINCE" + langSuffix)) {
        address.append(contactDataNode.getProperty("M_PROVINCE" + langSuffix).getString());
        address.append("\n");
      }
      if (contactDataNode.hasProperty("M_POSTALCODE")) {
        address.append(contactDataNode.getProperty("M_POSTALCODE").getString());
        address.append("\n");
      }
      if (contactDataNode.hasProperty("M_COUNTRY")) {
        address.append(contactDataNode.getProperty("M_COUNTRY").getString());
      }

	  //START of mailing address
      out.write("<div class=\"column\">");
      out.write(String.format("<h2 class=\"column_title\">%s</h2>", LocaleSupport.getLocalizedMessage(pageContext,"mailingText")));
      out.write("<p class=\"reset\">");
      out.write(String.format("%s", StringEscapeUtils.escapeHtml(address.toString()).replace("\n", "<br />")));
      out.write("</p></div>");
	  //END of mailing address
%> 
    </div>
  	</div>
     <!--END of inner row-->
        <%
      out.write("<div style=\"clear: left;\"></div></div></div>");
//<<END of left part>>
    %>
    <!--END of renderer_container-->    
    </div>
<!--END of col-sm-8-->

<!--START of col-sm-4-->
    <div class="col-md-4">
      <%
//<<START of right part>>
      //Google Map
      out.write("<div id=\"sidebar\">");
      out.write(String.format("<div class=\"sectiontitle\"><div class=\"links\"><div class=\"rightcurve\">&nbsp;</div><div class=\"leftcurve\"><h3 class=\"title\">%s</h3></div></div></div>",LocaleSupport.getLocalizedMessage(pageContext, "locationText")));
      out.write(String.format("<div id=\"map_wrapper\"><div class=\"directions_container\"><p><a target=\"_blank\" href=\"%s\">%s</a></p></div>",googleMapLink, LocaleSupport.getLocalizedMessage(pageContext, "getDirectionsText")));
      out.write(String.format("<iframe width=\"287\" scrolling=\"no\" height=\"230\" src=\"%s&output=embed\" marginwidth=\"0\" class=\"map_holder\" marginheight=\"0\"></iframe>",googleMapLink));


        %>
	   <!--<iframe width="100%" scrolling="no" height="100%" src="<%=googleMapLink%>&output=embed" marginwidth="0" class="map_holder" marginheight="0"></iframe>-->
<%
      out.write("</div>");
      //Textual Address
      out.write("<div class=\"box shaded\">");
      out.write("<div class=\"location_post\">");
      out.write(String.format("<p class=\"handicap\">%s</p>", StringEscapeUtils.escapeHtml(mapAddress.toString()).replace("\n", "<br />")));
      out.write("</div>");
      out.write("</div>");
      out.write("</div>");
//<<END of right part>>
	  %>
    </div>
<!--END of col-sm-4-->    
  </div>
<!--END of row-->  
<%
      out.write("<div class=\"clearfloat\"></div>");

    } else if (WCMMode.fromRequest(request) == WCMMode.EDIT) {%>
		<img src="/libs/widgets/0.gif" class="cq-text-placeholder" alt=""><%
  }
  } catch (Exception ex) {
    log.error("Contactinfo component encountered an error:", ex);
  }
%> 