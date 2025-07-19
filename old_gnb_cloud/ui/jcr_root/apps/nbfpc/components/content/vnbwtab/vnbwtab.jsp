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
    	<%if(i==0){%>
            <li class="active"><a data-toggle="tab" href="#<%=parameters[i]%>"><%=tab_title[i]%></a></li>

    	<%}
    	else{%>
            <li><a data-toggle="tab" href="#<%=parameters[i]%>"><%=tab_title[i]%></a></li>
    	<%}
	}%>
  </ul>
  <div class="tab-content">                
	<% for (int i = 0; i <= leng-1; i++) {%>
    	<%if(i==0){%>
      		<div id="<%=parameters[i]%>" class="tab-pane fade in active">
    			<p><cq:include path="<%=parameters[i]%>" resourceType="foundation/components/parsys" /></p>
			</div>            
    	<%}
    	else{%>
      		<div id="<%=parameters[i]%>" class="tab-pane fade">
				<p><cq:include path="<%=parameters[i]%>" resourceType="foundation/components/parsys" /></p>
			</div>        
    	<%}
	}%>
  </div>
<%}%>