<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%@ page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
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
      return "(" + first.toString() + ", " + second.toString() + ")";
    }
}

 //**IMPORTANT Part - creating array no matter what value is.
int leng				=0;
int links_text_length	=0;
int links_length		=0;

String[] links_text 	= properties.get("links_text", String[].class) ;
String[] links      	= properties.get("links", String[].class) ;  
boolean reverseOrder  	= properties.get("reverseOrder", false);
ArrayList<Pair<String, String>> list = new ArrayList<Pair<String, String>>();

if(links_text!=null){
	links_text_length=links_text.length;
}else{
	links_text_length=0;
} 

if(links!=null){
	links_length=links.length;
}else{
	links_length=0;
}   

leng=links_text_length;

if(links_length<=links_text_length){
	leng=links_length;  
} 


//display Reverse Order
if(reverseOrder){
	for (int i = leng-1; i >= 0; i--) {
    	String link = links[i].trim();
		String linkText = links_text[i];
        if(linkText.startsWith("/")){
    		linkText = linkText.split("/")[linkText.split("/").length-1];
        } 

        if (!link.equals("none")){
			list.add(new Pair<String, String>(link, linkText));
            //out.print("TEST");
            //out.print("<br/>");
        }

	}
}

if(!reverseOrder){
	for (int i = 0; i <= leng-1; i++) {
		String link = links[i].trim();

		if (link.equals("")){
			link="no link";
		}

		String linkText = links_text[i] ;
        if(linkText.startsWith("/")){
			linkText = linkText.split("/")[linkText.split("/").length-1];
        } 
        if (!link.equals("none")){
			list.add(new Pair<String, String>(link, linkText));
            //out.print("TEST"+i);
            //out.print("<br/>");
        }
	}
}


%>
<!--Start of In Page Nav-->
<%
if (!list.isEmpty()) {
%>
<div class="on-this-page pt-3">
    <ul>
	<%
	for (Pair<String, String> listitem : list) {
		if (listitem.getFirst().startsWith("/")) {
		%>
			<li><a href="<%=listitem.getFirst()%>.html"><%=listitem.getSecond()%></a></li>
		<%
		}else{
        %>
			<li><a href="<%=listitem.getFirst()%>"><%=listitem.getSecond()%></a></li>
        <%
		}
	}
	%>
   </ul>
</div>
<%
}else{
%>
	Please input data- In Page Nav
<%
}
%>

<!--END of In Page Nav-->