import { o as Z, D as Q, G as J, H as _, r as b, I as F, J as L, K as I, M as R } from './index-CLFRBv6J.js';
var W, q;
function U() {
  return (
    q ||
      ((q = 1),
      (W = {
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
    W
  );
}
var ee = U();
const te = Z(ee);
var ne = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function z(e) {
  var n = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
    t = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    t &&
    ((n.name = t[1]), (te[t[1]] || e.charAt(e.length - 2) === '/') && (n.voidElement = !0), n.name.startsWith('!--'))
  ) {
    var a = e.indexOf('-->');
    return { type: 'comment', comment: a !== -1 ? e.slice(4, a) : '' };
  }
  for (var d = new RegExp(ne), s = null; (s = d.exec(e)) !== null; )
    if (s[0].trim())
      if (s[1]) {
        var o = s[1].trim(),
          h = [o, ''];
        o.indexOf('=') > -1 && (h = o.split('=')), (n.attrs[h[0]] = h[1]), d.lastIndex--;
      } else s[2] && (n.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
  return n;
}
var se = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  re = /^\s*$/,
  ae = Object.create(null);
function G(e, n) {
  switch (n.type) {
    case 'text':
      return e + n.content;
    case 'tag':
      return (
        (e +=
          '<' +
          n.name +
          (n.attrs
            ? (function (t) {
                var a = [];
                for (var d in t) a.push(d + '="' + t[d] + '"');
                return a.length ? ' ' + a.join(' ') : '';
              })(n.attrs)
            : '') +
          (n.voidElement ? '/>' : '>')),
        n.voidElement ? e : e + n.children.reduce(G, '') + '</' + n.name + '>'
      );
    case 'comment':
      return e + '<!--' + n.comment + '-->';
  }
}
var ie = {
  parse: function (e, n) {
    n || (n = {}), n.components || (n.components = ae);
    var t,
      a = [],
      d = [],
      s = -1,
      o = !1;
    if (e.indexOf('<') !== 0) {
      var h = e.indexOf('<');
      a.push({ type: 'text', content: h === -1 ? e : e.substring(0, h) });
    }
    return (
      e.replace(se, function (c, E) {
        if (o) {
          if (c !== '</' + t.name + '>') return;
          o = !1;
        }
        var v,
          g = c.charAt(1) !== '/',
          A = c.startsWith('<!--'),
          $ = E + c.length,
          u = e.charAt($);
        if (A) {
          var T = z(c);
          return s < 0 ? (a.push(T), a) : ((v = d[s]).children.push(T), a);
        }
        if (
          (g &&
            (s++,
            (t = z(c)).type === 'tag' && n.components[t.name] && ((t.type = 'component'), (o = !0)),
            t.voidElement ||
              o ||
              !u ||
              u === '<' ||
              t.children.push({ type: 'text', content: e.slice($, e.indexOf('<', $)) }),
            s === 0 && a.push(t),
            (v = d[s - 1]) && v.children.push(t),
            (d[s] = t)),
          (!g || t.voidElement) &&
            (s > -1 && (t.voidElement || t.name === c.slice(2, -1)) && (s--, (t = s === -1 ? a : d[s])),
            !o && u !== '<' && u))
        ) {
          v = s === -1 ? a : d[s].children;
          var i = e.indexOf('<', $),
            p = e.slice($, i === -1 ? void 0 : i);
          re.test(p) && (p = ' '), ((i > -1 && s + v.length >= 0) || p !== ' ') && v.push({ type: 'text', content: p });
        }
      }),
      a
    );
  },
  stringify: function (e) {
    return e.reduce(function (n, t) {
      return n + G('', t);
    }, '');
  },
};
const P = (e, n) => {
    var a;
    if (!e) return !1;
    const t = ((a = e.props) == null ? void 0 : a.children) ?? e.children;
    return n ? t.length > 0 : !!t;
  },
  M = (e) => {
    var t, a;
    if (!e) return [];
    const n = ((t = e.props) == null ? void 0 : t.children) ?? e.children;
    return (a = e.props) != null && a.i18nIsDynamicList ? O(n) : n;
  },
  oe = (e) => Array.isArray(e) && e.every(b.isValidElement),
  O = (e) => (Array.isArray(e) ? e : [e]),
  le = (e, n) => {
    const t = { ...n };
    return (t.props = Object.assign(e.props, n.props)), t;
  },
  X = (e, n) => {
    if (!e) return '';
    let t = '';
    const a = O(e),
      d = n != null && n.transSupportBasicHtmlNodes ? n.transKeepBasicHtmlNodesFor ?? [] : [];
    return (
      a.forEach((s, o) => {
        if (F(s)) t += `${s}`;
        else if (b.isValidElement(s)) {
          const { props: h, type: c } = s,
            E = Object.keys(h).length,
            v = d.indexOf(c) > -1,
            g = h.children;
          if (!g && v && !E) t += `<${c}/>`;
          else if ((!g && (!v || E)) || h.i18nIsDynamicList) t += `<${o}></${o}>`;
          else if (v && E === 1 && F(g)) t += `<${c}>${g}</${c}>`;
          else {
            const A = X(g, n);
            t += `<${o}>${A}</${o}>`;
          }
        } else if (s === null) L('Trans: the passed in value is invalid - seems you passed in a null child.');
        else if (I(s)) {
          const { format: h, ...c } = s,
            E = Object.keys(c);
          if (E.length === 1) {
            const v = h ? `${E[0]}, ${h}` : E[0];
            t += `{{${v}}}`;
          } else
            L(
              'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
              s
            );
        } else
          L(
            'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
            s
          );
      }),
      t
    );
  },
  ce = (e, n, t, a, d, s) => {
    if (n === '') return [];
    const o = a.transKeepBasicHtmlNodesFor || [],
      h = n && new RegExp(o.map((i) => `<${i}`).join('|')).test(n);
    if (!e && !h && !s) return [n];
    const c = {},
      E = (i) => {
        O(i).forEach((l) => {
          F(l) || (P(l) ? E(M(l)) : I(l) && !b.isValidElement(l) && Object.assign(c, l));
        });
      };
    E(e);
    const v = ie.parse(`<0>${n}</0>`),
      g = { ...c, ...d },
      A = (i, p, l) => {
        var f;
        const x = M(i),
          j = u(x, p.children, l);
        return (oe(x) && j.length === 0) || ((f = i.props) != null && f.i18nIsDynamicList) ? x : j;
      },
      $ = (i, p, l, x, j) => {
        i.dummy
          ? ((i.children = p), l.push(b.cloneElement(i, { key: x }, j ? void 0 : p)))
          : l.push(
              ...b.Children.map([i], (f) => {
                const r = { ...f.props };
                return delete r.i18nIsDynamicList, b.createElement(f.type, { ...r, key: x, ref: f.ref }, j ? null : p);
              })
            );
      },
      u = (i, p, l) => {
        const x = O(i);
        return O(p).reduce((f, r, C) => {
          var V, D;
          const N =
            ((D = (V = r.children) == null ? void 0 : V[0]) == null ? void 0 : D.content) &&
            t.services.interpolator.interpolate(r.children[0].content, g, t.language);
          if (r.type === 'tag') {
            let k = x[parseInt(r.name, 10)];
            l.length === 1 && !k && (k = l[0][r.name]), k || (k = {});
            const y = Object.keys(r.attrs).length !== 0 ? le({ props: r.attrs }, k) : k,
              w = b.isValidElement(y),
              H = w && P(r, !0) && !r.voidElement,
              S = h && I(y) && y.dummy && !w,
              B = I(e) && Object.hasOwnProperty.call(e, r.name);
            if (F(y)) {
              const m = t.services.interpolator.interpolate(y, g, t.language);
              f.push(m);
            } else if (P(y) || H) {
              const m = A(y, r, l);
              $(y, m, f, C);
            } else if (S) {
              const m = u(x, r.children, l);
              $(y, m, f, C);
            } else if (Number.isNaN(parseFloat(r.name)))
              if (B) {
                const m = A(y, r, l);
                $(y, m, f, C, r.voidElement);
              } else if (a.transSupportBasicHtmlNodes && o.indexOf(r.name) > -1)
                if (r.voidElement) f.push(b.createElement(r.name, { key: `${r.name}-${C}` }));
                else {
                  const m = u(x, r.children, l);
                  f.push(b.createElement(r.name, { key: `${r.name}-${C}` }, m));
                }
              else if (r.voidElement) f.push(`<${r.name} />`);
              else {
                const m = u(x, r.children, l);
                f.push(`<${r.name}>${m}</${r.name}>`);
              }
            else if (I(y) && !w) {
              const m = r.children[0] ? N : null;
              m && f.push(m);
            } else $(y, N, f, C, r.children.length !== 1 || !N);
          } else if (r.type === 'text') {
            const k = a.transWrapTextNodes,
              y = s
                ? a.unescape(t.services.interpolator.interpolate(r.content, g, t.language))
                : t.services.interpolator.interpolate(r.content, g, t.language);
            k ? f.push(b.createElement(k, { key: `${r.name}-${C}` }, y)) : f.push(y);
          }
          return f;
        }, []);
      },
      T = u([{ dummy: !0, children: e || [] }], v, O(e || []));
    return M(T[0]);
  };
function ue({
  children: e,
  count: n,
  parent: t,
  i18nKey: a,
  context: d,
  tOptions: s = {},
  values: o,
  defaults: h,
  components: c,
  ns: E,
  i18n: v,
  t: g,
  shouldUnescape: A,
  ...$
}) {
  var k, y, w, H, S, B;
  const u = v || J();
  if (!u) return Q('You will need to pass in an i18next instance by using i18nextReactModule'), e;
  const T = g || u.t.bind(u) || ((m) => m),
    i = { ..._(), ...((k = u.options) == null ? void 0 : k.react) };
  let p = E || T.ns || ((y = u.options) == null ? void 0 : y.defaultNS);
  p = F(p) ? [p] : p || ['translation'];
  const l = X(e, i),
    x = h || l || i.transEmptyNodeValue || a,
    { hashTransKey: j } = i,
    f = a || (j ? j(l || x) : l || x);
  (H = (w = u.options) == null ? void 0 : w.interpolation) != null &&
    H.defaultVariables &&
    (o =
      o && Object.keys(o).length > 0
        ? { ...o, ...u.options.interpolation.defaultVariables }
        : { ...u.options.interpolation.defaultVariables });
  const r =
      o || (n !== void 0 && !((B = (S = u.options) == null ? void 0 : S.interpolation) != null && B.alwaysFormat)) || !e
        ? s.interpolation
        : { interpolation: { ...s.interpolation, prefix: '#$?', suffix: '?$#' } },
    C = { ...s, context: d || s.context, count: n, ...o, ...r, defaultValue: x, ns: p },
    N = f ? T(f, C) : x;
  c &&
    Object.keys(c).forEach((m) => {
      const K = c[m];
      if (
        typeof K.type == 'function' ||
        !K.props ||
        !K.props.children ||
        (N.indexOf(`${m}/>`) < 0 && N.indexOf(`${m} />`) < 0)
      )
        return;
      function Y() {
        return b.createElement(b.Fragment, null, K);
      }
      c[m] = b.createElement(Y);
    });
  const V = ce(c || e, N, u, i, C, A),
    D = t ?? i.defaultTransParent;
  return D ? b.createElement(D, $, V) : V;
}
function fe({
  children: e,
  count: n,
  parent: t,
  i18nKey: a,
  context: d,
  tOptions: s = {},
  values: o,
  defaults: h,
  components: c,
  ns: E,
  i18n: v,
  t: g,
  shouldUnescape: A,
  ...$
}) {
  var l;
  const { i18n: u, defaultNS: T } = b.useContext(R) || {},
    i = v || u || J(),
    p = g || (i == null ? void 0 : i.t.bind(i));
  return ue({
    children: e,
    count: n,
    parent: t,
    i18nKey: a,
    context: d,
    tOptions: s,
    values: o,
    defaults: h,
    components: c,
    ns: E || (p == null ? void 0 : p.ns) || T || ((l = i == null ? void 0 : i.options) == null ? void 0 : l.defaultNS),
    i18n: i,
    t: g,
    shouldUnescape: A,
    ...$,
  });
}
export { fe as T };
