<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/foundation/global.jsp"%>

<%
final class Pair<T, S> {
    private final T first;
    private final S second;


    public Pair(T f, S s) {
        first = f;
        second = s;

    }

    public T getFirst() {
      return first;
    }

    public S getSecond() {
      return second;
    }



    public String toString() {
      return "(" + first.toString() + ", " + second.toString() +")";
    }
}
%>
<%
//first tab
String button= properties.get("button", "");

//second tab
String termText= properties.get("termText", "");

//third tab
String[] url = properties.get("url", String[].class) ;

//fourth tab
String[] urlTitle      = properties.get("urlTitle", String[].class) ;  




ArrayList<Pair<String, String>> list = new ArrayList<Pair<String, String>>();

//**IMPORTANT Part - creating array no matter what value is.
int leng=0;
int url_length=0;
int urlTitle_length=0;


if(url!=null){
    url_length=url.length;
    out.print("url_length"+url_length);
    out.print("<br/>");
} 

if(urlTitle!=null){
    urlTitle_length=urlTitle.length;
    out.print("urlTitle_length"+urlTitle_length);
    out.print("<br/>");

}   


int min=999;
int intArray[] = {url_length, urlTitle_length}; //creating array
for(int i=0; i<intArray.length; i++) {
    if(intArray[i] < min)  // 
        min = intArray[i];  //
}

out.print(min);
out.print("<br/>");
%>

<span clas="first">Keehwan Jee</span>
<span class="second">    
    <select onChange="window.location.href=this.value">
        <option value="http://www.google.com">Google</option>
        <option value="http://www.aol.com">AOL</option>
    </select>
</span>
<br/>

<script type="text/javascript">
function openWindow(location){
    if(location == "#")return;
    window.open(location,'_self');
}
</script>

<span  class="first">Keehwan Jee</span>
<span  class="second">
    <select id="setit0" style="color: #0000FF" size="1" name="test">
        <option value="#">please choose</option>
        <option value="http://www.altavista.com">AltaVista</option>
        <option value="http://www.yahoo.com">Yahoo</option>
        <option value="http://www.google.com">Google</option>
        <option value="/content/gnb/en/news.html">GNB News</option>    
    </select>
    <input type="button" value="send" target="_self" onclick="openWindow(setit0.options[setit0.selectedIndex].value)">
</span>
<br/>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td  width="40%">Keehwan Jee</td>
    <td  width="60%">
        <select onChange="window.location.href=this.value">
            <option value="http://www.google.com">Google</option>
            <option value="http://www.aol.com">AOL</option>
        </select>
    </td>
  </tr>
</table>

<br/>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="30%">Keehwan Jee</td>
    <td width="auto">
        <select id="setit1" style="color: #0000FF" size="1" name="test">
            <option value="#">please choose</option>
            <option value="http://www.altavista.com">AltaVista</option>
            <option value="http://www.yahoo.com">Yahoo</option>
            <option value="http://www.google.com">Google</option>
            <option value="/content/gnb/en/news.html">GNB News</option>    
        </select>
    </td>
    <td width="36%">
        <input type="button" value="send" target="_self" onclick="openWindow(setit1.options[setit1.selectedIndex].value)">
    </td>
  </tr>
</table>