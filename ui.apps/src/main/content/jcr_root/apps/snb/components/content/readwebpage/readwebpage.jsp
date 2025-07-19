<%@ include file="/libs/foundation/global.jsp" %>
<%@ page pageEncoding = "UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%!
 public String getUrl(String str){
  BufferedReader  br   = null;
  InputStreamReader isr   = null;
  StringBuffer   sb   = null;

  try{
   URL url = new URL(str);
   URLConnection uCon = url.openConnection();
   isr = new InputStreamReader(uCon.getInputStream(),"UTF-8");
   br = new BufferedReader(isr);
   sb = new StringBuffer();

   String     line;
   while((line=br.readLine()) != null) sb.append(line).append("\n"); // 본문 코드에 주석이 // 로 되어 있으면 Enter 사용

  }catch(Exception e){
  }finally{
   if(isr!=null){ try{ isr.close(); }catch(Exception e){}finally{ isr=null; } }
   if(br!=null){ try{ br.close(); }catch(Exception e){}finally{ br=null; } }
   if(isr!=null){ try{ isr.close(); }catch(Exception e){}finally{ isr=null; } }
  }

  return sb.toString();
 }

%><%
//String url = properties.get("url", "http://webdbdev/0017/specialCareHome_new/IFrame/test.asp");    
String url = properties.get("url", "//gnbcqtest.gnb.ca/content/gnb/en.html");        
String html = getUrl(url);
out.print(html);
%>
