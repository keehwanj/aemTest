<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.day.cq.wcm.api.components.DropTarget"%>
<%@page import="com.day.cq.wcm.foundation.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.day.cq.wcm.api.Page"%>
<%@page import="com.day.cq.wcm.foundation.Image"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Locale"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@include file="/libs/wcm/global.jsp"%>
<%
String lang = "fr";
Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
    lang = "en";
}

ArrayList<Object> list = new ArrayList<Object>();
//**IMPORTANT Part - creating array no matter what value is.
String[] destinations    = properties.get("destinations", String[].class) ;
String[] images          = properties.get("images", String[].class) ;  
String[] titles          = properties.get("titles", String[].class) ;    
String[] descriptions    = properties.get("descriptions", String[].class) ;   

int destinations_length=0;
if(destinations!=null){
    destinations_length=destinations.length;
} 


for (int i = 0; i < destinations_length; i++) {
    String destination=destinations[i];
    Page p = currentPage.getPageManager().getPage(destination);
    if (p != null) {
        list.add(p);
    } else if (destinations.length > 0) {
        list.add(destinations[i]);
    }
}

if (!list.isEmpty()) {
    out.write("<div id=\"vnbwCarousel\" class=\"carousel slide\" data-ride=\"carousel\">");
	out.write("<ol class=\"carousel-indicators\">");
	for (int i = 0; i < list.size(); i++) {
        if(i<1){%>
      		<li data-target="#vnbwCarousel" data-slide-to="<%=i%>" class="active"></li>
		<% }//end of if
        else{%>
      		<li data-target="#vnbwCarousel" data-slide-to="<%=i%>"></li>
		<%}//end of else
    }//end of for
    out.write("</ol>");


	out.write("<div class=\"carousel-inner\" role=\"listbox\">");
		for (int i = 0; i < list.size(); i++) {
        	if(i<1){%>
      			<div class="item active">
        			<img src="http://www2.gnb.ca/content/dam/gnb/Departments/petl-epft/images/YEF_promo.jpg" alt="Chania" class="img-responsive img-rounded">
        			<div class="carousel-caption">
          				<h3>Chania</h3>
          				<p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        			</div>
      			</div>
			<% }//end of if
			else{%>
      			<div class="item">
        			<img src="http://www2.gnb.ca/content/dam/gnb/Departments/nr-rn/images/CampLotsDraw_promo.jpg" alt="Chania" class="img-responsive img-rounded">
        			<div class="carousel-caption">
          				<h3>Chania</h3>
          				<p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        			</div>
      			</div>
			<%}//end of else
        }//end of for
    out.write("</div>");
	%>
		<!-- Left and right controls -->
		<a class="left carousel-control" href="#vnbwCarousel" role="button" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
		</a>
		<a class="right carousel-control" href="#vnbwCarousel" role="button" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
		</a>
	<%out.write("</div>");


}//end of if
else{ 
	%><cq:include script="empty.jsp"/><%
}//end of else



%>


<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
      <li data-target="#myCarousel" data-slide-to="5"></li>
      <li data-target="#myCarousel" data-slide-to="6"></li>        
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">

      <div class="item active">
        <img src="http://www2.gnb.ca/content/dam/gnb/Departments/petl-epft/images/YEF_promo.jpg" alt="Chania" class="img-responsive img-rounded">
        <div class="carousel-caption">
          <h3>Chania</h3>
          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        </div>
      </div>

      <div class="item">
        <img src="http://www2.gnb.ca/content/dam/gnb/Departments/nr-rn/images/CampLotsDraw_promo.jpg" alt="Chania" class="img-responsive img-rounded">
        <div class="carousel-caption">
          <h3>Chania</h3>
          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        </div>
      </div>

      <div class="item">
        <img src="http://www2.gnb.ca/content/dam/gnb/Departments/pa-ap/images/ForestFirePromo.jpg" alt="Flower" class="img-responsive img-rounded">
        <div class="carousel-caption">
          <h3>Flowers</h3>
          <p>Beatiful flowers in Kolymbari, Crete.</p>
        </div>
      </div>

      <div class="item">
        <img src="http://www2.gnb.ca/content/dam/gnb/Gateways/Promos/ABC_promo.jpg" alt="Flower" class="img-responsive img-rounded">
        <div class="carousel-caption">
          <h3>Flowers</h3>
          <p>Beatiful flowers in Kolymbari, Crete.</p>
        </div>
      </div>
      <div class="item">
        <img src="http://www2.gnb.ca/content/dam/gnb/Departments/petl-epft/images/YEF_promo.jpg" alt="Chania" class="img-responsive img-rounded">
        <div class="carousel-caption">
          <h3>Chania</h3>
          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        </div>
      </div>

      <div class="item">
        <img src="http://www2.gnb.ca/content/dam/gnb/Departments/nr-rn/images/CampLotsDraw_promo.jpg" alt="Chania" class="img-responsive img-rounded">
        <div class="carousel-caption">
          <h3>Chania</h3>
          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        </div>
      </div>

      <div class="item">
        <img src="http://www2.gnb.ca/content/dam/gnb/Departments/pa-ap/images/ForestFirePromo.jpg" alt="Flower" class="img-responsive img-rounded">
        <div class="carousel-caption">
          <h3>Flowers</h3>
          <p>Beatiful flowers in Kolymbari, Crete.</p>
        </div>
      </div>


    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
