
function setPrintCss() {
    if ( $('#colSecondary>div').size() <= 1 ) {
        $('#envelope').addClass('printCssFull');
    }
}
/* =================================================================== */



/* =================================================================== */
function setContentHeights() {
    var contentHeight = $('#colPrimary').height();
    var colSecondaryHeight = $('#colSecondary').height();
    if (colSecondaryHeight > contentHeight) {
        $('#colPrimary').height(colSecondaryHeight +'px');
    }
}
/* =================================================================== */





/* =================================================================== */
// for suckerfish dhtml menus
// dependencies: jQuery
jQuery.fn.sfHover = function(className) {
    $(this).each( function() {
        $(this).hover( function() {
            $(this).addClass(className);
        }, function() {
            $(this).removeClass(className);
        });
    });
    return this;
};
/* =================================================================== */


/* =================================================================== */
// adds padding to bottom of drop down menus
addPaddingToDhtmlMenus = function() {
    $('#navPrimary ul').find('li:last').each( function() {
        $(this).addClass('last');
    })
}
/* =================================================================== */



/* =================================================================== */
var search = {
    
    searchFormId        : 'search',
    selectId            : 'sg',
    selectedOptionId    : 'selectedOption',
    optionsListId       : 'searchOptions',
    
    init : function() {
        $('#search').find('select').hide();
        search.createDropList();
    },
    
    createDropList : function() {
        // loop through all the options in the select
        $('#'+search.selectId+' option').each( function() {
            // if it's the first option, use this is the default selected and create the 'fake' list
            if ($(this).is(':first-child') ) {
                $('<a id="'+search.selectedOptionId+'" href="#">'+$(this).text()+'</a><ul id="'+search.optionsListId+'"></ul>').insertBefore('#'+search.selectId);
                search.updateSelect($(this).text());
            }
            // all the rest of the options to the fake list
            $('<li><a href="#">'+$(this).text()+'</a></li>').appendTo('#'+search.optionsListId).click( function(e) {
                e.preventDefault();
                search.listItemClick(e,this);
            });
        });
        search.attachEvents();
    },
    
    attachEvents : function() {
        $('#'+search.selectedOptionId).click( function(e) {
            e.preventDefault();
            e.stopPropagation();
            search.selectedOptionClick(e);
        });
    },
    
    selectedOptionClick : function(e) {
        var $list = $('#'+search.optionsListId);
        if ( $list.is(':visible') ) {
            $list.hide();
            $('body').unbind('click.searchoption');
        } else {
            $list.show();
        }
        $('body').bind('click.searchoption', function(e) {
            $list.hide();
            $('body').unbind('click.searchoption');
        });
    },
    
    listItemClick : function(e,target) {
        var value = $(target).text();
        $('#'+search.selectedOptionId).text(value);
        $('#'+search.optionsListId).hide();
        search.updateSelect(value);
    }, 
    
    updateSelect : function(value) {
        $('#'+search.selectId+' option').each( function() {
            if ($(this).text() == value) {
                $(this).attr('selected','selected');
            }   
        });
    }
    
}
/* =================================================================== */



/* =================================================================== */
/* Show/Hide Select box*/
var shortcutDropdown = {

    listHeight      : Number,
    listYPos        : Number,       
    windowOffset    : Number,

    init : function() {
        $('.fauxSelect').wrapInner('<a href="#" class="showSelect"></a>').click( function(e) {
            e.preventDefault();
            e.stopPropagation();
            shortcutDropdown.clickEvent(e, this);
        });     
    },
    
    clickEvent : function(e, obj) {
        var $select = $(obj).next('.selectList');
        
        shortcutDropdown.listHeight = $select.height();
        shortcutDropdown.listYPos = $select.prev('.fauxSelect').offset().top;
        shortcutDropdown.windowOffset = $('html').scrollTop();
        
        if ($select.is(':visible') ) {
            shortcutDropdown.closeDropdown(e, obj, $select);
        } else {
            shortcutDropdown.openDropdown(e, obj, $select);
        }
    },
    
    openDropdown : function(e, obj, $select) {
        var iWhereItHappened = (e.pageY - shortcutDropdown.windowOffset);   
        var innerHeight = '';
        if (!window.innerHeight) {
            innerHeight = document.documentElement.clientHeight;
        } else {
            innerHeight = window.innerHeight;
        }
        
        // if where it happened on the page + the list height is greater than viewport height
        // we need to open the list up, not down.
        if ( (iWhereItHappened + shortcutDropdown.listHeight + 20) > innerHeight) {
            var totalHeight = (shortcutDropdown.listHeight + $select.prev('.fauxSelect').height()) - 1;
            $select.addClass('up').animate(
                {  'height': 'toggle', 'top': '-='+totalHeight+'px' }, 
                { duration: "slow" }
            );
        } else {
            $select.slideDown();
        }
        $('body').bind('click.fauxselect', function(e) {
            shortcutDropdown.closeDropdown(e, obj, $select);
            $('body').unbind('click.fauxselect');
        });
    },
    
    closeDropdown : function(e, obj, $select) {
        if ( $select.hasClass('up') ) {
            var totalHeight = (shortcutDropdown.listHeight + $select.prev('.fauxSelect').height()) - 1;
            $select.removeClass('up').animate(
                { "height": "toggle", 'top': '+='+totalHeight+'px' }, 
                { duration: "slow" }
            );
        } else {
            $select.slideUp();
        }
        $('body').unbind('click.fauxselect');
    }

}
/* =================================================================== */




