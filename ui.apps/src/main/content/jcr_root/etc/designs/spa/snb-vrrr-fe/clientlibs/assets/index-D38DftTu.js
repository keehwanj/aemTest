const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-BaxgdJrO.js',
      'assets/Error-CCx1isWs.js',
      'assets/useMetadata-DpbrA7pe.js',
      'assets/Error-BFxEtAtV.css',
      'assets/input-helpers-CkqBGot3.js',
      'assets/input-helpers-DshotB5L.css',
      'assets/ErrorModal-CZoq837d.js',
      'assets/ErrorModal-DNFovqKM.css',
      'assets/Checkbox-ZvSTE2DX.js',
      'assets/Checkbox-GEzfHL3G.css',
      'assets/index-DkCjfKsC.css',
      'assets/index-qiVSYFvY.js',
      'assets/BackLink-CNlxF_IM.js',
      'assets/CodeAuthentication-Rzm3T_jN.js',
      'assets/CodeAuthentication-CSrm3Utb.css',
      'assets/index-uIYluvho.css',
      'assets/accountSettings-Fh7g996K.css',
      'assets/edit-BdAx8K7e.js',
      'assets/index-Bu5Mm71H.js',
      'assets/index-CSVdFtfy.js',
      'assets/index-DJr9EPMB.css',
    ])
) => i.map((i) => d[i]);
function qm(e, t) {
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
var u2 =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function ol(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function c2(e) {
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
var Lf = { exports: {} },
  $a = {},
  Tf = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ii = Symbol.for('react.element'),
  Km = Symbol.for('react.portal'),
  Qm = Symbol.for('react.fragment'),
  Gm = Symbol.for('react.strict_mode'),
  Xm = Symbol.for('react.profiler'),
  Jm = Symbol.for('react.provider'),
  Zm = Symbol.for('react.context'),
  eh = Symbol.for('react.forward_ref'),
  th = Symbol.for('react.suspense'),
  nh = Symbol.for('react.memo'),
  rh = Symbol.for('react.lazy'),
  vu = Symbol.iterator;
function ih(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (vu && e[vu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var If = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rf = Object.assign,
  _f = {};
function tr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = _f), (this.updater = n || If);
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Af() {}
Af.prototype = tr.prototype;
function sl(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = _f), (this.updater = n || If);
}
var ll = (sl.prototype = new Af());
ll.constructor = sl;
Rf(ll, tr.prototype);
ll.isPureReactComponent = !0;
var yu = Array.isArray,
  Mf = Object.prototype.hasOwnProperty,
  ul = { current: null },
  zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function jf(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = '' + t.key), t))
      Mf.call(t, r) && !zf.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: ii, type: e, key: a, ref: o, props: i, _owner: ul.current };
}
function ah(e, t) {
  return { $$typeof: ii, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ii;
}
function oh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wu = /\/+/g;
function po(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? oh('' + e.key) : t.toString(36);
}
function Hi(e, t, n, r, i) {
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
          case ii:
          case Km:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + po(o, 0) : r),
      yu(i)
        ? ((n = ''),
          e != null && (n = e.replace(wu, '$&/') + '/'),
          Hi(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (cl(i) &&
            (i = ah(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(wu, '$&/') + '/') + e)),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), yu(e)))
    for (var s = 0; s < e.length; s++) {
      a = e[s];
      var l = r + po(a, s);
      o += Hi(a, t, n, l, i);
    }
  else if (((l = ih(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(a = e.next()).done; ) (a = a.value), (l = r + po(a, s++)), (o += Hi(a, t, n, l, i));
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
function vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Hi(e, r, '', '', function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function sh(e) {
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
var Se = { current: null },
  Yi = { transition: null },
  lh = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: Yi, ReactCurrentOwner: ul };
function Df() {
  throw Error('act(...) is not supported in production builds of React.');
}
M.Children = {
  map: vi,
  forEach: function (e, t, n) {
    vi(
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
      vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!cl(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
M.Component = tr;
M.Fragment = Qm;
M.Profiler = Xm;
M.PureComponent = sl;
M.StrictMode = Gm;
M.Suspense = th;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lh;
M.act = Df;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = Rf({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = ul.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t) Mf.call(t, l) && !zf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ii, type: e.type, key: i, ref: a, props: r, _owner: o };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Jm, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = jf;
M.createFactory = function (e) {
  var t = jf.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: eh, render: e };
};
M.isValidElement = cl;
M.lazy = function (e) {
  return { $$typeof: rh, _payload: { _status: -1, _result: e }, _init: sh };
};
M.memo = function (e, t) {
  return { $$typeof: nh, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Yi.transition;
  Yi.transition = {};
  try {
    e();
  } finally {
    Yi.transition = t;
  }
};
M.unstable_act = Df;
M.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
M.useContext = function (e) {
  return Se.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
M.useId = function () {
  return Se.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return Se.current.useRef(e);
};
M.useState = function (e) {
  return Se.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return Se.current.useTransition();
};
M.version = '18.3.1';
Tf.exports = M;
var E = Tf.exports;
const Va = ol(E),
  uh = qm({ __proto__: null, default: Va }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ch = E,
  fh = Symbol.for('react.element'),
  dh = Symbol.for('react.fragment'),
  ph = Object.prototype.hasOwnProperty,
  mh = ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ff(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = '' + n), t.key !== void 0 && (a = '' + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) ph.call(t, r) && !hh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: fh, type: e, key: a, ref: o, props: i, _owner: mh.current };
}
$a.Fragment = dh;
$a.jsx = Ff;
$a.jsxs = Ff;
Lf.exports = $a;
var F = Lf.exports,
  Ko = {},
  $f = { exports: {} },
  Ie = {},
  Vf = { exports: {} },
  Uf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, I) {
    var R = P.length;
    P.push(I);
    e: for (; 0 < R; ) {
      var q = (R - 1) >>> 1,
        ae = P[q];
      if (0 < i(ae, I)) (P[q] = I), (P[R] = ae), (R = q);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var I = P[0],
      R = P.pop();
    if (R !== I) {
      P[0] = R;
      e: for (var q = 0, ae = P.length, hi = ae >>> 1; q < hi; ) {
        var Ht = 2 * (q + 1) - 1,
          fo = P[Ht],
          Yt = Ht + 1,
          gi = P[Yt];
        if (0 > i(fo, R))
          Yt < ae && 0 > i(gi, fo) ? ((P[q] = gi), (P[Yt] = R), (q = Yt)) : ((P[q] = fo), (P[Ht] = R), (q = Ht));
        else if (Yt < ae && 0 > i(gi, R)) (P[q] = gi), (P[Yt] = R), (q = Yt);
        else break e;
      }
    }
    return I;
  }
  function i(P, I) {
    var R = P.sortIndex - I.sortIndex;
    return R !== 0 ? R : P.id - I.id;
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
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= P) r(u), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(u);
    }
  }
  function S(P) {
    if (((v = !1), m(P), !w))
      if (n(l) !== null) (w = !0), vt(y);
      else {
        var I = n(u);
        I !== null && wn(S, I.startTime - P);
      }
  }
  function y(P, I) {
    (w = !1), v && ((v = !1), h(O), (O = -1)), (g = !0);
    var R = d;
    try {
      for (m(I), f = n(l); f !== null && (!(f.expirationTime > I) || (P && !le())); ) {
        var q = f.callback;
        if (typeof q == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var ae = q(f.expirationTime <= I);
          (I = e.unstable_now()), typeof ae == 'function' ? (f.callback = ae) : f === n(l) && r(l), m(I);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var hi = !0;
      else {
        var Ht = n(u);
        Ht !== null && wn(S, Ht.startTime - I), (hi = !1);
      }
      return hi;
    } finally {
      (f = null), (d = R), (g = !1);
    }
  }
  var k = !1,
    b = null,
    O = -1,
    z = 5,
    _ = -1;
  function le() {
    return !(e.unstable_now() - _ < z);
  }
  function yn() {
    if (b !== null) {
      var P = e.unstable_now();
      _ = P;
      var I = !0;
      try {
        I = b(!0, P);
      } finally {
        I ? Bt() : ((k = !1), (b = null));
      }
    } else k = !1;
  }
  var Bt;
  if (typeof p == 'function')
    Bt = function () {
      p(yn);
    };
  else if (typeof MessageChannel < 'u') {
    var gt = new MessageChannel(),
      Wt = gt.port2;
    (gt.port1.onmessage = yn),
      (Bt = function () {
        Wt.postMessage(null);
      });
  } else
    Bt = function () {
      x(yn, 0);
    };
  function vt(P) {
    (b = P), k || ((k = !0), Bt());
  }
  function wn(P, I) {
    O = x(function () {
      P(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), vt(y));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (z = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (P) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var R = d;
      d = I;
      try {
        return P();
      } finally {
        d = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, I) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var R = d;
      d = P;
      try {
        return I();
      } finally {
        d = R;
      }
    }),
    (e.unstable_scheduleCallback = function (P, I, R) {
      var q = e.unstable_now();
      switch (
        (typeof R == 'object' && R !== null
          ? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? q + R : q))
          : (R = q),
        P)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = R + ae),
        (P = { id: c++, callback: I, priorityLevel: P, startTime: R, expirationTime: ae, sortIndex: -1 }),
        R > q
          ? ((P.sortIndex = R), t(u, P), n(l) === null && P === n(u) && (v ? (h(O), (O = -1)) : (v = !0), wn(S, R - q)))
          : ((P.sortIndex = ae), t(l, P), w || g || ((w = !0), vt(y))),
        P
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (P) {
      var I = d;
      return function () {
        var R = d;
        d = I;
        try {
          return P.apply(this, arguments);
        } finally {
          d = R;
        }
      };
    });
})(Uf);
Vf.exports = Uf;
var gh = Vf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vh = E,
  Te = gh;
function C(e) {
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
var Bf = new Set(),
  _r = {};
function hn(e, t) {
  qn(e, t), qn(e + 'Capture', t);
}
function qn(e, t) {
  for (_r[e] = t, e = 0; e < t.length; e++) Bf.add(t[e]);
}
var st = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Qo = Object.prototype.hasOwnProperty,
  yh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Su = {},
  xu = {};
function wh(e) {
  return Qo.call(xu, e) ? !0 : Qo.call(Su, e) ? !1 : yh.test(e) ? (xu[e] = !0) : ((Su[e] = !0), !1);
}
function Sh(e, t, n, r) {
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
function xh(e, t, n, r) {
  if (t === null || typeof t > 'u' || Sh(e, t, n, r)) return !0;
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
function xe(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var fe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new xe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  fe[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  fe[e] = new xe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  fe[e] = new xe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  fe[e] = new xe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  fe[e] = new xe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  fe[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fl = /[\-:]([a-z])/g;
function dl(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(fl, dl);
    fe[t] = new xe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(fl, dl);
  fe[t] = new xe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(fl, dl);
  fe[t] = new xe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  fe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new xe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  fe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pl(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (xh(t, n, i, r) && (n = null),
    r || i === null
      ? wh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var mt = vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yi = Symbol.for('react.element'),
  En = Symbol.for('react.portal'),
  Pn = Symbol.for('react.fragment'),
  ml = Symbol.for('react.strict_mode'),
  Go = Symbol.for('react.profiler'),
  Wf = Symbol.for('react.provider'),
  Hf = Symbol.for('react.context'),
  hl = Symbol.for('react.forward_ref'),
  Xo = Symbol.for('react.suspense'),
  Jo = Symbol.for('react.suspense_list'),
  gl = Symbol.for('react.memo'),
  St = Symbol.for('react.lazy'),
  Yf = Symbol.for('react.offscreen'),
  ku = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ku && e[ku]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var X = Object.assign,
  mo;
function gr(e) {
  if (mo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mo = (t && t[1]) || '';
    }
  return (
    `
` +
    mo +
    e
  );
}
var ho = !1;
function go(e, t) {
  if (!e || ho) return '';
  ho = !0;
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
    (ho = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? gr(e) : '';
}
function kh(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr('Lazy');
    case 13:
      return gr('Suspense');
    case 19:
      return gr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = go(e.type, !1)), e;
    case 11:
      return (e = go(e.type.render, !1)), e;
    case 1:
      return (e = go(e.type, !0)), e;
    default:
      return '';
  }
}
function Zo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Pn:
      return 'Fragment';
    case En:
      return 'Portal';
    case Go:
      return 'Profiler';
    case ml:
      return 'StrictMode';
    case Xo:
      return 'Suspense';
    case Jo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Hf:
        return (e.displayName || 'Context') + '.Consumer';
      case Wf:
        return (e._context.displayName || 'Context') + '.Provider';
      case hl:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case gl:
        return (t = e.displayName || null), t !== null ? t : Zo(e.type) || 'Memo';
      case St:
        (t = e._payload), (e = e._init);
        try {
          return Zo(e(t));
        } catch {}
    }
  return null;
}
function bh(e) {
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
      return Zo(t);
    case 8:
      return t === ml ? 'StrictMode' : 'Mode';
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
function Mt(e) {
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
function qf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Ch(e) {
  var t = qf(e) ? 'checked' : 'value',
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
function wi(e) {
  e._valueTracker || (e._valueTracker = Ch(e));
}
function Kf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = qf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function oa(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function es(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function bu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Qf(e, t) {
  (t = t.checked), t != null && pl(e, 'checked', t, !1);
}
function ts(e, t) {
  Qf(e, t);
  var n = Mt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? ns(e, t.type, n) : t.hasOwnProperty('defaultValue') && ns(e, t.type, Mt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Cu(e, t, n) {
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
function ns(e, t, n) {
  (t !== 'number' || oa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var vr = Array.isArray;
function $n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Mt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function rs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return X({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Eu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function Gf(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Xf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function is(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Xf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Si,
  Jf = (function (e) {
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
        Si = Si || document.createElement('div'),
          Si.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
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
  Eh = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(xr).forEach(function (e) {
  Eh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
  });
});
function Zf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (xr.hasOwnProperty(e) && xr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function ed(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Zf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Ph = X(
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
function as(e, t) {
  if (t) {
    if (Ph[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(C(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62));
  }
}
function os(e, t) {
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
var ss = null;
function vl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ls = null,
  Vn = null,
  Un = null;
function Ou(e) {
  if ((e = si(e))) {
    if (typeof ls != 'function') throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ya(t)), ls(e.stateNode, e.type, t));
  }
}
function td(e) {
  Vn ? (Un ? Un.push(e) : (Un = [e])) : (Vn = e);
}
function nd() {
  if (Vn) {
    var e = Vn,
      t = Un;
    if (((Un = Vn = null), Ou(e), t)) for (e = 0; e < t.length; e++) Ou(t[e]);
  }
}
function rd(e, t) {
  return e(t);
}
function id() {}
var vo = !1;
function ad(e, t, n) {
  if (vo) return e(t, n);
  vo = !0;
  try {
    return rd(e, t, n);
  } finally {
    (vo = !1), (Vn !== null || Un !== null) && (id(), nd());
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ya(n);
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
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n));
  return n;
}
var us = !1;
if (st)
  try {
    var or = {};
    Object.defineProperty(or, 'passive', {
      get: function () {
        us = !0;
      },
    }),
      window.addEventListener('test', or, or),
      window.removeEventListener('test', or, or);
  } catch {
    us = !1;
  }
function Oh(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var kr = !1,
  sa = null,
  la = !1,
  cs = null,
  Nh = {
    onError: function (e) {
      (kr = !0), (sa = e);
    },
  };
function Lh(e, t, n, r, i, a, o, s, l) {
  (kr = !1), (sa = null), Oh.apply(Nh, arguments);
}
function Th(e, t, n, r, i, a, o, s, l) {
  if ((Lh.apply(this, arguments), kr)) {
    if (kr) {
      var u = sa;
      (kr = !1), (sa = null);
    } else throw Error(C(198));
    la || ((la = !0), (cs = u));
  }
}
function gn(e) {
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
function od(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Nu(e) {
  if (gn(e) !== e) throw Error(C(188));
}
function Ih(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(C(188));
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
        if (a === n) return Nu(i), e;
        if (a === r) return Nu(i), t;
        a = a.sibling;
      }
      throw Error(C(188));
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
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function sd(e) {
  return (e = Ih(e)), e !== null ? ld(e) : null;
}
function ld(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ld(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ud = Te.unstable_scheduleCallback,
  Lu = Te.unstable_cancelCallback,
  Rh = Te.unstable_shouldYield,
  _h = Te.unstable_requestPaint,
  ee = Te.unstable_now,
  Ah = Te.unstable_getCurrentPriorityLevel,
  yl = Te.unstable_ImmediatePriority,
  cd = Te.unstable_UserBlockingPriority,
  ua = Te.unstable_NormalPriority,
  Mh = Te.unstable_LowPriority,
  fd = Te.unstable_IdlePriority,
  Ua = null,
  et = null;
function zh(e) {
  if (et && typeof et.onCommitFiberRoot == 'function')
    try {
      et.onCommitFiberRoot(Ua, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : Fh,
  jh = Math.log,
  Dh = Math.LN2;
function Fh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jh(e) / Dh) | 0)) | 0;
}
var xi = 64,
  ki = 4194304;
function yr(e) {
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
function ca(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? (r = yr(s)) : ((a &= o), a !== 0 && (r = yr(a)));
  } else (o = n & ~i), o !== 0 ? (r = yr(o)) : a !== 0 && (r = yr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - He(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function $h(e, t) {
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
function Vh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - He(a),
      s = 1 << o,
      l = i[o];
    l === -1 ? (!(s & n) || s & r) && (i[o] = $h(s, t)) : l <= t && (e.expiredLanes |= s), (a &= ~s);
  }
}
function fs(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function dd() {
  var e = xi;
  return (xi <<= 1), !(xi & 4194240) && (xi = 64), e;
}
function yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ai(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - He(t)),
    (e[t] = n);
}
function Uh(e, t) {
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
    var i = 31 - He(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function wl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var V = 0;
function pd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var md,
  Sl,
  hd,
  gd,
  vd,
  ds = !1,
  bi = [],
  Ot = null,
  Nt = null,
  Lt = null,
  zr = new Map(),
  jr = new Map(),
  kt = [],
  Bh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Tu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ot = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Nt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Lt = null;
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
function sr(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }),
      t !== null && ((t = si(t)), t !== null && Sl(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Wh(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Ot = sr(Ot, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Nt = sr(Nt, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Lt = sr(Lt, e, t, n, r, i)), !0;
    case 'pointerover':
      var a = i.pointerId;
      return zr.set(a, sr(zr.get(a) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (a = i.pointerId), jr.set(a, sr(jr.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function yd(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = od(n)), t !== null)) {
          (e.blockedOn = t),
            vd(e.priority, function () {
              hd(n);
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
function qi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ps(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ss = r), n.target.dispatchEvent(r), (ss = null);
    } else return (t = si(n)), t !== null && Sl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Iu(e, t, n) {
  qi(e) && n.delete(t);
}
function Hh() {
  (ds = !1),
    Ot !== null && qi(Ot) && (Ot = null),
    Nt !== null && qi(Nt) && (Nt = null),
    Lt !== null && qi(Lt) && (Lt = null),
    zr.forEach(Iu),
    jr.forEach(Iu);
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), ds || ((ds = !0), Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Hh)));
}
function Dr(e) {
  function t(i) {
    return lr(i, e);
  }
  if (0 < bi.length) {
    lr(bi[0], e);
    for (var n = 1; n < bi.length; n++) {
      var r = bi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ot !== null && lr(Ot, e), Nt !== null && lr(Nt, e), Lt !== null && lr(Lt, e), zr.forEach(t), jr.forEach(t), n = 0;
    n < kt.length;
    n++
  )
    (r = kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && ((n = kt[0]), n.blockedOn === null); ) yd(n), n.blockedOn === null && kt.shift();
}
var Bn = mt.ReactCurrentBatchConfig,
  fa = !0;
function Yh(e, t, n, r) {
  var i = V,
    a = Bn.transition;
  Bn.transition = null;
  try {
    (V = 1), xl(e, t, n, r);
  } finally {
    (V = i), (Bn.transition = a);
  }
}
function qh(e, t, n, r) {
  var i = V,
    a = Bn.transition;
  Bn.transition = null;
  try {
    (V = 4), xl(e, t, n, r);
  } finally {
    (V = i), (Bn.transition = a);
  }
}
function xl(e, t, n, r) {
  if (fa) {
    var i = ps(e, t, n, r);
    if (i === null) No(e, t, r, da, n), Tu(e, r);
    else if (Wh(i, e, t, n, r)) r.stopPropagation();
    else if ((Tu(e, r), t & 4 && -1 < Bh.indexOf(e))) {
      for (; i !== null; ) {
        var a = si(i);
        if ((a !== null && md(a), (a = ps(e, t, n, r)), a === null && No(e, t, r, da, n), a === i)) break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else No(e, t, r, null, n);
  }
}
var da = null;
function ps(e, t, n, r) {
  if (((da = null), (e = vl(r)), (e = Xt(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = od(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (da = e), null;
}
function wd(e) {
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
      switch (Ah()) {
        case yl:
          return 1;
        case cd:
          return 4;
        case ua:
        case Mh:
          return 16;
        case fd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null,
  kl = null,
  Ki = null;
function Sd() {
  if (Ki) return Ki;
  var e,
    t = kl,
    n = t.length,
    r,
    i = 'value' in Ct ? Ct.value : Ct.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (Ki = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Qi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ci() {
  return !0;
}
function Ru() {
  return !1;
}
function Re(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(a) : a[s]));
    return (
      (this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Ci : Ru),
      (this.isPropagationStopped = Ru),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ci));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ci));
      },
      persist: function () {},
      isPersistent: Ci,
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
  bl = Re(nr),
  oi = X({}, nr, { view: 0, detail: 0 }),
  Kh = Re(oi),
  wo,
  So,
  ur,
  Ba = X({}, oi, {
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
    getModifierState: Cl,
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
        : (e !== ur &&
            (ur && e.type === 'mousemove'
              ? ((wo = e.screenX - ur.screenX), (So = e.screenY - ur.screenY))
              : (So = wo = 0),
            (ur = e)),
          wo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : So;
    },
  }),
  _u = Re(Ba),
  Qh = X({}, Ba, { dataTransfer: 0 }),
  Gh = Re(Qh),
  Xh = X({}, oi, { relatedTarget: 0 }),
  xo = Re(Xh),
  Jh = X({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zh = Re(Jh),
  eg = X({}, nr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  tg = Re(eg),
  ng = X({}, nr, { data: 0 }),
  Au = Re(ng),
  rg = {
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
  ig = {
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
  ag = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function og(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ag[e]) ? !!t[e] : !1;
}
function Cl() {
  return og;
}
var sg = X({}, oi, {
    key: function (e) {
      if (e.key) {
        var t = rg[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Qi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? ig[e.keyCode] || 'Unidentified'
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
    getModifierState: Cl,
    charCode: function (e) {
      return e.type === 'keypress' ? Qi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? Qi(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  lg = Re(sg),
  ug = X({}, Ba, {
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
  Mu = Re(ug),
  cg = X({}, oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cl,
  }),
  fg = Re(cg),
  dg = X({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pg = Re(dg),
  mg = X({}, Ba, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hg = Re(mg),
  gg = [9, 13, 27, 32],
  El = st && 'CompositionEvent' in window,
  br = null;
st && 'documentMode' in document && (br = document.documentMode);
var vg = st && 'TextEvent' in window && !br,
  xd = st && (!El || (br && 8 < br && 11 >= br)),
  zu = ' ',
  ju = !1;
function kd(e, t) {
  switch (e) {
    case 'keyup':
      return gg.indexOf(t.keyCode) !== -1;
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
function bd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var On = !1;
function yg(e, t) {
  switch (e) {
    case 'compositionend':
      return bd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((ju = !0), zu);
    case 'textInput':
      return (e = t.data), e === zu && ju ? null : e;
    default:
      return null;
  }
}
function wg(e, t) {
  if (On) return e === 'compositionend' || (!El && kd(e, t)) ? ((e = Sd()), (Ki = kl = Ct = null), (On = !1), e) : null;
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
      return xd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Sg = {
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
function Du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Sg[e.type] : t === 'textarea';
}
function Cd(e, t, n, r) {
  td(r),
    (t = pa(t, 'onChange')),
    0 < t.length && ((n = new bl('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Cr = null,
  Fr = null;
function xg(e) {
  Md(e, 0);
}
function Wa(e) {
  var t = Tn(e);
  if (Kf(t)) return e;
}
function kg(e, t) {
  if (e === 'change') return t;
}
var Ed = !1;
if (st) {
  var ko;
  if (st) {
    var bo = 'oninput' in document;
    if (!bo) {
      var Fu = document.createElement('div');
      Fu.setAttribute('oninput', 'return;'), (bo = typeof Fu.oninput == 'function');
    }
    ko = bo;
  } else ko = !1;
  Ed = ko && (!document.documentMode || 9 < document.documentMode);
}
function $u() {
  Cr && (Cr.detachEvent('onpropertychange', Pd), (Fr = Cr = null));
}
function Pd(e) {
  if (e.propertyName === 'value' && Wa(Fr)) {
    var t = [];
    Cd(t, Fr, e, vl(e)), ad(xg, t);
  }
}
function bg(e, t, n) {
  e === 'focusin' ? ($u(), (Cr = t), (Fr = n), Cr.attachEvent('onpropertychange', Pd)) : e === 'focusout' && $u();
}
function Cg(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Wa(Fr);
}
function Eg(e, t) {
  if (e === 'click') return Wa(t);
}
function Pg(e, t) {
  if (e === 'input' || e === 'change') return Wa(t);
}
function Og(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == 'function' ? Object.is : Og;
function $r(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Qo.call(t, i) || !qe(e[i], t[i])) return !1;
  }
  return !0;
}
function Vu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uu(e, t) {
  var n = Vu(e);
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
    n = Vu(n);
  }
}
function Od(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Od(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Nd() {
  for (var e = window, t = oa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = oa(e.document);
  }
  return t;
}
function Pl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Ng(e) {
  var t = Nd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Od(n.ownerDocument.documentElement, n)) {
    if (r !== null && Pl(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = Uu(n, a));
        var o = Uu(n, r);
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
var Lg = st && 'documentMode' in document && 11 >= document.documentMode,
  Nn = null,
  ms = null,
  Er = null,
  hs = !1;
function Bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hs ||
    Nn == null ||
    Nn !== oa(r) ||
    ((r = Nn),
    'selectionStart' in r && Pl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Er && $r(Er, r)) ||
      ((Er = r),
      (r = pa(ms, 'onSelect')),
      0 < r.length &&
        ((t = new bl('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Nn))));
}
function Ei(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Ln = {
    animationend: Ei('Animation', 'AnimationEnd'),
    animationiteration: Ei('Animation', 'AnimationIteration'),
    animationstart: Ei('Animation', 'AnimationStart'),
    transitionend: Ei('Transition', 'TransitionEnd'),
  },
  Co = {},
  Ld = {};
st &&
  ((Ld = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation),
  'TransitionEvent' in window || delete Ln.transitionend.transition);
function Ha(e) {
  if (Co[e]) return Co[e];
  if (!Ln[e]) return e;
  var t = Ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ld) return (Co[e] = t[n]);
  return e;
}
var Td = Ha('animationend'),
  Id = Ha('animationiteration'),
  Rd = Ha('animationstart'),
  _d = Ha('transitionend'),
  Ad = new Map(),
  Wu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function $t(e, t) {
  Ad.set(e, t), hn(t, [e]);
}
for (var Eo = 0; Eo < Wu.length; Eo++) {
  var Po = Wu[Eo],
    Tg = Po.toLowerCase(),
    Ig = Po[0].toUpperCase() + Po.slice(1);
  $t(Tg, 'on' + Ig);
}
$t(Td, 'onAnimationEnd');
$t(Id, 'onAnimationIteration');
$t(Rd, 'onAnimationStart');
$t('dblclick', 'onDoubleClick');
$t('focusin', 'onFocus');
$t('focusout', 'onBlur');
$t(_d, 'onTransitionEnd');
qn('onMouseEnter', ['mouseout', 'mouseover']);
qn('onMouseLeave', ['mouseout', 'mouseover']);
qn('onPointerEnter', ['pointerout', 'pointerover']);
qn('onPointerLeave', ['pointerout', 'pointerover']);
hn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
hn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
hn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
hn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
hn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
hn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var wr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Rg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(wr));
function Hu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Th(r, t, void 0, e), (e.currentTarget = null);
}
function Md(e, t) {
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
          Hu(i, s, u), (a = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]), (l = s.instance), (u = s.currentTarget), (s = s.listener), l !== a && i.isPropagationStopped())
          )
            break e;
          Hu(i, s, u), (a = l);
        }
    }
  }
  if (la) throw ((e = cs), (la = !1), (cs = null), e);
}
function B(e, t) {
  var n = t[Ss];
  n === void 0 && (n = t[Ss] = new Set());
  var r = e + '__bubble';
  n.has(r) || (zd(t, e, 2, !1), n.add(r));
}
function Oo(e, t, n) {
  var r = 0;
  t && (r |= 4), zd(n, e, r, t);
}
var Pi = '_reactListening' + Math.random().toString(36).slice(2);
function Vr(e) {
  if (!e[Pi]) {
    (e[Pi] = !0),
      Bf.forEach(function (n) {
        n !== 'selectionchange' && (Rg.has(n) || Oo(n, !1, e), Oo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pi] || ((t[Pi] = !0), Oo('selectionchange', !1, t));
  }
}
function zd(e, t, n, r) {
  switch (wd(t)) {
    case 1:
      var i = Yh;
      break;
    case 4:
      i = qh;
      break;
    default:
      i = xl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !us || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function No(e, t, n, r, i) {
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
          if (((o = Xt(s)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = a = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  ad(function () {
    var u = a,
      c = vl(n),
      f = [];
    e: {
      var d = Ad.get(e);
      if (d !== void 0) {
        var g = bl,
          w = e;
        switch (e) {
          case 'keypress':
            if (Qi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = lg;
            break;
          case 'focusin':
            (w = 'focus'), (g = xo);
            break;
          case 'focusout':
            (w = 'blur'), (g = xo);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = xo;
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
            g = _u;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Gh;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = fg;
            break;
          case Td:
          case Id:
          case Rd:
            g = Zh;
            break;
          case _d:
            g = pg;
            break;
          case 'scroll':
            g = Kh;
            break;
          case 'wheel':
            g = hg;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = tg;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Mu;
        }
        var v = (t & 4) !== 0,
          x = !v && e === 'scroll',
          h = v ? (d !== null ? d + 'Capture' : null) : d;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var S = m.stateNode;
          if (
            (m.tag === 5 && S !== null && ((m = S), h !== null && ((S = Mr(p, h)), S != null && v.push(Ur(p, S, m)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < v.length && ((d = new g(d, w, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d && n !== ss && (w = n.relatedTarget || n.fromElement) && (Xt(w) || w[lt]))
        )
          break e;
        if (
          (g || d) &&
          ((d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? Xt(w) : null),
              w !== null && ((x = gn(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) && (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((v = _u),
            (S = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Mu), (S = 'onPointerLeave'), (h = 'onPointerEnter'), (p = 'pointer')),
            (x = g == null ? d : Tn(g)),
            (m = w == null ? d : Tn(w)),
            (d = new v(S, p + 'leave', g, n, c)),
            (d.target = x),
            (d.relatedTarget = m),
            (S = null),
            Xt(c) === u && ((v = new v(h, p + 'enter', w, n, c)), (v.target = m), (v.relatedTarget = x), (S = v)),
            (x = S),
            g && w)
          )
            t: {
              for (v = g, h = w, p = 0, m = v; m; m = Sn(m)) p++;
              for (m = 0, S = h; S; S = Sn(S)) m++;
              for (; 0 < p - m; ) (v = Sn(v)), p--;
              for (; 0 < m - p; ) (h = Sn(h)), m--;
              for (; p--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = Sn(v)), (h = Sn(h));
              }
              v = null;
            }
          else v = null;
          g !== null && Yu(f, d, g, v, !1), w !== null && x !== null && Yu(f, x, w, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Tn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var y = kg;
        else if (Du(d))
          if (Ed) y = Pg;
          else {
            y = Cg;
            var k = bg;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === 'input' && (d.type === 'checkbox' || d.type === 'radio') && (y = Eg);
        if (y && (y = y(e, u))) {
          Cd(f, y, n, c);
          break e;
        }
        k && k(e, d, u),
          e === 'focusout' && (k = d._wrapperState) && k.controlled && d.type === 'number' && ns(d, 'number', d.value);
      }
      switch (((k = u ? Tn(u) : window), e)) {
        case 'focusin':
          (Du(k) || k.contentEditable === 'true') && ((Nn = k), (ms = u), (Er = null));
          break;
        case 'focusout':
          Er = ms = Nn = null;
          break;
        case 'mousedown':
          hs = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (hs = !1), Bu(f, n, c);
          break;
        case 'selectionchange':
          if (Lg) break;
        case 'keydown':
        case 'keyup':
          Bu(f, n, c);
      }
      var b;
      if (El)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart';
              break e;
            case 'compositionend':
              O = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              O = 'onCompositionUpdate';
              break e;
          }
          O = void 0;
        }
      else
        On ? kd(e, n) && (O = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (xd &&
          n.locale !== 'ko' &&
          (On || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && On && (b = Sd())
            : ((Ct = c), (kl = 'value' in Ct ? Ct.value : Ct.textContent), (On = !0))),
        (k = pa(u, O)),
        0 < k.length &&
          ((O = new Au(O, e, null, n, c)),
          f.push({ event: O, listeners: k }),
          b ? (O.data = b) : ((b = bd(n)), b !== null && (O.data = b)))),
        (b = vg ? yg(e, n) : wg(e, n)) &&
          ((u = pa(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Au('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = b)));
    }
    Md(f, t);
  });
}
function Ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pa(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a), (a = Mr(e, n)), a != null && r.unshift(Ur(e, a, i)), (a = Mr(e, t)), a != null && r.push(Ur(e, a, i))),
      (e = e.return);
  }
  return r;
}
function Sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yu(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = Mr(n, a)), l != null && o.unshift(Ur(n, l, s)))
        : i || ((l = Mr(n, a)), l != null && o.push(Ur(n, l, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _g = /\r\n?/g,
  Ag = /\u0000|\uFFFD/g;
function qu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      _g,
      `
`
    )
    .replace(Ag, '');
}
function Oi(e, t, n) {
  if (((t = qu(t)), qu(e) !== t && n)) throw Error(C(425));
}
function ma() {}
var gs = null,
  vs = null;
function ys(e, t) {
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
var ws = typeof setTimeout == 'function' ? setTimeout : void 0,
  Mg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Ku = typeof Promise == 'function' ? Promise : void 0,
  zg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Ku < 'u'
      ? function (e) {
          return Ku.resolve(null).then(e).catch(jg);
        }
      : ws;
function jg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Lo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Dr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Dr(t);
}
function Tt(e) {
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
function Qu(e) {
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
var rr = Math.random().toString(36).slice(2),
  Xe = '__reactFiber$' + rr,
  Br = '__reactProps$' + rr,
  lt = '__reactContainer$' + rr,
  Ss = '__reactEvents$' + rr,
  Dg = '__reactListeners$' + rr,
  Fg = '__reactHandles$' + rr;
function Xt(e) {
  var t = e[Xe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[lt] || n[Xe])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Qu(e); e !== null; ) {
          if ((n = e[Xe])) return n;
          e = Qu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function si(e) {
  return (e = e[Xe] || e[lt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ya(e) {
  return e[Br] || null;
}
var xs = [],
  In = -1;
function Vt(e) {
  return { current: e };
}
function H(e) {
  0 > In || ((e.current = xs[In]), (xs[In] = null), In--);
}
function U(e, t) {
  In++, (xs[In] = e.current), (e.current = t);
}
var zt = {},
  he = Vt(zt),
  Ce = Vt(!1),
  sn = zt;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
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
function ha() {
  H(Ce), H(he);
}
function Gu(e, t, n) {
  if (he.current !== zt) throw Error(C(168));
  U(he, t), U(Ce, n);
}
function jd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, bh(e) || 'Unknown', i));
  return X({}, n, r);
}
function ga(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
    (sn = he.current),
    U(he, e),
    U(Ce, Ce.current),
    !0
  );
}
function Xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n ? ((e = jd(e, t, sn)), (r.__reactInternalMemoizedMergedChildContext = e), H(Ce), H(he), U(he, e)) : H(Ce), U(Ce, n);
}
var rt = null,
  qa = !1,
  To = !1;
function Dd(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function $g(e) {
  (qa = !0), Dd(e);
}
function Ut() {
  if (!To && rt !== null) {
    To = !0;
    var e = 0,
      t = V;
    try {
      var n = rt;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (qa = !1);
    } catch (i) {
      throw (rt !== null && (rt = rt.slice(e + 1)), ud(yl, Ut), i);
    } finally {
      (V = t), (To = !1);
    }
  }
  return null;
}
var Rn = [],
  _n = 0,
  va = null,
  ya = 0,
  Ae = [],
  Me = 0,
  ln = null,
  it = 1,
  at = '';
function Kt(e, t) {
  (Rn[_n++] = ya), (Rn[_n++] = va), (va = e), (ya = t);
}
function Fd(e, t, n) {
  (Ae[Me++] = it), (Ae[Me++] = at), (Ae[Me++] = ln), (ln = e);
  var r = it;
  e = at;
  var i = 32 - He(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - He(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (it = (1 << (32 - He(t) + i)) | (n << i) | r),
      (at = a + e);
  } else (it = (1 << a) | (n << i) | r), (at = e);
}
function Ol(e) {
  e.return !== null && (Kt(e, 1), Fd(e, 1, 0));
}
function Nl(e) {
  for (; e === va; ) (va = Rn[--_n]), (Rn[_n] = null), (ya = Rn[--_n]), (Rn[_n] = null);
  for (; e === ln; )
    (ln = Ae[--Me]), (Ae[Me] = null), (at = Ae[--Me]), (Ae[Me] = null), (it = Ae[--Me]), (Ae[Me] = null);
}
var Le = null,
  Ne = null,
  K = !1,
  Be = null;
function $d(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Ne = Tt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ln !== null ? { id: it, overflow: at } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bs(e) {
  if (K) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if (ks(e)) throw Error(C(418));
        t = Tt(n.nextSibling);
        var r = Le;
        t && Ju(e, t) ? $d(r, n) : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Le = e));
      }
    } else {
      if (ks(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (Le = e);
    }
  }
}
function Zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Le = e;
}
function Ni(e) {
  if (e !== Le) return !1;
  if (!K) return Zu(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !ys(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (ks(e)) throw (Vd(), Error(C(418)));
    for (; t; ) $d(e, t), (t = Tt(t.nextSibling));
  }
  if ((Zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ne = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = Le ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function Vd() {
  for (var e = Ne; e; ) e = Tt(e.nextSibling);
}
function Qn() {
  (Ne = Le = null), (K = !1);
}
function Ll(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
var Vg = mt.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
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
    if (typeof e != 'string') throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Li(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(C(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function ec(e) {
  var t = e._init;
  return t(e._payload);
}
function Ud(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; ) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function i(h, p) {
    return (h = At(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function a(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate), m !== null ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m) : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, p, m, S) {
    return p === null || p.tag !== 6 ? ((p = jo(m, h.mode, S)), (p.return = h), p) : ((p = i(p, m)), (p.return = h), p);
  }
  function l(h, p, m, S) {
    var y = m.type;
    return y === Pn
      ? c(h, p, m.props.children, S, m.key)
      : p !== null &&
        (p.elementType === y || (typeof y == 'object' && y !== null && y.$$typeof === St && ec(y) === p.type))
      ? ((S = i(p, m.props)), (S.ref = cr(h, p, m)), (S.return = h), S)
      : ((S = na(m.type, m.key, m.props, null, h.mode, S)), (S.ref = cr(h, p, m)), (S.return = h), S);
  }
  function u(h, p, m, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Do(m, h.mode, S)), (p.return = h), p)
      : ((p = i(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, S, y) {
    return p === null || p.tag !== 7
      ? ((p = an(m, h.mode, S, y)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function f(h, p, m) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = jo('' + p, h.mode, m)), (p.return = h), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case yi:
          return (m = na(p.type, p.key, p.props, null, h.mode, m)), (m.ref = cr(h, null, p)), (m.return = h), m;
        case En:
          return (p = Do(p, h.mode, m)), (p.return = h), p;
        case St:
          var S = p._init;
          return f(h, S(p._payload), m);
      }
      if (vr(p) || ar(p)) return (p = an(p, h.mode, m, null)), (p.return = h), p;
      Li(h, p);
    }
    return null;
  }
  function d(h, p, m, S) {
    var y = p !== null ? p.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number') return y !== null ? null : s(h, p, '' + m, S);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case yi:
          return m.key === y ? l(h, p, m, S) : null;
        case En:
          return m.key === y ? u(h, p, m, S) : null;
        case St:
          return (y = m._init), d(h, p, y(m._payload), S);
      }
      if (vr(m) || ar(m)) return y !== null ? null : c(h, p, m, S, null);
      Li(h, m);
    }
    return null;
  }
  function g(h, p, m, S, y) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number') return (h = h.get(m) || null), s(p, h, '' + S, y);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case yi:
          return (h = h.get(S.key === null ? m : S.key) || null), l(p, h, S, y);
        case En:
          return (h = h.get(S.key === null ? m : S.key) || null), u(p, h, S, y);
        case St:
          var k = S._init;
          return g(h, p, m, k(S._payload), y);
      }
      if (vr(S) || ar(S)) return (h = h.get(m) || null), c(p, h, S, y, null);
      Li(p, S);
    }
    return null;
  }
  function w(h, p, m, S) {
    for (var y = null, k = null, b = p, O = (p = 0), z = null; b !== null && O < m.length; O++) {
      b.index > O ? ((z = b), (b = null)) : (z = b.sibling);
      var _ = d(h, b, m[O], S);
      if (_ === null) {
        b === null && (b = z);
        break;
      }
      e && b && _.alternate === null && t(h, b),
        (p = a(_, p, O)),
        k === null ? (y = _) : (k.sibling = _),
        (k = _),
        (b = z);
    }
    if (O === m.length) return n(h, b), K && Kt(h, O), y;
    if (b === null) {
      for (; O < m.length; O++)
        (b = f(h, m[O], S)), b !== null && ((p = a(b, p, O)), k === null ? (y = b) : (k.sibling = b), (k = b));
      return K && Kt(h, O), y;
    }
    for (b = r(h, b); O < m.length; O++)
      (z = g(b, h, O, m[O], S)),
        z !== null &&
          (e && z.alternate !== null && b.delete(z.key === null ? O : z.key),
          (p = a(z, p, O)),
          k === null ? (y = z) : (k.sibling = z),
          (k = z));
    return (
      e &&
        b.forEach(function (le) {
          return t(h, le);
        }),
      K && Kt(h, O),
      y
    );
  }
  function v(h, p, m, S) {
    var y = ar(m);
    if (typeof y != 'function') throw Error(C(150));
    if (((m = y.call(m)), m == null)) throw Error(C(151));
    for (var k = (y = null), b = p, O = (p = 0), z = null, _ = m.next(); b !== null && !_.done; O++, _ = m.next()) {
      b.index > O ? ((z = b), (b = null)) : (z = b.sibling);
      var le = d(h, b, _.value, S);
      if (le === null) {
        b === null && (b = z);
        break;
      }
      e && b && le.alternate === null && t(h, b),
        (p = a(le, p, O)),
        k === null ? (y = le) : (k.sibling = le),
        (k = le),
        (b = z);
    }
    if (_.done) return n(h, b), K && Kt(h, O), y;
    if (b === null) {
      for (; !_.done; O++, _ = m.next())
        (_ = f(h, _.value, S)), _ !== null && ((p = a(_, p, O)), k === null ? (y = _) : (k.sibling = _), (k = _));
      return K && Kt(h, O), y;
    }
    for (b = r(h, b); !_.done; O++, _ = m.next())
      (_ = g(b, h, O, _.value, S)),
        _ !== null &&
          (e && _.alternate !== null && b.delete(_.key === null ? O : _.key),
          (p = a(_, p, O)),
          k === null ? (y = _) : (k.sibling = _),
          (k = _));
    return (
      e &&
        b.forEach(function (yn) {
          return t(h, yn);
        }),
      K && Kt(h, O),
      y
    );
  }
  function x(h, p, m, S) {
    if (
      (typeof m == 'object' && m !== null && m.type === Pn && m.key === null && (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case yi:
          e: {
            for (var y = m.key, k = p; k !== null; ) {
              if (k.key === y) {
                if (((y = m.type), y === Pn)) {
                  if (k.tag === 7) {
                    n(h, k.sibling), (p = i(k, m.props.children)), (p.return = h), (h = p);
                    break e;
                  }
                } else if (
                  k.elementType === y ||
                  (typeof y == 'object' && y !== null && y.$$typeof === St && ec(y) === k.type)
                ) {
                  n(h, k.sibling), (p = i(k, m.props)), (p.ref = cr(h, k, m)), (p.return = h), (h = p);
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            m.type === Pn
              ? ((p = an(m.props.children, h.mode, S, m.key)), (p.return = h), (h = p))
              : ((S = na(m.type, m.key, m.props, null, h.mode, S)), (S.ref = cr(h, p, m)), (S.return = h), (h = S));
          }
          return o(h);
        case En:
          e: {
            for (k = m.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling), (p = i(p, m.children || [])), (p.return = h), (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Do(m, h.mode, S)), (p.return = h), (h = p);
          }
          return o(h);
        case St:
          return (k = m._init), x(h, p, k(m._payload), S);
      }
      if (vr(m)) return w(h, p, m, S);
      if (ar(m)) return v(h, p, m, S);
      Li(h, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = jo(m, h.mode, S)), (p.return = h), (h = p)),
        o(h))
      : n(h, p);
  }
  return x;
}
var Gn = Ud(!0),
  Bd = Ud(!1),
  wa = Vt(null),
  Sa = null,
  An = null,
  Tl = null;
function Il() {
  Tl = An = Sa = null;
}
function Rl(e) {
  var t = wa.current;
  H(wa), (e._currentValue = t);
}
function Cs(e, t, n) {
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
function Wn(e, t) {
  (Sa = e),
    (Tl = An = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (be = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (Tl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (Sa === null) throw Error(C(308));
      (An = e), (Sa.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var Jt = null;
function _l(e) {
  Jt === null ? (Jt = [e]) : Jt.push(e);
}
function Wd(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), _l(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), ut(e, r);
}
function ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function Al(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hd(e, t) {
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
function ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function It(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), ut(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), _l(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function Gi(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wl(e, n);
  }
}
function tc(e, t) {
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
function xa(e, t, n, r) {
  var i = e.updateQueue;
  xt = !1;
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
              f = X({}, f, d);
              break e;
            case 2:
              xt = !0;
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
    (cn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function nc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(C(191, i));
        i.call(r);
      }
    }
}
var li = {},
  tt = Vt(li),
  Wr = Vt(li),
  Hr = Vt(li);
function Zt(e) {
  if (e === li) throw Error(C(174));
  return e;
}
function Ml(e, t) {
  switch ((U(Hr, t), U(Wr, e), U(tt, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : is(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = is(t, e));
  }
  H(tt), U(tt, t);
}
function Xn() {
  H(tt), H(Wr), H(Hr);
}
function Yd(e) {
  Zt(Hr.current);
  var t = Zt(tt.current),
    n = is(t, e.type);
  t !== n && (U(Wr, e), U(tt, n));
}
function zl(e) {
  Wr.current === e && (H(tt), H(Wr));
}
var Q = Vt(0);
function ka(e) {
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
function jl() {
  for (var e = 0; e < Io.length; e++) Io[e]._workInProgressVersionPrimary = null;
  Io.length = 0;
}
var Xi = mt.ReactCurrentDispatcher,
  Ro = mt.ReactCurrentBatchConfig,
  un = 0,
  G = null,
  ne = null,
  oe = null,
  ba = !1,
  Pr = !1,
  Yr = 0,
  Ug = 0;
function de() {
  throw Error(C(321));
}
function Dl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Fl(e, t, n, r, i, a) {
  if (
    ((un = a),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xi.current = e === null || e.memoizedState === null ? Yg : qg),
    (e = n(r, i)),
    Pr)
  ) {
    a = 0;
    do {
      if (((Pr = !1), (Yr = 0), 25 <= a)) throw Error(C(301));
      (a += 1), (oe = ne = null), (t.updateQueue = null), (Xi.current = Kg), (e = n(r, i));
    } while (Pr);
  }
  if (((Xi.current = Ca), (t = ne !== null && ne.next !== null), (un = 0), (oe = ne = G = null), (ba = !1), t))
    throw Error(C(300));
  return e;
}
function $l() {
  var e = Yr !== 0;
  return (Yr = 0), e;
}
function Ge() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Fe() {
  if (ne === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = oe === null ? G.memoizedState : oe.next;
  if (t !== null) (oe = t), (ne = e);
  else {
    if (e === null) throw Error(C(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function qr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function _o(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ne,
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
      if ((un & c) === c)
        l !== null &&
          (l = l.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? ((s = l = f), (o = r)) : (l = l.next = f), (G.lanes |= c), (cn |= c);
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? (o = r) : (l.next = s),
      qe(r, t.memoizedState) || (be = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (G.lanes |= a), (cn |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ao(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    qe(a, t.memoizedState) || (be = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function qd() {}
function Kd(e, t) {
  var n = G,
    r = Fe(),
    i = t(),
    a = !qe(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (be = !0)),
    (r = r.queue),
    Vl(Xd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Kr(9, Gd.bind(null, n, r, i, t), void 0, null), se === null)) throw Error(C(349));
    un & 30 || Qd(n, t, i);
  }
  return i;
}
function Qd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (G.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jd(t) && Zd(e);
}
function Xd(e, t, n) {
  return n(function () {
    Jd(t) && Zd(e);
  });
}
function Jd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function Zd(e) {
  var t = ut(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function rc(e) {
  var t = Ge();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qr, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = Hg.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Kr(e, t, n, r) {
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
function ep() {
  return Fe().memoizedState;
}
function Ji(e, t, n, r) {
  var i = Ge();
  (G.flags |= e), (i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ka(e, t, n, r) {
  var i = Fe();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (ne !== null) {
    var o = ne.memoizedState;
    if (((a = o.destroy), r !== null && Dl(r, o.deps))) {
      i.memoizedState = Kr(t, n, a, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = Kr(1 | t, n, a, r));
}
function ic(e, t) {
  return Ji(8390656, 8, e, t);
}
function Vl(e, t) {
  return Ka(2048, 8, e, t);
}
function tp(e, t) {
  return Ka(4, 2, e, t);
}
function np(e, t) {
  return Ka(4, 4, e, t);
}
function rp(e, t) {
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
function ip(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Ka(4, 4, rp.bind(null, t, e), n);
}
function Ul() {}
function ap(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Dl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function op(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Dl(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sp(e, t, n) {
  return un & 21
    ? (qe(n, t) || ((n = dd()), (G.lanes |= n), (cn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n));
}
function Bg(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ro.transition;
  Ro.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (Ro.transition = r);
  }
}
function lp() {
  return Fe().memoizedState;
}
function Wg(e, t, n) {
  var r = _t(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), up(e))) cp(t, n);
  else if (((n = Wd(e, t, n, r)), n !== null)) {
    var i = ye();
    Ye(n, e, r, i), fp(n, t, r);
  }
}
function Hg(e, t, n) {
  var r = _t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (up(e)) cp(t, i);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
      try {
        var o = t.lastRenderedState,
          s = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), qe(s, o))) {
          var l = t.interleaved;
          l === null ? ((i.next = i), _l(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wd(e, t, i, r)), n !== null && ((i = ye()), Ye(n, e, r, i), fp(n, t, r));
  }
}
function up(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function cp(e, t) {
  Pr = ba = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function fp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wl(e, n);
  }
}
var Ca = {
    readContext: De,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  Yg = {
    readContext: De,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: ic,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ji(4194308, 4, rp.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ji(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Ge();
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
        (e = e.dispatch = Wg.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: rc,
    useDebugValue: Ul,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = rc(!1),
        t = e[0];
      return (e = Bg.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = Ge();
      if (K) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(C(349));
        un & 30 || Qd(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        ic(Xd.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Kr(9, Gd.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = se.identifierPrefix;
      if (K) {
        var n = at,
          r = it;
        (n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Yr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Ug++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qg = {
    readContext: De,
    useCallback: ap,
    useContext: De,
    useEffect: Vl,
    useImperativeHandle: ip,
    useInsertionEffect: tp,
    useLayoutEffect: np,
    useMemo: op,
    useReducer: _o,
    useRef: ep,
    useState: function () {
      return _o(qr);
    },
    useDebugValue: Ul,
    useDeferredValue: function (e) {
      var t = Fe();
      return sp(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = _o(qr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: qd,
    useSyncExternalStore: Kd,
    useId: lp,
    unstable_isNewReconciler: !1,
  },
  Kg = {
    readContext: De,
    useCallback: ap,
    useContext: De,
    useEffect: Vl,
    useImperativeHandle: ip,
    useInsertionEffect: tp,
    useLayoutEffect: np,
    useMemo: op,
    useReducer: Ao,
    useRef: ep,
    useState: function () {
      return Ao(qr);
    },
    useDebugValue: Ul,
    useDeferredValue: function (e) {
      var t = Fe();
      return ne === null ? (t.memoizedState = e) : sp(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Ao(qr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: qd,
    useSyncExternalStore: Kd,
    useId: lp,
    unstable_isNewReconciler: !1,
  };
function Ve(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Es(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = _t(e),
      a = ot(r, i);
    (a.payload = t), n != null && (a.callback = n), (t = It(e, a, i)), t !== null && (Ye(t, e, i, r), Gi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = _t(e),
      a = ot(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = It(e, a, i)),
      t !== null && (Ye(t, e, i, r), Gi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = _t(e),
      i = ot(n, r);
    (i.tag = 2), t != null && (i.callback = t), (t = It(e, i, r)), t !== null && (Ye(t, e, r, n), Gi(t, e, r));
  },
};
function ac(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$r(n, r) || !$r(i, a)
      : !0
  );
}
function dp(e, t, n) {
  var r = !1,
    i = zt,
    a = t.contextType;
  return (
    typeof a == 'object' && a !== null
      ? (a = De(a))
      : ((i = Ee(t) ? sn : he.current), (r = t.contextTypes), (a = (r = r != null) ? Kn(e, i) : zt)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Qa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function oc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Qa.enqueueReplaceState(t, t.state, null);
}
function Ps(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Al(e);
  var a = t.contextType;
  typeof a == 'object' && a !== null ? (i.context = De(a)) : ((a = Ee(t) ? sn : he.current), (i.context = Kn(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == 'function' && (Es(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && Qa.enqueueReplaceState(i, i.state, null),
      xa(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Jn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += kh(r)), (r = r.return);
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
function Mo(e, t, n) {
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
var Qg = typeof WeakMap == 'function' ? WeakMap : Map;
function pp(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pa || ((Pa = !0), (js = r)), Os(e, t);
    }),
    n
  );
}
function mp(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3);
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
        Os(e, t), typeof r != 'function' && (Rt === null ? (Rt = new Set([this])) : Rt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function sc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = uv.bind(null, e, t, n)), t.then(e, e));
}
function lc(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function uc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = ot(-1, 1)), (t.tag = 2), It(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gg = mt.ReactCurrentOwner,
  be = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Bd(t, null, n, r) : Gn(t, e.child, n, r);
}
function cc(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    Wn(t, i),
    (r = Fl(e, t, n, r, a, i)),
    (n = $l()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), ct(e, t, i))
      : (K && n && Ol(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function fc(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == 'function' &&
      !Gl(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), hp(e, t, a, r, i))
      : ((e = na(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : $r), n(o, r) && e.ref === t.ref)) return ct(e, t, i);
  }
  return (t.flags |= 1), (e = At(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function hp(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if ($r(a, r) && e.ref === t.ref)
      if (((be = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0)) e.flags & 131072 && (be = !0);
      else return (t.lanes = e.lanes), ct(e, t, i);
  }
  return Ns(e, t, n, r, i);
}
function gp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), U(zn, Oe), (Oe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          U(zn, Oe),
          (Oe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        U(zn, Oe),
        (Oe |= r);
    }
  else a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), U(zn, Oe), (Oe |= r);
  return ve(e, t, i, n), t.child;
}
function vp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Ns(e, t, n, r, i) {
  var a = Ee(n) ? sn : he.current;
  return (
    (a = Kn(t, a)),
    Wn(t, i),
    (n = Fl(e, t, n, r, a, i)),
    (r = $l()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), ct(e, t, i))
      : (K && r && Ol(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function dc(e, t, n, r, i) {
  if (Ee(n)) {
    var a = !0;
    ga(t);
  } else a = !1;
  if ((Wn(t, i), t.stateNode === null)) Zi(e, t), dp(t, n, r), Ps(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var l = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null ? (u = De(u)) : ((u = Ee(n) ? sn : he.current), (u = Kn(t, u)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && oc(t, o, r, u)),
      (xt = !1);
    var d = t.memoizedState;
    (o.state = d),
      xa(t, r, o, i),
      (l = t.memoizedState),
      s !== r || d !== l || Ce.current || xt
        ? (typeof c == 'function' && (Es(t, n, c, r), (l = t.memoizedState)),
          (s = xt || ac(t, n, s, r, d, l, u))
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
      Hd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ve(t.type, s)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null ? (l = De(l)) : ((l = Ee(n) ? sn : he.current), (l = Kn(t, l)));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== l) && oc(t, o, r, l)),
      (xt = !1),
      (d = t.memoizedState),
      (o.state = d),
      xa(t, r, o, i);
    var w = t.memoizedState;
    s !== f || d !== w || Ce.current || xt
      ? (typeof g == 'function' && (Es(t, n, g, r), (w = t.memoizedState)),
        (u = xt || ac(t, n, u, r, d, w, l) || !1)
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
  return Ls(e, t, n, r, a, i);
}
function Ls(e, t, n, r, i, a) {
  vp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Xu(t, n, !1), ct(e, t, a);
  (r = t.stateNode), (Gg.current = t);
  var s = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o ? ((t.child = Gn(t, e.child, null, a)), (t.child = Gn(t, null, s, a))) : ve(e, t, s, a),
    (t.memoizedState = r.state),
    i && Xu(t, n, !0),
    t.child
  );
}
function yp(e) {
  var t = e.stateNode;
  t.pendingContext ? Gu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gu(e, t.context, !1),
    Ml(e, t.containerInfo);
}
function pc(e, t, n, r, i) {
  return Qn(), Ll(i), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var Ts = { dehydrated: null, treeContext: null, retryLane: 0 };
function Is(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wp(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    U(Q, i & 1),
    e === null)
  )
    return (
      bs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && a !== null ? ((a.childLanes = 0), (a.pendingProps = o)) : (a = Ja(o, r, 0, null)),
              (e = an(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Is(n)),
              (t.memoizedState = Ts),
              e)
            : Bl(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null))) return Xg(e, t, o, r, s, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = At(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (a = At(s, a)) : ((a = an(a, o, n, null)), (a.flags |= 2)),
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
      (t.memoizedState = Ts),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = At(a, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bl(e, t) {
  return (t = Ja({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ti(e, t, n, r) {
  return (
    r !== null && Ll(r),
    Gn(t, e.child, null, n),
    (e = Bl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Xg(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Mo(Error(C(422)))), Ti(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = Ja({ mode: 'visible', children: r.children }, i, 0, null)),
        (a = an(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && Gn(t, e.child, null, o),
        (t.child.memoizedState = Is(o)),
        (t.memoizedState = Ts),
        a);
  if (!(t.mode & 1)) return Ti(e, t, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (a = Error(C(419))), (r = Mo(a, r, void 0)), Ti(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), be || s)) {
    if (((r = se), r !== null)) {
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
        i !== 0 && i !== a.retryLane && ((a.retryLane = i), ut(e, i), Ye(r, e, i, -1));
    }
    return Ql(), (r = Mo(Error(C(421)))), Ti(e, t, o, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = cv.bind(null, e)), (i._reactRetry = t), null)
    : ((e = a.treeContext),
      (Ne = Tt(i.nextSibling)),
      (Le = t),
      (K = !0),
      (Be = null),
      e !== null && ((Ae[Me++] = it), (Ae[Me++] = at), (Ae[Me++] = ln), (it = e.id), (at = e.overflow), (ln = t)),
      (t = Bl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cs(e.return, t, n);
}
function zo(e, t, n, r, i) {
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
function Sp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((ve(e, t, r.children, n), (r = Q.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mc(e, n, t);
        else if (e.tag === 19) mc(e, n, t);
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
  if ((U(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && ka(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          zo(t, !1, i, n, a);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ka(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        zo(t, !0, n, null, a);
        break;
      case 'together':
        zo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (cn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = At(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Jg(e, t, n) {
  switch (t.tag) {
    case 3:
      yp(t), Qn();
      break;
    case 5:
      Yd(t);
      break;
    case 1:
      Ee(t.type) && ga(t);
      break;
    case 4:
      Ml(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      U(wa, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wp(e, t, n)
          : (U(Q, Q.current & 1), (e = ct(e, t, n)), e !== null ? e.sibling : null);
      U(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gp(e, t, n);
  }
  return ct(e, t, n);
}
var xp, Rs, kp, bp;
xp = function (e, t) {
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
Rs = function () {};
kp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Zt(tt.current);
    var a = null;
    switch (n) {
      case 'input':
        (i = es(e, i)), (r = es(e, r)), (a = []);
        break;
      case 'select':
        (i = X({}, i, { value: void 0 })), (r = X({}, r, { value: void 0 })), (a = []);
        break;
      case 'textarea':
        (i = rs(e, i)), (r = rs(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ma);
    }
    as(n, r);
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
            (_r.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
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
              (_r.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && B('scroll', e), a || s === l || (a = []))
                : (a = a || []).push(u, l));
    }
    n && (a = a || []).push('style', n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
bp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fr(e, t) {
  if (!K)
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
function pe(e) {
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
function Zg(e, t, n) {
  var r = t.pendingProps;
  switch ((Nl(t), t.tag)) {
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
      return pe(t), null;
    case 1:
      return Ee(t.type) && ha(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xn(),
        H(Ce),
        H(he),
        jl(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ni(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Be !== null && ($s(Be), (Be = null)))),
        Rs(e, t),
        pe(t),
        null
      );
    case 5:
      zl(t);
      var i = Zt(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kp(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return pe(t), null;
        }
        if (((e = Zt(tt.current)), Ni(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[Xe] = t), (r[Br] = a), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              B('cancel', r), B('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              B('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < wr.length; i++) B(wr[i], r);
              break;
            case 'source':
              B('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              B('error', r), B('load', r);
              break;
            case 'details':
              B('toggle', r);
              break;
            case 'input':
              bu(r, a), B('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!a.multiple }), B('invalid', r);
              break;
            case 'textarea':
              Eu(r, a), B('invalid', r);
          }
          as(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var s = a[o];
              o === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (a.suppressHydrationWarning !== !0 && Oi(r.textContent, s, e), (i = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (a.suppressHydrationWarning !== !0 && Oi(r.textContent, s, e), (i = ['children', '' + s]))
                : _r.hasOwnProperty(o) && s != null && o === 'onScroll' && B('scroll', r);
            }
          switch (n) {
            case 'input':
              wi(r), Cu(r, a, !0);
              break;
            case 'textarea':
              wi(r), Pu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof a.onClick == 'function' && (r.onclick = ma);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Xf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Xe] = t),
            (e[Br] = r),
            xp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = os(n, r)), n)) {
              case 'dialog':
                B('cancel', e), B('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                B('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < wr.length; i++) B(wr[i], e);
                i = r;
                break;
              case 'source':
                B('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                B('error', e), B('load', e), (i = r);
                break;
              case 'details':
                B('toggle', e), (i = r);
                break;
              case 'input':
                bu(e, r), (i = es(e, r)), B('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = X({}, r, { value: void 0 })), B('invalid', e);
                break;
              case 'textarea':
                Eu(e, r), (i = rs(e, r)), B('invalid', e);
                break;
              default:
                i = r;
            }
            as(n, i), (s = i);
            for (a in s)
              if (s.hasOwnProperty(a)) {
                var l = s[a];
                a === 'style'
                  ? ed(e, l)
                  : a === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Jf(e, l))
                  : a === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Ar(e, l)
                    : typeof l == 'number' && Ar(e, '' + l)
                  : a !== 'suppressContentEditableWarning' &&
                    a !== 'suppressHydrationWarning' &&
                    a !== 'autoFocus' &&
                    (_r.hasOwnProperty(a)
                      ? l != null && a === 'onScroll' && B('scroll', e)
                      : l != null && pl(e, a, l, o));
              }
            switch (n) {
              case 'input':
                wi(e), Cu(e, r, !1);
                break;
              case 'textarea':
                wi(e), Pu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Mt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? $n(e, !!r.multiple, a, !1)
                    : r.defaultValue != null && $n(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = ma);
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
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) bp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166));
        if (((n = Zt(Hr.current)), Zt(tt.current), Ni(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[Xe] = t), (a = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Oi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Xe] = t), (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (H(Q), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Ne !== null && t.mode & 1 && !(t.flags & 128)) Vd(), Qn(), (t.flags |= 98560), (a = !1);
        else if (((a = Ni(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(C(318));
            if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a)) throw Error(C(317));
            a[Xe] = t;
          } else Qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (a = !1);
        } else Be !== null && ($s(Be), (Be = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || Q.current & 1 ? re === 0 && (re = 3) : Ql())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return Xn(), Rs(e, t), e === null && Vr(t.stateNode.containerInfo), pe(t), null;
    case 10:
      return Rl(t.type._context), pe(t), null;
    case 17:
      return Ee(t.type) && ha(), pe(t), null;
    case 19:
      if ((H(Q), (a = t.memoizedState), a === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) fr(a, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ka(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    fr(a, !1),
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
                return U(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null && ee() > Zn && ((t.flags |= 128), (r = !0), fr(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ka(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(a, !0),
              a.tail === null && a.tailMode === 'hidden' && !o.alternate && !K)
            )
              return pe(t), null;
          } else
            2 * ee() - a.renderingStartTime > Zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last), n !== null ? (n.sibling = o) : (t.child = o), (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = ee()),
          (t.sibling = null),
          (n = Q.current),
          U(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Kl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Oe & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function ev(e, t) {
  switch ((Nl(t), t.tag)) {
    case 1:
      return Ee(t.type) && ha(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Xn(), H(Ce), H(he), jl(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return zl(t), null;
    case 13:
      if ((H(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Qn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return H(Q), null;
    case 4:
      return Xn(), null;
    case 10:
      return Rl(t.type._context), null;
    case 22:
    case 23:
      return Kl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ii = !1,
  me = !1,
  tv = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function _s(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var hc = !1;
function nv(e, t) {
  if (((gs = fa), (e = Nd()), Pl(e))) {
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
  for (vs = { focusedElem: e, selectionRange: n }, fa = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
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
                    p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ve(t.type, v), x);
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (S) {
          J(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (w = hc), (hc = !1), w;
}
function Or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && _s(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ga(e, t) {
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
function As(e) {
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
function Cp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[Xe], delete t[Br], delete t[Ss], delete t[Dg], delete t[Fg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ep(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ep(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ms(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ma));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ms(e, t, n), e = e.sibling; e !== null; ) Ms(e, t, n), (e = e.sibling);
}
function zs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zs(e, t, n), e = e.sibling; e !== null; ) zs(e, t, n), (e = e.sibling);
}
var ue = null,
  Ue = !1;
function yt(e, t, n) {
  for (n = n.child; n !== null; ) Pp(e, t, n), (n = n.sibling);
}
function Pp(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == 'function')
    try {
      et.onCommitFiberUnmount(Ua, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Mn(n, t);
    case 6:
      var r = ue,
        i = Ue;
      (ue = null),
        yt(e, t, n),
        (ue = r),
        (Ue = i),
        ue !== null &&
          (Ue
            ? ((e = ue), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Ue
          ? ((e = ue), (n = n.stateNode), e.nodeType === 8 ? Lo(e.parentNode, n) : e.nodeType === 1 && Lo(e, n), Dr(e))
          : Lo(ue, n.stateNode));
      break;
    case 4:
      (r = ue), (i = Ue), (ue = n.stateNode.containerInfo), (Ue = !0), yt(e, t, n), (ue = r), (Ue = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!me && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag), o !== void 0 && (a & 2 || a & 4) && _s(n, t, o), (i = i.next);
        } while (i !== r);
      }
      yt(e, t, n);
      break;
    case 1:
      if (!me && (Mn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (s) {
          J(n, t, s);
        }
      yt(e, t, n);
      break;
    case 21:
      yt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((me = (r = me) || n.memoizedState !== null), yt(e, t, n), (me = r)) : yt(e, t, n);
      break;
    default:
      yt(e, t, n);
  }
}
function vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tv()),
      t.forEach(function (r) {
        var i = fv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function $e(e, t) {
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
              (ue = s.stateNode), (Ue = !1);
              break e;
            case 3:
              (ue = s.stateNode.containerInfo), (Ue = !0);
              break e;
            case 4:
              (ue = s.stateNode.containerInfo), (Ue = !0);
              break e;
          }
          s = s.return;
        }
        if (ue === null) throw Error(C(160));
        Pp(a, o, i), (ue = null), (Ue = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        J(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Op(t, e), (t = t.sibling);
}
function Op(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), Qe(e), r & 4)) {
        try {
          Or(3, e, e.return), Ga(3, e);
        } catch (v) {
          J(e, e.return, v);
        }
        try {
          Or(5, e, e.return);
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 1:
      $e(t, e), Qe(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (($e(t, e), Qe(e), r & 512 && n !== null && Mn(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          Ar(i, '');
        } catch (v) {
          J(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && a.type === 'radio' && a.name != null && Qf(i, a), os(s, o);
            var u = os(s, a);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === 'style'
                ? ed(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? Jf(i, f)
                : c === 'children'
                ? Ar(i, f)
                : pl(i, c, f, u);
            }
            switch (s) {
              case 'input':
                ts(i, a);
                break;
              case 'textarea':
                Gf(i, a);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var g = a.value;
                g != null
                  ? $n(i, !!a.multiple, g, !1)
                  : d !== !!a.multiple &&
                    (a.defaultValue != null
                      ? $n(i, !!a.multiple, a.defaultValue, !0)
                      : $n(i, !!a.multiple, a.multiple ? [] : '', !1));
            }
            i[Br] = a;
          } catch (v) {
            J(e, e.return, v);
          }
      }
      break;
    case 6:
      if (($e(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 3:
      if (($e(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Dr(t.containerInfo);
        } catch (v) {
          J(e, e.return, v);
        }
      break;
    case 4:
      $e(t, e), Qe(e);
      break;
    case 13:
      $e(t, e),
        Qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a || (i.alternate !== null && i.alternate.memoizedState !== null) || (Yl = ee())),
        r & 4 && vc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), $e(t, e), (me = u)) : $e(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Or(4, d, d.return);
                  break;
                case 1:
                  Mn(d, d.return);
                  var w = d.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r), (w.props = t.memoizedProps), (w.state = t.memoizedState), w.componentWillUnmount();
                    } catch (v) {
                      J(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Mn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    wc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (L = g)) : wc(f);
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
                      (s.style.display = Zf('display', o)));
              } catch (v) {
                J(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (v) {
                J(e, e.return, v);
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
      $e(t, e), Qe(e), r & 4 && vc(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ep(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ar(i, ''), (r.flags &= -33));
          var a = gc(e);
          zs(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = gc(e);
          Ms(e, s, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (l) {
      J(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rv(e, t, n) {
  (L = e), Np(e);
}
function Np(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ii;
      if (!o) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || me;
        s = Ii;
        var u = me;
        if (((Ii = o), (me = l) && !u))
          for (L = i; L !== null; )
            (o = L),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null ? Sc(i) : l !== null ? ((l.return = o), (L = l)) : Sc(i);
        for (; a !== null; ) (L = a), Np(a), (a = a.sibling);
        (L = i), (Ii = s), (me = u);
      }
      yc(e);
    } else i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (L = a)) : yc(e);
  }
}
function yc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Ga(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var a = t.updateQueue;
              a !== null && nc(t, a, r);
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
                nc(t, o, n);
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
                    f !== null && Dr(f);
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
              throw Error(C(163));
          }
        me || (t.flags & 512 && As(t));
      } catch (d) {
        J(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function wc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Sc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ga(4, t);
          } catch (l) {
            J(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              J(t, i, l);
            }
          }
          var a = t.return;
          try {
            As(t);
          } catch (l) {
            J(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            As(t);
          } catch (l) {
            J(t, o, l);
          }
      }
    } catch (l) {
      J(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (L = s);
      break;
    }
    L = t.return;
  }
}
var iv = Math.ceil,
  Ea = mt.ReactCurrentDispatcher,
  Wl = mt.ReactCurrentOwner,
  je = mt.ReactCurrentBatchConfig,
  j = 0,
  se = null,
  te = null,
  ce = 0,
  Oe = 0,
  zn = Vt(0),
  re = 0,
  Qr = null,
  cn = 0,
  Xa = 0,
  Hl = 0,
  Nr = null,
  ke = null,
  Yl = 0,
  Zn = 1 / 0,
  nt = null,
  Pa = !1,
  js = null,
  Rt = null,
  Ri = !1,
  Et = null,
  Oa = 0,
  Lr = 0,
  Ds = null,
  ea = -1,
  ta = 0;
function ye() {
  return j & 6 ? ee() : ea !== -1 ? ea : (ea = ee());
}
function _t(e) {
  return e.mode & 1
    ? j & 2 && ce !== 0
      ? ce & -ce
      : Vg.transition !== null
      ? (ta === 0 && (ta = dd()), ta)
      : ((e = V), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wd(e.type))), e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (Ds = null), Error(C(185)));
  ai(e, n, r),
    (!(j & 2) || e !== se) &&
      (e === se && (!(j & 2) && (Xa |= n), re === 4 && bt(e, ce)),
      Pe(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((Zn = ee() + 500), qa && Ut()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Vh(e, t);
  var r = ca(e, e === se ? ce : 0);
  if (r === 0) n !== null && Lu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lu(n), t === 1))
      e.tag === 0 ? $g(xc.bind(null, e)) : Dd(xc.bind(null, e)),
        zg(function () {
          !(j & 6) && Ut();
        }),
        (n = null);
    else {
      switch (pd(r)) {
        case 1:
          n = yl;
          break;
        case 4:
          n = cd;
          break;
        case 16:
          n = ua;
          break;
        case 536870912:
          n = fd;
          break;
        default:
          n = ua;
      }
      n = zp(n, Lp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lp(e, t) {
  if (((ea = -1), (ta = 0), j & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = ca(e, e === se ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Na(e, r);
  else {
    t = r;
    var i = j;
    j |= 2;
    var a = Ip();
    (se !== e || ce !== t) && ((nt = null), (Zn = ee() + 500), rn(e, t));
    do
      try {
        sv();
        break;
      } catch (s) {
        Tp(e, s);
      }
    while (!0);
    Il(), (Ea.current = a), (j = i), te !== null ? (t = 0) : ((se = null), (ce = 0), (t = re));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = fs(e)), i !== 0 && ((r = i), (t = Fs(e, i)))), t === 1))
      throw ((n = Qr), rn(e, 0), bt(e, r), Pe(e, ee()), n);
    if (t === 6) bt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !av(i) &&
          ((t = Na(e, r)), t === 2 && ((a = fs(e)), a !== 0 && ((r = a), (t = Fs(e, a)))), t === 1))
      )
        throw ((n = Qr), rn(e, 0), bt(e, r), Pe(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Qt(e, ke, nt);
          break;
        case 3:
          if ((bt(e, r), (r & 130023424) === r && ((t = Yl + 500 - ee()), 10 < t))) {
            if (ca(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ws(Qt.bind(null, e, ke, nt), t);
            break;
          }
          Qt(e, ke, nt);
          break;
        case 4:
          if ((bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - He(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = ee() - r),
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
                : 1960 * iv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ws(Qt.bind(null, e, ke, nt), r);
            break;
          }
          Qt(e, ke, nt);
          break;
        case 5:
          Qt(e, ke, nt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Pe(e, ee()), e.callbackNode === n ? Lp.bind(null, e) : null;
}
function Fs(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    (e = Na(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && $s(t)),
    e
  );
}
function $s(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function av(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!qe(a(), i)) return !1;
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
function bt(e, t) {
  for (t &= ~Hl, t &= ~Xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - He(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xc(e) {
  if (j & 6) throw Error(C(327));
  Hn();
  var t = ca(e, 0);
  if (!(t & 1)) return Pe(e, ee()), null;
  var n = Na(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fs(e);
    r !== 0 && ((t = r), (n = Fs(e, r)));
  }
  if (n === 1) throw ((n = Qr), rn(e, 0), bt(e, t), Pe(e, ee()), n);
  if (n === 6) throw Error(C(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Qt(e, ke, nt), Pe(e, ee()), null;
}
function ql(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((Zn = ee() + 500), qa && Ut());
  }
}
function fn(e) {
  Et !== null && Et.tag === 0 && !(j & 6) && Hn();
  var t = j;
  j |= 1;
  var n = je.transition,
    r = V;
  try {
    if (((je.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), (je.transition = n), (j = t), !(j & 6) && Ut();
  }
}
function Kl() {
  (Oe = zn.current), H(zn);
}
function rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Mg(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Nl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ha();
          break;
        case 3:
          Xn(), H(Ce), H(he), jl();
          break;
        case 5:
          zl(r);
          break;
        case 4:
          Xn();
          break;
        case 13:
          H(Q);
          break;
        case 19:
          H(Q);
          break;
        case 10:
          Rl(r.type._context);
          break;
        case 22:
        case 23:
          Kl();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (te = e = At(e.current, null)),
    (ce = Oe = t),
    (re = 0),
    (Qr = null),
    (Hl = Xa = cn = 0),
    (ke = Nr = null),
    Jt !== null)
  ) {
    for (t = 0; t < Jt.length; t++)
      if (((n = Jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Jt = null;
  }
  return e;
}
function Tp(e, t) {
  do {
    var n = te;
    try {
      if ((Il(), (Xi.current = Ca), ba)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ba = !1;
      }
      if (((un = 0), (oe = ne = G = null), (Pr = !1), (Yr = 0), (Wl.current = null), n === null || n.return === null)) {
        (re = 1), (Qr = t), (te = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          s = n,
          l = t;
        if (((t = ce), (s.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
          var u = l,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue), (c.memoizedState = d.memoizedState), (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = lc(o);
          if (g !== null) {
            (g.flags &= -257), uc(g, o, s, a, t), g.mode & 1 && sc(a, u, t), (t = g), (l = u);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              sc(a, u, t), Ql();
              break e;
            }
            l = Error(C(426));
          }
        } else if (K && s.mode & 1) {
          var x = lc(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), uc(x, o, s, a, t), Ll(Jn(l, s));
            break e;
          }
        }
        (a = l = Jn(l, s)), re !== 4 && (re = 2), Nr === null ? (Nr = [a]) : Nr.push(a), (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var h = pp(a, l, t);
              tc(a, h);
              break e;
            case 1:
              s = l;
              var p = a.type,
                m = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (m !== null && typeof m.componentDidCatch == 'function' && (Rt === null || !Rt.has(m))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var S = mp(a, s, t);
                tc(a, S);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      _p(n);
    } catch (y) {
      (t = y), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ip() {
  var e = Ea.current;
  return (Ea.current = Ca), e === null ? Ca : e;
}
function Ql() {
  (re === 0 || re === 3 || re === 2) && (re = 4), se === null || (!(cn & 268435455) && !(Xa & 268435455)) || bt(se, ce);
}
function Na(e, t) {
  var n = j;
  j |= 2;
  var r = Ip();
  (se !== e || ce !== t) && ((nt = null), rn(e, t));
  do
    try {
      ov();
      break;
    } catch (i) {
      Tp(e, i);
    }
  while (!0);
  if ((Il(), (j = n), (Ea.current = r), te !== null)) throw Error(C(261));
  return (se = null), (ce = 0), re;
}
function ov() {
  for (; te !== null; ) Rp(te);
}
function sv() {
  for (; te !== null && !Rh(); ) Rp(te);
}
function Rp(e) {
  var t = Mp(e.alternate, e, Oe);
  (e.memoizedProps = e.pendingProps), t === null ? _p(e) : (te = t), (Wl.current = null);
}
function _p(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ev(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (re = 6), (te = null);
        return;
      }
    } else if (((n = Zg(n, t, Oe)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Qt(e, t, n) {
  var r = V,
    i = je.transition;
  try {
    (je.transition = null), (V = 1), lv(e, t, n, r);
  } finally {
    (je.transition = i), (V = r);
  }
  return null;
}
function lv(e, t, n, r) {
  do Hn();
  while (Et !== null);
  if (j & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (Uh(e, a),
    e === se && ((te = se = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ri ||
      ((Ri = !0),
      zp(ua, function () {
        return Hn(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = je.transition), (je.transition = null);
    var o = V;
    V = 1;
    var s = j;
    (j |= 4),
      (Wl.current = null),
      nv(e, n),
      Op(n, e),
      Ng(vs),
      (fa = !!gs),
      (vs = gs = null),
      (e.current = n),
      rv(n),
      _h(),
      (j = s),
      (V = o),
      (je.transition = a);
  } else e.current = n;
  if (
    (Ri && ((Ri = !1), (Et = e), (Oa = i)),
    (a = e.pendingLanes),
    a === 0 && (Rt = null),
    zh(n.stateNode),
    Pe(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Pa) throw ((Pa = !1), (e = js), (js = null), e);
  return (
    Oa & 1 && e.tag !== 0 && Hn(),
    (a = e.pendingLanes),
    a & 1 ? (e === Ds ? Lr++ : ((Lr = 0), (Ds = e))) : (Lr = 0),
    Ut(),
    null
  );
}
function Hn() {
  if (Et !== null) {
    var e = pd(Oa),
      t = je.transition,
      n = V;
    try {
      if (((je.transition = null), (V = 16 > e ? 16 : e), Et === null)) var r = !1;
      else {
        if (((e = Et), (Et = null), (Oa = 0), j & 6)) throw Error(C(331));
        var i = j;
        for (j |= 4, L = e.current; L !== null; ) {
          var a = L,
            o = a.child;
          if (L.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Or(8, c, a);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        g = c.return;
                      if ((Cp(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (L = d);
                        break;
                      }
                      L = g;
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
              L = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (L = o);
          else
            e: for (; L !== null; ) {
              if (((a = L), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Or(9, a, a.return);
                }
              var h = a.sibling;
              if (h !== null) {
                (h.return = a.return), (L = h);
                break e;
              }
              L = a.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          o = L;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (L = m);
          else
            e: for (o = p; L !== null; ) {
              if (((s = L), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ga(9, s);
                  }
                } catch (y) {
                  J(s, s.return, y);
                }
              if (s === o) {
                L = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (L = S);
                break e;
              }
              L = s.return;
            }
        }
        if (((j = i), Ut(), et && typeof et.onPostCommitFiberRoot == 'function'))
          try {
            et.onPostCommitFiberRoot(Ua, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), (je.transition = t);
    }
  }
  return !1;
}
function kc(e, t, n) {
  (t = Jn(n, t)), (t = pp(e, t, 1)), (e = It(e, t, 1)), (t = ye()), e !== null && (ai(e, 1, t), Pe(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) kc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Rt === null || !Rt.has(r)))
        ) {
          (e = Jn(n, e)), (e = mp(t, e, 1)), (t = It(t, e, 1)), (e = ye()), t !== null && (ai(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function uv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ce & n) === n &&
      (re === 4 || (re === 3 && (ce & 130023424) === ce && 500 > ee() - Yl) ? rn(e, 0) : (Hl |= n)),
    Pe(e, t);
}
function Ap(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ki), (ki <<= 1), !(ki & 130023424) && (ki = 4194304)) : (t = 1));
  var n = ye();
  (e = ut(e, t)), e !== null && (ai(e, t, n), Pe(e, n));
}
function cv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ap(e, n);
}
function fv(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), Ap(e, n);
}
var Mp;
Mp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (be = !1), Jg(e, t, n);
      be = !!(e.flags & 131072);
    }
  else (be = !1), K && t.flags & 1048576 && Fd(t, ya, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Zi(e, t), (e = t.pendingProps);
      var i = Kn(t, he.current);
      Wn(t, n), (i = Fl(null, t, r, e, i, n));
      var a = $l();
      return (
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((a = !0), ga(t)) : (a = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Al(t),
            (i.updater = Qa),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ps(t, r, e, n),
            (t = Ls(null, t, r, !0, a, n)))
          : ((t.tag = 0), K && a && Ol(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = pv(r)),
          (e = Ve(r, e)),
          i)
        ) {
          case 0:
            t = Ns(null, t, r, e, n);
            break e;
          case 1:
            t = dc(null, t, r, e, n);
            break e;
          case 11:
            t = cc(null, t, r, e, n);
            break e;
          case 14:
            t = fc(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ve(r, i)), Ns(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ve(r, i)), dc(e, t, r, i, n);
    case 3:
      e: {
        if ((yp(t), e === null)) throw Error(C(387));
        (r = t.pendingProps), (a = t.memoizedState), (i = a.element), Hd(e, t), xa(t, r, null, n);
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
            (i = Jn(Error(C(423)), t)), (t = pc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Jn(Error(C(424)), t)), (t = pc(e, t, r, n, i));
            break e;
          } else
            for (
              Ne = Tt(t.stateNode.containerInfo.firstChild),
                Le = t,
                K = !0,
                Be = null,
                n = Bd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qn(), r === i)) {
            t = ct(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yd(t),
        e === null && bs(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ys(r, i) ? (o = null) : a !== null && ys(r, a) && (t.flags |= 32),
        vp(e, t),
        ve(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && bs(t), null;
    case 13:
      return wp(e, t, n);
    case 4:
      return (
        Ml(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ve(r, i)), cc(e, t, r, i, n);
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          U(wa, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (qe(a.value, o)) {
            if (a.children === i.children && !Ce.current) {
              t = ct(e, t, n);
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
                      (l = ot(-1, n & -n)), (l.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
                      }
                    }
                    (a.lanes |= n), (l = a.alternate), l !== null && (l.lanes |= n), Cs(a.return, n, t), (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(C(341));
                (o.lanes |= n), (s = o.alternate), s !== null && (s.lanes |= n), Cs(o, n, t), (o = a.sibling);
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
        ve(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (i = De(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = Ve(r, t.pendingProps)), (i = Ve(r.type, i)), fc(e, t, r, i, n);
    case 15:
      return hp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        Zi(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), ga(t)) : (e = !1),
        Wn(t, n),
        dp(t, r, i),
        Ps(t, r, i, n),
        Ls(null, t, r, !0, e, n)
      );
    case 19:
      return Sp(e, t, n);
    case 22:
      return gp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function zp(e, t) {
  return ud(e, t);
}
function dv(e, t, n, r) {
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
function ze(e, t, n, r) {
  return new dv(e, t, n, r);
}
function Gl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pv(e) {
  if (typeof e == 'function') return Gl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hl)) return 11;
    if (e === gl) return 14;
  }
  return 2;
}
function At(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
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
function na(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Gl(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Pn:
        return an(n.children, i, a, t);
      case ml:
        (o = 8), (i |= 8);
        break;
      case Go:
        return (e = ze(12, n, t, i | 2)), (e.elementType = Go), (e.lanes = a), e;
      case Xo:
        return (e = ze(13, n, t, i)), (e.elementType = Xo), (e.lanes = a), e;
      case Jo:
        return (e = ze(19, n, t, i)), (e.elementType = Jo), (e.lanes = a), e;
      case Yf:
        return Ja(n, i, a, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Wf:
              o = 10;
              break e;
            case Hf:
              o = 9;
              break e;
            case hl:
              o = 11;
              break e;
            case gl:
              o = 14;
              break e;
            case St:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ''));
    }
  return (t = ze(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t;
}
function an(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function Ja(e, t, n, r) {
  return (e = ze(22, e, r, t)), (e.elementType = Yf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function jo(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function Do(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function mv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yo(0)),
    (this.expirationTimes = yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Xl(e, t, n, r, i, a, o, s, l) {
  return (
    (e = new mv(e, t, n, s, l)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = ze(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Al(a),
    e
  );
}
function hv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: En, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function jp(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(C(170));
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
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return jd(e, n, t);
  }
  return t;
}
function Dp(e, t, n, r, i, a, o, s, l) {
  return (
    (e = Xl(n, r, !0, e, i, a, o, s, l)),
    (e.context = jp(null)),
    (n = e.current),
    (r = ye()),
    (i = _t(n)),
    (a = ot(r, i)),
    (a.callback = t ?? null),
    It(n, a, i),
    (e.current.lanes = i),
    ai(e, i, r),
    Pe(e, r),
    e
  );
}
function Za(e, t, n, r) {
  var i = t.current,
    a = ye(),
    o = _t(i);
  return (
    (n = jp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = It(i, t, o)),
    e !== null && (Ye(e, i, o, a), Gi(e, i, o)),
    o
  );
}
function La(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jl(e, t) {
  bc(e, t), (e = e.alternate) && bc(e, t);
}
function gv() {
  return null;
}
var Fp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zl(e) {
  this._internalRoot = e;
}
eo.prototype.render = Zl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Za(e, t, null, null);
};
eo.prototype.unmount = Zl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fn(function () {
      Za(null, e, null, null);
    }),
      (t[lt] = null);
  }
};
function eo(e) {
  this._internalRoot = e;
}
eo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++);
    kt.splice(n, 0, e), n === 0 && yd(e);
  }
};
function eu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function to(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Cc() {}
function vv(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var u = La(o);
        a.call(u);
      };
    }
    var o = Dp(t, r, e, 0, null, !1, !1, '', Cc);
    return (e._reactRootContainer = o), (e[lt] = o.current), Vr(e.nodeType === 8 ? e.parentNode : e), fn(), o;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var u = La(l);
      s.call(u);
    };
  }
  var l = Xl(e, 0, !1, null, null, !1, !1, '', Cc);
  return (
    (e._reactRootContainer = l),
    (e[lt] = l.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      Za(t, l, n, r);
    }),
    l
  );
}
function no(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == 'function') {
      var s = i;
      i = function () {
        var l = La(o);
        s.call(l);
      };
    }
    Za(t, o, e, i);
  } else o = vv(n, t, e, i, r);
  return La(o);
}
md = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 && (wl(t, n | 1), Pe(t, ee()), !(j & 6) && ((Zn = ee() + 500), Ut()));
      }
      break;
    case 13:
      fn(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var i = ye();
          Ye(r, e, 1, i);
        }
      }),
        Jl(e, 1);
  }
};
Sl = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ye(t, e, 134217728, n);
    }
    Jl(e, 134217728);
  }
};
hd = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = ut(e, t);
    if (n !== null) {
      var r = ye();
      Ye(n, e, t, r);
    }
    Jl(e, t);
  }
};
gd = function () {
  return V;
};
vd = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
ls = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ts(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ya(r);
            if (!i) throw Error(C(90));
            Kf(r), ts(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Gf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && $n(e, !!n.multiple, t, !1);
  }
};
rd = ql;
id = fn;
var yv = { usingClientEntryPoint: !1, Events: [si, Tn, Ya, td, nd, ql] },
  dr = { findFiberByHostInstance: Xt, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
  wv = {
    bundleType: dr.bundleType,
    version: dr.version,
    rendererPackageName: dr.rendererPackageName,
    rendererConfig: dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: dr.findFiberByHostInstance || gv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var _i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_i.isDisabled && _i.supportsFiber)
    try {
      (Ua = _i.inject(wv)), (et = _i);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!eu(t)) throw Error(C(200));
  return hv(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!eu(e)) throw Error(C(299));
  var n = !1,
    r = '',
    i = Fp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Xl(e, 1, !1, null, null, n, !1, r, i)),
    (e[lt] = t.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    new Zl(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(C(188)) : ((e = Object.keys(e).join(',')), Error(C(268, e)));
  return (e = sd(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return fn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!to(t)) throw Error(C(200));
  return no(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!eu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = '',
    o = Fp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Dp(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[lt] = t.current),
    Vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new eo(t);
};
Ie.render = function (e, t, n) {
  if (!to(t)) throw Error(C(200));
  return no(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!to(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (fn(function () {
        no(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[lt] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = ql;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!to(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return no(e, t, n, !1, r);
};
Ie.version = '18.3.1-next-f1338f8080-20240426';
function $p() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($p);
    } catch (e) {
      console.error(e);
    }
}
$p(), ($f.exports = Ie);
var Sv = $f.exports,
  Ec = Sv;
(Ko.createRoot = Ec.createRoot), (Ko.hydrateRoot = Ec.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gr() {
  return (
    (Gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gr.apply(this, arguments)
  );
}
var en;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(en || (en = {}));
const Pc = 'popstate';
function xv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: a, search: o, hash: s } = r.location;
    return Vs(
      '',
      { pathname: a, search: o, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : Up(i);
  }
  return bv(t, n, null, e);
}
function we(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Vp(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function kv() {
  return Math.random().toString(36).substr(2, 8);
}
function Oc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Vs(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Gr({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? ui(t) : t, {
      state: n,
      key: (t && t.key) || r || kv(),
    })
  );
}
function Up(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function ui(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function bv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = en.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Gr({}, o.state, { idx: u }), ''));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    s = en.Pop;
    let x = c(),
      h = x == null ? null : x - u;
    (u = x), l && l({ action: s, location: v.location, delta: h });
  }
  function d(x, h) {
    s = en.Push;
    let p = Vs(v.location, x, h);
    u = c() + 1;
    let m = Oc(p, u),
      S = v.createHref(p);
    try {
      o.pushState(m, '', S);
    } catch (y) {
      if (y instanceof DOMException && y.name === 'DataCloneError') throw y;
      i.location.assign(S);
    }
    a && l && l({ action: s, location: v.location, delta: 1 });
  }
  function g(x, h) {
    s = en.Replace;
    let p = Vs(v.location, x, h);
    u = c();
    let m = Oc(p, u),
      S = v.createHref(p);
    o.replaceState(m, '', S), a && l && l({ action: s, location: v.location, delta: 0 });
  }
  function w(x) {
    let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      p = typeof x == 'string' ? x : Up(x);
    return (
      (p = p.replace(/ $/, '%20')),
      we(h, 'No window.location.(origin|href) available to create URL for href: ' + p),
      new URL(p, h)
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
        i.addEventListener(Pc, f),
        (l = x),
        () => {
          i.removeEventListener(Pc, f), (l = null);
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
var Nc;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(Nc || (Nc = {}));
function Cv(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? ui(t) : t,
    i = Hp(r.pathname || '/', n);
  if (i == null) return null;
  let a = Bp(e);
  Ev(a);
  let o = null;
  for (let s = 0; o == null && s < a.length; ++s) {
    let l = jv(i);
    o = Av(a[s], l);
  }
  return o;
}
function Bp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (a, o, s) => {
    let l = {
      relativePath: s === void 0 ? a.path || '' : s,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a,
    };
    l.relativePath.startsWith('/') &&
      (we(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = on([r, l.relativePath]),
      c = n.concat(l);
    a.children &&
      a.children.length > 0 &&
      (we(
        a.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')
      ),
      Bp(a.children, t, c, u)),
      !(a.path == null && !a.index) && t.push({ path: u, score: Rv(u, a.index), routesMeta: c });
  };
  return (
    e.forEach((a, o) => {
      var s;
      if (a.path === '' || !((s = a.path) != null && s.includes('?'))) i(a, o);
      else for (let l of Wp(a.path)) i(a, o, l);
    }),
    t
  );
}
function Wp(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    a = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [a, ''] : [a];
  let o = Wp(r.join('/')),
    s = [];
  return (
    s.push(...o.map((l) => (l === '' ? a : [a, l].join('/')))),
    i && s.push(...o),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function Ev(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : _v(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Pv = /^:[\w-]+$/,
  Ov = 3,
  Nv = 2,
  Lv = 1,
  Tv = 10,
  Iv = -2,
  Lc = (e) => e === '*';
function Rv(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Lc) && (r += Iv),
    t && (r += Nv),
    n.filter((i) => !Lc(i)).reduce((i, a) => i + (Pv.test(a) ? Ov : a === '' ? Lv : Tv), r)
  );
}
function _v(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Av(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    a = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      l = o === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = Mv({ path: s.relativePath, caseSensitive: s.caseSensitive, end: l }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let f = s.route;
    a.push({ params: r, pathname: on([i, c.pathname]), pathnameBase: Bv(on([i, c.pathnameBase])), route: f }),
      c.pathnameBase !== '/' && (i = on([i, c.pathnameBase]));
  }
  return a;
}
function Mv(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = zv(e.path, e.caseSensitive, e.end),
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
function zv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Vp(
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
function jv(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Vp(
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
function Hp(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Dv(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? ui(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : Fv(n, t)) : t, search: Wv(r), hash: Hv(i) };
}
function Fv(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Fo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function $v(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Vv(e, t) {
  let n = $v(e);
  return t ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function Uv(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = ui(e))
    : ((i = Gr({}, e)),
      we(!i.pathname || !i.pathname.includes('?'), Fo('?', 'pathname', 'search', i)),
      we(!i.pathname || !i.pathname.includes('#'), Fo('#', 'pathname', 'hash', i)),
      we(!i.search || !i.search.includes('#'), Fo('#', 'search', 'hash', i)));
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
  let l = Dv(i, s),
    u = o && o !== '/' && o.endsWith('/'),
    c = (a || o === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const on = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Bv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Wv = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Hv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Yv(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Yp = ['post', 'put', 'patch', 'delete'];
new Set(Yp);
const qv = ['get', ...Yp];
new Set(qv);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ta() {
  return (
    (Ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ta.apply(this, arguments)
  );
}
const tu = E.createContext(null),
  Kv = E.createContext(null),
  ro = E.createContext(null),
  nu = E.createContext(null),
  vn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  qp = E.createContext(null);
function io() {
  return E.useContext(nu) != null;
}
function ru() {
  return io() || we(!1), E.useContext(nu).location;
}
function Kp(e) {
  E.useContext(ro).static || E.useLayoutEffect(e);
}
function Qv() {
  let { isDataRoute: e } = E.useContext(vn);
  return e ? cy() : Gv();
}
function Gv() {
  io() || we(!1);
  let e = E.useContext(tu),
    { basename: t, future: n, navigator: r } = E.useContext(ro),
    { matches: i } = E.useContext(vn),
    { pathname: a } = ru(),
    o = JSON.stringify(Vv(i, n.v7_relativeSplatPath)),
    s = E.useRef(!1);
  return (
    Kp(() => {
      s.current = !0;
    }),
    E.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let f = Uv(u, JSON.parse(o), a, c.relative === 'path');
        e == null && t !== '/' && (f.pathname = f.pathname === '/' ? t : on([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, o, a, e]
    )
  );
}
const Xv = E.createContext(null);
function Jv(e) {
  let t = E.useContext(vn).outlet;
  return t && E.createElement(Xv.Provider, { value: e }, t);
}
function Zv(e, t) {
  return ey(e);
}
function ey(e, t, n, r) {
  io() || we(!1);
  let { navigator: i } = E.useContext(ro),
    { matches: a } = E.useContext(vn),
    o = a[a.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : '/';
  o && o.route;
  let u = ru(),
    c;
  c = u;
  let f = c.pathname || '/',
    d = f;
  if (l !== '/') {
    let v = l.replace(/^\//, '').split('/');
    d = '/' + f.replace(/^\//, '').split('/').slice(v.length).join('/');
  }
  let g = Cv(e, { pathname: d });
  return ay(
    g &&
      g.map((v) =>
        Object.assign({}, v, {
          params: Object.assign({}, s, v.params),
          pathname: on([l, i.encodeLocation ? i.encodeLocation(v.pathname).pathname : v.pathname]),
          pathnameBase:
            v.pathnameBase === '/'
              ? l
              : on([l, i.encodeLocation ? i.encodeLocation(v.pathnameBase).pathname : v.pathnameBase]),
        })
      ),
    a,
    n,
    r
  );
}
function ty() {
  let e = uy(),
    t = Yv(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement('h2', null, 'Unexpected Application Error!'),
    E.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? E.createElement('pre', { style: i }, n) : null,
    null
  );
}
const ny = E.createElement(ty, null);
class ry extends E.Component {
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
      ? E.createElement(
          vn.Provider,
          { value: this.props.routeContext },
          E.createElement(qp.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function iy(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = E.useContext(tu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(vn.Provider, { value: t }, r)
  );
}
function ay(e, t, n, r) {
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
    c >= 0 || we(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
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
      (v = f.route.errorElement || ny),
      l &&
        (u < 0 && d === 0
          ? (fy('route-fallback'), (w = !0), (x = null))
          : u === d && ((w = !0), (x = f.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, d + 1)),
      p = () => {
        let m;
        return (
          g
            ? (m = v)
            : w
            ? (m = x)
            : f.route.Component
            ? (m = E.createElement(f.route.Component, null))
            : f.route.element
            ? (m = f.route.element)
            : (m = c),
          E.createElement(iy, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? E.createElement(ry, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Qp = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e
    );
  })(Qp || {}),
  Gp = (function (e) {
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
  })(Gp || {});
function oy(e) {
  let t = E.useContext(tu);
  return t || we(!1), t;
}
function sy(e) {
  let t = E.useContext(Kv);
  return t || we(!1), t;
}
function ly(e) {
  let t = E.useContext(vn);
  return t || we(!1), t;
}
function Xp(e) {
  let t = ly(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || we(!1), n.route.id;
}
function uy() {
  var e;
  let t = E.useContext(qp),
    n = sy(),
    r = Xp();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function cy() {
  let { router: e } = oy(Qp.UseNavigateStable),
    t = Xp(Gp.UseNavigateStable),
    n = E.useRef(!1);
  return (
    Kp(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, a) {
        a === void 0 && (a = {}),
          n.current && (typeof i == 'number' ? e.navigate(i) : e.navigate(i, Ta({ fromRouteId: t }, a)));
      },
      [e, t]
    )
  );
}
const Tc = {};
function fy(e, t, n) {
  Tc[e] || (Tc[e] = !0);
}
function dy(e) {
  return Jv(e.context);
}
function py(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = en.Pop,
    navigator: a,
    static: o = !1,
    future: s,
  } = e;
  io() && we(!1);
  let l = t.replace(/^\/*/, '/'),
    u = E.useMemo(
      () => ({ basename: l, navigator: a, static: o, future: Ta({ v7_relativeSplatPath: !1 }, s) }),
      [l, s, a, o]
    );
  typeof r == 'string' && (r = ui(r));
  let { pathname: c = '/', search: f = '', hash: d = '', state: g = null, key: w = 'default' } = r,
    v = E.useMemo(() => {
      let x = Hp(c, l);
      return x == null ? null : { location: { pathname: x, search: f, hash: d, state: g, key: w }, navigationType: i };
    }, [l, c, f, d, g, w, i]);
  return v == null
    ? null
    : E.createElement(ro.Provider, { value: u }, E.createElement(nu.Provider, { children: n, value: v }));
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
 */ function Us(e) {
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
function my(e, t) {
  let n = Us(e);
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
const hy = '6';
try {
  window.__reactRouterVersion = hy;
} catch {}
const gy = 'startTransition',
  Ic = uh[gy];
function vy(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    a = E.useRef();
  a.current == null && (a.current = xv({ window: i, v5Compat: !0 }));
  let o = a.current,
    [s, l] = E.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = E.useCallback(
      (f) => {
        u && Ic ? Ic(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    E.useLayoutEffect(() => o.listen(c), [o, c]),
    E.createElement(py, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
var Rc;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Rc || (Rc = {}));
var _c;
(function (e) {
  (e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(_c || (_c = {}));
function f2(e) {
  let t = E.useRef(Us(e)),
    n = E.useRef(!1),
    r = ru(),
    i = E.useMemo(() => my(r.search, n.current ? null : t.current), [r.search]),
    a = Qv(),
    o = E.useCallback(
      (s, l) => {
        const u = Us(typeof s == 'function' ? s(i) : s);
        (n.current = !0), a('?' + u, l);
      },
      [a, i]
    );
  return [i, o];
}
const yy = 'modulepreload',
  wy = function (e) {
    return '/etc/designs/spa/snb-vrrr-fe/clientlibs/' + e;
  },
  Ac = {},
  ci = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName('link');
      const o = document.querySelector('meta[property=csp-nonce]'),
        s = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute('nonce'));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = wy(l)), l in Ac)) return;
          Ac[l] = !0;
          const u = l.endsWith('.css'),
            c = u ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement('link');
          if (
            ((f.rel = u ? 'stylesheet' : yy),
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
function Mc(e, t) {
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
      ? Mc(Object(n), !0).forEach(function (r) {
          ie(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Mc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ia(e) {
  '@babel/helpers - typeof';
  return (
    (Ia =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ia(e)
  );
}
function Sy(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function xy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function ky(e, t, n) {
  return t && xy(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function ie(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
function iu(e, t) {
  return Cy(e) || Py(e, t) || Jp(e, t) || Ny();
}
function fi(e) {
  return by(e) || Ey(e) || Jp(e) || Oy();
}
function by(e) {
  if (Array.isArray(e)) return Bs(e);
}
function Cy(e) {
  if (Array.isArray(e)) return e;
}
function Ey(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
}
function Py(e, t) {
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
function Jp(e, t) {
  if (e) {
    if (typeof e == 'string') return Bs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set')) return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bs(e, t);
  }
}
function Bs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Oy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ny() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var zc = function () {},
  au = {},
  Zp = {},
  em = null,
  tm = { mark: zc, measure: zc };
try {
  typeof window < 'u' && (au = window),
    typeof document < 'u' && (Zp = document),
    typeof MutationObserver < 'u' && (em = MutationObserver),
    typeof performance < 'u' && (tm = performance);
} catch {}
var Ly = au.navigator || {},
  jc = Ly.userAgent,
  Dc = jc === void 0 ? '' : jc,
  jt = au,
  Y = Zp,
  Fc = em,
  Ai = tm;
jt.document;
var ht =
    !!Y.documentElement && !!Y.head && typeof Y.addEventListener == 'function' && typeof Y.createElement == 'function',
  nm = ~Dc.indexOf('MSIE') || ~Dc.indexOf('Trident/'),
  Mi,
  zi,
  ji,
  Di,
  Fi,
  ft = '___FONT_AWESOME___',
  Ws = 16,
  rm = 'fa',
  im = 'svg-inline--fa',
  dn = 'data-fa-i2svg',
  Hs = 'data-fa-pseudo-element',
  Ty = 'data-fa-pseudo-element-pending',
  ou = 'data-prefix',
  su = 'data-icon',
  $c = 'fontawesome-i2svg',
  Iy = 'async',
  Ry = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  am = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  W = 'classic',
  Z = 'sharp',
  lu = [W, Z];
function di(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[W];
    },
  });
}
var Xr = di(
    ((Mi = {}),
    ie(Mi, W, {
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
    ie(Mi, Z, {
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
    Mi)
  ),
  Jr = di(
    ((zi = {}),
    ie(zi, W, { solid: 'fas', regular: 'far', light: 'fal', thin: 'fat', duotone: 'fad', brands: 'fab', kit: 'fak' }),
    ie(zi, Z, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    zi)
  ),
  Zr = di(
    ((ji = {}),
    ie(ji, W, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    ie(ji, Z, { fass: 'fa-solid', fasr: 'fa-regular', fasl: 'fa-light', fast: 'fa-thin' }),
    ji)
  ),
  _y = di(
    ((Di = {}),
    ie(Di, W, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    ie(Di, Z, { 'fa-solid': 'fass', 'fa-regular': 'fasr', 'fa-light': 'fasl', 'fa-thin': 'fast' }),
    Di)
  ),
  Ay = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  om = 'fa-layers-text',
  My = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  zy = di(
    ((Fi = {}),
    ie(Fi, W, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
    ie(Fi, Z, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    Fi)
  ),
  sm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  jy = sm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Dy = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  tn = { GROUP: 'duotone-group', SWAP_OPACITY: 'swap-opacity', PRIMARY: 'primary', SECONDARY: 'secondary' },
  ei = new Set();
Object.keys(Jr[W]).map(ei.add.bind(ei));
Object.keys(Jr[Z]).map(ei.add.bind(ei));
var Fy = []
    .concat(lu, fi(ei), [
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
      tn.GROUP,
      tn.SWAP_OPACITY,
      tn.PRIMARY,
      tn.SECONDARY,
    ])
    .concat(
      sm.map(function (e) {
        return ''.concat(e, 'x');
      })
    )
    .concat(
      jy.map(function (e) {
        return 'w-'.concat(e);
      })
    ),
  Tr = jt.FontAwesomeConfig || {};
function $y(e) {
  var t = Y.querySelector('script[' + e + ']');
  if (t) return t.getAttribute(e);
}
function Vy(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
}
if (Y && typeof Y.querySelector == 'function') {
  var Uy = [
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
  Uy.forEach(function (e) {
    var t = iu(e, 2),
      n = t[0],
      r = t[1],
      i = Vy($y(n));
    i != null && (Tr[r] = i);
  });
}
var lm = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: rm,
  replacementClass: im,
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
Tr.familyPrefix && (Tr.cssPrefix = Tr.familyPrefix);
var er = N(N({}, lm), Tr);
er.autoReplaceSvg || (er.observeMutations = !1);
var T = {};
Object.keys(lm).forEach(function (e) {
  Object.defineProperty(T, e, {
    enumerable: !0,
    set: function (n) {
      (er[e] = n),
        Ir.forEach(function (r) {
          return r(T);
        });
    },
    get: function () {
      return er[e];
    },
  });
});
Object.defineProperty(T, 'familyPrefix', {
  enumerable: !0,
  set: function (t) {
    (er.cssPrefix = t),
      Ir.forEach(function (n) {
        return n(T);
      });
  },
  get: function () {
    return er.cssPrefix;
  },
});
jt.FontAwesomeConfig = T;
var Ir = [];
function By(e) {
  return (
    Ir.push(e),
    function () {
      Ir.splice(Ir.indexOf(e), 1);
    }
  );
}
var xn = Ws,
  Je = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function Wy(e) {
  if (!(!e || !ht)) {
    var t = Y.createElement('style');
    t.setAttribute('type', 'text/css'), (t.innerHTML = e);
    for (var n = Y.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i],
        o = (a.tagName || '').toUpperCase();
      ['STYLE', 'LINK'].indexOf(o) > -1 && (r = a);
    }
    return Y.head.insertBefore(t, r), e;
  }
}
var Hy = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function ti() {
  for (var e = 12, t = ''; e-- > 0; ) t += Hy[(Math.random() * 62) | 0];
  return t;
}
function ir(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function uu(e) {
  return e.classList
    ? ir(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (t) {
        return t;
      });
}
function um(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function Yy(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(um(e[n]), '" ');
    }, '')
    .trim();
}
function ao(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
  }, '');
}
function cu(e) {
  return e.size !== Je.size || e.x !== Je.x || e.y !== Je.y || e.rotate !== Je.rotate || e.flipX || e.flipY;
}
function qy(e) {
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
function Ky(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Ws : n,
    i = e.height,
    a = i === void 0 ? Ws : i,
    o = '';
  return (
    nm
      ? (o += 'translate('.concat(t.x / xn - r / 2, 'em, ').concat(t.y / xn - a / 2, 'em) '))
      : (o += 'translate(calc(-50% + '.concat(t.x / xn, 'em), calc(-50% + ').concat(t.y / xn, 'em)) ')),
    (o += 'scale('.concat((t.size / xn) * (t.flipX ? -1 : 1), ', ').concat((t.size / xn) * (t.flipY ? -1 : 1), ') ')),
    (o += 'rotate('.concat(t.rotate, 'deg) ')),
    o
  );
}
var Qy = `:root, :host {
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
function cm() {
  var e = rm,
    t = im,
    n = T.cssPrefix,
    r = T.replacementClass,
    i = Qy;
  if (n !== e || r !== t) {
    var a = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      s = new RegExp('\\.'.concat(t), 'g');
    i = i.replace(a, '.'.concat(n, '-')).replace(o, '--'.concat(n, '-')).replace(s, '.'.concat(r));
  }
  return i;
}
var Vc = !1;
function $o() {
  T.autoAddCss && !Vc && (Wy(cm()), (Vc = !0));
}
var Gy = {
    mixout: function () {
      return { dom: { css: cm, insertCss: $o } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          $o();
        },
        beforeI2svg: function () {
          $o();
        },
      };
    },
  },
  dt = jt || {};
dt[ft] || (dt[ft] = {});
dt[ft].styles || (dt[ft].styles = {});
dt[ft].hooks || (dt[ft].hooks = {});
dt[ft].shims || (dt[ft].shims = []);
var We = dt[ft],
  fm = [],
  Xy = function e() {
    Y.removeEventListener('DOMContentLoaded', e),
      (Ra = 1),
      fm.map(function (t) {
        return t();
      });
  },
  Ra = !1;
ht &&
  ((Ra = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState)),
  Ra || Y.addEventListener('DOMContentLoaded', Xy));
function Jy(e) {
  ht && (Ra ? setTimeout(e, 0) : fm.push(e));
}
function pi(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    a = i === void 0 ? [] : i;
  return typeof e == 'string'
    ? um(e)
    : '<'.concat(t, ' ').concat(Yy(r), '>').concat(a.map(pi).join(''), '</').concat(t, '>');
}
function Uc(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var Vo = function (t, n, r, i) {
  var a = Object.keys(t),
    o = a.length,
    s = n,
    l,
    u,
    c;
  for (r === void 0 ? ((l = 1), (c = t[a[0]])) : ((l = 0), (c = r)); l < o; l++) (u = a[l]), (c = s(c, t[u], u, t));
  return c;
};
function Zy(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function Ys(e) {
  var t = Zy(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function e1(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 && r <= 56319 && n > t + 1 && ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function Bc(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function qs(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    a = Bc(t);
  typeof We.hooks.addPack == 'function' && !i
    ? We.hooks.addPack(e, Bc(t))
    : (We.styles[e] = N(N({}, We.styles[e] || {}), a)),
    e === 'fas' && qs('fa', t);
}
var $i,
  Vi,
  Ui,
  jn = We.styles,
  t1 = We.shims,
  n1 = (($i = {}), ie($i, W, Object.values(Zr[W])), ie($i, Z, Object.values(Zr[Z])), $i),
  fu = null,
  dm = {},
  pm = {},
  mm = {},
  hm = {},
  gm = {},
  r1 = ((Vi = {}), ie(Vi, W, Object.keys(Xr[W])), ie(Vi, Z, Object.keys(Xr[Z])), Vi);
function i1(e) {
  return ~Fy.indexOf(e);
}
function a1(e, t) {
  var n = t.split('-'),
    r = n[0],
    i = n.slice(1).join('-');
  return r === e && i !== '' && !i1(i) ? i : null;
}
var vm = function () {
  var t = function (a) {
    return Vo(
      jn,
      function (o, s, l) {
        return (o[l] = Vo(s, a, {})), o;
      },
      {}
    );
  };
  (dm = t(function (i, a, o) {
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
    (pm = t(function (i, a, o) {
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
    (gm = t(function (i, a, o) {
      var s = a[2];
      return (
        (i[o] = o),
        s.forEach(function (l) {
          i[l] = o;
        }),
        i
      );
    }));
  var n = 'far' in jn || T.autoFetchSvg,
    r = Vo(
      t1,
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
  (mm = r.names), (hm = r.unicodes), (fu = oo(T.styleDefault, { family: T.familyDefault }));
};
By(function (e) {
  fu = oo(e.styleDefault, { family: T.familyDefault });
});
vm();
function du(e, t) {
  return (dm[e] || {})[t];
}
function o1(e, t) {
  return (pm[e] || {})[t];
}
function nn(e, t) {
  return (gm[e] || {})[t];
}
function ym(e) {
  return mm[e] || { prefix: null, iconName: null };
}
function s1(e) {
  var t = hm[e],
    n = du('fas', e);
  return t || (n ? { prefix: 'fas', iconName: n } : null) || { prefix: null, iconName: null };
}
function Dt() {
  return fu;
}
var pu = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function oo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? W : n,
    i = Xr[r][e],
    a = Jr[r][e] || Jr[r][i],
    o = e in We.styles ? e : null;
  return a || o || null;
}
var Wc = ((Ui = {}), ie(Ui, W, Object.keys(Zr[W])), ie(Ui, Z, Object.keys(Zr[Z])), Ui);
function so(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    a = ((t = {}), ie(t, W, ''.concat(T.cssPrefix, '-').concat(W)), ie(t, Z, ''.concat(T.cssPrefix, '-').concat(Z)), t),
    o = null,
    s = W;
  (e.includes(a[W]) ||
    e.some(function (u) {
      return Wc[W].includes(u);
    })) &&
    (s = W),
    (e.includes(a[Z]) ||
      e.some(function (u) {
        return Wc[Z].includes(u);
      })) &&
      (s = Z);
  var l = e.reduce(function (u, c) {
    var f = a1(T.cssPrefix, c);
    if (
      (jn[c]
        ? ((c = n1[s].includes(c) ? _y[s][c] : c), (o = c), (u.prefix = c))
        : r1[s].indexOf(c) > -1
        ? ((o = c), (u.prefix = oo(c, { family: s })))
        : f
        ? (u.iconName = f)
        : c !== T.replacementClass && c !== a[W] && c !== a[Z] && u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var d = o === 'fa' ? ym(u.iconName) : {},
        g = nn(u.prefix, u.iconName);
      d.prefix && (o = null),
        (u.iconName = d.iconName || g || u.iconName),
        (u.prefix = d.prefix || u.prefix),
        u.prefix === 'far' && !jn.far && jn.fas && !T.autoFetchSvg && (u.prefix = 'fas');
    }
    return u;
  }, pu());
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (l.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (l.prefix = 'fad'),
    !l.prefix &&
      s === Z &&
      (jn.fass || T.autoFetchSvg) &&
      ((l.prefix = 'fass'), (l.iconName = nn(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === 'fa' || o === 'fa') && (l.prefix = Dt() || 'fas'),
    l
  );
}
var l1 = (function () {
    function e() {
      Sy(this, e), (this.definitions = {});
    }
    return (
      ky(e, [
        {
          key: 'add',
          value: function () {
            for (var n = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            var o = i.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function (s) {
              (n.definitions[s] = N(N({}, n.definitions[s] || {}), o[s])), qs(s, o[s]);
              var l = Zr[W][s];
              l && qs(l, o[s]), vm();
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
  Hc = [],
  Dn = {},
  Yn = {},
  u1 = Object.keys(Yn);
function c1(e, t) {
  var n = t.mixoutsTo;
  return (
    (Hc = e),
    (Dn = {}),
    Object.keys(Yn).forEach(function (r) {
      u1.indexOf(r) === -1 && delete Yn[r];
    }),
    Hc.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (o) {
          typeof i[o] == 'function' && (n[o] = i[o]),
            Ia(i[o]) === 'object' &&
              Object.keys(i[o]).forEach(function (s) {
                n[o] || (n[o] = {}), (n[o][s] = i[o][s]);
              });
        }),
        r.hooks)
      ) {
        var a = r.hooks();
        Object.keys(a).forEach(function (o) {
          Dn[o] || (Dn[o] = []), Dn[o].push(a[o]);
        });
      }
      r.provides && r.provides(Yn);
    }),
    n
  );
}
function Ks(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
  var a = Dn[e] || [];
  return (
    a.forEach(function (o) {
      t = o.apply(null, [t].concat(r));
    }),
    t
  );
}
function pn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var i = Dn[e] || [];
  i.forEach(function (a) {
    a.apply(null, n);
  });
}
function pt() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Yn[e] ? Yn[e].apply(null, t) : void 0;
}
function Qs(e) {
  e.prefix === 'fa' && (e.prefix = 'fas');
  var t = e.iconName,
    n = e.prefix || Dt();
  if (t) return (t = nn(n, t) || t), Uc(wm.definitions, n, t) || Uc(We.styles, n, t);
}
var wm = new l1(),
  f1 = function () {
    (T.autoReplaceSvg = !1), (T.observeMutations = !1), pn('noAuto');
  },
  d1 = {
    i2svg: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return ht
        ? (pn('beforeI2svg', t), pt('pseudoElements2svg', t), pt('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      T.autoReplaceSvg === !1 && (T.autoReplaceSvg = !0),
        (T.observeMutations = !0),
        Jy(function () {
          m1({ autoReplaceSvgRoot: n }), pn('watch', t);
        });
    },
  },
  p1 = {
    icon: function (t) {
      if (t === null) return null;
      if (Ia(t) === 'object' && t.prefix && t.iconName)
        return { prefix: t.prefix, iconName: nn(t.prefix, t.iconName) || t.iconName };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
          r = oo(t[0]);
        return { prefix: r, iconName: nn(r, n) || n };
      }
      if (typeof t == 'string' && (t.indexOf(''.concat(T.cssPrefix, '-')) > -1 || t.match(Ay))) {
        var i = so(t.split(' '), { skipLookups: !0 });
        return { prefix: i.prefix || Dt(), iconName: nn(i.prefix, i.iconName) || i.iconName };
      }
      if (typeof t == 'string') {
        var a = Dt();
        return { prefix: a, iconName: nn(a, t) || t };
      }
    },
  },
  _e = { noAuto: f1, config: T, dom: d1, parse: p1, library: wm, findIconDefinition: Qs, toHtml: pi },
  m1 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? Y : n;
    (Object.keys(We.styles).length > 0 || T.autoFetchSvg) && ht && T.autoReplaceSvg && _e.dom.i2svg({ node: r });
  };
function lo(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return pi(r);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (ht) {
          var r = Y.createElement('div');
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function h1(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    a = e.styles,
    o = e.transform;
  if (cu(o) && n.found && !r.found) {
    var s = n.width,
      l = n.height,
      u = { x: s / l / 2, y: 0.5 };
    i.style = ao(
      N(N({}, a), {}, { 'transform-origin': ''.concat(u.x + o.x / 16, 'em ').concat(u.y + o.y / 16, 'em') })
    );
  }
  return [{ tag: 'svg', attributes: i, children: t }];
}
function g1(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    a = e.symbol,
    o = a === !0 ? ''.concat(t, '-').concat(T.cssPrefix, '-').concat(n) : a;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: N(N({}, i), {}, { id: o }), children: r }],
    },
  ];
}
function mu(e) {
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
    p = [T.replacementClass, a ? ''.concat(T.cssPrefix, '-').concat(a) : '']
      .filter(function (z) {
        return f.classes.indexOf(z) === -1;
      })
      .filter(function (z) {
        return z !== '' || !!z;
      })
      .concat(f.classes)
      .join(' '),
    m = {
      children: [],
      attributes: N(
        N({}, f.attributes),
        {},
        {
          'data-prefix': i,
          'data-icon': a,
          class: p,
          role: f.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(v, ' ').concat(x),
        }
      ),
    },
    S = h && !~f.classes.indexOf('fa-fw') ? { width: ''.concat((v / x) * 16 * 0.0625, 'em') } : {};
  g && (m.attributes[dn] = ''),
    l &&
      (m.children.push({
        tag: 'title',
        attributes: { id: m.attributes['aria-labelledby'] || 'title-'.concat(c || ti()) },
        children: [l],
      }),
      delete m.attributes.title);
  var y = N(
      N({}, m),
      {},
      { prefix: i, iconName: a, main: n, mask: r, maskId: u, transform: o, symbol: s, styles: N(N({}, S), f.styles) }
    ),
    k =
      r.found && n.found
        ? pt('generateAbstractMask', y) || { children: [], attributes: {} }
        : pt('generateAbstractIcon', y) || { children: [], attributes: {} },
    b = k.children,
    O = k.attributes;
  return (y.children = b), (y.attributes = O), s ? g1(y) : h1(y);
}
function Yc(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    a = e.title,
    o = e.extra,
    s = e.watchable,
    l = s === void 0 ? !1 : s,
    u = N(N(N({}, o.attributes), a ? { title: a } : {}), {}, { class: o.classes.join(' ') });
  l && (u[dn] = '');
  var c = N({}, o.styles);
  cu(i) && ((c.transform = Ky({ transform: i, width: n, height: r })), (c['-webkit-transform'] = c.transform));
  var f = ao(c);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: 'span', attributes: u, children: [t] }),
    a && d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [a] }),
    d
  );
}
function v1(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = N(N(N({}, r.attributes), n ? { title: n } : {}), {}, { class: r.classes.join(' ') }),
    a = ao(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return (
    o.push({ tag: 'span', attributes: i, children: [t] }),
    n && o.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    o
  );
}
var Uo = We.styles;
function Gs(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = iu(r, 1),
    a = i[0],
    o = null;
  return (
    Array.isArray(a)
      ? (o = {
          tag: 'g',
          attributes: { class: ''.concat(T.cssPrefix, '-').concat(tn.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: { class: ''.concat(T.cssPrefix, '-').concat(tn.SECONDARY), fill: 'currentColor', d: a[0] },
            },
            {
              tag: 'path',
              attributes: { class: ''.concat(T.cssPrefix, '-').concat(tn.PRIMARY), fill: 'currentColor', d: a[1] },
            },
          ],
        })
      : (o = { tag: 'path', attributes: { fill: 'currentColor', d: a } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
var y1 = { found: !1, width: 512, height: 512 };
function w1(e, t) {
  !am &&
    !T.showMissingIcons &&
    e &&
    console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Xs(e, t) {
  var n = t;
  return (
    t === 'fa' && T.styleDefault !== null && (t = Dt()),
    new Promise(function (r, i) {
      if ((pt('missingIconAbstract'), n === 'fa')) {
        var a = ym(e) || {};
        (e = a.iconName || e), (t = a.prefix || t);
      }
      if (e && t && Uo[t] && Uo[t][e]) {
        var o = Uo[t][e];
        return r(Gs(o));
      }
      w1(e, t), r(N(N({}, y1), {}, { icon: T.showMissingIcons && e ? pt('missingIconAbstract') || {} : {} }));
    })
  );
}
var qc = function () {},
  Js = T.measurePerformance && Ai && Ai.mark && Ai.measure ? Ai : { mark: qc, measure: qc },
  Sr = 'FA "6.5.2"',
  S1 = function (t) {
    return (
      Js.mark(''.concat(Sr, ' ').concat(t, ' begins')),
      function () {
        return Sm(t);
      }
    );
  },
  Sm = function (t) {
    Js.mark(''.concat(Sr, ' ').concat(t, ' ends')),
      Js.measure(
        ''.concat(Sr, ' ').concat(t),
        ''.concat(Sr, ' ').concat(t, ' begins'),
        ''.concat(Sr, ' ').concat(t, ' ends')
      );
  },
  hu = { begin: S1, end: Sm },
  ra = function () {};
function Kc(e) {
  var t = e.getAttribute ? e.getAttribute(dn) : null;
  return typeof t == 'string';
}
function x1(e) {
  var t = e.getAttribute ? e.getAttribute(ou) : null,
    n = e.getAttribute ? e.getAttribute(su) : null;
  return t && n;
}
function k1(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(T.replacementClass);
}
function b1() {
  if (T.autoReplaceSvg === !0) return ia.replace;
  var e = ia[T.autoReplaceSvg];
  return e || ia.replace;
}
function C1(e) {
  return Y.createElementNS('http://www.w3.org/2000/svg', e);
}
function E1(e) {
  return Y.createElement(e);
}
function xm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === 'svg' ? C1 : E1) : n;
  if (typeof e == 'string') return Y.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return (
    a.forEach(function (o) {
      i.appendChild(xm(o, { ceFn: r }));
    }),
    i
  );
}
function P1(e) {
  var t = ' '.concat(e.outerHTML, ' ');
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t;
}
var ia = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(xm(i), n);
        }),
        n.getAttribute(dn) === null && T.keepOriginalSource)
      ) {
        var r = Y.createComment(P1(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~uu(n).indexOf(T.replacementClass)) return ia.replace(t);
    var i = new RegExp(''.concat(T.cssPrefix, '-.*'));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var a = r[0].attributes.class.split(' ').reduce(
        function (s, l) {
          return l === T.replacementClass || l.match(i) ? s.toSvg.push(l) : s.toNode.push(l), s;
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = a.toSvg.join(' ')),
        a.toNode.length === 0 ? n.removeAttribute('class') : n.setAttribute('class', a.toNode.join(' '));
    }
    var o = r.map(function (s) {
      return pi(s);
    }).join(`
`);
    n.setAttribute(dn, ''), (n.innerHTML = o);
  },
};
function Qc(e) {
  e();
}
function km(e, t) {
  var n = typeof t == 'function' ? t : ra;
  if (e.length === 0) n();
  else {
    var r = Qc;
    T.mutateApproach === Iy && (r = jt.requestAnimationFrame || Qc),
      r(function () {
        var i = b1(),
          a = hu.begin('mutate');
        e.map(i), a(), n();
      });
  }
}
var gu = !1;
function bm() {
  gu = !0;
}
function Zs() {
  gu = !1;
}
var _a = null;
function Gc(e) {
  if (Fc && T.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? ra : t,
      r = e.nodeCallback,
      i = r === void 0 ? ra : r,
      a = e.pseudoElementsCallback,
      o = a === void 0 ? ra : a,
      s = e.observeMutationsRoot,
      l = s === void 0 ? Y : s;
    (_a = new Fc(function (u) {
      if (!gu) {
        var c = Dt();
        ir(u).forEach(function (f) {
          if (
            (f.type === 'childList' &&
              f.addedNodes.length > 0 &&
              !Kc(f.addedNodes[0]) &&
              (T.searchPseudoElements && o(f.target), n(f.target)),
            f.type === 'attributes' && f.target.parentNode && T.searchPseudoElements && o(f.target.parentNode),
            f.type === 'attributes' && Kc(f.target) && ~Dy.indexOf(f.attributeName))
          )
            if (f.attributeName === 'class' && x1(f.target)) {
              var d = so(uu(f.target)),
                g = d.prefix,
                w = d.iconName;
              f.target.setAttribute(ou, g || c), w && f.target.setAttribute(su, w);
            } else k1(f.target) && i(f.target);
        });
      }
    })),
      ht && _a.observe(l, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
  }
}
function O1() {
  _a && _a.disconnect();
}
function N1(e) {
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
function L1(e) {
  var t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    i = so(uu(e));
  return (
    i.prefix || (i.prefix = Dt()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix && r.length > 0 && (i.iconName = o1(i.prefix, e.innerText) || du(i.prefix, Ys(e.innerText))),
      !i.iconName &&
        T.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function T1(e) {
  var t = ir(e.attributes).reduce(function (i, a) {
      return i.name !== 'class' && i.name !== 'style' && (i[a.name] = a.value), i;
    }, {}),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id');
  return (
    T.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''.concat(T.replacementClass, '-title-').concat(r || ti()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  );
}
function I1() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Je,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Xc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 },
    n = L1(e),
    r = n.iconName,
    i = n.prefix,
    a = n.rest,
    o = T1(e),
    s = Ks('parseNodeAttributes', {}, e),
    l = t.styleParser ? N1(e) : [];
  return N(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: Je,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: a, styles: l, attributes: o },
    },
    s
  );
}
var R1 = We.styles;
function Cm(e) {
  var t = T.autoReplaceSvg === 'nest' ? Xc(e, { styleParser: !1 }) : Xc(e);
  return ~t.extra.classes.indexOf(om) ? pt('generateLayersText', e, t) : pt('generateSvgReplacementMutation', e, t);
}
var Ft = new Set();
lu.map(function (e) {
  Ft.add('fa-'.concat(e));
});
Object.keys(Xr[W]).map(Ft.add.bind(Ft));
Object.keys(Xr[Z]).map(Ft.add.bind(Ft));
Ft = fi(Ft);
function Jc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ht) return Promise.resolve();
  var n = Y.documentElement.classList,
    r = function (f) {
      return n.add(''.concat($c, '-').concat(f));
    },
    i = function (f) {
      return n.remove(''.concat($c, '-').concat(f));
    },
    a = T.autoFetchSvg
      ? Ft
      : lu
          .map(function (c) {
            return 'fa-'.concat(c);
          })
          .concat(Object.keys(R1));
  a.includes('fa') || a.push('fa');
  var o = ['.'.concat(om, ':not([').concat(dn, '])')]
    .concat(
      a.map(function (c) {
        return '.'.concat(c, ':not([').concat(dn, '])');
      })
    )
    .join(', ');
  if (o.length === 0) return Promise.resolve();
  var s = [];
  try {
    s = ir(e.querySelectorAll(o));
  } catch {}
  if (s.length > 0) r('pending'), i('complete');
  else return Promise.resolve();
  var l = hu.begin('onTree'),
    u = s.reduce(function (c, f) {
      try {
        var d = Cm(f);
        d && c.push(d);
      } catch (g) {
        am || (g.name === 'MissingIcon' && console.error(g));
      }
      return c;
    }, []);
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (d) {
        km(d, function () {
          r('active'), r('complete'), i('pending'), typeof t == 'function' && t(), l(), c();
        });
      })
      .catch(function (d) {
        l(), f(d);
      });
  });
}
function _1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Cm(e).then(function (n) {
    n && km([n], t);
  });
}
function A1(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : Qs(t || {}),
      i = n.mask;
    return i && (i = (i || {}).icon ? i : Qs(i || {})), e(r, N(N({}, n), {}, { mask: i }));
  };
}
var M1 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? Je : r,
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
      p = h === void 0 ? {} : h,
      m = n.styles,
      S = m === void 0 ? {} : m;
    if (t) {
      var y = t.prefix,
        k = t.iconName,
        b = t.icon;
      return lo(N({ type: 'icon' }, t), function () {
        return (
          pn('beforeDOMElementCreation', { iconDefinition: t, params: n }),
          T.autoA11y &&
            (d
              ? (p['aria-labelledby'] = ''.concat(T.replacementClass, '-title-').concat(w || ti()))
              : ((p['aria-hidden'] = 'true'), (p.focusable = 'false'))),
          mu({
            icons: { main: Gs(b), mask: l ? Gs(l.icon) : { found: !1, width: null, height: null, icon: {} } },
            prefix: y,
            iconName: k,
            transform: N(N({}, Je), i),
            symbol: o,
            title: d,
            maskId: c,
            titleId: w,
            extra: { attributes: p, styles: S, classes: x },
          })
        );
      });
    }
  },
  z1 = {
    mixout: function () {
      return { icon: A1(M1) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Jc), (n.nodeCallback = _1), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? Y : r,
          a = n.callback,
          o = a === void 0 ? function () {} : a;
        return Jc(i, o);
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
              Xs(i, s),
              c.iconName ? Xs(c.iconName, c.prefix) : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
            ])
              .then(function (v) {
                var x = iu(v, 2),
                  h = x[0],
                  p = x[1];
                g([
                  n,
                  mu({
                    icons: { main: h, mask: p },
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
            l = ao(s);
          l.length > 0 && (i.style = l);
          var u;
          return (
            cu(o) &&
              (u = pt('generateAbstractTransformGrouping', {
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
  j1 = {
    mixout: function () {
      return {
        layer: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.classes,
            a = i === void 0 ? [] : i;
          return lo({ type: 'layer' }, function () {
            pn('beforeDOMElementCreation', { assembler: n, params: r });
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
                  attributes: { class: [''.concat(T.cssPrefix, '-layers')].concat(fi(a)).join(' ') },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  D1 = {
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
          return lo({ type: 'counter', content: n }, function () {
            return (
              pn('beforeDOMElementCreation', { content: n, params: r }),
              v1({
                content: n.toString(),
                title: a,
                extra: { attributes: u, styles: f, classes: [''.concat(T.cssPrefix, '-layers-counter')].concat(fi(s)) },
              })
            );
          });
        },
      };
    },
  },
  F1 = {
    mixout: function () {
      return {
        text: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.transform,
            a = i === void 0 ? Je : i,
            o = r.title,
            s = o === void 0 ? null : o,
            l = r.classes,
            u = l === void 0 ? [] : l,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            d = r.styles,
            g = d === void 0 ? {} : d;
          return lo({ type: 'text', content: n }, function () {
            return (
              pn('beforeDOMElementCreation', { content: n, params: r }),
              Yc({
                content: n,
                transform: N(N({}, Je), a),
                title: s,
                extra: { attributes: f, styles: g, classes: [''.concat(T.cssPrefix, '-layers-text')].concat(fi(u)) },
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
        if (nm) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (s = c.width / u), (l = c.height / u);
        }
        return (
          T.autoA11y && !i && (o.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            n,
            Yc({ content: n.innerHTML, width: s, height: l, transform: a, title: i, extra: o, watchable: !0 }),
          ])
        );
      };
    },
  },
  $1 = new RegExp('"', 'ug'),
  Zc = [1105920, 1112319];
function V1(e) {
  var t = e.replace($1, ''),
    n = e1(t, 0),
    r = n >= Zc[0] && n <= Zc[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Ys(i ? t[0] : t), isSecondary: r || i };
}
function ef(e, t) {
  var n = ''.concat(Ty).concat(t.replace(':', '-'));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var a = ir(e.children),
      o = a.filter(function (b) {
        return b.getAttribute(Hs) === t;
      })[0],
      s = jt.getComputedStyle(e, t),
      l = s.getPropertyValue('font-family').match(My),
      u = s.getPropertyValue('font-weight'),
      c = s.getPropertyValue('content');
    if (o && !l) return e.removeChild(o), r();
    if (l && c !== 'none' && c !== '') {
      var f = s.getPropertyValue('content'),
        d = ~['Sharp'].indexOf(l[2]) ? Z : W,
        g = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(l[2])
          ? Jr[d][l[2].toLowerCase()]
          : zy[d][u],
        w = V1(f),
        v = w.value,
        x = w.isSecondary,
        h = l[0].startsWith('FontAwesome'),
        p = du(g, v),
        m = p;
      if (h) {
        var S = s1(v);
        S.iconName && S.prefix && ((p = S.iconName), (g = S.prefix));
      }
      if (p && !x && (!o || o.getAttribute(ou) !== g || o.getAttribute(su) !== m)) {
        e.setAttribute(n, m), o && e.removeChild(o);
        var y = I1(),
          k = y.extra;
        (k.attributes[Hs] = t),
          Xs(p, g)
            .then(function (b) {
              var O = mu(
                  N(N({}, y), {}, { icons: { main: b, mask: pu() }, prefix: g, iconName: m, extra: k, watchable: !0 })
                ),
                z = Y.createElementNS('http://www.w3.org/2000/svg', 'svg');
              t === '::before' ? e.insertBefore(z, e.firstChild) : e.appendChild(z),
                (z.outerHTML = O.map(function (_) {
                  return pi(_);
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
function U1(e) {
  return Promise.all([ef(e, '::before'), ef(e, '::after')]);
}
function B1(e) {
  return (
    e.parentNode !== document.head &&
    !~Ry.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Hs) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  );
}
function tf(e) {
  if (ht)
    return new Promise(function (t, n) {
      var r = ir(e.querySelectorAll('*')).filter(B1).map(U1),
        i = hu.begin('searchPseudoElements');
      bm(),
        Promise.all(r)
          .then(function () {
            i(), Zs(), t();
          })
          .catch(function () {
            i(), Zs(), n();
          });
    });
}
var W1 = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = tf), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? Y : r;
        T.searchPseudoElements && tf(i);
      };
    },
  },
  nf = !1,
  H1 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            bm(), (nf = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Gc(Ks('mutationObserverCallbacks', {}));
        },
        noAuto: function () {
          O1();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          nf ? Zs() : Gc(Ks('mutationObserverCallbacks', { observeMutationsRoot: r }));
        },
      };
    },
  },
  rf = function (t) {
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
  Y1 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return rf(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-transform');
          return i && (n.transform = rf(i)), n;
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
  Bo = { x: 0, y: 0, width: '100%', height: '100%' };
function af(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e;
}
function q1(e) {
  return e.tag === 'g' ? e.children : [e];
}
var K1 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-mask'),
            a = i
              ? so(
                  i.split(' ').map(function (o) {
                    return o.trim();
                  })
                )
              : pu();
          return a.prefix || (a.prefix = Dt()), (n.mask = a), (n.maskId = r.getAttribute('data-fa-mask-id')), n;
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
          g = qy({ transform: l, containerWidth: f, iconWidth: u }),
          w = { tag: 'rect', attributes: N(N({}, Bo), {}, { fill: 'white' }) },
          v = c.children ? { children: c.children.map(af) } : {},
          x = {
            tag: 'g',
            attributes: N({}, g.inner),
            children: [af(N({ tag: c.tag, attributes: N(N({}, c.attributes), g.path) }, v))],
          },
          h = { tag: 'g', attributes: N({}, g.outer), children: [x] },
          p = 'mask-'.concat(s || ti()),
          m = 'clip-'.concat(s || ti()),
          S = {
            tag: 'mask',
            attributes: N(N({}, Bo), {}, { id: p, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }),
            children: [w, h],
          },
          y = { tag: 'defs', children: [{ tag: 'clipPath', attributes: { id: m }, children: q1(d) }, S] };
        return (
          r.push(y, {
            tag: 'rect',
            attributes: N(
              { fill: 'currentColor', 'clip-path': 'url(#'.concat(m, ')'), mask: 'url(#'.concat(p, ')') },
              Bo
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  Q1 = {
    provides: function (t) {
      var n = !1;
      jt.matchMedia && (n = jt.matchMedia('(prefers-reduced-motion: reduce)').matches),
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
  G1 = {
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
  X1 = [Gy, z1, j1, D1, F1, W1, H1, Y1, K1, Q1, G1];
c1(X1, { mixoutsTo: _e });
_e.noAuto;
_e.config;
_e.library;
_e.dom;
var el = _e.parse;
_e.findIconDefinition;
_e.toHtml;
var J1 = _e.icon;
_e.layer;
_e.text;
_e.counter;
var Em = { exports: {} },
  Z1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  e0 = Z1,
  t0 = e0;
function Pm() {}
function Om() {}
Om.resetWarningCache = Pm;
var n0 = function () {
  function e(r, i, a, o, s, l) {
    if (l !== t0) {
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
    checkPropTypes: Om,
    resetWarningCache: Pm,
  };
  return (n.PropTypes = n), n;
};
Em.exports = n0();
var r0 = Em.exports;
const A = ol(r0);
function of(e, t) {
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
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? of(Object(n), !0).forEach(function (r) {
          Fn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : of(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Aa(e) {
  '@babel/helpers - typeof';
  return (
    (Aa =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Aa(e)
  );
}
function Fn(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
function i0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++) (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function a0(e, t) {
  if (e == null) return {};
  var n = i0(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function tl(e) {
  return o0(e) || s0(e) || l0(e) || u0();
}
function o0(e) {
  if (Array.isArray(e)) return nl(e);
}
function s0(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
}
function l0(e, t) {
  if (e) {
    if (typeof e == 'string') return nl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set')) return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nl(e, t);
  }
}
function nl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function u0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c0(e) {
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
    p = e.rotation,
    m = e.pull,
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
      Fn(t, 'fa-'.concat(h), typeof h < 'u' && h !== null),
      Fn(t, 'fa-rotate-'.concat(p), typeof p < 'u' && p !== null && p !== 0),
      Fn(t, 'fa-pull-'.concat(m), typeof m < 'u' && m !== null),
      Fn(t, 'fa-swap-opacity', e.swapOpacity),
      t);
  return Object.keys(S)
    .map(function (y) {
      return S[y] ? y : null;
    })
    .filter(function (y) {
      return y;
    });
}
function f0(e) {
  return (e = e - 0), e === e;
}
function Nm(e) {
  return f0(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : '';
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var d0 = ['style'];
function p0(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function m0(e) {
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
        i = Nm(n.slice(0, r)),
        a = n.slice(r + 1).trim();
      return i.startsWith('webkit') ? (t[p0(i)] = a) : (t[i] = a), t;
    }, {});
}
function Lm(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == 'string') return t;
  var r = (t.children || []).map(function (l) {
      return Lm(e, l);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (l, u) {
        var c = t.attributes[u];
        switch (u) {
          case 'class':
            (l.attrs.className = c), delete t.attributes.class;
            break;
          case 'style':
            l.attrs.style = m0(c);
            break;
          default:
            u.indexOf('aria-') === 0 || u.indexOf('data-') === 0
              ? (l.attrs[u.toLowerCase()] = c)
              : (l.attrs[Nm(u)] = c);
        }
        return l;
      },
      { attrs: {} }
    ),
    a = n.style,
    o = a === void 0 ? {} : a,
    s = a0(n, d0);
  return (i.attrs.style = Pt(Pt({}, i.attrs.style), o)), e.apply(void 0, [t.tag, Pt(Pt({}, i.attrs), s)].concat(tl(r)));
}
var Tm = !1;
try {
  Tm = !0;
} catch {}
function h0() {
  if (!Tm && console && typeof console.error == 'function') {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function sf(e) {
  if (e && Aa(e) === 'object' && e.prefix && e.iconName && e.icon) return e;
  if (el.icon) return el.icon(e);
  if (e === null) return null;
  if (e && Aa(e) === 'object' && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2) return { prefix: e[0], iconName: e[1] };
  if (typeof e == 'string') return { prefix: 'fas', iconName: e };
}
function Wo(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t) ? Fn({}, e, t) : {};
}
var mi = Va.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    a = e.className,
    o = e.title,
    s = e.titleId,
    l = e.maskId,
    u = sf(n),
    c = Wo('classes', [].concat(tl(c0(e)), tl(a.split(' ')))),
    f = Wo('transform', typeof e.transform == 'string' ? el.transform(e.transform) : e.transform),
    d = Wo('mask', sf(r)),
    g = J1(u, Pt(Pt(Pt(Pt({}, c), f), d), {}, { symbol: i, title: o, titleId: s, maskId: l }));
  if (!g) return h0('Could not find icon', u), null;
  var w = g.abstract,
    v = { ref: t };
  return (
    Object.keys(e).forEach(function (x) {
      mi.defaultProps.hasOwnProperty(x) || (v[x] = e[x]);
    }),
    g0(w[0], v)
  );
});
mi.displayName = 'FontAwesomeIcon';
mi.propTypes = {
  beat: A.bool,
  border: A.bool,
  beatFade: A.bool,
  bounce: A.bool,
  className: A.string,
  fade: A.bool,
  flash: A.bool,
  mask: A.oneOfType([A.object, A.array, A.string]),
  maskId: A.string,
  fixedWidth: A.bool,
  inverse: A.bool,
  flip: A.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: A.oneOfType([A.object, A.array, A.string]),
  listItem: A.bool,
  pull: A.oneOf(['right', 'left']),
  pulse: A.bool,
  rotation: A.oneOf([0, 90, 180, 270]),
  shake: A.bool,
  size: A.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: A.bool,
  spinPulse: A.bool,
  spinReverse: A.bool,
  symbol: A.oneOfType([A.bool, A.string]),
  title: A.string,
  titleId: A.string,
  transform: A.oneOfType([A.string, A.object]),
  swapOpacity: A.bool,
};
mi.defaultProps = {
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
var g0 = Lm.bind(null, Va.createElement),
  Im = { exports: {} };
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
})(Im);
var v0 = Im.exports;
const y0 = ol(v0);
var w0 = {
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
  S0 = {
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
  d2 = S0,
  p2 = {
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
  m2 = {
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
  x0 = {
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
  h2 = x0,
  k0 = {
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
  g2 = k0;
function b0() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    typeof t[0] == 'string' && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const lf = {};
function rl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  (typeof t[0] == 'string' && lf[t[0]]) || (typeof t[0] == 'string' && (lf[t[0]] = new Date()), b0(...t));
}
const Rm = (e, t) => () => {
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
function uf(e, t, n) {
  e.loadNamespaces(t, Rm(e, n));
}
function cf(e, t, n, r) {
  typeof n == 'string' && (n = [n]),
    n.forEach((i) => {
      e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
    }),
    e.loadLanguages(t, Rm(e, r));
}
function C0(e, t) {
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
function E0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length
    ? (rl('i18n.languages were undefined or empty', t.languages), !0)
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
    : C0(e, t, n);
}
const P0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  O0 = {
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
  N0 = (e) => O0[e],
  L0 = (e) => e.replace(P0, N0);
let il = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: L0,
};
function T0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  il = { ...il, ...e };
}
function I0() {
  return il;
}
let _m;
function R0(e) {
  _m = e;
}
function _0() {
  return _m;
}
const A0 = {
    type: '3rdParty',
    init(e) {
      T0(e.options.react), R0(e);
    },
  },
  M0 = E.createContext();
class z0 {
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
const j0 = (e, t) => {
  const n = E.useRef();
  return (
    E.useEffect(() => {
      n.current = e;
    }, [e, t]),
    n.current
  );
};
function Am(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function D0(e, t, n, r) {
  return E.useCallback(Am(e, t, n, r), [e, t, n, r]);
}
function F0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = t,
    { i18n: r, defaultNS: i } = E.useContext(M0) || {},
    a = n || r || _0();
  if ((a && !a.reportNamespaces && (a.reportNamespaces = new z0()), !a)) {
    rl('You will need to pass in an i18next instance by using initReactI18next');
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
    rl('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  const o = { ...I0(), ...a.options.react, ...t },
    { useSuspense: s, keyPrefix: l } = o;
  let u = i || (a.options && a.options.defaultNS);
  (u = typeof u == 'string' ? [u] : u || ['translation']),
    a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(u);
  const c = (a.isInitialized || a.initializedStoreOnce) && u.every((S) => E0(S, a, o)),
    f = D0(a, t.lng || null, o.nsMode === 'fallback' ? u : u[0], l),
    d = () => f,
    g = () => Am(a, t.lng || null, o.nsMode === 'fallback' ? u : u[0], l),
    [w, v] = E.useState(d);
  let x = u.join();
  t.lng && (x = `${t.lng}${x}`);
  const h = j0(x),
    p = E.useRef(!0);
  E.useEffect(() => {
    const { bindI18n: S, bindI18nStore: y } = o;
    (p.current = !0),
      !c &&
        !s &&
        (t.lng
          ? cf(a, t.lng, u, () => {
              p.current && v(g);
            })
          : uf(a, u, () => {
              p.current && v(g);
            })),
      c && h && h !== x && p.current && v(g);
    function k() {
      p.current && v(g);
    }
    return (
      S && a && a.on(S, k),
      y && a && a.store.on(y, k),
      () => {
        (p.current = !1),
          S && a && S.split(' ').forEach((b) => a.off(b, k)),
          y && a && y.split(' ').forEach((b) => a.store.off(b, k));
      }
    );
  }, [a, x]),
    E.useEffect(() => {
      p.current && c && v(d);
    }, [a, l, c]);
  const m = [w, a, c];
  if (((m.t = w), (m.i18n = a), (m.ready = c), c || (!c && !s))) return m;
  throw new Promise((S) => {
    t.lng ? cf(a, t.lng, u, () => S()) : uf(a, u, () => S());
  });
}
const qt = ({ size: e, inModal: t }) => {
    const { i18n: n } = F0(),
      r = n.language;
    return F.jsxs('div', {
      className: y0(e ? `gnb-spinner-${e}` : 'gnb-spinner', t ? 'in-modal' : 'loading-page'),
      role: 'status',
      children: [
        F.jsx(mi, { icon: w0, className: 'fa-spin', 'aria-labelledby': 'spinner-description' }),
        F.jsx('span', {
          className: 'sr-only',
          id: 'spinner-description',
          children: r === 'fr-CA' ? 'Chargement...' : 'Loading...',
        }),
      ],
    });
  },
  ff = E.lazy(() => ci(() => import('./index-BaxgdJrO.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))),
  $0 = E.lazy(() =>
    ci(() => import('./index-qiVSYFvY.js'), __vite__mapDeps([11, 12, 1, 2, 3, 4, 5, 6, 7, 13, 14, 15, 16]))
  ),
  V0 = E.lazy(() => ci(() => import('./edit-BdAx8K7e.js'), __vite__mapDeps([17, 12, 1, 2, 3, 16]))),
  U0 = E.lazy(() => ci(() => import('./index-Bu5Mm71H.js'), __vite__mapDeps([18, 2]))),
  B0 = E.lazy(() =>
    ci(() => import('./index-CSVdFtfy.js'), __vite__mapDeps([19, 1, 2, 3, 8, 4, 5, 9, 12, 13, 14, 20]))
  ),
  W0 = [
    { path: '', element: F.jsx(E.Suspense, { fallback: F.jsx(qt, { size: 'lg' }), children: F.jsx(ff, {}) }) },
    { path: '/', element: F.jsx(E.Suspense, { fallback: F.jsx(qt, { size: 'lg' }), children: F.jsx(ff, {}) }) },
    {
      path: 'authentication',
      element: F.jsx(E.Suspense, { fallback: F.jsx(qt, { size: 'lg' }), children: F.jsx(B0, {}) }),
    },
    {
      path: 'account-settings',
      element: F.jsx(E.Suspense, { fallback: F.jsx(qt, { size: 'lg' }), children: F.jsx(dy, {}) }),
      children: [
        { path: '', element: F.jsx(E.Suspense, { fallback: F.jsx(qt, { size: 'lg' }), children: F.jsx($0, {}) }) },
        { path: 'edit', element: F.jsx(E.Suspense, { fallback: F.jsx(qt, { size: 'lg' }), children: F.jsx(V0, {}) }) },
      ],
    },
    { path: '*', element: F.jsx(E.Suspense, { fallback: F.jsx(qt, { size: 'lg' }), children: F.jsx(U0, {}) }) },
  ],
  H0 = () => Zv(W0);
var Bi = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var df;
function Y0() {
  if (df) return Bi;
  (df = 1), (Bi.parse = o), (Bi.serialize = u);
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
      p = 0,
      m = 0,
      S = 0;
    do {
      if (((m = g.indexOf('=', p)), m === -1)) break;
      if (((S = g.indexOf(';', p)), S === -1)) S = x;
      else if (m > S) {
        p = g.lastIndexOf(';', m - 1) + 1;
        continue;
      }
      var y = s(g, p, m),
        k = l(g, m, y),
        b = g.slice(y, k);
      if (!t.call(v, b)) {
        var O = s(g, m + 1, S),
          z = l(g, S, O);
        g.charCodeAt(O) === 34 && g.charCodeAt(z - 1) === 34 && (O++, z--);
        var _ = g.slice(O, z);
        v[b] = d(_, h);
      }
      p = S + 1;
    } while (p < x);
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
    var p = g + '=' + h;
    if (!v) return p;
    if (v.maxAge != null) {
      var m = Math.floor(v.maxAge);
      if (!isFinite(m)) throw new TypeError('option maxAge is invalid');
      p += '; Max-Age=' + m;
    }
    if (v.domain) {
      if (!i.test(v.domain)) throw new TypeError('option domain is invalid');
      p += '; Domain=' + v.domain;
    }
    if (v.path) {
      if (!a.test(v.path)) throw new TypeError('option path is invalid');
      p += '; Path=' + v.path;
    }
    if (v.expires) {
      var S = v.expires;
      if (!f(S) || isNaN(S.valueOf())) throw new TypeError('option expires is invalid');
      p += '; Expires=' + S.toUTCString();
    }
    if (
      (v.httpOnly && (p += '; HttpOnly'),
      v.secure && (p += '; Secure'),
      v.partitioned && (p += '; Partitioned'),
      v.priority)
    ) {
      var y = typeof v.priority == 'string' ? v.priority.toLowerCase() : v.priority;
      switch (y) {
        case 'low':
          p += '; Priority=Low';
          break;
        case 'medium':
          p += '; Priority=Medium';
          break;
        case 'high':
          p += '; Priority=High';
          break;
        default:
          throw new TypeError('option priority is invalid');
      }
    }
    if (v.sameSite) {
      var k = typeof v.sameSite == 'string' ? v.sameSite.toLowerCase() : v.sameSite;
      switch (k) {
        case !0:
          p += '; SameSite=Strict';
          break;
        case 'lax':
          p += '; SameSite=Lax';
          break;
        case 'strict':
          p += '; SameSite=Strict';
          break;
        case 'none':
          p += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    }
    return p;
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
  return Bi;
}
var aa = Y0();
function q0() {
  const e = typeof global > 'u' ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  return typeof e == 'boolean' ? e : typeof document == 'object' && typeof document.cookie == 'string';
}
function K0(e) {
  return typeof e == 'string' ? aa.parse(e) : typeof e == 'object' && e !== null ? e : {};
}
function Ho(e, t = {}) {
  const n = Q0(e);
  if (!t.doNotParse)
    try {
      return JSON.parse(n);
    } catch {}
  return e;
}
function Q0(e) {
  return e && e[0] === 'j' && e[1] === ':' ? e.substr(2) : e;
}
class Mm {
  constructor(t, n = {}) {
    (this.changeListeners = []),
      (this.HAS_DOCUMENT_COOKIE = !1),
      (this.update = () => {
        if (!this.HAS_DOCUMENT_COOKIE) return;
        const i = this.cookies;
        (this.cookies = aa.parse(document.cookie)), this._checkChanges(i);
      });
    const r = typeof document > 'u' ? '' : document.cookie;
    (this.cookies = K0(t || r)), (this.defaultSetOptions = n), (this.HAS_DOCUMENT_COOKIE = q0());
  }
  _emitChange(t) {
    for (let n = 0; n < this.changeListeners.length; ++n) this.changeListeners[n](t);
  }
  _checkChanges(t) {
    new Set(Object.keys(t).concat(Object.keys(this.cookies))).forEach((r) => {
      t[r] !== this.cookies[r] && this._emitChange({ name: r, value: Ho(this.cookies[r]) });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(t, n = {}) {
    return n.doNotUpdate || this.update(), Ho(this.cookies[t], n);
  }
  getAll(t = {}) {
    t.doNotUpdate || this.update();
    const n = {};
    for (let r in this.cookies) n[r] = Ho(this.cookies[r], t);
    return n;
  }
  set(t, n, r) {
    r ? (r = Object.assign(Object.assign({}, this.defaultSetOptions), r)) : (r = this.defaultSetOptions);
    const i = typeof n == 'string' ? n : JSON.stringify(n);
    (this.cookies = Object.assign(Object.assign({}, this.cookies), { [t]: i })),
      this.HAS_DOCUMENT_COOKIE && (document.cookie = aa.serialize(t, i, r)),
      this._emitChange({ name: t, value: n, options: r });
  }
  remove(t, n) {
    const r = (n = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), n), {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    }));
    (this.cookies = Object.assign({}, this.cookies)),
      delete this.cookies[t],
      this.HAS_DOCUMENT_COOKIE && (document.cookie = aa.serialize(t, '', r)),
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
const zm = E.createContext(new Mm()),
  { Provider: G0, Consumer: v2 } = zm;
class X0 extends E.Component {
  constructor(t) {
    super(t), t.cookies ? (this.cookies = t.cookies) : (this.cookies = new Mm(void 0, t.defaultSetOptions));
  }
  render() {
    return E.createElement(G0, { value: this.cookies }, this.props.children);
  }
}
var jm = { exports: {} },
  D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf;
function J0() {
  if (pf) return D;
  pf = 1;
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
    p = e ? Symbol.for('react.scope') : 60119;
  function m(y) {
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
    return m(y) === u;
  }
  return (
    (D.AsyncMode = l),
    (D.ConcurrentMode = u),
    (D.ContextConsumer = s),
    (D.ContextProvider = o),
    (D.Element = t),
    (D.ForwardRef = c),
    (D.Fragment = r),
    (D.Lazy = w),
    (D.Memo = g),
    (D.Portal = n),
    (D.Profiler = a),
    (D.StrictMode = i),
    (D.Suspense = f),
    (D.isAsyncMode = function (y) {
      return S(y) || m(y) === l;
    }),
    (D.isConcurrentMode = S),
    (D.isContextConsumer = function (y) {
      return m(y) === s;
    }),
    (D.isContextProvider = function (y) {
      return m(y) === o;
    }),
    (D.isElement = function (y) {
      return typeof y == 'object' && y !== null && y.$$typeof === t;
    }),
    (D.isForwardRef = function (y) {
      return m(y) === c;
    }),
    (D.isFragment = function (y) {
      return m(y) === r;
    }),
    (D.isLazy = function (y) {
      return m(y) === w;
    }),
    (D.isMemo = function (y) {
      return m(y) === g;
    }),
    (D.isPortal = function (y) {
      return m(y) === n;
    }),
    (D.isProfiler = function (y) {
      return m(y) === a;
    }),
    (D.isStrictMode = function (y) {
      return m(y) === i;
    }),
    (D.isSuspense = function (y) {
      return m(y) === f;
    }),
    (D.isValidElementType = function (y) {
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
            y.$$typeof === p ||
            y.$$typeof === v))
      );
    }),
    (D.typeOf = m),
    D
  );
}
jm.exports = J0();
var Z0 = jm.exports,
  Dm = Z0,
  ew = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  tw = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Fm = {};
Fm[Dm.ForwardRef] = ew;
Fm[Dm.Memo] = tw;
function nw() {
  return typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
}
function y2(e) {
  const t = E.useContext(zm);
  if (!t) throw new Error('Missing <CookiesProvider>');
  const [n, r] = E.useState(() => t.getAll({ doNotUpdate: !0 }));
  nw() &&
    E.useLayoutEffect(() => {
      function s() {
        const l = t.getAll({ doNotUpdate: !0 });
        rw(e || null, l, n) && r(l);
      }
      return (
        t.addChangeListener(s),
        () => {
          t.removeChangeListener(s);
        }
      );
    }, [t, n]);
  const i = E.useMemo(() => t.set.bind(t), [t]),
    a = E.useMemo(() => t.remove.bind(t), [t]),
    o = E.useMemo(() => t.update.bind(t), [t]);
  return [n, i, a, o];
}
function rw(e, t, n) {
  if (!e) return !0;
  for (let r of e) if (t[r] !== n[r]) return !0;
  return !1;
}
const iw = () => F.jsx(X0, { defaultSetOptions: { path: '/' }, children: F.jsx(H0, {}) }),
  aw = {
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
class Ma {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || 'i18next:'), (this.logger = t || aw), (this.options = n), (this.debug = n.debug);
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
    return new Ma(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
  }
  clone(t) {
    return (t = t || this.options), (t.prefix = t.prefix || this.prefix), new Ma(this.logger, t);
  }
}
var Ze = new Ma();
class uo {
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
function pr() {
  let e, t;
  const n = new Promise((r, i) => {
    (e = r), (t = i);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function mf(e) {
  return e == null ? '' : '' + e;
}
function ow(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const sw = /###/g;
function Rr(e, t, n) {
  function r(s) {
    return s && s.indexOf('###') > -1 ? s.replace(sw, '.') : s;
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
function hf(e, t, n) {
  const { obj: r, k: i } = Rr(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let a = t[t.length - 1],
    o = t.slice(0, t.length - 1),
    s = Rr(e, o, Object);
  for (; s.obj === void 0 && o.length; )
    (a = `${o[o.length - 1]}.${a}`),
      (o = o.slice(0, o.length - 1)),
      (s = Rr(e, o, Object)),
      s && s.obj && typeof s.obj[`${s.k}.${a}`] < 'u' && (s.obj = void 0);
  s.obj[`${s.k}.${a}`] = n;
}
function lw(e, t, n, r) {
  const { obj: i, k: a } = Rr(e, t, Object);
  (i[a] = i[a] || []), i[a].push(n);
}
function za(e, t) {
  const { obj: n, k: r } = Rr(e, t);
  if (n) return n[r];
}
function uw(e, t, n) {
  const r = za(e, n);
  return r !== void 0 ? r : za(t, n);
}
function $m(e, t, n) {
  for (const r in t)
    r !== '__proto__' &&
      r !== 'constructor' &&
      (r in e
        ? typeof e[r] == 'string' || e[r] instanceof String || typeof t[r] == 'string' || t[r] instanceof String
          ? n && (e[r] = t[r])
          : $m(e[r], t[r], n)
        : (e[r] = t[r]));
  return e;
}
function kn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var cw = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
function fw(e) {
  return typeof e == 'string' ? e.replace(/[&<>"'\/]/g, (t) => cw[t]) : e;
}
class dw {
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
const pw = [' ', ',', '?', '!', ';'],
  mw = new dw(20);
function hw(e, t, n) {
  (t = t || ''), (n = n || '');
  const r = pw.filter((o) => t.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (r.length === 0) return !0;
  const i = mw.getRegExp(`(${r.map((o) => (o === '?' ? '\\?' : o)).join('|')})`);
  let a = !i.test(e);
  if (!a) {
    const o = e.indexOf(n);
    o > 0 && !i.test(e.substring(0, o)) && (a = !0);
  }
  return a;
}
function al(e, t) {
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
function ja(e) {
  return e && e.indexOf('_') > 0 ? e.replace('_', '-') : e;
}
class gf extends uo {
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
    const l = za(this.data, s);
    return (
      !l && !n && !r && t.indexOf('.') > -1 && ((t = s[0]), (n = s[1]), (r = s.slice(2).join('.'))),
      l || !o || typeof r != 'string' ? l : al(this.data && this.data[t] && this.data[t][n], r, a)
    );
  }
  addResource(t, n, r, i) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const o = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let s = [t, n];
    r && (s = s.concat(o ? r.split(o) : r)),
      t.indexOf('.') > -1 && ((s = t.split('.')), (i = n), (n = s[1])),
      this.addNamespaces(n),
      hf(this.data, s, i),
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
    let l = za(this.data, s) || {};
    o.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? $m(l, r, a) : (l = { ...l, ...r }),
      hf(this.data, s, l),
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
var Vm = {
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
const vf = {};
class Da extends uo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      ow(
        ['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Ze.create('translator'));
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
        !hw(t, r, i);
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
      p = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      p &&
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
            const O = `${k}${a}${b}`;
            (y[b] = this.translate(O, { ...n, joinArrays: !1, ns: s })), y[b] === O && (y[b] = d[b]);
          }
        d = y;
      }
    } else if (p && typeof h == 'string' && v === '[object Array]')
      (d = d.join(h)), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let S = !1,
        y = !1;
      const k = n.count !== void 0 && typeof n.count != 'string',
        b = Da.hasDefaultValue(n),
        O = k ? this.pluralResolver.getSuffix(u, n.count, n) : '',
        z = n.ordinal && k ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 }) : '',
        _ = k && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        le =
          (_ && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${O}`] ||
          n[`defaultValue${z}`] ||
          n.defaultValue;
      !this.isValidLookup(d) && b && ((S = !0), (d = le)), this.isValidLookup(d) || ((y = !0), (d = o));
      const Bt = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && y ? void 0 : d,
        gt = b && le !== d && this.options.updateMissing;
      if (y || S || gt) {
        if ((this.logger.log(gt ? 'updateKey' : 'missingKey', u, l, o, gt ? le : d), a)) {
          const P = this.resolve(o, { ...n, keySeparator: !1 });
          P &&
            P.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let Wt = [];
        const vt = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && vt && vt[0])
          for (let P = 0; P < vt.length; P++) Wt.push(vt[P]);
        else
          this.options.saveMissingTo === 'all'
            ? (Wt = this.languageUtils.toResolveHierarchy(n.lng || this.language))
            : Wt.push(n.lng || this.language);
        const wn = (P, I, R) => {
          const q = b && R !== d ? R : Bt;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(P, l, I, q, gt, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(P, l, I, q, gt, n),
            this.emit('missingKey', P, l, I, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && k
            ? Wt.forEach((P) => {
                const I = this.pluralResolver.getSuffixes(P, n);
                _ &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  I.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  I.push(`${this.options.pluralSeparator}zero`),
                  I.forEach((R) => {
                    wn([P], o + R, n[`defaultValue${R}`] || le);
                  });
              })
            : wn(Wt, o, le));
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
        (t = Vm.handle(
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
            !vf[`${v[0]}-${x}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((vf[`${v[0]}-${x}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${v.join(', ')}" won't get resolved as namespace "${s}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            v.forEach((h) => {
              if (this.isValidLookup(r)) return;
              o = h;
              const p = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(p, c, h, x, n);
              else {
                let S;
                d && (S = this.pluralResolver.getSuffix(h, n.count, n));
                const y = `${this.options.pluralSeparator}zero`,
                  k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (p.push(c + S),
                    n.ordinal && S.indexOf(k) === 0 && p.push(c + S.replace(k, this.options.pluralSeparator)),
                    g && p.push(c + y)),
                  w)
                ) {
                  const b = `${c}${this.options.contextSeparator}${n.context}`;
                  p.push(b),
                    d &&
                      (p.push(b + S),
                      n.ordinal && S.indexOf(k) === 0 && p.push(b + S.replace(k, this.options.pluralSeparator)),
                      g && p.push(b + y));
                }
              }
              let m;
              for (; (m = p.pop()); ) this.isValidLookup(r) || ((a = m), (r = this.getResource(h, x, m, n)));
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
function Yo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class yf {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Ze.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = ja(t)), !t || t.indexOf('-') < 0)) return null;
    const n = t.split('-');
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = ja(t)), !t || t.indexOf('-') < 0)) return t;
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
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Yo(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== 'sgn' && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Yo(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Yo(r[2].toLowerCase()))),
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
let gw = [
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
  vw = {
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
const yw = ['v1', 'v2', 'v3'],
  ww = ['v4'],
  wf = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function Sw() {
  const e = {};
  return (
    gw.forEach((t) => {
      t.lngs.forEach((n) => {
        e[n] = { numbers: t.nr, plurals: vw[t.fc] };
      });
    }),
    e
  );
}
class xw {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = Ze.create('pluralResolver')),
      (!this.options.compatibilityJSON || ww.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = Sw());
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(ja(t === 'dev' ? 'en' : t), { type: n.ordinal ? 'ordinal' : 'cardinal' });
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
            .pluralCategories.sort((i, a) => wf[i] - wf[a])
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
    return !yw.includes(this.options.compatibilityJSON);
  }
}
function Sf(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    a = uw(e, t, n);
  return !a && i && typeof n == 'string' && ((a = al(e, n, r)), a === void 0 && (a = al(t, n, r))), a;
}
class kw {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ze.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const n = t.interpolation;
    (this.escape = n.escape !== void 0 ? n.escape : fw),
      (this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0),
      (this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
      (this.prefix = n.prefix ? kn(n.prefix) : n.prefixEscaped || '{{'),
      (this.suffix = n.suffix ? kn(n.suffix) : n.suffixEscaped || '}}'),
      (this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ','),
      (this.unescapePrefix = n.unescapeSuffix ? '' : n.unescapePrefix || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : n.unescapeSuffix || ''),
      (this.nestingPrefix = n.nestingPrefix ? kn(n.nestingPrefix) : n.nestingPrefixEscaped || kn('$t(')),
      (this.nestingSuffix = n.nestingSuffix ? kn(n.nestingSuffix) : n.nestingSuffixEscaped || kn(')')),
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
        const p = Sf(n, l, w, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(p, void 0, r, { ...i, ...n, interpolationkey: w }) : p;
      }
      const v = w.split(this.formatSeparator),
        x = v.shift().trim(),
        h = v.join(this.formatSeparator).trim();
      return this.format(Sf(n, l, x, this.options.keySeparator, this.options.ignoreJSONStructure), h, r, {
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
          else typeof o != 'string' && !this.useRawValueToEscape && (o = mf(o));
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
      typeof a != 'string' && (a = mf(a)),
        a || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), (a = '')),
        u && (a = l.reduce((c, f) => this.format(c, f, r.lng, { ...r, interpolationkey: i[1].trim() }), a.trim())),
        (t = t.replace(i[0], a)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
function bw(e) {
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
function bn(e) {
  const t = {};
  return function (r, i, a) {
    const o = i + JSON.stringify(a);
    let s = t[o];
    return s || ((s = e(ja(i), a)), (t[o] = s)), s(r);
  };
}
class Cw {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ze.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: bn((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (a) => i.format(a);
        }),
        currency: bn((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: 'currency' });
          return (a) => i.format(a);
        }),
        datetime: bn((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (a) => i.format(a);
        }),
        relativetime: bn((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (a) => i.format(a, r.range || 'day');
        }),
        list: bn((n, r) => {
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
    this.formats[t.toLowerCase().trim()] = bn(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((s, l) => {
      const { formatName: u, formatOptions: c } = bw(l);
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
function Ew(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class Pw extends uo {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = Ze.create('backendConnector')),
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
      lw(l.loaded, [a], o),
        Ew(l, t),
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
function xf() {
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
function kf(e) {
  return (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs && e.supportedLngs.indexOf('cimode') < 0 && (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  );
}
function Wi() {}
function Ow(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == 'function' && (e[n] = e[n].bind(e));
  });
}
class ni extends uo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = kf(t)),
      (this.services = {}),
      (this.logger = Ze),
      (this.modules = { external: [] }),
      Ow(this),
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
    const i = xf();
    (this.options = { ...i, ...this.options, ...kf(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = { ...i.interpolation, ...this.options.interpolation }),
      n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function a(c) {
      return c ? (typeof c == 'function' ? new c() : c) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Ze.init(a(this.modules.logger), this.options) : Ze.init(null, this.options);
      let c;
      this.modules.formatter ? (c = this.modules.formatter) : typeof Intl < 'u' && (c = Cw);
      const f = new yf(this.options);
      this.store = new gf(this.options.resources, this.options);
      const d = this.services;
      (d.logger = Ze),
        (d.resourceStore = this.store),
        (d.languageUtils = f),
        (d.pluralResolver = new xw(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) &&
          ((d.formatter = a(c)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(d.formatter))),
        (d.interpolator = new kw(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new Pw(a(this.modules.backend), d.resourceStore, d, this.options)),
        d.backendConnector.on('*', function (g) {
          for (var w = arguments.length, v = new Array(w > 1 ? w - 1 : 0), x = 1; x < w; x++) v[x - 1] = arguments[x];
          t.emit(g, ...v);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = a(this.modules.languageDetector)),
          d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = a(this.modules.i18nFormat)), d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Da(this.services, this.options)),
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
      r || (r = Wi),
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
    const l = pr(),
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
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wi;
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
    const i = pr();
    return (
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Wi),
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
      t.type === 'postProcessor' && Vm.addPostProcessor(t),
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
    const i = pr();
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
    const r = pr();
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
    const r = pr();
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
      r = (this.services && this.services.languageUtils) || new yf(xf());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new ni(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wi;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      a = new ni(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) && (a.logger = a.logger.clone(t)),
      ['store', 'services', 'language'].forEach((s) => {
        a[s] = this[s];
      }),
      (a.services = { ...this.services }),
      (a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }),
      r && ((a.store = new gf(this.store.data, i)), (a.services.resourceStore = a.store)),
      (a.translator = new Da(a.services, i)),
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
const ge = ni.createInstance();
ge.createInstance = ni.createInstance;
ge.createInstance;
ge.dir;
ge.init;
ge.loadResources;
ge.reloadResources;
ge.use;
ge.changeLanguage;
ge.getFixedT;
ge.t;
ge.exists;
ge.setDefaultNamespace;
ge.hasLoadedNamespace;
ge.loadNamespaces;
ge.loadLanguages;
const Nw = 'Indicates a required ﬁeld',
  Lw = 'Français',
  Tw = 'Your Vehicle Renewal Reminder',
  Iw = 'Manage how and when you get your vehicle registration renewal reminders',
  Rw = {
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
  _w = {
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
  Aw = {
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
  Mw = {
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
  zw = {
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
  jw = {
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
    errorModal: {
      title: 'Error',
      content: 'Sorry, we are currently experiencing technical difficulties. Please try again later.',
      buttonText: 'OK',
    },
  },
  Dw = { unavailableVehicle: 'Vehicle details currently unavailable.' },
  Fw = { copyright: '© Government of New Brunswick', privacy: '<1>Privacy</1>', disclaimer: '<1>Disclaimer</1>' },
  $w = {
    disclaimer: Nw,
    SwitchLanguage: Lw,
    pageTitle: Tw,
    pageDescription: Iw,
    mainNavigation: Rw,
    notFound: _w,
    notifications: Aw,
    accountSettings: Mw,
    authentication: zw,
    errorsMsg: jw,
    warningMsg: Dw,
    footer: Fw,
  },
  Vw = 'Indique un champ obligatoire',
  Uw = 'English',
  Bw = "Rappel pour le renouvellement de l'immatriculation de votre véhicule",
  Ww =
    'Gérez le moment et la manière dont vous recevez les rappels de renouvellement d’immatriculation de votre véhicule.',
  Hw = {
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
  Yw = {
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
  qw = {
    backButton: 'Précédent',
    heading: 'Rappels de renouvellement de l’immatriculation des véhicules',
    checkboxHeading: "Choisissez autant d'options que vous le souhaitez :",
    subsectionOne: {
      heading: 'Rappel par courriel et par texto',
      subhead: 'Choisissez quand et comment vous recevez vos rappels.',
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
  Kw = {
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
  Qw = {
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
  Gw = {
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
    errorModal: {
      title: 'Erreur',
      content: 'Désolé, nous rencontrons actuellement des difficultés techniques. Veuillez réessayer ultérieurement.',
      buttonText: 'OK',
    },
  },
  Xw = { unavailableVehicle: 'Les détails du véhicule ne sont pas disponibles pour le moment.' },
  Jw = {
    copyright: '© Gouvernement du Nouveau-Brunswick',
    privacy: '<1>Confidentialité</1>',
    disclaimer: '<1>Décharge</1>',
  },
  Zw = {
    disclaimer: Vw,
    SwitchLanguage: Uw,
    pageTitle: Bw,
    pageDescription: Ww,
    mainNavigation: Hw,
    notFound: Yw,
    notifications: qw,
    accountSettings: Kw,
    authentication: Qw,
    errorsMsg: Gw,
    warningMsg: Xw,
    footer: Jw,
  },
  eS = { en: { translation: $w }, fr: { translation: Zw } };
ge.use(A0).init({ resources: eS, fallbackLng: 'en', supportedLngs: ['en', 'fr'], interpolation: { escapeValue: !1 } });
function Ke(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == 'object' && t === '[object Date]')
    ? new e.constructor(+e)
    : typeof e == 'number' || t === '[object Number]' || typeof e == 'string' || t === '[object String]'
    ? new Date(e)
    : new Date(NaN);
}
function mn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Um = 6048e5,
  tS = 864e5;
let nS = {};
function co() {
  return nS;
}
function ri(e, t) {
  var s, l, u, c;
  const n = co(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ??
      0,
    i = Ke(e),
    a = i.getDay(),
    o = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function Fa(e) {
  return ri(e, { weekStartsOn: 1 });
}
function Bm(e) {
  const t = Ke(e),
    n = t.getFullYear(),
    r = mn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = Fa(r),
    a = mn(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const o = Fa(a);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function bf(e) {
  const t = Ke(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Cf(e) {
  const t = Ke(e),
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
function rS(e, t) {
  const n = bf(e),
    r = bf(t),
    i = +n - Cf(n),
    a = +r - Cf(r);
  return Math.round((i - a) / tS);
}
function iS(e) {
  const t = Bm(e),
    n = mn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Fa(n);
}
function aS(e) {
  return e instanceof Date || (typeof e == 'object' && Object.prototype.toString.call(e) === '[object Date]');
}
function oS(e) {
  if (!aS(e) && typeof e != 'number') return !1;
  const t = Ke(e);
  return !isNaN(Number(t));
}
function sS(e) {
  const t = Ke(e),
    n = mn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const lS = {
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
  uS = (e, t, n) => {
    let r;
    const i = lS[e];
    return (
      typeof i == 'string' ? (r = i) : t === 1 ? (r = i.one) : (r = i.other.replace('{{count}}', t.toString())),
      n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
    );
  };
function qo(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const cS = { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
  fS = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  dS = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  pS = {
    date: qo({ formats: cS, defaultWidth: 'full' }),
    time: qo({ formats: fS, defaultWidth: 'full' }),
    dateTime: qo({ formats: dS, defaultWidth: 'full' }),
  },
  mS = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  hS = (e, t, n, r) => mS[e];
function mr(e) {
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
const gS = { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
  vS = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  yS = {
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
  wS = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  SS = {
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
  xS = {
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
  kS = (e, t) => {
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
  bS = {
    ordinalNumber: kS,
    era: mr({ values: gS, defaultWidth: 'wide' }),
    quarter: mr({ values: vS, defaultWidth: 'wide', argumentCallback: (e) => e - 1 }),
    month: mr({ values: yS, defaultWidth: 'wide' }),
    day: mr({ values: wS, defaultWidth: 'wide' }),
    dayPeriod: mr({ values: SS, defaultWidth: 'wide', formattingValues: xS, defaultFormattingWidth: 'wide' }),
  };
function hr(e) {
  return (t, n = {}) => {
    const r = n.width,
      i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      a = t.match(i);
    if (!a) return null;
    const o = a[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s) ? ES(s, (f) => f.test(o)) : CS(s, (f) => f.test(o));
    let u;
    (u = e.valueCallback ? e.valueCallback(l) : l), (u = n.valueCallback ? n.valueCallback(u) : u);
    const c = t.slice(o.length);
    return { value: u, rest: c };
  };
}
function CS(e, t) {
  for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function ES(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function PS(e) {
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
const OS = /^(\d+)(th|st|nd|rd)?/i,
  NS = /\d+/i,
  LS = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  TS = { any: [/^b/i, /^(a|c)/i] },
  IS = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  RS = { any: [/1/i, /2/i, /3/i, /4/i] },
  _S = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  AS = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  MS = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  zS = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  jS = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  DS = {
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
  FS = {
    ordinalNumber: PS({ matchPattern: OS, parsePattern: NS, valueCallback: (e) => parseInt(e, 10) }),
    era: hr({ matchPatterns: LS, defaultMatchWidth: 'wide', parsePatterns: TS, defaultParseWidth: 'any' }),
    quarter: hr({
      matchPatterns: IS,
      defaultMatchWidth: 'wide',
      parsePatterns: RS,
      defaultParseWidth: 'any',
      valueCallback: (e) => e + 1,
    }),
    month: hr({ matchPatterns: _S, defaultMatchWidth: 'wide', parsePatterns: AS, defaultParseWidth: 'any' }),
    day: hr({ matchPatterns: MS, defaultMatchWidth: 'wide', parsePatterns: zS, defaultParseWidth: 'any' }),
    dayPeriod: hr({ matchPatterns: jS, defaultMatchWidth: 'any', parsePatterns: DS, defaultParseWidth: 'any' }),
  },
  $S = {
    code: 'en-US',
    formatDistance: uS,
    formatLong: pS,
    formatRelative: hS,
    localize: bS,
    match: FS,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function VS(e) {
  const t = Ke(e);
  return rS(t, sS(t)) + 1;
}
function US(e) {
  const t = Ke(e),
    n = +Fa(t) - +iS(t);
  return Math.round(n / Um) + 1;
}
function Wm(e, t) {
  var c, f, d, g;
  const n = Ke(e),
    r = n.getFullYear(),
    i = co(),
    a =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((f = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null
        ? void 0
        : f.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((g = (d = i.locale) == null ? void 0 : d.options) == null ? void 0 : g.firstWeekContainsDate) ??
      1,
    o = mn(e, 0);
  o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
  const s = ri(o, t),
    l = mn(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const u = ri(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function BS(e, t) {
  var s, l, u, c;
  const n = co(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null
        ? void 0
        : l.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ??
      1,
    i = Wm(e, t),
    a = mn(e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), ri(a, t);
}
function WS(e, t) {
  const n = Ke(e),
    r = +ri(n, t) - +BS(n, t);
  return Math.round(r / Um) + 1;
}
function $(e, t) {
  const n = e < 0 ? '-' : '',
    r = Math.abs(e).toString().padStart(t, '0');
  return n + r;
}
const wt = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return $(t === 'yy' ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === 'M' ? String(n + 1) : $(n + 1, 2);
    },
    d(e, t) {
      return $(e.getDate(), t.length);
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
      return $(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return $(e.getHours(), t.length);
    },
    m(e, t) {
      return $(e.getMinutes(), t.length);
    },
    s(e, t) {
      return $(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        i = Math.trunc(r * Math.pow(10, n - 3));
      return $(i, t.length);
    },
  },
  Cn = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  Ef = {
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
      return wt.y(e, t);
    },
    Y: function (e, t, n, r) {
      const i = Wm(e, r),
        a = i > 0 ? i : 1 - i;
      if (t === 'YY') {
        const o = a % 100;
        return $(o, 2);
      }
      return t === 'Yo' ? n.ordinalNumber(a, { unit: 'year' }) : $(a, t.length);
    },
    R: function (e, t) {
      const n = Bm(e);
      return $(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return $(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(r);
        case 'QQ':
          return $(r, 2);
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
          return $(r, 2);
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
          return wt.M(e, t);
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
          return $(r + 1, 2);
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
      const i = WS(e, r);
      return t === 'wo' ? n.ordinalNumber(i, { unit: 'week' }) : $(i, t.length);
    },
    I: function (e, t, n) {
      const r = US(e);
      return t === 'Io' ? n.ordinalNumber(r, { unit: 'week' }) : $(r, t.length);
    },
    d: function (e, t, n) {
      return t === 'do' ? n.ordinalNumber(e.getDate(), { unit: 'date' }) : wt.d(e, t);
    },
    D: function (e, t, n) {
      const r = VS(e);
      return t === 'Do' ? n.ordinalNumber(r, { unit: 'dayOfYear' }) : $(r, t.length);
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
          return $(a, 2);
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
          return $(a, t.length);
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
          return $(i, t.length);
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
      switch ((r === 12 ? (i = Cn.noon) : r === 0 ? (i = Cn.midnight) : (i = r / 12 >= 1 ? 'pm' : 'am'), t)) {
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
        (r >= 17 ? (i = Cn.evening) : r >= 12 ? (i = Cn.afternoon) : r >= 4 ? (i = Cn.morning) : (i = Cn.night), t)
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
      return wt.h(e, t);
    },
    H: function (e, t, n) {
      return t === 'Ho' ? n.ordinalNumber(e.getHours(), { unit: 'hour' }) : wt.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === 'Ko' ? n.ordinalNumber(r, { unit: 'hour' }) : $(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return r === 0 && (r = 24), t === 'ko' ? n.ordinalNumber(r, { unit: 'hour' }) : $(r, t.length);
    },
    m: function (e, t, n) {
      return t === 'mo' ? n.ordinalNumber(e.getMinutes(), { unit: 'minute' }) : wt.m(e, t);
    },
    s: function (e, t, n) {
      return t === 'so' ? n.ordinalNumber(e.getSeconds(), { unit: 'second' }) : wt.s(e, t);
    },
    S: function (e, t) {
      return wt.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return 'Z';
      switch (t) {
        case 'X':
          return Of(r);
        case 'XXXX':
        case 'XX':
          return Gt(r);
        case 'XXXXX':
        case 'XXX':
        default:
          return Gt(r, ':');
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'x':
          return Of(r);
        case 'xxxx':
        case 'xx':
          return Gt(r);
        case 'xxxxx':
        case 'xxx':
        default:
          return Gt(r, ':');
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Pf(r, ':');
        case 'OOOO':
        default:
          return 'GMT' + Gt(r, ':');
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Pf(r, ':');
        case 'zzzz':
        default:
          return 'GMT' + Gt(r, ':');
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return $(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return $(r, t.length);
    },
  };
function Pf(e, t = '') {
  const n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    i = Math.trunc(r / 60),
    a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + $(a, 2);
}
function Of(e, t) {
  return e % 60 === 0 ? (e > 0 ? '-' : '+') + $(Math.abs(e) / 60, 2) : Gt(e, t);
}
function Gt(e, t = '') {
  const n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    i = $(Math.trunc(r / 60), 2),
    a = $(r % 60, 2);
  return n + i + t + a;
}
const Nf = (e, t) => {
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
  Hm = (e, t) => {
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
  HS = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      i = n[2];
    if (!i) return Nf(e, t);
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
    return a.replace('{{date}}', Nf(r, t)).replace('{{time}}', Hm(i, t));
  },
  YS = { p: Hm, P: HS },
  qS = /^D+$/,
  KS = /^Y+$/,
  QS = ['D', 'DD', 'YY', 'YYYY'];
function GS(e) {
  return qS.test(e);
}
function XS(e) {
  return KS.test(e);
}
function JS(e, t, n) {
  const r = ZS(e, t, n);
  if ((console.warn(r), QS.includes(e))) throw new RangeError(r);
}
function ZS(e, t, n) {
  const r = e[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const e2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  t2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  n2 = /^'([^]*?)'?$/,
  r2 = /''/g,
  i2 = /[a-zA-Z]/;
function a2(e, t, n) {
  var c, f, d, g, w, v, x, h;
  const r = co(),
    i = (n == null ? void 0 : n.locale) ?? r.locale ?? $S,
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
    s = Ke(e);
  if (!oS(s)) throw new RangeError('Invalid time value');
  let l = t
    .match(t2)
    .map((p) => {
      const m = p[0];
      if (m === 'p' || m === 'P') {
        const S = YS[m];
        return S(p, i.formatLong);
      }
      return p;
    })
    .join('')
    .match(e2)
    .map((p) => {
      if (p === "''") return { isToken: !1, value: "'" };
      const m = p[0];
      if (m === "'") return { isToken: !1, value: o2(p) };
      if (Ef[m]) return { isToken: !0, value: p };
      if (m.match(i2)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + m + '`');
      return { isToken: !1, value: p };
    });
  i.localize.preprocessor && (l = i.localize.preprocessor(s, l));
  const u = { firstWeekContainsDate: a, weekStartsOn: o, locale: i };
  return l
    .map((p) => {
      if (!p.isToken) return p.value;
      const m = p.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && XS(m)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && GS(m))) &&
        JS(m, t, String(e));
      const S = Ef[m[0]];
      return S(s, m, i.localize, u);
    })
    .join('');
}
function o2(e) {
  const t = e.match(n2);
  return t ? t[1].replace(r2, "'") : e;
}
const s2 = () => `${a2('2025-07-20T23:48:30.903Z', 'yyyy-MM-dd h:mma O')}`,
  l2 = '/notifications',
  Ym = l2;
console.log(`
  build info - build version: 1.0.2
  build date: ${s2()}`);
console.log('Debug: browser base url is:', Ym);
Ko.createRoot(document.getElementById('root')).render(
  F.jsx(Va.StrictMode, { children: F.jsx(vy, { basename: Ym, children: F.jsx(iw, {}) }) })
);
export {
  mr as A,
  hr as B,
  PS as C,
  ge as D,
  rl as E,
  mi as F,
  _0 as G,
  I0 as H,
  b0 as I,
  M0 as J,
  qt as S,
  y2 as a,
  d2 as b,
  u2 as c,
  h2 as d,
  Qv as e,
  g2 as f,
  f2 as g,
  ru as h,
  p2 as i,
  F as j,
  y0 as k,
  mn as l,
  a2 as m,
  c2 as n,
  ol as o,
  r0 as p,
  x0 as q,
  E as r,
  m2 as s,
  Ke as t,
  F0 as u,
  w0 as v,
  qo as w,
  FS as x,
  bS as y,
  hS as z,
};
