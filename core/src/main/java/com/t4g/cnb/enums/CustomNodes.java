package com.t4g.cnb.enums;

public enum CustomNodes {
  RENDITION("renditions", "nt", "nt:folder"),
  METADATA("metadata", "nt", "nt:unstructured"),
  MULTIMEDIA("multimedia", "sling", "sling:OrderedFolder"),
  GNB_DAM("gnb", "sling", "sling:Folder");

  private final String nodeName;
  private final String nodeType;
  private final String library;

  CustomNodes(String nodeName, String library, String nodeType) {
    this.nodeName = nodeName;
    this.library = library;
    this.nodeType = nodeType;
  }

  public String nodeName() {
    return this.nodeName;
  }

  public String nodeType() {
    return this.nodeType;
  }

  public String library() {
    return this.library;
  }
}
