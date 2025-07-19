/**styleswitcher.js**/
function setActiveStyleSheet(title) {
  document.body.className = title;
}

function getActiveStyleSheet() {
  return document.body.className;
}

function getPreferredStyleSheet() {
  return document.body.className;
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = '; expires=' + date.toGMTString();
  } else expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

window.onload = function (e) {
  var cookie = readCookie('style');
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
};

window.onunload = function (e) {
  var title = getActiveStyleSheet();
  createCookie('style', title, 365);
};

var cookie = readCookie('style');
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
