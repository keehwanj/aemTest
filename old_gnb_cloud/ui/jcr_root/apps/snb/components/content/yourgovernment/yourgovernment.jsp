<%@ include file="/libs/wcm/global.jsp"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="com.day.cq.wcm.api.WCMMode"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>
<%
/*Triple class*/
final class Triple<T, L, D> {
	public Triple(T t, L l, D d) {
    	title = t;
		link = l;
      	description = d;  
    }

    public T getTitle() {
      return title;
    }

    public L getLink() {
        //if(link.startsWith("/content")){
        //link=link+".html";
        //}
      	return link;
    }

    public D getDescription() {
      return description;
    }      

    public String toString() {
      return "(" + title.toString() + ", " + link.toString()+ ", " + description.toString() + ")";
    }

	private final T title;
    private final L link;
	private final D description;      
}

ArrayList<Triple<String, String, String>> list = new ArrayList<Triple<String, String, String>>();

int min					=0;
int titles_leng			=0;
int links_leng			=0;
int descriptions_leng	=0;

String generalTitle 	= properties.get("generalTitle", "Your government");
String backgroundImage 	= properties.get("backgroundImage", "/etc/designs/snb-bootstrap/clientlibs/newImages/your-gov-bgr.jpg");

String[] titles 		= properties.get("titles", String[].class) ;
String[] links  		= properties.get("links", String[].class) ;  
String[] descriptions	= properties.get("descriptions", String[].class) ;  

if(titles!=null){
	titles_leng	=titles.length;
}	
//out.print(titles_leng);
if(links!=null){
	links_leng	=links.length;
}	

if(descriptions!=null){
	descriptions_leng	=descriptions.length;
}	

min =Math.min(Math.min(titles_leng, links_leng), descriptions_leng);

for (int i = 0; i < min; i++) {
	String link 	= links[i].trim();
	if(link.equals(""))
	{
		link	="nolink";
	}    
    String title 		= titles[i];
    if(title.startsWith("/")) {
    	title = title.split("/")[title.split("/").length-1];
    }
    String description 	= descriptions[i];
    //out.print(link);
    //out.print("<br/>");

    list.add(new Triple<String, String, String>(title, link, description));
}
%>
    <!-- Your government container-->
    <div class="your-gov-container" id="your-gov-container">
        <div class="row">
            <!-- Your government content-->
            <div class="col-12 col-md-8 your-gov-content">
                <!-- Your government title-->
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <h4 class="title_columncontrol"><%=generalTitle%></h4><br>
                    </div>
                </div>
                <!-- / End your government title-->

                <!-- Your government items-->
                <div class="row">
                    <%for(Triple<String, String, String> listitem : list) {%>
                    <div class="col-12 col-lg-6 content">
					<%	String link=listitem.getLink();
						if(link.startsWith("/content")){
							link=link+".html";
						}%>
                        <a href="<%=link%>"><%=listitem.getTitle()%></a>
                        <p><%=listitem.getDescription()%></p>
                    </div>
                    <%}%>
                </div>
                <!-- End your government items-->
            </div>
            <!-- End your government content-->
        </div>
     </div>
     <!-- / End your government container-->   

<script>
    document.getElementById('your-gov-container').style.backgroundImage="url(<%=backgroundImage%>)"; 
</script>
