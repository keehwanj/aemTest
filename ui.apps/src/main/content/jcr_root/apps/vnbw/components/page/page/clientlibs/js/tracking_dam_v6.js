/**
http://www.gregreindel.com/google-analytics-tracking-added-automatically-jquery/
UA version
**/

jQuery(window).on("load", function () {
  var myWebsite = new RegExp(location.host);
  var myWebsiteAnchor = new RegExp("#+");
  var badlinkJs = new RegExp("^javascript:+");
  var socialMedia = new RegExp("plus|linkedin|pinterest|facebook|twitter+");
  var affiliateLink = new RegExp("/go/+");
  var isDownloadPdf = new RegExp(".pdf$");
  var isDownloadzip = new RegExp(".zip$");
  var isDownloadJpg = new RegExp(".jpg$");
  var isDownloadAsx = new RegExp(".asx$");
  var isDownloadDoc = new RegExp(".doc$");

  jQuery("a").each(function () {
    var url = jQuery(this).attr("href");

    if (badlinkJs.test(url)) {
    } else if (affiliateLink.test(url)) {
      jQuery(this).attr(
        "onclick",
        "ga('send', 'event', 'outbound', 'affiliate', '" + url + "']);"
      );
    } else if (socialMedia.test(url)) {
      jQuery(this).attr(
        "onclick",
        "ga('send', 'event', 'outbound', 'social media', '" + url + "']);"
      );
    } else if (myWebsiteAnchor.test(url)) {
      jQuery(this).attr(
        "onclick",
        "ga('send', 'event', 'anchor', 'click', '" + url + "']);"
      );
    } else if (!myWebsite.test(url)) {
      jQuery(this).attr(
        "onclick",
        "ga('send', 'event', 'outbound', 'other', '" + url + "']);"
      );
    } else if (isDownloadzip.test(url)) {
      jQuery(this).attr(
        "onclick",
        "ga('send', 'event', 'download', 'zip', '" + url + "']);"
      );
    } else if (isDownloadPdf.test(url)) {
      jQuery(this).attr(
        "onclick",
        "ga('send', 'event', 'download', 'pdf', '" + url + "']);"
      );
    } else if (isDownloadJpg.test(url)) {
      jQuery(this).attr(
        "onclick",
        "ga('send', 'event', 'download', 'jpg', '" + url + "']);"
      );
    } else if (isDownloadAsx.test(url)) {
      jQuery(this).attr(
        "onclick",
        "ga('send', 'event', 'download', 'asx', '" + url + "']);"
      );
    } else if (isDownloadDoc.test(url)) {
      jQuery(this).attr(
        "onclick",
        "ga('send', 'event', 'download', 'doc', '" + url + "']);"
      );
    } else {
    }
  }); //End each function
}); //End window load function