/* =================================================================== */
// use this to automatically clear a text box of it's default value
// if nothing is typed in the box, the script will put the default value back
// useful on sites where search boxes don't have a seperate label
// you can use it for more than one box per page using the txtBoxes array
txtBoxClear = {
    txtBoxes : ['searchField'],
    init: function() {
        for (i=0;i<txtBoxClear.txtBoxes.length;i++) {
            var oCurrentTxtBox = document.getElementById(txtBoxClear.txtBoxes[i]);
            if (!oCurrentTxtBox) { continue; }
            oCurrentTxtBox.defaultVal = oCurrentTxtBox.defaultValue;
            txtBoxClear.clearBox(oCurrentTxtBox);
        }
    },
    clearBox : function(txtBox) {
        txtBox.onfocus = function() {
            if (txtBox.value == txtBox.defaultVal) { txtBox.value = ''; } 
        };
        txtBox.onblur = function() {
            if (txtBox.value == '') { txtBox.value = txtBox.defaultVal; }
        };
    }
};
/* =================================================================== */



/* =================================================================== */
function sectionNav() {
    $('div.selectNav input.button').click( function() {
        var oSelect = $('select.sectionNav')[0];
        var sIndex = oSelect.selectedIndex;
        if (sIndex != 0) {
            window.location = oSelect.options[sIndex].value;
        }
    });
}
/* =================================================================== */




/* =================================================================== */
// various link functionality - popups, external, onstate
// original script taken from Jeremy Keith
// dependencies: jQuery
var anchors = {
    a: Object,
    addBehaviors : function() {
        $('a').each( function() {
            var $a = $(this);
            // external links
            if ( ($a.attr('rel')=="external") || $a.hasClass('external') || $a.hasClass('pdf') || $a.hasClass('popupFull') ) {
                $a.click( function(e) {
                    e.preventDefault();
                    return anchors.openWin(this,"");
                });
            }
            // popup
            if ( $a.hasClass('popup') ) {
                $a.click( function() {
                    return anchors.openWin(this,"height=550,width=600,scrollbars=yes");
                });
            }
            // onstate
            if ( $a.attr('href') == location.href ) {
                $a.addClass('onstate');
            }
        });
    },
    openWin : function(o,params) {
        window.open(o.href, "newwin","" + params + "");
        return false;
    }
};
/* =================================================================== */






/* =================================================================== */
 var textSize = {
    // variables 
    cookieName      : 'jaxFontSize',
    baseFont        : 16, /* base browser font size - generally 16 */
    fontSize1       : 68.75,
    rangeLow        : 11,
    rangeHigh       : 17,
    disabledClass   : 'disabled',
    
    // check and see if there is an existing cookie, and if so, use it to set the font size
    checkForCookie : function() {
        var oCookie = getCookie(textSize.cookieName);
        if (oCookie) {
            textSize.updateFontSize('',oCookie);
        } else {
            textSize.updateFontSize('',textSize.fontSize1);
        }
    },
    
    disableButtons : function(cookieVal) {
        var iFontInPx = ((cookieVal/100) * textSize.baseFont);
        if (iFontInPx <= textSize.rangeLow) {
            $('.textSmaller').addClass('disabled');
        }
        else if (iFontInPx >= textSize.rangeHigh) {
            $('.textBigger').addClass('disabled');
            $('.textSmaller').removeClass('disabled');
        }
        else if (iFontInPx > textSize.rangeLow){
            $('.textSmaller').removeClass('disabled');
        }
    },
    
    setUpFontSizingButtons : function() {
        //$('.textControls').remove().appendTo('#envelope');
        $('.textSmaller').click( function(e) {
            e.preventDefault();
            var iFontSize = textSize.checkCurrentFontSize();
            if (iFontSize <= textSize.rangeLow) {
                return;
            }
            $('.textControls a').removeClass(textSize.disabledClass);
            var iNewFontSize = ((iFontSize-1)/textSize.baseFont) * 100;
            textSize.updateFontSize(e,iNewFontSize);
            if ( (iFontSize-1) == textSize.rangeLow ) {
                $(this).addClass('disabled');   
            }
        });
        $('.textBigger').click( function(e) {
         
            e.preventDefault();
            var iFontSize = textSize.checkCurrentFontSize();
            if (iFontSize >= textSize.rangeHigh) {
                return;
            }
            $('.textControls a').removeClass(textSize.disabledClass);
            var iNewFontSize = ((iFontSize+1)/textSize.baseFont) * 100;
            textSize.updateFontSize(e,iNewFontSize);
            if ( (iFontSize+1) == textSize.rangeHigh ) {
                $(this).addClass('disabled');   
            }
        });
    },
    
    checkCurrentFontSize : function() {
        var iFontSize = parseFloat($('body').css('fontSize'));
        iFontSize = (iFontSize/100) * textSize.baseFont;
        return iFontSize;
    },
    
    updateFontSize : function(e,size) {
        //alert('new font-size: ' + size+'%');
        $('body').css('font-size', size+'%');
        textSize.addCookie(size);
    },
    
    addCookie : function(info) {
        // checking domain should fix subdomain text size issues
        var dd = document.domain;
        if ( (dd.indexOf("jax.org")) >= 0 ) {
            setCookie(textSize.cookieName, info, '1000', '/', 'jax.org');
        } else {
            setCookie(textSize.cookieName, info, '1000', '/');
        }
        this.disableButtons(info);
    }
}
/* =================================================================== */


