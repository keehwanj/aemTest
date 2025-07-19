<%@page session="false"%><%--
  ADOBE CONFIDENTIAL
  __________________

   Copyright 2013 Adobe Systems Incorporated
   All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe Systems Incorporated and its suppliers,
  if any.  The intellectual and technical concepts contained
  herein are proprietary to Adobe Systems Incorporated and its
  suppliers and are protected by trade secret or copyright law.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe Systems Incorporated.
--%><%
%><%--
  ==============================================================================

  Simulator init script.

  Draws the simulator initialization code. This is usually called by the head.jsp
  of the page.

  AdobePatentID="2994US01"

  ==============================================================================                                     CQ-27555
Responsive Simulator is loaded in touch environment

--%><%
%><%@ page import="com.day.cq.wcm.mobile.api.device.DeviceGroup,
                   com.day.cq.wcm.mobile.api.device.DeviceGroupList,
                   com.day.cq.wcm.emulator.Emulator,
                   com.day.cq.wcm.api.AuthoringUIMode,
                   com.day.cq.wcm.api.WCMMode,
                   com.adobe.granite.ui.clientlibs.HtmlLibraryManager,
                   java.util.List" %>
<%
%><%@include file="/libs/foundation/global.jsp"%><%

    /**
     *
     * Device simulator and its config only needs to be injected when in author mode
     *
     */
    AuthoringUIMode authoringUIMode = AuthoringUIMode.fromRequest(slingRequest);

    if (WCMMode.fromRequest(request) != WCMMode.DISABLED && (authoringUIMode != null && authoringUIMode == AuthoringUIMode.CLASSIC)) {

        // include all the necessary CSS and JS for running the device simulator
        final HtmlLibraryManager htmlMgr = sling.getService(HtmlLibraryManager.class);
        if (htmlMgr != null) {
            //Include WCM Emulator JS only
            htmlMgr.writeJsInclude(slingRequest, out, "cq.wcm.emulator");
            //Include device simulator JS and CSS
            htmlMgr.writeIncludes(slingRequest, out, "cq.wcm.mobile.simulator");
        }

        // retrieve the device groups assigned to this page or any above in the hierarchy
        final DeviceGroupList deviceGroups = currentPage.adaptTo(DeviceGroupList.class);
        if (null != deviceGroups) {

%><script type="text/javascript">
    CQ.WCM.setPreviewMode(CQ.WCM.PREVIEW_RESPONSIVE);
    CQ.Ext.onReady(function() {
        var config = {
            defaultEmulator: "desktop",
            emulatorConfigs: {
        <%
        String delim = "";

        for (final DeviceGroup group : deviceGroups) {
            final List<Emulator> emulators = group.getEmulators();
            for (final Emulator emulator : emulators) {
            %><%=delim%>
                <%= xssAPI.encodeForJSString(emulator.getName()) %>: {
                    plugins: {
                <%
                if (emulator.canRotate()) {
                %>      "rotation": {
                            ptype: CQ.wcm.emulator.plugins.RotationPlugin.NAME,
                            config: {
                                defaultDeviceOrientation: "vertical"
                            }
                        }
                <%
                }
                %>  },
                    group: "<%= xssAPI.encodeForJSString(group.getName()) %>",
                    title: "<%= xssAPI.encodeForJSString(emulator.getTitle()) %>",
                    width: <%= emulator.getWidth() %>,
                    height: <%= emulator.getHeight() %>,
                    "device-pixel-ratio": <%= emulator.getPixelRatio() %>
                }<%
                   delim = ",";
            }
        }%>
            }
        };

        var simulator = CQ.WCM.getDeviceSimulator();
        simulator.launch(config);
    });
</script><%
        } else {
            log.warn("mobile page [{}]: no device groups, cannot initialize emulators.", currentPage.getPath());
        }
    }
%>
