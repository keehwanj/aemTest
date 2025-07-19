<%--
  Copyright 1997-2008 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Generic 404 error handler

  Important note:  
  Since Sling uses the user from the request (depending on the authentication
  handler but typically HTTP basic auth) to login to the repository and JCR/CRX
  will simply say "resource not found" if the user does not have a right to
  access a certain node, everything ends up in this 404 handler, both access
  denied ("401", eg. for non-logged in, anonymous users) and really-not-existing
  scenarios ("404", eg. logged in, but does not exist in repository).
  
--%><%
%><%@ page session="false" %><%
%><%@ page import="
    java.net.URLEncoder,
    org.apache.sling.api.scripting.SlingBindings,
    org.apache.sling.engine.auth.Authenticator,
    org.apache.sling.engine.auth.NoAuthenticationHandlerException,
    com.day.cq.wcm.api.WCMMode" %><%!

    private boolean isAnonymousUser(HttpServletRequest request) {
        return request.getAuthType() == null
            || request.getRemoteUser() == null
            || "anonymous".equals(request.getRemoteUser());
    }

    private boolean isBrowserRequest(HttpServletRequest request) {
        // check if user agent contains "Mozilla" or "Opera"
        final String userAgent = request.getHeader("User-Agent");
        return userAgent != null
            && (userAgent.indexOf("Mozilla") > -1
                || userAgent.indexOf("Opera") > -1);
    }
    
%><%
   //Do it only for author instance
   if(!WCMMode.fromRequest(request).equals(WCMMode.DISABLED)){
    // decide whether to redirect to the (wcm) login page, or to send a plain 404
    if (isAnonymousUser(request)
            && isBrowserRequest(request)) {
        
        SlingBindings bindings = (SlingBindings) request.getAttribute("org.apache.sling.api.scripting.SlingBindings");
        Authenticator auth = bindings.getSling().getService(Authenticator.class);
        if (auth != null) {
            try {
                auth.login(request, response);
                
                // login has been requested, nothing more to do
                return;
            } catch (NoAuthenticationHandlerException nahe) {
                bindings.getLog().warn("Cannot login: No Authentication Handler is willing to authenticate");
            }
        } else {
            bindings.getLog().warn("Cannot login: Missing Authenticator service");
        }
        
    }
   }
    // get here if authentication should not take place or if
    // no Authenticator service is available or if no
    // AuthenticationHandler is willing to authenticate
    // So we fall back to plain old 404/NOT FOUND
    
    // send 404
    response.setStatus(404);
    
    %><!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
    <html><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="keywords" content="404 Error">
<meta http-equiv="description" content="404 Error Handler">
<meta http-equiv="title" content="404 Error Handler">
<meta http-equiv="coverage" content="7005799 New Brunswick (province) / Nouveau-Brunswick (province)">
<meta http-equiv="publisher" content="Government of New Brunswick, Canada / Gouvernement du Nouveau-Brunswick, Canada">
<link href="/etc/designs/gnb/static.css" rel="stylesheet" type="text/css">
<link href="/etc/designs/gnb.css" rel="stylesheet" type="text/css">
<title>Sorry, the page cannot be found | Impossible de trouver la page</title>

    </head>
