<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.t4g.cnb.utils.Utils"%>
<%@page import="com.day.cq.tagging.TagManager"%>
<%@page import="com.day.cq.tagging.Tag"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.day.cq.search.QueryBuilder"%>
<%@page import="com.day.cq.search.Query"%>
<%@page import="com.day.cq.search.PredicateGroup"%>
<%@page import="com.day.cq.search.result.SearchResult"%>
<%@page import="com.day.cq.search.result.Hit"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Collections"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.text.Normalizer"%>
<%@page import="com.day.cq.dam.api.Asset"%>
<%@page import="org.apache.sling.api.resource.Resource"%>
<%@page import="com.day.cq.commons.jcr.JcrConstants"%>
<%@page import="java.util.Arrays"%>
<%@page import="java.util.Comparator"%>
    
<%!  
public class AssetInfo {
    private String nodeTitle;
    private String path;
    private String displayPath; 
    private String sSize;
 
    public AssetInfo(){
    }
    public AssetInfo(String nodeTitle, String path, String displayPath, String sSize){
        this.nodeTitle = nodeTitle;
        this.path = path;
        this.displayPath = displayPath;
        this.sSize = sSize;
    }
 
    /**
     * @return Returns the sSize.
     */
    public String getsSize() {
        return sSize;
    }
    /**
     * @param Size The Size to set.
     */
    public void setsSize(String sSize) {
        this.sSize = sSize;
    }
    /**
     * @return Returns the displayPath
     */
    public String getdisplayPath() {
        return displayPath;
    }
    /**
     * @param displayPath The displayPath to set.
     */
    public void setdisplayPath(String displayPath) {
        this.displayPath = displayPath;
    }
 
     /**
     * @return Returns the path
     */
    public String getpath() {
        return path;
    }
    /**
     * @param path The path to set.
     */
    public void setpath(String path) {
        this.path = path;
    } 
 
     /**
     * @return Returns the nodeTitle
     */
    public String getnodeTitle() {
        return nodeTitle;
    }
    /**
     * @param nodeTitle The nodeTitle to set.
     */
    public void setnodeTitle(String nodeTitle) {
        this.nodeTitle = nodeTitle;
    }
    public String toString(){
        String sReturnString = "";   
        sReturnString = sReturnString + "<tr>";
        sReturnString = sReturnString + "<td>"+nodeTitle+"</td>";
        if (path.startsWith("/content/dam/")) {
            path = "/libs/wcm/core/content/damadmin.html#"+path;
            sReturnString = sReturnString + "<td><a href=\""+path+"\"target=\"_blank\">"+displayPath+"</a></td>";
        }
        else {
            sReturnString = sReturnString + "<td><a href=\""+path+".html\"target=\"_blank\">"+displayPath+"</a></td>";
        }
        
         String sDisp = ""; 
         Long lSize = Long.valueOf(this.sSize);
         if (lSize < 1024) {
             sDisp = this.sSize + " Bytes" ;
         } else if (lSize < 1048567) { 
               sDisp = lSize/1024 + " KB";
         } else { 
             sDisp = lSize/1048567 + " MB";
         }
         sReturnString = sReturnString + "<td>"+sDisp+"</td>";
         sReturnString = sReturnString + "</tr>";
         return sReturnString;
        
    }
}
%>

<%

final Session session = resourceResolver.adaptTo(Session.class);
final QueryBuilder builder = resource.getResourceResolver().adaptTo(QueryBuilder.class);

SearchResult result = null;
List<Hit> list = new ArrayList<Hit>();

      Map<String, String> map = new HashMap<String, String>();
      map.put("1_property", "jcr:content/cq:lastReplicationAction");
      map.put("1_property.value", "Activate");
      map.put("path", "/content/dam/.");
      Query query = builder.createQuery(PredicateGroup.create(map), session);
      query.setHitsPerPage(0);
      result = query.getResult();
      list.addAll(result.getHits());
%>

<cq:include script="/libs/social/commons/components/formpage/head.jsp"/>
<style>
h3 {
font-size:medium; 
font-family:Arial;
padding:5px 5px 5px 5px;
}

