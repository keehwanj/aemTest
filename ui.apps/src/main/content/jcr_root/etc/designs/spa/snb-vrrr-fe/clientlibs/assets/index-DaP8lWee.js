const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-BULubnqx.js',
      'assets/Error-BzRXIWzU.js',
      'assets/useMetadata-C-ji9-ED.js',
      'assets/Error-BFxEtAtV.css',
      'assets/CodeAuthentication-Y6GBwwFq.js',
      'assets/CodeAuthentication-_ZKKJUBR.css',
      'assets/ErrorModal-CZ-u79b7.js',
      'assets/ErrorModal-Cd_o-A22.css',
      'assets/CheckboxGroup-BDS1wC0M.js',
      'assets/CheckboxGroup-BN41VEKA.css',
      'assets/index-emKiI1Lj.css',
      'assets/index-BkHI3PQq.js',
      'assets/BackLink-DPxLr3oT.js',
      'assets/accountSettings-Fh7g996K.css',
      'assets/edit-BibR7kZ1.js',
      'assets/index-GNgZMTS1.js',
      'assets/index-sHDgydrQ.js',
      'assets/index-DE7g0oKC.css',
    ])
) => i.map((i) => d[i]);
function $g(r, n) {
  for (var a = 0; a < n.length; a++) {
    const o = n[a];
    if (typeof o != 'string' && !Array.isArray(o)) {
      for (const l in o)
        if (l !== 'default' && !(l in r)) {
          const c = Object.getOwnPropertyDescriptor(o, l);
          c && Object.defineProperty(r, l, c.get ? c : { enumerable: !0, get: () => o[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === 'childList')
        for (const d of c.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && o(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(l) {
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
  function o(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = a(l);
    fetch(l.href, c);
  }
})();
function ho(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r;
}
function _x(r) {
  if (Object.prototype.hasOwnProperty.call(r, '__esModule')) return r;
  var n = r.default;
  if (typeof n == 'function') {
    var a = function o() {
      var l = !1;
      try {
        l = this instanceof o;
      } catch {}
      return l ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    a.prototype = n.prototype;
  } else a = {};
  return (
    Object.defineProperty(a, '__esModule', { value: !0 }),
    Object.keys(r).forEach(function (o) {
      var l = Object.getOwnPropertyDescriptor(r, o);
      Object.defineProperty(
        a,
        o,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return r[o];
              },
            }
      );
    }),
    a
  );
}
var yl = { exports: {} },
  mi = {},
  wl = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function Vg() {
  if (hd) return ie;
  hd = 1;
  var r = Symbol.for('react.element'),
    n = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    l = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    d = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    w = Symbol.iterator;
  function S(b) {
    return b === null || typeof b != 'object'
      ? null
      : ((b = (w && b[w]) || b['@@iterator']), typeof b == 'function' ? b : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    _ = {};
  function L(b, I, re) {
    (this.props = b), (this.context = I), (this.refs = _), (this.updater = re || N);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (b, I) {
      if (typeof b != 'object' && typeof b != 'function' && b != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, b, I, 'setState');
    }),
    (L.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, 'forceUpdate');
    });
  function Y() {}
  Y.prototype = L.prototype;
  function A(b, I, re) {
    (this.props = b), (this.context = I), (this.refs = _), (this.updater = re || N);
  }
  var V = (A.prototype = new Y());
  (V.constructor = A), R(V, L.prototype), (V.isPureReactComponent = !0);
  var $ = Array.isArray,
    O = Object.prototype.hasOwnProperty,
    J = { current: null },
    Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(b, I, re) {
    var oe,
      ce = {},
      fe = null,
      ye = null;
    if (I != null)
      for (oe in (I.ref !== void 0 && (ye = I.ref), I.key !== void 0 && (fe = '' + I.key), I))
        O.call(I, oe) && !Z.hasOwnProperty(oe) && (ce[oe] = I[oe]);
    var pe = arguments.length - 2;
    if (pe === 1) ce.children = re;
    else if (1 < pe) {
      for (var Pe = Array(pe), ut = 0; ut < pe; ut++) Pe[ut] = arguments[ut + 2];
      ce.children = Pe;
    }
    if (b && b.defaultProps) for (oe in ((pe = b.defaultProps), pe)) ce[oe] === void 0 && (ce[oe] = pe[oe]);
    return { $$typeof: r, type: b, key: fe, ref: ye, props: ce, _owner: J.current };
  }
  function _e(b, I) {
    return { $$typeof: r, type: b.type, key: I, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Ye(b) {
    return typeof b == 'object' && b !== null && b.$$typeof === r;
  }
  function lt(b) {
    var I = { '=': '=0', ':': '=2' };
    return (
      '$' +
      b.replace(/[=:]/g, function (re) {
        return I[re];
      })
    );
  }
  var xt = /\/+/g;
  function Je(b, I) {
    return typeof b == 'object' && b !== null && b.key != null ? lt('' + b.key) : I.toString(36);
  }
  function We(b, I, re, oe, ce) {
    var fe = typeof b;
    (fe === 'undefined' || fe === 'boolean') && (b = null);
    var ye = !1;
    if (b === null) ye = !0;
    else
      switch (fe) {
        case 'string':
        case 'number':
          ye = !0;
          break;
        case 'object':
          switch (b.$$typeof) {
            case r:
            case n:
              ye = !0;
          }
      }
    if (ye)
      return (
        (ye = b),
        (ce = ce(ye)),
        (b = oe === '' ? '.' + Je(ye, 0) : oe),
        $(ce)
          ? ((re = ''),
            b != null && (re = b.replace(xt, '$&/') + '/'),
            We(ce, I, re, '', function (ut) {
              return ut;
            }))
          : ce != null &&
            (Ye(ce) &&
              (ce = _e(
                ce,
                re + (!ce.key || (ye && ye.key === ce.key) ? '' : ('' + ce.key).replace(xt, '$&/') + '/') + b
              )),
            I.push(ce)),
        1
      );
    if (((ye = 0), (oe = oe === '' ? '.' : oe + ':'), $(b)))
      for (var pe = 0; pe < b.length; pe++) {
        fe = b[pe];
        var Pe = oe + Je(fe, pe);
        ye += We(fe, I, re, Pe, ce);
      }
    else if (((Pe = S(b)), typeof Pe == 'function'))
      for (b = Pe.call(b), pe = 0; !(fe = b.next()).done; )
        (fe = fe.value), (Pe = oe + Je(fe, pe++)), (ye += We(fe, I, re, Pe, ce));
    else if (fe === 'object')
      throw (
        ((I = String(b)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (I === '[object Object]' ? 'object with keys {' + Object.keys(b).join(', ') + '}' : I) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return ye;
  }
  function qe(b, I, re) {
    if (b == null) return b;
    var oe = [],
      ce = 0;
    return (
      We(b, oe, '', '', function (fe) {
        return I.call(re, fe, ce++);
      }),
      oe
    );
  }
  function Ae(b) {
    if (b._status === -1) {
      var I = b._result;
      (I = I()),
        I.then(
          function (re) {
            (b._status === 0 || b._status === -1) && ((b._status = 1), (b._result = re));
          },
          function (re) {
            (b._status === 0 || b._status === -1) && ((b._status = 2), (b._result = re));
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = I));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var Se = { current: null },
    F = { transition: null },
    G = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: F, ReactCurrentOwner: J };
  function U() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ie.Children = {
      map: qe,
      forEach: function (b, I, re) {
        qe(
          b,
          function () {
            I.apply(this, arguments);
          },
          re
        );
      },
      count: function (b) {
        var I = 0;
        return (
          qe(b, function () {
            I++;
          }),
          I
        );
      },
      toArray: function (b) {
        return (
          qe(b, function (I) {
            return I;
          }) || []
        );
      },
      only: function (b) {
        if (!Ye(b)) throw Error('React.Children.only expected to receive a single React element child.');
        return b;
      },
    }),
    (ie.Component = L),
    (ie.Fragment = a),
    (ie.Profiler = l),
    (ie.PureComponent = A),
    (ie.StrictMode = o),
    (ie.Suspense = h),
    (ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (ie.act = U),
    (ie.cloneElement = function (b, I, re) {
      if (b == null)
        throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + b + '.');
      var oe = R({}, b.props),
        ce = b.key,
        fe = b.ref,
        ye = b._owner;
      if (I != null) {
        if (
          (I.ref !== void 0 && ((fe = I.ref), (ye = J.current)),
          I.key !== void 0 && (ce = '' + I.key),
          b.type && b.type.defaultProps)
        )
          var pe = b.type.defaultProps;
        for (Pe in I)
          O.call(I, Pe) && !Z.hasOwnProperty(Pe) && (oe[Pe] = I[Pe] === void 0 && pe !== void 0 ? pe[Pe] : I[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) oe.children = re;
      else if (1 < Pe) {
        pe = Array(Pe);
        for (var ut = 0; ut < Pe; ut++) pe[ut] = arguments[ut + 2];
        oe.children = pe;
      }
      return { $$typeof: r, type: b.type, key: ce, ref: fe, props: oe, _owner: ye };
    }),
    (ie.createContext = function (b) {
      return (
        (b = {
          $$typeof: d,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (b.Provider = { $$typeof: c, _context: b }),
        (b.Consumer = b)
      );
    }),
    (ie.createElement = ve),
    (ie.createFactory = function (b) {
      var I = ve.bind(null, b);
      return (I.type = b), I;
    }),
    (ie.createRef = function () {
      return { current: null };
    }),
    (ie.forwardRef = function (b) {
      return { $$typeof: m, render: b };
    }),
    (ie.isValidElement = Ye),
    (ie.lazy = function (b) {
      return { $$typeof: v, _payload: { _status: -1, _result: b }, _init: Ae };
    }),
    (ie.memo = function (b, I) {
      return { $$typeof: g, type: b, compare: I === void 0 ? null : I };
    }),
    (ie.startTransition = function (b) {
      var I = F.transition;
      F.transition = {};
      try {
        b();
      } finally {
        F.transition = I;
      }
    }),
    (ie.unstable_act = U),
    (ie.useCallback = function (b, I) {
      return Se.current.useCallback(b, I);
    }),
    (ie.useContext = function (b) {
      return Se.current.useContext(b);
    }),
    (ie.useDebugValue = function () {}),
    (ie.useDeferredValue = function (b) {
      return Se.current.useDeferredValue(b);
    }),
    (ie.useEffect = function (b, I) {
      return Se.current.useEffect(b, I);
    }),
    (ie.useId = function () {
      return Se.current.useId();
    }),
    (ie.useImperativeHandle = function (b, I, re) {
      return Se.current.useImperativeHandle(b, I, re);
    }),
    (ie.useInsertionEffect = function (b, I) {
      return Se.current.useInsertionEffect(b, I);
    }),
    (ie.useLayoutEffect = function (b, I) {
      return Se.current.useLayoutEffect(b, I);
    }),
    (ie.useMemo = function (b, I) {
      return Se.current.useMemo(b, I);
    }),
    (ie.useReducer = function (b, I, re) {
      return Se.current.useReducer(b, I, re);
    }),
    (ie.useRef = function (b) {
      return Se.current.useRef(b);
    }),
    (ie.useState = function (b) {
      return Se.current.useState(b);
    }),
    (ie.useSyncExternalStore = function (b, I, re) {
      return Se.current.useSyncExternalStore(b, I, re);
    }),
    (ie.useTransition = function () {
      return Se.current.useTransition();
    }),
    (ie.version = '18.3.1'),
    ie
  );
}
var gd;
function tu() {
  return gd || ((gd = 1), (wl.exports = Vg())), wl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function Ug() {
  if (vd) return mi;
  vd = 1;
  var r = tu(),
    n = Symbol.for('react.element'),
    a = Symbol.for('react.fragment'),
    o = Object.prototype.hasOwnProperty,
    l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, h, g) {
    var v,
      w = {},
      S = null,
      N = null;
    g !== void 0 && (S = '' + g), h.key !== void 0 && (S = '' + h.key), h.ref !== void 0 && (N = h.ref);
    for (v in h) o.call(h, v) && !c.hasOwnProperty(v) && (w[v] = h[v]);
    if (m && m.defaultProps) for (v in ((h = m.defaultProps), h)) w[v] === void 0 && (w[v] = h[v]);
    return { $$typeof: n, type: m, key: S, ref: N, props: w, _owner: l.current };
  }
  return (mi.Fragment = a), (mi.jsx = d), (mi.jsxs = d), mi;
}
var yd;
function Wg() {
  return yd || ((yd = 1), (yl.exports = Ug())), yl.exports;
}
var le = Wg(),
  j = tu();
const go = ho(j),
  Bg = $g({ __proto__: null, default: go }, [j]);
var Wa = {},
  Sl = { exports: {} },
  st = {},
  xl = { exports: {} },
  kl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd;
function Hg() {
  return (
    wd ||
      ((wd = 1),
      (function (r) {
        function n(F, G) {
          var U = F.length;
          F.push(G);
          e: for (; 0 < U; ) {
            var b = (U - 1) >>> 1,
              I = F[b];
            if (0 < l(I, G)) (F[b] = G), (F[U] = I), (U = b);
            else break e;
          }
        }
        function a(F) {
          return F.length === 0 ? null : F[0];
        }
        function o(F) {
          if (F.length === 0) return null;
          var G = F[0],
            U = F.pop();
          if (U !== G) {
            F[0] = U;
            e: for (var b = 0, I = F.length, re = I >>> 1; b < re; ) {
              var oe = 2 * (b + 1) - 1,
                ce = F[oe],
                fe = oe + 1,
                ye = F[fe];
              if (0 > l(ce, U))
                fe < I && 0 > l(ye, ce) ? ((F[b] = ye), (F[fe] = U), (b = fe)) : ((F[b] = ce), (F[oe] = U), (b = oe));
              else if (fe < I && 0 > l(ye, U)) (F[b] = ye), (F[fe] = U), (b = fe);
              else break e;
            }
          }
          return G;
        }
        function l(F, G) {
          var U = F.sortIndex - G.sortIndex;
          return U !== 0 ? U : F.id - G.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var c = performance;
          r.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            m = d.now();
          r.unstable_now = function () {
            return d.now() - m;
          };
        }
        var h = [],
          g = [],
          v = 1,
          w = null,
          S = 3,
          N = !1,
          R = !1,
          _ = !1,
          L = typeof setTimeout == 'function' ? setTimeout : null,
          Y = typeof clearTimeout == 'function' ? clearTimeout : null,
          A = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function V(F) {
          for (var G = a(g); G !== null; ) {
            if (G.callback === null) o(g);
            else if (G.startTime <= F) o(g), (G.sortIndex = G.expirationTime), n(h, G);
            else break;
            G = a(g);
          }
        }
        function $(F) {
          if (((_ = !1), V(F), !R))
            if (a(h) !== null) (R = !0), Ae(O);
            else {
              var G = a(g);
              G !== null && Se($, G.startTime - F);
            }
        }
        function O(F, G) {
          (R = !1), _ && ((_ = !1), Y(ve), (ve = -1)), (N = !0);
          var U = S;
          try {
            for (V(G), w = a(h); w !== null && (!(w.expirationTime > G) || (F && !lt())); ) {
              var b = w.callback;
              if (typeof b == 'function') {
                (w.callback = null), (S = w.priorityLevel);
                var I = b(w.expirationTime <= G);
                (G = r.unstable_now()), typeof I == 'function' ? (w.callback = I) : w === a(h) && o(h), V(G);
              } else o(h);
              w = a(h);
            }
            if (w !== null) var re = !0;
            else {
              var oe = a(g);
              oe !== null && Se($, oe.startTime - G), (re = !1);
            }
            return re;
          } finally {
            (w = null), (S = U), (N = !1);
          }
        }
        var J = !1,
          Z = null,
          ve = -1,
          _e = 5,
          Ye = -1;
        function lt() {
          return !(r.unstable_now() - Ye < _e);
        }
        function xt() {
          if (Z !== null) {
            var F = r.unstable_now();
            Ye = F;
            var G = !0;
            try {
              G = Z(!0, F);
            } finally {
              G ? Je() : ((J = !1), (Z = null));
            }
          } else J = !1;
        }
        var Je;
        if (typeof A == 'function')
          Je = function () {
            A(xt);
          };
        else if (typeof MessageChannel < 'u') {
          var We = new MessageChannel(),
            qe = We.port2;
          (We.port1.onmessage = xt),
            (Je = function () {
              qe.postMessage(null);
            });
        } else
          Je = function () {
            L(xt, 0);
          };
        function Ae(F) {
          (Z = F), J || ((J = !0), Je());
        }
        function Se(F, G) {
          ve = L(function () {
            F(r.unstable_now());
          }, G);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            R || N || ((R = !0), Ae(O));
          }),
          (r.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (_e = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return a(h);
          }),
          (r.unstable_next = function (F) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = S;
            }
            var U = S;
            S = G;
            try {
              return F();
            } finally {
              S = U;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (F, G) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var U = S;
            S = F;
            try {
              return G();
            } finally {
              S = U;
            }
          }),
          (r.unstable_scheduleCallback = function (F, G, U) {
            var b = r.unstable_now();
            switch (
              (typeof U == 'object' && U !== null
                ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? b + U : b))
                : (U = b),
              F)
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
              (I = U + I),
              (F = { id: v++, callback: G, priorityLevel: F, startTime: U, expirationTime: I, sortIndex: -1 }),
              U > b
                ? ((F.sortIndex = U),
                  n(g, F),
                  a(h) === null && F === a(g) && (_ ? (Y(ve), (ve = -1)) : (_ = !0), Se($, U - b)))
                : ((F.sortIndex = I), n(h, F), R || N || ((R = !0), Ae(O))),
              F
            );
          }),
          (r.unstable_shouldYield = lt),
          (r.unstable_wrapCallback = function (F) {
            var G = S;
            return function () {
              var U = S;
              S = G;
              try {
                return F.apply(this, arguments);
              } finally {
                S = U;
              }
            };
          });
      })(kl)),
    kl
  );
}
var Sd;
function Yg() {
  return Sd || ((Sd = 1), (xl.exports = Hg())), xl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd;
function qg() {
  if (xd) return st;
  xd = 1;
  var r = tu(),
    n = Yg();
  function a(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, i = 1; i < arguments.length; i++)
      t += '&args[]=' + encodeURIComponent(arguments[i]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var o = new Set(),
    l = {};
  function c(e, t) {
    d(e, t), d(e + 'Capture', t);
  }
  function d(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var m = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    w = {};
  function S(e) {
    return h.call(w, e) ? !0 : h.call(v, e) ? !1 : g.test(e) ? (w[e] = !0) : ((v[e] = !0), !1);
  }
  function N(e, t, i, s) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return s
          ? !1
          : i !== null
          ? !i.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function R(e, t, i, s) {
    if (t === null || typeof t > 'u' || N(e, t, i, s)) return !0;
    if (s) return !1;
    if (i !== null)
      switch (i.type) {
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
  function _(e, t, i, s, u, f, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = u),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = p);
  }
  var L = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      L[e] = new _(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      L[t] = new _(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      L[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
      L[e] = new _(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        L[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      L[e] = new _(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      L[e] = new _(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      L[e] = new _(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      L[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var Y = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Y, A);
      L[t] = new _(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
      var t = e.replace(Y, A);
      L[t] = new _(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Y, A);
      L[t] = new _(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      L[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (L.xlinkHref = new _('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      L[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function V(e, t, i, s) {
    var u = L.hasOwnProperty(t) ? L[t] : null;
    (u !== null
      ? u.type !== 0
      : s || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (R(t, i, u, s) && (i = null),
      s || u === null
        ? S(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, '' + i))
        : u.mustUseProperty
        ? (e[u.propertyName] = i === null ? (u.type === 3 ? !1 : '') : i)
        : ((t = u.attributeName),
          (s = u.attributeNamespace),
          i === null
            ? e.removeAttribute(t)
            : ((u = u.type),
              (i = u === 3 || (u === 4 && i === !0) ? '' : '' + i),
              s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i))));
  }
  var $ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    O = Symbol.for('react.element'),
    J = Symbol.for('react.portal'),
    Z = Symbol.for('react.fragment'),
    ve = Symbol.for('react.strict_mode'),
    _e = Symbol.for('react.profiler'),
    Ye = Symbol.for('react.provider'),
    lt = Symbol.for('react.context'),
    xt = Symbol.for('react.forward_ref'),
    Je = Symbol.for('react.suspense'),
    We = Symbol.for('react.suspense_list'),
    qe = Symbol.for('react.memo'),
    Ae = Symbol.for('react.lazy'),
    Se = Symbol.for('react.offscreen'),
    F = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (F && e[F]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var U = Object.assign,
    b;
  function I(e) {
    if (b === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        b = (t && t[1]) || '';
      }
    return (
      `
` +
      b +
      e
    );
  }
  var re = !1;
  function oe(e, t) {
    if (!e || re) return '';
    re = !0;
    var i = Error.prepareStackTrace;
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
          } catch (E) {
            var s = E;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (E) {
            s = E;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (E) {
          s = E;
        }
        e();
      }
    } catch (E) {
      if (E && s && typeof E.stack == 'string') {
        for (
          var u = E.stack.split(`
`),
            f = s.stack.split(`
`),
            p = u.length - 1,
            y = f.length - 1;
          1 <= p && 0 <= y && u[p] !== f[y];

        )
          y--;
        for (; 1 <= p && 0 <= y; p--, y--)
          if (u[p] !== f[y]) {
            if (p !== 1 || y !== 1)
              do
                if ((p--, y--, 0 > y || u[p] !== f[y])) {
                  var x =
                    `
` + u[p].replace(' at new ', ' at ');
                  return e.displayName && x.includes('<anonymous>') && (x = x.replace('<anonymous>', e.displayName)), x;
                }
              while (1 <= p && 0 <= y);
            break;
          }
      }
    } finally {
      (re = !1), (Error.prepareStackTrace = i);
    }
    return (e = e ? e.displayName || e.name : '') ? I(e) : '';
  }
  function ce(e) {
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
        return (e = oe(e.type, !1)), e;
      case 11:
        return (e = oe(e.type.render, !1)), e;
      case 1:
        return (e = oe(e.type, !0)), e;
      default:
        return '';
    }
  }
  function fe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Z:
        return 'Fragment';
      case J:
        return 'Portal';
      case _e:
        return 'Profiler';
      case ve:
        return 'StrictMode';
      case Je:
        return 'Suspense';
      case We:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case lt:
          return (e.displayName || 'Context') + '.Consumer';
        case Ye:
          return (e._context.displayName || 'Context') + '.Provider';
        case xt:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case qe:
          return (t = e.displayName || null), t !== null ? t : fe(e.type) || 'Memo';
        case Ae:
          (t = e._payload), (e = e._init);
          try {
            return fe(e(t));
          } catch {}
      }
    return null;
  }
  function ye(e) {
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
        return fe(t);
      case 8:
        return t === ve ? 'StrictMode' : 'Mode';
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
  function pe(e) {
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
  function Pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function ut(e) {
    var t = Pe(e) ? 'checked' : 'value',
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = '' + e[t];
    if (!e.hasOwnProperty(t) && typeof i < 'u' && typeof i.get == 'function' && typeof i.set == 'function') {
      var u = i.get,
        f = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (p) {
            (s = '' + p), f.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (p) {
            s = '' + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ii(e) {
    e._valueTracker || (e._valueTracker = ut(e));
  }
  function Su(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      s = '';
    return e && (s = Pe(e) ? (e.checked ? 'true' : 'false') : e.value), (e = s), e !== i ? (t.setValue(e), !0) : !1;
  }
  function Mi(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Po(e, t) {
    var i = t.checked;
    return U({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function xu(e, t) {
    var i = t.defaultValue == null ? '' : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    (i = pe(t.value != null ? t.value : i)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: i,
        controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function ku(e, t) {
    (t = t.checked), t != null && V(e, 'checked', t, !1);
  }
  function Eo(e, t) {
    ku(e, t);
    var i = pe(t.value),
      s = t.type;
    if (i != null)
      s === 'number'
        ? ((i === 0 && e.value === '') || e.value != i) && (e.value = '' + i)
        : e.value !== '' + i && (e.value = '' + i);
    else if (s === 'submit' || s === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? _o(e, t.type, i)
      : t.hasOwnProperty('defaultValue') && _o(e, t.type, pe(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function bu(e, t, i) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var s = t.type;
      if (!((s !== 'submit' && s !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      (t = '' + e._wrapperState.initialValue), i || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (i = e.name),
      i !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== '' && (e.name = i);
  }
  function _o(e, t, i) {
    (t !== 'number' || Mi(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + i && (e.defaultValue = '' + i));
  }
  var Nr = Array.isArray;
  function qn(e, t, i, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < i.length; u++) t['$' + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        (u = t.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== u && (e[i].selected = u),
          u && s && (e[i].defaultSelected = !0);
    } else {
      for (i = '' + pe(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          (e[u].selected = !0), s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function No(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return U({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
  }
  function Cu(e, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(a(92));
        if (Nr(i)) {
          if (1 < i.length) throw Error(a(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ''), (i = t);
    }
    e._wrapperState = { initialValue: pe(i) };
  }
  function Pu(e, t) {
    var i = pe(t.value),
      s = pe(t.defaultValue);
    i != null &&
      ((i = '' + i),
      i !== e.value && (e.value = i),
      t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      s != null && (e.defaultValue = '' + s);
  }
  function Eu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function _u(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Oo(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? _u(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
  }
  var Ai,
    Nu = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, i, s, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, i, s, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          Ai = Ai || document.createElement('div'),
            Ai.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Ai.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Or(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lr = {
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
    Bp = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Lr).forEach(function (e) {
    Bp.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e]);
    });
  });
  function Ou(e, t, i) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : i || typeof t != 'number' || t === 0 || (Lr.hasOwnProperty(e) && Lr[e])
      ? ('' + t).trim()
      : t + 'px';
  }
  function Lu(e, t) {
    e = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var s = i.indexOf('--') === 0,
          u = Ou(i, t[i], s);
        i === 'float' && (i = 'cssFloat'), s ? e.setProperty(i, u) : (e[i] = u);
      }
  }
  var Hp = U(
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
  function Lo(e, t) {
    if (t) {
      if (Hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(a(62));
    }
  }
  function Ro(e, t) {
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
  var To = null;
  function Io(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Mo = null,
    Kn = null,
    Qn = null;
  function Ru(e) {
    if ((e = Jr(e))) {
      if (typeof Mo != 'function') throw Error(a(280));
      var t = e.stateNode;
      t && ((t = ia(t)), Mo(e.stateNode, e.type, t));
    }
  }
  function Tu(e) {
    Kn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Kn = e);
  }
  function Iu() {
    if (Kn) {
      var e = Kn,
        t = Qn;
      if (((Qn = Kn = null), Ru(e), t)) for (e = 0; e < t.length; e++) Ru(t[e]);
    }
  }
  function Mu(e, t) {
    return e(t);
  }
  function Au() {}
  var Ao = !1;
  function zu(e, t, i) {
    if (Ao) return e(t, i);
    Ao = !0;
    try {
      return Mu(e, t, i);
    } finally {
      (Ao = !1), (Kn !== null || Qn !== null) && (Au(), Iu());
    }
  }
  function Rr(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = ia(i);
    if (s === null) return null;
    i = s[t];
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
        (s = !s.disabled) ||
          ((e = e.type), (s = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !s);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != 'function') throw Error(a(231, t, typeof i));
    return i;
  }
  var zo = !1;
  if (m)
    try {
      var Tr = {};
      Object.defineProperty(Tr, 'passive', {
        get: function () {
          zo = !0;
        },
      }),
        window.addEventListener('test', Tr, Tr),
        window.removeEventListener('test', Tr, Tr);
    } catch {
      zo = !1;
    }
  function Yp(e, t, i, s, u, f, p, y, x) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, E);
    } catch (M) {
      this.onError(M);
    }
  }
  var Ir = !1,
    zi = null,
    ji = !1,
    jo = null,
    qp = {
      onError: function (e) {
        (Ir = !0), (zi = e);
      },
    };
  function Kp(e, t, i, s, u, f, p, y, x) {
    (Ir = !1), (zi = null), Yp.apply(qp, arguments);
  }
  function Qp(e, t, i, s, u, f, p, y, x) {
    if ((Kp.apply(this, arguments), Ir)) {
      if (Ir) {
        var E = zi;
        (Ir = !1), (zi = null);
      } else throw Error(a(198));
      ji || ((ji = !0), (jo = E));
    }
  }
  function Pn(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (i = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function ju(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function Du(e) {
    if (Pn(e) !== e) throw Error(a(188));
  }
  function Xp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Pn(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var i = e, s = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((s = u.return), s !== null)) {
          i = s;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === i) return Du(u), e;
          if (f === s) return Du(u), t;
          f = f.sibling;
        }
        throw Error(a(188));
      }
      if (i.return !== s.return) (i = u), (s = f);
      else {
        for (var p = !1, y = u.child; y; ) {
          if (y === i) {
            (p = !0), (i = u), (s = f);
            break;
          }
          if (y === s) {
            (p = !0), (s = u), (i = f);
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = f.child; y; ) {
            if (y === i) {
              (p = !0), (i = f), (s = u);
              break;
            }
            if (y === s) {
              (p = !0), (s = f), (i = u);
              break;
            }
            y = y.sibling;
          }
          if (!p) throw Error(a(189));
        }
      }
      if (i.alternate !== s) throw Error(a(190));
    }
    if (i.tag !== 3) throw Error(a(188));
    return i.stateNode.current === i ? e : t;
  }
  function Fu(e) {
    return (e = Xp(e)), e !== null ? $u(e) : null;
  }
  function $u(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = $u(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Vu = n.unstable_scheduleCallback,
    Uu = n.unstable_cancelCallback,
    Gp = n.unstable_shouldYield,
    Jp = n.unstable_requestPaint,
    Te = n.unstable_now,
    Zp = n.unstable_getCurrentPriorityLevel,
    Do = n.unstable_ImmediatePriority,
    Wu = n.unstable_UserBlockingPriority,
    Di = n.unstable_NormalPriority,
    eh = n.unstable_LowPriority,
    Bu = n.unstable_IdlePriority,
    Fi = null,
    Rt = null;
  function th(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == 'function')
      try {
        Rt.onCommitFiberRoot(Fi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : ih,
    nh = Math.log,
    rh = Math.LN2;
  function ih(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((nh(e) / rh) | 0)) | 0;
  }
  var $i = 64,
    Vi = 4194304;
  function Mr(e) {
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
  function Ui(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      p = i & 268435455;
    if (p !== 0) {
      var y = p & ~u;
      y !== 0 ? (s = Mr(y)) : ((f &= p), f !== 0 && (s = Mr(f)));
    } else (p = i & ~u), p !== 0 ? (s = Mr(p)) : f !== 0 && (s = Mr(f));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      (t & u) === 0 &&
      ((u = s & -s), (f = t & -t), u >= f || (u === 16 && (f & 4194240) !== 0))
    )
      return t;
    if (((s & 4) !== 0 && (s |= i & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t; ) (i = 31 - kt(t)), (u = 1 << i), (s |= e[i]), (t &= ~u);
    return s;
  }
  function ah(e, t) {
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
  function oh(e, t) {
    for (var i = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes; 0 < f; ) {
      var p = 31 - kt(f),
        y = 1 << p,
        x = u[p];
      x === -1 ? ((y & i) === 0 || (y & s) !== 0) && (u[p] = ah(y, t)) : x <= t && (e.expiredLanes |= y), (f &= ~y);
    }
  }
  function Fo(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Hu() {
    var e = $i;
    return ($i <<= 1), ($i & 4194240) === 0 && ($i = 64), e;
  }
  function $o(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Ar(e, t, i) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - kt(t)),
      (e[t] = i);
  }
  function sh(e, t) {
    var i = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var u = 31 - kt(i),
        f = 1 << u;
      (t[u] = 0), (s[u] = -1), (e[u] = -1), (i &= ~f);
    }
  }
  function Vo(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var s = 31 - kt(i),
        u = 1 << s;
      (u & t) | (e[s] & t) && (e[s] |= t), (i &= ~u);
    }
  }
  var he = 0;
  function Yu(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var qu,
    Uo,
    Ku,
    Qu,
    Xu,
    Wo = !1,
    Wi = [],
    Zt = null,
    en = null,
    tn = null,
    zr = new Map(),
    jr = new Map(),
    nn = [],
    lh =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Gu(e, t) {
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
        zr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        jr.delete(t.pointerId);
    }
  }
  function Dr(e, t, i, s, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = { blockedOn: t, domEventName: i, eventSystemFlags: s, nativeEvent: f, targetContainers: [u] }),
        t !== null && ((t = Jr(t)), t !== null && Uo(t)),
        e)
      : ((e.eventSystemFlags |= s), (t = e.targetContainers), u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function uh(e, t, i, s, u) {
    switch (t) {
      case 'focusin':
        return (Zt = Dr(Zt, e, t, i, s, u)), !0;
      case 'dragenter':
        return (en = Dr(en, e, t, i, s, u)), !0;
      case 'mouseover':
        return (tn = Dr(tn, e, t, i, s, u)), !0;
      case 'pointerover':
        var f = u.pointerId;
        return zr.set(f, Dr(zr.get(f) || null, e, t, i, s, u)), !0;
      case 'gotpointercapture':
        return (f = u.pointerId), jr.set(f, Dr(jr.get(f) || null, e, t, i, s, u)), !0;
    }
    return !1;
  }
  function Ju(e) {
    var t = En(e.target);
    if (t !== null) {
      var i = Pn(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = ju(i)), t !== null)) {
            (e.blockedOn = t),
              Xu(e.priority, function () {
                Ku(i);
              });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Bi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = Ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        (To = s), i.target.dispatchEvent(s), (To = null);
      } else return (t = Jr(i)), t !== null && Uo(t), (e.blockedOn = i), !1;
      t.shift();
    }
    return !0;
  }
  function Zu(e, t, i) {
    Bi(e) && i.delete(t);
  }
  function ch() {
    (Wo = !1),
      Zt !== null && Bi(Zt) && (Zt = null),
      en !== null && Bi(en) && (en = null),
      tn !== null && Bi(tn) && (tn = null),
      zr.forEach(Zu),
      jr.forEach(Zu);
  }
  function Fr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), Wo || ((Wo = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, ch)));
  }
  function $r(e) {
    function t(u) {
      return Fr(u, e);
    }
    if (0 < Wi.length) {
      Fr(Wi[0], e);
      for (var i = 1; i < Wi.length; i++) {
        var s = Wi[i];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      Zt !== null && Fr(Zt, e), en !== null && Fr(en, e), tn !== null && Fr(tn, e), zr.forEach(t), jr.forEach(t), i = 0;
      i < nn.length;
      i++
    )
      (s = nn[i]), s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < nn.length && ((i = nn[0]), i.blockedOn === null); ) Ju(i), i.blockedOn === null && nn.shift();
  }
  var Xn = $.ReactCurrentBatchConfig,
    Hi = !0;
  function fh(e, t, i, s) {
    var u = he,
      f = Xn.transition;
    Xn.transition = null;
    try {
      (he = 1), Bo(e, t, i, s);
    } finally {
      (he = u), (Xn.transition = f);
    }
  }
  function dh(e, t, i, s) {
    var u = he,
      f = Xn.transition;
    Xn.transition = null;
    try {
      (he = 4), Bo(e, t, i, s);
    } finally {
      (he = u), (Xn.transition = f);
    }
  }
  function Bo(e, t, i, s) {
    if (Hi) {
      var u = Ho(e, t, i, s);
      if (u === null) ls(e, t, s, Yi, i), Gu(e, s);
      else if (uh(u, e, t, i, s)) s.stopPropagation();
      else if ((Gu(e, s), t & 4 && -1 < lh.indexOf(e))) {
        for (; u !== null; ) {
          var f = Jr(u);
          if ((f !== null && qu(f), (f = Ho(e, t, i, s)), f === null && ls(e, t, s, Yi, i), f === u)) break;
          u = f;
        }
        u !== null && s.stopPropagation();
      } else ls(e, t, s, null, i);
    }
  }
  var Yi = null;
  function Ho(e, t, i, s) {
    if (((Yi = null), (e = Io(s)), (e = En(e)), e !== null))
      if (((t = Pn(e)), t === null)) e = null;
      else if (((i = t.tag), i === 13)) {
        if (((e = ju(t)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Yi = e), null;
  }
  function ec(e) {
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
        switch (Zp()) {
          case Do:
            return 1;
          case Wu:
            return 4;
          case Di:
          case eh:
            return 16;
          case Bu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var rn = null,
    Yo = null,
    qi = null;
  function tc() {
    if (qi) return qi;
    var e,
      t = Yo,
      i = t.length,
      s,
      u = 'value' in rn ? rn.value : rn.textContent,
      f = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++);
    var p = i - e;
    for (s = 1; s <= p && t[i - s] === u[f - s]; s++);
    return (qi = u.slice(e, 1 < s ? 1 - s : void 0));
  }
  function Ki(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Qi() {
    return !0;
  }
  function nc() {
    return !1;
  }
  function ct(e) {
    function t(i, s, u, f, p) {
      (this._reactName = i),
        (this._targetInst = u),
        (this.type = s),
        (this.nativeEvent = f),
        (this.target = p),
        (this.currentTarget = null);
      for (var y in e) e.hasOwnProperty(y) && ((i = e[y]), (this[y] = i ? i(f) : f[y]));
      return (
        (this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Qi : nc),
        (this.isPropagationStopped = nc),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault ? i.preventDefault() : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = Qi));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = Qi));
        },
        persist: function () {},
        isPersistent: Qi,
      }),
      t
    );
  }
  var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qo = ct(Gn),
    Vr = U({}, Gn, { view: 0, detail: 0 }),
    mh = ct(Vr),
    Ko,
    Qo,
    Ur,
    Xi = U({}, Vr, {
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
      getModifierState: Go,
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
          : (e !== Ur &&
              (Ur && e.type === 'mousemove'
                ? ((Ko = e.screenX - Ur.screenX), (Qo = e.screenY - Ur.screenY))
                : (Qo = Ko = 0),
              (Ur = e)),
            Ko);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Qo;
      },
    }),
    rc = ct(Xi),
    ph = U({}, Xi, { dataTransfer: 0 }),
    hh = ct(ph),
    gh = U({}, Vr, { relatedTarget: 0 }),
    Xo = ct(gh),
    vh = U({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yh = ct(vh),
    wh = U({}, Gn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Sh = ct(wh),
    xh = U({}, Gn, { data: 0 }),
    ic = ct(xh),
    kh = {
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
    Ch = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Ph(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ch[e]) ? !!t[e] : !1;
  }
  function Go() {
    return Ph;
  }
  var Eh = U({}, Vr, {
      key: function (e) {
        if (e.key) {
          var t = kh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Ki(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
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
      getModifierState: Go,
      charCode: function (e) {
        return e.type === 'keypress' ? Ki(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? Ki(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
    }),
    _h = ct(Eh),
    Nh = U({}, Xi, {
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
    ac = ct(Nh),
    Oh = U({}, Vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Go,
    }),
    Lh = ct(Oh),
    Rh = U({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Th = ct(Rh),
    Ih = U({}, Xi, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Mh = ct(Ih),
    Ah = [9, 13, 27, 32],
    Jo = m && 'CompositionEvent' in window,
    Wr = null;
  m && 'documentMode' in document && (Wr = document.documentMode);
  var zh = m && 'TextEvent' in window && !Wr,
    oc = m && (!Jo || (Wr && 8 < Wr && 11 >= Wr)),
    sc = ' ',
    lc = !1;
  function uc(e, t) {
    switch (e) {
      case 'keyup':
        return Ah.indexOf(t.keyCode) !== -1;
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
  function cc(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Jn = !1;
  function jh(e, t) {
    switch (e) {
      case 'compositionend':
        return cc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((lc = !0), sc);
      case 'textInput':
        return (e = t.data), e === sc && lc ? null : e;
      default:
        return null;
    }
  }
  function Dh(e, t) {
    if (Jn)
      return e === 'compositionend' || (!Jo && uc(e, t)) ? ((e = tc()), (qi = Yo = rn = null), (Jn = !1), e) : null;
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
        return oc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Fh = {
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
  function fc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Fh[e.type] : t === 'textarea';
  }
  function dc(e, t, i, s) {
    Tu(s),
      (t = ta(t, 'onChange')),
      0 < t.length && ((i = new qo('onChange', 'change', null, i, s)), e.push({ event: i, listeners: t }));
  }
  var Br = null,
    Hr = null;
  function $h(e) {
    Lc(e, 0);
  }
  function Gi(e) {
    var t = rr(e);
    if (Su(t)) return e;
  }
  function Vh(e, t) {
    if (e === 'change') return t;
  }
  var mc = !1;
  if (m) {
    var Zo;
    if (m) {
      var es = 'oninput' in document;
      if (!es) {
        var pc = document.createElement('div');
        pc.setAttribute('oninput', 'return;'), (es = typeof pc.oninput == 'function');
      }
      Zo = es;
    } else Zo = !1;
    mc = Zo && (!document.documentMode || 9 < document.documentMode);
  }
  function hc() {
    Br && (Br.detachEvent('onpropertychange', gc), (Hr = Br = null));
  }
  function gc(e) {
    if (e.propertyName === 'value' && Gi(Hr)) {
      var t = [];
      dc(t, Hr, e, Io(e)), zu($h, t);
    }
  }
  function Uh(e, t, i) {
    e === 'focusin' ? (hc(), (Br = t), (Hr = i), Br.attachEvent('onpropertychange', gc)) : e === 'focusout' && hc();
  }
  function Wh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Gi(Hr);
  }
  function Bh(e, t) {
    if (e === 'click') return Gi(t);
  }
  function Hh(e, t) {
    if (e === 'input' || e === 'change') return Gi(t);
  }
  function Yh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var bt = typeof Object.is == 'function' ? Object.is : Yh;
  function Yr(e, t) {
    if (bt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var i = Object.keys(e),
      s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var u = i[s];
      if (!h.call(t, u) || !bt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function vc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function yc(e, t) {
    var i = vc(e);
    e = 0;
    for (var s; i; ) {
      if (i.nodeType === 3) {
        if (((s = e + i.textContent.length), e <= t && s >= t)) return { node: i, offset: t - e };
        e = s;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = vc(i);
    }
  }
  function wc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? wc(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Sc() {
    for (var e = window, t = Mi(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Mi(e.document);
    }
    return t;
  }
  function ts(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function qh(e) {
    var t = Sc(),
      i = e.focusedElem,
      s = e.selectionRange;
    if (t !== i && i && i.ownerDocument && wc(i.ownerDocument.documentElement, i)) {
      if (s !== null && ts(i)) {
        if (((t = s.start), (e = s.end), e === void 0 && (e = t), 'selectionStart' in i))
          (i.selectionStart = t), (i.selectionEnd = Math.min(e, i.value.length));
        else if (((e = ((t = i.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
          e = e.getSelection();
          var u = i.textContent.length,
            f = Math.min(s.start, u);
          (s = s.end === void 0 ? f : Math.min(s.end, u)),
            !e.extend && f > s && ((u = s), (s = f), (f = u)),
            (u = yc(i, f));
          var p = yc(i, s);
          u &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            f > s ? (e.addRange(t), e.extend(p.node, p.offset)) : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == 'function' && i.focus(), i = 0; i < t.length; i++)
        (e = t[i]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var Kh = m && 'documentMode' in document && 11 >= document.documentMode,
    Zn = null,
    ns = null,
    qr = null,
    rs = !1;
  function xc(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    rs ||
      Zn == null ||
      Zn !== Mi(s) ||
      ((s = Zn),
      'selectionStart' in s && ts(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = ((s.ownerDocument && s.ownerDocument.defaultView) || window).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (qr && Yr(qr, s)) ||
        ((qr = s),
        (s = ta(ns, 'onSelect')),
        0 < s.length &&
          ((t = new qo('onSelect', 'select', null, t, i)), e.push({ event: t, listeners: s }), (t.target = Zn))));
  }
  function Ji(e, t) {
    var i = {};
    return (i[e.toLowerCase()] = t.toLowerCase()), (i['Webkit' + e] = 'webkit' + t), (i['Moz' + e] = 'moz' + t), i;
  }
  var er = {
      animationend: Ji('Animation', 'AnimationEnd'),
      animationiteration: Ji('Animation', 'AnimationIteration'),
      animationstart: Ji('Animation', 'AnimationStart'),
      transitionend: Ji('Transition', 'TransitionEnd'),
    },
    is = {},
    kc = {};
  m &&
    ((kc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete er.animationend.animation, delete er.animationiteration.animation, delete er.animationstart.animation),
    'TransitionEvent' in window || delete er.transitionend.transition);
  function Zi(e) {
    if (is[e]) return is[e];
    if (!er[e]) return e;
    var t = er[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in kc) return (is[e] = t[i]);
    return e;
  }
  var bc = Zi('animationend'),
    Cc = Zi('animationiteration'),
    Pc = Zi('animationstart'),
    Ec = Zi('transitionend'),
    _c = new Map(),
    Nc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function an(e, t) {
    _c.set(e, t), c(t, [e]);
  }
  for (var as = 0; as < Nc.length; as++) {
    var os = Nc[as],
      Qh = os.toLowerCase(),
      Xh = os[0].toUpperCase() + os.slice(1);
    an(Qh, 'on' + Xh);
  }
  an(bc, 'onAnimationEnd'),
    an(Cc, 'onAnimationIteration'),
    an(Pc, 'onAnimationStart'),
    an('dblclick', 'onDoubleClick'),
    an('focusin', 'onFocus'),
    an('focusout', 'onBlur'),
    an(Ec, 'onTransitionEnd'),
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
  var Kr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Gh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Kr));
  function Oc(e, t, i) {
    var s = e.type || 'unknown-event';
    (e.currentTarget = i), Qp(s, t, void 0, e), (e.currentTarget = null);
  }
  function Lc(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i],
        u = s.event;
      s = s.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var p = s.length - 1; 0 <= p; p--) {
            var y = s[p],
              x = y.instance,
              E = y.currentTarget;
            if (((y = y.listener), x !== f && u.isPropagationStopped())) break e;
            Oc(u, y, E), (f = x);
          }
        else
          for (p = 0; p < s.length; p++) {
            if (
              ((y = s[p]),
              (x = y.instance),
              (E = y.currentTarget),
              (y = y.listener),
              x !== f && u.isPropagationStopped())
            )
              break e;
            Oc(u, y, E), (f = x);
          }
      }
    }
    if (ji) throw ((e = jo), (ji = !1), (jo = null), e);
  }
  function xe(e, t) {
    var i = t[ps];
    i === void 0 && (i = t[ps] = new Set());
    var s = e + '__bubble';
    i.has(s) || (Rc(t, e, 2, !1), i.add(s));
  }
  function ss(e, t, i) {
    var s = 0;
    t && (s |= 4), Rc(i, e, s, t);
  }
  var ea = '_reactListening' + Math.random().toString(36).slice(2);
  function Qr(e) {
    if (!e[ea]) {
      (e[ea] = !0),
        o.forEach(function (i) {
          i !== 'selectionchange' && (Gh.has(i) || ss(i, !1, e), ss(i, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ea] || ((t[ea] = !0), ss('selectionchange', !1, t));
    }
  }
  function Rc(e, t, i, s) {
    switch (ec(t)) {
      case 1:
        var u = fh;
        break;
      case 4:
        u = dh;
        break;
      default:
        u = Bo;
    }
    (i = u.bind(null, t, i, e)),
      (u = void 0),
      !zo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (u = !0),
      s
        ? u !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: u })
          : e.addEventListener(t, i, !0)
        : u !== void 0
        ? e.addEventListener(t, i, { passive: u })
        : e.addEventListener(t, i, !1);
  }
  function ls(e, t, i, s, u) {
    var f = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var p = s.tag;
        if (p === 3 || p === 4) {
          var y = s.stateNode.containerInfo;
          if (y === u || (y.nodeType === 8 && y.parentNode === u)) break;
          if (p === 4)
            for (p = s.return; p !== null; ) {
              var x = p.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = p.stateNode.containerInfo), x === u || (x.nodeType === 8 && x.parentNode === u))
              )
                return;
              p = p.return;
            }
          for (; y !== null; ) {
            if (((p = En(y)), p === null)) return;
            if (((x = p.tag), x === 5 || x === 6)) {
              s = f = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        s = s.return;
      }
    zu(function () {
      var E = f,
        M = Io(i),
        z = [];
      e: {
        var T = _c.get(e);
        if (T !== void 0) {
          var W = qo,
            q = e;
          switch (e) {
            case 'keypress':
              if (Ki(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              W = _h;
              break;
            case 'focusin':
              (q = 'focus'), (W = Xo);
              break;
            case 'focusout':
              (q = 'blur'), (W = Xo);
              break;
            case 'beforeblur':
            case 'afterblur':
              W = Xo;
              break;
            case 'click':
              if (i.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              W = rc;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              W = hh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              W = Lh;
              break;
            case bc:
            case Cc:
            case Pc:
              W = yh;
              break;
            case Ec:
              W = Th;
              break;
            case 'scroll':
              W = mh;
              break;
            case 'wheel':
              W = Mh;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              W = Sh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              W = ac;
          }
          var K = (t & 4) !== 0,
            Ie = !K && e === 'scroll',
            C = K ? (T !== null ? T + 'Capture' : null) : T;
          K = [];
          for (var k = E, P; k !== null; ) {
            P = k;
            var D = P.stateNode;
            if (
              (P.tag === 5 && D !== null && ((P = D), C !== null && ((D = Rr(k, C)), D != null && K.push(Xr(k, D, P)))),
              Ie)
            )
              break;
            k = k.return;
          }
          0 < K.length && ((T = new W(T, q, null, i, M)), z.push({ event: T, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((T = e === 'mouseover' || e === 'pointerover'),
            (W = e === 'mouseout' || e === 'pointerout'),
            T && i !== To && (q = i.relatedTarget || i.fromElement) && (En(q) || q[$t]))
          )
            break e;
          if (
            (W || T) &&
            ((T = M.window === M ? M : (T = M.ownerDocument) ? T.defaultView || T.parentWindow : window),
            W
              ? ((q = i.relatedTarget || i.toElement),
                (W = E),
                (q = q ? En(q) : null),
                q !== null && ((Ie = Pn(q)), q !== Ie || (q.tag !== 5 && q.tag !== 6)) && (q = null))
              : ((W = null), (q = E)),
            W !== q)
          ) {
            if (
              ((K = rc),
              (D = 'onMouseLeave'),
              (C = 'onMouseEnter'),
              (k = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((K = ac), (D = 'onPointerLeave'), (C = 'onPointerEnter'), (k = 'pointer')),
              (Ie = W == null ? T : rr(W)),
              (P = q == null ? T : rr(q)),
              (T = new K(D, k + 'leave', W, i, M)),
              (T.target = Ie),
              (T.relatedTarget = P),
              (D = null),
              En(M) === E && ((K = new K(C, k + 'enter', q, i, M)), (K.target = P), (K.relatedTarget = Ie), (D = K)),
              (Ie = D),
              W && q)
            )
              t: {
                for (K = W, C = q, k = 0, P = K; P; P = tr(P)) k++;
                for (P = 0, D = C; D; D = tr(D)) P++;
                for (; 0 < k - P; ) (K = tr(K)), k--;
                for (; 0 < P - k; ) (C = tr(C)), P--;
                for (; k--; ) {
                  if (K === C || (C !== null && K === C.alternate)) break t;
                  (K = tr(K)), (C = tr(C));
                }
                K = null;
              }
            else K = null;
            W !== null && Tc(z, T, W, K, !1), q !== null && Ie !== null && Tc(z, Ie, q, K, !0);
          }
        }
        e: {
          if (
            ((T = E ? rr(E) : window),
            (W = T.nodeName && T.nodeName.toLowerCase()),
            W === 'select' || (W === 'input' && T.type === 'file'))
          )
            var Q = Vh;
          else if (fc(T))
            if (mc) Q = Hh;
            else {
              Q = Wh;
              var ee = Uh;
            }
          else
            (W = T.nodeName) &&
              W.toLowerCase() === 'input' &&
              (T.type === 'checkbox' || T.type === 'radio') &&
              (Q = Bh);
          if (Q && (Q = Q(e, E))) {
            dc(z, Q, i, M);
            break e;
          }
          ee && ee(e, T, E),
            e === 'focusout' &&
              (ee = T._wrapperState) &&
              ee.controlled &&
              T.type === 'number' &&
              _o(T, 'number', T.value);
        }
        switch (((ee = E ? rr(E) : window), e)) {
          case 'focusin':
            (fc(ee) || ee.contentEditable === 'true') && ((Zn = ee), (ns = E), (qr = null));
            break;
          case 'focusout':
            qr = ns = Zn = null;
            break;
          case 'mousedown':
            rs = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (rs = !1), xc(z, i, M);
            break;
          case 'selectionchange':
            if (Kh) break;
          case 'keydown':
          case 'keyup':
            xc(z, i, M);
        }
        var te;
        if (Jo)
          e: {
            switch (e) {
              case 'compositionstart':
                var ne = 'onCompositionStart';
                break e;
              case 'compositionend':
                ne = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ne = 'onCompositionUpdate';
                break e;
            }
            ne = void 0;
          }
        else
          Jn
            ? uc(e, i) && (ne = 'onCompositionEnd')
            : e === 'keydown' && i.keyCode === 229 && (ne = 'onCompositionStart');
        ne &&
          (oc &&
            i.locale !== 'ko' &&
            (Jn || ne !== 'onCompositionStart'
              ? ne === 'onCompositionEnd' && Jn && (te = tc())
              : ((rn = M), (Yo = 'value' in rn ? rn.value : rn.textContent), (Jn = !0))),
          (ee = ta(E, ne)),
          0 < ee.length &&
            ((ne = new ic(ne, e, null, i, M)),
            z.push({ event: ne, listeners: ee }),
            te ? (ne.data = te) : ((te = cc(i)), te !== null && (ne.data = te)))),
          (te = zh ? jh(e, i) : Dh(e, i)) &&
            ((E = ta(E, 'onBeforeInput')),
            0 < E.length &&
              ((M = new ic('onBeforeInput', 'beforeinput', null, i, M)),
              z.push({ event: M, listeners: E }),
              (M.data = te)));
      }
      Lc(z, t);
    });
  }
  function Xr(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function ta(e, t) {
    for (var i = t + 'Capture', s = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      u.tag === 5 &&
        f !== null &&
        ((u = f),
        (f = Rr(e, i)),
        f != null && s.unshift(Xr(e, f, u)),
        (f = Rr(e, t)),
        f != null && s.push(Xr(e, f, u))),
        (e = e.return);
    }
    return s;
  }
  function tr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Tc(e, t, i, s, u) {
    for (var f = t._reactName, p = []; i !== null && i !== s; ) {
      var y = i,
        x = y.alternate,
        E = y.stateNode;
      if (x !== null && x === s) break;
      y.tag === 5 &&
        E !== null &&
        ((y = E),
        u
          ? ((x = Rr(i, f)), x != null && p.unshift(Xr(i, x, y)))
          : u || ((x = Rr(i, f)), x != null && p.push(Xr(i, x, y)))),
        (i = i.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Jh = /\r\n?/g,
    Zh = /\u0000|\uFFFD/g;
  function Ic(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Jh,
        `
`
      )
      .replace(Zh, '');
  }
  function na(e, t, i) {
    if (((t = Ic(t)), Ic(e) !== t && i)) throw Error(a(425));
  }
  function ra() {}
  var us = null,
    cs = null;
  function fs(e, t) {
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
  var ds = typeof setTimeout == 'function' ? setTimeout : void 0,
    eg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Mc = typeof Promise == 'function' ? Promise : void 0,
    tg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Mc < 'u'
        ? function (e) {
            return Mc.resolve(null).then(e).catch(ng);
          }
        : ds;
  function ng(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ms(e, t) {
    var i = t,
      s = 0;
    do {
      var u = i.nextSibling;
      if ((e.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === '/$')) {
          if (s === 0) {
            e.removeChild(u), $r(t);
            return;
          }
          s--;
        } else (i !== '$' && i !== '$?' && i !== '$!') || s++;
      i = u;
    } while (i);
    $r(t);
  }
  function on(e) {
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
  function Ac(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '$' || i === '$!' || i === '$?') {
          if (t === 0) return e;
          t--;
        } else i === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var nr = Math.random().toString(36).slice(2),
    Tt = '__reactFiber$' + nr,
    Gr = '__reactProps$' + nr,
    $t = '__reactContainer$' + nr,
    ps = '__reactEvents$' + nr,
    rg = '__reactListeners$' + nr,
    ig = '__reactHandles$' + nr;
  function En(e) {
    var t = e[Tt];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[$t] || i[Tt])) {
        if (((i = t.alternate), t.child !== null || (i !== null && i.child !== null)))
          for (e = Ac(e); e !== null; ) {
            if ((i = e[Tt])) return i;
            e = Ac(e);
          }
        return t;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function Jr(e) {
    return (e = e[Tt] || e[$t]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
  }
  function rr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ia(e) {
    return e[Gr] || null;
  }
  var hs = [],
    ir = -1;
  function sn(e) {
    return { current: e };
  }
  function ke(e) {
    0 > ir || ((e.current = hs[ir]), (hs[ir] = null), ir--);
  }
  function we(e, t) {
    ir++, (hs[ir] = e.current), (e.current = t);
  }
  var ln = {},
    Ke = sn(ln),
    nt = sn(!1),
    _n = ln;
  function ar(e, t) {
    var i = e.type.contextTypes;
    if (!i) return ln;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      f;
    for (f in i) u[f] = t[f];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function rt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function aa() {
    ke(nt), ke(Ke);
  }
  function zc(e, t, i) {
    if (Ke.current !== ln) throw Error(a(168));
    we(Ke, t), we(nt, i);
  }
  function jc(e, t, i) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != 'function')) return i;
    s = s.getChildContext();
    for (var u in s) if (!(u in t)) throw Error(a(108, ye(e) || 'Unknown', u));
    return U({}, i, s);
  }
  function oa(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
      (_n = Ke.current),
      we(Ke, e),
      we(nt, nt.current),
      !0
    );
  }
  function Dc(e, t, i) {
    var s = e.stateNode;
    if (!s) throw Error(a(169));
    i ? ((e = jc(e, t, _n)), (s.__reactInternalMemoizedMergedChildContext = e), ke(nt), ke(Ke), we(Ke, e)) : ke(nt),
      we(nt, i);
  }
  var Vt = null,
    sa = !1,
    gs = !1;
  function Fc(e) {
    Vt === null ? (Vt = [e]) : Vt.push(e);
  }
  function ag(e) {
    (sa = !0), Fc(e);
  }
  function un() {
    if (!gs && Vt !== null) {
      gs = !0;
      var e = 0,
        t = he;
      try {
        var i = Vt;
        for (he = 1; e < i.length; e++) {
          var s = i[e];
          do s = s(!0);
          while (s !== null);
        }
        (Vt = null), (sa = !1);
      } catch (u) {
        throw (Vt !== null && (Vt = Vt.slice(e + 1)), Vu(Do, un), u);
      } finally {
        (he = t), (gs = !1);
      }
    }
    return null;
  }
  var or = [],
    sr = 0,
    la = null,
    ua = 0,
    ht = [],
    gt = 0,
    Nn = null,
    Ut = 1,
    Wt = '';
  function On(e, t) {
    (or[sr++] = ua), (or[sr++] = la), (la = e), (ua = t);
  }
  function $c(e, t, i) {
    (ht[gt++] = Ut), (ht[gt++] = Wt), (ht[gt++] = Nn), (Nn = e);
    var s = Ut;
    e = Wt;
    var u = 32 - kt(s) - 1;
    (s &= ~(1 << u)), (i += 1);
    var f = 32 - kt(t) + u;
    if (30 < f) {
      var p = u - (u % 5);
      (f = (s & ((1 << p) - 1)).toString(32)),
        (s >>= p),
        (u -= p),
        (Ut = (1 << (32 - kt(t) + u)) | (i << u) | s),
        (Wt = f + e);
    } else (Ut = (1 << f) | (i << u) | s), (Wt = e);
  }
  function vs(e) {
    e.return !== null && (On(e, 1), $c(e, 1, 0));
  }
  function ys(e) {
    for (; e === la; ) (la = or[--sr]), (or[sr] = null), (ua = or[--sr]), (or[sr] = null);
    for (; e === Nn; )
      (Nn = ht[--gt]), (ht[gt] = null), (Wt = ht[--gt]), (ht[gt] = null), (Ut = ht[--gt]), (ht[gt] = null);
  }
  var ft = null,
    dt = null,
    Ee = !1,
    Ct = null;
  function Vc(e, t) {
    var i = St(5, null, null, 0);
    (i.elementType = 'DELETED'),
      (i.stateNode = t),
      (i.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i);
  }
  function Uc(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ft = e), (dt = on(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ft = e), (dt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = Nn !== null ? { id: Ut, overflow: Wt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }),
              (i = St(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = e),
              (e.child = i),
              (ft = e),
              (dt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ws(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ss(e) {
    if (Ee) {
      var t = dt;
      if (t) {
        var i = t;
        if (!Uc(e, t)) {
          if (ws(e)) throw Error(a(418));
          t = on(i.nextSibling);
          var s = ft;
          t && Uc(e, t) ? Vc(s, i) : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (ft = e));
        }
      } else {
        if (ws(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (Ee = !1), (ft = e);
      }
    }
  }
  function Wc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ft = e;
  }
  function ca(e) {
    if (e !== ft) return !1;
    if (!Ee) return Wc(e), (Ee = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !fs(e.type, e.memoizedProps))),
      t && (t = dt))
    ) {
      if (ws(e)) throw (Bc(), Error(a(418)));
      for (; t; ) Vc(e, t), (t = on(t.nextSibling));
    }
    if ((Wc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === '/$') {
              if (t === 0) {
                dt = on(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        dt = null;
      }
    } else dt = ft ? on(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bc() {
    for (var e = dt; e; ) e = on(e.nextSibling);
  }
  function lr() {
    (dt = ft = null), (Ee = !1);
  }
  function xs(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
  }
  var og = $.ReactCurrentBatchConfig;
  function Zr(e, t, i) {
    if (((e = i.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(a(309));
          var s = i.stateNode;
        }
        if (!s) throw Error(a(147, e));
        var u = s,
          f = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === f
          ? t.ref
          : ((t = function (p) {
              var y = u.refs;
              p === null ? delete y[f] : (y[f] = p);
            }),
            (t._stringRef = f),
            t);
      }
      if (typeof e != 'string') throw Error(a(284));
      if (!i._owner) throw Error(a(290, e));
    }
    return e;
  }
  function fa(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(a(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
  }
  function Hc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Yc(e) {
    function t(C, k) {
      if (e) {
        var P = C.deletions;
        P === null ? ((C.deletions = [k]), (C.flags |= 16)) : P.push(k);
      }
    }
    function i(C, k) {
      if (!e) return null;
      for (; k !== null; ) t(C, k), (k = k.sibling);
      return null;
    }
    function s(C, k) {
      for (C = new Map(); k !== null; ) k.key !== null ? C.set(k.key, k) : C.set(k.index, k), (k = k.sibling);
      return C;
    }
    function u(C, k) {
      return (C = vn(C, k)), (C.index = 0), (C.sibling = null), C;
    }
    function f(C, k, P) {
      return (
        (C.index = P),
        e
          ? ((P = C.alternate), P !== null ? ((P = P.index), P < k ? ((C.flags |= 2), k) : P) : ((C.flags |= 2), k))
          : ((C.flags |= 1048576), k)
      );
    }
    function p(C) {
      return e && C.alternate === null && (C.flags |= 2), C;
    }
    function y(C, k, P, D) {
      return k === null || k.tag !== 6
        ? ((k = dl(P, C.mode, D)), (k.return = C), k)
        : ((k = u(k, P)), (k.return = C), k);
    }
    function x(C, k, P, D) {
      var Q = P.type;
      return Q === Z
        ? M(C, k, P.props.children, D, P.key)
        : k !== null &&
          (k.elementType === Q || (typeof Q == 'object' && Q !== null && Q.$$typeof === Ae && Hc(Q) === k.type))
        ? ((D = u(k, P.props)), (D.ref = Zr(C, k, P)), (D.return = C), D)
        : ((D = Aa(P.type, P.key, P.props, null, C.mode, D)), (D.ref = Zr(C, k, P)), (D.return = C), D);
    }
    function E(C, k, P, D) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== P.containerInfo ||
        k.stateNode.implementation !== P.implementation
        ? ((k = ml(P, C.mode, D)), (k.return = C), k)
        : ((k = u(k, P.children || [])), (k.return = C), k);
    }
    function M(C, k, P, D, Q) {
      return k === null || k.tag !== 7
        ? ((k = jn(P, C.mode, D, Q)), (k.return = C), k)
        : ((k = u(k, P)), (k.return = C), k);
    }
    function z(C, k, P) {
      if ((typeof k == 'string' && k !== '') || typeof k == 'number')
        return (k = dl('' + k, C.mode, P)), (k.return = C), k;
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case O:
            return (P = Aa(k.type, k.key, k.props, null, C.mode, P)), (P.ref = Zr(C, null, k)), (P.return = C), P;
          case J:
            return (k = ml(k, C.mode, P)), (k.return = C), k;
          case Ae:
            var D = k._init;
            return z(C, D(k._payload), P);
        }
        if (Nr(k) || G(k)) return (k = jn(k, C.mode, P, null)), (k.return = C), k;
        fa(C, k);
      }
      return null;
    }
    function T(C, k, P, D) {
      var Q = k !== null ? k.key : null;
      if ((typeof P == 'string' && P !== '') || typeof P == 'number') return Q !== null ? null : y(C, k, '' + P, D);
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case O:
            return P.key === Q ? x(C, k, P, D) : null;
          case J:
            return P.key === Q ? E(C, k, P, D) : null;
          case Ae:
            return (Q = P._init), T(C, k, Q(P._payload), D);
        }
        if (Nr(P) || G(P)) return Q !== null ? null : M(C, k, P, D, null);
        fa(C, P);
      }
      return null;
    }
    function W(C, k, P, D, Q) {
      if ((typeof D == 'string' && D !== '') || typeof D == 'number') return (C = C.get(P) || null), y(k, C, '' + D, Q);
      if (typeof D == 'object' && D !== null) {
        switch (D.$$typeof) {
          case O:
            return (C = C.get(D.key === null ? P : D.key) || null), x(k, C, D, Q);
          case J:
            return (C = C.get(D.key === null ? P : D.key) || null), E(k, C, D, Q);
          case Ae:
            var ee = D._init;
            return W(C, k, P, ee(D._payload), Q);
        }
        if (Nr(D) || G(D)) return (C = C.get(P) || null), M(k, C, D, Q, null);
        fa(k, D);
      }
      return null;
    }
    function q(C, k, P, D) {
      for (var Q = null, ee = null, te = k, ne = (k = 0), Ve = null; te !== null && ne < P.length; ne++) {
        te.index > ne ? ((Ve = te), (te = null)) : (Ve = te.sibling);
        var de = T(C, te, P[ne], D);
        if (de === null) {
          te === null && (te = Ve);
          break;
        }
        e && te && de.alternate === null && t(C, te),
          (k = f(de, k, ne)),
          ee === null ? (Q = de) : (ee.sibling = de),
          (ee = de),
          (te = Ve);
      }
      if (ne === P.length) return i(C, te), Ee && On(C, ne), Q;
      if (te === null) {
        for (; ne < P.length; ne++)
          (te = z(C, P[ne], D)),
            te !== null && ((k = f(te, k, ne)), ee === null ? (Q = te) : (ee.sibling = te), (ee = te));
        return Ee && On(C, ne), Q;
      }
      for (te = s(C, te); ne < P.length; ne++)
        (Ve = W(te, C, ne, P[ne], D)),
          Ve !== null &&
            (e && Ve.alternate !== null && te.delete(Ve.key === null ? ne : Ve.key),
            (k = f(Ve, k, ne)),
            ee === null ? (Q = Ve) : (ee.sibling = Ve),
            (ee = Ve));
      return (
        e &&
          te.forEach(function (yn) {
            return t(C, yn);
          }),
        Ee && On(C, ne),
        Q
      );
    }
    function K(C, k, P, D) {
      var Q = G(P);
      if (typeof Q != 'function') throw Error(a(150));
      if (((P = Q.call(P)), P == null)) throw Error(a(151));
      for (
        var ee = (Q = null), te = k, ne = (k = 0), Ve = null, de = P.next();
        te !== null && !de.done;
        ne++, de = P.next()
      ) {
        te.index > ne ? ((Ve = te), (te = null)) : (Ve = te.sibling);
        var yn = T(C, te, de.value, D);
        if (yn === null) {
          te === null && (te = Ve);
          break;
        }
        e && te && yn.alternate === null && t(C, te),
          (k = f(yn, k, ne)),
          ee === null ? (Q = yn) : (ee.sibling = yn),
          (ee = yn),
          (te = Ve);
      }
      if (de.done) return i(C, te), Ee && On(C, ne), Q;
      if (te === null) {
        for (; !de.done; ne++, de = P.next())
          (de = z(C, de.value, D)),
            de !== null && ((k = f(de, k, ne)), ee === null ? (Q = de) : (ee.sibling = de), (ee = de));
        return Ee && On(C, ne), Q;
      }
      for (te = s(C, te); !de.done; ne++, de = P.next())
        (de = W(te, C, ne, de.value, D)),
          de !== null &&
            (e && de.alternate !== null && te.delete(de.key === null ? ne : de.key),
            (k = f(de, k, ne)),
            ee === null ? (Q = de) : (ee.sibling = de),
            (ee = de));
      return (
        e &&
          te.forEach(function (Fg) {
            return t(C, Fg);
          }),
        Ee && On(C, ne),
        Q
      );
    }
    function Ie(C, k, P, D) {
      if (
        (typeof P == 'object' && P !== null && P.type === Z && P.key === null && (P = P.props.children),
        typeof P == 'object' && P !== null)
      ) {
        switch (P.$$typeof) {
          case O:
            e: {
              for (var Q = P.key, ee = k; ee !== null; ) {
                if (ee.key === Q) {
                  if (((Q = P.type), Q === Z)) {
                    if (ee.tag === 7) {
                      i(C, ee.sibling), (k = u(ee, P.props.children)), (k.return = C), (C = k);
                      break e;
                    }
                  } else if (
                    ee.elementType === Q ||
                    (typeof Q == 'object' && Q !== null && Q.$$typeof === Ae && Hc(Q) === ee.type)
                  ) {
                    i(C, ee.sibling), (k = u(ee, P.props)), (k.ref = Zr(C, ee, P)), (k.return = C), (C = k);
                    break e;
                  }
                  i(C, ee);
                  break;
                } else t(C, ee);
                ee = ee.sibling;
              }
              P.type === Z
                ? ((k = jn(P.props.children, C.mode, D, P.key)), (k.return = C), (C = k))
                : ((D = Aa(P.type, P.key, P.props, null, C.mode, D)), (D.ref = Zr(C, k, P)), (D.return = C), (C = D));
            }
            return p(C);
          case J:
            e: {
              for (ee = P.key; k !== null; ) {
                if (k.key === ee)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === P.containerInfo &&
                    k.stateNode.implementation === P.implementation
                  ) {
                    i(C, k.sibling), (k = u(k, P.children || [])), (k.return = C), (C = k);
                    break e;
                  } else {
                    i(C, k);
                    break;
                  }
                else t(C, k);
                k = k.sibling;
              }
              (k = ml(P, C.mode, D)), (k.return = C), (C = k);
            }
            return p(C);
          case Ae:
            return (ee = P._init), Ie(C, k, ee(P._payload), D);
        }
        if (Nr(P)) return q(C, k, P, D);
        if (G(P)) return K(C, k, P, D);
        fa(C, P);
      }
      return (typeof P == 'string' && P !== '') || typeof P == 'number'
        ? ((P = '' + P),
          k !== null && k.tag === 6
            ? (i(C, k.sibling), (k = u(k, P)), (k.return = C), (C = k))
            : (i(C, k), (k = dl(P, C.mode, D)), (k.return = C), (C = k)),
          p(C))
        : i(C, k);
    }
    return Ie;
  }
  var ur = Yc(!0),
    qc = Yc(!1),
    da = sn(null),
    ma = null,
    cr = null,
    ks = null;
  function bs() {
    ks = cr = ma = null;
  }
  function Cs(e) {
    var t = da.current;
    ke(da), (e._currentValue = t);
  }
  function Ps(e, t, i) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function fr(e, t) {
    (ma = e),
      (ks = cr = null),
      (e = e.dependencies),
      e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (it = !0), (e.firstContext = null));
  }
  function vt(e) {
    var t = e._currentValue;
    if (ks !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), cr === null)) {
        if (ma === null) throw Error(a(308));
        (cr = e), (ma.dependencies = { lanes: 0, firstContext: e });
      } else cr = cr.next = e;
    return t;
  }
  var Ln = null;
  function Es(e) {
    Ln === null ? (Ln = [e]) : Ln.push(e);
  }
  function Kc(e, t, i, s) {
    var u = t.interleaved;
    return u === null ? ((i.next = i), Es(t)) : ((i.next = u.next), (u.next = i)), (t.interleaved = i), Bt(e, s);
  }
  function Bt(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
      (e.childLanes |= t), (i = e.alternate), i !== null && (i.childLanes |= t), (i = e), (e = e.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var cn = !1;
  function _s(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Qc(e, t) {
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
  function Ht(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fn(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (ue & 2) !== 0)) {
      var u = s.pending;
      return u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)), (s.pending = t), Bt(e, i);
    }
    return (
      (u = s.interleaved),
      u === null ? ((t.next = t), Es(s)) : ((t.next = u.next), (u.next = t)),
      (s.interleaved = t),
      Bt(e, i)
    );
  }
  function pa(e, t, i) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))) {
      var s = t.lanes;
      (s &= e.pendingLanes), (i |= s), (t.lanes = i), Vo(e, i);
    }
  }
  function Xc(e, t) {
    var i = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), i === s)) {
      var u = null,
        f = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var p = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          f === null ? (u = f = p) : (f = f.next = p), (i = i.next);
        } while (i !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      (i = { baseState: s.baseState, firstBaseUpdate: u, lastBaseUpdate: f, shared: s.shared, effects: s.effects }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate), e === null ? (i.firstBaseUpdate = t) : (e.next = t), (i.lastBaseUpdate = t);
  }
  function ha(e, t, i, s) {
    var u = e.updateQueue;
    cn = !1;
    var f = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var x = y,
        E = x.next;
      (x.next = null), p === null ? (f = E) : (p.next = E), (p = x);
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (y = M.lastBaseUpdate),
        y !== p && (y === null ? (M.firstBaseUpdate = E) : (y.next = E), (M.lastBaseUpdate = x)));
    }
    if (f !== null) {
      var z = u.baseState;
      (p = 0), (M = E = x = null), (y = f);
      do {
        var T = y.lane,
          W = y.eventTime;
        if ((s & T) === T) {
          M !== null &&
            (M = M.next = { eventTime: W, lane: 0, tag: y.tag, payload: y.payload, callback: y.callback, next: null });
          e: {
            var q = e,
              K = y;
            switch (((T = t), (W = i), K.tag)) {
              case 1:
                if (((q = K.payload), typeof q == 'function')) {
                  z = q.call(W, z, T);
                  break e;
                }
                z = q;
                break e;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (((q = K.payload), (T = typeof q == 'function' ? q.call(W, z, T) : q), T == null)) break e;
                z = U({}, z, T);
                break e;
              case 2:
                cn = !0;
            }
          }
          y.callback !== null &&
            y.lane !== 0 &&
            ((e.flags |= 64), (T = u.effects), T === null ? (u.effects = [y]) : T.push(y));
        } else
          (W = { eventTime: W, lane: T, tag: y.tag, payload: y.payload, callback: y.callback, next: null }),
            M === null ? ((E = M = W), (x = z)) : (M = M.next = W),
            (p |= T);
        if (((y = y.next), y === null)) {
          if (((y = u.shared.pending), y === null)) break;
          (T = y), (y = T.next), (T.next = null), (u.lastBaseUpdate = T), (u.shared.pending = null);
        }
      } while (!0);
      if (
        (M === null && (x = z),
        (u.baseState = x),
        (u.firstBaseUpdate = E),
        (u.lastBaseUpdate = M),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (p |= u.lane), (u = u.next);
        while (u !== t);
      } else f === null && (u.shared.lanes = 0);
      (In |= p), (e.lanes = p), (e.memoizedState = z);
    }
  }
  function Gc(e, t, i) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          u = s.callback;
        if (u !== null) {
          if (((s.callback = null), (s = i), typeof u != 'function')) throw Error(a(191, u));
          u.call(s);
        }
      }
  }
  var ei = {},
    It = sn(ei),
    ti = sn(ei),
    ni = sn(ei);
  function Rn(e) {
    if (e === ei) throw Error(a(174));
    return e;
  }
  function Ns(e, t) {
    switch ((we(ni, t), we(ti, e), we(It, ei), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Oo(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Oo(t, e));
    }
    ke(It), we(It, t);
  }
  function dr() {
    ke(It), ke(ti), ke(ni);
  }
  function Jc(e) {
    Rn(ni.current);
    var t = Rn(It.current),
      i = Oo(t, e.type);
    t !== i && (we(ti, e), we(It, i));
  }
  function Os(e) {
    ti.current === e && (ke(It), ke(ti));
  }
  var Ne = sn(0);
  function ga(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || i.data === '$?' || i.data === '$!')) return t;
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
  var Ls = [];
  function Rs() {
    for (var e = 0; e < Ls.length; e++) Ls[e]._workInProgressVersionPrimary = null;
    Ls.length = 0;
  }
  var va = $.ReactCurrentDispatcher,
    Ts = $.ReactCurrentBatchConfig,
    Tn = 0,
    Oe = null,
    ze = null,
    Fe = null,
    ya = !1,
    ri = !1,
    ii = 0,
    sg = 0;
  function Qe() {
    throw Error(a(321));
  }
  function Is(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!bt(e[i], t[i])) return !1;
    return !0;
  }
  function Ms(e, t, i, s, u, f) {
    if (
      ((Tn = f),
      (Oe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (va.current = e === null || e.memoizedState === null ? fg : dg),
      (e = i(s, u)),
      ri)
    ) {
      f = 0;
      do {
        if (((ri = !1), (ii = 0), 25 <= f)) throw Error(a(301));
        (f += 1), (Fe = ze = null), (t.updateQueue = null), (va.current = mg), (e = i(s, u));
      } while (ri);
    }
    if (((va.current = xa), (t = ze !== null && ze.next !== null), (Tn = 0), (Fe = ze = Oe = null), (ya = !1), t))
      throw Error(a(300));
    return e;
  }
  function As() {
    var e = ii !== 0;
    return (ii = 0), e;
  }
  function Mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fe === null ? (Oe.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
  }
  function yt() {
    if (ze === null) {
      var e = Oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Fe === null ? Oe.memoizedState : Fe.next;
    if (t !== null) (Fe = t), (ze = e);
    else {
      if (e === null) throw Error(a(310));
      (ze = e),
        (e = {
          memoizedState: ze.memoizedState,
          baseState: ze.baseState,
          baseQueue: ze.baseQueue,
          queue: ze.queue,
          next: null,
        }),
        Fe === null ? (Oe.memoizedState = Fe = e) : (Fe = Fe.next = e);
    }
    return Fe;
  }
  function ai(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function zs(e) {
    var t = yt(),
      i = t.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var s = ze,
      u = s.baseQueue,
      f = i.pending;
    if (f !== null) {
      if (u !== null) {
        var p = u.next;
        (u.next = f.next), (f.next = p);
      }
      (s.baseQueue = u = f), (i.pending = null);
    }
    if (u !== null) {
      (f = u.next), (s = s.baseState);
      var y = (p = null),
        x = null,
        E = f;
      do {
        var M = E.lane;
        if ((Tn & M) === M)
          x !== null &&
            (x = x.next =
              { lane: 0, action: E.action, hasEagerState: E.hasEagerState, eagerState: E.eagerState, next: null }),
            (s = E.hasEagerState ? E.eagerState : e(s, E.action));
        else {
          var z = { lane: M, action: E.action, hasEagerState: E.hasEagerState, eagerState: E.eagerState, next: null };
          x === null ? ((y = x = z), (p = s)) : (x = x.next = z), (Oe.lanes |= M), (In |= M);
        }
        E = E.next;
      } while (E !== null && E !== f);
      x === null ? (p = s) : (x.next = y),
        bt(s, t.memoizedState) || (it = !0),
        (t.memoizedState = s),
        (t.baseState = p),
        (t.baseQueue = x),
        (i.lastRenderedState = s);
    }
    if (((e = i.interleaved), e !== null)) {
      u = e;
      do (f = u.lane), (Oe.lanes |= f), (In |= f), (u = u.next);
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function js(e) {
    var t = yt(),
      i = t.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch,
      u = i.pending,
      f = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var p = (u = u.next);
      do (f = e(f, p.action)), (p = p.next);
      while (p !== u);
      bt(f, t.memoizedState) || (it = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (i.lastRenderedState = f);
    }
    return [f, s];
  }
  function Zc() {}
  function ef(e, t) {
    var i = Oe,
      s = yt(),
      u = t(),
      f = !bt(s.memoizedState, u);
    if (
      (f && ((s.memoizedState = u), (it = !0)),
      (s = s.queue),
      Ds(rf.bind(null, i, s, e), [e]),
      s.getSnapshot !== t || f || (Fe !== null && Fe.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), oi(9, nf.bind(null, i, s, u, t), void 0, null), $e === null)) throw Error(a(349));
      (Tn & 30) !== 0 || tf(i, t, u);
    }
    return u;
  }
  function tf(e, t, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = Oe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Oe.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
  }
  function nf(e, t, i, s) {
    (t.value = i), (t.getSnapshot = s), af(t) && of(e);
  }
  function rf(e, t, i) {
    return i(function () {
      af(t) && of(e);
    });
  }
  function af(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !bt(e, i);
    } catch {
      return !0;
    }
  }
  function of(e) {
    var t = Bt(e, 1);
    t !== null && Nt(t, e, 1, -1);
  }
  function sf(e) {
    var t = Mt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ai,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = cg.bind(null, Oe, e)),
      [t.memoizedState, e]
    );
  }
  function oi(e, t, i, s) {
    return (
      (e = { tag: e, create: t, destroy: i, deps: s, next: null }),
      (t = Oe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Oe.updateQueue = t), (t.lastEffect = e.next = e))
        : ((i = t.lastEffect),
          i === null ? (t.lastEffect = e.next = e) : ((s = i.next), (i.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function lf() {
    return yt().memoizedState;
  }
  function wa(e, t, i, s) {
    var u = Mt();
    (Oe.flags |= e), (u.memoizedState = oi(1 | t, i, void 0, s === void 0 ? null : s));
  }
  function Sa(e, t, i, s) {
    var u = yt();
    s = s === void 0 ? null : s;
    var f = void 0;
    if (ze !== null) {
      var p = ze.memoizedState;
      if (((f = p.destroy), s !== null && Is(s, p.deps))) {
        u.memoizedState = oi(t, i, f, s);
        return;
      }
    }
    (Oe.flags |= e), (u.memoizedState = oi(1 | t, i, f, s));
  }
  function uf(e, t) {
    return wa(8390656, 8, e, t);
  }
  function Ds(e, t) {
    return Sa(2048, 8, e, t);
  }
  function cf(e, t) {
    return Sa(4, 2, e, t);
  }
  function ff(e, t) {
    return Sa(4, 4, e, t);
  }
  function df(e, t) {
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
  function mf(e, t, i) {
    return (i = i != null ? i.concat([e]) : null), Sa(4, 4, df.bind(null, t, e), i);
  }
  function Fs() {}
  function pf(e, t) {
    var i = yt();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Is(t, s[1]) ? s[0] : ((i.memoizedState = [e, t]), e);
  }
  function hf(e, t) {
    var i = yt();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Is(t, s[1]) ? s[0] : ((e = e()), (i.memoizedState = [e, t]), e);
  }
  function gf(e, t, i) {
    return (Tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = i))
      : (bt(i, t) || ((i = Hu()), (Oe.lanes |= i), (In |= i), (e.baseState = !0)), t);
  }
  function lg(e, t) {
    var i = he;
    (he = i !== 0 && 4 > i ? i : 4), e(!0);
    var s = Ts.transition;
    Ts.transition = {};
    try {
      e(!1), t();
    } finally {
      (he = i), (Ts.transition = s);
    }
  }
  function vf() {
    return yt().memoizedState;
  }
  function ug(e, t, i) {
    var s = hn(e);
    if (((i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }), yf(e))) wf(t, i);
    else if (((i = Kc(e, t, i, s)), i !== null)) {
      var u = et();
      Nt(i, e, s, u), Sf(i, t, s);
    }
  }
  function cg(e, t, i) {
    var s = hn(e),
      u = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (yf(e)) wf(t, u);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && ((f = t.lastRenderedReducer), f !== null))
        try {
          var p = t.lastRenderedState,
            y = f(p, i);
          if (((u.hasEagerState = !0), (u.eagerState = y), bt(y, p))) {
            var x = t.interleaved;
            x === null ? ((u.next = u), Es(t)) : ((u.next = x.next), (x.next = u)), (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (i = Kc(e, t, u, s)), i !== null && ((u = et()), Nt(i, e, s, u), Sf(i, t, s));
    }
  }
  function yf(e) {
    var t = e.alternate;
    return e === Oe || (t !== null && t === Oe);
  }
  function wf(e, t) {
    ri = ya = !0;
    var i = e.pending;
    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (e.pending = t);
  }
  function Sf(e, t, i) {
    if ((i & 4194240) !== 0) {
      var s = t.lanes;
      (s &= e.pendingLanes), (i |= s), (t.lanes = i), Vo(e, i);
    }
  }
  var xa = {
      readContext: vt,
      useCallback: Qe,
      useContext: Qe,
      useEffect: Qe,
      useImperativeHandle: Qe,
      useInsertionEffect: Qe,
      useLayoutEffect: Qe,
      useMemo: Qe,
      useReducer: Qe,
      useRef: Qe,
      useState: Qe,
      useDebugValue: Qe,
      useDeferredValue: Qe,
      useTransition: Qe,
      useMutableSource: Qe,
      useSyncExternalStore: Qe,
      useId: Qe,
      unstable_isNewReconciler: !1,
    },
    fg = {
      readContext: vt,
      useCallback: function (e, t) {
        return (Mt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: vt,
      useEffect: uf,
      useImperativeHandle: function (e, t, i) {
        return (i = i != null ? i.concat([e]) : null), wa(4194308, 4, df.bind(null, t, e), i);
      },
      useLayoutEffect: function (e, t) {
        return wa(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return wa(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = Mt();
        return (t = t === void 0 ? null : t), (e = e()), (i.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, i) {
        var s = Mt();
        return (
          (t = i !== void 0 ? i(t) : t),
          (s.memoizedState = s.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (s.queue = e),
          (e = e.dispatch = ug.bind(null, Oe, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Mt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: sf,
      useDebugValue: Fs,
      useDeferredValue: function (e) {
        return (Mt().memoizedState = e);
      },
      useTransition: function () {
        var e = sf(!1),
          t = e[0];
        return (e = lg.bind(null, e[1])), (Mt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, i) {
        var s = Oe,
          u = Mt();
        if (Ee) {
          if (i === void 0) throw Error(a(407));
          i = i();
        } else {
          if (((i = t()), $e === null)) throw Error(a(349));
          (Tn & 30) !== 0 || tf(s, t, i);
        }
        u.memoizedState = i;
        var f = { value: i, getSnapshot: t };
        return (
          (u.queue = f),
          uf(rf.bind(null, s, f, e), [e]),
          (s.flags |= 2048),
          oi(9, nf.bind(null, s, f, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Mt(),
          t = $e.identifierPrefix;
        if (Ee) {
          var i = Wt,
            s = Ut;
          (i = (s & ~(1 << (32 - kt(s) - 1))).toString(32) + i),
            (t = ':' + t + 'R' + i),
            (i = ii++),
            0 < i && (t += 'H' + i.toString(32)),
            (t += ':');
        } else (i = sg++), (t = ':' + t + 'r' + i.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    dg = {
      readContext: vt,
      useCallback: pf,
      useContext: vt,
      useEffect: Ds,
      useImperativeHandle: mf,
      useInsertionEffect: cf,
      useLayoutEffect: ff,
      useMemo: hf,
      useReducer: zs,
      useRef: lf,
      useState: function () {
        return zs(ai);
      },
      useDebugValue: Fs,
      useDeferredValue: function (e) {
        var t = yt();
        return gf(t, ze.memoizedState, e);
      },
      useTransition: function () {
        var e = zs(ai)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Zc,
      useSyncExternalStore: ef,
      useId: vf,
      unstable_isNewReconciler: !1,
    },
    mg = {
      readContext: vt,
      useCallback: pf,
      useContext: vt,
      useEffect: Ds,
      useImperativeHandle: mf,
      useInsertionEffect: cf,
      useLayoutEffect: ff,
      useMemo: hf,
      useReducer: js,
      useRef: lf,
      useState: function () {
        return js(ai);
      },
      useDebugValue: Fs,
      useDeferredValue: function (e) {
        var t = yt();
        return ze === null ? (t.memoizedState = e) : gf(t, ze.memoizedState, e);
      },
      useTransition: function () {
        var e = js(ai)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Zc,
      useSyncExternalStore: ef,
      useId: vf,
      unstable_isNewReconciler: !1,
    };
  function Pt(e, t) {
    if (e && e.defaultProps) {
      (t = U({}, t)), (e = e.defaultProps);
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function $s(e, t, i, s) {
    (t = e.memoizedState),
      (i = i(s, t)),
      (i = i == null ? t : U({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var ka = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Pn(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var s = et(),
        u = hn(e),
        f = Ht(s, u);
      (f.payload = t), i != null && (f.callback = i), (t = fn(e, f, u)), t !== null && (Nt(t, e, u, s), pa(t, e, u));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var s = et(),
        u = hn(e),
        f = Ht(s, u);
      (f.tag = 1),
        (f.payload = t),
        i != null && (f.callback = i),
        (t = fn(e, f, u)),
        t !== null && (Nt(t, e, u, s), pa(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = et(),
        s = hn(e),
        u = Ht(i, s);
      (u.tag = 2), t != null && (u.callback = t), (t = fn(e, u, s)), t !== null && (Nt(t, e, s, i), pa(t, e, s));
    },
  };
  function xf(e, t, i, s, u, f, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(s, f, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Yr(i, s) || !Yr(u, f)
        : !0
    );
  }
  function kf(e, t, i) {
    var s = !1,
      u = ln,
      f = t.contextType;
    return (
      typeof f == 'object' && f !== null
        ? (f = vt(f))
        : ((u = rt(t) ? _n : Ke.current), (s = t.contextTypes), (f = (s = s != null) ? ar(e, u) : ln)),
      (t = new t(i, f)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ka),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function bf(e, t, i, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(i, s),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(i, s),
      t.state !== e && ka.enqueueReplaceState(t, t.state, null);
  }
  function Vs(e, t, i, s) {
    var u = e.stateNode;
    (u.props = i), (u.state = e.memoizedState), (u.refs = {}), _s(e);
    var f = t.contextType;
    typeof f == 'object' && f !== null ? (u.context = vt(f)) : ((f = rt(t) ? _n : Ke.current), (u.context = ar(e, f))),
      (u.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == 'function' && ($s(e, t, f, i), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function' ||
        (typeof u.UNSAFE_componentWillMount != 'function' && typeof u.componentWillMount != 'function') ||
        ((t = u.state),
        typeof u.componentWillMount == 'function' && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
        t !== u.state && ka.enqueueReplaceState(u, u.state, null),
        ha(e, i, u, s),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function mr(e, t) {
    try {
      var i = '',
        s = t;
      do (i += ce(s)), (s = s.return);
      while (s);
      var u = i;
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
  function Us(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Ws(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var pg = typeof WeakMap == 'function' ? WeakMap : Map;
  function Cf(e, t, i) {
    (i = Ht(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var s = t.value;
    return (
      (i.callback = function () {
        Oa || ((Oa = !0), (il = s)), Ws(e, t);
      }),
      i
    );
  }
  function Pf(e, t, i) {
    (i = Ht(-1, i)), (i.tag = 3);
    var s = e.type.getDerivedStateFromError;
    if (typeof s == 'function') {
      var u = t.value;
      (i.payload = function () {
        return s(u);
      }),
        (i.callback = function () {
          Ws(e, t);
        });
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == 'function' &&
        (i.callback = function () {
          Ws(e, t), typeof s != 'function' && (mn === null ? (mn = new Set([this])) : mn.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, { componentStack: p !== null ? p : '' });
        }),
      i
    );
  }
  function Ef(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new pg();
      var u = new Set();
      s.set(t, u);
    } else (u = s.get(t)), u === void 0 && ((u = new Set()), s.set(t, u));
    u.has(i) || (u.add(i), (e = Ng.bind(null, e, t, i)), t.then(e, e));
  }
  function _f(e) {
    do {
      var t;
      if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Nf(e, t, i, s, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 && (i.alternate === null ? (i.tag = 17) : ((t = Ht(-1, 1)), (t.tag = 2), fn(i, t, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var hg = $.ReactCurrentOwner,
    it = !1;
  function Ze(e, t, i, s) {
    t.child = e === null ? qc(t, null, i, s) : ur(t, e.child, i, s);
  }
  function Of(e, t, i, s, u) {
    i = i.render;
    var f = t.ref;
    return (
      fr(t, u),
      (s = Ms(e, t, i, s, f, u)),
      (i = As()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), Yt(e, t, u))
        : (Ee && i && vs(t), (t.flags |= 1), Ze(e, t, s, u), t.child)
    );
  }
  function Lf(e, t, i, s, u) {
    if (e === null) {
      var f = i.type;
      return typeof f == 'function' &&
        !fl(f) &&
        f.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Rf(e, t, f, s, u))
        : ((e = Aa(i.type, null, s, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), (e.lanes & u) === 0)) {
      var p = f.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : Yr), i(p, s) && e.ref === t.ref)) return Yt(e, t, u);
    }
    return (t.flags |= 1), (e = vn(f, s)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Rf(e, t, i, s, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Yr(f, s) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = s = f), (e.lanes & u) !== 0)) (e.flags & 131072) !== 0 && (it = !0);
        else return (t.lanes = e.lanes), Yt(e, t, u);
    }
    return Bs(e, t, i, s, u);
  }
  function Tf(e, t, i) {
    var s = t.pendingProps,
      u = s.children,
      f = e !== null ? e.memoizedState : null;
    if (s.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), we(hr, mt), (mt |= i);
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            we(hr, mt),
            (mt |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (s = f !== null ? f.baseLanes : i),
          we(hr, mt),
          (mt |= s);
      }
    else f !== null ? ((s = f.baseLanes | i), (t.memoizedState = null)) : (s = i), we(hr, mt), (mt |= s);
    return Ze(e, t, u, i), t.child;
  }
  function If(e, t) {
    var i = t.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) && ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Bs(e, t, i, s, u) {
    var f = rt(i) ? _n : Ke.current;
    return (
      (f = ar(t, f)),
      fr(t, u),
      (i = Ms(e, t, i, s, f, u)),
      (s = As()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), Yt(e, t, u))
        : (Ee && s && vs(t), (t.flags |= 1), Ze(e, t, i, u), t.child)
    );
  }
  function Mf(e, t, i, s, u) {
    if (rt(i)) {
      var f = !0;
      oa(t);
    } else f = !1;
    if ((fr(t, u), t.stateNode === null)) Ca(e, t), kf(t, i, s), Vs(t, i, s, u), (s = !0);
    else if (e === null) {
      var p = t.stateNode,
        y = t.memoizedProps;
      p.props = y;
      var x = p.context,
        E = i.contextType;
      typeof E == 'object' && E !== null ? (E = vt(E)) : ((E = rt(i) ? _n : Ke.current), (E = ar(t, E)));
      var M = i.getDerivedStateFromProps,
        z = typeof M == 'function' || typeof p.getSnapshotBeforeUpdate == 'function';
      z ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' && typeof p.componentWillReceiveProps != 'function') ||
        ((y !== s || x !== E) && bf(t, p, s, E)),
        (cn = !1);
      var T = t.memoizedState;
      (p.state = T),
        ha(t, s, p, u),
        (x = t.memoizedState),
        y !== s || T !== x || nt.current || cn
          ? (typeof M == 'function' && ($s(t, i, M, s), (x = t.memoizedState)),
            (y = cn || xf(t, i, y, s, T, x, E))
              ? (z ||
                  (typeof p.UNSAFE_componentWillMount != 'function' && typeof p.componentWillMount != 'function') ||
                  (typeof p.componentWillMount == 'function' && p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == 'function' && p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof p.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = x)),
            (p.props = s),
            (p.state = x),
            (p.context = E),
            (s = y))
          : (typeof p.componentDidMount == 'function' && (t.flags |= 4194308), (s = !1));
    } else {
      (p = t.stateNode),
        Qc(e, t),
        (y = t.memoizedProps),
        (E = t.type === t.elementType ? y : Pt(t.type, y)),
        (p.props = E),
        (z = t.pendingProps),
        (T = p.context),
        (x = i.contextType),
        typeof x == 'object' && x !== null ? (x = vt(x)) : ((x = rt(i) ? _n : Ke.current), (x = ar(t, x)));
      var W = i.getDerivedStateFromProps;
      (M = typeof W == 'function' || typeof p.getSnapshotBeforeUpdate == 'function') ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' && typeof p.componentWillReceiveProps != 'function') ||
        ((y !== z || T !== x) && bf(t, p, s, x)),
        (cn = !1),
        (T = t.memoizedState),
        (p.state = T),
        ha(t, s, p, u);
      var q = t.memoizedState;
      y !== z || T !== q || nt.current || cn
        ? (typeof W == 'function' && ($s(t, i, W, s), (q = t.memoizedState)),
          (E = cn || xf(t, i, E, s, T, q, x) || !1)
            ? (M ||
                (typeof p.UNSAFE_componentWillUpdate != 'function' && typeof p.componentWillUpdate != 'function') ||
                (typeof p.componentWillUpdate == 'function' && p.componentWillUpdate(s, q, x),
                typeof p.UNSAFE_componentWillUpdate == 'function' && p.UNSAFE_componentWillUpdate(s, q, x)),
              typeof p.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof p.componentDidUpdate != 'function' ||
                (y === e.memoizedProps && T === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != 'function' ||
                (y === e.memoizedProps && T === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = q)),
          (p.props = s),
          (p.state = q),
          (p.context = x),
          (s = E))
        : (typeof p.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && T === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && T === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return Hs(e, t, i, s, f, u);
  }
  function Hs(e, t, i, s, u, f) {
    If(e, t);
    var p = (t.flags & 128) !== 0;
    if (!s && !p) return u && Dc(t, i, !1), Yt(e, t, f);
    (s = t.stateNode), (hg.current = t);
    var y = p && typeof i.getDerivedStateFromError != 'function' ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && p ? ((t.child = ur(t, e.child, null, f)), (t.child = ur(t, null, y, f))) : Ze(e, t, y, f),
      (t.memoizedState = s.state),
      u && Dc(t, i, !0),
      t.child
    );
  }
  function Af(e) {
    var t = e.stateNode;
    t.pendingContext ? zc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zc(e, t.context, !1),
      Ns(e, t.containerInfo);
  }
  function zf(e, t, i, s, u) {
    return lr(), xs(u), (t.flags |= 256), Ze(e, t, i, s), t.child;
  }
  var Ys = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function jf(e, t, i) {
    var s = t.pendingProps,
      u = Ne.current,
      f = !1,
      p = (t.flags & 128) !== 0,
      y;
    if (
      ((y = p) || (y = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      y ? ((f = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (u |= 1),
      we(Ne, u & 1),
      e === null)
    )
      return (
        Ss(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0 ? (t.lanes = 1) : e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824), null)
          : ((p = s.children),
            (e = s.fallback),
            f
              ? ((s = t.mode),
                (f = t.child),
                (p = { mode: 'hidden', children: p }),
                (s & 1) === 0 && f !== null ? ((f.childLanes = 0), (f.pendingProps = p)) : (f = za(p, s, 0, null)),
                (e = jn(e, s, i, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = qs(i)),
                (t.memoizedState = Ys),
                e)
              : Ks(t, p))
      );
    if (((u = e.memoizedState), u !== null && ((y = u.dehydrated), y !== null))) return gg(e, t, p, s, y, u, i);
    if (f) {
      (f = s.fallback), (p = t.mode), (u = e.child), (y = u.sibling);
      var x = { mode: 'hidden', children: s.children };
      return (
        (p & 1) === 0 && t.child !== u
          ? ((s = t.child), (s.childLanes = 0), (s.pendingProps = x), (t.deletions = null))
          : ((s = vn(u, x)), (s.subtreeFlags = u.subtreeFlags & 14680064)),
        y !== null ? (f = vn(y, f)) : ((f = jn(f, p, i, null)), (f.flags |= 2)),
        (f.return = t),
        (s.return = t),
        (s.sibling = f),
        (t.child = s),
        (s = f),
        (f = t.child),
        (p = e.child.memoizedState),
        (p = p === null ? qs(i) : { baseLanes: p.baseLanes | i, cachePool: null, transitions: p.transitions }),
        (f.memoizedState = p),
        (f.childLanes = e.childLanes & ~i),
        (t.memoizedState = Ys),
        s
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (s = vn(f, { mode: 'visible', children: s.children })),
      (t.mode & 1) === 0 && (s.lanes = i),
      (s.return = t),
      (s.sibling = null),
      e !== null && ((i = t.deletions), i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function Ks(e, t) {
    return (t = za({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
  }
  function ba(e, t, i, s) {
    return (
      s !== null && xs(s),
      ur(t, e.child, null, i),
      (e = Ks(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function gg(e, t, i, s, u, f, p) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (s = Us(Error(a(422)))), ba(e, t, p, s))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((f = s.fallback),
          (u = t.mode),
          (s = za({ mode: 'visible', children: s.children }, u, 0, null)),
          (f = jn(f, u, p, null)),
          (f.flags |= 2),
          (s.return = t),
          (f.return = t),
          (s.sibling = f),
          (t.child = s),
          (t.mode & 1) !== 0 && ur(t, e.child, null, p),
          (t.child.memoizedState = qs(p)),
          (t.memoizedState = Ys),
          f);
    if ((t.mode & 1) === 0) return ba(e, t, p, null);
    if (u.data === '$!') {
      if (((s = u.nextSibling && u.nextSibling.dataset), s)) var y = s.dgst;
      return (s = y), (f = Error(a(419))), (s = Us(f, s, void 0)), ba(e, t, p, s);
    }
    if (((y = (p & e.childLanes) !== 0), it || y)) {
      if (((s = $e), s !== null)) {
        switch (p & -p) {
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
        (u = (u & (s.suspendedLanes | p)) !== 0 ? 0 : u),
          u !== 0 && u !== f.retryLane && ((f.retryLane = u), Bt(e, u), Nt(s, e, u, -1));
      }
      return cl(), (s = Us(Error(a(421)))), ba(e, t, p, s);
    }
    return u.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Og.bind(null, e)), (u._reactRetry = t), null)
      : ((e = f.treeContext),
        (dt = on(u.nextSibling)),
        (ft = t),
        (Ee = !0),
        (Ct = null),
        e !== null && ((ht[gt++] = Ut), (ht[gt++] = Wt), (ht[gt++] = Nn), (Ut = e.id), (Wt = e.overflow), (Nn = t)),
        (t = Ks(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function Df(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Ps(e.return, t, i);
  }
  function Qs(e, t, i, s, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: i, tailMode: u })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = s),
        (f.tail = i),
        (f.tailMode = u));
  }
  function Ff(e, t, i) {
    var s = t.pendingProps,
      u = s.revealOrder,
      f = s.tail;
    if ((Ze(e, t, s.children, i), (s = Ne.current), (s & 2) !== 0)) (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Df(e, i, t);
          else if (e.tag === 19) Df(e, i, t);
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
      s &= 1;
    }
    if ((we(Ne, s), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case 'forwards':
          for (i = t.child, u = null; i !== null; )
            (e = i.alternate), e !== null && ga(e) === null && (u = i), (i = i.sibling);
          (i = u),
            i === null ? ((u = t.child), (t.child = null)) : ((u = i.sibling), (i.sibling = null)),
            Qs(t, !1, u, i, f);
          break;
        case 'backwards':
          for (i = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && ga(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = i), (i = u), (u = e);
          }
          Qs(t, !0, i, null, f);
          break;
        case 'together':
          Qs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ca(e, t) {
    (t.mode & 1) === 0 && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Yt(e, t, i) {
    if ((e !== null && (t.dependencies = e.dependencies), (In |= t.lanes), (i & t.childLanes) === 0)) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, i = vn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; )
        (e = e.sibling), (i = i.sibling = vn(e, e.pendingProps)), (i.return = t);
      i.sibling = null;
    }
    return t.child;
  }
  function vg(e, t, i) {
    switch (t.tag) {
      case 3:
        Af(t), lr();
        break;
      case 5:
        Jc(t);
        break;
      case 1:
        rt(t.type) && oa(t);
        break;
      case 4:
        Ns(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          u = t.memoizedProps.value;
        we(da, s._currentValue), (s._currentValue = u);
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (we(Ne, Ne.current & 1), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
            ? jf(e, t, i)
            : (we(Ne, Ne.current & 1), (e = Yt(e, t, i)), e !== null ? e.sibling : null);
        we(Ne, Ne.current & 1);
        break;
      case 19:
        if (((s = (i & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (s) return Ff(e, t, i);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          we(Ne, Ne.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Tf(e, t, i);
    }
    return Yt(e, t, i);
  }
  var $f, Xs, Vf, Uf;
  ($f = function (e, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
  }),
    (Xs = function () {}),
    (Vf = function (e, t, i, s) {
      var u = e.memoizedProps;
      if (u !== s) {
        (e = t.stateNode), Rn(It.current);
        var f = null;
        switch (i) {
          case 'input':
            (u = Po(e, u)), (s = Po(e, s)), (f = []);
            break;
          case 'select':
            (u = U({}, u, { value: void 0 })), (s = U({}, s, { value: void 0 })), (f = []);
            break;
          case 'textarea':
            (u = No(e, u)), (s = No(e, s)), (f = []);
            break;
          default:
            typeof u.onClick != 'function' && typeof s.onClick == 'function' && (e.onclick = ra);
        }
        Lo(i, s);
        var p;
        i = null;
        for (E in u)
          if (!s.hasOwnProperty(E) && u.hasOwnProperty(E) && u[E] != null)
            if (E === 'style') {
              var y = u[E];
              for (p in y) y.hasOwnProperty(p) && (i || (i = {}), (i[p] = ''));
            } else
              E !== 'dangerouslySetInnerHTML' &&
                E !== 'children' &&
                E !== 'suppressContentEditableWarning' &&
                E !== 'suppressHydrationWarning' &&
                E !== 'autoFocus' &&
                (l.hasOwnProperty(E) ? f || (f = []) : (f = f || []).push(E, null));
        for (E in s) {
          var x = s[E];
          if (((y = u?.[E]), s.hasOwnProperty(E) && x !== y && (x != null || y != null)))
            if (E === 'style')
              if (y) {
                for (p in y) !y.hasOwnProperty(p) || (x && x.hasOwnProperty(p)) || (i || (i = {}), (i[p] = ''));
                for (p in x) x.hasOwnProperty(p) && y[p] !== x[p] && (i || (i = {}), (i[p] = x[p]));
              } else i || (f || (f = []), f.push(E, i)), (i = x);
            else
              E === 'dangerouslySetInnerHTML'
                ? ((x = x ? x.__html : void 0),
                  (y = y ? y.__html : void 0),
                  x != null && y !== x && (f = f || []).push(E, x))
                : E === 'children'
                ? (typeof x != 'string' && typeof x != 'number') || (f = f || []).push(E, '' + x)
                : E !== 'suppressContentEditableWarning' &&
                  E !== 'suppressHydrationWarning' &&
                  (l.hasOwnProperty(E)
                    ? (x != null && E === 'onScroll' && xe('scroll', e), f || y === x || (f = []))
                    : (f = f || []).push(E, x));
        }
        i && (f = f || []).push('style', i);
        var E = f;
        (t.updateQueue = E) && (t.flags |= 4);
      }
    }),
    (Uf = function (e, t, i, s) {
      i !== s && (t.flags |= 4);
    });
  function si(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var i = null; t !== null; ) t.alternate !== null && (i = t), (t = t.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = e.tail;
          for (var s = null; i !== null; ) i.alternate !== null && (s = i), (i = i.sibling);
          s === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (s.sibling = null);
      }
  }
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      s = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags & 14680064),
          (s |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes), (s |= u.subtreeFlags), (s |= u.flags), (u.return = e), (u = u.sibling);
    return (e.subtreeFlags |= s), (e.childLanes = i), t;
  }
  function yg(e, t, i) {
    var s = t.pendingProps;
    switch ((ys(t), t.tag)) {
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
        return Xe(t), null;
      case 1:
        return rt(t.type) && aa(), Xe(t), null;
      case 3:
        return (
          (s = t.stateNode),
          dr(),
          ke(nt),
          ke(Ke),
          Rs(),
          s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (ca(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ct !== null && (sl(Ct), (Ct = null)))),
          Xs(e, t),
          Xe(t),
          null
        );
      case 5:
        Os(t);
        var u = Rn(ni.current);
        if (((i = t.type), e !== null && t.stateNode != null))
          Vf(e, t, i, s, u), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(a(166));
            return Xe(t), null;
          }
          if (((e = Rn(It.current)), ca(t))) {
            (s = t.stateNode), (i = t.type);
            var f = t.memoizedProps;
            switch (((s[Tt] = t), (s[Gr] = f), (e = (t.mode & 1) !== 0), i)) {
              case 'dialog':
                xe('cancel', s), xe('close', s);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                xe('load', s);
                break;
              case 'video':
              case 'audio':
                for (u = 0; u < Kr.length; u++) xe(Kr[u], s);
                break;
              case 'source':
                xe('error', s);
                break;
              case 'img':
              case 'image':
              case 'link':
                xe('error', s), xe('load', s);
                break;
              case 'details':
                xe('toggle', s);
                break;
              case 'input':
                xu(s, f), xe('invalid', s);
                break;
              case 'select':
                (s._wrapperState = { wasMultiple: !!f.multiple }), xe('invalid', s);
                break;
              case 'textarea':
                Cu(s, f), xe('invalid', s);
            }
            Lo(i, f), (u = null);
            for (var p in f)
              if (f.hasOwnProperty(p)) {
                var y = f[p];
                p === 'children'
                  ? typeof y == 'string'
                    ? s.textContent !== y &&
                      (f.suppressHydrationWarning !== !0 && na(s.textContent, y, e), (u = ['children', y]))
                    : typeof y == 'number' &&
                      s.textContent !== '' + y &&
                      (f.suppressHydrationWarning !== !0 && na(s.textContent, y, e), (u = ['children', '' + y]))
                  : l.hasOwnProperty(p) && y != null && p === 'onScroll' && xe('scroll', s);
              }
            switch (i) {
              case 'input':
                Ii(s), bu(s, f, !0);
                break;
              case 'textarea':
                Ii(s), Eu(s);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof f.onClick == 'function' && (s.onclick = ra);
            }
            (s = u), (t.updateQueue = s), s !== null && (t.flags |= 4);
          } else {
            (p = u.nodeType === 9 ? u : u.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = _u(i)),
              e === 'http://www.w3.org/1999/xhtml'
                ? i === 'script'
                  ? ((e = p.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == 'string'
                  ? (e = p.createElement(i, { is: s.is }))
                  : ((e = p.createElement(i)),
                    i === 'select' && ((p = e), s.multiple ? (p.multiple = !0) : s.size && (p.size = s.size)))
                : (e = p.createElementNS(e, i)),
              (e[Tt] = t),
              (e[Gr] = s),
              $f(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = Ro(i, s)), i)) {
                case 'dialog':
                  xe('cancel', e), xe('close', e), (u = s);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  xe('load', e), (u = s);
                  break;
                case 'video':
                case 'audio':
                  for (u = 0; u < Kr.length; u++) xe(Kr[u], e);
                  u = s;
                  break;
                case 'source':
                  xe('error', e), (u = s);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  xe('error', e), xe('load', e), (u = s);
                  break;
                case 'details':
                  xe('toggle', e), (u = s);
                  break;
                case 'input':
                  xu(e, s), (u = Po(e, s)), xe('invalid', e);
                  break;
                case 'option':
                  u = s;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!s.multiple }),
                    (u = U({}, s, { value: void 0 })),
                    xe('invalid', e);
                  break;
                case 'textarea':
                  Cu(e, s), (u = No(e, s)), xe('invalid', e);
                  break;
                default:
                  u = s;
              }
              Lo(i, u), (y = u);
              for (f in y)
                if (y.hasOwnProperty(f)) {
                  var x = y[f];
                  f === 'style'
                    ? Lu(e, x)
                    : f === 'dangerouslySetInnerHTML'
                    ? ((x = x ? x.__html : void 0), x != null && Nu(e, x))
                    : f === 'children'
                    ? typeof x == 'string'
                      ? (i !== 'textarea' || x !== '') && Or(e, x)
                      : typeof x == 'number' && Or(e, '' + x)
                    : f !== 'suppressContentEditableWarning' &&
                      f !== 'suppressHydrationWarning' &&
                      f !== 'autoFocus' &&
                      (l.hasOwnProperty(f)
                        ? x != null && f === 'onScroll' && xe('scroll', e)
                        : x != null && V(e, f, x, p));
                }
              switch (i) {
                case 'input':
                  Ii(e), bu(e, s, !1);
                  break;
                case 'textarea':
                  Ii(e), Eu(e);
                  break;
                case 'option':
                  s.value != null && e.setAttribute('value', '' + pe(s.value));
                  break;
                case 'select':
                  (e.multiple = !!s.multiple),
                    (f = s.value),
                    f != null
                      ? qn(e, !!s.multiple, f, !1)
                      : s.defaultValue != null && qn(e, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == 'function' && (e.onclick = ra);
              }
              switch (i) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  s = !!s.autoFocus;
                  break e;
                case 'img':
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Xe(t), null;
      case 6:
        if (e && t.stateNode != null) Uf(e, t, e.memoizedProps, s);
        else {
          if (typeof s != 'string' && t.stateNode === null) throw Error(a(166));
          if (((i = Rn(ni.current)), Rn(It.current), ca(t))) {
            if (
              ((s = t.stateNode), (i = t.memoizedProps), (s[Tt] = t), (f = s.nodeValue !== i) && ((e = ft), e !== null))
            )
              switch (e.tag) {
                case 3:
                  na(s.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && na(s.nodeValue, i, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else (s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s)), (s[Tt] = t), (t.stateNode = s);
        }
        return Xe(t), null;
      case 13:
        if (
          (ke(Ne),
          (s = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ee && dt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Bc(), lr(), (t.flags |= 98560), (f = !1);
          else if (((f = ca(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(a(318));
              if (((f = t.memoizedState), (f = f !== null ? f.dehydrated : null), !f)) throw Error(a(317));
              f[Tt] = t;
            } else lr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Xe(t), (f = !1);
          } else Ct !== null && (sl(Ct), (Ct = null)), (f = !0);
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = i), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 && (e === null || (Ne.current & 1) !== 0 ? je === 0 && (je = 3) : cl())),
            t.updateQueue !== null && (t.flags |= 4),
            Xe(t),
            null);
      case 4:
        return dr(), Xs(e, t), e === null && Qr(t.stateNode.containerInfo), Xe(t), null;
      case 10:
        return Cs(t.type._context), Xe(t), null;
      case 17:
        return rt(t.type) && aa(), Xe(t), null;
      case 19:
        if ((ke(Ne), (f = t.memoizedState), f === null)) return Xe(t), null;
        if (((s = (t.flags & 128) !== 0), (p = f.rendering), p === null))
          if (s) si(f, !1);
          else {
            if (je !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((p = ga(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      si(f, !1),
                      s = p.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = i,
                      i = t.child;
                    i !== null;

                  )
                    (f = i),
                      (e = s),
                      (f.flags &= 14680066),
                      (p = f.alternate),
                      p === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = p.childLanes),
                          (f.lanes = p.lanes),
                          (f.child = p.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = p.memoizedProps),
                          (f.memoizedState = p.memoizedState),
                          (f.updateQueue = p.updateQueue),
                          (f.type = p.type),
                          (e = p.dependencies),
                          (f.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (i = i.sibling);
                  return we(Ne, (Ne.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            f.tail !== null && Te() > gr && ((t.flags |= 128), (s = !0), si(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = ga(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (i = e.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                si(f, !0),
                f.tail === null && f.tailMode === 'hidden' && !p.alternate && !Ee)
              )
                return Xe(t), null;
            } else
              2 * Te() - f.renderingStartTime > gr &&
                i !== 1073741824 &&
                ((t.flags |= 128), (s = !0), si(f, !1), (t.lanes = 4194304));
          f.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((i = f.last), i !== null ? (i.sibling = p) : (t.child = p), (f.last = p));
        }
        return f.tail !== null
          ? ((t = f.tail),
            (f.rendering = t),
            (f.tail = t.sibling),
            (f.renderingStartTime = Te()),
            (t.sibling = null),
            (i = Ne.current),
            we(Ne, s ? (i & 1) | 2 : i & 1),
            t)
          : (Xe(t), null);
      case 22:
      case 23:
        return (
          ul(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && (t.mode & 1) !== 0 ? (mt & 1073741824) !== 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function wg(e, t) {
    switch ((ys(t), t.tag)) {
      case 1:
        return rt(t.type) && aa(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          dr(),
          ke(nt),
          ke(Ke),
          Rs(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Os(t), null;
      case 13:
        if ((ke(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(a(340));
          lr();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ke(Ne), null;
      case 4:
        return dr(), null;
      case 10:
        return Cs(t.type._context), null;
      case 22:
      case 23:
        return ul(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Pa = !1,
    Ge = !1,
    Sg = typeof WeakSet == 'function' ? WeakSet : Set,
    H = null;
  function pr(e, t) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == 'function')
        try {
          i(null);
        } catch (s) {
          Le(e, t, s);
        }
      else i.current = null;
  }
  function Gs(e, t, i) {
    try {
      i();
    } catch (s) {
      Le(e, t, s);
    }
  }
  var Wf = !1;
  function xg(e, t) {
    if (((us = Hi), (e = Sc()), ts(e))) {
      if ('selectionStart' in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var s = i.getSelection && i.getSelection();
          if (s && s.rangeCount !== 0) {
            i = s.anchorNode;
            var u = s.anchorOffset,
              f = s.focusNode;
            s = s.focusOffset;
            try {
              i.nodeType, f.nodeType;
            } catch {
              i = null;
              break e;
            }
            var p = 0,
              y = -1,
              x = -1,
              E = 0,
              M = 0,
              z = e,
              T = null;
            t: for (;;) {
              for (
                var W;
                z !== i || (u !== 0 && z.nodeType !== 3) || (y = p + u),
                  z !== f || (s !== 0 && z.nodeType !== 3) || (x = p + s),
                  z.nodeType === 3 && (p += z.nodeValue.length),
                  (W = z.firstChild) !== null;

              )
                (T = z), (z = W);
              for (;;) {
                if (z === e) break t;
                if ((T === i && ++E === u && (y = p), T === f && ++M === s && (x = p), (W = z.nextSibling) !== null))
                  break;
                (z = T), (T = z.parentNode);
              }
              z = W;
            }
            i = y === -1 || x === -1 ? null : { start: y, end: x };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (cs = { focusedElem: e, selectionRange: i }, Hi = !1, H = t; H !== null; )
      if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (H = e);
      else
        for (; H !== null; ) {
          t = H;
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
                      Ie = q.memoizedState,
                      C = t.stateNode,
                      k = C.getSnapshotBeforeUpdate(t.elementType === t.type ? K : Pt(t.type, K), Ie);
                    C.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var P = t.stateNode.containerInfo;
                  P.nodeType === 1
                    ? (P.textContent = '')
                    : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (D) {
            Le(t, t.return, D);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (H = e);
            break;
          }
          H = t.return;
        }
    return (q = Wf), (Wf = !1), q;
  }
  function li(e, t, i) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var u = (s = s.next);
      do {
        if ((u.tag & e) === e) {
          var f = u.destroy;
          (u.destroy = void 0), f !== void 0 && Gs(t, i, f);
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function Ea(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var i = (t = t.next);
      do {
        if ((i.tag & e) === e) {
          var s = i.create;
          i.destroy = s();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function Js(e) {
    var t = e.ref;
    if (t !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Bf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Bf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode), t !== null && (delete t[Tt], delete t[Gr], delete t[ps], delete t[rg], delete t[ig])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Hf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Yf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Zs(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, t)
            : i.insertBefore(e, t)
          : (i.nodeType === 8 ? ((t = i.parentNode), t.insertBefore(e, i)) : ((t = i), t.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = ra));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Zs(e, t, i), e = e.sibling; e !== null; ) Zs(e, t, i), (e = e.sibling);
  }
  function el(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (s !== 4 && ((e = e.child), e !== null))
      for (el(e, t, i), e = e.sibling; e !== null; ) el(e, t, i), (e = e.sibling);
  }
  var Be = null,
    Et = !1;
  function dn(e, t, i) {
    for (i = i.child; i !== null; ) qf(e, t, i), (i = i.sibling);
  }
  function qf(e, t, i) {
    if (Rt && typeof Rt.onCommitFiberUnmount == 'function')
      try {
        Rt.onCommitFiberUnmount(Fi, i);
      } catch {}
    switch (i.tag) {
      case 5:
        Ge || pr(i, t);
      case 6:
        var s = Be,
          u = Et;
        (Be = null),
          dn(e, t, i),
          (Be = s),
          (Et = u),
          Be !== null &&
            (Et
              ? ((e = Be), (i = i.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
              : Be.removeChild(i.stateNode));
        break;
      case 18:
        Be !== null &&
          (Et
            ? ((e = Be),
              (i = i.stateNode),
              e.nodeType === 8 ? ms(e.parentNode, i) : e.nodeType === 1 && ms(e, i),
              $r(e))
            : ms(Be, i.stateNode));
        break;
      case 4:
        (s = Be), (u = Et), (Be = i.stateNode.containerInfo), (Et = !0), dn(e, t, i), (Be = s), (Et = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && ((s = i.updateQueue), s !== null && ((s = s.lastEffect), s !== null))) {
          u = s = s.next;
          do {
            var f = u,
              p = f.destroy;
            (f = f.tag), p !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Gs(i, t, p), (u = u.next);
          } while (u !== s);
        }
        dn(e, t, i);
        break;
      case 1:
        if (!Ge && (pr(i, t), (s = i.stateNode), typeof s.componentWillUnmount == 'function'))
          try {
            (s.props = i.memoizedProps), (s.state = i.memoizedState), s.componentWillUnmount();
          } catch (y) {
            Le(i, t, y);
          }
        dn(e, t, i);
        break;
      case 21:
        dn(e, t, i);
        break;
      case 22:
        i.mode & 1 ? ((Ge = (s = Ge) || i.memoizedState !== null), dn(e, t, i), (Ge = s)) : dn(e, t, i);
        break;
      default:
        dn(e, t, i);
    }
  }
  function Kf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new Sg()),
        t.forEach(function (s) {
          var u = Lg.bind(null, e, s);
          i.has(s) || (i.add(s), s.then(u, u));
        });
    }
  }
  function _t(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var s = 0; s < i.length; s++) {
        var u = i[s];
        try {
          var f = e,
            p = t,
            y = p;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 5:
                (Be = y.stateNode), (Et = !1);
                break e;
              case 3:
                (Be = y.stateNode.containerInfo), (Et = !0);
                break e;
              case 4:
                (Be = y.stateNode.containerInfo), (Et = !0);
                break e;
            }
            y = y.return;
          }
          if (Be === null) throw Error(a(160));
          qf(f, p, u), (Be = null), (Et = !1);
          var x = u.alternate;
          x !== null && (x.return = null), (u.return = null);
        } catch (E) {
          Le(u, t, E);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qf(t, e), (t = t.sibling);
  }
  function Qf(e, t) {
    var i = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((_t(t, e), At(e), s & 4)) {
          try {
            li(3, e, e.return), Ea(3, e);
          } catch (K) {
            Le(e, e.return, K);
          }
          try {
            li(5, e, e.return);
          } catch (K) {
            Le(e, e.return, K);
          }
        }
        break;
      case 1:
        _t(t, e), At(e), s & 512 && i !== null && pr(i, i.return);
        break;
      case 5:
        if ((_t(t, e), At(e), s & 512 && i !== null && pr(i, i.return), e.flags & 32)) {
          var u = e.stateNode;
          try {
            Or(u, '');
          } catch (K) {
            Le(e, e.return, K);
          }
        }
        if (s & 4 && ((u = e.stateNode), u != null)) {
          var f = e.memoizedProps,
            p = i !== null ? i.memoizedProps : f,
            y = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              y === 'input' && f.type === 'radio' && f.name != null && ku(u, f), Ro(y, p);
              var E = Ro(y, f);
              for (p = 0; p < x.length; p += 2) {
                var M = x[p],
                  z = x[p + 1];
                M === 'style'
                  ? Lu(u, z)
                  : M === 'dangerouslySetInnerHTML'
                  ? Nu(u, z)
                  : M === 'children'
                  ? Or(u, z)
                  : V(u, M, z, E);
              }
              switch (y) {
                case 'input':
                  Eo(u, f);
                  break;
                case 'textarea':
                  Pu(u, f);
                  break;
                case 'select':
                  var T = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!f.multiple;
                  var W = f.value;
                  W != null
                    ? qn(u, !!f.multiple, W, !1)
                    : T !== !!f.multiple &&
                      (f.defaultValue != null
                        ? qn(u, !!f.multiple, f.defaultValue, !0)
                        : qn(u, !!f.multiple, f.multiple ? [] : '', !1));
              }
              u[Gr] = f;
            } catch (K) {
              Le(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((_t(t, e), At(e), s & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (u = e.stateNode), (f = e.memoizedProps);
          try {
            u.nodeValue = f;
          } catch (K) {
            Le(e, e.return, K);
          }
        }
        break;
      case 3:
        if ((_t(t, e), At(e), s & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            $r(t.containerInfo);
          } catch (K) {
            Le(e, e.return, K);
          }
        break;
      case 4:
        _t(t, e), At(e);
        break;
      case 13:
        _t(t, e),
          At(e),
          (u = e.child),
          u.flags & 8192 &&
            ((f = u.memoizedState !== null),
            (u.stateNode.isHidden = f),
            !f || (u.alternate !== null && u.alternate.memoizedState !== null) || (rl = Te())),
          s & 4 && Kf(e);
        break;
      case 22:
        if (
          ((M = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((Ge = (E = Ge) || M), _t(t, e), (Ge = E)) : _t(t, e),
          At(e),
          s & 8192)
        ) {
          if (((E = e.memoizedState !== null), (e.stateNode.isHidden = E) && !M && (e.mode & 1) !== 0))
            for (H = e, M = e.child; M !== null; ) {
              for (z = H = M; H !== null; ) {
                switch (((T = H), (W = T.child), T.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    li(4, T, T.return);
                    break;
                  case 1:
                    pr(T, T.return);
                    var q = T.stateNode;
                    if (typeof q.componentWillUnmount == 'function') {
                      (s = T), (i = T.return);
                      try {
                        (t = s), (q.props = t.memoizedProps), (q.state = t.memoizedState), q.componentWillUnmount();
                      } catch (K) {
                        Le(s, i, K);
                      }
                    }
                    break;
                  case 5:
                    pr(T, T.return);
                    break;
                  case 22:
                    if (T.memoizedState !== null) {
                      Jf(z);
                      continue;
                    }
                }
                W !== null ? ((W.return = T), (H = W)) : Jf(z);
              }
              M = M.sibling;
            }
          e: for (M = null, z = e; ; ) {
            if (z.tag === 5) {
              if (M === null) {
                M = z;
                try {
                  (u = z.stateNode),
                    E
                      ? ((f = u.style),
                        typeof f.setProperty == 'function'
                          ? f.setProperty('display', 'none', 'important')
                          : (f.display = 'none'))
                      : ((y = z.stateNode),
                        (x = z.memoizedProps.style),
                        (p = x != null && x.hasOwnProperty('display') ? x.display : null),
                        (y.style.display = Ou('display', p)));
                } catch (K) {
                  Le(e, e.return, K);
                }
              }
            } else if (z.tag === 6) {
              if (M === null)
                try {
                  z.stateNode.nodeValue = E ? '' : z.memoizedProps;
                } catch (K) {
                  Le(e, e.return, K);
                }
            } else if (((z.tag !== 22 && z.tag !== 23) || z.memoizedState === null || z === e) && z.child !== null) {
              (z.child.return = z), (z = z.child);
              continue;
            }
            if (z === e) break e;
            for (; z.sibling === null; ) {
              if (z.return === null || z.return === e) break e;
              M === z && (M = null), (z = z.return);
            }
            M === z && (M = null), (z.sibling.return = z.return), (z = z.sibling);
          }
        }
        break;
      case 19:
        _t(t, e), At(e), s & 4 && Kf(e);
        break;
      case 21:
        break;
      default:
        _t(t, e), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (Hf(i)) {
              var s = i;
              break e;
            }
            i = i.return;
          }
          throw Error(a(160));
        }
        switch (s.tag) {
          case 5:
            var u = s.stateNode;
            s.flags & 32 && (Or(u, ''), (s.flags &= -33));
            var f = Yf(e);
            el(e, f, u);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo,
              y = Yf(e);
            Zs(e, y, p);
            break;
          default:
            throw Error(a(161));
        }
      } catch (x) {
        Le(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function kg(e, t, i) {
    (H = e), Xf(e);
  }
  function Xf(e, t, i) {
    for (var s = (e.mode & 1) !== 0; H !== null; ) {
      var u = H,
        f = u.child;
      if (u.tag === 22 && s) {
        var p = u.memoizedState !== null || Pa;
        if (!p) {
          var y = u.alternate,
            x = (y !== null && y.memoizedState !== null) || Ge;
          y = Pa;
          var E = Ge;
          if (((Pa = p), (Ge = x) && !E))
            for (H = u; H !== null; )
              (p = H),
                (x = p.child),
                p.tag === 22 && p.memoizedState !== null ? Zf(u) : x !== null ? ((x.return = p), (H = x)) : Zf(u);
          for (; f !== null; ) (H = f), Xf(f), (f = f.sibling);
          (H = u), (Pa = y), (Ge = E);
        }
        Gf(e);
      } else (u.subtreeFlags & 8772) !== 0 && f !== null ? ((f.return = u), (H = f)) : Gf(e);
    }
  }
  function Gf(e) {
    for (; H !== null; ) {
      var t = H;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ge || Ea(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !Ge)
                  if (i === null) s.componentDidMount();
                  else {
                    var u = t.elementType === t.type ? i.memoizedProps : Pt(t.type, i.memoizedProps);
                    s.componentDidUpdate(u, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var f = t.updateQueue;
                f !== null && Gc(t, f, s);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((i = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        i = t.child.stateNode;
                        break;
                      case 1:
                        i = t.child.stateNode;
                    }
                  Gc(t, p, i);
                }
                break;
              case 5:
                var y = t.stateNode;
                if (i === null && t.flags & 4) {
                  i = y;
                  var x = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      x.autoFocus && i.focus();
                      break;
                    case 'img':
                      x.src && (i.src = x.src);
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
                  var E = t.alternate;
                  if (E !== null) {
                    var M = E.memoizedState;
                    if (M !== null) {
                      var z = M.dehydrated;
                      z !== null && $r(z);
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
                throw Error(a(163));
            }
          Ge || (t.flags & 512 && Js(t));
        } catch (T) {
          Le(t, t.return, T);
        }
      }
      if (t === e) {
        H = null;
        break;
      }
      if (((i = t.sibling), i !== null)) {
        (i.return = t.return), (H = i);
        break;
      }
      H = t.return;
    }
  }
  function Jf(e) {
    for (; H !== null; ) {
      var t = H;
      if (t === e) {
        H = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        (i.return = t.return), (H = i);
        break;
      }
      H = t.return;
    }
  }
  function Zf(e) {
    for (; H !== null; ) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Ea(4, t);
            } catch (x) {
              Le(t, i, x);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == 'function') {
              var u = t.return;
              try {
                s.componentDidMount();
              } catch (x) {
                Le(t, u, x);
              }
            }
            var f = t.return;
            try {
              Js(t);
            } catch (x) {
              Le(t, f, x);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Js(t);
            } catch (x) {
              Le(t, p, x);
            }
        }
      } catch (x) {
        Le(t, t.return, x);
      }
      if (t === e) {
        H = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        (y.return = t.return), (H = y);
        break;
      }
      H = t.return;
    }
  }
  var bg = Math.ceil,
    _a = $.ReactCurrentDispatcher,
    tl = $.ReactCurrentOwner,
    wt = $.ReactCurrentBatchConfig,
    ue = 0,
    $e = null,
    Me = null,
    He = 0,
    mt = 0,
    hr = sn(0),
    je = 0,
    ui = null,
    In = 0,
    Na = 0,
    nl = 0,
    ci = null,
    at = null,
    rl = 0,
    gr = 1 / 0,
    qt = null,
    Oa = !1,
    il = null,
    mn = null,
    La = !1,
    pn = null,
    Ra = 0,
    fi = 0,
    al = null,
    Ta = -1,
    Ia = 0;
  function et() {
    return (ue & 6) !== 0 ? Te() : Ta !== -1 ? Ta : (Ta = Te());
  }
  function hn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ue & 2) !== 0 && He !== 0
      ? He & -He
      : og.transition !== null
      ? (Ia === 0 && (Ia = Hu()), Ia)
      : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ec(e.type))), e);
  }
  function Nt(e, t, i, s) {
    if (50 < fi) throw ((fi = 0), (al = null), Error(a(185)));
    Ar(e, i, s),
      ((ue & 2) === 0 || e !== $e) &&
        (e === $e && ((ue & 2) === 0 && (Na |= i), je === 4 && gn(e, He)),
        ot(e, s),
        i === 1 && ue === 0 && (t.mode & 1) === 0 && ((gr = Te() + 500), sa && un()));
  }
  function ot(e, t) {
    var i = e.callbackNode;
    oh(e, t);
    var s = Ui(e, e === $e ? He : 0);
    if (s === 0) i !== null && Uu(i), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((i != null && Uu(i), t === 1))
        e.tag === 0 ? ag(td.bind(null, e)) : Fc(td.bind(null, e)),
          tg(function () {
            (ue & 6) === 0 && un();
          }),
          (i = null);
      else {
        switch (Yu(s)) {
          case 1:
            i = Do;
            break;
          case 4:
            i = Wu;
            break;
          case 16:
            i = Di;
            break;
          case 536870912:
            i = Bu;
            break;
          default:
            i = Di;
        }
        i = ud(i, ed.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = i);
    }
  }
  function ed(e, t) {
    if (((Ta = -1), (Ia = 0), (ue & 6) !== 0)) throw Error(a(327));
    var i = e.callbackNode;
    if (vr() && e.callbackNode !== i) return null;
    var s = Ui(e, e === $e ? He : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ma(e, s);
    else {
      t = s;
      var u = ue;
      ue |= 2;
      var f = rd();
      ($e !== e || He !== t) && ((qt = null), (gr = Te() + 500), An(e, t));
      do
        try {
          Eg();
          break;
        } catch (y) {
          nd(e, y);
        }
      while (!0);
      bs(), (_a.current = f), (ue = u), Me !== null ? (t = 0) : (($e = null), (He = 0), (t = je));
    }
    if (t !== 0) {
      if ((t === 2 && ((u = Fo(e)), u !== 0 && ((s = u), (t = ol(e, u)))), t === 1))
        throw ((i = ui), An(e, 0), gn(e, s), ot(e, Te()), i);
      if (t === 6) gn(e, s);
      else {
        if (
          ((u = e.current.alternate),
          (s & 30) === 0 &&
            !Cg(u) &&
            ((t = Ma(e, s)), t === 2 && ((f = Fo(e)), f !== 0 && ((s = f), (t = ol(e, f)))), t === 1))
        )
          throw ((i = ui), An(e, 0), gn(e, s), ot(e, Te()), i);
        switch (((e.finishedWork = u), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            zn(e, at, qt);
            break;
          case 3:
            if ((gn(e, s), (s & 130023424) === s && ((t = rl + 500 - Te()), 10 < t))) {
              if (Ui(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & s) !== s)) {
                et(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = ds(zn.bind(null, e, at, qt), t);
              break;
            }
            zn(e, at, qt);
            break;
          case 4:
            if ((gn(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, u = -1; 0 < s; ) {
              var p = 31 - kt(s);
              (f = 1 << p), (p = t[p]), p > u && (u = p), (s &= ~f);
            }
            if (
              ((s = u),
              (s = Te() - s),
              (s =
                (120 > s
                  ? 120
                  : 480 > s
                  ? 480
                  : 1080 > s
                  ? 1080
                  : 1920 > s
                  ? 1920
                  : 3e3 > s
                  ? 3e3
                  : 4320 > s
                  ? 4320
                  : 1960 * bg(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = ds(zn.bind(null, e, at, qt), s);
              break;
            }
            zn(e, at, qt);
            break;
          case 5:
            zn(e, at, qt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return ot(e, Te()), e.callbackNode === i ? ed.bind(null, e) : null;
  }
  function ol(e, t) {
    var i = ci;
    return (
      e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256),
      (e = Ma(e, t)),
      e !== 2 && ((t = at), (at = i), t !== null && sl(t)),
      e
    );
  }
  function sl(e) {
    at === null ? (at = e) : at.push.apply(at, e);
  }
  function Cg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var s = 0; s < i.length; s++) {
            var u = i[s],
              f = u.getSnapshot;
            u = u.value;
            try {
              if (!bt(f(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null)) (i.return = t), (t = i);
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
    for (t &= ~nl, t &= ~Na, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - kt(t),
        s = 1 << i;
      (e[i] = -1), (t &= ~s);
    }
  }
  function td(e) {
    if ((ue & 6) !== 0) throw Error(a(327));
    vr();
    var t = Ui(e, 0);
    if ((t & 1) === 0) return ot(e, Te()), null;
    var i = Ma(e, t);
    if (e.tag !== 0 && i === 2) {
      var s = Fo(e);
      s !== 0 && ((t = s), (i = ol(e, s)));
    }
    if (i === 1) throw ((i = ui), An(e, 0), gn(e, t), ot(e, Te()), i);
    if (i === 6) throw Error(a(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), zn(e, at, qt), ot(e, Te()), null;
  }
  function ll(e, t) {
    var i = ue;
    ue |= 1;
    try {
      return e(t);
    } finally {
      (ue = i), ue === 0 && ((gr = Te() + 500), sa && un());
    }
  }
  function Mn(e) {
    pn !== null && pn.tag === 0 && (ue & 6) === 0 && vr();
    var t = ue;
    ue |= 1;
    var i = wt.transition,
      s = he;
    try {
      if (((wt.transition = null), (he = 1), e)) return e();
    } finally {
      (he = s), (wt.transition = i), (ue = t), (ue & 6) === 0 && un();
    }
  }
  function ul() {
    (mt = hr.current), ke(hr);
  }
  function An(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), eg(i)), Me !== null))
      for (i = Me.return; i !== null; ) {
        var s = i;
        switch ((ys(s), s.tag)) {
          case 1:
            (s = s.type.childContextTypes), s != null && aa();
            break;
          case 3:
            dr(), ke(nt), ke(Ke), Rs();
            break;
          case 5:
            Os(s);
            break;
          case 4:
            dr();
            break;
          case 13:
            ke(Ne);
            break;
          case 19:
            ke(Ne);
            break;
          case 10:
            Cs(s.type._context);
            break;
          case 22:
          case 23:
            ul();
        }
        i = i.return;
      }
    if (
      (($e = e),
      (Me = e = vn(e.current, null)),
      (He = mt = t),
      (je = 0),
      (ui = null),
      (nl = Na = In = 0),
      (at = ci = null),
      Ln !== null)
    ) {
      for (t = 0; t < Ln.length; t++)
        if (((i = Ln[t]), (s = i.interleaved), s !== null)) {
          i.interleaved = null;
          var u = s.next,
            f = i.pending;
          if (f !== null) {
            var p = f.next;
            (f.next = u), (s.next = p);
          }
          i.pending = s;
        }
      Ln = null;
    }
    return e;
  }
  function nd(e, t) {
    do {
      var i = Me;
      try {
        if ((bs(), (va.current = xa), ya)) {
          for (var s = Oe.memoizedState; s !== null; ) {
            var u = s.queue;
            u !== null && (u.pending = null), (s = s.next);
          }
          ya = !1;
        }
        if (
          ((Tn = 0), (Fe = ze = Oe = null), (ri = !1), (ii = 0), (tl.current = null), i === null || i.return === null)
        ) {
          (je = 1), (ui = t), (Me = null);
          break;
        }
        e: {
          var f = e,
            p = i.return,
            y = i,
            x = t;
          if (((t = He), (y.flags |= 32768), x !== null && typeof x == 'object' && typeof x.then == 'function')) {
            var E = x,
              M = y,
              z = M.tag;
            if ((M.mode & 1) === 0 && (z === 0 || z === 11 || z === 15)) {
              var T = M.alternate;
              T
                ? ((M.updateQueue = T.updateQueue), (M.memoizedState = T.memoizedState), (M.lanes = T.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null));
            }
            var W = _f(p);
            if (W !== null) {
              (W.flags &= -257), Nf(W, p, y, f, t), W.mode & 1 && Ef(f, E, t), (t = W), (x = E);
              var q = t.updateQueue;
              if (q === null) {
                var K = new Set();
                K.add(x), (t.updateQueue = K);
              } else q.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ef(f, E, t), cl();
                break e;
              }
              x = Error(a(426));
            }
          } else if (Ee && y.mode & 1) {
            var Ie = _f(p);
            if (Ie !== null) {
              (Ie.flags & 65536) === 0 && (Ie.flags |= 256), Nf(Ie, p, y, f, t), xs(mr(x, y));
              break e;
            }
          }
          (f = x = mr(x, y)), je !== 4 && (je = 2), ci === null ? (ci = [f]) : ci.push(f), (f = p);
          do {
            switch (f.tag) {
              case 3:
                (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                var C = Cf(f, x, t);
                Xc(f, C);
                break e;
              case 1:
                y = x;
                var k = f.type,
                  P = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == 'function' ||
                    (P !== null && typeof P.componentDidCatch == 'function' && (mn === null || !mn.has(P))))
                ) {
                  (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                  var D = Pf(f, y, t);
                  Xc(f, D);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        ad(i);
      } catch (Q) {
        (t = Q), Me === i && i !== null && (Me = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rd() {
    var e = _a.current;
    return (_a.current = xa), e === null ? xa : e;
  }
  function cl() {
    (je === 0 || je === 3 || je === 2) && (je = 4),
      $e === null || ((In & 268435455) === 0 && (Na & 268435455) === 0) || gn($e, He);
  }
  function Ma(e, t) {
    var i = ue;
    ue |= 2;
    var s = rd();
    ($e !== e || He !== t) && ((qt = null), An(e, t));
    do
      try {
        Pg();
        break;
      } catch (u) {
        nd(e, u);
      }
    while (!0);
    if ((bs(), (ue = i), (_a.current = s), Me !== null)) throw Error(a(261));
    return ($e = null), (He = 0), je;
  }
  function Pg() {
    for (; Me !== null; ) id(Me);
  }
  function Eg() {
    for (; Me !== null && !Gp(); ) id(Me);
  }
  function id(e) {
    var t = ld(e.alternate, e, mt);
    (e.memoizedProps = e.pendingProps), t === null ? ad(e) : (Me = t), (tl.current = null);
  }
  function ad(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((i = yg(i, t, mt)), i !== null)) {
          Me = i;
          return;
        }
      } else {
        if (((i = wg(i, t)), i !== null)) {
          (i.flags &= 32767), (Me = i);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (je = 6), (Me = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function zn(e, t, i) {
    var s = he,
      u = wt.transition;
    try {
      (wt.transition = null), (he = 1), _g(e, t, i, s);
    } finally {
      (wt.transition = u), (he = s);
    }
    return null;
  }
  function _g(e, t, i, s) {
    do vr();
    while (pn !== null);
    if ((ue & 6) !== 0) throw Error(a(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var f = i.lanes | i.childLanes;
    if (
      (sh(e, f),
      e === $e && ((Me = $e = null), (He = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        La ||
        ((La = !0),
        ud(Di, function () {
          return vr(), null;
        })),
      (f = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || f)
    ) {
      (f = wt.transition), (wt.transition = null);
      var p = he;
      he = 1;
      var y = ue;
      (ue |= 4),
        (tl.current = null),
        xg(e, i),
        Qf(i, e),
        qh(cs),
        (Hi = !!us),
        (cs = us = null),
        (e.current = i),
        kg(i),
        Jp(),
        (ue = y),
        (he = p),
        (wt.transition = f);
    } else e.current = i;
    if (
      (La && ((La = !1), (pn = e), (Ra = u)),
      (f = e.pendingLanes),
      f === 0 && (mn = null),
      th(i.stateNode),
      ot(e, Te()),
      t !== null)
    )
      for (s = e.onRecoverableError, i = 0; i < t.length; i++)
        (u = t[i]), s(u.value, { componentStack: u.stack, digest: u.digest });
    if (Oa) throw ((Oa = !1), (e = il), (il = null), e);
    return (
      (Ra & 1) !== 0 && e.tag !== 0 && vr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === al ? fi++ : ((fi = 0), (al = e))) : (fi = 0),
      un(),
      null
    );
  }
  function vr() {
    if (pn !== null) {
      var e = Yu(Ra),
        t = wt.transition,
        i = he;
      try {
        if (((wt.transition = null), (he = 16 > e ? 16 : e), pn === null)) var s = !1;
        else {
          if (((e = pn), (pn = null), (Ra = 0), (ue & 6) !== 0)) throw Error(a(331));
          var u = ue;
          for (ue |= 4, H = e.current; H !== null; ) {
            var f = H,
              p = f.child;
            if ((H.flags & 16) !== 0) {
              var y = f.deletions;
              if (y !== null) {
                for (var x = 0; x < y.length; x++) {
                  var E = y[x];
                  for (H = E; H !== null; ) {
                    var M = H;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        li(8, M, f);
                    }
                    var z = M.child;
                    if (z !== null) (z.return = M), (H = z);
                    else
                      for (; H !== null; ) {
                        M = H;
                        var T = M.sibling,
                          W = M.return;
                        if ((Bf(M), M === E)) {
                          H = null;
                          break;
                        }
                        if (T !== null) {
                          (T.return = W), (H = T);
                          break;
                        }
                        H = W;
                      }
                  }
                }
                var q = f.alternate;
                if (q !== null) {
                  var K = q.child;
                  if (K !== null) {
                    q.child = null;
                    do {
                      var Ie = K.sibling;
                      (K.sibling = null), (K = Ie);
                    } while (K !== null);
                  }
                }
                H = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && p !== null) (p.return = f), (H = p);
            else
              e: for (; H !== null; ) {
                if (((f = H), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      li(9, f, f.return);
                  }
                var C = f.sibling;
                if (C !== null) {
                  (C.return = f.return), (H = C);
                  break e;
                }
                H = f.return;
              }
          }
          var k = e.current;
          for (H = k; H !== null; ) {
            p = H;
            var P = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && P !== null) (P.return = p), (H = P);
            else
              e: for (p = k; H !== null; ) {
                if (((y = H), (y.flags & 2048) !== 0))
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ea(9, y);
                    }
                  } catch (Q) {
                    Le(y, y.return, Q);
                  }
                if (y === p) {
                  H = null;
                  break e;
                }
                var D = y.sibling;
                if (D !== null) {
                  (D.return = y.return), (H = D);
                  break e;
                }
                H = y.return;
              }
          }
          if (((ue = u), un(), Rt && typeof Rt.onPostCommitFiberRoot == 'function'))
            try {
              Rt.onPostCommitFiberRoot(Fi, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        (he = i), (wt.transition = t);
      }
    }
    return !1;
  }
  function od(e, t, i) {
    (t = mr(i, t)), (t = Cf(e, t, 1)), (e = fn(e, t, 1)), (t = et()), e !== null && (Ar(e, 1, t), ot(e, t));
  }
  function Le(e, t, i) {
    if (e.tag === 3) od(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          od(t, e, i);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof s.componentDidCatch == 'function' && (mn === null || !mn.has(s)))
          ) {
            (e = mr(i, e)), (e = Pf(t, e, 1)), (t = fn(t, e, 1)), (e = et()), t !== null && (Ar(t, 1, e), ot(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ng(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (t = et()),
      (e.pingedLanes |= e.suspendedLanes & i),
      $e === e &&
        (He & i) === i &&
        (je === 4 || (je === 3 && (He & 130023424) === He && 500 > Te() - rl) ? An(e, 0) : (nl |= i)),
      ot(e, t);
  }
  function sd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? (t = 1) : ((t = Vi), (Vi <<= 1), (Vi & 130023424) === 0 && (Vi = 4194304)));
    var i = et();
    (e = Bt(e, t)), e !== null && (Ar(e, t, i), ot(e, i));
  }
  function Og(e) {
    var t = e.memoizedState,
      i = 0;
    t !== null && (i = t.retryLane), sd(e, i);
  }
  function Lg(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    s !== null && s.delete(t), sd(e, i);
  }
  var ld;
  ld = function (e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) it = !0;
      else {
        if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return (it = !1), vg(e, t, i);
        it = (e.flags & 131072) !== 0;
      }
    else (it = !1), Ee && (t.flags & 1048576) !== 0 && $c(t, ua, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        Ca(e, t), (e = t.pendingProps);
        var u = ar(t, Ke.current);
        fr(t, i), (u = Ms(null, t, s, e, u, i));
        var f = As();
        return (
          (t.flags |= 1),
          typeof u == 'object' && u !== null && typeof u.render == 'function' && u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(s) ? ((f = !0), oa(t)) : (f = !1),
              (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
              _s(t),
              (u.updater = ka),
              (t.stateNode = u),
              (u._reactInternals = t),
              Vs(t, s, e, i),
              (t = Hs(null, t, s, !0, f, i)))
            : ((t.tag = 0), Ee && f && vs(t), Ze(null, t, u, i), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (Ca(e, t),
            (e = t.pendingProps),
            (u = s._init),
            (s = u(s._payload)),
            (t.type = s),
            (u = t.tag = Tg(s)),
            (e = Pt(s, e)),
            u)
          ) {
            case 0:
              t = Bs(null, t, s, e, i);
              break e;
            case 1:
              t = Mf(null, t, s, e, i);
              break e;
            case 11:
              t = Of(null, t, s, e, i);
              break e;
            case 14:
              t = Lf(null, t, s, Pt(s.type, e), i);
              break e;
          }
          throw Error(a(306, s, ''));
        }
        return t;
      case 0:
        return (s = t.type), (u = t.pendingProps), (u = t.elementType === s ? u : Pt(s, u)), Bs(e, t, s, u, i);
      case 1:
        return (s = t.type), (u = t.pendingProps), (u = t.elementType === s ? u : Pt(s, u)), Mf(e, t, s, u, i);
      case 3:
        e: {
          if ((Af(t), e === null)) throw Error(a(387));
          (s = t.pendingProps), (f = t.memoizedState), (u = f.element), Qc(e, t), ha(t, s, null, i);
          var p = t.memoizedState;
          if (((s = p.element), f.isDehydrated))
            if (
              ((f = {
                element: s,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              (u = mr(Error(a(423)), t)), (t = zf(e, t, s, i, u));
              break e;
            } else if (s !== u) {
              (u = mr(Error(a(424)), t)), (t = zf(e, t, s, i, u));
              break e;
            } else
              for (
                dt = on(t.stateNode.containerInfo.firstChild),
                  ft = t,
                  Ee = !0,
                  Ct = null,
                  i = qc(t, null, s, i),
                  t.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((lr(), s === u)) {
              t = Yt(e, t, i);
              break e;
            }
            Ze(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Jc(t),
          e === null && Ss(t),
          (s = t.type),
          (u = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (p = u.children),
          fs(s, u) ? (p = null) : f !== null && fs(s, f) && (t.flags |= 32),
          If(e, t),
          Ze(e, t, p, i),
          t.child
        );
      case 6:
        return e === null && Ss(t), null;
      case 13:
        return jf(e, t, i);
      case 4:
        return (
          Ns(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = ur(t, null, s, i)) : Ze(e, t, s, i),
          t.child
        );
      case 11:
        return (s = t.type), (u = t.pendingProps), (u = t.elementType === s ? u : Pt(s, u)), Of(e, t, s, u, i);
      case 7:
        return Ze(e, t, t.pendingProps, i), t.child;
      case 8:
        return Ze(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return Ze(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (u = t.pendingProps),
            (f = t.memoizedProps),
            (p = u.value),
            we(da, s._currentValue),
            (s._currentValue = p),
            f !== null)
          )
            if (bt(f.value, p)) {
              if (f.children === u.children && !nt.current) {
                t = Yt(e, t, i);
                break e;
              }
            } else
              for (f = t.child, f !== null && (f.return = t); f !== null; ) {
                var y = f.dependencies;
                if (y !== null) {
                  p = f.child;
                  for (var x = y.firstContext; x !== null; ) {
                    if (x.context === s) {
                      if (f.tag === 1) {
                        (x = Ht(-1, i & -i)), (x.tag = 2);
                        var E = f.updateQueue;
                        if (E !== null) {
                          E = E.shared;
                          var M = E.pending;
                          M === null ? (x.next = x) : ((x.next = M.next), (M.next = x)), (E.pending = x);
                        }
                      }
                      (f.lanes |= i),
                        (x = f.alternate),
                        x !== null && (x.lanes |= i),
                        Ps(f.return, i, t),
                        (y.lanes |= i);
                      break;
                    }
                    x = x.next;
                  }
                } else if (f.tag === 10) p = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((p = f.return), p === null)) throw Error(a(341));
                  (p.lanes |= i), (y = p.alternate), y !== null && (y.lanes |= i), Ps(p, i, t), (p = f.sibling);
                } else p = f.child;
                if (p !== null) p.return = f;
                else
                  for (p = f; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((f = p.sibling), f !== null)) {
                      (f.return = p.return), (p = f);
                      break;
                    }
                    p = p.return;
                  }
                f = p;
              }
          Ze(e, t, u.children, i), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (s = t.pendingProps.children),
          fr(t, i),
          (u = vt(u)),
          (s = s(u)),
          (t.flags |= 1),
          Ze(e, t, s, i),
          t.child
        );
      case 14:
        return (s = t.type), (u = Pt(s, t.pendingProps)), (u = Pt(s.type, u)), Lf(e, t, s, u, i);
      case 15:
        return Rf(e, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : Pt(s, u)),
          Ca(e, t),
          (t.tag = 1),
          rt(s) ? ((e = !0), oa(t)) : (e = !1),
          fr(t, i),
          kf(t, s, u),
          Vs(t, s, u, i),
          Hs(null, t, s, !0, e, i)
        );
      case 19:
        return Ff(e, t, i);
      case 22:
        return Tf(e, t, i);
    }
    throw Error(a(156, t.tag));
  };
  function ud(e, t) {
    return Vu(e, t);
  }
  function Rg(e, t, i, s) {
    (this.tag = e),
      (this.key = i),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function St(e, t, i, s) {
    return new Rg(e, t, i, s);
  }
  function fl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Tg(e) {
    if (typeof e == 'function') return fl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === xt)) return 11;
      if (e === qe) return 14;
    }
    return 2;
  }
  function vn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = St(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t), (i.type = e.type), (i.flags = 0), (i.subtreeFlags = 0), (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Aa(e, t, i, s, u, f) {
    var p = 2;
    if (((s = e), typeof e == 'function')) fl(e) && (p = 1);
    else if (typeof e == 'string') p = 5;
    else
      e: switch (e) {
        case Z:
          return jn(i.children, u, f, t);
        case ve:
          (p = 8), (u |= 8);
          break;
        case _e:
          return (e = St(12, i, t, u | 2)), (e.elementType = _e), (e.lanes = f), e;
        case Je:
          return (e = St(13, i, t, u)), (e.elementType = Je), (e.lanes = f), e;
        case We:
          return (e = St(19, i, t, u)), (e.elementType = We), (e.lanes = f), e;
        case Se:
          return za(i, u, f, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ye:
                p = 10;
                break e;
              case lt:
                p = 9;
                break e;
              case xt:
                p = 11;
                break e;
              case qe:
                p = 14;
                break e;
              case Ae:
                (p = 16), (s = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ''));
      }
    return (t = St(p, i, t, u)), (t.elementType = e), (t.type = s), (t.lanes = f), t;
  }
  function jn(e, t, i, s) {
    return (e = St(7, e, s, t)), (e.lanes = i), e;
  }
  function za(e, t, i, s) {
    return (e = St(22, e, s, t)), (e.elementType = Se), (e.lanes = i), (e.stateNode = { isHidden: !1 }), e;
  }
  function dl(e, t, i) {
    return (e = St(6, e, null, t)), (e.lanes = i), e;
  }
  function ml(e, t, i) {
    return (
      (t = St(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function Ig(e, t, i, s, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = $o(0)),
      (this.expirationTimes = $o(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $o(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function pl(e, t, i, s, u, f, p, y, x) {
    return (
      (e = new Ig(e, t, i, y, x)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = St(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: s,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      _s(f),
      e
    );
  }
  function Mg(e, t, i) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: J, key: s == null ? null : '' + s, children: e, containerInfo: t, implementation: i };
  }
  function cd(e) {
    if (!e) return ln;
    e = e._reactInternals;
    e: {
      if (Pn(e) !== e || e.tag !== 1) throw Error(a(170));
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
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (rt(i)) return jc(e, i, t);
    }
    return t;
  }
  function fd(e, t, i, s, u, f, p, y, x) {
    return (
      (e = pl(i, s, !0, e, u, f, p, y, x)),
      (e.context = cd(null)),
      (i = e.current),
      (s = et()),
      (u = hn(i)),
      (f = Ht(s, u)),
      (f.callback = t ?? null),
      fn(i, f, u),
      (e.current.lanes = u),
      Ar(e, u, s),
      ot(e, s),
      e
    );
  }
  function ja(e, t, i, s) {
    var u = t.current,
      f = et(),
      p = hn(u);
    return (
      (i = cd(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = Ht(f, p)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = fn(u, t, p)),
      e !== null && (Nt(e, u, p, f), pa(e, u, p)),
      p
    );
  }
  function Da(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function dd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function hl(e, t) {
    dd(e, t), (e = e.alternate) && dd(e, t);
  }
  function Ag() {
    return null;
  }
  var md =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function gl(e) {
    this._internalRoot = e;
  }
  (Fa.prototype.render = gl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      ja(e, t, null, null);
    }),
    (Fa.prototype.unmount = gl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Mn(function () {
            ja(null, e, null, null);
          }),
            (t[$t] = null);
        }
      });
  function Fa(e) {
    this._internalRoot = e;
  }
  Fa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Qu();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < nn.length && t !== 0 && t < nn[i].priority; i++);
      nn.splice(i, 0, e), i === 0 && Ju(e);
    }
  };
  function vl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function $a(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function pd() {}
  function zg(e, t, i, s, u) {
    if (u) {
      if (typeof s == 'function') {
        var f = s;
        s = function () {
          var E = Da(p);
          f.call(E);
        };
      }
      var p = fd(t, s, e, 0, null, !1, !1, '', pd);
      return (e._reactRootContainer = p), (e[$t] = p.current), Qr(e.nodeType === 8 ? e.parentNode : e), Mn(), p;
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof s == 'function') {
      var y = s;
      s = function () {
        var E = Da(x);
        y.call(E);
      };
    }
    var x = pl(e, 0, !1, null, null, !1, !1, '', pd);
    return (
      (e._reactRootContainer = x),
      (e[$t] = x.current),
      Qr(e.nodeType === 8 ? e.parentNode : e),
      Mn(function () {
        ja(t, x, i, s);
      }),
      x
    );
  }
  function Va(e, t, i, s, u) {
    var f = i._reactRootContainer;
    if (f) {
      var p = f;
      if (typeof u == 'function') {
        var y = u;
        u = function () {
          var x = Da(p);
          y.call(x);
        };
      }
      ja(t, p, e, u);
    } else p = zg(i, t, e, u, s);
    return Da(p);
  }
  (qu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Mr(t.pendingLanes);
          i !== 0 && (Vo(t, i | 1), ot(t, Te()), (ue & 6) === 0 && ((gr = Te() + 500), un()));
        }
        break;
      case 13:
        Mn(function () {
          var s = Bt(e, 1);
          if (s !== null) {
            var u = et();
            Nt(s, e, 1, u);
          }
        }),
          hl(e, 1);
    }
  }),
    (Uo = function (e) {
      if (e.tag === 13) {
        var t = Bt(e, 134217728);
        if (t !== null) {
          var i = et();
          Nt(t, e, 134217728, i);
        }
        hl(e, 134217728);
      }
    }),
    (Ku = function (e) {
      if (e.tag === 13) {
        var t = hn(e),
          i = Bt(e, t);
        if (i !== null) {
          var s = et();
          Nt(i, e, t, s);
        }
        hl(e, t);
      }
    }),
    (Qu = function () {
      return he;
    }),
    (Xu = function (e, t) {
      var i = he;
      try {
        return (he = e), t();
      } finally {
        he = i;
      }
    }),
    (Mo = function (e, t, i) {
      switch (t) {
        case 'input':
          if ((Eo(e, i), (t = i.name), i.type === 'radio' && t != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
              t < i.length;
              t++
            ) {
              var s = i[t];
              if (s !== e && s.form === e.form) {
                var u = ia(s);
                if (!u) throw Error(a(90));
                Su(s), Eo(s, u);
              }
            }
          }
          break;
        case 'textarea':
          Pu(e, i);
          break;
        case 'select':
          (t = i.value), t != null && qn(e, !!i.multiple, t, !1);
      }
    }),
    (Mu = ll),
    (Au = Mn);
  var jg = { usingClientEntryPoint: !1, Events: [Jr, rr, ia, Tu, Iu, ll] },
    di = { findFiberByHostInstance: En, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Dg = {
      bundleType: di.bundleType,
      version: di.version,
      rendererPackageName: di.rendererPackageName,
      rendererConfig: di.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: $.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Fu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: di.findFiberByHostInstance || Ag,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ua.isDisabled && Ua.supportsFiber)
      try {
        (Fi = Ua.inject(Dg)), (Rt = Ua);
      } catch {}
  }
  return (
    (st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jg),
    (st.createPortal = function (e, t) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!vl(t)) throw Error(a(200));
      return Mg(e, t, null, i);
    }),
    (st.createRoot = function (e, t) {
      if (!vl(e)) throw Error(a(299));
      var i = !1,
        s = '',
        u = md;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = pl(e, 1, !1, null, null, i, !1, s, u)),
        (e[$t] = t.current),
        Qr(e.nodeType === 8 ? e.parentNode : e),
        new gl(t)
      );
    }),
    (st.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function' ? Error(a(188)) : ((e = Object.keys(e).join(',')), Error(a(268, e)));
      return (e = Fu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (st.flushSync = function (e) {
      return Mn(e);
    }),
    (st.hydrate = function (e, t, i) {
      if (!$a(t)) throw Error(a(200));
      return Va(null, e, t, !0, i);
    }),
    (st.hydrateRoot = function (e, t, i) {
      if (!vl(e)) throw Error(a(405));
      var s = (i != null && i.hydratedSources) || null,
        u = !1,
        f = '',
        p = md;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (u = !0),
          i.identifierPrefix !== void 0 && (f = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (p = i.onRecoverableError)),
        (t = fd(t, null, e, 1, i ?? null, u, !1, f, p)),
        (e[$t] = t.current),
        Qr(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          (i = s[e]),
            (u = i._getVersion),
            (u = u(i._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [i, u])
              : t.mutableSourceEagerHydrationData.push(i, u);
      return new Fa(t);
    }),
    (st.render = function (e, t, i) {
      if (!$a(t)) throw Error(a(200));
      return Va(null, e, t, !1, i);
    }),
    (st.unmountComponentAtNode = function (e) {
      if (!$a(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (Mn(function () {
            Va(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[$t] = null);
            });
          }),
          !0)
        : !1;
    }),
    (st.unstable_batchedUpdates = ll),
    (st.unstable_renderSubtreeIntoContainer = function (e, t, i, s) {
      if (!$a(i)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Va(e, t, i, !1, s);
    }),
    (st.version = '18.3.1-next-f1338f8080-20240426'),
    st
  );
}
var kd;
function Tm() {
  if (kd) return Sl.exports;
  kd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (n) {
        console.error(n);
      }
  }
  return r(), (Sl.exports = qg()), Sl.exports;
}
var bd;
function Kg() {
  if (bd) return Wa;
  bd = 1;
  var r = Tm();
  return (Wa.createRoot = r.createRoot), (Wa.hydrateRoot = r.hydrateRoot), Wa;
}
var Qg = Kg();
const Xg = ho(Qg);
Tm();
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wi() {
  return (
    (wi = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
          }
          return r;
        }),
    wi.apply(this, arguments)
  );
}
var Fn;
(function (r) {
  (r.Pop = 'POP'), (r.Push = 'PUSH'), (r.Replace = 'REPLACE');
})(Fn || (Fn = {}));
const Cd = 'popstate';
function Gg(r) {
  r === void 0 && (r = {});
  function n(o, l) {
    let { pathname: c, search: d, hash: m } = o.location;
    return zl(
      '',
      { pathname: c, search: d, hash: m },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function a(o, l) {
    return typeof l == 'string' ? l : Mm(l);
  }
  return Zg(n, a, null, r);
}
function tt(r, n) {
  if (r === !1 || r === null || typeof r > 'u') throw new Error(n);
}
function Im(r, n) {
  if (!r) {
    typeof console < 'u' && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function Jg() {
  return Math.random().toString(36).substr(2, 8);
}
function Pd(r, n) {
  return { usr: r.state, key: r.key, idx: n };
}
function zl(r, n, a, o) {
  return (
    a === void 0 && (a = null),
    wi({ pathname: typeof r == 'string' ? r : r.pathname, search: '', hash: '' }, typeof n == 'string' ? _i(n) : n, {
      state: a,
      key: (n && n.key) || o || Jg(),
    })
  );
}
function Mm(r) {
  let { pathname: n = '/', search: a = '', hash: o = '' } = r;
  return (
    a && a !== '?' && (n += a.charAt(0) === '?' ? a : '?' + a),
    o && o !== '#' && (n += o.charAt(0) === '#' ? o : '#' + o),
    n
  );
}
function _i(r) {
  let n = {};
  if (r) {
    let a = r.indexOf('#');
    a >= 0 && ((n.hash = r.substr(a)), (r = r.substr(0, a)));
    let o = r.indexOf('?');
    o >= 0 && ((n.search = r.substr(o)), (r = r.substr(0, o))), r && (n.pathname = r);
  }
  return n;
}
function Zg(r, n, a, o) {
  o === void 0 && (o = {});
  let { window: l = document.defaultView, v5Compat: c = !1 } = o,
    d = l.history,
    m = Fn.Pop,
    h = null,
    g = v();
  g == null && ((g = 0), d.replaceState(wi({}, d.state, { idx: g }), ''));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function w() {
    m = Fn.Pop;
    let L = v(),
      Y = L == null ? null : L - g;
    (g = L), h && h({ action: m, location: _.location, delta: Y });
  }
  function S(L, Y) {
    m = Fn.Push;
    let A = zl(_.location, L, Y);
    g = v() + 1;
    let V = Pd(A, g),
      $ = _.createHref(A);
    try {
      d.pushState(V, '', $);
    } catch (O) {
      if (O instanceof DOMException && O.name === 'DataCloneError') throw O;
      l.location.assign($);
    }
    c && h && h({ action: m, location: _.location, delta: 1 });
  }
  function N(L, Y) {
    m = Fn.Replace;
    let A = zl(_.location, L, Y);
    g = v();
    let V = Pd(A, g),
      $ = _.createHref(A);
    d.replaceState(V, '', $), c && h && h({ action: m, location: _.location, delta: 0 });
  }
  function R(L) {
    let Y = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      A = typeof L == 'string' ? L : Mm(L);
    return (
      (A = A.replace(/ $/, '%20')),
      tt(Y, 'No window.location.(origin|href) available to create URL for href: ' + A),
      new URL(A, Y)
    );
  }
  let _ = {
    get action() {
      return m;
    },
    get location() {
      return r(l, d);
    },
    listen(L) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Cd, w),
        (h = L),
        () => {
          l.removeEventListener(Cd, w), (h = null);
        }
      );
    },
    createHref(L) {
      return n(l, L);
    },
    createURL: R,
    encodeLocation(L) {
      let Y = R(L);
      return { pathname: Y.pathname, search: Y.search, hash: Y.hash };
    },
    push: S,
    replace: N,
    go(L) {
      return d.go(L);
    },
  };
  return _;
}
var Ed;
(function (r) {
  (r.data = 'data'), (r.deferred = 'deferred'), (r.redirect = 'redirect'), (r.error = 'error');
})(Ed || (Ed = {}));
function ev(r, n, a) {
  a === void 0 && (a = '/');
  let o = typeof n == 'string' ? _i(n) : n,
    l = jm(o.pathname || '/', a);
  if (l == null) return null;
  let c = Am(r);
  tv(c);
  let d = null;
  for (let m = 0; d == null && m < c.length; ++m) {
    let h = mv(l);
    d = cv(c[m], h);
  }
  return d;
}
function Am(r, n, a, o) {
  n === void 0 && (n = []), a === void 0 && (a = []), o === void 0 && (o = '');
  let l = (c, d, m) => {
    let h = {
      relativePath: m === void 0 ? c.path || '' : m,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c,
    };
    h.relativePath.startsWith('/') &&
      (tt(
        h.relativePath.startsWith(o),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + o + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (h.relativePath = h.relativePath.slice(o.length)));
    let g = Un([o, h.relativePath]),
      v = a.concat(h);
    c.children &&
      c.children.length > 0 &&
      (tt(
        c.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + g + '".')
      ),
      Am(c.children, n, v, g)),
      !(c.path == null && !c.index) && n.push({ path: g, score: lv(g, c.index), routesMeta: v });
  };
  return (
    r.forEach((c, d) => {
      var m;
      if (c.path === '' || !((m = c.path) != null && m.includes('?'))) l(c, d);
      else for (let h of zm(c.path)) l(c, d, h);
    }),
    n
  );
}
function zm(r) {
  let n = r.split('/');
  if (n.length === 0) return [];
  let [a, ...o] = n,
    l = a.endsWith('?'),
    c = a.replace(/\?$/, '');
  if (o.length === 0) return l ? [c, ''] : [c];
  let d = zm(o.join('/')),
    m = [];
  return (
    m.push(...d.map((h) => (h === '' ? c : [c, h].join('/')))),
    l && m.push(...d),
    m.map((h) => (r.startsWith('/') && h === '' ? '/' : h))
  );
}
function tv(r) {
  r.sort((n, a) =>
    n.score !== a.score
      ? a.score - n.score
      : uv(
          n.routesMeta.map((o) => o.childrenIndex),
          a.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
const nv = /^:[\w-]+$/,
  rv = 3,
  iv = 2,
  av = 1,
  ov = 10,
  sv = -2,
  _d = (r) => r === '*';
function lv(r, n) {
  let a = r.split('/'),
    o = a.length;
  return (
    a.some(_d) && (o += sv),
    n && (o += iv),
    a.filter((l) => !_d(l)).reduce((l, c) => l + (nv.test(c) ? rv : c === '' ? av : ov), o)
  );
}
function uv(r, n) {
  return r.length === n.length && r.slice(0, -1).every((o, l) => o === n[l]) ? r[r.length - 1] - n[n.length - 1] : 0;
}
function cv(r, n) {
  let { routesMeta: a } = r,
    o = {},
    l = '/',
    c = [];
  for (let d = 0; d < a.length; ++d) {
    let m = a[d],
      h = d === a.length - 1,
      g = l === '/' ? n : n.slice(l.length) || '/',
      v = fv({ path: m.relativePath, caseSensitive: m.caseSensitive, end: h }, g);
    if (!v) return null;
    Object.assign(o, v.params);
    let w = m.route;
    c.push({ params: o, pathname: Un([l, v.pathname]), pathnameBase: wv(Un([l, v.pathnameBase])), route: w }),
      v.pathnameBase !== '/' && (l = Un([l, v.pathnameBase]));
  }
  return c;
}
function fv(r, n) {
  typeof r == 'string' && (r = { path: r, caseSensitive: !1, end: !0 });
  let [a, o] = dv(r.path, r.caseSensitive, r.end),
    l = n.match(a);
  if (!l) return null;
  let c = l[0],
    d = c.replace(/(.)\/+$/, '$1'),
    m = l.slice(1);
  return {
    params: o.reduce((g, v, w) => {
      let { paramName: S, isOptional: N } = v;
      if (S === '*') {
        let _ = m[w] || '';
        d = c.slice(0, c.length - _.length).replace(/(.)\/+$/, '$1');
      }
      const R = m[w];
      return N && !R ? (g[S] = void 0) : (g[S] = (R || '').replace(/%2F/g, '/')), g;
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: r,
  };
}
function dv(r, n, a) {
  n === void 0 && (n = !1),
    a === void 0 && (a = !0),
    Im(
      r === '*' || !r.endsWith('*') || r.endsWith('/*'),
      'Route path "' +
        r +
        '" will be treated as if it were ' +
        ('"' + r.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + r.replace(/\*$/, '/*') + '".')
    );
  let o = [],
    l =
      '^' +
      r
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, m, h) => (o.push({ paramName: m, isOptional: h != null }), h ? '/?([^\\/]+)?' : '/([^\\/]+)')
        );
  return (
    r.endsWith('*')
      ? (o.push({ paramName: '*' }), (l += r === '*' || r === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : a
      ? (l += '\\/*$')
      : r !== '' && r !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, n ? void 0 : 'i'), o]
  );
}
function mv(r) {
  try {
    return r
      .split('/')
      .map((n) => decodeURIComponent(n).replace(/\//g, '%2F'))
      .join('/');
  } catch (n) {
    return (
      Im(
        !1,
        'The URL path "' +
          r +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + n + ').')
      ),
      r
    );
  }
}
function jm(r, n) {
  if (n === '/') return r;
  if (!r.toLowerCase().startsWith(n.toLowerCase())) return null;
  let a = n.endsWith('/') ? n.length - 1 : n.length,
    o = r.charAt(a);
  return o && o !== '/' ? null : r.slice(a) || '/';
}
function pv(r, n) {
  n === void 0 && (n = '/');
  let { pathname: a, search: o = '', hash: l = '' } = typeof r == 'string' ? _i(r) : r;
  return { pathname: a ? (a.startsWith('/') ? a : hv(a, n)) : n, search: Sv(o), hash: xv(l) };
}
function hv(r, n) {
  let a = n.replace(/\/+$/, '').split('/');
  return (
    r.split('/').forEach((l) => {
      l === '..' ? a.length > 1 && a.pop() : l !== '.' && a.push(l);
    }),
    a.length > 1 ? a.join('/') : '/'
  );
}
function bl(r, n, a, o) {
  return (
    "Cannot include a '" +
    r +
    "' character in a manually specified " +
    ('`to.' + n + '` field [' + JSON.stringify(o) + '].  Please separate it out to the ') +
    ('`to.' + a + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function gv(r) {
  return r.filter((n, a) => a === 0 || (n.route.path && n.route.path.length > 0));
}
function vv(r, n) {
  let a = gv(r);
  return n ? a.map((o, l) => (l === r.length - 1 ? o.pathname : o.pathnameBase)) : a.map((o) => o.pathnameBase);
}
function yv(r, n, a, o) {
  o === void 0 && (o = !1);
  let l;
  typeof r == 'string'
    ? (l = _i(r))
    : ((l = wi({}, r)),
      tt(!l.pathname || !l.pathname.includes('?'), bl('?', 'pathname', 'search', l)),
      tt(!l.pathname || !l.pathname.includes('#'), bl('#', 'pathname', 'hash', l)),
      tt(!l.search || !l.search.includes('#'), bl('#', 'search', 'hash', l)));
  let c = r === '' || l.pathname === '',
    d = c ? '/' : l.pathname,
    m;
  if (d == null) m = a;
  else {
    let w = n.length - 1;
    if (!o && d.startsWith('..')) {
      let S = d.split('/');
      for (; S[0] === '..'; ) S.shift(), (w -= 1);
      l.pathname = S.join('/');
    }
    m = w >= 0 ? n[w] : '/';
  }
  let h = pv(l, m),
    g = d && d !== '/' && d.endsWith('/'),
    v = (c || d === '.') && a.endsWith('/');
  return !h.pathname.endsWith('/') && (g || v) && (h.pathname += '/'), h;
}
const Un = (r) => r.join('/').replace(/\/\/+/g, '/'),
  wv = (r) => r.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Sv = (r) => (!r || r === '?' ? '' : r.startsWith('?') ? r : '?' + r),
  xv = (r) => (!r || r === '#' ? '' : r.startsWith('#') ? r : '#' + r);
function kv(r) {
  return (
    r != null &&
    typeof r.status == 'number' &&
    typeof r.statusText == 'string' &&
    typeof r.internal == 'boolean' &&
    'data' in r
  );
}
const Dm = ['post', 'put', 'patch', 'delete'];
new Set(Dm);
const bv = ['get', ...Dm];
new Set(bv);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function io() {
  return (
    (io = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
          }
          return r;
        }),
    io.apply(this, arguments)
  );
}
const nu = j.createContext(null),
  Cv = j.createContext(null),
  vo = j.createContext(null),
  ru = j.createContext(null),
  Yn = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fm = j.createContext(null);
function yo() {
  return j.useContext(ru) != null;
}
function iu() {
  return yo() || tt(!1), j.useContext(ru).location;
}
function $m(r) {
  j.useContext(vo).static || j.useLayoutEffect(r);
}
function Vm() {
  let { isDataRoute: r } = j.useContext(Yn);
  return r ? Fv() : Pv();
}
function Pv() {
  yo() || tt(!1);
  let r = j.useContext(nu),
    { basename: n, future: a, navigator: o } = j.useContext(vo),
    { matches: l } = j.useContext(Yn),
    { pathname: c } = iu(),
    d = JSON.stringify(vv(l, a.v7_relativeSplatPath)),
    m = j.useRef(!1);
  return (
    $m(() => {
      m.current = !0;
    }),
    j.useCallback(
      function (g, v) {
        if ((v === void 0 && (v = {}), !m.current)) return;
        if (typeof g == 'number') {
          o.go(g);
          return;
        }
        let w = yv(g, JSON.parse(d), c, v.relative === 'path');
        r == null && n !== '/' && (w.pathname = w.pathname === '/' ? n : Un([n, w.pathname])),
          (v.replace ? o.replace : o.push)(w, v.state, v);
      },
      [n, o, d, c, r]
    )
  );
}
const Ev = j.createContext(null);
function _v(r) {
  let n = j.useContext(Yn).outlet;
  return n && j.createElement(Ev.Provider, { value: r }, n);
}
function Nv(r, n) {
  return Ov(r);
}
function Ov(r, n, a, o) {
  yo() || tt(!1);
  let { navigator: l } = j.useContext(vo),
    { matches: c } = j.useContext(Yn),
    d = c[c.length - 1],
    m = d ? d.params : {};
  d && d.pathname;
  let h = d ? d.pathnameBase : '/';
  d && d.route;
  let g = iu(),
    v;
  v = g;
  let w = v.pathname || '/',
    S = w;
  if (h !== '/') {
    let _ = h.replace(/^\//, '').split('/');
    S = '/' + w.replace(/^\//, '').split('/').slice(_.length).join('/');
  }
  let N = ev(r, { pathname: S });
  return Mv(
    N &&
      N.map((_) =>
        Object.assign({}, _, {
          params: Object.assign({}, m, _.params),
          pathname: Un([h, l.encodeLocation ? l.encodeLocation(_.pathname).pathname : _.pathname]),
          pathnameBase:
            _.pathnameBase === '/'
              ? h
              : Un([h, l.encodeLocation ? l.encodeLocation(_.pathnameBase).pathname : _.pathnameBase]),
        })
      ),
    c,
    a,
    o
  );
}
function Lv() {
  let r = Dv(),
    n = kv(r) ? r.status + ' ' + r.statusText : r instanceof Error ? r.message : JSON.stringify(r),
    a = r instanceof Error ? r.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return j.createElement(
    j.Fragment,
    null,
    j.createElement('h2', null, 'Unexpected Application Error!'),
    j.createElement('h3', { style: { fontStyle: 'italic' } }, n),
    a ? j.createElement('pre', { style: l }, a) : null,
    null
  );
}
const Rv = j.createElement(Lv, null);
class Tv extends j.Component {
  constructor(n) {
    super(n), (this.state = { location: n.location, revalidation: n.revalidation, error: n.error });
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, a) {
    return a.location !== n.location || (a.revalidation !== 'idle' && n.revalidation === 'idle')
      ? { error: n.error, location: n.location, revalidation: n.revalidation }
      : {
          error: n.error !== void 0 ? n.error : a.error,
          location: a.location,
          revalidation: n.revalidation || a.revalidation,
        };
  }
  componentDidCatch(n, a) {
    console.error('React Router caught the following error during render', n, a);
  }
  render() {
    return this.state.error !== void 0
      ? j.createElement(
          Yn.Provider,
          { value: this.props.routeContext },
          j.createElement(Fm.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Iv(r) {
  let { routeContext: n, match: a, children: o } = r,
    l = j.useContext(nu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = a.route.id),
    j.createElement(Yn.Provider, { value: n }, o)
  );
}
function Mv(r, n, a, o) {
  var l;
  if ((n === void 0 && (n = []), a === void 0 && (a = null), o === void 0 && (o = null), r == null)) {
    var c;
    if ((c = a) != null && c.errors) r = a.matches;
    else return null;
  }
  let d = r,
    m = (l = a) == null ? void 0 : l.errors;
  if (m != null) {
    let v = d.findIndex((w) => w.route.id && m?.[w.route.id] !== void 0);
    v >= 0 || tt(!1), (d = d.slice(0, Math.min(d.length, v + 1)));
  }
  let h = !1,
    g = -1;
  if (a && o && o.v7_partialHydration)
    for (let v = 0; v < d.length; v++) {
      let w = d[v];
      if (((w.route.HydrateFallback || w.route.hydrateFallbackElement) && (g = v), w.route.id)) {
        let { loaderData: S, errors: N } = a,
          R = w.route.loader && S[w.route.id] === void 0 && (!N || N[w.route.id] === void 0);
        if (w.route.lazy || R) {
          (h = !0), g >= 0 ? (d = d.slice(0, g + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((v, w, S) => {
    let N,
      R = !1,
      _ = null,
      L = null;
    a &&
      ((N = m && w.route.id ? m[w.route.id] : void 0),
      (_ = w.route.errorElement || Rv),
      h &&
        (g < 0 && S === 0
          ? ($v('route-fallback'), (R = !0), (L = null))
          : g === S && ((R = !0), (L = w.route.hydrateFallbackElement || null))));
    let Y = n.concat(d.slice(0, S + 1)),
      A = () => {
        let V;
        return (
          N
            ? (V = _)
            : R
            ? (V = L)
            : w.route.Component
            ? (V = j.createElement(w.route.Component, null))
            : w.route.element
            ? (V = w.route.element)
            : (V = v),
          j.createElement(Iv, {
            match: w,
            routeContext: { outlet: v, matches: Y, isDataRoute: a != null },
            children: V,
          })
        );
      };
    return a && (w.route.ErrorBoundary || w.route.errorElement || S === 0)
      ? j.createElement(Tv, {
          location: a.location,
          revalidation: a.revalidation,
          component: _,
          error: N,
          children: A(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
        })
      : A();
  }, null);
}
var Um = (function (r) {
    return (
      (r.UseBlocker = 'useBlocker'), (r.UseRevalidator = 'useRevalidator'), (r.UseNavigateStable = 'useNavigate'), r
    );
  })(Um || {}),
  Wm = (function (r) {
    return (
      (r.UseBlocker = 'useBlocker'),
      (r.UseLoaderData = 'useLoaderData'),
      (r.UseActionData = 'useActionData'),
      (r.UseRouteError = 'useRouteError'),
      (r.UseNavigation = 'useNavigation'),
      (r.UseRouteLoaderData = 'useRouteLoaderData'),
      (r.UseMatches = 'useMatches'),
      (r.UseRevalidator = 'useRevalidator'),
      (r.UseNavigateStable = 'useNavigate'),
      (r.UseRouteId = 'useRouteId'),
      r
    );
  })(Wm || {});
function Av(r) {
  let n = j.useContext(nu);
  return n || tt(!1), n;
}
function zv(r) {
  let n = j.useContext(Cv);
  return n || tt(!1), n;
}
function jv(r) {
  let n = j.useContext(Yn);
  return n || tt(!1), n;
}
function Bm(r) {
  let n = jv(),
    a = n.matches[n.matches.length - 1];
  return a.route.id || tt(!1), a.route.id;
}
function Dv() {
  var r;
  let n = j.useContext(Fm),
    a = zv(),
    o = Bm();
  return n !== void 0 ? n : (r = a.errors) == null ? void 0 : r[o];
}
function Fv() {
  let { router: r } = Av(Um.UseNavigateStable),
    n = Bm(Wm.UseNavigateStable),
    a = j.useRef(!1);
  return (
    $m(() => {
      a.current = !0;
    }),
    j.useCallback(
      function (l, c) {
        c === void 0 && (c = {}),
          a.current && (typeof l == 'number' ? r.navigate(l) : r.navigate(l, io({ fromRouteId: n }, c)));
      },
      [r, n]
    )
  );
}
const Nd = {};
function $v(r, n, a) {
  Nd[r] || (Nd[r] = !0);
}
function Vv(r) {
  return _v(r.context);
}
function Uv(r) {
  let {
    basename: n = '/',
    children: a = null,
    location: o,
    navigationType: l = Fn.Pop,
    navigator: c,
    static: d = !1,
    future: m,
  } = r;
  yo() && tt(!1);
  let h = n.replace(/^\/*/, '/'),
    g = j.useMemo(
      () => ({ basename: h, navigator: c, static: d, future: io({ v7_relativeSplatPath: !1 }, m) }),
      [h, m, c, d]
    );
  typeof o == 'string' && (o = _i(o));
  let { pathname: v = '/', search: w = '', hash: S = '', state: N = null, key: R = 'default' } = o,
    _ = j.useMemo(() => {
      let L = jm(v, h);
      return L == null ? null : { location: { pathname: L, search: w, hash: S, state: N, key: R }, navigationType: l };
    }, [h, v, w, S, N, R, l]);
  return _ == null
    ? null
    : j.createElement(vo.Provider, { value: g }, j.createElement(ru.Provider, { children: a, value: _ }));
}
new Promise(() => {});
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jl(r) {
  return (
    r === void 0 && (r = ''),
    new URLSearchParams(
      typeof r == 'string' || Array.isArray(r) || r instanceof URLSearchParams
        ? r
        : Object.keys(r).reduce((n, a) => {
            let o = r[a];
            return n.concat(Array.isArray(o) ? o.map((l) => [a, l]) : [[a, o]]);
          }, [])
    )
  );
}
function Wv(r, n) {
  let a = jl(r);
  return (
    n &&
      n.forEach((o, l) => {
        a.has(l) ||
          n.getAll(l).forEach((c) => {
            a.append(l, c);
          });
      }),
    a
  );
}
const Bv = '6';
try {
  window.__reactRouterVersion = Bv;
} catch {}
const Hv = 'startTransition',
  Od = Bg[Hv];
function Yv(r) {
  let { basename: n, children: a, future: o, window: l } = r,
    c = j.useRef();
  c.current == null && (c.current = Gg({ window: l, v5Compat: !0 }));
  let d = c.current,
    [m, h] = j.useState({ action: d.action, location: d.location }),
    { v7_startTransition: g } = o || {},
    v = j.useCallback(
      (w) => {
        g && Od ? Od(() => h(w)) : h(w);
      },
      [h, g]
    );
  return (
    j.useLayoutEffect(() => d.listen(v), [d, v]),
    j.createElement(Uv, {
      basename: n,
      children: a,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      future: o,
    })
  );
}
var Ld;
(function (r) {
  (r.UseScrollRestoration = 'useScrollRestoration'),
    (r.UseSubmit = 'useSubmit'),
    (r.UseSubmitFetcher = 'useSubmitFetcher'),
    (r.UseFetcher = 'useFetcher'),
    (r.useViewTransitionState = 'useViewTransitionState');
})(Ld || (Ld = {}));
var Rd;
(function (r) {
  (r.UseFetcher = 'useFetcher'), (r.UseFetchers = 'useFetchers'), (r.UseScrollRestoration = 'useScrollRestoration');
})(Rd || (Rd = {}));
function Nx(r) {
  let n = j.useRef(jl(r)),
    a = j.useRef(!1),
    o = iu(),
    l = j.useMemo(() => Wv(o.search, a.current ? null : n.current), [o.search]),
    c = Vm(),
    d = j.useCallback(
      (m, h) => {
        const g = jl(typeof m == 'function' ? m(l) : m);
        (a.current = !0), c('?' + g, h);
      },
      [c, l]
    );
  return [l, d];
}
const qv = 'modulepreload',
  Kv = function (r) {
    return '/etc/designs/spa/snb-vrrr-fe/clientlibs/' + r;
  },
  Td = {},
  Ni = function (n, a, o) {
    let l = Promise.resolve();
    if (a && a.length > 0) {
      let h = function (g) {
        return Promise.all(
          g.map((v) =>
            Promise.resolve(v).then(
              (w) => ({ status: 'fulfilled', value: w }),
              (w) => ({ status: 'rejected', reason: w })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const d = document.querySelector('meta[property=csp-nonce]'),
        m = d?.nonce || d?.getAttribute('nonce');
      l = h(
        a.map((g) => {
          if (((g = Kv(g)), g in Td)) return;
          Td[g] = !0;
          const v = g.endsWith('.css'),
            w = v ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${w}`)) return;
          const S = document.createElement('link');
          if (
            ((S.rel = v ? 'stylesheet' : qv),
            v || (S.as = 'script'),
            (S.crossOrigin = ''),
            (S.href = g),
            m && S.setAttribute('nonce', m),
            document.head.appendChild(S),
            v)
          )
            return new Promise((N, R) => {
              S.addEventListener('load', N),
                S.addEventListener('error', () => R(new Error(`Unable to preload CSS for ${g}`)));
            });
        })
      );
    }
    function c(d) {
      const m = new Event('vite:preloadError', { cancelable: !0 });
      if (((m.payload = d), window.dispatchEvent(m), !m.defaultPrevented)) throw d;
    }
    return l.then((d) => {
      for (const m of d || []) m.status === 'rejected' && c(m.reason);
      return n().catch(c);
    });
  };
function Id(r, n) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    n &&
      (o = o.filter(function (l) {
        return Object.getOwnPropertyDescriptor(r, l).enumerable;
      })),
      a.push.apply(a, o);
  }
  return a;
}
function B(r) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? Id(Object(a), !0).forEach(function (o) {
          De(r, o, a[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
      : Id(Object(a)).forEach(function (o) {
          Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(a, o));
        });
  }
  return r;
}
function ao(r) {
  '@babel/helpers - typeof';
  return (
    (ao =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n && typeof Symbol == 'function' && n.constructor === Symbol && n !== Symbol.prototype
              ? 'symbol'
              : typeof n;
          }),
    ao(r)
  );
}
function Qv(r, n) {
  if (!(r instanceof n)) throw new TypeError('Cannot call a class as a function');
}
function Xv(r, n) {
  for (var a = 0; a < n.length; a++) {
    var o = n[a];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(r, o.key, o);
  }
}
function Gv(r, n, a) {
  return n && Xv(r.prototype, n), Object.defineProperty(r, 'prototype', { writable: !1 }), r;
}
function De(r, n, a) {
  return (
    n in r ? Object.defineProperty(r, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (r[n] = a), r
  );
}
function au(r, n) {
  return Zv(r) || ty(r, n) || Hm(r, n) || ry();
}
function Oi(r) {
  return Jv(r) || ey(r) || Hm(r) || ny();
}
function Jv(r) {
  if (Array.isArray(r)) return Dl(r);
}
function Zv(r) {
  if (Array.isArray(r)) return r;
}
function ey(r) {
  if ((typeof Symbol < 'u' && r[Symbol.iterator] != null) || r['@@iterator'] != null) return Array.from(r);
}
function ty(r, n) {
  var a = r == null ? null : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
  if (a != null) {
    var o = [],
      l = !0,
      c = !1,
      d,
      m;
    try {
      for (a = a.call(r); !(l = (d = a.next()).done) && (o.push(d.value), !(n && o.length === n)); l = !0);
    } catch (h) {
      (c = !0), (m = h);
    } finally {
      try {
        !l && a.return != null && a.return();
      } finally {
        if (c) throw m;
      }
    }
    return o;
  }
}
function Hm(r, n) {
  if (r) {
    if (typeof r == 'string') return Dl(r, n);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if ((a === 'Object' && r.constructor && (a = r.constructor.name), a === 'Map' || a === 'Set')) return Array.from(r);
    if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Dl(r, n);
  }
}
function Dl(r, n) {
  (n == null || n > r.length) && (n = r.length);
  for (var a = 0, o = new Array(n); a < n; a++) o[a] = r[a];
  return o;
}
function ny() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ry() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Md = function () {},
  ou = {},
  Ym = {},
  qm = null,
  Km = { mark: Md, measure: Md };
try {
  typeof window < 'u' && (ou = window),
    typeof document < 'u' && (Ym = document),
    typeof MutationObserver < 'u' && (qm = MutationObserver),
    typeof performance < 'u' && (Km = performance);
} catch {}
var iy = ou.navigator || {},
  Ad = iy.userAgent,
  zd = Ad === void 0 ? '' : Ad,
  kn = ou,
  Ce = Ym,
  jd = qm,
  Ba = Km;
kn.document;
var Jt =
    !!Ce.documentElement &&
    !!Ce.head &&
    typeof Ce.addEventListener == 'function' &&
    typeof Ce.createElement == 'function',
  Qm = ~zd.indexOf('MSIE') || ~zd.indexOf('Trident/'),
  Ha,
  Ya,
  qa,
  Ka,
  Qa,
  Qt = '___FONT_AWESOME___',
  Fl = 16,
  Xm = 'fa',
  Gm = 'svg-inline--fa',
  Wn = 'data-fa-i2svg',
  $l = 'data-fa-pseudo-element',
  ay = 'data-fa-pseudo-element-pending',
  su = 'data-prefix',
  lu = 'data-icon',
  Dd = 'fontawesome-i2svg',
  oy = 'async',
  sy = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  Jm = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  be = 'classic',
  Re = 'sharp',
  uu = [be, Re];
function Li(r) {
  return new Proxy(r, {
    get: function (a, o) {
      return o in a ? a[o] : a[be];
    },
  });
}
var Si = Li(
    ((Ha = {}),
    De(Ha, be, {
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
      fak: 'kit',
      fakd: 'kit',
      'fa-kit': 'kit',
      'fa-kit-duotone': 'kit',
    }),
    De(Ha, Re, {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
      fasl: 'light',
      'fa-light': 'light',
      fast: 'thin',
      'fa-thin': 'thin',
    }),
    Ha)
  ),
  xi = Li(
    ((Ya = {}),
    De(Ya, be, { solid: 'fas', regular: 'far', light: 'fal', thin: 'fat', duotone: 'fad', brands: 'fab', kit: 'fak' }),
    De(Ya, Re, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    Ya)
  ),
  ki = Li(
    ((qa = {}),
    De(qa, be, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    De(qa, Re, { fass: 'fa-solid', fasr: 'fa-regular', fasl: 'fa-light', fast: 'fa-thin' }),
    qa)
  ),
  ly = Li(
    ((Ka = {}),
    De(Ka, be, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    De(Ka, Re, { 'fa-solid': 'fass', 'fa-regular': 'fasr', 'fa-light': 'fasl', 'fa-thin': 'fast' }),
    Ka)
  ),
  uy = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  Zm = 'fa-layers-text',
  cy = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  fy = Li(
    ((Qa = {}),
    De(Qa, be, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
    De(Qa, Re, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    Qa)
  ),
  ep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  dy = ep.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  my = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  $n = { GROUP: 'duotone-group', SWAP_OPACITY: 'swap-opacity', PRIMARY: 'primary', SECONDARY: 'secondary' },
  bi = new Set();
Object.keys(xi[be]).map(bi.add.bind(bi));
Object.keys(xi[Re]).map(bi.add.bind(bi));
var py = []
    .concat(uu, Oi(bi), [
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
      $n.GROUP,
      $n.SWAP_OPACITY,
      $n.PRIMARY,
      $n.SECONDARY,
    ])
    .concat(
      ep.map(function (r) {
        return ''.concat(r, 'x');
      })
    )
    .concat(
      dy.map(function (r) {
        return 'w-'.concat(r);
      })
    ),
  gi = kn.FontAwesomeConfig || {};
function hy(r) {
  var n = Ce.querySelector('script[' + r + ']');
  if (n) return n.getAttribute(r);
}
function gy(r) {
  return r === '' ? !0 : r === 'false' ? !1 : r === 'true' ? !0 : r;
}
if (Ce && typeof Ce.querySelector == 'function') {
  var vy = [
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
  ];
  vy.forEach(function (r) {
    var n = au(r, 2),
      a = n[0],
      o = n[1],
      l = gy(hy(a));
    l != null && (gi[o] = l);
  });
}
var tp = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: Xm,
  replacementClass: Gm,
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
gi.familyPrefix && (gi.cssPrefix = gi.familyPrefix);
var Er = B(B({}, tp), gi);
Er.autoReplaceSvg || (Er.observeMutations = !1);
var X = {};
Object.keys(tp).forEach(function (r) {
  Object.defineProperty(X, r, {
    enumerable: !0,
    set: function (a) {
      (Er[r] = a),
        vi.forEach(function (o) {
          return o(X);
        });
    },
    get: function () {
      return Er[r];
    },
  });
});
Object.defineProperty(X, 'familyPrefix', {
  enumerable: !0,
  set: function (n) {
    (Er.cssPrefix = n),
      vi.forEach(function (a) {
        return a(X);
      });
  },
  get: function () {
    return Er.cssPrefix;
  },
});
kn.FontAwesomeConfig = X;
var vi = [];
function yy(r) {
  return (
    vi.push(r),
    function () {
      vi.splice(vi.indexOf(r), 1);
    }
  );
}
var yr = Fl,
  Dt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function wy(r) {
  if (!(!r || !Jt)) {
    var n = Ce.createElement('style');
    n.setAttribute('type', 'text/css'), (n.innerHTML = r);
    for (var a = Ce.head.childNodes, o = null, l = a.length - 1; l > -1; l--) {
      var c = a[l],
        d = (c.tagName || '').toUpperCase();
      ['STYLE', 'LINK'].indexOf(d) > -1 && (o = c);
    }
    return Ce.head.insertBefore(n, o), r;
  }
}
var Sy = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function Ci() {
  for (var r = 12, n = ''; r-- > 0; ) n += Sy[(Math.random() * 62) | 0];
  return n;
}
function _r(r) {
  for (var n = [], a = (r || []).length >>> 0; a--; ) n[a] = r[a];
  return n;
}
function cu(r) {
  return r.classList
    ? _r(r.classList)
    : (r.getAttribute('class') || '').split(' ').filter(function (n) {
        return n;
      });
}
function np(r) {
  return ''
    .concat(r)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function xy(r) {
  return Object.keys(r || {})
    .reduce(function (n, a) {
      return n + ''.concat(a, '="').concat(np(r[a]), '" ');
    }, '')
    .trim();
}
function wo(r) {
  return Object.keys(r || {}).reduce(function (n, a) {
    return n + ''.concat(a, ': ').concat(r[a].trim(), ';');
  }, '');
}
function fu(r) {
  return r.size !== Dt.size || r.x !== Dt.x || r.y !== Dt.y || r.rotate !== Dt.rotate || r.flipX || r.flipY;
}
function ky(r) {
  var n = r.transform,
    a = r.containerWidth,
    o = r.iconWidth,
    l = { transform: 'translate('.concat(a / 2, ' 256)') },
    c = 'translate('.concat(n.x * 32, ', ').concat(n.y * 32, ') '),
    d = 'scale('.concat((n.size / 16) * (n.flipX ? -1 : 1), ', ').concat((n.size / 16) * (n.flipY ? -1 : 1), ') '),
    m = 'rotate('.concat(n.rotate, ' 0 0)'),
    h = { transform: ''.concat(c, ' ').concat(d, ' ').concat(m) },
    g = { transform: 'translate('.concat((o / 2) * -1, ' -256)') };
  return { outer: l, inner: h, path: g };
}
function by(r) {
  var n = r.transform,
    a = r.width,
    o = a === void 0 ? Fl : a,
    l = r.height,
    c = l === void 0 ? Fl : l,
    d = '';
  return (
    Qm
      ? (d += 'translate('.concat(n.x / yr - o / 2, 'em, ').concat(n.y / yr - c / 2, 'em) '))
      : (d += 'translate(calc(-50% + '.concat(n.x / yr, 'em), calc(-50% + ').concat(n.y / yr, 'em)) ')),
    (d += 'scale('.concat((n.size / yr) * (n.flipX ? -1 : 1), ', ').concat((n.size / yr) * (n.flipY ? -1 : 1), ') ')),
    (d += 'rotate('.concat(n.rotate, 'deg) ')),
    d
  );
}
var Cy = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
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
function rp() {
  var r = Xm,
    n = Gm,
    a = X.cssPrefix,
    o = X.replacementClass,
    l = Cy;
  if (a !== r || o !== n) {
    var c = new RegExp('\\.'.concat(r, '\\-'), 'g'),
      d = new RegExp('\\--'.concat(r, '\\-'), 'g'),
      m = new RegExp('\\.'.concat(n), 'g');
    l = l.replace(c, '.'.concat(a, '-')).replace(d, '--'.concat(a, '-')).replace(m, '.'.concat(o));
  }
  return l;
}
var Fd = !1;
function Cl() {
  X.autoAddCss && !Fd && (wy(rp()), (Fd = !0));
}
var Py = {
    mixout: function () {
      return { dom: { css: rp, insertCss: Cl } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Cl();
        },
        beforeI2svg: function () {
          Cl();
        },
      };
    },
  },
  Xt = kn || {};
Xt[Qt] || (Xt[Qt] = {});
Xt[Qt].styles || (Xt[Qt].styles = {});
Xt[Qt].hooks || (Xt[Qt].hooks = {});
Xt[Qt].shims || (Xt[Qt].shims = []);
var Ot = Xt[Qt],
  ip = [],
  Ey = function r() {
    Ce.removeEventListener('DOMContentLoaded', r),
      (oo = 1),
      ip.map(function (n) {
        return n();
      });
  },
  oo = !1;
Jt &&
  ((oo = (Ce.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ce.readyState)),
  oo || Ce.addEventListener('DOMContentLoaded', Ey));
function _y(r) {
  Jt && (oo ? setTimeout(r, 0) : ip.push(r));
}
function Ri(r) {
  var n = r.tag,
    a = r.attributes,
    o = a === void 0 ? {} : a,
    l = r.children,
    c = l === void 0 ? [] : l;
  return typeof r == 'string'
    ? np(r)
    : '<'.concat(n, ' ').concat(xy(o), '>').concat(c.map(Ri).join(''), '</').concat(n, '>');
}
function $d(r, n, a) {
  if (r && r[n] && r[n][a]) return { prefix: n, iconName: a, icon: r[n][a] };
}
var Pl = function (n, a, o, l) {
  var c = Object.keys(n),
    d = c.length,
    m = a,
    h,
    g,
    v;
  for (o === void 0 ? ((h = 1), (v = n[c[0]])) : ((h = 0), (v = o)); h < d; h++) (g = c[h]), (v = m(v, n[g], g, n));
  return v;
};
function Ny(r) {
  for (var n = [], a = 0, o = r.length; a < o; ) {
    var l = r.charCodeAt(a++);
    if (l >= 55296 && l <= 56319 && a < o) {
      var c = r.charCodeAt(a++);
      (c & 64512) == 56320 ? n.push(((l & 1023) << 10) + (c & 1023) + 65536) : (n.push(l), a--);
    } else n.push(l);
  }
  return n;
}
function Vl(r) {
  var n = Ny(r);
  return n.length === 1 ? n[0].toString(16) : null;
}
function Oy(r, n) {
  var a = r.length,
    o = r.charCodeAt(n),
    l;
  return o >= 55296 && o <= 56319 && a > n + 1 && ((l = r.charCodeAt(n + 1)), l >= 56320 && l <= 57343)
    ? (o - 55296) * 1024 + l - 56320 + 65536
    : o;
}
function Vd(r) {
  return Object.keys(r).reduce(function (n, a) {
    var o = r[a],
      l = !!o.icon;
    return l ? (n[o.iconName] = o.icon) : (n[a] = o), n;
  }, {});
}
function Ul(r, n) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    o = a.skipHooks,
    l = o === void 0 ? !1 : o,
    c = Vd(n);
  typeof Ot.hooks.addPack == 'function' && !l
    ? Ot.hooks.addPack(r, Vd(n))
    : (Ot.styles[r] = B(B({}, Ot.styles[r] || {}), c)),
    r === 'fas' && Ul('fa', n);
}
var Xa,
  Ga,
  Ja,
  kr = Ot.styles,
  Ly = Ot.shims,
  Ry = ((Xa = {}), De(Xa, be, Object.values(ki[be])), De(Xa, Re, Object.values(ki[Re])), Xa),
  du = null,
  ap = {},
  op = {},
  sp = {},
  lp = {},
  up = {},
  Ty = ((Ga = {}), De(Ga, be, Object.keys(Si[be])), De(Ga, Re, Object.keys(Si[Re])), Ga);
function Iy(r) {
  return ~py.indexOf(r);
}
function My(r, n) {
  var a = n.split('-'),
    o = a[0],
    l = a.slice(1).join('-');
  return o === r && l !== '' && !Iy(l) ? l : null;
}
var cp = function () {
  var n = function (c) {
    return Pl(
      kr,
      function (d, m, h) {
        return (d[h] = Pl(m, c, {})), d;
      },
      {}
    );
  };
  (ap = n(function (l, c, d) {
    if ((c[3] && (l[c[3]] = d), c[2])) {
      var m = c[2].filter(function (h) {
        return typeof h == 'number';
      });
      m.forEach(function (h) {
        l[h.toString(16)] = d;
      });
    }
    return l;
  })),
    (op = n(function (l, c, d) {
      if (((l[d] = d), c[2])) {
        var m = c[2].filter(function (h) {
          return typeof h == 'string';
        });
        m.forEach(function (h) {
          l[h] = d;
        });
      }
      return l;
    })),
    (up = n(function (l, c, d) {
      var m = c[2];
      return (
        (l[d] = d),
        m.forEach(function (h) {
          l[h] = d;
        }),
        l
      );
    }));
  var a = 'far' in kr || X.autoFetchSvg,
    o = Pl(
      Ly,
      function (l, c) {
        var d = c[0],
          m = c[1],
          h = c[2];
        return (
          m === 'far' && !a && (m = 'fas'),
          typeof d == 'string' && (l.names[d] = { prefix: m, iconName: h }),
          typeof d == 'number' && (l.unicodes[d.toString(16)] = { prefix: m, iconName: h }),
          l
        );
      },
      { names: {}, unicodes: {} }
    );
  (sp = o.names), (lp = o.unicodes), (du = So(X.styleDefault, { family: X.familyDefault }));
};
yy(function (r) {
  du = So(r.styleDefault, { family: X.familyDefault });
});
cp();
function mu(r, n) {
  return (ap[r] || {})[n];
}
function Ay(r, n) {
  return (op[r] || {})[n];
}
function Vn(r, n) {
  return (up[r] || {})[n];
}
function fp(r) {
  return sp[r] || { prefix: null, iconName: null };
}
function zy(r) {
  var n = lp[r],
    a = mu('fas', r);
  return n || (a ? { prefix: 'fas', iconName: a } : null) || { prefix: null, iconName: null };
}
function bn() {
  return du;
}
var pu = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function So(r) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    a = n.family,
    o = a === void 0 ? be : a,
    l = Si[o][r],
    c = xi[o][r] || xi[o][l],
    d = r in Ot.styles ? r : null;
  return c || d || null;
}
var Ud = ((Ja = {}), De(Ja, be, Object.keys(ki[be])), De(Ja, Re, Object.keys(ki[Re])), Ja);
function xo(r) {
  var n,
    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    o = a.skipLookups,
    l = o === void 0 ? !1 : o,
    c =
      ((n = {}),
      De(n, be, ''.concat(X.cssPrefix, '-').concat(be)),
      De(n, Re, ''.concat(X.cssPrefix, '-').concat(Re)),
      n),
    d = null,
    m = be;
  (r.includes(c[be]) ||
    r.some(function (g) {
      return Ud[be].includes(g);
    })) &&
    (m = be),
    (r.includes(c[Re]) ||
      r.some(function (g) {
        return Ud[Re].includes(g);
      })) &&
      (m = Re);
  var h = r.reduce(function (g, v) {
    var w = My(X.cssPrefix, v);
    if (
      (kr[v]
        ? ((v = Ry[m].includes(v) ? ly[m][v] : v), (d = v), (g.prefix = v))
        : Ty[m].indexOf(v) > -1
        ? ((d = v), (g.prefix = So(v, { family: m })))
        : w
        ? (g.iconName = w)
        : v !== X.replacementClass && v !== c[be] && v !== c[Re] && g.rest.push(v),
      !l && g.prefix && g.iconName)
    ) {
      var S = d === 'fa' ? fp(g.iconName) : {},
        N = Vn(g.prefix, g.iconName);
      S.prefix && (d = null),
        (g.iconName = S.iconName || N || g.iconName),
        (g.prefix = S.prefix || g.prefix),
        g.prefix === 'far' && !kr.far && kr.fas && !X.autoFetchSvg && (g.prefix = 'fas');
    }
    return g;
  }, pu());
  return (
    (r.includes('fa-brands') || r.includes('fab')) && (h.prefix = 'fab'),
    (r.includes('fa-duotone') || r.includes('fad')) && (h.prefix = 'fad'),
    !h.prefix &&
      m === Re &&
      (kr.fass || X.autoFetchSvg) &&
      ((h.prefix = 'fass'), (h.iconName = Vn(h.prefix, h.iconName) || h.iconName)),
    (h.prefix === 'fa' || d === 'fa') && (h.prefix = bn() || 'fas'),
    h
  );
}
var jy = (function () {
    function r() {
      Qv(this, r), (this.definitions = {});
    }
    return (
      Gv(r, [
        {
          key: 'add',
          value: function () {
            for (var a = this, o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
            var d = l.reduce(this._pullDefinitions, {});
            Object.keys(d).forEach(function (m) {
              (a.definitions[m] = B(B({}, a.definitions[m] || {}), d[m])), Ul(m, d[m]);
              var h = ki[be][m];
              h && Ul(h, d[m]), cp();
            });
          },
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: '_pullDefinitions',
          value: function (a, o) {
            var l = o.prefix && o.iconName && o.icon ? { 0: o } : o;
            return (
              Object.keys(l).map(function (c) {
                var d = l[c],
                  m = d.prefix,
                  h = d.iconName,
                  g = d.icon,
                  v = g[2];
                a[m] || (a[m] = {}),
                  v.length > 0 &&
                    v.forEach(function (w) {
                      typeof w == 'string' && (a[m][w] = g);
                    }),
                  (a[m][h] = g);
              }),
              a
            );
          },
        },
      ]),
      r
    );
  })(),
  Wd = [],
  br = {},
  Pr = {},
  Dy = Object.keys(Pr);
function Fy(r, n) {
  var a = n.mixoutsTo;
  return (
    (Wd = r),
    (br = {}),
    Object.keys(Pr).forEach(function (o) {
      Dy.indexOf(o) === -1 && delete Pr[o];
    }),
    Wd.forEach(function (o) {
      var l = o.mixout ? o.mixout() : {};
      if (
        (Object.keys(l).forEach(function (d) {
          typeof l[d] == 'function' && (a[d] = l[d]),
            ao(l[d]) === 'object' &&
              Object.keys(l[d]).forEach(function (m) {
                a[d] || (a[d] = {}), (a[d][m] = l[d][m]);
              });
        }),
        o.hooks)
      ) {
        var c = o.hooks();
        Object.keys(c).forEach(function (d) {
          br[d] || (br[d] = []), br[d].push(c[d]);
        });
      }
      o.provides && o.provides(Pr);
    }),
    a
  );
}
function Wl(r, n) {
  for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), l = 2; l < a; l++) o[l - 2] = arguments[l];
  var c = br[r] || [];
  return (
    c.forEach(function (d) {
      n = d.apply(null, [n].concat(o));
    }),
    n
  );
}
function Bn(r) {
  for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
  var l = br[r] || [];
  l.forEach(function (c) {
    c.apply(null, a);
  });
}
function Gt() {
  var r = arguments[0],
    n = Array.prototype.slice.call(arguments, 1);
  return Pr[r] ? Pr[r].apply(null, n) : void 0;
}
function Bl(r) {
  r.prefix === 'fa' && (r.prefix = 'fas');
  var n = r.iconName,
    a = r.prefix || bn();
  if (n) return (n = Vn(a, n) || n), $d(dp.definitions, a, n) || $d(Ot.styles, a, n);
}
var dp = new jy(),
  $y = function () {
    (X.autoReplaceSvg = !1), (X.observeMutations = !1), Bn('noAuto');
  },
  Vy = {
    i2svg: function () {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Jt
        ? (Bn('beforeI2svg', n), Gt('pseudoElements2svg', n), Gt('i2svg', n))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        a = n.autoReplaceSvgRoot;
      X.autoReplaceSvg === !1 && (X.autoReplaceSvg = !0),
        (X.observeMutations = !0),
        _y(function () {
          Wy({ autoReplaceSvgRoot: a }), Bn('watch', n);
        });
    },
  },
  Uy = {
    icon: function (n) {
      if (n === null) return null;
      if (ao(n) === 'object' && n.prefix && n.iconName)
        return { prefix: n.prefix, iconName: Vn(n.prefix, n.iconName) || n.iconName };
      if (Array.isArray(n) && n.length === 2) {
        var a = n[1].indexOf('fa-') === 0 ? n[1].slice(3) : n[1],
          o = So(n[0]);
        return { prefix: o, iconName: Vn(o, a) || a };
      }
      if (typeof n == 'string' && (n.indexOf(''.concat(X.cssPrefix, '-')) > -1 || n.match(uy))) {
        var l = xo(n.split(' '), { skipLookups: !0 });
        return { prefix: l.prefix || bn(), iconName: Vn(l.prefix, l.iconName) || l.iconName };
      }
      if (typeof n == 'string') {
        var c = bn();
        return { prefix: c, iconName: Vn(c, n) || n };
      }
    },
  },
  pt = { noAuto: $y, config: X, dom: Vy, parse: Uy, library: dp, findIconDefinition: Bl, toHtml: Ri },
  Wy = function () {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = n.autoReplaceSvgRoot,
      o = a === void 0 ? Ce : a;
    (Object.keys(Ot.styles).length > 0 || X.autoFetchSvg) && Jt && X.autoReplaceSvg && pt.dom.i2svg({ node: o });
  };
function ko(r, n) {
  return (
    Object.defineProperty(r, 'abstract', { get: n }),
    Object.defineProperty(r, 'html', {
      get: function () {
        return r.abstract.map(function (o) {
          return Ri(o);
        });
      },
    }),
    Object.defineProperty(r, 'node', {
      get: function () {
        if (Jt) {
          var o = Ce.createElement('div');
          return (o.innerHTML = r.html), o.children;
        }
      },
    }),
    r
  );
}
function By(r) {
  var n = r.children,
    a = r.main,
    o = r.mask,
    l = r.attributes,
    c = r.styles,
    d = r.transform;
  if (fu(d) && a.found && !o.found) {
    var m = a.width,
      h = a.height,
      g = { x: m / h / 2, y: 0.5 };
    l.style = wo(
      B(B({}, c), {}, { 'transform-origin': ''.concat(g.x + d.x / 16, 'em ').concat(g.y + d.y / 16, 'em') })
    );
  }
  return [{ tag: 'svg', attributes: l, children: n }];
}
function Hy(r) {
  var n = r.prefix,
    a = r.iconName,
    o = r.children,
    l = r.attributes,
    c = r.symbol,
    d = c === !0 ? ''.concat(n, '-').concat(X.cssPrefix, '-').concat(a) : c;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: B(B({}, l), {}, { id: d }), children: o }],
    },
  ];
}
function hu(r) {
  var n = r.icons,
    a = n.main,
    o = n.mask,
    l = r.prefix,
    c = r.iconName,
    d = r.transform,
    m = r.symbol,
    h = r.title,
    g = r.maskId,
    v = r.titleId,
    w = r.extra,
    S = r.watchable,
    N = S === void 0 ? !1 : S,
    R = o.found ? o : a,
    _ = R.width,
    L = R.height,
    Y = l === 'fak',
    A = [X.replacementClass, c ? ''.concat(X.cssPrefix, '-').concat(c) : '']
      .filter(function (_e) {
        return w.classes.indexOf(_e) === -1;
      })
      .filter(function (_e) {
        return _e !== '' || !!_e;
      })
      .concat(w.classes)
      .join(' '),
    V = {
      children: [],
      attributes: B(
        B({}, w.attributes),
        {},
        {
          'data-prefix': l,
          'data-icon': c,
          class: A,
          role: w.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(_, ' ').concat(L),
        }
      ),
    },
    $ = Y && !~w.classes.indexOf('fa-fw') ? { width: ''.concat((_ / L) * 16 * 0.0625, 'em') } : {};
  N && (V.attributes[Wn] = ''),
    h &&
      (V.children.push({
        tag: 'title',
        attributes: { id: V.attributes['aria-labelledby'] || 'title-'.concat(v || Ci()) },
        children: [h],
      }),
      delete V.attributes.title);
  var O = B(
      B({}, V),
      {},
      { prefix: l, iconName: c, main: a, mask: o, maskId: g, transform: d, symbol: m, styles: B(B({}, $), w.styles) }
    ),
    J =
      o.found && a.found
        ? Gt('generateAbstractMask', O) || { children: [], attributes: {} }
        : Gt('generateAbstractIcon', O) || { children: [], attributes: {} },
    Z = J.children,
    ve = J.attributes;
  return (O.children = Z), (O.attributes = ve), m ? Hy(O) : By(O);
}
function Bd(r) {
  var n = r.content,
    a = r.width,
    o = r.height,
    l = r.transform,
    c = r.title,
    d = r.extra,
    m = r.watchable,
    h = m === void 0 ? !1 : m,
    g = B(B(B({}, d.attributes), c ? { title: c } : {}), {}, { class: d.classes.join(' ') });
  h && (g[Wn] = '');
  var v = B({}, d.styles);
  fu(l) && ((v.transform = by({ transform: l, width: a, height: o })), (v['-webkit-transform'] = v.transform));
  var w = wo(v);
  w.length > 0 && (g.style = w);
  var S = [];
  return (
    S.push({ tag: 'span', attributes: g, children: [n] }),
    c && S.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [c] }),
    S
  );
}
function Yy(r) {
  var n = r.content,
    a = r.title,
    o = r.extra,
    l = B(B(B({}, o.attributes), a ? { title: a } : {}), {}, { class: o.classes.join(' ') }),
    c = wo(o.styles);
  c.length > 0 && (l.style = c);
  var d = [];
  return (
    d.push({ tag: 'span', attributes: l, children: [n] }),
    a && d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [a] }),
    d
  );
}
var El = Ot.styles;
function Hl(r) {
  var n = r[0],
    a = r[1],
    o = r.slice(4),
    l = au(o, 1),
    c = l[0],
    d = null;
  return (
    Array.isArray(c)
      ? (d = {
          tag: 'g',
          attributes: { class: ''.concat(X.cssPrefix, '-').concat($n.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: { class: ''.concat(X.cssPrefix, '-').concat($n.SECONDARY), fill: 'currentColor', d: c[0] },
            },
            {
              tag: 'path',
              attributes: { class: ''.concat(X.cssPrefix, '-').concat($n.PRIMARY), fill: 'currentColor', d: c[1] },
            },
          ],
        })
      : (d = { tag: 'path', attributes: { fill: 'currentColor', d: c } }),
    { found: !0, width: n, height: a, icon: d }
  );
}
var qy = { found: !1, width: 512, height: 512 };
function Ky(r, n) {
  !Jm &&
    !X.showMissingIcons &&
    r &&
    console.error('Icon with name "'.concat(r, '" and prefix "').concat(n, '" is missing.'));
}
function Yl(r, n) {
  var a = n;
  return (
    n === 'fa' && X.styleDefault !== null && (n = bn()),
    new Promise(function (o, l) {
      if ((Gt('missingIconAbstract'), a === 'fa')) {
        var c = fp(r) || {};
        (r = c.iconName || r), (n = c.prefix || n);
      }
      if (r && n && El[n] && El[n][r]) {
        var d = El[n][r];
        return o(Hl(d));
      }
      Ky(r, n), o(B(B({}, qy), {}, { icon: X.showMissingIcons && r ? Gt('missingIconAbstract') || {} : {} }));
    })
  );
}
var Hd = function () {},
  ql = X.measurePerformance && Ba && Ba.mark && Ba.measure ? Ba : { mark: Hd, measure: Hd },
  hi = 'FA "6.5.2"',
  Qy = function (n) {
    return (
      ql.mark(''.concat(hi, ' ').concat(n, ' begins')),
      function () {
        return mp(n);
      }
    );
  },
  mp = function (n) {
    ql.mark(''.concat(hi, ' ').concat(n, ' ends')),
      ql.measure(
        ''.concat(hi, ' ').concat(n),
        ''.concat(hi, ' ').concat(n, ' begins'),
        ''.concat(hi, ' ').concat(n, ' ends')
      );
  },
  gu = { begin: Qy, end: mp },
  to = function () {};
function Yd(r) {
  var n = r.getAttribute ? r.getAttribute(Wn) : null;
  return typeof n == 'string';
}
function Xy(r) {
  var n = r.getAttribute ? r.getAttribute(su) : null,
    a = r.getAttribute ? r.getAttribute(lu) : null;
  return n && a;
}
function Gy(r) {
  return r && r.classList && r.classList.contains && r.classList.contains(X.replacementClass);
}
function Jy() {
  if (X.autoReplaceSvg === !0) return no.replace;
  var r = no[X.autoReplaceSvg];
  return r || no.replace;
}
function Zy(r) {
  return Ce.createElementNS('http://www.w3.org/2000/svg', r);
}
function e1(r) {
  return Ce.createElement(r);
}
function pp(r) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    a = n.ceFn,
    o = a === void 0 ? (r.tag === 'svg' ? Zy : e1) : a;
  if (typeof r == 'string') return Ce.createTextNode(r);
  var l = o(r.tag);
  Object.keys(r.attributes || []).forEach(function (d) {
    l.setAttribute(d, r.attributes[d]);
  });
  var c = r.children || [];
  return (
    c.forEach(function (d) {
      l.appendChild(pp(d, { ceFn: o }));
    }),
    l
  );
}
function t1(r) {
  var n = ' '.concat(r.outerHTML, ' ');
  return (n = ''.concat(n, 'Font Awesome fontawesome.com ')), n;
}
var no = {
  replace: function (n) {
    var a = n[0];
    if (a.parentNode)
      if (
        (n[1].forEach(function (l) {
          a.parentNode.insertBefore(pp(l), a);
        }),
        a.getAttribute(Wn) === null && X.keepOriginalSource)
      ) {
        var o = Ce.createComment(t1(a));
        a.parentNode.replaceChild(o, a);
      } else a.remove();
  },
  nest: function (n) {
    var a = n[0],
      o = n[1];
    if (~cu(a).indexOf(X.replacementClass)) return no.replace(n);
    var l = new RegExp(''.concat(X.cssPrefix, '-.*'));
    if ((delete o[0].attributes.id, o[0].attributes.class)) {
      var c = o[0].attributes.class.split(' ').reduce(
        function (m, h) {
          return h === X.replacementClass || h.match(l) ? m.toSvg.push(h) : m.toNode.push(h), m;
        },
        { toNode: [], toSvg: [] }
      );
      (o[0].attributes.class = c.toSvg.join(' ')),
        c.toNode.length === 0 ? a.removeAttribute('class') : a.setAttribute('class', c.toNode.join(' '));
    }
    var d = o.map(function (m) {
      return Ri(m);
    }).join(`
`);
    a.setAttribute(Wn, ''), (a.innerHTML = d);
  },
};
function qd(r) {
  r();
}
function hp(r, n) {
  var a = typeof n == 'function' ? n : to;
  if (r.length === 0) a();
  else {
    var o = qd;
    X.mutateApproach === oy && (o = kn.requestAnimationFrame || qd),
      o(function () {
        var l = Jy(),
          c = gu.begin('mutate');
        r.map(l), c(), a();
      });
  }
}
var vu = !1;
function gp() {
  vu = !0;
}
function Kl() {
  vu = !1;
}
var so = null;
function Kd(r) {
  if (jd && X.observeMutations) {
    var n = r.treeCallback,
      a = n === void 0 ? to : n,
      o = r.nodeCallback,
      l = o === void 0 ? to : o,
      c = r.pseudoElementsCallback,
      d = c === void 0 ? to : c,
      m = r.observeMutationsRoot,
      h = m === void 0 ? Ce : m;
    (so = new jd(function (g) {
      if (!vu) {
        var v = bn();
        _r(g).forEach(function (w) {
          if (
            (w.type === 'childList' &&
              w.addedNodes.length > 0 &&
              !Yd(w.addedNodes[0]) &&
              (X.searchPseudoElements && d(w.target), a(w.target)),
            w.type === 'attributes' && w.target.parentNode && X.searchPseudoElements && d(w.target.parentNode),
            w.type === 'attributes' && Yd(w.target) && ~my.indexOf(w.attributeName))
          )
            if (w.attributeName === 'class' && Xy(w.target)) {
              var S = xo(cu(w.target)),
                N = S.prefix,
                R = S.iconName;
              w.target.setAttribute(su, N || v), R && w.target.setAttribute(lu, R);
            } else Gy(w.target) && l(w.target);
        });
      }
    })),
      Jt && so.observe(h, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
  }
}
function n1() {
  so && so.disconnect();
}
function r1(r) {
  var n = r.getAttribute('style'),
    a = [];
  return (
    n &&
      (a = n.split(';').reduce(function (o, l) {
        var c = l.split(':'),
          d = c[0],
          m = c.slice(1);
        return d && m.length > 0 && (o[d] = m.join(':').trim()), o;
      }, {})),
    a
  );
}
function i1(r) {
  var n = r.getAttribute('data-prefix'),
    a = r.getAttribute('data-icon'),
    o = r.innerText !== void 0 ? r.innerText.trim() : '',
    l = xo(cu(r));
  return (
    l.prefix || (l.prefix = bn()),
    n && a && ((l.prefix = n), (l.iconName = a)),
    (l.iconName && l.prefix) ||
      (l.prefix && o.length > 0 && (l.iconName = Ay(l.prefix, r.innerText) || mu(l.prefix, Vl(r.innerText))),
      !l.iconName &&
        X.autoFetchSvg &&
        r.firstChild &&
        r.firstChild.nodeType === Node.TEXT_NODE &&
        (l.iconName = r.firstChild.data)),
    l
  );
}
function a1(r) {
  var n = _r(r.attributes).reduce(function (l, c) {
      return l.name !== 'class' && l.name !== 'style' && (l[c.name] = c.value), l;
    }, {}),
    a = r.getAttribute('title'),
    o = r.getAttribute('data-fa-title-id');
  return (
    X.autoA11y &&
      (a
        ? (n['aria-labelledby'] = ''.concat(X.replacementClass, '-title-').concat(o || Ci()))
        : ((n['aria-hidden'] = 'true'), (n.focusable = 'false'))),
    n
  );
}
function o1() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Dt,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Qd(r) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 },
    a = i1(r),
    o = a.iconName,
    l = a.prefix,
    c = a.rest,
    d = a1(r),
    m = Wl('parseNodeAttributes', {}, r),
    h = n.styleParser ? r1(r) : [];
  return B(
    {
      iconName: o,
      title: r.getAttribute('title'),
      titleId: r.getAttribute('data-fa-title-id'),
      prefix: l,
      transform: Dt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: c, styles: h, attributes: d },
    },
    m
  );
}
var s1 = Ot.styles;
function vp(r) {
  var n = X.autoReplaceSvg === 'nest' ? Qd(r, { styleParser: !1 }) : Qd(r);
  return ~n.extra.classes.indexOf(Zm) ? Gt('generateLayersText', r, n) : Gt('generateSvgReplacementMutation', r, n);
}
var Cn = new Set();
uu.map(function (r) {
  Cn.add('fa-'.concat(r));
});
Object.keys(Si[be]).map(Cn.add.bind(Cn));
Object.keys(Si[Re]).map(Cn.add.bind(Cn));
Cn = Oi(Cn);
function Xd(r) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Jt) return Promise.resolve();
  var a = Ce.documentElement.classList,
    o = function (w) {
      return a.add(''.concat(Dd, '-').concat(w));
    },
    l = function (w) {
      return a.remove(''.concat(Dd, '-').concat(w));
    },
    c = X.autoFetchSvg
      ? Cn
      : uu
          .map(function (v) {
            return 'fa-'.concat(v);
          })
          .concat(Object.keys(s1));
  c.includes('fa') || c.push('fa');
  var d = ['.'.concat(Zm, ':not([').concat(Wn, '])')]
    .concat(
      c.map(function (v) {
        return '.'.concat(v, ':not([').concat(Wn, '])');
      })
    )
    .join(', ');
  if (d.length === 0) return Promise.resolve();
  var m = [];
  try {
    m = _r(r.querySelectorAll(d));
  } catch {}
  if (m.length > 0) o('pending'), l('complete');
  else return Promise.resolve();
  var h = gu.begin('onTree'),
    g = m.reduce(function (v, w) {
      try {
        var S = vp(w);
        S && v.push(S);
      } catch (N) {
        Jm || (N.name === 'MissingIcon' && console.error(N));
      }
      return v;
    }, []);
  return new Promise(function (v, w) {
    Promise.all(g)
      .then(function (S) {
        hp(S, function () {
          o('active'), o('complete'), l('pending'), typeof n == 'function' && n(), h(), v();
        });
      })
      .catch(function (S) {
        h(), w(S);
      });
  });
}
function l1(r) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  vp(r).then(function (a) {
    a && hp([a], n);
  });
}
function u1(r) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = (n || {}).icon ? n : Bl(n || {}),
      l = a.mask;
    return l && (l = (l || {}).icon ? l : Bl(l || {})), r(o, B(B({}, a), {}, { mask: l }));
  };
}
var c1 = function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = a.transform,
      l = o === void 0 ? Dt : o,
      c = a.symbol,
      d = c === void 0 ? !1 : c,
      m = a.mask,
      h = m === void 0 ? null : m,
      g = a.maskId,
      v = g === void 0 ? null : g,
      w = a.title,
      S = w === void 0 ? null : w,
      N = a.titleId,
      R = N === void 0 ? null : N,
      _ = a.classes,
      L = _ === void 0 ? [] : _,
      Y = a.attributes,
      A = Y === void 0 ? {} : Y,
      V = a.styles,
      $ = V === void 0 ? {} : V;
    if (n) {
      var O = n.prefix,
        J = n.iconName,
        Z = n.icon;
      return ko(B({ type: 'icon' }, n), function () {
        return (
          Bn('beforeDOMElementCreation', { iconDefinition: n, params: a }),
          X.autoA11y &&
            (S
              ? (A['aria-labelledby'] = ''.concat(X.replacementClass, '-title-').concat(R || Ci()))
              : ((A['aria-hidden'] = 'true'), (A.focusable = 'false'))),
          hu({
            icons: { main: Hl(Z), mask: h ? Hl(h.icon) : { found: !1, width: null, height: null, icon: {} } },
            prefix: O,
            iconName: J,
            transform: B(B({}, Dt), l),
            symbol: d,
            title: S,
            maskId: v,
            titleId: R,
            extra: { attributes: A, styles: $, classes: L },
          })
        );
      });
    }
  },
  f1 = {
    mixout: function () {
      return { icon: u1(c1) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (a) {
          return (a.treeCallback = Xd), (a.nodeCallback = l1), a;
        },
      };
    },
    provides: function (n) {
      (n.i2svg = function (a) {
        var o = a.node,
          l = o === void 0 ? Ce : o,
          c = a.callback,
          d = c === void 0 ? function () {} : c;
        return Xd(l, d);
      }),
        (n.generateSvgReplacementMutation = function (a, o) {
          var l = o.iconName,
            c = o.title,
            d = o.titleId,
            m = o.prefix,
            h = o.transform,
            g = o.symbol,
            v = o.mask,
            w = o.maskId,
            S = o.extra;
          return new Promise(function (N, R) {
            Promise.all([
              Yl(l, m),
              v.iconName ? Yl(v.iconName, v.prefix) : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
            ])
              .then(function (_) {
                var L = au(_, 2),
                  Y = L[0],
                  A = L[1];
                N([
                  a,
                  hu({
                    icons: { main: Y, mask: A },
                    prefix: m,
                    iconName: l,
                    transform: h,
                    symbol: g,
                    maskId: w,
                    title: c,
                    titleId: d,
                    extra: S,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(R);
          });
        }),
        (n.generateAbstractIcon = function (a) {
          var o = a.children,
            l = a.attributes,
            c = a.main,
            d = a.transform,
            m = a.styles,
            h = wo(m);
          h.length > 0 && (l.style = h);
          var g;
          return (
            fu(d) &&
              (g = Gt('generateAbstractTransformGrouping', {
                main: c,
                transform: d,
                containerWidth: c.width,
                iconWidth: c.width,
              })),
            o.push(g || c.icon),
            { children: o, attributes: l }
          );
        });
    },
  },
  d1 = {
    mixout: function () {
      return {
        layer: function (a) {
          var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            l = o.classes,
            c = l === void 0 ? [] : l;
          return ko({ type: 'layer' }, function () {
            Bn('beforeDOMElementCreation', { assembler: a, params: o });
            var d = [];
            return (
              a(function (m) {
                Array.isArray(m)
                  ? m.map(function (h) {
                      d = d.concat(h.abstract);
                    })
                  : (d = d.concat(m.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: { class: [''.concat(X.cssPrefix, '-layers')].concat(Oi(c)).join(' ') },
                  children: d,
                },
              ]
            );
          });
        },
      };
    },
  },
  m1 = {
    mixout: function () {
      return {
        counter: function (a) {
          var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            l = o.title,
            c = l === void 0 ? null : l,
            d = o.classes,
            m = d === void 0 ? [] : d,
            h = o.attributes,
            g = h === void 0 ? {} : h,
            v = o.styles,
            w = v === void 0 ? {} : v;
          return ko({ type: 'counter', content: a }, function () {
            return (
              Bn('beforeDOMElementCreation', { content: a, params: o }),
              Yy({
                content: a.toString(),
                title: c,
                extra: { attributes: g, styles: w, classes: [''.concat(X.cssPrefix, '-layers-counter')].concat(Oi(m)) },
              })
            );
          });
        },
      };
    },
  },
  p1 = {
    mixout: function () {
      return {
        text: function (a) {
          var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            l = o.transform,
            c = l === void 0 ? Dt : l,
            d = o.title,
            m = d === void 0 ? null : d,
            h = o.classes,
            g = h === void 0 ? [] : h,
            v = o.attributes,
            w = v === void 0 ? {} : v,
            S = o.styles,
            N = S === void 0 ? {} : S;
          return ko({ type: 'text', content: a }, function () {
            return (
              Bn('beforeDOMElementCreation', { content: a, params: o }),
              Bd({
                content: a,
                transform: B(B({}, Dt), c),
                title: m,
                extra: { attributes: w, styles: N, classes: [''.concat(X.cssPrefix, '-layers-text')].concat(Oi(g)) },
              })
            );
          });
        },
      };
    },
    provides: function (n) {
      n.generateLayersText = function (a, o) {
        var l = o.title,
          c = o.transform,
          d = o.extra,
          m = null,
          h = null;
        if (Qm) {
          var g = parseInt(getComputedStyle(a).fontSize, 10),
            v = a.getBoundingClientRect();
          (m = v.width / g), (h = v.height / g);
        }
        return (
          X.autoA11y && !l && (d.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            a,
            Bd({ content: a.innerHTML, width: m, height: h, transform: c, title: l, extra: d, watchable: !0 }),
          ])
        );
      };
    },
  },
  h1 = new RegExp('"', 'ug'),
  Gd = [1105920, 1112319];
function g1(r) {
  var n = r.replace(h1, ''),
    a = Oy(n, 0),
    o = a >= Gd[0] && a <= Gd[1],
    l = n.length === 2 ? n[0] === n[1] : !1;
  return { value: Vl(l ? n[0] : n), isSecondary: o || l };
}
function Jd(r, n) {
  var a = ''.concat(ay).concat(n.replace(':', '-'));
  return new Promise(function (o, l) {
    if (r.getAttribute(a) !== null) return o();
    var c = _r(r.children),
      d = c.filter(function (Z) {
        return Z.getAttribute($l) === n;
      })[0],
      m = kn.getComputedStyle(r, n),
      h = m.getPropertyValue('font-family').match(cy),
      g = m.getPropertyValue('font-weight'),
      v = m.getPropertyValue('content');
    if (d && !h) return r.removeChild(d), o();
    if (h && v !== 'none' && v !== '') {
      var w = m.getPropertyValue('content'),
        S = ~['Sharp'].indexOf(h[2]) ? Re : be,
        N = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(h[2])
          ? xi[S][h[2].toLowerCase()]
          : fy[S][g],
        R = g1(w),
        _ = R.value,
        L = R.isSecondary,
        Y = h[0].startsWith('FontAwesome'),
        A = mu(N, _),
        V = A;
      if (Y) {
        var $ = zy(_);
        $.iconName && $.prefix && ((A = $.iconName), (N = $.prefix));
      }
      if (A && !L && (!d || d.getAttribute(su) !== N || d.getAttribute(lu) !== V)) {
        r.setAttribute(a, V), d && r.removeChild(d);
        var O = o1(),
          J = O.extra;
        (J.attributes[$l] = n),
          Yl(A, N)
            .then(function (Z) {
              var ve = hu(
                  B(B({}, O), {}, { icons: { main: Z, mask: pu() }, prefix: N, iconName: V, extra: J, watchable: !0 })
                ),
                _e = Ce.createElementNS('http://www.w3.org/2000/svg', 'svg');
              n === '::before' ? r.insertBefore(_e, r.firstChild) : r.appendChild(_e),
                (_e.outerHTML = ve.map(function (Ye) {
                  return Ri(Ye);
                }).join(`
`)),
                r.removeAttribute(a),
                o();
            })
            .catch(l);
      } else o();
    } else o();
  });
}
function v1(r) {
  return Promise.all([Jd(r, '::before'), Jd(r, '::after')]);
}
function y1(r) {
  return (
    r.parentNode !== document.head &&
    !~sy.indexOf(r.tagName.toUpperCase()) &&
    !r.getAttribute($l) &&
    (!r.parentNode || r.parentNode.tagName !== 'svg')
  );
}
function Zd(r) {
  if (Jt)
    return new Promise(function (n, a) {
      var o = _r(r.querySelectorAll('*')).filter(y1).map(v1),
        l = gu.begin('searchPseudoElements');
      gp(),
        Promise.all(o)
          .then(function () {
            l(), Kl(), n();
          })
          .catch(function () {
            l(), Kl(), a();
          });
    });
}
var w1 = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (a) {
          return (a.pseudoElementsCallback = Zd), a;
        },
      };
    },
    provides: function (n) {
      n.pseudoElements2svg = function (a) {
        var o = a.node,
          l = o === void 0 ? Ce : o;
        X.searchPseudoElements && Zd(l);
      };
    },
  },
  em = !1,
  S1 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            gp(), (em = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Kd(Wl('mutationObserverCallbacks', {}));
        },
        noAuto: function () {
          n1();
        },
        watch: function (a) {
          var o = a.observeMutationsRoot;
          em ? Kl() : Kd(Wl('mutationObserverCallbacks', { observeMutationsRoot: o }));
        },
      };
    },
  },
  tm = function (n) {
    var a = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return n
      .toLowerCase()
      .split(' ')
      .reduce(function (o, l) {
        var c = l.toLowerCase().split('-'),
          d = c[0],
          m = c.slice(1).join('-');
        if (d && m === 'h') return (o.flipX = !0), o;
        if (d && m === 'v') return (o.flipY = !0), o;
        if (((m = parseFloat(m)), isNaN(m))) return o;
        switch (d) {
          case 'grow':
            o.size = o.size + m;
            break;
          case 'shrink':
            o.size = o.size - m;
            break;
          case 'left':
            o.x = o.x - m;
            break;
          case 'right':
            o.x = o.x + m;
            break;
          case 'up':
            o.y = o.y - m;
            break;
          case 'down':
            o.y = o.y + m;
            break;
          case 'rotate':
            o.rotate = o.rotate + m;
            break;
        }
        return o;
      }, a);
  },
  x1 = {
    mixout: function () {
      return {
        parse: {
          transform: function (a) {
            return tm(a);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (a, o) {
          var l = o.getAttribute('data-fa-transform');
          return l && (a.transform = tm(l)), a;
        },
      };
    },
    provides: function (n) {
      n.generateAbstractTransformGrouping = function (a) {
        var o = a.main,
          l = a.transform,
          c = a.containerWidth,
          d = a.iconWidth,
          m = { transform: 'translate('.concat(c / 2, ' 256)') },
          h = 'translate('.concat(l.x * 32, ', ').concat(l.y * 32, ') '),
          g = 'scale('
            .concat((l.size / 16) * (l.flipX ? -1 : 1), ', ')
            .concat((l.size / 16) * (l.flipY ? -1 : 1), ') '),
          v = 'rotate('.concat(l.rotate, ' 0 0)'),
          w = { transform: ''.concat(h, ' ').concat(g, ' ').concat(v) },
          S = { transform: 'translate('.concat((d / 2) * -1, ' -256)') },
          N = { outer: m, inner: w, path: S };
        return {
          tag: 'g',
          attributes: B({}, N.outer),
          children: [
            {
              tag: 'g',
              attributes: B({}, N.inner),
              children: [
                { tag: o.icon.tag, children: o.icon.children, attributes: B(B({}, o.icon.attributes), N.path) },
              ],
            },
          ],
        };
      };
    },
  },
  _l = { x: 0, y: 0, width: '100%', height: '100%' };
function nm(r) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return r.attributes && (r.attributes.fill || n) && (r.attributes.fill = 'black'), r;
}
function k1(r) {
  return r.tag === 'g' ? r.children : [r];
}
var b1 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (a, o) {
          var l = o.getAttribute('data-fa-mask'),
            c = l
              ? xo(
                  l.split(' ').map(function (d) {
                    return d.trim();
                  })
                )
              : pu();
          return c.prefix || (c.prefix = bn()), (a.mask = c), (a.maskId = o.getAttribute('data-fa-mask-id')), a;
        },
      };
    },
    provides: function (n) {
      n.generateAbstractMask = function (a) {
        var o = a.children,
          l = a.attributes,
          c = a.main,
          d = a.mask,
          m = a.maskId,
          h = a.transform,
          g = c.width,
          v = c.icon,
          w = d.width,
          S = d.icon,
          N = ky({ transform: h, containerWidth: w, iconWidth: g }),
          R = { tag: 'rect', attributes: B(B({}, _l), {}, { fill: 'white' }) },
          _ = v.children ? { children: v.children.map(nm) } : {},
          L = {
            tag: 'g',
            attributes: B({}, N.inner),
            children: [nm(B({ tag: v.tag, attributes: B(B({}, v.attributes), N.path) }, _))],
          },
          Y = { tag: 'g', attributes: B({}, N.outer), children: [L] },
          A = 'mask-'.concat(m || Ci()),
          V = 'clip-'.concat(m || Ci()),
          $ = {
            tag: 'mask',
            attributes: B(B({}, _l), {}, { id: A, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }),
            children: [R, Y],
          },
          O = { tag: 'defs', children: [{ tag: 'clipPath', attributes: { id: V }, children: k1(S) }, $] };
        return (
          o.push(O, {
            tag: 'rect',
            attributes: B(
              { fill: 'currentColor', 'clip-path': 'url(#'.concat(V, ')'), mask: 'url(#'.concat(A, ')') },
              _l
            ),
          }),
          { children: o, attributes: l }
        );
      };
    },
  },
  C1 = {
    provides: function (n) {
      var a = !1;
      kn.matchMedia && (a = kn.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (n.missingIconAbstract = function () {
          var o = [],
            l = { fill: 'currentColor' },
            c = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          o.push({
            tag: 'path',
            attributes: B(
              B({}, l),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              }
            ),
          });
          var d = B(B({}, c), {}, { attributeName: 'opacity' }),
            m = { tag: 'circle', attributes: B(B({}, l), {}, { cx: '256', cy: '364', r: '28' }), children: [] };
          return (
            a ||
              m.children.push(
                { tag: 'animate', attributes: B(B({}, c), {}, { attributeName: 'r', values: '28;14;28;28;14;28;' }) },
                { tag: 'animate', attributes: B(B({}, d), {}, { values: '1;0;1;1;0;1;' }) }
              ),
            o.push(m),
            o.push({
              tag: 'path',
              attributes: B(
                B({}, l),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                }
              ),
              children: a ? [] : [{ tag: 'animate', attributes: B(B({}, d), {}, { values: '1;0;0;0;0;1;' }) }],
            }),
            a ||
              o.push({
                tag: 'path',
                attributes: B(
                  B({}, l),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                  }
                ),
                children: [{ tag: 'animate', attributes: B(B({}, d), {}, { values: '0;0;1;1;0;0;' }) }],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: o }
          );
        });
    },
  },
  P1 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (a, o) {
          var l = o.getAttribute('data-fa-symbol'),
            c = l === null ? !1 : l === '' ? !0 : l;
          return (a.symbol = c), a;
        },
      };
    },
  },
  E1 = [Py, f1, d1, m1, p1, w1, S1, x1, b1, C1, P1];
Fy(E1, { mixoutsTo: pt });
pt.noAuto;
pt.config;
pt.library;
pt.dom;
var Ql = pt.parse;
pt.findIconDefinition;
pt.toHtml;
var _1 = pt.icon;
pt.layer;
pt.text;
pt.counter;
var Nl = { exports: {} },
  Ol,
  rm;
function N1() {
  if (rm) return Ol;
  rm = 1;
  var r = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return (Ol = r), Ol;
}
var Ll, im;
function O1() {
  if (im) return Ll;
  im = 1;
  var r = N1();
  function n() {}
  function a() {}
  return (
    (a.resetWarningCache = n),
    (Ll = function () {
      function o(d, m, h, g, v, w) {
        if (w !== r) {
          var S = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((S.name = 'Invariant Violation'), S);
        }
      }
      o.isRequired = o;
      function l() {
        return o;
      }
      var c = {
        array: o,
        bigint: o,
        bool: o,
        func: o,
        number: o,
        object: o,
        string: o,
        symbol: o,
        any: o,
        arrayOf: l,
        element: o,
        elementType: o,
        instanceOf: l,
        node: o,
        objectOf: l,
        oneOf: l,
        oneOfType: l,
        shape: l,
        exact: l,
        checkPropTypes: a,
        resetWarningCache: n,
      };
      return (c.PropTypes = c), c;
    }),
    Ll
  );
}
var am;
function L1() {
  return am || ((am = 1), (Nl.exports = O1()())), Nl.exports;
}
var R1 = L1();
const se = ho(R1);
function om(r, n) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    n &&
      (o = o.filter(function (l) {
        return Object.getOwnPropertyDescriptor(r, l).enumerable;
      })),
      a.push.apply(a, o);
  }
  return a;
}
function xn(r) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? om(Object(a), !0).forEach(function (o) {
          Cr(r, o, a[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
      : om(Object(a)).forEach(function (o) {
          Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(a, o));
        });
  }
  return r;
}
function lo(r) {
  '@babel/helpers - typeof';
  return (
    (lo =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n && typeof Symbol == 'function' && n.constructor === Symbol && n !== Symbol.prototype
              ? 'symbol'
              : typeof n;
          }),
    lo(r)
  );
}
function Cr(r, n, a) {
  return (
    n in r ? Object.defineProperty(r, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (r[n] = a), r
  );
}
function T1(r, n) {
  if (r == null) return {};
  var a = {},
    o = Object.keys(r),
    l,
    c;
  for (c = 0; c < o.length; c++) (l = o[c]), !(n.indexOf(l) >= 0) && (a[l] = r[l]);
  return a;
}
function I1(r, n) {
  if (r == null) return {};
  var a = T1(r, n),
    o,
    l;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    for (l = 0; l < c.length; l++)
      (o = c[l]), !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(r, o) && (a[o] = r[o]);
  }
  return a;
}
function Xl(r) {
  return M1(r) || A1(r) || z1(r) || j1();
}
function M1(r) {
  if (Array.isArray(r)) return Gl(r);
}
function A1(r) {
  if ((typeof Symbol < 'u' && r[Symbol.iterator] != null) || r['@@iterator'] != null) return Array.from(r);
}
function z1(r, n) {
  if (r) {
    if (typeof r == 'string') return Gl(r, n);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if ((a === 'Object' && r.constructor && (a = r.constructor.name), a === 'Map' || a === 'Set')) return Array.from(r);
    if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Gl(r, n);
  }
}
function Gl(r, n) {
  (n == null || n > r.length) && (n = r.length);
  for (var a = 0, o = new Array(n); a < n; a++) o[a] = r[a];
  return o;
}
function j1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function D1(r) {
  var n,
    a = r.beat,
    o = r.fade,
    l = r.beatFade,
    c = r.bounce,
    d = r.shake,
    m = r.flash,
    h = r.spin,
    g = r.spinPulse,
    v = r.spinReverse,
    w = r.pulse,
    S = r.fixedWidth,
    N = r.inverse,
    R = r.border,
    _ = r.listItem,
    L = r.flip,
    Y = r.size,
    A = r.rotation,
    V = r.pull,
    $ =
      ((n = {
        'fa-beat': a,
        'fa-fade': o,
        'fa-beat-fade': l,
        'fa-bounce': c,
        'fa-shake': d,
        'fa-flash': m,
        'fa-spin': h,
        'fa-spin-reverse': v,
        'fa-spin-pulse': g,
        'fa-pulse': w,
        'fa-fw': S,
        'fa-inverse': N,
        'fa-border': R,
        'fa-li': _,
        'fa-flip': L === !0,
        'fa-flip-horizontal': L === 'horizontal' || L === 'both',
        'fa-flip-vertical': L === 'vertical' || L === 'both',
      }),
      Cr(n, 'fa-'.concat(Y), typeof Y < 'u' && Y !== null),
      Cr(n, 'fa-rotate-'.concat(A), typeof A < 'u' && A !== null && A !== 0),
      Cr(n, 'fa-pull-'.concat(V), typeof V < 'u' && V !== null),
      Cr(n, 'fa-swap-opacity', r.swapOpacity),
      n);
  return Object.keys($)
    .map(function (O) {
      return $[O] ? O : null;
    })
    .filter(function (O) {
      return O;
    });
}
function F1(r) {
  return (r = r - 0), r === r;
}
function yp(r) {
  return F1(r)
    ? r
    : ((r = r.replace(/[\-_\s]+(.)?/g, function (n, a) {
        return a ? a.toUpperCase() : '';
      })),
      r.substr(0, 1).toLowerCase() + r.substr(1));
}
var $1 = ['style'];
function V1(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function U1(r) {
  return r
    .split(';')
    .map(function (n) {
      return n.trim();
    })
    .filter(function (n) {
      return n;
    })
    .reduce(function (n, a) {
      var o = a.indexOf(':'),
        l = yp(a.slice(0, o)),
        c = a.slice(o + 1).trim();
      return l.startsWith('webkit') ? (n[V1(l)] = c) : (n[l] = c), n;
    }, {});
}
function wp(r, n) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof n == 'string') return n;
  var o = (n.children || []).map(function (h) {
      return wp(r, h);
    }),
    l = Object.keys(n.attributes || {}).reduce(
      function (h, g) {
        var v = n.attributes[g];
        switch (g) {
          case 'class':
            (h.attrs.className = v), delete n.attributes.class;
            break;
          case 'style':
            h.attrs.style = U1(v);
            break;
          default:
            g.indexOf('aria-') === 0 || g.indexOf('data-') === 0
              ? (h.attrs[g.toLowerCase()] = v)
              : (h.attrs[yp(g)] = v);
        }
        return h;
      },
      { attrs: {} }
    ),
    c = a.style,
    d = c === void 0 ? {} : c,
    m = I1(a, $1);
  return (l.attrs.style = xn(xn({}, l.attrs.style), d)), r.apply(void 0, [n.tag, xn(xn({}, l.attrs), m)].concat(Xl(o)));
}
var Sp = !1;
try {
  Sp = !0;
} catch {}
function W1() {
  if (!Sp && console && typeof console.error == 'function') {
    var r;
    (r = console).error.apply(r, arguments);
  }
}
function sm(r) {
  if (r && lo(r) === 'object' && r.prefix && r.iconName && r.icon) return r;
  if (Ql.icon) return Ql.icon(r);
  if (r === null) return null;
  if (r && lo(r) === 'object' && r.prefix && r.iconName) return r;
  if (Array.isArray(r) && r.length === 2) return { prefix: r[0], iconName: r[1] };
  if (typeof r == 'string') return { prefix: 'fas', iconName: r };
}
function Rl(r, n) {
  return (Array.isArray(n) && n.length > 0) || (!Array.isArray(n) && n) ? Cr({}, r, n) : {};
}
var Ti = go.forwardRef(function (r, n) {
  var a = r.icon,
    o = r.mask,
    l = r.symbol,
    c = r.className,
    d = r.title,
    m = r.titleId,
    h = r.maskId,
    g = sm(a),
    v = Rl('classes', [].concat(Xl(D1(r)), Xl(c.split(' ')))),
    w = Rl('transform', typeof r.transform == 'string' ? Ql.transform(r.transform) : r.transform),
    S = Rl('mask', sm(o)),
    N = _1(g, xn(xn(xn(xn({}, v), w), S), {}, { symbol: l, title: d, titleId: m, maskId: h }));
  if (!N) return W1('Could not find icon', g), null;
  var R = N.abstract,
    _ = { ref: n };
  return (
    Object.keys(r).forEach(function (L) {
      Ti.defaultProps.hasOwnProperty(L) || (_[L] = r[L]);
    }),
    B1(R[0], _)
  );
});
Ti.displayName = 'FontAwesomeIcon';
Ti.propTypes = {
  beat: se.bool,
  border: se.bool,
  beatFade: se.bool,
  bounce: se.bool,
  className: se.string,
  fade: se.bool,
  flash: se.bool,
  mask: se.oneOfType([se.object, se.array, se.string]),
  maskId: se.string,
  fixedWidth: se.bool,
  inverse: se.bool,
  flip: se.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: se.oneOfType([se.object, se.array, se.string]),
  listItem: se.bool,
  pull: se.oneOf(['right', 'left']),
  pulse: se.bool,
  rotation: se.oneOf([0, 90, 180, 270]),
  shake: se.bool,
  size: se.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: se.bool,
  spinPulse: se.bool,
  spinReverse: se.bool,
  symbol: se.oneOfType([se.bool, se.string]),
  title: se.string,
  titleId: se.string,
  transform: se.oneOfType([se.string, se.object]),
  swapOpacity: se.bool,
};
Ti.defaultProps = {
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
};
var B1 = wp.bind(null, go.createElement),
  Tl = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var lm;
function H1() {
  return (
    lm ||
      ((lm = 1),
      (function (r) {
        (function () {
          var n = {}.hasOwnProperty;
          function a() {
            for (var c = '', d = 0; d < arguments.length; d++) {
              var m = arguments[d];
              m && (c = l(c, o(m)));
            }
            return c;
          }
          function o(c) {
            if (typeof c == 'string' || typeof c == 'number') return c;
            if (typeof c != 'object') return '';
            if (Array.isArray(c)) return a.apply(null, c);
            if (c.toString !== Object.prototype.toString && !c.toString.toString().includes('[native code]'))
              return c.toString();
            var d = '';
            for (var m in c) n.call(c, m) && c[m] && (d = l(d, m));
            return d;
          }
          function l(c, d) {
            return d ? (c ? c + ' ' + d : c + d) : c;
          }
          r.exports ? ((a.default = a), (r.exports = a)) : (window.classNames = a);
        })();
      })(Tl)),
    Tl.exports
  );
}
var Y1 = H1();
const q1 = ho(Y1);
var K1 = {
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
  Q1 = {
    prefix: 'fas',
    iconName: 'pen-to-square',
    icon: [
      512,
      512,
      ['edit'],
      'f044',
      'M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z',
    ],
  },
  Ox = Q1,
  Lx = {
    prefix: 'fas',
    iconName: 'pen',
    icon: [
      512,
      512,
      [128394],
      'f304',
      'M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z',
    ],
  },
  Rx = {
    prefix: 'fas',
    iconName: 'arrow-left',
    icon: [
      448,
      512,
      [8592],
      'f060',
      'M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z',
    ],
  },
  X1 = {
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
  Tx = X1,
  G1 = {
    prefix: 'fas',
    iconName: 'triangle-exclamation',
    icon: [
      512,
      512,
      [9888, 'exclamation-triangle', 'warning'],
      'f071',
      'M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z',
    ],
  },
  Ix = G1;
function J1() {
  if (console && console.warn) {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
    typeof n[0] == 'string' && (n[0] = `react-i18next:: ${n[0]}`), console.warn(...n);
  }
}
const um = {};
function Jl() {
  for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
  (typeof n[0] == 'string' && um[n[0]]) || (typeof n[0] == 'string' && (um[n[0]] = new Date()), J1(...n));
}
const xp = (r, n) => () => {
  if (r.isInitialized) n();
  else {
    const a = () => {
      setTimeout(() => {
        r.off('initialized', a);
      }, 0),
        n();
    };
    r.on('initialized', a);
  }
};
function cm(r, n, a) {
  r.loadNamespaces(n, xp(r, a));
}
function fm(r, n, a, o) {
  typeof a == 'string' && (a = [a]),
    a.forEach((l) => {
      r.options.ns.indexOf(l) < 0 && r.options.ns.push(l);
    }),
    r.loadLanguages(n, xp(r, o));
}
function Z1(r, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const o = n.languages[0],
    l = n.options ? n.options.fallbackLng : !1,
    c = n.languages[n.languages.length - 1];
  if (o.toLowerCase() === 'cimode') return !0;
  const d = (m, h) => {
    const g = n.services.backendConnector.state[`${m}|${h}`];
    return g === -1 || g === 2;
  };
  return a.bindI18n &&
    a.bindI18n.indexOf('languageChanging') > -1 &&
    n.services.backendConnector.backend &&
    n.isLanguageChangingTo &&
    !d(n.isLanguageChangingTo, r)
    ? !1
    : !!(
        n.hasResourceBundle(o, r) ||
        !n.services.backendConnector.backend ||
        (n.options.resources && !n.options.partialBundledLanguages) ||
        (d(o, r) && (!l || d(c, r)))
      );
}
function e0(r, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !n.languages || !n.languages.length
    ? (Jl('i18n.languages were undefined or empty', n.languages), !0)
    : n.options.ignoreJSONStructure !== void 0
    ? n.hasLoadedNamespace(r, {
        lng: a.lng,
        precheck: (l, c) => {
          if (
            a.bindI18n &&
            a.bindI18n.indexOf('languageChanging') > -1 &&
            l.services.backendConnector.backend &&
            l.isLanguageChangingTo &&
            !c(l.isLanguageChangingTo, r)
          )
            return !1;
        },
      })
    : Z1(r, n, a);
}
const t0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  n0 = {
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
  r0 = (r) => n0[r],
  i0 = (r) => r.replace(t0, r0);
let Zl = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: i0,
};
function a0() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Zl = { ...Zl, ...r };
}
function o0() {
  return Zl;
}
let kp;
function s0(r) {
  kp = r;
}
function l0() {
  return kp;
}
const u0 = {
    type: '3rdParty',
    init(r) {
      a0(r.options.react), s0(r);
    },
  },
  c0 = j.createContext();
class f0 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(n) {
    n.forEach((a) => {
      this.usedNamespaces[a] || (this.usedNamespaces[a] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const d0 = (r, n) => {
  const a = j.useRef();
  return (
    j.useEffect(() => {
      a.current = r;
    }, [r, n]),
    a.current
  );
};
function bp(r, n, a, o) {
  return r.getFixedT(n, a, o);
}
function m0(r, n, a, o) {
  return j.useCallback(bp(r, n, a, o), [r, n, a, o]);
}
function p0(r) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: a } = n,
    { i18n: o, defaultNS: l } = j.useContext(c0) || {},
    c = a || o || l0();
  if ((c && !c.reportNamespaces && (c.reportNamespaces = new f0()), !c)) {
    Jl('You will need to pass in an i18next instance by using initReactI18next');
    const $ = (J, Z) =>
        typeof Z == 'string'
          ? Z
          : Z && typeof Z == 'object' && typeof Z.defaultValue == 'string'
          ? Z.defaultValue
          : Array.isArray(J)
          ? J[J.length - 1]
          : J,
      O = [$, {}, !1];
    return (O.t = $), (O.i18n = {}), (O.ready = !1), O;
  }
  c.options.react &&
    c.options.react.wait !== void 0 &&
    Jl('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  const d = { ...o0(), ...c.options.react, ...n },
    { useSuspense: m, keyPrefix: h } = d;
  let g = l || (c.options && c.options.defaultNS);
  (g = typeof g == 'string' ? [g] : g || ['translation']),
    c.reportNamespaces.addUsedNamespaces && c.reportNamespaces.addUsedNamespaces(g);
  const v = (c.isInitialized || c.initializedStoreOnce) && g.every(($) => e0($, c, d)),
    w = m0(c, n.lng || null, d.nsMode === 'fallback' ? g : g[0], h),
    S = () => w,
    N = () => bp(c, n.lng || null, d.nsMode === 'fallback' ? g : g[0], h),
    [R, _] = j.useState(S);
  let L = g.join();
  n.lng && (L = `${n.lng}${L}`);
  const Y = d0(L),
    A = j.useRef(!0);
  j.useEffect(() => {
    const { bindI18n: $, bindI18nStore: O } = d;
    (A.current = !0),
      !v &&
        !m &&
        (n.lng
          ? fm(c, n.lng, g, () => {
              A.current && _(N);
            })
          : cm(c, g, () => {
              A.current && _(N);
            })),
      v && Y && Y !== L && A.current && _(N);
    function J() {
      A.current && _(N);
    }
    return (
      $ && c && c.on($, J),
      O && c && c.store.on(O, J),
      () => {
        (A.current = !1),
          $ && c && $.split(' ').forEach((Z) => c.off(Z, J)),
          O && c && O.split(' ').forEach((Z) => c.store.off(Z, J));
      }
    );
  }, [c, L]),
    j.useEffect(() => {
      A.current && v && _(S);
    }, [c, h, v]);
  const V = [R, c, v];
  if (((V.t = R), (V.i18n = c), (V.ready = v), v || (!v && !m))) return V;
  throw new Promise(($) => {
    n.lng ? fm(c, n.lng, g, () => $()) : cm(c, g, () => $());
  });
}
const Sn = ({ size: r, inModal: n }) => {
  const { i18n: a } = p0(),
    o = a.language;
  return le.jsxs('div', {
    className: q1(r ? `gnb-spinner-${r}` : 'gnb-spinner', n ? 'in-modal' : 'loading-page'),
    role: 'status',
    children: [
      le.jsx(Ti, { icon: K1, className: 'fa-spin', 'aria-labelledby': 'spinner-description' }),
      le.jsx('span', {
        className: 'sr-only',
        id: 'spinner-description',
        children: o === 'fr-CA' ? 'Chargement...' : 'Loading...',
      }),
    ],
  });
};
var Za = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var dm;
function h0() {
  if (dm) return Za;
  (dm = 1), (Za.parse = d), (Za.serialize = g);
  var r = Object.prototype.toString,
    n = Object.prototype.hasOwnProperty,
    a = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
    o = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
    l = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    c = /^[\u0020-\u003A\u003D-\u007E]*$/;
  function d(N, R) {
    if (typeof N != 'string') throw new TypeError('argument str must be a string');
    var _ = {},
      L = N.length;
    if (L < 2) return _;
    var Y = (R && R.decode) || v,
      A = 0,
      V = 0,
      $ = 0;
    do {
      if (((V = N.indexOf('=', A)), V === -1)) break;
      if ((($ = N.indexOf(';', A)), $ === -1)) $ = L;
      else if (V > $) {
        A = N.lastIndexOf(';', V - 1) + 1;
        continue;
      }
      var O = m(N, A, V),
        J = h(N, V, O),
        Z = N.slice(O, J);
      if (!n.call(_, Z)) {
        var ve = m(N, V + 1, $),
          _e = h(N, $, ve);
        N.charCodeAt(ve) === 34 && N.charCodeAt(_e - 1) === 34 && (ve++, _e--);
        var Ye = N.slice(ve, _e);
        _[Z] = S(Ye, Y);
      }
      A = $ + 1;
    } while (A < L);
    return _;
  }
  function m(N, R, _) {
    do {
      var L = N.charCodeAt(R);
      if (L !== 32 && L !== 9) return R;
    } while (++R < _);
    return _;
  }
  function h(N, R, _) {
    for (; R > _; ) {
      var L = N.charCodeAt(--R);
      if (L !== 32 && L !== 9) return R + 1;
    }
    return _;
  }
  function g(N, R, _) {
    var L = (_ && _.encode) || encodeURIComponent;
    if (typeof L != 'function') throw new TypeError('option encode is invalid');
    if (!a.test(N)) throw new TypeError('argument name is invalid');
    var Y = L(R);
    if (!o.test(Y)) throw new TypeError('argument val is invalid');
    var A = N + '=' + Y;
    if (!_) return A;
    if (_.maxAge != null) {
      var V = Math.floor(_.maxAge);
      if (!isFinite(V)) throw new TypeError('option maxAge is invalid');
      A += '; Max-Age=' + V;
    }
    if (_.domain) {
      if (!l.test(_.domain)) throw new TypeError('option domain is invalid');
      A += '; Domain=' + _.domain;
    }
    if (_.path) {
      if (!c.test(_.path)) throw new TypeError('option path is invalid');
      A += '; Path=' + _.path;
    }
    if (_.expires) {
      var $ = _.expires;
      if (!w($) || isNaN($.valueOf())) throw new TypeError('option expires is invalid');
      A += '; Expires=' + $.toUTCString();
    }
    if (
      (_.httpOnly && (A += '; HttpOnly'),
      _.secure && (A += '; Secure'),
      _.partitioned && (A += '; Partitioned'),
      _.priority)
    ) {
      var O = typeof _.priority == 'string' ? _.priority.toLowerCase() : _.priority;
      switch (O) {
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
    if (_.sameSite) {
      var J = typeof _.sameSite == 'string' ? _.sameSite.toLowerCase() : _.sameSite;
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
  function v(N) {
    return N.indexOf('%') !== -1 ? decodeURIComponent(N) : N;
  }
  function w(N) {
    return r.call(N) === '[object Date]';
  }
  function S(N, R) {
    try {
      return R(N);
    } catch {
      return N;
    }
  }
  return Za;
}
var ro = h0();
function g0() {
  const r = typeof global > 'u' ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  return typeof r == 'boolean' ? r : typeof document == 'object' && typeof document.cookie == 'string';
}
function v0(r) {
  return typeof r == 'string' ? ro.parse(r) : typeof r == 'object' && r !== null ? r : {};
}
function Il(r, n = {}) {
  const a = y0(r);
  if (!n.doNotParse)
    try {
      return JSON.parse(a);
    } catch {}
  return r;
}
function y0(r) {
  return r && r[0] === 'j' && r[1] === ':' ? r.substr(2) : r;
}
class Cp {
  constructor(n, a = {}) {
    (this.changeListeners = []),
      (this.HAS_DOCUMENT_COOKIE = !1),
      (this.update = () => {
        if (!this.HAS_DOCUMENT_COOKIE) return;
        const l = this.cookies;
        (this.cookies = ro.parse(document.cookie)), this._checkChanges(l);
      });
    const o = typeof document > 'u' ? '' : document.cookie;
    (this.cookies = v0(n || o)), (this.defaultSetOptions = a), (this.HAS_DOCUMENT_COOKIE = g0());
  }
  _emitChange(n) {
    for (let a = 0; a < this.changeListeners.length; ++a) this.changeListeners[a](n);
  }
  _checkChanges(n) {
    new Set(Object.keys(n).concat(Object.keys(this.cookies))).forEach((o) => {
      n[o] !== this.cookies[o] && this._emitChange({ name: o, value: Il(this.cookies[o]) });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(n, a = {}) {
    return a.doNotUpdate || this.update(), Il(this.cookies[n], a);
  }
  getAll(n = {}) {
    n.doNotUpdate || this.update();
    const a = {};
    for (let o in this.cookies) a[o] = Il(this.cookies[o], n);
    return a;
  }
  set(n, a, o) {
    o ? (o = Object.assign(Object.assign({}, this.defaultSetOptions), o)) : (o = this.defaultSetOptions);
    const l = typeof a == 'string' ? a : JSON.stringify(a);
    (this.cookies = Object.assign(Object.assign({}, this.cookies), { [n]: l })),
      this.HAS_DOCUMENT_COOKIE && (document.cookie = ro.serialize(n, l, o)),
      this._emitChange({ name: n, value: a, options: o });
  }
  remove(n, a) {
    const o = (a = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), a), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    }));
    (this.cookies = Object.assign({}, this.cookies)),
      delete this.cookies[n],
      this.HAS_DOCUMENT_COOKIE && (document.cookie = ro.serialize(n, '', o)),
      this._emitChange({ name: n, value: void 0, options: a });
  }
  addChangeListener(n) {
    this.changeListeners.push(n),
      this.HAS_DOCUMENT_COOKIE &&
        this.changeListeners.length === 1 &&
        (typeof window == 'object' && 'cookieStore' in window
          ? window.cookieStore.addEventListener('change', this.update)
          : this._startPolling());
  }
  removeChangeListener(n) {
    const a = this.changeListeners.indexOf(n);
    a >= 0 && this.changeListeners.splice(a, 1),
      this.HAS_DOCUMENT_COOKIE &&
        this.changeListeners.length === 0 &&
        (typeof window == 'object' && 'cookieStore' in window
          ? window.cookieStore.removeEventListener('change', this.update)
          : this._stopPolling());
  }
}
const Pp = j.createContext(new Cp()),
  { Provider: w0, Consumer: Mx } = Pp;
class S0 extends j.Component {
  constructor(n) {
    super(n), n.cookies ? (this.cookies = n.cookies) : (this.cookies = new Cp(void 0, n.defaultSetOptions));
  }
  render() {
    return j.createElement(w0, { value: this.cookies }, this.props.children);
  }
}
var Ep = { exports: {} },
  me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mm;
function x0() {
  if (mm) return me;
  mm = 1;
  var r = typeof Symbol == 'function' && Symbol.for,
    n = r ? Symbol.for('react.element') : 60103,
    a = r ? Symbol.for('react.portal') : 60106,
    o = r ? Symbol.for('react.fragment') : 60107,
    l = r ? Symbol.for('react.strict_mode') : 60108,
    c = r ? Symbol.for('react.profiler') : 60114,
    d = r ? Symbol.for('react.provider') : 60109,
    m = r ? Symbol.for('react.context') : 60110,
    h = r ? Symbol.for('react.async_mode') : 60111,
    g = r ? Symbol.for('react.concurrent_mode') : 60111,
    v = r ? Symbol.for('react.forward_ref') : 60112,
    w = r ? Symbol.for('react.suspense') : 60113,
    S = r ? Symbol.for('react.suspense_list') : 60120,
    N = r ? Symbol.for('react.memo') : 60115,
    R = r ? Symbol.for('react.lazy') : 60116,
    _ = r ? Symbol.for('react.block') : 60121,
    L = r ? Symbol.for('react.fundamental') : 60117,
    Y = r ? Symbol.for('react.responder') : 60118,
    A = r ? Symbol.for('react.scope') : 60119;
  function V(O) {
    if (typeof O == 'object' && O !== null) {
      var J = O.$$typeof;
      switch (J) {
        case n:
          switch (((O = O.type), O)) {
            case h:
            case g:
            case o:
            case c:
            case l:
            case w:
              return O;
            default:
              switch (((O = O && O.$$typeof), O)) {
                case m:
                case v:
                case R:
                case N:
                case d:
                  return O;
                default:
                  return J;
              }
          }
        case a:
          return J;
      }
    }
  }
  function $(O) {
    return V(O) === g;
  }
  return (
    (me.AsyncMode = h),
    (me.ConcurrentMode = g),
    (me.ContextConsumer = m),
    (me.ContextProvider = d),
    (me.Element = n),
    (me.ForwardRef = v),
    (me.Fragment = o),
    (me.Lazy = R),
    (me.Memo = N),
    (me.Portal = a),
    (me.Profiler = c),
    (me.StrictMode = l),
    (me.Suspense = w),
    (me.isAsyncMode = function (O) {
      return $(O) || V(O) === h;
    }),
    (me.isConcurrentMode = $),
    (me.isContextConsumer = function (O) {
      return V(O) === m;
    }),
    (me.isContextProvider = function (O) {
      return V(O) === d;
    }),
    (me.isElement = function (O) {
      return typeof O == 'object' && O !== null && O.$$typeof === n;
    }),
    (me.isForwardRef = function (O) {
      return V(O) === v;
    }),
    (me.isFragment = function (O) {
      return V(O) === o;
    }),
    (me.isLazy = function (O) {
      return V(O) === R;
    }),
    (me.isMemo = function (O) {
      return V(O) === N;
    }),
    (me.isPortal = function (O) {
      return V(O) === a;
    }),
    (me.isProfiler = function (O) {
      return V(O) === c;
    }),
    (me.isStrictMode = function (O) {
      return V(O) === l;
    }),
    (me.isSuspense = function (O) {
      return V(O) === w;
    }),
    (me.isValidElementType = function (O) {
      return (
        typeof O == 'string' ||
        typeof O == 'function' ||
        O === o ||
        O === g ||
        O === c ||
        O === l ||
        O === w ||
        O === S ||
        (typeof O == 'object' &&
          O !== null &&
          (O.$$typeof === R ||
            O.$$typeof === N ||
            O.$$typeof === d ||
            O.$$typeof === m ||
            O.$$typeof === v ||
            O.$$typeof === L ||
            O.$$typeof === Y ||
            O.$$typeof === A ||
            O.$$typeof === _))
      );
    }),
    (me.typeOf = V),
    me
  );
}
Ep.exports = x0();
var k0 = Ep.exports,
  _p = k0,
  b0 = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  C0 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Np = {};
Np[_p.ForwardRef] = b0;
Np[_p.Memo] = C0;
function P0() {
  return typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
}
function yu(r) {
  const n = j.useContext(Pp);
  if (!n) throw new Error('Missing <CookiesProvider>');
  const [a, o] = j.useState(() => n.getAll({ doNotUpdate: !0 }));
  P0() &&
    j.useLayoutEffect(() => {
      function m() {
        const h = n.getAll({ doNotUpdate: !0 });
        E0(r || null, h, a) && o(h);
      }
      return (
        n.addChangeListener(m),
        () => {
          n.removeChangeListener(m);
        }
      );
    }, [n, a]);
  const l = j.useMemo(() => n.set.bind(n), [n]),
    c = j.useMemo(() => n.remove.bind(n), [n]),
    d = j.useMemo(() => n.update.bind(n), [n]);
  return [a, l, c, d];
}
function E0(r, n, a) {
  if (!r) return !0;
  for (let o of r) if (n[o] !== a[o]) return !0;
  return !1;
}
const _0 = {
  type: 'logger',
  log(r) {
    this.output('log', r);
  },
  warn(r) {
    this.output('warn', r);
  },
  error(r) {
    this.output('error', r);
  },
  output(r, n) {
    console && console[r] && console[r].apply(console, n);
  },
};
class uo {
  constructor(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(n, a);
  }
  init(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = a.prefix || 'i18next:'), (this.logger = n || _0), (this.options = a), (this.debug = a.debug);
  }
  log() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return this.forward(a, 'log', '', !0);
  }
  warn() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return this.forward(a, 'warn', '', !0);
  }
  error() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return this.forward(a, 'error', '');
  }
  deprecate() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return this.forward(a, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(n, a, o, l) {
    return l && !this.debug
      ? null
      : (typeof n[0] == 'string' && (n[0] = `${o}${this.prefix} ${n[0]}`), this.logger[a](n));
  }
  create(n) {
    return new uo(this.logger, { prefix: `${this.prefix}:${n}:`, ...this.options });
  }
  clone(n) {
    return (n = n || this.options), (n.prefix = n.prefix || this.prefix), new uo(this.logger, n);
  }
}
var Ft = new uo();
class bo {
  constructor() {
    this.observers = {};
  }
  on(n, a) {
    return (
      n.split(' ').forEach((o) => {
        this.observers[o] || (this.observers[o] = new Map());
        const l = this.observers[o].get(a) || 0;
        this.observers[o].set(a, l + 1);
      }),
      this
    );
  }
  off(n, a) {
    if (this.observers[n]) {
      if (!a) {
        delete this.observers[n];
        return;
      }
      this.observers[n].delete(a);
    }
  }
  emit(n) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) o[l - 1] = arguments[l];
    this.observers[n] &&
      Array.from(this.observers[n].entries()).forEach((d) => {
        let [m, h] = d;
        for (let g = 0; g < h; g++) m(...o);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((d) => {
          let [m, h] = d;
          for (let g = 0; g < h; g++) m.apply(m, [n, ...o]);
        });
  }
}
function pi() {
  let r, n;
  const a = new Promise((o, l) => {
    (r = o), (n = l);
  });
  return (a.resolve = r), (a.reject = n), a;
}
function pm(r) {
  return r == null ? '' : '' + r;
}
function N0(r, n, a) {
  r.forEach((o) => {
    n[o] && (a[o] = n[o]);
  });
}
const O0 = /###/g;
function yi(r, n, a) {
  function o(m) {
    return m && m.indexOf('###') > -1 ? m.replace(O0, '.') : m;
  }
  function l() {
    return !r || typeof r == 'string';
  }
  const c = typeof n != 'string' ? n : n.split('.');
  let d = 0;
  for (; d < c.length - 1; ) {
    if (l()) return {};
    const m = o(c[d]);
    !r[m] && a && (r[m] = new a()), Object.prototype.hasOwnProperty.call(r, m) ? (r = r[m]) : (r = {}), ++d;
  }
  return l() ? {} : { obj: r, k: o(c[d]) };
}
function hm(r, n, a) {
  const { obj: o, k: l } = yi(r, n, Object);
  if (o !== void 0 || n.length === 1) {
    o[l] = a;
    return;
  }
  let c = n[n.length - 1],
    d = n.slice(0, n.length - 1),
    m = yi(r, d, Object);
  for (; m.obj === void 0 && d.length; )
    (c = `${d[d.length - 1]}.${c}`),
      (d = d.slice(0, d.length - 1)),
      (m = yi(r, d, Object)),
      m && m.obj && typeof m.obj[`${m.k}.${c}`] < 'u' && (m.obj = void 0);
  m.obj[`${m.k}.${c}`] = a;
}
function L0(r, n, a, o) {
  const { obj: l, k: c } = yi(r, n, Object);
  (l[c] = l[c] || []), l[c].push(a);
}
function co(r, n) {
  const { obj: a, k: o } = yi(r, n);
  if (a) return a[o];
}
function R0(r, n, a) {
  const o = co(r, a);
  return o !== void 0 ? o : co(n, a);
}
function Op(r, n, a) {
  for (const o in n)
    o !== '__proto__' &&
      o !== 'constructor' &&
      (o in r
        ? typeof r[o] == 'string' || r[o] instanceof String || typeof n[o] == 'string' || n[o] instanceof String
          ? a && (r[o] = n[o])
          : Op(r[o], n[o], a)
        : (r[o] = n[o]));
  return r;
}
function wr(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var T0 = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
function I0(r) {
  return typeof r == 'string' ? r.replace(/[&<>"'\/]/g, (n) => T0[n]) : r;
}
class M0 {
  constructor(n) {
    (this.capacity = n), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(n) {
    const a = this.regExpMap.get(n);
    if (a !== void 0) return a;
    const o = new RegExp(n);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(n, o),
      this.regExpQueue.push(n),
      o
    );
  }
}
const A0 = [' ', ',', '?', '!', ';'],
  z0 = new M0(20);
function j0(r, n, a) {
  (n = n || ''), (a = a || '');
  const o = A0.filter((d) => n.indexOf(d) < 0 && a.indexOf(d) < 0);
  if (o.length === 0) return !0;
  const l = z0.getRegExp(`(${o.map((d) => (d === '?' ? '\\?' : d)).join('|')})`);
  let c = !l.test(r);
  if (!c) {
    const d = r.indexOf(a);
    d > 0 && !l.test(r.substring(0, d)) && (c = !0);
  }
  return c;
}
function eu(r, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (!r) return;
  if (r[n]) return r[n];
  const o = n.split(a);
  let l = r;
  for (let c = 0; c < o.length; ) {
    if (!l || typeof l != 'object') return;
    let d,
      m = '';
    for (let h = c; h < o.length; ++h)
      if ((h !== c && (m += a), (m += o[h]), (d = l[m]), d !== void 0)) {
        if (['string', 'number', 'boolean'].indexOf(typeof d) > -1 && h < o.length - 1) continue;
        c += h - c + 1;
        break;
      }
    l = d;
  }
  return l;
}
function fo(r) {
  return r && r.indexOf('_') > 0 ? r.replace('_', '-') : r;
}
class gm extends bo {
  constructor(n) {
    let a =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = n || {}),
      (this.options = a),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(n) {
    this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
  }
  removeNamespaces(n) {
    const a = this.options.ns.indexOf(n);
    a > -1 && this.options.ns.splice(a, 1);
  }
  getResource(n, a, o) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
      d = l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let m;
    n.indexOf('.') > -1
      ? (m = n.split('.'))
      : ((m = [n, a]),
        o && (Array.isArray(o) ? m.push(...o) : typeof o == 'string' && c ? m.push(...o.split(c)) : m.push(o)));
    const h = co(this.data, m);
    return (
      !h && !a && !o && n.indexOf('.') > -1 && ((n = m[0]), (a = m[1]), (o = m.slice(2).join('.'))),
      h || !d || typeof o != 'string' ? h : eu(this.data && this.data[n] && this.data[n][a], o, c)
    );
  }
  addResource(n, a, o, l) {
    let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let m = [n, a];
    o && (m = m.concat(d ? o.split(d) : o)),
      n.indexOf('.') > -1 && ((m = n.split('.')), (l = a), (a = m[1])),
      this.addNamespaces(a),
      hm(this.data, m, l),
      c.silent || this.emit('added', n, a, o, l);
  }
  addResources(n, a, o) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const c in o)
      (typeof o[c] == 'string' || Object.prototype.toString.apply(o[c]) === '[object Array]') &&
        this.addResource(n, a, c, o[c], { silent: !0 });
    l.silent || this.emit('added', n, a, o);
  }
  addResourceBundle(n, a, o, l, c) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1, skipCopy: !1 },
      m = [n, a];
    n.indexOf('.') > -1 && ((m = n.split('.')), (l = o), (o = a), (a = m[1])), this.addNamespaces(a);
    let h = co(this.data, m) || {};
    d.skipCopy || (o = JSON.parse(JSON.stringify(o))),
      l ? Op(h, o, c) : (h = { ...h, ...o }),
      hm(this.data, m, h),
      d.silent || this.emit('added', n, a, o);
  }
  removeResourceBundle(n, a) {
    this.hasResourceBundle(n, a) && delete this.data[n][a], this.removeNamespaces(a), this.emit('removed', n, a);
  }
  hasResourceBundle(n, a) {
    return this.getResource(n, a) !== void 0;
  }
  getResourceBundle(n, a) {
    return (
      a || (a = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1' ? { ...this.getResource(n, a) } : this.getResource(n, a)
    );
  }
  getDataByLanguage(n) {
    return this.data[n];
  }
  hasLanguageSomeTranslations(n) {
    const a = this.getDataByLanguage(n);
    return !!((a && Object.keys(a)) || []).find((l) => a[l] && Object.keys(a[l]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Lp = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, n, a, o, l) {
    return (
      r.forEach((c) => {
        this.processors[c] && (n = this.processors[c].process(n, a, o, l));
      }),
      n
    );
  },
};
const vm = {};
class mo extends bo {
  constructor(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      N0(
        ['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'],
        n,
        this
      ),
      (this.options = a),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Ft.create('translator'));
  }
  changeLanguage(n) {
    n && (this.language = n);
  }
  exists(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (n == null) return !1;
    const o = this.resolve(n, a);
    return o && o.res !== void 0;
  }
  extractFromKey(n, a) {
    let o = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
    o === void 0 && (o = ':');
    const l = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let c = a.ns || this.options.defaultNS || [];
    const d = o && n.indexOf(o) > -1,
      m =
        !this.options.userDefinedKeySeparator &&
        !a.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !a.nsSeparator &&
        !j0(n, o, l);
    if (d && !m) {
      const h = n.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0) return { key: n, namespaces: c };
      const g = n.split(o);
      (o !== l || (o === l && this.options.ns.indexOf(g[0]) > -1)) && (c = g.shift()), (n = g.join(l));
    }
    return typeof c == 'string' && (c = [c]), { key: n, namespaces: c };
  }
  translate(n, a, o) {
    if (
      (typeof a != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (a = this.options.overloadTranslationOptionHandler(arguments)),
      typeof a == 'object' && (a = { ...a }),
      a || (a = {}),
      n == null)
    )
      return '';
    Array.isArray(n) || (n = [String(n)]);
    const l = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails,
      c = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      { key: d, namespaces: m } = this.extractFromKey(n[n.length - 1], a),
      h = m[m.length - 1],
      g = a.lng || this.language,
      v = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (g && g.toLowerCase() === 'cimode') {
      if (v) {
        const $ = a.nsSeparator || this.options.nsSeparator;
        return l
          ? {
              res: `${h}${$}${d}`,
              usedKey: d,
              exactUsedKey: d,
              usedLng: g,
              usedNS: h,
              usedParams: this.getUsedParamsDetails(a),
            }
          : `${h}${$}${d}`;
      }
      return l
        ? { res: d, usedKey: d, exactUsedKey: d, usedLng: g, usedNS: h, usedParams: this.getUsedParamsDetails(a) }
        : d;
    }
    const w = this.resolve(n, a);
    let S = w && w.res;
    const N = (w && w.usedKey) || d,
      R = (w && w.exactUsedKey) || d,
      _ = Object.prototype.toString.apply(S),
      L = ['[object Number]', '[object Function]', '[object RegExp]'],
      Y = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays,
      A = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      A &&
      S &&
      typeof S != 'string' &&
      typeof S != 'boolean' &&
      typeof S != 'number' &&
      L.indexOf(_) < 0 &&
      !(typeof Y == 'string' && _ === '[object Array]')
    ) {
      if (!a.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const $ = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(N, S, { ...a, ns: m })
          : `key '${d} (${this.language})' returned an object instead of string.`;
        return l ? ((w.res = $), (w.usedParams = this.getUsedParamsDetails(a)), w) : $;
      }
      if (c) {
        const $ = _ === '[object Array]',
          O = $ ? [] : {},
          J = $ ? R : N;
        for (const Z in S)
          if (Object.prototype.hasOwnProperty.call(S, Z)) {
            const ve = `${J}${c}${Z}`;
            (O[Z] = this.translate(ve, { ...a, joinArrays: !1, ns: m })), O[Z] === ve && (O[Z] = S[Z]);
          }
        S = O;
      }
    } else if (A && typeof Y == 'string' && _ === '[object Array]')
      (S = S.join(Y)), S && (S = this.extendTranslation(S, n, a, o));
    else {
      let $ = !1,
        O = !1;
      const J = a.count !== void 0 && typeof a.count != 'string',
        Z = mo.hasDefaultValue(a),
        ve = J ? this.pluralResolver.getSuffix(g, a.count, a) : '',
        _e = a.ordinal && J ? this.pluralResolver.getSuffix(g, a.count, { ordinal: !1 }) : '',
        Ye = J && !a.ordinal && a.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        lt =
          (Ye && a[`defaultValue${this.options.pluralSeparator}zero`]) ||
          a[`defaultValue${ve}`] ||
          a[`defaultValue${_e}`] ||
          a.defaultValue;
      !this.isValidLookup(S) && Z && (($ = !0), (S = lt)), this.isValidLookup(S) || ((O = !0), (S = d));
      const Je = (a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : S,
        We = Z && lt !== S && this.options.updateMissing;
      if (O || $ || We) {
        if ((this.logger.log(We ? 'updateKey' : 'missingKey', g, h, d, We ? lt : S), c)) {
          const F = this.resolve(d, { ...a, keySeparator: !1 });
          F &&
            F.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let qe = [];
        const Ae = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && Ae && Ae[0])
          for (let F = 0; F < Ae.length; F++) qe.push(Ae[F]);
        else
          this.options.saveMissingTo === 'all'
            ? (qe = this.languageUtils.toResolveHierarchy(a.lng || this.language))
            : qe.push(a.lng || this.language);
        const Se = (F, G, U) => {
          const b = Z && U !== S ? U : Je;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(F, h, G, b, We, a)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(F, h, G, b, We, a),
            this.emit('missingKey', F, h, G, S);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && J
            ? qe.forEach((F) => {
                const G = this.pluralResolver.getSuffixes(F, a);
                Ye &&
                  a[`defaultValue${this.options.pluralSeparator}zero`] &&
                  G.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  G.push(`${this.options.pluralSeparator}zero`),
                  G.forEach((U) => {
                    Se([F], d + U, a[`defaultValue${U}`] || lt);
                  });
              })
            : Se(qe, d, lt));
      }
      (S = this.extendTranslation(S, n, a, w, o)),
        O && S === d && this.options.appendNamespaceToMissingKey && (S = `${h}:${d}`),
        (O || $) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (S = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${h}:${d}` : d,
                $ ? S : void 0
              ))
            : (S = this.options.parseMissingKeyHandler(S)));
    }
    return l ? ((w.res = S), (w.usedParams = this.getUsedParamsDetails(a)), w) : S;
  }
  extendTranslation(n, a, o, l, c) {
    var d = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      n = this.i18nFormat.parse(
        n,
        { ...this.options.interpolation.defaultVariables, ...o },
        o.lng || this.language || l.usedLng,
        l.usedNS,
        l.usedKey,
        { resolved: l }
      );
    else if (!o.skipInterpolation) {
      o.interpolation &&
        this.interpolator.init({ ...o, interpolation: { ...this.options.interpolation, ...o.interpolation } });
      const g =
        typeof n == 'string' &&
        (o && o.interpolation && o.interpolation.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let v;
      if (g) {
        const S = n.match(this.interpolator.nestingRegexp);
        v = S && S.length;
      }
      let w = o.replace && typeof o.replace != 'string' ? o.replace : o;
      if (
        (this.options.interpolation.defaultVariables && (w = { ...this.options.interpolation.defaultVariables, ...w }),
        (n = this.interpolator.interpolate(n, w, o.lng || this.language, o)),
        g)
      ) {
        const S = n.match(this.interpolator.nestingRegexp),
          N = S && S.length;
        v < N && (o.nest = !1);
      }
      !o.lng && this.options.compatibilityAPI !== 'v1' && l && l.res && (o.lng = l.usedLng),
        o.nest !== !1 &&
          (n = this.interpolator.nest(
            n,
            function () {
              for (var S = arguments.length, N = new Array(S), R = 0; R < S; R++) N[R] = arguments[R];
              return c && c[0] === N[0] && !o.context
                ? (d.logger.warn(`It seems you are nesting recursively key: ${N[0]} in key: ${a[0]}`), null)
                : d.translate(...N, a);
            },
            o
          )),
        o.interpolation && this.interpolator.reset();
    }
    const m = o.postProcess || this.options.postProcess,
      h = typeof m == 'string' ? [m] : m;
    return (
      n != null &&
        h &&
        h.length &&
        o.applyPostProcessor !== !1 &&
        (n = Lp.handle(
          h,
          n,
          a,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...l, usedParams: this.getUsedParamsDetails(o) }, ...o }
            : o,
          this
        )),
      n
    );
  }
  resolve(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o,
      l,
      c,
      d,
      m;
    return (
      typeof n == 'string' && (n = [n]),
      n.forEach((h) => {
        if (this.isValidLookup(o)) return;
        const g = this.extractFromKey(h, a),
          v = g.key;
        l = v;
        let w = g.namespaces;
        this.options.fallbackNS && (w = w.concat(this.options.fallbackNS));
        const S = a.count !== void 0 && typeof a.count != 'string',
          N = S && !a.ordinal && a.count === 0 && this.pluralResolver.shouldUseIntlApi(),
          R =
            a.context !== void 0 && (typeof a.context == 'string' || typeof a.context == 'number') && a.context !== '',
          _ = a.lngs ? a.lngs : this.languageUtils.toResolveHierarchy(a.lng || this.language, a.fallbackLng);
        w.forEach((L) => {
          this.isValidLookup(o) ||
            ((m = L),
            !vm[`${_[0]}-${L}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(m) &&
              ((vm[`${_[0]}-${L}`] = !0),
              this.logger.warn(
                `key "${l}" for languages "${_.join(', ')}" won't get resolved as namespace "${m}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            _.forEach((Y) => {
              if (this.isValidLookup(o)) return;
              d = Y;
              const A = [v];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(A, v, Y, L, a);
              else {
                let $;
                S && ($ = this.pluralResolver.getSuffix(Y, a.count, a));
                const O = `${this.options.pluralSeparator}zero`,
                  J = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (S &&
                    (A.push(v + $),
                    a.ordinal && $.indexOf(J) === 0 && A.push(v + $.replace(J, this.options.pluralSeparator)),
                    N && A.push(v + O)),
                  R)
                ) {
                  const Z = `${v}${this.options.contextSeparator}${a.context}`;
                  A.push(Z),
                    S &&
                      (A.push(Z + $),
                      a.ordinal && $.indexOf(J) === 0 && A.push(Z + $.replace(J, this.options.pluralSeparator)),
                      N && A.push(Z + O));
                }
              }
              let V;
              for (; (V = A.pop()); ) this.isValidLookup(o) || ((c = V), (o = this.getResource(Y, L, V, a)));
            }));
        });
      }),
      { res: o, usedKey: l, exactUsedKey: c, usedLng: d, usedNS: m }
    );
  }
  isValidLookup(n) {
    return n !== void 0 && !(!this.options.returnNull && n === null) && !(!this.options.returnEmptyString && n === '');
  }
  getResource(n, a, o) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(n, a, o, l)
      : this.resourceStore.getResource(n, a, o, l);
  }
  getUsedParamsDetails() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const a = [
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
      o = n.replace && typeof n.replace != 'string';
    let l = o ? n.replace : n;
    if (
      (o && typeof n.count < 'u' && (l.count = n.count),
      this.options.interpolation.defaultVariables && (l = { ...this.options.interpolation.defaultVariables, ...l }),
      !o)
    ) {
      l = { ...l };
      for (const c of a) delete l[c];
    }
    return l;
  }
  static hasDefaultValue(n) {
    const a = 'defaultValue';
    for (const o in n)
      if (Object.prototype.hasOwnProperty.call(n, o) && a === o.substring(0, a.length) && n[o] !== void 0) return !0;
    return !1;
  }
}
function Ml(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class ym {
  constructor(n) {
    (this.options = n),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Ft.create('languageUtils'));
  }
  getScriptPartFromCode(n) {
    if (((n = fo(n)), !n || n.indexOf('-') < 0)) return null;
    const a = n.split('-');
    return a.length === 2 || (a.pop(), a[a.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(a.join('-'));
  }
  getLanguagePartFromCode(n) {
    if (((n = fo(n)), !n || n.indexOf('-') < 0)) return n;
    const a = n.split('-');
    return this.formatLanguageCode(a[0]);
  }
  formatLanguageCode(n) {
    if (typeof n == 'string' && n.indexOf('-') > -1) {
      const a = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let o = n.split('-');
      return (
        this.options.lowerCaseLng
          ? (o = o.map((l) => l.toLowerCase()))
          : o.length === 2
          ? ((o[0] = o[0].toLowerCase()),
            (o[1] = o[1].toUpperCase()),
            a.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Ml(o[1].toLowerCase())))
          : o.length === 3 &&
            ((o[0] = o[0].toLowerCase()),
            o[1].length === 2 && (o[1] = o[1].toUpperCase()),
            o[0] !== 'sgn' && o[2].length === 2 && (o[2] = o[2].toUpperCase()),
            a.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Ml(o[1].toLowerCase())),
            a.indexOf(o[2].toLowerCase()) > -1 && (o[2] = Ml(o[2].toLowerCase()))),
        o.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n;
  }
  isSupportedCode(n) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (n = this.getLanguagePartFromCode(n)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(n) > -1
    );
  }
  getBestMatchFromCodes(n) {
    if (!n) return null;
    let a;
    return (
      n.forEach((o) => {
        if (a) return;
        const l = this.formatLanguageCode(o);
        (!this.options.supportedLngs || this.isSupportedCode(l)) && (a = l);
      }),
      !a &&
        this.options.supportedLngs &&
        n.forEach((o) => {
          if (a) return;
          const l = this.getLanguagePartFromCode(o);
          if (this.isSupportedCode(l)) return (a = l);
          a = this.options.supportedLngs.find((c) => {
            if (c === l) return c;
            if (
              !(c.indexOf('-') < 0 && l.indexOf('-') < 0) &&
              ((c.indexOf('-') > 0 && l.indexOf('-') < 0 && c.substring(0, c.indexOf('-')) === l) ||
                (c.indexOf(l) === 0 && l.length > 1))
            )
              return c;
          });
        }),
      a || (a = this.getFallbackCodes(this.options.fallbackLng)[0]),
      a
    );
  }
  getFallbackCodes(n, a) {
    if (!n) return [];
    if (
      (typeof n == 'function' && (n = n(a)),
      typeof n == 'string' && (n = [n]),
      Object.prototype.toString.apply(n) === '[object Array]')
    )
      return n;
    if (!a) return n.default || [];
    let o = n[a];
    return (
      o || (o = n[this.getScriptPartFromCode(a)]),
      o || (o = n[this.formatLanguageCode(a)]),
      o || (o = n[this.getLanguagePartFromCode(a)]),
      o || (o = n.default),
      o || []
    );
  }
  toResolveHierarchy(n, a) {
    const o = this.getFallbackCodes(a || this.options.fallbackLng || [], n),
      l = [],
      c = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? l.push(d)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
      };
    return (
      typeof n == 'string' && (n.indexOf('-') > -1 || n.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && c(this.formatLanguageCode(n)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            c(this.getScriptPartFromCode(n)),
          this.options.load !== 'currentOnly' && c(this.getLanguagePartFromCode(n)))
        : typeof n == 'string' && c(this.formatLanguageCode(n)),
      o.forEach((d) => {
        l.indexOf(d) < 0 && c(this.formatLanguageCode(d));
      }),
      l
    );
  }
}
let D0 = [
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
  F0 = {
    1: function (r) {
      return +(r > 1);
    },
    2: function (r) {
      return +(r != 1);
    },
    3: function (r) {
      return 0;
    },
    4: function (r) {
      return r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
    },
    5: function (r) {
      return r == 0 ? 0 : r == 1 ? 1 : r == 2 ? 2 : r % 100 >= 3 && r % 100 <= 10 ? 3 : r % 100 >= 11 ? 4 : 5;
    },
    6: function (r) {
      return r == 1 ? 0 : r >= 2 && r <= 4 ? 1 : 2;
    },
    7: function (r) {
      return r == 1 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
    },
    8: function (r) {
      return r == 1 ? 0 : r == 2 ? 1 : r != 8 && r != 11 ? 2 : 3;
    },
    9: function (r) {
      return +(r >= 2);
    },
    10: function (r) {
      return r == 1 ? 0 : r == 2 ? 1 : r < 7 ? 2 : r < 11 ? 3 : 4;
    },
    11: function (r) {
      return r == 1 || r == 11 ? 0 : r == 2 || r == 12 ? 1 : r > 2 && r < 20 ? 2 : 3;
    },
    12: function (r) {
      return +(r % 10 != 1 || r % 100 == 11);
    },
    13: function (r) {
      return +(r !== 0);
    },
    14: function (r) {
      return r == 1 ? 0 : r == 2 ? 1 : r == 3 ? 2 : 3;
    },
    15: function (r) {
      return r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
    },
    16: function (r) {
      return r % 10 == 1 && r % 100 != 11 ? 0 : r !== 0 ? 1 : 2;
    },
    17: function (r) {
      return r == 1 || (r % 10 == 1 && r % 100 != 11) ? 0 : 1;
    },
    18: function (r) {
      return r == 0 ? 0 : r == 1 ? 1 : 2;
    },
    19: function (r) {
      return r == 1 ? 0 : r == 0 || (r % 100 > 1 && r % 100 < 11) ? 1 : r % 100 > 10 && r % 100 < 20 ? 2 : 3;
    },
    20: function (r) {
      return r == 1 ? 0 : r == 0 || (r % 100 > 0 && r % 100 < 20) ? 1 : 2;
    },
    21: function (r) {
      return r % 100 == 1 ? 1 : r % 100 == 2 ? 2 : r % 100 == 3 || r % 100 == 4 ? 3 : 0;
    },
    22: function (r) {
      return r == 1 ? 0 : r == 2 ? 1 : (r < 0 || r > 10) && r % 10 == 0 ? 2 : 3;
    },
  };
const $0 = ['v1', 'v2', 'v3'],
  V0 = ['v4'],
  wm = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function U0() {
  const r = {};
  return (
    D0.forEach((n) => {
      n.lngs.forEach((a) => {
        r[a] = { numbers: n.nr, plurals: F0[n.fc] };
      });
    }),
    r
  );
}
class W0 {
  constructor(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = n),
      (this.options = a),
      (this.logger = Ft.create('pluralResolver')),
      (!this.options.compatibilityJSON || V0.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = U0());
  }
  addRule(n, a) {
    this.rules[n] = a;
  }
  getRule(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(fo(n === 'dev' ? 'en' : n), { type: a.ordinal ? 'ordinal' : 'cardinal' });
      } catch {
        return;
      }
    return this.rules[n] || this.rules[this.languageUtils.getLanguagePartFromCode(n)];
  }
  needsPlural(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const o = this.getRule(n, a);
    return this.shouldUseIntlApi() ? o && o.resolvedOptions().pluralCategories.length > 1 : o && o.numbers.length > 1;
  }
  getPluralFormsOfKey(n, a) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(n, o).map((l) => `${a}${l}`);
  }
  getSuffixes(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const o = this.getRule(n, a);
    return o
      ? this.shouldUseIntlApi()
        ? o
            .resolvedOptions()
            .pluralCategories.sort((l, c) => wm[l] - wm[c])
            .map((l) => `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ''}${l}`)
        : o.numbers.map((l) => this.getSuffix(n, l, a))
      : [];
  }
  getSuffix(n, a) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(n, o);
    return l
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ''}${l.select(a)}`
        : this.getSuffixRetroCompatible(l, a)
      : (this.logger.warn(`no plural rule found for: ${n}`), '');
  }
  getSuffixRetroCompatible(n, a) {
    const o = n.noAbs ? n.plurals(a) : n.plurals(Math.abs(a));
    let l = n.numbers[o];
    this.options.simplifyPluralSuffix &&
      n.numbers.length === 2 &&
      n.numbers[0] === 1 &&
      (l === 2 ? (l = 'plural') : l === 1 && (l = ''));
    const c = () => (this.options.prepend && l.toString() ? this.options.prepend + l.toString() : l.toString());
    return this.options.compatibilityJSON === 'v1'
      ? l === 1
        ? ''
        : typeof l == 'number'
        ? `_plural_${l.toString()}`
        : c()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix && n.numbers.length === 2 && n.numbers[0] === 1)
      ? c()
      : this.options.prepend && o.toString()
      ? this.options.prepend + o.toString()
      : o.toString();
  }
  shouldUseIntlApi() {
    return !$0.includes(this.options.compatibilityJSON);
  }
}
function Sm(r, n, a) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
    l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    c = R0(r, n, a);
  return !c && l && typeof a == 'string' && ((c = eu(r, a, o)), c === void 0 && (c = eu(n, a, o))), c;
}
class B0 {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ft.create('interpolator')),
      (this.options = n),
      (this.format = (n.interpolation && n.interpolation.format) || ((a) => a)),
      this.init(n);
  }
  init() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    n.interpolation || (n.interpolation = { escapeValue: !0 });
    const a = n.interpolation;
    (this.escape = a.escape !== void 0 ? a.escape : I0),
      (this.escapeValue = a.escapeValue !== void 0 ? a.escapeValue : !0),
      (this.useRawValueToEscape = a.useRawValueToEscape !== void 0 ? a.useRawValueToEscape : !1),
      (this.prefix = a.prefix ? wr(a.prefix) : a.prefixEscaped || '{{'),
      (this.suffix = a.suffix ? wr(a.suffix) : a.suffixEscaped || '}}'),
      (this.formatSeparator = a.formatSeparator ? a.formatSeparator : a.formatSeparator || ','),
      (this.unescapePrefix = a.unescapeSuffix ? '' : a.unescapePrefix || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : a.unescapeSuffix || ''),
      (this.nestingPrefix = a.nestingPrefix ? wr(a.nestingPrefix) : a.nestingPrefixEscaped || wr('$t(')),
      (this.nestingSuffix = a.nestingSuffix ? wr(a.nestingSuffix) : a.nestingSuffixEscaped || wr(')')),
      (this.nestingOptionsSeparator = a.nestingOptionsSeparator
        ? a.nestingOptionsSeparator
        : a.nestingOptionsSeparator || ','),
      (this.maxReplaces = a.maxReplaces ? a.maxReplaces : 1e3),
      (this.alwaysFormat = a.alwaysFormat !== void 0 ? a.alwaysFormat : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const n = (a, o) => (a && a.source === o ? ((a.lastIndex = 0), a) : new RegExp(o, 'g'));
    (this.regexp = n(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = n(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = n(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`));
  }
  interpolate(n, a, o, l) {
    let c, d, m;
    const h = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
    function g(R) {
      return R.replace(/\$/g, '$$$$');
    }
    const v = (R) => {
      if (R.indexOf(this.formatSeparator) < 0) {
        const A = Sm(a, h, R, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(A, void 0, o, { ...l, ...a, interpolationkey: R }) : A;
      }
      const _ = R.split(this.formatSeparator),
        L = _.shift().trim(),
        Y = _.join(this.formatSeparator).trim();
      return this.format(Sm(a, h, L, this.options.keySeparator, this.options.ignoreJSONStructure), Y, o, {
        ...l,
        ...a,
        interpolationkey: L,
      });
    };
    this.resetRegExp();
    const w = (l && l.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      S =
        l && l.interpolation && l.interpolation.skipOnVariables !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (R) => g(R) },
        { regex: this.regexp, safeValue: (R) => (this.escapeValue ? g(this.escape(R)) : g(R)) },
      ].forEach((R) => {
        for (m = 0; (c = R.regex.exec(n)); ) {
          const _ = c[1].trim();
          if (((d = v(_)), d === void 0))
            if (typeof w == 'function') {
              const Y = w(n, c, l);
              d = typeof Y == 'string' ? Y : '';
            } else if (l && Object.prototype.hasOwnProperty.call(l, _)) d = '';
            else if (S) {
              d = c[0];
              continue;
            } else this.logger.warn(`missed to pass in variable ${_} for interpolating ${n}`), (d = '');
          else typeof d != 'string' && !this.useRawValueToEscape && (d = pm(d));
          const L = R.safeValue(d);
          if (
            ((n = n.replace(c[0], L)),
            S ? ((R.regex.lastIndex += d.length), (R.regex.lastIndex -= c[0].length)) : (R.regex.lastIndex = 0),
            m++,
            m >= this.maxReplaces)
          )
            break;
        }
      }),
      n
    );
  }
  nest(n, a) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l,
      c,
      d;
    function m(h, g) {
      const v = this.nestingOptionsSeparator;
      if (h.indexOf(v) < 0) return h;
      const w = h.split(new RegExp(`${v}[ ]*{`));
      let S = `{${w[1]}`;
      (h = w[0]), (S = this.interpolate(S, d));
      const N = S.match(/'/g),
        R = S.match(/"/g);
      ((N && N.length % 2 === 0 && !R) || R.length % 2 !== 0) && (S = S.replace(/'/g, '"'));
      try {
        (d = JSON.parse(S)), g && (d = { ...g, ...d });
      } catch (_) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, _), `${h}${v}${S}`;
      }
      return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, h;
    }
    for (; (l = this.nestingRegexp.exec(n)); ) {
      let h = [];
      (d = { ...o }),
        (d = d.replace && typeof d.replace != 'string' ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue;
      let g = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const v = l[1].split(this.formatSeparator).map((w) => w.trim());
        (l[1] = v.shift()), (h = v), (g = !0);
      }
      if (((c = a(m.call(this, l[1].trim(), d), d)), c && l[0] === n && typeof c != 'string')) return c;
      typeof c != 'string' && (c = pm(c)),
        c || (this.logger.warn(`missed to resolve ${l[1]} for nesting ${n}`), (c = '')),
        g && (c = h.reduce((v, w) => this.format(v, w, o.lng, { ...o, interpolationkey: l[1].trim() }), c.trim())),
        (n = n.replace(l[0], c)),
        (this.regexp.lastIndex = 0);
    }
    return n;
  }
}
function H0(r) {
  let n = r.toLowerCase().trim();
  const a = {};
  if (r.indexOf('(') > -1) {
    const o = r.split('(');
    n = o[0].toLowerCase().trim();
    const l = o[1].substring(0, o[1].length - 1);
    n === 'currency' && l.indexOf(':') < 0
      ? a.currency || (a.currency = l.trim())
      : n === 'relativetime' && l.indexOf(':') < 0
      ? a.range || (a.range = l.trim())
      : l.split(';').forEach((d) => {
          if (!d) return;
          const [m, ...h] = d.split(':'),
            g = h
              .join(':')
              .trim()
              .replace(/^'+|'+$/g, '');
          a[m.trim()] || (a[m.trim()] = g),
            g === 'false' && (a[m.trim()] = !1),
            g === 'true' && (a[m.trim()] = !0),
            isNaN(g) || (a[m.trim()] = parseInt(g, 10));
        });
  }
  return { formatName: n, formatOptions: a };
}
function Sr(r) {
  const n = {};
  return function (o, l, c) {
    const d = l + JSON.stringify(c);
    let m = n[d];
    return m || ((m = r(fo(l), c)), (n[d] = m)), m(o);
  };
}
class Y0 {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ft.create('formatter')),
      (this.options = n),
      (this.formats = {
        number: Sr((a, o) => {
          const l = new Intl.NumberFormat(a, { ...o });
          return (c) => l.format(c);
        }),
        currency: Sr((a, o) => {
          const l = new Intl.NumberFormat(a, { ...o, style: 'currency' });
          return (c) => l.format(c);
        }),
        datetime: Sr((a, o) => {
          const l = new Intl.DateTimeFormat(a, { ...o });
          return (c) => l.format(c);
        }),
        relativetime: Sr((a, o) => {
          const l = new Intl.RelativeTimeFormat(a, { ...o });
          return (c) => l.format(c, o.range || 'day');
        }),
        list: Sr((a, o) => {
          const l = new Intl.ListFormat(a, { ...o });
          return (c) => l.format(c);
        }),
      }),
      this.init(n);
  }
  init(n) {
    const o = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }).interpolation;
    this.formatSeparator = o.formatSeparator ? o.formatSeparator : o.formatSeparator || ',';
  }
  add(n, a) {
    this.formats[n.toLowerCase().trim()] = a;
  }
  addCached(n, a) {
    this.formats[n.toLowerCase().trim()] = Sr(a);
  }
  format(n, a, o) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return a.split(this.formatSeparator).reduce((m, h) => {
      const { formatName: g, formatOptions: v } = H0(h);
      if (this.formats[g]) {
        let w = m;
        try {
          const S = (l && l.formatParams && l.formatParams[l.interpolationkey]) || {},
            N = S.locale || S.lng || l.locale || l.lng || o;
          w = this.formats[g](m, N, { ...v, ...l, ...S });
        } catch (S) {
          this.logger.warn(S);
        }
        return w;
      } else this.logger.warn(`there was no format function for ${g}`);
      return m;
    }, n);
  }
}
function q0(r, n) {
  r.pending[n] !== void 0 && (delete r.pending[n], r.pendingCount--);
}
class K0 extends bo {
  constructor(n, a, o) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = n),
      (this.store = a),
      (this.services = o),
      (this.languageUtils = o.languageUtils),
      (this.options = l),
      (this.logger = Ft.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = l.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5),
      (this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(o, l.backend, l);
  }
  queueLoad(n, a, o, l) {
    const c = {},
      d = {},
      m = {},
      h = {};
    return (
      n.forEach((g) => {
        let v = !0;
        a.forEach((w) => {
          const S = `${g}|${w}`;
          !o.reload && this.store.hasResourceBundle(g, w)
            ? (this.state[S] = 2)
            : this.state[S] < 0 ||
              (this.state[S] === 1
                ? d[S] === void 0 && (d[S] = !0)
                : ((this.state[S] = 1),
                  (v = !1),
                  d[S] === void 0 && (d[S] = !0),
                  c[S] === void 0 && (c[S] = !0),
                  h[w] === void 0 && (h[w] = !0)));
        }),
          v || (m[g] = !0);
      }),
      (Object.keys(c).length || Object.keys(d).length) &&
        this.queue.push({ pending: d, pendingCount: Object.keys(d).length, loaded: {}, errors: [], callback: l }),
      {
        toLoad: Object.keys(c),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(m),
        toLoadNamespaces: Object.keys(h),
      }
    );
  }
  loaded(n, a, o) {
    const l = n.split('|'),
      c = l[0],
      d = l[1];
    a && this.emit('failedLoading', c, d, a),
      o && this.store.addResourceBundle(c, d, o, void 0, void 0, { skipCopy: !0 }),
      (this.state[n] = a ? -1 : 2);
    const m = {};
    this.queue.forEach((h) => {
      L0(h.loaded, [c], d),
        q0(h, n),
        a && h.errors.push(a),
        h.pendingCount === 0 &&
          !h.done &&
          (Object.keys(h.loaded).forEach((g) => {
            m[g] || (m[g] = {});
            const v = h.loaded[g];
            v.length &&
              v.forEach((w) => {
                m[g][w] === void 0 && (m[g][w] = !0);
              });
          }),
          (h.done = !0),
          h.errors.length ? h.callback(h.errors) : h.callback());
    }),
      this.emit('loaded', m),
      (this.queue = this.queue.filter((h) => !h.done));
  }
  read(n, a, o) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      d = arguments.length > 5 ? arguments[5] : void 0;
    if (!n.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: n, ns: a, fcName: o, tried: l, wait: c, callback: d });
      return;
    }
    this.readingCalls++;
    const m = (g, v) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const w = this.waitingReads.shift();
          this.read(w.lng, w.ns, w.fcName, w.tried, w.wait, w.callback);
        }
        if (g && v && l < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, n, a, o, l + 1, c * 2, d);
          }, c);
          return;
        }
        d(g, v);
      },
      h = this.backend[o].bind(this.backend);
    if (h.length === 2) {
      try {
        const g = h(n, a);
        g && typeof g.then == 'function' ? g.then((v) => m(null, v)).catch(m) : m(null, g);
      } catch (g) {
        m(g);
      }
      return;
    }
    return h(n, a, m);
  }
  prepareLoading(n, a) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn('No backend was added via i18next.use. Will not load resources.'), l && l();
    typeof n == 'string' && (n = this.languageUtils.toResolveHierarchy(n)), typeof a == 'string' && (a = [a]);
    const c = this.queueLoad(n, a, o, l);
    if (!c.toLoad.length) return c.pending.length || l(), null;
    c.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(n, a, o) {
    this.prepareLoading(n, a, {}, o);
  }
  reload(n, a, o) {
    this.prepareLoading(n, a, { reload: !0 }, o);
  }
  loadOne(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const o = n.split('|'),
      l = o[0],
      c = o[1];
    this.read(l, c, 'read', void 0, void 0, (d, m) => {
      d && this.logger.warn(`${a}loading namespace ${c} for language ${l} failed`, d),
        !d && m && this.logger.log(`${a}loaded namespace ${c} for language ${l}`, m),
        this.loaded(n, d, m);
    });
  }
  saveMissing(n, a, o, l, c) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      m = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(a)) {
      this.logger.warn(
        `did not save key "${o}" as the namespace "${a}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(o == null || o === '')) {
      if (this.backend && this.backend.create) {
        const h = { ...d, isUpdate: c },
          g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let v;
            g.length === 5 ? (v = g(n, a, o, l, h)) : (v = g(n, a, o, l)),
              v && typeof v.then == 'function' ? v.then((w) => m(null, w)).catch(m) : m(null, v);
          } catch (v) {
            m(v);
          }
        else g(n, a, o, l, m, h);
      }
      !n || !n[0] || this.store.addResource(n[0], a, o, l);
    }
  }
}
function xm() {
  return {
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
    overloadTranslationOptionHandler: function (n) {
      let a = {};
      if (
        (typeof n[1] == 'object' && (a = n[1]),
        typeof n[1] == 'string' && (a.defaultValue = n[1]),
        typeof n[2] == 'string' && (a.tDescription = n[2]),
        typeof n[2] == 'object' || typeof n[3] == 'object')
      ) {
        const o = n[3] || n[2];
        Object.keys(o).forEach((l) => {
          a[l] = o[l];
        });
      }
      return a;
    },
    interpolation: {
      escapeValue: !0,
      format: (r) => r,
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
  };
}
function km(r) {
  return (
    typeof r.ns == 'string' && (r.ns = [r.ns]),
    typeof r.fallbackLng == 'string' && (r.fallbackLng = [r.fallbackLng]),
    typeof r.fallbackNS == 'string' && (r.fallbackNS = [r.fallbackNS]),
    r.supportedLngs && r.supportedLngs.indexOf('cimode') < 0 && (r.supportedLngs = r.supportedLngs.concat(['cimode'])),
    r
  );
}
function eo() {}
function Q0(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((a) => {
    typeof r[a] == 'function' && (r[a] = r[a].bind(r));
  });
}
class Pi extends bo {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = km(n)),
      (this.services = {}),
      (this.logger = Ft),
      (this.modules = { external: [] }),
      Q0(this),
      a && !this.isInitialized && !n.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(n, a), this;
      setTimeout(() => {
        this.init(n, a);
      }, 0);
    }
  }
  init() {
    var n = this;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      o = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof a == 'function' && ((o = a), (a = {})),
      !a.defaultNS &&
        a.defaultNS !== !1 &&
        a.ns &&
        (typeof a.ns == 'string' ? (a.defaultNS = a.ns) : a.ns.indexOf('translation') < 0 && (a.defaultNS = a.ns[0]));
    const l = xm();
    (this.options = { ...l, ...this.options, ...km(a) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = { ...l.interpolation, ...this.options.interpolation }),
      a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator),
      a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
    function c(v) {
      return v ? (typeof v == 'function' ? new v() : v) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Ft.init(c(this.modules.logger), this.options) : Ft.init(null, this.options);
      let v;
      this.modules.formatter ? (v = this.modules.formatter) : typeof Intl < 'u' && (v = Y0);
      const w = new ym(this.options);
      this.store = new gm(this.options.resources, this.options);
      const S = this.services;
      (S.logger = Ft),
        (S.resourceStore = this.store),
        (S.languageUtils = w),
        (S.pluralResolver = new W0(w, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        v &&
          (!this.options.interpolation.format || this.options.interpolation.format === l.interpolation.format) &&
          ((S.formatter = c(v)),
          S.formatter.init(S, this.options),
          (this.options.interpolation.format = S.formatter.format.bind(S.formatter))),
        (S.interpolator = new B0(this.options)),
        (S.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (S.backendConnector = new K0(c(this.modules.backend), S.resourceStore, S, this.options)),
        S.backendConnector.on('*', function (N) {
          for (var R = arguments.length, _ = new Array(R > 1 ? R - 1 : 0), L = 1; L < R; L++) _[L - 1] = arguments[L];
          n.emit(N, ..._);
        }),
        this.modules.languageDetector &&
          ((S.languageDetector = c(this.modules.languageDetector)),
          S.languageDetector.init && S.languageDetector.init(S, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((S.i18nFormat = c(this.modules.i18nFormat)), S.i18nFormat.init && S.i18nFormat.init(this)),
        (this.translator = new mo(this.services, this.options)),
        this.translator.on('*', function (N) {
          for (var R = arguments.length, _ = new Array(R > 1 ? R - 1 : 0), L = 1; L < R; L++) _[L - 1] = arguments[L];
          n.emit(N, ..._);
        }),
        this.modules.external.forEach((N) => {
          N.init && N.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      o || (o = eo),
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
          return n.store[v](...arguments);
        };
      }),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((v) => {
        this[v] = function () {
          return n.store[v](...arguments), n;
        };
      });
    const h = pi(),
      g = () => {
        const v = (w, S) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn('init: i18next is already initialized. You should call init just once!'),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            h.resolve(S),
            o(w, S);
        };
        if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized)
          return v(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, v);
      };
    return this.options.resources || !this.options.initImmediate ? g() : setTimeout(g, 0), h;
  }
  loadResources(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : eo;
    const l = typeof n == 'string' ? n : this.language;
    if ((typeof n == 'function' && (o = n), !this.options.resources || this.options.partialBundledLanguages)) {
      if (l && l.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return o();
      const c = [],
        d = (m) => {
          if (!m || m === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(m).forEach((g) => {
            g !== 'cimode' && c.indexOf(g) < 0 && c.push(g);
          });
        };
      l ? d(l) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((h) => d(h)),
        this.options.preload && this.options.preload.forEach((m) => d(m)),
        this.services.backendConnector.load(c, this.options.ns, (m) => {
          !m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), o(m);
        });
    } else o(null);
  }
  reloadResources(n, a, o) {
    const l = pi();
    return (
      n || (n = this.languages),
      a || (a = this.options.ns),
      o || (o = eo),
      this.services.backendConnector.reload(n, a, (c) => {
        l.resolve(), o(c);
      }),
      l
    );
  }
  use(n) {
    if (!n)
      throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!n.type)
      throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    return (
      n.type === 'backend' && (this.modules.backend = n),
      (n.type === 'logger' || (n.log && n.warn && n.error)) && (this.modules.logger = n),
      n.type === 'languageDetector' && (this.modules.languageDetector = n),
      n.type === 'i18nFormat' && (this.modules.i18nFormat = n),
      n.type === 'postProcessor' && Lp.addPostProcessor(n),
      n.type === 'formatter' && (this.modules.formatter = n),
      n.type === '3rdParty' && this.modules.external.push(n),
      this
    );
  }
  setResolvedLanguage(n) {
    if (!(!n || !this.languages) && !(['cimode', 'dev'].indexOf(n) > -1))
      for (let a = 0; a < this.languages.length; a++) {
        const o = this.languages[a];
        if (!(['cimode', 'dev'].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
          this.resolvedLanguage = o;
          break;
        }
      }
  }
  changeLanguage(n, a) {
    var o = this;
    this.isLanguageChangingTo = n;
    const l = pi();
    this.emit('languageChanging', n);
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
            return o.t(...arguments);
          }),
          a &&
            a(h, function () {
              return o.t(...arguments);
            });
      },
      m = (h) => {
        !n && !h && this.services.languageDetector && (h = []);
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
      !n && this.services.languageDetector && !this.services.languageDetector.async
        ? m(this.services.languageDetector.detect())
        : !n && this.services.languageDetector && this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(m)
          : this.services.languageDetector.detect(m)
        : m(n),
      l
    );
  }
  getFixedT(n, a, o) {
    var l = this;
    const c = function (d, m) {
      let h;
      if (typeof m != 'object') {
        for (var g = arguments.length, v = new Array(g > 2 ? g - 2 : 0), w = 2; w < g; w++) v[w - 2] = arguments[w];
        h = l.options.overloadTranslationOptionHandler([d, m].concat(v));
      } else h = { ...m };
      (h.lng = h.lng || c.lng),
        (h.lngs = h.lngs || c.lngs),
        (h.ns = h.ns || c.ns),
        (h.keyPrefix = h.keyPrefix || o || c.keyPrefix);
      const S = l.options.keySeparator || '.';
      let N;
      return (
        h.keyPrefix && Array.isArray(d)
          ? (N = d.map((R) => `${h.keyPrefix}${S}${R}`))
          : (N = h.keyPrefix ? `${h.keyPrefix}${S}${d}` : d),
        l.t(N, h)
      );
    };
    return typeof n == 'string' ? (c.lng = n) : (c.lngs = n), (c.ns = a), (c.keyPrefix = o), c;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(n) {
    this.options.defaultNS = n;
  }
  hasLoadedNamespace(n) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages), !1;
    const o = a.lng || this.resolvedLanguage || this.languages[0],
      l = this.options ? this.options.fallbackLng : !1,
      c = this.languages[this.languages.length - 1];
    if (o.toLowerCase() === 'cimode') return !0;
    const d = (m, h) => {
      const g = this.services.backendConnector.state[`${m}|${h}`];
      return g === -1 || g === 2;
    };
    if (a.precheck) {
      const m = a.precheck(this, d);
      if (m !== void 0) return m;
    }
    return !!(
      this.hasResourceBundle(o, n) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(o, n) && (!l || d(c, n)))
    );
  }
  loadNamespaces(n, a) {
    const o = pi();
    return this.options.ns
      ? (typeof n == 'string' && (n = [n]),
        n.forEach((l) => {
          this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
        }),
        this.loadResources((l) => {
          o.resolve(), a && a(l);
        }),
        o)
      : (a && a(), Promise.resolve());
  }
  loadLanguages(n, a) {
    const o = pi();
    typeof n == 'string' && (n = [n]);
    const l = this.options.preload || [],
      c = n.filter((d) => l.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return c.length
      ? ((this.options.preload = l.concat(c)),
        this.loadResources((d) => {
          o.resolve(), a && a(d);
        }),
        o)
      : (a && a(), Promise.resolve());
  }
  dir(n) {
    if (
      (n ||
        (n =
          this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
      !n)
    )
      return 'rtl';
    const a = [
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
      o = (this.services && this.services.languageUtils) || new ym(xm());
    return a.indexOf(o.getLanguagePartFromCode(n)) > -1 || n.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    return new Pi(n, a);
  }
  cloneInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : eo;
    const o = n.forkResourceStore;
    o && delete n.forkResourceStore;
    const l = { ...this.options, ...n, isClone: !0 },
      c = new Pi(l);
    return (
      (n.debug !== void 0 || n.prefix !== void 0) && (c.logger = c.logger.clone(n)),
      ['store', 'services', 'language'].forEach((m) => {
        c[m] = this[m];
      }),
      (c.services = { ...this.services }),
      (c.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
      o && ((c.store = new gm(this.store.data, l)), (c.services.resourceStore = c.store)),
      (c.translator = new mo(c.services, l)),
      c.translator.on('*', function (m) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++) g[v - 1] = arguments[v];
        c.emit(m, ...g);
      }),
      c.init(l, a),
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
const Ue = Pi.createInstance();
Ue.createInstance = Pi.createInstance;
Ue.createInstance;
Ue.dir;
Ue.init;
Ue.loadResources;
Ue.reloadResources;
Ue.use;
Ue.changeLanguage;
Ue.getFixedT;
Ue.t;
Ue.exists;
Ue.setDefaultNamespace;
Ue.hasLoadedNamespace;
Ue.loadNamespaces;
Ue.loadLanguages;
const X0 = 'Indicates a required ﬁeld',
  G0 = 'Français',
  J0 = 'Your Vehicle Renewal Reminder',
  Z0 = 'Manage how and when you get your vehicle registration renewal reminders',
  ew = {
    cart: 'Cart',
    search: 'Search',
    signIn: 'Sign in',
    account: 'Account',
    accountOptionsSignOut: {
      heading: 'Sign in to your account',
      subhead: "If you don't have one yet, you can <1>create an account</1>.",
      form: {
        email: 'Email address',
        password: 'Password',
        rememberMeLabel: 'Stay logged in',
        rememberMeText: 'Remember me',
        btnText: 'Sign in',
        footerText: 'Forgot password?',
      },
    },
    governmentOfNewBrunswick: 'Government of New Brunswick',
    accountOptionsSignIn: {
      heading: 'Your account',
      options: [
        { link: '/account-settings', text: 'Edit your profile' },
        { link: '/authentication', text: 'Sign out' },
      ],
    },
  },
  tw = {
    heading: '404',
    description1: 'Sorry, the page cannot be found',
    description2:
      'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    description3: 'Please try the following:',
    description4: 'If you typed the page address in the address bar, make sure that it is spelled correctly',
    description5: 'Or try the <1>Services New Brunswick Home Page</1>',
    description6: 'Or <1>Government of New Brunswick Search Page</1>',
    description7: 'Click the back button to try another Link.',
  },
  nw = {
    backButton: 'Back',
    heading: 'Vehicle registration renewal reminders',
    checkboxHeading: 'Choose as many options as you would like:',
    subsectionOne: {
      heading: 'Email and text reminder',
      subhead: 'Choose when and how you receive your reminders.',
      questionOne: {
        question: 'How do you want to be reminded?',
        errorMsg: 'You must select an option',
        options: [
          { label: 'Email' },
          {
            label: 'Text Message',
            errorMsg:
              "A cellphone number is required to use the 'text message' option.<1></1>Go to '<2>Edit your profile</2>' to add a phone number.",
          },
        ],
      },
      questionTwo: {
        question: 'When do you want to be reminded?',
        options: [
          { label: '2 weeks before expiry' },
          { label: '4 weeks before expiry' },
          { label: '6 weeks before expiry' },
        ],
      },
      primaryButtonLabel: 'Save changes',
    },
    subsectionTwo: {
      heading: 'Paper reminders',
      subhead: 'You can stop receiving paper reminders for your vehicles.',
      buttonText: 'Stop paper reminders',
    },
    subsectionThree: {
      heading: 'Add or remove a vehicle',
      subhead: 'Vehicle information is required to receive renewal reminders.',
      buttonText: 'Add vehicle',
    },
    textMsgRemindersModal: {
      title: 'Text message reminders',
      description1:
        "Looks like you don't have a mobile phone number on file, would you like to add one? This will allow you to receive text message reminders on your mobile device.",
      description2: 'You can also skip this step and add your mobile phone number in your “My account” later on.',
      form: {
        label: 'Mobile phone number',
        checkboxText: 'Do not ask me again',
        primaryBtnLabel: 'Add mobile phone number',
        linkLabel: 'Skip',
      },
    },
    optOutPaperModal: {
      title: 'Stop paper reminders',
      primaryButtonLabel: 'Stop paper reminders',
      secondaryButtonLabel: 'Cancel',
      form: {
        descriptionOne:
          'Please note that by opting out of a paper vehicle registration reminder for this vehicle, you acknowledge and consent to no longer receive paper reminders for all vehicles registered to you. This choice does not affect your email reminders.',
        descriptionTwo: "Make sure your name matches your driver's licence.",
        givenNames: { label: 'Given name(s)' },
        lastName: { label: 'Last name' },
        vin: { label: 'VIN (First 6 characters)' },
        licence: { label: 'Licence plate' },
      },
    },
    tooltip: {
      vin: {
        title: "What's in a VIN?",
        listOne: [
          { item: 'Your Vehicle Information Number (VIN) is 17 characters long' },
          { item: 'We only ask for you to provide the first 6 characters of your VIN' },
          { item: 'You can find it on your Certification of Vehicle Registration' },
          { item: 'For home trailers or vehicles without VIN, please enter NA' },
        ],
        listTwo: [
          { item: 'Your Vehicle Information Number (VIN) is 17 characters long' },
          { item: 'You can find it on your Certification of Vehicle Registration' },
          { item: 'For home trailers or vehicles without VIN, please enter NA' },
        ],
      },
    },
    addVehicleModal: {
      title: 'Add a new vehicle',
      secondaryButton: 'Cancel',
      primaryButton: { save: 'Save', add: 'Add vehicle' },
      form: {
        title: 'Add a vehicle you want to get a reminder for.',
        vinLabelInput: 'VIN (First 6 characters)',
        licenceLabelInput: 'Licence plate',
      },
      customName: { title: 'Vehicle added', skip: 'Skip' },
    },
    vehicleInfo: {
      name: 'Description',
      vin: 'VIN',
      licence: 'Licence plate',
      date: 'Expiry date',
      addCustomLabelInput: 'Add custom name for this vehicle',
      editCustomLabelInput: 'Edit custom name for this vehicle',
      helperText: '(Optional)',
    },
    customNameModal: {
      add: { title: 'Add custom name', primaryButtonLabel: 'Add custom name' },
      edit: {
        title: 'Edit custom name',
        primaryButtonLabelAccordion: 'Edit custom name',
        primaryButtonLabelModal: 'Save custom name',
      },
      secondaryButtonLabel: 'Cancel',
    },
    removeVehicleModal: {
      title: 'Remove this vehicle',
      primaryButtonLabel: 'Remove this vehicle',
      secondaryButtonLabel: 'Cancel',
      message:
        'This action will remove the <strong>"{{vehicleName}}"</strong> from your list and stop renewal reminders via email.',
    },
    feedbackModal: {
      title: 'We want to hear from you',
      description: 'How did you find setting up your renewal reminders today?',
      primaryButton: 'Submit',
      tertiaryButton: 'Skip',
      textAreaLabel: 'How could we make this better?',
      textAreaPlaceHolder: 'Type your feedback here',
      dissatisfiedReaction: 'Dissatisfied',
      neutralReaction: 'Neutral',
      satisfiedReaction: 'Satisfied',
      successAlertTitle: 'Successfully submitted your feedback',
      successAlertDescription: 'Thank you for your feedback!',
    },
    discardModal: {
      title: 'Discard changes',
      content: "You have made changes that haven't been saved yet. Would you like to discard all changes?",
      primaryButtonLabel: 'Discard',
      secondaryButtonLabel: 'Cancel',
    },
    toastMessages: {
      saveChangesSuccess: 'Successfully saved registration renewal reminders.',
      stopPaperSuccess: 'Successfully requested to stop paper reminders for all vehicles.',
      addVehicleSuccess: 'Successfully added your vehicle <strong>"{{vehicleName}}"</strong>',
      editCustomNameSuccess: 'Successfully saved <strong>"{{customName}}"</strong> as a custom name.',
      addCustomNameSuccess: 'Successfully added <strong>"{{customName}}"</strong> as a custom name.',
      removeVehicleSuccess: 'Successfully removed your vehicle <strong>"{{vehicleName}}"</strong>',
      addVehicleAlert: 'Before you choose when and how you receive reminders, you need to <1>add your vehicle(s)</1>.',
    },
  },
  rw = {
    genericSuccess: 'Successfully made changes to "My Account"',
    phoneSuccess: 'Your changes have been saved.',
    backButton: 'Back to Vehicle Registration Renewal Reminders',
    heading: 'My account',
    email: 'Email',
    phone: 'Cellphone number',
    language: 'Reminder language',
    english: 'English',
    french: 'French',
    save: 'Save changes',
    cancel: 'Cancel',
    edit: 'Edit',
    addPhone: 'Add phone number',
    remove: 'Remove',
    editLanguage: { pageHeading: 'Edit my account', description: 'Choose your preferred language for your reminders.' },
    emailModal: {
      save: 'Save email',
      heading: 'Edit email address',
      subheading: 'Edit your email address you would like to receive registration renewal reminders for',
      emailPlaceholder: 'user@example.com',
    },
    phoneModal: {
      save: 'Save phone number',
      headingEdit: 'Edit phone number',
      headingAdd: 'Add phone number',
      headingRemove: 'Remove this cellphone number',
      subheading1: 'Add a Canadian cellphone number to receive registration renewal reminders by text message.',
      subheading2: 'A 6-digit access code will be sent to this phone number for activation.',
      invalidNumber: 'You must provide a Canadian cell phone number.',
      remove: {
        primaryButtonLabel: 'Remove this cellphone number',
        secondaryButtonLabel: 'Cancel',
        message:
          'This action will remove the cellphone number <strong>"{{smsNumber}}"</strong> from your account and stop renewal reminders via text messages.',
      },
    },
  },
  iw = {
    termsAndConditions: {
      title: 'Terms and Conditions: Motor Vehicle Renewal Reminders',
      content:
        'By accepting the terms and conditions of this service, you agree and acknowledge that you have read and understood the following: <unorderedList><listItem>Service New Brunswick will send email and/or text message reminders to the provided email address and/or phone number at the frequency selected prior to the expiry date of the vehicle registration identified in this transaction.</listItem><listItem>Information collected for the provision of this reminder is retained by Service New Brunswick until you remove the vehicle from your account in order to stop receiving these reminder emails and texts.</listItem><listItem>You recognize that removing your vehicle from your account under the reminder provision will only opt you out of getting renewal reminder email and/or texts. You as an owner or agent acknowledge that this does not relieve you in any manner from other legal requirements of (including but not limited to) ownership transfer, registration renewal and proper liability insurance coverages etc.</listItem><listItem>You recognize that proper email and/or text delivery is contingent on supplying and maintaining the correct email address and/or phone number. If your email address and/ or phone number changes, it is your responsibility to ensure it is updated in your account settings.</listItem><listItem>Neither Service New Brunswick nor the Government of New Brunswick can be held responsible for any damages, fines or penalties resulting from any undelivered email or text, no matter the reason.</listItem><listItem>Motor Vehicle Renewal Reminder email and text notifications are sent unencrypted and unsecured. The email and text notifications could be lost or intercepted, or could be viewed or altered by others who have access to your email account or phone number. By agreeing to use this service, you accept this risk and acknowledge that neither Service New Brunswick nor the Government of New Brunswick will be liable if you are unable to access or receive the email and text notifications, nor for any delay or inability to deliver notifications.</listItem><listItem>This service allows you to submit a request to opt out of paper reminders. By entering details for one vehicle during this request, you acknowledge and consent to no longer receiving paper reminders for all vehicles registered to you.</listItem><listItem>These Terms and Conditions may be changed from time to time. It is your responsibility to check the terms and conditions from time to time, and every time you sign in. You agree that your use of the service after any change to these terms constitutes your agreement to the new terms. If you do not agree to the updated terms and conditions, then it is your responsibility to remove all vehicles from your account in order to stop receiving the reminders.</listItem></unorderedList>',
    },
    emailScreen: {
      title: 'Sign in',
      description1: "If you don't have one yet, you can <1>create an account.</1>",
      description2: 'Enter your email address to receive an access code.',
      emailInputLabel: 'Email',
      emailPlaceholder: 'user@example.com',
      checkboxLabel: 'Keep me signed in',
      primaryButton: 'Send code',
      errorMsg: 'Enter your email in this format: user@example.com',
      termsAndConditions: 'By using this service, you  agree to the <1>terms and conditions.</1>',
      sessionExpired: 'Your session has expired due to inactivity. Please <1>sign in</1> again to continue',
    },
    checkEmailScreen: {
      title: 'Check your email',
      description1: 'Enter the 6-digit code we sent to your email. This code is valid for 30 minutes.',
      description2: "If you didn't get it, you can resend the code after 2 minutes.",
      description3: "If you didn't get it, <1>resend code</1>.",
      resendCodeMsg: 'The 6-digit code was resent to your email. This code is valid for 30 minutes.',
      codeInputLabel: '',
      codePlaceholder: '',
      primaryButton: 'Submit',
      secondaryButton: 'Send a text message instead',
    },
    phoneScreen: {
      backButton: 'Back',
      title: 'Sign in',
      description1: "If you don't have one yet, you can <1>create an account.</1>",
      description2: 'Enter your mobile phone number to receive an access code by text.',
      phoneInputLabel: 'Mobile Phone Number',
      phonePlaceholder: '506-555-55555',
      primaryButton: 'Send code',
    },
    phoneCodeScreen: {
      backButton: 'Back',
      title: 'Check your phone',
      description1: 'Enter the 6-digit code we texted to you.',
      description2: 'This code is valid for 30 minutes.',
      description3: "If you didn't get it, you can resend the code after 2 minutes.",
      description4: "If you didn't get it, you can <1>resend the code</1>.",
      resendCodeMsg: 'The 6-digit code was texted to you. This code is valid for 30 minutes.',
      codeInputLabel: 'Enter 6 digit code',
      codePlaceholder: '',
      secondaryButton: 'Send an email instead',
    },
    codeAuthentication: { fieldLegend: 'Enter the 6-digit code', label: 'Digit' },
    signUpScreen: {
      title: 'Sign up',
      description: 'To get reminders, please provide the details below.',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      confirmEmail: 'Confirm email',
      smsNumber: 'Phone number',
      licenceNumber: "Driver's licence number",
      licencePlate: 'Licence plate',
      primaryButton: 'Next',
      placeHolderText: 'user@example.com',
      termsAndConditions: 'I agree and accept the <1>terms and conditions.</1>',
    },
    helpSection: {
      title: 'Get help',
      email: 'Email: <1>snb@snb.ca</1>',
      phone: 'Toll free: <1>1-888-832-2762</1> (option #2)',
    },
    modal: { emailHeading: 'Check your email', phoneHeading: 'Check your cellphone' },
  },
  aw = {
    invalidVin:
      'This VIN is not valid, you must enter the first 6 characters of your VIN. For home trailers or vehicles that do not have a VIN, please enter NA.',
    invalidLicence: 'This is not a valid licence plate.',
    invalidGivenNames: 'Please enter a valid given name.',
    invalidLastName: 'Please enter a valid last name.',
    nonregisteredLicence: 'No match found.',
    customNameWithProfanity: 'Sorry, we cannot accept that name. Please try again.',
    invalidCustomName: 'This is not a valid custom name.',
    invalidSMSNumber: 'This phone number is not valid.',
    invalidCodeEmail: 'The code you entered is not valid. Check your email again, or <1>resend code</1>.',
    expiredCodeEmail: 'The code you entered has expired. Check your email again, or <1>resend code</1>.',
    invalidCodeSMS: 'The code you entered is not valid. Check your text again, or <1>resend code</1>.',
    expiredCodeSMS: 'The code you entered has expired. Check your text again, or <1>resend code</1>.',
    resendCodeDisabled: 'Wait a moment. The code can only be resent every 2 minutes.',
    duplicatedVehicle: 'This vehicle has already been added to your account.',
    unmatchedEmail: 'Emails must match.',
    genericErrMsg: 'Sorry, we are experiencing technical difficulties. Please try again later.',
    gBizFailErrorMsg:
      'Oops! Something went wrong. Please double-check your input and make sure you have entered the correct information.',
    errorModal: {
      title: 'Error',
      content: 'Sorry, we are currently experiencing technical difficulties. Please try again later.',
      buttonText: 'OK',
    },
    noPhoneAdded:
      "<strong>A cellphone number is required to use the 'text message' option. <br> Go to <1>'Edit your profile'</1> to add a phone number</strong>",
    noOptionSelected: 'You must select an option',
    noVehicleAdded: '<strong>You must <1>add your vehicles(s)</1> to receive reminders</strong>',
    missingInformation: '<strong>You have not provided all required information</strong>',
  },
  ow = { unavailableVehicle: 'Vehicle details currently unavailable.' },
  sw = { copyright: '© Government of New Brunswick', privacy: '<1>Privacy</1>', disclaimer: '<1>Disclaimer</1>' },
  lw = {
    disclaimer: X0,
    SwitchLanguage: G0,
    pageTitle: J0,
    pageDescription: Z0,
    mainNavigation: ew,
    notFound: tw,
    notifications: nw,
    accountSettings: rw,
    authentication: iw,
    errorsMsg: aw,
    warningMsg: ow,
    footer: sw,
  },
  uw = 'Indique un champ obligatoire',
  cw = 'English',
  fw = "Rappel pour le renouvellement de l'immatriculation de votre véhicule",
  dw =
    "Gérez le moment et la manière dont vous recevez les rappels de renouvellement d'immatriculation de votre véhicule.",
  mw = {
    cart: 'Chariot',
    search: 'Rechercher',
    signIn: 'Ouvrir une session',
    account: 'Compte',
    accountOptionsSignOut: {
      heading: 'Connectez-vous à votre compte',
      subhead: "Si vous n'en avsign iez pas encore, vous pouvez <1>créer un compte</1>.",
      form: {
        email: 'Courriel',
        password: 'Mot de passe',
        rememberMeLabel: 'Garder ma session ouverte',
        rememberMeText: 'Mémoriser mes informations',
        btnText: 'Ouvrir une session',
        footerText: 'Vous avez oublié votre mot de passe?',
      },
    },
    governmentOfNewBrunswick: 'Le gouvernement du Nouveau-Brunswick',
    accountOptionsSignIn: {
      heading: 'Votre compte',
      options: [
        { link: '/account-settings', text: 'Modifiez votre profil' },
        { link: '/authentication', text: 'Déconnexion' },
      ],
    },
  },
  pw = {
    heading: '404',
    description1: 'Impossible de trouver la page',
    description2:
      "Il est possible que la page que vous cherchez ait été retirée, renommée ou qu'elle ne soit pas disponible temporairement.",
    description3: 'Veuillez essayer ce qui suit.',
    description4:
      "Si vous avez inscrit l'adresse de la page dans la barre d'adresse, assurez-vous de l'avoir épelée correctement",
    description5: "Ou encore, essayer d'ouvrir <1>la page du Service Nouveau-Brunswick</1>",
    description6: "Ou encore, essayer d'ouvrir la page <1>Recherche du gouvernement du Nouveau-Brunswick</1>",
    description7: 'Cliquez sur le bouton Précédent pour essayer un autre lien.',
  },
  hw = {
    backButton: 'Précédent',
    heading: "Rappels de renouvellement de l'immatriculation des véhicules",
    checkboxHeading: "Choisissez autant d'options que vous le souhaitez :",
    subsectionOne: {
      heading: 'Rappel par courriel et par texto',
      subhead: 'Choisissez quand et comment vous recevez vos rappels.',
      questionOne: {
        question: 'Comment voulez-vous recevoir vos rappels?',
        errorMsg: 'NEEDS TRANSLATION [You must select an option]',
        options: [
          { label: 'Courriel' },
          {
            label: 'Texto',
            errorMsg:
              "Un numéro de cellulaire est requis pour utiliser l'option « texto ». Allez à « Modifiez votre profil » pour ajouter un numéro de téléphone.",
          },
        ],
      },
      questionTwo: {
        question: 'Quand voulez-vous recevoir vos rappels?',
        options: [
          { label: "2 semaines avant l'expiration" },
          { label: "4 semaines avant l'expiration" },
          { label: "6 semaines avant l'expiration" },
        ],
      },
      primaryButtonLabel: 'Enregistrer les modifications',
    },
    subsectionTwo: {
      heading: 'Rappels papier',
      subhead: "Vous pouvez arrêter de recevoir des rappels papier pour l'immatriculation de vos véhicules.",
      buttonText: 'Arrêter les rappels papier',
    },
    subsectionThree: {
      heading: 'Ajouter ou supprimer un véhicule',
      subhead: 'Les informations sur le véhicule sont nécessaires pour recevoir les rappels de renouvellement.',
      buttonText: 'Ajouter un véhicule',
    },
    textMsgRemindersModal: {
      title: 'Rappels par texto',
      description1:
        "Il semblerait que vous n'ayez pas de numéro de cellulaire dans votre dossier. Souhaitez-vous en ajouter un? Cela vous permettra de recevoir des rappels par texto sur votre appareil mobile.",
      description2:
        'Vous pouvez également passer cette étape et ajouter votre numéro de cellulaire à « Mon compte » plus tard.',
      form: {
        label: 'Numéro de cellulaire',
        checkboxText: 'Ne plus me demander',
        primaryBtnLabel: 'Ajouter le numéro de cellulaire',
        linkLabel: 'Passer',
      },
    },
    optOutPaperModal: {
      title: 'Arrêter les rappels papier',
      primaryButtonLabel: 'Arrêter les rappels papier',
      secondaryButtonLabel: 'Annuler',
      form: {
        descriptionOne:
          "Veuillez noter qu'en choisissant de ne plus recevoir de rappel papier concernant le renouvellement de l'immatriculation de ce véhicule, vous acceptez de ne plus recevoir de rappel papier pour aucun des véhicules immatriculés à votre nom. Ce choix n'aura aucune incidence sur les rappels envoyés par courriel.",
        descriptionTwo: 'Assurez-vous que votre nom correspond à celui qui figure sur votre permis de conduire.',
        givenNames: { label: 'Prénom(s)' },
        lastName: { label: 'Nom de famille' },
        vin: { label: 'NIV (six premiers caractères)' },
        licence: { label: "Plaque d'immatriculation" },
      },
    },
    tooltip: {
      vin: {
        title: "Qu'est-ce qu'un NIV?",
        listOne: [
          { item: "Votre numéro d'identification du véhicule (NIV) comporte 17 caractères" },
          { item: 'Vous devez uniquement indiquer les six premiers caractères du NIV' },
          { item: "Vous le trouverez sur votre certificat d'immatriculation du véhicule" },
          { item: 'Pour les remorques artisanales ou les véhicules sans NIV, veuillez indiquer NA' },
        ],
        listTwo: [
          { item: "Votre numéro d'identification du véhicule (NIV) comporte 17 caractères" },
          { item: "Vous le trouverez sur votre certificat d'immatriculation du véhicule" },
          { item: 'Pour les remorques artisanales ou les véhicules sans NIV, veuillez indiquer NA' },
        ],
      },
    },
    addVehicleModal: {
      title: 'Ajouter un nouveau véhicule',
      secondaryButton: 'Annuler',
      primaryButton: { save: 'Enregistrer', add: 'Ajouter un véhicule' },
      form: {
        title: 'Ajoutez un véhicule pour lequel vous voulez recevoir un rappel.',
        vinLabelInput: 'NIV (six premiers caractères)',
        licenceLabelInput: "Plaque d'immatriculation",
      },
      customName: { title: 'Véhicule ajouté', skip: 'Passer' },
    },
    vehicleInfo: {
      name: 'Description ',
      vin: 'NIV ',
      licence: "Plaque d'immatriculation ",
      date: "Date d'expiration ",
      addCustomLabelInput: 'Ajouter un nom personnalisé pour ce véhicule ',
      editCustomLabelInput: 'Modifier le nom personnalisé pour ce véhicule ',
      helperText: '(Facultatif)',
    },
    customNameModal: {
      add: { title: 'Ajouter un nom personnalisé', primaryButtonLabel: 'Ajouter un nom personnalisé' },
      edit: {
        title: 'Modifier le nom personnalisé',
        primaryButtonLabelAccordion: 'Modifier le nom personnalisé',
        primaryButtonLabelModal: 'Enregistrer le nom personnalisé',
      },
      secondaryButtonLabel: 'Annuler',
    },
    removeVehicleModal: {
      title: 'Supprimer le véhicule',
      primaryButtonLabel: 'Supprimer le véhicule',
      secondaryButtonLabel: 'Annuler',
      message:
        'Cette action supprimera <strong>"{{vehicleName}}"</strong> de votre liste et arrêtera les rappels de renouvellement par courriel.',
    },
    feedbackModal: {
      title: 'Nous voulons connaître votre opinion',
      description: "Comment s'est passé l'enregistrement de vos rappels de renouvellement?",
      primaryButton: 'Soumettre',
      tertiaryButton: 'Passer',
      textAreaLabel: "Comment pourrions-nous l'améliorer?",
      textAreaPlaceHolder: 'Saisissez vos commentaires ici',
      dissatisfiedReaction: 'Insatisfait(e)',
      neutralReaction: 'Sans opinion',
      satisfiedReaction: 'Satisfait(e)',
      successAlertTitle: 'Vos commentaires ont été soumis avec succès',
      successAlertDescription: 'Merci pour vos commentaires!',
    },
    discardModal: {
      title: 'Supprimer les modifications',
      content:
        "Vous avez effectué des modifications qui n'ont pas encore été enregistrées. Souhaitez-vous annuler toutes les modifications?",
      primaryButtonLabel: 'Supprimer',
      secondaryButtonLabel: 'Annuler',
    },
    toastMessages: {
      saveChangesSuccess:
        "Les rappels de renouvellement d'immatriculation de véhicules ont été enregistrés avec succès.",
      stopPaperSuccess: "La demande d'arrêter les rappels papier pour tous les véhicules a été envoyée avec succès.",
      addVehicleSuccess: 'Votre véhicule <strong>"{{vehicleName}}"</strong> a été ajouté avec succès.',
      editCustomNameSuccess: 'Le nom personnalisé <strong>"{{customName}}"</strong> a été enregistré avec succès.',
      addCustomNameSuccess: 'Le nom personnalisé <strong>"{{customName}}"</strong> a été enregistré avec succès.',
      removeVehicleSuccess: 'Votre véhicule <strong>"{{vehicleName}}"</strong> a été supprimé avec succès.',
      addVehicleAlert:
        'Avant de choisir comment et quand vous recevez vos rappels, vous devez <1>ajouter votre (vos) véhicule(s)</1>.',
    },
  },
  gw = {
    genericSuccess: 'Les modifications à  "Mon compte" ont été effectuées avec succès',
    phoneSuccess: 'Supprimer ce numéro de cellulaire',
    backButton: "Retourner aux rappels de renouvellement de l'immatriculation des véhicules",
    heading: 'Mon compte',
    email: 'Courriel ',
    phone: 'Numéro de cellulaire',
    language: 'Langue de rappel ',
    english: 'Anglais',
    french: 'Français',
    save: 'Enregistrer les modifications',
    cancel: 'Annuler',
    edit: 'Modifier',
    addPhone: 'Ajouter numéro de téléphone',
    remove: 'Supprimer',
    editLanguage: {
      pageHeading: 'Modifier mon compte',
      description: 'Choisissez votre langue de préférence pour les rappels.',
    },
    emailModal: {
      save: 'Enregistrer le courriel',
      heading: 'Modifier le courriel',
      subheading:
        "Modifiez l'adresse courriel à laquelle vous souhaitez recevoir des rappels de renouvellement d'immatriculation",
      emailPlaceholder: 'utilisateur@exemple.com',
    },
    phoneModal: {
      save: 'Enregistrer le numéro de cellulaire',
      headingEdit: 'Modifier le numéro de téléphone',
      headingAdd: 'Ajouter numéro de téléphone',
      headingRemove: 'Supprimer numéro de téléphone',
      subheading1:
        "Ajoutez un numéro de cellulaire canadien pour recevoir des rappels de renouvellement d'immatriculation par texto.",
      subheading2: "Un code d'accès à six chiffres sera envoyé à ce numéro de téléphone aux fins d'activation.",
      invalidNumber: 'Vous devez fournir un numéro de cellulaire canadien.',
      remove: {
        primaryButtonLabel: 'Supprimer ce numéro de cellulaire',
        secondaryButtonLabel: 'Annuler',
        message:
          'Cette action supprimera le numéro de cellulaire <strong>{{smsNumber}}</strong> de votre compte et arrêtera les rappels de renouvellement par texto.',
      },
    },
  },
  vw = {
    termsAndConditions: {
      title:
        "Conditions générales : rappels concernant le renouvellement de l'immatriculation des véhicules automobiles",
      content:
        "En acceptant les conditions générales de ce service, vous acceptez et reconnaissez avoir lu et compris ce qui suit : <unorderedList><listItem>Service Nouveau-Brunswick enverra des rappels sous la forme de courriels ou de messages textes aux adresses de courriel et aux numéros de téléphone fournis à la fréquence choisie avant la date d'expiration de l'immatriculation du véhicule visé par cette transaction.</listItem><listItem>L'information recueillie pour l'envoi de ce rappel est conservée par Service Nouveau-Brunswick jusqu'à ce que vous supprimiez le véhicule de votre compte afin de ne plus recevoir ces courriels ou messages textes de rappel.</listItem><listItem>Vous reconnaissez que le fait de supprimer votre véhicule de votre compte en vertu de la disposition relative aux rappels fera uniquement en sorte que vous ne receviez plus les courriels ou messages textes de rappel concernant le renouvellement de l'immatriculation. En tant que propriétaire ou agent, vous reconnaissez que cela ne vous dispense en aucune manière des autres obligations légales, notamment le transfert de propriété, le renouvellement de l'immatriculation et les couvertures d'assurance responsabilité civile adéquates.</listItem><listItem>Vous reconnaissez que, pour recevoir les rappels par courriel ou message texte, vous devez fournir la bonne adresse de courriel et le bon numéro de téléphone. Si votre adresse de courriel ou votre numéro de téléphone change, il vous incombe d'apporter les changements qui s'imposent dans les réglages de votre compte.</listItem><listItem>Ni Service Nouveau-Brunswick ni le gouvernement du Nouveau-Brunswick ne peuvent être tenus responsables de tout dommage, amende ou pénalité attribuable à un courriel ou à un message texte non transmis, et ce, quelle que soit la raison.</listItem><listItem>Les rappels concernant le renouvellement de l'immatriculation des véhicules automobiles envoyés par courriel ou message texte ne sont ni cryptés ni sécurisés. Ces notifications par courriel ou message texte pourraient être perdues ou interceptées ou être lues ou modifiées par des personnes qui ont accès à votre compte de courriels ou à votre téléphone. En acceptant d'utiliser ce service, vous acceptez les risques et reconnaissez que ni Service Nouveau-Brunswick ni le gouvernement du Nouveau-Brunswick ne pourront être tenus responsables si vous n'êtes pas en mesure d'accéder aux courriels et aux messages textes de notification ou de les recevoir ni être tenus pour responsables pour un retard dans la transmission de ces notifications ou une incapacité à les transmettre.</listItem><listItem>Ce service vous permet de soumettre une demande de retrait des rappels par document papier. En entrant les renseignements pour un véhicule lors de cette demande, vous acceptez de ne plus recevoir ces rappels par document papier pour tous les véhicules immatriculés à votre nom.</listItem><listItem>Les présentes conditions générales peuvent être modifiées à l'occasion. Il vous incombe d'en prendre connaissance périodiquement et chaque fois que vous vous connectez à votre compte. Vous acceptez que votre utilisation du service après toute modification de ces conditions constitue votre accord avec les nouvelles conditions. Si vous n'êtes pas en accord avec les nouvelles conditions générales, il vous incombe de retirer tous les véhicules de votre compte pour mettre un terme à l'envoi de ces rappels.</listItem></unorderedList>",
    },
    emailScreen: {
      title: 'Ouvrir une session',
      description1: "Si vous n'avez pas de compte, vous pouvez en <1>créer un maintenant.</1>",
      description2: "Entrez votre adresse de courriel pour recevoir un code d'accès.",
      emailInputLabel: 'Courriel',
      emailPlaceholder: 'utilisateur@exemple.com',
      checkboxLabel: 'Garder ma session ouverte',
      primaryButton: 'Envoyer le code',
      errorMsg: 'L’adresse courriel doit respecter le format suivant : utilisateur@exemple.com',
      termsAndConditions: 'En utilisant ce service, vous acceptez les <1>conditions générales.</1>',
      sessionExpired: 'Votre session a expiré en raison d’inactivité.  Veuillez <1>reconnecter</1> pour continuer.',
    },
    checkEmailScreen: {
      title: 'Vérifiez votre courriel',
      description1:
        'Saisissez le code à 6 chiffres que nous vous avons envoyé par courriel. Ce code est valable pendant 30 minutes.',
      description2: "Si vous ne l'avez pas reçu, vous pouvez le redemander après 2 minutes.",
      description3: "Si vous ne l'avez pas reçu, cliquez sur <1>renvoyez le code</1>.",
      resendCodeMsg:
        'Le code à 6 chiffres a été renvoyé à votre adresse courriel. Ce code est valable pendant 30 minutes.',
      codeInputLabel: '',
      codePlaceholder: '',
      primaryButton: 'Soumettre',
      secondaryButton: 'Envoyer un SMS à la place',
    },
    phoneScreen: {
      backButton: 'Précédent',
      title: 'Ouvrir une session',
      description1: "Si vous n'en avez pas encore, vous pouvez <1>créer un compte.</1>",
      description2: "Entrez votre numéro de téléphone cellulaire pour recevoir un code d'accès par SMS",
      phoneInputLabel: 'Numéro de cellulaire',
      phonePlaceholder: '506-555-55555',
      primaryButton: 'Envoyer le code',
    },
    phoneCodeScreen: {
      backButton: 'Précédent',
      title: 'Vérifiez votre cellulaire',
      description1: 'Saisissez le code à six chiffres que nous vous avons envoyé par texto.',
      description2: 'Ce code est valable pendant 30 minutes.',
      description3: "Si vous ne l'avez pas reçu, vous pouvez le redemander après 2 minutes.",
      description4: "Si vous ne l'avez pas reçu, cliquez sur <1>renvoyez le code</1>.",
      resendCodeMsg: 'Le code à 6 chiffres a été vous avons envoyé par texto. Ce code est valable pendant 30 minutes.',
      codeInputLabel: 'Entrez un code à 6 chiffres',
      codePlaceholder: '',
      secondaryButton: 'Envoyez plutôt un courriel',
    },
    codeAuthentication: { fieldLegend: 'Saisissez le code à 6 chiffres', label: 'Chiffre' },
    signUpScreen: {
      title: "S'inscrire",
      description: 'Pour recevoir des rappels, veuillez fournir les renseignements suivants.',
      firstName: 'Prénom(s)',
      lastName: 'Nom de famille',
      email: 'Courriel',
      confirmEmail: "Confirmez l'adresse de courriel",
      smsNumber: 'Numéro de cellulaire',
      licenceNumber: 'Numéro de permis de conduire',
      licencePlate: "Plaque d'immatriculation",
      primaryButton: 'Suivant',
      placeHolderText: 'utilisateur@exemple.com',
      termsAndConditions: "J'accepte les <1>conditions générales.</1>",
    },
    helpSection: {
      title: "Pour obtenir de l'aide",
      email: 'Courriel : <1>snb@snb.ca</1>',
      phone: 'Numéro sans frais : <1>1-888-832-2762</1> (option no 2)',
    },
    modal: { emailHeading: 'Vérifiez votre courriel', phoneHeading: 'Vérifiez votre cellulaire.' },
  },
  yw = {
    invalidVin:
      "Ce NIV n'est pas valide. Vous devez saisir les six premiers caractères de votre NIV. S'il s'agit d'une remorque artisanale ou d'un véhicule qui n'a pas de NIV, veuillez écrire NA.",
    invalidLicence: "Cette plaque d'immatriculation n'est pas valide.",
    invalidGivenNames: 'Veuillez saisir un prénom valide.',
    invalidLastName: 'Veuillez saisir un nom de famille valide.',
    nonregisteredLicence: 'Aucun résultat trouvé.',
    customNameWithProfanity: 'Désolé, nous ne pouvons pas accepter ce nom. Veuillez réessayer.',
    invalidCustomName: "Ce nom personnalisé n'est pas valide.",
    invalidSMSNumber: "Ce numéro de téléphone n'est pas valide.",
    invalidCodeEmail:
      "Le code que vous avez saisi n'est pas valide. Vérifiez votre courriel de nouveau ou cliquez sur <1>renvoyez le code</1>.",
    expiredCodeEmail:
      'Le code que vous avez saisi a expiré. Vérifiez votre boîte de réception à nouveau ou cliquez sur <1>renvoyer le code</1>.',
    invalidCodeSMS:
      "Le code que vous avez saisi n'est pas valide. Vérifiez à nouveau le texto ou cliquez sur <1>renvoyer le code</1>.",
    expiredCodeSMS:
      'Le code que vous avez saisi a expiré. Vérifiez à nouveau le texto ou cliquez sur <1>renvoyer le code</1>.',
    resendCodeDisabled: 'Attendez un instant. Le code ne peut être renvoyé que toutes les 2 minutes.',
    duplicatedVehicle: 'Ce véhicle a été déjà ajouté à votre compte',
    unmatchedEmail: 'Les courriels doivent correspondre.',
    genericErrMsg: 'Nous sommes désolés, nous éprouvons des problèmes techniques. Veuillez réessayer plus tard.',
    gBizFailErrorMsg:
      "Oups ! Une erreur s'est produite. Veuillez revérifier votre saisie et vous assurer que vous avez saisi les informations correctes.",
    errorModal: {
      title: 'Erreur',
      content: 'Désolé, nous rencontrons actuellement des difficultés techniques. Veuillez réessayer ultérieurement.',
      buttonText: 'OK',
    },
    noPhoneAdded:
      '<strong>Un numéro de cellulaire est requis pour utiliser l’option « texto ». <br> Allez à « <1>Modifiez votre profil</1> » pour ajouter un numéro de téléphone.</strong>',
    noOptionSelected: 'Vous devez sélectionner une option',
    noVehicleAdded:
      '<strong>Vous devez <1>ajouter votre(vos) véhicule(s)</1> pour recevoir votre(vos) rappel(s)</strong>',
    missingInformation: "<strong>Vous n'avez pas fourni toute les information requises</strong>",
  },
  ww = { unavailableVehicle: 'Les détails du véhicule ne sont pas disponibles pour le moment.' },
  Sw = {
    copyright: '© Gouvernement du Nouveau-Brunswick',
    privacy: '<1>Confidentialité</1>',
    disclaimer: '<1>Décharge</1>',
  },
  xw = {
    disclaimer: uw,
    SwitchLanguage: cw,
    pageTitle: fw,
    pageDescription: dw,
    mainNavigation: mw,
    notFound: pw,
    notifications: hw,
    accountSettings: gw,
    authentication: vw,
    errorsMsg: yw,
    warningMsg: ww,
    footer: Sw,
  },
  kw = { en: { translation: lw }, fr: { translation: xw } };
Ue.use(u0).init({ resources: kw, fallbackLng: 'en', supportedLngs: ['en', 'fr'], interpolation: { escapeValue: !1 } });
function Lt(r) {
  const n = Object.prototype.toString.call(r);
  return r instanceof Date || (typeof r == 'object' && n === '[object Date]')
    ? new r.constructor(+r)
    : typeof r == 'number' || n === '[object Number]' || typeof r == 'string' || n === '[object String]'
    ? new Date(r)
    : new Date(NaN);
}
function Hn(r, n) {
  return r instanceof Date ? new r.constructor(n) : new Date(n);
}
const Rp = 6048e5,
  bw = 864e5;
let Cw = {};
function Co() {
  return Cw;
}
function Ei(r, n) {
  const a = Co(),
    o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0,
    l = Lt(r),
    c = l.getDay(),
    d = (c < o ? 7 : 0) + c - o;
  return l.setDate(l.getDate() - d), l.setHours(0, 0, 0, 0), l;
}
function po(r) {
  return Ei(r, { weekStartsOn: 1 });
}
function Tp(r) {
  const n = Lt(r),
    a = n.getFullYear(),
    o = Hn(r, 0);
  o.setFullYear(a + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const l = po(o),
    c = Hn(r, 0);
  c.setFullYear(a, 0, 4), c.setHours(0, 0, 0, 0);
  const d = po(c);
  return n.getTime() >= l.getTime() ? a + 1 : n.getTime() >= d.getTime() ? a : a - 1;
}
function bm(r) {
  const n = Lt(r);
  return n.setHours(0, 0, 0, 0), n;
}
function Cm(r) {
  const n = Lt(r),
    a = new Date(
      Date.UTC(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
        n.getHours(),
        n.getMinutes(),
        n.getSeconds(),
        n.getMilliseconds()
      )
    );
  return a.setUTCFullYear(n.getFullYear()), +r - +a;
}
function Pw(r, n) {
  const a = bm(r),
    o = bm(n),
    l = +a - Cm(a),
    c = +o - Cm(o);
  return Math.round((l - c) / bw);
}
function Ew(r) {
  const n = Tp(r),
    a = Hn(r, 0);
  return a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0), po(a);
}
function _w(r) {
  return r instanceof Date || (typeof r == 'object' && Object.prototype.toString.call(r) === '[object Date]');
}
function Nw(r) {
  if (!_w(r) && typeof r != 'number') return !1;
  const n = Lt(r);
  return !isNaN(Number(n));
}
function Ow(r) {
  const n = Lt(r),
    a = Hn(r, 0);
  return a.setFullYear(n.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
const Lw = {
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
  Rw = (r, n, a) => {
    let o;
    const l = Lw[r];
    return (
      typeof l == 'string' ? (o = l) : n === 1 ? (o = l.one) : (o = l.other.replace('{{count}}', n.toString())),
      a?.addSuffix ? (a.comparison && a.comparison > 0 ? 'in ' + o : o + ' ago') : o
    );
  };
function Kt(r) {
  return (n = {}) => {
    const a = n.width ? String(n.width) : r.defaultWidth;
    return r.formats[a] || r.formats[r.defaultWidth];
  };
}
const Tw = { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
  Iw = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  Mw = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Aw = {
    date: Kt({ formats: Tw, defaultWidth: 'full' }),
    time: Kt({ formats: Iw, defaultWidth: 'full' }),
    dateTime: Kt({ formats: Mw, defaultWidth: 'full' }),
  },
  zw = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  Ip = (r, n, a, o) => zw[r];
function zt(r) {
  return (n, a) => {
    const o = a?.context ? String(a.context) : 'standalone';
    let l;
    if (o === 'formatting' && r.formattingValues) {
      const d = r.defaultFormattingWidth || r.defaultWidth,
        m = a?.width ? String(a.width) : d;
      l = r.formattingValues[m] || r.formattingValues[d];
    } else {
      const d = r.defaultWidth,
        m = a?.width ? String(a.width) : r.defaultWidth;
      l = r.values[m] || r.values[d];
    }
    const c = r.argumentCallback ? r.argumentCallback(n) : n;
    return l[c];
  };
}
const jw = { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
  Dw = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  Fw = {
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
  $w = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  Vw = {
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
  Uw = {
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
  Ww = (r, n) => {
    const a = Number(r),
      o = a % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return a + 'st';
        case 2:
          return a + 'nd';
        case 3:
          return a + 'rd';
      }
    return a + 'th';
  },
  Mp = {
    ordinalNumber: Ww,
    era: zt({ values: jw, defaultWidth: 'wide' }),
    quarter: zt({ values: Dw, defaultWidth: 'wide', argumentCallback: (r) => r - 1 }),
    month: zt({ values: Fw, defaultWidth: 'wide' }),
    day: zt({ values: $w, defaultWidth: 'wide' }),
    dayPeriod: zt({ values: Vw, defaultWidth: 'wide', formattingValues: Uw, defaultFormattingWidth: 'wide' }),
  };
function jt(r) {
  return (n, a = {}) => {
    const o = a.width,
      l = (o && r.matchPatterns[o]) || r.matchPatterns[r.defaultMatchWidth],
      c = n.match(l);
    if (!c) return null;
    const d = c[0],
      m = (o && r.parsePatterns[o]) || r.parsePatterns[r.defaultParseWidth],
      h = Array.isArray(m) ? Hw(m, (w) => w.test(d)) : Bw(m, (w) => w.test(d));
    let g;
    (g = r.valueCallback ? r.valueCallback(h) : h), (g = a.valueCallback ? a.valueCallback(g) : g);
    const v = n.slice(d.length);
    return { value: g, rest: v };
  };
}
function Bw(r, n) {
  for (const a in r) if (Object.prototype.hasOwnProperty.call(r, a) && n(r[a])) return a;
}
function Hw(r, n) {
  for (let a = 0; a < r.length; a++) if (n(r[a])) return a;
}
function Ap(r) {
  return (n, a = {}) => {
    const o = n.match(r.matchPattern);
    if (!o) return null;
    const l = o[0],
      c = n.match(r.parsePattern);
    if (!c) return null;
    let d = r.valueCallback ? r.valueCallback(c[0]) : c[0];
    d = a.valueCallback ? a.valueCallback(d) : d;
    const m = n.slice(l.length);
    return { value: d, rest: m };
  };
}
const Yw = /^(\d+)(th|st|nd|rd)?/i,
  qw = /\d+/i,
  Kw = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Qw = { any: [/^b/i, /^(a|c)/i] },
  Xw = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  Gw = { any: [/1/i, /2/i, /3/i, /4/i] },
  Jw = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Zw = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  eS = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  tS = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  nS = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  rS = {
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
  zp = {
    ordinalNumber: Ap({ matchPattern: Yw, parsePattern: qw, valueCallback: (r) => parseInt(r, 10) }),
    era: jt({ matchPatterns: Kw, defaultMatchWidth: 'wide', parsePatterns: Qw, defaultParseWidth: 'any' }),
    quarter: jt({
      matchPatterns: Xw,
      defaultMatchWidth: 'wide',
      parsePatterns: Gw,
      defaultParseWidth: 'any',
      valueCallback: (r) => r + 1,
    }),
    month: jt({ matchPatterns: Jw, defaultMatchWidth: 'wide', parsePatterns: Zw, defaultParseWidth: 'any' }),
    day: jt({ matchPatterns: eS, defaultMatchWidth: 'wide', parsePatterns: tS, defaultParseWidth: 'any' }),
    dayPeriod: jt({ matchPatterns: nS, defaultMatchWidth: 'any', parsePatterns: rS, defaultParseWidth: 'any' }),
  },
  iS = {
    code: 'en-US',
    formatDistance: Rw,
    formatLong: Aw,
    formatRelative: Ip,
    localize: Mp,
    match: zp,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function aS(r) {
  const n = Lt(r);
  return Pw(n, Ow(n)) + 1;
}
function oS(r) {
  const n = Lt(r),
    a = +po(n) - +Ew(n);
  return Math.round(a / Rp) + 1;
}
function jp(r, n) {
  const a = Lt(r),
    o = a.getFullYear(),
    l = Co(),
    c =
      n?.firstWeekContainsDate ??
      n?.locale?.options?.firstWeekContainsDate ??
      l.firstWeekContainsDate ??
      l.locale?.options?.firstWeekContainsDate ??
      1,
    d = Hn(r, 0);
  d.setFullYear(o + 1, 0, c), d.setHours(0, 0, 0, 0);
  const m = Ei(d, n),
    h = Hn(r, 0);
  h.setFullYear(o, 0, c), h.setHours(0, 0, 0, 0);
  const g = Ei(h, n);
  return a.getTime() >= m.getTime() ? o + 1 : a.getTime() >= g.getTime() ? o : o - 1;
}
function sS(r, n) {
  const a = Co(),
    o =
      n?.firstWeekContainsDate ??
      n?.locale?.options?.firstWeekContainsDate ??
      a.firstWeekContainsDate ??
      a.locale?.options?.firstWeekContainsDate ??
      1,
    l = jp(r, n),
    c = Hn(r, 0);
  return c.setFullYear(l, 0, o), c.setHours(0, 0, 0, 0), Ei(c, n);
}
function lS(r, n) {
  const a = Lt(r),
    o = +Ei(a, n) - +sS(a, n);
  return Math.round(o / Rp) + 1;
}
function ge(r, n) {
  const a = r < 0 ? '-' : '',
    o = Math.abs(r).toString().padStart(n, '0');
  return a + o;
}
const wn = {
    y(r, n) {
      const a = r.getFullYear(),
        o = a > 0 ? a : 1 - a;
      return ge(n === 'yy' ? o % 100 : o, n.length);
    },
    M(r, n) {
      const a = r.getMonth();
      return n === 'M' ? String(a + 1) : ge(a + 1, 2);
    },
    d(r, n) {
      return ge(r.getDate(), n.length);
    },
    a(r, n) {
      const a = r.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (n) {
        case 'a':
        case 'aa':
          return a.toUpperCase();
        case 'aaa':
          return a;
        case 'aaaaa':
          return a[0];
        case 'aaaa':
        default:
          return a === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h(r, n) {
      return ge(r.getHours() % 12 || 12, n.length);
    },
    H(r, n) {
      return ge(r.getHours(), n.length);
    },
    m(r, n) {
      return ge(r.getMinutes(), n.length);
    },
    s(r, n) {
      return ge(r.getSeconds(), n.length);
    },
    S(r, n) {
      const a = n.length,
        o = r.getMilliseconds(),
        l = Math.trunc(o * Math.pow(10, a - 3));
      return ge(l, n.length);
    },
  },
  xr = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  Pm = {
    G: function (r, n, a) {
      const o = r.getFullYear() > 0 ? 1 : 0;
      switch (n) {
        case 'G':
        case 'GG':
        case 'GGG':
          return a.era(o, { width: 'abbreviated' });
        case 'GGGGG':
          return a.era(o, { width: 'narrow' });
        case 'GGGG':
        default:
          return a.era(o, { width: 'wide' });
      }
    },
    y: function (r, n, a) {
      if (n === 'yo') {
        const o = r.getFullYear(),
          l = o > 0 ? o : 1 - o;
        return a.ordinalNumber(l, { unit: 'year' });
      }
      return wn.y(r, n);
    },
    Y: function (r, n, a, o) {
      const l = jp(r, o),
        c = l > 0 ? l : 1 - l;
      if (n === 'YY') {
        const d = c % 100;
        return ge(d, 2);
      }
      return n === 'Yo' ? a.ordinalNumber(c, { unit: 'year' }) : ge(c, n.length);
    },
    R: function (r, n) {
      const a = Tp(r);
      return ge(a, n.length);
    },
    u: function (r, n) {
      const a = r.getFullYear();
      return ge(a, n.length);
    },
    Q: function (r, n, a) {
      const o = Math.ceil((r.getMonth() + 1) / 3);
      switch (n) {
        case 'Q':
          return String(o);
        case 'QQ':
          return ge(o, 2);
        case 'Qo':
          return a.ordinalNumber(o, { unit: 'quarter' });
        case 'QQQ':
          return a.quarter(o, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return a.quarter(o, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return a.quarter(o, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (r, n, a) {
      const o = Math.ceil((r.getMonth() + 1) / 3);
      switch (n) {
        case 'q':
          return String(o);
        case 'qq':
          return ge(o, 2);
        case 'qo':
          return a.ordinalNumber(o, { unit: 'quarter' });
        case 'qqq':
          return a.quarter(o, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return a.quarter(o, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return a.quarter(o, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (r, n, a) {
      const o = r.getMonth();
      switch (n) {
        case 'M':
        case 'MM':
          return wn.M(r, n);
        case 'Mo':
          return a.ordinalNumber(o + 1, { unit: 'month' });
        case 'MMM':
          return a.month(o, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return a.month(o, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return a.month(o, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (r, n, a) {
      const o = r.getMonth();
      switch (n) {
        case 'L':
          return String(o + 1);
        case 'LL':
          return ge(o + 1, 2);
        case 'Lo':
          return a.ordinalNumber(o + 1, { unit: 'month' });
        case 'LLL':
          return a.month(o, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return a.month(o, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return a.month(o, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (r, n, a, o) {
      const l = lS(r, o);
      return n === 'wo' ? a.ordinalNumber(l, { unit: 'week' }) : ge(l, n.length);
    },
    I: function (r, n, a) {
      const o = oS(r);
      return n === 'Io' ? a.ordinalNumber(o, { unit: 'week' }) : ge(o, n.length);
    },
    d: function (r, n, a) {
      return n === 'do' ? a.ordinalNumber(r.getDate(), { unit: 'date' }) : wn.d(r, n);
    },
    D: function (r, n, a) {
      const o = aS(r);
      return n === 'Do' ? a.ordinalNumber(o, { unit: 'dayOfYear' }) : ge(o, n.length);
    },
    E: function (r, n, a) {
      const o = r.getDay();
      switch (n) {
        case 'E':
        case 'EE':
        case 'EEE':
          return a.day(o, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return a.day(o, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return a.day(o, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return a.day(o, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (r, n, a, o) {
      const l = r.getDay(),
        c = (l - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case 'e':
          return String(c);
        case 'ee':
          return ge(c, 2);
        case 'eo':
          return a.ordinalNumber(c, { unit: 'day' });
        case 'eee':
          return a.day(l, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return a.day(l, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return a.day(l, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return a.day(l, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (r, n, a, o) {
      const l = r.getDay(),
        c = (l - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case 'c':
          return String(c);
        case 'cc':
          return ge(c, n.length);
        case 'co':
          return a.ordinalNumber(c, { unit: 'day' });
        case 'ccc':
          return a.day(l, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return a.day(l, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return a.day(l, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return a.day(l, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (r, n, a) {
      const o = r.getDay(),
        l = o === 0 ? 7 : o;
      switch (n) {
        case 'i':
          return String(l);
        case 'ii':
          return ge(l, n.length);
        case 'io':
          return a.ordinalNumber(l, { unit: 'day' });
        case 'iii':
          return a.day(o, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return a.day(o, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return a.day(o, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return a.day(o, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (r, n, a) {
      const l = r.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (n) {
        case 'a':
        case 'aa':
          return a.dayPeriod(l, { width: 'abbreviated', context: 'formatting' });
        case 'aaa':
          return a.dayPeriod(l, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'aaaaa':
          return a.dayPeriod(l, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return a.dayPeriod(l, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (r, n, a) {
      const o = r.getHours();
      let l;
      switch ((o === 12 ? (l = xr.noon) : o === 0 ? (l = xr.midnight) : (l = o / 12 >= 1 ? 'pm' : 'am'), n)) {
        case 'b':
        case 'bb':
          return a.dayPeriod(l, { width: 'abbreviated', context: 'formatting' });
        case 'bbb':
          return a.dayPeriod(l, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'bbbbb':
          return a.dayPeriod(l, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return a.dayPeriod(l, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (r, n, a) {
      const o = r.getHours();
      let l;
      switch (
        (o >= 17 ? (l = xr.evening) : o >= 12 ? (l = xr.afternoon) : o >= 4 ? (l = xr.morning) : (l = xr.night), n)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return a.dayPeriod(l, { width: 'abbreviated', context: 'formatting' });
        case 'BBBBB':
          return a.dayPeriod(l, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return a.dayPeriod(l, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (r, n, a) {
      if (n === 'ho') {
        let o = r.getHours() % 12;
        return o === 0 && (o = 12), a.ordinalNumber(o, { unit: 'hour' });
      }
      return wn.h(r, n);
    },
    H: function (r, n, a) {
      return n === 'Ho' ? a.ordinalNumber(r.getHours(), { unit: 'hour' }) : wn.H(r, n);
    },
    K: function (r, n, a) {
      const o = r.getHours() % 12;
      return n === 'Ko' ? a.ordinalNumber(o, { unit: 'hour' }) : ge(o, n.length);
    },
    k: function (r, n, a) {
      let o = r.getHours();
      return o === 0 && (o = 24), n === 'ko' ? a.ordinalNumber(o, { unit: 'hour' }) : ge(o, n.length);
    },
    m: function (r, n, a) {
      return n === 'mo' ? a.ordinalNumber(r.getMinutes(), { unit: 'minute' }) : wn.m(r, n);
    },
    s: function (r, n, a) {
      return n === 'so' ? a.ordinalNumber(r.getSeconds(), { unit: 'second' }) : wn.s(r, n);
    },
    S: function (r, n) {
      return wn.S(r, n);
    },
    X: function (r, n, a) {
      const o = r.getTimezoneOffset();
      if (o === 0) return 'Z';
      switch (n) {
        case 'X':
          return _m(o);
        case 'XXXX':
        case 'XX':
          return Dn(o);
        case 'XXXXX':
        case 'XXX':
        default:
          return Dn(o, ':');
      }
    },
    x: function (r, n, a) {
      const o = r.getTimezoneOffset();
      switch (n) {
        case 'x':
          return _m(o);
        case 'xxxx':
        case 'xx':
          return Dn(o);
        case 'xxxxx':
        case 'xxx':
        default:
          return Dn(o, ':');
      }
    },
    O: function (r, n, a) {
      const o = r.getTimezoneOffset();
      switch (n) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Em(o, ':');
        case 'OOOO':
        default:
          return 'GMT' + Dn(o, ':');
      }
    },
    z: function (r, n, a) {
      const o = r.getTimezoneOffset();
      switch (n) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Em(o, ':');
        case 'zzzz':
        default:
          return 'GMT' + Dn(o, ':');
      }
    },
    t: function (r, n, a) {
      const o = Math.trunc(r.getTime() / 1e3);
      return ge(o, n.length);
    },
    T: function (r, n, a) {
      const o = r.getTime();
      return ge(o, n.length);
    },
  };
function Em(r, n = '') {
  const a = r > 0 ? '-' : '+',
    o = Math.abs(r),
    l = Math.trunc(o / 60),
    c = o % 60;
  return c === 0 ? a + String(l) : a + String(l) + n + ge(c, 2);
}
function _m(r, n) {
  return r % 60 === 0 ? (r > 0 ? '-' : '+') + ge(Math.abs(r) / 60, 2) : Dn(r, n);
}
function Dn(r, n = '') {
  const a = r > 0 ? '-' : '+',
    o = Math.abs(r),
    l = ge(Math.trunc(o / 60), 2),
    c = ge(o % 60, 2);
  return a + l + n + c;
}
const Nm = (r, n) => {
    switch (r) {
      case 'P':
        return n.date({ width: 'short' });
      case 'PP':
        return n.date({ width: 'medium' });
      case 'PPP':
        return n.date({ width: 'long' });
      case 'PPPP':
      default:
        return n.date({ width: 'full' });
    }
  },
  Dp = (r, n) => {
    switch (r) {
      case 'p':
        return n.time({ width: 'short' });
      case 'pp':
        return n.time({ width: 'medium' });
      case 'ppp':
        return n.time({ width: 'long' });
      case 'pppp':
      default:
        return n.time({ width: 'full' });
    }
  },
  uS = (r, n) => {
    const a = r.match(/(P+)(p+)?/) || [],
      o = a[1],
      l = a[2];
    if (!l) return Nm(r, n);
    let c;
    switch (o) {
      case 'P':
        c = n.dateTime({ width: 'short' });
        break;
      case 'PP':
        c = n.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        c = n.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        c = n.dateTime({ width: 'full' });
        break;
    }
    return c.replace('{{date}}', Nm(o, n)).replace('{{time}}', Dp(l, n));
  },
  cS = { p: Dp, P: uS },
  fS = /^D+$/,
  dS = /^Y+$/,
  mS = ['D', 'DD', 'YY', 'YYYY'];
function pS(r) {
  return fS.test(r);
}
function hS(r) {
  return dS.test(r);
}
function gS(r, n, a) {
  const o = vS(r, n, a);
  if ((console.warn(o), mS.includes(r))) throw new RangeError(o);
}
function vS(r, n, a) {
  const o = r[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${n}\`) for formatting ${o} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const yS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  wS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  SS = /^'([^]*?)'?$/,
  xS = /''/g,
  kS = /[a-zA-Z]/;
function Fp(r, n, a) {
  const o = Co(),
    l = a?.locale ?? o.locale ?? iS,
    c =
      a?.firstWeekContainsDate ??
      a?.locale?.options?.firstWeekContainsDate ??
      o.firstWeekContainsDate ??
      o.locale?.options?.firstWeekContainsDate ??
      1,
    d = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0,
    m = Lt(r);
  if (!Nw(m)) throw new RangeError('Invalid time value');
  let h = n
    .match(wS)
    .map((v) => {
      const w = v[0];
      if (w === 'p' || w === 'P') {
        const S = cS[w];
        return S(v, l.formatLong);
      }
      return v;
    })
    .join('')
    .match(yS)
    .map((v) => {
      if (v === "''") return { isToken: !1, value: "'" };
      const w = v[0];
      if (w === "'") return { isToken: !1, value: bS(v) };
      if (Pm[w]) return { isToken: !0, value: v };
      if (w.match(kS)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + w + '`');
      return { isToken: !1, value: v };
    });
  l.localize.preprocessor && (h = l.localize.preprocessor(m, h));
  const g = { firstWeekContainsDate: c, weekStartsOn: d, locale: l };
  return h
    .map((v) => {
      if (!v.isToken) return v.value;
      const w = v.value;
      ((!a?.useAdditionalWeekYearTokens && hS(w)) || (!a?.useAdditionalDayOfYearTokens && pS(w))) &&
        gS(w, n, String(r));
      const S = Pm[w[0]];
      return S(m, w, l.localize, g);
    })
    .join('');
}
function bS(r) {
  const n = r.match(SS);
  return n ? n[1].replace(xS, "'") : r;
}
const CS = {
    lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
    xSeconds: { one: 'a second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
    xMinutes: { one: 'a minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about an hour', other: 'about {{count}} hours' },
    xHours: { one: 'an hour', other: '{{count}} hours' },
    xDays: { one: 'a day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about a week', other: 'about {{count}} weeks' },
    xWeeks: { one: 'a week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about a month', other: 'about {{count}} months' },
    xMonths: { one: 'a month', other: '{{count}} months' },
    aboutXYears: { one: 'about a year', other: 'about {{count}} years' },
    xYears: { one: 'a year', other: '{{count}} years' },
    overXYears: { one: 'over a year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost a year', other: 'almost {{count}} years' },
  },
  PS = (r, n, a) => {
    let o;
    const l = CS[r];
    return (
      typeof l == 'string' ? (o = l) : n === 1 ? (o = l.one) : (o = l.other.replace('{{count}}', n.toString())),
      a?.addSuffix ? (a.comparison && a.comparison > 0 ? 'in ' + o : o + ' ago') : o
    );
  },
  ES = { full: 'EEEE, MMMM do, yyyy', long: 'MMMM do, yyyy', medium: 'MMM d, yyyy', short: 'yyyy-MM-dd' },
  _S = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  NS = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  OS = {
    date: Kt({ formats: ES, defaultWidth: 'full' }),
    time: Kt({ formats: _S, defaultWidth: 'full' }),
    dateTime: Kt({ formats: NS, defaultWidth: 'full' }),
  },
  LS = {
    code: 'en-CA',
    formatDistance: PS,
    formatLong: OS,
    formatRelative: Ip,
    localize: Mp,
    match: zp,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  RS = {
    lessThanXSeconds: { one: 'moins d’une seconde', other: 'moins de {{count}} secondes' },
    xSeconds: { one: '1 seconde', other: '{{count}} secondes' },
    halfAMinute: '30 secondes',
    lessThanXMinutes: { one: 'moins d’une minute', other: 'moins de {{count}} minutes' },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'environ 1 heure', other: 'environ {{count}} heures' },
    xHours: { one: '1 heure', other: '{{count}} heures' },
    xDays: { one: '1 jour', other: '{{count}} jours' },
    aboutXWeeks: { one: 'environ 1 semaine', other: 'environ {{count}} semaines' },
    xWeeks: { one: '1 semaine', other: '{{count}} semaines' },
    aboutXMonths: { one: 'environ 1 mois', other: 'environ {{count}} mois' },
    xMonths: { one: '1 mois', other: '{{count}} mois' },
    aboutXYears: { one: 'environ 1 an', other: 'environ {{count}} ans' },
    xYears: { one: '1 an', other: '{{count}} ans' },
    overXYears: { one: 'plus d’un an', other: 'plus de {{count}} ans' },
    almostXYears: { one: 'presqu’un an', other: 'presque {{count}} ans' },
  },
  TS = (r, n, a) => {
    let o;
    const l = RS[r];
    return (
      typeof l == 'string' ? (o = l) : n === 1 ? (o = l.one) : (o = l.other.replace('{{count}}', String(n))),
      a?.addSuffix ? (a.comparison && a.comparison > 0 ? 'dans ' + o : 'il y a ' + o) : o
    );
  },
  IS = {
    lastWeek: "eeee 'dernier à' p",
    yesterday: "'hier à' p",
    today: "'aujourd’hui à' p",
    tomorrow: "'demain à' p'",
    nextWeek: "eeee 'prochain à' p",
    other: 'P',
  },
  MS = (r, n, a, o) => IS[r],
  AS = {
    narrow: ['av. J.-C', 'ap. J.-C'],
    abbreviated: ['av. J.-C', 'ap. J.-C'],
    wide: ['avant Jésus-Christ', 'après Jésus-Christ'],
  },
  zS = {
    narrow: ['T1', 'T2', 'T3', 'T4'],
    abbreviated: ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'],
    wide: ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre'],
  },
  jS = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
    wide: [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ],
  },
  DS = {
    narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    short: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
    abbreviated: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
    wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  },
  FS = {
    narrow: {
      am: 'AM',
      pm: 'PM',
      midnight: 'minuit',
      noon: 'midi',
      morning: 'mat.',
      afternoon: 'ap.m.',
      evening: 'soir',
      night: 'mat.',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'minuit',
      noon: 'midi',
      morning: 'matin',
      afternoon: 'après-midi',
      evening: 'soir',
      night: 'matin',
    },
    wide: {
      am: 'AM',
      pm: 'PM',
      midnight: 'minuit',
      noon: 'midi',
      morning: 'du matin',
      afternoon: 'de l’après-midi',
      evening: 'du soir',
      night: 'du matin',
    },
  },
  $S = (r, n) => {
    const a = Number(r),
      o = n?.unit;
    if (a === 0) return '0';
    const l = ['year', 'week', 'hour', 'minute', 'second'];
    let c;
    return a === 1 ? (c = o && l.includes(o) ? 'ère' : 'er') : (c = 'ème'), a + c;
  },
  VS = ['MMM', 'MMMM'],
  US = {
    preprocessor: (r, n) =>
      r.getDate() === 1 || !n.some((o) => o.isToken && VS.includes(o.value))
        ? n
        : n.map((o) => (o.isToken && o.value === 'do' ? { isToken: !0, value: 'd' } : o)),
    ordinalNumber: $S,
    era: zt({ values: AS, defaultWidth: 'wide' }),
    quarter: zt({ values: zS, defaultWidth: 'wide', argumentCallback: (r) => r - 1 }),
    month: zt({ values: jS, defaultWidth: 'wide' }),
    day: zt({ values: DS, defaultWidth: 'wide' }),
    dayPeriod: zt({ values: FS, defaultWidth: 'wide' }),
  },
  WS = /^(\d+)(ième|ère|ème|er|e)?/i,
  BS = /\d+/i,
  HS = {
    narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
    abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
    wide: /^(avant Jésus-Christ|après Jésus-Christ)/i,
  },
  YS = { any: [/^av/i, /^ap/i] },
  qS = { narrow: /^T?[1234]/i, abbreviated: /^[1234](er|ème|e)? trim\.?/i, wide: /^[1234](er|ème|e)? trimestre/i },
  KS = { any: [/1/i, /2/i, /3/i, /4/i] },
  QS = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
    wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
  },
  XS = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  GS = {
    narrow: /^[lmjvsd]/i,
    short: /^(di|lu|ma|me|je|ve|sa)/i,
    abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
    wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i,
  },
  JS = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
    any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i],
  },
  ZS = {
    narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
    any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i,
  },
  ex = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^min/i,
      noon: /^mid/i,
      morning: /mat/i,
      afternoon: /ap/i,
      evening: /soir/i,
      night: /nuit/i,
    },
  },
  tx = {
    ordinalNumber: Ap({ matchPattern: WS, parsePattern: BS, valueCallback: (r) => parseInt(r) }),
    era: jt({ matchPatterns: HS, defaultMatchWidth: 'wide', parsePatterns: YS, defaultParseWidth: 'any' }),
    quarter: jt({
      matchPatterns: qS,
      defaultMatchWidth: 'wide',
      parsePatterns: KS,
      defaultParseWidth: 'any',
      valueCallback: (r) => r + 1,
    }),
    month: jt({ matchPatterns: QS, defaultMatchWidth: 'wide', parsePatterns: XS, defaultParseWidth: 'any' }),
    day: jt({ matchPatterns: GS, defaultMatchWidth: 'wide', parsePatterns: JS, defaultParseWidth: 'any' }),
    dayPeriod: jt({ matchPatterns: ZS, defaultMatchWidth: 'any', parsePatterns: ex, defaultParseWidth: 'any' }),
  },
  nx = { full: 'EEEE d MMMM y', long: 'd MMMM y', medium: 'd MMM y', short: 'yy-MM-dd' },
  rx = { full: 'HH:mm:ss zzzz', long: 'HH:mm:ss z', medium: 'HH:mm:ss', short: 'HH:mm' },
  ix = {
    full: "{{date}} 'à' {{time}}",
    long: "{{date}} 'à' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  ax = {
    date: Kt({ formats: nx, defaultWidth: 'full' }),
    time: Kt({ formats: rx, defaultWidth: 'full' }),
    dateTime: Kt({ formats: ix, defaultWidth: 'full' }),
  },
  ox = {
    code: 'fr-CA',
    formatDistance: TS,
    formatLong: ax,
    formatRelative: MS,
    localize: US,
    match: tx,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  Ax = [
    { menu: 'gnb-mega-menu', button: 'btn-mega-menu' },
    { menu: 'gnb-search', button: 'btn-search' },
    { menu: 'gnb-sign-in', button: 'btn-sign-in' },
    { menu: 'gnb-account', button: 'btn-account' },
  ],
  zx = 'MMMM d, y',
  jx = 'y-MM-dd HH:mm:ss.SSS',
  Om = 1200,
  Lm = 33696e3,
  Dx = 'EN',
  Fx = 'FR',
  $x = {
    EN: 'https://www2.gnb.ca/content/gnb/en/admin/privacy.html',
    FR: 'https://www2.gnb.ca/content/gnb/fr/admin/declaration_de_confidentialite.html',
  },
  Vx = {
    EN: 'https://www2.gnb.ca/content/gnb/en/admin/disclaimer.html',
    FR: 'https://www2.gnb.ca/content/gnb/fr/admin/decharge.html',
  },
  Ux = 256,
  Wx = 50,
  Bx = 128,
  sx = '+1',
  Hx = (r) =>
    r
      ?.split(' ')
      .map((n, a, o) => `${n}${a === o.length - 1 ? '' : '-'}`)
      .join(''),
  Yx = (r) => ` ${r.slice(0, 6).padEnd(17, '*')}`,
  qx = (r) => {
    const n = Ue.language;
    r && n !== r && Ue.changeLanguage(r);
  },
  $p = (r) => {
    const n = String(r.session),
      a = Number(r.sessionExpiry);
    return !!(n && n !== 'undefined' && n?.length > 0 && a && Date.now() < Number(a));
  },
  Kx = (r, n, a, o) => `${r ? `${r} ` : ''}${n ? `${n} ` : ''}${a ? `${a} ` : ''}${o}`,
  Qx = (r) =>
    r ?? {
      bodyType: '',
      colour: '',
      customName: '',
      expiryDate: '',
      make: '',
      model: '',
      plate: '',
      vehicleId: '',
      vin: '',
      year: '',
    },
  Xx = (r, n, a, o, l) => `${r ? `${r} ` : ''}${n ? `${n} ` : ''}'${l}' ${a ? `${a} ` : ''}${o}`,
  Gx = (r, n, a) => ` ${r && Fp(r, n, { locale: a === 'fr-CA' ? ox : LS })}`,
  Jx = (r) => {
    let n;
    if (r) {
      const a = r.slice(2),
        o = a.slice(0, 3),
        l = a.slice(3, 6),
        c = a.slice(6);
      n = `${o}-${l}-${c}`;
    } else n = '';
    return n;
  },
  Zx = (r) => {
    const n = r.trim().replace(/[^0-9]/g, '');
    return n.length < 4
      ? n
      : n.length < 7
      ? n.replace(/(\d{3})(\d{1})/, '$1-$2')
      : n.length < 11
      ? n.replace(/(\d{3})(\d{3})(\d{1})/, '$1-$2-$3')
      : n.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  },
  e2 = (r) => {
    const n = r.split('-').join('');
    return n ? `${sx}${n}` : '';
  },
  wu = (r) => {
    const [n, a] = j.useState(() => {
      try {
        const l = window.localStorage.getItem(r);
        return l ? JSON.parse(l) : '';
      } catch {
        return '';
      }
    });
    return [
      n,
      (l) => {
        try {
          l ? window.localStorage.setItem(r, JSON.stringify(l)) : window.localStorage.removeItem(r);
        } catch (c) {
          console.log(c);
        }
        a(l);
      },
    ];
  },
  Vp = () => {
    const r = Vm(),
      [n, a, o] = yu(['session', 'rememberMe', 'sessionExpiry']),
      [, l] = wu('visited'),
      c = (v, w) => {
        const S = w || n.rememberMe ? Lm : Om;
        a('session', v, { maxAge: S }),
          a('rememberMe', !!w, { maxAge: S }),
          a('sessionExpiry', Date.now() + 1e3 * S, { maxAge: S });
      },
      d = (v) => {
        const w = n.rememberMe ? Lm : Om;
        a('session', v, { maxAge: w }),
          a('rememberMe', !!n.rememberMe, { maxAge: w }),
          a('sessionExpiry', Date.now() + 1e3 * w, { maxAge: w });
      },
      m = () => {
        const v = String(n.session),
          w = Number(n.sessionExpiry);
        return v && v !== 'undefined' && v?.length > 0 && w && Date.now() < Number(w) ? v : (g(), '');
      },
      h = () => !!n.rememberMe,
      g = (v = !1, w) => {
        r('/authentication', { state: w ?? null }), v && (o('session'), o('rememberMe'), o('sessionExpiry'), l(''));
      };
    return { logout: g, setSessionCookie: c, refreshSessionCookie: d, getSession: m, getRememberMe: h };
  },
  ae = {
    notification: {
      email_reminder_option_changed: 'notification.email_reminder_option_changed',
      text_reminder_option_changed: 'notification.text_reminder_option_changed',
      reminder_freq_2_weeks_option_changed: 'notification.reminder_freq_2_weeks_option_changed',
      reminder_freq_4_weeks_option_changed: 'notification.reminder_freq_4_weeks_option_changed',
      reminder_freq_6_weeks_option_changed: 'notification.reminder_freq_6_weeks_option_changed',
      init_reminder_options: 'notification.init_reminder_options',
      showSaveChangesErrors: 'notification.showSaveChangesErrors',
    },
    stopPaperReminders: {
      given_name_changed: 'stop_paper_reminders.given_name_changed',
      last_name_changed: 'stop_paper_reminders.last_name_changed',
      vin_changed: 'stop_paper_reminders.vin_changed',
      licence_plate_changed: 'stop_paper_reminders.licence_plate_changed',
      all_values_changed: 'stop_paper_reminders.all_values_changed',
      given_name_error_changed: 'stop_paper_reminders.given_name_error_changed',
      last_name_error_changed: 'stop_paper_reminders.last_name_error_changed',
      vin_error_changed: 'stop_paper_reminders.vin_error_changed',
      licence_plate_error_changed: 'stop_paper_reminders.licence_plate_error_changed',
      all_errors_changed: 'stop_paper_reminders.all_errors_changed',
      all_values_and_errors_changed: 'stop_paper_reminders.all_values_and_errors_changed',
    },
    addVehicle: {
      vin_changed: 'add_vehicle.vin_changed',
      licence_plate_changed: 'add_vehicle.licence_plate_changed',
      custom_name_changed: 'add_vehicle.custom_name_changed',
      vin_error_changed: 'add_vehicle.vin_error_changed',
      invalid_licence_plate_error_changed: 'add_vehicle.invalid_licence_plate_error_changed',
      non_registered_licence_plate_error_changed: 'add_vehicle.non_registered_plate_error_changed',
      invalid_custom_name_error_changed: 'add_vehicle.invalid_custom_name_error_changed',
      all_values_and_errors_changed: 'add_vehicle.all_values_and_errors_changed',
    },
    addCustomName: {
      custom_name_changed: 'add_custom_name.custom_name_changed',
      invalid_custom_name_error_changed: 'add_custom_name.invalid_custom_name_error_changed',
      all_values_and_errors_changed: 'add_custom_name.all_values_and_errors_changed',
    },
    addFeedback: {
      text_changed: 'addFeedback.text_changed',
      selected_reaction_changed: 'addFeedback.selected_reaction_changed',
      all_values_changed: 'addFeedback.all_values_changed',
    },
    accountSettings: {
      email_changed: 'account.email_changed',
      phone_number_changed: 'account.phone_number_changed',
      updated_email_changed: 'account.updated_email_changed',
      updated_phone_number_changed: 'account.updated_phone_number_changed',
      reminder_language_changed: 'account.reminder_language_changed',
    },
    common: { vehicle_list_changed: 'common.vehicle_list_changed' },
  },
  lx = (r, n) => {
    switch (n.type) {
      case ae.notification.email_reminder_option_changed:
        return {
          ...r,
          notifications: { ...r.notifications, hasEmailReminders: n.payload?.notification?.hasEmailReminders || !1 },
        };
      case ae.notification.text_reminder_option_changed:
        return {
          ...r,
          notifications: { ...r.notifications, hasSMSReminders: n.payload?.notification?.hasSMSReminders || !1 },
        };
      case ae.notification.reminder_freq_2_weeks_option_changed:
        return {
          ...r,
          notifications: { ...r.notifications, hasLeadTime2Weeks: n.payload?.notification?.hasLeadTime2Weeks || !1 },
        };
      case ae.notification.reminder_freq_4_weeks_option_changed:
        return {
          ...r,
          notifications: { ...r.notifications, hasLeadTime4Weeks: n.payload?.notification?.hasLeadTime4Weeks || !1 },
        };
      case ae.notification.reminder_freq_6_weeks_option_changed:
        return {
          ...r,
          notifications: { ...r.notifications, hasLeadTime6Weeks: n.payload?.notification?.hasLeadTime6Weeks || !1 },
        };
      case ae.notification.showSaveChangesErrors:
        return {
          ...r,
          notifications: {
            ...r.notifications,
            showSaveChangesErrors: n.payload?.notification?.showSaveChangesErrors || !1,
          },
        };
      case ae.notification.init_reminder_options:
        return {
          ...r,
          notifications: {
            ...r.notifications,
            hasEmailReminders: n.payload?.notification?.hasEmailReminders || !1,
            hasSMSReminders: n.payload?.notification?.hasSMSReminders || !1,
            hasLeadTime2Weeks: n.payload?.notification?.hasLeadTime2Weeks || !1,
            hasLeadTime4Weeks: n.payload?.notification?.hasLeadTime4Weeks || !1,
            hasLeadTime6Weeks: n.payload?.notification?.hasLeadTime6Weeks || !1,
          },
        };
      case ae.stopPaperReminders.given_name_changed:
        return {
          ...r,
          stopPaperReminder: { ...r.stopPaperReminder, givenNames: n.payload?.stopPaperReminder?.givenNames || '' },
        };
      case ae.stopPaperReminders.last_name_changed:
        return {
          ...r,
          stopPaperReminder: { ...r.stopPaperReminder, lastName: n.payload?.stopPaperReminder?.lastName || '' },
        };
      case ae.stopPaperReminders.vin_changed:
        return { ...r, stopPaperReminder: { ...r.stopPaperReminder, vin: n.payload?.stopPaperReminder?.vin || '' } };
      case ae.stopPaperReminders.licence_plate_changed:
        return {
          ...r,
          stopPaperReminder: { ...r.stopPaperReminder, licencePlate: n.payload?.stopPaperReminder?.licencePlate || '' },
        };
      case ae.stopPaperReminders.all_values_changed:
        return {
          ...r,
          stopPaperReminder: {
            ...r.stopPaperReminder,
            givenNames: n.payload?.stopPaperReminder?.givenNames || '',
            lastName: n.payload?.stopPaperReminder?.lastName || '',
            vin: n.payload?.stopPaperReminder?.vin || '',
            licencePlate: n.payload?.stopPaperReminder?.licencePlate || '',
          },
        };
      case ae.stopPaperReminders.given_name_error_changed:
        return {
          ...r,
          stopPaperReminder: {
            ...r.stopPaperReminder,
            hasInvalidGivenNames: n.payload?.stopPaperReminder?.hasInvalidGivenNames || !1,
          },
        };
      case ae.stopPaperReminders.last_name_error_changed:
        return {
          ...r,
          stopPaperReminder: {
            ...r.stopPaperReminder,
            hasInvalidLastName: n.payload?.stopPaperReminder?.hasInvalidLastName || !1,
          },
        };
      case ae.stopPaperReminders.vin_error_changed:
        return {
          ...r,
          stopPaperReminder: {
            ...r.stopPaperReminder,
            hasInvalidVin: n.payload?.stopPaperReminder?.hasInvalidVin || !1,
          },
        };
      case ae.stopPaperReminders.licence_plate_error_changed:
        return {
          ...r,
          stopPaperReminder: {
            ...r.stopPaperReminder,
            hasInvalidLicencePlate: n.payload?.stopPaperReminder?.hasInvalidLicencePlate || !1,
          },
        };
      case ae.stopPaperReminders.all_errors_changed:
        return {
          ...r,
          stopPaperReminder: {
            ...r.stopPaperReminder,
            hasInvalidGivenNames: n.payload?.stopPaperReminder?.hasInvalidGivenNames || !1,
            hasInvalidLastName: n.payload?.stopPaperReminder?.hasInvalidLastName || !1,
            hasInvalidVin: n.payload?.stopPaperReminder?.hasInvalidVin || !1,
            hasInvalidLicencePlate: n.payload?.stopPaperReminder?.hasInvalidLicencePlate || !1,
          },
        };
      case ae.stopPaperReminders.all_values_and_errors_changed:
        return {
          ...r,
          stopPaperReminder: {
            ...r.stopPaperReminder,
            givenNames: n.payload?.stopPaperReminder?.givenNames || '',
            lastName: n.payload?.stopPaperReminder?.lastName || '',
            vin: n.payload?.stopPaperReminder?.vin || '',
            licencePlate: n.payload?.stopPaperReminder?.licencePlate || '',
            hasInvalidGivenNames: n.payload?.stopPaperReminder?.hasInvalidGivenNames || !1,
            hasInvalidLastName: n.payload?.stopPaperReminder?.hasInvalidLastName || !1,
            hasInvalidVin: n.payload?.stopPaperReminder?.hasInvalidVin || !1,
            hasInvalidLicencePlate: n.payload?.stopPaperReminder?.hasInvalidLicencePlate || !1,
          },
        };
      case ae.addVehicle.vin_changed:
        return { ...r, addVehicle: { ...r.addVehicle, vin: n.payload?.addVehicle?.vin || '' } };
      case ae.addVehicle.licence_plate_changed:
        return { ...r, addVehicle: { ...r.addVehicle, licencePlate: n.payload?.addVehicle?.licencePlate || '' } };
      case ae.addVehicle.custom_name_changed:
        return { ...r, addVehicle: { ...r.addVehicle, customName: n.payload?.addVehicle?.customName || '' } };
      case ae.addVehicle.vin_error_changed:
        return { ...r, addVehicle: { ...r.addVehicle, hasInvalidVin: n.payload?.addVehicle?.hasInvalidVin || !1 } };
      case ae.addVehicle.invalid_licence_plate_error_changed:
        return {
          ...r,
          addVehicle: { ...r.addVehicle, hasInvalidLicencePlate: n.payload?.addVehicle?.hasInvalidLicencePlate || !1 },
        };
      case ae.addVehicle.non_registered_licence_plate_error_changed:
        return {
          ...r,
          addVehicle: {
            ...r.addVehicle,
            hasNonRegisteredLicencePlate: n.payload?.addVehicle?.hasNonRegisteredLicencePlate || !1,
          },
        };
      case ae.addVehicle.invalid_custom_name_error_changed:
        return {
          ...r,
          addVehicle: { ...r.addVehicle, hasInvalidCustomName: n.payload?.addVehicle?.hasInvalidCustomName || '' },
        };
      case ae.addVehicle.all_values_and_errors_changed:
        return {
          ...r,
          addVehicle: {
            ...r.addVehicle,
            vin: n.payload?.addVehicle?.vin || '',
            licencePlate: n.payload?.addVehicle?.licencePlate || '',
            customName: n.payload?.addVehicle?.customName || '',
            hasInvalidVin: n.payload?.addVehicle?.hasInvalidVin || !1,
            hasInvalidLicencePlate: n.payload?.addVehicle?.hasInvalidLicencePlate || !1,
            hasNonRegisteredLicencePlate: n.payload?.addVehicle?.hasNonRegisteredLicencePlate || !1,
            hasInvalidCustomName: n.payload?.addVehicle?.hasInvalidCustomName || '',
          },
        };
      case ae.addCustomName.custom_name_changed:
        return { ...r, addCustomName: { ...r.addCustomName, customName: n.payload?.addCustomName?.customName || '' } };
      case ae.addCustomName.invalid_custom_name_error_changed:
        return {
          ...r,
          addCustomName: {
            ...r.addCustomName,
            hasInvalidCustomName: n.payload?.addCustomName?.hasInvalidCustomName || '',
          },
        };
      case ae.addCustomName.all_values_and_errors_changed:
        return {
          ...r,
          addCustomName: {
            ...r.addCustomName,
            hasInvalidCustomName: n.payload?.addCustomName?.hasInvalidCustomName || '',
            customName: n.payload?.addCustomName?.customName || '',
          },
        };
      case ae.addFeedback.text_changed:
        return { ...r, feedback: { ...r.feedback, text: n.payload?.addFeedback?.text || '' } };
      case ae.addFeedback.selected_reaction_changed:
        return { ...r, feedback: { ...r.feedback, selectedReaction: n.payload?.addFeedback?.selectedReaction || 0 } };
      case ae.addFeedback.all_values_changed:
        return {
          ...r,
          feedback: {
            ...r.feedback,
            text: n.payload?.addFeedback?.text || '',
            selectedReaction: n.payload?.addFeedback?.selectedReaction || 0,
          },
        };
      case ae.accountSettings.email_changed:
        return { ...r, accountSettings: { ...r.accountSettings, email: n.payload?.accountSettings?.email || '' } };
      case ae.accountSettings.phone_number_changed:
        return {
          ...r,
          accountSettings: { ...r.accountSettings, phoneNumber: n.payload?.accountSettings?.phoneNumber || '' },
        };
      case ae.accountSettings.updated_email_changed:
        return {
          ...r,
          accountSettings: { ...r.accountSettings, updatedEmail: n.payload?.accountSettings?.updatedEmail || '' },
        };
      case ae.accountSettings.updated_phone_number_changed:
        return {
          ...r,
          accountSettings: {
            ...r.accountSettings,
            updatedPhoneNumber: n.payload?.accountSettings?.updatedPhoneNumber || '',
          },
        };
      case ae.accountSettings.reminder_language_changed:
        return {
          ...r,
          accountSettings: { ...r.accountSettings, language: n.payload?.accountSettings?.language || '' },
        };
      case ae.common.vehicle_list_changed:
        return { ...r, common: { ...r.common, vehicleList: n.payload?.common?.vehicleList || [] } };
    }
    return r;
  },
  ux = {
    hasEmailReminders: !1,
    hasSMSReminders: !1,
    hasLeadTime2Weeks: !1,
    hasLeadTime4Weeks: !1,
    hasLeadTime6Weeks: !1,
    showSaveChangesErrors: !1,
  },
  cx = {
    givenNames: '',
    lastName: '',
    vin: '',
    licencePlate: '',
    hasInvalidVin: !1,
    hasInvalidLicencePlate: !1,
    hasInvalidGivenNames: !1,
    hasInvalidLastName: !1,
  },
  fx = {
    vin: '',
    licencePlate: '',
    customName: '',
    hasInvalidVin: !1,
    hasInvalidLicencePlate: !1,
    hasNonRegisteredLicencePlate: !1,
    hasInvalidCustomName: '',
  },
  dx = { customName: '', hasInvalidCustomName: '' },
  mx = { text: '', selectedReaction: 0 },
  px = { email: '', phoneNumber: '', updatedEmail: '', updatedPhoneNumber: '', language: '' },
  hx = { vehicleList: [] },
  Up = {
    notifications: ux,
    stopPaperReminder: cx,
    addVehicle: fx,
    addCustomName: dx,
    feedback: mx,
    accountSettings: px,
    common: hx,
  },
  gx = j.createContext({ state: Up, dispatch: () => {} }),
  vx = ({ children: r }) => {
    const [n, a] = j.useReducer(lx, Up),
      [o] = yu(['session', 'sessionExpiry']),
      [l] = wu('visited'),
      { getSession: c, refreshSessionCookie: d, logout: m } = Vp();
    return (
      j.useEffect(() => {
        const h = setInterval(() => {
          $p(o) || m(!0, { sessionExpired: l === 'y' });
        }, 1e3);
        return () => {
          h && clearInterval(h);
        };
      }),
      j.useEffect(() => {
        d(c());
      }, [n]),
      le.jsx(gx.Provider, { value: { state: n, dispatch: a }, children: r })
    );
  },
  Al = ({ children: r }) => {
    const [n] = yu(['session', 'sessionExpiry']),
      [a] = wu('visited'),
      [o, l] = j.useState(!0),
      { logout: c } = Vp();
    return (
      j.useEffect(() => {
        $p(n) || c(!0, { sessionExpired: a === 'y' }), l(!1);
      }, [n, c, a]),
      o ? le.jsx(Sn, { size: 'lg' }) : le.jsx(vx, { children: r })
    );
  },
  Rm = j.lazy(() => Ni(() => import('./index-BULubnqx.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))),
  yx = j.lazy(() => Ni(() => import('./index-BkHI3PQq.js'), __vite__mapDeps([11, 12, 1, 2, 3, 4, 5, 6, 7, 13]))),
  wx = j.lazy(() => Ni(() => import('./edit-BibR7kZ1.js'), __vite__mapDeps([14, 12, 1, 2, 3, 13]))),
  Sx = j.lazy(() => Ni(() => import('./index-GNgZMTS1.js'), __vite__mapDeps([15, 2]))),
  xx = j.lazy(() => Ni(() => import('./index-sHDgydrQ.js'), __vite__mapDeps([16, 1, 2, 3, 8, 4, 5, 9, 12, 17]))),
  kx = [
    {
      path: '',
      element: le.jsx(j.Suspense, {
        fallback: le.jsx(Sn, { size: 'lg' }),
        children: le.jsx(Al, { children: le.jsx(Rm, {}) }),
      }),
    },
    {
      path: '/',
      element: le.jsx(j.Suspense, {
        fallback: le.jsx(Sn, { size: 'lg' }),
        children: le.jsx(Al, { children: le.jsx(Rm, {}) }),
      }),
    },
    {
      path: 'authentication',
      element: le.jsx(j.Suspense, { fallback: le.jsx(Sn, { size: 'lg' }), children: le.jsx(xx, {}) }),
    },
    {
      path: 'account-settings',
      element: le.jsx(j.Suspense, {
        fallback: le.jsx(Sn, { size: 'lg' }),
        children: le.jsx(Al, { children: le.jsx(Vv, {}) }),
      }),
      children: [
        { path: '', element: le.jsx(j.Suspense, { fallback: le.jsx(Sn, { size: 'lg' }), children: le.jsx(yx, {}) }) },
        {
          path: 'edit',
          element: le.jsx(j.Suspense, { fallback: le.jsx(Sn, { size: 'lg' }), children: le.jsx(wx, {}) }),
        },
      ],
    },
    { path: '*', element: le.jsx(j.Suspense, { fallback: le.jsx(Sn, { size: 'lg' }), children: le.jsx(Sx, {}) }) },
  ],
  bx = () => Nv(kx),
  Cx = () => le.jsx(S0, { defaultSetOptions: { path: '/' }, children: le.jsx(bx, {}) }),
  Px = () => `${Fp('2025-07-20T01:05:40.158Z', 'yyyy-MM-dd h:mma O')}`,
  Ex = '/notifications',
  Wp = Ex;
console.log(`
  build info - build version: 1.0.2
  build date: ${Px()}`);
console.log('Debug: browser base url is:', Wp);
Xg.createRoot(document.getElementById('root')).render(
  le.jsx(go.StrictMode, { children: le.jsx(Yv, { basename: Wp, children: le.jsx(Cx, {}) }) })
);
export {
  c0 as $,
  Fx as A,
  wu as B,
  Wx as C,
  zx as D,
  Bx as E,
  Ti as F,
  Lt as G,
  Hn as H,
  _x as I,
  tu as J,
  L1 as K,
  ho as L,
  X1 as M,
  Ux as N,
  Fp as O,
  jx as P,
  Rx as Q,
  $x as R,
  Sn as S,
  Vx as T,
  Ax as U,
  K1 as V,
  gx as W,
  Jl as X,
  l0 as Y,
  o0 as Z,
  J1 as _,
  Vp as a,
  yu as b,
  Ox as c,
  Gx as d,
  Tx as e,
  Ix as f,
  Kx as g,
  Xx as h,
  ae as i,
  le as j,
  q1 as k,
  Hx as l,
  Yx as m,
  Qx as n,
  Vm as o,
  Nx as p,
  qx as q,
  j as r,
  $p as s,
  Jx as t,
  p0 as u,
  e2 as v,
  Zx as w,
  iu as x,
  Lx as y,
  Dx as z,
};
