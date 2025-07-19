<%@include file="/apps/bitp/init/global.jsp" %>
<%@ page import="com.day.cq.commons.Doctype" %>
<%@ page import="com.day.cq.wcm.api.WCMMode" %>
<%
    String xs = Doctype.isXHTML(request) ? "/" : "";
    String hidePageTitleByline = properties.get("hidePageTitleByline","false");
        
    String keywords = properties.get("keywords","");
    // add the tag keywords
    String tagKeywords = WCMUtils.getKeywords(currentPage);
    if (tagKeywords != null && !tagKeywords.isEmpty()){
      if (!keywords.isEmpty()){
        keywords += ",";
      }
      keywords += tagKeywords;
    }
    
    
    // read the redirect target from the 'page properties' and perform the
    // redirect if WCM is disabled.
    String location = properties.get("redirectTarget1", "");
    boolean openNewWindow = properties.get("openNewWindow",false);
    
    if ((WCMMode.fromRequest(request) == WCMMode.DISABLED || WCMMode.fromRequest(request) == WCMMode.PREVIEW) && location.length() > 0) 
        {
        // check for recursion
        if (!location.equals(currentPage.getPath())) 
            {
            if(location.startsWith("http")||location.startsWith("https")||location.endsWith(".pdf")||location.endsWith("/")) 
                {
                //whether or not opening new window
                if(openNewWindow)
                    {
                   %>
                    <script type="text/javascript">  
                    window.open("<%=location%>", "redirect"); 
                    window.history.back();
                    </script>  
                    <%
                    }
                else{
                    response.sendRedirect(location);    
                    }
                } 
            else 
                {
                if(location.contains("?")) 
                    {
                    response.sendRedirect(request.getContextPath() + location.replace("?",".html?"));   
                    } 
                else if(location.contains("#")) 
                    {
                    response.sendRedirect(request.getContextPath() + location.replace("#",".html#"));                 
                    } 
                else 
                    {
                    response.sendRedirect(request.getContextPath() + location + ".html");
                    }
              }
            } 
        else {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            }
        return;
        }//end of outer if
%>
<head>    
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"<%=xs%>>
    <meta http-equiv="keywords" content="<%= keywords %>"<%=xs%>>
    <meta http-equiv="description" content="<%= properties.get("jcr:description","") %>"<%=xs%>>
    <cq:include script="/apps/bitp/init/init.jsp"/>
    <cq:include script="stats.jsp"/>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
    <script type="text/javascript" src="/apps/bitp/components/page/bitp_base/common.js"></script>    
    <script type='text/javascript' src='/etc/designs/bitp/js/jquery-1.4.4.min.js'></script>
    <script type='text/javascript' src='/etc/designs/bitp/js/jquery-ui-1.8.6.custom.min.js'></script>
    <script type="text/javascript" src="/etc/designs/gnb/js/jquery-1.3.2.js"></script>
    <script type="text/javascript" src="/etc/designs/gnb/js/jquery-ui-1.7.2.custom.min.js" ></script>
    <script type="text/javascript" src="/etc/designs/bitp/js/jquery.cycle.all.2.72.js"></script>
    <script type="text/javascript" src="/etc/designs/gnb/js/jquery.cycle.all.2.72.js"></script>        

    <!--[if IE 6]>
    <script type="text/javascript" src="/apps/bitp/components/page/bitp_base/pngFix.js"></script>
    <script>
        DD_belatedPNG.fix('.supermenu, .supermenuContent');
    </script>
    <![endif]-->

    <!--[if lte IE 7]>

    <script type="text/javascript" src="ie.js"></script>

    <![endif]-->

    <!--[if IE]>
    <script type="text/javascript" src="/apps/bitp/components/page/bitp_base/DD_roundies_0.0.2a-min.js"></script>
    <script>
        DD_roundies.addRule('ul#navSublevel li a', '2px');
        DD_roundies.addRule('ul.domtabs li', '2px 2px 0 0');
    </script>
    <![endif]-->


    <% currentDesign.writeCssIncludes(pageContext); %>

    <link rel="shortcut icon" href="/etc/designs/bitp/favicon.ico" type="image/x-icon" />        
    <title><%= currentPage.getTitle() == null ? currentPage.getName() : currentPage.getTitle() %></title>
</head>