const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/DefaultPage-Dr-2aZnU.js',
      'assets/helpers-C_37FuzF.js',
      'assets/useRenewBackEndSession-D9G_hgZe.js',
      'assets/index-Bk6LcBPR.js',
      'assets/DefaultPage-hUexiOZB.css',
      'assets/AboutTheServicePage-ylFJ_8dp.js',
      'assets/Alert-Bj5aUEK6.js',
      'assets/Alert-CDY7gzbh.css',
      'assets/Checkbox-C1AC6eCV.js',
      'assets/Error-iRBmXgUC.js',
      'assets/Checkbox-DoX2BmJY.css',
      'assets/useProgressNavStatus-DD8sWRqk.js',
      'assets/Trans-CLlfKgue.js',
      'assets/EligibilityPage-BFM7sEfr.js',
      'assets/ButtonGroup-BCYMqWF3.js',
      'assets/ButtonGroup-Bt-Pdbu7.css',
      'assets/EligibilityPage-BQDXKLrl.css',
      'assets/DriverLicenceDetailsPage-CYN_-Q6-.js',
      'assets/TextInput-H70CAxuG.js',
      'assets/Modal-BgDk8fPM.js',
      'assets/Modal-D8r80Rno.css',
      'assets/TextInput-jqIIZh4p.css',
      'assets/Recaptcha-BH_EdI2Y.js',
      'assets/Recaptcha-B5O9RxV6.css',
      'assets/DriverLicenceDetailsPage-CL3RYzJZ.css',
      'assets/CertificationPage-BiWnawyc.js',
      'assets/ContactInformationPage-CA2szvJZ.js',
      'assets/index.types-CnoW_BGG.js',
      'assets/PaymentConfirmationPage-DMrCswCf.js',
      'assets/FeedbackModal-BsePslq3.js',
      'assets/FeedbackModal-D0wXKfEL.css',
      'assets/PaymentConfirmationPage-CsiWIL2w.css',
      'assets/TemporaryDriversLicencePage-itKjZ1y_.js',
      'assets/Helmet-CDrZPkas.js',
      'assets/TemporaryDriversLicenceRequestPage-DBEj5cPp.js',
      'assets/index-BOi2nvw2.js',
    ])
) => i.map((i) => d[i]);
function Bg(n, i) {
  for (var o = 0; o < i.length; o++) {
    const s = i[o];
    if (typeof s != 'string' && !Array.isArray(s)) {
      for (const l in s)
        if (l !== 'default' && !(l in n)) {
          const c = Object.getOwnPropertyDescriptor(s, l);
          c && Object.defineProperty(n, l, c.get ? c : { enumerable: !0, get: () => s[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === 'childList')
        for (const d of c.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(l) {
    const c = {};
    return (
      l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (c.credentials = 'omit')
        : (c.credentials = 'same-origin'),
      c
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = o(l);
    fetch(l.href, c);
  }
})();
function pa(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
function tC(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var i = n.default;
  if (typeof i == 'function') {
    var o = function s() {
      return this instanceof s ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    o.prototype = i.prototype;
  } else o = {};
  return (
    Object.defineProperty(o, '__esModule', { value: !0 }),
    Object.keys(n).forEach(function (s) {
      var l = Object.getOwnPropertyDescriptor(n, s);
      Object.defineProperty(
        o,
        s,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return n[s];
              },
            }
      );
    }),
    o
  );
}
var dl = { exports: {} },
  yi = {},
  pl = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd;
function Wg() {
  if (dd) return se;
  dd = 1;
  var n = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    l = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    d = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    x = Symbol.iterator;
  function w(C) {
    return C === null || typeof C != 'object'
      ? null
      : ((C = (x && C[x]) || C['@@iterator']), typeof C == 'function' ? C : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    P = {};
  function T(C, I, oe) {
    (this.props = C), (this.context = I), (this.refs = P), (this.updater = oe || O);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (C, I) {
      if (typeof C != 'object' && typeof C != 'function' && C != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, C, I, 'setState');
    }),
    (T.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, 'forceUpdate');
    });
  function V() {}
  V.prototype = T.prototype;
  function A(C, I, oe) {
    (this.props = C), (this.context = I), (this.refs = P), (this.updater = oe || O);
  }
  var z = (A.prototype = new V());
  (z.constructor = A), L(z, T.prototype), (z.isPureReactComponent = !0);
  var U = Array.isArray,
    R = Object.prototype.hasOwnProperty,
    J = { current: null },
    te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(C, I, oe) {
    var ae,
      ue = {},
      ce = null,
      we = null;
    if (I != null)
      for (ae in (I.ref !== void 0 && (we = I.ref), I.key !== void 0 && (ce = '' + I.key), I))
        R.call(I, ae) && !te.hasOwnProperty(ae) && (ue[ae] = I[ae]);
    var me = arguments.length - 2;
    if (me === 1) ue.children = oe;
    else if (1 < me) {
      for (var ke = Array(me), Ze = 0; Ze < me; Ze++) ke[Ze] = arguments[Ze + 2];
      ue.children = ke;
    }
    if (C && C.defaultProps) for (ae in ((me = C.defaultProps), me)) ue[ae] === void 0 && (ue[ae] = me[ae]);
    return { $$typeof: n, type: C, key: ce, ref: we, props: ue, _owner: J.current };
  }
  function de(C, I) {
    return { $$typeof: n, type: C.type, key: I, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function xe(C) {
    return typeof C == 'object' && C !== null && C.$$typeof === n;
  }
  function Se(C) {
    var I = { '=': '=0', ':': '=2' };
    return (
      '$' +
      C.replace(/[=:]/g, function (oe) {
        return I[oe];
      })
    );
  }
  var lt = /\/+/g;
  function We(C, I) {
    return typeof C == 'object' && C !== null && C.key != null ? Se('' + C.key) : I.toString(36);
  }
  function Me(C, I, oe, ae, ue) {
    var ce = typeof C;
    (ce === 'undefined' || ce === 'boolean') && (C = null);
    var we = !1;
    if (C === null) we = !0;
    else
      switch (ce) {
        case 'string':
        case 'number':
          we = !0;
          break;
        case 'object':
          switch (C.$$typeof) {
            case n:
            case i:
              we = !0;
          }
      }
    if (we)
      return (
        (we = C),
        (ue = ue(we)),
        (C = ae === '' ? '.' + We(we, 0) : ae),
        U(ue)
          ? ((oe = ''),
            C != null && (oe = C.replace(lt, '$&/') + '/'),
            Me(ue, I, oe, '', function (Ze) {
              return Ze;
            }))
          : ue != null &&
            (xe(ue) &&
              (ue = de(
                ue,
                oe + (!ue.key || (we && we.key === ue.key) ? '' : ('' + ue.key).replace(lt, '$&/') + '/') + C
              )),
            I.push(ue)),
        1
      );
    if (((we = 0), (ae = ae === '' ? '.' : ae + ':'), U(C)))
      for (var me = 0; me < C.length; me++) {
        ce = C[me];
        var ke = ae + We(ce, me);
        we += Me(ce, I, oe, ke, ue);
      }
    else if (((ke = w(C)), typeof ke == 'function'))
      for (C = ke.call(C), me = 0; !(ce = C.next()).done; )
        (ce = ce.value), (ke = ae + We(ce, me++)), (we += Me(ce, I, oe, ke, ue));
    else if (ce === 'object')
      throw (
        ((I = String(C)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (I === '[object Object]' ? 'object with keys {' + Object.keys(C).join(', ') + '}' : I) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return we;
  }
  function $e(C, I, oe) {
    if (C == null) return C;
    var ae = [],
      ue = 0;
    return (
      Me(C, ae, '', '', function (ce) {
        return I.call(oe, ce, ue++);
      }),
      ae
    );
  }
  function Re(C) {
    if (C._status === -1) {
      var I = C._result;
      (I = I()),
        I.then(
          function (oe) {
            (C._status === 0 || C._status === -1) && ((C._status = 1), (C._result = oe));
          },
          function (oe) {
            (C._status === 0 || C._status === -1) && ((C._status = 2), (C._result = oe));
          }
        ),
        C._status === -1 && ((C._status = 0), (C._result = I));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var ye = { current: null },
    $ = { transition: null },
    G = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: $, ReactCurrentOwner: J };
  function B() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (se.Children = {
      map: $e,
      forEach: function (C, I, oe) {
        $e(
          C,
          function () {
            I.apply(this, arguments);
          },
          oe
        );
      },
      count: function (C) {
        var I = 0;
        return (
          $e(C, function () {
            I++;
          }),
          I
        );
      },
      toArray: function (C) {
        return (
          $e(C, function (I) {
            return I;
          }) || []
        );
      },
      only: function (C) {
        if (!xe(C)) throw Error('React.Children.only expected to receive a single React element child.');
        return C;
      },
    }),
    (se.Component = T),
    (se.Fragment = o),
    (se.Profiler = l),
    (se.PureComponent = A),
    (se.StrictMode = s),
    (se.Suspense = h),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (se.act = B),
    (se.cloneElement = function (C, I, oe) {
      if (C == null)
        throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + C + '.');
      var ae = L({}, C.props),
        ue = C.key,
        ce = C.ref,
        we = C._owner;
      if (I != null) {
        if (
          (I.ref !== void 0 && ((ce = I.ref), (we = J.current)),
          I.key !== void 0 && (ue = '' + I.key),
          C.type && C.type.defaultProps)
        )
          var me = C.type.defaultProps;
        for (ke in I)
          R.call(I, ke) && !te.hasOwnProperty(ke) && (ae[ke] = I[ke] === void 0 && me !== void 0 ? me[ke] : I[ke]);
      }
      var ke = arguments.length - 2;
      if (ke === 1) ae.children = oe;
      else if (1 < ke) {
        me = Array(ke);
        for (var Ze = 0; Ze < ke; Ze++) me[Ze] = arguments[Ze + 2];
        ae.children = me;
      }
      return { $$typeof: n, type: C.type, key: ue, ref: ce, props: ae, _owner: we };
    }),
    (se.createContext = function (C) {
      return (
        (C = {
          $$typeof: d,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (C.Provider = { $$typeof: c, _context: C }),
        (C.Consumer = C)
      );
    }),
    (se.createElement = re),
    (se.createFactory = function (C) {
      var I = re.bind(null, C);
      return (I.type = C), I;
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (C) {
      return { $$typeof: p, render: C };
    }),
    (se.isValidElement = xe),
    (se.lazy = function (C) {
      return { $$typeof: v, _payload: { _status: -1, _result: C }, _init: Re };
    }),
    (se.memo = function (C, I) {
      return { $$typeof: g, type: C, compare: I === void 0 ? null : I };
    }),
    (se.startTransition = function (C) {
      var I = $.transition;
      $.transition = {};
      try {
        C();
      } finally {
        $.transition = I;
      }
    }),
    (se.unstable_act = B),
    (se.useCallback = function (C, I) {
      return ye.current.useCallback(C, I);
    }),
    (se.useContext = function (C) {
      return ye.current.useContext(C);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (C) {
      return ye.current.useDeferredValue(C);
    }),
    (se.useEffect = function (C, I) {
      return ye.current.useEffect(C, I);
    }),
    (se.useId = function () {
      return ye.current.useId();
    }),
    (se.useImperativeHandle = function (C, I, oe) {
      return ye.current.useImperativeHandle(C, I, oe);
    }),
    (se.useInsertionEffect = function (C, I) {
      return ye.current.useInsertionEffect(C, I);
    }),
    (se.useLayoutEffect = function (C, I) {
      return ye.current.useLayoutEffect(C, I);
    }),
    (se.useMemo = function (C, I) {
      return ye.current.useMemo(C, I);
    }),
    (se.useReducer = function (C, I, oe) {
      return ye.current.useReducer(C, I, oe);
    }),
    (se.useRef = function (C) {
      return ye.current.useRef(C);
    }),
    (se.useState = function (C) {
      return ye.current.useState(C);
    }),
    (se.useSyncExternalStore = function (C, I, oe) {
      return ye.current.useSyncExternalStore(C, I, oe);
    }),
    (se.useTransition = function () {
      return ye.current.useTransition();
    }),
    (se.version = '18.3.1'),
    se
  );
}
var pd;
function ru() {
  return pd || ((pd = 1), (pl.exports = Wg())), pl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function Hg() {
  if (md) return yi;
  md = 1;
  var n = ru(),
    i = Symbol.for('react.element'),
    o = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, h, g) {
    var v,
      x = {},
      w = null,
      O = null;
    g !== void 0 && (w = '' + g), h.key !== void 0 && (w = '' + h.key), h.ref !== void 0 && (O = h.ref);
    for (v in h) s.call(h, v) && !c.hasOwnProperty(v) && (x[v] = h[v]);
    if (p && p.defaultProps) for (v in ((h = p.defaultProps), h)) x[v] === void 0 && (x[v] = h[v]);
    return { $$typeof: i, type: p, key: w, ref: O, props: x, _owner: l.current };
  }
  return (yi.Fragment = o), (yi.jsx = d), (yi.jsxs = d), yi;
}
var hd;
function Yg() {
  return hd || ((hd = 1), (dl.exports = Hg())), dl.exports;
}
var H = Yg(),
  _ = ru();
const ma = pa(_),
  qg = Bg({ __proto__: null, default: ma }, [_]);
var Go = {},
  ml = { exports: {} },
  st = {},
  hl = { exports: {} },
  gl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gd;
function Kg() {
  return (
    gd ||
      ((gd = 1),
      (function (n) {
        function i($, G) {
          var B = $.length;
          $.push(G);
          e: for (; 0 < B; ) {
            var C = (B - 1) >>> 1,
              I = $[C];
            if (0 < l(I, G)) ($[C] = G), ($[B] = I), (B = C);
            else break e;
          }
        }
        function o($) {
          return $.length === 0 ? null : $[0];
        }
        function s($) {
          if ($.length === 0) return null;
          var G = $[0],
            B = $.pop();
          if (B !== G) {
            $[0] = B;
            e: for (var C = 0, I = $.length, oe = I >>> 1; C < oe; ) {
              var ae = 2 * (C + 1) - 1,
                ue = $[ae],
                ce = ae + 1,
                we = $[ce];
              if (0 > l(ue, B))
                ce < I && 0 > l(we, ue) ? (($[C] = we), ($[ce] = B), (C = ce)) : (($[C] = ue), ($[ae] = B), (C = ae));
              else if (ce < I && 0 > l(we, B)) ($[C] = we), ($[ce] = B), (C = ce);
              else break e;
            }
          }
          return G;
        }
        function l($, G) {
          var B = $.sortIndex - G.sortIndex;
          return B !== 0 ? B : $.id - G.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            p = d.now();
          n.unstable_now = function () {
            return d.now() - p;
          };
        }
        var h = [],
          g = [],
          v = 1,
          x = null,
          w = 3,
          O = !1,
          L = !1,
          P = !1,
          T = typeof setTimeout == 'function' ? setTimeout : null,
          V = typeof clearTimeout == 'function' ? clearTimeout : null,
          A = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function z($) {
          for (var G = o(g); G !== null; ) {
            if (G.callback === null) s(g);
            else if (G.startTime <= $) s(g), (G.sortIndex = G.expirationTime), i(h, G);
            else break;
            G = o(g);
          }
        }
        function U($) {
          if (((P = !1), z($), !L))
            if (o(h) !== null) (L = !0), Re(R);
            else {
              var G = o(g);
              G !== null && ye(U, G.startTime - $);
            }
        }
        function R($, G) {
          (L = !1), P && ((P = !1), V(re), (re = -1)), (O = !0);
          var B = w;
          try {
            for (z(G), x = o(h); x !== null && (!(x.expirationTime > G) || ($ && !Se())); ) {
              var C = x.callback;
              if (typeof C == 'function') {
                (x.callback = null), (w = x.priorityLevel);
                var I = C(x.expirationTime <= G);
                (G = n.unstable_now()), typeof I == 'function' ? (x.callback = I) : x === o(h) && s(h), z(G);
              } else s(h);
              x = o(h);
            }
            if (x !== null) var oe = !0;
            else {
              var ae = o(g);
              ae !== null && ye(U, ae.startTime - G), (oe = !1);
            }
            return oe;
          } finally {
            (x = null), (w = B), (O = !1);
          }
        }
        var J = !1,
          te = null,
          re = -1,
          de = 5,
          xe = -1;
        function Se() {
          return !(n.unstable_now() - xe < de);
        }
        function lt() {
          if (te !== null) {
            var $ = n.unstable_now();
            xe = $;
            var G = !0;
            try {
              G = te(!0, $);
            } finally {
              G ? We() : ((J = !1), (te = null));
            }
          } else J = !1;
        }
        var We;
        if (typeof A == 'function')
          We = function () {
            A(lt);
          };
        else if (typeof MessageChannel < 'u') {
          var Me = new MessageChannel(),
            $e = Me.port2;
          (Me.port1.onmessage = lt),
            (We = function () {
              $e.postMessage(null);
            });
        } else
          We = function () {
            T(lt, 0);
          };
        function Re($) {
          (te = $), J || ((J = !0), We());
        }
        function ye($, G) {
          re = T(function () {
            $(n.unstable_now());
          }, G);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            L || O || ((L = !0), Re(R));
          }),
          (n.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (de = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(h);
          }),
          (n.unstable_next = function ($) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = w;
            }
            var B = w;
            w = G;
            try {
              return $();
            } finally {
              w = B;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function ($, G) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var B = w;
            w = $;
            try {
              return G();
            } finally {
              w = B;
            }
          }),
          (n.unstable_scheduleCallback = function ($, G, B) {
            var C = n.unstable_now();
            switch (
              (typeof B == 'object' && B !== null
                ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? C + B : C))
                : (B = C),
              $)
            ) {
              case 1:
                var I = -1;
                break;
              case 2:
                I = 250;
                break;
              case 5:
                I = 1073741823;
                break;
              case 4:
                I = 1e4;
                break;
              default:
                I = 5e3;
            }
            return (
              (I = B + I),
              ($ = { id: v++, callback: G, priorityLevel: $, startTime: B, expirationTime: I, sortIndex: -1 }),
              B > C
                ? (($.sortIndex = B),
                  i(g, $),
                  o(h) === null && $ === o(g) && (P ? (V(re), (re = -1)) : (P = !0), ye(U, B - C)))
                : (($.sortIndex = I), i(h, $), L || O || ((L = !0), Re(R))),
              $
            );
          }),
          (n.unstable_shouldYield = Se),
          (n.unstable_wrapCallback = function ($) {
            var G = w;
            return function () {
              var B = w;
              w = G;
              try {
                return $.apply(this, arguments);
              } finally {
                w = B;
              }
            };
          });
      })(gl)),
    gl
  );
}
var vd;
function Qg() {
  return vd || ((vd = 1), (hl.exports = Kg())), hl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd;
function Gg() {
  if (yd) return st;
  yd = 1;
  var n = ru(),
    i = Qg();
  function o(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1; r < arguments.length; r++)
      t += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var s = new Set(),
    l = {};
  function c(e, t) {
    d(e, t), d(e + 'Capture', t);
  }
  function d(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    x = {};
  function w(e) {
    return h.call(x, e) ? !0 : h.call(v, e) ? !1 : g.test(e) ? (x[e] = !0) : ((v[e] = !0), !1);
  }
  function O(e, t, r, a) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return a
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function L(e, t, r, a) {
    if (t === null || typeof t > 'u' || O(e, t, r, a)) return !0;
    if (a) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function P(e, t, r, a, u, f, m) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = a),
      (this.attributeNamespace = u),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = m);
  }
  var T = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      T[e] = new P(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      T[t] = new P(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      T[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
      T[e] = new P(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        T[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      T[e] = new P(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      T[e] = new P(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      T[e] = new P(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      T[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var V = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(V, A);
      T[t] = new P(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
      var t = e.replace(V, A);
      T[t] = new P(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(V, A);
      T[t] = new P(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      T[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (T.xlinkHref = new P('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      T[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function z(e, t, r, a) {
    var u = T.hasOwnProperty(t) ? T[t] : null;
    (u !== null
      ? u.type !== 0
      : a || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (L(t, r, u, a) && (r = null),
      a || u === null
        ? w(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : u.mustUseProperty
        ? (e[u.propertyName] = r === null ? (u.type === 3 ? !1 : '') : r)
        : ((t = u.attributeName),
          (a = u.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((u = u.type),
              (r = u === 3 || (u === 4 && r === !0) ? '' : '' + r),
              a ? e.setAttributeNS(a, t, r) : e.setAttribute(t, r))));
  }
  var U = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    R = Symbol.for('react.element'),
    J = Symbol.for('react.portal'),
    te = Symbol.for('react.fragment'),
    re = Symbol.for('react.strict_mode'),
    de = Symbol.for('react.profiler'),
    xe = Symbol.for('react.provider'),
    Se = Symbol.for('react.context'),
    lt = Symbol.for('react.forward_ref'),
    We = Symbol.for('react.suspense'),
    Me = Symbol.for('react.suspense_list'),
    $e = Symbol.for('react.memo'),
    Re = Symbol.for('react.lazy'),
    ye = Symbol.for('react.offscreen'),
    $ = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = ($ && e[$]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var B = Object.assign,
    C;
  function I(e) {
    if (C === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        C = (t && t[1]) || '';
      }
    return (
      `
` +
      C +
      e
    );
  }
  var oe = !1;
  function ae(e, t) {
    if (!e || oe) return '';
    oe = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (N) {
            var a = N;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (N) {
            a = N;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (N) {
          a = N;
        }
        e();
      }
    } catch (N) {
      if (N && a && typeof N.stack == 'string') {
        for (
          var u = N.stack.split(`
`),
            f = a.stack.split(`
`),
            m = u.length - 1,
            y = f.length - 1;
          1 <= m && 0 <= y && u[m] !== f[y];

        )
          y--;
        for (; 1 <= m && 0 <= y; m--, y--)
          if (u[m] !== f[y]) {
            if (m !== 1 || y !== 1)
              do
                if ((m--, y--, 0 > y || u[m] !== f[y])) {
                  var S =
                    `
` + u[m].replace(' at new ', ' at ');
                  return e.displayName && S.includes('<anonymous>') && (S = S.replace('<anonymous>', e.displayName)), S;
                }
              while (1 <= m && 0 <= y);
            break;
          }
      }
    } finally {
      (oe = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : '') ? I(e) : '';
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return I(e.type);
      case 16:
        return I('Lazy');
      case 13:
        return I('Suspense');
      case 19:
        return I('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = ae(e.type, !1)), e;
      case 11:
        return (e = ae(e.type.render, !1)), e;
      case 1:
        return (e = ae(e.type, !0)), e;
      default:
        return '';
    }
  }
  function ce(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case te:
        return 'Fragment';
      case J:
        return 'Portal';
      case de:
        return 'Profiler';
      case re:
        return 'StrictMode';
      case We:
        return 'Suspense';
      case Me:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Se:
          return (e.displayName || 'Context') + '.Consumer';
        case xe:
          return (e._context.displayName || 'Context') + '.Provider';
        case lt:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case $e:
          return (t = e.displayName || null), t !== null ? t : ce(e.type) || 'Memo';
        case Re:
          (t = e._payload), (e = e._init);
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  function we(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return ce(t);
      case 8:
        return t === re ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function me(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function ke(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Ze(e) {
    var t = ke(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = '' + e[t];
    if (!e.hasOwnProperty(t) && typeof r < 'u' && typeof r.get == 'function' && typeof r.set == 'function') {
      var u = r.get,
        f = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (m) {
            (a = '' + m), f.call(this, m);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (m) {
            a = '' + m;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Gn(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function Fi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      a = '';
    return e && (a = ke(e) ? (e.checked ? 'true' : 'false') : e.value), (e = a), e !== r ? (t.setValue(e), !0) : !1;
  }
  function Xn(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rr(e, t) {
    var r = t.checked;
    return B({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function zi(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      a = t.checked != null ? t.checked : t.defaultChecked;
    (r = me(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: a,
        initialValue: r,
        controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function ji(e, t) {
    (t = t.checked), t != null && z(e, 'checked', t, !1);
  }
  function Ir(e, t) {
    ji(e, t);
    var r = me(t.value),
      a = t.type;
    if (r != null)
      a === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r);
    else if (a === 'submit' || a === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? ne(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && ne(e, t.type, me(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function $i(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var a = t.type;
      if (!((a !== 'submit' && a !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      (t = '' + e._wrapperState.initialValue), r || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r);
  }
  function ne(e, t, r) {
    (t !== 'number' || Xn(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var Ut = Array.isArray;
  function Jn(e, t, r, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < r.length; u++) t['$' + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        (u = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && a && (e[r].defaultSelected = !0);
    } else {
      for (r = '' + me(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          (e[u].selected = !0), a && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ka(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return B({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
  }
  function Su(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(o(92));
        if (Ut(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ''), (r = t);
    }
    e._wrapperState = { initialValue: me(r) };
  }
  function ku(e, t) {
    var r = me(t.value),
      a = me(t.defaultValue);
    r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      a != null && (e.defaultValue = '' + a);
  }
  function Cu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function Eu(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Ca(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Eu(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
  }
  var Ui,
    Pu = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, a, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, a, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          Ui = Ui || document.createElement('div'),
            Ui.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Ui.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Dr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ar = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    qm = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Ar).forEach(function (e) {
    qm.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ar[t] = Ar[e]);
    });
  });
  function bu(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (Ar.hasOwnProperty(e) && Ar[e])
      ? ('' + t).trim()
      : t + 'px';
  }
  function Ou(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var a = r.indexOf('--') === 0,
          u = bu(r, t[r], a);
        r === 'float' && (r = 'cssFloat'), a ? e.setProperty(r, u) : (e[r] = u);
      }
  }
  var Km = B(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Ea(e, t) {
    if (t) {
      if (Km[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(o(62));
    }
  }
  function Pa(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var ba = null;
  function Oa(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Na = null,
    Zn = null,
    er = null;
  function Nu(e) {
    if ((e = ri(e))) {
      if (typeof Na != 'function') throw Error(o(280));
      var t = e.stateNode;
      t && ((t = co(t)), Na(e.stateNode, e.type, t));
    }
  }
  function Tu(e) {
    Zn ? (er ? er.push(e) : (er = [e])) : (Zn = e);
  }
  function Lu() {
    if (Zn) {
      var e = Zn,
        t = er;
      if (((er = Zn = null), Nu(e), t)) for (e = 0; e < t.length; e++) Nu(t[e]);
    }
  }
  function _u(e, t) {
    return e(t);
  }
  function Ru() {}
  var Ta = !1;
  function Iu(e, t, r) {
    if (Ta) return e(t, r);
    Ta = !0;
    try {
      return _u(e, t, r);
    } finally {
      (Ta = !1), (Zn !== null || er !== null) && (Ru(), Lu());
    }
  }
  function Mr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var a = co(r);
    if (a === null) return null;
    r = a[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (a = !a.disabled) ||
          ((e = e.type), (a = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(o(231, t, typeof r));
    return r;
  }
  var La = !1;
  if (p)
    try {
      var Fr = {};
      Object.defineProperty(Fr, 'passive', {
        get: function () {
          La = !0;
        },
      }),
        window.addEventListener('test', Fr, Fr),
        window.removeEventListener('test', Fr, Fr);
    } catch {
      La = !1;
    }
  function Qm(e, t, r, a, u, f, m, y, S) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, N);
    } catch (M) {
      this.onError(M);
    }
  }
  var zr = !1,
    Vi = null,
    Bi = !1,
    _a = null,
    Gm = {
      onError: function (e) {
        (zr = !0), (Vi = e);
      },
    };
  function Xm(e, t, r, a, u, f, m, y, S) {
    (zr = !1), (Vi = null), Qm.apply(Gm, arguments);
  }
  function Jm(e, t, r, a, u, f, m, y, S) {
    if ((Xm.apply(this, arguments), zr)) {
      if (zr) {
        var N = Vi;
        (zr = !1), (Vi = null);
      } else throw Error(o(198));
      Bi || ((Bi = !0), (_a = N));
    }
  }
  function Nn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Du(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function Au(e) {
    if (Nn(e) !== e) throw Error(o(188));
  }
  function Zm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Nn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, a = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((a = u.return), a !== null)) {
          r = a;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === r) return Au(u), e;
          if (f === a) return Au(u), t;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== a.return) (r = u), (a = f);
      else {
        for (var m = !1, y = u.child; y; ) {
          if (y === r) {
            (m = !0), (r = u), (a = f);
            break;
          }
          if (y === a) {
            (m = !0), (a = u), (r = f);
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = f.child; y; ) {
            if (y === r) {
              (m = !0), (r = f), (a = u);
              break;
            }
            if (y === a) {
              (m = !0), (a = f), (r = u);
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (r.alternate !== a) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function Mu(e) {
    return (e = Zm(e)), e !== null ? Fu(e) : null;
  }
  function Fu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Fu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zu = i.unstable_scheduleCallback,
    ju = i.unstable_cancelCallback,
    eh = i.unstable_shouldYield,
    th = i.unstable_requestPaint,
    Ie = i.unstable_now,
    nh = i.unstable_getCurrentPriorityLevel,
    Ra = i.unstable_ImmediatePriority,
    $u = i.unstable_UserBlockingPriority,
    Wi = i.unstable_NormalPriority,
    rh = i.unstable_LowPriority,
    Uu = i.unstable_IdlePriority,
    Hi = null,
    Lt = null;
  function ih(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == 'function')
      try {
        Lt.onCommitFiberRoot(Hi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : sh,
    oh = Math.log,
    ah = Math.LN2;
  function sh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((oh(e) / ah) | 0)) | 0;
  }
  var Yi = 64,
    qi = 4194304;
  function jr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ki(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      m = r & 268435455;
    if (m !== 0) {
      var y = m & ~u;
      y !== 0 ? (a = jr(y)) : ((f &= m), f !== 0 && (a = jr(f)));
    } else (m = r & ~u), m !== 0 ? (a = jr(m)) : f !== 0 && (a = jr(f));
    if (a === 0) return 0;
    if (
      t !== 0 &&
      t !== a &&
      (t & u) === 0 &&
      ((u = a & -a), (f = t & -t), u >= f || (u === 16 && (f & 4194240) !== 0))
    )
      return t;
    if (((a & 4) !== 0 && (a |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= a; 0 < t; ) (r = 31 - kt(t)), (u = 1 << r), (a |= e[r]), (t &= ~u);
    return a;
  }
  function lh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function uh(e, t) {
    for (var r = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes; 0 < f; ) {
      var m = 31 - kt(f),
        y = 1 << m,
        S = u[m];
      S === -1 ? ((y & r) === 0 || (y & a) !== 0) && (u[m] = lh(y, t)) : S <= t && (e.expiredLanes |= y), (f &= ~y);
    }
  }
  function Ia(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Vu() {
    var e = Yi;
    return (Yi <<= 1), (Yi & 4194240) === 0 && (Yi = 64), e;
  }
  function Da(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function $r(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - kt(t)),
      (e[t] = r);
  }
  function ch(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var u = 31 - kt(r),
        f = 1 << u;
      (t[u] = 0), (a[u] = -1), (e[u] = -1), (r &= ~f);
    }
  }
  function Aa(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var a = 31 - kt(r),
        u = 1 << a;
      (u & t) | (e[a] & t) && (e[a] |= t), (r &= ~u);
    }
  }
  var ge = 0;
  function Bu(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var Wu,
    Ma,
    Hu,
    Yu,
    qu,
    Fa = !1,
    Qi = [],
    Zt = null,
    en = null,
    tn = null,
    Ur = new Map(),
    Vr = new Map(),
    nn = [],
    fh =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Ku(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Zt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        en = null;
        break;
      case 'mouseover':
      case 'mouseout':
        tn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ur.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Vr.delete(t.pointerId);
    }
  }
  function Br(e, t, r, a, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = { blockedOn: t, domEventName: r, eventSystemFlags: a, nativeEvent: f, targetContainers: [u] }),
        t !== null && ((t = ri(t)), t !== null && Ma(t)),
        e)
      : ((e.eventSystemFlags |= a), (t = e.targetContainers), u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function dh(e, t, r, a, u) {
    switch (t) {
      case 'focusin':
        return (Zt = Br(Zt, e, t, r, a, u)), !0;
      case 'dragenter':
        return (en = Br(en, e, t, r, a, u)), !0;
      case 'mouseover':
        return (tn = Br(tn, e, t, r, a, u)), !0;
      case 'pointerover':
        var f = u.pointerId;
        return Ur.set(f, Br(Ur.get(f) || null, e, t, r, a, u)), !0;
      case 'gotpointercapture':
        return (f = u.pointerId), Vr.set(f, Br(Vr.get(f) || null, e, t, r, a, u)), !0;
    }
    return !1;
  }
  function Qu(e) {
    var t = Tn(e.target);
    if (t !== null) {
      var r = Nn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Du(r)), t !== null)) {
            (e.blockedOn = t),
              qu(e.priority, function () {
                Hu(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = ja(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var a = new r.constructor(r.type, r);
        (ba = a), r.target.dispatchEvent(a), (ba = null);
      } else return (t = ri(r)), t !== null && Ma(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Gu(e, t, r) {
    Gi(e) && r.delete(t);
  }
  function ph() {
    (Fa = !1),
      Zt !== null && Gi(Zt) && (Zt = null),
      en !== null && Gi(en) && (en = null),
      tn !== null && Gi(tn) && (tn = null),
      Ur.forEach(Gu),
      Vr.forEach(Gu);
  }
  function Wr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), Fa || ((Fa = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, ph)));
  }
  function Hr(e) {
    function t(u) {
      return Wr(u, e);
    }
    if (0 < Qi.length) {
      Wr(Qi[0], e);
      for (var r = 1; r < Qi.length; r++) {
        var a = Qi[r];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (
      Zt !== null && Wr(Zt, e), en !== null && Wr(en, e), tn !== null && Wr(tn, e), Ur.forEach(t), Vr.forEach(t), r = 0;
      r < nn.length;
      r++
    )
      (a = nn[r]), a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < nn.length && ((r = nn[0]), r.blockedOn === null); ) Qu(r), r.blockedOn === null && nn.shift();
  }
  var tr = U.ReactCurrentBatchConfig,
    Xi = !0;
  function mh(e, t, r, a) {
    var u = ge,
      f = tr.transition;
    tr.transition = null;
    try {
      (ge = 1), za(e, t, r, a);
    } finally {
      (ge = u), (tr.transition = f);
    }
  }
  function hh(e, t, r, a) {
    var u = ge,
      f = tr.transition;
    tr.transition = null;
    try {
      (ge = 4), za(e, t, r, a);
    } finally {
      (ge = u), (tr.transition = f);
    }
  }
  function za(e, t, r, a) {
    if (Xi) {
      var u = ja(e, t, r, a);
      if (u === null) ns(e, t, a, Ji, r), Ku(e, a);
      else if (dh(u, e, t, r, a)) a.stopPropagation();
      else if ((Ku(e, a), t & 4 && -1 < fh.indexOf(e))) {
        for (; u !== null; ) {
          var f = ri(u);
          if ((f !== null && Wu(f), (f = ja(e, t, r, a)), f === null && ns(e, t, a, Ji, r), f === u)) break;
          u = f;
        }
        u !== null && a.stopPropagation();
      } else ns(e, t, a, null, r);
    }
  }
  var Ji = null;
  function ja(e, t, r, a) {
    if (((Ji = null), (e = Oa(a)), (e = Tn(e)), e !== null))
      if (((t = Nn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Du(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ji = e), null;
  }
  function Xu(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (nh()) {
          case Ra:
            return 1;
          case $u:
            return 4;
          case Wi:
          case rh:
            return 16;
          case Uu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var rn = null,
    $a = null,
    Zi = null;
  function Ju() {
    if (Zi) return Zi;
    var e,
      t = $a,
      r = t.length,
      a,
      u = 'value' in rn ? rn.value : rn.textContent,
      f = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++);
    var m = r - e;
    for (a = 1; a <= m && t[r - a] === u[f - a]; a++);
    return (Zi = u.slice(e, 1 < a ? 1 - a : void 0));
  }
  function eo(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function to() {
    return !0;
  }
  function Zu() {
    return !1;
  }
  function ut(e) {
    function t(r, a, u, f, m) {
      (this._reactName = r),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = f),
        (this.target = m),
        (this.currentTarget = null);
      for (var y in e) e.hasOwnProperty(y) && ((r = e[y]), (this[y] = r ? r(f) : f[y]));
      return (
        (this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? to : Zu),
        (this.isPropagationStopped = Zu),
        this
      );
    }
    return (
      B(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault ? r.preventDefault() : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = to));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = to));
        },
        persist: function () {},
        isPersistent: to,
      }),
      t
    );
  }
  var nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ua = ut(nr),
    Yr = B({}, nr, { view: 0, detail: 0 }),
    gh = ut(Yr),
    Va,
    Ba,
    qr,
    no = B({}, Yr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ha,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== qr &&
              (qr && e.type === 'mousemove'
                ? ((Va = e.screenX - qr.screenX), (Ba = e.screenY - qr.screenY))
                : (Ba = Va = 0),
              (qr = e)),
            Va);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ba;
      },
    }),
    ec = ut(no),
    vh = B({}, no, { dataTransfer: 0 }),
    yh = ut(vh),
    wh = B({}, Yr, { relatedTarget: 0 }),
    Wa = ut(wh),
    xh = B({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sh = ut(xh),
    kh = B({}, nr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ch = ut(kh),
    Eh = B({}, nr, { data: 0 }),
    tc = ut(Eh),
    Ph = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    bh = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Oh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Nh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Oh[e]) ? !!t[e] : !1;
  }
  function Ha() {
    return Nh;
  }
  var Th = B({}, Yr, {
      key: function (e) {
        if (e.key) {
          var t = Ph[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = eo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? bh[e.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ha,
      charCode: function (e) {
        return e.type === 'keypress' ? eo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? eo(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
    }),
    Lh = ut(Th),
    _h = B({}, no, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    nc = ut(_h),
    Rh = B({}, Yr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ha,
    }),
    Ih = ut(Rh),
    Dh = B({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ah = ut(Dh),
    Mh = B({}, no, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Fh = ut(Mh),
    zh = [9, 13, 27, 32],
    Ya = p && 'CompositionEvent' in window,
    Kr = null;
  p && 'documentMode' in document && (Kr = document.documentMode);
  var jh = p && 'TextEvent' in window && !Kr,
    rc = p && (!Ya || (Kr && 8 < Kr && 11 >= Kr)),
    ic = ' ',
    oc = !1;
  function ac(e, t) {
    switch (e) {
      case 'keyup':
        return zh.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function sc(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var rr = !1;
  function $h(e, t) {
    switch (e) {
      case 'compositionend':
        return sc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((oc = !0), ic);
      case 'textInput':
        return (e = t.data), e === ic && oc ? null : e;
      default:
        return null;
    }
  }
  function Uh(e, t) {
    if (rr)
      return e === 'compositionend' || (!Ya && ac(e, t)) ? ((e = Ju()), (Zi = $a = rn = null), (rr = !1), e) : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return rc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Vh = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Vh[e.type] : t === 'textarea';
  }
  function uc(e, t, r, a) {
    Tu(a),
      (t = so(t, 'onChange')),
      0 < t.length && ((r = new Ua('onChange', 'change', null, r, a)), e.push({ event: r, listeners: t }));
  }
  var Qr = null,
    Gr = null;
  function Bh(e) {
    Oc(e, 0);
  }
  function ro(e) {
    var t = lr(e);
    if (Fi(t)) return e;
  }
  function Wh(e, t) {
    if (e === 'change') return t;
  }
  var cc = !1;
  if (p) {
    var qa;
    if (p) {
      var Ka = 'oninput' in document;
      if (!Ka) {
        var fc = document.createElement('div');
        fc.setAttribute('oninput', 'return;'), (Ka = typeof fc.oninput == 'function');
      }
      qa = Ka;
    } else qa = !1;
    cc = qa && (!document.documentMode || 9 < document.documentMode);
  }
  function dc() {
    Qr && (Qr.detachEvent('onpropertychange', pc), (Gr = Qr = null));
  }
  function pc(e) {
    if (e.propertyName === 'value' && ro(Gr)) {
      var t = [];
      uc(t, Gr, e, Oa(e)), Iu(Bh, t);
    }
  }
  function Hh(e, t, r) {
    e === 'focusin' ? (dc(), (Qr = t), (Gr = r), Qr.attachEvent('onpropertychange', pc)) : e === 'focusout' && dc();
  }
  function Yh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ro(Gr);
  }
  function qh(e, t) {
    if (e === 'click') return ro(t);
  }
  function Kh(e, t) {
    if (e === 'input' || e === 'change') return ro(t);
  }
  function Qh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ct = typeof Object.is == 'function' ? Object.is : Qh;
  function Xr(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (a = 0; a < r.length; a++) {
      var u = r[a];
      if (!h.call(t, u) || !Ct(e[u], t[u])) return !1;
    }
    return !0;
  }
  function mc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hc(e, t) {
    var r = mc(e);
    e = 0;
    for (var a; r; ) {
      if (r.nodeType === 3) {
        if (((a = e + r.textContent.length), e <= t && a >= t)) return { node: r, offset: t - e };
        e = a;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = mc(r);
    }
  }
  function gc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? gc(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function vc() {
    for (var e = window, t = Xn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Xn(e.document);
    }
    return t;
  }
  function Qa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Gh(e) {
    var t = vc(),
      r = e.focusedElem,
      a = e.selectionRange;
    if (t !== r && r && r.ownerDocument && gc(r.ownerDocument.documentElement, r)) {
      if (a !== null && Qa(r)) {
        if (((t = a.start), (e = a.end), e === void 0 && (e = t), 'selectionStart' in r))
          (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
        else if (((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
          e = e.getSelection();
          var u = r.textContent.length,
            f = Math.min(a.start, u);
          (a = a.end === void 0 ? f : Math.min(a.end, u)),
            !e.extend && f > a && ((u = a), (a = f), (f = u)),
            (u = hc(r, f));
          var m = hc(r, a);
          u &&
            m &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== m.node ||
              e.focusOffset !== m.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            f > a ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var Xh = p && 'documentMode' in document && 11 >= document.documentMode,
    ir = null,
    Ga = null,
    Jr = null,
    Xa = !1;
  function yc(e, t, r) {
    var a = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Xa ||
      ir == null ||
      ir !== Xn(a) ||
      ((a = ir),
      'selectionStart' in a && Qa(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Jr && Xr(Jr, a)) ||
        ((Jr = a),
        (a = so(Ga, 'onSelect')),
        0 < a.length &&
          ((t = new Ua('onSelect', 'select', null, t, r)), e.push({ event: t, listeners: a }), (t.target = ir))));
  }
  function io(e, t) {
    var r = {};
    return (r[e.toLowerCase()] = t.toLowerCase()), (r['Webkit' + e] = 'webkit' + t), (r['Moz' + e] = 'moz' + t), r;
  }
  var or = {
      animationend: io('Animation', 'AnimationEnd'),
      animationiteration: io('Animation', 'AnimationIteration'),
      animationstart: io('Animation', 'AnimationStart'),
      transitionend: io('Transition', 'TransitionEnd'),
    },
    Ja = {},
    wc = {};
  p &&
    ((wc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete or.animationend.animation, delete or.animationiteration.animation, delete or.animationstart.animation),
    'TransitionEvent' in window || delete or.transitionend.transition);
  function oo(e) {
    if (Ja[e]) return Ja[e];
    if (!or[e]) return e;
    var t = or[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in wc) return (Ja[e] = t[r]);
    return e;
  }
  var xc = oo('animationend'),
    Sc = oo('animationiteration'),
    kc = oo('animationstart'),
    Cc = oo('transitionend'),
    Ec = new Map(),
    Pc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function on(e, t) {
    Ec.set(e, t), c(t, [e]);
  }
  for (var Za = 0; Za < Pc.length; Za++) {
    var es = Pc[Za],
      Jh = es.toLowerCase(),
      Zh = es[0].toUpperCase() + es.slice(1);
    on(Jh, 'on' + Zh);
  }
  on(xc, 'onAnimationEnd'),
    on(Sc, 'onAnimationIteration'),
    on(kc, 'onAnimationStart'),
    on('dblclick', 'onDoubleClick'),
    on('focusin', 'onFocus'),
    on('focusout', 'onBlur'),
    on(Cc, 'onTransitionEnd'),
    d('onMouseEnter', ['mouseout', 'mouseover']),
    d('onMouseLeave', ['mouseout', 'mouseover']),
    d('onPointerEnter', ['pointerout', 'pointerover']),
    d('onPointerLeave', ['pointerout', 'pointerover']),
    c('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    c('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    c('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    c('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    c('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    c('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
  var Zr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    eg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Zr));
  function bc(e, t, r) {
    var a = e.type || 'unknown-event';
    (e.currentTarget = r), Jm(a, t, void 0, e), (e.currentTarget = null);
  }
  function Oc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var a = e[r],
        u = a.event;
      a = a.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var m = a.length - 1; 0 <= m; m--) {
            var y = a[m],
              S = y.instance,
              N = y.currentTarget;
            if (((y = y.listener), S !== f && u.isPropagationStopped())) break e;
            bc(u, y, N), (f = S);
          }
        else
          for (m = 0; m < a.length; m++) {
            if (
              ((y = a[m]),
              (S = y.instance),
              (N = y.currentTarget),
              (y = y.listener),
              S !== f && u.isPropagationStopped())
            )
              break e;
            bc(u, y, N), (f = S);
          }
      }
    }
    if (Bi) throw ((e = _a), (Bi = !1), (_a = null), e);
  }
  function Ee(e, t) {
    var r = t[ls];
    r === void 0 && (r = t[ls] = new Set());
    var a = e + '__bubble';
    r.has(a) || (Nc(t, e, 2, !1), r.add(a));
  }
  function ts(e, t, r) {
    var a = 0;
    t && (a |= 4), Nc(r, e, a, t);
  }
  var ao = '_reactListening' + Math.random().toString(36).slice(2);
  function ei(e) {
    if (!e[ao]) {
      (e[ao] = !0),
        s.forEach(function (r) {
          r !== 'selectionchange' && (eg.has(r) || ts(r, !1, e), ts(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ao] || ((t[ao] = !0), ts('selectionchange', !1, t));
    }
  }
  function Nc(e, t, r, a) {
    switch (Xu(t)) {
      case 1:
        var u = mh;
        break;
      case 4:
        u = hh;
        break;
      default:
        u = za;
    }
    (r = u.bind(null, t, r, e)),
      (u = void 0),
      !La || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (u = !0),
      a
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
        ? e.addEventListener(t, r, { passive: u })
        : e.addEventListener(t, r, !1);
  }
  function ns(e, t, r, a, u) {
    var f = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var m = a.tag;
        if (m === 3 || m === 4) {
          var y = a.stateNode.containerInfo;
          if (y === u || (y.nodeType === 8 && y.parentNode === u)) break;
          if (m === 4)
            for (m = a.return; m !== null; ) {
              var S = m.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = m.stateNode.containerInfo), S === u || (S.nodeType === 8 && S.parentNode === u))
              )
                return;
              m = m.return;
            }
          for (; y !== null; ) {
            if (((m = Tn(y)), m === null)) return;
            if (((S = m.tag), S === 5 || S === 6)) {
              a = f = m;
              continue e;
            }
            y = y.parentNode;
          }
        }
        a = a.return;
      }
    Iu(function () {
      var N = f,
        M = Oa(r),
        F = [];
      e: {
        var D = Ec.get(e);
        if (D !== void 0) {
          var W = Ua,
            q = e;
          switch (e) {
            case 'keypress':
              if (eo(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              W = Lh;
              break;
            case 'focusin':
              (q = 'focus'), (W = Wa);
              break;
            case 'focusout':
              (q = 'blur'), (W = Wa);
              break;
            case 'beforeblur':
            case 'afterblur':
              W = Wa;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              W = ec;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              W = yh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              W = Ih;
              break;
            case xc:
            case Sc:
            case kc:
              W = Sh;
              break;
            case Cc:
              W = Ah;
              break;
            case 'scroll':
              W = gh;
              break;
            case 'wheel':
              W = Fh;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              W = Ch;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              W = nc;
          }
          var K = (t & 4) !== 0,
            De = !K && e === 'scroll',
            E = K ? (D !== null ? D + 'Capture' : null) : D;
          K = [];
          for (var k = N, b; k !== null; ) {
            b = k;
            var j = b.stateNode;
            if (
              (b.tag === 5 && j !== null && ((b = j), E !== null && ((j = Mr(k, E)), j != null && K.push(ti(k, j, b)))),
              De)
            )
              break;
            k = k.return;
          }
          0 < K.length && ((D = new W(D, q, null, r, M)), F.push({ event: D, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((D = e === 'mouseover' || e === 'pointerover'),
            (W = e === 'mouseout' || e === 'pointerout'),
            D && r !== ba && (q = r.relatedTarget || r.fromElement) && (Tn(q) || q[Vt]))
          )
            break e;
          if (
            (W || D) &&
            ((D = M.window === M ? M : (D = M.ownerDocument) ? D.defaultView || D.parentWindow : window),
            W
              ? ((q = r.relatedTarget || r.toElement),
                (W = N),
                (q = q ? Tn(q) : null),
                q !== null && ((De = Nn(q)), q !== De || (q.tag !== 5 && q.tag !== 6)) && (q = null))
              : ((W = null), (q = N)),
            W !== q)
          ) {
            if (
              ((K = ec),
              (j = 'onMouseLeave'),
              (E = 'onMouseEnter'),
              (k = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((K = nc), (j = 'onPointerLeave'), (E = 'onPointerEnter'), (k = 'pointer')),
              (De = W == null ? D : lr(W)),
              (b = q == null ? D : lr(q)),
              (D = new K(j, k + 'leave', W, r, M)),
              (D.target = De),
              (D.relatedTarget = b),
              (j = null),
              Tn(M) === N && ((K = new K(E, k + 'enter', q, r, M)), (K.target = b), (K.relatedTarget = De), (j = K)),
              (De = j),
              W && q)
            )
              t: {
                for (K = W, E = q, k = 0, b = K; b; b = ar(b)) k++;
                for (b = 0, j = E; j; j = ar(j)) b++;
                for (; 0 < k - b; ) (K = ar(K)), k--;
                for (; 0 < b - k; ) (E = ar(E)), b--;
                for (; k--; ) {
                  if (K === E || (E !== null && K === E.alternate)) break t;
                  (K = ar(K)), (E = ar(E));
                }
                K = null;
              }
            else K = null;
            W !== null && Tc(F, D, W, K, !1), q !== null && De !== null && Tc(F, De, q, K, !0);
          }
        }
        e: {
          if (
            ((D = N ? lr(N) : window),
            (W = D.nodeName && D.nodeName.toLowerCase()),
            W === 'select' || (W === 'input' && D.type === 'file'))
          )
            var X = Wh;
          else if (lc(D))
            if (cc) X = Kh;
            else {
              X = Yh;
              var Z = Hh;
            }
          else
            (W = D.nodeName) &&
              W.toLowerCase() === 'input' &&
              (D.type === 'checkbox' || D.type === 'radio') &&
              (X = qh);
          if (X && (X = X(e, N))) {
            uc(F, X, r, M);
            break e;
          }
          Z && Z(e, D, N),
            e === 'focusout' &&
              (Z = D._wrapperState) &&
              Z.controlled &&
              D.type === 'number' &&
              ne(D, 'number', D.value);
        }
        switch (((Z = N ? lr(N) : window), e)) {
          case 'focusin':
            (lc(Z) || Z.contentEditable === 'true') && ((ir = Z), (Ga = N), (Jr = null));
            break;
          case 'focusout':
            Jr = Ga = ir = null;
            break;
          case 'mousedown':
            Xa = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Xa = !1), yc(F, r, M);
            break;
          case 'selectionchange':
            if (Xh) break;
          case 'keydown':
          case 'keyup':
            yc(F, r, M);
        }
        var ee;
        if (Ya)
          e: {
            switch (e) {
              case 'compositionstart':
                var ie = 'onCompositionStart';
                break e;
              case 'compositionend':
                ie = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ie = 'onCompositionUpdate';
                break e;
            }
            ie = void 0;
          }
        else
          rr
            ? ac(e, r) && (ie = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (ie = 'onCompositionStart');
        ie &&
          (rc &&
            r.locale !== 'ko' &&
            (rr || ie !== 'onCompositionStart'
              ? ie === 'onCompositionEnd' && rr && (ee = Ju())
              : ((rn = M), ($a = 'value' in rn ? rn.value : rn.textContent), (rr = !0))),
          (Z = so(N, ie)),
          0 < Z.length &&
            ((ie = new tc(ie, e, null, r, M)),
            F.push({ event: ie, listeners: Z }),
            ee ? (ie.data = ee) : ((ee = sc(r)), ee !== null && (ie.data = ee)))),
          (ee = jh ? $h(e, r) : Uh(e, r)) &&
            ((N = so(N, 'onBeforeInput')),
            0 < N.length &&
              ((M = new tc('onBeforeInput', 'beforeinput', null, r, M)),
              F.push({ event: M, listeners: N }),
              (M.data = ee)));
      }
      Oc(F, t);
    });
  }
  function ti(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function so(e, t) {
    for (var r = t + 'Capture', a = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      u.tag === 5 &&
        f !== null &&
        ((u = f),
        (f = Mr(e, r)),
        f != null && a.unshift(ti(e, f, u)),
        (f = Mr(e, t)),
        f != null && a.push(ti(e, f, u))),
        (e = e.return);
    }
    return a;
  }
  function ar(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Tc(e, t, r, a, u) {
    for (var f = t._reactName, m = []; r !== null && r !== a; ) {
      var y = r,
        S = y.alternate,
        N = y.stateNode;
      if (S !== null && S === a) break;
      y.tag === 5 &&
        N !== null &&
        ((y = N),
        u
          ? ((S = Mr(r, f)), S != null && m.unshift(ti(r, S, y)))
          : u || ((S = Mr(r, f)), S != null && m.push(ti(r, S, y)))),
        (r = r.return);
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var tg = /\r\n?/g,
    ng = /\u0000|\uFFFD/g;
  function Lc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        tg,
        `
`
      )
      .replace(ng, '');
  }
  function lo(e, t, r) {
    if (((t = Lc(t)), Lc(e) !== t && r)) throw Error(o(425));
  }
  function uo() {}
  var rs = null,
    is = null;
  function os(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var as = typeof setTimeout == 'function' ? setTimeout : void 0,
    rg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    _c = typeof Promise == 'function' ? Promise : void 0,
    ig =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof _c < 'u'
        ? function (e) {
            return _c.resolve(null).then(e).catch(og);
          }
        : as;
  function og(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ss(e, t) {
    var r = t,
      a = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === '/$')) {
          if (a === 0) {
            e.removeChild(u), Hr(t);
            return;
          }
          a--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || a++;
      r = u;
    } while (r);
    Hr(t);
  }
  function an(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Rc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var sr = Math.random().toString(36).slice(2),
    _t = '__reactFiber$' + sr,
    ni = '__reactProps$' + sr,
    Vt = '__reactContainer$' + sr,
    ls = '__reactEvents$' + sr,
    ag = '__reactListeners$' + sr,
    sg = '__reactHandles$' + sr;
  function Tn(e) {
    var t = e[_t];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Vt] || r[_t])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = Rc(e); e !== null; ) {
            if ((r = e[_t])) return r;
            e = Rc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function ri(e) {
    return (e = e[_t] || e[Vt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
  }
  function lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function co(e) {
    return e[ni] || null;
  }
  var us = [],
    ur = -1;
  function sn(e) {
    return { current: e };
  }
  function Pe(e) {
    0 > ur || ((e.current = us[ur]), (us[ur] = null), ur--);
  }
  function Ce(e, t) {
    ur++, (us[ur] = e.current), (e.current = t);
  }
  var ln = {},
    qe = sn(ln),
    nt = sn(!1),
    Ln = ln;
  function cr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return ln;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      f;
    for (f in r) u[f] = t[f];
    return (
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function rt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function fo() {
    Pe(nt), Pe(qe);
  }
  function Ic(e, t, r) {
    if (qe.current !== ln) throw Error(o(168));
    Ce(qe, t), Ce(nt, r);
  }
  function Dc(e, t, r) {
    var a = e.stateNode;
    if (((t = t.childContextTypes), typeof a.getChildContext != 'function')) return r;
    a = a.getChildContext();
    for (var u in a) if (!(u in t)) throw Error(o(108, we(e) || 'Unknown', u));
    return B({}, r, a);
  }
  function po(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
      (Ln = qe.current),
      Ce(qe, e),
      Ce(nt, nt.current),
      !0
    );
  }
  function Ac(e, t, r) {
    var a = e.stateNode;
    if (!a) throw Error(o(169));
    r ? ((e = Dc(e, t, Ln)), (a.__reactInternalMemoizedMergedChildContext = e), Pe(nt), Pe(qe), Ce(qe, e)) : Pe(nt),
      Ce(nt, r);
  }
  var Bt = null,
    mo = !1,
    cs = !1;
  function Mc(e) {
    Bt === null ? (Bt = [e]) : Bt.push(e);
  }
  function lg(e) {
    (mo = !0), Mc(e);
  }
  function un() {
    if (!cs && Bt !== null) {
      cs = !0;
      var e = 0,
        t = ge;
      try {
        var r = Bt;
        for (ge = 1; e < r.length; e++) {
          var a = r[e];
          do a = a(!0);
          while (a !== null);
        }
        (Bt = null), (mo = !1);
      } catch (u) {
        throw (Bt !== null && (Bt = Bt.slice(e + 1)), zu(Ra, un), u);
      } finally {
        (ge = t), (cs = !1);
      }
    }
    return null;
  }
  var fr = [],
    dr = 0,
    ho = null,
    go = 0,
    gt = [],
    vt = 0,
    _n = null,
    Wt = 1,
    Ht = '';
  function Rn(e, t) {
    (fr[dr++] = go), (fr[dr++] = ho), (ho = e), (go = t);
  }
  function Fc(e, t, r) {
    (gt[vt++] = Wt), (gt[vt++] = Ht), (gt[vt++] = _n), (_n = e);
    var a = Wt;
    e = Ht;
    var u = 32 - kt(a) - 1;
    (a &= ~(1 << u)), (r += 1);
    var f = 32 - kt(t) + u;
    if (30 < f) {
      var m = u - (u % 5);
      (f = (a & ((1 << m) - 1)).toString(32)),
        (a >>= m),
        (u -= m),
        (Wt = (1 << (32 - kt(t) + u)) | (r << u) | a),
        (Ht = f + e);
    } else (Wt = (1 << f) | (r << u) | a), (Ht = e);
  }
  function fs(e) {
    e.return !== null && (Rn(e, 1), Fc(e, 1, 0));
  }
  function ds(e) {
    for (; e === ho; ) (ho = fr[--dr]), (fr[dr] = null), (go = fr[--dr]), (fr[dr] = null);
    for (; e === _n; )
      (_n = gt[--vt]), (gt[vt] = null), (Ht = gt[--vt]), (gt[vt] = null), (Wt = gt[--vt]), (gt[vt] = null);
  }
  var ct = null,
    ft = null,
    Oe = !1,
    Et = null;
  function zc(e, t) {
    var r = St(5, null, null, 0);
    (r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function jc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (ft = an(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (ft = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = _n !== null ? { id: Wt, overflow: Ht } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = St(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (ct = e),
              (ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ps(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ms(e) {
    if (Oe) {
      var t = ft;
      if (t) {
        var r = t;
        if (!jc(e, t)) {
          if (ps(e)) throw Error(o(418));
          t = an(r.nextSibling);
          var a = ct;
          t && jc(e, t) ? zc(a, r) : ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (ct = e));
        }
      } else {
        if (ps(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (Oe = !1), (ct = e);
      }
    }
  }
  function $c(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ct = e;
  }
  function vo(e) {
    if (e !== ct) return !1;
    if (!Oe) return $c(e), (Oe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !os(e.type, e.memoizedProps))),
      t && (t = ft))
    ) {
      if (ps(e)) throw (Uc(), Error(o(418)));
      for (; t; ) zc(e, t), (t = an(t.nextSibling));
    }
    if (($c(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                ft = an(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else ft = ct ? an(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Uc() {
    for (var e = ft; e; ) e = an(e.nextSibling);
  }
  function pr() {
    (ft = ct = null), (Oe = !1);
  }
  function hs(e) {
    Et === null ? (Et = [e]) : Et.push(e);
  }
  var ug = U.ReactCurrentBatchConfig;
  function ii(e, t, r) {
    if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(o(309));
          var a = r.stateNode;
        }
        if (!a) throw Error(o(147, e));
        var u = a,
          f = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === f
          ? t.ref
          : ((t = function (m) {
              var y = u.refs;
              m === null ? delete y[f] : (y[f] = m);
            }),
            (t._stringRef = f),
            t);
      }
      if (typeof e != 'string') throw Error(o(284));
      if (!r._owner) throw Error(o(290, e));
    }
    return e;
  }
  function yo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(o(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
  }
  function Vc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bc(e) {
    function t(E, k) {
      if (e) {
        var b = E.deletions;
        b === null ? ((E.deletions = [k]), (E.flags |= 16)) : b.push(k);
      }
    }
    function r(E, k) {
      if (!e) return null;
      for (; k !== null; ) t(E, k), (k = k.sibling);
      return null;
    }
    function a(E, k) {
      for (E = new Map(); k !== null; ) k.key !== null ? E.set(k.key, k) : E.set(k.index, k), (k = k.sibling);
      return E;
    }
    function u(E, k) {
      return (E = vn(E, k)), (E.index = 0), (E.sibling = null), E;
    }
    function f(E, k, b) {
      return (
        (E.index = b),
        e
          ? ((b = E.alternate), b !== null ? ((b = b.index), b < k ? ((E.flags |= 2), k) : b) : ((E.flags |= 2), k))
          : ((E.flags |= 1048576), k)
      );
    }
    function m(E) {
      return e && E.alternate === null && (E.flags |= 2), E;
    }
    function y(E, k, b, j) {
      return k === null || k.tag !== 6
        ? ((k = al(b, E.mode, j)), (k.return = E), k)
        : ((k = u(k, b)), (k.return = E), k);
    }
    function S(E, k, b, j) {
      var X = b.type;
      return X === te
        ? M(E, k, b.props.children, j, b.key)
        : k !== null &&
          (k.elementType === X || (typeof X == 'object' && X !== null && X.$$typeof === Re && Vc(X) === k.type))
        ? ((j = u(k, b.props)), (j.ref = ii(E, k, b)), (j.return = E), j)
        : ((j = Vo(b.type, b.key, b.props, null, E.mode, j)), (j.ref = ii(E, k, b)), (j.return = E), j);
    }
    function N(E, k, b, j) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== b.containerInfo ||
        k.stateNode.implementation !== b.implementation
        ? ((k = sl(b, E.mode, j)), (k.return = E), k)
        : ((k = u(k, b.children || [])), (k.return = E), k);
    }
    function M(E, k, b, j, X) {
      return k === null || k.tag !== 7
        ? ((k = $n(b, E.mode, j, X)), (k.return = E), k)
        : ((k = u(k, b)), (k.return = E), k);
    }
    function F(E, k, b) {
      if ((typeof k == 'string' && k !== '') || typeof k == 'number')
        return (k = al('' + k, E.mode, b)), (k.return = E), k;
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case R:
            return (b = Vo(k.type, k.key, k.props, null, E.mode, b)), (b.ref = ii(E, null, k)), (b.return = E), b;
          case J:
            return (k = sl(k, E.mode, b)), (k.return = E), k;
          case Re:
            var j = k._init;
            return F(E, j(k._payload), b);
        }
        if (Ut(k) || G(k)) return (k = $n(k, E.mode, b, null)), (k.return = E), k;
        yo(E, k);
      }
      return null;
    }
    function D(E, k, b, j) {
      var X = k !== null ? k.key : null;
      if ((typeof b == 'string' && b !== '') || typeof b == 'number') return X !== null ? null : y(E, k, '' + b, j);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case R:
            return b.key === X ? S(E, k, b, j) : null;
          case J:
            return b.key === X ? N(E, k, b, j) : null;
          case Re:
            return (X = b._init), D(E, k, X(b._payload), j);
        }
        if (Ut(b) || G(b)) return X !== null ? null : M(E, k, b, j, null);
        yo(E, b);
      }
      return null;
    }
    function W(E, k, b, j, X) {
      if ((typeof j == 'string' && j !== '') || typeof j == 'number') return (E = E.get(b) || null), y(k, E, '' + j, X);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case R:
            return (E = E.get(j.key === null ? b : j.key) || null), S(k, E, j, X);
          case J:
            return (E = E.get(j.key === null ? b : j.key) || null), N(k, E, j, X);
          case Re:
            var Z = j._init;
            return W(E, k, b, Z(j._payload), X);
        }
        if (Ut(j) || G(j)) return (E = E.get(b) || null), M(k, E, j, X, null);
        yo(k, j);
      }
      return null;
    }
    function q(E, k, b, j) {
      for (var X = null, Z = null, ee = k, ie = (k = 0), Be = null; ee !== null && ie < b.length; ie++) {
        ee.index > ie ? ((Be = ee), (ee = null)) : (Be = ee.sibling);
        var pe = D(E, ee, b[ie], j);
        if (pe === null) {
          ee === null && (ee = Be);
          break;
        }
        e && ee && pe.alternate === null && t(E, ee),
          (k = f(pe, k, ie)),
          Z === null ? (X = pe) : (Z.sibling = pe),
          (Z = pe),
          (ee = Be);
      }
      if (ie === b.length) return r(E, ee), Oe && Rn(E, ie), X;
      if (ee === null) {
        for (; ie < b.length; ie++)
          (ee = F(E, b[ie], j)),
            ee !== null && ((k = f(ee, k, ie)), Z === null ? (X = ee) : (Z.sibling = ee), (Z = ee));
        return Oe && Rn(E, ie), X;
      }
      for (ee = a(E, ee); ie < b.length; ie++)
        (Be = W(ee, E, ie, b[ie], j)),
          Be !== null &&
            (e && Be.alternate !== null && ee.delete(Be.key === null ? ie : Be.key),
            (k = f(Be, k, ie)),
            Z === null ? (X = Be) : (Z.sibling = Be),
            (Z = Be));
      return (
        e &&
          ee.forEach(function (yn) {
            return t(E, yn);
          }),
        Oe && Rn(E, ie),
        X
      );
    }
    function K(E, k, b, j) {
      var X = G(b);
      if (typeof X != 'function') throw Error(o(150));
      if (((b = X.call(b)), b == null)) throw Error(o(151));
      for (
        var Z = (X = null), ee = k, ie = (k = 0), Be = null, pe = b.next();
        ee !== null && !pe.done;
        ie++, pe = b.next()
      ) {
        ee.index > ie ? ((Be = ee), (ee = null)) : (Be = ee.sibling);
        var yn = D(E, ee, pe.value, j);
        if (yn === null) {
          ee === null && (ee = Be);
          break;
        }
        e && ee && yn.alternate === null && t(E, ee),
          (k = f(yn, k, ie)),
          Z === null ? (X = yn) : (Z.sibling = yn),
          (Z = yn),
          (ee = Be);
      }
      if (pe.done) return r(E, ee), Oe && Rn(E, ie), X;
      if (ee === null) {
        for (; !pe.done; ie++, pe = b.next())
          (pe = F(E, pe.value, j)),
            pe !== null && ((k = f(pe, k, ie)), Z === null ? (X = pe) : (Z.sibling = pe), (Z = pe));
        return Oe && Rn(E, ie), X;
      }
      for (ee = a(E, ee); !pe.done; ie++, pe = b.next())
        (pe = W(ee, E, ie, pe.value, j)),
          pe !== null &&
            (e && pe.alternate !== null && ee.delete(pe.key === null ? ie : pe.key),
            (k = f(pe, k, ie)),
            Z === null ? (X = pe) : (Z.sibling = pe),
            (Z = pe));
      return (
        e &&
          ee.forEach(function (Vg) {
            return t(E, Vg);
          }),
        Oe && Rn(E, ie),
        X
      );
    }
    function De(E, k, b, j) {
      if (
        (typeof b == 'object' && b !== null && b.type === te && b.key === null && (b = b.props.children),
        typeof b == 'object' && b !== null)
      ) {
        switch (b.$$typeof) {
          case R:
            e: {
              for (var X = b.key, Z = k; Z !== null; ) {
                if (Z.key === X) {
                  if (((X = b.type), X === te)) {
                    if (Z.tag === 7) {
                      r(E, Z.sibling), (k = u(Z, b.props.children)), (k.return = E), (E = k);
                      break e;
                    }
                  } else if (
                    Z.elementType === X ||
                    (typeof X == 'object' && X !== null && X.$$typeof === Re && Vc(X) === Z.type)
                  ) {
                    r(E, Z.sibling), (k = u(Z, b.props)), (k.ref = ii(E, Z, b)), (k.return = E), (E = k);
                    break e;
                  }
                  r(E, Z);
                  break;
                } else t(E, Z);
                Z = Z.sibling;
              }
              b.type === te
                ? ((k = $n(b.props.children, E.mode, j, b.key)), (k.return = E), (E = k))
                : ((j = Vo(b.type, b.key, b.props, null, E.mode, j)), (j.ref = ii(E, k, b)), (j.return = E), (E = j));
            }
            return m(E);
          case J:
            e: {
              for (Z = b.key; k !== null; ) {
                if (k.key === Z)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === b.containerInfo &&
                    k.stateNode.implementation === b.implementation
                  ) {
                    r(E, k.sibling), (k = u(k, b.children || [])), (k.return = E), (E = k);
                    break e;
                  } else {
                    r(E, k);
                    break;
                  }
                else t(E, k);
                k = k.sibling;
              }
              (k = sl(b, E.mode, j)), (k.return = E), (E = k);
            }
            return m(E);
          case Re:
            return (Z = b._init), De(E, k, Z(b._payload), j);
        }
        if (Ut(b)) return q(E, k, b, j);
        if (G(b)) return K(E, k, b, j);
        yo(E, b);
      }
      return (typeof b == 'string' && b !== '') || typeof b == 'number'
        ? ((b = '' + b),
          k !== null && k.tag === 6
            ? (r(E, k.sibling), (k = u(k, b)), (k.return = E), (E = k))
            : (r(E, k), (k = al(b, E.mode, j)), (k.return = E), (E = k)),
          m(E))
        : r(E, k);
    }
    return De;
  }
  var mr = Bc(!0),
    Wc = Bc(!1),
    wo = sn(null),
    xo = null,
    hr = null,
    gs = null;
  function vs() {
    gs = hr = xo = null;
  }
  function ys(e) {
    var t = wo.current;
    Pe(wo), (e._currentValue = t);
  }
  function ws(e, t, r) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function gr(e, t) {
    (xo = e),
      (gs = hr = null),
      (e = e.dependencies),
      e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (it = !0), (e.firstContext = null));
  }
  function yt(e) {
    var t = e._currentValue;
    if (gs !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
        if (xo === null) throw Error(o(308));
        (hr = e), (xo.dependencies = { lanes: 0, firstContext: e });
      } else hr = hr.next = e;
    return t;
  }
  var In = null;
  function xs(e) {
    In === null ? (In = [e]) : In.push(e);
  }
  function Hc(e, t, r, a) {
    var u = t.interleaved;
    return u === null ? ((r.next = r), xs(t)) : ((r.next = u.next), (u.next = r)), (t.interleaved = r), Yt(e, a);
  }
  function Yt(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t), (r = e.alternate), r !== null && (r.childLanes |= t), (r = e), (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var cn = !1;
  function Ss(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Yc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function qt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fn(e, t, r) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (fe & 2) !== 0)) {
      var u = a.pending;
      return u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)), (a.pending = t), Yt(e, r);
    }
    return (
      (u = a.interleaved),
      u === null ? ((t.next = t), xs(a)) : ((t.next = u.next), (u.next = t)),
      (a.interleaved = t),
      Yt(e, r)
    );
  }
  function So(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var a = t.lanes;
      (a &= e.pendingLanes), (r |= a), (t.lanes = r), Aa(e, r);
    }
  }
  function qc(e, t) {
    var r = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), r === a)) {
      var u = null,
        f = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var m = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          f === null ? (u = f = m) : (f = f.next = m), (r = r.next);
        } while (r !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      (r = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: f, shared: a.shared, effects: a.effects }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate), e === null ? (r.firstBaseUpdate = t) : (e.next = t), (r.lastBaseUpdate = t);
  }
  function ko(e, t, r, a) {
    var u = e.updateQueue;
    cn = !1;
    var f = u.firstBaseUpdate,
      m = u.lastBaseUpdate,
      y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var S = y,
        N = S.next;
      (S.next = null), m === null ? (f = N) : (m.next = N), (m = S);
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (y = M.lastBaseUpdate),
        y !== m && (y === null ? (M.firstBaseUpdate = N) : (y.next = N), (M.lastBaseUpdate = S)));
    }
    if (f !== null) {
      var F = u.baseState;
      (m = 0), (M = N = S = null), (y = f);
      do {
        var D = y.lane,
          W = y.eventTime;
        if ((a & D) === D) {
          M !== null &&
            (M = M.next = { eventTime: W, lane: 0, tag: y.tag, payload: y.payload, callback: y.callback, next: null });
          e: {
            var q = e,
              K = y;
            switch (((D = t), (W = r), K.tag)) {
              case 1:
                if (((q = K.payload), typeof q == 'function')) {
                  F = q.call(W, F, D);
                  break e;
                }
                F = q;
                break e;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (((q = K.payload), (D = typeof q == 'function' ? q.call(W, F, D) : q), D == null)) break e;
                F = B({}, F, D);
                break e;
              case 2:
                cn = !0;
            }
          }
          y.callback !== null &&
            y.lane !== 0 &&
            ((e.flags |= 64), (D = u.effects), D === null ? (u.effects = [y]) : D.push(y));
        } else
          (W = { eventTime: W, lane: D, tag: y.tag, payload: y.payload, callback: y.callback, next: null }),
            M === null ? ((N = M = W), (S = F)) : (M = M.next = W),
            (m |= D);
        if (((y = y.next), y === null)) {
          if (((y = u.shared.pending), y === null)) break;
          (D = y), (y = D.next), (D.next = null), (u.lastBaseUpdate = D), (u.shared.pending = null);
        }
      } while (!0);
      if (
        (M === null && (S = F),
        (u.baseState = S),
        (u.firstBaseUpdate = N),
        (u.lastBaseUpdate = M),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (m |= u.lane), (u = u.next);
        while (u !== t);
      } else f === null && (u.shared.lanes = 0);
      (Mn |= m), (e.lanes = m), (e.memoizedState = F);
    }
  }
  function Kc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var a = e[t],
          u = a.callback;
        if (u !== null) {
          if (((a.callback = null), (a = r), typeof u != 'function')) throw Error(o(191, u));
          u.call(a);
        }
      }
  }
  var oi = {},
    Rt = sn(oi),
    ai = sn(oi),
    si = sn(oi);
  function Dn(e) {
    if (e === oi) throw Error(o(174));
    return e;
  }
  function ks(e, t) {
    switch ((Ce(si, t), Ce(ai, e), Ce(Rt, oi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ca(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ca(t, e));
    }
    Pe(Rt), Ce(Rt, t);
  }
  function vr() {
    Pe(Rt), Pe(ai), Pe(si);
  }
  function Qc(e) {
    Dn(si.current);
    var t = Dn(Rt.current),
      r = Ca(t, e.type);
    t !== r && (Ce(ai, e), Ce(Rt, r));
  }
  function Cs(e) {
    ai.current === e && (Pe(Rt), Pe(ai));
  }
  var Te = sn(0);
  function Co(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Es = [];
  function Ps() {
    for (var e = 0; e < Es.length; e++) Es[e]._workInProgressVersionPrimary = null;
    Es.length = 0;
  }
  var Eo = U.ReactCurrentDispatcher,
    bs = U.ReactCurrentBatchConfig,
    An = 0,
    Le = null,
    Fe = null,
    Ue = null,
    Po = !1,
    li = !1,
    ui = 0,
    cg = 0;
  function Ke() {
    throw Error(o(321));
  }
  function Os(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Ct(e[r], t[r])) return !1;
    return !0;
  }
  function Ns(e, t, r, a, u, f) {
    if (
      ((An = f),
      (Le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Eo.current = e === null || e.memoizedState === null ? mg : hg),
      (e = r(a, u)),
      li)
    ) {
      f = 0;
      do {
        if (((li = !1), (ui = 0), 25 <= f)) throw Error(o(301));
        (f += 1), (Ue = Fe = null), (t.updateQueue = null), (Eo.current = gg), (e = r(a, u));
      } while (li);
    }
    if (((Eo.current = No), (t = Fe !== null && Fe.next !== null), (An = 0), (Ue = Fe = Le = null), (Po = !1), t))
      throw Error(o(300));
    return e;
  }
  function Ts() {
    var e = ui !== 0;
    return (ui = 0), e;
  }
  function It() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? (Le.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
  }
  function wt() {
    if (Fe === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = Ue === null ? Le.memoizedState : Ue.next;
    if (t !== null) (Ue = t), (Fe = e);
    else {
      if (e === null) throw Error(o(310));
      (Fe = e),
        (e = {
          memoizedState: Fe.memoizedState,
          baseState: Fe.baseState,
          baseQueue: Fe.baseQueue,
          queue: Fe.queue,
          next: null,
        }),
        Ue === null ? (Le.memoizedState = Ue = e) : (Ue = Ue.next = e);
    }
    return Ue;
  }
  function ci(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ls(e) {
    var t = wt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var a = Fe,
      u = a.baseQueue,
      f = r.pending;
    if (f !== null) {
      if (u !== null) {
        var m = u.next;
        (u.next = f.next), (f.next = m);
      }
      (a.baseQueue = u = f), (r.pending = null);
    }
    if (u !== null) {
      (f = u.next), (a = a.baseState);
      var y = (m = null),
        S = null,
        N = f;
      do {
        var M = N.lane;
        if ((An & M) === M)
          S !== null &&
            (S = S.next =
              { lane: 0, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null }),
            (a = N.hasEagerState ? N.eagerState : e(a, N.action));
        else {
          var F = { lane: M, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null };
          S === null ? ((y = S = F), (m = a)) : (S = S.next = F), (Le.lanes |= M), (Mn |= M);
        }
        N = N.next;
      } while (N !== null && N !== f);
      S === null ? (m = a) : (S.next = y),
        Ct(a, t.memoizedState) || (it = !0),
        (t.memoizedState = a),
        (t.baseState = m),
        (t.baseQueue = S),
        (r.lastRenderedState = a);
    }
    if (((e = r.interleaved), e !== null)) {
      u = e;
      do (f = u.lane), (Le.lanes |= f), (Mn |= f), (u = u.next);
      while (u !== e);
    } else u === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function _s(e) {
    var t = wt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var a = r.dispatch,
      u = r.pending,
      f = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var m = (u = u.next);
      do (f = e(f, m.action)), (m = m.next);
      while (m !== u);
      Ct(f, t.memoizedState) || (it = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f);
    }
    return [f, a];
  }
  function Gc() {}
  function Xc(e, t) {
    var r = Le,
      a = wt(),
      u = t(),
      f = !Ct(a.memoizedState, u);
    if (
      (f && ((a.memoizedState = u), (it = !0)),
      (a = a.queue),
      Rs(ef.bind(null, r, a, e), [e]),
      a.getSnapshot !== t || f || (Ue !== null && Ue.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), fi(9, Zc.bind(null, r, a, u, t), void 0, null), Ve === null)) throw Error(o(349));
      (An & 30) !== 0 || Jc(r, t, u);
    }
    return u;
  }
  function Jc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Le.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Zc(e, t, r, a) {
    (t.value = r), (t.getSnapshot = a), tf(t) && nf(e);
  }
  function ef(e, t, r) {
    return r(function () {
      tf(t) && nf(e);
    });
  }
  function tf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Ct(e, r);
    } catch {
      return !0;
    }
  }
  function nf(e) {
    var t = Yt(e, 1);
    t !== null && Nt(t, e, 1, -1);
  }
  function rf(e) {
    var t = It();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ci,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = pg.bind(null, Le, e)),
      [t.memoizedState, e]
    );
  }
  function fi(e, t, r, a) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: a, next: null }),
      (t = Le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Le.updateQueue = t), (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null ? (t.lastEffect = e.next = e) : ((a = r.next), (r.next = e), (e.next = a), (t.lastEffect = e))),
      e
    );
  }
  function of() {
    return wt().memoizedState;
  }
  function bo(e, t, r, a) {
    var u = It();
    (Le.flags |= e), (u.memoizedState = fi(1 | t, r, void 0, a === void 0 ? null : a));
  }
  function Oo(e, t, r, a) {
    var u = wt();
    a = a === void 0 ? null : a;
    var f = void 0;
    if (Fe !== null) {
      var m = Fe.memoizedState;
      if (((f = m.destroy), a !== null && Os(a, m.deps))) {
        u.memoizedState = fi(t, r, f, a);
        return;
      }
    }
    (Le.flags |= e), (u.memoizedState = fi(1 | t, r, f, a));
  }
  function af(e, t) {
    return bo(8390656, 8, e, t);
  }
  function Rs(e, t) {
    return Oo(2048, 8, e, t);
  }
  function sf(e, t) {
    return Oo(4, 2, e, t);
  }
  function lf(e, t) {
    return Oo(4, 4, e, t);
  }
  function uf(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function cf(e, t, r) {
    return (r = r != null ? r.concat([e]) : null), Oo(4, 4, uf.bind(null, t, e), r);
  }
  function Is() {}
  function ff(e, t) {
    var r = wt();
    t = t === void 0 ? null : t;
    var a = r.memoizedState;
    return a !== null && t !== null && Os(t, a[1]) ? a[0] : ((r.memoizedState = [e, t]), e);
  }
  function df(e, t) {
    var r = wt();
    t = t === void 0 ? null : t;
    var a = r.memoizedState;
    return a !== null && t !== null && Os(t, a[1]) ? a[0] : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function pf(e, t, r) {
    return (An & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = r))
      : (Ct(r, t) || ((r = Vu()), (Le.lanes |= r), (Mn |= r), (e.baseState = !0)), t);
  }
  function fg(e, t) {
    var r = ge;
    (ge = r !== 0 && 4 > r ? r : 4), e(!0);
    var a = bs.transition;
    bs.transition = {};
    try {
      e(!1), t();
    } finally {
      (ge = r), (bs.transition = a);
    }
  }
  function mf() {
    return wt().memoizedState;
  }
  function dg(e, t, r) {
    var a = hn(e);
    if (((r = { lane: a, action: r, hasEagerState: !1, eagerState: null, next: null }), hf(e))) gf(t, r);
    else if (((r = Hc(e, t, r, a)), r !== null)) {
      var u = tt();
      Nt(r, e, a, u), vf(r, t, a);
    }
  }
  function pg(e, t, r) {
    var a = hn(e),
      u = { lane: a, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (hf(e)) gf(t, u);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && ((f = t.lastRenderedReducer), f !== null))
        try {
          var m = t.lastRenderedState,
            y = f(m, r);
          if (((u.hasEagerState = !0), (u.eagerState = y), Ct(y, m))) {
            var S = t.interleaved;
            S === null ? ((u.next = u), xs(t)) : ((u.next = S.next), (S.next = u)), (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (r = Hc(e, t, u, a)), r !== null && ((u = tt()), Nt(r, e, a, u), vf(r, t, a));
    }
  }
  function hf(e) {
    var t = e.alternate;
    return e === Le || (t !== null && t === Le);
  }
  function gf(e, t) {
    li = Po = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
  }
  function vf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (r |= a), (t.lanes = r), Aa(e, r);
    }
  }
  var No = {
      readContext: yt,
      useCallback: Ke,
      useContext: Ke,
      useEffect: Ke,
      useImperativeHandle: Ke,
      useInsertionEffect: Ke,
      useLayoutEffect: Ke,
      useMemo: Ke,
      useReducer: Ke,
      useRef: Ke,
      useState: Ke,
      useDebugValue: Ke,
      useDeferredValue: Ke,
      useTransition: Ke,
      useMutableSource: Ke,
      useSyncExternalStore: Ke,
      useId: Ke,
      unstable_isNewReconciler: !1,
    },
    mg = {
      readContext: yt,
      useCallback: function (e, t) {
        return (It().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: yt,
      useEffect: af,
      useImperativeHandle: function (e, t, r) {
        return (r = r != null ? r.concat([e]) : null), bo(4194308, 4, uf.bind(null, t, e), r);
      },
      useLayoutEffect: function (e, t) {
        return bo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return bo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = It();
        return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, r) {
        var a = It();
        return (
          (t = r !== void 0 ? r(t) : t),
          (a.memoizedState = a.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (a.queue = e),
          (e = e.dispatch = dg.bind(null, Le, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = It();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: rf,
      useDebugValue: Is,
      useDeferredValue: function (e) {
        return (It().memoizedState = e);
      },
      useTransition: function () {
        var e = rf(!1),
          t = e[0];
        return (e = fg.bind(null, e[1])), (It().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var a = Le,
          u = It();
        if (Oe) {
          if (r === void 0) throw Error(o(407));
          r = r();
        } else {
          if (((r = t()), Ve === null)) throw Error(o(349));
          (An & 30) !== 0 || Jc(a, t, r);
        }
        u.memoizedState = r;
        var f = { value: r, getSnapshot: t };
        return (
          (u.queue = f),
          af(ef.bind(null, a, f, e), [e]),
          (a.flags |= 2048),
          fi(9, Zc.bind(null, a, f, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = It(),
          t = Ve.identifierPrefix;
        if (Oe) {
          var r = Ht,
            a = Wt;
          (r = (a & ~(1 << (32 - kt(a) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = ui++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':');
        } else (r = cg++), (t = ':' + t + 'r' + r.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    hg = {
      readContext: yt,
      useCallback: ff,
      useContext: yt,
      useEffect: Rs,
      useImperativeHandle: cf,
      useInsertionEffect: sf,
      useLayoutEffect: lf,
      useMemo: df,
      useReducer: Ls,
      useRef: of,
      useState: function () {
        return Ls(ci);
      },
      useDebugValue: Is,
      useDeferredValue: function (e) {
        var t = wt();
        return pf(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ls(ci)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: Gc,
      useSyncExternalStore: Xc,
      useId: mf,
      unstable_isNewReconciler: !1,
    },
    gg = {
      readContext: yt,
      useCallback: ff,
      useContext: yt,
      useEffect: Rs,
      useImperativeHandle: cf,
      useInsertionEffect: sf,
      useLayoutEffect: lf,
      useMemo: df,
      useReducer: _s,
      useRef: of,
      useState: function () {
        return _s(ci);
      },
      useDebugValue: Is,
      useDeferredValue: function (e) {
        var t = wt();
        return Fe === null ? (t.memoizedState = e) : pf(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = _s(ci)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: Gc,
      useSyncExternalStore: Xc,
      useId: mf,
      unstable_isNewReconciler: !1,
    };
  function Pt(e, t) {
    if (e && e.defaultProps) {
      (t = B({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Ds(e, t, r, a) {
    (t = e.memoizedState),
      (r = r(a, t)),
      (r = r == null ? t : B({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var To = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Nn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var a = tt(),
        u = hn(e),
        f = qt(a, u);
      (f.payload = t), r != null && (f.callback = r), (t = fn(e, f, u)), t !== null && (Nt(t, e, u, a), So(t, e, u));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var a = tt(),
        u = hn(e),
        f = qt(a, u);
      (f.tag = 1),
        (f.payload = t),
        r != null && (f.callback = r),
        (t = fn(e, f, u)),
        t !== null && (Nt(t, e, u, a), So(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = tt(),
        a = hn(e),
        u = qt(r, a);
      (u.tag = 2), t != null && (u.callback = t), (t = fn(e, u, a)), t !== null && (Nt(t, e, a, r), So(t, e, a));
    },
  };
  function yf(e, t, r, a, u, f, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, f, m)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Xr(r, a) || !Xr(u, f)
        : !0
    );
  }
  function wf(e, t, r) {
    var a = !1,
      u = ln,
      f = t.contextType;
    return (
      typeof f == 'object' && f !== null
        ? (f = yt(f))
        : ((u = rt(t) ? Ln : qe.current), (a = t.contextTypes), (f = (a = a != null) ? cr(e, u) : ln)),
      (t = new t(r, f)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = To),
      (e.stateNode = t),
      (t._reactInternals = e),
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function xf(e, t, r, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(r, a),
      t.state !== e && To.enqueueReplaceState(t, t.state, null);
  }
  function As(e, t, r, a) {
    var u = e.stateNode;
    (u.props = r), (u.state = e.memoizedState), (u.refs = {}), Ss(e);
    var f = t.contextType;
    typeof f == 'object' && f !== null ? (u.context = yt(f)) : ((f = rt(t) ? Ln : qe.current), (u.context = cr(e, f))),
      (u.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == 'function' && (Ds(e, t, f, r), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function' ||
        (typeof u.UNSAFE_componentWillMount != 'function' && typeof u.componentWillMount != 'function') ||
        ((t = u.state),
        typeof u.componentWillMount == 'function' && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
        t !== u.state && To.enqueueReplaceState(u, u.state, null),
        ko(e, r, u, a),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function yr(e, t) {
    try {
      var r = '',
        a = t;
      do (r += ue(a)), (a = a.return);
      while (a);
      var u = r;
    } catch (f) {
      u =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Ms(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Fs(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var vg = typeof WeakMap == 'function' ? WeakMap : Map;
  function Sf(e, t, r) {
    (r = qt(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var a = t.value;
    return (
      (r.callback = function () {
        Mo || ((Mo = !0), (Js = a)), Fs(e, t);
      }),
      r
    );
  }
  function kf(e, t, r) {
    (r = qt(-1, r)), (r.tag = 3);
    var a = e.type.getDerivedStateFromError;
    if (typeof a == 'function') {
      var u = t.value;
      (r.payload = function () {
        return a(u);
      }),
        (r.callback = function () {
          Fs(e, t);
        });
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == 'function' &&
        (r.callback = function () {
          Fs(e, t), typeof a != 'function' && (pn === null ? (pn = new Set([this])) : pn.add(this));
          var m = t.stack;
          this.componentDidCatch(t.value, { componentStack: m !== null ? m : '' });
        }),
      r
    );
  }
  function Cf(e, t, r) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new vg();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(r) || (u.add(r), (e = _g.bind(null, e, t, r)), t.then(e, e));
  }
  function Ef(e) {
    do {
      var t;
      if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Pf(e, t, r, a, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 && (r.alternate === null ? (r.tag = 17) : ((t = qt(-1, 1)), (t.tag = 2), fn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var yg = U.ReactCurrentOwner,
    it = !1;
  function et(e, t, r, a) {
    t.child = e === null ? Wc(t, null, r, a) : mr(t, e.child, r, a);
  }
  function bf(e, t, r, a, u) {
    r = r.render;
    var f = t.ref;
    return (
      gr(t, u),
      (a = Ns(e, t, r, a, f, u)),
      (r = Ts()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), Kt(e, t, u))
        : (Oe && r && fs(t), (t.flags |= 1), et(e, t, a, u), t.child)
    );
  }
  function Of(e, t, r, a, u) {
    if (e === null) {
      var f = r.type;
      return typeof f == 'function' &&
        !ol(f) &&
        f.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Nf(e, t, f, a, u))
        : ((e = Vo(r.type, null, a, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), (e.lanes & u) === 0)) {
      var m = f.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Xr), r(m, a) && e.ref === t.ref)) return Kt(e, t, u);
    }
    return (t.flags |= 1), (e = vn(f, a)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Nf(e, t, r, a, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Xr(f, a) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = a = f), (e.lanes & u) !== 0)) (e.flags & 131072) !== 0 && (it = !0);
        else return (t.lanes = e.lanes), Kt(e, t, u);
    }
    return zs(e, t, r, a, u);
  }
  function Tf(e, t, r) {
    var a = t.pendingProps,
      u = a.children,
      f = e !== null ? e.memoizedState : null;
    if (a.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Ce(xr, dt), (dt |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ce(xr, dt),
            (dt |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (a = f !== null ? f.baseLanes : r),
          Ce(xr, dt),
          (dt |= a);
      }
    else f !== null ? ((a = f.baseLanes | r), (t.memoizedState = null)) : (a = r), Ce(xr, dt), (dt |= a);
    return et(e, t, u, r), t.child;
  }
  function Lf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) && ((t.flags |= 512), (t.flags |= 2097152));
  }
  function zs(e, t, r, a, u) {
    var f = rt(r) ? Ln : qe.current;
    return (
      (f = cr(t, f)),
      gr(t, u),
      (r = Ns(e, t, r, a, f, u)),
      (a = Ts()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), Kt(e, t, u))
        : (Oe && a && fs(t), (t.flags |= 1), et(e, t, r, u), t.child)
    );
  }
  function _f(e, t, r, a, u) {
    if (rt(r)) {
      var f = !0;
      po(t);
    } else f = !1;
    if ((gr(t, u), t.stateNode === null)) _o(e, t), wf(t, r, a), As(t, r, a, u), (a = !0);
    else if (e === null) {
      var m = t.stateNode,
        y = t.memoizedProps;
      m.props = y;
      var S = m.context,
        N = r.contextType;
      typeof N == 'object' && N !== null ? (N = yt(N)) : ((N = rt(r) ? Ln : qe.current), (N = cr(t, N)));
      var M = r.getDerivedStateFromProps,
        F = typeof M == 'function' || typeof m.getSnapshotBeforeUpdate == 'function';
      F ||
        (typeof m.UNSAFE_componentWillReceiveProps != 'function' && typeof m.componentWillReceiveProps != 'function') ||
        ((y !== a || S !== N) && xf(t, m, a, N)),
        (cn = !1);
      var D = t.memoizedState;
      (m.state = D),
        ko(t, a, m, u),
        (S = t.memoizedState),
        y !== a || D !== S || nt.current || cn
          ? (typeof M == 'function' && (Ds(t, r, M, a), (S = t.memoizedState)),
            (y = cn || yf(t, r, y, a, D, S, N))
              ? (F ||
                  (typeof m.UNSAFE_componentWillMount != 'function' && typeof m.componentWillMount != 'function') ||
                  (typeof m.componentWillMount == 'function' && m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == 'function' && m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof m.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = S)),
            (m.props = a),
            (m.state = S),
            (m.context = N),
            (a = y))
          : (typeof m.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1));
    } else {
      (m = t.stateNode),
        Yc(e, t),
        (y = t.memoizedProps),
        (N = t.type === t.elementType ? y : Pt(t.type, y)),
        (m.props = N),
        (F = t.pendingProps),
        (D = m.context),
        (S = r.contextType),
        typeof S == 'object' && S !== null ? (S = yt(S)) : ((S = rt(r) ? Ln : qe.current), (S = cr(t, S)));
      var W = r.getDerivedStateFromProps;
      (M = typeof W == 'function' || typeof m.getSnapshotBeforeUpdate == 'function') ||
        (typeof m.UNSAFE_componentWillReceiveProps != 'function' && typeof m.componentWillReceiveProps != 'function') ||
        ((y !== F || D !== S) && xf(t, m, a, S)),
        (cn = !1),
        (D = t.memoizedState),
        (m.state = D),
        ko(t, a, m, u);
      var q = t.memoizedState;
      y !== F || D !== q || nt.current || cn
        ? (typeof W == 'function' && (Ds(t, r, W, a), (q = t.memoizedState)),
          (N = cn || yf(t, r, N, a, D, q, S) || !1)
            ? (M ||
                (typeof m.UNSAFE_componentWillUpdate != 'function' && typeof m.componentWillUpdate != 'function') ||
                (typeof m.componentWillUpdate == 'function' && m.componentWillUpdate(a, q, S),
                typeof m.UNSAFE_componentWillUpdate == 'function' && m.UNSAFE_componentWillUpdate(a, q, S)),
              typeof m.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof m.componentDidUpdate != 'function' ||
                (y === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != 'function' ||
                (y === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = q)),
          (m.props = a),
          (m.state = q),
          (m.context = S),
          (a = N))
        : (typeof m.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return js(e, t, r, a, f, u);
  }
  function js(e, t, r, a, u, f) {
    Lf(e, t);
    var m = (t.flags & 128) !== 0;
    if (!a && !m) return u && Ac(t, r, !1), Kt(e, t, f);
    (a = t.stateNode), (yg.current = t);
    var y = m && typeof r.getDerivedStateFromError != 'function' ? null : a.render();
    return (
      (t.flags |= 1),
      e !== null && m ? ((t.child = mr(t, e.child, null, f)), (t.child = mr(t, null, y, f))) : et(e, t, y, f),
      (t.memoizedState = a.state),
      u && Ac(t, r, !0),
      t.child
    );
  }
  function Rf(e) {
    var t = e.stateNode;
    t.pendingContext ? Ic(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ic(e, t.context, !1),
      ks(e, t.containerInfo);
  }
  function If(e, t, r, a, u) {
    return pr(), hs(u), (t.flags |= 256), et(e, t, r, a), t.child;
  }
  var $s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Us(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Df(e, t, r) {
    var a = t.pendingProps,
      u = Te.current,
      f = !1,
      m = (t.flags & 128) !== 0,
      y;
    if (
      ((y = m) || (y = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      y ? ((f = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (u |= 1),
      Ce(Te, u & 1),
      e === null)
    )
      return (
        ms(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0 ? (t.lanes = 1) : e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824), null)
          : ((m = a.children),
            (e = a.fallback),
            f
              ? ((a = t.mode),
                (f = t.child),
                (m = { mode: 'hidden', children: m }),
                (a & 1) === 0 && f !== null ? ((f.childLanes = 0), (f.pendingProps = m)) : (f = Bo(m, a, 0, null)),
                (e = $n(e, a, r, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = Us(r)),
                (t.memoizedState = $s),
                e)
              : Vs(t, m))
      );
    if (((u = e.memoizedState), u !== null && ((y = u.dehydrated), y !== null))) return wg(e, t, m, a, y, u, r);
    if (f) {
      (f = a.fallback), (m = t.mode), (u = e.child), (y = u.sibling);
      var S = { mode: 'hidden', children: a.children };
      return (
        (m & 1) === 0 && t.child !== u
          ? ((a = t.child), (a.childLanes = 0), (a.pendingProps = S), (t.deletions = null))
          : ((a = vn(u, S)), (a.subtreeFlags = u.subtreeFlags & 14680064)),
        y !== null ? (f = vn(y, f)) : ((f = $n(f, m, r, null)), (f.flags |= 2)),
        (f.return = t),
        (a.return = t),
        (a.sibling = f),
        (t.child = a),
        (a = f),
        (f = t.child),
        (m = e.child.memoizedState),
        (m = m === null ? Us(r) : { baseLanes: m.baseLanes | r, cachePool: null, transitions: m.transitions }),
        (f.memoizedState = m),
        (f.childLanes = e.childLanes & ~r),
        (t.memoizedState = $s),
        a
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (a = vn(f, { mode: 'visible', children: a.children })),
      (t.mode & 1) === 0 && (a.lanes = r),
      (a.return = t),
      (a.sibling = null),
      e !== null && ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = a),
      (t.memoizedState = null),
      a
    );
  }
  function Vs(e, t) {
    return (t = Bo({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
  }
  function Lo(e, t, r, a) {
    return (
      a !== null && hs(a),
      mr(t, e.child, null, r),
      (e = Vs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function wg(e, t, r, a, u, f, m) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (a = Ms(Error(o(422)))), Lo(e, t, m, a))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((f = a.fallback),
          (u = t.mode),
          (a = Bo({ mode: 'visible', children: a.children }, u, 0, null)),
          (f = $n(f, u, m, null)),
          (f.flags |= 2),
          (a.return = t),
          (f.return = t),
          (a.sibling = f),
          (t.child = a),
          (t.mode & 1) !== 0 && mr(t, e.child, null, m),
          (t.child.memoizedState = Us(m)),
          (t.memoizedState = $s),
          f);
    if ((t.mode & 1) === 0) return Lo(e, t, m, null);
    if (u.data === '$!') {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var y = a.dgst;
      return (a = y), (f = Error(o(419))), (a = Ms(f, a, void 0)), Lo(e, t, m, a);
    }
    if (((y = (m & e.childLanes) !== 0), it || y)) {
      if (((a = Ve), a !== null)) {
        switch (m & -m) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = (u & (a.suspendedLanes | m)) !== 0 ? 0 : u),
          u !== 0 && u !== f.retryLane && ((f.retryLane = u), Yt(e, u), Nt(a, e, u, -1));
      }
      return il(), (a = Ms(Error(o(421)))), Lo(e, t, m, a);
    }
    return u.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Rg.bind(null, e)), (u._reactRetry = t), null)
      : ((e = f.treeContext),
        (ft = an(u.nextSibling)),
        (ct = t),
        (Oe = !0),
        (Et = null),
        e !== null && ((gt[vt++] = Wt), (gt[vt++] = Ht), (gt[vt++] = _n), (Wt = e.id), (Ht = e.overflow), (_n = t)),
        (t = Vs(t, a.children)),
        (t.flags |= 4096),
        t);
  }
  function Af(e, t, r) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), ws(e.return, t, r);
  }
  function Bs(e, t, r, a, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: r, tailMode: u })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = r),
        (f.tailMode = u));
  }
  function Mf(e, t, r) {
    var a = t.pendingProps,
      u = a.revealOrder,
      f = a.tail;
    if ((et(e, t, a.children, r), (a = Te.current), (a & 2) !== 0)) (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Af(e, r, t);
          else if (e.tag === 19) Af(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    if ((Ce(Te, a), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case 'forwards':
          for (r = t.child, u = null; r !== null; )
            (e = r.alternate), e !== null && Co(e) === null && (u = r), (r = r.sibling);
          (r = u),
            r === null ? ((u = t.child), (t.child = null)) : ((u = r.sibling), (r.sibling = null)),
            Bs(t, !1, u, r, f);
          break;
        case 'backwards':
          for (r = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && Co(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = r), (r = u), (u = e);
          }
          Bs(t, !0, r, null, f);
          break;
        case 'together':
          Bs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function _o(e, t) {
    (t.mode & 1) === 0 && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Kt(e, t, r) {
    if ((e !== null && (t.dependencies = e.dependencies), (Mn |= t.lanes), (r & t.childLanes) === 0)) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, r = vn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        (e = e.sibling), (r = r.sibling = vn(e, e.pendingProps)), (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function xg(e, t, r) {
    switch (t.tag) {
      case 3:
        Rf(t), pr();
        break;
      case 5:
        Qc(t);
        break;
      case 1:
        rt(t.type) && po(t);
        break;
      case 4:
        ks(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context,
          u = t.memoizedProps.value;
        Ce(wo, a._currentValue), (a._currentValue = u);
        break;
      case 13:
        if (((a = t.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (Ce(Te, Te.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? Df(e, t, r)
            : (Ce(Te, Te.current & 1), (e = Kt(e, t, r)), e !== null ? e.sibling : null);
        Ce(Te, Te.current & 1);
        break;
      case 19:
        if (((a = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (a) return Mf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ce(Te, Te.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Tf(e, t, r);
    }
    return Kt(e, t, r);
  }
  var Ff, Ws, zf, jf;
  (Ff = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Ws = function () {}),
    (zf = function (e, t, r, a) {
      var u = e.memoizedProps;
      if (u !== a) {
        (e = t.stateNode), Dn(Rt.current);
        var f = null;
        switch (r) {
          case 'input':
            (u = Rr(e, u)), (a = Rr(e, a)), (f = []);
            break;
          case 'select':
            (u = B({}, u, { value: void 0 })), (a = B({}, a, { value: void 0 })), (f = []);
            break;
          case 'textarea':
            (u = ka(e, u)), (a = ka(e, a)), (f = []);
            break;
          default:
            typeof u.onClick != 'function' && typeof a.onClick == 'function' && (e.onclick = uo);
        }
        Ea(r, a);
        var m;
        r = null;
        for (N in u)
          if (!a.hasOwnProperty(N) && u.hasOwnProperty(N) && u[N] != null)
            if (N === 'style') {
              var y = u[N];
              for (m in y) y.hasOwnProperty(m) && (r || (r = {}), (r[m] = ''));
            } else
              N !== 'dangerouslySetInnerHTML' &&
                N !== 'children' &&
                N !== 'suppressContentEditableWarning' &&
                N !== 'suppressHydrationWarning' &&
                N !== 'autoFocus' &&
                (l.hasOwnProperty(N) ? f || (f = []) : (f = f || []).push(N, null));
        for (N in a) {
          var S = a[N];
          if (((y = u != null ? u[N] : void 0), a.hasOwnProperty(N) && S !== y && (S != null || y != null)))
            if (N === 'style')
              if (y) {
                for (m in y) !y.hasOwnProperty(m) || (S && S.hasOwnProperty(m)) || (r || (r = {}), (r[m] = ''));
                for (m in S) S.hasOwnProperty(m) && y[m] !== S[m] && (r || (r = {}), (r[m] = S[m]));
              } else r || (f || (f = []), f.push(N, r)), (r = S);
            else
              N === 'dangerouslySetInnerHTML'
                ? ((S = S ? S.__html : void 0),
                  (y = y ? y.__html : void 0),
                  S != null && y !== S && (f = f || []).push(N, S))
                : N === 'children'
                ? (typeof S != 'string' && typeof S != 'number') || (f = f || []).push(N, '' + S)
                : N !== 'suppressContentEditableWarning' &&
                  N !== 'suppressHydrationWarning' &&
                  (l.hasOwnProperty(N)
                    ? (S != null && N === 'onScroll' && Ee('scroll', e), f || y === S || (f = []))
                    : (f = f || []).push(N, S));
        }
        r && (f = f || []).push('style', r);
        var N = f;
        (t.updateQueue = N) && (t.flags |= 4);
      }
    }),
    (jf = function (e, t, r, a) {
      r !== a && (t.flags |= 4);
    });
  function di(e, t) {
    if (!Oe)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var a = null; r !== null; ) r.alternate !== null && (a = r), (r = r.sibling);
          a === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (a.sibling = null);
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      a = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 14680064),
          (a |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes), (a |= u.subtreeFlags), (a |= u.flags), (u.return = e), (u = u.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = r), t;
  }
  function Sg(e, t, r) {
    var a = t.pendingProps;
    switch ((ds(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qe(t), null;
      case 1:
        return rt(t.type) && fo(), Qe(t), null;
      case 3:
        return (
          (a = t.stateNode),
          vr(),
          Pe(nt),
          Pe(qe),
          Ps(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (vo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Et !== null && (tl(Et), (Et = null)))),
          Ws(e, t),
          Qe(t),
          null
        );
      case 5:
        Cs(t);
        var u = Dn(si.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          zf(e, t, r, a, u), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return Qe(t), null;
          }
          if (((e = Dn(Rt.current)), vo(t))) {
            (a = t.stateNode), (r = t.type);
            var f = t.memoizedProps;
            switch (((a[_t] = t), (a[ni] = f), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                Ee('cancel', a), Ee('close', a);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ee('load', a);
                break;
              case 'video':
              case 'audio':
                for (u = 0; u < Zr.length; u++) Ee(Zr[u], a);
                break;
              case 'source':
                Ee('error', a);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ee('error', a), Ee('load', a);
                break;
              case 'details':
                Ee('toggle', a);
                break;
              case 'input':
                zi(a, f), Ee('invalid', a);
                break;
              case 'select':
                (a._wrapperState = { wasMultiple: !!f.multiple }), Ee('invalid', a);
                break;
              case 'textarea':
                Su(a, f), Ee('invalid', a);
            }
            Ea(r, f), (u = null);
            for (var m in f)
              if (f.hasOwnProperty(m)) {
                var y = f[m];
                m === 'children'
                  ? typeof y == 'string'
                    ? a.textContent !== y &&
                      (f.suppressHydrationWarning !== !0 && lo(a.textContent, y, e), (u = ['children', y]))
                    : typeof y == 'number' &&
                      a.textContent !== '' + y &&
                      (f.suppressHydrationWarning !== !0 && lo(a.textContent, y, e), (u = ['children', '' + y]))
                  : l.hasOwnProperty(m) && y != null && m === 'onScroll' && Ee('scroll', a);
              }
            switch (r) {
              case 'input':
                Gn(a), $i(a, f, !0);
                break;
              case 'textarea':
                Gn(a), Cu(a);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof f.onClick == 'function' && (a.onclick = uo);
            }
            (a = u), (t.updateQueue = a), a !== null && (t.flags |= 4);
          } else {
            (m = u.nodeType === 9 ? u : u.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Eu(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = m.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof a.is == 'string'
                  ? (e = m.createElement(r, { is: a.is }))
                  : ((e = m.createElement(r)),
                    r === 'select' && ((m = e), a.multiple ? (m.multiple = !0) : a.size && (m.size = a.size)))
                : (e = m.createElementNS(e, r)),
              (e[_t] = t),
              (e[ni] = a),
              Ff(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((m = Pa(r, a)), r)) {
                case 'dialog':
                  Ee('cancel', e), Ee('close', e), (u = a);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  Ee('load', e), (u = a);
                  break;
                case 'video':
                case 'audio':
                  for (u = 0; u < Zr.length; u++) Ee(Zr[u], e);
                  u = a;
                  break;
                case 'source':
                  Ee('error', e), (u = a);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  Ee('error', e), Ee('load', e), (u = a);
                  break;
                case 'details':
                  Ee('toggle', e), (u = a);
                  break;
                case 'input':
                  zi(e, a), (u = Rr(e, a)), Ee('invalid', e);
                  break;
                case 'option':
                  u = a;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!a.multiple }),
                    (u = B({}, a, { value: void 0 })),
                    Ee('invalid', e);
                  break;
                case 'textarea':
                  Su(e, a), (u = ka(e, a)), Ee('invalid', e);
                  break;
                default:
                  u = a;
              }
              Ea(r, u), (y = u);
              for (f in y)
                if (y.hasOwnProperty(f)) {
                  var S = y[f];
                  f === 'style'
                    ? Ou(e, S)
                    : f === 'dangerouslySetInnerHTML'
                    ? ((S = S ? S.__html : void 0), S != null && Pu(e, S))
                    : f === 'children'
                    ? typeof S == 'string'
                      ? (r !== 'textarea' || S !== '') && Dr(e, S)
                      : typeof S == 'number' && Dr(e, '' + S)
                    : f !== 'suppressContentEditableWarning' &&
                      f !== 'suppressHydrationWarning' &&
                      f !== 'autoFocus' &&
                      (l.hasOwnProperty(f)
                        ? S != null && f === 'onScroll' && Ee('scroll', e)
                        : S != null && z(e, f, S, m));
                }
              switch (r) {
                case 'input':
                  Gn(e), $i(e, a, !1);
                  break;
                case 'textarea':
                  Gn(e), Cu(e);
                  break;
                case 'option':
                  a.value != null && e.setAttribute('value', '' + me(a.value));
                  break;
                case 'select':
                  (e.multiple = !!a.multiple),
                    (f = a.value),
                    f != null
                      ? Jn(e, !!a.multiple, f, !1)
                      : a.defaultValue != null && Jn(e, !!a.multiple, a.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == 'function' && (e.onclick = uo);
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  a = !!a.autoFocus;
                  break e;
                case 'img':
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Qe(t), null;
      case 6:
        if (e && t.stateNode != null) jf(e, t, e.memoizedProps, a);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(o(166));
          if (((r = Dn(si.current)), Dn(Rt.current), vo(t))) {
            if (
              ((a = t.stateNode), (r = t.memoizedProps), (a[_t] = t), (f = a.nodeValue !== r) && ((e = ct), e !== null))
            )
              switch (e.tag) {
                case 3:
                  lo(a.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && lo(a.nodeValue, r, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else (a = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(a)), (a[_t] = t), (t.stateNode = a);
        }
        return Qe(t), null;
      case 13:
        if (
          (Pe(Te),
          (a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Oe && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Uc(), pr(), (t.flags |= 98560), (f = !1);
          else if (((f = vo(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(o(318));
              if (((f = t.memoizedState), (f = f !== null ? f.dehydrated : null), !f)) throw Error(o(317));
              f[_t] = t;
            } else pr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Qe(t), (f = !1);
          } else Et !== null && (tl(Et), (Et = null)), (f = !0);
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((a = a !== null),
            a !== (e !== null && e.memoizedState !== null) &&
              a &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 && (e === null || (Te.current & 1) !== 0 ? ze === 0 && (ze = 3) : il())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return vr(), Ws(e, t), e === null && ei(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return ys(t.type._context), Qe(t), null;
      case 17:
        return rt(t.type) && fo(), Qe(t), null;
      case 19:
        if ((Pe(Te), (f = t.memoizedState), f === null)) return Qe(t), null;
        if (((a = (t.flags & 128) !== 0), (m = f.rendering), m === null))
          if (a) di(f, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((m = Co(e)), m !== null)) {
                  for (
                    t.flags |= 128,
                      di(f, !1),
                      a = m.updateQueue,
                      a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      a = r,
                      r = t.child;
                    r !== null;

                  )
                    (f = r),
                      (e = a),
                      (f.flags &= 14680066),
                      (m = f.alternate),
                      m === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = m.childLanes),
                          (f.lanes = m.lanes),
                          (f.child = m.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = m.memoizedProps),
                          (f.memoizedState = m.memoizedState),
                          (f.updateQueue = m.updateQueue),
                          (f.type = m.type),
                          (e = m.dependencies),
                          (f.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (r = r.sibling);
                  return Ce(Te, (Te.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            f.tail !== null && Ie() > Sr && ((t.flags |= 128), (a = !0), di(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Co(m)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                di(f, !0),
                f.tail === null && f.tailMode === 'hidden' && !m.alternate && !Oe)
              )
                return Qe(t), null;
            } else
              2 * Ie() - f.renderingStartTime > Sr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (a = !0), di(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((m.sibling = t.child), (t.child = m))
            : ((r = f.last), r !== null ? (r.sibling = m) : (t.child = m), (f.last = m));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = Ie()),
            (t.sibling = null),
            (r = Te.current),
            Ce(Te, a ? (r & 1) | 2 : r & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          rl(),
          (a = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
          a && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function kg(e, t) {
    switch ((ds(t), t.tag)) {
      case 1:
        return rt(t.type) && fo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          vr(),
          Pe(nt),
          Pe(qe),
          Ps(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Cs(t), null;
      case 13:
        if ((Pe(Te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(o(340));
          pr();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return Pe(Te), null;
      case 4:
        return vr(), null;
      case 10:
        return ys(t.type._context), null;
      case 22:
      case 23:
        return rl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ro = !1,
    Ge = !1,
    Cg = typeof WeakSet == 'function' ? WeakSet : Set,
    Y = null;
  function wr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (a) {
          _e(e, t, a);
        }
      else r.current = null;
  }
  function Hs(e, t, r) {
    try {
      r();
    } catch (a) {
      _e(e, t, a);
    }
  }
  var $f = !1;
  function Eg(e, t) {
    if (((rs = Xi), (e = vc()), Qa(e))) {
      if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var a = r.getSelection && r.getSelection();
          if (a && a.rangeCount !== 0) {
            r = a.anchorNode;
            var u = a.anchorOffset,
              f = a.focusNode;
            a = a.focusOffset;
            try {
              r.nodeType, f.nodeType;
            } catch {
              r = null;
              break e;
            }
            var m = 0,
              y = -1,
              S = -1,
              N = 0,
              M = 0,
              F = e,
              D = null;
            t: for (;;) {
              for (
                var W;
                F !== r || (u !== 0 && F.nodeType !== 3) || (y = m + u),
                  F !== f || (a !== 0 && F.nodeType !== 3) || (S = m + a),
                  F.nodeType === 3 && (m += F.nodeValue.length),
                  (W = F.firstChild) !== null;

              )
                (D = F), (F = W);
              for (;;) {
                if (F === e) break t;
                if ((D === r && ++N === u && (y = m), D === f && ++M === a && (S = m), (W = F.nextSibling) !== null))
                  break;
                (F = D), (D = F.parentNode);
              }
              F = W;
            }
            r = y === -1 || S === -1 ? null : { start: y, end: S };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (is = { focusedElem: e, selectionRange: r }, Xi = !1, Y = t; Y !== null; )
      if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (Y = e);
      else
        for (; Y !== null; ) {
          t = Y;
          try {
            var q = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (q !== null) {
                    var K = q.memoizedProps,
                      De = q.memoizedState,
                      E = t.stateNode,
                      k = E.getSnapshotBeforeUpdate(t.elementType === t.type ? K : Pt(t.type, K), De);
                    E.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var b = t.stateNode.containerInfo;
                  b.nodeType === 1
                    ? (b.textContent = '')
                    : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (j) {
            _e(t, t.return, j);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Y = e);
            break;
          }
          Y = t.return;
        }
    return (q = $f), ($f = !1), q;
  }
  function pi(e, t, r) {
    var a = t.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var u = (a = a.next);
      do {
        if ((u.tag & e) === e) {
          var f = u.destroy;
          (u.destroy = void 0), f !== void 0 && Hs(t, r, f);
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function Io(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var a = r.create;
          r.destroy = a();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Ys(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Uf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Uf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode), t !== null && (delete t[_t], delete t[ni], delete t[ls], delete t[ag], delete t[sg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Vf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Vf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function qs(e, t, r) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = uo));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (qs(e, t, r), e = e.sibling; e !== null; ) qs(e, t, r), (e = e.sibling);
  }
  function Ks(e, t, r) {
    var a = e.tag;
    if (a === 5 || a === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (a !== 4 && ((e = e.child), e !== null))
      for (Ks(e, t, r), e = e.sibling; e !== null; ) Ks(e, t, r), (e = e.sibling);
  }
  var He = null,
    bt = !1;
  function dn(e, t, r) {
    for (r = r.child; r !== null; ) Wf(e, t, r), (r = r.sibling);
  }
  function Wf(e, t, r) {
    if (Lt && typeof Lt.onCommitFiberUnmount == 'function')
      try {
        Lt.onCommitFiberUnmount(Hi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        Ge || wr(r, t);
      case 6:
        var a = He,
          u = bt;
        (He = null),
          dn(e, t, r),
          (He = a),
          (bt = u),
          He !== null &&
            (bt
              ? ((e = He), (r = r.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : He.removeChild(r.stateNode));
        break;
      case 18:
        He !== null &&
          (bt
            ? ((e = He),
              (r = r.stateNode),
              e.nodeType === 8 ? ss(e.parentNode, r) : e.nodeType === 1 && ss(e, r),
              Hr(e))
            : ss(He, r.stateNode));
        break;
      case 4:
        (a = He), (u = bt), (He = r.stateNode.containerInfo), (bt = !0), dn(e, t, r), (He = a), (bt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && ((a = r.updateQueue), a !== null && ((a = a.lastEffect), a !== null))) {
          u = a = a.next;
          do {
            var f = u,
              m = f.destroy;
            (f = f.tag), m !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Hs(r, t, m), (u = u.next);
          } while (u !== a);
        }
        dn(e, t, r);
        break;
      case 1:
        if (!Ge && (wr(r, t), (a = r.stateNode), typeof a.componentWillUnmount == 'function'))
          try {
            (a.props = r.memoizedProps), (a.state = r.memoizedState), a.componentWillUnmount();
          } catch (y) {
            _e(r, t, y);
          }
        dn(e, t, r);
        break;
      case 21:
        dn(e, t, r);
        break;
      case 22:
        r.mode & 1 ? ((Ge = (a = Ge) || r.memoizedState !== null), dn(e, t, r), (Ge = a)) : dn(e, t, r);
        break;
      default:
        dn(e, t, r);
    }
  }
  function Hf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Cg()),
        t.forEach(function (a) {
          var u = Ig.bind(null, e, a);
          r.has(a) || (r.add(a), a.then(u, u));
        });
    }
  }
  function Ot(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var a = 0; a < r.length; a++) {
        var u = r[a];
        try {
          var f = e,
            m = t,
            y = m;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 5:
                (He = y.stateNode), (bt = !1);
                break e;
              case 3:
                (He = y.stateNode.containerInfo), (bt = !0);
                break e;
              case 4:
                (He = y.stateNode.containerInfo), (bt = !0);
                break e;
            }
            y = y.return;
          }
          if (He === null) throw Error(o(160));
          Wf(f, m, u), (He = null), (bt = !1);
          var S = u.alternate;
          S !== null && (S.return = null), (u.return = null);
        } catch (N) {
          _e(u, t, N);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Yf(t, e), (t = t.sibling);
  }
  function Yf(e, t) {
    var r = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ot(t, e), Dt(e), a & 4)) {
          try {
            pi(3, e, e.return), Io(3, e);
          } catch (K) {
            _e(e, e.return, K);
          }
          try {
            pi(5, e, e.return);
          } catch (K) {
            _e(e, e.return, K);
          }
        }
        break;
      case 1:
        Ot(t, e), Dt(e), a & 512 && r !== null && wr(r, r.return);
        break;
      case 5:
        if ((Ot(t, e), Dt(e), a & 512 && r !== null && wr(r, r.return), e.flags & 32)) {
          var u = e.stateNode;
          try {
            Dr(u, '');
          } catch (K) {
            _e(e, e.return, K);
          }
        }
        if (a & 4 && ((u = e.stateNode), u != null)) {
          var f = e.memoizedProps,
            m = r !== null ? r.memoizedProps : f,
            y = e.type,
            S = e.updateQueue;
          if (((e.updateQueue = null), S !== null))
            try {
              y === 'input' && f.type === 'radio' && f.name != null && ji(u, f), Pa(y, m);
              var N = Pa(y, f);
              for (m = 0; m < S.length; m += 2) {
                var M = S[m],
                  F = S[m + 1];
                M === 'style'
                  ? Ou(u, F)
                  : M === 'dangerouslySetInnerHTML'
                  ? Pu(u, F)
                  : M === 'children'
                  ? Dr(u, F)
                  : z(u, M, F, N);
              }
              switch (y) {
                case 'input':
                  Ir(u, f);
                  break;
                case 'textarea':
                  ku(u, f);
                  break;
                case 'select':
                  var D = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!f.multiple;
                  var W = f.value;
                  W != null
                    ? Jn(u, !!f.multiple, W, !1)
                    : D !== !!f.multiple &&
                      (f.defaultValue != null
                        ? Jn(u, !!f.multiple, f.defaultValue, !0)
                        : Jn(u, !!f.multiple, f.multiple ? [] : '', !1));
              }
              u[ni] = f;
            } catch (K) {
              _e(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((Ot(t, e), Dt(e), a & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (u = e.stateNode), (f = e.memoizedProps);
          try {
            u.nodeValue = f;
          } catch (K) {
            _e(e, e.return, K);
          }
        }
        break;
      case 3:
        if ((Ot(t, e), Dt(e), a & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            Hr(t.containerInfo);
          } catch (K) {
            _e(e, e.return, K);
          }
        break;
      case 4:
        Ot(t, e), Dt(e);
        break;
      case 13:
        Ot(t, e),
          Dt(e),
          (u = e.child),
          u.flags & 8192 &&
            ((f = u.memoizedState !== null),
            (u.stateNode.isHidden = f),
            !f || (u.alternate !== null && u.alternate.memoizedState !== null) || (Xs = Ie())),
          a & 4 && Hf(e);
        break;
      case 22:
        if (
          ((M = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Ge = (N = Ge) || M), Ot(t, e), (Ge = N)) : Ot(t, e),
          Dt(e),
          a & 8192)
        ) {
          if (((N = e.memoizedState !== null), (e.stateNode.isHidden = N) && !M && (e.mode & 1) !== 0))
            for (Y = e, M = e.child; M !== null; ) {
              for (F = Y = M; Y !== null; ) {
                switch (((D = Y), (W = D.child), D.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pi(4, D, D.return);
                    break;
                  case 1:
                    wr(D, D.return);
                    var q = D.stateNode;
                    if (typeof q.componentWillUnmount == 'function') {
                      (a = D), (r = D.return);
                      try {
                        (t = a), (q.props = t.memoizedProps), (q.state = t.memoizedState), q.componentWillUnmount();
                      } catch (K) {
                        _e(a, r, K);
                      }
                    }
                    break;
                  case 5:
                    wr(D, D.return);
                    break;
                  case 22:
                    if (D.memoizedState !== null) {
                      Qf(F);
                      continue;
                    }
                }
                W !== null ? ((W.return = D), (Y = W)) : Qf(F);
              }
              M = M.sibling;
            }
          e: for (M = null, F = e; ; ) {
            if (F.tag === 5) {
              if (M === null) {
                M = F;
                try {
                  (u = F.stateNode),
                    N
                      ? ((f = u.style),
                        typeof f.setProperty == 'function'
                          ? f.setProperty('display', 'none', 'important')
                          : (f.display = 'none'))
                      : ((y = F.stateNode),
                        (S = F.memoizedProps.style),
                        (m = S != null && S.hasOwnProperty('display') ? S.display : null),
                        (y.style.display = bu('display', m)));
                } catch (K) {
                  _e(e, e.return, K);
                }
              }
            } else if (F.tag === 6) {
              if (M === null)
                try {
                  F.stateNode.nodeValue = N ? '' : F.memoizedProps;
                } catch (K) {
                  _e(e, e.return, K);
                }
            } else if (((F.tag !== 22 && F.tag !== 23) || F.memoizedState === null || F === e) && F.child !== null) {
              (F.child.return = F), (F = F.child);
              continue;
            }
            if (F === e) break e;
            for (; F.sibling === null; ) {
              if (F.return === null || F.return === e) break e;
              M === F && (M = null), (F = F.return);
            }
            M === F && (M = null), (F.sibling.return = F.return), (F = F.sibling);
          }
        }
        break;
      case 19:
        Ot(t, e), Dt(e), a & 4 && Hf(e);
        break;
      case 21:
        break;
      default:
        Ot(t, e), Dt(e);
    }
  }
  function Dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Vf(r)) {
              var a = r;
              break e;
            }
            r = r.return;
          }
          throw Error(o(160));
        }
        switch (a.tag) {
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (Dr(u, ''), (a.flags &= -33));
            var f = Bf(e);
            Ks(e, f, u);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo,
              y = Bf(e);
            qs(e, y, m);
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        _e(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pg(e, t, r) {
    (Y = e), qf(e);
  }
  function qf(e, t, r) {
    for (var a = (e.mode & 1) !== 0; Y !== null; ) {
      var u = Y,
        f = u.child;
      if (u.tag === 22 && a) {
        var m = u.memoizedState !== null || Ro;
        if (!m) {
          var y = u.alternate,
            S = (y !== null && y.memoizedState !== null) || Ge;
          y = Ro;
          var N = Ge;
          if (((Ro = m), (Ge = S) && !N))
            for (Y = u; Y !== null; )
              (m = Y),
                (S = m.child),
                m.tag === 22 && m.memoizedState !== null ? Gf(u) : S !== null ? ((S.return = m), (Y = S)) : Gf(u);
          for (; f !== null; ) (Y = f), qf(f), (f = f.sibling);
          (Y = u), (Ro = y), (Ge = N);
        }
        Kf(e);
      } else (u.subtreeFlags & 8772) !== 0 && f !== null ? ((f.return = u), (Y = f)) : Kf(e);
    }
  }
  function Kf(e) {
    for (; Y !== null; ) {
      var t = Y;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ge || Io(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (t.flags & 4 && !Ge)
                  if (r === null) a.componentDidMount();
                  else {
                    var u = t.elementType === t.type ? r.memoizedProps : Pt(t.type, r.memoizedProps);
                    a.componentDidUpdate(u, r.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                  }
                var f = t.updateQueue;
                f !== null && Kc(t, f, a);
                break;
              case 3:
                var m = t.updateQueue;
                if (m !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Kc(t, m, r);
                }
                break;
              case 5:
                var y = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = y;
                  var S = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      S.autoFocus && r.focus();
                      break;
                    case 'img':
                      S.src && (r.src = S.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var N = t.alternate;
                  if (N !== null) {
                    var M = N.memoizedState;
                    if (M !== null) {
                      var F = M.dehydrated;
                      F !== null && Hr(F);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          Ge || (t.flags & 512 && Ys(t));
        } catch (D) {
          _e(t, t.return, D);
        }
      }
      if (t === e) {
        Y = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (Y = r);
        break;
      }
      Y = t.return;
    }
  }
  function Qf(e) {
    for (; Y !== null; ) {
      var t = Y;
      if (t === e) {
        Y = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (Y = r);
        break;
      }
      Y = t.return;
    }
  }
  function Gf(e) {
    for (; Y !== null; ) {
      var t = Y;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Io(4, t);
            } catch (S) {
              _e(t, r, S);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == 'function') {
              var u = t.return;
              try {
                a.componentDidMount();
              } catch (S) {
                _e(t, u, S);
              }
            }
            var f = t.return;
            try {
              Ys(t);
            } catch (S) {
              _e(t, f, S);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Ys(t);
            } catch (S) {
              _e(t, m, S);
            }
        }
      } catch (S) {
        _e(t, t.return, S);
      }
      if (t === e) {
        Y = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        (y.return = t.return), (Y = y);
        break;
      }
      Y = t.return;
    }
  }
  var bg = Math.ceil,
    Do = U.ReactCurrentDispatcher,
    Qs = U.ReactCurrentOwner,
    xt = U.ReactCurrentBatchConfig,
    fe = 0,
    Ve = null,
    Ae = null,
    Ye = 0,
    dt = 0,
    xr = sn(0),
    ze = 0,
    mi = null,
    Mn = 0,
    Ao = 0,
    Gs = 0,
    hi = null,
    ot = null,
    Xs = 0,
    Sr = 1 / 0,
    Qt = null,
    Mo = !1,
    Js = null,
    pn = null,
    Fo = !1,
    mn = null,
    zo = 0,
    gi = 0,
    Zs = null,
    jo = -1,
    $o = 0;
  function tt() {
    return (fe & 6) !== 0 ? Ie() : jo !== -1 ? jo : (jo = Ie());
  }
  function hn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (fe & 2) !== 0 && Ye !== 0
      ? Ye & -Ye
      : ug.transition !== null
      ? ($o === 0 && ($o = Vu()), $o)
      : ((e = ge), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xu(e.type))), e);
  }
  function Nt(e, t, r, a) {
    if (50 < gi) throw ((gi = 0), (Zs = null), Error(o(185)));
    $r(e, r, a),
      ((fe & 2) === 0 || e !== Ve) &&
        (e === Ve && ((fe & 2) === 0 && (Ao |= r), ze === 4 && gn(e, Ye)),
        at(e, a),
        r === 1 && fe === 0 && (t.mode & 1) === 0 && ((Sr = Ie() + 500), mo && un()));
  }
  function at(e, t) {
    var r = e.callbackNode;
    uh(e, t);
    var a = Ki(e, e === Ve ? Ye : 0);
    if (a === 0) r !== null && ju(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = a & -a), e.callbackPriority !== t)) {
      if ((r != null && ju(r), t === 1))
        e.tag === 0 ? lg(Jf.bind(null, e)) : Mc(Jf.bind(null, e)),
          ig(function () {
            (fe & 6) === 0 && un();
          }),
          (r = null);
      else {
        switch (Bu(a)) {
          case 1:
            r = Ra;
            break;
          case 4:
            r = $u;
            break;
          case 16:
            r = Wi;
            break;
          case 536870912:
            r = Uu;
            break;
          default:
            r = Wi;
        }
        r = ad(r, Xf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Xf(e, t) {
    if (((jo = -1), ($o = 0), (fe & 6) !== 0)) throw Error(o(327));
    var r = e.callbackNode;
    if (kr() && e.callbackNode !== r) return null;
    var a = Ki(e, e === Ve ? Ye : 0);
    if (a === 0) return null;
    if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = Uo(e, a);
    else {
      t = a;
      var u = fe;
      fe |= 2;
      var f = ed();
      (Ve !== e || Ye !== t) && ((Qt = null), (Sr = Ie() + 500), zn(e, t));
      do
        try {
          Tg();
          break;
        } catch (y) {
          Zf(e, y);
        }
      while (!0);
      vs(), (Do.current = f), (fe = u), Ae !== null ? (t = 0) : ((Ve = null), (Ye = 0), (t = ze));
    }
    if (t !== 0) {
      if ((t === 2 && ((u = Ia(e)), u !== 0 && ((a = u), (t = el(e, u)))), t === 1))
        throw ((r = mi), zn(e, 0), gn(e, a), at(e, Ie()), r);
      if (t === 6) gn(e, a);
      else {
        if (
          ((u = e.current.alternate),
          (a & 30) === 0 &&
            !Og(u) &&
            ((t = Uo(e, a)), t === 2 && ((f = Ia(e)), f !== 0 && ((a = f), (t = el(e, f)))), t === 1))
        )
          throw ((r = mi), zn(e, 0), gn(e, a), at(e, Ie()), r);
        switch (((e.finishedWork = u), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            jn(e, ot, Qt);
            break;
          case 3:
            if ((gn(e, a), (a & 130023424) === a && ((t = Xs + 500 - Ie()), 10 < t))) {
              if (Ki(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & a) !== a)) {
                tt(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = as(jn.bind(null, e, ot, Qt), t);
              break;
            }
            jn(e, ot, Qt);
            break;
          case 4:
            if ((gn(e, a), (a & 4194240) === a)) break;
            for (t = e.eventTimes, u = -1; 0 < a; ) {
              var m = 31 - kt(a);
              (f = 1 << m), (m = t[m]), m > u && (u = m), (a &= ~f);
            }
            if (
              ((a = u),
              (a = Ie() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                  ? 480
                  : 1080 > a
                  ? 1080
                  : 1920 > a
                  ? 1920
                  : 3e3 > a
                  ? 3e3
                  : 4320 > a
                  ? 4320
                  : 1960 * bg(a / 1960)) - a),
              10 < a)
            ) {
              e.timeoutHandle = as(jn.bind(null, e, ot, Qt), a);
              break;
            }
            jn(e, ot, Qt);
            break;
          case 5:
            jn(e, ot, Qt);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return at(e, Ie()), e.callbackNode === r ? Xf.bind(null, e) : null;
  }
  function el(e, t) {
    var r = hi;
    return (
      e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
      (e = Uo(e, t)),
      e !== 2 && ((t = ot), (ot = r), t !== null && tl(t)),
      e
    );
  }
  function tl(e) {
    ot === null ? (ot = e) : ot.push.apply(ot, e);
  }
  function Og(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var a = 0; a < r.length; a++) {
            var u = r[a],
              f = u.getSnapshot;
            u = u.value;
            try {
              if (!Ct(f(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function gn(e, t) {
    for (t &= ~Gs, t &= ~Ao, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - kt(t),
        a = 1 << r;
      (e[r] = -1), (t &= ~a);
    }
  }
  function Jf(e) {
    if ((fe & 6) !== 0) throw Error(o(327));
    kr();
    var t = Ki(e, 0);
    if ((t & 1) === 0) return at(e, Ie()), null;
    var r = Uo(e, t);
    if (e.tag !== 0 && r === 2) {
      var a = Ia(e);
      a !== 0 && ((t = a), (r = el(e, a)));
    }
    if (r === 1) throw ((r = mi), zn(e, 0), gn(e, t), at(e, Ie()), r);
    if (r === 6) throw Error(o(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), jn(e, ot, Qt), at(e, Ie()), null;
  }
  function nl(e, t) {
    var r = fe;
    fe |= 1;
    try {
      return e(t);
    } finally {
      (fe = r), fe === 0 && ((Sr = Ie() + 500), mo && un());
    }
  }
  function Fn(e) {
    mn !== null && mn.tag === 0 && (fe & 6) === 0 && kr();
    var t = fe;
    fe |= 1;
    var r = xt.transition,
      a = ge;
    try {
      if (((xt.transition = null), (ge = 1), e)) return e();
    } finally {
      (ge = a), (xt.transition = r), (fe = t), (fe & 6) === 0 && un();
    }
  }
  function rl() {
    (dt = xr.current), Pe(xr);
  }
  function zn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), rg(r)), Ae !== null))
      for (r = Ae.return; r !== null; ) {
        var a = r;
        switch ((ds(a), a.tag)) {
          case 1:
            (a = a.type.childContextTypes), a != null && fo();
            break;
          case 3:
            vr(), Pe(nt), Pe(qe), Ps();
            break;
          case 5:
            Cs(a);
            break;
          case 4:
            vr();
            break;
          case 13:
            Pe(Te);
            break;
          case 19:
            Pe(Te);
            break;
          case 10:
            ys(a.type._context);
            break;
          case 22:
          case 23:
            rl();
        }
        r = r.return;
      }
    if (
      ((Ve = e),
      (Ae = e = vn(e.current, null)),
      (Ye = dt = t),
      (ze = 0),
      (mi = null),
      (Gs = Ao = Mn = 0),
      (ot = hi = null),
      In !== null)
    ) {
      for (t = 0; t < In.length; t++)
        if (((r = In[t]), (a = r.interleaved), a !== null)) {
          r.interleaved = null;
          var u = a.next,
            f = r.pending;
          if (f !== null) {
            var m = f.next;
            (f.next = u), (a.next = m);
          }
          r.pending = a;
        }
      In = null;
    }
    return e;
  }
  function Zf(e, t) {
    do {
      var r = Ae;
      try {
        if ((vs(), (Eo.current = No), Po)) {
          for (var a = Le.memoizedState; a !== null; ) {
            var u = a.queue;
            u !== null && (u.pending = null), (a = a.next);
          }
          Po = !1;
        }
        if (
          ((An = 0), (Ue = Fe = Le = null), (li = !1), (ui = 0), (Qs.current = null), r === null || r.return === null)
        ) {
          (ze = 1), (mi = t), (Ae = null);
          break;
        }
        e: {
          var f = e,
            m = r.return,
            y = r,
            S = t;
          if (((t = Ye), (y.flags |= 32768), S !== null && typeof S == 'object' && typeof S.then == 'function')) {
            var N = S,
              M = y,
              F = M.tag;
            if ((M.mode & 1) === 0 && (F === 0 || F === 11 || F === 15)) {
              var D = M.alternate;
              D
                ? ((M.updateQueue = D.updateQueue), (M.memoizedState = D.memoizedState), (M.lanes = D.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null));
            }
            var W = Ef(m);
            if (W !== null) {
              (W.flags &= -257), Pf(W, m, y, f, t), W.mode & 1 && Cf(f, N, t), (t = W), (S = N);
              var q = t.updateQueue;
              if (q === null) {
                var K = new Set();
                K.add(S), (t.updateQueue = K);
              } else q.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                Cf(f, N, t), il();
                break e;
              }
              S = Error(o(426));
            }
          } else if (Oe && y.mode & 1) {
            var De = Ef(m);
            if (De !== null) {
              (De.flags & 65536) === 0 && (De.flags |= 256), Pf(De, m, y, f, t), hs(yr(S, y));
              break e;
            }
          }
          (f = S = yr(S, y)), ze !== 4 && (ze = 2), hi === null ? (hi = [f]) : hi.push(f), (f = m);
          do {
            switch (f.tag) {
              case 3:
                (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                var E = Sf(f, S, t);
                qc(f, E);
                break e;
              case 1:
                y = S;
                var k = f.type,
                  b = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == 'function' ||
                    (b !== null && typeof b.componentDidCatch == 'function' && (pn === null || !pn.has(b))))
                ) {
                  (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                  var j = kf(f, y, t);
                  qc(f, j);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        nd(r);
      } catch (X) {
        (t = X), Ae === r && r !== null && (Ae = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ed() {
    var e = Do.current;
    return (Do.current = No), e === null ? No : e;
  }
  function il() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      Ve === null || ((Mn & 268435455) === 0 && (Ao & 268435455) === 0) || gn(Ve, Ye);
  }
  function Uo(e, t) {
    var r = fe;
    fe |= 2;
    var a = ed();
    (Ve !== e || Ye !== t) && ((Qt = null), zn(e, t));
    do
      try {
        Ng();
        break;
      } catch (u) {
        Zf(e, u);
      }
    while (!0);
    if ((vs(), (fe = r), (Do.current = a), Ae !== null)) throw Error(o(261));
    return (Ve = null), (Ye = 0), ze;
  }
  function Ng() {
    for (; Ae !== null; ) td(Ae);
  }
  function Tg() {
    for (; Ae !== null && !eh(); ) td(Ae);
  }
  function td(e) {
    var t = od(e.alternate, e, dt);
    (e.memoizedProps = e.pendingProps), t === null ? nd(e) : (Ae = t), (Qs.current = null);
  }
  function nd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Sg(r, t, dt)), r !== null)) {
          Ae = r;
          return;
        }
      } else {
        if (((r = kg(r, t)), r !== null)) {
          (r.flags &= 32767), (Ae = r);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ze = 6), (Ae = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function jn(e, t, r) {
    var a = ge,
      u = xt.transition;
    try {
      (xt.transition = null), (ge = 1), Lg(e, t, r, a);
    } finally {
      (xt.transition = u), (ge = a);
    }
    return null;
  }
  function Lg(e, t, r, a) {
    do kr();
    while (mn !== null);
    if ((fe & 6) !== 0) throw Error(o(327));
    r = e.finishedWork;
    var u = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var f = r.lanes | r.childLanes;
    if (
      (ch(e, f),
      e === Ve && ((Ae = Ve = null), (Ye = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Fo ||
        ((Fo = !0),
        ad(Wi, function () {
          return kr(), null;
        })),
      (f = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || f)
    ) {
      (f = xt.transition), (xt.transition = null);
      var m = ge;
      ge = 1;
      var y = fe;
      (fe |= 4),
        (Qs.current = null),
        Eg(e, r),
        Yf(r, e),
        Gh(is),
        (Xi = !!rs),
        (is = rs = null),
        (e.current = r),
        Pg(r),
        th(),
        (fe = y),
        (ge = m),
        (xt.transition = f);
    } else e.current = r;
    if (
      (Fo && ((Fo = !1), (mn = e), (zo = u)),
      (f = e.pendingLanes),
      f === 0 && (pn = null),
      ih(r.stateNode),
      at(e, Ie()),
      t !== null)
    )
      for (a = e.onRecoverableError, r = 0; r < t.length; r++)
        (u = t[r]), a(u.value, { componentStack: u.stack, digest: u.digest });
    if (Mo) throw ((Mo = !1), (e = Js), (Js = null), e);
    return (
      (zo & 1) !== 0 && e.tag !== 0 && kr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === Zs ? gi++ : ((gi = 0), (Zs = e))) : (gi = 0),
      un(),
      null
    );
  }
  function kr() {
    if (mn !== null) {
      var e = Bu(zo),
        t = xt.transition,
        r = ge;
      try {
        if (((xt.transition = null), (ge = 16 > e ? 16 : e), mn === null)) var a = !1;
        else {
          if (((e = mn), (mn = null), (zo = 0), (fe & 6) !== 0)) throw Error(o(331));
          var u = fe;
          for (fe |= 4, Y = e.current; Y !== null; ) {
            var f = Y,
              m = f.child;
            if ((Y.flags & 16) !== 0) {
              var y = f.deletions;
              if (y !== null) {
                for (var S = 0; S < y.length; S++) {
                  var N = y[S];
                  for (Y = N; Y !== null; ) {
                    var M = Y;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pi(8, M, f);
                    }
                    var F = M.child;
                    if (F !== null) (F.return = M), (Y = F);
                    else
                      for (; Y !== null; ) {
                        M = Y;
                        var D = M.sibling,
                          W = M.return;
                        if ((Uf(M), M === N)) {
                          Y = null;
                          break;
                        }
                        if (D !== null) {
                          (D.return = W), (Y = D);
                          break;
                        }
                        Y = W;
                      }
                  }
                }
                var q = f.alternate;
                if (q !== null) {
                  var K = q.child;
                  if (K !== null) {
                    q.child = null;
                    do {
                      var De = K.sibling;
                      (K.sibling = null), (K = De);
                    } while (K !== null);
                  }
                }
                Y = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && m !== null) (m.return = f), (Y = m);
            else
              e: for (; Y !== null; ) {
                if (((f = Y), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pi(9, f, f.return);
                  }
                var E = f.sibling;
                if (E !== null) {
                  (E.return = f.return), (Y = E);
                  break e;
                }
                Y = f.return;
              }
          }
          var k = e.current;
          for (Y = k; Y !== null; ) {
            m = Y;
            var b = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && b !== null) (b.return = m), (Y = b);
            else
              e: for (m = k; Y !== null; ) {
                if (((y = Y), (y.flags & 2048) !== 0))
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Io(9, y);
                    }
                  } catch (X) {
                    _e(y, y.return, X);
                  }
                if (y === m) {
                  Y = null;
                  break e;
                }
                var j = y.sibling;
                if (j !== null) {
                  (j.return = y.return), (Y = j);
                  break e;
                }
                Y = y.return;
              }
          }
          if (((fe = u), un(), Lt && typeof Lt.onPostCommitFiberRoot == 'function'))
            try {
              Lt.onPostCommitFiberRoot(Hi, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (ge = r), (xt.transition = t);
      }
    }
    return !1;
  }
  function rd(e, t, r) {
    (t = yr(r, t)), (t = Sf(e, t, 1)), (e = fn(e, t, 1)), (t = tt()), e !== null && ($r(e, 1, t), at(e, t));
  }
  function _e(e, t, r) {
    if (e.tag === 3) rd(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rd(t, e, r);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (pn === null || !pn.has(a)))
          ) {
            (e = yr(r, e)), (e = kf(t, e, 1)), (t = fn(t, e, 1)), (e = tt()), t !== null && ($r(t, 1, e), at(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function _g(e, t, r) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (t = tt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Ve === e &&
        (Ye & r) === r &&
        (ze === 4 || (ze === 3 && (Ye & 130023424) === Ye && 500 > Ie() - Xs) ? zn(e, 0) : (Gs |= r)),
      at(e, t);
  }
  function id(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? (t = 1) : ((t = qi), (qi <<= 1), (qi & 130023424) === 0 && (qi = 4194304)));
    var r = tt();
    (e = Yt(e, t)), e !== null && ($r(e, t, r), at(e, r));
  }
  function Rg(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), id(e, r);
  }
  function Ig(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), id(e, r);
  }
  var od;
  od = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) it = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return (it = !1), xg(e, t, r);
        it = (e.flags & 131072) !== 0;
      }
    else (it = !1), Oe && (t.flags & 1048576) !== 0 && Fc(t, go, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        _o(e, t), (e = t.pendingProps);
        var u = cr(t, qe.current);
        gr(t, r), (u = Ns(null, t, a, e, u, r));
        var f = Ts();
        return (
          (t.flags |= 1),
          typeof u == 'object' && u !== null && typeof u.render == 'function' && u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(a) ? ((f = !0), po(t)) : (f = !1),
              (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
              Ss(t),
              (u.updater = To),
              (t.stateNode = u),
              (u._reactInternals = t),
              As(t, a, e, r),
              (t = js(null, t, a, !0, f, r)))
            : ((t.tag = 0), Oe && f && fs(t), et(null, t, u, r), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        e: {
          switch (
            (_o(e, t),
            (e = t.pendingProps),
            (u = a._init),
            (a = u(a._payload)),
            (t.type = a),
            (u = t.tag = Ag(a)),
            (e = Pt(a, e)),
            u)
          ) {
            case 0:
              t = zs(null, t, a, e, r);
              break e;
            case 1:
              t = _f(null, t, a, e, r);
              break e;
            case 11:
              t = bf(null, t, a, e, r);
              break e;
            case 14:
              t = Of(null, t, a, Pt(a.type, e), r);
              break e;
          }
          throw Error(o(306, a, ''));
        }
        return t;
      case 0:
        return (a = t.type), (u = t.pendingProps), (u = t.elementType === a ? u : Pt(a, u)), zs(e, t, a, u, r);
      case 1:
        return (a = t.type), (u = t.pendingProps), (u = t.elementType === a ? u : Pt(a, u)), _f(e, t, a, u, r);
      case 3:
        e: {
          if ((Rf(t), e === null)) throw Error(o(387));
          (a = t.pendingProps), (f = t.memoizedState), (u = f.element), Yc(e, t), ko(t, a, null, r);
          var m = t.memoizedState;
          if (((a = m.element), f.isDehydrated))
            if (
              ((f = {
                element: a,
                isDehydrated: !1,
                cache: m.cache,
                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                transitions: m.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              (u = yr(Error(o(423)), t)), (t = If(e, t, a, r, u));
              break e;
            } else if (a !== u) {
              (u = yr(Error(o(424)), t)), (t = If(e, t, a, r, u));
              break e;
            } else
              for (
                ft = an(t.stateNode.containerInfo.firstChild),
                  ct = t,
                  Oe = !0,
                  Et = null,
                  r = Wc(t, null, a, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((pr(), a === u)) {
              t = Kt(e, t, r);
              break e;
            }
            et(e, t, a, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Qc(t),
          e === null && ms(t),
          (a = t.type),
          (u = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (m = u.children),
          os(a, u) ? (m = null) : f !== null && os(a, f) && (t.flags |= 32),
          Lf(e, t),
          et(e, t, m, r),
          t.child
        );
      case 6:
        return e === null && ms(t), null;
      case 13:
        return Df(e, t, r);
      case 4:
        return (
          ks(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = mr(t, null, a, r)) : et(e, t, a, r),
          t.child
        );
      case 11:
        return (a = t.type), (u = t.pendingProps), (u = t.elementType === a ? u : Pt(a, u)), bf(e, t, a, u, r);
      case 7:
        return et(e, t, t.pendingProps, r), t.child;
      case 8:
        return et(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return et(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((a = t.type._context),
            (u = t.pendingProps),
            (f = t.memoizedProps),
            (m = u.value),
            Ce(wo, a._currentValue),
            (a._currentValue = m),
            f !== null)
          )
            if (Ct(f.value, m)) {
              if (f.children === u.children && !nt.current) {
                t = Kt(e, t, r);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var y = f.dependencies;
                if (y !== null) {
                  m = f.child;
                  for (var S = y.firstContext; S !== null; ) {
                    if (S.context === a) {
                      if (f.tag === 1) {
                        (S = qt(-1, r & -r)), (S.tag = 2);
                        var N = f.updateQueue;
                        if (N !== null) {
                          N = N.shared;
                          var M = N.pending;
                          M === null ? (S.next = S) : ((S.next = M.next), (M.next = S)), (N.pending = S);
                        }
                      }
                      (f.lanes |= r),
                        (S = f.alternate),
                        S !== null && (S.lanes |= r),
                        ws(f.return, r, t),
                        (y.lanes |= r);
                      break;
                    }
                    S = S.next;
                  }
                } else if (f.tag === 10) m = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((m = f.return), m === null)) throw Error(o(341));
                  (m.lanes |= r), (y = m.alternate), y !== null && (y.lanes |= r), ws(m, r, t), (m = f.sibling);
                } else m = f.child;
                if (m !== null) m.return = f;
                else
                  for (m = f; m !== null; ) {
                    if (m === t) {
                      m = null;
                      break;
                    }
                    if (((f = m.sibling), f !== null)) {
                      (f.return = m.return), (m = f);
                      break;
                    }
                    m = m.return;
                  }
                f = m;
              }
          et(e, t, u.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (a = t.pendingProps.children),
          gr(t, r),
          (u = yt(u)),
          (a = a(u)),
          (t.flags |= 1),
          et(e, t, a, r),
          t.child
        );
      case 14:
        return (a = t.type), (u = Pt(a, t.pendingProps)), (u = Pt(a.type, u)), Of(e, t, a, u, r);
      case 15:
        return Nf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : Pt(a, u)),
          _o(e, t),
          (t.tag = 1),
          rt(a) ? ((e = !0), po(t)) : (e = !1),
          gr(t, r),
          wf(t, a, u),
          As(t, a, u, r),
          js(null, t, a, !0, e, r)
        );
      case 19:
        return Mf(e, t, r);
      case 22:
        return Tf(e, t, r);
    }
    throw Error(o(156, t.tag));
  };
  function ad(e, t) {
    return zu(e, t);
  }
  function Dg(e, t, r, a) {
    (this.tag = e),
      (this.key = r),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function St(e, t, r, a) {
    return new Dg(e, t, r, a);
  }
  function ol(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ag(e) {
    if (typeof e == 'function') return ol(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === lt)) return 11;
      if (e === $e) return 14;
    }
    return 2;
  }
  function vn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = St(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t), (r.type = e.type), (r.flags = 0), (r.subtreeFlags = 0), (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Vo(e, t, r, a, u, f) {
    var m = 2;
    if (((a = e), typeof e == 'function')) ol(e) && (m = 1);
    else if (typeof e == 'string') m = 5;
    else
      e: switch (e) {
        case te:
          return $n(r.children, u, f, t);
        case re:
          (m = 8), (u |= 8);
          break;
        case de:
          return (e = St(12, r, t, u | 2)), (e.elementType = de), (e.lanes = f), e;
        case We:
          return (e = St(13, r, t, u)), (e.elementType = We), (e.lanes = f), e;
        case Me:
          return (e = St(19, r, t, u)), (e.elementType = Me), (e.lanes = f), e;
        case ye:
          return Bo(r, u, f, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case xe:
                m = 10;
                break e;
              case Se:
                m = 9;
                break e;
              case lt:
                m = 11;
                break e;
              case $e:
                m = 14;
                break e;
              case Re:
                (m = 16), (a = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ''));
      }
    return (t = St(m, r, t, u)), (t.elementType = e), (t.type = a), (t.lanes = f), t;
  }
  function $n(e, t, r, a) {
    return (e = St(7, e, a, t)), (e.lanes = r), e;
  }
  function Bo(e, t, r, a) {
    return (e = St(22, e, a, t)), (e.elementType = ye), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e;
  }
  function al(e, t, r) {
    return (e = St(6, e, null, t)), (e.lanes = r), e;
  }
  function sl(e, t, r) {
    return (
      (t = St(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function Mg(e, t, r, a, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Da(0)),
      (this.expirationTimes = Da(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Da(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ll(e, t, r, a, u, f, m, y, S) {
    return (
      (e = new Mg(e, t, r, y, S)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = St(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: a,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ss(f),
      e
    );
  }
  function Fg(e, t, r) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: J, key: a == null ? null : '' + a, children: e, containerInfo: t, implementation: r };
  }
  function sd(e) {
    if (!e) return ln;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (rt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (rt(r)) return Dc(e, r, t);
    }
    return t;
  }
  function ld(e, t, r, a, u, f, m, y, S) {
    return (
      (e = ll(r, a, !0, e, u, f, m, y, S)),
      (e.context = sd(null)),
      (r = e.current),
      (a = tt()),
      (u = hn(r)),
      (f = qt(a, u)),
      (f.callback = t ?? null),
      fn(r, f, u),
      (e.current.lanes = u),
      $r(e, u, a),
      at(e, a),
      e
    );
  }
  function Wo(e, t, r, a) {
    var u = t.current,
      f = tt(),
      m = hn(u);
    return (
      (r = sd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = qt(f, m)),
      (t.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null && (t.callback = a),
      (e = fn(u, t, m)),
      e !== null && (Nt(e, u, m, f), So(e, u, m)),
      m
    );
  }
  function Ho(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ud(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function ul(e, t) {
    ud(e, t), (e = e.alternate) && ud(e, t);
  }
  function zg() {
    return null;
  }
  var cd =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function cl(e) {
    this._internalRoot = e;
  }
  (Yo.prototype.render = cl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Wo(e, t, null, null);
    }),
    (Yo.prototype.unmount = cl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Fn(function () {
            Wo(null, e, null, null);
          }),
            (t[Vt] = null);
        }
      });
  function Yo(e) {
    this._internalRoot = e;
  }
  Yo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Yu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < nn.length && t !== 0 && t < nn[r].priority; r++);
      nn.splice(r, 0, e), r === 0 && Qu(e);
    }
  };
  function fl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function qo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function fd() {}
  function jg(e, t, r, a, u) {
    if (u) {
      if (typeof a == 'function') {
        var f = a;
        a = function () {
          var N = Ho(m);
          f.call(N);
        };
      }
      var m = ld(t, a, e, 0, null, !1, !1, '', fd);
      return (e._reactRootContainer = m), (e[Vt] = m.current), ei(e.nodeType === 8 ? e.parentNode : e), Fn(), m;
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof a == 'function') {
      var y = a;
      a = function () {
        var N = Ho(S);
        y.call(N);
      };
    }
    var S = ll(e, 0, !1, null, null, !1, !1, '', fd);
    return (
      (e._reactRootContainer = S),
      (e[Vt] = S.current),
      ei(e.nodeType === 8 ? e.parentNode : e),
      Fn(function () {
        Wo(t, S, r, a);
      }),
      S
    );
  }
  function Ko(e, t, r, a, u) {
    var f = r._reactRootContainer;
    if (f) {
      var m = f;
      if (typeof u == 'function') {
        var y = u;
        u = function () {
          var S = Ho(m);
          y.call(S);
        };
      }
      Wo(t, m, e, u);
    } else m = jg(r, t, e, u, a);
    return Ho(m);
  }
  (Wu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = jr(t.pendingLanes);
          r !== 0 && (Aa(t, r | 1), at(t, Ie()), (fe & 6) === 0 && ((Sr = Ie() + 500), un()));
        }
        break;
      case 13:
        Fn(function () {
          var a = Yt(e, 1);
          if (a !== null) {
            var u = tt();
            Nt(a, e, 1, u);
          }
        }),
          ul(e, 1);
    }
  }),
    (Ma = function (e) {
      if (e.tag === 13) {
        var t = Yt(e, 134217728);
        if (t !== null) {
          var r = tt();
          Nt(t, e, 134217728, r);
        }
        ul(e, 134217728);
      }
    }),
    (Hu = function (e) {
      if (e.tag === 13) {
        var t = hn(e),
          r = Yt(e, t);
        if (r !== null) {
          var a = tt();
          Nt(r, e, t, a);
        }
        ul(e, t);
      }
    }),
    (Yu = function () {
      return ge;
    }),
    (qu = function (e, t) {
      var r = ge;
      try {
        return (ge = e), t();
      } finally {
        ge = r;
      }
    }),
    (Na = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((Ir(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
              t < r.length;
              t++
            ) {
              var a = r[t];
              if (a !== e && a.form === e.form) {
                var u = co(a);
                if (!u) throw Error(o(90));
                Fi(a), Ir(a, u);
              }
            }
          }
          break;
        case 'textarea':
          ku(e, r);
          break;
        case 'select':
          (t = r.value), t != null && Jn(e, !!r.multiple, t, !1);
      }
    }),
    (_u = nl),
    (Ru = Fn);
  var $g = { usingClientEntryPoint: !1, Events: [ri, lr, co, Tu, Lu, nl] },
    vi = { findFiberByHostInstance: Tn, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Ug = {
      bundleType: vi.bundleType,
      version: vi.version,
      rendererPackageName: vi.rendererPackageName,
      rendererConfig: vi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: U.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Mu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: vi.findFiberByHostInstance || zg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber)
      try {
        (Hi = Qo.inject(Ug)), (Lt = Qo);
      } catch {}
  }
  return (
    (st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $g),
    (st.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fl(t)) throw Error(o(200));
      return Fg(e, t, null, r);
    }),
    (st.createRoot = function (e, t) {
      if (!fl(e)) throw Error(o(299));
      var r = !1,
        a = '',
        u = cd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = ll(e, 1, !1, null, null, r, !1, a, u)),
        (e[Vt] = t.current),
        ei(e.nodeType === 8 ? e.parentNode : e),
        new cl(t)
      );
    }),
    (st.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function' ? Error(o(188)) : ((e = Object.keys(e).join(',')), Error(o(268, e)));
      return (e = Mu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (st.flushSync = function (e) {
      return Fn(e);
    }),
    (st.hydrate = function (e, t, r) {
      if (!qo(t)) throw Error(o(200));
      return Ko(null, e, t, !0, r);
    }),
    (st.hydrateRoot = function (e, t, r) {
      if (!fl(e)) throw Error(o(405));
      var a = (r != null && r.hydratedSources) || null,
        u = !1,
        f = '',
        m = cd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (u = !0),
          r.identifierPrefix !== void 0 && (f = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (m = r.onRecoverableError)),
        (t = ld(t, null, e, 1, r ?? null, u, !1, f, m)),
        (e[Vt] = t.current),
        ei(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          (r = a[e]),
            (u = r._getVersion),
            (u = u(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, u])
              : t.mutableSourceEagerHydrationData.push(r, u);
      return new Yo(t);
    }),
    (st.render = function (e, t, r) {
      if (!qo(t)) throw Error(o(200));
      return Ko(null, e, t, !1, r);
    }),
    (st.unmountComponentAtNode = function (e) {
      if (!qo(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (Fn(function () {
            Ko(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Vt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (st.unstable_batchedUpdates = nl),
    (st.unstable_renderSubtreeIntoContainer = function (e, t, r, a) {
      if (!qo(r)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Ko(e, t, r, !1, a);
    }),
    (st.version = '18.3.1-next-f1338f8080-20240426'),
    st
  );
}
var wd;
function Up() {
  if (wd) return ml.exports;
  wd = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (ml.exports = Gg()), ml.exports;
}
var xd;
function Xg() {
  if (xd) return Go;
  xd = 1;
  var n = Up();
  return (Go.createRoot = n.createRoot), (Go.hydrateRoot = n.hydrateRoot), Go;
}
var Jg = Xg();
const Zg = pa(Jg);
Up();
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oi() {
  return (
    (Oi = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
          }
          return n;
        }),
    Oi.apply(this, arguments)
  );
}
var Bn;
(function (n) {
  (n.Pop = 'POP'), (n.Push = 'PUSH'), (n.Replace = 'REPLACE');
})(Bn || (Bn = {}));
const Sd = 'popstate';
function ev(n) {
  n === void 0 && (n = {});
  function i(s, l) {
    let { pathname: c, search: d, hash: p } = s.location;
    return Dl(
      '',
      { pathname: c, search: d, hash: p },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function o(s, l) {
    return typeof l == 'string' ? l : ra(l);
  }
  return nv(i, o, null, n);
}
function Xe(n, i) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(i);
}
function Vp(n, i) {
  if (!n) {
    typeof console < 'u' && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function tv() {
  return Math.random().toString(36).substr(2, 8);
}
function kd(n, i) {
  return { usr: n.state, key: n.key, idx: i };
}
function Dl(n, i, o, s) {
  return (
    o === void 0 && (o = null),
    Oi({ pathname: typeof n == 'string' ? n : n.pathname, search: '', hash: '' }, typeof i == 'string' ? Ri(i) : i, {
      state: o,
      key: (i && i.key) || s || tv(),
    })
  );
}
function ra(n) {
  let { pathname: i = '/', search: o = '', hash: s = '' } = n;
  return (
    o && o !== '?' && (i += o.charAt(0) === '?' ? o : '?' + o),
    s && s !== '#' && (i += s.charAt(0) === '#' ? s : '#' + s),
    i
  );
}
function Ri(n) {
  let i = {};
  if (n) {
    let o = n.indexOf('#');
    o >= 0 && ((i.hash = n.substr(o)), (n = n.substr(0, o)));
    let s = n.indexOf('?');
    s >= 0 && ((i.search = n.substr(s)), (n = n.substr(0, s))), n && (i.pathname = n);
  }
  return i;
}
function nv(n, i, o, s) {
  s === void 0 && (s = {});
  let { window: l = document.defaultView, v5Compat: c = !1 } = s,
    d = l.history,
    p = Bn.Pop,
    h = null,
    g = v();
  g == null && ((g = 0), d.replaceState(Oi({}, d.state, { idx: g }), ''));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function x() {
    p = Bn.Pop;
    let T = v(),
      V = T == null ? null : T - g;
    (g = T), h && h({ action: p, location: P.location, delta: V });
  }
  function w(T, V) {
    p = Bn.Push;
    let A = Dl(P.location, T, V);
    g = v() + 1;
    let z = kd(A, g),
      U = P.createHref(A);
    try {
      d.pushState(z, '', U);
    } catch (R) {
      if (R instanceof DOMException && R.name === 'DataCloneError') throw R;
      l.location.assign(U);
    }
    c && h && h({ action: p, location: P.location, delta: 1 });
  }
  function O(T, V) {
    p = Bn.Replace;
    let A = Dl(P.location, T, V);
    g = v();
    let z = kd(A, g),
      U = P.createHref(A);
    d.replaceState(z, '', U), c && h && h({ action: p, location: P.location, delta: 0 });
  }
  function L(T) {
    let V = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      A = typeof T == 'string' ? T : ra(T);
    return (
      (A = A.replace(/ $/, '%20')),
      Xe(V, 'No window.location.(origin|href) available to create URL for href: ' + A),
      new URL(A, V)
    );
  }
  let P = {
    get action() {
      return p;
    },
    get location() {
      return n(l, d);
    },
    listen(T) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Sd, x),
        (h = T),
        () => {
          l.removeEventListener(Sd, x), (h = null);
        }
      );
    },
    createHref(T) {
      return i(l, T);
    },
    createURL: L,
    encodeLocation(T) {
      let V = L(T);
      return { pathname: V.pathname, search: V.search, hash: V.hash };
    },
    push: w,
    replace: O,
    go(T) {
      return d.go(T);
    },
  };
  return P;
}
var Cd;
(function (n) {
  (n.data = 'data'), (n.deferred = 'deferred'), (n.redirect = 'redirect'), (n.error = 'error');
})(Cd || (Cd = {}));
function rv(n, i, o) {
  return o === void 0 && (o = '/'), iv(n, i, o);
}
function iv(n, i, o, s) {
  let l = typeof i == 'string' ? Ri(i) : i,
    c = iu(l.pathname || '/', o);
  if (c == null) return null;
  let d = Bp(n);
  ov(d);
  let p = null;
  for (let h = 0; p == null && h < d.length; ++h) {
    let g = vv(c);
    p = mv(d[h], g);
  }
  return p;
}
function Bp(n, i, o, s) {
  i === void 0 && (i = []), o === void 0 && (o = []), s === void 0 && (s = '');
  let l = (c, d, p) => {
    let h = {
      relativePath: p === void 0 ? c.path || '' : p,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c,
    };
    h.relativePath.startsWith('/') &&
      (Xe(
        h.relativePath.startsWith(s),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (h.relativePath = h.relativePath.slice(s.length)));
    let g = kn([s, h.relativePath]),
      v = o.concat(h);
    c.children &&
      c.children.length > 0 &&
      (Xe(
        c.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + g + '".')
      ),
      Bp(c.children, i, v, g)),
      !(c.path == null && !c.index) && i.push({ path: g, score: dv(g, c.index), routesMeta: v });
  };
  return (
    n.forEach((c, d) => {
      var p;
      if (c.path === '' || !((p = c.path) != null && p.includes('?'))) l(c, d);
      else for (let h of Wp(c.path)) l(c, d, h);
    }),
    i
  );
}
function Wp(n) {
  let i = n.split('/');
  if (i.length === 0) return [];
  let [o, ...s] = i,
    l = o.endsWith('?'),
    c = o.replace(/\?$/, '');
  if (s.length === 0) return l ? [c, ''] : [c];
  let d = Wp(s.join('/')),
    p = [];
  return (
    p.push(...d.map((h) => (h === '' ? c : [c, h].join('/')))),
    l && p.push(...d),
    p.map((h) => (n.startsWith('/') && h === '' ? '/' : h))
  );
}
function ov(n) {
  n.sort((i, o) =>
    i.score !== o.score
      ? o.score - i.score
      : pv(
          i.routesMeta.map((s) => s.childrenIndex),
          o.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
const av = /^:[\w-]+$/,
  sv = 3,
  lv = 2,
  uv = 1,
  cv = 10,
  fv = -2,
  Ed = (n) => n === '*';
function dv(n, i) {
  let o = n.split('/'),
    s = o.length;
  return (
    o.some(Ed) && (s += fv),
    i && (s += lv),
    o.filter((l) => !Ed(l)).reduce((l, c) => l + (av.test(c) ? sv : c === '' ? uv : cv), s)
  );
}
function pv(n, i) {
  return n.length === i.length && n.slice(0, -1).every((s, l) => s === i[l]) ? n[n.length - 1] - i[i.length - 1] : 0;
}
function mv(n, i, o) {
  let { routesMeta: s } = n,
    l = {},
    c = '/',
    d = [];
  for (let p = 0; p < s.length; ++p) {
    let h = s[p],
      g = p === s.length - 1,
      v = c === '/' ? i : i.slice(c.length) || '/',
      x = hv({ path: h.relativePath, caseSensitive: h.caseSensitive, end: g }, v),
      w = h.route;
    if (!x) return null;
    Object.assign(l, x.params),
      d.push({ params: l, pathname: kn([c, x.pathname]), pathnameBase: Sv(kn([c, x.pathnameBase])), route: w }),
      x.pathnameBase !== '/' && (c = kn([c, x.pathnameBase]));
  }
  return d;
}
function hv(n, i) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [o, s] = gv(n.path, n.caseSensitive, n.end),
    l = i.match(o);
  if (!l) return null;
  let c = l[0],
    d = c.replace(/(.)\/+$/, '$1'),
    p = l.slice(1);
  return {
    params: s.reduce((g, v, x) => {
      let { paramName: w, isOptional: O } = v;
      if (w === '*') {
        let P = p[x] || '';
        d = c.slice(0, c.length - P.length).replace(/(.)\/+$/, '$1');
      }
      const L = p[x];
      return O && !L ? (g[w] = void 0) : (g[w] = (L || '').replace(/%2F/g, '/')), g;
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: n,
  };
}
function gv(n, i, o) {
  i === void 0 && (i = !1),
    o === void 0 && (o = !0),
    Vp(
      n === '*' || !n.endsWith('*') || n.endsWith('/*'),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + n.replace(/\*$/, '/*') + '".')
    );
  let s = [],
    l =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, p, h) => (s.push({ paramName: p, isOptional: h != null }), h ? '/?([^\\/]+)?' : '/([^\\/]+)')
        );
  return (
    n.endsWith('*')
      ? (s.push({ paramName: '*' }), (l += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : o
      ? (l += '\\/*$')
      : n !== '' && n !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, i ? void 0 : 'i'), s]
  );
}
function vv(n) {
  try {
    return n
      .split('/')
      .map((i) => decodeURIComponent(i).replace(/\//g, '%2F'))
      .join('/');
  } catch (i) {
    return (
      Vp(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + i + ').')
      ),
      n
    );
  }
}
function iu(n, i) {
  if (i === '/') return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
  let o = i.endsWith('/') ? i.length - 1 : i.length,
    s = n.charAt(o);
  return s && s !== '/' ? null : n.slice(o) || '/';
}
function yv(n, i) {
  i === void 0 && (i = '/');
  let { pathname: o, search: s = '', hash: l = '' } = typeof n == 'string' ? Ri(n) : n;
  return { pathname: o ? (o.startsWith('/') ? o : wv(o, i)) : i, search: kv(s), hash: Cv(l) };
}
function wv(n, i) {
  let o = i.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach((l) => {
      l === '..' ? o.length > 1 && o.pop() : l !== '.' && o.push(l);
    }),
    o.length > 1 ? o.join('/') : '/'
  );
}
function vl(n, i, o, s) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ('`to.' + i + '` field [' + JSON.stringify(s) + '].  Please separate it out to the ') +
    ('`to.' + o + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xv(n) {
  return n.filter((i, o) => o === 0 || (i.route.path && i.route.path.length > 0));
}
function Hp(n, i) {
  let o = xv(n);
  return i ? o.map((s, l) => (l === o.length - 1 ? s.pathname : s.pathnameBase)) : o.map((s) => s.pathnameBase);
}
function Yp(n, i, o, s) {
  s === void 0 && (s = !1);
  let l;
  typeof n == 'string'
    ? (l = Ri(n))
    : ((l = Oi({}, n)),
      Xe(!l.pathname || !l.pathname.includes('?'), vl('?', 'pathname', 'search', l)),
      Xe(!l.pathname || !l.pathname.includes('#'), vl('#', 'pathname', 'hash', l)),
      Xe(!l.search || !l.search.includes('#'), vl('#', 'search', 'hash', l)));
  let c = n === '' || l.pathname === '',
    d = c ? '/' : l.pathname,
    p;
  if (d == null) p = o;
  else {
    let x = i.length - 1;
    if (!s && d.startsWith('..')) {
      let w = d.split('/');
      for (; w[0] === '..'; ) w.shift(), (x -= 1);
      l.pathname = w.join('/');
    }
    p = x >= 0 ? i[x] : '/';
  }
  let h = yv(l, p),
    g = d && d !== '/' && d.endsWith('/'),
    v = (c || d === '.') && o.endsWith('/');
  return !h.pathname.endsWith('/') && (g || v) && (h.pathname += '/'), h;
}
const kn = (n) => n.join('/').replace(/\/\/+/g, '/'),
  Sv = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  kv = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  Cv = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n);
function Ev(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
const qp = ['post', 'put', 'patch', 'delete'];
new Set(qp);
const Pv = ['get', ...qp];
new Set(Pv);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ia() {
  return (
    (ia = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
          }
          return n;
        }),
    ia.apply(this, arguments)
  );
}
const ou = _.createContext(null),
  bv = _.createContext(null),
  Qn = _.createContext(null),
  au = _.createContext(null),
  On = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Kp = _.createContext(null);
function Ov(n, i) {
  let { relative: o } = i === void 0 ? {} : i;
  Ii() || Xe(!1);
  let { basename: s, navigator: l } = _.useContext(Qn),
    { hash: c, pathname: d, search: p } = Gp(n, { relative: o }),
    h = d;
  return s !== '/' && (h = d === '/' ? s : kn([s, d])), l.createHref({ pathname: h, search: p, hash: c });
}
function Ii() {
  return _.useContext(au) != null;
}
function Di() {
  return Ii() || Xe(!1), _.useContext(au).location;
}
function Qp(n) {
  _.useContext(Qn).static || _.useLayoutEffect(n);
}
function Nv() {
  let { isDataRoute: n } = _.useContext(On);
  return n ? Bv() : Tv();
}
function Tv() {
  Ii() || Xe(!1);
  let n = _.useContext(ou),
    { basename: i, future: o, navigator: s } = _.useContext(Qn),
    { matches: l } = _.useContext(On),
    { pathname: c } = Di(),
    d = JSON.stringify(Hp(l, o.v7_relativeSplatPath)),
    p = _.useRef(!1);
  return (
    Qp(() => {
      p.current = !0;
    }),
    _.useCallback(
      function (g, v) {
        if ((v === void 0 && (v = {}), !p.current)) return;
        if (typeof g == 'number') {
          s.go(g);
          return;
        }
        let x = Yp(g, JSON.parse(d), c, v.relative === 'path');
        n == null && i !== '/' && (x.pathname = x.pathname === '/' ? i : kn([i, x.pathname])),
          (v.replace ? s.replace : s.push)(x, v.state, v);
      },
      [i, s, d, c, n]
    )
  );
}
const Lv = _.createContext(null);
function _v(n) {
  let i = _.useContext(On).outlet;
  return i && _.createElement(Lv.Provider, { value: n }, i);
}
function Gp(n, i) {
  let { relative: o } = i === void 0 ? {} : i,
    { future: s } = _.useContext(Qn),
    { matches: l } = _.useContext(On),
    { pathname: c } = Di(),
    d = JSON.stringify(Hp(l, s.v7_relativeSplatPath));
  return _.useMemo(() => Yp(n, JSON.parse(d), c, o === 'path'), [n, d, c, o]);
}
function Rv(n, i) {
  return Iv(n);
}
function Iv(n, i, o, s) {
  Ii() || Xe(!1);
  let { navigator: l } = _.useContext(Qn),
    { matches: c } = _.useContext(On),
    d = c[c.length - 1],
    p = d ? d.params : {};
  d && d.pathname;
  let h = d ? d.pathnameBase : '/';
  d && d.route;
  let g = Di(),
    v;
  v = g;
  let x = v.pathname || '/',
    w = x;
  if (h !== '/') {
    let P = h.replace(/^\//, '').split('/');
    w = '/' + x.replace(/^\//, '').split('/').slice(P.length).join('/');
  }
  let O = rv(n, { pathname: w });
  return zv(
    O &&
      O.map((P) =>
        Object.assign({}, P, {
          params: Object.assign({}, p, P.params),
          pathname: kn([h, l.encodeLocation ? l.encodeLocation(P.pathname).pathname : P.pathname]),
          pathnameBase:
            P.pathnameBase === '/'
              ? h
              : kn([h, l.encodeLocation ? l.encodeLocation(P.pathnameBase).pathname : P.pathnameBase]),
        })
      ),
    c,
    o,
    s
  );
}
function Dv() {
  let n = Vv(),
    i = Ev(n) ? n.status + ' ' + n.statusText : n instanceof Error ? n.message : JSON.stringify(n),
    o = n instanceof Error ? n.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement('h2', null, 'Unexpected Application Error!'),
    _.createElement('h3', { style: { fontStyle: 'italic' } }, i),
    o ? _.createElement('pre', { style: l }, o) : null,
    null
  );
}
const Av = _.createElement(Dv, null);
class Mv extends _.Component {
  constructor(i) {
    super(i), (this.state = { location: i.location, revalidation: i.revalidation, error: i.error });
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, o) {
    return o.location !== i.location || (o.revalidation !== 'idle' && i.revalidation === 'idle')
      ? { error: i.error, location: i.location, revalidation: i.revalidation }
      : {
          error: i.error !== void 0 ? i.error : o.error,
          location: o.location,
          revalidation: i.revalidation || o.revalidation,
        };
  }
  componentDidCatch(i, o) {
    console.error('React Router caught the following error during render', i, o);
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          On.Provider,
          { value: this.props.routeContext },
          _.createElement(Kp.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Fv(n) {
  let { routeContext: i, match: o, children: s } = n,
    l = _.useContext(ou);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = o.route.id),
    _.createElement(On.Provider, { value: i }, s)
  );
}
function zv(n, i, o, s) {
  var l;
  if ((i === void 0 && (i = []), o === void 0 && (o = null), s === void 0 && (s = null), n == null)) {
    var c;
    if (!o) return null;
    if (o.errors) n = o.matches;
    else if ((c = s) != null && c.v7_partialHydration && i.length === 0 && !o.initialized && o.matches.length > 0)
      n = o.matches;
    else return null;
  }
  let d = n,
    p = (l = o) == null ? void 0 : l.errors;
  if (p != null) {
    let v = d.findIndex((x) => x.route.id && (p == null ? void 0 : p[x.route.id]) !== void 0);
    v >= 0 || Xe(!1), (d = d.slice(0, Math.min(d.length, v + 1)));
  }
  let h = !1,
    g = -1;
  if (o && s && s.v7_partialHydration)
    for (let v = 0; v < d.length; v++) {
      let x = d[v];
      if (((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (g = v), x.route.id)) {
        let { loaderData: w, errors: O } = o,
          L = x.route.loader && w[x.route.id] === void 0 && (!O || O[x.route.id] === void 0);
        if (x.route.lazy || L) {
          (h = !0), g >= 0 ? (d = d.slice(0, g + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((v, x, w) => {
    let O,
      L = !1,
      P = null,
      T = null;
    o &&
      ((O = p && x.route.id ? p[x.route.id] : void 0),
      (P = x.route.errorElement || Av),
      h &&
        (g < 0 && w === 0
          ? (Wv('route-fallback'), (L = !0), (T = null))
          : g === w && ((L = !0), (T = x.route.hydrateFallbackElement || null))));
    let V = i.concat(d.slice(0, w + 1)),
      A = () => {
        let z;
        return (
          O
            ? (z = P)
            : L
            ? (z = T)
            : x.route.Component
            ? (z = _.createElement(x.route.Component, null))
            : x.route.element
            ? (z = x.route.element)
            : (z = v),
          _.createElement(Fv, {
            match: x,
            routeContext: { outlet: v, matches: V, isDataRoute: o != null },
            children: z,
          })
        );
      };
    return o && (x.route.ErrorBoundary || x.route.errorElement || w === 0)
      ? _.createElement(Mv, {
          location: o.location,
          revalidation: o.revalidation,
          component: P,
          error: O,
          children: A(),
          routeContext: { outlet: null, matches: V, isDataRoute: !0 },
        })
      : A();
  }, null);
}
var Xp = (function (n) {
    return (
      (n.UseBlocker = 'useBlocker'), (n.UseRevalidator = 'useRevalidator'), (n.UseNavigateStable = 'useNavigate'), n
    );
  })(Xp || {}),
  Jp = (function (n) {
    return (
      (n.UseBlocker = 'useBlocker'),
      (n.UseLoaderData = 'useLoaderData'),
      (n.UseActionData = 'useActionData'),
      (n.UseRouteError = 'useRouteError'),
      (n.UseNavigation = 'useNavigation'),
      (n.UseRouteLoaderData = 'useRouteLoaderData'),
      (n.UseMatches = 'useMatches'),
      (n.UseRevalidator = 'useRevalidator'),
      (n.UseNavigateStable = 'useNavigate'),
      (n.UseRouteId = 'useRouteId'),
      n
    );
  })(Jp || {});
function jv(n) {
  let i = _.useContext(ou);
  return i || Xe(!1), i;
}
function $v(n) {
  let i = _.useContext(bv);
  return i || Xe(!1), i;
}
function Uv(n) {
  let i = _.useContext(On);
  return i || Xe(!1), i;
}
function Zp(n) {
  let i = Uv(),
    o = i.matches[i.matches.length - 1];
  return o.route.id || Xe(!1), o.route.id;
}
function Vv() {
  var n;
  let i = _.useContext(Kp),
    o = $v(),
    s = Zp();
  return i !== void 0 ? i : (n = o.errors) == null ? void 0 : n[s];
}
function Bv() {
  let { router: n } = jv(Xp.UseNavigateStable),
    i = Zp(Jp.UseNavigateStable),
    o = _.useRef(!1);
  return (
    Qp(() => {
      o.current = !0;
    }),
    _.useCallback(
      function (l, c) {
        c === void 0 && (c = {}),
          o.current && (typeof l == 'number' ? n.navigate(l) : n.navigate(l, ia({ fromRouteId: i }, c)));
      },
      [n, i]
    )
  );
}
const Pd = {};
function Wv(n, i, o) {
  Pd[n] || (Pd[n] = !0);
}
function nC(n) {
  return _v(n.context);
}
function Hv(n) {
  let {
    basename: i = '/',
    children: o = null,
    location: s,
    navigationType: l = Bn.Pop,
    navigator: c,
    static: d = !1,
    future: p,
  } = n;
  Ii() && Xe(!1);
  let h = i.replace(/^\/*/, '/'),
    g = _.useMemo(
      () => ({ basename: h, navigator: c, static: d, future: ia({ v7_relativeSplatPath: !1 }, p) }),
      [h, p, c, d]
    );
  typeof s == 'string' && (s = Ri(s));
  let { pathname: v = '/', search: x = '', hash: w = '', state: O = null, key: L = 'default' } = s,
    P = _.useMemo(() => {
      let T = iu(v, h);
      return T == null ? null : { location: { pathname: T, search: x, hash: w, state: O, key: L }, navigationType: l };
    }, [h, v, x, w, O, L, l]);
  return P == null
    ? null
    : _.createElement(Qn.Provider, { value: g }, _.createElement(au.Provider, { children: o, value: P }));
}
new Promise(() => {});
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Al() {
  return (
    (Al = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
          }
          return n;
        }),
    Al.apply(this, arguments)
  );
}
function Yv(n, i) {
  if (n == null) return {};
  var o = {},
    s = Object.keys(n),
    l,
    c;
  for (c = 0; c < s.length; c++) (l = s[c]), !(i.indexOf(l) >= 0) && (o[l] = n[l]);
  return o;
}
function qv(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Kv(n, i) {
  return n.button === 0 && (!i || i === '_self') && !qv(n);
}
const Qv = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Gv = '6';
try {
  window.__reactRouterVersion = Gv;
} catch {}
const Xv = 'startTransition',
  bd = qg[Xv];
function Jv(n) {
  let { basename: i, children: o, future: s, window: l } = n,
    c = _.useRef();
  c.current == null && (c.current = ev({ window: l, v5Compat: !0 }));
  let d = c.current,
    [p, h] = _.useState({ action: d.action, location: d.location }),
    { v7_startTransition: g } = s || {},
    v = _.useCallback(
      (x) => {
        g && bd ? bd(() => h(x)) : h(x);
      },
      [h, g]
    );
  return (
    _.useLayoutEffect(() => d.listen(v), [d, v]),
    _.createElement(Hv, {
      basename: i,
      children: o,
      location: p.location,
      navigationType: p.action,
      navigator: d,
      future: s,
    })
  );
}
const Zv = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  ey = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rC = _.forwardRef(function (i, o) {
    let {
        onClick: s,
        relative: l,
        reloadDocument: c,
        replace: d,
        state: p,
        target: h,
        to: g,
        preventScrollReset: v,
        unstable_viewTransition: x,
      } = i,
      w = Yv(i, Qv),
      { basename: O } = _.useContext(Qn),
      L,
      P = !1;
    if (typeof g == 'string' && ey.test(g) && ((L = g), Zv))
      try {
        let z = new URL(window.location.href),
          U = g.startsWith('//') ? new URL(z.protocol + g) : new URL(g),
          R = iu(U.pathname, O);
        U.origin === z.origin && R != null ? (g = R + U.search + U.hash) : (P = !0);
      } catch {}
    let T = Ov(g, { relative: l }),
      V = ty(g, { replace: d, state: p, target: h, preventScrollReset: v, relative: l, unstable_viewTransition: x });
    function A(z) {
      s && s(z), z.defaultPrevented || V(z);
    }
    return _.createElement('a', Al({}, w, { href: L || T, onClick: P || c ? s : A, ref: o, target: h }));
  });
var Od;
(function (n) {
  (n.UseScrollRestoration = 'useScrollRestoration'),
    (n.UseSubmit = 'useSubmit'),
    (n.UseSubmitFetcher = 'useSubmitFetcher'),
    (n.UseFetcher = 'useFetcher'),
    (n.useViewTransitionState = 'useViewTransitionState');
})(Od || (Od = {}));
var Nd;
(function (n) {
  (n.UseFetcher = 'useFetcher'), (n.UseFetchers = 'useFetchers'), (n.UseScrollRestoration = 'useScrollRestoration');
})(Nd || (Nd = {}));
function ty(n, i) {
  let {
      target: o,
      replace: s,
      state: l,
      preventScrollReset: c,
      relative: d,
      unstable_viewTransition: p,
    } = i === void 0 ? {} : i,
    h = Nv(),
    g = Di(),
    v = Gp(n, { relative: d });
  return _.useCallback(
    (x) => {
      if (Kv(x, o)) {
        x.preventDefault();
        let w = s !== void 0 ? s : ra(g) === ra(v);
        h(n, { replace: w, state: l, preventScrollReset: c, relative: d, unstable_viewTransition: p });
      }
    },
    [g, h, v, s, l, o, n, c, d, p]
  );
}
var Xo = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var Td;
function ny() {
  if (Td) return Xo;
  (Td = 1), (Xo.parse = d), (Xo.serialize = g);
  var n = Object.prototype.toString,
    i = Object.prototype.hasOwnProperty,
    o = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
    s = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
    l = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    c = /^[\u0020-\u003A\u003D-\u007E]*$/;
  function d(O, L) {
    if (typeof O != 'string') throw new TypeError('argument str must be a string');
    var P = {},
      T = O.length;
    if (T < 2) return P;
    var V = (L && L.decode) || v,
      A = 0,
      z = 0,
      U = 0;
    do {
      if (((z = O.indexOf('=', A)), z === -1)) break;
      if (((U = O.indexOf(';', A)), U === -1)) U = T;
      else if (z > U) {
        A = O.lastIndexOf(';', z - 1) + 1;
        continue;
      }
      var R = p(O, A, z),
        J = h(O, z, R),
        te = O.slice(R, J);
      if (!i.call(P, te)) {
        var re = p(O, z + 1, U),
          de = h(O, U, re);
        O.charCodeAt(re) === 34 && O.charCodeAt(de - 1) === 34 && (re++, de--);
        var xe = O.slice(re, de);
        P[te] = w(xe, V);
      }
      A = U + 1;
    } while (A < T);
    return P;
  }
  function p(O, L, P) {
    do {
      var T = O.charCodeAt(L);
      if (T !== 32 && T !== 9) return L;
    } while (++L < P);
    return P;
  }
  function h(O, L, P) {
    for (; L > P; ) {
      var T = O.charCodeAt(--L);
      if (T !== 32 && T !== 9) return L + 1;
    }
    return P;
  }
  function g(O, L, P) {
    var T = (P && P.encode) || encodeURIComponent;
    if (typeof T != 'function') throw new TypeError('option encode is invalid');
    if (!o.test(O)) throw new TypeError('argument name is invalid');
    var V = T(L);
    if (!s.test(V)) throw new TypeError('argument val is invalid');
    var A = O + '=' + V;
    if (!P) return A;
    if (P.maxAge != null) {
      var z = Math.floor(P.maxAge);
      if (!isFinite(z)) throw new TypeError('option maxAge is invalid');
      A += '; Max-Age=' + z;
    }
    if (P.domain) {
      if (!l.test(P.domain)) throw new TypeError('option domain is invalid');
      A += '; Domain=' + P.domain;
    }
    if (P.path) {
      if (!c.test(P.path)) throw new TypeError('option path is invalid');
      A += '; Path=' + P.path;
    }
    if (P.expires) {
      var U = P.expires;
      if (!x(U) || isNaN(U.valueOf())) throw new TypeError('option expires is invalid');
      A += '; Expires=' + U.toUTCString();
    }
    if (
      (P.httpOnly && (A += '; HttpOnly'),
      P.secure && (A += '; Secure'),
      P.partitioned && (A += '; Partitioned'),
      P.priority)
    ) {
      var R = typeof P.priority == 'string' ? P.priority.toLowerCase() : P.priority;
      switch (R) {
        case 'low':
          A += '; Priority=Low';
          break;
        case 'medium':
          A += '; Priority=Medium';
          break;
        case 'high':
          A += '; Priority=High';
          break;
        default:
          throw new TypeError('option priority is invalid');
      }
    }
    if (P.sameSite) {
      var J = typeof P.sameSite == 'string' ? P.sameSite.toLowerCase() : P.sameSite;
      switch (J) {
        case !0:
          A += '; SameSite=Strict';
          break;
        case 'lax':
          A += '; SameSite=Lax';
          break;
        case 'strict':
          A += '; SameSite=Strict';
          break;
        case 'none':
          A += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    }
    return A;
  }
  function v(O) {
    return O.indexOf('%') !== -1 ? decodeURIComponent(O) : O;
  }
  function x(O) {
    return n.call(O) === '[object Date]';
  }
  function w(O, L) {
    try {
      return L(O);
    } catch {
      return O;
    }
  }
  return Xo;
}
var ea = ny();
function ry() {
  const n = typeof global > 'u' ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  return typeof n == 'boolean' ? n : typeof document == 'object' && typeof document.cookie == 'string';
}
function iy(n) {
  return typeof n == 'string' ? ea.parse(n) : typeof n == 'object' && n !== null ? n : {};
}
function yl(n, i = {}) {
  const o = oy(n);
  if (!i.doNotParse)
    try {
      return JSON.parse(o);
    } catch {}
  return n;
}
function oy(n) {
  return n && n[0] === 'j' && n[1] === ':' ? n.substr(2) : n;
}
class em {
  constructor(i, o = {}) {
    (this.changeListeners = []),
      (this.HAS_DOCUMENT_COOKIE = !1),
      (this.update = () => {
        if (!this.HAS_DOCUMENT_COOKIE) return;
        const l = this.cookies;
        (this.cookies = ea.parse(document.cookie)), this._checkChanges(l);
      });
    const s = typeof document > 'u' ? '' : document.cookie;
    (this.cookies = iy(i || s)), (this.defaultSetOptions = o), (this.HAS_DOCUMENT_COOKIE = ry());
  }
  _emitChange(i) {
    for (let o = 0; o < this.changeListeners.length; ++o) this.changeListeners[o](i);
  }
  _checkChanges(i) {
    new Set(Object.keys(i).concat(Object.keys(this.cookies))).forEach((s) => {
      i[s] !== this.cookies[s] && this._emitChange({ name: s, value: yl(this.cookies[s]) });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(i, o = {}) {
    return o.doNotUpdate || this.update(), yl(this.cookies[i], o);
  }
  getAll(i = {}) {
    i.doNotUpdate || this.update();
    const o = {};
    for (let s in this.cookies) o[s] = yl(this.cookies[s], i);
    return o;
  }
  set(i, o, s) {
    s ? (s = Object.assign(Object.assign({}, this.defaultSetOptions), s)) : (s = this.defaultSetOptions);
    const l = typeof o == 'string' ? o : JSON.stringify(o);
    (this.cookies = Object.assign(Object.assign({}, this.cookies), { [i]: l })),
      this.HAS_DOCUMENT_COOKIE && (document.cookie = ea.serialize(i, l, s)),
      this._emitChange({ name: i, value: o, options: s });
  }
  remove(i, o) {
    const s = (o = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), o), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    }));
    (this.cookies = Object.assign({}, this.cookies)),
      delete this.cookies[i],
      this.HAS_DOCUMENT_COOKIE && (document.cookie = ea.serialize(i, '', s)),
      this._emitChange({ name: i, value: void 0, options: o });
  }
  addChangeListener(i) {
    this.changeListeners.push(i),
      this.HAS_DOCUMENT_COOKIE &&
        this.changeListeners.length === 1 &&
        (typeof window == 'object' && 'cookieStore' in window
          ? window.cookieStore.addEventListener('change', this.update)
          : this._startPolling());
  }
  removeChangeListener(i) {
    const o = this.changeListeners.indexOf(i);
    o >= 0 && this.changeListeners.splice(o, 1),
      this.HAS_DOCUMENT_COOKIE &&
        this.changeListeners.length === 0 &&
        (typeof window == 'object' && 'cookieStore' in window
          ? window.cookieStore.removeEventListener('change', this.update)
          : this._stopPolling());
  }
}
const tm = _.createContext(new em()),
  { Provider: ay, Consumer: iC } = tm;
class sy extends _.Component {
  constructor(i) {
    super(i), i.cookies ? (this.cookies = i.cookies) : (this.cookies = new em(void 0, i.defaultSetOptions));
  }
  render() {
    return _.createElement(ay, { value: this.cookies }, this.props.children);
  }
}
var wl = { exports: {} },
  he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld;
function ly() {
  if (Ld) return he;
  Ld = 1;
  var n = typeof Symbol == 'function' && Symbol.for,
    i = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    s = n ? Symbol.for('react.fragment') : 60107,
    l = n ? Symbol.for('react.strict_mode') : 60108,
    c = n ? Symbol.for('react.profiler') : 60114,
    d = n ? Symbol.for('react.provider') : 60109,
    p = n ? Symbol.for('react.context') : 60110,
    h = n ? Symbol.for('react.async_mode') : 60111,
    g = n ? Symbol.for('react.concurrent_mode') : 60111,
    v = n ? Symbol.for('react.forward_ref') : 60112,
    x = n ? Symbol.for('react.suspense') : 60113,
    w = n ? Symbol.for('react.suspense_list') : 60120,
    O = n ? Symbol.for('react.memo') : 60115,
    L = n ? Symbol.for('react.lazy') : 60116,
    P = n ? Symbol.for('react.block') : 60121,
    T = n ? Symbol.for('react.fundamental') : 60117,
    V = n ? Symbol.for('react.responder') : 60118,
    A = n ? Symbol.for('react.scope') : 60119;
  function z(R) {
    if (typeof R == 'object' && R !== null) {
      var J = R.$$typeof;
      switch (J) {
        case i:
          switch (((R = R.type), R)) {
            case h:
            case g:
            case s:
            case c:
            case l:
            case x:
              return R;
            default:
              switch (((R = R && R.$$typeof), R)) {
                case p:
                case v:
                case L:
                case O:
                case d:
                  return R;
                default:
                  return J;
              }
          }
        case o:
          return J;
      }
    }
  }
  function U(R) {
    return z(R) === g;
  }
  return (
    (he.AsyncMode = h),
    (he.ConcurrentMode = g),
    (he.ContextConsumer = p),
    (he.ContextProvider = d),
    (he.Element = i),
    (he.ForwardRef = v),
    (he.Fragment = s),
    (he.Lazy = L),
    (he.Memo = O),
    (he.Portal = o),
    (he.Profiler = c),
    (he.StrictMode = l),
    (he.Suspense = x),
    (he.isAsyncMode = function (R) {
      return U(R) || z(R) === h;
    }),
    (he.isConcurrentMode = U),
    (he.isContextConsumer = function (R) {
      return z(R) === p;
    }),
    (he.isContextProvider = function (R) {
      return z(R) === d;
    }),
    (he.isElement = function (R) {
      return typeof R == 'object' && R !== null && R.$$typeof === i;
    }),
    (he.isForwardRef = function (R) {
      return z(R) === v;
    }),
    (he.isFragment = function (R) {
      return z(R) === s;
    }),
    (he.isLazy = function (R) {
      return z(R) === L;
    }),
    (he.isMemo = function (R) {
      return z(R) === O;
    }),
    (he.isPortal = function (R) {
      return z(R) === o;
    }),
    (he.isProfiler = function (R) {
      return z(R) === c;
    }),
    (he.isStrictMode = function (R) {
      return z(R) === l;
    }),
    (he.isSuspense = function (R) {
      return z(R) === x;
    }),
    (he.isValidElementType = function (R) {
      return (
        typeof R == 'string' ||
        typeof R == 'function' ||
        R === s ||
        R === g ||
        R === c ||
        R === l ||
        R === x ||
        R === w ||
        (typeof R == 'object' &&
          R !== null &&
          (R.$$typeof === L ||
            R.$$typeof === O ||
            R.$$typeof === d ||
            R.$$typeof === p ||
            R.$$typeof === v ||
            R.$$typeof === T ||
            R.$$typeof === V ||
            R.$$typeof === A ||
            R.$$typeof === P))
      );
    }),
    (he.typeOf = z),
    he
  );
}
var _d;
function uy() {
  return _d || ((_d = 1), (wl.exports = ly())), wl.exports;
}
var xl, Rd;
function cy() {
  if (Rd) return xl;
  Rd = 1;
  var n = uy(),
    i = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    s = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    l = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    c = {};
  (c[n.ForwardRef] = s), (c[n.Memo] = l);
  function d(L) {
    return n.isMemo(L) ? l : c[L.$$typeof] || i;
  }
  var p = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    v = Object.getOwnPropertyDescriptor,
    x = Object.getPrototypeOf,
    w = Object.prototype;
  function O(L, P, T) {
    if (typeof P != 'string') {
      if (w) {
        var V = x(P);
        V && V !== w && O(L, V, T);
      }
      var A = h(P);
      g && (A = A.concat(g(P)));
      for (var z = d(L), U = d(P), R = 0; R < A.length; ++R) {
        var J = A[R];
        if (!o[J] && !(T && T[J]) && !(U && U[J]) && !(z && z[J])) {
          var te = v(P, J);
          try {
            p(L, J, te);
          } catch {}
        }
      }
    }
    return L;
  }
  return (xl = O), xl;
}
cy();
function fy() {
  return typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
}
function dy(n, i) {
  const o = _.useContext(tm);
  if (!o) throw new Error('Missing <CookiesProvider>');
  const l = Object.assign(Object.assign({}, { doNotUpdate: !0 }), i),
    [c, d] = _.useState(() => o.getAll(l));
  fy() &&
    _.useLayoutEffect(() => {
      function v() {
        const x = o.getAll(l);
        py(n || null, x, c) && d(x);
      }
      return (
        o.addChangeListener(v),
        () => {
          o.removeChangeListener(v);
        }
      );
    }, [o, c]);
  const p = _.useMemo(() => o.set.bind(o), [o]),
    h = _.useMemo(() => o.remove.bind(o), [o]),
    g = _.useMemo(() => o.update.bind(o), [o]);
  return [c, p, h, g];
}
function py(n, i, o) {
  if (!n) return !0;
  for (let s of n) if (i[s] !== o[s]) return !0;
  return !1;
}
const my = {
  type: 'logger',
  log(n) {
    this.output('log', n);
  },
  warn(n) {
    this.output('warn', n);
  },
  error(n) {
    this.output('error', n);
  },
  output(n, i) {
    console && console[n] && console[n].apply(console, i);
  },
};
class oa {
  constructor(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(i, o);
  }
  init(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = o.prefix || 'i18next:'), (this.logger = i || my), (this.options = o), (this.debug = o.debug);
  }
  log() {
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return this.forward(o, 'log', '', !0);
  }
  warn() {
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return this.forward(o, 'warn', '', !0);
  }
  error() {
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return this.forward(o, 'error', '');
  }
  deprecate() {
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return this.forward(o, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(i, o, s, l) {
    return l && !this.debug
      ? null
      : (typeof i[0] == 'string' && (i[0] = `${s}${this.prefix} ${i[0]}`), this.logger[o](i));
  }
  create(i) {
    return new oa(this.logger, { prefix: `${this.prefix}:${i}:`, ...this.options });
  }
  clone(i) {
    return (i = i || this.options), (i.prefix = i.prefix || this.prefix), new oa(this.logger, i);
  }
}
var Mt = new oa();
class ha {
  constructor() {
    this.observers = {};
  }
  on(i, o) {
    return (
      i.split(' ').forEach((s) => {
        this.observers[s] || (this.observers[s] = new Map());
        const l = this.observers[s].get(o) || 0;
        this.observers[s].set(o, l + 1);
      }),
      this
    );
  }
  off(i, o) {
    if (this.observers[i]) {
      if (!o) {
        delete this.observers[i];
        return;
      }
      this.observers[i].delete(o);
    }
  }
  emit(i) {
    for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) s[l - 1] = arguments[l];
    this.observers[i] &&
      Array.from(this.observers[i].entries()).forEach((d) => {
        let [p, h] = d;
        for (let g = 0; g < h; g++) p(...s);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((d) => {
          let [p, h] = d;
          for (let g = 0; g < h; g++) p.apply(p, [i, ...s]);
        });
  }
}
const wi = () => {
    let n, i;
    const o = new Promise((s, l) => {
      (n = s), (i = l);
    });
    return (o.resolve = n), (o.reject = i), o;
  },
  Id = (n) => (n == null ? '' : '' + n),
  hy = (n, i, o) => {
    n.forEach((s) => {
      i[s] && (o[s] = i[s]);
    });
  },
  gy = /###/g,
  Dd = (n) => (n && n.indexOf('###') > -1 ? n.replace(gy, '.') : n),
  Ad = (n) => !n || typeof n == 'string',
  Ei = (n, i, o) => {
    const s = typeof i != 'string' ? i : i.split('.');
    let l = 0;
    for (; l < s.length - 1; ) {
      if (Ad(n)) return {};
      const c = Dd(s[l]);
      !n[c] && o && (n[c] = new o()), Object.prototype.hasOwnProperty.call(n, c) ? (n = n[c]) : (n = {}), ++l;
    }
    return Ad(n) ? {} : { obj: n, k: Dd(s[l]) };
  },
  Md = (n, i, o) => {
    const { obj: s, k: l } = Ei(n, i, Object);
    if (s !== void 0 || i.length === 1) {
      s[l] = o;
      return;
    }
    let c = i[i.length - 1],
      d = i.slice(0, i.length - 1),
      p = Ei(n, d, Object);
    for (; p.obj === void 0 && d.length; )
      (c = `${d[d.length - 1]}.${c}`),
        (d = d.slice(0, d.length - 1)),
        (p = Ei(n, d, Object)),
        p && p.obj && typeof p.obj[`${p.k}.${c}`] < 'u' && (p.obj = void 0);
    p.obj[`${p.k}.${c}`] = o;
  },
  vy = (n, i, o, s) => {
    const { obj: l, k: c } = Ei(n, i, Object);
    (l[c] = l[c] || []), l[c].push(o);
  },
  aa = (n, i) => {
    const { obj: o, k: s } = Ei(n, i);
    if (o) return o[s];
  },
  yy = (n, i, o) => {
    const s = aa(n, o);
    return s !== void 0 ? s : aa(i, o);
  },
  nm = (n, i, o) => {
    for (const s in i)
      s !== '__proto__' &&
        s !== 'constructor' &&
        (s in n
          ? typeof n[s] == 'string' || n[s] instanceof String || typeof i[s] == 'string' || i[s] instanceof String
            ? o && (n[s] = i[s])
            : nm(n[s], i[s], o)
          : (n[s] = i[s]));
    return n;
  },
  Cr = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var wy = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const xy = (n) => (typeof n == 'string' ? n.replace(/[&<>"'\/]/g, (i) => wy[i]) : n);
class Sy {
  constructor(i) {
    (this.capacity = i), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(i) {
    const o = this.regExpMap.get(i);
    if (o !== void 0) return o;
    const s = new RegExp(i);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(i, s),
      this.regExpQueue.push(i),
      s
    );
  }
}
const ky = [' ', ',', '?', '!', ';'],
  Cy = new Sy(20),
  Ey = (n, i, o) => {
    (i = i || ''), (o = o || '');
    const s = ky.filter((d) => i.indexOf(d) < 0 && o.indexOf(d) < 0);
    if (s.length === 0) return !0;
    const l = Cy.getRegExp(`(${s.map((d) => (d === '?' ? '\\?' : d)).join('|')})`);
    let c = !l.test(n);
    if (!c) {
      const d = n.indexOf(o);
      d > 0 && !l.test(n.substring(0, d)) && (c = !0);
    }
    return c;
  },
  Ml = function (n, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!n) return;
    if (n[i]) return n[i];
    const s = i.split(o);
    let l = n;
    for (let c = 0; c < s.length; ) {
      if (!l || typeof l != 'object') return;
      let d,
        p = '';
      for (let h = c; h < s.length; ++h)
        if ((h !== c && (p += o), (p += s[h]), (d = l[p]), d !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof d) > -1 && h < s.length - 1) continue;
          c += h - c + 1;
          break;
        }
      l = d;
    }
    return l;
  },
  sa = (n) => (n && n.indexOf('_') > 0 ? n.replace('_', '-') : n);
class Fd extends ha {
  constructor(i) {
    let o =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = i || {}),
      (this.options = o),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(i) {
    this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
  }
  removeNamespaces(i) {
    const o = this.options.ns.indexOf(i);
    o > -1 && this.options.ns.splice(o, 1);
  }
  getResource(i, o, s) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
      d = l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let p;
    i.indexOf('.') > -1
      ? (p = i.split('.'))
      : ((p = [i, o]),
        s && (Array.isArray(s) ? p.push(...s) : typeof s == 'string' && c ? p.push(...s.split(c)) : p.push(s)));
    const h = aa(this.data, p);
    return (
      !h && !o && !s && i.indexOf('.') > -1 && ((i = p[0]), (o = p[1]), (s = p.slice(2).join('.'))),
      h || !d || typeof s != 'string' ? h : Ml(this.data && this.data[i] && this.data[i][o], s, c)
    );
  }
  addResource(i, o, s, l) {
    let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let p = [i, o];
    s && (p = p.concat(d ? s.split(d) : s)),
      i.indexOf('.') > -1 && ((p = i.split('.')), (l = o), (o = p[1])),
      this.addNamespaces(o),
      Md(this.data, p, l),
      c.silent || this.emit('added', i, o, s, l);
  }
  addResources(i, o, s) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const c in s)
      (typeof s[c] == 'string' || Array.isArray(s[c])) && this.addResource(i, o, c, s[c], { silent: !0 });
    l.silent || this.emit('added', i, o, s);
  }
  addResourceBundle(i, o, s, l, c) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1, skipCopy: !1 },
      p = [i, o];
    i.indexOf('.') > -1 && ((p = i.split('.')), (l = s), (s = o), (o = p[1])), this.addNamespaces(o);
    let h = aa(this.data, p) || {};
    d.skipCopy || (s = JSON.parse(JSON.stringify(s))),
      l ? nm(h, s, c) : (h = { ...h, ...s }),
      Md(this.data, p, h),
      d.silent || this.emit('added', i, o, s);
  }
  removeResourceBundle(i, o) {
    this.hasResourceBundle(i, o) && delete this.data[i][o], this.removeNamespaces(o), this.emit('removed', i, o);
  }
  hasResourceBundle(i, o) {
    return this.getResource(i, o) !== void 0;
  }
  getResourceBundle(i, o) {
    return (
      o || (o = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1' ? { ...this.getResource(i, o) } : this.getResource(i, o)
    );
  }
  getDataByLanguage(i) {
    return this.data[i];
  }
  hasLanguageSomeTranslations(i) {
    const o = this.getDataByLanguage(i);
    return !!((o && Object.keys(o)) || []).find((l) => o[l] && Object.keys(o[l]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var rm = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, i, o, s, l) {
    return (
      n.forEach((c) => {
        this.processors[c] && (i = this.processors[c].process(i, o, s, l));
      }),
      i
    );
  },
};
const zd = {};
class la extends ha {
  constructor(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      hy(
        ['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'],
        i,
        this
      ),
      (this.options = o),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Mt.create('translator'));
  }
  changeLanguage(i) {
    i && (this.language = i);
  }
  exists(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (i == null) return !1;
    const s = this.resolve(i, o);
    return s && s.res !== void 0;
  }
  extractFromKey(i, o) {
    let s = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ':');
    const l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let c = o.ns || this.options.defaultNS || [];
    const d = s && i.indexOf(s) > -1,
      p =
        !this.options.userDefinedKeySeparator &&
        !o.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !o.nsSeparator &&
        !Ey(i, s, l);
    if (d && !p) {
      const h = i.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0) return { key: i, namespaces: c };
      const g = i.split(s);
      (s !== l || (s === l && this.options.ns.indexOf(g[0]) > -1)) && (c = g.shift()), (i = g.join(l));
    }
    return typeof c == 'string' && (c = [c]), { key: i, namespaces: c };
  }
  translate(i, o, s) {
    if (
      (typeof o != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (o = this.options.overloadTranslationOptionHandler(arguments)),
      typeof o == 'object' && (o = { ...o }),
      o || (o = {}),
      i == null)
    )
      return '';
    Array.isArray(i) || (i = [String(i)]);
    const l = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails,
      c = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      { key: d, namespaces: p } = this.extractFromKey(i[i.length - 1], o),
      h = p[p.length - 1],
      g = o.lng || this.language,
      v = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (g && g.toLowerCase() === 'cimode') {
      if (v) {
        const U = o.nsSeparator || this.options.nsSeparator;
        return l
          ? {
              res: `${h}${U}${d}`,
              usedKey: d,
              exactUsedKey: d,
              usedLng: g,
              usedNS: h,
              usedParams: this.getUsedParamsDetails(o),
            }
          : `${h}${U}${d}`;
      }
      return l
        ? { res: d, usedKey: d, exactUsedKey: d, usedLng: g, usedNS: h, usedParams: this.getUsedParamsDetails(o) }
        : d;
    }
    const x = this.resolve(i, o);
    let w = x && x.res;
    const O = (x && x.usedKey) || d,
      L = (x && x.exactUsedKey) || d,
      P = Object.prototype.toString.apply(w),
      T = ['[object Number]', '[object Function]', '[object RegExp]'],
      V = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays,
      A = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      A &&
      w &&
      typeof w != 'string' &&
      typeof w != 'boolean' &&
      typeof w != 'number' &&
      T.indexOf(P) < 0 &&
      !(typeof V == 'string' && Array.isArray(w))
    ) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const U = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(O, w, { ...o, ns: p })
          : `key '${d} (${this.language})' returned an object instead of string.`;
        return l ? ((x.res = U), (x.usedParams = this.getUsedParamsDetails(o)), x) : U;
      }
      if (c) {
        const U = Array.isArray(w),
          R = U ? [] : {},
          J = U ? L : O;
        for (const te in w)
          if (Object.prototype.hasOwnProperty.call(w, te)) {
            const re = `${J}${c}${te}`;
            (R[te] = this.translate(re, { ...o, joinArrays: !1, ns: p })), R[te] === re && (R[te] = w[te]);
          }
        w = R;
      }
    } else if (A && typeof V == 'string' && Array.isArray(w))
      (w = w.join(V)), w && (w = this.extendTranslation(w, i, o, s));
    else {
      let U = !1,
        R = !1;
      const J = o.count !== void 0 && typeof o.count != 'string',
        te = la.hasDefaultValue(o),
        re = J ? this.pluralResolver.getSuffix(g, o.count, o) : '',
        de = o.ordinal && J ? this.pluralResolver.getSuffix(g, o.count, { ordinal: !1 }) : '',
        xe = J && !o.ordinal && o.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        Se =
          (xe && o[`defaultValue${this.options.pluralSeparator}zero`]) ||
          o[`defaultValue${re}`] ||
          o[`defaultValue${de}`] ||
          o.defaultValue;
      !this.isValidLookup(w) && te && ((U = !0), (w = Se)), this.isValidLookup(w) || ((R = !0), (w = d));
      const We = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && R ? void 0 : w,
        Me = te && Se !== w && this.options.updateMissing;
      if (R || U || Me) {
        if ((this.logger.log(Me ? 'updateKey' : 'missingKey', g, h, d, Me ? Se : w), c)) {
          const $ = this.resolve(d, { ...o, keySeparator: !1 });
          $ &&
            $.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let $e = [];
        const Re = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && Re && Re[0])
          for (let $ = 0; $ < Re.length; $++) $e.push(Re[$]);
        else
          this.options.saveMissingTo === 'all'
            ? ($e = this.languageUtils.toResolveHierarchy(o.lng || this.language))
            : $e.push(o.lng || this.language);
        const ye = ($, G, B) => {
          const C = te && B !== w ? B : We;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler($, h, G, C, Me, o)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing($, h, G, C, Me, o),
            this.emit('missingKey', $, h, G, w);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && J
            ? $e.forEach(($) => {
                const G = this.pluralResolver.getSuffixes($, o);
                xe &&
                  o[`defaultValue${this.options.pluralSeparator}zero`] &&
                  G.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  G.push(`${this.options.pluralSeparator}zero`),
                  G.forEach((B) => {
                    ye([$], d + B, o[`defaultValue${B}`] || Se);
                  });
              })
            : ye($e, d, Se));
      }
      (w = this.extendTranslation(w, i, o, x, s)),
        R && w === d && this.options.appendNamespaceToMissingKey && (w = `${h}:${d}`),
        (R || U) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (w = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${h}:${d}` : d,
                U ? w : void 0
              ))
            : (w = this.options.parseMissingKeyHandler(w)));
    }
    return l ? ((x.res = w), (x.usedParams = this.getUsedParamsDetails(o)), x) : w;
  }
  extendTranslation(i, o, s, l, c) {
    var d = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      i = this.i18nFormat.parse(
        i,
        { ...this.options.interpolation.defaultVariables, ...s },
        s.lng || this.language || l.usedLng,
        l.usedNS,
        l.usedKey,
        { resolved: l }
      );
    else if (!s.skipInterpolation) {
      s.interpolation &&
        this.interpolator.init({ ...s, interpolation: { ...this.options.interpolation, ...s.interpolation } });
      const g =
        typeof i == 'string' &&
        (s && s.interpolation && s.interpolation.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let v;
      if (g) {
        const w = i.match(this.interpolator.nestingRegexp);
        v = w && w.length;
      }
      let x = s.replace && typeof s.replace != 'string' ? s.replace : s;
      if (
        (this.options.interpolation.defaultVariables && (x = { ...this.options.interpolation.defaultVariables, ...x }),
        (i = this.interpolator.interpolate(i, x, s.lng || this.language || l.usedLng, s)),
        g)
      ) {
        const w = i.match(this.interpolator.nestingRegexp),
          O = w && w.length;
        v < O && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== 'v1' && l && l.res && (s.lng = this.language || l.usedLng),
        s.nest !== !1 &&
          (i = this.interpolator.nest(
            i,
            function () {
              for (var w = arguments.length, O = new Array(w), L = 0; L < w; L++) O[L] = arguments[L];
              return c && c[0] === O[0] && !s.context
                ? (d.logger.warn(`It seems you are nesting recursively key: ${O[0]} in key: ${o[0]}`), null)
                : d.translate(...O, o);
            },
            s
          )),
        s.interpolation && this.interpolator.reset();
    }
    const p = s.postProcess || this.options.postProcess,
      h = typeof p == 'string' ? [p] : p;
    return (
      i != null &&
        h &&
        h.length &&
        s.applyPostProcessor !== !1 &&
        (i = rm.handle(
          h,
          i,
          o,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...l, usedParams: this.getUsedParamsDetails(s) }, ...s }
            : s,
          this
        )),
      i
    );
  }
  resolve(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s,
      l,
      c,
      d,
      p;
    return (
      typeof i == 'string' && (i = [i]),
      i.forEach((h) => {
        if (this.isValidLookup(s)) return;
        const g = this.extractFromKey(h, o),
          v = g.key;
        l = v;
        let x = g.namespaces;
        this.options.fallbackNS && (x = x.concat(this.options.fallbackNS));
        const w = o.count !== void 0 && typeof o.count != 'string',
          O = w && !o.ordinal && o.count === 0 && this.pluralResolver.shouldUseIntlApi(),
          L =
            o.context !== void 0 && (typeof o.context == 'string' || typeof o.context == 'number') && o.context !== '',
          P = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
        x.forEach((T) => {
          this.isValidLookup(s) ||
            ((p = T),
            !zd[`${P[0]}-${T}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(p) &&
              ((zd[`${P[0]}-${T}`] = !0),
              this.logger.warn(
                `key "${l}" for languages "${P.join(', ')}" won't get resolved as namespace "${p}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            P.forEach((V) => {
              if (this.isValidLookup(s)) return;
              d = V;
              const A = [v];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(A, v, V, T, o);
              else {
                let U;
                w && (U = this.pluralResolver.getSuffix(V, o.count, o));
                const R = `${this.options.pluralSeparator}zero`,
                  J = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (w &&
                    (A.push(v + U),
                    o.ordinal && U.indexOf(J) === 0 && A.push(v + U.replace(J, this.options.pluralSeparator)),
                    O && A.push(v + R)),
                  L)
                ) {
                  const te = `${v}${this.options.contextSeparator}${o.context}`;
                  A.push(te),
                    w &&
                      (A.push(te + U),
                      o.ordinal && U.indexOf(J) === 0 && A.push(te + U.replace(J, this.options.pluralSeparator)),
                      O && A.push(te + R));
                }
              }
              let z;
              for (; (z = A.pop()); ) this.isValidLookup(s) || ((c = z), (s = this.getResource(V, T, z, o)));
            }));
        });
      }),
      { res: s, usedKey: l, exactUsedKey: c, usedLng: d, usedNS: p }
    );
  }
  isValidLookup(i) {
    return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === '');
  }
  getResource(i, o, s) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(i, o, s, l)
      : this.resourceStore.getResource(i, o, s, l);
  }
  getUsedParamsDetails() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const o = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      s = i.replace && typeof i.replace != 'string';
    let l = s ? i.replace : i;
    if (
      (s && typeof i.count < 'u' && (l.count = i.count),
      this.options.interpolation.defaultVariables && (l = { ...this.options.interpolation.defaultVariables, ...l }),
      !s)
    ) {
      l = { ...l };
      for (const c of o) delete l[c];
    }
    return l;
  }
  static hasDefaultValue(i) {
    const o = 'defaultValue';
    for (const s in i)
      if (Object.prototype.hasOwnProperty.call(i, s) && o === s.substring(0, o.length) && i[s] !== void 0) return !0;
    return !1;
  }
}
const Sl = (n) => n.charAt(0).toUpperCase() + n.slice(1);
class jd {
  constructor(i) {
    (this.options = i),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Mt.create('languageUtils'));
  }
  getScriptPartFromCode(i) {
    if (((i = sa(i)), !i || i.indexOf('-') < 0)) return null;
    const o = i.split('-');
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(o.join('-'));
  }
  getLanguagePartFromCode(i) {
    if (((i = sa(i)), !i || i.indexOf('-') < 0)) return i;
    const o = i.split('-');
    return this.formatLanguageCode(o[0]);
  }
  formatLanguageCode(i) {
    if (typeof i == 'string' && i.indexOf('-') > -1) {
      const o = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let s = i.split('-');
      return (
        this.options.lowerCaseLng
          ? (s = s.map((l) => l.toLowerCase()))
          : s.length === 2
          ? ((s[0] = s[0].toLowerCase()),
            (s[1] = s[1].toUpperCase()),
            o.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Sl(s[1].toLowerCase())))
          : s.length === 3 &&
            ((s[0] = s[0].toLowerCase()),
            s[1].length === 2 && (s[1] = s[1].toUpperCase()),
            s[0] !== 'sgn' && s[2].length === 2 && (s[2] = s[2].toUpperCase()),
            o.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Sl(s[1].toLowerCase())),
            o.indexOf(s[2].toLowerCase()) > -1 && (s[2] = Sl(s[2].toLowerCase()))),
        s.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? i.toLowerCase() : i;
  }
  isSupportedCode(i) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (i = this.getLanguagePartFromCode(i)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(i) > -1
    );
  }
  getBestMatchFromCodes(i) {
    if (!i) return null;
    let o;
    return (
      i.forEach((s) => {
        if (o) return;
        const l = this.formatLanguageCode(s);
        (!this.options.supportedLngs || this.isSupportedCode(l)) && (o = l);
      }),
      !o &&
        this.options.supportedLngs &&
        i.forEach((s) => {
          if (o) return;
          const l = this.getLanguagePartFromCode(s);
          if (this.isSupportedCode(l)) return (o = l);
          o = this.options.supportedLngs.find((c) => {
            if (c === l) return c;
            if (
              !(c.indexOf('-') < 0 && l.indexOf('-') < 0) &&
              ((c.indexOf('-') > 0 && l.indexOf('-') < 0 && c.substring(0, c.indexOf('-')) === l) ||
                (c.indexOf(l) === 0 && l.length > 1))
            )
              return c;
          });
        }),
      o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]),
      o
    );
  }
  getFallbackCodes(i, o) {
    if (!i) return [];
    if ((typeof i == 'function' && (i = i(o)), typeof i == 'string' && (i = [i]), Array.isArray(i))) return i;
    if (!o) return i.default || [];
    let s = i[o];
    return (
      s || (s = i[this.getScriptPartFromCode(o)]),
      s || (s = i[this.formatLanguageCode(o)]),
      s || (s = i[this.getLanguagePartFromCode(o)]),
      s || (s = i.default),
      s || []
    );
  }
  toResolveHierarchy(i, o) {
    const s = this.getFallbackCodes(o || this.options.fallbackLng || [], i),
      l = [],
      c = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? l.push(d)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
      };
    return (
      typeof i == 'string' && (i.indexOf('-') > -1 || i.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && c(this.formatLanguageCode(i)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            c(this.getScriptPartFromCode(i)),
          this.options.load !== 'currentOnly' && c(this.getLanguagePartFromCode(i)))
        : typeof i == 'string' && c(this.formatLanguageCode(i)),
      s.forEach((d) => {
        l.indexOf(d) < 0 && c(this.formatLanguageCode(d));
      }),
      l
    );
  }
}
let Py = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    { lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  by = {
    1: (n) => +(n > 1),
    2: (n) => +(n != 1),
    3: (n) => 0,
    4: (n) =>
      n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,
    5: (n) => (n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5),
    6: (n) => (n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2),
    7: (n) => (n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
    8: (n) => (n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3),
    9: (n) => +(n >= 2),
    10: (n) => (n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4),
    11: (n) => (n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3),
    12: (n) => +(n % 10 != 1 || n % 100 == 11),
    13: (n) => +(n !== 0),
    14: (n) => (n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3),
    15: (n) => (n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
    16: (n) => (n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2),
    17: (n) => (n == 1 || (n % 10 == 1 && n % 100 != 11) ? 0 : 1),
    18: (n) => (n == 0 ? 0 : n == 1 ? 1 : 2),
    19: (n) => (n == 1 ? 0 : n == 0 || (n % 100 > 1 && n % 100 < 11) ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3),
    20: (n) => (n == 1 ? 0 : n == 0 || (n % 100 > 0 && n % 100 < 20) ? 1 : 2),
    21: (n) => (n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0),
    22: (n) => (n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3),
  };
const Oy = ['v1', 'v2', 'v3'],
  Ny = ['v4'],
  $d = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Ty = () => {
    const n = {};
    return (
      Py.forEach((i) => {
        i.lngs.forEach((o) => {
          n[o] = { numbers: i.nr, plurals: by[i.fc] };
        });
      }),
      n
    );
  };
class Ly {
  constructor(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = i),
      (this.options = o),
      (this.logger = Mt.create('pluralResolver')),
      (!this.options.compatibilityJSON || Ny.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = Ty()),
      (this.pluralRulesCache = {});
  }
  addRule(i, o) {
    this.rules[i] = o;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const s = sa(i === 'dev' ? 'en' : i),
          l = o.ordinal ? 'ordinal' : 'cardinal',
          c = JSON.stringify({ cleanedCode: s, type: l });
        if (c in this.pluralRulesCache) return this.pluralRulesCache[c];
        const d = new Intl.PluralRules(s, { type: l });
        return (this.pluralRulesCache[c] = d), d;
      } catch {
        return;
      }
    return this.rules[i] || this.rules[this.languageUtils.getLanguagePartFromCode(i)];
  }
  needsPlural(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(i, o);
    return this.shouldUseIntlApi() ? s && s.resolvedOptions().pluralCategories.length > 1 : s && s.numbers.length > 1;
  }
  getPluralFormsOfKey(i, o) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(i, s).map((l) => `${o}${l}`);
  }
  getSuffixes(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(i, o);
    return s
      ? this.shouldUseIntlApi()
        ? s
            .resolvedOptions()
            .pluralCategories.sort((l, c) => $d[l] - $d[c])
            .map((l) => `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ''}${l}`)
        : s.numbers.map((l) => this.getSuffix(i, l, o))
      : [];
  }
  getSuffix(i, o) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(i, s);
    return l
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ''}${l.select(o)}`
        : this.getSuffixRetroCompatible(l, o)
      : (this.logger.warn(`no plural rule found for: ${i}`), '');
  }
  getSuffixRetroCompatible(i, o) {
    const s = i.noAbs ? i.plurals(o) : i.plurals(Math.abs(o));
    let l = i.numbers[s];
    this.options.simplifyPluralSuffix &&
      i.numbers.length === 2 &&
      i.numbers[0] === 1 &&
      (l === 2 ? (l = 'plural') : l === 1 && (l = ''));
    const c = () => (this.options.prepend && l.toString() ? this.options.prepend + l.toString() : l.toString());
    return this.options.compatibilityJSON === 'v1'
      ? l === 1
        ? ''
        : typeof l == 'number'
        ? `_plural_${l.toString()}`
        : c()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix && i.numbers.length === 2 && i.numbers[0] === 1)
      ? c()
      : this.options.prepend && s.toString()
      ? this.options.prepend + s.toString()
      : s.toString();
  }
  shouldUseIntlApi() {
    return !Oy.includes(this.options.compatibilityJSON);
  }
}
const Ud = function (n, i, o) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      c = yy(n, i, o);
    return !c && l && typeof o == 'string' && ((c = Ml(n, o, s)), c === void 0 && (c = Ml(i, o, s))), c;
  },
  kl = (n) => n.replace(/\$/g, '$$$$');
class _y {
  constructor() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Mt.create('interpolator')),
      (this.options = i),
      (this.format = (i.interpolation && i.interpolation.format) || ((o) => o)),
      this.init(i);
  }
  init() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    i.interpolation || (i.interpolation = { escapeValue: !0 });
    const {
      escape: o,
      escapeValue: s,
      useRawValueToEscape: l,
      prefix: c,
      prefixEscaped: d,
      suffix: p,
      suffixEscaped: h,
      formatSeparator: g,
      unescapeSuffix: v,
      unescapePrefix: x,
      nestingPrefix: w,
      nestingPrefixEscaped: O,
      nestingSuffix: L,
      nestingSuffixEscaped: P,
      nestingOptionsSeparator: T,
      maxReplaces: V,
      alwaysFormat: A,
    } = i.interpolation;
    (this.escape = o !== void 0 ? o : xy),
      (this.escapeValue = s !== void 0 ? s : !0),
      (this.useRawValueToEscape = l !== void 0 ? l : !1),
      (this.prefix = c ? Cr(c) : d || '{{'),
      (this.suffix = p ? Cr(p) : h || '}}'),
      (this.formatSeparator = g || ','),
      (this.unescapePrefix = v ? '' : x || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : v || ''),
      (this.nestingPrefix = w ? Cr(w) : O || Cr('$t(')),
      (this.nestingSuffix = L ? Cr(L) : P || Cr(')')),
      (this.nestingOptionsSeparator = T || ','),
      (this.maxReplaces = V || 1e3),
      (this.alwaysFormat = A !== void 0 ? A : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const i = (o, s) => (o && o.source === s ? ((o.lastIndex = 0), o) : new RegExp(s, 'g'));
    (this.regexp = i(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = i(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = i(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`));
  }
  interpolate(i, o, s, l) {
    let c, d, p;
    const h = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {},
      g = (O) => {
        if (O.indexOf(this.formatSeparator) < 0) {
          const V = Ud(o, h, O, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat ? this.format(V, void 0, s, { ...l, ...o, interpolationkey: O }) : V;
        }
        const L = O.split(this.formatSeparator),
          P = L.shift().trim(),
          T = L.join(this.formatSeparator).trim();
        return this.format(Ud(o, h, P, this.options.keySeparator, this.options.ignoreJSONStructure), T, s, {
          ...l,
          ...o,
          interpolationkey: P,
        });
      };
    this.resetRegExp();
    const v = (l && l.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      x =
        l && l.interpolation && l.interpolation.skipOnVariables !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (O) => kl(O) },
        { regex: this.regexp, safeValue: (O) => (this.escapeValue ? kl(this.escape(O)) : kl(O)) },
      ].forEach((O) => {
        for (p = 0; (c = O.regex.exec(i)); ) {
          const L = c[1].trim();
          if (((d = g(L)), d === void 0))
            if (typeof v == 'function') {
              const T = v(i, c, l);
              d = typeof T == 'string' ? T : '';
            } else if (l && Object.prototype.hasOwnProperty.call(l, L)) d = '';
            else if (x) {
              d = c[0];
              continue;
            } else this.logger.warn(`missed to pass in variable ${L} for interpolating ${i}`), (d = '');
          else typeof d != 'string' && !this.useRawValueToEscape && (d = Id(d));
          const P = O.safeValue(d);
          if (
            ((i = i.replace(c[0], P)),
            x ? ((O.regex.lastIndex += d.length), (O.regex.lastIndex -= c[0].length)) : (O.regex.lastIndex = 0),
            p++,
            p >= this.maxReplaces)
          )
            break;
        }
      }),
      i
    );
  }
  nest(i, o) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l,
      c,
      d;
    const p = (h, g) => {
      const v = this.nestingOptionsSeparator;
      if (h.indexOf(v) < 0) return h;
      const x = h.split(new RegExp(`${v}[ ]*{`));
      let w = `{${x[1]}`;
      (h = x[0]), (w = this.interpolate(w, d));
      const O = w.match(/'/g),
        L = w.match(/"/g);
      ((O && O.length % 2 === 0 && !L) || L.length % 2 !== 0) && (w = w.replace(/'/g, '"'));
      try {
        (d = JSON.parse(w)), g && (d = { ...g, ...d });
      } catch (P) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, P), `${h}${v}${w}`;
      }
      return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, h;
    };
    for (; (l = this.nestingRegexp.exec(i)); ) {
      let h = [];
      (d = { ...s }),
        (d = d.replace && typeof d.replace != 'string' ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue;
      let g = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const v = l[1].split(this.formatSeparator).map((x) => x.trim());
        (l[1] = v.shift()), (h = v), (g = !0);
      }
      if (((c = o(p.call(this, l[1].trim(), d), d)), c && l[0] === i && typeof c != 'string')) return c;
      typeof c != 'string' && (c = Id(c)),
        c || (this.logger.warn(`missed to resolve ${l[1]} for nesting ${i}`), (c = '')),
        g && (c = h.reduce((v, x) => this.format(v, x, s.lng, { ...s, interpolationkey: l[1].trim() }), c.trim())),
        (i = i.replace(l[0], c)),
        (this.regexp.lastIndex = 0);
    }
    return i;
  }
}
const Ry = (n) => {
    let i = n.toLowerCase().trim();
    const o = {};
    if (n.indexOf('(') > -1) {
      const s = n.split('(');
      i = s[0].toLowerCase().trim();
      const l = s[1].substring(0, s[1].length - 1);
      i === 'currency' && l.indexOf(':') < 0
        ? o.currency || (o.currency = l.trim())
        : i === 'relativetime' && l.indexOf(':') < 0
        ? o.range || (o.range = l.trim())
        : l.split(';').forEach((d) => {
            if (d) {
              const [p, ...h] = d.split(':'),
                g = h
                  .join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                v = p.trim();
              o[v] || (o[v] = g),
                g === 'false' && (o[v] = !1),
                g === 'true' && (o[v] = !0),
                isNaN(g) || (o[v] = parseInt(g, 10));
            }
          });
    }
    return { formatName: i, formatOptions: o };
  },
  Er = (n) => {
    const i = {};
    return (o, s, l) => {
      let c = l;
      l &&
        l.interpolationkey &&
        l.formatParams &&
        l.formatParams[l.interpolationkey] &&
        l[l.interpolationkey] &&
        (c = { ...c, [l.interpolationkey]: void 0 });
      const d = s + JSON.stringify(c);
      let p = i[d];
      return p || ((p = n(sa(s), l)), (i[d] = p)), p(o);
    };
  };
class Iy {
  constructor() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Mt.create('formatter')),
      (this.options = i),
      (this.formats = {
        number: Er((o, s) => {
          const l = new Intl.NumberFormat(o, { ...s });
          return (c) => l.format(c);
        }),
        currency: Er((o, s) => {
          const l = new Intl.NumberFormat(o, { ...s, style: 'currency' });
          return (c) => l.format(c);
        }),
        datetime: Er((o, s) => {
          const l = new Intl.DateTimeFormat(o, { ...s });
          return (c) => l.format(c);
        }),
        relativetime: Er((o, s) => {
          const l = new Intl.RelativeTimeFormat(o, { ...s });
          return (c) => l.format(c, s.range || 'day');
        }),
        list: Er((o, s) => {
          const l = new Intl.ListFormat(o, { ...s });
          return (c) => l.format(c);
        }),
      }),
      this.init(i);
  }
  init(i) {
    const s = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }).interpolation;
    this.formatSeparator = s.formatSeparator ? s.formatSeparator : s.formatSeparator || ',';
  }
  add(i, o) {
    this.formats[i.toLowerCase().trim()] = o;
  }
  addCached(i, o) {
    this.formats[i.toLowerCase().trim()] = Er(o);
  }
  format(i, o, s) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = o.split(this.formatSeparator);
    if (c.length > 1 && c[0].indexOf('(') > 1 && c[0].indexOf(')') < 0 && c.find((p) => p.indexOf(')') > -1)) {
      const p = c.findIndex((h) => h.indexOf(')') > -1);
      c[0] = [c[0], ...c.splice(1, p)].join(this.formatSeparator);
    }
    return c.reduce((p, h) => {
      const { formatName: g, formatOptions: v } = Ry(h);
      if (this.formats[g]) {
        let x = p;
        try {
          const w = (l && l.formatParams && l.formatParams[l.interpolationkey]) || {},
            O = w.locale || w.lng || l.locale || l.lng || s;
          x = this.formats[g](p, O, { ...v, ...l, ...w });
        } catch (w) {
          this.logger.warn(w);
        }
        return x;
      } else this.logger.warn(`there was no format function for ${g}`);
      return p;
    }, i);
  }
}
const Dy = (n, i) => {
  n.pending[i] !== void 0 && (delete n.pending[i], n.pendingCount--);
};
class Ay extends ha {
  constructor(i, o, s) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = i),
      (this.store = o),
      (this.services = s),
      (this.languageUtils = s.languageUtils),
      (this.options = l),
      (this.logger = Mt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = l.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5),
      (this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(s, l.backend, l);
  }
  queueLoad(i, o, s, l) {
    const c = {},
      d = {},
      p = {},
      h = {};
    return (
      i.forEach((g) => {
        let v = !0;
        o.forEach((x) => {
          const w = `${g}|${x}`;
          !s.reload && this.store.hasResourceBundle(g, x)
            ? (this.state[w] = 2)
            : this.state[w] < 0 ||
              (this.state[w] === 1
                ? d[w] === void 0 && (d[w] = !0)
                : ((this.state[w] = 1),
                  (v = !1),
                  d[w] === void 0 && (d[w] = !0),
                  c[w] === void 0 && (c[w] = !0),
                  h[x] === void 0 && (h[x] = !0)));
        }),
          v || (p[g] = !0);
      }),
      (Object.keys(c).length || Object.keys(d).length) &&
        this.queue.push({ pending: d, pendingCount: Object.keys(d).length, loaded: {}, errors: [], callback: l }),
      {
        toLoad: Object.keys(c),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(p),
        toLoadNamespaces: Object.keys(h),
      }
    );
  }
  loaded(i, o, s) {
    const l = i.split('|'),
      c = l[0],
      d = l[1];
    o && this.emit('failedLoading', c, d, o),
      !o && s && this.store.addResourceBundle(c, d, s, void 0, void 0, { skipCopy: !0 }),
      (this.state[i] = o ? -1 : 2),
      o && s && (this.state[i] = 0);
    const p = {};
    this.queue.forEach((h) => {
      vy(h.loaded, [c], d),
        Dy(h, i),
        o && h.errors.push(o),
        h.pendingCount === 0 &&
          !h.done &&
          (Object.keys(h.loaded).forEach((g) => {
            p[g] || (p[g] = {});
            const v = h.loaded[g];
            v.length &&
              v.forEach((x) => {
                p[g][x] === void 0 && (p[g][x] = !0);
              });
          }),
          (h.done = !0),
          h.errors.length ? h.callback(h.errors) : h.callback());
    }),
      this.emit('loaded', p),
      (this.queue = this.queue.filter((h) => !h.done));
  }
  read(i, o, s) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      d = arguments.length > 5 ? arguments[5] : void 0;
    if (!i.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: i, ns: o, fcName: s, tried: l, wait: c, callback: d });
      return;
    }
    this.readingCalls++;
    const p = (g, v) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const x = this.waitingReads.shift();
          this.read(x.lng, x.ns, x.fcName, x.tried, x.wait, x.callback);
        }
        if (g && v && l < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, i, o, s, l + 1, c * 2, d);
          }, c);
          return;
        }
        d(g, v);
      },
      h = this.backend[s].bind(this.backend);
    if (h.length === 2) {
      try {
        const g = h(i, o);
        g && typeof g.then == 'function' ? g.then((v) => p(null, v)).catch(p) : p(null, g);
      } catch (g) {
        p(g);
      }
      return;
    }
    return h(i, o, p);
  }
  prepareLoading(i, o) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn('No backend was added via i18next.use. Will not load resources.'), l && l();
    typeof i == 'string' && (i = this.languageUtils.toResolveHierarchy(i)), typeof o == 'string' && (o = [o]);
    const c = this.queueLoad(i, o, s, l);
    if (!c.toLoad.length) return c.pending.length || l(), null;
    c.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(i, o, s) {
    this.prepareLoading(i, o, {}, s);
  }
  reload(i, o, s) {
    this.prepareLoading(i, o, { reload: !0 }, s);
  }
  loadOne(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const s = i.split('|'),
      l = s[0],
      c = s[1];
    this.read(l, c, 'read', void 0, void 0, (d, p) => {
      d && this.logger.warn(`${o}loading namespace ${c} for language ${l} failed`, d),
        !d && p && this.logger.log(`${o}loaded namespace ${c} for language ${l}`, p),
        this.loaded(i, d, p);
    });
  }
  saveMissing(i, o, s, l, c) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      p = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(o)) {
      this.logger.warn(
        `did not save key "${s}" as the namespace "${o}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(s == null || s === '')) {
      if (this.backend && this.backend.create) {
        const h = { ...d, isUpdate: c },
          g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let v;
            g.length === 5 ? (v = g(i, o, s, l, h)) : (v = g(i, o, s, l)),
              v && typeof v.then == 'function' ? v.then((x) => p(null, x)).catch(p) : p(null, v);
          } catch (v) {
            p(v);
          }
        else g(i, o, s, l, p, h);
      }
      !i || !i[0] || this.store.addResource(i[0], o, s, l);
    }
  }
}
const Vd = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (n) => {
      let i = {};
      if (
        (typeof n[1] == 'object' && (i = n[1]),
        typeof n[1] == 'string' && (i.defaultValue = n[1]),
        typeof n[2] == 'string' && (i.tDescription = n[2]),
        typeof n[2] == 'object' || typeof n[3] == 'object')
      ) {
        const o = n[3] || n[2];
        Object.keys(o).forEach((s) => {
          i[s] = o[s];
        });
      }
      return i;
    },
    interpolation: {
      escapeValue: !0,
      format: (n) => n,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  Bd = (n) => (
    typeof n.ns == 'string' && (n.ns = [n.ns]),
    typeof n.fallbackLng == 'string' && (n.fallbackLng = [n.fallbackLng]),
    typeof n.fallbackNS == 'string' && (n.fallbackNS = [n.fallbackNS]),
    n.supportedLngs && n.supportedLngs.indexOf('cimode') < 0 && (n.supportedLngs = n.supportedLngs.concat(['cimode'])),
    n
  ),
  Jo = () => {},
  My = (n) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((o) => {
      typeof n[o] == 'function' && (n[o] = n[o].bind(n));
    });
  };
class Ni extends ha {
  constructor() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      o = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Bd(i)),
      (this.services = {}),
      (this.logger = Mt),
      (this.modules = { external: [] }),
      My(this),
      o && !this.isInitialized && !i.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(i, o), this;
      setTimeout(() => {
        this.init(i, o);
      }, 0);
    }
  }
  init() {
    var i = this;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof o == 'function' && ((s = o), (o = {})),
      !o.defaultNS &&
        o.defaultNS !== !1 &&
        o.ns &&
        (typeof o.ns == 'string' ? (o.defaultNS = o.ns) : o.ns.indexOf('translation') < 0 && (o.defaultNS = o.ns[0]));
    const l = Vd();
    (this.options = { ...l, ...this.options, ...Bd(o) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = { ...l.interpolation, ...this.options.interpolation }),
      o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator),
      o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    const c = (v) => (v ? (typeof v == 'function' ? new v() : v) : null);
    if (!this.options.isClone) {
      this.modules.logger ? Mt.init(c(this.modules.logger), this.options) : Mt.init(null, this.options);
      let v;
      this.modules.formatter ? (v = this.modules.formatter) : typeof Intl < 'u' && (v = Iy);
      const x = new jd(this.options);
      this.store = new Fd(this.options.resources, this.options);
      const w = this.services;
      (w.logger = Mt),
        (w.resourceStore = this.store),
        (w.languageUtils = x),
        (w.pluralResolver = new Ly(x, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        v &&
          (!this.options.interpolation.format || this.options.interpolation.format === l.interpolation.format) &&
          ((w.formatter = c(v)),
          w.formatter.init(w, this.options),
          (this.options.interpolation.format = w.formatter.format.bind(w.formatter))),
        (w.interpolator = new _y(this.options)),
        (w.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (w.backendConnector = new Ay(c(this.modules.backend), w.resourceStore, w, this.options)),
        w.backendConnector.on('*', function (O) {
          for (var L = arguments.length, P = new Array(L > 1 ? L - 1 : 0), T = 1; T < L; T++) P[T - 1] = arguments[T];
          i.emit(O, ...P);
        }),
        this.modules.languageDetector &&
          ((w.languageDetector = c(this.modules.languageDetector)),
          w.languageDetector.init && w.languageDetector.init(w, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((w.i18nFormat = c(this.modules.i18nFormat)), w.i18nFormat.init && w.i18nFormat.init(this)),
        (this.translator = new la(this.services, this.options)),
        this.translator.on('*', function (O) {
          for (var L = arguments.length, P = new Array(L > 1 ? L - 1 : 0), T = 1; T < L; T++) P[T - 1] = arguments[T];
          i.emit(O, ...P);
        }),
        this.modules.external.forEach((O) => {
          O.init && O.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      s || (s = Jo),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const v = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      v.length > 0 && v[0] !== 'dev' && (this.options.lng = v[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach((v) => {
        this[v] = function () {
          return i.store[v](...arguments);
        };
      }),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((v) => {
        this[v] = function () {
          return i.store[v](...arguments), i;
        };
      });
    const h = wi(),
      g = () => {
        const v = (x, w) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn('init: i18next is already initialized. You should call init just once!'),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            h.resolve(w),
            s(x, w);
        };
        if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized)
          return v(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, v);
      };
    return this.options.resources || !this.options.initImmediate ? g() : setTimeout(g, 0), h;
  }
  loadResources(i) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jo;
    const l = typeof i == 'string' ? i : this.language;
    if ((typeof i == 'function' && (s = i), !this.options.resources || this.options.partialBundledLanguages)) {
      if (l && l.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return s();
      const c = [],
        d = (p) => {
          if (!p || p === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(p).forEach((g) => {
            g !== 'cimode' && c.indexOf(g) < 0 && c.push(g);
          });
        };
      l ? d(l) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((h) => d(h)),
        this.options.preload && this.options.preload.forEach((p) => d(p)),
        this.services.backendConnector.load(c, this.options.ns, (p) => {
          !p && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(p);
        });
    } else s(null);
  }
  reloadResources(i, o, s) {
    const l = wi();
    return (
      typeof i == 'function' && ((s = i), (i = void 0)),
      typeof o == 'function' && ((s = o), (o = void 0)),
      i || (i = this.languages),
      o || (o = this.options.ns),
      s || (s = Jo),
      this.services.backendConnector.reload(i, o, (c) => {
        l.resolve(), s(c);
      }),
      l
    );
  }
  use(i) {
    if (!i)
      throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!i.type)
      throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    return (
      i.type === 'backend' && (this.modules.backend = i),
      (i.type === 'logger' || (i.log && i.warn && i.error)) && (this.modules.logger = i),
      i.type === 'languageDetector' && (this.modules.languageDetector = i),
      i.type === 'i18nFormat' && (this.modules.i18nFormat = i),
      i.type === 'postProcessor' && rm.addPostProcessor(i),
      i.type === 'formatter' && (this.modules.formatter = i),
      i.type === '3rdParty' && this.modules.external.push(i),
      this
    );
  }
  setResolvedLanguage(i) {
    if (!(!i || !this.languages) && !(['cimode', 'dev'].indexOf(i) > -1))
      for (let o = 0; o < this.languages.length; o++) {
        const s = this.languages[o];
        if (!(['cimode', 'dev'].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(i, o) {
    var s = this;
    this.isLanguageChangingTo = i;
    const l = wi();
    this.emit('languageChanging', i);
    const c = (h) => {
        (this.language = h),
          (this.languages = this.services.languageUtils.toResolveHierarchy(h)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(h);
      },
      d = (h, g) => {
        g
          ? (c(g),
            this.translator.changeLanguage(g),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', g),
            this.logger.log('languageChanged', g))
          : (this.isLanguageChangingTo = void 0),
          l.resolve(function () {
            return s.t(...arguments);
          }),
          o &&
            o(h, function () {
              return s.t(...arguments);
            });
      },
      p = (h) => {
        !i && !h && this.services.languageDetector && (h = []);
        const g = typeof h == 'string' ? h : this.services.languageUtils.getBestMatchFromCodes(h);
        g &&
          (this.language || c(g),
          this.translator.language || this.translator.changeLanguage(g),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(g)),
          this.loadResources(g, (v) => {
            d(v, g);
          });
      };
    return (
      !i && this.services.languageDetector && !this.services.languageDetector.async
        ? p(this.services.languageDetector.detect())
        : !i && this.services.languageDetector && this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(p)
          : this.services.languageDetector.detect(p)
        : p(i),
      l
    );
  }
  getFixedT(i, o, s) {
    var l = this;
    const c = function (d, p) {
      let h;
      if (typeof p != 'object') {
        for (var g = arguments.length, v = new Array(g > 2 ? g - 2 : 0), x = 2; x < g; x++) v[x - 2] = arguments[x];
        h = l.options.overloadTranslationOptionHandler([d, p].concat(v));
      } else h = { ...p };
      (h.lng = h.lng || c.lng),
        (h.lngs = h.lngs || c.lngs),
        (h.ns = h.ns || c.ns),
        h.keyPrefix !== '' && (h.keyPrefix = h.keyPrefix || s || c.keyPrefix);
      const w = l.options.keySeparator || '.';
      let O;
      return (
        h.keyPrefix && Array.isArray(d)
          ? (O = d.map((L) => `${h.keyPrefix}${w}${L}`))
          : (O = h.keyPrefix ? `${h.keyPrefix}${w}${d}` : d),
        l.t(O, h)
      );
    };
    return typeof i == 'string' ? (c.lng = i) : (c.lngs = i), (c.ns = o), (c.keyPrefix = s), c;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(i) {
    this.options.defaultNS = i;
  }
  hasLoadedNamespace(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages), !1;
    const s = o.lng || this.resolvedLanguage || this.languages[0],
      l = this.options ? this.options.fallbackLng : !1,
      c = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === 'cimode') return !0;
    const d = (p, h) => {
      const g = this.services.backendConnector.state[`${p}|${h}`];
      return g === -1 || g === 0 || g === 2;
    };
    if (o.precheck) {
      const p = o.precheck(this, d);
      if (p !== void 0) return p;
    }
    return !!(
      this.hasResourceBundle(s, i) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(s, i) && (!l || d(c, i)))
    );
  }
  loadNamespaces(i, o) {
    const s = wi();
    return this.options.ns
      ? (typeof i == 'string' && (i = [i]),
        i.forEach((l) => {
          this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
        }),
        this.loadResources((l) => {
          s.resolve(), o && o(l);
        }),
        s)
      : (o && o(), Promise.resolve());
  }
  loadLanguages(i, o) {
    const s = wi();
    typeof i == 'string' && (i = [i]);
    const l = this.options.preload || [],
      c = i.filter((d) => l.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return c.length
      ? ((this.options.preload = l.concat(c)),
        this.loadResources((d) => {
          s.resolve(), o && o(d);
        }),
        s)
      : (o && o(), Promise.resolve());
  }
  dir(i) {
    if (
      (i ||
        (i =
          this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
      !i)
    )
      return 'rtl';
    const o = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      s = (this.services && this.services.languageUtils) || new jd(Vd());
    return o.indexOf(s.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      o = arguments.length > 1 ? arguments[1] : void 0;
    return new Ni(i, o);
  }
  cloneInstance() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jo;
    const s = i.forkResourceStore;
    s && delete i.forkResourceStore;
    const l = { ...this.options, ...i, isClone: !0 },
      c = new Ni(l);
    return (
      (i.debug !== void 0 || i.prefix !== void 0) && (c.logger = c.logger.clone(i)),
      ['store', 'services', 'language'].forEach((p) => {
        c[p] = this[p];
      }),
      (c.services = { ...this.services }),
      (c.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
      s && ((c.store = new Fd(this.store.data, l)), (c.services.resourceStore = c.store)),
      (c.translator = new la(c.services, l)),
      c.translator.on('*', function (p) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++) g[v - 1] = arguments[v];
        c.emit(p, ...g);
      }),
      c.init(l, o),
      (c.translator.options = l),
      (c.translator.backendConnector.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
      c
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const Je = Ni.createInstance();
Je.createInstance = Ni.createInstance;
Je.createInstance;
Je.dir;
Je.init;
Je.loadResources;
Je.reloadResources;
Je.use;
Je.changeLanguage;
Je.getFixedT;
Je.t;
Je.exists;
Je.setDefaultNamespace;
Je.hasLoadedNamespace;
Je.loadNamespaces;
Je.loadLanguages;
const Fy = (...n) => {
    console != null && console.warn && (Wn(n[0]) && (n[0] = `react-i18next:: ${n[0]}`), console.warn(...n));
  },
  Wd = {},
  Fl = (...n) => {
    (Wn(n[0]) && Wd[n[0]]) || (Wn(n[0]) && (Wd[n[0]] = new Date()), Fy(...n));
  },
  im = (n, i) => () => {
    if (n.isInitialized) i();
    else {
      const o = () => {
        setTimeout(() => {
          n.off('initialized', o);
        }, 0),
          i();
      };
      n.on('initialized', o);
    }
  },
  Hd = (n, i, o) => {
    n.loadNamespaces(i, im(n, o));
  },
  Yd = (n, i, o, s) => {
    Wn(o) && (o = [o]),
      o.forEach((l) => {
        n.options.ns.indexOf(l) < 0 && n.options.ns.push(l);
      }),
      n.loadLanguages(i, im(n, s));
  },
  zy = (n, i, o = {}) =>
    !i.languages || !i.languages.length
      ? (Fl('i18n.languages were undefined or empty', i.languages), !0)
      : i.hasLoadedNamespace(n, {
          lng: o.lng,
          precheck: (s, l) => {
            var c;
            if (
              ((c = o.bindI18n) == null ? void 0 : c.indexOf('languageChanging')) > -1 &&
              s.services.backendConnector.backend &&
              s.isLanguageChangingTo &&
              !l(s.isLanguageChangingTo, n)
            )
              return !1;
          },
        }),
  Wn = (n) => typeof n == 'string',
  jy = (n) => typeof n == 'object' && n !== null,
  $y = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Uy = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  Vy = (n) => Uy[n],
  By = (n) => n.replace($y, Vy);
let zl = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: By,
};
const Wy = (n = {}) => {
    zl = { ...zl, ...n };
  },
  Hy = () => zl;
let om;
const Yy = (n) => {
    om = n;
  },
  qy = () => om,
  Ky = {
    type: '3rdParty',
    init(n) {
      Wy(n.options.react), Yy(n);
    },
  },
  Qy = _.createContext();
class Gy {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(i) {
    i.forEach((o) => {
      var s;
      (s = this.usedNamespaces)[o] ?? (s[o] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Xy = (n, i) => {
    const o = _.useRef();
    return (
      _.useEffect(() => {
        o.current = n;
      }, [n, i]),
      o.current
    );
  },
  am = (n, i, o, s) => n.getFixedT(i, o, s),
  Jy = (n, i, o, s) => _.useCallback(am(n, i, o, s), [n, i, o, s]),
  su = (n, i = {}) => {
    var U, R, J, te;
    const { i18n: o } = i,
      { i18n: s, defaultNS: l } = _.useContext(Qy) || {},
      c = o || s || qy();
    if ((c && !c.reportNamespaces && (c.reportNamespaces = new Gy()), !c)) {
      Fl('You will need to pass in an i18next instance by using initReactI18next');
      const re = (xe, Se) =>
          Wn(Se) ? Se : jy(Se) && Wn(Se.defaultValue) ? Se.defaultValue : Array.isArray(xe) ? xe[xe.length - 1] : xe,
        de = [re, {}, !1];
      return (de.t = re), (de.i18n = {}), (de.ready = !1), de;
    }
    (U = c.options.react) != null &&
      U.wait &&
      Fl('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
    const d = { ...Hy(), ...c.options.react, ...i },
      { useSuspense: p, keyPrefix: h } = d;
    let g = n || l || ((R = c.options) == null ? void 0 : R.defaultNS);
    (g = Wn(g) ? [g] : g || ['translation']),
      (te = (J = c.reportNamespaces).addUsedNamespaces) == null || te.call(J, g);
    const v = (c.isInitialized || c.initializedStoreOnce) && g.every((re) => zy(re, c, d)),
      x = Jy(c, i.lng || null, d.nsMode === 'fallback' ? g : g[0], h),
      w = () => x,
      O = () => am(c, i.lng || null, d.nsMode === 'fallback' ? g : g[0], h),
      [L, P] = _.useState(w);
    let T = g.join();
    i.lng && (T = `${i.lng}${T}`);
    const V = Xy(T),
      A = _.useRef(!0);
    _.useEffect(() => {
      const { bindI18n: re, bindI18nStore: de } = d;
      (A.current = !0),
        !v &&
          !p &&
          (i.lng
            ? Yd(c, i.lng, g, () => {
                A.current && P(O);
              })
            : Hd(c, g, () => {
                A.current && P(O);
              })),
        v && V && V !== T && A.current && P(O);
      const xe = () => {
        A.current && P(O);
      };
      return (
        re && (c == null || c.on(re, xe)),
        de && (c == null || c.store.on(de, xe)),
        () => {
          (A.current = !1),
            c && (re == null || re.split(' ').forEach((Se) => c.off(Se, xe))),
            de && c && de.split(' ').forEach((Se) => c.store.off(Se, xe));
        }
      );
    }, [c, T]),
      _.useEffect(() => {
        A.current && v && P(w);
      }, [c, h, v]);
    const z = [L, c, v];
    if (((z.t = L), (z.i18n = c), (z.ready = v), v || (!v && !p))) return z;
    throw new Promise((re) => {
      i.lng ? Yd(c, i.lng, g, () => re()) : Hd(c, g, () => re());
    });
  },
  Zy = '${{val, number}}',
  e1 = { id: 'fr', label: 'Français' },
  t1 = 'https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/driver-licences.html',
  n1 = "Driver's licence renewal",
  r1 = "Renew your New Brunswick Driver's licence online.",
  i1 = { altText: 'Government of New Brunswick' },
  o1 = { pageOne: 'GNB home', pageTwo: 'SNB services', pageThree: "Driver's licence renewal" },
  a1 = { pageOne: 'GNB home', pageTwo: 'SNB services', pageThree: "Temporary driver's licence" },
  s1 = "Driver's licence renewal",
  l1 = "Temporary driver's licence",
  u1 = {
    homeUrl: '/en',
    heading: 'How to renew online',
    navList: [
      { id: 'about-the-service', label: '1. About the service', link: '/en', status: [1, 0, 0, 0, 0, 0] },
      { id: 'eligibility', label: '2. Eligibility', link: '/en/eligibility', status: [2, 1, 0, 0, 0, 0] },
      {
        id: 'driver-licence-details',
        label: "3. Driver's licence details",
        link: '/en/driver-licence-details',
        status: [2, 2, 1, 0, 0, 0],
      },
      { id: 'certification', label: '4. Certiﬁcation', link: '/en/certification', status: [3, 3, 3, 1, 0, 0] },
      {
        id: 'contact-information',
        label: '5. Contact information',
        link: '/en/contact-information',
        status: [3, 3, 3, 2, 1, 0],
      },
      {
        id: 'payment-confirmation',
        label: '6. Payment conﬁrmation',
        link: '/en/payment-confirmation',
        status: [3, 3, 3, 3, 3, 3],
      },
    ],
  },
  c1 = 'Indicates a required ﬁeld',
  f1 = { continue: 'Continue', back: 'Back', cancel: 'Cancel' },
  d1 = 'Sorry, we are experiencing technical difficulties. Please try again later.',
  p1 = {
    copyright: '© Government of New Brunswick',
    privacy: 'Privacy',
    privacyUrl: 'https://www2.gnb.ca/content/gnb/en/admin/privacy.html',
    disclaimer: 'Disclaimer',
    disclaimerUrl: 'https://www2.gnb.ca/content/gnb/en/admin/disclaimer.html',
  },
  m1 =
    "Your session has timed out due to inactivity. Please go to <1>Driver's licence renewal</1> and restart the process.",
  h1 = {
    homeUrl: '/en/temporary-drivers-licence',
    navList: [
      { id: 'about-the-service', link: '/en/temporary-drivers-licence' },
      { id: 'temporary-drivers-licence-request', link: '/en/temporary-drivers-licence-request' },
    ],
  },
  g1 = 'Skip to main content',
  v1 = {
    currency: Zy,
    switchLanguage: e1,
    driversLicenceInfoURL: t1,
    pageTitle: n1,
    pageDescription: r1,
    mainNavigation: i1,
    breadcrumb: o1,
    breadcrumbTempDL: a1,
    header: s1,
    tempDLHeader: l1,
    progressNav: u1,
    disclaimer: c1,
    buttonText: f1,
    systemErrorMsg: d1,
    footer: p1,
    timeoutMsg: m1,
    tempDLPathList: h1,
    skipToMain: g1,
  },
  y1 = '{{val, number}} $',
  w1 = { id: 'en', label: 'English' },
  x1 = 'https://www.gnb.ca/fr/sujet/conduite-transports/permis-conduire/permis-conduire.html',
  S1 = 'Renouvellement du permis de conduire',
  k1 = 'Renouvelez votre permis de conduire du Nouveau-Brunswick en ligne.',
  C1 = { altText: 'Le gouvernement du Nouveau-Brunswick' },
  E1 = {
    pageOne: "Page d'accueil de GNB",
    pageTwo: 'Services de SNB',
    pageThree: 'Renouvellement du permis de conduire',
  },
  P1 = { pageOne: "Page d'accueil de GNB", pageTwo: 'Services de SNB', pageThree: 'Permis de conduire temporaire' },
  b1 = 'Renouvellement du permis de conduire',
  O1 = 'Permis de conduire temporaire',
  N1 = {
    homeUrl: '/fr',
    heading: 'Comment renouveler en ligne',
    navList: [
      { id: 'à-propos-du-service', label: '1. À propos du service', link: '/fr', status: [1, 0, 0, 0, 0, 0] },
      { id: 'admissibilité', label: '2. Admissibilité', link: '/fr/admissibilité', status: [2, 1, 0, 0, 0, 0] },
      {
        id: 'détails-sur-le-permis-de-conduire',
        label: '3. Détails sur le permis de conduire',
        link: '/fr/détails-sur-le-permis-de-conduire',
        status: [2, 2, 1, 0, 0, 0],
      },
      { id: 'attestation', label: '4. Attestation', link: '/fr/attestation', status: [3, 3, 3, 1, 0, 0] },
      { id: 'coordonnées', label: '5. Coordonnées', link: '/fr/coordonnées', status: [3, 3, 3, 2, 1, 0] },
      {
        id: 'confirmation-de-paiement',
        label: '6. Confirmation de paiement',
        link: '/fr/confirmation-de-paiement',
        status: [3, 3, 3, 3, 3, 3],
      },
    ],
  },
  T1 = 'Indique un champ obligatoire',
  L1 = { continue: 'Continuer', back: 'Précédent', cancel: 'Annuler' },
  _1 = 'Nous sommes désolés, nous éprouvons des problèmes techniques. Veuillez réessayer plus tard.',
  R1 = {
    copyright: '© Gouvernement du Nouveau-Brunswick',
    privacy: 'Confidentialité',
    privacyUrl: 'https://www2.gnb.ca/content/gnb/fr/admin/declaration_de_confidentialite.html',
    disclaimer: 'Décharge',
    disclaimerUrl: 'https://www2.gnb.ca/content/gnb/fr/admin/decharge.html',
  },
  I1 =
    "Votre session a expiré en raison d'inactivité. Veuillez vous rendre à la page <1>Renouvellement du permis de conduire</1> conduire et recommencer le processus.",
  D1 = {
    homeUrl: '/fr/permis-de-conduire-temporaire',
    navList: [
      { id: 'à-propos-du-service', link: '/fr/permis-de-conduire-temporaire' },
      { id: 'demande-de-permis-de-conduire-temporaire', link: '/fr/demande-de-permis-de-conduire-temporaire' },
    ],
  },
  A1 = 'Passer au contenu principal',
  M1 = {
    currency: y1,
    switchLanguage: w1,
    driversLicenceInfoURL: x1,
    pageTitle: S1,
    pageDescription: k1,
    mainNavigation: C1,
    breadcrumb: E1,
    breadcrumbTempDL: P1,
    header: b1,
    tempDLHeader: O1,
    progressNav: N1,
    disclaimer: T1,
    buttonText: L1,
    systemErrorMsg: _1,
    footer: R1,
    timeoutMsg: I1,
    tempDLPathList: D1,
    skipToMain: A1,
  },
  F1 = 'About the service',
  z1 = 'Estimated time to complete: 5-8 minutes',
  j1 = 'Due to security reasons, the session will expire after 20 minutes of inactivity.',
  $1 = {
    heading: 'To renew online, you will need',
    listItem:
      "<unorderedList><listItem>your current driver's licence</listItem><listItem>Your payment option (credit card, debit card, Google Pay or Apple Pay)</listItem></unorderedList>",
  },
  U1 = {
    heading: 'Online renewal eligibility',
    listItem:
      "<unorderedList><listItem>you have a class 5 licence that expires within next 12 months</listItem><listItem>your licence isn't cancelled or suspended</listItem><listItem>your licence hasn't been expired for more than 5 years</listItem><listItem>this is not the year you need to update your photo (every 8 years)</listItem><listItem>you haven't updated your physical address within the last 90 days)</listItem><listItem>you're not updating an endorsement or restriction (see back of driver's licence)</listItem></unorderedList>",
  },
  V1 = {
    heading: 'Proof of renewal',
    content:
      "At the end of this transaction, you will receive a 30-day temporary document which is required as proof that you have renewed your driver's licence. This temporary document will be delivered to your device electronically.",
  },
  B1 = {
    heading: 'Cost and delivery',
    listItem:
      "<unorderedList><listItem>fee for a 4-year driver's licence is $90.00</listItem><listItem>it will arrive securely in the mail within approximately 14 days to the address on your driver's licence</listItem></unorderedList>",
  },
  W1 = 'By clicking continue, you conﬁrm that you have read and understand the information presented on this page.',
  H1 = {
    heading: 'Get help',
    email: 'Email: <1>snb@snb.ca</1>',
    tollFree: 'Toll free: <1>1-888-832-2762</1> (option #2)',
  },
  Y1 = 'This field is required.',
  q1 = {
    heading: F1,
    informationalAlert: z1,
    informationalAlertHint: j1,
    sectionOne: $1,
    sectionTwo: U1,
    sectionThree: V1,
    sectionFour: B1,
    confirmation: W1,
    sectionFive: H1,
    errorMsg: Y1,
  },
  K1 = 'À propos du service',
  Q1 = "Délai d'achèvement approximatif : de 5 à 8 minutes",
  G1 = "Pour des raisons de sécurité, la session expirera après 20 minutes d'inactivité.",
  X1 = {
    heading: 'Pour renouveler en ligne, vous aurez besoin de',
    listItem:
      '<unorderedList><listItem>votre permis de conduire actuel</listItem><listItem>votre option de paiement (carte de crédit, carte de débit, Google Pay ou Apple Pay)</listItem></unorderedList>',
  },
  J1 = {
    heading: 'Admissibilité au renouvellement en ligne',
    listItem:
      "<unorderedList><listItem>vous avez un permis de classe 5 qui expire dans les 12 prochains mois</listItem><listItem>votre permis n'est pas annulé ou suspendu</listItem><listItem>votre permis n'est pas expiré depuis plus de cinq ans</listItem><listItem>ce n'est pas l'année où vous devez mettre à jour votre photo (tous les huit ans)</listItem><listItem>vous n'avez pas mis à jour votre adresse de voirie au cours des 90 derniers jours</listItem><listItem>vous ne mettez pas à jour une mention ou une restriction (voir au dos du permis de conduire)</listItem></unorderedList>",
  },
  Z1 = {
    heading: 'Preuve de renouvellement',
    content:
      'À la fin de la transaction, vous recevrez un document temporaire valide pendant 30 jours, qui est requis comme preuve de renouvellement de votre permis de conduire. Ce document temporaire sera envoyé à votre appareil par voie électronique.',
  },
  e0 = {
    heading: 'Coût et livraison',
    listItem:
      "<unorderedList><listItem>les frais pour un permis de conduire valide pendant quatre ans sont de 90 $</listItem><listItem>il arrivera en toute sécurité par la poste dans un délai d'environ 14 jours à l'adresse figurant sur votre permis de conduire</listItem></unorderedList>",
  },
  t0 = "En cliquant sur continuer, vous confirmez que vous avez lu et compris l'information présentée sur cette page.",
  n0 = {
    heading: "Obtenir de l'aide",
    email: 'Courriel : <1>snb@snb.ca</1>',
    tollFree: 'Sans frais : <1>1-888-832-2762</1> (option 2)',
  },
  r0 = 'Ce champ est obligatoire.',
  i0 = {
    heading: K1,
    informationalAlert: Q1,
    informationalAlertHint: G1,
    sectionOne: X1,
    sectionTwo: J1,
    sectionThree: Z1,
    sectionFour: e0,
    confirmation: t0,
    sectionFive: n0,
    errorMsg: r0,
  },
  o0 = 'Eligibility',
  a0 = {
    question:
      'Have you any impairment, disease or condition which could affect your ability to operate a motor vehicle safely?',
    answer: { yes: 'Yes', no: 'No' },
  },
  s0 = { question: 'Are your driving privileges suspended in any jurisdiction?', answer: { yes: 'Yes', no: 'No' } },
  l0 = {
    lineOne: 'You are not eligible to renew online at this time.',
    lineTwo: 'Please call <1>1-888-832-2762</1> (option #2) to speak with a representative for more information.',
    emptyField: 'This field is required.',
  },
  u0 = { heading: o0, questionOne: a0, questionTwo: s0, errorMsg: l0 },
  c0 = 'Admissibilité',
  f0 = {
    question:
      'Avez-vous une déficience, une maladie ou un problème de santé quelconque qui pourrait nuire à votre capacité de conduire un véhicule à moteur en toute sécurité?',
    answer: { yes: 'Oui', no: 'Non' },
  },
  d0 = {
    question: 'Vos droits de conducteur sont-ils suspendus dans une quelconque entité administrative?',
    answer: { yes: 'Oui', no: 'Non' },
  },
  p0 = {
    lineOne: "Vous n'êtes pas admissible au renouvellement en ligne en ce moment.",
    lineTwo:
      "Veuillez composer le <1>1-888-832-2762</1> (option 2) pour parler à un représentant et obtenir plus d'information.",
    emptyField: 'Ce champ est obligatoire.',
  },
  m0 = { heading: c0, questionOne: f0, questionTwo: d0, errorMsg: p0 },
  h0 = "Driver's licence details",
  g0 = {
    label: "Driver's licence number",
    helpText: 'Can be found on the front of your licence.',
    errorMsg: { empty: 'This field is required.', invalid: "Driver's licence number format is invalid." },
  },
  v0 = {
    label: 'Issuance date',
    helpText: 'Can be found on the front of your licence.',
    year: 'Year',
    month: 'Month',
    day: 'Day',
    errorMsg: { empty: 'This field is required.', invalid: 'Issuance date format is invalid.' },
  },
  y0 = {
    label: 'Postal code',
    helpText: 'For your current address (example: A2A2A2)',
    errorMsg: { empty: 'This field is required.', invalid: 'Postal code format is invalid.' },
  },
  w0 = {
    label: "I'm not a robot",
    privacy: 'Privacy',
    term: 'Terms',
    errorMsg: {
      empty: 'This field is required.',
      expired: 'Verification expired. Check the checkbox again.',
      invalid: 'reCAPTCHA verification failed. Please complete the reCAPTCHA and try again.',
      load: "Google reCaptcha is slow to load. If it doesn't load, please refresh the page and try again.",
    },
  },
  x0 = {
    dln: {
      title: "Driver's licence number",
      bodyText: "Driver's licence number can be found on the front of your licence.",
      altText: {
        img1: "Front of a New Brunswick driver's licence card with the number outlined.",
        img2: "Front of an older style New Brunswick driver's licence card with the number outlined",
      },
    },
    issuanceDate: {
      title: 'Issuance date',
      bodyText: 'Issuance date can be found on the front of your licence.',
      altText: {
        img1: "Front of a New Brunswick driver's licence card with the issuance date outlined.",
        img2: "Front of an older style New Brunswick driver's licence card with the issuance date outlined",
      },
    },
  },
  S0 = {
    mvad001:
      "We could not locate a driver's licence based on information you entered. Please verify your information and try again.",
    mvad002:
      'You are not eligible to renew online at this time. Please call <1>1-888-832-2762</1> (option #2) or visit a Service Centre to speak with a representative for more information.',
    mvad004:
      "Your class of driver's licence cannot be renewed online or over the phone. Please visit a Service Centre to renew your driver's licence.",
    mvad005:
      "The photo on your driver's licence needs to be updated, which can only be done at a Service Centre. Please visit a Service Centre to renew your licence and photo.",
    mvad007:
      "Your driver's licence is not eligible for renewal yet. Driver's licences can only be renewed within 12 months of the expiry date.",
    mvad008:
      "You are not eligible to renew online or over the phone at this time. Please visit a Service Centre to renew your driver's licence.",
    custom006:
      "We could not locate a driver's licence based on information you entered. Please verify your information and try again.",
  },
  k0 = { heading: h0, dln: g0, issuanceDate: v0, postalCode: y0, reCaptcha: w0, modal: x0, errorMsg: S0 },
  C0 = 'Détails sur le permis de conduire',
  E0 = {
    label: 'Numéro du permis de conduire',
    helpText: 'Figure sur le devant de votre permis.',
    errorMsg: {
      empty: 'Ce champ est obligatoire.',
      invalid: "Le format du numéro de permis de conduire n'est pas valide.",
    },
  },
  P0 = {
    label: 'Date de délivrance',
    helpText: 'Figure sur le devant de votre permis.',
    year: 'Année',
    month: 'Mois',
    day: 'Jour',
    errorMsg: { empty: 'Ce champ est obligatoire.', invalid: "Le format de la date de délivrance n'est pas valide." },
  },
  b0 = {
    label: 'Code postal',
    helpText: 'Pour votre adresse actuelle (p. ex. : A2A2A2)',
    errorMsg: { empty: 'Ce champ est obligatoire.', invalid: "Le format du code postal n'est pas valide." },
  },
  O0 = {
    label: 'Je ne suis pas un robot.',
    privacy: 'Confidentialité',
    term: 'Conditions',
    errorMsg: {
      empty: 'Ce champ est obligatoire.',
      expired: 'La vérification a expiré. Cochez à nouveau la case.',
      invalid: 'La vérification reCAPTCHA a échoué. Veuillez compléter le reCAPTCHA et réessayer.',
      load: "Google reCaptcha est lent à charger. S'il ne se charge pas, veuillez actualiser la page et réessayer.",
    },
  },
  N0 = {
    dln: {
      title: 'Numéro du permis de conduire',
      bodyText: 'Le numéro de permis de conduire figure sur le devant de votre permis.',
      altText: {
        img1: 'Recto du permis de conduire du Nouveau-Brunswick avec le numéro indiqué.',
        img2: "Recto de l'ancien permis de conduire du Nouveau-Brunswick avec le numéro indiqué.",
      },
    },
    issuanceDate: {
      title: 'Date de délivrance',
      bodyText: 'La date de délivrance figure sur le devant de votre permis.',
      altText: {
        img1: 'Recto du permis de conduire du Nouveau-Brunswick avec la date de délivrance indiquée.',
        img2: "Recto de l'ancien permis de conduire du Nouveau-Brunswick avec la date de délivrance indiquée.",
      },
    },
  },
  T0 = {
    mvad001:
      'Nous ne trouvons pas de permis de conduire avec les renseignements que vous avez fournis. Veuillez vérifier vos renseignements et réessayer.',
    mvad002:
      "Vous n'êtes pas admissible au renouvellement en ligne en ce moment. Veuillez téléphoner au <1>1-888-832-2762</1> (option 2) ou vous rendre dans un centre de services pour parler à un membre du personnel et obtenir de l'aide.",
    mvad004:
      'Votre classe de permis de conduire ne peut pas être renouvelée en ligne ou par téléphone. Veuillez vous rendre dans un centre de services pour renouveler votre permis de conduire.',
    mvad005:
      'La photo de votre permis de conduire doit être mise à jour, ce qui ne peut être fait que dans un centre de services. Veuillez vous rendre dans un centre de services pour renouveler votre permis de conduire.',
    mvad007:
      "Votre permis de conduire n'est pas encore admissible au renouvellement. Un permis de conduire ne peut être renouvelé que dans les 12 mois qui précèdent sa date d'expiration.",
    mvad008:
      "Vous n'êtes pas admissible au renouvellement en ligne ou par téléphone en ce moment. Veuillez vous rendre dans un centre de services pour renouveler votre permis de conduire.",
    custom006:
      'Nous ne trouvons pas de permis de conduire avec les renseignements que vous avez fournis. Veuillez vérifier vos renseignements et réessayer.',
  },
  L0 = { heading: C0, dln: E0, issuanceDate: P0, postalCode: b0, reCaptcha: O0, modal: N0, errorMsg: T0 },
  _0 = 'Contact information',
  R0 = {
    firstName: {
      label: 'First name',
      errorMsg: { empty: 'This field is required.', invalid: 'First name contains invalid characters.' },
    },
    lastName: {
      label: 'Last name',
      errorMsg: { empty: 'This field is required.', invalid: 'Last name contains invalid characters.' },
    },
    telephone: { label: 'Telephone', placeholder: '506-429-5555', errorMsg: 'Telephone format is invalid.' },
    email: {
      label: 'Email',
      placeholder: 'user@example.com',
      helpText: 'Your receipt will be sent to this email address',
      errorMsg: { empty: 'This field is required.', invalid: 'Email format is invalid.' },
    },
    checkbox: 'I agree to be contacted by SNB to participate in future consultations (i.e. focus groups, survey).',
  },
  I0 = 'Your payment was unsuccessful. Please check your details and try again.',
  D0 = 'Pay and complete renewal',
  A0 = { heading: _0, form: R0, declinedErrorMsg: I0, continueButton: D0 },
  M0 = 'Coordonnées',
  F0 = {
    firstName: {
      label: 'Prénom',
      errorMsg: { empty: 'Ce champ est obligatoire.', invalid: 'Prénom contiens des caractères non supportés.' },
    },
    lastName: {
      label: 'Nom de famille',
      errorMsg: {
        empty: 'Ce champ est obligatoire.',
        invalid: 'Nom de famille contiens des caractères non supportés.',
      },
    },
    telephone: {
      label: 'Téléphone',
      placeholder: '506-429-5555',
      errorMsg: "Le format du numéro de téléphone n'est pas valide.",
    },
    email: {
      label: 'Courriel',
      placeholder: 'utilisateur@exemple.com',
      helpText: 'Votre reçu sera envoyé à cette adresse de courriel.',
      errorMsg: { empty: 'Ce champ est obligatoire.', invalid: "Le format de l'adresse de courriel n'est pas valide." },
    },
    checkbox:
      "J'accepte que SNB communique avec moi pour participer à des consultations futures (p. ex. groupes de discussion, sondage).",
  },
  z0 =
    "Votre paiement n'a pas pu être effectué. Veuillez vérifier les renseignements que vous avez fournis et réessayer.",
  j0 = 'Payer et effectuer le renouvellement',
  $0 = { heading: M0, form: F0, declinedErrorMsg: z0, continueButton: j0 },
  U0 = 'Payment confirmation',
  V0 = 'Your payment was successful. Your receipt has been sent to your email.',
  B0 =
    "This temporary driver's licence is required as proof that you have renewed your driver's licence. If you are not successful in retrieving your temporary driver's licence on this screen or misplace your temporary driver's licence, you can go to <1>Get my temporary driver's licence</1> to retrieve it. Your new driver's licence card will arrive securely in the mail within approximately 14 days.",
  W0 = "Download and print temporary driver's licence",
  H0 = {
    heading: 'Order summary',
    reference: 'Transaction ID',
    dateTime: 'Date and time',
    hst: 'HST #',
    paymentMethod: 'Payment method',
    authorization: 'Authorization #',
    phone: 'Phone',
    currencyTaxesDisclaimer: 'All amounts are in Canadian dollars. The subtotal does not include taxes.',
    table: {
      item: 'Item',
      name: 'Name',
      itemDescription: "Driver's licence renewal",
      price: 'Price',
      quantity: 'Quantity',
      total: 'Total',
      subtotal: 'Subtotal',
    },
  },
  Y0 = 'Successfully submitted your feedback',
  q0 = 'Thank you for your feedback!',
  K0 = {
    timeout:
      "Your session has timed out. If you haven't retrieved your temporary driver's licence yet, please go to <1>Temporary driver's licence</1> service to retrieve it.",
    MVSFail:
      "We are unable to retrieve your temporary driver's licence.  Please call <1>1-888-832-2762</1> (option #2) or visit a Service Centre to speak with a representative for assistance.",
    system:
      "We are currently unable to retrieve your order summary due to technical issues. If you don't  get your email receipt within one business day please call <1>1-888-832-2762</1> (option #2) for assistance.",
  },
  Q0 = {
    heading: U0,
    success: V0,
    description: B0,
    downloadLicenceButton: W0,
    orderSummary: H0,
    successAlertTitle: Y0,
    successAlertDescription: q0,
    errors: K0,
  },
  G0 = 'Confirmation de paiement',
  X0 = 'Votre paiement a bien été effectué. Le reçu vous a été envoyé par courriel.',
  J0 =
    "Ce permis de conduire temporaire est exigé comme preuve de renouvellement de votre permis de conduire. Si vous n'êtes pas en mesure de récupérer votre permis de conduire temporaire sur cette page ou si vous l'avez égaré, cliquez sur <1>Obtenir mon permis de conduire temporaire</1>. Votre nouveau permis de conduire arrivera en toute sécurité par la poste dans environ 14 jours.",
  Z0 = 'Téléchargez et imprimez votre permis de conduire temporaire.',
  ew = {
    heading: 'Résumé de la commande',
    reference: 'Identifiant de transaction',
    dateTime: 'Date et heure',
    hst: 'No de TVH',
    paymentMethod: 'Mode de paiement',
    authorization: "No d'autorisation",
    phone: 'Téléphone',
    currencyTaxesDisclaimer:
      'Tous les montants sont exprimés en dollars canadiens. Le sous-total ne comprend pas les taxes applicables.',
    table: {
      item: 'Article',
      name: 'Nom',
      itemDescription: 'Renouvellement du permis de conduire',
      price: 'Prix',
      quantity: 'Quantité',
      total: 'Total',
      subtotal: 'Sous-total',
    },
  },
  tw = 'Vos commentaires ont été soumis avec succès',
  nw = 'Merci pour vos commentaires!',
  rw = {
    timeout:
      "Votre session a expiré. Si vous n'avez pas encore récupéré votre permis de conduire temporaire, veuillez consulter le Service des <1>permis de conduire temporaires</1> pour le récupérer.",
    MVSFail:
      "Nous ne sommes pas en mesure de récupérer votre permis de conduire temporaire.  Veuillez téléphoner au <1>1-888-832-2762</1> (option 2) ou vous rendre dans un centre de services pour parler à un membre du personnel et obtenir de l'aide.",
    system:
      "Nous sommes actuellement dans l'impossibilité de récupérer le résumé de votre commande en raison de problèmes techniques. Si vous ne recevez pas votre reçu par courriel sous un jour ouvrable, veuillez composer le <1>1-888-832-2762</1> (option 2) pour obtenir de l'aide.",
  },
  iw = {
    heading: G0,
    success: X0,
    description: J0,
    downloadLicenceButton: Z0,
    orderSummary: ew,
    successAlertTitle: tw,
    successAlertDescription: nw,
    errors: rw,
  },
  ow = 'Certification',
  aw =
    "At the end of this transaction, you will receive a 30-day temporary document which is required as proof that you have renewed your driver's licence. This temporary document will be delivered to your device electronically. If you are not able to receive this document, please contact Teleservices at <1>1-888-832-2762</1> (option #2) to receive instructions on how to receive it. Note, your new card will arrive securely in the mail within approximately 14 days.",
  sw = 'I certify that the information submitted is true.',
  lw = 'This field is required.',
  uw = { header: ow, text: aw, checkboxLabel: sw, errorMsg: lw },
  cw = 'Attestation',
  fw =
    "À la fin de la transaction, vous recevrez un document temporaire valide pendant 30 jours, qui est requis comme preuve de renouvellement de votre permis de conduire. Ce document temporaire sera envoyé à votre appareil par voie électronique. Si vous n'êtes pas en mesure de recevoir ce document, veuillez communiquer avec les TéléServices au <1>1-888-832-2762</1> (option 2) pour recevoir des instructions concernant la réception. Remarque : votre nouveau permis de conduire arrivera en toute sécurité par la poste dans environ 14 jours.",
  dw = "J'atteste que les renseignements fournis sont exacts.",
  pw = 'Ce champ est obligatoire.',
  mw = { header: cw, text: fw, checkboxLabel: dw, errorMsg: pw },
  hw = '404',
  gw = 'Sorry, the page cannot be found',
  vw = 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  yw = 'Please try the following:',
  ww = 'If you typed the page address in the address bar, make sure that it is spelled correctly',
  xw = 'Or try the <1>Services New Brunswick Home Page</1>',
  Sw = 'Or <1>Government of New Brunswick Search Page</1>',
  kw = 'Click the back button to try another Link.',
  Cw = 'https://www2.gnb.ca/content/gnb/en/search.html',
  Ew = 'https://www2.snb.ca/content/snb/en.html',
  Pw = {
    heading: hw,
    description1: gw,
    description2: vw,
    description3: yw,
    description4: ww,
    description5: xw,
    description6: Sw,
    description7: kw,
    searchLink: Cw,
    snbHomePageLink: Ew,
  },
  bw = '404',
  Ow = 'Impossible de trouver la page',
  Nw =
    "Il est possible que la page que vous cherchez ait été retirée, renommée ou qu'elle ne soit pas disponible temporairement.",
  Tw = 'Veuillez essayer ce qui suit.',
  Lw = "Si vous avez inscrit l'adresse de la page dans la barre d'adresse, assurez-vous de l'avoir épelée correctement",
  _w = "Ou encore, essayer d'ouvrir <1>la page du Service Nouveau-Brunswick</1>",
  Rw = "Ou encore, essayer d'ouvrir la page <1>Recherche du gouvernement du Nouveau-Brunswick</1>",
  Iw = 'Cliquez sur le bouton Précédent pour essayer un autre lien.',
  Dw = 'https://www2.gnb.ca/content/gnb/fr/recherche.html',
  Aw = 'https://www2.snb.ca/content/snb/fr.html',
  Mw = {
    heading: bw,
    description1: Ow,
    description2: Nw,
    description3: Tw,
    description4: Lw,
    description5: _w,
    description6: Rw,
    description7: Iw,
    searchLink: Dw,
    snbHomePageLink: Aw,
  },
  Fw = 'We want to hear from you',
  zw = "How did you find your driver's licence renewal today?",
  jw = 'required',
  $w = 'Submit',
  Uw = 'Skip',
  Vw = 'How could we make this better?',
  Bw = 'Type your feedback here',
  Ww = 'Dissatisfied',
  Hw = 'Neutral',
  Yw = 'Satisfied',
  qw = 'Successfully submitted your feedback',
  Kw = 'Thank you for your feedback!',
  Qw = {
    title: Fw,
    description: zw,
    'description-retrieval': "How did you find your temporary driver's licence retrieval today?",
    required: jw,
    primaryButton: $w,
    tertiaryButton: Uw,
    textAreaLabel: Vw,
    textAreaPlaceHolder: Bw,
    dissatisfiedReaction: Ww,
    neutralReaction: Hw,
    satisfiedReaction: Yw,
    successAlertTitle: qw,
    successAlertDescription: Kw,
  },
  Gw = 'Nous voulons connaître votre opinion',
  Xw = "Comment s'est passé le renouvellement de votre permis de conduire aujourd'hui?",
  Jw = 'Soumettre',
  Zw = 'Passer',
  ex = 'Comment pourrions-nous améliorer votre expérience?',
  tx = 'Saisissez vos commentaires ici',
  nx = 'Insatisfait(e)',
  rx = 'Sans opinion',
  ix = 'Satisfait(e)',
  ox = 'Vos commentaires ont été soumis avec succès',
  ax = 'Merci pour vos commentaires!',
  sx = {
    title: Gw,
    description: Xw,
    'description-retrieval':
      "Comment s'est déroulée la récupération de votre permis de conduire temporaire aujourd'hui?",
    primaryButton: Jw,
    tertiaryButton: Zw,
    textAreaLabel: ex,
    textAreaPlaceHolder: tx,
    dissatisfiedReaction: nx,
    neutralReaction: rx,
    satisfiedReaction: ix,
    successAlertTitle: ox,
    successAlertDescription: ax,
  },
  lx = "Temporary driver's licence",
  ux = {
    url: '/en/temporary-drivers-licence',
    heading: 'About the service',
    pageDescription: "This is a 30-day temporary driver's licence given to you after you renew your driver's licence.",
    expiryEstimate: 'Estimated time to complete: 1-3 minutes',
    expiryDescription: 'Due to security reasons, the session will expire after 20 minutes of inactivity.',
    section: {
      heading: "To retrieve and print your temporary Class 5 driver's licence:",
      listItems:
        "<unorderedList><listItem>you must have renewed your class 5 driver's licence in person at an SNB Service Center, online at snb.ca or by phone with SNB Teleservices within the last 30 days</listItem><listItem>you will need your driver's licence number and the date you last renewed your driver's licence</listItem></unorderedList>",
    },
  },
  cx = { url: '/en/temporary-drivers-licence-request', heading: "Driver's licence details" },
  fx = {
    heading: 'Retrieval confirmation',
    pageDescription:
      "This temporary driver's licence is required as proof that you have renewed your driver's licence.",
  },
  dx = {
    retrievedTitle: "Your temporary driver's licence has been successfully retrieved.",
    feedbackTitle: 'Successfully submitted your feedback',
    feedbackDescription: 'Thank you for your feedback!',
    timeoutMsg:
      "Your session has timed out due to inactivity. Please go to <1>Temporary driver's licence</1> and restart the process.",
    informationErrorTitle: 'The information that you provided does not match our records.',
    informationErrorDescription: 'Check your details and try again.',
    notFoundErrorTitle: "We could not locate your temporary Class 5 driver's licence based on information you entered.",
    notFoundErrorDescription: 'Please verify your information and try again.',
    expiredErrorTitle: "Your temporary driver's licence has expired.",
    expiredErrorDescription:
      'Please call 1-888-832-2762 (option #2) or visit a Service Centre to speak with a representative for assistance.',
  },
  px = {
    continue: "Retrieve your temporary driver's licence",
    downloadLicenceButton: "Download and print your temporary driver's licence",
  },
  mx = {
    label: 'Renewal date',
    helpText: "Date you last renewed your driver's licence.",
    year: 'Year',
    month: 'Month',
    day: 'Day',
    errorMsg: { empty: 'This field is required.', invalid: 'Last renewal date format is invalid.' },
  },
  hx = {
    issuanceDate: {
      title: 'Renewal date',
      bodyText:
        "The date that you renewed your class 5 driver's licence in person at an SNB Service Center, online at snb.ca or by phone with SNB Teleservices within the last 30 days.",
    },
  },
  gx = {
    title: lx,
    tdlPageAbout: ux,
    tdlPageForm: cx,
    tdlPageConfirmation: fx,
    alerts: dx,
    buttonText: px,
    issuanceDate: mx,
    modal: hx,
  },
  vx = 'Permis de conduire temporaire',
  yx = {
    url: '/fr/permis-de-conduire-temporaire',
    heading: 'À propos du service',
    pageDescription:
      'Après le renouvellement de votre permis de conduire, un permis de conduire temporaire valide pour 30 jours vous sera remis.',
    expiryEstimate: "Délai d'achèvement approximatif : de 1 à 3 minutes",
    expiryDescription: "Pour des raisons de sécurité, la session expirera après 20 minutes d'inactivité.",
    section: {
      heading: 'Pour récupérer et imprimer votre permis de conduire temporaire de classe 5 :',
      listItems:
        '<unorderedList><listItem>vous devez avoir renouvelé votre permis de conduire de classe 5 en personne dans un centre de services de SNB, en ligne à snb.ca ou par téléphone auprès des TéléServices de SNB au cours des 30 derniers jours.</listItem><listItem>vous aurez besoin de votre numéro de permis de conduire et de la date de son dernier renouvellement.</listItem></unorderedList>',
    },
  },
  wx = { url: '/fr/demande-de-permis-de-conduire-temporaire', heading: 'Détails sur le permis de conduire' },
  xx = {
    heading: 'Confirmation de la récupération',
    pageDescription:
      'Ce permis de conduire temporaire est exigé comme preuve de renouvellement de votre permis de conduire.',
    expiryDescription: "Pour des raisons de sécurité, la session expirera après 20 minutes d'inactivité.",
  },
  Sx = {
    retrievedTitle: 'Votre permis de conduire temporaire a été récupéré avec succès.',
    feedbackTitle: 'Vos commentaires ont été soumis avec succès',
    feedbackDescription: 'Merci pour vos commentaires!',
    timeoutMsg:
      "Votre session a expiré en raison d'inactivité. Veuillez vous rendre à la page <1>Permis de conduire temporaire</1> et recommencer le processus.",
    informationErrorTitle:
      'Les renseignements que vous avez fournis ne correspondent pas à ceux qui se trouvent dans nos dossiers.',
    informationErrorDescription: 'Veuillez vérifier les détails et réessayer.',
    notFoundErrorTitle:
      'Nous ne trouvons pas votre permis de conduire temporaire de classe 5 avec les renseignements que vous avez fournis.',
    notFoundErrorDescription: 'Veuillez vérifier les renseignements et réessayer.',
    expiredErrorTitle: 'Votre permis de conduire temporaire a expiré.',
    expiredErrorDescription:
      "Veuillez téléphoner au 1-888-832-2762 (option 2) ou vous rendre dans un centre de services pour parler à un membre du personnel et obtenir de l'aide.",
  },
  kx = {
    continue: 'Récupérer votre permis de conduire temporaire',
    downloadLicenceButton: 'Téléchargez et imprimez votre permis de conduire temporaire',
  },
  Cx = {
    label: 'Date de renouvellement',
    helpText: 'Date du dernier renouvellement de votre permis de conduire.',
    year: 'Année',
    month: 'Mois',
    day: 'Jour',
    errorMsg: {
      empty: 'Ce champ est obligatoire.',
      invalid: 'Le format de la dernière date de renouvellement est invalide.',
      range: 'Le format de la dernière date de renouvellement est invalide.',
    },
  },
  Ex = {
    issuanceDate: {
      title: 'Date de renouvellement',
      bodyText:
        'La date à laquelle vous avez renouvelé votre permis de conduire de classe 5 en personne dans un centre de services de SNB, en ligne à snb.ca ou par téléphone auprès des TéléServices de SNB au cours des 30 derniers jours.',
    },
  },
  Px = {
    title: vx,
    tdlPageAbout: yx,
    tdlPageForm: wx,
    tdlPageConfirmation: xx,
    alerts: Sx,
    buttonText: kx,
    issuanceDate: Cx,
    modal: Ex,
  },
  bx = {
    en: {
      common: v1,
      aboutTheService: q1,
      eligibility: u0,
      driverLicenceDetails: k0,
      contactInformation: A0,
      paymentConfirmation: Q0,
      certification: uw,
      notFound: Pw,
      feedbackModal: Qw,
      temporaryDriversLicence: gx,
    },
    fr: {
      common: M1,
      aboutTheService: i0,
      eligibility: m0,
      driverLicenceDetails: L0,
      contactInformation: $0,
      paymentConfirmation: iw,
      certification: mw,
      notFound: Mw,
      feedbackModal: sx,
      temporaryDriversLicence: Px,
    },
  };
Je.use(Ky).init({
  resources: bx,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr'],
  interpolation: { escapeValue: !1 },
});
const Ox = 'modulepreload',
  Nx = function (n) {
    return '/etc/designs/spa/snb-dlr-fe/clientlibs/' + n;
  },
  qd = {},
  $t = function (i, o, s) {
    let l = Promise.resolve();
    if (o && o.length > 0) {
      let d = function (g) {
        return Promise.all(
          g.map((v) =>
            Promise.resolve(v).then(
              (x) => ({ status: 'fulfilled', value: x }),
              (x) => ({ status: 'rejected', reason: x })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const p = document.querySelector('meta[property=csp-nonce]'),
        h = (p == null ? void 0 : p.nonce) || (p == null ? void 0 : p.getAttribute('nonce'));
      l = d(
        o.map((g) => {
          if (((g = Nx(g)), g in qd)) return;
          qd[g] = !0;
          const v = g.endsWith('.css'),
            x = v ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${x}`)) return;
          const w = document.createElement('link');
          if (
            ((w.rel = v ? 'stylesheet' : Ox),
            v || (w.as = 'script'),
            (w.crossOrigin = ''),
            (w.href = g),
            h && w.setAttribute('nonce', h),
            document.head.appendChild(w),
            v)
          )
            return new Promise((O, L) => {
              w.addEventListener('load', O),
                w.addEventListener('error', () => L(new Error(`Unable to preload CSS for ${g}`)));
            });
        })
      );
    }
    function c(d) {
      const p = new Event('vite:preloadError', { cancelable: !0 });
      if (((p.payload = d), window.dispatchEvent(p), !p.defaultPrevented)) throw d;
    }
    return l.then((d) => {
      for (const p of d || []) p.status === 'rejected' && c(p.reason);
      return i().catch(c);
    });
  },
  Kd = () => {};
let lu = {},
  sm = {},
  lm = null,
  um = { mark: Kd, measure: Kd };
try {
  typeof window < 'u' && (lu = window),
    typeof document < 'u' && (sm = document),
    typeof MutationObserver < 'u' && (lm = MutationObserver),
    typeof performance < 'u' && (um = performance);
} catch {}
const { userAgent: Qd = '' } = lu.navigator || {},
  Cn = lu,
  be = sm,
  Gd = lm,
  Zo = um;
Cn.document;
const Jt =
    !!be.documentElement &&
    !!be.head &&
    typeof be.addEventListener == 'function' &&
    typeof be.createElement == 'function',
  cm = ~Qd.indexOf('MSIE') || ~Qd.indexOf('Trident/');
var Ne = 'classic',
  fm = 'duotone',
  pt = 'sharp',
  mt = 'sharp-duotone',
  Tx = [Ne, fm, pt, mt],
  Lx = {
    classic: { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
    sharp: { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' },
    'sharp-duotone': { 900: 'fasds' },
  },
  Xd = {
    kit: { fak: 'kit', 'fa-kit': 'kit' },
    'kit-duotone': { fakd: 'kit-duotone', 'fa-kit-duotone': 'kit-duotone' },
  },
  _x = ['kit'],
  Rx = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
  Ix = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  Dx = {
    'Font Awesome 5 Free': { 900: 'fas', 400: 'far' },
    'Font Awesome 5 Pro': { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal' },
    'Font Awesome 5 Brands': { 400: 'fab', normal: 'fab' },
    'Font Awesome 5 Duotone': { 900: 'fad' },
  },
  Ax = {
    'Font Awesome 6 Free': { 900: 'fas', 400: 'far' },
    'Font Awesome 6 Pro': { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
    'Font Awesome 6 Brands': { 400: 'fab', normal: 'fab' },
    'Font Awesome 6 Duotone': { 900: 'fad' },
    'Font Awesome 6 Sharp': { 900: 'fass', 400: 'fasr', normal: 'fasr', 300: 'fasl', 100: 'fast' },
    'Font Awesome 6 Sharp Duotone': { 900: 'fasds' },
  },
  Mx = {
    classic: {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    },
    sharp: { 'fa-solid': 'fass', 'fa-regular': 'fasr', 'fa-light': 'fasl', 'fa-thin': 'fast' },
    'sharp-duotone': { 'fa-solid': 'fasds' },
  },
  Fx = { classic: ['fas', 'far', 'fal', 'fat'], sharp: ['fass', 'fasr', 'fasl', 'fast'], 'sharp-duotone': ['fasds'] },
  zx = {
    classic: {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    },
    sharp: { fass: 'fa-solid', fasr: 'fa-regular', fasl: 'fa-light', fast: 'fa-thin' },
    'sharp-duotone': { fasds: 'fa-solid' },
  },
  jx = {
    classic: { solid: 'fas', regular: 'far', light: 'fal', thin: 'fat', duotone: 'fad', brands: 'fab' },
    sharp: { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' },
    'sharp-duotone': { solid: 'fasds' },
  },
  dm = {
    classic: {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
    },
    sharp: {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
      fasl: 'light',
      'fa-light': 'light',
      fast: 'thin',
      'fa-thin': 'thin',
    },
    'sharp-duotone': { fa: 'solid', fasds: 'solid', 'fa-solid': 'solid' },
  },
  $x = ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'],
  pm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Ux = pm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  ki = { GROUP: 'duotone-group', SWAP_OPACITY: 'swap-opacity', PRIMARY: 'primary', SECONDARY: 'secondary' },
  Vx = [
    ...Object.keys(Fx),
    ...$x,
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    'beat',
    'border',
    'fade',
    'beat-fade',
    'bounce',
    'flip-both',
    'flip-horizontal',
    'flip-vertical',
    'flip',
    'fw',
    'inverse',
    'layers-counter',
    'layers-text',
    'layers',
    'li',
    'pull-left',
    'pull-right',
    'pulse',
    'rotate-180',
    'rotate-270',
    'rotate-90',
    'rotate-by',
    'shake',
    'spin-pulse',
    'spin-reverse',
    'spin',
    'stack-1x',
    'stack-2x',
    'stack',
    'ul',
    ki.GROUP,
    ki.SWAP_OPACITY,
    ki.PRIMARY,
    ki.SECONDARY,
  ]
    .concat(pm.map((n) => ''.concat(n, 'x')))
    .concat(Ux.map((n) => 'w-'.concat(n))),
  Bx = {
    'Font Awesome Kit': { 400: 'fak', normal: 'fak' },
    'Font Awesome Kit Duotone': { 400: 'fakd', normal: 'fakd' },
  },
  Wx = { kit: { 'fa-kit': 'fak' } },
  Hx = { kit: { fak: 'fa-kit' } },
  Jd = { kit: { kit: 'fak' }, 'kit-duotone': { 'kit-duotone': 'fakd' } };
const Gt = '___FONT_AWESOME___',
  jl = 16,
  mm = 'fa',
  hm = 'svg-inline--fa',
  qn = 'data-fa-i2svg',
  $l = 'data-fa-pseudo-element',
  Yx = 'data-fa-pseudo-element-pending',
  uu = 'data-prefix',
  cu = 'data-icon',
  Zd = 'fontawesome-i2svg',
  qx = 'async',
  Kx = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  gm = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  vm = [Ne, pt, mt];
function Ai(n) {
  return new Proxy(n, {
    get(i, o) {
      return o in i ? i[o] : i[Ne];
    },
  });
}
const ym = { ...dm };
ym[Ne] = { ...dm[Ne], ...Xd.kit, ...Xd['kit-duotone'] };
const Hn = Ai(ym),
  Ul = { ...jx };
Ul[Ne] = { ...Ul[Ne], ...Jd.kit, ...Jd['kit-duotone'] };
const Ti = Ai(Ul),
  Vl = { ...zx };
Vl[Ne] = { ...Vl[Ne], ...Hx.kit };
const Yn = Ai(Vl),
  Bl = { ...Mx };
Bl[Ne] = { ...Bl[Ne], ...Wx.kit };
const Qx = Ai(Bl),
  Gx = Rx,
  wm = 'fa-layers-text',
  Xx = Ix,
  Jx = { ...Lx };
Ai(Jx);
const Zx = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  Cl = ki,
  Tr = new Set();
Object.keys(Ti[Ne]).map(Tr.add.bind(Tr));
Object.keys(Ti[pt]).map(Tr.add.bind(Tr));
Object.keys(Ti[mt]).map(Tr.add.bind(Tr));
const eS = [..._x, ...Vx],
  Pi = Cn.FontAwesomeConfig || {};
function tS(n) {
  var i = be.querySelector('script[' + n + ']');
  if (i) return i.getAttribute(n);
}
function nS(n) {
  return n === '' ? !0 : n === 'false' ? !1 : n === 'true' ? !0 : n;
}
be &&
  typeof be.querySelector == 'function' &&
  [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ].forEach((i) => {
    let [o, s] = i;
    const l = nS(tS(o));
    l != null && (Pi[s] = l);
  });
const xm = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: mm,
  replacementClass: hm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Pi.familyPrefix && (Pi.cssPrefix = Pi.familyPrefix);
const Lr = { ...xm, ...Pi };
Lr.autoReplaceSvg || (Lr.observeMutations = !1);
const Q = {};
Object.keys(xm).forEach((n) => {
  Object.defineProperty(Q, n, {
    enumerable: !0,
    set: function (i) {
      (Lr[n] = i), bi.forEach((o) => o(Q));
    },
    get: function () {
      return Lr[n];
    },
  });
});
Object.defineProperty(Q, 'familyPrefix', {
  enumerable: !0,
  set: function (n) {
    (Lr.cssPrefix = n), bi.forEach((i) => i(Q));
  },
  get: function () {
    return Lr.cssPrefix;
  },
});
Cn.FontAwesomeConfig = Q;
const bi = [];
function rS(n) {
  return (
    bi.push(n),
    () => {
      bi.splice(bi.indexOf(n), 1);
    }
  );
}
const wn = jl,
  Ft = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function iS(n) {
  if (!n || !Jt) return;
  const i = be.createElement('style');
  i.setAttribute('type', 'text/css'), (i.innerHTML = n);
  const o = be.head.childNodes;
  let s = null;
  for (let l = o.length - 1; l > -1; l--) {
    const c = o[l],
      d = (c.tagName || '').toUpperCase();
    ['STYLE', 'LINK'].indexOf(d) > -1 && (s = c);
  }
  return be.head.insertBefore(i, s), n;
}
const oS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function Li() {
  let n = 12,
    i = '';
  for (; n-- > 0; ) i += oS[(Math.random() * 62) | 0];
  return i;
}
function _r(n) {
  const i = [];
  for (let o = (n || []).length >>> 0; o--; ) i[o] = n[o];
  return i;
}
function fu(n) {
  return n.classList ? _r(n.classList) : (n.getAttribute('class') || '').split(' ').filter((i) => i);
}
function Sm(n) {
  return ''
    .concat(n)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function aS(n) {
  return Object.keys(n || {})
    .reduce((i, o) => i + ''.concat(o, '="').concat(Sm(n[o]), '" '), '')
    .trim();
}
function ga(n) {
  return Object.keys(n || {}).reduce((i, o) => i + ''.concat(o, ': ').concat(n[o].trim(), ';'), '');
}
function du(n) {
  return n.size !== Ft.size || n.x !== Ft.x || n.y !== Ft.y || n.rotate !== Ft.rotate || n.flipX || n.flipY;
}
function sS(n) {
  let { transform: i, containerWidth: o, iconWidth: s } = n;
  const l = { transform: 'translate('.concat(o / 2, ' 256)') },
    c = 'translate('.concat(i.x * 32, ', ').concat(i.y * 32, ') '),
    d = 'scale('.concat((i.size / 16) * (i.flipX ? -1 : 1), ', ').concat((i.size / 16) * (i.flipY ? -1 : 1), ') '),
    p = 'rotate('.concat(i.rotate, ' 0 0)'),
    h = { transform: ''.concat(c, ' ').concat(d, ' ').concat(p) },
    g = { transform: 'translate('.concat((s / 2) * -1, ' -256)') };
  return { outer: l, inner: h, path: g };
}
function lS(n) {
  let { transform: i, width: o = jl, height: s = jl, startCentered: l = !1 } = n,
    c = '';
  return (
    l && cm
      ? (c += 'translate('.concat(i.x / wn - o / 2, 'em, ').concat(i.y / wn - s / 2, 'em) '))
      : l
      ? (c += 'translate(calc(-50% + '.concat(i.x / wn, 'em), calc(-50% + ').concat(i.y / wn, 'em)) '))
      : (c += 'translate('.concat(i.x / wn, 'em, ').concat(i.y / wn, 'em) ')),
    (c += 'scale('.concat((i.size / wn) * (i.flipX ? -1 : 1), ', ').concat((i.size / wn) * (i.flipY ? -1 : 1), ') ')),
    (c += 'rotate('.concat(i.rotate, 'deg) ')),
    c
  );
}
var uS = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function km() {
  const n = mm,
    i = hm,
    o = Q.cssPrefix,
    s = Q.replacementClass;
  let l = uS;
  if (o !== n || s !== i) {
    const c = new RegExp('\\.'.concat(n, '\\-'), 'g'),
      d = new RegExp('\\--'.concat(n, '\\-'), 'g'),
      p = new RegExp('\\.'.concat(i), 'g');
    l = l.replace(c, '.'.concat(o, '-')).replace(d, '--'.concat(o, '-')).replace(p, '.'.concat(s));
  }
  return l;
}
let ep = !1;
function El() {
  Q.autoAddCss && !ep && (iS(km()), (ep = !0));
}
var cS = {
  mixout() {
    return { dom: { css: km, insertCss: El } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        El();
      },
      beforeI2svg() {
        El();
      },
    };
  },
};
const Xt = Cn || {};
Xt[Gt] || (Xt[Gt] = {});
Xt[Gt].styles || (Xt[Gt].styles = {});
Xt[Gt].hooks || (Xt[Gt].hooks = {});
Xt[Gt].shims || (Xt[Gt].shims = []);
var zt = Xt[Gt];
const Cm = [],
  Em = function () {
    be.removeEventListener('DOMContentLoaded', Em), (ua = 1), Cm.map((n) => n());
  };
let ua = !1;
Jt &&
  ((ua = (be.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(be.readyState)),
  ua || be.addEventListener('DOMContentLoaded', Em));
function fS(n) {
  Jt && (ua ? setTimeout(n, 0) : Cm.push(n));
}
function Mi(n) {
  const { tag: i, attributes: o = {}, children: s = [] } = n;
  return typeof n == 'string'
    ? Sm(n)
    : '<'.concat(i, ' ').concat(aS(o), '>').concat(s.map(Mi).join(''), '</').concat(i, '>');
}
function tp(n, i, o) {
  if (n && n[i] && n[i][o]) return { prefix: i, iconName: o, icon: n[i][o] };
}
var Pl = function (i, o, s, l) {
  var c = Object.keys(i),
    d = c.length,
    p = o,
    h,
    g,
    v;
  for (s === void 0 ? ((h = 1), (v = i[c[0]])) : ((h = 0), (v = s)); h < d; h++) (g = c[h]), (v = p(v, i[g], g, i));
  return v;
};
function dS(n) {
  const i = [];
  let o = 0;
  const s = n.length;
  for (; o < s; ) {
    const l = n.charCodeAt(o++);
    if (l >= 55296 && l <= 56319 && o < s) {
      const c = n.charCodeAt(o++);
      (c & 64512) == 56320 ? i.push(((l & 1023) << 10) + (c & 1023) + 65536) : (i.push(l), o--);
    } else i.push(l);
  }
  return i;
}
function Wl(n) {
  const i = dS(n);
  return i.length === 1 ? i[0].toString(16) : null;
}
function pS(n, i) {
  const o = n.length;
  let s = n.charCodeAt(i),
    l;
  return s >= 55296 && s <= 56319 && o > i + 1 && ((l = n.charCodeAt(i + 1)), l >= 56320 && l <= 57343)
    ? (s - 55296) * 1024 + l - 56320 + 65536
    : s;
}
function np(n) {
  return Object.keys(n).reduce((i, o) => {
    const s = n[o];
    return !!s.icon ? (i[s.iconName] = s.icon) : (i[o] = s), i;
  }, {});
}
function Hl(n, i) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: s = !1 } = o,
    l = np(i);
  typeof zt.hooks.addPack == 'function' && !s
    ? zt.hooks.addPack(n, np(i))
    : (zt.styles[n] = { ...(zt.styles[n] || {}), ...l }),
    n === 'fas' && Hl('fa', i);
}
const { styles: Vn, shims: mS } = zt,
  hS = { [Ne]: Object.values(Yn[Ne]), [pt]: Object.values(Yn[pt]), [mt]: Object.values(Yn[mt]) };
let pu = null,
  Pm = {},
  bm = {},
  Om = {},
  Nm = {},
  Tm = {};
const gS = { [Ne]: Object.keys(Hn[Ne]), [pt]: Object.keys(Hn[pt]), [mt]: Object.keys(Hn[mt]) };
function vS(n) {
  return ~eS.indexOf(n);
}
function yS(n, i) {
  const o = i.split('-'),
    s = o[0],
    l = o.slice(1).join('-');
  return s === n && l !== '' && !vS(l) ? l : null;
}
const Lm = () => {
  const n = (s) => Pl(Vn, (l, c, d) => ((l[d] = Pl(c, s, {})), l), {});
  (Pm = n(
    (s, l, c) => (
      l[3] && (s[l[3]] = c),
      l[2] &&
        l[2]
          .filter((p) => typeof p == 'number')
          .forEach((p) => {
            s[p.toString(16)] = c;
          }),
      s
    )
  )),
    (bm = n(
      (s, l, c) => (
        (s[c] = c),
        l[2] &&
          l[2]
            .filter((p) => typeof p == 'string')
            .forEach((p) => {
              s[p] = c;
            }),
        s
      )
    )),
    (Tm = n((s, l, c) => {
      const d = l[2];
      return (
        (s[c] = c),
        d.forEach((p) => {
          s[p] = c;
        }),
        s
      );
    }));
  const i = 'far' in Vn || Q.autoFetchSvg,
    o = Pl(
      mS,
      (s, l) => {
        const c = l[0];
        let d = l[1];
        const p = l[2];
        return (
          d === 'far' && !i && (d = 'fas'),
          typeof c == 'string' && (s.names[c] = { prefix: d, iconName: p }),
          typeof c == 'number' && (s.unicodes[c.toString(16)] = { prefix: d, iconName: p }),
          s
        );
      },
      { names: {}, unicodes: {} }
    );
  (Om = o.names), (Nm = o.unicodes), (pu = va(Q.styleDefault, { family: Q.familyDefault }));
};
rS((n) => {
  pu = va(n.styleDefault, { family: Q.familyDefault });
});
Lm();
function mu(n, i) {
  return (Pm[n] || {})[i];
}
function wS(n, i) {
  return (bm[n] || {})[i];
}
function Sn(n, i) {
  return (Tm[n] || {})[i];
}
function _m(n) {
  return Om[n] || { prefix: null, iconName: null };
}
function xS(n) {
  const i = Nm[n],
    o = mu('fas', n);
  return i || (o ? { prefix: 'fas', iconName: o } : null) || { prefix: null, iconName: null };
}
function En() {
  return pu;
}
const hu = () => ({ prefix: null, iconName: null, rest: [] });
function va(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: o = Ne } = i,
    s = Hn[o][n],
    l = Ti[o][n] || Ti[o][s],
    c = n in zt.styles ? n : null;
  return l || c || null;
}
const SS = { [Ne]: Object.keys(Yn[Ne]), [pt]: Object.keys(Yn[pt]), [mt]: Object.keys(Yn[mt]) };
function ya(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: o = !1 } = i,
    s = {
      [Ne]: ''.concat(Q.cssPrefix, '-').concat(Ne),
      [pt]: ''.concat(Q.cssPrefix, '-').concat(pt),
      [mt]: ''.concat(Q.cssPrefix, '-').concat(mt),
    };
  let l = null,
    c = Ne;
  const d = Tx.filter((h) => h !== fm);
  d.forEach((h) => {
    (n.includes(s[h]) || n.some((g) => SS[h].includes(g))) && (c = h);
  });
  const p = n.reduce((h, g) => {
    const v = yS(Q.cssPrefix, g);
    if (
      (Vn[g]
        ? ((g = hS[c].includes(g) ? Qx[c][g] : g), (l = g), (h.prefix = g))
        : gS[c].indexOf(g) > -1
        ? ((l = g), (h.prefix = va(g, { family: c })))
        : v
        ? (h.iconName = v)
        : g !== Q.replacementClass && !d.some((x) => g === s[x]) && h.rest.push(g),
      !o && h.prefix && h.iconName)
    ) {
      const x = l === 'fa' ? _m(h.iconName) : {},
        w = Sn(h.prefix, h.iconName);
      x.prefix && (l = null),
        (h.iconName = x.iconName || w || h.iconName),
        (h.prefix = x.prefix || h.prefix),
        h.prefix === 'far' && !Vn.far && Vn.fas && !Q.autoFetchSvg && (h.prefix = 'fas');
    }
    return h;
  }, hu());
  return (
    (n.includes('fa-brands') || n.includes('fab')) && (p.prefix = 'fab'),
    (n.includes('fa-duotone') || n.includes('fad')) && (p.prefix = 'fad'),
    !p.prefix &&
      c === pt &&
      (Vn.fass || Q.autoFetchSvg) &&
      ((p.prefix = 'fass'), (p.iconName = Sn(p.prefix, p.iconName) || p.iconName)),
    !p.prefix &&
      c === mt &&
      (Vn.fasds || Q.autoFetchSvg) &&
      ((p.prefix = 'fasds'), (p.iconName = Sn(p.prefix, p.iconName) || p.iconName)),
    (p.prefix === 'fa' || l === 'fa') && (p.prefix = En() || 'fas'),
    p
  );
}
class kS {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    const l = o.reduce(this._pullDefinitions, {});
    Object.keys(l).forEach((c) => {
      (this.definitions[c] = { ...(this.definitions[c] || {}), ...l[c] }), Hl(c, l[c]);
      const d = Yn[Ne][c];
      d && Hl(d, l[c]), Lm();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(i, o) {
    const s = o.prefix && o.iconName && o.icon ? { 0: o } : o;
    return (
      Object.keys(s).map((l) => {
        const { prefix: c, iconName: d, icon: p } = s[l],
          h = p[2];
        i[c] || (i[c] = {}),
          h.length > 0 &&
            h.forEach((g) => {
              typeof g == 'string' && (i[c][g] = p);
            }),
          (i[c][d] = p);
      }),
      i
    );
  }
}
let rp = [],
  br = {};
const Nr = {},
  CS = Object.keys(Nr);
function ES(n, i) {
  let { mixoutsTo: o } = i;
  return (
    (rp = n),
    (br = {}),
    Object.keys(Nr).forEach((s) => {
      CS.indexOf(s) === -1 && delete Nr[s];
    }),
    rp.forEach((s) => {
      const l = s.mixout ? s.mixout() : {};
      if (
        (Object.keys(l).forEach((c) => {
          typeof l[c] == 'function' && (o[c] = l[c]),
            typeof l[c] == 'object' &&
              Object.keys(l[c]).forEach((d) => {
                o[c] || (o[c] = {}), (o[c][d] = l[c][d]);
              });
        }),
        s.hooks)
      ) {
        const c = s.hooks();
        Object.keys(c).forEach((d) => {
          br[d] || (br[d] = []), br[d].push(c[d]);
        });
      }
      s.provides && s.provides(Nr);
    }),
    o
  );
}
function Yl(n, i) {
  for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), l = 2; l < o; l++) s[l - 2] = arguments[l];
  return (
    (br[n] || []).forEach((d) => {
      i = d.apply(null, [i, ...s]);
    }),
    i
  );
}
function Kn(n) {
  for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
  (br[n] || []).forEach((c) => {
    c.apply(null, o);
  });
}
function Pn() {
  const n = arguments[0],
    i = Array.prototype.slice.call(arguments, 1);
  return Nr[n] ? Nr[n].apply(null, i) : void 0;
}
function ql(n) {
  n.prefix === 'fa' && (n.prefix = 'fas');
  let { iconName: i } = n;
  const o = n.prefix || En();
  if (i) return (i = Sn(o, i) || i), tp(Rm.definitions, o, i) || tp(zt.styles, o, i);
}
const Rm = new kS(),
  PS = () => {
    (Q.autoReplaceSvg = !1), (Q.observeMutations = !1), Kn('noAuto');
  },
  bS = {
    i2svg: function () {
      let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Jt
        ? (Kn('beforeI2svg', n), Pn('pseudoElements2svg', n), Pn('i2svg', n))
        : Promise.reject(new Error('Operation requires a DOM of some kind.'));
    },
    watch: function () {
      let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: i } = n;
      Q.autoReplaceSvg === !1 && (Q.autoReplaceSvg = !0),
        (Q.observeMutations = !0),
        fS(() => {
          NS({ autoReplaceSvgRoot: i }), Kn('watch', n);
        });
    },
  },
  OS = {
    icon: (n) => {
      if (n === null) return null;
      if (typeof n == 'object' && n.prefix && n.iconName)
        return { prefix: n.prefix, iconName: Sn(n.prefix, n.iconName) || n.iconName };
      if (Array.isArray(n) && n.length === 2) {
        const i = n[1].indexOf('fa-') === 0 ? n[1].slice(3) : n[1],
          o = va(n[0]);
        return { prefix: o, iconName: Sn(o, i) || i };
      }
      if (typeof n == 'string' && (n.indexOf(''.concat(Q.cssPrefix, '-')) > -1 || n.match(Gx))) {
        const i = ya(n.split(' '), { skipLookups: !0 });
        return { prefix: i.prefix || En(), iconName: Sn(i.prefix, i.iconName) || i.iconName };
      }
      if (typeof n == 'string') {
        const i = En();
        return { prefix: i, iconName: Sn(i, n) || n };
      }
    },
  },
  ht = { noAuto: PS, config: Q, dom: bS, parse: OS, library: Rm, findIconDefinition: ql, toHtml: Mi },
  NS = function () {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: i = be } = n;
    (Object.keys(zt.styles).length > 0 || Q.autoFetchSvg) && Jt && Q.autoReplaceSvg && ht.dom.i2svg({ node: i });
  };
function wa(n, i) {
  return (
    Object.defineProperty(n, 'abstract', { get: i }),
    Object.defineProperty(n, 'html', {
      get: function () {
        return n.abstract.map((o) => Mi(o));
      },
    }),
    Object.defineProperty(n, 'node', {
      get: function () {
        if (!Jt) return;
        const o = be.createElement('div');
        return (o.innerHTML = n.html), o.children;
      },
    }),
    n
  );
}
function TS(n) {
  let { children: i, main: o, mask: s, attributes: l, styles: c, transform: d } = n;
  if (du(d) && o.found && !s.found) {
    const { width: p, height: h } = o,
      g = { x: p / h / 2, y: 0.5 };
    l.style = ga({ ...c, 'transform-origin': ''.concat(g.x + d.x / 16, 'em ').concat(g.y + d.y / 16, 'em') });
  }
  return [{ tag: 'svg', attributes: l, children: i }];
}
function LS(n) {
  let { prefix: i, iconName: o, children: s, attributes: l, symbol: c } = n;
  const d = c === !0 ? ''.concat(i, '-').concat(Q.cssPrefix, '-').concat(o) : c;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: { ...l, id: d }, children: s }],
    },
  ];
}
function gu(n) {
  const {
      icons: { main: i, mask: o },
      prefix: s,
      iconName: l,
      transform: c,
      symbol: d,
      title: p,
      maskId: h,
      titleId: g,
      extra: v,
      watchable: x = !1,
    } = n,
    { width: w, height: O } = o.found ? o : i,
    L = s === 'fak',
    P = [Q.replacementClass, l ? ''.concat(Q.cssPrefix, '-').concat(l) : '']
      .filter((R) => v.classes.indexOf(R) === -1)
      .filter((R) => R !== '' || !!R)
      .concat(v.classes)
      .join(' ');
  let T = {
    children: [],
    attributes: {
      ...v.attributes,
      'data-prefix': s,
      'data-icon': l,
      class: P,
      role: v.attributes.role || 'img',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 '.concat(w, ' ').concat(O),
    },
  };
  const V = L && !~v.classes.indexOf('fa-fw') ? { width: ''.concat((w / O) * 16 * 0.0625, 'em') } : {};
  x && (T.attributes[qn] = ''),
    p &&
      (T.children.push({
        tag: 'title',
        attributes: { id: T.attributes['aria-labelledby'] || 'title-'.concat(g || Li()) },
        children: [p],
      }),
      delete T.attributes.title);
  const A = {
      ...T,
      prefix: s,
      iconName: l,
      main: i,
      mask: o,
      maskId: h,
      transform: c,
      symbol: d,
      styles: { ...V, ...v.styles },
    },
    { children: z, attributes: U } =
      o.found && i.found
        ? Pn('generateAbstractMask', A) || { children: [], attributes: {} }
        : Pn('generateAbstractIcon', A) || { children: [], attributes: {} };
  return (A.children = z), (A.attributes = U), d ? LS(A) : TS(A);
}
function ip(n) {
  const { content: i, width: o, height: s, transform: l, title: c, extra: d, watchable: p = !1 } = n,
    h = { ...d.attributes, ...(c ? { title: c } : {}), class: d.classes.join(' ') };
  p && (h[qn] = '');
  const g = { ...d.styles };
  du(l) &&
    ((g.transform = lS({ transform: l, startCentered: !0, width: o, height: s })),
    (g['-webkit-transform'] = g.transform));
  const v = ga(g);
  v.length > 0 && (h.style = v);
  const x = [];
  return (
    x.push({ tag: 'span', attributes: h, children: [i] }),
    c && x.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [c] }),
    x
  );
}
function _S(n) {
  const { content: i, title: o, extra: s } = n,
    l = { ...s.attributes, ...(o ? { title: o } : {}), class: s.classes.join(' ') },
    c = ga(s.styles);
  c.length > 0 && (l.style = c);
  const d = [];
  return (
    d.push({ tag: 'span', attributes: l, children: [i] }),
    o && d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
    d
  );
}
const { styles: bl } = zt;
function Kl(n) {
  const i = n[0],
    o = n[1],
    [s] = n.slice(4);
  let l = null;
  return (
    Array.isArray(s)
      ? (l = {
          tag: 'g',
          attributes: { class: ''.concat(Q.cssPrefix, '-').concat(Cl.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: { class: ''.concat(Q.cssPrefix, '-').concat(Cl.SECONDARY), fill: 'currentColor', d: s[0] },
            },
            {
              tag: 'path',
              attributes: { class: ''.concat(Q.cssPrefix, '-').concat(Cl.PRIMARY), fill: 'currentColor', d: s[1] },
            },
          ],
        })
      : (l = { tag: 'path', attributes: { fill: 'currentColor', d: s } }),
    { found: !0, width: i, height: o, icon: l }
  );
}
const RS = { found: !1, width: 512, height: 512 };
function IS(n, i) {
  !gm &&
    !Q.showMissingIcons &&
    n &&
    console.error('Icon with name "'.concat(n, '" and prefix "').concat(i, '" is missing.'));
}
function Ql(n, i) {
  let o = i;
  return (
    i === 'fa' && Q.styleDefault !== null && (i = En()),
    new Promise((s, l) => {
      if (o === 'fa') {
        const c = _m(n) || {};
        (n = c.iconName || n), (i = c.prefix || i);
      }
      if (n && i && bl[i] && bl[i][n]) {
        const c = bl[i][n];
        return s(Kl(c));
      }
      IS(n, i), s({ ...RS, icon: Q.showMissingIcons && n ? Pn('missingIconAbstract') || {} : {} });
    })
  );
}
const op = () => {},
  Gl = Q.measurePerformance && Zo && Zo.mark && Zo.measure ? Zo : { mark: op, measure: op },
  Ci = 'FA "6.6.0"',
  DS = (n) => (Gl.mark(''.concat(Ci, ' ').concat(n, ' begins')), () => Im(n)),
  Im = (n) => {
    Gl.mark(''.concat(Ci, ' ').concat(n, ' ends')),
      Gl.measure(
        ''.concat(Ci, ' ').concat(n),
        ''.concat(Ci, ' ').concat(n, ' begins'),
        ''.concat(Ci, ' ').concat(n, ' ends')
      );
  };
var vu = { begin: DS, end: Im };
const ta = () => {};
function ap(n) {
  return typeof (n.getAttribute ? n.getAttribute(qn) : null) == 'string';
}
function AS(n) {
  const i = n.getAttribute ? n.getAttribute(uu) : null,
    o = n.getAttribute ? n.getAttribute(cu) : null;
  return i && o;
}
function MS(n) {
  return n && n.classList && n.classList.contains && n.classList.contains(Q.replacementClass);
}
function FS() {
  return Q.autoReplaceSvg === !0 ? na.replace : na[Q.autoReplaceSvg] || na.replace;
}
function zS(n) {
  return be.createElementNS('http://www.w3.org/2000/svg', n);
}
function jS(n) {
  return be.createElement(n);
}
function Dm(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: o = n.tag === 'svg' ? zS : jS } = i;
  if (typeof n == 'string') return be.createTextNode(n);
  const s = o(n.tag);
  return (
    Object.keys(n.attributes || []).forEach(function (c) {
      s.setAttribute(c, n.attributes[c]);
    }),
    (n.children || []).forEach(function (c) {
      s.appendChild(Dm(c, { ceFn: o }));
    }),
    s
  );
}
function $S(n) {
  let i = ' '.concat(n.outerHTML, ' ');
  return (i = ''.concat(i, 'Font Awesome fontawesome.com ')), i;
}
const na = {
  replace: function (n) {
    const i = n[0];
    if (i.parentNode)
      if (
        (n[1].forEach((o) => {
          i.parentNode.insertBefore(Dm(o), i);
        }),
        i.getAttribute(qn) === null && Q.keepOriginalSource)
      ) {
        let o = be.createComment($S(i));
        i.parentNode.replaceChild(o, i);
      } else i.remove();
  },
  nest: function (n) {
    const i = n[0],
      o = n[1];
    if (~fu(i).indexOf(Q.replacementClass)) return na.replace(n);
    const s = new RegExp(''.concat(Q.cssPrefix, '-.*'));
    if ((delete o[0].attributes.id, o[0].attributes.class)) {
      const c = o[0].attributes.class
        .split(' ')
        .reduce((d, p) => (p === Q.replacementClass || p.match(s) ? d.toSvg.push(p) : d.toNode.push(p), d), {
          toNode: [],
          toSvg: [],
        });
      (o[0].attributes.class = c.toSvg.join(' ')),
        c.toNode.length === 0 ? i.removeAttribute('class') : i.setAttribute('class', c.toNode.join(' '));
    }
    const l = o.map((c) => Mi(c)).join(`
`);
    i.setAttribute(qn, ''), (i.innerHTML = l);
  },
};
function sp(n) {
  n();
}
function Am(n, i) {
  const o = typeof i == 'function' ? i : ta;
  if (n.length === 0) o();
  else {
    let s = sp;
    Q.mutateApproach === qx && (s = Cn.requestAnimationFrame || sp),
      s(() => {
        const l = FS(),
          c = vu.begin('mutate');
        n.map(l), c(), o();
      });
  }
}
let yu = !1;
function Mm() {
  yu = !0;
}
function Xl() {
  yu = !1;
}
let ca = null;
function lp(n) {
  if (!Gd || !Q.observeMutations) return;
  const {
    treeCallback: i = ta,
    nodeCallback: o = ta,
    pseudoElementsCallback: s = ta,
    observeMutationsRoot: l = be,
  } = n;
  (ca = new Gd((c) => {
    if (yu) return;
    const d = En();
    _r(c).forEach((p) => {
      if (
        (p.type === 'childList' &&
          p.addedNodes.length > 0 &&
          !ap(p.addedNodes[0]) &&
          (Q.searchPseudoElements && s(p.target), i(p.target)),
        p.type === 'attributes' && p.target.parentNode && Q.searchPseudoElements && s(p.target.parentNode),
        p.type === 'attributes' && ap(p.target) && ~Zx.indexOf(p.attributeName))
      )
        if (p.attributeName === 'class' && AS(p.target)) {
          const { prefix: h, iconName: g } = ya(fu(p.target));
          p.target.setAttribute(uu, h || d), g && p.target.setAttribute(cu, g);
        } else MS(p.target) && o(p.target);
    });
  })),
    Jt && ca.observe(l, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
}
function US() {
  ca && ca.disconnect();
}
function VS(n) {
  const i = n.getAttribute('style');
  let o = [];
  return (
    i &&
      (o = i.split(';').reduce((s, l) => {
        const c = l.split(':'),
          d = c[0],
          p = c.slice(1);
        return d && p.length > 0 && (s[d] = p.join(':').trim()), s;
      }, {})),
    o
  );
}
function BS(n) {
  const i = n.getAttribute('data-prefix'),
    o = n.getAttribute('data-icon'),
    s = n.innerText !== void 0 ? n.innerText.trim() : '';
  let l = ya(fu(n));
  return (
    l.prefix || (l.prefix = En()),
    i && o && ((l.prefix = i), (l.iconName = o)),
    (l.iconName && l.prefix) ||
      (l.prefix && s.length > 0 && (l.iconName = wS(l.prefix, n.innerText) || mu(l.prefix, Wl(n.innerText))),
      !l.iconName &&
        Q.autoFetchSvg &&
        n.firstChild &&
        n.firstChild.nodeType === Node.TEXT_NODE &&
        (l.iconName = n.firstChild.data)),
    l
  );
}
function WS(n) {
  const i = _r(n.attributes).reduce(
      (l, c) => (l.name !== 'class' && l.name !== 'style' && (l[c.name] = c.value), l),
      {}
    ),
    o = n.getAttribute('title'),
    s = n.getAttribute('data-fa-title-id');
  return (
    Q.autoA11y &&
      (o
        ? (i['aria-labelledby'] = ''.concat(Q.replacementClass, '-title-').concat(s || Li()))
        : ((i['aria-hidden'] = 'true'), (i.focusable = 'false'))),
    i
  );
}
function HS() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ft,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function up(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 };
  const { iconName: o, prefix: s, rest: l } = BS(n),
    c = WS(n),
    d = Yl('parseNodeAttributes', {}, n);
  let p = i.styleParser ? VS(n) : [];
  return {
    iconName: o,
    title: n.getAttribute('title'),
    titleId: n.getAttribute('data-fa-title-id'),
    prefix: s,
    transform: Ft,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    symbol: !1,
    extra: { classes: l, styles: p, attributes: c },
    ...d,
  };
}
const { styles: YS } = zt;
function Fm(n) {
  const i = Q.autoReplaceSvg === 'nest' ? up(n, { styleParser: !1 }) : up(n);
  return ~i.extra.classes.indexOf(wm) ? Pn('generateLayersText', n, i) : Pn('generateSvgReplacementMutation', n, i);
}
let jt = new Set();
vm.map((n) => {
  jt.add('fa-'.concat(n));
});
Object.keys(Hn[Ne]).map(jt.add.bind(jt));
Object.keys(Hn[pt]).map(jt.add.bind(jt));
Object.keys(Hn[mt]).map(jt.add.bind(jt));
jt = [...jt];
function cp(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Jt) return Promise.resolve();
  const o = be.documentElement.classList,
    s = (v) => o.add(''.concat(Zd, '-').concat(v)),
    l = (v) => o.remove(''.concat(Zd, '-').concat(v)),
    c = Q.autoFetchSvg ? jt : vm.map((v) => 'fa-'.concat(v)).concat(Object.keys(YS));
  c.includes('fa') || c.push('fa');
  const d = ['.'.concat(wm, ':not([').concat(qn, '])')]
    .concat(c.map((v) => '.'.concat(v, ':not([').concat(qn, '])')))
    .join(', ');
  if (d.length === 0) return Promise.resolve();
  let p = [];
  try {
    p = _r(n.querySelectorAll(d));
  } catch {}
  if (p.length > 0) s('pending'), l('complete');
  else return Promise.resolve();
  const h = vu.begin('onTree'),
    g = p.reduce((v, x) => {
      try {
        const w = Fm(x);
        w && v.push(w);
      } catch (w) {
        gm || (w.name === 'MissingIcon' && console.error(w));
      }
      return v;
    }, []);
  return new Promise((v, x) => {
    Promise.all(g)
      .then((w) => {
        Am(w, () => {
          s('active'), s('complete'), l('pending'), typeof i == 'function' && i(), h(), v();
        });
      })
      .catch((w) => {
        h(), x(w);
      });
  });
}
function qS(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Fm(n).then((o) => {
    o && Am([o], i);
  });
}
function KS(n) {
  return function (i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = (i || {}).icon ? i : ql(i || {});
    let { mask: l } = o;
    return l && (l = (l || {}).icon ? l : ql(l || {})), n(s, { ...o, mask: l });
  };
}
const QS = function (n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: o = Ft,
    symbol: s = !1,
    mask: l = null,
    maskId: c = null,
    title: d = null,
    titleId: p = null,
    classes: h = [],
    attributes: g = {},
    styles: v = {},
  } = i;
  if (!n) return;
  const { prefix: x, iconName: w, icon: O } = n;
  return wa(
    { type: 'icon', ...n },
    () => (
      Kn('beforeDOMElementCreation', { iconDefinition: n, params: i }),
      Q.autoA11y &&
        (d
          ? (g['aria-labelledby'] = ''.concat(Q.replacementClass, '-title-').concat(p || Li()))
          : ((g['aria-hidden'] = 'true'), (g.focusable = 'false'))),
      gu({
        icons: { main: Kl(O), mask: l ? Kl(l.icon) : { found: !1, width: null, height: null, icon: {} } },
        prefix: x,
        iconName: w,
        transform: { ...Ft, ...o },
        symbol: s,
        title: d,
        maskId: c,
        titleId: p,
        extra: { attributes: g, styles: v, classes: h },
      })
    )
  );
};
var GS = {
    mixout() {
      return { icon: KS(QS) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(n) {
          return (n.treeCallback = cp), (n.nodeCallback = qS), n;
        },
      };
    },
    provides(n) {
      (n.i2svg = function (i) {
        const { node: o = be, callback: s = () => {} } = i;
        return cp(o, s);
      }),
        (n.generateSvgReplacementMutation = function (i, o) {
          const {
            iconName: s,
            title: l,
            titleId: c,
            prefix: d,
            transform: p,
            symbol: h,
            mask: g,
            maskId: v,
            extra: x,
          } = o;
          return new Promise((w, O) => {
            Promise.all([
              Ql(s, d),
              g.iconName ? Ql(g.iconName, g.prefix) : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
            ])
              .then((L) => {
                let [P, T] = L;
                w([
                  i,
                  gu({
                    icons: { main: P, mask: T },
                    prefix: d,
                    iconName: s,
                    transform: p,
                    symbol: h,
                    maskId: v,
                    title: l,
                    titleId: c,
                    extra: x,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(O);
          });
        }),
        (n.generateAbstractIcon = function (i) {
          let { children: o, attributes: s, main: l, transform: c, styles: d } = i;
          const p = ga(d);
          p.length > 0 && (s.style = p);
          let h;
          return (
            du(c) &&
              (h = Pn('generateAbstractTransformGrouping', {
                main: l,
                transform: c,
                containerWidth: l.width,
                iconWidth: l.width,
              })),
            o.push(h || l.icon),
            { children: o, attributes: s }
          );
        });
    },
  },
  XS = {
    mixout() {
      return {
        layer(n) {
          let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: o = [] } = i;
          return wa({ type: 'layer' }, () => {
            Kn('beforeDOMElementCreation', { assembler: n, params: i });
            let s = [];
            return (
              n((l) => {
                Array.isArray(l)
                  ? l.map((c) => {
                      s = s.concat(c.abstract);
                    })
                  : (s = s.concat(l.abstract));
              }),
              [{ tag: 'span', attributes: { class: [''.concat(Q.cssPrefix, '-layers'), ...o].join(' ') }, children: s }]
            );
          });
        },
      };
    },
  },
  JS = {
    mixout() {
      return {
        counter(n) {
          let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { title: o = null, classes: s = [], attributes: l = {}, styles: c = {} } = i;
          return wa(
            { type: 'counter', content: n },
            () => (
              Kn('beforeDOMElementCreation', { content: n, params: i }),
              _S({
                content: n.toString(),
                title: o,
                extra: { attributes: l, styles: c, classes: [''.concat(Q.cssPrefix, '-layers-counter'), ...s] },
              })
            )
          );
        },
      };
    },
  },
  ZS = {
    mixout() {
      return {
        text(n) {
          let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { transform: o = Ft, title: s = null, classes: l = [], attributes: c = {}, styles: d = {} } = i;
          return wa(
            { type: 'text', content: n },
            () => (
              Kn('beforeDOMElementCreation', { content: n, params: i }),
              ip({
                content: n,
                transform: { ...Ft, ...o },
                title: s,
                extra: { attributes: c, styles: d, classes: [''.concat(Q.cssPrefix, '-layers-text'), ...l] },
              })
            )
          );
        },
      };
    },
    provides(n) {
      n.generateLayersText = function (i, o) {
        const { title: s, transform: l, extra: c } = o;
        let d = null,
          p = null;
        if (cm) {
          const h = parseInt(getComputedStyle(i).fontSize, 10),
            g = i.getBoundingClientRect();
          (d = g.width / h), (p = g.height / h);
        }
        return (
          Q.autoA11y && !s && (c.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            i,
            ip({ content: i.innerHTML, width: d, height: p, transform: l, title: s, extra: c, watchable: !0 }),
          ])
        );
      };
    },
  };
const ek = new RegExp('"', 'ug'),
  fp = [1105920, 1112319],
  dp = { FontAwesome: { normal: 'fas', 400: 'fas' }, ...Ax, ...Dx, ...Bx },
  Jl = Object.keys(dp).reduce((n, i) => ((n[i.toLowerCase()] = dp[i]), n), {}),
  tk = Object.keys(Jl).reduce((n, i) => {
    const o = Jl[i];
    return (n[i] = o[900] || [...Object.entries(o)][0][1]), n;
  }, {});
function nk(n) {
  const i = n.replace(ek, ''),
    o = pS(i, 0),
    s = o >= fp[0] && o <= fp[1],
    l = i.length === 2 ? i[0] === i[1] : !1;
  return { value: Wl(l ? i[0] : i), isSecondary: s || l };
}
function rk(n, i) {
  const o = n.replace(/^['"]|['"]$/g, '').toLowerCase(),
    s = parseInt(i),
    l = isNaN(s) ? 'normal' : s;
  return (Jl[o] || {})[l] || tk[o];
}
function pp(n, i) {
  const o = ''.concat(Yx).concat(i.replace(':', '-'));
  return new Promise((s, l) => {
    if (n.getAttribute(o) !== null) return s();
    const d = _r(n.children).filter((w) => w.getAttribute($l) === i)[0],
      p = Cn.getComputedStyle(n, i),
      h = p.getPropertyValue('font-family'),
      g = h.match(Xx),
      v = p.getPropertyValue('font-weight'),
      x = p.getPropertyValue('content');
    if (d && !g) return n.removeChild(d), s();
    if (g && x !== 'none' && x !== '') {
      const w = p.getPropertyValue('content');
      let O = rk(h, v);
      const { value: L, isSecondary: P } = nk(w),
        T = g[0].startsWith('FontAwesome');
      let V = mu(O, L),
        A = V;
      if (T) {
        const z = xS(L);
        z.iconName && z.prefix && ((V = z.iconName), (O = z.prefix));
      }
      if (V && !P && (!d || d.getAttribute(uu) !== O || d.getAttribute(cu) !== A)) {
        n.setAttribute(o, A), d && n.removeChild(d);
        const z = HS(),
          { extra: U } = z;
        (U.attributes[$l] = i),
          Ql(V, O)
            .then((R) => {
              const J = gu({ ...z, icons: { main: R, mask: hu() }, prefix: O, iconName: A, extra: U, watchable: !0 }),
                te = be.createElementNS('http://www.w3.org/2000/svg', 'svg');
              i === '::before' ? n.insertBefore(te, n.firstChild) : n.appendChild(te),
                (te.outerHTML = J.map((re) => Mi(re)).join(`
`)),
                n.removeAttribute(o),
                s();
            })
            .catch(l);
      } else s();
    } else s();
  });
}
function ik(n) {
  return Promise.all([pp(n, '::before'), pp(n, '::after')]);
}
function ok(n) {
  return (
    n.parentNode !== document.head &&
    !~Kx.indexOf(n.tagName.toUpperCase()) &&
    !n.getAttribute($l) &&
    (!n.parentNode || n.parentNode.tagName !== 'svg')
  );
}
function mp(n) {
  if (Jt)
    return new Promise((i, o) => {
      const s = _r(n.querySelectorAll('*')).filter(ok).map(ik),
        l = vu.begin('searchPseudoElements');
      Mm(),
        Promise.all(s)
          .then(() => {
            l(), Xl(), i();
          })
          .catch(() => {
            l(), Xl(), o();
          });
    });
}
var ak = {
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return (n.pseudoElementsCallback = mp), n;
      },
    };
  },
  provides(n) {
    n.pseudoElements2svg = function (i) {
      const { node: o = be } = i;
      Q.searchPseudoElements && mp(o);
    };
  },
};
let hp = !1;
var sk = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Mm(), (hp = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        lp(Yl('mutationObserverCallbacks', {}));
      },
      noAuto() {
        US();
      },
      watch(n) {
        const { observeMutationsRoot: i } = n;
        hp ? Xl() : lp(Yl('mutationObserverCallbacks', { observeMutationsRoot: i }));
      },
    };
  },
};
const gp = (n) => {
  let i = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return n
    .toLowerCase()
    .split(' ')
    .reduce((o, s) => {
      const l = s.toLowerCase().split('-'),
        c = l[0];
      let d = l.slice(1).join('-');
      if (c && d === 'h') return (o.flipX = !0), o;
      if (c && d === 'v') return (o.flipY = !0), o;
      if (((d = parseFloat(d)), isNaN(d))) return o;
      switch (c) {
        case 'grow':
          o.size = o.size + d;
          break;
        case 'shrink':
          o.size = o.size - d;
          break;
        case 'left':
          o.x = o.x - d;
          break;
        case 'right':
          o.x = o.x + d;
          break;
        case 'up':
          o.y = o.y - d;
          break;
        case 'down':
          o.y = o.y + d;
          break;
        case 'rotate':
          o.rotate = o.rotate + d;
          break;
      }
      return o;
    }, i);
};
var lk = {
  mixout() {
    return { parse: { transform: (n) => gp(n) } };
  },
  hooks() {
    return {
      parseNodeAttributes(n, i) {
        const o = i.getAttribute('data-fa-transform');
        return o && (n.transform = gp(o)), n;
      },
    };
  },
  provides(n) {
    n.generateAbstractTransformGrouping = function (i) {
      let { main: o, transform: s, containerWidth: l, iconWidth: c } = i;
      const d = { transform: 'translate('.concat(l / 2, ' 256)') },
        p = 'translate('.concat(s.x * 32, ', ').concat(s.y * 32, ') '),
        h = 'scale('.concat((s.size / 16) * (s.flipX ? -1 : 1), ', ').concat((s.size / 16) * (s.flipY ? -1 : 1), ') '),
        g = 'rotate('.concat(s.rotate, ' 0 0)'),
        v = { transform: ''.concat(p, ' ').concat(h, ' ').concat(g) },
        x = { transform: 'translate('.concat((c / 2) * -1, ' -256)') },
        w = { outer: d, inner: v, path: x };
      return {
        tag: 'g',
        attributes: { ...w.outer },
        children: [
          {
            tag: 'g',
            attributes: { ...w.inner },
            children: [{ tag: o.icon.tag, children: o.icon.children, attributes: { ...o.icon.attributes, ...w.path } }],
          },
        ],
      };
    };
  },
};
const Ol = { x: 0, y: 0, width: '100%', height: '100%' };
function vp(n) {
  let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.attributes && (n.attributes.fill || i) && (n.attributes.fill = 'black'), n;
}
function uk(n) {
  return n.tag === 'g' ? n.children : [n];
}
var ck = {
    hooks() {
      return {
        parseNodeAttributes(n, i) {
          const o = i.getAttribute('data-fa-mask'),
            s = o ? ya(o.split(' ').map((l) => l.trim())) : hu();
          return s.prefix || (s.prefix = En()), (n.mask = s), (n.maskId = i.getAttribute('data-fa-mask-id')), n;
        },
      };
    },
    provides(n) {
      n.generateAbstractMask = function (i) {
        let { children: o, attributes: s, main: l, mask: c, maskId: d, transform: p } = i;
        const { width: h, icon: g } = l,
          { width: v, icon: x } = c,
          w = sS({ transform: p, containerWidth: v, iconWidth: h }),
          O = { tag: 'rect', attributes: { ...Ol, fill: 'white' } },
          L = g.children ? { children: g.children.map(vp) } : {},
          P = {
            tag: 'g',
            attributes: { ...w.inner },
            children: [vp({ tag: g.tag, attributes: { ...g.attributes, ...w.path }, ...L })],
          },
          T = { tag: 'g', attributes: { ...w.outer }, children: [P] },
          V = 'mask-'.concat(d || Li()),
          A = 'clip-'.concat(d || Li()),
          z = {
            tag: 'mask',
            attributes: { ...Ol, id: V, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' },
            children: [O, T],
          },
          U = { tag: 'defs', children: [{ tag: 'clipPath', attributes: { id: A }, children: uk(x) }, z] };
        return (
          o.push(U, {
            tag: 'rect',
            attributes: {
              fill: 'currentColor',
              'clip-path': 'url(#'.concat(A, ')'),
              mask: 'url(#'.concat(V, ')'),
              ...Ol,
            },
          }),
          { children: o, attributes: s }
        );
      };
    },
  },
  fk = {
    provides(n) {
      let i = !1;
      Cn.matchMedia && (i = Cn.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (n.missingIconAbstract = function () {
          const o = [],
            s = { fill: 'currentColor' },
            l = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          o.push({
            tag: 'path',
            attributes: {
              ...s,
              d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
            },
          });
          const c = { ...l, attributeName: 'opacity' },
            d = { tag: 'circle', attributes: { ...s, cx: '256', cy: '364', r: '28' }, children: [] };
          return (
            i ||
              d.children.push(
                { tag: 'animate', attributes: { ...l, attributeName: 'r', values: '28;14;28;28;14;28;' } },
                { tag: 'animate', attributes: { ...c, values: '1;0;1;1;0;1;' } }
              ),
            o.push(d),
            o.push({
              tag: 'path',
              attributes: {
                ...s,
                opacity: '1',
                d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
              },
              children: i ? [] : [{ tag: 'animate', attributes: { ...c, values: '1;0;0;0;0;1;' } }],
            }),
            i ||
              o.push({
                tag: 'path',
                attributes: {
                  ...s,
                  opacity: '0',
                  d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                },
                children: [{ tag: 'animate', attributes: { ...c, values: '0;0;1;1;0;0;' } }],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: o }
          );
        });
    },
  },
  dk = {
    hooks() {
      return {
        parseNodeAttributes(n, i) {
          const o = i.getAttribute('data-fa-symbol'),
            s = o === null ? !1 : o === '' ? !0 : o;
          return (n.symbol = s), n;
        },
      };
    },
  },
  pk = [cS, GS, XS, JS, ZS, ak, sk, lk, ck, fk, dk];
ES(pk, { mixoutsTo: ht });
ht.noAuto;
ht.config;
ht.library;
ht.dom;
const Zl = ht.parse;
ht.findIconDefinition;
ht.toHtml;
const mk = ht.icon;
ht.layer;
ht.text;
ht.counter;
var Nl = { exports: {} },
  Tl,
  yp;
function hk() {
  if (yp) return Tl;
  yp = 1;
  var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return (Tl = n), Tl;
}
var Ll, wp;
function gk() {
  if (wp) return Ll;
  wp = 1;
  var n = hk();
  function i() {}
  function o() {}
  return (
    (o.resetWarningCache = i),
    (Ll = function () {
      function s(d, p, h, g, v, x) {
        if (x !== n) {
          var w = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((w.name = 'Invariant Violation'), w);
        }
      }
      s.isRequired = s;
      function l() {
        return s;
      }
      var c = {
        array: s,
        bigint: s,
        bool: s,
        func: s,
        number: s,
        object: s,
        string: s,
        symbol: s,
        any: s,
        arrayOf: l,
        element: s,
        elementType: s,
        instanceOf: l,
        node: s,
        objectOf: l,
        oneOf: l,
        oneOfType: l,
        shape: l,
        exact: l,
        checkPropTypes: o,
        resetWarningCache: i,
      };
      return (c.PropTypes = c), c;
    }),
    Ll
  );
}
var xp;
function vk() {
  return xp || ((xp = 1), (Nl.exports = gk()())), Nl.exports;
}
var yk = vk();
const le = pa(yk);
function Sp(n, i) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    i &&
      (s = s.filter(function (l) {
        return Object.getOwnPropertyDescriptor(n, l).enumerable;
      })),
      o.push.apply(o, s);
  }
  return o;
}
function At(n) {
  for (var i = 1; i < arguments.length; i++) {
    var o = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? Sp(Object(o), !0).forEach(function (s) {
          Or(n, s, o[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
      : Sp(Object(o)).forEach(function (s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(o, s));
        });
  }
  return n;
}
function fa(n) {
  '@babel/helpers - typeof';
  return (
    (fa =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (i) {
            return typeof i;
          }
        : function (i) {
            return i && typeof Symbol == 'function' && i.constructor === Symbol && i !== Symbol.prototype
              ? 'symbol'
              : typeof i;
          }),
    fa(n)
  );
}
function Or(n, i, o) {
  return (
    i in n ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (n[i] = o), n
  );
}
function wk(n, i) {
  if (n == null) return {};
  var o = {},
    s = Object.keys(n),
    l,
    c;
  for (c = 0; c < s.length; c++) (l = s[c]), !(i.indexOf(l) >= 0) && (o[l] = n[l]);
  return o;
}
function xk(n, i) {
  if (n == null) return {};
  var o = wk(n, i),
    s,
    l;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (l = 0; l < c.length; l++)
      (s = c[l]), !(i.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (o[s] = n[s]);
  }
  return o;
}
function eu(n) {
  return Sk(n) || kk(n) || Ck(n) || Ek();
}
function Sk(n) {
  if (Array.isArray(n)) return tu(n);
}
function kk(n) {
  if ((typeof Symbol < 'u' && n[Symbol.iterator] != null) || n['@@iterator'] != null) return Array.from(n);
}
function Ck(n, i) {
  if (n) {
    if (typeof n == 'string') return tu(n, i);
    var o = Object.prototype.toString.call(n).slice(8, -1);
    if ((o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')) return Array.from(n);
    if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return tu(n, i);
  }
}
function tu(n, i) {
  (i == null || i > n.length) && (i = n.length);
  for (var o = 0, s = new Array(i); o < i; o++) s[o] = n[o];
  return s;
}
function Ek() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pk(n) {
  var i,
    o = n.beat,
    s = n.fade,
    l = n.beatFade,
    c = n.bounce,
    d = n.shake,
    p = n.flash,
    h = n.spin,
    g = n.spinPulse,
    v = n.spinReverse,
    x = n.pulse,
    w = n.fixedWidth,
    O = n.inverse,
    L = n.border,
    P = n.listItem,
    T = n.flip,
    V = n.size,
    A = n.rotation,
    z = n.pull,
    U =
      ((i = {
        'fa-beat': o,
        'fa-fade': s,
        'fa-beat-fade': l,
        'fa-bounce': c,
        'fa-shake': d,
        'fa-flash': p,
        'fa-spin': h,
        'fa-spin-reverse': v,
        'fa-spin-pulse': g,
        'fa-pulse': x,
        'fa-fw': w,
        'fa-inverse': O,
        'fa-border': L,
        'fa-li': P,
        'fa-flip': T === !0,
        'fa-flip-horizontal': T === 'horizontal' || T === 'both',
        'fa-flip-vertical': T === 'vertical' || T === 'both',
      }),
      Or(i, 'fa-'.concat(V), typeof V < 'u' && V !== null),
      Or(i, 'fa-rotate-'.concat(A), typeof A < 'u' && A !== null && A !== 0),
      Or(i, 'fa-pull-'.concat(z), typeof z < 'u' && z !== null),
      Or(i, 'fa-swap-opacity', n.swapOpacity),
      i);
  return Object.keys(U)
    .map(function (R) {
      return U[R] ? R : null;
    })
    .filter(function (R) {
      return R;
    });
}
function bk(n) {
  return (n = n - 0), n === n;
}
function zm(n) {
  return bk(n)
    ? n
    : ((n = n.replace(/[\-_\s]+(.)?/g, function (i, o) {
        return o ? o.toUpperCase() : '';
      })),
      n.substr(0, 1).toLowerCase() + n.substr(1));
}
var Ok = ['style'];
function Nk(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Tk(n) {
  return n
    .split(';')
    .map(function (i) {
      return i.trim();
    })
    .filter(function (i) {
      return i;
    })
    .reduce(function (i, o) {
      var s = o.indexOf(':'),
        l = zm(o.slice(0, s)),
        c = o.slice(s + 1).trim();
      return l.startsWith('webkit') ? (i[Nk(l)] = c) : (i[l] = c), i;
    }, {});
}
function jm(n, i) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof i == 'string') return i;
  var s = (i.children || []).map(function (h) {
      return jm(n, h);
    }),
    l = Object.keys(i.attributes || {}).reduce(
      function (h, g) {
        var v = i.attributes[g];
        switch (g) {
          case 'class':
            (h.attrs.className = v), delete i.attributes.class;
            break;
          case 'style':
            h.attrs.style = Tk(v);
            break;
          default:
            g.indexOf('aria-') === 0 || g.indexOf('data-') === 0
              ? (h.attrs[g.toLowerCase()] = v)
              : (h.attrs[zm(g)] = v);
        }
        return h;
      },
      { attrs: {} }
    ),
    c = o.style,
    d = c === void 0 ? {} : c,
    p = xk(o, Ok);
  return (l.attrs.style = At(At({}, l.attrs.style), d)), n.apply(void 0, [i.tag, At(At({}, l.attrs), p)].concat(eu(s)));
}
var $m = !1;
try {
  $m = !0;
} catch {}
function Lk() {
  if (!$m && console && typeof console.error == 'function') {
    var n;
    (n = console).error.apply(n, arguments);
  }
}
function kp(n) {
  if (n && fa(n) === 'object' && n.prefix && n.iconName && n.icon) return n;
  if (Zl.icon) return Zl.icon(n);
  if (n === null) return null;
  if (n && fa(n) === 'object' && n.prefix && n.iconName) return n;
  if (Array.isArray(n) && n.length === 2) return { prefix: n[0], iconName: n[1] };
  if (typeof n == 'string') return { prefix: 'fas', iconName: n };
}
function _l(n, i) {
  return (Array.isArray(i) && i.length > 0) || (!Array.isArray(i) && i) ? Or({}, n, i) : {};
}
var Cp = {
    border: !1,
    className: '',
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: '',
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  wu = ma.forwardRef(function (n, i) {
    var o = At(At({}, Cp), n),
      s = o.icon,
      l = o.mask,
      c = o.symbol,
      d = o.className,
      p = o.title,
      h = o.titleId,
      g = o.maskId,
      v = kp(s),
      x = _l('classes', [].concat(eu(Pk(o)), eu((d || '').split(' ')))),
      w = _l('transform', typeof o.transform == 'string' ? Zl.transform(o.transform) : o.transform),
      O = _l('mask', kp(l)),
      L = mk(v, At(At(At(At({}, x), w), O), {}, { symbol: c, title: p, titleId: h, maskId: g }));
    if (!L) return Lk('Could not find icon', v), null;
    var P = L.abstract,
      T = { ref: i };
    return (
      Object.keys(o).forEach(function (V) {
        Cp.hasOwnProperty(V) || (T[V] = o[V]);
      }),
      _k(P[0], T)
    );
  });
wu.displayName = 'FontAwesomeIcon';
wu.propTypes = {
  beat: le.bool,
  border: le.bool,
  beatFade: le.bool,
  bounce: le.bool,
  className: le.string,
  fade: le.bool,
  flash: le.bool,
  mask: le.oneOfType([le.object, le.array, le.string]),
  maskId: le.string,
  fixedWidth: le.bool,
  inverse: le.bool,
  flip: le.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: le.oneOfType([le.object, le.array, le.string]),
  listItem: le.bool,
  pull: le.oneOf(['right', 'left']),
  pulse: le.bool,
  rotation: le.oneOf([0, 90, 180, 270]),
  shake: le.bool,
  size: le.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: le.bool,
  spinPulse: le.bool,
  spinReverse: le.bool,
  symbol: le.oneOfType([le.bool, le.string]),
  title: le.string,
  titleId: le.string,
  transform: le.oneOfType([le.string, le.object]),
  swapOpacity: le.bool,
};
var _k = jm.bind(null, ma.createElement),
  Rl = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var Ep;
function Rk() {
  return (
    Ep ||
      ((Ep = 1),
      (function (n) {
        (function () {
          var i = {}.hasOwnProperty;
          function o() {
            for (var c = '', d = 0; d < arguments.length; d++) {
              var p = arguments[d];
              p && (c = l(c, s(p)));
            }
            return c;
          }
          function s(c) {
            if (typeof c == 'string' || typeof c == 'number') return c;
            if (typeof c != 'object') return '';
            if (Array.isArray(c)) return o.apply(null, c);
            if (c.toString !== Object.prototype.toString && !c.toString.toString().includes('[native code]'))
              return c.toString();
            var d = '';
            for (var p in c) i.call(c, p) && c[p] && (d = l(d, p));
            return d;
          }
          function l(c, d) {
            return d ? (c ? c + ' ' + d : c + d) : c;
          }
          n.exports ? ((o.default = o), (n.exports = o)) : (window.classNames = o);
        })();
      })(Rl)),
    Rl.exports
  );
}
var Ik = Rk();
const Dk = pa(Ik),
  Ak = {
    prefix: 'fas',
    iconName: 'circle-notch',
    icon: [
      512,
      512,
      [],
      'f1ce',
      'M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z',
    ],
  },
  oC = {
    prefix: 'fas',
    iconName: 'xmark',
    icon: [
      384,
      512,
      [128473, 10005, 10006, 10060, 215, 'close', 'multiply', 'remove', 'times'],
      'f00d',
      'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z',
    ],
  },
  je = ({ size: n, inModal: i }) => {
    const { i18n: o } = su(['common']),
      s = o.language;
    return H.jsxs('div', {
      className: Dk(n ? `gnb-spinner-${n}` : 'gnb-spinner', i ? 'in-modal' : 'loading-page'),
      role: 'status',
      children: [
        H.jsx(wu, { icon: Ak, className: 'fa-spin', 'aria-labelledby': 'spinner-description' }),
        H.jsx('span', {
          className: 'sr-only',
          id: 'spinner-description',
          children: s === 'fr-CA' ? 'Chargement...' : 'Loading...',
        }),
      ],
    });
  },
  Mk = {
    driverlicenceNumber: '',
    issuanceDateYear: '',
    issuanceDateMonth: '',
    issuanceDateDay: '',
    postalCode: '',
    reCaptchaChecked: !1,
  },
  Fk = { firstName: '', lastName: '', telephone: '', email: '', customerPermissionChecked: !1 },
  zk = {
    loadState: () => {},
    state: {
      recaptchaBypass: !1,
      handleRecaptchaBypass: () => {},
      stateSaved: !1,
      handleStateSaved: () => {},
      sessionExpired: !1,
      startState: () => {},
      resetState: () => {},
      resetForm: () => {},
      cookies: { languageCookies: 'en', handleLanguageCookiesChange: () => {} },
      aboutTheService: { isChecked: !1, handleCheckboxChange: () => {} },
      eligibility: {
        questionOneAnswer: '',
        questionTwoAnswer: '',
        handleRadioChangeQuestionOne: () => {},
        handleRadioChangeQuestionTwo: () => {},
      },
      driverLicenceDetails: {
        driverLicenceDetailsStates: Mk,
        handleDriverlicenceNumberChange: () => {},
        handleIssuanceDateYearChange: () => {},
        handleIssuanceDateMonthChange: () => {},
        handleIssuanceDateDayChange: () => {},
        handlePostalCodeChange: () => {},
        handleReCaptchaCheckboxChange: () => {},
      },
      certification: { isChecked: !1, handleCheckboxChange: () => {} },
      contactInformation: {
        contactInformationFormStates: Fk,
        handleFirstNameInputChange: () => {},
        handleLastNameInputChange: () => {},
        handleTelephoneInputChange: () => {},
        handleEmailInputChange: () => {},
        handleCheckboxChange: () => {},
        setInitialContactInfoStates: () => {},
      },
      common: { transactionId: '', updateTransactionId: () => {}, orderGuid: '', updateOrderGuid: () => {} },
    },
  },
  xu = _.createContext(zk),
  aC = 50,
  sC = 50,
  lC = 12,
  uC = 50,
  cC = 'temporary-drivers-licence.pdf',
  fC = 'permis-de-conduire-temporaire.pdf',
  dC = 1200,
  pC = 60,
  mC = 10,
  hC = 5e3,
  gC = 2e3;
var nu = ((n) => ((n.DLR = 'driversLicenceRenewal'), (n.TDL = 'tempDriversLicence'), n))(nu || {});
const Pp = _.lazy(() => $t(() => import('./DefaultPage-Dr-2aZnU.js'), __vite__mapDeps([0, 1, 2, 3, 4]))),
  bp = _.lazy(() =>
    $t(() => import('./AboutTheServicePage-ylFJ_8dp.js'), __vite__mapDeps([5, 6, 7, 8, 1, 9, 10, 11, 12]))
  ),
  Op = _.lazy(() =>
    $t(() => import('./EligibilityPage-BFM7sEfr.js'), __vite__mapDeps([13, 1, 9, 6, 7, 11, 14, 15, 12, 16]))
  ),
  Np = _.lazy(() =>
    $t(
      () => import('./DriverLicenceDetailsPage-CYN_-Q6-.js'),
      __vite__mapDeps([17, 14, 6, 7, 15, 1, 11, 18, 9, 19, 20, 21, 22, 23, 3, 12, 24])
    )
  ),
  Tp = _.lazy(() =>
    $t(() => import('./CertificationPage-BiWnawyc.js'), __vite__mapDeps([25, 11, 8, 1, 9, 10, 14, 6, 7, 15, 3, 12]))
  ),
  Lp = _.lazy(() =>
    $t(
      () => import('./ContactInformationPage-CA2szvJZ.js'),
      __vite__mapDeps([26, 18, 1, 9, 19, 14, 6, 7, 15, 20, 21, 8, 10, 11, 3, 27, 2, 12])
    )
  ),
  _p = _.lazy(() =>
    $t(
      () => import('./PaymentConfirmationPage-DMrCswCf.js'),
      __vite__mapDeps([28, 6, 7, 3, 27, 11, 1, 29, 19, 14, 15, 20, 30, 2, 12, 31])
    )
  ),
  Rp = _.lazy(() =>
    $t(() => import('./TemporaryDriversLicencePage-itKjZ1y_.js'), __vite__mapDeps([32, 33, 14, 6, 7, 15, 1, 12]))
  ),
  Ip = _.lazy(() =>
    $t(
      () => import('./TemporaryDriversLicenceRequestPage-DBEj5cPp.js'),
      __vite__mapDeps([34, 14, 6, 7, 15, 1, 18, 9, 19, 20, 21, 22, 23, 3, 33, 29, 30, 12, 24])
    )
  ),
  jk = _.lazy(() => $t(() => import('./index-BOi2nvw2.js'), __vite__mapDeps([35, 12]))),
  $k = () => {
    const { i18n: n } = su(['common']),
      i = Di(),
      { state: o } = _.useContext(xu),
      { cookies: s } = o,
      { handleLanguageCookiesChange: l } = s,
      [c, d] = _.useState(nu.DLR),
      p = i.pathname;
    _.useEffect(() => {
      const g = p.split('/')[1];
      g !== n.language && (n.changeLanguage(g), l(g)),
        (p.includes('temporary-drivers-licence') || p.includes('permis-de-conduire-temporaire')) && d(nu.TDL);
    }, [p]);
    const h = [
      {
        path: 'en',
        element: H.jsx(_.Suspense, {
          fallback: H.jsx(je, { size: 'lg', inModal: !0 }),
          children: H.jsx(Pp, { pageSiteLayout: c }),
        }),
        children: [
          {
            path: '',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(bp, {}) }),
          },
          {
            path: 'eligibility',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Op, {}) }),
          },
          {
            path: 'driver-licence-details',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Np, {}) }),
          },
          {
            path: 'certification',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Tp, {}) }),
          },
          {
            path: 'contact-information',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Lp, {}) }),
          },
          {
            path: 'payment-confirmation',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(_p, {}) }),
          },
          {
            path: 'temporary-drivers-licence',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Rp, {}) }),
          },
          {
            path: 'temporary-drivers-licence-request',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Ip, {}) }),
          },
        ],
      },
      {
        path: 'fr',
        element: H.jsx(_.Suspense, {
          fallback: H.jsx(je, { size: 'lg', inModal: !0 }),
          children: H.jsx(Pp, { pageSiteLayout: c }),
        }),
        children: [
          {
            path: '',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(bp, {}) }),
          },
          {
            path: 'admissibilité',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Op, {}) }),
          },
          {
            path: 'détails-sur-le-permis-de-conduire',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Np, {}) }),
          },
          {
            path: 'attestation',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Tp, {}) }),
          },
          {
            path: 'coordonnées',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Lp, {}) }),
          },
          {
            path: 'confirmation-de-paiement',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(_p, {}) }),
          },
          {
            path: 'permis-de-conduire-temporaire',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Rp, {}) }),
          },
          {
            path: 'demande-de-permis-de-conduire-temporaire',
            element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg', inModal: !0 }), children: H.jsx(Ip, {}) }),
          },
        ],
      },
      { path: '*', element: H.jsx(_.Suspense, { fallback: H.jsx(je, { size: 'lg' }), children: H.jsx(jk, {}) }) },
    ];
    return Rv(h);
  },
  Uk = () => {
    const { state: n, loadState: i } = _.useContext(xu),
      { stateSaved: o, handleStateSaved: s } = n;
    return (
      _.useEffect(() => {
        if (o) sessionStorage.setItem('appState', JSON.stringify(n));
        else {
          const l = sessionStorage.getItem('appState');
          if (l) {
            const c = JSON.parse(l);
            i(c);
          }
        }
        s();
      }, [s, i, n, o]),
      H.jsx(H.Fragment, { children: H.jsx($k, {}) })
    );
  },
  vC = (n) =>
    /^[\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+([.-][\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+)*@[\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+([.-][\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+)*(\.[\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]{2,3})+$/.test(
      n
    ),
  yC = (n) => /(^[\w\s.,$@&’`\-'ÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+)$/.test(n),
  wC = (n) => /[0-9]{10}$/.test(n),
  Vk = (n) => {
    const i = n.trim().replace(/[^0-9]/g, '');
    return i.length < 4
      ? i
      : i.length < 7
      ? i.replace(/(\d{3})(\d{1})/, '$1-$2')
      : i.length < 11
      ? i.replace(/(\d{3})(\d{3})(\d{1})/, '$1-$2-$3')
      : i.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  },
  xC = (n) => /^[0-9]+$/.test(n) && n.length >= 4 && n.length <= 7,
  SC = (n) => /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(n),
  Bk = ({ children: n }) => {
    const { i18n: i } = su(),
      o = {
        driverlicenceNumber: '',
        issuanceDateYear: '',
        issuanceDateMonth: '',
        issuanceDateDay: '',
        postalCode: '',
        reCaptchaChecked: !1,
      },
      s = { firstName: '', lastName: '', telephone: '', email: '', customerPermissionChecked: !1 },
      [l, c] = dy(['language']),
      [d, p] = _.useState(!1),
      [h, g] = _.useState(!1),
      [v, x] = _.useState(!1),
      [w, O] = _.useState(''),
      [L, P] = _.useState(''),
      [T, V] = _.useState(!1),
      [A, z] = _.useState(''),
      [U, R] = _.useState(''),
      [J, te] = _.useState(o),
      [re, de] = _.useState(s),
      [xe, Se] = _.useState(!1);
    _.useEffect(() => {
      c('language', i.language === 'en' ? 'en' : 'fr');
    }, [i.language]);
    const lt = () => {
        p(!0);
      },
      We = () => {
        g(!0);
      },
      Me = (ne) => {
        ne.aboutTheService.isChecked && G(),
          ne.aboutTheService.isChecked && G(),
          ne.eligibility.questionOneAnswer && O(ne.eligibility.questionOneAnswer),
          ne.eligibility.questionTwoAnswer && P(ne.eligibility.questionTwoAnswer),
          ne.certification.isChecked && I(),
          te(ne.driverLicenceDetails.driverLicenceDetailsStates),
          ne.common.transactionId && z(ne.common.transactionId),
          ne.common.orderGuid && R(ne.common.orderGuid);
      },
      $e = () => {
        Se(!1);
      },
      Re = () => {
        Se(!0), ye(), sessionStorage.setItem('startTime', Date.now().toString());
      },
      ye = () => {
        x(!1), O(''), P(''), V(!1), z(''), R(''), te(o), de(s);
      },
      $ = (ne) => {
        c('language', ne);
      },
      G = () => {
        x(!v);
      },
      B = (ne) => {
        O(ne);
      },
      C = (ne) => {
        P(ne);
      },
      I = () => {
        V(!T);
      },
      oe = (ne) => {
        de(ne);
      },
      ae = (ne) => {
        const Ut = ne.target.value.trim() === '' ? '' : ne.target.value;
        de({ ...re, firstName: Ut });
      },
      ue = (ne) => {
        const Ut = ne.target.value.trim() === '' ? '' : ne.target.value;
        de({ ...re, lastName: Ut });
      },
      ce = (ne) => {
        de({ ...re, telephone: Vk(ne.target.value) });
      },
      we = (ne) => {
        de({ ...re, email: ne.target.value });
      },
      me = () => {
        de({ ...re, customerPermissionChecked: !re.customerPermissionChecked });
      },
      ke = (ne) => {
        te({ ...J, driverlicenceNumber: ne.target.value });
      },
      Ze = (ne) => {
        te({ ...J, issuanceDateYear: ne.target.value.replace(/[^0-9]/g, '') });
      },
      Gn = (ne) => {
        te({ ...J, issuanceDateMonth: ne.target.value.replace(/[^0-9]/g, '') });
      },
      Fi = (ne) => {
        te({ ...J, issuanceDateDay: ne.target.value.replace(/[^0-9]/g, '') });
      },
      Xn = (ne) => {
        te({ ...J, postalCode: ne.target.value });
      },
      Rr = (ne) => {
        te({ ...J, reCaptchaChecked: ne });
      },
      zi = (ne) => {
        z(ne);
      },
      ji = (ne) => {
        R(ne);
      },
      Ir = {
        stateSaved: d,
        recaptchaBypass: h,
        handleRecaptchaBypass: We,
        handleStateSaved: lt,
        sessionExpired: xe,
        startState: $e,
        resetState: Re,
        resetForm: ye,
        cookies: { languageCookies: l.language, handleLanguageCookiesChange: $ },
        aboutTheService: { isChecked: v, handleCheckboxChange: G },
        eligibility: {
          questionOneAnswer: w,
          questionTwoAnswer: L,
          handleRadioChangeQuestionOne: B,
          handleRadioChangeQuestionTwo: C,
        },
        driverLicenceDetails: {
          driverLicenceDetailsStates: J,
          handleDriverlicenceNumberChange: ke,
          handleIssuanceDateYearChange: Ze,
          handleIssuanceDateMonthChange: Gn,
          handleIssuanceDateDayChange: Fi,
          handlePostalCodeChange: Xn,
          handleReCaptchaCheckboxChange: Rr,
        },
        certification: { isChecked: T, handleCheckboxChange: I },
        contactInformation: {
          contactInformationFormStates: re,
          handleFirstNameInputChange: ae,
          handleLastNameInputChange: ue,
          handleTelephoneInputChange: ce,
          handleEmailInputChange: we,
          handleCheckboxChange: me,
          setInitialContactInfoStates: oe,
        },
        common: { transactionId: A, updateTransactionId: zi, orderGuid: U, updateOrderGuid: ji },
      },
      $i = { loadState: Me, state: Ir };
    return H.jsx(xu.Provider, { value: $i, children: n });
  },
  Um = 6048e5,
  Wk = 864e5,
  Dp = Symbol.for('constructDateFrom');
function bn(n, i) {
  return typeof n == 'function'
    ? n(i)
    : n && typeof n == 'object' && Dp in n
    ? n[Dp](i)
    : n instanceof Date
    ? new n.constructor(i)
    : new Date(i);
}
function Tt(n, i) {
  return bn(i || n, n);
}
let Hk = {};
function xa() {
  return Hk;
}
function _i(n, i) {
  var p, h, g, v;
  const o = xa(),
    s =
      (i == null ? void 0 : i.weekStartsOn) ??
      ((h = (p = i == null ? void 0 : i.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ??
      o.weekStartsOn ??
      ((v = (g = o.locale) == null ? void 0 : g.options) == null ? void 0 : v.weekStartsOn) ??
      0,
    l = Tt(n, i == null ? void 0 : i.in),
    c = l.getDay(),
    d = (c < s ? 7 : 0) + c - s;
  return l.setDate(l.getDate() - d), l.setHours(0, 0, 0, 0), l;
}
function da(n, i) {
  return _i(n, { ...i, weekStartsOn: 1 });
}
function Vm(n, i) {
  const o = Tt(n, i == null ? void 0 : i.in),
    s = o.getFullYear(),
    l = bn(o, 0);
  l.setFullYear(s + 1, 0, 4), l.setHours(0, 0, 0, 0);
  const c = da(l),
    d = bn(o, 0);
  d.setFullYear(s, 0, 4), d.setHours(0, 0, 0, 0);
  const p = da(d);
  return o.getTime() >= c.getTime() ? s + 1 : o.getTime() >= p.getTime() ? s : s - 1;
}
function Ap(n) {
  const i = Tt(n),
    o = new Date(
      Date.UTC(
        i.getFullYear(),
        i.getMonth(),
        i.getDate(),
        i.getHours(),
        i.getMinutes(),
        i.getSeconds(),
        i.getMilliseconds()
      )
    );
  return o.setUTCFullYear(i.getFullYear()), +n - +o;
}
function Yk(n, ...i) {
  const o = bn.bind(
    null,
    i.find((s) => typeof s == 'object')
  );
  return i.map(o);
}
function Mp(n, i) {
  const o = Tt(n, i == null ? void 0 : i.in);
  return o.setHours(0, 0, 0, 0), o;
}
function qk(n, i, o) {
  const [s, l] = Yk(o == null ? void 0 : o.in, n, i),
    c = Mp(s),
    d = Mp(l),
    p = +c - Ap(c),
    h = +d - Ap(d);
  return Math.round((p - h) / Wk);
}
function Kk(n, i) {
  const o = Vm(n, i),
    s = bn(n, 0);
  return s.setFullYear(o, 0, 4), s.setHours(0, 0, 0, 0), da(s);
}
function Qk(n) {
  return n instanceof Date || (typeof n == 'object' && Object.prototype.toString.call(n) === '[object Date]');
}
function Gk(n) {
  return !((!Qk(n) && typeof n != 'number') || isNaN(+Tt(n)));
}
function Xk(n, i) {
  const o = Tt(n, i == null ? void 0 : i.in);
  return o.setFullYear(o.getFullYear(), 0, 1), o.setHours(0, 0, 0, 0), o;
}
const Jk = {
    lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  Zk = (n, i, o) => {
    let s;
    const l = Jk[n];
    return (
      typeof l == 'string' ? (s = l) : i === 1 ? (s = l.one) : (s = l.other.replace('{{count}}', i.toString())),
      o != null && o.addSuffix ? (o.comparison && o.comparison > 0 ? 'in ' + s : s + ' ago') : s
    );
  };
function Il(n) {
  return (i = {}) => {
    const o = i.width ? String(i.width) : n.defaultWidth;
    return n.formats[o] || n.formats[n.defaultWidth];
  };
}
const e2 = { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
  t2 = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  n2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  r2 = {
    date: Il({ formats: e2, defaultWidth: 'full' }),
    time: Il({ formats: t2, defaultWidth: 'full' }),
    dateTime: Il({ formats: n2, defaultWidth: 'full' }),
  },
  i2 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  o2 = (n, i, o, s) => i2[n];
function xi(n) {
  return (i, o) => {
    const s = o != null && o.context ? String(o.context) : 'standalone';
    let l;
    if (s === 'formatting' && n.formattingValues) {
      const d = n.defaultFormattingWidth || n.defaultWidth,
        p = o != null && o.width ? String(o.width) : d;
      l = n.formattingValues[p] || n.formattingValues[d];
    } else {
      const d = n.defaultWidth,
        p = o != null && o.width ? String(o.width) : n.defaultWidth;
      l = n.values[p] || n.values[d];
    }
    const c = n.argumentCallback ? n.argumentCallback(i) : i;
    return l[c];
  };
}
const a2 = { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
  s2 = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  l2 = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  u2 = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  c2 = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  f2 = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  d2 = (n, i) => {
    const o = Number(n),
      s = o % 100;
    if (s > 20 || s < 10)
      switch (s % 10) {
        case 1:
          return o + 'st';
        case 2:
          return o + 'nd';
        case 3:
          return o + 'rd';
      }
    return o + 'th';
  },
  p2 = {
    ordinalNumber: d2,
    era: xi({ values: a2, defaultWidth: 'wide' }),
    quarter: xi({ values: s2, defaultWidth: 'wide', argumentCallback: (n) => n - 1 }),
    month: xi({ values: l2, defaultWidth: 'wide' }),
    day: xi({ values: u2, defaultWidth: 'wide' }),
    dayPeriod: xi({ values: c2, defaultWidth: 'wide', formattingValues: f2, defaultFormattingWidth: 'wide' }),
  };
function Si(n) {
  return (i, o = {}) => {
    const s = o.width,
      l = (s && n.matchPatterns[s]) || n.matchPatterns[n.defaultMatchWidth],
      c = i.match(l);
    if (!c) return null;
    const d = c[0],
      p = (s && n.parsePatterns[s]) || n.parsePatterns[n.defaultParseWidth],
      h = Array.isArray(p) ? h2(p, (x) => x.test(d)) : m2(p, (x) => x.test(d));
    let g;
    (g = n.valueCallback ? n.valueCallback(h) : h), (g = o.valueCallback ? o.valueCallback(g) : g);
    const v = i.slice(d.length);
    return { value: g, rest: v };
  };
}
function m2(n, i) {
  for (const o in n) if (Object.prototype.hasOwnProperty.call(n, o) && i(n[o])) return o;
}
function h2(n, i) {
  for (let o = 0; o < n.length; o++) if (i(n[o])) return o;
}
function g2(n) {
  return (i, o = {}) => {
    const s = i.match(n.matchPattern);
    if (!s) return null;
    const l = s[0],
      c = i.match(n.parsePattern);
    if (!c) return null;
    let d = n.valueCallback ? n.valueCallback(c[0]) : c[0];
    d = o.valueCallback ? o.valueCallback(d) : d;
    const p = i.slice(l.length);
    return { value: d, rest: p };
  };
}
const v2 = /^(\d+)(th|st|nd|rd)?/i,
  y2 = /\d+/i,
  w2 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  x2 = { any: [/^b/i, /^(a|c)/i] },
  S2 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  k2 = { any: [/1/i, /2/i, /3/i, /4/i] },
  C2 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  E2 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  P2 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  b2 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  O2 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  N2 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  T2 = {
    ordinalNumber: g2({ matchPattern: v2, parsePattern: y2, valueCallback: (n) => parseInt(n, 10) }),
    era: Si({ matchPatterns: w2, defaultMatchWidth: 'wide', parsePatterns: x2, defaultParseWidth: 'any' }),
    quarter: Si({
      matchPatterns: S2,
      defaultMatchWidth: 'wide',
      parsePatterns: k2,
      defaultParseWidth: 'any',
      valueCallback: (n) => n + 1,
    }),
    month: Si({ matchPatterns: C2, defaultMatchWidth: 'wide', parsePatterns: E2, defaultParseWidth: 'any' }),
    day: Si({ matchPatterns: P2, defaultMatchWidth: 'wide', parsePatterns: b2, defaultParseWidth: 'any' }),
    dayPeriod: Si({ matchPatterns: O2, defaultMatchWidth: 'any', parsePatterns: N2, defaultParseWidth: 'any' }),
  },
  L2 = {
    code: 'en-US',
    formatDistance: Zk,
    formatLong: r2,
    formatRelative: o2,
    localize: p2,
    match: T2,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function _2(n, i) {
  const o = Tt(n, i == null ? void 0 : i.in);
  return qk(o, Xk(o)) + 1;
}
function R2(n, i) {
  const o = Tt(n, i == null ? void 0 : i.in),
    s = +da(o) - +Kk(o);
  return Math.round(s / Um) + 1;
}
function Bm(n, i) {
  var v, x, w, O;
  const o = Tt(n, i == null ? void 0 : i.in),
    s = o.getFullYear(),
    l = xa(),
    c =
      (i == null ? void 0 : i.firstWeekContainsDate) ??
      ((x = (v = i == null ? void 0 : i.locale) == null ? void 0 : v.options) == null
        ? void 0
        : x.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((O = (w = l.locale) == null ? void 0 : w.options) == null ? void 0 : O.firstWeekContainsDate) ??
      1,
    d = bn((i == null ? void 0 : i.in) || n, 0);
  d.setFullYear(s + 1, 0, c), d.setHours(0, 0, 0, 0);
  const p = _i(d, i),
    h = bn((i == null ? void 0 : i.in) || n, 0);
  h.setFullYear(s, 0, c), h.setHours(0, 0, 0, 0);
  const g = _i(h, i);
  return +o >= +p ? s + 1 : +o >= +g ? s : s - 1;
}
function I2(n, i) {
  var p, h, g, v;
  const o = xa(),
    s =
      (i == null ? void 0 : i.firstWeekContainsDate) ??
      ((h = (p = i == null ? void 0 : i.locale) == null ? void 0 : p.options) == null
        ? void 0
        : h.firstWeekContainsDate) ??
      o.firstWeekContainsDate ??
      ((v = (g = o.locale) == null ? void 0 : g.options) == null ? void 0 : v.firstWeekContainsDate) ??
      1,
    l = Bm(n, i),
    c = bn((i == null ? void 0 : i.in) || n, 0);
  return c.setFullYear(l, 0, s), c.setHours(0, 0, 0, 0), _i(c, i);
}
function D2(n, i) {
  const o = Tt(n, i == null ? void 0 : i.in),
    s = +_i(o, i) - +I2(o, i);
  return Math.round(s / Um) + 1;
}
function ve(n, i) {
  const o = n < 0 ? '-' : '',
    s = Math.abs(n).toString().padStart(i, '0');
  return o + s;
}
const xn = {
    y(n, i) {
      const o = n.getFullYear(),
        s = o > 0 ? o : 1 - o;
      return ve(i === 'yy' ? s % 100 : s, i.length);
    },
    M(n, i) {
      const o = n.getMonth();
      return i === 'M' ? String(o + 1) : ve(o + 1, 2);
    },
    d(n, i) {
      return ve(n.getDate(), i.length);
    },
    a(n, i) {
      const o = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (i) {
        case 'a':
        case 'aa':
          return o.toUpperCase();
        case 'aaa':
          return o;
        case 'aaaaa':
          return o[0];
        case 'aaaa':
        default:
          return o === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h(n, i) {
      return ve(n.getHours() % 12 || 12, i.length);
    },
    H(n, i) {
      return ve(n.getHours(), i.length);
    },
    m(n, i) {
      return ve(n.getMinutes(), i.length);
    },
    s(n, i) {
      return ve(n.getSeconds(), i.length);
    },
    S(n, i) {
      const o = i.length,
        s = n.getMilliseconds(),
        l = Math.trunc(s * Math.pow(10, o - 3));
      return ve(l, i.length);
    },
  },
  Pr = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  Fp = {
    G: function (n, i, o) {
      const s = n.getFullYear() > 0 ? 1 : 0;
      switch (i) {
        case 'G':
        case 'GG':
        case 'GGG':
          return o.era(s, { width: 'abbreviated' });
        case 'GGGGG':
          return o.era(s, { width: 'narrow' });
        case 'GGGG':
        default:
          return o.era(s, { width: 'wide' });
      }
    },
    y: function (n, i, o) {
      if (i === 'yo') {
        const s = n.getFullYear(),
          l = s > 0 ? s : 1 - s;
        return o.ordinalNumber(l, { unit: 'year' });
      }
      return xn.y(n, i);
    },
    Y: function (n, i, o, s) {
      const l = Bm(n, s),
        c = l > 0 ? l : 1 - l;
      if (i === 'YY') {
        const d = c % 100;
        return ve(d, 2);
      }
      return i === 'Yo' ? o.ordinalNumber(c, { unit: 'year' }) : ve(c, i.length);
    },
    R: function (n, i) {
      const o = Vm(n);
      return ve(o, i.length);
    },
    u: function (n, i) {
      const o = n.getFullYear();
      return ve(o, i.length);
    },
    Q: function (n, i, o) {
      const s = Math.ceil((n.getMonth() + 1) / 3);
      switch (i) {
        case 'Q':
          return String(s);
        case 'QQ':
          return ve(s, 2);
        case 'Qo':
          return o.ordinalNumber(s, { unit: 'quarter' });
        case 'QQQ':
          return o.quarter(s, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return o.quarter(s, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return o.quarter(s, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (n, i, o) {
      const s = Math.ceil((n.getMonth() + 1) / 3);
      switch (i) {
        case 'q':
          return String(s);
        case 'qq':
          return ve(s, 2);
        case 'qo':
          return o.ordinalNumber(s, { unit: 'quarter' });
        case 'qqq':
          return o.quarter(s, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return o.quarter(s, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return o.quarter(s, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (n, i, o) {
      const s = n.getMonth();
      switch (i) {
        case 'M':
        case 'MM':
          return xn.M(n, i);
        case 'Mo':
          return o.ordinalNumber(s + 1, { unit: 'month' });
        case 'MMM':
          return o.month(s, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return o.month(s, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return o.month(s, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (n, i, o) {
      const s = n.getMonth();
      switch (i) {
        case 'L':
          return String(s + 1);
        case 'LL':
          return ve(s + 1, 2);
        case 'Lo':
          return o.ordinalNumber(s + 1, { unit: 'month' });
        case 'LLL':
          return o.month(s, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return o.month(s, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return o.month(s, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (n, i, o, s) {
      const l = D2(n, s);
      return i === 'wo' ? o.ordinalNumber(l, { unit: 'week' }) : ve(l, i.length);
    },
    I: function (n, i, o) {
      const s = R2(n);
      return i === 'Io' ? o.ordinalNumber(s, { unit: 'week' }) : ve(s, i.length);
    },
    d: function (n, i, o) {
      return i === 'do' ? o.ordinalNumber(n.getDate(), { unit: 'date' }) : xn.d(n, i);
    },
    D: function (n, i, o) {
      const s = _2(n);
      return i === 'Do' ? o.ordinalNumber(s, { unit: 'dayOfYear' }) : ve(s, i.length);
    },
    E: function (n, i, o) {
      const s = n.getDay();
      switch (i) {
        case 'E':
        case 'EE':
        case 'EEE':
          return o.day(s, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return o.day(s, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return o.day(s, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return o.day(s, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (n, i, o, s) {
      const l = n.getDay(),
        c = (l - s.weekStartsOn + 8) % 7 || 7;
      switch (i) {
        case 'e':
          return String(c);
        case 'ee':
          return ve(c, 2);
        case 'eo':
          return o.ordinalNumber(c, { unit: 'day' });
        case 'eee':
          return o.day(l, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return o.day(l, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return o.day(l, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return o.day(l, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (n, i, o, s) {
      const l = n.getDay(),
        c = (l - s.weekStartsOn + 8) % 7 || 7;
      switch (i) {
        case 'c':
          return String(c);
        case 'cc':
          return ve(c, i.length);
        case 'co':
          return o.ordinalNumber(c, { unit: 'day' });
        case 'ccc':
          return o.day(l, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return o.day(l, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return o.day(l, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return o.day(l, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (n, i, o) {
      const s = n.getDay(),
        l = s === 0 ? 7 : s;
      switch (i) {
        case 'i':
          return String(l);
        case 'ii':
          return ve(l, i.length);
        case 'io':
          return o.ordinalNumber(l, { unit: 'day' });
        case 'iii':
          return o.day(s, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return o.day(s, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return o.day(s, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return o.day(s, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (n, i, o) {
      const l = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (i) {
        case 'a':
        case 'aa':
          return o.dayPeriod(l, { width: 'abbreviated', context: 'formatting' });
        case 'aaa':
          return o.dayPeriod(l, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'aaaaa':
          return o.dayPeriod(l, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return o.dayPeriod(l, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (n, i, o) {
      const s = n.getHours();
      let l;
      switch ((s === 12 ? (l = Pr.noon) : s === 0 ? (l = Pr.midnight) : (l = s / 12 >= 1 ? 'pm' : 'am'), i)) {
        case 'b':
        case 'bb':
          return o.dayPeriod(l, { width: 'abbreviated', context: 'formatting' });
        case 'bbb':
          return o.dayPeriod(l, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'bbbbb':
          return o.dayPeriod(l, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return o.dayPeriod(l, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (n, i, o) {
      const s = n.getHours();
      let l;
      switch (
        (s >= 17 ? (l = Pr.evening) : s >= 12 ? (l = Pr.afternoon) : s >= 4 ? (l = Pr.morning) : (l = Pr.night), i)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return o.dayPeriod(l, { width: 'abbreviated', context: 'formatting' });
        case 'BBBBB':
          return o.dayPeriod(l, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return o.dayPeriod(l, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (n, i, o) {
      if (i === 'ho') {
        let s = n.getHours() % 12;
        return s === 0 && (s = 12), o.ordinalNumber(s, { unit: 'hour' });
      }
      return xn.h(n, i);
    },
    H: function (n, i, o) {
      return i === 'Ho' ? o.ordinalNumber(n.getHours(), { unit: 'hour' }) : xn.H(n, i);
    },
    K: function (n, i, o) {
      const s = n.getHours() % 12;
      return i === 'Ko' ? o.ordinalNumber(s, { unit: 'hour' }) : ve(s, i.length);
    },
    k: function (n, i, o) {
      let s = n.getHours();
      return s === 0 && (s = 24), i === 'ko' ? o.ordinalNumber(s, { unit: 'hour' }) : ve(s, i.length);
    },
    m: function (n, i, o) {
      return i === 'mo' ? o.ordinalNumber(n.getMinutes(), { unit: 'minute' }) : xn.m(n, i);
    },
    s: function (n, i, o) {
      return i === 'so' ? o.ordinalNumber(n.getSeconds(), { unit: 'second' }) : xn.s(n, i);
    },
    S: function (n, i) {
      return xn.S(n, i);
    },
    X: function (n, i, o) {
      const s = n.getTimezoneOffset();
      if (s === 0) return 'Z';
      switch (i) {
        case 'X':
          return jp(s);
        case 'XXXX':
        case 'XX':
          return Un(s);
        case 'XXXXX':
        case 'XXX':
        default:
          return Un(s, ':');
      }
    },
    x: function (n, i, o) {
      const s = n.getTimezoneOffset();
      switch (i) {
        case 'x':
          return jp(s);
        case 'xxxx':
        case 'xx':
          return Un(s);
        case 'xxxxx':
        case 'xxx':
        default:
          return Un(s, ':');
      }
    },
    O: function (n, i, o) {
      const s = n.getTimezoneOffset();
      switch (i) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + zp(s, ':');
        case 'OOOO':
        default:
          return 'GMT' + Un(s, ':');
      }
    },
    z: function (n, i, o) {
      const s = n.getTimezoneOffset();
      switch (i) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + zp(s, ':');
        case 'zzzz':
        default:
          return 'GMT' + Un(s, ':');
      }
    },
    t: function (n, i, o) {
      const s = Math.trunc(+n / 1e3);
      return ve(s, i.length);
    },
    T: function (n, i, o) {
      return ve(+n, i.length);
    },
  };
function zp(n, i = '') {
  const o = n > 0 ? '-' : '+',
    s = Math.abs(n),
    l = Math.trunc(s / 60),
    c = s % 60;
  return c === 0 ? o + String(l) : o + String(l) + i + ve(c, 2);
}
function jp(n, i) {
  return n % 60 === 0 ? (n > 0 ? '-' : '+') + ve(Math.abs(n) / 60, 2) : Un(n, i);
}
function Un(n, i = '') {
  const o = n > 0 ? '-' : '+',
    s = Math.abs(n),
    l = ve(Math.trunc(s / 60), 2),
    c = ve(s % 60, 2);
  return o + l + i + c;
}
const $p = (n, i) => {
    switch (n) {
      case 'P':
        return i.date({ width: 'short' });
      case 'PP':
        return i.date({ width: 'medium' });
      case 'PPP':
        return i.date({ width: 'long' });
      case 'PPPP':
      default:
        return i.date({ width: 'full' });
    }
  },
  Wm = (n, i) => {
    switch (n) {
      case 'p':
        return i.time({ width: 'short' });
      case 'pp':
        return i.time({ width: 'medium' });
      case 'ppp':
        return i.time({ width: 'long' });
      case 'pppp':
      default:
        return i.time({ width: 'full' });
    }
  },
  A2 = (n, i) => {
    const o = n.match(/(P+)(p+)?/) || [],
      s = o[1],
      l = o[2];
    if (!l) return $p(n, i);
    let c;
    switch (s) {
      case 'P':
        c = i.dateTime({ width: 'short' });
        break;
      case 'PP':
        c = i.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        c = i.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        c = i.dateTime({ width: 'full' });
        break;
    }
    return c.replace('{{date}}', $p(s, i)).replace('{{time}}', Wm(l, i));
  },
  M2 = { p: Wm, P: A2 },
  F2 = /^D+$/,
  z2 = /^Y+$/,
  j2 = ['D', 'DD', 'YY', 'YYYY'];
function $2(n) {
  return F2.test(n);
}
function U2(n) {
  return z2.test(n);
}
function V2(n, i, o) {
  const s = B2(n, i, o);
  if ((console.warn(s), j2.includes(n))) throw new RangeError(s);
}
function B2(n, i, o) {
  const s = n[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${i}\`) for formatting ${s} to the input \`${o}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const W2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  H2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Y2 = /^'([^]*?)'?$/,
  q2 = /''/g,
  K2 = /[a-zA-Z]/;
function Q2(n, i, o) {
  var v, x, w, O;
  const s = xa(),
    l = s.locale ?? L2,
    c =
      s.firstWeekContainsDate ??
      ((x = (v = s.locale) == null ? void 0 : v.options) == null ? void 0 : x.firstWeekContainsDate) ??
      1,
    d = s.weekStartsOn ?? ((O = (w = s.locale) == null ? void 0 : w.options) == null ? void 0 : O.weekStartsOn) ?? 0,
    p = Tt(n, o == null ? void 0 : o.in);
  if (!Gk(p)) throw new RangeError('Invalid time value');
  let h = i
    .match(H2)
    .map((L) => {
      const P = L[0];
      if (P === 'p' || P === 'P') {
        const T = M2[P];
        return T(L, l.formatLong);
      }
      return L;
    })
    .join('')
    .match(W2)
    .map((L) => {
      if (L === "''") return { isToken: !1, value: "'" };
      const P = L[0];
      if (P === "'") return { isToken: !1, value: G2(L) };
      if (Fp[P]) return { isToken: !0, value: L };
      if (P.match(K2)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + P + '`');
      return { isToken: !1, value: L };
    });
  l.localize.preprocessor && (h = l.localize.preprocessor(p, h));
  const g = { firstWeekContainsDate: c, weekStartsOn: d, locale: l };
  return h
    .map((L) => {
      if (!L.isToken) return L.value;
      const P = L.value;
      (U2(P) || $2(P)) && V2(P, i, String(n));
      const T = Fp[P[0]];
      return T(p, P, l.localize, g);
    })
    .join('');
}
function G2(n) {
  const i = n.match(Y2);
  return i ? i[1].replace(q2, "'") : n;
}
const X2 = () => `${Q2('2025-07-21T16:48:20.404Z', 'yyyy-MM-dd h:mma O')}`,
  J2 = '/renew-drivers-licence',
  Z2 = '/renouveler-permis-de-conduire',
  eC = 'https://www2.dev.snb.ca',
  Hm = window.location.pathname.split('/').some((n) => n.toLowerCase() === 'en'),
  Ym = window.location.pathname.split('/').some((n) => n.toLowerCase() === 'fr');
console.log('en Route', Hm, 'fr Route', Ym);
let Sa = '';
Hm && (Sa = J2);
Ym && (Sa = Z2);
console.log(`
  build info - build version: 1.0.0
  build date: ${X2()}`);
console.log('Debug: browser base url is:', Sa);
console.log('Debug: base domain is:', eC);
Zg.createRoot(document.getElementById('root')).render(
  H.jsx(Bk, {
    children: H.jsx(sy, {
      children: H.jsx(ma.StrictMode, { children: H.jsx(Jv, { basename: Sa, children: H.jsx(Uk, {}) }) }),
    }),
  })
);
export {
  xu as A,
  mC as B,
  dC as C,
  Fl as D,
  uC as E,
  aC as F,
  qy as G,
  Hy as H,
  Wn as I,
  Fy as J,
  jy as K,
  rC as L,
  Qy as M,
  nC as O,
  nu as P,
  ma as R,
  je as S,
  lC as T,
  Di as a,
  Nv as b,
  Dk as c,
  SC as d,
  sC as e,
  yC as f,
  vC as g,
  fC as h,
  xC as i,
  H as j,
  cC as k,
  gC as l,
  pC as m,
  le as n,
  pa as o,
  hC as p,
  tC as q,
  _ as r,
  ru as s,
  vk as t,
  su as u,
  wC as v,
  wu as w,
  oC as x,
  Tt as y,
  Je as z,
};