/* =================================================================== */
// get, set, and delete cookies
// ref: http://www.dustindiaz.com/top-ten-javascript/
function getCookie( name ) {
    var start = document.cookie.indexOf( name + "=" );
    var len = start + name.length + 1;
    if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
        return null;
    }
    if ( start == -1 ) { return null; }
    var end = document.cookie.indexOf( ";", len );
    if ( end == -1 ) { end = document.cookie.length; }
    return unescape( document.cookie.substring( len, end ) );
}

function setCookie( name, value, expires, path, domain, secure ) {
    var today = new Date();
    today.setTime( today.getTime() );
    if ( expires ) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date( today.getTime() + (expires) );
    document.cookie = name+"="+escape( value ) +
        ( ( expires ) ? ";expires="+expires_date.toGMTString() : "" ) + //expires.toGMTString()
        ( ( path ) ? ";path=" + path : "" ) +
        ( ( domain ) ? ";domain=" + domain : "" ) +
        ( ( secure ) ? ";secure" : "" );
}

function deleteCookie( name, path, domain ) {
    if ( getCookie( name ) ) { 
            document.cookie = name + "=" +
            ( ( path ) ? ";path=" + path : "") +
            ( ( domain ) ? ";domain=" + domain : "" ) +
            ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
    }
}

/* =================================================================== */

// function: supermenus

// desc: functionality for the main nav menus

var supermenus = function(){
    var sNavId = 'navLevelOne';
    var sMenuClass = 'supermenu';
    var timerOpen, timerClose;    

    var setUpEvents = function() {  
        $('#'+sNavId + ' a').mouseenter( function(e) {
            if (timerClose) {
                killTimer(timerClose);
            }
            hideAllMenus();
            var current = this;
            // if we're coming FROM a nav item OR a menu, open menu right away
            if ( isRelatedTargetNav(e) || isRelatedTargetMenu(e) ) {
                showMenu(current);
            } else {
                timerOpen = window.setTimeout(function() {
                    showMenu(current);
                }, 250);
            }
        }).mouseleave( function(e) {
            // if we mouse out of the nav item, kill the timer
            if (timerOpen) {
                killTimer(timerOpen);
            }

            // if mousing onto a menu, keep it visible. 
            // if mousing somewhere else, hide the menu
            if ( !isRelatedTargetMenu(e) ) {
                hideMenu( $(this) );
            }
        });

        // leave the menu
        $('.'+sMenuClass).mouseleave( function(e) {
            // if you mouse back onto a nav item
            if ( isRelatedTargetNav(e) ) {
                hideAllMenus();
            } else {
                // else close all menus
                timerClose = setTimeout(function() {
                    hideAllMenus();
                }, 500);
            }
        }).mouseenter( function(e) {
            if (timerClose) {
                killTimer(timerClose);
            }
        });        
    };

    var isRelatedTargetNav = function(e) {
        if ( $(e.relatedTarget).closest('#' + sNavId).length != 0) {
            return true;
        }
        return false;
    };
    
    var isRelatedTargetMenu = function(e) {
        if ( $(e.relatedTarget).closest('.' + sMenuClass).length != 0) {
            return true;
        }
        return false;
    };

    var showMenu = function(el) {
        $parentLi = $(el).parent('li');
        $parentLi.addClass('hover');
        var menuName = $parentLi.attr("id");
        $('#'+menuName+'Menu').show();
    };

    var hideMenu = function(el) {
        $parentLi = $(el).parent('li');
        $parentLi.removeClass('hover');
        var menuName = $parentLi.attr("id");
        $('#'+menuName+'Menu').hide();
    };

    var hideAllMenus = function()   {
        $('.'+sMenuClass).hide();
        $('#'+sNavId + ' li').removeClass('hover');
    };  

    var killTimer = function(timer) {
        if (typeof timer != "undefined") {
            clearTimeout(timer);
        }
    };

    return {
        init : setUpEvents
    }

}();


/* =================================================================== */

/* =================================================================== */
//Browser check
var IS_DOM = (document.getElementById) ? true : false;
var IS_IE = (document.all) ? true : false;
var IS_IE50 = (navigator.userAgent.indexOf("IE 5.0") != -1);
var IS_Mac = (navigator.appVersion.indexOf("Mac") != -1);
/* =================================================================== */



