/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2009 M. Alsup
 * Version: 2.72 (09-SEP-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6 or later
 *
 * Originally based on the work of:
 *      1) Matt Oakes
 *      2) Torsten Baldes (http://medienfreunde.com/lab/innerfade/)
 *      3) Benjamin Sterling (http://www.benjaminsterling.com/experiments/jqShuffle/)
 */
(function ($) {
  var ver = '2.72';

  // if $.support is not defined (pre jQuery 1.3) add what I need
  if ($.support == undefined) {
    $.support = {
      opacity: !$.browser.msie,
    };
  }

  function debug(s) {
    if ($.fn.cycle.debug) log(s);
  }
  function log() {
    if (window.console && window.console.log)
      window.console.log('[cycle] ' + Array.prototype.join.call(arguments, ' '));
    //$('body').append('<div>'+Array.prototype.join.call(arguments,' ')+'</div>');
  }

  // the options arg can be...
  //   a number  - indicates an immediate transition should occur to the given slide index
  //   a string  - 'stop', 'pause', 'resume', or the name of a transition effect (ie, 'fade', 'zoom', etc)
  //   an object - properties to control the slideshow
  //
  // the arg2 arg can be...
  //   the name of an fx (only used in conjunction with a numeric value for 'options')
  //   the value true (only used in conjunction with a options == 'resume') and indicates
  //       that the resume should occur immediately (not wait for next timeout)

  $.fn.cycle = function (options, arg2) {
    var o = { s: this.selector, c: this.context };

    // in 1.3+ we can fix mistakes with the ready state
    if (this.length === 0 && options != 'stop') {
      if (!$.isReady && o.s) {
        log('DOM not ready, queuing slideshow');
        $(function () {
          $(o.s, o.c).cycle(options, arg2);
        });
        return this;
      }
      // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
      log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
      return this;
    }

    // iterate the matched nodeset
    return this.each(function () {
      var opts = handleArguments(this, options, arg2);
      if (opts === false) return;

      // stop existing slideshow for this container (if there is one)
      if (this.cycleTimeout) clearTimeout(this.cycleTimeout);
      this.cycleTimeout = this.cyclePause = 0;

      var $cont = $(this);
      var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
      var els = $slides.get();
      if (els.length < 2) {
        log('terminating; too few slides: ' + els.length);
        return;
      }

      var opts2 = buildOptions($cont, $slides, els, opts, o);
      if (opts2 === false) return;

      var startTime = opts2.continuous ? 10 : getTimeout(opts2.currSlide, opts2.nextSlide, opts2, !opts2.rev);

      // if it's an auto slideshow, kick it off
      if (startTime) {
        startTime += opts2.delay || 0;
        if (startTime < 10) startTime = 10;
        debug('first timeout: ' + startTime);
        this.cycleTimeout = setTimeout(function () {
          go(els, opts2, 0, !opts2.rev);
        }, startTime);
      }
    });
  };

  // process the args that were passed to the plugin fn
  function handleArguments(cont, options, arg2) {
    if (cont.cycleStop == undefined) cont.cycleStop = 0;
    if (options === undefined || options === null) options = {};
    if (options.constructor == String) {
      switch (options) {
        case 'stop':
          cont.cycleStop++; // callbacks look for change
          if (cont.cycleTimeout) clearTimeout(cont.cycleTimeout);
          cont.cycleTimeout = 0;
          $(cont).removeData('cycle.opts');
          return false;
        case 'pause':
          cont.cyclePause = 1;
          return false;
        case 'resume':
          cont.cyclePause = 0;
          if (arg2 === true) {
            // resume now!
            options = $(cont).data('cycle.opts');
            if (!options) {
              log('options not found, can not resume');
              return false;
            }
            if (cont.cycleTimeout) {
              clearTimeout(cont.cycleTimeout);
              cont.cycleTimeout = 0;
            }
            go(options.elements, options, 1, 1);
          }
          return false;
        case 'prev':
        case 'next':
          var opts = $(cont).data('cycle.opts');
          if (!opts) {
            log('options not found, "prev/next" ignored');
            return false;
          }
          $.fn.cycle[options](opts);
          return false;
        default:
          options = { fx: options };
      }
      return options;
    } else if (options.constructor == Number) {
      // go to the requested slide
      var num = options;
      options = $(cont).data('cycle.opts');
      if (!options) {
        log('options not found, can not advance slide');
        return false;
      }
      if (num < 0 || num >= options.elements.length) {
        log('invalid slide index: ' + num);
        return false;
      }
      options.nextSlide = num;
      if (cont.cycleTimeout) {
        clearTimeout(cont.cycleTimeout);
        cont.cycleTimeout = 0;
      }
      if (typeof arg2 == 'string') options.oneTimeFx = arg2;
      go(options.elements, options, 1, num >= options.currSlide);
      return false;
    }
    return options;
  }

  function removeFilter(el, opts) {
    if (!$.support.opacity && opts.cleartype && el.style.filter) {
      try {
        el.style.removeAttribute('filter');
      } catch (smother) {} // handle old opera versions
    }
  }

  // one-time initialization
  function buildOptions($cont, $slides, els, options, o) {
    // support metadata plugin (v1.0 and v2.0)
    var opts = $.extend(
      {},
      $.fn.cycle.defaults,
      options || {},
      $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {}
    );
    if (opts.autostop) opts.countdown = opts.autostopCount || els.length;

    var cont = $cont[0];
    $cont.data('cycle.opts', opts);
    opts.$cont = $cont;
    opts.stopCount = cont.cycleStop;
    opts.elements = els;
    opts.before = opts.before ? [opts.before] : [];
    opts.after = opts.after ? [opts.after] : [];
    opts.after.unshift(function () {
      opts.busy = 0;
    });

    // push some after callbacks
    if (!$.support.opacity && opts.cleartype)
      opts.after.push(function () {
        removeFilter(this, opts);
      });
    if (opts.continuous)
      opts.after.push(function () {
        go(els, opts, 0, !opts.rev);
      });

    saveOriginalOpts(opts);

    // clearType corrections
    if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg) clearTypeFix($slides);

    // container requires non-static position so that slides can be position within
    if ($cont.css('position') == 'static') $cont.css('position', 'relative');
    if (opts.width) $cont.width(opts.width);
    if (opts.height && opts.height != 'auto') $cont.height(opts.height);

    if (opts.startingSlide) opts.startingSlide = parseInt(opts.startingSlide);

    // if random, mix up the slide array
    if (opts.random) {
      opts.randomMap = [];
      for (var i = 0; i < els.length; i++) opts.randomMap.push(i);
      opts.randomMap.sort(function (a, b) {
        return Math.random() - 0.5;
      });
      opts.randomIndex = 0;
      opts.startingSlide = opts.randomMap[0];
    } else if (opts.startingSlide >= els.length) opts.startingSlide = 0; // catch bogus input
    opts.currSlide = opts.startingSlide = opts.startingSlide || 0;
    var first = opts.startingSlide;

    // set position and zIndex on all the slides
    $slides
      .css({ position: 'absolute', top: 0, left: 0 })
      .hide()
      .each(function (i) {
        var z = first ? (i >= first ? els.length - (i - first) : first - i) : els.length - i;
        $(this).css('z-index', z);
      });

    // make sure first slide is visible
    $(els[first]).css('opacity', 1).show(); // opacity bit needed to handle restart use case
    removeFilter(els[first], opts);

    // stretch slides
    if (opts.fit && opts.width) $slides.width(opts.width);
    if (opts.fit && opts.height && opts.height != 'auto') $slides.height(opts.height);

    // stretch container
    var reshape = opts.containerResize && !$cont.innerHeight();
    if (reshape) {
      // do this only if container has no size http://tinyurl.com/da2oa9
      var maxw = 0,
        maxh = 0;
      for (var j = 0; j < els.length; j++) {
        var $e = $(els[j]),
          e = $e[0],
          w = $e.outerWidth(),
          h = $e.outerHeight();
        if (!w) w = e.offsetWidth;
        if (!h) h = e.offsetHeight;
        maxw = w > maxw ? w : maxw;
        maxh = h > maxh ? h : maxh;
      }
      if (maxw > 0 && maxh > 0) $cont.css({ width: maxw + 'px', height: maxh + 'px' });
    }

    if (opts.pause)
      $cont.hover(
        function () {
          this.cyclePause++;
        },
        function () {
          this.cyclePause--;
        }
      );

    if (supportMultiTransitions(opts) === false) return false;

    // apparently a lot of people use image slideshows without height/width attributes on the images.
    // Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
    var requeue = false;
    options.requeueAttempts = options.requeueAttempts || 0;
    $slides.each(function () {
      // try to get height/width of each slide
      var $el = $(this);
      this.cycleH = opts.fit && opts.height ? opts.height : $el.height();
      this.cycleW = opts.fit && opts.width ? opts.width : $el.width();

      if ($el.is('img')) {
        // sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when
        // an image is being downloaded and the markup did not include sizing info (height/width attributes);
        // there seems to be some "default" sizes used in this situation
        var loadingIE = $.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete;
        var loadingFF = $.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete;
        var loadingOp =
          $.browser.opera &&
          ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) &&
          !this.complete;
        var loadingOther = this.cycleH == 0 && this.cycleW == 0 && !this.complete;
        // don't requeue for images that are still loading but have a valid size
        if (loadingIE || loadingFF || loadingOp || loadingOther) {
          if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) {
            // track retry count so we don't loop forever
            log(
              options.requeueAttempts,
              ' - img slide not loaded, requeuing slideshow: ',
              this.src,
              this.cycleW,
              this.cycleH
            );
            setTimeout(function () {
              $(o.s, o.c).cycle(options);
            }, opts.requeueTimeout);
            requeue = true;
            return false; // break each loop
          } else {
            log('could not determine size of image: ' + this.src, this.cycleW, this.cycleH);
          }
        }
      }
      return true;
    });

    if (requeue) return false;

    opts.cssBefore = opts.cssBefore || {};
    opts.animIn = opts.animIn || {};
    opts.animOut = opts.animOut || {};

    $slides.not(':eq(' + first + ')').css(opts.cssBefore);
    if (opts.cssFirst) $($slides[first]).css(opts.cssFirst);

    if (opts.timeout) {
      opts.timeout = parseInt(opts.timeout);
      // ensure that timeout and speed settings are sane
      if (opts.speed.constructor == String) opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed);
      if (!opts.sync) opts.speed = opts.speed / 2;
      while (opts.timeout - opts.speed < 250)
        // sanitize timeout
        opts.timeout += opts.speed;
    }
    if (opts.easing) opts.easeIn = opts.easeOut = opts.easing;
    if (!opts.speedIn) opts.speedIn = opts.speed;
    if (!opts.speedOut) opts.speedOut = opts.speed;

    opts.slideCount = els.length;
    opts.currSlide = opts.lastSlide = first;
    if (opts.random) {
      opts.nextSlide = opts.currSlide;
      if (++opts.randomIndex == els.length) opts.randomIndex = 0;
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else opts.nextSlide = opts.startingSlide >= els.length - 1 ? 0 : opts.startingSlide + 1;

    // run transition init fn
    if (!opts.multiFx) {
      var init = $.fn.cycle.transitions[opts.fx];
      if ($.isFunction(init)) init($cont, $slides, opts);
      else if (opts.fx != 'custom' && !opts.multiFx) {
        log('unknown transition: ' + opts.fx, '; slideshow terminating');
        return false;
      }
    }

    // fire artificial events
    var e0 = $slides[first];
    if (opts.before.length) opts.before[0].apply(e0, [e0, e0, opts, true]);
    if (opts.after.length > 1) opts.after[1].apply(e0, [e0, e0, opts, true]);

    if (opts.next)
      $(opts.next).bind(opts.prevNextEvent, function () {
        return advance(opts, opts.rev ? -1 : 1);
      });
    if (opts.prev)
      $(opts.prev).bind(opts.prevNextEvent, function () {
        return advance(opts, opts.rev ? 1 : -1);
      });
    if (opts.pager) buildPager(els, opts);

    exposeAddSlide(opts, els);

    return opts;
  }

  // save off original opts so we can restore after clearing state
  function saveOriginalOpts(opts) {
    opts.original = { before: [], after: [] };
    opts.original.cssBefore = $.extend({}, opts.cssBefore);
    opts.original.cssAfter = $.extend({}, opts.cssAfter);
    opts.original.animIn = $.extend({}, opts.animIn);
    opts.original.animOut = $.extend({}, opts.animOut);
    $.each(opts.before, function () {
      opts.original.before.push(this);
    });
    $.each(opts.after, function () {
      opts.original.after.push(this);
    });
  }

  function supportMultiTransitions(opts) {
    var i,
      tx,
      txs = $.fn.cycle.transitions;
    // look for multiple effects
    if (opts.fx.indexOf(',') > 0) {
      opts.multiFx = true;
      opts.fxs = opts.fx.replace(/\s*/g, '').split(',');
      // discard any bogus effect names
      for (i = 0; i < opts.fxs.length; i++) {
        var fx = opts.fxs[i];
        tx = txs[fx];
        if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
          log('discarding unknown transition: ', fx);
          opts.fxs.splice(i, 1);
          i--;
        }
      }
      // if we have an empty list then we threw everything away!
      if (!opts.fxs.length) {
        log('No valid transitions named; slideshow terminating.');
        return false;
      }
    } else if (opts.fx == 'all') {
      // auto-gen the list of transitions
      opts.multiFx = true;
      opts.fxs = [];
      for (p in txs) {
        tx = txs[p];
        if (txs.hasOwnProperty(p) && $.isFunction(tx)) opts.fxs.push(p);
      }
    }
    if (opts.multiFx && opts.randomizeEffects) {
      // munge the fxs array to make effect selection random
      var r1 = Math.floor(Math.random() * 20) + 30;
      for (i = 0; i < r1; i++) {
        var r2 = Math.floor(Math.random() * opts.fxs.length);
        opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
      }
      debug('randomized fx sequence: ', opts.fxs);
    }
    return true;
  }

  // provide a mechanism for adding slides after the slideshow has started
  function exposeAddSlide(opts, els) {
    opts.addSlide = function (newSlide, prepend) {
      var $s = $(newSlide),
        s = $s[0];
      if (!opts.autostopCount) opts.countdown++;
      els[prepend ? 'unshift' : 'push'](s);
      if (opts.els) opts.els[prepend ? 'unshift' : 'push'](s); // shuffle needs this
      opts.slideCount = els.length;

      $s.css('position', 'absolute');
      $s[prepend ? 'prependTo' : 'appendTo'](opts.$cont);

      if (prepend) {
        opts.currSlide++;
        opts.nextSlide++;
      }

      if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg) clearTypeFix($s);

      if (opts.fit && opts.width) $s.width(opts.width);
      if (opts.fit && opts.height && opts.height != 'auto') $slides.height(opts.height);
      s.cycleH = opts.fit && opts.height ? opts.height : $s.height();
      s.cycleW = opts.fit && opts.width ? opts.width : $s.width();

      $s.css(opts.cssBefore);

      if (opts.pager) $.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);

      if ($.isFunction(opts.onAddSlide)) opts.onAddSlide($s);
      else $s.hide(); // default behavior
    };
  }

  // reset internal state; we do this on every pass in order to support multiple effects
  $.fn.cycle.resetState = function (opts, fx) {
    fx = fx || opts.fx;
    opts.before = [];
    opts.after = [];
    opts.cssBefore = $.extend({}, opts.original.cssBefore);
    opts.cssAfter = $.extend({}, opts.original.cssAfter);
    opts.animIn = $.extend({}, opts.original.animIn);
    opts.animOut = $.extend({}, opts.original.animOut);
    opts.fxFn = null;
    $.each(opts.original.before, function () {
      opts.before.push(this);
    });
    $.each(opts.original.after, function () {
      opts.after.push(this);
    });

    // re-init
    var init = $.fn.cycle.transitions[fx];
    if ($.isFunction(init)) init(opts.$cont, $(opts.elements), opts);
  };

  // this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
  function go(els, opts, manual, fwd) {
    // opts.busy is true if we're in the middle of an animation
    if (manual && opts.busy && opts.manualTrump) {
      // let manual transitions requests trump active ones
      $(els).stop(true, true);
      opts.busy = false;
    }
    // don't begin another timeout-based transition if there is one active
    if (opts.busy) return;

    var p = opts.$cont[0],
      curr = els[opts.currSlide],
      next = els[opts.nextSlide];

    // stop cycling if we have an outstanding stop request
    if (p.cycleStop != opts.stopCount || (p.cycleTimeout === 0 && !manual)) return;

    // check to see if we should stop cycling based on autostop options
    if (
      !manual &&
      !p.cyclePause &&
      ((opts.autostop && --opts.countdown <= 0) || (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))
    ) {
      if (opts.end) opts.end(opts);
      return;
    }

    // if slideshow is paused, only transition on a manual trigger
    if (manual || !p.cyclePause) {
      var fx = opts.fx;
      // keep trying to get the slide size if we don't have it yet
      curr.cycleH = curr.cycleH || $(curr).height();
      curr.cycleW = curr.cycleW || $(curr).width();
      next.cycleH = next.cycleH || $(next).height();
      next.cycleW = next.cycleW || $(next).width();

      // support multiple transition types
      if (opts.multiFx) {
        if (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length) opts.lastFx = 0;
        fx = opts.fxs[opts.lastFx];
        opts.currFx = fx;
      }

      // one-time fx overrides apply to:  $('div').cycle(3,'zoom');
      if (opts.oneTimeFx) {
        fx = opts.oneTimeFx;
        opts.oneTimeFx = null;
      }

      $.fn.cycle.resetState(opts, fx);

      // run the before callbacks
      if (opts.before.length)
        $.each(opts.before, function (i, o) {
          if (p.cycleStop != opts.stopCount) return;
          o.apply(next, [curr, next, opts, fwd]);
        });

      // stage the after callacks
      var after = function () {
        $.each(opts.after, function (i, o) {
          if (p.cycleStop != opts.stopCount) return;
          o.apply(next, [curr, next, opts, fwd]);
        });
      };

      if (opts.nextSlide != opts.currSlide) {
        // get ready to perform the transition
        opts.busy = 1;
        if (opts.fxFn)
          // fx function provided?
          opts.fxFn(curr, next, opts, after, fwd);
        else if ($.isFunction($.fn.cycle[opts.fx]))
          // fx plugin ?
          $.fn.cycle[opts.fx](curr, next, opts, after);
        else $.fn.cycle.custom(curr, next, opts, after, manual && opts.fastOnEvent);
      }

      // calculate the next slide
      opts.lastSlide = opts.currSlide;
      if (opts.random) {
        opts.currSlide = opts.nextSlide;
        if (++opts.randomIndex == els.length) opts.randomIndex = 0;
        opts.nextSlide = opts.randomMap[opts.randomIndex];
      } else {
        // sequence
        var roll = opts.nextSlide + 1 == els.length;
        opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
        opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
      }

      if (opts.pager) $.fn.cycle.updateActivePagerLink(opts.pager, opts.currSlide);
    }

    // stage the next transtion
    var ms = 0;
    if (opts.timeout && !opts.continuous) ms = getTimeout(curr, next, opts, fwd);
    else if (opts.continuous && p.cyclePause)
      // continuous shows work off an after callback, not this timer logic
      ms = 10;
    if (ms > 0)
      p.cycleTimeout = setTimeout(function () {
        go(els, opts, 0, !opts.rev);
      }, ms);
  }

  // invoked after transition
  $.fn.cycle.updateActivePagerLink = function (pager, currSlide) {
    $(pager)
      .find('a')
      .removeClass('activeSlide')
      .filter('a:eq(' + currSlide + ')')
      .addClass('activeSlide');
  };

  // calculate timeout value for current transition
  function getTimeout(curr, next, opts, fwd) {
    if (opts.timeoutFn) {
      // call user provided calc fn
      var t = opts.timeoutFn(curr, next, opts, fwd);
      while (t - opts.speed < 250)
        // sanitize timeout
        t += opts.speed;
      debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
      if (t !== false) return t;
    }
    return opts.timeout;
  }

  // expose next/prev function, caller must pass in state
  $.fn.cycle.next = function (opts) {
    advance(opts, opts.rev ? -1 : 1);
  };
  $.fn.cycle.prev = function (opts) {
    advance(opts, opts.rev ? 1 : -1);
  };

  // advance slide forward or back
  function advance(opts, val) {
    var els = opts.elements;
    var p = opts.$cont[0],
      timeout = p.cycleTimeout;
    if (timeout) {
      clearTimeout(timeout);
      p.cycleTimeout = 0;
    }
    if (opts.random && val < 0) {
      // move back to the previously display slide
      opts.randomIndex--;
      if (--opts.randomIndex == -2) opts.randomIndex = els.length - 2;
      else if (opts.randomIndex == -1) opts.randomIndex = els.length - 1;
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else if (opts.random) {
      if (++opts.randomIndex == els.length) opts.randomIndex = 0;
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else {
      opts.nextSlide = opts.currSlide + val;
      if (opts.nextSlide < 0) {
        if (opts.nowrap) return false;
        opts.nextSlide = els.length - 1;
      } else if (opts.nextSlide >= els.length) {
        if (opts.nowrap) return false;
        opts.nextSlide = 0;
      }
    }

    if ($.isFunction(opts.prevNextClick)) opts.prevNextClick(val > 0, opts.nextSlide, els[opts.nextSlide]);
    go(els, opts, 1, val >= 0);
    return false;
  }

  function buildPager(els, opts) {
    var $p = $(opts.pager);
    $.each(els, function (i, o) {
      $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
    });
    $.fn.cycle.updateActivePagerLink(opts.pager, opts.startingSlide);
  }

  $.fn.cycle.createPagerAnchor = function (i, el, $p, els, opts) {
    var a;
    if ($.isFunction(opts.pagerAnchorBuilder)) a = opts.pagerAnchorBuilder(i, el);
    else a = '<a href="#">' + (i + 1) + '</a>';

    if (!a) return;
    var $a = $(a);
    // don't reparent if anchor is in the dom
    if ($a.parents('body').length === 0) {
      var arr = [];
      if ($p.length > 1) {
        $p.each(function () {
          var $clone = $a.clone(true);
          $(this).append($clone);
          arr.push($clone);
        });
        $a = $(arr);
      } else {
        $a.appendTo($p);
      }
    }

    $a.bind(opts.pagerEvent, function (e) {
      e.preventDefault();
      opts.nextSlide = i;
      var p = opts.$cont[0],
        timeout = p.cycleTimeout;
      if (timeout) {
        clearTimeout(timeout);
        p.cycleTimeout = 0;
      }
      if ($.isFunction(opts.pagerClick)) opts.pagerClick(opts.nextSlide, els[opts.nextSlide]);
      go(els, opts, 1, opts.currSlide < i); // trigger the trans
      return false;
    });

    if (opts.pagerEvent != 'click')
      $a.click(function () {
        return false;
      }); // supress click

    if (opts.pauseOnPagerHover)
      $a.hover(
        function () {
          opts.$cont[0].cyclePause++;
        },
        function () {
          opts.$cont[0].cyclePause--;
        }
      );
  };

  // helper fn to calculate the number of slides between the current and the next
  $.fn.cycle.hopsFromLast = function (opts, fwd) {
    var hops,
      l = opts.lastSlide,
      c = opts.currSlide;
    if (fwd) hops = c > l ? c - l : opts.slideCount - l;
    else hops = c < l ? l - c : l + opts.slideCount - c;
    return hops;
  };

  // fix clearType problems in ie6 by setting an explicit bg color
  // (otherwise text slides look horrible during a fade transition)
  function clearTypeFix($slides) {
    function hex(s) {
      s = parseInt(s).toString(16);
      return s.length < 2 ? '0' + s : s;
    }
    function getBg(e) {
      for (; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
        var v = $.css(e, 'background-color');
        if (v.indexOf('rgb') >= 0) {
          var rgb = v.match(/\d+/g);
          return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
        }
        if (v && v != 'transparent') return v;
      }
      return '#ffffff';
    }
    $slides.each(function () {
      $(this).css('background-color', getBg(this));
    });
  }

  // reset common props before the next transition
  $.fn.cycle.commonReset = function (curr, next, opts, w, h, rev) {
    $(opts.elements).not(curr).hide();
    opts.cssBefore.opacity = 1;
    opts.cssBefore.display = 'block';
    if (w !== false && next.cycleW > 0) opts.cssBefore.width = next.cycleW;
    if (h !== false && next.cycleH > 0) opts.cssBefore.height = next.cycleH;
    opts.cssAfter = opts.cssAfter || {};
    opts.cssAfter.display = 'none';
    $(curr).css('zIndex', opts.slideCount + (rev === true ? 1 : 0));
    $(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1));
  };

  // the actual fn for effecting a transition
  $.fn.cycle.custom = function (curr, next, opts, cb, speedOverride) {
    var $l = $(curr),
      $n = $(next);
    var speedIn = opts.speedIn,
      speedOut = opts.speedOut,
      easeIn = opts.easeIn,
      easeOut = opts.easeOut;
    $n.css(opts.cssBefore);
    if (speedOverride) {
      if (typeof speedOverride == 'number') speedIn = speedOut = speedOverride;
      else speedIn = speedOut = 1;
      easeIn = easeOut = null;
    }
    var fn = function () {
      $n.animate(opts.animIn, speedIn, easeIn, cb);
    };
    $l.animate(opts.animOut, speedOut, easeOut, function () {
      if (opts.cssAfter) $l.css(opts.cssAfter);
      if (!opts.sync) fn();
    });
    if (opts.sync) fn();
  };

  // transition definitions - only fade is defined here, transition pack defines the rest
  $.fn.cycle.transitions = {
    fade: function ($cont, $slides, opts) {
      $slides.not(':eq(' + opts.currSlide + ')').css('opacity', 0);
      opts.before.push(function (curr, next, opts) {
        $.fn.cycle.commonReset(curr, next, opts);
        opts.cssBefore.opacity = 0;
      });
      opts.animIn = { opacity: 1 };
      opts.animOut = { opacity: 0 };
      opts.cssBefore = { top: 0, left: 0 };
    },
  };

  $.fn.cycle.ver = function () {
    return ver;
  };

  // override these globally if you like (they are all optional)
  $.fn.cycle.defaults = {
    fx: 'fade', // name of transition effect (or comma separated names, ex: fade,scrollUp,shuffle)
    timeout: 4000, // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn: null, // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    continuous: 0, // true to start next transition immediately after current one completes
    speed: 1000, // speed of the transition (any valid fx speed value)
    speedIn: null, // speed of the 'in' transition
    speedOut: null, // speed of the 'out' transition
    next: null, // selector for element to use as click trigger for next slide
    prev: null, // selector for element to use as click trigger for previous slide
    prevNextClick: null, // callback fn for prev/next clicks:      function(isNext, zeroBasedSlideIndex, slideElement)
    prevNextEvent: 'click', // event which drives the manual transition to the previous or next slide
    pager: null, // selector for element to use as pager container
    pagerClick: null, // callback fn for pager clicks:      function(zeroBasedSlideIndex, slideElement)
    pagerEvent: 'click', // name of event which drives the pager navigation
    pagerAnchorBuilder: null, // callback fn for building anchor links:  function(index, DOMelement)
    before: null, // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
    after: null, // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    end: null, // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    easing: null, // easing method for both in and out transitions
    easeIn: null, // easing for "in" transition
    easeOut: null, // easing for "out" transition
    shuffle: null, // coords for shuffle animation, ex: { top:15, left: 200 }
    animIn: null, // properties that define how the slide animates in
    animOut: null, // properties that define how the slide animates out
    cssBefore: null, // properties that define the initial state of the slide before transitioning in
    cssAfter: null, // properties that defined the state of the slide after transitioning out
    fxFn: null, // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height: 'auto', // container height
    startingSlide: 0, // zero-based index of the first slide to be displayed
    sync: 1, // true if in/out transitions should occur simultaneously
    random: 0, // true for random, false for sequence (not applicable to shuffle fx)
    fit: 0, // force slides to fit container
    containerResize: 1, // resize container to fit largest slide
    pause: 0, // true to enable "pause on hover"
    pauseOnPagerHover: 0, // true to pause when hovering over pager link
    autostop: 0, // true to end slideshow after X transitions (where X == slide count)
    autostopCount: 0, // number of transitions (optionally used with autostop to define X)
    delay: 0, // additional delay (in ms) for first transition (hint: can be negative)
    slideExpr: null, // expression for selecting slides (if something other than all children is required)
    cleartype: !$.support.opacity, // true if clearType corrections should be applied (for IE)
    cleartypeNoBg: false, // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    nowrap: 0, // true to prevent slideshow from wrapping
    fastOnEvent: 0, // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    randomizeEffects: 1, // valid when multiple effects are used; true to make the effect sequence random
    rev: 0, // causes animations to transition in reverse
    manualTrump: true, // causes manual transition to stop an active transition instead of being ignored
    requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout: 250, // ms delay for requeue
  };
})(jQuery);

