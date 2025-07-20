const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-B70XzM2d.js',
      'assets/Error-DT5UljD3.js',
      'assets/useMetadata-BpahQIeT.js',
      'assets/Error-BFxEtAtV.css',
      'assets/CodeAuthentication-BY9NKhU3.js',
      'assets/CodeAuthentication-_ZKKJUBR.css',
      'assets/ErrorModal-Bo5-9uvr.js',
      'assets/ErrorModal-Cd_o-A22.css',
      'assets/CheckboxGroup-CS8GFcn8.js',
      'assets/CheckboxGroup-BN41VEKA.css',
      'assets/index-emKiI1Lj.css',
      'assets/index-BwsMS6xY.js',
      'assets/BackLink-Ch1aurs2.js',
      'assets/accountSettings-Fh7g996K.css',
      'assets/edit-B19kykTY.js',
      'assets/index-Cf1s7vRf.js',
      'assets/index-BxdDQPxC.js',
      'assets/index-DJr9EPMB.css',
    ])
) => i.map((i) => d[i]);
function Dg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a && Object.defineProperty(e, i, a.get ? a : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === 'childList')
        for (const o of a.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
var Uk =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function ll(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function Wk(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var fm = { exports: {} },
  Wa = {},
  dm = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ui = Symbol.for('react.element'),
  Fg = Symbol.for('react.portal'),
  $g = Symbol.for('react.fragment'),
  Vg = Symbol.for('react.strict_mode'),
  Ug = Symbol.for('react.profiler'),
  Wg = Symbol.for('react.provider'),
  Bg = Symbol.for('react.context'),
  Hg = Symbol.for('react.forward_ref'),
  Yg = Symbol.for('react.suspense'),
  qg = Symbol.for('react.memo'),
  Kg = Symbol.for('react.lazy'),
  Gc = Symbol.iterator;
function Qg(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Gc && e[Gc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var mm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pm = Object.assign,
  hm = {};
function lr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = hm), (this.updater = n || mm);
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function gm() {}
gm.prototype = lr.prototype;
function ul(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = hm), (this.updater = n || mm);
}
var cl = (ul.prototype = new gm());
cl.constructor = ul;
pm(cl, lr.prototype);
cl.isPureReactComponent = !0;
var Jc = Array.isArray,
  vm = Object.prototype.hasOwnProperty,
  fl = { current: null },
  ym = { key: !0, ref: !0, __self: !0, __source: !0 };
function wm(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = '' + t.key), t))
      vm.call(t, r) && !ym.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: ui, type: e, key: a, ref: o, props: i, _owner: fl.current };
}
function Xg(e, t) {
  return { $$typeof: ui, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function dl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ui;
}
function Gg(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Zc = /\/+/g;
function ho(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Gg('' + e.key) : t.toString(36);
}
function Ki(e, t, n, r, i) {
  var a = typeof e;
  (a === 'undefined' || a === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ui:
          case Fg:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + ho(o, 0) : r),
      Jc(i)
        ? ((n = ''),
          e != null && (n = e.replace(Zc, '$&/') + '/'),
          Ki(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (dl(i) &&
            (i = Xg(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(Zc, '$&/') + '/') + e)),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Jc(e)))
    for (var s = 0; s < e.length; s++) {
      a = e[s];
      var l = r + ho(a, s);
      o += Ki(a, t, n, l, i);
    }
  else if (((l = Qg(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(a = e.next()).done; ) (a = a.value), (l = r + ho(a, s++)), (o += Ki(a, t, n, l, i));
  else if (a === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function Si(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ki(e, r, '', '', function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function Jg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  Qi = { transition: null },
  Zg = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: Qi, ReactCurrentOwner: fl };
function Sm() {
  throw Error('act(...) is not supported in production builds of React.');
}
j.Children = {
  map: Si,
  forEach: function (e, t, n) {
    Si(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Si(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Si(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!dl(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
j.Component = lr;
j.Fragment = $g;
j.Profiler = Ug;
j.PureComponent = ul;
j.StrictMode = Vg;
j.Suspense = Yg;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zg;
j.act = Sm;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = pm({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = fl.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t) vm.call(t, l) && !ym.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ui, type: e.type, key: i, ref: a, props: r, _owner: o };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Wg, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = wm;
j.createFactory = function (e) {
  var t = wm.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: Hg, render: e };
};
j.isValidElement = dl;
j.lazy = function (e) {
  return { $$typeof: Kg, _payload: { _status: -1, _result: e }, _init: Jg };
};
j.memo = function (e, t) {
  return { $$typeof: qg, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Qi.transition;
  Qi.transition = {};
  try {
    e();
  } finally {
    Qi.transition = t;
  }
};
j.unstable_act = Sm;
j.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
j.useContext = function (e) {
  return xe.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
j.useId = function () {
  return xe.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return xe.current.useRef(e);
};
j.useState = function (e) {
  return xe.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return xe.current.useTransition();
};
j.version = '18.3.1';
dm.exports = j;
var C = dm.exports;
const Ba = ll(C),
  ev = Dg({ __proto__: null, default: Ba }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tv = C,
  nv = Symbol.for('react.element'),
  rv = Symbol.for('react.fragment'),
  iv = Object.prototype.hasOwnProperty,
  av = tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ov = { key: !0, ref: !0, __self: !0, __source: !0 };
function xm(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = '' + n), t.key !== void 0 && (a = '' + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) iv.call(t, r) && !ov.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: nv, type: e, key: a, ref: o, props: i, _owner: av.current };
}
Wa.Fragment = rv;
Wa.jsx = xm;
Wa.jsxs = xm;
fm.exports = Wa;
var D = fm.exports,
  Xo = {},
  km = { exports: {} },
  Re = {},
  bm = { exports: {} },
  Cm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, T) {
    var R = E.length;
    E.push(T);
    e: for (; 0 < R; ) {
      var W = (R - 1) >>> 1,
        te = E[W];
      if (0 < i(te, T)) (E[W] = T), (E[R] = te), (R = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var T = E[0],
      R = E.pop();
    if (R !== T) {
      E[0] = R;
      e: for (var W = 0, te = E.length, en = te >>> 1; W < en; ) {
        var et = 2 * (W + 1) - 1,
          En = E[et],
          tt = et + 1,
          tn = E[tt];
        if (0 > i(En, R))
          tt < te && 0 > i(tn, En) ? ((E[W] = tn), (E[tt] = R), (W = tt)) : ((E[W] = En), (E[et] = R), (W = et));
        else if (tt < te && 0 > i(tn, R)) (E[W] = tn), (E[tt] = R), (W = tt);
        else break e;
      }
    }
    return T;
  }
  function i(E, T) {
    var R = E.sortIndex - T.sortIndex;
    return R !== 0 ? R : E.id - T.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    w = !1,
    v = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= E) r(u), (T.sortIndex = T.expirationTime), t(l, T);
      else break;
      T = n(u);
    }
  }
  function S(E) {
    if (((v = !1), p(E), !w))
      if (n(l) !== null) (w = !0), Ue(y);
      else {
        var T = n(u);
        T !== null && dt(S, T.startTime - E);
      }
  }
  function y(E, T) {
    (w = !1), v && ((v = !1), h(_), (_ = -1)), (g = !0);
    var R = d;
    try {
      for (p(T), f = n(l); f !== null && (!(f.expirationTime > T) || (E && !re())); ) {
        var W = f.callback;
        if (typeof W == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var te = W(f.expirationTime <= T);
          (T = e.unstable_now()), typeof te == 'function' ? (f.callback = te) : f === n(l) && r(l), p(T);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var en = !0;
      else {
        var et = n(u);
        et !== null && dt(S, et.startTime - T), (en = !1);
      }
      return en;
    } finally {
      (f = null), (d = R), (g = !1);
    }
  }
  var k = !1,
    b = null,
    _ = -1,
    M = 5,
    I = -1;
  function re() {
    return !(e.unstable_now() - I < M);
  }
  function ft() {
    if (b !== null) {
      var E = e.unstable_now();
      I = E;
      var T = !0;
      try {
        T = b(!0, E);
      } finally {
        T ? Je() : ((k = !1), (b = null));
      }
    } else k = !1;
  }
  var Je;
  if (typeof m == 'function')
    Je = function () {
      m(ft);
    };
  else if (typeof MessageChannel < 'u') {
    var Ve = new MessageChannel(),
      Ze = Ve.port2;
    (Ve.port1.onmessage = ft),
      (Je = function () {
        Ze.postMessage(null);
      });
  } else
    Je = function () {
      x(ft, 0);
    };
  function Ue(E) {
    (b = E), k || ((k = !0), Je());
  }
  function dt(E, T) {
    _ = x(function () {
      E(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Ue(y));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = d;
      }
      var R = d;
      d = T;
      try {
        return E();
      } finally {
        d = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, T) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var R = d;
      d = E;
      try {
        return T();
      } finally {
        d = R;
      }
    }),
    (e.unstable_scheduleCallback = function (E, T, R) {
      var W = e.unstable_now();
      switch (
        (typeof R == 'object' && R !== null
          ? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? W + R : W))
          : (R = W),
        E)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = R + te),
        (E = { id: c++, callback: T, priorityLevel: E, startTime: R, expirationTime: te, sortIndex: -1 }),
        R > W
          ? ((E.sortIndex = R), t(u, E), n(l) === null && E === n(u) && (v ? (h(_), (_ = -1)) : (v = !0), dt(S, R - W)))
          : ((E.sortIndex = te), t(l, E), w || g || ((w = !0), Ue(y))),
        E
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (E) {
      var T = d;
      return function () {
        var R = d;
        d = T;
        try {
          return E.apply(this, arguments);
        } finally {
          d = R;
        }
      };
    });
})(Cm);
bm.exports = Cm;
var sv = bm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lv = C,
  Te = sv;
function P(e) {
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
var Pm = new Set(),
  Dr = {};
function bn(e, t) {
  er(e, t), er(e + 'Capture', t);
}
function er(e, t) {
  for (Dr[e] = t, e = 0; e < t.length; e++) Pm.add(t[e]);
}
var wt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Go = Object.prototype.hasOwnProperty,
  uv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ef = {},
  tf = {};
function cv(e) {
  return Go.call(tf, e) ? !0 : Go.call(ef, e) ? !1 : uv.test(e) ? (tf[e] = !0) : ((ef[e] = !0), !1);
}
function fv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function dv(e, t, n, r) {
  if (t === null || typeof t > 'u' || fv(e, t, n, r)) return !0;
  if (r) return !1;
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
function ke(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var me = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    me[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  me[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  me[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  me[e] = new ke(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    me[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  me[e] = new ke(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  me[e] = new ke(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  me[e] = new ke(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  me[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ml = /[\-:]([a-z])/g;
function pl(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ml, pl);
    me[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(ml, pl);
  me[t] = new ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ml, pl);
  me[t] = new ke(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  me[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new ke('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  me[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hl(e, t, n, r) {
  var i = me.hasOwnProperty(t) ? me[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (dv(t, n, i, r) && (n = null),
    r || i === null
      ? cv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xi = Symbol.for('react.element'),
  Rn = Symbol.for('react.portal'),
  In = Symbol.for('react.fragment'),
  gl = Symbol.for('react.strict_mode'),
  Jo = Symbol.for('react.profiler'),
  Em = Symbol.for('react.provider'),
  _m = Symbol.for('react.context'),
  vl = Symbol.for('react.forward_ref'),
  Zo = Symbol.for('react.suspense'),
  es = Symbol.for('react.suspense_list'),
  yl = Symbol.for('react.memo'),
  Tt = Symbol.for('react.lazy'),
  Nm = Symbol.for('react.offscreen'),
  nf = Symbol.iterator;
function dr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (nf && e[nf]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var J = Object.assign,
  go;
function xr(e) {
  if (go === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      go = (t && t[1]) || '';
    }
  return (
    `
` +
    go +
    e
  );
}
var vo = !1;
function yo(e, t) {
  if (!e || vo) return '';
  vo = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          s = a.length - 1;
        1 <= o && 0 <= s && i[o] !== a[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== a[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== a[s])) {
                var l =
                  `
` + i[o].replace(' at new ', ' at ');
                return e.displayName && l.includes('<anonymous>') && (l = l.replace('<anonymous>', e.displayName)), l;
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (vo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? xr(e) : '';
}
function mv(e) {
  switch (e.tag) {
    case 5:
      return xr(e.type);
    case 16:
      return xr('Lazy');
    case 13:
      return xr('Suspense');
    case 19:
      return xr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = yo(e.type, !1)), e;
    case 11:
      return (e = yo(e.type.render, !1)), e;
    case 1:
      return (e = yo(e.type, !0)), e;
    default:
      return '';
  }
}
function ts(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case In:
      return 'Fragment';
    case Rn:
      return 'Portal';
    case Jo:
      return 'Profiler';
    case gl:
      return 'StrictMode';
    case Zo:
      return 'Suspense';
    case es:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case _m:
        return (e.displayName || 'Context') + '.Consumer';
      case Em:
        return (e._context.displayName || 'Context') + '.Provider';
      case vl:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case yl:
        return (t = e.displayName || null), t !== null ? t : ts(e.type) || 'Memo';
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return ts(e(t));
        } catch {}
    }
  return null;
}
function pv(e) {
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
      return ts(t);
    case 8:
      return t === gl ? 'StrictMode' : 'Mode';
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
function Yt(e) {
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
function Om(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function hv(e) {
  var t = Om(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = '' + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ki(e) {
  e._valueTracker || (e._valueTracker = hv(e));
}
function Lm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Om(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function ua(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ns(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function rf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Tm(e, t) {
  (t = t.checked), t != null && hl(e, 'checked', t, !1);
}
function rs(e, t) {
  Tm(e, t);
  var n = Yt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? is(e, t.type, n) : t.hasOwnProperty('defaultValue') && is(e, t.type, Yt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function af(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function is(e, t, n) {
  (t !== 'number' || ua(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var kr = Array.isArray;
function qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Yt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function as(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function of(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (kr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Yt(n) };
}
function Rm(e, t) {
  var n = Yt(t.value),
    r = Yt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function sf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Im(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function os(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Im(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var bi,
  Mm = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        bi = bi || document.createElement('div'),
          bi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = bi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Er = {
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
  gv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Er).forEach(function (e) {
  gv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Er[t] = Er[e]);
  });
});
function Am(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Er.hasOwnProperty(e) && Er[e])
    ? ('' + t).trim()
    : t + 'px';
}
function zm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Am(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var vv = J(
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
function ss(e, t) {
  if (t) {
    if (vv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(P(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(P(62));
  }
}
function ls(e, t) {
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
var us = null;
function wl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var cs = null,
  Kn = null,
  Qn = null;
function lf(e) {
  if ((e = di(e))) {
    if (typeof cs != 'function') throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Qa(t)), cs(e.stateNode, e.type, t));
  }
}
function jm(e) {
  Kn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Kn = e);
}
function Dm() {
  if (Kn) {
    var e = Kn,
      t = Qn;
    if (((Qn = Kn = null), lf(e), t)) for (e = 0; e < t.length; e++) lf(t[e]);
  }
}
function Fm(e, t) {
  return e(t);
}
function $m() {}
var wo = !1;
function Vm(e, t, n) {
  if (wo) return e(t, n);
  wo = !0;
  try {
    return Fm(e, t, n);
  } finally {
    (wo = !1), (Kn !== null || Qn !== null) && ($m(), Dm());
  }
}
function $r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Qa(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(P(231, t, typeof n));
  return n;
}
var fs = !1;
if (wt)
  try {
    var mr = {};
    Object.defineProperty(mr, 'passive', {
      get: function () {
        fs = !0;
      },
    }),
      window.addEventListener('test', mr, mr),
      window.removeEventListener('test', mr, mr);
  } catch {
    fs = !1;
  }
function yv(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var _r = !1,
  ca = null,
  fa = !1,
  ds = null,
  wv = {
    onError: function (e) {
      (_r = !0), (ca = e);
    },
  };
function Sv(e, t, n, r, i, a, o, s, l) {
  (_r = !1), (ca = null), yv.apply(wv, arguments);
}
function xv(e, t, n, r, i, a, o, s, l) {
  if ((Sv.apply(this, arguments), _r)) {
    if (_r) {
      var u = ca;
      (_r = !1), (ca = null);
    } else throw Error(P(198));
    fa || ((fa = !0), (ds = u));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Um(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function uf(e) {
  if (Cn(e) !== e) throw Error(P(188));
}
function kv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return uf(i), e;
        if (a === r) return uf(i), t;
        a = a.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (s === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = a.child; s; ) {
          if (s === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (s === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Wm(e) {
  return (e = kv(e)), e !== null ? Bm(e) : null;
}
function Bm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hm = Te.unstable_scheduleCallback,
  cf = Te.unstable_cancelCallback,
  bv = Te.unstable_shouldYield,
  Cv = Te.unstable_requestPaint,
  ne = Te.unstable_now,
  Pv = Te.unstable_getCurrentPriorityLevel,
  Sl = Te.unstable_ImmediatePriority,
  Ym = Te.unstable_UserBlockingPriority,
  da = Te.unstable_NormalPriority,
  Ev = Te.unstable_LowPriority,
  qm = Te.unstable_IdlePriority,
  Ha = null,
  ut = null;
function _v(e) {
  if (ut && typeof ut.onCommitFiberRoot == 'function')
    try {
      ut.onCommitFiberRoot(Ha, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : Lv,
  Nv = Math.log,
  Ov = Math.LN2;
function Lv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Nv(e) / Ov) | 0)) | 0;
}
var Ci = 64,
  Pi = 4194304;
function br(e) {
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
function ma(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? (r = br(s)) : ((a &= o), a !== 0 && (r = br(a)));
  } else (o = n & ~i), o !== 0 ? (r = br(o)) : a !== 0 && (r = br(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Tv(e, t) {
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
function Rv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Ke(a),
      s = 1 << o,
      l = i[o];
    l === -1 ? (!(s & n) || s & r) && (i[o] = Tv(s, t)) : l <= t && (e.expiredLanes |= s), (a &= ~s);
  }
}
function ms(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Km() {
  var e = Ci;
  return (Ci <<= 1), !(Ci & 4194240) && (Ci = 64), e;
}
function So(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ci(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n);
}
function Iv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ke(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function xl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function Qm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xm,
  kl,
  Gm,
  Jm,
  Zm,
  ps = !1,
  Ei = [],
  Dt = null,
  Ft = null,
  $t = null,
  Vr = new Map(),
  Ur = new Map(),
  It = [],
  Mv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function ff(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Dt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Ft = null;
      break;
    case 'mouseover':
    case 'mouseout':
      $t = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Vr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ur.delete(t.pointerId);
  }
}
function pr(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }),
      t !== null && ((t = di(t)), t !== null && kl(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Av(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Dt = pr(Dt, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Ft = pr(Ft, e, t, n, r, i)), !0;
    case 'mouseover':
      return ($t = pr($t, e, t, n, r, i)), !0;
    case 'pointerover':
      var a = i.pointerId;
      return Vr.set(a, pr(Vr.get(a) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (a = i.pointerId), Ur.set(a, pr(Ur.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function ep(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Um(n)), t !== null)) {
          (e.blockedOn = t),
            Zm(e.priority, function () {
              Gm(n);
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
function Xi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (us = r), n.target.dispatchEvent(r), (us = null);
    } else return (t = di(n)), t !== null && kl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function df(e, t, n) {
  Xi(e) && n.delete(t);
}
function zv() {
  (ps = !1),
    Dt !== null && Xi(Dt) && (Dt = null),
    Ft !== null && Xi(Ft) && (Ft = null),
    $t !== null && Xi($t) && ($t = null),
    Vr.forEach(df),
    Ur.forEach(df);
}
function hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), ps || ((ps = !0), Te.unstable_scheduleCallback(Te.unstable_NormalPriority, zv)));
}
function Wr(e) {
  function t(i) {
    return hr(i, e);
  }
  if (0 < Ei.length) {
    hr(Ei[0], e);
    for (var n = 1; n < Ei.length; n++) {
      var r = Ei[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Dt !== null && hr(Dt, e), Ft !== null && hr(Ft, e), $t !== null && hr($t, e), Vr.forEach(t), Ur.forEach(t), n = 0;
    n < It.length;
    n++
  )
    (r = It[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); ) ep(n), n.blockedOn === null && It.shift();
}
var Xn = Et.ReactCurrentBatchConfig,
  pa = !0;
function jv(e, t, n, r) {
  var i = U,
    a = Xn.transition;
  Xn.transition = null;
  try {
    (U = 1), bl(e, t, n, r);
  } finally {
    (U = i), (Xn.transition = a);
  }
}
function Dv(e, t, n, r) {
  var i = U,
    a = Xn.transition;
  Xn.transition = null;
  try {
    (U = 4), bl(e, t, n, r);
  } finally {
    (U = i), (Xn.transition = a);
  }
}
function bl(e, t, n, r) {
  if (pa) {
    var i = hs(e, t, n, r);
    if (i === null) Lo(e, t, r, ha, n), ff(e, r);
    else if (Av(i, e, t, n, r)) r.stopPropagation();
    else if ((ff(e, r), t & 4 && -1 < Mv.indexOf(e))) {
      for (; i !== null; ) {
        var a = di(i);
        if ((a !== null && Xm(a), (a = hs(e, t, n, r)), a === null && Lo(e, t, r, ha, n), a === i)) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Lo(e, t, r, null, n);
  }
}
var ha = null;
function hs(e, t, n, r) {
  if (((ha = null), (e = wl(r)), (e = on(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Um(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ha = e), null;
}
function tp(e) {
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
      switch (Pv()) {
        case Sl:
          return 1;
        case Ym:
          return 4;
        case da:
        case Ev:
          return 16;
        case qm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null,
  Cl = null,
  Gi = null;
function np() {
  if (Gi) return Gi;
  var e,
    t = Cl,
    n = t.length,
    r,
    i = 'value' in At ? At.value : At.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (Gi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ji(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _i() {
  return !0;
}
function mf() {
  return !1;
}
function Ie(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(a) : a[s]));
    return (
      (this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? _i : mf),
      (this.isPropagationStopped = mf),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = _i));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = _i));
      },
      persist: function () {},
      isPersistent: _i,
    }),
    t
  );
}
var ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Pl = Ie(ur),
  fi = J({}, ur, { view: 0, detail: 0 }),
  Fv = Ie(fi),
  xo,
  ko,
  gr,
  Ya = J({}, fi, {
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
    getModifierState: El,
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
        : (e !== gr &&
            (gr && e.type === 'mousemove'
              ? ((xo = e.screenX - gr.screenX), (ko = e.screenY - gr.screenY))
              : (ko = xo = 0),
            (gr = e)),
          xo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ko;
    },
  }),
  pf = Ie(Ya),
  $v = J({}, Ya, { dataTransfer: 0 }),
  Vv = Ie($v),
  Uv = J({}, fi, { relatedTarget: 0 }),
  bo = Ie(Uv),
  Wv = J({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bv = Ie(Wv),
  Hv = J({}, ur, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Yv = Ie(Hv),
  qv = J({}, ur, { data: 0 }),
  hf = Ie(qv),
  Kv = {
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
  Qv = {
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
  Xv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Gv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xv[e]) ? !!t[e] : !1;
}
function El() {
  return Gv;
}
var Jv = J({}, fi, {
    key: function (e) {
      if (e.key) {
        var t = Kv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ji(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Qv[e.keyCode] || 'Unidentified'
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
    getModifierState: El,
    charCode: function (e) {
      return e.type === 'keypress' ? Ji(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? Ji(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  Zv = Ie(Jv),
  ey = J({}, Ya, {
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
  gf = Ie(ey),
  ty = J({}, fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: El,
  }),
  ny = Ie(ty),
  ry = J({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iy = Ie(ry),
  ay = J({}, Ya, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  oy = Ie(ay),
  sy = [9, 13, 27, 32],
  _l = wt && 'CompositionEvent' in window,
  Nr = null;
wt && 'documentMode' in document && (Nr = document.documentMode);
var ly = wt && 'TextEvent' in window && !Nr,
  rp = wt && (!_l || (Nr && 8 < Nr && 11 >= Nr)),
  vf = ' ',
  yf = !1;
function ip(e, t) {
  switch (e) {
    case 'keyup':
      return sy.indexOf(t.keyCode) !== -1;
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
function ap(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Mn = !1;
function uy(e, t) {
  switch (e) {
    case 'compositionend':
      return ap(t);
    case 'keypress':
      return t.which !== 32 ? null : ((yf = !0), vf);
    case 'textInput':
      return (e = t.data), e === vf && yf ? null : e;
    default:
      return null;
  }
}
function cy(e, t) {
  if (Mn) return e === 'compositionend' || (!_l && ip(e, t)) ? ((e = np()), (Gi = Cl = At = null), (Mn = !1), e) : null;
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
      return rp && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var fy = {
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
function wf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!fy[e.type] : t === 'textarea';
}
function op(e, t, n, r) {
  jm(r),
    (t = ga(t, 'onChange')),
    0 < t.length && ((n = new Pl('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Or = null,
  Br = null;
function dy(e) {
  vp(e, 0);
}
function qa(e) {
  var t = jn(e);
  if (Lm(t)) return e;
}
function my(e, t) {
  if (e === 'change') return t;
}
var sp = !1;
if (wt) {
  var Co;
  if (wt) {
    var Po = 'oninput' in document;
    if (!Po) {
      var Sf = document.createElement('div');
      Sf.setAttribute('oninput', 'return;'), (Po = typeof Sf.oninput == 'function');
    }
    Co = Po;
  } else Co = !1;
  sp = Co && (!document.documentMode || 9 < document.documentMode);
}
function xf() {
  Or && (Or.detachEvent('onpropertychange', lp), (Br = Or = null));
}
function lp(e) {
  if (e.propertyName === 'value' && qa(Br)) {
    var t = [];
    op(t, Br, e, wl(e)), Vm(dy, t);
  }
}
function py(e, t, n) {
  e === 'focusin' ? (xf(), (Or = t), (Br = n), Or.attachEvent('onpropertychange', lp)) : e === 'focusout' && xf();
}
function hy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return qa(Br);
}
function gy(e, t) {
  if (e === 'click') return qa(t);
}
function vy(e, t) {
  if (e === 'input' || e === 'change') return qa(t);
}
function yy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == 'function' ? Object.is : yy;
function Hr(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Go.call(t, i) || !Xe(e[i], t[i])) return !1;
  }
  return !0;
}
function kf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function bf(e, t) {
  var n = kf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
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
    n = kf(n);
  }
}
function up(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? up(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function cp() {
  for (var e = window, t = ua(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ua(e.document);
  }
  return t;
}
function Nl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function wy(e) {
  var t = cp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && up(n.ownerDocument.documentElement, n)) {
    if (r !== null && Nl(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = bf(n, a));
        var o = bf(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Sy = wt && 'documentMode' in document && 11 >= document.documentMode,
  An = null,
  gs = null,
  Lr = null,
  vs = !1;
function Cf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vs ||
    An == null ||
    An !== ua(r) ||
    ((r = An),
    'selectionStart' in r && Nl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Lr && Hr(Lr, r)) ||
      ((Lr = r),
      (r = ga(gs, 'onSelect')),
      0 < r.length &&
        ((t = new Pl('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = An))));
}
function Ni(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var zn = {
    animationend: Ni('Animation', 'AnimationEnd'),
    animationiteration: Ni('Animation', 'AnimationIteration'),
    animationstart: Ni('Animation', 'AnimationStart'),
    transitionend: Ni('Transition', 'TransitionEnd'),
  },
  Eo = {},
  fp = {};
wt &&
  ((fp = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete zn.animationend.animation, delete zn.animationiteration.animation, delete zn.animationstart.animation),
  'TransitionEvent' in window || delete zn.transitionend.transition);
function Ka(e) {
  if (Eo[e]) return Eo[e];
  if (!zn[e]) return e;
  var t = zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fp) return (Eo[e] = t[n]);
  return e;
}
var dp = Ka('animationend'),
  mp = Ka('animationiteration'),
  pp = Ka('animationstart'),
  hp = Ka('transitionend'),
  gp = new Map(),
  Pf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Gt(e, t) {
  gp.set(e, t), bn(t, [e]);
}
for (var _o = 0; _o < Pf.length; _o++) {
  var No = Pf[_o],
    xy = No.toLowerCase(),
    ky = No[0].toUpperCase() + No.slice(1);
  Gt(xy, 'on' + ky);
}
Gt(dp, 'onAnimationEnd');
Gt(mp, 'onAnimationIteration');
Gt(pp, 'onAnimationStart');
Gt('dblclick', 'onDoubleClick');
Gt('focusin', 'onFocus');
Gt('focusout', 'onBlur');
Gt(hp, 'onTransitionEnd');
er('onMouseEnter', ['mouseout', 'mouseover']);
er('onMouseLeave', ['mouseout', 'mouseover']);
er('onPointerEnter', ['pointerout', 'pointerover']);
er('onPointerLeave', ['pointerout', 'pointerover']);
bn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
bn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
bn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
bn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
bn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
bn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Cr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  by = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Cr));
function Ef(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), xv(r, t, void 0, e), (e.currentTarget = null);
}
function vp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== a && i.isPropagationStopped())) break e;
          Ef(i, s, u), (a = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]), (l = s.instance), (u = s.currentTarget), (s = s.listener), l !== a && i.isPropagationStopped())
          )
            break e;
          Ef(i, s, u), (a = l);
        }
    }
  }
  if (fa) throw ((e = ds), (fa = !1), (ds = null), e);
}
function H(e, t) {
  var n = t[ks];
  n === void 0 && (n = t[ks] = new Set());
  var r = e + '__bubble';
  n.has(r) || (yp(t, e, 2, !1), n.add(r));
}
function Oo(e, t, n) {
  var r = 0;
  t && (r |= 4), yp(n, e, r, t);
}
var Oi = '_reactListening' + Math.random().toString(36).slice(2);
function Yr(e) {
  if (!e[Oi]) {
    (e[Oi] = !0),
      Pm.forEach(function (n) {
        n !== 'selectionchange' && (by.has(n) || Oo(n, !1, e), Oo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Oi] || ((t[Oi] = !0), Oo('selectionchange', !1, t));
  }
}
function yp(e, t, n, r) {
  switch (tp(t)) {
    case 1:
      var i = jv;
      break;
    case 4:
      i = Dv;
      break;
    default:
      i = bl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !fs || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Lo(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = on(s)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = a = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Vm(function () {
    var u = a,
      c = wl(n),
      f = [];
    e: {
      var d = gp.get(e);
      if (d !== void 0) {
        var g = Pl,
          w = e;
        switch (e) {
          case 'keypress':
            if (Ji(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = Zv;
            break;
          case 'focusin':
            (w = 'focus'), (g = bo);
            break;
          case 'focusout':
            (w = 'blur'), (g = bo);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = bo;
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
            g = pf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Vv;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = ny;
            break;
          case dp:
          case mp:
          case pp:
            g = Bv;
            break;
          case hp:
            g = iy;
            break;
          case 'scroll':
            g = Fv;
            break;
          case 'wheel':
            g = oy;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = Yv;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = gf;
        }
        var v = (t & 4) !== 0,
          x = !v && e === 'scroll',
          h = v ? (d !== null ? d + 'Capture' : null) : d;
        v = [];
        for (var m = u, p; m !== null; ) {
          p = m;
          var S = p.stateNode;
          if (
            (p.tag === 5 && S !== null && ((p = S), h !== null && ((S = $r(m, h)), S != null && v.push(qr(m, S, p)))),
            x)
          )
            break;
          m = m.return;
        }
        0 < v.length && ((d = new g(d, w, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d && n !== us && (w = n.relatedTarget || n.fromElement) && (on(w) || w[St]))
        )
          break e;
        if (
          (g || d) &&
          ((d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? on(w) : null),
              w !== null && ((x = Cn(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) && (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((v = pf),
            (S = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = gf), (S = 'onPointerLeave'), (h = 'onPointerEnter'), (m = 'pointer')),
            (x = g == null ? d : jn(g)),
            (p = w == null ? d : jn(w)),
            (d = new v(S, m + 'leave', g, n, c)),
            (d.target = x),
            (d.relatedTarget = p),
            (S = null),
            on(c) === u && ((v = new v(h, m + 'enter', w, n, c)), (v.target = p), (v.relatedTarget = x), (S = v)),
            (x = S),
            g && w)
          )
            t: {
              for (v = g, h = w, m = 0, p = v; p; p = _n(p)) m++;
              for (p = 0, S = h; S; S = _n(S)) p++;
              for (; 0 < m - p; ) (v = _n(v)), m--;
              for (; 0 < p - m; ) (h = _n(h)), p--;
              for (; m--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = _n(v)), (h = _n(h));
              }
              v = null;
            }
          else v = null;
          g !== null && _f(f, d, g, v, !1), w !== null && x !== null && _f(f, x, w, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? jn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var y = my;
        else if (wf(d))
          if (sp) y = vy;
          else {
            y = hy;
            var k = py;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === 'input' && (d.type === 'checkbox' || d.type === 'radio') && (y = gy);
        if (y && (y = y(e, u))) {
          op(f, y, n, c);
          break e;
        }
        k && k(e, d, u),
          e === 'focusout' && (k = d._wrapperState) && k.controlled && d.type === 'number' && is(d, 'number', d.value);
      }
      switch (((k = u ? jn(u) : window), e)) {
        case 'focusin':
          (wf(k) || k.contentEditable === 'true') && ((An = k), (gs = u), (Lr = null));
          break;
        case 'focusout':
          Lr = gs = An = null;
          break;
        case 'mousedown':
          vs = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (vs = !1), Cf(f, n, c);
          break;
        case 'selectionchange':
          if (Sy) break;
        case 'keydown':
        case 'keyup':
          Cf(f, n, c);
      }
      var b;
      if (_l)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart';
              break e;
            case 'compositionend':
              _ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              _ = 'onCompositionUpdate';
              break e;
          }
          _ = void 0;
        }
      else
        Mn ? ip(e, n) && (_ = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      _ &&
        (rp &&
          n.locale !== 'ko' &&
          (Mn || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && Mn && (b = np())
            : ((At = c), (Cl = 'value' in At ? At.value : At.textContent), (Mn = !0))),
        (k = ga(u, _)),
        0 < k.length &&
          ((_ = new hf(_, e, null, n, c)),
          f.push({ event: _, listeners: k }),
          b ? (_.data = b) : ((b = ap(n)), b !== null && (_.data = b)))),
        (b = ly ? uy(e, n) : cy(e, n)) &&
          ((u = ga(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new hf('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = b)));
    }
    vp(f, t);
  });
}
function qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ga(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a), (a = $r(e, n)), a != null && r.unshift(qr(e, a, i)), (a = $r(e, t)), a != null && r.push(qr(e, a, i))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _f(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = $r(n, a)), l != null && o.unshift(qr(n, l, s)))
        : i || ((l = $r(n, a)), l != null && o.push(qr(n, l, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Cy = /\r\n?/g,
  Py = /\u0000|\uFFFD/g;
function Nf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Cy,
      `
`
    )
    .replace(Py, '');
}
function Li(e, t, n) {
  if (((t = Nf(t)), Nf(e) !== t && n)) throw Error(P(425));
}
function va() {}
var ys = null,
  ws = null;
function Ss(e, t) {
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
var xs = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ey = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Of = typeof Promise == 'function' ? Promise : void 0,
  _y =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Of < 'u'
      ? function (e) {
          return Of.resolve(null).then(e).catch(Ny);
        }
      : xs;
function Ny(e) {
  setTimeout(function () {
    throw e;
  });
}
function To(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Wr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Wr(t);
}
function Vt(e) {
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
function Lf(e) {
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
var cr = Math.random().toString(36).slice(2),
  it = '__reactFiber$' + cr,
  Kr = '__reactProps$' + cr,
  St = '__reactContainer$' + cr,
  ks = '__reactEvents$' + cr,
  Oy = '__reactListeners$' + cr,
  Ly = '__reactHandles$' + cr;
function on(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[it])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Lf(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = Lf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function di(e) {
  return (e = e[it] || e[St]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Qa(e) {
  return e[Kr] || null;
}
var bs = [],
  Dn = -1;
function Jt(e) {
  return { current: e };
}
function q(e) {
  0 > Dn || ((e.current = bs[Dn]), (bs[Dn] = null), Dn--);
}
function B(e, t) {
  Dn++, (bs[Dn] = e.current), (e.current = t);
}
var qt = {},
  ve = Jt(qt),
  Pe = Jt(!1),
  hn = qt;
function tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function ya() {
  q(Pe), q(ve);
}
function Tf(e, t, n) {
  if (ve.current !== qt) throw Error(P(168));
  B(ve, t), B(Pe, n);
}
function wp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, pv(e) || 'Unknown', i));
  return J({}, n, r);
}
function wa(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qt),
    (hn = ve.current),
    B(ve, e),
    B(Pe, Pe.current),
    !0
  );
}
function Rf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n ? ((e = wp(e, t, hn)), (r.__reactInternalMemoizedMergedChildContext = e), q(Pe), q(ve), B(ve, e)) : q(Pe), B(Pe, n);
}
var pt = null,
  Xa = !1,
  Ro = !1;
function Sp(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
function Ty(e) {
  (Xa = !0), Sp(e);
}
function Zt() {
  if (!Ro && pt !== null) {
    Ro = !0;
    var e = 0,
      t = U;
    try {
      var n = pt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (pt = null), (Xa = !1);
    } catch (i) {
      throw (pt !== null && (pt = pt.slice(e + 1)), Hm(Sl, Zt), i);
    } finally {
      (U = t), (Ro = !1);
    }
  }
  return null;
}
var Fn = [],
  $n = 0,
  Sa = null,
  xa = 0,
  Ae = [],
  ze = 0,
  gn = null,
  ht = 1,
  gt = '';
function nn(e, t) {
  (Fn[$n++] = xa), (Fn[$n++] = Sa), (Sa = e), (xa = t);
}
function xp(e, t, n) {
  (Ae[ze++] = ht), (Ae[ze++] = gt), (Ae[ze++] = gn), (gn = e);
  var r = ht;
  e = gt;
  var i = 32 - Ke(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Ke(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ht = (1 << (32 - Ke(t) + i)) | (n << i) | r),
      (gt = a + e);
  } else (ht = (1 << a) | (n << i) | r), (gt = e);
}
function Ol(e) {
  e.return !== null && (nn(e, 1), xp(e, 1, 0));
}
function Ll(e) {
  for (; e === Sa; ) (Sa = Fn[--$n]), (Fn[$n] = null), (xa = Fn[--$n]), (Fn[$n] = null);
  for (; e === gn; )
    (gn = Ae[--ze]), (Ae[ze] = null), (gt = Ae[--ze]), (Ae[ze] = null), (ht = Ae[--ze]), (Ae[ze] = null);
}
var Le = null,
  Oe = null,
  Q = !1,
  Ye = null;
function kp(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function If(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Oe = Vt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Oe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: ht, overflow: gt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (Oe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Cs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ps(e) {
  if (Q) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!If(e, t)) {
        if (Cs(e)) throw Error(P(418));
        t = Vt(n.nextSibling);
        var r = Le;
        t && If(e, t) ? kp(r, n) : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Le = e));
      }
    } else {
      if (Cs(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Le = e);
    }
  }
}
function Mf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Le = e;
}
function Ti(e) {
  if (e !== Le) return !1;
  if (!Q) return Mf(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Ss(e.type, e.memoizedProps))),
    t && (t = Oe))
  ) {
    if (Cs(e)) throw (bp(), Error(P(418)));
    for (; t; ) kp(e, t), (t = Vt(t.nextSibling));
  }
  if ((Mf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Oe = Vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = Le ? Vt(e.stateNode.nextSibling) : null;
  return !0;
}
function bp() {
  for (var e = Oe; e; ) e = Vt(e.nextSibling);
}
function nr() {
  (Oe = Le = null), (Q = !1);
}
function Tl(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var Ry = Et.ReactCurrentBatchConfig;
function vr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        a = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var s = i.refs;
            o === null ? delete s[a] : (s[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != 'string') throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Ri(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(P(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function Af(e) {
  var t = e._init;
  return t(e._payload);
}
function Cp(e) {
  function t(h, m) {
    if (e) {
      var p = h.deletions;
      p === null ? ((h.deletions = [m]), (h.flags |= 16)) : p.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; ) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function i(h, m) {
    return (h = Ht(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function a(h, m, p) {
    return (
      (h.index = p),
      e
        ? ((p = h.alternate), p !== null ? ((p = p.index), p < m ? ((h.flags |= 2), m) : p) : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, m, p, S) {
    return m === null || m.tag !== 6 ? ((m = Fo(p, h.mode, S)), (m.return = h), m) : ((m = i(m, p)), (m.return = h), m);
  }
  function l(h, m, p, S) {
    var y = p.type;
    return y === In
      ? c(h, m, p.props.children, S, p.key)
      : m !== null &&
        (m.elementType === y || (typeof y == 'object' && y !== null && y.$$typeof === Tt && Af(y) === m.type))
      ? ((S = i(m, p.props)), (S.ref = vr(h, m, p)), (S.return = h), S)
      : ((S = aa(p.type, p.key, p.props, null, h.mode, S)), (S.ref = vr(h, m, p)), (S.return = h), S);
  }
  function u(h, m, p, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== p.containerInfo ||
      m.stateNode.implementation !== p.implementation
      ? ((m = $o(p, h.mode, S)), (m.return = h), m)
      : ((m = i(m, p.children || [])), (m.return = h), m);
  }
  function c(h, m, p, S, y) {
    return m === null || m.tag !== 7
      ? ((m = mn(p, h.mode, S, y)), (m.return = h), m)
      : ((m = i(m, p)), (m.return = h), m);
  }
  function f(h, m, p) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = Fo('' + m, h.mode, p)), (m.return = h), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case xi:
          return (p = aa(m.type, m.key, m.props, null, h.mode, p)), (p.ref = vr(h, null, m)), (p.return = h), p;
        case Rn:
          return (m = $o(m, h.mode, p)), (m.return = h), m;
        case Tt:
          var S = m._init;
          return f(h, S(m._payload), p);
      }
      if (kr(m) || dr(m)) return (m = mn(m, h.mode, p, null)), (m.return = h), m;
      Ri(h, m);
    }
    return null;
  }
  function d(h, m, p, S) {
    var y = m !== null ? m.key : null;
    if ((typeof p == 'string' && p !== '') || typeof p == 'number') return y !== null ? null : s(h, m, '' + p, S);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case xi:
          return p.key === y ? l(h, m, p, S) : null;
        case Rn:
          return p.key === y ? u(h, m, p, S) : null;
        case Tt:
          return (y = p._init), d(h, m, y(p._payload), S);
      }
      if (kr(p) || dr(p)) return y !== null ? null : c(h, m, p, S, null);
      Ri(h, p);
    }
    return null;
  }
  function g(h, m, p, S, y) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number') return (h = h.get(p) || null), s(m, h, '' + S, y);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case xi:
          return (h = h.get(S.key === null ? p : S.key) || null), l(m, h, S, y);
        case Rn:
          return (h = h.get(S.key === null ? p : S.key) || null), u(m, h, S, y);
        case Tt:
          var k = S._init;
          return g(h, m, p, k(S._payload), y);
      }
      if (kr(S) || dr(S)) return (h = h.get(p) || null), c(m, h, S, y, null);
      Ri(m, S);
    }
    return null;
  }
  function w(h, m, p, S) {
    for (var y = null, k = null, b = m, _ = (m = 0), M = null; b !== null && _ < p.length; _++) {
      b.index > _ ? ((M = b), (b = null)) : (M = b.sibling);
      var I = d(h, b, p[_], S);
      if (I === null) {
        b === null && (b = M);
        break;
      }
      e && b && I.alternate === null && t(h, b),
        (m = a(I, m, _)),
        k === null ? (y = I) : (k.sibling = I),
        (k = I),
        (b = M);
    }
    if (_ === p.length) return n(h, b), Q && nn(h, _), y;
    if (b === null) {
      for (; _ < p.length; _++)
        (b = f(h, p[_], S)), b !== null && ((m = a(b, m, _)), k === null ? (y = b) : (k.sibling = b), (k = b));
      return Q && nn(h, _), y;
    }
    for (b = r(h, b); _ < p.length; _++)
      (M = g(b, h, _, p[_], S)),
        M !== null &&
          (e && M.alternate !== null && b.delete(M.key === null ? _ : M.key),
          (m = a(M, m, _)),
          k === null ? (y = M) : (k.sibling = M),
          (k = M));
    return (
      e &&
        b.forEach(function (re) {
          return t(h, re);
        }),
      Q && nn(h, _),
      y
    );
  }
  function v(h, m, p, S) {
    var y = dr(p);
    if (typeof y != 'function') throw Error(P(150));
    if (((p = y.call(p)), p == null)) throw Error(P(151));
    for (var k = (y = null), b = m, _ = (m = 0), M = null, I = p.next(); b !== null && !I.done; _++, I = p.next()) {
      b.index > _ ? ((M = b), (b = null)) : (M = b.sibling);
      var re = d(h, b, I.value, S);
      if (re === null) {
        b === null && (b = M);
        break;
      }
      e && b && re.alternate === null && t(h, b),
        (m = a(re, m, _)),
        k === null ? (y = re) : (k.sibling = re),
        (k = re),
        (b = M);
    }
    if (I.done) return n(h, b), Q && nn(h, _), y;
    if (b === null) {
      for (; !I.done; _++, I = p.next())
        (I = f(h, I.value, S)), I !== null && ((m = a(I, m, _)), k === null ? (y = I) : (k.sibling = I), (k = I));
      return Q && nn(h, _), y;
    }
    for (b = r(h, b); !I.done; _++, I = p.next())
      (I = g(b, h, _, I.value, S)),
        I !== null &&
          (e && I.alternate !== null && b.delete(I.key === null ? _ : I.key),
          (m = a(I, m, _)),
          k === null ? (y = I) : (k.sibling = I),
          (k = I));
    return (
      e &&
        b.forEach(function (ft) {
          return t(h, ft);
        }),
      Q && nn(h, _),
      y
    );
  }
  function x(h, m, p, S) {
    if (
      (typeof p == 'object' && p !== null && p.type === In && p.key === null && (p = p.props.children),
      typeof p == 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case xi:
          e: {
            for (var y = p.key, k = m; k !== null; ) {
              if (k.key === y) {
                if (((y = p.type), y === In)) {
                  if (k.tag === 7) {
                    n(h, k.sibling), (m = i(k, p.props.children)), (m.return = h), (h = m);
                    break e;
                  }
                } else if (
                  k.elementType === y ||
                  (typeof y == 'object' && y !== null && y.$$typeof === Tt && Af(y) === k.type)
                ) {
                  n(h, k.sibling), (m = i(k, p.props)), (m.ref = vr(h, k, p)), (m.return = h), (h = m);
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            p.type === In
              ? ((m = mn(p.props.children, h.mode, S, p.key)), (m.return = h), (h = m))
              : ((S = aa(p.type, p.key, p.props, null, h.mode, S)), (S.ref = vr(h, m, p)), (S.return = h), (h = S));
          }
          return o(h);
        case Rn:
          e: {
            for (k = p.key; m !== null; ) {
              if (m.key === k)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === p.containerInfo &&
                  m.stateNode.implementation === p.implementation
                ) {
                  n(h, m.sibling), (m = i(m, p.children || [])), (m.return = h), (h = m);
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = $o(p, h.mode, S)), (m.return = h), (h = m);
          }
          return o(h);
        case Tt:
          return (k = p._init), x(h, m, k(p._payload), S);
      }
      if (kr(p)) return w(h, m, p, S);
      if (dr(p)) return v(h, m, p, S);
      Ri(h, p);
    }
    return (typeof p == 'string' && p !== '') || typeof p == 'number'
      ? ((p = '' + p),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = i(m, p)), (m.return = h), (h = m))
          : (n(h, m), (m = Fo(p, h.mode, S)), (m.return = h), (h = m)),
        o(h))
      : n(h, m);
  }
  return x;
}
var rr = Cp(!0),
  Pp = Cp(!1),
  ka = Jt(null),
  ba = null,
  Vn = null,
  Rl = null;
function Il() {
  Rl = Vn = ba = null;
}
function Ml(e) {
  var t = ka.current;
  q(ka), (e._currentValue = t);
}
function Es(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gn(e, t) {
  (ba = e),
    (Rl = Vn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function Fe(e) {
  var t = e._currentValue;
  if (Rl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (ba === null) throw Error(P(308));
      (Vn = e), (ba.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return t;
}
var sn = null;
function Al(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function Ep(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), Al(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), xt(e, r);
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Rt = !1;
function zl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _p(e, t) {
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
function vt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), xt(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Al(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Zi(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xl(e, n);
  }
}
function zf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ca(e, t, n, r) {
  var i = e.updateQueue;
  Rt = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), o === null ? (a = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== o && (s === null ? (c.firstBaseUpdate = u) : (s.next = u), (c.lastBaseUpdate = l)));
  }
  if (a !== null) {
    var f = i.baseState;
    (o = 0), (c = u = l = null), (s = a);
    do {
      var d = s.lane,
        g = s.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next = { eventTime: g, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var w = e,
            v = s;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == 'function')) {
                f = w.call(g, f, d);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (((w = v.payload), (d = typeof w == 'function' ? w.call(g, f, d) : w), d == null)) break e;
              f = J({}, f, d);
              break e;
            case 2:
              Rt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [s]) : d.push(s));
      } else
        (g = { eventTime: g, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (o |= d);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (d = s), (s = d.next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (yn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function jf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(P(191, i));
        i.call(r);
      }
    }
}
var mi = {},
  ct = Jt(mi),
  Qr = Jt(mi),
  Xr = Jt(mi);
function ln(e) {
  if (e === mi) throw Error(P(174));
  return e;
}
function jl(e, t) {
  switch ((B(Xr, t), B(Qr, e), B(ct, mi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : os(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = os(t, e));
  }
  q(ct), B(ct, t);
}
function ir() {
  q(ct), q(Qr), q(Xr);
}
function Np(e) {
  ln(Xr.current);
  var t = ln(ct.current),
    n = os(t, e.type);
  t !== n && (B(Qr, e), B(ct, n));
}
function Dl(e) {
  Qr.current === e && (q(ct), q(Qr));
}
var X = Jt(0);
function Pa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var Io = [];
function Fl() {
  for (var e = 0; e < Io.length; e++) Io[e]._workInProgressVersionPrimary = null;
  Io.length = 0;
}
var ea = Et.ReactCurrentDispatcher,
  Mo = Et.ReactCurrentBatchConfig,
  vn = 0,
  G = null,
  ae = null,
  le = null,
  Ea = !1,
  Tr = !1,
  Gr = 0,
  Iy = 0;
function pe() {
  throw Error(P(321));
}
function $l(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function Vl(e, t, n, r, i, a) {
  if (
    ((vn = a),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ea.current = e === null || e.memoizedState === null ? jy : Dy),
    (e = n(r, i)),
    Tr)
  ) {
    a = 0;
    do {
      if (((Tr = !1), (Gr = 0), 25 <= a)) throw Error(P(301));
      (a += 1), (le = ae = null), (t.updateQueue = null), (ea.current = Fy), (e = n(r, i));
    } while (Tr);
  }
  if (((ea.current = _a), (t = ae !== null && ae.next !== null), (vn = 0), (le = ae = G = null), (Ea = !1), t))
    throw Error(P(300));
  return e;
}
function Ul() {
  var e = Gr !== 0;
  return (Gr = 0), e;
}
function rt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? (G.memoizedState = le = e) : (le = le.next = e), le;
}
function $e() {
  if (ae === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = le === null ? G.memoizedState : le.next;
  if (t !== null) (le = t), (ae = e);
  else {
    if (e === null) throw Error(P(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      le === null ? (G.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Jr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ao(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = ae,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var s = (o = null),
      l = null,
      u = a;
    do {
      var c = u.lane;
      if ((vn & c) === c)
        l !== null &&
          (l = l.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? ((s = l = f), (o = r)) : (l = l.next = f), (G.lanes |= c), (yn |= c);
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? (o = r) : (l.next = s),
      Xe(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (G.lanes |= a), (yn |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zo(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    Xe(a, t.memoizedState) || (Ce = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function Op() {}
function Lp(e, t) {
  var n = G,
    r = $e(),
    i = t(),
    a = !Xe(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    Wl(Ip.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Zr(9, Rp.bind(null, n, r, i, t), void 0, null), ue === null)) throw Error(P(349));
    vn & 30 || Tp(n, t, i);
  }
  return i;
}
function Tp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (G.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Mp(t) && Ap(e);
}
function Ip(e, t, n) {
  return n(function () {
    Mp(t) && Ap(e);
  });
}
function Mp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function Ap(e) {
  var t = xt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function Df(e) {
  var t = rt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jr, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = zy.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (G.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function zp() {
  return $e().memoizedState;
}
function ta(e, t, n, r) {
  var i = rt();
  (G.flags |= e), (i.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ga(e, t, n, r) {
  var i = $e();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (ae !== null) {
    var o = ae.memoizedState;
    if (((a = o.destroy), r !== null && $l(r, o.deps))) {
      i.memoizedState = Zr(t, n, a, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = Zr(1 | t, n, a, r));
}
function Ff(e, t) {
  return ta(8390656, 8, e, t);
}
function Wl(e, t) {
  return Ga(2048, 8, e, t);
}
function jp(e, t) {
  return Ga(4, 2, e, t);
}
function Dp(e, t) {
  return Ga(4, 4, e, t);
}
function Fp(e, t) {
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
function $p(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Ga(4, 4, Fp.bind(null, t, e), n);
}
function Bl() {}
function Vp(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $l(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Up(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $l(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wp(e, t, n) {
  return vn & 21
    ? (Xe(n, t) || ((n = Km()), (G.lanes |= n), (yn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function My(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Mo.transition;
  Mo.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Mo.transition = r);
  }
}
function Bp() {
  return $e().memoizedState;
}
function Ay(e, t, n) {
  var r = Bt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Hp(e))) Yp(t, n);
  else if (((n = Ep(e, t, n, r)), n !== null)) {
    var i = we();
    Qe(n, e, r, i), qp(n, t, r);
  }
}
function zy(e, t, n) {
  var r = Bt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hp(e)) Yp(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
      try {
        var o = t.lastRenderedState,
          s = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Xe(s, o))) {
          var l = t.interleaved;
          l === null ? ((i.next = i), Al(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ep(e, t, i, r)), n !== null && ((i = we()), Qe(n, e, r, i), qp(n, t, r));
  }
}
function Hp(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Yp(e, t) {
  Tr = Ea = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function qp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xl(e, n);
  }
}
var _a = {
    readContext: Fe,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  jy = {
    readContext: Fe,
    useCallback: function (e, t) {
      return (rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Fe,
    useEffect: Ff,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), ta(4194308, 4, Fp.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return ta(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ta(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ay.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Df,
    useDebugValue: Bl,
    useDeferredValue: function (e) {
      return (rt().memoizedState = e);
    },
    useTransition: function () {
      var e = Df(!1),
        t = e[0];
      return (e = My.bind(null, e[1])), (rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = rt();
      if (Q) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(P(349));
        vn & 30 || Tp(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        Ff(Ip.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Zr(9, Rp.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rt(),
        t = ue.identifierPrefix;
      if (Q) {
        var n = gt,
          r = ht;
        (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Gr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Iy++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Dy = {
    readContext: Fe,
    useCallback: Vp,
    useContext: Fe,
    useEffect: Wl,
    useImperativeHandle: $p,
    useInsertionEffect: jp,
    useLayoutEffect: Dp,
    useMemo: Up,
    useReducer: Ao,
    useRef: zp,
    useState: function () {
      return Ao(Jr);
    },
    useDebugValue: Bl,
    useDeferredValue: function (e) {
      var t = $e();
      return Wp(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Ao(Jr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: Op,
    useSyncExternalStore: Lp,
    useId: Bp,
    unstable_isNewReconciler: !1,
  },
  Fy = {
    readContext: Fe,
    useCallback: Vp,
    useContext: Fe,
    useEffect: Wl,
    useImperativeHandle: $p,
    useInsertionEffect: jp,
    useLayoutEffect: Dp,
    useMemo: Up,
    useReducer: zo,
    useRef: zp,
    useState: function () {
      return zo(Jr);
    },
    useDebugValue: Bl,
    useDeferredValue: function (e) {
      var t = $e();
      return ae === null ? (t.memoizedState = e) : Wp(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = zo(Jr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: Op,
    useSyncExternalStore: Lp,
    useId: Bp,
    unstable_isNewReconciler: !1,
  };
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function _s(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ja = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = Bt(e),
      a = vt(r, i);
    (a.payload = t), n != null && (a.callback = n), (t = Ut(e, a, i)), t !== null && (Qe(t, e, i, r), Zi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = Bt(e),
      a = vt(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Ut(e, a, i)),
      t !== null && (Qe(t, e, i, r), Zi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Bt(e),
      i = vt(n, r);
    (i.tag = 2), t != null && (i.callback = t), (t = Ut(e, i, r)), t !== null && (Qe(t, e, r, n), Zi(t, e, r));
  },
};
function $f(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Hr(n, r) || !Hr(i, a)
      : !0
  );
}
function Kp(e, t, n) {
  var r = !1,
    i = qt,
    a = t.contextType;
  return (
    typeof a == 'object' && a !== null
      ? (a = Fe(a))
      : ((i = Ee(t) ? hn : ve.current), (r = t.contextTypes), (a = (r = r != null) ? tr(e, i) : qt)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ja),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Vf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ja.enqueueReplaceState(t, t.state, null);
}
function Ns(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), zl(e);
  var a = t.contextType;
  typeof a == 'object' && a !== null ? (i.context = Fe(a)) : ((a = Ee(t) ? hn : ve.current), (i.context = tr(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == 'function' && (_s(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && Ja.enqueueReplaceState(i, i.state, null),
      Ca(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function ar(e, t) {
  try {
    var n = '',
      r = t;
    do (n += mv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function jo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Os(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $y = typeof WeakMap == 'function' ? WeakMap : Map;
function Qp(e, t, n) {
  (n = vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Oa || ((Oa = !0), (Fs = r)), Os(e, t);
    }),
    n
  );
}
function Xp(e, t, n) {
  (n = vt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Os(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == 'function' &&
      (n.callback = function () {
        Os(e, t), typeof r != 'function' && (Wt === null ? (Wt = new Set([this])) : Wt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function Uf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $y();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = e1.bind(null, e, t, n)), t.then(e, e));
}
function Wf(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = vt(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Vy = Et.ReactCurrentOwner,
  Ce = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Pp(t, null, n, r) : rr(t, e.child, n, r);
}
function Hf(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    Gn(t, i),
    (r = Vl(e, t, n, r, a, i)),
    (n = Ul()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), kt(e, t, i))
      : (Q && n && Ol(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  );
}
function Yf(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == 'function' &&
      !Jl(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Gp(e, t, a, r, i))
      : ((e = aa(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Hr), n(o, r) && e.ref === t.ref)) return kt(e, t, i);
  }
  return (t.flags |= 1), (e = Ht(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Gp(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Hr(a, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0)) e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), kt(e, t, i);
  }
  return Ls(e, t, n, r, i);
}
function Jp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), B(Wn, Ne), (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          B(Wn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        B(Wn, Ne),
        (Ne |= r);
    }
  else a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), B(Wn, Ne), (Ne |= r);
  return ye(e, t, i, n), t.child;
}
function Zp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Ls(e, t, n, r, i) {
  var a = Ee(n) ? hn : ve.current;
  return (
    (a = tr(t, a)),
    Gn(t, i),
    (n = Vl(e, t, n, r, a, i)),
    (r = Ul()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), kt(e, t, i))
      : (Q && r && Ol(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  );
}
function qf(e, t, n, r, i) {
  if (Ee(n)) {
    var a = !0;
    wa(t);
  } else a = !1;
  if ((Gn(t, i), t.stateNode === null)) na(e, t), Kp(t, n, r), Ns(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var l = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null ? (u = Fe(u)) : ((u = Ee(n) ? hn : ve.current), (u = tr(t, u)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && Vf(t, o, r, u)),
      (Rt = !1);
    var d = t.memoizedState;
    (o.state = d),
      Ca(t, r, o, i),
      (l = t.memoizedState),
      s !== r || d !== l || Pe.current || Rt
        ? (typeof c == 'function' && (_s(t, n, c, r), (l = t.memoizedState)),
          (s = Rt || $f(t, n, s, r, d, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = s))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode),
      _p(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Be(t.type, s)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null ? (l = Fe(l)) : ((l = Ee(n) ? hn : ve.current), (l = tr(t, l)));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== l) && Vf(t, o, r, l)),
      (Rt = !1),
      (d = t.memoizedState),
      (o.state = d),
      Ca(t, r, o, i);
    var w = t.memoizedState;
    s !== f || d !== w || Pe.current || Rt
      ? (typeof g == 'function' && (_s(t, n, g, r), (w = t.memoizedState)),
        (u = Rt || $f(t, n, u, r, d, w, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, w, l),
              typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(r, w, l)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ts(e, t, n, r, a, i);
}
function Ts(e, t, n, r, i, a) {
  Zp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Rf(t, n, !1), kt(e, t, a);
  (r = t.stateNode), (Vy.current = t);
  var s = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o ? ((t.child = rr(t, e.child, null, a)), (t.child = rr(t, null, s, a))) : ye(e, t, s, a),
    (t.memoizedState = r.state),
    i && Rf(t, n, !0),
    t.child
  );
}
function eh(e) {
  var t = e.stateNode;
  t.pendingContext ? Tf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tf(e, t.context, !1),
    jl(e, t.containerInfo);
}
function Kf(e, t, n, r, i) {
  return nr(), Tl(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Is(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function th(e, t, n) {
  var r = t.pendingProps,
    i = X.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    B(X, i & 1),
    e === null)
  )
    return (
      Ps(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && a !== null ? ((a.childLanes = 0), (a.pendingProps = o)) : (a = to(o, r, 0, null)),
              (e = mn(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Is(n)),
              (t.memoizedState = Rs),
              e)
            : Hl(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null))) return Uy(e, t, o, r, s, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = Ht(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (a = Ht(s, a)) : ((a = mn(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o = o === null ? Is(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Rs),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Ht(a, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Hl(e, t) {
  return (t = to({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ii(e, t, n, r) {
  return (
    r !== null && Tl(r),
    rr(t, e.child, null, n),
    (e = Hl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Uy(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = jo(Error(P(422)))), Ii(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = to({ mode: 'visible', children: r.children }, i, 0, null)),
        (a = mn(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && rr(t, e.child, null, o),
        (t.child.memoizedState = Is(o)),
        (t.memoizedState = Rs),
        a);
  if (!(t.mode & 1)) return Ii(e, t, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (a = Error(P(419))), (r = jo(a, r, void 0)), Ii(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), Ce || s)) {
    if (((r = ue), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== a.retryLane && ((a.retryLane = i), xt(e, i), Qe(r, e, i, -1));
    }
    return Gl(), (r = jo(Error(P(421)))), Ii(e, t, o, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = t1.bind(null, e)), (i._reactRetry = t), null)
    : ((e = a.treeContext),
      (Oe = Vt(i.nextSibling)),
      (Le = t),
      (Q = !0),
      (Ye = null),
      e !== null && ((Ae[ze++] = ht), (Ae[ze++] = gt), (Ae[ze++] = gn), (ht = e.id), (gt = e.overflow), (gn = t)),
      (t = Hl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Es(e.return, t, n);
}
function Do(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function nh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((ye(e, t, r.children, n), (r = X.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qf(e, n, t);
        else if (e.tag === 19) Qf(e, n, t);
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
    r &= 1;
  }
  if ((B(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && Pa(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Do(t, !1, i, n, a);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Pa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Do(t, !0, n, null, a);
        break;
      case 'together':
        Do(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function na(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (yn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wy(e, t, n) {
  switch (t.tag) {
    case 3:
      eh(t), nr();
      break;
    case 5:
      Np(t);
      break;
    case 1:
      Ee(t.type) && wa(t);
      break;
    case 4:
      jl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      B(ka, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? th(e, t, n)
          : (B(X, X.current & 1), (e = kt(e, t, n)), e !== null ? e.sibling : null);
      B(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Jp(e, t, n);
  }
  return kt(e, t, n);
}
var rh, Ms, ih, ah;
rh = function (e, t) {
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
};
Ms = function () {};
ih = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ln(ct.current);
    var a = null;
    switch (n) {
      case 'input':
        (i = ns(e, i)), (r = ns(e, r)), (a = []);
        break;
      case 'select':
        (i = J({}, i, { value: void 0 })), (r = J({}, r, { value: void 0 })), (a = []);
        break;
      case 'textarea':
        (i = as(e, i)), (r = as(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = va);
    }
    ss(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var s = i[u];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Dr.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (((s = i != null ? i[u] : void 0), r.hasOwnProperty(u) && l !== s && (l != null || s != null)))
        if (u === 'style')
          if (s) {
            for (o in s) !s.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
            for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
          } else n || (a || (a = []), a.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (a = a || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') || (a = a || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Dr.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && H('scroll', e), a || s === l || (a = []))
                : (a = a || []).push(u, l));
    }
    n && (a = a || []).push('style', n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ah = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function By(e, t, n) {
  var r = t.pendingProps;
  switch ((Ll(t), t.tag)) {
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
      return he(t), null;
    case 1:
      return Ee(t.type) && ya(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ir(),
        q(Pe),
        q(ve),
        Fl(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ti(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Us(Ye), (Ye = null)))),
        Ms(e, t),
        he(t),
        null
      );
    case 5:
      Dl(t);
      var i = ln(Xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ih(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return he(t), null;
        }
        if (((e = ln(ct.current)), Ti(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[it] = t), (r[Kr] = a), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              H('cancel', r), H('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              H('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Cr.length; i++) H(Cr[i], r);
              break;
            case 'source':
              H('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              H('error', r), H('load', r);
              break;
            case 'details':
              H('toggle', r);
              break;
            case 'input':
              rf(r, a), H('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!a.multiple }), H('invalid', r);
              break;
            case 'textarea':
              of(r, a), H('invalid', r);
          }
          ss(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var s = a[o];
              o === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (a.suppressHydrationWarning !== !0 && Li(r.textContent, s, e), (i = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (a.suppressHydrationWarning !== !0 && Li(r.textContent, s, e), (i = ['children', '' + s]))
                : Dr.hasOwnProperty(o) && s != null && o === 'onScroll' && H('scroll', r);
            }
          switch (n) {
            case 'input':
              ki(r), af(r, a, !0);
              break;
            case 'textarea':
              ki(r), sf(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof a.onClick == 'function' && (r.onclick = va);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Im(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[it] = t),
            (e[Kr] = r),
            rh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ls(n, r)), n)) {
              case 'dialog':
                H('cancel', e), H('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                H('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Cr.length; i++) H(Cr[i], e);
                i = r;
                break;
              case 'source':
                H('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                H('error', e), H('load', e), (i = r);
                break;
              case 'details':
                H('toggle', e), (i = r);
                break;
              case 'input':
                rf(e, r), (i = ns(e, r)), H('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = J({}, r, { value: void 0 })), H('invalid', e);
                break;
              case 'textarea':
                of(e, r), (i = as(e, r)), H('invalid', e);
                break;
              default:
                i = r;
            }
            ss(n, i), (s = i);
            for (a in s)
              if (s.hasOwnProperty(a)) {
                var l = s[a];
                a === 'style'
                  ? zm(e, l)
                  : a === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Mm(e, l))
                  : a === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Fr(e, l)
                    : typeof l == 'number' && Fr(e, '' + l)
                  : a !== 'suppressContentEditableWarning' &&
                    a !== 'suppressHydrationWarning' &&
                    a !== 'autoFocus' &&
                    (Dr.hasOwnProperty(a)
                      ? l != null && a === 'onScroll' && H('scroll', e)
                      : l != null && hl(e, a, l, o));
              }
            switch (n) {
              case 'input':
                ki(e), af(e, r, !1);
                break;
              case 'textarea':
                ki(e), sf(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Yt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? qn(e, !!r.multiple, a, !1)
                    : r.defaultValue != null && qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = va);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) ah(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(P(166));
        if (((n = ln(Xr.current)), ln(ct.current), Ti(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[it] = t), (a = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                Li(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Li(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[it] = t), (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (q(X), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Oe !== null && t.mode & 1 && !(t.flags & 128)) bp(), nr(), (t.flags |= 98560), (a = !1);
        else if (((a = Ti(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(P(318));
            if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a)) throw Error(P(317));
            a[it] = t;
          } else nr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (a = !1);
        } else Ye !== null && (Us(Ye), (Ye = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || X.current & 1 ? oe === 0 && (oe = 3) : Gl())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return ir(), Ms(e, t), e === null && Yr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return Ml(t.type._context), he(t), null;
    case 17:
      return Ee(t.type) && ya(), he(t), null;
    case 19:
      if ((q(X), (a = t.memoizedState), a === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) yr(a, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Pa(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yr(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return B(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null && ne() > or && ((t.flags |= 128), (r = !0), yr(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Pa(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(a, !0),
              a.tail === null && a.tailMode === 'hidden' && !o.alternate && !Q)
            )
              return he(t), null;
          } else
            2 * ne() - a.renderingStartTime > or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last), n !== null ? (n.sibling = o) : (t.child = o), (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = ne()),
          (t.sibling = null),
          (n = X.current),
          B(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        Xl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ne & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Hy(e, t) {
  switch ((Ll(t), t.tag)) {
    case 1:
      return Ee(t.type) && ya(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        ir(), q(Pe), q(ve), Fl(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Dl(t), null;
    case 13:
      if ((q(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340));
        nr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return q(X), null;
    case 4:
      return ir(), null;
    case 10:
      return Ml(t.type._context), null;
    case 22:
    case 23:
      return Xl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mi = !1,
  ge = !1,
  Yy = typeof WeakSet == 'function' ? WeakSet : Set,
  O = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function As(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Xf = !1;
function qy(e, t) {
  if (((ys = pa), (e = cp()), Nl(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = o + i),
                f !== a || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if ((d === n && ++u === i && (s = o), d === a && ++c === r && (l = o), (g = f.nextSibling) !== null))
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ws = { focusedElem: e, selectionRange: n }, pa = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    x = w.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Be(t.type, v), x);
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = '')
                  : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (S) {
          Z(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (w = Xf), (Xf = !1), w;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && As(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Za(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function zs(e) {
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
function oh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), oh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[it], delete t[Kr], delete t[ks], delete t[Oy], delete t[Ly])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function sh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function js(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = va));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (js(e, t, n), e = e.sibling; e !== null; ) js(e, t, n), (e = e.sibling);
}
function Ds(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ds(e, t, n), e = e.sibling; e !== null; ) Ds(e, t, n), (e = e.sibling);
}
var fe = null,
  He = !1;
function Nt(e, t, n) {
  for (n = n.child; n !== null; ) lh(e, t, n), (n = n.sibling);
}
function lh(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == 'function')
    try {
      ut.onCommitFiberUnmount(Ha, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || Un(n, t);
    case 6:
      var r = fe,
        i = He;
      (fe = null),
        Nt(e, t, n),
        (fe = r),
        (He = i),
        fe !== null &&
          (He
            ? ((e = fe), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (He
          ? ((e = fe), (n = n.stateNode), e.nodeType === 8 ? To(e.parentNode, n) : e.nodeType === 1 && To(e, n), Wr(e))
          : To(fe, n.stateNode));
      break;
    case 4:
      (r = fe), (i = He), (fe = n.stateNode.containerInfo), (He = !0), Nt(e, t, n), (fe = r), (He = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag), o !== void 0 && (a & 2 || a & 4) && As(n, t, o), (i = i.next);
        } while (i !== r);
      }
      Nt(e, t, n);
      break;
    case 1:
      if (!ge && (Un(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (s) {
          Z(n, t, s);
        }
      Nt(e, t, n);
      break;
    case 21:
      Nt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((ge = (r = ge) || n.memoizedState !== null), Nt(e, t, n), (ge = r)) : Nt(e, t, n);
      break;
    default:
      Nt(e, t, n);
  }
}
function Jf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Yy()),
      t.forEach(function (r) {
        var i = n1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (fe = s.stateNode), (He = !1);
              break e;
            case 3:
              (fe = s.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (fe = s.stateNode.containerInfo), (He = !0);
              break e;
          }
          s = s.return;
        }
        if (fe === null) throw Error(P(160));
        lh(a, o, i), (fe = null), (He = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) uh(t, e), (t = t.sibling);
}
function uh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), nt(e), r & 4)) {
        try {
          Rr(3, e, e.return), Za(3, e);
        } catch (v) {
          Z(e, e.return, v);
        }
        try {
          Rr(5, e, e.return);
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      break;
    case 1:
      We(t, e), nt(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if ((We(t, e), nt(e), r & 512 && n !== null && Un(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          Fr(i, '');
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && a.type === 'radio' && a.name != null && Tm(i, a), ls(s, o);
            var u = ls(s, a);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === 'style'
                ? zm(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? Mm(i, f)
                : c === 'children'
                ? Fr(i, f)
                : hl(i, c, f, u);
            }
            switch (s) {
              case 'input':
                rs(i, a);
                break;
              case 'textarea':
                Rm(i, a);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var g = a.value;
                g != null
                  ? qn(i, !!a.multiple, g, !1)
                  : d !== !!a.multiple &&
                    (a.defaultValue != null
                      ? qn(i, !!a.multiple, a.defaultValue, !0)
                      : qn(i, !!a.multiple, a.multiple ? [] : '', !1));
            }
            i[Kr] = a;
          } catch (v) {
            Z(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((We(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((We(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Wr(t.containerInfo);
        } catch (v) {
          Z(e, e.return, v);
        }
      break;
    case 4:
      We(t, e), nt(e);
      break;
    case 13:
      We(t, e),
        nt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a || (i.alternate !== null && i.alternate.memoizedState !== null) || (Kl = ne())),
        r & 4 && Jf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (u = ge) || c), We(t, e), (ge = u)) : We(t, e),
        nt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (O = e, c = e.child; c !== null; ) {
            for (f = O = c; O !== null; ) {
              switch (((d = O), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rr(4, d, d.return);
                  break;
                case 1:
                  Un(d, d.return);
                  var w = d.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r), (w.props = t.memoizedProps), (w.state = t.memoizedState), w.componentWillUnmount();
                    } catch (v) {
                      Z(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Un(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ed(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (O = g)) : ed(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((a = i.style),
                      typeof a.setProperty == 'function'
                        ? a.setProperty('display', 'none', 'important')
                        : (a.display = 'none'))
                    : ((s = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (s.style.display = Am('display', o)));
              } catch (v) {
                Z(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (v) {
                Z(e, e.return, v);
              }
          } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      We(t, e), nt(e), r & 4 && Jf(e);
      break;
    case 21:
      break;
    default:
      We(t, e), nt(e);
  }
}
function nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Fr(i, ''), (r.flags &= -33));
          var a = Gf(e);
          Ds(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Gf(e);
          js(e, s, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (l) {
      Z(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ky(e, t, n) {
  (O = e), ch(e);
}
function ch(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Mi;
      if (!o) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || ge;
        s = Mi;
        var u = ge;
        if (((Mi = o), (ge = l) && !u))
          for (O = i; O !== null; )
            (o = O),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null ? td(i) : l !== null ? ((l.return = o), (O = l)) : td(i);
        for (; a !== null; ) (O = a), ch(a), (a = a.sibling);
        (O = i), (Mi = s), (ge = u);
      }
      Zf(e);
    } else i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (O = a)) : Zf(e);
  }
}
function Zf(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || Za(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var a = t.updateQueue;
              a !== null && jf(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                jf(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Wr(f);
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
              throw Error(P(163));
          }
        ge || (t.flags & 512 && zs(t));
      } catch (d) {
        Z(t, t.return, d);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function ed(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function td(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Za(4, t);
          } catch (l) {
            Z(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Z(t, i, l);
            }
          }
          var a = t.return;
          try {
            zs(t);
          } catch (l) {
            Z(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            zs(t);
          } catch (l) {
            Z(t, o, l);
          }
      }
    } catch (l) {
      Z(t, t.return, l);
    }
    if (t === e) {
      O = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (O = s);
      break;
    }
    O = t.return;
  }
}
var Qy = Math.ceil,
  Na = Et.ReactCurrentDispatcher,
  Yl = Et.ReactCurrentOwner,
  De = Et.ReactCurrentBatchConfig,
  F = 0,
  ue = null,
  ie = null,
  de = 0,
  Ne = 0,
  Wn = Jt(0),
  oe = 0,
  ei = null,
  yn = 0,
  eo = 0,
  ql = 0,
  Ir = null,
  be = null,
  Kl = 0,
  or = 1 / 0,
  mt = null,
  Oa = !1,
  Fs = null,
  Wt = null,
  Ai = !1,
  zt = null,
  La = 0,
  Mr = 0,
  $s = null,
  ra = -1,
  ia = 0;
function we() {
  return F & 6 ? ne() : ra !== -1 ? ra : (ra = ne());
}
function Bt(e) {
  return e.mode & 1
    ? F & 2 && de !== 0
      ? de & -de
      : Ry.transition !== null
      ? (ia === 0 && (ia = Km()), ia)
      : ((e = U), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tp(e.type))), e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < Mr) throw ((Mr = 0), ($s = null), Error(P(185)));
  ci(e, n, r),
    (!(F & 2) || e !== ue) &&
      (e === ue && (!(F & 2) && (eo |= n), oe === 4 && Mt(e, de)),
      _e(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((or = ne() + 500), Xa && Zt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  Rv(e, t);
  var r = ma(e, e === ue ? de : 0);
  if (r === 0) n !== null && cf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && cf(n), t === 1))
      e.tag === 0 ? Ty(nd.bind(null, e)) : Sp(nd.bind(null, e)),
        _y(function () {
          !(F & 6) && Zt();
        }),
        (n = null);
    else {
      switch (Qm(r)) {
        case 1:
          n = Sl;
          break;
        case 4:
          n = Ym;
          break;
        case 16:
          n = da;
          break;
        case 536870912:
          n = qm;
          break;
        default:
          n = da;
      }
      n = yh(n, fh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fh(e, t) {
  if (((ra = -1), (ia = 0), F & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = ma(e, e === ue ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ta(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var a = mh();
    (ue !== e || de !== t) && ((mt = null), (or = ne() + 500), dn(e, t));
    do
      try {
        Jy();
        break;
      } catch (s) {
        dh(e, s);
      }
    while (!0);
    Il(), (Na.current = a), (F = i), ie !== null ? (t = 0) : ((ue = null), (de = 0), (t = oe));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = ms(e)), i !== 0 && ((r = i), (t = Vs(e, i)))), t === 1))
      throw ((n = ei), dn(e, 0), Mt(e, r), _e(e, ne()), n);
    if (t === 6) Mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Xy(i) &&
          ((t = Ta(e, r)), t === 2 && ((a = ms(e)), a !== 0 && ((r = a), (t = Vs(e, a)))), t === 1))
      )
        throw ((n = ei), dn(e, 0), Mt(e, r), _e(e, ne()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          rn(e, be, mt);
          break;
        case 3:
          if ((Mt(e, r), (r & 130023424) === r && ((t = Kl + 500 - ne()), 10 < t))) {
            if (ma(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = xs(rn.bind(null, e, be, mt), t);
            break;
          }
          rn(e, be, mt);
          break;
        case 4:
          if ((Mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ke(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Qy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xs(rn.bind(null, e, be, mt), r);
            break;
          }
          rn(e, be, mt);
          break;
        case 5:
          rn(e, be, mt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return _e(e, ne()), e.callbackNode === n ? fh.bind(null, e) : null;
}
function Vs(e, t) {
  var n = Ir;
  return (
    e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
    (e = Ta(e, t)),
    e !== 2 && ((t = be), (be = n), t !== null && Us(t)),
    e
  );
}
function Us(e) {
  be === null ? (be = e) : be.push.apply(be, e);
}
function Xy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Xe(a(), i)) return !1;
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
function Mt(e, t) {
  for (t &= ~ql, t &= ~eo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function nd(e) {
  if (F & 6) throw Error(P(327));
  Jn();
  var t = ma(e, 0);
  if (!(t & 1)) return _e(e, ne()), null;
  var n = Ta(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ms(e);
    r !== 0 && ((t = r), (n = Vs(e, r)));
  }
  if (n === 1) throw ((n = ei), dn(e, 0), Mt(e, t), _e(e, ne()), n);
  if (n === 6) throw Error(P(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), rn(e, be, mt), _e(e, ne()), null;
}
function Ql(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((or = ne() + 500), Xa && Zt());
  }
}
function wn(e) {
  zt !== null && zt.tag === 0 && !(F & 6) && Jn();
  var t = F;
  F |= 1;
  var n = De.transition,
    r = U;
  try {
    if (((De.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (De.transition = n), (F = t), !(F & 6) && Zt();
  }
}
function Xl() {
  (Ne = Wn.current), q(Wn);
}
function dn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ey(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((Ll(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ya();
          break;
        case 3:
          ir(), q(Pe), q(ve), Fl();
          break;
        case 5:
          Dl(r);
          break;
        case 4:
          ir();
          break;
        case 13:
          q(X);
          break;
        case 19:
          q(X);
          break;
        case 10:
          Ml(r.type._context);
          break;
        case 22:
        case 23:
          Xl();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (ie = e = Ht(e.current, null)),
    (de = Ne = t),
    (oe = 0),
    (ei = null),
    (ql = eo = yn = 0),
    (be = Ir = null),
    sn !== null)
  ) {
    for (t = 0; t < sn.length; t++)
      if (((n = sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    sn = null;
  }
  return e;
}
function dh(e, t) {
  do {
    var n = ie;
    try {
      if ((Il(), (ea.current = _a), Ea)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ea = !1;
      }
      if (((vn = 0), (le = ae = G = null), (Tr = !1), (Gr = 0), (Yl.current = null), n === null || n.return === null)) {
        (oe = 1), (ei = t), (ie = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          s = n,
          l = t;
        if (((t = de), (s.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
          var u = l,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue), (c.memoizedState = d.memoizedState), (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Wf(o);
          if (g !== null) {
            (g.flags &= -257), Bf(g, o, s, a, t), g.mode & 1 && Uf(a, u, t), (t = g), (l = u);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Uf(a, u, t), Gl();
              break e;
            }
            l = Error(P(426));
          }
        } else if (Q && s.mode & 1) {
          var x = Wf(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Bf(x, o, s, a, t), Tl(ar(l, s));
            break e;
          }
        }
        (a = l = ar(l, s)), oe !== 4 && (oe = 2), Ir === null ? (Ir = [a]) : Ir.push(a), (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var h = Qp(a, l, t);
              zf(a, h);
              break e;
            case 1:
              s = l;
              var m = a.type,
                p = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (p !== null && typeof p.componentDidCatch == 'function' && (Wt === null || !Wt.has(p))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var S = Xp(a, s, t);
                zf(a, S);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      hh(n);
    } catch (y) {
      (t = y), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mh() {
  var e = Na.current;
  return (Na.current = _a), e === null ? _a : e;
}
function Gl() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), ue === null || (!(yn & 268435455) && !(eo & 268435455)) || Mt(ue, de);
}
function Ta(e, t) {
  var n = F;
  F |= 2;
  var r = mh();
  (ue !== e || de !== t) && ((mt = null), dn(e, t));
  do
    try {
      Gy();
      break;
    } catch (i) {
      dh(e, i);
    }
  while (!0);
  if ((Il(), (F = n), (Na.current = r), ie !== null)) throw Error(P(261));
  return (ue = null), (de = 0), oe;
}
function Gy() {
  for (; ie !== null; ) ph(ie);
}
function Jy() {
  for (; ie !== null && !bv(); ) ph(ie);
}
function ph(e) {
  var t = vh(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps), t === null ? hh(e) : (ie = t), (Yl.current = null);
}
function hh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hy(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (ie = null);
        return;
      }
    } else if (((n = By(n, t, Ne)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function rn(e, t, n) {
  var r = U,
    i = De.transition;
  try {
    (De.transition = null), (U = 1), Zy(e, t, n, r);
  } finally {
    (De.transition = i), (U = r);
  }
  return null;
}
function Zy(e, t, n, r) {
  do Jn();
  while (zt !== null);
  if (F & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (Iv(e, a),
    e === ue && ((ie = ue = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ai ||
      ((Ai = !0),
      yh(da, function () {
        return Jn(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = De.transition), (De.transition = null);
    var o = U;
    U = 1;
    var s = F;
    (F |= 4),
      (Yl.current = null),
      qy(e, n),
      uh(n, e),
      wy(ws),
      (pa = !!ys),
      (ws = ys = null),
      (e.current = n),
      Ky(n),
      Cv(),
      (F = s),
      (U = o),
      (De.transition = a);
  } else e.current = n;
  if (
    (Ai && ((Ai = !1), (zt = e), (La = i)),
    (a = e.pendingLanes),
    a === 0 && (Wt = null),
    _v(n.stateNode),
    _e(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Oa) throw ((Oa = !1), (e = Fs), (Fs = null), e);
  return (
    La & 1 && e.tag !== 0 && Jn(),
    (a = e.pendingLanes),
    a & 1 ? (e === $s ? Mr++ : ((Mr = 0), ($s = e))) : (Mr = 0),
    Zt(),
    null
  );
}
function Jn() {
  if (zt !== null) {
    var e = Qm(La),
      t = De.transition,
      n = U;
    try {
      if (((De.transition = null), (U = 16 > e ? 16 : e), zt === null)) var r = !1;
      else {
        if (((e = zt), (zt = null), (La = 0), F & 6)) throw Error(P(331));
        var i = F;
        for (F |= 4, O = e.current; O !== null; ) {
          var a = O,
            o = a.child;
          if (O.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, c, a);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (O = f);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var d = c.sibling,
                        g = c.return;
                      if ((oh(c), c === u)) {
                        O = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (O = d);
                        break;
                      }
                      O = g;
                    }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              O = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (O = o);
          else
            e: for (; O !== null; ) {
              if (((a = O), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rr(9, a, a.return);
                }
              var h = a.sibling;
              if (h !== null) {
                (h.return = a.return), (O = h);
                break e;
              }
              O = a.return;
            }
        }
        var m = e.current;
        for (O = m; O !== null; ) {
          o = O;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (O = p);
          else
            e: for (o = m; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Za(9, s);
                  }
                } catch (y) {
                  Z(s, s.return, y);
                }
              if (s === o) {
                O = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (O = S);
                break e;
              }
              O = s.return;
            }
        }
        if (((F = i), Zt(), ut && typeof ut.onPostCommitFiberRoot == 'function'))
          try {
            ut.onPostCommitFiberRoot(Ha, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (De.transition = t);
    }
  }
  return !1;
}
function rd(e, t, n) {
  (t = ar(n, t)), (t = Qp(e, t, 1)), (e = Ut(e, t, 1)), (t = we()), e !== null && (ci(e, 1, t), _e(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) rd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        rd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Wt === null || !Wt.has(r)))
        ) {
          (e = ar(n, e)), (e = Xp(t, e, 1)), (t = Ut(t, e, 1)), (e = we()), t !== null && (ci(t, 1, e), _e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function e1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (de & n) === n &&
      (oe === 4 || (oe === 3 && (de & 130023424) === de && 500 > ne() - Kl) ? dn(e, 0) : (ql |= n)),
    _e(e, t);
}
function gh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Pi), (Pi <<= 1), !(Pi & 130023424) && (Pi = 4194304)) : (t = 1));
  var n = we();
  (e = xt(e, t)), e !== null && (ci(e, t, n), _e(e, n));
}
function t1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gh(e, n);
}
function n1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), gh(e, n);
}
var vh;
vh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), Wy(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), Q && t.flags & 1048576 && xp(t, xa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      na(e, t), (e = t.pendingProps);
      var i = tr(t, ve.current);
      Gn(t, n), (i = Vl(null, t, r, e, i, n));
      var a = Ul();
      return (
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((a = !0), wa(t)) : (a = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            zl(t),
            (i.updater = Ja),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ns(t, r, e, n),
            (t = Ts(null, t, r, !0, a, n)))
          : ((t.tag = 0), Q && a && Ol(t), ye(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (na(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = i1(r)),
          (e = Be(r, e)),
          i)
        ) {
          case 0:
            t = Ls(null, t, r, e, n);
            break e;
          case 1:
            t = qf(null, t, r, e, n);
            break e;
          case 11:
            t = Hf(null, t, r, e, n);
            break e;
          case 14:
            t = Yf(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Be(r, i)), Ls(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Be(r, i)), qf(e, t, r, i, n);
    case 3:
      e: {
        if ((eh(t), e === null)) throw Error(P(387));
        (r = t.pendingProps), (a = t.memoizedState), (i = a.element), _p(e, t), Ca(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = ar(Error(P(423)), t)), (t = Kf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ar(Error(P(424)), t)), (t = Kf(e, t, r, n, i));
            break e;
          } else
            for (
              Oe = Vt(t.stateNode.containerInfo.firstChild),
                Le = t,
                Q = !0,
                Ye = null,
                n = Pp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nr(), r === i)) {
            t = kt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Np(t),
        e === null && Ps(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ss(r, i) ? (o = null) : a !== null && Ss(r, a) && (t.flags |= 32),
        Zp(e, t),
        ye(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ps(t), null;
    case 13:
      return th(e, t, n);
    case 4:
      return (
        jl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rr(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Be(r, i)), Hf(e, t, r, i, n);
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          B(ka, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (Xe(a.value, o)) {
            if (a.children === i.children && !Pe.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var s = a.dependencies;
              if (s !== null) {
                o = a.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (a.tag === 1) {
                      (l = vt(-1, n & -n)), (l.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
                      }
                    }
                    (a.lanes |= n), (l = a.alternate), l !== null && (l.lanes |= n), Es(a.return, n, t), (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(P(341));
                (o.lanes |= n), (s = o.alternate), s !== null && (s.lanes |= n), Es(o, n, t), (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        ye(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Gn(t, n),
        (i = Fe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = Be(r, t.pendingProps)), (i = Be(r.type, i)), Yf(e, t, r, i, n);
    case 15:
      return Gp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        na(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), wa(t)) : (e = !1),
        Gn(t, n),
        Kp(t, r, i),
        Ns(t, r, i, n),
        Ts(null, t, r, !0, e, n)
      );
    case 19:
      return nh(e, t, n);
    case 22:
      return Jp(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function yh(e, t) {
  return Hm(e, t);
}
function r1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function je(e, t, n, r) {
  return new r1(e, t, n, r);
}
function Jl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function i1(e) {
  if (typeof e == 'function') return Jl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vl)) return 11;
    if (e === yl) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
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
function aa(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Jl(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case In:
        return mn(n.children, i, a, t);
      case gl:
        (o = 8), (i |= 8);
        break;
      case Jo:
        return (e = je(12, n, t, i | 2)), (e.elementType = Jo), (e.lanes = a), e;
      case Zo:
        return (e = je(13, n, t, i)), (e.elementType = Zo), (e.lanes = a), e;
      case es:
        return (e = je(19, n, t, i)), (e.elementType = es), (e.lanes = a), e;
      case Nm:
        return to(n, i, a, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Em:
              o = 10;
              break e;
            case _m:
              o = 9;
              break e;
            case vl:
              o = 11;
              break e;
            case yl:
              o = 14;
              break e;
            case Tt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ''));
    }
  return (t = je(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t;
}
function mn(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function to(e, t, n, r) {
  return (e = je(22, e, r, t)), (e.elementType = Nm), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Fo(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function $o(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function a1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = So(0)),
    (this.expirationTimes = So(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = So(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Zl(e, t, n, r, i, a, o, s, l) {
  return (
    (e = new a1(e, t, n, s, l)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = je(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zl(a),
    e
  );
}
function o1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Rn, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function wh(e) {
  if (!e) return qt;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return wp(e, n, t);
  }
  return t;
}
function Sh(e, t, n, r, i, a, o, s, l) {
  return (
    (e = Zl(n, r, !0, e, i, a, o, s, l)),
    (e.context = wh(null)),
    (n = e.current),
    (r = we()),
    (i = Bt(n)),
    (a = vt(r, i)),
    (a.callback = t ?? null),
    Ut(n, a, i),
    (e.current.lanes = i),
    ci(e, i, r),
    _e(e, r),
    e
  );
}
function no(e, t, n, r) {
  var i = t.current,
    a = we(),
    o = Bt(i);
  return (
    (n = wh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = vt(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ut(i, t, o)),
    e !== null && (Qe(e, i, o, a), Zi(e, i, o)),
    o
  );
}
function Ra(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function id(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function eu(e, t) {
  id(e, t), (e = e.alternate) && id(e, t);
}
function s1() {
  return null;
}
var xh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function tu(e) {
  this._internalRoot = e;
}
ro.prototype.render = tu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  no(e, t, null, null);
};
ro.prototype.unmount = tu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function () {
      no(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function ro(e) {
  this._internalRoot = e;
}
ro.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
    It.splice(n, 0, e), n === 0 && ep(e);
  }
};
function nu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function io(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ad() {}
function l1(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var u = Ra(o);
        a.call(u);
      };
    }
    var o = Sh(t, r, e, 0, null, !1, !1, '', ad);
    return (e._reactRootContainer = o), (e[St] = o.current), Yr(e.nodeType === 8 ? e.parentNode : e), wn(), o;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var u = Ra(l);
      s.call(u);
    };
  }
  var l = Zl(e, 0, !1, null, null, !1, !1, '', ad);
  return (
    (e._reactRootContainer = l),
    (e[St] = l.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      no(t, l, n, r);
    }),
    l
  );
}
function ao(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == 'function') {
      var s = i;
      i = function () {
        var l = Ra(o);
        s.call(l);
      };
    }
    no(t, o, e, i);
  } else o = l1(n, t, e, i, r);
  return Ra(o);
}
Xm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = br(t.pendingLanes);
        n !== 0 && (xl(t, n | 1), _e(t, ne()), !(F & 6) && ((or = ne() + 500), Zt()));
      }
      break;
    case 13:
      wn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var i = we();
          Qe(r, e, 1, i);
        }
      }),
        eu(e, 1);
  }
};
kl = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = we();
      Qe(t, e, 134217728, n);
    }
    eu(e, 134217728);
  }
};
Gm = function (e) {
  if (e.tag === 13) {
    var t = Bt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = we();
      Qe(n, e, t, r);
    }
    eu(e, t);
  }
};
Jm = function () {
  return U;
};
Zm = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
cs = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((rs(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Qa(r);
            if (!i) throw Error(P(90));
            Lm(r), rs(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Rm(e, n);
      break;
    case 'select':
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
Fm = Ql;
$m = wn;
var u1 = { usingClientEntryPoint: !1, Events: [di, jn, Qa, jm, Dm, Ql] },
  wr = { findFiberByHostInstance: on, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
  c1 = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || s1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zi.isDisabled && zi.supportsFiber)
    try {
      (Ha = zi.inject(c1)), (ut = zi);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u1;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nu(t)) throw Error(P(200));
  return o1(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!nu(e)) throw Error(P(299));
  var n = !1,
    r = '',
    i = xh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Zl(e, 1, !1, null, null, n, !1, r, i)),
    (e[St] = t.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    new tu(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(P(188)) : ((e = Object.keys(e).join(',')), Error(P(268, e)));
  return (e = Wm(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return wn(e);
};
Re.hydrate = function (e, t, n) {
  if (!io(t)) throw Error(P(200));
  return ao(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!nu(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = '',
    o = xh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Sh(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[St] = t.current),
    Yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ro(t);
};
Re.render = function (e, t, n) {
  if (!io(t)) throw Error(P(200));
  return ao(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!io(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (wn(function () {
        ao(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = Ql;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!io(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return ao(e, t, n, !1, r);
};
Re.version = '18.3.1-next-f1338f8080-20240426';
function kh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kh);
    } catch (e) {
      console.error(e);
    }
}
kh(), (km.exports = Re);
var f1 = km.exports,
  od = f1;
(Xo.createRoot = od.createRoot), (Xo.hydrateRoot = od.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ti() {
  return (
    (ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ti.apply(this, arguments)
  );
}
var un;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(un || (un = {}));
const sd = 'popstate';
function d1(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: a, search: o, hash: s } = r.location;
    return Ws(
      '',
      { pathname: a, search: o, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : Ch(i);
  }
  return p1(t, n, null, e);
}
function Se(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function bh(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function m1() {
  return Math.random().toString(36).substr(2, 8);
}
function ld(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ws(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ti({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? pi(t) : t, {
      state: n,
      key: (t && t.key) || r || m1(),
    })
  );
}
function Ch(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function pi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function p1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = un.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(ti({}, o.state, { idx: u }), ''));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    s = un.Pop;
    let x = c(),
      h = x == null ? null : x - u;
    (u = x), l && l({ action: s, location: v.location, delta: h });
  }
  function d(x, h) {
    s = un.Push;
    let m = Ws(v.location, x, h);
    u = c() + 1;
    let p = ld(m, u),
      S = v.createHref(m);
    try {
      o.pushState(p, '', S);
    } catch (y) {
      if (y instanceof DOMException && y.name === 'DataCloneError') throw y;
      i.location.assign(S);
    }
    a && l && l({ action: s, location: v.location, delta: 1 });
  }
  function g(x, h) {
    s = un.Replace;
    let m = Ws(v.location, x, h);
    u = c();
    let p = ld(m, u),
      S = v.createHref(m);
    o.replaceState(p, '', S), a && l && l({ action: s, location: v.location, delta: 0 });
  }
  function w(x) {
    let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      m = typeof x == 'string' ? x : Ch(x);
    return (
      (m = m.replace(/ $/, '%20')),
      Se(h, 'No window.location.(origin|href) available to create URL for href: ' + m),
      new URL(m, h)
    );
  }
  let v = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(x) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(sd, f),
        (l = x),
        () => {
          i.removeEventListener(sd, f), (l = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: w,
    encodeLocation(x) {
      let h = w(x);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: d,
    replace: g,
    go(x) {
      return o.go(x);
    },
  };
  return v;
}
var ud;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(ud || (ud = {}));
function h1(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? pi(t) : t,
    i = _h(r.pathname || '/', n);
  if (i == null) return null;
  let a = Ph(e);
  g1(a);
  let o = null;
  for (let s = 0; o == null && s < a.length; ++s) {
    let l = N1(i);
    o = P1(a[s], l);
  }
  return o;
}
function Ph(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (a, o, s) => {
    let l = {
      relativePath: s === void 0 ? a.path || '' : s,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a,
    };
    l.relativePath.startsWith('/') &&
      (Se(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = pn([r, l.relativePath]),
      c = n.concat(l);
    a.children &&
      a.children.length > 0 &&
      (Se(
        a.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')
      ),
      Ph(a.children, t, c, u)),
      !(a.path == null && !a.index) && t.push({ path: u, score: b1(u, a.index), routesMeta: c });
  };
  return (
    e.forEach((a, o) => {
      var s;
      if (a.path === '' || !((s = a.path) != null && s.includes('?'))) i(a, o);
      else for (let l of Eh(a.path)) i(a, o, l);
    }),
    t
  );
}
function Eh(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    a = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [a, ''] : [a];
  let o = Eh(r.join('/')),
    s = [];
  return (
    s.push(...o.map((l) => (l === '' ? a : [a, l].join('/')))),
    i && s.push(...o),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function g1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : C1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const v1 = /^:[\w-]+$/,
  y1 = 3,
  w1 = 2,
  S1 = 1,
  x1 = 10,
  k1 = -2,
  cd = (e) => e === '*';
function b1(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(cd) && (r += k1),
    t && (r += w1),
    n.filter((i) => !cd(i)).reduce((i, a) => i + (v1.test(a) ? y1 : a === '' ? S1 : x1), r)
  );
}
function C1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function P1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    a = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      l = o === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = E1({ path: s.relativePath, caseSensitive: s.caseSensitive, end: l }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let f = s.route;
    a.push({ params: r, pathname: pn([i, c.pathname]), pathnameBase: M1(pn([i, c.pathnameBase])), route: f }),
      c.pathnameBase !== '/' && (i = pn([i, c.pathnameBase]));
  }
  return a;
}
function E1(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = _1(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, '$1'),
    s = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: g } = c;
      if (d === '*') {
        let v = s[f] || '';
        o = a.slice(0, a.length - v.length).replace(/(.)\/+$/, '$1');
      }
      const w = s[f];
      return g && !w ? (u[d] = void 0) : (u[d] = (w || '').replace(/%2F/g, '/')), u;
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function _1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    bh(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, s, l) => (r.push({ paramName: s, isOptional: l != null }), l ? '/?([^\\/]+)?' : '/([^\\/]+)')
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function N1(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      bh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function _h(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function O1(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? pi(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : L1(n, t)) : t, search: A1(r), hash: z1(i) };
}
function L1(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Vo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function T1(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function R1(e, t) {
  let n = T1(e);
  return t ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function I1(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = pi(e))
    : ((i = ti({}, e)),
      Se(!i.pathname || !i.pathname.includes('?'), Vo('?', 'pathname', 'search', i)),
      Se(!i.pathname || !i.pathname.includes('#'), Vo('#', 'pathname', 'hash', i)),
      Se(!i.search || !i.search.includes('#'), Vo('#', 'search', 'hash', i)));
  let a = e === '' || i.pathname === '',
    o = a ? '/' : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith('..')) {
      let d = o.split('/');
      for (; d[0] === '..'; ) d.shift(), (f -= 1);
      i.pathname = d.join('/');
    }
    s = f >= 0 ? t[f] : '/';
  }
  let l = O1(i, s),
    u = o && o !== '/' && o.endsWith('/'),
    c = (a || o === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const pn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  M1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  A1 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  z1 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function j1(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Nh = ['post', 'put', 'patch', 'delete'];
new Set(Nh);
const D1 = ['get', ...Nh];
new Set(D1);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ia() {
  return (
    (Ia = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ia.apply(this, arguments)
  );
}
const ru = C.createContext(null),
  F1 = C.createContext(null),
  oo = C.createContext(null),
  iu = C.createContext(null),
  Pn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Oh = C.createContext(null);
function so() {
  return C.useContext(iu) != null;
}
function au() {
  return so() || Se(!1), C.useContext(iu).location;
}
function Lh(e) {
  C.useContext(oo).static || C.useLayoutEffect(e);
}
function Th() {
  let { isDataRoute: e } = C.useContext(Pn);
  return e ? e0() : $1();
}
function $1() {
  so() || Se(!1);
  let e = C.useContext(ru),
    { basename: t, future: n, navigator: r } = C.useContext(oo),
    { matches: i } = C.useContext(Pn),
    { pathname: a } = au(),
    o = JSON.stringify(R1(i, n.v7_relativeSplatPath)),
    s = C.useRef(!1);
  return (
    Lh(() => {
      s.current = !0;
    }),
    C.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let f = I1(u, JSON.parse(o), a, c.relative === 'path');
        e == null && t !== '/' && (f.pathname = f.pathname === '/' ? t : pn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, o, a, e]
    )
  );
}
const V1 = C.createContext(null);
function U1(e) {
  let t = C.useContext(Pn).outlet;
  return t && C.createElement(V1.Provider, { value: e }, t);
}
function W1(e, t) {
  return B1(e);
}
function B1(e, t, n, r) {
  so() || Se(!1);
  let { navigator: i } = C.useContext(oo),
    { matches: a } = C.useContext(Pn),
    o = a[a.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : '/';
  o && o.route;
  let u = au(),
    c;
  c = u;
  let f = c.pathname || '/',
    d = f;
  if (l !== '/') {
    let v = l.replace(/^\//, '').split('/');
    d = '/' + f.replace(/^\//, '').split('/').slice(v.length).join('/');
  }
  let g = h1(e, { pathname: d });
  return Q1(
    g &&
      g.map((v) =>
        Object.assign({}, v, {
          params: Object.assign({}, s, v.params),
          pathname: pn([l, i.encodeLocation ? i.encodeLocation(v.pathname).pathname : v.pathname]),
          pathnameBase:
            v.pathnameBase === '/'
              ? l
              : pn([l, i.encodeLocation ? i.encodeLocation(v.pathnameBase).pathname : v.pathnameBase]),
        })
      ),
    a,
    n,
    r
  );
}
function H1() {
  let e = Z1(),
    t = j1(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement('h2', null, 'Unexpected Application Error!'),
    C.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? C.createElement('pre', { style: i }, n) : null,
    null
  );
}
const Y1 = C.createElement(H1, null);
class q1 extends C.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          Pn.Provider,
          { value: this.props.routeContext },
          C.createElement(Oh.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function K1(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(ru);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Pn.Provider, { value: t }, r)
  );
}
function Q1(e, t, n, r) {
  var i;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var a;
    if ((a = n) != null && a.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let c = o.findIndex((f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0);
    c >= 0 || Se(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id)) {
        let { loaderData: d, errors: g } = n,
          w = f.route.loader && d[f.route.id] === void 0 && (!g || g[f.route.id] === void 0);
        if (f.route.lazy || w) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, f, d) => {
    let g,
      w = !1,
      v = null,
      x = null;
    n &&
      ((g = s && f.route.id ? s[f.route.id] : void 0),
      (v = f.route.errorElement || Y1),
      l &&
        (u < 0 && d === 0
          ? (t0('route-fallback'), (w = !0), (x = null))
          : u === d && ((w = !0), (x = f.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, d + 1)),
      m = () => {
        let p;
        return (
          g
            ? (p = v)
            : w
            ? (p = x)
            : f.route.Component
            ? (p = C.createElement(f.route.Component, null))
            : f.route.element
            ? (p = f.route.element)
            : (p = c),
          C.createElement(K1, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? C.createElement(q1, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: m(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Rh = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e
    );
  })(Rh || {}),
  Ih = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Ih || {});
function X1(e) {
  let t = C.useContext(ru);
  return t || Se(!1), t;
}
function G1(e) {
  let t = C.useContext(F1);
  return t || Se(!1), t;
}
function J1(e) {
  let t = C.useContext(Pn);
  return t || Se(!1), t;
}
function Mh(e) {
  let t = J1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Se(!1), n.route.id;
}
function Z1() {
  var e;
  let t = C.useContext(Oh),
    n = G1(),
    r = Mh();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function e0() {
  let { router: e } = X1(Rh.UseNavigateStable),
    t = Mh(Ih.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Lh(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, a) {
        a === void 0 && (a = {}),
          n.current && (typeof i == 'number' ? e.navigate(i) : e.navigate(i, Ia({ fromRouteId: t }, a)));
      },
      [e, t]
    )
  );
}
const fd = {};
function t0(e, t, n) {
  fd[e] || (fd[e] = !0);
}
function n0(e) {
  return U1(e.context);
}
function r0(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = un.Pop,
    navigator: a,
    static: o = !1,
    future: s,
  } = e;
  so() && Se(!1);
  let l = t.replace(/^\/*/, '/'),
    u = C.useMemo(
      () => ({ basename: l, navigator: a, static: o, future: Ia({ v7_relativeSplatPath: !1 }, s) }),
      [l, s, a, o]
    );
  typeof r == 'string' && (r = pi(r));
  let { pathname: c = '/', search: f = '', hash: d = '', state: g = null, key: w = 'default' } = r,
    v = C.useMemo(() => {
      let x = _h(c, l);
      return x == null ? null : { location: { pathname: x, search: f, hash: d, state: g, key: w }, navigationType: i };
    }, [l, c, f, d, g, w, i]);
  return v == null
    ? null
    : C.createElement(oo.Provider, { value: u }, C.createElement(iu.Provider, { children: n, value: v }));
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
 */ function Bs(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]);
          }, [])
    )
  );
}
function i0(e, t) {
  let n = Bs(e);
  return (
    t &&
      t.forEach((r, i) => {
        n.has(i) ||
          t.getAll(i).forEach((a) => {
            n.append(i, a);
          });
      }),
    n
  );
}
const a0 = '6';
try {
  window.__reactRouterVersion = a0;
} catch {}
const o0 = 'startTransition',
  dd = ev[o0];
function s0(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    a = C.useRef();
  a.current == null && (a.current = d1({ window: i, v5Compat: !0 }));
  let o = a.current,
    [s, l] = C.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = C.useCallback(
      (f) => {
        u && dd ? dd(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    C.useLayoutEffect(() => o.listen(c), [o, c]),
    C.createElement(r0, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
var md;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(md || (md = {}));
var pd;
(function (e) {
  (e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(pd || (pd = {}));
function Bk(e) {
  let t = C.useRef(Bs(e)),
    n = C.useRef(!1),
    r = au(),
    i = C.useMemo(() => i0(r.search, n.current ? null : t.current), [r.search]),
    a = Th(),
    o = C.useCallback(
      (s, l) => {
        const u = Bs(typeof s == 'function' ? s(i) : s);
        (n.current = !0), a('?' + u, l);
      },
      [a, i]
    );
  return [i, o];
}
const l0 = 'modulepreload',
  u0 = function (e) {
    return '/etc/designs/spa/snb-vrrr-fe/clientlibs/' + e;
  },
  hd = {},
  hi = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName('link');
      const o = document.querySelector('meta[property=csp-nonce]'),
        s = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute('nonce'));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = u0(l)), l in hd)) return;
          hd[l] = !0;
          const u = l.endsWith('.css'),
            c = u ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement('link');
          if (
            ((f.rel = u ? 'stylesheet' : l0),
            u || (f.as = 'script'),
            (f.crossOrigin = ''),
            (f.href = l),
            s && f.setAttribute('nonce', s),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, g) => {
              f.addEventListener('load', d),
                f.addEventListener('error', () => g(new Error(`Unable to preload CSS for ${l}`)));
            });
        })
      );
    }
    function a(o) {
      const s = new Event('vite:preloadError', { cancelable: !0 });
      if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented)) throw o;
    }
    return i.then((o) => {
      for (const s of o || []) s.status === 'rejected' && a(s.reason);
      return t().catch(a);
    });
  };
function gd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gd(Object(n), !0).forEach(function (r) {
          se(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ma(e) {
  '@babel/helpers - typeof';
  return (
    (Ma =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ma(e)
  );
}
function c0(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function f0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function d0(e, t, n) {
  return t && f0(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function se(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
function ou(e, t) {
  return p0(e) || g0(e, t) || Ah(e, t) || y0();
}
function gi(e) {
  return m0(e) || h0(e) || Ah(e) || v0();
}
function m0(e) {
  if (Array.isArray(e)) return Hs(e);
}
function p0(e) {
  if (Array.isArray(e)) return e;
}
function h0(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
}
function g0(e, t) {
  var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      i = !0,
      a = !1,
      o,
      s;
    try {
      for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
    } catch (l) {
      (a = !0), (s = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function Ah(e, t) {
  if (e) {
    if (typeof e == 'string') return Hs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set')) return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hs(e, t);
  }
}
function Hs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function v0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function y0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vd = function () {},
  su = {},
  zh = {},
  jh = null,
  Dh = { mark: vd, measure: vd };
try {
  typeof window < 'u' && (su = window),
    typeof document < 'u' && (zh = document),
    typeof MutationObserver < 'u' && (jh = MutationObserver),
    typeof performance < 'u' && (Dh = performance);
} catch {}
var w0 = su.navigator || {},
  yd = w0.userAgent,
  wd = yd === void 0 ? '' : yd,
  Kt = su,
  K = zh,
  Sd = jh,
  ji = Dh;
Kt.document;
var _t =
    !!K.documentElement && !!K.head && typeof K.addEventListener == 'function' && typeof K.createElement == 'function',
  Fh = ~wd.indexOf('MSIE') || ~wd.indexOf('Trident/'),
  Di,
  Fi,
  $i,
  Vi,
  Ui,
  bt = '___FONT_AWESOME___',
  Ys = 16,
  $h = 'fa',
  Vh = 'svg-inline--fa',
  Sn = 'data-fa-i2svg',
  qs = 'data-fa-pseudo-element',
  S0 = 'data-fa-pseudo-element-pending',
  lu = 'data-prefix',
  uu = 'data-icon',
  xd = 'fontawesome-i2svg',
  x0 = 'async',
  k0 = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  Uh = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  Y = 'classic',
  ee = 'sharp',
  cu = [Y, ee];
function vi(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[Y];
    },
  });
}
var ni = vi(
    ((Di = {}),
    se(Di, Y, {
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
    se(Di, ee, {
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
    Di)
  ),
  ri = vi(
    ((Fi = {}),
    se(Fi, Y, { solid: 'fas', regular: 'far', light: 'fal', thin: 'fat', duotone: 'fad', brands: 'fab', kit: 'fak' }),
    se(Fi, ee, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    Fi)
  ),
  ii = vi(
    (($i = {}),
    se($i, Y, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    se($i, ee, { fass: 'fa-solid', fasr: 'fa-regular', fasl: 'fa-light', fast: 'fa-thin' }),
    $i)
  ),
  b0 = vi(
    ((Vi = {}),
    se(Vi, Y, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    se(Vi, ee, { 'fa-solid': 'fass', 'fa-regular': 'fasr', 'fa-light': 'fasl', 'fa-thin': 'fast' }),
    Vi)
  ),
  C0 = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  Wh = 'fa-layers-text',
  P0 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  E0 = vi(
    ((Ui = {}),
    se(Ui, Y, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
    se(Ui, ee, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    Ui)
  ),
  Bh = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  _0 = Bh.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  N0 = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  cn = { GROUP: 'duotone-group', SWAP_OPACITY: 'swap-opacity', PRIMARY: 'primary', SECONDARY: 'secondary' },
  ai = new Set();
Object.keys(ri[Y]).map(ai.add.bind(ai));
Object.keys(ri[ee]).map(ai.add.bind(ai));
var O0 = []
    .concat(cu, gi(ai), [
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
      cn.GROUP,
      cn.SWAP_OPACITY,
      cn.PRIMARY,
      cn.SECONDARY,
    ])
    .concat(
      Bh.map(function (e) {
        return ''.concat(e, 'x');
      })
    )
    .concat(
      _0.map(function (e) {
        return 'w-'.concat(e);
      })
    ),
  Ar = Kt.FontAwesomeConfig || {};
function L0(e) {
  var t = K.querySelector('script[' + e + ']');
  if (t) return t.getAttribute(e);
}
function T0(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
}
if (K && typeof K.querySelector == 'function') {
  var R0 = [
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
  R0.forEach(function (e) {
    var t = ou(e, 2),
      n = t[0],
      r = t[1],
      i = T0(L0(n));
    i != null && (Ar[r] = i);
  });
}
var Hh = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: $h,
  replacementClass: Vh,
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
Ar.familyPrefix && (Ar.cssPrefix = Ar.familyPrefix);
var sr = N(N({}, Hh), Ar);
sr.autoReplaceSvg || (sr.observeMutations = !1);
var L = {};
Object.keys(Hh).forEach(function (e) {
  Object.defineProperty(L, e, {
    enumerable: !0,
    set: function (n) {
      (sr[e] = n),
        zr.forEach(function (r) {
          return r(L);
        });
    },
    get: function () {
      return sr[e];
    },
  });
});
Object.defineProperty(L, 'familyPrefix', {
  enumerable: !0,
  set: function (t) {
    (sr.cssPrefix = t),
      zr.forEach(function (n) {
        return n(L);
      });
  },
  get: function () {
    return sr.cssPrefix;
  },
});
Kt.FontAwesomeConfig = L;
var zr = [];
function I0(e) {
  return (
    zr.push(e),
    function () {
      zr.splice(zr.indexOf(e), 1);
    }
  );
}
var Nn = Ys,
  st = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function M0(e) {
  if (!(!e || !_t)) {
    var t = K.createElement('style');
    t.setAttribute('type', 'text/css'), (t.innerHTML = e);
    for (var n = K.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i],
        o = (a.tagName || '').toUpperCase();
      ['STYLE', 'LINK'].indexOf(o) > -1 && (r = a);
    }
    return K.head.insertBefore(t, r), e;
  }
}
var A0 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function oi() {
  for (var e = 12, t = ''; e-- > 0; ) t += A0[(Math.random() * 62) | 0];
  return t;
}
function fr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function fu(e) {
  return e.classList
    ? fr(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (t) {
        return t;
      });
}
function Yh(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function z0(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(Yh(e[n]), '" ');
    }, '')
    .trim();
}
function lo(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
  }, '');
}
function du(e) {
  return e.size !== st.size || e.x !== st.x || e.y !== st.y || e.rotate !== st.rotate || e.flipX || e.flipY;
}
function j0(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: 'translate('.concat(n / 2, ' 256)') },
    a = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
    o = 'scale('.concat((t.size / 16) * (t.flipX ? -1 : 1), ', ').concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
    s = 'rotate('.concat(t.rotate, ' 0 0)'),
    l = { transform: ''.concat(a, ' ').concat(o, ' ').concat(s) },
    u = { transform: 'translate('.concat((r / 2) * -1, ' -256)') };
  return { outer: i, inner: l, path: u };
}
function D0(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Ys : n,
    i = e.height,
    a = i === void 0 ? Ys : i,
    o = '';
  return (
    Fh
      ? (o += 'translate('.concat(t.x / Nn - r / 2, 'em, ').concat(t.y / Nn - a / 2, 'em) '))
      : (o += 'translate(calc(-50% + '.concat(t.x / Nn, 'em), calc(-50% + ').concat(t.y / Nn, 'em)) ')),
    (o += 'scale('.concat((t.size / Nn) * (t.flipX ? -1 : 1), ', ').concat((t.size / Nn) * (t.flipY ? -1 : 1), ') ')),
    (o += 'rotate('.concat(t.rotate, 'deg) ')),
    o
  );
}
var F0 = `:root, :host {
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
function qh() {
  var e = $h,
    t = Vh,
    n = L.cssPrefix,
    r = L.replacementClass,
    i = F0;
  if (n !== e || r !== t) {
    var a = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      s = new RegExp('\\.'.concat(t), 'g');
    i = i.replace(a, '.'.concat(n, '-')).replace(o, '--'.concat(n, '-')).replace(s, '.'.concat(r));
  }
  return i;
}
var kd = !1;
function Uo() {
  L.autoAddCss && !kd && (M0(qh()), (kd = !0));
}
var $0 = {
    mixout: function () {
      return { dom: { css: qh, insertCss: Uo } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Uo();
        },
        beforeI2svg: function () {
          Uo();
        },
      };
    },
  },
  Ct = Kt || {};
Ct[bt] || (Ct[bt] = {});
Ct[bt].styles || (Ct[bt].styles = {});
Ct[bt].hooks || (Ct[bt].hooks = {});
Ct[bt].shims || (Ct[bt].shims = []);
var qe = Ct[bt],
  Kh = [],
  V0 = function e() {
    K.removeEventListener('DOMContentLoaded', e),
      (Aa = 1),
      Kh.map(function (t) {
        return t();
      });
  },
  Aa = !1;
_t &&
  ((Aa = (K.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(K.readyState)),
  Aa || K.addEventListener('DOMContentLoaded', V0));
function U0(e) {
  _t && (Aa ? setTimeout(e, 0) : Kh.push(e));
}
function yi(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    a = i === void 0 ? [] : i;
  return typeof e == 'string'
    ? Yh(e)
    : '<'.concat(t, ' ').concat(z0(r), '>').concat(a.map(yi).join(''), '</').concat(t, '>');
}
function bd(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var Wo = function (t, n, r, i) {
  var a = Object.keys(t),
    o = a.length,
    s = n,
    l,
    u,
    c;
  for (r === void 0 ? ((l = 1), (c = t[a[0]])) : ((l = 0), (c = r)); l < o; l++) (u = a[l]), (c = s(c, t[u], u, t));
  return c;
};
function W0(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function Ks(e) {
  var t = W0(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function B0(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 && r <= 56319 && n > t + 1 && ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function Cd(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Qs(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    a = Cd(t);
  typeof qe.hooks.addPack == 'function' && !i
    ? qe.hooks.addPack(e, Cd(t))
    : (qe.styles[e] = N(N({}, qe.styles[e] || {}), a)),
    e === 'fas' && Qs('fa', t);
}
var Wi,
  Bi,
  Hi,
  Bn = qe.styles,
  H0 = qe.shims,
  Y0 = ((Wi = {}), se(Wi, Y, Object.values(ii[Y])), se(Wi, ee, Object.values(ii[ee])), Wi),
  mu = null,
  Qh = {},
  Xh = {},
  Gh = {},
  Jh = {},
  Zh = {},
  q0 = ((Bi = {}), se(Bi, Y, Object.keys(ni[Y])), se(Bi, ee, Object.keys(ni[ee])), Bi);
function K0(e) {
  return ~O0.indexOf(e);
}
function Q0(e, t) {
  var n = t.split('-'),
    r = n[0],
    i = n.slice(1).join('-');
  return r === e && i !== '' && !K0(i) ? i : null;
}
var eg = function () {
  var t = function (a) {
    return Wo(
      Bn,
      function (o, s, l) {
        return (o[l] = Wo(s, a, {})), o;
      },
      {}
    );
  };
  (Qh = t(function (i, a, o) {
    if ((a[3] && (i[a[3]] = o), a[2])) {
      var s = a[2].filter(function (l) {
        return typeof l == 'number';
      });
      s.forEach(function (l) {
        i[l.toString(16)] = o;
      });
    }
    return i;
  })),
    (Xh = t(function (i, a, o) {
      if (((i[o] = o), a[2])) {
        var s = a[2].filter(function (l) {
          return typeof l == 'string';
        });
        s.forEach(function (l) {
          i[l] = o;
        });
      }
      return i;
    })),
    (Zh = t(function (i, a, o) {
      var s = a[2];
      return (
        (i[o] = o),
        s.forEach(function (l) {
          i[l] = o;
        }),
        i
      );
    }));
  var n = 'far' in Bn || L.autoFetchSvg,
    r = Wo(
      H0,
      function (i, a) {
        var o = a[0],
          s = a[1],
          l = a[2];
        return (
          s === 'far' && !n && (s = 'fas'),
          typeof o == 'string' && (i.names[o] = { prefix: s, iconName: l }),
          typeof o == 'number' && (i.unicodes[o.toString(16)] = { prefix: s, iconName: l }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (Gh = r.names), (Jh = r.unicodes), (mu = uo(L.styleDefault, { family: L.familyDefault }));
};
I0(function (e) {
  mu = uo(e.styleDefault, { family: L.familyDefault });
});
eg();
function pu(e, t) {
  return (Qh[e] || {})[t];
}
function X0(e, t) {
  return (Xh[e] || {})[t];
}
function fn(e, t) {
  return (Zh[e] || {})[t];
}
function tg(e) {
  return Gh[e] || { prefix: null, iconName: null };
}
function G0(e) {
  var t = Jh[e],
    n = pu('fas', e);
  return t || (n ? { prefix: 'fas', iconName: n } : null) || { prefix: null, iconName: null };
}
function Qt() {
  return mu;
}
var hu = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function uo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? Y : n,
    i = ni[r][e],
    a = ri[r][e] || ri[r][i],
    o = e in qe.styles ? e : null;
  return a || o || null;
}
var Pd = ((Hi = {}), se(Hi, Y, Object.keys(ii[Y])), se(Hi, ee, Object.keys(ii[ee])), Hi);
function co(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    a =
      ((t = {}), se(t, Y, ''.concat(L.cssPrefix, '-').concat(Y)), se(t, ee, ''.concat(L.cssPrefix, '-').concat(ee)), t),
    o = null,
    s = Y;
  (e.includes(a[Y]) ||
    e.some(function (u) {
      return Pd[Y].includes(u);
    })) &&
    (s = Y),
    (e.includes(a[ee]) ||
      e.some(function (u) {
        return Pd[ee].includes(u);
      })) &&
      (s = ee);
  var l = e.reduce(function (u, c) {
    var f = Q0(L.cssPrefix, c);
    if (
      (Bn[c]
        ? ((c = Y0[s].includes(c) ? b0[s][c] : c), (o = c), (u.prefix = c))
        : q0[s].indexOf(c) > -1
        ? ((o = c), (u.prefix = uo(c, { family: s })))
        : f
        ? (u.iconName = f)
        : c !== L.replacementClass && c !== a[Y] && c !== a[ee] && u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var d = o === 'fa' ? tg(u.iconName) : {},
        g = fn(u.prefix, u.iconName);
      d.prefix && (o = null),
        (u.iconName = d.iconName || g || u.iconName),
        (u.prefix = d.prefix || u.prefix),
        u.prefix === 'far' && !Bn.far && Bn.fas && !L.autoFetchSvg && (u.prefix = 'fas');
    }
    return u;
  }, hu());
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (l.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (l.prefix = 'fad'),
    !l.prefix &&
      s === ee &&
      (Bn.fass || L.autoFetchSvg) &&
      ((l.prefix = 'fass'), (l.iconName = fn(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === 'fa' || o === 'fa') && (l.prefix = Qt() || 'fas'),
    l
  );
}
var J0 = (function () {
    function e() {
      c0(this, e), (this.definitions = {});
    }
    return (
      d0(e, [
        {
          key: 'add',
          value: function () {
            for (var n = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            var o = i.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function (s) {
              (n.definitions[s] = N(N({}, n.definitions[s] || {}), o[s])), Qs(s, o[s]);
              var l = ii[Y][s];
              l && Qs(l, o[s]), eg();
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
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (a) {
                var o = i[a],
                  s = o.prefix,
                  l = o.iconName,
                  u = o.icon,
                  c = u[2];
                n[s] || (n[s] = {}),
                  c.length > 0 &&
                    c.forEach(function (f) {
                      typeof f == 'string' && (n[s][f] = u);
                    }),
                  (n[s][l] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Ed = [],
  Hn = {},
  Zn = {},
  Z0 = Object.keys(Zn);
function ew(e, t) {
  var n = t.mixoutsTo;
  return (
    (Ed = e),
    (Hn = {}),
    Object.keys(Zn).forEach(function (r) {
      Z0.indexOf(r) === -1 && delete Zn[r];
    }),
    Ed.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (o) {
          typeof i[o] == 'function' && (n[o] = i[o]),
            Ma(i[o]) === 'object' &&
              Object.keys(i[o]).forEach(function (s) {
                n[o] || (n[o] = {}), (n[o][s] = i[o][s]);
              });
        }),
        r.hooks)
      ) {
        var a = r.hooks();
        Object.keys(a).forEach(function (o) {
          Hn[o] || (Hn[o] = []), Hn[o].push(a[o]);
        });
      }
      r.provides && r.provides(Zn);
    }),
    n
  );
}
function Xs(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
  var a = Hn[e] || [];
  return (
    a.forEach(function (o) {
      t = o.apply(null, [t].concat(r));
    }),
    t
  );
}
function xn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var i = Hn[e] || [];
  i.forEach(function (a) {
    a.apply(null, n);
  });
}
function Pt() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Zn[e] ? Zn[e].apply(null, t) : void 0;
}
function Gs(e) {
  e.prefix === 'fa' && (e.prefix = 'fas');
  var t = e.iconName,
    n = e.prefix || Qt();
  if (t) return (t = fn(n, t) || t), bd(ng.definitions, n, t) || bd(qe.styles, n, t);
}
var ng = new J0(),
  tw = function () {
    (L.autoReplaceSvg = !1), (L.observeMutations = !1), xn('noAuto');
  },
  nw = {
    i2svg: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return _t
        ? (xn('beforeI2svg', t), Pt('pseudoElements2svg', t), Pt('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      L.autoReplaceSvg === !1 && (L.autoReplaceSvg = !0),
        (L.observeMutations = !0),
        U0(function () {
          iw({ autoReplaceSvgRoot: n }), xn('watch', t);
        });
    },
  },
  rw = {
    icon: function (t) {
      if (t === null) return null;
      if (Ma(t) === 'object' && t.prefix && t.iconName)
        return { prefix: t.prefix, iconName: fn(t.prefix, t.iconName) || t.iconName };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
          r = uo(t[0]);
        return { prefix: r, iconName: fn(r, n) || n };
      }
      if (typeof t == 'string' && (t.indexOf(''.concat(L.cssPrefix, '-')) > -1 || t.match(C0))) {
        var i = co(t.split(' '), { skipLookups: !0 });
        return { prefix: i.prefix || Qt(), iconName: fn(i.prefix, i.iconName) || i.iconName };
      }
      if (typeof t == 'string') {
        var a = Qt();
        return { prefix: a, iconName: fn(a, t) || t };
      }
    },
  },
  Me = { noAuto: tw, config: L, dom: nw, parse: rw, library: ng, findIconDefinition: Gs, toHtml: yi },
  iw = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? K : n;
    (Object.keys(qe.styles).length > 0 || L.autoFetchSvg) && _t && L.autoReplaceSvg && Me.dom.i2svg({ node: r });
  };
function fo(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return yi(r);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (_t) {
          var r = K.createElement('div');
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function aw(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    a = e.styles,
    o = e.transform;
  if (du(o) && n.found && !r.found) {
    var s = n.width,
      l = n.height,
      u = { x: s / l / 2, y: 0.5 };
    i.style = lo(
      N(N({}, a), {}, { 'transform-origin': ''.concat(u.x + o.x / 16, 'em ').concat(u.y + o.y / 16, 'em') })
    );
  }
  return [{ tag: 'svg', attributes: i, children: t }];
}
function ow(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    a = e.symbol,
    o = a === !0 ? ''.concat(t, '-').concat(L.cssPrefix, '-').concat(n) : a;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: N(N({}, i), {}, { id: o }), children: r }],
    },
  ];
}
function gu(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    a = e.iconName,
    o = e.transform,
    s = e.symbol,
    l = e.title,
    u = e.maskId,
    c = e.titleId,
    f = e.extra,
    d = e.watchable,
    g = d === void 0 ? !1 : d,
    w = r.found ? r : n,
    v = w.width,
    x = w.height,
    h = i === 'fak',
    m = [L.replacementClass, a ? ''.concat(L.cssPrefix, '-').concat(a) : '']
      .filter(function (M) {
        return f.classes.indexOf(M) === -1;
      })
      .filter(function (M) {
        return M !== '' || !!M;
      })
      .concat(f.classes)
      .join(' '),
    p = {
      children: [],
      attributes: N(
        N({}, f.attributes),
        {},
        {
          'data-prefix': i,
          'data-icon': a,
          class: m,
          role: f.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(v, ' ').concat(x),
        }
      ),
    },
    S = h && !~f.classes.indexOf('fa-fw') ? { width: ''.concat((v / x) * 16 * 0.0625, 'em') } : {};
  g && (p.attributes[Sn] = ''),
    l &&
      (p.children.push({
        tag: 'title',
        attributes: { id: p.attributes['aria-labelledby'] || 'title-'.concat(c || oi()) },
        children: [l],
      }),
      delete p.attributes.title);
  var y = N(
      N({}, p),
      {},
      { prefix: i, iconName: a, main: n, mask: r, maskId: u, transform: o, symbol: s, styles: N(N({}, S), f.styles) }
    ),
    k =
      r.found && n.found
        ? Pt('generateAbstractMask', y) || { children: [], attributes: {} }
        : Pt('generateAbstractIcon', y) || { children: [], attributes: {} },
    b = k.children,
    _ = k.attributes;
  return (y.children = b), (y.attributes = _), s ? ow(y) : aw(y);
}
function _d(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    a = e.title,
    o = e.extra,
    s = e.watchable,
    l = s === void 0 ? !1 : s,
    u = N(N(N({}, o.attributes), a ? { title: a } : {}), {}, { class: o.classes.join(' ') });
  l && (u[Sn] = '');
  var c = N({}, o.styles);
  du(i) && ((c.transform = D0({ transform: i, width: n, height: r })), (c['-webkit-transform'] = c.transform));
  var f = lo(c);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: 'span', attributes: u, children: [t] }),
    a && d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [a] }),
    d
  );
}
function sw(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = N(N(N({}, r.attributes), n ? { title: n } : {}), {}, { class: r.classes.join(' ') }),
    a = lo(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return (
    o.push({ tag: 'span', attributes: i, children: [t] }),
    n && o.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    o
  );
}
var Bo = qe.styles;
function Js(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = ou(r, 1),
    a = i[0],
    o = null;
  return (
    Array.isArray(a)
      ? (o = {
          tag: 'g',
          attributes: { class: ''.concat(L.cssPrefix, '-').concat(cn.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: { class: ''.concat(L.cssPrefix, '-').concat(cn.SECONDARY), fill: 'currentColor', d: a[0] },
            },
            {
              tag: 'path',
              attributes: { class: ''.concat(L.cssPrefix, '-').concat(cn.PRIMARY), fill: 'currentColor', d: a[1] },
            },
          ],
        })
      : (o = { tag: 'path', attributes: { fill: 'currentColor', d: a } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
var lw = { found: !1, width: 512, height: 512 };
function uw(e, t) {
  !Uh &&
    !L.showMissingIcons &&
    e &&
    console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Zs(e, t) {
  var n = t;
  return (
    t === 'fa' && L.styleDefault !== null && (t = Qt()),
    new Promise(function (r, i) {
      if ((Pt('missingIconAbstract'), n === 'fa')) {
        var a = tg(e) || {};
        (e = a.iconName || e), (t = a.prefix || t);
      }
      if (e && t && Bo[t] && Bo[t][e]) {
        var o = Bo[t][e];
        return r(Js(o));
      }
      uw(e, t), r(N(N({}, lw), {}, { icon: L.showMissingIcons && e ? Pt('missingIconAbstract') || {} : {} }));
    })
  );
}
var Nd = function () {},
  el = L.measurePerformance && ji && ji.mark && ji.measure ? ji : { mark: Nd, measure: Nd },
  Pr = 'FA "6.5.2"',
  cw = function (t) {
    return (
      el.mark(''.concat(Pr, ' ').concat(t, ' begins')),
      function () {
        return rg(t);
      }
    );
  },
  rg = function (t) {
    el.mark(''.concat(Pr, ' ').concat(t, ' ends')),
      el.measure(
        ''.concat(Pr, ' ').concat(t),
        ''.concat(Pr, ' ').concat(t, ' begins'),
        ''.concat(Pr, ' ').concat(t, ' ends')
      );
  },
  vu = { begin: cw, end: rg },
  oa = function () {};
function Od(e) {
  var t = e.getAttribute ? e.getAttribute(Sn) : null;
  return typeof t == 'string';
}
function fw(e) {
  var t = e.getAttribute ? e.getAttribute(lu) : null,
    n = e.getAttribute ? e.getAttribute(uu) : null;
  return t && n;
}
function dw(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(L.replacementClass);
}
function mw() {
  if (L.autoReplaceSvg === !0) return sa.replace;
  var e = sa[L.autoReplaceSvg];
  return e || sa.replace;
}
function pw(e) {
  return K.createElementNS('http://www.w3.org/2000/svg', e);
}
function hw(e) {
  return K.createElement(e);
}
function ig(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === 'svg' ? pw : hw) : n;
  if (typeof e == 'string') return K.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return (
    a.forEach(function (o) {
      i.appendChild(ig(o, { ceFn: r }));
    }),
    i
  );
}
function gw(e) {
  var t = ' '.concat(e.outerHTML, ' ');
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t;
}
var sa = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(ig(i), n);
        }),
        n.getAttribute(Sn) === null && L.keepOriginalSource)
      ) {
        var r = K.createComment(gw(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~fu(n).indexOf(L.replacementClass)) return sa.replace(t);
    var i = new RegExp(''.concat(L.cssPrefix, '-.*'));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var a = r[0].attributes.class.split(' ').reduce(
        function (s, l) {
          return l === L.replacementClass || l.match(i) ? s.toSvg.push(l) : s.toNode.push(l), s;
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = a.toSvg.join(' ')),
        a.toNode.length === 0 ? n.removeAttribute('class') : n.setAttribute('class', a.toNode.join(' '));
    }
    var o = r.map(function (s) {
      return yi(s);
    }).join(`
`);
    n.setAttribute(Sn, ''), (n.innerHTML = o);
  },
};
function Ld(e) {
  e();
}
function ag(e, t) {
  var n = typeof t == 'function' ? t : oa;
  if (e.length === 0) n();
  else {
    var r = Ld;
    L.mutateApproach === x0 && (r = Kt.requestAnimationFrame || Ld),
      r(function () {
        var i = mw(),
          a = vu.begin('mutate');
        e.map(i), a(), n();
      });
  }
}
var yu = !1;
function og() {
  yu = !0;
}
function tl() {
  yu = !1;
}
var za = null;
function Td(e) {
  if (Sd && L.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? oa : t,
      r = e.nodeCallback,
      i = r === void 0 ? oa : r,
      a = e.pseudoElementsCallback,
      o = a === void 0 ? oa : a,
      s = e.observeMutationsRoot,
      l = s === void 0 ? K : s;
    (za = new Sd(function (u) {
      if (!yu) {
        var c = Qt();
        fr(u).forEach(function (f) {
          if (
            (f.type === 'childList' &&
              f.addedNodes.length > 0 &&
              !Od(f.addedNodes[0]) &&
              (L.searchPseudoElements && o(f.target), n(f.target)),
            f.type === 'attributes' && f.target.parentNode && L.searchPseudoElements && o(f.target.parentNode),
            f.type === 'attributes' && Od(f.target) && ~N0.indexOf(f.attributeName))
          )
            if (f.attributeName === 'class' && fw(f.target)) {
              var d = co(fu(f.target)),
                g = d.prefix,
                w = d.iconName;
              f.target.setAttribute(lu, g || c), w && f.target.setAttribute(uu, w);
            } else dw(f.target) && i(f.target);
        });
      }
    })),
      _t && za.observe(l, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
  }
}
function vw() {
  za && za.disconnect();
}
function yw(e) {
  var t = e.getAttribute('style'),
    n = [];
  return (
    t &&
      (n = t.split(';').reduce(function (r, i) {
        var a = i.split(':'),
          o = a[0],
          s = a.slice(1);
        return o && s.length > 0 && (r[o] = s.join(':').trim()), r;
      }, {})),
    n
  );
}
function ww(e) {
  var t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    i = co(fu(e));
  return (
    i.prefix || (i.prefix = Qt()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix && r.length > 0 && (i.iconName = X0(i.prefix, e.innerText) || pu(i.prefix, Ks(e.innerText))),
      !i.iconName &&
        L.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function Sw(e) {
  var t = fr(e.attributes).reduce(function (i, a) {
      return i.name !== 'class' && i.name !== 'style' && (i[a.name] = a.value), i;
    }, {}),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id');
  return (
    L.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''.concat(L.replacementClass, '-title-').concat(r || oi()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  );
}
function xw() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: st,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Rd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 },
    n = ww(e),
    r = n.iconName,
    i = n.prefix,
    a = n.rest,
    o = Sw(e),
    s = Xs('parseNodeAttributes', {}, e),
    l = t.styleParser ? yw(e) : [];
  return N(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: st,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: a, styles: l, attributes: o },
    },
    s
  );
}
var kw = qe.styles;
function sg(e) {
  var t = L.autoReplaceSvg === 'nest' ? Rd(e, { styleParser: !1 }) : Rd(e);
  return ~t.extra.classes.indexOf(Wh) ? Pt('generateLayersText', e, t) : Pt('generateSvgReplacementMutation', e, t);
}
var Xt = new Set();
cu.map(function (e) {
  Xt.add('fa-'.concat(e));
});
Object.keys(ni[Y]).map(Xt.add.bind(Xt));
Object.keys(ni[ee]).map(Xt.add.bind(Xt));
Xt = gi(Xt);
function Id(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!_t) return Promise.resolve();
  var n = K.documentElement.classList,
    r = function (f) {
      return n.add(''.concat(xd, '-').concat(f));
    },
    i = function (f) {
      return n.remove(''.concat(xd, '-').concat(f));
    },
    a = L.autoFetchSvg
      ? Xt
      : cu
          .map(function (c) {
            return 'fa-'.concat(c);
          })
          .concat(Object.keys(kw));
  a.includes('fa') || a.push('fa');
  var o = ['.'.concat(Wh, ':not([').concat(Sn, '])')]
    .concat(
      a.map(function (c) {
        return '.'.concat(c, ':not([').concat(Sn, '])');
      })
    )
    .join(', ');
  if (o.length === 0) return Promise.resolve();
  var s = [];
  try {
    s = fr(e.querySelectorAll(o));
  } catch {}
  if (s.length > 0) r('pending'), i('complete');
  else return Promise.resolve();
  var l = vu.begin('onTree'),
    u = s.reduce(function (c, f) {
      try {
        var d = sg(f);
        d && c.push(d);
      } catch (g) {
        Uh || (g.name === 'MissingIcon' && console.error(g));
      }
      return c;
    }, []);
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (d) {
        ag(d, function () {
          r('active'), r('complete'), i('pending'), typeof t == 'function' && t(), l(), c();
        });
      })
      .catch(function (d) {
        l(), f(d);
      });
  });
}
function bw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  sg(e).then(function (n) {
    n && ag([n], t);
  });
}
function Cw(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : Gs(t || {}),
      i = n.mask;
    return i && (i = (i || {}).icon ? i : Gs(i || {})), e(r, N(N({}, n), {}, { mask: i }));
  };
}
var Pw = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? st : r,
      a = n.symbol,
      o = a === void 0 ? !1 : a,
      s = n.mask,
      l = s === void 0 ? null : s,
      u = n.maskId,
      c = u === void 0 ? null : u,
      f = n.title,
      d = f === void 0 ? null : f,
      g = n.titleId,
      w = g === void 0 ? null : g,
      v = n.classes,
      x = v === void 0 ? [] : v,
      h = n.attributes,
      m = h === void 0 ? {} : h,
      p = n.styles,
      S = p === void 0 ? {} : p;
    if (t) {
      var y = t.prefix,
        k = t.iconName,
        b = t.icon;
      return fo(N({ type: 'icon' }, t), function () {
        return (
          xn('beforeDOMElementCreation', { iconDefinition: t, params: n }),
          L.autoA11y &&
            (d
              ? (m['aria-labelledby'] = ''.concat(L.replacementClass, '-title-').concat(w || oi()))
              : ((m['aria-hidden'] = 'true'), (m.focusable = 'false'))),
          gu({
            icons: { main: Js(b), mask: l ? Js(l.icon) : { found: !1, width: null, height: null, icon: {} } },
            prefix: y,
            iconName: k,
            transform: N(N({}, st), i),
            symbol: o,
            title: d,
            maskId: c,
            titleId: w,
            extra: { attributes: m, styles: S, classes: x },
          })
        );
      });
    }
  },
  Ew = {
    mixout: function () {
      return { icon: Cw(Pw) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Id), (n.nodeCallback = bw), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? K : r,
          a = n.callback,
          o = a === void 0 ? function () {} : a;
        return Id(i, o);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            a = r.title,
            o = r.titleId,
            s = r.prefix,
            l = r.transform,
            u = r.symbol,
            c = r.mask,
            f = r.maskId,
            d = r.extra;
          return new Promise(function (g, w) {
            Promise.all([
              Zs(i, s),
              c.iconName ? Zs(c.iconName, c.prefix) : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
            ])
              .then(function (v) {
                var x = ou(v, 2),
                  h = x[0],
                  m = x[1];
                g([
                  n,
                  gu({
                    icons: { main: h, mask: m },
                    prefix: s,
                    iconName: i,
                    transform: l,
                    symbol: u,
                    maskId: f,
                    title: a,
                    titleId: o,
                    extra: d,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(w);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            a = n.main,
            o = n.transform,
            s = n.styles,
            l = lo(s);
          l.length > 0 && (i.style = l);
          var u;
          return (
            du(o) &&
              (u = Pt('generateAbstractTransformGrouping', {
                main: a,
                transform: o,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            r.push(u || a.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  _w = {
    mixout: function () {
      return {
        layer: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.classes,
            a = i === void 0 ? [] : i;
          return fo({ type: 'layer' }, function () {
            xn('beforeDOMElementCreation', { assembler: n, params: r });
            var o = [];
            return (
              n(function (s) {
                Array.isArray(s)
                  ? s.map(function (l) {
                      o = o.concat(l.abstract);
                    })
                  : (o = o.concat(s.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: { class: [''.concat(L.cssPrefix, '-layers')].concat(gi(a)).join(' ') },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  Nw = {
    mixout: function () {
      return {
        counter: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.title,
            a = i === void 0 ? null : i,
            o = r.classes,
            s = o === void 0 ? [] : o,
            l = r.attributes,
            u = l === void 0 ? {} : l,
            c = r.styles,
            f = c === void 0 ? {} : c;
          return fo({ type: 'counter', content: n }, function () {
            return (
              xn('beforeDOMElementCreation', { content: n, params: r }),
              sw({
                content: n.toString(),
                title: a,
                extra: { attributes: u, styles: f, classes: [''.concat(L.cssPrefix, '-layers-counter')].concat(gi(s)) },
              })
            );
          });
        },
      };
    },
  },
  Ow = {
    mixout: function () {
      return {
        text: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.transform,
            a = i === void 0 ? st : i,
            o = r.title,
            s = o === void 0 ? null : o,
            l = r.classes,
            u = l === void 0 ? [] : l,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            d = r.styles,
            g = d === void 0 ? {} : d;
          return fo({ type: 'text', content: n }, function () {
            return (
              xn('beforeDOMElementCreation', { content: n, params: r }),
              _d({
                content: n,
                transform: N(N({}, st), a),
                title: s,
                extra: { attributes: f, styles: g, classes: [''.concat(L.cssPrefix, '-layers-text')].concat(gi(u)) },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          a = r.transform,
          o = r.extra,
          s = null,
          l = null;
        if (Fh) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (s = c.width / u), (l = c.height / u);
        }
        return (
          L.autoA11y && !i && (o.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            n,
            _d({ content: n.innerHTML, width: s, height: l, transform: a, title: i, extra: o, watchable: !0 }),
          ])
        );
      };
    },
  },
  Lw = new RegExp('"', 'ug'),
  Md = [1105920, 1112319];
function Tw(e) {
  var t = e.replace(Lw, ''),
    n = B0(t, 0),
    r = n >= Md[0] && n <= Md[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Ks(i ? t[0] : t), isSecondary: r || i };
}
function Ad(e, t) {
  var n = ''.concat(S0).concat(t.replace(':', '-'));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var a = fr(e.children),
      o = a.filter(function (b) {
        return b.getAttribute(qs) === t;
      })[0],
      s = Kt.getComputedStyle(e, t),
      l = s.getPropertyValue('font-family').match(P0),
      u = s.getPropertyValue('font-weight'),
      c = s.getPropertyValue('content');
    if (o && !l) return e.removeChild(o), r();
    if (l && c !== 'none' && c !== '') {
      var f = s.getPropertyValue('content'),
        d = ~['Sharp'].indexOf(l[2]) ? ee : Y,
        g = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(l[2])
          ? ri[d][l[2].toLowerCase()]
          : E0[d][u],
        w = Tw(f),
        v = w.value,
        x = w.isSecondary,
        h = l[0].startsWith('FontAwesome'),
        m = pu(g, v),
        p = m;
      if (h) {
        var S = G0(v);
        S.iconName && S.prefix && ((m = S.iconName), (g = S.prefix));
      }
      if (m && !x && (!o || o.getAttribute(lu) !== g || o.getAttribute(uu) !== p)) {
        e.setAttribute(n, p), o && e.removeChild(o);
        var y = xw(),
          k = y.extra;
        (k.attributes[qs] = t),
          Zs(m, g)
            .then(function (b) {
              var _ = gu(
                  N(N({}, y), {}, { icons: { main: b, mask: hu() }, prefix: g, iconName: p, extra: k, watchable: !0 })
                ),
                M = K.createElementNS('http://www.w3.org/2000/svg', 'svg');
              t === '::before' ? e.insertBefore(M, e.firstChild) : e.appendChild(M),
                (M.outerHTML = _.map(function (I) {
                  return yi(I);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function Rw(e) {
  return Promise.all([Ad(e, '::before'), Ad(e, '::after')]);
}
function Iw(e) {
  return (
    e.parentNode !== document.head &&
    !~k0.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(qs) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  );
}
function zd(e) {
  if (_t)
    return new Promise(function (t, n) {
      var r = fr(e.querySelectorAll('*')).filter(Iw).map(Rw),
        i = vu.begin('searchPseudoElements');
      og(),
        Promise.all(r)
          .then(function () {
            i(), tl(), t();
          })
          .catch(function () {
            i(), tl(), n();
          });
    });
}
var Mw = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = zd), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? K : r;
        L.searchPseudoElements && zd(i);
      };
    },
  },
  jd = !1,
  Aw = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            og(), (jd = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Td(Xs('mutationObserverCallbacks', {}));
        },
        noAuto: function () {
          vw();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          jd ? tl() : Td(Xs('mutationObserverCallbacks', { observeMutationsRoot: r }));
        },
      };
    },
  },
  Dd = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(' ')
      .reduce(function (r, i) {
        var a = i.toLowerCase().split('-'),
          o = a[0],
          s = a.slice(1).join('-');
        if (o && s === 'h') return (r.flipX = !0), r;
        if (o && s === 'v') return (r.flipY = !0), r;
        if (((s = parseFloat(s)), isNaN(s))) return r;
        switch (o) {
          case 'grow':
            r.size = r.size + s;
            break;
          case 'shrink':
            r.size = r.size - s;
            break;
          case 'left':
            r.x = r.x - s;
            break;
          case 'right':
            r.x = r.x + s;
            break;
          case 'up':
            r.y = r.y - s;
            break;
          case 'down':
            r.y = r.y + s;
            break;
          case 'rotate':
            r.rotate = r.rotate + s;
            break;
        }
        return r;
      }, n);
  },
  zw = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return Dd(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-transform');
          return i && (n.transform = Dd(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          a = n.containerWidth,
          o = n.iconWidth,
          s = { transform: 'translate('.concat(a / 2, ' 256)') },
          l = 'translate('.concat(i.x * 32, ', ').concat(i.y * 32, ') '),
          u = 'scale('
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ', ')
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ') '),
          c = 'rotate('.concat(i.rotate, ' 0 0)'),
          f = { transform: ''.concat(l, ' ').concat(u, ' ').concat(c) },
          d = { transform: 'translate('.concat((o / 2) * -1, ' -256)') },
          g = { outer: s, inner: f, path: d };
        return {
          tag: 'g',
          attributes: N({}, g.outer),
          children: [
            {
              tag: 'g',
              attributes: N({}, g.inner),
              children: [
                { tag: r.icon.tag, children: r.icon.children, attributes: N(N({}, r.icon.attributes), g.path) },
              ],
            },
          ],
        };
      };
    },
  },
  Ho = { x: 0, y: 0, width: '100%', height: '100%' };
function Fd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e;
}
function jw(e) {
  return e.tag === 'g' ? e.children : [e];
}
var Dw = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-mask'),
            a = i
              ? co(
                  i.split(' ').map(function (o) {
                    return o.trim();
                  })
                )
              : hu();
          return a.prefix || (a.prefix = Qt()), (n.mask = a), (n.maskId = r.getAttribute('data-fa-mask-id')), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          a = n.main,
          o = n.mask,
          s = n.maskId,
          l = n.transform,
          u = a.width,
          c = a.icon,
          f = o.width,
          d = o.icon,
          g = j0({ transform: l, containerWidth: f, iconWidth: u }),
          w = { tag: 'rect', attributes: N(N({}, Ho), {}, { fill: 'white' }) },
          v = c.children ? { children: c.children.map(Fd) } : {},
          x = {
            tag: 'g',
            attributes: N({}, g.inner),
            children: [Fd(N({ tag: c.tag, attributes: N(N({}, c.attributes), g.path) }, v))],
          },
          h = { tag: 'g', attributes: N({}, g.outer), children: [x] },
          m = 'mask-'.concat(s || oi()),
          p = 'clip-'.concat(s || oi()),
          S = {
            tag: 'mask',
            attributes: N(N({}, Ho), {}, { id: m, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }),
            children: [w, h],
          },
          y = { tag: 'defs', children: [{ tag: 'clipPath', attributes: { id: p }, children: jw(d) }, S] };
        return (
          r.push(y, {
            tag: 'rect',
            attributes: N(
              { fill: 'currentColor', 'clip-path': 'url(#'.concat(p, ')'), mask: 'url(#'.concat(m, ')') },
              Ho
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  Fw = {
    provides: function (t) {
      var n = !1;
      Kt.matchMedia && (n = Kt.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: 'currentColor' },
            a = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          r.push({
            tag: 'path',
            attributes: N(
              N({}, i),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              }
            ),
          });
          var o = N(N({}, a), {}, { attributeName: 'opacity' }),
            s = { tag: 'circle', attributes: N(N({}, i), {}, { cx: '256', cy: '364', r: '28' }), children: [] };
          return (
            n ||
              s.children.push(
                { tag: 'animate', attributes: N(N({}, a), {}, { attributeName: 'r', values: '28;14;28;28;14;28;' }) },
                { tag: 'animate', attributes: N(N({}, o), {}, { values: '1;0;1;1;0;1;' }) }
              ),
            r.push(s),
            r.push({
              tag: 'path',
              attributes: N(
                N({}, i),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                }
              ),
              children: n ? [] : [{ tag: 'animate', attributes: N(N({}, o), {}, { values: '1;0;0;0;0;1;' }) }],
            }),
            n ||
              r.push({
                tag: 'path',
                attributes: N(
                  N({}, i),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                  }
                ),
                children: [{ tag: 'animate', attributes: N(N({}, o), {}, { values: '0;0;1;1;0;0;' }) }],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: r }
          );
        });
    },
  },
  $w = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-symbol'),
            a = i === null ? !1 : i === '' ? !0 : i;
          return (n.symbol = a), n;
        },
      };
    },
  },
  Vw = [$0, Ew, _w, Nw, Ow, Mw, Aw, zw, Dw, Fw, $w];
ew(Vw, { mixoutsTo: Me });
Me.noAuto;
Me.config;
Me.library;
Me.dom;
var nl = Me.parse;
Me.findIconDefinition;
Me.toHtml;
var Uw = Me.icon;
Me.layer;
Me.text;
Me.counter;
var lg = { exports: {} },
  Ww = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Bw = Ww,
  Hw = Bw;
function ug() {}
function cg() {}
cg.resetWarningCache = ug;
var Yw = function () {
  function e(r, i, a, o, s, l) {
    if (l !== Hw) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: cg,
    resetWarningCache: ug,
  };
  return (n.PropTypes = n), n;
};
lg.exports = Yw();
var qw = lg.exports;
const z = ll(qw);
function $d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $d(Object(n), !0).forEach(function (r) {
          Yn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : $d(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ja(e) {
  '@babel/helpers - typeof';
  return (
    (ja =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    ja(e)
  );
}
function Yn(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
function Kw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++) (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qw(e, t) {
  if (e == null) return {};
  var n = Kw(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function rl(e) {
  return Xw(e) || Gw(e) || Jw(e) || Zw();
}
function Xw(e) {
  if (Array.isArray(e)) return il(e);
}
function Gw(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
}
function Jw(e, t) {
  if (e) {
    if (typeof e == 'string') return il(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set')) return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return il(e, t);
  }
}
function il(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Zw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eS(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    a = e.bounce,
    o = e.shake,
    s = e.flash,
    l = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    f = e.pulse,
    d = e.fixedWidth,
    g = e.inverse,
    w = e.border,
    v = e.listItem,
    x = e.flip,
    h = e.size,
    m = e.rotation,
    p = e.pull,
    S =
      ((t = {
        'fa-beat': n,
        'fa-fade': r,
        'fa-beat-fade': i,
        'fa-bounce': a,
        'fa-shake': o,
        'fa-flash': s,
        'fa-spin': l,
        'fa-spin-reverse': c,
        'fa-spin-pulse': u,
        'fa-pulse': f,
        'fa-fw': d,
        'fa-inverse': g,
        'fa-border': w,
        'fa-li': v,
        'fa-flip': x === !0,
        'fa-flip-horizontal': x === 'horizontal' || x === 'both',
        'fa-flip-vertical': x === 'vertical' || x === 'both',
      }),
      Yn(t, 'fa-'.concat(h), typeof h < 'u' && h !== null),
      Yn(t, 'fa-rotate-'.concat(m), typeof m < 'u' && m !== null && m !== 0),
      Yn(t, 'fa-pull-'.concat(p), typeof p < 'u' && p !== null),
      Yn(t, 'fa-swap-opacity', e.swapOpacity),
      t);
  return Object.keys(S)
    .map(function (y) {
      return S[y] ? y : null;
    })
    .filter(function (y) {
      return y;
    });
}
function tS(e) {
  return (e = e - 0), e === e;
}
function fg(e) {
  return tS(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : '';
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var nS = ['style'];
function rS(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function iS(e) {
  return e
    .split(';')
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(':'),
        i = fg(n.slice(0, r)),
        a = n.slice(r + 1).trim();
      return i.startsWith('webkit') ? (t[rS(i)] = a) : (t[i] = a), t;
    }, {});
}
function dg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == 'string') return t;
  var r = (t.children || []).map(function (l) {
      return dg(e, l);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (l, u) {
        var c = t.attributes[u];
        switch (u) {
          case 'class':
            (l.attrs.className = c), delete t.attributes.class;
            break;
          case 'style':
            l.attrs.style = iS(c);
            break;
          default:
            u.indexOf('aria-') === 0 || u.indexOf('data-') === 0
              ? (l.attrs[u.toLowerCase()] = c)
              : (l.attrs[fg(u)] = c);
        }
        return l;
      },
      { attrs: {} }
    ),
    a = n.style,
    o = a === void 0 ? {} : a,
    s = Qw(n, nS);
  return (i.attrs.style = jt(jt({}, i.attrs.style), o)), e.apply(void 0, [t.tag, jt(jt({}, i.attrs), s)].concat(rl(r)));
}
var mg = !1;
try {
  mg = !0;
} catch {}
function aS() {
  if (!mg && console && typeof console.error == 'function') {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Vd(e) {
  if (e && ja(e) === 'object' && e.prefix && e.iconName && e.icon) return e;
  if (nl.icon) return nl.icon(e);
  if (e === null) return null;
  if (e && ja(e) === 'object' && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2) return { prefix: e[0], iconName: e[1] };
  if (typeof e == 'string') return { prefix: 'fas', iconName: e };
}
function Yo(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t) ? Yn({}, e, t) : {};
}
var wi = Ba.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    a = e.className,
    o = e.title,
    s = e.titleId,
    l = e.maskId,
    u = Vd(n),
    c = Yo('classes', [].concat(rl(eS(e)), rl(a.split(' ')))),
    f = Yo('transform', typeof e.transform == 'string' ? nl.transform(e.transform) : e.transform),
    d = Yo('mask', Vd(r)),
    g = Uw(u, jt(jt(jt(jt({}, c), f), d), {}, { symbol: i, title: o, titleId: s, maskId: l }));
  if (!g) return aS('Could not find icon', u), null;
  var w = g.abstract,
    v = { ref: t };
  return (
    Object.keys(e).forEach(function (x) {
      wi.defaultProps.hasOwnProperty(x) || (v[x] = e[x]);
    }),
    oS(w[0], v)
  );
});
wi.displayName = 'FontAwesomeIcon';
wi.propTypes = {
  beat: z.bool,
  border: z.bool,
  beatFade: z.bool,
  bounce: z.bool,
  className: z.string,
  fade: z.bool,
  flash: z.bool,
  mask: z.oneOfType([z.object, z.array, z.string]),
  maskId: z.string,
  fixedWidth: z.bool,
  inverse: z.bool,
  flip: z.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: z.oneOfType([z.object, z.array, z.string]),
  listItem: z.bool,
  pull: z.oneOf(['right', 'left']),
  pulse: z.bool,
  rotation: z.oneOf([0, 90, 180, 270]),
  shake: z.bool,
  size: z.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: z.bool,
  spinPulse: z.bool,
  spinReverse: z.bool,
  symbol: z.oneOfType([z.bool, z.string]),
  title: z.string,
  titleId: z.string,
  transform: z.oneOfType([z.string, z.object]),
  swapOpacity: z.bool,
};
wi.defaultProps = {
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
var oS = dg.bind(null, Ba.createElement),
  pg = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = '', o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        s && (a = i(a, r(s)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == 'string' || typeof a == 'number') return a;
      if (typeof a != 'object') return '';
      if (Array.isArray(a)) return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes('[native code]'))
        return a.toString();
      var o = '';
      for (var s in a) t.call(a, s) && a[s] && (o = i(o, s));
      return o;
    }
    function i(a, o) {
      return o ? (a ? a + ' ' + o : a + o) : a;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(pg);
var sS = pg.exports;
const lS = ll(sS);
var uS = {
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
  cS = {
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
  Hk = cS,
  Yk = {
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
  qk = {
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
  fS = {
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
  Kk = fS,
  dS = {
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
  Qk = dS;
function mS() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    typeof t[0] == 'string' && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Ud = {};
function al() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  (typeof t[0] == 'string' && Ud[t[0]]) || (typeof t[0] == 'string' && (Ud[t[0]] = new Date()), mS(...t));
}
const hg = (e, t) => () => {
  if (e.isInitialized) t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off('initialized', n);
      }, 0),
        t();
    };
    e.on('initialized', n);
  }
};
function Wd(e, t, n) {
  e.loadNamespaces(t, hg(e, n));
}
function Bd(e, t, n, r) {
  typeof n == 'string' && (n = [n]),
    n.forEach((i) => {
      e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
    }),
    e.loadLanguages(t, hg(e, r));
}
function pS(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0],
    i = t.options ? t.options.fallbackLng : !1,
    a = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === 'cimode') return !0;
  const o = (s, l) => {
    const u = t.services.backendConnector.state[`${s}|${l}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n &&
    n.bindI18n.indexOf('languageChanging') > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !o(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(r, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (o(r, e) && (!i || o(a, e)))
      );
}
function hS(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length
    ? (al('i18n.languages were undefined or empty', t.languages), !0)
    : t.options.ignoreJSONStructure !== void 0
    ? t.hasLoadedNamespace(e, {
        lng: n.lng,
        precheck: (i, a) => {
          if (
            n.bindI18n &&
            n.bindI18n.indexOf('languageChanging') > -1 &&
            i.services.backendConnector.backend &&
            i.isLanguageChangingTo &&
            !a(i.isLanguageChangingTo, e)
          )
            return !1;
        },
      })
    : pS(e, t, n);
}
const gS = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  vS = {
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
  yS = (e) => vS[e],
  wS = (e) => e.replace(gS, yS);
let ol = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: wS,
};
function SS() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ol = { ...ol, ...e };
}
function xS() {
  return ol;
}
let gg;
function kS(e) {
  gg = e;
}
function bS() {
  return gg;
}
const CS = {
    type: '3rdParty',
    init(e) {
      SS(e.options.react), kS(e);
    },
  },
  PS = C.createContext();
class ES {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const _S = (e, t) => {
  const n = C.useRef();
  return (
    C.useEffect(() => {
      n.current = e;
    }, [e, t]),
    n.current
  );
};
function vg(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function NS(e, t, n, r) {
  return C.useCallback(vg(e, t, n, r), [e, t, n, r]);
}
function OS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = t,
    { i18n: r, defaultNS: i } = C.useContext(PS) || {},
    a = n || r || bS();
  if ((a && !a.reportNamespaces && (a.reportNamespaces = new ES()), !a)) {
    al('You will need to pass in an i18next instance by using initReactI18next');
    const S = (k, b) =>
        typeof b == 'string'
          ? b
          : b && typeof b == 'object' && typeof b.defaultValue == 'string'
          ? b.defaultValue
          : Array.isArray(k)
          ? k[k.length - 1]
          : k,
      y = [S, {}, !1];
    return (y.t = S), (y.i18n = {}), (y.ready = !1), y;
  }
  a.options.react &&
    a.options.react.wait !== void 0 &&
    al('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  const o = { ...xS(), ...a.options.react, ...t },
    { useSuspense: s, keyPrefix: l } = o;
  let u = i || (a.options && a.options.defaultNS);
  (u = typeof u == 'string' ? [u] : u || ['translation']),
    a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(u);
  const c = (a.isInitialized || a.initializedStoreOnce) && u.every((S) => hS(S, a, o)),
    f = NS(a, t.lng || null, o.nsMode === 'fallback' ? u : u[0], l),
    d = () => f,
    g = () => vg(a, t.lng || null, o.nsMode === 'fallback' ? u : u[0], l),
    [w, v] = C.useState(d);
  let x = u.join();
  t.lng && (x = `${t.lng}${x}`);
  const h = _S(x),
    m = C.useRef(!0);
  C.useEffect(() => {
    const { bindI18n: S, bindI18nStore: y } = o;
    (m.current = !0),
      !c &&
        !s &&
        (t.lng
          ? Bd(a, t.lng, u, () => {
              m.current && v(g);
            })
          : Wd(a, u, () => {
              m.current && v(g);
            })),
      c && h && h !== x && m.current && v(g);
    function k() {
      m.current && v(g);
    }
    return (
      S && a && a.on(S, k),
      y && a && a.store.on(y, k),
      () => {
        (m.current = !1),
          S && a && S.split(' ').forEach((b) => a.off(b, k)),
          y && a && y.split(' ').forEach((b) => a.store.off(b, k));
      }
    );
  }, [a, x]),
    C.useEffect(() => {
      m.current && c && v(d);
    }, [a, l, c]);
  const p = [w, a, c];
  if (((p.t = w), (p.i18n = a), (p.ready = c), c || (!c && !s))) return p;
  throw new Promise((S) => {
    t.lng ? Bd(a, t.lng, u, () => S()) : Wd(a, u, () => S());
  });
}
const Lt = ({ size: e, inModal: t }) => {
  const { i18n: n } = OS(),
    r = n.language;
  return D.jsxs('div', {
    className: lS(e ? `gnb-spinner-${e}` : 'gnb-spinner', t ? 'in-modal' : 'loading-page'),
    role: 'status',
    children: [
      D.jsx(wi, { icon: uS, className: 'fa-spin', 'aria-labelledby': 'spinner-description' }),
      D.jsx('span', {
        className: 'sr-only',
        id: 'spinner-description',
        children: r === 'fr-CA' ? 'Chargement...' : 'Loading...',
      }),
    ],
  });
};
var Yi = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var Hd;
function LS() {
  if (Hd) return Yi;
  (Hd = 1), (Yi.parse = o), (Yi.serialize = u);
  var e = Object.prototype.toString,
    t = Object.prototype.hasOwnProperty,
    n = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
    r = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
    i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    a = /^[\u0020-\u003A\u003D-\u007E]*$/;
  function o(g, w) {
    if (typeof g != 'string') throw new TypeError('argument str must be a string');
    var v = {},
      x = g.length;
    if (x < 2) return v;
    var h = (w && w.decode) || c,
      m = 0,
      p = 0,
      S = 0;
    do {
      if (((p = g.indexOf('=', m)), p === -1)) break;
      if (((S = g.indexOf(';', m)), S === -1)) S = x;
      else if (p > S) {
        m = g.lastIndexOf(';', p - 1) + 1;
        continue;
      }
      var y = s(g, m, p),
        k = l(g, p, y),
        b = g.slice(y, k);
      if (!t.call(v, b)) {
        var _ = s(g, p + 1, S),
          M = l(g, S, _);
        g.charCodeAt(_) === 34 && g.charCodeAt(M - 1) === 34 && (_++, M--);
        var I = g.slice(_, M);
        v[b] = d(I, h);
      }
      m = S + 1;
    } while (m < x);
    return v;
  }
  function s(g, w, v) {
    do {
      var x = g.charCodeAt(w);
      if (x !== 32 && x !== 9) return w;
    } while (++w < v);
    return v;
  }
  function l(g, w, v) {
    for (; w > v; ) {
      var x = g.charCodeAt(--w);
      if (x !== 32 && x !== 9) return w + 1;
    }
    return v;
  }
  function u(g, w, v) {
    var x = (v && v.encode) || encodeURIComponent;
    if (typeof x != 'function') throw new TypeError('option encode is invalid');
    if (!n.test(g)) throw new TypeError('argument name is invalid');
    var h = x(w);
    if (!r.test(h)) throw new TypeError('argument val is invalid');
    var m = g + '=' + h;
    if (!v) return m;
    if (v.maxAge != null) {
      var p = Math.floor(v.maxAge);
      if (!isFinite(p)) throw new TypeError('option maxAge is invalid');
      m += '; Max-Age=' + p;
    }
    if (v.domain) {
      if (!i.test(v.domain)) throw new TypeError('option domain is invalid');
      m += '; Domain=' + v.domain;
    }
    if (v.path) {
      if (!a.test(v.path)) throw new TypeError('option path is invalid');
      m += '; Path=' + v.path;
    }
    if (v.expires) {
      var S = v.expires;
      if (!f(S) || isNaN(S.valueOf())) throw new TypeError('option expires is invalid');
      m += '; Expires=' + S.toUTCString();
    }
    if (
      (v.httpOnly && (m += '; HttpOnly'),
      v.secure && (m += '; Secure'),
      v.partitioned && (m += '; Partitioned'),
      v.priority)
    ) {
      var y = typeof v.priority == 'string' ? v.priority.toLowerCase() : v.priority;
      switch (y) {
        case 'low':
          m += '; Priority=Low';
          break;
        case 'medium':
          m += '; Priority=Medium';
          break;
        case 'high':
          m += '; Priority=High';
          break;
        default:
          throw new TypeError('option priority is invalid');
      }
    }
    if (v.sameSite) {
      var k = typeof v.sameSite == 'string' ? v.sameSite.toLowerCase() : v.sameSite;
      switch (k) {
        case !0:
          m += '; SameSite=Strict';
          break;
        case 'lax':
          m += '; SameSite=Lax';
          break;
        case 'strict':
          m += '; SameSite=Strict';
          break;
        case 'none':
          m += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    }
    return m;
  }
  function c(g) {
    return g.indexOf('%') !== -1 ? decodeURIComponent(g) : g;
  }
  function f(g) {
    return e.call(g) === '[object Date]';
  }
  function d(g, w) {
    try {
      return w(g);
    } catch {
      return g;
    }
  }
  return Yi;
}
var la = LS();
function TS() {
  const e = typeof global > 'u' ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  return typeof e == 'boolean' ? e : typeof document == 'object' && typeof document.cookie == 'string';
}
function RS(e) {
  return typeof e == 'string' ? la.parse(e) : typeof e == 'object' && e !== null ? e : {};
}
function qo(e, t = {}) {
  const n = IS(e);
  if (!t.doNotParse)
    try {
      return JSON.parse(n);
    } catch {}
  return e;
}
function IS(e) {
  return e && e[0] === 'j' && e[1] === ':' ? e.substr(2) : e;
}
class yg {
  constructor(t, n = {}) {
    (this.changeListeners = []),
      (this.HAS_DOCUMENT_COOKIE = !1),
      (this.update = () => {
        if (!this.HAS_DOCUMENT_COOKIE) return;
        const i = this.cookies;
        (this.cookies = la.parse(document.cookie)), this._checkChanges(i);
      });
    const r = typeof document > 'u' ? '' : document.cookie;
    (this.cookies = RS(t || r)), (this.defaultSetOptions = n), (this.HAS_DOCUMENT_COOKIE = TS());
  }
  _emitChange(t) {
    for (let n = 0; n < this.changeListeners.length; ++n) this.changeListeners[n](t);
  }
  _checkChanges(t) {
    new Set(Object.keys(t).concat(Object.keys(this.cookies))).forEach((r) => {
      t[r] !== this.cookies[r] && this._emitChange({ name: r, value: qo(this.cookies[r]) });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(t, n = {}) {
    return n.doNotUpdate || this.update(), qo(this.cookies[t], n);
  }
  getAll(t = {}) {
    t.doNotUpdate || this.update();
    const n = {};
    for (let r in this.cookies) n[r] = qo(this.cookies[r], t);
    return n;
  }
  set(t, n, r) {
    r ? (r = Object.assign(Object.assign({}, this.defaultSetOptions), r)) : (r = this.defaultSetOptions);
    const i = typeof n == 'string' ? n : JSON.stringify(n);
    (this.cookies = Object.assign(Object.assign({}, this.cookies), { [t]: i })),
      this.HAS_DOCUMENT_COOKIE && (document.cookie = la.serialize(t, i, r)),
      this._emitChange({ name: t, value: n, options: r });
  }
  remove(t, n) {
    const r = (n = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), n), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    }));
    (this.cookies = Object.assign({}, this.cookies)),
      delete this.cookies[t],
      this.HAS_DOCUMENT_COOKIE && (document.cookie = la.serialize(t, '', r)),
      this._emitChange({ name: t, value: void 0, options: n });
  }
  addChangeListener(t) {
    this.changeListeners.push(t),
      this.HAS_DOCUMENT_COOKIE &&
        this.changeListeners.length === 1 &&
        (typeof window == 'object' && 'cookieStore' in window
          ? window.cookieStore.addEventListener('change', this.update)
          : this._startPolling());
  }
  removeChangeListener(t) {
    const n = this.changeListeners.indexOf(t);
    n >= 0 && this.changeListeners.splice(n, 1),
      this.HAS_DOCUMENT_COOKIE &&
        this.changeListeners.length === 0 &&
        (typeof window == 'object' && 'cookieStore' in window
          ? window.cookieStore.removeEventListener('change', this.update)
          : this._stopPolling());
  }
}
const wg = C.createContext(new yg()),
  { Provider: MS, Consumer: Xk } = wg;
class AS extends C.Component {
  constructor(t) {
    super(t), t.cookies ? (this.cookies = t.cookies) : (this.cookies = new yg(void 0, t.defaultSetOptions));
  }
  render() {
    return C.createElement(MS, { value: this.cookies }, this.props.children);
  }
}
var Sg = { exports: {} },
  $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd;
function zS() {
  if (Yd) return $;
  Yd = 1;
  var e = typeof Symbol == 'function' && Symbol.for,
    t = e ? Symbol.for('react.element') : 60103,
    n = e ? Symbol.for('react.portal') : 60106,
    r = e ? Symbol.for('react.fragment') : 60107,
    i = e ? Symbol.for('react.strict_mode') : 60108,
    a = e ? Symbol.for('react.profiler') : 60114,
    o = e ? Symbol.for('react.provider') : 60109,
    s = e ? Symbol.for('react.context') : 60110,
    l = e ? Symbol.for('react.async_mode') : 60111,
    u = e ? Symbol.for('react.concurrent_mode') : 60111,
    c = e ? Symbol.for('react.forward_ref') : 60112,
    f = e ? Symbol.for('react.suspense') : 60113,
    d = e ? Symbol.for('react.suspense_list') : 60120,
    g = e ? Symbol.for('react.memo') : 60115,
    w = e ? Symbol.for('react.lazy') : 60116,
    v = e ? Symbol.for('react.block') : 60121,
    x = e ? Symbol.for('react.fundamental') : 60117,
    h = e ? Symbol.for('react.responder') : 60118,
    m = e ? Symbol.for('react.scope') : 60119;
  function p(y) {
    if (typeof y == 'object' && y !== null) {
      var k = y.$$typeof;
      switch (k) {
        case t:
          switch (((y = y.type), y)) {
            case l:
            case u:
            case r:
            case a:
            case i:
            case f:
              return y;
            default:
              switch (((y = y && y.$$typeof), y)) {
                case s:
                case c:
                case w:
                case g:
                case o:
                  return y;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function S(y) {
    return p(y) === u;
  }
  return (
    ($.AsyncMode = l),
    ($.ConcurrentMode = u),
    ($.ContextConsumer = s),
    ($.ContextProvider = o),
    ($.Element = t),
    ($.ForwardRef = c),
    ($.Fragment = r),
    ($.Lazy = w),
    ($.Memo = g),
    ($.Portal = n),
    ($.Profiler = a),
    ($.StrictMode = i),
    ($.Suspense = f),
    ($.isAsyncMode = function (y) {
      return S(y) || p(y) === l;
    }),
    ($.isConcurrentMode = S),
    ($.isContextConsumer = function (y) {
      return p(y) === s;
    }),
    ($.isContextProvider = function (y) {
      return p(y) === o;
    }),
    ($.isElement = function (y) {
      return typeof y == 'object' && y !== null && y.$$typeof === t;
    }),
    ($.isForwardRef = function (y) {
      return p(y) === c;
    }),
    ($.isFragment = function (y) {
      return p(y) === r;
    }),
    ($.isLazy = function (y) {
      return p(y) === w;
    }),
    ($.isMemo = function (y) {
      return p(y) === g;
    }),
    ($.isPortal = function (y) {
      return p(y) === n;
    }),
    ($.isProfiler = function (y) {
      return p(y) === a;
    }),
    ($.isStrictMode = function (y) {
      return p(y) === i;
    }),
    ($.isSuspense = function (y) {
      return p(y) === f;
    }),
    ($.isValidElementType = function (y) {
      return (
        typeof y == 'string' ||
        typeof y == 'function' ||
        y === r ||
        y === u ||
        y === a ||
        y === i ||
        y === f ||
        y === d ||
        (typeof y == 'object' &&
          y !== null &&
          (y.$$typeof === w ||
            y.$$typeof === g ||
            y.$$typeof === o ||
            y.$$typeof === s ||
            y.$$typeof === c ||
            y.$$typeof === x ||
            y.$$typeof === h ||
            y.$$typeof === m ||
            y.$$typeof === v))
      );
    }),
    ($.typeOf = p),
    $
  );
}
Sg.exports = zS();
var jS = Sg.exports,
  xg = jS,
  DS = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  FS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  kg = {};
kg[xg.ForwardRef] = DS;
kg[xg.Memo] = FS;
function $S() {
  return typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
}
function wu(e) {
  const t = C.useContext(wg);
  if (!t) throw new Error('Missing <CookiesProvider>');
  const [n, r] = C.useState(() => t.getAll({ doNotUpdate: !0 }));
  $S() &&
    C.useLayoutEffect(() => {
      function s() {
        const l = t.getAll({ doNotUpdate: !0 });
        VS(e || null, l, n) && r(l);
      }
      return (
        t.addChangeListener(s),
        () => {
          t.removeChangeListener(s);
        }
      );
    }, [t, n]);
  const i = C.useMemo(() => t.set.bind(t), [t]),
    a = C.useMemo(() => t.remove.bind(t), [t]),
    o = C.useMemo(() => t.update.bind(t), [t]);
  return [n, i, a, o];
}
function VS(e, t, n) {
  if (!e) return !0;
  for (let r of e) if (t[r] !== n[r]) return !0;
  return !1;
}
const US = {
  type: 'logger',
  log(e) {
    this.output('log', e);
  },
  warn(e) {
    this.output('warn', e);
  },
  error(e) {
    this.output('error', e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  },
};
class Da {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || 'i18next:'), (this.logger = t || US), (this.options = n), (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, 'log', '', !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, 'warn', '', !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, 'error', '');
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (typeof t[0] == 'string' && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Da(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
  }
  clone(t) {
    return (t = t || this.options), (t.prefix = t.prefix || this.prefix), new Da(this.logger, t);
  }
}
var lt = new Da();
class mo {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(' ').forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const i = this.observers[r].get(n) || 0;
        this.observers[r].set(n, i + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((o) => {
        let [s, l] = o;
        for (let u = 0; u < l; u++) s(...r);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((o) => {
          let [s, l] = o;
          for (let u = 0; u < l; u++) s.apply(s, [t, ...r]);
        });
  }
}
function Sr() {
  let e, t;
  const n = new Promise((r, i) => {
    (e = r), (t = i);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function qd(e) {
  return e == null ? '' : '' + e;
}
function WS(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const BS = /###/g;
function jr(e, t, n) {
  function r(s) {
    return s && s.indexOf('###') > -1 ? s.replace(BS, '.') : s;
  }
  function i() {
    return !e || typeof e == 'string';
  }
  const a = typeof t != 'string' ? t : t.split('.');
  let o = 0;
  for (; o < a.length - 1; ) {
    if (i()) return {};
    const s = r(a[o]);
    !e[s] && n && (e[s] = new n()), Object.prototype.hasOwnProperty.call(e, s) ? (e = e[s]) : (e = {}), ++o;
  }
  return i() ? {} : { obj: e, k: r(a[o]) };
}
function Kd(e, t, n) {
  const { obj: r, k: i } = jr(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let a = t[t.length - 1],
    o = t.slice(0, t.length - 1),
    s = jr(e, o, Object);
  for (; s.obj === void 0 && o.length; )
    (a = `${o[o.length - 1]}.${a}`),
      (o = o.slice(0, o.length - 1)),
      (s = jr(e, o, Object)),
      s && s.obj && typeof s.obj[`${s.k}.${a}`] < 'u' && (s.obj = void 0);
  s.obj[`${s.k}.${a}`] = n;
}
function HS(e, t, n, r) {
  const { obj: i, k: a } = jr(e, t, Object);
  (i[a] = i[a] || []), i[a].push(n);
}
function Fa(e, t) {
  const { obj: n, k: r } = jr(e, t);
  if (n) return n[r];
}
function YS(e, t, n) {
  const r = Fa(e, n);
  return r !== void 0 ? r : Fa(t, n);
}
function bg(e, t, n) {
  for (const r in t)
    r !== '__proto__' &&
      r !== 'constructor' &&
      (r in e
        ? typeof e[r] == 'string' || e[r] instanceof String || typeof t[r] == 'string' || t[r] instanceof String
          ? n && (e[r] = t[r])
          : bg(e[r], t[r], n)
        : (e[r] = t[r]));
  return e;
}
function On(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var qS = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
function KS(e) {
  return typeof e == 'string' ? e.replace(/[&<>"'\/]/g, (t) => qS[t]) : e;
}
class QS {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const XS = [' ', ',', '?', '!', ';'],
  GS = new QS(20);
function JS(e, t, n) {
  (t = t || ''), (n = n || '');
  const r = XS.filter((o) => t.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (r.length === 0) return !0;
  const i = GS.getRegExp(`(${r.map((o) => (o === '?' ? '\\?' : o)).join('|')})`);
  let a = !i.test(e);
  if (!a) {
    const o = e.indexOf(n);
    o > 0 && !i.test(e.substring(0, o)) && (a = !0);
  }
  return a;
}
function sl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let a = 0; a < r.length; ) {
    if (!i || typeof i != 'object') return;
    let o,
      s = '';
    for (let l = a; l < r.length; ++l)
      if ((l !== a && (s += n), (s += r[l]), (o = i[s]), o !== void 0)) {
        if (['string', 'number', 'boolean'].indexOf(typeof o) > -1 && l < r.length - 1) continue;
        a += l - a + 1;
        break;
      }
    i = o;
  }
  return i;
}
function $a(e) {
  return e && e.indexOf('_') > 0 ? e.replace('_', '-') : e;
}
class Qd extends mo {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      o = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    t.indexOf('.') > -1
      ? (s = t.split('.'))
      : ((s = [t, n]),
        r && (Array.isArray(r) ? s.push(...r) : typeof r == 'string' && a ? s.push(...r.split(a)) : s.push(r)));
    const l = Fa(this.data, s);
    return (
      !l && !n && !r && t.indexOf('.') > -1 && ((t = s[0]), (n = s[1]), (r = s.slice(2).join('.'))),
      l || !o || typeof r != 'string' ? l : sl(this.data && this.data[t] && this.data[t][n], r, a)
    );
  }
  addResource(t, n, r, i) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const o = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let s = [t, n];
    r && (s = s.concat(o ? r.split(o) : r)),
      t.indexOf('.') > -1 && ((s = t.split('.')), (i = n), (n = s[1])),
      this.addNamespaces(n),
      Kd(this.data, s, i),
      a.silent || this.emit('added', t, n, r, i);
  }
  addResources(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const a in r)
      (typeof r[a] == 'string' || Object.prototype.toString.apply(r[a]) === '[object Array]') &&
        this.addResource(t, n, a, r[a], { silent: !0 });
    i.silent || this.emit('added', t, n, r);
  }
  addResourceBundle(t, n, r, i, a) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1, skipCopy: !1 },
      s = [t, n];
    t.indexOf('.') > -1 && ((s = t.split('.')), (i = r), (r = n), (n = s[1])), this.addNamespaces(n);
    let l = Fa(this.data, s) || {};
    o.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? bg(l, r, a) : (l = { ...l, ...r }),
      Kd(this.data, s, l),
      o.silent || this.emit('added', t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit('removed', t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1' ? { ...this.getResource(t, n) } : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find((i) => n[i] && Object.keys(n[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Cg = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((a) => {
        this.processors[a] && (t = this.processors[a].process(t, n, r, i));
      }),
      t
    );
  },
};
const Xd = {};
class Va extends mo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      WS(
        ['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = lt.create('translator'));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ':');
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let a = n.ns || this.options.defaultNS || [];
    const o = r && t.indexOf(r) > -1,
      s =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !JS(t, r, i);
    if (o && !s) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: t, namespaces: a };
      const u = t.split(r);
      (r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) && (a = u.shift()), (t = u.join(i));
    }
    return typeof a == 'string' && (a = [a]), { key: t, namespaces: a };
  }
  translate(t, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return '';
    Array.isArray(t) || (t = [String(t)]);
    const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails,
      a = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: o, namespaces: s } = this.extractFromKey(t[t.length - 1], n),
      l = s[s.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === 'cimode') {
      if (c) {
        const S = n.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${l}${S}${o}`,
              usedKey: o,
              exactUsedKey: o,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${l}${S}${o}`;
      }
      return i
        ? { res: o, usedKey: o, exactUsedKey: o, usedLng: u, usedNS: l, usedParams: this.getUsedParamsDetails(n) }
        : o;
    }
    const f = this.resolve(t, n);
    let d = f && f.res;
    const g = (f && f.usedKey) || o,
      w = (f && f.exactUsedKey) || o,
      v = Object.prototype.toString.apply(d),
      x = ['[object Number]', '[object Function]', '[object RegExp]'],
      h = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      m = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      m &&
      d &&
      typeof d != 'string' &&
      typeof d != 'boolean' &&
      typeof d != 'number' &&
      x.indexOf(v) < 0 &&
      !(typeof h == 'string' && v === '[object Array]')
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const S = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(g, d, { ...n, ns: s })
          : `key '${o} (${this.language})' returned an object instead of string.`;
        return i ? ((f.res = S), (f.usedParams = this.getUsedParamsDetails(n)), f) : S;
      }
      if (a) {
        const S = v === '[object Array]',
          y = S ? [] : {},
          k = S ? w : g;
        for (const b in d)
          if (Object.prototype.hasOwnProperty.call(d, b)) {
            const _ = `${k}${a}${b}`;
            (y[b] = this.translate(_, { ...n, joinArrays: !1, ns: s })), y[b] === _ && (y[b] = d[b]);
          }
        d = y;
      }
    } else if (m && typeof h == 'string' && v === '[object Array]')
      (d = d.join(h)), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let S = !1,
        y = !1;
      const k = n.count !== void 0 && typeof n.count != 'string',
        b = Va.hasDefaultValue(n),
        _ = k ? this.pluralResolver.getSuffix(u, n.count, n) : '',
        M = n.ordinal && k ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 }) : '',
        I = k && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        re =
          (I && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${_}`] ||
          n[`defaultValue${M}`] ||
          n.defaultValue;
      !this.isValidLookup(d) && b && ((S = !0), (d = re)), this.isValidLookup(d) || ((y = !0), (d = o));
      const Je = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && y ? void 0 : d,
        Ve = b && re !== d && this.options.updateMissing;
      if (y || S || Ve) {
        if ((this.logger.log(Ve ? 'updateKey' : 'missingKey', u, l, o, Ve ? re : d), a)) {
          const E = this.resolve(o, { ...n, keySeparator: !1 });
          E &&
            E.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let Ze = [];
        const Ue = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && Ue && Ue[0])
          for (let E = 0; E < Ue.length; E++) Ze.push(Ue[E]);
        else
          this.options.saveMissingTo === 'all'
            ? (Ze = this.languageUtils.toResolveHierarchy(n.lng || this.language))
            : Ze.push(n.lng || this.language);
        const dt = (E, T, R) => {
          const W = b && R !== d ? R : Je;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(E, l, T, W, Ve, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(E, l, T, W, Ve, n),
            this.emit('missingKey', E, l, T, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && k
            ? Ze.forEach((E) => {
                const T = this.pluralResolver.getSuffixes(E, n);
                I &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  T.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  T.push(`${this.options.pluralSeparator}zero`),
                  T.forEach((R) => {
                    dt([E], o + R, n[`defaultValue${R}`] || re);
                  });
              })
            : dt(Ze, o, re));
      }
      (d = this.extendTranslation(d, t, n, f, r)),
        y && d === o && this.options.appendNamespaceToMissingKey && (d = `${l}:${o}`),
        (y || S) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o,
                S ? d : void 0
              ))
            : (d = this.options.parseMissingKeyHandler(d)));
    }
    return i ? ((f.res = d), (f.usedParams = this.getUsedParamsDetails(n)), f) : d;
  }
  extendTranslation(t, n, r, i, a) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({ ...r, interpolation: { ...this.options.interpolation, ...r.interpolation } });
      const u =
        typeof t == 'string' &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = t.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let f = r.replace && typeof r.replace != 'string' ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables && (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (t = this.interpolator.interpolate(t, f, r.lng || this.language, r)),
        u)
      ) {
        const d = t.match(this.interpolator.nestingRegexp),
          g = d && d.length;
        c < g && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== 'v1' && i && i.res && (r.lng = i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (var d = arguments.length, g = new Array(d), w = 0; w < d; w++) g[w] = arguments[w];
              return a && a[0] === g[0] && !r.context
                ? (o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`), null)
                : o.translate(...g, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess,
      l = typeof s == 'string' ? [s] : s;
    return (
      t != null &&
        l &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (t = Cg.handle(
          l,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...i, usedParams: this.getUsedParamsDetails(r) }, ...r }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      a,
      o,
      s;
    return (
      typeof t == 'string' && (t = [t]),
      t.forEach((l) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(l, n),
          c = u.key;
        i = c;
        let f = u.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const d = n.count !== void 0 && typeof n.count != 'string',
          g = d && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
          w =
            n.context !== void 0 && (typeof n.context == 'string' || typeof n.context == 'number') && n.context !== '',
          v = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
        f.forEach((x) => {
          this.isValidLookup(r) ||
            ((s = x),
            !Xd[`${v[0]}-${x}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((Xd[`${v[0]}-${x}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${v.join(', ')}" won't get resolved as namespace "${s}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            v.forEach((h) => {
              if (this.isValidLookup(r)) return;
              o = h;
              const m = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(m, c, h, x, n);
              else {
                let S;
                d && (S = this.pluralResolver.getSuffix(h, n.count, n));
                const y = `${this.options.pluralSeparator}zero`,
                  k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (m.push(c + S),
                    n.ordinal && S.indexOf(k) === 0 && m.push(c + S.replace(k, this.options.pluralSeparator)),
                    g && m.push(c + y)),
                  w)
                ) {
                  const b = `${c}${this.options.contextSeparator}${n.context}`;
                  m.push(b),
                    d &&
                      (m.push(b + S),
                      n.ordinal && S.indexOf(k) === 0 && m.push(b + S.replace(k, this.options.pluralSeparator)),
                      g && m.push(b + y));
                }
              }
              let p;
              for (; (p = m.pop()); ) this.isValidLookup(r) || ((a = p), (r = this.getResource(h, x, p, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: a, usedLng: o, usedNS: s }
    );
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === '');
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
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
      r = t.replace && typeof t.replace != 'string';
    let i = r ? t.replace : t;
    if (
      (r && typeof t.count < 'u' && (i.count = t.count),
      this.options.interpolation.defaultVariables && (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i };
      for (const a of n) delete i[a];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue';
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0) return !0;
    return !1;
  }
}
function Ko(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Gd {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = lt.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = $a(t)), !t || t.indexOf('-') < 0)) return null;
    const n = t.split('-');
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = $a(t)), !t || t.indexOf('-') < 0)) return t;
    const n = t.split('-');
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == 'string' && t.indexOf('-') > -1) {
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let r = t.split('-');
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ko(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== 'sgn' && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ko(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Ko(r[2].toLowerCase()))),
        r.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((a) => {
            if (a === i) return a;
            if (
              !(a.indexOf('-') < 0 && i.indexOf('-') < 0) &&
              ((a.indexOf('-') > 0 && i.indexOf('-') < 0 && a.substring(0, a.indexOf('-')) === i) ||
                (a.indexOf(i) === 0 && i.length > 1))
            )
              return a;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == 'function' && (t = t(n)),
      typeof t == 'string' && (t = [t]),
      Object.prototype.toString.apply(t) === '[object Array]')
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      i = [],
      a = (o) => {
        o &&
          (this.isSupportedCode(o)
            ? i.push(o)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
      };
    return (
      typeof t == 'string' && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && a(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            a(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' && a(this.getLanguagePartFromCode(t)))
        : typeof t == 'string' && a(this.formatLanguageCode(t)),
      r.forEach((o) => {
        i.indexOf(o) < 0 && a(this.formatLanguageCode(o));
      }),
      i
    );
  }
}
let ZS = [
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
  ex = {
    1: function (e) {
      return +(e > 1);
    },
    2: function (e) {
      return +(e != 1);
    },
    3: function (e) {
      return 0;
    },
    4: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    },
    5: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
    },
    6: function (e) {
      return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
    },
    7: function (e) {
      return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    },
    8: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
    },
    9: function (e) {
      return +(e >= 2);
    },
    10: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
    },
    11: function (e) {
      return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
    },
    12: function (e) {
      return +(e % 10 != 1 || e % 100 == 11);
    },
    13: function (e) {
      return +(e !== 0);
    },
    14: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
    },
    15: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    },
    16: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
    },
    17: function (e) {
      return e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1;
    },
    18: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : 2;
    },
    19: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 1 && e % 100 < 11) ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
    },
    20: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2;
    },
    21: function (e) {
      return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
    },
    22: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
    },
  };
const tx = ['v1', 'v2', 'v3'],
  nx = ['v4'],
  Jd = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function rx() {
  const e = {};
  return (
    ZS.forEach((t) => {
      t.lngs.forEach((n) => {
        e[n] = { numbers: t.nr, plurals: ex[t.fc] };
      });
    }),
    e
  );
}
class ix {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = lt.create('pluralResolver')),
      (!this.options.compatibilityJSON || nx.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = rx());
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules($a(t === 'dev' ? 'en' : t), { type: n.ordinal ? 'ordinal' : 'cardinal' });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, a) => Jd[i] - Jd[a])
            .map((i) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${i}`)
        : r.numbers.map((i) => this.getSuffix(t, i, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '');
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = 'plural') : i === 1 && (i = ''));
    const a = () => (this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString());
    return this.options.compatibilityJSON === 'v1'
      ? i === 1
        ? ''
        : typeof i == 'number'
        ? `_plural_${i.toString()}`
        : a()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1)
      ? a()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !tx.includes(this.options.compatibilityJSON);
  }
}
function Zd(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    a = YS(e, t, n);
  return !a && i && typeof n == 'string' && ((a = sl(e, n, r)), a === void 0 && (a = sl(t, n, r))), a;
}
class ax {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = lt.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const n = t.interpolation;
    (this.escape = n.escape !== void 0 ? n.escape : KS),
      (this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0),
      (this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
      (this.prefix = n.prefix ? On(n.prefix) : n.prefixEscaped || '{{'),
      (this.suffix = n.suffix ? On(n.suffix) : n.suffixEscaped || '}}'),
      (this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ','),
      (this.unescapePrefix = n.unescapeSuffix ? '' : n.unescapePrefix || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : n.unescapeSuffix || ''),
      (this.nestingPrefix = n.nestingPrefix ? On(n.nestingPrefix) : n.nestingPrefixEscaped || On('$t(')),
      (this.nestingSuffix = n.nestingSuffix ? On(n.nestingSuffix) : n.nestingSuffixEscaped || On(')')),
      (this.nestingOptionsSeparator = n.nestingOptionsSeparator
        ? n.nestingOptionsSeparator
        : n.nestingOptionsSeparator || ','),
      (this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3),
      (this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => (n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, 'g'));
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`));
  }
  interpolate(t, n, r, i) {
    let a, o, s;
    const l = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
    function u(w) {
      return w.replace(/\$/g, '$$$$');
    }
    const c = (w) => {
      if (w.indexOf(this.formatSeparator) < 0) {
        const m = Zd(n, l, w, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(m, void 0, r, { ...i, ...n, interpolationkey: w }) : m;
      }
      const v = w.split(this.formatSeparator),
        x = v.shift().trim(),
        h = v.join(this.formatSeparator).trim();
      return this.format(Zd(n, l, x, this.options.keySeparator, this.options.ignoreJSONStructure), h, r, {
        ...i,
        ...n,
        interpolationkey: x,
      });
    };
    this.resetRegExp();
    const f = (i && i.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      d =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (w) => u(w) },
        { regex: this.regexp, safeValue: (w) => (this.escapeValue ? u(this.escape(w)) : u(w)) },
      ].forEach((w) => {
        for (s = 0; (a = w.regex.exec(t)); ) {
          const v = a[1].trim();
          if (((o = c(v)), o === void 0))
            if (typeof f == 'function') {
              const h = f(t, a, i);
              o = typeof h == 'string' ? h : '';
            } else if (i && Object.prototype.hasOwnProperty.call(i, v)) o = '';
            else if (d) {
              o = a[0];
              continue;
            } else this.logger.warn(`missed to pass in variable ${v} for interpolating ${t}`), (o = '');
          else typeof o != 'string' && !this.useRawValueToEscape && (o = qd(o));
          const x = w.safeValue(o);
          if (
            ((t = t.replace(a[0], x)),
            d ? ((w.regex.lastIndex += o.length), (w.regex.lastIndex -= a[0].length)) : (w.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      a,
      o;
    function s(l, u) {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const f = l.split(new RegExp(`${c}[ ]*{`));
      let d = `{${f[1]}`;
      (l = f[0]), (d = this.interpolate(d, o));
      const g = d.match(/'/g),
        w = d.match(/"/g);
      ((g && g.length % 2 === 0 && !w) || w.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        (o = JSON.parse(d)), u && (o = { ...u, ...o });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, v), `${l}${c}${d}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    }
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let l = [];
      (o = { ...r }),
        (o = o.replace && typeof o.replace != 'string' ? o.replace : o),
        (o.applyPostProcessor = !1),
        delete o.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((f) => f.trim());
        (i[1] = c.shift()), (l = c), (u = !0);
      }
      if (((a = n(s.call(this, i[1].trim(), o), o)), a && i[0] === t && typeof a != 'string')) return a;
      typeof a != 'string' && (a = qd(a)),
        a || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), (a = '')),
        u && (a = l.reduce((c, f) => this.format(c, f, r.lng, { ...r, interpolationkey: i[1].trim() }), a.trim())),
        (t = t.replace(i[0], a)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
function ox(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf('(') > -1) {
    const r = e.split('(');
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === 'currency' && i.indexOf(':') < 0
      ? n.currency || (n.currency = i.trim())
      : t === 'relativetime' && i.indexOf(':') < 0
      ? n.range || (n.range = i.trim())
      : i.split(';').forEach((o) => {
          if (!o) return;
          const [s, ...l] = o.split(':'),
            u = l
              .join(':')
              .trim()
              .replace(/^'+|'+$/g, '');
          n[s.trim()] || (n[s.trim()] = u),
            u === 'false' && (n[s.trim()] = !1),
            u === 'true' && (n[s.trim()] = !0),
            isNaN(u) || (n[s.trim()] = parseInt(u, 10));
        });
  }
  return { formatName: t, formatOptions: n };
}
function Ln(e) {
  const t = {};
  return function (r, i, a) {
    const o = i + JSON.stringify(a);
    let s = t[o];
    return s || ((s = e($a(i), a)), (t[o] = s)), s(r);
  };
}
class sx {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = lt.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Ln((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (a) => i.format(a);
        }),
        currency: Ln((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: 'currency' });
          return (a) => i.format(a);
        }),
        datetime: Ln((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (a) => i.format(a);
        }),
        relativetime: Ln((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (a) => i.format(a, r.range || 'day');
        }),
        list: Ln((n, r) => {
          const i = new Intl.ListFormat(n, { ...r });
          return (a) => i.format(a);
        }),
      }),
      this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ',';
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Ln(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((s, l) => {
      const { formatName: u, formatOptions: c } = ox(l);
      if (this.formats[u]) {
        let f = s;
        try {
          const d = (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            g = d.locale || d.lng || i.locale || i.lng || r;
          f = this.formats[u](s, g, { ...c, ...i, ...d });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
function lx(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class ux extends mo {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = lt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const a = {},
      o = {},
      s = {},
      l = {};
    return (
      t.forEach((u) => {
        let c = !0;
        n.forEach((f) => {
          const d = `${u}|${f}`;
          !r.reload && this.store.hasResourceBundle(u, f)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? o[d] === void 0 && (o[d] = !0)
                : ((this.state[d] = 1),
                  (c = !1),
                  o[d] === void 0 && (o[d] = !0),
                  a[d] === void 0 && (a[d] = !0),
                  l[f] === void 0 && (l[f] = !0)));
        }),
          c || (s[u] = !0);
      }),
      (Object.keys(a).length || Object.keys(o).length) &&
        this.queue.push({ pending: o, pendingCount: Object.keys(o).length, loaded: {}, errors: [], callback: i }),
      {
        toLoad: Object.keys(a),
        pending: Object.keys(o),
        toLoadLanguages: Object.keys(s),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(t, n, r) {
    const i = t.split('|'),
      a = i[0],
      o = i[1];
    n && this.emit('failedLoading', a, o, n),
      r && this.store.addResourceBundle(a, o, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2);
    const s = {};
    this.queue.forEach((l) => {
      HS(l.loaded, [a], o),
        lx(l, t),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            s[u] || (s[u] = {});
            const c = l.loaded[u];
            c.length &&
              c.forEach((f) => {
                s[u][f] === void 0 && (s[u][f] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit('loaded', s),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      o = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: t, ns: n, fcName: r, tried: i, wait: a, callback: o });
      return;
    }
    this.readingCalls++;
    const s = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (u && c && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, a * 2, o);
          }, a);
          return;
        }
        o(u, c);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == 'function' ? u.then((c) => s(null, c)).catch(s) : s(null, u);
      } catch (u) {
        s(u);
      }
      return;
    }
    return l(t, n, s);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn('No backend was added via i18next.use. Will not load resources.'), i && i();
    typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == 'string' && (n = [n]);
    const a = this.queueLoad(t, n, r, i);
    if (!a.toLoad.length) return a.pending.length || i(), null;
    a.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const r = t.split('|'),
      i = r[0],
      a = r[1];
    this.read(i, a, 'read', void 0, void 0, (o, s) => {
      o && this.logger.warn(`${n}loading namespace ${a} for language ${i} failed`, o),
        !o && s && this.logger.log(`${n}loaded namespace ${a} for language ${i}`, s),
        this.loaded(t, o, s);
    });
  }
  saveMissing(t, n, r, i, a) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const l = { ...o, isUpdate: a },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? (c = u(t, n, r, i, l)) : (c = u(t, n, r, i)),
              c && typeof c.then == 'function' ? c.then((f) => s(null, f)).catch(s) : s(null, c);
          } catch (c) {
            s(c);
          }
        else u(t, n, r, i, s, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function em() {
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
    overloadTranslationOptionHandler: function (t) {
      let n = {};
      if (
        (typeof t[1] == 'object' && (n = t[1]),
        typeof t[1] == 'string' && (n.defaultValue = t[1]),
        typeof t[2] == 'string' && (n.tDescription = t[2]),
        typeof t[2] == 'object' || typeof t[3] == 'object')
      ) {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
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
function tm(e) {
  return (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs && e.supportedLngs.indexOf('cimode') < 0 && (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  );
}
function qi() {}
function cx(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == 'function' && (e[n] = e[n].bind(e));
  });
}
class si extends mo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = tm(t)),
      (this.services = {}),
      (this.logger = lt),
      (this.modules = { external: [] }),
      cx(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == 'string' ? (n.defaultNS = n.ns) : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]));
    const i = em();
    (this.options = { ...i, ...this.options, ...tm(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = { ...i.interpolation, ...this.options.interpolation }),
      n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function a(c) {
      return c ? (typeof c == 'function' ? new c() : c) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? lt.init(a(this.modules.logger), this.options) : lt.init(null, this.options);
      let c;
      this.modules.formatter ? (c = this.modules.formatter) : typeof Intl < 'u' && (c = sx);
      const f = new Gd(this.options);
      this.store = new Qd(this.options.resources, this.options);
      const d = this.services;
      (d.logger = lt),
        (d.resourceStore = this.store),
        (d.languageUtils = f),
        (d.pluralResolver = new ix(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) &&
          ((d.formatter = a(c)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(d.formatter))),
        (d.interpolator = new ax(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new ux(a(this.modules.backend), d.resourceStore, d, this.options)),
        d.backendConnector.on('*', function (g) {
          for (var w = arguments.length, v = new Array(w > 1 ? w - 1 : 0), x = 1; x < w; x++) v[x - 1] = arguments[x];
          t.emit(g, ...v);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = a(this.modules.languageDetector)),
          d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = a(this.modules.i18nFormat)), d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Va(this.services, this.options)),
        this.translator.on('*', function (g) {
          for (var w = arguments.length, v = new Array(w > 1 ? w - 1 : 0), x = 1; x < w; x++) v[x - 1] = arguments[x];
          t.emit(g, ...v);
        }),
        this.modules.external.forEach((g) => {
          g.init && g.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = qi),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const l = Sr(),
      u = () => {
        const c = (f, d) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn('init: i18next is already initialized. You should call init just once!'),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            l.resolve(d),
            r(f, d);
        };
        if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized)
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qi;
    const i = typeof t == 'string' ? t : this.language;
    if ((typeof t == 'function' && (r = t), !this.options.resources || this.options.partialBundledLanguages)) {
      if (i && i.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return r();
      const a = [],
        o = (s) => {
          if (!s || s === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(s).forEach((u) => {
            u !== 'cimode' && a.indexOf(u) < 0 && a.push(u);
          });
        };
      i ? o(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)),
        this.options.preload && this.options.preload.forEach((s) => o(s)),
        this.services.backendConnector.load(a, this.options.ns, (s) => {
          !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(s);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const i = Sr();
    return (
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = qi),
      this.services.backendConnector.reload(t, n, (a) => {
        i.resolve(), r(a);
      }),
      i
    );
  }
  use(t) {
    if (!t)
      throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!t.type)
      throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) && (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && Cg.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(['cimode', 'dev'].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = Sr();
    this.emit('languageChanging', t);
    const a = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      o = (l, u) => {
        u
          ? (a(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', u),
            this.logger.log('languageChanged', u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(l, function () {
              return r.t(...arguments);
            });
      },
      s = (l) => {
        !t && !l && this.services.languageDetector && (l = []);
        const u = typeof l == 'string' ? l : this.services.languageUtils.getBestMatchFromCodes(l);
        u &&
          (this.language || a(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            o(c, u);
          });
      };
    return (
      !t && this.services.languageDetector && !this.services.languageDetector.async
        ? s(this.services.languageDetector.detect())
        : !t && this.services.languageDetector && this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(s)
          : this.services.languageDetector.detect(s)
        : s(t),
      i
    );
  }
  getFixedT(t, n, r) {
    var i = this;
    const a = function (o, s) {
      let l;
      if (typeof s != 'object') {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2; f < u; f++) c[f - 2] = arguments[f];
        l = i.options.overloadTranslationOptionHandler([o, s].concat(c));
      } else l = { ...s };
      (l.lng = l.lng || a.lng),
        (l.lngs = l.lngs || a.lngs),
        (l.ns = l.ns || a.ns),
        (l.keyPrefix = l.keyPrefix || r || a.keyPrefix);
      const d = i.options.keySeparator || '.';
      let g;
      return (
        l.keyPrefix && Array.isArray(o)
          ? (g = o.map((w) => `${l.keyPrefix}${d}${w}`))
          : (g = l.keyPrefix ? `${l.keyPrefix}${d}${o}` : o),
        i.t(g, l)
      );
    };
    return typeof t == 'string' ? (a.lng = t) : (a.lngs = t), (a.ns = n), (a.keyPrefix = r), a;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      a = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === 'cimode') return !0;
    const o = (s, l) => {
      const u = this.services.backendConnector.state[`${s}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const s = n.precheck(this, o);
      if (s !== void 0) return s;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (o(r, t) && (!i || o(a, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = Sr();
    return this.options.ns
      ? (typeof t == 'string' && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Sr();
    typeof t == 'string' && (t = [t]);
    const i = this.options.preload || [],
      a = t.filter((o) => i.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return a.length
      ? ((this.options.preload = i.concat(a)),
        this.loadResources((o) => {
          r.resolve(), n && n(o);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
      !t)
    )
      return 'rtl';
    const n = [
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
      r = (this.services && this.services.languageUtils) || new Gd(em());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new si(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qi;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      a = new si(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) && (a.logger = a.logger.clone(t)),
      ['store', 'services', 'language'].forEach((s) => {
        a[s] = this[s];
      }),
      (a.services = { ...this.services }),
      (a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }),
      r && ((a.store = new Qd(this.store.data, i)), (a.services.resourceStore = a.store)),
      (a.translator = new Va(a.services, i)),
      a.translator.on('*', function (s) {
        for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++) u[c - 1] = arguments[c];
        a.emit(s, ...u);
      }),
      a.init(i, n),
      (a.translator.options = i),
      (a.translator.backendConnector.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }),
      a
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
const ce = si.createInstance();
ce.createInstance = si.createInstance;
ce.createInstance;
ce.dir;
ce.init;
ce.loadResources;
ce.reloadResources;
ce.use;
ce.changeLanguage;
ce.getFixedT;
ce.t;
ce.exists;
ce.setDefaultNamespace;
ce.hasLoadedNamespace;
ce.loadNamespaces;
ce.loadLanguages;
const fx = 'Indicates a required ﬁeld',
  dx = 'Français',
  mx = 'Your Vehicle Renewal Reminder',
  px = 'Manage how and when you get your vehicle registration renewal reminders',
  hx = {
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
  gx = {
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
  vx = {
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
  yx = {
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
  wx = {
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
  Sx = {
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
  xx = { unavailableVehicle: 'Vehicle details currently unavailable.' },
  kx = { copyright: '© Government of New Brunswick', privacy: '<1>Privacy</1>', disclaimer: '<1>Disclaimer</1>' },
  bx = {
    disclaimer: fx,
    SwitchLanguage: dx,
    pageTitle: mx,
    pageDescription: px,
    mainNavigation: hx,
    notFound: gx,
    notifications: vx,
    accountSettings: yx,
    authentication: wx,
    errorsMsg: Sx,
    warningMsg: xx,
    footer: kx,
  },
  Cx = 'Indique un champ obligatoire',
  Px = 'English',
  Ex = "Rappel pour le renouvellement de l'immatriculation de votre véhicule",
  _x =
    "Gérez le moment et la manière dont vous recevez les rappels de renouvellement d'immatriculation de votre véhicule.",
  Nx = {
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
  Ox = {
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
  Lx = {
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
  Tx = {
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
  Rx = {
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
  Ix = {
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
  Mx = { unavailableVehicle: 'Les détails du véhicule ne sont pas disponibles pour le moment.' },
  Ax = {
    copyright: '© Gouvernement du Nouveau-Brunswick',
    privacy: '<1>Confidentialité</1>',
    disclaimer: '<1>Décharge</1>',
  },
  zx = {
    disclaimer: Cx,
    SwitchLanguage: Px,
    pageTitle: Ex,
    pageDescription: _x,
    mainNavigation: Nx,
    notFound: Ox,
    notifications: Lx,
    accountSettings: Tx,
    authentication: Rx,
    errorsMsg: Ix,
    warningMsg: Mx,
    footer: Ax,
  },
  jx = { en: { translation: bx }, fr: { translation: zx } };
ce.use(CS).init({ resources: jx, fallbackLng: 'en', supportedLngs: ['en', 'fr'], interpolation: { escapeValue: !1 } });
function Ge(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == 'object' && t === '[object Date]')
    ? new e.constructor(+e)
    : typeof e == 'number' || t === '[object Number]' || typeof e == 'string' || t === '[object String]'
    ? new Date(e)
    : new Date(NaN);
}
function kn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Pg = 6048e5,
  Dx = 864e5;
let Fx = {};
function po() {
  return Fx;
}
function li(e, t) {
  var s, l, u, c;
  const n = po(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ??
      0,
    i = Ge(e),
    a = i.getDay(),
    o = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function Ua(e) {
  return li(e, { weekStartsOn: 1 });
}
function Eg(e) {
  const t = Ge(e),
    n = t.getFullYear(),
    r = kn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = Ua(r),
    a = kn(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const o = Ua(a);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function nm(e) {
  const t = Ge(e);
  return t.setHours(0, 0, 0, 0), t;
}
function rm(e) {
  const t = Ge(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function $x(e, t) {
  const n = nm(e),
    r = nm(t),
    i = +n - rm(n),
    a = +r - rm(r);
  return Math.round((i - a) / Dx);
}
function Vx(e) {
  const t = Eg(e),
    n = kn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Ua(n);
}
function Ux(e) {
  return e instanceof Date || (typeof e == 'object' && Object.prototype.toString.call(e) === '[object Date]');
}
function Wx(e) {
  if (!Ux(e) && typeof e != 'number') return !1;
  const t = Ge(e);
  return !isNaN(Number(t));
}
function Bx(e) {
  const t = Ge(e),
    n = kn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Hx = {
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
  Yx = (e, t, n) => {
    let r;
    const i = Hx[e];
    return (
      typeof i == 'string' ? (r = i) : t === 1 ? (r = i.one) : (r = i.other.replace('{{count}}', t.toString())),
      n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
    );
  };
function yt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const qx = { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
  Kx = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  Qx = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Xx = {
    date: yt({ formats: qx, defaultWidth: 'full' }),
    time: yt({ formats: Kx, defaultWidth: 'full' }),
    dateTime: yt({ formats: Qx, defaultWidth: 'full' }),
  },
  Gx = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  _g = (e, t, n, r) => Gx[e];
function at(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : 'standalone';
    let i;
    if (r === 'formatting' && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : o;
      i = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[s] || e.values[o];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
const Jx = { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
  Zx = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  e2 = {
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
  t2 = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  n2 = {
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
  r2 = {
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
  i2 = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + 'st';
        case 2:
          return n + 'nd';
        case 3:
          return n + 'rd';
      }
    return n + 'th';
  },
  Ng = {
    ordinalNumber: i2,
    era: at({ values: Jx, defaultWidth: 'wide' }),
    quarter: at({ values: Zx, defaultWidth: 'wide', argumentCallback: (e) => e - 1 }),
    month: at({ values: e2, defaultWidth: 'wide' }),
    day: at({ values: t2, defaultWidth: 'wide' }),
    dayPeriod: at({ values: n2, defaultWidth: 'wide', formattingValues: r2, defaultFormattingWidth: 'wide' }),
  };
function ot(e) {
  return (t, n = {}) => {
    const r = n.width,
      i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      a = t.match(i);
    if (!a) return null;
    const o = a[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s) ? o2(s, (f) => f.test(o)) : a2(s, (f) => f.test(o));
    let u;
    (u = e.valueCallback ? e.valueCallback(l) : l), (u = n.valueCallback ? n.valueCallback(u) : u);
    const c = t.slice(o.length);
    return { value: u, rest: c };
  };
}
function a2(e, t) {
  for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function o2(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Og(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0],
      a = t.match(e.parsePattern);
    if (!a) return null;
    let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const s = t.slice(i.length);
    return { value: o, rest: s };
  };
}
const s2 = /^(\d+)(th|st|nd|rd)?/i,
  l2 = /\d+/i,
  u2 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  c2 = { any: [/^b/i, /^(a|c)/i] },
  f2 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  d2 = { any: [/1/i, /2/i, /3/i, /4/i] },
  m2 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  p2 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  h2 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  g2 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  v2 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  y2 = {
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
  Lg = {
    ordinalNumber: Og({ matchPattern: s2, parsePattern: l2, valueCallback: (e) => parseInt(e, 10) }),
    era: ot({ matchPatterns: u2, defaultMatchWidth: 'wide', parsePatterns: c2, defaultParseWidth: 'any' }),
    quarter: ot({
      matchPatterns: f2,
      defaultMatchWidth: 'wide',
      parsePatterns: d2,
      defaultParseWidth: 'any',
      valueCallback: (e) => e + 1,
    }),
    month: ot({ matchPatterns: m2, defaultMatchWidth: 'wide', parsePatterns: p2, defaultParseWidth: 'any' }),
    day: ot({ matchPatterns: h2, defaultMatchWidth: 'wide', parsePatterns: g2, defaultParseWidth: 'any' }),
    dayPeriod: ot({ matchPatterns: v2, defaultMatchWidth: 'any', parsePatterns: y2, defaultParseWidth: 'any' }),
  },
  w2 = {
    code: 'en-US',
    formatDistance: Yx,
    formatLong: Xx,
    formatRelative: _g,
    localize: Ng,
    match: Lg,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function S2(e) {
  const t = Ge(e);
  return $x(t, Bx(t)) + 1;
}
function x2(e) {
  const t = Ge(e),
    n = +Ua(t) - +Vx(t);
  return Math.round(n / Pg) + 1;
}
function Tg(e, t) {
  var c, f, d, g;
  const n = Ge(e),
    r = n.getFullYear(),
    i = po(),
    a =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((f = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null
        ? void 0
        : f.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((g = (d = i.locale) == null ? void 0 : d.options) == null ? void 0 : g.firstWeekContainsDate) ??
      1,
    o = kn(e, 0);
  o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
  const s = li(o, t),
    l = kn(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const u = li(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function k2(e, t) {
  var s, l, u, c;
  const n = po(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null
        ? void 0
        : l.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ??
      1,
    i = Tg(e, t),
    a = kn(e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), li(a, t);
}
function b2(e, t) {
  const n = Ge(e),
    r = +li(n, t) - +k2(n, t);
  return Math.round(r / Pg) + 1;
}
function V(e, t) {
  const n = e < 0 ? '-' : '',
    r = Math.abs(e).toString().padStart(t, '0');
  return n + r;
}
const Ot = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return V(t === 'yy' ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === 'M' ? String(n + 1) : V(n + 1, 2);
    },
    d(e, t) {
      return V(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return n.toUpperCase();
        case 'aaa':
          return n;
        case 'aaaaa':
          return n[0];
        case 'aaaa':
        default:
          return n === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h(e, t) {
      return V(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return V(e.getHours(), t.length);
    },
    m(e, t) {
      return V(e.getMinutes(), t.length);
    },
    s(e, t) {
      return V(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        i = Math.trunc(r * Math.pow(10, n - 3));
      return V(i, t.length);
    },
  },
  Tn = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  im = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case 'G':
        case 'GG':
        case 'GGG':
          return n.era(r, { width: 'abbreviated' });
        case 'GGGGG':
          return n.era(r, { width: 'narrow' });
        case 'GGGG':
        default:
          return n.era(r, { width: 'wide' });
      }
    },
    y: function (e, t, n) {
      if (t === 'yo') {
        const r = e.getFullYear(),
          i = r > 0 ? r : 1 - r;
        return n.ordinalNumber(i, { unit: 'year' });
      }
      return Ot.y(e, t);
    },
    Y: function (e, t, n, r) {
      const i = Tg(e, r),
        a = i > 0 ? i : 1 - i;
      if (t === 'YY') {
        const o = a % 100;
        return V(o, 2);
      }
      return t === 'Yo' ? n.ordinalNumber(a, { unit: 'year' }) : V(a, t.length);
    },
    R: function (e, t) {
      const n = Eg(e);
      return V(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return V(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(r);
        case 'QQ':
          return V(r, 2);
        case 'Qo':
          return n.ordinalNumber(r, { unit: 'quarter' });
        case 'QQQ':
          return n.quarter(r, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return n.quarter(r, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return n.quarter(r, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case 'q':
          return String(r);
        case 'qq':
          return V(r, 2);
        case 'qo':
          return n.ordinalNumber(r, { unit: 'quarter' });
        case 'qqq':
          return n.quarter(r, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return n.quarter(r, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return n.quarter(r, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case 'M':
        case 'MM':
          return Ot.M(e, t);
        case 'Mo':
          return n.ordinalNumber(r + 1, { unit: 'month' });
        case 'MMM':
          return n.month(r, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return n.month(r, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return n.month(r, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case 'L':
          return String(r + 1);
        case 'LL':
          return V(r + 1, 2);
        case 'Lo':
          return n.ordinalNumber(r + 1, { unit: 'month' });
        case 'LLL':
          return n.month(r, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return n.month(r, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return n.month(r, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (e, t, n, r) {
      const i = b2(e, r);
      return t === 'wo' ? n.ordinalNumber(i, { unit: 'week' }) : V(i, t.length);
    },
    I: function (e, t, n) {
      const r = x2(e);
      return t === 'Io' ? n.ordinalNumber(r, { unit: 'week' }) : V(r, t.length);
    },
    d: function (e, t, n) {
      return t === 'do' ? n.ordinalNumber(e.getDate(), { unit: 'date' }) : Ot.d(e, t);
    },
    D: function (e, t, n) {
      const r = S2(e);
      return t === 'Do' ? n.ordinalNumber(r, { unit: 'dayOfYear' }) : V(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case 'E':
        case 'EE':
        case 'EEE':
          return n.day(r, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return n.day(r, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return n.day(r, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return n.day(r, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (e, t, n, r) {
      const i = e.getDay(),
        a = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'e':
          return String(a);
        case 'ee':
          return V(a, 2);
        case 'eo':
          return n.ordinalNumber(a, { unit: 'day' });
        case 'eee':
          return n.day(i, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return n.day(i, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return n.day(i, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return n.day(i, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (e, t, n, r) {
      const i = e.getDay(),
        a = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'c':
          return String(a);
        case 'cc':
          return V(a, t.length);
        case 'co':
          return n.ordinalNumber(a, { unit: 'day' });
        case 'ccc':
          return n.day(i, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return n.day(i, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return n.day(i, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return n.day(i, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        i = r === 0 ? 7 : r;
      switch (t) {
        case 'i':
          return String(i);
        case 'ii':
          return V(i, t.length);
        case 'io':
          return n.ordinalNumber(i, { unit: 'day' });
        case 'iii':
          return n.day(r, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return n.day(r, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return n.day(r, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return n.day(r, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (e, t, n) {
      const i = e.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return n.dayPeriod(i, { width: 'abbreviated', context: 'formatting' });
        case 'aaa':
          return n.dayPeriod(i, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'aaaaa':
          return n.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return n.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let i;
      switch ((r === 12 ? (i = Tn.noon) : r === 0 ? (i = Tn.midnight) : (i = r / 12 >= 1 ? 'pm' : 'am'), t)) {
        case 'b':
        case 'bb':
          return n.dayPeriod(i, { width: 'abbreviated', context: 'formatting' });
        case 'bbb':
          return n.dayPeriod(i, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'bbbbb':
          return n.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return n.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let i;
      switch (
        (r >= 17 ? (i = Tn.evening) : r >= 12 ? (i = Tn.afternoon) : r >= 4 ? (i = Tn.morning) : (i = Tn.night), t)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return n.dayPeriod(i, { width: 'abbreviated', context: 'formatting' });
        case 'BBBBB':
          return n.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return n.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (e, t, n) {
      if (t === 'ho') {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: 'hour' });
      }
      return Ot.h(e, t);
    },
    H: function (e, t, n) {
      return t === 'Ho' ? n.ordinalNumber(e.getHours(), { unit: 'hour' }) : Ot.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === 'Ko' ? n.ordinalNumber(r, { unit: 'hour' }) : V(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return r === 0 && (r = 24), t === 'ko' ? n.ordinalNumber(r, { unit: 'hour' }) : V(r, t.length);
    },
    m: function (e, t, n) {
      return t === 'mo' ? n.ordinalNumber(e.getMinutes(), { unit: 'minute' }) : Ot.m(e, t);
    },
    s: function (e, t, n) {
      return t === 'so' ? n.ordinalNumber(e.getSeconds(), { unit: 'second' }) : Ot.s(e, t);
    },
    S: function (e, t) {
      return Ot.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return 'Z';
      switch (t) {
        case 'X':
          return om(r);
        case 'XXXX':
        case 'XX':
          return an(r);
        case 'XXXXX':
        case 'XXX':
        default:
          return an(r, ':');
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'x':
          return om(r);
        case 'xxxx':
        case 'xx':
          return an(r);
        case 'xxxxx':
        case 'xxx':
        default:
          return an(r, ':');
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + am(r, ':');
        case 'OOOO':
        default:
          return 'GMT' + an(r, ':');
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + am(r, ':');
        case 'zzzz':
        default:
          return 'GMT' + an(r, ':');
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return V(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return V(r, t.length);
    },
  };
function am(e, t = '') {
  const n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    i = Math.trunc(r / 60),
    a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + V(a, 2);
}
function om(e, t) {
  return e % 60 === 0 ? (e > 0 ? '-' : '+') + V(Math.abs(e) / 60, 2) : an(e, t);
}
function an(e, t = '') {
  const n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    i = V(Math.trunc(r / 60), 2),
    a = V(r % 60, 2);
  return n + i + t + a;
}
const sm = (e, t) => {
    switch (e) {
      case 'P':
        return t.date({ width: 'short' });
      case 'PP':
        return t.date({ width: 'medium' });
      case 'PPP':
        return t.date({ width: 'long' });
      case 'PPPP':
      default:
        return t.date({ width: 'full' });
    }
  },
  Rg = (e, t) => {
    switch (e) {
      case 'p':
        return t.time({ width: 'short' });
      case 'pp':
        return t.time({ width: 'medium' });
      case 'ppp':
        return t.time({ width: 'long' });
      case 'pppp':
      default:
        return t.time({ width: 'full' });
    }
  },
  C2 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      i = n[2];
    if (!i) return sm(e, t);
    let a;
    switch (r) {
      case 'P':
        a = t.dateTime({ width: 'short' });
        break;
      case 'PP':
        a = t.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        a = t.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        a = t.dateTime({ width: 'full' });
        break;
    }
    return a.replace('{{date}}', sm(r, t)).replace('{{time}}', Rg(i, t));
  },
  P2 = { p: Rg, P: C2 },
  E2 = /^D+$/,
  _2 = /^Y+$/,
  N2 = ['D', 'DD', 'YY', 'YYYY'];
function O2(e) {
  return E2.test(e);
}
function L2(e) {
  return _2.test(e);
}
function T2(e, t, n) {
  const r = R2(e, t, n);
  if ((console.warn(r), N2.includes(e))) throw new RangeError(r);
}
function R2(e, t, n) {
  const r = e[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const I2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  M2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  A2 = /^'([^]*?)'?$/,
  z2 = /''/g,
  j2 = /[a-zA-Z]/;
function Ig(e, t, n) {
  var c, f, d, g, w, v, x, h;
  const r = po(),
    i = (n == null ? void 0 : n.locale) ?? r.locale ?? w2,
    a =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((f = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : f.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((g = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : g.firstWeekContainsDate) ??
      1,
    o =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((v = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : v.weekStartsOn) ??
      r.weekStartsOn ??
      ((h = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : h.weekStartsOn) ??
      0,
    s = Ge(e);
  if (!Wx(s)) throw new RangeError('Invalid time value');
  let l = t
    .match(M2)
    .map((m) => {
      const p = m[0];
      if (p === 'p' || p === 'P') {
        const S = P2[p];
        return S(m, i.formatLong);
      }
      return m;
    })
    .join('')
    .match(I2)
    .map((m) => {
      if (m === "''") return { isToken: !1, value: "'" };
      const p = m[0];
      if (p === "'") return { isToken: !1, value: D2(m) };
      if (im[p]) return { isToken: !0, value: m };
      if (p.match(j2)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + p + '`');
      return { isToken: !1, value: m };
    });
  i.localize.preprocessor && (l = i.localize.preprocessor(s, l));
  const u = { firstWeekContainsDate: a, weekStartsOn: o, locale: i };
  return l
    .map((m) => {
      if (!m.isToken) return m.value;
      const p = m.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && L2(p)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && O2(p))) &&
        T2(p, t, String(e));
      const S = im[p[0]];
      return S(s, p, i.localize, u);
    })
    .join('');
}
function D2(e) {
  const t = e.match(A2);
  return t ? t[1].replace(z2, "'") : e;
}
const F2 = {
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
  $2 = (e, t, n) => {
    let r;
    const i = F2[e];
    return (
      typeof i == 'string' ? (r = i) : t === 1 ? (r = i.one) : (r = i.other.replace('{{count}}', t.toString())),
      n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
    );
  },
  V2 = { full: 'EEEE, MMMM do, yyyy', long: 'MMMM do, yyyy', medium: 'MMM d, yyyy', short: 'yyyy-MM-dd' },
  U2 = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  W2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  B2 = {
    date: yt({ formats: V2, defaultWidth: 'full' }),
    time: yt({ formats: U2, defaultWidth: 'full' }),
    dateTime: yt({ formats: W2, defaultWidth: 'full' }),
  },
  H2 = {
    code: 'en-CA',
    formatDistance: $2,
    formatLong: B2,
    formatRelative: _g,
    localize: Ng,
    match: Lg,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  Y2 = {
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
  q2 = (e, t, n) => {
    let r;
    const i = Y2[e];
    return (
      typeof i == 'string' ? (r = i) : t === 1 ? (r = i.one) : (r = i.other.replace('{{count}}', String(t))),
      n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'dans ' + r : 'il y a ' + r) : r
    );
  },
  K2 = {
    lastWeek: "eeee 'dernier à' p",
    yesterday: "'hier à' p",
    today: "'aujourd’hui à' p",
    tomorrow: "'demain à' p'",
    nextWeek: "eeee 'prochain à' p",
    other: 'P',
  },
  Q2 = (e, t, n, r) => K2[e],
  X2 = {
    narrow: ['av. J.-C', 'ap. J.-C'],
    abbreviated: ['av. J.-C', 'ap. J.-C'],
    wide: ['avant Jésus-Christ', 'après Jésus-Christ'],
  },
  G2 = {
    narrow: ['T1', 'T2', 'T3', 'T4'],
    abbreviated: ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'],
    wide: ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre'],
  },
  J2 = {
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
  Z2 = {
    narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    short: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
    abbreviated: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
    wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  },
  ek = {
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
  tk = (e, t) => {
    const n = Number(e),
      r = t == null ? void 0 : t.unit;
    if (n === 0) return '0';
    const i = ['year', 'week', 'hour', 'minute', 'second'];
    let a;
    return n === 1 ? (a = r && i.includes(r) ? 'ère' : 'er') : (a = 'ème'), n + a;
  },
  nk = ['MMM', 'MMMM'],
  rk = {
    preprocessor: (e, t) =>
      e.getDate() === 1 || !t.some((r) => r.isToken && nk.includes(r.value))
        ? t
        : t.map((r) => (r.isToken && r.value === 'do' ? { isToken: !0, value: 'd' } : r)),
    ordinalNumber: tk,
    era: at({ values: X2, defaultWidth: 'wide' }),
    quarter: at({ values: G2, defaultWidth: 'wide', argumentCallback: (e) => e - 1 }),
    month: at({ values: J2, defaultWidth: 'wide' }),
    day: at({ values: Z2, defaultWidth: 'wide' }),
    dayPeriod: at({ values: ek, defaultWidth: 'wide' }),
  },
  ik = /^(\d+)(ième|ère|ème|er|e)?/i,
  ak = /\d+/i,
  ok = {
    narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
    abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
    wide: /^(avant Jésus-Christ|après Jésus-Christ)/i,
  },
  sk = { any: [/^av/i, /^ap/i] },
  lk = { narrow: /^T?[1234]/i, abbreviated: /^[1234](er|ème|e)? trim\.?/i, wide: /^[1234](er|ème|e)? trimestre/i },
  uk = { any: [/1/i, /2/i, /3/i, /4/i] },
  ck = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
    wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
  },
  fk = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  dk = {
    narrow: /^[lmjvsd]/i,
    short: /^(di|lu|ma|me|je|ve|sa)/i,
    abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
    wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i,
  },
  mk = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
    any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i],
  },
  pk = {
    narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
    any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i,
  },
  hk = {
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
  gk = {
    ordinalNumber: Og({ matchPattern: ik, parsePattern: ak, valueCallback: (e) => parseInt(e) }),
    era: ot({ matchPatterns: ok, defaultMatchWidth: 'wide', parsePatterns: sk, defaultParseWidth: 'any' }),
    quarter: ot({
      matchPatterns: lk,
      defaultMatchWidth: 'wide',
      parsePatterns: uk,
      defaultParseWidth: 'any',
      valueCallback: (e) => e + 1,
    }),
    month: ot({ matchPatterns: ck, defaultMatchWidth: 'wide', parsePatterns: fk, defaultParseWidth: 'any' }),
    day: ot({ matchPatterns: dk, defaultMatchWidth: 'wide', parsePatterns: mk, defaultParseWidth: 'any' }),
    dayPeriod: ot({ matchPatterns: pk, defaultMatchWidth: 'any', parsePatterns: hk, defaultParseWidth: 'any' }),
  },
  vk = { full: 'EEEE d MMMM y', long: 'd MMMM y', medium: 'd MMM y', short: 'yy-MM-dd' },
  yk = { full: 'HH:mm:ss zzzz', long: 'HH:mm:ss z', medium: 'HH:mm:ss', short: 'HH:mm' },
  wk = {
    full: "{{date}} 'à' {{time}}",
    long: "{{date}} 'à' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Sk = {
    date: yt({ formats: vk, defaultWidth: 'full' }),
    time: yt({ formats: yk, defaultWidth: 'full' }),
    dateTime: yt({ formats: wk, defaultWidth: 'full' }),
  },
  xk = {
    code: 'fr-CA',
    formatDistance: q2,
    formatLong: Sk,
    formatRelative: Q2,
    localize: rk,
    match: gk,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  Gk = [
    { menu: 'gnb-mega-menu', button: 'btn-mega-menu' },
    { menu: 'gnb-search', button: 'btn-search' },
    { menu: 'gnb-sign-in', button: 'btn-sign-in' },
    { menu: 'gnb-account', button: 'btn-account' },
  ],
  Jk = 'MMMM d, y',
  Zk = 'y-MM-dd HH:mm:ss.SSS',
  lm = 1200,
  um = 33696e3,
  eb = 'EN',
  tb = 'FR',
  nb = {
    EN: 'https://www2.gnb.ca/content/gnb/en/admin/privacy.html',
    FR: 'https://www2.gnb.ca/content/gnb/fr/admin/declaration_de_confidentialite.html',
  },
  rb = {
    EN: 'https://www2.gnb.ca/content/gnb/en/admin/disclaimer.html',
    FR: 'https://www2.gnb.ca/content/gnb/fr/admin/decharge.html',
  },
  ib = 256,
  ab = 50,
  ob = 128,
  kk = '+1',
  sb = (e) =>
    e == null
      ? void 0
      : e
          .split(' ')
          .map((t, n, r) => `${t}${n === r.length - 1 ? '' : '-'}`)
          .join(''),
  lb = (e) => ` ${e.slice(0, 6).padEnd(17, '*')}`,
  ub = (e) => {
    const t = ce.language;
    e && t !== e && ce.changeLanguage(e);
  },
  Mg = (e) => {
    const t = String(e.session),
      n = Number(e.sessionExpiry);
    return !!(t && t !== 'undefined' && (t == null ? void 0 : t.length) > 0 && n && Date.now() < Number(n));
  },
  cb = (e, t, n, r) => `${e ? `${e} ` : ''}${t ? `${t} ` : ''}${n ? `${n} ` : ''}${r}`,
  fb = (e) =>
    e ?? {
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
  db = (e, t, n, r, i) => `${e ? `${e} ` : ''}${t ? `${t} ` : ''}'${i}' ${n ? `${n} ` : ''}${r}`,
  mb = (e, t, n) => ` ${e && Ig(e, t, { locale: n === 'fr-CA' ? xk : H2 })}`,
  pb = (e) => {
    let t;
    if (e) {
      const n = e.slice(2),
        r = n.slice(0, 3),
        i = n.slice(3, 6),
        a = n.slice(6);
      t = `${r}-${i}-${a}`;
    } else t = '';
    return t;
  },
  hb = (e) => {
    const t = e.trim().replace(/[^0-9]/g, '');
    return t.length < 4
      ? t
      : t.length < 7
      ? t.replace(/(\d{3})(\d{1})/, '$1-$2')
      : t.length < 11
      ? t.replace(/(\d{3})(\d{3})(\d{1})/, '$1-$2-$3')
      : t.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  },
  gb = (e) => {
    const t = e.split('-').join('');
    return t ? `${kk}${t}` : '';
  },
  Su = (e) => {
    const [t, n] = C.useState(() => {
      try {
        const i = window.localStorage.getItem(e);
        return i ? JSON.parse(i) : '';
      } catch {
        return '';
      }
    });
    return [
      t,
      (i) => {
        try {
          i ? window.localStorage.setItem(e, JSON.stringify(i)) : window.localStorage.removeItem(e);
        } catch (a) {
          console.log(a);
        }
        n(i);
      },
    ];
  },
  Ag = () => {
    const e = Th(),
      [t, n, r] = wu(['session', 'rememberMe', 'sessionExpiry']),
      [, i] = Su('visited'),
      a = (c, f) => {
        const d = f || t.rememberMe ? um : lm;
        n('session', c, { maxAge: d }),
          n('rememberMe', !!f, { maxAge: d }),
          n('sessionExpiry', Date.now() + 1e3 * d, { maxAge: d });
      },
      o = (c) => {
        const f = t.rememberMe ? um : lm;
        n('session', c, { maxAge: f }),
          n('rememberMe', !!t.rememberMe, { maxAge: f }),
          n('sessionExpiry', Date.now() + 1e3 * f, { maxAge: f });
      },
      s = () => {
        const c = String(t.session),
          f = Number(t.sessionExpiry);
        return c && c !== 'undefined' && (c == null ? void 0 : c.length) > 0 && f && Date.now() < Number(f)
          ? c
          : (u(), '');
      },
      l = () => !!t.rememberMe,
      u = (c = !1, f) => {
        e('/authentication', { state: f ?? null }), c && (r('session'), r('rememberMe'), r('sessionExpiry'), i(''));
      };
    return { logout: u, setSessionCookie: a, refreshSessionCookie: o, getSession: s, getRememberMe: l };
  },
  A = {
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
  bk = (e, t) => {
    var n,
      r,
      i,
      a,
      o,
      s,
      l,
      u,
      c,
      f,
      d,
      g,
      w,
      v,
      x,
      h,
      m,
      p,
      S,
      y,
      k,
      b,
      _,
      M,
      I,
      re,
      ft,
      Je,
      Ve,
      Ze,
      Ue,
      dt,
      E,
      T,
      R,
      W,
      te,
      en,
      et,
      En,
      tt,
      tn,
      xu,
      ku,
      bu,
      Cu,
      Pu,
      Eu,
      _u,
      Nu,
      Ou,
      Lu,
      Tu,
      Ru,
      Iu,
      Mu,
      Au,
      zu,
      ju,
      Du,
      Fu,
      $u,
      Vu,
      Uu,
      Wu,
      Bu,
      Hu,
      Yu,
      qu,
      Ku,
      Qu,
      Xu,
      Gu,
      Ju,
      Zu,
      ec,
      tc,
      nc,
      rc,
      ic,
      ac,
      oc,
      sc,
      lc,
      uc,
      cc,
      fc,
      dc,
      mc,
      pc,
      hc,
      gc,
      vc,
      yc,
      wc,
      Sc,
      xc,
      kc,
      bc,
      Cc,
      Pc,
      Ec,
      _c,
      Nc,
      Oc,
      Lc,
      Tc,
      Rc,
      Ic,
      Mc,
      Ac,
      zc,
      jc,
      Dc,
      Fc,
      $c,
      Vc,
      Uc,
      Wc,
      Bc,
      Hc,
      Yc,
      qc,
      Kc,
      Qc,
      Xc;
    switch (t.type) {
      case A.notification.email_reminder_option_changed:
        return {
          ...e,
          notifications: {
            ...e.notifications,
            hasEmailReminders:
              ((r = (n = t.payload) == null ? void 0 : n.notification) == null ? void 0 : r.hasEmailReminders) || !1,
          },
        };
      case A.notification.text_reminder_option_changed:
        return {
          ...e,
          notifications: {
            ...e.notifications,
            hasSMSReminders:
              ((a = (i = t.payload) == null ? void 0 : i.notification) == null ? void 0 : a.hasSMSReminders) || !1,
          },
        };
      case A.notification.reminder_freq_2_weeks_option_changed:
        return {
          ...e,
          notifications: {
            ...e.notifications,
            hasLeadTime2Weeks:
              ((s = (o = t.payload) == null ? void 0 : o.notification) == null ? void 0 : s.hasLeadTime2Weeks) || !1,
          },
        };
      case A.notification.reminder_freq_4_weeks_option_changed:
        return {
          ...e,
          notifications: {
            ...e.notifications,
            hasLeadTime4Weeks:
              ((u = (l = t.payload) == null ? void 0 : l.notification) == null ? void 0 : u.hasLeadTime4Weeks) || !1,
          },
        };
      case A.notification.reminder_freq_6_weeks_option_changed:
        return {
          ...e,
          notifications: {
            ...e.notifications,
            hasLeadTime6Weeks:
              ((f = (c = t.payload) == null ? void 0 : c.notification) == null ? void 0 : f.hasLeadTime6Weeks) || !1,
          },
        };
      case A.notification.showSaveChangesErrors:
        return {
          ...e,
          notifications: {
            ...e.notifications,
            showSaveChangesErrors:
              ((g = (d = t.payload) == null ? void 0 : d.notification) == null ? void 0 : g.showSaveChangesErrors) ||
              !1,
          },
        };
      case A.notification.init_reminder_options:
        return {
          ...e,
          notifications: {
            ...e.notifications,
            hasEmailReminders:
              ((v = (w = t.payload) == null ? void 0 : w.notification) == null ? void 0 : v.hasEmailReminders) || !1,
            hasSMSReminders:
              ((h = (x = t.payload) == null ? void 0 : x.notification) == null ? void 0 : h.hasSMSReminders) || !1,
            hasLeadTime2Weeks:
              ((p = (m = t.payload) == null ? void 0 : m.notification) == null ? void 0 : p.hasLeadTime2Weeks) || !1,
            hasLeadTime4Weeks:
              ((y = (S = t.payload) == null ? void 0 : S.notification) == null ? void 0 : y.hasLeadTime4Weeks) || !1,
            hasLeadTime6Weeks:
              ((b = (k = t.payload) == null ? void 0 : k.notification) == null ? void 0 : b.hasLeadTime6Weeks) || !1,
          },
        };
      case A.stopPaperReminders.given_name_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            givenNames:
              ((M = (_ = t.payload) == null ? void 0 : _.stopPaperReminder) == null ? void 0 : M.givenNames) || '',
          },
        };
      case A.stopPaperReminders.last_name_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            lastName:
              ((re = (I = t.payload) == null ? void 0 : I.stopPaperReminder) == null ? void 0 : re.lastName) || '',
          },
        };
      case A.stopPaperReminders.vin_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            vin: ((Je = (ft = t.payload) == null ? void 0 : ft.stopPaperReminder) == null ? void 0 : Je.vin) || '',
          },
        };
      case A.stopPaperReminders.licence_plate_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            licencePlate:
              ((Ze = (Ve = t.payload) == null ? void 0 : Ve.stopPaperReminder) == null ? void 0 : Ze.licencePlate) ||
              '',
          },
        };
      case A.stopPaperReminders.all_values_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            givenNames:
              ((dt = (Ue = t.payload) == null ? void 0 : Ue.stopPaperReminder) == null ? void 0 : dt.givenNames) || '',
            lastName:
              ((T = (E = t.payload) == null ? void 0 : E.stopPaperReminder) == null ? void 0 : T.lastName) || '',
            vin: ((W = (R = t.payload) == null ? void 0 : R.stopPaperReminder) == null ? void 0 : W.vin) || '',
            licencePlate:
              ((en = (te = t.payload) == null ? void 0 : te.stopPaperReminder) == null ? void 0 : en.licencePlate) ||
              '',
          },
        };
      case A.stopPaperReminders.given_name_error_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            hasInvalidGivenNames:
              ((En = (et = t.payload) == null ? void 0 : et.stopPaperReminder) == null
                ? void 0
                : En.hasInvalidGivenNames) || !1,
          },
        };
      case A.stopPaperReminders.last_name_error_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            hasInvalidLastName:
              ((tn = (tt = t.payload) == null ? void 0 : tt.stopPaperReminder) == null
                ? void 0
                : tn.hasInvalidLastName) || !1,
          },
        };
      case A.stopPaperReminders.vin_error_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            hasInvalidVin:
              ((ku = (xu = t.payload) == null ? void 0 : xu.stopPaperReminder) == null ? void 0 : ku.hasInvalidVin) ||
              !1,
          },
        };
      case A.stopPaperReminders.licence_plate_error_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            hasInvalidLicencePlate:
              ((Cu = (bu = t.payload) == null ? void 0 : bu.stopPaperReminder) == null
                ? void 0
                : Cu.hasInvalidLicencePlate) || !1,
          },
        };
      case A.stopPaperReminders.all_errors_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            hasInvalidGivenNames:
              ((Eu = (Pu = t.payload) == null ? void 0 : Pu.stopPaperReminder) == null
                ? void 0
                : Eu.hasInvalidGivenNames) || !1,
            hasInvalidLastName:
              ((Nu = (_u = t.payload) == null ? void 0 : _u.stopPaperReminder) == null
                ? void 0
                : Nu.hasInvalidLastName) || !1,
            hasInvalidVin:
              ((Lu = (Ou = t.payload) == null ? void 0 : Ou.stopPaperReminder) == null ? void 0 : Lu.hasInvalidVin) ||
              !1,
            hasInvalidLicencePlate:
              ((Ru = (Tu = t.payload) == null ? void 0 : Tu.stopPaperReminder) == null
                ? void 0
                : Ru.hasInvalidLicencePlate) || !1,
          },
        };
      case A.stopPaperReminders.all_values_and_errors_changed:
        return {
          ...e,
          stopPaperReminder: {
            ...e.stopPaperReminder,
            givenNames:
              ((Mu = (Iu = t.payload) == null ? void 0 : Iu.stopPaperReminder) == null ? void 0 : Mu.givenNames) || '',
            lastName:
              ((zu = (Au = t.payload) == null ? void 0 : Au.stopPaperReminder) == null ? void 0 : zu.lastName) || '',
            vin: ((Du = (ju = t.payload) == null ? void 0 : ju.stopPaperReminder) == null ? void 0 : Du.vin) || '',
            licencePlate:
              (($u = (Fu = t.payload) == null ? void 0 : Fu.stopPaperReminder) == null ? void 0 : $u.licencePlate) ||
              '',
            hasInvalidGivenNames:
              ((Uu = (Vu = t.payload) == null ? void 0 : Vu.stopPaperReminder) == null
                ? void 0
                : Uu.hasInvalidGivenNames) || !1,
            hasInvalidLastName:
              ((Bu = (Wu = t.payload) == null ? void 0 : Wu.stopPaperReminder) == null
                ? void 0
                : Bu.hasInvalidLastName) || !1,
            hasInvalidVin:
              ((Yu = (Hu = t.payload) == null ? void 0 : Hu.stopPaperReminder) == null ? void 0 : Yu.hasInvalidVin) ||
              !1,
            hasInvalidLicencePlate:
              ((Ku = (qu = t.payload) == null ? void 0 : qu.stopPaperReminder) == null
                ? void 0
                : Ku.hasInvalidLicencePlate) || !1,
          },
        };
      case A.addVehicle.vin_changed:
        return {
          ...e,
          addVehicle: {
            ...e.addVehicle,
            vin: ((Xu = (Qu = t.payload) == null ? void 0 : Qu.addVehicle) == null ? void 0 : Xu.vin) || '',
          },
        };
      case A.addVehicle.licence_plate_changed:
        return {
          ...e,
          addVehicle: {
            ...e.addVehicle,
            licencePlate:
              ((Ju = (Gu = t.payload) == null ? void 0 : Gu.addVehicle) == null ? void 0 : Ju.licencePlate) || '',
          },
        };
      case A.addVehicle.custom_name_changed:
        return {
          ...e,
          addVehicle: {
            ...e.addVehicle,
            customName:
              ((ec = (Zu = t.payload) == null ? void 0 : Zu.addVehicle) == null ? void 0 : ec.customName) || '',
          },
        };
      case A.addVehicle.vin_error_changed:
        return {
          ...e,
          addVehicle: {
            ...e.addVehicle,
            hasInvalidVin:
              ((nc = (tc = t.payload) == null ? void 0 : tc.addVehicle) == null ? void 0 : nc.hasInvalidVin) || !1,
          },
        };
      case A.addVehicle.invalid_licence_plate_error_changed:
        return {
          ...e,
          addVehicle: {
            ...e.addVehicle,
            hasInvalidLicencePlate:
              ((ic = (rc = t.payload) == null ? void 0 : rc.addVehicle) == null ? void 0 : ic.hasInvalidLicencePlate) ||
              !1,
          },
        };
      case A.addVehicle.non_registered_licence_plate_error_changed:
        return {
          ...e,
          addVehicle: {
            ...e.addVehicle,
            hasNonRegisteredLicencePlate:
              ((oc = (ac = t.payload) == null ? void 0 : ac.addVehicle) == null
                ? void 0
                : oc.hasNonRegisteredLicencePlate) || !1,
          },
        };
      case A.addVehicle.invalid_custom_name_error_changed:
        return {
          ...e,
          addVehicle: {
            ...e.addVehicle,
            hasInvalidCustomName:
              ((lc = (sc = t.payload) == null ? void 0 : sc.addVehicle) == null ? void 0 : lc.hasInvalidCustomName) ||
              '',
          },
        };
      case A.addVehicle.all_values_and_errors_changed:
        return {
          ...e,
          addVehicle: {
            ...e.addVehicle,
            vin: ((cc = (uc = t.payload) == null ? void 0 : uc.addVehicle) == null ? void 0 : cc.vin) || '',
            licencePlate:
              ((dc = (fc = t.payload) == null ? void 0 : fc.addVehicle) == null ? void 0 : dc.licencePlate) || '',
            customName:
              ((pc = (mc = t.payload) == null ? void 0 : mc.addVehicle) == null ? void 0 : pc.customName) || '',
            hasInvalidVin:
              ((gc = (hc = t.payload) == null ? void 0 : hc.addVehicle) == null ? void 0 : gc.hasInvalidVin) || !1,
            hasInvalidLicencePlate:
              ((yc = (vc = t.payload) == null ? void 0 : vc.addVehicle) == null ? void 0 : yc.hasInvalidLicencePlate) ||
              !1,
            hasNonRegisteredLicencePlate:
              ((Sc = (wc = t.payload) == null ? void 0 : wc.addVehicle) == null
                ? void 0
                : Sc.hasNonRegisteredLicencePlate) || !1,
            hasInvalidCustomName:
              ((kc = (xc = t.payload) == null ? void 0 : xc.addVehicle) == null ? void 0 : kc.hasInvalidCustomName) ||
              '',
          },
        };
      case A.addCustomName.custom_name_changed:
        return {
          ...e,
          addCustomName: {
            ...e.addCustomName,
            customName:
              ((Cc = (bc = t.payload) == null ? void 0 : bc.addCustomName) == null ? void 0 : Cc.customName) || '',
          },
        };
      case A.addCustomName.invalid_custom_name_error_changed:
        return {
          ...e,
          addCustomName: {
            ...e.addCustomName,
            hasInvalidCustomName:
              ((Ec = (Pc = t.payload) == null ? void 0 : Pc.addCustomName) == null
                ? void 0
                : Ec.hasInvalidCustomName) || '',
          },
        };
      case A.addCustomName.all_values_and_errors_changed:
        return {
          ...e,
          addCustomName: {
            ...e.addCustomName,
            hasInvalidCustomName:
              ((Nc = (_c = t.payload) == null ? void 0 : _c.addCustomName) == null
                ? void 0
                : Nc.hasInvalidCustomName) || '',
            customName:
              ((Lc = (Oc = t.payload) == null ? void 0 : Oc.addCustomName) == null ? void 0 : Lc.customName) || '',
          },
        };
      case A.addFeedback.text_changed:
        return {
          ...e,
          feedback: {
            ...e.feedback,
            text: ((Rc = (Tc = t.payload) == null ? void 0 : Tc.addFeedback) == null ? void 0 : Rc.text) || '',
          },
        };
      case A.addFeedback.selected_reaction_changed:
        return {
          ...e,
          feedback: {
            ...e.feedback,
            selectedReaction:
              ((Mc = (Ic = t.payload) == null ? void 0 : Ic.addFeedback) == null ? void 0 : Mc.selectedReaction) || 0,
          },
        };
      case A.addFeedback.all_values_changed:
        return {
          ...e,
          feedback: {
            ...e.feedback,
            text: ((zc = (Ac = t.payload) == null ? void 0 : Ac.addFeedback) == null ? void 0 : zc.text) || '',
            selectedReaction:
              ((Dc = (jc = t.payload) == null ? void 0 : jc.addFeedback) == null ? void 0 : Dc.selectedReaction) || 0,
          },
        };
      case A.accountSettings.email_changed:
        return {
          ...e,
          accountSettings: {
            ...e.accountSettings,
            email: (($c = (Fc = t.payload) == null ? void 0 : Fc.accountSettings) == null ? void 0 : $c.email) || '',
          },
        };
      case A.accountSettings.phone_number_changed:
        return {
          ...e,
          accountSettings: {
            ...e.accountSettings,
            phoneNumber:
              ((Uc = (Vc = t.payload) == null ? void 0 : Vc.accountSettings) == null ? void 0 : Uc.phoneNumber) || '',
          },
        };
      case A.accountSettings.updated_email_changed:
        return {
          ...e,
          accountSettings: {
            ...e.accountSettings,
            updatedEmail:
              ((Bc = (Wc = t.payload) == null ? void 0 : Wc.accountSettings) == null ? void 0 : Bc.updatedEmail) || '',
          },
        };
      case A.accountSettings.updated_phone_number_changed:
        return {
          ...e,
          accountSettings: {
            ...e.accountSettings,
            updatedPhoneNumber:
              ((Yc = (Hc = t.payload) == null ? void 0 : Hc.accountSettings) == null
                ? void 0
                : Yc.updatedPhoneNumber) || '',
          },
        };
      case A.accountSettings.reminder_language_changed:
        return {
          ...e,
          accountSettings: {
            ...e.accountSettings,
            language:
              ((Kc = (qc = t.payload) == null ? void 0 : qc.accountSettings) == null ? void 0 : Kc.language) || '',
          },
        };
      case A.common.vehicle_list_changed:
        return {
          ...e,
          common: {
            ...e.common,
            vehicleList: ((Xc = (Qc = t.payload) == null ? void 0 : Qc.common) == null ? void 0 : Xc.vehicleList) || [],
          },
        };
    }
    return e;
  },
  Ck = {
    hasEmailReminders: !1,
    hasSMSReminders: !1,
    hasLeadTime2Weeks: !1,
    hasLeadTime4Weeks: !1,
    hasLeadTime6Weeks: !1,
    showSaveChangesErrors: !1,
  },
  Pk = {
    givenNames: '',
    lastName: '',
    vin: '',
    licencePlate: '',
    hasInvalidVin: !1,
    hasInvalidLicencePlate: !1,
    hasInvalidGivenNames: !1,
    hasInvalidLastName: !1,
  },
  Ek = {
    vin: '',
    licencePlate: '',
    customName: '',
    hasInvalidVin: !1,
    hasInvalidLicencePlate: !1,
    hasNonRegisteredLicencePlate: !1,
    hasInvalidCustomName: '',
  },
  _k = { customName: '', hasInvalidCustomName: '' },
  Nk = { text: '', selectedReaction: 0 },
  Ok = { email: '', phoneNumber: '', updatedEmail: '', updatedPhoneNumber: '', language: '' },
  Lk = { vehicleList: [] },
  zg = {
    notifications: Ck,
    stopPaperReminder: Pk,
    addVehicle: Ek,
    addCustomName: _k,
    feedback: Nk,
    accountSettings: Ok,
    common: Lk,
  },
  Tk = C.createContext({ state: zg, dispatch: () => {} }),
  Rk = ({ children: e }) => {
    const [t, n] = C.useReducer(bk, zg),
      [r] = wu(['session', 'sessionExpiry']),
      [i] = Su('visited'),
      { getSession: a, refreshSessionCookie: o, logout: s } = Ag();
    return (
      C.useEffect(() => {
        const l = setInterval(() => {
          Mg(r) || s(!0, { sessionExpired: i === 'y' });
        }, 1e3);
        return () => {
          l && clearInterval(l);
        };
      }),
      C.useEffect(() => {
        o(a());
      }, [t]),
      D.jsx(Tk.Provider, { value: { state: t, dispatch: n }, children: e })
    );
  },
  Qo = ({ children: e }) => {
    const [t] = wu(['session', 'sessionExpiry']),
      [n] = Su('visited'),
      [r, i] = C.useState(!0),
      { logout: a } = Ag();
    return (
      C.useEffect(() => {
        Mg(t) || a(!0, { sessionExpired: n === 'y' }), i(!1);
      }, [t, a, n]),
      r ? D.jsx(Lt, { size: 'lg' }) : D.jsx(Rk, { children: e })
    );
  },
  cm = C.lazy(() => hi(() => import('./index-B70XzM2d.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))),
  Ik = C.lazy(() => hi(() => import('./index-BwsMS6xY.js'), __vite__mapDeps([11, 12, 1, 2, 3, 4, 5, 6, 7, 13]))),
  Mk = C.lazy(() => hi(() => import('./edit-B19kykTY.js'), __vite__mapDeps([14, 12, 1, 2, 3, 13]))),
  Ak = C.lazy(() => hi(() => import('./index-Cf1s7vRf.js'), __vite__mapDeps([15, 2]))),
  zk = C.lazy(() => hi(() => import('./index-BxdDQPxC.js'), __vite__mapDeps([16, 1, 2, 3, 8, 4, 5, 9, 12, 17]))),
  jk = [
    {
      path: '',
      element: D.jsx(C.Suspense, {
        fallback: D.jsx(Lt, { size: 'lg' }),
        children: D.jsx(Qo, { children: D.jsx(cm, {}) }),
      }),
    },
    {
      path: '/',
      element: D.jsx(C.Suspense, {
        fallback: D.jsx(Lt, { size: 'lg' }),
        children: D.jsx(Qo, { children: D.jsx(cm, {}) }),
      }),
    },
    {
      path: 'authentication',
      element: D.jsx(C.Suspense, { fallback: D.jsx(Lt, { size: 'lg' }), children: D.jsx(zk, {}) }),
    },
    {
      path: 'account-settings',
      element: D.jsx(C.Suspense, {
        fallback: D.jsx(Lt, { size: 'lg' }),
        children: D.jsx(Qo, { children: D.jsx(n0, {}) }),
      }),
      children: [
        { path: '', element: D.jsx(C.Suspense, { fallback: D.jsx(Lt, { size: 'lg' }), children: D.jsx(Ik, {}) }) },
        { path: 'edit', element: D.jsx(C.Suspense, { fallback: D.jsx(Lt, { size: 'lg' }), children: D.jsx(Mk, {}) }) },
      ],
    },
    { path: '*', element: D.jsx(C.Suspense, { fallback: D.jsx(Lt, { size: 'lg' }), children: D.jsx(Ak, {}) }) },
  ],
  Dk = () => W1(jk),
  Fk = () => D.jsx(AS, { defaultSetOptions: { path: '/' }, children: D.jsx(Dk, {}) }),
  $k = () => `${Ig('2025-07-20T23:41:16.950Z', 'yyyy-MM-dd h:mma O')}`,
  Vk = '/notifications',
  jg = Vk;
console.log(`
  build info - build version: 1.0.2
  build date: ${$k()}`);
console.log('Debug: browser base url is:', jg);
Xo.createRoot(document.getElementById('root')).render(
  D.jsx(Ba.StrictMode, { children: D.jsx(s0, { basename: jg, children: D.jsx(Fk, {}) }) })
);
export {
  PS as $,
  eb as A,
  tb as B,
  ab as C,
  Jk as D,
  ob as E,
  wi as F,
  Su as G,
  Ge as H,
  kn as I,
  Wk as J,
  ll as K,
  qw as L,
  fS as M,
  ib as N,
  Ig as O,
  Zk as P,
  qk as Q,
  nb as R,
  Lt as S,
  rb as T,
  Gk as U,
  uS as V,
  Tk as W,
  al as X,
  bS as Y,
  xS as Z,
  mS as _,
  Ag as a,
  wu as b,
  Hk as c,
  mb as d,
  Kk as e,
  Qk as f,
  cb as g,
  db as h,
  A as i,
  D as j,
  lS as k,
  sb as l,
  lb as m,
  Uk as n,
  fb as o,
  Th as p,
  Bk as q,
  C as r,
  ub as s,
  Mg as t,
  OS as u,
  pb as v,
  gb as w,
  hb as x,
  au as y,
  Yk as z,
};
