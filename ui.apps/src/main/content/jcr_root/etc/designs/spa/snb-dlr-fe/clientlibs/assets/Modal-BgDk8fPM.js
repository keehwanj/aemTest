import { q as de, s as we, t as Oe, o as Fe, r as Ee, j as P, w as De, x as ke } from './index-CLFRBv6J.js';
import { B as Ne } from './ButtonGroup-BCYMqWF3.js';
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var ve = [
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
  X = ve.join(','),
  be = typeof Element > 'u',
  _ = be
    ? function () {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  Z =
    !be && Element.prototype.getRootNode
      ? function (o) {
          var e;
          return o == null || (e = o.getRootNode) === null || e === void 0 ? void 0 : e.call(o);
        }
      : function (o) {
          return o == null ? void 0 : o.ownerDocument;
        },
  J = function o(e, t) {
    var a;
    t === void 0 && (t = !0);
    var u = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, 'inert'),
      d = u === '' || u === 'true',
      i = d || (t && e && o(e.parentNode));
    return i;
  },
  Re = function (e) {
    var t,
      a = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, 'contenteditable');
    return a === '' || a === 'true';
  },
  pe = function (e, t, a) {
    if (J(e)) return [];
    var u = Array.prototype.slice.apply(e.querySelectorAll(X));
    return t && _.call(e, X) && u.unshift(e), (u = u.filter(a)), u;
  },
  he = function o(e, t, a) {
    for (var u = [], d = Array.from(e); d.length; ) {
      var i = d.shift();
      if (!J(i, !1))
        if (i.tagName === 'SLOT') {
          var m = i.assignedElements(),
            h = m.length ? m : i.children,
            O = o(h, !0, a);
          a.flatten ? u.push.apply(u, O) : u.push({ scopeParent: i, candidates: O });
        } else {
          var k = _.call(i, X);
          k && a.filter(i) && (t || !e.includes(i)) && u.push(i);
          var D = i.shadowRoot || (typeof a.getShadowRoot == 'function' && a.getShadowRoot(i)),
            S = !J(D, !1) && (!a.shadowRootFilter || a.shadowRootFilter(i));
          if (D && S) {
            var j = o(D === !0 ? i.children : D.children, !0, a);
            a.flatten ? u.push.apply(u, j) : u.push({ scopeParent: i, candidates: j });
          } else d.unshift.apply(d, i.children);
        }
    }
    return u;
  },
  ye = function (e) {
    return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
  },
  A = function (e) {
    if (!e) throw new Error('No node provided');
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Re(e)) && !ye(e) ? 0 : e.tabIndex;
  },
  Ce = function (e, t) {
    var a = A(e);
    return a < 0 && t && !ye(e) ? 0 : a;
  },
  Se = function (e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  },
  ge = function (e) {
    return e.tagName === 'INPUT';
  },
  Pe = function (e) {
    return ge(e) && e.type === 'hidden';
  },
  je = function (e) {
    var t =
      e.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(e.children).some(function (a) {
        return a.tagName === 'SUMMARY';
      });
    return t;
  },
  xe = function (e, t) {
    for (var a = 0; a < e.length; a++) if (e[a].checked && e[a].form === t) return e[a];
  },
  Ie = function (e) {
    if (!e.name) return !0;
    var t = e.form || Z(e),
      a = function (m) {
        return t.querySelectorAll('input[type="radio"][name="' + m + '"]');
      },
      u;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      u = a(window.CSS.escape(e.name));
    else
      try {
        u = a(e.name);
      } catch (i) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            i.message
          ),
          !1
        );
      }
    var d = xe(u, e.form);
    return !d || d === e;
  },
  Ae = function (e) {
    return ge(e) && e.type === 'radio';
  },
  Le = function (e) {
    return Ae(e) && !Ie(e);
  },
  Ke = function (e) {
    var t,
      a = e && Z(e),
      u = (t = a) === null || t === void 0 ? void 0 : t.host,
      d = !1;
    if (a && a !== e) {
      var i, m, h;
      for (
        d = !!(
          ((i = u) !== null && i !== void 0 && (m = i.ownerDocument) !== null && m !== void 0 && m.contains(u)) ||
          (e != null && (h = e.ownerDocument) !== null && h !== void 0 && h.contains(e))
        );
        !d && u;

      ) {
        var O, k, D;
        (a = Z(u)),
          (u = (O = a) === null || O === void 0 ? void 0 : O.host),
          (d = !!((k = u) !== null && k !== void 0 && (D = k.ownerDocument) !== null && D !== void 0 && D.contains(u)));
      }
    }
    return d;
  },
  ie = function (e) {
    var t = e.getBoundingClientRect(),
      a = t.width,
      u = t.height;
    return a === 0 && u === 0;
  },
  _e = function (e, t) {
    var a = t.displayCheck,
      u = t.getShadowRoot;
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    var d = _.call(e, 'details>summary:first-of-type'),
      i = d ? e.parentElement : e;
    if (_.call(i, 'details:not([open]) *')) return !0;
    if (!a || a === 'full' || a === 'legacy-full') {
      if (typeof u == 'function') {
        for (var m = e; e; ) {
          var h = e.parentElement,
            O = Z(e);
          if (h && !h.shadowRoot && u(h) === !0) return ie(e);
          e.assignedSlot ? (e = e.assignedSlot) : !h && O !== e.ownerDocument ? (e = O.host) : (e = h);
        }
        e = m;
      }
      if (Ke(e)) return !e.getClientRects().length;
      if (a !== 'legacy-full') return !0;
    } else if (a === 'non-zero-area') return ie(e);
    return !1;
  },
  Me = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t; ) {
        if (t.tagName === 'FIELDSET' && t.disabled) {
          for (var a = 0; a < t.children.length; a++) {
            var u = t.children.item(a);
            if (u.tagName === 'LEGEND') return _.call(t, 'fieldset[disabled] *') ? !0 : !u.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  Q = function (e, t) {
    return !(t.disabled || J(t) || Pe(t) || _e(t, e) || je(t) || Me(t));
  },
  ne = function (e, t) {
    return !(Le(t) || A(t) < 0 || !Q(e, t));
  },
  qe = function (e) {
    var t = parseInt(e.getAttribute('tabindex'), 10);
    return !!(isNaN(t) || t >= 0);
  },
  Ue = function o(e) {
    var t = [],
      a = [];
    return (
      e.forEach(function (u, d) {
        var i = !!u.scopeParent,
          m = i ? u.scopeParent : u,
          h = Ce(m, i),
          O = i ? o(u.candidates) : m;
        h === 0
          ? i
            ? t.push.apply(t, O)
            : t.push(m)
          : a.push({ documentOrder: d, tabIndex: h, item: u, isScope: i, content: O });
      }),
      a
        .sort(Se)
        .reduce(function (u, d) {
          return d.isScope ? u.push.apply(u, d.content) : u.push(d.content), u;
        }, [])
        .concat(t)
    );
  },
  me = function (e, t) {
    t = t || {};
    var a;
    return (
      t.getShadowRoot
        ? (a = he([e], t.includeContainer, {
            filter: ne.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: qe,
          }))
        : (a = pe(e, t.includeContainer, ne.bind(null, t))),
      Ue(a)
    );
  },
  Te = function (e, t) {
    t = t || {};
    var a;
    return (
      t.getShadowRoot
        ? (a = he([e], t.includeContainer, { filter: Q.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot }))
        : (a = pe(e, t.includeContainer, Q.bind(null, t))),
      a
    );
  },
  K = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return _.call(e, X) === !1 ? !1 : ne(t, e);
  },
  Ge = ve.concat('iframe').join(','),
  B = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return _.call(e, Ge) === !1 ? !1 : Q(t, e);
  };
const $e = Object.freeze(
  Object.defineProperty(
    { __proto__: null, focusable: Te, getTabIndex: A, isFocusable: B, isTabbable: K, tabbable: me },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
/*!
 * focus-trap 7.6.0
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function Ve(o, e, t) {
  return (
    (e = We(e)) in o
      ? Object.defineProperty(o, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (o[e] = t),
    o
  );
}
function oe(o, e) {
  var t = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(o);
    e &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(o, u).enumerable;
      })),
      t.push.apply(t, a);
  }
  return t;
}
function ue(o) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? oe(Object(t), !0).forEach(function (a) {
          Ve(o, a, t[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t))
      : oe(Object(t)).forEach(function (a) {
          Object.defineProperty(o, a, Object.getOwnPropertyDescriptor(t, a));
        });
  }
  return o;
}
function ze(o, e) {
  if (typeof o != 'object' || !o) return o;
  var t = o[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(o, e);
    if (typeof a != 'object') return a;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(o);
}
function We(o) {
  var e = ze(o, 'string');
  return typeof e == 'symbol' ? e : e + '';
}
var ce = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var a = e[e.length - 1];
        a !== t && a.pause();
      }
      var u = e.indexOf(t);
      u === -1 || e.splice(u, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var a = e.indexOf(t);
      a !== -1 && e.splice(a, 1), e.length > 0 && e[e.length - 1].unpause();
    },
  },
  Ye = function (e) {
    return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
  },
  Be = function (e) {
    return (
      (e == null ? void 0 : e.key) === 'Escape' ||
      (e == null ? void 0 : e.key) === 'Esc' ||
      (e == null ? void 0 : e.keyCode) === 27
    );
  },
  V = function (e) {
    return (e == null ? void 0 : e.key) === 'Tab' || (e == null ? void 0 : e.keyCode) === 9;
  },
  Xe = function (e) {
    return V(e) && !e.shiftKey;
  },
  Ze = function (e) {
    return V(e) && e.shiftKey;
  },
  se = function (e) {
    return setTimeout(e, 0);
  },
  le = function (e, t) {
    var a = -1;
    return (
      e.every(function (u, d) {
        return t(u) ? ((a = d), !1) : !0;
      }),
      a
    );
  },
  $ = function (e) {
    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) a[u - 1] = arguments[u];
    return typeof e == 'function' ? e.apply(void 0, a) : e;
  },
  Y = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == 'function' ? e.composedPath()[0] : e.target;
  },
  Je = [],
  Qe = function (e, t) {
    var a = (t == null ? void 0 : t.document) || document,
      u = (t == null ? void 0 : t.trapStack) || Je,
      d = ue(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: Xe,
          isKeyBackward: Ze,
        },
        t
      ),
      i = {
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
      m,
      h = function (r, n, s) {
        return r && r[n] !== void 0 ? r[n] : d[s || n];
      },
      O = function (r, n) {
        var s = typeof (n == null ? void 0 : n.composedPath) == 'function' ? n.composedPath() : void 0;
        return i.containerGroups.findIndex(function (g) {
          var y = g.container,
            w = g.tabbableNodes;
          return (
            y.contains(r) ||
            (s == null ? void 0 : s.includes(y)) ||
            w.find(function (F) {
              return F === r;
            })
          );
        });
      },
      k = function (r) {
        var n = d[r];
        if (typeof n == 'function') {
          for (var s = arguments.length, g = new Array(s > 1 ? s - 1 : 0), y = 1; y < s; y++) g[y - 1] = arguments[y];
          n = n.apply(void 0, g);
        }
        if ((n === !0 && (n = void 0), !n)) {
          if (n === void 0 || n === !1) return n;
          throw new Error('`'.concat(r, '` was specified but was not a node, or did not return a node'));
        }
        var w = n;
        if (typeof n == 'string' && ((w = a.querySelector(n)), !w))
          throw new Error('`'.concat(r, '` as selector refers to no known node'));
        return w;
      },
      D = function () {
        var r = k('initialFocus');
        if (r === !1) return !1;
        if (r === void 0 || !B(r, d.tabbableOptions))
          if (O(a.activeElement) >= 0) r = a.activeElement;
          else {
            var n = i.tabbableGroups[0],
              s = n && n.firstTabbableNode;
            r = s || k('fallbackFocus');
          }
        if (!r) throw new Error('Your focus-trap needs to have at least one focusable element');
        return r;
      },
      S = function () {
        if (
          ((i.containerGroups = i.containers.map(function (r) {
            var n = me(r, d.tabbableOptions),
              s = Te(r, d.tabbableOptions),
              g = n.length > 0 ? n[0] : void 0,
              y = n.length > 0 ? n[n.length - 1] : void 0,
              w = s.find(function (N) {
                return K(N);
              }),
              F = s
                .slice()
                .reverse()
                .find(function (N) {
                  return K(N);
                }),
              C = !!n.find(function (N) {
                return A(N) > 0;
              });
            return {
              container: r,
              tabbableNodes: n,
              focusableNodes: s,
              posTabIndexesFound: C,
              firstTabbableNode: g,
              lastTabbableNode: y,
              firstDomTabbableNode: w,
              lastDomTabbableNode: F,
              nextTabbableNode: function (L) {
                var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                  I = n.indexOf(L);
                return I < 0
                  ? U
                    ? s.slice(s.indexOf(L) + 1).find(function (G) {
                        return K(G);
                      })
                    : s
                        .slice(0, s.indexOf(L))
                        .reverse()
                        .find(function (G) {
                          return K(G);
                        })
                  : n[I + (U ? 1 : -1)];
              },
            };
          })),
          (i.tabbableGroups = i.containerGroups.filter(function (r) {
            return r.tabbableNodes.length > 0;
          })),
          i.tabbableGroups.length <= 0 && !k('fallbackFocus'))
        )
          throw new Error(
            'Your focus-trap must have at least one container with at least one tabbable node in it at all times'
          );
        if (
          i.containerGroups.find(function (r) {
            return r.posTabIndexesFound;
          }) &&
          i.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
          );
      },
      j = function (r) {
        var n = r.activeElement;
        if (n) return n.shadowRoot && n.shadowRoot.activeElement !== null ? j(n.shadowRoot) : n;
      },
      R = function (r) {
        if (r !== !1 && r !== j(document)) {
          if (!r || !r.focus) {
            R(D());
            return;
          }
          r.focus({ preventScroll: !!d.preventScroll }), (i.mostRecentlyFocusedNode = r), Ye(r) && r.select();
        }
      },
      f = function (r) {
        var n = k('setReturnFocus', r);
        return n || (n === !1 ? !1 : r);
      },
      z = function (r) {
        var n = r.target,
          s = r.event,
          g = r.isBackward,
          y = g === void 0 ? !1 : g;
        (n = n || Y(s)), S();
        var w = null;
        if (i.tabbableGroups.length > 0) {
          var F = O(n, s),
            C = F >= 0 ? i.containerGroups[F] : void 0;
          if (F < 0)
            y
              ? (w = i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode)
              : (w = i.tabbableGroups[0].firstTabbableNode);
          else if (y) {
            var N = le(i.tabbableGroups, function (ee) {
              var te = ee.firstTabbableNode;
              return n === te;
            });
            if (
              (N < 0 &&
                (C.container === n ||
                  (B(n, d.tabbableOptions) && !K(n, d.tabbableOptions) && !C.nextTabbableNode(n, !1))) &&
                (N = F),
              N >= 0)
            ) {
              var L = N === 0 ? i.tabbableGroups.length - 1 : N - 1,
                U = i.tabbableGroups[L];
              w = A(n) >= 0 ? U.lastTabbableNode : U.lastDomTabbableNode;
            } else V(s) || (w = C.nextTabbableNode(n, !1));
          } else {
            var I = le(i.tabbableGroups, function (ee) {
              var te = ee.lastTabbableNode;
              return n === te;
            });
            if (
              (I < 0 &&
                (C.container === n ||
                  (B(n, d.tabbableOptions) && !K(n, d.tabbableOptions) && !C.nextTabbableNode(n))) &&
                (I = F),
              I >= 0)
            ) {
              var G = I === i.tabbableGroups.length - 1 ? 0 : I + 1,
                re = i.tabbableGroups[G];
              w = A(n) >= 0 ? re.firstTabbableNode : re.firstDomTabbableNode;
            } else V(s) || (w = C.nextTabbableNode(n));
          }
        } else w = k('fallbackFocus');
        return w;
      },
      M = function (r) {
        var n = Y(r);
        if (!(O(n, r) >= 0)) {
          if ($(d.clickOutsideDeactivates, r)) {
            m.deactivate({ returnFocus: d.returnFocusOnDeactivate });
            return;
          }
          $(d.allowOutsideClick, r) || r.preventDefault();
        }
      },
      W = function (r) {
        var n = Y(r),
          s = O(n, r) >= 0;
        if (s || n instanceof Document) s && (i.mostRecentlyFocusedNode = n);
        else {
          r.stopImmediatePropagation();
          var g,
            y = !0;
          if (i.mostRecentlyFocusedNode)
            if (A(i.mostRecentlyFocusedNode) > 0) {
              var w = O(i.mostRecentlyFocusedNode),
                F = i.containerGroups[w].tabbableNodes;
              if (F.length > 0) {
                var C = F.findIndex(function (N) {
                  return N === i.mostRecentlyFocusedNode;
                });
                C >= 0 &&
                  (d.isKeyForward(i.recentNavEvent)
                    ? C + 1 < F.length && ((g = F[C + 1]), (y = !1))
                    : C - 1 >= 0 && ((g = F[C - 1]), (y = !1)));
              }
            } else
              i.containerGroups.some(function (N) {
                return N.tabbableNodes.some(function (L) {
                  return A(L) > 0;
                });
              }) || (y = !1);
          else y = !1;
          y && (g = z({ target: i.mostRecentlyFocusedNode, isBackward: d.isKeyBackward(i.recentNavEvent) })),
            R(g || i.mostRecentlyFocusedNode || D());
        }
        i.recentNavEvent = void 0;
      },
      H = function (r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        i.recentNavEvent = r;
        var s = z({ event: r, isBackward: n });
        s && (V(r) && r.preventDefault(), R(s));
      },
      q = function (r) {
        (d.isKeyForward(r) || d.isKeyBackward(r)) && H(r, d.isKeyBackward(r));
      },
      x = function (r) {
        Be(r) && $(d.escapeDeactivates, r) !== !1 && (r.preventDefault(), m.deactivate());
      },
      v = function (r) {
        var n = Y(r);
        O(n, r) >= 0 ||
          $(d.clickOutsideDeactivates, r) ||
          $(d.allowOutsideClick, r) ||
          (r.preventDefault(), r.stopImmediatePropagation());
      },
      l = function () {
        if (i.active)
          return (
            ce.activateTrap(u, m),
            (i.delayInitialFocusTimer = d.delayInitialFocus
              ? se(function () {
                  R(D());
                })
              : R(D())),
            a.addEventListener('focusin', W, !0),
            a.addEventListener('mousedown', M, { capture: !0, passive: !1 }),
            a.addEventListener('touchstart', M, { capture: !0, passive: !1 }),
            a.addEventListener('click', v, { capture: !0, passive: !1 }),
            a.addEventListener('keydown', q, { capture: !0, passive: !1 }),
            a.addEventListener('keydown', x),
            m
          );
      },
      p = function () {
        if (i.active)
          return (
            a.removeEventListener('focusin', W, !0),
            a.removeEventListener('mousedown', M, !0),
            a.removeEventListener('touchstart', M, !0),
            a.removeEventListener('click', v, !0),
            a.removeEventListener('keydown', q, !0),
            a.removeEventListener('keydown', x),
            m
          );
      },
      c = function (r) {
        var n = r.some(function (s) {
          var g = Array.from(s.removedNodes);
          return g.some(function (y) {
            return y === i.mostRecentlyFocusedNode;
          });
        });
        n && R(D());
      },
      T = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(c) : void 0,
      E = function () {
        T &&
          (T.disconnect(),
          i.active &&
            !i.paused &&
            i.containers.map(function (r) {
              T.observe(r, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (m = {
        get active() {
          return i.active;
        },
        get paused() {
          return i.paused;
        },
        activate: function (r) {
          if (i.active) return this;
          var n = h(r, 'onActivate'),
            s = h(r, 'onPostActivate'),
            g = h(r, 'checkCanFocusTrap');
          g || S(),
            (i.active = !0),
            (i.paused = !1),
            (i.nodeFocusedBeforeActivation = a.activeElement),
            n == null || n();
          var y = function () {
            g && S(), l(), E(), s == null || s();
          };
          return g ? (g(i.containers.concat()).then(y, y), this) : (y(), this);
        },
        deactivate: function (r) {
          if (!i.active) return this;
          var n = ue(
            {
              onDeactivate: d.onDeactivate,
              onPostDeactivate: d.onPostDeactivate,
              checkCanReturnFocus: d.checkCanReturnFocus,
            },
            r
          );
          clearTimeout(i.delayInitialFocusTimer),
            (i.delayInitialFocusTimer = void 0),
            p(),
            (i.active = !1),
            (i.paused = !1),
            E(),
            ce.deactivateTrap(u, m);
          var s = h(n, 'onDeactivate'),
            g = h(n, 'onPostDeactivate'),
            y = h(n, 'checkCanReturnFocus'),
            w = h(n, 'returnFocus', 'returnFocusOnDeactivate');
          s == null || s();
          var F = function () {
            se(function () {
              w && R(f(i.nodeFocusedBeforeActivation)), g == null || g();
            });
          };
          return w && y ? (y(f(i.nodeFocusedBeforeActivation)).then(F, F), this) : (F(), this);
        },
        pause: function (r) {
          if (i.paused || !i.active) return this;
          var n = h(r, 'onPause'),
            s = h(r, 'onPostPause');
          return (i.paused = !0), n == null || n(), p(), E(), s == null || s(), this;
        },
        unpause: function (r) {
          if (!i.paused || !i.active) return this;
          var n = h(r, 'onUnpause'),
            s = h(r, 'onPostUnpause');
          return (i.paused = !1), n == null || n(), S(), l(), E(), s == null || s(), this;
        },
        updateContainerElements: function (r) {
          var n = [].concat(r).filter(Boolean);
          return (
            (i.containers = n.map(function (s) {
              return typeof s == 'string' ? a.querySelector(s) : s;
            })),
            i.active && S(),
            E(),
            this
          );
        },
      }),
      m.updateContainerElements(e),
      m
    );
  };
const He = Object.freeze(
    Object.defineProperty({ __proto__: null, createFocusTrap: Qe }, Symbol.toStringTag, { value: 'Module' })
  ),
  et = de(He),
  tt = de($e);
var ae, fe;
function at() {
  if (fe) return ae;
  fe = 1;
  function o(v) {
    '@babel/helpers - typeof';
    return (
      (o =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (l) {
              return typeof l;
            }
          : function (l) {
              return l && typeof Symbol == 'function' && l.constructor === Symbol && l !== Symbol.prototype
                ? 'symbol'
                : typeof l;
            }),
      o(v)
    );
  }
  function e(v, l) {
    if (!(v instanceof l)) throw new TypeError('Cannot call a class as a function');
  }
  function t(v, l) {
    for (var p = 0; p < l.length; p++) {
      var c = l[p];
      (c.enumerable = c.enumerable || !1),
        (c.configurable = !0),
        'value' in c && (c.writable = !0),
        Object.defineProperty(v, S(c.key), c);
    }
  }
  function a(v, l, p) {
    return l && t(v.prototype, l), Object.defineProperty(v, 'prototype', { writable: !1 }), v;
  }
  function u(v, l, p) {
    return (l = h(l)), d(v, m() ? Reflect.construct(l, p || [], h(v).constructor) : l.apply(v, p));
  }
  function d(v, l) {
    if (l && (o(l) == 'object' || typeof l == 'function')) return l;
    if (l !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return i(v);
  }
  function i(v) {
    if (v === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return v;
  }
  function m() {
    try {
      var v = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch {}
    return (m = function () {
      return !!v;
    })();
  }
  function h(v) {
    return (
      (h = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (l) {
            return l.__proto__ || Object.getPrototypeOf(l);
          }),
      h(v)
    );
  }
  function O(v, l) {
    if (typeof l != 'function' && l !== null) throw new TypeError('Super expression must either be null or a function');
    (v.prototype = Object.create(l && l.prototype, { constructor: { value: v, writable: !0, configurable: !0 } })),
      Object.defineProperty(v, 'prototype', { writable: !1 }),
      l && k(v, l);
  }
  function k(v, l) {
    return (
      (k = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (p, c) {
            return (p.__proto__ = c), p;
          }),
      k(v, l)
    );
  }
  function D(v, l, p) {
    return (
      (l = S(l)) in v
        ? Object.defineProperty(v, l, { value: p, enumerable: !0, configurable: !0, writable: !0 })
        : (v[l] = p),
      v
    );
  }
  function S(v) {
    var l = j(v, 'string');
    return o(l) == 'symbol' ? l : l + '';
  }
  function j(v, l) {
    if (o(v) != 'object' || !v) return v;
    var p = v[Symbol.toPrimitive];
    if (p !== void 0) {
      var c = p.call(v, l);
      if (o(c) != 'object') return c;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (l === 'string' ? String : Number)(v);
  }
  var R = we(),
    f = Oe(),
    z = et,
    M = z.createFocusTrap,
    W = tt,
    H = W.isFocusable,
    q = (function (v) {
      function l(p) {
        var c;
        e(this, l),
          (c = u(this, l, [p])),
          D(c, 'getNodeForOption', function (b) {
            var r,
              n = (r = this.internalOptions[b]) !== null && r !== void 0 ? r : this.originalOptions[b];
            if (typeof n == 'function') {
              for (var s = arguments.length, g = new Array(s > 1 ? s - 1 : 0), y = 1; y < s; y++)
                g[y - 1] = arguments[y];
              n = n.apply(void 0, g);
            }
            if ((n === !0 && (n = void 0), !n)) {
              if (n === void 0 || n === !1) return n;
              throw new Error('`'.concat(b, '` was specified but was not a node, or did not return a node'));
            }
            var w = n;
            if (typeof n == 'string') {
              var F;
              if (((w = (F = this.getDocument()) === null || F === void 0 ? void 0 : F.querySelector(n)), !w))
                throw new Error('`'.concat(b, '` as selector refers to no known node'));
            }
            return w;
          }),
          (c.handleDeactivate = c.handleDeactivate.bind(c)),
          (c.handlePostDeactivate = c.handlePostDeactivate.bind(c)),
          (c.handleClickOutsideDeactivates = c.handleClickOutsideDeactivates.bind(c)),
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
        var T = p.focusTrapOptions;
        for (var E in T)
          if (Object.prototype.hasOwnProperty.call(T, E)) {
            if (
              E === 'returnFocusOnDeactivate' ||
              E === 'onDeactivate' ||
              E === 'onPostDeactivate' ||
              E === 'checkCanReturnFocus' ||
              E === 'clickOutsideDeactivates'
            ) {
              c.originalOptions[E] = T[E];
              continue;
            }
            c.internalOptions[E] = T[E];
          }
        return (c.outsideClick = null), (c.focusTrapElements = p.containerElements || []), c.updatePreviousElement(), c;
      }
      return (
        O(l, v),
        a(l, [
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
              var T =
                typeof this.originalOptions.clickOutsideDeactivates == 'function'
                  ? this.originalOptions.clickOutsideDeactivates.call(null, c)
                  : this.originalOptions.clickOutsideDeactivates;
              return T && (this.outsideClick = { target: c.target, allowDeactivation: T }), T;
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
                T = function () {
                  var b = c.getReturnFocusNode(),
                    r = !!(
                      c.originalOptions.returnFocusOnDeactivate &&
                      b !== null &&
                      b !== void 0 &&
                      b.focus &&
                      (!c.outsideClick ||
                        (c.outsideClick.allowDeactivation &&
                          !H(c.outsideClick.target, c.internalOptions.tabbableOptions)))
                    ),
                    n = c.internalOptions.preventScroll,
                    s = n === void 0 ? !1 : n;
                  r && b.focus({ preventScroll: s }),
                    c.originalOptions.onPostDeactivate && c.originalOptions.onPostDeactivate.call(null),
                    (c.outsideClick = null);
                };
              this.originalOptions.checkCanReturnFocus
                ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(T, T)
                : T();
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
                var T = !c.active && this.props.active,
                  E = c.active && !this.props.active,
                  b = !c.paused && this.props.paused,
                  r = c.paused && !this.props.paused;
                if ((T && (this.updatePreviousElement(), this.focusTrap.activate()), E)) {
                  this.deactivateTrap();
                  return;
                }
                b && this.focusTrap.pause(), r && this.focusTrap.unpause();
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
                T = this.props.children ? R.Children.only(this.props.children) : void 0;
              if (T) {
                if (T.type && T.type === R.Fragment)
                  throw new Error(
                    'A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.'
                  );
                var E = function (n) {
                    var s = c.props.containerElements;
                    T && (typeof T.ref == 'function' ? T.ref(n) : T.ref && (T.ref.current = n)),
                      (c.focusTrapElements = s || [n]);
                  },
                  b = R.cloneElement(T, { ref: E });
                return b;
              }
              return null;
            },
          },
        ])
      );
    })(R.Component),
    x = typeof Element > 'u' ? Function : Element;
  return (
    (q.propTypes = {
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
        initialFocus: f.oneOfType([f.instanceOf(x), f.string, f.bool, f.func]),
        fallbackFocus: f.oneOfType([f.instanceOf(x), f.string, f.func]),
        escapeDeactivates: f.oneOfType([f.bool, f.func]),
        clickOutsideDeactivates: f.oneOfType([f.bool, f.func]),
        returnFocusOnDeactivate: f.bool,
        setReturnFocus: f.oneOfType([f.instanceOf(x), f.string, f.bool, f.func]),
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
      containerElements: f.arrayOf(f.instanceOf(x)),
      children: f.oneOfType([f.element, f.instanceOf(x)]),
    }),
    (q.defaultProps = { active: !0, paused: !1, focusTrapOptions: {}, _createFocusTrap: M }),
    (ae = q),
    ae
  );
}
var nt = at();
const rt = Fe(nt),
  ut = ({
    id: o,
    title: e,
    primaryBtnProps: t,
    secondaryBtnProps: a,
    linkBtnProps: u,
    hasSecondaryBtn: d,
    hasLinkBtn: i,
    children: m,
    hasFooter: h,
    open: O,
    onClose: k,
  }) => {
    const D = Ee.useRef(null),
      S = O ? { 'aria-labelledby': `${o}-description` } : {},
      j = (R) => {
        D.current && !D.current.contains(R.target) && k();
      };
    return P.jsx('div', {
      className: 'gnb-modal left',
      id: o + crypto.randomUUID(),
      role: 'dialog',
      'aria-modal': 'true',
      'aria-hidden': !O,
      ...S,
      onClick: j,
      children:
        O &&
        P.jsx(rt, {
          focusTrapOptions: { clickOutsideDeactivates: !0, initialFocus: !1 },
          children: P.jsxs('dialog', {
            ref: D,
            children: [
              P.jsxs('button', {
                className: 'gnb-btn-close',
                onClick: k,
                children: [
                  P.jsx('span', { className: 'sr-only', children: 'Close modal window' }),
                  P.jsx(De, { icon: ke }),
                ],
              }),
              P.jsx('div', { className: 'gnb-modal-header', children: P.jsx('h2', { id: `${o}-title`, children: e }) }),
              P.jsx('div', { className: 'gnb-modal-body', id: `${o}-description`, children: m }),
              h &&
                P.jsx(Ne, {
                  primaryButtonLabel: t == null ? void 0 : t.label,
                  secondaryButtonLabel: a == null ? void 0 : a.label,
                  linkButtonLabel: u == null ? void 0 : u.label,
                  disabledPrimaryBtn: t == null ? void 0 : t.disabled,
                  handlePrimaryClick: t == null ? void 0 : t.onClick,
                  handleSecondaryClick: a == null ? void 0 : a.onClick,
                  handleLinkButtonClick: u == null ? void 0 : u.onClick,
                  hasSecondaryBtn: d,
                  hasLinkBtn: i,
                  isModalFooter: !0,
                }),
            ],
          }),
        }),
    });
  };
export { ut as M };
