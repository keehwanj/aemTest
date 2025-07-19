package com.t4g.cnb.tag;

import java.util.Comparator;
import java.util.Map;

public class DepartmentValueComparator implements Comparator<String> {
  Map<String,String> base;
  public DepartmentValueComparator(Map<String,String> base) {
      this.base = base;
  }
  
  public int compare(String a, String b) {
    return toUpperCaseSansAccent(base.get(a)).compareTo(toUpperCaseSansAccent(base.get(b)));      
  }  
  
  private static final String UPPERCASE_ASCII =
    "AEIOU" // grave
    + "AEIOUY" // acute
    + "AEIOUY" // circumflex
    + "AON" // tilde
    + "AEIOUY" // umlaut
    + "A" // ring
    + "C" // cedilla
    + "OU" // double acute
    ;

  private static final String UPPERCASE_UNICODE =
    "\u00C0\u00C8\u00CC\u00D2\u00D9"
    + "\u00C1\u00C9\u00CD\u00D3\u00DA\u00DD"
    + "\u00C2\u00CA\u00CE\u00D4\u00DB\u0176"
    + "\u00C3\u00D5\u00D1"
    + "\u00C4\u00CB\u00CF\u00D6\u00DC\u0178"
    + "\u00C5"
    + "\u00C7"
    + "\u0150\u0170"
    ;
  
  private String toUpperCaseSansAccent(String txt) {
    if (txt == null) {
       return null;
    } 
    String txtUpper = txt.toUpperCase();
    StringBuilder sb = new StringBuilder();
    int n = txtUpper.length();
    for (int i = 0; i < n; i++) {
       char c = txtUpper.charAt(i);
       int pos = UPPERCASE_UNICODE.indexOf(c);
       if (pos > -1){
         sb.append(UPPERCASE_ASCII.charAt(pos));
       }
       else {
         sb.append(c);
       }
    }
    return sb.toString();
}
  
  
  
}
