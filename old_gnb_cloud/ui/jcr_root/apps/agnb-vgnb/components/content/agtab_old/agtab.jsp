<%@include file="/libs/foundation/global.jsp"%>

<cq:includeClientLib css="ag.components.agtab"/>
<%
//getting values from dialog    
String[] tab_title = properties.get("tab_title", String[].class) ;
String[] parameters = properties.get("parameters", String[].class) ;  
String   parameter_name = properties.get("parameter_name", "");
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
	<ol id="toc">
	<% for (int i = 0; i <= leng-1; i++) {%>
    	<%if(i<leng-1){%>
			<li><a href="#<%=parameters[i]%>" class=" inactive"><span><%=tab_title[i]%></span></a></li>
    	<%}
    	else{%>
			<li><a href="#<%=parameters[i]%>" class=" active"><span><%=tab_title[i]%></span></a></li>
    	<%}
	}%>
	</ol>
	<% for (int i = 0; i <= leng-1; i++) {%>
    	<%if(i<leng-1){%>
			<div class="content inactive" id="<%=parameters[i]%>">
    			<p><cq:include path="<%=parameters[i]%>" resourceType="foundation/components/parsys" /></p>
			</div>            
    	<%}
    	else{%>
			<div class="content active" id="<%=parameters[i]%>">
				<p><cq:include path="<%=parameters[i]%>" resourceType="foundation/components/parsys" /></p>
			</div>        
    	<%}
	}%>
	<!--javascript included, tried with clientlibs without luck-->
	<script src="/etc/designs/agnb-vgnb/clientlib/js/activatables.js" type="text/javascript"></script>
	<script type="text/javascript">
		activatables('<%=parameter_name%>', [
		<% for (int i = 0; i <= leng-1; i++) {%>
        	<%if(i<leng-1){%>
				'<%=parameters[i]%>',
        	<%}
    		else {%>
				'<%=parameters[i]%>'
			<%}
    	}%>]);
	</script>
	<!--/data display-->
<%}%>
