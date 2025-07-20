import { K as I, X as M, Y as K, Z as U, r as E, _ as F, $ as W, u as _, b as z } from './index-BvrgA0VI.js';
var R = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
};
const X = I(R);
var Y = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function D(e) {
  var t = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    n &&
    ((t.name = n[1]), (X[n[1]] || e.charAt(e.length - 2) === '/') && (t.voidElement = !0), t.name.startsWith('!--'))
  ) {
    var o = e.indexOf('-->');
    return { type: 'comment', comment: o !== -1 ? e.slice(4, o) : '' };
  }
  for (var y = new RegExp(Y), s = null; (s = y.exec(e)) !== null; )
    if (s[0].trim())
      if (s[1]) {
        var l = s[1].trim(),
          i = [l, ''];
        l.indexOf('=') > -1 && (i = l.split('=')), (t.attrs[i[0]] = i[1]), y.lastIndex--;
      } else s[2] && (t.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
  return t;
}
var Z = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  J = /^\s*$/,
  G = Object.create(null);
function L(e, t) {
  switch (t.type) {
    case 'text':
      return e + t.content;
    case 'tag':
      return (
        (e +=
          '<' +
          t.name +
          (t.attrs
            ? (function (n) {
                var o = [];
                for (var y in n) o.push(y + '="' + n[y] + '"');
                return o.length ? ' ' + o.join(' ') : '';
              })(t.attrs)
            : '') +
          (t.voidElement ? '/>' : '>')),
        t.voidElement ? e : e + t.children.reduce(L, '') + '</' + t.name + '>'
      );
    case 'comment':
      return e + '<!--' + t.comment + '-->';
  }
}
var Q = {
  parse: function (e, t) {
    t || (t = {}), t.components || (t.components = G);
    var n,
      o = [],
      y = [],
      s = -1,
      l = !1;
    if (e.indexOf('<') !== 0) {
      var i = e.indexOf('<');
      o.push({ type: 'text', content: i === -1 ? e : e.substring(0, i) });
    }
    return (
      e.replace(Z, function (p, u) {
        if (l) {
          if (p !== '</' + n.name + '>') return;
          l = !1;
        }
        var h,
          $ = p.charAt(1) !== '/',
          k = p.startsWith('<!--'),
          b = u + p.length,
          v = e.charAt(b);
        if (k) {
          var f = D(p);
          return s < 0 ? (o.push(f), o) : ((h = y[s]).children.push(f), o);
        }
        if (
          ($ &&
            (s++,
            (n = D(p)).type === 'tag' && t.components[n.name] && ((n.type = 'component'), (l = !0)),
            n.voidElement ||
              l ||
              !v ||
              v === '<' ||
              n.children.push({ type: 'text', content: e.slice(b, e.indexOf('<', b)) }),
            s === 0 && o.push(n),
            (h = y[s - 1]) && h.children.push(n),
            (y[s] = n)),
          (!$ || n.voidElement) &&
            (s > -1 && (n.voidElement || n.name === p.slice(2, -1)) && (s--, (n = s === -1 ? o : y[s])),
            !l && v !== '<' && v))
        ) {
          h = s === -1 ? o : y[s].children;
          var m = e.indexOf('<', b),
            c = e.slice(b, m === -1 ? void 0 : m);
          J.test(c) && (c = ' '), ((m > -1 && s + h.length >= 0) || c !== ' ') && h.push({ type: 'text', content: c });
        }
      }),
      o
    );
  },
  stringify: function (e) {
    return e.reduce(function (t, n) {
      return t + L('', n);
    }, '');
  },
};
function V(e, t) {
  if (!e) return !1;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}
