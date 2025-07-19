package ca.gnb.artbank.image;

import java.io.*;
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Vishal.Gilbile
 */
public class RetrieveImage extends HttpServlet {

  String message = "Hello World";
  Connection con;
  CallableStatement stat;

  /**
   * Processes requests for both HTTP
   * <code>GET</code> and
   * <code>POST</code> methods.
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    //response.setContentType("image/jpeg");

    //Blob ePhoto = null;
    //byte[] rawBytes = null;
    //ServletOutputStream out = response.getOutputStream();
    PrintWriter out = response.getWriter();
    try {
      /*
       * TODO output your page here. You may use following sample code.
       */

      response.setContentType("text/html");

      // Actual logic goes here.

      out.println("<h1>" + message + "</h1>");
      //out.flush();
      //stat.close();
    } catch (Exception ex) {
      out.println(ex.getMessage());
    } finally {
      try {
        con.close();
        out.close();
      } catch (Exception ex) {}
    }
  }

  // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
  /**
   * Handles the HTTP
   * <code>GET</code> method.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    try{
      processRequest(request, response);
    }catch (Exception e){
      e.printStackTrace();
    }
  }

  /**
   * Handles the HTTP
   * <code>POST</code> method.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    try{
      processRequest(request, response);
    }catch (Exception e){
      e.printStackTrace();
    }
  }

  /**
   * Returns a short description of the servlet.
   *
   * @return a String containing servlet description
   */
  @Override
  public String getServletInfo() {
    return "Short description";
  } // </editor-fold>
}
