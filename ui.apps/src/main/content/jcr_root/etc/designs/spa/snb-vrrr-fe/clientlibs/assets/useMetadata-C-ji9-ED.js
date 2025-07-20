import { L as R, X as _, Y as U, Z as z, r as v, _ as V, $ as X, u as Y, b as Z } from './index-DaP8lWee.js';
var q, B;
function J() {
  return (
    B ||
      ((B = 1),
      (q = {
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
    q
  );
}
var G = J();
const Q = R(G);
var ee = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function H(e) {
  var t = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    n &&
    ((t.name = n[1]), (Q[n[1]] || e.charAt(e.length - 2) === '/') && (t.voidElement = !0), t.name.startsWith('!--'))
  ) {
    var o = e.indexOf('-->');
    return { type: 'comment', comment: o !== -1 ? e.slice(4, o) : '' };
  }
  for (var p = new RegExp(ee), s = null; (s = p.exec(e)) !== null; )
    if (s[0].trim())
      if (s[1]) {
        var c = s[1].trim(),
          l = [c, ''];
        c.indexOf('=') > -1 && (l = c.split('=')), (t.attrs[l[0]] = l[1]), p.lastIndex--;
      } else s[2] && (t.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
  return t;
}
var te = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  ne = /^\s*$/,
  se = Object.create(null);
function I(e, t) {
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
        t.voidElement ? e : e + t.children.reduce(I, '') + '</' + t.name + '>'
      );
    case 'comment':
      return e + '<!--' + t.comment + '-->';
  }
}
var re = {
  parse: function (e, t) {
    t || (t = {}), t.components || (t.components = se);
    var n,
      o = [],
      p = [],
      s = -1,
      c = !1;
    if (e.indexOf('<') !== 0) {
      var l = e.indexOf('<');
      o.push({ type: 'text', content: l === -1 ? e : e.substring(0, l) });
    }
    return (
      e.replace(te, function (m, f) {
        if (c) {
          if (m !== '</' + n.name + '>') return;
          c = !1;
        }
        var d,
          C = m.charAt(1) !== '/',
          T = m.startsWith('<!--'),
          E = f + m.length,
          x = e.charAt(E);
        if (T) {
          var y = H(m);
          return s < 0 ? (o.push(y), o) : ((d = p[s]).children.push(y), o);
        }
        if (
          (C &&
            (s++,
            (n = H(m)).type === 'tag' && t.components[n.name] && ((n.type = 'component'), (c = !0)),
            n.voidElement ||
              c ||
              !x ||
              x === '<' ||
              n.children.push({ type: 'text', content: e.slice(E, e.indexOf('<', E)) }),
            s === 0 && o.push(n),
            (d = p[s - 1]) && d.children.push(n),
            (p[s] = n)),
          (!C || n.voidElement) &&
            (s > -1 && (n.voidElement || n.name === m.slice(2, -1)) && (s--, (n = s === -1 ? o : p[s])),
            !c && x !== '<' && x))
        ) {
          d = s === -1 ? o : p[s].children;
          var u = e.indexOf('<', E),
            i = e.slice(E, u === -1 ? void 0 : u);
          ne.test(i) && (i = ' '), ((u > -1 && s + d.length >= 0) || i !== ' ') && d.push({ type: 'text', content: i });
        }
      }),
      o
    );
  },
  stringify: function (e) {
    return e.reduce(function (t, n) {
      return t + I('', n);
    }, '');
  },
};
function D(e, t) {
  if (!e) return !1;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}
function K(e) {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? S(t) : t;
}
function oe(e) {
  return Object.prototype.toString.call(e) !== '[object Array]' ? !1 : e.every((t) => v.isValidElement(t));
}
function S(e) {
  return Array.isArray(e) ? e : [e];
}
function ae(e, t) {
  const n = { ...t };
  return (n.props = Object.assign(e.props, t.props)), n;
}
function M(e, t) {
  if (!e) return '';
  let n = '';
  const o = S(e),
    p = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return (
    o.forEach((s, c) => {
      if (typeof s == 'string') n += `${s}`;
      else if (v.isValidElement(s)) {
        const l = Object.keys(s.props).length,
          m = p.indexOf(s.type) > -1,
          f = s.props.children;
        if (!f && m && l === 0) n += `<${s.type}/>`;
        else if (!f && (!m || l !== 0)) n += `<${c}></${c}>`;
        else if (s.props.i18nIsDynamicList) n += `<${c}></${c}>`;
        else if (m && l === 1 && typeof f == 'string') n += `<${s.type}>${f}</${s.type}>`;
        else {
          const d = M(f, t);
          n += `<${c}>${d}</${c}>`;
        }
      } else if (s === null) V('Trans: the passed in value is invalid - seems you passed in a null child.');
      else if (typeof s == 'object') {
        const { format: l, ...m } = s,
          f = Object.keys(m);
        if (f.length === 1) {
          const d = l ? `${f[0]}, ${l}` : f[0];
          n += `{{${d}}}`;
        } else
          V(
            'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
            s
          );
      } else
        V(
          'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
          s
        );
    }),
    n
  );
}
function ie(e, t, n, o, p, s) {
  if (t === '') return [];
  const c = o.transKeepBasicHtmlNodesFor || [],
    l = t && new RegExp(c.map((u) => `<${u}`).join('|')).test(t);
  if (!e && !l && !s) return [t];
  const m = {};
  function f(u) {
    S(u).forEach((a) => {
      typeof a != 'string' && (D(a) ? f(K(a)) : typeof a == 'object' && !v.isValidElement(a) && Object.assign(m, a));
    });
  }
  f(e);
  const d = re.parse(`<0>${t}</0>`),
    C = { ...m, ...p };
  function T(u, i, a) {
    const b = K(u),
      k = x(b, i.children, a);
    return (oe(b) && k.length === 0) || (u.props && u.props.i18nIsDynamicList) ? b : k;
  }
  function E(u, i, a, b, k) {
    u.dummy
      ? ((u.children = i), a.push(v.cloneElement(u, { key: b }, k ? void 0 : i)))
      : a.push(
          ...v.Children.map([u], (g) => {
            const r = { ...g.props };
            return delete r.i18nIsDynamicList, v.createElement(g.type, { ...r, key: b, ref: g.ref }, k ? null : i);
          })
        );
  }
  function x(u, i, a) {
    const b = S(u);
    return S(i).reduce((g, r, j) => {
      const w =
        r.children &&
        r.children[0] &&
        r.children[0].content &&
        n.services.interpolator.interpolate(r.children[0].content, C, n.language);
      if (r.type === 'tag') {
        let A = b[parseInt(r.name, 10)];
        a.length === 1 && !A && (A = a[0][r.name]), A || (A = {});
        const h = Object.keys(r.attrs).length !== 0 ? ae({ props: r.attrs }, A) : A,
          O = v.isValidElement(h),
          N = O && D(r, !0) && !r.voidElement,
          L = l && typeof h == 'object' && h.dummy && !O,
          W = typeof e == 'object' && e !== null && Object.hasOwnProperty.call(e, r.name);
        if (typeof h == 'string') {
          const $ = n.services.interpolator.interpolate(h, C, n.language);
          g.push($);
        } else if (D(h) || N) {
          const $ = T(h, r, a);
          E(h, $, g, j);
        } else if (L) {
          const $ = x(b, r.children, a);
          E(h, $, g, j);
        } else if (Number.isNaN(parseFloat(r.name)))
          if (W) {
            const $ = T(h, r, a);
            E(h, $, g, j, r.voidElement);
          } else if (o.transSupportBasicHtmlNodes && c.indexOf(r.name) > -1)
            if (r.voidElement) g.push(v.createElement(r.name, { key: `${r.name}-${j}` }));
            else {
              const $ = x(b, r.children, a);
              g.push(v.createElement(r.name, { key: `${r.name}-${j}` }, $));
            }
          else if (r.voidElement) g.push(`<${r.name} />`);
          else {
            const $ = x(b, r.children, a);
            g.push(`<${r.name}>${$}</${r.name}>`);
          }
        else if (typeof h == 'object' && !O) {
          const $ = r.children[0] ? w : null;
          $ && g.push($);
        } else E(h, w, g, j, r.children.length !== 1 || !w);
      } else if (r.type === 'text') {
        const A = o.transWrapTextNodes,
          h = s
            ? o.unescape(n.services.interpolator.interpolate(r.content, C, n.language))
            : n.services.interpolator.interpolate(r.content, C, n.language);
        A ? g.push(v.createElement(A, { key: `${r.name}-${j}` }, h)) : g.push(h);
      }
      return g;
    }, []);
  }
  const y = x([{ dummy: !0, children: e || [] }], d, S(e || []));
  return K(y[0]);
}
function ce(e) {
  let {
    children: t,
    count: n,
    parent: o,
    i18nKey: p,
    context: s,
    tOptions: c = {},
    values: l,
    defaults: m,
    components: f,
    ns: d,
    i18n: C,
    t: T,
    shouldUnescape: E,
    ...x
  } = e;
  const y = C || U();
  if (!y) return _('You will need to pass in an i18next instance by using i18nextReactModule'), t;
  const u = T || y.t.bind(y) || ((O) => O),
    i = { ...z(), ...(y.options && y.options.react) };
  let a = d || u.ns || (y.options && y.options.defaultNS);
  a = typeof a == 'string' ? [a] : a || ['translation'];
  const b = M(t, i),
    k = m || b || i.transEmptyNodeValue || p,
    { hashTransKey: g } = i,
    r = p || (g ? g(b || k) : b || k);
  y.options &&
    y.options.interpolation &&
    y.options.interpolation.defaultVariables &&
    (l =
      l && Object.keys(l).length > 0
        ? { ...l, ...y.options.interpolation.defaultVariables }
        : { ...y.options.interpolation.defaultVariables });
  const j = { ...c, context: s || c.context, count: n, ...l, defaultValue: k, ns: a },
    w = r ? u(r, j) : k;
  f &&
    Object.keys(f).forEach((O) => {
      const N = f[O];
      if (
        typeof N.type == 'function' ||
        !N.props ||
        !N.props.children ||
        (w.indexOf(`${O}/>`) < 0 && w.indexOf(`${O} />`) < 0)
      )
        return;
      function L() {
        return v.createElement(v.Fragment, null, N);
      }
      f[O] = v.createElement(L);
    });
  const A = ie(f || t, w, y, i, j, E),
    h = o !== void 0 ? o : i.defaultTransParent;
  return h ? v.createElement(h, x, A) : A;
}
function ue(e) {
  let {
    children: t,
    count: n,
    parent: o,
    i18nKey: p,
    context: s,
    tOptions: c = {},
    values: l,
    defaults: m,
    components: f,
    ns: d,
    i18n: C,
    t: T,
    shouldUnescape: E,
    ...x
  } = e;
  const { i18n: y, defaultNS: u } = v.useContext(X) || {},
    i = C || y || U(),
    a = T || (i && i.t.bind(i));
  return ce({
    children: t,
    count: n,
    parent: o,
    i18nKey: p,
    context: s,
    tOptions: c,
    values: l,
    defaults: m,
    components: f,
    ns: d || (a && a.ns) || u || (i && i.options && i.options.defaultNS),
    i18n: i,
    t: T,
    shouldUnescape: E,
    ...x,
  });
}
const P = 'https://www2.snb.ca',
  F = '/etc/designs/spa/snb-vrrr-fe/clientlibs/',
  pe = () => {
    const { t: e } = Y(),
      [t] = Z(['session', 'language']);
    return {
      renderMetadata: () => {
        const o = P + F + 'images/gnb-180x180.png',
          p = P + F + 'images/gnb-32x32.png',
          s = P + F + 'images/gnb-16x16.png',
          c = P + F + 'images/gnb-32x32.ico';
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
          document.querySelector('#favicon-16-png')?.setAttribute('href', s),
          document.querySelector('#favicon-32-io')?.setAttribute('href', c);
      },
    };
  };
export { ue as T, pe as u };
