import {
  G as Se,
  H as de,
  I as Te,
  J as xe,
  K as Re,
  L as je,
  r as j,
  j as b,
  F as Pe,
  M as Ae,
  k as J,
  l as Ie,
  u as le,
  o as Le,
  O as Me,
  P as Ke,
  a as _e,
  v as Be,
} from './index-4QNEbNod.js';
import { B as re, E as se, u as Ue, H as z } from './Error-SQt2-jlG.js';
import { T as ce } from './useMetadata-tke_cGIL.js';
function $e(n, e) {
  const t = Se(n);
  if (isNaN(e)) return de(n, NaN);
  const a = t.getDate(),
    s = de(n, t.getTime());
  s.setMonth(t.getMonth() + e + 1, 0);
  const l = s.getDate();
  return a >= l ? s : (t.setFullYear(s.getFullYear(), s.getMonth(), a), t);
}
function qe(n, e) {
  return $e(n, e * 12);
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var we = [
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
  Q = we.join(','),
  Ne = typeof Element > 'u',
  q = Ne
    ? function () {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  H =
    !Ne && Element.prototype.getRootNode
      ? function (n) {
          var e;
          return n == null || (e = n.getRootNode) === null || e === void 0 ? void 0 : e.call(n);
        }
      : function (n) {
          return n?.ownerDocument;
        },
  ee = function n(e, t) {
    var a;
    t === void 0 && (t = !0);
    var s = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, 'inert'),
      l = s === '' || s === 'true',
      o = l || (t && e && n(e.parentNode));
    return o;
  },
  ze = function (e) {
    var t,
      a = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, 'contenteditable');
    return a === '' || a === 'true';
  },
  Oe = function (e, t, a) {
    if (ee(e)) return [];
    var s = Array.prototype.slice.apply(e.querySelectorAll(Q));
    return t && q.call(e, Q) && s.unshift(e), (s = s.filter(a)), s;
  },
  Fe = function n(e, t, a) {
    for (var s = [], l = Array.from(e); l.length; ) {
      var o = l.shift();
      if (!ee(o, !1))
        if (o.tagName === 'SLOT') {
          var w = o.assignedElements(),
            g = w.length ? w : o.children,
            N = n(g, !0, a);
          a.flatten ? s.push.apply(s, N) : s.push({ scopeParent: o, candidates: N });
        } else {
          var F = q.call(o, Q);
          F && a.filter(o) && (t || !e.includes(o)) && s.push(o);
          var E = o.shadowRoot || (typeof a.getShadowRoot == 'function' && a.getShadowRoot(o)),
            D = !ee(E, !1) && (!a.shadowRootFilter || a.shadowRootFilter(o));
          if (E && D) {
            var A = n(E === !0 ? o.children : E.children, !0, a);
            a.flatten ? s.push.apply(s, A) : s.push({ scopeParent: o, candidates: A });
          } else l.unshift.apply(l, o.children);
        }
    }
    return s;
  },
  Ee = function (e) {
    return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
  },
  U = function (e) {
    if (!e) throw new Error('No node provided');
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || ze(e)) && !Ee(e) ? 0 : e.tabIndex;
  },
  Ve = function (e, t) {
    var a = U(e);
    return a < 0 && t && !Ee(e) ? 0 : a;
  },
  Ge = function (e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  },
  De = function (e) {
    return e.tagName === 'INPUT';
  },
  Ye = function (e) {
    return De(e) && e.type === 'hidden';
  },
  We = function (e) {
    var t =
      e.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(e.children).some(function (a) {
        return a.tagName === 'SUMMARY';
      });
    return t;
  },
  Ze = function (e, t) {
    for (var a = 0; a < e.length; a++) if (e[a].checked && e[a].form === t) return e[a];
  },
  Xe = function (e) {
    if (!e.name) return !0;
    var t = e.form || H(e),
      a = function (w) {
        return t.querySelectorAll('input[type="radio"][name="' + w + '"]');
      },
      s;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      s = a(window.CSS.escape(e.name));
    else
      try {
        s = a(e.name);
      } catch (o) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            o.message
          ),
          !1
        );
      }
    var l = Ze(s, e.form);
    return !l || l === e;
  },
  Je = function (e) {
    return De(e) && e.type === 'radio';
  },
  Qe = function (e) {
    return Je(e) && !Xe(e);
  },
  He = function (e) {
    var t,
      a = e && H(e),
      s = (t = a) === null || t === void 0 ? void 0 : t.host,
      l = !1;
    if (a && a !== e) {
      var o, w, g;
      for (
        l = !!(
          ((o = s) !== null && o !== void 0 && (w = o.ownerDocument) !== null && w !== void 0 && w.contains(s)) ||
          (e != null && (g = e.ownerDocument) !== null && g !== void 0 && g.contains(e))
        );
        !l && s;

      ) {
        var N, F, E;
        (a = H(s)),
          (s = (N = a) === null || N === void 0 ? void 0 : N.host),
          (l = !!((F = s) !== null && F !== void 0 && (E = F.ownerDocument) !== null && E !== void 0 && E.contains(s)));
      }
    }
    return l;
  },
  ve = function (e) {
    var t = e.getBoundingClientRect(),
      a = t.width,
      s = t.height;
    return a === 0 && s === 0;
  },
  et = function (e, t) {
    var a = t.displayCheck,
      s = t.getShadowRoot;
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    var l = q.call(e, 'details>summary:first-of-type'),
      o = l ? e.parentElement : e;
    if (q.call(o, 'details:not([open]) *')) return !0;
    if (!a || a === 'full' || a === 'legacy-full') {
      if (typeof s == 'function') {
        for (var w = e; e; ) {
          var g = e.parentElement,
            N = H(e);
          if (g && !g.shadowRoot && s(g) === !0) return ve(e);
          e.assignedSlot ? (e = e.assignedSlot) : !g && N !== e.ownerDocument ? (e = N.host) : (e = g);
        }
        e = w;
      }
      if (He(e)) return !e.getClientRects().length;
      if (a !== 'legacy-full') return !0;
    } else if (a === 'non-zero-area') return ve(e);
    return !1;
  },
  tt = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t; ) {
        if (t.tagName === 'FIELDSET' && t.disabled) {
          for (var a = 0; a < t.children.length; a++) {
            var s = t.children.item(a);
            if (s.tagName === 'LEGEND') return q.call(t, 'fieldset[disabled] *') ? !0 : !s.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  te = function (e, t) {
    return !(t.disabled || ee(t) || Ye(t) || et(t, e) || We(t) || tt(t));
  },
  ue = function (e, t) {
    return !(Qe(t) || U(t) < 0 || !te(e, t));
  },
  nt = function (e) {
    var t = parseInt(e.getAttribute('tabindex'), 10);
    return !!(isNaN(t) || t >= 0);
  },
  at = function n(e) {
    var t = [],
      a = [];
    return (
      e.forEach(function (s, l) {
        var o = !!s.scopeParent,
          w = o ? s.scopeParent : s,
          g = Ve(w, o),
          N = o ? n(s.candidates) : w;
        g === 0
          ? o
            ? t.push.apply(t, N)
            : t.push(w)
          : a.push({ documentOrder: l, tabIndex: g, item: s, isScope: o, content: N });
      }),
      a
        .sort(Ge)
        .reduce(function (s, l) {
          return l.isScope ? s.push.apply(s, l.content) : s.push(l.content), s;
        }, [])
        .concat(t)
    );
  },
  ke = function (e, t) {
    t = t || {};
    var a;
    return (
      t.getShadowRoot
        ? (a = Fe([e], t.includeContainer, {
            filter: ue.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: nt,
          }))
        : (a = Oe(e, t.includeContainer, ue.bind(null, t))),
      at(a)
    );
  },
  Ce = function (e, t) {
    t = t || {};
    var a;
    return (
      t.getShadowRoot
        ? (a = Fe([e], t.includeContainer, { filter: te.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot }))
        : (a = Oe(e, t.includeContainer, te.bind(null, t))),
      a
    );
  },
  $ = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return q.call(e, Q) === !1 ? !1 : ue(t, e);
  },
  rt = we.concat('iframe').join(','),
  X = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return q.call(e, rt) === !1 ? !1 : te(t, e);
  };
const it = Object.freeze(
  Object.defineProperty(
    { __proto__: null, focusable: Ce, getTabIndex: U, isFocusable: X, isTabbable: $, tabbable: ke },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
/*!
 * focus-trap 7.5.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function be(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e &&
      (a = a.filter(function (s) {
        return Object.getOwnPropertyDescriptor(n, s).enumerable;
      })),
      t.push.apply(t, a);
  }
  return t;
}
function pe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? be(Object(t), !0).forEach(function (a) {
          ot(n, a, t[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : be(Object(t)).forEach(function (a) {
          Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(t, a));
        });
  }
  return n;
}
function ot(n, e, t) {
  return (
    (e = ct(e)),
    e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = t),
    n
  );
}
function st(n, e) {
  if (typeof n != 'object' || n === null) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(n, e);
    if (typeof a != 'object') return a;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(n);
}
function ct(n) {
  var e = st(n, 'string');
  return typeof e == 'symbol' ? e : String(e);
}
var he = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var a = e[e.length - 1];
        a !== t && a.pause();
      }
      var s = e.indexOf(t);
      s === -1 || e.splice(s, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var a = e.indexOf(t);
      a !== -1 && e.splice(a, 1), e.length > 0 && e[e.length - 1].unpause();
    },
  },
  ut = function (e) {
    return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
  },
  lt = function (e) {
    return e?.key === 'Escape' || e?.key === 'Esc' || e?.keyCode === 27;
  },
  W = function (e) {
    return e?.key === 'Tab' || e?.keyCode === 9;
  },
  ft = function (e) {
    return W(e) && !e.shiftKey;
  },
  dt = function (e) {
    return W(e) && e.shiftKey;
  },
  me = function (e) {
    return setTimeout(e, 0);
  },
  ge = function (e, t) {
    var a = -1;
    return (
      e.every(function (s, l) {
        return t(s) ? ((a = l), !1) : !0;
      }),
      a
    );
  },
  Y = function (e) {
    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) a[s - 1] = arguments[s];
    return typeof e == 'function' ? e.apply(void 0, a) : e;
  },
  Z = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == 'function' ? e.composedPath()[0] : e.target;
  },
  vt = [],
  bt = function (e, t) {
    var a = t?.document || document,
      s = t?.trapStack || vt,
      l = pe(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: ft,
          isKeyBackward: dt,
        },
        t
      ),
      o = {
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
      w,
      g = function (r, i, d) {
        return r && r[i] !== void 0 ? r[i] : l[d || i];
      },
      N = function (r, i) {
        var d = typeof i?.composedPath == 'function' ? i.composedPath() : void 0;
        return o.containerGroups.findIndex(function (c) {
          var f = c.container,
            T = c.tabbableNodes;
          return (
            f.contains(r) ||
            d?.includes(f) ||
            T.find(function (O) {
              return O === r;
            })
          );
        });
      },
      F = function (r) {
        var i = l[r];
        if (typeof i == 'function') {
          for (var d = arguments.length, c = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) c[f - 1] = arguments[f];
          i = i.apply(void 0, c);
        }
        if ((i === !0 && (i = void 0), !i)) {
          if (i === void 0 || i === !1) return i;
          throw new Error('`'.concat(r, '` was specified but was not a node, or did not return a node'));
        }
        var T = i;
        if (typeof i == 'string' && ((T = a.querySelector(i)), !T))
          throw new Error('`'.concat(r, '` as selector refers to no known node'));
        return T;
      },
      E = function () {
        var r = F('initialFocus');
        if (r === !1) return !1;
        if (r === void 0 || !X(r, l.tabbableOptions))
          if (N(a.activeElement) >= 0) r = a.activeElement;
          else {
            var i = o.tabbableGroups[0],
              d = i && i.firstTabbableNode;
            r = d || F('fallbackFocus');
          }
        if (!r) throw new Error('Your focus-trap needs to have at least one focusable element');
        return r;
      },
      D = function () {
        if (
          ((o.containerGroups = o.containers.map(function (r) {
            var i = ke(r, l.tabbableOptions),
              d = Ce(r, l.tabbableOptions),
              c = i.length > 0 ? i[0] : void 0,
              f = i.length > 0 ? i[i.length - 1] : void 0,
              T = d.find(function (x) {
                return $(x);
              }),
              O = d
                .slice()
                .reverse()
                .find(function (x) {
                  return $(x);
                }),
              S = !!i.find(function (x) {
                return U(x) > 0;
              });
            return {
              container: r,
              tabbableNodes: i,
              focusableNodes: d,
              posTabIndexesFound: S,
              firstTabbableNode: c,
              lastTabbableNode: f,
              firstDomTabbableNode: T,
              lastDomTabbableNode: O,
              nextTabbableNode: function (R) {
                var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                  B = i.indexOf(R);
                return B < 0
                  ? V
                    ? d.slice(d.indexOf(R) + 1).find(function (G) {
                        return $(G);
                      })
                    : d
                        .slice(0, d.indexOf(R))
                        .reverse()
                        .find(function (G) {
                          return $(G);
                        })
                  : i[B + (V ? 1 : -1)];
              },
            };
          })),
          (o.tabbableGroups = o.containerGroups.filter(function (r) {
            return r.tabbableNodes.length > 0;
          })),
          o.tabbableGroups.length <= 0 && !F('fallbackFocus'))
        )
          throw new Error(
            'Your focus-trap must have at least one container with at least one tabbable node in it at all times'
          );
        if (
          o.containerGroups.find(function (r) {
            return r.posTabIndexesFound;
          }) &&
          o.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
          );
      },
      A = function h(r) {
        var i = r.activeElement;
        if (i) return i.shadowRoot && i.shadowRoot.activeElement !== null ? h(i.shadowRoot) : i;
      },
      C = function h(r) {
        if (r !== !1 && r !== A(document)) {
          if (!r || !r.focus) {
            h(E());
            return;
          }
          r.focus({ preventScroll: !!l.preventScroll }), (o.mostRecentlyFocusedNode = r), ut(r) && r.select();
        }
      },
      v = function (r) {
        var i = F('setReturnFocus', r);
        return i || (i === !1 ? !1 : r);
      },
      M = function (r) {
        var i = r.target,
          d = r.event,
          c = r.isBackward,
          f = c === void 0 ? !1 : c;
        (i = i || Z(d)), D();
        var T = null;
        if (o.tabbableGroups.length > 0) {
          var O = N(i, d),
            S = O >= 0 ? o.containerGroups[O] : void 0;
          if (O < 0)
            f
              ? (T = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode)
              : (T = o.tabbableGroups[0].firstTabbableNode);
          else if (f) {
            var x = ge(o.tabbableGroups, function (ne) {
              var ae = ne.firstTabbableNode;
              return i === ae;
            });
            if (
              (x < 0 &&
                (S.container === i ||
                  (X(i, l.tabbableOptions) && !$(i, l.tabbableOptions) && !S.nextTabbableNode(i, !1))) &&
                (x = O),
              x >= 0)
            ) {
              var R = x === 0 ? o.tabbableGroups.length - 1 : x - 1,
                V = o.tabbableGroups[R];
              T = U(i) >= 0 ? V.lastTabbableNode : V.lastDomTabbableNode;
            } else W(d) || (T = S.nextTabbableNode(i, !1));
          } else {
            var B = ge(o.tabbableGroups, function (ne) {
              var ae = ne.lastTabbableNode;
              return i === ae;
            });
            if (
              (B < 0 &&
                (S.container === i ||
                  (X(i, l.tabbableOptions) && !$(i, l.tabbableOptions) && !S.nextTabbableNode(i))) &&
                (B = O),
              B >= 0)
            ) {
              var G = B === o.tabbableGroups.length - 1 ? 0 : B + 1,
                fe = o.tabbableGroups[G];
              T = U(i) >= 0 ? fe.firstTabbableNode : fe.firstDomTabbableNode;
            } else W(d) || (T = S.nextTabbableNode(i));
          }
        } else T = F('fallbackFocus');
        return T;
      },
      I = function (r) {
        var i = Z(r);
        if (!(N(i, r) >= 0)) {
          if (Y(l.clickOutsideDeactivates, r)) {
            w.deactivate({ returnFocus: l.returnFocusOnDeactivate });
            return;
          }
          Y(l.allowOutsideClick, r) || r.preventDefault();
        }
      },
      K = function (r) {
        var i = Z(r),
          d = N(i, r) >= 0;
        if (d || i instanceof Document) d && (o.mostRecentlyFocusedNode = i);
        else {
          r.stopImmediatePropagation();
          var c,
            f = !0;
          if (o.mostRecentlyFocusedNode)
            if (U(o.mostRecentlyFocusedNode) > 0) {
              var T = N(o.mostRecentlyFocusedNode),
                O = o.containerGroups[T].tabbableNodes;
              if (O.length > 0) {
                var S = O.findIndex(function (x) {
                  return x === o.mostRecentlyFocusedNode;
                });
                S >= 0 &&
                  (l.isKeyForward(o.recentNavEvent)
                    ? S + 1 < O.length && ((c = O[S + 1]), (f = !1))
                    : S - 1 >= 0 && ((c = O[S - 1]), (f = !1)));
              }
            } else
              o.containerGroups.some(function (x) {
                return x.tabbableNodes.some(function (R) {
                  return U(R) > 0;
                });
              }) || (f = !1);
          else f = !1;
          f && (c = M({ target: o.mostRecentlyFocusedNode, isBackward: l.isKeyBackward(o.recentNavEvent) })),
            C(c || o.mostRecentlyFocusedNode || E());
        }
        o.recentNavEvent = void 0;
      },
      _ = function (r) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        o.recentNavEvent = r;
        var d = M({ event: r, isBackward: i });
        d && (W(r) && r.preventDefault(), C(d));
      },
      P = function (r) {
        if (lt(r) && Y(l.escapeDeactivates, r) !== !1) {
          r.preventDefault(), w.deactivate();
          return;
        }
        (l.isKeyForward(r) || l.isKeyBackward(r)) && _(r, l.isKeyBackward(r));
      },
      L = function (r) {
        var i = Z(r);
        N(i, r) >= 0 ||
          Y(l.clickOutsideDeactivates, r) ||
          Y(l.allowOutsideClick, r) ||
          (r.preventDefault(), r.stopImmediatePropagation());
      },
      m = function () {
        if (o.active)
          return (
            he.activateTrap(s, w),
            (o.delayInitialFocusTimer = l.delayInitialFocus
              ? me(function () {
                  C(E());
                })
              : C(E())),
            a.addEventListener('focusin', K, !0),
            a.addEventListener('mousedown', I, { capture: !0, passive: !1 }),
            a.addEventListener('touchstart', I, { capture: !0, passive: !1 }),
            a.addEventListener('click', L, { capture: !0, passive: !1 }),
            a.addEventListener('keydown', P, { capture: !0, passive: !1 }),
            w
          );
      },
      p = function () {
        if (o.active)
          return (
            a.removeEventListener('focusin', K, !0),
            a.removeEventListener('mousedown', I, !0),
            a.removeEventListener('touchstart', I, !0),
            a.removeEventListener('click', L, !0),
            a.removeEventListener('keydown', P, !0),
            w
          );
      },
      k = function (r) {
        var i = r.some(function (d) {
          var c = Array.from(d.removedNodes);
          return c.some(function (f) {
            return f === o.mostRecentlyFocusedNode;
          });
        });
        i && C(E());
      },
      y = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(k) : void 0,
      u = function () {
        y &&
          (y.disconnect(),
          o.active &&
            !o.paused &&
            o.containers.map(function (r) {
              y.observe(r, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (w = {
        get active() {
          return o.active;
        },
        get paused() {
          return o.paused;
        },
        activate: function (r) {
          if (o.active) return this;
          var i = g(r, 'onActivate'),
            d = g(r, 'onPostActivate'),
            c = g(r, 'checkCanFocusTrap');
          c || D(), (o.active = !0), (o.paused = !1), (o.nodeFocusedBeforeActivation = a.activeElement), i?.();
          var f = function () {
            c && D(), m(), u(), d?.();
          };
          return c ? (c(o.containers.concat()).then(f, f), this) : (f(), this);
        },
        deactivate: function (r) {
          if (!o.active) return this;
          var i = pe(
            {
              onDeactivate: l.onDeactivate,
              onPostDeactivate: l.onPostDeactivate,
              checkCanReturnFocus: l.checkCanReturnFocus,
            },
            r
          );
          clearTimeout(o.delayInitialFocusTimer),
            (o.delayInitialFocusTimer = void 0),
            p(),
            (o.active = !1),
            (o.paused = !1),
            u(),
            he.deactivateTrap(s, w);
          var d = g(i, 'onDeactivate'),
            c = g(i, 'onPostDeactivate'),
            f = g(i, 'checkCanReturnFocus'),
            T = g(i, 'returnFocus', 'returnFocusOnDeactivate');
          d?.();
          var O = function () {
            me(function () {
              T && C(v(o.nodeFocusedBeforeActivation)), c?.();
            });
          };
          return T && f ? (f(v(o.nodeFocusedBeforeActivation)).then(O, O), this) : (O(), this);
        },
        pause: function (r) {
          if (o.paused || !o.active) return this;
          var i = g(r, 'onPause'),
            d = g(r, 'onPostPause');
          return (o.paused = !0), i?.(), p(), u(), d?.(), this;
        },
        unpause: function (r) {
          if (!o.paused || !o.active) return this;
          var i = g(r, 'onUnpause'),
            d = g(r, 'onPostUnpause');
          return (o.paused = !1), i?.(), D(), m(), u(), d?.(), this;
        },
        updateContainerElements: function (r) {
          var i = [].concat(r).filter(Boolean);
          return (
            (o.containers = i.map(function (d) {
              return typeof d == 'string' ? a.querySelector(d) : d;
            })),
            o.active && D(),
            u(),
            this
          );
        },
      }),
      w.updateContainerElements(e),
      w
    );
  };
const pt = Object.freeze(
    Object.defineProperty({ __proto__: null, createFocusTrap: bt }, Symbol.toStringTag, { value: 'Module' })
  ),
  ht = Te(pt),
  mt = Te(it);
var ie, ye;
function gt() {
  if (ye) return ie;
  ye = 1;
  function n(m) {
    '@babel/helpers - typeof';
    return (
      (n =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (p) {
              return typeof p;
            }
          : function (p) {
              return p && typeof Symbol == 'function' && p.constructor === Symbol && p !== Symbol.prototype
                ? 'symbol'
                : typeof p;
            }),
      n(m)
    );
  }
  function e(m, p) {
    if (!(m instanceof p)) throw new TypeError('Cannot call a class as a function');
  }
  function t(m, p) {
    for (var k = 0; k < p.length; k++) {
      var y = p[k];
      (y.enumerable = y.enumerable || !1),
        (y.configurable = !0),
        'value' in y && (y.writable = !0),
        Object.defineProperty(m, D(y.key), y);
    }
  }
  function a(m, p, k) {
    return p && t(m.prototype, p), Object.defineProperty(m, 'prototype', { writable: !1 }), m;
  }
  function s(m, p) {
    if (typeof p != 'function' && p !== null) throw new TypeError('Super expression must either be null or a function');
    (m.prototype = Object.create(p && p.prototype, { constructor: { value: m, writable: !0, configurable: !0 } })),
      Object.defineProperty(m, 'prototype', { writable: !1 }),
      p && l(m, p);
  }
  function l(m, p) {
    return (
      (l = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (y, u) {
            return (y.__proto__ = u), y;
          }),
      l(m, p)
    );
  }
  function o(m) {
    var p = N();
    return function () {
      var y = F(m),
        u;
      if (p) {
        var h = F(this).constructor;
        u = Reflect.construct(y, arguments, h);
      } else u = y.apply(this, arguments);
      return w(this, u);
    };
  }
  function w(m, p) {
    if (p && (n(p) === 'object' || typeof p == 'function')) return p;
    if (p !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return g(m);
  }
  function g(m) {
    if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return m;
  }
  function N() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function F(m) {
    return (
      (F = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (k) {
            return k.__proto__ || Object.getPrototypeOf(k);
          }),
      F(m)
    );
  }
  function E(m, p, k) {
    return (
      (p = D(p)),
      p in m ? Object.defineProperty(m, p, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : (m[p] = k),
      m
    );
  }
  function D(m) {
    var p = A(m, 'string');
    return n(p) === 'symbol' ? p : String(p);
  }
  function A(m, p) {
    if (n(m) !== 'object' || m === null) return m;
    var k = m[Symbol.toPrimitive];
    if (k !== void 0) {
      var y = k.call(m, p);
      if (n(y) !== 'object') return y;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (p === 'string' ? String : Number)(m);
  }
  var C = xe(),
    v = Re(),
    M = ht,
    I = M.createFocusTrap,
    K = mt,
    _ = K.isFocusable,
    P = (function (m) {
      s(k, m);
      var p = o(k);
      function k(y) {
        var u;
        e(this, k),
          (u = p.call(this, y)),
          E(g(u), 'getNodeForOption', function (i) {
            var d,
              c = (d = this.internalOptions[i]) !== null && d !== void 0 ? d : this.originalOptions[i];
            if (typeof c == 'function') {
              for (var f = arguments.length, T = new Array(f > 1 ? f - 1 : 0), O = 1; O < f; O++)
                T[O - 1] = arguments[O];
              c = c.apply(void 0, T);
            }
            if ((c === !0 && (c = void 0), !c)) {
              if (c === void 0 || c === !1) return c;
              throw new Error('`'.concat(i, '` was specified but was not a node, or did not return a node'));
            }
            var S = c;
            if (typeof c == 'string') {
              var x;
              if (((S = (x = this.getDocument()) === null || x === void 0 ? void 0 : x.querySelector(c)), !S))
                throw new Error('`'.concat(i, '` as selector refers to no known node'));
            }
            return S;
          }),
          (u.handleDeactivate = u.handleDeactivate.bind(g(u))),
          (u.handlePostDeactivate = u.handlePostDeactivate.bind(g(u))),
          (u.handleClickOutsideDeactivates = u.handleClickOutsideDeactivates.bind(g(u))),
          (u.internalOptions = {
            returnFocusOnDeactivate: !1,
            checkCanReturnFocus: null,
            onDeactivate: u.handleDeactivate,
            onPostDeactivate: u.handlePostDeactivate,
            clickOutsideDeactivates: u.handleClickOutsideDeactivates,
          }),
          (u.originalOptions = {
            returnFocusOnDeactivate: !0,
            onDeactivate: null,
            onPostDeactivate: null,
            checkCanReturnFocus: null,
            clickOutsideDeactivates: !1,
          });
        var h = y.focusTrapOptions;
        for (var r in h)
          if (Object.prototype.hasOwnProperty.call(h, r)) {
            if (
              r === 'returnFocusOnDeactivate' ||
              r === 'onDeactivate' ||
              r === 'onPostDeactivate' ||
              r === 'checkCanReturnFocus' ||
              r === 'clickOutsideDeactivates'
            ) {
              u.originalOptions[r] = h[r];
              continue;
            }
            u.internalOptions[r] = h[r];
          }
        return (u.outsideClick = null), (u.focusTrapElements = y.containerElements || []), u.updatePreviousElement(), u;
      }
      return (
        a(k, [
          {
            key: 'getDocument',
            value: function () {
              return this.props.focusTrapOptions.document || (typeof document < 'u' ? document : void 0);
            },
          },
          {
            key: 'getReturnFocusNode',
            value: function () {
              var u = this.getNodeForOption('setReturnFocus', this.previouslyFocusedElement);
              return u || (u === !1 ? !1 : this.previouslyFocusedElement);
            },
          },
          {
            key: 'updatePreviousElement',
            value: function () {
              var u = this.getDocument();
              u && (this.previouslyFocusedElement = u.activeElement);
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
            value: function (u) {
              var h =
                typeof this.originalOptions.clickOutsideDeactivates == 'function'
                  ? this.originalOptions.clickOutsideDeactivates.call(null, u)
                  : this.originalOptions.clickOutsideDeactivates;
              return h && (this.outsideClick = { target: u.target, allowDeactivation: h }), h;
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
              var u = this,
                h = function () {
                  var i = u.getReturnFocusNode(),
                    d = !!(
                      u.originalOptions.returnFocusOnDeactivate &&
                      i !== null &&
                      i !== void 0 &&
                      i.focus &&
                      (!u.outsideClick ||
                        (u.outsideClick.allowDeactivation &&
                          !_(u.outsideClick.target, u.internalOptions.tabbableOptions)))
                    ),
                    c = u.internalOptions.preventScroll,
                    f = c === void 0 ? !1 : c;
                  d && i.focus({ preventScroll: f }),
                    u.originalOptions.onPostDeactivate && u.originalOptions.onPostDeactivate.call(null),
                    (u.outsideClick = null);
                };
              this.originalOptions.checkCanReturnFocus
                ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(h, h)
                : h();
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
                var u = this.focusTrapElements.some(Boolean);
                u &&
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
            value: function (u) {
              if (this.focusTrap) {
                u.containerElements !== this.props.containerElements &&
                  this.focusTrap.updateContainerElements(this.props.containerElements);
                var h = !u.active && this.props.active,
                  r = u.active && !this.props.active,
                  i = !u.paused && this.props.paused,
                  d = u.paused && !this.props.paused;
                if ((h && (this.updatePreviousElement(), this.focusTrap.activate()), r)) {
                  this.deactivateTrap();
                  return;
                }
                i && this.focusTrap.pause(), d && this.focusTrap.unpause();
              } else
                u.containerElements !== this.props.containerElements &&
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
              var u = this,
                h = this.props.children ? C.Children.only(this.props.children) : void 0;
              if (h) {
                if (h.type && h.type === C.Fragment)
                  throw new Error(
                    'A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.'
                  );
                var r = function (c) {
                    var f = u.props.containerElements;
                    h && (typeof h.ref == 'function' ? h.ref(c) : h.ref && (h.ref.current = c)),
                      (u.focusTrapElements = f || [c]);
                  },
                  i = C.cloneElement(h, { ref: r });
                return i;
              }
              return null;
            },
          },
        ]),
        k
      );
    })(C.Component),
    L = typeof Element > 'u' ? Function : Element;
  return (
    (P.propTypes = {
      active: v.bool,
      paused: v.bool,
      focusTrapOptions: v.shape({
        document: v.object,
        onActivate: v.func,
        onPostActivate: v.func,
        checkCanFocusTrap: v.func,
        onPause: v.func,
        onPostPause: v.func,
        onUnpause: v.func,
        onPostUnpause: v.func,
        onDeactivate: v.func,
        onPostDeactivate: v.func,
        checkCanReturnFocus: v.func,
        initialFocus: v.oneOfType([v.instanceOf(L), v.string, v.bool, v.func]),
        fallbackFocus: v.oneOfType([v.instanceOf(L), v.string, v.func]),
        escapeDeactivates: v.oneOfType([v.bool, v.func]),
        clickOutsideDeactivates: v.oneOfType([v.bool, v.func]),
        returnFocusOnDeactivate: v.bool,
        setReturnFocus: v.oneOfType([v.instanceOf(L), v.string, v.bool, v.func]),
        allowOutsideClick: v.oneOfType([v.bool, v.func]),
        preventScroll: v.bool,
        tabbableOptions: v.shape({
          displayCheck: v.oneOf(['full', 'legacy-full', 'non-zero-area', 'none']),
          getShadowRoot: v.oneOfType([v.bool, v.func]),
        }),
        trapStack: v.array,
        isKeyForward: v.func,
        isKeyBackward: v.func,
      }),
      containerElements: v.arrayOf(v.instanceOf(L)),
      children: v.oneOfType([v.element, v.instanceOf(L)]),
    }),
    (P.defaultProps = { active: !0, paused: !1, focusTrapOptions: {}, _createFocusTrap: I }),
    (ie = P),
    ie
  );
}
var yt = gt();
const Tt = je(yt),
  wt = ({
    id: n,
    title: e,
    primaryBtnProps: t,
    secondaryBtnProps: a,
    linkBtnProps: s,
    hasSecondaryBtn: l,
    hasLinkBtn: o,
    children: w,
    hasFooter: g,
    open: N,
    onClose: F,
  }) => {
    const E = j.useRef(null);
    j.useEffect(() => {
      N ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll');
    }, [N]);
    const D = N ? { 'aria-labelledby': `${n}-description` } : {},
      A = (C) => {
        E.current && !E.current.contains(C.target) && F();
      };
    return b.jsx('div', {
      className: 'gnb-modal left',
      id: n + Math.random().toString(36).substring(2, 9),
      role: 'dialog',
      'aria-modal': 'true',
      'aria-hidden': !N,
      ...D,
      onClick: A,
      children:
        N &&
        b.jsx(Tt, {
          focusTrapOptions: { clickOutsideDeactivates: !0, initialFocus: !1 },
          children: b.jsxs('dialog', {
            ref: E,
            children: [
              b.jsxs('button', {
                className: 'gnb-btn-close',
                onClick: F,
                children: [
                  b.jsx('span', { className: 'sr-only', children: 'Close modal window' }),
                  b.jsx(Pe, { icon: Ae }),
                ],
              }),
              b.jsx('div', { className: 'gnb-modal-header', children: b.jsx('h2', { id: `${n}-title`, children: e }) }),
              b.jsx('div', { className: 'gnb-modal-body', id: `${n}-description`, children: w }),
              g &&
                b.jsxs('div', {
                  className: 'gnb-modal-footer',
                  children: [
                    b.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: b.jsx(re, {
                        type: 'button',
                        variant: t?.variant ? t?.variant : 'primary',
                        label: t?.label,
                        size: t?.size ? t.size : 'small',
                        onClick: t?.onClick,
                        disabled: t?.disabled,
                      }),
                    }),
                    l &&
                      b.jsx(re, {
                        variant: a?.variant ? a.variant : 'secondary',
                        label: a?.label,
                        size: a?.size ? a.size : 'small',
                        onClick: a?.onClick,
                        disabled: a?.disabled,
                      }),
                    o &&
                      b.jsx(re, {
                        variant: 'tertiary',
                        label: s?.label,
                        onClick: s?.onClick,
                        disabled: s?.disabled,
                        size: s?.size ? s.size : 'small',
                      }),
                  ],
                }),
            ],
          }),
        }),
    });
  },
  oe = ({
    variant: n,
    type: e,
    description: t,
    inPageHeading: a,
    isOpen: s,
    setIsOpen: l,
    hasMarginTop: o,
    hasTimeout: w = !0,
  }) => {
    const [g, N] = j.useState(!1),
      F = NaN;
    return (
      j.useEffect(() => {
        s && N(!1);
      }, [s]),
      j.useEffect(() => {
        const E = w
          ? setTimeout(() => {
              N(!0), l(!1);
            }, F)
          : void 0;
        return () => clearTimeout(E);
      }, [s, n, e, t, a, l, g, w]),
      g
        ? null
        : s
        ? b.jsxs(b.Fragment, {
            children: [
              n !== 'global' &&
                b.jsxs('div', {
                  className: J('no-margin-bottom', {
                    'gnb-alert-info-inline': n === 'inline' && e === 'info',
                    'gnb-alert-success-inline': n === 'inline' && e === 'success',
                    'gnb-alert-warning-inline': n === 'inline' && e === 'warning',
                    'gnb-alert-critical-inline': n === 'inline' && e === 'critical',
                    'gnb-alert-info': n === 'inPage' && e === 'info',
                    'gnb-alert-success': n === 'inPage' && e === 'success',
                    'gnb-alert-warning': n === 'inPage' && e === 'warning',
                    'gnb-alert-critical margin-bottom-lg no-margin-top': n === 'inPage' && e === 'critical' && !o,
                    'gnb-alert-critical margin-bottom-xs margin-top-md': n === 'inPage' && e === 'critical' && o,
                  }),
                  role: 'alert',
                  children: [
                    n === 'inPage' && a && b.jsx('h2', { className: 'left', children: a }),
                    b.jsx('div', { className: 'left', children: t }),
                  ],
                }),
              n === 'global' &&
                b.jsx('section', {
                  className: J({
                    'gnb-alert-info-global': e === 'info',
                    'gnb-alert-warning-global': e === 'warning',
                    'gnb-alert-critical-global': e === 'critical',
                  }),
                  children: b.jsxs('div', {
                    className: 'container-fluid',
                    children: [
                      typeof t == 'string' && b.jsx('p', { className: 'left', children: t }),
                      typeof t != 'string' && t,
                    ],
                  }),
                }),
            ],
          })
        : null
    );
  },
  St = ({
    label: n = '',
    type: e,
    helperText: t,
    required: a = !1,
    placeholder: s,
    value: l,
    onChange: o,
    onKeyUp: w,
    onBlur: g,
    onFocus: N,
    error: F,
    valid: E,
    id: D,
    maxlength: A,
    hasTooltipModal: C = !1,
    tooltipBody: v = '',
    tooltipTitle: M = '',
    isTooltipModalOpen: I = !1,
    setIsTooltipModalOpen: K = () => {},
    setTextInputRef: _,
  }) => {
    const P = Ie(n) + '-error-id',
      L = F ? { 'aria-labelledby': P } : {},
      m = () => K(!1);
    return (
      j.useEffect(() => {
        const p = (k) => {
          k.key === 'Escape' && m();
        };
        return (
          I && window.addEventListener('keydown', p),
          () => {
            window.removeEventListener('keydown', p);
          }
        );
      }, [I]),
      b.jsxs(b.Fragment, {
        children: [
          b.jsxs('form', {
            onSubmit: (p) => p.preventDefault(),
            className: J('gnb-form-input', F ? 'error' : '', E ? 'valid' : ''),
            noValidate: !0,
            children: [
              b.jsxs('label', {
                className: 'left',
                htmlFor: D || n,
                children: [
                  !C && b.jsxs('span', { children: [n, a && b.jsx('span', { className: 'required', children: '*' })] }),
                  C &&
                    b.jsxs('a', {
                      href: '#',
                      tabIndex: 0,
                      'data-target': D || n,
                      'aria-haspopup': 'dialog',
                      'aria-controls': D || n,
                      className: 'modal-button info gnb-tooltip-link',
                      onClick: () => K(!0),
                      children: [n, a && b.jsx('span', { className: 'required', children: '*' })],
                    }),
                ],
              }),
              t && b.jsx('div', { className: 'gnb-form-helper-text left', children: t }),
              b.jsx('input', {
                type: e,
                name: n,
                id: D || n,
                required: a,
                value: l,
                placeholder: s,
                onChange: o,
                ...L,
                'aria-invalid': !!F,
                className: 'text-input',
                maxLength: A,
                onFocus: N,
                onBlur: g,
                onKeyUp: w,
                ref: (p) => {
                  _ && _(p);
                },
              }),
              F && b.jsx(se, { id: P, error: F, classes: e === 'tel' ? 'tel-input' : '' }),
            ],
          }),
          I && b.jsx(wt, { id: `tooltip-input-modal-${D || n}`, title: M, open: I, onClose: m, children: v }),
        ],
      })
    );
  };
function xt(n, e, t) {
  return /^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,3})+$/.test(n) ? (e(''), !0) : (e(t), !1);
}
function Rt(n, e, t) {
  return /^\+1[0-9]{10}$/.test(n) ? (e(''), !0) : (e(t), !1);
}
function Nt(n) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_!,.@#$%&'*();:~? -]*$/.test(n);
}
const jt = (n, e) => {
  n.target.value.length > 2 ? e(!1) : e(!0);
};
function Pt(n) {
  const e = [];
  for (const t of n) {
    const a = document?.getElementById(t)?.checked;
    e.push({ value: t, checked: a });
  }
  return e;
}
function At(n) {
  return n.replace(/[^\w\s]/gi, '');
}
function Ot(n) {
  return n.replace(/\s/g, '');
}
function It(n) {
  return Ot(n).length === 6 || n.toUpperCase() === 'NA';
}
function Lt(n) {
  return n.trim().length <= 8 && n.trim().length >= 1;
}
function Mt(n) {
  return n.trim().length >= 1 && Nt(n);
}
function Kt(n) {
  return n.trim().length >= 0;
}
const _t = (n, e, t) => {
  let a;
  return n === 'profanity' && (a = e), n === 'invalid-custom-name' && (a = t), a;
};
function Ft({ resendCode: n, isResendCodeDisabled: e, type: t }) {
  const { t: a } = le(),
    s = () => {
      n();
    };
  return b.jsxs(b.Fragment, {
    children: [
      b.jsx('p', {
        className: 'margin-bottom-sm',
        children: a(
          t === 'email' ? 'authentication.checkEmailScreen.description1' : 'authentication.phoneCodeScreen.description1'
        ),
      }),
      t === 'phone' &&
        b.jsxs('p', {
          className: 'margin-bottom-sm',
          children: [' ', a('authentication.phoneCodeScreen.description2')],
        }),
      b.jsx(ce, {
        i18nKey:
          t === 'email'
            ? e
              ? 'authentication.checkEmailScreen.description2'
              : 'authentication.checkEmailScreen.description3'
            : e
            ? 'authentication.phoneCodeScreen.description3'
            : 'authentication.phoneCodeScreen.description4',
        components: { 1: b.jsx('a', { href: '#', onClick: s, children: 'Resend Code' }) },
      }),
    ],
  });
}
function Et({
  alignment: n,
  codes: e,
  setCodes: t,
  handleResendCodeClick: a,
  session: s,
  type: l,
  setShowSuccessAlert: o,
  setSuccessMsg: w,
  setRefreshData: g,
  setHasSystemError: N,
  hasInvalidCodeError: F,
  setHasInvalidCodeError: E,
  hasExpiredCodeError: D,
  setHasExpiredCodeError: A,
  validCodes: C,
  setValidCode: v,
  setIsAuthenticateEmailModalOpen: M,
  setIsAuthenticateSMSNumberModalOpen: I,
}) {
  const K = Le(),
    { t: _ } = le(),
    P = j.useRef([]),
    { state: L } = Ue(),
    { hasSMSReminders: m } = L.notifications,
    { phoneNumber: p } = L.accountSettings,
    k = (c, f) => {
      const T = [...e];
      if (isNaN(Number(c.target.value))) {
        T[f] = '';
        return;
      }
      (T[f] = c.target.value), t(T), c.target.value && f < e.length - 1 && P.current[f + 1].focus();
    },
    y = (c, f) => {
      const T = c.key.toLowerCase();
      (T === 'backspace' || T === 'delete') && !e[f] && f > 0 && P.current[f - 1].focus(),
        T === 'enter' && e[f] && f < e.length - 1 && P.current[f + 1].focus();
    },
    u = (c) => {
      c.preventDefault();
      const f = c.clipboardData.getData('text').trim();
      if (f.split('').some((O) => isNaN(Number(O))) || f.length !== e.length) {
        t(Array(6).fill('')), E('invalid-code');
        return;
      }
      t(f.split(''));
    };
  j.useEffect(() => {
    if (!e.some((c) => !c)) {
      const c = e.join('');
      v(c);
    }
  }, [e]);
  const h = b.jsx(ce, {
      i18nKey: l === 'updateAccountEmail' ? 'errorsMsg.invalidCodeEmail' : 'errorsMsg.invalidCodeSMS',
      components: { 1: b.jsx('a', { href: '#', onClick: a, children: 'RESEND CODE' }) },
    }),
    r = b.jsx(ce, {
      i18nKey: l === 'updateAccountEmail' ? 'errorsMsg.expiredCodeEmail' : 'errorsMsg.expiredCodeSMS',
      components: { 1: b.jsx('a', { href: '#', onClick: a, children: 'RESEND CODE' }) },
    });
  j.useEffect(() => {
    C && C.length === 6 && (E(''), A(''), i());
  }, [C]);
  const i = () => {
      if ((N(!1), l === 'updateAccountEmail'))
        z.verifyChangeEmailOTP({ session: { token: s }, otp: C })
          .then(() => {
            M && M(!1), o(!0), w && w('generic-success'), g && g(!0);
          })
          .catch((c) => {
            c?.response?.status === 400 ? E('invalid-code') : c?.response?.status === 401 ? A('expired-code') : N(!0),
              console.error(c);
          });
      else if (l === 'updateAccountSMSNumber')
        z.verifyChangeSMSNumberOTP({ session: { token: s }, otp: C, activateTextReminders: m && !p })
          .then(() => {
            I && I(!1), o(!0), w && w('phone-success'), g && g(!0);
          })
          .catch((c) => {
            c?.response?.status === 400 ? E('invalid-code') : c?.response?.status === 401 ? A('expired-code') : N(!0),
              console.error(c);
          });
      else {
        const c = Me(qe(new Date(), 5), Ke);
        z.verifyOTP({ session: { token: s }, otp: C, expiryDate: c })
          .then(() => {
            K('/');
          })
          .catch((f) => {
            f?.response?.status === 400 ? E('invalid-code') : f?.response?.status === 401 ? A('expired-code') : N(!0),
              console.error(f);
          });
      }
    },
    d = () => {
      let c;
      return (
        F
          ? (c = { 'aria-labelledby': 'invalid-code-error' })
          : D
          ? (c = { 'aria-labelledby': 'expired-code-error' })
          : (c = {}),
        c
      );
    };
  return b.jsxs('fieldset', {
    className: 'codeContainer',
    children: [
      b.jsx('legend', { className: 'sr-only', children: _('authentication.codeAuthentication.fieldLegend') }),
      b.jsx('div', {
        className: J('inputs', { 'left-align': n === 'left', 'center-align': n === 'center' }),
        children:
          e.length === 6 &&
          e.map((c, f) => {
            const T = `digit-${(f + 1).toString()}`;
            return b.jsxs(
              j.Fragment,
              {
                children: [
                  b.jsx('label', {
                    className: 'sr-only',
                    htmlFor: T,
                    children: `${_('authentication.codeAuthentication.label')} ${f + 1}`,
                  }),
                  b.jsx('input', {
                    className: 'input',
                    type: 'text',
                    id: T,
                    name: T,
                    inputMode: 'numeric',
                    maxLength: 1,
                    value: c,
                    onChange: (O) => k(O, f),
                    onKeyDown: (O) => y(O, f),
                    onPaste: (O) => u(O),
                    ref: (O) => (P.current[f] = O),
                    'aria-invalid': !!(D || F),
                    ...d(),
                  }),
                ],
              },
              T
            );
          }),
      }),
      F &&
        b.jsx('div', {
          className: 'gnb-form-input error',
          children: b.jsx(se, { error: F === 'invalid-code' ? h : '', id: 'invalid-code-error' }),
        }),
      D &&
        b.jsx('div', {
          className: 'gnb-form-input error',
          children: b.jsx(se, { error: D === 'expired-code' ? r : '', id: 'expired-code-error' }),
        }),
    ],
  });
}
const Bt = ({
  alignment: n = 'center',
  session: e,
  type: t,
  setShowSuccessAlert: a,
  setSuccessMsg: s,
  setRefreshData: l,
  rememberMeChecked: o,
  length: w,
  email: g,
  setIsAuthenticateEmailModalOpen: N,
  smsNumber: F,
  setIsAuthenticateSMSNumberModalOpen: E,
  smsLanguage: D,
}) => {
  const { setSessionCookie: A, getSession: C } = _e(),
    { t: v } = le(),
    M = Array(w).fill(''),
    [I, K] = j.useState(M),
    [_, P] = j.useState(!1),
    [L, m] = j.useState(''),
    [p, k] = j.useState(''),
    [y, u] = j.useState(''),
    [h, r] = j.useState(!1),
    [i, d] = j.useState(!1),
    [c, f] = j.useState(!0),
    T = NaN,
    O = (R) => {
      A(R, o), K(M), r(!0);
    },
    S = (R) => {
      P(!0), r(!1), console.error(R);
    },
    x = () => {
      if ((k(''), u(''), m(''), c)) {
        console.error('Reset code not yet available.'), d(!0);
        return;
      }
      t === 'updateAccountEmail'
        ? z
            .createChangeEmailOTP({ session: { token: C() }, email: g })
            .then((R) => {
              O(R.data.token), f(!0);
            })
            .catch((R) => {
              S(R);
            })
        : t === 'updateAccountSMSNumber'
        ? F &&
          z
            .createChangeSMSNumberOTP({ session: { token: C() }, smsNumber: Be(F), smsLanguage: D })
            .then((R) => {
              O(R.data.token), f(!0);
            })
            .catch((R) => {
              S(R);
            })
        : z
            .resendOTP({ email: g })
            .then((R) => {
              O(R.data.token), f(!0);
            })
            .catch((R) => {
              S(R);
            });
    };
  return (
    j.useEffect(() => {
      c &&
        setTimeout(() => {
          f(!1);
        }, T);
    }, [c]),
    b.jsxs(b.Fragment, {
      children: [
        b.jsx(Ft, { resendCode: x, isResendCodeDisabled: c, type: g ? 'email' : 'phone' }),
        h &&
          b.jsx(oe, {
            isOpen: h,
            setIsOpen: r,
            variant: 'inPage',
            type: 'success',
            description: v(
              g ? 'authentication.checkEmailScreen.resendCodeMsg' : 'authentication.phoneCodeScreen.resendCodeMsg'
            ),
            hasMarginTop: !0,
          }),
        i &&
          b.jsx(oe, {
            isOpen: i,
            setIsOpen: d,
            variant: 'inPage',
            type: 'info',
            description: v('errorsMsg.resendCodeDisabled'),
            hasMarginTop: !0,
          }),
        b.jsxs('div', {
          className: 'code-inputs',
          children: [
            _ &&
              b.jsx(oe, {
                isOpen: _,
                setIsOpen: P,
                variant: 'inPage',
                type: 'critical',
                description: v('errorsMsg.resendCodeDisabled'),
                hasMarginTop: !0,
              }),
            b.jsx(Et, {
              codes: I,
              setCodes: K,
              handleResendCodeClick: x,
              alignment: n,
              session: e,
              type: t,
              setShowSuccessAlert: a,
              setSuccessMsg: s,
              setRefreshData: l,
              setHasSystemError: P,
              hasInvalidCodeError: p,
              setHasInvalidCodeError: k,
              hasExpiredCodeError: y,
              setHasExpiredCodeError: u,
              validCodes: L,
              setValidCode: m,
              rememberMeChecked: o,
              setIsAuthenticateEmailModalOpen: N,
              setIsAuthenticateSMSNumberModalOpen: E,
            }),
          ],
        }),
      ],
    })
  );
};
export {
  oe as A,
  Bt as C,
  wt as M,
  St as T,
  Lt as a,
  Kt as b,
  _t as c,
  Mt as d,
  jt as e,
  xt as f,
  Pt as g,
  It as i,
  At as r,
  Rt as v,
};
