package com.t4g.cnb.enums;

public enum Multimedia {
  NEW_DATE("newDate", "Date", "datetime"),
  PLACE("place", "Location", "textfield"),
  AUDIOFILENAME_O("audioFileName_o", "Audio - Original", "pathfield"),
  AUDIOFILENAME_F("audioFileName_f", "Audio - French", "pathfield"),
  AUDIOFILENAME_E("audioFileName_e", "Audio - English", "pathfield"),
  VIDEOFILENAME_O("videoFileName_o", "Video - Original", "pathfield"),
  VIDEOFILENAME_F("videoFileName_f", "Video - French", "pathfield"),
  VIDEOFILENAME_E("videoFileName_e", "Video - English", "pathfield"),
  PRESENTATIONFILENAME_F("presentationFileName_f", "Presentation - French", "pathcompletion"),
  PRESENTATIONFILENAME_E("presentationFileName_e", "Presentation - English", "pathcompletion"),
  MP3FILENAME_O("mp3FileName_o", "MP3 - Original", "pathfield"),
  TITLE_E("title_E", "Title - EN", "textfield"),
  TITLE_F("title_F", "Title - FR", "textfield"),
  CONTENT_E("content_E", "Description - EN", "textfield"),
  CONTENT_F("content_F", "Description - FR","textfield"),
  GALLERY_1("gallery_1", "Link 1", "pathcompletion"),
  GALLERY_2("gallery_2", "Link 2", "pathcompletion"),
  GALLERY_3("gallery_3", "Link 3", "pathcompletion"),
  PHOTO_1_DOWNLOAD("photo_1_download", "Photo 1", "pathfield"),
  PHOTOCONTENT_1_E("photoContent_1_E", "Photo 1 Description - EN", "textfield"),
  PHOTOCONTENT_1_F("photoContent_1_F","Photo 1 Description - FR", "textfield"),
  PHOTO_2_DOWNLOAD("photo_2_download", "Photo 2", "pathfield"),
  PHOTOCONTENT_2_E("photoContent_2_E","Photo 2 Description - EN", "textfield"),
  PHOTOCONTENT_2_F("photoContent_2_F", "Photo 2 Description - FR", "textfield"),
  PHOTO_3_DOWNLOAD("photo_3_download", "Photo 3", "pathfield"),
  PHOTOCONTENT_3_E("photoContent_3_E", "Photo 3 Description - EN", "textfield"),
  PHOTOCONTENT_3_F("photoContent_3_F", "Photo 3 Description - FR", "textfield"),
  NEWS_RELEASE("newsRelease", "News Release", "textfield"),
  GALLERY_1_TITLE_E("gallery_1_title_en", "Link 1 Title EN", "textfield"),
  GALLERY_2_TITLE_E("gallery_2_title_en", "Link 2 Title EN", "textfield"),
  GALLERY_3_TITLE_E("gallery_3_title_en", "Link 3 Title EN", "textfield"),
  GALLERY_1_TITLE_F("gallery_1_title_fr", "Link 1 Title FR", "textfield"),
  GALLERY_2_TITLE_F("gallery_2_title_fr", "Link 2 Title FR", "textfield"),
  GALLERY_3_TITLE_F("gallery_3_title_fr", "Link 3 Title FR", "textfield")
   ;

  private final String field;
  private final String prefix = "dam:";
  private final String label;
  private final String xtype;

  Multimedia(String field, String label, String xtype) {
    this.field = field;
    this.label = label;
    this.xtype = xtype;
  }

  public String field() {
    return this.field;
  }

  public String label() {
    return this.label;
  }

  public String xtype() {
    return this.xtype;
  }


  public String toString() {
    return this.prefix + this.field;
  }

}
