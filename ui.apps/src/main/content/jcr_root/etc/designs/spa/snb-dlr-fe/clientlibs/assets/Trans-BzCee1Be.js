import { o as K, D as M, G as X, H as Q, r as b, I as _, J as w, K as I, M as ee } from './index-COkBmnQs.js';
var B, q;
function te() {
  return (
    q ||
      ((q = 1),
      (B = {
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
    B
  );
}
var ne = te();
const re = K(ne);
var se = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function z(e) {
  var t = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    n &&
    ((t.name = n[1]), (re[n[1]] || e.charAt(e.length - 2) === '/') && (t.voidElement = !0), t.name.startsWith('!--'))
  ) {
    var r = e.indexOf('-->');
    return { type: 'comment', comment: r !== -1 ? e.slice(4, r) : '' };
  }
  for (var i = new RegExp(se), a = null; (a = i.exec(e)) !== null; )
    if (a[0].trim())
      if (a[1]) {
        var u = a[1].trim(),
          p = [u, ''];
        u.indexOf('=') > -1 && (p = u.split('=')), (t.attrs[p[0]] = p[1]), i.lastIndex--;
      } else a[2] && (t.attrs[a[2]] = a[3].trim().substring(1, a[3].length - 1));
  return t;
}
var ae = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  ie = /^\s*$/,
  oe = Object.create(null);
function G(e, t) {
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
                var r = [];
                for (var i in n) r.push(i + '="' + n[i] + '"');
                return r.length ? ' ' + r.join(' ') : '';
              })(t.attrs)
            : '') +
          (t.voidElement ? '/>' : '>')),
        t.voidElement ? e : e + t.children.reduce(G, '') + '</' + t.name + '>'
      );
    case 'comment':
      return e + '<!--' + t.comment + '-->';
  }
}
var le = {
  parse: function (e, t) {
    t || (t = {}), t.components || (t.components = oe);
    var n,
      r = [],
      i = [],
      a = -1,
      u = !1;
    if (e.indexOf('<') !== 0) {
      var p = e.indexOf('<');
      r.push({ type: 'text', content: p === -1 ? e : e.substring(0, p) });
    }
    return (
      e.replace(ae, function (y, A) {
        if (u) {
          if (y !== '</' + n.name + '>') return;
          u = !1;
        }
        var m,
          E = y.charAt(1) !== '/',
          x = y.startsWith('<!--'),
          g = A + y.length,
          l = e.charAt(g);
        if (x) {
          var C = z(y);
          return a < 0 ? (r.push(C), r) : ((m = i[a]).children.push(C), r);
        }
        if (
          (E &&
            (a++,
            (n = z(y)).type === 'tag' && t.components[n.name] && ((n.type = 'component'), (u = !0)),
            n.voidElement ||
              u ||
              !l ||
              l === '<' ||
              n.children.push({ type: 'text', content: e.slice(g, e.indexOf('<', g)) }),
            a === 0 && r.push(n),
            (m = i[a - 1]) && m.children.push(n),
            (i[a] = n)),
          (!E || n.voidElement) &&
            (a > -1 && (n.voidElement || n.name === y.slice(2, -1)) && (a--, (n = a === -1 ? r : i[a])),
            !u && l !== '<' && l))
        ) {
          m = a === -1 ? r : i[a].children;
          var h = e.indexOf('<', g),
            o = e.slice(g, h === -1 ? void 0 : h);
          ie.test(o) && (o = ' '), ((h > -1 && a + m.length >= 0) || o !== ' ') && m.push({ type: 'text', content: o });
        }
      }),
      r
    );
  },
  stringify: function (e) {
    return e.reduce(function (t, n) {
      return t + G('', n);
    }, '');
  },
};
const W = (e, t) => {
    var r;
    if (!e) return !1;
    const n = ((r = e.props) == null ? void 0 : r.children) ?? e.children;
    return t ? n.length > 0 : !!n;
  },
  R = (e) => {
    var n, r;
    if (!e) return [];
    const t = ((n = e.props) == null ? void 0 : n.children) ?? e.children;
    return (r = e.props) != null && r.i18nIsDynamicList ? S(t) : t;
  },
  ce = (e) => Array.isArray(e) && e.every(b.isValidElement),
  S = (e) => (Array.isArray(e) ? e : [e]),
  ue = (e, t) => {
    const n = { ...t };
    return (n.props = Object.assign(e.props, t.props)), n;
  },
  U = (e, t, n, r) => {
    if (!e) return '';
    let i = '';
    const a = S(e),
      u = t != null && t.transSupportBasicHtmlNodes ? t.transKeepBasicHtmlNodesFor ?? [] : [];
    return (
      a.forEach((p, y) => {
        if (_(p)) {
          i += `${p}`;
          return;
        }
        if (b.isValidElement(p)) {
          const { props: A, type: m } = p,
            E = Object.keys(A).length,
            x = u.indexOf(m) > -1,
            g = A.children;
          if (!g && x && !E) {
            i += `<${m}/>`;
            return;
          }
          if ((!g && (!x || E)) || A.i18nIsDynamicList) {
            i += `<${y}></${y}>`;
            return;
          }
          if (x && E === 1 && _(g)) {
            i += `<${m}>${g}</${m}>`;
            return;
          }
          const l = U(g, t, n, r);
          i += `<${y}>${l}</${y}>`;
          return;
        }
        if (p === null) {
          w(n, 'TRANS_NULL_VALUE', 'Passed in a null value as child', { i18nKey: r });
          return;
        }
        if (I(p)) {
          const { format: A, ...m } = p,
            E = Object.keys(m);
          if (E.length === 1) {
            const x = A ? `${E[0]}, ${A}` : E[0];
            i += `{{${x}}}`;
            return;
          }
          w(
            n,
            'TRANS_INVALID_OBJ',
            'Invalid child - Object should only have keys {{ value, format }} (format is optional).',
            { i18nKey: r, child: p }
          );
          return;
        }
        w(
          n,
          'TRANS_INVALID_VAR',
          'Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.',
          { i18nKey: r, child: p }
        );
      }),
      i
    );
  },
  pe = (e, t, n, r, i, a, u) => {
    if (n === '') return [];
    const p = i.transKeepBasicHtmlNodesFor || [],
      y = n && new RegExp(p.map((o) => `<${o}`).join('|')).test(n);
    if (!e && !t && !y && !u) return [n];
    const A = t ?? {},
      m = (o) => {
        S(o).forEach((c) => {
          _(c) || (W(c) ? m(R(c)) : I(c) && !b.isValidElement(c) && Object.assign(A, c));
        });
      };
    m(e);
    const E = le.parse(`<0>${n}</0>`),
      x = { ...A, ...a },
      g = (o, N, c) => {
        var f;
        const $ = R(o),
          k = C($, N.children, c);
        return (ce($) && k.length === 0) || ((f = o.props) != null && f.i18nIsDynamicList) ? $ : k;
      },
      l = (o, N, c, $, k) => {
        o.dummy
          ? ((o.children = N), c.push(b.cloneElement(o, { key: $ }, k ? void 0 : N)))
          : c.push(
              ...b.Children.map([o], (f) => {
                const s = { ...f.props };
                return (
                  delete s.i18nIsDynamicList,
                  b.createElement(f.type, { ...s, key: $, ref: f.props.ref ?? f.ref }, k ? null : N)
                );
              })
            );
      },
      C = (o, N, c) => {
        const $ = S(o);
        return S(N).reduce((f, s, O) => {
          var D, L;
          const j =
            ((L = (D = s.children) == null ? void 0 : D[0]) == null ? void 0 : L.content) &&
            r.services.interpolator.interpolate(s.children[0].content, x, r.language);
          if (s.type === 'tag') {
            let T = $[parseInt(s.name, 10)];
            !T && t && (T = t[s.name]), c.length === 1 && !T && (T = c[0][s.name]), T || (T = {});
            const d = Object.keys(s.attrs).length !== 0 ? ue({ props: s.attrs }, T) : T,
              V = b.isValidElement(d),
              F = V && W(s, !0) && !s.voidElement,
              P = y && I(d) && d.dummy && !V,
              H = I(t) && Object.hasOwnProperty.call(t, s.name);
            if (_(d)) {
              const v = r.services.interpolator.interpolate(d, x, r.language);
              f.push(v);
            } else if (W(d) || F) {
              const v = g(d, s, c);
              l(d, v, f, O);
            } else if (P) {
              const v = C($, s.children, c);
              l(d, v, f, O);
            } else if (Number.isNaN(parseFloat(s.name)))
              if (H) {
                const v = g(d, s, c);
                l(d, v, f, O, s.voidElement);
              } else if (i.transSupportBasicHtmlNodes && p.indexOf(s.name) > -1)
                if (s.voidElement) f.push(b.createElement(s.name, { key: `${s.name}-${O}` }));
                else {
                  const v = C($, s.children, c);
                  f.push(b.createElement(s.name, { key: `${s.name}-${O}` }, v));
                }
              else if (s.voidElement) f.push(`<${s.name} />`);
              else {
                const v = C($, s.children, c);
                f.push(`<${s.name}>${v}</${s.name}>`);
              }
            else if (I(d) && !V) {
              const v = s.children[0] ? j : null;
              v && f.push(v);
            } else l(d, j, f, O, s.children.length !== 1 || !j);
          } else if (s.type === 'text') {
            const T = i.transWrapTextNodes,
              d = u
                ? i.unescape(r.services.interpolator.interpolate(s.content, x, r.language))
                : r.services.interpolator.interpolate(s.content, x, r.language);
            T ? f.push(b.createElement(T, { key: `${s.name}-${O}` }, d)) : f.push(d);
          }
          return f;
        }, []);
      },
      h = C([{ dummy: !0, children: e || [] }], E, S(e || []));
    return R(h[0]);
  },
  Y = (e, t, n) => {
    const r = e.key || t,
      i = b.cloneElement(e, { key: r });
    if (!i.props || !i.props.children || (n.indexOf(`${t}/>`) < 0 && n.indexOf(`${t} />`) < 0)) return i;
    function a() {
      return b.createElement(b.Fragment, null, i);
    }
    return b.createElement(a, { key: r });
  },
  fe = (e, t) => e.map((n, r) => Y(n, r, t)),
  me = (e, t) => {
    const n = {};
    return (
      Object.keys(e).forEach((r) => {
        Object.assign(n, { [r]: Y(e[r], r, t) });
      }),
      n
    );
  },
  he = (e, t, n, r) =>
    e
      ? Array.isArray(e)
        ? fe(e, t)
        : I(e)
        ? me(e, t)
        : (M(n, 'TRANS_INVALID_COMPONENTS', '<Trans /> "components" prop expects an object or array', { i18nKey: r }),
          null)
      : null,
  ye = (e) =>
    !I(e) || Array.isArray(e) ? !1 : Object.keys(e).reduce((t, n) => t && Number.isNaN(Number.parseFloat(n)), !0);
