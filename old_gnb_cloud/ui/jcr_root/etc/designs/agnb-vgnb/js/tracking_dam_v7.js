/**
https://productforums.google.com/forum/#!topic/analytics/6YCKNX19Ukk

**/
if (document.getElementsByTagName) {


        var hrefs = document.getElementsByTagName("a");
        for (var l = 0; l < hrefs.length; l++) {

            try{

                    if (hrefs[l].protocol == "mailto:") {
                            startListening(hrefs[l],"click",trackMailto);
                    } else if (hrefs[l].hostname == location.host) {
                            var path = hrefs[l].pathname + hrefs[l].search;
                            var isDoc = path.match(/\.(?:doc|eps|jpg|png|svg|xls|ppt|pdf|xls|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3)($|\&|\?)/);
                            if (isDoc) {
                                    startListening(hrefs[l],"click",trackExternalLinks);
                            }
                    } else if (!hrefs[l].href.match(/^javascript:/)) {
                            startListening(hrefs[l],"click",trackExternalLinks);
                    }
            }
            catch(e){
                    continue;
            }
        }
}

function startListening (obj,evnt,func) {
        if (obj.addEventListener) {
                obj.addEventListener(evnt,func,false);
        } else if (obj.attachEvent) {
                obj.attachEvent("on" + evnt,func);
        }
}

function trackMailto (evnt) {
        var href = (evnt.srcElement) ? evnt.srcElement.href : this.href;
        var mailto = "/mailto/" + href.substring(7);
       if (typeof(_gaq) == "object") _gaq.push(['_trackPageview', lnk]); 
}

function trackExternalLinks (evnt) {
        var e = (evnt.srcElement) ? evnt.srcElement : this;
        while (e.tagName != "A") {
                e = e.parentNode;
        }
        var lnk = (e.pathname.charAt(0) == "/") ? e.pathname : "/" + e.pathname;
        if (e.search && e.pathname.indexOf(e.search) == -1) lnk += e.search;
        if (e.hostname != location.host) lnk = "/external/" + e.hostname + lnk;
        if (typeof(_gaq) == "object") _gaq.push(['_trackPageview', lnk]);         
}