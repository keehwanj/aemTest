<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/foundation/global.jsp"%>

<%
//first tab
String button= properties.get("button", "");
String id= properties.get("id", "");
//second tab
String title= properties.get("title", "");

//third tab
String[] url = properties.get("url", String[].class) ;

//fourth tab
String[] urlTitle      = properties.get("urlTitle", String[].class) ;  

//**IMPORTANT Part - creating array no matter what value is.
int leng=0;
int url_length=0;
int urlTitle_length=0;


if(url!=null){
    url_length=url.length;
} 

if(urlTitle!=null){
    urlTitle_length=urlTitle.length;
}   

//finding min value
int min=999;
int intArray[] = {url_length, urlTitle_length}; //creating array
for(int i=0; i<intArray.length; i++) {
    if(intArray[i] < min)  // 
        min = intArray[i];  //
}

%>

<span clas="first"><%=title%></span>
<span class="second">    
    <select onChange="window.location.href=this.value">
        <%for(int i=0; i<min; i++) {
             if (url[i].startsWith("/")) {
            %>
            <option value="<%=url[i]%>.html"><%=urlTitle[i]%></option>
            <%}
            else{%>
            <option value="<%=url[i]%>"><%=urlTitle[i]%></option>            
            <%}
        }%>
    </select>
</span>
<br/>

<script type="text/javascript">
function openWindow(location){
    if(location == "#"){
        return;
    }
    window.open(location,'_self');
}
</script>

<span  class="first"><%=title%></span>
<span  class="second">
    <select id="<%=id%>" style="color: #0000FF" size="1" name="test">
        <option value="#">please choose</option>
        <%for(int i=0; i<min; i++) {
             if (url[i].startsWith("/")) {
            %>
            <option value="<%=url[i]%>.html"><%=urlTitle[i]%></option>
            <%}
            else{%>
            <option value="<%=url[i]%>"><%=urlTitle[i]%></option>            
            <%}
        }%>

    </select>
    <input type="button" value="send" target="_self" onclick="openWindow(<%=id%>.options[<%=id%>.selectedIndex].value)">
</span>
<br/>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td  width="40%"><%=title%></td>
    <td  width="60%">
        <select onChange="window.location.href=this.value">
            <option value="#">please choose</option>        
        <%for(int i=0; i<min; i++) {
             if (url[i].startsWith("/")) {
            %>
            <option value="<%=url[i]%>.html"><%=urlTitle[i]%></option>
            <%}
            else{%>
            <option value="<%=url[i]%>"><%=urlTitle[i]%></option>            
            <%}
        }%>
        </select>
    </td>
  </tr>
</table>

<br/>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="30%"><%=title%></td>
    <td width="200">
        <select id="setit1" style="color: #0000FF" size="1" name="test">
            <option value="#">please choose</option>
        <%for(int i=0; i<min; i++) {
             if (url[i].startsWith("/")) {
            %>
                <option value="<%=url[i]%>.html"><%=urlTitle[i]%></option>
            <%}
            else{%>
                <option value="<%=url[i]%>"><%=urlTitle[i]%></option>            
            <%}
        }%>
         </select>
    </td>
    <td width="36%">
        <input type="button" value="send" target="_self" onclick="openWindow(setit1.options[setit1.selectedIndex].value)">
    </td>
  </tr>
</table>