function de({
  children: e,
  count: t,
  parent: n,
  i18nKey: r,
  context: i,
  tOptions: a = {},
  values: u,
  defaults: p,
  components: y,
  ns: A,
  i18n: m,
  t: E,
  shouldUnescape: x,
  ...g
}) {
  var V, F, P, H, v, J;
  const l = m || X();
  if (!l)
    return (
      M(l, 'NO_I18NEXT_INSTANCE', 'Trans: You need to pass in an i18next instance using i18nextReactModule', {
        i18nKey: r,
      }),
      e
    );
  const C = E || l.t.bind(l) || ((Z) => Z),
    h = { ...Q(), ...((V = l.options) == null ? void 0 : V.react) };
  let o = A || C.ns || ((F = l.options) == null ? void 0 : F.defaultNS);
  o = _(o) ? [o] : o || ['translation'];
  const N = U(e, h, l, r),
    c = p || N || h.transEmptyNodeValue || r,
    { hashTransKey: $ } = h,
    k = r || ($ ? $(N || c) : N || c);
  (H = (P = l.options) == null ? void 0 : P.interpolation) != null &&
    H.defaultVariables &&
    (u =
      u && Object.keys(u).length > 0
        ? { ...u, ...l.options.interpolation.defaultVariables }
        : { ...l.options.interpolation.defaultVariables });
  const f =
      u || (t !== void 0 && !((J = (v = l.options) == null ? void 0 : v.interpolation) != null && J.alwaysFormat)) || !e
        ? a.interpolation
        : { interpolation: { ...a.interpolation, prefix: '#$?', suffix: '?$#' } },
    s = { ...a, context: i || a.context, count: t, ...u, ...f, defaultValue: c, ns: o },
    O = k ? C(k, s) : c,
    j = he(y, O, l, r);
  let D = j || e,
    L = null;
  ye(j) && ((L = j), (D = e));
  const T = pe(D, L, O, l, h, s, x),
    d = n ?? h.defaultTransParent;
  return d ? b.createElement(d, g, T) : T;
}
function Ee({
  children: e,
  count: t,
  parent: n,
  i18nKey: r,
  context: i,
  tOptions: a = {},
  values: u,
  defaults: p,
  components: y,
  ns: A,
  i18n: m,
  t: E,
  shouldUnescape: x,
  ...g
}) {
  var N;
  const { i18n: l, defaultNS: C } = b.useContext(ee) || {},
    h = m || l || X(),
    o = E || (h == null ? void 0 : h.t.bind(h));
  return de({
    children: e,
    count: t,
    parent: n,
    i18nKey: r,
    context: i,
    tOptions: a,
    values: u,
    defaults: p,
    components: y,
    ns: A || (o == null ? void 0 : o.ns) || C || ((N = h == null ? void 0 : h.options) == null ? void 0 : N.defaultNS),
    i18n: h,
    t: E,
    shouldUnescape: x,
    ...g,
  });
}
export { Ee as T };
