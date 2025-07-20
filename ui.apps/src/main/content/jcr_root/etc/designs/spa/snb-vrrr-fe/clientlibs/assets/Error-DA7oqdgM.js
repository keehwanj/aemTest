import {
  u as Fe,
  b as ke,
  j as f,
  R as ge,
  T as ye,
  o as ct,
  r as Ue,
  a as lt,
  U as ut,
  k as Be,
  F as re,
  V as ft,
  W as dt,
} from './index-NJoNK3zP.js';
import { T as Ee } from './useMetadata-DMg20NCT.js';
const dr = ({ variant: e }) => {
    const { t } = Fe(),
      [n] = ke(['language']),
      r = n.language,
      s = r === 'fr-CA' ? ge.FR : ge.EN,
      o = r === 'fr-CA' ? ye.FR : ye.EN;
    return f.jsx('footer', {
      className: `gnb-footer gnb-footer-${e}`,
      children: f.jsx('div', {
        className: 'container-fluid',
        children: f.jsxs('div', {
          className: 'row',
          children: [
            f.jsx('div', {
              className: 'col-md-6',
              children: f.jsx('p', { className: 'copyright', children: t('footer.copyright') }),
            }),
            f.jsx('div', {
              className: 'col-md-6',
              children: f.jsx('nav', {
                className: 'nav-legal',
                children: f.jsxs('ul', {
                  children: [
                    f.jsx('li', {
                      children: f.jsx(Ee, {
                        i18nKey: 'footer.privacy',
                        components: {
                          1: f.jsx('a', { href: s, target: '_blank', rel: 'noreferrer', children: 'Privary' }),
                        },
                      }),
                    }),
                    f.jsx('li', {
                      children: f.jsx(Ee, {
                        i18nKey: 'footer.disclaimer',
                        components: {
                          1: f.jsx('a', { href: o, target: '_blank', rel: 'noreferrer', children: 'Disclaimer' }),
                        },
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    });
  },
  ht = '/etc/designs/spa/snb-vrrr-fe/clientlibs/',
  hr = ({ showCart: e, menuOptions: t, showSearch: n, signedIn: r, accountOptions: s }) => {
    const [, o] = ke(['session', 'language', 'rememberMe', 'sessionExpiry']),
      i = ct(),
      [c, d] = Ue.useState(!1),
      { logout: l } = lt();
    function u() {
      ut.forEach(({ menu: h, button: w }) => {
        const R = document.getElementById(h),
          S = document.getElementById(w);
        R && S && (R.classList.remove('show'), S.classList.remove('show'), S.setAttribute('aria-expanded', 'false')),
          d(!1);
      });
    }
    function p(h, w) {
      const R = document.getElementById(h),
        S = document.getElementById(w);
      R &&
        S &&
        (R.classList.contains('show')
          ? (R.classList.remove('show'), S.classList.remove('show'), S.setAttribute('aria-expanded', 'false'), d(!1))
          : (u(), R.classList.add('show'), S.classList.add('show'), S.setAttribute('aria-expanded', 'true'), d(!0)));
    }
    const { t: y, i18n: x } = Fe(),
      m = () => {
        const w = x.language === 'fr-CA' ? 'en-CA' : 'fr-CA';
        x.changeLanguage(w), o('language', w);
      },
      b = (h, w) => {
        const R = h.map((S, j) => {
          const { link: T, text: P } = S;
          return w
            ? f.jsx(
                'li',
                {
                  children: f.jsx('a', {
                    href: '#',
                    onClick: () => {
                      T === '/authentication' ? l(!0) : i(T);
                    },
                    children: P,
                  }),
                },
                j.toString()
              )
            : f.jsx(
                'li',
                { style: { paddingBottom: '15px' }, children: f.jsx('div', { children: P }) },
                j.toString() + 'static'
              );
        });
        return f.jsx(f.Fragment, { children: R });
      };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsxs('header', {
          className: 'gnb-header',
          children: [
            f.jsx('div', {
              className: 'logo',
              children: f.jsx('a', {
                href: 'https://www.gnb.ca',
                children: f.jsx('img', {
                  src: ht + 'images/new-brunswick-logo.svg',
                  alt: y('mainNavigation.governmentOfNewBrunswick'),
                  id: 'logo',
                }),
              }),
            }),
            f.jsx('div', {
              className: 'gnb-main-nav',
              children: f.jsx('nav', {
                children: f.jsxs('ul', {
                  children: [
                    f.jsx('li', {
                      children: f.jsx('a', { href: '#', onClick: () => m(), children: y('SwitchLanguage') }),
                    }),
                    e &&
                      f.jsx('li', {
                        children: f.jsx('button', {
                          className: 'btn-cart',
                          children: f.jsx('span', { children: y('mainNavigation.cart') }),
                        }),
                      }),
                    n &&
                      f.jsx('li', {
                        children: f.jsx('button', {
                          'aria-expanded': 'false',
                          id: 'btn-search',
                          className: 'btn-search',
                          onClick: () => p('gnb-search', 'btn-search'),
                          children: f.jsx('span', { children: y('mainNavigation.search') }),
                        }),
                      }),
                    s[0] &&
                      f.jsx(f.Fragment, {
                        children:
                          r &&
                          f.jsx('li', {
                            children: f.jsx('button', {
                              'aria-expanded': 'false',
                              id: 'btn-account',
                              className: 'btn-account',
                              onClick: () => p('gnb-account', 'btn-account'),
                              children: f.jsx('span', { children: y('mainNavigation.account') }),
                            }),
                          }),
                      }),
                    t &&
                      f.jsx('li', {
                        children: f.jsx('button', {
                          'aria-expanded': 'false',
                          id: 'btn-mega-menu',
                          onClick: () => p('gnb-mega-menu', 'btn-mega-menu'),
                          children: f.jsx('span', { children: y('mainNavigation.menu') }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          ],
        }),
        n &&
          f.jsx('section', {
            className: 'gnb-search',
            id: 'gnb-search',
            style: { textAlign: 'left' },
            children: f.jsxs('div', {
              className: 'container padding-bottom-xl',
              children: [
                f.jsx('h2', { children: y('mainNavigation.search') }),
                f.jsxs('form', {
                  className: 'gnb-input-pair',
                  children: [
                    f.jsx('label', {
                      className: 'visually-hidden',
                      htmlFor: 'search',
                      children: y('mainNavigation.search'),
                    }),
                    f.jsx('input', { id: 'search', type: 'search' }),
                    f.jsx('button', {
                      className: 'gnb-btn-search',
                      children: f.jsx('span', { children: y('mainNavigation.search') }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        t &&
          f.jsx('section', {
            className: 'gnb-mega-menu',
            id: 'gnb-mega-menu',
            style: { textAlign: 'left' },
            children: f.jsxs('div', {
              className: 'container padding-bottom-xl',
              children: [
                f.jsx('h2', { children: y('mainNavigation.menuOptions.heading') }),
                f.jsx('ul', {
                  className: 'gnb-list-nav row row-cols-1 row-cols-md-2 row-cols-lg-3',
                  children: b(t, c),
                }),
              ],
            }),
          }),
        r &&
          s &&
          f.jsx('section', {
            className: 'gnb-account',
            id: 'gnb-account',
            style: { textAlign: 'left' },
            children: f.jsxs('div', {
              className: 'container padding-bottom-xl',
              children: [
                f.jsx('h2', { children: y('mainNavigation.accountOptionsSignIn.heading') }),
                f.jsx('ul', { className: 'gnb-list-nav row row-cols-1 ', children: b(s, c) }),
              ],
            }),
          }),
      ],
    });
  },
  pr = ({
    label: e,
    disabled: t,
    variant: n = 'primary',
    type: r = 'button',
    size: s,
    leftIcon: o,
    rightIcon: i,
    isLoading: c,
    loadingText: d = 'Loading',
    onClick: l,
    id: u,
  }) =>
    f.jsxs('button', {
      type: r,
      className: Be({
        'gnb-btn': n === 'primary',
        'gnb-btn-secondary': n === 'secondary',
        'gnb-btn-tertiary': n === 'tertiary',
        'gnb-btn-critical': n === 'critical',
        'gnb-btn-critical-secondary': n === 'critical secondary',
        'gnb-btn-sm': s === 'small',
        disabled: t,
      }),
      onClick: l,
      disabled: t,
      id: u,
      children: [
        c && f.jsxs(f.Fragment, { children: [` ${d} `, f.jsx(re, { icon: ft, className: 'fa-spin' })] }),
        !c && f.jsxs(f.Fragment, { children: [o && f.jsx(re, { icon: o }), ` ${e} `, i && f.jsx(re, { icon: i })] }),
      ],
    });
function De(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: pt } = Object.prototype,
  { getPrototypeOf: he } = Object,
  { iterator: G, toStringTag: Ie } = Symbol,
  Q = ((e) => (t) => {
    const n = pt.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  L = (e) => ((e = e.toLowerCase()), (t) => Q(t) === e),
  Z = (e) => (t) => typeof t === e,
  { isArray: I } = Array,
  v = Z('undefined');
function mt(e) {
  return (
    e !== null &&
    !v(e) &&
    e.constructor !== null &&
    !v(e.constructor) &&
    N(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Me = L('ArrayBuffer');
function bt(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && Me(e.buffer)),
    t
  );
}
const gt = Z('string'),
  N = Z('function'),
  $e = Z('number'),
  Y = (e) => e !== null && typeof e == 'object',
  yt = (e) => e === !0 || e === !1,
  z = (e) => {
    if (Q(e) !== 'object') return !1;
    const t = he(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ie in e) && !(G in e);
  },
  Et = L('Date'),
  wt = L('File'),
  St = L('Blob'),
  Rt = L('FileList'),
  xt = (e) => Y(e) && N(e.pipe),
  At = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (N(e.append) &&
          ((t = Q(e)) === 'formdata' || (t === 'object' && N(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  Tt = L('URLSearchParams'),
  [Ot, Nt, Ct, jt] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(L),
  Pt = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function q(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, s;
  if ((typeof e != 'object' && (e = [e]), I(e))) for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let c;
    for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function ve(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const U = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global,
  qe = (e) => !v(e) && e !== U;
function ae() {
  const { caseless: e } = (qe(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && ve(t, s)) || s;
      z(t[o]) && z(r) ? (t[o] = ae(t[o], r)) : z(r) ? (t[o] = ae({}, r)) : I(r) ? (t[o] = r.slice()) : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && q(arguments[r], n);
  return t;
}
const Lt = (e, t, n, { allOwnKeys: r } = {}) => (
    q(
      t,
      (s, o) => {
        n && N(s) ? (e[o] = De(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  _t = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ft = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  kt = (e, t, n, r) => {
    let s, o, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && he(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Ut = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Bt = (e) => {
    if (!e) return null;
    if (I(e)) return e;
    let t = e.length;
    if (!$e(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Dt = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && he(Uint8Array)),
  It = (e, t) => {
    const r = (e && e[G]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Mt = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  $t = L('HTMLFormElement'),
  vt = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  we = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  qt = L('RegExp'),
  He = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    q(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Ht = (e) => {
    He(e, (t, n) => {
      if (N(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (N(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Vt = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return I(e) ? r(e) : r(String(e).split(t)), n;
  },
  zt = () => {},
  Jt = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Kt(e) {
  return !!(e && N(e.append) && e[Ie] === 'FormData' && e[G]);
}
const Wt = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Y(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[s] = r;
            const o = I(r) ? [] : {};
            return (
              q(r, (i, c) => {
                const d = n(i, s + 1);
                !v(d) && (o[c] = d);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Xt = L('AsyncFunction'),
  Gt = (e) => e && (Y(e) || N(e)) && N(e.then) && N(e.catch),
  Ve = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          U.addEventListener(
            'message',
            ({ source: s, data: o }) => {
              s === U && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), U.postMessage(n, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(typeof setImmediate == 'function', N(U.postMessage)),
  Qt = typeof queueMicrotask < 'u' ? queueMicrotask.bind(U) : (typeof process < 'u' && process.nextTick) || Ve,
  Zt = (e) => e != null && N(e[G]),
  a = {
    isArray: I,
    isArrayBuffer: Me,
    isBuffer: mt,
    isFormData: At,
    isArrayBufferView: bt,
    isString: gt,
    isNumber: $e,
    isBoolean: yt,
    isObject: Y,
    isPlainObject: z,
    isReadableStream: Ot,
    isRequest: Nt,
    isResponse: Ct,
    isHeaders: jt,
    isUndefined: v,
    isDate: Et,
    isFile: wt,
    isBlob: St,
    isRegExp: qt,
    isFunction: N,
    isStream: xt,
    isURLSearchParams: Tt,
    isTypedArray: Dt,
    isFileList: Rt,
    forEach: q,
    merge: ae,
    extend: Lt,
    trim: Pt,
    stripBOM: _t,
    inherits: Ft,
    toFlatObject: kt,
    kindOf: Q,
    kindOfTest: L,
    endsWith: Ut,
    toArray: Bt,
    forEachEntry: It,
    matchAll: Mt,
    isHTMLForm: $t,
    hasOwnProperty: we,
    hasOwnProp: we,
    reduceDescriptors: He,
    freezeMethods: Ht,
    toObjectSet: Vt,
    toCamelCase: vt,
    noop: zt,
    toFiniteNumber: Jt,
    findKey: ve,
    global: U,
    isContextDefined: qe,
    isSpecCompliantForm: Kt,
    toJSONObject: Wt,
    isAsyncFn: Xt,
    isThenable: Gt,
    setImmediate: Ve,
    asap: Qt,
    isIterable: Zt,
  };
function g(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
a.inherits(g, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const ze = g.prototype,
  Je = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Je[e] = { value: e };
});
Object.defineProperties(g, Je);
Object.defineProperty(ze, 'isAxiosError', { value: !0 });
g.from = (e, t, n, r, s, o) => {
  const i = Object.create(ze);
  return (
    a.toFlatObject(
      e,
      i,
      function (d) {
        return d !== Error.prototype;
      },
      (c) => c !== 'isAxiosError'
    ),
    g.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Yt = null;
function ce(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ke(e) {
  return a.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Se(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Ke(s)), !n && o ? '[' + s + ']' : s;
        })
        .join(n ? '.' : '')
    : t;
}
function en(e) {
  return a.isArray(e) && !e.some(ce);
}
const tn = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ee(e, t, n) {
  if (!a.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = a.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (b, h) {
      return !a.isUndefined(h[b]);
    }));
  const r = n.metaTokens,
    s = n.visitor || u,
    o = n.dots,
    i = n.indexes,
    d = (n.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError('visitor must be a function');
  function l(m) {
    if (m === null) return '';
    if (a.isDate(m)) return m.toISOString();
    if (a.isBoolean(m)) return m.toString();
    if (!d && a.isBlob(m)) throw new g('Blob is not supported. Use a Buffer instead.');
    return a.isArrayBuffer(m) || a.isTypedArray(m)
      ? d && typeof Blob == 'function'
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function u(m, b, h) {
    let w = m;
    if (m && !h && typeof m == 'object') {
      if (a.endsWith(b, '{}')) (b = r ? b : b.slice(0, -2)), (m = JSON.stringify(m));
      else if ((a.isArray(m) && en(m)) || ((a.isFileList(m) || a.endsWith(b, '[]')) && (w = a.toArray(m))))
        return (
          (b = Ke(b)),
          w.forEach(function (S, j) {
            !(a.isUndefined(S) || S === null) && t.append(i === !0 ? Se([b], j, o) : i === null ? b : b + '[]', l(S));
          }),
          !1
        );
    }
    return ce(m) ? !0 : (t.append(Se(h, b, o), l(m)), !1);
  }
  const p = [],
    y = Object.assign(tn, { defaultVisitor: u, convertValue: l, isVisitable: ce });
  function x(m, b) {
    if (!a.isUndefined(m)) {
      if (p.indexOf(m) !== -1) throw Error('Circular reference detected in ' + b.join('.'));
      p.push(m),
        a.forEach(m, function (w, R) {
          (!(a.isUndefined(w) || w === null) && s.call(t, w, a.isString(R) ? R.trim() : R, b, y)) === !0 &&
            x(w, b ? b.concat(R) : [R]);
        }),
        p.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError('data must be an object');
  return x(e), t;
}
function Re(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function pe(e, t) {
  (this._pairs = []), e && ee(e, this, t);
}
const We = pe.prototype;
We.append = function (t, n) {
  this._pairs.push([t, n]);
};
We.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Re);
      }
    : Re;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1]);
    }, '')
    .join('&');
};
function nn(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Xe(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || nn;
  a.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let o;
  if ((s ? (o = s(t, n)) : (o = a.isURLSearchParams(t) ? t.toString() : new pe(t, n).toString(r)), o)) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)), (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class xe {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Ge = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  rn = typeof URLSearchParams < 'u' ? URLSearchParams : pe,
  sn = typeof FormData < 'u' ? FormData : null,
  on = typeof Blob < 'u' ? Blob : null,
  an = {
    isBrowser: !0,
    classes: { URLSearchParams: rn, FormData: sn, Blob: on },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  me = typeof window < 'u' && typeof document < 'u',
  le = (typeof navigator == 'object' && navigator) || void 0,
  cn = me && (!le || ['ReactNative', 'NativeScript', 'NS'].indexOf(le.product) < 0),
  ln = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function',
  un = (me && window.location.href) || 'http://localhost',
  fn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: me,
        hasStandardBrowserEnv: cn,
        hasStandardBrowserWebWorkerEnv: ln,
        navigator: le,
        origin: un,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  O = { ...fn, ...an };
function dn(e, t) {
  return ee(
    e,
    new O.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return O.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function hn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function pn(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Qe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === '__proto__') return !0;
    const c = Number.isFinite(+i),
      d = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      d
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = pn(s[i])), !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(hn(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function mn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const H = {
  transitional: Ge,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))) return s ? JSON.stringify(Qe(t)) : t;
      if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
      let c;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return dn(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const d = this.env && this.env.FormData;
          return ee(c ? { 'files[]': t } : t, d && new d(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType('application/json', !1), mn(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || H.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === 'json';
      if (a.isResponse(t) || a.isReadableStream(t)) return t;
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i) throw c.name === 'SyntaxError' ? g.from(c, g.ERR_BAD_RESPONSE, this, null, this.response) : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: O.classes.FormData, Blob: O.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
};
a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  H.headers[e] = {};
});
const bn = a.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  gn = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(':')),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && bn[n])) &&
                (n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Ae = Symbol('internals');
function $(e) {
  return e && String(e).trim().toLowerCase();
}
function J(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(J) : String(e);
}
function yn(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const En = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function se(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function wn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Sn(e, t) {
  const n = a.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
let C = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, d, l) {
      const u = $(d);
      if (!u) throw new Error('header name must be a non-empty string');
      const p = a.findKey(s, u);
      (!p || s[p] === void 0 || l === !0 || (l === void 0 && s[p] !== !1)) && (s[p || d] = J(c));
    }
    const i = (c, d) => a.forEach(c, (l, u) => o(l, u, d));
    if (a.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !En(t)) i(gn(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {},
        d,
        l;
      for (const u of t) {
        if (!a.isArray(u)) throw TypeError('Object iterator must return a key-value pair');
        c[(l = u[0])] = (d = c[l]) ? (a.isArray(d) ? [...d, u[1]] : [d, u[1]]) : u[1];
      }
      i(c, n);
    } else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = $(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return yn(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = $(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || se(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = $(i)), i)) {
        const c = a.findKey(r, i);
        c && (!n || se(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || se(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(r, o);
        if (i) {
          (n[i] = J(s)), delete n[o];
          return;
        }
        const c = t ? wn(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = J(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ae] = this[Ae] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const c = $(i);
      r[c] || (Sn(s, i), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
C.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
a.reduceDescriptors(C.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(C);
function oe(e, t) {
  const n = this || H,
    r = t || n,
    s = C.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Ze(e) {
  return !!(e && e.__CANCEL__);
}
function M(e, t, n) {
  g.call(this, e ?? 'canceled', g.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
a.inherits(M, g, { __CANCEL__: !0 });
function Ye(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new g(
          'Request failed with status code ' + n.status,
          [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function Rn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function xn(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (d) {
      const l = Date.now(),
        u = r[o];
      i || (i = l), (n[s] = d), (r[s] = l);
      let p = o,
        y = 0;
      for (; p !== s; ) (y += n[p++]), (p = p % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), l - i < t)) return;
      const x = u && l - u;
      return x ? Math.round((y * 1e3) / x) : void 0;
    }
  );
}
function An(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const i = (l, u = Date.now()) => {
    (n = u), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, l);
  };
  return [
    (...l) => {
      const u = Date.now(),
        p = u - n;
      p >= r
        ? i(l, u)
        : ((s = l),
          o ||
            (o = setTimeout(() => {
              (o = null), i(s);
            }, r - p)));
    },
    () => s && i(s),
  ];
}
const W = (e, t, n = 3) => {
    let r = 0;
    const s = xn(50, 250);
    return An((o) => {
      const i = o.loaded,
        c = o.lengthComputable ? o.total : void 0,
        d = i - r,
        l = s(d),
        u = i <= c;
      r = i;
      const p = {
        loaded: i,
        total: c,
        progress: c ? i / c : void 0,
        bytes: d,
        rate: l || void 0,
        estimated: l && c && u ? (c - i) / l : void 0,
        event: o,
        lengthComputable: c != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(p);
    }, n);
  },
  Te = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Oe =
    (e) =>
    (...t) =>
      a.asap(() => e(...t)),
  Tn = O.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, O.origin)), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
      ))(new URL(O.origin), O.navigator && /(msie|trident)/i.test(O.navigator.userAgent))
    : () => !0,
  On = O.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + '=' + encodeURIComponent(t)];
          a.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
            a.isString(r) && i.push('path=' + r),
            a.isString(s) && i.push('domain=' + s),
            o === !0 && i.push('secure'),
            (document.cookie = i.join('; '));
        },
        read(e) {
          const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Nn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Cn(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function et(e, t, n) {
  let r = !Nn(t);
  return e && (r || n == !1) ? Cn(e, t) : t;
}
const Ne = (e) => (e instanceof C ? { ...e } : e);
function D(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, p, y) {
    return a.isPlainObject(l) && a.isPlainObject(u)
      ? a.merge.call({ caseless: y }, l, u)
      : a.isPlainObject(u)
      ? a.merge({}, u)
      : a.isArray(u)
      ? u.slice()
      : u;
  }
  function s(l, u, p, y) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l, p, y);
    } else return r(l, u, p, y);
  }
  function o(l, u) {
    if (!a.isUndefined(u)) return r(void 0, u);
  }
  function i(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, p) {
    if (p in t) return r(l, u);
    if (p in e) return r(void 0, l);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (l, u, p) => s(Ne(l), Ne(u), p, !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const p = d[u] || s,
        y = p(e[u], t[u], u);
      (a.isUndefined(y) && p !== c) || (n[u] = y);
    }),
    n
  );
}
const tt = (e) => {
    const t = D({}, e);
    let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
    (t.headers = i = C.from(i)),
      (t.url = Xe(et(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer)),
      c &&
        i.set(
          'Authorization',
          'Basic ' + btoa((c.username || '') + ':' + (c.password ? unescape(encodeURIComponent(c.password)) : ''))
        );
    let d;
    if (a.isFormData(n)) {
      if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
      else if ((d = i.getContentType()) !== !1) {
        const [l, ...u] = d
          ? d
              .split(';')
              .map((p) => p.trim())
              .filter(Boolean)
          : [];
        i.setContentType([l || 'multipart/form-data', ...u].join('; '));
      }
    }
    if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || (r !== !1 && Tn(t.url)))) {
      const l = s && o && On.read(o);
      l && i.set(s, l);
    }
    return t;
  },
  jn = typeof XMLHttpRequest < 'u',
  Pn =
    jn &&
    function (e) {
      return new Promise(function (n, r) {
        const s = tt(e);
        let o = s.data;
        const i = C.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: d, onDownloadProgress: l } = s,
          u,
          p,
          y,
          x,
          m;
        function b() {
          x && x(),
            m && m(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener('abort', u);
        }
        let h = new XMLHttpRequest();
        h.open(s.method.toUpperCase(), s.url, !0), (h.timeout = s.timeout);
        function w() {
          if (!h) return;
          const S = C.from('getAllResponseHeaders' in h && h.getAllResponseHeaders()),
            T = {
              data: !c || c === 'text' || c === 'json' ? h.responseText : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: S,
              config: e,
              request: h,
            };
          Ye(
            function (k) {
              n(k), b();
            },
            function (k) {
              r(k), b();
            },
            T
          ),
            (h = null);
        }
        'onloadend' in h
          ? (h.onloadend = w)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 && !(h.responseURL && h.responseURL.indexOf('file:') === 0)) ||
                setTimeout(w);
            }),
          (h.onabort = function () {
            h && (r(new g('Request aborted', g.ECONNABORTED, e, h)), (h = null));
          }),
          (h.onerror = function () {
            r(new g('Network Error', g.ERR_NETWORK, e, h)), (h = null);
          }),
          (h.ontimeout = function () {
            let j = s.timeout ? 'timeout of ' + s.timeout + 'ms exceeded' : 'timeout exceeded';
            const T = s.transitional || Ge;
            s.timeoutErrorMessage && (j = s.timeoutErrorMessage),
              r(new g(j, T.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED, e, h)),
              (h = null);
          }),
          o === void 0 && i.setContentType(null),
          'setRequestHeader' in h &&
            a.forEach(i.toJSON(), function (j, T) {
              h.setRequestHeader(T, j);
            }),
          a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials),
          c && c !== 'json' && (h.responseType = s.responseType),
          l && (([y, m] = W(l, !0)), h.addEventListener('progress', y)),
          d &&
            h.upload &&
            (([p, x] = W(d)), h.upload.addEventListener('progress', p), h.upload.addEventListener('loadend', x)),
          (s.cancelToken || s.signal) &&
            ((u = (S) => {
              h && (r(!S || S.type ? new M(null, e, h) : S), h.abort(), (h = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal && (s.signal.aborted ? u() : s.signal.addEventListener('abort', u)));
        const R = Rn(s.url);
        if (R && O.protocols.indexOf(R) === -1) {
          r(new g('Unsupported protocol ' + R + ':', g.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(o || null);
      });
    },
  Ln = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (l) {
        if (!s) {
          (s = !0), c();
          const u = l instanceof Error ? l : this.reason;
          r.abort(u instanceof g ? u : new M(u instanceof Error ? u.message : u));
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new g(`timeout ${t} of ms exceeded`, g.ETIMEDOUT));
        }, t);
      const c = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((l) => {
            l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener('abort', o);
          }),
          (e = null));
      };
      e.forEach((l) => l.addEventListener('abort', o));
      const { signal: d } = r;
      return (d.unsubscribe = () => a.asap(c)), d;
    }
  },
  _n = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  Fn = async function* (e, t) {
    for await (const n of kn(e)) yield* _n(n, t);
  },
  kn = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Ce = (e, t, n, r) => {
    const s = Fn(e, t);
    let o = 0,
      i,
      c = (d) => {
        i || ((i = !0), r && r(d));
      };
    return new ReadableStream(
      {
        async pull(d) {
          try {
            const { done: l, value: u } = await s.next();
            if (l) {
              c(), d.close();
              return;
            }
            let p = u.byteLength;
            if (n) {
              let y = (o += p);
              n(y);
            }
            d.enqueue(new Uint8Array(u));
          } catch (l) {
            throw (c(l), l);
          }
        },
        cancel(d) {
          return c(d), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  te = typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
  nt = te && typeof ReadableStream == 'function',
  Un =
    te &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  rt = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Bn =
    nt &&
    rt(() => {
      let e = !1;
      const t = new Request(O.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  je = 64 * 1024,
  ue = nt && rt(() => a.isReadableStream(new Response('').body)),
  X = { stream: ue && ((e) => e.body) };
te &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !X[t] &&
        (X[t] = a.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new g(`Response type '${t}' is not supported`, g.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const Dn = async (e) => {
    if (e == null) return 0;
    if (a.isBlob(e)) return e.size;
    if (a.isSpecCompliantForm(e))
      return (await new Request(O.origin, { method: 'POST', body: e }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(e) || a.isArrayBuffer(e)) return e.byteLength;
    if ((a.isURLSearchParams(e) && (e = e + ''), a.isString(e))) return (await Un(e)).byteLength;
  },
  In = async (e, t) => {
    const n = a.toFiniteNumber(e.getContentLength());
    return n ?? Dn(t);
  },
  Mn =
    te &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: c,
        onUploadProgress: d,
        responseType: l,
        headers: u,
        withCredentials: p = 'same-origin',
        fetchOptions: y,
      } = tt(e);
      l = l ? (l + '').toLowerCase() : 'text';
      let x = Ln([s, o && o.toAbortSignal()], i),
        m;
      const b =
        x &&
        x.unsubscribe &&
        (() => {
          x.unsubscribe();
        });
      let h;
      try {
        if (d && Bn && n !== 'get' && n !== 'head' && (h = await In(u, r)) !== 0) {
          let T = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            P;
          if ((a.isFormData(r) && (P = T.headers.get('content-type')) && u.setContentType(P), T.body)) {
            const [k, V] = Te(h, W(Oe(d)));
            r = Ce(T.body, je, k, V);
          }
        }
        a.isString(p) || (p = p ? 'include' : 'omit');
        const w = 'credentials' in Request.prototype;
        m = new Request(t, {
          ...y,
          signal: x,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: w ? p : void 0,
        });
        let R = await fetch(m, y);
        const S = ue && (l === 'stream' || l === 'response');
        if (ue && (c || (S && b))) {
          const T = {};
          ['status', 'statusText', 'headers'].forEach((be) => {
            T[be] = R[be];
          });
          const P = a.toFiniteNumber(R.headers.get('content-length')),
            [k, V] = (c && Te(P, W(Oe(c), !0))) || [];
          R = new Response(
            Ce(R.body, je, k, () => {
              V && V(), b && b();
            }),
            T
          );
        }
        l = l || 'text';
        let j = await X[a.findKey(X, l) || 'text'](R, e);
        return (
          !S && b && b(),
          await new Promise((T, P) => {
            Ye(T, P, {
              data: j,
              headers: C.from(R.headers),
              status: R.status,
              statusText: R.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (w) {
        throw (
          (b && b(),
          w && w.name === 'TypeError' && /Load failed|fetch/i.test(w.message)
            ? Object.assign(new g('Network Error', g.ERR_NETWORK, e, m), { cause: w.cause || w })
            : g.from(w, w && w.code, e, m))
        );
      }
    }),
  fe = { http: Yt, xhr: Pn, fetch: Mn };
a.forEach(fe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Pe = (e) => `- ${e}`,
  $n = (e) => a.isFunction(e) || e === null || e === !1,
  st = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (((r = n), !$n(n) && ((r = fe[(i = String(n)).toLowerCase()]), r === void 0)))
          throw new g(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || '#' + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([c, d]) =>
            `adapter ${c} ` + (d === !1 ? 'is not supported by the environment' : 'is not available in the build')
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Pe).join(`
`)
            : ' ' + Pe(o[0])
          : 'as no adapter specified';
        throw new g('There is no suitable adapter to dispatch the request ' + i, 'ERR_NOT_SUPPORT');
      }
      return r;
    },
    adapters: fe,
  };
function ie(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new M(null, e);
}
function Le(e) {
  return (
    ie(e),
    (e.headers = C.from(e.headers)),
    (e.data = oe.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    st
      .getAdapter(e.adapter || H.adapter)(e)
      .then(
        function (r) {
          return ie(e), (r.data = oe.call(e, e.transformResponse, r)), (r.headers = C.from(r.headers)), r;
        },
        function (r) {
          return (
            Ze(r) ||
              (ie(e),
              r &&
                r.response &&
                ((r.response.data = oe.call(e, e.transformResponse, r.response)),
                (r.response.headers = C.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const ot = '1.10.0',
  ne = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  ne[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const _e = {};
ne.transitional = function (t, n, r) {
  function s(o, i) {
    return '[Axios v' + ot + "] Transitional option '" + o + "'" + i + (r ? '. ' + r : '');
  }
  return (o, i, c) => {
    if (t === !1) throw new g(s(i, ' has been removed' + (n ? ' in ' + n : '')), g.ERR_DEPRECATED);
    return (
      n &&
        !_e[i] &&
        ((_e[i] = !0),
        console.warn(s(i, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
      t ? t(o, i, c) : !0
    );
  };
};
ne.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function vn(e, t, n) {
  if (typeof e != 'object') throw new g('options must be an object', g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const c = e[o],
        d = c === void 0 || i(c, o, e);
      if (d !== !0) throw new g('option ' + o + ' must be ' + d, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new g('Unknown option ' + o, g.ERR_BAD_OPTION);
  }
}
const K = { assertOptions: vn, validators: ne },
  _ = K.validators;
let B = class {
  constructor(t) {
    (this.defaults = t || {}), (this.interceptors = { request: new xe(), response: new xe() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, '') : '';
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = D(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      K.assertOptions(
        r,
        {
          silentJSONParsing: _.transitional(_.boolean),
          forcedJSONParsing: _.transitional(_.boolean),
          clarifyTimeoutError: _.transitional(_.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : K.assertOptions(s, { encode: _.function, serialize: _.function }, !0)),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      K.assertOptions(n, { baseUrl: _.spelling('baseURL'), withXsrfToken: _.spelling('withXSRFToken') }, !0),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (m) => {
        delete o[m];
      }),
      (n.headers = C.concat(i, o));
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function (b) {
      (typeof b.runWhen == 'function' && b.runWhen(n) === !1) ||
        ((d = d && b.synchronous), c.unshift(b.fulfilled, b.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (b) {
      l.push(b.fulfilled, b.rejected);
    });
    let u,
      p = 0,
      y;
    if (!d) {
      const m = [Le.bind(this), void 0];
      for (m.unshift.apply(m, c), m.push.apply(m, l), y = m.length, u = Promise.resolve(n); p < y; )
        u = u.then(m[p++], m[p++]);
      return u;
    }
    y = c.length;
    let x = n;
    for (p = 0; p < y; ) {
      const m = c[p++],
        b = c[p++];
      try {
        x = m(x);
      } catch (h) {
        b.call(this, h);
        break;
      }
    }
    try {
      u = Le.call(this, x);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, y = l.length; p < y; ) u = u.then(l[p++], l[p++]);
    return u;
  }
  getUri(t) {
    t = D(this.defaults, t);
    const n = et(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Xe(n, t.params, t.paramsSerializer);
  }
};
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
  B.prototype[t] = function (n, r) {
    return this.request(D(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
a.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, i, c) {
      return this.request(
        D(c || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: o, data: i })
      );
    };
  }
  (B.prototype[t] = n()), (B.prototype[t + 'Form'] = n(!0));
});
let qn = class it {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((c) => {
          r.subscribe(c), (o = c);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, c) {
        r.reason || ((r.reason = new M(o, i, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return this.subscribe(n), (t.signal.unsubscribe = () => this.unsubscribe(n)), t.signal;
  }
  static source() {
    let t;
    return {
      token: new it(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function Hn(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Vn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const de = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(de).forEach(([e, t]) => {
  de[t] = e;
});
function at(e) {
  const t = new B(e),
    n = De(B.prototype.request, t);
  return (
    a.extend(n, B.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return at(D(e, s));
    }),
    n
  );
}
const E = at(H);
E.Axios = B;
E.CanceledError = M;
E.CancelToken = qn;
E.isCancel = Ze;
E.VERSION = ot;
E.toFormData = ee;
E.AxiosError = g;
E.Cancel = E.CanceledError;
E.all = function (t) {
  return Promise.all(t);
};
E.spread = Hn;
E.isAxiosError = Vn;
E.mergeConfig = D;
E.AxiosHeaders = C;
E.formToJSON = (e) => Qe(a.isHTMLForm(e) ? new FormData(e) : e);
E.getAdapter = st.getAdapter;
E.HttpStatusCode = de;
E.default = E;
const {
    Axios: gr,
    AxiosError: yr,
    CanceledError: Er,
    isCancel: wr,
    CancelToken: Sr,
    VERSION: Rr,
    all: xr,
    Cancel: Ar,
    isAxiosError: Tr,
    spread: Or,
    toFormData: Nr,
    AxiosHeaders: Cr,
    HttpStatusCode: jr,
    formToJSON: Pr,
    getAdapter: Lr,
    mergeConfig: _r,
  } = E,
  F = 'https://notifications.snb.ca',
  A = {
    authentication: { OTP: `${F}/otp`, RESEND_OTP: `${F}/otp/resend`, EMAIL_OTP: `${F}/otp/email` },
    notifications: { REMINDER_DETAILS: `${F}/reminders`, STOP_PAPER_REMINDERS: `${F}/reminders/stop-paper` },
    vehicles: { VEHICLES: `${F}/vehicles` },
    accountSettings: {
      DETAILS: `${F}/accounts`,
      SMS_NUMBER: `${F}/accounts/sms-number`,
      LANGUAGE: `${F}/accounts/language`,
    },
    feedback: { SUBMIT_FEEDBACK: `${F}/feedbacks` },
  },
  zn = (e) => E.post(`${A.authentication.OTP}`, e),
  Jn = (e) => E.post(`${A.authentication.RESEND_OTP}`, e),
  Kn = (e) => E.put(`${A.authentication.OTP}`, e),
  Wn = (e) => E.post(`${A.authentication.EMAIL_OTP}`, e),
  Xn = (e) => E.put(`${A.authentication.EMAIL_OTP}`, e),
  Gn = (e) => E.post(`${A.accountSettings.SMS_NUMBER}`, e),
  Qn = (e) => E.put(`${A.accountSettings.SMS_NUMBER}`, e),
  Zn = (e) => E.delete(`${A.accountSettings.SMS_NUMBER}`, e),
  Yn = (e) => E.get(`${A.notifications.REMINDER_DETAILS}`, e),
  er = (e) => E.post(`${A.notifications.REMINDER_DETAILS}`, e),
  tr = (e) => E.post(`${A.notifications.STOP_PAPER_REMINDERS}`, e),
  nr = (e) => E.get(`${A.vehicles.VEHICLES}`, e),
  rr = (e) => E.post(`${A.vehicles.VEHICLES}`, e),
  sr = (e) => E.put(`${A.vehicles.VEHICLES}`, e),
  or = (e, t) => E.get(`${A.vehicles.VEHICLES}/${e}`, t),
  ir = (e, t) => E.delete(`${A.vehicles.VEHICLES}/${e}`, t),
  ar = (e) => E.get(`${A.accountSettings.DETAILS}`, e),
  cr = (e) => E.put(`${A.accountSettings.LANGUAGE}`, e),
  lr = (e) => E.post(`${A.feedback.SUBMIT_FEEDBACK}`, e),
  Fr = {
    createOTP: zn,
    verifyOTP: Kn,
    resendOTP: Jn,
    createChangeEmailOTP: Wn,
    verifyChangeEmailOTP: Xn,
    createChangeSMSNumberOTP: Gn,
    verifyChangeSMSNumberOTP: Qn,
    removeSMSNumber: Zn,
    getReminderDetails: Yn,
    updateReminderDetails: er,
    stopPaperReminders: tr,
    getAllVehicles: nr,
    addAVehicle: rr,
    updateAVehicle: sr,
    getAVehicle: or,
    removeAVehicle: ir,
    getAccountDetails: ar,
    updateAccountPreferredLanguage: cr,
    submitFeedback: lr,
  },
  kr = () => Ue.useContext(dt),
  Ur = ({ error: e, classes: t = '', id: n = 'error-id' }) =>
    f.jsx('div', {
      className: Be('gnb-form-validation left', t),
      role: 'alert',
      'aria-live': 'assertive',
      'aria-atomic': 'true',
      children: f.jsx('span', { id: n, className: 'margin-left-xs', children: e }),
    });
export { pr as B, Ur as E, dr as F, Fr as H, hr as M, kr as u };
