<%@ include file="/libs/foundation/global.jsp" %>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%
//from setting    
String cookieName				=properties.get("cookieName","username");
int cookieDuration				=properties.get("cookieDuration",1);
String buttonOK					=properties.get("buttonOK","OK");
String buttonCancel				=properties.get("buttonCancel","Cancel");
String cancelLink				=properties.get("cancelLink","");
if(cancelLink.startsWith("/")){
	cancelLink=cancelLink+".html";
}

//from content
String modalTitle				=properties.get("modalTitle","Please enter modal title!");
String modalContent				=properties.get("modalContent","Please enter modal content!");
%>

<!--modal-->
<div id="gnbModal" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"><%=modalTitle%></h4>
            </div>
            <div class="modal-body">
                <%=modalContent%>
            </div>

			<div class="modal-footer">
                <form>
                    <button type="submit" class="btn btn-primary" onclick="setCookie('<%=cookieName%>', '<%=cookieName%>', <%=cookieDuration%>);"><%=buttonOK%></button>
                    <button type="button" class="btn btn-default" onclick="redirect();"><%=buttonCancel%></button>
                </form>
        	</div>            
        </div>
    </div>
</div>
<!--/modal-->
<%
if (WCMMode.fromRequest(request) == WCMMode.EDIT){%>
	<img src="/libs/widgets/0.gif" class="cq-text-placeholder" alt="">
<%
}
%>


<!--javascript/jquery-->
<script>
$(window).on('load', function() {
    let allcookies = document.cookie;

    if (!checkCookie("<%=cookieName%>")) {
        $('#gnbModal').modal('show');
    }
});

function setCookie(cname, cvalue, hours) {
    let d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    $('#gnbModal').modal('hide');
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(username) {
    var user = getCookie(username);
    //no cookie
    if (user != "") {
        return true;
    } else {
        return false;
    }
}

function redirect() {
    window.location = '<%=cancelLink%>';
}
</script>
<!--/javascript/jquery-->