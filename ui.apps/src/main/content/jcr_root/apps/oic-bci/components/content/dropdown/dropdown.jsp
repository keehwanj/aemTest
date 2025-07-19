<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="java.util.Locale"%>
<%@page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>
<%@include file="/libs/foundation/global.jsp"%>

<%
  // Get language and content bundle for that language
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if ((locale == null) || (locale.getLanguage().equalsIgnoreCase("en"))) {
  lang = "en";
}
%>
<cq:setContentBundle language="<%=lang%>" />

<%
//first tab
String optionText= properties.get("optionText", "");
//setting header text for English/French
if(optionText.equalsIgnoreCase("")){
    optionText=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "optionText"));
} 
//second tab
String title= properties.get("title", "");
String gtm_value= properties.get("gtm_value", "");

//third tab
String[] url = properties.get("url", String[].class) ;

//fourth tab
String[] urlTitle      = properties.get("urlTitle", String[].class) ;  

//fifth tab
String[] open      = properties.get("open", String[].class) ;  

//**IMPORTANT Part - creating array no matter what value is.
int leng=0;
int url_length=0;
int urlTitle_length=0;
int open_length=0;


if(url!=null){
    url_length=url.length;
} 

if(urlTitle!=null){
    urlTitle_length=urlTitle.length;
}   

if(open!=null){
    open_length=open.length;
}   
//out.print(open_length);
//finding min value
int min=999;
int intArray[] = {url_length, urlTitle_length,open_length}; //creating array
for(int i=0; i<intArray.length; i++) {
    if(intArray[i] < min)  // 
        min = intArray[i];  //
}

%>
<script type="text/javascript">
function openWindow(location, open){
    if(location == "#"){
        return;
    }
    // _trackEvent("downloads", "pdf", location)
    window.open(location, open);
}
</script>
  <form class="form-horizontal" role="form">
<div class="form-group">
  <label for="dropdown" class="col-sm-5" ><%=(title)%></label>
  <div class="col-sm-7">  
  <select class="form-control <%=xssAPI.encodeForHTML(gtm_value.trim())%>" id="dropdown" name="<%=(gtm_value.trim())%>" onChange="openWindow(this.value, this.options[this.selectedIndex].getAttribute('target'))">
            <option value="#"><%=optionText%></option>        
                <%for(int i=0; i<min; i++) {
                    if (url[i].startsWith("/")) {
                        if((url[i].endsWith(".pdf"))||(url[i].endsWith(".jpg"))||(url[i].endsWith(".gif"))){%>
                            <option value="<%=(url[i].trim())%>" target="<%=(open[i].trim())%>"><%=(urlTitle[i].trim())%></option>                        
                        <%}
                        else{%>
                            <option value="<%=(url[i].trim())%>.html" target="<%=(open[i].trim())%>"><%=(urlTitle[i].trim())%></option>                        
                        <%}%>
                    <%}
                    else{%>
                        <option value="<%=(url[i].trim())%>" target="<%=(open[i].trim())%>"><%=(urlTitle[i].trim())%></option>            
                    <%}
                }%>
  </select>
  </div>    
</div>
  </form>