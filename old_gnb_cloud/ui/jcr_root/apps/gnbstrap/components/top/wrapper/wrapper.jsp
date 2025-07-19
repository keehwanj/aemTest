<%@page session="false" import="com.day.cq.wcm.api.WCMMode" %>
<%@include file="/libs/foundation/global.jsp" %>
<%@page import="java.util.ArrayList"%>
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
%>
<%
//getting values from dialog

String color	= properties.get("color", "wrapper-forest");
String header	= properties.get("header", "Most requested");

String[] links_text = properties.get("links_text", String[].class) ;
String[] links      = properties.get("links", String[].class) ; 

String[] links_text_2 = properties.get("links_text_2", String[].class) ;
String[] links_2      = properties.get("links_2", String[].class) ; 

ArrayList<Pair<String, String>> list = new ArrayList<Pair<String, String>>();
ArrayList<Pair<String, String>> list_2 = new ArrayList<Pair<String, String>>();

//setting smallest value to length
int leng				=0;
int links_text_length	=0;
int links_length		=0;

if(links_text!=null){
  links_text_length=links_text.length;
} 

if(links!=null){
  links_length=links.length;
}   

leng=links_text_length;

if(links_length<links_text_length){
    leng=links_length;  
} 


int leng_2				=0;
int links_text_length_2	=0;
int links_length_2		=0;

if(links_text_2!=null){
  links_text_length_2=links_text_2.length;
} 

if(links_2!=null){
  links_length_2=links.length;
}   

leng_2=links_text_length_2;

if(links_length_2<links_text_length_2){
    leng_2=links_length_2;  
} 
//1st items
for (int i = 0; i < leng; i++) {
	String link = links[i].trim();
	if (link.equals("")){
		link="none";
	}
	String linkText = links_text[i] ;

    if(linkText.startsWith("/")){ 
        linkText = linkText.split("/")[linkText.split("/").length-1];
    }

    if (!link.equals("none")){
		list.add(new Pair<String, String>(link, linkText));
    }
}

//2nd items
for (int i = 0; i < leng_2; i++) {
	String link_2 = links_2[i].trim();
	if (link_2.equals("")){
		link_2="none";
	}
	String linkText_2 = links_text_2[i] ;

    if(linkText_2.startsWith("/")){ 
        linkText_2 = linkText_2.split("/")[linkText_2.split("/").length-1];
    }

    if (!link_2.equals("none")){
		list_2.add(new Pair<String, String>(link_2, linkText_2));
    }
}

%>


<!--START of Wrapper-->
<div class="<%=color%> mb-4">
   <div class="container most-requested pt-4 pb-4">
      <div class="row">
         <div class="col-12 col-lg-4">
            <h2 class="text-white"><%=header%></h2>
         </div>
         <div class="col-12 col-md-6 col-lg-4">
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
         <div class="col-12 col-md-6 col-lg-4">
            <ul>
			<%
			for (Pair<String, String> listitem_2 : list_2) {
				if (listitem_2.getFirst().startsWith("/")) {
				%>
					<li><a href="<%=listitem_2.getFirst()%>.html"><%=listitem_2.getSecond()%></a></li>
				<%
				}else{
        		%>
					<li><a href="<%=listitem_2.getFirst()%>"><%=listitem_2.getSecond()%></a></li>
        		<%
				}
			}        
			%>   
            </ul>
         </div>
      </div>
   </div>
</div>
<!--END of Wrapper-->