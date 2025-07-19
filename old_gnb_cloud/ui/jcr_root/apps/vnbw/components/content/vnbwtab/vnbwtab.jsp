<%@include file="/libs/foundation/global.jsp"%>
<%
//getting values from dialog    
String[] tab_title = properties.get("tab_title", String[].class) ;
String[] parameters = properties.get("parameters", String[].class) ;  

//setting length of two array
int leng=0;
int tab_title_length=0;
int parameters_length=0;

if(tab_title!=null){
	tab_title_length=tab_title.length;
} 

if(parameters!=null){
	parameters_length=parameters.length;
}   

//setting leng with less array lenth
leng=tab_title_length;
if(parameters_length<tab_title_length){
	leng=parameters_length;  
}
%>


<!--in case of no data-->
<%if(leng==0){
    %><img src="/libs/cq/ui/resources/0.gif" class="cq-list-placeholder" alt=""><%
}
else{//in case of data inputed
    %>
	<!--data display-->
  <ul class="nav nav-tabs nav-justified" role="tablist">
	<% for (int i = 0; i <= leng-1; i++) {%>
    	<%if(i<leng-1){%>
            <li><a data-toggle="tab" href="#<%=parameters[i]%>"><%=tab_title[i]%></a></li>

    	<%}
    	else{%>
            <li class="active"><a data-toggle="tab" href="#<%=parameters[i]%>"><%=tab_title[i]%></a></li>
    	<%}
	}%>
  </ul>
  <div class="tab-content">                
	<% for (int i = 0; i <= leng-1; i++) {%>
    	<%if(i<leng-1){%>
      		<div id="<%=parameters[i]%>" class="tab-pane fade">
    			<p><cq:include path="<%=parameters[i]%>" resourceType="foundation/components/parsys" /></p>
			</div>            
    	<%}
    	else{%>
      		<div id="<%=parameters[i]%>" class="tab-pane fade in active">
				<p><cq:include path="<%=parameters[i]%>" resourceType="foundation/components/parsys" /></p>
			</div>        
    	<%}
	}%>
  </div>
<%}%>

<!--
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Menu 0</a></li>
    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>Menu 0</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </div>

-->