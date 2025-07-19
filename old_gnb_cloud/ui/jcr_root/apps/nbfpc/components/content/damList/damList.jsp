<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.t4g.cnb.utils.KeyComparator"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@page import="org.apache.sling.api.resource.ValueMap"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.wcm.commons.WCMUtils"%>
<%@page import="java.util.TreeMap"%>
<%@page import="java.text.Normalizer"%>
<%
List list = (List) request.getAttribute("list");
out.write("link");
%>
<table id="damList" class="table table-striped table-bordered display responsive nowrap" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>

            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
            </tr>

            <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
            </tr>
            <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
            </tr>            
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
    </table>

<script>
$(document).ready(function() {
    $('#damList').DataTable();
} );    
</script>