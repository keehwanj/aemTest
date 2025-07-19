<%@ include file="/libs/foundation/global.jsp" %>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="com.day.cq.wcm.api.WCMMode"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>
<%@ page import="com.day.cq.dam.api.Asset"%>
<%@ page import="org.apache.sling.api.resource.ResourceUtil"%>
<%@ page import="java.util.Locale"%>
<%@ page import="javax.jcr.Property"%>
<%@ page import="javax.jcr.Value"%>


<%

final Resource p_resource = resource;

//======Start
//finding the proper language
String lang = "fr";
String lang1 = "_F";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
    lang1 = "_E";
}
//======End
%>
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

//getting values from dialog
String panelColor      	= properties.get("panelColor", "panel-primary");
String headerTitle      = properties.get("headerTitle", "Subscription List");
String subscribeText	= properties.get("subscribeText", "click here");
String modalID			= properties.get("modalID", "myModal");

//adding reverse order checkbox
boolean reverseOrder  	= properties.get("reverseOrder", false);

//hiding list items on subscription
boolean hideList  		= properties.get("hideList", false);


ArrayList<Pair<String, String>> list = new ArrayList<Pair<String, String>>();

//**IMPORTANT Part - creating array no matter what value is.
int leng				=	0;
int links_text_length	=	0;
int links_length		=	0;

String[] links_text = properties.get("links_text", String[].class) ;
String[] links      = properties.get("links", String[].class) ; 

if(links_text!=null){
	links_text_length	=	links_text.length;
} 

if(links!=null){
	links_length	=	links.length;
}   

leng=links_text_length;

if(links_length < links_text_length){
	leng	=	links_length;  
} 

//display Reverse Order
if(reverseOrder){
	for (int i = leng-1; i >= 0; i--) {
    	String link = links[i].trim();
        String linkText = links_text[i];
        if (link.equals("")){
			link="nolink";
		}
        if(linkText.startsWith("/")){ 
            linkText = linkText.split("/")[linkText.split("/").length-1];
        }
        if (!link.equals("none")){
			list.add(new Pair<String, String>(link, linkText));
        }
	}
}

//display as it is
if(!reverseOrder){
	for (int i = 0; i <= leng-1; i++) {
		String link 	= links[i].trim();

		if (link.equals("")){
                link	="no link";
		}
		String linkText = links_text[i] ;

        if(linkText.startsWith("/")) {
			linkText 	= linkText.split("/")[linkText.split("/").length-1];
        }

        if (!link.equals("none")){
            list.add(new Pair<String, String>(link, linkText));//1)link, 2)linkText
        }
	}
}

