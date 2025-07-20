import {
  u as Ue,
  a as be,
  j as d,
  e as Ie,
  r as ht,
  k as He,
  F as ie,
  v as pt,
  w as $,
  x as bt,
  y as gt,
  z as yt,
  A as I,
  B as H,
  C as wt,
  D as Se,
  m as Et,
} from './index-D38DftTu.js';
import { T as Re } from './useMetadata-DpbrA7pe.js';
const St = [
    { menu: 'gnb-mega-menu', button: 'btn-mega-menu' },
    { menu: 'gnb-search', button: 'btn-search' },
    { menu: 'gnb-sign-in', button: 'btn-sign-in' },
    { menu: 'gnb-account', button: 'btn-account' },
  ],
  os = 'MMMM d, y',
  is = 'y-MM-dd HH:mm:ss.SSS',
  xe = 1200,
  Ae = 33696e3,
  as = 'EN',
  cs = 'FR',
  Te = {
    EN: 'https://www2.gnb.ca/content/gnb/en/admin/privacy.html',
    FR: 'https://www2.gnb.ca/content/gnb/fr/admin/declaration_de_confidentialite.html',
  },
  Ne = {
    EN: 'https://www2.gnb.ca/content/gnb/en/admin/disclaimer.html',
    FR: 'https://www2.gnb.ca/content/gnb/fr/admin/decharge.html',
  },
  ls = 256,
  us = 50,
  ds = 128,
  Rt = '+1',
  fs = ({ variant: e }) => {
    const { t } = Ue(),
      [n] = be(['language']),
      r = n.language,
      s = r === 'fr-CA' ? Te.FR : Te.EN,
      o = r === 'fr-CA' ? Ne.FR : Ne.EN;
    return d.jsx('footer', {
      className: `gnb-footer gnb-footer-${e}`,
      children: d.jsx('div', {
        className: 'container-fluid',
        children: d.jsxs('div', {
          className: 'row',
          children: [
            d.jsx('div', {
              className: 'col-md-6',
              children: d.jsx('p', { className: 'copyright', children: t('footer.copyright') }),
            }),
            d.jsx('div', {
              className: 'col-md-6',
              children: d.jsx('nav', {
                className: 'nav-legal',
                children: d.jsxs('ul', {
                  children: [
                    d.jsx('li', {
                      children: d.jsx(Re, {
                        i18nKey: 'footer.privacy',
                        components: {
                          1: d.jsx('a', { href: s, target: '_blank', rel: 'noreferrer', children: 'Privary' }),
                        },
                      }),
                    }),
                    d.jsx('li', {
                      children: d.jsx(Re, {
                        i18nKey: 'footer.disclaimer',
                        components: {
                          1: d.jsx('a', { href: o, target: '_blank', rel: 'noreferrer', children: 'Disclaimer' }),
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
  xt = '/etc/designs/spa/snb-vrrr-fe/clientlibs/',
  ms = ({ showCart: e, menuOptions: t, showSearch: n, signedIn: r, accountOptions: s }) => {
    const [, o, i] = be(['session', 'language', 'rememberMe']),
      c = Ie(),
      [f, l] = ht.useState(!1);
    function u() {
      St.forEach(({ menu: m, button: E }) => {
        const R = document.getElementById(m),
          S = document.getElementById(E);
        R && S && (R.classList.remove('show'), S.classList.remove('show'), S.setAttribute('aria-expanded', 'false')),
          l(!1);
      });
    }
    function h(m, E) {
      const R = document.getElementById(m),
        S = document.getElementById(E);
      R &&
        S &&
        (R.classList.contains('show')
          ? (R.classList.remove('show'), S.classList.remove('show'), S.setAttribute('aria-expanded', 'false'), l(!1))
          : (u(), R.classList.add('show'), S.classList.add('show'), S.setAttribute('aria-expanded', 'true'), l(!0)));
    }
    const { t: y, i18n: x } = Ue(),
      p = () => {
        const E = x.language === 'fr-CA' ? 'en-CA' : 'fr-CA';
        x.changeLanguage(E), o('language', E);
      },
      b = (m, E) => {
        const R = m.map((S, j) => {
          const { link: T, text: P } = S;
          return E
            ? d.jsx(
                'li',
                {
                  children: d.jsx('a', {
                    href: '#',
                    onClick: () => {
                      T === '/authentication' ? (i('session'), i('rememberMe'), c('/authentication')) : c(T);
                    },
                    children: P,
                  }),
                },
                j.toString()
              )
            : d.jsx(
                'li',
                { style: { paddingBottom: '15px' }, children: d.jsx('div', { children: P }) },
                j.toString() + 'static'
              );
        });
        return d.jsx(d.Fragment, { children: R });
      };
    return d.jsxs(d.Fragment, {
      children: [
        d.jsxs('header', {
          className: 'gnb-header',
          children: [
            d.jsx('div', {
              className: 'logo',
              children: d.jsx('a', {
                href: 'https://www.gnb.ca',
                children: d.jsx('img', {
                  src: xt + 'images/new-brunswick-logo.svg',
                  alt: y('mainNavigation.governmentOfNewBrunswick'),
                  id: 'logo',
                }),
              }),
            }),
            d.jsx('div', {
              className: 'gnb-main-nav',
              children: d.jsx('nav', {
                children: d.jsxs('ul', {
                  children: [
                    d.jsx('li', {
                      children: d.jsx('a', { href: '#', onClick: () => p(), children: y('SwitchLanguage') }),
                    }),
                    e &&
                      d.jsx('li', {
                        children: d.jsx('button', {
                          className: 'btn-cart',
                          children: d.jsx('span', { children: y('mainNavigation.cart') }),
                        }),
                      }),
                    n &&
                      d.jsx('li', {
                        children: d.jsx('button', {
                          'aria-expanded': 'false',
                          id: 'btn-search',
                          className: 'btn-search',
                          onClick: () => h('gnb-search', 'btn-search'),
                          children: d.jsx('span', { children: y('mainNavigation.search') }),
                        }),
                      }),
                    s[0] &&
                      d.jsx(d.Fragment, {
                        children:
                          r &&
                          d.jsx('li', {
                            children: d.jsx('button', {
                              'aria-expanded': 'false',
                              id: 'btn-account',
                              className: 'btn-account',
                              onClick: () => h('gnb-account', 'btn-account'),
                              children: d.jsx('span', { children: y('mainNavigation.account') }),
                            }),
                          }),
                      }),
                    t &&
                      d.jsx('li', {
                        children: d.jsx('button', {
                          'aria-expanded': 'false',
                          id: 'btn-mega-menu',
                          onClick: () => h('gnb-mega-menu', 'btn-mega-menu'),
                          children: d.jsx('span', { children: y('mainNavigation.menu') }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          ],
        }),
        n &&
          d.jsx('section', {
            className: 'gnb-search',
            id: 'gnb-search',
            style: { textAlign: 'left' },
            children: d.jsxs('div', {
              className: 'container padding-bottom-xl',
              children: [
                d.jsx('h2', { children: y('mainNavigation.search') }),
                d.jsxs('form', {
                  className: 'gnb-input-pair',
                  children: [
                    d.jsx('label', {
                      className: 'visually-hidden',
                      htmlFor: 'search',
                      children: y('mainNavigation.search'),
                    }),
                    d.jsx('input', { id: 'search', type: 'search' }),
                    d.jsx('button', {
                      className: 'gnb-btn-search',
                      children: d.jsx('span', { children: y('mainNavigation.search') }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        t &&
          d.jsx('section', {
            className: 'gnb-mega-menu',
            id: 'gnb-mega-menu',
            style: { textAlign: 'left' },
            children: d.jsxs('div', {
              className: 'container padding-bottom-xl',
              children: [
                d.jsx('h2', { children: y('mainNavigation.menuOptions.heading') }),
                d.jsx('ul', {
                  className: 'gnb-list-nav row row-cols-1 row-cols-md-2 row-cols-lg-3',
                  children: b(t, f),
                }),
              ],
            }),
          }),
        r &&
          s &&
          d.jsx('section', {
            className: 'gnb-account',
            id: 'gnb-account',
            style: { textAlign: 'left' },
            children: d.jsxs('div', {
              className: 'container padding-bottom-xl',
              children: [
                d.jsx('h2', { children: y('mainNavigation.accountOptionsSignIn.heading') }),
                d.jsx('ul', { className: 'gnb-list-nav row row-cols-1 ', children: b(s, f) }),
              ],
            }),
          }),
      ],
    });
  },
  hs = ({
    label: e,
    disabled: t,
    variant: n = 'primary',
    type: r = 'button',
    size: s,
    leftIcon: o,
    rightIcon: i,
    isLoading: c,
    loadingText: f = 'Loading',
    onClick: l,
    id: u,
  }) =>
    d.jsxs('button', {
      type: r,
      className: He({
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
        c && d.jsxs(d.Fragment, { children: [` ${f} `, d.jsx(ie, { icon: pt, className: 'fa-spin' })] }),
        !c && d.jsxs(d.Fragment, { children: [o && d.jsx(ie, { icon: o }), ` ${e} `, i && d.jsx(ie, { icon: i })] }),
      ],
    });
function qe(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: At } = Object.prototype,
  { getPrototypeOf: ge } = Object,
  { iterator: Z, toStringTag: We } = Symbol,
  ee = ((e) => (t) => {
    const n = At.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  L = (e) => ((e = e.toLowerCase()), (t) => ee(t) === e),
  te = (e) => (t) => typeof t === e,
  { isArray: B } = Array,
  W = te('undefined');
function Tt(e) {
  return (
    e !== null &&
    !W(e) &&
    e.constructor !== null &&
    !W(e.constructor) &&
    C(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ze = L('ArrayBuffer');
function Nt(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && ze(e.buffer)),
    t
  );
}
const Ct = te('string'),
  C = te('function'),
  Je = te('number'),
  ne = (e) => e !== null && typeof e == 'object',
  Ot = (e) => e === !0 || e === !1,
  X = (e) => {
    if (ee(e) !== 'object') return !1;
    const t = ge(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(We in e) && !(Z in e);
  },
  jt = L('Date'),
  Pt = L('File'),
  Mt = L('Blob'),
  Lt = L('FileList'),
  vt = (e) => ne(e) && C(e.pipe),
  _t = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (C(e.append) &&
          ((t = ee(e)) === 'formdata' || (t === 'object' && C(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  Ft = L('URLSearchParams'),
  [kt, Dt, $t, Bt] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(L),
  Ut = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function z(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, s;
  if ((typeof e != 'object' && (e = [e]), B(e))) for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let c;
    for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function Ve(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const F = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global,
  Xe = (e) => !W(e) && e !== F;
function ue() {
  const { caseless: e } = (Xe(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Ve(t, s)) || s;
      X(t[o]) && X(r) ? (t[o] = ue(t[o], r)) : X(r) ? (t[o] = ue({}, r)) : B(r) ? (t[o] = r.slice()) : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && z(arguments[r], n);
  return t;
}
const It = (e, t, n, { allOwnKeys: r } = {}) => (
    z(
      t,
      (s, o) => {
        n && C(s) ? (e[o] = qe(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Ht = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  qt = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Wt = (e, t, n, r) => {
    let s, o, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && ge(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  zt = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Jt = (e) => {
    if (!e) return null;
    if (B(e)) return e;
    let t = e.length;
    if (!Je(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Vt = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && ge(Uint8Array)),
  Xt = (e, t) => {
    const r = (e && e[Z]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Kt = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Yt = L('HTMLFormElement'),
  Gt = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Ce = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Qt = L('RegExp'),
  Ke = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    z(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Zt = (e) => {
    Ke(e, (t, n) => {
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
  en = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return B(e) ? r(e) : r(String(e).split(t)), n;
  },
  tn = () => {},
  nn = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function rn(e) {
  return !!(e && C(e.append) && e[We] === 'FormData' && e[Z]);
}
const sn = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (ne(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[s] = r;
            const o = B(r) ? [] : {};
            return (
              z(r, (i, c) => {
                const f = n(i, s + 1);
                !W(f) && (o[c] = f);
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
  on = L('AsyncFunction'),
  an = (e) => e && (ne(e) || C(e)) && C(e.then) && C(e.catch),
  Ye = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          F.addEventListener(
            'message',
            ({ source: s, data: o }) => {
              s === F && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), F.postMessage(n, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(typeof setImmediate == 'function', C(F.postMessage)),
  cn = typeof queueMicrotask < 'u' ? queueMicrotask.bind(F) : (typeof process < 'u' && process.nextTick) || Ye,
  ln = (e) => e != null && C(e[Z]),
  a = {
    isArray: B,
    isArrayBuffer: ze,
    isBuffer: Tt,
    isFormData: _t,
    isArrayBufferView: Nt,
    isString: Ct,
    isNumber: Je,
    isBoolean: Ot,
    isObject: ne,
    isPlainObject: X,
    isReadableStream: kt,
    isRequest: Dt,
    isResponse: $t,
    isHeaders: Bt,
    isUndefined: W,
    isDate: jt,
    isFile: Pt,
    isBlob: Mt,
    isRegExp: Qt,
    isFunction: C,
    isStream: vt,
    isURLSearchParams: Ft,
    isTypedArray: Vt,
    isFileList: Lt,
    forEach: z,
    merge: ue,
    extend: It,
    trim: Ut,
    stripBOM: Ht,
    inherits: qt,
    toFlatObject: Wt,
    kindOf: ee,
    kindOfTest: L,
    endsWith: zt,
    toArray: Jt,
    forEachEntry: Xt,
    matchAll: Kt,
    isHTMLForm: Yt,
    hasOwnProperty: Ce,
    hasOwnProp: Ce,
    reduceDescriptors: Ke,
    freezeMethods: Zt,
    toObjectSet: en,
    toCamelCase: Gt,
    noop: tn,
    toFiniteNumber: nn,
    findKey: Ve,
    global: F,
    isContextDefined: Xe,
    isSpecCompliantForm: rn,
    toJSONObject: sn,
    isAsyncFn: on,
    isThenable: an,
    setImmediate: Ye,
    asap: cn,
    isIterable: ln,
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
const Ge = g.prototype,
  Qe = {};
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
  Qe[e] = { value: e };
});
Object.defineProperties(g, Qe);
Object.defineProperty(Ge, 'isAxiosError', { value: !0 });
g.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ge);
  return (
    a.toFlatObject(
      e,
      i,
      function (f) {
        return f !== Error.prototype;
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
const un = null;
function de(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ze(e) {
  return a.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Oe(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Ze(s)), !n && o ? '[' + s + ']' : s;
        })
        .join(n ? '.' : '')
    : t;
}
function dn(e) {
  return a.isArray(e) && !e.some(de);
}
const fn = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function re(e, t, n) {
  if (!a.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = a.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (b, m) {
      return !a.isUndefined(m[b]);
    }));
  const r = n.metaTokens,
    s = n.visitor || u,
    o = n.dots,
    i = n.indexes,
    f = (n.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError('visitor must be a function');
  function l(p) {
    if (p === null) return '';
    if (a.isDate(p)) return p.toISOString();
    if (a.isBoolean(p)) return p.toString();
    if (!f && a.isBlob(p)) throw new g('Blob is not supported. Use a Buffer instead.');
    return a.isArrayBuffer(p) || a.isTypedArray(p)
      ? f && typeof Blob == 'function'
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function u(p, b, m) {
    let E = p;
    if (p && !m && typeof p == 'object') {
      if (a.endsWith(b, '{}')) (b = r ? b : b.slice(0, -2)), (p = JSON.stringify(p));
      else if ((a.isArray(p) && dn(p)) || ((a.isFileList(p) || a.endsWith(b, '[]')) && (E = a.toArray(p))))
        return (
          (b = Ze(b)),
          E.forEach(function (S, j) {
            !(a.isUndefined(S) || S === null) && t.append(i === !0 ? Oe([b], j, o) : i === null ? b : b + '[]', l(S));
          }),
          !1
        );
    }
    return de(p) ? !0 : (t.append(Oe(m, b, o), l(p)), !1);
  }
  const h = [],
    y = Object.assign(fn, { defaultVisitor: u, convertValue: l, isVisitable: de });
  function x(p, b) {
    if (!a.isUndefined(p)) {
      if (h.indexOf(p) !== -1) throw Error('Circular reference detected in ' + b.join('.'));
      h.push(p),
        a.forEach(p, function (E, R) {
          (!(a.isUndefined(E) || E === null) && s.call(t, E, a.isString(R) ? R.trim() : R, b, y)) === !0 &&
            x(E, b ? b.concat(R) : [R]);
        }),
        h.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError('data must be an object');
  return x(e), t;
}
function je(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ye(e, t) {
  (this._pairs = []), e && re(e, this, t);
}
const et = ye.prototype;
et.append = function (t, n) {
  this._pairs.push([t, n]);
};
et.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, je);
      }
    : je;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1]);
    }, '')
    .join('&');
};
function mn(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function tt(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || mn;
  a.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let o;
  if ((s ? (o = s(t, n)) : (o = a.isURLSearchParams(t) ? t.toString() : new ye(t, n).toString(r)), o)) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)), (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class Pe {
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
const nt = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  hn = typeof URLSearchParams < 'u' ? URLSearchParams : ye,
  pn = typeof FormData < 'u' ? FormData : null,
  bn = typeof Blob < 'u' ? Blob : null,
  gn = {
    isBrowser: !0,
    classes: { URLSearchParams: hn, FormData: pn, Blob: bn },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  we = typeof window < 'u' && typeof document < 'u',
  fe = (typeof navigator == 'object' && navigator) || void 0,
  yn = we && (!fe || ['ReactNative', 'NativeScript', 'NS'].indexOf(fe.product) < 0),
  wn = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function',
  En = (we && window.location.href) || 'http://localhost',
  Sn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: we,
        hasStandardBrowserEnv: yn,
        hasStandardBrowserWebWorkerEnv: wn,
        navigator: fe,
        origin: En,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  N = { ...Sn, ...gn };
function Rn(e, t) {
  return re(
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
function xn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function An(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function rt(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === '__proto__') return !0;
    const c = Number.isFinite(+i),
      f = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      f
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = An(s[i])), !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(xn(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Tn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const J = {
  transitional: nt,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))) return s ? JSON.stringify(rt(t)) : t;
      if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
      let c;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return Rn(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const f = this.env && this.env.FormData;
          return re(c ? { 'files[]': t } : t, f && new f(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType('application/json', !1), Tn(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || J.transitional,
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
  J.headers[e] = {};
});
const Nn = a.toObjectSet([
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
  Cn = (e) => {
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
              !(!n || (t[n] && Nn[n])) &&
                (n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Me = Symbol('internals');
function q(e) {
  return e && String(e).trim().toLowerCase();
}
function K(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(K) : String(e);
}
function On(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const jn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ae(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function Pn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Mn(e, t) {
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
let O = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, l) {
      const u = q(f);
      if (!u) throw new Error('header name must be a non-empty string');
      const h = a.findKey(s, u);
      (!h || s[h] === void 0 || l === !0 || (l === void 0 && s[h] !== !1)) && (s[h || f] = K(c));
    }
    const i = (c, f) => a.forEach(c, (l, u) => o(l, u, f));
    if (a.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !jn(t)) i(Cn(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {},
        f,
        l;
      for (const u of t) {
        if (!a.isArray(u)) throw TypeError('Object iterator must return a key-value pair');
        c[(l = u[0])] = (f = c[l]) ? (a.isArray(f) ? [...f, u[1]] : [f, u[1]]) : u[1];
      }
      i(c, n);
    } else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = q(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return On(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = q(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ae(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = q(i)), i)) {
        const c = a.findKey(r, i);
        c && (!n || ae(r, r[c], c, n)) && (delete r[c], (s = !0));
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
      (!t || ae(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
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
          (n[i] = K(s)), delete n[o];
          return;
        }
        const c = t ? Pn(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = K(s)), (r[c] = !0);
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
    const r = (this[Me] = this[Me] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const c = q(i);
      r[c] || (Mn(s, i), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
O.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
a.reduceDescriptors(O.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(O);
function ce(e, t) {
  const n = this || J,
    r = t || n,
    s = O.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function st(e) {
  return !!(e && e.__CANCEL__);
}
function U(e, t, n) {
  g.call(this, e ?? 'canceled', g.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
a.inherits(U, g, { __CANCEL__: !0 });
function ot(e, t, n) {
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
function Ln(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function vn(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const l = Date.now(),
        u = r[o];
      i || (i = l), (n[s] = f), (r[s] = l);
      let h = o,
        y = 0;
      for (; h !== s; ) (y += n[h++]), (h = h % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), l - i < t)) return;
      const x = u && l - u;
      return x ? Math.round((y * 1e3) / x) : void 0;
    }
  );
}
function _n(e, t) {
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
        h = u - n;
      h >= r
        ? i(l, u)
        : ((s = l),
          o ||
            (o = setTimeout(() => {
              (o = null), i(s);
            }, r - h)));
    },
    () => s && i(s),
  ];
}
const G = (e, t, n = 3) => {
    let r = 0;
    const s = vn(50, 250);
    return _n((o) => {
      const i = o.loaded,
        c = o.lengthComputable ? o.total : void 0,
        f = i - r,
        l = s(f),
        u = i <= c;
      r = i;
      const h = {
        loaded: i,
        total: c,
        progress: c ? i / c : void 0,
        bytes: f,
        rate: l || void 0,
        estimated: l && c && u ? (c - i) / l : void 0,
        event: o,
        lengthComputable: c != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(h);
    }, n);
  },
  Le = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  ve =
    (e) =>
    (...t) =>
      a.asap(() => e(...t)),
  Fn = N.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, N.origin)), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
      ))(new URL(N.origin), N.navigator && /(msie|trident)/i.test(N.navigator.userAgent))
    : () => !0,
  kn = N.hasStandardBrowserEnv
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
function Dn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function $n(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function it(e, t, n) {
  let r = !Dn(t);
  return e && (r || n == !1) ? $n(e, t) : t;
}
const _e = (e) => (e instanceof O ? { ...e } : e);
function D(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, h, y) {
    return a.isPlainObject(l) && a.isPlainObject(u)
      ? a.merge.call({ caseless: y }, l, u)
      : a.isPlainObject(u)
      ? a.merge({}, u)
      : a.isArray(u)
      ? u.slice()
      : u;
  }
  function s(l, u, h, y) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l, h, y);
    } else return r(l, u, h, y);
  }
  function o(l, u) {
    if (!a.isUndefined(u)) return r(void 0, u);
  }
  function i(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, h) {
    if (h in t) return r(l, u);
    if (h in e) return r(void 0, l);
  }
  const f = {
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
    headers: (l, u, h) => s(_e(l), _e(u), h, !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const h = f[u] || s,
        y = h(e[u], t[u], u);
      (a.isUndefined(y) && h !== c) || (n[u] = y);
    }),
    n
  );
}
const at = (e) => {
    const t = D({}, e);
    let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
    (t.headers = i = O.from(i)),
      (t.url = tt(it(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer)),
      c &&
        i.set(
          'Authorization',
          'Basic ' + btoa((c.username || '') + ':' + (c.password ? unescape(encodeURIComponent(c.password)) : ''))
        );
    let f;
    if (a.isFormData(n)) {
      if (N.hasStandardBrowserEnv || N.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
      else if ((f = i.getContentType()) !== !1) {
        const [l, ...u] = f
          ? f
              .split(';')
              .map((h) => h.trim())
              .filter(Boolean)
          : [];
        i.setContentType([l || 'multipart/form-data', ...u].join('; '));
      }
    }
    if (N.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || (r !== !1 && Fn(t.url)))) {
      const l = s && o && kn.read(o);
      l && i.set(s, l);
    }
    return t;
  },
  Bn = typeof XMLHttpRequest < 'u',
  Un =
    Bn &&
    function (e) {
      return new Promise(function (n, r) {
        const s = at(e);
        let o = s.data;
        const i = O.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: f, onDownloadProgress: l } = s,
          u,
          h,
          y,
          x,
          p;
        function b() {
          x && x(),
            p && p(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener('abort', u);
        }
        let m = new XMLHttpRequest();
        m.open(s.method.toUpperCase(), s.url, !0), (m.timeout = s.timeout);
        function E() {
          if (!m) return;
          const S = O.from('getAllResponseHeaders' in m && m.getAllResponseHeaders()),
            T = {
              data: !c || c === 'text' || c === 'json' ? m.responseText : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: S,
              config: e,
              request: m,
            };
          ot(
            function (_) {
              n(_), b();
            },
            function (_) {
              r(_), b();
            },
            T
          ),
            (m = null);
        }
        'onloadend' in m
          ? (m.onloadend = E)
          : (m.onreadystatechange = function () {
              !m ||
                m.readyState !== 4 ||
                (m.status === 0 && !(m.responseURL && m.responseURL.indexOf('file:') === 0)) ||
                setTimeout(E);
            }),
          (m.onabort = function () {
            m && (r(new g('Request aborted', g.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            r(new g('Network Error', g.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let j = s.timeout ? 'timeout of ' + s.timeout + 'ms exceeded' : 'timeout exceeded';
            const T = s.transitional || nt;
            s.timeoutErrorMessage && (j = s.timeoutErrorMessage),
              r(new g(j, T.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED, e, m)),
              (m = null);
          }),
          o === void 0 && i.setContentType(null),
          'setRequestHeader' in m &&
            a.forEach(i.toJSON(), function (j, T) {
              m.setRequestHeader(T, j);
            }),
          a.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials),
          c && c !== 'json' && (m.responseType = s.responseType),
          l && (([y, p] = G(l, !0)), m.addEventListener('progress', y)),
          f &&
            m.upload &&
            (([h, x] = G(f)), m.upload.addEventListener('progress', h), m.upload.addEventListener('loadend', x)),
          (s.cancelToken || s.signal) &&
            ((u = (S) => {
              m && (r(!S || S.type ? new U(null, e, m) : S), m.abort(), (m = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal && (s.signal.aborted ? u() : s.signal.addEventListener('abort', u)));
        const R = Ln(s.url);
        if (R && N.protocols.indexOf(R) === -1) {
          r(new g('Unsupported protocol ' + R + ':', g.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(o || null);
      });
    },
  In = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (l) {
        if (!s) {
          (s = !0), c();
          const u = l instanceof Error ? l : this.reason;
          r.abort(u instanceof g ? u : new U(u instanceof Error ? u.message : u));
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
      const { signal: f } = r;
      return (f.unsubscribe = () => a.asap(c)), f;
    }
  },
  Hn = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  qn = async function* (e, t) {
    for await (const n of Wn(e)) yield* Hn(n, t);
  },
  Wn = async function* (e) {
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
  Fe = (e, t, n, r) => {
    const s = qn(e, t);
    let o = 0,
      i,
      c = (f) => {
        i || ((i = !0), r && r(f));
      };
    return new ReadableStream(
      {
        async pull(f) {
          try {
            const { done: l, value: u } = await s.next();
            if (l) {
              c(), f.close();
              return;
            }
            let h = u.byteLength;
            if (n) {
              let y = (o += h);
              n(y);
            }
            f.enqueue(new Uint8Array(u));
          } catch (l) {
            throw (c(l), l);
          }
        },
        cancel(f) {
          return c(f), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  se = typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
  ct = se && typeof ReadableStream == 'function',
  zn =
    se &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  lt = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Jn =
    ct &&
    lt(() => {
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
  ke = 64 * 1024,
  me = ct && lt(() => a.isReadableStream(new Response('').body)),
  Q = { stream: me && ((e) => e.body) };
se &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Q[t] &&
        (Q[t] = a.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new g(`Response type '${t}' is not supported`, g.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const Vn = async (e) => {
    if (e == null) return 0;
    if (a.isBlob(e)) return e.size;
    if (a.isSpecCompliantForm(e))
      return (await new Request(N.origin, { method: 'POST', body: e }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(e) || a.isArrayBuffer(e)) return e.byteLength;
    if ((a.isURLSearchParams(e) && (e = e + ''), a.isString(e))) return (await zn(e)).byteLength;
  },
  Xn = async (e, t) => {
    const n = a.toFiniteNumber(e.getContentLength());
    return n ?? Vn(t);
  },
  Kn =
    se &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: c,
        onUploadProgress: f,
        responseType: l,
        headers: u,
        withCredentials: h = 'same-origin',
        fetchOptions: y,
      } = at(e);
      l = l ? (l + '').toLowerCase() : 'text';
      let x = In([s, o && o.toAbortSignal()], i),
        p;
      const b =
        x &&
        x.unsubscribe &&
        (() => {
          x.unsubscribe();
        });
      let m;
      try {
        if (f && Jn && n !== 'get' && n !== 'head' && (m = await Xn(u, r)) !== 0) {
          let T = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            P;
          if ((a.isFormData(r) && (P = T.headers.get('content-type')) && u.setContentType(P), T.body)) {
            const [_, V] = Le(m, G(ve(f)));
            r = Fe(T.body, ke, _, V);
          }
        }
        a.isString(h) || (h = h ? 'include' : 'omit');
        const E = 'credentials' in Request.prototype;
        p = new Request(t, {
          ...y,
          signal: x,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: E ? h : void 0,
        });
        let R = await fetch(p, y);
        const S = me && (l === 'stream' || l === 'response');
        if (me && (c || (S && b))) {
          const T = {};
          ['status', 'statusText', 'headers'].forEach((Ee) => {
            T[Ee] = R[Ee];
          });
          const P = a.toFiniteNumber(R.headers.get('content-length')),
            [_, V] = (c && Le(P, G(ve(c), !0))) || [];
          R = new Response(
            Fe(R.body, ke, _, () => {
              V && V(), b && b();
            }),
            T
          );
        }
        l = l || 'text';
        let j = await Q[a.findKey(Q, l) || 'text'](R, e);
        return (
          !S && b && b(),
          await new Promise((T, P) => {
            ot(T, P, {
              data: j,
              headers: O.from(R.headers),
              status: R.status,
              statusText: R.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (E) {
        throw (
          (b && b(),
          E && E.name === 'TypeError' && /Load failed|fetch/i.test(E.message)
            ? Object.assign(new g('Network Error', g.ERR_NETWORK, e, p), { cause: E.cause || E })
            : g.from(E, E && E.code, e, p))
        );
      }
    }),
  he = { http: un, xhr: Un, fetch: Kn };
a.forEach(he, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const De = (e) => `- ${e}`,
  Yn = (e) => a.isFunction(e) || e === null || e === !1,
  ut = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (((r = n), !Yn(n) && ((r = he[(i = String(n)).toLowerCase()]), r === void 0)))
          throw new g(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || '#' + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([c, f]) =>
            `adapter ${c} ` + (f === !1 ? 'is not supported by the environment' : 'is not available in the build')
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(De).join(`
`)
            : ' ' + De(o[0])
          : 'as no adapter specified';
        throw new g('There is no suitable adapter to dispatch the request ' + i, 'ERR_NOT_SUPPORT');
      }
      return r;
    },
    adapters: he,
  };
function le(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new U(null, e);
}
function $e(e) {
  return (
    le(e),
    (e.headers = O.from(e.headers)),
    (e.data = ce.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    ut
      .getAdapter(e.adapter || J.adapter)(e)
      .then(
        function (r) {
          return le(e), (r.data = ce.call(e, e.transformResponse, r)), (r.headers = O.from(r.headers)), r;
        },
        function (r) {
          return (
            st(r) ||
              (le(e),
              r &&
                r.response &&
                ((r.response.data = ce.call(e, e.transformResponse, r.response)),
                (r.response.headers = O.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const dt = '1.10.0',
  oe = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  oe[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const Be = {};
oe.transitional = function (t, n, r) {
  function s(o, i) {
    return '[Axios v' + dt + "] Transitional option '" + o + "'" + i + (r ? '. ' + r : '');
  }
  return (o, i, c) => {
    if (t === !1) throw new g(s(i, ' has been removed' + (n ? ' in ' + n : '')), g.ERR_DEPRECATED);
    return (
      n &&
        !Be[i] &&
        ((Be[i] = !0),
        console.warn(s(i, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
      t ? t(o, i, c) : !0
    );
  };
};
oe.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Gn(e, t, n) {
  if (typeof e != 'object') throw new g('options must be an object', g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const c = e[o],
        f = c === void 0 || i(c, o, e);
      if (f !== !0) throw new g('option ' + o + ' must be ' + f, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new g('Unknown option ' + o, g.ERR_BAD_OPTION);
  }
}
const Y = { assertOptions: Gn, validators: oe },
  v = Y.validators;
let k = class {
  constructor(t) {
    (this.defaults = t || {}), (this.interceptors = { request: new Pe(), response: new Pe() });
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
      Y.assertOptions(
        r,
        {
          silentJSONParsing: v.transitional(v.boolean),
          forcedJSONParsing: v.transitional(v.boolean),
          clarifyTimeoutError: v.transitional(v.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Y.assertOptions(s, { encode: v.function, serialize: v.function }, !0)),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Y.assertOptions(n, { baseUrl: v.spelling('baseURL'), withXsrfToken: v.spelling('withXSRFToken') }, !0),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (p) => {
        delete o[p];
      }),
      (n.headers = O.concat(i, o));
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function (b) {
      (typeof b.runWhen == 'function' && b.runWhen(n) === !1) ||
        ((f = f && b.synchronous), c.unshift(b.fulfilled, b.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (b) {
      l.push(b.fulfilled, b.rejected);
    });
    let u,
      h = 0,
      y;
    if (!f) {
      const p = [$e.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, l), y = p.length, u = Promise.resolve(n); h < y; )
        u = u.then(p[h++], p[h++]);
      return u;
    }
    y = c.length;
    let x = n;
    for (h = 0; h < y; ) {
      const p = c[h++],
        b = c[h++];
      try {
        x = p(x);
      } catch (m) {
        b.call(this, m);
        break;
      }
    }
    try {
      u = $e.call(this, x);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, y = l.length; h < y; ) u = u.then(l[h++], l[h++]);
    return u;
  }
  getUri(t) {
    t = D(this.defaults, t);
    const n = it(t.baseURL, t.url, t.allowAbsoluteUrls);
    return tt(n, t.params, t.paramsSerializer);
  }
};
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
  k.prototype[t] = function (n, r) {
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
  (k.prototype[t] = n()), (k.prototype[t + 'Form'] = n(!0));
});
let Qn = class ft {
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
        r.reason || ((r.reason = new U(o, i, c)), n(r.reason));
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
      token: new ft(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function Zn(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function er(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const pe = {
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
Object.entries(pe).forEach(([e, t]) => {
  pe[t] = e;
});
function mt(e) {
  const t = new k(e),
    n = qe(k.prototype.request, t);
  return (
    a.extend(n, k.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return mt(D(e, s));
    }),
    n
  );
}
const w = mt(J);
w.Axios = k;
w.CanceledError = U;
w.CancelToken = Qn;
w.isCancel = st;
w.VERSION = dt;
w.toFormData = re;
w.AxiosError = g;
w.Cancel = w.CanceledError;
w.all = function (t) {
  return Promise.all(t);
};
w.spread = Zn;
w.isAxiosError = er;
w.mergeConfig = D;
w.AxiosHeaders = O;
w.formToJSON = (e) => rt(a.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = ut.getAdapter;
w.HttpStatusCode = pe;
w.default = w;
const {
    Axios: gs,
    AxiosError: ys,
    CanceledError: ws,
    isCancel: Es,
    CancelToken: Ss,
    VERSION: Rs,
    all: xs,
    Cancel: As,
    isAxiosError: Ts,
    spread: Ns,
    toFormData: Cs,
    AxiosHeaders: Os,
    HttpStatusCode: js,
    formToJSON: Ps,
    getAdapter: Ms,
    mergeConfig: Ls,
  } = w,
  M = 'https://notifications.snb.ca',
  A = {
    authentication: {
      OTP: `${M}/otp`,
      RESEND_OTP: `${M}/otp/resend`,
      EMAIL_OTP: `${M}/otp/email`,
      SMS_NUMBER_OTP: `${M}/otp/sms-number`,
    },
    notifications: { REMINDER_DETAILS: `${M}/reminders`, STOP_PAPER_REMINDERS: `${M}/reminders/stop-paper` },
    vehicles: { VEHICLES: `${M}/vehicles` },
    accountSettings: { DETAILS: `${M}/accounts`, EMAIL: `${M}/accounts/email`, LANGUAGE: `${M}/accounts/language` },
    feedback: { SUBMIT_FEEDBACK: `${M}/feedbacks` },
  },
  tr = (e) => w.post(`${A.authentication.OTP}`, e),
  nr = (e) => w.post(`${A.authentication.RESEND_OTP}`, e),
  rr = (e) => w.put(`${A.authentication.OTP}`, e),
  sr = (e) => w.post(`${A.authentication.EMAIL_OTP}`, e),
  or = (e) => w.put(`${A.authentication.EMAIL_OTP}`, e),
  ir = (e) => w.post(`${A.authentication.SMS_NUMBER_OTP}`, e),
  ar = (e) => w.put(`${A.authentication.SMS_NUMBER_OTP}`, e),
  cr = (e) => w.get(`${A.notifications.REMINDER_DETAILS}`, e),
  lr = (e) => w.post(`${A.notifications.REMINDER_DETAILS}`, e),
  ur = (e) => w.post(`${A.notifications.STOP_PAPER_REMINDERS}`, e),
  dr = (e) => w.get(`${A.vehicles.VEHICLES}`, e),
  fr = (e) => w.post(`${A.vehicles.VEHICLES}`, e),
  mr = (e) => w.put(`${A.vehicles.VEHICLES}`, e),
  hr = (e, t) => w.get(`${A.vehicles.VEHICLES}/${e}`, t),
  pr = (e, t) => w.delete(`${A.vehicles.VEHICLES}/${e}`, t),
  br = (e) => w.get(`${A.accountSettings.DETAILS}`, e),
  gr = (e) => w.put(`${A.accountSettings.EMAIL}`, e),
  yr = (e) => w.put(`${A.accountSettings.LANGUAGE}`, e),
  wr = (e) => w.post(`${A.feedback.SUBMIT_FEEDBACK}`, e),
  vs = {
    createOTP: tr,
    verifyOTP: rr,
    resendOTP: nr,
    createChangeEmailOTP: sr,
    verifyChangeEmailOTP: or,
    createChangeSMSNumberOTP: ir,
    verifyChangeSMSNumberOTP: ar,
    getReminderDetails: cr,
    updateReminderDetails: lr,
    stopPaperReminders: ur,
    getAllVehicles: dr,
    addAVehicle: fr,
    updateAVehicle: mr,
    getAVehicle: hr,
    removeAVehicle: pr,
    getAccountDetails: br,
    updateAccountEmail: gr,
    updateAccountPreferredLanguage: yr,
    submitFeedback: wr,
  },
  _s = () => {
    const e = Ie(),
      [t, n] = be(['session', 'rememberMe']);
    return {
      setSessionCookie: (c, f) => {
        n('session', c, { maxAge: f || t.rememberMe ? Ae : xe }), n('rememberMe', !!f);
      },
      refreshSessionCookie: (c) => {
        n('session', c, { maxAge: t.rememberMe ? Ae : xe });
      },
      getSession: () => {
        const c = String(t.session);
        return c && c !== 'undefined' && (c == null ? void 0 : c.length) > 0 ? c : (e('/authentication'), '');
      },
      getRememberMe: () => !!t.rememberMe,
    };
  },
  Er = {
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
  Sr = (e, t, n) => {
    let r;
    const s = Er[e];
    return (
      typeof s == 'string' ? (r = s) : t === 1 ? (r = s.one) : (r = s.other.replace('{{count}}', t.toString())),
      n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
    );
  },
  Rr = { full: 'EEEE, MMMM do, yyyy', long: 'MMMM do, yyyy', medium: 'MMM d, yyyy', short: 'yyyy-MM-dd' },
  xr = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  Ar = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Tr = {
    date: $({ formats: Rr, defaultWidth: 'full' }),
    time: $({ formats: xr, defaultWidth: 'full' }),
    dateTime: $({ formats: Ar, defaultWidth: 'full' }),
  },
  Nr = {
    code: 'en-CA',
    formatDistance: Sr,
    formatLong: Tr,
    formatRelative: yt,
    localize: gt,
    match: bt,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  Cr = {
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
  Or = (e, t, n) => {
    let r;
    const s = Cr[e];
    return (
      typeof s == 'string' ? (r = s) : t === 1 ? (r = s.one) : (r = s.other.replace('{{count}}', String(t))),
      n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'dans ' + r : 'il y a ' + r) : r
    );
  },
  jr = {
    lastWeek: "eeee 'dernier à' p",
    yesterday: "'hier à' p",
    today: "'aujourd’hui à' p",
    tomorrow: "'demain à' p'",
    nextWeek: "eeee 'prochain à' p",
    other: 'P',
  },
  Pr = (e, t, n, r) => jr[e],
  Mr = {
    narrow: ['av. J.-C', 'ap. J.-C'],
    abbreviated: ['av. J.-C', 'ap. J.-C'],
    wide: ['avant Jésus-Christ', 'après Jésus-Christ'],
  },
  Lr = {
    narrow: ['T1', 'T2', 'T3', 'T4'],
    abbreviated: ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'],
    wide: ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre'],
  },
  vr = {
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
  _r = {
    narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    short: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
    abbreviated: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
    wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  },
  Fr = {
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
  kr = (e, t) => {
    const n = Number(e),
      r = t == null ? void 0 : t.unit;
    if (n === 0) return '0';
    const s = ['year', 'week', 'hour', 'minute', 'second'];
    let o;
    return n === 1 ? (o = r && s.includes(r) ? 'ère' : 'er') : (o = 'ème'), n + o;
  },
  Dr = ['MMM', 'MMMM'],
  $r = {
    preprocessor: (e, t) =>
      e.getDate() === 1 || !t.some((r) => r.isToken && Dr.includes(r.value))
        ? t
        : t.map((r) => (r.isToken && r.value === 'do' ? { isToken: !0, value: 'd' } : r)),
    ordinalNumber: kr,
    era: I({ values: Mr, defaultWidth: 'wide' }),
    quarter: I({ values: Lr, defaultWidth: 'wide', argumentCallback: (e) => e - 1 }),
    month: I({ values: vr, defaultWidth: 'wide' }),
    day: I({ values: _r, defaultWidth: 'wide' }),
    dayPeriod: I({ values: Fr, defaultWidth: 'wide' }),
  },
  Br = /^(\d+)(ième|ère|ème|er|e)?/i,
  Ur = /\d+/i,
  Ir = {
    narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
    abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
    wide: /^(avant Jésus-Christ|après Jésus-Christ)/i,
  },
  Hr = { any: [/^av/i, /^ap/i] },
  qr = { narrow: /^T?[1234]/i, abbreviated: /^[1234](er|ème|e)? trim\.?/i, wide: /^[1234](er|ème|e)? trimestre/i },
  Wr = { any: [/1/i, /2/i, /3/i, /4/i] },
  zr = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
    wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
  },
  Jr = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  Vr = {
    narrow: /^[lmjvsd]/i,
    short: /^(di|lu|ma|me|je|ve|sa)/i,
    abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
    wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i,
  },
  Xr = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
    any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i],
  },
  Kr = {
    narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
    any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i,
  },
  Yr = {
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
  Gr = {
    ordinalNumber: wt({ matchPattern: Br, parsePattern: Ur, valueCallback: (e) => parseInt(e) }),
    era: H({ matchPatterns: Ir, defaultMatchWidth: 'wide', parsePatterns: Hr, defaultParseWidth: 'any' }),
    quarter: H({
      matchPatterns: qr,
      defaultMatchWidth: 'wide',
      parsePatterns: Wr,
      defaultParseWidth: 'any',
      valueCallback: (e) => e + 1,
    }),
    month: H({ matchPatterns: zr, defaultMatchWidth: 'wide', parsePatterns: Jr, defaultParseWidth: 'any' }),
    day: H({ matchPatterns: Vr, defaultMatchWidth: 'wide', parsePatterns: Xr, defaultParseWidth: 'any' }),
    dayPeriod: H({ matchPatterns: Kr, defaultMatchWidth: 'any', parsePatterns: Yr, defaultParseWidth: 'any' }),
  },
  Qr = { full: 'EEEE d MMMM y', long: 'd MMMM y', medium: 'd MMM y', short: 'yy-MM-dd' },
  Zr = { full: 'HH:mm:ss zzzz', long: 'HH:mm:ss z', medium: 'HH:mm:ss', short: 'HH:mm' },
  es = {
    full: "{{date}} 'à' {{time}}",
    long: "{{date}} 'à' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  ts = {
    date: $({ formats: Qr, defaultWidth: 'full' }),
    time: $({ formats: Zr, defaultWidth: 'full' }),
    dateTime: $({ formats: es, defaultWidth: 'full' }),
  },
  ns = {
    code: 'fr-CA',
    formatDistance: Or,
    formatLong: ts,
    formatRelative: Pr,
    localize: $r,
    match: Gr,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  Fs = (e) =>
    e == null
      ? void 0
      : e
          .split(' ')
          .map((t, n, r) => `${t}${n === r.length - 1 ? '' : '-'}`)
          .join(''),
  ks = (e) => ` ${e.slice(0, 6).padEnd(17, '*')}`,
  Ds = (e) => {
    const t = Se.language;
    e && t !== e && Se.changeLanguage(e);
  },
  $s = (e) => {
    const t = String(e.session);
    return !!(t && t !== 'undefined' && (t == null ? void 0 : t.length) > 0);
  },
  Bs = (e, t, n, r) => `${e ? `${e} ` : ''}${t ? `${t} ` : ''}${n ? `${n} ` : ''}${r}`,
  Us = (e, t, n, r, s) => `${e ? `${e} ` : ''}${t ? `${t} ` : ''}'${s}' ${n ? `${n} ` : ''}${r}`,
  Is = (e, t, n) => ` ${e && Et(e, t, { locale: n === 'fr-CA' ? ns : Nr })}`,
  Hs = (e) => {
    let t;
    if (e) {
      const n = e.slice(2),
        r = n.slice(0, 3),
        s = n.slice(3, 6),
        o = n.slice(6);
      t = `${r}-${s}-${o}`;
    } else t = '';
    return t;
  },
  qs = (e) => {
    const t = e.trim().replace(/[^0-9]/g, '');
    return t.length < 4
      ? t
      : t.length < 7
      ? t.replace(/(\d{3})(\d{1})/, '$1-$2')
      : t.length < 11
      ? t.replace(/(\d{3})(\d{3})(\d{1})/, '$1-$2-$3')
      : t.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  },
  Ws = (e) => {
    const t = e.split('-').join('');
    return t ? `${Rt}${t}` : '';
  },
  zs = ({ error: e, classes: t = '', id: n = 'error-id' }) =>
    d.jsx('div', {
      className: He('gnb-form-validation left', t),
      role: 'alert',
      'aria-live': 'assertive',
      'aria-atomic': 'true',
      children: d.jsx('span', { id: n, className: 'margin-left-xs', children: e }),
    });
export {
  hs as B,
  us as C,
  os as D,
  ds as E,
  fs as F,
  vs as H,
  ms as M,
  ls as N,
  Us as a,
  Ds as b,
  Ws as c,
  Is as d,
  qs as e,
  as as f,
  Bs as g,
  zs as h,
  $s as i,
  Fs as j,
  cs as k,
  is as l,
  ks as m,
  Hs as s,
  _s as u,
};