function q(e) {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? w(t) : t;
}
function ee(e) {
  return Object.prototype.toString.call(e) !== '[object Array]' ? !1 : e.every((t) => E.isValidElement(t));
}
function w(e) {
  return Array.isArray(e) ? e : [e];
}
function te(e, t) {
  const n = { ...t };
  return (n.props = Object.assign(e.props, t.props)), n;
}
function B(e, t) {
  if (!e) return '';
  let n = '';
  const o = w(e),
    y = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return (
    o.forEach((s, l) => {
      if (typeof s == 'string') n += `${s}`;
      else if (E.isValidElement(s)) {
        const i = Object.keys(s.props).length,
          p = y.indexOf(s.type) > -1,
          u = s.props.children;
        if (!u && p && i === 0) n += `<${s.type}/>`;
        else if (!u && (!p || i !== 0)) n += `<${l}></${l}>`;
        else if (s.props.i18nIsDynamicList) n += `<${l}></${l}>`;
        else if (p && i === 1 && typeof u == 'string') n += `<${s.type}>${u}</${s.type}>`;
        else {
          const h = B(u, t);
          n += `<${l}>${h}</${l}>`;
        }
      } else if (s === null) F('Trans: the passed in value is invalid - seems you passed in a null child.');
      else if (typeof s == 'object') {
        const { format: i, ...p } = s,
          u = Object.keys(p);
        if (u.length === 1) {
          const h = i ? `${u[0]}, ${i}` : u[0];
          n += `{{${h}}}`;
        } else
          F(
            'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
            s
          );
      } else
        F(
          'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
          s
        );
    }),
    n
  );
}
function ne(e, t, n, o, y, s) {
  if (t === '') return [];
  const l = o.transKeepBasicHtmlNodesFor || [],
    i = t && new RegExp(l.map((m) => `<${m}`).join('|')).test(t);
  if (!e && !i && !s) return [t];
  const p = {};
  function u(m) {
    w(m).forEach((a) => {
      typeof a != 'string' && (V(a) ? u(q(a)) : typeof a == 'object' && !E.isValidElement(a) && Object.assign(p, a));
    });
  }
  u(e);
  const h = Q.parse(`<0>${t}</0>`),
    $ = { ...p, ...y };
  function k(m, c, a) {
    const x = q(m),
      j = v(x, c.children, a);
    return (ee(x) && j.length === 0) || (m.props && m.props.i18nIsDynamicList) ? x : j;
  }
  function b(m, c, a, x, j) {
    m.dummy
      ? ((m.children = c), a.push(E.cloneElement(m, { key: x }, j ? void 0 : c)))
      : a.push(
          ...E.Children.map([m], (g) => {
            const r = { ...g.props };
            return delete r.i18nIsDynamicList, E.createElement(g.type, { ...r, key: x, ref: g.ref }, j ? null : c);
          })
        );
  }
  function v(m, c, a) {
    const x = w(m);
    return w(c).reduce((g, r, O) => {
      const N =
        r.children &&
        r.children[0] &&
        r.children[0].content &&
        n.services.interpolator.interpolate(r.children[0].content, $, n.language);
      if (r.type === 'tag') {
        let C = x[parseInt(r.name, 10)];
        a.length === 1 && !C && (C = a[0][r.name]), C || (C = {});
        const d = Object.keys(r.attrs).length !== 0 ? te({ props: r.attrs }, C) : C,
          T = E.isValidElement(d),
          S = T && V(r, !0) && !r.voidElement,
          P = i && typeof d == 'object' && d.dummy && !T,
          H = typeof e == 'object' && e !== null && Object.hasOwnProperty.call(e, r.name);
        if (typeof d == 'string') {
          const A = n.services.interpolator.interpolate(d, $, n.language);
          g.push(A);
        } else if (V(d) || S) {
          const A = k(d, r, a);
          b(d, A, g, O);
        } else if (P) {
          const A = v(x, r.children, a);
          b(d, A, g, O);
        } else if (Number.isNaN(parseFloat(r.name)))
          if (H) {
            const A = k(d, r, a);
            b(d, A, g, O, r.voidElement);
          } else if (o.transSupportBasicHtmlNodes && l.indexOf(r.name) > -1)
            if (r.voidElement) g.push(E.createElement(r.name, { key: `${r.name}-${O}` }));
            else {
              const A = v(x, r.children, a);
              g.push(E.createElement(r.name, { key: `${r.name}-${O}` }, A));
            }
          else if (r.voidElement) g.push(`<${r.name} />`);
          else {
            const A = v(x, r.children, a);
            g.push(`<${r.name}>${A}</${r.name}>`);
          }
        else if (typeof d == 'object' && !T) {
          const A = r.children[0] ? N : null;
          A && g.push(A);
        } else b(d, N, g, O, r.children.length !== 1 || !N);
      } else if (r.type === 'text') {
        const C = o.transWrapTextNodes,
          d = s
            ? o.unescape(n.services.interpolator.interpolate(r.content, $, n.language))
            : n.services.interpolator.interpolate(r.content, $, n.language);
        C ? g.push(E.createElement(C, { key: `${r.name}-${O}` }, d)) : g.push(d);
      }
      return g;
    }, []);
  }
  const f = v([{ dummy: !0, children: e || [] }], h, w(e || []));
  return q(f[0]);
}
function se(e) {
  let {
    children: t,
    count: n,
    parent: o,
    i18nKey: y,
    context: s,
    tOptions: l = {},
    values: i,
    defaults: p,
    components: u,
    ns: h,
    i18n: $,
    t: k,
    shouldUnescape: b,
    ...v
  } = e;
  const f = $ || K();
  if (!f) return M('You will need to pass in an i18next instance by using i18nextReactModule'), t;
  const m = k || f.t.bind(f) || ((T) => T),
    c = { ...U(), ...(f.options && f.options.react) };
  let a = h || m.ns || (f.options && f.options.defaultNS);
  a = typeof a == 'string' ? [a] : a || ['translation'];
  const x = B(t, c),
    j = p || x || c.transEmptyNodeValue || y,
    { hashTransKey: g } = c,
    r = y || (g ? g(x || j) : x || j);
  f.options &&
    f.options.interpolation &&
    f.options.interpolation.defaultVariables &&
    (i =
      i && Object.keys(i).length > 0
        ? { ...i, ...f.options.interpolation.defaultVariables }
        : { ...f.options.interpolation.defaultVariables });
  const O = { ...l, context: s || l.context, count: n, ...i, defaultValue: j, ns: a },
    N = r ? m(r, O) : j;
  u &&
    Object.keys(u).forEach((T) => {
      const S = u[T];
      if (
        typeof S.type == 'function' ||
        !S.props ||
        !S.props.children ||
        (N.indexOf(`${T}/>`) < 0 && N.indexOf(`${T} />`) < 0)
      )
        return;
      function P() {
        return E.createElement(E.Fragment, null, S);
      }
      u[T] = E.createElement(P);
    });
  const C = ne(u || t, N, f, c, O, b),
    d = o !== void 0 ? o : c.defaultTransParent;
  return d ? E.createElement(d, v, C) : C;
}
function oe(e) {
  let {
    children: t,
    count: n,
    parent: o,
    i18nKey: y,
    context: s,
    tOptions: l = {},
    values: i,
    defaults: p,
    components: u,
    ns: h,
    i18n: $,
    t: k,
    shouldUnescape: b,
    ...v
  } = e;
  const { i18n: f, defaultNS: m } = E.useContext(W) || {},
    c = $ || f || K(),
    a = k || (c && c.t.bind(c));
  return se({
    children: t,
    count: n,
    parent: o,
    i18nKey: y,
    context: s,
    tOptions: l,
    values: i,
    defaults: p,
    components: u,
    ns: h || (a && a.ns) || m || (c && c.options && c.options.defaultNS),
    i18n: c,
    t: k,
    shouldUnescape: b,
    ...v,
  });
}
const ae = () => {
  const { t: e } = _(),
    [t] = z(['session', 'language']);
  return {
    renderMetadata: () => {
      var i, p, u, h, $, k, b, v, f;
      const o = '../images/gnb-180x180.png',
        y = '../images/gnb-32x32.png',
        s = '../images/gnb-16x16.png',
        l = '../images/gnb-32x32.ico';
      (document.documentElement.lang = t.language === 'en-CA' ? 'en' : 'fr'),
        (document.title = e('pageTitle')),
        (i = document.querySelector("meta[property='og:title']")) == null || i.setAttribute('content', e('pageTitle')),
        (p = document.querySelector("meta[name='description']")) == null ||
          p.setAttribute('content', e('pageDescription')),
        (u = document.querySelector("meta[property='og:description']")) == null ||
          u.setAttribute('content', e('pageDescription')),
        (h = document.querySelector("meta[property='og:image:alt']")) == null ||
          h.setAttribute('content', e('mainNavigation.governmentOfNewBrunswick')),
        ($ = document.querySelector("meta[property='og:locale']")) == null ||
          $.setAttribute('content', t.language === 'en-CA' ? 'en_CA' : 'fr_CA'),
        (k = document.querySelector('#apple-touch-icon')) == null || k.setAttribute('href', o),
        (b = document.querySelector('#favicon-32-png')) == null || b.setAttribute('href', y),
        (v = document.querySelector('#favicon-16-png')) == null || v.setAttribute('href', s),
        (f = document.querySelector('#favicon-32-io')) == null || f.setAttribute('href', l);
    },
  };
};
export { oe as T, ae as u };
