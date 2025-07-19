<%@ include file="/libs/wcm/global.jsp"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Calendar"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Locale"%>
<%@ page import="java.util.Map"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.ResultSetMetaData"%>
<%@ page import="javax.sql.DataSource"%>
<%@ page import="com.t4g.cnb.enums.CustomNodes"%>
<%@ page import="com.t4g.cnb.enums.Multimedia"%>
<%@ page import="com.t4g.cnb.enums.Nodes"%>
<%@ page import="com.t4g.cnb.utils.Utils"%>
<%@ page import="com.day.cq.tagging.Tag"%>
<%@ page import="com.day.cq.tagging.TagManager"%>
<%@ page import="com.day.cq.tagging.TagManager.FindResults"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourceNotFoundException"%>
<%@ page import="com.day.commons.datasource.poolservice.DataSourcePool"%>

<%@ page import="org.apache.sling.api.SlingHttpServletRequest"%>

<%
  final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.CANADA);
  Connection conn = null;
  PreparedStatement pstmt = null;
  final String BASE_PATH = "/var/dam/gnb/multimedia/";
  final String AUDIO_PATH = BASE_PATH + "audio/";
  final String VIDEO_PATH = BASE_PATH + "video/";
  final String MP3_PATH = BASE_PATH + "mp3/";

  try {
    DataSourcePool dataSourceService = sling
        .getService(com.day.commons.datasource.poolservice.DataSourcePool.class);
    DataSource dataSource = (DataSource) dataSourceService.getDataSource("AccessDB169Z");    
    conn = dataSource.getConnection();
    pstmt = conn.prepareStatement("select * from main where id between 488 and 500 order by newDate");
    //pstmt = conn.prepareStatement("select * from main order by newDate");
    ResultSet rs = pstmt.executeQuery();
    //we need to always have content/dam/gnb node  
    final Node gnbNode = WCMUtils.getNode(resourceResolver.getResource("/content/dam/gnb"));    
    //if there is no multimedia node, create one
    if (!gnbNode.hasNode(CustomNodes.MULTIMEDIA.nodeName())) {
      gnbNode.addNode(CustomNodes.MULTIMEDIA.nodeName(), CustomNodes.MULTIMEDIA.nodeType());
    }

    //everything gets added to this node
    final Node mmNode = gnbNode.getNode(CustomNodes.MULTIMEDIA.nodeName());
    //final Strip strip = new Strip();
    
    Map<String, String> deptMapEng = new HashMap<String, String>();
    Map<String, String> deptMapFra = new HashMap<String, String>();    
    TagManager tm = resourceResolver.adaptTo(TagManager.class);
    Resource engres = resourceResolver.getResource("/etc/tags/gnb-eng/organizations");
    Resource frares = resourceResolver.getResource("/etc/tags/gnb-fra/organisation");
    
    final Tag engtn = engres.adaptTo(Tag.class);
    final Tag fratn = frares.adaptTo(Tag.class);
    //first iteration gives headers; second gives all the departments/agencies/secretaries/etc...
    for (Iterator<Tag> orgTagItr = engtn.listAllSubTags(); orgTagItr.hasNext();) {          
      Tag headTag = orgTagItr.next();
      for (Iterator<Tag> headTagItr = headTag.listAllSubTags(); headTagItr.hasNext();) {
        Tag baseTag = headTagItr.next();
        deptMapEng.put(baseTag.getDescription(), baseTag.getTagID());
      }
    }
    
    for (Iterator<Tag> orgTagItr = fratn.listAllSubTags(); orgTagItr.hasNext();) {          
      Tag headTag = orgTagItr.next();
      for (Iterator<Tag> headTagItr = headTag.listAllSubTags(); headTagItr.hasNext();) {
        Tag baseTag = headTagItr.next();
        deptMapFra.put(baseTag.getDescription(), baseTag.getTagID());
      }
    }
          
    while (rs.next()) {
      //get the date
      Calendar cal = Calendar.getInstance();
      Date tDate = dateFormat.parse(rs.getString(Multimedia.NEW_DATE.field()));
      cal.setTime(tDate);
      int month = cal.get(Calendar.MONTH) + 1;
      int year = cal.get(Calendar.YEAR);

      //figure out where this page should go by YEAR/MONTH
      String yearFolderName = String.valueOf(year);
      String monthFolderName = month < 10 ? "0" + (month) : String.valueOf(month);

      //is this node already created?
      if (!mmNode.hasNode(yearFolderName)) {
        log.warn("******** NO YEAR NODE:" + yearFolderName + " *********");
        continue;
      }

      final Node yearNode = mmNode.getNode(yearFolderName);

      if (!yearNode.hasNode(monthFolderName)) {
        log.warn("******** NO MONTH NODE:" + monthFolderName + " *********");
        continue;
      }

      //create the page for this item by month
      final Node monthNode = yearNode.getNode(monthFolderName);

      //finally, create the information node: the existence of the jcr-content node makes the count start at 1
      final String photo1 = rs.getString("PHOTO_1");
      
      if (monthNode.hasNode(photo1)) {        
        final Node indexNode = monthNode.getNode(photo1);
        final Node jcrNode = indexNode.getNode(Nodes.JCR_CONTENT.nodeName());
        final Node infoNode = jcrNode.getNode(CustomNodes.METADATA.nodeName());
        try {
          infoNode.setProperty(Multimedia.NEW_DATE.toString(), cal);
          infoNode.setProperty(Multimedia.PLACE.toString(), Utils.nullReplace(rs.getString(Multimedia.PLACE.field())));

          String ao = Utils.nullReplace(rs.getString(Multimedia.AUDIOFILENAME_O.field()));
          infoNode.setProperty(Multimedia.AUDIOFILENAME_O.toString(), "".equals(ao) ? "" : (AUDIO_PATH + ao));
          //strip out any french characters
          String af = Utils.nullReplace(rs.getString(Multimedia.AUDIOFILENAME_F.field()));
          infoNode.setProperty(Multimedia.AUDIOFILENAME_F.toString(), "".equals(af) ? "" : (AUDIO_PATH + af));
          //strip out any french characters
          String ae = Utils.nullReplace(rs.getString(Multimedia.AUDIOFILENAME_E.field()));

          //strip out any french characters
          String vo = Utils.nullReplace(rs.getString(Multimedia.VIDEOFILENAME_O.field()));
          infoNode.setProperty(Multimedia.VIDEOFILENAME_O.toString(), "".equals(vo) ? "" : (VIDEO_PATH + vo));
          //strip out any french characters
          String vf = Utils.nullReplace(rs.getString(Multimedia.VIDEOFILENAME_F.field()));
          infoNode.setProperty(Multimedia.VIDEOFILENAME_F.toString(), "".equals(vf) ? "" : (VIDEO_PATH + vf));
          //strip out any french characters
          String ve = Utils.nullReplace(rs.getString(Multimedia.VIDEOFILENAME_E.field()));
          infoNode.setProperty(Multimedia.VIDEOFILENAME_E.toString(), "".equals(ve) ? "" : (VIDEO_PATH + ve));

          infoNode.setProperty(Multimedia.PRESENTATIONFILENAME_F.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PRESENTATIONFILENAME_F.field())));
          infoNode.setProperty(Multimedia.PRESENTATIONFILENAME_E.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PRESENTATIONFILENAME_E.field())));

          //strip out any french characters
          String mpo = Utils.nullReplace(rs.getString(Multimedia.MP3FILENAME_O.field()));
          infoNode.setProperty(Multimedia.MP3FILENAME_O.toString(), "".equals(mpo) ? "" : (MP3_PATH + mpo));

          //strip out any french characters
          infoNode.setProperty(Multimedia.PHOTO_1_DOWNLOAD.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PHOTO_1_DOWNLOAD.field())));
          infoNode.setProperty(Multimedia.PHOTOCONTENT_1_E.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PHOTOCONTENT_1_E.field())));
          infoNode.setProperty(Multimedia.PHOTOCONTENT_1_F.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PHOTOCONTENT_1_F.field())));
          //strip out any french characters  
          infoNode.setProperty(Multimedia.PHOTO_2_DOWNLOAD.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PHOTO_2_DOWNLOAD.field())));
          infoNode.setProperty(Multimedia.PHOTOCONTENT_2_E.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PHOTOCONTENT_2_E.field())));
          infoNode.setProperty(Multimedia.PHOTOCONTENT_2_F.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PHOTOCONTENT_2_F.field())));
          //strip out any french characters  
          infoNode.setProperty(Multimedia.PHOTO_3_DOWNLOAD.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PHOTO_3_DOWNLOAD.field())));
          infoNode.setProperty(Multimedia.PHOTOCONTENT_3_E.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PHOTOCONTENT_3_E.field())));
          infoNode.setProperty(Multimedia.PHOTOCONTENT_3_F.toString(), Utils.nullReplace(rs
              .getString(Multimedia.PHOTOCONTENT_3_F.field())));
          infoNode.setProperty(Multimedia.TITLE_E.toString(), Utils.nullReplace(rs.getString(Multimedia.TITLE_E
              .field())));
          infoNode.setProperty(Multimedia.TITLE_F.toString(), Utils.nullReplace(rs.getString(Multimedia.TITLE_F
              .field())));
          infoNode.setProperty(Multimedia.CONTENT_E.toString(), Utils.nullReplace(rs.getString(Multimedia.CONTENT_E
              .field())));
          infoNode.setProperty(Multimedia.CONTENT_F.toString(), Utils.nullReplace(rs.getString(Multimedia.CONTENT_F
              .field())));
          infoNode.setProperty(Multimedia.GALLERY_1.toString(), Utils.nullReplace(rs.getString(Multimedia.GALLERY_1
              .field())));
          infoNode.setProperty(Multimedia.GALLERY_2.toString(), Utils.nullReplace(rs.getString(Multimedia.GALLERY_2
              .field())));
          infoNode.setProperty(Multimedia.GALLERY_3.toString(), Utils.nullReplace(rs.getString(Multimedia.GALLERY_3
              .field())));
          
          String deptId1 = Utils.nullReplace(rs.getString("departmentID_1"));
          String deptId2 = Utils.nullReplace(rs.getString("departmentID_2"));
          
          if(infoNode.hasProperty("DEPTID")){
        	  infoNode.getProperty("DEPTID").remove();
          }
          
          if(infoNode.hasProperty("DEPTID_2")){
              infoNode.getProperty("DEPTID_2").remove();
          }
          
          infoNode.setProperty("dam:DEPTID", deptId1);
          infoNode.setProperty("dam:DEPTID_2", deptId2);
          
          List<String> tagList = new ArrayList<String>();
          if(Utils.isNotEmpty(deptId1)){
            tagList.add(deptMapEng.get(deptId1));
            tagList.add(deptMapFra.get(deptId1));
          }
      
          if(Utils.isNotEmpty(deptId2)){
            tagList.add(deptMapEng.get(deptId2));
            tagList.add(deptMapFra.get(deptId2));
          }
          
          if(!tagList.isEmpty()){
            infoNode.setProperty("cq:tags", tagList.toArray(new String[0]));
          }
          
          gnbNode.save();
        } catch (Exception e) {
          log.warn("Exception trying to enter metadata for: " + photo1);
        }
      } else {
        log.warn("No node for: " + monthNode + "/" + photo1);
      }
    }
  } finally {
    pstmt.close();
    conn.close();
  }
%>
<%!public final class Strip {
    String replace(String orig) {
      String s = "";
      try {
        if (Utils.isNotEmpty(orig)) {
          s = new String(orig.getBytes(), "UTF8");
          s = s.replaceAll("[????]", "e");
          s = s.replaceAll("[??]", "u");
          s = s.replaceAll("[??]", "i");
          s = s.replaceAll("[??]", "a");
          s = s.replaceAll("?", "o");

          s = s.replaceAll("[????]", "E");
          s = s.replaceAll("[??]", "U");
          s = s.replaceAll("[??]", "I");
          s = s.replaceAll("[??]", "A");
          s = s.replaceAll("?", "O");
        }
      } catch (Exception e) {
        e.printStackTrace();
        //System.out.println("Exception in Strip:" + e.getMessage());
      }
      return s;
    }
  }%>