/* ie7 fix */
.ext-ie .pathfield_wrapper {
margin-left: -104px;
}
</style>

<h3><DAM Asset List></h3>
<br/>

<%if (list.size()>0) { 

    //Array of possible title locations in order of what should be displayed as title if node has more than 
    //one option.  If another title location is required simply added it to the array where appropriate.
    //Note: The jcr:content nodes are being returned by the search.  To look at properties in the jcr:content's 
    //parent node use ../ 
    String [] titleLocations = {"enTitle", "../serviceinfo/SERVICENAME","dam:title_e", "dc:title_e", "dc:title", "jcr:title"};

    long lSize = 0;
    ArrayList listWithSize = new ArrayList();
    
    for (int i=0; i<list.size(); i++) {
        Node node = list.get(i).getNode();
        String path = node.getPath();  
        Resource myres = slingRequest.getResourceResolver().resolve(path); 
        Asset asset = myres.adaptTo(Asset.class); 
        lSize=0;
        if (asset != null){  
            //Resource currentOriginal = asset.getCurrentOriginal();
            Resource currentOriginal = asset.getOriginal();    
            if (currentOriginal != null & asset != null ) {  
                Node ori = currentOriginal.adaptTo(Node.class); 
                lSize = ori.getProperty(JcrConstants.JCR_CONTENT + "/" + JcrConstants.JCR_DATA).getLength(); 
             }
        }  
        if (path.contains("/jcr:content")) {
            path = path.substring(0,path.indexOf("/jcr:content"));
        }
        String displayPath = path;

        if (displayPath.contains("/content/dam/")) {
            displayPath= displayPath.substring(path.indexOf("/content/dam/")+13);
        }
        boolean titleFound=false;
        String nodeTitle = node.getName();
        for (int j=0; j<titleLocations.length && !titleFound; j++) {
            if (node.hasProperty(titleLocations[j])) {
                nodeTitle = node.getProperty(titleLocations[j]).getString();
                titleFound=true;
            }
        }
        AssetInfo AI = new AssetInfo(nodeTitle, path, displayPath, String.valueOf(lSize) );
        listWithSize.add(AI); 
    }
    // sort our arraylist of AI class items (objects) - overwriting the compare method of the comparator interface  
    // the compare method compares two objects in the arraylist at a time and needs to return an integer - either 
    // negative if object1 is smaller than object2, 0 if they are the same or positive if larger - here we return 
    // a value based on comparing the size field - combined this from multiple pages, but primarily from here
    // http://www.albeesonline.com/blog/2008/10/16/sorting-an-arraylist-of-objects/   
    
    Collections.sort(listWithSize, new Comparator(){
 
            public int compare(Object o1, Object o2) {
                AssetInfo AI1 = (AssetInfo) o1;
                AssetInfo AI2 = (AssetInfo) o2;
                // this is for string (dictionary comparisons)  
               //return AI1.getsSize().compareToIgnoreCase(AI2.getsSize());
               // next two lines - sort numerical ascending order   
               //return (Long.valueOf(AI1.getsSize()) < Long.valueOf(AI2.getsSize()) ? -1 :
                //(Long.valueOf(AI1.getsSize()) == Long.valueOf(AI2.getsSize()) ? 0 : 1)); 
               // next two lines - sort numerical descending order  
               return (Long.valueOf(AI2.getsSize()) < Long.valueOf(AI1.getsSize()) ? -1 :
                (Long.valueOf(AI2.getsSize()) == Long.valueOf(AI1.getsSize()) ? 0 : 1)); 
            }
        }); 
       out.write ("<h2><p align=center>DAM Assets by Descending Size</p></h2>" ); 
       out.write ("<table  border=1 style='margin:5px' >" ); 
       out.write ("<tr><th>Title</th><th>Path</th><th>Size</th></tr>"); 
       //out.write(listWithSize + " " );
       
       for (int i=0; i<listWithSize.size(); i++) {
            out.write(listWithSize.get(i) +   " "  ); 
       }
       out.write ("</table><br><br><br><p>");
    }
else{
     out.write("<p style=\"margin:10px\">Your search did not match any documents. </p>");
}

%>