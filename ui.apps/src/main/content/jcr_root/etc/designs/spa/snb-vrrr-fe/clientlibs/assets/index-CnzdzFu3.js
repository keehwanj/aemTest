import {
  u as ge,
  a as Ne,
  r as i,
  j as e,
  b as Qe,
  F as Vt,
  f as At,
  d as ot,
  g as Xe,
  m as rt,
  D as lt,
  c as Ot,
  e as Rt,
  h as Lt,
  i as Fe,
  k as j,
  l as Se,
  n as ut,
  o as Mt,
  S as Ke,
  N as ft,
  p as Tt,
  C as Bt,
  q as Ft,
  s as qt,
  t as ht,
} from './index-BKDzaX2j.js';
import { H as G, B as Be, E as nt, M as Dt, F as Wt } from './Error-fngNGqfC.js';
import {
  M as xe,
  A as U,
  T as me,
  c as St,
  i as ze,
  a as Ge,
  r as Nt,
  b as Je,
  d as Ue,
  e as Ht,
  v as Ut,
} from './CodeAuthentication-DPeCjX0f.js';
import { T as he, u as $t } from './useMetadata-D4La1ovT.js';
import { D as qe, E as Kt, A as zt } from './ErrorModal-BfpRbuRh.js';
import { C as Gt, a as Jt } from './CheckboxGroup-DaR3uuP8.js';
const Qt = (a, n, d, o) => {
    var t = {};
    (a.ARIAaccordion = t),
      (t.NS = 'ARIAaccordion'),
      (t.AUTHOR = "Scott O'Hara"),
      (t.VERSION = '3.1.1'),
      (t.LICENSE = 'https://github.com/scottaohara/accessible_accordions/blob/master/LICENSE');
    var l = 'gnb-accordion-trigger',
      f = 'gnb-accordion-heading',
      s = 'gnb-accordion-panel',
      S = 'gnb-accordion-toggleall',
      k = 0;
    (t.create = function () {
      var r,
        c,
        C = 'none',
        u,
        p,
        m,
        h,
        x = n.querySelectorAll('[data-aria-accordion]');
      for (k += 1, h = 0; h < x.length; h++) {
        var v;
        if (
          ((r = x[h]),
          r.hasAttribute('id') || (r.id = 'acc_' + k + '-' + h),
          n.querySelectorAll('#' + r.id + '> li').length
            ? ((c = n.querySelectorAll('#' + r.id + ' li > .' + s)),
              (u = n.querySelectorAll('#' + r.id + ' li > .' + f)))
            : ((c = n.querySelectorAll('#' + r.id + ' > .' + s)), (u = n.querySelectorAll('#' + r.id + ' > .' + f))),
          r.hasAttribute('data-default') && (C = r.getAttribute('data-default')),
          (m = r.hasAttribute('data-constant')),
          r.hasAttribute('data-multi'),
          r.hasAttribute('data-transition'))
        ) {
          var E = r.querySelectorAll('.' + s);
          for (v = 0; v < E.length; v++)
            E[v].setAttribute('style', 'transition: ' + r.getAttribute('data-transition') + 's ease-in-out');
        }
        for (
          t.setupPanels(r.id, c, C, m),
            t.setupHeadingButton(u, o, m),
            n.querySelectorAll('#' + r.id + '> li').length
              ? (p = n.querySelectorAll('#' + r.id + ' li > .' + f + ' .' + l))
              : (p = n.querySelectorAll('#' + r.id + ' > .' + f + ' .' + l)),
            v = 0;
          v < p.length;
          v++
        )
          p[v].addEventListener('click', t.actions), p[v].addEventListener('keydown', t.keytrolls);
      }
    }),
      (t.setupPanels = function (r, c, C, u) {
        var p, m, h, x, v;
        for (p = 0; p < c.length; p++)
          (m = c[p]),
            (h = r + '_panel_' + (p + 1)),
            (x = C),
            (v = u),
            m.setAttribute('id', h),
            g(c[0], !0),
            x !== 'none' &&
              typeof parseInt(x) == 'number' &&
              (x <= 1 ? g(c[0], !1) : x - 1 >= c.length ? g(c[c.length - 1], !1) : g(c[x - 1], !1)),
            ((v && x === 'none') || typeof parseInt(x) != 'number') && g(c[0], !1);
      }),
      (t.setupHeadingButton = function (r, c, C) {
        var u, p, m, h, x, v;
        for (v = 0; v < r.length; v++)
          (u = r[v]),
            (p = u.nextElementSibling.id),
            (m = n.getElementById(p).getAttribute('aria-hidden')),
            (h = n.createElement('button')),
            (x = c[v]),
            (u.innerHTML = ''),
            h.setAttribute('type', 'button'),
            h.setAttribute('aria-controls', p),
            h.setAttribute('id', p + '_trigger'),
            h.classList.add(l),
            m === 'false' ? (b(h, !0), w(h, !0), C && h.setAttribute('aria-disabled', 'true')) : (b(h, !1), w(h, !1)),
            u.appendChild(h),
            h.appendChild(n.createTextNode(x));
      }),
      (t.actions = function (r) {
        var c = this.id.replace(/_panel.*$/g, ''),
          C = n.getElementById(this.getAttribute('aria-controls')),
          u;
        n.querySelectorAll('#' + c + '> li').length
          ? (u = n.querySelectorAll('#' + c + ' li > .' + f + ' .' + l))
          : (u = n.querySelectorAll('#' + c + ' > .' + f + ' .' + l)),
          r.preventDefault(),
          t.togglePanel(r, c, C, u);
      }),
      (t.togglePanel = function (r, c, C, u) {
        var p,
          m,
          h = r.target;
        if (
          h.getAttribute('aria-disabled') !== 'true' &&
          ((p = h.getAttribute('aria-controls')),
          w(h, 'true'),
          h.getAttribute('aria-expanded') === 'true'
            ? (b(h, 'false'), g(C, 'true'))
            : (b(h, 'true'), g(C, 'false'), n.getElementById(c).hasAttribute('data-constant') && M(h, 'true')),
          n.getElementById(c).hasAttribute('data-constant') || !n.getElementById(c).hasAttribute('data-multi'))
        )
          for (m = 0; m < u.length; m++)
            h !== u[m] &&
              (w(u[m], 'false'),
              (p = u[m].getAttribute('aria-controls')),
              M(u[m], 'false'),
              b(u[m], 'false'),
              g(n.getElementById(p), 'true'));
      }),
      (t.toggleAllPanels = function (r) {
        var c, C, u;
        let p = r.target,
          m = r.target.nextElementSibling;
        (C = p.getAttribute('data-open')),
          (u = C == 'true' ? 'false' : 'true'),
          n.querySelectorAll('#' + m.id + '> li').length
            ? (c = n.querySelectorAll('#' + m.id + ' li > .' + f + ' .' + l))
            : (c = n.querySelectorAll('#' + m.id + ' > .' + f + ' .' + l));
        for (var h = 0; h < c.length; h++) {
          let x = c[h],
            v = document.getElementById(x.getAttribute('aria-controls'));
          w(x, 'true'), u === 'false' ? (b(x, 'false'), g(v, 'true')) : (b(x, 'true'), g(v, 'false'));
        }
        p.setAttribute('data-open', u);
      }),
      (t.keytrolls = function (r) {
        if (r.target.classList.contains(l)) {
          var c = r.keyCode || r.which,
            C = 36,
            u = 35,
            p = this.id.replace(/_panel.*$/g, ''),
            m;
          switch (
            (n.querySelectorAll('#' + p + '> li').length
              ? (m = n.querySelectorAll('#' + p + ' li > .' + f + ' .' + l))
              : (m = n.querySelectorAll('#' + p + ' > .' + f + ' .' + l)),
            c)
          ) {
            case u:
              r.preventDefault(), m[m.length - 1].focus();
              break;
            case C:
              r.preventDefault(), m[0].focus();
              break;
          }
        }
      }),
      (t.init = function () {
        t.create();
        let r = n.querySelectorAll('.' + S);
        for (var c = 0; c < r.length; c++)
          r[c].addEventListener('click', function (u) {
            return (
              t.toggleAllPanels(u),
              u.target.innerHTML == 'Open all' ? (u.target.innerHTML = 'Close all') : (u.target.innerHTML = 'Open all'),
              u.preventDefault(),
              !0
            );
          });
      });
    var g = function (r, c) {
        r.setAttribute('aria-hidden', c);
      },
      b = function (r, c) {
        r.setAttribute('aria-expanded', c);
      },
      M = function (r, c) {
        r.setAttribute('aria-disabled', c);
      },
      w = function (r, c) {
        r.setAttribute('data-current', c);
      };
    t.init();
  },
  Xt = ({
    vehicleName: a,
    id: n,
    isOpen: d,
    setIsOpen: o,
    setRemovedVehicleSuccessMsg: t,
    getVehicleName: l,
    setRefreshData: f,
  }) => {
    const { t: s } = ge(),
      { getSession: S } = Ne(),
      [k, g] = i.useState(!1),
      b = () => {
        o(!1), g(!1);
      },
      M = () => {
        t(!1),
          g(!1),
          G.removeAVehicle(n, { params: { session: S() } })
            .then(() => {
              l(a), b(), t(!0), f(!0);
            })
            .catch((w) => {
              g(!0), console.error(w);
            });
      };
    return (
      i.useEffect(() => {
        const w = (r) => {
          r.key === 'Escape' && b();
        };
        return (
          d && window.addEventListener('keydown', w),
          () => {
            window.removeEventListener('keydown', w);
          }
        );
      }, [d]),
      e.jsx(xe, {
        id: `modal-remove-vehicle-${n}`,
        title: s('notifications.removeVehicleModal.title'),
        primaryBtnProps: {
          label: s('notifications.removeVehicleModal.primaryButtonLabel'),
          variant: 'critical',
          onClick: M,
        },
        hasSecondaryBtn: !0,
        secondaryBtnProps: { label: s('notifications.removeVehicleModal.secondaryButtonLabel'), onClick: b },
        hasFooter: !0,
        open: d,
        onClose: b,
        children: e.jsxs(e.Fragment, {
          children: [
            k &&
              e.jsx(U, {
                isOpen: k,
                setIsOpen: g,
                variant: 'inPage',
                type: 'critical',
                description: s('errorsMsg.genericErrMsg'),
              }),
            e.jsx('p', {
              children: e.jsx(he, {
                i18nKey: 'notifications.removeVehicleModal.message',
                components: { strong: e.jsx('strong', {}) },
                values: { vehicleName: a },
              }),
            }),
          ],
        }),
      })
    );
  },
  Yt = ({
    vehicle: a,
    handleEditCustomNameButtonClick: n,
    setRemovedVehicleSuccessMsg: d,
    getVehicleName: o,
    setRefreshData: t,
  }) => {
    const { t: l } = ge(),
      [f] = Qe(['language']),
      [s, S] = i.useState(!1),
      { colour: k, customName: g, expiryDate: b, make: M, model: w, plate: r, vin: c, year: C, vehicleId: u } = a,
      p = k && C && M && w,
      m = Xe(k, C, M, w),
      h = Lt(k, C, M, w, g),
      x = (N = 'default') => {
        let L;
        return p ? (L = g ? (N === 'fullCustomName' ? h : g) : m) : (L = r), L;
      },
      v = () => {
        S(!0);
      },
      E = p ? {} : { className: 'custom-disabled' };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs('li', {
          className: 'gnb-accordion-container',
          children: [
            e.jsx('div', { className: 'gnb-accordion-heading', children: e.jsx('h3', { children: x() }) }),
            e.jsxs('div', {
              className: 'left gnb-accordion-panel',
              children: [
                !p && e.jsxs('p', { children: [e.jsx(Vt, { icon: At }), ' ', l('warningMsg.unavailableVehicle')] }),
                e.jsxs('p', {
                  ...E,
                  children: [
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [l('notifications.vehicleInfo.name'), ':'] }),
                        ` ${p ? m : '-'}`,
                      ],
                    }),
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [l('notifications.vehicleInfo.vin'), ':'] }),
                        ` ${rt(c)}`,
                      ],
                    }),
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [l('notifications.vehicleInfo.licence'), ':'] }),
                        ` ${r}`,
                      ],
                    }),
                    e.jsxs('strong', { children: [l('notifications.vehicleInfo.date'), ':'] }),
                    ot(b, lt, f.language),
                  ],
                }),
                e.jsxs('div', {
                  children: [
                    e.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: e.jsx(Be, {
                        label: l(
                          g
                            ? 'notifications.customNameModal.edit.primaryButtonLabelAccordion'
                            : 'notifications.customNameModal.add.primaryButtonLabel'
                        ),
                        variant: 'secondary',
                        leftIcon: Ot,
                        size: 'small',
                        onClick: () => n(u),
                        disabled: !p,
                      }),
                    }),
                    e.jsx(Be, {
                      label: l('notifications.removeVehicleModal.primaryButtonLabel'),
                      variant: 'critical secondary',
                      leftIcon: Rt,
                      size: 'small',
                      onClick: v,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(Xt, {
          vehicleName: x('fullCustomName'),
          id: u,
          isOpen: s,
          setIsOpen: S,
          setRemovedVehicleSuccessMsg: d,
          getVehicleName: o,
          setRefreshData: t,
        }),
      ],
    });
  },
  Zt = ({
    vehicleInfoList: a,
    setRemovedVehicleSuccessMsg: n,
    getVehicleName: d,
    setRefreshData: o,
    handleEditCustomNameButtonClick: t,
  }) => (
    i.useEffect(() => {
      const l = a.map((f) => {
        let s;
        const { colour: S, customName: k, make: g, model: b, year: M, plate: w } = f,
          r = Xe(S, M, g, b);
        return S && M && g && b ? (s = k || r) : (s = w), s;
      });
      Qt(window, document, void 0, l);
    }),
    e.jsx('div', {
      className: 'gnb-accordion-pane',
      children: e.jsx('ol', {
        className: 'gnb-accordion-cards',
        'data-aria-accordion': !0,
        'data-multi': !0,
        children: a.map((l) =>
          e.jsx(
            Yt,
            {
              vehicle: l,
              setRemovedVehicleSuccessMsg: n,
              getVehicleName: d,
              setRefreshData: o,
              handleEditCustomNameButtonClick: t,
            },
            l.vehicleId
          )
        ),
      }),
    })
  ),
  es = ({ label: a, placeholder: n, maxlength: d, onChange: o, className: t, value: l }) =>
    e.jsxs('div', {
      children: [
        e.jsx('label', { className: 'left', htmlFor: a, children: a }),
        e.jsx('textarea', { className: t, name: a, id: a, value: l, placeholder: n, maxLength: d, onChange: o }),
      ],
    }),
  ts = ({ isFeedbackModalOpen: a, setIsFeedbackModalOpen: n, setFeedbackModalSuccess: d, scrollToTop: o }) => {
    const { t } = ge(),
      { getSession: l } = Ne(),
      [f, s] = i.useState(0),
      [S, k] = i.useState(!1),
      [g, b] = i.useState(!1),
      [M, w] = i.useState(''),
      { state: r, dispatch: c } = Fe(),
      { text: C, selectedReaction: u } = r.feedback;
    i.useEffect(() => {
      G.getAccountDetails({ params: { session: l() } })
        .then((N) => {
          w(N.data.account.accountId);
        })
        .catch((N) => {
          console.log(N);
        });
    }, []),
      i.useEffect(() => {
        const N = (L) => {
          L.key === 'Escape' && m();
        };
        return (
          a && window.addEventListener('keydown', N),
          () => {
            window.removeEventListener('keydown', N);
          }
        );
      }, [a]);
    const p = (N) => {
        G.submitFeedback({
          session: { token: l() },
          feedback: { feedbackId: '', feedbackRating: 0, feedbackComments: '', isFeedbackSkipped: !0, accountId: M },
        })
          .then(() => {
            N === 'discarded' && b(!1),
              n(!1),
              c({
                type: j.addFeedback.all_values_changed,
                payload: { addFeedback: { text: '', selectedReaction: 0 } },
              });
          })
          .catch((L) => {
            console.log(L);
          });
      },
      m = () => {
        p('closed');
      },
      h = () => {
        d(!1),
          G.submitFeedback({
            session: { token: l() },
            feedback: { feedbackId: '', feedbackRating: u, feedbackComments: C, isFeedbackSkipped: !1, accountId: M },
          })
            .then(() => {
              g && (d(!0), o()),
                n(!1),
                c({ type: j.addFeedback.selected_reaction_changed, payload: { addFeedback: { selectedReaction: 0 } } });
            })
            .catch((N) => {
              console.log(N);
            });
      },
      x = (N) => {
        N.target.value ? b(!0) : b(!1),
          s(N.target.value.length),
          c({ type: j.addFeedback.text_changed, payload: { addFeedback: { text: N.target.value } } });
      },
      v = (N) => {
        N && b(!0),
          c({ type: j.addFeedback.selected_reaction_changed, payload: { addFeedback: { selectedReaction: N } } });
      },
      E = () => {
        p('discarded');
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xe, {
          id: 'feedbackModal',
          title: t('notifications.feedbackModal.title'),
          primaryBtnProps: { label: t('notifications.feedbackModal.primaryButton'), onClick: h, disabled: !u },
          linkBtnProps: { label: t('notifications.feedbackModal.tertiaryButton'), onClick: m },
          hasLinkBtn: !0,
          hasFooter: !0,
          open: a,
          onClose: m,
          children: e.jsxs('form', {
            children: [
              e.jsxs('p', {
                children: [
                  t('notifications.feedbackModal.description'),
                  e.jsx('span', { className: 'required', children: '*' }),
                  e.jsx('span', { className: 'sr-only', children: 'required' }),
                ],
              }),
              e.jsxs('fieldset', {
                className: 'feedback-fieldset',
                children: [
                  e.jsx('legend', { className: 'sr-only', children: t('notifications.feedbackModal.description') }),
                  e.jsxs('div', {
                    className: 'img-section',
                    children: [
                      e.jsx('input', {
                        id: t('notifications.feedbackModal.dissatisfiedReaction'),
                        type: 'radio',
                        value: t('notifications.feedbackModal.dissatisfiedReaction'),
                        className: 'sr-only',
                        onClick: () => v(1),
                      }),
                      e.jsxs('label', {
                        htmlFor: t('notifications.feedbackModal.dissatisfiedReaction'),
                        children: [
                          e.jsx('span', {
                            className: 'sr-only',
                            'aria-describedby': t('notifications.feedbackModal.dissatisfiedReaction'),
                            children: t('notifications.feedbackModal.dissatisfiedReaction'),
                          }),
                          u == 1
                            ? e.jsx('img', {
                                src: 'images/face-tired-filled.svg',
                                alt: t('notifications.feedbackModal.dissatisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: 'images/face-tired.svg',
                                alt: t('notifications.feedbackModal.dissatisfiedReaction'),
                              }),
                        ],
                      }),
                      e.jsx('input', {
                        id: t('notifications.feedbackModal.neutralReaction'),
                        type: 'radio',
                        value: t('notifications.feedbackModal.neutralReaction'),
                        className: 'sr-only',
                        onClick: () => v(2),
                      }),
                      e.jsxs('label', {
                        htmlFor: t('notifications.feedbackModal.neutralReaction'),
                        children: [
                          e.jsx('span', {
                            className: 'sr-only',
                            'aria-describedby': t('notifications.feedbackModal.neutralReaction'),
                            children: t('notifications.feedbackModal.neutralReaction'),
                          }),
                          u == 2
                            ? e.jsx('img', {
                                src: 'images/face-meh-filled.svg',
                                alt: t('notifications.feedbackModal.neutralReaction'),
                              })
                            : e.jsx('img', {
                                src: 'images/face-meh.svg',
                                alt: t('notifications.feedbackModal.neutralReaction'),
                              }),
                        ],
                      }),
                      e.jsx('input', {
                        id: t('notifications.feedbackModal.satisfiedReaction'),
                        type: 'radio',
                        value: t('notifications.feedbackModal.satisfiedReaction'),
                        className: 'sr-only',
                        onClick: () => v(3),
                      }),
                      e.jsxs('label', {
                        htmlFor: t('notifications.feedbackModal.satisfiedReaction'),
                        children: [
                          e.jsx('span', {
                            className: 'sr-only',
                            'aria-describedby': t('notifications.feedbackModal.satisfiedReaction'),
                            children: t('notifications.feedbackModal.satisfiedReaction'),
                          }),
                          u == 3
                            ? e.jsx('img', {
                                src: 'images/face-heart-filled.svg',
                                alt: t('notifications.feedbackModal.satisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: 'images/face-grin-hearts.svg',
                                alt: t('notifications.feedbackModal.satisfiedReaction'),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(es, {
                className: 'feedback-text-area',
                label: t('notifications.feedbackModal.textAreaLabel'),
                placeholder: t('notifications.feedbackModal.textAreaPlaceHolder'),
                maxlength: 200,
                value: C,
                onChange: x,
              }),
              e.jsxs('div', { className: 'counter', children: [f, '/200'] }),
            ],
          }),
        }),
        S && e.jsx(qe, { isOpen: S, setIsOpen: k, handleDiscardFormChanges: E }),
      ],
    });
  },
  ss = ({
    id: a,
    isChecked: n = !1,
    label: d,
    hasOptIn: o = !1,
    error: t,
    useTrans: l,
    disabled: f = !1,
    withoutControlledLabeled: s = !1,
    onChange: S,
    onClick: k,
  }) => {
    const g = t ? { 'aria-labelledby': `${d}-error` } : {};
    return e.jsxs(e.Fragment, {
      children: [
        k && e.jsx('div', { className: Se('pair', 'on-click'), onClick: k ? () => k() : () => {} }),
        e.jsxs('div', {
          className: o ? 'single-option' : 'pair',
          children: [
            e.jsx('input', {
              type: 'checkbox',
              name: a,
              id: a,
              checked: n,
              ...g,
              'aria-invalid': t,
              disabled: f,
              className: f ? 'disabled' : '',
              onChange: S,
            }),
            l
              ? e.jsx('label', {
                  id: s ? '' : ut(d),
                  htmlFor: a,
                  className: f ? 'disabled' : '',
                  children: e.jsx(he, { i18nKey: l[0], components: l[1] }),
                })
              : e.jsx('label', { id: ut(d), htmlFor: a, className: f ? 'disabled' : '', children: d }),
          ],
        }),
      ],
    });
  },
  mt = ({ checkboxOptions: a, disabledArray: n, onChange: d }) => {
    if (n)
      for (let o = 0; o < n.length; o++) {
        const t = n[o];
        a[o].disabled = t;
      }
    return a.map((o) => {
      const { id: t, label: l, disabled: f, isChecked: s, onClick: S, error: k } = o;
      return e.jsx(ss, { id: t, label: l, isChecked: s, disabled: f, onChange: d, error: k, onClick: S }, t);
    });
  };
var ke = {},
  at = {},
  Re = {},
  pt;
function _t() {
  if (pt) return Re;
  (pt = 1), Object.defineProperty(Re, '__esModule', { value: !0 }), (Re.ProfanityOptions = void 0);
  class a {
    constructor() {
      (this.wholeWord = !0), (this.grawlix = '@#$%&!'), (this.grawlixChar = '*');
    }
  }
  return (Re.ProfanityOptions = a), Re;
}
var ye = {},
  it = {},
  gt;
function as() {
  return (
    gt ||
      ((gt = 1),
      (function (a) {
        Object.defineProperty(a, '__esModule', { value: !0 }),
          (a.CensorType = void 0),
          (function (n) {
            (n[(n.Word = 0)] = 'Word'),
              (n[(n.FirstChar = 1)] = 'FirstChar'),
              (n[(n.FirstVowel = 2)] = 'FirstVowel'),
              (n[(n.AllVowels = 3)] = 'AllVowels');
          })(a.CensorType || (a.CensorType = {}));
      })(it)),
    it
  );
}
var Le = {},
  bt;
function is() {
  if (bt) return Le;
  (bt = 1), Object.defineProperty(Le, '__esModule', { value: !0 }), (Le.List = void 0);
  class a {
    constructor(d) {
      (this.onListChanged = d), (this.words = []);
    }
    get empty() {
      return !this.words.length;
    }
    removeWords(d) {
      (this.words = this.words.filter((o) => !d.includes(o))), this.onListChanged();
    }
    addWords(d) {
      (this.words = this.words.concat(d)), this.onListChanged();
    }
  }
  return (Le.List = a), Le;
}
var vt;
function ns() {
  return (
    vt ||
      ((vt = 1),
      (function (a) {
        var n =
            (ye && ye.__createBinding) ||
            (Object.create
              ? function (o, t, l, f) {
                  f === void 0 && (f = l);
                  var s = Object.getOwnPropertyDescriptor(t, l);
                  (!s || ('get' in s ? !t.__esModule : s.writable || s.configurable)) &&
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[l];
                      },
                    }),
                    Object.defineProperty(o, f, s);
                }
              : function (o, t, l, f) {
                  f === void 0 && (f = l), (o[f] = t[l]);
                }),
          d =
            (ye && ye.__exportStar) ||
            function (o, t) {
              for (var l in o) l !== 'default' && !Object.prototype.hasOwnProperty.call(t, l) && n(t, o, l);
            };
        Object.defineProperty(a, '__esModule', { value: !0 }), d(as(), a), d(is(), a);
      })(ye)),
    ye
  );
}
var Te = {},
  kt;
function os() {
  if (kt) return Te;
  (kt = 1), Object.defineProperty(Te, '__esModule', { value: !0 }), (Te.escapeRegExp = void 0);
  const a = (n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (Te.escapeRegExp = a), Te;
}
var $e = {},
  yt;
function rs() {
  return (
    yt ||
      ((yt = 1),
      Object.defineProperty($e, '__esModule', { value: !0 }),
      ($e.default = [
        '4r5e',
        '5h1t',
        '5hit',
        'a55',
        'anal',
        'anus',
        'ar5e',
        'arrse',
        'arse',
        'arses',
        'ass',
        'ass-fucker',
        'asses',
        'assfucker',
        'assfukka',
        'asshole',
        'assholes',
        'asswhole',
        'a_s_s',
        'a$$',
        'as$',
        'a$s',
        'b!tch',
        'b00bs',
        'b17ch',
        'b1tch',
        'ballbag',
        'balls',
        'ballsack',
        'bastard',
        'beastial',
        'beastiality',
        'bellend',
        'bestial',
        'bestiality',
        'bi+ch',
        'biatch',
        'bitch',
        'bitchboy',
        'bitcher',
        'bitchers',
        'bitches',
        'bitchin',
        'bitching',
        'bloody',
        'blow job',
        'blowjob',
        'blowjobs',
        'boiolas',
        'bollock',
        'bollok',
        'boner',
        'boob',
        'boobs',
        'booobs',
        'boooobs',
        'booooobs',
        'booooooobs',
        'breasts',
        'buceta',
        'bugger',
        'bullshit',
        'bum',
        'butt',
        'butts',
        'butthole',
        'buttmuch',
        'buttplug',
        'c0ck',
        'c0cksucker',
        'carpet muncher',
        'cawk',
        'chink',
        'cipa',
        'cl1t',
        'clit',
        'clitoris',
        'clits',
        'cnut',
        'cock',
        'cock-sucker',
        'cockface',
        'cockhead',
        'cockmunch',
        'cockmuncher',
        'cocks',
        'cocksuck',
        'cocksucked',
        'cocksucker',
        'cocksucking',
        'cocksucks',
        'cocksuka',
        'cocksukka',
        'cok',
        'cokmuncher',
        'coksucka',
        'coon',
        'cox',
        'crap',
        'cum',
        'cummer',
        'cumming',
        'cums',
        'cumshot',
        'cunilingus',
        'cunillingus',
        'cunnilingus',
        'cunt',
        'cuntlick',
        'cuntlicker',
        'cuntlicking',
        'cunts',
        'cyalis',
        'cyberfuc',
        'cyberfuck',
        'cyberfucked',
        'cyberfucker',
        'cyberfuckers',
        'cyberfucking',
        'd1ck',
        'damn',
        'dick',
        'dickhead',
        'dildo',
        'dildos',
        'dink',
        'dinks',
        'dirsa',
        'dlck',
        'dog-fucker',
        'doggin',
        'dogging',
        'donkeyribber',
        'doosh',
        'duche',
        'dyke',
        'ejaculate',
        'ejaculated',
        'ejaculates',
        'ejaculating',
        'ejaculatings',
        'ejaculation',
        'ejakulate',
        'f u c k',
        'f u c k e r',
        'f4nny',
        'fag',
        'fagging',
        'faggitt',
        'faggot',
        'faggs',
        'fagot',
        'fagots',
        'fags',
        'fanny',
        'fannyflaps',
        'fannyfucker',
        'fanyy',
        'fatass',
        'fcuk',
        'fcuker',
        'fcuking',
        'feck',
        'fecker',
        'felching',
        'fellate',
        'fellatio',
        'fingerfuck',
        'fingerfucked',
        'fingerfucker',
        'fingerfuckers',
        'fingerfucking',
        'fingerfucks',
        'fistfuck',
        'fistfucked',
        'fistfucker',
        'fistfuckers',
        'fistfucking',
        'fistfuckings',
        'fistfucks',
        'flange',
        'fook',
        'fooker',
        'fuck',
        'fucka',
        'fucked',
        'fucker',
        'fuckers',
        'fuckhead',
        'fuckheads',
        'fuckin',
        'fucking',
        'fuckings',
        'fuckingshitmotherfucker',
        'fuckme',
        'fucks',
        'fuckwhit',
        'fuckwit',
        'fudge packer',
        'fudgepacker',
        'fuk',
        'fuker',
        'fukker',
        'fukkin',
        'fuks',
        'fukwhit',
        'fukwit',
        'fux',
        'fux0r',
        'f_u_c_k',
        'gangbang',
        'gangbanged',
        'gangbangs',
        'gaylord',
        'gaysex',
        'goatse',
        'god-dam',
        'god-damned',
        'goddamn',
        'goddamned',
        'hardcoresex',
        'headass',
        'hoar',
        'hoare',
        'hoer',
        'hoes',
        'homo',
        'hore',
        'horniest',
        'horny',
        'hotsex',
        'jack-off',
        'jackoff',
        'jap',
        'jerk-off',
        'jism',
        'jiz',
        'jizm',
        'jizz',
        'kawk',
        'knobead',
        'knobed',
        'knobend',
        'knobhead',
        'knobjocky',
        'knobjokey',
        'kock',
        'kondum',
        'kondums',
        'kum',
        'kummer',
        'kumming',
        'kums',
        'kunilingus',
        'l3i+ch',
        'l3itch',
        'labia',
        'lust',
        'lusting',
        'm0f0',
        'm0fo',
        'm45terbate',
        'ma5terb8',
        'ma5terbate',
        'masochist',
        'master-bate',
        'masterb8',
        'masterbat*',
        'masterbat3',
        'masterbate',
        'masterbation',
        'masterbations',
        'masturbate',
        'mo-fo',
        'mof0',
        'mofo',
        'mothafuck',
        'mothafucka',
        'mothafuckas',
        'mothafuckaz',
        'mothafucked',
        'mothafucker',
        'mothafuckers',
        'mothafuckin',
        'mothafucking',
        'mothafuckings',
        'mothafucks',
        'motherfuck',
        'motherfucked',
        'motherfucker',
        'motherfuckers',
        'motherfuckin',
        'motherfucking',
        'motherfuckings',
        'motherfuckka',
        'motherfucks',
        'muff',
        'muthafecker',
        'muthafuckker',
        'mutherfucker',
        'n1gga',
        'n1gger',
        'nazi',
        'nigg3r',
        'nigg4h',
        'nigga',
        'niggah',
        'niggas',
        'niggaz',
        'nigger',
        'niggers',
        'nob',
        'nob jokey',
        'nobhead',
        'nobjocky',
        'nobjokey',
        'numbnuts',
        'nutsack',
        'orgasim',
        'orgasims',
        'orgasm',
        'orgasms',
        'p0rn',
        'pawn',
        'pecker',
        'penis',
        'penisfucker',
        'phonesex',
        'phuck',
        'phuk',
        'phuked',
        'phuking',
        'phukked',
        'phukking',
        'phuks',
        'phuq',
        'pigfucker',
        'pimpis',
        'piss',
        'pissed',
        'pisser',
        'pissers',
        'pisses',
        'pissflaps',
        'pissin',
        'pissing',
        'pissoff',
        'poop',
        'porn',
        'porno',
        'pornography',
        'pornos',
        'prick',
        'pricks',
        'pron',
        'pube',
        'pusse',
        'pussi',
        'pussies',
        'pussy',
        'pussys',
        'rectum',
        'retard',
        'rimjaw',
        'rimming',
        's hit',
        's.o.b.',
        'sadist',
        'schlong',
        'screwing',
        'scroat',
        'scrote',
        'scrotum',
        'semen',
        'sex',
        'sh!+',
        'sh!t',
        'sh1t',
        'shag',
        'shagger',
        'shaggin',
        'shagging',
        'shemale',
        'shi+',
        'shit',
        'shitdick',
        'shite',
        'shited',
        'shitey',
        'shitfuck',
        'shitfull',
        'shithead',
        'shiting',
        'shitings',
        'shits',
        'shitted',
        'shitter',
        'shitters',
        'shitting',
        'shittings',
        'shitty',
        'skank',
        'slut',
        'sluts',
        'smegma',
        'smut',
        'snatch',
        'son-of-a-bitch',
        'spac',
        'spunk',
        's_h_i_t',
        't1tt1e5',
        't1tties',
        'teets',
        'teez',
        'testical',
        'testicle',
        'tit',
        'titfuck',
        'tits',
        'titt',
        'tittie5',
        'tittiefucker',
        'titties',
        'tittyfuck',
        'tittywank',
        'titwank',
        'tosser',
        'turd',
        'tw4t',
        'twat',
        'twathead',
        'twatty',
        'twunt',
        'twunter',
        'v14gra',
        'v1gra',
        'vagina',
        'viagra',
        'vulva',
        'w00se',
        'wang',
        'wank',
        'wanker',
        'wanky',
        'whoar',
        'whore',
        'willies',
        'willy',
      ])),
    $e
  );
}
var xt;
function ls() {
  return (
    xt ||
      ((xt = 1),
      (function (a) {
        Object.defineProperty(a, '__esModule', { value: !0 }), (a.profanity = a.Profanity = void 0);
        const n = _t(),
          d = ns(),
          o = os(),
          t = rs();
        class l {
          constructor(s) {
            (this.options = s || new n.ProfanityOptions()),
              (this.whitelist = new d.List(() => this.buildRegex())),
              (this.blacklist = new d.List(() => this.buildRegex())),
              this.blacklist.addWords(t.default);
          }
          exists(s) {
            return (this.regex.lastIndex = 0), this.regex.test(s);
          }
          censor(s, S = d.CensorType.Word) {
            switch (S) {
              case d.CensorType.Word:
                return s.replace(this.regex, this.options.grawlix);
              case d.CensorType.FirstChar: {
                let k = s;
                return (
                  Array.from(s.matchAll(this.regex)).forEach((g) => {
                    const b = g[0],
                      M = this.options.grawlixChar + b.slice(1, b.length);
                    k = k.replace(b, M);
                  }),
                  k
                );
              }
              case d.CensorType.FirstVowel:
              case d.CensorType.AllVowels: {
                const k = new RegExp('[aeiou]', S === d.CensorType.FirstVowel ? 'i' : 'ig');
                let g = s;
                return (
                  Array.from(s.matchAll(this.regex)).forEach((b) => {
                    const M = b[0],
                      w = M.replace(k, this.options.grawlixChar);
                    g = g.replace(M, w);
                  }),
                  g
                );
              }
              default:
                throw new Error(`Invalid replacement type: "${S}"`);
            }
          }
          addWords(s) {
            this.blacklist.addWords(s);
          }
          removeWords(s) {
            this.blacklist.removeWords(s);
          }
          buildRegex() {
            const s = this.blacklist.words.map(o.escapeRegExp),
              S = this.whitelist.words.map(o.escapeRegExp),
              k = `${this.options.wholeWord ? '\\b' : ''}(${s.join('|')})${this.options.wholeWord ? '\\b' : ''}`,
              g = this.whitelist.empty ? '' : `(?!${S.join('|')})`;
            this.regex = new RegExp(g + k, 'ig');
          }
        }
        (a.Profanity = l), (a.profanity = new l()), (a.default = a.profanity);
      })(at)),
    at
  );
}
var jt;
function cs() {
  return (
    jt ||
      ((jt = 1),
      (function (a) {
        var n =
            (ke && ke.__createBinding) ||
            (Object.create
              ? function (o, t, l, f) {
                  f === void 0 && (f = l);
                  var s = Object.getOwnPropertyDescriptor(t, l);
                  (!s || ('get' in s ? !t.__esModule : s.writable || s.configurable)) &&
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[l];
                      },
                    }),
                    Object.defineProperty(o, f, s);
                }
              : function (o, t, l, f) {
                  f === void 0 && (f = l), (o[f] = t[l]);
                }),
          d =
            (ke && ke.__exportStar) ||
            function (o, t) {
              for (var l in o) l !== 'default' && !Object.prototype.hasOwnProperty.call(t, l) && n(t, o, l);
            };
        Object.defineProperty(a, '__esModule', { value: !0 }), d(ls(), a), d(_t(), a);
      })(ke)),
    ke
  );
}
var wt = cs();
const It = ({ listContent: a }) =>
    e.jsx('ul', { children: a.map((n, d) => e.jsx('li', { children: e.jsx('p', { children: n.item }) }, d)) }),
  ds = ({
    isAddVehicleOpen: a,
    setIsAddVehicleOpen: n,
    setAddedVehicleSuccessMsg: d,
    getVehicleName: o,
    vehicleInfoList: t,
    setRefreshData: l,
    setFirstVehicleAdded: f,
  }) => {
    const { t: s } = ge(),
      S = Mt(),
      { getSession: k } = Ne(),
      [g] = Qe(['session', 'language']),
      b = g.language,
      [M, w] = i.useState({
        bodyType: '',
        colour: '',
        customName: '',
        expiryDate: '',
        make: '',
        model: '',
        plate: '',
        vehicleId: '',
        vin: '',
        year: '',
      }),
      [r, c] = i.useState(''),
      [C, u] = i.useState(!1),
      [p, m] = i.useState(!1),
      [h, x] = i.useState(!1),
      [v, E] = i.useState(!1),
      [N, L] = i.useState(!1),
      [X, $] = i.useState(!0),
      [K, J] = i.useState(!1),
      [F, W] = i.useState(!1),
      [D, H] = i.useState(!1),
      [A, O] = i.useState(!1),
      [z, q] = i.useState(!1),
      [ee, Y] = i.useState(!1),
      [ce, oe] = i.useState(!0),
      { state: te, dispatch: I } = Fe(),
      {
        vin: V,
        licencePlate: T,
        customName: Q,
        hasInvalidVin: _e,
        hasInvalidLicencePlate: je,
        hasNonRegisteredLicencePlate: Ce,
        hasInvalidCustomName: se,
      } = te.addVehicle;
    i.useEffect(() => {
      $(!(V && T)), oe(!Q);
    }, [V, T, Q]),
      i.useEffect(() => {
        r.length > 0 &&
          (m(!0),
          G.getAVehicle(r, { params: { session: k(), lang: b } })
            .then((y) => {
              w(y.data.vehicles), m(!1), O(!1), q(!0);
            })
            .catch((y) => {
              O(!1), y.response?.status === 403 && S('/authentication');
            }));
      }, [r]),
      i.useEffect(() => {
        M.vehicleId.length > 0 && (q(!0), n(!1));
      }, [M]),
      i.useEffect(() => {
        const y = (B) => {
          B.key === 'Escape' && (h ? n(!0) : F ? (u(!0), n(!0)) : (n(!1), re()));
        };
        return (
          a && (h || !h) && window.addEventListener('keydown', y),
          () => {
            window.removeEventListener('keydown', y);
          }
        );
      }, [a, h, F]),
      i.useEffect(() => {
        const y = (B) => {
          const Oe = B.key;
          Oe === 'Escape' && D ? (u(!0), q(!0)) : Oe === 'Escape' && !D && (q(!1), re());
        };
        return (
          z && window.addEventListener('keydown', y),
          () => {
            window.removeEventListener('keydown', y);
          }
        );
      }, [z, D]);
    const re = () => {
        I({
          type: j.addVehicle.all_values_and_errors_changed,
          payload: {
            addVehicle: {
              vin: '',
              licencePlate: '',
              customName: '',
              hasInvalidVin: !1,
              hasInvalidLicencePlate: !1,
              hasNonRegisteredLicencePlate: !1,
              hasInvalidCustomName: '',
            },
          },
        }),
          c(''),
          $(!0),
          J(!1),
          E(!1),
          Y(!1),
          oe(!0),
          l(!0),
          L(!1),
          W(!1),
          H(!1);
      },
      _ = (y) => t.some((B) => y.trim().toLowerCase() === B.plate.trim().toLowerCase()),
      R = () => {
        V &&
          T &&
          (I({ type: j.addVehicle.vin_error_changed, payload: { addVehicle: { hasInvalidVin: !ze(V) } } }),
          I({
            type: j.addVehicle.invalid_licence_plate_error_changed,
            payload: { addVehicle: { hasInvalidLicencePlate: !Ge(T) } },
          }),
          E(_(T)),
          I({
            type: j.addVehicle.non_registered_licence_plate_error_changed,
            payload: { addVehicle: { hasNonRegisteredLicencePlate: !1 } },
          }),
          ze(V) &&
            Ge(T) &&
            !_(T) &&
            (O(!0),
            I({ type: j.addVehicle.vin_error_changed, payload: { addVehicle: { hasInvalidVin: !1 } } }),
            I({
              type: j.addVehicle.invalid_licence_plate_error_changed,
              payload: { addVehicle: { hasInvalidLicencePlate: !1 } },
            }),
            G.addAVehicle({ session: { token: k() }, vehicle: { plate: T, vin: V }, lang: b })
              .then((y) => {
                c(y.data.vehicleId), J(!1), E(!1), $(!1), O(!1);
              })
              .catch((y) => {
                O(!1),
                  y.response.status === 404
                    ? (I({
                        type: j.addVehicle.non_registered_licence_plate_error_changed,
                        payload: { addVehicle: { hasNonRegisteredLicencePlate: !0 } },
                      }),
                      $(!0))
                    : (L(!0), console.error(y));
              })));
      },
      ae = () => {
        const y = wt.profanity.exists(Q);
        Q && y
          ? I({
              type: j.addVehicle.invalid_custom_name_error_changed,
              payload: { addVehicle: { hasInvalidCustomName: 'profanity' } },
            })
          : Je(Q)
          ? !y &&
            Je(Q) &&
            M &&
            (I({
              type: j.addVehicle.invalid_custom_name_error_changed,
              payload: { addVehicle: { hasInvalidCustomName: '' } },
            }),
            O(!0),
            G.updateAVehicle({
              session: { token: k() },
              vehicle: { vehicleId: r, plate: T, vin: V, customName: Q.trim() },
            })
              .then(() => {
                O(!1), q(!1), o(Q.trim()), d(!0), t.length === 0 && f(!0), $(!0), J(!1), re();
              })
              .catch((B) => {
                O(!1), L(!0), console.error(B);
              }))
          : I({
              type: j.addVehicle.invalid_custom_name_error_changed,
              payload: { addVehicle: { hasInvalidCustomName: 'invalid-custom-name' } },
            });
      },
      de = (y) => {
        d(!1), J(!!y);
      },
      ie = () => {
        K || V || T ? u(!0) : (n(!1), re(), O(!1));
      },
      be = (y) => {
        const B = Nt(y.target.value);
        de(B), I({ type: j.addVehicle.vin_changed, payload: { addVehicle: { vin: B } } });
      },
      ue = (y) => {
        de(y.target.value),
          I({ type: j.addVehicle.licence_plate_changed, payload: { addVehicle: { licencePlate: y.target.value } } });
      },
      Me = () => {
        let y;
        return je ? (y = s('errorsMsg.invalidLicence')) : Ce ? (y = s('errorsMsg.nonregisteredLicence')) : (y = ''), y;
      },
      we = (y) => {
        ve(y.target.value),
          I({ type: j.addVehicle.custom_name_changed, payload: { addVehicle: { customName: y.target.value } } });
      },
      ve = (y) => {
        const B = y.length > 0;
        Y(B);
      },
      { colour: De, make: Ye, model: Ie, year: fe, vin: Ee, plate: Pe, expiryDate: We } = M,
      Ve = Xe(De, fe, Ye, Ie),
      Ae = () => {
        o(Ve);
      },
      pe = () => {
        ee ? u(!0) : (Ae(), q(!1), re(), O(!1), d(!0), t.length === 0 && f(!0));
      },
      Ze = () => {
        n(!1), q(!1), re(), O(!1), z && !a && (d(!0), t.length === 0 && f(!0), Ae());
      },
      He = (y) => {
        const B = y.key;
        B !== 'Escape' && (K || V || T) ? W(!0) : B !== 'Escape' && !K && W(!1);
      },
      et = (y) => {
        const B = y.key;
        B !== 'Escape' && ee ? H(!0) : B !== 'Escape' && !ee && H(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xe, {
          id: 'add-vehicle-modal',
          title: s('notifications.addVehicleModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: s('notifications.addVehicleModal.primaryButton.add'),
            onClick: R,
            disabled: X || A,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('notifications.addVehicleModal.secondaryButton'), onClick: ie },
          open: a && !z,
          onClose: ie,
          children:
            A || p
              ? e.jsx(Ke, { inModal: !0, size: 'lg' })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs('p', {
                      children: [e.jsx('span', { className: 'required', children: '*' }), ' ', s('disclaimer')],
                    }),
                    e.jsx('p', { children: s('notifications.addVehicleModal.form.title') }),
                    v &&
                      e.jsx(U, {
                        isOpen: v,
                        setIsOpen: E,
                        variant: 'inPage',
                        type: 'critical',
                        description: s('errorsMsg.duplicatedVehicle'),
                      }),
                    N &&
                      e.jsx(U, {
                        isOpen: N,
                        setIsOpen: L,
                        variant: 'inPage',
                        type: 'critical',
                        description: s('errorsMsg.genericErrMsg'),
                      }),
                    e.jsx(me, {
                      type: 'text',
                      label: s('notifications.addVehicleModal.form.vinLabelInput'),
                      id: 'vin',
                      required: !0,
                      value: V,
                      maxlength: 6,
                      onChange: be,
                      error: _e ? s('errorsMsg.invalidVin') : '',
                      hasTooltipModal: !0,
                      tooltipBody: e.jsx(It, {
                        listContent: s('notifications.tooltip.vin.listOne', { returnObjects: !0 }),
                      }),
                      tooltipTitle: s('notifications.tooltip.vin.title'),
                      isTooltipModalOpen: h,
                      setIsTooltipModalOpen: x,
                      onKeyUp: He,
                    }),
                    e.jsx(me, {
                      type: 'text',
                      label: s('notifications.addVehicleModal.form.licenceLabelInput'),
                      id: 'licence-plate',
                      required: !0,
                      value: T,
                      onChange: ue,
                      error: Me(),
                      onKeyUp: He,
                    }),
                  ],
                }),
        }),
        e.jsx(xe, {
          id: 'add-custom-name-modal',
          title: s('notifications.addVehicleModal.customName.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: s('notifications.addVehicleModal.primaryButton.save'),
            onClick: ae,
            disabled: ce || A,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('notifications.addVehicleModal.customName.skip'), onClick: pe },
          open: z && !a,
          onClose: pe,
          children: A
            ? e.jsx(Ke, { inModal: !0, size: 'lg' })
            : e.jsxs(e.Fragment, {
                children: [
                  N &&
                    e.jsx(U, {
                      isOpen: N,
                      setIsOpen: L,
                      variant: 'inPage',
                      type: 'critical',
                      description: s('errorsMsg.genericErrMsg'),
                    }),
                  e.jsxs('p', {
                    children: [
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.name'), ':'] }),
                      ` ${Ve}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.vin'), ':'] }),
                      ` ${rt(Ee)}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.licence'), ':'] }),
                      ` ${Pe}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.date'), ':'] }),
                      ot(We, lt, b),
                    ],
                  }),
                  e.jsx(me, {
                    type: 'text',
                    label: s('notifications.vehicleInfo.addCustomLabelInput'),
                    helperText: s('notifications.vehicleInfo.helperText'),
                    id: 'custom-name',
                    value: Q,
                    onChange: we,
                    error: se ? St(se, s('errorsMsg.customNameWithProfanity'), s('errorsMsg.invalidCustomName')) : '',
                    onKeyUp: et,
                  }),
                ],
              }),
        }),
        e.jsx(qe, { isOpen: C, setIsOpen: u, handleDiscardFormChanges: Ze }),
      ],
    });
  },
  us = ({ isOptOutPaperModalOpen: a, setIsOptOutPaperModalOpen: n, setStopPaperSuccessMsg: d }) => {
    const { t: o } = ge(),
      { getSession: t } = Ne(),
      [l, f] = i.useState(!1),
      [s, S] = i.useState(!1),
      [k, g] = i.useState(!1),
      [b, M] = i.useState(!1),
      [w, r] = i.useState(!0),
      [c, C] = i.useState(!1),
      [u, p] = i.useState(!1),
      [m, h] = i.useState(''),
      [x, v] = i.useState(!1),
      [E, N] = i.useState(!1),
      [L, X] = i.useState(!1),
      [$, K] = i.useState(!1),
      { state: J, dispatch: F } = Fe(),
      {
        givenNames: W,
        lastName: D,
        vin: H,
        licencePlate: A,
        hasInvalidVin: O,
        hasInvalidLicencePlate: z,
        hasInvalidGivenNames: q,
        hasInvalidLastName: ee,
      } = J.stopPaperReminder;
    i.useEffect(() => {
      const _ = (R) => {
        R.key === 'Escape' && (l ? n(!0) : b ? (S(!0), n(!0)) : Y());
      };
      return (
        a && (l || !l) && window.addEventListener('keydown', _),
        () => {
          window.removeEventListener('keydown', _);
        }
      );
    }, [a, l, b]),
      i.useEffect(() => {
        (() => {
          G.getAccountDetails({ params: { session: t() } })
            .then((R) => {
              const ae = R?.data?.account?.email;
              h(ae);
            })
            .catch((R) => {
              console.error(R);
            });
        })();
      }, [m]),
      i.useEffect(() => {
        I();
      }, [J.stopPaperReminder]);
    const Y = () => {
        F({
          type: j.stopPaperReminders.all_values_and_errors_changed,
          payload: {
            stopPaperReminder: {
              givenNames: '',
              lastName: '',
              vin: '',
              licencePlate: '',
              hasInvalidVin: !1,
              hasInvalidLicencePlate: !1,
              hasInvalidGivenNames: !1,
              hasInvalidLastName: !1,
            },
          },
        }),
          N(!1),
          r(!0),
          n(!1),
          g(!1),
          C(!1),
          p(!1),
          X(!1),
          K(!1),
          M(!1);
      },
      ce = () => {
        k || W || D || H || A ? S(!0) : Y();
      },
      oe = () => {
        d(!1);
        const _ = A && Ge(A),
          R = H && ze(H),
          ae = W && Ue(W),
          de = D && Ue(D);
        F({
          type: j.stopPaperReminders.all_errors_changed,
          payload: {
            stopPaperReminder: {
              hasInvalidLicencePlate: !_,
              hasInvalidVin: !R,
              hasInvalidGivenNames: !ae,
              hasInvalidLastName: !de,
            },
          },
        }),
          N(!0),
          X(!1),
          K(!1),
          W &&
            D &&
            H &&
            A &&
            R &&
            _ &&
            ae &&
            de &&
            (v(!0),
            G.stopPaperReminders({ session: { token: t() }, givenNames: W, lastName: D, vin: H, plate: A, email: m })
              .then(() => {
                n(!1), d(!0), Y(), v(!1);
              })
              .catch((ie) => {
                console.error(ie), v(!1), ie.response.status === 400 && K(!0), ie.response.status === 500 && X(!0);
              }));
      },
      te = (_) => {
        g(!!_);
      },
      I = () => {
        const _ = W && D && H && A;
        r(E ? !(_ && !z && !O && !q && !ee) : !_);
      },
      V = () => {
        C(!0), p(!1);
      },
      T = () => {
        C(!1), p(!0);
      },
      Q = (_) => {
        F({
          type: j.stopPaperReminders.given_name_changed,
          payload: { stopPaperReminder: { givenNames: _.target.value } },
        }),
          E &&
            F({
              type: j.stopPaperReminders.given_name_error_changed,
              payload: { stopPaperReminder: { hasInvalidGivenNames: !Ue(_.target.value) } },
            }),
          te(_.target.value);
      },
      _e = (_) => {
        F({
          type: j.stopPaperReminders.last_name_changed,
          payload: { stopPaperReminder: { lastName: _.target.value } },
        }),
          E &&
            F({
              type: j.stopPaperReminders.last_name_error_changed,
              payload: { stopPaperReminder: { hasInvalidLastName: !Ue(_.target.value) } },
            }),
          te(_.target.value);
      },
      je = (_) => {
        const R = Nt(_.target.value);
        F({ type: j.stopPaperReminders.vin_changed, payload: { stopPaperReminder: { vin: R } } }),
          E &&
            F({
              type: j.stopPaperReminders.vin_error_changed,
              payload: { stopPaperReminder: { hasInvalidVin: !ze(R) } },
            }),
          te(R);
      },
      Ce = (_) => {
        F({
          type: j.stopPaperReminders.licence_plate_changed,
          payload: { stopPaperReminder: { licencePlate: _.target.value } },
        }),
          E &&
            F({
              type: j.stopPaperReminders.licence_plate_error_changed,
              payload: { stopPaperReminder: { hasInvalidLicencePlate: !Ge(_.target.value) } },
            }),
          te(_.target.value);
      },
      se = (_) => {
        const { givenNames: R, lastName: ae, vin: de, licencePlate: ie } = J.stopPaperReminder,
          be = _.key;
        be !== 'Escape' && (k || R || ae || de || ie) ? M(!0) : be !== 'Escape' && !k && M(!1);
      },
      re = () => {
        n(!1), Y();
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xe, {
          id: 'opt-out-of-paper-modal',
          title: o('notifications.optOutPaperModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: o('notifications.optOutPaperModal.primaryButtonLabel'),
            onClick: oe,
            disabled: w || x,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: o('notifications.optOutPaperModal.secondaryButtonLabel'), onClick: ce },
          open: a,
          onClose: ce,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', o('disclaimer')],
              }),
              e.jsx('p', { children: o('notifications.optOutPaperModal.form.descriptionOne') }),
              e.jsx('p', { children: o('notifications.optOutPaperModal.form.descriptionTwo') }),
              L &&
                e.jsx(U, {
                  isOpen: L,
                  setIsOpen: X,
                  variant: 'inPage',
                  type: 'critical',
                  description: o('errorsMsg.genericErrMsg'),
                }),
              $ &&
                e.jsx(U, {
                  isOpen: $,
                  setIsOpen: K,
                  variant: 'inPage',
                  type: 'critical',
                  description: o('errorsMsg.gBizFailErrorMsg'),
                }),
              e.jsx(me, {
                type: 'text',
                label: o('notifications.optOutPaperModal.form.givenNames.label'),
                id: 'given-name',
                required: !0,
                value: W,
                onChange: Q,
                maxlength: ft,
                error: (c || u) && q ? o('errorsMsg.invalidGivenNames') : '',
                onKeyUp: se,
              }),
              e.jsx(me, {
                type: 'text',
                label: o('notifications.optOutPaperModal.form.lastName.label'),
                id: 'last-name',
                required: !0,
                value: D,
                onChange: _e,
                maxlength: ft,
                error: (c || u) && ee ? o('errorsMsg.invalidLastName') : '',
                onKeyUp: se,
              }),
              e.jsx(me, {
                type: 'text',
                label: o('notifications.optOutPaperModal.form.vin.label'),
                id: 'vin-number',
                required: !0,
                value: H,
                maxlength: 6,
                onChange: je,
                error: (c || u) && O ? o('errorsMsg.invalidVin') : '',
                hasTooltipModal: !0,
                tooltipBody: e.jsx(It, { listContent: o('notifications.tooltip.vin.listOne', { returnObjects: !0 }) }),
                tooltipTitle: o('notifications.tooltip.vin.title'),
                isTooltipModalOpen: l,
                setIsTooltipModalOpen: f,
                onFocus: V,
                onBlur: T,
                onKeyUp: se,
              }),
              e.jsx(me, {
                type: 'text',
                label: o('notifications.optOutPaperModal.form.licence.label'),
                id: 'licence-plate',
                required: !0,
                value: A,
                onChange: Ce,
                error: (c || u) && z ? o('errorsMsg.invalidLicence') : '',
                onFocus: V,
                onBlur: T,
                onKeyUp: se,
              }),
            ],
          }),
        }),
        e.jsx(qe, { isOpen: s, setIsOpen: S, handleDiscardFormChanges: re }),
      ],
    });
  },
  fs = ({ isOpen: a, setIsOpen: n, setIsAuthenticateModalOpen: d }) => {
    const { t: o } = ge(),
      [t, l] = i.useState(!0),
      [f, s] = i.useState(''),
      [S, k] = i.useState(!1),
      [g, b] = i.useState(!1),
      [M, w] = i.useState(''),
      [r, c] = i.useState([{ value: '', checked: !1 }]),
      C = () => {
        g ? k(!0) : n(!1);
      },
      u = (h) => {
        Ht(h, l),
          h.target.value ? b(!0) : b(!1),
          s(h.target.value),
          Ut(h.target.value, w, o('errorsMsg.invalidSMSNumber'));
      },
      p = () => {
        n(!1), b(!1);
      },
      m = () => {
        d(!0), n(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xe, {
          id: 'text-message-reminders-modal',
          title: o('notification.textMsgRemindersModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: o('notification.textMsgRemindersModal.form.primaryBtnLabel'),
            onClick: m,
            disabled: t,
          },
          hasLinkBtn: !0,
          linkBtnProps: { label: o('notification.textMsgRemindersModal.form.linkLabel'), onClick: C },
          open: a,
          onClose: C,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', { children: o('notification.textMsgRemindersModal.description1') }),
              e.jsx('p', { children: o('notification.textMsgRemindersModal.description2') }),
              e.jsx(me, {
                type: 'tel',
                label: o('notifications.textMsgRemindersModal.form.label'),
                value: f,
                onChange: u,
                error: M,
                required: !0,
              }),
              e.jsx(Gt, {
                title: '',
                valueArray: ['text-reminder'],
                selectedOptions: r,
                setSelectedOptions: c,
                children: e.jsx(Jt, {
                  id: 'text-reminder',
                  label: o('notifications.textMsgRemindersModal.form.checkboxText'),
                }),
              }),
            ],
          }),
        }),
        e.jsx(qe, { isOpen: S, setIsOpen: k, handleDiscardFormChanges: p }),
      ],
    });
  },
  Ct = ({ title: a, children: n, hasOptIn: d, error: o }) =>
    e.jsx('div', {
      className: Se('gnb-form-input', o ? 'error' : ''),
      children: e.jsxs('fieldset', {
        className: Se('gnb-checkboxes', { 'fieldset-container': d }),
        children: [
          e.jsx('legend', { className: Se('left', { 'sr-only': d }), children: a }),
          o && e.jsx(nt, { error: o }),
          n,
        ],
      }),
    }),
  hs = ({
    vehicleId: a,
    isCustomNameModalOpen: n,
    setIsCustomNameModalOpen: d,
    setEditedCustomNameSuccessMsg: o,
    setAddedCustomNameSuccessMsg: t,
    getVehicleName: l,
    setRefreshData: f,
  }) => {
    const { t: s } = ge(),
      { getSession: S } = Ne(),
      [k] = Qe(['session', 'language']),
      [g, b] = i.useState(!1),
      [M, w] = i.useState(!1),
      [r, c] = i.useState(!1),
      [C, u] = i.useState(!0),
      [p, m] = i.useState(!1),
      { state: h, dispatch: x } = Fe(),
      { customName: v, hasInvalidCustomName: E } = h.addCustomName,
      { vehicleList: N } = h.common,
      L = Tt(N.find((I) => I.vehicleId === a)),
      { colour: X, customName: $, expiryDate: K, make: J, model: F, plate: W, vin: D, year: H } = L,
      A = $ ? 'edit' : 'add',
      O = $ && A === 'edit' ? $ : '',
      z = Xe(X, H, J, F);
    i.useEffect(() => {
      x({ type: j.addCustomName.custom_name_changed, payload: { addCustomName: { customName: O } } });
    }, [O]),
      i.useEffect(() => {
        const I = (V) => {
          const T = V.key;
          T === 'Escape' && r ? (b(!0), d(!0)) : T === 'Escape' && !r && q();
        };
        return (
          n && window.addEventListener('keydown', I),
          () => {
            window.removeEventListener('keydown', I);
          }
        );
      }, [n, r]);
    const q = () => {
        d(!1),
          w(!1),
          u(!0),
          m(!1),
          x({
            type: j.addCustomName.all_values_and_errors_changed,
            payload: { addCustomName: { customName: O, hasInvalidCustomName: '' } },
          });
      },
      ee = () => {
        M
          ? b(!0)
          : (d(!1),
            m(!1),
            x({
              type: j.addCustomName.all_values_and_errors_changed,
              payload: { addCustomName: { customName: O, hasInvalidCustomName: '' } },
            }));
      },
      Y = () => {
        o(!1),
          t(!1),
          m(!1),
          wt.profanity.exists(v)
            ? x({
                type: j.addCustomName.invalid_custom_name_error_changed,
                payload: { addCustomName: { hasInvalidCustomName: 'profanity' } },
              })
            : Je(v)
            ? (x({
                type: j.addCustomName.invalid_custom_name_error_changed,
                payload: { addCustomName: { hasInvalidCustomName: '' } },
              }),
              G.updateAVehicle({
                session: { token: S() },
                vehicle: { vehicleId: a, plate: W, vin: D, customName: v.trim(), expiryDate: K },
              })
                .then(() => {
                  l(v.trim()), A === 'add' ? t(!0) : o(!0), f(!0), q();
                })
                .catch((V) => {
                  m(!0), console.error(V);
                }))
            : x({
                type: j.addCustomName.invalid_custom_name_error_changed,
                payload: { addCustomName: { hasInvalidCustomName: 'invalid-custom-name' } },
              });
      },
      ce = () => {
        q();
      },
      oe = (I) => {
        I.target.value !== O ? (w(!0), (!E || (E && Je(I.target.value))) && u(!1)) : (w(!1), u(!1)),
          x({ type: j.addCustomName.custom_name_changed, payload: { addCustomName: { customName: I.target.value } } });
      },
      te = (I) => {
        const V = I.key;
        V !== 'Escape' && M ? c(!0) : V !== 'Escape' && !M && c(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xe, {
          id: `${A === 'add' ? 'add' : 'edit'}-custom-name-modal-${a}`,
          title: s(
            A === 'add' ? 'notifications.customNameModal.add.title' : 'notifications.customNameModal.edit.title'
          ),
          hasFooter: !0,
          primaryBtnProps: {
            label: s(
              A === 'add'
                ? 'notifications.customNameModal.add.primaryButtonLabel'
                : 'notifications.customNameModal.edit.primaryButtonLabelModal'
            ),
            onClick: Y,
            disabled: C,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('notifications.customNameModal.secondaryButtonLabel'), onClick: ee },
          open: n,
          onClose: ee,
          children: e.jsxs(e.Fragment, {
            children: [
              p &&
                e.jsx(U, {
                  isOpen: p,
                  setIsOpen: m,
                  variant: 'inPage',
                  type: 'critical',
                  description: s('errorsMsg.genericErrMsg'),
                }),
              e.jsxs('p', {
                children: [
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.name'), ':'] }),
                  ` ${z}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.vin'), ':'] }),
                  ` ${rt(D)}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.licence'), ':'] }),
                  ` ${W}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.date'), ':'] }),
                  ot(K, lt, k.language),
                ],
              }),
              e.jsx(me, {
                type: 'text',
                label: s(
                  A === 'add'
                    ? 'notifications.vehicleInfo.addCustomLabelInput'
                    : 'notifications.vehicleInfo.editCustomLabelInput'
                ),
                helperText: s('notifications.vehicleInfo.helperText'),
                id: 'custom-name',
                value: v,
                onChange: oe,
                error: E ? St(E, s('errorsMsg.customNameWithProfanity'), s('errorsMsg.invalidCustomName')) : '',
                maxlength: Bt,
                onKeyUp: te,
              }),
            ],
          }),
        }),
        e.jsx(qe, { isOpen: g, setIsOpen: b, handleDiscardFormChanges: ce }),
      ],
    });
  };
