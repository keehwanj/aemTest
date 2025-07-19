import {
  H as Se,
  I as de,
  J as Te,
  K as xe,
  L as Re,
  M as je,
  r as j,
  j as v,
  F as Pe,
  O as Ae,
  l as J,
  n as Ie,
  u as le,
  o as Le,
  P as Me,
  Q as Ke,
  a as _e,
  w as Be,
} from './index-BKDzaX2j.js';
import { B as re, E as se, H as z } from './Error-fngNGqfC.js';
import { T as ce } from './useMetadata-D4La1ovT.js';
function Ue(n, e) {
  const t = Se(n);
  if (isNaN(e)) return de(n, NaN);
  const r = t.getDate(),
    s = de(n, t.getTime());
  s.setMonth(t.getMonth() + e + 1, 0);
  const l = s.getDate();
  return r >= l ? s : (t.setFullYear(s.getFullYear(), s.getMonth(), r), t);
}
function $e(n, e) {
  return Ue(n, e * 12);
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
    var r;
    t === void 0 && (t = !0);
    var s = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, 'inert'),
      l = s === '' || s === 'true',
      o = l || (t && e && n(e.parentNode));
    return o;
  },
  qe = function (e) {
    var t,
      r = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, 'contenteditable');
    return r === '' || r === 'true';
  },
  Oe = function (e, t, r) {
    if (ee(e)) return [];
    var s = Array.prototype.slice.apply(e.querySelectorAll(Q));
    return t && q.call(e, Q) && s.unshift(e), (s = s.filter(r)), s;
  },
  Fe = function n(e, t, r) {
    for (var s = [], l = Array.from(e); l.length; ) {
      var o = l.shift();
      if (!ee(o, !1))
        if (o.tagName === 'SLOT') {
          var T = o.assignedElements(),
            m = T.length ? T : o.children,
            w = n(m, !0, r);
          r.flatten ? s.push.apply(s, w) : s.push({ scopeParent: o, candidates: w });
        } else {
          var N = q.call(o, Q);
          N && r.filter(o) && (t || !e.includes(o)) && s.push(o);
          var O = o.shadowRoot || (typeof r.getShadowRoot == 'function' && r.getShadowRoot(o)),
            F = !ee(O, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
          if (O && F) {
            var A = n(O === !0 ? o.children : O.children, !0, r);
            r.flatten ? s.push.apply(s, A) : s.push({ scopeParent: o, candidates: A });
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
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || qe(e)) && !Ee(e) ? 0 : e.tabIndex;
  },
  ze = function (e, t) {
    var r = U(e);
    return r < 0 && t && !Ee(e) ? 0 : r;
  },
  Ve = function (e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  },
  De = function (e) {
    return e.tagName === 'INPUT';
  },
  Ge = function (e) {
    return De(e) && e.type === 'hidden';
  },
  Ye = function (e) {
    var t =
      e.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(e.children).some(function (r) {
        return r.tagName === 'SUMMARY';
      });
    return t;
  },
  We = function (e, t) {
    for (var r = 0; r < e.length; r++) if (e[r].checked && e[r].form === t) return e[r];
  },
  Ze = function (e) {
    if (!e.name) return !0;
    var t = e.form || H(e),
      r = function (T) {
        return t.querySelectorAll('input[type="radio"][name="' + T + '"]');
      },
      s;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      s = r(window.CSS.escape(e.name));
    else
      try {
        s = r(e.name);
      } catch (o) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            o.message
          ),
          !1
        );
      }
    var l = We(s, e.form);
    return !l || l === e;
  },
  Xe = function (e) {
    return De(e) && e.type === 'radio';
  },
  Je = function (e) {
    return Xe(e) && !Ze(e);
  },
  Qe = function (e) {
    var t,
      r = e && H(e),
      s = (t = r) === null || t === void 0 ? void 0 : t.host,
      l = !1;
    if (r && r !== e) {
      var o, T, m;
      for (
        l = !!(
          ((o = s) !== null && o !== void 0 && (T = o.ownerDocument) !== null && T !== void 0 && T.contains(s)) ||
          (e != null && (m = e.ownerDocument) !== null && m !== void 0 && m.contains(e))
        );
        !l && s;

      ) {
        var w, N, O;
        (r = H(s)),
          (s = (w = r) === null || w === void 0 ? void 0 : w.host),
          (l = !!((N = s) !== null && N !== void 0 && (O = N.ownerDocument) !== null && O !== void 0 && O.contains(s)));
      }
    }
    return l;
  },
  ve = function (e) {
    var t = e.getBoundingClientRect(),
      r = t.width,
      s = t.height;
    return r === 0 && s === 0;
  },
  He = function (e, t) {
    var r = t.displayCheck,
      s = t.getShadowRoot;
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    var l = q.call(e, 'details>summary:first-of-type'),
      o = l ? e.parentElement : e;
    if (q.call(o, 'details:not([open]) *')) return !0;
    if (!r || r === 'full' || r === 'legacy-full') {
      if (typeof s == 'function') {
        for (var T = e; e; ) {
          var m = e.parentElement,
            w = H(e);
          if (m && !m.shadowRoot && s(m) === !0) return ve(e);
          e.assignedSlot ? (e = e.assignedSlot) : !m && w !== e.ownerDocument ? (e = w.host) : (e = m);
        }
        e = T;
      }
      if (Qe(e)) return !e.getClientRects().length;
      if (r !== 'legacy-full') return !0;
    } else if (r === 'non-zero-area') return ve(e);
    return !1;
  },
  et = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t; ) {
        if (t.tagName === 'FIELDSET' && t.disabled) {
          for (var r = 0; r < t.children.length; r++) {
            var s = t.children.item(r);
            if (s.tagName === 'LEGEND') return q.call(t, 'fieldset[disabled] *') ? !0 : !s.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  te = function (e, t) {
    return !(t.disabled || ee(t) || Ge(t) || He(t, e) || Ye(t) || et(t));
  },
  ue = function (e, t) {
    return !(Je(t) || U(t) < 0 || !te(e, t));
  },
  tt = function (e) {
    var t = parseInt(e.getAttribute('tabindex'), 10);
    return !!(isNaN(t) || t >= 0);
  },
  nt = function n(e) {
    var t = [],
      r = [];
    return (
      e.forEach(function (s, l) {
        var o = !!s.scopeParent,
          T = o ? s.scopeParent : s,
          m = ze(T, o),
          w = o ? n(s.candidates) : T;
        m === 0
          ? o
            ? t.push.apply(t, w)
            : t.push(T)
          : r.push({ documentOrder: l, tabIndex: m, item: s, isScope: o, content: w });
      }),
      r
        .sort(Ve)
        .reduce(function (s, l) {
          return l.isScope ? s.push.apply(s, l.content) : s.push(l.content), s;
        }, [])
        .concat(t)
    );
  },
  ke = function (e, t) {
    t = t || {};
    var r;
    return (
      t.getShadowRoot
        ? (r = Fe([e], t.includeContainer, {
            filter: ue.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: tt,
          }))
        : (r = Oe(e, t.includeContainer, ue.bind(null, t))),
      nt(r)
    );
  },
  Ce = function (e, t) {
    t = t || {};
    var r;
    return (
      t.getShadowRoot
        ? (r = Fe([e], t.includeContainer, { filter: te.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot }))
        : (r = Oe(e, t.includeContainer, te.bind(null, t))),
      r
    );
  },
  $ = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return q.call(e, Q) === !1 ? !1 : ue(t, e);
  },
  at = we.concat('iframe').join(','),
  X = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return q.call(e, at) === !1 ? !1 : te(t, e);
  };
const rt = Object.freeze(
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
    var r = Object.getOwnPropertySymbols(n);
    e &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(n, s).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function pe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? be(Object(t), !0).forEach(function (r) {
          it(n, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : be(Object(t)).forEach(function (r) {
          Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return n;
}
function it(n, e, t) {
  return (
    (e = st(e)),
    e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = t),
    n
  );
}
function ot(n, e) {
  if (typeof n != 'object' || n === null) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(n);
}
function st(n) {
  var e = ot(n, 'string');
  return typeof e == 'symbol' ? e : String(e);
}
var he = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var r = e[e.length - 1];
        r !== t && r.pause();
      }
      var s = e.indexOf(t);
      s === -1 || e.splice(s, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var r = e.indexOf(t);
      r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
    },
  },
  ct = function (e) {
    return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
  },
  ut = function (e) {
    return e?.key === 'Escape' || e?.key === 'Esc' || e?.keyCode === 27;
  },
  W = function (e) {
    return e?.key === 'Tab' || e?.keyCode === 9;
  },
  lt = function (e) {
    return W(e) && !e.shiftKey;
  },
  ft = function (e) {
    return W(e) && e.shiftKey;
  },
  me = function (e) {
    return setTimeout(e, 0);
  },
  ge = function (e, t) {
    var r = -1;
    return (
      e.every(function (s, l) {
        return t(s) ? ((r = l), !1) : !0;
      }),
      r
    );
  },
  Y = function (e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) r[s - 1] = arguments[s];
    return typeof e == 'function' ? e.apply(void 0, r) : e;
  },
  Z = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == 'function' ? e.composedPath()[0] : e.target;
  },
  dt = [],
  vt = function (e, t) {
    var r = t?.document || document,
      s = t?.trapStack || dt,
      l = pe(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: lt,
          isKeyBackward: ft,
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
      T,
      m = function (a, i, c) {
        return a && a[i] !== void 0 ? a[i] : l[c || i];
      },
      w = function (a, i) {
        var c = typeof i?.composedPath == 'function' ? i.composedPath() : void 0;
        return o.containerGroups.findIndex(function (d) {
          var y = d.container,
            C = d.tabbableNodes;
          return (
            y.contains(a) ||
            c?.includes(y) ||
            C.find(function (D) {
              return D === a;
            })
          );
        });
      },
      N = function (a) {
        var i = l[a];
        if (typeof i == 'function') {
          for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), y = 1; y < c; y++) d[y - 1] = arguments[y];
          i = i.apply(void 0, d);
        }
        if ((i === !0 && (i = void 0), !i)) {
          if (i === void 0 || i === !1) return i;
          throw new Error('`'.concat(a, '` was specified but was not a node, or did not return a node'));
        }
        var C = i;
        if (typeof i == 'string' && ((C = r.querySelector(i)), !C))
          throw new Error('`'.concat(a, '` as selector refers to no known node'));
        return C;
      },
      O = function () {
        var a = N('initialFocus');
        if (a === !1) return !1;
        if (a === void 0 || !X(a, l.tabbableOptions))
          if (w(r.activeElement) >= 0) a = r.activeElement;
          else {
            var i = o.tabbableGroups[0],
              c = i && i.firstTabbableNode;
            a = c || N('fallbackFocus');
          }
        if (!a) throw new Error('Your focus-trap needs to have at least one focusable element');
        return a;
      },
      F = function () {
        if (
          ((o.containerGroups = o.containers.map(function (a) {
            var i = ke(a, l.tabbableOptions),
              c = Ce(a, l.tabbableOptions),
              d = i.length > 0 ? i[0] : void 0,
              y = i.length > 0 ? i[i.length - 1] : void 0,
              C = c.find(function (x) {
                return $(x);
              }),
              D = c
                .slice()
                .reverse()
                .find(function (x) {
                  return $(x);
                }),
              S = !!i.find(function (x) {
                return U(x) > 0;
              });
            return {
              container: a,
              tabbableNodes: i,
              focusableNodes: c,
              posTabIndexesFound: S,
              firstTabbableNode: d,
              lastTabbableNode: y,
              firstDomTabbableNode: C,
              lastDomTabbableNode: D,
              nextTabbableNode: function (R) {
                var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                  B = i.indexOf(R);
                return B < 0
                  ? V
                    ? c.slice(c.indexOf(R) + 1).find(function (G) {
                        return $(G);
                      })
                    : c
                        .slice(0, c.indexOf(R))
                        .reverse()
                        .find(function (G) {
                          return $(G);
                        })
                  : i[B + (V ? 1 : -1)];
              },
            };
          })),
          (o.tabbableGroups = o.containerGroups.filter(function (a) {
            return a.tabbableNodes.length > 0;
          })),
          o.tabbableGroups.length <= 0 && !N('fallbackFocus'))
        )
          throw new Error(
            'Your focus-trap must have at least one container with at least one tabbable node in it at all times'
          );
        if (
          o.containerGroups.find(function (a) {
            return a.posTabIndexesFound;
          }) &&
          o.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
          );
      },
      A = function p(a) {
        var i = a.activeElement;
        if (i) return i.shadowRoot && i.shadowRoot.activeElement !== null ? p(i.shadowRoot) : i;
      },
      k = function p(a) {
        if (a !== !1 && a !== A(document)) {
          if (!a || !a.focus) {
            p(O());
            return;
          }
          a.focus({ preventScroll: !!l.preventScroll }), (o.mostRecentlyFocusedNode = a), ct(a) && a.select();
        }
      },
      f = function (a) {
        var i = N('setReturnFocus', a);
        return i || (i === !1 ? !1 : a);
      },
      M = function (a) {
        var i = a.target,
          c = a.event,
          d = a.isBackward,
          y = d === void 0 ? !1 : d;
        (i = i || Z(c)), F();
        var C = null;
        if (o.tabbableGroups.length > 0) {
          var D = w(i, c),
            S = D >= 0 ? o.containerGroups[D] : void 0;
          if (D < 0)
            y
              ? (C = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode)
              : (C = o.tabbableGroups[0].firstTabbableNode);
          else if (y) {
            var x = ge(o.tabbableGroups, function (ne) {
              var ae = ne.firstTabbableNode;
              return i === ae;
            });
            if (
              (x < 0 &&
                (S.container === i ||
                  (X(i, l.tabbableOptions) && !$(i, l.tabbableOptions) && !S.nextTabbableNode(i, !1))) &&
                (x = D),
              x >= 0)
            ) {
              var R = x === 0 ? o.tabbableGroups.length - 1 : x - 1,
                V = o.tabbableGroups[R];
              C = U(i) >= 0 ? V.lastTabbableNode : V.lastDomTabbableNode;
            } else W(c) || (C = S.nextTabbableNode(i, !1));
          } else {
            var B = ge(o.tabbableGroups, function (ne) {
              var ae = ne.lastTabbableNode;
              return i === ae;
            });
            if (
              (B < 0 &&
                (S.container === i ||
                  (X(i, l.tabbableOptions) && !$(i, l.tabbableOptions) && !S.nextTabbableNode(i))) &&
                (B = D),
              B >= 0)
            ) {
              var G = B === o.tabbableGroups.length - 1 ? 0 : B + 1,
                fe = o.tabbableGroups[G];
              C = U(i) >= 0 ? fe.firstTabbableNode : fe.firstDomTabbableNode;
            } else W(c) || (C = S.nextTabbableNode(i));
          }
        } else C = N('fallbackFocus');
        return C;
      },
      I = function (a) {
        var i = Z(a);
        if (!(w(i, a) >= 0)) {
          if (Y(l.clickOutsideDeactivates, a)) {
            T.deactivate({ returnFocus: l.returnFocusOnDeactivate });
            return;
          }
          Y(l.allowOutsideClick, a) || a.preventDefault();
        }
      },
      K = function (a) {
        var i = Z(a),
          c = w(i, a) >= 0;
        if (c || i instanceof Document) c && (o.mostRecentlyFocusedNode = i);
        else {
          a.stopImmediatePropagation();
          var d,
            y = !0;
          if (o.mostRecentlyFocusedNode)
            if (U(o.mostRecentlyFocusedNode) > 0) {
              var C = w(o.mostRecentlyFocusedNode),
                D = o.containerGroups[C].tabbableNodes;
              if (D.length > 0) {
                var S = D.findIndex(function (x) {
                  return x === o.mostRecentlyFocusedNode;
                });
                S >= 0 &&
                  (l.isKeyForward(o.recentNavEvent)
                    ? S + 1 < D.length && ((d = D[S + 1]), (y = !1))
                    : S - 1 >= 0 && ((d = D[S - 1]), (y = !1)));
              }
            } else
              o.containerGroups.some(function (x) {
                return x.tabbableNodes.some(function (R) {
                  return U(R) > 0;
                });
              }) || (y = !1);
          else y = !1;
          y && (d = M({ target: o.mostRecentlyFocusedNode, isBackward: l.isKeyBackward(o.recentNavEvent) })),
            k(d || o.mostRecentlyFocusedNode || O());
        }
        o.recentNavEvent = void 0;
      },
      _ = function (a) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        o.recentNavEvent = a;
        var c = M({ event: a, isBackward: i });
        c && (W(a) && a.preventDefault(), k(c));
      },
      P = function (a) {
        if (ut(a) && Y(l.escapeDeactivates, a) !== !1) {
          a.preventDefault(), T.deactivate();
          return;
        }
        (l.isKeyForward(a) || l.isKeyBackward(a)) && _(a, l.isKeyBackward(a));
      },
      L = function (a) {
        var i = Z(a);
        w(i, a) >= 0 ||
          Y(l.clickOutsideDeactivates, a) ||
          Y(l.allowOutsideClick, a) ||
          (a.preventDefault(), a.stopImmediatePropagation());
      },
      h = function () {
        if (o.active)
          return (
            he.activateTrap(s, T),
            (o.delayInitialFocusTimer = l.delayInitialFocus
              ? me(function () {
                  k(O());
                })
              : k(O())),
            r.addEventListener('focusin', K, !0),
            r.addEventListener('mousedown', I, { capture: !0, passive: !1 }),
            r.addEventListener('touchstart', I, { capture: !0, passive: !1 }),
            r.addEventListener('click', L, { capture: !0, passive: !1 }),
            r.addEventListener('keydown', P, { capture: !0, passive: !1 }),
            T
          );
      },
      b = function () {
        if (o.active)
          return (
            r.removeEventListener('focusin', K, !0),
            r.removeEventListener('mousedown', I, !0),
            r.removeEventListener('touchstart', I, !0),
            r.removeEventListener('click', L, !0),
            r.removeEventListener('keydown', P, !0),
            T
          );
      },
      E = function (a) {
        var i = a.some(function (c) {
          var d = Array.from(c.removedNodes);
          return d.some(function (y) {
            return y === o.mostRecentlyFocusedNode;
          });
        });
        i && k(O());
      },
      g = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(E) : void 0,
      u = function () {
        g &&
          (g.disconnect(),
          o.active &&
            !o.paused &&
            o.containers.map(function (a) {
              g.observe(a, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (T = {
        get active() {
          return o.active;
        },
        get paused() {
          return o.paused;
        },
        activate: function (a) {
          if (o.active) return this;
          var i = m(a, 'onActivate'),
            c = m(a, 'onPostActivate'),
            d = m(a, 'checkCanFocusTrap');
          d || F(), (o.active = !0), (o.paused = !1), (o.nodeFocusedBeforeActivation = r.activeElement), i?.();
          var y = function () {
            d && F(), h(), u(), c?.();
          };
          return d ? (d(o.containers.concat()).then(y, y), this) : (y(), this);
        },
        deactivate: function (a) {
          if (!o.active) return this;
          var i = pe(
            {
              onDeactivate: l.onDeactivate,
              onPostDeactivate: l.onPostDeactivate,
              checkCanReturnFocus: l.checkCanReturnFocus,
            },
            a
          );
          clearTimeout(o.delayInitialFocusTimer),
            (o.delayInitialFocusTimer = void 0),
            b(),
            (o.active = !1),
            (o.paused = !1),
            u(),
            he.deactivateTrap(s, T);
          var c = m(i, 'onDeactivate'),
            d = m(i, 'onPostDeactivate'),
            y = m(i, 'checkCanReturnFocus'),
            C = m(i, 'returnFocus', 'returnFocusOnDeactivate');
          c?.();
          var D = function () {
            me(function () {
              C && k(f(o.nodeFocusedBeforeActivation)), d?.();
            });
          };
          return C && y ? (y(f(o.nodeFocusedBeforeActivation)).then(D, D), this) : (D(), this);
        },
        pause: function (a) {
          if (o.paused || !o.active) return this;
          var i = m(a, 'onPause'),
            c = m(a, 'onPostPause');
          return (o.paused = !0), i?.(), b(), u(), c?.(), this;
        },
        unpause: function (a) {
          if (!o.paused || !o.active) return this;
          var i = m(a, 'onUnpause'),
            c = m(a, 'onPostUnpause');
          return (o.paused = !1), i?.(), F(), h(), u(), c?.(), this;
        },
        updateContainerElements: function (a) {
          var i = [].concat(a).filter(Boolean);
          return (
            (o.containers = i.map(function (c) {
              return typeof c == 'string' ? r.querySelector(c) : c;
            })),
            o.active && F(),
            u(),
            this
          );
        },
      }),
      T.updateContainerElements(e),
      T
    );
  };
const bt = Object.freeze(
    Object.defineProperty({ __proto__: null, createFocusTrap: vt }, Symbol.toStringTag, { value: 'Module' })
  ),
  pt = Te(bt),
  ht = Te(rt);
var ie, ye;
function mt() {
  if (ye) return ie;
  ye = 1;
  function n(h) {
    '@babel/helpers - typeof';
    return (
      (n =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (b) {
              return typeof b;
            }
          : function (b) {
              return b && typeof Symbol == 'function' && b.constructor === Symbol && b !== Symbol.prototype
                ? 'symbol'
                : typeof b;
            }),
      n(h)
    );
  }
  function e(h, b) {
    if (!(h instanceof b)) throw new TypeError('Cannot call a class as a function');
  }
  function t(h, b) {
    for (var E = 0; E < b.length; E++) {
      var g = b[E];
      (g.enumerable = g.enumerable || !1),
        (g.configurable = !0),
        'value' in g && (g.writable = !0),
        Object.defineProperty(h, F(g.key), g);
    }
  }
  function r(h, b, E) {
    return b && t(h.prototype, b), Object.defineProperty(h, 'prototype', { writable: !1 }), h;
  }
  function s(h, b) {
    if (typeof b != 'function' && b !== null) throw new TypeError('Super expression must either be null or a function');
    (h.prototype = Object.create(b && b.prototype, { constructor: { value: h, writable: !0, configurable: !0 } })),
      Object.defineProperty(h, 'prototype', { writable: !1 }),
      b && l(h, b);
  }
  function l(h, b) {
    return (
      (l = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (g, u) {
            return (g.__proto__ = u), g;
          }),
      l(h, b)
    );
  }
  function o(h) {
    var b = w();
    return function () {
      var g = N(h),
        u;
      if (b) {
        var p = N(this).constructor;
        u = Reflect.construct(g, arguments, p);
      } else u = g.apply(this, arguments);
      return T(this, u);
    };
  }
  function T(h, b) {
    if (b && (n(b) === 'object' || typeof b == 'function')) return b;
    if (b !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return m(h);
  }
  function m(h) {
    if (h === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return h;
  }
  function w() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function N(h) {
    return (
      (N = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (E) {
            return E.__proto__ || Object.getPrototypeOf(E);
          }),
      N(h)
    );
  }
  function O(h, b, E) {
    return (
      (b = F(b)),
      b in h ? Object.defineProperty(h, b, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : (h[b] = E),
      h
    );
  }
  function F(h) {
    var b = A(h, 'string');
    return n(b) === 'symbol' ? b : String(b);
  }
  function A(h, b) {
    if (n(h) !== 'object' || h === null) return h;
    var E = h[Symbol.toPrimitive];
    if (E !== void 0) {
      var g = E.call(h, b);
      if (n(g) !== 'object') return g;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (b === 'string' ? String : Number)(h);
  }
  var k = xe(),
    f = Re(),
    M = pt,
    I = M.createFocusTrap,
    K = ht,
    _ = K.isFocusable,
    P = (function (h) {
      s(E, h);
      var b = o(E);
      function E(g) {
        var u;
        e(this, E),
          (u = b.call(this, g)),
          O(m(u), 'getNodeForOption', function (i) {
            var c,
              d = (c = this.internalOptions[i]) !== null && c !== void 0 ? c : this.originalOptions[i];
            if (typeof d == 'function') {
              for (var y = arguments.length, C = new Array(y > 1 ? y - 1 : 0), D = 1; D < y; D++)
                C[D - 1] = arguments[D];
              d = d.apply(void 0, C);
            }
            if ((d === !0 && (d = void 0), !d)) {
              if (d === void 0 || d === !1) return d;
              throw new Error('`'.concat(i, '` was specified but was not a node, or did not return a node'));
            }
            var S = d;
            if (typeof d == 'string') {
              var x;
              if (((S = (x = this.getDocument()) === null || x === void 0 ? void 0 : x.querySelector(d)), !S))
                throw new Error('`'.concat(i, '` as selector refers to no known node'));
            }
            return S;
          }),
          (u.handleDeactivate = u.handleDeactivate.bind(m(u))),
          (u.handlePostDeactivate = u.handlePostDeactivate.bind(m(u))),
          (u.handleClickOutsideDeactivates = u.handleClickOutsideDeactivates.bind(m(u))),
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
        var p = g.focusTrapOptions;
        for (var a in p)
          if (Object.prototype.hasOwnProperty.call(p, a)) {
            if (
              a === 'returnFocusOnDeactivate' ||
              a === 'onDeactivate' ||
              a === 'onPostDeactivate' ||
              a === 'checkCanReturnFocus' ||
              a === 'clickOutsideDeactivates'
            ) {
              u.originalOptions[a] = p[a];
              continue;
            }
            u.internalOptions[a] = p[a];
          }
        return (u.outsideClick = null), (u.focusTrapElements = g.containerElements || []), u.updatePreviousElement(), u;
      }
      return (
        r(E, [
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
              var p =
                typeof this.originalOptions.clickOutsideDeactivates == 'function'
                  ? this.originalOptions.clickOutsideDeactivates.call(null, u)
                  : this.originalOptions.clickOutsideDeactivates;
              return p && (this.outsideClick = { target: u.target, allowDeactivation: p }), p;
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
                p = function () {
                  var i = u.getReturnFocusNode(),
                    c = !!(
                      u.originalOptions.returnFocusOnDeactivate &&
                      i !== null &&
                      i !== void 0 &&
                      i.focus &&
                      (!u.outsideClick ||
                        (u.outsideClick.allowDeactivation &&
                          !_(u.outsideClick.target, u.internalOptions.tabbableOptions)))
                    ),
                    d = u.internalOptions.preventScroll,
                    y = d === void 0 ? !1 : d;
                  c && i.focus({ preventScroll: y }),
                    u.originalOptions.onPostDeactivate && u.originalOptions.onPostDeactivate.call(null),
                    (u.outsideClick = null);
                };
              this.originalOptions.checkCanReturnFocus
                ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(p, p)
                : p();
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
                var p = !u.active && this.props.active,
                  a = u.active && !this.props.active,
                  i = !u.paused && this.props.paused,
                  c = u.paused && !this.props.paused;
                if ((p && (this.updatePreviousElement(), this.focusTrap.activate()), a)) {
                  this.deactivateTrap();
                  return;
                }
                i && this.focusTrap.pause(), c && this.focusTrap.unpause();
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
                p = this.props.children ? k.Children.only(this.props.children) : void 0;
              if (p) {
                if (p.type && p.type === k.Fragment)
                  throw new Error(
                    'A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.'
                  );
                var a = function (d) {
                    var y = u.props.containerElements;
                    p && (typeof p.ref == 'function' ? p.ref(d) : p.ref && (p.ref.current = d)),
                      (u.focusTrapElements = y || [d]);
                  },
                  i = k.cloneElement(p, { ref: a });
                return i;
              }
              return null;
            },
          },
        ]),
        E
      );
    })(k.Component),
    L = typeof Element > 'u' ? Function : Element;
  return (
    (P.propTypes = {
      active: f.bool,
      paused: f.bool,
      focusTrapOptions: f.shape({
        document: f.object,
        onActivate: f.func,
        onPostActivate: f.func,
        checkCanFocusTrap: f.func,
        onPause: f.func,
        onPostPause: f.func,
        onUnpause: f.func,
        onPostUnpause: f.func,
        onDeactivate: f.func,
        onPostDeactivate: f.func,
        checkCanReturnFocus: f.func,
        initialFocus: f.oneOfType([f.instanceOf(L), f.string, f.bool, f.func]),
        fallbackFocus: f.oneOfType([f.instanceOf(L), f.string, f.func]),
        escapeDeactivates: f.oneOfType([f.bool, f.func]),
        clickOutsideDeactivates: f.oneOfType([f.bool, f.func]),
        returnFocusOnDeactivate: f.bool,
        setReturnFocus: f.oneOfType([f.instanceOf(L), f.string, f.bool, f.func]),
        allowOutsideClick: f.oneOfType([f.bool, f.func]),
        preventScroll: f.bool,
        tabbableOptions: f.shape({
          displayCheck: f.oneOf(['full', 'legacy-full', 'non-zero-area', 'none']),
          getShadowRoot: f.oneOfType([f.bool, f.func]),
        }),
        trapStack: f.array,
        isKeyForward: f.func,
        isKeyBackward: f.func,
      }),
      containerElements: f.arrayOf(f.instanceOf(L)),
      children: f.oneOfType([f.element, f.instanceOf(L)]),
    }),
    (P.defaultProps = { active: !0, paused: !1, focusTrapOptions: {}, _createFocusTrap: I }),
    (ie = P),
    ie
  );
}
var gt = mt();
const yt = je(gt),
  Tt = ({
    id: n,
    title: e,
    primaryBtnProps: t,
    secondaryBtnProps: r,
    linkBtnProps: s,
    hasSecondaryBtn: l,
    hasLinkBtn: o,
    children: T,
    hasFooter: m,
    open: w,
    onClose: N,
  }) => {
    const O = j.useRef(null);
    j.useEffect(() => {
      w ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll');
    }, [w]);
    const F = w ? { 'aria-labelledby': `${n}-description` } : {},
      A = (k) => {
        O.current && !O.current.contains(k.target) && N();
      };
    return v.jsx('div', {
      className: 'gnb-modal left',
      id: n + Math.random().toString(36).substring(2, 9),
      role: 'dialog',
      'aria-modal': 'true',
      'aria-hidden': !w,
      ...F,
      onClick: A,
      children:
        w &&
        v.jsx(yt, {
          focusTrapOptions: { clickOutsideDeactivates: !0, initialFocus: !1 },
          children: v.jsxs('dialog', {
            ref: O,
            children: [
              v.jsxs('button', {
                className: 'gnb-btn-close',
                onClick: N,
                children: [
                  v.jsx('span', { className: 'sr-only', children: 'Close modal window' }),
                  v.jsx(Pe, { icon: Ae }),
                ],
              }),
              v.jsx('div', { className: 'gnb-modal-header', children: v.jsx('h2', { id: `${n}-title`, children: e }) }),
              v.jsx('div', { className: 'gnb-modal-body', id: `${n}-description`, children: T }),
              m &&
                v.jsxs('div', {
                  className: 'gnb-modal-footer',
                  children: [
                    v.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: v.jsx(re, {
                        type: 'button',
                        variant: t?.variant ? t?.variant : 'primary',
                        label: t?.label,
                        size: t?.size ? t.size : 'small',
                        onClick: t?.onClick,
                        disabled: t?.disabled,
                      }),
                    }),
                    l &&
                      v.jsx(re, {
                        variant: r?.variant ? r.variant : 'secondary',
                        label: r?.label,
                        size: r?.size ? r.size : 'small',
                        onClick: r?.onClick,
                        disabled: r?.disabled,
                      }),
                    o &&
                      v.jsx(re, {
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
    inPageHeading: r,
    isOpen: s,
    setIsOpen: l,
    hasMarginTop: o,
    hasTimeout: T = !0,
  }) => {
    const [m, w] = j.useState(!1),
      N = NaN;
    return (
      j.useEffect(() => {
        s && w(!1);
      }, [s]),
      j.useEffect(() => {
        const O = T
          ? setTimeout(() => {
              w(!0), l(!1);
            }, N)
          : void 0;
        return () => clearTimeout(O);
      }, [s, n, e, t, r, l, m, T]),
      m
        ? null
        : s
        ? v.jsxs(v.Fragment, {
            children: [
              n !== 'global' &&
                v.jsxs('div', {
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
                    n === 'inPage' && r && v.jsx('h2', { className: 'left', children: r }),
                    v.jsx('div', { className: 'left', children: t }),
                  ],
                }),
              n === 'global' &&
                v.jsx('section', {
                  className: J({
                    'gnb-alert-info-global': e === 'info',
                    'gnb-alert-warning-global': e === 'warning',
                    'gnb-alert-critical-global': e === 'critical',
                  }),
                  children: v.jsxs('div', {
                    className: 'container-fluid',
                    children: [
                      typeof t == 'string' && v.jsx('p', { className: 'left', children: t }),
                      typeof t != 'string' && t,
                    ],
                  }),
                }),
            ],
          })
        : null
    );
  },
  Ct = ({
    label: n = '',
    type: e,
    helperText: t,
    required: r = !1,
    placeholder: s,
    value: l,
    onChange: o,
    onKeyUp: T,
    onBlur: m,
    onFocus: w,
    error: N,
    valid: O,
    id: F,
    maxlength: A,
    hasTooltipModal: k = !1,
    tooltipBody: f = '',
    tooltipTitle: M = '',
    isTooltipModalOpen: I = !1,
    setIsTooltipModalOpen: K = () => {},
    setTextInputRef: _,
  }) => {
    const P = Ie(n) + '-error-id',
      L = N ? { 'aria-labelledby': P } : {},
      h = () => K(!1);
    return (
      j.useEffect(() => {
        const b = (E) => {
          E.key === 'Escape' && h();
        };
        return (
          I && window.addEventListener('keydown', b),
          () => {
            window.removeEventListener('keydown', b);
          }
        );
      }, [I]),
      v.jsxs(v.Fragment, {
        children: [
          v.jsxs('form', {
            onSubmit: (b) => b.preventDefault(),
            className: J('gnb-form-input', N ? 'error' : '', O ? 'valid' : ''),
            noValidate: !0,
            children: [
              v.jsxs('label', {
                className: 'left',
                htmlFor: F || n,
                children: [
                  !k && v.jsxs('span', { children: [n, r && v.jsx('span', { className: 'required', children: '*' })] }),
                  k &&
                    v.jsxs('a', {
                      href: '#',
                      tabIndex: 0,
                      'data-target': F || n,
                      'aria-haspopup': 'dialog',
                      'aria-controls': F || n,
                      className: 'modal-button info gnb-tooltip-link',
                      onClick: () => K(!0),
                      children: [n, r && v.jsx('span', { className: 'required', children: '*' })],
                    }),
                ],
              }),
              t && v.jsx('div', { className: 'gnb-form-helper-text left', children: t }),
              v.jsx('input', {
                type: e,
                name: n,
                id: F || n,
                required: r,
                value: l,
                placeholder: s,
                onChange: o,
                ...L,
                'aria-invalid': !!N,
                className: 'text-input',
                maxLength: A,
                onFocus: w,
                onBlur: m,
                onKeyUp: T,
                ref: (b) => {
                  _ && _(b);
                },
              }),
              N && v.jsx(se, { id: P, error: N, classes: e === 'tel' ? 'tel-input' : '' }),
            ],
          }),
          I && v.jsx(Tt, { id: `tooltip-input-modal-${F || n}`, title: M, open: I, onClose: h, children: f }),
        ],
      })
    );
  };
function St(n, e, t) {
  return /^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,3})+$/.test(n) ? (e(''), !0) : (e(t), !1);
}
function xt(n, e, t) {
  return /^\+1[0-9]{10}$/.test(n) ? (e(''), !0) : (e(t), !1);
}
function wt(n) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_!,.@#$%&'*();:~? -]*$/.test(n);
}
const Rt = (n, e) => {
  n.target.value.length > 2 ? e(!1) : e(!0);
};
function jt(n) {
  const e = [];
  for (const t of n) {
    const r = document?.getElementById(t)?.checked;
    e.push({ value: t, checked: r });
  }
  return e;
}
function Pt(n) {
  return n.replace(/[^\w\s]/gi, '');
}
function Nt(n) {
  return n.replace(/\s/g, '');
}
function At(n) {
  return Nt(n).length === 6 || n.toUpperCase() === 'NA';
}
function It(n) {
  return n.trim().length <= 8 && n.trim().length >= 1;
}
function Lt(n) {
  return n.trim().length >= 1 && wt(n);
}
function Mt(n) {
  return n.trim().length >= 0;
}
const Kt = (n, e, t) => {
  let r;
  return n === 'profanity' && (r = e), n === 'invalid-custom-name' && (r = t), r;
};
function Ot({ resendCode: n, isResendCodeDisabled: e, type: t }) {
  const { t: r } = le(),
    s = () => {
      n();
    };
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx('p', {
        className: 'margin-bottom-sm',
        children: r(
          t === 'email' ? 'authentication.checkEmailScreen.description1' : 'authentication.phoneCodeScreen.description1'
        ),
      }),
      t === 'phone' &&
        v.jsxs('p', {
          className: 'margin-bottom-sm',
          children: [' ', r('authentication.phoneCodeScreen.description2')],
        }),
      v.jsx(ce, {
        i18nKey:
          t === 'email'
            ? e
              ? 'authentication.checkEmailScreen.description2'
              : 'authentication.checkEmailScreen.description3'
            : e
            ? 'authentication.phoneCodeScreen.description3'
            : 'authentication.phoneCodeScreen.description4',
        components: { 1: v.jsx('a', { href: '#', onClick: s, children: 'Resend Code' }) },
      }),
    ],
  });
}
function Ft({
  alignment: n,
  codes: e,
  setCodes: t,
  handleResendCodeClick: r,
  session: s,
  type: l,
  setShowSuccessAlert: o,
  setSuccessMsg: T,
  setRefreshData: m,
  setHasSystemError: w,
  hasInvalidCodeError: N,
  setHasInvalidCodeError: O,
  hasExpiredCodeError: F,
  setHasExpiredCodeError: A,
  validCodes: k,
  setValidCode: f,
  setIsAuthenticateEmailModalOpen: M,
  setIsAuthenticateSMSNumberModalOpen: I,
}) {
  const K = Le(),
    { t: _ } = le(),
    P = j.useRef([]),
    L = (a, i) => {
      const c = [...e];
      if (isNaN(Number(a.target.value))) {
        c[i] = '';
        return;
      }
      (c[i] = a.target.value), t(c), a.target.value && i < e.length - 1 && P.current[i + 1].focus();
    },
    h = (a, i) => {
      const c = a.key.toLowerCase();
      (c === 'backspace' || c === 'delete') && !e[i] && i > 0 && P.current[i - 1].focus(),
        c === 'enter' && e[i] && i < e.length - 1 && P.current[i + 1].focus();
    },
    b = (a) => {
      a.preventDefault();
      const i = a.clipboardData.getData('text').trim();
      if (i.split('').some((d) => isNaN(Number(d))) || i.length !== e.length) {
        t(Array(6).fill('')), O('invalid-code');
        return;
      }
      t(i.split(''));
    };
  j.useEffect(() => {
    if (!e.some((a) => !a)) {
      const a = e.join('');
      f(a);
    }
  }, [e]);
  const E = v.jsx(ce, {
      i18nKey: l === 'updateAccountEmail' ? 'errorsMsg.invalidCodeEmail' : 'errorsMsg.invalidCodeSMS',
      components: { 1: v.jsx('a', { href: '#', onClick: r, children: 'RESEND CODE' }) },
    }),
    g = v.jsx(ce, {
      i18nKey: l === 'updateAccountEmail' ? 'errorsMsg.expiredCodeEmail' : 'errorsMsg.expiredCodeSMS',
      components: { 1: v.jsx('a', { href: '#', onClick: r, children: 'RESEND CODE' }) },
    });
  j.useEffect(() => {
    k && k.length === 6 && (O(''), A(''), u());
  }, [k]);
  const u = () => {
      if ((w(!1), l === 'updateAccountEmail'))
        z.verifyChangeEmailOTP({ session: { token: s }, otp: k })
          .then(() => {
            M && M(!1), o(!0), T && T('generic-success'), m && m(!0);
          })
          .catch((a) => {
            a?.response?.status === 400 ? O('invalid-code') : a?.response?.status === 401 ? A('expired-code') : w(!0),
              console.error(a);
          });
      else if (l === 'updateAccountSMSNumber')
        z.verifyChangeSMSNumberOTP({ session: { token: s }, otp: k })
          .then(() => {
            I && I(!1), o(!0), T && T('phone-success'), m && m(!0);
          })
          .catch((a) => {
            a?.response?.status === 400 ? O('invalid-code') : a?.response?.status === 401 ? A('expired-code') : w(!0),
              console.error(a);
          });
      else {
        const a = Me($e(new Date(), 5), Ke);
        z.verifyOTP({ session: { token: s }, otp: k, expiryDate: a })
          .then(() => {
            K('/');
          })
          .catch((i) => {
            i?.response?.status === 400 ? O('invalid-code') : i?.response?.status === 401 ? A('expired-code') : w(!0),
              console.error(i);
          });
      }
    },
    p = () => {
      let a;
      return (
        N
          ? (a = { 'aria-labelledby': 'invalid-code-error' })
          : F
          ? (a = { 'aria-labelledby': 'expired-code-error' })
          : (a = {}),
        a
      );
    };
  return v.jsxs('fieldset', {
    className: 'codeContainer',
    children: [
      v.jsx('legend', { className: 'sr-only', children: _('authentication.codeAuthentication.fieldLegend') }),
      v.jsx('div', {
        className: J('inputs', { 'left-align': n === 'left', 'center-align': n === 'center' }),
        children:
          e.length === 6 &&
          e.map((a, i) => {
            const c = `digit-${(i + 1).toString()}`;
            return v.jsxs(
              j.Fragment,
              {
                children: [
                  v.jsx('label', {
                    className: 'sr-only',
                    htmlFor: c,
                    children: `${_('authentication.codeAuthentication.label')} ${i + 1}`,
                  }),
                  v.jsx('input', {
                    className: 'input',
                    type: 'text',
                    id: c,
                    name: c,
                    inputMode: 'numeric',
                    maxLength: 1,
                    value: a,
                    onChange: (d) => L(d, i),
                    onKeyDown: (d) => h(d, i),
                    onPaste: (d) => b(d),
                    ref: (d) => (P.current[i] = d),
                    'aria-invalid': !!(F || N),
                    ...p(),
                  }),
                ],
              },
              c
            );
          }),
      }),
      N &&
        v.jsx('div', {
          className: 'gnb-form-input error',
          children: v.jsx(se, { error: N === 'invalid-code' ? E : '', id: 'invalid-code-error' }),
        }),
      F &&
        v.jsx('div', {
          className: 'gnb-form-input error',
          children: v.jsx(se, { error: F === 'expired-code' ? g : '', id: 'expired-code-error' }),
        }),
    ],
  });
}
const _t = ({
  alignment: n = 'center',
  session: e,
  type: t,
  setShowSuccessAlert: r,
  setSuccessMsg: s,
  setRefreshData: l,
  rememberMeChecked: o,
  length: T,
  email: m,
  setIsAuthenticateEmailModalOpen: w,
  smsNumber: N,
  setIsAuthenticateSMSNumberModalOpen: O,
  smsLanguage: F,
}) => {
  const { setSessionCookie: A, getSession: k } = _e(),
    { t: f } = le(),
    M = Array(T).fill(''),
    [I, K] = j.useState(M),
    [_, P] = j.useState(!1),
    [L, h] = j.useState(''),
    [b, E] = j.useState(''),
    [g, u] = j.useState(''),
    [p, a] = j.useState(!1),
    [i, c] = j.useState(!1),
    [d, y] = j.useState(!0),
    C = NaN,
    D = (R) => {
      A(R, o), K(M), a(!0);
    },
    S = (R) => {
      P(!0), a(!1), console.error(R);
    },
    x = () => {
      if ((E(''), u(''), h(''), d)) {
        console.error('Reset code not yet available.'), c(!0);
        return;
      }
      t === 'updateAccountEmail'
        ? z
            .createChangeEmailOTP({ session: { token: k() }, email: m })
            .then((R) => {
              D(R.data.token), y(!0);
            })
            .catch((R) => {
              S(R);
            })
        : t === 'updateAccountSMSNumber'
        ? N &&
          z
            .createChangeSMSNumberOTP({ session: { token: k() }, smsNumber: Be(N), smsLanguage: F })
            .then((R) => {
              D(R.data.token), y(!0);
            })
            .catch((R) => {
              S(R);
            })
        : z
            .resendOTP({ email: m })
            .then((R) => {
              D(R.data.token), y(!0);
            })
            .catch((R) => {
              S(R);
            });
    };
  return (
    j.useEffect(() => {
      d &&
        setTimeout(() => {
          y(!1);
        }, C);
    }, [d]),
    v.jsxs(v.Fragment, {
      children: [
        v.jsx(Ot, { resendCode: x, isResendCodeDisabled: d, type: m ? 'email' : 'phone' }),
        p &&
          v.jsx(oe, {
            isOpen: p,
            setIsOpen: a,
            variant: 'inPage',
            type: 'success',
            description: f(
              m ? 'authentication.checkEmailScreen.resendCodeMsg' : 'authentication.phoneCodeScreen.resendCodeMsg'
            ),
            hasMarginTop: !0,
          }),
        i &&
          v.jsx(oe, {
            isOpen: i,
            setIsOpen: c,
            variant: 'inPage',
            type: 'info',
            description: f('errorsMsg.resendCodeDisabled'),
            hasMarginTop: !0,
          }),
        v.jsxs('div', {
          className: 'code-inputs',
          children: [
            _ &&
              v.jsx(oe, {
                isOpen: _,
                setIsOpen: P,
                variant: 'inPage',
                type: 'critical',
                description: f('errorsMsg.resendCodeDisabled'),
                hasMarginTop: !0,
              }),
            v.jsx(Ft, {
              codes: I,
              setCodes: K,
              handleResendCodeClick: x,
              alignment: n,
              session: e,
              type: t,
              setShowSuccessAlert: r,
              setSuccessMsg: s,
              setRefreshData: l,
              setHasSystemError: P,
              hasInvalidCodeError: b,
              setHasInvalidCodeError: E,
              hasExpiredCodeError: g,
              setHasExpiredCodeError: u,
              validCodes: L,
              setValidCode: h,
              rememberMeChecked: o,
              setIsAuthenticateEmailModalOpen: w,
              setIsAuthenticateSMSNumberModalOpen: O,
            }),
          ],
        }),
      ],
    })
  );
};
export {
  oe as A,
  _t as C,
  Tt as M,
  Ct as T,
  It as a,
  Mt as b,
  Kt as c,
  Lt as d,
  Rt as e,
  St as f,
  jt as g,
  At as i,
  Pt as r,
  xt as v,
};
