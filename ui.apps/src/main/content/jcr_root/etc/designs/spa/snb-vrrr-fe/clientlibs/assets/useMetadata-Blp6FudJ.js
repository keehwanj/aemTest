import { n as U, w as W, t as B, v as R, r as b, x as F, I as z, u as _, a as J } from './index-BJVeoK1D.js';
var V, L;
function X() {
  return (
    L ||
      ((L = 1),
      (V = {
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
      })),
    V
  );
}
var Y = X();
const Z = U(Y);
var G = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function K(e) {
  var t = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    n &&
    ((t.name = n[1]), (Z[n[1]] || e.charAt(e.length - 2) === '/') && (t.voidElement = !0), t.name.startsWith('!--'))
  ) {
    var o = e.indexOf('-->');
    return { type: 'comment', comment: o !== -1 ? e.slice(4, o) : '' };
  }
  for (var p = new RegExp(G), r = null; (r = p.exec(e)) !== null; )
    if (r[0].trim())
      if (r[1]) {
        var c = r[1].trim(),
          l = [c, ''];
        c.indexOf('=') > -1 && (l = c.split('=')), (t.attrs[l[0]] = l[1]), p.lastIndex--;
      } else r[2] && (t.attrs[r[2]] = r[3].trim().substring(1, r[3].length - 1));
  return t;
}
var Q = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  ee = /^\s*$/,
  te = Object.create(null);
function H(e, t) {
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
                for (var p in n) o.push(p + '="' + n[p] + '"');
                return o.length ? ' ' + o.join(' ') : '';
              })(t.attrs)
            : '') +
          (t.voidElement ? '/>' : '>')),
        t.voidElement ? e : e + t.children.reduce(H, '') + '</' + t.name + '>'
      );
    case 'comment':
      return e + '<!--' + t.comment + '-->';
  }
}
var ne = {
  parse: function (e, t) {
    t || (t = {}), t.components || (t.components = te);
    var n,
      o = [],
      p = [],
      r = -1,
      c = !1;
    if (e.indexOf('<') !== 0) {
      var l = e.indexOf('<');
      o.push({ type: 'text', content: l === -1 ? e : e.substring(0, l) });
    }
    return (
      e.replace(Q, function (m, f) {
        if (c) {
          if (m !== '</' + n.name + '>') return;
          c = !1;
        }
        var d,
          k = m.charAt(1) !== '/',
          T = m.startsWith('<!--'),
          x = f + m.length,
          E = e.charAt(x);
        if (T) {
          var y = K(m);
          return r < 0 ? (o.push(y), o) : ((d = p[r]).children.push(y), o);
        }
        if (
          (k &&
            (r++,
            (n = K(m)).type === 'tag' && t.components[n.name] && ((n.type = 'component'), (c = !0)),
            n.voidElement ||
              c ||
              !E ||
              E === '<' ||
              n.children.push({ type: 'text', content: e.slice(x, e.indexOf('<', x)) }),
            r === 0 && o.push(n),
            (d = p[r - 1]) && d.children.push(n),
            (p[r] = n)),
          (!k || n.voidElement) &&
            (r > -1 && (n.voidElement || n.name === m.slice(2, -1)) && (r--, (n = r === -1 ? o : p[r])),
            !c && E !== '<' && E))
        ) {
          d = r === -1 ? o : p[r].children;
          var u = e.indexOf('<', x),
            i = e.slice(x, u === -1 ? void 0 : u);
          ee.test(i) && (i = ' '), ((u > -1 && r + d.length >= 0) || i !== ' ') && d.push({ type: 'text', content: i });
        }
      }),
      o
    );
  },
  stringify: function (e) {
    return e.reduce(function (t, n) {
      return t + H('', n);
    }, '');
  },
};
function q(e, t) {
  if (!e) return !1;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}
