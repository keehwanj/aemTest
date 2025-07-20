import {
  H as Me,
  I as ye,
  J as De,
  K as Ke,
  r as E,
  L as Pe,
  j as f,
  F as _e,
  M as $e,
  k as ne,
  l as Ue,
  u as pe,
  p as ze,
  O as Ve,
  P as qe,
  a as Ge,
  w as Ye,
} from './index-B0gZ8dVn.js';
import { B as le, E as de, u as We, H as G } from './Error-46B2bSsF.js';
import { T as ve } from './useMetadata-YkuU4LQg.js';
function Ze(n, e) {
  const t = Me(n);
  if (isNaN(e)) return ye(n, NaN);
  const a = t.getDate(),
    i = ye(n, t.getTime());
  i.setMonth(t.getMonth() + e + 1, 0);
  const c = i.getDate();
  return a >= c ? i : (t.setFullYear(i.getFullYear(), i.getMonth(), a), t);
}
function Xe(n, e) {
  return Ze(n, e * 12);
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Ce = [
    'input:not([inert])',
    'select:not([inert])',
    'textarea:not([inert])',
    'a[href]:not([inert])',
    'button:not([inert])',
    '[tabindex]:not(slot):not([inert])',
    'audio[controls]:not([inert])',
    'video[controls]:not([inert])',
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    'details>summary:first-of-type:not([inert])',
    'details:not([inert])',
  ],
  ae = Ce.join(','),
  Se = typeof Element > 'u',
  q = Se
    ? function () {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  ie =
    !Se && Element.prototype.getRootNode
      ? function (n) {
          var e;
          return n == null || (e = n.getRootNode) === null || e === void 0 ? void 0 : e.call(n);
        }
      : function (n) {
          return n == null ? void 0 : n.ownerDocument;
        },
  re = function n(e, t) {
    var a;
    t === void 0 && (t = !0);
    var i = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, 'inert'),
      c = i === '' || i === 'true',
      r = c || (t && e && n(e.parentNode));
    return r;
  },
  Je = function (e) {
    var t,
      a = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, 'contenteditable');
    return a === '' || a === 'true';
  },
  ke = function (e, t, a) {
    if (re(e)) return [];
    var i = Array.prototype.slice.apply(e.querySelectorAll(ae));
    return t && q.call(e, ae) && i.unshift(e), (i = i.filter(a)), i;
  },
  xe = function n(e, t, a) {
    for (var i = [], c = Array.from(e); c.length; ) {
      var r = c.shift();
      if (!re(r, !1))
        if (r.tagName === 'SLOT') {
          var b = r.assignedElements(),
            h = b.length ? b : r.children,
            d = n(h, !0, a);
          a.flatten ? i.push.apply(i, d) : i.push({ scopeParent: r, candidates: d });
        } else {
          var m = q.call(r, ae);
          m && a.filter(r) && (t || !e.includes(r)) && i.push(r);
          var T = r.shadowRoot || (typeof a.getShadowRoot == 'function' && a.getShadowRoot(r)),
            w = !re(T, !1) && (!a.shadowRootFilter || a.shadowRootFilter(r));
          if (T && w) {
            var D = n(T === !0 ? r.children : T.children, !0, a);
            a.flatten ? i.push.apply(i, D) : i.push({ scopeParent: r, candidates: D });
          } else c.unshift.apply(c, r.children);
        }
    }
    return i;
  },
  Re = function (e) {
    return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
  },
  z = function (e) {
    if (!e) throw new Error('No node provided');
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Je(e)) && !Re(e) ? 0 : e.tabIndex;
  },
  Qe = function (e, t) {
    var a = z(e);
    return a < 0 && t && !Re(e) ? 0 : a;
  },
  He = function (e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  },
  je = function (e) {
    return e.tagName === 'INPUT';
  },
  Be = function (e) {
    return je(e) && e.type === 'hidden';
  },
  et = function (e) {
    var t =
      e.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(e.children).some(function (a) {
        return a.tagName === 'SUMMARY';
      });
    return t;
  },
  tt = function (e, t) {
    for (var a = 0; a < e.length; a++) if (e[a].checked && e[a].form === t) return e[a];
  },
  nt = function (e) {
    if (!e.name) return !0;
    var t = e.form || ie(e),
      a = function (b) {
        return t.querySelectorAll('input[type="radio"][name="' + b + '"]');
      },
      i;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      i = a(window.CSS.escape(e.name));
    else
      try {
        i = a(e.name);
      } catch (r) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            r.message
          ),
          !1
        );
      }
    var c = tt(i, e.form);
    return !c || c === e;
  },
  at = function (e) {
    return je(e) && e.type === 'radio';
  },
  it = function (e) {
    return at(e) && !nt(e);
  },
  rt = function (e) {
    var t,
      a = e && ie(e),
      i = (t = a) === null || t === void 0 ? void 0 : t.host,
      c = !1;
    if (a && a !== e) {
      var r, b, h;
      for (
        c = !!(
          ((r = i) !== null && r !== void 0 && (b = r.ownerDocument) !== null && b !== void 0 && b.contains(i)) ||
          (e != null && (h = e.ownerDocument) !== null && h !== void 0 && h.contains(e))
        );
        !c && i;

      ) {
        var d, m, T;
        (a = ie(i)),
          (i = (d = a) === null || d === void 0 ? void 0 : d.host),
          (c = !!((m = i) !== null && m !== void 0 && (T = m.ownerDocument) !== null && T !== void 0 && T.contains(i)));
      }
    }
    return c;
  },
  Te = function (e) {
    var t = e.getBoundingClientRect(),
      a = t.width,
      i = t.height;
    return a === 0 && i === 0;
  },
  ot = function (e, t) {
    var a = t.displayCheck,
      i = t.getShadowRoot;
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    var c = q.call(e, 'details>summary:first-of-type'),
      r = c ? e.parentElement : e;
    if (q.call(r, 'details:not([open]) *')) return !0;
    if (!a || a === 'full' || a === 'legacy-full') {
      if (typeof i == 'function') {
        for (var b = e; e; ) {
          var h = e.parentElement,
            d = ie(e);
          if (h && !h.shadowRoot && i(h) === !0) return Te(e);
          e.assignedSlot ? (e = e.assignedSlot) : !h && d !== e.ownerDocument ? (e = d.host) : (e = h);
        }
        e = b;
      }
      if (rt(e)) return !e.getClientRects().length;
      if (a !== 'legacy-full') return !0;
    } else if (a === 'non-zero-area') return Te(e);
    return !1;
  },
  st = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t; ) {
        if (t.tagName === 'FIELDSET' && t.disabled) {
          for (var a = 0; a < t.children.length; a++) {
            var i = t.children.item(a);
            if (i.tagName === 'LEGEND') return q.call(t, 'fieldset[disabled] *') ? !0 : !i.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  oe = function (e, t) {
    return !(t.disabled || re(t) || Be(t) || ot(t, e) || et(t) || st(t));
  },
  be = function (e, t) {
    return !(it(t) || z(t) < 0 || !oe(e, t));
  },
  ct = function (e) {
    var t = parseInt(e.getAttribute('tabindex'), 10);
    return !!(isNaN(t) || t >= 0);
  },
  ut = function n(e) {
    var t = [],
      a = [];
    return (
      e.forEach(function (i, c) {
        var r = !!i.scopeParent,
          b = r ? i.scopeParent : i,
          h = Qe(b, r),
          d = r ? n(i.candidates) : b;
        h === 0
          ? r
            ? t.push.apply(t, d)
            : t.push(b)
          : a.push({ documentOrder: c, tabIndex: h, item: i, isScope: r, content: d });
      }),
      a
        .sort(He)
        .reduce(function (i, c) {
          return c.isScope ? i.push.apply(i, c.content) : i.push(c.content), i;
        }, [])
        .concat(t)
    );
  },
  Ae = function (e, t) {
    t = t || {};
    var a;
    return (
      t.getShadowRoot
        ? (a = xe([e], t.includeContainer, {
            filter: be.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: ct,
          }))
        : (a = ke(e, t.includeContainer, be.bind(null, t))),
      ut(a)
    );
  },
  Ie = function (e, t) {
    t = t || {};
    var a;
    return (
      t.getShadowRoot
        ? (a = xe([e], t.includeContainer, { filter: oe.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot }))
        : (a = ke(e, t.includeContainer, oe.bind(null, t))),
      a
    );
  },
  V = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return q.call(e, ae) === !1 ? !1 : be(t, e);
  },
  lt = Ce.concat('iframe').join(','),
  te = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return q.call(e, lt) === !1 ? !1 : oe(t, e);
  };
const ft = Object.freeze(
  Object.defineProperty(
    { __proto__: null, focusable: Ie, getTabIndex: z, isFocusable: te, isTabbable: V, tabbable: Ae },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
/*!
 * focus-trap 7.5.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function we(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e &&
      (a = a.filter(function (i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable;
      })),
      t.push.apply(t, a);
  }
  return t;
}
function Ne(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? we(Object(t), !0).forEach(function (a) {
          dt(n, a, t[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : we(Object(t)).forEach(function (a) {
          Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(t, a));
        });
  }
  return n;
}
function dt(n, e, t) {
  return (
    (e = bt(e)),
    e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = t),
    n
  );
}
function vt(n, e) {
  if (typeof n != 'object' || n === null) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(n, e);
    if (typeof a != 'object') return a;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(n);
}
function bt(n) {
  var e = vt(n, 'string');
  return typeof e == 'symbol' ? e : String(e);
}
var Oe = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var a = e[e.length - 1];
        a !== t && a.pause();
      }
      var i = e.indexOf(t);
      i === -1 || e.splice(i, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var a = e.indexOf(t);
      a !== -1 && e.splice(a, 1), e.length > 0 && e[e.length - 1].unpause();
    },
  },
  ht = function (e) {
    return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
  },
  pt = function (e) {
    return (
      (e == null ? void 0 : e.key) === 'Escape' ||
      (e == null ? void 0 : e.key) === 'Esc' ||
      (e == null ? void 0 : e.keyCode) === 27
    );
  },
  H = function (e) {
    return (e == null ? void 0 : e.key) === 'Tab' || (e == null ? void 0 : e.keyCode) === 9;
  },
  gt = function (e) {
    return H(e) && !e.shiftKey;
  },
  mt = function (e) {
    return H(e) && e.shiftKey;
  },
  Fe = function (e) {
    return setTimeout(e, 0);
  },
  Ee = function (e, t) {
    var a = -1;
    return (
      e.every(function (i, c) {
        return t(i) ? ((a = c), !1) : !0;
      }),
      a
    );
  },
  X = function (e) {
    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) a[i - 1] = arguments[i];
    return typeof e == 'function' ? e.apply(void 0, a) : e;
  },
  B = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == 'function' ? e.composedPath()[0] : e.target;
  },
  yt = [],
  Tt = function (e, t) {
    var a = (t == null ? void 0 : t.document) || document,
      i = (t == null ? void 0 : t.trapStack) || yt,
      c = Ne(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: gt,
          isKeyBackward: mt,
        },
        t
      ),
      r = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0,
      },
      b,
      h = function (o, s, v) {
        return o && o[s] !== void 0 ? o[s] : c[v || s];
      },
      d = function (o, s) {
        var v = typeof (s == null ? void 0 : s.composedPath) == 'function' ? s.composedPath() : void 0;
        return r.containerGroups.findIndex(function (u) {
          var l = u.container,
            g = u.tabbableNodes;
          return (
            l.contains(o) ||
            (v == null ? void 0 : v.includes(l)) ||
            g.find(function (y) {
              return y === o;
            })
          );
        });
      },
      m = function (o) {
        var s = c[o];
        if (typeof s == 'function') {
          for (var v = arguments.length, u = new Array(v > 1 ? v - 1 : 0), l = 1; l < v; l++) u[l - 1] = arguments[l];
          s = s.apply(void 0, u);
        }
        if ((s === !0 && (s = void 0), !s)) {
          if (s === void 0 || s === !1) return s;
          throw new Error('`'.concat(o, '` was specified but was not a node, or did not return a node'));
        }
        var g = s;
        if (typeof s == 'string' && ((g = a.querySelector(s)), !g))
          throw new Error('`'.concat(o, '` as selector refers to no known node'));
        return g;
      },
      T = function () {
        var o = m('initialFocus');
        if (o === !1) return !1;
        if (o === void 0 || !te(o, c.tabbableOptions))
          if (d(a.activeElement) >= 0) o = a.activeElement;
          else {
            var s = r.tabbableGroups[0],
              v = s && s.firstTabbableNode;
            o = v || m('fallbackFocus');
          }
        if (!o) throw new Error('Your focus-trap needs to have at least one focusable element');
        return o;
      },
      w = function () {
        if (
          ((r.containerGroups = r.containers.map(function (o) {
            var s = Ae(o, c.tabbableOptions),
              v = Ie(o, c.tabbableOptions),
              u = s.length > 0 ? s[0] : void 0,
              l = s.length > 0 ? s[s.length - 1] : void 0,
              g = v.find(function (S) {
                return V(S);
              }),
              y = v
                .slice()
                .reverse()
                .find(function (S) {
                  return V(S);
                }),
              C = !!s.find(function (S) {
                return z(S) > 0;
              });
            return {
              container: o,
              tabbableNodes: s,
              focusableNodes: v,
              posTabIndexesFound: C,
              firstTabbableNode: u,
              lastTabbableNode: l,
              firstDomTabbableNode: g,
              lastDomTabbableNode: y,
              nextTabbableNode: function (F) {
                var W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                  U = s.indexOf(F);
                return U < 0
                  ? W
                    ? v.slice(v.indexOf(F) + 1).find(function (Z) {
                        return V(Z);
                      })
                    : v
                        .slice(0, v.indexOf(F))
                        .reverse()
                        .find(function (Z) {
                          return V(Z);
                        })
                  : s[U + (W ? 1 : -1)];
              },
            };
          })),
          (r.tabbableGroups = r.containerGroups.filter(function (o) {
            return o.tabbableNodes.length > 0;
          })),
          r.tabbableGroups.length <= 0 && !m('fallbackFocus'))
        )
          throw new Error(
            'Your focus-trap must have at least one container with at least one tabbable node in it at all times'
          );
        if (
          r.containerGroups.find(function (o) {
            return o.posTabIndexesFound;
          }) &&
          r.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
          );
      },
      D = function N(o) {
        var s = o.activeElement;
        if (s) return s.shadowRoot && s.shadowRoot.activeElement !== null ? N(s.shadowRoot) : s;
      },
      O = function N(o) {
        if (o !== !1 && o !== D(document)) {
          if (!o || !o.focus) {
            N(T());
            return;
          }
          o.focus({ preventScroll: !!c.preventScroll }), (r.mostRecentlyFocusedNode = o), ht(o) && o.select();
        }
      },
      j = function (o) {
        var s = m('setReturnFocus', o);
        return s || (s === !1 ? !1 : o);
      },
      A = function (o) {
        var s = o.target,
          v = o.event,
          u = o.isBackward,
          l = u === void 0 ? !1 : u;
        (s = s || B(v)), w();
        var g = null;
        if (r.tabbableGroups.length > 0) {
          var y = d(s, v),
            C = y >= 0 ? r.containerGroups[y] : void 0;
          if (y < 0)
            l
              ? (g = r.tabbableGroups[r.tabbableGroups.length - 1].lastTabbableNode)
              : (g = r.tabbableGroups[0].firstTabbableNode);
          else if (l) {
            var S = Ee(r.tabbableGroups, function (ce) {
              var ue = ce.firstTabbableNode;
              return s === ue;
            });
            if (
              (S < 0 &&
                (C.container === s ||
                  (te(s, c.tabbableOptions) && !V(s, c.tabbableOptions) && !C.nextTabbableNode(s, !1))) &&
                (S = y),
              S >= 0)
            ) {
              var F = S === 0 ? r.tabbableGroups.length - 1 : S - 1,
                W = r.tabbableGroups[F];
              g = z(s) >= 0 ? W.lastTabbableNode : W.lastDomTabbableNode;
            } else H(v) || (g = C.nextTabbableNode(s, !1));
          } else {
            var U = Ee(r.tabbableGroups, function (ce) {
              var ue = ce.lastTabbableNode;
              return s === ue;
            });
            if (
              (U < 0 &&
                (C.container === s ||
                  (te(s, c.tabbableOptions) && !V(s, c.tabbableOptions) && !C.nextTabbableNode(s))) &&
                (U = y),
              U >= 0)
            ) {
              var Z = U === r.tabbableGroups.length - 1 ? 0 : U + 1,
                me = r.tabbableGroups[Z];
              g = z(s) >= 0 ? me.firstTabbableNode : me.firstDomTabbableNode;
            } else H(v) || (g = C.nextTabbableNode(s));
          }
        } else g = m('fallbackFocus');
        return g;
      },
      k = function (o) {
        var s = B(o);
        if (!(d(s, o) >= 0)) {
          if (X(c.clickOutsideDeactivates, o)) {
            b.deactivate({ returnFocus: c.returnFocusOnDeactivate });
            return;
          }
          X(c.allowOutsideClick, o) || o.preventDefault();
        }
      },
      I = function (o) {
        var s = B(o),
          v = d(s, o) >= 0;
        if (v || s instanceof Document) v && (r.mostRecentlyFocusedNode = s);
        else {
          o.stopImmediatePropagation();
          var u,
            l = !0;
          if (r.mostRecentlyFocusedNode)
            if (z(r.mostRecentlyFocusedNode) > 0) {
              var g = d(r.mostRecentlyFocusedNode),
                y = r.containerGroups[g].tabbableNodes;
              if (y.length > 0) {
                var C = y.findIndex(function (S) {
                  return S === r.mostRecentlyFocusedNode;
                });
                C >= 0 &&
                  (c.isKeyForward(r.recentNavEvent)
                    ? C + 1 < y.length && ((u = y[C + 1]), (l = !1))
                    : C - 1 >= 0 && ((u = y[C - 1]), (l = !1)));
              }
            } else
              r.containerGroups.some(function (S) {
                return S.tabbableNodes.some(function (F) {
                  return z(F) > 0;
                });
              }) || (l = !1);
          else l = !1;
          l && (u = A({ target: r.mostRecentlyFocusedNode, isBackward: c.isKeyBackward(r.recentNavEvent) })),
            O(u || r.mostRecentlyFocusedNode || T());
        }
        r.recentNavEvent = void 0;
      },
      L = function (o) {
        var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        r.recentNavEvent = o;
        var v = A({ event: o, isBackward: s });
        v && (H(o) && o.preventDefault(), O(v));
      },
      x = function (o) {
        if (pt(o) && X(c.escapeDeactivates, o) !== !1) {
          o.preventDefault(), b.deactivate();
          return;
        }
        (c.isKeyForward(o) || c.isKeyBackward(o)) && L(o, c.isKeyBackward(o));
      },
      P = function (o) {
        var s = B(o);
        d(s, o) >= 0 ||
          X(c.clickOutsideDeactivates, o) ||
          X(c.allowOutsideClick, o) ||
          (o.preventDefault(), o.stopImmediatePropagation());
      },
      M = function () {
        if (r.active)
          return (
            Oe.activateTrap(i, b),
            (r.delayInitialFocusTimer = c.delayInitialFocus
              ? Fe(function () {
                  O(T());
                })
              : O(T())),
            a.addEventListener('focusin', I, !0),
            a.addEventListener('mousedown', k, { capture: !0, passive: !1 }),
            a.addEventListener('touchstart', k, { capture: !0, passive: !1 }),
            a.addEventListener('click', P, { capture: !0, passive: !1 }),
            a.addEventListener('keydown', x, { capture: !0, passive: !1 }),
            b
          );
      },
      R = function () {
        if (r.active)
          return (
            a.removeEventListener('focusin', I, !0),
            a.removeEventListener('mousedown', k, !0),
            a.removeEventListener('touchstart', k, !0),
            a.removeEventListener('click', P, !0),
            a.removeEventListener('keydown', x, !0),
            b
          );
      },
      _ = function (o) {
        var s = o.some(function (v) {
          var u = Array.from(v.removedNodes);
          return u.some(function (l) {
            return l === r.mostRecentlyFocusedNode;
          });
        });
        s && O(T());
      },
      $ = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(_) : void 0,
      K = function () {
        $ &&
          ($.disconnect(),
          r.active &&
            !r.paused &&
            r.containers.map(function (o) {
              $.observe(o, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (b = {
        get active() {
          return r.active;
        },
        get paused() {
          return r.paused;
        },
        activate: function (o) {
          if (r.active) return this;
          var s = h(o, 'onActivate'),
            v = h(o, 'onPostActivate'),
            u = h(o, 'checkCanFocusTrap');
          u || w(),
            (r.active = !0),
            (r.paused = !1),
            (r.nodeFocusedBeforeActivation = a.activeElement),
            s == null || s();
          var l = function () {
            u && w(), M(), K(), v == null || v();
          };
          return u ? (u(r.containers.concat()).then(l, l), this) : (l(), this);
        },
        deactivate: function (o) {
          if (!r.active) return this;
          var s = Ne(
            {
              onDeactivate: c.onDeactivate,
              onPostDeactivate: c.onPostDeactivate,
              checkCanReturnFocus: c.checkCanReturnFocus,
            },
            o
          );
          clearTimeout(r.delayInitialFocusTimer),
            (r.delayInitialFocusTimer = void 0),
            R(),
            (r.active = !1),
            (r.paused = !1),
            K(),
            Oe.deactivateTrap(i, b);
          var v = h(s, 'onDeactivate'),
            u = h(s, 'onPostDeactivate'),
            l = h(s, 'checkCanReturnFocus'),
            g = h(s, 'returnFocus', 'returnFocusOnDeactivate');
          v == null || v();
          var y = function () {
            Fe(function () {
              g && O(j(r.nodeFocusedBeforeActivation)), u == null || u();
            });
          };
          return g && l ? (l(j(r.nodeFocusedBeforeActivation)).then(y, y), this) : (y(), this);
        },
        pause: function (o) {
          if (r.paused || !r.active) return this;
          var s = h(o, 'onPause'),
            v = h(o, 'onPostPause');
          return (r.paused = !0), s == null || s(), R(), K(), v == null || v(), this;
        },
        unpause: function (o) {
          if (!r.paused || !r.active) return this;
          var s = h(o, 'onUnpause'),
            v = h(o, 'onPostUnpause');
          return (r.paused = !1), s == null || s(), w(), M(), K(), v == null || v(), this;
        },
        updateContainerElements: function (o) {
          var s = [].concat(o).filter(Boolean);
          return (
            (r.containers = s.map(function (v) {
              return typeof v == 'string' ? a.querySelector(v) : v;
            })),
            r.active && w(),
            K(),
            this
          );
        },
      }),
      b.updateContainerElements(e),
      b
    );
  };
const wt = Object.freeze(
    Object.defineProperty({ __proto__: null, createFocusTrap: Tt }, Symbol.toStringTag, { value: 'Module' })
  ),
  Nt = De(wt),
  Ot = De(ft);
function Y(n) {
  '@babel/helpers - typeof';
  return (
    (Y =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Y(n)
  );
}
function Ft(n, e) {
  if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function Et(n, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(n, Le(a.key), a);
  }
}
function Dt(n, e, t) {
  return e && Et(n.prototype, e), Object.defineProperty(n, 'prototype', { writable: !1 }), n;
}
function Ct(n, e) {
  if (typeof e != 'function' && e !== null) throw new TypeError('Super expression must either be null or a function');
  (n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    e && he(n, e);
}
function he(n, e) {
  return (
    (he = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (a, i) {
          return (a.__proto__ = i), a;
        }),
    he(n, e)
  );
}
function St(n) {
  var e = xt();
  return function () {
    var a = se(n),
      i;
    if (e) {
      var c = se(this).constructor;
      i = Reflect.construct(a, arguments, c);
    } else i = a.apply(this, arguments);
    return kt(this, i);
  };
}
function kt(n, e) {
  if (e && (Y(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Q(n);
}
function Q(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function xt() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function se(n) {
  return (
    (se = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    se(n)
  );
}
function Rt(n, e, t) {
  return (
    (e = Le(e)),
    e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = t),
    n
  );
}
function Le(n) {
  var e = jt(n, 'string');
  return Y(e) === 'symbol' ? e : String(e);
}
function jt(n, e) {
  if (Y(n) !== 'object' || n === null) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(n, e);
    if (Y(a) !== 'object') return a;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(n);
}
var ee = E,
  p = Pe,
  At = Nt,
  It = At.createFocusTrap,
  Lt = Ot,
  Mt = Lt.isFocusable,
  ge = (function (n) {
    Ct(t, n);
    var e = St(t);
    function t(a) {
      var i;
      Ft(this, t),
        (i = e.call(this, a)),
        Rt(Q(i), 'getNodeForOption', function (b) {
          var h,
            d = (h = this.internalOptions[b]) !== null && h !== void 0 ? h : this.originalOptions[b];
          if (typeof d == 'function') {
            for (var m = arguments.length, T = new Array(m > 1 ? m - 1 : 0), w = 1; w < m; w++) T[w - 1] = arguments[w];
            d = d.apply(void 0, T);
          }
          if ((d === !0 && (d = void 0), !d)) {
            if (d === void 0 || d === !1) return d;
            throw new Error('`'.concat(b, '` was specified but was not a node, or did not return a node'));
          }
          var D = d;
          if (typeof d == 'string') {
            var O;
            if (((D = (O = this.getDocument()) === null || O === void 0 ? void 0 : O.querySelector(d)), !D))
              throw new Error('`'.concat(b, '` as selector refers to no known node'));
          }
          return D;
        }),
        (i.handleDeactivate = i.handleDeactivate.bind(Q(i))),
        (i.handlePostDeactivate = i.handlePostDeactivate.bind(Q(i))),
        (i.handleClickOutsideDeactivates = i.handleClickOutsideDeactivates.bind(Q(i))),
        (i.internalOptions = {
          returnFocusOnDeactivate: !1,
          checkCanReturnFocus: null,
          onDeactivate: i.handleDeactivate,
          onPostDeactivate: i.handlePostDeactivate,
          clickOutsideDeactivates: i.handleClickOutsideDeactivates,
        }),
        (i.originalOptions = {
          returnFocusOnDeactivate: !0,
          onDeactivate: null,
          onPostDeactivate: null,
          checkCanReturnFocus: null,
          clickOutsideDeactivates: !1,
        });
      var c = a.focusTrapOptions;
      for (var r in c)
        if (Object.prototype.hasOwnProperty.call(c, r)) {
          if (
            r === 'returnFocusOnDeactivate' ||
            r === 'onDeactivate' ||
            r === 'onPostDeactivate' ||
            r === 'checkCanReturnFocus' ||
            r === 'clickOutsideDeactivates'
          ) {
            i.originalOptions[r] = c[r];
            continue;
          }
          i.internalOptions[r] = c[r];
        }
      return (i.outsideClick = null), (i.focusTrapElements = a.containerElements || []), i.updatePreviousElement(), i;
    }
    return (
      Dt(t, [
        {
          key: 'getDocument',
          value: function () {
            return this.props.focusTrapOptions.document || (typeof document < 'u' ? document : void 0);
          },
        },
        {
          key: 'getReturnFocusNode',
          value: function () {
            var i = this.getNodeForOption('setReturnFocus', this.previouslyFocusedElement);
            return i || (i === !1 ? !1 : this.previouslyFocusedElement);
          },
        },
        {
          key: 'updatePreviousElement',
          value: function () {
            var i = this.getDocument();
            i && (this.previouslyFocusedElement = i.activeElement);
          },
        },
        {
          key: 'deactivateTrap',
          value: function () {
            !this.focusTrap ||
              !this.focusTrap.active ||
              this.focusTrap.deactivate({
                returnFocus: !1,
                checkCanReturnFocus: null,
                onDeactivate: this.originalOptions.onDeactivate,
              });
          },
        },
        {
          key: 'handleClickOutsideDeactivates',
          value: function (i) {
            var c =
              typeof this.originalOptions.clickOutsideDeactivates == 'function'
                ? this.originalOptions.clickOutsideDeactivates.call(null, i)
                : this.originalOptions.clickOutsideDeactivates;
            return c && (this.outsideClick = { target: i.target, allowDeactivation: c }), c;
          },
        },
        {
          key: 'handleDeactivate',
          value: function () {
            this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap();
          },
        },
        {
          key: 'handlePostDeactivate',
          value: function () {
            var i = this,
              c = function () {
                var b = i.getReturnFocusNode(),
                  h = !!(
                    i.originalOptions.returnFocusOnDeactivate &&
                    b !== null &&
                    b !== void 0 &&
                    b.focus &&
                    (!i.outsideClick ||
                      (i.outsideClick.allowDeactivation &&
                        !Mt(i.outsideClick.target, i.internalOptions.tabbableOptions)))
                  ),
                  d = i.internalOptions.preventScroll,
                  m = d === void 0 ? !1 : d;
                h && b.focus({ preventScroll: m }),
                  i.originalOptions.onPostDeactivate && i.originalOptions.onPostDeactivate.call(null),
                  (i.outsideClick = null);
              };
            this.originalOptions.checkCanReturnFocus
              ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(c, c)
              : c();
          },
        },
        {
          key: 'setupFocusTrap',
          value: function () {
            if (this.focusTrap)
              this.props.active &&
                !this.focusTrap.active &&
                (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
            else {
              var i = this.focusTrapElements.some(Boolean);
              i &&
                ((this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions)),
                this.props.active && this.focusTrap.activate(),
                this.props.paused && this.focusTrap.pause());
            }
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            this.props.active && this.setupFocusTrap();
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (i) {
            if (this.focusTrap) {
              i.containerElements !== this.props.containerElements &&
                this.focusTrap.updateContainerElements(this.props.containerElements);
              var c = !i.active && this.props.active,
                r = i.active && !this.props.active,
                b = !i.paused && this.props.paused,
                h = i.paused && !this.props.paused;
              if ((c && (this.updatePreviousElement(), this.focusTrap.activate()), r)) {
                this.deactivateTrap();
                return;
              }
              b && this.focusTrap.pause(), h && this.focusTrap.unpause();
            } else
              i.containerElements !== this.props.containerElements &&
                (this.focusTrapElements = this.props.containerElements),
                this.props.active && (this.updatePreviousElement(), this.setupFocusTrap());
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.deactivateTrap();
          },
        },
        {
          key: 'render',
          value: function () {
            var i = this,
              c = this.props.children ? ee.Children.only(this.props.children) : void 0;
            if (c) {
              if (c.type && c.type === ee.Fragment)
                throw new Error(
                  'A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.'
                );
              var r = function (d) {
                  var m = i.props.containerElements;
                  c && (typeof c.ref == 'function' ? c.ref(d) : c.ref && (c.ref.current = d)),
                    (i.focusTrapElements = m || [d]);
                },
                b = ee.cloneElement(c, { ref: r });
              return b;
            }
            return null;
          },
        },
      ]),
      t
    );
  })(ee.Component),
  J = typeof Element > 'u' ? Function : Element;
ge.propTypes = {
  active: p.bool,
  paused: p.bool,
  focusTrapOptions: p.shape({
    document: p.object,
    onActivate: p.func,
    onPostActivate: p.func,
    checkCanFocusTrap: p.func,
    onPause: p.func,
    onPostPause: p.func,
    onUnpause: p.func,
    onPostUnpause: p.func,
    onDeactivate: p.func,
    onPostDeactivate: p.func,
    checkCanReturnFocus: p.func,
    initialFocus: p.oneOfType([p.instanceOf(J), p.string, p.bool, p.func]),
    fallbackFocus: p.oneOfType([p.instanceOf(J), p.string, p.func]),
    escapeDeactivates: p.oneOfType([p.bool, p.func]),
    clickOutsideDeactivates: p.oneOfType([p.bool, p.func]),
    returnFocusOnDeactivate: p.bool,
    setReturnFocus: p.oneOfType([p.instanceOf(J), p.string, p.bool, p.func]),
    allowOutsideClick: p.oneOfType([p.bool, p.func]),
    preventScroll: p.bool,
    tabbableOptions: p.shape({
      displayCheck: p.oneOf(['full', 'legacy-full', 'non-zero-area', 'none']),
      getShadowRoot: p.oneOfType([p.bool, p.func]),
    }),
    trapStack: p.array,
    isKeyForward: p.func,
    isKeyBackward: p.func,
  }),
  containerElements: p.arrayOf(p.instanceOf(J)),
  children: p.oneOfType([p.element, p.instanceOf(J)]),
};
ge.defaultProps = { active: !0, paused: !1, focusTrapOptions: {}, _createFocusTrap: It };
var Kt = ge;
const Pt = Ke(Kt),
  _t = ({
    id: n,
    title: e,
    primaryBtnProps: t,
    secondaryBtnProps: a,
    linkBtnProps: i,
    hasSecondaryBtn: c,
    hasLinkBtn: r,
    children: b,
    hasFooter: h,
    open: d,
    onClose: m,
  }) => {
    const T = E.useRef(null);
    E.useEffect(() => {
      d ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll');
    }, [d]);
    const w = d ? { 'aria-labelledby': `${n}-description` } : {},
      D = (O) => {
        T.current && !T.current.contains(O.target) && m();
      };
    return f.jsx('div', {
      className: 'gnb-modal left',
      id: n + Math.random().toString(36).substring(2, 9),
      role: 'dialog',
      'aria-modal': 'true',
      'aria-hidden': !d,
      ...w,
      onClick: D,
      children:
        d &&
        f.jsx(Pt, {
          focusTrapOptions: { clickOutsideDeactivates: !0, initialFocus: !1 },
          children: f.jsxs('dialog', {
            ref: T,
            children: [
              f.jsxs('button', {
                className: 'gnb-btn-close',
                onClick: m,
                children: [
                  f.jsx('span', { className: 'sr-only', children: 'Close modal window' }),
                  f.jsx(_e, { icon: $e }),
                ],
              }),
              f.jsx('div', { className: 'gnb-modal-header', children: f.jsx('h2', { id: `${n}-title`, children: e }) }),
              f.jsx('div', { className: 'gnb-modal-body', id: `${n}-description`, children: b }),
              h &&
                f.jsxs('div', {
                  className: 'gnb-modal-footer',
                  children: [
                    f.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: f.jsx(le, {
                        type: 'button',
                        variant: t != null && t.variant ? (t == null ? void 0 : t.variant) : 'primary',
                        label: t == null ? void 0 : t.label,
                        size: t != null && t.size ? t.size : 'small',
                        onClick: t == null ? void 0 : t.onClick,
                        disabled: t == null ? void 0 : t.disabled,
                      }),
                    }),
                    c &&
                      f.jsx(le, {
                        variant: a != null && a.variant ? a.variant : 'secondary',
                        label: a == null ? void 0 : a.label,
                        size: a != null && a.size ? a.size : 'small',
                        onClick: a == null ? void 0 : a.onClick,
                        disabled: a == null ? void 0 : a.disabled,
                      }),
                    r &&
                      f.jsx(le, {
                        variant: 'tertiary',
                        label: i == null ? void 0 : i.label,
                        onClick: i == null ? void 0 : i.onClick,
                        disabled: i == null ? void 0 : i.disabled,
                        size: i != null && i.size ? i.size : 'small',
                      }),
                  ],
                }),
            ],
          }),
        }),
    });
  },
  fe = ({
    variant: n,
    type: e,
    description: t,
    inPageHeading: a,
    isOpen: i,
    setIsOpen: c,
    hasMarginTop: r,
    hasTimeout: b = !0,
  }) => {
    const [h, d] = E.useState(!1),
      m = NaN;
    return (
      E.useEffect(() => {
        i && d(!1);
      }, [i]),
      E.useEffect(() => {
        const T = b
          ? setTimeout(() => {
              d(!0), c(!1);
            }, m)
          : void 0;
        return () => clearTimeout(T);
      }, [i, n, e, t, a, c, h, b]),
      h
        ? null
        : i
        ? f.jsxs(f.Fragment, {
            children: [
              n !== 'global' &&
                f.jsxs('div', {
                  className: ne('no-margin-bottom', {
                    'gnb-alert-info-inline': n === 'inline' && e === 'info',
                    'gnb-alert-success-inline': n === 'inline' && e === 'success',
                    'gnb-alert-warning-inline': n === 'inline' && e === 'warning',
                    'gnb-alert-critical-inline': n === 'inline' && e === 'critical',
                    'gnb-alert-info': n === 'inPage' && e === 'info',
                    'gnb-alert-success': n === 'inPage' && e === 'success',
                    'gnb-alert-warning': n === 'inPage' && e === 'warning',
                    'gnb-alert-critical margin-bottom-lg no-margin-top': n === 'inPage' && e === 'critical' && !r,
                    'gnb-alert-critical margin-bottom-xs margin-top-md': n === 'inPage' && e === 'critical' && r,
                  }),
                  role: 'alert',
                  children: [
                    n === 'inPage' && a && f.jsx('h2', { className: 'left', children: a }),
                    f.jsx('div', { className: 'left', children: t }),
                  ],
                }),
              n === 'global' &&
                f.jsx('section', {
                  className: ne({
                    'gnb-alert-info-global': e === 'info',
                    'gnb-alert-warning-global': e === 'warning',
                    'gnb-alert-critical-global': e === 'critical',
                  }),
                  children: f.jsxs('div', {
                    className: 'container-fluid',
                    children: [
                      typeof t == 'string' && f.jsx('p', { className: 'left', children: t }),
                      typeof t != 'string' && t,
                    ],
                  }),
                }),
            ],
          })
        : null
    );
  },
  Wt = ({
    label: n = '',
    type: e,
    helperText: t,
    required: a = !1,
    placeholder: i,
    value: c,
    onChange: r,
    onKeyUp: b,
    onBlur: h,
    onFocus: d,
    error: m,
    valid: T,
    id: w,
    maxlength: D,
    hasTooltipModal: O = !1,
    tooltipBody: j = '',
    tooltipTitle: A = '',
    isTooltipModalOpen: k = !1,
    setIsTooltipModalOpen: I = () => {},
    setTextInputRef: L,
  }) => {
    const x = Ue(n) + '-error-id',
      P = m ? { 'aria-labelledby': x } : {},
      M = () => I(!1);
    return (
      E.useEffect(() => {
        const R = (_) => {
          _.key === 'Escape' && M();
        };
        return (
          k && window.addEventListener('keydown', R),
          () => {
            window.removeEventListener('keydown', R);
          }
        );
      }, [k]),
      f.jsxs(f.Fragment, {
        children: [
          f.jsxs('form', {
            onSubmit: (R) => R.preventDefault(),
            className: ne('gnb-form-input', m ? 'error' : '', T ? 'valid' : ''),
            noValidate: !0,
            children: [
              f.jsxs('label', {
                className: 'left',
                htmlFor: w || n,
                children: [
                  !O && f.jsxs('span', { children: [n, a && f.jsx('span', { className: 'required', children: '*' })] }),
                  O &&
                    f.jsxs('a', {
                      href: '#',
                      tabIndex: 0,
                      'data-target': w || n,
                      'aria-haspopup': 'dialog',
                      'aria-controls': w || n,
                      className: 'modal-button info gnb-tooltip-link',
                      onClick: () => I(!0),
                      children: [n, a && f.jsx('span', { className: 'required', children: '*' })],
                    }),
                ],
              }),
              t && f.jsx('div', { className: 'gnb-form-helper-text left', children: t }),
              f.jsx('input', {
                type: e,
                name: n,
                id: w || n,
                required: a,
                value: c,
                placeholder: i,
                onChange: r,
                ...P,
                'aria-invalid': !!m,
                className: 'text-input',
                maxLength: D,
                onFocus: d,
                onBlur: h,
                onKeyUp: b,
                ref: (R) => {
                  L && L(R);
                },
              }),
              m && f.jsx(de, { id: x, error: m, classes: e === 'tel' ? 'tel-input' : '' }),
            ],
          }),
          k && f.jsx(_t, { id: `tooltip-input-modal-${w || n}`, title: A, open: k, onClose: M, children: j }),
        ],
      })
    );
  };
function Zt(n, e, t) {
  return /^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,3})+$/.test(n) ? (e(''), !0) : (e(t), !1);
}
function Xt(n, e, t) {
  return /^\+1[0-9]{10}$/.test(n) ? (e(''), !0) : (e(t), !1);
}
function $t(n) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_!,.@#$%&'*();:~? -]*$/.test(n);
}
const Jt = (n, e) => {
  n.target.value.length > 2 ? e(!1) : e(!0);
};
function Qt(n) {
  var t;
  const e = [];
  for (const a of n) {
    const i = (t = document == null ? void 0 : document.getElementById(a)) == null ? void 0 : t.checked;
    e.push({ value: a, checked: i });
  }
  return e;
}
function Ht(n) {
  return n.replace(/[^\w\s]/gi, '');
}
function Ut(n) {
  return n.replace(/\s/g, '');
}
function Bt(n) {
  return Ut(n).length === 6 || n.toUpperCase() === 'NA';
}
function en(n) {
  return n.trim().length <= 8 && n.trim().length >= 1;
}
function tn(n) {
  return n.trim().length >= 1 && $t(n);
}
function nn(n) {
  return n.trim().length >= 0;
}
const an = (n, e, t) => {
  let a;
  return n === 'profanity' && (a = e), n === 'invalid-custom-name' && (a = t), a;
};
function zt({ resendCode: n, isResendCodeDisabled: e, type: t }) {
  const { t: a } = pe(),
    i = () => {
      n();
    };
  return f.jsxs(f.Fragment, {
    children: [
      f.jsx('p', {
        className: 'margin-bottom-sm',
        children: a(
          t === 'email' ? 'authentication.checkEmailScreen.description1' : 'authentication.phoneCodeScreen.description1'
        ),
      }),
      t === 'phone' &&
        f.jsxs('p', {
          className: 'margin-bottom-sm',
          children: [' ', a('authentication.phoneCodeScreen.description2')],
        }),
      f.jsx(ve, {
        i18nKey:
          t === 'email'
            ? e
              ? 'authentication.checkEmailScreen.description2'
              : 'authentication.checkEmailScreen.description3'
            : e
            ? 'authentication.phoneCodeScreen.description3'
            : 'authentication.phoneCodeScreen.description4',
        components: { 1: f.jsx('a', { href: '#', onClick: i, children: 'Resend Code' }) },
      }),
    ],
  });
}
function Vt({
  alignment: n,
  codes: e,
  setCodes: t,
  handleResendCodeClick: a,
  session: i,
  type: c,
  setShowSuccessAlert: r,
  setSuccessMsg: b,
  setRefreshData: h,
  setHasSystemError: d,
  hasInvalidCodeError: m,
  setHasInvalidCodeError: T,
  hasExpiredCodeError: w,
  setHasExpiredCodeError: D,
  validCodes: O,
  setValidCode: j,
  setIsAuthenticateEmailModalOpen: A,
  setIsAuthenticateSMSNumberModalOpen: k,
}) {
  const I = ze(),
    { t: L } = pe(),
    x = E.useRef([]),
    { state: P } = We(),
    { hasSMSReminders: M } = P.notifications,
    { phoneNumber: R } = P.accountSettings,
    _ = (u, l) => {
      const g = [...e];
      if (isNaN(Number(u.target.value))) {
        g[l] = '';
        return;
      }
      (g[l] = u.target.value), t(g), u.target.value && l < e.length - 1 && x.current[l + 1].focus();
    },
    $ = (u, l) => {
      const g = u.key.toLowerCase();
      (g === 'backspace' || g === 'delete') && !e[l] && l > 0 && x.current[l - 1].focus(),
        g === 'enter' && e[l] && l < e.length - 1 && x.current[l + 1].focus();
    },
    K = (u) => {
      u.preventDefault();
      const l = u.clipboardData.getData('text').trim();
      if (l.split('').some((y) => isNaN(Number(y))) || l.length !== e.length) {
        t(Array(6).fill('')), T('invalid-code');
        return;
      }
      t(l.split(''));
    };
  E.useEffect(() => {
    if (!e.some((u) => !u)) {
      const u = e.join('');
      j(u);
    }
  }, [e]);
  const N = f.jsx(ve, {
      i18nKey: c === 'updateAccountEmail' ? 'errorsMsg.invalidCodeEmail' : 'errorsMsg.invalidCodeSMS',
      components: { 1: f.jsx('a', { href: '#', onClick: a, children: 'RESEND CODE' }) },
    }),
    o = f.jsx(ve, {
      i18nKey: c === 'updateAccountEmail' ? 'errorsMsg.expiredCodeEmail' : 'errorsMsg.expiredCodeSMS',
      components: { 1: f.jsx('a', { href: '#', onClick: a, children: 'RESEND CODE' }) },
    });
  E.useEffect(() => {
    O && O.length === 6 && (T(''), D(''), s());
  }, [O]);
  const s = () => {
      if ((d(!1), c === 'updateAccountEmail'))
        G.verifyChangeEmailOTP({ session: { token: i }, otp: O })
          .then(() => {
            A && A(!1), r(!0), b && b('generic-success'), h && h(!0);
          })
          .catch((u) => {
            var l, g;
            ((l = u == null ? void 0 : u.response) == null ? void 0 : l.status) === 400
              ? T('invalid-code')
              : ((g = u == null ? void 0 : u.response) == null ? void 0 : g.status) === 401
              ? D('expired-code')
              : d(!0),
              console.error(u);
          });
      else if (c === 'updateAccountSMSNumber')
        G.verifyChangeSMSNumberOTP({ session: { token: i }, otp: O, activateTextReminders: M && !R })
          .then(() => {
            k && k(!1), r(!0), b && b('phone-success'), h && h(!0);
          })
          .catch((u) => {
            var l, g;
            ((l = u == null ? void 0 : u.response) == null ? void 0 : l.status) === 400
              ? T('invalid-code')
              : ((g = u == null ? void 0 : u.response) == null ? void 0 : g.status) === 401
              ? D('expired-code')
              : d(!0),
              console.error(u);
          });
      else {
        const u = Ve(Xe(new Date(), 5), qe);
        G.verifyOTP({ session: { token: i }, otp: O, expiryDate: u })
          .then(() => {
            I('/');
          })
          .catch((l) => {
            var g, y;
            ((g = l == null ? void 0 : l.response) == null ? void 0 : g.status) === 400
              ? T('invalid-code')
              : ((y = l == null ? void 0 : l.response) == null ? void 0 : y.status) === 401
              ? D('expired-code')
              : d(!0),
              console.error(l);
          });
      }
    },
    v = () => {
      let u;
      return (
        m
          ? (u = { 'aria-labelledby': 'invalid-code-error' })
          : w
          ? (u = { 'aria-labelledby': 'expired-code-error' })
          : (u = {}),
        u
      );
    };
  return f.jsxs('fieldset', {
    className: 'codeContainer',
    children: [
      f.jsx('legend', { className: 'sr-only', children: L('authentication.codeAuthentication.fieldLegend') }),
      f.jsx('div', {
        className: ne('inputs', { 'left-align': n === 'left', 'center-align': n === 'center' }),
        children:
          e.length === 6 &&
          e.map((u, l) => {
            const g = `digit-${(l + 1).toString()}`;
            return f.jsxs(
              E.Fragment,
              {
                children: [
                  f.jsx('label', {
                    className: 'sr-only',
                    htmlFor: g,
                    children: `${L('authentication.codeAuthentication.label')} ${l + 1}`,
                  }),
                  f.jsx('input', {
                    className: 'input',
                    type: 'text',
                    id: g,
                    name: g,
                    inputMode: 'numeric',
                    maxLength: 1,
                    value: u,
                    onChange: (y) => _(y, l),
                    onKeyDown: (y) => $(y, l),
                    onPaste: (y) => K(y),
                    ref: (y) => (x.current[l] = y),
                    'aria-invalid': !!(w || m),
                    ...v(),
                  }),
                ],
              },
              g
            );
          }),
      }),
      m &&
        f.jsx('div', {
          className: 'gnb-form-input error',
          children: f.jsx(de, { error: m === 'invalid-code' ? N : '', id: 'invalid-code-error' }),
        }),
      w &&
        f.jsx('div', {
          className: 'gnb-form-input error',
          children: f.jsx(de, { error: w === 'expired-code' ? o : '', id: 'expired-code-error' }),
        }),
    ],
  });
}
const rn = ({
  alignment: n = 'center',
  session: e,
  type: t,
  setShowSuccessAlert: a,
  setSuccessMsg: i,
  setRefreshData: c,
  rememberMeChecked: r,
  length: b,
  email: h,
  setIsAuthenticateEmailModalOpen: d,
  smsNumber: m,
  setIsAuthenticateSMSNumberModalOpen: T,
  smsLanguage: w,
}) => {
  const { setSessionCookie: D, getSession: O } = Ge(),
    { t: j } = pe(),
    A = Array(b).fill(''),
    [k, I] = E.useState(A),
    [L, x] = E.useState(!1),
    [P, M] = E.useState(''),
    [R, _] = E.useState(''),
    [$, K] = E.useState(''),
    [N, o] = E.useState(!1),
    [s, v] = E.useState(!1),
    [u, l] = E.useState(!0),
    g = NaN,
    y = (F) => {
      D(F, r), I(A), o(!0);
    },
    C = (F) => {
      x(!0), o(!1), console.error(F);
    },
    S = () => {
      if ((_(''), K(''), M(''), u)) {
        console.error('Reset code not yet available.'), v(!0);
        return;
      }
      t === 'updateAccountEmail'
        ? G.createChangeEmailOTP({ session: { token: O() }, email: h })
            .then((F) => {
              y(F.data.token), l(!0);
            })
            .catch((F) => {
              C(F);
            })
        : t === 'updateAccountSMSNumber'
        ? m &&
          G.createChangeSMSNumberOTP({ session: { token: O() }, smsNumber: Ye(m), smsLanguage: w })
            .then((F) => {
              y(F.data.token), l(!0);
            })
            .catch((F) => {
              C(F);
            })
        : G.resendOTP({ email: h })
            .then((F) => {
              y(F.data.token), l(!0);
            })
            .catch((F) => {
              C(F);
            });
    };
  return (
    E.useEffect(() => {
      u &&
        setTimeout(() => {
          l(!1);
        }, g);
    }, [u]),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(zt, { resendCode: S, isResendCodeDisabled: u, type: h ? 'email' : 'phone' }),
        N &&
          f.jsx(fe, {
            isOpen: N,
            setIsOpen: o,
            variant: 'inPage',
            type: 'success',
            description: j(
              h ? 'authentication.checkEmailScreen.resendCodeMsg' : 'authentication.phoneCodeScreen.resendCodeMsg'
            ),
            hasMarginTop: !0,
          }),
        s &&
          f.jsx(fe, {
            isOpen: s,
            setIsOpen: v,
            variant: 'inPage',
            type: 'info',
            description: j('errorsMsg.resendCodeDisabled'),
            hasMarginTop: !0,
          }),
        f.jsxs('div', {
          className: 'code-inputs',
          children: [
            L &&
              f.jsx(fe, {
                isOpen: L,
                setIsOpen: x,
                variant: 'inPage',
                type: 'critical',
                description: j('errorsMsg.resendCodeDisabled'),
                hasMarginTop: !0,
              }),
            f.jsx(Vt, {
              codes: k,
              setCodes: I,
              handleResendCodeClick: S,
              alignment: n,
              session: e,
              type: t,
              setShowSuccessAlert: a,
              setSuccessMsg: i,
              setRefreshData: c,
              setHasSystemError: x,
              hasInvalidCodeError: R,
              setHasInvalidCodeError: _,
              hasExpiredCodeError: $,
              setHasExpiredCodeError: K,
              validCodes: P,
              setValidCode: M,
              rememberMeChecked: r,
              setIsAuthenticateEmailModalOpen: d,
              setIsAuthenticateSMSNumberModalOpen: T,
            }),
          ],
        }),
      ],
    })
  );
};
export {
  fe as A,
  rn as C,
  _t as M,
  Wt as T,
  en as a,
  nn as b,
  an as c,
  tn as d,
  Jt as e,
  Zt as f,
  Qt as g,
  Bt as i,
  Ht as r,
  Xt as v,
};
