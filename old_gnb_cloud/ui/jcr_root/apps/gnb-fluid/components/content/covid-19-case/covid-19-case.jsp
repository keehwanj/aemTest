<%@include file="/libs/foundation/global.jsp" %>

<%
String top_title	= properties.get("top_title", "Cases in New Brunswick");
String updated		= properties.get("updated", "Updated date");

String totalCases_text		= properties.get("totalCases_text", "Total Cases");
String activeCases_text		= properties.get("activeCases_text", "Active Cases");
String recoveredCases_text	= properties.get("recoveredCases_text", "Recovered Cases");
String deaths_text			= properties.get("deaths_text", "Deaths");
String hospitalizedCases_text	= properties.get("hospitalizedCases_text", "Hospitalized Cases");
String icuCases_text			= properties.get("icuCases_text", "ICU Cases");
String totalTests_text			= properties.get("totalTests_text", "Total Tests");

String totalCases_num		= properties.get("totalCases_num", "98");
String activeCases_num		= properties.get("activeCases_num", "70");
String recoveredCases_num	= properties.get("recoveredCases_num", "28");
String deaths_num			= properties.get("deaths_num", "0");
String hospitalizedCases_num	= properties.get("hospitalizedCases_num", "4");
String icuCases_num			= properties.get("icuCases_num", "1");
String totalTests_num		= properties.get("totalTests_num", "5,348");

String bottom_1			= properties.get("bottom_1", "More information on cases and testing");
String link_1			= properties.get("link_1", "https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html");
String bottom_2			= properties.get("bottom_2", "Potential Public Exposures");
String link_2			= properties.get("link_2", "https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html");
String bottom_3			= properties.get("bottom_3", "For the latest Canadian updates, visit the ");
String bottom_3_1		= properties.get("bottom_3_1", "Public Health Agency of Canada website");
String link_3			= properties.get("link_3", "https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html");


%>

    <!-- Cases in New Brunswick-->
    <div id="cases" class="part part-cases part-bgr-img">
        <div class="container">

            <!-- Title -->
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h2 class="text-center text-lg-left text-white"><%=top_title%></h2>
                </div>
                <div class="col-12 col-lg-6">
                    <p class="text-center text-lg-right text-white"><%=updated%></p>
                </div>
            </div>

            <div class="row">

                <div class="col-12 col-md-4 mb-2">
                    <div class="card card-cases text-center mb-2">
                        <div class="card-body">
                            <h2 class="blue"><%=totalTests_num%></h2>
                            <p><%=totalTests_text%></p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 mb-2">
                    <div class="card card-cases text-center mb-2">
                        <div class="card-body">
                            <h2 class="orange"><%=totalCases_num%></h2>
                            <p><%=totalCases_text%></p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 mb-2">
                    <div class="card card-cases text-center mb-2">
                        <div class="card-body">
                            <h2 class="red"><%=activeCases_num%></h2>
                            <p><%=activeCases_text%></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-12 col-md-3 mb-2">
                    <div class="card card-cases text-center mb-2">
                        <div class="card-body">
                            <h2 class="green"><%=recoveredCases_num%></h2>
                            <p><%=recoveredCases_text%></p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-2">
                    <div class="card card-cases text-center mb-2">
                        <div class="card-body">
                            <h2 class="orange"><%=hospitalizedCases_num%></h2>
                            <p><%=hospitalizedCases_text%></p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-2">
                    <div class="card card-cases text-center mb-2">
                        <div class="card-body">
                            <h2 class="red"><%=icuCases_num%></h2>
                            <p><%=icuCases_text%></p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-2">
                    <div class="card card-cases text-center mb-2">
                        <div class="card-body">
                            <h2 class="black"><%=deaths_num%></h2>
                            <p><%=deaths_text%></p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col mt-4">
                    <p class="text-center text-white"><a href="<%=link_1%>"><%=bottom_1%></a></p> <!-- NEED UPDATED LINK HERE -->
                    <p class="text-center"><a href="<%=link_2%>" type="button" class="btn btn-primary"><i class="fa fa-exclamation-triangle"></i> <%=bottom_2%></a></p>
                    <p class="text-center text-white"><%=bottom_3%> <a href="<%=link_3%>"><%=bottom_3_1%></a></p>
                </div>
            </div>

        </div>
    </div>
    <!-- / Cases in New Brunswick-->
