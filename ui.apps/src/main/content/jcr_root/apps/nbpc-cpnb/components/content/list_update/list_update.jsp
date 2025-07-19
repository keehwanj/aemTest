<%@ page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@include file="/libs/wcm/global.jsp"%>
<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%
  final class Pair<T, S> {
    public Pair(T f, S s) {
      first = f;
      second = s;
    }

    public T getFirst() {
      return first;
    }

    public S getSecond() {
      return second;
    }

    public String toString() {
      return "(" + first.toString() + ", " + second.toString() + ")";
    }

    private final T first;
    private final S second;
  }
if(properties.get("feedEnabled", false)) {
try {
String title = (String)properties.get("feedname", null) != null ? (String)properties.get("feedname", null) : currentNode.getName();
%><link rel="alternate" type="application/rss+xml" title="<%=title %>" href="<%=resource.getPath()%>.rss.html" /><%
} catch(Exception e) {}
}
  String listStyle      = properties.get("listStyle", "unstyled");
  String moreLink       = properties.get("moreLink", "none");
  String moreLinkText   = properties.get("moreLinkText", moreLink);
  boolean padded        = properties.get("padded", false);
  boolean shaded        = properties.get("shaded", false);
  boolean border        = properties.get("border", false);
  
  //adding reverse order checkbox
  boolean reverseOrder  = properties.get("reverseOrder", false);

  
  ArrayList<Pair<String, String>> list = new ArrayList<Pair<String, String>>();

  //**IMPORTANT Part - creating array no matter what value is.
  int leng=0;
  int links_text_length=0;
  int links_length=0;

  String[] links_text = properties.get("links_text", String[].class) ;
  String[] links      = properties.get("links", String[].class) ;  
  
  if(links_text!=null){
    links_text_length=links_text.length;
  } 
  
  if(links!=null){
    links_length=links.length;
  }   

  leng=links_text_length;

  if(links_length<links_text_length){
      leng=links_length;  
  } 

//display Reverse Order
  if(reverseOrder){
/*
      for (int i = 21; i >= 1; i--) {  
*/
      for (int i = leng-1; i >= 0; i--) {
            String link = links[i].trim();
            String linkText = links_text[i];
            /**START of new(2014-5-29)**/
          	if (link.equals(""))
            {
                link="nolink";
            }
            /**END of new**/
/*
            String link = properties.get(String.format("link%s", i), "none");
            String linkText = properties.get(String.format("linktext%s", i), link);
*/            
            if(linkText.startsWith("/")) linkText = linkText.split("/")[linkText.split("/").length-1];
            if (!link.equals("none"))
                  list.add(new Pair<String, String>(link, linkText));
            }
       }
  //display as it is
  if(!reverseOrder){
/*
      for (int i = 1; i <= 21; i++) {  
*/
      for (int i = 0; i <= leng-1; i++) {
            String link = links[i].trim();
            /**START of new(2014-5-29)**/     
          	if (link.equals(""))
            {
                link="no link";
            }
            /**END of new**/   

          //out.print(link);
            String linkText = links_text[i] ;
/*            
            String link = properties.get(String.format("link%s", i), "none");
            String linkText = properties.get(String.format("linktext%s", i), link);
*/
            if(linkText.startsWith("/")) linkText = linkText.split("/")[linkText.split("/").length-1];
            if (!link.equals("none"))
                  list.add(new Pair<String, String>(link, linkText));
          			//out.print("TEST");
          			//out.print("<br/>");
            }
       }
  
  
  if (!list.isEmpty()) {
    String containerClass = listStyle + " ";
    if (padded) containerClass += "padded ";
    if (shaded) containerClass += "shaded ";
    if (border)    containerClass += "bottomborder ";
    out.write(String.format("<div class=\"%s\">", containerClass));
    out.write("<ul>");
    for (Pair<String, String> listitem : list) {
      if (listitem.getFirst().startsWith("/")) {
      
        String link = Utils.getQuicklink(listitem.getFirst(), currentPage, resource);
        if(Utils.isNotEmpty(listitem.getSecond()) && !listitem.getFirst().endsWith(listitem.getSecond())) {
          link = link.replaceFirst(">.*<",">" + listitem.getSecond().replaceAll("[$]","\\$") + "<");
        }
        out.write("<li>" + link + "</li>");
      } else {
        out.write(String.format("<li><a class=\"external\" href=\"%s\">%s</a></li>", listitem.getFirst(), listitem.getSecond()));
      }
    }
    out.write("</ul>");
    if (!moreLink.equalsIgnoreCase("none")) {
      out.write("<div class=\"morelink\">");
      if (moreLink.startsWith("/")) {
        String link = Utils.getQuicklink(moreLink, currentPage, resource);
        if(Utils.isNotEmpty(moreLinkText) && !moreLink.equalsIgnoreCase(moreLinkText)) {
          link = link.replaceFirst(">.*<",">" + moreLinkText.replaceAll("[$]","\\$") + "<");
        }
        out.write(link);
      } else {
        out.write(String.format("<a class=\"external\" href=\"%s\">%s</a>", moreLink, moreLinkText));
      }
      out.write("</div>");
    }
    out.write("</div>");
  } else {
    %><img src="/libs/cq/ui/resources/0.gif" class="cq-list-placeholder" alt=""><%
  }
%>