function ys() {
  const { t: a, i18n: n } = ge(),
    d = Mt(),
    { renderMetadata: o } = $t(),
    { getSession: t, refreshSessionCookie: l } = Ne(),
    f = i.useRef(null),
    [s, S] = i.useState(!1),
    [k, g] = i.useState(!1),
    [b, M] = i.useState(!1),
    [w, r] = i.useState(!1),
    [c, C] = i.useState(!1),
    [u, p] = i.useState(!1),
    [m, h] = i.useState(!1),
    [x, v] = i.useState(!1),
    [E, N] = i.useState(!1),
    [L, X] = i.useState(!0),
    [$, K] = i.useState(!1),
    [J, F] = i.useState(!1),
    [W, D] = i.useState(!1),
    [H, A] = i.useState(!1),
    [O, z] = i.useState(!1),
    [q, ee] = i.useState(!0),
    [Y, ce] = i.useState(!1),
    [oe, te] = i.useState(!1),
    [I, V] = i.useState(!1),
    [T, Q] = i.useState(''),
    [_e, je] = i.useState(!1),
    [Ce, se] = i.useState(!1),
    [re, _] = i.useState(!0),
    [R, ae] = i.useState(''),
    [de, ie] = i.useState(!0),
    [be, ue] = i.useState(!1),
    [Me, we] = i.useState(!0),
    [ve, De] = Qe(['session', 'language', 'sessionExpiry']),
    [Ye] = Ft(),
    { state: Ie, dispatch: fe } = Fe(),
    {
      hasEmailReminders: Ee,
      hasSMSReminders: Pe,
      hasLeadTime2Weeks: We,
      hasLeadTime4Weeks: Ve,
      hasLeadTime6Weeks: Ae,
    } = Ie.notifications,
    { vehicleList: pe } = Ie.common,
    Ze = NaN;
  i.useEffect(() => {
    const P = Ye.get('l');
    P === 'f'
      ? (n.changeLanguage('fr-CA'), De('language', 'fr-CA'))
      : P === 'e'
      ? (n.changeLanguage('en-CA'), De('language', 'en-CA'))
      : qt(ve.language);
  }, []),
    i.useEffect(() => {
      o(), ue(!0);
    }, [ve.language]),
    i.useEffect(() => {
      be &&
        (ue(!1),
        te(oe),
        ht(ve)
          ? (G.getAccountDetails({ params: { session: t() } })
              .then((P) => {
                P.data.account.smsNumber && ee(!1), console.log('Account Details Received', P.data);
              })
              .catch((P) => {
                console.error(P);
              }),
            G.getReminderDetails({ params: { session: t() } })
              .then((P) => {
                l(t()), ie(!1);
                const {
                    isEmailActive: le,
                    isTextActive: Z,
                    isLeadTime2wksActive: ne,
                    isLeadTime4wksActive: ct,
                    isLeadTime6wksActive: dt,
                  } = P.data.reminderPreference,
                  st = !le && !ne && !ct && !dt;
                fe({
                  type: j.notification.init_reminder_options,
                  payload: {
                    notification: {
                      hasEmailReminders: !!(st || le),
                      hasSMSReminders: !!Z,
                      hasLeadTime2Weeks: !!(st || ne),
                      hasLeadTime4Weeks: !!ct,
                      hasLeadTime6Weeks: !!dt,
                    },
                  },
                }),
                  st && _(!1);
              })
              .catch((P) => {
                console.log(P), ie(!1), z(!0);
              }),
            we(!0),
            G.getAllVehicles({ params: { session: t(), lang: ve.language } })
              .then((P) => {
                console.log('Vehicle List received', P.data),
                  we(!1),
                  fe({ type: j.common.vehicle_list_changed, payload: { common: { vehicleList: P.data.vehicles } } });
              })
              .catch((P) => {
                we(!1), P.response?.status === 403 ? d('/authentication') : z(!0);
              }))
          : d('/authentication'));
    }, [be]),
    i.useEffect(() => {
      pe.length > 0 ? X(!1) : X(!0);
    }, [pe]),
    i.useEffect(() => {
      u &&
        b &&
        setTimeout(() => {
          D(!0), M(!1), A(!0);
        }, Ze),
        u && (N(!1), h(!1), v(!1));
    }, [u, b, H]),
    i.useEffect(() => {
      E && (p(!1), h(!1), v(!1), A(!1));
    }, [E]),
    i.useEffect(() => {
      m && (p(!1), N(!1), v(!1));
    }, [m]),
    i.useEffect(() => {
      x && (p(!1), N(!1), h(!1));
    }, [x]);
  const He = () => {
      f && f.current && f.current.scrollIntoView({ behavior: 'smooth' });
    },
    et = () => {
      f && f.current && f.current.scrollIntoView({ behavior: 'smooth' });
    },
    y = (P) => {
      const {
          target: { name: le, checked: Z },
        } = P,
        ne = { ...Ie.notifications };
      le === 'email' &&
        (fe({
          type: j.notification.email_reminder_option_changed,
          payload: { notification: { hasEmailReminders: Z } },
        }),
        (ne.hasEmailReminders = Z)),
        le === 'text-message' &&
          (fe({ type: j.notification.text_reminder_option_changed, payload: { notification: { hasSMSReminders: Z } } }),
          (ne.hasSMSReminders = Z)),
        le === 'two-week' &&
          (fe({
            type: j.notification.reminder_freq_2_weeks_option_changed,
            payload: { notification: { hasLeadTime2Weeks: Z } },
          }),
          (ne.hasLeadTime2Weeks = Z)),
        le === 'four-week' &&
          (fe({
            type: j.notification.reminder_freq_4_weeks_option_changed,
            payload: { notification: { hasLeadTime4Weeks: Z } },
          }),
          (ne.hasLeadTime4Weeks = Z)),
        le === 'six-week' &&
          (fe({
            type: j.notification.reminder_freq_6_weeks_option_changed,
            payload: { notification: { hasLeadTime6Weeks: Z } },
          }),
          (ne.hasLeadTime6Weeks = Z)),
        (le === 'email' || le === 'text-message') && (ce(!1), V(!1)),
        pe.length === 0 || (!ne.hasLeadTime2Weeks && !ne.hasLeadTime4Weeks && !ne.hasLeadTime6Weeks) ? _(!0) : _(!1);
    },
    B = () => {
      q && !Y && ce(!0);
    },
    Oe = () => {
      if ((ht(ve) || d('/authentication'), r(!1), g(!1), !Ee && !Pe)) {
        V(!0);
        return;
      }
      G.updateReminderDetails({
        session: { token: t() },
        reminderPreference: {
          isEmailActive: !!Ee,
          isTextActive: !!Pe,
          isLeadTime2wksActive: !!We,
          isLeadTime4wksActive: !!Ve,
          isLeadTime6wksActive: !!Ae,
        },
      })
        .then(() => {
          ue(!0), g(!0), et();
        })
        .catch((P) => {
          r(!0), console.error(P);
        }),
        _(!0);
    },
    tt = (P) => {
      ae(P);
    },
    Et = () => {
      z(!1), d('/authentication');
    },
    Pt = (P) => {
      Q(P), je(!0);
    };
  return de
    ? e.jsx('main', { className: 'page-content', children: e.jsx(Ke, { size: 'lg' }) })
    : e.jsxs(e.Fragment, {
        children: [
          e.jsx(Dt, {
            showCart: !1,
            accountOptions: a('mainNavigation.accountOptionsSignIn.options', { returnObjects: !0 }),
            signedIn: !0,
            showSearch: !1,
          }),
          e.jsxs('main', {
            ref: f,
            className: 'page-content',
            children: [
              s &&
                e.jsx(U, {
                  isOpen: s,
                  setIsOpen: S,
                  variant: 'inPage',
                  type: 'success',
                  description: e.jsxs('div', {
                    children: [
                      e.jsx('h2', { children: a('notifications.feedbackModal.successAlertTitle') }),
                      e.jsx('p', { children: a('notifications.feedbackModal.successAlertDescription') }),
                    ],
                  }),
                }),
              e.jsx('section', {
                className: 'left',
                children: e.jsxs('div', {
                  className: 'gnb-form-container',
                  children: [
                    k &&
                      e.jsx(U, {
                        isOpen: k,
                        setIsOpen: g,
                        variant: 'inPage',
                        type: 'success',
                        description: a('notifications.toastMessages.saveChangesSuccess'),
                      }),
                    w &&
                      e.jsx(U, {
                        isOpen: w,
                        setIsOpen: r,
                        variant: 'inPage',
                        type: 'critical',
                        description: a('errorsMsg.genericErrMsg'),
                      }),
                    e.jsx('h1', {
                      className: 'padding-top-md notifications-heading',
                      children: a('notifications.heading'),
                    }),
                    e.jsx('hr', {}),
                    u &&
                      e.jsx(e.Fragment, {
                        children: e.jsx(U, {
                          isOpen: u,
                          setIsOpen: p,
                          variant: 'inPage',
                          type: 'success',
                          description: e.jsx(he, {
                            i18nKey: 'notifications.toastMessages.addVehicleSuccess',
                            components: { strong: e.jsx('strong', {}) },
                            values: { vehicleName: R },
                          }),
                        }),
                      }),
                    m &&
                      e.jsx(U, {
                        isOpen: m,
                        setIsOpen: h,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(he, {
                          i18nKey: 'notifications.toastMessages.editCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: R },
                        }),
                      }),
                    x &&
                      e.jsx(U, {
                        isOpen: x,
                        setIsOpen: v,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(he, {
                          i18nKey: 'notifications.toastMessages.addCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: R },
                        }),
                      }),
                    E &&
                      e.jsx(U, {
                        isOpen: E,
                        setIsOpen: N,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(he, {
                          i18nKey: 'notifications.toastMessages.removeVehicleSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { vehicleName: R },
                        }),
                      }),
                    e.jsx('div', {
                      className: 'padding-bottom-md',
                      children:
                        L &&
                        !Me &&
                        e.jsx(U, {
                          isOpen: L && !Me,
                          setIsOpen: () => {},
                          hasTimeout: !1,
                          variant: 'inPage',
                          type: 'info',
                          description: e.jsx(he, {
                            i18nKey: 'notifications.toastMessages.addVehicleAlert',
                            components: { 1: e.jsx('a', { href: '#your-active-reminders' }) },
                          }),
                        }),
                    }),
                    e.jsxs('form', {
                      children: [
                        e.jsx('h3', {
                          id: 'your-active-reminders',
                          children: a('notifications.subsectionThree.heading'),
                        }),
                        e.jsx('p', { children: a('notifications.subsectionThree.subhead') }),
                        e.jsx(Be, { label: a('notifications.subsectionThree.buttonText'), onClick: () => K(!0) }),
                        Me && e.jsx(Ke, { size: 'md', inModal: !0 }),
                        !Me &&
                          e.jsx('div', {
                            className: 'padding-top-md',
                            children: e.jsx(Zt, {
                              vehicleInfoList: pe,
                              setRemovedVehicleSuccessMsg: N,
                              getVehicleName: tt,
                              setRefreshData: ue,
                              handleEditCustomNameButtonClick: Pt,
                            }),
                          }),
                        e.jsx('hr', {}),
                        e.jsx('h2', { children: a('notifications.subsectionOne.heading') }),
                        e.jsx('p', { children: a('notifications.subsectionOne.subhead') }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionOne.question') }),
                        e.jsx(Ct, {
                          title: a('notifications.checkboxHeading'),
                          children: e.jsxs(e.Fragment, {
                            children: [
                              I &&
                                e.jsx('div', {
                                  className: Se('gnb-form-input', 'pair', 'error', 'margin-bottom-none'),
                                  children: e.jsx(nt, {
                                    error: e.jsx(he, { i18nKey: 'notifications.subsectionOne.questionOne.errorMsg' }),
                                  }),
                                }),
                              e.jsx(mt, {
                                checkboxOptions: [
                                  {
                                    id: 'email',
                                    label: a('notifications.subsectionOne.questionOne.options.0.label'),
                                    isChecked: Ee,
                                  },
                                  {
                                    id: 'text-message',
                                    label: a('notifications.subsectionOne.questionOne.options.1.label'),
                                    isChecked: Pe,
                                    onClick: q ? B : void 0,
                                  },
                                ],
                                disabledArray: [!1, q],
                                onChange: y,
                              }),
                              Y &&
                                e.jsx('div', {
                                  className: Se('gnb-form-input', 'pair', 'error'),
                                  children: e.jsx(nt, {
                                    error: e.jsx(he, {
                                      i18nKey: 'notifications.subsectionOne.questionOne.options.1.errorMsg',
                                      components: {
                                        1: e.jsx('br', {}),
                                        2: e.jsx('a', {
                                          href: '#',
                                          onClick: () => {
                                            d('/account-settings');
                                          },
                                          children: 'Edit your profile',
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionTwo.question') }),
                        e.jsx(Ct, {
                          title: a('notifications.checkboxHeading'),
                          children: e.jsx(mt, {
                            checkboxOptions: [
                              {
                                id: 'two-week',
                                label: a('notifications.subsectionOne.questionTwo.options.0.label'),
                                isChecked: We,
                              },
                              {
                                id: 'four-week',
                                label: a('notifications.subsectionOne.questionTwo.options.1.label'),
                                isChecked: Ve,
                              },
                              {
                                id: 'six-week',
                                label: a('notifications.subsectionOne.questionTwo.options.2.label'),
                                isChecked: Ae,
                              },
                            ],
                            onChange: y,
                          }),
                        }),
                        e.jsx(Be, {
                          label: a('notifications.subsectionOne.primaryButtonLabel'),
                          disabled: re,
                          variant: 'secondary',
                          onClick: Oe,
                        }),
                      ],
                    }),
                    e.jsx('hr', {}),
                    c &&
                      e.jsx('div', {
                        className: 'padding-bottom-md',
                        children: e.jsx(U, {
                          isOpen: c,
                          setIsOpen: C,
                          variant: 'inPage',
                          type: 'success',
                          description: a('notifications.toastMessages.stopPaperSuccess'),
                        }),
                      }),
                    e.jsx('h3', { children: a('notifications.subsectionTwo.heading') }),
                    e.jsx('p', { children: a('notifications.subsectionTwo.subhead') }),
                    e.jsx(Be, {
                      label: a('notifications.subsectionTwo.buttonText'),
                      variant: 'secondary',
                      onClick: () => F(!0),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(Wt, { variant: 'dark' }),
          e.jsx(ds, {
            vehicleInfoList: pe,
            isAddVehicleOpen: $,
            setIsAddVehicleOpen: K,
            setAddedVehicleSuccessMsg: p,
            setFirstVehicleAdded: M,
            getVehicleName: tt,
            setRefreshData: ue,
          }),
          e.jsx(hs, {
            vehicleId: T,
            isCustomNameModalOpen: _e,
            setIsCustomNameModalOpen: je,
            setEditedCustomNameSuccessMsg: h,
            setAddedCustomNameSuccessMsg: v,
            getVehicleName: tt,
            setRefreshData: ue,
          }),
          e.jsx(us, { isOptOutPaperModalOpen: J, setIsOptOutPaperModalOpen: F, setStopPaperSuccessMsg: C }),
          e.jsx(Kt, { isErrorModalOpen: O, handleErrorModalClose: Et }),
          e.jsx('div', {
            className: H ? 'feedback-fade-in' : '',
            children: e.jsx(ts, {
              isFeedbackModalOpen: W,
              setIsFeedbackModalOpen: D,
              setFeedbackModalSuccess: S,
              scrollToTop: He,
            }),
          }),
          e.jsx(fs, { isOpen: oe, setIsOpen: te, setIsAuthenticateModalOpen: se }),
          Ce &&
            e.jsx(zt, {
              type: 'phone',
              isOpen: Ce,
              setIsOpen: se,
              session: t(),
              setShowSuccessAlert: g,
              setRefreshData: ue,
              setIsAuthenticateSMSNumberModalOpen: se,
            }),
        ],
      });
}
export { ys as default };
