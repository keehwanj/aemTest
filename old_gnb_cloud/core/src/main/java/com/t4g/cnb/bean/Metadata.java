package com.t4g.cnb.bean;

import org.apache.sling.api.resource.ResourceResolver;

import com.t4g.cnb.enums.CustomNodes;
import com.t4g.cnb.enums.Multimedia;
import com.t4g.cnb.enums.Nodes;
import com.t4g.cnb.utils.Utils;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

public class Metadata {

  final private String titleENG;
  final private String titleFRE;
  final private String contentENG;
  final private String contentFRE;
  final private String place;
  final private String newDate;
  final private String copyright;
  final private String terms;
  final private String contributor;
  final private String audioFileNameO;
  final private String audioFileNameE;
  final private String audioFileNameF;
  final private String videoFileNameO;
  final private String videoFileNameE;
  final private String videoFileNameF;
  final private String presentationFileNameE;
  final private String presentationFileNameF;
  final private String mp3FileNameO;
  final private String photo1Download;
  final private String photo2Download;
  final private String photo3Download;
  final private String gallery1;
  final private String gallery2;
  final private String gallery3;
  final private String news;
  final private String gallery1TitleENG;
  final private String gallery2TitleFRE;
  final private String gallery3TitleENG;
  final private String gallery1TitleFRE;
  final private String gallery2TitleENG;
  final private String gallery3TitleFRE;

  final private static String EMPTY = "";

  public Metadata(Node assetNode, ResourceResolver resourceResolver) throws RepositoryException {

    Node jcrNode = assetNode.getNode(Nodes.JCR_CONTENT.nodeType());
    Node metadata = jcrNode.getNode(CustomNodes.METADATA.nodeName());

    this.titleENG = metadata.hasProperty(Multimedia.TITLE_E.toString()) ? metadata.getProperty(
        Multimedia.TITLE_E.toString()).getString() : EMPTY;
    this.titleFRE = metadata.hasProperty(Multimedia.TITLE_F.toString()) ? metadata.getProperty(
        Multimedia.TITLE_F.toString()).getString() : EMPTY;
    this.contentENG = metadata.hasProperty(Multimedia.CONTENT_E.toString()) ? metadata.getProperty(
        Multimedia.CONTENT_E.toString()).getString() : EMPTY;
    this.contentFRE = metadata.hasProperty(Multimedia.CONTENT_F.toString()) ? metadata.getProperty(
        Multimedia.CONTENT_F.toString()).getString() : EMPTY;    
    this.place = metadata.hasProperty(Multimedia.PLACE.toString()) ? metadata.getProperty(Multimedia.PLACE.toString())
        .getString() : EMPTY;
    this.newDate = metadata.hasProperty(Multimedia.NEW_DATE.toString()) ? metadata.getProperty(
        Multimedia.NEW_DATE.toString()).getString() : EMPTY;
    this.copyright = metadata.hasProperty("dc:rights") ? metadata.getProperty("dc:rights").getString() : EMPTY;
    this.terms = metadata.hasProperty("xmpRights:UsageTerms") ? metadata.getProperty("xmpRights:UsageTerms")
        .getString() : EMPTY;
    this.contributor = metadata.hasProperty("dc:contributor") ? metadata.getProperty("dc:contributor").getString()
        : EMPTY;
    this.audioFileNameO = metadata.hasProperty(Multimedia.AUDIOFILENAME_O.toString()) ? metadata.getProperty(
        Multimedia.AUDIOFILENAME_O.toString()).getString() : EMPTY;
    this.audioFileNameE = metadata.hasProperty(Multimedia.AUDIOFILENAME_E.toString()) ? metadata.getProperty(
        Multimedia.AUDIOFILENAME_E.toString()).getString() : EMPTY;
    this.audioFileNameF = metadata.hasProperty(Multimedia.AUDIOFILENAME_F.toString()) ? metadata.getProperty(
        Multimedia.AUDIOFILENAME_F.toString()).getString() : EMPTY;
    this.videoFileNameO = metadata.hasProperty(Multimedia.VIDEOFILENAME_O.toString()) ? metadata.getProperty(
        Multimedia.VIDEOFILENAME_O.toString()).getString() : EMPTY;
    this.videoFileNameE = metadata.hasProperty(Multimedia.VIDEOFILENAME_E.toString()) ? metadata.getProperty(
        Multimedia.VIDEOFILENAME_E.toString()).getString() : EMPTY;
    this.videoFileNameF = metadata.hasProperty(Multimedia.VIDEOFILENAME_F.toString()) ? metadata.getProperty(
        Multimedia.VIDEOFILENAME_F.toString()).getString() : EMPTY;
    this.presentationFileNameE = metadata.hasProperty(Multimedia.PRESENTATIONFILENAME_E.toString()) ? metadata
        .getProperty(Multimedia.PRESENTATIONFILENAME_E.toString()).getString() : EMPTY;
    this.presentationFileNameF = metadata.hasProperty(Multimedia.PRESENTATIONFILENAME_F.toString()) ? metadata
        .getProperty(Multimedia.PRESENTATIONFILENAME_F.toString()).getString() : EMPTY;
    this.mp3FileNameO = metadata.hasProperty(Multimedia.MP3FILENAME_O.toString()) ? metadata.getProperty(
        Multimedia.MP3FILENAME_O.toString()).getString() : EMPTY;
    this.photo1Download = metadata.hasProperty(Multimedia.PHOTO_1_DOWNLOAD.toString()) ? metadata.getProperty(
        Multimedia.PHOTO_1_DOWNLOAD.toString()).getString() : EMPTY;
    this.photo2Download = metadata.hasProperty(Multimedia.PHOTO_2_DOWNLOAD.toString()) ? metadata.getProperty(
        Multimedia.PHOTO_2_DOWNLOAD.toString()).getString() : EMPTY;
    this.photo3Download = metadata.hasProperty(Multimedia.PHOTO_3_DOWNLOAD.toString()) ? metadata.getProperty(
        Multimedia.PHOTO_3_DOWNLOAD.toString()).getString() : EMPTY;
    this.gallery1 = metadata.hasProperty(Multimedia.GALLERY_1.toString()) ? metadata.getProperty(
        Multimedia.GALLERY_1.toString()).getString() : EMPTY;
    this.gallery2 = metadata.hasProperty(Multimedia.GALLERY_2.toString()) ? metadata.getProperty(
        Multimedia.GALLERY_2.toString()).getString() : EMPTY;
    this.gallery3 = metadata.hasProperty(Multimedia.GALLERY_3.toString()) ? metadata.getProperty(
        Multimedia.GALLERY_3.toString()).getString() : EMPTY;
    this.news = metadata.hasProperty(Multimedia.NEWS_RELEASE.toString()) ? metadata.getProperty(
        Multimedia.NEWS_RELEASE.toString()).getString() : EMPTY;
    this.gallery1TitleENG = metadata.hasProperty(Multimedia.GALLERY_1_TITLE_E.toString()) ? metadata.getProperty(
        Multimedia.GALLERY_1_TITLE_E.toString()).getString() : EMPTY;
    this.gallery1TitleFRE = metadata.hasProperty(Multimedia.GALLERY_1_TITLE_F.toString()) ? metadata.getProperty(
        Multimedia.GALLERY_1_TITLE_F.toString()).getString() : EMPTY;
    this.gallery2TitleENG = metadata.hasProperty(Multimedia.GALLERY_2_TITLE_E.toString()) ? metadata.getProperty(
        "dam:gallery_2_title_en").getString() : EMPTY;
    this.gallery2TitleFRE = metadata.hasProperty(Multimedia.GALLERY_2_TITLE_F.toString()) ? metadata.getProperty(
        Multimedia.GALLERY_2_TITLE_F.toString()).getString() : EMPTY;
    this.gallery3TitleENG = metadata.hasProperty(Multimedia.GALLERY_3_TITLE_E.toString()) ? metadata.getProperty(
        "dam:gallery_3_title_en").getString() : EMPTY;
    this.gallery3TitleFRE = metadata.hasProperty(Multimedia.GALLERY_3_TITLE_F.toString()) ? metadata.getProperty(
        Multimedia.GALLERY_3_TITLE_F.toString()).getString() : EMPTY;
  }

