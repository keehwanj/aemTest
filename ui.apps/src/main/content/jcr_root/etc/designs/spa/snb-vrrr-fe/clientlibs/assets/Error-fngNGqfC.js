import {
  u as Fe,
  b as ke,
  j as f,
  T as ge,
  U as ye,
  o as at,
  r as ct,
  G as lt,
  V as ut,
  l as Be,
  F as re,
  W as ft,
} from './index-BKDzaX2j.js';
import { T as Ee } from './useMetadata-D4La1ovT.js';
const ur = ({ variant: e }) => {
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
  fr = ({ showCart: e, menuOptions: t, showSearch: n, signedIn: r, accountOptions: s }) => {
    const [, o, i] = ke(['session', 'language', 'rememberMe', 'sessionExpiry']),
      c = at(),
      [d, l] = ct.useState(!1),
      [, u] = lt('visited');
    function p() {
      ut.forEach(({ menu: S, button: R }) => {
        const x = document.getElementById(S),
          A = document.getElementById(R);
        x && A && (x.classList.remove('show'), A.classList.remove('show'), A.setAttribute('aria-expanded', 'false')),
          l(!1);
      });
    }
    function E(S, R) {
      const x = document.getElementById(S),
        A = document.getElementById(R);
      x &&
        A &&
        (x.classList.contains('show')
          ? (x.classList.remove('show'), A.classList.remove('show'), A.setAttribute('aria-expanded', 'false'), l(!1))
          : (p(), x.classList.add('show'), A.classList.add('show'), A.setAttribute('aria-expanded', 'true'), l(!0)));
    }
    const { t: w, i18n: h } = Fe(),
      b = () => {
        const R = h.language === 'fr-CA' ? 'en-CA' : 'fr-CA';
        h.changeLanguage(R), o('language', R);
      },
      m = (S, R) => {
        const x = S.map((A, O) => {
          const { link: P, text: _ } = A;
          return R
            ? f.jsx(
                'li',
                {
                  children: f.jsx('a', {
                    href: '#',
                    onClick: () => {
                      P === '/authentication'
                        ? (i('session'), i('rememberMe'), i('sessionExpiry'), u(''), c('/authentication'))
                        : c(P);
                    },
                    children: _,
                  }),
                },
                O.toString()
              )
            : f.jsx(
                'li',
                { style: { paddingBottom: '15px' }, children: f.jsx('div', { children: _ }) },
                O.toString() + 'static'
              );
        });
        return f.jsx(f.Fragment, { children: x });
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
                  src: '../images/new-brunswick-logo.svg',
                  alt: w('mainNavigation.governmentOfNewBrunswick'),
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
                      children: f.jsx('a', { href: '#', onClick: () => b(), children: w('SwitchLanguage') }),
                    }),
                    e &&
                      f.jsx('li', {
                        children: f.jsx('button', {
                          className: 'btn-cart',
                          children: f.jsx('span', { children: w('mainNavigation.cart') }),
                        }),
                      }),
                    n &&
                      f.jsx('li', {
                        children: f.jsx('button', {
                          'aria-expanded': 'false',
                          id: 'btn-search',
                          className: 'btn-search',
                          onClick: () => E('gnb-search', 'btn-search'),
                          children: f.jsx('span', { children: w('mainNavigation.search') }),
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
                              onClick: () => E('gnb-account', 'btn-account'),
                              children: f.jsx('span', { children: w('mainNavigation.account') }),
                            }),
                          }),
                      }),
                    t &&
                      f.jsx('li', {
                        children: f.jsx('button', {
                          'aria-expanded': 'false',
                          id: 'btn-mega-menu',
                          onClick: () => E('gnb-mega-menu', 'btn-mega-menu'),
                          children: f.jsx('span', { children: w('mainNavigation.menu') }),
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
                f.jsx('h2', { children: w('mainNavigation.search') }),
                f.jsxs('form', {
                  className: 'gnb-input-pair',
                  children: [
                    f.jsx('label', {
                      className: 'visually-hidden',
                      htmlFor: 'search',
                      children: w('mainNavigation.search'),
                    }),
                    f.jsx('input', { id: 'search', type: 'search' }),
                    f.jsx('button', {
                      className: 'gnb-btn-search',
                      children: f.jsx('span', { children: w('mainNavigation.search') }),
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
                f.jsx('h2', { children: w('mainNavigation.menuOptions.heading') }),
                f.jsx('ul', {
                  className: 'gnb-list-nav row row-cols-1 row-cols-md-2 row-cols-lg-3',
                  children: m(t, d),
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
                f.jsx('h2', { children: w('mainNavigation.accountOptionsSignIn.heading') }),
                f.jsx('ul', { className: 'gnb-list-nav row row-cols-1 ', children: m(s, d) }),
              ],
            }),
          }),
      ],
    });
  },
  dr = ({
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
const { toString: dt } = Object.prototype,
  { getPrototypeOf: he } = Object,
  { iterator: X, toStringTag: Ue } = Symbol,
  Q = ((e) => (t) => {
    const n = dt.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  L = (e) => ((e = e.toLowerCase()), (t) => Q(t) === e),
  Z = (e) => (t) => typeof t === e,
  { isArray: I } = Array,
  v = Z('undefined');
function ht(e) {
  return (
    e !== null &&
    !v(e) &&
    e.constructor !== null &&
    !v(e.constructor) &&
    C(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ie = L('ArrayBuffer');
function pt(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && Ie(e.buffer)),
    t
  );
}
const mt = Z('string'),
  C = Z('function'),
  Me = Z('number'),
  Y = (e) => e !== null && typeof e == 'object',
  bt = (e) => e === !0 || e === !1,
  z = (e) => {
    if (Q(e) !== 'object') return !1;
    const t = he(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ue in e) && !(X in e);
  },
  gt = L('Date'),
  yt = L('File'),
  Et = L('Blob'),
  wt = L('FileList'),
  St = (e) => Y(e) && C(e.pipe),
  Rt = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (C(e.append) &&
          ((t = Q(e)) === 'formdata' || (t === 'object' && C(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  xt = L('URLSearchParams'),
  [At, Tt, Ot, Nt] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(L),
  Ct = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
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
function $e(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const B = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global,
  ve = (e) => !v(e) && e !== B;
function ae() {
  const { caseless: e } = (ve(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && $e(t, s)) || s;
      z(t[o]) && z(r) ? (t[o] = ae(t[o], r)) : z(r) ? (t[o] = ae({}, r)) : I(r) ? (t[o] = r.slice()) : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && q(arguments[r], n);
  return t;
}
const jt = (e, t, n, { allOwnKeys: r } = {}) => (
    q(
      t,
      (s, o) => {
        n && C(s) ? (e[o] = De(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Pt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Lt = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  _t = (e, t, n, r) => {
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
  Ft = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  kt = (e) => {
    if (!e) return null;
    if (I(e)) return e;
    let t = e.length;
    if (!Me(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Bt = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && he(Uint8Array)),
  Dt = (e, t) => {
    const r = (e && e[X]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Ut = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  It = L('HTMLFormElement'),
  Mt = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  we = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  $t = L('RegExp'),
  qe = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    q(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  vt = (e) => {
    qe(e, (t, n) => {
      if (C(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (C(r)) {
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
  qt = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return I(e) ? r(e) : r(String(e).split(t)), n;
  },
  Ht = () => {},
  Vt = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function zt(e) {
  return !!(e && C(e.append) && e[Ue] === 'FormData' && e[X]);
}
const Jt = (e) => {
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
  Kt = L('AsyncFunction'),
  Wt = (e) => e && (Y(e) || C(e)) && C(e.then) && C(e.catch),
  He = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          B.addEventListener(
            'message',
            ({ source: s, data: o }) => {
              s === B && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), B.postMessage(n, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(typeof setImmediate == 'function', C(B.postMessage)),
  Gt = typeof queueMicrotask < 'u' ? queueMicrotask.bind(B) : (typeof process < 'u' && process.nextTick) || He,
  Xt = (e) => e != null && C(e[X]),
  a = {
    isArray: I,
    isArrayBuffer: Ie,
    isBuffer: ht,
    isFormData: Rt,
    isArrayBufferView: pt,
    isString: mt,
    isNumber: Me,
    isBoolean: bt,
    isObject: Y,
    isPlainObject: z,
    isReadableStream: At,
    isRequest: Tt,
    isResponse: Ot,
    isHeaders: Nt,
    isUndefined: v,
    isDate: gt,
    isFile: yt,
    isBlob: Et,
    isRegExp: $t,
    isFunction: C,
    isStream: St,
    isURLSearchParams: xt,
    isTypedArray: Bt,
    isFileList: wt,
    forEach: q,
    merge: ae,
    extend: jt,
    trim: Ct,
    stripBOM: Pt,
    inherits: Lt,
    toFlatObject: _t,
    kindOf: Q,
    kindOfTest: L,
    endsWith: Ft,
    toArray: kt,
    forEachEntry: Dt,
    matchAll: Ut,
    isHTMLForm: It,
    hasOwnProperty: we,
    hasOwnProp: we,
    reduceDescriptors: qe,
    freezeMethods: vt,
    toObjectSet: qt,
    toCamelCase: Mt,
    noop: Ht,
    toFiniteNumber: Vt,
    findKey: $e,
    global: B,
    isContextDefined: ve,
    isSpecCompliantForm: zt,
    toJSONObject: Jt,
    isAsyncFn: Kt,
    isThenable: Wt,
    setImmediate: He,
    asap: Gt,
    isIterable: Xt,
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
const Ve = g.prototype,
  ze = {};
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
  ze[e] = { value: e };
});
Object.defineProperties(g, ze);
Object.defineProperty(Ve, 'isAxiosError', { value: !0 });
g.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ve);
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
const Qt = null;
function ce(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Je(e) {
  return a.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Se(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Je(s)), !n && o ? '[' + s + ']' : s;
        })
        .join(n ? '.' : '')
    : t;
}
function Zt(e) {
  return a.isArray(e) && !e.some(ce);
}
const Yt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ee(e, t, n) {
  if (!a.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = a.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (b, m) {
      return !a.isUndefined(m[b]);
    }));
  const r = n.metaTokens,
    s = n.visitor || u,
    o = n.dots,
    i = n.indexes,
    d = (n.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError('visitor must be a function');
  function l(h) {
    if (h === null) return '';
    if (a.isDate(h)) return h.toISOString();
    if (a.isBoolean(h)) return h.toString();
    if (!d && a.isBlob(h)) throw new g('Blob is not supported. Use a Buffer instead.');
    return a.isArrayBuffer(h) || a.isTypedArray(h)
      ? d && typeof Blob == 'function'
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function u(h, b, m) {
    let S = h;
    if (h && !m && typeof h == 'object') {
      if (a.endsWith(b, '{}')) (b = r ? b : b.slice(0, -2)), (h = JSON.stringify(h));
      else if ((a.isArray(h) && Zt(h)) || ((a.isFileList(h) || a.endsWith(b, '[]')) && (S = a.toArray(h))))
        return (
          (b = Je(b)),
          S.forEach(function (x, A) {
            !(a.isUndefined(x) || x === null) && t.append(i === !0 ? Se([b], A, o) : i === null ? b : b + '[]', l(x));
          }),
          !1
        );
    }
    return ce(h) ? !0 : (t.append(Se(m, b, o), l(h)), !1);
  }
  const p = [],
    E = Object.assign(Yt, { defaultVisitor: u, convertValue: l, isVisitable: ce });
  function w(h, b) {
    if (!a.isUndefined(h)) {
      if (p.indexOf(h) !== -1) throw Error('Circular reference detected in ' + b.join('.'));
      p.push(h),
        a.forEach(h, function (S, R) {
          (!(a.isUndefined(S) || S === null) && s.call(t, S, a.isString(R) ? R.trim() : R, b, E)) === !0 &&
            w(S, b ? b.concat(R) : [R]);
        }),
        p.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError('data must be an object');
  return w(e), t;
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
const Ke = pe.prototype;
Ke.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ke.toString = function (t) {
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
function en(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function We(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || en;
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
  tn = typeof URLSearchParams < 'u' ? URLSearchParams : pe,
  nn = typeof FormData < 'u' ? FormData : null,
  rn = typeof Blob < 'u' ? Blob : null,
  sn = {
    isBrowser: !0,
    classes: { URLSearchParams: tn, FormData: nn, Blob: rn },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  me = typeof window < 'u' && typeof document < 'u',
  le = (typeof navigator == 'object' && navigator) || void 0,
  on = me && (!le || ['ReactNative', 'NativeScript', 'NS'].indexOf(le.product) < 0),
  an = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function',
  cn = (me && window.location.href) || 'http://localhost',
  ln = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: me,
        hasStandardBrowserEnv: on,
        hasStandardBrowserWebWorkerEnv: an,
        navigator: le,
        origin: cn,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  N = { ...ln, ...sn };
function un(e, t) {
  return ee(
    e,
    new N.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return N.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function fn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function dn(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Xe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === '__proto__') return !0;
    const c = Number.isFinite(+i),
      d = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      d
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = dn(s[i])), !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(fn(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function hn(e, t, n) {
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
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))) return s ? JSON.stringify(Xe(t)) : t;
      if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
      let c;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return un(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const d = this.env && this.env.FormData;
          return ee(c ? { 'files[]': t } : t, d && new d(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType('application/json', !1), hn(t)) : t;
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
  env: { FormData: N.classes.FormData, Blob: N.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
};
a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  H.headers[e] = {};
});
const pn = a.toObjectSet([
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
  mn = (e) => {
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
              !(!n || (t[n] && pn[n])) &&
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
function bn(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const gn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function se(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function yn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function En(e, t) {
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
let j = class {
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
    else if (a.isString(t) && (t = t.trim()) && !gn(t)) i(mn(t), n);
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
        if (n === !0) return bn(s);
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
        const c = t ? yn(o) : String(o).trim();
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
      r[c] || (En(s, i), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
j.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
a.reduceDescriptors(j.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(j);
function oe(e, t) {
  const n = this || H,
    r = t || n,
    s = j.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Qe(e) {
  return !!(e && e.__CANCEL__);
}
function M(e, t, n) {
  g.call(this, e ?? 'canceled', g.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
a.inherits(M, g, { __CANCEL__: !0 });
function Ze(e, t, n) {
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
function wn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Sn(e, t) {
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
        E = 0;
      for (; p !== s; ) (E += n[p++]), (p = p % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), l - i < t)) return;
      const w = u && l - u;
      return w ? Math.round((E * 1e3) / w) : void 0;
    }
  );
}
function Rn(e, t) {
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
    const s = Sn(50, 250);
    return Rn((o) => {
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
  xn = N.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, N.origin)), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
      ))(new URL(N.origin), N.navigator && /(msie|trident)/i.test(N.navigator.userAgent))
    : () => !0,
  An = N.hasStandardBrowserEnv
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
function Tn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function On(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Ye(e, t, n) {
  let r = !Tn(t);
  return e && (r || n == !1) ? On(e, t) : t;
}
const Ne = (e) => (e instanceof j ? { ...e } : e);
function U(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, p, E) {
    return a.isPlainObject(l) && a.isPlainObject(u)
      ? a.merge.call({ caseless: E }, l, u)
      : a.isPlainObject(u)
      ? a.merge({}, u)
      : a.isArray(u)
      ? u.slice()
      : u;
  }
  function s(l, u, p, E) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l, p, E);
    } else return r(l, u, p, E);
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
        E = p(e[u], t[u], u);
      (a.isUndefined(E) && p !== c) || (n[u] = E);
    }),
    n
  );
}
const et = (e) => {
    const t = U({}, e);
    let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
    (t.headers = i = j.from(i)),
      (t.url = We(Ye(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer)),
      c &&
        i.set(
          'Authorization',
          'Basic ' + btoa((c.username || '') + ':' + (c.password ? unescape(encodeURIComponent(c.password)) : ''))
        );
    let d;
    if (a.isFormData(n)) {
      if (N.hasStandardBrowserEnv || N.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
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
    if (N.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || (r !== !1 && xn(t.url)))) {
      const l = s && o && An.read(o);
      l && i.set(s, l);
    }
    return t;
  },
  Nn = typeof XMLHttpRequest < 'u',
  Cn =
    Nn &&
    function (e) {
      return new Promise(function (n, r) {
        const s = et(e);
        let o = s.data;
        const i = j.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: d, onDownloadProgress: l } = s,
          u,
          p,
          E,
          w,
          h;
        function b() {
          w && w(),
            h && h(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener('abort', u);
        }
        let m = new XMLHttpRequest();
        m.open(s.method.toUpperCase(), s.url, !0), (m.timeout = s.timeout);
        function S() {
          if (!m) return;
          const x = j.from('getAllResponseHeaders' in m && m.getAllResponseHeaders()),
            O = {
              data: !c || c === 'text' || c === 'json' ? m.responseText : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: x,
              config: e,
              request: m,
            };
          Ze(
            function (_) {
              n(_), b();
            },
            function (_) {
              r(_), b();
            },
            O
          ),
            (m = null);
        }
        'onloadend' in m
          ? (m.onloadend = S)
          : (m.onreadystatechange = function () {
              !m ||
                m.readyState !== 4 ||
                (m.status === 0 && !(m.responseURL && m.responseURL.indexOf('file:') === 0)) ||
                setTimeout(S);
            }),
          (m.onabort = function () {
            m && (r(new g('Request aborted', g.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            r(new g('Network Error', g.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let A = s.timeout ? 'timeout of ' + s.timeout + 'ms exceeded' : 'timeout exceeded';
            const O = s.transitional || Ge;
            s.timeoutErrorMessage && (A = s.timeoutErrorMessage),
              r(new g(A, O.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED, e, m)),
              (m = null);
          }),
          o === void 0 && i.setContentType(null),
          'setRequestHeader' in m &&
            a.forEach(i.toJSON(), function (A, O) {
              m.setRequestHeader(O, A);
            }),
          a.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials),
          c && c !== 'json' && (m.responseType = s.responseType),
          l && (([E, h] = W(l, !0)), m.addEventListener('progress', E)),
          d &&
            m.upload &&
            (([p, w] = W(d)), m.upload.addEventListener('progress', p), m.upload.addEventListener('loadend', w)),
          (s.cancelToken || s.signal) &&
            ((u = (x) => {
              m && (r(!x || x.type ? new M(null, e, m) : x), m.abort(), (m = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal && (s.signal.aborted ? u() : s.signal.addEventListener('abort', u)));
        const R = wn(s.url);
        if (R && N.protocols.indexOf(R) === -1) {
          r(new g('Unsupported protocol ' + R + ':', g.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(o || null);
      });
    },
  jn = (e, t) => {
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
  Pn = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  Ln = async function* (e, t) {
    for await (const n of _n(e)) yield* Pn(n, t);
  },
  _n = async function* (e) {
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
    const s = Ln(e, t);
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
              let E = (o += p);
              n(E);
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
  tt = te && typeof ReadableStream == 'function',
  Fn =
    te &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  nt = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  kn =
    tt &&
    nt(() => {
      let e = !1;
      const t = new Request(N.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  je = 64 * 1024,
  ue = tt && nt(() => a.isReadableStream(new Response('').body)),
  G = { stream: ue && ((e) => e.body) };
te &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !G[t] &&
        (G[t] = a.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new g(`Response type '${t}' is not supported`, g.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const Bn = async (e) => {
    if (e == null) return 0;
    if (a.isBlob(e)) return e.size;
    if (a.isSpecCompliantForm(e))
      return (await new Request(N.origin, { method: 'POST', body: e }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(e) || a.isArrayBuffer(e)) return e.byteLength;
    if ((a.isURLSearchParams(e) && (e = e + ''), a.isString(e))) return (await Fn(e)).byteLength;
  },
  Dn = async (e, t) => {
    const n = a.toFiniteNumber(e.getContentLength());
    return n ?? Bn(t);
  },
  Un =
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
        fetchOptions: E,
      } = et(e);
      l = l ? (l + '').toLowerCase() : 'text';
      let w = jn([s, o && o.toAbortSignal()], i),
        h;
      const b =
        w &&
        w.unsubscribe &&
        (() => {
          w.unsubscribe();
        });
      let m;
      try {
        if (d && kn && n !== 'get' && n !== 'head' && (m = await Dn(u, r)) !== 0) {
          let O = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            P;
          if ((a.isFormData(r) && (P = O.headers.get('content-type')) && u.setContentType(P), O.body)) {
            const [_, V] = Te(m, W(Oe(d)));
            r = Ce(O.body, je, _, V);
          }
        }
        a.isString(p) || (p = p ? 'include' : 'omit');
        const S = 'credentials' in Request.prototype;
        h = new Request(t, {
          ...E,
          signal: w,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: S ? p : void 0,
        });
        let R = await fetch(h, E);
        const x = ue && (l === 'stream' || l === 'response');
        if (ue && (c || (x && b))) {
          const O = {};
          ['status', 'statusText', 'headers'].forEach((be) => {
            O[be] = R[be];
          });
          const P = a.toFiniteNumber(R.headers.get('content-length')),
            [_, V] = (c && Te(P, W(Oe(c), !0))) || [];
          R = new Response(
            Ce(R.body, je, _, () => {
              V && V(), b && b();
            }),
            O
          );
        }
        l = l || 'text';
        let A = await G[a.findKey(G, l) || 'text'](R, e);
        return (
          !x && b && b(),
          await new Promise((O, P) => {
            Ze(O, P, {
              data: A,
              headers: j.from(R.headers),
              status: R.status,
              statusText: R.statusText,
              config: e,
              request: h,
            });
          })
        );
      } catch (S) {
        throw (
          (b && b(),
          S && S.name === 'TypeError' && /Load failed|fetch/i.test(S.message)
            ? Object.assign(new g('Network Error', g.ERR_NETWORK, e, h), { cause: S.cause || S })
            : g.from(S, S && S.code, e, h))
        );
      }
    }),
  fe = { http: Qt, xhr: Cn, fetch: Un };
a.forEach(fe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Pe = (e) => `- ${e}`,
  In = (e) => a.isFunction(e) || e === null || e === !1,
  rt = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (((r = n), !In(n) && ((r = fe[(i = String(n)).toLowerCase()]), r === void 0)))
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
    (e.headers = j.from(e.headers)),
    (e.data = oe.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    rt
      .getAdapter(e.adapter || H.adapter)(e)
      .then(
        function (r) {
          return ie(e), (r.data = oe.call(e, e.transformResponse, r)), (r.headers = j.from(r.headers)), r;
        },
        function (r) {
          return (
            Qe(r) ||
              (ie(e),
              r &&
                r.response &&
                ((r.response.data = oe.call(e, e.transformResponse, r.response)),
                (r.response.headers = j.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const st = '1.10.0',
  ne = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  ne[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const _e = {};
ne.transitional = function (t, n, r) {
  function s(o, i) {
    return '[Axios v' + st + "] Transitional option '" + o + "'" + i + (r ? '. ' + r : '');
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
function Mn(e, t, n) {
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
const K = { assertOptions: Mn, validators: ne },
  F = K.validators;
let D = class {
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
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = U(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      K.assertOptions(
        r,
        {
          silentJSONParsing: F.transitional(F.boolean),
          forcedJSONParsing: F.transitional(F.boolean),
          clarifyTimeoutError: F.transitional(F.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : K.assertOptions(s, { encode: F.function, serialize: F.function }, !0)),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      K.assertOptions(n, { baseUrl: F.spelling('baseURL'), withXsrfToken: F.spelling('withXSRFToken') }, !0),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (h) => {
        delete o[h];
      }),
      (n.headers = j.concat(i, o));
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
      E;
    if (!d) {
      const h = [Le.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, l), E = h.length, u = Promise.resolve(n); p < E; )
        u = u.then(h[p++], h[p++]);
      return u;
    }
    E = c.length;
    let w = n;
    for (p = 0; p < E; ) {
      const h = c[p++],
        b = c[p++];
      try {
        w = h(w);
      } catch (m) {
        b.call(this, m);
        break;
      }
    }
    try {
      u = Le.call(this, w);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, E = l.length; p < E; ) u = u.then(l[p++], l[p++]);
    return u;
  }
  getUri(t) {
    t = U(this.defaults, t);
    const n = Ye(t.baseURL, t.url, t.allowAbsoluteUrls);
    return We(n, t.params, t.paramsSerializer);
  }
};
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
  D.prototype[t] = function (n, r) {
    return this.request(U(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
a.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, i, c) {
      return this.request(
        U(c || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: o, data: i })
      );
    };
  }
  (D.prototype[t] = n()), (D.prototype[t + 'Form'] = n(!0));
});
let $n = class ot {
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
      token: new ot(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function vn(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function qn(e) {
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
function it(e) {
  const t = new D(e),
    n = De(D.prototype.request, t);
  return (
    a.extend(n, D.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return it(U(e, s));
    }),
    n
  );
}
const y = it(H);
y.Axios = D;
y.CanceledError = M;
y.CancelToken = $n;
y.isCancel = Qe;
y.VERSION = st;
y.toFormData = ee;
y.AxiosError = g;
y.Cancel = y.CanceledError;
y.all = function (t) {
  return Promise.all(t);
};
y.spread = vn;
y.isAxiosError = qn;
y.mergeConfig = U;
y.AxiosHeaders = j;
y.formToJSON = (e) => Xe(a.isHTMLForm(e) ? new FormData(e) : e);
y.getAdapter = rt.getAdapter;
y.HttpStatusCode = de;
y.default = y;
const {
    Axios: mr,
    AxiosError: br,
    CanceledError: gr,
    isCancel: yr,
    CancelToken: Er,
    VERSION: wr,
    all: Sr,
    Cancel: Rr,
    isAxiosError: xr,
    spread: Ar,
    toFormData: Tr,
    AxiosHeaders: Or,
    HttpStatusCode: Nr,
    formToJSON: Cr,
    getAdapter: jr,
    mergeConfig: Pr,
  } = y,
  k = void 0,
  T = {
    authentication: { OTP: `${k}/otp`, RESEND_OTP: `${k}/otp/resend`, EMAIL_OTP: `${k}/otp/email` },
    notifications: { REMINDER_DETAILS: `${k}/reminders`, STOP_PAPER_REMINDERS: `${k}/reminders/stop-paper` },
    vehicles: { VEHICLES: `${k}/vehicles` },
    accountSettings: {
      DETAILS: `${k}/accounts`,
      SMS_NUMBER: `${k}/accounts/sms-number`,
      LANGUAGE: `${k}/accounts/language`,
    },
    feedback: { SUBMIT_FEEDBACK: `${k}/feedbacks` },
  },
  Hn = (e) => y.post(`${T.authentication.OTP}`, e),
  Vn = (e) => y.post(`${T.authentication.RESEND_OTP}`, e),
  zn = (e) => y.put(`${T.authentication.OTP}`, e),
  Jn = (e) => y.post(`${T.authentication.EMAIL_OTP}`, e),
  Kn = (e) => y.put(`${T.authentication.EMAIL_OTP}`, e),
  Wn = (e) => y.post(`${T.accountSettings.SMS_NUMBER}`, e),
  Gn = (e) => y.put(`${T.accountSettings.SMS_NUMBER}`, e),
  Xn = (e) => y.delete(`${T.accountSettings.SMS_NUMBER}`, e),
  Qn = (e) => y.get(`${T.notifications.REMINDER_DETAILS}`, e),
  Zn = (e) => y.post(`${T.notifications.REMINDER_DETAILS}`, e),
  Yn = (e) => y.post(`${T.notifications.STOP_PAPER_REMINDERS}`, e),
  er = (e) => y.get(`${T.vehicles.VEHICLES}`, e),
  tr = (e) => y.post(`${T.vehicles.VEHICLES}`, e),
  nr = (e) => y.put(`${T.vehicles.VEHICLES}`, e),
  rr = (e, t) => y.get(`${T.vehicles.VEHICLES}/${e}`, t),
  sr = (e, t) => y.delete(`${T.vehicles.VEHICLES}/${e}`, t),
  or = (e) => y.get(`${T.accountSettings.DETAILS}`, e),
  ir = (e) => y.put(`${T.accountSettings.LANGUAGE}`, e),
  ar = (e) => y.post(`${T.feedback.SUBMIT_FEEDBACK}`, e),
  Lr = {
    createOTP: Hn,
    verifyOTP: zn,
    resendOTP: Vn,
    createChangeEmailOTP: Jn,
    verifyChangeEmailOTP: Kn,
    createChangeSMSNumberOTP: Wn,
    verifyChangeSMSNumberOTP: Gn,
    removeSMSNumber: Xn,
    getReminderDetails: Qn,
    updateReminderDetails: Zn,
    stopPaperReminders: Yn,
    getAllVehicles: er,
    addAVehicle: tr,
    updateAVehicle: nr,
    getAVehicle: rr,
    removeAVehicle: sr,
    getAccountDetails: or,
    updateAccountPreferredLanguage: ir,
    submitFeedback: ar,
  },
  _r = ({ error: e, classes: t = '', id: n = 'error-id' }) =>
    f.jsx('div', {
      className: Be('gnb-form-validation left', t),
      role: 'alert',
      'aria-live': 'assertive',
      'aria-atomic': 'true',
      children: f.jsx('span', { id: n, className: 'margin-left-xs', children: e }),
    });
export { dr as B, _r as E, ur as F, Lr as H, fr as M };