function D(e) {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? w(t) : t;
}
function re(e) {
  return Object.prototype.toString.call(e) !== '[object Array]' ? !1 : e.every((t) => b.isValidElement(t));
}
function w(e) {
  return Array.isArray(e) ? e : [e];
}
function se(e, t) {
  const n = { ...t };
  return (n.props = Object.assign(e.props, t.props)), n;
}
function I(e, t) {
  if (!e) return '';
  let n = '';
  const o = w(e),
    p = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return (
    o.forEach((r, c) => {
      if (typeof r == 'string') n += `${r}`;
      else if (b.isValidElement(r)) {
        const l = Object.keys(r.props).length,
          m = p.indexOf(r.type) > -1,
          f = r.props.children;
        if (!f && m && l === 0) n += `<${r.type}/>`;
        else if (!f && (!m || l !== 0)) n += `<${c}></${c}>`;
        else if (r.props.i18nIsDynamicList) n += `<${c}></${c}>`;
        else if (m && l === 1 && typeof f == 'string') n += `<${r.type}>${f}</${r.type}>`;
        else {
          const d = I(f, t);
          n += `<${c}>${d}</${c}>`;
        }
      } else if (r === null) F('Trans: the passed in value is invalid - seems you passed in a null child.');
      else if (typeof r == 'object') {
        const { format: l, ...m } = r,
          f = Object.keys(m);
        if (f.length === 1) {
          const d = l ? `${f[0]}, ${l}` : f[0];
          n += `{{${d}}}`;
        } else
          F(
            'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
            r
          );
      } else
        F(
          'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
          r
        );
    }),
    n
  );
}
function oe(e, t, n, o, p, r) {
  if (t === '') return [];
  const c = o.transKeepBasicHtmlNodesFor || [],
    l = t && new RegExp(c.map((u) => `<${u}`).join('|')).test(t);
  if (!e && !l && !r) return [t];
  const m = {};
  function f(u) {
    w(u).forEach((a) => {
      typeof a != 'string' && (q(a) ? f(D(a)) : typeof a == 'object' && !b.isValidElement(a) && Object.assign(m, a));
    });
  }
  f(e);
  const d = ne.parse(`<0>${t}</0>`),
    k = { ...m, ...p };
  function T(u, i, a) {
    const v = D(u),
      C = E(v, i.children, a);
    return (re(v) && C.length === 0) || (u.props && u.props.i18nIsDynamicList) ? v : C;
  }
  function x(u, i, a, v, C) {
    u.dummy
      ? ((u.children = i), a.push(b.cloneElement(u, { key: v }, C ? void 0 : i)))
      : a.push(
          ...b.Children.map([u], (g) => {
            const s = { ...g.props };
            return delete s.i18nIsDynamicList, b.createElement(g.type, { ...s, key: v, ref: g.ref }, C ? null : i);
          })
        );
  }
  function E(u, i, a) {
    const v = w(u);
    return w(i).reduce((g, s, j) => {
      const N =
        s.children &&
        s.children[0] &&
        s.children[0].content &&
        n.services.interpolator.interpolate(s.children[0].content, k, n.language);
      if (s.type === 'tag') {
        let $ = v[parseInt(s.name, 10)];
        a.length === 1 && !$ && ($ = a[0][s.name]), $ || ($ = {});
        const h = Object.keys(s.attrs).length !== 0 ? se({ props: s.attrs }, $) : $,
          O = b.isValidElement(h),
          S = O && q(s, !0) && !s.voidElement,
          P = l && typeof h == 'object' && h.dummy && !O,
          M = typeof e == 'object' && e !== null && Object.hasOwnProperty.call(e, s.name);
        if (typeof h == 'string') {
          const A = n.services.interpolator.interpolate(h, k, n.language);
          g.push(A);
        } else if (q(h) || S) {
          const A = T(h, s, a);
          x(h, A, g, j);
        } else if (P) {
          const A = E(v, s.children, a);
          x(h, A, g, j);
        } else if (Number.isNaN(parseFloat(s.name)))
          if (M) {
            const A = T(h, s, a);
            x(h, A, g, j, s.voidElement);
          } else if (o.transSupportBasicHtmlNodes && c.indexOf(s.name) > -1)
            if (s.voidElement) g.push(b.createElement(s.name, { key: `${s.name}-${j}` }));
            else {
              const A = E(v, s.children, a);
              g.push(b.createElement(s.name, { key: `${s.name}-${j}` }, A));
            }
          else if (s.voidElement) g.push(`<${s.name} />`);
          else {
            const A = E(v, s.children, a);
            g.push(`<${s.name}>${A}</${s.name}>`);
          }
        else if (typeof h == 'object' && !O) {
          const A = s.children[0] ? N : null;
          A && g.push(A);
        } else x(h, N, g, j, s.children.length !== 1 || !N);
      } else if (s.type === 'text') {
        const $ = o.transWrapTextNodes,
          h = r
            ? o.unescape(n.services.interpolator.interpolate(s.content, k, n.language))
            : n.services.interpolator.interpolate(s.content, k, n.language);
        $ ? g.push(b.createElement($, { key: `${s.name}-${j}` }, h)) : g.push(h);
      }
      return g;
    }, []);
  }
  const y = E([{ dummy: !0, children: e || [] }], d, w(e || []));
  return D(y[0]);
}
function ae(e) {
  let {
    children: t,
    count: n,
    parent: o,
    i18nKey: p,
    context: r,
    tOptions: c = {},
    values: l,
    defaults: m,
    components: f,
    ns: d,
    i18n: k,
    t: T,
    shouldUnescape: x,
    ...E
  } = e;
  const y = k || B();
  if (!y) return W('You will need to pass in an i18next instance by using i18nextReactModule'), t;
  const u = T || y.t.bind(y) || ((O) => O),
    i = { ...R(), ...(y.options && y.options.react) };
  let a = d || u.ns || (y.options && y.options.defaultNS);
  a = typeof a == 'string' ? [a] : a || ['translation'];
  const v = I(t, i),
    C = m || v || i.transEmptyNodeValue || p,
    { hashTransKey: g } = i,
    s = p || (g ? g(v || C) : v || C);
  y.options &&
    y.options.interpolation &&
    y.options.interpolation.defaultVariables &&
    (l =
      l && Object.keys(l).length > 0
        ? { ...l, ...y.options.interpolation.defaultVariables }
        : { ...y.options.interpolation.defaultVariables });
  const j = { ...c, context: r || c.context, count: n, ...l, defaultValue: C, ns: a },
    N = s ? u(s, j) : C;
  f &&
    Object.keys(f).forEach((O) => {
      const S = f[O];
      if (
        typeof S.type == 'function' ||
        !S.props ||
        !S.props.children ||
        (N.indexOf(`${O}/>`) < 0 && N.indexOf(`${O} />`) < 0)
      )
        return;
      function P() {
        return b.createElement(b.Fragment, null, S);
      }
      f[O] = b.createElement(P);
    });
  const $ = oe(f || t, N, y, i, j, x),
    h = o !== void 0 ? o : i.defaultTransParent;
  return h ? b.createElement(h, E, $) : $;
}
function ce(e) {
  let {
    children: t,
    count: n,
    parent: o,
    i18nKey: p,
    context: r,
    tOptions: c = {},
    values: l,
    defaults: m,
    components: f,
    ns: d,
    i18n: k,
    t: T,
    shouldUnescape: x,
    ...E
  } = e;
  const { i18n: y, defaultNS: u } = b.useContext(z) || {},
    i = k || y || B(),
    a = T || (i && i.t.bind(i));
  return ae({
    children: t,
    count: n,
    parent: o,
    i18nKey: p,
    context: r,
    tOptions: c,
    values: l,
    defaults: m,
    components: f,
    ns: d || (a && a.ns) || u || (i && i.options && i.options.defaultNS),
    i18n: i,
    t: T,
    shouldUnescape: x,
    ...E,
  });
}
const le = () => {
  const { t: e } = _(),
    [t] = J(['session', 'language']);
  return {
    renderMetadata: () => {
      const o = '../images/gnb-180x180.png',
        p = '../images/gnb-32x32.png',
        r = '../images/gnb-16x16.png',
        c = '../images/gnb-32x32.ico';
      (document.documentElement.lang = t.language === 'en-CA' ? 'en' : 'fr'),
        (document.title = e('pageTitle')),
        document.querySelector("meta[property='og:title']")?.setAttribute('content', e('pageTitle')),
        document.querySelector("meta[name='description']")?.setAttribute('content', e('pageDescription')),
        document.querySelector("meta[property='og:description']")?.setAttribute('content', e('pageDescription')),
        document
          .querySelector("meta[property='og:image:alt']")
          ?.setAttribute('content', e('mainNavigation.governmentOfNewBrunswick')),
        document
          .querySelector("meta[property='og:locale']")
          ?.setAttribute('content', t.language === 'en-CA' ? 'en_CA' : 'fr_CA'),
        document.querySelector('#apple-touch-icon')?.setAttribute('href', o),
        document.querySelector('#favicon-32-png')?.setAttribute('href', p),
        document.querySelector('#favicon-16-png')?.setAttribute('href', r),
        document.querySelector('#favicon-32-io')?.setAttribute('href', c);
    },
  };
};
export { ce as T, le as u };