  public String getTitleENG() {
    return titleENG;
  }

  public String getTitleFRE() {
    return titleFRE;
  }

  public String getContentENG() {
    return contentENG;
  }

  public String getContentFRE() {
    return contentFRE;
  }

  public String getPlace() {
    return place;
  }

  public String getNewDate() {
    return newDate;
  }

  public String getCopyright() {
    return copyright;
  }

  public String getTerms() {
    return terms;
  }

  public String getContributor() {
    return contributor;
  }

  public String getAudioFileNameO() {
    return audioFileNameO;
  }

  public String getAudioFileNameE() {
    return audioFileNameE;
  }

  public String getAudioFileNameF() {
    return audioFileNameF;
  }

  public String getVideoFileNameO() {
    return videoFileNameO;
  }

  public String getVideoFileNameE() {
    return videoFileNameE;
  }

  public String getVideoFileNameF() {
    return videoFileNameF;
  }

  public String getPresentationFileNameE() {
    return presentationFileNameE;
  }

  public String getPresentationFileNameF() {
    return presentationFileNameF;
  }

  public String getMp3FileNameO() {
    return mp3FileNameO;
  }

  public String getPhoto1Download() {
    return photo1Download;
  }

  public String getPhoto2Download() {
    return photo2Download;
  }

  public String getPhoto3Download() {
    return photo3Download;
  }

  public String getGallery1() {
    return gallery1;
  }

  public String getGallery2() {
    return gallery2;
  }

  public String getGallery3() {
    return gallery3;
  }

  public String getNews() {
    return news;
  }

  public String getGallery1TitleENG() {
    return gallery1TitleENG;
  }

  public String getGallery2TitleFRE() {
    return gallery2TitleFRE;
  }

  public String getGallery3TitleENG() {
    return gallery3TitleENG;
  }

  public String getGallery1TitleFRE() {
    return gallery1TitleFRE;
  }

  public String getGallery2TitleENG() {
    return gallery2TitleENG;
  }

  public String getGallery3TitleFRE() {
    return gallery3TitleFRE;
  }
  
  public boolean hasAudio() {
    return Utils.isNotEmpty(this.audioFileNameO) || Utils.isNotEmpty(this.audioFileNameE) || Utils.isNotEmpty(this.audioFileNameF);
  }
  
  public boolean hasVideo() {
    return Utils.isNotEmpty(this.videoFileNameO) || Utils.isNotEmpty(this.videoFileNameE) || Utils.isNotEmpty(this.videoFileNameF);
  }
  
  public boolean hasLink() {
    return Utils.isNotEmpty(this.gallery1) || Utils.isNotEmpty(this.gallery2) || Utils.isNotEmpty(this.gallery3);
  }
  
  public boolean hasPresentation() {
    return Utils.isNotEmpty(this.presentationFileNameE) || Utils.isNotEmpty(this.presentationFileNameF);
  }
  
  public boolean hasNews() {
    return Utils.isNotEmpty(this.news) ;
  }
  
  
}
