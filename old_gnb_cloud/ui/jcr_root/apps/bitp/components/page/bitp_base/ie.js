function fixIEQuotes()
{
  var objQuotes = document.getElementsByTagName('q');
  var strOpen, strClose;

  for (var i=0; i<objQuotes.length; i++)
  {
    if (isNested(objQuotes[i]))
    {
      // Double-quotes
      strOpen = document.createTextNode('\u2018');
      strClose = document.createTextNode('\u2019');
    }
    else
    {
      // Single-quotes
      strOpen = document.createTextNode('\u201c');
      strClose = document.createTextNode('\u201d');
    }
    // Insert quotation marks around quote
    objQuotes[i].parentNode.insertBefore(strOpen, objQuotes[i]);
    objQuotes[i].appendChild(strClose);
  }

  objQuotes = null;
}

function isNested(objElement)
{
  var objParent = objElement;
  do // Check if nested quote
  {
    objParent = objParent.parentNode;
    if (objParent.tagName && objParent.tagName.toLowerCase() == 'q')
      return true;
  } while (objParent.parentNode);

  return false;
}


window.attachEvent( "onload", fixIEQuotes );




// fixes IE6 flickering bg image on links
document.execCommand('BackgroundImageCache', false, true);