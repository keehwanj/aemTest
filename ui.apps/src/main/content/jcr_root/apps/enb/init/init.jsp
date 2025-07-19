<%--
  This file overlays /libs/wcm/init/init.jsp.
  Modifications:
  1. Include JavaScript for GNB Widgets.
  2. Display a button for custom (template-specific) page properties in the sidekick by putting in a template's component folder one of:
     a) a file called "custompageprops.xml" (or whatever filename is specified in the code) containing dialog markup
     b) an actual dialog node structure, with the top node named "custompageprops"
     In either case, the top-level node should be a TabPanel.  This functionality is copied from the Geometrixx example code at
     /apps/geometrixx/components/profilepage/head.jsp.

  ==============================================================================

  Default init script.

  Draws the WCM initialization code. This is usually called by the head.jsp
  of the page. If the WCM is disabled, no output is written.

  ==============================================================================

--%><%@include file="/libs/foundation/global.jsp"%><%
%><%@page import="com.day.cq.wcm.api.WCMMode,
    com.adobe.granite.ui.clientlibs.HtmlLibraryManager" %><%
if (WCMMode.fromRequest(request) != WCMMode.DISABLED) {
    HtmlLibraryManager htmlMgr = sling.getService(HtmlLibraryManager.class);
    if (htmlMgr != null) {
        htmlMgr.writeCssInclude(slingRequest, out, "cq.wcm.edit", "cq.tagging", "cq.security");
        htmlMgr.writeJsInclude(slingRequest, out, "cq.wcm.edit", "cq.tagging", "cq.security", "gnb.widgets");
    }
    String dlgPath = null;
    if (editContext != null && editContext.getComponent() != null) {
        dlgPath = editContext.getComponent().getDialogPath();
    }

    String customPagePropsButtonText = "Custom Page Properties..."; // This is the text that displays in the custom page properties tab (button)
    String customPagePropsFileName = "custompageprops"; // Custom page properties filename (not including ".xml" extension)
    %>
    <script type="text/javascript" >
	    var act = CQ.wcm.Sidekick.DEFAULT_ACTIONS;
	    act.push({
	        "name":"ButtonName",
	        "handler":function() {
	            var propsDialog = CQ.WCM.getDialog("/apps/<%= editContext.getComponent().getResourceType()%>/<%=customPagePropsFileName%>");
	            propsDialog.loadContent("<%= resource.getPath()%>");
	            propsDialog.show();
	        },
	        "text": CQ.I18n.getMessage("<%=customPagePropsButtonText%>")
	    });

	    var fct = function() {
            CQ.WCM.launchSidekick("<%= currentPage.getPath() %>", {
                propsDialog: "<%= dlgPath == null ? "" : dlgPath %>",
                locked: <%= currentPage.isLocked() %>,
                actions:act
            });
        };
        window.setTimeout(fct, 1);
    </script><%
}
%>
