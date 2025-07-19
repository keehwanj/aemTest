<%@ include file="/libs/foundation/global.jsp"%>
<%@ page session="false"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourcePool" %>
<%@ page import="javax.sql.DataSource" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.SQLException" %>

<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.ResultSet"%>

<%@ page import="java.util.Locale"%>
<%@ page import="javax.servlet.jsp.jstl.fmt.LocaleSupport"%>

<%@ page import="java.util.*" %>

<%@ page import="java.sql.*" %> 
<%@ page import="java.io.*" %>
<%@ page import="javax.swing.ImageIcon;" %>

<%
//finding the proper language
String lang = "fr";
String language="French";
String type="TypeF";

//random number for table sorting
Random randomValue=new Random();
int ran_num=(Math.abs(randomValue.nextInt())%4);
int ran_num1=(Math.abs(randomValue.nextInt())%2);
String sorting="asc";
if(ran_num1==1){
	sorting="desc";
}

Locale locale = currentPage.getLanguage(true);
if (locale == null || locale.getLanguage().equalsIgnoreCase("en")) {
   	lang = "en";
	language="English";
    type="TypeE";
}

//getting data source pool from dialog and setting it.
String show_entries = properties.get("show_entries", "");
if(show_entries.equalsIgnoreCase("")){
	show_entries="10";
} 

%>
<cq:setContentBundle language="<%=lang%>" />
<link href="https://cdn.datatables.net/buttons/1.2.1/css/buttons.dataTables.min.css" rel="stylesheet" type="text/css">
<script src="https://cdn.datatables.net/buttons/1.2.1/js/dataTables.buttons.min.js"></script>
<script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.flash.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
<script src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
<script src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
<script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.html5.min.js"></script>
<script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.print.min.js"></script>

<%
//setting header tab for English/French
String artist_key = properties.get("artist_key", "");
if(artist_key.equalsIgnoreCase("")){
	artist_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "artist_key"));
} 

String title_key = properties.get("title_key", "");
if(title_key.equalsIgnoreCase("")){
	title_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "title_key"));
} 

String category_key = properties.get("category_key", "");
if(category_key.equalsIgnoreCase("")){
  	category_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "category_key"));
} 

String yearCreated_key = properties.get("yearCreated_key", "");
if(yearCreated_key.equalsIgnoreCase("")){
   	yearCreated_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "yearCreated_key"));
} 

String yearPurchased_key = properties.get("yearPurchased_key", "");
if(yearPurchased_key.equalsIgnoreCase("")){
   	yearPurchased_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "yearPurchased_key"));
} 

String imageName_key = properties.get("imageName_key", "");
if(imageName_key.equalsIgnoreCase("")){
   	imageName_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "imageName_key"));
} 

String dimension_key = properties.get("dimension_key", "");
if(dimension_key.equalsIgnoreCase("")){
	dimension_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "dimension_key"));
} 


//setting modal tab for English/French
String artist_m_key = properties.get("artist_m_mkey", "");
if(artist_m_key.equalsIgnoreCase("")){
   	artist_m_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "artist_m_key"));
} 

String title_m_key = properties.get("title_m_key", "");
if(title_m_key.equalsIgnoreCase("")){
   	title_m_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "title_m_key"));
} 

String category_m_key = properties.get("category_m_key", "");
if(category_m_key.equalsIgnoreCase("")){
   	category_m_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "category_m_key"));
} 

String yearCreated_m_key = properties.get("yearCreated_m_key", "");
if(yearCreated_m_key.equalsIgnoreCase("")){
   	yearCreated_m_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "yearCreated_m_key"));
} 

String yearPurchased_m_key = properties.get("yearPurchased_m_key", "");
if(yearPurchased_m_key.equalsIgnoreCase("")){
   	yearPurchased_m_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "yearPurchased_m_key"));
} 

String modal_title_key = properties.get("modal_title_key", "");
if(modal_title_key.equalsIgnoreCase("")){
   	modal_title_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "modal_title_key"));
} 

String close_key = properties.get("close_key", "");
if(close_key.equalsIgnoreCase("")){
	close_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "close_key"));
} 

//Buttons text
//setting button text for English/French
String copy_key = properties.get("copy_key", "");
if(copy_key.equalsIgnoreCase("")){
   	copy_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "copy_key"));
} 

String csv_key = properties.get("csv_key", "");
if(csv_key.equalsIgnoreCase("")){
   	csv_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "csv_key"));
} 

String excel_key = properties.get("excel_key", "");
if(excel_key.equalsIgnoreCase("")){
   	excel_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "excel_key"));
} 

String pdf_key = properties.get("pdf_key", "");
if(pdf_key.equalsIgnoreCase("")){
   	pdf_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "pdf_key"));
} 

String print_key = properties.get("print_key", "");
if(print_key.equalsIgnoreCase("")){
   	print_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "print_key"));
} 



//setting resource tab for English/French
String null_key = properties.get("null_key", "");
if(null_key.equalsIgnoreCase("")){
	null_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "null_key"));
} 

String noDimension_key = properties.get("noDimension_key", "");
if(noDimension_key.equalsIgnoreCase("")){
	noDimension_key=String.format("%s", LocaleSupport.getLocalizedMessage(pageContext, "noDimension_key"));
} 

