import { r as E, j as d, n as w, o as W, A as G } from './index-CLFRBv6J.js';
import { E as V } from './Error-iRBmXgUC.js';
import { M as Z } from './Modal-BgDk8fPM.js';
const me = ({
    label: e,
    helpText: o,
    yearLabel: i,
    monthLabel: n,
    dayLabel: r,
    yearInputValue: s,
    monthInputValue: v,
    dayInputValue: x,
    isYearInputError: g,
    isMonthInputError: f,
    isDayInputError: l,
    dateInputError: c,
    tooltipTitle: a,
    tooltipBody: h,
    isTooltipModalOpen: u,
    handleTooltipClose: S,
    handleTooltipClick: j,
    handleIssuanceDateYearChange: N,
    handleIssuanceDateMonthChange: R,
    handleIssuanceDateDayChange: y,
    disabled: m,
  }) => {
    const t = g ? { 'aria-labelledby': 'year-error-id' } : {},
      _ = f ? { 'aria-labelledby': 'month-error-id' } : {},
      b = l ? { 'aria-labelledby': 'day-error-id' } : {};
    return (
      E.useEffect(() => {
        const L = ($) => {
          $.key === 'Escape' && S();
        };
        return (
          u && (window.addEventListener('keydown', L), document.body.classList.add('noscroll')),
          () => {
            window.removeEventListener('keydown', L);
          }
        );
      }, [u]),
      d.jsxs(d.Fragment, {
        children: [
          d.jsxs('fieldset', {
            className: 'gnb-date-field',
            children: [
              d.jsxs('legend', {
                children: [
                  !m &&
                    d.jsxs('a', {
                      href: '#',
                      tabIndex: 0,
                      'data-target': e,
                      'aria-haspopup': 'dialog',
                      'aria-controls': e,
                      className: 'modal-button info gnb-tooltip-link',
                      onClick: (L) => {
                        L.preventDefault(), j();
                      },
                      children: [e, d.jsx('span', { className: 'required', children: '*' })],
                    }),
                  m && d.jsxs(d.Fragment, { children: [e, d.jsx('span', { className: 'required', children: '*' })] }),
                ],
              }),
              d.jsx('div', { className: 'gnb-form-helper-text left', children: o }),
              d.jsxs('div', {
                className: 'gnb-form-input',
                children: [
                  d.jsxs('div', {
                    className: `gnb-label-input-pair padding-right-xs ${g ? 'error' : ''}`,
                    children: [
                      d.jsx('input', {
                        type: 'text',
                        name: 'year',
                        className: 'year',
                        id: 'year',
                        inputMode: 'numeric',
                        maxLength: 4,
                        value: s,
                        onChange: N,
                        ...t,
                        'aria-invalid': g,
                        disabled: m,
                      }),
                      d.jsx('label', { htmlFor: 'year', children: i }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: `gnb-label-input-pair padding-right-xs  ${f ? 'error' : ''}`,
                    children: [
                      d.jsx('input', {
                        type: 'text',
                        name: 'day',
                        className: 'month',
                        id: 'month',
                        inputMode: 'numeric',
                        maxLength: 2,
                        value: v,
                        onChange: R,
                        ..._,
                        'aria-invalid': f,
                        disabled: m,
                      }),
                      d.jsx('label', { htmlFor: 'month', children: n }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: `gnb-label-input-pair  ${l ? 'error' : ''}`,
                    children: [
                      d.jsx('input', {
                        type: 'text',
                        name: 'day',
                        className: 'day',
                        id: 'day',
                        inputMode: 'numeric',
                        maxLength: 2,
                        value: x,
                        onChange: y,
                        ...b,
                        'aria-invalid': l,
                        disabled: m,
                      }),
                      d.jsx('label', { htmlFor: 'day', children: r }),
                    ],
                  }),
                  c && d.jsx(V, { id: 'date-error-id', error: c }),
                ],
              }),
            ],
          }),
          u && d.jsx(Z, { id: 'tooltip-input-modal-date-form', title: a, open: u, onClose: S, children: h }),
        ],
      })
    );
  },
  ge = ({ bodyText: e, imgOneUrl: o, imgOneAltText: i, imgTwoUrl: n, imgTwoAltText: r }) =>
    d.jsxs('div', {
      children: [
        d.jsx('p', { children: e }),
        d.jsx('div', {
          className: 'container',
          children: d.jsxs('div', {
            className: 'row',
            children: [
              d.jsx('div', { className: 'col-lg-6 padding-bottom-md', children: d.jsx('img', { src: o, alt: i }) }),
              d.jsx('div', { className: 'col-lg-6', children: d.jsx('img', { src: n, alt: r }) }),
            ],
          }),
        }),
      ],
    });
var X = [
  'sitekey',
  'onChange',
  'theme',
  'type',
  'tabindex',
  'onExpired',
  'onErrored',
  'size',
  'stoken',
  'grecaptcha',
  'badge',
  'hl',
  'isolated',
];
function F() {
  return (
    (F = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }),
    F.apply(this, arguments)
  );
}
function J(e, o) {
  if (e == null) return {};
  var i = {},
    n = Object.keys(e),
    r,
    s;
  for (s = 0; s < n.length; s++) (r = n[s]), !(o.indexOf(r) >= 0) && (i[r] = e[r]);
  return i;
}
function C(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Q(e, o) {
  (e.prototype = Object.create(o.prototype)), (e.prototype.constructor = e), k(e, o);
}
function k(e, o) {
  return (
    (k = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    k(e, o)
  );
}
var P = (function (e) {
  Q(o, e);
  function o() {
    var n;
    return (
      (n = e.call(this) || this),
      (n.handleExpired = n.handleExpired.bind(C(n))),
      (n.handleErrored = n.handleErrored.bind(C(n))),
      (n.handleChange = n.handleChange.bind(C(n))),
      (n.handleRecaptchaRef = n.handleRecaptchaRef.bind(C(n))),
      n
    );
  }
  var i = o.prototype;
  return (
    (i.getCaptchaFunction = function (r) {
      return this.props.grecaptcha
        ? this.props.grecaptcha.enterprise
          ? this.props.grecaptcha.enterprise[r]
          : this.props.grecaptcha[r]
        : null;
    }),
    (i.getValue = function () {
      var r = this.getCaptchaFunction('getResponse');
      return r && this._widgetId !== void 0 ? r(this._widgetId) : null;
    }),
    (i.getWidgetId = function () {
      return this.props.grecaptcha && this._widgetId !== void 0 ? this._widgetId : null;
    }),
    (i.execute = function () {
      var r = this.getCaptchaFunction('execute');
      if (r && this._widgetId !== void 0) return r(this._widgetId);
      this._executeRequested = !0;
    }),
    (i.executeAsync = function () {
      var r = this;
      return new Promise(function (s, v) {
        (r.executionResolve = s), (r.executionReject = v), r.execute();
      });
    }),
    (i.reset = function () {
      var r = this.getCaptchaFunction('reset');
      r && this._widgetId !== void 0 && r(this._widgetId);
    }),
    (i.forceReset = function () {
      var r = this.getCaptchaFunction('reset');
      r && r();
    }),
    (i.handleExpired = function () {
      this.props.onExpired ? this.props.onExpired() : this.handleChange(null);
    }),
    (i.handleErrored = function () {
      this.props.onErrored && this.props.onErrored(),
        this.executionReject && (this.executionReject(), delete this.executionResolve, delete this.executionReject);
    }),
    (i.handleChange = function (r) {
      this.props.onChange && this.props.onChange(r),
        this.executionResolve && (this.executionResolve(r), delete this.executionReject, delete this.executionResolve);
    }),
    (i.explicitRender = function () {
      var r = this.getCaptchaFunction('render');
      if (r && this._widgetId === void 0) {
        var s = document.createElement('div');
        (this._widgetId = r(s, {
          sitekey: this.props.sitekey,
          callback: this.handleChange,
          theme: this.props.theme,
          type: this.props.type,
          tabindex: this.props.tabindex,
          'expired-callback': this.handleExpired,
          'error-callback': this.handleErrored,
          size: this.props.size,
          stoken: this.props.stoken,
          hl: this.props.hl,
          badge: this.props.badge,
          isolated: this.props.isolated,
        })),
          this.captcha.appendChild(s);
      }
      this._executeRequested &&
        this.props.grecaptcha &&
        this._widgetId !== void 0 &&
        ((this._executeRequested = !1), this.execute());
    }),
    (i.componentDidMount = function () {
      this.explicitRender();
    }),
    (i.componentDidUpdate = function () {
      this.explicitRender();
    }),
    (i.handleRecaptchaRef = function (r) {
      this.captcha = r;
    }),
    (i.render = function () {
      var r = this.props;
      r.sitekey,
        r.onChange,
        r.theme,
        r.type,
        r.tabindex,
        r.onExpired,
        r.onErrored,
        r.size,
        r.stoken,
        r.grecaptcha,
        r.badge,
        r.hl,
        r.isolated;
      var s = J(r, X);
      return E.createElement('div', F({}, s, { ref: this.handleRecaptchaRef }));
    }),
    o
  );
})(E.Component);
P.displayName = 'ReCAPTCHA';
P.propTypes = {
  sitekey: w.string.isRequired,
  onChange: w.func,
  grecaptcha: w.object,
  theme: w.oneOf(['dark', 'light']),
  type: w.oneOf(['image', 'audio']),
  tabindex: w.number,
  onExpired: w.func,
  onErrored: w.func,
  size: w.oneOf(['compact', 'normal', 'invisible']),
  stoken: w.string,
  hl: w.string,
  badge: w.oneOf(['bottomright', 'bottomleft', 'inline']),
  isolated: w.bool,
};
P.defaultProps = {
  onChange: function () {},
  theme: 'light',
  type: 'image',
  tabindex: 0,
  size: 'normal',
  badge: 'bottomright',
};
var I = { exports: {} },
  p = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z;
function Y() {
  if (z) return p;
  z = 1;
  var e = typeof Symbol == 'function' && Symbol.for,
    o = e ? Symbol.for('react.element') : 60103,
    i = e ? Symbol.for('react.portal') : 60106,
    n = e ? Symbol.for('react.fragment') : 60107,
    r = e ? Symbol.for('react.strict_mode') : 60108,
    s = e ? Symbol.for('react.profiler') : 60114,
    v = e ? Symbol.for('react.provider') : 60109,
    x = e ? Symbol.for('react.context') : 60110,
    g = e ? Symbol.for('react.async_mode') : 60111,
    f = e ? Symbol.for('react.concurrent_mode') : 60111,
    l = e ? Symbol.for('react.forward_ref') : 60112,
    c = e ? Symbol.for('react.suspense') : 60113,
    a = e ? Symbol.for('react.suspense_list') : 60120,
    h = e ? Symbol.for('react.memo') : 60115,
    u = e ? Symbol.for('react.lazy') : 60116,
    S = e ? Symbol.for('react.block') : 60121,
    j = e ? Symbol.for('react.fundamental') : 60117,
    N = e ? Symbol.for('react.responder') : 60118,
    R = e ? Symbol.for('react.scope') : 60119;
  function y(t) {
    if (typeof t == 'object' && t !== null) {
      var _ = t.$$typeof;
      switch (_) {
        case o:
          switch (((t = t.type), t)) {
            case g:
            case f:
            case n:
            case s:
            case r:
            case c:
              return t;
            default:
              switch (((t = t && t.$$typeof), t)) {
                case x:
                case l:
                case u:
                case h:
                case v:
                  return t;
                default:
                  return _;
              }
          }
        case i:
          return _;
      }
    }
  }
  function m(t) {
    return y(t) === f;
  }
  return (
    (p.AsyncMode = g),
    (p.ConcurrentMode = f),
    (p.ContextConsumer = x),
    (p.ContextProvider = v),
    (p.Element = o),
    (p.ForwardRef = l),
    (p.Fragment = n),
    (p.Lazy = u),
    (p.Memo = h),
    (p.Portal = i),
    (p.Profiler = s),
    (p.StrictMode = r),
    (p.Suspense = c),
    (p.isAsyncMode = function (t) {
      return m(t) || y(t) === g;
    }),
    (p.isConcurrentMode = m),
    (p.isContextConsumer = function (t) {
      return y(t) === x;
    }),
    (p.isContextProvider = function (t) {
      return y(t) === v;
    }),
    (p.isElement = function (t) {
      return typeof t == 'object' && t !== null && t.$$typeof === o;
    }),
    (p.isForwardRef = function (t) {
      return y(t) === l;
    }),
    (p.isFragment = function (t) {
      return y(t) === n;
    }),
    (p.isLazy = function (t) {
      return y(t) === u;
    }),
    (p.isMemo = function (t) {
      return y(t) === h;
    }),
    (p.isPortal = function (t) {
      return y(t) === i;
    }),
    (p.isProfiler = function (t) {
      return y(t) === s;
    }),
    (p.isStrictMode = function (t) {
      return y(t) === r;
    }),
    (p.isSuspense = function (t) {
      return y(t) === c;
    }),
    (p.isValidElementType = function (t) {
      return (
        typeof t == 'string' ||
        typeof t == 'function' ||
        t === n ||
        t === f ||
        t === s ||
        t === r ||
        t === c ||
        t === a ||
        (typeof t == 'object' &&
          t !== null &&
          (t.$$typeof === u ||
            t.$$typeof === h ||
            t.$$typeof === v ||
            t.$$typeof === x ||
            t.$$typeof === l ||
            t.$$typeof === j ||
            t.$$typeof === N ||
            t.$$typeof === R ||
            t.$$typeof === S))
      );
    }),
    (p.typeOf = y),
    p
  );
}
var H;
function ee() {
  return H || ((H = 1), (I.exports = Y())), I.exports;
}
var T, B;
function te() {
  if (B) return T;
  B = 1;
  var e = ee(),
    o = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    n = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    r = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    s = {};
  (s[e.ForwardRef] = n), (s[e.Memo] = r);
  function v(u) {
    return e.isMemo(u) ? r : s[u.$$typeof] || o;
  }
  var x = Object.defineProperty,
    g = Object.getOwnPropertyNames,
    f = Object.getOwnPropertySymbols,
    l = Object.getOwnPropertyDescriptor,
    c = Object.getPrototypeOf,
    a = Object.prototype;
  function h(u, S, j) {
    if (typeof S != 'string') {
      if (a) {
        var N = c(S);
        N && N !== a && h(u, N, j);
      }
      var R = g(S);
      f && (R = R.concat(f(S)));
      for (var y = v(u), m = v(S), t = 0; t < R.length; ++t) {
        var _ = R[t];
        if (!i[_] && !(j && j[_]) && !(m && m[_]) && !(y && y[_])) {
          var b = l(S, _);
          try {
            x(u, _, b);
          } catch {}
        }
      }
    }
    return u;
  }
  return (T = h), T;
}
var re = te();
const ne = W(re);
function D() {
  return (
    (D =
      Object.assign ||
      function (e) {
        for (var o = 1; o < arguments.length; o++) {
          var i = arguments[o];
          for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      }),
    D.apply(this, arguments)
  );
}
function oe(e, o) {
  if (e == null) return {};
  var i = {},
    n = Object.keys(e),
    r,
    s;
  for (s = 0; s < n.length; s++) (r = n[s]), !(o.indexOf(r) >= 0) && (i[r] = e[r]);
  return i;
}
function ie(e, o) {
  (e.prototype = Object.create(o.prototype)), (e.prototype.constructor = e), (e.__proto__ = o);
}
var O = {},
  ae = 0;
function ce(e, o) {
  return (
    (o = o || {}),
    function (n) {
      var r = n.displayName || n.name || 'Component',
        s = (function (x) {
          ie(g, x);
          function g(l, c) {
            var a;
            return (a = x.call(this, l, c) || this), (a.state = {}), (a.__scriptURL = ''), a;
          }
          var f = g.prototype;
          return (
            (f.asyncScriptLoaderGetScriptLoaderID = function () {
              return (
                this.__scriptLoaderID || (this.__scriptLoaderID = 'async-script-loader-' + ae++), this.__scriptLoaderID
              );
            }),
            (f.setupScriptURL = function () {
              return (this.__scriptURL = typeof e == 'function' ? e() : e), this.__scriptURL;
            }),
            (f.asyncScriptLoaderHandleLoad = function (c) {
              var a = this;
              this.setState(c, function () {
                return a.props.asyncScriptOnLoad && a.props.asyncScriptOnLoad(a.state);
              });
            }),
            (f.asyncScriptLoaderTriggerOnScriptLoaded = function () {
              var c = O[this.__scriptURL];
              if (!c || !c.loaded) throw new Error('Script is not loaded.');
              for (var a in c.observers) c.observers[a](c);
              delete window[o.callbackName];
            }),
            (f.componentDidMount = function () {
              var c = this,
                a = this.setupScriptURL(),
                h = this.asyncScriptLoaderGetScriptLoaderID(),
                u = o,
                S = u.globalName,
                j = u.callbackName,
                N = u.scriptId;
              if ((S && typeof window[S] < 'u' && (O[a] = { loaded: !0, observers: {} }), O[a])) {
                var R = O[a];
                if (R && (R.loaded || R.errored)) {
                  this.asyncScriptLoaderHandleLoad(R);
                  return;
                }
                R.observers[h] = function (b) {
                  return c.asyncScriptLoaderHandleLoad(b);
                };
                return;
              }
              var y = {};
              (y[h] = function (b) {
                return c.asyncScriptLoaderHandleLoad(b);
              }),
                (O[a] = { loaded: !1, observers: y });
              var m = document.createElement('script');
              (m.src = a), (m.async = !0);
              for (var t in o.attributes) m.setAttribute(t, o.attributes[t]);
              N && (m.id = N);
              var _ = function (L) {
                if (O[a]) {
                  var $ = O[a],
                    A = $.observers;
                  for (var q in A) L(A[q]) && delete A[q];
                }
              };
              j &&
                typeof window < 'u' &&
                (window[j] = function () {
                  return c.asyncScriptLoaderTriggerOnScriptLoaded();
                }),
                (m.onload = function () {
                  var b = O[a];
                  b &&
                    ((b.loaded = !0),
                    _(function (L) {
                      return j ? !1 : (L(b), !0);
                    }));
                }),
                (m.onerror = function () {
                  var b = O[a];
                  b &&
                    ((b.errored = !0),
                    _(function (L) {
                      return L(b), !0;
                    }));
                }),
                document.body.appendChild(m);
            }),
            (f.componentWillUnmount = function () {
              var c = this.__scriptURL;
              if (o.removeOnUnmount === !0)
                for (var a = document.getElementsByTagName('script'), h = 0; h < a.length; h += 1)
                  a[h].src.indexOf(c) > -1 && a[h].parentNode && a[h].parentNode.removeChild(a[h]);
              var u = O[c];
              u &&
                (delete u.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                o.removeOnUnmount === !0 && delete O[c]);
            }),
            (f.render = function () {
              var c = o.globalName,
                a = this.props;
              a.asyncScriptOnLoad;
              var h = a.forwardedRef,
                u = oe(a, ['asyncScriptOnLoad', 'forwardedRef']);
              return (
                c && typeof window < 'u' && (u[c] = typeof window[c] < 'u' ? window[c] : void 0),
                (u.ref = h),
                E.createElement(n, u)
              );
            }),
            g
          );
        })(E.Component),
        v = E.forwardRef(function (x, g) {
          return E.createElement(s, D({}, x, { forwardedRef: g }));
        });
      return (v.displayName = 'AsyncScriptLoader(' + r + ')'), (v.propTypes = { asyncScriptOnLoad: w.func }), ne(v, n);
    }
  );
}
var M = 'onloadcallback',
  se = 'grecaptcha';
function U() {
  return (typeof window < 'u' && window.recaptchaOptions) || {};
}
function de() {
  var e = U(),
    o = e.useRecaptchaNet ? 'recaptcha.net' : 'www.google.com';
  return e.enterprise
    ? 'https://' + o + '/recaptcha/enterprise.js?onload=' + M + '&render=explicit'
    : 'https://' + o + '/recaptcha/api.js?onload=' + M + '&render=explicit';
}
const pe = ce(de, { callbackName: M, globalName: se, attributes: U().nonce ? { nonce: U().nonce } : {} })(P),
  K = 'true',
  ue = '6Ld9-4kqAAAAAO7A0jXGa6Z4b39rBNzc8oMZv-LS',
  le = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
  ve = ({
    recaptchaRef: e,
    handleReCaptchaChange: o,
    handleRecaptchaExpired: i,
    handleRecaptchaLoad: n,
    handleRecaptchaErrored: r,
  }) => {
    const [s, v] = E.useState(0),
      { state: x } = E.useContext(G),
      { recaptchaBypass: g, cookies: f } = x,
      { languageCookies: l } = f;
    return (
      E.useEffect(() => {
        var c;
        g && K.toLocaleLowerCase() === 'true' && console.log('reCaptcha bypassed!'),
          v(Number.parseInt((+new Date()).toString())),
          (c = e == null ? void 0 : e.current) == null || c.reset();
      }, [l]),
      d.jsx(
        pe,
        {
          ref: e,
          sitekey: g && K.toLocaleLowerCase() === 'true' ? le : ue,
          onChange: o,
          onExpired: i,
          asyncScriptOnLoad: n,
          onErrored: r,
          hl: l,
        },
        s
      )
    );
  };
export { me as D, ve as R, ge as T };
