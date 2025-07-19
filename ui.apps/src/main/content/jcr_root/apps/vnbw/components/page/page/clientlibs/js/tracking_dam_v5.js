/**
http://www.gregreindel.com/google-analytics-tracking-added-automatically-jquery/
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
        "_gaq.push(['_trackEvent', 'Outbound', 'Affiliate', '" + url + "']);"
      );
    } else if (socialMedia.test(url)) {
      jQuery(this).attr(
        "onclick",
        "_gaq.push(['_trackEvent', 'Outbound', 'Social Media', '" + url + "']);"
      );
    } else if (myWebsiteAnchor.test(url)) {
      jQuery(this).attr(
        "onclick",
        "_gaq.push(['_trackEvent', 'Anchor', 'Click', '" + url + "']);"
      );
    } else if (!myWebsite.test(url)) {
      jQuery(this).attr(
        "onclick",
        "_gaq.push(['_trackEvent', 'Outbound', 'Other', '" + url + "']);"
      );
    } else if (isDownloadzip.test(url)) {
      jQuery(this).attr(
        "onclick",
        "_gaq.push(['_trackEvent', 'Download', 'Zip', '" + url + "']);"
      );
    } else if (isDownloadPdf.test(url)) {
      jQuery(this).attr(
        "onclick",
        "_gaq.push(['_trackEvent', 'Download', 'Pdf', '" + url + "']);"
      );
    } else if (isDownloadJpg.test(url)) {
      jQuery(this).attr(
        "onclick",
        "_gaq.push(['_trackEvent', 'Download', 'Jpg', '" + url + "']);"
      );
    } else if (isDownloadAsx.test(url)) {
      jQuery(this).attr(
        "onclick",
        "_gaq.push(['_trackEvent', 'Download', 'Asx', '" + url + "']);"
      );
    } else if (isDownloadDoc.test(url)) {
      jQuery(this).attr(
        "onclick",
        "_gaq.push(['_trackEvent', 'Download', 'Doc', '" + url + "']);"
      );
    } else {
    }
  }); //End each function
}); //End window load function
