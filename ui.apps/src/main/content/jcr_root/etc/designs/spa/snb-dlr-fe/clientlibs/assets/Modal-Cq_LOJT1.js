import { q as de, s as we, t as Oe, o as Fe, r as Ee, j as A, w as De, x as ke } from './index-COkBmnQs.js';
import { B as Ne } from './ButtonGroup-CT8cUe_I.js';
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
  K = be
    ? function () {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  Z =
    !be && Element.prototype.getRootNode
      ? function (r) {
          var e;
          return r == null || (e = r.getRootNode) === null || e === void 0 ? void 0 : e.call(r);
        }
      : function (r) {
          return r == null ? void 0 : r.ownerDocument;
        },
  H = function r(e, t) {
    var a;
    t === void 0 && (t = !0);
    var u = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, 'inert'),
      d = u === '' || u === 'true',
      i = d || (t && e && r(e.parentNode));
    return i;
  },
  Se = function (e) {
    var t,
      a = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, 'contenteditable');
    return a === '' || a === 'true';
  },
  pe = function (e, t, a) {
    if (H(e)) return [];
    var u = Array.prototype.slice.apply(e.querySelectorAll(X));
    return t && K.call(e, X) && u.unshift(e), (u = u.filter(a)), u;
  },
  he = function r(e, t, a) {
    for (var u = [], d = Array.from(e); d.length; ) {
      var i = d.shift();
      if (!H(i, !1))
        if (i.tagName === 'SLOT') {
          var T = i.assignedElements(),
            m = T.length ? T : i.children,
            F = r(m, !0, a);
          a.flatten ? u.push.apply(u, F) : u.push({ scopeParent: i, candidates: F });
        } else {
          var k = K.call(i, X);
          k && a.filter(i) && (t || !e.includes(i)) && u.push(i);
          var D = i.shadowRoot || (typeof a.getShadowRoot == 'function' && a.getShadowRoot(i)),
            R = !H(D, !1) && (!a.shadowRootFilter || a.shadowRootFilter(i));
          if (D && R) {
            var j = r(D === !0 ? i.children : D.children, !0, a);
            a.flatten ? u.push.apply(u, j) : u.push({ scopeParent: i, candidates: j });
          } else d.unshift.apply(d, i.children);
        }
    }
    return u;
  },
  ye = function (e) {
    return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
  },
  x = function (e) {
    if (!e) throw new Error('No node provided');
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Se(e)) && !ye(e) ? 0 : e.tabIndex;
  },
  Ce = function (e, t) {
    var a = x(e);
    return a < 0 && t && !ye(e) ? 0 : a;
  },
  Re = function (e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  },
  me = function (e) {
    return e.tagName === 'INPUT';
  },
  je = function (e) {
    return me(e) && e.type === 'hidden';
  },
  Ae = function (e) {
    var t =
      e.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(e.children).some(function (a) {
        return a.tagName === 'SUMMARY';
      });
    return t;
  },
  Pe = function (e, t) {
    for (var a = 0; a < e.length; a++) if (e[a].checked && e[a].form === t) return e[a];
  },
  Ie = function (e) {
    if (!e.name) return !0;
    var t = e.form || Z(e),
      a = function (T) {
        return t.querySelectorAll('input[type="radio"][name="' + T + '"]');
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
    var d = Pe(u, e.form);
    return !d || d === e;
  },
  xe = function (e) {
    return me(e) && e.type === 'radio';
  },
  _e = function (e) {
    return xe(e) && !Ie(e);
  },
  Le = function (e) {
    var t,
      a = e && Z(e),
      u = (t = a) === null || t === void 0 ? void 0 : t.host,
      d = !1;
    if (a && a !== e) {
      var i, T, m;
      for (
        d = !!(
          ((i = u) !== null && i !== void 0 && (T = i.ownerDocument) !== null && T !== void 0 && T.contains(u)) ||
          (e != null && (m = e.ownerDocument) !== null && m !== void 0 && m.contains(e))
        );
        !d && u;

      ) {
        var F, k, D;
        (a = Z(u)),
          (u = (F = a) === null || F === void 0 ? void 0 : F.host),
          (d = !!((k = u) !== null && k !== void 0 && (D = k.ownerDocument) !== null && D !== void 0 && D.contains(u)));
      }
    }
    return d;
  },
  oe = function (e) {
    var t = e.getBoundingClientRect(),
      a = t.width,
      u = t.height;
    return a === 0 && u === 0;
  },
  Ke = function (e, t) {
    var a = t.displayCheck,
      u = t.getShadowRoot;
    if (getComputedStyle(e).visibility === 'hidden') return !0;
    var d = K.call(e, 'details>summary:first-of-type'),
      i = d ? e.parentElement : e;
    if (K.call(i, 'details:not([open]) *')) return !0;
    if (!a || a === 'full' || a === 'legacy-full') {
      if (typeof u == 'function') {
        for (var T = e; e; ) {
          var m = e.parentElement,
            F = Z(e);
          if (m && !m.shadowRoot && u(m) === !0) return oe(e);
          e.assignedSlot ? (e = e.assignedSlot) : !m && F !== e.ownerDocument ? (e = F.host) : (e = m);
        }
        e = T;
      }
      if (Le(e)) return !e.getClientRects().length;
      if (a !== 'legacy-full') return !0;
    } else if (a === 'non-zero-area') return oe(e);
    return !1;
  },
  Me = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t; ) {
        if (t.tagName === 'FIELDSET' && t.disabled) {
          for (var a = 0; a < t.children.length; a++) {
            var u = t.children.item(a);
            if (u.tagName === 'LEGEND') return K.call(t, 'fieldset[disabled] *') ? !0 : !u.contains(e);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  J = function (e, t) {
    return !(t.disabled || H(t) || je(t) || Ke(t, e) || Ae(t) || Me(t));
  },
  re = function (e, t) {
    return !(_e(t) || x(t) < 0 || !J(e, t));
  },
  qe = function (e) {
    var t = parseInt(e.getAttribute('tabindex'), 10);
    return !!(isNaN(t) || t >= 0);
  },
  Ue = function r(e) {
    var t = [],
      a = [];
    return (
      e.forEach(function (u, d) {
        var i = !!u.scopeParent,
          T = i ? u.scopeParent : u,
          m = Ce(T, i),
          F = i ? r(u.candidates) : T;
        m === 0
          ? i
            ? t.push.apply(t, F)
            : t.push(T)
          : a.push({ documentOrder: d, tabIndex: m, item: u, isScope: i, content: F });
      }),
      a
        .sort(Re)
        .reduce(function (u, d) {
          return d.isScope ? u.push.apply(u, d.content) : u.push(d.content), u;
        }, [])
        .concat(t)
    );
  },
  ge = function (e, t) {
    t = t || {};
    var a;
    return (
      t.getShadowRoot
        ? (a = he([e], t.includeContainer, {
            filter: re.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: qe,
          }))
        : (a = pe(e, t.includeContainer, re.bind(null, t))),
      Ue(a)
    );
  },
  Te = function (e, t) {
    t = t || {};
    var a;
    return (
      t.getShadowRoot
        ? (a = he([e], t.includeContainer, { filter: J.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot }))
        : (a = pe(e, t.includeContainer, J.bind(null, t))),
      a
    );
  },
  L = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return K.call(e, X) === !1 ? !1 : re(t, e);
  },
  $e = ve.concat('iframe').join(','),
  B = function (e, t) {
    if (((t = t || {}), !e)) throw new Error('No node provided');
    return K.call(e, $e) === !1 ? !1 : J(t, e);
  };
const Ge = Object.freeze(
  Object.defineProperty(
    { __proto__: null, focusable: Te, getTabIndex: x, isFocusable: B, isTabbable: L, tabbable: ge },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
/*!
 * focus-trap 7.6.5
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function ne(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, a = Array(e); t < e; t++) a[t] = r[t];
  return a;
}
function Ve(r) {
  if (Array.isArray(r)) return ne(r);
}
function ze(r, e, t) {
  return (
    (e = Ze(e)) in r
      ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (r[e] = t),
    r
  );
}
function We(r) {
  if ((typeof Symbol < 'u' && r[Symbol.iterator] != null) || r['@@iterator'] != null) return Array.from(r);
}
function Ye() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ue(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    e &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(r, u).enumerable;
      })),
      t.push.apply(t, a);
  }
  return t;
}
function ce(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ue(Object(t), !0).forEach(function (a) {
          ze(r, a, t[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
      : ue(Object(t)).forEach(function (a) {
          Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(t, a));
        });
  }
  return r;
}
function Be(r) {
  return Ve(r) || We(r) || He(r) || Ye();
}
function Xe(r, e) {
  if (typeof r != 'object' || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(r, e);
    if (typeof a != 'object') return a;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(r);
}
function Ze(r) {
  var e = Xe(r, 'string');
  return typeof e == 'symbol' ? e : e + '';
}
function He(r, e) {
  if (r) {
    if (typeof r == 'string') return ne(r, e);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      t === 'Object' && r.constructor && (t = r.constructor.name),
      t === 'Map' || t === 'Set'
        ? Array.from(r)
        : t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? ne(r, e)
        : void 0
    );
  }
}
var se = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var a = e[e.length - 1];
        a !== t && a._setPausedState(!0);
      }
      var u = e.indexOf(t);
      u === -1 || e.splice(u, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var a = e.indexOf(t);
      a !== -1 && e.splice(a, 1),
        e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1);
    },
  },
  Je = function (e) {
    return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
  },
  Qe = function (e) {
    return (
      (e == null ? void 0 : e.key) === 'Escape' ||
      (e == null ? void 0 : e.key) === 'Esc' ||
      (e == null ? void 0 : e.keyCode) === 27
    );
  },
  V = function (e) {
    return (e == null ? void 0 : e.key) === 'Tab' || (e == null ? void 0 : e.keyCode) === 9;
  },
  et = function (e) {
    return V(e) && !e.shiftKey;
  },
  tt = function (e) {
    return V(e) && e.shiftKey;
  },
  le = function (e) {
    return setTimeout(e, 0);
  },
  G = function (e) {
    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) a[u - 1] = arguments[u];
    return typeof e == 'function' ? e.apply(void 0, a) : e;
  },
  Y = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == 'function' ? e.composedPath()[0] : e.target;
  },
  at = [],
  rt = function (e, t) {
    var a = (t == null ? void 0 : t.document) || document,
      u = (t == null ? void 0 : t.trapStack) || at,
      d = ce(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: et,
          isKeyBackward: tt,
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
        manuallyPaused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0,
      },
      T,
      m = function (n, o, l) {
        return n && n[o] !== void 0 ? n[o] : d[l || o];
      },
      F = function (n, o) {
        var l = typeof (o == null ? void 0 : o.composedPath) == 'function' ? o.composedPath() : void 0;
        return i.containerGroups.findIndex(function (g) {
          var y = g.container,
            O = g.tabbableNodes;
          return (
            y.contains(n) ||
            (l == null ? void 0 : l.includes(y)) ||
            O.find(function (p) {
              return p === n;
            })
          );
        });
      },
      k = function (n) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          l = o.hasFallback,
          g = l === void 0 ? !1 : l,
          y = o.params,
          O = y === void 0 ? [] : y,
          p = d[n];
        if ((typeof p == 'function' && (p = p.apply(void 0, Be(O))), p === !0 && (p = void 0), !p)) {
          if (p === void 0 || p === !1) return p;
          throw new Error('`'.concat(n, '` was specified but was not a node, or did not return a node'));
        }
        var N = p;
        if (typeof p == 'string') {
          try {
            N = a.querySelector(p);
          } catch (S) {
            throw new Error('`'.concat(n, '` appears to be an invalid selector; error="').concat(S.message, '"'));
          }
          if (!N && !g) throw new Error('`'.concat(n, '` as selector refers to no known node'));
        }
        return N;
      },
      D = function () {
        var n = k('initialFocus', { hasFallback: !0 });
        if (n === !1) return !1;
        if (n === void 0 || (n && !B(n, d.tabbableOptions)))
          if (F(a.activeElement) >= 0) n = a.activeElement;
          else {
            var o = i.tabbableGroups[0],
              l = o && o.firstTabbableNode;
            n = l || k('fallbackFocus');
          }
        else n === null && (n = k('fallbackFocus'));
        if (!n) throw new Error('Your focus-trap needs to have at least one focusable element');
        return n;
      },
      R = function () {
        if (
          ((i.containerGroups = i.containers.map(function (n) {
            var o = ge(n, d.tabbableOptions),
              l = Te(n, d.tabbableOptions),
              g = o.length > 0 ? o[0] : void 0,
              y = o.length > 0 ? o[o.length - 1] : void 0,
              O = l.find(function (S) {
                return L(S);
              }),
              p = l
                .slice()
                .reverse()
                .find(function (S) {
                  return L(S);
                }),
              N = !!o.find(function (S) {
                return x(S) > 0;
              });
            return {
              container: n,
              tabbableNodes: o,
              focusableNodes: l,
              posTabIndexesFound: N,
              firstTabbableNode: g,
              lastTabbableNode: y,
              firstDomTabbableNode: O,
              lastDomTabbableNode: p,
              nextTabbableNode: function (_) {
                var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                  I = o.indexOf(_);
                return I < 0
                  ? U
                    ? l.slice(l.indexOf(_) + 1).find(function ($) {
                        return L($);
                      })
                    : l
                        .slice(0, l.indexOf(_))
                        .reverse()
                        .find(function ($) {
                          return L($);
                        })
                  : o[I + (U ? 1 : -1)];
              },
            };
          })),
          (i.tabbableGroups = i.containerGroups.filter(function (n) {
            return n.tabbableNodes.length > 0;
          })),
          i.tabbableGroups.length <= 0 && !k('fallbackFocus'))
        )
          throw new Error(
            'Your focus-trap must have at least one container with at least one tabbable node in it at all times'
          );
        if (
          i.containerGroups.find(function (n) {
            return n.posTabIndexesFound;
          }) &&
          i.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
          );
      },
      j = function (n) {
        var o = n.activeElement;
        if (o) return o.shadowRoot && o.shadowRoot.activeElement !== null ? j(o.shadowRoot) : o;
      },
      C = function (n) {
        if (n !== !1 && n !== j(document)) {
          if (!n || !n.focus) {
            C(D());
            return;
          }
          n.focus({ preventScroll: !!d.preventScroll }), (i.mostRecentlyFocusedNode = n), Je(n) && n.select();
        }
      },
      f = function (n) {
        var o = k('setReturnFocus', { params: [n] });
        return o || (o === !1 ? !1 : n);
      },
      z = function (n) {
        var o = n.target,
          l = n.event,
          g = n.isBackward,
          y = g === void 0 ? !1 : g;
        (o = o || Y(l)), R();
        var O = null;
        if (i.tabbableGroups.length > 0) {
          var p = F(o, l),
            N = p >= 0 ? i.containerGroups[p] : void 0;
          if (p < 0)
            y
              ? (O = i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode)
              : (O = i.tabbableGroups[0].firstTabbableNode);
          else if (y) {
            var S = i.tabbableGroups.findIndex(function (ee) {
              var te = ee.firstTabbableNode;
              return o === te;
            });
            if (
              (S < 0 &&
                (N.container === o ||
                  (B(o, d.tabbableOptions) && !L(o, d.tabbableOptions) && !N.nextTabbableNode(o, !1))) &&
                (S = p),
              S >= 0)
            ) {
              var _ = S === 0 ? i.tabbableGroups.length - 1 : S - 1,
                U = i.tabbableGroups[_];
              O = x(o) >= 0 ? U.lastTabbableNode : U.lastDomTabbableNode;
            } else V(l) || (O = N.nextTabbableNode(o, !1));
          } else {
            var I = i.tabbableGroups.findIndex(function (ee) {
              var te = ee.lastTabbableNode;
              return o === te;
            });
            if (
              (I < 0 &&
                (N.container === o ||
                  (B(o, d.tabbableOptions) && !L(o, d.tabbableOptions) && !N.nextTabbableNode(o))) &&
                (I = p),
              I >= 0)
            ) {
              var $ = I === i.tabbableGroups.length - 1 ? 0 : I + 1,
                ie = i.tabbableGroups[$];
              O = x(o) >= 0 ? ie.firstTabbableNode : ie.firstDomTabbableNode;
            } else V(l) || (O = N.nextTabbableNode(o));
          }
        } else O = k('fallbackFocus');
        return O;
      },
      M = function (n) {
        var o = Y(n);
        if (!(F(o, n) >= 0)) {
          if (G(d.clickOutsideDeactivates, n)) {
            T.deactivate({ returnFocus: d.returnFocusOnDeactivate });
            return;
          }
          G(d.allowOutsideClick, n) || n.preventDefault();
        }
      },
      W = function (n) {
        var o = Y(n),
          l = F(o, n) >= 0;
        if (l || o instanceof Document) l && (i.mostRecentlyFocusedNode = o);
        else {
          n.stopImmediatePropagation();
          var g,
            y = !0;
          if (i.mostRecentlyFocusedNode)
            if (x(i.mostRecentlyFocusedNode) > 0) {
              var O = F(i.mostRecentlyFocusedNode),
                p = i.containerGroups[O].tabbableNodes;
              if (p.length > 0) {
                var N = p.findIndex(function (S) {
                  return S === i.mostRecentlyFocusedNode;
                });
                N >= 0 &&
                  (d.isKeyForward(i.recentNavEvent)
                    ? N + 1 < p.length && ((g = p[N + 1]), (y = !1))
                    : N - 1 >= 0 && ((g = p[N - 1]), (y = !1)));
              }
            } else
              i.containerGroups.some(function (S) {
                return S.tabbableNodes.some(function (_) {
                  return x(_) > 0;
                });
              }) || (y = !1);
          else y = !1;
          y && (g = z({ target: i.mostRecentlyFocusedNode, isBackward: d.isKeyBackward(i.recentNavEvent) })),
            C(g || i.mostRecentlyFocusedNode || D());
        }
        i.recentNavEvent = void 0;
      },
      Q = function (n) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        i.recentNavEvent = n;
        var l = z({ event: n, isBackward: o });
        l && (V(n) && n.preventDefault(), C(l));
      },
      q = function (n) {
        (d.isKeyForward(n) || d.isKeyBackward(n)) && Q(n, d.isKeyBackward(n));
      },
      P = function (n) {
        Qe(n) && G(d.escapeDeactivates, n) !== !1 && (n.preventDefault(), T.deactivate());
      },
      v = function (n) {
        var o = Y(n);
        F(o, n) >= 0 ||
          G(d.clickOutsideDeactivates, n) ||
          G(d.allowOutsideClick, n) ||
          (n.preventDefault(), n.stopImmediatePropagation());
      },
      s = function () {
        if (i.active)
          return (
            se.activateTrap(u, T),
            (i.delayInitialFocusTimer = d.delayInitialFocus
              ? le(function () {
                  C(D());
                })
              : C(D())),
            a.addEventListener('focusin', W, !0),
            a.addEventListener('mousedown', M, { capture: !0, passive: !1 }),
            a.addEventListener('touchstart', M, { capture: !0, passive: !1 }),
            a.addEventListener('click', v, { capture: !0, passive: !1 }),
            a.addEventListener('keydown', q, { capture: !0, passive: !1 }),
            a.addEventListener('keydown', P),
            T
          );
      },
      h = function () {
        if (i.active)
          return (
            a.removeEventListener('focusin', W, !0),
            a.removeEventListener('mousedown', M, !0),
            a.removeEventListener('touchstart', M, !0),
            a.removeEventListener('click', v, !0),
            a.removeEventListener('keydown', q, !0),
            a.removeEventListener('keydown', P),
            T
          );
      },
      c = function (n) {
        var o = n.some(function (l) {
          var g = Array.from(l.removedNodes);
          return g.some(function (y) {
            return y === i.mostRecentlyFocusedNode;
          });
        });
        o && C(D());
      },
      w = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(c) : void 0,
      E = function () {
        w &&
          (w.disconnect(),
          i.active &&
            !i.paused &&
            i.containers.map(function (n) {
              w.observe(n, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (T = {
        get active() {
          return i.active;
        },
        get paused() {
          return i.paused;
        },
        activate: function (n) {
          if (i.active) return this;
          var o = m(n, 'onActivate'),
            l = m(n, 'onPostActivate'),
            g = m(n, 'checkCanFocusTrap');
          g || R(), (i.active = !0), (i.paused = !1), (i.nodeFocusedBeforeActivation = j(a)), o == null || o();
          var y = function () {
            g && R(), s(), E(), l == null || l();
          };
          return g ? (g(i.containers.concat()).then(y, y), this) : (y(), this);
        },
        deactivate: function (n) {
          if (!i.active) return this;
          var o = ce(
            {
              onDeactivate: d.onDeactivate,
              onPostDeactivate: d.onPostDeactivate,
              checkCanReturnFocus: d.checkCanReturnFocus,
            },
            n
          );
          clearTimeout(i.delayInitialFocusTimer),
            (i.delayInitialFocusTimer = void 0),
            h(),
            (i.active = !1),
            (i.paused = !1),
            E(),
            se.deactivateTrap(u, T);
          var l = m(o, 'onDeactivate'),
            g = m(o, 'onPostDeactivate'),
            y = m(o, 'checkCanReturnFocus'),
            O = m(o, 'returnFocus', 'returnFocusOnDeactivate');
          l == null || l();
          var p = function () {
            le(function () {
              O && C(f(i.nodeFocusedBeforeActivation)), g == null || g();
            });
          };
          return O && y ? (y(f(i.nodeFocusedBeforeActivation)).then(p, p), this) : (p(), this);
        },
        pause: function (n) {
          return i.active ? ((i.manuallyPaused = !0), this._setPausedState(!0, n)) : this;
        },
        unpause: function (n) {
          return i.active
            ? ((i.manuallyPaused = !1), u[u.length - 1] !== this ? this : this._setPausedState(!1, n))
            : this;
        },
        updateContainerElements: function (n) {
          var o = [].concat(n).filter(Boolean);
          return (
            (i.containers = o.map(function (l) {
              return typeof l == 'string' ? a.querySelector(l) : l;
            })),
            i.active && R(),
            E(),
            this
          );
        },
      }),
      Object.defineProperties(T, {
        _isManuallyPaused: {
          value: function () {
            return i.manuallyPaused;
          },
        },
        _setPausedState: {
          value: function (n, o) {
            if (i.paused === n) return this;
            if (((i.paused = n), n)) {
              var l = m(o, 'onPause'),
                g = m(o, 'onPostPause');
              l == null || l(), h(), E(), g == null || g();
            } else {
              var y = m(o, 'onUnpause'),
                O = m(o, 'onPostUnpause');
              y == null || y(), R(), s(), E(), O == null || O();
            }
            return this;
          },
        },
      }),
      T.updateContainerElements(e),
      T
    );
  };
const nt = Object.freeze(
    Object.defineProperty({ __proto__: null, createFocusTrap: rt }, Symbol.toStringTag, { value: 'Module' })
  ),
  it = de(nt),
  ot = de(Ge);
var ae, fe;
function ut() {
  if (fe) return ae;
  fe = 1;
  function r(v) {
    '@babel/helpers - typeof';
    return (
      (r =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (s) {
              return typeof s;
            }
          : function (s) {
              return s && typeof Symbol == 'function' && s.constructor === Symbol && s !== Symbol.prototype
                ? 'symbol'
                : typeof s;
            }),
      r(v)
    );
  }
  function e(v, s) {
    if (!(v instanceof s)) throw new TypeError('Cannot call a class as a function');
  }
  function t(v, s) {
    for (var h = 0; h < s.length; h++) {
      var c = s[h];
      (c.enumerable = c.enumerable || !1),
        (c.configurable = !0),
        'value' in c && (c.writable = !0),
        Object.defineProperty(v, R(c.key), c);
    }
  }
  function a(v, s, h) {
    return s && t(v.prototype, s), Object.defineProperty(v, 'prototype', { writable: !1 }), v;
  }
  function u(v, s, h) {
    return (s = m(s)), d(v, T() ? Reflect.construct(s, h || [], m(v).constructor) : s.apply(v, h));
  }
  function d(v, s) {
    if (s && (r(s) == 'object' || typeof s == 'function')) return s;
    if (s !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return i(v);
  }
  function i(v) {
    if (v === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return v;
  }
  function T() {
    try {
      var v = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch {}
    return (T = function () {
      return !!v;
    })();
  }
  function m(v) {
    return (
      (m = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (s) {
            return s.__proto__ || Object.getPrototypeOf(s);
          }),
      m(v)
    );
  }
  function F(v, s) {
    if (typeof s != 'function' && s !== null) throw new TypeError('Super expression must either be null or a function');
    (v.prototype = Object.create(s && s.prototype, { constructor: { value: v, writable: !0, configurable: !0 } })),
      Object.defineProperty(v, 'prototype', { writable: !1 }),
      s && k(v, s);
  }
  function k(v, s) {
    return (
      (k = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (h, c) {
            return (h.__proto__ = c), h;
          }),
      k(v, s)
    );
  }
  function D(v, s, h) {
    return (
      (s = R(s)) in v
        ? Object.defineProperty(v, s, { value: h, enumerable: !0, configurable: !0, writable: !0 })
        : (v[s] = h),
      v
    );
  }
  function R(v) {
    var s = j(v, 'string');
    return r(s) == 'symbol' ? s : s + '';
  }
  function j(v, s) {
    if (r(v) != 'object' || !v) return v;
    var h = v[Symbol.toPrimitive];
    if (h !== void 0) {
      var c = h.call(v, s);
      if (r(c) != 'object') return c;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (s === 'string' ? String : Number)(v);
  }
  var C = we(),
    f = Oe(),
    z = it,
    M = z.createFocusTrap,
    W = ot,
    Q = W.isFocusable,
    q = (function (v) {
      function s(h) {
        var c;
        e(this, s),
          (c = u(this, s, [h])),
          D(c, 'getNodeForOption', function (b) {
            var n,
              o = (n = this.internalOptions[b]) !== null && n !== void 0 ? n : this.originalOptions[b];
            if (typeof o == 'function') {
              for (var l = arguments.length, g = new Array(l > 1 ? l - 1 : 0), y = 1; y < l; y++)
                g[y - 1] = arguments[y];
              o = o.apply(void 0, g);
            }
            if ((o === !0 && (o = void 0), !o)) {
              if (o === void 0 || o === !1) return o;
              throw new Error('`'.concat(b, '` was specified but was not a node, or did not return a node'));
            }
            var O = o;
            if (typeof o == 'string') {
              var p;
              if (((O = (p = this.getDocument()) === null || p === void 0 ? void 0 : p.querySelector(o)), !O))
                throw new Error('`'.concat(b, '` as selector refers to no known node'));
            }
            return O;
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
        var w = h.focusTrapOptions;
        for (var E in w)
          if (Object.prototype.hasOwnProperty.call(w, E)) {
            if (
              E === 'returnFocusOnDeactivate' ||
              E === 'onDeactivate' ||
              E === 'onPostDeactivate' ||
              E === 'checkCanReturnFocus' ||
              E === 'clickOutsideDeactivates'
            ) {
              c.originalOptions[E] = w[E];
              continue;
            }
            c.internalOptions[E] = w[E];
          }
        return (c.outsideClick = null), (c.focusTrapElements = h.containerElements || []), c.updatePreviousElement(), c;
      }
      return (
        F(s, v),
        a(s, [
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
              var w =
                typeof this.originalOptions.clickOutsideDeactivates == 'function'
                  ? this.originalOptions.clickOutsideDeactivates.call(null, c)
                  : this.originalOptions.clickOutsideDeactivates;
              return w && (this.outsideClick = { target: c.target, allowDeactivation: w }), w;
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
                w = function () {
                  var b = c.getReturnFocusNode(),
                    n = !!(
                      c.originalOptions.returnFocusOnDeactivate &&
                      b !== null &&
                      b !== void 0 &&
                      b.focus &&
                      (!c.outsideClick ||
                        (c.outsideClick.allowDeactivation &&
                          !Q(c.outsideClick.target, c.internalOptions.tabbableOptions)))
                    ),
                    o = c.internalOptions.preventScroll,
                    l = o === void 0 ? !1 : o;
                  n && b.focus({ preventScroll: l }),
                    c.originalOptions.onPostDeactivate && c.originalOptions.onPostDeactivate.call(null),
                    (c.outsideClick = null);
                };
              this.originalOptions.checkCanReturnFocus
                ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(w, w)
                : w();
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
                var w = !c.active && this.props.active,
                  E = c.active && !this.props.active,
                  b = !c.paused && this.props.paused,
                  n = c.paused && !this.props.paused;
                if ((w && (this.updatePreviousElement(), this.focusTrap.activate()), E)) {
                  this.deactivateTrap();
                  return;
                }
                b && this.focusTrap.pause(), n && this.focusTrap.unpause();
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
                w = this.props.children ? C.Children.only(this.props.children) : void 0;
              if (w) {
                if (w.type && w.type === C.Fragment)
                  throw new Error(
                    'A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.'
                  );
                var E = function (o) {
                    var l = c.props.containerElements;
                    w && (typeof w.ref == 'function' ? w.ref(o) : w.ref && (w.ref.current = o)),
                      (c.focusTrapElements = l || [o]);
                  },
                  b = C.cloneElement(w, { ref: E });
                return b;
              }
              return null;
            },
          },
        ])
      );
    })(C.Component),
    P = typeof Element > 'u' ? Function : Element;
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
    (q.defaultProps = { active: !0, paused: !1, focusTrapOptions: {}, _createFocusTrap: M }),
    (ae = q),
    ae
  );
}
var ct = ut();
const st = Fe(ct),
  dt = ({
    id: r,
    title: e,
    primaryBtnProps: t,
    secondaryBtnProps: a,
    linkBtnProps: u,
    hasSecondaryBtn: d,
    hasLinkBtn: i,
    children: T,
    hasFooter: m,
    open: F,
    onClose: k,
  }) => {
    const D = Ee.useRef(null),
      R = F ? { 'aria-labelledby': `${r}-description` } : {},
      j = (C) => {
        D.current && !D.current.contains(C.target) && k();
      };
    return A.jsx('div', {
      className: 'gnb-modal left',
      id: r + crypto.randomUUID(),
      role: 'dialog',
      'aria-modal': 'true',
      'aria-hidden': !F,
      ...R,
      onClick: j,
      children:
        F &&
        A.jsx(st, {
          focusTrapOptions: { clickOutsideDeactivates: !0, initialFocus: !1 },
          children: A.jsxs('dialog', {
            ref: D,
            children: [
              A.jsxs('button', {
                className: 'gnb-btn-close',
                onClick: k,
                children: [
                  A.jsx('span', { className: 'sr-only', children: 'Close modal window' }),
                  A.jsx(De, { icon: ke }),
                ],
              }),
              A.jsx('div', { className: 'gnb-modal-header', children: A.jsx('h2', { id: `${r}-title`, children: e }) }),
              A.jsx('div', { className: 'gnb-modal-body', id: `${r}-description`, children: T }),
              m &&
                A.jsx(Ne, {
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
export { dt as M };
