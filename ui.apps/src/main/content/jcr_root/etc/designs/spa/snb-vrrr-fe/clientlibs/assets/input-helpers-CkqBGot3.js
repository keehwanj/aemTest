import { n as we, o as Ce, r as I, p as xe, j as b, F as je, q as Ie, k as ce } from './index-D38DftTu.js';
import { B as ue, j as Ae, h as Le } from './Error-CCx1isWs.js';
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Te = [
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
  B = Te.join(','),
  Fe = typeof Element > 'u',
  A = Fe
    ? function () {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  ee =
    !Fe && Element.prototype.getRootNode
      ? function (a) {
          var e;
          return a == null || (e = a.getRootNode) === null || e === void 0 ? void 0 : e.call(a);
        }
      : function (a) {
          return a == null ? void 0 : a.ownerDocument;
        },
  te = function a(e, t) {
    var n;
    t === void 0 && (t = !0);
    var i = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, 'inert'),
      c = i === '' || i === 'true',
      r = c || (t && e && a(e.parentNode));
    return r;
  },
  Ke = function (e) {
    var t,
      n = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, 'contenteditable');
    return n === '' || n === 'true';
  },
  Oe = function (e, t, n) {
    if (te(e)) return [];
    var i = Array.prototype.slice.apply(e.querySelectorAll(B));
    return t && A.call(e, B) && i.unshift(e), (i = i.filter(n)), i;
  },
  Ee = function a(e, t, n) {
    for (var i = [], c = Array.from(e); c.length; ) {
      var r = c.shift();
      if (!te(r, !1))
        if (r.tagName === 'SLOT') {
          var d = r.assignedElements(),
            v = d.length ? d : r.children,
            f = a(v, !0, n);
          n.flatten ? i.push.apply(i, f) : i.push({ scopeParent: r, candidates: f });
        } else {
          var h = A.call(r, B);
          h && n.filter(r) && (t || !e.includes(r)) && i.push(r);
          var w = r.shadowRoot || (typeof n.getShadowRoot == 'function' && n.getShadowRoot(r)),
            m = !te(w, !1) && (!n.shadowRootFilter || n.shadowRootFilter(r));
          if (w && m) {
            var D = a(w === !0 ? r.children : w.children, !0, n);
            n.flatten ? i.push.apply(i, D) : i.push({ scopeParent: r, candidates: D });
          } else c.unshift.apply(c, r.children);
        }
    }
    return i;
  },
  Ne = function (e) {
    return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
  },
  R = function (e) {
    if (!e) throw new Error('No node provided');
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ke(e)) && !Ne(e) ? 0 : e.tabIndex;
  },
  _e = function (e, t) {
    var n = R(e);
    return n < 0 && t && !Ne(e) ? 0 : n;
  },
  $e = function (e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  },
  De = function (e) {
    return e.tagName === 'INPUT';
  },
  Ue = function (e) {
    return De(e) && e.type === 'hidden';
  },
  ze = function (e) {
    var t =
      e.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(e.children).some(function (n) {
        return n.tagName === 'SUMMARY';
      });
    return t;
  },
  Me = function (e, t) {
    for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
  },
  Pe = function (e) {
    if (!e.name) return !0;
    var t = e.form || ee(e),
      n = function (d) {
        return t.querySelectorAll('input[type="radio"][name="' + d + '"]');
      },
      i;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      i = n(window.CSS.escape(e.name));
    else
      try {
        i = n(e.name);
      } catch (r) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            r.message
          ),
          !1
        );
      }
    var c = Me(i, e.form);
    return !c || c === e;
  },
  Ve = function (e) {
    return De(e) && e.type === 'radio';
  },
  qe = function (e) {
    return Ve(e) && !Pe(e);
  },
  Ge = function (e) {
    var t,
      n = e && ee(e),
      i = (t = n) === null || t === void 0 ? void 0 : t.host,
      c = !1;
    if (n && n !== e) {
      var r, d, v;
      for (
        c = !!(
          ((r = i) !== null && r !== void 0 && (d = r.ownerDocument) !== null && d !== void 0 && d.contains(i)) ||
          (e != null && (v = e.ownerDocument) !== null && v !== void 0 && v.contains(e))
        );
        !c && i;

      ) {
        var f, h, w;
        (n = ee(i)),
          (i = (f = n) === null || f === void 0 ? void 0 : f.host),
          (c = !!((h = i) !== null && h !== void 0 && (w = h.ownerDocument) !== null && w !== void 0 && w.contains(i)));
      }
    }
    return c;
  },
  be = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.width,
      i = t.height;
    return n === 0 && i === 0;
  },
  We = function (e, t) {
    var n = t.displayCheck,
      i = t.getShadowRoot;
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    var c = A.call(e, 'details>summary:first-of-type'),
      r = c ? e.parentElement : e;
    if (A.call(r, 'details:not([open]) *')) return !0;
    if (!n || n === 'full' || n === 'legacy-full') {
      if (typeof i == 'function') {
        for (var d = e; e; ) {
          var v = e.parentElement,
            f = ee(e);
          if (v && !v.shadowRoot && i(v) === !0) return be(e);
          e.assignedSlot ? (e = e.assignedSlot) : !v && f !== e.ownerDocument ? (e = f.host) : (e = v);
        }
        e = d;
      }
      if (Ge(e)) return !e.getClientRects().length;
      if (n !== 'legacy-full') return !0;
    } else if (n === 'non-zero-area') return be(e);
    return !1;
  },
  Ye = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t; ) {
        if (t.tagName === 'FIELDSET' && t.disabled) {
          for (var n = 0; n < t.children.length; n++) {
            var i = t.children.item(n);
            if (i.tagName === 'LEGEND') return A.call(t, 'fieldset[disabled] *') ? !0 : !i.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  ae = function (e, t) {
    return !(t.disabled || te(t) || Ue(t) || We(t, e) || ze(t) || Ye(t));
  },
  se = function (e, t) {
    return !(qe(t) || R(t) < 0 || !ae(e, t));
  },
  Ze = function (e) {
    var t = parseInt(e.getAttribute('tabindex'), 10);
    return !!(isNaN(t) || t >= 0);
  },
  Xe = function a(e) {
    var t = [],
      n = [];
    return (
      e.forEach(function (i, c) {
        var r = !!i.scopeParent,
          d = r ? i.scopeParent : i,
          v = _e(d, r),
          f = r ? a(i.candidates) : d;
        v === 0
          ? r
            ? t.push.apply(t, f)
            : t.push(d)
          : n.push({ documentOrder: c, tabIndex: v, item: i, isScope: r, content: f });
      }),
      n
        .sort($e)
        .reduce(function (i, c) {
          return c.isScope ? i.push.apply(i, c.content) : i.push(c.content), i;
        }, [])
        .concat(t)
    );
  },
  ke = function (e, t) {
    t = t || {};
    var n;
    return (
      t.getShadowRoot
        ? (n = Ee([e], t.includeContainer, {
            filter: se.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: Ze,
          }))
        : (n = Oe(e, t.includeContainer, se.bind(null, t))),
      Xe(n)
    );
  },
  Se = function (e, t) {
    t = t || {};
    var n;
    return (
      t.getShadowRoot
        ? (n = Ee([e], t.includeContainer, { filter: ae.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot }))
        : (n = Oe(e, t.includeContainer, ae.bind(null, t))),
      n
    );
  },
  j = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return A.call(e, B) === !1 ? !1 : se(t, e);
  },
  Je = Te.concat('iframe').join(','),
  H = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return A.call(e, Je) === !1 ? !1 : ae(t, e);
  };
const Qe = Object.freeze(
  Object.defineProperty(
    { __proto__: null, focusable: Se, getTabIndex: R, isFocusable: H, isTabbable: j, tabbable: ke },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
/*!
 * focus-trap 7.5.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function he(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(a);
    e &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(a, i).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function pe(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? he(Object(t), !0).forEach(function (n) {
          He(a, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
      : he(Object(t)).forEach(function (n) {
          Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return a;
}
function He(a, e, t) {
  return (
    (e = et(e)),
    e in a ? Object.defineProperty(a, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (a[e] = t),
    a
  );
}
function Be(a, e) {
  if (typeof a != 'object' || a === null) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(a, e);
    if (typeof n != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(a);
}
function et(a) {
  var e = Be(a, 'string');
  return typeof e == 'symbol' ? e : String(e);
}
var ge = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var n = e[e.length - 1];
        n !== t && n.pause();
      }
      var i = e.indexOf(t);
      i === -1 || e.splice(i, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var n = e.indexOf(t);
      n !== -1 && e.splice(n, 1), e.length > 0 && e[e.length - 1].unpause();
    },
  },
  tt = function (e) {
    return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
  },
  at = function (e) {
    return (
      (e == null ? void 0 : e.key) === 'Escape' ||
      (e == null ? void 0 : e.key) === 'Esc' ||
      (e == null ? void 0 : e.keyCode) === 27
    );
  },
  q = function (e) {
    return (e == null ? void 0 : e.key) === 'Tab' || (e == null ? void 0 : e.keyCode) === 9;
  },
  nt = function (e) {
    return q(e) && !e.shiftKey;
  },
  it = function (e) {
    return q(e) && e.shiftKey;
  },
  me = function (e) {
    return setTimeout(e, 0);
  },
  ye = function (e, t) {
    var n = -1;
    return (
      e.every(function (i, c) {
        return t(i) ? ((n = c), !1) : !0;
      }),
      n
    );
  },
  M = function (e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return typeof e == 'function' ? e.apply(void 0, n) : e;
  },
  J = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == 'function' ? e.composedPath()[0] : e.target;
  },
  rt = [],
  ot = function (e, t) {
    var n = (t == null ? void 0 : t.document) || document,
      i = (t == null ? void 0 : t.trapStack) || rt,
      c = pe(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: nt,
          isKeyBackward: it,
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
      d,
      v = function (u, o, s) {
        return u && u[o] !== void 0 ? u[o] : c[s || o];
      },
      f = function (u, o) {
        var s = typeof (o == null ? void 0 : o.composedPath) == 'function' ? o.composedPath() : void 0;
        return r.containerGroups.findIndex(function (p) {
          var g = p.container,
            T = p.tabbableNodes;
          return (
            g.contains(u) ||
            (s == null ? void 0 : s.includes(g)) ||
            T.find(function (F) {
              return F === u;
            })
          );
        });
      },
      h = function (u) {
        var o = c[u];
        if (typeof o == 'function') {
          for (var s = arguments.length, p = new Array(s > 1 ? s - 1 : 0), g = 1; g < s; g++) p[g - 1] = arguments[g];
          o = o.apply(void 0, p);
        }
        if ((o === !0 && (o = void 0), !o)) {
          if (o === void 0 || o === !1) return o;
          throw new Error('`'.concat(u, '` was specified but was not a node, or did not return a node'));
        }
        var T = o;
        if (typeof o == 'string' && ((T = n.querySelector(o)), !T))
          throw new Error('`'.concat(u, '` as selector refers to no known node'));
        return T;
      },
      w = function () {
        var u = h('initialFocus');
        if (u === !1) return !1;
        if (u === void 0 || !H(u, c.tabbableOptions))
          if (f(n.activeElement) >= 0) u = n.activeElement;
          else {
            var o = r.tabbableGroups[0],
              s = o && o.firstTabbableNode;
            u = s || h('fallbackFocus');
          }
        if (!u) throw new Error('Your focus-trap needs to have at least one focusable element');
        return u;
      },
      m = function () {
        if (
          ((r.containerGroups = r.containers.map(function (u) {
            var o = ke(u, c.tabbableOptions),
              s = Se(u, c.tabbableOptions),
              p = o.length > 0 ? o[0] : void 0,
              g = o.length > 0 ? o[o.length - 1] : void 0,
              T = s.find(function (E) {
                return j(E);
              }),
              F = s
                .slice()
                .reverse()
                .find(function (E) {
                  return j(E);
                }),
              N = !!o.find(function (E) {
                return R(E) > 0;
              });
            return {
              container: u,
              tabbableNodes: o,
              focusableNodes: s,
              posTabIndexesFound: N,
              firstTabbableNode: p,
              lastTabbableNode: g,
              firstDomTabbableNode: T,
              lastDomTabbableNode: F,
              nextTabbableNode: function (x) {
                var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                  S = o.indexOf(x);
                return S < 0
                  ? U
                    ? s.slice(s.indexOf(x) + 1).find(function (z) {
                        return j(z);
                      })
                    : s
                        .slice(0, s.indexOf(x))
                        .reverse()
                        .find(function (z) {
                          return j(z);
                        })
                  : o[S + (U ? 1 : -1)];
              },
            };
          })),
          (r.tabbableGroups = r.containerGroups.filter(function (u) {
            return u.tabbableNodes.length > 0;
          })),
          r.tabbableGroups.length <= 0 && !h('fallbackFocus'))
        )
          throw new Error(
            'Your focus-trap must have at least one container with at least one tabbable node in it at all times'
          );
        if (
          r.containerGroups.find(function (u) {
            return u.posTabIndexesFound;
          }) &&
          r.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
          );
      },
      D = function y(u) {
        var o = u.activeElement;
        if (o) return o.shadowRoot && o.shadowRoot.activeElement !== null ? y(o.shadowRoot) : o;
      },
      O = function y(u) {
        if (u !== !1 && u !== D(document)) {
          if (!u || !u.focus) {
            y(w());
            return;
          }
          u.focus({ preventScroll: !!c.preventScroll }), (r.mostRecentlyFocusedNode = u), tt(u) && u.select();
        }
      },
      G = function (u) {
        var o = h('setReturnFocus', u);
        return o || (o === !1 ? !1 : u);
      },
      W = function (u) {
        var o = u.target,
          s = u.event,
          p = u.isBackward,
          g = p === void 0 ? !1 : p;
        (o = o || J(s)), m();
        var T = null;
        if (r.tabbableGroups.length > 0) {
          var F = f(o, s),
            N = F >= 0 ? r.containerGroups[F] : void 0;
          if (F < 0)
            g
              ? (T = r.tabbableGroups[r.tabbableGroups.length - 1].lastTabbableNode)
              : (T = r.tabbableGroups[0].firstTabbableNode);
          else if (g) {
            var E = ye(r.tabbableGroups, function (re) {
              var oe = re.firstTabbableNode;
              return o === oe;
            });
            if (
              (E < 0 &&
                (N.container === o ||
                  (H(o, c.tabbableOptions) && !j(o, c.tabbableOptions) && !N.nextTabbableNode(o, !1))) &&
                (E = F),
              E >= 0)
            ) {
              var x = E === 0 ? r.tabbableGroups.length - 1 : E - 1,
                U = r.tabbableGroups[x];
              T = R(o) >= 0 ? U.lastTabbableNode : U.lastDomTabbableNode;
            } else q(s) || (T = N.nextTabbableNode(o, !1));
          } else {
            var S = ye(r.tabbableGroups, function (re) {
              var oe = re.lastTabbableNode;
              return o === oe;
            });
            if (
              (S < 0 &&
                (N.container === o ||
                  (H(o, c.tabbableOptions) && !j(o, c.tabbableOptions) && !N.nextTabbableNode(o))) &&
                (S = F),
              S >= 0)
            ) {
              var z = S === r.tabbableGroups.length - 1 ? 0 : S + 1,
                ve = r.tabbableGroups[z];
              T = R(o) >= 0 ? ve.firstTabbableNode : ve.firstDomTabbableNode;
            } else q(s) || (T = N.nextTabbableNode(o));
          }
        } else T = h('fallbackFocus');
        return T;
      },
      k = function (u) {
        var o = J(u);
        if (!(f(o, u) >= 0)) {
          if (M(c.clickOutsideDeactivates, u)) {
            d.deactivate({ returnFocus: c.returnFocusOnDeactivate });
            return;
          }
          M(c.allowOutsideClick, u) || u.preventDefault();
        }
      },
      K = function (u) {
        var o = J(u),
          s = f(o, u) >= 0;
        if (s || o instanceof Document) s && (r.mostRecentlyFocusedNode = o);
        else {
          u.stopImmediatePropagation();
          var p,
            g = !0;
          if (r.mostRecentlyFocusedNode)
            if (R(r.mostRecentlyFocusedNode) > 0) {
              var T = f(r.mostRecentlyFocusedNode),
                F = r.containerGroups[T].tabbableNodes;
              if (F.length > 0) {
                var N = F.findIndex(function (E) {
                  return E === r.mostRecentlyFocusedNode;
                });
                N >= 0 &&
                  (c.isKeyForward(r.recentNavEvent)
                    ? N + 1 < F.length && ((p = F[N + 1]), (g = !1))
                    : N - 1 >= 0 && ((p = F[N - 1]), (g = !1)));
              }
            } else
              r.containerGroups.some(function (E) {
                return E.tabbableNodes.some(function (x) {
                  return R(x) > 0;
                });
              }) || (g = !1);
          else g = !1;
          g && (p = W({ target: r.mostRecentlyFocusedNode, isBackward: c.isKeyBackward(r.recentNavEvent) })),
            O(p || r.mostRecentlyFocusedNode || w());
        }
        r.recentNavEvent = void 0;
      },
      Y = function (u) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        r.recentNavEvent = u;
        var s = W({ event: u, isBackward: o });
        s && (q(u) && u.preventDefault(), O(s));
      },
      Z = function (u) {
        if (at(u) && M(c.escapeDeactivates, u) !== !1) {
          u.preventDefault(), d.deactivate();
          return;
        }
        (c.isKeyForward(u) || c.isKeyBackward(u)) && Y(u, c.isKeyBackward(u));
      },
      _ = function (u) {
        var o = J(u);
        f(o, u) >= 0 ||
          M(c.clickOutsideDeactivates, u) ||
          M(c.allowOutsideClick, u) ||
          (u.preventDefault(), u.stopImmediatePropagation());
      },
      C = function () {
        if (r.active)
          return (
            ge.activateTrap(i, d),
            (r.delayInitialFocusTimer = c.delayInitialFocus
              ? me(function () {
                  O(w());
                })
              : O(w())),
            n.addEventListener('focusin', K, !0),
            n.addEventListener('mousedown', k, { capture: !0, passive: !1 }),
            n.addEventListener('touchstart', k, { capture: !0, passive: !1 }),
            n.addEventListener('click', _, { capture: !0, passive: !1 }),
            n.addEventListener('keydown', Z, { capture: !0, passive: !1 }),
            d
          );
      },
      X = function () {
        if (r.active)
          return (
            n.removeEventListener('focusin', K, !0),
            n.removeEventListener('mousedown', k, !0),
            n.removeEventListener('touchstart', k, !0),
            n.removeEventListener('click', _, !0),
            n.removeEventListener('keydown', Z, !0),
            d
          );
      },
      de = function (u) {
        var o = u.some(function (s) {
          var p = Array.from(s.removedNodes);
          return p.some(function (g) {
            return g === r.mostRecentlyFocusedNode;
          });
        });
        o && O(w());
      },
      ie = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(de) : void 0,
      $ = function () {
        ie &&
          (ie.disconnect(),
          r.active &&
            !r.paused &&
            r.containers.map(function (u) {
              ie.observe(u, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (d = {
        get active() {
          return r.active;
        },
        get paused() {
          return r.paused;
        },
        activate: function (u) {
          if (r.active) return this;
          var o = v(u, 'onActivate'),
            s = v(u, 'onPostActivate'),
            p = v(u, 'checkCanFocusTrap');
          p || m(),
            (r.active = !0),
            (r.paused = !1),
            (r.nodeFocusedBeforeActivation = n.activeElement),
            o == null || o();
          var g = function () {
            p && m(), C(), $(), s == null || s();
          };
          return p ? (p(r.containers.concat()).then(g, g), this) : (g(), this);
        },
        deactivate: function (u) {
          if (!r.active) return this;
          var o = pe(
            {
              onDeactivate: c.onDeactivate,
              onPostDeactivate: c.onPostDeactivate,
              checkCanReturnFocus: c.checkCanReturnFocus,
            },
            u
          );
          clearTimeout(r.delayInitialFocusTimer),
            (r.delayInitialFocusTimer = void 0),
            X(),
            (r.active = !1),
            (r.paused = !1),
            $(),
            ge.deactivateTrap(i, d);
          var s = v(o, 'onDeactivate'),
            p = v(o, 'onPostDeactivate'),
            g = v(o, 'checkCanReturnFocus'),
            T = v(o, 'returnFocus', 'returnFocusOnDeactivate');
          s == null || s();
          var F = function () {
            me(function () {
              T && O(G(r.nodeFocusedBeforeActivation)), p == null || p();
            });
          };
          return T && g ? (g(G(r.nodeFocusedBeforeActivation)).then(F, F), this) : (F(), this);
        },
        pause: function (u) {
          if (r.paused || !r.active) return this;
          var o = v(u, 'onPause'),
            s = v(u, 'onPostPause');
          return (r.paused = !0), o == null || o(), X(), $(), s == null || s(), this;
        },
        unpause: function (u) {
          if (!r.paused || !r.active) return this;
          var o = v(u, 'onUnpause'),
            s = v(u, 'onPostUnpause');
          return (r.paused = !1), o == null || o(), m(), C(), $(), s == null || s(), this;
        },
        updateContainerElements: function (u) {
          var o = [].concat(u).filter(Boolean);
          return (
            (r.containers = o.map(function (s) {
              return typeof s == 'string' ? n.querySelector(s) : s;
            })),
            r.active && m(),
            $(),
            this
          );
        },
      }),
      d.updateContainerElements(e),
      d
    );
  };
const ut = Object.freeze(
    Object.defineProperty({ __proto__: null, createFocusTrap: ot }, Symbol.toStringTag, { value: 'Module' })
  ),
  ct = we(ut),
  st = we(Qe);
function L(a) {
  '@babel/helpers - typeof';
  return (
    (L =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    L(a)
  );
}
function lt(a, e) {
  if (!(a instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function ft(a, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(a, Re(n.key), n);
  }
}
function dt(a, e, t) {
  return e && ft(a.prototype, e), Object.defineProperty(a, 'prototype', { writable: !1 }), a;
}
function vt(a, e) {
  if (typeof e != 'function' && e !== null) throw new TypeError('Super expression must either be null or a function');
  (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
    Object.defineProperty(a, 'prototype', { writable: !1 }),
    e && le(a, e);
}
function le(a, e) {
  return (
    (le = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    le(a, e)
  );
}
function bt(a) {
  var e = pt();
  return function () {
    var n = ne(a),
      i;
    if (e) {
      var c = ne(this).constructor;
      i = Reflect.construct(n, arguments, c);
    } else i = n.apply(this, arguments);
    return ht(this, i);
  };
}
function ht(a, e) {
  if (e && (L(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return V(a);
}
function V(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function pt() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function ne(a) {
  return (
    (ne = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    ne(a)
  );
}
function gt(a, e, t) {
  return (
    (e = Re(e)),
    e in a ? Object.defineProperty(a, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (a[e] = t),
    a
  );
}
function Re(a) {
  var e = mt(a, 'string');
  return L(e) === 'symbol' ? e : String(e);
}
function mt(a, e) {
  if (L(a) !== 'object' || a === null) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(a, e);
    if (L(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(a);
}
var Q = I,
  l = xe,
  yt = ct,
  wt = yt.createFocusTrap,
  Tt = st,
  Ft = Tt.isFocusable,
  fe = (function (a) {
    vt(t, a);
    var e = bt(t);
    function t(n) {
      var i;
      lt(this, t),
        (i = e.call(this, n)),
        gt(V(i), 'getNodeForOption', function (d) {
          var v,
            f = (v = this.internalOptions[d]) !== null && v !== void 0 ? v : this.originalOptions[d];
          if (typeof f == 'function') {
            for (var h = arguments.length, w = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++) w[m - 1] = arguments[m];
            f = f.apply(void 0, w);
          }
          if ((f === !0 && (f = void 0), !f)) {
            if (f === void 0 || f === !1) return f;
            throw new Error('`'.concat(d, '` was specified but was not a node, or did not return a node'));
          }
          var D = f;
          if (typeof f == 'string') {
            var O;
            if (((D = (O = this.getDocument()) === null || O === void 0 ? void 0 : O.querySelector(f)), !D))
              throw new Error('`'.concat(d, '` as selector refers to no known node'));
          }
          return D;
        }),
        (i.handleDeactivate = i.handleDeactivate.bind(V(i))),
        (i.handlePostDeactivate = i.handlePostDeactivate.bind(V(i))),
        (i.handleClickOutsideDeactivates = i.handleClickOutsideDeactivates.bind(V(i))),
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
      var c = n.focusTrapOptions;
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
      return (i.outsideClick = null), (i.focusTrapElements = n.containerElements || []), i.updatePreviousElement(), i;
    }
    return (
      dt(t, [
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
                var d = i.getReturnFocusNode(),
                  v = !!(
                    i.originalOptions.returnFocusOnDeactivate &&
                    d !== null &&
                    d !== void 0 &&
                    d.focus &&
                    (!i.outsideClick ||
                      (i.outsideClick.allowDeactivation &&
                        !Ft(i.outsideClick.target, i.internalOptions.tabbableOptions)))
                  ),
                  f = i.internalOptions.preventScroll,
                  h = f === void 0 ? !1 : f;
                v && d.focus({ preventScroll: h }),
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
                d = !i.paused && this.props.paused,
                v = i.paused && !this.props.paused;
              if ((c && (this.updatePreviousElement(), this.focusTrap.activate()), r)) {
                this.deactivateTrap();
                return;
              }
              d && this.focusTrap.pause(), v && this.focusTrap.unpause();
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
              c = this.props.children ? Q.Children.only(this.props.children) : void 0;
            if (c) {
              if (c.type && c.type === Q.Fragment)
                throw new Error(
                  'A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.'
                );
              var r = function (f) {
                  var h = i.props.containerElements;
                  c && (typeof c.ref == 'function' ? c.ref(f) : c.ref && (c.ref.current = f)),
                    (i.focusTrapElements = h || [f]);
                },
                d = Q.cloneElement(c, { ref: r });
              return d;
            }
            return null;
          },
        },
      ]),
      t
    );
  })(Q.Component),
  P = typeof Element > 'u' ? Function : Element;
fe.propTypes = {
  active: l.bool,
  paused: l.bool,
  focusTrapOptions: l.shape({
    document: l.object,
    onActivate: l.func,
    onPostActivate: l.func,
    checkCanFocusTrap: l.func,
    onPause: l.func,
    onPostPause: l.func,
    onUnpause: l.func,
    onPostUnpause: l.func,
    onDeactivate: l.func,
    onPostDeactivate: l.func,
    checkCanReturnFocus: l.func,
    initialFocus: l.oneOfType([l.instanceOf(P), l.string, l.bool, l.func]),
    fallbackFocus: l.oneOfType([l.instanceOf(P), l.string, l.func]),
    escapeDeactivates: l.oneOfType([l.bool, l.func]),
    clickOutsideDeactivates: l.oneOfType([l.bool, l.func]),
    returnFocusOnDeactivate: l.bool,
    setReturnFocus: l.oneOfType([l.instanceOf(P), l.string, l.bool, l.func]),
    allowOutsideClick: l.oneOfType([l.bool, l.func]),
    preventScroll: l.bool,
    tabbableOptions: l.shape({
      displayCheck: l.oneOf(['full', 'legacy-full', 'non-zero-area', 'none']),
      getShadowRoot: l.oneOfType([l.bool, l.func]),
    }),
    trapStack: l.array,
    isKeyForward: l.func,
    isKeyBackward: l.func,
  }),
  containerElements: l.arrayOf(l.instanceOf(P)),
  children: l.oneOfType([l.element, l.instanceOf(P)]),
};
fe.defaultProps = { active: !0, paused: !1, focusTrapOptions: {}, _createFocusTrap: wt };
var Ot = fe;
const Et = Ce(Ot),
  Nt = ({
    id: a,
    title: e,
    primaryBtnProps: t,
    secondaryBtnProps: n,
    linkBtnProps: i,
    hasSecondaryBtn: c,
    hasLinkBtn: r,
    children: d,
    hasFooter: v,
    open: f,
    onClose: h,
  }) => {
    const w = I.useRef(null);
    I.useEffect(() => {
      f ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll');
    }, [f]);
    const m = f ? { 'aria-labelledby': `${a}-description` } : {},
      D = (O) => {
        w.current && !w.current.contains(O.target) && h();
      };
    return b.jsx('div', {
      className: 'gnb-modal left',
      id: a + Math.random().toString(36).substring(2, 9),
      role: 'dialog',
      'aria-modal': 'true',
      'aria-hidden': !f,
      ...m,
      onClick: D,
      children:
        f &&
        b.jsx(Et, {
          focusTrapOptions: { clickOutsideDeactivates: !0, initialFocus: !1 },
          children: b.jsxs('dialog', {
            ref: w,
            children: [
              b.jsxs('button', {
                className: 'gnb-btn-close',
                onClick: h,
                children: [
                  b.jsx('span', { className: 'sr-only', children: 'Close modal window' }),
                  b.jsx(je, { icon: Ie }),
                ],
              }),
              b.jsx('div', { className: 'gnb-modal-header', children: b.jsx('h2', { id: `${a}-title`, children: e }) }),
              b.jsx('div', { className: 'gnb-modal-body', id: `${a}-description`, children: d }),
              v &&
                b.jsxs('div', {
                  className: 'gnb-modal-footer',
                  children: [
                    b.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: b.jsx(ue, {
                        type: 'button',
                        variant: t != null && t.variant ? (t == null ? void 0 : t.variant) : 'primary',
                        label: t == null ? void 0 : t.label,
                        size: t != null && t.size ? t.size : 'small',
                        onClick: t == null ? void 0 : t.onClick,
                        disabled: t == null ? void 0 : t.disabled,
                      }),
                    }),
                    c &&
                      b.jsx(ue, {
                        variant: n != null && n.variant ? n.variant : 'secondary',
                        label: n == null ? void 0 : n.label,
                        size: n != null && n.size ? n.size : 'small',
                        onClick: n == null ? void 0 : n.onClick,
                        disabled: n == null ? void 0 : n.disabled,
                      }),
                    r &&
                      b.jsx(ue, {
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
  Ct = ({
    variant: a,
    type: e,
    description: t,
    inPageHeading: n,
    isOpen: i,
    setIsOpen: c,
    hasMarginTop: r,
    hasTimeout: d = !0,
  }) => {
    const [v, f] = I.useState(!1);
    return (
      I.useEffect(() => {
        i && f(!1);
      }, [i]),
      I.useEffect(() => {
        const h = d
          ? setTimeout(() => {
              f(!0), c(!1);
            }, 5e3)
          : void 0;
        return () => clearTimeout(h);
      }, [i, a, e, t, n, c, v, d]),
      v
        ? null
        : i
        ? b.jsxs(b.Fragment, {
            children: [
              a !== 'global' &&
                b.jsxs('div', {
                  className: ce('no-margin-bottom', {
                    'gnb-alert-info-inline': a === 'inline' && e === 'info',
                    'gnb-alert-success-inline': a === 'inline' && e === 'success',
                    'gnb-alert-warning-inline': a === 'inline' && e === 'warning',
                    'gnb-alert-critical-inline': a === 'inline' && e === 'critical',
                    'gnb-alert-info': a === 'inPage' && e === 'info',
                    'gnb-alert-success': a === 'inPage' && e === 'success',
                    'gnb-alert-warning': a === 'inPage' && e === 'warning',
                    'gnb-alert-critical margin-bottom-lg no-margin-top': a === 'inPage' && e === 'critical' && !r,
                    'gnb-alert-critical margin-bottom-xs margin-top-md': a === 'inPage' && e === 'critical' && r,
                  }),
                  role: 'alert',
                  children: [
                    a === 'inPage' && n && b.jsx('h2', { className: 'left', children: n }),
                    b.jsx('div', { className: 'left', children: t }),
                  ],
                }),
              a === 'global' &&
                b.jsx('section', {
                  className: ce({
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
  xt = ({
    label: a = '',
    type: e,
    helperText: t,
    required: n = !1,
    placeholder: i,
    value: c,
    onChange: r,
    onKeyUp: d,
    onBlur: v,
    onFocus: f,
    error: h,
    valid: w,
    id: m,
    maxlength: D,
    hasTooltipModal: O = !1,
    tooltipBody: G = '',
    tooltipTitle: W = '',
    isTooltipModalOpen: k = !1,
    setIsTooltipModalOpen: K = () => {},
  }) => {
    const Y = Ae(a) + '-error-id',
      Z = h ? { 'aria-labelledby': Y } : {},
      _ = () => K(!1);
    return (
      I.useEffect(() => {
        const C = (X) => {
          X.key === 'Escape' && _();
        };
        return (
          k && window.addEventListener('keydown', C),
          () => {
            window.removeEventListener('keydown', C);
          }
        );
      }, [k]),
      b.jsxs(b.Fragment, {
        children: [
          b.jsxs('form', {
            onSubmit: (C) => C.preventDefault(),
            className: ce('gnb-form-input', h ? 'error' : '', w ? 'valid' : ''),
            noValidate: !0,
            children: [
              b.jsxs('label', {
                className: 'left',
                htmlFor: m || a,
                children: [
                  !O && b.jsxs('span', { children: [a, n && b.jsx('span', { className: 'required', children: '*' })] }),
                  O &&
                    b.jsxs('a', {
                      href: '#',
                      tabIndex: 0,
                      'data-target': m || a,
                      'aria-haspopup': 'dialog',
                      'aria-controls': m || a,
                      className: 'modal-button info gnb-tooltip-link',
                      onClick: () => K(!0),
                      children: [a, n && b.jsx('span', { className: 'required', children: '*' })],
                    }),
                ],
              }),
              t && b.jsx('div', { className: 'gnb-form-helper-text left', children: t }),
              b.jsx('input', {
                type: e,
                name: a,
                id: m || a,
                required: n,
                value: c,
                placeholder: i,
                onChange: r,
                ...Z,
                'aria-invalid': !!h,
                className: 'text-input',
                maxLength: D,
                onFocus: f,
                onBlur: v,
                onKeyUp: d,
              }),
              h && b.jsx(Le, { id: Y, error: h, classes: e === 'tel' ? 'tel-input' : '' }),
            ],
          }),
          k && b.jsx(Nt, { id: `tooltip-input-modal-${m || a}`, title: W, open: k, onClose: _, children: G }),
        ],
      })
    );
  };
function jt(a, e, t) {
  return /^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,3})+$/.test(a) ? (e(''), !0) : (e(t), !1);
}
function Dt(a) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_!,.@#$%&'*();:~? -]*$/.test(a);
}
const It = (a, e) => {
  a.target.value.length > 2 ? e(!1) : e(!0);
};
function At(a) {
  var t;
  const e = [];
  for (const n of a) {
    const i = (t = document == null ? void 0 : document.getElementById(n)) == null ? void 0 : t.checked;
    e.push({ value: n, checked: i });
  }
  return e;
}
function Lt(a) {
  return a.replace(/[^\w\s]/gi, '');
}
function kt(a) {
  return a.replace(/\s/g, '');
}
function Kt(a) {
  return kt(a).length === 6 || a.toUpperCase() === 'NA';
}
function _t(a) {
  return a.trim().length <= 8 && a.trim().length >= 1;
}
function $t(a) {
  return a.trim().length >= 1 && Dt(a);
}
function Ut(a) {
  return a.trim().length >= 0;
}
const zt = (a, e, t) => {
  let n;
  return a === 'profanity' && (n = e), a === 'invalid-custom-name' && (n = t), n;
};
export { Ct as A, Nt as M, xt as T, Kt as a, _t as b, zt as c, $t as d, It as e, At as g, Ut as i, Lt as r, jt as v };
