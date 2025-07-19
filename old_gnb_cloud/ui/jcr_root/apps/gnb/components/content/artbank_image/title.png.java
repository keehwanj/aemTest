
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;
import javax.servlet.ServletOutputStream;

public class title_png extends HttpServlet {

    Connection con;
    CallableStatement stat; 

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //response.setContentType("text/html;charset=UTF-8");
        response.setContentType("image/jpeg");
        //PrintWriter out = response.getWriter();
        Blob ePhoto = null;
        byte[] rawBytes = null;
        ServletOutputStream out = response.getOutputStream();
        try {
            /*
             * TODO output your page here. You may use following sample code.
             */
            //byte[] rawBytes = null;
            String id = request.getQueryString();
            Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
            con = DriverManager.getConnection("jdbc:odbc:myCon", "", "");
            stat = con.prepareCall("{call prc_getEPhoto(?)}");
            stat.setInt(1, Integer.parseInt(id));
            ResultSet rs = stat.executeQuery();
            rs.next();

            rawBytes = rs.getBytes(1);
            out.write(rawBytes);

            out.flush();
            stat.close();
        } catch (Exception ex) {
            out.println(ex.getMessage());
        } finally {
            try {
                con.close();
                out.close();
            } catch (Exception ex) {
            }
        }
    } 