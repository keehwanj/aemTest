import { u as tt, a as Pe, j as m, d as nt, r as _t, i as rt, F as pe, q as $t, s as Ce } from './index-BJVeoK1D.js';
import { T as ve } from './useMetadata-Blp6FudJ.js';
const Wt = [
    { menu: 'gnb-mega-menu', button: 'btn-mega-menu' },
    { menu: 'gnb-search', button: 'btn-search' },
    { menu: 'gnb-sign-in', button: 'btn-sign-in' },
    { menu: 'gnb-account', button: 'btn-account' },
  ],
  Mo = 'MMMM d, y',
  Ro = 'y-MM-dd HH:mm:ss.SSS',
  ke = 1200,
  De = 33696e3,
  No = 'EN',
  Ao = 'FR',
  je = {
    EN: 'https://www2.gnb.ca/content/gnb/en/admin/privacy.html',
    FR: 'https://www2.gnb.ca/content/gnb/fr/admin/declaration_de_confidentialite.html',
  },
  Fe = {
    EN: 'https://www2.gnb.ca/content/gnb/en/admin/disclaimer.html',
    FR: 'https://www2.gnb.ca/content/gnb/fr/admin/decharge.html',
  },
  Co = 256,
  vo = 50,
  ko = 128,
  Bt = '+1',
  Do = ({ variant: e }) => {
    const { t } = tt(),
      [n] = Pe(['language']),
      r = n.language,
      s = r === 'fr-CA' ? je.FR : je.EN,
      o = r === 'fr-CA' ? Fe.FR : Fe.EN;
    return m.jsx('footer', {
      className: `gnb-footer gnb-footer-${e}`,
      children: m.jsx('div', {
        className: 'container-fluid',
        children: m.jsxs('div', {
          className: 'row',
          children: [
            m.jsx('div', {
              className: 'col-md-6',
              children: m.jsx('p', { className: 'copyright', children: t('footer.copyright') }),
            }),
            m.jsx('div', {
              className: 'col-md-6',
              children: m.jsx('nav', {
                className: 'nav-legal',
                children: m.jsxs('ul', {
                  children: [
                    m.jsx('li', {
                      children: m.jsx(ve, {
                        i18nKey: 'footer.privacy',
                        components: {
                          1: m.jsx('a', { href: s, target: '_blank', rel: 'noreferrer', children: 'Privary' }),
                        },
                      }),
                    }),
                    m.jsx('li', {
                      children: m.jsx(ve, {
                        i18nKey: 'footer.disclaimer',
                        components: {
                          1: m.jsx('a', { href: o, target: '_blank', rel: 'noreferrer', children: 'Disclaimer' }),
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
  Ut = '/etc/designs/spa/snb-vrrr-fe/clientlibs/',
  jo = ({ showCart: e, menuOptions: t, showSearch: n, signedIn: r, accountOptions: s }) => {
    const [, o, a] = Pe(['session', 'language', 'rememberMe']),
      c = nt(),
      [d, l] = _t.useState(!1);
    function u() {
      Wt.forEach(({ menu: h, button: E }) => {
        const x = document.getElementById(h),
          S = document.getElementById(E);
        x && S && (x.classList.remove('show'), S.classList.remove('show'), S.setAttribute('aria-expanded', 'false')),
          l(!1);
      });
    }
    function f(h, E) {
      const x = document.getElementById(h),
        S = document.getElementById(E);
      x &&
        S &&
        (x.classList.contains('show')
          ? (x.classList.remove('show'), S.classList.remove('show'), S.setAttribute('aria-expanded', 'false'), l(!1))
          : (u(), x.classList.add('show'), S.classList.add('show'), S.setAttribute('aria-expanded', 'true'), l(!0)));
    }
    const { t: g, i18n: T } = tt(),
      p = () => {
        const E = T.language === 'fr-CA' ? 'en-CA' : 'fr-CA';
        T.changeLanguage(E), o('language', E);
      },
      b = (h, E) => {
        const x = h.map((S, C) => {
          const { link: M, text: v } = S;
          return E
            ? m.jsx(
                'li',
                {
                  children: m.jsx('a', {
                    href: '#',
                    onClick: () => {
                      M === '/authentication' ? (a('session'), a('rememberMe'), c('/authentication')) : c(M);
                    },
                    children: v,
                  }),
                },
                C.toString()
              )
            : m.jsx(
                'li',
                { style: { paddingBottom: '15px' }, children: m.jsx('div', { children: v }) },
                C.toString() + 'static'
              );
        });
        return m.jsx(m.Fragment, { children: x });
      };
    return m.jsxs(m.Fragment, {
      children: [
        m.jsxs('header', {
          className: 'gnb-header',
          children: [
            m.jsx('div', {
              className: 'logo',
              children: m.jsx('a', {
                href: 'https://www.gnb.ca',
                children: m.jsx('img', {
                  src: Ut + 'images/new-brunswick-logo.svg',
                  alt: g('mainNavigation.governmentOfNewBrunswick'),
                  id: 'logo',
                }),
              }),
            }),
            m.jsx('div', {
              className: 'gnb-main-nav',
              children: m.jsx('nav', {
                children: m.jsxs('ul', {
                  children: [
                    m.jsx('li', {
                      children: m.jsx('a', { href: '#', onClick: () => p(), children: g('SwitchLanguage') }),
                    }),
                    e &&
                      m.jsx('li', {
                        children: m.jsx('button', {
                          className: 'btn-cart',
                          children: m.jsx('span', { children: g('mainNavigation.cart') }),
                        }),
                      }),
                    n &&
                      m.jsx('li', {
                        children: m.jsx('button', {
                          'aria-expanded': 'false',
                          id: 'btn-search',
                          className: 'btn-search',
                          onClick: () => f('gnb-search', 'btn-search'),
                          children: m.jsx('span', { children: g('mainNavigation.search') }),
                        }),
                      }),
                    s[0] &&
                      m.jsx(m.Fragment, {
                        children:
                          r &&
                          m.jsx('li', {
                            children: m.jsx('button', {
                              'aria-expanded': 'false',
                              id: 'btn-account',
                              className: 'btn-account',
                              onClick: () => f('gnb-account', 'btn-account'),
                              children: m.jsx('span', { children: g('mainNavigation.account') }),
                            }),
                          }),
                      }),
                    t &&
                      m.jsx('li', {
                        children: m.jsx('button', {
                          'aria-expanded': 'false',
                          id: 'btn-mega-menu',
                          onClick: () => f('gnb-mega-menu', 'btn-mega-menu'),
                          children: m.jsx('span', { children: g('mainNavigation.menu') }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          ],
        }),
        n &&
          m.jsx('section', {
            className: 'gnb-search',
            id: 'gnb-search',
            style: { textAlign: 'left' },
            children: m.jsxs('div', {
              className: 'container padding-bottom-xl',
              children: [
                m.jsx('h2', { children: g('mainNavigation.search') }),
                m.jsxs('form', {
                  className: 'gnb-input-pair',
                  children: [
                    m.jsx('label', {
                      className: 'visually-hidden',
                      htmlFor: 'search',
                      children: g('mainNavigation.search'),
                    }),
                    m.jsx('input', { id: 'search', type: 'search' }),
                    m.jsx('button', {
                      className: 'gnb-btn-search',
                      children: m.jsx('span', { children: g('mainNavigation.search') }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        t &&
          m.jsx('section', {
            className: 'gnb-mega-menu',
            id: 'gnb-mega-menu',
            style: { textAlign: 'left' },
            children: m.jsxs('div', {
              className: 'container padding-bottom-xl',
              children: [
                m.jsx('h2', { children: g('mainNavigation.menuOptions.heading') }),
                m.jsx('ul', {
                  className: 'gnb-list-nav row row-cols-1 row-cols-md-2 row-cols-lg-3',
                  children: b(t, d),
                }),
              ],
            }),
          }),
        r &&
          s &&
          m.jsx('section', {
            className: 'gnb-account',
            id: 'gnb-account',
            style: { textAlign: 'left' },
            children: m.jsxs('div', {
              className: 'container padding-bottom-xl',
              children: [
                m.jsx('h2', { children: g('mainNavigation.accountOptionsSignIn.heading') }),
                m.jsx('ul', { className: 'gnb-list-nav row row-cols-1 ', children: b(s, d) }),
              ],
            }),
          }),
      ],
    });
  },
  Fo = ({
    label: e,
    disabled: t,
    variant: n = 'primary',
    type: r = 'button',
    size: s,
    leftIcon: o,
    rightIcon: a,
    isLoading: c,
    loadingText: d = 'Loading',
    onClick: l,
    id: u,
  }) =>
    m.jsxs('button', {
      type: r,
      className: rt({
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
        c && m.jsxs(m.Fragment, { children: [` ${d} `, m.jsx(pe, { icon: $t, className: 'fa-spin' })] }),
        !c && m.jsxs(m.Fragment, { children: [o && m.jsx(pe, { icon: o }), ` ${e} `, a && m.jsx(pe, { icon: a })] }),
      ],
    });
function st(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: It } = Object.prototype,
  { getPrototypeOf: Me } = Object,
  { iterator: ie, toStringTag: ot } = Symbol,
  ce = ((e) => (t) => {
    const n = It.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  D = (e) => ((e = e.toLowerCase()), (t) => ce(t) === e),
  ue = (e) => (t) => typeof t === e,
  { isArray: J } = Array,
  G = ue('undefined');
function qt(e) {
  return (
    e !== null &&
    !G(e) &&
    e.constructor !== null &&
    !G(e.constructor) &&
    N(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const at = D('ArrayBuffer');
function Ht(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && at(e.buffer)),
    t
  );
}
const Yt = ue('string'),
  N = ue('function'),
  it = ue('number'),
  le = (e) => e !== null && typeof e == 'object',
  Vt = (e) => e === !0 || e === !1,
  te = (e) => {
    if (ce(e) !== 'object') return !1;
    const t = Me(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ot in e) && !(ie in e);
  },
  Jt = D('Date'),
  Xt = D('File'),
  zt = D('Blob'),
  Gt = D('FileList'),
  Kt = (e) => le(e) && N(e.pipe),
  Qt = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (N(e.append) &&
          ((t = ce(e)) === 'formdata' || (t === 'object' && N(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  Zt = D('URLSearchParams'),
  [en, tn, nn, rn] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(D),
  sn = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function Q(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, s;
  if ((typeof e != 'object' && (e = [e]), J(e))) for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = o.length;
    let c;
    for (r = 0; r < a; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function ct(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const I = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global,
  ut = (e) => !G(e) && e !== I;
function we() {
  const { caseless: e } = (ut(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && ct(t, s)) || s;
      te(t[o]) && te(r) ? (t[o] = we(t[o], r)) : te(r) ? (t[o] = we({}, r)) : J(r) ? (t[o] = r.slice()) : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && Q(arguments[r], n);
  return t;
}
const on = (e, t, n, { allOwnKeys: r } = {}) => (
    Q(
      t,
      (s, o) => {
        n && N(s) ? (e[o] = st(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  an = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  cn = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  un = (e, t, n, r) => {
    let s, o, a;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (a = s[o]), (!r || r(a, e, t)) && !c[a] && ((t[a] = e[a]), (c[a] = !0));
      e = n !== !1 && Me(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ln = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  dn = (e) => {
    if (!e) return null;
    if (J(e)) return e;
    let t = e.length;
    if (!it(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  fn = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Me(Uint8Array)),
  mn = (e, t) => {
    const r = (e && e[ie]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  hn = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  pn = D('HTMLFormElement'),
  gn = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Le = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  bn = D('RegExp'),
  lt = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Q(n, (s, o) => {
      let a;
      (a = t(s, o, e)) !== !1 && (r[o] = a || s);
    }),
      Object.defineProperties(e, r);
  },
  yn = (e) => {
    lt(e, (t, n) => {
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
  wn = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return J(e) ? r(e) : r(String(e).split(t)), n;
  },
  En = () => {},
  Sn = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function xn(e) {
  return !!(e && N(e.append) && e[ot] === 'FormData' && e[ie]);
}
const On = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (le(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[s] = r;
            const o = J(r) ? [] : {};
            return (
              Q(r, (a, c) => {
                const d = n(a, s + 1);
                !G(d) && (o[c] = d);
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
  Tn = D('AsyncFunction'),
  Pn = (e) => e && (le(e) || N(e)) && N(e.then) && N(e.catch),
  dt = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          I.addEventListener(
            'message',
            ({ source: s, data: o }) => {
              s === I && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), I.postMessage(n, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(typeof setImmediate == 'function', N(I.postMessage)),
  Mn = typeof queueMicrotask < 'u' ? queueMicrotask.bind(I) : (typeof process < 'u' && process.nextTick) || dt,
  Rn = (e) => e != null && N(e[ie]),
  i = {
    isArray: J,
    isArrayBuffer: at,
    isBuffer: qt,
    isFormData: Qt,
    isArrayBufferView: Ht,
    isString: Yt,
    isNumber: it,
    isBoolean: Vt,
    isObject: le,
    isPlainObject: te,
    isReadableStream: en,
    isRequest: tn,
    isResponse: nn,
    isHeaders: rn,
    isUndefined: G,
    isDate: Jt,
    isFile: Xt,
    isBlob: zt,
    isRegExp: bn,
    isFunction: N,
    isStream: Kt,
    isURLSearchParams: Zt,
    isTypedArray: fn,
    isFileList: Gt,
    forEach: Q,
    merge: we,
    extend: on,
    trim: sn,
    stripBOM: an,
    inherits: cn,
    toFlatObject: un,
    kindOf: ce,
    kindOfTest: D,
    endsWith: ln,
    toArray: dn,
    forEachEntry: mn,
    matchAll: hn,
    isHTMLForm: pn,
    hasOwnProperty: Le,
    hasOwnProp: Le,
    reduceDescriptors: lt,
    freezeMethods: yn,
    toObjectSet: wn,
    toCamelCase: gn,
    noop: En,
    toFiniteNumber: Sn,
    findKey: ct,
    global: I,
    isContextDefined: ut,
    isSpecCompliantForm: xn,
    toJSONObject: On,
    isAsyncFn: Tn,
    isThenable: Pn,
    setImmediate: dt,
    asap: Mn,
    isIterable: Rn,
  };
function y(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
i.inherits(y, Error, {
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
      config: i.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const ft = y.prototype,
  mt = {};
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
  mt[e] = { value: e };
});
Object.defineProperties(y, mt);
Object.defineProperty(ft, 'isAxiosError', { value: !0 });
y.from = (e, t, n, r, s, o) => {
  const a = Object.create(ft);
  return (
    i.toFlatObject(
      e,
      a,
      function (d) {
        return d !== Error.prototype;
      },
      (c) => c !== 'isAxiosError'
    ),
    y.call(a, e.message, t, n, r, s),
    (a.cause = e),
    (a.name = e.name),
    o && Object.assign(a, o),
    a
  );
};
const Nn = null;
function Ee(e) {
  return i.isPlainObject(e) || i.isArray(e);
}
function ht(e) {
  return i.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function _e(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = ht(s)), !n && o ? '[' + s + ']' : s;
        })
        .join(n ? '.' : '')
    : t;
}
function An(e) {
  return i.isArray(e) && !e.some(Ee);
}
const Cn = i.toFlatObject(i, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function de(e, t, n) {
  if (!i.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = i.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (b, h) {
      return !i.isUndefined(h[b]);
    }));
  const r = n.metaTokens,
    s = n.visitor || u,
    o = n.dots,
    a = n.indexes,
    d = (n.Blob || (typeof Blob < 'u' && Blob)) && i.isSpecCompliantForm(t);
  if (!i.isFunction(s)) throw new TypeError('visitor must be a function');
  function l(p) {
    if (p === null) return '';
    if (i.isDate(p)) return p.toISOString();
    if (i.isBoolean(p)) return p.toString();
    if (!d && i.isBlob(p)) throw new y('Blob is not supported. Use a Buffer instead.');
    return i.isArrayBuffer(p) || i.isTypedArray(p)
      ? d && typeof Blob == 'function'
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function u(p, b, h) {
    let E = p;
    if (p && !h && typeof p == 'object') {
      if (i.endsWith(b, '{}')) (b = r ? b : b.slice(0, -2)), (p = JSON.stringify(p));
      else if ((i.isArray(p) && An(p)) || ((i.isFileList(p) || i.endsWith(b, '[]')) && (E = i.toArray(p))))
        return (
          (b = ht(b)),
          E.forEach(function (S, C) {
            !(i.isUndefined(S) || S === null) && t.append(a === !0 ? _e([b], C, o) : a === null ? b : b + '[]', l(S));
          }),
          !1
        );
    }
    return Ee(p) ? !0 : (t.append(_e(h, b, o), l(p)), !1);
  }
  const f = [],
    g = Object.assign(Cn, { defaultVisitor: u, convertValue: l, isVisitable: Ee });
  function T(p, b) {
    if (!i.isUndefined(p)) {
      if (f.indexOf(p) !== -1) throw Error('Circular reference detected in ' + b.join('.'));
      f.push(p),
        i.forEach(p, function (E, x) {
          (!(i.isUndefined(E) || E === null) && s.call(t, E, i.isString(x) ? x.trim() : x, b, g)) === !0 &&
            T(E, b ? b.concat(x) : [x]);
        }),
        f.pop();
    }
  }
  if (!i.isObject(e)) throw new TypeError('data must be an object');
  return T(e), t;
}
function $e(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Re(e, t) {
  (this._pairs = []), e && de(e, this, t);
}
const pt = Re.prototype;
pt.append = function (t, n) {
  this._pairs.push([t, n]);
};
pt.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, $e);
      }
    : $e;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1]);
    }, '')
    .join('&');
};
function vn(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function gt(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || vn;
  i.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let o;
  if ((s ? (o = s(t, n)) : (o = i.isURLSearchParams(t) ? t.toString() : new Re(t, n).toString(r)), o)) {
    const a = e.indexOf('#');
    a !== -1 && (e = e.slice(0, a)), (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class We {
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
    i.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const bt = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  kn = typeof URLSearchParams < 'u' ? URLSearchParams : Re,
  Dn = typeof FormData < 'u' ? FormData : null,
  jn = typeof Blob < 'u' ? Blob : null,
  Fn = {
    isBrowser: !0,
    classes: { URLSearchParams: kn, FormData: Dn, Blob: jn },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Ne = typeof window < 'u' && typeof document < 'u',
  Se = (typeof navigator == 'object' && navigator) || void 0,
  Ln = Ne && (!Se || ['ReactNative', 'NativeScript', 'NS'].indexOf(Se.product) < 0),
  _n = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function',
  $n = (Ne && window.location.href) || 'http://localhost',
  Wn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ne,
        hasStandardBrowserEnv: Ln,
        hasStandardBrowserWebWorkerEnv: _n,
        navigator: Se,
        origin: $n,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  R = { ...Wn, ...Fn };
function Bn(e, t) {
  return de(
    e,
    new R.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return R.isNode && i.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Un(e) {
  return i.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function In(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function yt(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    if (a === '__proto__') return !0;
    const c = Number.isFinite(+a),
      d = o >= n.length;
    return (
      (a = !a && i.isArray(s) ? s.length : a),
      d
        ? (i.hasOwnProp(s, a) ? (s[a] = [s[a], r]) : (s[a] = r), !c)
        : ((!s[a] || !i.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && i.isArray(s[a]) && (s[a] = In(s[a])), !c)
    );
  }
  if (i.isFormData(e) && i.isFunction(e.entries)) {
    const n = {};
    return (
      i.forEachEntry(e, (r, s) => {
        t(Un(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function qn(e, t, n) {
  if (i.isString(e))
    try {
      return (t || JSON.parse)(e), i.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const Z = {
  transitional: bt,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        o = i.isObject(t);
      if ((o && i.isHTMLForm(t) && (t = new FormData(t)), i.isFormData(t))) return s ? JSON.stringify(yt(t)) : t;
      if (i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t) || i.isReadableStream(t))
        return t;
      if (i.isArrayBufferView(t)) return t.buffer;
      if (i.isURLSearchParams(t))
        return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
      let c;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return Bn(t, this.formSerializer).toString();
        if ((c = i.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const d = this.env && this.env.FormData;
          return de(c ? { 'files[]': t } : t, d && new d(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType('application/json', !1), qn(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Z.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === 'json';
      if (i.isResponse(t) || i.isReadableStream(t)) return t;
      if (t && i.isString(t) && ((r && !this.responseType) || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (a) throw c.name === 'SyntaxError' ? y.from(c, y.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
  env: { FormData: R.classes.FormData, Blob: R.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
};
i.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Z.headers[e] = {};
});
const Hn = i.toObjectSet([
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
  Yn = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (s = a.indexOf(':')),
              (n = a.substring(0, s).trim().toLowerCase()),
              (r = a.substring(s + 1).trim()),
              !(!n || (t[n] && Hn[n])) &&
                (n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Be = Symbol('internals');
function z(e) {
  return e && String(e).trim().toLowerCase();
}
function ne(e) {
  return e === !1 || e == null ? e : i.isArray(e) ? e.map(ne) : String(e);
}
function Vn(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Jn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ge(e, t, n, r, s) {
  if (i.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!i.isString(t))) {
    if (i.isString(r)) return t.indexOf(r) !== -1;
    if (i.isRegExp(r)) return r.test(t);
  }
}
function Xn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function zn(e, t) {
  const n = i.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, a) {
        return this[r].call(this, t, s, o, a);
      },
      configurable: !0,
    });
  });
}
let A = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, d, l) {
      const u = z(d);
      if (!u) throw new Error('header name must be a non-empty string');
      const f = i.findKey(s, u);
      (!f || s[f] === void 0 || l === !0 || (l === void 0 && s[f] !== !1)) && (s[f || d] = ne(c));
    }
    const a = (c, d) => i.forEach(c, (l, u) => o(l, u, d));
    if (i.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if (i.isString(t) && (t = t.trim()) && !Jn(t)) a(Yn(t), n);
    else if (i.isObject(t) && i.isIterable(t)) {
      let c = {},
        d,
        l;
      for (const u of t) {
        if (!i.isArray(u)) throw TypeError('Object iterator must return a key-value pair');
        c[(l = u[0])] = (d = c[l]) ? (i.isArray(d) ? [...d, u[1]] : [d, u[1]]) : u[1];
      }
      a(c, n);
    } else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = z(t)), t)) {
      const r = i.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Vn(s);
        if (i.isFunction(n)) return n.call(this, s, r);
        if (i.isRegExp(n)) return n.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = z(t)), t)) {
      const r = i.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ge(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (((a = z(a)), a)) {
        const c = i.findKey(r, a);
        c && (!n || ge(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return i.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ge(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      i.forEach(this, (s, o) => {
        const a = i.findKey(r, o);
        if (a) {
          (n[a] = ne(s)), delete n[o];
          return;
        }
        const c = t ? Xn(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = ne(s)), (r[c] = !0);
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
      i.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && i.isArray(r) ? r.join(', ') : r);
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
    const r = (this[Be] = this[Be] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(a) {
      const c = z(a);
      r[c] || (zn(s, a), (r[c] = !0));
    }
    return i.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
A.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
i.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
i.freezeMethods(A);
function be(e, t) {
  const n = this || Z,
    r = t || n,
    s = A.from(r.headers);
  let o = r.data;
  return (
    i.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function wt(e) {
  return !!(e && e.__CANCEL__);
}
function X(e, t, n) {
  y.call(this, e ?? 'canceled', y.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
i.inherits(X, y, { __CANCEL__: !0 });
function Et(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new y(
          'Request failed with status code ' + n.status,
          [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function Gn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Kn(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (d) {
      const l = Date.now(),
        u = r[o];
      a || (a = l), (n[s] = d), (r[s] = l);
      let f = o,
        g = 0;
      for (; f !== s; ) (g += n[f++]), (f = f % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), l - a < t)) return;
      const T = u && l - u;
      return T ? Math.round((g * 1e3) / T) : void 0;
    }
  );
}
function Qn(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const a = (l, u = Date.now()) => {
    (n = u), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, l);
  };
  return [
    (...l) => {
      const u = Date.now(),
        f = u - n;
      f >= r
        ? a(l, u)
        : ((s = l),
          o ||
            (o = setTimeout(() => {
              (o = null), a(s);
            }, r - f)));
    },
    () => s && a(s),
  ];
}
const se = (e, t, n = 3) => {
    let r = 0;
    const s = Kn(50, 250);
    return Qn((o) => {
      const a = o.loaded,
        c = o.lengthComputable ? o.total : void 0,
        d = a - r,
        l = s(d),
        u = a <= c;
      r = a;
      const f = {
        loaded: a,
        total: c,
        progress: c ? a / c : void 0,
        bytes: d,
        rate: l || void 0,
        estimated: l && c && u ? (c - a) / l : void 0,
        event: o,
        lengthComputable: c != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(f);
    }, n);
  },
  Ue = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Ie =
    (e) =>
    (...t) =>
      i.asap(() => e(...t)),
  Zn = R.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, R.origin)), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
      ))(new URL(R.origin), R.navigator && /(msie|trident)/i.test(R.navigator.userAgent))
    : () => !0,
  er = R.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const a = [e + '=' + encodeURIComponent(t)];
          i.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
            i.isString(r) && a.push('path=' + r),
            i.isString(s) && a.push('domain=' + s),
            o === !0 && a.push('secure'),
            (document.cookie = a.join('; '));
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
function tr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function nr(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function St(e, t, n) {
  let r = !tr(t);
  return e && (r || n == !1) ? nr(e, t) : t;
}
const qe = (e) => (e instanceof A ? { ...e } : e);
function H(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, f, g) {
    return i.isPlainObject(l) && i.isPlainObject(u)
      ? i.merge.call({ caseless: g }, l, u)
      : i.isPlainObject(u)
      ? i.merge({}, u)
      : i.isArray(u)
      ? u.slice()
      : u;
  }
  function s(l, u, f, g) {
    if (i.isUndefined(u)) {
      if (!i.isUndefined(l)) return r(void 0, l, f, g);
    } else return r(l, u, f, g);
  }
  function o(l, u) {
    if (!i.isUndefined(u)) return r(void 0, u);
  }
  function a(l, u) {
    if (i.isUndefined(u)) {
      if (!i.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, f) {
    if (f in t) return r(l, u);
    if (f in e) return r(void 0, l);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: c,
    headers: (l, u, f) => s(qe(l), qe(u), f, !0),
  };
  return (
    i.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const f = d[u] || s,
        g = f(e[u], t[u], u);
      (i.isUndefined(g) && f !== c) || (n[u] = g);
    }),
    n
  );
}
const xt = (e) => {
    const t = H({}, e);
    let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: a, auth: c } = t;
    (t.headers = a = A.from(a)),
      (t.url = gt(St(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer)),
      c &&
        a.set(
          'Authorization',
          'Basic ' + btoa((c.username || '') + ':' + (c.password ? unescape(encodeURIComponent(c.password)) : ''))
        );
    let d;
    if (i.isFormData(n)) {
      if (R.hasStandardBrowserEnv || R.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
      else if ((d = a.getContentType()) !== !1) {
        const [l, ...u] = d
          ? d
              .split(';')
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        a.setContentType([l || 'multipart/form-data', ...u].join('; '));
      }
    }
    if (R.hasStandardBrowserEnv && (r && i.isFunction(r) && (r = r(t)), r || (r !== !1 && Zn(t.url)))) {
      const l = s && o && er.read(o);
      l && a.set(s, l);
    }
    return t;
  },
  rr = typeof XMLHttpRequest < 'u',
  sr =
    rr &&
    function (e) {
      return new Promise(function (n, r) {
        const s = xt(e);
        let o = s.data;
        const a = A.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: d, onDownloadProgress: l } = s,
          u,
          f,
          g,
          T,
          p;
        function b() {
          T && T(),
            p && p(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener('abort', u);
        }
        let h = new XMLHttpRequest();
        h.open(s.method.toUpperCase(), s.url, !0), (h.timeout = s.timeout);
        function E() {
          if (!h) return;
          const S = A.from('getAllResponseHeaders' in h && h.getAllResponseHeaders()),
            M = {
              data: !c || c === 'text' || c === 'json' ? h.responseText : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: S,
              config: e,
              request: h,
            };
          Et(
            function (B) {
              n(B), b();
            },
            function (B) {
              r(B), b();
            },
            M
          ),
            (h = null);
        }
        'onloadend' in h
          ? (h.onloadend = E)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 && !(h.responseURL && h.responseURL.indexOf('file:') === 0)) ||
                setTimeout(E);
            }),
          (h.onabort = function () {
            h && (r(new y('Request aborted', y.ECONNABORTED, e, h)), (h = null));
          }),
          (h.onerror = function () {
            r(new y('Network Error', y.ERR_NETWORK, e, h)), (h = null);
          }),
          (h.ontimeout = function () {
            let C = s.timeout ? 'timeout of ' + s.timeout + 'ms exceeded' : 'timeout exceeded';
            const M = s.transitional || bt;
            s.timeoutErrorMessage && (C = s.timeoutErrorMessage),
              r(new y(C, M.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED, e, h)),
              (h = null);
          }),
          o === void 0 && a.setContentType(null),
          'setRequestHeader' in h &&
            i.forEach(a.toJSON(), function (C, M) {
              h.setRequestHeader(M, C);
            }),
          i.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials),
          c && c !== 'json' && (h.responseType = s.responseType),
          l && (([g, p] = se(l, !0)), h.addEventListener('progress', g)),
          d &&
            h.upload &&
            (([f, T] = se(d)), h.upload.addEventListener('progress', f), h.upload.addEventListener('loadend', T)),
          (s.cancelToken || s.signal) &&
            ((u = (S) => {
              h && (r(!S || S.type ? new X(null, e, h) : S), h.abort(), (h = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal && (s.signal.aborted ? u() : s.signal.addEventListener('abort', u)));
        const x = Gn(s.url);
        if (x && R.protocols.indexOf(x) === -1) {
          r(new y('Unsupported protocol ' + x + ':', y.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(o || null);
      });
    },
  or = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (l) {
        if (!s) {
          (s = !0), c();
          const u = l instanceof Error ? l : this.reason;
          r.abort(u instanceof y ? u : new X(u instanceof Error ? u.message : u));
        }
      };
      let a =
        t &&
        setTimeout(() => {
          (a = null), o(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
        }, t);
      const c = () => {
        e &&
          (a && clearTimeout(a),
          (a = null),
          e.forEach((l) => {
            l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener('abort', o);
          }),
          (e = null));
      };
      e.forEach((l) => l.addEventListener('abort', o));
      const { signal: d } = r;
      return (d.unsubscribe = () => i.asap(c)), d;
    }
  },
  ar = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  ir = async function* (e, t) {
    for await (const n of cr(e)) yield* ar(n, t);
  },
  cr = async function* (e) {
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
  He = (e, t, n, r) => {
    const s = ir(e, t);
    let o = 0,
      a,
      c = (d) => {
        a || ((a = !0), r && r(d));
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
            let f = u.byteLength;
            if (n) {
              let g = (o += f);
              n(g);
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
  fe = typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
  Ot = fe && typeof ReadableStream == 'function',
  ur =
    fe &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Tt = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  lr =
    Ot &&
    Tt(() => {
      let e = !1;
      const t = new Request(R.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  Ye = 64 * 1024,
  xe = Ot && Tt(() => i.isReadableStream(new Response('').body)),
  oe = { stream: xe && ((e) => e.body) };
fe &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !oe[t] &&
        (oe[t] = i.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new y(`Response type '${t}' is not supported`, y.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const dr = async (e) => {
    if (e == null) return 0;
    if (i.isBlob(e)) return e.size;
    if (i.isSpecCompliantForm(e))
      return (await new Request(R.origin, { method: 'POST', body: e }).arrayBuffer()).byteLength;
    if (i.isArrayBufferView(e) || i.isArrayBuffer(e)) return e.byteLength;
    if ((i.isURLSearchParams(e) && (e = e + ''), i.isString(e))) return (await ur(e)).byteLength;
  },
  fr = async (e, t) => {
    const n = i.toFiniteNumber(e.getContentLength());
    return n ?? dr(t);
  },
  mr =
    fe &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: a,
        onDownloadProgress: c,
        onUploadProgress: d,
        responseType: l,
        headers: u,
        withCredentials: f = 'same-origin',
        fetchOptions: g,
      } = xt(e);
      l = l ? (l + '').toLowerCase() : 'text';
      let T = or([s, o && o.toAbortSignal()], a),
        p;
      const b =
        T &&
        T.unsubscribe &&
        (() => {
          T.unsubscribe();
        });
      let h;
      try {
        if (d && lr && n !== 'get' && n !== 'head' && (h = await fr(u, r)) !== 0) {
          let M = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            v;
          if ((i.isFormData(r) && (v = M.headers.get('content-type')) && u.setContentType(v), M.body)) {
            const [B, ee] = Ue(h, se(Ie(d)));
            r = He(M.body, Ye, B, ee);
          }
        }
        i.isString(f) || (f = f ? 'include' : 'omit');
        const E = 'credentials' in Request.prototype;
        p = new Request(t, {
          ...g,
          signal: T,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: E ? f : void 0,
        });
        let x = await fetch(p, g);
        const S = xe && (l === 'stream' || l === 'response');
        if (xe && (c || (S && b))) {
          const M = {};
          ['status', 'statusText', 'headers'].forEach((Ae) => {
            M[Ae] = x[Ae];
          });
          const v = i.toFiniteNumber(x.headers.get('content-length')),
            [B, ee] = (c && Ue(v, se(Ie(c), !0))) || [];
          x = new Response(
            He(x.body, Ye, B, () => {
              ee && ee(), b && b();
            }),
            M
          );
        }
        l = l || 'text';
        let C = await oe[i.findKey(oe, l) || 'text'](x, e);
        return (
          !S && b && b(),
          await new Promise((M, v) => {
            Et(M, v, {
              data: C,
              headers: A.from(x.headers),
              status: x.status,
              statusText: x.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (E) {
        throw (
          (b && b(),
          E && E.name === 'TypeError' && /Load failed|fetch/i.test(E.message)
            ? Object.assign(new y('Network Error', y.ERR_NETWORK, e, p), { cause: E.cause || E })
            : y.from(E, E && E.code, e, p))
        );
      }
    }),
  Oe = { http: Nn, xhr: sr, fetch: mr };
i.forEach(Oe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Ve = (e) => `- ${e}`,
  hr = (e) => i.isFunction(e) || e === null || e === !1,
  Pt = {
    getAdapter: (e) => {
      e = i.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let a;
        if (((r = n), !hr(n) && ((r = Oe[(a = String(n)).toLowerCase()]), r === void 0)))
          throw new y(`Unknown adapter '${a}'`);
        if (r) break;
        s[a || '#' + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([c, d]) =>
            `adapter ${c} ` + (d === !1 ? 'is not supported by the environment' : 'is not available in the build')
        );
        let a = t
          ? o.length > 1
            ? `since :
` +
              o.map(Ve).join(`
`)
            : ' ' + Ve(o[0])
          : 'as no adapter specified';
        throw new y('There is no suitable adapter to dispatch the request ' + a, 'ERR_NOT_SUPPORT');
      }
      return r;
    },
    adapters: Oe,
  };
function ye(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new X(null, e);
}
function Je(e) {
  return (
    ye(e),
    (e.headers = A.from(e.headers)),
    (e.data = be.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Pt.getAdapter(e.adapter || Z.adapter)(e).then(
      function (r) {
        return ye(e), (r.data = be.call(e, e.transformResponse, r)), (r.headers = A.from(r.headers)), r;
      },
      function (r) {
        return (
          wt(r) ||
            (ye(e),
            r &&
              r.response &&
              ((r.response.data = be.call(e, e.transformResponse, r.response)),
              (r.response.headers = A.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Mt = '1.10.0',
  me = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  me[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const Xe = {};
me.transitional = function (t, n, r) {
  function s(o, a) {
    return '[Axios v' + Mt + "] Transitional option '" + o + "'" + a + (r ? '. ' + r : '');
  }
  return (o, a, c) => {
    if (t === !1) throw new y(s(a, ' has been removed' + (n ? ' in ' + n : '')), y.ERR_DEPRECATED);
    return (
      n &&
        !Xe[a] &&
        ((Xe[a] = !0),
        console.warn(s(a, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
      t ? t(o, a, c) : !0
    );
  };
};
me.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function pr(e, t, n) {
  if (typeof e != 'object') throw new y('options must be an object', y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      a = t[o];
    if (a) {
      const c = e[o],
        d = c === void 0 || a(c, o, e);
      if (d !== !0) throw new y('option ' + o + ' must be ' + d, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new y('Unknown option ' + o, y.ERR_BAD_OPTION);
  }
}
const re = { assertOptions: pr, validators: me },
  F = re.validators;
let q = class {
  constructor(t) {
    (this.defaults = t || {}), (this.interceptors = { request: new We(), response: new We() });
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
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = H(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      re.assertOptions(
        r,
        {
          silentJSONParsing: F.transitional(F.boolean),
          forcedJSONParsing: F.transitional(F.boolean),
          clarifyTimeoutError: F.transitional(F.boolean),
        },
        !1
      ),
      s != null &&
        (i.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : re.assertOptions(s, { encode: F.function, serialize: F.function }, !0)),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      re.assertOptions(n, { baseUrl: F.spelling('baseURL'), withXsrfToken: F.spelling('withXSRFToken') }, !0),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let a = o && i.merge(o.common, o[n.method]);
    o &&
      i.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (p) => {
        delete o[p];
      }),
      (n.headers = A.concat(a, o));
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
      f = 0,
      g;
    if (!d) {
      const p = [Je.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, l), g = p.length, u = Promise.resolve(n); f < g; )
        u = u.then(p[f++], p[f++]);
      return u;
    }
    g = c.length;
    let T = n;
    for (f = 0; f < g; ) {
      const p = c[f++],
        b = c[f++];
      try {
        T = p(T);
      } catch (h) {
        b.call(this, h);
        break;
      }
    }
    try {
      u = Je.call(this, T);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, g = l.length; f < g; ) u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = H(this.defaults, t);
    const n = St(t.baseURL, t.url, t.allowAbsoluteUrls);
    return gt(n, t.params, t.paramsSerializer);
  }
};
i.forEach(['delete', 'get', 'head', 'options'], function (t) {
  q.prototype[t] = function (n, r) {
    return this.request(H(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
i.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, a, c) {
      return this.request(
        H(c || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: o, data: a })
      );
    };
  }
  (q.prototype[t] = n()), (q.prototype[t + 'Form'] = n(!0));
});
let gr = class Rt {
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
        const a = new Promise((c) => {
          r.subscribe(c), (o = c);
        }).then(s);
        return (
          (a.cancel = function () {
            r.unsubscribe(o);
          }),
          a
        );
      }),
      t(function (o, a, c) {
        r.reason || ((r.reason = new X(o, a, c)), n(r.reason));
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
      token: new Rt(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function br(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function yr(e) {
  return i.isObject(e) && e.isAxiosError === !0;
}
const Te = {
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
Object.entries(Te).forEach(([e, t]) => {
  Te[t] = e;
});
function Nt(e) {
  const t = new q(e),
    n = st(q.prototype.request, t);
  return (
    i.extend(n, q.prototype, t, { allOwnKeys: !0 }),
    i.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Nt(H(e, s));
    }),
    n
  );
}
const w = Nt(Z);
w.Axios = q;
w.CanceledError = X;
w.CancelToken = gr;
w.isCancel = wt;
w.VERSION = Mt;
w.toFormData = de;
w.AxiosError = y;
w.Cancel = w.CanceledError;
w.all = function (t) {
  return Promise.all(t);
};
w.spread = br;
w.isAxiosError = yr;
w.mergeConfig = H;
w.AxiosHeaders = A;
w.formToJSON = (e) => yt(i.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = Pt.getAdapter;
w.HttpStatusCode = Te;
w.default = w;
const {
    Axios: $o,
    AxiosError: Wo,
    CanceledError: Bo,
    isCancel: Uo,
    CancelToken: Io,
    VERSION: qo,
    all: Ho,
    Cancel: Yo,
    isAxiosError: Vo,
    spread: Jo,
    toFormData: Xo,
    AxiosHeaders: zo,
    HttpStatusCode: Go,
    formToJSON: Ko,
    getAdapter: Qo,
    mergeConfig: Zo,
  } = w,
  k = 'https://notifications-test.snb.ca',
  P = {
    authentication: {
      OTP: `${k}/otp`,
      RESEND_OTP: `${k}/otp/resend`,
      EMAIL_OTP: `${k}/otp/email`,
      SMS_NUMBER_OTP: `${k}/otp/sms-number`,
    },
    notifications: { REMINDER_DETAILS: `${k}/reminders`, STOP_PAPER_REMINDERS: `${k}/reminders/stop-paper` },
    vehicles: { VEHICLES: `${k}/vehicles` },
    accountSettings: { DETAILS: `${k}/accounts`, EMAIL: `${k}/accounts/email`, LANGUAGE: `${k}/accounts/language` },
    feedback: { SUBMIT_FEEDBACK: `${k}/feedbacks` },
  },
  wr = (e) => w.post(`${P.authentication.OTP}`, e),
  Er = (e) => w.post(`${P.authentication.RESEND_OTP}`, e),
  Sr = (e) => w.put(`${P.authentication.OTP}`, e),
  xr = (e) => w.post(`${P.authentication.EMAIL_OTP}`, e),
  Or = (e) => w.put(`${P.authentication.EMAIL_OTP}`, e),
  Tr = (e) => w.post(`${P.authentication.SMS_NUMBER_OTP}`, e),
  Pr = (e) => w.put(`${P.authentication.SMS_NUMBER_OTP}`, e),
  Mr = (e) => w.get(`${P.notifications.REMINDER_DETAILS}`, e),
  Rr = (e) => w.post(`${P.notifications.REMINDER_DETAILS}`, e),
  Nr = (e) => w.post(`${P.notifications.STOP_PAPER_REMINDERS}`, e),
  Ar = (e) => w.get(`${P.vehicles.VEHICLES}`, e),
  Cr = (e) => w.post(`${P.vehicles.VEHICLES}`, e),
  vr = (e) => w.put(`${P.vehicles.VEHICLES}`, e),
  kr = (e, t) => w.get(`${P.vehicles.VEHICLES}/${e}`, t),
  Dr = (e, t) => w.delete(`${P.vehicles.VEHICLES}/${e}`, t),
  jr = (e) => w.get(`${P.accountSettings.DETAILS}`, e),
  Fr = (e) => w.put(`${P.accountSettings.EMAIL}`, e),
  Lr = (e) => w.put(`${P.accountSettings.LANGUAGE}`, e),
  _r = (e) => w.post(`${P.feedback.SUBMIT_FEEDBACK}`, e),
  ea = {
    createOTP: wr,
    verifyOTP: Sr,
    resendOTP: Er,
    createChangeEmailOTP: xr,
    verifyChangeEmailOTP: Or,
    createChangeSMSNumberOTP: Tr,
    verifyChangeSMSNumberOTP: Pr,
    getReminderDetails: Mr,
    updateReminderDetails: Rr,
    stopPaperReminders: Nr,
    getAllVehicles: Ar,
    addAVehicle: Cr,
    updateAVehicle: vr,
    getAVehicle: kr,
    removeAVehicle: Dr,
    getAccountDetails: jr,
    updateAccountEmail: Fr,
    updateAccountPreferredLanguage: Lr,
    submitFeedback: _r,
  },
  ta = () => {
    const e = nt(),
      [t, n] = Pe(['session', 'rememberMe']);
    return {
      setSessionCookie: (c, d) => {
        n('session', c, { maxAge: d || t.rememberMe ? De : ke }), n('rememberMe', !!d);
      },
      refreshSessionCookie: (c) => {
        n('session', c, { maxAge: t.rememberMe ? De : ke });
      },
      getSession: () => {
        const c = String(t.session);
        return c && c !== 'undefined' && c?.length > 0 ? c : (e('/authentication'), '');
      },
      getRememberMe: () => !!t.rememberMe,
    };
  };
function j(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == 'object' && t === '[object Date]')
    ? new e.constructor(+e)
    : typeof e == 'number' || t === '[object Number]' || typeof e == 'string' || t === '[object String]'
    ? new Date(e)
    : new Date(NaN);
}
function Y(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const At = 6048e5,
  $r = 864e5;
let Wr = {};
function he() {
  return Wr;
}
function K(e, t) {
  const n = he(),
    r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
    s = j(e),
    o = s.getDay(),
    a = (o < r ? 7 : 0) + o - r;
  return s.setDate(s.getDate() - a), s.setHours(0, 0, 0, 0), s;
}
function ae(e) {
  return K(e, { weekStartsOn: 1 });
}
function Ct(e) {
  const t = j(e),
    n = t.getFullYear(),
    r = Y(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const s = ae(r),
    o = Y(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const a = ae(o);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1;
}
function ze(e) {
  const t = j(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Ge(e) {
  const t = j(e),
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
function Br(e, t) {
  const n = ze(e),
    r = ze(t),
    s = +n - Ge(n),
    o = +r - Ge(r);
  return Math.round((s - o) / $r);
}
function Ur(e) {
  const t = Ct(e),
    n = Y(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), ae(n);
}
function Ir(e) {
  return e instanceof Date || (typeof e == 'object' && Object.prototype.toString.call(e) === '[object Date]');
}
function qr(e) {
  if (!Ir(e) && typeof e != 'number') return !1;
  const t = j(e);
  return !isNaN(Number(t));
}
function Hr(e) {
  const t = j(e),
    n = Y(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Yr = {
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
  Vr = (e, t, n) => {
    let r;
    const s = Yr[e];
    return (
      typeof s == 'string' ? (r = s) : t === 1 ? (r = s.one) : (r = s.other.replace('{{count}}', t.toString())),
      n?.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
    );
  };
function $(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Jr = { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
  Xr = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  zr = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Gr = {
    date: $({ formats: Jr, defaultWidth: 'full' }),
    time: $({ formats: Xr, defaultWidth: 'full' }),
    dateTime: $({ formats: zr, defaultWidth: 'full' }),
  },
  Kr = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  vt = (e, t, n, r) => Kr[e];
function L(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : 'standalone';
    let s;
    if (r === 'formatting' && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth,
        c = n?.width ? String(n.width) : a;
      s = e.formattingValues[c] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth,
        c = n?.width ? String(n.width) : e.defaultWidth;
      s = e.values[c] || e.values[a];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return s[o];
  };
}
const Qr = { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
  Zr = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  es = {
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
  ts = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  ns = {
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
  rs = {
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
  ss = (e, t) => {
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
  kt = {
    ordinalNumber: ss,
    era: L({ values: Qr, defaultWidth: 'wide' }),
    quarter: L({ values: Zr, defaultWidth: 'wide', argumentCallback: (e) => e - 1 }),
    month: L({ values: es, defaultWidth: 'wide' }),
    day: L({ values: ts, defaultWidth: 'wide' }),
    dayPeriod: L({ values: ns, defaultWidth: 'wide', formattingValues: rs, defaultFormattingWidth: 'wide' }),
  };
function _(e) {
  return (t, n = {}) => {
    const r = n.width,
      s = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      o = t.match(s);
    if (!o) return null;
    const a = o[0],
      c = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      d = Array.isArray(c) ? as(c, (f) => f.test(a)) : os(c, (f) => f.test(a));
    let l;
    (l = e.valueCallback ? e.valueCallback(d) : d), (l = n.valueCallback ? n.valueCallback(l) : l);
    const u = t.slice(a.length);
    return { value: l, rest: u };
  };
}
function os(e, t) {
  for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function as(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Dt(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const s = r[0],
      o = t.match(e.parsePattern);
    if (!o) return null;
    let a = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const c = t.slice(s.length);
    return { value: a, rest: c };
  };
}
const is = /^(\d+)(th|st|nd|rd)?/i,
  cs = /\d+/i,
  us = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  ls = { any: [/^b/i, /^(a|c)/i] },
  ds = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  fs = { any: [/1/i, /2/i, /3/i, /4/i] },
  ms = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  hs = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  ps = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  gs = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  bs = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  ys = {
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
  jt = {
    ordinalNumber: Dt({ matchPattern: is, parsePattern: cs, valueCallback: (e) => parseInt(e, 10) }),
    era: _({ matchPatterns: us, defaultMatchWidth: 'wide', parsePatterns: ls, defaultParseWidth: 'any' }),
    quarter: _({
      matchPatterns: ds,
      defaultMatchWidth: 'wide',
      parsePatterns: fs,
      defaultParseWidth: 'any',
      valueCallback: (e) => e + 1,
    }),
    month: _({ matchPatterns: ms, defaultMatchWidth: 'wide', parsePatterns: hs, defaultParseWidth: 'any' }),
    day: _({ matchPatterns: ps, defaultMatchWidth: 'wide', parsePatterns: gs, defaultParseWidth: 'any' }),
    dayPeriod: _({ matchPatterns: bs, defaultMatchWidth: 'any', parsePatterns: ys, defaultParseWidth: 'any' }),
  },
  ws = {
    code: 'en-US',
    formatDistance: Vr,
    formatLong: Gr,
    formatRelative: vt,
    localize: kt,
    match: jt,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Es(e) {
  const t = j(e);
  return Br(t, Hr(t)) + 1;
}
function Ss(e) {
  const t = j(e),
    n = +ae(t) - +Ur(t);
  return Math.round(n / At) + 1;
}
function Ft(e, t) {
  const n = j(e),
    r = n.getFullYear(),
    s = he(),
    o =
      t?.firstWeekContainsDate ??
      t?.locale?.options?.firstWeekContainsDate ??
      s.firstWeekContainsDate ??
      s.locale?.options?.firstWeekContainsDate ??
      1,
    a = Y(e, 0);
  a.setFullYear(r + 1, 0, o), a.setHours(0, 0, 0, 0);
  const c = K(a, t),
    d = Y(e, 0);
  d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
  const l = K(d, t);
  return n.getTime() >= c.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function xs(e, t) {
  const n = he(),
    r =
      t?.firstWeekContainsDate ??
      t?.locale?.options?.firstWeekContainsDate ??
      n.firstWeekContainsDate ??
      n.locale?.options?.firstWeekContainsDate ??
      1,
    s = Ft(e, t),
    o = Y(e, 0);
  return o.setFullYear(s, 0, r), o.setHours(0, 0, 0, 0), K(o, t);
}
function Os(e, t) {
  const n = j(e),
    r = +K(n, t) - +xs(n, t);
  return Math.round(r / At) + 1;
}
function O(e, t) {
  const n = e < 0 ? '-' : '',
    r = Math.abs(e).toString().padStart(t, '0');
  return n + r;
}
const W = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return O(t === 'yy' ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === 'M' ? String(n + 1) : O(n + 1, 2);
    },
    d(e, t) {
      return O(e.getDate(), t.length);
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
      return O(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return O(e.getHours(), t.length);
    },
    m(e, t) {
      return O(e.getMinutes(), t.length);
    },
    s(e, t) {
      return O(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        s = Math.trunc(r * Math.pow(10, n - 3));
      return O(s, t.length);
    },
  },
  V = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  Ke = {
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
          s = r > 0 ? r : 1 - r;
        return n.ordinalNumber(s, { unit: 'year' });
      }
      return W.y(e, t);
    },
    Y: function (e, t, n, r) {
      const s = Ft(e, r),
        o = s > 0 ? s : 1 - s;
      if (t === 'YY') {
        const a = o % 100;
        return O(a, 2);
      }
      return t === 'Yo' ? n.ordinalNumber(o, { unit: 'year' }) : O(o, t.length);
    },
    R: function (e, t) {
      const n = Ct(e);
      return O(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return O(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(r);
        case 'QQ':
          return O(r, 2);
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
          return O(r, 2);
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
          return W.M(e, t);
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
          return O(r + 1, 2);
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
      const s = Os(e, r);
      return t === 'wo' ? n.ordinalNumber(s, { unit: 'week' }) : O(s, t.length);
    },
    I: function (e, t, n) {
      const r = Ss(e);
      return t === 'Io' ? n.ordinalNumber(r, { unit: 'week' }) : O(r, t.length);
    },
    d: function (e, t, n) {
      return t === 'do' ? n.ordinalNumber(e.getDate(), { unit: 'date' }) : W.d(e, t);
    },
    D: function (e, t, n) {
      const r = Es(e);
      return t === 'Do' ? n.ordinalNumber(r, { unit: 'dayOfYear' }) : O(r, t.length);
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
      const s = e.getDay(),
        o = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'e':
          return String(o);
        case 'ee':
          return O(o, 2);
        case 'eo':
          return n.ordinalNumber(o, { unit: 'day' });
        case 'eee':
          return n.day(s, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return n.day(s, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return n.day(s, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return n.day(s, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (e, t, n, r) {
      const s = e.getDay(),
        o = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'c':
          return String(o);
        case 'cc':
          return O(o, t.length);
        case 'co':
          return n.ordinalNumber(o, { unit: 'day' });
        case 'ccc':
          return n.day(s, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return n.day(s, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return n.day(s, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return n.day(s, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        s = r === 0 ? 7 : r;
      switch (t) {
        case 'i':
          return String(s);
        case 'ii':
          return O(s, t.length);
        case 'io':
          return n.ordinalNumber(s, { unit: 'day' });
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
      const s = e.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return n.dayPeriod(s, { width: 'abbreviated', context: 'formatting' });
        case 'aaa':
          return n.dayPeriod(s, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'aaaaa':
          return n.dayPeriod(s, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return n.dayPeriod(s, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let s;
      switch ((r === 12 ? (s = V.noon) : r === 0 ? (s = V.midnight) : (s = r / 12 >= 1 ? 'pm' : 'am'), t)) {
        case 'b':
        case 'bb':
          return n.dayPeriod(s, { width: 'abbreviated', context: 'formatting' });
        case 'bbb':
          return n.dayPeriod(s, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'bbbbb':
          return n.dayPeriod(s, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return n.dayPeriod(s, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let s;
      switch ((r >= 17 ? (s = V.evening) : r >= 12 ? (s = V.afternoon) : r >= 4 ? (s = V.morning) : (s = V.night), t)) {
        case 'B':
        case 'BB':
        case 'BBB':
          return n.dayPeriod(s, { width: 'abbreviated', context: 'formatting' });
        case 'BBBBB':
          return n.dayPeriod(s, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return n.dayPeriod(s, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (e, t, n) {
      if (t === 'ho') {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: 'hour' });
      }
      return W.h(e, t);
    },
    H: function (e, t, n) {
      return t === 'Ho' ? n.ordinalNumber(e.getHours(), { unit: 'hour' }) : W.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === 'Ko' ? n.ordinalNumber(r, { unit: 'hour' }) : O(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return r === 0 && (r = 24), t === 'ko' ? n.ordinalNumber(r, { unit: 'hour' }) : O(r, t.length);
    },
    m: function (e, t, n) {
      return t === 'mo' ? n.ordinalNumber(e.getMinutes(), { unit: 'minute' }) : W.m(e, t);
    },
    s: function (e, t, n) {
      return t === 'so' ? n.ordinalNumber(e.getSeconds(), { unit: 'second' }) : W.s(e, t);
    },
    S: function (e, t) {
      return W.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return 'Z';
      switch (t) {
        case 'X':
          return Ze(r);
        case 'XXXX':
        case 'XX':
          return U(r);
        case 'XXXXX':
        case 'XXX':
        default:
          return U(r, ':');
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'x':
          return Ze(r);
        case 'xxxx':
        case 'xx':
          return U(r);
        case 'xxxxx':
        case 'xxx':
        default:
          return U(r, ':');
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Qe(r, ':');
        case 'OOOO':
        default:
          return 'GMT' + U(r, ':');
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Qe(r, ':');
        case 'zzzz':
        default:
          return 'GMT' + U(r, ':');
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return O(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return O(r, t.length);
    },
  };
function Qe(e, t = '') {
  const n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    s = Math.trunc(r / 60),
    o = r % 60;
  return o === 0 ? n + String(s) : n + String(s) + t + O(o, 2);
}
function Ze(e, t) {
  return e % 60 === 0 ? (e > 0 ? '-' : '+') + O(Math.abs(e) / 60, 2) : U(e, t);
}
function U(e, t = '') {
  const n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    s = O(Math.trunc(r / 60), 2),
    o = O(r % 60, 2);
  return n + s + t + o;
}
const et = (e, t) => {
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
  Lt = (e, t) => {
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
  Ts = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      s = n[2];
    if (!s) return et(e, t);
    let o;
    switch (r) {
      case 'P':
        o = t.dateTime({ width: 'short' });
        break;
      case 'PP':
        o = t.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        o = t.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        o = t.dateTime({ width: 'full' });
        break;
    }
    return o.replace('{{date}}', et(r, t)).replace('{{time}}', Lt(s, t));
  },
  Ps = { p: Lt, P: Ts },
  Ms = /^D+$/,
  Rs = /^Y+$/,
  Ns = ['D', 'DD', 'YY', 'YYYY'];
function As(e) {
  return Ms.test(e);
}
function Cs(e) {
  return Rs.test(e);
}
function vs(e, t, n) {
  const r = ks(e, t, n);
  if ((console.warn(r), Ns.includes(e))) throw new RangeError(r);
}
function ks(e, t, n) {
  const r = e[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ds = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  js = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Fs = /^'([^]*?)'?$/,
  Ls = /''/g,
  _s = /[a-zA-Z]/;
function $s(e, t, n) {
  const r = he(),
    s = n?.locale ?? r.locale ?? ws,
    o =
      n?.firstWeekContainsDate ??
      n?.locale?.options?.firstWeekContainsDate ??
      r.firstWeekContainsDate ??
      r.locale?.options?.firstWeekContainsDate ??
      1,
    a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
    c = j(e);
  if (!qr(c)) throw new RangeError('Invalid time value');
  let d = t
    .match(js)
    .map((u) => {
      const f = u[0];
      if (f === 'p' || f === 'P') {
        const g = Ps[f];
        return g(u, s.formatLong);
      }
      return u;
    })
    .join('')
    .match(Ds)
    .map((u) => {
      if (u === "''") return { isToken: !1, value: "'" };
      const f = u[0];
      if (f === "'") return { isToken: !1, value: Ws(u) };
      if (Ke[f]) return { isToken: !0, value: u };
      if (f.match(_s)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + f + '`');
      return { isToken: !1, value: u };
    });
  s.localize.preprocessor && (d = s.localize.preprocessor(c, d));
  const l = { firstWeekContainsDate: o, weekStartsOn: a, locale: s };
  return d
    .map((u) => {
      if (!u.isToken) return u.value;
      const f = u.value;
      ((!n?.useAdditionalWeekYearTokens && Cs(f)) || (!n?.useAdditionalDayOfYearTokens && As(f))) &&
        vs(f, t, String(e));
      const g = Ke[f[0]];
      return g(c, f, s.localize, l);
    })
    .join('');
}
function Ws(e) {
  const t = e.match(Fs);
  return t ? t[1].replace(Ls, "'") : e;
}
const Bs = {
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
  Us = (e, t, n) => {
    let r;
    const s = Bs[e];
    return (
      typeof s == 'string' ? (r = s) : t === 1 ? (r = s.one) : (r = s.other.replace('{{count}}', t.toString())),
      n?.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
    );
  },
  Is = { full: 'EEEE, MMMM do, yyyy', long: 'MMMM do, yyyy', medium: 'MMM d, yyyy', short: 'yyyy-MM-dd' },
  qs = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  Hs = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Ys = {
    date: $({ formats: Is, defaultWidth: 'full' }),
    time: $({ formats: qs, defaultWidth: 'full' }),
    dateTime: $({ formats: Hs, defaultWidth: 'full' }),
  },
  Vs = {
    code: 'en-CA',
    formatDistance: Us,
    formatLong: Ys,
    formatRelative: vt,
    localize: kt,
    match: jt,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  Js = {
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
  Xs = (e, t, n) => {
    let r;
    const s = Js[e];
    return (
      typeof s == 'string' ? (r = s) : t === 1 ? (r = s.one) : (r = s.other.replace('{{count}}', String(t))),
      n?.addSuffix ? (n.comparison && n.comparison > 0 ? 'dans ' + r : 'il y a ' + r) : r
    );
  },
  zs = {
    lastWeek: "eeee 'dernier à' p",
    yesterday: "'hier à' p",
    today: "'aujourd’hui à' p",
    tomorrow: "'demain à' p'",
    nextWeek: "eeee 'prochain à' p",
    other: 'P',
  },
  Gs = (e, t, n, r) => zs[e],
  Ks = {
    narrow: ['av. J.-C', 'ap. J.-C'],
    abbreviated: ['av. J.-C', 'ap. J.-C'],
    wide: ['avant Jésus-Christ', 'après Jésus-Christ'],
  },
  Qs = {
    narrow: ['T1', 'T2', 'T3', 'T4'],
    abbreviated: ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'],
    wide: ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre'],
  },
  Zs = {
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
  eo = {
    narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    short: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
    abbreviated: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
    wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  },
  to = {
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
  no = (e, t) => {
    const n = Number(e),
      r = t?.unit;
    if (n === 0) return '0';
    const s = ['year', 'week', 'hour', 'minute', 'second'];
    let o;
    return n === 1 ? (o = r && s.includes(r) ? 'ère' : 'er') : (o = 'ème'), n + o;
  },
  ro = ['MMM', 'MMMM'],
  so = {
    preprocessor: (e, t) =>
      e.getDate() === 1 || !t.some((r) => r.isToken && ro.includes(r.value))
        ? t
        : t.map((r) => (r.isToken && r.value === 'do' ? { isToken: !0, value: 'd' } : r)),
    ordinalNumber: no,
    era: L({ values: Ks, defaultWidth: 'wide' }),
    quarter: L({ values: Qs, defaultWidth: 'wide', argumentCallback: (e) => e - 1 }),
    month: L({ values: Zs, defaultWidth: 'wide' }),
    day: L({ values: eo, defaultWidth: 'wide' }),
    dayPeriod: L({ values: to, defaultWidth: 'wide' }),
  },
  oo = /^(\d+)(ième|ère|ème|er|e)?/i,
  ao = /\d+/i,
  io = {
    narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
    abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
    wide: /^(avant Jésus-Christ|après Jésus-Christ)/i,
  },
  co = { any: [/^av/i, /^ap/i] },
  uo = { narrow: /^T?[1234]/i, abbreviated: /^[1234](er|ème|e)? trim\.?/i, wide: /^[1234](er|ème|e)? trimestre/i },
  lo = { any: [/1/i, /2/i, /3/i, /4/i] },
  fo = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
    wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
  },
  mo = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  ho = {
    narrow: /^[lmjvsd]/i,
    short: /^(di|lu|ma|me|je|ve|sa)/i,
    abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
    wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i,
  },
  po = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
    any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i],
  },
  go = {
    narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
    any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i,
  },
  bo = {
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
  yo = {
    ordinalNumber: Dt({ matchPattern: oo, parsePattern: ao, valueCallback: (e) => parseInt(e) }),
    era: _({ matchPatterns: io, defaultMatchWidth: 'wide', parsePatterns: co, defaultParseWidth: 'any' }),
    quarter: _({
      matchPatterns: uo,
      defaultMatchWidth: 'wide',
      parsePatterns: lo,
      defaultParseWidth: 'any',
      valueCallback: (e) => e + 1,
    }),
    month: _({ matchPatterns: fo, defaultMatchWidth: 'wide', parsePatterns: mo, defaultParseWidth: 'any' }),
    day: _({ matchPatterns: ho, defaultMatchWidth: 'wide', parsePatterns: po, defaultParseWidth: 'any' }),
    dayPeriod: _({ matchPatterns: go, defaultMatchWidth: 'any', parsePatterns: bo, defaultParseWidth: 'any' }),
  },
  wo = { full: 'EEEE d MMMM y', long: 'd MMMM y', medium: 'd MMM y', short: 'yy-MM-dd' },
  Eo = { full: 'HH:mm:ss zzzz', long: 'HH:mm:ss z', medium: 'HH:mm:ss', short: 'HH:mm' },
  So = {
    full: "{{date}} 'à' {{time}}",
    long: "{{date}} 'à' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  xo = {
    date: $({ formats: wo, defaultWidth: 'full' }),
    time: $({ formats: Eo, defaultWidth: 'full' }),
    dateTime: $({ formats: So, defaultWidth: 'full' }),
  },
  Oo = {
    code: 'fr-CA',
    formatDistance: Xs,
    formatLong: xo,
    formatRelative: Gs,
    localize: so,
    match: yo,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  na = (e) =>
    e
      ?.split(' ')
      .map((t, n, r) => `${t}${n === r.length - 1 ? '' : '-'}`)
      .join(''),
  ra = (e) => ` ${e.slice(0, 6).padEnd(17, '*')}`,
  sa = (e) => {
    const t = Ce.language;
    e && t !== e && Ce.changeLanguage(e);
  },
  oa = (e) => {
    const t = String(e.session);
    return !!(t && t !== 'undefined' && t?.length > 0);
  },
  aa = (e, t, n, r) => `${e ? `${e} ` : ''}${t ? `${t} ` : ''}${n ? `${n} ` : ''}${r}`,
  ia = (e, t, n, r, s) => `${e ? `${e} ` : ''}${t ? `${t} ` : ''}'${s}' ${n ? `${n} ` : ''}${r}`,
  ca = (e, t, n) => ` ${e && $s(e, t, { locale: n === 'fr-CA' ? Oo : Vs })}`,
  ua = (e) => {
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
  la = (e) => {
    const t = e.trim().replace(/[^0-9]/g, '');
    return t.length < 4
      ? t
      : t.length < 7
      ? t.replace(/(\d{3})(\d{1})/, '$1-$2')
      : t.length < 11
      ? t.replace(/(\d{3})(\d{3})(\d{1})/, '$1-$2-$3')
      : t.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  },
  da = (e) => {
    const t = e.split('-').join('');
    return t ? `${Bt}${t}` : '';
  },
  fa = ({ error: e, classes: t = '', id: n = 'error-id' }) =>
    m.jsx('div', {
      className: rt('gnb-form-validation left', t),
      role: 'alert',
      'aria-live': 'assertive',
      'aria-atomic': 'true',
      children: m.jsx('span', { id: n, className: 'margin-left-xs', children: e }),
    });
export {
  Fo as B,
  vo as C,
  Mo as D,
  ko as E,
  Do as F,
  ea as H,
  jo as M,
  Co as N,
  ia as a,
  sa as b,
  da as c,
  ca as d,
  la as e,
  No as f,
  aa as g,
  fa as h,
  oa as i,
  na as j,
  Ao as k,
  Y as l,
  ra as m,
  $s as n,
  Ro as o,
  ua as s,
  j as t,
  ta as u,
};