%>
<script>
$(document).ready(function() {
    $('#artbank').DataTable( {
        "language": {"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/<%=language%>.json"},
        "iDisplayLength": <%=show_entries%>,        
        //dom: 'Bfrtip',
        dom: 'lBfrtip',
   		buttons: [
        {
            extend: 'copy',
            text: '<%=copy_key%>'
        },
        {
            extend: 'csv',
            text: '<%=csv_key%>'
        },
        {
            extend: 'excel',
            text: '<%=excel_key%>'
        },

        {
            extend: 'pdf',
            text: '<%=pdf_key%>'
        },

        {
            extend: 'print',
            text: '<%=print_key%>'
        }
    ]
    } );
} );
</script>
<%

//database connection    
DataSourcePool dspService = sling.getService(DataSourcePool.class);
 try {
    //getting data source pool from dialog and setting it.
    String database = properties.get("database", "");
    if(database.equalsIgnoreCase("")){
    	database="AEMArtbankDev";
	} 
     DataSource ds = (DataSource) dspService.getDataSource(database);   

     if(ds != null) {
		final Connection connection = ds.getConnection();
        final Statement statement = connection.createStatement();
        //It is better to use stored procedure, but we don't have dba admin resources for it.

		String sql="SELECT "; 
		sql=sql+"STUFF((SELECT ' '+ P.strLastName + ', ' + P.strFirstName + '; ' "; 
		sql=sql+"FROM dbo.tblArtistXArtWork AS AxAW ";
		sql=sql+"INNER JOIN dbo.tblArtist AS A ON AxAW.intArtistId = A.intArtistId ";
		sql=sql+"INNER JOIN dbo.tblPerson AS P ON A.intPersonId = P.intPersonId ";
		sql=sql+"WHERE AxAW.intArtWorkId =  aw.intArtWorkId  ";
		sql=sql+"FOR XML PATH('')), 1, 1, '') AS ArtistName ";
		sql=sql+", ";

		sql=sql+"aw.intArtWorkId as ArtWorkId, ";
		sql=sql+"aw.strAccessionNumber as strAccessionNumber, ";         
		sql=sql+"aw.strOriginalTitle as TitleOfWork, ";         
		sql=sql+"Year(aw.datWork) as YearCreated,";
		sql=sql+"aw.imgPicture as imgPicture, "; 
		sql=sql+"aw.numWidth as imgWidth, ";   
		sql=sql+"aw.numHeight as imgHeight, ";   

		sql=sql+"cat.strNameE as TypeE, ";         
		sql=sql+"cat.strNameF as TypeF, ";         
		sql=sql+"Year(aw.datPurchase) as YearPurchased  ";  


		sql=sql+"FROM [dbo].[tblArtWork] aw  ";         
		sql=sql+"INNER JOIN ref.tblType cat on cat.intTypeCd=aw.intTypeCd  ";         
        sql=sql+"WHERE aw.bitVisiblePublic=1 ";         
		sql=sql+"ORDER BY ArtistName ASC, aw.datWork asc  ";                  


        final ResultSet resultSet = statement.executeQuery(sql); 

        int r=0;
%>
<div class="table-responsive">
<table id="artbank" class="display responsive table table-striped table-hover table-bordered " cellspacing="0" width="100%">
        <thead>
            <tr>
                <th><%=artist_key%></th>
                <th><%=title_key%></th>                
                <th><%=category_key%></th>                
                <th><%=yearCreated_key%></th>
                <th><%=yearPurchased_key%></th>
                <th><%=dimension_key%></th>          

            </tr>
        </thead>
        <tfoot>
            <tr>
                <th><%=artist_key%></th>
                <th><%=title_key%></th>                
                <th><%=category_key%></th>                
                <th><%=yearCreated_key%></th>
                <th><%=yearPurchased_key%></th>
                <th><%=dimension_key%></th>                       
            </tr>
        </tfoot>
        <tbody>
<%
    	 String artistName="";
         String yearCreated="";
         String yearPurchased="";
         String imgWidth;
         String imgHeight;   
         String dimension;            

         //start of while
         while(resultSet.next()){
            r=r+1;
			artistName=resultSet.getString("ArtistName").trim();
			artistName=artistName.substring(0, artistName.length()-1);
            yearCreated=resultSet.getString("YearCreated"); 
            if(yearCreated==null){
				yearCreated=null_key;
            } 
            yearPurchased=resultSet.getString("YearPurchased");  
            if(yearPurchased==null){
				yearPurchased=null_key;
            } 
            imgWidth=resultSet.getString("imgWidth");  
            imgHeight=resultSet.getString("imgHeight");  

            if(imgWidth==null){
               dimension= noDimension_key;
            } else{
                //dimension=imgWidth+"&times"+imgHeight+"cm";
                dimension=imgHeight+"&times"+imgWidth+" cm";
            }             



%>
            <tr>
                <td style="width:25%;"><%=artistName%></td>
                <td style="width:27%;"><%=resultSet.getString("TitleOfWork")%></td>
                <td style="width:15%;" id="link"><%=resultSet.getString(type)%></td>                         
                <td style="width:10%;"><%=yearCreated%></td>
                <td style="width:10%;"><%=yearPurchased%></td>                
                <td style="width:13%;"><%=dimension%></td>

            </tr>
<%
         } 
         //end of while
         resultSet.close();

     }
  }catch (Exception e) {
        %><p>error! <%=e.getMessage()%></p><%
 } 
%>

        </tbody>
    </table>
</div>
