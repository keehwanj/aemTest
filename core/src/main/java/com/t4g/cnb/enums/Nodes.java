package com.t4g.cnb.enums;

public enum Nodes {
  PAGE("Page", "cq", "cq:Page"),
  PAGE_CONTENT("PageContent", "cq", "cq:PageContent"),
  JCR_CONTENT("jcr:content", "jcr", "jcr:content"),
  UNSTRUCTURED("unstructured", "nt", "nt:unstructured"),
  ORDERED_FOLDER("OrderedFolder", "sling", "sling:OrderedFolder"),
  ASSET("Asset", "dam", "dam:Asset"),
  ASSET_CONTENT("AssetContent", "dam", "dam:AssetContent");

  private final String nodeName;
  private final String nodeType;
  private final String library;

  Nodes(String nodeName, String library, String nodeType) {
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
