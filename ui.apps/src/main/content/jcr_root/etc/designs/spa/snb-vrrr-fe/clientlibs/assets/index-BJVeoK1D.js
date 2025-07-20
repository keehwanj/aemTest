const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-CAsULNcM.js',
      'assets/Error-DYTFVrcz.js',
      'assets/useMetadata-Blp6FudJ.js',
      'assets/Error-BFxEtAtV.css',
      'assets/input-helpers-B8rETgnD.js',
      'assets/input-helpers-DshotB5L.css',
      'assets/DiscardChangesModal-B8ygviCx.js',
      'assets/Checkbox-Bc0ApF2o.js',
      'assets/Checkbox-GEzfHL3G.css',
      'assets/index-DkCjfKsC.css',
      'assets/index-EJF7g3ln.js',
      'assets/BackLink-_LqE4RQ_.js',
      'assets/CodeAuthentication-BFCvzVUf.js',
      'assets/CodeAuthentication-CSrm3Utb.css',
      'assets/index-uIYluvho.css',
      'assets/accountSettings-Fh7g996K.css',
      'assets/edit-SUVRDGJi.js',
      'assets/index-Bl1Vb-su.js',
      'assets/index-BWe7Bz4N.js',
      'assets/index-DE7g0oKC.css',
    ])
) => i.map((i) => d[i]);
function rg(i, r) {
  for (var a = 0; a < r.length; a++) {
    const s = r[a];
    if (typeof s != 'string' && !Array.isArray(s)) {
      for (const u in s)
        if (u !== 'default' && !(u in i)) {
          const f = Object.getOwnPropertyDescriptor(s, u);
          f && Object.defineProperty(i, u, f.get ? f : { enumerable: !0, get: () => s[u] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
  new MutationObserver((u) => {
    for (const f of u)
      if (f.type === 'childList')
        for (const d of f.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(u) {
    const f = {};
    return (
      u.integrity && (f.integrity = u.integrity),
      u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : u.crossOrigin === 'anonymous'
        ? (f.credentials = 'omit')
        : (f.credentials = 'same-origin'),
      f
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const f = a(u);
    fetch(u.href, f);
  }
})();
function no(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
}
function K0(i) {
  if (Object.prototype.hasOwnProperty.call(i, '__esModule')) return i;
  var r = i.default;
  if (typeof r == 'function') {
    var a = function s() {
      var u = !1;
      try {
        u = this instanceof s;
      } catch {}
      return u ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    a.prototype = r.prototype;
  } else a = {};
  return (
    Object.defineProperty(a, '__esModule', { value: !0 }),
    Object.keys(i).forEach(function (s) {
      var u = Object.getOwnPropertyDescriptor(i, s);
      Object.defineProperty(
        a,
        s,
        u.get
          ? u
          : {
              enumerable: !0,
              get: function () {
                return i[s];
              },
            }
      );
    }),
    a
  );
}
var al = { exports: {} },
  ri = {},
  ol = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zf;
function ig() {
  if (Zf) return ie;
  Zf = 1;
  var i = Symbol.for('react.element'),
    r = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    u = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    d = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    w = Symbol.iterator;
  function S(b) {
    return b === null || typeof b != 'object'
      ? null
      : ((b = (w && b[w]) || b['@@iterator']), typeof b == 'function' ? b : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    P = {};
  function T(b, _, re) {
    (this.props = b), (this.context = _), (this.refs = P), (this.updater = re || O);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (b, _) {
      if (typeof b != 'object' && typeof b != 'function' && b != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, b, _, 'setState');
    }),
    (T.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, 'forceUpdate');
    });
  function Y() {}
  Y.prototype = T.prototype;
  function z(b, _, re) {
    (this.props = b), (this.context = _), (this.refs = P), (this.updater = re || O);
  }
  var U = (z.prototype = new Y());
  (U.constructor = z), R(U, T.prototype), (U.isPureReactComponent = !0);
  var $ = Array.isArray,
    L = Object.prototype.hasOwnProperty,
    J = { current: null },
    Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(b, _, re) {
    var ae,
      le = {},
      ue = null,
      ge = null;
    if (_ != null)
      for (ae in (_.ref !== void 0 && (ge = _.ref), _.key !== void 0 && (ue = '' + _.key), _))
        L.call(_, ae) && !Z.hasOwnProperty(ae) && (le[ae] = _[ae]);
    var de = arguments.length - 2;
    if (de === 1) le.children = re;
    else if (1 < de) {
      for (var be = Array(de), st = 0; st < de; st++) be[st] = arguments[st + 2];
      le.children = be;
    }
    if (b && b.defaultProps) for (ae in ((de = b.defaultProps), de)) le[ae] === void 0 && (le[ae] = de[ae]);
    return { $$typeof: i, type: b, key: ue, ref: ge, props: le, _owner: J.current };
  }
  function Ee(b, _) {
    return { $$typeof: i, type: b.type, key: _, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Be(b) {
    return typeof b == 'object' && b !== null && b.$$typeof === i;
  }
  function ot(b) {
    var _ = { '=': '=0', ':': '=2' };
    return (
      '$' +
      b.replace(/[=:]/g, function (re) {
        return _[re];
      })
    );
  }
  var wt = /\/+/g;
  function Ge(b, _) {
    return typeof b == 'object' && b !== null && b.key != null ? ot('' + b.key) : _.toString(36);
  }
  function $e(b, _, re, ae, le) {
    var ue = typeof b;
    (ue === 'undefined' || ue === 'boolean') && (b = null);
    var ge = !1;
    if (b === null) ge = !0;
    else
      switch (ue) {
        case 'string':
        case 'number':
          ge = !0;
          break;
        case 'object':
          switch (b.$$typeof) {
            case i:
            case r:
              ge = !0;
          }
      }
    if (ge)
      return (
        (ge = b),
        (le = le(ge)),
        (b = ae === '' ? '.' + Ge(ge, 0) : ae),
        $(le)
          ? ((re = ''),
            b != null && (re = b.replace(wt, '$&/') + '/'),
            $e(le, _, re, '', function (st) {
              return st;
            }))
          : le != null &&
            (Be(le) &&
              (le = Ee(
                le,
                re + (!le.key || (ge && ge.key === le.key) ? '' : ('' + le.key).replace(wt, '$&/') + '/') + b
              )),
            _.push(le)),
        1
      );
    if (((ge = 0), (ae = ae === '' ? '.' : ae + ':'), $(b)))
      for (var de = 0; de < b.length; de++) {
        ue = b[de];
        var be = ae + Ge(ue, de);
        ge += $e(ue, _, re, be, le);
      }
    else if (((be = S(b)), typeof be == 'function'))
      for (b = be.call(b), de = 0; !(ue = b.next()).done; )
        (ue = ue.value), (be = ae + Ge(ue, de++)), (ge += $e(ue, _, re, be, le));
    else if (ue === 'object')
      throw (
        ((_ = String(b)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (_ === '[object Object]' ? 'object with keys {' + Object.keys(b).join(', ') + '}' : _) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return ge;
  }
  function He(b, _, re) {
    if (b == null) return b;
    var ae = [],
      le = 0;
    return (
      $e(b, ae, '', '', function (ue) {
        return _.call(re, ue, le++);
      }),
      ae
    );
  }
  function _e(b) {
    if (b._status === -1) {
      var _ = b._result;
      (_ = _()),
        _.then(
          function (re) {
            (b._status === 0 || b._status === -1) && ((b._status = 1), (b._result = re));
          },
          function (re) {
            (b._status === 0 || b._status === -1) && ((b._status = 2), (b._result = re));
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = _));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var ye = { current: null },
    F = { transition: null },
    X = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: F, ReactCurrentOwner: J };
  function V() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ie.Children = {
      map: He,
      forEach: function (b, _, re) {
        He(
          b,
          function () {
            _.apply(this, arguments);
          },
          re
        );
      },
      count: function (b) {
        var _ = 0;
        return (
          He(b, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (b) {
        return (
          He(b, function (_) {
            return _;
          }) || []
        );
      },
      only: function (b) {
        if (!Be(b)) throw Error('React.Children.only expected to receive a single React element child.');
        return b;
      },
    }),
    (ie.Component = T),
    (ie.Fragment = a),
    (ie.Profiler = u),
    (ie.PureComponent = z),
    (ie.StrictMode = s),
    (ie.Suspense = h),
    (ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (ie.act = V),
    (ie.cloneElement = function (b, _, re) {
      if (b == null)
        throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + b + '.');
      var ae = R({}, b.props),
        le = b.key,
        ue = b.ref,
        ge = b._owner;
      if (_ != null) {
        if (
          (_.ref !== void 0 && ((ue = _.ref), (ge = J.current)),
          _.key !== void 0 && (le = '' + _.key),
          b.type && b.type.defaultProps)
        )
          var de = b.type.defaultProps;
        for (be in _)
          L.call(_, be) && !Z.hasOwnProperty(be) && (ae[be] = _[be] === void 0 && de !== void 0 ? de[be] : _[be]);
      }
      var be = arguments.length - 2;
      if (be === 1) ae.children = re;
      else if (1 < be) {
        de = Array(be);
        for (var st = 0; st < be; st++) de[st] = arguments[st + 2];
        ae.children = de;
      }
      return { $$typeof: i, type: b.type, key: le, ref: ue, props: ae, _owner: ge };
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
        (b.Provider = { $$typeof: f, _context: b }),
        (b.Consumer = b)
      );
    }),
    (ie.createElement = he),
    (ie.createFactory = function (b) {
      var _ = he.bind(null, b);
      return (_.type = b), _;
    }),
    (ie.createRef = function () {
      return { current: null };
    }),
    (ie.forwardRef = function (b) {
      return { $$typeof: m, render: b };
    }),
    (ie.isValidElement = Be),
    (ie.lazy = function (b) {
      return { $$typeof: y, _payload: { _status: -1, _result: b }, _init: _e };
    }),
    (ie.memo = function (b, _) {
      return { $$typeof: g, type: b, compare: _ === void 0 ? null : _ };
    }),
    (ie.startTransition = function (b) {
      var _ = F.transition;
      F.transition = {};
      try {
        b();
      } finally {
        F.transition = _;
      }
    }),
    (ie.unstable_act = V),
    (ie.useCallback = function (b, _) {
      return ye.current.useCallback(b, _);
    }),
    (ie.useContext = function (b) {
      return ye.current.useContext(b);
    }),
    (ie.useDebugValue = function () {}),
    (ie.useDeferredValue = function (b) {
      return ye.current.useDeferredValue(b);
    }),
    (ie.useEffect = function (b, _) {
      return ye.current.useEffect(b, _);
    }),
    (ie.useId = function () {
      return ye.current.useId();
    }),
    (ie.useImperativeHandle = function (b, _, re) {
      return ye.current.useImperativeHandle(b, _, re);
    }),
    (ie.useInsertionEffect = function (b, _) {
      return ye.current.useInsertionEffect(b, _);
    }),
    (ie.useLayoutEffect = function (b, _) {
      return ye.current.useLayoutEffect(b, _);
    }),
    (ie.useMemo = function (b, _) {
      return ye.current.useMemo(b, _);
    }),
    (ie.useReducer = function (b, _, re) {
      return ye.current.useReducer(b, _, re);
    }),
    (ie.useRef = function (b) {
      return ye.current.useRef(b);
    }),
    (ie.useState = function (b) {
      return ye.current.useState(b);
    }),
    (ie.useSyncExternalStore = function (b, _, re) {
      return ye.current.useSyncExternalStore(b, _, re);
    }),
    (ie.useTransition = function () {
      return ye.current.useTransition();
    }),
    (ie.version = '18.3.1'),
    ie
  );
}
var ed;
function Ul() {
  return ed || ((ed = 1), (ol.exports = ig())), ol.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td;
function ag() {
  if (td) return ri;
  td = 1;
  var i = Ul(),
    r = Symbol.for('react.element'),
    a = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, h, g) {
    var y,
      w = {},
      S = null,
      O = null;
    g !== void 0 && (S = '' + g), h.key !== void 0 && (S = '' + h.key), h.ref !== void 0 && (O = h.ref);
    for (y in h) s.call(h, y) && !f.hasOwnProperty(y) && (w[y] = h[y]);
    if (m && m.defaultProps) for (y in ((h = m.defaultProps), h)) w[y] === void 0 && (w[y] = h[y]);
    return { $$typeof: r, type: m, key: S, ref: O, props: w, _owner: u.current };
  }
  return (ri.Fragment = a), (ri.jsx = d), (ri.jsxs = d), ri;
}
var nd;
function og() {
  return nd || ((nd = 1), (al.exports = ag())), al.exports;
}
var me = og(),
  D = Ul();
const ro = no(D),
  sg = rg({ __proto__: null, default: ro }, [D]);
var Ia = {},
  sl = { exports: {} },
  at = {},
  ll = { exports: {} },
  ul = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rd;
function lg() {
  return (
    rd ||
      ((rd = 1),
      (function (i) {
        function r(F, X) {
          var V = F.length;
          F.push(X);
          e: for (; 0 < V; ) {
            var b = (V - 1) >>> 1,
              _ = F[b];
            if (0 < u(_, X)) (F[b] = X), (F[V] = _), (V = b);
            else break e;
          }
        }
        function a(F) {
          return F.length === 0 ? null : F[0];
        }
        function s(F) {
          if (F.length === 0) return null;
          var X = F[0],
            V = F.pop();
          if (V !== X) {
            F[0] = V;
            e: for (var b = 0, _ = F.length, re = _ >>> 1; b < re; ) {
              var ae = 2 * (b + 1) - 1,
                le = F[ae],
                ue = ae + 1,
                ge = F[ue];
              if (0 > u(le, V))
                ue < _ && 0 > u(ge, le) ? ((F[b] = ge), (F[ue] = V), (b = ue)) : ((F[b] = le), (F[ae] = V), (b = ae));
              else if (ue < _ && 0 > u(ge, V)) (F[b] = ge), (F[ue] = V), (b = ue);
              else break e;
            }
          }
          return X;
        }
        function u(F, X) {
          var V = F.sortIndex - X.sortIndex;
          return V !== 0 ? V : F.id - X.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var f = performance;
          i.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            m = d.now();
          i.unstable_now = function () {
            return d.now() - m;
          };
        }
        var h = [],
          g = [],
          y = 1,
          w = null,
          S = 3,
          O = !1,
          R = !1,
          P = !1,
          T = typeof setTimeout == 'function' ? setTimeout : null,
          Y = typeof clearTimeout == 'function' ? clearTimeout : null,
          z = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function U(F) {
          for (var X = a(g); X !== null; ) {
            if (X.callback === null) s(g);
            else if (X.startTime <= F) s(g), (X.sortIndex = X.expirationTime), r(h, X);
            else break;
            X = a(g);
          }
        }
        function $(F) {
          if (((P = !1), U(F), !R))
            if (a(h) !== null) (R = !0), _e(L);
            else {
              var X = a(g);
              X !== null && ye($, X.startTime - F);
            }
        }
        function L(F, X) {
          (R = !1), P && ((P = !1), Y(he), (he = -1)), (O = !0);
          var V = S;
          try {
            for (U(X), w = a(h); w !== null && (!(w.expirationTime > X) || (F && !ot())); ) {
              var b = w.callback;
              if (typeof b == 'function') {
                (w.callback = null), (S = w.priorityLevel);
                var _ = b(w.expirationTime <= X);
                (X = i.unstable_now()), typeof _ == 'function' ? (w.callback = _) : w === a(h) && s(h), U(X);
              } else s(h);
              w = a(h);
            }
            if (w !== null) var re = !0;
            else {
              var ae = a(g);
              ae !== null && ye($, ae.startTime - X), (re = !1);
            }
            return re;
          } finally {
            (w = null), (S = V), (O = !1);
          }
        }
        var J = !1,
          Z = null,
          he = -1,
          Ee = 5,
          Be = -1;
        function ot() {
          return !(i.unstable_now() - Be < Ee);
        }
        function wt() {
          if (Z !== null) {
            var F = i.unstable_now();
            Be = F;
            var X = !0;
            try {
              X = Z(!0, F);
            } finally {
              X ? Ge() : ((J = !1), (Z = null));
            }
          } else J = !1;
        }
        var Ge;
        if (typeof z == 'function')
          Ge = function () {
            z(wt);
          };
        else if (typeof MessageChannel < 'u') {
          var $e = new MessageChannel(),
            He = $e.port2;
          ($e.port1.onmessage = wt),
            (Ge = function () {
              He.postMessage(null);
            });
        } else
          Ge = function () {
            T(wt, 0);
          };
        function _e(F) {
          (Z = F), J || ((J = !0), Ge());
        }
        function ye(F, X) {
          he = T(function () {
            F(i.unstable_now());
          }, X);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            R || O || ((R = !0), _e(L));
          }),
          (i.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Ee = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return a(h);
          }),
          (i.unstable_next = function (F) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = S;
            }
            var V = S;
            S = X;
            try {
              return F();
            } finally {
              S = V;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (F, X) {
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
            var V = S;
            S = F;
            try {
              return X();
            } finally {
              S = V;
            }
          }),
          (i.unstable_scheduleCallback = function (F, X, V) {
            var b = i.unstable_now();
            switch (
              (typeof V == 'object' && V !== null
                ? ((V = V.delay), (V = typeof V == 'number' && 0 < V ? b + V : b))
                : (V = b),
              F)
            ) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return (
              (_ = V + _),
              (F = { id: y++, callback: X, priorityLevel: F, startTime: V, expirationTime: _, sortIndex: -1 }),
              V > b
                ? ((F.sortIndex = V),
                  r(g, F),
                  a(h) === null && F === a(g) && (P ? (Y(he), (he = -1)) : (P = !0), ye($, V - b)))
                : ((F.sortIndex = _), r(h, F), R || O || ((R = !0), _e(L))),
              F
            );
          }),
          (i.unstable_shouldYield = ot),
          (i.unstable_wrapCallback = function (F) {
            var X = S;
            return function () {
              var V = S;
              S = X;
              try {
                return F.apply(this, arguments);
              } finally {
                S = V;
              }
            };
          });
      })(ul)),
    ul
  );
}
var id;
function ug() {
  return id || ((id = 1), (ll.exports = lg())), ll.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad;
function cg() {
  if (ad) return at;
  ad = 1;
  var i = Ul(),
    r = ug();
  function a(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var s = new Set(),
    u = {};
  function f(e, t) {
    d(e, t), d(e + 'Capture', t);
  }
  function d(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var m = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    w = {};
  function S(e) {
    return h.call(w, e) ? !0 : h.call(y, e) ? !1 : g.test(e) ? (w[e] = !0) : ((y[e] = !0), !1);
  }
  function O(e, t, n, o) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return o
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function R(e, t, n, o) {
    if (t === null || typeof t > 'u' || O(e, t, n, o)) return !0;
    if (o) return !1;
    if (n !== null)
      switch (n.type) {
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
  function P(e, t, n, o, l, c, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = p);
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
  var Y = /[\-:]([a-z])/g;
  function z(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Y, z);
      T[t] = new P(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
      var t = e.replace(Y, z);
      T[t] = new P(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Y, z);
      T[t] = new P(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      T[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (T.xlinkHref = new P('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      T[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function U(e, t, n, o) {
    var l = T.hasOwnProperty(t) ? T[t] : null;
    (l !== null
      ? l.type !== 0
      : o || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (R(t, n, l, o) && (n = null),
      o || l === null
        ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (o = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
  }
  var $ = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    L = Symbol.for('react.element'),
    J = Symbol.for('react.portal'),
    Z = Symbol.for('react.fragment'),
    he = Symbol.for('react.strict_mode'),
    Ee = Symbol.for('react.profiler'),
    Be = Symbol.for('react.provider'),
    ot = Symbol.for('react.context'),
    wt = Symbol.for('react.forward_ref'),
    Ge = Symbol.for('react.suspense'),
    $e = Symbol.for('react.suspense_list'),
    He = Symbol.for('react.memo'),
    _e = Symbol.for('react.lazy'),
    ye = Symbol.for('react.offscreen'),
    F = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (F && e[F]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var V = Object.assign,
    b;
  function _(e) {
    if (b === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
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
  function ae(e, t) {
    if (!e || re) return '';
    re = !0;
    var n = Error.prepareStackTrace;
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
            var o = N;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (N) {
            o = N;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (N) {
          o = N;
        }
        e();
      }
    } catch (N) {
      if (N && o && typeof N.stack == 'string') {
        for (
          var l = N.stack.split(`
`),
            c = o.stack.split(`
`),
            p = l.length - 1,
            v = c.length - 1;
          1 <= p && 0 <= v && l[p] !== c[v];

        )
          v--;
        for (; 1 <= p && 0 <= v; p--, v--)
          if (l[p] !== c[v]) {
            if (p !== 1 || v !== 1)
              do
                if ((p--, v--, 0 > v || l[p] !== c[v])) {
                  var x =
                    `
` + l[p].replace(' at new ', ' at ');
                  return e.displayName && x.includes('<anonymous>') && (x = x.replace('<anonymous>', e.displayName)), x;
                }
              while (1 <= p && 0 <= v);
            break;
          }
      }
    } finally {
      (re = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? _(e) : '';
  }
  function le(e) {
    switch (e.tag) {
      case 5:
        return _(e.type);
      case 16:
        return _('Lazy');
      case 13:
        return _('Suspense');
      case 19:
        return _('SuspenseList');
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
  function ue(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Z:
        return 'Fragment';
      case J:
        return 'Portal';
      case Ee:
        return 'Profiler';
      case he:
        return 'StrictMode';
      case Ge:
        return 'Suspense';
      case $e:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ot:
          return (e.displayName || 'Context') + '.Consumer';
        case Be:
          return (e._context.displayName || 'Context') + '.Provider';
        case wt:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case He:
          return (t = e.displayName || null), t !== null ? t : ue(e.type) || 'Memo';
        case _e:
          (t = e._payload), (e = e._init);
          try {
            return ue(e(t));
          } catch {}
      }
    return null;
  }
  function ge(e) {
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
        return ue(t);
      case 8:
        return t === he ? 'StrictMode' : 'Mode';
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
  function de(e) {
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
  function be(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function st(e) {
    var t = be(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = '' + e[t];
    if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
      var l = n.get,
        c = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (p) {
            (o = '' + p), c.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (p) {
            o = '' + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ki(e) {
    e._valueTracker || (e._valueTracker = st(e));
  }
  function iu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      o = '';
    return e && (o = be(e) ? (e.checked ? 'true' : 'false') : e.value), (e = o), e !== n ? (t.setValue(e), !0) : !1;
  }
  function bi(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function fo(e, t) {
    var n = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function au(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    (n = de(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: n,
        controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function ou(e, t) {
    (t = t.checked), t != null && U(e, 'checked', t, !1);
  }
  function po(e, t) {
    ou(e, t);
    var n = de(t.value),
      o = t.type;
    if (n != null)
      o === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (o === 'submit' || o === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? mo(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && mo(e, t.type, de(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function su(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var o = t.type;
      if (!((o !== 'submit' && o !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n);
  }
  function mo(e, t, n) {
    (t !== 'number' || bi(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var yr = Array.isArray;
  function Fn(e, t, n, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && o && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + de(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), o && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ho(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return V({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
  }
  function lu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (yr(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: de(n) };
  }
  function uu(e, t) {
    var n = de(t.value),
      o = de(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      o != null && (e.defaultValue = '' + o);
  }
  function cu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function fu(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function go(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? fu(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
  }
  var Ci,
    du = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, o, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, o, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          Ci = Ci || document.createElement('div'),
            Ci.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Ci.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function wr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Sr = {
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
    sm = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Sr).forEach(function (e) {
    sm.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e]);
    });
  });
  function pu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
      ? ('' + t).trim()
      : t + 'px';
  }
  function mu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var o = n.indexOf('--') === 0,
          l = pu(n, t[n], o);
        n === 'float' && (n = 'cssFloat'), o ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var lm = V(
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
  function vo(e, t) {
    if (t) {
      if (lm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(a(62));
    }
  }
  function yo(e, t) {
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
  var wo = null;
  function So(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var xo = null,
    Dn = null,
    $n = null;
  function hu(e) {
    if ((e = Vr(e))) {
      if (typeof xo != 'function') throw Error(a(280));
      var t = e.stateNode;
      t && ((t = Ki(t)), xo(e.stateNode, e.type, t));
    }
  }
  function gu(e) {
    Dn ? ($n ? $n.push(e) : ($n = [e])) : (Dn = e);
  }
  function vu() {
    if (Dn) {
      var e = Dn,
        t = $n;
      if ((($n = Dn = null), hu(e), t)) for (e = 0; e < t.length; e++) hu(t[e]);
    }
  }
  function yu(e, t) {
    return e(t);
  }
  function wu() {}
  var ko = !1;
  function Su(e, t, n) {
    if (ko) return e(t, n);
    ko = !0;
    try {
      return yu(e, t, n);
    } finally {
      (ko = !1), (Dn !== null || $n !== null) && (wu(), vu());
    }
  }
  function xr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = Ki(n);
    if (o === null) return null;
    n = o[t];
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
        (o = !o.disabled) ||
          ((e = e.type), (o = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(a(231, t, typeof n));
    return n;
  }
  var bo = !1;
  if (m)
    try {
      var kr = {};
      Object.defineProperty(kr, 'passive', {
        get: function () {
          bo = !0;
        },
      }),
        window.addEventListener('test', kr, kr),
        window.removeEventListener('test', kr, kr);
    } catch {
      bo = !1;
    }
  function um(e, t, n, o, l, c, p, v, x) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, N);
    } catch (A) {
      this.onError(A);
    }
  }
  var br = !1,
    Ei = null,
    Ni = !1,
    Co = null,
    cm = {
      onError: function (e) {
        (br = !0), (Ei = e);
      },
    };
  function fm(e, t, n, o, l, c, p, v, x) {
    (br = !1), (Ei = null), um.apply(cm, arguments);
  }
  function dm(e, t, n, o, l, c, p, v, x) {
    if ((fm.apply(this, arguments), br)) {
      if (br) {
        var N = Ei;
        (br = !1), (Ei = null);
      } else throw Error(a(198));
      Ni || ((Ni = !0), (Co = N));
    }
  }
  function vn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function xu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function ku(e) {
    if (vn(e) !== e) throw Error(a(188));
  }
  function pm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = vn(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, o = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (((o = l.return), o !== null)) {
          n = o;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c; ) {
          if (c === n) return ku(l), e;
          if (c === o) return ku(l), t;
          c = c.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== o.return) (n = l), (o = c);
      else {
        for (var p = !1, v = l.child; v; ) {
          if (v === n) {
            (p = !0), (n = l), (o = c);
            break;
          }
          if (v === o) {
            (p = !0), (o = l), (n = c);
            break;
          }
          v = v.sibling;
        }
        if (!p) {
          for (v = c.child; v; ) {
            if (v === n) {
              (p = !0), (n = c), (o = l);
              break;
            }
            if (v === o) {
              (p = !0), (o = c), (n = l);
              break;
            }
            v = v.sibling;
          }
          if (!p) throw Error(a(189));
        }
      }
      if (n.alternate !== o) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function bu(e) {
    return (e = pm(e)), e !== null ? Cu(e) : null;
  }
  function Cu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Cu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Eu = r.unstable_scheduleCallback,
    Nu = r.unstable_cancelCallback,
    mm = r.unstable_shouldYield,
    hm = r.unstable_requestPaint,
    Te = r.unstable_now,
    gm = r.unstable_getCurrentPriorityLevel,
    Eo = r.unstable_ImmediatePriority,
    Pu = r.unstable_UserBlockingPriority,
    Pi = r.unstable_NormalPriority,
    vm = r.unstable_LowPriority,
    Ou = r.unstable_IdlePriority,
    Oi = null,
    Ot = null;
  function ym(e) {
    if (Ot && typeof Ot.onCommitFiberRoot == 'function')
      try {
        Ot.onCommitFiberRoot(Oi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : xm,
    wm = Math.log,
    Sm = Math.LN2;
  function xm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((wm(e) / Sm) | 0)) | 0;
  }
  var Li = 64,
    Ti = 4194304;
  function Cr(e) {
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
  function Ri(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0,
      l = e.suspendedLanes,
      c = e.pingedLanes,
      p = n & 268435455;
    if (p !== 0) {
      var v = p & ~l;
      v !== 0 ? (o = Cr(v)) : ((c &= p), c !== 0 && (o = Cr(c)));
    } else (p = n & ~l), p !== 0 ? (o = Cr(p)) : c !== 0 && (o = Cr(c));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & l) === 0 &&
      ((l = o & -o), (c = t & -t), l >= c || (l === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; ) (n = 31 - St(t)), (l = 1 << n), (o |= e[n]), (t &= ~l);
    return o;
  }
  function km(e, t) {
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
  function bm(e, t) {
    for (var n = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var p = 31 - St(c),
        v = 1 << p,
        x = l[p];
      x === -1 ? ((v & n) === 0 || (v & o) !== 0) && (l[p] = km(v, t)) : x <= t && (e.expiredLanes |= v), (c &= ~v);
    }
  }
  function No(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Lu() {
    var e = Li;
    return (Li <<= 1), (Li & 4194240) === 0 && (Li = 64), e;
  }
  function Po(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Er(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - St(t)),
      (e[t] = n);
  }
  function Cm(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - St(n),
        c = 1 << l;
      (t[l] = 0), (o[l] = -1), (e[l] = -1), (n &= ~c);
    }
  }
  function Oo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var o = 31 - St(n),
        l = 1 << o;
      (l & t) | (e[o] & t) && (e[o] |= t), (n &= ~l);
    }
  }
  var pe = 0;
  function Tu(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var Ru,
    Lo,
    Iu,
    _u,
    Au,
    To = !1,
    Ii = [],
    Kt = null,
    qt = null,
    Qt = null,
    Nr = new Map(),
    Pr = new Map(),
    Gt = [],
    Em =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function zu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Kt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        qt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Qt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Nr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Pr.delete(t.pointerId);
    }
  }
  function Or(e, t, n, o, l, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: o, nativeEvent: c, targetContainers: [l] }),
        t !== null && ((t = Vr(t)), t !== null && Lo(t)),
        e)
      : ((e.eventSystemFlags |= o), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Nm(e, t, n, o, l) {
    switch (t) {
      case 'focusin':
        return (Kt = Or(Kt, e, t, n, o, l)), !0;
      case 'dragenter':
        return (qt = Or(qt, e, t, n, o, l)), !0;
      case 'mouseover':
        return (Qt = Or(Qt, e, t, n, o, l)), !0;
      case 'pointerover':
        var c = l.pointerId;
        return Nr.set(c, Or(Nr.get(c) || null, e, t, n, o, l)), !0;
      case 'gotpointercapture':
        return (c = l.pointerId), Pr.set(c, Or(Pr.get(c) || null, e, t, n, o, l)), !0;
    }
    return !1;
  }
  function Mu(e) {
    var t = yn(e.target);
    if (t !== null) {
      var n = vn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = xu(n)), t !== null)) {
            (e.blockedOn = t),
              Au(e.priority, function () {
                Iu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _i(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        (wo = o), n.target.dispatchEvent(o), (wo = null);
      } else return (t = Vr(n)), t !== null && Lo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function ju(e, t, n) {
    _i(e) && n.delete(t);
  }
  function Pm() {
    (To = !1),
      Kt !== null && _i(Kt) && (Kt = null),
      qt !== null && _i(qt) && (qt = null),
      Qt !== null && _i(Qt) && (Qt = null),
      Nr.forEach(ju),
      Pr.forEach(ju);
  }
  function Lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), To || ((To = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Pm)));
  }
  function Tr(e) {
    function t(l) {
      return Lr(l, e);
    }
    if (0 < Ii.length) {
      Lr(Ii[0], e);
      for (var n = 1; n < Ii.length; n++) {
        var o = Ii[n];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Kt !== null && Lr(Kt, e), qt !== null && Lr(qt, e), Qt !== null && Lr(Qt, e), Nr.forEach(t), Pr.forEach(t), n = 0;
      n < Gt.length;
      n++
    )
      (o = Gt[n]), o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < Gt.length && ((n = Gt[0]), n.blockedOn === null); ) Mu(n), n.blockedOn === null && Gt.shift();
  }
  var Un = $.ReactCurrentBatchConfig,
    Ai = !0;
  function Om(e, t, n, o) {
    var l = pe,
      c = Un.transition;
    Un.transition = null;
    try {
      (pe = 1), Ro(e, t, n, o);
    } finally {
      (pe = l), (Un.transition = c);
    }
  }
  function Lm(e, t, n, o) {
    var l = pe,
      c = Un.transition;
    Un.transition = null;
    try {
      (pe = 4), Ro(e, t, n, o);
    } finally {
      (pe = l), (Un.transition = c);
    }
  }
  function Ro(e, t, n, o) {
    if (Ai) {
      var l = Io(e, t, n, o);
      if (l === null) Qo(e, t, o, zi, n), zu(e, o);
      else if (Nm(l, e, t, n, o)) o.stopPropagation();
      else if ((zu(e, o), t & 4 && -1 < Em.indexOf(e))) {
        for (; l !== null; ) {
          var c = Vr(l);
          if ((c !== null && Ru(c), (c = Io(e, t, n, o)), c === null && Qo(e, t, o, zi, n), c === l)) break;
          l = c;
        }
        l !== null && o.stopPropagation();
      } else Qo(e, t, o, null, n);
    }
  }
  var zi = null;
  function Io(e, t, n, o) {
    if (((zi = null), (e = So(o)), (e = yn(e)), e !== null))
      if (((t = vn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = xu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (zi = e), null;
  }
  function Fu(e) {
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
        switch (gm()) {
          case Eo:
            return 1;
          case Pu:
            return 4;
          case Pi:
          case vm:
            return 16;
          case Ou:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xt = null,
    _o = null,
    Mi = null;
  function Du() {
    if (Mi) return Mi;
    var e,
      t = _o,
      n = t.length,
      o,
      l = 'value' in Xt ? Xt.value : Xt.textContent,
      c = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var p = n - e;
    for (o = 1; o <= p && t[n - o] === l[c - o]; o++);
    return (Mi = l.slice(e, 1 < o ? 1 - o : void 0));
  }
  function ji(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fi() {
    return !0;
  }
  function $u() {
    return !1;
  }
  function lt(e) {
    function t(n, o, l, c, p) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = o),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null);
      for (var v in e) e.hasOwnProperty(v) && ((n = e[v]), (this[v] = n ? n(c) : c[v]));
      return (
        (this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Fi : $u),
        (this.isPropagationStopped = $u),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Fi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Fi));
        },
        persist: function () {},
        isPersistent: Fi,
      }),
      t
    );
  }
  var Vn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ao = lt(Vn),
    Rr = V({}, Vn, { view: 0, detail: 0 }),
    Tm = lt(Rr),
    zo,
    Mo,
    Ir,
    Di = V({}, Rr, {
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
      getModifierState: Fo,
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
          : (e !== Ir &&
              (Ir && e.type === 'mousemove'
                ? ((zo = e.screenX - Ir.screenX), (Mo = e.screenY - Ir.screenY))
                : (Mo = zo = 0),
              (Ir = e)),
            zo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Mo;
      },
    }),
    Uu = lt(Di),
    Rm = V({}, Di, { dataTransfer: 0 }),
    Im = lt(Rm),
    _m = V({}, Rr, { relatedTarget: 0 }),
    jo = lt(_m),
    Am = V({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zm = lt(Am),
    Mm = V({}, Vn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    jm = lt(Mm),
    Fm = V({}, Vn, { data: 0 }),
    Vu = lt(Fm),
    Dm = {
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
    $m = {
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
    Um = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Vm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Um[e]) ? !!t[e] : !1;
  }
  function Fo() {
    return Vm;
  }
  var Bm = V({}, Rr, {
      key: function (e) {
        if (e.key) {
          var t = Dm[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ji(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? $m[e.keyCode] || 'Unidentified'
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
      getModifierState: Fo,
      charCode: function (e) {
        return e.type === 'keypress' ? ji(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? ji(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
    }),
    Hm = lt(Bm),
    Wm = V({}, Di, {
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
    Bu = lt(Wm),
    Ym = V({}, Rr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fo,
    }),
    Km = lt(Ym),
    qm = V({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qm = lt(qm),
    Gm = V({}, Di, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Xm = lt(Gm),
    Jm = [9, 13, 27, 32],
    Do = m && 'CompositionEvent' in window,
    _r = null;
  m && 'documentMode' in document && (_r = document.documentMode);
  var Zm = m && 'TextEvent' in window && !_r,
    Hu = m && (!Do || (_r && 8 < _r && 11 >= _r)),
    Wu = ' ',
    Yu = !1;
  function Ku(e, t) {
    switch (e) {
      case 'keyup':
        return Jm.indexOf(t.keyCode) !== -1;
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
  function qu(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Bn = !1;
  function eh(e, t) {
    switch (e) {
      case 'compositionend':
        return qu(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Yu = !0), Wu);
      case 'textInput':
        return (e = t.data), e === Wu && Yu ? null : e;
      default:
        return null;
    }
  }
  function th(e, t) {
    if (Bn)
      return e === 'compositionend' || (!Do && Ku(e, t)) ? ((e = Du()), (Mi = _o = Xt = null), (Bn = !1), e) : null;
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
        return Hu && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var nh = {
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
  function Qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!nh[e.type] : t === 'textarea';
  }
  function Gu(e, t, n, o) {
    gu(o),
      (t = Hi(t, 'onChange')),
      0 < t.length && ((n = new Ao('onChange', 'change', null, n, o)), e.push({ event: n, listeners: t }));
  }
  var Ar = null,
    zr = null;
  function rh(e) {
    mc(e, 0);
  }
  function $i(e) {
    var t = qn(e);
    if (iu(t)) return e;
  }
  function ih(e, t) {
    if (e === 'change') return t;
  }
  var Xu = !1;
  if (m) {
    var $o;
    if (m) {
      var Uo = 'oninput' in document;
      if (!Uo) {
        var Ju = document.createElement('div');
        Ju.setAttribute('oninput', 'return;'), (Uo = typeof Ju.oninput == 'function');
      }
      $o = Uo;
    } else $o = !1;
    Xu = $o && (!document.documentMode || 9 < document.documentMode);
  }
  function Zu() {
    Ar && (Ar.detachEvent('onpropertychange', ec), (zr = Ar = null));
  }
  function ec(e) {
    if (e.propertyName === 'value' && $i(zr)) {
      var t = [];
      Gu(t, zr, e, So(e)), Su(rh, t);
    }
  }
  function ah(e, t, n) {
    e === 'focusin' ? (Zu(), (Ar = t), (zr = n), Ar.attachEvent('onpropertychange', ec)) : e === 'focusout' && Zu();
  }
  function oh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return $i(zr);
  }
  function sh(e, t) {
    if (e === 'click') return $i(t);
  }
  function lh(e, t) {
    if (e === 'input' || e === 'change') return $i(t);
  }
  function uh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var xt = typeof Object.is == 'function' ? Object.is : uh;
  function Mr(e, t) {
    if (xt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var l = n[o];
      if (!h.call(t, l) || !xt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function tc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nc(e, t) {
    var n = tc(e);
    e = 0;
    for (var o; n; ) {
      if (n.nodeType === 3) {
        if (((o = e + n.textContent.length), e <= t && o >= t)) return { node: n, offset: t - e };
        e = o;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = tc(n);
    }
  }
  function rc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? rc(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ic() {
    for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = bi(e.document);
    }
    return t;
  }
  function Vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function ch(e) {
    var t = ic(),
      n = e.focusedElem,
      o = e.selectionRange;
    if (t !== n && n && n.ownerDocument && rc(n.ownerDocument.documentElement, n)) {
      if (o !== null && Vo(n)) {
        if (((t = o.start), (e = o.end), e === void 0 && (e = t), 'selectionStart' in n))
          (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
        else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
          e = e.getSelection();
          var l = n.textContent.length,
            c = Math.min(o.start, l);
          (o = o.end === void 0 ? c : Math.min(o.end, l)),
            !e.extend && c > o && ((l = o), (o = c), (c = l)),
            (l = nc(n, c));
          var p = nc(n, o);
          l &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            c > o ? (e.addRange(t), e.extend(p.node, p.offset)) : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var fh = m && 'documentMode' in document && 11 >= document.documentMode,
    Hn = null,
    Bo = null,
    jr = null,
    Ho = !1;
  function ac(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho ||
      Hn == null ||
      Hn !== bi(o) ||
      ((o = Hn),
      'selectionStart' in o && Vo(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (jr && Mr(jr, o)) ||
        ((jr = o),
        (o = Hi(Bo, 'onSelect')),
        0 < o.length &&
          ((t = new Ao('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: o }), (t.target = Hn))));
  }
  function Ui(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
  }
  var Wn = {
      animationend: Ui('Animation', 'AnimationEnd'),
      animationiteration: Ui('Animation', 'AnimationIteration'),
      animationstart: Ui('Animation', 'AnimationStart'),
      transitionend: Ui('Transition', 'TransitionEnd'),
    },
    Wo = {},
    oc = {};
  m &&
    ((oc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Wn.animationend.animation, delete Wn.animationiteration.animation, delete Wn.animationstart.animation),
    'TransitionEvent' in window || delete Wn.transitionend.transition);
  function Vi(e) {
    if (Wo[e]) return Wo[e];
    if (!Wn[e]) return e;
    var t = Wn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in oc) return (Wo[e] = t[n]);
    return e;
  }
  var sc = Vi('animationend'),
    lc = Vi('animationiteration'),
    uc = Vi('animationstart'),
    cc = Vi('transitionend'),
    fc = new Map(),
    dc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Jt(e, t) {
    fc.set(e, t), f(t, [e]);
  }
  for (var Yo = 0; Yo < dc.length; Yo++) {
    var Ko = dc[Yo],
      dh = Ko.toLowerCase(),
      ph = Ko[0].toUpperCase() + Ko.slice(1);
    Jt(dh, 'on' + ph);
  }
  Jt(sc, 'onAnimationEnd'),
    Jt(lc, 'onAnimationIteration'),
    Jt(uc, 'onAnimationStart'),
    Jt('dblclick', 'onDoubleClick'),
    Jt('focusin', 'onFocus'),
    Jt('focusout', 'onBlur'),
    Jt(cc, 'onTransitionEnd'),
    d('onMouseEnter', ['mouseout', 'mouseover']),
    d('onMouseLeave', ['mouseout', 'mouseover']),
    d('onPointerEnter', ['pointerout', 'pointerover']),
    d('onPointerLeave', ['pointerout', 'pointerover']),
    f('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    f('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    f('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    f('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    f('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    f('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
  var Fr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    mh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Fr));
  function pc(e, t, n) {
    var o = e.type || 'unknown-event';
    (e.currentTarget = n), dm(o, t, void 0, e), (e.currentTarget = null);
  }
  function mc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n],
        l = o.event;
      o = o.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = o.length - 1; 0 <= p; p--) {
            var v = o[p],
              x = v.instance,
              N = v.currentTarget;
            if (((v = v.listener), x !== c && l.isPropagationStopped())) break e;
            pc(l, v, N), (c = x);
          }
        else
          for (p = 0; p < o.length; p++) {
            if (
              ((v = o[p]),
              (x = v.instance),
              (N = v.currentTarget),
              (v = v.listener),
              x !== c && l.isPropagationStopped())
            )
              break e;
            pc(l, v, N), (c = x);
          }
      }
    }
    if (Ni) throw ((e = Co), (Ni = !1), (Co = null), e);
  }
  function we(e, t) {
    var n = t[ts];
    n === void 0 && (n = t[ts] = new Set());
    var o = e + '__bubble';
    n.has(o) || (hc(t, e, 2, !1), n.add(o));
  }
  function qo(e, t, n) {
    var o = 0;
    t && (o |= 4), hc(n, e, o, t);
  }
  var Bi = '_reactListening' + Math.random().toString(36).slice(2);
  function Dr(e) {
    if (!e[Bi]) {
      (e[Bi] = !0),
        s.forEach(function (n) {
          n !== 'selectionchange' && (mh.has(n) || qo(n, !1, e), qo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bi] || ((t[Bi] = !0), qo('selectionchange', !1, t));
    }
  }
  function hc(e, t, n, o) {
    switch (Fu(t)) {
      case 1:
        var l = Om;
        break;
      case 4:
        l = Lm;
        break;
      default:
        l = Ro;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !bo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      o
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Qo(e, t, n, o, l) {
    var c = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var p = o.tag;
        if (p === 3 || p === 4) {
          var v = o.stateNode.containerInfo;
          if (v === l || (v.nodeType === 8 && v.parentNode === l)) break;
          if (p === 4)
            for (p = o.return; p !== null; ) {
              var x = p.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = p.stateNode.containerInfo), x === l || (x.nodeType === 8 && x.parentNode === l))
              )
                return;
              p = p.return;
            }
          for (; v !== null; ) {
            if (((p = yn(v)), p === null)) return;
            if (((x = p.tag), x === 5 || x === 6)) {
              o = c = p;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    Su(function () {
      var N = c,
        A = So(n),
        M = [];
      e: {
        var I = fc.get(e);
        if (I !== void 0) {
          var B = Ao,
            K = e;
          switch (e) {
            case 'keypress':
              if (ji(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              B = Hm;
              break;
            case 'focusin':
              (K = 'focus'), (B = jo);
              break;
            case 'focusout':
              (K = 'blur'), (B = jo);
              break;
            case 'beforeblur':
            case 'afterblur':
              B = jo;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              B = Uu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              B = Im;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              B = Km;
              break;
            case sc:
            case lc:
            case uc:
              B = zm;
              break;
            case cc:
              B = Qm;
              break;
            case 'scroll':
              B = Tm;
              break;
            case 'wheel':
              B = Xm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              B = jm;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              B = Bu;
          }
          var q = (t & 4) !== 0,
            Re = !q && e === 'scroll',
            C = q ? (I !== null ? I + 'Capture' : null) : I;
          q = [];
          for (var k = N, E; k !== null; ) {
            E = k;
            var j = E.stateNode;
            if (
              (E.tag === 5 && j !== null && ((E = j), C !== null && ((j = xr(k, C)), j != null && q.push($r(k, j, E)))),
              Re)
            )
              break;
            k = k.return;
          }
          0 < q.length && ((I = new B(I, K, null, n, A)), M.push({ event: I, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((I = e === 'mouseover' || e === 'pointerover'),
            (B = e === 'mouseout' || e === 'pointerout'),
            I && n !== wo && (K = n.relatedTarget || n.fromElement) && (yn(K) || K[zt]))
          )
            break e;
          if (
            (B || I) &&
            ((I = A.window === A ? A : (I = A.ownerDocument) ? I.defaultView || I.parentWindow : window),
            B
              ? ((K = n.relatedTarget || n.toElement),
                (B = N),
                (K = K ? yn(K) : null),
                K !== null && ((Re = vn(K)), K !== Re || (K.tag !== 5 && K.tag !== 6)) && (K = null))
              : ((B = null), (K = N)),
            B !== K)
          ) {
            if (
              ((q = Uu),
              (j = 'onMouseLeave'),
              (C = 'onMouseEnter'),
              (k = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((q = Bu), (j = 'onPointerLeave'), (C = 'onPointerEnter'), (k = 'pointer')),
              (Re = B == null ? I : qn(B)),
              (E = K == null ? I : qn(K)),
              (I = new q(j, k + 'leave', B, n, A)),
              (I.target = Re),
              (I.relatedTarget = E),
              (j = null),
              yn(A) === N && ((q = new q(C, k + 'enter', K, n, A)), (q.target = E), (q.relatedTarget = Re), (j = q)),
              (Re = j),
              B && K)
            )
              t: {
                for (q = B, C = K, k = 0, E = q; E; E = Yn(E)) k++;
                for (E = 0, j = C; j; j = Yn(j)) E++;
                for (; 0 < k - E; ) (q = Yn(q)), k--;
                for (; 0 < E - k; ) (C = Yn(C)), E--;
                for (; k--; ) {
                  if (q === C || (C !== null && q === C.alternate)) break t;
                  (q = Yn(q)), (C = Yn(C));
                }
                q = null;
              }
            else q = null;
            B !== null && gc(M, I, B, q, !1), K !== null && Re !== null && gc(M, Re, K, q, !0);
          }
        }
        e: {
          if (
            ((I = N ? qn(N) : window),
            (B = I.nodeName && I.nodeName.toLowerCase()),
            B === 'select' || (B === 'input' && I.type === 'file'))
          )
            var Q = ih;
          else if (Qu(I))
            if (Xu) Q = lh;
            else {
              Q = oh;
              var ee = ah;
            }
          else
            (B = I.nodeName) &&
              B.toLowerCase() === 'input' &&
              (I.type === 'checkbox' || I.type === 'radio') &&
              (Q = sh);
          if (Q && (Q = Q(e, N))) {
            Gu(M, Q, n, A);
            break e;
          }
          ee && ee(e, I, N),
            e === 'focusout' &&
              (ee = I._wrapperState) &&
              ee.controlled &&
              I.type === 'number' &&
              mo(I, 'number', I.value);
        }
        switch (((ee = N ? qn(N) : window), e)) {
          case 'focusin':
            (Qu(ee) || ee.contentEditable === 'true') && ((Hn = ee), (Bo = N), (jr = null));
            break;
          case 'focusout':
            jr = Bo = Hn = null;
            break;
          case 'mousedown':
            Ho = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Ho = !1), ac(M, n, A);
            break;
          case 'selectionchange':
            if (fh) break;
          case 'keydown':
          case 'keyup':
            ac(M, n, A);
        }
        var te;
        if (Do)
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
          Bn
            ? Ku(e, n) && (ne = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (ne = 'onCompositionStart');
        ne &&
          (Hu &&
            n.locale !== 'ko' &&
            (Bn || ne !== 'onCompositionStart'
              ? ne === 'onCompositionEnd' && Bn && (te = Du())
              : ((Xt = A), (_o = 'value' in Xt ? Xt.value : Xt.textContent), (Bn = !0))),
          (ee = Hi(N, ne)),
          0 < ee.length &&
            ((ne = new Vu(ne, e, null, n, A)),
            M.push({ event: ne, listeners: ee }),
            te ? (ne.data = te) : ((te = qu(n)), te !== null && (ne.data = te)))),
          (te = Zm ? eh(e, n) : th(e, n)) &&
            ((N = Hi(N, 'onBeforeInput')),
            0 < N.length &&
              ((A = new Vu('onBeforeInput', 'beforeinput', null, n, A)),
              M.push({ event: A, listeners: N }),
              (A.data = te)));
      }
      mc(M, t);
    });
  }
  function $r(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hi(e, t) {
    for (var n = t + 'Capture', o = []; e !== null; ) {
      var l = e,
        c = l.stateNode;
      l.tag === 5 &&
        c !== null &&
        ((l = c),
        (c = xr(e, n)),
        c != null && o.unshift($r(e, c, l)),
        (c = xr(e, t)),
        c != null && o.push($r(e, c, l))),
        (e = e.return);
    }
    return o;
  }
  function Yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gc(e, t, n, o, l) {
    for (var c = t._reactName, p = []; n !== null && n !== o; ) {
      var v = n,
        x = v.alternate,
        N = v.stateNode;
      if (x !== null && x === o) break;
      v.tag === 5 &&
        N !== null &&
        ((v = N),
        l
          ? ((x = xr(n, c)), x != null && p.unshift($r(n, x, v)))
          : l || ((x = xr(n, c)), x != null && p.push($r(n, x, v)))),
        (n = n.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var hh = /\r\n?/g,
    gh = /\u0000|\uFFFD/g;
  function vc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        hh,
        `
`
      )
      .replace(gh, '');
  }
  function Wi(e, t, n) {
    if (((t = vc(t)), vc(e) !== t && n)) throw Error(a(425));
  }
  function Yi() {}
  var Go = null,
    Xo = null;
  function Jo(e, t) {
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
  var Zo = typeof setTimeout == 'function' ? setTimeout : void 0,
    vh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    yc = typeof Promise == 'function' ? Promise : void 0,
    yh =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof yc < 'u'
        ? function (e) {
            return yc.resolve(null).then(e).catch(wh);
          }
        : Zo;
  function wh(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function es(e, t) {
    var n = t,
      o = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (o === 0) {
            e.removeChild(l), Tr(t);
            return;
          }
          o--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || o++;
      n = l;
    } while (n);
    Tr(t);
  }
  function Zt(e) {
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
  function wc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Kn = Math.random().toString(36).slice(2),
    Lt = '__reactFiber$' + Kn,
    Ur = '__reactProps$' + Kn,
    zt = '__reactContainer$' + Kn,
    ts = '__reactEvents$' + Kn,
    Sh = '__reactListeners$' + Kn,
    xh = '__reactHandles$' + Kn;
  function yn(e) {
    var t = e[Lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zt] || n[Lt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = wc(e); e !== null; ) {
            if ((n = e[Lt])) return n;
            e = wc(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Vr(e) {
    return (e = e[Lt] || e[zt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
  }
  function qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Ki(e) {
    return e[Ur] || null;
  }
  var ns = [],
    Qn = -1;
  function en(e) {
    return { current: e };
  }
  function Se(e) {
    0 > Qn || ((e.current = ns[Qn]), (ns[Qn] = null), Qn--);
  }
  function ve(e, t) {
    Qn++, (ns[Qn] = e.current), (e.current = t);
  }
  var tn = {},
    We = en(tn),
    et = en(!1),
    wn = tn;
  function Gn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return tn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      c;
    for (c in n) l[c] = t[c];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function tt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function qi() {
    Se(et), Se(We);
  }
  function Sc(e, t, n) {
    if (We.current !== tn) throw Error(a(168));
    ve(We, t), ve(et, n);
  }
  function xc(e, t, n) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != 'function')) return n;
    o = o.getChildContext();
    for (var l in o) if (!(l in t)) throw Error(a(108, ge(e) || 'Unknown', l));
    return V({}, n, o);
  }
  function Qi(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
      (wn = We.current),
      ve(We, e),
      ve(et, et.current),
      !0
    );
  }
  function kc(e, t, n) {
    var o = e.stateNode;
    if (!o) throw Error(a(169));
    n ? ((e = xc(e, t, wn)), (o.__reactInternalMemoizedMergedChildContext = e), Se(et), Se(We), ve(We, e)) : Se(et),
      ve(et, n);
  }
  var Mt = null,
    Gi = !1,
    rs = !1;
  function bc(e) {
    Mt === null ? (Mt = [e]) : Mt.push(e);
  }
  function kh(e) {
    (Gi = !0), bc(e);
  }
  function nn() {
    if (!rs && Mt !== null) {
      rs = !0;
      var e = 0,
        t = pe;
      try {
        var n = Mt;
        for (pe = 1; e < n.length; e++) {
          var o = n[e];
          do o = o(!0);
          while (o !== null);
        }
        (Mt = null), (Gi = !1);
      } catch (l) {
        throw (Mt !== null && (Mt = Mt.slice(e + 1)), Eu(Eo, nn), l);
      } finally {
        (pe = t), (rs = !1);
      }
    }
    return null;
  }
  var Xn = [],
    Jn = 0,
    Xi = null,
    Ji = 0,
    pt = [],
    mt = 0,
    Sn = null,
    jt = 1,
    Ft = '';
  function xn(e, t) {
    (Xn[Jn++] = Ji), (Xn[Jn++] = Xi), (Xi = e), (Ji = t);
  }
  function Cc(e, t, n) {
    (pt[mt++] = jt), (pt[mt++] = Ft), (pt[mt++] = Sn), (Sn = e);
    var o = jt;
    e = Ft;
    var l = 32 - St(o) - 1;
    (o &= ~(1 << l)), (n += 1);
    var c = 32 - St(t) + l;
    if (30 < c) {
      var p = l - (l % 5);
      (c = (o & ((1 << p) - 1)).toString(32)),
        (o >>= p),
        (l -= p),
        (jt = (1 << (32 - St(t) + l)) | (n << l) | o),
        (Ft = c + e);
    } else (jt = (1 << c) | (n << l) | o), (Ft = e);
  }
  function is(e) {
    e.return !== null && (xn(e, 1), Cc(e, 1, 0));
  }
  function as(e) {
    for (; e === Xi; ) (Xi = Xn[--Jn]), (Xn[Jn] = null), (Ji = Xn[--Jn]), (Xn[Jn] = null);
    for (; e === Sn; )
      (Sn = pt[--mt]), (pt[mt] = null), (Ft = pt[--mt]), (pt[mt] = null), (jt = pt[--mt]), (pt[mt] = null);
  }
  var ut = null,
    ct = null,
    Ce = !1,
    kt = null;
  function Ec(e, t) {
    var n = yt(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Nc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ut = e), (ct = Zt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ut = e), (ct = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Sn !== null ? { id: jt, overflow: Ft } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = yt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ut = e),
              (ct = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function os(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ss(e) {
    if (Ce) {
      var t = ct;
      if (t) {
        var n = t;
        if (!Nc(e, t)) {
          if (os(e)) throw Error(a(418));
          t = Zt(n.nextSibling);
          var o = ut;
          t && Nc(e, t) ? Ec(o, n) : ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (ut = e));
        }
      } else {
        if (os(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (Ce = !1), (ut = e);
      }
    }
  }
  function Pc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function Zi(e) {
    if (e !== ut) return !1;
    if (!Ce) return Pc(e), (Ce = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Jo(e.type, e.memoizedProps))),
      t && (t = ct))
    ) {
      if (os(e)) throw (Oc(), Error(a(418)));
      for (; t; ) Ec(e, t), (t = Zt(t.nextSibling));
    }
    if ((Pc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                ct = Zt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        ct = null;
      }
    } else ct = ut ? Zt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oc() {
    for (var e = ct; e; ) e = Zt(e.nextSibling);
  }
  function Zn() {
    (ct = ut = null), (Ce = !1);
  }
  function ls(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  var bh = $.ReactCurrentBatchConfig;
  function Br(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var o = n.stateNode;
        }
        if (!o) throw Error(a(147, e));
        var l = o,
          c = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === c
          ? t.ref
          : ((t = function (p) {
              var v = l.refs;
              p === null ? delete v[c] : (v[c] = p);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != 'string') throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function ea(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(a(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
  }
  function Lc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Tc(e) {
    function t(C, k) {
      if (e) {
        var E = C.deletions;
        E === null ? ((C.deletions = [k]), (C.flags |= 16)) : E.push(k);
      }
    }
    function n(C, k) {
      if (!e) return null;
      for (; k !== null; ) t(C, k), (k = k.sibling);
      return null;
    }
    function o(C, k) {
      for (C = new Map(); k !== null; ) k.key !== null ? C.set(k.key, k) : C.set(k.index, k), (k = k.sibling);
      return C;
    }
    function l(C, k) {
      return (C = fn(C, k)), (C.index = 0), (C.sibling = null), C;
    }
    function c(C, k, E) {
      return (
        (C.index = E),
        e
          ? ((E = C.alternate), E !== null ? ((E = E.index), E < k ? ((C.flags |= 2), k) : E) : ((C.flags |= 2), k))
          : ((C.flags |= 1048576), k)
      );
    }
    function p(C) {
      return e && C.alternate === null && (C.flags |= 2), C;
    }
    function v(C, k, E, j) {
      return k === null || k.tag !== 6
        ? ((k = Zs(E, C.mode, j)), (k.return = C), k)
        : ((k = l(k, E)), (k.return = C), k);
    }
    function x(C, k, E, j) {
      var Q = E.type;
      return Q === Z
        ? A(C, k, E.props.children, j, E.key)
        : k !== null &&
          (k.elementType === Q || (typeof Q == 'object' && Q !== null && Q.$$typeof === _e && Lc(Q) === k.type))
        ? ((j = l(k, E.props)), (j.ref = Br(C, k, E)), (j.return = C), j)
        : ((j = Ca(E.type, E.key, E.props, null, C.mode, j)), (j.ref = Br(C, k, E)), (j.return = C), j);
    }
    function N(C, k, E, j) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== E.containerInfo ||
        k.stateNode.implementation !== E.implementation
        ? ((k = el(E, C.mode, j)), (k.return = C), k)
        : ((k = l(k, E.children || [])), (k.return = C), k);
    }
    function A(C, k, E, j, Q) {
      return k === null || k.tag !== 7
        ? ((k = Ln(E, C.mode, j, Q)), (k.return = C), k)
        : ((k = l(k, E)), (k.return = C), k);
    }
    function M(C, k, E) {
      if ((typeof k == 'string' && k !== '') || typeof k == 'number')
        return (k = Zs('' + k, C.mode, E)), (k.return = C), k;
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case L:
            return (E = Ca(k.type, k.key, k.props, null, C.mode, E)), (E.ref = Br(C, null, k)), (E.return = C), E;
          case J:
            return (k = el(k, C.mode, E)), (k.return = C), k;
          case _e:
            var j = k._init;
            return M(C, j(k._payload), E);
        }
        if (yr(k) || X(k)) return (k = Ln(k, C.mode, E, null)), (k.return = C), k;
        ea(C, k);
      }
      return null;
    }
    function I(C, k, E, j) {
      var Q = k !== null ? k.key : null;
      if ((typeof E == 'string' && E !== '') || typeof E == 'number') return Q !== null ? null : v(C, k, '' + E, j);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case L:
            return E.key === Q ? x(C, k, E, j) : null;
          case J:
            return E.key === Q ? N(C, k, E, j) : null;
          case _e:
            return (Q = E._init), I(C, k, Q(E._payload), j);
        }
        if (yr(E) || X(E)) return Q !== null ? null : A(C, k, E, j, null);
        ea(C, E);
      }
      return null;
    }
    function B(C, k, E, j, Q) {
      if ((typeof j == 'string' && j !== '') || typeof j == 'number') return (C = C.get(E) || null), v(k, C, '' + j, Q);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case L:
            return (C = C.get(j.key === null ? E : j.key) || null), x(k, C, j, Q);
          case J:
            return (C = C.get(j.key === null ? E : j.key) || null), N(k, C, j, Q);
          case _e:
            var ee = j._init;
            return B(C, k, E, ee(j._payload), Q);
        }
        if (yr(j) || X(j)) return (C = C.get(E) || null), A(k, C, j, Q, null);
        ea(k, j);
      }
      return null;
    }
    function K(C, k, E, j) {
      for (var Q = null, ee = null, te = k, ne = (k = 0), De = null; te !== null && ne < E.length; ne++) {
        te.index > ne ? ((De = te), (te = null)) : (De = te.sibling);
        var ce = I(C, te, E[ne], j);
        if (ce === null) {
          te === null && (te = De);
          break;
        }
        e && te && ce.alternate === null && t(C, te),
          (k = c(ce, k, ne)),
          ee === null ? (Q = ce) : (ee.sibling = ce),
          (ee = ce),
          (te = De);
      }
      if (ne === E.length) return n(C, te), Ce && xn(C, ne), Q;
      if (te === null) {
        for (; ne < E.length; ne++)
          (te = M(C, E[ne], j)),
            te !== null && ((k = c(te, k, ne)), ee === null ? (Q = te) : (ee.sibling = te), (ee = te));
        return Ce && xn(C, ne), Q;
      }
      for (te = o(C, te); ne < E.length; ne++)
        (De = B(te, C, ne, E[ne], j)),
          De !== null &&
            (e && De.alternate !== null && te.delete(De.key === null ? ne : De.key),
            (k = c(De, k, ne)),
            ee === null ? (Q = De) : (ee.sibling = De),
            (ee = De));
      return (
        e &&
          te.forEach(function (dn) {
            return t(C, dn);
          }),
        Ce && xn(C, ne),
        Q
      );
    }
    function q(C, k, E, j) {
      var Q = X(E);
      if (typeof Q != 'function') throw Error(a(150));
      if (((E = Q.call(E)), E == null)) throw Error(a(151));
      for (
        var ee = (Q = null), te = k, ne = (k = 0), De = null, ce = E.next();
        te !== null && !ce.done;
        ne++, ce = E.next()
      ) {
        te.index > ne ? ((De = te), (te = null)) : (De = te.sibling);
        var dn = I(C, te, ce.value, j);
        if (dn === null) {
          te === null && (te = De);
          break;
        }
        e && te && dn.alternate === null && t(C, te),
          (k = c(dn, k, ne)),
          ee === null ? (Q = dn) : (ee.sibling = dn),
          (ee = dn),
          (te = De);
      }
      if (ce.done) return n(C, te), Ce && xn(C, ne), Q;
      if (te === null) {
        for (; !ce.done; ne++, ce = E.next())
          (ce = M(C, ce.value, j)),
            ce !== null && ((k = c(ce, k, ne)), ee === null ? (Q = ce) : (ee.sibling = ce), (ee = ce));
        return Ce && xn(C, ne), Q;
      }
      for (te = o(C, te); !ce.done; ne++, ce = E.next())
        (ce = B(te, C, ne, ce.value, j)),
          ce !== null &&
            (e && ce.alternate !== null && te.delete(ce.key === null ? ne : ce.key),
            (k = c(ce, k, ne)),
            ee === null ? (Q = ce) : (ee.sibling = ce),
            (ee = ce));
      return (
        e &&
          te.forEach(function (ng) {
            return t(C, ng);
          }),
        Ce && xn(C, ne),
        Q
      );
    }
    function Re(C, k, E, j) {
      if (
        (typeof E == 'object' && E !== null && E.type === Z && E.key === null && (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case L:
            e: {
              for (var Q = E.key, ee = k; ee !== null; ) {
                if (ee.key === Q) {
                  if (((Q = E.type), Q === Z)) {
                    if (ee.tag === 7) {
                      n(C, ee.sibling), (k = l(ee, E.props.children)), (k.return = C), (C = k);
                      break e;
                    }
                  } else if (
                    ee.elementType === Q ||
                    (typeof Q == 'object' && Q !== null && Q.$$typeof === _e && Lc(Q) === ee.type)
                  ) {
                    n(C, ee.sibling), (k = l(ee, E.props)), (k.ref = Br(C, ee, E)), (k.return = C), (C = k);
                    break e;
                  }
                  n(C, ee);
                  break;
                } else t(C, ee);
                ee = ee.sibling;
              }
              E.type === Z
                ? ((k = Ln(E.props.children, C.mode, j, E.key)), (k.return = C), (C = k))
                : ((j = Ca(E.type, E.key, E.props, null, C.mode, j)), (j.ref = Br(C, k, E)), (j.return = C), (C = j));
            }
            return p(C);
          case J:
            e: {
              for (ee = E.key; k !== null; ) {
                if (k.key === ee)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === E.containerInfo &&
                    k.stateNode.implementation === E.implementation
                  ) {
                    n(C, k.sibling), (k = l(k, E.children || [])), (k.return = C), (C = k);
                    break e;
                  } else {
                    n(C, k);
                    break;
                  }
                else t(C, k);
                k = k.sibling;
              }
              (k = el(E, C.mode, j)), (k.return = C), (C = k);
            }
            return p(C);
          case _e:
            return (ee = E._init), Re(C, k, ee(E._payload), j);
        }
        if (yr(E)) return K(C, k, E, j);
        if (X(E)) return q(C, k, E, j);
        ea(C, E);
      }
      return (typeof E == 'string' && E !== '') || typeof E == 'number'
        ? ((E = '' + E),
          k !== null && k.tag === 6
            ? (n(C, k.sibling), (k = l(k, E)), (k.return = C), (C = k))
            : (n(C, k), (k = Zs(E, C.mode, j)), (k.return = C), (C = k)),
          p(C))
        : n(C, k);
    }
    return Re;
  }
  var er = Tc(!0),
    Rc = Tc(!1),
    ta = en(null),
    na = null,
    tr = null,
    us = null;
  function cs() {
    us = tr = na = null;
  }
  function fs(e) {
    var t = ta.current;
    Se(ta), (e._currentValue = t);
  }
  function ds(e, t, n) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function nr(e, t) {
    (na = e),
      (us = tr = null),
      (e = e.dependencies),
      e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (nt = !0), (e.firstContext = null));
  }
  function ht(e) {
    var t = e._currentValue;
    if (us !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), tr === null)) {
        if (na === null) throw Error(a(308));
        (tr = e), (na.dependencies = { lanes: 0, firstContext: e });
      } else tr = tr.next = e;
    return t;
  }
  var kn = null;
  function ps(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Ic(e, t, n, o) {
    var l = t.interleaved;
    return l === null ? ((n.next = n), ps(t)) : ((n.next = l.next), (l.next = n)), (t.interleaved = n), Dt(e, o);
  }
  function Dt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var rn = !1;
  function ms(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function _c(e, t) {
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
  function $t(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function an(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (se & 2) !== 0)) {
      var l = o.pending;
      return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (o.pending = t), Dt(e, n);
    }
    return (
      (l = o.interleaved),
      l === null ? ((t.next = t), ps(o)) : ((t.next = l.next), (l.next = t)),
      (o.interleaved = t),
      Dt(e, n)
    );
  }
  function ra(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var o = t.lanes;
      (o &= e.pendingLanes), (n |= o), (t.lanes = n), Oo(e, n);
    }
  }
  function Ac(e, t) {
    var n = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), n === o)) {
      var l = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var p = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          c === null ? (l = c = p) : (c = c.next = p), (n = n.next);
        } while (n !== null);
        c === null ? (l = c = t) : (c = c.next = t);
      } else l = c = t;
      (n = { baseState: o.baseState, firstBaseUpdate: l, lastBaseUpdate: c, shared: o.shared, effects: o.effects }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
  }
  function ia(e, t, n, o) {
    var l = e.updateQueue;
    rn = !1;
    var c = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var x = v,
        N = x.next;
      (x.next = null), p === null ? (c = N) : (p.next = N), (p = x);
      var A = e.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (v = A.lastBaseUpdate),
        v !== p && (v === null ? (A.firstBaseUpdate = N) : (v.next = N), (A.lastBaseUpdate = x)));
    }
    if (c !== null) {
      var M = l.baseState;
      (p = 0), (A = N = x = null), (v = c);
      do {
        var I = v.lane,
          B = v.eventTime;
        if ((o & I) === I) {
          A !== null &&
            (A = A.next = { eventTime: B, lane: 0, tag: v.tag, payload: v.payload, callback: v.callback, next: null });
          e: {
            var K = e,
              q = v;
            switch (((I = t), (B = n), q.tag)) {
              case 1:
                if (((K = q.payload), typeof K == 'function')) {
                  M = K.call(B, M, I);
                  break e;
                }
                M = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (((K = q.payload), (I = typeof K == 'function' ? K.call(B, M, I) : K), I == null)) break e;
                M = V({}, M, I);
                break e;
              case 2:
                rn = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64), (I = l.effects), I === null ? (l.effects = [v]) : I.push(v));
        } else
          (B = { eventTime: B, lane: I, tag: v.tag, payload: v.payload, callback: v.callback, next: null }),
            A === null ? ((N = A = B), (x = M)) : (A = A.next = B),
            (p |= I);
        if (((v = v.next), v === null)) {
          if (((v = l.shared.pending), v === null)) break;
          (I = v), (v = I.next), (I.next = null), (l.lastBaseUpdate = I), (l.shared.pending = null);
        }
      } while (!0);
      if (
        (A === null && (x = M),
        (l.baseState = x),
        (l.firstBaseUpdate = N),
        (l.lastBaseUpdate = A),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (p |= l.lane), (l = l.next);
        while (l !== t);
      } else c === null && (l.shared.lanes = 0);
      (En |= p), (e.lanes = p), (e.memoizedState = M);
    }
  }
  function zc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          l = o.callback;
        if (l !== null) {
          if (((o.callback = null), (o = n), typeof l != 'function')) throw Error(a(191, l));
          l.call(o);
        }
      }
  }
  var Hr = {},
    Tt = en(Hr),
    Wr = en(Hr),
    Yr = en(Hr);
  function bn(e) {
    if (e === Hr) throw Error(a(174));
    return e;
  }
  function hs(e, t) {
    switch ((ve(Yr, t), ve(Wr, e), ve(Tt, Hr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : go(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = go(t, e));
    }
    Se(Tt), ve(Tt, t);
  }
  function rr() {
    Se(Tt), Se(Wr), Se(Yr);
  }
  function Mc(e) {
    bn(Yr.current);
    var t = bn(Tt.current),
      n = go(t, e.type);
    t !== n && (ve(Wr, e), ve(Tt, n));
  }
  function gs(e) {
    Wr.current === e && (Se(Tt), Se(Wr));
  }
  var Ne = en(0);
  function aa(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
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
  var vs = [];
  function ys() {
    for (var e = 0; e < vs.length; e++) vs[e]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var oa = $.ReactCurrentDispatcher,
    ws = $.ReactCurrentBatchConfig,
    Cn = 0,
    Pe = null,
    Ae = null,
    je = null,
    sa = !1,
    Kr = !1,
    qr = 0,
    Ch = 0;
  function Ye() {
    throw Error(a(321));
  }
  function Ss(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!xt(e[n], t[n])) return !1;
    return !0;
  }
  function xs(e, t, n, o, l, c) {
    if (
      ((Cn = c),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (oa.current = e === null || e.memoizedState === null ? Oh : Lh),
      (e = n(o, l)),
      Kr)
    ) {
      c = 0;
      do {
        if (((Kr = !1), (qr = 0), 25 <= c)) throw Error(a(301));
        (c += 1), (je = Ae = null), (t.updateQueue = null), (oa.current = Th), (e = n(o, l));
      } while (Kr);
    }
    if (((oa.current = ca), (t = Ae !== null && Ae.next !== null), (Cn = 0), (je = Ae = Pe = null), (sa = !1), t))
      throw Error(a(300));
    return e;
  }
  function ks() {
    var e = qr !== 0;
    return (qr = 0), e;
  }
  function Rt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? (Pe.memoizedState = je = e) : (je = je.next = e), je;
  }
  function gt() {
    if (Ae === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ae.next;
    var t = je === null ? Pe.memoizedState : je.next;
    if (t !== null) (je = t), (Ae = e);
    else {
      if (e === null) throw Error(a(310));
      (Ae = e),
        (e = {
          memoizedState: Ae.memoizedState,
          baseState: Ae.baseState,
          baseQueue: Ae.baseQueue,
          queue: Ae.queue,
          next: null,
        }),
        je === null ? (Pe.memoizedState = je = e) : (je = je.next = e);
    }
    return je;
  }
  function Qr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function bs(e) {
    var t = gt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var o = Ae,
      l = o.baseQueue,
      c = n.pending;
    if (c !== null) {
      if (l !== null) {
        var p = l.next;
        (l.next = c.next), (c.next = p);
      }
      (o.baseQueue = l = c), (n.pending = null);
    }
    if (l !== null) {
      (c = l.next), (o = o.baseState);
      var v = (p = null),
        x = null,
        N = c;
      do {
        var A = N.lane;
        if ((Cn & A) === A)
          x !== null &&
            (x = x.next =
              { lane: 0, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null }),
            (o = N.hasEagerState ? N.eagerState : e(o, N.action));
        else {
          var M = { lane: A, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null };
          x === null ? ((v = x = M), (p = o)) : (x = x.next = M), (Pe.lanes |= A), (En |= A);
        }
        N = N.next;
      } while (N !== null && N !== c);
      x === null ? (p = o) : (x.next = v),
        xt(o, t.memoizedState) || (nt = !0),
        (t.memoizedState = o),
        (t.baseState = p),
        (t.baseQueue = x),
        (n.lastRenderedState = o);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (c = l.lane), (Pe.lanes |= c), (En |= c), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Cs(e) {
    var t = gt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch,
      l = n.pending,
      c = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var p = (l = l.next);
      do (c = e(c, p.action)), (p = p.next);
      while (p !== l);
      xt(c, t.memoizedState) || (nt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (n.lastRenderedState = c);
    }
    return [c, o];
  }
  function jc() {}
  function Fc(e, t) {
    var n = Pe,
      o = gt(),
      l = t(),
      c = !xt(o.memoizedState, l);
    if (
      (c && ((o.memoizedState = l), (nt = !0)),
      (o = o.queue),
      Es(Uc.bind(null, n, o, e), [e]),
      o.getSnapshot !== t || c || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Gr(9, $c.bind(null, n, o, l, t), void 0, null), Fe === null)) throw Error(a(349));
      (Cn & 30) !== 0 || Dc(n, t, l);
    }
    return l;
  }
  function Dc(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function $c(e, t, n, o) {
    (t.value = n), (t.getSnapshot = o), Vc(t) && Bc(e);
  }
  function Uc(e, t, n) {
    return n(function () {
      Vc(t) && Bc(e);
    });
  }
  function Vc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !xt(e, n);
    } catch {
      return !0;
    }
  }
  function Bc(e) {
    var t = Dt(e, 1);
    t !== null && Nt(t, e, 1, -1);
  }
  function Hc(e) {
    var t = Rt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ph.bind(null, Pe, e)),
      [t.memoizedState, e]
    );
  }
  function Gr(e, t, n, o) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: o, next: null }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Pe.updateQueue = t), (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null ? (t.lastEffect = e.next = e) : ((o = n.next), (n.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function Wc() {
    return gt().memoizedState;
  }
  function la(e, t, n, o) {
    var l = Rt();
    (Pe.flags |= e), (l.memoizedState = Gr(1 | t, n, void 0, o === void 0 ? null : o));
  }
  function ua(e, t, n, o) {
    var l = gt();
    o = o === void 0 ? null : o;
    var c = void 0;
    if (Ae !== null) {
      var p = Ae.memoizedState;
      if (((c = p.destroy), o !== null && Ss(o, p.deps))) {
        l.memoizedState = Gr(t, n, c, o);
        return;
      }
    }
    (Pe.flags |= e), (l.memoizedState = Gr(1 | t, n, c, o));
  }
  function Yc(e, t) {
    return la(8390656, 8, e, t);
  }
  function Es(e, t) {
    return ua(2048, 8, e, t);
  }
  function Kc(e, t) {
    return ua(4, 2, e, t);
  }
  function qc(e, t) {
    return ua(4, 4, e, t);
  }
  function Qc(e, t) {
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
  function Gc(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), ua(4, 4, Qc.bind(null, t, e), n);
  }
  function Ns() {}
  function Xc(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Ss(t, o[1]) ? o[0] : ((n.memoizedState = [e, t]), e);
  }
  function Jc(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Ss(t, o[1]) ? o[0] : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Zc(e, t, n) {
    return (Cn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = n))
      : (xt(n, t) || ((n = Lu()), (Pe.lanes |= n), (En |= n), (e.baseState = !0)), t);
  }
  function Eh(e, t) {
    var n = pe;
    (pe = n !== 0 && 4 > n ? n : 4), e(!0);
    var o = ws.transition;
    ws.transition = {};
    try {
      e(!1), t();
    } finally {
      (pe = n), (ws.transition = o);
    }
  }
  function ef() {
    return gt().memoizedState;
  }
  function Nh(e, t, n) {
    var o = un(e);
    if (((n = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null }), tf(e))) nf(t, n);
    else if (((n = Ic(e, t, n, o)), n !== null)) {
      var l = Je();
      Nt(n, e, o, l), rf(n, t, o);
    }
  }
  function Ph(e, t, n) {
    var o = un(e),
      l = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (tf(e)) nf(t, l);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && ((c = t.lastRenderedReducer), c !== null))
        try {
          var p = t.lastRenderedState,
            v = c(p, n);
          if (((l.hasEagerState = !0), (l.eagerState = v), xt(v, p))) {
            var x = t.interleaved;
            x === null ? ((l.next = l), ps(t)) : ((l.next = x.next), (x.next = l)), (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ic(e, t, l, o)), n !== null && ((l = Je()), Nt(n, e, o, l), rf(n, t, o));
    }
  }
  function tf(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function nf(e, t) {
    Kr = sa = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function rf(e, t, n) {
    if ((n & 4194240) !== 0) {
      var o = t.lanes;
      (o &= e.pendingLanes), (n |= o), (t.lanes = n), Oo(e, n);
    }
  }
  var ca = {
      readContext: ht,
      useCallback: Ye,
      useContext: Ye,
      useEffect: Ye,
      useImperativeHandle: Ye,
      useInsertionEffect: Ye,
      useLayoutEffect: Ye,
      useMemo: Ye,
      useReducer: Ye,
      useRef: Ye,
      useState: Ye,
      useDebugValue: Ye,
      useDeferredValue: Ye,
      useTransition: Ye,
      useMutableSource: Ye,
      useSyncExternalStore: Ye,
      useId: Ye,
      unstable_isNewReconciler: !1,
    },
    Oh = {
      readContext: ht,
      useCallback: function (e, t) {
        return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ht,
      useEffect: Yc,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), la(4194308, 4, Qc.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return la(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return la(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Rt();
        return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
        var o = Rt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = Nh.bind(null, Pe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Rt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Hc,
      useDebugValue: Ns,
      useDeferredValue: function (e) {
        return (Rt().memoizedState = e);
      },
      useTransition: function () {
        var e = Hc(!1),
          t = e[0];
        return (e = Eh.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var o = Pe,
          l = Rt();
        if (Ce) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), Fe === null)) throw Error(a(349));
          (Cn & 30) !== 0 || Dc(o, t, n);
        }
        l.memoizedState = n;
        var c = { value: n, getSnapshot: t };
        return (
          (l.queue = c),
          Yc(Uc.bind(null, o, c, e), [e]),
          (o.flags |= 2048),
          Gr(9, $c.bind(null, o, c, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Rt(),
          t = Fe.identifierPrefix;
        if (Ce) {
          var n = Ft,
            o = jt;
          (n = (o & ~(1 << (32 - St(o) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = qr++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = Ch++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Lh = {
      readContext: ht,
      useCallback: Xc,
      useContext: ht,
      useEffect: Es,
      useImperativeHandle: Gc,
      useInsertionEffect: Kc,
      useLayoutEffect: qc,
      useMemo: Jc,
      useReducer: bs,
      useRef: Wc,
      useState: function () {
        return bs(Qr);
      },
      useDebugValue: Ns,
      useDeferredValue: function (e) {
        var t = gt();
        return Zc(t, Ae.memoizedState, e);
      },
      useTransition: function () {
        var e = bs(Qr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: jc,
      useSyncExternalStore: Fc,
      useId: ef,
      unstable_isNewReconciler: !1,
    },
    Th = {
      readContext: ht,
      useCallback: Xc,
      useContext: ht,
      useEffect: Es,
      useImperativeHandle: Gc,
      useInsertionEffect: Kc,
      useLayoutEffect: qc,
      useMemo: Jc,
      useReducer: Cs,
      useRef: Wc,
      useState: function () {
        return Cs(Qr);
      },
      useDebugValue: Ns,
      useDeferredValue: function (e) {
        var t = gt();
        return Ae === null ? (t.memoizedState = e) : Zc(t, Ae.memoizedState, e);
      },
      useTransition: function () {
        var e = Cs(Qr)[0],
          t = gt().memoizedState;
        return [e, t];
      },
      useMutableSource: jc,
      useSyncExternalStore: Fc,
      useId: ef,
      unstable_isNewReconciler: !1,
    };
  function bt(e, t) {
    if (e && e.defaultProps) {
      (t = V({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ps(e, t, n, o) {
    (t = e.memoizedState),
      (n = n(o, t)),
      (n = n == null ? t : V({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var fa = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? vn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var o = Je(),
        l = un(e),
        c = $t(o, l);
      (c.payload = t), n != null && (c.callback = n), (t = an(e, c, l)), t !== null && (Nt(t, e, l, o), ra(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var o = Je(),
        l = un(e),
        c = $t(o, l);
      (c.tag = 1),
        (c.payload = t),
        n != null && (c.callback = n),
        (t = an(e, c, l)),
        t !== null && (Nt(t, e, l, o), ra(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Je(),
        o = un(e),
        l = $t(n, o);
      (l.tag = 2), t != null && (l.callback = t), (t = an(e, l, o)), t !== null && (Nt(t, e, o, n), ra(t, e, o));
    },
  };
  function af(e, t, n, o, l, c, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, c, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Mr(n, o) || !Mr(l, c)
        : !0
    );
  }
  function of(e, t, n) {
    var o = !1,
      l = tn,
      c = t.contextType;
    return (
      typeof c == 'object' && c !== null
        ? (c = ht(c))
        : ((l = tt(t) ? wn : We.current), (o = t.contextTypes), (c = (o = o != null) ? Gn(e, l) : tn)),
      (t = new t(n, c)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = fa),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function sf(e, t, n, o) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, o),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, o),
      t.state !== e && fa.enqueueReplaceState(t, t.state, null);
  }
  function Os(e, t, n, o) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ms(e);
    var c = t.contextType;
    typeof c == 'object' && c !== null ? (l.context = ht(c)) : ((c = tt(t) ? wn : We.current), (l.context = Gn(e, c))),
      (l.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == 'function' && (Ps(e, t, c, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && fa.enqueueReplaceState(l, l.state, null),
        ia(e, n, l, o),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function ir(e, t) {
    try {
      var n = '',
        o = t;
      do (n += le(o)), (o = o.return);
      while (o);
      var l = n;
    } catch (c) {
      l =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ls(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ts(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Rh = typeof WeakMap == 'function' ? WeakMap : Map;
  function lf(e, t, n) {
    (n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var o = t.value;
    return (
      (n.callback = function () {
        ya || ((ya = !0), (Ws = o)), Ts(e, t);
      }),
      n
    );
  }
  function uf(e, t, n) {
    (n = $t(-1, n)), (n.tag = 3);
    var o = e.type.getDerivedStateFromError;
    if (typeof o == 'function') {
      var l = t.value;
      (n.payload = function () {
        return o(l);
      }),
        (n.callback = function () {
          Ts(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == 'function' &&
        (n.callback = function () {
          Ts(e, t), typeof o != 'function' && (sn === null ? (sn = new Set([this])) : sn.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, { componentStack: p !== null ? p : '' });
        }),
      n
    );
  }
  function cf(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Rh();
      var l = new Set();
      o.set(t, l);
    } else (l = o.get(t)), l === void 0 && ((l = new Set()), o.set(t, l));
    l.has(n) || (l.add(n), (e = Wh.bind(null, e, t, n)), t.then(e, e));
  }
  function ff(e) {
    do {
      var t;
      if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function df(e, t, n, o, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = $t(-1, 1)), (t.tag = 2), an(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ih = $.ReactCurrentOwner,
    nt = !1;
  function Xe(e, t, n, o) {
    t.child = e === null ? Rc(t, null, n, o) : er(t, e.child, n, o);
  }
  function pf(e, t, n, o, l) {
    n = n.render;
    var c = t.ref;
    return (
      nr(t, l),
      (o = xs(e, t, n, o, c, l)),
      (n = ks()),
      e !== null && !nt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ut(e, t, l))
        : (Ce && n && is(t), (t.flags |= 1), Xe(e, t, o, l), t.child)
    );
  }
  function mf(e, t, n, o, l) {
    if (e === null) {
      var c = n.type;
      return typeof c == 'function' &&
        !Js(c) &&
        c.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), hf(e, t, c, o, l))
        : ((e = Ca(n.type, null, o, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((c = e.child), (e.lanes & l) === 0)) {
      var p = c.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Mr), n(p, o) && e.ref === t.ref)) return Ut(e, t, l);
    }
    return (t.flags |= 1), (e = fn(c, o)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function hf(e, t, n, o, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Mr(c, o) && e.ref === t.ref)
        if (((nt = !1), (t.pendingProps = o = c), (e.lanes & l) !== 0)) (e.flags & 131072) !== 0 && (nt = !0);
        else return (t.lanes = e.lanes), Ut(e, t, l);
    }
    return Rs(e, t, n, o, l);
  }
  function gf(e, t, n) {
    var o = t.pendingProps,
      l = o.children,
      c = e !== null ? e.memoizedState : null;
    if (o.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ve(or, ft), (ft |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ve(or, ft),
            (ft |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = c !== null ? c.baseLanes : n),
          ve(or, ft),
          (ft |= o);
      }
    else c !== null ? ((o = c.baseLanes | n), (t.memoizedState = null)) : (o = n), ve(or, ft), (ft |= o);
    return Xe(e, t, l, n), t.child;
  }
  function vf(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Rs(e, t, n, o, l) {
    var c = tt(n) ? wn : We.current;
    return (
      (c = Gn(t, c)),
      nr(t, l),
      (n = xs(e, t, n, o, c, l)),
      (o = ks()),
      e !== null && !nt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ut(e, t, l))
        : (Ce && o && is(t), (t.flags |= 1), Xe(e, t, n, l), t.child)
    );
  }
  function yf(e, t, n, o, l) {
    if (tt(n)) {
      var c = !0;
      Qi(t);
    } else c = !1;
    if ((nr(t, l), t.stateNode === null)) pa(e, t), of(t, n, o), Os(t, n, o, l), (o = !0);
    else if (e === null) {
      var p = t.stateNode,
        v = t.memoizedProps;
      p.props = v;
      var x = p.context,
        N = n.contextType;
      typeof N == 'object' && N !== null ? (N = ht(N)) : ((N = tt(n) ? wn : We.current), (N = Gn(t, N)));
      var A = n.getDerivedStateFromProps,
        M = typeof A == 'function' || typeof p.getSnapshotBeforeUpdate == 'function';
      M ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' && typeof p.componentWillReceiveProps != 'function') ||
        ((v !== o || x !== N) && sf(t, p, o, N)),
        (rn = !1);
      var I = t.memoizedState;
      (p.state = I),
        ia(t, o, p, l),
        (x = t.memoizedState),
        v !== o || I !== x || et.current || rn
          ? (typeof A == 'function' && (Ps(t, n, A, o), (x = t.memoizedState)),
            (v = rn || af(t, n, v, o, I, x, N))
              ? (M ||
                  (typeof p.UNSAFE_componentWillMount != 'function' && typeof p.componentWillMount != 'function') ||
                  (typeof p.componentWillMount == 'function' && p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == 'function' && p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof p.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = x)),
            (p.props = o),
            (p.state = x),
            (p.context = N),
            (o = v))
          : (typeof p.componentDidMount == 'function' && (t.flags |= 4194308), (o = !1));
    } else {
      (p = t.stateNode),
        _c(e, t),
        (v = t.memoizedProps),
        (N = t.type === t.elementType ? v : bt(t.type, v)),
        (p.props = N),
        (M = t.pendingProps),
        (I = p.context),
        (x = n.contextType),
        typeof x == 'object' && x !== null ? (x = ht(x)) : ((x = tt(n) ? wn : We.current), (x = Gn(t, x)));
      var B = n.getDerivedStateFromProps;
      (A = typeof B == 'function' || typeof p.getSnapshotBeforeUpdate == 'function') ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' && typeof p.componentWillReceiveProps != 'function') ||
        ((v !== M || I !== x) && sf(t, p, o, x)),
        (rn = !1),
        (I = t.memoizedState),
        (p.state = I),
        ia(t, o, p, l);
      var K = t.memoizedState;
      v !== M || I !== K || et.current || rn
        ? (typeof B == 'function' && (Ps(t, n, B, o), (K = t.memoizedState)),
          (N = rn || af(t, n, N, o, I, K, x) || !1)
            ? (A ||
                (typeof p.UNSAFE_componentWillUpdate != 'function' && typeof p.componentWillUpdate != 'function') ||
                (typeof p.componentWillUpdate == 'function' && p.componentWillUpdate(o, K, x),
                typeof p.UNSAFE_componentWillUpdate == 'function' && p.UNSAFE_componentWillUpdate(o, K, x)),
              typeof p.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof p.componentDidUpdate != 'function' ||
                (v === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != 'function' ||
                (v === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = K)),
          (p.props = o),
          (p.state = K),
          (p.context = x),
          (o = N))
        : (typeof p.componentDidUpdate != 'function' ||
            (v === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != 'function' ||
            (v === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Is(e, t, n, o, c, l);
  }
  function Is(e, t, n, o, l, c) {
    vf(e, t);
    var p = (t.flags & 128) !== 0;
    if (!o && !p) return l && kc(t, n, !1), Ut(e, t, c);
    (o = t.stateNode), (Ih.current = t);
    var v = p && typeof n.getDerivedStateFromError != 'function' ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && p ? ((t.child = er(t, e.child, null, c)), (t.child = er(t, null, v, c))) : Xe(e, t, v, c),
      (t.memoizedState = o.state),
      l && kc(t, n, !0),
      t.child
    );
  }
  function wf(e) {
    var t = e.stateNode;
    t.pendingContext ? Sc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sc(e, t.context, !1),
      hs(e, t.containerInfo);
  }
  function Sf(e, t, n, o, l) {
    return Zn(), ls(l), (t.flags |= 256), Xe(e, t, n, o), t.child;
  }
  var _s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function As(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xf(e, t, n) {
    var o = t.pendingProps,
      l = Ne.current,
      c = !1,
      p = (t.flags & 128) !== 0,
      v;
    if (
      ((v = p) || (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      v ? ((c = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ve(Ne, l & 1),
      e === null)
    )
      return (
        ss(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0 ? (t.lanes = 1) : e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824), null)
          : ((p = o.children),
            (e = o.fallback),
            c
              ? ((o = t.mode),
                (c = t.child),
                (p = { mode: 'hidden', children: p }),
                (o & 1) === 0 && c !== null ? ((c.childLanes = 0), (c.pendingProps = p)) : (c = Ea(p, o, 0, null)),
                (e = Ln(e, o, n, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = As(n)),
                (t.memoizedState = _s),
                e)
              : zs(t, p))
      );
    if (((l = e.memoizedState), l !== null && ((v = l.dehydrated), v !== null))) return _h(e, t, p, o, v, l, n);
    if (c) {
      (c = o.fallback), (p = t.mode), (l = e.child), (v = l.sibling);
      var x = { mode: 'hidden', children: o.children };
      return (
        (p & 1) === 0 && t.child !== l
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = x), (t.deletions = null))
          : ((o = fn(l, x)), (o.subtreeFlags = l.subtreeFlags & 14680064)),
        v !== null ? (c = fn(v, c)) : ((c = Ln(c, p, n, null)), (c.flags |= 2)),
        (c.return = t),
        (o.return = t),
        (o.sibling = c),
        (t.child = o),
        (o = c),
        (c = t.child),
        (p = e.child.memoizedState),
        (p = p === null ? As(n) : { baseLanes: p.baseLanes | n, cachePool: null, transitions: p.transitions }),
        (c.memoizedState = p),
        (c.childLanes = e.childLanes & ~n),
        (t.memoizedState = _s),
        o
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (o = fn(c, { mode: 'visible', children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = n),
      (o.return = t),
      (o.sibling = null),
      e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function zs(e, t) {
    return (t = Ea({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
  }
  function da(e, t, n, o) {
    return (
      o !== null && ls(o),
      er(t, e.child, null, n),
      (e = zs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function _h(e, t, n, o, l, c, p) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (o = Ls(Error(a(422)))), da(e, t, p, o))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = o.fallback),
          (l = t.mode),
          (o = Ea({ mode: 'visible', children: o.children }, l, 0, null)),
          (c = Ln(c, l, p, null)),
          (c.flags |= 2),
          (o.return = t),
          (c.return = t),
          (o.sibling = c),
          (t.child = o),
          (t.mode & 1) !== 0 && er(t, e.child, null, p),
          (t.child.memoizedState = As(p)),
          (t.memoizedState = _s),
          c);
    if ((t.mode & 1) === 0) return da(e, t, p, null);
    if (l.data === '$!') {
      if (((o = l.nextSibling && l.nextSibling.dataset), o)) var v = o.dgst;
      return (o = v), (c = Error(a(419))), (o = Ls(c, o, void 0)), da(e, t, p, o);
    }
    if (((v = (p & e.childLanes) !== 0), nt || v)) {
      if (((o = Fe), o !== null)) {
        switch (p & -p) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (o.suspendedLanes | p)) !== 0 ? 0 : l),
          l !== 0 && l !== c.retryLane && ((c.retryLane = l), Dt(e, l), Nt(o, e, l, -1));
      }
      return Xs(), (o = Ls(Error(a(421)))), da(e, t, p, o);
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Yh.bind(null, e)), (l._reactRetry = t), null)
      : ((e = c.treeContext),
        (ct = Zt(l.nextSibling)),
        (ut = t),
        (Ce = !0),
        (kt = null),
        e !== null && ((pt[mt++] = jt), (pt[mt++] = Ft), (pt[mt++] = Sn), (jt = e.id), (Ft = e.overflow), (Sn = t)),
        (t = zs(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function kf(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), ds(e.return, t, n);
  }
  function Ms(e, t, n, o, l) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: n, tailMode: l })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = o),
        (c.tail = n),
        (c.tailMode = l));
  }
  function bf(e, t, n) {
    var o = t.pendingProps,
      l = o.revealOrder,
      c = o.tail;
    if ((Xe(e, t, o.children, n), (o = Ne.current), (o & 2) !== 0)) (o = (o & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && kf(e, n, t);
          else if (e.tag === 19) kf(e, n, t);
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
      o &= 1;
    }
    if ((ve(Ne, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate), e !== null && aa(e) === null && (l = n), (n = n.sibling);
          (n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            Ms(t, !1, l, n, c);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && aa(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Ms(t, !0, n, null, c);
          break;
        case 'together':
          Ms(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function pa(e, t) {
    (t.mode & 1) === 0 && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ut(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (En |= t.lanes), (n & t.childLanes) === 0)) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Ah(e, t, n) {
    switch (t.tag) {
      case 3:
        wf(t), Zn();
        break;
      case 5:
        Mc(t);
        break;
      case 1:
        tt(t.type) && Qi(t);
        break;
      case 4:
        hs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          l = t.memoizedProps.value;
        ve(ta, o._currentValue), (o._currentValue = l);
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (ve(Ne, Ne.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? xf(e, t, n)
            : (ve(Ne, Ne.current & 1), (e = Ut(e, t, n)), e !== null ? e.sibling : null);
        ve(Ne, Ne.current & 1);
        break;
      case 19:
        if (((o = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return bf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ve(Ne, Ne.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), gf(e, t, n);
    }
    return Ut(e, t, n);
  }
  var Cf, js, Ef, Nf;
  (Cf = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (js = function () {}),
    (Ef = function (e, t, n, o) {
      var l = e.memoizedProps;
      if (l !== o) {
        (e = t.stateNode), bn(Tt.current);
        var c = null;
        switch (n) {
          case 'input':
            (l = fo(e, l)), (o = fo(e, o)), (c = []);
            break;
          case 'select':
            (l = V({}, l, { value: void 0 })), (o = V({}, o, { value: void 0 })), (c = []);
            break;
          case 'textarea':
            (l = ho(e, l)), (o = ho(e, o)), (c = []);
            break;
          default:
            typeof l.onClick != 'function' && typeof o.onClick == 'function' && (e.onclick = Yi);
        }
        vo(n, o);
        var p;
        n = null;
        for (N in l)
          if (!o.hasOwnProperty(N) && l.hasOwnProperty(N) && l[N] != null)
            if (N === 'style') {
              var v = l[N];
              for (p in v) v.hasOwnProperty(p) && (n || (n = {}), (n[p] = ''));
            } else
              N !== 'dangerouslySetInnerHTML' &&
                N !== 'children' &&
                N !== 'suppressContentEditableWarning' &&
                N !== 'suppressHydrationWarning' &&
                N !== 'autoFocus' &&
                (u.hasOwnProperty(N) ? c || (c = []) : (c = c || []).push(N, null));
        for (N in o) {
          var x = o[N];
          if (((v = l?.[N]), o.hasOwnProperty(N) && x !== v && (x != null || v != null)))
            if (N === 'style')
              if (v) {
                for (p in v) !v.hasOwnProperty(p) || (x && x.hasOwnProperty(p)) || (n || (n = {}), (n[p] = ''));
                for (p in x) x.hasOwnProperty(p) && v[p] !== x[p] && (n || (n = {}), (n[p] = x[p]));
              } else n || (c || (c = []), c.push(N, n)), (n = x);
            else
              N === 'dangerouslySetInnerHTML'
                ? ((x = x ? x.__html : void 0),
                  (v = v ? v.__html : void 0),
                  x != null && v !== x && (c = c || []).push(N, x))
                : N === 'children'
                ? (typeof x != 'string' && typeof x != 'number') || (c = c || []).push(N, '' + x)
                : N !== 'suppressContentEditableWarning' &&
                  N !== 'suppressHydrationWarning' &&
                  (u.hasOwnProperty(N)
                    ? (x != null && N === 'onScroll' && we('scroll', e), c || v === x || (c = []))
                    : (c = c || []).push(N, x));
        }
        n && (c = c || []).push('style', n);
        var N = c;
        (t.updateQueue = N) && (t.flags |= 4);
      }
    }),
    (Nf = function (e, t, n, o) {
      n !== o && (t.flags |= 4);
    });
  function Xr(e, t) {
    if (!Ce)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var o = null; n !== null; ) n.alternate !== null && (o = n), (n = n.sibling);
          o === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (o.sibling = null);
      }
  }
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      o = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (o |= l.subtreeFlags & 14680064),
          (o |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes), (o |= l.subtreeFlags), (o |= l.flags), (l.return = e), (l = l.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = n), t;
  }
  function zh(e, t, n) {
    var o = t.pendingProps;
    switch ((as(t), t.tag)) {
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
        return Ke(t), null;
      case 1:
        return tt(t.type) && qi(), Ke(t), null;
      case 3:
        return (
          (o = t.stateNode),
          rr(),
          Se(et),
          Se(We),
          ys(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), kt !== null && (qs(kt), (kt = null)))),
          js(e, t),
          Ke(t),
          null
        );
      case 5:
        gs(t);
        var l = bn(Yr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Ef(e, t, n, o, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(a(166));
            return Ke(t), null;
          }
          if (((e = bn(Tt.current)), Zi(t))) {
            (o = t.stateNode), (n = t.type);
            var c = t.memoizedProps;
            switch (((o[Lt] = t), (o[Ur] = c), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                we('cancel', o), we('close', o);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                we('load', o);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Fr.length; l++) we(Fr[l], o);
                break;
              case 'source':
                we('error', o);
                break;
              case 'img':
              case 'image':
              case 'link':
                we('error', o), we('load', o);
                break;
              case 'details':
                we('toggle', o);
                break;
              case 'input':
                au(o, c), we('invalid', o);
                break;
              case 'select':
                (o._wrapperState = { wasMultiple: !!c.multiple }), we('invalid', o);
                break;
              case 'textarea':
                lu(o, c), we('invalid', o);
            }
            vo(n, c), (l = null);
            for (var p in c)
              if (c.hasOwnProperty(p)) {
                var v = c[p];
                p === 'children'
                  ? typeof v == 'string'
                    ? o.textContent !== v &&
                      (c.suppressHydrationWarning !== !0 && Wi(o.textContent, v, e), (l = ['children', v]))
                    : typeof v == 'number' &&
                      o.textContent !== '' + v &&
                      (c.suppressHydrationWarning !== !0 && Wi(o.textContent, v, e), (l = ['children', '' + v]))
                  : u.hasOwnProperty(p) && v != null && p === 'onScroll' && we('scroll', o);
              }
            switch (n) {
              case 'input':
                ki(o), su(o, c, !0);
                break;
              case 'textarea':
                ki(o), cu(o);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof c.onClick == 'function' && (o.onclick = Yi);
            }
            (o = l), (t.updateQueue = o), o !== null && (t.flags |= 4);
          } else {
            (p = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = fu(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = p.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == 'string'
                  ? (e = p.createElement(n, { is: o.is }))
                  : ((e = p.createElement(n)),
                    n === 'select' && ((p = e), o.multiple ? (p.multiple = !0) : o.size && (p.size = o.size)))
                : (e = p.createElementNS(e, n)),
              (e[Lt] = t),
              (e[Ur] = o),
              Cf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = yo(n, o)), n)) {
                case 'dialog':
                  we('cancel', e), we('close', e), (l = o);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  we('load', e), (l = o);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < Fr.length; l++) we(Fr[l], e);
                  l = o;
                  break;
                case 'source':
                  we('error', e), (l = o);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  we('error', e), we('load', e), (l = o);
                  break;
                case 'details':
                  we('toggle', e), (l = o);
                  break;
                case 'input':
                  au(e, o), (l = fo(e, o)), we('invalid', e);
                  break;
                case 'option':
                  l = o;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!o.multiple }),
                    (l = V({}, o, { value: void 0 })),
                    we('invalid', e);
                  break;
                case 'textarea':
                  lu(e, o), (l = ho(e, o)), we('invalid', e);
                  break;
                default:
                  l = o;
              }
              vo(n, l), (v = l);
              for (c in v)
                if (v.hasOwnProperty(c)) {
                  var x = v[c];
                  c === 'style'
                    ? mu(e, x)
                    : c === 'dangerouslySetInnerHTML'
                    ? ((x = x ? x.__html : void 0), x != null && du(e, x))
                    : c === 'children'
                    ? typeof x == 'string'
                      ? (n !== 'textarea' || x !== '') && wr(e, x)
                      : typeof x == 'number' && wr(e, '' + x)
                    : c !== 'suppressContentEditableWarning' &&
                      c !== 'suppressHydrationWarning' &&
                      c !== 'autoFocus' &&
                      (u.hasOwnProperty(c)
                        ? x != null && c === 'onScroll' && we('scroll', e)
                        : x != null && U(e, c, x, p));
                }
              switch (n) {
                case 'input':
                  ki(e), su(e, o, !1);
                  break;
                case 'textarea':
                  ki(e), cu(e);
                  break;
                case 'option':
                  o.value != null && e.setAttribute('value', '' + de(o.value));
                  break;
                case 'select':
                  (e.multiple = !!o.multiple),
                    (c = o.value),
                    c != null
                      ? Fn(e, !!o.multiple, c, !1)
                      : o.defaultValue != null && Fn(e, !!o.multiple, o.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Yi);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  o = !!o.autoFocus;
                  break e;
                case 'img':
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ke(t), null;
      case 6:
        if (e && t.stateNode != null) Nf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != 'string' && t.stateNode === null) throw Error(a(166));
          if (((n = bn(Yr.current)), bn(Tt.current), Zi(t))) {
            if (
              ((o = t.stateNode), (n = t.memoizedProps), (o[Lt] = t), (c = o.nodeValue !== n) && ((e = ut), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Wi(o.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Wi(o.nodeValue, n, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else (o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o)), (o[Lt] = t), (t.stateNode = o);
        }
        return Ke(t), null;
      case 13:
        if (
          (Se(Ne),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ce && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Oc(), Zn(), (t.flags |= 98560), (c = !1);
          else if (((c = Zi(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(a(318));
              if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c)) throw Error(a(317));
              c[Lt] = t;
            } else Zn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Ke(t), (c = !1);
          } else kt !== null && (qs(kt), (kt = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 && (e === null || (Ne.current & 1) !== 0 ? ze === 0 && (ze = 3) : Xs())),
            t.updateQueue !== null && (t.flags |= 4),
            Ke(t),
            null);
      case 4:
        return rr(), js(e, t), e === null && Dr(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return fs(t.type._context), Ke(t), null;
      case 17:
        return tt(t.type) && qi(), Ke(t), null;
      case 19:
        if ((Se(Ne), (c = t.memoizedState), c === null)) return Ke(t), null;
        if (((o = (t.flags & 128) !== 0), (p = c.rendering), p === null))
          if (o) Xr(c, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((p = aa(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      Xr(c, !1),
                      o = p.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = n,
                      n = t.child;
                    n !== null;

                  )
                    (c = n),
                      (e = o),
                      (c.flags &= 14680066),
                      (p = c.alternate),
                      p === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = p.childLanes),
                          (c.lanes = p.lanes),
                          (c.child = p.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = p.memoizedProps),
                          (c.memoizedState = p.memoizedState),
                          (c.updateQueue = p.updateQueue),
                          (c.type = p.type),
                          (e = p.dependencies),
                          (c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling);
                  return ve(Ne, (Ne.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null && Te() > sr && ((t.flags |= 128), (o = !0), Xr(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = aa(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Xr(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !p.alternate && !Ce)
              )
                return Ke(t), null;
            } else
              2 * Te() - c.renderingStartTime > sr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Xr(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((n = c.last), n !== null ? (n.sibling = p) : (t.child = p), (c.last = p));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Te()),
            (t.sibling = null),
            (n = Ne.current),
            ve(Ne, o ? (n & 1) | 2 : n & 1),
            t)
          : (Ke(t), null);
      case 22:
      case 23:
        return (
          Gs(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0 ? (ft & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Mh(e, t) {
    switch ((as(t), t.tag)) {
      case 1:
        return tt(t.type) && qi(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          rr(),
          Se(et),
          Se(We),
          ys(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return gs(t), null;
      case 13:
        if ((Se(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(a(340));
          Zn();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return Se(Ne), null;
      case 4:
        return rr(), null;
      case 10:
        return fs(t.type._context), null;
      case 22:
      case 23:
        return Gs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ma = !1,
    qe = !1,
    jh = typeof WeakSet == 'function' ? WeakSet : Set,
    W = null;
  function ar(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (o) {
          Oe(e, t, o);
        }
      else n.current = null;
  }
  function Fs(e, t, n) {
    try {
      n();
    } catch (o) {
      Oe(e, t, o);
    }
  }
  var Pf = !1;
  function Fh(e, t) {
    if (((Go = Ai), (e = ic()), Vo(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var o = n.getSelection && n.getSelection();
          if (o && o.rangeCount !== 0) {
            n = o.anchorNode;
            var l = o.anchorOffset,
              c = o.focusNode;
            o = o.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var p = 0,
              v = -1,
              x = -1,
              N = 0,
              A = 0,
              M = e,
              I = null;
            t: for (;;) {
              for (
                var B;
                M !== n || (l !== 0 && M.nodeType !== 3) || (v = p + l),
                  M !== c || (o !== 0 && M.nodeType !== 3) || (x = p + o),
                  M.nodeType === 3 && (p += M.nodeValue.length),
                  (B = M.firstChild) !== null;

              )
                (I = M), (M = B);
              for (;;) {
                if (M === e) break t;
                if ((I === n && ++N === l && (v = p), I === c && ++A === o && (x = p), (B = M.nextSibling) !== null))
                  break;
                (M = I), (I = M.parentNode);
              }
              M = B;
            }
            n = v === -1 || x === -1 ? null : { start: v, end: x };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Xo = { focusedElem: e, selectionRange: n }, Ai = !1, W = t; W !== null; )
      if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (W = e);
      else
        for (; W !== null; ) {
          t = W;
          try {
            var K = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var q = K.memoizedProps,
                      Re = K.memoizedState,
                      C = t.stateNode,
                      k = C.getSnapshotBeforeUpdate(t.elementType === t.type ? q : bt(t.type, q), Re);
                    C.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var E = t.stateNode.containerInfo;
                  E.nodeType === 1
                    ? (E.textContent = '')
                    : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (j) {
            Oe(t, t.return, j);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (W = e);
            break;
          }
          W = t.return;
        }
    return (K = Pf), (Pf = !1), K;
  }
  function Jr(e, t, n) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var l = (o = o.next);
      do {
        if ((l.tag & e) === e) {
          var c = l.destroy;
          (l.destroy = void 0), c !== void 0 && Fs(t, n, c);
        }
        l = l.next;
      } while (l !== o);
    }
  }
  function ha(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var o = n.create;
          n.destroy = o();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ds(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Of(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Of(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode), t !== null && (delete t[Lt], delete t[Ur], delete t[ts], delete t[Sh], delete t[xh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Lf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Tf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Lf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function $s(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Yi));
    else if (o !== 4 && ((e = e.child), e !== null))
      for ($s(e, t, n), e = e.sibling; e !== null; ) $s(e, t, n), (e = e.sibling);
  }
  function Us(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), (e = e.sibling);
  }
  var Ue = null,
    Ct = !1;
  function on(e, t, n) {
    for (n = n.child; n !== null; ) Rf(e, t, n), (n = n.sibling);
  }
  function Rf(e, t, n) {
    if (Ot && typeof Ot.onCommitFiberUnmount == 'function')
      try {
        Ot.onCommitFiberUnmount(Oi, n);
      } catch {}
    switch (n.tag) {
      case 5:
        qe || ar(n, t);
      case 6:
        var o = Ue,
          l = Ct;
        (Ue = null),
          on(e, t, n),
          (Ue = o),
          (Ct = l),
          Ue !== null &&
            (Ct
              ? ((e = Ue), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ue.removeChild(n.stateNode));
        break;
      case 18:
        Ue !== null &&
          (Ct
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8 ? es(e.parentNode, n) : e.nodeType === 1 && es(e, n),
              Tr(e))
            : es(Ue, n.stateNode));
        break;
      case 4:
        (o = Ue), (l = Ct), (Ue = n.stateNode.containerInfo), (Ct = !0), on(e, t, n), (Ue = o), (Ct = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!qe && ((o = n.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          l = o = o.next;
          do {
            var c = l,
              p = c.destroy;
            (c = c.tag), p !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && Fs(n, t, p), (l = l.next);
          } while (l !== o);
        }
        on(e, t, n);
        break;
      case 1:
        if (!qe && (ar(n, t), (o = n.stateNode), typeof o.componentWillUnmount == 'function'))
          try {
            (o.props = n.memoizedProps), (o.state = n.memoizedState), o.componentWillUnmount();
          } catch (v) {
            Oe(n, t, v);
          }
        on(e, t, n);
        break;
      case 21:
        on(e, t, n);
        break;
      case 22:
        n.mode & 1 ? ((qe = (o = qe) || n.memoizedState !== null), on(e, t, n), (qe = o)) : on(e, t, n);
        break;
      default:
        on(e, t, n);
    }
  }
  function If(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new jh()),
        t.forEach(function (o) {
          var l = Kh.bind(null, e, o);
          n.has(o) || (n.add(o), o.then(l, l));
        });
    }
  }
  function Et(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var o = 0; o < n.length; o++) {
        var l = n[o];
        try {
          var c = e,
            p = t,
            v = p;
          e: for (; v !== null; ) {
            switch (v.tag) {
              case 5:
                (Ue = v.stateNode), (Ct = !1);
                break e;
              case 3:
                (Ue = v.stateNode.containerInfo), (Ct = !0);
                break e;
              case 4:
                (Ue = v.stateNode.containerInfo), (Ct = !0);
                break e;
            }
            v = v.return;
          }
          if (Ue === null) throw Error(a(160));
          Rf(c, p, l), (Ue = null), (Ct = !1);
          var x = l.alternate;
          x !== null && (x.return = null), (l.return = null);
        } catch (N) {
          Oe(l, t, N);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) _f(t, e), (t = t.sibling);
  }
  function _f(e, t) {
    var n = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Et(t, e), It(e), o & 4)) {
          try {
            Jr(3, e, e.return), ha(3, e);
          } catch (q) {
            Oe(e, e.return, q);
          }
          try {
            Jr(5, e, e.return);
          } catch (q) {
            Oe(e, e.return, q);
          }
        }
        break;
      case 1:
        Et(t, e), It(e), o & 512 && n !== null && ar(n, n.return);
        break;
      case 5:
        if ((Et(t, e), It(e), o & 512 && n !== null && ar(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            wr(l, '');
          } catch (q) {
            Oe(e, e.return, q);
          }
        }
        if (o & 4 && ((l = e.stateNode), l != null)) {
          var c = e.memoizedProps,
            p = n !== null ? n.memoizedProps : c,
            v = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              v === 'input' && c.type === 'radio' && c.name != null && ou(l, c), yo(v, p);
              var N = yo(v, c);
              for (p = 0; p < x.length; p += 2) {
                var A = x[p],
                  M = x[p + 1];
                A === 'style'
                  ? mu(l, M)
                  : A === 'dangerouslySetInnerHTML'
                  ? du(l, M)
                  : A === 'children'
                  ? wr(l, M)
                  : U(l, A, M, N);
              }
              switch (v) {
                case 'input':
                  po(l, c);
                  break;
                case 'textarea':
                  uu(l, c);
                  break;
                case 'select':
                  var I = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!c.multiple;
                  var B = c.value;
                  B != null
                    ? Fn(l, !!c.multiple, B, !1)
                    : I !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Fn(l, !!c.multiple, c.defaultValue, !0)
                        : Fn(l, !!c.multiple, c.multiple ? [] : '', !1));
              }
              l[Ur] = c;
            } catch (q) {
              Oe(e, e.return, q);
            }
        }
        break;
      case 6:
        if ((Et(t, e), It(e), o & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (c = e.memoizedProps);
          try {
            l.nodeValue = c;
          } catch (q) {
            Oe(e, e.return, q);
          }
        }
        break;
      case 3:
        if ((Et(t, e), It(e), o & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Tr(t.containerInfo);
          } catch (q) {
            Oe(e, e.return, q);
          }
        break;
      case 4:
        Et(t, e), It(e);
        break;
      case 13:
        Et(t, e),
          It(e),
          (l = e.child),
          l.flags & 8192 &&
            ((c = l.memoizedState !== null),
            (l.stateNode.isHidden = c),
            !c || (l.alternate !== null && l.alternate.memoizedState !== null) || (Hs = Te())),
          o & 4 && If(e);
        break;
      case 22:
        if (
          ((A = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((qe = (N = qe) || A), Et(t, e), (qe = N)) : Et(t, e),
          It(e),
          o & 8192)
        ) {
          if (((N = e.memoizedState !== null), (e.stateNode.isHidden = N) && !A && (e.mode & 1) !== 0))
            for (W = e, A = e.child; A !== null; ) {
              for (M = W = A; W !== null; ) {
                switch (((I = W), (B = I.child), I.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Jr(4, I, I.return);
                    break;
                  case 1:
                    ar(I, I.return);
                    var K = I.stateNode;
                    if (typeof K.componentWillUnmount == 'function') {
                      (o = I), (n = I.return);
                      try {
                        (t = o), (K.props = t.memoizedProps), (K.state = t.memoizedState), K.componentWillUnmount();
                      } catch (q) {
                        Oe(o, n, q);
                      }
                    }
                    break;
                  case 5:
                    ar(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      Mf(M);
                      continue;
                    }
                }
                B !== null ? ((B.return = I), (W = B)) : Mf(M);
              }
              A = A.sibling;
            }
          e: for (A = null, M = e; ; ) {
            if (M.tag === 5) {
              if (A === null) {
                A = M;
                try {
                  (l = M.stateNode),
                    N
                      ? ((c = l.style),
                        typeof c.setProperty == 'function'
                          ? c.setProperty('display', 'none', 'important')
                          : (c.display = 'none'))
                      : ((v = M.stateNode),
                        (x = M.memoizedProps.style),
                        (p = x != null && x.hasOwnProperty('display') ? x.display : null),
                        (v.style.display = pu('display', p)));
                } catch (q) {
                  Oe(e, e.return, q);
                }
              }
            } else if (M.tag === 6) {
              if (A === null)
                try {
                  M.stateNode.nodeValue = N ? '' : M.memoizedProps;
                } catch (q) {
                  Oe(e, e.return, q);
                }
            } else if (((M.tag !== 22 && M.tag !== 23) || M.memoizedState === null || M === e) && M.child !== null) {
              (M.child.return = M), (M = M.child);
              continue;
            }
            if (M === e) break e;
            for (; M.sibling === null; ) {
              if (M.return === null || M.return === e) break e;
              A === M && (A = null), (M = M.return);
            }
            A === M && (A = null), (M.sibling.return = M.return), (M = M.sibling);
          }
        }
        break;
      case 19:
        Et(t, e), It(e), o & 4 && If(e);
        break;
      case 21:
        break;
      default:
        Et(t, e), It(e);
    }
  }
  function It(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Lf(n)) {
              var o = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (o.tag) {
          case 5:
            var l = o.stateNode;
            o.flags & 32 && (wr(l, ''), (o.flags &= -33));
            var c = Tf(e);
            Us(e, c, l);
            break;
          case 3:
          case 4:
            var p = o.stateNode.containerInfo,
              v = Tf(e);
            $s(e, v, p);
            break;
          default:
            throw Error(a(161));
        }
      } catch (x) {
        Oe(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Dh(e, t, n) {
    (W = e), Af(e);
  }
  function Af(e, t, n) {
    for (var o = (e.mode & 1) !== 0; W !== null; ) {
      var l = W,
        c = l.child;
      if (l.tag === 22 && o) {
        var p = l.memoizedState !== null || ma;
        if (!p) {
          var v = l.alternate,
            x = (v !== null && v.memoizedState !== null) || qe;
          v = ma;
          var N = qe;
          if (((ma = p), (qe = x) && !N))
            for (W = l; W !== null; )
              (p = W),
                (x = p.child),
                p.tag === 22 && p.memoizedState !== null ? jf(l) : x !== null ? ((x.return = p), (W = x)) : jf(l);
          for (; c !== null; ) (W = c), Af(c), (c = c.sibling);
          (W = l), (ma = v), (qe = N);
        }
        zf(e);
      } else (l.subtreeFlags & 8772) !== 0 && c !== null ? ((c.return = l), (W = c)) : zf(e);
    }
  }
  function zf(e) {
    for (; W !== null; ) {
      var t = W;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                qe || ha(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !qe)
                  if (n === null) o.componentDidMount();
                  else {
                    var l = t.elementType === t.type ? n.memoizedProps : bt(t.type, n.memoizedProps);
                    o.componentDidUpdate(l, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var c = t.updateQueue;
                c !== null && zc(t, c, o);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  zc(t, p, n);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = v;
                  var x = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      x.autoFocus && n.focus();
                      break;
                    case 'img':
                      x.src && (n.src = x.src);
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
                    var A = N.memoizedState;
                    if (A !== null) {
                      var M = A.dehydrated;
                      M !== null && Tr(M);
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
          qe || (t.flags & 512 && Ds(t));
        } catch (I) {
          Oe(t, t.return, I);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (W = n);
        break;
      }
      W = t.return;
    }
  }
  function Mf(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (W = n);
        break;
      }
      W = t.return;
    }
  }
  function jf(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ha(4, t);
            } catch (x) {
              Oe(t, n, x);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == 'function') {
              var l = t.return;
              try {
                o.componentDidMount();
              } catch (x) {
                Oe(t, l, x);
              }
            }
            var c = t.return;
            try {
              Ds(t);
            } catch (x) {
              Oe(t, c, x);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Ds(t);
            } catch (x) {
              Oe(t, p, x);
            }
        }
      } catch (x) {
        Oe(t, t.return, x);
      }
      if (t === e) {
        W = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        (v.return = t.return), (W = v);
        break;
      }
      W = t.return;
    }
  }
  var $h = Math.ceil,
    ga = $.ReactCurrentDispatcher,
    Vs = $.ReactCurrentOwner,
    vt = $.ReactCurrentBatchConfig,
    se = 0,
    Fe = null,
    Ie = null,
    Ve = 0,
    ft = 0,
    or = en(0),
    ze = 0,
    Zr = null,
    En = 0,
    va = 0,
    Bs = 0,
    ei = null,
    rt = null,
    Hs = 0,
    sr = 1 / 0,
    Vt = null,
    ya = !1,
    Ws = null,
    sn = null,
    wa = !1,
    ln = null,
    Sa = 0,
    ti = 0,
    Ys = null,
    xa = -1,
    ka = 0;
  function Je() {
    return (se & 6) !== 0 ? Te() : xa !== -1 ? xa : (xa = Te());
  }
  function un(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && Ve !== 0
      ? Ve & -Ve
      : bh.transition !== null
      ? (ka === 0 && (ka = Lu()), ka)
      : ((e = pe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fu(e.type))), e);
  }
  function Nt(e, t, n, o) {
    if (50 < ti) throw ((ti = 0), (Ys = null), Error(a(185)));
    Er(e, n, o),
      ((se & 2) === 0 || e !== Fe) &&
        (e === Fe && ((se & 2) === 0 && (va |= n), ze === 4 && cn(e, Ve)),
        it(e, o),
        n === 1 && se === 0 && (t.mode & 1) === 0 && ((sr = Te() + 500), Gi && nn()));
  }
  function it(e, t) {
    var n = e.callbackNode;
    bm(e, t);
    var o = Ri(e, e === Fe ? Ve : 0);
    if (o === 0) n !== null && Nu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((n != null && Nu(n), t === 1))
        e.tag === 0 ? kh(Df.bind(null, e)) : bc(Df.bind(null, e)),
          yh(function () {
            (se & 6) === 0 && nn();
          }),
          (n = null);
      else {
        switch (Tu(o)) {
          case 1:
            n = Eo;
            break;
          case 4:
            n = Pu;
            break;
          case 16:
            n = Pi;
            break;
          case 536870912:
            n = Ou;
            break;
          default:
            n = Pi;
        }
        n = Kf(n, Ff.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Ff(e, t) {
    if (((xa = -1), (ka = 0), (se & 6) !== 0)) throw Error(a(327));
    var n = e.callbackNode;
    if (lr() && e.callbackNode !== n) return null;
    var o = Ri(e, e === Fe ? Ve : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = ba(e, o);
    else {
      t = o;
      var l = se;
      se |= 2;
      var c = Uf();
      (Fe !== e || Ve !== t) && ((Vt = null), (sr = Te() + 500), Pn(e, t));
      do
        try {
          Bh();
          break;
        } catch (v) {
          $f(e, v);
        }
      while (!0);
      cs(), (ga.current = c), (se = l), Ie !== null ? (t = 0) : ((Fe = null), (Ve = 0), (t = ze));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = No(e)), l !== 0 && ((o = l), (t = Ks(e, l)))), t === 1))
        throw ((n = Zr), Pn(e, 0), cn(e, o), it(e, Te()), n);
      if (t === 6) cn(e, o);
      else {
        if (
          ((l = e.current.alternate),
          (o & 30) === 0 &&
            !Uh(l) &&
            ((t = ba(e, o)), t === 2 && ((c = No(e)), c !== 0 && ((o = c), (t = Ks(e, c)))), t === 1))
        )
          throw ((n = Zr), Pn(e, 0), cn(e, o), it(e, Te()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            On(e, rt, Vt);
            break;
          case 3:
            if ((cn(e, o), (o & 130023424) === o && ((t = Hs + 500 - Te()), 10 < t))) {
              if (Ri(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & o) !== o)) {
                Je(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Zo(On.bind(null, e, rt, Vt), t);
              break;
            }
            On(e, rt, Vt);
            break;
          case 4:
            if ((cn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, l = -1; 0 < o; ) {
              var p = 31 - St(o);
              (c = 1 << p), (p = t[p]), p > l && (l = p), (o &= ~c);
            }
            if (
              ((o = l),
              (o = Te() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                  ? 480
                  : 1080 > o
                  ? 1080
                  : 1920 > o
                  ? 1920
                  : 3e3 > o
                  ? 3e3
                  : 4320 > o
                  ? 4320
                  : 1960 * $h(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Zo(On.bind(null, e, rt, Vt), o);
              break;
            }
            On(e, rt, Vt);
            break;
          case 5:
            On(e, rt, Vt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return it(e, Te()), e.callbackNode === n ? Ff.bind(null, e) : null;
  }
  function Ks(e, t) {
    var n = ei;
    return (
      e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
      (e = ba(e, t)),
      e !== 2 && ((t = rt), (rt = n), t !== null && qs(t)),
      e
    );
  }
  function qs(e) {
    rt === null ? (rt = e) : rt.push.apply(rt, e);
  }
  function Uh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var o = 0; o < n.length; o++) {
            var l = n[o],
              c = l.getSnapshot;
            l = l.value;
            try {
              if (!xt(c(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
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
  function cn(e, t) {
    for (t &= ~Bs, t &= ~va, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - St(t),
        o = 1 << n;
      (e[n] = -1), (t &= ~o);
    }
  }
  function Df(e) {
    if ((se & 6) !== 0) throw Error(a(327));
    lr();
    var t = Ri(e, 0);
    if ((t & 1) === 0) return it(e, Te()), null;
    var n = ba(e, t);
    if (e.tag !== 0 && n === 2) {
      var o = No(e);
      o !== 0 && ((t = o), (n = Ks(e, o)));
    }
    if (n === 1) throw ((n = Zr), Pn(e, 0), cn(e, t), it(e, Te()), n);
    if (n === 6) throw Error(a(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), On(e, rt, Vt), it(e, Te()), null;
  }
  function Qs(e, t) {
    var n = se;
    se |= 1;
    try {
      return e(t);
    } finally {
      (se = n), se === 0 && ((sr = Te() + 500), Gi && nn());
    }
  }
  function Nn(e) {
    ln !== null && ln.tag === 0 && (se & 6) === 0 && lr();
    var t = se;
    se |= 1;
    var n = vt.transition,
      o = pe;
    try {
      if (((vt.transition = null), (pe = 1), e)) return e();
    } finally {
      (pe = o), (vt.transition = n), (se = t), (se & 6) === 0 && nn();
    }
  }
  function Gs() {
    (ft = or.current), Se(or);
  }
  function Pn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), vh(n)), Ie !== null))
      for (n = Ie.return; n !== null; ) {
        var o = n;
        switch ((as(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && qi();
            break;
          case 3:
            rr(), Se(et), Se(We), ys();
            break;
          case 5:
            gs(o);
            break;
          case 4:
            rr();
            break;
          case 13:
            Se(Ne);
            break;
          case 19:
            Se(Ne);
            break;
          case 10:
            fs(o.type._context);
            break;
          case 22:
          case 23:
            Gs();
        }
        n = n.return;
      }
    if (
      ((Fe = e),
      (Ie = e = fn(e.current, null)),
      (Ve = ft = t),
      (ze = 0),
      (Zr = null),
      (Bs = va = En = 0),
      (rt = ei = null),
      kn !== null)
    ) {
      for (t = 0; t < kn.length; t++)
        if (((n = kn[t]), (o = n.interleaved), o !== null)) {
          n.interleaved = null;
          var l = o.next,
            c = n.pending;
          if (c !== null) {
            var p = c.next;
            (c.next = l), (o.next = p);
          }
          n.pending = o;
        }
      kn = null;
    }
    return e;
  }
  function $f(e, t) {
    do {
      var n = Ie;
      try {
        if ((cs(), (oa.current = ca), sa)) {
          for (var o = Pe.memoizedState; o !== null; ) {
            var l = o.queue;
            l !== null && (l.pending = null), (o = o.next);
          }
          sa = !1;
        }
        if (
          ((Cn = 0), (je = Ae = Pe = null), (Kr = !1), (qr = 0), (Vs.current = null), n === null || n.return === null)
        ) {
          (ze = 1), (Zr = t), (Ie = null);
          break;
        }
        e: {
          var c = e,
            p = n.return,
            v = n,
            x = t;
          if (((t = Ve), (v.flags |= 32768), x !== null && typeof x == 'object' && typeof x.then == 'function')) {
            var N = x,
              A = v,
              M = A.tag;
            if ((A.mode & 1) === 0 && (M === 0 || M === 11 || M === 15)) {
              var I = A.alternate;
              I
                ? ((A.updateQueue = I.updateQueue), (A.memoizedState = I.memoizedState), (A.lanes = I.lanes))
                : ((A.updateQueue = null), (A.memoizedState = null));
            }
            var B = ff(p);
            if (B !== null) {
              (B.flags &= -257), df(B, p, v, c, t), B.mode & 1 && cf(c, N, t), (t = B), (x = N);
              var K = t.updateQueue;
              if (K === null) {
                var q = new Set();
                q.add(x), (t.updateQueue = q);
              } else K.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                cf(c, N, t), Xs();
                break e;
              }
              x = Error(a(426));
            }
          } else if (Ce && v.mode & 1) {
            var Re = ff(p);
            if (Re !== null) {
              (Re.flags & 65536) === 0 && (Re.flags |= 256), df(Re, p, v, c, t), ls(ir(x, v));
              break e;
            }
          }
          (c = x = ir(x, v)), ze !== 4 && (ze = 2), ei === null ? (ei = [c]) : ei.push(c), (c = p);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var C = lf(c, x, t);
                Ac(c, C);
                break e;
              case 1:
                v = x;
                var k = c.type,
                  E = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == 'function' ||
                    (E !== null && typeof E.componentDidCatch == 'function' && (sn === null || !sn.has(E))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var j = uf(c, v, t);
                  Ac(c, j);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Bf(n);
      } catch (Q) {
        (t = Q), Ie === n && n !== null && (Ie = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Uf() {
    var e = ga.current;
    return (ga.current = ca), e === null ? ca : e;
  }
  function Xs() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      Fe === null || ((En & 268435455) === 0 && (va & 268435455) === 0) || cn(Fe, Ve);
  }
  function ba(e, t) {
    var n = se;
    se |= 2;
    var o = Uf();
    (Fe !== e || Ve !== t) && ((Vt = null), Pn(e, t));
    do
      try {
        Vh();
        break;
      } catch (l) {
        $f(e, l);
      }
    while (!0);
    if ((cs(), (se = n), (ga.current = o), Ie !== null)) throw Error(a(261));
    return (Fe = null), (Ve = 0), ze;
  }
  function Vh() {
    for (; Ie !== null; ) Vf(Ie);
  }
  function Bh() {
    for (; Ie !== null && !mm(); ) Vf(Ie);
  }
  function Vf(e) {
    var t = Yf(e.alternate, e, ft);
    (e.memoizedProps = e.pendingProps), t === null ? Bf(e) : (Ie = t), (Vs.current = null);
  }
  function Bf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = zh(n, t, ft)), n !== null)) {
          Ie = n;
          return;
        }
      } else {
        if (((n = Mh(n, t)), n !== null)) {
          (n.flags &= 32767), (Ie = n);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ze = 6), (Ie = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function On(e, t, n) {
    var o = pe,
      l = vt.transition;
    try {
      (vt.transition = null), (pe = 1), Hh(e, t, n, o);
    } finally {
      (vt.transition = l), (pe = o);
    }
    return null;
  }
  function Hh(e, t, n, o) {
    do lr();
    while (ln !== null);
    if ((se & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = n.lanes | n.childLanes;
    if (
      (Cm(e, c),
      e === Fe && ((Ie = Fe = null), (Ve = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        wa ||
        ((wa = !0),
        Kf(Pi, function () {
          return lr(), null;
        })),
      (c = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || c)
    ) {
      (c = vt.transition), (vt.transition = null);
      var p = pe;
      pe = 1;
      var v = se;
      (se |= 4),
        (Vs.current = null),
        Fh(e, n),
        _f(n, e),
        ch(Xo),
        (Ai = !!Go),
        (Xo = Go = null),
        (e.current = n),
        Dh(n),
        hm(),
        (se = v),
        (pe = p),
        (vt.transition = c);
    } else e.current = n;
    if (
      (wa && ((wa = !1), (ln = e), (Sa = l)),
      (c = e.pendingLanes),
      c === 0 && (sn = null),
      ym(n.stateNode),
      it(e, Te()),
      t !== null)
    )
      for (o = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), o(l.value, { componentStack: l.stack, digest: l.digest });
    if (ya) throw ((ya = !1), (e = Ws), (Ws = null), e);
    return (
      (Sa & 1) !== 0 && e.tag !== 0 && lr(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === Ys ? ti++ : ((ti = 0), (Ys = e))) : (ti = 0),
      nn(),
      null
    );
  }
  function lr() {
    if (ln !== null) {
      var e = Tu(Sa),
        t = vt.transition,
        n = pe;
      try {
        if (((vt.transition = null), (pe = 16 > e ? 16 : e), ln === null)) var o = !1;
        else {
          if (((e = ln), (ln = null), (Sa = 0), (se & 6) !== 0)) throw Error(a(331));
          var l = se;
          for (se |= 4, W = e.current; W !== null; ) {
            var c = W,
              p = c.child;
            if ((W.flags & 16) !== 0) {
              var v = c.deletions;
              if (v !== null) {
                for (var x = 0; x < v.length; x++) {
                  var N = v[x];
                  for (W = N; W !== null; ) {
                    var A = W;
                    switch (A.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jr(8, A, c);
                    }
                    var M = A.child;
                    if (M !== null) (M.return = A), (W = M);
                    else
                      for (; W !== null; ) {
                        A = W;
                        var I = A.sibling,
                          B = A.return;
                        if ((Of(A), A === N)) {
                          W = null;
                          break;
                        }
                        if (I !== null) {
                          (I.return = B), (W = I);
                          break;
                        }
                        W = B;
                      }
                  }
                }
                var K = c.alternate;
                if (K !== null) {
                  var q = K.child;
                  if (q !== null) {
                    K.child = null;
                    do {
                      var Re = q.sibling;
                      (q.sibling = null), (q = Re);
                    } while (q !== null);
                  }
                }
                W = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && p !== null) (p.return = c), (W = p);
            else
              e: for (; W !== null; ) {
                if (((c = W), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(9, c, c.return);
                  }
                var C = c.sibling;
                if (C !== null) {
                  (C.return = c.return), (W = C);
                  break e;
                }
                W = c.return;
              }
          }
          var k = e.current;
          for (W = k; W !== null; ) {
            p = W;
            var E = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && E !== null) (E.return = p), (W = E);
            else
              e: for (p = k; W !== null; ) {
                if (((v = W), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ha(9, v);
                    }
                  } catch (Q) {
                    Oe(v, v.return, Q);
                  }
                if (v === p) {
                  W = null;
                  break e;
                }
                var j = v.sibling;
                if (j !== null) {
                  (j.return = v.return), (W = j);
                  break e;
                }
                W = v.return;
              }
          }
          if (((se = l), nn(), Ot && typeof Ot.onPostCommitFiberRoot == 'function'))
            try {
              Ot.onPostCommitFiberRoot(Oi, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (pe = n), (vt.transition = t);
      }
    }
    return !1;
  }
  function Hf(e, t, n) {
    (t = ir(n, t)), (t = lf(e, t, 1)), (e = an(e, t, 1)), (t = Je()), e !== null && (Er(e, 1, t), it(e, t));
  }
  function Oe(e, t, n) {
    if (e.tag === 3) Hf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (sn === null || !sn.has(o)))
          ) {
            (e = ir(n, e)), (e = uf(t, e, 1)), (t = an(t, e, 1)), (e = Je()), t !== null && (Er(t, 1, e), it(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Wh(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t),
      (t = Je()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Fe === e &&
        (Ve & n) === n &&
        (ze === 4 || (ze === 3 && (Ve & 130023424) === Ve && 500 > Te() - Hs) ? Pn(e, 0) : (Bs |= n)),
      it(e, t);
  }
  function Wf(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? (t = 1) : ((t = Ti), (Ti <<= 1), (Ti & 130023424) === 0 && (Ti = 4194304)));
    var n = Je();
    (e = Dt(e, t)), e !== null && (Er(e, t, n), it(e, n));
  }
  function Yh(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Wf(e, n);
  }
  function Kh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    o !== null && o.delete(t), Wf(e, n);
  }
  var Yf;
  Yf = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (nt = !1), Ah(e, t, n);
        nt = (e.flags & 131072) !== 0;
      }
    else (nt = !1), Ce && (t.flags & 1048576) !== 0 && Cc(t, Ji, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        pa(e, t), (e = t.pendingProps);
        var l = Gn(t, We.current);
        nr(t, n), (l = xs(null, t, o, e, l, n));
        var c = ks();
        return (
          (t.flags |= 1),
          typeof l == 'object' && l !== null && typeof l.render == 'function' && l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              tt(o) ? ((c = !0), Qi(t)) : (c = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              ms(t),
              (l.updater = fa),
              (t.stateNode = l),
              (l._reactInternals = t),
              Os(t, o, e, n),
              (t = Is(null, t, o, !0, c, n)))
            : ((t.tag = 0), Ce && c && is(t), Xe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (pa(e, t),
            (e = t.pendingProps),
            (l = o._init),
            (o = l(o._payload)),
            (t.type = o),
            (l = t.tag = Qh(o)),
            (e = bt(o, e)),
            l)
          ) {
            case 0:
              t = Rs(null, t, o, e, n);
              break e;
            case 1:
              t = yf(null, t, o, e, n);
              break e;
            case 11:
              t = pf(null, t, o, e, n);
              break e;
            case 14:
              t = mf(null, t, o, bt(o.type, e), n);
              break e;
          }
          throw Error(a(306, o, ''));
        }
        return t;
      case 0:
        return (o = t.type), (l = t.pendingProps), (l = t.elementType === o ? l : bt(o, l)), Rs(e, t, o, l, n);
      case 1:
        return (o = t.type), (l = t.pendingProps), (l = t.elementType === o ? l : bt(o, l)), yf(e, t, o, l, n);
      case 3:
        e: {
          if ((wf(t), e === null)) throw Error(a(387));
          (o = t.pendingProps), (c = t.memoizedState), (l = c.element), _c(e, t), ia(t, o, null, n);
          var p = t.memoizedState;
          if (((o = p.element), c.isDehydrated))
            if (
              ((c = {
                element: o,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (l = ir(Error(a(423)), t)), (t = Sf(e, t, o, n, l));
              break e;
            } else if (o !== l) {
              (l = ir(Error(a(424)), t)), (t = Sf(e, t, o, n, l));
              break e;
            } else
              for (
                ct = Zt(t.stateNode.containerInfo.firstChild),
                  ut = t,
                  Ce = !0,
                  kt = null,
                  n = Rc(t, null, o, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Zn(), o === l)) {
              t = Ut(e, t, n);
              break e;
            }
            Xe(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Mc(t),
          e === null && ss(t),
          (o = t.type),
          (l = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (p = l.children),
          Jo(o, l) ? (p = null) : c !== null && Jo(o, c) && (t.flags |= 32),
          vf(e, t),
          Xe(e, t, p, n),
          t.child
        );
      case 6:
        return e === null && ss(t), null;
      case 13:
        return xf(e, t, n);
      case 4:
        return (
          hs(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = er(t, null, o, n)) : Xe(e, t, o, n),
          t.child
        );
      case 11:
        return (o = t.type), (l = t.pendingProps), (l = t.elementType === o ? l : bt(o, l)), pf(e, t, o, l, n);
      case 7:
        return Xe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Xe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Xe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (l = t.pendingProps),
            (c = t.memoizedProps),
            (p = l.value),
            ve(ta, o._currentValue),
            (o._currentValue = p),
            c !== null)
          )
            if (xt(c.value, p)) {
              if (c.children === l.children && !et.current) {
                t = Ut(e, t, n);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var v = c.dependencies;
                if (v !== null) {
                  p = c.child;
                  for (var x = v.firstContext; x !== null; ) {
                    if (x.context === o) {
                      if (c.tag === 1) {
                        (x = $t(-1, n & -n)), (x.tag = 2);
                        var N = c.updateQueue;
                        if (N !== null) {
                          N = N.shared;
                          var A = N.pending;
                          A === null ? (x.next = x) : ((x.next = A.next), (A.next = x)), (N.pending = x);
                        }
                      }
                      (c.lanes |= n),
                        (x = c.alternate),
                        x !== null && (x.lanes |= n),
                        ds(c.return, n, t),
                        (v.lanes |= n);
                      break;
                    }
                    x = x.next;
                  }
                } else if (c.tag === 10) p = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((p = c.return), p === null)) throw Error(a(341));
                  (p.lanes |= n), (v = p.alternate), v !== null && (v.lanes |= n), ds(p, n, t), (p = c.sibling);
                } else p = c.child;
                if (p !== null) p.return = c;
                else
                  for (p = c; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((c = p.sibling), c !== null)) {
                      (c.return = p.return), (p = c);
                      break;
                    }
                    p = p.return;
                  }
                c = p;
              }
          Xe(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (o = t.pendingProps.children),
          nr(t, n),
          (l = ht(l)),
          (o = o(l)),
          (t.flags |= 1),
          Xe(e, t, o, n),
          t.child
        );
      case 14:
        return (o = t.type), (l = bt(o, t.pendingProps)), (l = bt(o.type, l)), mf(e, t, o, l, n);
      case 15:
        return hf(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : bt(o, l)),
          pa(e, t),
          (t.tag = 1),
          tt(o) ? ((e = !0), Qi(t)) : (e = !1),
          nr(t, n),
          of(t, o, l),
          Os(t, o, l, n),
          Is(null, t, o, !0, e, n)
        );
      case 19:
        return bf(e, t, n);
      case 22:
        return gf(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Kf(e, t) {
    return Eu(e, t);
  }
  function qh(e, t, n, o) {
    (this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function yt(e, t, n, o) {
    return new qh(e, t, n, o);
  }
  function Js(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Qh(e) {
    if (typeof e == 'function') return Js(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === wt)) return 11;
      if (e === He) return 14;
    }
    return 2;
  }
  function fn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = yt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ca(e, t, n, o, l, c) {
    var p = 2;
    if (((o = e), typeof e == 'function')) Js(e) && (p = 1);
    else if (typeof e == 'string') p = 5;
    else
      e: switch (e) {
        case Z:
          return Ln(n.children, l, c, t);
        case he:
          (p = 8), (l |= 8);
          break;
        case Ee:
          return (e = yt(12, n, t, l | 2)), (e.elementType = Ee), (e.lanes = c), e;
        case Ge:
          return (e = yt(13, n, t, l)), (e.elementType = Ge), (e.lanes = c), e;
        case $e:
          return (e = yt(19, n, t, l)), (e.elementType = $e), (e.lanes = c), e;
        case ye:
          return Ea(n, l, c, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Be:
                p = 10;
                break e;
              case ot:
                p = 9;
                break e;
              case wt:
                p = 11;
                break e;
              case He:
                p = 14;
                break e;
              case _e:
                (p = 16), (o = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ''));
      }
    return (t = yt(p, n, t, l)), (t.elementType = e), (t.type = o), (t.lanes = c), t;
  }
  function Ln(e, t, n, o) {
    return (e = yt(7, e, o, t)), (e.lanes = n), e;
  }
  function Ea(e, t, n, o) {
    return (e = yt(22, e, o, t)), (e.elementType = ye), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
  }
  function Zs(e, t, n) {
    return (e = yt(6, e, null, t)), (e.lanes = n), e;
  }
  function el(e, t, n) {
    return (
      (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function Gh(e, t, n, o, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Po(0)),
      (this.expirationTimes = Po(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Po(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function tl(e, t, n, o, l, c, p, v, x) {
    return (
      (e = new Gh(e, t, n, v, x)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = yt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: o,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ms(c),
      e
    );
  }
  function Xh(e, t, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: J, key: o == null ? null : '' + o, children: e, containerInfo: t, implementation: n };
  }
  function qf(e) {
    if (!e) return tn;
    e = e._reactInternals;
    e: {
      if (vn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (tt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (tt(n)) return xc(e, n, t);
    }
    return t;
  }
  function Qf(e, t, n, o, l, c, p, v, x) {
    return (
      (e = tl(n, o, !0, e, l, c, p, v, x)),
      (e.context = qf(null)),
      (n = e.current),
      (o = Je()),
      (l = un(n)),
      (c = $t(o, l)),
      (c.callback = t ?? null),
      an(n, c, l),
      (e.current.lanes = l),
      Er(e, l, o),
      it(e, o),
      e
    );
  }
  function Na(e, t, n, o) {
    var l = t.current,
      c = Je(),
      p = un(l);
    return (
      (n = qf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = $t(c, p)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = an(l, t, p)),
      e !== null && (Nt(e, l, p, c), ra(e, l, p)),
      p
    );
  }
  function Pa(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Gf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function nl(e, t) {
    Gf(e, t), (e = e.alternate) && Gf(e, t);
  }
  function Jh() {
    return null;
  }
  var Xf =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function rl(e) {
    this._internalRoot = e;
  }
  (Oa.prototype.render = rl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Na(e, t, null, null);
    }),
    (Oa.prototype.unmount = rl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Nn(function () {
            Na(null, e, null, null);
          }),
            (t[zt] = null);
        }
      });
  function Oa(e) {
    this._internalRoot = e;
  }
  Oa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = _u();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
      Gt.splice(n, 0, e), n === 0 && Mu(e);
    }
  };
  function il(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function La(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Jf() {}
  function Zh(e, t, n, o, l) {
    if (l) {
      if (typeof o == 'function') {
        var c = o;
        o = function () {
          var N = Pa(p);
          c.call(N);
        };
      }
      var p = Qf(t, o, e, 0, null, !1, !1, '', Jf);
      return (e._reactRootContainer = p), (e[zt] = p.current), Dr(e.nodeType === 8 ? e.parentNode : e), Nn(), p;
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof o == 'function') {
      var v = o;
      o = function () {
        var N = Pa(x);
        v.call(N);
      };
    }
    var x = tl(e, 0, !1, null, null, !1, !1, '', Jf);
    return (
      (e._reactRootContainer = x),
      (e[zt] = x.current),
      Dr(e.nodeType === 8 ? e.parentNode : e),
      Nn(function () {
        Na(t, x, n, o);
      }),
      x
    );
  }
  function Ta(e, t, n, o, l) {
    var c = n._reactRootContainer;
    if (c) {
      var p = c;
      if (typeof l == 'function') {
        var v = l;
        l = function () {
          var x = Pa(p);
          v.call(x);
        };
      }
      Na(t, p, e, l);
    } else p = Zh(n, t, e, l, o);
    return Pa(p);
  }
  (Ru = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Cr(t.pendingLanes);
          n !== 0 && (Oo(t, n | 1), it(t, Te()), (se & 6) === 0 && ((sr = Te() + 500), nn()));
        }
        break;
      case 13:
        Nn(function () {
          var o = Dt(e, 1);
          if (o !== null) {
            var l = Je();
            Nt(o, e, 1, l);
          }
        }),
          nl(e, 1);
    }
  }),
    (Lo = function (e) {
      if (e.tag === 13) {
        var t = Dt(e, 134217728);
        if (t !== null) {
          var n = Je();
          Nt(t, e, 134217728, n);
        }
        nl(e, 134217728);
      }
    }),
    (Iu = function (e) {
      if (e.tag === 13) {
        var t = un(e),
          n = Dt(e, t);
        if (n !== null) {
          var o = Je();
          Nt(n, e, t, o);
        }
        nl(e, t);
      }
    }),
    (_u = function () {
      return pe;
    }),
    (Au = function (e, t) {
      var n = pe;
      try {
        return (pe = e), t();
      } finally {
        pe = n;
      }
    }),
    (xo = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((po(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var o = n[t];
              if (o !== e && o.form === e.form) {
                var l = Ki(o);
                if (!l) throw Error(a(90));
                iu(o), po(o, l);
              }
            }
          }
          break;
        case 'textarea':
          uu(e, n);
          break;
        case 'select':
          (t = n.value), t != null && Fn(e, !!n.multiple, t, !1);
      }
    }),
    (yu = Qs),
    (wu = Nn);
  var eg = { usingClientEntryPoint: !1, Events: [Vr, qn, Ki, gu, vu, Qs] },
    ni = { findFiberByHostInstance: yn, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    tg = {
      bundleType: ni.bundleType,
      version: ni.version,
      rendererPackageName: ni.rendererPackageName,
      rendererConfig: ni.rendererConfig,
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
        return (e = bu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ni.findFiberByHostInstance || Jh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ra.isDisabled && Ra.supportsFiber)
      try {
        (Oi = Ra.inject(tg)), (Ot = Ra);
      } catch {}
  }
  return (
    (at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg),
    (at.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!il(t)) throw Error(a(200));
      return Xh(e, t, null, n);
    }),
    (at.createRoot = function (e, t) {
      if (!il(e)) throw Error(a(299));
      var n = !1,
        o = '',
        l = Xf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = tl(e, 1, !1, null, null, n, !1, o, l)),
        (e[zt] = t.current),
        Dr(e.nodeType === 8 ? e.parentNode : e),
        new rl(t)
      );
    }),
    (at.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function' ? Error(a(188)) : ((e = Object.keys(e).join(',')), Error(a(268, e)));
      return (e = bu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (at.flushSync = function (e) {
      return Nn(e);
    }),
    (at.hydrate = function (e, t, n) {
      if (!La(t)) throw Error(a(200));
      return Ta(null, e, t, !0, n);
    }),
    (at.hydrateRoot = function (e, t, n) {
      if (!il(e)) throw Error(a(405));
      var o = (n != null && n.hydratedSources) || null,
        l = !1,
        c = '',
        p = Xf;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError)),
        (t = Qf(t, null, e, 1, n ?? null, l, !1, c, p)),
        (e[zt] = t.current),
        Dr(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          (n = o[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Oa(t);
    }),
    (at.render = function (e, t, n) {
      if (!La(t)) throw Error(a(200));
      return Ta(null, e, t, !1, n);
    }),
    (at.unmountComponentAtNode = function (e) {
      if (!La(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (Nn(function () {
            Ta(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[zt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (at.unstable_batchedUpdates = Qs),
    (at.unstable_renderSubtreeIntoContainer = function (e, t, n, o) {
      if (!La(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Ta(e, t, n, !1, o);
    }),
    (at.version = '18.3.1-next-f1338f8080-20240426'),
    at
  );
}
var od;
function lp() {
  if (od) return sl.exports;
  od = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), (sl.exports = cg()), sl.exports;
}
var sd;
function fg() {
  if (sd) return Ia;
  sd = 1;
  var i = lp();
  return (Ia.createRoot = i.createRoot), (Ia.hydrateRoot = i.hydrateRoot), Ia;
}
var dg = fg();
const pg = no(dg);
lp();
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ui() {
  return (
    (ui = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (i[s] = a[s]);
          }
          return i;
        }),
    ui.apply(this, arguments)
  );
}
var Rn;
(function (i) {
  (i.Pop = 'POP'), (i.Push = 'PUSH'), (i.Replace = 'REPLACE');
})(Rn || (Rn = {}));
const ld = 'popstate';
function mg(i) {
  i === void 0 && (i = {});
  function r(s, u) {
    let { pathname: f, search: d, hash: m } = s.location;
    return kl(
      '',
      { pathname: f, search: d, hash: m },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || 'default'
    );
  }
  function a(s, u) {
    return typeof u == 'string' ? u : cp(u);
  }
  return gg(r, a, null, i);
}
function Ze(i, r) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(r);
}
function up(i, r) {
  if (!i) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function hg() {
  return Math.random().toString(36).substr(2, 8);
}
function ud(i, r) {
  return { usr: i.state, key: i.key, idx: r };
}
function kl(i, r, a, s) {
  return (
    a === void 0 && (a = null),
    ui({ pathname: typeof i == 'string' ? i : i.pathname, search: '', hash: '' }, typeof r == 'string' ? gi(r) : r, {
      state: a,
      key: (r && r.key) || s || hg(),
    })
  );
}
function cp(i) {
  let { pathname: r = '/', search: a = '', hash: s = '' } = i;
  return (
    a && a !== '?' && (r += a.charAt(0) === '?' ? a : '?' + a),
    s && s !== '#' && (r += s.charAt(0) === '#' ? s : '#' + s),
    r
  );
}
function gi(i) {
  let r = {};
  if (i) {
    let a = i.indexOf('#');
    a >= 0 && ((r.hash = i.substr(a)), (i = i.substr(0, a)));
    let s = i.indexOf('?');
    s >= 0 && ((r.search = i.substr(s)), (i = i.substr(0, s))), i && (r.pathname = i);
  }
  return r;
}
function gg(i, r, a, s) {
  s === void 0 && (s = {});
  let { window: u = document.defaultView, v5Compat: f = !1 } = s,
    d = u.history,
    m = Rn.Pop,
    h = null,
    g = y();
  g == null && ((g = 0), d.replaceState(ui({}, d.state, { idx: g }), ''));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function w() {
    m = Rn.Pop;
    let T = y(),
      Y = T == null ? null : T - g;
    (g = T), h && h({ action: m, location: P.location, delta: Y });
  }
  function S(T, Y) {
    m = Rn.Push;
    let z = kl(P.location, T, Y);
    g = y() + 1;
    let U = ud(z, g),
      $ = P.createHref(z);
    try {
      d.pushState(U, '', $);
    } catch (L) {
      if (L instanceof DOMException && L.name === 'DataCloneError') throw L;
      u.location.assign($);
    }
    f && h && h({ action: m, location: P.location, delta: 1 });
  }
  function O(T, Y) {
    m = Rn.Replace;
    let z = kl(P.location, T, Y);
    g = y();
    let U = ud(z, g),
      $ = P.createHref(z);
    d.replaceState(U, '', $), f && h && h({ action: m, location: P.location, delta: 0 });
  }
  function R(T) {
    let Y = u.location.origin !== 'null' ? u.location.origin : u.location.href,
      z = typeof T == 'string' ? T : cp(T);
    return (
      (z = z.replace(/ $/, '%20')),
      Ze(Y, 'No window.location.(origin|href) available to create URL for href: ' + z),
      new URL(z, Y)
    );
  }
  let P = {
    get action() {
      return m;
    },
    get location() {
      return i(u, d);
    },
    listen(T) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        u.addEventListener(ld, w),
        (h = T),
        () => {
          u.removeEventListener(ld, w), (h = null);
        }
      );
    },
    createHref(T) {
      return r(u, T);
    },
    createURL: R,
    encodeLocation(T) {
      let Y = R(T);
      return { pathname: Y.pathname, search: Y.search, hash: Y.hash };
    },
    push: S,
    replace: O,
    go(T) {
      return d.go(T);
    },
  };
  return P;
}
var cd;
(function (i) {
  (i.data = 'data'), (i.deferred = 'deferred'), (i.redirect = 'redirect'), (i.error = 'error');
})(cd || (cd = {}));
function vg(i, r, a) {
  a === void 0 && (a = '/');
  let s = typeof r == 'string' ? gi(r) : r,
    u = pp(s.pathname || '/', a);
  if (u == null) return null;
  let f = fp(i);
  yg(f);
  let d = null;
  for (let m = 0; d == null && m < f.length; ++m) {
    let h = Tg(u);
    d = Pg(f[m], h);
  }
  return d;
}
function fp(i, r, a, s) {
  r === void 0 && (r = []), a === void 0 && (a = []), s === void 0 && (s = '');
  let u = (f, d, m) => {
    let h = {
      relativePath: m === void 0 ? f.path || '' : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    h.relativePath.startsWith('/') &&
      (Ze(
        h.relativePath.startsWith(s),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (h.relativePath = h.relativePath.slice(s.length)));
    let g = An([s, h.relativePath]),
      y = a.concat(h);
    f.children &&
      f.children.length > 0 &&
      (Ze(
        f.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + g + '".')
      ),
      fp(f.children, r, y, g)),
      !(f.path == null && !f.index) && r.push({ path: g, score: Eg(g, f.index), routesMeta: y });
  };
  return (
    i.forEach((f, d) => {
      var m;
      if (f.path === '' || !((m = f.path) != null && m.includes('?'))) u(f, d);
      else for (let h of dp(f.path)) u(f, d, h);
    }),
    r
  );
}
function dp(i) {
  let r = i.split('/');
  if (r.length === 0) return [];
  let [a, ...s] = r,
    u = a.endsWith('?'),
    f = a.replace(/\?$/, '');
  if (s.length === 0) return u ? [f, ''] : [f];
  let d = dp(s.join('/')),
    m = [];
  return (
    m.push(...d.map((h) => (h === '' ? f : [f, h].join('/')))),
    u && m.push(...d),
    m.map((h) => (i.startsWith('/') && h === '' ? '/' : h))
  );
}
function yg(i) {
  i.sort((r, a) =>
    r.score !== a.score
      ? a.score - r.score
      : Ng(
          r.routesMeta.map((s) => s.childrenIndex),
          a.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
const wg = /^:[\w-]+$/,
  Sg = 3,
  xg = 2,
  kg = 1,
  bg = 10,
  Cg = -2,
  fd = (i) => i === '*';
function Eg(i, r) {
  let a = i.split('/'),
    s = a.length;
  return (
    a.some(fd) && (s += Cg),
    r && (s += xg),
    a.filter((u) => !fd(u)).reduce((u, f) => u + (wg.test(f) ? Sg : f === '' ? kg : bg), s)
  );
}
function Ng(i, r) {
  return i.length === r.length && i.slice(0, -1).every((s, u) => s === r[u]) ? i[i.length - 1] - r[r.length - 1] : 0;
}
function Pg(i, r) {
  let { routesMeta: a } = i,
    s = {},
    u = '/',
    f = [];
  for (let d = 0; d < a.length; ++d) {
    let m = a[d],
      h = d === a.length - 1,
      g = u === '/' ? r : r.slice(u.length) || '/',
      y = Og({ path: m.relativePath, caseSensitive: m.caseSensitive, end: h }, g);
    if (!y) return null;
    Object.assign(s, y.params);
    let w = m.route;
    f.push({ params: s, pathname: An([u, y.pathname]), pathnameBase: Mg(An([u, y.pathnameBase])), route: w }),
      y.pathnameBase !== '/' && (u = An([u, y.pathnameBase]));
  }
  return f;
}
function Og(i, r) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 });
  let [a, s] = Lg(i.path, i.caseSensitive, i.end),
    u = r.match(a);
  if (!u) return null;
  let f = u[0],
    d = f.replace(/(.)\/+$/, '$1'),
    m = u.slice(1);
  return {
    params: s.reduce((g, y, w) => {
      let { paramName: S, isOptional: O } = y;
      if (S === '*') {
        let P = m[w] || '';
        d = f.slice(0, f.length - P.length).replace(/(.)\/+$/, '$1');
      }
      const R = m[w];
      return O && !R ? (g[S] = void 0) : (g[S] = (R || '').replace(/%2F/g, '/')), g;
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: i,
  };
}
function Lg(i, r, a) {
  r === void 0 && (r = !1),
    a === void 0 && (a = !0),
    up(
      i === '*' || !i.endsWith('*') || i.endsWith('/*'),
      'Route path "' +
        i +
        '" will be treated as if it were ' +
        ('"' + i.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + i.replace(/\*$/, '/*') + '".')
    );
  let s = [],
    u =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, m, h) => (s.push({ paramName: m, isOptional: h != null }), h ? '/?([^\\/]+)?' : '/([^\\/]+)')
        );
  return (
    i.endsWith('*')
      ? (s.push({ paramName: '*' }), (u += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : a
      ? (u += '\\/*$')
      : i !== '' && i !== '/' && (u += '(?:(?=\\/|$))'),
    [new RegExp(u, r ? void 0 : 'i'), s]
  );
}
function Tg(i) {
  try {
    return i
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      up(
        !1,
        'The URL path "' +
          i +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + r + ').')
      ),
      i
    );
  }
}
function pp(i, r) {
  if (r === '/') return i;
  if (!i.toLowerCase().startsWith(r.toLowerCase())) return null;
  let a = r.endsWith('/') ? r.length - 1 : r.length,
    s = i.charAt(a);
  return s && s !== '/' ? null : i.slice(a) || '/';
}
function Rg(i, r) {
  r === void 0 && (r = '/');
  let { pathname: a, search: s = '', hash: u = '' } = typeof i == 'string' ? gi(i) : i;
  return { pathname: a ? (a.startsWith('/') ? a : Ig(a, r)) : r, search: jg(s), hash: Fg(u) };
}
function Ig(i, r) {
  let a = r.replace(/\/+$/, '').split('/');
  return (
    i.split('/').forEach((u) => {
      u === '..' ? a.length > 1 && a.pop() : u !== '.' && a.push(u);
    }),
    a.length > 1 ? a.join('/') : '/'
  );
}
function cl(i, r, a, s) {
  return (
    "Cannot include a '" +
    i +
    "' character in a manually specified " +
    ('`to.' + r + '` field [' + JSON.stringify(s) + '].  Please separate it out to the ') +
    ('`to.' + a + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function _g(i) {
  return i.filter((r, a) => a === 0 || (r.route.path && r.route.path.length > 0));
}
function Ag(i, r) {
  let a = _g(i);
  return r ? a.map((s, u) => (u === i.length - 1 ? s.pathname : s.pathnameBase)) : a.map((s) => s.pathnameBase);
}
function zg(i, r, a, s) {
  s === void 0 && (s = !1);
  let u;
  typeof i == 'string'
    ? (u = gi(i))
    : ((u = ui({}, i)),
      Ze(!u.pathname || !u.pathname.includes('?'), cl('?', 'pathname', 'search', u)),
      Ze(!u.pathname || !u.pathname.includes('#'), cl('#', 'pathname', 'hash', u)),
      Ze(!u.search || !u.search.includes('#'), cl('#', 'search', 'hash', u)));
  let f = i === '' || u.pathname === '',
    d = f ? '/' : u.pathname,
    m;
  if (d == null) m = a;
  else {
    let w = r.length - 1;
    if (!s && d.startsWith('..')) {
      let S = d.split('/');
      for (; S[0] === '..'; ) S.shift(), (w -= 1);
      u.pathname = S.join('/');
    }
    m = w >= 0 ? r[w] : '/';
  }
  let h = Rg(u, m),
    g = d && d !== '/' && d.endsWith('/'),
    y = (f || d === '.') && a.endsWith('/');
  return !h.pathname.endsWith('/') && (g || y) && (h.pathname += '/'), h;
}
const An = (i) => i.join('/').replace(/\/\/+/g, '/'),
  Mg = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  jg = (i) => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  Fg = (i) => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i);
function Dg(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  );
}
const mp = ['post', 'put', 'patch', 'delete'];
new Set(mp);
const $g = ['get', ...mp];
new Set($g);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ka() {
  return (
    (Ka = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (i[s] = a[s]);
          }
          return i;
        }),
    Ka.apply(this, arguments)
  );
}
const Vl = D.createContext(null),
  Ug = D.createContext(null),
  io = D.createContext(null),
  Bl = D.createContext(null),
  jn = D.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  hp = D.createContext(null);
function ao() {
  return D.useContext(Bl) != null;
}
function Hl() {
  return ao() || Ze(!1), D.useContext(Bl).location;
}
function gp(i) {
  D.useContext(io).static || D.useLayoutEffect(i);
}
function Vg() {
  let { isDataRoute: i } = D.useContext(jn);
  return i ? rv() : Bg();
}
function Bg() {
  ao() || Ze(!1);
  let i = D.useContext(Vl),
    { basename: r, future: a, navigator: s } = D.useContext(io),
    { matches: u } = D.useContext(jn),
    { pathname: f } = Hl(),
    d = JSON.stringify(Ag(u, a.v7_relativeSplatPath)),
    m = D.useRef(!1);
  return (
    gp(() => {
      m.current = !0;
    }),
    D.useCallback(
      function (g, y) {
        if ((y === void 0 && (y = {}), !m.current)) return;
        if (typeof g == 'number') {
          s.go(g);
          return;
        }
        let w = zg(g, JSON.parse(d), f, y.relative === 'path');
        i == null && r !== '/' && (w.pathname = w.pathname === '/' ? r : An([r, w.pathname])),
          (y.replace ? s.replace : s.push)(w, y.state, y);
      },
      [r, s, d, f, i]
    )
  );
}
const Hg = D.createContext(null);
function Wg(i) {
  let r = D.useContext(jn).outlet;
  return r && D.createElement(Hg.Provider, { value: i }, r);
}
function Yg(i, r) {
  return Kg(i);
}
function Kg(i, r, a, s) {
  ao() || Ze(!1);
  let { navigator: u } = D.useContext(io),
    { matches: f } = D.useContext(jn),
    d = f[f.length - 1],
    m = d ? d.params : {};
  d && d.pathname;
  let h = d ? d.pathnameBase : '/';
  d && d.route;
  let g = Hl(),
    y;
  y = g;
  let w = y.pathname || '/',
    S = w;
  if (h !== '/') {
    let P = h.replace(/^\//, '').split('/');
    S = '/' + w.replace(/^\//, '').split('/').slice(P.length).join('/');
  }
  let O = vg(i, { pathname: S });
  return Jg(
    O &&
      O.map((P) =>
        Object.assign({}, P, {
          params: Object.assign({}, m, P.params),
          pathname: An([h, u.encodeLocation ? u.encodeLocation(P.pathname).pathname : P.pathname]),
          pathnameBase:
            P.pathnameBase === '/'
              ? h
              : An([h, u.encodeLocation ? u.encodeLocation(P.pathnameBase).pathname : P.pathnameBase]),
        })
      ),
    f,
    a,
    s
  );
}
function qg() {
  let i = nv(),
    r = Dg(i) ? i.status + ' ' + i.statusText : i instanceof Error ? i.message : JSON.stringify(i),
    a = i instanceof Error ? i.stack : null,
    u = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return D.createElement(
    D.Fragment,
    null,
    D.createElement('h2', null, 'Unexpected Application Error!'),
    D.createElement('h3', { style: { fontStyle: 'italic' } }, r),
    a ? D.createElement('pre', { style: u }, a) : null,
    null
  );
}
const Qg = D.createElement(qg, null);
class Gg extends D.Component {
  constructor(r) {
    super(r), (this.state = { location: r.location, revalidation: r.revalidation, error: r.error });
  }
  static getDerivedStateFromError(r) {
    return { error: r };
  }
  static getDerivedStateFromProps(r, a) {
    return a.location !== r.location || (a.revalidation !== 'idle' && r.revalidation === 'idle')
      ? { error: r.error, location: r.location, revalidation: r.revalidation }
      : {
          error: r.error !== void 0 ? r.error : a.error,
          location: a.location,
          revalidation: r.revalidation || a.revalidation,
        };
  }
  componentDidCatch(r, a) {
    console.error('React Router caught the following error during render', r, a);
  }
  render() {
    return this.state.error !== void 0
      ? D.createElement(
          jn.Provider,
          { value: this.props.routeContext },
          D.createElement(hp.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Xg(i) {
  let { routeContext: r, match: a, children: s } = i,
    u = D.useContext(Vl);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = a.route.id),
    D.createElement(jn.Provider, { value: r }, s)
  );
}
function Jg(i, r, a, s) {
  var u;
  if ((r === void 0 && (r = []), a === void 0 && (a = null), s === void 0 && (s = null), i == null)) {
    var f;
    if ((f = a) != null && f.errors) i = a.matches;
    else return null;
  }
  let d = i,
    m = (u = a) == null ? void 0 : u.errors;
  if (m != null) {
    let y = d.findIndex((w) => w.route.id && m?.[w.route.id] !== void 0);
    y >= 0 || Ze(!1), (d = d.slice(0, Math.min(d.length, y + 1)));
  }
  let h = !1,
    g = -1;
  if (a && s && s.v7_partialHydration)
    for (let y = 0; y < d.length; y++) {
      let w = d[y];
      if (((w.route.HydrateFallback || w.route.hydrateFallbackElement) && (g = y), w.route.id)) {
        let { loaderData: S, errors: O } = a,
          R = w.route.loader && S[w.route.id] === void 0 && (!O || O[w.route.id] === void 0);
        if (w.route.lazy || R) {
          (h = !0), g >= 0 ? (d = d.slice(0, g + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((y, w, S) => {
    let O,
      R = !1,
      P = null,
      T = null;
    a &&
      ((O = m && w.route.id ? m[w.route.id] : void 0),
      (P = w.route.errorElement || Qg),
      h &&
        (g < 0 && S === 0
          ? (iv('route-fallback'), (R = !0), (T = null))
          : g === S && ((R = !0), (T = w.route.hydrateFallbackElement || null))));
    let Y = r.concat(d.slice(0, S + 1)),
      z = () => {
        let U;
        return (
          O
            ? (U = P)
            : R
            ? (U = T)
            : w.route.Component
            ? (U = D.createElement(w.route.Component, null))
            : w.route.element
            ? (U = w.route.element)
            : (U = y),
          D.createElement(Xg, {
            match: w,
            routeContext: { outlet: y, matches: Y, isDataRoute: a != null },
            children: U,
          })
        );
      };
    return a && (w.route.ErrorBoundary || w.route.errorElement || S === 0)
      ? D.createElement(Gg, {
          location: a.location,
          revalidation: a.revalidation,
          component: P,
          error: O,
          children: z(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
        })
      : z();
  }, null);
}
var vp = (function (i) {
    return (
      (i.UseBlocker = 'useBlocker'), (i.UseRevalidator = 'useRevalidator'), (i.UseNavigateStable = 'useNavigate'), i
    );
  })(vp || {}),
  yp = (function (i) {
    return (
      (i.UseBlocker = 'useBlocker'),
      (i.UseLoaderData = 'useLoaderData'),
      (i.UseActionData = 'useActionData'),
      (i.UseRouteError = 'useRouteError'),
      (i.UseNavigation = 'useNavigation'),
      (i.UseRouteLoaderData = 'useRouteLoaderData'),
      (i.UseMatches = 'useMatches'),
      (i.UseRevalidator = 'useRevalidator'),
      (i.UseNavigateStable = 'useNavigate'),
      (i.UseRouteId = 'useRouteId'),
      i
    );
  })(yp || {});
function Zg(i) {
  let r = D.useContext(Vl);
  return r || Ze(!1), r;
}
function ev(i) {
  let r = D.useContext(Ug);
  return r || Ze(!1), r;
}
function tv(i) {
  let r = D.useContext(jn);
  return r || Ze(!1), r;
}
function wp(i) {
  let r = tv(),
    a = r.matches[r.matches.length - 1];
  return a.route.id || Ze(!1), a.route.id;
}
function nv() {
  var i;
  let r = D.useContext(hp),
    a = ev(),
    s = wp();
  return r !== void 0 ? r : (i = a.errors) == null ? void 0 : i[s];
}
function rv() {
  let { router: i } = Zg(vp.UseNavigateStable),
    r = wp(yp.UseNavigateStable),
    a = D.useRef(!1);
  return (
    gp(() => {
      a.current = !0;
    }),
    D.useCallback(
      function (u, f) {
        f === void 0 && (f = {}),
          a.current && (typeof u == 'number' ? i.navigate(u) : i.navigate(u, Ka({ fromRouteId: r }, f)));
      },
      [i, r]
    )
  );
}
const dd = {};
function iv(i, r, a) {
  dd[i] || (dd[i] = !0);
}
function av(i) {
  return Wg(i.context);
}
function ov(i) {
  let {
    basename: r = '/',
    children: a = null,
    location: s,
    navigationType: u = Rn.Pop,
    navigator: f,
    static: d = !1,
    future: m,
  } = i;
  ao() && Ze(!1);
  let h = r.replace(/^\/*/, '/'),
    g = D.useMemo(
      () => ({ basename: h, navigator: f, static: d, future: Ka({ v7_relativeSplatPath: !1 }, m) }),
      [h, m, f, d]
    );
  typeof s == 'string' && (s = gi(s));
  let { pathname: y = '/', search: w = '', hash: S = '', state: O = null, key: R = 'default' } = s,
    P = D.useMemo(() => {
      let T = pp(y, h);
      return T == null ? null : { location: { pathname: T, search: w, hash: S, state: O, key: R }, navigationType: u };
    }, [h, y, w, S, O, R, u]);
  return P == null
    ? null
    : D.createElement(io.Provider, { value: g }, D.createElement(Bl.Provider, { children: a, value: P }));
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
 */ function bl(i) {
  return (
    i === void 0 && (i = ''),
    new URLSearchParams(
      typeof i == 'string' || Array.isArray(i) || i instanceof URLSearchParams
        ? i
        : Object.keys(i).reduce((r, a) => {
            let s = i[a];
            return r.concat(Array.isArray(s) ? s.map((u) => [a, u]) : [[a, s]]);
          }, [])
    )
  );
}
function sv(i, r) {
  let a = bl(i);
  return (
    r &&
      r.forEach((s, u) => {
        a.has(u) ||
          r.getAll(u).forEach((f) => {
            a.append(u, f);
          });
      }),
    a
  );
}
const lv = '6';
try {
  window.__reactRouterVersion = lv;
} catch {}
const uv = 'startTransition',
  pd = sg[uv];
function cv(i) {
  let { basename: r, children: a, future: s, window: u } = i,
    f = D.useRef();
  f.current == null && (f.current = mg({ window: u, v5Compat: !0 }));
  let d = f.current,
    [m, h] = D.useState({ action: d.action, location: d.location }),
    { v7_startTransition: g } = s || {},
    y = D.useCallback(
      (w) => {
        g && pd ? pd(() => h(w)) : h(w);
      },
      [h, g]
    );
  return (
    D.useLayoutEffect(() => d.listen(y), [d, y]),
    D.createElement(ov, {
      basename: r,
      children: a,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      future: s,
    })
  );
}
var md;
(function (i) {
  (i.UseScrollRestoration = 'useScrollRestoration'),
    (i.UseSubmit = 'useSubmit'),
    (i.UseSubmitFetcher = 'useSubmitFetcher'),
    (i.UseFetcher = 'useFetcher'),
    (i.useViewTransitionState = 'useViewTransitionState');
})(md || (md = {}));
var hd;
(function (i) {
  (i.UseFetcher = 'useFetcher'), (i.UseFetchers = 'useFetchers'), (i.UseScrollRestoration = 'useScrollRestoration');
})(hd || (hd = {}));
function q0(i) {
  let r = D.useRef(bl(i)),
    a = D.useRef(!1),
    s = Hl(),
    u = D.useMemo(() => sv(s.search, a.current ? null : r.current), [s.search]),
    f = Vg(),
    d = D.useCallback(
      (m, h) => {
        const g = bl(typeof m == 'function' ? m(u) : m);
        (a.current = !0), f('?' + g, h);
      },
      [f, u]
    );
  return [u, d];
}
const fv = 'modulepreload',
  dv = function (i) {
    return '/etc/designs/spa/snb-vrrr-fe/clientlibs/' + i;
  },
  gd = {},
  vi = function (r, a, s) {
    let u = Promise.resolve();
    if (a && a.length > 0) {
      let h = function (g) {
        return Promise.all(
          g.map((y) =>
            Promise.resolve(y).then(
              (w) => ({ status: 'fulfilled', value: w }),
              (w) => ({ status: 'rejected', reason: w })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const d = document.querySelector('meta[property=csp-nonce]'),
        m = d?.nonce || d?.getAttribute('nonce');
      u = h(
        a.map((g) => {
          if (((g = dv(g)), g in gd)) return;
          gd[g] = !0;
          const y = g.endsWith('.css'),
            w = y ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${w}`)) return;
          const S = document.createElement('link');
          if (
            ((S.rel = y ? 'stylesheet' : fv),
            y || (S.as = 'script'),
            (S.crossOrigin = ''),
            (S.href = g),
            m && S.setAttribute('nonce', m),
            document.head.appendChild(S),
            y)
          )
            return new Promise((O, R) => {
              S.addEventListener('load', O),
                S.addEventListener('error', () => R(new Error(`Unable to preload CSS for ${g}`)));
            });
        })
      );
    }
    function f(d) {
      const m = new Event('vite:preloadError', { cancelable: !0 });
      if (((m.payload = d), window.dispatchEvent(m), !m.defaultPrevented)) throw d;
    }
    return u.then((d) => {
      for (const m of d || []) m.status === 'rejected' && f(m.reason);
      return r().catch(f);
    });
  };
function vd(i, r) {
  var a = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(i);
    r &&
      (s = s.filter(function (u) {
        return Object.getOwnPropertyDescriptor(i, u).enumerable;
      })),
      a.push.apply(a, s);
  }
  return a;
}
function H(i) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? vd(Object(a), !0).forEach(function (s) {
          Me(i, s, a[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
      : vd(Object(a)).forEach(function (s) {
          Object.defineProperty(i, s, Object.getOwnPropertyDescriptor(a, s));
        });
  }
  return i;
}
function qa(i) {
  '@babel/helpers - typeof';
  return (
    (qa =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r && typeof Symbol == 'function' && r.constructor === Symbol && r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    qa(i)
  );
}
function pv(i, r) {
  if (!(i instanceof r)) throw new TypeError('Cannot call a class as a function');
}
function mv(i, r) {
  for (var a = 0; a < r.length; a++) {
    var s = r[a];
    (s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      'value' in s && (s.writable = !0),
      Object.defineProperty(i, s.key, s);
  }
}
function hv(i, r, a) {
  return r && mv(i.prototype, r), Object.defineProperty(i, 'prototype', { writable: !1 }), i;
}
function Me(i, r, a) {
  return (
    r in i ? Object.defineProperty(i, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (i[r] = a), i
  );
}
function Wl(i, r) {
  return vv(i) || wv(i, r) || Sp(i, r) || xv();
}
function yi(i) {
  return gv(i) || yv(i) || Sp(i) || Sv();
}
function gv(i) {
  if (Array.isArray(i)) return Cl(i);
}
function vv(i) {
  if (Array.isArray(i)) return i;
}
function yv(i) {
  if ((typeof Symbol < 'u' && i[Symbol.iterator] != null) || i['@@iterator'] != null) return Array.from(i);
}
function wv(i, r) {
  var a = i == null ? null : (typeof Symbol < 'u' && i[Symbol.iterator]) || i['@@iterator'];
  if (a != null) {
    var s = [],
      u = !0,
      f = !1,
      d,
      m;
    try {
      for (a = a.call(i); !(u = (d = a.next()).done) && (s.push(d.value), !(r && s.length === r)); u = !0);
    } catch (h) {
      (f = !0), (m = h);
    } finally {
      try {
        !u && a.return != null && a.return();
      } finally {
        if (f) throw m;
      }
    }
    return s;
  }
}
function Sp(i, r) {
  if (i) {
    if (typeof i == 'string') return Cl(i, r);
    var a = Object.prototype.toString.call(i).slice(8, -1);
    if ((a === 'Object' && i.constructor && (a = i.constructor.name), a === 'Map' || a === 'Set')) return Array.from(i);
    if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Cl(i, r);
  }
}
function Cl(i, r) {
  (r == null || r > i.length) && (r = i.length);
  for (var a = 0, s = new Array(r); a < r; a++) s[a] = i[a];
  return s;
}
function Sv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var yd = function () {},
  Yl = {},
  xp = {},
  kp = null,
  bp = { mark: yd, measure: yd };
try {
  typeof window < 'u' && (Yl = window),
    typeof document < 'u' && (xp = document),
    typeof MutationObserver < 'u' && (kp = MutationObserver),
    typeof performance < 'u' && (bp = performance);
} catch {}
var kv = Yl.navigator || {},
  wd = kv.userAgent,
  Sd = wd === void 0 ? '' : wd,
  mn = Yl,
  ke = xp,
  xd = kp,
  _a = bp;
mn.document;
var Yt =
    !!ke.documentElement &&
    !!ke.head &&
    typeof ke.addEventListener == 'function' &&
    typeof ke.createElement == 'function',
  Cp = ~Sd.indexOf('MSIE') || ~Sd.indexOf('Trident/'),
  Aa,
  za,
  Ma,
  ja,
  Fa,
  Bt = '___FONT_AWESOME___',
  El = 16,
  Ep = 'fa',
  Np = 'svg-inline--fa',
  zn = 'data-fa-i2svg',
  Nl = 'data-fa-pseudo-element',
  bv = 'data-fa-pseudo-element-pending',
  Kl = 'data-prefix',
  ql = 'data-icon',
  kd = 'fontawesome-i2svg',
  Cv = 'async',
  Ev = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  Pp = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  xe = 'classic',
  Le = 'sharp',
  Ql = [xe, Le];
function wi(i) {
  return new Proxy(i, {
    get: function (a, s) {
      return s in a ? a[s] : a[xe];
    },
  });
}
var ci = wi(
    ((Aa = {}),
    Me(Aa, xe, {
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
    Me(Aa, Le, {
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
    Aa)
  ),
  fi = wi(
    ((za = {}),
    Me(za, xe, { solid: 'fas', regular: 'far', light: 'fal', thin: 'fat', duotone: 'fad', brands: 'fab', kit: 'fak' }),
    Me(za, Le, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    za)
  ),
  di = wi(
    ((Ma = {}),
    Me(Ma, xe, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    Me(Ma, Le, { fass: 'fa-solid', fasr: 'fa-regular', fasl: 'fa-light', fast: 'fa-thin' }),
    Ma)
  ),
  Nv = wi(
    ((ja = {}),
    Me(ja, xe, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    Me(ja, Le, { 'fa-solid': 'fass', 'fa-regular': 'fasr', 'fa-light': 'fasl', 'fa-thin': 'fast' }),
    ja)
  ),
  Pv = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  Op = 'fa-layers-text',
  Ov = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Lv = wi(
    ((Fa = {}),
    Me(Fa, xe, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
    Me(Fa, Le, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    Fa)
  ),
  Lp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Tv = Lp.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Rv = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  In = { GROUP: 'duotone-group', SWAP_OPACITY: 'swap-opacity', PRIMARY: 'primary', SECONDARY: 'secondary' },
  pi = new Set();
Object.keys(fi[xe]).map(pi.add.bind(pi));
Object.keys(fi[Le]).map(pi.add.bind(pi));
var Iv = []
    .concat(Ql, yi(pi), [
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
      In.GROUP,
      In.SWAP_OPACITY,
      In.PRIMARY,
      In.SECONDARY,
    ])
    .concat(
      Lp.map(function (i) {
        return ''.concat(i, 'x');
      })
    )
    .concat(
      Tv.map(function (i) {
        return 'w-'.concat(i);
      })
    ),
  oi = mn.FontAwesomeConfig || {};
function _v(i) {
  var r = ke.querySelector('script[' + i + ']');
  if (r) return r.getAttribute(i);
}
function Av(i) {
  return i === '' ? !0 : i === 'false' ? !1 : i === 'true' ? !0 : i;
}
if (ke && typeof ke.querySelector == 'function') {
  var zv = [
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
  zv.forEach(function (i) {
    var r = Wl(i, 2),
      a = r[0],
      s = r[1],
      u = Av(_v(a));
    u != null && (oi[s] = u);
  });
}
var Tp = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: Ep,
  replacementClass: Np,
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
oi.familyPrefix && (oi.cssPrefix = oi.familyPrefix);
var gr = H(H({}, Tp), oi);
gr.autoReplaceSvg || (gr.observeMutations = !1);
var G = {};
Object.keys(Tp).forEach(function (i) {
  Object.defineProperty(G, i, {
    enumerable: !0,
    set: function (a) {
      (gr[i] = a),
        si.forEach(function (s) {
          return s(G);
        });
    },
    get: function () {
      return gr[i];
    },
  });
});
Object.defineProperty(G, 'familyPrefix', {
  enumerable: !0,
  set: function (r) {
    (gr.cssPrefix = r),
      si.forEach(function (a) {
        return a(G);
      });
  },
  get: function () {
    return gr.cssPrefix;
  },
});
mn.FontAwesomeConfig = G;
var si = [];
function Mv(i) {
  return (
    si.push(i),
    function () {
      si.splice(si.indexOf(i), 1);
    }
  );
}
var ur = El,
  _t = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function jv(i) {
  if (!(!i || !Yt)) {
    var r = ke.createElement('style');
    r.setAttribute('type', 'text/css'), (r.innerHTML = i);
    for (var a = ke.head.childNodes, s = null, u = a.length - 1; u > -1; u--) {
      var f = a[u],
        d = (f.tagName || '').toUpperCase();
      ['STYLE', 'LINK'].indexOf(d) > -1 && (s = f);
    }
    return ke.head.insertBefore(r, s), i;
  }
}
var Fv = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function mi() {
  for (var i = 12, r = ''; i-- > 0; ) r += Fv[(Math.random() * 62) | 0];
  return r;
}
function vr(i) {
  for (var r = [], a = (i || []).length >>> 0; a--; ) r[a] = i[a];
  return r;
}
function Gl(i) {
  return i.classList
    ? vr(i.classList)
    : (i.getAttribute('class') || '').split(' ').filter(function (r) {
        return r;
      });
}
function Rp(i) {
  return ''
    .concat(i)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function Dv(i) {
  return Object.keys(i || {})
    .reduce(function (r, a) {
      return r + ''.concat(a, '="').concat(Rp(i[a]), '" ');
    }, '')
    .trim();
}
function oo(i) {
  return Object.keys(i || {}).reduce(function (r, a) {
    return r + ''.concat(a, ': ').concat(i[a].trim(), ';');
  }, '');
}
function Xl(i) {
  return i.size !== _t.size || i.x !== _t.x || i.y !== _t.y || i.rotate !== _t.rotate || i.flipX || i.flipY;
}
function $v(i) {
  var r = i.transform,
    a = i.containerWidth,
    s = i.iconWidth,
    u = { transform: 'translate('.concat(a / 2, ' 256)') },
    f = 'translate('.concat(r.x * 32, ', ').concat(r.y * 32, ') '),
    d = 'scale('.concat((r.size / 16) * (r.flipX ? -1 : 1), ', ').concat((r.size / 16) * (r.flipY ? -1 : 1), ') '),
    m = 'rotate('.concat(r.rotate, ' 0 0)'),
    h = { transform: ''.concat(f, ' ').concat(d, ' ').concat(m) },
    g = { transform: 'translate('.concat((s / 2) * -1, ' -256)') };
  return { outer: u, inner: h, path: g };
}
function Uv(i) {
  var r = i.transform,
    a = i.width,
    s = a === void 0 ? El : a,
    u = i.height,
    f = u === void 0 ? El : u,
    d = '';
  return (
    Cp
      ? (d += 'translate('.concat(r.x / ur - s / 2, 'em, ').concat(r.y / ur - f / 2, 'em) '))
      : (d += 'translate(calc(-50% + '.concat(r.x / ur, 'em), calc(-50% + ').concat(r.y / ur, 'em)) ')),
    (d += 'scale('.concat((r.size / ur) * (r.flipX ? -1 : 1), ', ').concat((r.size / ur) * (r.flipY ? -1 : 1), ') ')),
    (d += 'rotate('.concat(r.rotate, 'deg) ')),
    d
  );
}
var Vv = `:root, :host {
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
function Ip() {
  var i = Ep,
    r = Np,
    a = G.cssPrefix,
    s = G.replacementClass,
    u = Vv;
  if (a !== i || s !== r) {
    var f = new RegExp('\\.'.concat(i, '\\-'), 'g'),
      d = new RegExp('\\--'.concat(i, '\\-'), 'g'),
      m = new RegExp('\\.'.concat(r), 'g');
    u = u.replace(f, '.'.concat(a, '-')).replace(d, '--'.concat(a, '-')).replace(m, '.'.concat(s));
  }
  return u;
}
var bd = !1;
function fl() {
  G.autoAddCss && !bd && (jv(Ip()), (bd = !0));
}
var Bv = {
    mixout: function () {
      return { dom: { css: Ip, insertCss: fl } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          fl();
        },
        beforeI2svg: function () {
          fl();
        },
      };
    },
  },
  Ht = mn || {};
Ht[Bt] || (Ht[Bt] = {});
Ht[Bt].styles || (Ht[Bt].styles = {});
Ht[Bt].hooks || (Ht[Bt].hooks = {});
Ht[Bt].shims || (Ht[Bt].shims = []);
var Pt = Ht[Bt],
  _p = [],
  Hv = function i() {
    ke.removeEventListener('DOMContentLoaded', i),
      (Qa = 1),
      _p.map(function (r) {
        return r();
      });
  },
  Qa = !1;
Yt &&
  ((Qa = (ke.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ke.readyState)),
  Qa || ke.addEventListener('DOMContentLoaded', Hv));
function Wv(i) {
  Yt && (Qa ? setTimeout(i, 0) : _p.push(i));
}
function Si(i) {
  var r = i.tag,
    a = i.attributes,
    s = a === void 0 ? {} : a,
    u = i.children,
    f = u === void 0 ? [] : u;
  return typeof i == 'string'
    ? Rp(i)
    : '<'.concat(r, ' ').concat(Dv(s), '>').concat(f.map(Si).join(''), '</').concat(r, '>');
}
function Cd(i, r, a) {
  if (i && i[r] && i[r][a]) return { prefix: r, iconName: a, icon: i[r][a] };
}
var dl = function (r, a, s, u) {
  var f = Object.keys(r),
    d = f.length,
    m = a,
    h,
    g,
    y;
  for (s === void 0 ? ((h = 1), (y = r[f[0]])) : ((h = 0), (y = s)); h < d; h++) (g = f[h]), (y = m(y, r[g], g, r));
  return y;
};
function Yv(i) {
  for (var r = [], a = 0, s = i.length; a < s; ) {
    var u = i.charCodeAt(a++);
    if (u >= 55296 && u <= 56319 && a < s) {
      var f = i.charCodeAt(a++);
      (f & 64512) == 56320 ? r.push(((u & 1023) << 10) + (f & 1023) + 65536) : (r.push(u), a--);
    } else r.push(u);
  }
  return r;
}
function Pl(i) {
  var r = Yv(i);
  return r.length === 1 ? r[0].toString(16) : null;
}
function Kv(i, r) {
  var a = i.length,
    s = i.charCodeAt(r),
    u;
  return s >= 55296 && s <= 56319 && a > r + 1 && ((u = i.charCodeAt(r + 1)), u >= 56320 && u <= 57343)
    ? (s - 55296) * 1024 + u - 56320 + 65536
    : s;
}
function Ed(i) {
  return Object.keys(i).reduce(function (r, a) {
    var s = i[a],
      u = !!s.icon;
    return u ? (r[s.iconName] = s.icon) : (r[a] = s), r;
  }, {});
}
function Ol(i, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    s = a.skipHooks,
    u = s === void 0 ? !1 : s,
    f = Ed(r);
  typeof Pt.hooks.addPack == 'function' && !u
    ? Pt.hooks.addPack(i, Ed(r))
    : (Pt.styles[i] = H(H({}, Pt.styles[i] || {}), f)),
    i === 'fas' && Ol('fa', r);
}
var Da,
  $a,
  Ua,
  dr = Pt.styles,
  qv = Pt.shims,
  Qv = ((Da = {}), Me(Da, xe, Object.values(di[xe])), Me(Da, Le, Object.values(di[Le])), Da),
  Jl = null,
  Ap = {},
  zp = {},
  Mp = {},
  jp = {},
  Fp = {},
  Gv = (($a = {}), Me($a, xe, Object.keys(ci[xe])), Me($a, Le, Object.keys(ci[Le])), $a);
function Xv(i) {
  return ~Iv.indexOf(i);
}
function Jv(i, r) {
  var a = r.split('-'),
    s = a[0],
    u = a.slice(1).join('-');
  return s === i && u !== '' && !Xv(u) ? u : null;
}
var Dp = function () {
  var r = function (f) {
    return dl(
      dr,
      function (d, m, h) {
        return (d[h] = dl(m, f, {})), d;
      },
      {}
    );
  };
  (Ap = r(function (u, f, d) {
    if ((f[3] && (u[f[3]] = d), f[2])) {
      var m = f[2].filter(function (h) {
        return typeof h == 'number';
      });
      m.forEach(function (h) {
        u[h.toString(16)] = d;
      });
    }
    return u;
  })),
    (zp = r(function (u, f, d) {
      if (((u[d] = d), f[2])) {
        var m = f[2].filter(function (h) {
          return typeof h == 'string';
        });
        m.forEach(function (h) {
          u[h] = d;
        });
      }
      return u;
    })),
    (Fp = r(function (u, f, d) {
      var m = f[2];
      return (
        (u[d] = d),
        m.forEach(function (h) {
          u[h] = d;
        }),
        u
      );
    }));
  var a = 'far' in dr || G.autoFetchSvg,
    s = dl(
      qv,
      function (u, f) {
        var d = f[0],
          m = f[1],
          h = f[2];
        return (
          m === 'far' && !a && (m = 'fas'),
          typeof d == 'string' && (u.names[d] = { prefix: m, iconName: h }),
          typeof d == 'number' && (u.unicodes[d.toString(16)] = { prefix: m, iconName: h }),
          u
        );
      },
      { names: {}, unicodes: {} }
    );
  (Mp = s.names), (jp = s.unicodes), (Jl = so(G.styleDefault, { family: G.familyDefault }));
};
Mv(function (i) {
  Jl = so(i.styleDefault, { family: G.familyDefault });
});
Dp();
function Zl(i, r) {
  return (Ap[i] || {})[r];
}
function Zv(i, r) {
  return (zp[i] || {})[r];
}
function _n(i, r) {
  return (Fp[i] || {})[r];
}
function $p(i) {
  return Mp[i] || { prefix: null, iconName: null };
}
function ey(i) {
  var r = jp[i],
    a = Zl('fas', i);
  return r || (a ? { prefix: 'fas', iconName: a } : null) || { prefix: null, iconName: null };
}
function hn() {
  return Jl;
}
var eu = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function so(i) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    a = r.family,
    s = a === void 0 ? xe : a,
    u = ci[s][i],
    f = fi[s][i] || fi[s][u],
    d = i in Pt.styles ? i : null;
  return f || d || null;
}
var Nd = ((Ua = {}), Me(Ua, xe, Object.keys(di[xe])), Me(Ua, Le, Object.keys(di[Le])), Ua);
function lo(i) {
  var r,
    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    s = a.skipLookups,
    u = s === void 0 ? !1 : s,
    f =
      ((r = {}),
      Me(r, xe, ''.concat(G.cssPrefix, '-').concat(xe)),
      Me(r, Le, ''.concat(G.cssPrefix, '-').concat(Le)),
      r),
    d = null,
    m = xe;
  (i.includes(f[xe]) ||
    i.some(function (g) {
      return Nd[xe].includes(g);
    })) &&
    (m = xe),
    (i.includes(f[Le]) ||
      i.some(function (g) {
        return Nd[Le].includes(g);
      })) &&
      (m = Le);
  var h = i.reduce(function (g, y) {
    var w = Jv(G.cssPrefix, y);
    if (
      (dr[y]
        ? ((y = Qv[m].includes(y) ? Nv[m][y] : y), (d = y), (g.prefix = y))
        : Gv[m].indexOf(y) > -1
        ? ((d = y), (g.prefix = so(y, { family: m })))
        : w
        ? (g.iconName = w)
        : y !== G.replacementClass && y !== f[xe] && y !== f[Le] && g.rest.push(y),
      !u && g.prefix && g.iconName)
    ) {
      var S = d === 'fa' ? $p(g.iconName) : {},
        O = _n(g.prefix, g.iconName);
      S.prefix && (d = null),
        (g.iconName = S.iconName || O || g.iconName),
        (g.prefix = S.prefix || g.prefix),
        g.prefix === 'far' && !dr.far && dr.fas && !G.autoFetchSvg && (g.prefix = 'fas');
    }
    return g;
  }, eu());
  return (
    (i.includes('fa-brands') || i.includes('fab')) && (h.prefix = 'fab'),
    (i.includes('fa-duotone') || i.includes('fad')) && (h.prefix = 'fad'),
    !h.prefix &&
      m === Le &&
      (dr.fass || G.autoFetchSvg) &&
      ((h.prefix = 'fass'), (h.iconName = _n(h.prefix, h.iconName) || h.iconName)),
    (h.prefix === 'fa' || d === 'fa') && (h.prefix = hn() || 'fas'),
    h
  );
}
var ty = (function () {
    function i() {
      pv(this, i), (this.definitions = {});
    }
    return (
      hv(i, [
        {
          key: 'add',
          value: function () {
            for (var a = this, s = arguments.length, u = new Array(s), f = 0; f < s; f++) u[f] = arguments[f];
            var d = u.reduce(this._pullDefinitions, {});
            Object.keys(d).forEach(function (m) {
              (a.definitions[m] = H(H({}, a.definitions[m] || {}), d[m])), Ol(m, d[m]);
              var h = di[xe][m];
              h && Ol(h, d[m]), Dp();
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
          value: function (a, s) {
            var u = s.prefix && s.iconName && s.icon ? { 0: s } : s;
            return (
              Object.keys(u).map(function (f) {
                var d = u[f],
                  m = d.prefix,
                  h = d.iconName,
                  g = d.icon,
                  y = g[2];
                a[m] || (a[m] = {}),
                  y.length > 0 &&
                    y.forEach(function (w) {
                      typeof w == 'string' && (a[m][w] = g);
                    }),
                  (a[m][h] = g);
              }),
              a
            );
          },
        },
      ]),
      i
    );
  })(),
  Pd = [],
  pr = {},
  hr = {},
  ny = Object.keys(hr);
function ry(i, r) {
  var a = r.mixoutsTo;
  return (
    (Pd = i),
    (pr = {}),
    Object.keys(hr).forEach(function (s) {
      ny.indexOf(s) === -1 && delete hr[s];
    }),
    Pd.forEach(function (s) {
      var u = s.mixout ? s.mixout() : {};
      if (
        (Object.keys(u).forEach(function (d) {
          typeof u[d] == 'function' && (a[d] = u[d]),
            qa(u[d]) === 'object' &&
              Object.keys(u[d]).forEach(function (m) {
                a[d] || (a[d] = {}), (a[d][m] = u[d][m]);
              });
        }),
        s.hooks)
      ) {
        var f = s.hooks();
        Object.keys(f).forEach(function (d) {
          pr[d] || (pr[d] = []), pr[d].push(f[d]);
        });
      }
      s.provides && s.provides(hr);
    }),
    a
  );
}
function Ll(i, r) {
  for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++) s[u - 2] = arguments[u];
  var f = pr[i] || [];
  return (
    f.forEach(function (d) {
      r = d.apply(null, [r].concat(s));
    }),
    r
  );
}
function Mn(i) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) a[s - 1] = arguments[s];
  var u = pr[i] || [];
  u.forEach(function (f) {
    f.apply(null, a);
  });
}
function Wt() {
  var i = arguments[0],
    r = Array.prototype.slice.call(arguments, 1);
  return hr[i] ? hr[i].apply(null, r) : void 0;
}
function Tl(i) {
  i.prefix === 'fa' && (i.prefix = 'fas');
  var r = i.iconName,
    a = i.prefix || hn();
  if (r) return (r = _n(a, r) || r), Cd(Up.definitions, a, r) || Cd(Pt.styles, a, r);
}
var Up = new ty(),
  iy = function () {
    (G.autoReplaceSvg = !1), (G.observeMutations = !1), Mn('noAuto');
  },
  ay = {
    i2svg: function () {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Yt
        ? (Mn('beforeI2svg', r), Wt('pseudoElements2svg', r), Wt('i2svg', r))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        a = r.autoReplaceSvgRoot;
      G.autoReplaceSvg === !1 && (G.autoReplaceSvg = !0),
        (G.observeMutations = !0),
        Wv(function () {
          sy({ autoReplaceSvgRoot: a }), Mn('watch', r);
        });
    },
  },
  oy = {
    icon: function (r) {
      if (r === null) return null;
      if (qa(r) === 'object' && r.prefix && r.iconName)
        return { prefix: r.prefix, iconName: _n(r.prefix, r.iconName) || r.iconName };
      if (Array.isArray(r) && r.length === 2) {
        var a = r[1].indexOf('fa-') === 0 ? r[1].slice(3) : r[1],
          s = so(r[0]);
        return { prefix: s, iconName: _n(s, a) || a };
      }
      if (typeof r == 'string' && (r.indexOf(''.concat(G.cssPrefix, '-')) > -1 || r.match(Pv))) {
        var u = lo(r.split(' '), { skipLookups: !0 });
        return { prefix: u.prefix || hn(), iconName: _n(u.prefix, u.iconName) || u.iconName };
      }
      if (typeof r == 'string') {
        var f = hn();
        return { prefix: f, iconName: _n(f, r) || r };
      }
    },
  },
  dt = { noAuto: iy, config: G, dom: ay, parse: oy, library: Up, findIconDefinition: Tl, toHtml: Si },
  sy = function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = r.autoReplaceSvgRoot,
      s = a === void 0 ? ke : a;
    (Object.keys(Pt.styles).length > 0 || G.autoFetchSvg) && Yt && G.autoReplaceSvg && dt.dom.i2svg({ node: s });
  };
function uo(i, r) {
  return (
    Object.defineProperty(i, 'abstract', { get: r }),
    Object.defineProperty(i, 'html', {
      get: function () {
        return i.abstract.map(function (s) {
          return Si(s);
        });
      },
    }),
    Object.defineProperty(i, 'node', {
      get: function () {
        if (Yt) {
          var s = ke.createElement('div');
          return (s.innerHTML = i.html), s.children;
        }
      },
    }),
    i
  );
}
function ly(i) {
  var r = i.children,
    a = i.main,
    s = i.mask,
    u = i.attributes,
    f = i.styles,
    d = i.transform;
  if (Xl(d) && a.found && !s.found) {
    var m = a.width,
      h = a.height,
      g = { x: m / h / 2, y: 0.5 };
    u.style = oo(
      H(H({}, f), {}, { 'transform-origin': ''.concat(g.x + d.x / 16, 'em ').concat(g.y + d.y / 16, 'em') })
    );
  }
  return [{ tag: 'svg', attributes: u, children: r }];
}
function uy(i) {
  var r = i.prefix,
    a = i.iconName,
    s = i.children,
    u = i.attributes,
    f = i.symbol,
    d = f === !0 ? ''.concat(r, '-').concat(G.cssPrefix, '-').concat(a) : f;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: H(H({}, u), {}, { id: d }), children: s }],
    },
  ];
}
function tu(i) {
  var r = i.icons,
    a = r.main,
    s = r.mask,
    u = i.prefix,
    f = i.iconName,
    d = i.transform,
    m = i.symbol,
    h = i.title,
    g = i.maskId,
    y = i.titleId,
    w = i.extra,
    S = i.watchable,
    O = S === void 0 ? !1 : S,
    R = s.found ? s : a,
    P = R.width,
    T = R.height,
    Y = u === 'fak',
    z = [G.replacementClass, f ? ''.concat(G.cssPrefix, '-').concat(f) : '']
      .filter(function (Ee) {
        return w.classes.indexOf(Ee) === -1;
      })
      .filter(function (Ee) {
        return Ee !== '' || !!Ee;
      })
      .concat(w.classes)
      .join(' '),
    U = {
      children: [],
      attributes: H(
        H({}, w.attributes),
        {},
        {
          'data-prefix': u,
          'data-icon': f,
          class: z,
          role: w.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(P, ' ').concat(T),
        }
      ),
    },
    $ = Y && !~w.classes.indexOf('fa-fw') ? { width: ''.concat((P / T) * 16 * 0.0625, 'em') } : {};
  O && (U.attributes[zn] = ''),
    h &&
      (U.children.push({
        tag: 'title',
        attributes: { id: U.attributes['aria-labelledby'] || 'title-'.concat(y || mi()) },
        children: [h],
      }),
      delete U.attributes.title);
  var L = H(
      H({}, U),
      {},
      { prefix: u, iconName: f, main: a, mask: s, maskId: g, transform: d, symbol: m, styles: H(H({}, $), w.styles) }
    ),
    J =
      s.found && a.found
        ? Wt('generateAbstractMask', L) || { children: [], attributes: {} }
        : Wt('generateAbstractIcon', L) || { children: [], attributes: {} },
    Z = J.children,
    he = J.attributes;
  return (L.children = Z), (L.attributes = he), m ? uy(L) : ly(L);
}
function Od(i) {
  var r = i.content,
    a = i.width,
    s = i.height,
    u = i.transform,
    f = i.title,
    d = i.extra,
    m = i.watchable,
    h = m === void 0 ? !1 : m,
    g = H(H(H({}, d.attributes), f ? { title: f } : {}), {}, { class: d.classes.join(' ') });
  h && (g[zn] = '');
  var y = H({}, d.styles);
  Xl(u) && ((y.transform = Uv({ transform: u, width: a, height: s })), (y['-webkit-transform'] = y.transform));
  var w = oo(y);
  w.length > 0 && (g.style = w);
  var S = [];
  return (
    S.push({ tag: 'span', attributes: g, children: [r] }),
    f && S.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [f] }),
    S
  );
}
function cy(i) {
  var r = i.content,
    a = i.title,
    s = i.extra,
    u = H(H(H({}, s.attributes), a ? { title: a } : {}), {}, { class: s.classes.join(' ') }),
    f = oo(s.styles);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: 'span', attributes: u, children: [r] }),
    a && d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [a] }),
    d
  );
}
var pl = Pt.styles;
function Rl(i) {
  var r = i[0],
    a = i[1],
    s = i.slice(4),
    u = Wl(s, 1),
    f = u[0],
    d = null;
  return (
    Array.isArray(f)
      ? (d = {
          tag: 'g',
          attributes: { class: ''.concat(G.cssPrefix, '-').concat(In.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: { class: ''.concat(G.cssPrefix, '-').concat(In.SECONDARY), fill: 'currentColor', d: f[0] },
            },
            {
              tag: 'path',
              attributes: { class: ''.concat(G.cssPrefix, '-').concat(In.PRIMARY), fill: 'currentColor', d: f[1] },
            },
          ],
        })
      : (d = { tag: 'path', attributes: { fill: 'currentColor', d: f } }),
    { found: !0, width: r, height: a, icon: d }
  );
}
var fy = { found: !1, width: 512, height: 512 };
function dy(i, r) {
  !Pp &&
    !G.showMissingIcons &&
    i &&
    console.error('Icon with name "'.concat(i, '" and prefix "').concat(r, '" is missing.'));
}
function Il(i, r) {
  var a = r;
  return (
    r === 'fa' && G.styleDefault !== null && (r = hn()),
    new Promise(function (s, u) {
      if ((Wt('missingIconAbstract'), a === 'fa')) {
        var f = $p(i) || {};
        (i = f.iconName || i), (r = f.prefix || r);
      }
      if (i && r && pl[r] && pl[r][i]) {
        var d = pl[r][i];
        return s(Rl(d));
      }
      dy(i, r), s(H(H({}, fy), {}, { icon: G.showMissingIcons && i ? Wt('missingIconAbstract') || {} : {} }));
    })
  );
}
var Ld = function () {},
  _l = G.measurePerformance && _a && _a.mark && _a.measure ? _a : { mark: Ld, measure: Ld },
  ai = 'FA "6.5.2"',
  py = function (r) {
    return (
      _l.mark(''.concat(ai, ' ').concat(r, ' begins')),
      function () {
        return Vp(r);
      }
    );
  },
  Vp = function (r) {
    _l.mark(''.concat(ai, ' ').concat(r, ' ends')),
      _l.measure(
        ''.concat(ai, ' ').concat(r),
        ''.concat(ai, ' ').concat(r, ' begins'),
        ''.concat(ai, ' ').concat(r, ' ends')
      );
  },
  nu = { begin: py, end: Vp },
  Ha = function () {};
function Td(i) {
  var r = i.getAttribute ? i.getAttribute(zn) : null;
  return typeof r == 'string';
}
function my(i) {
  var r = i.getAttribute ? i.getAttribute(Kl) : null,
    a = i.getAttribute ? i.getAttribute(ql) : null;
  return r && a;
}
function hy(i) {
  return i && i.classList && i.classList.contains && i.classList.contains(G.replacementClass);
}
function gy() {
  if (G.autoReplaceSvg === !0) return Wa.replace;
  var i = Wa[G.autoReplaceSvg];
  return i || Wa.replace;
}
function vy(i) {
  return ke.createElementNS('http://www.w3.org/2000/svg', i);
}
function yy(i) {
  return ke.createElement(i);
}
function Bp(i) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    a = r.ceFn,
    s = a === void 0 ? (i.tag === 'svg' ? vy : yy) : a;
  if (typeof i == 'string') return ke.createTextNode(i);
  var u = s(i.tag);
  Object.keys(i.attributes || []).forEach(function (d) {
    u.setAttribute(d, i.attributes[d]);
  });
  var f = i.children || [];
  return (
    f.forEach(function (d) {
      u.appendChild(Bp(d, { ceFn: s }));
    }),
    u
  );
}
function wy(i) {
  var r = ' '.concat(i.outerHTML, ' ');
  return (r = ''.concat(r, 'Font Awesome fontawesome.com ')), r;
}
var Wa = {
  replace: function (r) {
    var a = r[0];
    if (a.parentNode)
      if (
        (r[1].forEach(function (u) {
          a.parentNode.insertBefore(Bp(u), a);
        }),
        a.getAttribute(zn) === null && G.keepOriginalSource)
      ) {
        var s = ke.createComment(wy(a));
        a.parentNode.replaceChild(s, a);
      } else a.remove();
  },
  nest: function (r) {
    var a = r[0],
      s = r[1];
    if (~Gl(a).indexOf(G.replacementClass)) return Wa.replace(r);
    var u = new RegExp(''.concat(G.cssPrefix, '-.*'));
    if ((delete s[0].attributes.id, s[0].attributes.class)) {
      var f = s[0].attributes.class.split(' ').reduce(
        function (m, h) {
          return h === G.replacementClass || h.match(u) ? m.toSvg.push(h) : m.toNode.push(h), m;
        },
        { toNode: [], toSvg: [] }
      );
      (s[0].attributes.class = f.toSvg.join(' ')),
        f.toNode.length === 0 ? a.removeAttribute('class') : a.setAttribute('class', f.toNode.join(' '));
    }
    var d = s.map(function (m) {
      return Si(m);
    }).join(`
`);
    a.setAttribute(zn, ''), (a.innerHTML = d);
  },
};
function Rd(i) {
  i();
}
function Hp(i, r) {
  var a = typeof r == 'function' ? r : Ha;
  if (i.length === 0) a();
  else {
    var s = Rd;
    G.mutateApproach === Cv && (s = mn.requestAnimationFrame || Rd),
      s(function () {
        var u = gy(),
          f = nu.begin('mutate');
        i.map(u), f(), a();
      });
  }
}
var ru = !1;
function Wp() {
  ru = !0;
}
function Al() {
  ru = !1;
}
var Ga = null;
function Id(i) {
  if (xd && G.observeMutations) {
    var r = i.treeCallback,
      a = r === void 0 ? Ha : r,
      s = i.nodeCallback,
      u = s === void 0 ? Ha : s,
      f = i.pseudoElementsCallback,
      d = f === void 0 ? Ha : f,
      m = i.observeMutationsRoot,
      h = m === void 0 ? ke : m;
    (Ga = new xd(function (g) {
      if (!ru) {
        var y = hn();
        vr(g).forEach(function (w) {
          if (
            (w.type === 'childList' &&
              w.addedNodes.length > 0 &&
              !Td(w.addedNodes[0]) &&
              (G.searchPseudoElements && d(w.target), a(w.target)),
            w.type === 'attributes' && w.target.parentNode && G.searchPseudoElements && d(w.target.parentNode),
            w.type === 'attributes' && Td(w.target) && ~Rv.indexOf(w.attributeName))
          )
            if (w.attributeName === 'class' && my(w.target)) {
              var S = lo(Gl(w.target)),
                O = S.prefix,
                R = S.iconName;
              w.target.setAttribute(Kl, O || y), R && w.target.setAttribute(ql, R);
            } else hy(w.target) && u(w.target);
        });
      }
    })),
      Yt && Ga.observe(h, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
  }
}
function Sy() {
  Ga && Ga.disconnect();
}
function xy(i) {
  var r = i.getAttribute('style'),
    a = [];
  return (
    r &&
      (a = r.split(';').reduce(function (s, u) {
        var f = u.split(':'),
          d = f[0],
          m = f.slice(1);
        return d && m.length > 0 && (s[d] = m.join(':').trim()), s;
      }, {})),
    a
  );
}
function ky(i) {
  var r = i.getAttribute('data-prefix'),
    a = i.getAttribute('data-icon'),
    s = i.innerText !== void 0 ? i.innerText.trim() : '',
    u = lo(Gl(i));
  return (
    u.prefix || (u.prefix = hn()),
    r && a && ((u.prefix = r), (u.iconName = a)),
    (u.iconName && u.prefix) ||
      (u.prefix && s.length > 0 && (u.iconName = Zv(u.prefix, i.innerText) || Zl(u.prefix, Pl(i.innerText))),
      !u.iconName &&
        G.autoFetchSvg &&
        i.firstChild &&
        i.firstChild.nodeType === Node.TEXT_NODE &&
        (u.iconName = i.firstChild.data)),
    u
  );
}
function by(i) {
  var r = vr(i.attributes).reduce(function (u, f) {
      return u.name !== 'class' && u.name !== 'style' && (u[f.name] = f.value), u;
    }, {}),
    a = i.getAttribute('title'),
    s = i.getAttribute('data-fa-title-id');
  return (
    G.autoA11y &&
      (a
        ? (r['aria-labelledby'] = ''.concat(G.replacementClass, '-title-').concat(s || mi()))
        : ((r['aria-hidden'] = 'true'), (r.focusable = 'false'))),
    r
  );
}
function Cy() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: _t,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function _d(i) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 },
    a = ky(i),
    s = a.iconName,
    u = a.prefix,
    f = a.rest,
    d = by(i),
    m = Ll('parseNodeAttributes', {}, i),
    h = r.styleParser ? xy(i) : [];
  return H(
    {
      iconName: s,
      title: i.getAttribute('title'),
      titleId: i.getAttribute('data-fa-title-id'),
      prefix: u,
      transform: _t,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: f, styles: h, attributes: d },
    },
    m
  );
}
var Ey = Pt.styles;
function Yp(i) {
  var r = G.autoReplaceSvg === 'nest' ? _d(i, { styleParser: !1 }) : _d(i);
  return ~r.extra.classes.indexOf(Op) ? Wt('generateLayersText', i, r) : Wt('generateSvgReplacementMutation', i, r);
}
var gn = new Set();
Ql.map(function (i) {
  gn.add('fa-'.concat(i));
});
Object.keys(ci[xe]).map(gn.add.bind(gn));
Object.keys(ci[Le]).map(gn.add.bind(gn));
gn = yi(gn);
function Ad(i) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Yt) return Promise.resolve();
  var a = ke.documentElement.classList,
    s = function (w) {
      return a.add(''.concat(kd, '-').concat(w));
    },
    u = function (w) {
      return a.remove(''.concat(kd, '-').concat(w));
    },
    f = G.autoFetchSvg
      ? gn
      : Ql.map(function (y) {
          return 'fa-'.concat(y);
        }).concat(Object.keys(Ey));
  f.includes('fa') || f.push('fa');
  var d = ['.'.concat(Op, ':not([').concat(zn, '])')]
    .concat(
      f.map(function (y) {
        return '.'.concat(y, ':not([').concat(zn, '])');
      })
    )
    .join(', ');
  if (d.length === 0) return Promise.resolve();
  var m = [];
  try {
    m = vr(i.querySelectorAll(d));
  } catch {}
  if (m.length > 0) s('pending'), u('complete');
  else return Promise.resolve();
  var h = nu.begin('onTree'),
    g = m.reduce(function (y, w) {
      try {
        var S = Yp(w);
        S && y.push(S);
      } catch (O) {
        Pp || (O.name === 'MissingIcon' && console.error(O));
      }
      return y;
    }, []);
  return new Promise(function (y, w) {
    Promise.all(g)
      .then(function (S) {
        Hp(S, function () {
          s('active'), s('complete'), u('pending'), typeof r == 'function' && r(), h(), y();
        });
      })
      .catch(function (S) {
        h(), w(S);
      });
  });
}
function Ny(i) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Yp(i).then(function (a) {
    a && Hp([a], r);
  });
}
function Py(i) {
  return function (r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = (r || {}).icon ? r : Tl(r || {}),
      u = a.mask;
    return u && (u = (u || {}).icon ? u : Tl(u || {})), i(s, H(H({}, a), {}, { mask: u }));
  };
}
var Oy = function (r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = a.transform,
      u = s === void 0 ? _t : s,
      f = a.symbol,
      d = f === void 0 ? !1 : f,
      m = a.mask,
      h = m === void 0 ? null : m,
      g = a.maskId,
      y = g === void 0 ? null : g,
      w = a.title,
      S = w === void 0 ? null : w,
      O = a.titleId,
      R = O === void 0 ? null : O,
      P = a.classes,
      T = P === void 0 ? [] : P,
      Y = a.attributes,
      z = Y === void 0 ? {} : Y,
      U = a.styles,
      $ = U === void 0 ? {} : U;
    if (r) {
      var L = r.prefix,
        J = r.iconName,
        Z = r.icon;
      return uo(H({ type: 'icon' }, r), function () {
        return (
          Mn('beforeDOMElementCreation', { iconDefinition: r, params: a }),
          G.autoA11y &&
            (S
              ? (z['aria-labelledby'] = ''.concat(G.replacementClass, '-title-').concat(R || mi()))
              : ((z['aria-hidden'] = 'true'), (z.focusable = 'false'))),
          tu({
            icons: { main: Rl(Z), mask: h ? Rl(h.icon) : { found: !1, width: null, height: null, icon: {} } },
            prefix: L,
            iconName: J,
            transform: H(H({}, _t), u),
            symbol: d,
            title: S,
            maskId: y,
            titleId: R,
            extra: { attributes: z, styles: $, classes: T },
          })
        );
      });
    }
  },
  Ly = {
    mixout: function () {
      return { icon: Py(Oy) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (a) {
          return (a.treeCallback = Ad), (a.nodeCallback = Ny), a;
        },
      };
    },
    provides: function (r) {
      (r.i2svg = function (a) {
        var s = a.node,
          u = s === void 0 ? ke : s,
          f = a.callback,
          d = f === void 0 ? function () {} : f;
        return Ad(u, d);
      }),
        (r.generateSvgReplacementMutation = function (a, s) {
          var u = s.iconName,
            f = s.title,
            d = s.titleId,
            m = s.prefix,
            h = s.transform,
            g = s.symbol,
            y = s.mask,
            w = s.maskId,
            S = s.extra;
          return new Promise(function (O, R) {
            Promise.all([
              Il(u, m),
              y.iconName ? Il(y.iconName, y.prefix) : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
            ])
              .then(function (P) {
                var T = Wl(P, 2),
                  Y = T[0],
                  z = T[1];
                O([
                  a,
                  tu({
                    icons: { main: Y, mask: z },
                    prefix: m,
                    iconName: u,
                    transform: h,
                    symbol: g,
                    maskId: w,
                    title: f,
                    titleId: d,
                    extra: S,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(R);
          });
        }),
        (r.generateAbstractIcon = function (a) {
          var s = a.children,
            u = a.attributes,
            f = a.main,
            d = a.transform,
            m = a.styles,
            h = oo(m);
          h.length > 0 && (u.style = h);
          var g;
          return (
            Xl(d) &&
              (g = Wt('generateAbstractTransformGrouping', {
                main: f,
                transform: d,
                containerWidth: f.width,
                iconWidth: f.width,
              })),
            s.push(g || f.icon),
            { children: s, attributes: u }
          );
        });
    },
  },
  Ty = {
    mixout: function () {
      return {
        layer: function (a) {
          var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            u = s.classes,
            f = u === void 0 ? [] : u;
          return uo({ type: 'layer' }, function () {
            Mn('beforeDOMElementCreation', { assembler: a, params: s });
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
                  attributes: { class: [''.concat(G.cssPrefix, '-layers')].concat(yi(f)).join(' ') },
                  children: d,
                },
              ]
            );
          });
        },
      };
    },
  },
  Ry = {
    mixout: function () {
      return {
        counter: function (a) {
          var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            u = s.title,
            f = u === void 0 ? null : u,
            d = s.classes,
            m = d === void 0 ? [] : d,
            h = s.attributes,
            g = h === void 0 ? {} : h,
            y = s.styles,
            w = y === void 0 ? {} : y;
          return uo({ type: 'counter', content: a }, function () {
            return (
              Mn('beforeDOMElementCreation', { content: a, params: s }),
              cy({
                content: a.toString(),
                title: f,
                extra: { attributes: g, styles: w, classes: [''.concat(G.cssPrefix, '-layers-counter')].concat(yi(m)) },
              })
            );
          });
        },
      };
    },
  },
  Iy = {
    mixout: function () {
      return {
        text: function (a) {
          var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            u = s.transform,
            f = u === void 0 ? _t : u,
            d = s.title,
            m = d === void 0 ? null : d,
            h = s.classes,
            g = h === void 0 ? [] : h,
            y = s.attributes,
            w = y === void 0 ? {} : y,
            S = s.styles,
            O = S === void 0 ? {} : S;
          return uo({ type: 'text', content: a }, function () {
            return (
              Mn('beforeDOMElementCreation', { content: a, params: s }),
              Od({
                content: a,
                transform: H(H({}, _t), f),
                title: m,
                extra: { attributes: w, styles: O, classes: [''.concat(G.cssPrefix, '-layers-text')].concat(yi(g)) },
              })
            );
          });
        },
      };
    },
    provides: function (r) {
      r.generateLayersText = function (a, s) {
        var u = s.title,
          f = s.transform,
          d = s.extra,
          m = null,
          h = null;
        if (Cp) {
          var g = parseInt(getComputedStyle(a).fontSize, 10),
            y = a.getBoundingClientRect();
          (m = y.width / g), (h = y.height / g);
        }
        return (
          G.autoA11y && !u && (d.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            a,
            Od({ content: a.innerHTML, width: m, height: h, transform: f, title: u, extra: d, watchable: !0 }),
          ])
        );
      };
    },
  },
  _y = new RegExp('"', 'ug'),
  zd = [1105920, 1112319];
function Ay(i) {
  var r = i.replace(_y, ''),
    a = Kv(r, 0),
    s = a >= zd[0] && a <= zd[1],
    u = r.length === 2 ? r[0] === r[1] : !1;
  return { value: Pl(u ? r[0] : r), isSecondary: s || u };
}
function Md(i, r) {
  var a = ''.concat(bv).concat(r.replace(':', '-'));
  return new Promise(function (s, u) {
    if (i.getAttribute(a) !== null) return s();
    var f = vr(i.children),
      d = f.filter(function (Z) {
        return Z.getAttribute(Nl) === r;
      })[0],
      m = mn.getComputedStyle(i, r),
      h = m.getPropertyValue('font-family').match(Ov),
      g = m.getPropertyValue('font-weight'),
      y = m.getPropertyValue('content');
    if (d && !h) return i.removeChild(d), s();
    if (h && y !== 'none' && y !== '') {
      var w = m.getPropertyValue('content'),
        S = ~['Sharp'].indexOf(h[2]) ? Le : xe,
        O = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(h[2])
          ? fi[S][h[2].toLowerCase()]
          : Lv[S][g],
        R = Ay(w),
        P = R.value,
        T = R.isSecondary,
        Y = h[0].startsWith('FontAwesome'),
        z = Zl(O, P),
        U = z;
      if (Y) {
        var $ = ey(P);
        $.iconName && $.prefix && ((z = $.iconName), (O = $.prefix));
      }
      if (z && !T && (!d || d.getAttribute(Kl) !== O || d.getAttribute(ql) !== U)) {
        i.setAttribute(a, U), d && i.removeChild(d);
        var L = Cy(),
          J = L.extra;
        (J.attributes[Nl] = r),
          Il(z, O)
            .then(function (Z) {
              var he = tu(
                  H(H({}, L), {}, { icons: { main: Z, mask: eu() }, prefix: O, iconName: U, extra: J, watchable: !0 })
                ),
                Ee = ke.createElementNS('http://www.w3.org/2000/svg', 'svg');
              r === '::before' ? i.insertBefore(Ee, i.firstChild) : i.appendChild(Ee),
                (Ee.outerHTML = he.map(function (Be) {
                  return Si(Be);
                }).join(`
`)),
                i.removeAttribute(a),
                s();
            })
            .catch(u);
      } else s();
    } else s();
  });
}
function zy(i) {
  return Promise.all([Md(i, '::before'), Md(i, '::after')]);
}
function My(i) {
  return (
    i.parentNode !== document.head &&
    !~Ev.indexOf(i.tagName.toUpperCase()) &&
    !i.getAttribute(Nl) &&
    (!i.parentNode || i.parentNode.tagName !== 'svg')
  );
}
function jd(i) {
  if (Yt)
    return new Promise(function (r, a) {
      var s = vr(i.querySelectorAll('*')).filter(My).map(zy),
        u = nu.begin('searchPseudoElements');
      Wp(),
        Promise.all(s)
          .then(function () {
            u(), Al(), r();
          })
          .catch(function () {
            u(), Al(), a();
          });
    });
}
var jy = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (a) {
          return (a.pseudoElementsCallback = jd), a;
        },
      };
    },
    provides: function (r) {
      r.pseudoElements2svg = function (a) {
        var s = a.node,
          u = s === void 0 ? ke : s;
        G.searchPseudoElements && jd(u);
      };
    },
  },
  Fd = !1,
  Fy = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Wp(), (Fd = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Id(Ll('mutationObserverCallbacks', {}));
        },
        noAuto: function () {
          Sy();
        },
        watch: function (a) {
          var s = a.observeMutationsRoot;
          Fd ? Al() : Id(Ll('mutationObserverCallbacks', { observeMutationsRoot: s }));
        },
      };
    },
  },
  Dd = function (r) {
    var a = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return r
      .toLowerCase()
      .split(' ')
      .reduce(function (s, u) {
        var f = u.toLowerCase().split('-'),
          d = f[0],
          m = f.slice(1).join('-');
        if (d && m === 'h') return (s.flipX = !0), s;
        if (d && m === 'v') return (s.flipY = !0), s;
        if (((m = parseFloat(m)), isNaN(m))) return s;
        switch (d) {
          case 'grow':
            s.size = s.size + m;
            break;
          case 'shrink':
            s.size = s.size - m;
            break;
          case 'left':
            s.x = s.x - m;
            break;
          case 'right':
            s.x = s.x + m;
            break;
          case 'up':
            s.y = s.y - m;
            break;
          case 'down':
            s.y = s.y + m;
            break;
          case 'rotate':
            s.rotate = s.rotate + m;
            break;
        }
        return s;
      }, a);
  },
  Dy = {
    mixout: function () {
      return {
        parse: {
          transform: function (a) {
            return Dd(a);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (a, s) {
          var u = s.getAttribute('data-fa-transform');
          return u && (a.transform = Dd(u)), a;
        },
      };
    },
    provides: function (r) {
      r.generateAbstractTransformGrouping = function (a) {
        var s = a.main,
          u = a.transform,
          f = a.containerWidth,
          d = a.iconWidth,
          m = { transform: 'translate('.concat(f / 2, ' 256)') },
          h = 'translate('.concat(u.x * 32, ', ').concat(u.y * 32, ') '),
          g = 'scale('
            .concat((u.size / 16) * (u.flipX ? -1 : 1), ', ')
            .concat((u.size / 16) * (u.flipY ? -1 : 1), ') '),
          y = 'rotate('.concat(u.rotate, ' 0 0)'),
          w = { transform: ''.concat(h, ' ').concat(g, ' ').concat(y) },
          S = { transform: 'translate('.concat((d / 2) * -1, ' -256)') },
          O = { outer: m, inner: w, path: S };
        return {
          tag: 'g',
          attributes: H({}, O.outer),
          children: [
            {
              tag: 'g',
              attributes: H({}, O.inner),
              children: [
                { tag: s.icon.tag, children: s.icon.children, attributes: H(H({}, s.icon.attributes), O.path) },
              ],
            },
          ],
        };
      };
    },
  },
  ml = { x: 0, y: 0, width: '100%', height: '100%' };
function $d(i) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return i.attributes && (i.attributes.fill || r) && (i.attributes.fill = 'black'), i;
}
function $y(i) {
  return i.tag === 'g' ? i.children : [i];
}
var Uy = {
    hooks: function () {
      return {
        parseNodeAttributes: function (a, s) {
          var u = s.getAttribute('data-fa-mask'),
            f = u
              ? lo(
                  u.split(' ').map(function (d) {
                    return d.trim();
                  })
                )
              : eu();
          return f.prefix || (f.prefix = hn()), (a.mask = f), (a.maskId = s.getAttribute('data-fa-mask-id')), a;
        },
      };
    },
    provides: function (r) {
      r.generateAbstractMask = function (a) {
        var s = a.children,
          u = a.attributes,
          f = a.main,
          d = a.mask,
          m = a.maskId,
          h = a.transform,
          g = f.width,
          y = f.icon,
          w = d.width,
          S = d.icon,
          O = $v({ transform: h, containerWidth: w, iconWidth: g }),
          R = { tag: 'rect', attributes: H(H({}, ml), {}, { fill: 'white' }) },
          P = y.children ? { children: y.children.map($d) } : {},
          T = {
            tag: 'g',
            attributes: H({}, O.inner),
            children: [$d(H({ tag: y.tag, attributes: H(H({}, y.attributes), O.path) }, P))],
          },
          Y = { tag: 'g', attributes: H({}, O.outer), children: [T] },
          z = 'mask-'.concat(m || mi()),
          U = 'clip-'.concat(m || mi()),
          $ = {
            tag: 'mask',
            attributes: H(H({}, ml), {}, { id: z, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }),
            children: [R, Y],
          },
          L = { tag: 'defs', children: [{ tag: 'clipPath', attributes: { id: U }, children: $y(S) }, $] };
        return (
          s.push(L, {
            tag: 'rect',
            attributes: H(
              { fill: 'currentColor', 'clip-path': 'url(#'.concat(U, ')'), mask: 'url(#'.concat(z, ')') },
              ml
            ),
          }),
          { children: s, attributes: u }
        );
      };
    },
  },
  Vy = {
    provides: function (r) {
      var a = !1;
      mn.matchMedia && (a = mn.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (r.missingIconAbstract = function () {
          var s = [],
            u = { fill: 'currentColor' },
            f = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          s.push({
            tag: 'path',
            attributes: H(
              H({}, u),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              }
            ),
          });
          var d = H(H({}, f), {}, { attributeName: 'opacity' }),
            m = { tag: 'circle', attributes: H(H({}, u), {}, { cx: '256', cy: '364', r: '28' }), children: [] };
          return (
            a ||
              m.children.push(
                { tag: 'animate', attributes: H(H({}, f), {}, { attributeName: 'r', values: '28;14;28;28;14;28;' }) },
                { tag: 'animate', attributes: H(H({}, d), {}, { values: '1;0;1;1;0;1;' }) }
              ),
            s.push(m),
            s.push({
              tag: 'path',
              attributes: H(
                H({}, u),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                }
              ),
              children: a ? [] : [{ tag: 'animate', attributes: H(H({}, d), {}, { values: '1;0;0;0;0;1;' }) }],
            }),
            a ||
              s.push({
                tag: 'path',
                attributes: H(
                  H({}, u),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                  }
                ),
                children: [{ tag: 'animate', attributes: H(H({}, d), {}, { values: '0;0;1;1;0;0;' }) }],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: s }
          );
        });
    },
  },
  By = {
    hooks: function () {
      return {
        parseNodeAttributes: function (a, s) {
          var u = s.getAttribute('data-fa-symbol'),
            f = u === null ? !1 : u === '' ? !0 : u;
          return (a.symbol = f), a;
        },
      };
    },
  },
  Hy = [Bv, Ly, Ty, Ry, Iy, jy, Fy, Dy, Uy, Vy, By];
ry(Hy, { mixoutsTo: dt });
dt.noAuto;
dt.config;
dt.library;
dt.dom;
var zl = dt.parse;
dt.findIconDefinition;
dt.toHtml;
var Wy = dt.icon;
dt.layer;
dt.text;
dt.counter;
var hl = { exports: {} },
  gl,
  Ud;
function Yy() {
  if (Ud) return gl;
  Ud = 1;
  var i = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return (gl = i), gl;
}
var vl, Vd;
function Ky() {
  if (Vd) return vl;
  Vd = 1;
  var i = Yy();
  function r() {}
  function a() {}
  return (
    (a.resetWarningCache = r),
    (vl = function () {
      function s(d, m, h, g, y, w) {
        if (w !== i) {
          var S = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((S.name = 'Invariant Violation'), S);
        }
      }
      s.isRequired = s;
      function u() {
        return s;
      }
      var f = {
        array: s,
        bigint: s,
        bool: s,
        func: s,
        number: s,
        object: s,
        string: s,
        symbol: s,
        any: s,
        arrayOf: u,
        element: s,
        elementType: s,
        instanceOf: u,
        node: s,
        objectOf: u,
        oneOf: u,
        oneOfType: u,
        shape: u,
        exact: u,
        checkPropTypes: a,
        resetWarningCache: r,
      };
      return (f.PropTypes = f), f;
    }),
    vl
  );
}
var Bd;
function qy() {
  return Bd || ((Bd = 1), (hl.exports = Ky()())), hl.exports;
}
var Qy = qy();
const oe = no(Qy);
function Hd(i, r) {
  var a = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(i);
    r &&
      (s = s.filter(function (u) {
        return Object.getOwnPropertyDescriptor(i, u).enumerable;
      })),
      a.push.apply(a, s);
  }
  return a;
}
function pn(i) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Hd(Object(a), !0).forEach(function (s) {
          mr(i, s, a[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
      : Hd(Object(a)).forEach(function (s) {
          Object.defineProperty(i, s, Object.getOwnPropertyDescriptor(a, s));
        });
  }
  return i;
}
function Xa(i) {
  '@babel/helpers - typeof';
  return (
    (Xa =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r && typeof Symbol == 'function' && r.constructor === Symbol && r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    Xa(i)
  );
}
function mr(i, r, a) {
  return (
    r in i ? Object.defineProperty(i, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (i[r] = a), i
  );
}
function Gy(i, r) {
  if (i == null) return {};
  var a = {},
    s = Object.keys(i),
    u,
    f;
  for (f = 0; f < s.length; f++) (u = s[f]), !(r.indexOf(u) >= 0) && (a[u] = i[u]);
  return a;
}
function Xy(i, r) {
  if (i == null) return {};
  var a = Gy(i, r),
    s,
    u;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(i);
    for (u = 0; u < f.length; u++)
      (s = f[u]), !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(i, s) && (a[s] = i[s]);
  }
  return a;
}
function Ml(i) {
  return Jy(i) || Zy(i) || e1(i) || t1();
}
function Jy(i) {
  if (Array.isArray(i)) return jl(i);
}
function Zy(i) {
  if ((typeof Symbol < 'u' && i[Symbol.iterator] != null) || i['@@iterator'] != null) return Array.from(i);
}
function e1(i, r) {
  if (i) {
    if (typeof i == 'string') return jl(i, r);
    var a = Object.prototype.toString.call(i).slice(8, -1);
    if ((a === 'Object' && i.constructor && (a = i.constructor.name), a === 'Map' || a === 'Set')) return Array.from(i);
    if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return jl(i, r);
  }
}
function jl(i, r) {
  (r == null || r > i.length) && (r = i.length);
  for (var a = 0, s = new Array(r); a < r; a++) s[a] = i[a];
  return s;
}
function t1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n1(i) {
  var r,
    a = i.beat,
    s = i.fade,
    u = i.beatFade,
    f = i.bounce,
    d = i.shake,
    m = i.flash,
    h = i.spin,
    g = i.spinPulse,
    y = i.spinReverse,
    w = i.pulse,
    S = i.fixedWidth,
    O = i.inverse,
    R = i.border,
    P = i.listItem,
    T = i.flip,
    Y = i.size,
    z = i.rotation,
    U = i.pull,
    $ =
      ((r = {
        'fa-beat': a,
        'fa-fade': s,
        'fa-beat-fade': u,
        'fa-bounce': f,
        'fa-shake': d,
        'fa-flash': m,
        'fa-spin': h,
        'fa-spin-reverse': y,
        'fa-spin-pulse': g,
        'fa-pulse': w,
        'fa-fw': S,
        'fa-inverse': O,
        'fa-border': R,
        'fa-li': P,
        'fa-flip': T === !0,
        'fa-flip-horizontal': T === 'horizontal' || T === 'both',
        'fa-flip-vertical': T === 'vertical' || T === 'both',
      }),
      mr(r, 'fa-'.concat(Y), typeof Y < 'u' && Y !== null),
      mr(r, 'fa-rotate-'.concat(z), typeof z < 'u' && z !== null && z !== 0),
      mr(r, 'fa-pull-'.concat(U), typeof U < 'u' && U !== null),
      mr(r, 'fa-swap-opacity', i.swapOpacity),
      r);
  return Object.keys($)
    .map(function (L) {
      return $[L] ? L : null;
    })
    .filter(function (L) {
      return L;
    });
}
function r1(i) {
  return (i = i - 0), i === i;
}
function Kp(i) {
  return r1(i)
    ? i
    : ((i = i.replace(/[\-_\s]+(.)?/g, function (r, a) {
        return a ? a.toUpperCase() : '';
      })),
      i.substr(0, 1).toLowerCase() + i.substr(1));
}
var i1 = ['style'];
function a1(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
function o1(i) {
  return i
    .split(';')
    .map(function (r) {
      return r.trim();
    })
    .filter(function (r) {
      return r;
    })
    .reduce(function (r, a) {
      var s = a.indexOf(':'),
        u = Kp(a.slice(0, s)),
        f = a.slice(s + 1).trim();
      return u.startsWith('webkit') ? (r[a1(u)] = f) : (r[u] = f), r;
    }, {});
}
function qp(i, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof r == 'string') return r;
  var s = (r.children || []).map(function (h) {
      return qp(i, h);
    }),
    u = Object.keys(r.attributes || {}).reduce(
      function (h, g) {
        var y = r.attributes[g];
        switch (g) {
          case 'class':
            (h.attrs.className = y), delete r.attributes.class;
            break;
          case 'style':
            h.attrs.style = o1(y);
            break;
          default:
            g.indexOf('aria-') === 0 || g.indexOf('data-') === 0
              ? (h.attrs[g.toLowerCase()] = y)
              : (h.attrs[Kp(g)] = y);
        }
        return h;
      },
      { attrs: {} }
    ),
    f = a.style,
    d = f === void 0 ? {} : f,
    m = Xy(a, i1);
  return (u.attrs.style = pn(pn({}, u.attrs.style), d)), i.apply(void 0, [r.tag, pn(pn({}, u.attrs), m)].concat(Ml(s)));
}
var Qp = !1;
try {
  Qp = !0;
} catch {}
function s1() {
  if (!Qp && console && typeof console.error == 'function') {
    var i;
    (i = console).error.apply(i, arguments);
  }
}
function Wd(i) {
  if (i && Xa(i) === 'object' && i.prefix && i.iconName && i.icon) return i;
  if (zl.icon) return zl.icon(i);
  if (i === null) return null;
  if (i && Xa(i) === 'object' && i.prefix && i.iconName) return i;
  if (Array.isArray(i) && i.length === 2) return { prefix: i[0], iconName: i[1] };
  if (typeof i == 'string') return { prefix: 'fas', iconName: i };
}
function yl(i, r) {
  return (Array.isArray(r) && r.length > 0) || (!Array.isArray(r) && r) ? mr({}, i, r) : {};
}
var xi = ro.forwardRef(function (i, r) {
  var a = i.icon,
    s = i.mask,
    u = i.symbol,
    f = i.className,
    d = i.title,
    m = i.titleId,
    h = i.maskId,
    g = Wd(a),
    y = yl('classes', [].concat(Ml(n1(i)), Ml(f.split(' ')))),
    w = yl('transform', typeof i.transform == 'string' ? zl.transform(i.transform) : i.transform),
    S = yl('mask', Wd(s)),
    O = Wy(g, pn(pn(pn(pn({}, y), w), S), {}, { symbol: u, title: d, titleId: m, maskId: h }));
  if (!O) return s1('Could not find icon', g), null;
  var R = O.abstract,
    P = { ref: r };
  return (
    Object.keys(i).forEach(function (T) {
      xi.defaultProps.hasOwnProperty(T) || (P[T] = i[T]);
    }),
    l1(R[0], P)
  );
});
xi.displayName = 'FontAwesomeIcon';
xi.propTypes = {
  beat: oe.bool,
  border: oe.bool,
  beatFade: oe.bool,
  bounce: oe.bool,
  className: oe.string,
  fade: oe.bool,
  flash: oe.bool,
  mask: oe.oneOfType([oe.object, oe.array, oe.string]),
  maskId: oe.string,
  fixedWidth: oe.bool,
  inverse: oe.bool,
  flip: oe.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: oe.oneOfType([oe.object, oe.array, oe.string]),
  listItem: oe.bool,
  pull: oe.oneOf(['right', 'left']),
  pulse: oe.bool,
  rotation: oe.oneOf([0, 90, 180, 270]),
  shake: oe.bool,
  size: oe.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: oe.bool,
  spinPulse: oe.bool,
  spinReverse: oe.bool,
  symbol: oe.oneOfType([oe.bool, oe.string]),
  title: oe.string,
  titleId: oe.string,
  transform: oe.oneOfType([oe.string, oe.object]),
  swapOpacity: oe.bool,
};
xi.defaultProps = {
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
var l1 = qp.bind(null, ro.createElement),
  wl = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var Yd;
function u1() {
  return (
    Yd ||
      ((Yd = 1),
      (function (i) {
        (function () {
          var r = {}.hasOwnProperty;
          function a() {
            for (var f = '', d = 0; d < arguments.length; d++) {
              var m = arguments[d];
              m && (f = u(f, s(m)));
            }
            return f;
          }
          function s(f) {
            if (typeof f == 'string' || typeof f == 'number') return f;
            if (typeof f != 'object') return '';
            if (Array.isArray(f)) return a.apply(null, f);
            if (f.toString !== Object.prototype.toString && !f.toString.toString().includes('[native code]'))
              return f.toString();
            var d = '';
            for (var m in f) r.call(f, m) && f[m] && (d = u(d, m));
            return d;
          }
          function u(f, d) {
            return d ? (f ? f + ' ' + d : f + d) : f;
          }
          i.exports ? ((a.default = a), (i.exports = a)) : (window.classNames = a);
        })();
      })(wl)),
    wl.exports
  );
}
var c1 = u1();
const f1 = no(c1);
var d1 = {
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
  p1 = {
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
  Q0 = p1,
  G0 = {
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
  X0 = {
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
  m1 = {
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
  J0 = m1,
  h1 = {
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
  Z0 = h1;
function g1() {
  if (console && console.warn) {
    for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
    typeof r[0] == 'string' && (r[0] = `react-i18next:: ${r[0]}`), console.warn(...r);
  }
}
const Kd = {};
function Fl() {
  for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
  (typeof r[0] == 'string' && Kd[r[0]]) || (typeof r[0] == 'string' && (Kd[r[0]] = new Date()), g1(...r));
}
const Gp = (i, r) => () => {
  if (i.isInitialized) r();
  else {
    const a = () => {
      setTimeout(() => {
        i.off('initialized', a);
      }, 0),
        r();
    };
    i.on('initialized', a);
  }
};
function qd(i, r, a) {
  i.loadNamespaces(r, Gp(i, a));
}
function Qd(i, r, a, s) {
  typeof a == 'string' && (a = [a]),
    a.forEach((u) => {
      i.options.ns.indexOf(u) < 0 && i.options.ns.push(u);
    }),
    i.loadLanguages(r, Gp(i, s));
}
function v1(i, r) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const s = r.languages[0],
    u = r.options ? r.options.fallbackLng : !1,
    f = r.languages[r.languages.length - 1];
  if (s.toLowerCase() === 'cimode') return !0;
  const d = (m, h) => {
    const g = r.services.backendConnector.state[`${m}|${h}`];
    return g === -1 || g === 2;
  };
  return a.bindI18n &&
    a.bindI18n.indexOf('languageChanging') > -1 &&
    r.services.backendConnector.backend &&
    r.isLanguageChangingTo &&
    !d(r.isLanguageChangingTo, i)
    ? !1
    : !!(
        r.hasResourceBundle(s, i) ||
        !r.services.backendConnector.backend ||
        (r.options.resources && !r.options.partialBundledLanguages) ||
        (d(s, i) && (!u || d(f, i)))
      );
}
function y1(i, r) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !r.languages || !r.languages.length
    ? (Fl('i18n.languages were undefined or empty', r.languages), !0)
    : r.options.ignoreJSONStructure !== void 0
    ? r.hasLoadedNamespace(i, {
        lng: a.lng,
        precheck: (u, f) => {
          if (
            a.bindI18n &&
            a.bindI18n.indexOf('languageChanging') > -1 &&
            u.services.backendConnector.backend &&
            u.isLanguageChangingTo &&
            !f(u.isLanguageChangingTo, i)
          )
            return !1;
        },
      })
    : v1(i, r, a);
}
const w1 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  S1 = {
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
  x1 = (i) => S1[i],
  k1 = (i) => i.replace(w1, x1);
let Dl = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: k1,
};
function b1() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Dl = { ...Dl, ...i };
}
function C1() {
  return Dl;
}
let Xp;
function E1(i) {
  Xp = i;
}
function N1() {
  return Xp;
}
const P1 = {
    type: '3rdParty',
    init(i) {
      b1(i.options.react), E1(i);
    },
  },
  O1 = D.createContext();
class L1 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(r) {
    r.forEach((a) => {
      this.usedNamespaces[a] || (this.usedNamespaces[a] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const T1 = (i, r) => {
  const a = D.useRef();
  return (
    D.useEffect(() => {
      a.current = i;
    }, [i, r]),
    a.current
  );
};
function Jp(i, r, a, s) {
  return i.getFixedT(r, a, s);
}
function R1(i, r, a, s) {
  return D.useCallback(Jp(i, r, a, s), [i, r, a, s]);
}
function I1(i) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: a } = r,
    { i18n: s, defaultNS: u } = D.useContext(O1) || {},
    f = a || s || N1();
  if ((f && !f.reportNamespaces && (f.reportNamespaces = new L1()), !f)) {
    Fl('You will need to pass in an i18next instance by using initReactI18next');
    const $ = (J, Z) =>
        typeof Z == 'string'
          ? Z
          : Z && typeof Z == 'object' && typeof Z.defaultValue == 'string'
          ? Z.defaultValue
          : Array.isArray(J)
          ? J[J.length - 1]
          : J,
      L = [$, {}, !1];
    return (L.t = $), (L.i18n = {}), (L.ready = !1), L;
  }
  f.options.react &&
    f.options.react.wait !== void 0 &&
    Fl('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  const d = { ...C1(), ...f.options.react, ...r },
    { useSuspense: m, keyPrefix: h } = d;
  let g = u || (f.options && f.options.defaultNS);
  (g = typeof g == 'string' ? [g] : g || ['translation']),
    f.reportNamespaces.addUsedNamespaces && f.reportNamespaces.addUsedNamespaces(g);
  const y = (f.isInitialized || f.initializedStoreOnce) && g.every(($) => y1($, f, d)),
    w = R1(f, r.lng || null, d.nsMode === 'fallback' ? g : g[0], h),
    S = () => w,
    O = () => Jp(f, r.lng || null, d.nsMode === 'fallback' ? g : g[0], h),
    [R, P] = D.useState(S);
  let T = g.join();
  r.lng && (T = `${r.lng}${T}`);
  const Y = T1(T),
    z = D.useRef(!0);
  D.useEffect(() => {
    const { bindI18n: $, bindI18nStore: L } = d;
    (z.current = !0),
      !y &&
        !m &&
        (r.lng
          ? Qd(f, r.lng, g, () => {
              z.current && P(O);
            })
          : qd(f, g, () => {
              z.current && P(O);
            })),
      y && Y && Y !== T && z.current && P(O);
    function J() {
      z.current && P(O);
    }
    return (
      $ && f && f.on($, J),
      L && f && f.store.on(L, J),
      () => {
        (z.current = !1),
          $ && f && $.split(' ').forEach((Z) => f.off(Z, J)),
          L && f && L.split(' ').forEach((Z) => f.store.off(Z, J));
      }
    );
  }, [f, T]),
    D.useEffect(() => {
      z.current && y && P(S);
    }, [f, h, y]);
  const U = [R, f, y];
  if (((U.t = R), (U.i18n = f), (U.ready = y), y || (!y && !m))) return U;
  throw new Promise(($) => {
    r.lng ? Qd(f, r.lng, g, () => $()) : qd(f, g, () => $());
  });
}
const Tn = ({ size: i, inModal: r }) => {
    const { i18n: a } = I1(),
      s = a.language;
    return me.jsxs('div', {
      className: f1(i ? `gnb-spinner-${i}` : 'gnb-spinner', r ? 'in-modal' : 'loading-page'),
      role: 'status',
      children: [
        me.jsx(xi, { icon: d1, className: 'fa-spin', 'aria-labelledby': 'spinner-description' }),
        me.jsx('span', {
          className: 'sr-only',
          id: 'spinner-description',
          children: s === 'fr-CA' ? 'Chargement...' : 'Loading...',
        }),
      ],
    });
  },
  Gd = D.lazy(() => vi(() => import('./index-CAsULNcM.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))),
  _1 = D.lazy(() =>
    vi(() => import('./index-EJF7g3ln.js'), __vite__mapDeps([10, 11, 1, 2, 3, 4, 5, 6, 12, 13, 14, 15]))
  ),
  A1 = D.lazy(() => vi(() => import('./edit-SUVRDGJi.js'), __vite__mapDeps([16, 11, 1, 2, 3, 15]))),
  z1 = D.lazy(() => vi(() => import('./index-Bl1Vb-su.js'), __vite__mapDeps([17, 2]))),
  M1 = D.lazy(() =>
    vi(() => import('./index-BWe7Bz4N.js'), __vite__mapDeps([18, 1, 2, 3, 7, 4, 5, 8, 11, 12, 13, 19]))
  ),
  j1 = [
    { path: '', element: me.jsx(D.Suspense, { fallback: me.jsx(Tn, { size: 'lg' }), children: me.jsx(Gd, {}) }) },
    { path: '/', element: me.jsx(D.Suspense, { fallback: me.jsx(Tn, { size: 'lg' }), children: me.jsx(Gd, {}) }) },
    {
      path: 'authentication',
      element: me.jsx(D.Suspense, { fallback: me.jsx(Tn, { size: 'lg' }), children: me.jsx(M1, {}) }),
    },
    {
      path: 'account-settings',
      element: me.jsx(D.Suspense, { fallback: me.jsx(Tn, { size: 'lg' }), children: me.jsx(av, {}) }),
      children: [
        { path: '', element: me.jsx(D.Suspense, { fallback: me.jsx(Tn, { size: 'lg' }), children: me.jsx(_1, {}) }) },
        {
          path: 'edit',
          element: me.jsx(D.Suspense, { fallback: me.jsx(Tn, { size: 'lg' }), children: me.jsx(A1, {}) }),
        },
      ],
    },
    { path: '*', element: me.jsx(D.Suspense, { fallback: me.jsx(Tn, { size: 'lg' }), children: me.jsx(z1, {}) }) },
  ],
  F1 = () => Yg(j1);
var Va = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var Xd;
function D1() {
  if (Xd) return Va;
  (Xd = 1), (Va.parse = d), (Va.serialize = g);
  var i = Object.prototype.toString,
    r = Object.prototype.hasOwnProperty,
    a = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
    s = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
    u = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/;
  function d(O, R) {
    if (typeof O != 'string') throw new TypeError('argument str must be a string');
    var P = {},
      T = O.length;
    if (T < 2) return P;
    var Y = (R && R.decode) || y,
      z = 0,
      U = 0,
      $ = 0;
    do {
      if (((U = O.indexOf('=', z)), U === -1)) break;
      if ((($ = O.indexOf(';', z)), $ === -1)) $ = T;
      else if (U > $) {
        z = O.lastIndexOf(';', U - 1) + 1;
        continue;
      }
      var L = m(O, z, U),
        J = h(O, U, L),
        Z = O.slice(L, J);
      if (!r.call(P, Z)) {
        var he = m(O, U + 1, $),
          Ee = h(O, $, he);
        O.charCodeAt(he) === 34 && O.charCodeAt(Ee - 1) === 34 && (he++, Ee--);
        var Be = O.slice(he, Ee);
        P[Z] = S(Be, Y);
      }
      z = $ + 1;
    } while (z < T);
    return P;
  }
  function m(O, R, P) {
    do {
      var T = O.charCodeAt(R);
      if (T !== 32 && T !== 9) return R;
    } while (++R < P);
    return P;
  }
  function h(O, R, P) {
    for (; R > P; ) {
      var T = O.charCodeAt(--R);
      if (T !== 32 && T !== 9) return R + 1;
    }
    return P;
  }
  function g(O, R, P) {
    var T = (P && P.encode) || encodeURIComponent;
    if (typeof T != 'function') throw new TypeError('option encode is invalid');
    if (!a.test(O)) throw new TypeError('argument name is invalid');
    var Y = T(R);
    if (!s.test(Y)) throw new TypeError('argument val is invalid');
    var z = O + '=' + Y;
    if (!P) return z;
    if (P.maxAge != null) {
      var U = Math.floor(P.maxAge);
      if (!isFinite(U)) throw new TypeError('option maxAge is invalid');
      z += '; Max-Age=' + U;
    }
    if (P.domain) {
      if (!u.test(P.domain)) throw new TypeError('option domain is invalid');
      z += '; Domain=' + P.domain;
    }
    if (P.path) {
      if (!f.test(P.path)) throw new TypeError('option path is invalid');
      z += '; Path=' + P.path;
    }
    if (P.expires) {
      var $ = P.expires;
      if (!w($) || isNaN($.valueOf())) throw new TypeError('option expires is invalid');
      z += '; Expires=' + $.toUTCString();
    }
    if (
      (P.httpOnly && (z += '; HttpOnly'),
      P.secure && (z += '; Secure'),
      P.partitioned && (z += '; Partitioned'),
      P.priority)
    ) {
      var L = typeof P.priority == 'string' ? P.priority.toLowerCase() : P.priority;
      switch (L) {
        case 'low':
          z += '; Priority=Low';
          break;
        case 'medium':
          z += '; Priority=Medium';
          break;
        case 'high':
          z += '; Priority=High';
          break;
        default:
          throw new TypeError('option priority is invalid');
      }
    }
    if (P.sameSite) {
      var J = typeof P.sameSite == 'string' ? P.sameSite.toLowerCase() : P.sameSite;
      switch (J) {
        case !0:
          z += '; SameSite=Strict';
          break;
        case 'lax':
          z += '; SameSite=Lax';
          break;
        case 'strict':
          z += '; SameSite=Strict';
          break;
        case 'none':
          z += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    }
    return z;
  }
  function y(O) {
    return O.indexOf('%') !== -1 ? decodeURIComponent(O) : O;
  }
  function w(O) {
    return i.call(O) === '[object Date]';
  }
  function S(O, R) {
    try {
      return R(O);
    } catch {
      return O;
    }
  }
  return Va;
}
var Ya = D1();
function $1() {
  const i = typeof global > 'u' ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  return typeof i == 'boolean' ? i : typeof document == 'object' && typeof document.cookie == 'string';
}
function U1(i) {
  return typeof i == 'string' ? Ya.parse(i) : typeof i == 'object' && i !== null ? i : {};
}
function Sl(i, r = {}) {
  const a = V1(i);
  if (!r.doNotParse)
    try {
      return JSON.parse(a);
    } catch {}
  return i;
}
function V1(i) {
  return i && i[0] === 'j' && i[1] === ':' ? i.substr(2) : i;
}
class Zp {
  constructor(r, a = {}) {
    (this.changeListeners = []),
      (this.HAS_DOCUMENT_COOKIE = !1),
      (this.update = () => {
        if (!this.HAS_DOCUMENT_COOKIE) return;
        const u = this.cookies;
        (this.cookies = Ya.parse(document.cookie)), this._checkChanges(u);
      });
    const s = typeof document > 'u' ? '' : document.cookie;
    (this.cookies = U1(r || s)), (this.defaultSetOptions = a), (this.HAS_DOCUMENT_COOKIE = $1());
  }
  _emitChange(r) {
    for (let a = 0; a < this.changeListeners.length; ++a) this.changeListeners[a](r);
  }
  _checkChanges(r) {
    new Set(Object.keys(r).concat(Object.keys(this.cookies))).forEach((s) => {
      r[s] !== this.cookies[s] && this._emitChange({ name: s, value: Sl(this.cookies[s]) });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(r, a = {}) {
    return a.doNotUpdate || this.update(), Sl(this.cookies[r], a);
  }
  getAll(r = {}) {
    r.doNotUpdate || this.update();
    const a = {};
    for (let s in this.cookies) a[s] = Sl(this.cookies[s], r);
    return a;
  }
  set(r, a, s) {
    s ? (s = Object.assign(Object.assign({}, this.defaultSetOptions), s)) : (s = this.defaultSetOptions);
    const u = typeof a == 'string' ? a : JSON.stringify(a);
    (this.cookies = Object.assign(Object.assign({}, this.cookies), { [r]: u })),
      this.HAS_DOCUMENT_COOKIE && (document.cookie = Ya.serialize(r, u, s)),
      this._emitChange({ name: r, value: a, options: s });
  }
  remove(r, a) {
    const s = (a = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), a), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    }));
    (this.cookies = Object.assign({}, this.cookies)),
      delete this.cookies[r],
      this.HAS_DOCUMENT_COOKIE && (document.cookie = Ya.serialize(r, '', s)),
      this._emitChange({ name: r, value: void 0, options: a });
  }
  addChangeListener(r) {
    this.changeListeners.push(r),
      this.HAS_DOCUMENT_COOKIE &&
        this.changeListeners.length === 1 &&
        (typeof window == 'object' && 'cookieStore' in window
          ? window.cookieStore.addEventListener('change', this.update)
          : this._startPolling());
  }
  removeChangeListener(r) {
    const a = this.changeListeners.indexOf(r);
    a >= 0 && this.changeListeners.splice(a, 1),
      this.HAS_DOCUMENT_COOKIE &&
        this.changeListeners.length === 0 &&
        (typeof window == 'object' && 'cookieStore' in window
          ? window.cookieStore.removeEventListener('change', this.update)
          : this._stopPolling());
  }
}
const em = D.createContext(new Zp()),
  { Provider: B1, Consumer: ew } = em;
class H1 extends D.Component {
  constructor(r) {
    super(r), r.cookies ? (this.cookies = r.cookies) : (this.cookies = new Zp(void 0, r.defaultSetOptions));
  }
  render() {
    return D.createElement(B1, { value: this.cookies }, this.props.children);
  }
}
var tm = { exports: {} },
  fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jd;
function W1() {
  if (Jd) return fe;
  Jd = 1;
  var i = typeof Symbol == 'function' && Symbol.for,
    r = i ? Symbol.for('react.element') : 60103,
    a = i ? Symbol.for('react.portal') : 60106,
    s = i ? Symbol.for('react.fragment') : 60107,
    u = i ? Symbol.for('react.strict_mode') : 60108,
    f = i ? Symbol.for('react.profiler') : 60114,
    d = i ? Symbol.for('react.provider') : 60109,
    m = i ? Symbol.for('react.context') : 60110,
    h = i ? Symbol.for('react.async_mode') : 60111,
    g = i ? Symbol.for('react.concurrent_mode') : 60111,
    y = i ? Symbol.for('react.forward_ref') : 60112,
    w = i ? Symbol.for('react.suspense') : 60113,
    S = i ? Symbol.for('react.suspense_list') : 60120,
    O = i ? Symbol.for('react.memo') : 60115,
    R = i ? Symbol.for('react.lazy') : 60116,
    P = i ? Symbol.for('react.block') : 60121,
    T = i ? Symbol.for('react.fundamental') : 60117,
    Y = i ? Symbol.for('react.responder') : 60118,
    z = i ? Symbol.for('react.scope') : 60119;
  function U(L) {
    if (typeof L == 'object' && L !== null) {
      var J = L.$$typeof;
      switch (J) {
        case r:
          switch (((L = L.type), L)) {
            case h:
            case g:
            case s:
            case f:
            case u:
            case w:
              return L;
            default:
              switch (((L = L && L.$$typeof), L)) {
                case m:
                case y:
                case R:
                case O:
                case d:
                  return L;
                default:
                  return J;
              }
          }
        case a:
          return J;
      }
    }
  }
  function $(L) {
    return U(L) === g;
  }
  return (
    (fe.AsyncMode = h),
    (fe.ConcurrentMode = g),
    (fe.ContextConsumer = m),
    (fe.ContextProvider = d),
    (fe.Element = r),
    (fe.ForwardRef = y),
    (fe.Fragment = s),
    (fe.Lazy = R),
    (fe.Memo = O),
    (fe.Portal = a),
    (fe.Profiler = f),
    (fe.StrictMode = u),
    (fe.Suspense = w),
    (fe.isAsyncMode = function (L) {
      return $(L) || U(L) === h;
    }),
    (fe.isConcurrentMode = $),
    (fe.isContextConsumer = function (L) {
      return U(L) === m;
    }),
    (fe.isContextProvider = function (L) {
      return U(L) === d;
    }),
    (fe.isElement = function (L) {
      return typeof L == 'object' && L !== null && L.$$typeof === r;
    }),
    (fe.isForwardRef = function (L) {
      return U(L) === y;
    }),
    (fe.isFragment = function (L) {
      return U(L) === s;
    }),
    (fe.isLazy = function (L) {
      return U(L) === R;
    }),
    (fe.isMemo = function (L) {
      return U(L) === O;
    }),
    (fe.isPortal = function (L) {
      return U(L) === a;
    }),
    (fe.isProfiler = function (L) {
      return U(L) === f;
    }),
    (fe.isStrictMode = function (L) {
      return U(L) === u;
    }),
    (fe.isSuspense = function (L) {
      return U(L) === w;
    }),
    (fe.isValidElementType = function (L) {
      return (
        typeof L == 'string' ||
        typeof L == 'function' ||
        L === s ||
        L === g ||
        L === f ||
        L === u ||
        L === w ||
        L === S ||
        (typeof L == 'object' &&
          L !== null &&
          (L.$$typeof === R ||
            L.$$typeof === O ||
            L.$$typeof === d ||
            L.$$typeof === m ||
            L.$$typeof === y ||
            L.$$typeof === T ||
            L.$$typeof === Y ||
            L.$$typeof === z ||
            L.$$typeof === P))
      );
    }),
    (fe.typeOf = U),
    fe
  );
}
tm.exports = W1();
var Y1 = tm.exports,
  nm = Y1,
  K1 = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  q1 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  rm = {};
rm[nm.ForwardRef] = K1;
rm[nm.Memo] = q1;
function Q1() {
  return typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
}
function tw(i) {
  const r = D.useContext(em);
  if (!r) throw new Error('Missing <CookiesProvider>');
  const [a, s] = D.useState(() => r.getAll({ doNotUpdate: !0 }));
  Q1() &&
    D.useLayoutEffect(() => {
      function m() {
        const h = r.getAll({ doNotUpdate: !0 });
        G1(i || null, h, a) && s(h);
      }
      return (
        r.addChangeListener(m),
        () => {
          r.removeChangeListener(m);
        }
      );
    }, [r, a]);
  const u = D.useMemo(() => r.set.bind(r), [r]),
    f = D.useMemo(() => r.remove.bind(r), [r]),
    d = D.useMemo(() => r.update.bind(r), [r]);
  return [a, u, f, d];
}
function G1(i, r, a) {
  if (!i) return !0;
  for (let s of i) if (r[s] !== a[s]) return !0;
  return !1;
}
const X1 = () => me.jsx(H1, { defaultSetOptions: { path: '/' }, children: me.jsx(F1, {}) }),
  J1 = {
    type: 'logger',
    log(i) {
      this.output('log', i);
    },
    warn(i) {
      this.output('warn', i);
    },
    error(i) {
      this.output('error', i);
    },
    output(i, r) {
      console && console[i] && console[i].apply(console, r);
    },
  };
class Ja {
  constructor(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(r, a);
  }
  init(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = a.prefix || 'i18next:'), (this.logger = r || J1), (this.options = a), (this.debug = a.debug);
  }
  log() {
    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
    return this.forward(a, 'log', '', !0);
  }
  warn() {
    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
    return this.forward(a, 'warn', '', !0);
  }
  error() {
    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
    return this.forward(a, 'error', '');
  }
  deprecate() {
    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
    return this.forward(a, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(r, a, s, u) {
    return u && !this.debug
      ? null
      : (typeof r[0] == 'string' && (r[0] = `${s}${this.prefix} ${r[0]}`), this.logger[a](r));
  }
  create(r) {
    return new Ja(this.logger, { prefix: `${this.prefix}:${r}:`, ...this.options });
  }
  clone(r) {
    return (r = r || this.options), (r.prefix = r.prefix || this.prefix), new Ja(this.logger, r);
  }
}
var At = new Ja();
class co {
  constructor() {
    this.observers = {};
  }
  on(r, a) {
    return (
      r.split(' ').forEach((s) => {
        this.observers[s] || (this.observers[s] = new Map());
        const u = this.observers[s].get(a) || 0;
        this.observers[s].set(a, u + 1);
      }),
      this
    );
  }
  off(r, a) {
    if (this.observers[r]) {
      if (!a) {
        delete this.observers[r];
        return;
      }
      this.observers[r].delete(a);
    }
  }
  emit(r) {
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++) s[u - 1] = arguments[u];
    this.observers[r] &&
      Array.from(this.observers[r].entries()).forEach((d) => {
        let [m, h] = d;
        for (let g = 0; g < h; g++) m(...s);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((d) => {
          let [m, h] = d;
          for (let g = 0; g < h; g++) m.apply(m, [r, ...s]);
        });
  }
}
function ii() {
  let i, r;
  const a = new Promise((s, u) => {
    (i = s), (r = u);
  });
  return (a.resolve = i), (a.reject = r), a;
}
function Zd(i) {
  return i == null ? '' : '' + i;
}
function Z1(i, r, a) {
  i.forEach((s) => {
    r[s] && (a[s] = r[s]);
  });
}
const e0 = /###/g;
function li(i, r, a) {
  function s(m) {
    return m && m.indexOf('###') > -1 ? m.replace(e0, '.') : m;
  }
  function u() {
    return !i || typeof i == 'string';
  }
  const f = typeof r != 'string' ? r : r.split('.');
  let d = 0;
  for (; d < f.length - 1; ) {
    if (u()) return {};
    const m = s(f[d]);
    !i[m] && a && (i[m] = new a()), Object.prototype.hasOwnProperty.call(i, m) ? (i = i[m]) : (i = {}), ++d;
  }
  return u() ? {} : { obj: i, k: s(f[d]) };
}
function ep(i, r, a) {
  const { obj: s, k: u } = li(i, r, Object);
  if (s !== void 0 || r.length === 1) {
    s[u] = a;
    return;
  }
  let f = r[r.length - 1],
    d = r.slice(0, r.length - 1),
    m = li(i, d, Object);
  for (; m.obj === void 0 && d.length; )
    (f = `${d[d.length - 1]}.${f}`),
      (d = d.slice(0, d.length - 1)),
      (m = li(i, d, Object)),
      m && m.obj && typeof m.obj[`${m.k}.${f}`] < 'u' && (m.obj = void 0);
  m.obj[`${m.k}.${f}`] = a;
}
function t0(i, r, a, s) {
  const { obj: u, k: f } = li(i, r, Object);
  (u[f] = u[f] || []), u[f].push(a);
}
function Za(i, r) {
  const { obj: a, k: s } = li(i, r);
  if (a) return a[s];
}
function n0(i, r, a) {
  const s = Za(i, a);
  return s !== void 0 ? s : Za(r, a);
}
function im(i, r, a) {
  for (const s in r)
    s !== '__proto__' &&
      s !== 'constructor' &&
      (s in i
        ? typeof i[s] == 'string' || i[s] instanceof String || typeof r[s] == 'string' || r[s] instanceof String
          ? a && (i[s] = r[s])
          : im(i[s], r[s], a)
        : (i[s] = r[s]));
  return i;
}
function cr(i) {
  return i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var r0 = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
function i0(i) {
  return typeof i == 'string' ? i.replace(/[&<>"'\/]/g, (r) => r0[r]) : i;
}
class a0 {
  constructor(r) {
    (this.capacity = r), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(r) {
    const a = this.regExpMap.get(r);
    if (a !== void 0) return a;
    const s = new RegExp(r);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(r, s),
      this.regExpQueue.push(r),
      s
    );
  }
}
const o0 = [' ', ',', '?', '!', ';'],
  s0 = new a0(20);
function l0(i, r, a) {
  (r = r || ''), (a = a || '');
  const s = o0.filter((d) => r.indexOf(d) < 0 && a.indexOf(d) < 0);
  if (s.length === 0) return !0;
  const u = s0.getRegExp(`(${s.map((d) => (d === '?' ? '\\?' : d)).join('|')})`);
  let f = !u.test(i);
  if (!f) {
    const d = i.indexOf(a);
    d > 0 && !u.test(i.substring(0, d)) && (f = !0);
  }
  return f;
}
function $l(i, r) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (!i) return;
  if (i[r]) return i[r];
  const s = r.split(a);
  let u = i;
  for (let f = 0; f < s.length; ) {
    if (!u || typeof u != 'object') return;
    let d,
      m = '';
    for (let h = f; h < s.length; ++h)
      if ((h !== f && (m += a), (m += s[h]), (d = u[m]), d !== void 0)) {
        if (['string', 'number', 'boolean'].indexOf(typeof d) > -1 && h < s.length - 1) continue;
        f += h - f + 1;
        break;
      }
    u = d;
  }
  return u;
}
function eo(i) {
  return i && i.indexOf('_') > 0 ? i.replace('_', '-') : i;
}
class tp extends co {
  constructor(r) {
    let a =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = r || {}),
      (this.options = a),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(r) {
    this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
  }
  removeNamespaces(r) {
    const a = this.options.ns.indexOf(r);
    a > -1 && this.options.ns.splice(a, 1);
  }
  getResource(r, a, s) {
    let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const f = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator,
      d = u.ignoreJSONStructure !== void 0 ? u.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let m;
    r.indexOf('.') > -1
      ? (m = r.split('.'))
      : ((m = [r, a]),
        s && (Array.isArray(s) ? m.push(...s) : typeof s == 'string' && f ? m.push(...s.split(f)) : m.push(s)));
    const h = Za(this.data, m);
    return (
      !h && !a && !s && r.indexOf('.') > -1 && ((r = m[0]), (a = m[1]), (s = m.slice(2).join('.'))),
      h || !d || typeof s != 'string' ? h : $l(this.data && this.data[r] && this.data[r][a], s, f)
    );
  }
  addResource(r, a, s, u) {
    let f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const d = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let m = [r, a];
    s && (m = m.concat(d ? s.split(d) : s)),
      r.indexOf('.') > -1 && ((m = r.split('.')), (u = a), (a = m[1])),
      this.addNamespaces(a),
      ep(this.data, m, u),
      f.silent || this.emit('added', r, a, s, u);
  }
  addResources(r, a, s) {
    let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const f in s)
      (typeof s[f] == 'string' || Object.prototype.toString.apply(s[f]) === '[object Array]') &&
        this.addResource(r, a, f, s[f], { silent: !0 });
    u.silent || this.emit('added', r, a, s);
  }
  addResourceBundle(r, a, s, u, f) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1, skipCopy: !1 },
      m = [r, a];
    r.indexOf('.') > -1 && ((m = r.split('.')), (u = s), (s = a), (a = m[1])), this.addNamespaces(a);
    let h = Za(this.data, m) || {};
    d.skipCopy || (s = JSON.parse(JSON.stringify(s))),
      u ? im(h, s, f) : (h = { ...h, ...s }),
      ep(this.data, m, h),
      d.silent || this.emit('added', r, a, s);
  }
  removeResourceBundle(r, a) {
    this.hasResourceBundle(r, a) && delete this.data[r][a], this.removeNamespaces(a), this.emit('removed', r, a);
  }
  hasResourceBundle(r, a) {
    return this.getResource(r, a) !== void 0;
  }
  getResourceBundle(r, a) {
    return (
      a || (a = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1' ? { ...this.getResource(r, a) } : this.getResource(r, a)
    );
  }
  getDataByLanguage(r) {
    return this.data[r];
  }
  hasLanguageSomeTranslations(r) {
    const a = this.getDataByLanguage(r);
    return !!((a && Object.keys(a)) || []).find((u) => a[u] && Object.keys(a[u]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var am = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, r, a, s, u) {
    return (
      i.forEach((f) => {
        this.processors[f] && (r = this.processors[f].process(r, a, s, u));
      }),
      r
    );
  },
};
const np = {};
class to extends co {
  constructor(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      Z1(
        ['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'],
        r,
        this
      ),
      (this.options = a),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = At.create('translator'));
  }
  changeLanguage(r) {
    r && (this.language = r);
  }
  exists(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (r == null) return !1;
    const s = this.resolve(r, a);
    return s && s.res !== void 0;
  }
  extractFromKey(r, a) {
    let s = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ':');
    const u = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let f = a.ns || this.options.defaultNS || [];
    const d = s && r.indexOf(s) > -1,
      m =
        !this.options.userDefinedKeySeparator &&
        !a.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !a.nsSeparator &&
        !l0(r, s, u);
    if (d && !m) {
      const h = r.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0) return { key: r, namespaces: f };
      const g = r.split(s);
      (s !== u || (s === u && this.options.ns.indexOf(g[0]) > -1)) && (f = g.shift()), (r = g.join(u));
    }
    return typeof f == 'string' && (f = [f]), { key: r, namespaces: f };
  }
  translate(r, a, s) {
    if (
      (typeof a != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (a = this.options.overloadTranslationOptionHandler(arguments)),
      typeof a == 'object' && (a = { ...a }),
      a || (a = {}),
      r == null)
    )
      return '';
    Array.isArray(r) || (r = [String(r)]);
    const u = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails,
      f = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      { key: d, namespaces: m } = this.extractFromKey(r[r.length - 1], a),
      h = m[m.length - 1],
      g = a.lng || this.language,
      y = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (g && g.toLowerCase() === 'cimode') {
      if (y) {
        const $ = a.nsSeparator || this.options.nsSeparator;
        return u
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
      return u
        ? { res: d, usedKey: d, exactUsedKey: d, usedLng: g, usedNS: h, usedParams: this.getUsedParamsDetails(a) }
        : d;
    }
    const w = this.resolve(r, a);
    let S = w && w.res;
    const O = (w && w.usedKey) || d,
      R = (w && w.exactUsedKey) || d,
      P = Object.prototype.toString.apply(S),
      T = ['[object Number]', '[object Function]', '[object RegExp]'],
      Y = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays,
      z = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      z &&
      S &&
      typeof S != 'string' &&
      typeof S != 'boolean' &&
      typeof S != 'number' &&
      T.indexOf(P) < 0 &&
      !(typeof Y == 'string' && P === '[object Array]')
    ) {
      if (!a.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const $ = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(O, S, { ...a, ns: m })
          : `key '${d} (${this.language})' returned an object instead of string.`;
        return u ? ((w.res = $), (w.usedParams = this.getUsedParamsDetails(a)), w) : $;
      }
      if (f) {
        const $ = P === '[object Array]',
          L = $ ? [] : {},
          J = $ ? R : O;
        for (const Z in S)
          if (Object.prototype.hasOwnProperty.call(S, Z)) {
            const he = `${J}${f}${Z}`;
            (L[Z] = this.translate(he, { ...a, joinArrays: !1, ns: m })), L[Z] === he && (L[Z] = S[Z]);
          }
        S = L;
      }
    } else if (z && typeof Y == 'string' && P === '[object Array]')
      (S = S.join(Y)), S && (S = this.extendTranslation(S, r, a, s));
    else {
      let $ = !1,
        L = !1;
      const J = a.count !== void 0 && typeof a.count != 'string',
        Z = to.hasDefaultValue(a),
        he = J ? this.pluralResolver.getSuffix(g, a.count, a) : '',
        Ee = a.ordinal && J ? this.pluralResolver.getSuffix(g, a.count, { ordinal: !1 }) : '',
        Be = J && !a.ordinal && a.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        ot =
          (Be && a[`defaultValue${this.options.pluralSeparator}zero`]) ||
          a[`defaultValue${he}`] ||
          a[`defaultValue${Ee}`] ||
          a.defaultValue;
      !this.isValidLookup(S) && Z && (($ = !0), (S = ot)), this.isValidLookup(S) || ((L = !0), (S = d));
      const Ge = (a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && L ? void 0 : S,
        $e = Z && ot !== S && this.options.updateMissing;
      if (L || $ || $e) {
        if ((this.logger.log($e ? 'updateKey' : 'missingKey', g, h, d, $e ? ot : S), f)) {
          const F = this.resolve(d, { ...a, keySeparator: !1 });
          F &&
            F.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let He = [];
        const _e = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && _e && _e[0])
          for (let F = 0; F < _e.length; F++) He.push(_e[F]);
        else
          this.options.saveMissingTo === 'all'
            ? (He = this.languageUtils.toResolveHierarchy(a.lng || this.language))
            : He.push(a.lng || this.language);
        const ye = (F, X, V) => {
          const b = Z && V !== S ? V : Ge;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(F, h, X, b, $e, a)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(F, h, X, b, $e, a),
            this.emit('missingKey', F, h, X, S);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && J
            ? He.forEach((F) => {
                const X = this.pluralResolver.getSuffixes(F, a);
                Be &&
                  a[`defaultValue${this.options.pluralSeparator}zero`] &&
                  X.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  X.push(`${this.options.pluralSeparator}zero`),
                  X.forEach((V) => {
                    ye([F], d + V, a[`defaultValue${V}`] || ot);
                  });
              })
            : ye(He, d, ot));
      }
      (S = this.extendTranslation(S, r, a, w, s)),
        L && S === d && this.options.appendNamespaceToMissingKey && (S = `${h}:${d}`),
        (L || $) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (S = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${h}:${d}` : d,
                $ ? S : void 0
              ))
            : (S = this.options.parseMissingKeyHandler(S)));
    }
    return u ? ((w.res = S), (w.usedParams = this.getUsedParamsDetails(a)), w) : S;
  }
  extendTranslation(r, a, s, u, f) {
    var d = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      r = this.i18nFormat.parse(
        r,
        { ...this.options.interpolation.defaultVariables, ...s },
        s.lng || this.language || u.usedLng,
        u.usedNS,
        u.usedKey,
        { resolved: u }
      );
    else if (!s.skipInterpolation) {
      s.interpolation &&
        this.interpolator.init({ ...s, interpolation: { ...this.options.interpolation, ...s.interpolation } });
      const g =
        typeof r == 'string' &&
        (s && s.interpolation && s.interpolation.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let y;
      if (g) {
        const S = r.match(this.interpolator.nestingRegexp);
        y = S && S.length;
      }
      let w = s.replace && typeof s.replace != 'string' ? s.replace : s;
      if (
        (this.options.interpolation.defaultVariables && (w = { ...this.options.interpolation.defaultVariables, ...w }),
        (r = this.interpolator.interpolate(r, w, s.lng || this.language, s)),
        g)
      ) {
        const S = r.match(this.interpolator.nestingRegexp),
          O = S && S.length;
        y < O && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== 'v1' && u && u.res && (s.lng = u.usedLng),
        s.nest !== !1 &&
          (r = this.interpolator.nest(
            r,
            function () {
              for (var S = arguments.length, O = new Array(S), R = 0; R < S; R++) O[R] = arguments[R];
              return f && f[0] === O[0] && !s.context
                ? (d.logger.warn(`It seems you are nesting recursively key: ${O[0]} in key: ${a[0]}`), null)
                : d.translate(...O, a);
            },
            s
          )),
        s.interpolation && this.interpolator.reset();
    }
    const m = s.postProcess || this.options.postProcess,
      h = typeof m == 'string' ? [m] : m;
    return (
      r != null &&
        h &&
        h.length &&
        s.applyPostProcessor !== !1 &&
        (r = am.handle(
          h,
          r,
          a,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...u, usedParams: this.getUsedParamsDetails(s) }, ...s }
            : s,
          this
        )),
      r
    );
  }
  resolve(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s,
      u,
      f,
      d,
      m;
    return (
      typeof r == 'string' && (r = [r]),
      r.forEach((h) => {
        if (this.isValidLookup(s)) return;
        const g = this.extractFromKey(h, a),
          y = g.key;
        u = y;
        let w = g.namespaces;
        this.options.fallbackNS && (w = w.concat(this.options.fallbackNS));
        const S = a.count !== void 0 && typeof a.count != 'string',
          O = S && !a.ordinal && a.count === 0 && this.pluralResolver.shouldUseIntlApi(),
          R =
            a.context !== void 0 && (typeof a.context == 'string' || typeof a.context == 'number') && a.context !== '',
          P = a.lngs ? a.lngs : this.languageUtils.toResolveHierarchy(a.lng || this.language, a.fallbackLng);
        w.forEach((T) => {
          this.isValidLookup(s) ||
            ((m = T),
            !np[`${P[0]}-${T}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(m) &&
              ((np[`${P[0]}-${T}`] = !0),
              this.logger.warn(
                `key "${u}" for languages "${P.join(', ')}" won't get resolved as namespace "${m}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            P.forEach((Y) => {
              if (this.isValidLookup(s)) return;
              d = Y;
              const z = [y];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(z, y, Y, T, a);
              else {
                let $;
                S && ($ = this.pluralResolver.getSuffix(Y, a.count, a));
                const L = `${this.options.pluralSeparator}zero`,
                  J = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (S &&
                    (z.push(y + $),
                    a.ordinal && $.indexOf(J) === 0 && z.push(y + $.replace(J, this.options.pluralSeparator)),
                    O && z.push(y + L)),
                  R)
                ) {
                  const Z = `${y}${this.options.contextSeparator}${a.context}`;
                  z.push(Z),
                    S &&
                      (z.push(Z + $),
                      a.ordinal && $.indexOf(J) === 0 && z.push(Z + $.replace(J, this.options.pluralSeparator)),
                      O && z.push(Z + L));
                }
              }
              let U;
              for (; (U = z.pop()); ) this.isValidLookup(s) || ((f = U), (s = this.getResource(Y, T, U, a)));
            }));
        });
      }),
      { res: s, usedKey: u, exactUsedKey: f, usedLng: d, usedNS: m }
    );
  }
  isValidLookup(r) {
    return r !== void 0 && !(!this.options.returnNull && r === null) && !(!this.options.returnEmptyString && r === '');
  }
  getResource(r, a, s) {
    let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(r, a, s, u)
      : this.resourceStore.getResource(r, a, s, u);
  }
  getUsedParamsDetails() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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
      s = r.replace && typeof r.replace != 'string';
    let u = s ? r.replace : r;
    if (
      (s && typeof r.count < 'u' && (u.count = r.count),
      this.options.interpolation.defaultVariables && (u = { ...this.options.interpolation.defaultVariables, ...u }),
      !s)
    ) {
      u = { ...u };
      for (const f of a) delete u[f];
    }
    return u;
  }
  static hasDefaultValue(r) {
    const a = 'defaultValue';
    for (const s in r)
      if (Object.prototype.hasOwnProperty.call(r, s) && a === s.substring(0, a.length) && r[s] !== void 0) return !0;
    return !1;
  }
}
function xl(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
class rp {
  constructor(r) {
    (this.options = r),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = At.create('languageUtils'));
  }
  getScriptPartFromCode(r) {
    if (((r = eo(r)), !r || r.indexOf('-') < 0)) return null;
    const a = r.split('-');
    return a.length === 2 || (a.pop(), a[a.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(a.join('-'));
  }
  getLanguagePartFromCode(r) {
    if (((r = eo(r)), !r || r.indexOf('-') < 0)) return r;
    const a = r.split('-');
    return this.formatLanguageCode(a[0]);
  }
  formatLanguageCode(r) {
    if (typeof r == 'string' && r.indexOf('-') > -1) {
      const a = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let s = r.split('-');
      return (
        this.options.lowerCaseLng
          ? (s = s.map((u) => u.toLowerCase()))
          : s.length === 2
          ? ((s[0] = s[0].toLowerCase()),
            (s[1] = s[1].toUpperCase()),
            a.indexOf(s[1].toLowerCase()) > -1 && (s[1] = xl(s[1].toLowerCase())))
          : s.length === 3 &&
            ((s[0] = s[0].toLowerCase()),
            s[1].length === 2 && (s[1] = s[1].toUpperCase()),
            s[0] !== 'sgn' && s[2].length === 2 && (s[2] = s[2].toUpperCase()),
            a.indexOf(s[1].toLowerCase()) > -1 && (s[1] = xl(s[1].toLowerCase())),
            a.indexOf(s[2].toLowerCase()) > -1 && (s[2] = xl(s[2].toLowerCase()))),
        s.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r;
  }
  isSupportedCode(r) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (r = this.getLanguagePartFromCode(r)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1
    );
  }
  getBestMatchFromCodes(r) {
    if (!r) return null;
    let a;
    return (
      r.forEach((s) => {
        if (a) return;
        const u = this.formatLanguageCode(s);
        (!this.options.supportedLngs || this.isSupportedCode(u)) && (a = u);
      }),
      !a &&
        this.options.supportedLngs &&
        r.forEach((s) => {
          if (a) return;
          const u = this.getLanguagePartFromCode(s);
          if (this.isSupportedCode(u)) return (a = u);
          a = this.options.supportedLngs.find((f) => {
            if (f === u) return f;
            if (
              !(f.indexOf('-') < 0 && u.indexOf('-') < 0) &&
              ((f.indexOf('-') > 0 && u.indexOf('-') < 0 && f.substring(0, f.indexOf('-')) === u) ||
                (f.indexOf(u) === 0 && u.length > 1))
            )
              return f;
          });
        }),
      a || (a = this.getFallbackCodes(this.options.fallbackLng)[0]),
      a
    );
  }
  getFallbackCodes(r, a) {
    if (!r) return [];
    if (
      (typeof r == 'function' && (r = r(a)),
      typeof r == 'string' && (r = [r]),
      Object.prototype.toString.apply(r) === '[object Array]')
    )
      return r;
    if (!a) return r.default || [];
    let s = r[a];
    return (
      s || (s = r[this.getScriptPartFromCode(a)]),
      s || (s = r[this.formatLanguageCode(a)]),
      s || (s = r[this.getLanguagePartFromCode(a)]),
      s || (s = r.default),
      s || []
    );
  }
  toResolveHierarchy(r, a) {
    const s = this.getFallbackCodes(a || this.options.fallbackLng || [], r),
      u = [],
      f = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? u.push(d)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
      };
    return (
      typeof r == 'string' && (r.indexOf('-') > -1 || r.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && f(this.formatLanguageCode(r)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            f(this.getScriptPartFromCode(r)),
          this.options.load !== 'currentOnly' && f(this.getLanguagePartFromCode(r)))
        : typeof r == 'string' && f(this.formatLanguageCode(r)),
      s.forEach((d) => {
        u.indexOf(d) < 0 && f(this.formatLanguageCode(d));
      }),
      u
    );
  }
}
let u0 = [
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
  c0 = {
    1: function (i) {
      return +(i > 1);
    },
    2: function (i) {
      return +(i != 1);
    },
    3: function (i) {
      return 0;
    },
    4: function (i) {
      return i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2;
    },
    5: function (i) {
      return i == 0 ? 0 : i == 1 ? 1 : i == 2 ? 2 : i % 100 >= 3 && i % 100 <= 10 ? 3 : i % 100 >= 11 ? 4 : 5;
    },
    6: function (i) {
      return i == 1 ? 0 : i >= 2 && i <= 4 ? 1 : 2;
    },
    7: function (i) {
      return i == 1 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2;
    },
    8: function (i) {
      return i == 1 ? 0 : i == 2 ? 1 : i != 8 && i != 11 ? 2 : 3;
    },
    9: function (i) {
      return +(i >= 2);
    },
    10: function (i) {
      return i == 1 ? 0 : i == 2 ? 1 : i < 7 ? 2 : i < 11 ? 3 : 4;
    },
    11: function (i) {
      return i == 1 || i == 11 ? 0 : i == 2 || i == 12 ? 1 : i > 2 && i < 20 ? 2 : 3;
    },
    12: function (i) {
      return +(i % 10 != 1 || i % 100 == 11);
    },
    13: function (i) {
      return +(i !== 0);
    },
    14: function (i) {
      return i == 1 ? 0 : i == 2 ? 1 : i == 3 ? 2 : 3;
    },
    15: function (i) {
      return i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2;
    },
    16: function (i) {
      return i % 10 == 1 && i % 100 != 11 ? 0 : i !== 0 ? 1 : 2;
    },
    17: function (i) {
      return i == 1 || (i % 10 == 1 && i % 100 != 11) ? 0 : 1;
    },
    18: function (i) {
      return i == 0 ? 0 : i == 1 ? 1 : 2;
    },
    19: function (i) {
      return i == 1 ? 0 : i == 0 || (i % 100 > 1 && i % 100 < 11) ? 1 : i % 100 > 10 && i % 100 < 20 ? 2 : 3;
    },
    20: function (i) {
      return i == 1 ? 0 : i == 0 || (i % 100 > 0 && i % 100 < 20) ? 1 : 2;
    },
    21: function (i) {
      return i % 100 == 1 ? 1 : i % 100 == 2 ? 2 : i % 100 == 3 || i % 100 == 4 ? 3 : 0;
    },
    22: function (i) {
      return i == 1 ? 0 : i == 2 ? 1 : (i < 0 || i > 10) && i % 10 == 0 ? 2 : 3;
    },
  };
const f0 = ['v1', 'v2', 'v3'],
  d0 = ['v4'],
  ip = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function p0() {
  const i = {};
  return (
    u0.forEach((r) => {
      r.lngs.forEach((a) => {
        i[a] = { numbers: r.nr, plurals: c0[r.fc] };
      });
    }),
    i
  );
}
class m0 {
  constructor(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = r),
      (this.options = a),
      (this.logger = At.create('pluralResolver')),
      (!this.options.compatibilityJSON || d0.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = p0());
  }
  addRule(r, a) {
    this.rules[r] = a;
  }
  getRule(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(eo(r === 'dev' ? 'en' : r), { type: a.ordinal ? 'ordinal' : 'cardinal' });
      } catch {
        return;
      }
    return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)];
  }
  needsPlural(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(r, a);
    return this.shouldUseIntlApi() ? s && s.resolvedOptions().pluralCategories.length > 1 : s && s.numbers.length > 1;
  }
  getPluralFormsOfKey(r, a) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(r, s).map((u) => `${a}${u}`);
  }
  getSuffixes(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(r, a);
    return s
      ? this.shouldUseIntlApi()
        ? s
            .resolvedOptions()
            .pluralCategories.sort((u, f) => ip[u] - ip[f])
            .map((u) => `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ''}${u}`)
        : s.numbers.map((u) => this.getSuffix(r, u, a))
      : [];
  }
  getSuffix(r, a) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const u = this.getRule(r, s);
    return u
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ''}${u.select(a)}`
        : this.getSuffixRetroCompatible(u, a)
      : (this.logger.warn(`no plural rule found for: ${r}`), '');
  }
  getSuffixRetroCompatible(r, a) {
    const s = r.noAbs ? r.plurals(a) : r.plurals(Math.abs(a));
    let u = r.numbers[s];
    this.options.simplifyPluralSuffix &&
      r.numbers.length === 2 &&
      r.numbers[0] === 1 &&
      (u === 2 ? (u = 'plural') : u === 1 && (u = ''));
    const f = () => (this.options.prepend && u.toString() ? this.options.prepend + u.toString() : u.toString());
    return this.options.compatibilityJSON === 'v1'
      ? u === 1
        ? ''
        : typeof u == 'number'
        ? `_plural_${u.toString()}`
        : f()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1)
      ? f()
      : this.options.prepend && s.toString()
      ? this.options.prepend + s.toString()
      : s.toString();
  }
  shouldUseIntlApi() {
    return !f0.includes(this.options.compatibilityJSON);
  }
}
function ap(i, r, a) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
    u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    f = n0(i, r, a);
  return !f && u && typeof a == 'string' && ((f = $l(i, a, s)), f === void 0 && (f = $l(r, a, s))), f;
}
class h0 {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = At.create('interpolator')),
      (this.options = r),
      (this.format = (r.interpolation && r.interpolation.format) || ((a) => a)),
      this.init(r);
  }
  init() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    r.interpolation || (r.interpolation = { escapeValue: !0 });
    const a = r.interpolation;
    (this.escape = a.escape !== void 0 ? a.escape : i0),
      (this.escapeValue = a.escapeValue !== void 0 ? a.escapeValue : !0),
      (this.useRawValueToEscape = a.useRawValueToEscape !== void 0 ? a.useRawValueToEscape : !1),
      (this.prefix = a.prefix ? cr(a.prefix) : a.prefixEscaped || '{{'),
      (this.suffix = a.suffix ? cr(a.suffix) : a.suffixEscaped || '}}'),
      (this.formatSeparator = a.formatSeparator ? a.formatSeparator : a.formatSeparator || ','),
      (this.unescapePrefix = a.unescapeSuffix ? '' : a.unescapePrefix || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : a.unescapeSuffix || ''),
      (this.nestingPrefix = a.nestingPrefix ? cr(a.nestingPrefix) : a.nestingPrefixEscaped || cr('$t(')),
      (this.nestingSuffix = a.nestingSuffix ? cr(a.nestingSuffix) : a.nestingSuffixEscaped || cr(')')),
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
    const r = (a, s) => (a && a.source === s ? ((a.lastIndex = 0), a) : new RegExp(s, 'g'));
    (this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = r(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = r(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`));
  }
  interpolate(r, a, s, u) {
    let f, d, m;
    const h = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
    function g(R) {
      return R.replace(/\$/g, '$$$$');
    }
    const y = (R) => {
      if (R.indexOf(this.formatSeparator) < 0) {
        const z = ap(a, h, R, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(z, void 0, s, { ...u, ...a, interpolationkey: R }) : z;
      }
      const P = R.split(this.formatSeparator),
        T = P.shift().trim(),
        Y = P.join(this.formatSeparator).trim();
      return this.format(ap(a, h, T, this.options.keySeparator, this.options.ignoreJSONStructure), Y, s, {
        ...u,
        ...a,
        interpolationkey: T,
      });
    };
    this.resetRegExp();
    const w = (u && u.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      S =
        u && u.interpolation && u.interpolation.skipOnVariables !== void 0
          ? u.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (R) => g(R) },
        { regex: this.regexp, safeValue: (R) => (this.escapeValue ? g(this.escape(R)) : g(R)) },
      ].forEach((R) => {
        for (m = 0; (f = R.regex.exec(r)); ) {
          const P = f[1].trim();
          if (((d = y(P)), d === void 0))
            if (typeof w == 'function') {
              const Y = w(r, f, u);
              d = typeof Y == 'string' ? Y : '';
            } else if (u && Object.prototype.hasOwnProperty.call(u, P)) d = '';
            else if (S) {
              d = f[0];
              continue;
            } else this.logger.warn(`missed to pass in variable ${P} for interpolating ${r}`), (d = '');
          else typeof d != 'string' && !this.useRawValueToEscape && (d = Zd(d));
          const T = R.safeValue(d);
          if (
            ((r = r.replace(f[0], T)),
            S ? ((R.regex.lastIndex += d.length), (R.regex.lastIndex -= f[0].length)) : (R.regex.lastIndex = 0),
            m++,
            m >= this.maxReplaces)
          )
            break;
        }
      }),
      r
    );
  }
  nest(r, a) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      u,
      f,
      d;
    function m(h, g) {
      const y = this.nestingOptionsSeparator;
      if (h.indexOf(y) < 0) return h;
      const w = h.split(new RegExp(`${y}[ ]*{`));
      let S = `{${w[1]}`;
      (h = w[0]), (S = this.interpolate(S, d));
      const O = S.match(/'/g),
        R = S.match(/"/g);
      ((O && O.length % 2 === 0 && !R) || R.length % 2 !== 0) && (S = S.replace(/'/g, '"'));
      try {
        (d = JSON.parse(S)), g && (d = { ...g, ...d });
      } catch (P) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, P), `${h}${y}${S}`;
      }
      return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, h;
    }
    for (; (u = this.nestingRegexp.exec(r)); ) {
      let h = [];
      (d = { ...s }),
        (d = d.replace && typeof d.replace != 'string' ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue;
      let g = !1;
      if (u[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(u[1])) {
        const y = u[1].split(this.formatSeparator).map((w) => w.trim());
        (u[1] = y.shift()), (h = y), (g = !0);
      }
      if (((f = a(m.call(this, u[1].trim(), d), d)), f && u[0] === r && typeof f != 'string')) return f;
      typeof f != 'string' && (f = Zd(f)),
        f || (this.logger.warn(`missed to resolve ${u[1]} for nesting ${r}`), (f = '')),
        g && (f = h.reduce((y, w) => this.format(y, w, s.lng, { ...s, interpolationkey: u[1].trim() }), f.trim())),
        (r = r.replace(u[0], f)),
        (this.regexp.lastIndex = 0);
    }
    return r;
  }
}
function g0(i) {
  let r = i.toLowerCase().trim();
  const a = {};
  if (i.indexOf('(') > -1) {
    const s = i.split('(');
    r = s[0].toLowerCase().trim();
    const u = s[1].substring(0, s[1].length - 1);
    r === 'currency' && u.indexOf(':') < 0
      ? a.currency || (a.currency = u.trim())
      : r === 'relativetime' && u.indexOf(':') < 0
      ? a.range || (a.range = u.trim())
      : u.split(';').forEach((d) => {
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
  return { formatName: r, formatOptions: a };
}
function fr(i) {
  const r = {};
  return function (s, u, f) {
    const d = u + JSON.stringify(f);
    let m = r[d];
    return m || ((m = i(eo(u), f)), (r[d] = m)), m(s);
  };
}
class v0 {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = At.create('formatter')),
      (this.options = r),
      (this.formats = {
        number: fr((a, s) => {
          const u = new Intl.NumberFormat(a, { ...s });
          return (f) => u.format(f);
        }),
        currency: fr((a, s) => {
          const u = new Intl.NumberFormat(a, { ...s, style: 'currency' });
          return (f) => u.format(f);
        }),
        datetime: fr((a, s) => {
          const u = new Intl.DateTimeFormat(a, { ...s });
          return (f) => u.format(f);
        }),
        relativetime: fr((a, s) => {
          const u = new Intl.RelativeTimeFormat(a, { ...s });
          return (f) => u.format(f, s.range || 'day');
        }),
        list: fr((a, s) => {
          const u = new Intl.ListFormat(a, { ...s });
          return (f) => u.format(f);
        }),
      }),
      this.init(r);
  }
  init(r) {
    const s = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }).interpolation;
    this.formatSeparator = s.formatSeparator ? s.formatSeparator : s.formatSeparator || ',';
  }
  add(r, a) {
    this.formats[r.toLowerCase().trim()] = a;
  }
  addCached(r, a) {
    this.formats[r.toLowerCase().trim()] = fr(a);
  }
  format(r, a, s) {
    let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return a.split(this.formatSeparator).reduce((m, h) => {
      const { formatName: g, formatOptions: y } = g0(h);
      if (this.formats[g]) {
        let w = m;
        try {
          const S = (u && u.formatParams && u.formatParams[u.interpolationkey]) || {},
            O = S.locale || S.lng || u.locale || u.lng || s;
          w = this.formats[g](m, O, { ...y, ...u, ...S });
        } catch (S) {
          this.logger.warn(S);
        }
        return w;
      } else this.logger.warn(`there was no format function for ${g}`);
      return m;
    }, r);
  }
}
function y0(i, r) {
  i.pending[r] !== void 0 && (delete i.pending[r], i.pendingCount--);
}
class w0 extends co {
  constructor(r, a, s) {
    let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = r),
      (this.store = a),
      (this.services = s),
      (this.languageUtils = s.languageUtils),
      (this.options = u),
      (this.logger = At.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = u.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = u.maxRetries >= 0 ? u.maxRetries : 5),
      (this.retryTimeout = u.retryTimeout >= 1 ? u.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(s, u.backend, u);
  }
  queueLoad(r, a, s, u) {
    const f = {},
      d = {},
      m = {},
      h = {};
    return (
      r.forEach((g) => {
        let y = !0;
        a.forEach((w) => {
          const S = `${g}|${w}`;
          !s.reload && this.store.hasResourceBundle(g, w)
            ? (this.state[S] = 2)
            : this.state[S] < 0 ||
              (this.state[S] === 1
                ? d[S] === void 0 && (d[S] = !0)
                : ((this.state[S] = 1),
                  (y = !1),
                  d[S] === void 0 && (d[S] = !0),
                  f[S] === void 0 && (f[S] = !0),
                  h[w] === void 0 && (h[w] = !0)));
        }),
          y || (m[g] = !0);
      }),
      (Object.keys(f).length || Object.keys(d).length) &&
        this.queue.push({ pending: d, pendingCount: Object.keys(d).length, loaded: {}, errors: [], callback: u }),
      {
        toLoad: Object.keys(f),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(m),
        toLoadNamespaces: Object.keys(h),
      }
    );
  }
  loaded(r, a, s) {
    const u = r.split('|'),
      f = u[0],
      d = u[1];
    a && this.emit('failedLoading', f, d, a),
      s && this.store.addResourceBundle(f, d, s, void 0, void 0, { skipCopy: !0 }),
      (this.state[r] = a ? -1 : 2);
    const m = {};
    this.queue.forEach((h) => {
      t0(h.loaded, [f], d),
        y0(h, r),
        a && h.errors.push(a),
        h.pendingCount === 0 &&
          !h.done &&
          (Object.keys(h.loaded).forEach((g) => {
            m[g] || (m[g] = {});
            const y = h.loaded[g];
            y.length &&
              y.forEach((w) => {
                m[g][w] === void 0 && (m[g][w] = !0);
              });
          }),
          (h.done = !0),
          h.errors.length ? h.callback(h.errors) : h.callback());
    }),
      this.emit('loaded', m),
      (this.queue = this.queue.filter((h) => !h.done));
  }
  read(r, a, s) {
    let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      d = arguments.length > 5 ? arguments[5] : void 0;
    if (!r.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: r, ns: a, fcName: s, tried: u, wait: f, callback: d });
      return;
    }
    this.readingCalls++;
    const m = (g, y) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const w = this.waitingReads.shift();
          this.read(w.lng, w.ns, w.fcName, w.tried, w.wait, w.callback);
        }
        if (g && y && u < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, r, a, s, u + 1, f * 2, d);
          }, f);
          return;
        }
        d(g, y);
      },
      h = this.backend[s].bind(this.backend);
    if (h.length === 2) {
      try {
        const g = h(r, a);
        g && typeof g.then == 'function' ? g.then((y) => m(null, y)).catch(m) : m(null, g);
      } catch (g) {
        m(g);
      }
      return;
    }
    return h(r, a, m);
  }
  prepareLoading(r, a) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      u = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn('No backend was added via i18next.use. Will not load resources.'), u && u();
    typeof r == 'string' && (r = this.languageUtils.toResolveHierarchy(r)), typeof a == 'string' && (a = [a]);
    const f = this.queueLoad(r, a, s, u);
    if (!f.toLoad.length) return f.pending.length || u(), null;
    f.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(r, a, s) {
    this.prepareLoading(r, a, {}, s);
  }
  reload(r, a, s) {
    this.prepareLoading(r, a, { reload: !0 }, s);
  }
  loadOne(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const s = r.split('|'),
      u = s[0],
      f = s[1];
    this.read(u, f, 'read', void 0, void 0, (d, m) => {
      d && this.logger.warn(`${a}loading namespace ${f} for language ${u} failed`, d),
        !d && m && this.logger.log(`${a}loaded namespace ${f} for language ${u}`, m),
        this.loaded(r, d, m);
    });
  }
  saveMissing(r, a, s, u, f) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      m = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(a)) {
      this.logger.warn(
        `did not save key "${s}" as the namespace "${a}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(s == null || s === '')) {
      if (this.backend && this.backend.create) {
        const h = { ...d, isUpdate: f },
          g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let y;
            g.length === 5 ? (y = g(r, a, s, u, h)) : (y = g(r, a, s, u)),
              y && typeof y.then == 'function' ? y.then((w) => m(null, w)).catch(m) : m(null, y);
          } catch (y) {
            m(y);
          }
        else g(r, a, s, u, m, h);
      }
      !r || !r[0] || this.store.addResource(r[0], a, s, u);
    }
  }
}
function op() {
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
    overloadTranslationOptionHandler: function (r) {
      let a = {};
      if (
        (typeof r[1] == 'object' && (a = r[1]),
        typeof r[1] == 'string' && (a.defaultValue = r[1]),
        typeof r[2] == 'string' && (a.tDescription = r[2]),
        typeof r[2] == 'object' || typeof r[3] == 'object')
      ) {
        const s = r[3] || r[2];
        Object.keys(s).forEach((u) => {
          a[u] = s[u];
        });
      }
      return a;
    },
    interpolation: {
      escapeValue: !0,
      format: (i) => i,
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
function sp(i) {
  return (
    typeof i.ns == 'string' && (i.ns = [i.ns]),
    typeof i.fallbackLng == 'string' && (i.fallbackLng = [i.fallbackLng]),
    typeof i.fallbackNS == 'string' && (i.fallbackNS = [i.fallbackNS]),
    i.supportedLngs && i.supportedLngs.indexOf('cimode') < 0 && (i.supportedLngs = i.supportedLngs.concat(['cimode'])),
    i
  );
}
function Ba() {}
function S0(i) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((a) => {
    typeof i[a] == 'function' && (i[a] = i[a].bind(i));
  });
}
class hi extends co {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = sp(r)),
      (this.services = {}),
      (this.logger = At),
      (this.modules = { external: [] }),
      S0(this),
      a && !this.isInitialized && !r.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(r, a), this;
      setTimeout(() => {
        this.init(r, a);
      }, 0);
    }
  }
  init() {
    var r = this;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof a == 'function' && ((s = a), (a = {})),
      !a.defaultNS &&
        a.defaultNS !== !1 &&
        a.ns &&
        (typeof a.ns == 'string' ? (a.defaultNS = a.ns) : a.ns.indexOf('translation') < 0 && (a.defaultNS = a.ns[0]));
    const u = op();
    (this.options = { ...u, ...this.options, ...sp(a) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = { ...u.interpolation, ...this.options.interpolation }),
      a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator),
      a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
    function f(y) {
      return y ? (typeof y == 'function' ? new y() : y) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? At.init(f(this.modules.logger), this.options) : At.init(null, this.options);
      let y;
      this.modules.formatter ? (y = this.modules.formatter) : typeof Intl < 'u' && (y = v0);
      const w = new rp(this.options);
      this.store = new tp(this.options.resources, this.options);
      const S = this.services;
      (S.logger = At),
        (S.resourceStore = this.store),
        (S.languageUtils = w),
        (S.pluralResolver = new m0(w, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        y &&
          (!this.options.interpolation.format || this.options.interpolation.format === u.interpolation.format) &&
          ((S.formatter = f(y)),
          S.formatter.init(S, this.options),
          (this.options.interpolation.format = S.formatter.format.bind(S.formatter))),
        (S.interpolator = new h0(this.options)),
        (S.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (S.backendConnector = new w0(f(this.modules.backend), S.resourceStore, S, this.options)),
        S.backendConnector.on('*', function (O) {
          for (var R = arguments.length, P = new Array(R > 1 ? R - 1 : 0), T = 1; T < R; T++) P[T - 1] = arguments[T];
          r.emit(O, ...P);
        }),
        this.modules.languageDetector &&
          ((S.languageDetector = f(this.modules.languageDetector)),
          S.languageDetector.init && S.languageDetector.init(S, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((S.i18nFormat = f(this.modules.i18nFormat)), S.i18nFormat.init && S.i18nFormat.init(this)),
        (this.translator = new to(this.services, this.options)),
        this.translator.on('*', function (O) {
          for (var R = arguments.length, P = new Array(R > 1 ? R - 1 : 0), T = 1; T < R; T++) P[T - 1] = arguments[T];
          r.emit(O, ...P);
        }),
        this.modules.external.forEach((O) => {
          O.init && O.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      s || (s = Ba),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const y = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      y.length > 0 && y[0] !== 'dev' && (this.options.lng = y[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach((y) => {
        this[y] = function () {
          return r.store[y](...arguments);
        };
      }),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((y) => {
        this[y] = function () {
          return r.store[y](...arguments), r;
        };
      });
    const h = ii(),
      g = () => {
        const y = (w, S) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn('init: i18next is already initialized. You should call init just once!'),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            h.resolve(S),
            s(w, S);
        };
        if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized)
          return y(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, y);
      };
    return this.options.resources || !this.options.initImmediate ? g() : setTimeout(g, 0), h;
  }
  loadResources(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ba;
    const u = typeof r == 'string' ? r : this.language;
    if ((typeof r == 'function' && (s = r), !this.options.resources || this.options.partialBundledLanguages)) {
      if (u && u.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return s();
      const f = [],
        d = (m) => {
          if (!m || m === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(m).forEach((g) => {
            g !== 'cimode' && f.indexOf(g) < 0 && f.push(g);
          });
        };
      u ? d(u) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((h) => d(h)),
        this.options.preload && this.options.preload.forEach((m) => d(m)),
        this.services.backendConnector.load(f, this.options.ns, (m) => {
          !m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(m);
        });
    } else s(null);
  }
  reloadResources(r, a, s) {
    const u = ii();
    return (
      r || (r = this.languages),
      a || (a = this.options.ns),
      s || (s = Ba),
      this.services.backendConnector.reload(r, a, (f) => {
        u.resolve(), s(f);
      }),
      u
    );
  }
  use(r) {
    if (!r)
      throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!r.type)
      throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    return (
      r.type === 'backend' && (this.modules.backend = r),
      (r.type === 'logger' || (r.log && r.warn && r.error)) && (this.modules.logger = r),
      r.type === 'languageDetector' && (this.modules.languageDetector = r),
      r.type === 'i18nFormat' && (this.modules.i18nFormat = r),
      r.type === 'postProcessor' && am.addPostProcessor(r),
      r.type === 'formatter' && (this.modules.formatter = r),
      r.type === '3rdParty' && this.modules.external.push(r),
      this
    );
  }
  setResolvedLanguage(r) {
    if (!(!r || !this.languages) && !(['cimode', 'dev'].indexOf(r) > -1))
      for (let a = 0; a < this.languages.length; a++) {
        const s = this.languages[a];
        if (!(['cimode', 'dev'].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(r, a) {
    var s = this;
    this.isLanguageChangingTo = r;
    const u = ii();
    this.emit('languageChanging', r);
    const f = (h) => {
        (this.language = h),
          (this.languages = this.services.languageUtils.toResolveHierarchy(h)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(h);
      },
      d = (h, g) => {
        g
          ? (f(g),
            this.translator.changeLanguage(g),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', g),
            this.logger.log('languageChanged', g))
          : (this.isLanguageChangingTo = void 0),
          u.resolve(function () {
            return s.t(...arguments);
          }),
          a &&
            a(h, function () {
              return s.t(...arguments);
            });
      },
      m = (h) => {
        !r && !h && this.services.languageDetector && (h = []);
        const g = typeof h == 'string' ? h : this.services.languageUtils.getBestMatchFromCodes(h);
        g &&
          (this.language || f(g),
          this.translator.language || this.translator.changeLanguage(g),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(g)),
          this.loadResources(g, (y) => {
            d(y, g);
          });
      };
    return (
      !r && this.services.languageDetector && !this.services.languageDetector.async
        ? m(this.services.languageDetector.detect())
        : !r && this.services.languageDetector && this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(m)
          : this.services.languageDetector.detect(m)
        : m(r),
      u
    );
  }
  getFixedT(r, a, s) {
    var u = this;
    const f = function (d, m) {
      let h;
      if (typeof m != 'object') {
        for (var g = arguments.length, y = new Array(g > 2 ? g - 2 : 0), w = 2; w < g; w++) y[w - 2] = arguments[w];
        h = u.options.overloadTranslationOptionHandler([d, m].concat(y));
      } else h = { ...m };
      (h.lng = h.lng || f.lng),
        (h.lngs = h.lngs || f.lngs),
        (h.ns = h.ns || f.ns),
        (h.keyPrefix = h.keyPrefix || s || f.keyPrefix);
      const S = u.options.keySeparator || '.';
      let O;
      return (
        h.keyPrefix && Array.isArray(d)
          ? (O = d.map((R) => `${h.keyPrefix}${S}${R}`))
          : (O = h.keyPrefix ? `${h.keyPrefix}${S}${d}` : d),
        u.t(O, h)
      );
    };
    return typeof r == 'string' ? (f.lng = r) : (f.lngs = r), (f.ns = a), (f.keyPrefix = s), f;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(r) {
    this.options.defaultNS = r;
  }
  hasLoadedNamespace(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages), !1;
    const s = a.lng || this.resolvedLanguage || this.languages[0],
      u = this.options ? this.options.fallbackLng : !1,
      f = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === 'cimode') return !0;
    const d = (m, h) => {
      const g = this.services.backendConnector.state[`${m}|${h}`];
      return g === -1 || g === 2;
    };
    if (a.precheck) {
      const m = a.precheck(this, d);
      if (m !== void 0) return m;
    }
    return !!(
      this.hasResourceBundle(s, r) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(s, r) && (!u || d(f, r)))
    );
  }
  loadNamespaces(r, a) {
    const s = ii();
    return this.options.ns
      ? (typeof r == 'string' && (r = [r]),
        r.forEach((u) => {
          this.options.ns.indexOf(u) < 0 && this.options.ns.push(u);
        }),
        this.loadResources((u) => {
          s.resolve(), a && a(u);
        }),
        s)
      : (a && a(), Promise.resolve());
  }
  loadLanguages(r, a) {
    const s = ii();
    typeof r == 'string' && (r = [r]);
    const u = this.options.preload || [],
      f = r.filter((d) => u.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return f.length
      ? ((this.options.preload = u.concat(f)),
        this.loadResources((d) => {
          s.resolve(), a && a(d);
        }),
        s)
      : (a && a(), Promise.resolve());
  }
  dir(r) {
    if (
      (r ||
        (r =
          this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
      !r)
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
      s = (this.services && this.services.languageUtils) || new rp(op());
    return a.indexOf(s.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    return new hi(r, a);
  }
  cloneInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ba;
    const s = r.forkResourceStore;
    s && delete r.forkResourceStore;
    const u = { ...this.options, ...r, isClone: !0 },
      f = new hi(u);
    return (
      (r.debug !== void 0 || r.prefix !== void 0) && (f.logger = f.logger.clone(r)),
      ['store', 'services', 'language'].forEach((m) => {
        f[m] = this[m];
      }),
      (f.services = { ...this.services }),
      (f.services.utils = { hasLoadedNamespace: f.hasLoadedNamespace.bind(f) }),
      s && ((f.store = new tp(this.store.data, u)), (f.services.resourceStore = f.store)),
      (f.translator = new to(f.services, u)),
      f.translator.on('*', function (m) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), y = 1; y < h; y++) g[y - 1] = arguments[y];
        f.emit(m, ...g);
      }),
      f.init(u, a),
      (f.translator.options = u),
      (f.translator.backendConnector.services.utils = { hasLoadedNamespace: f.hasLoadedNamespace.bind(f) }),
      f
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
const Qe = hi.createInstance();
Qe.createInstance = hi.createInstance;
Qe.createInstance;
Qe.dir;
Qe.init;
Qe.loadResources;
Qe.reloadResources;
Qe.use;
Qe.changeLanguage;
Qe.getFixedT;
Qe.t;
Qe.exists;
Qe.setDefaultNamespace;
Qe.hasLoadedNamespace;
Qe.loadNamespaces;
Qe.loadLanguages;
const x0 = 'Français',
  k0 = 'Your Vehicle Renewal Reminder',
  b0 = 'Manage how and when you get your vehicle registration renewal reminders',
  C0 = {
    cart: 'Cart',
    search: 'Search',
    signIn: 'Sign in',
    account: 'Account',
    accountOptionsSignOut: {
      heading: 'Sign in to your account',
      subhead: 'If you don’t have one yet, you can <1>create an account</1>.',
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
  E0 = {
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
  N0 = {
    backButton: 'Back',
    heading: 'Vehicle Registration Renewal Reminders',
    checkboxHeading: 'Choose as many options as you would like:',
    subsectionOne: {
      heading: 'Email and text reminder',
      subhead: 'Choose when and how you receive your reminders.',
      questionOne: {
        question: 'How do you want to be reminded?',
        options: [{ label: 'Email' }, { label: 'Text Message (coming soon)' }],
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
        'Looks like you don’t have a mobile phone number on file, would you like to add one? This will allow you to receive text message reminders on your mobile device.',
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
        descriptionTwo: 'Make sure your name matches your driver’s licence.',
        givenNames: { label: 'Given name(s)' },
        lastName: { label: 'Last name' },
        vin: { label: 'VIN (First 6 characters)' },
        licence: { label: 'Licence plate' },
      },
    },
    tooltip: {
      vin: {
        title: 'What’s in a VIN?',
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
      content: 'You have made changes that haven’t been saved yet. Would you like to discard all changes?',
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
  P0 = {
    genericSuccess: 'Successfully made changes to "My Account"',
    phoneSuccess: 'Your changes have been saved.',
    backButton: 'Back to Vehicle Registration Renewal Reminders',
    heading: 'My Account',
    email: 'Email',
    phone: 'Cellphone number',
    language: 'Reminder language',
    english: 'English',
    french: 'French',
    save: 'Save changes',
    cancel: 'Cancel',
    edit: 'Edit',
    addPhone: 'Add phone number',
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
      subheading1: 'Add a Canadian cellphone number to receive registration renewal reminders by text message.',
      subheading2: 'A 6-digit access code will be sent to this phone number for activation.',
      invalidNumber: 'You must provide a Canadian cell phone number.',
    },
  },
  O0 = {
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
    },
    checkEmailScreen: {
      title: 'Check your email',
      description1: 'Enter the 6-digit code we sent to your email. This code is valid for 30 minutes.',
      description2: 'If you didn’t get it, <1>resend code</1>.',
      resendCodeMsg: 'The 6-digit code was resent to your email. This code is valid for 30 minutes.',
      codeInputLabel: '',
      codePlaceholder: '',
      primaryButton: 'Submit',
      secondaryButton: 'Send a text message instead',
    },
    phoneScreen: {
      backButton: 'Back',
      title: 'Sign in',
      description1: 'If you don’t have one yet, you can <1>create an account.</1>',
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
      description3: "If you didn't get it, you can <1>resend the code</1> after 2 minutes.",
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
      licenceNumber: 'Driver’s licence number',
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
  L0 = {
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
    expiredCodeSMS: '[EN] Placeholder for expired code',
    duplicatedVehicle: 'This vehicle has already been added to your account.',
    unmatchedEmail: 'Emails must match.',
    genericErrMsg: 'Sorry, we are experiencing technical difficulties. Please try again later.',
    gBizFailErrorMsg:
      'Oops! Something went wrong. Please double-check your input and make sure you have entered the correct information.',
  },
  T0 = { unavailableVehicle: 'Vehicle details currently unavailable.' },
  R0 = { copyright: '© Government of New Brunswick', privacy: '<1>Privacy</1>', disclaimer: '<1>Disclaimer</1>' },
  I0 = {
    SwitchLanguage: x0,
    pageTitle: k0,
    pageDescription: b0,
    mainNavigation: C0,
    notFound: E0,
    notifications: N0,
    accountSettings: P0,
    authentication: O0,
    errorsMsg: L0,
    warningMsg: T0,
    footer: R0,
  },
  _0 = 'English',
  A0 = "Rappel pour le renouvellement de l'immatriculation de votre véhicule",
  z0 =
    'Gérez le moment et la manière dont vous recevez les rappels de renouvellement d’immatriculation de votre véhicule.',
  M0 = {
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
  j0 = {
    heading: '404',
    description1: 'Impossible de trouver la page',
    description2:
      'Il est possible que la page que vous cherchez ait été retirée, renommée ou qu’elle ne soit pas disponible temporairement.',
    description3: 'Veuillez essayer ce qui suit.',
    description4:
      'Si vous avez inscrit l’adresse de la page dans la barre d’adresse, assurez-vous de l’avoir épelée correctement',
    description5: "Ou encore, essayer d'ouvrir <1>la page du Service Nouveau-Brunswick</1>",
    description6: "Ou encore, essayer d'ouvrir la page <1>Recherche du gouvernement du Nouveau-Brunswick</1>",
    description7: 'Cliquez sur le bouton Précédent pour essayer un autre lien.',
  },
  F0 = {
    backButton: 'Précédent',
    heading: 'Rappels de renouvellement de l’immatriculation des véhicules',
    checkboxHeading: "Choisissez autant d'options que vous le souhaitez :",
    subsectionOne: {
      heading: 'Rappel par courriel et par texto',
      subhead: 'Choisissez quand et comment vous recevez vos rappels',
      questionOne: {
        question: 'Comment voulez-vous recevoir vos rappels?',
        options: [{ label: 'Courriel' }, { label: 'Texto (bientôt disponible)' }],
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
      subhead: 'Vous pouvez arrêter de recevoir des rappels papier pour l’immatriculation de vos véhicules.',
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
        'Il semblerait que vous n’ayez pas de numéro de cellulaire dans votre dossier. Souhaitez-vous en ajouter un? Cela vous permettra de recevoir des rappels par texto sur votre appareil mobile.',
      description2:
        'Vous pouvez également passer cette étape et ajouter votre numéro de cellulaire à « Mon compte » plus tard.',
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
          'Veuillez noter qu’en choisissant de ne plus recevoir de rappel papier concernant le renouvellement de l’immatriculation de ce véhicule, vous acceptez de ne plus recevoir de rappel papier pour aucun des véhicules immatriculés à votre nom. Ce choix n’aura aucune incidence sur les rappels envoyés par courriel.',
        descriptionTwo: 'Assurez-vous que votre nom correspond à celui qui figure sur votre permis de conduire.',
        givenNames: { label: 'Prénom(s)' },
        lastName: { label: 'Nom de famille' },
        vin: { label: 'NIV (six premiers caractères)' },
        licence: { label: "Plaque d'immatriculation" },
      },
    },
    tooltip: {
      vin: {
        title: 'Qu’est-ce qu’un NIV?',
        listOne: [
          { item: 'Votre numéro d’identification du véhicule (NIV) comporte 17 caractères' },
          { item: 'Vous devez uniquement indiquer les six premiers caractères du NIV' },
          { item: 'Vous le trouverez sur votre certificat d’immatriculation du véhicule' },
          { item: 'Pour les remorques artisanales ou les véhicules sans NIV, veuillez indiquer NA' },
        ],
        listTwo: [
          { item: 'Votre numéro d’identification du véhicule (NIV) comporte 17 caractères' },
          { item: 'Vous le trouverez sur votre certificat d’immatriculation du véhicule' },
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
      description: 'Comment s’est passé l’enregistrement de vos rappels de renouvellement?',
      primaryButton: 'Soumettre',
      tertiaryButton: 'Passer',
      textAreaLabel: 'Comment pourrions-nous l’améliorer?',
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
        'Vous avez effectué des modifications qui n’ont pas encore été enregistrées. Souhaitez-vous annuler toutes les modifications?',
      primaryButtonLabel: 'Supprimer',
      secondaryButtonLabel: 'Annuler',
    },
    toastMessages: {
      saveChangesSuccess:
        'Les rappels de renouvellement d’immatriculation de véhicules ont été enregistrés avec succès.',
      stopPaperSuccess: 'La demande d’arrêter les rappels papier pour tous les véhicules a été envoyée avec succès.',
      addVehicleSuccess: 'Votre véhicule <strong>"{{vehicleName}}"</strong> a été ajouté avec succès.',
      editCustomNameSuccess: 'Le nom personnalisé <strong>"{{customName}}"</strong> a été enregistré avec succès.',
      addCustomNameSuccess: 'Le nom personnalisé <strong>"{{customName}}"</strong> a été enregistré avec succès.',
      removeVehicleSuccess: 'Votre véhicule <strong>"{{vehicleName}}"</strong> a été supprimé avec succès.',
      addVehicleAlert:
        'Avant de choisir comment et quand vous recevez vos rappels, vous devez <1>ajouter votre (vos) véhicule(s)</1>.',
    },
  },
  D0 = {
    genericSuccess: 'Les modifications à  "Mon compte" ont été effectuées avec succès',
    phoneSuccess: 'Supprimer ce numéro de cellulaire',
    backButton: 'Retourner aux rappels de renouvellement de l’immatriculation des véhicules',
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
    editLanguage: {
      pageHeading: 'Modifier mon compte',
      description: 'Choisissez votre langue de préférence pour les rappels.',
    },
    emailModal: {
      save: 'Enregistrer le courriel',
      heading: 'Modifier le courriel',
      subheading:
        'Modifiez l’adresse courriel à laquelle vous souhaitez recevoir des rappels de renouvellement d’immatriculation',
      emailPlaceholder: 'utilisateur@exemple.com',
    },
    phoneModal: {
      save: 'Enregistrer le numéro de cellulaire',
      headingEdit: 'Modifier le numéro de téléphone',
      headingAdd: 'Ajouter numéro de téléphone',
      subheading1:
        'Ajoutez un numéro de cellulaire canadien pour recevoir des rappels de renouvellement d’immatriculation par texto.',
      subheading2: 'Un code d’accès à six chiffres sera envoyé à ce numéro de téléphone aux fins d’activation.',
      invalidNumber: 'Vous devez fournir un numéro de cellulaire canadien.',
    },
  },
  $0 = {
    termsAndConditions: {
      title:
        'Conditions générales : rappels concernant le renouvellement de l’immatriculation des véhicules automobiles',
      content:
        'En acceptant les conditions générales de ce service, vous acceptez et reconnaissez avoir lu et compris ce qui suit : <unorderedList><listItem>Service Nouveau-Brunswick enverra des rappels sous la forme de courriels ou de messages textes aux adresses de courriel et aux numéros de téléphone fournis à la fréquence choisie avant la date d’expiration de l’immatriculation du véhicule visé par cette transaction.</listItem><listItem>L’information recueillie pour l’envoi de ce rappel est conservée par Service Nouveau-Brunswick jusqu’à ce que vous supprimiez le véhicule de votre compte afin de ne plus recevoir ces courriels ou messages textes de rappel.</listItem><listItem>Vous reconnaissez que le fait de supprimer votre véhicule de votre compte en vertu de la disposition relative aux rappels fera uniquement en sorte que vous ne receviez plus les courriels ou messages textes de rappel concernant le renouvellement de l’immatriculation. En tant que propriétaire ou agent, vous reconnaissez que cela ne vous dispense en aucune manière des autres obligations légales, notamment le transfert de propriété, le renouvellement de l’immatriculation et les couvertures d’assurance responsabilité civile adéquates.</listItem><listItem>Vous reconnaissez que, pour recevoir les rappels par courriel ou message texte, vous devez fournir la bonne adresse de courriel et le bon numéro de téléphone. Si votre adresse de courriel ou votre numéro de téléphone change, il vous incombe d’apporter les changements qui s’imposent dans les réglages de votre compte.</listItem><listItem>Ni Service Nouveau-Brunswick ni le gouvernement du Nouveau-Brunswick ne peuvent être tenus responsables de tout dommage, amende ou pénalité attribuable à un courriel ou à un message texte non transmis, et ce, quelle que soit la raison.</listItem><listItem>Les rappels concernant le renouvellement de l’immatriculation des véhicules automobiles envoyés par courriel ou message texte ne sont ni cryptés ni sécurisés. Ces notifications par courriel ou message texte pourraient être perdues ou interceptées ou être lues ou modifiées par des personnes qui ont accès à votre compte de courriels ou à votre téléphone. En acceptant d’utiliser ce service, vous acceptez les risques et reconnaissez que ni Service Nouveau-Brunswick ni le gouvernement du Nouveau-Brunswick ne pourront être tenus responsables si vous n’êtes pas en mesure d’accéder aux courriels et aux messages textes de notification ou de les recevoir ni être tenus pour responsables pour un retard dans la transmission de ces notifications ou une incapacité à les transmettre.</listItem><listItem>Ce service vous permet de soumettre une demande de retrait des rappels par document papier. En entrant les renseignements pour un véhicule lors de cette demande, vous acceptez de ne plus recevoir ces rappels par document papier pour tous les véhicules immatriculés à votre nom.</listItem><listItem>Les présentes conditions générales peuvent être modifiées à l’occasion. Il vous incombe d’en prendre connaissance périodiquement et chaque fois que vous vous connectez à votre compte. Vous acceptez que votre utilisation du service après toute modification de ces conditions constitue votre accord avec les nouvelles conditions. Si vous n’êtes pas en accord avec les nouvelles conditions générales, il vous incombe de retirer tous les véhicules de votre compte pour mettre un terme à l’envoi de ces rappels.</listItem></unorderedList>',
    },
    emailScreen: {
      title: 'Ouvrir une session',
      description1: 'Si vous n’avez pas de compte, vous pouvez en <1>créer un maintenant.</1>',
      description2: 'Entrez votre adresse de courriel pour recevoir un code d’accès.',
      emailInputLabel: 'Courriel',
      emailPlaceholder: 'utilisateur@exemple.com',
      checkboxLabel: 'Garder ma session ouverte',
      primaryButton: 'Envoyer le code',
      errorMsg: 'L’adresse courriel doit respecter le format suivant : utilisateur@exemple.com',
      termsAndConditions: 'En utilisant ce service, vous acceptez les <1>conditions générales.</1>',
    },
    checkEmailScreen: {
      title: 'Vérifiez votre courriel',
      description1:
        'Saisissez le code à 6 chiffres que nous vous avons envoyé par courriel. Ce code est valable pendant 30 minutes.',
      description2: 'Si vous ne l’avez pas reçu, cliquez sur <1>renvoyez le code</1>.',
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
      description1: 'Saisissez le code à six chiffres que nous vous avons envoyé par texto.',
      description2: 'Ce code est valable pendant 30 minutes.',
      description3: 'Si vous ne l’avez pas reçu, vous <1>pouvez le redemander</1> après 2 minutes.',
      resendCodeMsg: 'Le code à 6 chiffres a été vous avons envoyé par texto. Ce code est valable pendant 30 minutes.',
      codeInputLabel: 'Entrez un code à 6 chiffres',
      codePlaceholder: '',
      secondaryButton: 'Envoyez plutôt un courriel',
    },
    codeAuthentication: { fieldLegend: 'Saisissez le code à 6 chiffres', label: 'Chiffre' },
    signUpScreen: {
      title: 'S’inscrire',
      description: 'Pour recevoir des rappels, veuillez fournir les renseignements suivants.',
      firstName: 'Prénom(s)',
      lastName: 'Nom de famille',
      email: 'Courriel',
      confirmEmail: 'Confirmez l’adresse de courriel',
      smsNumber: 'Numéro de cellulaire',
      licenceNumber: 'Numéro de permis de conduire',
      licencePlate: "Plaque d'immatriculation",
      primaryButton: 'Suivant',
      placeHolderText: 'utilisateur@exemple.com',
      termsAndConditions: 'J’accepte les <1>conditions générales.</1>',
    },
    helpSection: {
      title: 'Pour obtenir de l’aide',
      email: 'Courriel : <1>snb@snb.ca</1>',
      phone: 'Numéro sans frais : <1>1-888-832-2762</1> (option no 2)',
    },
    modal: { emailHeading: 'Vérifiez votre courriel', phoneHeading: 'Vérifiez votre cellulaire.' },
  },
  U0 = {
    invalidVin:
      'Ce NIV n’est pas valide. Vous devez saisir les six premiers caractères de votre NIV. S’il s’agit d’une remorque artisanale ou d’un véhicule qui n’a pas de NIV, veuillez écrire NA.',
    invalidLicence: 'Cette plaque d’immatriculation n’est pas valide.',
    invalidGivenNames: 'Veuillez saisir un prénom valide.',
    invalidLastName: 'Veuillez saisir un nom de famille valide.',
    nonregisteredLicence: 'Aucun résultat trouvé.',
    customNameWithProfanity: 'Désolé, nous ne pouvons pas accepter ce nom. Veuillez réessayer.',
    invalidCustomName: "Ce nom personnalisé n'est pas valide.",
    invalidSMSNumber: 'Ce numéro de téléphone n’est pas valide.',
    invalidCodeEmail:
      'Le code que vous avez saisi n’est pas valide. Vérifiez votre courriel de nouveau ou cliquez sur <1>renvoyez le code</1>.',
    expiredCodeEmail:
      'Le code que vous avez saisi a expiré. Vérifiez votre boîte de réception à nouveau ou cliquez sur <1>renvoyer le code</1>.',
    invalidCodeSMS:
      'Le code que vous avez saisi n’est pas valide. Vérifiez à nouveau le texto ou cliquez sur <1>renvoyer le code</1>.',
    expiredCodeSMS:
      'Le code que vous avez saisi a expiré. Vérifiez à nouveau le texto ou cliquez sur <1>renvoyer le code</1>.',
    duplicatedVehicle: 'Ce véhicle a été déjà ajouté à votre compte',
    unmatchedEmail: 'Les courriels doivent correspondre.',
    genericErrMsg: 'Nous sommes désolés, nous éprouvons des problèmes techniques. Veuillez réessayer plus tard.',
    gBizFailErrorMsg:
      "Oups ! Une erreur s'est produite. Veuillez revérifier votre saisie et vous assurer que vous avez saisi les informations correctes.",
  },
  V0 = { unavailableVehicle: 'Les détails du véhicule ne sont pas disponibles pour le moment.' },
  B0 = {
    copyright: '© Gouvernement du Nouveau-Brunswick',
    privacy: '<1>Confidentialité</1>',
    disclaimer: '<1>Décharge</1>',
  },
  H0 = {
    SwitchLanguage: _0,
    pageTitle: A0,
    pageDescription: z0,
    mainNavigation: M0,
    notFound: j0,
    notifications: F0,
    accountSettings: D0,
    authentication: $0,
    errorsMsg: U0,
    warningMsg: V0,
    footer: B0,
  },
  W0 = { en: { translation: I0 }, fr: { translation: H0 } };
Qe.use(P1).init({ resources: W0, fallbackLng: 'en', supportedLngs: ['en', 'fr'], interpolation: { escapeValue: !1 } });
const Y0 = '/notifications',
  om = Y0;
console.log('Debug: browser base url is:', om);
pg.createRoot(document.getElementById('root')).render(
  me.jsx(ro.StrictMode, { children: me.jsx(cv, { basename: om, children: me.jsx(X1, {}) }) })
);
export {
  xi as F,
  O1 as I,
  Tn as S,
  tw as a,
  Q0 as b,
  J0 as c,
  Vg as d,
  q0 as e,
  Z0 as f,
  Hl as g,
  G0 as h,
  f1 as i,
  me as j,
  K0 as k,
  Ul as l,
  qy as m,
  no as n,
  m1 as o,
  X0 as p,
  d1 as q,
  D as r,
  Qe as s,
  N1 as t,
  I1 as u,
  C1 as v,
  Fl as w,
  g1 as x,
};