<body id="stacked">
<div id="container">
  <div id="header">
    <div id="logoArea">
      <div class="logo">
        <div id="logoImg" style="background:url('/content/dam/gnb/Corporate/GNB_Home.png') no-repeat top left "><a href="/content/gnb/en.html" title="GNB Home | Accueil GNB"><span id="logo_area"></span></a></div>
      </div>
    </div>
  </div>
  <div id="heightDivDep"></div>
  <div id="heightDivCat"></div>
  <div id="main_content_wrapper">
    <div id="mainNav">
      <div class="parsys iparsys mainNav_ipar">
        <div class="iparys_inherited">
          <div class="parsys iparsys mainNav_ipar"></div>
        </div>
        <div class="section">
          <div class="new"></div>
        </div>
      </div>
    </div>
    <div class="clearfloat"></div>
    <br />
    <div id="pageToolbar" style="float:right;width:260px;margin:0 25px 0 0;">
      <div class="pagetools pageToolbar">
        <div class="addthis_toolbox addthis_default_style">
              </div>
      </div>
    </div>
    <div id="mainContent">
      <div class="parsys mainContent_par">
        <div class="colctrl section"></div>
        <div class="parsys_column cq-colctrl-lt1">
          <div class="parsys_column cq-colctrl-lt1-c0">
            <div class="parbase sectiontitle section">
              <div class="pageHeader">
                <h1>Sorry, the page cannot be found</h1>
              </div>
            </div>
            <div class="text parbase section">
              <div class="text">
                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. </p>
              </div>
            </div>
                <br>
              <div class="text">
                <p>Please try the following:</p>
              </div>
              <div class="text">
                <p>
                <ul>
                  <li>If you typed the page address in the address bar, make sure that it is spelled correctly. </li>
                  <li>Or try the <a href="http://www.gnb.ca">Government of New Brunswick Home Page</a> </li>
                  <li>Or <a href="http://www2.gnb.ca/content/gnb/en/search.html">Government of New Brunswick Search Page</a> </li>
                  <li>Click the <a href="javascript:history.back(1)">back</a> button to try another link.</li>
                </ul>
                </p>
              </div>
              <div class="text">
                <p>HTTP 404 - File not found</p>
              </div>
          </div>
          <div class="parsys_column cq-colctrl-lt1-c1">
            <div class="parbase sectiontitle section">
              <div class="pageHeader">
                <h1>Impossible de trouver la page</h1>
              </div>
            </div>
            <div class="text parbase section">
              <div class="text">
                <p>Il est possible que la page que vous cherchez ait &eacute;t&eacute; retir&eacute;e, renomm&eacute;e ou qu&rsquo;elle ne soit pas disponible temporairement.</p>
              </div>
            </div>

            <br>            
            <div class="text parbase section">
              <div class="text">
                <p>Veuillez essayer ce qui suit&nbsp;:</p>
              </div>
              <div class="text">
                <p>
                <ul>
                  <li>Si vous avez inscrit l&rsquo;adresse de la page dans la   barre d&rsquo;adresse, assurez-vous de l&rsquo;avoir &eacute;pel&eacute;e correctement</li>
                  <li>Ou encore, essayez d&rsquo;ouvrir la <a href="http://www.gnb.ca">page d&rsquo;accueil du gouvernement du   Nouveau-Brunswick </a></li>
                  <li>Ou encore, essayez d&rsquo;ouvrir la <a href="http://www2.gnb.ca/content/gnb/fr/recherche.html">page Recherche du   gouvernement du Nouveau-Brunswick </a></li>
                  <li>Cliquez sur le bouton <a href="javascript:history.back(1)">Pr&eacute;c&eacute;dent</a> pour essayer un autre lien. </li>
                </ul>
                </p>
              </div>
              <div class="text">
                <p>Erreur HTTP 404 &ndash; Fichier introuvable</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mainContent -->
    <div class="clearfloat"></div>
  </div>
  <!-- main_content_wrapper -->
  <div id="footer">
    <div id="footerNav">
      <div class="parsys iparsys footerNav_ipar">
        <div class="iparys_inherited">
          <div class="parsys iparsys footerNav_ipar"></div>
        </div>
        <div class="section">
          <div class="new"></div>
        </div>
      </div>
    </div>
    <div class="clearfloat"></div>
    <div id="footerDisclaimer">
      <div class="sitefooter siteFooter parbase"> <span> All content &copy; 2010 Government of New Brunswick. All rights reserved.
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Tout le contenu &copy; 2010 Le gouvernement du Nouveau-Brunswick. Tous   droits r&eacute;serv&eacute;s.</span>
        <div id="response"></div>
      </div>
    </div>
    <div class="clearfloat"></div>
  </div>
</div>
<!-- container -->

    </body></html><%
%>