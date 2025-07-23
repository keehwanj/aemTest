const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/DefaultPage-BxLOqI7N.js',
      'assets/helpers-C0u_kQzT.js',
      'assets/useRenewBackEndSession-CO_2vleL.js',
      'assets/index-WhvY4R74.js',
      'assets/DefaultPage-hUexiOZB.css',
      'assets/AboutTheServicePage-Dz-I7EXH.js',
      'assets/Alert-BfYOY8ZM.js',
      'assets/Alert-CDY7gzbh.css',
      'assets/Checkbox-CasfAR4B.js',
      'assets/Error-DFdCy2av.js',
      'assets/Checkbox-DoX2BmJY.css',
      'assets/useProgressNavStatus-672YTHrA.js',
      'assets/Trans-BzCee1Be.js',
      'assets/EligibilityPage-BG45Y7Bp.js',
      'assets/ButtonGroup-CT8cUe_I.js',
      'assets/ButtonGroup-Bt-Pdbu7.css',
      'assets/EligibilityPage-BQDXKLrl.css',
      'assets/DriverLicenceDetailsPage-C4YUk9OO.js',
      'assets/TextInput-CEl78Xxn.js',
      'assets/Modal-Cq_LOJT1.js',
      'assets/Modal-D8r80Rno.css',
      'assets/TextInput-jqIIZh4p.css',
      'assets/Recaptcha-Bh2fcUjO.js',
      'assets/Recaptcha-B5O9RxV6.css',
      'assets/DriverLicenceDetailsPage-CL3RYzJZ.css',
      'assets/CertificationPage-BzB53SWS.js',
      'assets/ContactInformationPage-BBa7EglX.js',
      'assets/index.types-CnoW_BGG.js',
      'assets/PaymentConfirmationPage-BJR9jjEg.js',
      'assets/FeedbackModal-BGMbkGbv.js',
      'assets/FeedbackModal-D0wXKfEL.css',
      'assets/PaymentConfirmationPage-CsiWIL2w.css',
      'assets/TemporaryDriversLicencePage-CrzaiXUY.js',
      'assets/Helmet-CWIySJt2.js',
      'assets/TemporaryDriversLicenceRequestPage-ozNSZELp.js',
      'assets/index-CIkjUX1B.js',
    ])
) => i.map((i) => d[i]);
function Yg(n, r) {
  for (var o = 0; o < r.length; o++) {
    const a = r[o];
    if (typeof a != 'string' && !Array.isArray(a)) {
      for (const l in a)
        if (l !== 'default' && !(l in n)) {
          const c = Object.getOwnPropertyDescriptor(a, l);
          c && Object.defineProperty(n, l, c.get ? c : { enumerable: !0, get: () => a[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === 'childList')
        for (const d of c.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && a(d);
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
  function a(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = o(l);
    fetch(l.href, c);
  }
})();
function la(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
function SC(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var r = n.default;
  if (typeof r == 'function') {
    var o = function a() {
      return this instanceof a ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    o.prototype = r.prototype;
  } else o = {};
  return (
    Object.defineProperty(o, '__esModule', { value: !0 }),
    Object.keys(n).forEach(function (a) {
      var l = Object.getOwnPropertyDescriptor(n, a);
      Object.defineProperty(
        o,
        a,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return n[a];
              },
            }
      );
    }),
    o
  );
}
var ll = { exports: {} },
  pi = {},
  ul = { exports: {} },
  ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd;
function qg() {
  if (fd) return ue;
  fd = 1;
  var n = Symbol.for('react.element'),
    r = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    a = Symbol.for('react.strict_mode'),
    l = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    d = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    S = Symbol.iterator;
  function w(C) {
    return C === null || typeof C != 'object'
      ? null
      : ((C = (S && C[S]) || C['@@iterator']), typeof C == 'function' ? C : null);
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
    E = {};
  function T(C, R, se) {
    (this.props = C), (this.context = R), (this.refs = E), (this.updater = se || O);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (C, R) {
      if (typeof C != 'object' && typeof C != 'function' && C != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, C, R, 'setState');
    }),
    (T.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, 'forceUpdate');
    });
  function B() {}
  B.prototype = T.prototype;
  function A(C, R, se) {
    (this.props = C), (this.context = R), (this.refs = E), (this.updater = se || O);
  }
  var j = (A.prototype = new B());
  (j.constructor = A), L(j, T.prototype), (j.isPureReactComponent = !0);
  var V = Array.isArray,
    _ = Object.prototype.hasOwnProperty,
    Z = { current: null },
    ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ie(C, R, se) {
    var le,
      fe = {},
      de = null,
      xe = null;
    if (R != null)
      for (le in (R.ref !== void 0 && (xe = R.ref), R.key !== void 0 && (de = '' + R.key), R))
        _.call(R, le) && !ne.hasOwnProperty(le) && (fe[le] = R[le]);
    var ge = arguments.length - 2;
    if (ge === 1) fe.children = se;
    else if (1 < ge) {
      for (var Pe = Array(ge), tt = 0; tt < ge; tt++) Pe[tt] = arguments[tt + 2];
      fe.children = Pe;
    }
    if (C && C.defaultProps) for (le in ((ge = C.defaultProps), ge)) fe[le] === void 0 && (fe[le] = ge[le]);
    return { $$typeof: n, type: C, key: de, ref: xe, props: fe, _owner: Z.current };
  }
  function me(C, R) {
    return { $$typeof: n, type: C.type, key: R, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function ke(C) {
    return typeof C == 'object' && C !== null && C.$$typeof === n;
  }
  function Ce(C) {
    var R = { '=': '=0', ':': '=2' };
    return (
      '$' +
      C.replace(/[=:]/g, function (se) {
        return R[se];
      })
    );
  }
  var ct = /\/+/g;
  function He(C, R) {
    return typeof C == 'object' && C !== null && C.key != null ? Ce('' + C.key) : R.toString(36);
  }
  function Fe(C, R, se, le, fe) {
    var de = typeof C;
    (de === 'undefined' || de === 'boolean') && (C = null);
    var xe = !1;
    if (C === null) xe = !0;
    else
      switch (de) {
        case 'string':
        case 'number':
          xe = !0;
          break;
        case 'object':
          switch (C.$$typeof) {
            case n:
            case r:
              xe = !0;
          }
      }
    if (xe)
      return (
        (xe = C),
        (fe = fe(xe)),
        (C = le === '' ? '.' + He(xe, 0) : le),
        V(fe)
          ? ((se = ''),
            C != null && (se = C.replace(ct, '$&/') + '/'),
            Fe(fe, R, se, '', function (tt) {
              return tt;
            }))
          : fe != null &&
            (ke(fe) &&
              (fe = me(
                fe,
                se + (!fe.key || (xe && xe.key === fe.key) ? '' : ('' + fe.key).replace(ct, '$&/') + '/') + C
              )),
            R.push(fe)),
        1
      );
    if (((xe = 0), (le = le === '' ? '.' : le + ':'), V(C)))
      for (var ge = 0; ge < C.length; ge++) {
        de = C[ge];
        var Pe = le + He(de, ge);
        xe += Fe(de, R, se, Pe, fe);
      }
    else if (((Pe = w(C)), typeof Pe == 'function'))
      for (C = Pe.call(C), ge = 0; !(de = C.next()).done; )
        (de = de.value), (Pe = le + He(de, ge++)), (xe += Fe(de, R, se, Pe, fe));
    else if (de === 'object')
      throw (
        ((R = String(C)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (R === '[object Object]' ? 'object with keys {' + Object.keys(C).join(', ') + '}' : R) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return xe;
  }
  function Ue(C, R, se) {
    if (C == null) return C;
    var le = [],
      fe = 0;
    return (
      Fe(C, le, '', '', function (de) {
        return R.call(se, de, fe++);
      }),
      le
    );
  }
  function Re(C) {
    if (C._status === -1) {
      var R = C._result;
      (R = R()),
        R.then(
          function (se) {
            (C._status === 0 || C._status === -1) && ((C._status = 1), (C._result = se));
          },
          function (se) {
            (C._status === 0 || C._status === -1) && ((C._status = 2), (C._result = se));
          }
        ),
        C._status === -1 && ((C._status = 0), (C._result = R));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var Se = { current: null },
    U = { transition: null },
    G = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: U, ReactCurrentOwner: Z };
  function W() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ue.Children = {
      map: Ue,
      forEach: function (C, R, se) {
        Ue(
          C,
          function () {
            R.apply(this, arguments);
          },
          se
        );
      },
      count: function (C) {
        var R = 0;
        return (
          Ue(C, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (C) {
        return (
          Ue(C, function (R) {
            return R;
          }) || []
        );
      },
      only: function (C) {
        if (!ke(C)) throw Error('React.Children.only expected to receive a single React element child.');
        return C;
      },
    }),
    (ue.Component = T),
    (ue.Fragment = o),
    (ue.Profiler = l),
    (ue.PureComponent = A),
    (ue.StrictMode = a),
    (ue.Suspense = h),
    (ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (ue.act = W),
    (ue.cloneElement = function (C, R, se) {
      if (C == null)
        throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + C + '.');
      var le = L({}, C.props),
        fe = C.key,
        de = C.ref,
        xe = C._owner;
      if (R != null) {
        if (
          (R.ref !== void 0 && ((de = R.ref), (xe = Z.current)),
          R.key !== void 0 && (fe = '' + R.key),
          C.type && C.type.defaultProps)
        )
          var ge = C.type.defaultProps;
        for (Pe in R)
          _.call(R, Pe) && !ne.hasOwnProperty(Pe) && (le[Pe] = R[Pe] === void 0 && ge !== void 0 ? ge[Pe] : R[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) le.children = se;
      else if (1 < Pe) {
        ge = Array(Pe);
        for (var tt = 0; tt < Pe; tt++) ge[tt] = arguments[tt + 2];
        le.children = ge;
      }
      return { $$typeof: n, type: C.type, key: fe, ref: de, props: le, _owner: xe };
    }),
    (ue.createContext = function (C) {
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
    (ue.createElement = ie),
    (ue.createFactory = function (C) {
      var R = ie.bind(null, C);
      return (R.type = C), R;
    }),
    (ue.createRef = function () {
      return { current: null };
    }),
    (ue.forwardRef = function (C) {
      return { $$typeof: m, render: C };
    }),
    (ue.isValidElement = ke),
    (ue.lazy = function (C) {
      return { $$typeof: v, _payload: { _status: -1, _result: C }, _init: Re };
    }),
    (ue.memo = function (C, R) {
      return { $$typeof: g, type: C, compare: R === void 0 ? null : R };
    }),
    (ue.startTransition = function (C) {
      var R = U.transition;
      U.transition = {};
      try {
        C();
      } finally {
        U.transition = R;
      }
    }),
    (ue.unstable_act = W),
    (ue.useCallback = function (C, R) {
      return Se.current.useCallback(C, R);
    }),
    (ue.useContext = function (C) {
      return Se.current.useContext(C);
    }),
    (ue.useDebugValue = function () {}),
    (ue.useDeferredValue = function (C) {
      return Se.current.useDeferredValue(C);
    }),
    (ue.useEffect = function (C, R) {
      return Se.current.useEffect(C, R);
    }),
    (ue.useId = function () {
      return Se.current.useId();
    }),
    (ue.useImperativeHandle = function (C, R, se) {
      return Se.current.useImperativeHandle(C, R, se);
    }),
    (ue.useInsertionEffect = function (C, R) {
      return Se.current.useInsertionEffect(C, R);
    }),
    (ue.useLayoutEffect = function (C, R) {
      return Se.current.useLayoutEffect(C, R);
    }),
    (ue.useMemo = function (C, R) {
      return Se.current.useMemo(C, R);
    }),
    (ue.useReducer = function (C, R, se) {
      return Se.current.useReducer(C, R, se);
    }),
    (ue.useRef = function (C) {
      return Se.current.useRef(C);
    }),
    (ue.useState = function (C) {
      return Se.current.useState(C);
    }),
    (ue.useSyncExternalStore = function (C, R, se) {
      return Se.current.useSyncExternalStore(C, R, se);
    }),
    (ue.useTransition = function () {
      return Se.current.useTransition();
    }),
    (ue.version = '18.3.1'),
    ue
  );
}
var dd;
function nu() {
  return dd || ((dd = 1), (ul.exports = qg())), ul.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd;
function Kg() {
  if (pd) return pi;
  pd = 1;
  var n = nu(),
    r = Symbol.for('react.element'),
    o = Symbol.for('react.fragment'),
    a = Object.prototype.hasOwnProperty,
    l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, h, g) {
    var v,
      S = {},
      w = null,
      O = null;
    g !== void 0 && (w = '' + g), h.key !== void 0 && (w = '' + h.key), h.ref !== void 0 && (O = h.ref);
    for (v in h) a.call(h, v) && !c.hasOwnProperty(v) && (S[v] = h[v]);
    if (m && m.defaultProps) for (v in ((h = m.defaultProps), h)) S[v] === void 0 && (S[v] = h[v]);
    return { $$typeof: r, type: m, key: w, ref: O, props: S, _owner: l.current };
  }
  return (pi.Fragment = o), (pi.jsx = d), (pi.jsxs = d), pi;
}
var md;
function Qg() {
  return md || ((md = 1), (ll.exports = Kg())), ll.exports;
}
var Y = Qg(),
  I = nu();
const ua = la(I),
  Gg = Yg({ __proto__: null, default: ua }, [I]);
var Wo = {},
  cl = { exports: {} },
  ut = {},
  fl = { exports: {} },
  dl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function Xg() {
  return (
    hd ||
      ((hd = 1),
      (function (n) {
        function r(U, G) {
          var W = U.length;
          U.push(G);
          e: for (; 0 < W; ) {
            var C = (W - 1) >>> 1,
              R = U[C];
            if (0 < l(R, G)) (U[C] = G), (U[W] = R), (W = C);
            else break e;
          }
        }
        function o(U) {
          return U.length === 0 ? null : U[0];
        }
        function a(U) {
          if (U.length === 0) return null;
          var G = U[0],
            W = U.pop();
          if (W !== G) {
            U[0] = W;
            e: for (var C = 0, R = U.length, se = R >>> 1; C < se; ) {
              var le = 2 * (C + 1) - 1,
                fe = U[le],
                de = le + 1,
                xe = U[de];
              if (0 > l(fe, W))
                de < R && 0 > l(xe, fe) ? ((U[C] = xe), (U[de] = W), (C = de)) : ((U[C] = fe), (U[le] = W), (C = le));
              else if (de < R && 0 > l(xe, W)) (U[C] = xe), (U[de] = W), (C = de);
              else break e;
            }
          }
          return G;
        }
        function l(U, G) {
          var W = U.sortIndex - G.sortIndex;
          return W !== 0 ? W : U.id - G.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            m = d.now();
          n.unstable_now = function () {
            return d.now() - m;
          };
        }
        var h = [],
          g = [],
          v = 1,
          S = null,
          w = 3,
          O = !1,
          L = !1,
          E = !1,
          T = typeof setTimeout == 'function' ? setTimeout : null,
          B = typeof clearTimeout == 'function' ? clearTimeout : null,
          A = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function j(U) {
          for (var G = o(g); G !== null; ) {
            if (G.callback === null) a(g);
            else if (G.startTime <= U) a(g), (G.sortIndex = G.expirationTime), r(h, G);
            else break;
            G = o(g);
          }
        }
        function V(U) {
          if (((E = !1), j(U), !L))
            if (o(h) !== null) (L = !0), Re(_);
            else {
              var G = o(g);
              G !== null && Se(V, G.startTime - U);
            }
        }
        function _(U, G) {
          (L = !1), E && ((E = !1), B(ie), (ie = -1)), (O = !0);
          var W = w;
          try {
            for (j(G), S = o(h); S !== null && (!(S.expirationTime > G) || (U && !Ce())); ) {
              var C = S.callback;
              if (typeof C == 'function') {
                (S.callback = null), (w = S.priorityLevel);
                var R = C(S.expirationTime <= G);
                (G = n.unstable_now()), typeof R == 'function' ? (S.callback = R) : S === o(h) && a(h), j(G);
              } else a(h);
              S = o(h);
            }
            if (S !== null) var se = !0;
            else {
              var le = o(g);
              le !== null && Se(V, le.startTime - G), (se = !1);
            }
            return se;
          } finally {
            (S = null), (w = W), (O = !1);
          }
        }
        var Z = !1,
          ne = null,
          ie = -1,
          me = 5,
          ke = -1;
        function Ce() {
          return !(n.unstable_now() - ke < me);
        }
        function ct() {
          if (ne !== null) {
            var U = n.unstable_now();
            ke = U;
            var G = !0;
            try {
              G = ne(!0, U);
            } finally {
              G ? He() : ((Z = !1), (ne = null));
            }
          } else Z = !1;
        }
        var He;
        if (typeof A == 'function')
          He = function () {
            A(ct);
          };
        else if (typeof MessageChannel < 'u') {
          var Fe = new MessageChannel(),
            Ue = Fe.port2;
          (Fe.port1.onmessage = ct),
            (He = function () {
              Ue.postMessage(null);
            });
        } else
          He = function () {
            T(ct, 0);
          };
        function Re(U) {
          (ne = U), Z || ((Z = !0), He());
        }
        function Se(U, G) {
          ie = T(function () {
            U(n.unstable_now());
          }, G);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            L || O || ((L = !0), Re(_));
          }),
          (n.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (me = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(h);
          }),
          (n.unstable_next = function (U) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = w;
            }
            var W = w;
            w = G;
            try {
              return U();
            } finally {
              w = W;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (U, G) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var W = w;
            w = U;
            try {
              return G();
            } finally {
              w = W;
            }
          }),
          (n.unstable_scheduleCallback = function (U, G, W) {
            var C = n.unstable_now();
            switch (
              (typeof W == 'object' && W !== null
                ? ((W = W.delay), (W = typeof W == 'number' && 0 < W ? C + W : C))
                : (W = C),
              U)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = W + R),
              (U = { id: v++, callback: G, priorityLevel: U, startTime: W, expirationTime: R, sortIndex: -1 }),
              W > C
                ? ((U.sortIndex = W),
                  r(g, U),
                  o(h) === null && U === o(g) && (E ? (B(ie), (ie = -1)) : (E = !0), Se(V, W - C)))
                : ((U.sortIndex = R), r(h, U), L || O || ((L = !0), Re(_))),
              U
            );
          }),
          (n.unstable_shouldYield = Ce),
          (n.unstable_wrapCallback = function (U) {
            var G = w;
            return function () {
              var W = w;
              w = G;
              try {
                return U.apply(this, arguments);
              } finally {
                w = W;
              }
            };
          });
      })(dl)),
    dl
  );
}
var gd;
function Jg() {
  return gd || ((gd = 1), (fl.exports = Xg())), fl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function Zg() {
  if (vd) return ut;
  vd = 1;
  var n = nu(),
    r = Jg();
  function o(e) {
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
  var a = new Set(),
    l = {};
  function c(e, t) {
    d(e, t), d(e + 'Capture', t);
  }
  function d(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var m = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    S = {};
  function w(e) {
    return h.call(S, e) ? !0 : h.call(v, e) ? !1 : g.test(e) ? (S[e] = !0) : ((v[e] = !0), !1);
  }
  function O(e, t, i, s) {
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
  function L(e, t, i, s) {
    if (t === null || typeof t > 'u' || O(e, t, i, s)) return !0;
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
  function E(e, t, i, s, u, f, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = u),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = f),
      (this.removeEmptyString = p);
  }
  var T = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      T[e] = new E(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      T[t] = new E(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      T[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
      T[e] = new E(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        T[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      T[e] = new E(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      T[e] = new E(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      T[e] = new E(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      T[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var B = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(B, A);
      T[t] = new E(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
      var t = e.replace(B, A);
      T[t] = new E(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(B, A);
      T[t] = new E(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      T[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (T.xlinkHref = new E('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      T[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function j(e, t, i, s) {
    var u = T.hasOwnProperty(t) ? T[t] : null;
    (u !== null
      ? u.type !== 0
      : s || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (L(t, i, u, s) && (i = null),
      s || u === null
        ? w(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, '' + i))
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
  var V = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    _ = Symbol.for('react.element'),
    Z = Symbol.for('react.portal'),
    ne = Symbol.for('react.fragment'),
    ie = Symbol.for('react.strict_mode'),
    me = Symbol.for('react.profiler'),
    ke = Symbol.for('react.provider'),
    Ce = Symbol.for('react.context'),
    ct = Symbol.for('react.forward_ref'),
    He = Symbol.for('react.suspense'),
    Fe = Symbol.for('react.suspense_list'),
    Ue = Symbol.for('react.memo'),
    Re = Symbol.for('react.lazy'),
    Se = Symbol.for('react.offscreen'),
    U = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (U && e[U]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var W = Object.assign,
    C;
  function R(e) {
    if (C === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        C = (t && t[1]) || '';
      }
    return (
      `
` +
      C +
      e
    );
  }
  var se = !1;
  function le(e, t) {
    if (!e || se) return '';
    se = !0;
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
          } catch (N) {
            var s = N;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (N) {
            s = N;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (N) {
          s = N;
        }
        e();
      }
    } catch (N) {
      if (N && s && typeof N.stack == 'string') {
        for (
          var u = N.stack.split(`
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
      (se = !1), (Error.prepareStackTrace = i);
    }
    return (e = e ? e.displayName || e.name : '') ? R(e) : '';
  }
  function fe(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R('Lazy');
      case 13:
        return R('Suspense');
      case 19:
        return R('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = le(e.type, !1)), e;
      case 11:
        return (e = le(e.type.render, !1)), e;
      case 1:
        return (e = le(e.type, !0)), e;
      default:
        return '';
    }
  }
  function de(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ne:
        return 'Fragment';
      case Z:
        return 'Portal';
      case me:
        return 'Profiler';
      case ie:
        return 'StrictMode';
      case He:
        return 'Suspense';
      case Fe:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ce:
          return (e.displayName || 'Context') + '.Consumer';
        case ke:
          return (e._context.displayName || 'Context') + '.Provider';
        case ct:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Ue:
          return (t = e.displayName || null), t !== null ? t : de(e.type) || 'Memo';
        case Re:
          (t = e._payload), (e = e._init);
          try {
            return de(e(t));
          } catch {}
      }
    return null;
  }
  function xe(e) {
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
        return de(t);
      case 8:
        return t === ie ? 'StrictMode' : 'Mode';
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
  function ge(e) {
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
  function tt(e) {
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
  function Yn(e) {
    e._valueTracker || (e._valueTracker = tt(e));
  }
  function Ii(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      s = '';
    return e && (s = Pe(e) ? (e.checked ? 'true' : 'false') : e.value), (e = s), e !== i ? (t.setValue(e), !0) : !1;
  }
  function qn(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Or(e, t) {
    var i = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function _i(e, t) {
    var i = t.defaultValue == null ? '' : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    (i = ge(t.value != null ? t.value : i)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: i,
        controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function Ri(e, t) {
    (t = t.checked), t != null && j(e, 'checked', t, !1);
  }
  function Nr(e, t) {
    Ri(e, t);
    var i = ge(t.value),
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
      ? re(e, t.type, i)
      : t.hasOwnProperty('defaultValue') && re(e, t.type, ge(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Di(e, t, i) {
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
  function re(e, t, i) {
    (t !== 'number' || qn(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + i && (e.defaultValue = '' + i));
  }
  var $t = Array.isArray;
  function Kn(e, t, i, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < i.length; u++) t['$' + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        (u = t.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== u && (e[i].selected = u),
          u && s && (e[i].defaultSelected = !0);
    } else {
      for (i = '' + ge(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          (e[u].selected = !0), s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ya(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return W({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
  }
  function Su(e, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(o(92));
        if ($t(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ''), (i = t);
    }
    e._wrapperState = { initialValue: ge(i) };
  }
  function xu(e, t) {
    var i = ge(t.value),
      s = ge(t.defaultValue);
    i != null &&
      ((i = '' + i),
      i !== e.value && (e.value = i),
      t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      s != null && (e.defaultValue = '' + s);
  }
  function ku(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function Cu(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function wa(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Cu(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
  }
  var Ai,
    Pu = (function (e) {
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
  function Tr(e, t) {
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
    Gm = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Lr).forEach(function (e) {
    Gm.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e]);
    });
  });
  function Eu(e, t, i) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : i || typeof t != 'number' || t === 0 || (Lr.hasOwnProperty(e) && Lr[e])
      ? ('' + t).trim()
      : t + 'px';
  }
  function bu(e, t) {
    e = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var s = i.indexOf('--') === 0,
          u = Eu(i, t[i], s);
        i === 'float' && (i = 'cssFloat'), s ? e.setProperty(i, u) : (e[i] = u);
      }
  }
  var Xm = W(
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
  function Sa(e, t) {
    if (t) {
      if (Xm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(o(62));
    }
  }
  function xa(e, t) {
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
  var ka = null;
  function Ca(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Pa = null,
    Qn = null,
    Gn = null;
  function Ou(e) {
    if ((e = Jr(e))) {
      if (typeof Pa != 'function') throw Error(o(280));
      var t = e.stateNode;
      t && ((t = io(t)), Pa(e.stateNode, e.type, t));
    }
  }
  function Nu(e) {
    Qn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Qn = e);
  }
  function Tu() {
    if (Qn) {
      var e = Qn,
        t = Gn;
      if (((Gn = Qn = null), Ou(e), t)) for (e = 0; e < t.length; e++) Ou(t[e]);
    }
  }
  function Lu(e, t) {
    return e(t);
  }
  function Iu() {}
  var Ea = !1;
  function _u(e, t, i) {
    if (Ea) return e(t, i);
    Ea = !0;
    try {
      return Lu(e, t, i);
    } finally {
      (Ea = !1), (Qn !== null || Gn !== null) && (Iu(), Tu());
    }
  }
  function Ir(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = io(i);
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
    if (i && typeof i != 'function') throw Error(o(231, t, typeof i));
    return i;
  }
  var ba = !1;
  if (m)
    try {
      var _r = {};
      Object.defineProperty(_r, 'passive', {
        get: function () {
          ba = !0;
        },
      }),
        window.addEventListener('test', _r, _r),
        window.removeEventListener('test', _r, _r);
    } catch {
      ba = !1;
    }
  function Jm(e, t, i, s, u, f, p, y, x) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, N);
    } catch (M) {
      this.onError(M);
    }
  }
  var Rr = !1,
    Mi = null,
    Fi = !1,
    Oa = null,
    Zm = {
      onError: function (e) {
        (Rr = !0), (Mi = e);
      },
    };
  function eh(e, t, i, s, u, f, p, y, x) {
    (Rr = !1), (Mi = null), Jm.apply(Zm, arguments);
  }
  function th(e, t, i, s, u, f, p, y, x) {
    if ((eh.apply(this, arguments), Rr)) {
      if (Rr) {
        var N = Mi;
        (Rr = !1), (Mi = null);
      } else throw Error(o(198));
      Fi || ((Fi = !0), (Oa = N));
    }
  }
  function bn(e) {
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
  function Ru(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function Du(e) {
    if (bn(e) !== e) throw Error(o(188));
  }
  function nh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = bn(e)), t === null)) throw Error(o(188));
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
        throw Error(o(188));
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
          if (!p) throw Error(o(189));
        }
      }
      if (i.alternate !== s) throw Error(o(190));
    }
    if (i.tag !== 3) throw Error(o(188));
    return i.stateNode.current === i ? e : t;
  }
  function Au(e) {
    return (e = nh(e)), e !== null ? Mu(e) : null;
  }
  function Mu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Mu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Fu = r.unstable_scheduleCallback,
    zu = r.unstable_cancelCallback,
    rh = r.unstable_shouldYield,
    ih = r.unstable_requestPaint,
    De = r.unstable_now,
    oh = r.unstable_getCurrentPriorityLevel,
    Na = r.unstable_ImmediatePriority,
    ju = r.unstable_UserBlockingPriority,
    zi = r.unstable_NormalPriority,
    ah = r.unstable_LowPriority,
    $u = r.unstable_IdlePriority,
    ji = null,
    Lt = null;
  function sh(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == 'function')
      try {
        Lt.onCommitFiberRoot(ji, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : ch,
    lh = Math.log,
    uh = Math.LN2;
  function ch(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((lh(e) / uh) | 0)) | 0;
  }
  var $i = 64,
    Ui = 4194304;
  function Dr(e) {
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
  function Vi(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      p = i & 268435455;
    if (p !== 0) {
      var y = p & ~u;
      y !== 0 ? (s = Dr(y)) : ((f &= p), f !== 0 && (s = Dr(f)));
    } else (p = i & ~u), p !== 0 ? (s = Dr(p)) : f !== 0 && (s = Dr(f));
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
  function fh(e, t) {
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
  function dh(e, t) {
    for (var i = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes; 0 < f; ) {
      var p = 31 - kt(f),
        y = 1 << p,
        x = u[p];
      x === -1 ? ((y & i) === 0 || (y & s) !== 0) && (u[p] = fh(y, t)) : x <= t && (e.expiredLanes |= y), (f &= ~y);
    }
  }
  function Ta(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Uu() {
    var e = $i;
    return ($i <<= 1), ($i & 4194240) === 0 && ($i = 64), e;
  }
  function La(e) {
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
  function ph(e, t) {
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
  function Ia(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var s = 31 - kt(i),
        u = 1 << s;
      (u & t) | (e[s] & t) && (e[s] |= t), (i &= ~u);
    }
  }
  var ye = 0;
  function Vu(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var Bu,
    _a,
    Wu,
    Hu,
    Yu,
    Ra = !1,
    Bi = [],
    Jt = null,
    Zt = null,
    en = null,
    Mr = new Map(),
    Fr = new Map(),
    tn = [],
    mh =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function qu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Jt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Zt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        en = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Mr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Fr.delete(t.pointerId);
    }
  }
  function zr(e, t, i, s, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = { blockedOn: t, domEventName: i, eventSystemFlags: s, nativeEvent: f, targetContainers: [u] }),
        t !== null && ((t = Jr(t)), t !== null && _a(t)),
        e)
      : ((e.eventSystemFlags |= s), (t = e.targetContainers), u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function hh(e, t, i, s, u) {
    switch (t) {
      case 'focusin':
        return (Jt = zr(Jt, e, t, i, s, u)), !0;
      case 'dragenter':
        return (Zt = zr(Zt, e, t, i, s, u)), !0;
      case 'mouseover':
        return (en = zr(en, e, t, i, s, u)), !0;
      case 'pointerover':
        var f = u.pointerId;
        return Mr.set(f, zr(Mr.get(f) || null, e, t, i, s, u)), !0;
      case 'gotpointercapture':
        return (f = u.pointerId), Fr.set(f, zr(Fr.get(f) || null, e, t, i, s, u)), !0;
    }
    return !1;
  }
  function Ku(e) {
    var t = On(e.target);
    if (t !== null) {
      var i = bn(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = Ru(i)), t !== null)) {
            (e.blockedOn = t),
              Yu(e.priority, function () {
                Wu(i);
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
  function Wi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = Aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        (ka = s), i.target.dispatchEvent(s), (ka = null);
      } else return (t = Jr(i)), t !== null && _a(t), (e.blockedOn = i), !1;
      t.shift();
    }
    return !0;
  }
  function Qu(e, t, i) {
    Wi(e) && i.delete(t);
  }
  function gh() {
    (Ra = !1),
      Jt !== null && Wi(Jt) && (Jt = null),
      Zt !== null && Wi(Zt) && (Zt = null),
      en !== null && Wi(en) && (en = null),
      Mr.forEach(Qu),
      Fr.forEach(Qu);
  }
  function jr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), Ra || ((Ra = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, gh)));
  }
  function $r(e) {
    function t(u) {
      return jr(u, e);
    }
    if (0 < Bi.length) {
      jr(Bi[0], e);
      for (var i = 1; i < Bi.length; i++) {
        var s = Bi[i];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      Jt !== null && jr(Jt, e), Zt !== null && jr(Zt, e), en !== null && jr(en, e), Mr.forEach(t), Fr.forEach(t), i = 0;
      i < tn.length;
      i++
    )
      (s = tn[i]), s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < tn.length && ((i = tn[0]), i.blockedOn === null); ) Ku(i), i.blockedOn === null && tn.shift();
  }
  var Xn = V.ReactCurrentBatchConfig,
    Hi = !0;
  function vh(e, t, i, s) {
    var u = ye,
      f = Xn.transition;
    Xn.transition = null;
    try {
      (ye = 1), Da(e, t, i, s);
    } finally {
      (ye = u), (Xn.transition = f);
    }
  }
  function yh(e, t, i, s) {
    var u = ye,
      f = Xn.transition;
    Xn.transition = null;
    try {
      (ye = 4), Da(e, t, i, s);
    } finally {
      (ye = u), (Xn.transition = f);
    }
  }
  function Da(e, t, i, s) {
    if (Hi) {
      var u = Aa(e, t, i, s);
      if (u === null) Ja(e, t, s, Yi, i), qu(e, s);
      else if (hh(u, e, t, i, s)) s.stopPropagation();
      else if ((qu(e, s), t & 4 && -1 < mh.indexOf(e))) {
        for (; u !== null; ) {
          var f = Jr(u);
          if ((f !== null && Bu(f), (f = Aa(e, t, i, s)), f === null && Ja(e, t, s, Yi, i), f === u)) break;
          u = f;
        }
        u !== null && s.stopPropagation();
      } else Ja(e, t, s, null, i);
    }
  }
  var Yi = null;
  function Aa(e, t, i, s) {
    if (((Yi = null), (e = Ca(s)), (e = On(e)), e !== null))
      if (((t = bn(e)), t === null)) e = null;
      else if (((i = t.tag), i === 13)) {
        if (((e = Ru(t)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Yi = e), null;
  }
  function Gu(e) {
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
        switch (oh()) {
          case Na:
            return 1;
          case ju:
            return 4;
          case zi:
          case ah:
            return 16;
          case $u:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var nn = null,
    Ma = null,
    qi = null;
  function Xu() {
    if (qi) return qi;
    var e,
      t = Ma,
      i = t.length,
      s,
      u = 'value' in nn ? nn.value : nn.textContent,
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
  function Ju() {
    return !1;
  }
  function ft(e) {
    function t(i, s, u, f, p) {
      (this._reactName = i),
        (this._targetInst = u),
        (this.type = s),
        (this.nativeEvent = f),
        (this.target = p),
        (this.currentTarget = null);
      for (var y in e) e.hasOwnProperty(y) && ((i = e[y]), (this[y] = i ? i(f) : f[y]));
      return (
        (this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Qi : Ju),
        (this.isPropagationStopped = Ju),
        this
      );
    }
    return (
      W(t.prototype, {
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
  var Jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fa = ft(Jn),
    Ur = W({}, Jn, { view: 0, detail: 0 }),
    wh = ft(Ur),
    za,
    ja,
    Vr,
    Gi = W({}, Ur, {
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
      getModifierState: Ua,
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
          : (e !== Vr &&
              (Vr && e.type === 'mousemove'
                ? ((za = e.screenX - Vr.screenX), (ja = e.screenY - Vr.screenY))
                : (ja = za = 0),
              (Vr = e)),
            za);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ja;
      },
    }),
    Zu = ft(Gi),
    Sh = W({}, Gi, { dataTransfer: 0 }),
    xh = ft(Sh),
    kh = W({}, Ur, { relatedTarget: 0 }),
    $a = ft(kh),
    Ch = W({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ph = ft(Ch),
    Eh = W({}, Jn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    bh = ft(Eh),
    Oh = W({}, Jn, { data: 0 }),
    ec = ft(Oh),
    Nh = {
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
    Th = {
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
    Lh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Ih(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lh[e]) ? !!t[e] : !1;
  }
  function Ua() {
    return Ih;
  }
  var _h = W({}, Ur, {
      key: function (e) {
        if (e.key) {
          var t = Nh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Ki(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? Th[e.keyCode] || 'Unidentified'
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
      getModifierState: Ua,
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
    Rh = ft(_h),
    Dh = W({}, Gi, {
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
    tc = ft(Dh),
    Ah = W({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ua,
    }),
    Mh = ft(Ah),
    Fh = W({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zh = ft(Fh),
    jh = W({}, Gi, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    $h = ft(jh),
    Uh = [9, 13, 27, 32],
    Va = m && 'CompositionEvent' in window,
    Br = null;
  m && 'documentMode' in document && (Br = document.documentMode);
  var Vh = m && 'TextEvent' in window && !Br,
    nc = m && (!Va || (Br && 8 < Br && 11 >= Br)),
    rc = ' ',
    ic = !1;
  function oc(e, t) {
    switch (e) {
      case 'keyup':
        return Uh.indexOf(t.keyCode) !== -1;
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
  function ac(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Zn = !1;
  function Bh(e, t) {
    switch (e) {
      case 'compositionend':
        return ac(t);
      case 'keypress':
        return t.which !== 32 ? null : ((ic = !0), rc);
      case 'textInput':
        return (e = t.data), e === rc && ic ? null : e;
      default:
        return null;
    }
  }
  function Wh(e, t) {
    if (Zn)
      return e === 'compositionend' || (!Va && oc(e, t)) ? ((e = Xu()), (qi = Ma = nn = null), (Zn = !1), e) : null;
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
        return nc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Hh = {
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
  function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Hh[e.type] : t === 'textarea';
  }
  function lc(e, t, i, s) {
    Nu(s),
      (t = to(t, 'onChange')),
      0 < t.length && ((i = new Fa('onChange', 'change', null, i, s)), e.push({ event: i, listeners: t }));
  }
  var Wr = null,
    Hr = null;
  function Yh(e) {
    bc(e, 0);
  }
  function Xi(e) {
    var t = ir(e);
    if (Ii(t)) return e;
  }
  function qh(e, t) {
    if (e === 'change') return t;
  }
  var uc = !1;
  if (m) {
    var Ba;
    if (m) {
      var Wa = 'oninput' in document;
      if (!Wa) {
        var cc = document.createElement('div');
        cc.setAttribute('oninput', 'return;'), (Wa = typeof cc.oninput == 'function');
      }
      Ba = Wa;
    } else Ba = !1;
    uc = Ba && (!document.documentMode || 9 < document.documentMode);
  }
  function fc() {
    Wr && (Wr.detachEvent('onpropertychange', dc), (Hr = Wr = null));
  }
  function dc(e) {
    if (e.propertyName === 'value' && Xi(Hr)) {
      var t = [];
      lc(t, Hr, e, Ca(e)), _u(Yh, t);
    }
  }
  function Kh(e, t, i) {
    e === 'focusin' ? (fc(), (Wr = t), (Hr = i), Wr.attachEvent('onpropertychange', dc)) : e === 'focusout' && fc();
  }
  function Qh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Xi(Hr);
  }
  function Gh(e, t) {
    if (e === 'click') return Xi(t);
  }
  function Xh(e, t) {
    if (e === 'input' || e === 'change') return Xi(t);
  }
  function Jh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ct = typeof Object.is == 'function' ? Object.is : Jh;
  function Yr(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var i = Object.keys(e),
      s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var u = i[s];
      if (!h.call(t, u) || !Ct(e[u], t[u])) return !1;
    }
    return !0;
  }
  function pc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mc(e, t) {
    var i = pc(e);
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
      i = pc(i);
    }
  }
  function hc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? hc(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function gc() {
    for (var e = window, t = qn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = qn(e.document);
    }
    return t;
  }
  function Ha(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Zh(e) {
    var t = gc(),
      i = e.focusedElem,
      s = e.selectionRange;
    if (t !== i && i && i.ownerDocument && hc(i.ownerDocument.documentElement, i)) {
      if (s !== null && Ha(i)) {
        if (((t = s.start), (e = s.end), e === void 0 && (e = t), 'selectionStart' in i))
          (i.selectionStart = t), (i.selectionEnd = Math.min(e, i.value.length));
        else if (((e = ((t = i.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
          e = e.getSelection();
          var u = i.textContent.length,
            f = Math.min(s.start, u);
          (s = s.end === void 0 ? f : Math.min(s.end, u)),
            !e.extend && f > s && ((u = s), (s = f), (f = u)),
            (u = mc(i, f));
          var p = mc(i, s);
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
  var eg = m && 'documentMode' in document && 11 >= document.documentMode,
    er = null,
    Ya = null,
    qr = null,
    qa = !1;
  function vc(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    qa ||
      er == null ||
      er !== qn(s) ||
      ((s = er),
      'selectionStart' in s && Ha(s)
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
        (s = to(Ya, 'onSelect')),
        0 < s.length &&
          ((t = new Fa('onSelect', 'select', null, t, i)), e.push({ event: t, listeners: s }), (t.target = er))));
  }
  function Ji(e, t) {
    var i = {};
    return (i[e.toLowerCase()] = t.toLowerCase()), (i['Webkit' + e] = 'webkit' + t), (i['Moz' + e] = 'moz' + t), i;
  }
  var tr = {
      animationend: Ji('Animation', 'AnimationEnd'),
      animationiteration: Ji('Animation', 'AnimationIteration'),
      animationstart: Ji('Animation', 'AnimationStart'),
      transitionend: Ji('Transition', 'TransitionEnd'),
    },
    Ka = {},
    yc = {};
  m &&
    ((yc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete tr.animationend.animation, delete tr.animationiteration.animation, delete tr.animationstart.animation),
    'TransitionEvent' in window || delete tr.transitionend.transition);
  function Zi(e) {
    if (Ka[e]) return Ka[e];
    if (!tr[e]) return e;
    var t = tr[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in yc) return (Ka[e] = t[i]);
    return e;
  }
  var wc = Zi('animationend'),
    Sc = Zi('animationiteration'),
    xc = Zi('animationstart'),
    kc = Zi('transitionend'),
    Cc = new Map(),
    Pc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function rn(e, t) {
    Cc.set(e, t), c(t, [e]);
  }
  for (var Qa = 0; Qa < Pc.length; Qa++) {
    var Ga = Pc[Qa],
      tg = Ga.toLowerCase(),
      ng = Ga[0].toUpperCase() + Ga.slice(1);
    rn(tg, 'on' + ng);
  }
  rn(wc, 'onAnimationEnd'),
    rn(Sc, 'onAnimationIteration'),
    rn(xc, 'onAnimationStart'),
    rn('dblclick', 'onDoubleClick'),
    rn('focusin', 'onFocus'),
    rn('focusout', 'onBlur'),
    rn(kc, 'onTransitionEnd'),
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
    rg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Kr));
  function Ec(e, t, i) {
    var s = e.type || 'unknown-event';
    (e.currentTarget = i), th(s, t, void 0, e), (e.currentTarget = null);
  }
  function bc(e, t) {
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
              N = y.currentTarget;
            if (((y = y.listener), x !== f && u.isPropagationStopped())) break e;
            Ec(u, y, N), (f = x);
          }
        else
          for (p = 0; p < s.length; p++) {
            if (
              ((y = s[p]),
              (x = y.instance),
              (N = y.currentTarget),
              (y = y.listener),
              x !== f && u.isPropagationStopped())
            )
              break e;
            Ec(u, y, N), (f = x);
          }
      }
    }
    if (Fi) throw ((e = Oa), (Fi = !1), (Oa = null), e);
  }
  function be(e, t) {
    var i = t[is];
    i === void 0 && (i = t[is] = new Set());
    var s = e + '__bubble';
    i.has(s) || (Oc(t, e, 2, !1), i.add(s));
  }
  function Xa(e, t, i) {
    var s = 0;
    t && (s |= 4), Oc(i, e, s, t);
  }
  var eo = '_reactListening' + Math.random().toString(36).slice(2);
  function Qr(e) {
    if (!e[eo]) {
      (e[eo] = !0),
        a.forEach(function (i) {
          i !== 'selectionchange' && (rg.has(i) || Xa(i, !1, e), Xa(i, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[eo] || ((t[eo] = !0), Xa('selectionchange', !1, t));
    }
  }
  function Oc(e, t, i, s) {
    switch (Gu(t)) {
      case 1:
        var u = vh;
        break;
      case 4:
        u = yh;
        break;
      default:
        u = Da;
    }
    (i = u.bind(null, t, i, e)),
      (u = void 0),
      !ba || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (u = !0),
      s
        ? u !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: u })
          : e.addEventListener(t, i, !0)
        : u !== void 0
        ? e.addEventListener(t, i, { passive: u })
        : e.addEventListener(t, i, !1);
  }
  function Ja(e, t, i, s, u) {
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
            if (((p = On(y)), p === null)) return;
            if (((x = p.tag), x === 5 || x === 6)) {
              s = f = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        s = s.return;
      }
    _u(function () {
      var N = f,
        M = Ca(i),
        F = [];
      e: {
        var D = Cc.get(e);
        if (D !== void 0) {
          var H = Fa,
            K = e;
          switch (e) {
            case 'keypress':
              if (Ki(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              H = Rh;
              break;
            case 'focusin':
              (K = 'focus'), (H = $a);
              break;
            case 'focusout':
              (K = 'blur'), (H = $a);
              break;
            case 'beforeblur':
            case 'afterblur':
              H = $a;
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
              H = Zu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              H = xh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              H = Mh;
              break;
            case wc:
            case Sc:
            case xc:
              H = Ph;
              break;
            case kc:
              H = zh;
              break;
            case 'scroll':
              H = wh;
              break;
            case 'wheel':
              H = $h;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              H = bh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              H = tc;
          }
          var Q = (t & 4) !== 0,
            Ae = !Q && e === 'scroll',
            P = Q ? (D !== null ? D + 'Capture' : null) : D;
          Q = [];
          for (var k = N, b; k !== null; ) {
            b = k;
            var $ = b.stateNode;
            if (
              (b.tag === 5 && $ !== null && ((b = $), P !== null && (($ = Ir(k, P)), $ != null && Q.push(Gr(k, $, b)))),
              Ae)
            )
              break;
            k = k.return;
          }
          0 < Q.length && ((D = new H(D, K, null, i, M)), F.push({ event: D, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((D = e === 'mouseover' || e === 'pointerover'),
            (H = e === 'mouseout' || e === 'pointerout'),
            D && i !== ka && (K = i.relatedTarget || i.fromElement) && (On(K) || K[Ut]))
          )
            break e;
          if (
            (H || D) &&
            ((D = M.window === M ? M : (D = M.ownerDocument) ? D.defaultView || D.parentWindow : window),
            H
              ? ((K = i.relatedTarget || i.toElement),
                (H = N),
                (K = K ? On(K) : null),
                K !== null && ((Ae = bn(K)), K !== Ae || (K.tag !== 5 && K.tag !== 6)) && (K = null))
              : ((H = null), (K = N)),
            H !== K)
          ) {
            if (
              ((Q = Zu),
              ($ = 'onMouseLeave'),
              (P = 'onMouseEnter'),
              (k = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Q = tc), ($ = 'onPointerLeave'), (P = 'onPointerEnter'), (k = 'pointer')),
              (Ae = H == null ? D : ir(H)),
              (b = K == null ? D : ir(K)),
              (D = new Q($, k + 'leave', H, i, M)),
              (D.target = Ae),
              (D.relatedTarget = b),
              ($ = null),
              On(M) === N && ((Q = new Q(P, k + 'enter', K, i, M)), (Q.target = b), (Q.relatedTarget = Ae), ($ = Q)),
              (Ae = $),
              H && K)
            )
              t: {
                for (Q = H, P = K, k = 0, b = Q; b; b = nr(b)) k++;
                for (b = 0, $ = P; $; $ = nr($)) b++;
                for (; 0 < k - b; ) (Q = nr(Q)), k--;
                for (; 0 < b - k; ) (P = nr(P)), b--;
                for (; k--; ) {
                  if (Q === P || (P !== null && Q === P.alternate)) break t;
                  (Q = nr(Q)), (P = nr(P));
                }
                Q = null;
              }
            else Q = null;
            H !== null && Nc(F, D, H, Q, !1), K !== null && Ae !== null && Nc(F, Ae, K, Q, !0);
          }
        }
        e: {
          if (
            ((D = N ? ir(N) : window),
            (H = D.nodeName && D.nodeName.toLowerCase()),
            H === 'select' || (H === 'input' && D.type === 'file'))
          )
            var X = qh;
          else if (sc(D))
            if (uc) X = Xh;
            else {
              X = Qh;
              var ee = Kh;
            }
          else
            (H = D.nodeName) &&
              H.toLowerCase() === 'input' &&
              (D.type === 'checkbox' || D.type === 'radio') &&
              (X = Gh);
          if (X && (X = X(e, N))) {
            lc(F, X, i, M);
            break e;
          }
          ee && ee(e, D, N),
            e === 'focusout' &&
              (ee = D._wrapperState) &&
              ee.controlled &&
              D.type === 'number' &&
              re(D, 'number', D.value);
        }
        switch (((ee = N ? ir(N) : window), e)) {
          case 'focusin':
            (sc(ee) || ee.contentEditable === 'true') && ((er = ee), (Ya = N), (qr = null));
            break;
          case 'focusout':
            qr = Ya = er = null;
            break;
          case 'mousedown':
            qa = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (qa = !1), vc(F, i, M);
            break;
          case 'selectionchange':
            if (eg) break;
          case 'keydown':
          case 'keyup':
            vc(F, i, M);
        }
        var te;
        if (Va)
          e: {
            switch (e) {
              case 'compositionstart':
                var oe = 'onCompositionStart';
                break e;
              case 'compositionend':
                oe = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                oe = 'onCompositionUpdate';
                break e;
            }
            oe = void 0;
          }
        else
          Zn
            ? oc(e, i) && (oe = 'onCompositionEnd')
            : e === 'keydown' && i.keyCode === 229 && (oe = 'onCompositionStart');
        oe &&
          (nc &&
            i.locale !== 'ko' &&
            (Zn || oe !== 'onCompositionStart'
              ? oe === 'onCompositionEnd' && Zn && (te = Xu())
              : ((nn = M), (Ma = 'value' in nn ? nn.value : nn.textContent), (Zn = !0))),
          (ee = to(N, oe)),
          0 < ee.length &&
            ((oe = new ec(oe, e, null, i, M)),
            F.push({ event: oe, listeners: ee }),
            te ? (oe.data = te) : ((te = ac(i)), te !== null && (oe.data = te)))),
          (te = Vh ? Bh(e, i) : Wh(e, i)) &&
            ((N = to(N, 'onBeforeInput')),
            0 < N.length &&
              ((M = new ec('onBeforeInput', 'beforeinput', null, i, M)),
              F.push({ event: M, listeners: N }),
              (M.data = te)));
      }
      bc(F, t);
    });
  }
  function Gr(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function to(e, t) {
    for (var i = t + 'Capture', s = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      u.tag === 5 &&
        f !== null &&
        ((u = f),
        (f = Ir(e, i)),
        f != null && s.unshift(Gr(e, f, u)),
        (f = Ir(e, t)),
        f != null && s.push(Gr(e, f, u))),
        (e = e.return);
    }
    return s;
  }
  function nr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Nc(e, t, i, s, u) {
    for (var f = t._reactName, p = []; i !== null && i !== s; ) {
      var y = i,
        x = y.alternate,
        N = y.stateNode;
      if (x !== null && x === s) break;
      y.tag === 5 &&
        N !== null &&
        ((y = N),
        u
          ? ((x = Ir(i, f)), x != null && p.unshift(Gr(i, x, y)))
          : u || ((x = Ir(i, f)), x != null && p.push(Gr(i, x, y)))),
        (i = i.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var ig = /\r\n?/g,
    og = /\u0000|\uFFFD/g;
  function Tc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        ig,
        `
`
      )
      .replace(og, '');
  }
  function no(e, t, i) {
    if (((t = Tc(t)), Tc(e) !== t && i)) throw Error(o(425));
  }
  function ro() {}
  var Za = null,
    es = null;
  function ts(e, t) {
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
  var ns = typeof setTimeout == 'function' ? setTimeout : void 0,
    ag = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Lc = typeof Promise == 'function' ? Promise : void 0,
    sg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Lc < 'u'
        ? function (e) {
            return Lc.resolve(null).then(e).catch(lg);
          }
        : ns;
  function lg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function rs(e, t) {
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
  function Ic(e) {
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
  var rr = Math.random().toString(36).slice(2),
    It = '__reactFiber$' + rr,
    Xr = '__reactProps$' + rr,
    Ut = '__reactContainer$' + rr,
    is = '__reactEvents$' + rr,
    ug = '__reactListeners$' + rr,
    cg = '__reactHandles$' + rr;
  function On(e) {
    var t = e[It];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[Ut] || i[It])) {
        if (((i = t.alternate), t.child !== null || (i !== null && i.child !== null)))
          for (e = Ic(e); e !== null; ) {
            if ((i = e[It])) return i;
            e = Ic(e);
          }
        return t;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function Jr(e) {
    return (e = e[It] || e[Ut]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
  }
  function ir(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function io(e) {
    return e[Xr] || null;
  }
  var os = [],
    or = -1;
  function an(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > or || ((e.current = os[or]), (os[or] = null), or--);
  }
  function Ee(e, t) {
    or++, (os[or] = e.current), (e.current = t);
  }
  var sn = {},
    Ke = an(sn),
    it = an(!1),
    Nn = sn;
  function ar(e, t) {
    var i = e.type.contextTypes;
    if (!i) return sn;
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
  function ot(e) {
    return (e = e.childContextTypes), e != null;
  }
  function oo() {
    Oe(it), Oe(Ke);
  }
  function _c(e, t, i) {
    if (Ke.current !== sn) throw Error(o(168));
    Ee(Ke, t), Ee(it, i);
  }
  function Rc(e, t, i) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != 'function')) return i;
    s = s.getChildContext();
    for (var u in s) if (!(u in t)) throw Error(o(108, xe(e) || 'Unknown', u));
    return W({}, i, s);
  }
  function ao(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || sn),
      (Nn = Ke.current),
      Ee(Ke, e),
      Ee(it, it.current),
      !0
    );
  }
  function Dc(e, t, i) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    i ? ((e = Rc(e, t, Nn)), (s.__reactInternalMemoizedMergedChildContext = e), Oe(it), Oe(Ke), Ee(Ke, e)) : Oe(it),
      Ee(it, i);
  }
  var Vt = null,
    so = !1,
    as = !1;
  function Ac(e) {
    Vt === null ? (Vt = [e]) : Vt.push(e);
  }
  function fg(e) {
    (so = !0), Ac(e);
  }
  function ln() {
    if (!as && Vt !== null) {
      as = !0;
      var e = 0,
        t = ye;
      try {
        var i = Vt;
        for (ye = 1; e < i.length; e++) {
          var s = i[e];
          do s = s(!0);
          while (s !== null);
        }
        (Vt = null), (so = !1);
      } catch (u) {
        throw (Vt !== null && (Vt = Vt.slice(e + 1)), Fu(Na, ln), u);
      } finally {
        (ye = t), (as = !1);
      }
    }
    return null;
  }
  var sr = [],
    lr = 0,
    lo = null,
    uo = 0,
    gt = [],
    vt = 0,
    Tn = null,
    Bt = 1,
    Wt = '';
  function Ln(e, t) {
    (sr[lr++] = uo), (sr[lr++] = lo), (lo = e), (uo = t);
  }
  function Mc(e, t, i) {
    (gt[vt++] = Bt), (gt[vt++] = Wt), (gt[vt++] = Tn), (Tn = e);
    var s = Bt;
    e = Wt;
    var u = 32 - kt(s) - 1;
    (s &= ~(1 << u)), (i += 1);
    var f = 32 - kt(t) + u;
    if (30 < f) {
      var p = u - (u % 5);
      (f = (s & ((1 << p) - 1)).toString(32)),
        (s >>= p),
        (u -= p),
        (Bt = (1 << (32 - kt(t) + u)) | (i << u) | s),
        (Wt = f + e);
    } else (Bt = (1 << f) | (i << u) | s), (Wt = e);
  }
  function ss(e) {
    e.return !== null && (Ln(e, 1), Mc(e, 1, 0));
  }
  function ls(e) {
    for (; e === lo; ) (lo = sr[--lr]), (sr[lr] = null), (uo = sr[--lr]), (sr[lr] = null);
    for (; e === Tn; )
      (Tn = gt[--vt]), (gt[vt] = null), (Wt = gt[--vt]), (gt[vt] = null), (Bt = gt[--vt]), (gt[vt] = null);
  }
  var dt = null,
    pt = null,
    Te = !1,
    Pt = null;
  function Fc(e, t) {
    var i = xt(5, null, null, 0);
    (i.elementType = 'DELETED'),
      (i.stateNode = t),
      (i.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i);
  }
  function zc(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (dt = e), (pt = on(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (dt = e), (pt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = Tn !== null ? { id: Bt, overflow: Wt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }),
              (i = xt(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = e),
              (e.child = i),
              (dt = e),
              (pt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function us(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function cs(e) {
    if (Te) {
      var t = pt;
      if (t) {
        var i = t;
        if (!zc(e, t)) {
          if (us(e)) throw Error(o(418));
          t = on(i.nextSibling);
          var s = dt;
          t && zc(e, t) ? Fc(s, i) : ((e.flags = (e.flags & -4097) | 2), (Te = !1), (dt = e));
        }
      } else {
        if (us(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (Te = !1), (dt = e);
      }
    }
  }
  function jc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    dt = e;
  }
  function co(e) {
    if (e !== dt) return !1;
    if (!Te) return jc(e), (Te = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !ts(e.type, e.memoizedProps))),
      t && (t = pt))
    ) {
      if (us(e)) throw ($c(), Error(o(418)));
      for (; t; ) Fc(e, t), (t = on(t.nextSibling));
    }
    if ((jc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === '/$') {
              if (t === 0) {
                pt = on(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        pt = null;
      }
    } else pt = dt ? on(e.stateNode.nextSibling) : null;
    return !0;
  }
  function $c() {
    for (var e = pt; e; ) e = on(e.nextSibling);
  }
  function ur() {
    (pt = dt = null), (Te = !1);
  }
  function fs(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  var dg = V.ReactCurrentBatchConfig;
  function Zr(e, t, i) {
    if (((e = i.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(o(309));
          var s = i.stateNode;
        }
        if (!s) throw Error(o(147, e));
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
      if (typeof e != 'string') throw Error(o(284));
      if (!i._owner) throw Error(o(290, e));
    }
    return e;
  }
  function fo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(o(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
  }
  function Uc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Vc(e) {
    function t(P, k) {
      if (e) {
        var b = P.deletions;
        b === null ? ((P.deletions = [k]), (P.flags |= 16)) : b.push(k);
      }
    }
    function i(P, k) {
      if (!e) return null;
      for (; k !== null; ) t(P, k), (k = k.sibling);
      return null;
    }
    function s(P, k) {
      for (P = new Map(); k !== null; ) k.key !== null ? P.set(k.key, k) : P.set(k.index, k), (k = k.sibling);
      return P;
    }
    function u(P, k) {
      return (P = gn(P, k)), (P.index = 0), (P.sibling = null), P;
    }
    function f(P, k, b) {
      return (
        (P.index = b),
        e
          ? ((b = P.alternate), b !== null ? ((b = b.index), b < k ? ((P.flags |= 2), k) : b) : ((P.flags |= 2), k))
          : ((P.flags |= 1048576), k)
      );
    }
    function p(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function y(P, k, b, $) {
      return k === null || k.tag !== 6
        ? ((k = nl(b, P.mode, $)), (k.return = P), k)
        : ((k = u(k, b)), (k.return = P), k);
    }
    function x(P, k, b, $) {
      var X = b.type;
      return X === ne
        ? M(P, k, b.props.children, $, b.key)
        : k !== null &&
          (k.elementType === X || (typeof X == 'object' && X !== null && X.$$typeof === Re && Uc(X) === k.type))
        ? (($ = u(k, b.props)), ($.ref = Zr(P, k, b)), ($.return = P), $)
        : (($ = Mo(b.type, b.key, b.props, null, P.mode, $)), ($.ref = Zr(P, k, b)), ($.return = P), $);
    }
    function N(P, k, b, $) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== b.containerInfo ||
        k.stateNode.implementation !== b.implementation
        ? ((k = rl(b, P.mode, $)), (k.return = P), k)
        : ((k = u(k, b.children || [])), (k.return = P), k);
    }
    function M(P, k, b, $, X) {
      return k === null || k.tag !== 7
        ? ((k = zn(b, P.mode, $, X)), (k.return = P), k)
        : ((k = u(k, b)), (k.return = P), k);
    }
    function F(P, k, b) {
      if ((typeof k == 'string' && k !== '') || typeof k == 'number')
        return (k = nl('' + k, P.mode, b)), (k.return = P), k;
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case _:
            return (b = Mo(k.type, k.key, k.props, null, P.mode, b)), (b.ref = Zr(P, null, k)), (b.return = P), b;
          case Z:
            return (k = rl(k, P.mode, b)), (k.return = P), k;
          case Re:
            var $ = k._init;
            return F(P, $(k._payload), b);
        }
        if ($t(k) || G(k)) return (k = zn(k, P.mode, b, null)), (k.return = P), k;
        fo(P, k);
      }
      return null;
    }
    function D(P, k, b, $) {
      var X = k !== null ? k.key : null;
      if ((typeof b == 'string' && b !== '') || typeof b == 'number') return X !== null ? null : y(P, k, '' + b, $);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case _:
            return b.key === X ? x(P, k, b, $) : null;
          case Z:
            return b.key === X ? N(P, k, b, $) : null;
          case Re:
            return (X = b._init), D(P, k, X(b._payload), $);
        }
        if ($t(b) || G(b)) return X !== null ? null : M(P, k, b, $, null);
        fo(P, b);
      }
      return null;
    }
    function H(P, k, b, $, X) {
      if ((typeof $ == 'string' && $ !== '') || typeof $ == 'number') return (P = P.get(b) || null), y(k, P, '' + $, X);
      if (typeof $ == 'object' && $ !== null) {
        switch ($.$$typeof) {
          case _:
            return (P = P.get($.key === null ? b : $.key) || null), x(k, P, $, X);
          case Z:
            return (P = P.get($.key === null ? b : $.key) || null), N(k, P, $, X);
          case Re:
            var ee = $._init;
            return H(P, k, b, ee($._payload), X);
        }
        if ($t($) || G($)) return (P = P.get(b) || null), M(k, P, $, X, null);
        fo(k, $);
      }
      return null;
    }
    function K(P, k, b, $) {
      for (var X = null, ee = null, te = k, oe = (k = 0), We = null; te !== null && oe < b.length; oe++) {
        te.index > oe ? ((We = te), (te = null)) : (We = te.sibling);
        var he = D(P, te, b[oe], $);
        if (he === null) {
          te === null && (te = We);
          break;
        }
        e && te && he.alternate === null && t(P, te),
          (k = f(he, k, oe)),
          ee === null ? (X = he) : (ee.sibling = he),
          (ee = he),
          (te = We);
      }
      if (oe === b.length) return i(P, te), Te && Ln(P, oe), X;
      if (te === null) {
        for (; oe < b.length; oe++)
          (te = F(P, b[oe], $)),
            te !== null && ((k = f(te, k, oe)), ee === null ? (X = te) : (ee.sibling = te), (ee = te));
        return Te && Ln(P, oe), X;
      }
      for (te = s(P, te); oe < b.length; oe++)
        (We = H(te, P, oe, b[oe], $)),
          We !== null &&
            (e && We.alternate !== null && te.delete(We.key === null ? oe : We.key),
            (k = f(We, k, oe)),
            ee === null ? (X = We) : (ee.sibling = We),
            (ee = We));
      return (
        e &&
          te.forEach(function (vn) {
            return t(P, vn);
          }),
        Te && Ln(P, oe),
        X
      );
    }
    function Q(P, k, b, $) {
      var X = G(b);
      if (typeof X != 'function') throw Error(o(150));
      if (((b = X.call(b)), b == null)) throw Error(o(151));
      for (
        var ee = (X = null), te = k, oe = (k = 0), We = null, he = b.next();
        te !== null && !he.done;
        oe++, he = b.next()
      ) {
        te.index > oe ? ((We = te), (te = null)) : (We = te.sibling);
        var vn = D(P, te, he.value, $);
        if (vn === null) {
          te === null && (te = We);
          break;
        }
        e && te && vn.alternate === null && t(P, te),
          (k = f(vn, k, oe)),
          ee === null ? (X = vn) : (ee.sibling = vn),
          (ee = vn),
          (te = We);
      }
      if (he.done) return i(P, te), Te && Ln(P, oe), X;
      if (te === null) {
        for (; !he.done; oe++, he = b.next())
          (he = F(P, he.value, $)),
            he !== null && ((k = f(he, k, oe)), ee === null ? (X = he) : (ee.sibling = he), (ee = he));
        return Te && Ln(P, oe), X;
      }
      for (te = s(P, te); !he.done; oe++, he = b.next())
        (he = H(te, P, oe, he.value, $)),
          he !== null &&
            (e && he.alternate !== null && te.delete(he.key === null ? oe : he.key),
            (k = f(he, k, oe)),
            ee === null ? (X = he) : (ee.sibling = he),
            (ee = he));
      return (
        e &&
          te.forEach(function (Hg) {
            return t(P, Hg);
          }),
        Te && Ln(P, oe),
        X
      );
    }
    function Ae(P, k, b, $) {
      if (
        (typeof b == 'object' && b !== null && b.type === ne && b.key === null && (b = b.props.children),
        typeof b == 'object' && b !== null)
      ) {
        switch (b.$$typeof) {
          case _:
            e: {
              for (var X = b.key, ee = k; ee !== null; ) {
                if (ee.key === X) {
                  if (((X = b.type), X === ne)) {
                    if (ee.tag === 7) {
                      i(P, ee.sibling), (k = u(ee, b.props.children)), (k.return = P), (P = k);
                      break e;
                    }
                  } else if (
                    ee.elementType === X ||
                    (typeof X == 'object' && X !== null && X.$$typeof === Re && Uc(X) === ee.type)
                  ) {
                    i(P, ee.sibling), (k = u(ee, b.props)), (k.ref = Zr(P, ee, b)), (k.return = P), (P = k);
                    break e;
                  }
                  i(P, ee);
                  break;
                } else t(P, ee);
                ee = ee.sibling;
              }
              b.type === ne
                ? ((k = zn(b.props.children, P.mode, $, b.key)), (k.return = P), (P = k))
                : (($ = Mo(b.type, b.key, b.props, null, P.mode, $)), ($.ref = Zr(P, k, b)), ($.return = P), (P = $));
            }
            return p(P);
          case Z:
            e: {
              for (ee = b.key; k !== null; ) {
                if (k.key === ee)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === b.containerInfo &&
                    k.stateNode.implementation === b.implementation
                  ) {
                    i(P, k.sibling), (k = u(k, b.children || [])), (k.return = P), (P = k);
                    break e;
                  } else {
                    i(P, k);
                    break;
                  }
                else t(P, k);
                k = k.sibling;
              }
              (k = rl(b, P.mode, $)), (k.return = P), (P = k);
            }
            return p(P);
          case Re:
            return (ee = b._init), Ae(P, k, ee(b._payload), $);
        }
        if ($t(b)) return K(P, k, b, $);
        if (G(b)) return Q(P, k, b, $);
        fo(P, b);
      }
      return (typeof b == 'string' && b !== '') || typeof b == 'number'
        ? ((b = '' + b),
          k !== null && k.tag === 6
            ? (i(P, k.sibling), (k = u(k, b)), (k.return = P), (P = k))
            : (i(P, k), (k = nl(b, P.mode, $)), (k.return = P), (P = k)),
          p(P))
        : i(P, k);
    }
    return Ae;
  }
  var cr = Vc(!0),
    Bc = Vc(!1),
    po = an(null),
    mo = null,
    fr = null,
    ds = null;
  function ps() {
    ds = fr = mo = null;
  }
  function ms(e) {
    var t = po.current;
    Oe(po), (e._currentValue = t);
  }
  function hs(e, t, i) {
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
  function dr(e, t) {
    (mo = e),
      (ds = fr = null),
      (e = e.dependencies),
      e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (at = !0), (e.firstContext = null));
  }
  function yt(e) {
    var t = e._currentValue;
    if (ds !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), fr === null)) {
        if (mo === null) throw Error(o(308));
        (fr = e), (mo.dependencies = { lanes: 0, firstContext: e });
      } else fr = fr.next = e;
    return t;
  }
  var In = null;
  function gs(e) {
    In === null ? (In = [e]) : In.push(e);
  }
  function Wc(e, t, i, s) {
    var u = t.interleaved;
    return u === null ? ((i.next = i), gs(t)) : ((i.next = u.next), (u.next = i)), (t.interleaved = i), Ht(e, s);
  }
  function Ht(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
      (e.childLanes |= t), (i = e.alternate), i !== null && (i.childLanes |= t), (i = e), (e = e.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var un = !1;
  function vs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Hc(e, t) {
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
  function Yt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function cn(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (pe & 2) !== 0)) {
      var u = s.pending;
      return u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)), (s.pending = t), Ht(e, i);
    }
    return (
      (u = s.interleaved),
      u === null ? ((t.next = t), gs(s)) : ((t.next = u.next), (u.next = t)),
      (s.interleaved = t),
      Ht(e, i)
    );
  }
  function ho(e, t, i) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))) {
      var s = t.lanes;
      (s &= e.pendingLanes), (i |= s), (t.lanes = i), Ia(e, i);
    }
  }
  function Yc(e, t) {
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
  function go(e, t, i, s) {
    var u = e.updateQueue;
    un = !1;
    var f = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var x = y,
        N = x.next;
      (x.next = null), p === null ? (f = N) : (p.next = N), (p = x);
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (y = M.lastBaseUpdate),
        y !== p && (y === null ? (M.firstBaseUpdate = N) : (y.next = N), (M.lastBaseUpdate = x)));
    }
    if (f !== null) {
      var F = u.baseState;
      (p = 0), (M = N = x = null), (y = f);
      do {
        var D = y.lane,
          H = y.eventTime;
        if ((s & D) === D) {
          M !== null &&
            (M = M.next = { eventTime: H, lane: 0, tag: y.tag, payload: y.payload, callback: y.callback, next: null });
          e: {
            var K = e,
              Q = y;
            switch (((D = t), (H = i), Q.tag)) {
              case 1:
                if (((K = Q.payload), typeof K == 'function')) {
                  F = K.call(H, F, D);
                  break e;
                }
                F = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (((K = Q.payload), (D = typeof K == 'function' ? K.call(H, F, D) : K), D == null)) break e;
                F = W({}, F, D);
                break e;
              case 2:
                un = !0;
            }
          }
          y.callback !== null &&
            y.lane !== 0 &&
            ((e.flags |= 64), (D = u.effects), D === null ? (u.effects = [y]) : D.push(y));
        } else
          (H = { eventTime: H, lane: D, tag: y.tag, payload: y.payload, callback: y.callback, next: null }),
            M === null ? ((N = M = H), (x = F)) : (M = M.next = H),
            (p |= D);
        if (((y = y.next), y === null)) {
          if (((y = u.shared.pending), y === null)) break;
          (D = y), (y = D.next), (D.next = null), (u.lastBaseUpdate = D), (u.shared.pending = null);
        }
      } while (!0);
      if (
        (M === null && (x = F),
        (u.baseState = x),
        (u.firstBaseUpdate = N),
        (u.lastBaseUpdate = M),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (p |= u.lane), (u = u.next);
        while (u !== t);
      } else f === null && (u.shared.lanes = 0);
      (Dn |= p), (e.lanes = p), (e.memoizedState = F);
    }
  }
  function qc(e, t, i) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          u = s.callback;
        if (u !== null) {
          if (((s.callback = null), (s = i), typeof u != 'function')) throw Error(o(191, u));
          u.call(s);
        }
      }
  }
  var ei = {},
    _t = an(ei),
    ti = an(ei),
    ni = an(ei);
  function _n(e) {
    if (e === ei) throw Error(o(174));
    return e;
  }
  function ys(e, t) {
    switch ((Ee(ni, t), Ee(ti, e), Ee(_t, ei), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : wa(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = wa(t, e));
    }
    Oe(_t), Ee(_t, t);
  }
  function pr() {
    Oe(_t), Oe(ti), Oe(ni);
  }
  function Kc(e) {
    _n(ni.current);
    var t = _n(_t.current),
      i = wa(t, e.type);
    t !== i && (Ee(ti, e), Ee(_t, i));
  }
  function ws(e) {
    ti.current === e && (Oe(_t), Oe(ti));
  }
  var Le = an(0);
  function vo(e) {
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
  var Ss = [];
  function xs() {
    for (var e = 0; e < Ss.length; e++) Ss[e]._workInProgressVersionPrimary = null;
    Ss.length = 0;
  }
  var yo = V.ReactCurrentDispatcher,
    ks = V.ReactCurrentBatchConfig,
    Rn = 0,
    Ie = null,
    ze = null,
    Ve = null,
    wo = !1,
    ri = !1,
    ii = 0,
    pg = 0;
  function Qe() {
    throw Error(o(321));
  }
  function Cs(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!Ct(e[i], t[i])) return !1;
    return !0;
  }
  function Ps(e, t, i, s, u, f) {
    if (
      ((Rn = f),
      (Ie = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (yo.current = e === null || e.memoizedState === null ? vg : yg),
      (e = i(s, u)),
      ri)
    ) {
      f = 0;
      do {
        if (((ri = !1), (ii = 0), 25 <= f)) throw Error(o(301));
        (f += 1), (Ve = ze = null), (t.updateQueue = null), (yo.current = wg), (e = i(s, u));
      } while (ri);
    }
    if (((yo.current = ko), (t = ze !== null && ze.next !== null), (Rn = 0), (Ve = ze = Ie = null), (wo = !1), t))
      throw Error(o(300));
    return e;
  }
  function Es() {
    var e = ii !== 0;
    return (ii = 0), e;
  }
  function Rt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ve === null ? (Ie.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve;
  }
  function wt() {
    if (ze === null) {
      var e = Ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Ve === null ? Ie.memoizedState : Ve.next;
    if (t !== null) (Ve = t), (ze = e);
    else {
      if (e === null) throw Error(o(310));
      (ze = e),
        (e = {
          memoizedState: ze.memoizedState,
          baseState: ze.baseState,
          baseQueue: ze.baseQueue,
          queue: ze.queue,
          next: null,
        }),
        Ve === null ? (Ie.memoizedState = Ve = e) : (Ve = Ve.next = e);
    }
    return Ve;
  }
  function oi(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function bs(e) {
    var t = wt(),
      i = t.queue;
    if (i === null) throw Error(o(311));
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
        N = f;
      do {
        var M = N.lane;
        if ((Rn & M) === M)
          x !== null &&
            (x = x.next =
              { lane: 0, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null }),
            (s = N.hasEagerState ? N.eagerState : e(s, N.action));
        else {
          var F = { lane: M, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null };
          x === null ? ((y = x = F), (p = s)) : (x = x.next = F), (Ie.lanes |= M), (Dn |= M);
        }
        N = N.next;
      } while (N !== null && N !== f);
      x === null ? (p = s) : (x.next = y),
        Ct(s, t.memoizedState) || (at = !0),
        (t.memoizedState = s),
        (t.baseState = p),
        (t.baseQueue = x),
        (i.lastRenderedState = s);
    }
    if (((e = i.interleaved), e !== null)) {
      u = e;
      do (f = u.lane), (Ie.lanes |= f), (Dn |= f), (u = u.next);
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function Os(e) {
    var t = wt(),
      i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch,
      u = i.pending,
      f = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var p = (u = u.next);
      do (f = e(f, p.action)), (p = p.next);
      while (p !== u);
      Ct(f, t.memoizedState) || (at = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (i.lastRenderedState = f);
    }
    return [f, s];
  }
  function Qc() {}
  function Gc(e, t) {
    var i = Ie,
      s = wt(),
      u = t(),
      f = !Ct(s.memoizedState, u);
    if (
      (f && ((s.memoizedState = u), (at = !0)),
      (s = s.queue),
      Ns(Zc.bind(null, i, s, e), [e]),
      s.getSnapshot !== t || f || (Ve !== null && Ve.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), ai(9, Jc.bind(null, i, s, u, t), void 0, null), Be === null)) throw Error(o(349));
      (Rn & 30) !== 0 || Xc(i, t, u);
    }
    return u;
  }
  function Xc(e, t, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = Ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ie.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
  }
  function Jc(e, t, i, s) {
    (t.value = i), (t.getSnapshot = s), ef(t) && tf(e);
  }
  function Zc(e, t, i) {
    return i(function () {
      ef(t) && tf(e);
    });
  }
  function ef(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Ct(e, i);
    } catch {
      return !0;
    }
  }
  function tf(e) {
    var t = Ht(e, 1);
    t !== null && Nt(t, e, 1, -1);
  }
  function nf(e) {
    var t = Rt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = gg.bind(null, Ie, e)),
      [t.memoizedState, e]
    );
  }
  function ai(e, t, i, s) {
    return (
      (e = { tag: e, create: t, destroy: i, deps: s, next: null }),
      (t = Ie.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ie.updateQueue = t), (t.lastEffect = e.next = e))
        : ((i = t.lastEffect),
          i === null ? (t.lastEffect = e.next = e) : ((s = i.next), (i.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function rf() {
    return wt().memoizedState;
  }
  function So(e, t, i, s) {
    var u = Rt();
    (Ie.flags |= e), (u.memoizedState = ai(1 | t, i, void 0, s === void 0 ? null : s));
  }
  function xo(e, t, i, s) {
    var u = wt();
    s = s === void 0 ? null : s;
    var f = void 0;
    if (ze !== null) {
      var p = ze.memoizedState;
      if (((f = p.destroy), s !== null && Cs(s, p.deps))) {
        u.memoizedState = ai(t, i, f, s);
        return;
      }
    }
    (Ie.flags |= e), (u.memoizedState = ai(1 | t, i, f, s));
  }
  function of(e, t) {
    return So(8390656, 8, e, t);
  }
  function Ns(e, t) {
    return xo(2048, 8, e, t);
  }
  function af(e, t) {
    return xo(4, 2, e, t);
  }
  function sf(e, t) {
    return xo(4, 4, e, t);
  }
  function lf(e, t) {
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
  function uf(e, t, i) {
    return (i = i != null ? i.concat([e]) : null), xo(4, 4, lf.bind(null, t, e), i);
  }
  function Ts() {}
  function cf(e, t) {
    var i = wt();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Cs(t, s[1]) ? s[0] : ((i.memoizedState = [e, t]), e);
  }
  function ff(e, t) {
    var i = wt();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && Cs(t, s[1]) ? s[0] : ((e = e()), (i.memoizedState = [e, t]), e);
  }
  function df(e, t, i) {
    return (Rn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = i))
      : (Ct(i, t) || ((i = Uu()), (Ie.lanes |= i), (Dn |= i), (e.baseState = !0)), t);
  }
  function mg(e, t) {
    var i = ye;
    (ye = i !== 0 && 4 > i ? i : 4), e(!0);
    var s = ks.transition;
    ks.transition = {};
    try {
      e(!1), t();
    } finally {
      (ye = i), (ks.transition = s);
    }
  }
  function pf() {
    return wt().memoizedState;
  }
  function hg(e, t, i) {
    var s = mn(e);
    if (((i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }), mf(e))) hf(t, i);
    else if (((i = Wc(e, t, i, s)), i !== null)) {
      var u = rt();
      Nt(i, e, s, u), gf(i, t, s);
    }
  }
  function gg(e, t, i) {
    var s = mn(e),
      u = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (mf(e)) hf(t, u);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && ((f = t.lastRenderedReducer), f !== null))
        try {
          var p = t.lastRenderedState,
            y = f(p, i);
          if (((u.hasEagerState = !0), (u.eagerState = y), Ct(y, p))) {
            var x = t.interleaved;
            x === null ? ((u.next = u), gs(t)) : ((u.next = x.next), (x.next = u)), (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (i = Wc(e, t, u, s)), i !== null && ((u = rt()), Nt(i, e, s, u), gf(i, t, s));
    }
  }
  function mf(e) {
    var t = e.alternate;
    return e === Ie || (t !== null && t === Ie);
  }
  function hf(e, t) {
    ri = wo = !0;
    var i = e.pending;
    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (e.pending = t);
  }
  function gf(e, t, i) {
    if ((i & 4194240) !== 0) {
      var s = t.lanes;
      (s &= e.pendingLanes), (i |= s), (t.lanes = i), Ia(e, i);
    }
  }
  var ko = {
      readContext: yt,
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
    vg = {
      readContext: yt,
      useCallback: function (e, t) {
        return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: yt,
      useEffect: of,
      useImperativeHandle: function (e, t, i) {
        return (i = i != null ? i.concat([e]) : null), So(4194308, 4, lf.bind(null, t, e), i);
      },
      useLayoutEffect: function (e, t) {
        return So(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return So(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = Rt();
        return (t = t === void 0 ? null : t), (e = e()), (i.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, i) {
        var s = Rt();
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
          (e = e.dispatch = hg.bind(null, Ie, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Rt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: nf,
      useDebugValue: Ts,
      useDeferredValue: function (e) {
        return (Rt().memoizedState = e);
      },
      useTransition: function () {
        var e = nf(!1),
          t = e[0];
        return (e = mg.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, i) {
        var s = Ie,
          u = Rt();
        if (Te) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (((i = t()), Be === null)) throw Error(o(349));
          (Rn & 30) !== 0 || Xc(s, t, i);
        }
        u.memoizedState = i;
        var f = { value: i, getSnapshot: t };
        return (
          (u.queue = f),
          of(Zc.bind(null, s, f, e), [e]),
          (s.flags |= 2048),
          ai(9, Jc.bind(null, s, f, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Rt(),
          t = Be.identifierPrefix;
        if (Te) {
          var i = Wt,
            s = Bt;
          (i = (s & ~(1 << (32 - kt(s) - 1))).toString(32) + i),
            (t = ':' + t + 'R' + i),
            (i = ii++),
            0 < i && (t += 'H' + i.toString(32)),
            (t += ':');
        } else (i = pg++), (t = ':' + t + 'r' + i.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    yg = {
      readContext: yt,
      useCallback: cf,
      useContext: yt,
      useEffect: Ns,
      useImperativeHandle: uf,
      useInsertionEffect: af,
      useLayoutEffect: sf,
      useMemo: ff,
      useReducer: bs,
      useRef: rf,
      useState: function () {
        return bs(oi);
      },
      useDebugValue: Ts,
      useDeferredValue: function (e) {
        var t = wt();
        return df(t, ze.memoizedState, e);
      },
      useTransition: function () {
        var e = bs(oi)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qc,
      useSyncExternalStore: Gc,
      useId: pf,
      unstable_isNewReconciler: !1,
    },
    wg = {
      readContext: yt,
      useCallback: cf,
      useContext: yt,
      useEffect: Ns,
      useImperativeHandle: uf,
      useInsertionEffect: af,
      useLayoutEffect: sf,
      useMemo: ff,
      useReducer: Os,
      useRef: rf,
      useState: function () {
        return Os(oi);
      },
      useDebugValue: Ts,
      useDeferredValue: function (e) {
        var t = wt();
        return ze === null ? (t.memoizedState = e) : df(t, ze.memoizedState, e);
      },
      useTransition: function () {
        var e = Os(oi)[0],
          t = wt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qc,
      useSyncExternalStore: Gc,
      useId: pf,
      unstable_isNewReconciler: !1,
    };
  function Et(e, t) {
    if (e && e.defaultProps) {
      (t = W({}, t)), (e = e.defaultProps);
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function Ls(e, t, i, s) {
    (t = e.memoizedState),
      (i = i(s, t)),
      (i = i == null ? t : W({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Co = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? bn(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var s = rt(),
        u = mn(e),
        f = Yt(s, u);
      (f.payload = t), i != null && (f.callback = i), (t = cn(e, f, u)), t !== null && (Nt(t, e, u, s), ho(t, e, u));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var s = rt(),
        u = mn(e),
        f = Yt(s, u);
      (f.tag = 1),
        (f.payload = t),
        i != null && (f.callback = i),
        (t = cn(e, f, u)),
        t !== null && (Nt(t, e, u, s), ho(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = rt(),
        s = mn(e),
        u = Yt(i, s);
      (u.tag = 2), t != null && (u.callback = t), (t = cn(e, u, s)), t !== null && (Nt(t, e, s, i), ho(t, e, s));
    },
  };
  function vf(e, t, i, s, u, f, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(s, f, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Yr(i, s) || !Yr(u, f)
        : !0
    );
  }
  function yf(e, t, i) {
    var s = !1,
      u = sn,
      f = t.contextType;
    return (
      typeof f == 'object' && f !== null
        ? (f = yt(f))
        : ((u = ot(t) ? Nn : Ke.current), (s = t.contextTypes), (f = (s = s != null) ? ar(e, u) : sn)),
      (t = new t(i, f)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Co),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      t
    );
  }
  function wf(e, t, i, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(i, s),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(i, s),
      t.state !== e && Co.enqueueReplaceState(t, t.state, null);
  }
  function Is(e, t, i, s) {
    var u = e.stateNode;
    (u.props = i), (u.state = e.memoizedState), (u.refs = {}), vs(e);
    var f = t.contextType;
    typeof f == 'object' && f !== null ? (u.context = yt(f)) : ((f = ot(t) ? Nn : Ke.current), (u.context = ar(e, f))),
      (u.state = e.memoizedState),
      (f = t.getDerivedStateFromProps),
      typeof f == 'function' && (Ls(e, t, f, i), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function' ||
        (typeof u.UNSAFE_componentWillMount != 'function' && typeof u.componentWillMount != 'function') ||
        ((t = u.state),
        typeof u.componentWillMount == 'function' && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
        t !== u.state && Co.enqueueReplaceState(u, u.state, null),
        go(e, i, u, s),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function mr(e, t) {
    try {
      var i = '',
        s = t;
      do (i += fe(s)), (s = s.return);
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
  function _s(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Rs(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var Sg = typeof WeakMap == 'function' ? WeakMap : Map;
  function Sf(e, t, i) {
    (i = Yt(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var s = t.value;
    return (
      (i.callback = function () {
        Lo || ((Lo = !0), (Ks = s)), Rs(e, t);
      }),
      i
    );
  }
  function xf(e, t, i) {
    (i = Yt(-1, i)), (i.tag = 3);
    var s = e.type.getDerivedStateFromError;
    if (typeof s == 'function') {
      var u = t.value;
      (i.payload = function () {
        return s(u);
      }),
        (i.callback = function () {
          Rs(e, t);
        });
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == 'function' &&
        (i.callback = function () {
          Rs(e, t), typeof s != 'function' && (dn === null ? (dn = new Set([this])) : dn.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, { componentStack: p !== null ? p : '' });
        }),
      i
    );
  }
  function kf(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Sg();
      var u = new Set();
      s.set(t, u);
    } else (u = s.get(t)), u === void 0 && ((u = new Set()), s.set(t, u));
    u.has(i) || (u.add(i), (e = Dg.bind(null, e, t, i)), t.then(e, e));
  }
  function Cf(e) {
    do {
      var t;
      if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Pf(e, t, i, s, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 && (i.alternate === null ? (i.tag = 17) : ((t = Yt(-1, 1)), (t.tag = 2), cn(i, t, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var xg = V.ReactCurrentOwner,
    at = !1;
  function nt(e, t, i, s) {
    t.child = e === null ? Bc(t, null, i, s) : cr(t, e.child, i, s);
  }
  function Ef(e, t, i, s, u) {
    i = i.render;
    var f = t.ref;
    return (
      dr(t, u),
      (s = Ps(e, t, i, s, f, u)),
      (i = Es()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), qt(e, t, u))
        : (Te && i && ss(t), (t.flags |= 1), nt(e, t, s, u), t.child)
    );
  }
  function bf(e, t, i, s, u) {
    if (e === null) {
      var f = i.type;
      return typeof f == 'function' &&
        !tl(f) &&
        f.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = f), Of(e, t, f, s, u))
        : ((e = Mo(i.type, null, s, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), (e.lanes & u) === 0)) {
      var p = f.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : Yr), i(p, s) && e.ref === t.ref)) return qt(e, t, u);
    }
    return (t.flags |= 1), (e = gn(f, s)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Of(e, t, i, s, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Yr(f, s) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = s = f), (e.lanes & u) !== 0)) (e.flags & 131072) !== 0 && (at = !0);
        else return (t.lanes = e.lanes), qt(e, t, u);
    }
    return Ds(e, t, i, s, u);
  }
  function Nf(e, t, i) {
    var s = t.pendingProps,
      u = s.children,
      f = e !== null ? e.memoizedState : null;
    if (s.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Ee(gr, mt), (mt |= i);
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Ee(gr, mt),
            (mt |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (s = f !== null ? f.baseLanes : i),
          Ee(gr, mt),
          (mt |= s);
      }
    else f !== null ? ((s = f.baseLanes | i), (t.memoizedState = null)) : (s = i), Ee(gr, mt), (mt |= s);
    return nt(e, t, u, i), t.child;
  }
  function Tf(e, t) {
    var i = t.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) && ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ds(e, t, i, s, u) {
    var f = ot(i) ? Nn : Ke.current;
    return (
      (f = ar(t, f)),
      dr(t, u),
      (i = Ps(e, t, i, s, f, u)),
      (s = Es()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), qt(e, t, u))
        : (Te && s && ss(t), (t.flags |= 1), nt(e, t, i, u), t.child)
    );
  }
  function Lf(e, t, i, s, u) {
    if (ot(i)) {
      var f = !0;
      ao(t);
    } else f = !1;
    if ((dr(t, u), t.stateNode === null)) Eo(e, t), yf(t, i, s), Is(t, i, s, u), (s = !0);
    else if (e === null) {
      var p = t.stateNode,
        y = t.memoizedProps;
      p.props = y;
      var x = p.context,
        N = i.contextType;
      typeof N == 'object' && N !== null ? (N = yt(N)) : ((N = ot(i) ? Nn : Ke.current), (N = ar(t, N)));
      var M = i.getDerivedStateFromProps,
        F = typeof M == 'function' || typeof p.getSnapshotBeforeUpdate == 'function';
      F ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' && typeof p.componentWillReceiveProps != 'function') ||
        ((y !== s || x !== N) && wf(t, p, s, N)),
        (un = !1);
      var D = t.memoizedState;
      (p.state = D),
        go(t, s, p, u),
        (x = t.memoizedState),
        y !== s || D !== x || it.current || un
          ? (typeof M == 'function' && (Ls(t, i, M, s), (x = t.memoizedState)),
            (y = un || vf(t, i, y, s, D, x, N))
              ? (F ||
                  (typeof p.UNSAFE_componentWillMount != 'function' && typeof p.componentWillMount != 'function') ||
                  (typeof p.componentWillMount == 'function' && p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == 'function' && p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof p.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = x)),
            (p.props = s),
            (p.state = x),
            (p.context = N),
            (s = y))
          : (typeof p.componentDidMount == 'function' && (t.flags |= 4194308), (s = !1));
    } else {
      (p = t.stateNode),
        Hc(e, t),
        (y = t.memoizedProps),
        (N = t.type === t.elementType ? y : Et(t.type, y)),
        (p.props = N),
        (F = t.pendingProps),
        (D = p.context),
        (x = i.contextType),
        typeof x == 'object' && x !== null ? (x = yt(x)) : ((x = ot(i) ? Nn : Ke.current), (x = ar(t, x)));
      var H = i.getDerivedStateFromProps;
      (M = typeof H == 'function' || typeof p.getSnapshotBeforeUpdate == 'function') ||
        (typeof p.UNSAFE_componentWillReceiveProps != 'function' && typeof p.componentWillReceiveProps != 'function') ||
        ((y !== F || D !== x) && wf(t, p, s, x)),
        (un = !1),
        (D = t.memoizedState),
        (p.state = D),
        go(t, s, p, u);
      var K = t.memoizedState;
      y !== F || D !== K || it.current || un
        ? (typeof H == 'function' && (Ls(t, i, H, s), (K = t.memoizedState)),
          (N = un || vf(t, i, N, s, D, K, x) || !1)
            ? (M ||
                (typeof p.UNSAFE_componentWillUpdate != 'function' && typeof p.componentWillUpdate != 'function') ||
                (typeof p.componentWillUpdate == 'function' && p.componentWillUpdate(s, K, x),
                typeof p.UNSAFE_componentWillUpdate == 'function' && p.UNSAFE_componentWillUpdate(s, K, x)),
              typeof p.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof p.componentDidUpdate != 'function' ||
                (y === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != 'function' ||
                (y === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = K)),
          (p.props = s),
          (p.state = K),
          (p.context = x),
          (s = N))
        : (typeof p.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return As(e, t, i, s, f, u);
  }
  function As(e, t, i, s, u, f) {
    Tf(e, t);
    var p = (t.flags & 128) !== 0;
    if (!s && !p) return u && Dc(t, i, !1), qt(e, t, f);
    (s = t.stateNode), (xg.current = t);
    var y = p && typeof i.getDerivedStateFromError != 'function' ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && p ? ((t.child = cr(t, e.child, null, f)), (t.child = cr(t, null, y, f))) : nt(e, t, y, f),
      (t.memoizedState = s.state),
      u && Dc(t, i, !0),
      t.child
    );
  }
  function If(e) {
    var t = e.stateNode;
    t.pendingContext ? _c(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _c(e, t.context, !1),
      ys(e, t.containerInfo);
  }
  function _f(e, t, i, s, u) {
    return ur(), fs(u), (t.flags |= 256), nt(e, t, i, s), t.child;
  }
  var Ms = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Rf(e, t, i) {
    var s = t.pendingProps,
      u = Le.current,
      f = !1,
      p = (t.flags & 128) !== 0,
      y;
    if (
      ((y = p) || (y = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      y ? ((f = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (u |= 1),
      Ee(Le, u & 1),
      e === null)
    )
      return (
        cs(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0 ? (t.lanes = 1) : e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824), null)
          : ((p = s.children),
            (e = s.fallback),
            f
              ? ((s = t.mode),
                (f = t.child),
                (p = { mode: 'hidden', children: p }),
                (s & 1) === 0 && f !== null ? ((f.childLanes = 0), (f.pendingProps = p)) : (f = Fo(p, s, 0, null)),
                (e = zn(e, s, i, null)),
                (f.return = t),
                (e.return = t),
                (f.sibling = e),
                (t.child = f),
                (t.child.memoizedState = Fs(i)),
                (t.memoizedState = Ms),
                e)
              : zs(t, p))
      );
    if (((u = e.memoizedState), u !== null && ((y = u.dehydrated), y !== null))) return kg(e, t, p, s, y, u, i);
    if (f) {
      (f = s.fallback), (p = t.mode), (u = e.child), (y = u.sibling);
      var x = { mode: 'hidden', children: s.children };
      return (
        (p & 1) === 0 && t.child !== u
          ? ((s = t.child), (s.childLanes = 0), (s.pendingProps = x), (t.deletions = null))
          : ((s = gn(u, x)), (s.subtreeFlags = u.subtreeFlags & 14680064)),
        y !== null ? (f = gn(y, f)) : ((f = zn(f, p, i, null)), (f.flags |= 2)),
        (f.return = t),
        (s.return = t),
        (s.sibling = f),
        (t.child = s),
        (s = f),
        (f = t.child),
        (p = e.child.memoizedState),
        (p = p === null ? Fs(i) : { baseLanes: p.baseLanes | i, cachePool: null, transitions: p.transitions }),
        (f.memoizedState = p),
        (f.childLanes = e.childLanes & ~i),
        (t.memoizedState = Ms),
        s
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (s = gn(f, { mode: 'visible', children: s.children })),
      (t.mode & 1) === 0 && (s.lanes = i),
      (s.return = t),
      (s.sibling = null),
      e !== null && ((i = t.deletions), i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function zs(e, t) {
    return (t = Fo({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
  }
  function Po(e, t, i, s) {
    return (
      s !== null && fs(s),
      cr(t, e.child, null, i),
      (e = zs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function kg(e, t, i, s, u, f, p) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (s = _s(Error(o(422)))), Po(e, t, p, s))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((f = s.fallback),
          (u = t.mode),
          (s = Fo({ mode: 'visible', children: s.children }, u, 0, null)),
          (f = zn(f, u, p, null)),
          (f.flags |= 2),
          (s.return = t),
          (f.return = t),
          (s.sibling = f),
          (t.child = s),
          (t.mode & 1) !== 0 && cr(t, e.child, null, p),
          (t.child.memoizedState = Fs(p)),
          (t.memoizedState = Ms),
          f);
    if ((t.mode & 1) === 0) return Po(e, t, p, null);
    if (u.data === '$!') {
      if (((s = u.nextSibling && u.nextSibling.dataset), s)) var y = s.dgst;
      return (s = y), (f = Error(o(419))), (s = _s(f, s, void 0)), Po(e, t, p, s);
    }
    if (((y = (p & e.childLanes) !== 0), at || y)) {
      if (((s = Be), s !== null)) {
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
          u !== 0 && u !== f.retryLane && ((f.retryLane = u), Ht(e, u), Nt(s, e, u, -1));
      }
      return el(), (s = _s(Error(o(421)))), Po(e, t, p, s);
    }
    return u.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Ag.bind(null, e)), (u._reactRetry = t), null)
      : ((e = f.treeContext),
        (pt = on(u.nextSibling)),
        (dt = t),
        (Te = !0),
        (Pt = null),
        e !== null && ((gt[vt++] = Bt), (gt[vt++] = Wt), (gt[vt++] = Tn), (Bt = e.id), (Wt = e.overflow), (Tn = t)),
        (t = zs(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function Df(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), hs(e.return, t, i);
  }
  function js(e, t, i, s, u) {
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
  function Af(e, t, i) {
    var s = t.pendingProps,
      u = s.revealOrder,
      f = s.tail;
    if ((nt(e, t, s.children, i), (s = Le.current), (s & 2) !== 0)) (s = (s & 1) | 2), (t.flags |= 128);
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
    if ((Ee(Le, s), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case 'forwards':
          for (i = t.child, u = null; i !== null; )
            (e = i.alternate), e !== null && vo(e) === null && (u = i), (i = i.sibling);
          (i = u),
            i === null ? ((u = t.child), (t.child = null)) : ((u = i.sibling), (i.sibling = null)),
            js(t, !1, u, i, f);
          break;
        case 'backwards':
          for (i = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && vo(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = i), (i = u), (u = e);
          }
          js(t, !0, i, null, f);
          break;
        case 'together':
          js(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Eo(e, t) {
    (t.mode & 1) === 0 && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function qt(e, t, i) {
    if ((e !== null && (t.dependencies = e.dependencies), (Dn |= t.lanes), (i & t.childLanes) === 0)) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, i = gn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; )
        (e = e.sibling), (i = i.sibling = gn(e, e.pendingProps)), (i.return = t);
      i.sibling = null;
    }
    return t.child;
  }
  function Cg(e, t, i) {
    switch (t.tag) {
      case 3:
        If(t), ur();
        break;
      case 5:
        Kc(t);
        break;
      case 1:
        ot(t.type) && ao(t);
        break;
      case 4:
        ys(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          u = t.memoizedProps.value;
        Ee(po, s._currentValue), (s._currentValue = u);
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (Ee(Le, Le.current & 1), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
            ? Rf(e, t, i)
            : (Ee(Le, Le.current & 1), (e = qt(e, t, i)), e !== null ? e.sibling : null);
        Ee(Le, Le.current & 1);
        break;
      case 19:
        if (((s = (i & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (s) return Af(e, t, i);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ee(Le, Le.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Nf(e, t, i);
    }
    return qt(e, t, i);
  }
  var Mf, $s, Ff, zf;
  (Mf = function (e, t) {
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
    ($s = function () {}),
    (Ff = function (e, t, i, s) {
      var u = e.memoizedProps;
      if (u !== s) {
        (e = t.stateNode), _n(_t.current);
        var f = null;
        switch (i) {
          case 'input':
            (u = Or(e, u)), (s = Or(e, s)), (f = []);
            break;
          case 'select':
            (u = W({}, u, { value: void 0 })), (s = W({}, s, { value: void 0 })), (f = []);
            break;
          case 'textarea':
            (u = ya(e, u)), (s = ya(e, s)), (f = []);
            break;
          default:
            typeof u.onClick != 'function' && typeof s.onClick == 'function' && (e.onclick = ro);
        }
        Sa(i, s);
        var p;
        i = null;
        for (N in u)
          if (!s.hasOwnProperty(N) && u.hasOwnProperty(N) && u[N] != null)
            if (N === 'style') {
              var y = u[N];
              for (p in y) y.hasOwnProperty(p) && (i || (i = {}), (i[p] = ''));
            } else
              N !== 'dangerouslySetInnerHTML' &&
                N !== 'children' &&
                N !== 'suppressContentEditableWarning' &&
                N !== 'suppressHydrationWarning' &&
                N !== 'autoFocus' &&
                (l.hasOwnProperty(N) ? f || (f = []) : (f = f || []).push(N, null));
        for (N in s) {
          var x = s[N];
          if (((y = u != null ? u[N] : void 0), s.hasOwnProperty(N) && x !== y && (x != null || y != null)))
            if (N === 'style')
              if (y) {
                for (p in y) !y.hasOwnProperty(p) || (x && x.hasOwnProperty(p)) || (i || (i = {}), (i[p] = ''));
                for (p in x) x.hasOwnProperty(p) && y[p] !== x[p] && (i || (i = {}), (i[p] = x[p]));
              } else i || (f || (f = []), f.push(N, i)), (i = x);
            else
              N === 'dangerouslySetInnerHTML'
                ? ((x = x ? x.__html : void 0),
                  (y = y ? y.__html : void 0),
                  x != null && y !== x && (f = f || []).push(N, x))
                : N === 'children'
                ? (typeof x != 'string' && typeof x != 'number') || (f = f || []).push(N, '' + x)
                : N !== 'suppressContentEditableWarning' &&
                  N !== 'suppressHydrationWarning' &&
                  (l.hasOwnProperty(N)
                    ? (x != null && N === 'onScroll' && be('scroll', e), f || y === x || (f = []))
                    : (f = f || []).push(N, x));
        }
        i && (f = f || []).push('style', i);
        var N = f;
        (t.updateQueue = N) && (t.flags |= 4);
      }
    }),
    (zf = function (e, t, i, s) {
      i !== s && (t.flags |= 4);
    });
  function si(e, t) {
    if (!Te)
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
  function Ge(e) {
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
  function Pg(e, t, i) {
    var s = t.pendingProps;
    switch ((ls(t), t.tag)) {
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
        return Ge(t), null;
      case 1:
        return ot(t.type) && oo(), Ge(t), null;
      case 3:
        return (
          (s = t.stateNode),
          pr(),
          Oe(it),
          Oe(Ke),
          xs(),
          s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (co(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Pt !== null && (Xs(Pt), (Pt = null)))),
          $s(e, t),
          Ge(t),
          null
        );
      case 5:
        ws(t);
        var u = _n(ni.current);
        if (((i = t.type), e !== null && t.stateNode != null))
          Ff(e, t, i, s, u), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return Ge(t), null;
          }
          if (((e = _n(_t.current)), co(t))) {
            (s = t.stateNode), (i = t.type);
            var f = t.memoizedProps;
            switch (((s[It] = t), (s[Xr] = f), (e = (t.mode & 1) !== 0), i)) {
              case 'dialog':
                be('cancel', s), be('close', s);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                be('load', s);
                break;
              case 'video':
              case 'audio':
                for (u = 0; u < Kr.length; u++) be(Kr[u], s);
                break;
              case 'source':
                be('error', s);
                break;
              case 'img':
              case 'image':
              case 'link':
                be('error', s), be('load', s);
                break;
              case 'details':
                be('toggle', s);
                break;
              case 'input':
                _i(s, f), be('invalid', s);
                break;
              case 'select':
                (s._wrapperState = { wasMultiple: !!f.multiple }), be('invalid', s);
                break;
              case 'textarea':
                Su(s, f), be('invalid', s);
            }
            Sa(i, f), (u = null);
            for (var p in f)
              if (f.hasOwnProperty(p)) {
                var y = f[p];
                p === 'children'
                  ? typeof y == 'string'
                    ? s.textContent !== y &&
                      (f.suppressHydrationWarning !== !0 && no(s.textContent, y, e), (u = ['children', y]))
                    : typeof y == 'number' &&
                      s.textContent !== '' + y &&
                      (f.suppressHydrationWarning !== !0 && no(s.textContent, y, e), (u = ['children', '' + y]))
                  : l.hasOwnProperty(p) && y != null && p === 'onScroll' && be('scroll', s);
              }
            switch (i) {
              case 'input':
                Yn(s), Di(s, f, !0);
                break;
              case 'textarea':
                Yn(s), ku(s);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof f.onClick == 'function' && (s.onclick = ro);
            }
            (s = u), (t.updateQueue = s), s !== null && (t.flags |= 4);
          } else {
            (p = u.nodeType === 9 ? u : u.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Cu(i)),
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
              (e[It] = t),
              (e[Xr] = s),
              Mf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = xa(i, s)), i)) {
                case 'dialog':
                  be('cancel', e), be('close', e), (u = s);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  be('load', e), (u = s);
                  break;
                case 'video':
                case 'audio':
                  for (u = 0; u < Kr.length; u++) be(Kr[u], e);
                  u = s;
                  break;
                case 'source':
                  be('error', e), (u = s);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  be('error', e), be('load', e), (u = s);
                  break;
                case 'details':
                  be('toggle', e), (u = s);
                  break;
                case 'input':
                  _i(e, s), (u = Or(e, s)), be('invalid', e);
                  break;
                case 'option':
                  u = s;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!s.multiple }),
                    (u = W({}, s, { value: void 0 })),
                    be('invalid', e);
                  break;
                case 'textarea':
                  Su(e, s), (u = ya(e, s)), be('invalid', e);
                  break;
                default:
                  u = s;
              }
              Sa(i, u), (y = u);
              for (f in y)
                if (y.hasOwnProperty(f)) {
                  var x = y[f];
                  f === 'style'
                    ? bu(e, x)
                    : f === 'dangerouslySetInnerHTML'
                    ? ((x = x ? x.__html : void 0), x != null && Pu(e, x))
                    : f === 'children'
                    ? typeof x == 'string'
                      ? (i !== 'textarea' || x !== '') && Tr(e, x)
                      : typeof x == 'number' && Tr(e, '' + x)
                    : f !== 'suppressContentEditableWarning' &&
                      f !== 'suppressHydrationWarning' &&
                      f !== 'autoFocus' &&
                      (l.hasOwnProperty(f)
                        ? x != null && f === 'onScroll' && be('scroll', e)
                        : x != null && j(e, f, x, p));
                }
              switch (i) {
                case 'input':
                  Yn(e), Di(e, s, !1);
                  break;
                case 'textarea':
                  Yn(e), ku(e);
                  break;
                case 'option':
                  s.value != null && e.setAttribute('value', '' + ge(s.value));
                  break;
                case 'select':
                  (e.multiple = !!s.multiple),
                    (f = s.value),
                    f != null
                      ? Kn(e, !!s.multiple, f, !1)
                      : s.defaultValue != null && Kn(e, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == 'function' && (e.onclick = ro);
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
        return Ge(t), null;
      case 6:
        if (e && t.stateNode != null) zf(e, t, e.memoizedProps, s);
        else {
          if (typeof s != 'string' && t.stateNode === null) throw Error(o(166));
          if (((i = _n(ni.current)), _n(_t.current), co(t))) {
            if (
              ((s = t.stateNode), (i = t.memoizedProps), (s[It] = t), (f = s.nodeValue !== i) && ((e = dt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  no(s.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && no(s.nodeValue, i, (e.mode & 1) !== 0);
              }
            f && (t.flags |= 4);
          } else (s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s)), (s[It] = t), (t.stateNode = s);
        }
        return Ge(t), null;
      case 13:
        if (
          (Oe(Le),
          (s = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Te && pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            $c(), ur(), (t.flags |= 98560), (f = !1);
          else if (((f = co(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(o(318));
              if (((f = t.memoizedState), (f = f !== null ? f.dehydrated : null), !f)) throw Error(o(317));
              f[It] = t;
            } else ur(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Ge(t), (f = !1);
          } else Pt !== null && (Xs(Pt), (Pt = null)), (f = !0);
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = i), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 && (e === null || (Le.current & 1) !== 0 ? je === 0 && (je = 3) : el())),
            t.updateQueue !== null && (t.flags |= 4),
            Ge(t),
            null);
      case 4:
        return pr(), $s(e, t), e === null && Qr(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return ms(t.type._context), Ge(t), null;
      case 17:
        return ot(t.type) && oo(), Ge(t), null;
      case 19:
        if ((Oe(Le), (f = t.memoizedState), f === null)) return Ge(t), null;
        if (((s = (t.flags & 128) !== 0), (p = f.rendering), p === null))
          if (s) si(f, !1);
          else {
            if (je !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((p = vo(e)), p !== null)) {
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
                  return Ee(Le, (Le.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            f.tail !== null && De() > vr && ((t.flags |= 128), (s = !0), si(f, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = vo(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (i = e.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                si(f, !0),
                f.tail === null && f.tailMode === 'hidden' && !p.alternate && !Te)
              )
                return Ge(t), null;
            } else
              2 * De() - f.renderingStartTime > vr &&
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
            (f.renderingStartTime = De()),
            (t.sibling = null),
            (i = Le.current),
            Ee(Le, s ? (i & 1) | 2 : i & 1),
            t)
          : (Ge(t), null);
      case 22:
      case 23:
        return (
          Zs(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && (t.mode & 1) !== 0 ? (mt & 1073741824) !== 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Eg(e, t) {
    switch ((ls(t), t.tag)) {
      case 1:
        return ot(t.type) && oo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          pr(),
          Oe(it),
          Oe(Ke),
          xs(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ws(t), null;
      case 13:
        if ((Oe(Le), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(o(340));
          ur();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return Oe(Le), null;
      case 4:
        return pr(), null;
      case 10:
        return ms(t.type._context), null;
      case 22:
      case 23:
        return Zs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bo = !1,
    Xe = !1,
    bg = typeof WeakSet == 'function' ? WeakSet : Set,
    q = null;
  function hr(e, t) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == 'function')
        try {
          i(null);
        } catch (s) {
          _e(e, t, s);
        }
      else i.current = null;
  }
  function Us(e, t, i) {
    try {
      i();
    } catch (s) {
      _e(e, t, s);
    }
  }
  var jf = !1;
  function Og(e, t) {
    if (((Za = Hi), (e = gc()), Ha(e))) {
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
              N = 0,
              M = 0,
              F = e,
              D = null;
            t: for (;;) {
              for (
                var H;
                F !== i || (u !== 0 && F.nodeType !== 3) || (y = p + u),
                  F !== f || (s !== 0 && F.nodeType !== 3) || (x = p + s),
                  F.nodeType === 3 && (p += F.nodeValue.length),
                  (H = F.firstChild) !== null;

              )
                (D = F), (F = H);
              for (;;) {
                if (F === e) break t;
                if ((D === i && ++N === u && (y = p), D === f && ++M === s && (x = p), (H = F.nextSibling) !== null))
                  break;
                (F = D), (D = F.parentNode);
              }
              F = H;
            }
            i = y === -1 || x === -1 ? null : { start: y, end: x };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (es = { focusedElem: e, selectionRange: i }, Hi = !1, q = t; q !== null; )
      if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (q = e);
      else
        for (; q !== null; ) {
          t = q;
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
                    var Q = K.memoizedProps,
                      Ae = K.memoizedState,
                      P = t.stateNode,
                      k = P.getSnapshotBeforeUpdate(t.elementType === t.type ? Q : Et(t.type, Q), Ae);
                    P.__reactInternalSnapshotBeforeUpdate = k;
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
          } catch ($) {
            _e(t, t.return, $);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (q = e);
            break;
          }
          q = t.return;
        }
    return (K = jf), (jf = !1), K;
  }
  function li(e, t, i) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var u = (s = s.next);
      do {
        if ((u.tag & e) === e) {
          var f = u.destroy;
          (u.destroy = void 0), f !== void 0 && Us(t, i, f);
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function Oo(e, t) {
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
  function Vs(e) {
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
  function $f(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), $f(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode), t !== null && (delete t[It], delete t[Xr], delete t[is], delete t[ug], delete t[cg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Uf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Uf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Bs(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, t)
            : i.insertBefore(e, t)
          : (i.nodeType === 8 ? ((t = i.parentNode), t.insertBefore(e, i)) : ((t = i), t.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = ro));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Bs(e, t, i), e = e.sibling; e !== null; ) Bs(e, t, i), (e = e.sibling);
  }
  function Ws(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Ws(e, t, i), e = e.sibling; e !== null; ) Ws(e, t, i), (e = e.sibling);
  }
  var Ye = null,
    bt = !1;
  function fn(e, t, i) {
    for (i = i.child; i !== null; ) Bf(e, t, i), (i = i.sibling);
  }
  function Bf(e, t, i) {
    if (Lt && typeof Lt.onCommitFiberUnmount == 'function')
      try {
        Lt.onCommitFiberUnmount(ji, i);
      } catch {}
    switch (i.tag) {
      case 5:
        Xe || hr(i, t);
      case 6:
        var s = Ye,
          u = bt;
        (Ye = null),
          fn(e, t, i),
          (Ye = s),
          (bt = u),
          Ye !== null &&
            (bt
              ? ((e = Ye), (i = i.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
              : Ye.removeChild(i.stateNode));
        break;
      case 18:
        Ye !== null &&
          (bt
            ? ((e = Ye),
              (i = i.stateNode),
              e.nodeType === 8 ? rs(e.parentNode, i) : e.nodeType === 1 && rs(e, i),
              $r(e))
            : rs(Ye, i.stateNode));
        break;
      case 4:
        (s = Ye), (u = bt), (Ye = i.stateNode.containerInfo), (bt = !0), fn(e, t, i), (Ye = s), (bt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xe && ((s = i.updateQueue), s !== null && ((s = s.lastEffect), s !== null))) {
          u = s = s.next;
          do {
            var f = u,
              p = f.destroy;
            (f = f.tag), p !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Us(i, t, p), (u = u.next);
          } while (u !== s);
        }
        fn(e, t, i);
        break;
      case 1:
        if (!Xe && (hr(i, t), (s = i.stateNode), typeof s.componentWillUnmount == 'function'))
          try {
            (s.props = i.memoizedProps), (s.state = i.memoizedState), s.componentWillUnmount();
          } catch (y) {
            _e(i, t, y);
          }
        fn(e, t, i);
        break;
      case 21:
        fn(e, t, i);
        break;
      case 22:
        i.mode & 1 ? ((Xe = (s = Xe) || i.memoizedState !== null), fn(e, t, i), (Xe = s)) : fn(e, t, i);
        break;
      default:
        fn(e, t, i);
    }
  }
  function Wf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new bg()),
        t.forEach(function (s) {
          var u = Mg.bind(null, e, s);
          i.has(s) || (i.add(s), s.then(u, u));
        });
    }
  }
  function Ot(e, t) {
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
                (Ye = y.stateNode), (bt = !1);
                break e;
              case 3:
                (Ye = y.stateNode.containerInfo), (bt = !0);
                break e;
              case 4:
                (Ye = y.stateNode.containerInfo), (bt = !0);
                break e;
            }
            y = y.return;
          }
          if (Ye === null) throw Error(o(160));
          Bf(f, p, u), (Ye = null), (bt = !1);
          var x = u.alternate;
          x !== null && (x.return = null), (u.return = null);
        } catch (N) {
          _e(u, t, N);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hf(t, e), (t = t.sibling);
  }
  function Hf(e, t) {
    var i = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ot(t, e), Dt(e), s & 4)) {
          try {
            li(3, e, e.return), Oo(3, e);
          } catch (Q) {
            _e(e, e.return, Q);
          }
          try {
            li(5, e, e.return);
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        break;
      case 1:
        Ot(t, e), Dt(e), s & 512 && i !== null && hr(i, i.return);
        break;
      case 5:
        if ((Ot(t, e), Dt(e), s & 512 && i !== null && hr(i, i.return), e.flags & 32)) {
          var u = e.stateNode;
          try {
            Tr(u, '');
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        if (s & 4 && ((u = e.stateNode), u != null)) {
          var f = e.memoizedProps,
            p = i !== null ? i.memoizedProps : f,
            y = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              y === 'input' && f.type === 'radio' && f.name != null && Ri(u, f), xa(y, p);
              var N = xa(y, f);
              for (p = 0; p < x.length; p += 2) {
                var M = x[p],
                  F = x[p + 1];
                M === 'style'
                  ? bu(u, F)
                  : M === 'dangerouslySetInnerHTML'
                  ? Pu(u, F)
                  : M === 'children'
                  ? Tr(u, F)
                  : j(u, M, F, N);
              }
              switch (y) {
                case 'input':
                  Nr(u, f);
                  break;
                case 'textarea':
                  xu(u, f);
                  break;
                case 'select':
                  var D = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!f.multiple;
                  var H = f.value;
                  H != null
                    ? Kn(u, !!f.multiple, H, !1)
                    : D !== !!f.multiple &&
                      (f.defaultValue != null
                        ? Kn(u, !!f.multiple, f.defaultValue, !0)
                        : Kn(u, !!f.multiple, f.multiple ? [] : '', !1));
              }
              u[Xr] = f;
            } catch (Q) {
              _e(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((Ot(t, e), Dt(e), s & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (u = e.stateNode), (f = e.memoizedProps);
          try {
            u.nodeValue = f;
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        break;
      case 3:
        if ((Ot(t, e), Dt(e), s & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            $r(t.containerInfo);
          } catch (Q) {
            _e(e, e.return, Q);
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
            !f || (u.alternate !== null && u.alternate.memoizedState !== null) || (qs = De())),
          s & 4 && Wf(e);
        break;
      case 22:
        if (
          ((M = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((Xe = (N = Xe) || M), Ot(t, e), (Xe = N)) : Ot(t, e),
          Dt(e),
          s & 8192)
        ) {
          if (((N = e.memoizedState !== null), (e.stateNode.isHidden = N) && !M && (e.mode & 1) !== 0))
            for (q = e, M = e.child; M !== null; ) {
              for (F = q = M; q !== null; ) {
                switch (((D = q), (H = D.child), D.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    li(4, D, D.return);
                    break;
                  case 1:
                    hr(D, D.return);
                    var K = D.stateNode;
                    if (typeof K.componentWillUnmount == 'function') {
                      (s = D), (i = D.return);
                      try {
                        (t = s), (K.props = t.memoizedProps), (K.state = t.memoizedState), K.componentWillUnmount();
                      } catch (Q) {
                        _e(s, i, Q);
                      }
                    }
                    break;
                  case 5:
                    hr(D, D.return);
                    break;
                  case 22:
                    if (D.memoizedState !== null) {
                      Kf(F);
                      continue;
                    }
                }
                H !== null ? ((H.return = D), (q = H)) : Kf(F);
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
                        (x = F.memoizedProps.style),
                        (p = x != null && x.hasOwnProperty('display') ? x.display : null),
                        (y.style.display = Eu('display', p)));
                } catch (Q) {
                  _e(e, e.return, Q);
                }
              }
            } else if (F.tag === 6) {
              if (M === null)
                try {
                  F.stateNode.nodeValue = N ? '' : F.memoizedProps;
                } catch (Q) {
                  _e(e, e.return, Q);
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
        Ot(t, e), Dt(e), s & 4 && Wf(e);
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
          for (var i = e.return; i !== null; ) {
            if (Uf(i)) {
              var s = i;
              break e;
            }
            i = i.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var u = s.stateNode;
            s.flags & 32 && (Tr(u, ''), (s.flags &= -33));
            var f = Vf(e);
            Ws(e, f, u);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo,
              y = Vf(e);
            Bs(e, y, p);
            break;
          default:
            throw Error(o(161));
        }
      } catch (x) {
        _e(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ng(e, t, i) {
    (q = e), Yf(e);
  }
  function Yf(e, t, i) {
    for (var s = (e.mode & 1) !== 0; q !== null; ) {
      var u = q,
        f = u.child;
      if (u.tag === 22 && s) {
        var p = u.memoizedState !== null || bo;
        if (!p) {
          var y = u.alternate,
            x = (y !== null && y.memoizedState !== null) || Xe;
          y = bo;
          var N = Xe;
          if (((bo = p), (Xe = x) && !N))
            for (q = u; q !== null; )
              (p = q),
                (x = p.child),
                p.tag === 22 && p.memoizedState !== null ? Qf(u) : x !== null ? ((x.return = p), (q = x)) : Qf(u);
          for (; f !== null; ) (q = f), Yf(f), (f = f.sibling);
          (q = u), (bo = y), (Xe = N);
        }
        qf(e);
      } else (u.subtreeFlags & 8772) !== 0 && f !== null ? ((f.return = u), (q = f)) : qf(e);
    }
  }
  function qf(e) {
    for (; q !== null; ) {
      var t = q;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Xe || Oo(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !Xe)
                  if (i === null) s.componentDidMount();
                  else {
                    var u = t.elementType === t.type ? i.memoizedProps : Et(t.type, i.memoizedProps);
                    s.componentDidUpdate(u, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var f = t.updateQueue;
                f !== null && qc(t, f, s);
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
                  qc(t, p, i);
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
                  var N = t.alternate;
                  if (N !== null) {
                    var M = N.memoizedState;
                    if (M !== null) {
                      var F = M.dehydrated;
                      F !== null && $r(F);
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
          Xe || (t.flags & 512 && Vs(t));
        } catch (D) {
          _e(t, t.return, D);
        }
      }
      if (t === e) {
        q = null;
        break;
      }
      if (((i = t.sibling), i !== null)) {
        (i.return = t.return), (q = i);
        break;
      }
      q = t.return;
    }
  }
  function Kf(e) {
    for (; q !== null; ) {
      var t = q;
      if (t === e) {
        q = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        (i.return = t.return), (q = i);
        break;
      }
      q = t.return;
    }
  }
  function Qf(e) {
    for (; q !== null; ) {
      var t = q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Oo(4, t);
            } catch (x) {
              _e(t, i, x);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == 'function') {
              var u = t.return;
              try {
                s.componentDidMount();
              } catch (x) {
                _e(t, u, x);
              }
            }
            var f = t.return;
            try {
              Vs(t);
            } catch (x) {
              _e(t, f, x);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Vs(t);
            } catch (x) {
              _e(t, p, x);
            }
        }
      } catch (x) {
        _e(t, t.return, x);
      }
      if (t === e) {
        q = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        (y.return = t.return), (q = y);
        break;
      }
      q = t.return;
    }
  }
  var Tg = Math.ceil,
    No = V.ReactCurrentDispatcher,
    Hs = V.ReactCurrentOwner,
    St = V.ReactCurrentBatchConfig,
    pe = 0,
    Be = null,
    Me = null,
    qe = 0,
    mt = 0,
    gr = an(0),
    je = 0,
    ui = null,
    Dn = 0,
    To = 0,
    Ys = 0,
    ci = null,
    st = null,
    qs = 0,
    vr = 1 / 0,
    Kt = null,
    Lo = !1,
    Ks = null,
    dn = null,
    Io = !1,
    pn = null,
    _o = 0,
    fi = 0,
    Qs = null,
    Ro = -1,
    Do = 0;
  function rt() {
    return (pe & 6) !== 0 ? De() : Ro !== -1 ? Ro : (Ro = De());
  }
  function mn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (pe & 2) !== 0 && qe !== 0
      ? qe & -qe
      : dg.transition !== null
      ? (Do === 0 && (Do = Uu()), Do)
      : ((e = ye), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gu(e.type))), e);
  }
  function Nt(e, t, i, s) {
    if (50 < fi) throw ((fi = 0), (Qs = null), Error(o(185)));
    Ar(e, i, s),
      ((pe & 2) === 0 || e !== Be) &&
        (e === Be && ((pe & 2) === 0 && (To |= i), je === 4 && hn(e, qe)),
        lt(e, s),
        i === 1 && pe === 0 && (t.mode & 1) === 0 && ((vr = De() + 500), so && ln()));
  }
  function lt(e, t) {
    var i = e.callbackNode;
    dh(e, t);
    var s = Vi(e, e === Be ? qe : 0);
    if (s === 0) i !== null && zu(i), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((i != null && zu(i), t === 1))
        e.tag === 0 ? fg(Xf.bind(null, e)) : Ac(Xf.bind(null, e)),
          sg(function () {
            (pe & 6) === 0 && ln();
          }),
          (i = null);
      else {
        switch (Vu(s)) {
          case 1:
            i = Na;
            break;
          case 4:
            i = ju;
            break;
          case 16:
            i = zi;
            break;
          case 536870912:
            i = $u;
            break;
          default:
            i = zi;
        }
        i = od(i, Gf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = i);
    }
  }
  function Gf(e, t) {
    if (((Ro = -1), (Do = 0), (pe & 6) !== 0)) throw Error(o(327));
    var i = e.callbackNode;
    if (yr() && e.callbackNode !== i) return null;
    var s = Vi(e, e === Be ? qe : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ao(e, s);
    else {
      t = s;
      var u = pe;
      pe |= 2;
      var f = Zf();
      (Be !== e || qe !== t) && ((Kt = null), (vr = De() + 500), Mn(e, t));
      do
        try {
          _g();
          break;
        } catch (y) {
          Jf(e, y);
        }
      while (!0);
      ps(), (No.current = f), (pe = u), Me !== null ? (t = 0) : ((Be = null), (qe = 0), (t = je));
    }
    if (t !== 0) {
      if ((t === 2 && ((u = Ta(e)), u !== 0 && ((s = u), (t = Gs(e, u)))), t === 1))
        throw ((i = ui), Mn(e, 0), hn(e, s), lt(e, De()), i);
      if (t === 6) hn(e, s);
      else {
        if (
          ((u = e.current.alternate),
          (s & 30) === 0 &&
            !Lg(u) &&
            ((t = Ao(e, s)), t === 2 && ((f = Ta(e)), f !== 0 && ((s = f), (t = Gs(e, f)))), t === 1))
        )
          throw ((i = ui), Mn(e, 0), hn(e, s), lt(e, De()), i);
        switch (((e.finishedWork = u), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Fn(e, st, Kt);
            break;
          case 3:
            if ((hn(e, s), (s & 130023424) === s && ((t = qs + 500 - De()), 10 < t))) {
              if (Vi(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & s) !== s)) {
                rt(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = ns(Fn.bind(null, e, st, Kt), t);
              break;
            }
            Fn(e, st, Kt);
            break;
          case 4:
            if ((hn(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, u = -1; 0 < s; ) {
              var p = 31 - kt(s);
              (f = 1 << p), (p = t[p]), p > u && (u = p), (s &= ~f);
            }
            if (
              ((s = u),
              (s = De() - s),
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
                  : 1960 * Tg(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = ns(Fn.bind(null, e, st, Kt), s);
              break;
            }
            Fn(e, st, Kt);
            break;
          case 5:
            Fn(e, st, Kt);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return lt(e, De()), e.callbackNode === i ? Gf.bind(null, e) : null;
  }
  function Gs(e, t) {
    var i = ci;
    return (
      e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
      (e = Ao(e, t)),
      e !== 2 && ((t = st), (st = i), t !== null && Xs(t)),
      e
    );
  }
  function Xs(e) {
    st === null ? (st = e) : st.push.apply(st, e);
  }
  function Lg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var s = 0; s < i.length; s++) {
            var u = i[s],
              f = u.getSnapshot;
            u = u.value;
            try {
              if (!Ct(f(), u)) return !1;
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
  function hn(e, t) {
    for (t &= ~Ys, t &= ~To, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - kt(t),
        s = 1 << i;
      (e[i] = -1), (t &= ~s);
    }
  }
  function Xf(e) {
    if ((pe & 6) !== 0) throw Error(o(327));
    yr();
    var t = Vi(e, 0);
    if ((t & 1) === 0) return lt(e, De()), null;
    var i = Ao(e, t);
    if (e.tag !== 0 && i === 2) {
      var s = Ta(e);
      s !== 0 && ((t = s), (i = Gs(e, s)));
    }
    if (i === 1) throw ((i = ui), Mn(e, 0), hn(e, t), lt(e, De()), i);
    if (i === 6) throw Error(o(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Fn(e, st, Kt), lt(e, De()), null;
  }
  function Js(e, t) {
    var i = pe;
    pe |= 1;
    try {
      return e(t);
    } finally {
      (pe = i), pe === 0 && ((vr = De() + 500), so && ln());
    }
  }
  function An(e) {
    pn !== null && pn.tag === 0 && (pe & 6) === 0 && yr();
    var t = pe;
    pe |= 1;
    var i = St.transition,
      s = ye;
    try {
      if (((St.transition = null), (ye = 1), e)) return e();
    } finally {
      (ye = s), (St.transition = i), (pe = t), (pe & 6) === 0 && ln();
    }
  }
  function Zs() {
    (mt = gr.current), Oe(gr);
  }
  function Mn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), ag(i)), Me !== null))
      for (i = Me.return; i !== null; ) {
        var s = i;
        switch ((ls(s), s.tag)) {
          case 1:
            (s = s.type.childContextTypes), s != null && oo();
            break;
          case 3:
            pr(), Oe(it), Oe(Ke), xs();
            break;
          case 5:
            ws(s);
            break;
          case 4:
            pr();
            break;
          case 13:
            Oe(Le);
            break;
          case 19:
            Oe(Le);
            break;
          case 10:
            ms(s.type._context);
            break;
          case 22:
          case 23:
            Zs();
        }
        i = i.return;
      }
    if (
      ((Be = e),
      (Me = e = gn(e.current, null)),
      (qe = mt = t),
      (je = 0),
      (ui = null),
      (Ys = To = Dn = 0),
      (st = ci = null),
      In !== null)
    ) {
      for (t = 0; t < In.length; t++)
        if (((i = In[t]), (s = i.interleaved), s !== null)) {
          i.interleaved = null;
          var u = s.next,
            f = i.pending;
          if (f !== null) {
            var p = f.next;
            (f.next = u), (s.next = p);
          }
          i.pending = s;
        }
      In = null;
    }
    return e;
  }
  function Jf(e, t) {
    do {
      var i = Me;
      try {
        if ((ps(), (yo.current = ko), wo)) {
          for (var s = Ie.memoizedState; s !== null; ) {
            var u = s.queue;
            u !== null && (u.pending = null), (s = s.next);
          }
          wo = !1;
        }
        if (
          ((Rn = 0), (Ve = ze = Ie = null), (ri = !1), (ii = 0), (Hs.current = null), i === null || i.return === null)
        ) {
          (je = 1), (ui = t), (Me = null);
          break;
        }
        e: {
          var f = e,
            p = i.return,
            y = i,
            x = t;
          if (((t = qe), (y.flags |= 32768), x !== null && typeof x == 'object' && typeof x.then == 'function')) {
            var N = x,
              M = y,
              F = M.tag;
            if ((M.mode & 1) === 0 && (F === 0 || F === 11 || F === 15)) {
              var D = M.alternate;
              D
                ? ((M.updateQueue = D.updateQueue), (M.memoizedState = D.memoizedState), (M.lanes = D.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null));
            }
            var H = Cf(p);
            if (H !== null) {
              (H.flags &= -257), Pf(H, p, y, f, t), H.mode & 1 && kf(f, N, t), (t = H), (x = N);
              var K = t.updateQueue;
              if (K === null) {
                var Q = new Set();
                Q.add(x), (t.updateQueue = Q);
              } else K.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                kf(f, N, t), el();
                break e;
              }
              x = Error(o(426));
            }
          } else if (Te && y.mode & 1) {
            var Ae = Cf(p);
            if (Ae !== null) {
              (Ae.flags & 65536) === 0 && (Ae.flags |= 256), Pf(Ae, p, y, f, t), fs(mr(x, y));
              break e;
            }
          }
          (f = x = mr(x, y)), je !== 4 && (je = 2), ci === null ? (ci = [f]) : ci.push(f), (f = p);
          do {
            switch (f.tag) {
              case 3:
                (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                var P = Sf(f, x, t);
                Yc(f, P);
                break e;
              case 1:
                y = x;
                var k = f.type,
                  b = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == 'function' ||
                    (b !== null && typeof b.componentDidCatch == 'function' && (dn === null || !dn.has(b))))
                ) {
                  (f.flags |= 65536), (t &= -t), (f.lanes |= t);
                  var $ = xf(f, y, t);
                  Yc(f, $);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        td(i);
      } catch (X) {
        (t = X), Me === i && i !== null && (Me = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Zf() {
    var e = No.current;
    return (No.current = ko), e === null ? ko : e;
  }
  function el() {
    (je === 0 || je === 3 || je === 2) && (je = 4),
      Be === null || ((Dn & 268435455) === 0 && (To & 268435455) === 0) || hn(Be, qe);
  }
  function Ao(e, t) {
    var i = pe;
    pe |= 2;
    var s = Zf();
    (Be !== e || qe !== t) && ((Kt = null), Mn(e, t));
    do
      try {
        Ig();
        break;
      } catch (u) {
        Jf(e, u);
      }
    while (!0);
    if ((ps(), (pe = i), (No.current = s), Me !== null)) throw Error(o(261));
    return (Be = null), (qe = 0), je;
  }
  function Ig() {
    for (; Me !== null; ) ed(Me);
  }
  function _g() {
    for (; Me !== null && !rh(); ) ed(Me);
  }
  function ed(e) {
    var t = id(e.alternate, e, mt);
    (e.memoizedProps = e.pendingProps), t === null ? td(e) : (Me = t), (Hs.current = null);
  }
  function td(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((i = Pg(i, t, mt)), i !== null)) {
          Me = i;
          return;
        }
      } else {
        if (((i = Eg(i, t)), i !== null)) {
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
  function Fn(e, t, i) {
    var s = ye,
      u = St.transition;
    try {
      (St.transition = null), (ye = 1), Rg(e, t, i, s);
    } finally {
      (St.transition = u), (ye = s);
    }
    return null;
  }
  function Rg(e, t, i, s) {
    do yr();
    while (pn !== null);
    if ((pe & 6) !== 0) throw Error(o(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var f = i.lanes | i.childLanes;
    if (
      (ph(e, f),
      e === Be && ((Me = Be = null), (qe = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Io ||
        ((Io = !0),
        od(zi, function () {
          return yr(), null;
        })),
      (f = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || f)
    ) {
      (f = St.transition), (St.transition = null);
      var p = ye;
      ye = 1;
      var y = pe;
      (pe |= 4),
        (Hs.current = null),
        Og(e, i),
        Hf(i, e),
        Zh(es),
        (Hi = !!Za),
        (es = Za = null),
        (e.current = i),
        Ng(i),
        ih(),
        (pe = y),
        (ye = p),
        (St.transition = f);
    } else e.current = i;
    if (
      (Io && ((Io = !1), (pn = e), (_o = u)),
      (f = e.pendingLanes),
      f === 0 && (dn = null),
      sh(i.stateNode),
      lt(e, De()),
      t !== null)
    )
      for (s = e.onRecoverableError, i = 0; i < t.length; i++)
        (u = t[i]), s(u.value, { componentStack: u.stack, digest: u.digest });
    if (Lo) throw ((Lo = !1), (e = Ks), (Ks = null), e);
    return (
      (_o & 1) !== 0 && e.tag !== 0 && yr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === Qs ? fi++ : ((fi = 0), (Qs = e))) : (fi = 0),
      ln(),
      null
    );
  }
  function yr() {
    if (pn !== null) {
      var e = Vu(_o),
        t = St.transition,
        i = ye;
      try {
        if (((St.transition = null), (ye = 16 > e ? 16 : e), pn === null)) var s = !1;
        else {
          if (((e = pn), (pn = null), (_o = 0), (pe & 6) !== 0)) throw Error(o(331));
          var u = pe;
          for (pe |= 4, q = e.current; q !== null; ) {
            var f = q,
              p = f.child;
            if ((q.flags & 16) !== 0) {
              var y = f.deletions;
              if (y !== null) {
                for (var x = 0; x < y.length; x++) {
                  var N = y[x];
                  for (q = N; q !== null; ) {
                    var M = q;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        li(8, M, f);
                    }
                    var F = M.child;
                    if (F !== null) (F.return = M), (q = F);
                    else
                      for (; q !== null; ) {
                        M = q;
                        var D = M.sibling,
                          H = M.return;
                        if (($f(M), M === N)) {
                          q = null;
                          break;
                        }
                        if (D !== null) {
                          (D.return = H), (q = D);
                          break;
                        }
                        q = H;
                      }
                  }
                }
                var K = f.alternate;
                if (K !== null) {
                  var Q = K.child;
                  if (Q !== null) {
                    K.child = null;
                    do {
                      var Ae = Q.sibling;
                      (Q.sibling = null), (Q = Ae);
                    } while (Q !== null);
                  }
                }
                q = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && p !== null) (p.return = f), (q = p);
            else
              e: for (; q !== null; ) {
                if (((f = q), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      li(9, f, f.return);
                  }
                var P = f.sibling;
                if (P !== null) {
                  (P.return = f.return), (q = P);
                  break e;
                }
                q = f.return;
              }
          }
          var k = e.current;
          for (q = k; q !== null; ) {
            p = q;
            var b = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && b !== null) (b.return = p), (q = b);
            else
              e: for (p = k; q !== null; ) {
                if (((y = q), (y.flags & 2048) !== 0))
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oo(9, y);
                    }
                  } catch (X) {
                    _e(y, y.return, X);
                  }
                if (y === p) {
                  q = null;
                  break e;
                }
                var $ = y.sibling;
                if ($ !== null) {
                  ($.return = y.return), (q = $);
                  break e;
                }
                q = y.return;
              }
          }
          if (((pe = u), ln(), Lt && typeof Lt.onPostCommitFiberRoot == 'function'))
            try {
              Lt.onPostCommitFiberRoot(ji, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        (ye = i), (St.transition = t);
      }
    }
    return !1;
  }
  function nd(e, t, i) {
    (t = mr(i, t)), (t = Sf(e, t, 1)), (e = cn(e, t, 1)), (t = rt()), e !== null && (Ar(e, 1, t), lt(e, t));
  }
  function _e(e, t, i) {
    if (e.tag === 3) nd(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          nd(t, e, i);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof s.componentDidCatch == 'function' && (dn === null || !dn.has(s)))
          ) {
            (e = mr(i, e)), (e = xf(t, e, 1)), (t = cn(t, e, 1)), (e = rt()), t !== null && (Ar(t, 1, e), lt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Dg(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (t = rt()),
      (e.pingedLanes |= e.suspendedLanes & i),
      Be === e &&
        (qe & i) === i &&
        (je === 4 || (je === 3 && (qe & 130023424) === qe && 500 > De() - qs) ? Mn(e, 0) : (Ys |= i)),
      lt(e, t);
  }
  function rd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? (t = 1) : ((t = Ui), (Ui <<= 1), (Ui & 130023424) === 0 && (Ui = 4194304)));
    var i = rt();
    (e = Ht(e, t)), e !== null && (Ar(e, t, i), lt(e, i));
  }
  function Ag(e) {
    var t = e.memoizedState,
      i = 0;
    t !== null && (i = t.retryLane), rd(e, i);
  }
  function Mg(e, t) {
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
        throw Error(o(314));
    }
    s !== null && s.delete(t), rd(e, i);
  }
  var id;
  id = function (e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || it.current) at = !0;
      else {
        if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return (at = !1), Cg(e, t, i);
        at = (e.flags & 131072) !== 0;
      }
    else (at = !1), Te && (t.flags & 1048576) !== 0 && Mc(t, uo, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        Eo(e, t), (e = t.pendingProps);
        var u = ar(t, Ke.current);
        dr(t, i), (u = Ps(null, t, s, e, u, i));
        var f = Es();
        return (
          (t.flags |= 1),
          typeof u == 'object' && u !== null && typeof u.render == 'function' && u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ot(s) ? ((f = !0), ao(t)) : (f = !1),
              (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
              vs(t),
              (u.updater = Co),
              (t.stateNode = u),
              (u._reactInternals = t),
              Is(t, s, e, i),
              (t = As(null, t, s, !0, f, i)))
            : ((t.tag = 0), Te && f && ss(t), nt(null, t, u, i), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (Eo(e, t),
            (e = t.pendingProps),
            (u = s._init),
            (s = u(s._payload)),
            (t.type = s),
            (u = t.tag = zg(s)),
            (e = Et(s, e)),
            u)
          ) {
            case 0:
              t = Ds(null, t, s, e, i);
              break e;
            case 1:
              t = Lf(null, t, s, e, i);
              break e;
            case 11:
              t = Ef(null, t, s, e, i);
              break e;
            case 14:
              t = bf(null, t, s, Et(s.type, e), i);
              break e;
          }
          throw Error(o(306, s, ''));
        }
        return t;
      case 0:
        return (s = t.type), (u = t.pendingProps), (u = t.elementType === s ? u : Et(s, u)), Ds(e, t, s, u, i);
      case 1:
        return (s = t.type), (u = t.pendingProps), (u = t.elementType === s ? u : Et(s, u)), Lf(e, t, s, u, i);
      case 3:
        e: {
          if ((If(t), e === null)) throw Error(o(387));
          (s = t.pendingProps), (f = t.memoizedState), (u = f.element), Hc(e, t), go(t, s, null, i);
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
              (u = mr(Error(o(423)), t)), (t = _f(e, t, s, i, u));
              break e;
            } else if (s !== u) {
              (u = mr(Error(o(424)), t)), (t = _f(e, t, s, i, u));
              break e;
            } else
              for (
                pt = on(t.stateNode.containerInfo.firstChild),
                  dt = t,
                  Te = !0,
                  Pt = null,
                  i = Bc(t, null, s, i),
                  t.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((ur(), s === u)) {
              t = qt(e, t, i);
              break e;
            }
            nt(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Kc(t),
          e === null && cs(t),
          (s = t.type),
          (u = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (p = u.children),
          ts(s, u) ? (p = null) : f !== null && ts(s, f) && (t.flags |= 32),
          Tf(e, t),
          nt(e, t, p, i),
          t.child
        );
      case 6:
        return e === null && cs(t), null;
      case 13:
        return Rf(e, t, i);
      case 4:
        return (
          ys(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = cr(t, null, s, i)) : nt(e, t, s, i),
          t.child
        );
      case 11:
        return (s = t.type), (u = t.pendingProps), (u = t.elementType === s ? u : Et(s, u)), Ef(e, t, s, u, i);
      case 7:
        return nt(e, t, t.pendingProps, i), t.child;
      case 8:
        return nt(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return nt(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (u = t.pendingProps),
            (f = t.memoizedProps),
            (p = u.value),
            Ee(po, s._currentValue),
            (s._currentValue = p),
            f !== null)
          )
            if (Ct(f.value, p)) {
              if (f.children === u.children && !it.current) {
                t = qt(e, t, i);
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
                        (x = Yt(-1, i & -i)), (x.tag = 2);
                        var N = f.updateQueue;
                        if (N !== null) {
                          N = N.shared;
                          var M = N.pending;
                          M === null ? (x.next = x) : ((x.next = M.next), (M.next = x)), (N.pending = x);
                        }
                      }
                      (f.lanes |= i),
                        (x = f.alternate),
                        x !== null && (x.lanes |= i),
                        hs(f.return, i, t),
                        (y.lanes |= i);
                      break;
                    }
                    x = x.next;
                  }
                } else if (f.tag === 10) p = f.type === t.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((p = f.return), p === null)) throw Error(o(341));
                  (p.lanes |= i), (y = p.alternate), y !== null && (y.lanes |= i), hs(p, i, t), (p = f.sibling);
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
          nt(e, t, u.children, i), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (s = t.pendingProps.children),
          dr(t, i),
          (u = yt(u)),
          (s = s(u)),
          (t.flags |= 1),
          nt(e, t, s, i),
          t.child
        );
      case 14:
        return (s = t.type), (u = Et(s, t.pendingProps)), (u = Et(s.type, u)), bf(e, t, s, u, i);
      case 15:
        return Of(e, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (s = t.type),
          (u = t.pendingProps),
          (u = t.elementType === s ? u : Et(s, u)),
          Eo(e, t),
          (t.tag = 1),
          ot(s) ? ((e = !0), ao(t)) : (e = !1),
          dr(t, i),
          yf(t, s, u),
          Is(t, s, u, i),
          As(null, t, s, !0, e, i)
        );
      case 19:
        return Af(e, t, i);
      case 22:
        return Nf(e, t, i);
    }
    throw Error(o(156, t.tag));
  };
  function od(e, t) {
    return Fu(e, t);
  }
  function Fg(e, t, i, s) {
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
  function xt(e, t, i, s) {
    return new Fg(e, t, i, s);
  }
  function tl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function zg(e) {
    if (typeof e == 'function') return tl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11;
      if (e === Ue) return 14;
    }
    return 2;
  }
  function gn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = xt(e.tag, t, e.key, e.mode)),
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
  function Mo(e, t, i, s, u, f) {
    var p = 2;
    if (((s = e), typeof e == 'function')) tl(e) && (p = 1);
    else if (typeof e == 'string') p = 5;
    else
      e: switch (e) {
        case ne:
          return zn(i.children, u, f, t);
        case ie:
          (p = 8), (u |= 8);
          break;
        case me:
          return (e = xt(12, i, t, u | 2)), (e.elementType = me), (e.lanes = f), e;
        case He:
          return (e = xt(13, i, t, u)), (e.elementType = He), (e.lanes = f), e;
        case Fe:
          return (e = xt(19, i, t, u)), (e.elementType = Fe), (e.lanes = f), e;
        case Se:
          return Fo(i, u, f, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case ke:
                p = 10;
                break e;
              case Ce:
                p = 9;
                break e;
              case ct:
                p = 11;
                break e;
              case Ue:
                p = 14;
                break e;
              case Re:
                (p = 16), (s = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ''));
      }
    return (t = xt(p, i, t, u)), (t.elementType = e), (t.type = s), (t.lanes = f), t;
  }
  function zn(e, t, i, s) {
    return (e = xt(7, e, s, t)), (e.lanes = i), e;
  }
  function Fo(e, t, i, s) {
    return (e = xt(22, e, s, t)), (e.elementType = Se), (e.lanes = i), (e.stateNode = { isHidden: !1 }), e;
  }
  function nl(e, t, i) {
    return (e = xt(6, e, null, t)), (e.lanes = i), e;
  }
  function rl(e, t, i) {
    return (
      (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function jg(e, t, i, s, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = La(0)),
      (this.expirationTimes = La(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = La(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function il(e, t, i, s, u, f, p, y, x) {
    return (
      (e = new jg(e, t, i, y, x)),
      t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
      (f = xt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: s,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      vs(f),
      e
    );
  }
  function $g(e, t, i) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Z, key: s == null ? null : '' + s, children: e, containerInfo: t, implementation: i };
  }
  function ad(e) {
    if (!e) return sn;
    e = e._reactInternals;
    e: {
      if (bn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ot(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (ot(i)) return Rc(e, i, t);
    }
    return t;
  }
  function sd(e, t, i, s, u, f, p, y, x) {
    return (
      (e = il(i, s, !0, e, u, f, p, y, x)),
      (e.context = ad(null)),
      (i = e.current),
      (s = rt()),
      (u = mn(i)),
      (f = Yt(s, u)),
      (f.callback = t ?? null),
      cn(i, f, u),
      (e.current.lanes = u),
      Ar(e, u, s),
      lt(e, s),
      e
    );
  }
  function zo(e, t, i, s) {
    var u = t.current,
      f = rt(),
      p = mn(u);
    return (
      (i = ad(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = Yt(f, p)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = cn(u, t, p)),
      e !== null && (Nt(e, u, p, f), ho(e, u, p)),
      p
    );
  }
  function jo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ld(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function ol(e, t) {
    ld(e, t), (e = e.alternate) && ld(e, t);
  }
  function Ug() {
    return null;
  }
  var ud =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function al(e) {
    this._internalRoot = e;
  }
  ($o.prototype.render = al.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      zo(e, t, null, null);
    }),
    ($o.prototype.unmount = al.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          An(function () {
            zo(null, e, null, null);
          }),
            (t[Ut] = null);
        }
      });
  function $o(e) {
    this._internalRoot = e;
  }
  $o.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Hu();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < tn.length && t !== 0 && t < tn[i].priority; i++);
      tn.splice(i, 0, e), i === 0 && Ku(e);
    }
  };
  function sl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Uo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function cd() {}
  function Vg(e, t, i, s, u) {
    if (u) {
      if (typeof s == 'function') {
        var f = s;
        s = function () {
          var N = jo(p);
          f.call(N);
        };
      }
      var p = sd(t, s, e, 0, null, !1, !1, '', cd);
      return (e._reactRootContainer = p), (e[Ut] = p.current), Qr(e.nodeType === 8 ? e.parentNode : e), An(), p;
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof s == 'function') {
      var y = s;
      s = function () {
        var N = jo(x);
        y.call(N);
      };
    }
    var x = il(e, 0, !1, null, null, !1, !1, '', cd);
    return (
      (e._reactRootContainer = x),
      (e[Ut] = x.current),
      Qr(e.nodeType === 8 ? e.parentNode : e),
      An(function () {
        zo(t, x, i, s);
      }),
      x
    );
  }
  function Vo(e, t, i, s, u) {
    var f = i._reactRootContainer;
    if (f) {
      var p = f;
      if (typeof u == 'function') {
        var y = u;
        u = function () {
          var x = jo(p);
          y.call(x);
        };
      }
      zo(t, p, e, u);
    } else p = Vg(i, t, e, u, s);
    return jo(p);
  }
  (Bu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Dr(t.pendingLanes);
          i !== 0 && (Ia(t, i | 1), lt(t, De()), (pe & 6) === 0 && ((vr = De() + 500), ln()));
        }
        break;
      case 13:
        An(function () {
          var s = Ht(e, 1);
          if (s !== null) {
            var u = rt();
            Nt(s, e, 1, u);
          }
        }),
          ol(e, 1);
    }
  }),
    (_a = function (e) {
      if (e.tag === 13) {
        var t = Ht(e, 134217728);
        if (t !== null) {
          var i = rt();
          Nt(t, e, 134217728, i);
        }
        ol(e, 134217728);
      }
    }),
    (Wu = function (e) {
      if (e.tag === 13) {
        var t = mn(e),
          i = Ht(e, t);
        if (i !== null) {
          var s = rt();
          Nt(i, e, t, s);
        }
        ol(e, t);
      }
    }),
    (Hu = function () {
      return ye;
    }),
    (Yu = function (e, t) {
      var i = ye;
      try {
        return (ye = e), t();
      } finally {
        ye = i;
      }
    }),
    (Pa = function (e, t, i) {
      switch (t) {
        case 'input':
          if ((Nr(e, i), (t = i.name), i.type === 'radio' && t != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
              t < i.length;
              t++
            ) {
              var s = i[t];
              if (s !== e && s.form === e.form) {
                var u = io(s);
                if (!u) throw Error(o(90));
                Ii(s), Nr(s, u);
              }
            }
          }
          break;
        case 'textarea':
          xu(e, i);
          break;
        case 'select':
          (t = i.value), t != null && Kn(e, !!i.multiple, t, !1);
      }
    }),
    (Lu = Js),
    (Iu = An);
  var Bg = { usingClientEntryPoint: !1, Events: [Jr, ir, io, Nu, Tu, Js] },
    di = { findFiberByHostInstance: On, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Wg = {
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
      currentDispatcherRef: V.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Au(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: di.findFiberByHostInstance || Ug,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bo.isDisabled && Bo.supportsFiber)
      try {
        (ji = Bo.inject(Wg)), (Lt = Bo);
      } catch {}
  }
  return (
    (ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bg),
    (ut.createPortal = function (e, t) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!sl(t)) throw Error(o(200));
      return $g(e, t, null, i);
    }),
    (ut.createRoot = function (e, t) {
      if (!sl(e)) throw Error(o(299));
      var i = !1,
        s = '',
        u = ud;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = il(e, 1, !1, null, null, i, !1, s, u)),
        (e[Ut] = t.current),
        Qr(e.nodeType === 8 ? e.parentNode : e),
        new al(t)
      );
    }),
    (ut.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function' ? Error(o(188)) : ((e = Object.keys(e).join(',')), Error(o(268, e)));
      return (e = Au(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (ut.flushSync = function (e) {
      return An(e);
    }),
    (ut.hydrate = function (e, t, i) {
      if (!Uo(t)) throw Error(o(200));
      return Vo(null, e, t, !0, i);
    }),
    (ut.hydrateRoot = function (e, t, i) {
      if (!sl(e)) throw Error(o(405));
      var s = (i != null && i.hydratedSources) || null,
        u = !1,
        f = '',
        p = ud;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (u = !0),
          i.identifierPrefix !== void 0 && (f = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (p = i.onRecoverableError)),
        (t = sd(t, null, e, 1, i ?? null, u, !1, f, p)),
        (e[Ut] = t.current),
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
      return new $o(t);
    }),
    (ut.render = function (e, t, i) {
      if (!Uo(t)) throw Error(o(200));
      return Vo(null, e, t, !1, i);
    }),
    (ut.unmountComponentAtNode = function (e) {
      if (!Uo(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (An(function () {
            Vo(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Ut] = null);
            });
          }),
          !0)
        : !1;
    }),
    (ut.unstable_batchedUpdates = Js),
    (ut.unstable_renderSubtreeIntoContainer = function (e, t, i, s) {
      if (!Uo(i)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Vo(e, t, i, !1, s);
    }),
    (ut.version = '18.3.1-next-f1338f8080-20240426'),
    ut
  );
}
var yd;
function Vp() {
  if (yd) return cl.exports;
  yd = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (cl.exports = Zg()), cl.exports;
}
var wd;
function ev() {
  if (wd) return Wo;
  wd = 1;
  var n = Vp();
  return (Wo.createRoot = n.createRoot), (Wo.hydrateRoot = n.hydrateRoot), Wo;
}
var tv = ev();
const nv = la(tv);
Vp();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xi() {
  return (
    (xi = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
          }
          return n;
        }),
    xi.apply(this, arguments)
  );
}
var $n;
(function (n) {
  (n.Pop = 'POP'), (n.Push = 'PUSH'), (n.Replace = 'REPLACE');
})($n || ($n = {}));
const Sd = 'popstate';
function rv(n) {
  n === void 0 && (n = {});
  function r(a, l) {
    let { pathname: c, search: d, hash: m } = a.location;
    return Ll(
      '',
      { pathname: c, search: d, hash: m },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function o(a, l) {
    return typeof l == 'string' ? l : Jo(l);
  }
  return ov(r, o, null, n);
}
function Je(n, r) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(r);
}
function Bp(n, r) {
  if (!n) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function iv() {
  return Math.random().toString(36).substr(2, 8);
}
function xd(n, r) {
  return { usr: n.state, key: n.key, idx: r };
}
function Ll(n, r, o, a) {
  return (
    o === void 0 && (o = null),
    xi({ pathname: typeof n == 'string' ? n : n.pathname, search: '', hash: '' }, typeof r == 'string' ? bi(r) : r, {
      state: o,
      key: (r && r.key) || a || iv(),
    })
  );
}
function Jo(n) {
  let { pathname: r = '/', search: o = '', hash: a = '' } = n;
  return (
    o && o !== '?' && (r += o.charAt(0) === '?' ? o : '?' + o),
    a && a !== '#' && (r += a.charAt(0) === '#' ? a : '#' + a),
    r
  );
}
function bi(n) {
  let r = {};
  if (n) {
    let o = n.indexOf('#');
    o >= 0 && ((r.hash = n.substr(o)), (n = n.substr(0, o)));
    let a = n.indexOf('?');
    a >= 0 && ((r.search = n.substr(a)), (n = n.substr(0, a))), n && (r.pathname = n);
  }
  return r;
}
function ov(n, r, o, a) {
  a === void 0 && (a = {});
  let { window: l = document.defaultView, v5Compat: c = !1 } = a,
    d = l.history,
    m = $n.Pop,
    h = null,
    g = v();
  g == null && ((g = 0), d.replaceState(xi({}, d.state, { idx: g }), ''));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function S() {
    m = $n.Pop;
    let T = v(),
      B = T == null ? null : T - g;
    (g = T), h && h({ action: m, location: E.location, delta: B });
  }
  function w(T, B) {
    m = $n.Push;
    let A = Ll(E.location, T, B);
    g = v() + 1;
    let j = xd(A, g),
      V = E.createHref(A);
    try {
      d.pushState(j, '', V);
    } catch (_) {
      if (_ instanceof DOMException && _.name === 'DataCloneError') throw _;
      l.location.assign(V);
    }
    c && h && h({ action: m, location: E.location, delta: 1 });
  }
  function O(T, B) {
    m = $n.Replace;
    let A = Ll(E.location, T, B);
    g = v();
    let j = xd(A, g),
      V = E.createHref(A);
    d.replaceState(j, '', V), c && h && h({ action: m, location: E.location, delta: 0 });
  }
  function L(T) {
    let B = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      A = typeof T == 'string' ? T : Jo(T);
    return (
      (A = A.replace(/ $/, '%20')),
      Je(B, 'No window.location.(origin|href) available to create URL for href: ' + A),
      new URL(A, B)
    );
  }
  let E = {
    get action() {
      return m;
    },
    get location() {
      return n(l, d);
    },
    listen(T) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Sd, S),
        (h = T),
        () => {
          l.removeEventListener(Sd, S), (h = null);
        }
      );
    },
    createHref(T) {
      return r(l, T);
    },
    createURL: L,
    encodeLocation(T) {
      let B = L(T);
      return { pathname: B.pathname, search: B.search, hash: B.hash };
    },
    push: w,
    replace: O,
    go(T) {
      return d.go(T);
    },
  };
  return E;
}
var kd;
(function (n) {
  (n.data = 'data'), (n.deferred = 'deferred'), (n.redirect = 'redirect'), (n.error = 'error');
})(kd || (kd = {}));
function av(n, r, o) {
  return o === void 0 && (o = '/'), sv(n, r, o);
}
function sv(n, r, o, a) {
  let l = typeof r == 'string' ? bi(r) : r,
    c = ru(l.pathname || '/', o);
  if (c == null) return null;
  let d = Wp(n);
  lv(d);
  let m = null;
  for (let h = 0; m == null && h < d.length; ++h) {
    let g = Sv(c);
    m = vv(d[h], g);
  }
  return m;
}
function Wp(n, r, o, a) {
  r === void 0 && (r = []), o === void 0 && (o = []), a === void 0 && (a = '');
  let l = (c, d, m) => {
    let h = {
      relativePath: m === void 0 ? c.path || '' : m,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c,
    };
    h.relativePath.startsWith('/') &&
      (Je(
        h.relativePath.startsWith(a),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + a + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (h.relativePath = h.relativePath.slice(a.length)));
    let g = Sn([a, h.relativePath]),
      v = o.concat(h);
    c.children &&
      c.children.length > 0 &&
      (Je(
        c.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + g + '".')
      ),
      Wp(c.children, r, v, g)),
      !(c.path == null && !c.index) && r.push({ path: g, score: hv(g, c.index), routesMeta: v });
  };
  return (
    n.forEach((c, d) => {
      var m;
      if (c.path === '' || !((m = c.path) != null && m.includes('?'))) l(c, d);
      else for (let h of Hp(c.path)) l(c, d, h);
    }),
    r
  );
}
function Hp(n) {
  let r = n.split('/');
  if (r.length === 0) return [];
  let [o, ...a] = r,
    l = o.endsWith('?'),
    c = o.replace(/\?$/, '');
  if (a.length === 0) return l ? [c, ''] : [c];
  let d = Hp(a.join('/')),
    m = [];
  return (
    m.push(...d.map((h) => (h === '' ? c : [c, h].join('/')))),
    l && m.push(...d),
    m.map((h) => (n.startsWith('/') && h === '' ? '/' : h))
  );
}
function lv(n) {
  n.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : gv(
          r.routesMeta.map((a) => a.childrenIndex),
          o.routesMeta.map((a) => a.childrenIndex)
        )
  );
}
const uv = /^:[\w-]+$/,
  cv = 3,
  fv = 2,
  dv = 1,
  pv = 10,
  mv = -2,
  Cd = (n) => n === '*';
function hv(n, r) {
  let o = n.split('/'),
    a = o.length;
  return (
    o.some(Cd) && (a += mv),
    r && (a += fv),
    o.filter((l) => !Cd(l)).reduce((l, c) => l + (uv.test(c) ? cv : c === '' ? dv : pv), a)
  );
}
function gv(n, r) {
  return n.length === r.length && n.slice(0, -1).every((a, l) => a === r[l]) ? n[n.length - 1] - r[r.length - 1] : 0;
}
function vv(n, r, o) {
  let { routesMeta: a } = n,
    l = {},
    c = '/',
    d = [];
  for (let m = 0; m < a.length; ++m) {
    let h = a[m],
      g = m === a.length - 1,
      v = c === '/' ? r : r.slice(c.length) || '/',
      S = yv({ path: h.relativePath, caseSensitive: h.caseSensitive, end: g }, v),
      w = h.route;
    if (!S) return null;
    Object.assign(l, S.params),
      d.push({ params: l, pathname: Sn([c, S.pathname]), pathnameBase: Pv(Sn([c, S.pathnameBase])), route: w }),
      S.pathnameBase !== '/' && (c = Sn([c, S.pathnameBase]));
  }
  return d;
}
function yv(n, r) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [o, a] = wv(n.path, n.caseSensitive, n.end),
    l = r.match(o);
  if (!l) return null;
  let c = l[0],
    d = c.replace(/(.)\/+$/, '$1'),
    m = l.slice(1);
  return {
    params: a.reduce((g, v, S) => {
      let { paramName: w, isOptional: O } = v;
      if (w === '*') {
        let E = m[S] || '';
        d = c.slice(0, c.length - E.length).replace(/(.)\/+$/, '$1');
      }
      const L = m[S];
      return O && !L ? (g[w] = void 0) : (g[w] = (L || '').replace(/%2F/g, '/')), g;
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: n,
  };
}
function wv(n, r, o) {
  r === void 0 && (r = !1),
    o === void 0 && (o = !0),
    Bp(
      n === '*' || !n.endsWith('*') || n.endsWith('/*'),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + n.replace(/\*$/, '/*') + '".')
    );
  let a = [],
    l =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, m, h) => (a.push({ paramName: m, isOptional: h != null }), h ? '/?([^\\/]+)?' : '/([^\\/]+)')
        );
  return (
    n.endsWith('*')
      ? (a.push({ paramName: '*' }), (l += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : o
      ? (l += '\\/*$')
      : n !== '' && n !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, r ? void 0 : 'i'), a]
  );
}
function Sv(n) {
  try {
    return n
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      Bp(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + r + ').')
      ),
      n
    );
  }
}
function ru(n, r) {
  if (r === '/') return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith('/') ? r.length - 1 : r.length,
    a = n.charAt(o);
  return a && a !== '/' ? null : n.slice(o) || '/';
}
function xv(n, r) {
  r === void 0 && (r = '/');
  let { pathname: o, search: a = '', hash: l = '' } = typeof n == 'string' ? bi(n) : n;
  return { pathname: o ? (o.startsWith('/') ? o : kv(o, r)) : r, search: Ev(a), hash: bv(l) };
}
function kv(n, r) {
  let o = r.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach((l) => {
      l === '..' ? o.length > 1 && o.pop() : l !== '.' && o.push(l);
    }),
    o.length > 1 ? o.join('/') : '/'
  );
}
function pl(n, r, o, a) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ('`to.' + r + '` field [' + JSON.stringify(a) + '].  Please separate it out to the ') +
    ('`to.' + o + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Cv(n) {
  return n.filter((r, o) => o === 0 || (r.route.path && r.route.path.length > 0));
}
function Yp(n, r) {
  let o = Cv(n);
  return r ? o.map((a, l) => (l === o.length - 1 ? a.pathname : a.pathnameBase)) : o.map((a) => a.pathnameBase);
}
function qp(n, r, o, a) {
  a === void 0 && (a = !1);
  let l;
  typeof n == 'string'
    ? (l = bi(n))
    : ((l = xi({}, n)),
      Je(!l.pathname || !l.pathname.includes('?'), pl('?', 'pathname', 'search', l)),
      Je(!l.pathname || !l.pathname.includes('#'), pl('#', 'pathname', 'hash', l)),
      Je(!l.search || !l.search.includes('#'), pl('#', 'search', 'hash', l)));
  let c = n === '' || l.pathname === '',
    d = c ? '/' : l.pathname,
    m;
  if (d == null) m = o;
  else {
    let S = r.length - 1;
    if (!a && d.startsWith('..')) {
      let w = d.split('/');
      for (; w[0] === '..'; ) w.shift(), (S -= 1);
      l.pathname = w.join('/');
    }
    m = S >= 0 ? r[S] : '/';
  }
  let h = xv(l, m),
    g = d && d !== '/' && d.endsWith('/'),
    v = (c || d === '.') && o.endsWith('/');
  return !h.pathname.endsWith('/') && (g || v) && (h.pathname += '/'), h;
}
const Sn = (n) => n.join('/').replace(/\/\/+/g, '/'),
  Pv = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ev = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  bv = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n);
function Ov(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
const Kp = ['post', 'put', 'patch', 'delete'];
new Set(Kp);
const Nv = ['get', ...Kp];
new Set(Nv);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zo() {
  return (
    (Zo = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
          }
          return n;
        }),
    Zo.apply(this, arguments)
  );
}
const iu = I.createContext(null),
  Tv = I.createContext(null),
  Hn = I.createContext(null),
  ou = I.createContext(null),
  En = I.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Qp = I.createContext(null);
function Lv(n, r) {
  let { relative: o } = r === void 0 ? {} : r;
  Oi() || Je(!1);
  let { basename: a, navigator: l } = I.useContext(Hn),
    { hash: c, pathname: d, search: m } = Xp(n, { relative: o }),
    h = d;
  return a !== '/' && (h = d === '/' ? a : Sn([a, d])), l.createHref({ pathname: h, search: m, hash: c });
}
function Oi() {
  return I.useContext(ou) != null;
}
function Ni() {
  return Oi() || Je(!1), I.useContext(ou).location;
}
function Gp(n) {
  I.useContext(Hn).static || I.useLayoutEffect(n);
}
function Iv() {
  let { isDataRoute: n } = I.useContext(En);
  return n ? Yv() : _v();
}
function _v() {
  Oi() || Je(!1);
  let n = I.useContext(iu),
    { basename: r, future: o, navigator: a } = I.useContext(Hn),
    { matches: l } = I.useContext(En),
    { pathname: c } = Ni(),
    d = JSON.stringify(Yp(l, o.v7_relativeSplatPath)),
    m = I.useRef(!1);
  return (
    Gp(() => {
      m.current = !0;
    }),
    I.useCallback(
      function (g, v) {
        if ((v === void 0 && (v = {}), !m.current)) return;
        if (typeof g == 'number') {
          a.go(g);
          return;
        }
        let S = qp(g, JSON.parse(d), c, v.relative === 'path');
        n == null && r !== '/' && (S.pathname = S.pathname === '/' ? r : Sn([r, S.pathname])),
          (v.replace ? a.replace : a.push)(S, v.state, v);
      },
      [r, a, d, c, n]
    )
  );
}
const Rv = I.createContext(null);
function Dv(n) {
  let r = I.useContext(En).outlet;
  return r && I.createElement(Rv.Provider, { value: n }, r);
}
function Xp(n, r) {
  let { relative: o } = r === void 0 ? {} : r,
    { future: a } = I.useContext(Hn),
    { matches: l } = I.useContext(En),
    { pathname: c } = Ni(),
    d = JSON.stringify(Yp(l, a.v7_relativeSplatPath));
  return I.useMemo(() => qp(n, JSON.parse(d), c, o === 'path'), [n, d, c, o]);
}
function Av(n, r) {
  return Mv(n);
}
function Mv(n, r, o, a) {
  Oi() || Je(!1);
  let { navigator: l } = I.useContext(Hn),
    { matches: c } = I.useContext(En),
    d = c[c.length - 1],
    m = d ? d.params : {};
  d && d.pathname;
  let h = d ? d.pathnameBase : '/';
  d && d.route;
  let g = Ni(),
    v;
  v = g;
  let S = v.pathname || '/',
    w = S;
  if (h !== '/') {
    let E = h.replace(/^\//, '').split('/');
    w = '/' + S.replace(/^\//, '').split('/').slice(E.length).join('/');
  }
  let O = av(n, { pathname: w });
  return Uv(
    O &&
      O.map((E) =>
        Object.assign({}, E, {
          params: Object.assign({}, m, E.params),
          pathname: Sn([h, l.encodeLocation ? l.encodeLocation(E.pathname).pathname : E.pathname]),
          pathnameBase:
            E.pathnameBase === '/'
              ? h
              : Sn([h, l.encodeLocation ? l.encodeLocation(E.pathnameBase).pathname : E.pathnameBase]),
        })
      ),
    c,
    o,
    a
  );
}
function Fv() {
  let n = Hv(),
    r = Ov(n) ? n.status + ' ' + n.statusText : n instanceof Error ? n.message : JSON.stringify(n),
    o = n instanceof Error ? n.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return I.createElement(
    I.Fragment,
    null,
    I.createElement('h2', null, 'Unexpected Application Error!'),
    I.createElement('h3', { style: { fontStyle: 'italic' } }, r),
    o ? I.createElement('pre', { style: l }, o) : null,
    null
  );
}
const zv = I.createElement(Fv, null);
class jv extends I.Component {
  constructor(r) {
    super(r), (this.state = { location: r.location, revalidation: r.revalidation, error: r.error });
  }
  static getDerivedStateFromError(r) {
    return { error: r };
  }
  static getDerivedStateFromProps(r, o) {
    return o.location !== r.location || (o.revalidation !== 'idle' && r.revalidation === 'idle')
      ? { error: r.error, location: r.location, revalidation: r.revalidation }
      : {
          error: r.error !== void 0 ? r.error : o.error,
          location: o.location,
          revalidation: r.revalidation || o.revalidation,
        };
  }
  componentDidCatch(r, o) {
    console.error('React Router caught the following error during render', r, o);
  }
  render() {
    return this.state.error !== void 0
      ? I.createElement(
          En.Provider,
          { value: this.props.routeContext },
          I.createElement(Qp.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function $v(n) {
  let { routeContext: r, match: o, children: a } = n,
    l = I.useContext(iu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = o.route.id),
    I.createElement(En.Provider, { value: r }, a)
  );
}
function Uv(n, r, o, a) {
  var l;
  if ((r === void 0 && (r = []), o === void 0 && (o = null), a === void 0 && (a = null), n == null)) {
    var c;
    if (!o) return null;
    if (o.errors) n = o.matches;
    else if ((c = a) != null && c.v7_partialHydration && r.length === 0 && !o.initialized && o.matches.length > 0)
      n = o.matches;
    else return null;
  }
  let d = n,
    m = (l = o) == null ? void 0 : l.errors;
  if (m != null) {
    let v = d.findIndex((S) => S.route.id && (m == null ? void 0 : m[S.route.id]) !== void 0);
    v >= 0 || Je(!1), (d = d.slice(0, Math.min(d.length, v + 1)));
  }
  let h = !1,
    g = -1;
  if (o && a && a.v7_partialHydration)
    for (let v = 0; v < d.length; v++) {
      let S = d[v];
      if (((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (g = v), S.route.id)) {
        let { loaderData: w, errors: O } = o,
          L = S.route.loader && w[S.route.id] === void 0 && (!O || O[S.route.id] === void 0);
        if (S.route.lazy || L) {
          (h = !0), g >= 0 ? (d = d.slice(0, g + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((v, S, w) => {
    let O,
      L = !1,
      E = null,
      T = null;
    o &&
      ((O = m && S.route.id ? m[S.route.id] : void 0),
      (E = S.route.errorElement || zv),
      h &&
        (g < 0 && w === 0
          ? (qv('route-fallback'), (L = !0), (T = null))
          : g === w && ((L = !0), (T = S.route.hydrateFallbackElement || null))));
    let B = r.concat(d.slice(0, w + 1)),
      A = () => {
        let j;
        return (
          O
            ? (j = E)
            : L
            ? (j = T)
            : S.route.Component
            ? (j = I.createElement(S.route.Component, null))
            : S.route.element
            ? (j = S.route.element)
            : (j = v),
          I.createElement($v, {
            match: S,
            routeContext: { outlet: v, matches: B, isDataRoute: o != null },
            children: j,
          })
        );
      };
    return o && (S.route.ErrorBoundary || S.route.errorElement || w === 0)
      ? I.createElement(jv, {
          location: o.location,
          revalidation: o.revalidation,
          component: E,
          error: O,
          children: A(),
          routeContext: { outlet: null, matches: B, isDataRoute: !0 },
        })
      : A();
  }, null);
}
var Jp = (function (n) {
    return (
      (n.UseBlocker = 'useBlocker'), (n.UseRevalidator = 'useRevalidator'), (n.UseNavigateStable = 'useNavigate'), n
    );
  })(Jp || {}),
  Zp = (function (n) {
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
  })(Zp || {});
function Vv(n) {
  let r = I.useContext(iu);
  return r || Je(!1), r;
}
function Bv(n) {
  let r = I.useContext(Tv);
  return r || Je(!1), r;
}
function Wv(n) {
  let r = I.useContext(En);
  return r || Je(!1), r;
}
function em(n) {
  let r = Wv(),
    o = r.matches[r.matches.length - 1];
  return o.route.id || Je(!1), o.route.id;
}
function Hv() {
  var n;
  let r = I.useContext(Qp),
    o = Bv(),
    a = em();
  return r !== void 0 ? r : (n = o.errors) == null ? void 0 : n[a];
}
function Yv() {
  let { router: n } = Vv(Jp.UseNavigateStable),
    r = em(Zp.UseNavigateStable),
    o = I.useRef(!1);
  return (
    Gp(() => {
      o.current = !0;
    }),
    I.useCallback(
      function (l, c) {
        c === void 0 && (c = {}),
          o.current && (typeof l == 'number' ? n.navigate(l) : n.navigate(l, Zo({ fromRouteId: r }, c)));
      },
      [n, r]
    )
  );
}
const Pd = {};
function qv(n, r, o) {
  Pd[n] || (Pd[n] = !0);
}
function Kv(n, r) {
  n == null || n.v7_startTransition, n == null || n.v7_relativeSplatPath;
}
function xC(n) {
  return Dv(n.context);
}
function Qv(n) {
  let {
    basename: r = '/',
    children: o = null,
    location: a,
    navigationType: l = $n.Pop,
    navigator: c,
    static: d = !1,
    future: m,
  } = n;
  Oi() && Je(!1);
  let h = r.replace(/^\/*/, '/'),
    g = I.useMemo(
      () => ({ basename: h, navigator: c, static: d, future: Zo({ v7_relativeSplatPath: !1 }, m) }),
      [h, m, c, d]
    );
  typeof a == 'string' && (a = bi(a));
  let { pathname: v = '/', search: S = '', hash: w = '', state: O = null, key: L = 'default' } = a,
    E = I.useMemo(() => {
      let T = ru(v, h);
      return T == null ? null : { location: { pathname: T, search: S, hash: w, state: O, key: L }, navigationType: l };
    }, [h, v, S, w, O, L, l]);
  return E == null
    ? null
    : I.createElement(Hn.Provider, { value: g }, I.createElement(ou.Provider, { children: o, value: E }));
}
new Promise(() => {});
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Il() {
  return (
    (Il = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
          }
          return n;
        }),
    Il.apply(this, arguments)
  );
}
function Gv(n, r) {
  if (n == null) return {};
  var o = {},
    a = Object.keys(n),
    l,
    c;
  for (c = 0; c < a.length; c++) (l = a[c]), !(r.indexOf(l) >= 0) && (o[l] = n[l]);
  return o;
}
function Xv(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Jv(n, r) {
  return n.button === 0 && (!r || r === '_self') && !Xv(n);
}
const Zv = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  ey = '6';
try {
  window.__reactRouterVersion = ey;
} catch {}
const ty = 'startTransition',
  Ed = Gg[ty];
function ny(n) {
  let { basename: r, children: o, future: a, window: l } = n,
    c = I.useRef();
  c.current == null && (c.current = rv({ window: l, v5Compat: !0 }));
  let d = c.current,
    [m, h] = I.useState({ action: d.action, location: d.location }),
    { v7_startTransition: g } = a || {},
    v = I.useCallback(
      (S) => {
        g && Ed ? Ed(() => h(S)) : h(S);
      },
      [h, g]
    );
  return (
    I.useLayoutEffect(() => d.listen(v), [d, v]),
    I.useEffect(() => Kv(a), [a]),
    I.createElement(Qv, {
      basename: r,
      children: o,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      future: a,
    })
  );
}
const ry = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  iy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  kC = I.forwardRef(function (r, o) {
    let {
        onClick: a,
        relative: l,
        reloadDocument: c,
        replace: d,
        state: m,
        target: h,
        to: g,
        preventScrollReset: v,
        viewTransition: S,
      } = r,
      w = Gv(r, Zv),
      { basename: O } = I.useContext(Hn),
      L,
      E = !1;
    if (typeof g == 'string' && iy.test(g) && ((L = g), ry))
      try {
        let j = new URL(window.location.href),
          V = g.startsWith('//') ? new URL(j.protocol + g) : new URL(g),
          _ = ru(V.pathname, O);
        V.origin === j.origin && _ != null ? (g = _ + V.search + V.hash) : (E = !0);
      } catch {}
    let T = Lv(g, { relative: l }),
      B = oy(g, { replace: d, state: m, target: h, preventScrollReset: v, relative: l, viewTransition: S });
    function A(j) {
      a && a(j), j.defaultPrevented || B(j);
    }
    return I.createElement('a', Il({}, w, { href: L || T, onClick: E || c ? a : A, ref: o, target: h }));
  });
var bd;
(function (n) {
  (n.UseScrollRestoration = 'useScrollRestoration'),
    (n.UseSubmit = 'useSubmit'),
    (n.UseSubmitFetcher = 'useSubmitFetcher'),
    (n.UseFetcher = 'useFetcher'),
    (n.useViewTransitionState = 'useViewTransitionState');
})(bd || (bd = {}));
var Od;
(function (n) {
  (n.UseFetcher = 'useFetcher'), (n.UseFetchers = 'useFetchers'), (n.UseScrollRestoration = 'useScrollRestoration');
})(Od || (Od = {}));
function oy(n, r) {
  let {
      target: o,
      replace: a,
      state: l,
      preventScrollReset: c,
      relative: d,
      viewTransition: m,
    } = r === void 0 ? {} : r,
    h = Iv(),
    g = Ni(),
    v = Xp(n, { relative: d });
  return I.useCallback(
    (S) => {
      if (Jv(S, o)) {
        S.preventDefault();
        let w = a !== void 0 ? a : Jo(g) === Jo(v);
        h(n, { replace: w, state: l, preventScrollReset: c, relative: d, viewTransition: m });
      }
    },
    [g, h, v, a, l, o, n, c, d, m]
  );
}
var Ho = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var Nd;
function ay() {
  if (Nd) return Ho;
  (Nd = 1), (Ho.parse = d), (Ho.serialize = g);
  var n = Object.prototype.toString,
    r = Object.prototype.hasOwnProperty,
    o = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
    a = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
    l = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    c = /^[\u0020-\u003A\u003D-\u007E]*$/;
  function d(O, L) {
    if (typeof O != 'string') throw new TypeError('argument str must be a string');
    var E = {},
      T = O.length;
    if (T < 2) return E;
    var B = (L && L.decode) || v,
      A = 0,
      j = 0,
      V = 0;
    do {
      if (((j = O.indexOf('=', A)), j === -1)) break;
      if (((V = O.indexOf(';', A)), V === -1)) V = T;
      else if (j > V) {
        A = O.lastIndexOf(';', j - 1) + 1;
        continue;
      }
      var _ = m(O, A, j),
        Z = h(O, j, _),
        ne = O.slice(_, Z);
      if (!r.call(E, ne)) {
        var ie = m(O, j + 1, V),
          me = h(O, V, ie);
        O.charCodeAt(ie) === 34 && O.charCodeAt(me - 1) === 34 && (ie++, me--);
        var ke = O.slice(ie, me);
        E[ne] = w(ke, B);
      }
      A = V + 1;
    } while (A < T);
    return E;
  }
  function m(O, L, E) {
    do {
      var T = O.charCodeAt(L);
      if (T !== 32 && T !== 9) return L;
    } while (++L < E);
    return E;
  }
  function h(O, L, E) {
    for (; L > E; ) {
      var T = O.charCodeAt(--L);
      if (T !== 32 && T !== 9) return L + 1;
    }
    return E;
  }
  function g(O, L, E) {
    var T = (E && E.encode) || encodeURIComponent;
    if (typeof T != 'function') throw new TypeError('option encode is invalid');
    if (!o.test(O)) throw new TypeError('argument name is invalid');
    var B = T(L);
    if (!a.test(B)) throw new TypeError('argument val is invalid');
    var A = O + '=' + B;
    if (!E) return A;
    if (E.maxAge != null) {
      var j = Math.floor(E.maxAge);
      if (!isFinite(j)) throw new TypeError('option maxAge is invalid');
      A += '; Max-Age=' + j;
    }
    if (E.domain) {
      if (!l.test(E.domain)) throw new TypeError('option domain is invalid');
      A += '; Domain=' + E.domain;
    }
    if (E.path) {
      if (!c.test(E.path)) throw new TypeError('option path is invalid');
      A += '; Path=' + E.path;
    }
    if (E.expires) {
      var V = E.expires;
      if (!S(V) || isNaN(V.valueOf())) throw new TypeError('option expires is invalid');
      A += '; Expires=' + V.toUTCString();
    }
    if (
      (E.httpOnly && (A += '; HttpOnly'),
      E.secure && (A += '; Secure'),
      E.partitioned && (A += '; Partitioned'),
      E.priority)
    ) {
      var _ = typeof E.priority == 'string' ? E.priority.toLowerCase() : E.priority;
      switch (_) {
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
    if (E.sameSite) {
      var Z = typeof E.sameSite == 'string' ? E.sameSite.toLowerCase() : E.sameSite;
      switch (Z) {
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
  function S(O) {
    return n.call(O) === '[object Date]';
  }
  function w(O, L) {
    try {
      return L(O);
    } catch {
      return O;
    }
  }
  return Ho;
}
var Qo = ay();
function sy() {
  const n = typeof global > 'u' ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  return typeof n == 'boolean' ? n : typeof document == 'object' && typeof document.cookie == 'string';
}
function ly(n) {
  return typeof n == 'string' ? Qo.parse(n) : typeof n == 'object' && n !== null ? n : {};
}
function ml(n, r = {}) {
  const o = uy(n);
  if (!r.doNotParse)
    try {
      return JSON.parse(o);
    } catch {}
  return n;
}
function uy(n) {
  return n && n[0] === 'j' && n[1] === ':' ? n.substr(2) : n;
}
class tm {
  constructor(r, o = {}) {
    (this.changeListeners = []),
      (this.HAS_DOCUMENT_COOKIE = !1),
      (this.update = () => {
        if (!this.HAS_DOCUMENT_COOKIE) return;
        const l = this.cookies;
        (this.cookies = Qo.parse(document.cookie)), this._checkChanges(l);
      });
    const a = typeof document > 'u' ? '' : document.cookie;
    (this.cookies = ly(r || a)), (this.defaultSetOptions = o), (this.HAS_DOCUMENT_COOKIE = sy());
  }
  _emitChange(r) {
    for (let o = 0; o < this.changeListeners.length; ++o) this.changeListeners[o](r);
  }
  _checkChanges(r) {
    new Set(Object.keys(r).concat(Object.keys(this.cookies))).forEach((a) => {
      r[a] !== this.cookies[a] && this._emitChange({ name: a, value: ml(this.cookies[a]) });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(r, o = {}) {
    return o.doNotUpdate || this.update(), ml(this.cookies[r], o);
  }
  getAll(r = {}) {
    r.doNotUpdate || this.update();
    const o = {};
    for (let a in this.cookies) o[a] = ml(this.cookies[a], r);
    return o;
  }
  set(r, o, a) {
    a ? (a = Object.assign(Object.assign({}, this.defaultSetOptions), a)) : (a = this.defaultSetOptions);
    const l = typeof o == 'string' ? o : JSON.stringify(o);
    (this.cookies = Object.assign(Object.assign({}, this.cookies), { [r]: l })),
      this.HAS_DOCUMENT_COOKIE && (document.cookie = Qo.serialize(r, l, a)),
      this._emitChange({ name: r, value: o, options: a });
  }
  remove(r, o) {
    const a = (o = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), o), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    }));
    (this.cookies = Object.assign({}, this.cookies)),
      delete this.cookies[r],
      this.HAS_DOCUMENT_COOKIE && (document.cookie = Qo.serialize(r, '', a)),
      this._emitChange({ name: r, value: void 0, options: o });
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
    const o = this.changeListeners.indexOf(r);
    o >= 0 && this.changeListeners.splice(o, 1),
      this.HAS_DOCUMENT_COOKIE &&
        this.changeListeners.length === 0 &&
        (typeof window == 'object' && 'cookieStore' in window
          ? window.cookieStore.removeEventListener('change', this.update)
          : this._stopPolling());
  }
}
const nm = I.createContext(new tm()),
  { Provider: cy, Consumer: CC } = nm;
class fy extends I.Component {
  constructor(r) {
    super(r), r.cookies ? (this.cookies = r.cookies) : (this.cookies = new tm(void 0, r.defaultSetOptions));
  }
  render() {
    return I.createElement(cy, { value: this.cookies }, this.props.children);
  }
}
var hl = { exports: {} },
  ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td;
function dy() {
  if (Td) return ve;
  Td = 1;
  var n = typeof Symbol == 'function' && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    l = n ? Symbol.for('react.strict_mode') : 60108,
    c = n ? Symbol.for('react.profiler') : 60114,
    d = n ? Symbol.for('react.provider') : 60109,
    m = n ? Symbol.for('react.context') : 60110,
    h = n ? Symbol.for('react.async_mode') : 60111,
    g = n ? Symbol.for('react.concurrent_mode') : 60111,
    v = n ? Symbol.for('react.forward_ref') : 60112,
    S = n ? Symbol.for('react.suspense') : 60113,
    w = n ? Symbol.for('react.suspense_list') : 60120,
    O = n ? Symbol.for('react.memo') : 60115,
    L = n ? Symbol.for('react.lazy') : 60116,
    E = n ? Symbol.for('react.block') : 60121,
    T = n ? Symbol.for('react.fundamental') : 60117,
    B = n ? Symbol.for('react.responder') : 60118,
    A = n ? Symbol.for('react.scope') : 60119;
  function j(_) {
    if (typeof _ == 'object' && _ !== null) {
      var Z = _.$$typeof;
      switch (Z) {
        case r:
          switch (((_ = _.type), _)) {
            case h:
            case g:
            case a:
            case c:
            case l:
            case S:
              return _;
            default:
              switch (((_ = _ && _.$$typeof), _)) {
                case m:
                case v:
                case L:
                case O:
                case d:
                  return _;
                default:
                  return Z;
              }
          }
        case o:
          return Z;
      }
    }
  }
  function V(_) {
    return j(_) === g;
  }
  return (
    (ve.AsyncMode = h),
    (ve.ConcurrentMode = g),
    (ve.ContextConsumer = m),
    (ve.ContextProvider = d),
    (ve.Element = r),
    (ve.ForwardRef = v),
    (ve.Fragment = a),
    (ve.Lazy = L),
    (ve.Memo = O),
    (ve.Portal = o),
    (ve.Profiler = c),
    (ve.StrictMode = l),
    (ve.Suspense = S),
    (ve.isAsyncMode = function (_) {
      return V(_) || j(_) === h;
    }),
    (ve.isConcurrentMode = V),
    (ve.isContextConsumer = function (_) {
      return j(_) === m;
    }),
    (ve.isContextProvider = function (_) {
      return j(_) === d;
    }),
    (ve.isElement = function (_) {
      return typeof _ == 'object' && _ !== null && _.$$typeof === r;
    }),
    (ve.isForwardRef = function (_) {
      return j(_) === v;
    }),
    (ve.isFragment = function (_) {
      return j(_) === a;
    }),
    (ve.isLazy = function (_) {
      return j(_) === L;
    }),
    (ve.isMemo = function (_) {
      return j(_) === O;
    }),
    (ve.isPortal = function (_) {
      return j(_) === o;
    }),
    (ve.isProfiler = function (_) {
      return j(_) === c;
    }),
    (ve.isStrictMode = function (_) {
      return j(_) === l;
    }),
    (ve.isSuspense = function (_) {
      return j(_) === S;
    }),
    (ve.isValidElementType = function (_) {
      return (
        typeof _ == 'string' ||
        typeof _ == 'function' ||
        _ === a ||
        _ === g ||
        _ === c ||
        _ === l ||
        _ === S ||
        _ === w ||
        (typeof _ == 'object' &&
          _ !== null &&
          (_.$$typeof === L ||
            _.$$typeof === O ||
            _.$$typeof === d ||
            _.$$typeof === m ||
            _.$$typeof === v ||
            _.$$typeof === T ||
            _.$$typeof === B ||
            _.$$typeof === A ||
            _.$$typeof === E))
      );
    }),
    (ve.typeOf = j),
    ve
  );
}
var Ld;
function py() {
  return Ld || ((Ld = 1), (hl.exports = dy())), hl.exports;
}
var gl, Id;
function my() {
  if (Id) return gl;
  Id = 1;
  var n = py(),
    r = {
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
    a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    l = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    c = {};
  (c[n.ForwardRef] = a), (c[n.Memo] = l);
  function d(L) {
    return n.isMemo(L) ? l : c[L.$$typeof] || r;
  }
  var m = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    v = Object.getOwnPropertyDescriptor,
    S = Object.getPrototypeOf,
    w = Object.prototype;
  function O(L, E, T) {
    if (typeof E != 'string') {
      if (w) {
        var B = S(E);
        B && B !== w && O(L, B, T);
      }
      var A = h(E);
      g && (A = A.concat(g(E)));
      for (var j = d(L), V = d(E), _ = 0; _ < A.length; ++_) {
        var Z = A[_];
        if (!o[Z] && !(T && T[Z]) && !(V && V[Z]) && !(j && j[Z])) {
          var ne = v(E, Z);
          try {
            m(L, Z, ne);
          } catch {}
        }
      }
    }
    return L;
  }
  return (gl = O), gl;
}
my();
function hy() {
  return typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
}
function gy(n, r) {
  const o = I.useContext(nm);
  if (!o) throw new Error('Missing <CookiesProvider>');
  const l = Object.assign(Object.assign({}, { doNotUpdate: !0 }), r),
    [c, d] = I.useState(() => o.getAll(l));
  hy() &&
    I.useLayoutEffect(() => {
      function v() {
        const S = o.getAll(l);
        vy(n || null, S, c) && d(S);
      }
      return (
        o.addChangeListener(v),
        () => {
          o.removeChangeListener(v);
        }
      );
    }, [o, c]);
  const m = I.useMemo(() => o.set.bind(o), [o]),
    h = I.useMemo(() => o.remove.bind(o), [o]),
    g = I.useMemo(() => o.update.bind(o), [o]);
  return [c, m, h, g];
}
function vy(n, r, o) {
  if (!n) return !0;
  for (let a of n) if (r[a] !== o[a]) return !0;
  return !1;
}
const ae = (n) => typeof n == 'string',
  mi = () => {
    let n, r;
    const o = new Promise((a, l) => {
      (n = a), (r = l);
    });
    return (o.resolve = n), (o.reject = r), o;
  },
  _d = (n) => (n == null ? '' : '' + n),
  yy = (n, r, o) => {
    n.forEach((a) => {
      r[a] && (o[a] = r[a]);
    });
  },
  wy = /###/g,
  Rd = (n) => (n && n.indexOf('###') > -1 ? n.replace(wy, '.') : n),
  Dd = (n) => !n || ae(n),
  yi = (n, r, o) => {
    const a = ae(r) ? r.split('.') : r;
    let l = 0;
    for (; l < a.length - 1; ) {
      if (Dd(n)) return {};
      const c = Rd(a[l]);
      !n[c] && o && (n[c] = new o()), Object.prototype.hasOwnProperty.call(n, c) ? (n = n[c]) : (n = {}), ++l;
    }
    return Dd(n) ? {} : { obj: n, k: Rd(a[l]) };
  },
  Ad = (n, r, o) => {
    const { obj: a, k: l } = yi(n, r, Object);
    if (a !== void 0 || r.length === 1) {
      a[l] = o;
      return;
    }
    let c = r[r.length - 1],
      d = r.slice(0, r.length - 1),
      m = yi(n, d, Object);
    for (; m.obj === void 0 && d.length; )
      (c = `${d[d.length - 1]}.${c}`),
        (d = d.slice(0, d.length - 1)),
        (m = yi(n, d, Object)),
        m && m.obj && typeof m.obj[`${m.k}.${c}`] < 'u' && (m.obj = void 0);
    m.obj[`${m.k}.${c}`] = o;
  },
  Sy = (n, r, o, a) => {
    const { obj: l, k: c } = yi(n, r, Object);
    (l[c] = l[c] || []), l[c].push(o);
  },
  ea = (n, r) => {
    const { obj: o, k: a } = yi(n, r);
    if (o) return o[a];
  },
  xy = (n, r, o) => {
    const a = ea(n, o);
    return a !== void 0 ? a : ea(r, o);
  },
  rm = (n, r, o) => {
    for (const a in r)
      a !== '__proto__' &&
        a !== 'constructor' &&
        (a in n
          ? ae(n[a]) || n[a] instanceof String || ae(r[a]) || r[a] instanceof String
            ? o && (n[a] = r[a])
            : rm(n[a], r[a], o)
          : (n[a] = r[a]));
    return n;
  },
  wr = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var ky = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const Cy = (n) => (ae(n) ? n.replace(/[&<>"'\/]/g, (r) => ky[r]) : n);
class Py {
  constructor(r) {
    (this.capacity = r), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(r) {
    const o = this.regExpMap.get(r);
    if (o !== void 0) return o;
    const a = new RegExp(r);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(r, a),
      this.regExpQueue.push(r),
      a
    );
  }
}
const Ey = [' ', ',', '?', '!', ';'],
  by = new Py(20),
  Oy = (n, r, o) => {
    (r = r || ''), (o = o || '');
    const a = Ey.filter((d) => r.indexOf(d) < 0 && o.indexOf(d) < 0);
    if (a.length === 0) return !0;
    const l = by.getRegExp(`(${a.map((d) => (d === '?' ? '\\?' : d)).join('|')})`);
    let c = !l.test(n);
    if (!c) {
      const d = n.indexOf(o);
      d > 0 && !l.test(n.substring(0, d)) && (c = !0);
    }
    return c;
  },
  _l = function (n, r) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!n) return;
    if (n[r]) return n[r];
    const a = r.split(o);
    let l = n;
    for (let c = 0; c < a.length; ) {
      if (!l || typeof l != 'object') return;
      let d,
        m = '';
      for (let h = c; h < a.length; ++h)
        if ((h !== c && (m += o), (m += a[h]), (d = l[m]), d !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof d) > -1 && h < a.length - 1) continue;
          c += h - c + 1;
          break;
        }
      l = d;
    }
    return l;
  },
  ta = (n) => n && n.replace('_', '-'),
  Ny = {
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
    output(n, r) {
      console && console[n] && console[n].apply(console, r);
    },
  };
class na {
  constructor(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(r, o);
  }
  init(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = o.prefix || 'i18next:'), (this.logger = r || Ny), (this.options = o), (this.debug = o.debug);
  }
  log() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
    return this.forward(o, 'log', '', !0);
  }
  warn() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
    return this.forward(o, 'warn', '', !0);
  }
  error() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
    return this.forward(o, 'error', '');
  }
  deprecate() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
    return this.forward(o, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(r, o, a, l) {
    return l && !this.debug ? null : (ae(r[0]) && (r[0] = `${a}${this.prefix} ${r[0]}`), this.logger[o](r));
  }
  create(r) {
    return new na(this.logger, { prefix: `${this.prefix}:${r}:`, ...this.options });
  }
  clone(r) {
    return (r = r || this.options), (r.prefix = r.prefix || this.prefix), new na(this.logger, r);
  }
}
var Mt = new na();
class ca {
  constructor() {
    this.observers = {};
  }
  on(r, o) {
    return (
      r.split(' ').forEach((a) => {
        this.observers[a] || (this.observers[a] = new Map());
        const l = this.observers[a].get(o) || 0;
        this.observers[a].set(o, l + 1);
      }),
      this
    );
  }
  off(r, o) {
    if (this.observers[r]) {
      if (!o) {
        delete this.observers[r];
        return;
      }
      this.observers[r].delete(o);
    }
  }
  emit(r) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) a[l - 1] = arguments[l];
    this.observers[r] &&
      Array.from(this.observers[r].entries()).forEach((d) => {
        let [m, h] = d;
        for (let g = 0; g < h; g++) m(...a);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((d) => {
          let [m, h] = d;
          for (let g = 0; g < h; g++) m.apply(m, [r, ...a]);
        });
  }
}
class Md extends ca {
  constructor(r) {
    let o =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = r || {}),
      (this.options = o),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(r) {
    this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
  }
  removeNamespaces(r) {
    const o = this.options.ns.indexOf(r);
    o > -1 && this.options.ns.splice(o, 1);
  }
  getResource(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
      d = l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let m;
    r.indexOf('.') > -1
      ? (m = r.split('.'))
      : ((m = [r, o]), a && (Array.isArray(a) ? m.push(...a) : ae(a) && c ? m.push(...a.split(c)) : m.push(a)));
    const h = ea(this.data, m);
    return (
      !h && !o && !a && r.indexOf('.') > -1 && ((r = m[0]), (o = m[1]), (a = m.slice(2).join('.'))),
      h || !d || !ae(a) ? h : _l(this.data && this.data[r] && this.data[r][o], a, c)
    );
  }
  addResource(r, o, a, l) {
    let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let m = [r, o];
    a && (m = m.concat(d ? a.split(d) : a)),
      r.indexOf('.') > -1 && ((m = r.split('.')), (l = o), (o = m[1])),
      this.addNamespaces(o),
      Ad(this.data, m, l),
      c.silent || this.emit('added', r, o, a, l);
  }
  addResources(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const c in a) (ae(a[c]) || Array.isArray(a[c])) && this.addResource(r, o, c, a[c], { silent: !0 });
    l.silent || this.emit('added', r, o, a);
  }
  addResourceBundle(r, o, a, l, c) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1, skipCopy: !1 },
      m = [r, o];
    r.indexOf('.') > -1 && ((m = r.split('.')), (l = a), (a = o), (o = m[1])), this.addNamespaces(o);
    let h = ea(this.data, m) || {};
    d.skipCopy || (a = JSON.parse(JSON.stringify(a))),
      l ? rm(h, a, c) : (h = { ...h, ...a }),
      Ad(this.data, m, h),
      d.silent || this.emit('added', r, o, a);
  }
  removeResourceBundle(r, o) {
    this.hasResourceBundle(r, o) && delete this.data[r][o], this.removeNamespaces(o), this.emit('removed', r, o);
  }
  hasResourceBundle(r, o) {
    return this.getResource(r, o) !== void 0;
  }
  getResourceBundle(r, o) {
    return (
      o || (o = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1' ? { ...this.getResource(r, o) } : this.getResource(r, o)
    );
  }
  getDataByLanguage(r) {
    return this.data[r];
  }
  hasLanguageSomeTranslations(r) {
    const o = this.getDataByLanguage(r);
    return !!((o && Object.keys(o)) || []).find((l) => o[l] && Object.keys(o[l]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var im = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, r, o, a, l) {
    return (
      n.forEach((c) => {
        this.processors[c] && (r = this.processors[c].process(r, o, a, l));
      }),
      r
    );
  },
};
const Fd = {};
class ra extends ca {
  constructor(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      yy(
        ['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'],
        r,
        this
      ),
      (this.options = o),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Mt.create('translator'));
  }
  changeLanguage(r) {
    r && (this.language = r);
  }
  exists(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (r == null) return !1;
    const a = this.resolve(r, o);
    return a && a.res !== void 0;
  }
  extractFromKey(r, o) {
    let a = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    a === void 0 && (a = ':');
    const l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let c = o.ns || this.options.defaultNS || [];
    const d = a && r.indexOf(a) > -1,
      m =
        !this.options.userDefinedKeySeparator &&
        !o.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !o.nsSeparator &&
        !Oy(r, a, l);
    if (d && !m) {
      const h = r.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0) return { key: r, namespaces: ae(c) ? [c] : c };
      const g = r.split(a);
      (a !== l || (a === l && this.options.ns.indexOf(g[0]) > -1)) && (c = g.shift()), (r = g.join(l));
    }
    return { key: r, namespaces: ae(c) ? [c] : c };
  }
  translate(r, o, a) {
    if (
      (typeof o != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (o = this.options.overloadTranslationOptionHandler(arguments)),
      typeof o == 'object' && (o = { ...o }),
      o || (o = {}),
      r == null)
    )
      return '';
    Array.isArray(r) || (r = [String(r)]);
    const l = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails,
      c = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      { key: d, namespaces: m } = this.extractFromKey(r[r.length - 1], o),
      h = m[m.length - 1],
      g = o.lng || this.language,
      v = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (g && g.toLowerCase() === 'cimode') {
      if (v) {
        const V = o.nsSeparator || this.options.nsSeparator;
        return l
          ? {
              res: `${h}${V}${d}`,
              usedKey: d,
              exactUsedKey: d,
              usedLng: g,
              usedNS: h,
              usedParams: this.getUsedParamsDetails(o),
            }
          : `${h}${V}${d}`;
      }
      return l
        ? { res: d, usedKey: d, exactUsedKey: d, usedLng: g, usedNS: h, usedParams: this.getUsedParamsDetails(o) }
        : d;
    }
    const S = this.resolve(r, o);
    let w = S && S.res;
    const O = (S && S.usedKey) || d,
      L = (S && S.exactUsedKey) || d,
      E = Object.prototype.toString.apply(w),
      T = ['[object Number]', '[object Function]', '[object RegExp]'],
      B = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays,
      A = !this.i18nFormat || this.i18nFormat.handleAsObject,
      j = !ae(w) && typeof w != 'boolean' && typeof w != 'number';
    if (A && w && j && T.indexOf(E) < 0 && !(ae(B) && Array.isArray(w))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const V = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(O, w, { ...o, ns: m })
          : `key '${d} (${this.language})' returned an object instead of string.`;
        return l ? ((S.res = V), (S.usedParams = this.getUsedParamsDetails(o)), S) : V;
      }
      if (c) {
        const V = Array.isArray(w),
          _ = V ? [] : {},
          Z = V ? L : O;
        for (const ne in w)
          if (Object.prototype.hasOwnProperty.call(w, ne)) {
            const ie = `${Z}${c}${ne}`;
            (_[ne] = this.translate(ie, { ...o, joinArrays: !1, ns: m })), _[ne] === ie && (_[ne] = w[ne]);
          }
        w = _;
      }
    } else if (A && ae(B) && Array.isArray(w)) (w = w.join(B)), w && (w = this.extendTranslation(w, r, o, a));
    else {
      let V = !1,
        _ = !1;
      const Z = o.count !== void 0 && !ae(o.count),
        ne = ra.hasDefaultValue(o),
        ie = Z ? this.pluralResolver.getSuffix(g, o.count, o) : '',
        me = o.ordinal && Z ? this.pluralResolver.getSuffix(g, o.count, { ordinal: !1 }) : '',
        ke = Z && !o.ordinal && o.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        Ce =
          (ke && o[`defaultValue${this.options.pluralSeparator}zero`]) ||
          o[`defaultValue${ie}`] ||
          o[`defaultValue${me}`] ||
          o.defaultValue;
      !this.isValidLookup(w) && ne && ((V = !0), (w = Ce)), this.isValidLookup(w) || ((_ = !0), (w = d));
      const He = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && _ ? void 0 : w,
        Fe = ne && Ce !== w && this.options.updateMissing;
      if (_ || V || Fe) {
        if ((this.logger.log(Fe ? 'updateKey' : 'missingKey', g, h, d, Fe ? Ce : w), c)) {
          const U = this.resolve(d, { ...o, keySeparator: !1 });
          U &&
            U.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let Ue = [];
        const Re = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && Re && Re[0])
          for (let U = 0; U < Re.length; U++) Ue.push(Re[U]);
        else
          this.options.saveMissingTo === 'all'
            ? (Ue = this.languageUtils.toResolveHierarchy(o.lng || this.language))
            : Ue.push(o.lng || this.language);
        const Se = (U, G, W) => {
          const C = ne && W !== w ? W : He;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(U, h, G, C, Fe, o)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(U, h, G, C, Fe, o),
            this.emit('missingKey', U, h, G, w);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && Z
            ? Ue.forEach((U) => {
                const G = this.pluralResolver.getSuffixes(U, o);
                ke &&
                  o[`defaultValue${this.options.pluralSeparator}zero`] &&
                  G.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  G.push(`${this.options.pluralSeparator}zero`),
                  G.forEach((W) => {
                    Se([U], d + W, o[`defaultValue${W}`] || Ce);
                  });
              })
            : Se(Ue, d, Ce));
      }
      (w = this.extendTranslation(w, r, o, S, a)),
        _ && w === d && this.options.appendNamespaceToMissingKey && (w = `${h}:${d}`),
        (_ || V) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (w = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${h}:${d}` : d,
                V ? w : void 0
              ))
            : (w = this.options.parseMissingKeyHandler(w)));
    }
    return l ? ((S.res = w), (S.usedParams = this.getUsedParamsDetails(o)), S) : w;
  }
  extendTranslation(r, o, a, l, c) {
    var d = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      r = this.i18nFormat.parse(
        r,
        { ...this.options.interpolation.defaultVariables, ...a },
        a.lng || this.language || l.usedLng,
        l.usedNS,
        l.usedKey,
        { resolved: l }
      );
    else if (!a.skipInterpolation) {
      a.interpolation &&
        this.interpolator.init({ ...a, interpolation: { ...this.options.interpolation, ...a.interpolation } });
      const g =
        ae(r) &&
        (a && a.interpolation && a.interpolation.skipOnVariables !== void 0
          ? a.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let v;
      if (g) {
        const w = r.match(this.interpolator.nestingRegexp);
        v = w && w.length;
      }
      let S = a.replace && !ae(a.replace) ? a.replace : a;
      if (
        (this.options.interpolation.defaultVariables && (S = { ...this.options.interpolation.defaultVariables, ...S }),
        (r = this.interpolator.interpolate(r, S, a.lng || this.language || l.usedLng, a)),
        g)
      ) {
        const w = r.match(this.interpolator.nestingRegexp),
          O = w && w.length;
        v < O && (a.nest = !1);
      }
      !a.lng && this.options.compatibilityAPI !== 'v1' && l && l.res && (a.lng = this.language || l.usedLng),
        a.nest !== !1 &&
          (r = this.interpolator.nest(
            r,
            function () {
              for (var w = arguments.length, O = new Array(w), L = 0; L < w; L++) O[L] = arguments[L];
              return c && c[0] === O[0] && !a.context
                ? (d.logger.warn(`It seems you are nesting recursively key: ${O[0]} in key: ${o[0]}`), null)
                : d.translate(...O, o);
            },
            a
          )),
        a.interpolation && this.interpolator.reset();
    }
    const m = a.postProcess || this.options.postProcess,
      h = ae(m) ? [m] : m;
    return (
      r != null &&
        h &&
        h.length &&
        a.applyPostProcessor !== !1 &&
        (r = im.handle(
          h,
          r,
          o,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...l, usedParams: this.getUsedParamsDetails(a) }, ...a }
            : a,
          this
        )),
      r
    );
  }
  resolve(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a,
      l,
      c,
      d,
      m;
    return (
      ae(r) && (r = [r]),
      r.forEach((h) => {
        if (this.isValidLookup(a)) return;
        const g = this.extractFromKey(h, o),
          v = g.key;
        l = v;
        let S = g.namespaces;
        this.options.fallbackNS && (S = S.concat(this.options.fallbackNS));
        const w = o.count !== void 0 && !ae(o.count),
          O = w && !o.ordinal && o.count === 0 && this.pluralResolver.shouldUseIntlApi(),
          L = o.context !== void 0 && (ae(o.context) || typeof o.context == 'number') && o.context !== '',
          E = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
        S.forEach((T) => {
          this.isValidLookup(a) ||
            ((m = T),
            !Fd[`${E[0]}-${T}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(m) &&
              ((Fd[`${E[0]}-${T}`] = !0),
              this.logger.warn(
                `key "${l}" for languages "${E.join(', ')}" won't get resolved as namespace "${m}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            E.forEach((B) => {
              if (this.isValidLookup(a)) return;
              d = B;
              const A = [v];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(A, v, B, T, o);
              else {
                let V;
                w && (V = this.pluralResolver.getSuffix(B, o.count, o));
                const _ = `${this.options.pluralSeparator}zero`,
                  Z = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (w &&
                    (A.push(v + V),
                    o.ordinal && V.indexOf(Z) === 0 && A.push(v + V.replace(Z, this.options.pluralSeparator)),
                    O && A.push(v + _)),
                  L)
                ) {
                  const ne = `${v}${this.options.contextSeparator}${o.context}`;
                  A.push(ne),
                    w &&
                      (A.push(ne + V),
                      o.ordinal && V.indexOf(Z) === 0 && A.push(ne + V.replace(Z, this.options.pluralSeparator)),
                      O && A.push(ne + _));
                }
              }
              let j;
              for (; (j = A.pop()); ) this.isValidLookup(a) || ((c = j), (a = this.getResource(B, T, j, o)));
            }));
        });
      }),
      { res: a, usedKey: l, exactUsedKey: c, usedLng: d, usedNS: m }
    );
  }
  isValidLookup(r) {
    return r !== void 0 && !(!this.options.returnNull && r === null) && !(!this.options.returnEmptyString && r === '');
  }
  getResource(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(r, o, a, l)
      : this.resourceStore.getResource(r, o, a, l);
  }
  getUsedParamsDetails() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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
      a = r.replace && !ae(r.replace);
    let l = a ? r.replace : r;
    if (
      (a && typeof r.count < 'u' && (l.count = r.count),
      this.options.interpolation.defaultVariables && (l = { ...this.options.interpolation.defaultVariables, ...l }),
      !a)
    ) {
      l = { ...l };
      for (const c of o) delete l[c];
    }
    return l;
  }
  static hasDefaultValue(r) {
    const o = 'defaultValue';
    for (const a in r)
      if (Object.prototype.hasOwnProperty.call(r, a) && o === a.substring(0, o.length) && r[a] !== void 0) return !0;
    return !1;
  }
}
const vl = (n) => n.charAt(0).toUpperCase() + n.slice(1);
class zd {
  constructor(r) {
    (this.options = r),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Mt.create('languageUtils'));
  }
  getScriptPartFromCode(r) {
    if (((r = ta(r)), !r || r.indexOf('-') < 0)) return null;
    const o = r.split('-');
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(o.join('-'));
  }
  getLanguagePartFromCode(r) {
    if (((r = ta(r)), !r || r.indexOf('-') < 0)) return r;
    const o = r.split('-');
    return this.formatLanguageCode(o[0]);
  }
  formatLanguageCode(r) {
    if (ae(r) && r.indexOf('-') > -1) {
      if (typeof Intl < 'u' && typeof Intl.getCanonicalLocales < 'u')
        try {
          let l = Intl.getCanonicalLocales(r)[0];
          if ((l && this.options.lowerCaseLng && (l = l.toLowerCase()), l)) return l;
        } catch {}
      const o = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let a = r.split('-');
      return (
        this.options.lowerCaseLng
          ? (a = a.map((l) => l.toLowerCase()))
          : a.length === 2
          ? ((a[0] = a[0].toLowerCase()),
            (a[1] = a[1].toUpperCase()),
            o.indexOf(a[1].toLowerCase()) > -1 && (a[1] = vl(a[1].toLowerCase())))
          : a.length === 3 &&
            ((a[0] = a[0].toLowerCase()),
            a[1].length === 2 && (a[1] = a[1].toUpperCase()),
            a[0] !== 'sgn' && a[2].length === 2 && (a[2] = a[2].toUpperCase()),
            o.indexOf(a[1].toLowerCase()) > -1 && (a[1] = vl(a[1].toLowerCase())),
            o.indexOf(a[2].toLowerCase()) > -1 && (a[2] = vl(a[2].toLowerCase()))),
        a.join('-')
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
    let o;
    return (
      r.forEach((a) => {
        if (o) return;
        const l = this.formatLanguageCode(a);
        (!this.options.supportedLngs || this.isSupportedCode(l)) && (o = l);
      }),
      !o &&
        this.options.supportedLngs &&
        r.forEach((a) => {
          if (o) return;
          const l = this.getLanguagePartFromCode(a);
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
  getFallbackCodes(r, o) {
    if (!r) return [];
    if ((typeof r == 'function' && (r = r(o)), ae(r) && (r = [r]), Array.isArray(r))) return r;
    if (!o) return r.default || [];
    let a = r[o];
    return (
      a || (a = r[this.getScriptPartFromCode(o)]),
      a || (a = r[this.formatLanguageCode(o)]),
      a || (a = r[this.getLanguagePartFromCode(o)]),
      a || (a = r.default),
      a || []
    );
  }
  toResolveHierarchy(r, o) {
    const a = this.getFallbackCodes(o || this.options.fallbackLng || [], r),
      l = [],
      c = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? l.push(d)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
      };
    return (
      ae(r) && (r.indexOf('-') > -1 || r.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && c(this.formatLanguageCode(r)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            c(this.getScriptPartFromCode(r)),
          this.options.load !== 'currentOnly' && c(this.getLanguagePartFromCode(r)))
        : ae(r) && c(this.formatLanguageCode(r)),
      a.forEach((d) => {
        l.indexOf(d) < 0 && c(this.formatLanguageCode(d));
      }),
      l
    );
  }
}
let Ty = [
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
  Ly = {
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
const Iy = ['v1', 'v2', 'v3'],
  _y = ['v4'],
  jd = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Ry = () => {
    const n = {};
    return (
      Ty.forEach((r) => {
        r.lngs.forEach((o) => {
          n[o] = { numbers: r.nr, plurals: Ly[r.fc] };
        });
      }),
      n
    );
  };
class Dy {
  constructor(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = r),
      (this.options = o),
      (this.logger = Mt.create('pluralResolver')),
      (!this.options.compatibilityJSON || _y.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = Ry()),
      (this.pluralRulesCache = {});
  }
  addRule(r, o) {
    this.rules[r] = o;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const a = ta(r === 'dev' ? 'en' : r),
        l = o.ordinal ? 'ordinal' : 'cardinal',
        c = JSON.stringify({ cleanedCode: a, type: l });
      if (c in this.pluralRulesCache) return this.pluralRulesCache[c];
      let d;
      try {
        d = new Intl.PluralRules(a, { type: l });
      } catch {
        if (!r.match(/-|_/)) return;
        const h = this.languageUtils.getLanguagePartFromCode(r);
        d = this.getRule(h, o);
      }
      return (this.pluralRulesCache[c] = d), d;
    }
    return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)];
  }
  needsPlural(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = this.getRule(r, o);
    return this.shouldUseIntlApi() ? a && a.resolvedOptions().pluralCategories.length > 1 : a && a.numbers.length > 1;
  }
  getPluralFormsOfKey(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(r, a).map((l) => `${o}${l}`);
  }
  getSuffixes(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = this.getRule(r, o);
    return a
      ? this.shouldUseIntlApi()
        ? a
            .resolvedOptions()
            .pluralCategories.sort((l, c) => jd[l] - jd[c])
            .map((l) => `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ''}${l}`)
        : a.numbers.map((l) => this.getSuffix(r, l, o))
      : [];
  }
  getSuffix(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(r, a);
    return l
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ''}${l.select(o)}`
        : this.getSuffixRetroCompatible(l, o)
      : (this.logger.warn(`no plural rule found for: ${r}`), '');
  }
  getSuffixRetroCompatible(r, o) {
    const a = r.noAbs ? r.plurals(o) : r.plurals(Math.abs(o));
    let l = r.numbers[a];
    this.options.simplifyPluralSuffix &&
      r.numbers.length === 2 &&
      r.numbers[0] === 1 &&
      (l === 2 ? (l = 'plural') : l === 1 && (l = ''));
    const c = () => (this.options.prepend && l.toString() ? this.options.prepend + l.toString() : l.toString());
    return this.options.compatibilityJSON === 'v1'
      ? l === 1
        ? ''
        : typeof l == 'number'
        ? `_plural_${l.toString()}`
        : c()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1)
      ? c()
      : this.options.prepend && a.toString()
      ? this.options.prepend + a.toString()
      : a.toString();
  }
  shouldUseIntlApi() {
    return !Iy.includes(this.options.compatibilityJSON);
  }
}
const $d = function (n, r, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      c = xy(n, r, o);
    return !c && l && ae(o) && ((c = _l(n, o, a)), c === void 0 && (c = _l(r, o, a))), c;
  },
  yl = (n) => n.replace(/\$/g, '$$$$');
class Ay {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Mt.create('interpolator')),
      (this.options = r),
      (this.format = (r.interpolation && r.interpolation.format) || ((o) => o)),
      this.init(r);
  }
  init() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    r.interpolation || (r.interpolation = { escapeValue: !0 });
    const {
      escape: o,
      escapeValue: a,
      useRawValueToEscape: l,
      prefix: c,
      prefixEscaped: d,
      suffix: m,
      suffixEscaped: h,
      formatSeparator: g,
      unescapeSuffix: v,
      unescapePrefix: S,
      nestingPrefix: w,
      nestingPrefixEscaped: O,
      nestingSuffix: L,
      nestingSuffixEscaped: E,
      nestingOptionsSeparator: T,
      maxReplaces: B,
      alwaysFormat: A,
    } = r.interpolation;
    (this.escape = o !== void 0 ? o : Cy),
      (this.escapeValue = a !== void 0 ? a : !0),
      (this.useRawValueToEscape = l !== void 0 ? l : !1),
      (this.prefix = c ? wr(c) : d || '{{'),
      (this.suffix = m ? wr(m) : h || '}}'),
      (this.formatSeparator = g || ','),
      (this.unescapePrefix = v ? '' : S || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : v || ''),
      (this.nestingPrefix = w ? wr(w) : O || wr('$t(')),
      (this.nestingSuffix = L ? wr(L) : E || wr(')')),
      (this.nestingOptionsSeparator = T || ','),
      (this.maxReplaces = B || 1e3),
      (this.alwaysFormat = A !== void 0 ? A : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const r = (o, a) => (o && o.source === a ? ((o.lastIndex = 0), o) : new RegExp(a, 'g'));
    (this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = r(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = r(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`));
  }
  interpolate(r, o, a, l) {
    let c, d, m;
    const h = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {},
      g = (O) => {
        if (O.indexOf(this.formatSeparator) < 0) {
          const B = $d(o, h, O, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat ? this.format(B, void 0, a, { ...l, ...o, interpolationkey: O }) : B;
        }
        const L = O.split(this.formatSeparator),
          E = L.shift().trim(),
          T = L.join(this.formatSeparator).trim();
        return this.format($d(o, h, E, this.options.keySeparator, this.options.ignoreJSONStructure), T, a, {
          ...l,
          ...o,
          interpolationkey: E,
        });
      };
    this.resetRegExp();
    const v = (l && l.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      S =
        l && l.interpolation && l.interpolation.skipOnVariables !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (O) => yl(O) },
        { regex: this.regexp, safeValue: (O) => (this.escapeValue ? yl(this.escape(O)) : yl(O)) },
      ].forEach((O) => {
        for (m = 0; (c = O.regex.exec(r)); ) {
          const L = c[1].trim();
          if (((d = g(L)), d === void 0))
            if (typeof v == 'function') {
              const T = v(r, c, l);
              d = ae(T) ? T : '';
            } else if (l && Object.prototype.hasOwnProperty.call(l, L)) d = '';
            else if (S) {
              d = c[0];
              continue;
            } else this.logger.warn(`missed to pass in variable ${L} for interpolating ${r}`), (d = '');
          else !ae(d) && !this.useRawValueToEscape && (d = _d(d));
          const E = O.safeValue(d);
          if (
            ((r = r.replace(c[0], E)),
            S ? ((O.regex.lastIndex += d.length), (O.regex.lastIndex -= c[0].length)) : (O.regex.lastIndex = 0),
            m++,
            m >= this.maxReplaces)
          )
            break;
        }
      }),
      r
    );
  }
  nest(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l,
      c,
      d;
    const m = (h, g) => {
      const v = this.nestingOptionsSeparator;
      if (h.indexOf(v) < 0) return h;
      const S = h.split(new RegExp(`${v}[ ]*{`));
      let w = `{${S[1]}`;
      (h = S[0]), (w = this.interpolate(w, d));
      const O = w.match(/'/g),
        L = w.match(/"/g);
      ((O && O.length % 2 === 0 && !L) || L.length % 2 !== 0) && (w = w.replace(/'/g, '"'));
      try {
        (d = JSON.parse(w)), g && (d = { ...g, ...d });
      } catch (E) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, E), `${h}${v}${w}`;
      }
      return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, h;
    };
    for (; (l = this.nestingRegexp.exec(r)); ) {
      let h = [];
      (d = { ...a }),
        (d = d.replace && !ae(d.replace) ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue;
      let g = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const v = l[1].split(this.formatSeparator).map((S) => S.trim());
        (l[1] = v.shift()), (h = v), (g = !0);
      }
      if (((c = o(m.call(this, l[1].trim(), d), d)), c && l[0] === r && !ae(c))) return c;
      ae(c) || (c = _d(c)),
        c || (this.logger.warn(`missed to resolve ${l[1]} for nesting ${r}`), (c = '')),
        g && (c = h.reduce((v, S) => this.format(v, S, a.lng, { ...a, interpolationkey: l[1].trim() }), c.trim())),
        (r = r.replace(l[0], c)),
        (this.regexp.lastIndex = 0);
    }
    return r;
  }
}
const My = (n) => {
    let r = n.toLowerCase().trim();
    const o = {};
    if (n.indexOf('(') > -1) {
      const a = n.split('(');
      r = a[0].toLowerCase().trim();
      const l = a[1].substring(0, a[1].length - 1);
      r === 'currency' && l.indexOf(':') < 0
        ? o.currency || (o.currency = l.trim())
        : r === 'relativetime' && l.indexOf(':') < 0
        ? o.range || (o.range = l.trim())
        : l.split(';').forEach((d) => {
            if (d) {
              const [m, ...h] = d.split(':'),
                g = h
                  .join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                v = m.trim();
              o[v] || (o[v] = g),
                g === 'false' && (o[v] = !1),
                g === 'true' && (o[v] = !0),
                isNaN(g) || (o[v] = parseInt(g, 10));
            }
          });
    }
    return { formatName: r, formatOptions: o };
  },
  Sr = (n) => {
    const r = {};
    return (o, a, l) => {
      let c = l;
      l &&
        l.interpolationkey &&
        l.formatParams &&
        l.formatParams[l.interpolationkey] &&
        l[l.interpolationkey] &&
        (c = { ...c, [l.interpolationkey]: void 0 });
      const d = a + JSON.stringify(c);
      let m = r[d];
      return m || ((m = n(ta(a), l)), (r[d] = m)), m(o);
    };
  };
class Fy {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Mt.create('formatter')),
      (this.options = r),
      (this.formats = {
        number: Sr((o, a) => {
          const l = new Intl.NumberFormat(o, { ...a });
          return (c) => l.format(c);
        }),
        currency: Sr((o, a) => {
          const l = new Intl.NumberFormat(o, { ...a, style: 'currency' });
          return (c) => l.format(c);
        }),
        datetime: Sr((o, a) => {
          const l = new Intl.DateTimeFormat(o, { ...a });
          return (c) => l.format(c);
        }),
        relativetime: Sr((o, a) => {
          const l = new Intl.RelativeTimeFormat(o, { ...a });
          return (c) => l.format(c, a.range || 'day');
        }),
        list: Sr((o, a) => {
          const l = new Intl.ListFormat(o, { ...a });
          return (c) => l.format(c);
        }),
      }),
      this.init(r);
  }
  init(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    this.formatSeparator = o.interpolation.formatSeparator || ',';
  }
  add(r, o) {
    this.formats[r.toLowerCase().trim()] = o;
  }
  addCached(r, o) {
    this.formats[r.toLowerCase().trim()] = Sr(o);
  }
  format(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = o.split(this.formatSeparator);
    if (c.length > 1 && c[0].indexOf('(') > 1 && c[0].indexOf(')') < 0 && c.find((m) => m.indexOf(')') > -1)) {
      const m = c.findIndex((h) => h.indexOf(')') > -1);
      c[0] = [c[0], ...c.splice(1, m)].join(this.formatSeparator);
    }
    return c.reduce((m, h) => {
      const { formatName: g, formatOptions: v } = My(h);
      if (this.formats[g]) {
        let S = m;
        try {
          const w = (l && l.formatParams && l.formatParams[l.interpolationkey]) || {},
            O = w.locale || w.lng || l.locale || l.lng || a;
          S = this.formats[g](m, O, { ...v, ...l, ...w });
        } catch (w) {
          this.logger.warn(w);
        }
        return S;
      } else this.logger.warn(`there was no format function for ${g}`);
      return m;
    }, r);
  }
}
const zy = (n, r) => {
  n.pending[r] !== void 0 && (delete n.pending[r], n.pendingCount--);
};
class jy extends ca {
  constructor(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = r),
      (this.store = o),
      (this.services = a),
      (this.languageUtils = a.languageUtils),
      (this.options = l),
      (this.logger = Mt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = l.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5),
      (this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(a, l.backend, l);
  }
  queueLoad(r, o, a, l) {
    const c = {},
      d = {},
      m = {},
      h = {};
    return (
      r.forEach((g) => {
        let v = !0;
        o.forEach((S) => {
          const w = `${g}|${S}`;
          !a.reload && this.store.hasResourceBundle(g, S)
            ? (this.state[w] = 2)
            : this.state[w] < 0 ||
              (this.state[w] === 1
                ? d[w] === void 0 && (d[w] = !0)
                : ((this.state[w] = 1),
                  (v = !1),
                  d[w] === void 0 && (d[w] = !0),
                  c[w] === void 0 && (c[w] = !0),
                  h[S] === void 0 && (h[S] = !0)));
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
  loaded(r, o, a) {
    const l = r.split('|'),
      c = l[0],
      d = l[1];
    o && this.emit('failedLoading', c, d, o),
      !o && a && this.store.addResourceBundle(c, d, a, void 0, void 0, { skipCopy: !0 }),
      (this.state[r] = o ? -1 : 2),
      o && a && (this.state[r] = 0);
    const m = {};
    this.queue.forEach((h) => {
      Sy(h.loaded, [c], d),
        zy(h, r),
        o && h.errors.push(o),
        h.pendingCount === 0 &&
          !h.done &&
          (Object.keys(h.loaded).forEach((g) => {
            m[g] || (m[g] = {});
            const v = h.loaded[g];
            v.length &&
              v.forEach((S) => {
                m[g][S] === void 0 && (m[g][S] = !0);
              });
          }),
          (h.done = !0),
          h.errors.length ? h.callback(h.errors) : h.callback());
    }),
      this.emit('loaded', m),
      (this.queue = this.queue.filter((h) => !h.done));
  }
  read(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      d = arguments.length > 5 ? arguments[5] : void 0;
    if (!r.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: r, ns: o, fcName: a, tried: l, wait: c, callback: d });
      return;
    }
    this.readingCalls++;
    const m = (g, v) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const S = this.waitingReads.shift();
          this.read(S.lng, S.ns, S.fcName, S.tried, S.wait, S.callback);
        }
        if (g && v && l < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, r, o, a, l + 1, c * 2, d);
          }, c);
          return;
        }
        d(g, v);
      },
      h = this.backend[a].bind(this.backend);
    if (h.length === 2) {
      try {
        const g = h(r, o);
        g && typeof g.then == 'function' ? g.then((v) => m(null, v)).catch(m) : m(null, g);
      } catch (g) {
        m(g);
      }
      return;
    }
    return h(r, o, m);
  }
  prepareLoading(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn('No backend was added via i18next.use. Will not load resources.'), l && l();
    ae(r) && (r = this.languageUtils.toResolveHierarchy(r)), ae(o) && (o = [o]);
    const c = this.queueLoad(r, o, a, l);
    if (!c.toLoad.length) return c.pending.length || l(), null;
    c.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(r, o, a) {
    this.prepareLoading(r, o, {}, a);
  }
  reload(r, o, a) {
    this.prepareLoading(r, o, { reload: !0 }, a);
  }
  loadOne(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const a = r.split('|'),
      l = a[0],
      c = a[1];
    this.read(l, c, 'read', void 0, void 0, (d, m) => {
      d && this.logger.warn(`${o}loading namespace ${c} for language ${l} failed`, d),
        !d && m && this.logger.log(`${o}loaded namespace ${c} for language ${l}`, m),
        this.loaded(r, d, m);
    });
  }
  saveMissing(r, o, a, l, c) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      m = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(o)) {
      this.logger.warn(
        `did not save key "${a}" as the namespace "${o}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(a == null || a === '')) {
      if (this.backend && this.backend.create) {
        const h = { ...d, isUpdate: c },
          g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let v;
            g.length === 5 ? (v = g(r, o, a, l, h)) : (v = g(r, o, a, l)),
              v && typeof v.then == 'function' ? v.then((S) => m(null, S)).catch(m) : m(null, v);
          } catch (v) {
            m(v);
          }
        else g(r, o, a, l, m, h);
      }
      !r || !r[0] || this.store.addResource(r[0], o, a, l);
    }
  }
}
const Ud = () => ({
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
      let r = {};
      if (
        (typeof n[1] == 'object' && (r = n[1]),
        ae(n[1]) && (r.defaultValue = n[1]),
        ae(n[2]) && (r.tDescription = n[2]),
        typeof n[2] == 'object' || typeof n[3] == 'object')
      ) {
        const o = n[3] || n[2];
        Object.keys(o).forEach((a) => {
          r[a] = o[a];
        });
      }
      return r;
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
  Vd = (n) => (
    ae(n.ns) && (n.ns = [n.ns]),
    ae(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]),
    ae(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]),
    n.supportedLngs && n.supportedLngs.indexOf('cimode') < 0 && (n.supportedLngs = n.supportedLngs.concat(['cimode'])),
    n
  ),
  Yo = () => {},
  $y = (n) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((o) => {
      typeof n[o] == 'function' && (n[o] = n[o].bind(n));
    });
  };
class ki extends ca {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      o = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Vd(r)),
      (this.services = {}),
      (this.logger = Mt),
      (this.modules = { external: [] }),
      $y(this),
      o && !this.isInitialized && !r.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(r, o), this;
      setTimeout(() => {
        this.init(r, o);
      }, 0);
    }
  }
  init() {
    var r = this;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof o == 'function' && ((a = o), (o = {})),
      !o.defaultNS &&
        o.defaultNS !== !1 &&
        o.ns &&
        (ae(o.ns) ? (o.defaultNS = o.ns) : o.ns.indexOf('translation') < 0 && (o.defaultNS = o.ns[0]));
    const l = Ud();
    (this.options = { ...l, ...this.options, ...Vd(o) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = { ...l.interpolation, ...this.options.interpolation }),
      o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator),
      o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    const c = (v) => (v ? (typeof v == 'function' ? new v() : v) : null);
    if (!this.options.isClone) {
      this.modules.logger ? Mt.init(c(this.modules.logger), this.options) : Mt.init(null, this.options);
      let v;
      this.modules.formatter ? (v = this.modules.formatter) : typeof Intl < 'u' && (v = Fy);
      const S = new zd(this.options);
      this.store = new Md(this.options.resources, this.options);
      const w = this.services;
      (w.logger = Mt),
        (w.resourceStore = this.store),
        (w.languageUtils = S),
        (w.pluralResolver = new Dy(S, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        v &&
          (!this.options.interpolation.format || this.options.interpolation.format === l.interpolation.format) &&
          ((w.formatter = c(v)),
          w.formatter.init(w, this.options),
          (this.options.interpolation.format = w.formatter.format.bind(w.formatter))),
        (w.interpolator = new Ay(this.options)),
        (w.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (w.backendConnector = new jy(c(this.modules.backend), w.resourceStore, w, this.options)),
        w.backendConnector.on('*', function (O) {
          for (var L = arguments.length, E = new Array(L > 1 ? L - 1 : 0), T = 1; T < L; T++) E[T - 1] = arguments[T];
          r.emit(O, ...E);
        }),
        this.modules.languageDetector &&
          ((w.languageDetector = c(this.modules.languageDetector)),
          w.languageDetector.init && w.languageDetector.init(w, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((w.i18nFormat = c(this.modules.i18nFormat)), w.i18nFormat.init && w.i18nFormat.init(this)),
        (this.translator = new ra(this.services, this.options)),
        this.translator.on('*', function (O) {
          for (var L = arguments.length, E = new Array(L > 1 ? L - 1 : 0), T = 1; T < L; T++) E[T - 1] = arguments[T];
          r.emit(O, ...E);
        }),
        this.modules.external.forEach((O) => {
          O.init && O.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      a || (a = Yo),
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
          return r.store[v](...arguments);
        };
      }),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((v) => {
        this[v] = function () {
          return r.store[v](...arguments), r;
        };
      });
    const h = mi(),
      g = () => {
        const v = (S, w) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn('init: i18next is already initialized. You should call init just once!'),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            h.resolve(w),
            a(S, w);
        };
        if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized)
          return v(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, v);
      };
    return this.options.resources || !this.options.initImmediate ? g() : setTimeout(g, 0), h;
  }
  loadResources(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yo;
    const l = ae(r) ? r : this.language;
    if ((typeof r == 'function' && (a = r), !this.options.resources || this.options.partialBundledLanguages)) {
      if (l && l.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return a();
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
          !m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), a(m);
        });
    } else a(null);
  }
  reloadResources(r, o, a) {
    const l = mi();
    return (
      typeof r == 'function' && ((a = r), (r = void 0)),
      typeof o == 'function' && ((a = o), (o = void 0)),
      r || (r = this.languages),
      o || (o = this.options.ns),
      a || (a = Yo),
      this.services.backendConnector.reload(r, o, (c) => {
        l.resolve(), a(c);
      }),
      l
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
      r.type === 'postProcessor' && im.addPostProcessor(r),
      r.type === 'formatter' && (this.modules.formatter = r),
      r.type === '3rdParty' && this.modules.external.push(r),
      this
    );
  }
  setResolvedLanguage(r) {
    if (!(!r || !this.languages) && !(['cimode', 'dev'].indexOf(r) > -1))
      for (let o = 0; o < this.languages.length; o++) {
        const a = this.languages[o];
        if (!(['cimode', 'dev'].indexOf(a) > -1) && this.store.hasLanguageSomeTranslations(a)) {
          this.resolvedLanguage = a;
          break;
        }
      }
  }
  changeLanguage(r, o) {
    var a = this;
    this.isLanguageChangingTo = r;
    const l = mi();
    this.emit('languageChanging', r);
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
            return a.t(...arguments);
          }),
          o &&
            o(h, function () {
              return a.t(...arguments);
            });
      },
      m = (h) => {
        !r && !h && this.services.languageDetector && (h = []);
        const g = ae(h) ? h : this.services.languageUtils.getBestMatchFromCodes(h);
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
      !r && this.services.languageDetector && !this.services.languageDetector.async
        ? m(this.services.languageDetector.detect())
        : !r && this.services.languageDetector && this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(m)
          : this.services.languageDetector.detect(m)
        : m(r),
      l
    );
  }
  getFixedT(r, o, a) {
    var l = this;
    const c = function (d, m) {
      let h;
      if (typeof m != 'object') {
        for (var g = arguments.length, v = new Array(g > 2 ? g - 2 : 0), S = 2; S < g; S++) v[S - 2] = arguments[S];
        h = l.options.overloadTranslationOptionHandler([d, m].concat(v));
      } else h = { ...m };
      (h.lng = h.lng || c.lng),
        (h.lngs = h.lngs || c.lngs),
        (h.ns = h.ns || c.ns),
        h.keyPrefix !== '' && (h.keyPrefix = h.keyPrefix || a || c.keyPrefix);
      const w = l.options.keySeparator || '.';
      let O;
      return (
        h.keyPrefix && Array.isArray(d)
          ? (O = d.map((L) => `${h.keyPrefix}${w}${L}`))
          : (O = h.keyPrefix ? `${h.keyPrefix}${w}${d}` : d),
        l.t(O, h)
      );
    };
    return ae(r) ? (c.lng = r) : (c.lngs = r), (c.ns = o), (c.keyPrefix = a), c;
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
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages), !1;
    const a = o.lng || this.resolvedLanguage || this.languages[0],
      l = this.options ? this.options.fallbackLng : !1,
      c = this.languages[this.languages.length - 1];
    if (a.toLowerCase() === 'cimode') return !0;
    const d = (m, h) => {
      const g = this.services.backendConnector.state[`${m}|${h}`];
      return g === -1 || g === 0 || g === 2;
    };
    if (o.precheck) {
      const m = o.precheck(this, d);
      if (m !== void 0) return m;
    }
    return !!(
      this.hasResourceBundle(a, r) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(a, r) && (!l || d(c, r)))
    );
  }
  loadNamespaces(r, o) {
    const a = mi();
    return this.options.ns
      ? (ae(r) && (r = [r]),
        r.forEach((l) => {
          this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
        }),
        this.loadResources((l) => {
          a.resolve(), o && o(l);
        }),
        a)
      : (o && o(), Promise.resolve());
  }
  loadLanguages(r, o) {
    const a = mi();
    ae(r) && (r = [r]);
    const l = this.options.preload || [],
      c = r.filter((d) => l.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return c.length
      ? ((this.options.preload = l.concat(c)),
        this.loadResources((d) => {
          a.resolve(), o && o(d);
        }),
        a)
      : (o && o(), Promise.resolve());
  }
  dir(r) {
    if (
      (r ||
        (r =
          this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
      !r)
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
      a = (this.services && this.services.languageUtils) || new zd(Ud());
    return o.indexOf(a.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      o = arguments.length > 1 ? arguments[1] : void 0;
    return new ki(r, o);
  }
  cloneInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yo;
    const a = r.forkResourceStore;
    a && delete r.forkResourceStore;
    const l = { ...this.options, ...r, isClone: !0 },
      c = new ki(l);
    return (
      (r.debug !== void 0 || r.prefix !== void 0) && (c.logger = c.logger.clone(r)),
      ['store', 'services', 'language'].forEach((m) => {
        c[m] = this[m];
      }),
      (c.services = { ...this.services }),
      (c.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
      a && ((c.store = new Md(this.store.data, l)), (c.services.resourceStore = c.store)),
      (c.translator = new ra(c.services, l)),
      c.translator.on('*', function (m) {
        for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++) g[v - 1] = arguments[v];
        c.emit(m, ...g);
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
const et = ki.createInstance();
et.createInstance = ki.createInstance;
et.createInstance;
et.dir;
et.init;
et.loadResources;
et.reloadResources;
et.use;
et.changeLanguage;
et.getFixedT;
et.t;
et.exists;
et.setDefaultNamespace;
et.hasLoadedNamespace;
et.loadNamespaces;
et.loadLanguages;
const Uy = (n, r, o, a) => {
    var c, d, m, h;
    const l = [o, { code: r, ...(a || {}) }];
    if ((d = (c = n == null ? void 0 : n.services) == null ? void 0 : c.logger) != null && d.forward)
      return n.services.logger.forward(l, 'warn', 'react-i18next::', !0);
    Vn(l[0]) && (l[0] = `react-i18next:: ${l[0]}`),
      (h = (m = n == null ? void 0 : n.services) == null ? void 0 : m.logger) != null && h.warn
        ? n.services.logger.warn(...l)
        : console != null && console.warn && console.warn(...l);
  },
  Bd = {},
  Rl = (n, r, o, a) => {
    (Vn(o) && Bd[o]) || (Vn(o) && (Bd[o] = new Date()), Uy(n, r, o, a));
  },
  om = (n, r) => () => {
    if (n.isInitialized) r();
    else {
      const o = () => {
        setTimeout(() => {
          n.off('initialized', o);
        }, 0),
          r();
      };
      n.on('initialized', o);
    }
  },
  Dl = (n, r, o) => {
    n.loadNamespaces(r, om(n, o));
  },
  Wd = (n, r, o, a) => {
    if ((Vn(o) && (o = [o]), n.options.preload && n.options.preload.indexOf(r) > -1)) return Dl(n, o, a);
    o.forEach((l) => {
      n.options.ns.indexOf(l) < 0 && n.options.ns.push(l);
    }),
      n.loadLanguages(r, om(n, a));
  },
  Vy = (n, r, o = {}) =>
    !r.languages || !r.languages.length
      ? (Rl(r, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', { languages: r.languages }), !0)
      : r.hasLoadedNamespace(n, {
          lng: o.lng,
          precheck: (a, l) => {
            if (
              o.bindI18n &&
              o.bindI18n.indexOf('languageChanging') > -1 &&
              a.services.backendConnector.backend &&
              a.isLanguageChangingTo &&
              !l(a.isLanguageChangingTo, n)
            )
              return !1;
          },
        }),
  Vn = (n) => typeof n == 'string',
  By = (n) => typeof n == 'object' && n !== null,
  Wy = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Hy = {
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
  Yy = (n) => Hy[n],
  qy = (n) => n.replace(Wy, Yy);
let Al = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: qy,
};
const Ky = (n = {}) => {
    Al = { ...Al, ...n };
  },
  Qy = () => Al;
let am;
const Gy = (n) => {
    am = n;
  },
  Xy = () => am,
  Jy = {
    type: '3rdParty',
    init(n) {
      Ky(n.options.react), Gy(n);
    },
  },
  Zy = I.createContext();
class e0 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(r) {
    r.forEach((o) => {
      this.usedNamespaces[o] || (this.usedNamespaces[o] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const t0 = (n, r) => {
    const o = I.useRef();
    return (
      I.useEffect(() => {
        o.current = n;
      }, [n, r]),
      o.current
    );
  },
  sm = (n, r, o, a) => n.getFixedT(r, o, a),
  n0 = (n, r, o, a) => I.useCallback(sm(n, r, o, a), [n, r, o, a]),
  au = (n, r = {}) => {
    var V, _, Z, ne;
    const { i18n: o } = r,
      { i18n: a, defaultNS: l } = I.useContext(Zy) || {},
      c = o || a || Xy();
    if ((c && !c.reportNamespaces && (c.reportNamespaces = new e0()), !c)) {
      Rl(
        c,
        'NO_I18NEXT_INSTANCE',
        'useTranslation: You will need to pass in an i18next instance by using initReactI18next'
      );
      const ie = (ke, Ce) =>
          Vn(Ce) ? Ce : By(Ce) && Vn(Ce.defaultValue) ? Ce.defaultValue : Array.isArray(ke) ? ke[ke.length - 1] : ke,
        me = [ie, {}, !1];
      return (me.t = ie), (me.i18n = {}), (me.ready = !1), me;
    }
    (V = c.options.react) != null &&
      V.wait &&
      Rl(
        c,
        'DEPRECATED_OPTION',
        'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      );
    const d = { ...Qy(), ...c.options.react, ...r },
      { useSuspense: m, keyPrefix: h } = d;
    let g = n || l || ((_ = c.options) == null ? void 0 : _.defaultNS);
    (g = Vn(g) ? [g] : g || ['translation']),
      (ne = (Z = c.reportNamespaces).addUsedNamespaces) == null || ne.call(Z, g);
    const v = (c.isInitialized || c.initializedStoreOnce) && g.every((ie) => Vy(ie, c, d)),
      S = n0(c, r.lng || null, d.nsMode === 'fallback' ? g : g[0], h),
      w = () => S,
      O = () => sm(c, r.lng || null, d.nsMode === 'fallback' ? g : g[0], h),
      [L, E] = I.useState(w);
    let T = g.join();
    r.lng && (T = `${r.lng}${T}`);
    const B = t0(T),
      A = I.useRef(!0);
    I.useEffect(() => {
      const { bindI18n: ie, bindI18nStore: me } = d;
      (A.current = !0),
        !v &&
          !m &&
          (r.lng
            ? Wd(c, r.lng, g, () => {
                A.current && E(O);
              })
            : Dl(c, g, () => {
                A.current && E(O);
              })),
        v && B && B !== T && A.current && E(O);
      const ke = () => {
        A.current && E(O);
      };
      return (
        ie && (c == null || c.on(ie, ke)),
        me && (c == null || c.store.on(me, ke)),
        () => {
          (A.current = !1),
            c && ie && (ie == null || ie.split(' ').forEach((Ce) => c.off(Ce, ke))),
            me && c && me.split(' ').forEach((Ce) => c.store.off(Ce, ke));
        }
      );
    }, [c, T]),
      I.useEffect(() => {
        A.current && v && E(w);
      }, [c, h, v]);
    const j = [L, c, v];
    if (((j.t = L), (j.i18n = c), (j.ready = v), v || (!v && !m))) return j;
    throw new Promise((ie) => {
      r.lng ? Wd(c, r.lng, g, () => ie()) : Dl(c, g, () => ie());
    });
  },
  r0 = '${{val, number}}',
  i0 = { id: 'fr', label: 'Français' },
  o0 = 'https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/driver-licences.html',
  a0 = "Driver's licence renewal",
  s0 = "Renew your New Brunswick Driver's licence online.",
  l0 = { altText: 'Government of New Brunswick' },
  u0 = { pageOne: 'GNB home', pageTwo: 'SNB services', pageThree: "Driver's licence renewal" },
  c0 = { pageOne: 'GNB home', pageTwo: 'SNB services', pageThree: "Temporary driver's licence" },
  f0 = "Driver's licence renewal",
  d0 = "Temporary driver's licence",
  p0 = {
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
  m0 = 'Indicates a required ﬁeld',
  h0 = { continue: 'Continue', back: 'Back', cancel: 'Cancel' },
  g0 = 'Sorry, we are experiencing technical difficulties. Please try again later.',
  v0 = {
    copyright: '© Government of New Brunswick',
    privacy: 'Privacy',
    privacyUrl: 'https://www2.gnb.ca/content/gnb/en/admin/privacy.html',
    disclaimer: 'Disclaimer',
    disclaimerUrl: 'https://www2.gnb.ca/content/gnb/en/admin/disclaimer.html',
  },
  y0 =
    "Your session has timed out due to inactivity. Please go to <1>Driver's licence renewal</1> and restart the process.",
  w0 = {
    homeUrl: '/en/temporary-drivers-licence',
    navList: [
      { id: 'about-the-service', link: '/en/temporary-drivers-licence' },
      { id: 'temporary-drivers-licence-request', link: '/en/temporary-drivers-licence-request' },
    ],
  },
  S0 = 'Skip to main content',
  x0 = {
    currency: r0,
    switchLanguage: i0,
    driversLicenceInfoURL: o0,
    pageTitle: a0,
    pageDescription: s0,
    mainNavigation: l0,
    breadcrumb: u0,
    breadcrumbTempDL: c0,
    header: f0,
    tempDLHeader: d0,
    progressNav: p0,
    disclaimer: m0,
    buttonText: h0,
    systemErrorMsg: g0,
    footer: v0,
    timeoutMsg: y0,
    tempDLPathList: w0,
    skipToMain: S0,
  },
  k0 = '{{val, number}} $',
  C0 = { id: 'en', label: 'English' },
  P0 = 'https://www.gnb.ca/fr/sujet/conduite-transports/permis-conduire/permis-conduire.html',
  E0 = 'Renouvellement du permis de conduire',
  b0 = 'Renouvelez votre permis de conduire du Nouveau-Brunswick en ligne.',
  O0 = { altText: 'Le gouvernement du Nouveau-Brunswick' },
  N0 = {
    pageOne: "Page d'accueil de GNB",
    pageTwo: 'Services de SNB',
    pageThree: 'Renouvellement du permis de conduire',
  },
  T0 = { pageOne: "Page d'accueil de GNB", pageTwo: 'Services de SNB', pageThree: 'Permis de conduire temporaire' },
  L0 = 'Renouvellement du permis de conduire',
  I0 = 'Permis de conduire temporaire',
  _0 = {
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
  R0 = 'Indique un champ obligatoire',
  D0 = { continue: 'Continuer', back: 'Précédent', cancel: 'Annuler' },
  A0 = 'Nous sommes désolés, nous éprouvons des problèmes techniques. Veuillez réessayer plus tard.',
  M0 = {
    copyright: '© Gouvernement du Nouveau-Brunswick',
    privacy: 'Confidentialité',
    privacyUrl: 'https://www2.gnb.ca/content/gnb/fr/admin/declaration_de_confidentialite.html',
    disclaimer: 'Décharge',
    disclaimerUrl: 'https://www2.gnb.ca/content/gnb/fr/admin/decharge.html',
  },
  F0 =
    "Votre session a expiré en raison d'inactivité. Veuillez vous rendre à la page <1>Renouvellement du permis de conduire</1> conduire et recommencer le processus.",
  z0 = {
    homeUrl: '/fr/permis-de-conduire-temporaire',
    navList: [
      { id: 'à-propos-du-service', link: '/fr/permis-de-conduire-temporaire' },
      { id: 'demande-de-permis-de-conduire-temporaire', link: '/fr/demande-de-permis-de-conduire-temporaire' },
    ],
  },
  j0 = 'Passer au contenu principal',
  $0 = {
    currency: k0,
    switchLanguage: C0,
    driversLicenceInfoURL: P0,
    pageTitle: E0,
    pageDescription: b0,
    mainNavigation: O0,
    breadcrumb: N0,
    breadcrumbTempDL: T0,
    header: L0,
    tempDLHeader: I0,
    progressNav: _0,
    disclaimer: R0,
    buttonText: D0,
    systemErrorMsg: A0,
    footer: M0,
    timeoutMsg: F0,
    tempDLPathList: z0,
    skipToMain: j0,
  },
  U0 = 'About the service',
  V0 = 'Estimated time to complete: 5-8 minutes',
  B0 = 'Due to security reasons, the session will expire after 20 minutes of inactivity.',
  W0 = {
    heading: 'To renew online, you will need',
    listItem:
      "<unorderedList><listItem>your current driver's licence</listItem><listItem>Your payment option (credit card, debit card, Google Pay or Apple Pay)</listItem></unorderedList>",
  },
  H0 = {
    heading: 'Online renewal eligibility',
    listItem:
      "<unorderedList><listItem>you have a class 5 licence that expires within next 12 months</listItem><listItem>your licence isn't cancelled or suspended</listItem><listItem>your licence hasn't been expired for more than 5 years</listItem><listItem>this is not the year you need to update your photo (every 8 years)</listItem><listItem>you haven't updated your physical address within the last 90 days)</listItem><listItem>you're not updating an endorsement or restriction (see back of driver's licence)</listItem></unorderedList>",
  },
  Y0 = {
    heading: 'Proof of renewal',
    content:
      "At the end of this transaction, you will receive a 30-day temporary document which is required as proof that you have renewed your driver's licence. This temporary document will be delivered to your device electronically.",
  },
  q0 = {
    heading: 'Cost and delivery',
    listItem:
      "<unorderedList><listItem>fee for a 4-year driver's licence is $90.00</listItem><listItem>it will arrive securely in the mail within approximately 14 days to the address on your driver's licence</listItem></unorderedList>",
  },
  K0 = 'By clicking continue, you conﬁrm that you have read and understand the information presented on this page.',
  Q0 = {
    heading: 'Get help',
    email: 'Email: <1>snb@snb.ca</1>',
    tollFree: 'Toll free: <1>1-888-832-2762</1> (option #2)',
  },
  G0 = 'This field is required.',
  X0 = {
    heading: U0,
    informationalAlert: V0,
    informationalAlertHint: B0,
    sectionOne: W0,
    sectionTwo: H0,
    sectionThree: Y0,
    sectionFour: q0,
    confirmation: K0,
    sectionFive: Q0,
    errorMsg: G0,
  },
  J0 = 'À propos du service',
  Z0 = "Délai d'achèvement approximatif : de 5 à 8 minutes",
  e1 = "Pour des raisons de sécurité, la session expirera après 20 minutes d'inactivité.",
  t1 = {
    heading: 'Pour renouveler en ligne, vous aurez besoin de',
    listItem:
      '<unorderedList><listItem>votre permis de conduire actuel</listItem><listItem>votre option de paiement (carte de crédit, carte de débit, Google Pay ou Apple Pay)</listItem></unorderedList>',
  },
  n1 = {
    heading: 'Admissibilité au renouvellement en ligne',
    listItem:
      "<unorderedList><listItem>vous avez un permis de classe 5 qui expire dans les 12 prochains mois</listItem><listItem>votre permis n'est pas annulé ou suspendu</listItem><listItem>votre permis n'est pas expiré depuis plus de cinq ans</listItem><listItem>ce n'est pas l'année où vous devez mettre à jour votre photo (tous les huit ans)</listItem><listItem>vous n'avez pas mis à jour votre adresse de voirie au cours des 90 derniers jours</listItem><listItem>vous ne mettez pas à jour une mention ou une restriction (voir au dos du permis de conduire)</listItem></unorderedList>",
  },
  r1 = {
    heading: 'Preuve de renouvellement',
    content:
      'À la fin de la transaction, vous recevrez un document temporaire valide pendant 30 jours, qui est requis comme preuve de renouvellement de votre permis de conduire. Ce document temporaire sera envoyé à votre appareil par voie électronique.',
  },
  i1 = {
    heading: 'Coût et livraison',
    listItem:
      "<unorderedList><listItem>les frais pour un permis de conduire valide pendant quatre ans sont de 90 $</listItem><listItem>il arrivera en toute sécurité par la poste dans un délai d'environ 14 jours à l'adresse figurant sur votre permis de conduire</listItem></unorderedList>",
  },
  o1 = "En cliquant sur continuer, vous confirmez que vous avez lu et compris l'information présentée sur cette page.",
  a1 = {
    heading: "Obtenir de l'aide",
    email: 'Courriel : <1>snb@snb.ca</1>',
    tollFree: 'Sans frais : <1>1-888-832-2762</1> (option 2)',
  },
  s1 = 'Ce champ est obligatoire.',
  l1 = {
    heading: J0,
    informationalAlert: Z0,
    informationalAlertHint: e1,
    sectionOne: t1,
    sectionTwo: n1,
    sectionThree: r1,
    sectionFour: i1,
    confirmation: o1,
    sectionFive: a1,
    errorMsg: s1,
  },
  u1 = 'Eligibility',
  c1 = {
    question:
      'Have you any impairment, disease or condition which could affect your ability to operate a motor vehicle safely?',
    answer: { yes: 'Yes', no: 'No' },
  },
  f1 = { question: 'Are your driving privileges suspended in any jurisdiction?', answer: { yes: 'Yes', no: 'No' } },
  d1 = {
    lineOne: 'You are not eligible to renew online at this time.',
    lineTwo: 'Please call <1>1-888-832-2762</1> (option #2) to speak with a representative for more information.',
    emptyField: 'This field is required.',
  },
  p1 = { heading: u1, questionOne: c1, questionTwo: f1, errorMsg: d1 },
  m1 = 'Admissibilité',
  h1 = {
    question:
      'Avez-vous une déficience, une maladie ou un problème de santé quelconque qui pourrait nuire à votre capacité de conduire un véhicule à moteur en toute sécurité?',
    answer: { yes: 'Oui', no: 'Non' },
  },
  g1 = {
    question: 'Vos droits de conducteur sont-ils suspendus dans une quelconque entité administrative?',
    answer: { yes: 'Oui', no: 'Non' },
  },
  v1 = {
    lineOne: "Vous n'êtes pas admissible au renouvellement en ligne en ce moment.",
    lineTwo:
      "Veuillez composer le <1>1-888-832-2762</1> (option 2) pour parler à un représentant et obtenir plus d'information.",
    emptyField: 'Ce champ est obligatoire.',
  },
  y1 = { heading: m1, questionOne: h1, questionTwo: g1, errorMsg: v1 },
  w1 = "Driver's licence details",
  S1 = {
    label: "Driver's licence number",
    helpText: 'Can be found on the front of your licence.',
    errorMsg: { empty: 'This field is required.', invalid: "Driver's licence number format is invalid." },
  },
  x1 = {
    label: 'Issuance date',
    helpText: 'Can be found on the front of your licence.',
    year: 'Year',
    month: 'Month',
    day: 'Day',
    errorMsg: { empty: 'This field is required.', invalid: 'Issuance date format is invalid.' },
  },
  k1 = {
    label: 'Postal code',
    helpText: 'For your current address (example: A2A2A2)',
    errorMsg: { empty: 'This field is required.', invalid: 'Postal code format is invalid.' },
  },
  C1 = {
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
  P1 = {
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
  E1 = {
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
  b1 = { heading: w1, dln: S1, issuanceDate: x1, postalCode: k1, reCaptcha: C1, modal: P1, errorMsg: E1 },
  O1 = 'Détails sur le permis de conduire',
  N1 = {
    label: 'Numéro du permis de conduire',
    helpText: 'Figure sur le devant de votre permis.',
    errorMsg: {
      empty: 'Ce champ est obligatoire.',
      invalid: "Le format du numéro de permis de conduire n'est pas valide.",
    },
  },
  T1 = {
    label: 'Date de délivrance',
    helpText: 'Figure sur le devant de votre permis.',
    year: 'Année',
    month: 'Mois',
    day: 'Jour',
    errorMsg: { empty: 'Ce champ est obligatoire.', invalid: "Le format de la date de délivrance n'est pas valide." },
  },
  L1 = {
    label: 'Code postal',
    helpText: 'Pour votre adresse actuelle (p. ex. : A2A2A2)',
    errorMsg: { empty: 'Ce champ est obligatoire.', invalid: "Le format du code postal n'est pas valide." },
  },
  I1 = {
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
  _1 = {
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
  R1 = {
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
  D1 = { heading: O1, dln: N1, issuanceDate: T1, postalCode: L1, reCaptcha: I1, modal: _1, errorMsg: R1 },
  A1 = 'Contact information',
  M1 = {
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
  F1 = 'Your payment was unsuccessful. Please check your details and try again.',
  z1 = 'Pay and complete renewal',
  j1 = { heading: A1, form: M1, declinedErrorMsg: F1, continueButton: z1 },
  $1 = 'Coordonnées',
  U1 = {
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
  V1 =
    "Votre paiement n'a pas pu être effectué. Veuillez vérifier les renseignements que vous avez fournis et réessayer.",
  B1 = 'Payer et effectuer le renouvellement',
  W1 = { heading: $1, form: U1, declinedErrorMsg: V1, continueButton: B1 },
  H1 = 'Payment confirmation',
  Y1 = 'Your payment was successful. Your receipt has been sent to your email.',
  q1 =
    "This temporary driver's licence is required as proof that you have renewed your driver's licence. If you are not successful in retrieving your temporary driver's licence on this screen or misplace your temporary driver's licence, you can go to <1>Get my temporary driver's licence</1> to retrieve it. Your new driver's licence card will arrive securely in the mail within approximately 14 days.",
  K1 = "Download and print temporary driver's licence",
  Q1 = {
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
  G1 = 'Successfully submitted your feedback',
  X1 = 'Thank you for your feedback!',
  J1 = {
    timeout:
      "Your session has timed out. If you haven't retrieved your temporary driver's licence yet, please go to <1>Temporary driver's licence</1> service to retrieve it.",
    MVSFail:
      "We are unable to retrieve your temporary driver's licence.  Please call <1>1-888-832-2762</1> (option #2) or visit a Service Centre to speak with a representative for assistance.",
    system:
      "We are currently unable to retrieve your order summary due to technical issues. If you don't  get your email receipt within one business day please call <1>1-888-832-2762</1> (option #2) for assistance.",
  },
  Z1 = {
    heading: H1,
    success: Y1,
    description: q1,
    downloadLicenceButton: K1,
    orderSummary: Q1,
    successAlertTitle: G1,
    successAlertDescription: X1,
    errors: J1,
  },
  ew = 'Confirmation de paiement',
  tw = 'Votre paiement a bien été effectué. Le reçu vous a été envoyé par courriel.',
  nw =
    "Ce permis de conduire temporaire est exigé comme preuve de renouvellement de votre permis de conduire. Si vous n'êtes pas en mesure de récupérer votre permis de conduire temporaire sur cette page ou si vous l'avez égaré, cliquez sur <1>Obtenir mon permis de conduire temporaire</1>. Votre nouveau permis de conduire arrivera en toute sécurité par la poste dans environ 14 jours.",
  rw = 'Téléchargez et imprimez votre permis de conduire temporaire.',
  iw = {
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
  ow = 'Vos commentaires ont été soumis avec succès',
  aw = 'Merci pour vos commentaires!',
  sw = {
    timeout:
      "Votre session a expiré. Si vous n'avez pas encore récupéré votre permis de conduire temporaire, veuillez consulter le Service des <1>permis de conduire temporaires</1> pour le récupérer.",
    MVSFail:
      "Nous ne sommes pas en mesure de récupérer votre permis de conduire temporaire.  Veuillez téléphoner au <1>1-888-832-2762</1> (option 2) ou vous rendre dans un centre de services pour parler à un membre du personnel et obtenir de l'aide.",
    system:
      "Nous sommes actuellement dans l'impossibilité de récupérer le résumé de votre commande en raison de problèmes techniques. Si vous ne recevez pas votre reçu par courriel sous un jour ouvrable, veuillez composer le <1>1-888-832-2762</1> (option 2) pour obtenir de l'aide.",
  },
  lw = {
    heading: ew,
    success: tw,
    description: nw,
    downloadLicenceButton: rw,
    orderSummary: iw,
    successAlertTitle: ow,
    successAlertDescription: aw,
    errors: sw,
  },
  uw = 'Certification',
  cw =
    "At the end of this transaction, you will receive a 30-day temporary document which is required as proof that you have renewed your driver's licence. This temporary document will be delivered to your device electronically. If you are not able to receive this document, please contact Teleservices at <1>1-888-832-2762</1> (option #2) to receive instructions on how to receive it. Note, your new card will arrive securely in the mail within approximately 14 days.",
  fw = 'I certify that the information submitted is true.',
  dw = 'This field is required.',
  pw = { header: uw, text: cw, checkboxLabel: fw, errorMsg: dw },
  mw = 'Attestation',
  hw =
    "À la fin de la transaction, vous recevrez un document temporaire valide pendant 30 jours, qui est requis comme preuve de renouvellement de votre permis de conduire. Ce document temporaire sera envoyé à votre appareil par voie électronique. Si vous n'êtes pas en mesure de recevoir ce document, veuillez communiquer avec les TéléServices au <1>1-888-832-2762</1> (option 2) pour recevoir des instructions concernant la réception. Remarque : votre nouveau permis de conduire arrivera en toute sécurité par la poste dans environ 14 jours.",
  gw = "J'atteste que les renseignements fournis sont exacts.",
  vw = 'Ce champ est obligatoire.',
  yw = { header: mw, text: hw, checkboxLabel: gw, errorMsg: vw },
  ww = '404',
  Sw = 'Sorry, the page cannot be found',
  xw = 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  kw = 'Please try the following:',
  Cw = 'If you typed the page address in the address bar, make sure that it is spelled correctly',
  Pw = 'Or try the <1>Services New Brunswick Home Page</1>',
  Ew = 'Or <1>Government of New Brunswick Search Page</1>',
  bw = 'Click the back button to try another Link.',
  Ow = 'https://www2.gnb.ca/content/gnb/en/search.html',
  Nw = 'https://www2.snb.ca/content/snb/en.html',
  Tw = {
    heading: ww,
    description1: Sw,
    description2: xw,
    description3: kw,
    description4: Cw,
    description5: Pw,
    description6: Ew,
    description7: bw,
    searchLink: Ow,
    snbHomePageLink: Nw,
  },
  Lw = '404',
  Iw = 'Impossible de trouver la page',
  _w =
    "Il est possible que la page que vous cherchez ait été retirée, renommée ou qu'elle ne soit pas disponible temporairement.",
  Rw = 'Veuillez essayer ce qui suit.',
  Dw = "Si vous avez inscrit l'adresse de la page dans la barre d'adresse, assurez-vous de l'avoir épelée correctement",
  Aw = "Ou encore, essayer d'ouvrir <1>la page du Service Nouveau-Brunswick</1>",
  Mw = "Ou encore, essayer d'ouvrir la page <1>Recherche du gouvernement du Nouveau-Brunswick</1>",
  Fw = 'Cliquez sur le bouton Précédent pour essayer un autre lien.',
  zw = 'https://www2.gnb.ca/content/gnb/fr/recherche.html',
  jw = 'https://www2.snb.ca/content/snb/fr.html',
  $w = {
    heading: Lw,
    description1: Iw,
    description2: _w,
    description3: Rw,
    description4: Dw,
    description5: Aw,
    description6: Mw,
    description7: Fw,
    searchLink: zw,
    snbHomePageLink: jw,
  },
  Uw = 'We want to hear from you',
  Vw = "How did you find your driver's licence renewal today?",
  Bw = 'required',
  Ww = 'Submit',
  Hw = 'Skip',
  Yw = 'How could we make this better?',
  qw = 'Type your feedback here',
  Kw = 'Dissatisfied',
  Qw = 'Neutral',
  Gw = 'Satisfied',
  Xw = 'Successfully submitted your feedback',
  Jw = 'Thank you for your feedback!',
  Zw = {
    title: Uw,
    description: Vw,
    'description-retrieval': "How did you find your temporary driver's licence retrieval today?",
    required: Bw,
    primaryButton: Ww,
    tertiaryButton: Hw,
    textAreaLabel: Yw,
    textAreaPlaceHolder: qw,
    dissatisfiedReaction: Kw,
    neutralReaction: Qw,
    satisfiedReaction: Gw,
    successAlertTitle: Xw,
    successAlertDescription: Jw,
  },
  eS = 'Nous voulons connaître votre opinion',
  tS = "Comment s'est passé le renouvellement de votre permis de conduire aujourd'hui?",
  nS = 'Soumettre',
  rS = 'Passer',
  iS = 'Comment pourrions-nous améliorer votre expérience?',
  oS = 'Saisissez vos commentaires ici',
  aS = 'Insatisfait(e)',
  sS = 'Sans opinion',
  lS = 'Satisfait(e)',
  uS = 'Vos commentaires ont été soumis avec succès',
  cS = 'Merci pour vos commentaires!',
  fS = {
    title: eS,
    description: tS,
    'description-retrieval':
      "Comment s'est déroulée la récupération de votre permis de conduire temporaire aujourd'hui?",
    primaryButton: nS,
    tertiaryButton: rS,
    textAreaLabel: iS,
    textAreaPlaceHolder: oS,
    dissatisfiedReaction: aS,
    neutralReaction: sS,
    satisfiedReaction: lS,
    successAlertTitle: uS,
    successAlertDescription: cS,
  },
  dS = "Temporary driver's licence",
  pS = {
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
  mS = { url: '/en/temporary-drivers-licence-request', heading: "Driver's licence details" },
  hS = {
    heading: 'Retrieval confirmation',
    pageDescription:
      "This temporary driver's licence is required as proof that you have renewed your driver's licence.",
  },
  gS = {
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
  vS = {
    continue: "Retrieve your temporary driver's licence",
    downloadLicenceButton: "Download and print your temporary driver's licence",
  },
  yS = {
    label: 'Renewal date',
    helpText: "Date you last renewed your driver's licence.",
    year: 'Year',
    month: 'Month',
    day: 'Day',
    errorMsg: { empty: 'This field is required.', invalid: 'Last renewal date format is invalid.' },
  },
  wS = {
    issuanceDate: {
      title: 'Renewal date',
      bodyText:
        "The date that you renewed your class 5 driver's licence in person at an SNB Service Center, online at snb.ca or by phone with SNB Teleservices within the last 30 days.",
    },
  },
  SS = {
    title: dS,
    tdlPageAbout: pS,
    tdlPageForm: mS,
    tdlPageConfirmation: hS,
    alerts: gS,
    buttonText: vS,
    issuanceDate: yS,
    modal: wS,
  },
  xS = 'Permis de conduire temporaire',
  kS = {
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
  CS = { url: '/fr/demande-de-permis-de-conduire-temporaire', heading: 'Détails sur le permis de conduire' },
  PS = {
    heading: 'Confirmation de la récupération',
    pageDescription:
      'Ce permis de conduire temporaire est exigé comme preuve de renouvellement de votre permis de conduire.',
    expiryDescription: "Pour des raisons de sécurité, la session expirera après 20 minutes d'inactivité.",
  },
  ES = {
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
  bS = {
    continue: 'Récupérer votre permis de conduire temporaire',
    downloadLicenceButton: 'Téléchargez et imprimez votre permis de conduire temporaire',
  },
  OS = {
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
  NS = {
    issuanceDate: {
      title: 'Date de renouvellement',
      bodyText:
        'La date à laquelle vous avez renouvelé votre permis de conduire de classe 5 en personne dans un centre de services de SNB, en ligne à snb.ca ou par téléphone auprès des TéléServices de SNB au cours des 30 derniers jours.',
    },
  },
  TS = {
    title: xS,
    tdlPageAbout: kS,
    tdlPageForm: CS,
    tdlPageConfirmation: PS,
    alerts: ES,
    buttonText: bS,
    issuanceDate: OS,
    modal: NS,
  },
  LS = {
    en: {
      common: x0,
      aboutTheService: X0,
      eligibility: p1,
      driverLicenceDetails: b1,
      contactInformation: j1,
      paymentConfirmation: Z1,
      certification: pw,
      notFound: Tw,
      feedbackModal: Zw,
      temporaryDriversLicence: SS,
    },
    fr: {
      common: $0,
      aboutTheService: l1,
      eligibility: y1,
      driverLicenceDetails: D1,
      contactInformation: W1,
      paymentConfirmation: lw,
      certification: yw,
      notFound: $w,
      feedbackModal: fS,
      temporaryDriversLicence: TS,
    },
  };
et.use(Jy).init({
  resources: LS,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr'],
  interpolation: { escapeValue: !1 },
});
const IS = 'modulepreload',
  _S = function (n) {
    return '/etc/designs/spa/snb-dlr-fe/clientlibs/' + n;
  },
  Hd = {},
  jt = function (r, o, a) {
    let l = Promise.resolve();
    if (o && o.length > 0) {
      let d = function (g) {
        return Promise.all(
          g.map((v) =>
            Promise.resolve(v).then(
              (S) => ({ status: 'fulfilled', value: S }),
              (S) => ({ status: 'rejected', reason: S })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const m = document.querySelector('meta[property=csp-nonce]'),
        h = (m == null ? void 0 : m.nonce) || (m == null ? void 0 : m.getAttribute('nonce'));
      l = d(
        o.map((g) => {
          if (((g = _S(g)), g in Hd)) return;
          Hd[g] = !0;
          const v = g.endsWith('.css'),
            S = v ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${S}`)) return;
          const w = document.createElement('link');
          if (
            ((w.rel = v ? 'stylesheet' : IS),
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
      const m = new Event('vite:preloadError', { cancelable: !0 });
      if (((m.payload = d), window.dispatchEvent(m), !m.defaultPrevented)) throw d;
    }
    return l.then((d) => {
      for (const m of d || []) m.status === 'rejected' && c(m.reason);
      return r().catch(c);
    });
  };
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ function RS(n, r, o) {
  return (
    (r = AS(r)) in n
      ? Object.defineProperty(n, r, { value: o, enumerable: !0, configurable: !0, writable: !0 })
      : (n[r] = o),
    n
  );
}
function Yd(n, r) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    r &&
      (a = a.filter(function (l) {
        return Object.getOwnPropertyDescriptor(n, l).enumerable;
      })),
      o.push.apply(o, a);
  }
  return o;
}
function z(n) {
  for (var r = 1; r < arguments.length; r++) {
    var o = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Yd(Object(o), !0).forEach(function (a) {
          RS(n, a, o[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
      : Yd(Object(o)).forEach(function (a) {
          Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(o, a));
        });
  }
  return n;
}
function DS(n, r) {
  if (typeof n != 'object' || !n) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var a = o.call(n, r);
    if (typeof a != 'object') return a;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(n);
}
function AS(n) {
  var r = DS(n, 'string');
  return typeof r == 'symbol' ? r : r + '';
}
const qd = () => {};
let su = {},
  lm = {},
  um = null,
  cm = { mark: qd, measure: qd };
try {
  typeof window < 'u' && (su = window),
    typeof document < 'u' && (lm = document),
    typeof MutationObserver < 'u' && (um = MutationObserver),
    typeof performance < 'u' && (cm = performance);
} catch {}
const { userAgent: Kd = '' } = su.navigator || {},
  xn = su,
  Ne = lm,
  Qd = um,
  qo = cm;
xn.document;
const Xt =
    !!Ne.documentElement &&
    !!Ne.head &&
    typeof Ne.addEventListener == 'function' &&
    typeof Ne.createElement == 'function',
  fm = ~Kd.indexOf('MSIE') || ~Kd.indexOf('Trident/');
var MS = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  FS = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
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
      fab: 'brands',
      'fa-brands': 'brands',
    },
    duotone: {
      fa: 'solid',
      fad: 'solid',
      'fa-solid': 'solid',
      'fa-duotone': 'solid',
      fadr: 'regular',
      'fa-regular': 'regular',
      fadl: 'light',
      'fa-light': 'light',
      fadt: 'thin',
      'fa-thin': 'thin',
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
    'sharp-duotone': {
      fa: 'solid',
      fasds: 'solid',
      'fa-solid': 'solid',
      fasdr: 'regular',
      'fa-regular': 'regular',
      fasdl: 'light',
      'fa-light': 'light',
      fasdt: 'thin',
      'fa-thin': 'thin',
    },
  },
  zS = { GROUP: 'duotone-group', PRIMARY: 'primary', SECONDARY: 'secondary' },
  pm = ['fa-classic', 'fa-duotone', 'fa-sharp', 'fa-sharp-duotone'],
  Ze = 'classic',
  fa = 'duotone',
  jS = 'sharp',
  $S = 'sharp-duotone',
  mm = [Ze, fa, jS, $S],
  US = {
    classic: { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
    duotone: { 900: 'fad', 400: 'fadr', 300: 'fadl', 100: 'fadt' },
    sharp: { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' },
    'sharp-duotone': { 900: 'fasds', 400: 'fasdr', 300: 'fasdl', 100: 'fasdt' },
  },
  VS = {
    'Font Awesome 6 Free': { 900: 'fas', 400: 'far' },
    'Font Awesome 6 Pro': { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
    'Font Awesome 6 Brands': { 400: 'fab', normal: 'fab' },
    'Font Awesome 6 Duotone': { 900: 'fad', 400: 'fadr', normal: 'fadr', 300: 'fadl', 100: 'fadt' },
    'Font Awesome 6 Sharp': { 900: 'fass', 400: 'fasr', normal: 'fasr', 300: 'fasl', 100: 'fast' },
    'Font Awesome 6 Sharp Duotone': { 900: 'fasds', 400: 'fasdr', normal: 'fasdr', 300: 'fasdl', 100: 'fasdt' },
  },
  BS = new Map([
    [
      'classic',
      {
        defaultShortPrefixId: 'fas',
        defaultStyleId: 'solid',
        styleIds: ['solid', 'regular', 'light', 'thin', 'brands'],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      'sharp',
      {
        defaultShortPrefixId: 'fass',
        defaultStyleId: 'solid',
        styleIds: ['solid', 'regular', 'light', 'thin'],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      'duotone',
      {
        defaultShortPrefixId: 'fad',
        defaultStyleId: 'solid',
        styleIds: ['solid', 'regular', 'light', 'thin'],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      'sharp-duotone',
      {
        defaultShortPrefixId: 'fasds',
        defaultStyleId: 'solid',
        styleIds: ['solid', 'regular', 'light', 'thin'],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
  ]),
  WS = {
    classic: { solid: 'fas', regular: 'far', light: 'fal', thin: 'fat', brands: 'fab' },
    duotone: { solid: 'fad', regular: 'fadr', light: 'fadl', thin: 'fadt' },
    sharp: { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' },
    'sharp-duotone': { solid: 'fasds', regular: 'fasdr', light: 'fasdl', thin: 'fasdt' },
  },
  HS = ['fak', 'fa-kit', 'fakd', 'fa-kit-duotone'],
  Gd = {
    kit: { fak: 'kit', 'fa-kit': 'kit' },
    'kit-duotone': { fakd: 'kit-duotone', 'fa-kit-duotone': 'kit-duotone' },
  },
  YS = ['kit'],
  qS = { kit: { 'fa-kit': 'fak' } },
  KS = ['fak', 'fakd'],
  QS = { kit: { fak: 'fa-kit' } },
  Xd = { kit: { kit: 'fak' }, 'kit-duotone': { 'kit-duotone': 'fakd' } },
  Ko = { GROUP: 'duotone-group', SWAP_OPACITY: 'swap-opacity', PRIMARY: 'primary', SECONDARY: 'secondary' },
  GS = ['fa-classic', 'fa-duotone', 'fa-sharp', 'fa-sharp-duotone'],
  XS = ['fak', 'fa-kit', 'fakd', 'fa-kit-duotone'],
  JS = {
    'Font Awesome Kit': { 400: 'fak', normal: 'fak' },
    'Font Awesome Kit Duotone': { 400: 'fakd', normal: 'fakd' },
  },
  ZS = {
    classic: {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    },
    duotone: { 'fa-regular': 'fadr', 'fa-light': 'fadl', 'fa-thin': 'fadt' },
    sharp: { 'fa-solid': 'fass', 'fa-regular': 'fasr', 'fa-light': 'fasl', 'fa-thin': 'fast' },
    'sharp-duotone': { 'fa-solid': 'fasds', 'fa-regular': 'fasdr', 'fa-light': 'fasdl', 'fa-thin': 'fasdt' },
  },
  ex = {
    classic: ['fas', 'far', 'fal', 'fat', 'fad'],
    duotone: ['fadr', 'fadl', 'fadt'],
    sharp: ['fass', 'fasr', 'fasl', 'fast'],
    'sharp-duotone': ['fasds', 'fasdr', 'fasdl', 'fasdt'],
  },
  Ml = {
    classic: {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    },
    duotone: { fadr: 'fa-regular', fadl: 'fa-light', fadt: 'fa-thin' },
    sharp: { fass: 'fa-solid', fasr: 'fa-regular', fasl: 'fa-light', fast: 'fa-thin' },
    'sharp-duotone': { fasds: 'fa-solid', fasdr: 'fa-regular', fasdl: 'fa-light', fasdt: 'fa-thin' },
  },
  tx = ['fa-solid', 'fa-regular', 'fa-light', 'fa-thin', 'fa-duotone', 'fa-brands'],
  Fl = [
    'fa',
    'fas',
    'far',
    'fal',
    'fat',
    'fad',
    'fadr',
    'fadl',
    'fadt',
    'fab',
    'fass',
    'fasr',
    'fasl',
    'fast',
    'fasds',
    'fasdr',
    'fasdl',
    'fasdt',
    ...GS,
    ...tx,
  ],
  nx = ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'],
  hm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  rx = hm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  ix = [
    ...Object.keys(ex),
    ...nx,
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
    Ko.GROUP,
    Ko.SWAP_OPACITY,
    Ko.PRIMARY,
    Ko.SECONDARY,
  ]
    .concat(hm.map((n) => ''.concat(n, 'x')))
    .concat(rx.map((n) => 'w-'.concat(n))),
  ox = {
    'Font Awesome 5 Free': { 900: 'fas', 400: 'far' },
    'Font Awesome 5 Pro': { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal' },
    'Font Awesome 5 Brands': { 400: 'fab', normal: 'fab' },
    'Font Awesome 5 Duotone': { 900: 'fad' },
  };
const Qt = '___FONT_AWESOME___',
  zl = 16,
  gm = 'fa',
  vm = 'svg-inline--fa',
  Bn = 'data-fa-i2svg',
  jl = 'data-fa-pseudo-element',
  ax = 'data-fa-pseudo-element-pending',
  lu = 'data-prefix',
  uu = 'data-icon',
  Jd = 'fontawesome-i2svg',
  sx = 'async',
  lx = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  ym = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })();
function Ti(n) {
  return new Proxy(n, {
    get(r, o) {
      return o in r ? r[o] : r[Ze];
    },
  });
}
const wm = z({}, dm);
wm[Ze] = z(z(z(z({}, { 'fa-duotone': 'duotone' }), dm[Ze]), Gd.kit), Gd['kit-duotone']);
const ux = Ti(wm),
  $l = z({}, WS);
$l[Ze] = z(z(z(z({}, { duotone: 'fad' }), $l[Ze]), Xd.kit), Xd['kit-duotone']);
const Zd = Ti($l),
  Ul = z({}, Ml);
Ul[Ze] = z(z({}, Ul[Ze]), QS.kit);
const cu = Ti(Ul),
  Vl = z({}, ZS);
Vl[Ze] = z(z({}, Vl[Ze]), qS.kit);
Ti(Vl);
const cx = MS,
  Sm = 'fa-layers-text',
  fx = FS,
  dx = z({}, US);
Ti(dx);
const px = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  wl = zS,
  mx = [...YS, ...ix],
  wi = xn.FontAwesomeConfig || {};
function hx(n) {
  var r = Ne.querySelector('script[' + n + ']');
  if (r) return r.getAttribute(n);
}
function gx(n) {
  return n === '' ? !0 : n === 'false' ? !1 : n === 'true' ? !0 : n;
}
Ne &&
  typeof Ne.querySelector == 'function' &&
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
  ].forEach((r) => {
    let [o, a] = r;
    const l = gx(hx(o));
    l != null && (wi[a] = l);
  });
const xm = {
  styleDefault: 'solid',
  familyDefault: Ze,
  cssPrefix: gm,
  replacementClass: vm,
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
wi.familyPrefix && (wi.cssPrefix = wi.familyPrefix);
const Er = z(z({}, xm), wi);
Er.autoReplaceSvg || (Er.observeMutations = !1);
const J = {};
Object.keys(xm).forEach((n) => {
  Object.defineProperty(J, n, {
    enumerable: !0,
    set: function (r) {
      (Er[n] = r), Si.forEach((o) => o(J));
    },
    get: function () {
      return Er[n];
    },
  });
});
Object.defineProperty(J, 'familyPrefix', {
  enumerable: !0,
  set: function (n) {
    (Er.cssPrefix = n), Si.forEach((r) => r(J));
  },
  get: function () {
    return Er.cssPrefix;
  },
});
xn.FontAwesomeConfig = J;
const Si = [];
function vx(n) {
  return (
    Si.push(n),
    () => {
      Si.splice(Si.indexOf(n), 1);
    }
  );
}
const yn = zl,
  Ft = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function yx(n) {
  if (!n || !Xt) return;
  const r = Ne.createElement('style');
  r.setAttribute('type', 'text/css'), (r.innerHTML = n);
  const o = Ne.head.childNodes;
  let a = null;
  for (let l = o.length - 1; l > -1; l--) {
    const c = o[l],
      d = (c.tagName || '').toUpperCase();
    ['STYLE', 'LINK'].indexOf(d) > -1 && (a = c);
  }
  return Ne.head.insertBefore(r, a), n;
}
const wx = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function Ci() {
  let n = 12,
    r = '';
  for (; n-- > 0; ) r += wx[(Math.random() * 62) | 0];
  return r;
}
function br(n) {
  const r = [];
  for (let o = (n || []).length >>> 0; o--; ) r[o] = n[o];
  return r;
}
function fu(n) {
  return n.classList ? br(n.classList) : (n.getAttribute('class') || '').split(' ').filter((r) => r);
}
function km(n) {
  return ''
    .concat(n)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function Sx(n) {
  return Object.keys(n || {})
    .reduce((r, o) => r + ''.concat(o, '="').concat(km(n[o]), '" '), '')
    .trim();
}
function da(n) {
  return Object.keys(n || {}).reduce((r, o) => r + ''.concat(o, ': ').concat(n[o].trim(), ';'), '');
}
function du(n) {
  return n.size !== Ft.size || n.x !== Ft.x || n.y !== Ft.y || n.rotate !== Ft.rotate || n.flipX || n.flipY;
}
function xx(n) {
  let { transform: r, containerWidth: o, iconWidth: a } = n;
  const l = { transform: 'translate('.concat(o / 2, ' 256)') },
    c = 'translate('.concat(r.x * 32, ', ').concat(r.y * 32, ') '),
    d = 'scale('.concat((r.size / 16) * (r.flipX ? -1 : 1), ', ').concat((r.size / 16) * (r.flipY ? -1 : 1), ') '),
    m = 'rotate('.concat(r.rotate, ' 0 0)'),
    h = { transform: ''.concat(c, ' ').concat(d, ' ').concat(m) },
    g = { transform: 'translate('.concat((a / 2) * -1, ' -256)') };
  return { outer: l, inner: h, path: g };
}
function kx(n) {
  let { transform: r, width: o = zl, height: a = zl, startCentered: l = !1 } = n,
    c = '';
  return (
    l && fm
      ? (c += 'translate('.concat(r.x / yn - o / 2, 'em, ').concat(r.y / yn - a / 2, 'em) '))
      : l
      ? (c += 'translate(calc(-50% + '.concat(r.x / yn, 'em), calc(-50% + ').concat(r.y / yn, 'em)) '))
      : (c += 'translate('.concat(r.x / yn, 'em, ').concat(r.y / yn, 'em) ')),
    (c += 'scale('.concat((r.size / yn) * (r.flipX ? -1 : 1), ', ').concat((r.size / yn) * (r.flipY ? -1 : 1), ') ')),
    (c += 'rotate('.concat(r.rotate, 'deg) ')),
    c
  );
}
var Cx = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
}`;
function Cm() {
  const n = gm,
    r = vm,
    o = J.cssPrefix,
    a = J.replacementClass;
  let l = Cx;
  if (o !== n || a !== r) {
    const c = new RegExp('\\.'.concat(n, '\\-'), 'g'),
      d = new RegExp('\\--'.concat(n, '\\-'), 'g'),
      m = new RegExp('\\.'.concat(r), 'g');
    l = l.replace(c, '.'.concat(o, '-')).replace(d, '--'.concat(o, '-')).replace(m, '.'.concat(a));
  }
  return l;
}
let ep = !1;
function Sl() {
  J.autoAddCss && !ep && (yx(Cm()), (ep = !0));
}
var Px = {
  mixout() {
    return { dom: { css: Cm, insertCss: Sl } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Sl();
      },
      beforeI2svg() {
        Sl();
      },
    };
  },
};
const Gt = xn || {};
Gt[Qt] || (Gt[Qt] = {});
Gt[Qt].styles || (Gt[Qt].styles = {});
Gt[Qt].hooks || (Gt[Qt].hooks = {});
Gt[Qt].shims || (Gt[Qt].shims = []);
var zt = Gt[Qt];
const Pm = [],
  Em = function () {
    Ne.removeEventListener('DOMContentLoaded', Em), (ia = 1), Pm.map((n) => n());
  };
let ia = !1;
Xt &&
  ((ia = (Ne.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ne.readyState)),
  ia || Ne.addEventListener('DOMContentLoaded', Em));
function Ex(n) {
  Xt && (ia ? setTimeout(n, 0) : Pm.push(n));
}
function Li(n) {
  const { tag: r, attributes: o = {}, children: a = [] } = n;
  return typeof n == 'string'
    ? km(n)
    : '<'.concat(r, ' ').concat(Sx(o), '>').concat(a.map(Li).join(''), '</').concat(r, '>');
}
function tp(n, r, o) {
  if (n && n[r] && n[r][o]) return { prefix: r, iconName: o, icon: n[r][o] };
}
var xl = function (r, o, a, l) {
  var c = Object.keys(r),
    d = c.length,
    m = o,
    h,
    g,
    v;
  for (a === void 0 ? ((h = 1), (v = r[c[0]])) : ((h = 0), (v = a)); h < d; h++) (g = c[h]), (v = m(v, r[g], g, r));
  return v;
};
function bx(n) {
  const r = [];
  let o = 0;
  const a = n.length;
  for (; o < a; ) {
    const l = n.charCodeAt(o++);
    if (l >= 55296 && l <= 56319 && o < a) {
      const c = n.charCodeAt(o++);
      (c & 64512) == 56320 ? r.push(((l & 1023) << 10) + (c & 1023) + 65536) : (r.push(l), o--);
    } else r.push(l);
  }
  return r;
}
function Bl(n) {
  const r = bx(n);
  return r.length === 1 ? r[0].toString(16) : null;
}
function Ox(n, r) {
  const o = n.length;
  let a = n.charCodeAt(r),
    l;
  return a >= 55296 && a <= 56319 && o > r + 1 && ((l = n.charCodeAt(r + 1)), l >= 56320 && l <= 57343)
    ? (a - 55296) * 1024 + l - 56320 + 65536
    : a;
}
function np(n) {
  return Object.keys(n).reduce((r, o) => {
    const a = n[o];
    return !!a.icon ? (r[a.iconName] = a.icon) : (r[o] = a), r;
  }, {});
}
function Wl(n, r) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: a = !1 } = o,
    l = np(r);
  typeof zt.hooks.addPack == 'function' && !a
    ? zt.hooks.addPack(n, np(r))
    : (zt.styles[n] = z(z({}, zt.styles[n] || {}), l)),
    n === 'fas' && Wl('fa', r);
}
const { styles: Pi, shims: Nx } = zt,
  bm = Object.keys(cu),
  Tx = bm.reduce((n, r) => ((n[r] = Object.keys(cu[r])), n), {});
let pu = null,
  Om = {},
  Nm = {},
  Tm = {},
  Lm = {},
  Im = {};
function Lx(n) {
  return ~mx.indexOf(n);
}
function Ix(n, r) {
  const o = r.split('-'),
    a = o[0],
    l = o.slice(1).join('-');
  return a === n && l !== '' && !Lx(l) ? l : null;
}
const _m = () => {
  const n = (a) => xl(Pi, (l, c, d) => ((l[d] = xl(c, a, {})), l), {});
  (Om = n(
    (a, l, c) => (
      l[3] && (a[l[3]] = c),
      l[2] &&
        l[2]
          .filter((m) => typeof m == 'number')
          .forEach((m) => {
            a[m.toString(16)] = c;
          }),
      a
    )
  )),
    (Nm = n(
      (a, l, c) => (
        (a[c] = c),
        l[2] &&
          l[2]
            .filter((m) => typeof m == 'string')
            .forEach((m) => {
              a[m] = c;
            }),
        a
      )
    )),
    (Im = n((a, l, c) => {
      const d = l[2];
      return (
        (a[c] = c),
        d.forEach((m) => {
          a[m] = c;
        }),
        a
      );
    }));
  const r = 'far' in Pi || J.autoFetchSvg,
    o = xl(
      Nx,
      (a, l) => {
        const c = l[0];
        let d = l[1];
        const m = l[2];
        return (
          d === 'far' && !r && (d = 'fas'),
          typeof c == 'string' && (a.names[c] = { prefix: d, iconName: m }),
          typeof c == 'number' && (a.unicodes[c.toString(16)] = { prefix: d, iconName: m }),
          a
        );
      },
      { names: {}, unicodes: {} }
    );
  (Tm = o.names), (Lm = o.unicodes), (pu = pa(J.styleDefault, { family: J.familyDefault }));
};
vx((n) => {
  pu = pa(n.styleDefault, { family: J.familyDefault });
});
_m();
function mu(n, r) {
  return (Om[n] || {})[r];
}
function _x(n, r) {
  return (Nm[n] || {})[r];
}
function Un(n, r) {
  return (Im[n] || {})[r];
}
function Rm(n) {
  return Tm[n] || { prefix: null, iconName: null };
}
function Rx(n) {
  const r = Lm[n],
    o = mu('fas', n);
  return r || (o ? { prefix: 'fas', iconName: o } : null) || { prefix: null, iconName: null };
}
function kn() {
  return pu;
}
const Dm = () => ({ prefix: null, iconName: null, rest: [] });
function Dx(n) {
  let r = Ze;
  const o = bm.reduce((a, l) => ((a[l] = ''.concat(J.cssPrefix, '-').concat(l)), a), {});
  return (
    mm.forEach((a) => {
      (n.includes(o[a]) || n.some((l) => Tx[a].includes(l))) && (r = a);
    }),
    r
  );
}
function pa(n) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: o = Ze } = r,
    a = ux[o][n];
  if (o === fa && !n) return 'fad';
  const l = Zd[o][n] || Zd[o][a],
    c = n in zt.styles ? n : null;
  return l || c || null;
}
function Ax(n) {
  let r = [],
    o = null;
  return (
    n.forEach((a) => {
      const l = Ix(J.cssPrefix, a);
      l ? (o = l) : a && r.push(a);
    }),
    { iconName: o, rest: r }
  );
}
function rp(n) {
  return n.sort().filter((r, o, a) => a.indexOf(r) === o);
}
function ma(n) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: o = !1 } = r;
  let a = null;
  const l = Fl.concat(XS),
    c = rp(n.filter((S) => l.includes(S))),
    d = rp(n.filter((S) => !Fl.includes(S))),
    m = c.filter((S) => ((a = S), !pm.includes(S))),
    [h = null] = m,
    g = Dx(c),
    v = z(z({}, Ax(d)), {}, { prefix: pa(h, { family: g }) });
  return z(z(z({}, v), jx({ values: n, family: g, styles: Pi, config: J, canonical: v, givenPrefix: a })), Mx(o, a, v));
}
function Mx(n, r, o) {
  let { prefix: a, iconName: l } = o;
  if (n || !a || !l) return { prefix: a, iconName: l };
  const c = r === 'fa' ? Rm(l) : {},
    d = Un(a, l);
  return (
    (l = c.iconName || d || l),
    (a = c.prefix || a),
    a === 'far' && !Pi.far && Pi.fas && !J.autoFetchSvg && (a = 'fas'),
    { prefix: a, iconName: l }
  );
}
const Fx = mm.filter((n) => n !== Ze || n !== fa),
  zx = Object.keys(Ml)
    .filter((n) => n !== Ze)
    .map((n) => Object.keys(Ml[n]))
    .flat();
function jx(n) {
  const { values: r, family: o, canonical: a, givenPrefix: l = '', styles: c = {}, config: d = {} } = n,
    m = o === fa,
    h = r.includes('fa-duotone') || r.includes('fad'),
    g = d.familyDefault === 'duotone',
    v = a.prefix === 'fad' || a.prefix === 'fa-duotone';
  if (
    (!m && (h || g || v) && (a.prefix = 'fad'),
    (r.includes('fa-brands') || r.includes('fab')) && (a.prefix = 'fab'),
    !a.prefix && Fx.includes(o) && (Object.keys(c).find((w) => zx.includes(w)) || d.autoFetchSvg))
  ) {
    const w = BS.get(o).defaultShortPrefixId;
    (a.prefix = w), (a.iconName = Un(a.prefix, a.iconName) || a.iconName);
  }
  return (a.prefix === 'fa' || l === 'fa') && (a.prefix = kn() || 'fas'), a;
}
class $x {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
    const l = o.reduce(this._pullDefinitions, {});
    Object.keys(l).forEach((c) => {
      (this.definitions[c] = z(z({}, this.definitions[c] || {}), l[c])), Wl(c, l[c]);
      const d = cu[Ze][c];
      d && Wl(d, l[c]), _m();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(r, o) {
    const a = o.prefix && o.iconName && o.icon ? { 0: o } : o;
    return (
      Object.keys(a).map((l) => {
        const { prefix: c, iconName: d, icon: m } = a[l],
          h = m[2];
        r[c] || (r[c] = {}),
          h.length > 0 &&
            h.forEach((g) => {
              typeof g == 'string' && (r[c][g] = m);
            }),
          (r[c][d] = m);
      }),
      r
    );
  }
}
let ip = [],
  kr = {};
const Pr = {},
  Ux = Object.keys(Pr);
function Vx(n, r) {
  let { mixoutsTo: o } = r;
  return (
    (ip = n),
    (kr = {}),
    Object.keys(Pr).forEach((a) => {
      Ux.indexOf(a) === -1 && delete Pr[a];
    }),
    ip.forEach((a) => {
      const l = a.mixout ? a.mixout() : {};
      if (
        (Object.keys(l).forEach((c) => {
          typeof l[c] == 'function' && (o[c] = l[c]),
            typeof l[c] == 'object' &&
              Object.keys(l[c]).forEach((d) => {
                o[c] || (o[c] = {}), (o[c][d] = l[c][d]);
              });
        }),
        a.hooks)
      ) {
        const c = a.hooks();
        Object.keys(c).forEach((d) => {
          kr[d] || (kr[d] = []), kr[d].push(c[d]);
        });
      }
      a.provides && a.provides(Pr);
    }),
    o
  );
}
function Hl(n, r) {
  for (var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), l = 2; l < o; l++) a[l - 2] = arguments[l];
  return (
    (kr[n] || []).forEach((d) => {
      r = d.apply(null, [r, ...a]);
    }),
    r
  );
}
function Wn(n) {
  for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
  (kr[n] || []).forEach((c) => {
    c.apply(null, o);
  });
}
function Cn() {
  const n = arguments[0],
    r = Array.prototype.slice.call(arguments, 1);
  return Pr[n] ? Pr[n].apply(null, r) : void 0;
}
function Yl(n) {
  n.prefix === 'fa' && (n.prefix = 'fas');
  let { iconName: r } = n;
  const o = n.prefix || kn();
  if (r) return (r = Un(o, r) || r), tp(Am.definitions, o, r) || tp(zt.styles, o, r);
}
const Am = new $x(),
  Bx = () => {
    (J.autoReplaceSvg = !1), (J.observeMutations = !1), Wn('noAuto');
  },
  Wx = {
    i2svg: function () {
      let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Xt
        ? (Wn('beforeI2svg', n), Cn('pseudoElements2svg', n), Cn('i2svg', n))
        : Promise.reject(new Error('Operation requires a DOM of some kind.'));
    },
    watch: function () {
      let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: r } = n;
      J.autoReplaceSvg === !1 && (J.autoReplaceSvg = !0),
        (J.observeMutations = !0),
        Ex(() => {
          Yx({ autoReplaceSvgRoot: r }), Wn('watch', n);
        });
    },
  },
  Hx = {
    icon: (n) => {
      if (n === null) return null;
      if (typeof n == 'object' && n.prefix && n.iconName)
        return { prefix: n.prefix, iconName: Un(n.prefix, n.iconName) || n.iconName };
      if (Array.isArray(n) && n.length === 2) {
        const r = n[1].indexOf('fa-') === 0 ? n[1].slice(3) : n[1],
          o = pa(n[0]);
        return { prefix: o, iconName: Un(o, r) || r };
      }
      if (typeof n == 'string' && (n.indexOf(''.concat(J.cssPrefix, '-')) > -1 || n.match(cx))) {
        const r = ma(n.split(' '), { skipLookups: !0 });
        return { prefix: r.prefix || kn(), iconName: Un(r.prefix, r.iconName) || r.iconName };
      }
      if (typeof n == 'string') {
        const r = kn();
        return { prefix: r, iconName: Un(r, n) || n };
      }
    },
  },
  ht = { noAuto: Bx, config: J, dom: Wx, parse: Hx, library: Am, findIconDefinition: Yl, toHtml: Li },
  Yx = function () {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: r = Ne } = n;
    (Object.keys(zt.styles).length > 0 || J.autoFetchSvg) && Xt && J.autoReplaceSvg && ht.dom.i2svg({ node: r });
  };
function ha(n, r) {
  return (
    Object.defineProperty(n, 'abstract', { get: r }),
    Object.defineProperty(n, 'html', {
      get: function () {
        return n.abstract.map((o) => Li(o));
      },
    }),
    Object.defineProperty(n, 'node', {
      get: function () {
        if (!Xt) return;
        const o = Ne.createElement('div');
        return (o.innerHTML = n.html), o.children;
      },
    }),
    n
  );
}
function qx(n) {
  let { children: r, main: o, mask: a, attributes: l, styles: c, transform: d } = n;
  if (du(d) && o.found && !a.found) {
    const { width: m, height: h } = o,
      g = { x: m / h / 2, y: 0.5 };
    l.style = da(
      z(z({}, c), {}, { 'transform-origin': ''.concat(g.x + d.x / 16, 'em ').concat(g.y + d.y / 16, 'em') })
    );
  }
  return [{ tag: 'svg', attributes: l, children: r }];
}
function Kx(n) {
  let { prefix: r, iconName: o, children: a, attributes: l, symbol: c } = n;
  const d = c === !0 ? ''.concat(r, '-').concat(J.cssPrefix, '-').concat(o) : c;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: z(z({}, l), {}, { id: d }), children: a }],
    },
  ];
}
function hu(n) {
  const {
      icons: { main: r, mask: o },
      prefix: a,
      iconName: l,
      transform: c,
      symbol: d,
      title: m,
      maskId: h,
      titleId: g,
      extra: v,
      watchable: S = !1,
    } = n,
    { width: w, height: O } = o.found ? o : r,
    L = KS.includes(a),
    E = [J.replacementClass, l ? ''.concat(J.cssPrefix, '-').concat(l) : '']
      .filter((_) => v.classes.indexOf(_) === -1)
      .filter((_) => _ !== '' || !!_)
      .concat(v.classes)
      .join(' ');
  let T = {
    children: [],
    attributes: z(
      z({}, v.attributes),
      {},
      {
        'data-prefix': a,
        'data-icon': l,
        class: E,
        role: v.attributes.role || 'img',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 '.concat(w, ' ').concat(O),
      }
    ),
  };
  const B = L && !~v.classes.indexOf('fa-fw') ? { width: ''.concat((w / O) * 16 * 0.0625, 'em') } : {};
  S && (T.attributes[Bn] = ''),
    m &&
      (T.children.push({
        tag: 'title',
        attributes: { id: T.attributes['aria-labelledby'] || 'title-'.concat(g || Ci()) },
        children: [m],
      }),
      delete T.attributes.title);
  const A = z(
      z({}, T),
      {},
      { prefix: a, iconName: l, main: r, mask: o, maskId: h, transform: c, symbol: d, styles: z(z({}, B), v.styles) }
    ),
    { children: j, attributes: V } =
      o.found && r.found
        ? Cn('generateAbstractMask', A) || { children: [], attributes: {} }
        : Cn('generateAbstractIcon', A) || { children: [], attributes: {} };
  return (A.children = j), (A.attributes = V), d ? Kx(A) : qx(A);
}
function op(n) {
  const { content: r, width: o, height: a, transform: l, title: c, extra: d, watchable: m = !1 } = n,
    h = z(z(z({}, d.attributes), c ? { title: c } : {}), {}, { class: d.classes.join(' ') });
  m && (h[Bn] = '');
  const g = z({}, d.styles);
  du(l) &&
    ((g.transform = kx({ transform: l, startCentered: !0, width: o, height: a })),
    (g['-webkit-transform'] = g.transform));
  const v = da(g);
  v.length > 0 && (h.style = v);
  const S = [];
  return (
    S.push({ tag: 'span', attributes: h, children: [r] }),
    c && S.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [c] }),
    S
  );
}
function Qx(n) {
  const { content: r, title: o, extra: a } = n,
    l = z(z(z({}, a.attributes), o ? { title: o } : {}), {}, { class: a.classes.join(' ') }),
    c = da(a.styles);
  c.length > 0 && (l.style = c);
  const d = [];
  return (
    d.push({ tag: 'span', attributes: l, children: [r] }),
    o && d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
    d
  );
}
const { styles: kl } = zt;
function ql(n) {
  const r = n[0],
    o = n[1],
    [a] = n.slice(4);
  let l = null;
  return (
    Array.isArray(a)
      ? (l = {
          tag: 'g',
          attributes: { class: ''.concat(J.cssPrefix, '-').concat(wl.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: { class: ''.concat(J.cssPrefix, '-').concat(wl.SECONDARY), fill: 'currentColor', d: a[0] },
            },
            {
              tag: 'path',
              attributes: { class: ''.concat(J.cssPrefix, '-').concat(wl.PRIMARY), fill: 'currentColor', d: a[1] },
            },
          ],
        })
      : (l = { tag: 'path', attributes: { fill: 'currentColor', d: a } }),
    { found: !0, width: r, height: o, icon: l }
  );
}
const Gx = { found: !1, width: 512, height: 512 };
function Xx(n, r) {
  !ym &&
    !J.showMissingIcons &&
    n &&
    console.error('Icon with name "'.concat(n, '" and prefix "').concat(r, '" is missing.'));
}
function Kl(n, r) {
  let o = r;
  return (
    r === 'fa' && J.styleDefault !== null && (r = kn()),
    new Promise((a, l) => {
      if (o === 'fa') {
        const c = Rm(n) || {};
        (n = c.iconName || n), (r = c.prefix || r);
      }
      if (n && r && kl[r] && kl[r][n]) {
        const c = kl[r][n];
        return a(ql(c));
      }
      Xx(n, r), a(z(z({}, Gx), {}, { icon: J.showMissingIcons && n ? Cn('missingIconAbstract') || {} : {} }));
    })
  );
}
const ap = () => {},
  Ql = J.measurePerformance && qo && qo.mark && qo.measure ? qo : { mark: ap, measure: ap },
  vi = 'FA "6.7.2"',
  Jx = (n) => (Ql.mark(''.concat(vi, ' ').concat(n, ' begins')), () => Mm(n)),
  Mm = (n) => {
    Ql.mark(''.concat(vi, ' ').concat(n, ' ends')),
      Ql.measure(
        ''.concat(vi, ' ').concat(n),
        ''.concat(vi, ' ').concat(n, ' begins'),
        ''.concat(vi, ' ').concat(n, ' ends')
      );
  };
var gu = { begin: Jx, end: Mm };
const Go = () => {};
function sp(n) {
  return typeof (n.getAttribute ? n.getAttribute(Bn) : null) == 'string';
}
function Zx(n) {
  const r = n.getAttribute ? n.getAttribute(lu) : null,
    o = n.getAttribute ? n.getAttribute(uu) : null;
  return r && o;
}
function ek(n) {
  return n && n.classList && n.classList.contains && n.classList.contains(J.replacementClass);
}
function tk() {
  return J.autoReplaceSvg === !0 ? Xo.replace : Xo[J.autoReplaceSvg] || Xo.replace;
}
function nk(n) {
  return Ne.createElementNS('http://www.w3.org/2000/svg', n);
}
function rk(n) {
  return Ne.createElement(n);
}
function Fm(n) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: o = n.tag === 'svg' ? nk : rk } = r;
  if (typeof n == 'string') return Ne.createTextNode(n);
  const a = o(n.tag);
  return (
    Object.keys(n.attributes || []).forEach(function (c) {
      a.setAttribute(c, n.attributes[c]);
    }),
    (n.children || []).forEach(function (c) {
      a.appendChild(Fm(c, { ceFn: o }));
    }),
    a
  );
}
function ik(n) {
  let r = ' '.concat(n.outerHTML, ' ');
  return (r = ''.concat(r, 'Font Awesome fontawesome.com ')), r;
}
const Xo = {
  replace: function (n) {
    const r = n[0];
    if (r.parentNode)
      if (
        (n[1].forEach((o) => {
          r.parentNode.insertBefore(Fm(o), r);
        }),
        r.getAttribute(Bn) === null && J.keepOriginalSource)
      ) {
        let o = Ne.createComment(ik(r));
        r.parentNode.replaceChild(o, r);
      } else r.remove();
  },
  nest: function (n) {
    const r = n[0],
      o = n[1];
    if (~fu(r).indexOf(J.replacementClass)) return Xo.replace(n);
    const a = new RegExp(''.concat(J.cssPrefix, '-.*'));
    if ((delete o[0].attributes.id, o[0].attributes.class)) {
      const c = o[0].attributes.class
        .split(' ')
        .reduce((d, m) => (m === J.replacementClass || m.match(a) ? d.toSvg.push(m) : d.toNode.push(m), d), {
          toNode: [],
          toSvg: [],
        });
      (o[0].attributes.class = c.toSvg.join(' ')),
        c.toNode.length === 0 ? r.removeAttribute('class') : r.setAttribute('class', c.toNode.join(' '));
    }
    const l = o.map((c) => Li(c)).join(`
`);
    r.setAttribute(Bn, ''), (r.innerHTML = l);
  },
};
function lp(n) {
  n();
}
function zm(n, r) {
  const o = typeof r == 'function' ? r : Go;
  if (n.length === 0) o();
  else {
    let a = lp;
    J.mutateApproach === sx && (a = xn.requestAnimationFrame || lp),
      a(() => {
        const l = tk(),
          c = gu.begin('mutate');
        n.map(l), c(), o();
      });
  }
}
let vu = !1;
function jm() {
  vu = !0;
}
function Gl() {
  vu = !1;
}
let oa = null;
function up(n) {
  if (!Qd || !J.observeMutations) return;
  const {
    treeCallback: r = Go,
    nodeCallback: o = Go,
    pseudoElementsCallback: a = Go,
    observeMutationsRoot: l = Ne,
  } = n;
  (oa = new Qd((c) => {
    if (vu) return;
    const d = kn();
    br(c).forEach((m) => {
      if (
        (m.type === 'childList' &&
          m.addedNodes.length > 0 &&
          !sp(m.addedNodes[0]) &&
          (J.searchPseudoElements && a(m.target), r(m.target)),
        m.type === 'attributes' && m.target.parentNode && J.searchPseudoElements && a(m.target.parentNode),
        m.type === 'attributes' && sp(m.target) && ~px.indexOf(m.attributeName))
      )
        if (m.attributeName === 'class' && Zx(m.target)) {
          const { prefix: h, iconName: g } = ma(fu(m.target));
          m.target.setAttribute(lu, h || d), g && m.target.setAttribute(uu, g);
        } else ek(m.target) && o(m.target);
    });
  })),
    Xt && oa.observe(l, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
}
function ok() {
  oa && oa.disconnect();
}
function ak(n) {
  const r = n.getAttribute('style');
  let o = [];
  return (
    r &&
      (o = r.split(';').reduce((a, l) => {
        const c = l.split(':'),
          d = c[0],
          m = c.slice(1);
        return d && m.length > 0 && (a[d] = m.join(':').trim()), a;
      }, {})),
    o
  );
}
function sk(n) {
  const r = n.getAttribute('data-prefix'),
    o = n.getAttribute('data-icon'),
    a = n.innerText !== void 0 ? n.innerText.trim() : '';
  let l = ma(fu(n));
  return (
    l.prefix || (l.prefix = kn()),
    r && o && ((l.prefix = r), (l.iconName = o)),
    (l.iconName && l.prefix) ||
      (l.prefix && a.length > 0 && (l.iconName = _x(l.prefix, n.innerText) || mu(l.prefix, Bl(n.innerText))),
      !l.iconName &&
        J.autoFetchSvg &&
        n.firstChild &&
        n.firstChild.nodeType === Node.TEXT_NODE &&
        (l.iconName = n.firstChild.data)),
    l
  );
}
function lk(n) {
  const r = br(n.attributes).reduce(
      (l, c) => (l.name !== 'class' && l.name !== 'style' && (l[c.name] = c.value), l),
      {}
    ),
    o = n.getAttribute('title'),
    a = n.getAttribute('data-fa-title-id');
  return (
    J.autoA11y &&
      (o
        ? (r['aria-labelledby'] = ''.concat(J.replacementClass, '-title-').concat(a || Ci()))
        : ((r['aria-hidden'] = 'true'), (r.focusable = 'false'))),
    r
  );
}
function uk() {
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
function cp(n) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 };
  const { iconName: o, prefix: a, rest: l } = sk(n),
    c = lk(n),
    d = Hl('parseNodeAttributes', {}, n);
  let m = r.styleParser ? ak(n) : [];
  return z(
    {
      iconName: o,
      title: n.getAttribute('title'),
      titleId: n.getAttribute('data-fa-title-id'),
      prefix: a,
      transform: Ft,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: l, styles: m, attributes: c },
    },
    d
  );
}
const { styles: ck } = zt;
function $m(n) {
  const r = J.autoReplaceSvg === 'nest' ? cp(n, { styleParser: !1 }) : cp(n);
  return ~r.extra.classes.indexOf(Sm) ? Cn('generateLayersText', n, r) : Cn('generateSvgReplacementMutation', n, r);
}
function fk() {
  return [...HS, ...Fl];
}
function fp(n) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Xt) return Promise.resolve();
  const o = Ne.documentElement.classList,
    a = (v) => o.add(''.concat(Jd, '-').concat(v)),
    l = (v) => o.remove(''.concat(Jd, '-').concat(v)),
    c = J.autoFetchSvg ? fk() : pm.concat(Object.keys(ck));
  c.includes('fa') || c.push('fa');
  const d = ['.'.concat(Sm, ':not([').concat(Bn, '])')]
    .concat(c.map((v) => '.'.concat(v, ':not([').concat(Bn, '])')))
    .join(', ');
  if (d.length === 0) return Promise.resolve();
  let m = [];
  try {
    m = br(n.querySelectorAll(d));
  } catch {}
  if (m.length > 0) a('pending'), l('complete');
  else return Promise.resolve();
  const h = gu.begin('onTree'),
    g = m.reduce((v, S) => {
      try {
        const w = $m(S);
        w && v.push(w);
      } catch (w) {
        ym || (w.name === 'MissingIcon' && console.error(w));
      }
      return v;
    }, []);
  return new Promise((v, S) => {
    Promise.all(g)
      .then((w) => {
        zm(w, () => {
          a('active'), a('complete'), l('pending'), typeof r == 'function' && r(), h(), v();
        });
      })
      .catch((w) => {
        h(), S(w);
      });
  });
}
function dk(n) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  $m(n).then((o) => {
    o && zm([o], r);
  });
}
function pk(n) {
  return function (r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (r || {}).icon ? r : Yl(r || {});
    let { mask: l } = o;
    return l && (l = (l || {}).icon ? l : Yl(l || {})), n(a, z(z({}, o), {}, { mask: l }));
  };
}
const mk = function (n) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: o = Ft,
    symbol: a = !1,
    mask: l = null,
    maskId: c = null,
    title: d = null,
    titleId: m = null,
    classes: h = [],
    attributes: g = {},
    styles: v = {},
  } = r;
  if (!n) return;
  const { prefix: S, iconName: w, icon: O } = n;
  return ha(
    z({ type: 'icon' }, n),
    () => (
      Wn('beforeDOMElementCreation', { iconDefinition: n, params: r }),
      J.autoA11y &&
        (d
          ? (g['aria-labelledby'] = ''.concat(J.replacementClass, '-title-').concat(m || Ci()))
          : ((g['aria-hidden'] = 'true'), (g.focusable = 'false'))),
      hu({
        icons: { main: ql(O), mask: l ? ql(l.icon) : { found: !1, width: null, height: null, icon: {} } },
        prefix: S,
        iconName: w,
        transform: z(z({}, Ft), o),
        symbol: a,
        title: d,
        maskId: c,
        titleId: m,
        extra: { attributes: g, styles: v, classes: h },
      })
    )
  );
};
var hk = {
    mixout() {
      return { icon: pk(mk) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(n) {
          return (n.treeCallback = fp), (n.nodeCallback = dk), n;
        },
      };
    },
    provides(n) {
      (n.i2svg = function (r) {
        const { node: o = Ne, callback: a = () => {} } = r;
        return fp(o, a);
      }),
        (n.generateSvgReplacementMutation = function (r, o) {
          const {
            iconName: a,
            title: l,
            titleId: c,
            prefix: d,
            transform: m,
            symbol: h,
            mask: g,
            maskId: v,
            extra: S,
          } = o;
          return new Promise((w, O) => {
            Promise.all([
              Kl(a, d),
              g.iconName ? Kl(g.iconName, g.prefix) : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
            ])
              .then((L) => {
                let [E, T] = L;
                w([
                  r,
                  hu({
                    icons: { main: E, mask: T },
                    prefix: d,
                    iconName: a,
                    transform: m,
                    symbol: h,
                    maskId: v,
                    title: l,
                    titleId: c,
                    extra: S,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(O);
          });
        }),
        (n.generateAbstractIcon = function (r) {
          let { children: o, attributes: a, main: l, transform: c, styles: d } = r;
          const m = da(d);
          m.length > 0 && (a.style = m);
          let h;
          return (
            du(c) &&
              (h = Cn('generateAbstractTransformGrouping', {
                main: l,
                transform: c,
                containerWidth: l.width,
                iconWidth: l.width,
              })),
            o.push(h || l.icon),
            { children: o, attributes: a }
          );
        });
    },
  },
  gk = {
    mixout() {
      return {
        layer(n) {
          let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: o = [] } = r;
          return ha({ type: 'layer' }, () => {
            Wn('beforeDOMElementCreation', { assembler: n, params: r });
            let a = [];
            return (
              n((l) => {
                Array.isArray(l)
                  ? l.map((c) => {
                      a = a.concat(c.abstract);
                    })
                  : (a = a.concat(l.abstract));
              }),
              [{ tag: 'span', attributes: { class: [''.concat(J.cssPrefix, '-layers'), ...o].join(' ') }, children: a }]
            );
          });
        },
      };
    },
  },
  vk = {
    mixout() {
      return {
        counter(n) {
          let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { title: o = null, classes: a = [], attributes: l = {}, styles: c = {} } = r;
          return ha(
            { type: 'counter', content: n },
            () => (
              Wn('beforeDOMElementCreation', { content: n, params: r }),
              Qx({
                content: n.toString(),
                title: o,
                extra: { attributes: l, styles: c, classes: [''.concat(J.cssPrefix, '-layers-counter'), ...a] },
              })
            )
          );
        },
      };
    },
  },
  yk = {
    mixout() {
      return {
        text(n) {
          let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { transform: o = Ft, title: a = null, classes: l = [], attributes: c = {}, styles: d = {} } = r;
          return ha(
            { type: 'text', content: n },
            () => (
              Wn('beforeDOMElementCreation', { content: n, params: r }),
              op({
                content: n,
                transform: z(z({}, Ft), o),
                title: a,
                extra: { attributes: c, styles: d, classes: [''.concat(J.cssPrefix, '-layers-text'), ...l] },
              })
            )
          );
        },
      };
    },
    provides(n) {
      n.generateLayersText = function (r, o) {
        const { title: a, transform: l, extra: c } = o;
        let d = null,
          m = null;
        if (fm) {
          const h = parseInt(getComputedStyle(r).fontSize, 10),
            g = r.getBoundingClientRect();
          (d = g.width / h), (m = g.height / h);
        }
        return (
          J.autoA11y && !a && (c.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            r,
            op({ content: r.innerHTML, width: d, height: m, transform: l, title: a, extra: c, watchable: !0 }),
          ])
        );
      };
    },
  };
const wk = new RegExp('"', 'ug'),
  dp = [1105920, 1112319],
  pp = z(z(z(z({}, { FontAwesome: { normal: 'fas', 400: 'fas' } }), VS), ox), JS),
  Xl = Object.keys(pp).reduce((n, r) => ((n[r.toLowerCase()] = pp[r]), n), {}),
  Sk = Object.keys(Xl).reduce((n, r) => {
    const o = Xl[r];
    return (n[r] = o[900] || [...Object.entries(o)][0][1]), n;
  }, {});
function xk(n) {
  const r = n.replace(wk, ''),
    o = Ox(r, 0),
    a = o >= dp[0] && o <= dp[1],
    l = r.length === 2 ? r[0] === r[1] : !1;
  return { value: Bl(l ? r[0] : r), isSecondary: a || l };
}
function kk(n, r) {
  const o = n.replace(/^['"]|['"]$/g, '').toLowerCase(),
    a = parseInt(r),
    l = isNaN(a) ? 'normal' : a;
  return (Xl[o] || {})[l] || Sk[o];
}
function mp(n, r) {
  const o = ''.concat(ax).concat(r.replace(':', '-'));
  return new Promise((a, l) => {
    if (n.getAttribute(o) !== null) return a();
    const d = br(n.children).filter((w) => w.getAttribute(jl) === r)[0],
      m = xn.getComputedStyle(n, r),
      h = m.getPropertyValue('font-family'),
      g = h.match(fx),
      v = m.getPropertyValue('font-weight'),
      S = m.getPropertyValue('content');
    if (d && !g) return n.removeChild(d), a();
    if (g && S !== 'none' && S !== '') {
      const w = m.getPropertyValue('content');
      let O = kk(h, v);
      const { value: L, isSecondary: E } = xk(w),
        T = g[0].startsWith('FontAwesome');
      let B = mu(O, L),
        A = B;
      if (T) {
        const j = Rx(L);
        j.iconName && j.prefix && ((B = j.iconName), (O = j.prefix));
      }
      if (B && !E && (!d || d.getAttribute(lu) !== O || d.getAttribute(uu) !== A)) {
        n.setAttribute(o, A), d && n.removeChild(d);
        const j = uk(),
          { extra: V } = j;
        (V.attributes[jl] = r),
          Kl(B, O)
            .then((_) => {
              const Z = hu(
                  z(z({}, j), {}, { icons: { main: _, mask: Dm() }, prefix: O, iconName: A, extra: V, watchable: !0 })
                ),
                ne = Ne.createElementNS('http://www.w3.org/2000/svg', 'svg');
              r === '::before' ? n.insertBefore(ne, n.firstChild) : n.appendChild(ne),
                (ne.outerHTML = Z.map((ie) => Li(ie)).join(`
`)),
                n.removeAttribute(o),
                a();
            })
            .catch(l);
      } else a();
    } else a();
  });
}
function Ck(n) {
  return Promise.all([mp(n, '::before'), mp(n, '::after')]);
}
function Pk(n) {
  return (
    n.parentNode !== document.head &&
    !~lx.indexOf(n.tagName.toUpperCase()) &&
    !n.getAttribute(jl) &&
    (!n.parentNode || n.parentNode.tagName !== 'svg')
  );
}
function hp(n) {
  if (Xt)
    return new Promise((r, o) => {
      const a = br(n.querySelectorAll('*')).filter(Pk).map(Ck),
        l = gu.begin('searchPseudoElements');
      jm(),
        Promise.all(a)
          .then(() => {
            l(), Gl(), r();
          })
          .catch(() => {
            l(), Gl(), o();
          });
    });
}
var Ek = {
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return (n.pseudoElementsCallback = hp), n;
      },
    };
  },
  provides(n) {
    n.pseudoElements2svg = function (r) {
      const { node: o = Ne } = r;
      J.searchPseudoElements && hp(o);
    };
  },
};
let gp = !1;
var bk = {
  mixout() {
    return {
      dom: {
        unwatch() {
          jm(), (gp = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        up(Hl('mutationObserverCallbacks', {}));
      },
      noAuto() {
        ok();
      },
      watch(n) {
        const { observeMutationsRoot: r } = n;
        gp ? Gl() : up(Hl('mutationObserverCallbacks', { observeMutationsRoot: r }));
      },
    };
  },
};
const vp = (n) => {
  let r = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return n
    .toLowerCase()
    .split(' ')
    .reduce((o, a) => {
      const l = a.toLowerCase().split('-'),
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
    }, r);
};
var Ok = {
  mixout() {
    return { parse: { transform: (n) => vp(n) } };
  },
  hooks() {
    return {
      parseNodeAttributes(n, r) {
        const o = r.getAttribute('data-fa-transform');
        return o && (n.transform = vp(o)), n;
      },
    };
  },
  provides(n) {
    n.generateAbstractTransformGrouping = function (r) {
      let { main: o, transform: a, containerWidth: l, iconWidth: c } = r;
      const d = { transform: 'translate('.concat(l / 2, ' 256)') },
        m = 'translate('.concat(a.x * 32, ', ').concat(a.y * 32, ') '),
        h = 'scale('.concat((a.size / 16) * (a.flipX ? -1 : 1), ', ').concat((a.size / 16) * (a.flipY ? -1 : 1), ') '),
        g = 'rotate('.concat(a.rotate, ' 0 0)'),
        v = { transform: ''.concat(m, ' ').concat(h, ' ').concat(g) },
        S = { transform: 'translate('.concat((c / 2) * -1, ' -256)') },
        w = { outer: d, inner: v, path: S };
      return {
        tag: 'g',
        attributes: z({}, w.outer),
        children: [
          {
            tag: 'g',
            attributes: z({}, w.inner),
            children: [{ tag: o.icon.tag, children: o.icon.children, attributes: z(z({}, o.icon.attributes), w.path) }],
          },
        ],
      };
    };
  },
};
const Cl = { x: 0, y: 0, width: '100%', height: '100%' };
function yp(n) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.attributes && (n.attributes.fill || r) && (n.attributes.fill = 'black'), n;
}
function Nk(n) {
  return n.tag === 'g' ? n.children : [n];
}
var Tk = {
    hooks() {
      return {
        parseNodeAttributes(n, r) {
          const o = r.getAttribute('data-fa-mask'),
            a = o ? ma(o.split(' ').map((l) => l.trim())) : Dm();
          return a.prefix || (a.prefix = kn()), (n.mask = a), (n.maskId = r.getAttribute('data-fa-mask-id')), n;
        },
      };
    },
    provides(n) {
      n.generateAbstractMask = function (r) {
        let { children: o, attributes: a, main: l, mask: c, maskId: d, transform: m } = r;
        const { width: h, icon: g } = l,
          { width: v, icon: S } = c,
          w = xx({ transform: m, containerWidth: v, iconWidth: h }),
          O = { tag: 'rect', attributes: z(z({}, Cl), {}, { fill: 'white' }) },
          L = g.children ? { children: g.children.map(yp) } : {},
          E = {
            tag: 'g',
            attributes: z({}, w.inner),
            children: [yp(z({ tag: g.tag, attributes: z(z({}, g.attributes), w.path) }, L))],
          },
          T = { tag: 'g', attributes: z({}, w.outer), children: [E] },
          B = 'mask-'.concat(d || Ci()),
          A = 'clip-'.concat(d || Ci()),
          j = {
            tag: 'mask',
            attributes: z(z({}, Cl), {}, { id: B, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }),
            children: [O, T],
          },
          V = { tag: 'defs', children: [{ tag: 'clipPath', attributes: { id: A }, children: Nk(S) }, j] };
        return (
          o.push(V, {
            tag: 'rect',
            attributes: z(
              { fill: 'currentColor', 'clip-path': 'url(#'.concat(A, ')'), mask: 'url(#'.concat(B, ')') },
              Cl
            ),
          }),
          { children: o, attributes: a }
        );
      };
    },
  },
  Lk = {
    provides(n) {
      let r = !1;
      xn.matchMedia && (r = xn.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (n.missingIconAbstract = function () {
          const o = [],
            a = { fill: 'currentColor' },
            l = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          o.push({
            tag: 'path',
            attributes: z(
              z({}, a),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              }
            ),
          });
          const c = z(z({}, l), {}, { attributeName: 'opacity' }),
            d = { tag: 'circle', attributes: z(z({}, a), {}, { cx: '256', cy: '364', r: '28' }), children: [] };
          return (
            r ||
              d.children.push(
                { tag: 'animate', attributes: z(z({}, l), {}, { attributeName: 'r', values: '28;14;28;28;14;28;' }) },
                { tag: 'animate', attributes: z(z({}, c), {}, { values: '1;0;1;1;0;1;' }) }
              ),
            o.push(d),
            o.push({
              tag: 'path',
              attributes: z(
                z({}, a),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                }
              ),
              children: r ? [] : [{ tag: 'animate', attributes: z(z({}, c), {}, { values: '1;0;0;0;0;1;' }) }],
            }),
            r ||
              o.push({
                tag: 'path',
                attributes: z(
                  z({}, a),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                  }
                ),
                children: [{ tag: 'animate', attributes: z(z({}, c), {}, { values: '0;0;1;1;0;0;' }) }],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: o }
          );
        });
    },
  },
  Ik = {
    hooks() {
      return {
        parseNodeAttributes(n, r) {
          const o = r.getAttribute('data-fa-symbol'),
            a = o === null ? !1 : o === '' ? !0 : o;
          return (n.symbol = a), n;
        },
      };
    },
  },
  _k = [Px, hk, gk, vk, yk, Ek, bk, Ok, Tk, Lk, Ik];
Vx(_k, { mixoutsTo: ht });
ht.noAuto;
ht.config;
ht.library;
ht.dom;
const Jl = ht.parse;
ht.findIconDefinition;
ht.toHtml;
const Rk = ht.icon;
ht.layer;
ht.text;
ht.counter;
var Pl = { exports: {} },
  El,
  wp;
function Dk() {
  if (wp) return El;
  wp = 1;
  var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return (El = n), El;
}
var bl, Sp;
function Ak() {
  if (Sp) return bl;
  Sp = 1;
  var n = Dk();
  function r() {}
  function o() {}
  return (
    (o.resetWarningCache = r),
    (bl = function () {
      function a(d, m, h, g, v, S) {
        if (S !== n) {
          var w = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((w.name = 'Invariant Violation'), w);
        }
      }
      a.isRequired = a;
      function l() {
        return a;
      }
      var c = {
        array: a,
        bigint: a,
        bool: a,
        func: a,
        number: a,
        object: a,
        string: a,
        symbol: a,
        any: a,
        arrayOf: l,
        element: a,
        elementType: a,
        instanceOf: l,
        node: a,
        objectOf: l,
        oneOf: l,
        oneOfType: l,
        shape: l,
        exact: l,
        checkPropTypes: o,
        resetWarningCache: r,
      };
      return (c.PropTypes = c), c;
    }),
    bl
  );
}
var xp;
function Mk() {
  return xp || ((xp = 1), (Pl.exports = Ak()())), Pl.exports;
}
var Fk = Mk();
const ce = la(Fk);
function kp(n, r) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    r &&
      (a = a.filter(function (l) {
        return Object.getOwnPropertyDescriptor(n, l).enumerable;
      })),
      o.push.apply(o, a);
  }
  return o;
}
function At(n) {
  for (var r = 1; r < arguments.length; r++) {
    var o = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? kp(Object(o), !0).forEach(function (a) {
          Cr(n, a, o[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
      : kp(Object(o)).forEach(function (a) {
          Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(o, a));
        });
  }
  return n;
}
function aa(n) {
  '@babel/helpers - typeof';
  return (
    (aa =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r && typeof Symbol == 'function' && r.constructor === Symbol && r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    aa(n)
  );
}
function Cr(n, r, o) {
  return (
    r in n ? Object.defineProperty(n, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (n[r] = o), n
  );
}
function zk(n, r) {
  if (n == null) return {};
  var o = {},
    a = Object.keys(n),
    l,
    c;
  for (c = 0; c < a.length; c++) (l = a[c]), !(r.indexOf(l) >= 0) && (o[l] = n[l]);
  return o;
}
function jk(n, r) {
  if (n == null) return {};
  var o = zk(n, r),
    a,
    l;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (l = 0; l < c.length; l++)
      (a = c[l]), !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(n, a) && (o[a] = n[a]);
  }
  return o;
}
function Zl(n) {
  return $k(n) || Uk(n) || Vk(n) || Bk();
}
function $k(n) {
  if (Array.isArray(n)) return eu(n);
}
function Uk(n) {
  if ((typeof Symbol < 'u' && n[Symbol.iterator] != null) || n['@@iterator'] != null) return Array.from(n);
}
function Vk(n, r) {
  if (n) {
    if (typeof n == 'string') return eu(n, r);
    var o = Object.prototype.toString.call(n).slice(8, -1);
    if ((o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')) return Array.from(n);
    if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return eu(n, r);
  }
}
function eu(n, r) {
  (r == null || r > n.length) && (r = n.length);
  for (var o = 0, a = new Array(r); o < r; o++) a[o] = n[o];
  return a;
}
function Bk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wk(n) {
  var r,
    o = n.beat,
    a = n.fade,
    l = n.beatFade,
    c = n.bounce,
    d = n.shake,
    m = n.flash,
    h = n.spin,
    g = n.spinPulse,
    v = n.spinReverse,
    S = n.pulse,
    w = n.fixedWidth,
    O = n.inverse,
    L = n.border,
    E = n.listItem,
    T = n.flip,
    B = n.size,
    A = n.rotation,
    j = n.pull,
    V =
      ((r = {
        'fa-beat': o,
        'fa-fade': a,
        'fa-beat-fade': l,
        'fa-bounce': c,
        'fa-shake': d,
        'fa-flash': m,
        'fa-spin': h,
        'fa-spin-reverse': v,
        'fa-spin-pulse': g,
        'fa-pulse': S,
        'fa-fw': w,
        'fa-inverse': O,
        'fa-border': L,
        'fa-li': E,
        'fa-flip': T === !0,
        'fa-flip-horizontal': T === 'horizontal' || T === 'both',
        'fa-flip-vertical': T === 'vertical' || T === 'both',
      }),
      Cr(r, 'fa-'.concat(B), typeof B < 'u' && B !== null),
      Cr(r, 'fa-rotate-'.concat(A), typeof A < 'u' && A !== null && A !== 0),
      Cr(r, 'fa-pull-'.concat(j), typeof j < 'u' && j !== null),
      Cr(r, 'fa-swap-opacity', n.swapOpacity),
      r);
  return Object.keys(V)
    .map(function (_) {
      return V[_] ? _ : null;
    })
    .filter(function (_) {
      return _;
    });
}
function Hk(n) {
  return (n = n - 0), n === n;
}
function Um(n) {
  return Hk(n)
    ? n
    : ((n = n.replace(/[\-_\s]+(.)?/g, function (r, o) {
        return o ? o.toUpperCase() : '';
      })),
      n.substr(0, 1).toLowerCase() + n.substr(1));
}
var Yk = ['style'];
function qk(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Kk(n) {
  return n
    .split(';')
    .map(function (r) {
      return r.trim();
    })
    .filter(function (r) {
      return r;
    })
    .reduce(function (r, o) {
      var a = o.indexOf(':'),
        l = Um(o.slice(0, a)),
        c = o.slice(a + 1).trim();
      return l.startsWith('webkit') ? (r[qk(l)] = c) : (r[l] = c), r;
    }, {});
}
function Vm(n, r) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof r == 'string') return r;
  var a = (r.children || []).map(function (h) {
      return Vm(n, h);
    }),
    l = Object.keys(r.attributes || {}).reduce(
      function (h, g) {
        var v = r.attributes[g];
        switch (g) {
          case 'class':
            (h.attrs.className = v), delete r.attributes.class;
            break;
          case 'style':
            h.attrs.style = Kk(v);
            break;
          default:
            g.indexOf('aria-') === 0 || g.indexOf('data-') === 0
              ? (h.attrs[g.toLowerCase()] = v)
              : (h.attrs[Um(g)] = v);
        }
        return h;
      },
      { attrs: {} }
    ),
    c = o.style,
    d = c === void 0 ? {} : c,
    m = jk(o, Yk);
  return (l.attrs.style = At(At({}, l.attrs.style), d)), n.apply(void 0, [r.tag, At(At({}, l.attrs), m)].concat(Zl(a)));
}
var Bm = !1;
try {
  Bm = !0;
} catch {}
function Qk() {
  if (!Bm && console && typeof console.error == 'function') {
    var n;
    (n = console).error.apply(n, arguments);
  }
}
function Cp(n) {
  if (n && aa(n) === 'object' && n.prefix && n.iconName && n.icon) return n;
  if (Jl.icon) return Jl.icon(n);
  if (n === null) return null;
  if (n && aa(n) === 'object' && n.prefix && n.iconName) return n;
  if (Array.isArray(n) && n.length === 2) return { prefix: n[0], iconName: n[1] };
  if (typeof n == 'string') return { prefix: 'fas', iconName: n };
}
function Ol(n, r) {
  return (Array.isArray(r) && r.length > 0) || (!Array.isArray(r) && r) ? Cr({}, n, r) : {};
}
var Pp = {
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
  yu = ua.forwardRef(function (n, r) {
    var o = At(At({}, Pp), n),
      a = o.icon,
      l = o.mask,
      c = o.symbol,
      d = o.className,
      m = o.title,
      h = o.titleId,
      g = o.maskId,
      v = Cp(a),
      S = Ol('classes', [].concat(Zl(Wk(o)), Zl((d || '').split(' ')))),
      w = Ol('transform', typeof o.transform == 'string' ? Jl.transform(o.transform) : o.transform),
      O = Ol('mask', Cp(l)),
      L = Rk(v, At(At(At(At({}, S), w), O), {}, { symbol: c, title: m, titleId: h, maskId: g }));
    if (!L) return Qk('Could not find icon', v), null;
    var E = L.abstract,
      T = { ref: r };
    return (
      Object.keys(o).forEach(function (B) {
        Pp.hasOwnProperty(B) || (T[B] = o[B]);
      }),
      Gk(E[0], T)
    );
  });
yu.displayName = 'FontAwesomeIcon';
yu.propTypes = {
  beat: ce.bool,
  border: ce.bool,
  beatFade: ce.bool,
  bounce: ce.bool,
  className: ce.string,
  fade: ce.bool,
  flash: ce.bool,
  mask: ce.oneOfType([ce.object, ce.array, ce.string]),
  maskId: ce.string,
  fixedWidth: ce.bool,
  inverse: ce.bool,
  flip: ce.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: ce.oneOfType([ce.object, ce.array, ce.string]),
  listItem: ce.bool,
  pull: ce.oneOf(['right', 'left']),
  pulse: ce.bool,
  rotation: ce.oneOf([0, 90, 180, 270]),
  shake: ce.bool,
  size: ce.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: ce.bool,
  spinPulse: ce.bool,
  spinReverse: ce.bool,
  symbol: ce.oneOfType([ce.bool, ce.string]),
  title: ce.string,
  titleId: ce.string,
  transform: ce.oneOfType([ce.string, ce.object]),
  swapOpacity: ce.bool,
};
var Gk = Vm.bind(null, ua.createElement),
  Nl = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var Ep;
function Xk() {
  return (
    Ep ||
      ((Ep = 1),
      (function (n) {
        (function () {
          var r = {}.hasOwnProperty;
          function o() {
            for (var c = '', d = 0; d < arguments.length; d++) {
              var m = arguments[d];
              m && (c = l(c, a(m)));
            }
            return c;
          }
          function a(c) {
            if (typeof c == 'string' || typeof c == 'number') return c;
            if (typeof c != 'object') return '';
            if (Array.isArray(c)) return o.apply(null, c);
            if (c.toString !== Object.prototype.toString && !c.toString.toString().includes('[native code]'))
              return c.toString();
            var d = '';
            for (var m in c) r.call(c, m) && c[m] && (d = l(d, m));
            return d;
          }
          function l(c, d) {
            return d ? (c ? c + ' ' + d : c + d) : c;
          }
          n.exports ? ((o.default = o), (n.exports = o)) : (window.classNames = o);
        })();
      })(Nl)),
    Nl.exports
  );
}
var Jk = Xk();
const Zk = la(Jk);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ const e2 = {
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
  PC = {
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
  $e = ({ size: n, inModal: r }) => {
    const { i18n: o } = au(['common']),
      a = o.language;
    return Y.jsxs('div', {
      className: Zk(n ? `gnb-spinner-${n}` : 'gnb-spinner', r ? 'in-modal' : 'loading-page'),
      role: 'status',
      children: [
        Y.jsx(yu, { icon: e2, className: 'fa-spin', 'aria-labelledby': 'spinner-description' }),
        Y.jsx('span', {
          className: 'sr-only',
          id: 'spinner-description',
          children: a === 'fr-CA' ? 'Chargement...' : 'Loading...',
        }),
      ],
    });
  },
  t2 = {
    driverlicenceNumber: '',
    issuanceDateYear: '',
    issuanceDateMonth: '',
    issuanceDateDay: '',
    postalCode: '',
    reCaptchaChecked: !1,
  },
  n2 = { firstName: '', lastName: '', telephone: '', email: '', customerPermissionChecked: !1 },
  r2 = {
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
        driverLicenceDetailsStates: t2,
        handleDriverlicenceNumberChange: () => {},
        handleIssuanceDateYearChange: () => {},
        handleIssuanceDateMonthChange: () => {},
        handleIssuanceDateDayChange: () => {},
        handlePostalCodeChange: () => {},
        handleReCaptchaCheckboxChange: () => {},
      },
      certification: { isChecked: !1, handleCheckboxChange: () => {} },
      contactInformation: {
        contactInformationFormStates: n2,
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
  wu = I.createContext(r2),
  EC = 50,
  bC = 50,
  OC = 12,
  NC = 50,
  TC = 'temporary-drivers-licence.pdf',
  LC = 'permis-de-conduire-temporaire.pdf',
  IC = 1200,
  _C = 60,
  RC = 10,
  DC = 5e3,
  AC = 2e3;
var tu = ((n) => ((n.DLR = 'driversLicenceRenewal'), (n.TDL = 'tempDriversLicence'), n))(tu || {});
const bp = I.lazy(() => jt(() => import('./DefaultPage-BxLOqI7N.js'), __vite__mapDeps([0, 1, 2, 3, 4]))),
  Op = I.lazy(() =>
    jt(() => import('./AboutTheServicePage-Dz-I7EXH.js'), __vite__mapDeps([5, 6, 7, 8, 1, 9, 10, 11, 12]))
  ),
  Np = I.lazy(() =>
    jt(() => import('./EligibilityPage-BG45Y7Bp.js'), __vite__mapDeps([13, 1, 9, 6, 7, 11, 14, 15, 12, 16]))
  ),
  Tp = I.lazy(() =>
    jt(
      () => import('./DriverLicenceDetailsPage-C4YUk9OO.js'),
      __vite__mapDeps([17, 14, 6, 7, 15, 1, 11, 18, 9, 19, 20, 21, 22, 23, 3, 12, 24])
    )
  ),
  Lp = I.lazy(() =>
    jt(() => import('./CertificationPage-BzB53SWS.js'), __vite__mapDeps([25, 11, 8, 1, 9, 10, 14, 6, 7, 15, 3, 12]))
  ),
  Ip = I.lazy(() =>
    jt(
      () => import('./ContactInformationPage-BBa7EglX.js'),
      __vite__mapDeps([26, 18, 1, 9, 19, 14, 6, 7, 15, 20, 21, 8, 10, 11, 3, 27, 2, 12])
    )
  ),
  _p = I.lazy(() =>
    jt(
      () => import('./PaymentConfirmationPage-BJR9jjEg.js'),
      __vite__mapDeps([28, 6, 7, 3, 27, 11, 1, 29, 19, 14, 15, 20, 30, 2, 12, 31])
    )
  ),
  Rp = I.lazy(() =>
    jt(() => import('./TemporaryDriversLicencePage-CrzaiXUY.js'), __vite__mapDeps([32, 33, 14, 6, 7, 15, 1, 12]))
  ),
  Dp = I.lazy(() =>
    jt(
      () => import('./TemporaryDriversLicenceRequestPage-ozNSZELp.js'),
      __vite__mapDeps([34, 14, 6, 7, 15, 1, 18, 9, 19, 20, 21, 22, 23, 3, 33, 29, 30, 12, 24])
    )
  ),
  i2 = I.lazy(() => jt(() => import('./index-CIkjUX1B.js'), __vite__mapDeps([35, 12]))),
  o2 = () => {
    const { i18n: n } = au(['common']),
      r = Ni(),
      { state: o } = I.useContext(wu),
      { cookies: a } = o,
      { handleLanguageCookiesChange: l } = a,
      [c, d] = I.useState(tu.DLR),
      m = r.pathname;
    I.useEffect(() => {
      const g = m.split('/')[1];
      g !== n.language && (n.changeLanguage(g), l(g)),
        (m.includes('temporary-drivers-licence') || m.includes('permis-de-conduire-temporaire')) && d(tu.TDL);
    }, [m]);
    const h = [
      {
        path: 'en',
        element: Y.jsx(I.Suspense, {
          fallback: Y.jsx($e, { size: 'lg', inModal: !0 }),
          children: Y.jsx(bp, { pageSiteLayout: c }),
        }),
        children: [
          {
            path: '',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Op, {}) }),
          },
          {
            path: 'eligibility',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Np, {}) }),
          },
          {
            path: 'driver-licence-details',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Tp, {}) }),
          },
          {
            path: 'certification',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Lp, {}) }),
          },
          {
            path: 'contact-information',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Ip, {}) }),
          },
          {
            path: 'payment-confirmation',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(_p, {}) }),
          },
          {
            path: 'temporary-drivers-licence',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Rp, {}) }),
          },
          {
            path: 'temporary-drivers-licence-request',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Dp, {}) }),
          },
        ],
      },
      {
        path: 'fr',
        element: Y.jsx(I.Suspense, {
          fallback: Y.jsx($e, { size: 'lg', inModal: !0 }),
          children: Y.jsx(bp, { pageSiteLayout: c }),
        }),
        children: [
          {
            path: '',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Op, {}) }),
          },
          {
            path: 'admissibilité',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Np, {}) }),
          },
          {
            path: 'détails-sur-le-permis-de-conduire',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Tp, {}) }),
          },
          {
            path: 'attestation',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Lp, {}) }),
          },
          {
            path: 'coordonnées',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Ip, {}) }),
          },
          {
            path: 'confirmation-de-paiement',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(_p, {}) }),
          },
          {
            path: 'permis-de-conduire-temporaire',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Rp, {}) }),
          },
          {
            path: 'demande-de-permis-de-conduire-temporaire',
            element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg', inModal: !0 }), children: Y.jsx(Dp, {}) }),
          },
        ],
      },
      { path: '*', element: Y.jsx(I.Suspense, { fallback: Y.jsx($e, { size: 'lg' }), children: Y.jsx(i2, {}) }) },
    ];
    return Av(h);
  },
  a2 = () => {
    const { state: n, loadState: r } = I.useContext(wu),
      { stateSaved: o, handleStateSaved: a } = n;
    return (
      I.useEffect(() => {
        if (o) sessionStorage.setItem('appState', JSON.stringify(n));
        else {
          const l = sessionStorage.getItem('appState');
          if (l) {
            const c = JSON.parse(l);
            r(c);
          }
        }
        a();
      }, [a, r, n, o]),
      Y.jsx(Y.Fragment, { children: Y.jsx(o2, {}) })
    );
  },
  MC = (n) =>
    /^[\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+([.-][\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+)*@[\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+([.-][\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+)*(\.[\wÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]{2,3})+$/.test(
      n
    ),
  FC = (n) => /(^[\w\s.,$@&’`\-'ÀÂÉÈÊÎÏÔÙÛÇàâéèêîïôùûç]+)$/.test(n),
  zC = (n) => /[0-9]{10}$/.test(n),
  s2 = (n) => {
    const r = n.trim().replace(/[^0-9]/g, '');
    return r.length < 4
      ? r
      : r.length < 7
      ? r.replace(/(\d{3})(\d{1})/, '$1-$2')
      : r.length < 11
      ? r.replace(/(\d{3})(\d{3})(\d{1})/, '$1-$2-$3')
      : r.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  },
  jC = (n) => /^[0-9]+$/.test(n) && n.length >= 4 && n.length <= 7,
  $C = (n) => /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(n),
  l2 = ({ children: n }) => {
    const { i18n: r } = au(),
      o = {
        driverlicenceNumber: '',
        issuanceDateYear: '',
        issuanceDateMonth: '',
        issuanceDateDay: '',
        postalCode: '',
        reCaptchaChecked: !1,
      },
      a = { firstName: '', lastName: '', telephone: '', email: '', customerPermissionChecked: !1 },
      [l, c] = gy(['language']),
      [d, m] = I.useState(!1),
      [h, g] = I.useState(!1),
      [v, S] = I.useState(!1),
      [w, O] = I.useState(''),
      [L, E] = I.useState(''),
      [T, B] = I.useState(!1),
      [A, j] = I.useState(''),
      [V, _] = I.useState(''),
      [Z, ne] = I.useState(o),
      [ie, me] = I.useState(a),
      [ke, Ce] = I.useState(!1);
    I.useEffect(() => {
      c('language', r.language === 'en' ? 'en' : 'fr');
    }, [r.language]);
    const ct = () => {
        m(!0);
      },
      He = () => {
        g(!0);
      },
      Fe = (re) => {
        re.aboutTheService.isChecked && G(),
          re.aboutTheService.isChecked && G(),
          re.eligibility.questionOneAnswer && O(re.eligibility.questionOneAnswer),
          re.eligibility.questionTwoAnswer && E(re.eligibility.questionTwoAnswer),
          re.certification.isChecked && R(),
          ne(re.driverLicenceDetails.driverLicenceDetailsStates),
          re.common.transactionId && j(re.common.transactionId),
          re.common.orderGuid && _(re.common.orderGuid);
      },
      Ue = () => {
        Ce(!1);
      },
      Re = () => {
        Ce(!0), Se(), sessionStorage.setItem('startTime', Date.now().toString());
      },
      Se = () => {
        S(!1), O(''), E(''), B(!1), j(''), _(''), ne(o), me(a);
      },
      U = (re) => {
        c('language', re);
      },
      G = () => {
        S(!v);
      },
      W = (re) => {
        O(re);
      },
      C = (re) => {
        E(re);
      },
      R = () => {
        B(!T);
      },
      se = (re) => {
        me(re);
      },
      le = (re) => {
        const $t = re.target.value.trim() === '' ? '' : re.target.value;
        me({ ...ie, firstName: $t });
      },
      fe = (re) => {
        const $t = re.target.value.trim() === '' ? '' : re.target.value;
        me({ ...ie, lastName: $t });
      },
      de = (re) => {
        me({ ...ie, telephone: s2(re.target.value) });
      },
      xe = (re) => {
        me({ ...ie, email: re.target.value });
      },
      ge = () => {
        me({ ...ie, customerPermissionChecked: !ie.customerPermissionChecked });
      },
      Pe = (re) => {
        ne({ ...Z, driverlicenceNumber: re.target.value });
      },
      tt = (re) => {
        ne({ ...Z, issuanceDateYear: re.target.value.replace(/[^0-9]/g, '') });
      },
      Yn = (re) => {
        ne({ ...Z, issuanceDateMonth: re.target.value.replace(/[^0-9]/g, '') });
      },
      Ii = (re) => {
        ne({ ...Z, issuanceDateDay: re.target.value.replace(/[^0-9]/g, '') });
      },
      qn = (re) => {
        ne({ ...Z, postalCode: re.target.value });
      },
      Or = (re) => {
        ne({ ...Z, reCaptchaChecked: re });
      },
      _i = (re) => {
        j(re);
      },
      Ri = (re) => {
        _(re);
      },
      Nr = {
        stateSaved: d,
        recaptchaBypass: h,
        handleRecaptchaBypass: He,
        handleStateSaved: ct,
        sessionExpired: ke,
        startState: Ue,
        resetState: Re,
        resetForm: Se,
        cookies: { languageCookies: l.language, handleLanguageCookiesChange: U },
        aboutTheService: { isChecked: v, handleCheckboxChange: G },
        eligibility: {
          questionOneAnswer: w,
          questionTwoAnswer: L,
          handleRadioChangeQuestionOne: W,
          handleRadioChangeQuestionTwo: C,
        },
        driverLicenceDetails: {
          driverLicenceDetailsStates: Z,
          handleDriverlicenceNumberChange: Pe,
          handleIssuanceDateYearChange: tt,
          handleIssuanceDateMonthChange: Yn,
          handleIssuanceDateDayChange: Ii,
          handlePostalCodeChange: qn,
          handleReCaptchaCheckboxChange: Or,
        },
        certification: { isChecked: T, handleCheckboxChange: R },
        contactInformation: {
          contactInformationFormStates: ie,
          handleFirstNameInputChange: le,
          handleLastNameInputChange: fe,
          handleTelephoneInputChange: de,
          handleEmailInputChange: xe,
          handleCheckboxChange: ge,
          setInitialContactInfoStates: se,
        },
        common: { transactionId: A, updateTransactionId: _i, orderGuid: V, updateOrderGuid: Ri },
      },
      Di = { loadState: Fe, state: Nr };
    return Y.jsx(wu.Provider, { value: Di, children: n });
  },
  Wm = 6048e5,
  u2 = 864e5,
  Ap = Symbol.for('constructDateFrom');
function Pn(n, r) {
  return typeof n == 'function'
    ? n(r)
    : n && typeof n == 'object' && Ap in n
    ? n[Ap](r)
    : n instanceof Date
    ? new n.constructor(r)
    : new Date(r);
}
function Tt(n, r) {
  return Pn(r || n, n);
}
let c2 = {};
function ga() {
  return c2;
}
function Ei(n, r) {
  var m, h, g, v;
  const o = ga(),
    a =
      (r == null ? void 0 : r.weekStartsOn) ??
      ((h = (m = r == null ? void 0 : r.locale) == null ? void 0 : m.options) == null ? void 0 : h.weekStartsOn) ??
      o.weekStartsOn ??
      ((v = (g = o.locale) == null ? void 0 : g.options) == null ? void 0 : v.weekStartsOn) ??
      0,
    l = Tt(n, r == null ? void 0 : r.in),
    c = l.getDay(),
    d = (c < a ? 7 : 0) + c - a;
  return l.setDate(l.getDate() - d), l.setHours(0, 0, 0, 0), l;
}
function sa(n, r) {
  return Ei(n, { ...r, weekStartsOn: 1 });
}
function Hm(n, r) {
  const o = Tt(n, r == null ? void 0 : r.in),
    a = o.getFullYear(),
    l = Pn(o, 0);
  l.setFullYear(a + 1, 0, 4), l.setHours(0, 0, 0, 0);
  const c = sa(l),
    d = Pn(o, 0);
  d.setFullYear(a, 0, 4), d.setHours(0, 0, 0, 0);
  const m = sa(d);
  return o.getTime() >= c.getTime() ? a + 1 : o.getTime() >= m.getTime() ? a : a - 1;
}
function Mp(n) {
  const r = Tt(n),
    o = new Date(
      Date.UTC(
        r.getFullYear(),
        r.getMonth(),
        r.getDate(),
        r.getHours(),
        r.getMinutes(),
        r.getSeconds(),
        r.getMilliseconds()
      )
    );
  return o.setUTCFullYear(r.getFullYear()), +n - +o;
}
function f2(n, ...r) {
  const o = Pn.bind(
    null,
    r.find((a) => typeof a == 'object')
  );
  return r.map(o);
}
function Fp(n, r) {
  const o = Tt(n, r == null ? void 0 : r.in);
  return o.setHours(0, 0, 0, 0), o;
}
function d2(n, r, o) {
  const [a, l] = f2(o == null ? void 0 : o.in, n, r),
    c = Fp(a),
    d = Fp(l),
    m = +c - Mp(c),
    h = +d - Mp(d);
  return Math.round((m - h) / u2);
}
function p2(n, r) {
  const o = Hm(n, r),
    a = Pn(n, 0);
  return a.setFullYear(o, 0, 4), a.setHours(0, 0, 0, 0), sa(a);
}
function m2(n) {
  return n instanceof Date || (typeof n == 'object' && Object.prototype.toString.call(n) === '[object Date]');
}
function h2(n) {
  return !((!m2(n) && typeof n != 'number') || isNaN(+Tt(n)));
}
function g2(n, r) {
  const o = Tt(n, r == null ? void 0 : r.in);
  return o.setFullYear(o.getFullYear(), 0, 1), o.setHours(0, 0, 0, 0), o;
}
const v2 = {
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
  y2 = (n, r, o) => {
    let a;
    const l = v2[n];
    return (
      typeof l == 'string' ? (a = l) : r === 1 ? (a = l.one) : (a = l.other.replace('{{count}}', r.toString())),
      o != null && o.addSuffix ? (o.comparison && o.comparison > 0 ? 'in ' + a : a + ' ago') : a
    );
  };
function Tl(n) {
  return (r = {}) => {
    const o = r.width ? String(r.width) : n.defaultWidth;
    return n.formats[o] || n.formats[n.defaultWidth];
  };
}
const w2 = { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
  S2 = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  x2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  k2 = {
    date: Tl({ formats: w2, defaultWidth: 'full' }),
    time: Tl({ formats: S2, defaultWidth: 'full' }),
    dateTime: Tl({ formats: x2, defaultWidth: 'full' }),
  },
  C2 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  P2 = (n, r, o, a) => C2[n];
function hi(n) {
  return (r, o) => {
    const a = o != null && o.context ? String(o.context) : 'standalone';
    let l;
    if (a === 'formatting' && n.formattingValues) {
      const d = n.defaultFormattingWidth || n.defaultWidth,
        m = o != null && o.width ? String(o.width) : d;
      l = n.formattingValues[m] || n.formattingValues[d];
    } else {
      const d = n.defaultWidth,
        m = o != null && o.width ? String(o.width) : n.defaultWidth;
      l = n.values[m] || n.values[d];
    }
    const c = n.argumentCallback ? n.argumentCallback(r) : r;
    return l[c];
  };
}
const E2 = { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
  b2 = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  O2 = {
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
  N2 = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  T2 = {
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
  L2 = {
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
  I2 = (n, r) => {
    const o = Number(n),
      a = o % 100;
    if (a > 20 || a < 10)
      switch (a % 10) {
        case 1:
          return o + 'st';
        case 2:
          return o + 'nd';
        case 3:
          return o + 'rd';
      }
    return o + 'th';
  },
  _2 = {
    ordinalNumber: I2,
    era: hi({ values: E2, defaultWidth: 'wide' }),
    quarter: hi({ values: b2, defaultWidth: 'wide', argumentCallback: (n) => n - 1 }),
    month: hi({ values: O2, defaultWidth: 'wide' }),
    day: hi({ values: N2, defaultWidth: 'wide' }),
    dayPeriod: hi({ values: T2, defaultWidth: 'wide', formattingValues: L2, defaultFormattingWidth: 'wide' }),
  };
function gi(n) {
  return (r, o = {}) => {
    const a = o.width,
      l = (a && n.matchPatterns[a]) || n.matchPatterns[n.defaultMatchWidth],
      c = r.match(l);
    if (!c) return null;
    const d = c[0],
      m = (a && n.parsePatterns[a]) || n.parsePatterns[n.defaultParseWidth],
      h = Array.isArray(m) ? D2(m, (S) => S.test(d)) : R2(m, (S) => S.test(d));
    let g;
    (g = n.valueCallback ? n.valueCallback(h) : h), (g = o.valueCallback ? o.valueCallback(g) : g);
    const v = r.slice(d.length);
    return { value: g, rest: v };
  };
}
function R2(n, r) {
  for (const o in n) if (Object.prototype.hasOwnProperty.call(n, o) && r(n[o])) return o;
}
function D2(n, r) {
  for (let o = 0; o < n.length; o++) if (r(n[o])) return o;
}
function A2(n) {
  return (r, o = {}) => {
    const a = r.match(n.matchPattern);
    if (!a) return null;
    const l = a[0],
      c = r.match(n.parsePattern);
    if (!c) return null;
    let d = n.valueCallback ? n.valueCallback(c[0]) : c[0];
    d = o.valueCallback ? o.valueCallback(d) : d;
    const m = r.slice(l.length);
    return { value: d, rest: m };
  };
}
const M2 = /^(\d+)(th|st|nd|rd)?/i,
  F2 = /\d+/i,
  z2 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  j2 = { any: [/^b/i, /^(a|c)/i] },
  $2 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  U2 = { any: [/1/i, /2/i, /3/i, /4/i] },
  V2 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  B2 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  W2 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  H2 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Y2 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  q2 = {
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
  K2 = {
    ordinalNumber: A2({ matchPattern: M2, parsePattern: F2, valueCallback: (n) => parseInt(n, 10) }),
    era: gi({ matchPatterns: z2, defaultMatchWidth: 'wide', parsePatterns: j2, defaultParseWidth: 'any' }),
    quarter: gi({
      matchPatterns: $2,
      defaultMatchWidth: 'wide',
      parsePatterns: U2,
      defaultParseWidth: 'any',
      valueCallback: (n) => n + 1,
    }),
    month: gi({ matchPatterns: V2, defaultMatchWidth: 'wide', parsePatterns: B2, defaultParseWidth: 'any' }),
    day: gi({ matchPatterns: W2, defaultMatchWidth: 'wide', parsePatterns: H2, defaultParseWidth: 'any' }),
    dayPeriod: gi({ matchPatterns: Y2, defaultMatchWidth: 'any', parsePatterns: q2, defaultParseWidth: 'any' }),
  },
  Q2 = {
    code: 'en-US',
    formatDistance: y2,
    formatLong: k2,
    formatRelative: P2,
    localize: _2,
    match: K2,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function G2(n, r) {
  const o = Tt(n, r == null ? void 0 : r.in);
  return d2(o, g2(o)) + 1;
}
function X2(n, r) {
  const o = Tt(n, r == null ? void 0 : r.in),
    a = +sa(o) - +p2(o);
  return Math.round(a / Wm) + 1;
}
function Ym(n, r) {
  var v, S, w, O;
  const o = Tt(n, r == null ? void 0 : r.in),
    a = o.getFullYear(),
    l = ga(),
    c =
      (r == null ? void 0 : r.firstWeekContainsDate) ??
      ((S = (v = r == null ? void 0 : r.locale) == null ? void 0 : v.options) == null
        ? void 0
        : S.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((O = (w = l.locale) == null ? void 0 : w.options) == null ? void 0 : O.firstWeekContainsDate) ??
      1,
    d = Pn((r == null ? void 0 : r.in) || n, 0);
  d.setFullYear(a + 1, 0, c), d.setHours(0, 0, 0, 0);
  const m = Ei(d, r),
    h = Pn((r == null ? void 0 : r.in) || n, 0);
  h.setFullYear(a, 0, c), h.setHours(0, 0, 0, 0);
  const g = Ei(h, r);
  return +o >= +m ? a + 1 : +o >= +g ? a : a - 1;
}
function J2(n, r) {
  var m, h, g, v;
  const o = ga(),
    a =
      (r == null ? void 0 : r.firstWeekContainsDate) ??
      ((h = (m = r == null ? void 0 : r.locale) == null ? void 0 : m.options) == null
        ? void 0
        : h.firstWeekContainsDate) ??
      o.firstWeekContainsDate ??
      ((v = (g = o.locale) == null ? void 0 : g.options) == null ? void 0 : v.firstWeekContainsDate) ??
      1,
    l = Ym(n, r),
    c = Pn((r == null ? void 0 : r.in) || n, 0);
  return c.setFullYear(l, 0, a), c.setHours(0, 0, 0, 0), Ei(c, r);
}
function Z2(n, r) {
  const o = Tt(n, r == null ? void 0 : r.in),
    a = +Ei(o, r) - +J2(o, r);
  return Math.round(a / Wm) + 1;
}
function we(n, r) {
  const o = n < 0 ? '-' : '',
    a = Math.abs(n).toString().padStart(r, '0');
  return o + a;
}
const wn = {
    y(n, r) {
      const o = n.getFullYear(),
        a = o > 0 ? o : 1 - o;
      return we(r === 'yy' ? a % 100 : a, r.length);
    },
    M(n, r) {
      const o = n.getMonth();
      return r === 'M' ? String(o + 1) : we(o + 1, 2);
    },
    d(n, r) {
      return we(n.getDate(), r.length);
    },
    a(n, r) {
      const o = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (r) {
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
    h(n, r) {
      return we(n.getHours() % 12 || 12, r.length);
    },
    H(n, r) {
      return we(n.getHours(), r.length);
    },
    m(n, r) {
      return we(n.getMinutes(), r.length);
    },
    s(n, r) {
      return we(n.getSeconds(), r.length);
    },
    S(n, r) {
      const o = r.length,
        a = n.getMilliseconds(),
        l = Math.trunc(a * Math.pow(10, o - 3));
      return we(l, r.length);
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
  zp = {
    G: function (n, r, o) {
      const a = n.getFullYear() > 0 ? 1 : 0;
      switch (r) {
        case 'G':
        case 'GG':
        case 'GGG':
          return o.era(a, { width: 'abbreviated' });
        case 'GGGGG':
          return o.era(a, { width: 'narrow' });
        case 'GGGG':
        default:
          return o.era(a, { width: 'wide' });
      }
    },
    y: function (n, r, o) {
      if (r === 'yo') {
        const a = n.getFullYear(),
          l = a > 0 ? a : 1 - a;
        return o.ordinalNumber(l, { unit: 'year' });
      }
      return wn.y(n, r);
    },
    Y: function (n, r, o, a) {
      const l = Ym(n, a),
        c = l > 0 ? l : 1 - l;
      if (r === 'YY') {
        const d = c % 100;
        return we(d, 2);
      }
      return r === 'Yo' ? o.ordinalNumber(c, { unit: 'year' }) : we(c, r.length);
    },
    R: function (n, r) {
      const o = Hm(n);
      return we(o, r.length);
    },
    u: function (n, r) {
      const o = n.getFullYear();
      return we(o, r.length);
    },
    Q: function (n, r, o) {
      const a = Math.ceil((n.getMonth() + 1) / 3);
      switch (r) {
        case 'Q':
          return String(a);
        case 'QQ':
          return we(a, 2);
        case 'Qo':
          return o.ordinalNumber(a, { unit: 'quarter' });
        case 'QQQ':
          return o.quarter(a, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return o.quarter(a, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return o.quarter(a, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (n, r, o) {
      const a = Math.ceil((n.getMonth() + 1) / 3);
      switch (r) {
        case 'q':
          return String(a);
        case 'qq':
          return we(a, 2);
        case 'qo':
          return o.ordinalNumber(a, { unit: 'quarter' });
        case 'qqq':
          return o.quarter(a, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return o.quarter(a, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return o.quarter(a, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (n, r, o) {
      const a = n.getMonth();
      switch (r) {
        case 'M':
        case 'MM':
          return wn.M(n, r);
        case 'Mo':
          return o.ordinalNumber(a + 1, { unit: 'month' });
        case 'MMM':
          return o.month(a, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return o.month(a, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return o.month(a, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (n, r, o) {
      const a = n.getMonth();
      switch (r) {
        case 'L':
          return String(a + 1);
        case 'LL':
          return we(a + 1, 2);
        case 'Lo':
          return o.ordinalNumber(a + 1, { unit: 'month' });
        case 'LLL':
          return o.month(a, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return o.month(a, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return o.month(a, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (n, r, o, a) {
      const l = Z2(n, a);
      return r === 'wo' ? o.ordinalNumber(l, { unit: 'week' }) : we(l, r.length);
    },
    I: function (n, r, o) {
      const a = X2(n);
      return r === 'Io' ? o.ordinalNumber(a, { unit: 'week' }) : we(a, r.length);
    },
    d: function (n, r, o) {
      return r === 'do' ? o.ordinalNumber(n.getDate(), { unit: 'date' }) : wn.d(n, r);
    },
    D: function (n, r, o) {
      const a = G2(n);
      return r === 'Do' ? o.ordinalNumber(a, { unit: 'dayOfYear' }) : we(a, r.length);
    },
    E: function (n, r, o) {
      const a = n.getDay();
      switch (r) {
        case 'E':
        case 'EE':
        case 'EEE':
          return o.day(a, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return o.day(a, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return o.day(a, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return o.day(a, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (n, r, o, a) {
      const l = n.getDay(),
        c = (l - a.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case 'e':
          return String(c);
        case 'ee':
          return we(c, 2);
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
    c: function (n, r, o, a) {
      const l = n.getDay(),
        c = (l - a.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case 'c':
          return String(c);
        case 'cc':
          return we(c, r.length);
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
    i: function (n, r, o) {
      const a = n.getDay(),
        l = a === 0 ? 7 : a;
      switch (r) {
        case 'i':
          return String(l);
        case 'ii':
          return we(l, r.length);
        case 'io':
          return o.ordinalNumber(l, { unit: 'day' });
        case 'iii':
          return o.day(a, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return o.day(a, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return o.day(a, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return o.day(a, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (n, r, o) {
      const l = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (r) {
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
    b: function (n, r, o) {
      const a = n.getHours();
      let l;
      switch ((a === 12 ? (l = xr.noon) : a === 0 ? (l = xr.midnight) : (l = a / 12 >= 1 ? 'pm' : 'am'), r)) {
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
    B: function (n, r, o) {
      const a = n.getHours();
      let l;
      switch (
        (a >= 17 ? (l = xr.evening) : a >= 12 ? (l = xr.afternoon) : a >= 4 ? (l = xr.morning) : (l = xr.night), r)
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
    h: function (n, r, o) {
      if (r === 'ho') {
        let a = n.getHours() % 12;
        return a === 0 && (a = 12), o.ordinalNumber(a, { unit: 'hour' });
      }
      return wn.h(n, r);
    },
    H: function (n, r, o) {
      return r === 'Ho' ? o.ordinalNumber(n.getHours(), { unit: 'hour' }) : wn.H(n, r);
    },
    K: function (n, r, o) {
      const a = n.getHours() % 12;
      return r === 'Ko' ? o.ordinalNumber(a, { unit: 'hour' }) : we(a, r.length);
    },
    k: function (n, r, o) {
      let a = n.getHours();
      return a === 0 && (a = 24), r === 'ko' ? o.ordinalNumber(a, { unit: 'hour' }) : we(a, r.length);
    },
    m: function (n, r, o) {
      return r === 'mo' ? o.ordinalNumber(n.getMinutes(), { unit: 'minute' }) : wn.m(n, r);
    },
    s: function (n, r, o) {
      return r === 'so' ? o.ordinalNumber(n.getSeconds(), { unit: 'second' }) : wn.s(n, r);
    },
    S: function (n, r) {
      return wn.S(n, r);
    },
    X: function (n, r, o) {
      const a = n.getTimezoneOffset();
      if (a === 0) return 'Z';
      switch (r) {
        case 'X':
          return $p(a);
        case 'XXXX':
        case 'XX':
          return jn(a);
        case 'XXXXX':
        case 'XXX':
        default:
          return jn(a, ':');
      }
    },
    x: function (n, r, o) {
      const a = n.getTimezoneOffset();
      switch (r) {
        case 'x':
          return $p(a);
        case 'xxxx':
        case 'xx':
          return jn(a);
        case 'xxxxx':
        case 'xxx':
        default:
          return jn(a, ':');
      }
    },
    O: function (n, r, o) {
      const a = n.getTimezoneOffset();
      switch (r) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + jp(a, ':');
        case 'OOOO':
        default:
          return 'GMT' + jn(a, ':');
      }
    },
    z: function (n, r, o) {
      const a = n.getTimezoneOffset();
      switch (r) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + jp(a, ':');
        case 'zzzz':
        default:
          return 'GMT' + jn(a, ':');
      }
    },
    t: function (n, r, o) {
      const a = Math.trunc(+n / 1e3);
      return we(a, r.length);
    },
    T: function (n, r, o) {
      return we(+n, r.length);
    },
  };
function jp(n, r = '') {
  const o = n > 0 ? '-' : '+',
    a = Math.abs(n),
    l = Math.trunc(a / 60),
    c = a % 60;
  return c === 0 ? o + String(l) : o + String(l) + r + we(c, 2);
}
function $p(n, r) {
  return n % 60 === 0 ? (n > 0 ? '-' : '+') + we(Math.abs(n) / 60, 2) : jn(n, r);
}
function jn(n, r = '') {
  const o = n > 0 ? '-' : '+',
    a = Math.abs(n),
    l = we(Math.trunc(a / 60), 2),
    c = we(a % 60, 2);
  return o + l + r + c;
}
const Up = (n, r) => {
    switch (n) {
      case 'P':
        return r.date({ width: 'short' });
      case 'PP':
        return r.date({ width: 'medium' });
      case 'PPP':
        return r.date({ width: 'long' });
      case 'PPPP':
      default:
        return r.date({ width: 'full' });
    }
  },
  qm = (n, r) => {
    switch (n) {
      case 'p':
        return r.time({ width: 'short' });
      case 'pp':
        return r.time({ width: 'medium' });
      case 'ppp':
        return r.time({ width: 'long' });
      case 'pppp':
      default:
        return r.time({ width: 'full' });
    }
  },
  eC = (n, r) => {
    const o = n.match(/(P+)(p+)?/) || [],
      a = o[1],
      l = o[2];
    if (!l) return Up(n, r);
    let c;
    switch (a) {
      case 'P':
        c = r.dateTime({ width: 'short' });
        break;
      case 'PP':
        c = r.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        c = r.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        c = r.dateTime({ width: 'full' });
        break;
    }
    return c.replace('{{date}}', Up(a, r)).replace('{{time}}', qm(l, r));
  },
  tC = { p: qm, P: eC },
  nC = /^D+$/,
  rC = /^Y+$/,
  iC = ['D', 'DD', 'YY', 'YYYY'];
function oC(n) {
  return nC.test(n);
}
function aC(n) {
  return rC.test(n);
}
function sC(n, r, o) {
  const a = lC(n, r, o);
  if ((console.warn(a), iC.includes(n))) throw new RangeError(a);
}
function lC(n, r, o) {
  const a = n[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${r}\`) for formatting ${a} to the input \`${o}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const uC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  cC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  fC = /^'([^]*?)'?$/,
  dC = /''/g,
  pC = /[a-zA-Z]/;
function mC(n, r, o) {
  var v, S, w, O;
  const a = ga(),
    l = a.locale ?? Q2,
    c =
      a.firstWeekContainsDate ??
      ((S = (v = a.locale) == null ? void 0 : v.options) == null ? void 0 : S.firstWeekContainsDate) ??
      1,
    d = a.weekStartsOn ?? ((O = (w = a.locale) == null ? void 0 : w.options) == null ? void 0 : O.weekStartsOn) ?? 0,
    m = Tt(n, o == null ? void 0 : o.in);
  if (!h2(m)) throw new RangeError('Invalid time value');
  let h = r
    .match(cC)
    .map((L) => {
      const E = L[0];
      if (E === 'p' || E === 'P') {
        const T = tC[E];
        return T(L, l.formatLong);
      }
      return L;
    })
    .join('')
    .match(uC)
    .map((L) => {
      if (L === "''") return { isToken: !1, value: "'" };
      const E = L[0];
      if (E === "'") return { isToken: !1, value: hC(L) };
      if (zp[E]) return { isToken: !0, value: L };
      if (E.match(pC)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + E + '`');
      return { isToken: !1, value: L };
    });
  l.localize.preprocessor && (h = l.localize.preprocessor(m, h));
  const g = { firstWeekContainsDate: c, weekStartsOn: d, locale: l };
  return h
    .map((L) => {
      if (!L.isToken) return L.value;
      const E = L.value;
      (aC(E) || oC(E)) && sC(E, r, String(n));
      const T = zp[E[0]];
      return T(m, E, l.localize, g);
    })
    .join('');
}
function hC(n) {
  const r = n.match(fC);
  return r ? r[1].replace(dC, "'") : n;
}
const gC = () => `${mC('2025-07-23T12:52:18.641Z', 'yyyy-MM-dd h:mma O')}`,
  vC = '/renew-drivers-licence',
  yC = '/renouveler-permis-de-conduire',
  wC = 'https://www2.dev.snb.ca',
  Km = window.location.pathname.split('/').some((n) => n.toLowerCase() === 'en'),
  Qm = window.location.pathname.split('/').some((n) => n.toLowerCase() === 'fr');
console.log('en Route', Km, 'fr Route', Qm);
let va = '';
Km && (va = vC);
Qm && (va = yC);
console.log(`
  build info - build version: 1.0.0
  build date: ${gC()}`);
console.log('Debug: browser base url is:', va);
console.log('Debug: base domain is:', wC);
nv.createRoot(document.getElementById('root')).render(
  Y.jsx(l2, {
    children: Y.jsx(fy, {
      children: Y.jsx(ua.StrictMode, { children: Y.jsx(ny, { basename: va, children: Y.jsx(a2, {}) }) }),
    }),
  })
);
export {
  wu as A,
  RC as B,
  IC as C,
  Rl as D,
  NC as E,
  EC as F,
  Xy as G,
  Qy as H,
  Vn as I,
  Uy as J,
  By as K,
  kC as L,
  Zy as M,
  xC as O,
  tu as P,
  ua as R,
  $e as S,
  OC as T,
  Ni as a,
  Iv as b,
  Zk as c,
  $C as d,
  bC as e,
  FC as f,
  MC as g,
  LC as h,
  jC as i,
  Y as j,
  TC as k,
  AC as l,
  _C as m,
  ce as n,
  la as o,
  DC as p,
  SC as q,
  I as r,
  nu as s,
  Mk as t,
  au as u,
  zC as v,
  yu as w,
  PC as x,
  Tt as y,
  et as z,
};
