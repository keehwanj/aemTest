import { k as be, l as Oe, m as Ee, n as Ne, r as V, j as y, F as De, o as ke, i as re } from './index-BJVeoK1D.js';
import { B as ae, j as Re, h as Se } from './Error-DYTFVrcz.js';
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var pe = [
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
  X = pe.join(','),
  he = typeof Element > 'u',
  B = he
    ? function () {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  J =
    !he && Element.prototype.getRootNode
      ? function (a) {
          var e;
          return a == null || (e = a.getRootNode) === null || e === void 0 ? void 0 : e.call(a);
        }
      : function (a) {
          return a?.ownerDocument;
        },
  Q = function a(e, t) {
    var n;
    t === void 0 && (t = !0);
    var s = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, 'inert'),
      u = s === '' || s === 'true',
      o = u || (t && e && a(e.parentNode));
    return o;
  },
  Ce = function (e) {
    var t,
      n = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, 'contenteditable');
    return n === '' || n === 'true';
  },
  me = function (e, t, n) {
    if (Q(e)) return [];
    var s = Array.prototype.slice.apply(e.querySelectorAll(X));
    return t && B.call(e, X) && s.unshift(e), (s = s.filter(n)), s;
  },
  ge = function a(e, t, n) {
    for (var s = [], u = Array.from(e); u.length; ) {
      var o = u.shift();
      if (!Q(o, !1))
        if (o.tagName === 'SLOT') {
          var w = o.assignedElements(),
            h = w.length ? w : o.children,
            T = a(h, !0, n);
          n.flatten ? s.push.apply(s, T) : s.push({ scopeParent: o, candidates: T });
        } else {
          var F = B.call(o, X);
          F && n.filter(o) && (t || !e.includes(o)) && s.push(o);
          var k = o.shadowRoot || (typeof n.getShadowRoot == 'function' && n.getShadowRoot(o)),
            D = !Q(k, !1) && (!n.shadowRootFilter || n.shadowRootFilter(o));
          if (k && D) {
            var j = a(k === !0 ? o.children : k.children, !0, n);
            n.flatten ? s.push.apply(s, j) : s.push({ scopeParent: o, candidates: j });
          } else u.unshift.apply(u, o.children);
        }
    }
    return s;
  },
  ye = function (e) {
    return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
  },
  L = function (e) {
    if (!e) throw new Error('No node provided');
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ce(e)) && !ye(e) ? 0 : e.tabIndex;
  },
  xe = function (e, t) {
    var n = L(e);
    return n < 0 && t && !ye(e) ? 0 : n;
  },
  Pe = function (e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  },
  we = function (e) {
    return e.tagName === 'INPUT';
  },
  je = function (e) {
    return we(e) && e.type === 'hidden';
  },
  Ie = function (e) {
    var t =
      e.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(e.children).some(function (n) {
        return n.tagName === 'SUMMARY';
      });
    return t;
  },
  Ae = function (e, t) {
    for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
  },
  Le = function (e) {
    if (!e.name) return !0;
    var t = e.form || J(e),
      n = function (w) {
        return t.querySelectorAll('input[type="radio"][name="' + w + '"]');
      },
      s;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      s = n(window.CSS.escape(e.name));
    else
      try {
        s = n(e.name);
      } catch (o) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            o.message
          ),
          !1
        );
      }
    var u = Ae(s, e.form);
    return !u || u === e;
  },
  Ke = function (e) {
    return we(e) && e.type === 'radio';
  },
  _e = function (e) {
    return Ke(e) && !Le(e);
  },
  Ue = function (e) {
    var t,
      n = e && J(e),
      s = (t = n) === null || t === void 0 ? void 0 : t.host,
      u = !1;
    if (n && n !== e) {
      var o, w, h;
      for (
        u = !!(
          ((o = s) !== null && o !== void 0 && (w = o.ownerDocument) !== null && w !== void 0 && w.contains(s)) ||
          (e != null && (h = e.ownerDocument) !== null && h !== void 0 && h.contains(e))
        );
        !u && s;

      ) {
        var T, F, k;
        (n = J(s)),
          (s = (T = n) === null || T === void 0 ? void 0 : T.host),
          (u = !!((F = s) !== null && F !== void 0 && (k = F.ownerDocument) !== null && k !== void 0 && k.contains(s)));
      }
    }
    return u;
  },
  se = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.width,
      s = t.height;
    return n === 0 && s === 0;
  },
  Be = function (e, t) {
    var n = t.displayCheck,
      s = t.getShadowRoot;
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    var u = B.call(e, 'details>summary:first-of-type'),
      o = u ? e.parentElement : e;
    if (B.call(o, 'details:not([open]) *')) return !0;
    if (!n || n === 'full' || n === 'legacy-full') {
      if (typeof s == 'function') {
        for (var w = e; e; ) {
          var h = e.parentElement,
            T = J(e);
          if (h && !h.shadowRoot && s(h) === !0) return se(e);
          e.assignedSlot ? (e = e.assignedSlot) : !h && T !== e.ownerDocument ? (e = T.host) : (e = h);
        }
        e = w;
      }
      if (Ue(e)) return !e.getClientRects().length;
      if (n !== 'legacy-full') return !0;
    } else if (n === 'non-zero-area') return se(e);
    return !1;
  },
  ze = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t; ) {
        if (t.tagName === 'FIELDSET' && t.disabled) {
          for (var n = 0; n < t.children.length; n++) {
            var s = t.children.item(n);
            if (s.tagName === 'LEGEND') return B.call(t, 'fieldset[disabled] *') ? !0 : !s.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  H = function (e, t) {
    return !(t.disabled || Q(t) || je(t) || Be(t, e) || Ie(t) || ze(t));
  },
  ie = function (e, t) {
    return !(_e(t) || L(t) < 0 || !H(e, t));
  },
  qe = function (e) {
    var t = parseInt(e.getAttribute('tabindex'), 10);
    return !!(isNaN(t) || t >= 0);
  },
  Ve = function a(e) {
    var t = [],
      n = [];
    return (
      e.forEach(function (s, u) {
        var o = !!s.scopeParent,
          w = o ? s.scopeParent : s,
          h = xe(w, o),
          T = o ? a(s.candidates) : w;
        h === 0
          ? o
            ? t.push.apply(t, T)
            : t.push(w)
          : n.push({ documentOrder: u, tabIndex: h, item: s, isScope: o, content: T });
      }),
      n
        .sort(Pe)
        .reduce(function (s, u) {
          return u.isScope ? s.push.apply(s, u.content) : s.push(u.content), s;
        }, [])
        .concat(t)
    );
  },
  Te = function (e, t) {
    t = t || {};
    var n;
    return (
      t.getShadowRoot
        ? (n = ge([e], t.includeContainer, {
            filter: ie.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: qe,
          }))
        : (n = me(e, t.includeContainer, ie.bind(null, t))),
      Ve(n)
    );
  },
  Fe = function (e, t) {
    t = t || {};
    var n;
    return (
      t.getShadowRoot
        ? (n = ge([e], t.includeContainer, { filter: H.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot }))
        : (n = me(e, t.includeContainer, H.bind(null, t))),
      n
    );
  },
  U = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return B.call(e, X) === !1 ? !1 : ie(t, e);
  },
  $e = pe.concat('iframe').join(','),
  Z = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return B.call(e, $e) === !1 ? !1 : H(t, e);
  };
const Me = Object.freeze(
  Object.defineProperty(
    { __proto__: null, focusable: Fe, getTabIndex: L, isFocusable: Z, isTabbable: U, tabbable: Te },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
/*!
 * focus-trap 7.5.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function ce(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(a);
    e &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(a, s).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function ue(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ce(Object(t), !0).forEach(function (n) {
          Ge(a, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
      : ce(Object(t)).forEach(function (n) {
          Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return a;
}
function Ge(a, e, t) {
  return (
    (e = Ye(e)),
    e in a ? Object.defineProperty(a, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (a[e] = t),
    a
  );
}
function We(a, e) {
  if (typeof a != 'object' || a === null) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(a, e);
    if (typeof n != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(a);
}
function Ye(a) {
  var e = We(a, 'string');
  return typeof e == 'symbol' ? e : String(e);
}
var le = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var n = e[e.length - 1];
        n !== t && n.pause();
      }
      var s = e.indexOf(t);
      s === -1 || e.splice(s, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var n = e.indexOf(t);
      n !== -1 && e.splice(n, 1), e.length > 0 && e[e.length - 1].unpause();
    },
  },
  Ze = function (e) {
    return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
  },
  Xe = function (e) {
    return e?.key === 'Escape' || e?.key === 'Esc' || e?.keyCode === 27;
  },
  W = function (e) {
    return e?.key === 'Tab' || e?.keyCode === 9;
  },
  Je = function (e) {
    return W(e) && !e.shiftKey;
  },
  Qe = function (e) {
    return W(e) && e.shiftKey;
  },
  fe = function (e) {
    return setTimeout(e, 0);
  },
  de = function (e, t) {
    var n = -1;
    return (
      e.every(function (s, u) {
        return t(s) ? ((n = u), !1) : !0;
      }),
      n
    );
  },
  G = function (e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
    return typeof e == 'function' ? e.apply(void 0, n) : e;
  },
  Y = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == 'function' ? e.composedPath()[0] : e.target;
  },
  He = [],
  et = function (e, t) {
    var n = t?.document || document,
      s = t?.trapStack || He,
      u = ue(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: Je,
          isKeyBackward: Qe,
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
      h = function (r, i, l) {
        return r && r[i] !== void 0 ? r[i] : u[l || i];
      },
      T = function (r, i) {
        var l = typeof i?.composedPath == 'function' ? i.composedPath() : void 0;
        return o.containerGroups.findIndex(function (p) {
          var g = p.container,
            O = p.tabbableNodes;
          return (
            g.contains(r) ||
            l?.includes(g) ||
            O.find(function (N) {
              return N === r;
            })
          );
        });
      },
      F = function (r) {
        var i = u[r];
        if (typeof i == 'function') {
          for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++) p[g - 1] = arguments[g];
          i = i.apply(void 0, p);
        }
        if ((i === !0 && (i = void 0), !i)) {
          if (i === void 0 || i === !1) return i;
          throw new Error('`'.concat(r, '` was specified but was not a node, or did not return a node'));
        }
        var O = i;
        if (typeof i == 'string' && ((O = n.querySelector(i)), !O))
          throw new Error('`'.concat(r, '` as selector refers to no known node'));
        return O;
      },
      k = function () {
        var r = F('initialFocus');
        if (r === !1) return !1;
        if (r === void 0 || !Z(r, u.tabbableOptions))
          if (T(n.activeElement) >= 0) r = n.activeElement;
          else {
            var i = o.tabbableGroups[0],
              l = i && i.firstTabbableNode;
            r = l || F('fallbackFocus');
          }
        if (!r) throw new Error('Your focus-trap needs to have at least one focusable element');
        return r;
      },
      D = function () {
        if (
          ((o.containerGroups = o.containers.map(function (r) {
            var i = Te(r, u.tabbableOptions),
              l = Fe(r, u.tabbableOptions),
              p = i.length > 0 ? i[0] : void 0,
              g = i.length > 0 ? i[i.length - 1] : void 0,
              O = l.find(function (R) {
                return U(R);
              }),
              N = l
                .slice()
                .reverse()
                .find(function (R) {
                  return U(R);
                }),
              S = !!i.find(function (R) {
                return L(R) > 0;
              });
            return {
              container: r,
              tabbableNodes: i,
              focusableNodes: l,
              posTabIndexesFound: S,
              firstTabbableNode: p,
              lastTabbableNode: g,
              firstDomTabbableNode: O,
              lastDomTabbableNode: N,
              nextTabbableNode: function (_) {
                var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                  A = i.indexOf(_);
                return A < 0
                  ? $
                    ? l.slice(l.indexOf(_) + 1).find(function (M) {
                        return U(M);
                      })
                    : l
                        .slice(0, l.indexOf(_))
                        .reverse()
                        .find(function (M) {
                          return U(M);
                        })
                  : i[A + ($ ? 1 : -1)];
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
      j = function v(r) {
        var i = r.activeElement;
        if (i) return i.shadowRoot && i.shadowRoot.activeElement !== null ? v(i.shadowRoot) : i;
      },
      C = function v(r) {
        if (r !== !1 && r !== j(document)) {
          if (!r || !r.focus) {
            v(k());
            return;
          }
          r.focus({ preventScroll: !!u.preventScroll }), (o.mostRecentlyFocusedNode = r), Ze(r) && r.select();
        }
      },
      f = function (r) {
        var i = F('setReturnFocus', r);
        return i || (i === !1 ? !1 : r);
      },
      z = function (r) {
        var i = r.target,
          l = r.event,
          p = r.isBackward,
          g = p === void 0 ? !1 : p;
        (i = i || Y(l)), D();
        var O = null;
        if (o.tabbableGroups.length > 0) {
          var N = T(i, l),
            S = N >= 0 ? o.containerGroups[N] : void 0;
          if (N < 0)
            g
              ? (O = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode)
              : (O = o.tabbableGroups[0].firstTabbableNode);
          else if (g) {
            var R = de(o.tabbableGroups, function (ee) {
              var te = ee.firstTabbableNode;
              return i === te;
            });
            if (
              (R < 0 &&
                (S.container === i ||
                  (Z(i, u.tabbableOptions) && !U(i, u.tabbableOptions) && !S.nextTabbableNode(i, !1))) &&
                (R = N),
              R >= 0)
            ) {
              var _ = R === 0 ? o.tabbableGroups.length - 1 : R - 1,
                $ = o.tabbableGroups[_];
              O = L(i) >= 0 ? $.lastTabbableNode : $.lastDomTabbableNode;
            } else W(l) || (O = S.nextTabbableNode(i, !1));
          } else {
            var A = de(o.tabbableGroups, function (ee) {
              var te = ee.lastTabbableNode;
              return i === te;
            });
            if (
              (A < 0 &&
                (S.container === i ||
                  (Z(i, u.tabbableOptions) && !U(i, u.tabbableOptions) && !S.nextTabbableNode(i))) &&
                (A = N),
              A >= 0)
            ) {
              var M = A === o.tabbableGroups.length - 1 ? 0 : A + 1,
                oe = o.tabbableGroups[M];
              O = L(i) >= 0 ? oe.firstTabbableNode : oe.firstDomTabbableNode;
            } else W(l) || (O = S.nextTabbableNode(i));
          }
        } else O = F('fallbackFocus');
        return O;
      },
      x = function (r) {
        var i = Y(r);
        if (!(T(i, r) >= 0)) {
          if (G(u.clickOutsideDeactivates, r)) {
            w.deactivate({ returnFocus: u.returnFocusOnDeactivate });
            return;
          }
          G(u.allowOutsideClick, r) || r.preventDefault();
        }
      },
      K = function (r) {
        var i = Y(r),
          l = T(i, r) >= 0;
        if (l || i instanceof Document) l && (o.mostRecentlyFocusedNode = i);
        else {
          r.stopImmediatePropagation();
          var p,
            g = !0;
          if (o.mostRecentlyFocusedNode)
            if (L(o.mostRecentlyFocusedNode) > 0) {
              var O = T(o.mostRecentlyFocusedNode),
                N = o.containerGroups[O].tabbableNodes;
              if (N.length > 0) {
                var S = N.findIndex(function (R) {
                  return R === o.mostRecentlyFocusedNode;
                });
                S >= 0 &&
                  (u.isKeyForward(o.recentNavEvent)
                    ? S + 1 < N.length && ((p = N[S + 1]), (g = !1))
                    : S - 1 >= 0 && ((p = N[S - 1]), (g = !1)));
              }
            } else
              o.containerGroups.some(function (R) {
                return R.tabbableNodes.some(function (_) {
                  return L(_) > 0;
                });
              }) || (g = !1);
          else g = !1;
          g && (p = z({ target: o.mostRecentlyFocusedNode, isBackward: u.isKeyBackward(o.recentNavEvent) })),
            C(p || o.mostRecentlyFocusedNode || k());
        }
        o.recentNavEvent = void 0;
      },
      q = function (r) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        o.recentNavEvent = r;
        var l = z({ event: r, isBackward: i });
        l && (W(r) && r.preventDefault(), C(l));
      },
      I = function (r) {
        if (Xe(r) && G(u.escapeDeactivates, r) !== !1) {
          r.preventDefault(), w.deactivate();
          return;
        }
        (u.isKeyForward(r) || u.isKeyBackward(r)) && q(r, u.isKeyBackward(r));
      },
      P = function (r) {
        var i = Y(r);
        T(i, r) >= 0 ||
          G(u.clickOutsideDeactivates, r) ||
          G(u.allowOutsideClick, r) ||
          (r.preventDefault(), r.stopImmediatePropagation());
      },
      b = function () {
        if (o.active)
          return (
            le.activateTrap(s, w),
            (o.delayInitialFocusTimer = u.delayInitialFocus
              ? fe(function () {
                  C(k());
                })
              : C(k())),
            n.addEventListener('focusin', K, !0),
            n.addEventListener('mousedown', x, { capture: !0, passive: !1 }),
            n.addEventListener('touchstart', x, { capture: !0, passive: !1 }),
            n.addEventListener('click', P, { capture: !0, passive: !1 }),
            n.addEventListener('keydown', I, { capture: !0, passive: !1 }),
            w
          );
      },
      d = function () {
        if (o.active)
          return (
            n.removeEventListener('focusin', K, !0),
            n.removeEventListener('mousedown', x, !0),
            n.removeEventListener('touchstart', x, !0),
            n.removeEventListener('click', P, !0),
            n.removeEventListener('keydown', I, !0),
            w
          );
      },
      E = function (r) {
        var i = r.some(function (l) {
          var p = Array.from(l.removedNodes);
          return p.some(function (g) {
            return g === o.mostRecentlyFocusedNode;
          });
        });
        i && C(k());
      },
      m = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(E) : void 0,
      c = function () {
        m &&
          (m.disconnect(),
          o.active &&
            !o.paused &&
            o.containers.map(function (r) {
              m.observe(r, { subtree: !0, childList: !0 });
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
          var i = h(r, 'onActivate'),
            l = h(r, 'onPostActivate'),
            p = h(r, 'checkCanFocusTrap');
          p || D(), (o.active = !0), (o.paused = !1), (o.nodeFocusedBeforeActivation = n.activeElement), i?.();
          var g = function () {
            p && D(), b(), c(), l?.();
          };
          return p ? (p(o.containers.concat()).then(g, g), this) : (g(), this);
        },
        deactivate: function (r) {
          if (!o.active) return this;
          var i = ue(
            {
              onDeactivate: u.onDeactivate,
              onPostDeactivate: u.onPostDeactivate,
              checkCanReturnFocus: u.checkCanReturnFocus,
            },
            r
          );
          clearTimeout(o.delayInitialFocusTimer),
            (o.delayInitialFocusTimer = void 0),
            d(),
            (o.active = !1),
            (o.paused = !1),
            c(),
            le.deactivateTrap(s, w);
          var l = h(i, 'onDeactivate'),
            p = h(i, 'onPostDeactivate'),
            g = h(i, 'checkCanReturnFocus'),
            O = h(i, 'returnFocus', 'returnFocusOnDeactivate');
          l?.();
          var N = function () {
            fe(function () {
              O && C(f(o.nodeFocusedBeforeActivation)), p?.();
            });
          };
          return O && g ? (g(f(o.nodeFocusedBeforeActivation)).then(N, N), this) : (N(), this);
        },
        pause: function (r) {
          if (o.paused || !o.active) return this;
          var i = h(r, 'onPause'),
            l = h(r, 'onPostPause');
          return (o.paused = !0), i?.(), d(), c(), l?.(), this;
        },
        unpause: function (r) {
          if (!o.paused || !o.active) return this;
          var i = h(r, 'onUnpause'),
            l = h(r, 'onPostUnpause');
          return (o.paused = !1), i?.(), D(), b(), c(), l?.(), this;
        },
        updateContainerElements: function (r) {
          var i = [].concat(r).filter(Boolean);
          return (
            (o.containers = i.map(function (l) {
              return typeof l == 'string' ? n.querySelector(l) : l;
            })),
            o.active && D(),
            c(),
            this
          );
        },
      }),
      w.updateContainerElements(e),
      w
    );
  };
const tt = Object.freeze(
    Object.defineProperty({ __proto__: null, createFocusTrap: et }, Symbol.toStringTag, { value: 'Module' })
  ),
  at = be(tt),
  nt = be(Me);
var ne, ve;
function rt() {
  if (ve) return ne;
  ve = 1;
  function a(b) {
    '@babel/helpers - typeof';
    return (
      (a =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (d) {
              return typeof d;
            }
          : function (d) {
              return d && typeof Symbol == 'function' && d.constructor === Symbol && d !== Symbol.prototype
                ? 'symbol'
                : typeof d;
            }),
      a(b)
    );
  }
  function e(b, d) {
    if (!(b instanceof d)) throw new TypeError('Cannot call a class as a function');
  }
  function t(b, d) {
    for (var E = 0; E < d.length; E++) {
      var m = d[E];
      (m.enumerable = m.enumerable || !1),
        (m.configurable = !0),
        'value' in m && (m.writable = !0),
        Object.defineProperty(b, D(m.key), m);
    }
  }
  function n(b, d, E) {
    return d && t(b.prototype, d), Object.defineProperty(b, 'prototype', { writable: !1 }), b;
  }
  function s(b, d) {
    if (typeof d != 'function' && d !== null) throw new TypeError('Super expression must either be null or a function');
    (b.prototype = Object.create(d && d.prototype, { constructor: { value: b, writable: !0, configurable: !0 } })),
      Object.defineProperty(b, 'prototype', { writable: !1 }),
      d && u(b, d);
  }
  function u(b, d) {
    return (
      (u = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (m, c) {
            return (m.__proto__ = c), m;
          }),
      u(b, d)
    );
  }
  function o(b) {
    var d = T();
    return function () {
      var m = F(b),
        c;
      if (d) {
        var v = F(this).constructor;
        c = Reflect.construct(m, arguments, v);
      } else c = m.apply(this, arguments);
      return w(this, c);
    };
  }
  function w(b, d) {
    if (d && (a(d) === 'object' || typeof d == 'function')) return d;
    if (d !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return h(b);
  }
  function h(b) {
    if (b === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b;
  }
  function T() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function F(b) {
    return (
      (F = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (E) {
            return E.__proto__ || Object.getPrototypeOf(E);
          }),
      F(b)
    );
  }
  function k(b, d, E) {
    return (
      (d = D(d)),
      d in b ? Object.defineProperty(b, d, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : (b[d] = E),
      b
    );
  }
  function D(b) {
    var d = j(b, 'string');
    return a(d) === 'symbol' ? d : String(d);
  }
  function j(b, d) {
    if (a(b) !== 'object' || b === null) return b;
    var E = b[Symbol.toPrimitive];
    if (E !== void 0) {
      var m = E.call(b, d);
      if (a(m) !== 'object') return m;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (d === 'string' ? String : Number)(b);
  }
  var C = Oe(),
    f = Ee(),
    z = at,
    x = z.createFocusTrap,
    K = nt,
    q = K.isFocusable,
    I = (function (b) {
      s(E, b);
      var d = o(E);
      function E(m) {
        var c;
        e(this, E),
          (c = d.call(this, m)),
          k(h(c), 'getNodeForOption', function (i) {
            var l,
              p = (l = this.internalOptions[i]) !== null && l !== void 0 ? l : this.originalOptions[i];
            if (typeof p == 'function') {
              for (var g = arguments.length, O = new Array(g > 1 ? g - 1 : 0), N = 1; N < g; N++)
                O[N - 1] = arguments[N];
              p = p.apply(void 0, O);
            }
            if ((p === !0 && (p = void 0), !p)) {
              if (p === void 0 || p === !1) return p;
              throw new Error('`'.concat(i, '` was specified but was not a node, or did not return a node'));
            }
            var S = p;
            if (typeof p == 'string') {
              var R;
              if (((S = (R = this.getDocument()) === null || R === void 0 ? void 0 : R.querySelector(p)), !S))
                throw new Error('`'.concat(i, '` as selector refers to no known node'));
            }
            return S;
          }),
          (c.handleDeactivate = c.handleDeactivate.bind(h(c))),
          (c.handlePostDeactivate = c.handlePostDeactivate.bind(h(c))),
          (c.handleClickOutsideDeactivates = c.handleClickOutsideDeactivates.bind(h(c))),
          (c.internalOptions = {
            returnFocusOnDeactivate: !1,
            checkCanReturnFocus: null,
            onDeactivate: c.handleDeactivate,
            onPostDeactivate: c.handlePostDeactivate,
            clickOutsideDeactivates: c.handleClickOutsideDeactivates,
          }),
          (c.originalOptions = {
            returnFocusOnDeactivate: !0,
            onDeactivate: null,
            onPostDeactivate: null,
            checkCanReturnFocus: null,
            clickOutsideDeactivates: !1,
          });
        var v = m.focusTrapOptions;
        for (var r in v)
          if (Object.prototype.hasOwnProperty.call(v, r)) {
            if (
              r === 'returnFocusOnDeactivate' ||
              r === 'onDeactivate' ||
              r === 'onPostDeactivate' ||
              r === 'checkCanReturnFocus' ||
              r === 'clickOutsideDeactivates'
            ) {
              c.originalOptions[r] = v[r];
              continue;
            }
            c.internalOptions[r] = v[r];
          }
        return (c.outsideClick = null), (c.focusTrapElements = m.containerElements || []), c.updatePreviousElement(), c;
      }
      return (
        n(E, [
          {
            key: 'getDocument',
            value: function () {
              return this.props.focusTrapOptions.document || (typeof document < 'u' ? document : void 0);
            },
          },
          {
            key: 'getReturnFocusNode',
            value: function () {
              var c = this.getNodeForOption('setReturnFocus', this.previouslyFocusedElement);
              return c || (c === !1 ? !1 : this.previouslyFocusedElement);
            },
          },
          {
            key: 'updatePreviousElement',
            value: function () {
              var c = this.getDocument();
              c && (this.previouslyFocusedElement = c.activeElement);
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
            value: function (c) {
              var v =
                typeof this.originalOptions.clickOutsideDeactivates == 'function'
                  ? this.originalOptions.clickOutsideDeactivates.call(null, c)
                  : this.originalOptions.clickOutsideDeactivates;
              return v && (this.outsideClick = { target: c.target, allowDeactivation: v }), v;
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
              var c = this,
                v = function () {
                  var i = c.getReturnFocusNode(),
                    l = !!(
                      c.originalOptions.returnFocusOnDeactivate &&
                      i !== null &&
                      i !== void 0 &&
                      i.focus &&
                      (!c.outsideClick ||
                        (c.outsideClick.allowDeactivation &&
                          !q(c.outsideClick.target, c.internalOptions.tabbableOptions)))
                    ),
                    p = c.internalOptions.preventScroll,
                    g = p === void 0 ? !1 : p;
                  l && i.focus({ preventScroll: g }),
                    c.originalOptions.onPostDeactivate && c.originalOptions.onPostDeactivate.call(null),
                    (c.outsideClick = null);
                };
              this.originalOptions.checkCanReturnFocus
                ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(v, v)
                : v();
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
                var c = this.focusTrapElements.some(Boolean);
                c &&
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
            value: function (c) {
              if (this.focusTrap) {
                c.containerElements !== this.props.containerElements &&
                  this.focusTrap.updateContainerElements(this.props.containerElements);
                var v = !c.active && this.props.active,
                  r = c.active && !this.props.active,
                  i = !c.paused && this.props.paused,
                  l = c.paused && !this.props.paused;
                if ((v && (this.updatePreviousElement(), this.focusTrap.activate()), r)) {
                  this.deactivateTrap();
                  return;
                }
                i && this.focusTrap.pause(), l && this.focusTrap.unpause();
              } else
                c.containerElements !== this.props.containerElements &&
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
              var c = this,
                v = this.props.children ? C.Children.only(this.props.children) : void 0;
              if (v) {
                if (v.type && v.type === C.Fragment)
                  throw new Error(
                    'A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.'
                  );
                var r = function (p) {
                    var g = c.props.containerElements;
                    v && (typeof v.ref == 'function' ? v.ref(p) : v.ref && (v.ref.current = p)),
                      (c.focusTrapElements = g || [p]);
                  },
                  i = C.cloneElement(v, { ref: r });
                return i;
              }
              return null;
            },
          },
        ]),
        E
      );
    })(C.Component),
    P = typeof Element > 'u' ? Function : Element;
  return (
    (I.propTypes = {
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
        initialFocus: f.oneOfType([f.instanceOf(P), f.string, f.bool, f.func]),
        fallbackFocus: f.oneOfType([f.instanceOf(P), f.string, f.func]),
        escapeDeactivates: f.oneOfType([f.bool, f.func]),
        clickOutsideDeactivates: f.oneOfType([f.bool, f.func]),
        returnFocusOnDeactivate: f.bool,
        setReturnFocus: f.oneOfType([f.instanceOf(P), f.string, f.bool, f.func]),
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
      containerElements: f.arrayOf(f.instanceOf(P)),
      children: f.oneOfType([f.element, f.instanceOf(P)]),
    }),
    (I.defaultProps = { active: !0, paused: !1, focusTrapOptions: {}, _createFocusTrap: x }),
    (ne = I),
    ne
  );
}
var it = rt();
const ot = Ne(it),
  st = ({
    id: a,
    title: e,
    primaryBtnProps: t,
    secondaryBtnProps: n,
    linkBtnProps: s,
    hasSecondaryBtn: u,
    hasLinkBtn: o,
    children: w,
    hasFooter: h,
    open: T,
    onClose: F,
  }) => {
    const k = V.useRef(null);
    V.useEffect(() => {
      T ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll');
    }, [T]);
    const D = T ? { 'aria-labelledby': `${a}-description` } : {},
      j = (C) => {
        k.current && !k.current.contains(C.target) && F();
      };
    return y.jsx('div', {
      className: 'gnb-modal left',
      id: a + crypto.randomUUID(),
      role: 'dialog',
      'aria-modal': 'true',
      'aria-hidden': !T,
      ...D,
      onClick: j,
      children:
        T &&
        y.jsx(ot, {
          focusTrapOptions: { clickOutsideDeactivates: !0, initialFocus: !1 },
          children: y.jsxs('dialog', {
            ref: k,
            children: [
              y.jsxs('button', {
                className: 'gnb-btn-close',
                onClick: F,
                children: [
                  y.jsx('span', { className: 'sr-only', children: 'Close modal window' }),
                  y.jsx(De, { icon: ke }),
                ],
              }),
              y.jsx('div', { className: 'gnb-modal-header', children: y.jsx('h2', { id: `${a}-title`, children: e }) }),
              y.jsx('div', { className: 'gnb-modal-body', id: `${a}-description`, children: w }),
              h &&
                y.jsxs('div', {
                  className: 'gnb-modal-footer',
                  children: [
                    y.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: y.jsx(ae, {
                        type: 'button',
                        variant: t?.variant ? t?.variant : 'primary',
                        label: t?.label,
                        size: t?.size ? t.size : 'small',
                        onClick: t?.onClick,
                        disabled: t?.disabled,
                      }),
                    }),
                    u &&
                      y.jsx(ae, {
                        variant: n?.variant ? n.variant : 'secondary',
                        label: n?.label,
                        size: n?.size ? n.size : 'small',
                        onClick: n?.onClick,
                        disabled: n?.disabled,
                      }),
                    o &&
                      y.jsx(ae, {
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
  dt = ({
    variant: a,
    type: e,
    description: t,
    inPageHeading: n,
    isOpen: s,
    setIsOpen: u,
    hasMarginTop: o,
    hasTimeout: w = !0,
  }) => {
    const [h, T] = V.useState(!1);
    return (
      V.useEffect(() => {
        s && T(!1);
      }, [s]),
      V.useEffect(() => {
        const F = w
          ? setTimeout(() => {
              T(!0), u(!1);
            }, 5e3)
          : void 0;
        return () => clearTimeout(F);
      }, [s, a, e, t, n, u, h, w]),
      h
        ? null
        : s
        ? y.jsxs(y.Fragment, {
            children: [
              a !== 'global' &&
                y.jsxs('div', {
                  className: re('no-margin-bottom', {
                    'gnb-alert-info-inline': a === 'inline' && e === 'info',
                    'gnb-alert-success-inline': a === 'inline' && e === 'success',
                    'gnb-alert-warning-inline': a === 'inline' && e === 'warning',
                    'gnb-alert-critical-inline': a === 'inline' && e === 'critical',
                    'gnb-alert-info': a === 'inPage' && e === 'info',
                    'gnb-alert-success': a === 'inPage' && e === 'success',
                    'gnb-alert-warning': a === 'inPage' && e === 'warning',
                    'gnb-alert-critical margin-bottom-lg no-margin-top': a === 'inPage' && e === 'critical' && !o,
                    'gnb-alert-critical margin-bottom-xs margin-top-md': a === 'inPage' && e === 'critical' && o,
                  }),
                  role: 'alert',
                  children: [
                    a === 'inPage' && n && y.jsx('h2', { className: 'left', children: n }),
                    y.jsx('div', { className: 'left', children: t }),
                  ],
                }),
              a === 'global' &&
                y.jsx('section', {
                  className: re({
                    'gnb-alert-info-global': e === 'info',
                    'gnb-alert-warning-global': e === 'warning',
                    'gnb-alert-critical-global': e === 'critical',
                  }),
                  children: y.jsxs('div', {
                    className: 'container-fluid',
                    children: [
                      typeof t == 'string' && y.jsx('p', { className: 'left', children: t }),
                      typeof t != 'string' && t,
                    ],
                  }),
                }),
            ],
          })
        : null
    );
  },
  vt = ({
    label: a = '',
    type: e,
    helperText: t,
    required: n = !1,
    placeholder: s,
    value: u,
    onChange: o,
    onKeyUp: w,
    onBlur: h,
    onFocus: T,
    error: F,
    valid: k,
    id: D,
    maxlength: j,
    hasTooltipModal: C = !1,
    tooltipBody: f = '',
    tooltipTitle: z = '',
    isTooltipModalOpen: x = !1,
    setIsTooltipModalOpen: K = () => {},
  }) => {
    const q = Re(a) + '-error-id',
      I = F ? { 'aria-labelledby': q } : {},
      P = () => K(!1);
    return (
      V.useEffect(() => {
        const b = (d) => {
          d.key === 'Escape' && P();
        };
        return (
          x && window.addEventListener('keydown', b),
          () => {
            window.removeEventListener('keydown', b);
          }
        );
      }, [x]),
      y.jsxs(y.Fragment, {
        children: [
          y.jsxs('form', {
            onSubmit: (b) => b.preventDefault(),
            className: re('gnb-form-input', F ? 'error' : '', k ? 'valid' : ''),
            noValidate: !0,
            children: [
              y.jsxs('label', {
                className: 'left',
                htmlFor: D || a,
                children: [
                  !C && y.jsxs('span', { children: [a, n && y.jsx('span', { className: 'required', children: '*' })] }),
                  C &&
                    y.jsxs('a', {
                      href: '#',
                      tabIndex: 0,
                      'data-target': D || a,
                      'aria-haspopup': 'dialog',
                      'aria-controls': D || a,
                      className: 'modal-button info gnb-tooltip-link',
                      onClick: () => K(!0),
                      children: [a, n && y.jsx('span', { className: 'required', children: '*' })],
                    }),
                ],
              }),
              t && y.jsx('div', { className: 'gnb-form-helper-text left', children: t }),
              y.jsx('input', {
                type: e,
                name: a,
                id: D || a,
                required: n,
                value: u,
                placeholder: s,
                onChange: o,
                ...I,
                'aria-invalid': !!F,
                className: 'text-input',
                maxLength: j,
                onFocus: T,
                onBlur: h,
                onKeyUp: w,
              }),
              F && y.jsx(Se, { id: q, error: F, classes: e === 'tel' ? 'tel-input' : '' }),
            ],
          }),
          x && y.jsx(st, { id: `tooltip-input-modal-${D || a}`, title: z, open: x, onClose: P, children: f }),
        ],
      })
    );
  };
function bt(a, e, t) {
  return /^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,3})+$/.test(a) ? (e(''), !0) : (e(t), !1);
}
function ct(a) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_!,.@#$%&'*();:~? -]*$/.test(a);
}
const pt = (a, e) => {
  a.target.value.length > 2 ? e(!1) : e(!0);
};
function ht(a) {
  const e = [];
  for (const t of a) {
    const n = document?.getElementById(t)?.checked;
    e.push({ value: t, checked: n });
  }
  return e;
}
function mt(a) {
  return a.replace(/[^\w\s]/gi, '');
}
function ut(a) {
  return a.replace(/\s/g, '');
}
function gt(a) {
  return ut(a).length === 6 || a.toUpperCase() === 'NA';
}
function yt(a) {
  return a.trim().length <= 8 && a.trim().length >= 1;
}
function wt(a) {
  return a.trim().length >= 1 && ct(a);
}
function Tt(a) {
  return a.trim().length >= 0;
}
const Ft = (a, e, t) => {
  let n;
  return a === 'profanity' && (n = e), a === 'invalid-custom-name' && (n = t), n;
};
export { dt as A, st as M, vt as T, gt as a, yt as b, Ft as c, wt as d, pt as e, ht as g, Tt as i, mt as r, bt as v };
