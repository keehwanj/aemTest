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
//database connection    
DataSourcePool dspService = sling.getService(DataSourcePool.class);
//out.write("created DataSourcePool");

//getting data source pool from dialog and setting it.
String database = properties.get("database", "");
if(database.equalsIgnoreCase("")){
	database="AEMArtbankDev";
} 
DataSource ds = (DataSource) dspService.getDataSource(database);   
//out.write("<br/>");
//out.write("created DataSource");
//out.write("<br/>");

final Connection connection = ds.getConnection();
final Statement statement = connection.createStatement();

String sql="SELECT "; 
sql=sql+"aw.imgPicture as imgPicture "; 
sql=sql+"FROM [dbo].[tblArtWork] aw  ";         
sql=sql+"WHERE aw.intArtWorkId=4408 ";         

//out.write(sql);
//out.write("<br/>");

final ResultSet rs = statement.executeQuery(sql); 
int r=0;
//out.write("created ResultSet");
//out.write("<br/>");
OutputStream oImage;

if(rs.next()) {
    byte barray[] = rs.getBytes(1);
    response.setContentType("image/gif");
    oImage=response.getOutputStream();
    oImage.write(barray);
    oImage.flush();
    oImage.close();
    r=r+1;
}
//out.write("number of recorde :"+r);
rs.close();

/*
int img_id = Integer.parseInt(request.getParameter("your_id"));
Connection con = //get your connection object here ;
ResultSet rs = null;
PreparedStatement pstmt = null;
OutputStream oImage;
try {
pstmt = con.prepareStatement("your sql statement for retriving the image column data");
pstmt.setInt(1, img_id);
rs = pstmt.executeQuery();
    if(rs.next()) {
        byte barray[] = rs.getBytes(1);
        response.setContentType("image/gif");
        oImage=response.getOutputStream();
        oImage.write(barray);
        oImage.flush();
        oImage.close();
    }
}
catch(Exception ex){
    //ex.printStackTrace();
}finally {
    try{
    if(con!=null)
       con.close();
    }catch(Exception ex){
       // ex.printStackTrace();
    }
}
*/
%>