if (!list.isEmpty()) { %>
	<!--START of panel-->
	<div class="panel <%=panelColor%>">
    	<div class="panel-heading">
        	<%=headerTitle%>
    	</div>
    	<div class="panel-body">
			<cq:include path="sub_par" resourceType="foundation/components/parsys"/>
	<%
    /** START of MAIN code**/
    for (Pair<String, String> listitem : list) {
      if (listitem.getFirst().startsWith("/")) {

		String link 			= listitem.getFirst();
        String title_d 			= listitem.getSecond();  

        String title 			= ""; // title
		String jcrTitle 		= ""; // jcr:title property -3
		String navTitle 		= "";// navTitle property -2
		String pageTitle 		= "";// pageTitle property -1
        String dam_title		= "";

		String subscription		= "";
       	String subscriptionID	= "";

        String navItem="";  
        Page itemPage 	= null;
    	ValueMap props 	= null;  
        Object[] cqtag=null;  

        //START - IN CASE of page
          if(link.contains("/content/gnb")||link.contains("/content/snb")||link.contains("/content/myid-monid")||link.contains("/content/agnb-vgnb")||link.contains("/content/wcat-taat")||link.contains("/content/wel-bien")||link.contains("/content/enb")){
	        itemPage 		= pageManager.getPage(link);
    	    props 			= itemPage.getProperties();

        	jcrTitle  		= (String) props.get("jcr:title");  
            navTitle  		= (String) props.get("navTitle");  
            pageTitle  		= (String) props.get("pageTitle");
              //out.print(pageTitle);

			subscription  	= (String) props.get("subscription");  
        	subscriptionID  = (String) props.get("subscriptionID");  

            //title 	= pageTitle != "" ? pageTitle : title_d != "" ? title_d : navTitle;
            //title 	= jcrTitle != null ? jcrTitle : title_d != "" ? title_d : pageTitle;  
            title = !title_d.isEmpty()? title_d : jcrTitle != null ? jcrTitle : pageTitle;
            title	= title.replace('\"','\'');
            title	= title.replace("#","");
            title	= title.replace("%","");
            title	= title.replace("^","");
            title   = title.replace(":","");
			title   = title.replace("&","");






            //new code for checking tags  
            cqtag = (Object[])props.get("cq:tags") ;

              //Property cqtag = (Property)props.get("cq:tags");
              //Value[] values = cqtag.getValues();  


            //hiding list item
            if(!hideList){
				navItem=String.format("<p><a href=\"%s\"><span class=\"glyphicon glyphicon-triangle-right %s\"></span>%s</a></p>",link+".html", subscriptionID, title);
            }

        }  
		//END - IN CASE of page

        //START - IN CASE of DAM  
        else if(link.contains("/content/dam")){
            //Resource resource = resourceResolver.getResource(link); 

            Resource res 				= resourceResolver.getResource(link); 
			Resource metadataResource 	= res.getChild("jcr:content/metadata");

            props 						= ResourceUtil.getValueMap(metadataResource);

           	dam_title 					= (String) props.get("dam:title"+lang1);  

            subscription 				= props.get("subscription", "false");
			subscriptionID 				= props.get("subscriptionID", "");   

            //new code for checking tags
            cqtag = (Object[])props.get("cq:tags") ;

            //title 	= dam_title != null ? dam_title : title_d; 
                if(title_d!=null && !title_d.trim().isEmpty()){
					title	=title_d;
					title	= title.replace('\"','\'');
    	        	title	= title.replace("#","");
        	    	title	= title.replace("%","");
            		title	= title.replace("^","");
	                title   = title.replace(":","");
					title   = title.replace("&","");



                }
                else if(dam_title!=null && !dam_title.trim().isEmpty()){
					title 	= dam_title;
					title	= title.replace('\"','\'');
    	        	title	= title.replace("#","");
        	    	title	= title.replace("%","");
            		title	= title.replace("^","");
	                title   = title.replace(":","");
					title   = title.replace("&","");



                }            


            //hiding list item
			if(!hideList){
            	navItem=String.format("<p><a href=\"%s\"><span class=\"glyphicon glyphicon-triangle-right %s\"></span>%s</a></p>",link, subscriptionID, title);
			}

        }
		//END - IN CASE of DAM  
          //if(!title.trim().isEmpty() && cqtag!=null && cqtag.length!=0 && subscriptionID != null && !subscriptionID.trim().isEmpty() && subscription!=null && !subscription.equalsIgnoreCase("")&& !subscription.equalsIgnoreCase("false")){
			out.write(navItem);
          //}

      } else {
          //out.write(String.format("<li><a class=\"external\" href=\"%s\">%s</a></li>", listitem.getFirst(), listitem.getSecond()));
      }
    }
	/** END of MAIN code**/
    %>
		<!--START of calling Accodion-->
        <button type="button" class="btn btn-info pull-right" data-toggle="collapse" data-target="#<%=modalID%>"><%=subscribeText%></button>    
 		<!--END of calling Accodion-->

		</div>
	</div>
	<!--END of panel-->   
<%
} else {
	%><img src="/libs/cq/ui/resources/0.gif" class="cq-list-placeholder" alt=""><%
}
%>

<!--<%= resource.getPath() %>.html or <%= currentNode.getPath() %>.html-->

<!--START of ACCODION-->
<!-- Accodion -->
<div class="collapse" id="<%=modalID%>">
	  <% String accodionSubscriptionForm = resource.getPath() + ".accodion."+slingRequest.getRequestPathInfo().getSelectorString()+".html"; %>
	  <sling:include path="<%= accodionSubscriptionForm %>" />
</div>
<!-- Accodion -->
<!--END of ACCODION-->