/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2008 M. Alsup
 * Version:      2.72
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function ($) {
  //
  // These functions define one-time slide initialization for the named
  // transitions. To save file size feel free to remove any of these that you
  // don't need.
  //
  $.fn.cycle.transitions.none = function ($cont, $slides, opts) {
    opts.fxFn = function (curr, next, opts, after) {
      $(next).show();
      $(curr).hide();
      after();
    };
  };

  // scrollUp/Down/Left/Right
  $.fn.cycle.transitions.scrollUp = function ($cont, $slides, opts) {
    $cont.css('overflow', 'hidden');
    opts.before.push($.fn.cycle.commonReset);
    var h = $cont.height();
    opts.cssBefore = { top: h, left: 0 };
    opts.cssFirst = { top: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { top: -h };
  };
  $.fn.cycle.transitions.scrollDown = function ($cont, $slides, opts) {
    $cont.css('overflow', 'hidden');
    opts.before.push($.fn.cycle.commonReset);
    var h = $cont.height();
    opts.cssFirst = { top: 0 };
    opts.cssBefore = { top: -h, left: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { top: h };
  };
  $.fn.cycle.transitions.scrollLeft = function ($cont, $slides, opts) {
    $cont.css('overflow', 'hidden');
    opts.before.push($.fn.cycle.commonReset);
    var w = $cont.width();
    opts.cssFirst = { left: 0 };
    opts.cssBefore = { left: w, top: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { left: 0 - w };
  };
  $.fn.cycle.transitions.scrollRight = function ($cont, $slides, opts) {
    $cont.css('overflow', 'hidden');
    opts.before.push($.fn.cycle.commonReset);
    var w = $cont.width();
    opts.cssFirst = { left: 0 };
    opts.cssBefore = { left: -w, top: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { left: w };
  };
  $.fn.cycle.transitions.scrollHorz = function ($cont, $slides, opts) {
    $cont.css('overflow', 'hidden').width();
    opts.before.push(function (curr, next, opts, fwd) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.cssBefore.left = fwd ? next.cycleW - 1 : 1 - next.cycleW;
      opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
    });
    opts.cssFirst = { left: 0 };
    opts.cssBefore = { top: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { top: 0 };
  };
  $.fn.cycle.transitions.scrollVert = function ($cont, $slides, opts) {
    $cont.css('overflow', 'hidden');
    opts.before.push(function (curr, next, opts, fwd) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.cssBefore.top = fwd ? 1 - next.cycleH : next.cycleH - 1;
      opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
    });
    opts.cssFirst = { top: 0 };
    opts.cssBefore = { left: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { left: 0 };
  };

  // slideX/slideY
  $.fn.cycle.transitions.slideX = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $(opts.elements).not(curr).hide();
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.animIn.width = next.cycleW;
    });
    opts.cssBefore = { left: 0, top: 0, width: 0 };
    opts.animIn = { width: 'show' };
    opts.animOut = { width: 0 };
  };
  $.fn.cycle.transitions.slideY = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $(opts.elements).not(curr).hide();
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.animIn.height = next.cycleH;
    });
    opts.cssBefore = { left: 0, top: 0, height: 0 };
    opts.animIn = { height: 'show' };
    opts.animOut = { height: 0 };
  };

  // shuffle
  $.fn.cycle.transitions.shuffle = function ($cont, $slides, opts) {
    var i,
      w = $cont.css('overflow', 'visible').width();
    $slides.css({ left: 0, top: 0 });
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, true, true);
    });
    // only adjust speed once!
    if (!opts.speedAdjusted) {
      opts.speed = opts.speed / 2; // shuffle has 2 transitions
      opts.speedAdjusted = true;
    }
    opts.random = 0;
    opts.shuffle = opts.shuffle || { left: -w, top: 15 };
    opts.els = [];
    for (i = 0; i < $slides.length; i++) opts.els.push($slides[i]);

    for (i = 0; i < opts.currSlide; i++) opts.els.push(opts.els.shift());

    // custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
    opts.fxFn = function (curr, next, opts, cb, fwd) {
      var $el = fwd ? $(curr) : $(next);
      $(next).css(opts.cssBefore);
      var count = opts.slideCount;
      $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function () {
        var hops = $.fn.cycle.hopsFromLast(opts, fwd);
        for (var k = 0; k < hops; k++) fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
        if (fwd) {
          for (var i = 0, len = opts.els.length; i < len; i++) $(opts.els[i]).css('z-index', len - i + count);
        } else {
          var z = $(curr).css('z-index');
          $el.css('z-index', parseInt(z) + 1 + count);
        }
        $el.animate({ left: 0, top: 0 }, opts.speedOut, opts.easeOut, function () {
          $(fwd ? this : curr).hide();
          if (cb) cb();
        });
      });
    };
    opts.cssBefore = { display: 'block', opacity: 1, top: 0, left: 0 };
  };

  // turnUp/Down/Left/Right
  $.fn.cycle.transitions.turnUp = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.cssBefore.top = next.cycleH;
      opts.animIn.height = next.cycleH;
    });
    opts.cssFirst = { top: 0 };
    opts.cssBefore = { left: 0, height: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { height: 0 };
  };
  $.fn.cycle.transitions.turnDown = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH;
    });
    opts.cssFirst = { top: 0 };
    opts.cssBefore = { left: 0, top: 0, height: 0 };
    opts.animOut = { height: 0 };
  };
  $.fn.cycle.transitions.turnLeft = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.cssBefore.left = next.cycleW;
      opts.animIn.width = next.cycleW;
    });
    opts.cssBefore = { top: 0, width: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { width: 0 };
  };
  $.fn.cycle.transitions.turnRight = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.animIn.width = next.cycleW;
      opts.animOut.left = curr.cycleW;
    });
    opts.cssBefore = { top: 0, left: 0, width: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { width: 0 };
  };

  // zoom
  $.fn.cycle.transitions.zoom = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, false, true);
      opts.cssBefore.top = next.cycleH / 2;
      opts.cssBefore.left = next.cycleW / 2;
      opts.animIn = { top: 0, left: 0, width: next.cycleW, height: next.cycleH };
      opts.animOut = { width: 0, height: 0, top: curr.cycleH / 2, left: curr.cycleW / 2 };
    });
    opts.cssFirst = { top: 0, left: 0 };
    opts.cssBefore = { width: 0, height: 0 };
  };

  // fadeZoom
  $.fn.cycle.transitions.fadeZoom = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, false);
      opts.cssBefore.left = next.cycleW / 2;
      opts.cssBefore.top = next.cycleH / 2;
      opts.animIn = { top: 0, left: 0, width: next.cycleW, height: next.cycleH };
    });
    opts.cssBefore = { width: 0, height: 0 };
    opts.animOut = { opacity: 0 };
  };

  // blindX
  $.fn.cycle.transitions.blindX = function ($cont, $slides, opts) {
    var w = $cont.css('overflow', 'hidden').width();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.animIn.width = next.cycleW;
      opts.animOut.left = curr.cycleW;
    });
    opts.cssBefore = { left: w, top: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { left: w };
  };
  // blindY
  $.fn.cycle.transitions.blindY = function ($cont, $slides, opts) {
    var h = $cont.css('overflow', 'hidden').height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH;
    });
    opts.cssBefore = { top: h, left: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { top: h };
  };
  // blindZ
  $.fn.cycle.transitions.blindZ = function ($cont, $slides, opts) {
    var h = $cont.css('overflow', 'hidden').height();
    var w = $cont.width();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH;
    });
    opts.cssBefore = { top: h, left: w };
    opts.animIn = { top: 0, left: 0 };
    opts.animOut = { top: h, left: w };
  };

  // growX - grow horizontally from centered 0 width
  $.fn.cycle.transitions.growX = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.cssBefore.left = this.cycleW / 2;
      opts.animIn = { left: 0, width: this.cycleW };
      opts.animOut = { left: 0 };
    });
    opts.cssBefore = { width: 0, top: 0 };
  };
  // growY - grow vertically from centered 0 height
  $.fn.cycle.transitions.growY = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.cssBefore.top = this.cycleH / 2;
      opts.animIn = { top: 0, height: this.cycleH };
      opts.animOut = { top: 0 };
    });
    opts.cssBefore = { height: 0, left: 0 };
  };

  // curtainX - squeeze in both edges horizontally
  $.fn.cycle.transitions.curtainX = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true, true);
      opts.cssBefore.left = next.cycleW / 2;
      opts.animIn = { left: 0, width: this.cycleW };
      opts.animOut = { left: curr.cycleW / 2, width: 0 };
    });
    opts.cssBefore = { top: 0, width: 0 };
  };
  // curtainY - squeeze in both edges vertically
  $.fn.cycle.transitions.curtainY = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false, true);
      opts.cssBefore.top = next.cycleH / 2;
      opts.animIn = { top: 0, height: next.cycleH };
      opts.animOut = { top: curr.cycleH / 2, height: 0 };
    });
    opts.cssBefore = { left: 0, height: 0 };
  };

  // cover - curr slide covered by next slide
  $.fn.cycle.transitions.cover = function ($cont, $slides, opts) {
    var d = opts.direction || 'left';
    var w = $cont.css('overflow', 'hidden').width();
    var h = $cont.height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      if (d == 'right') opts.cssBefore.left = -w;
      else if (d == 'up') opts.cssBefore.top = h;
      else if (d == 'down') opts.cssBefore.top = -h;
      else opts.cssBefore.left = w;
    });
    opts.animIn = { left: 0, top: 0 };
    opts.animOut = { opacity: 1 };
    opts.cssBefore = { top: 0, left: 0 };
  };

  // uncover - curr slide moves off next slide
  $.fn.cycle.transitions.uncover = function ($cont, $slides, opts) {
    var d = opts.direction || 'left';
    var w = $cont.css('overflow', 'hidden').width();
    var h = $cont.height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, true, true);
      if (d == 'right') opts.animOut.left = w;
      else if (d == 'up') opts.animOut.top = -h;
      else if (d == 'down') opts.animOut.top = h;
      else opts.animOut.left = -w;
    });
    opts.animIn = { left: 0, top: 0 };
    opts.animOut = { opacity: 1 };
    opts.cssBefore = { top: 0, left: 0 };
  };

  // toss - move top slide and fade away
  $.fn.cycle.transitions.toss = function ($cont, $slides, opts) {
    var w = $cont.css('overflow', 'visible').width();
    var h = $cont.height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, true, true);
      // provide default toss settings if animOut not provided
      if (!opts.animOut.left && !opts.animOut.top) opts.animOut = { left: w * 2, top: -h / 2, opacity: 0 };
      else opts.animOut.opacity = 0;
    });
    opts.cssBefore = { left: 0, top: 0 };
    opts.animIn = { left: 0 };
  };

  // wipe - clip animation
  $.fn.cycle.transitions.wipe = function ($cont, $slides, opts) {
    var w = $cont.css('overflow', 'hidden').width();
    var h = $cont.height();
    opts.cssBefore = opts.cssBefore || {};
    var clip;
    if (opts.clip) {
      if (/l2r/.test(opts.clip)) clip = 'rect(0px 0px ' + h + 'px 0px)';
      else if (/r2l/.test(opts.clip)) clip = 'rect(0px ' + w + 'px ' + h + 'px ' + w + 'px)';
      else if (/t2b/.test(opts.clip)) clip = 'rect(0px ' + w + 'px 0px 0px)';
      else if (/b2t/.test(opts.clip)) clip = 'rect(' + h + 'px ' + w + 'px ' + h + 'px 0px)';
      else if (/zoom/.test(opts.clip)) {
        var top = parseInt(h / 2);
        var left = parseInt(w / 2);
        clip = 'rect(' + top + 'px ' + left + 'px ' + top + 'px ' + left + 'px)';
      }
    }

    opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

    var d = opts.cssBefore.clip.match(/(\d+)/g);
    var t = parseInt(d[0]),
      r = parseInt(d[1]),
      b = parseInt(d[2]),
      l = parseInt(d[3]);

    opts.before.push(function (curr, next, opts) {
      if (curr == next) return;
      var $curr = $(curr),
        $next = $(next);
      $.fn.cycle.commonReset(curr, next, opts, true, true, false);
      opts.cssAfter.display = 'block';

      var step = 1,
        count = parseInt(opts.speedIn / 13) - 1;
      (function f() {
        var tt = t ? t - parseInt(step * (t / count)) : 0;
        var ll = l ? l - parseInt(step * (l / count)) : 0;
        var bb = b < h ? b + parseInt(step * ((h - b) / count || 1)) : h;
        var rr = r < w ? r + parseInt(step * ((w - r) / count || 1)) : w;
        $next.css({ clip: 'rect(' + tt + 'px ' + rr + 'px ' + bb + 'px ' + ll + 'px)' });
        step++ <= count ? setTimeout(f, 13) : $curr.css('display', 'none');
      })();
    });
    opts.cssBefore = { display: 'block', opacity: 1, top: 0, left: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { left: 0 };
  };
})(jQuery);
