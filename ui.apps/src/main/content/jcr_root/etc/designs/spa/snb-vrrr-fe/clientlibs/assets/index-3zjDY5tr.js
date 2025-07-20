import {
  u as ge,
  a as Ie,
  r as n,
  j as e,
  b as Ye,
  F as wt,
  f as It,
  d as at,
  g as Ze,
  m as it,
  D as nt,
  c as Pt,
  e as Et,
  h as Vt,
  i as k,
  k as ze,
  l as dt,
  S as Ge,
  N as ut,
  n as Ot,
  C as At,
  o as Rt,
  p as Lt,
  q as Tt,
  s as ft,
} from './index-D08Q4-XL.js';
import { H as J, B as Te, u as Be, E as Bt, M as Ft, F as qt } from './Error-B3WcaCJh.js';
import {
  M as Ne,
  A as F,
  T as ue,
  c as Ct,
  i as Je,
  a as Qe,
  r as Mt,
  b as Xe,
  d as $e,
  e as Dt,
  v as Ht,
} from './CodeAuthentication-BSb1NMcz.js';
import { T as re, u as Ut } from './useMetadata-BArgd0e8.js';
import { D as Fe, E as Wt, A as $t } from './ErrorModal-NSzco_Rk.js';
import { C as Kt, a as zt } from './CheckboxGroup-Cb184OBQ.js';
const Gt = (a, i, d, o) => {
    var t = {};
    (a.ARIAaccordion = t),
      (t.NS = 'ARIAaccordion'),
      (t.AUTHOR = "Scott O'Hara"),
      (t.VERSION = '3.1.1'),
      (t.LICENSE = 'https://github.com/scottaohara/accessible_accordions/blob/master/LICENSE');
    var l = 'gnb-accordion-trigger',
      h = 'gnb-accordion-heading',
      s = 'gnb-accordion-panel',
      M = 'gnb-accordion-toggleall',
      y = 0;
    (t.create = function () {
      var r,
        c,
        C = 'none',
        u,
        p,
        m,
        f,
        x = i.querySelectorAll('[data-aria-accordion]');
      for (y += 1, f = 0; f < x.length; f++) {
        var v;
        if (
          ((r = x[f]),
          r.hasAttribute('id') || (r.id = 'acc_' + y + '-' + f),
          i.querySelectorAll('#' + r.id + '> li').length
            ? ((c = i.querySelectorAll('#' + r.id + ' li > .' + s)),
              (u = i.querySelectorAll('#' + r.id + ' li > .' + h)))
            : ((c = i.querySelectorAll('#' + r.id + ' > .' + s)), (u = i.querySelectorAll('#' + r.id + ' > .' + h))),
          r.hasAttribute('data-default') && (C = r.getAttribute('data-default')),
          (m = r.hasAttribute('data-constant')),
          r.hasAttribute('data-multi'),
          r.hasAttribute('data-transition'))
        ) {
          var P = r.querySelectorAll('.' + s);
          for (v = 0; v < P.length; v++)
            P[v].setAttribute('style', 'transition: ' + r.getAttribute('data-transition') + 's ease-in-out');
        }
        for (
          t.setupPanels(r.id, c, C, m),
            t.setupHeadingButton(u, o, m),
            i.querySelectorAll('#' + r.id + '> li').length
              ? (p = i.querySelectorAll('#' + r.id + ' li > .' + h + ' .' + l))
              : (p = i.querySelectorAll('#' + r.id + ' > .' + h + ' .' + l)),
            v = 0;
          v < p.length;
          v++
        )
          p[v].addEventListener('click', t.actions), p[v].addEventListener('keydown', t.keytrolls);
      }
    }),
      (t.setupPanels = function (r, c, C, u) {
        var p, m, f, x, v;
        for (p = 0; p < c.length; p++)
          (m = c[p]),
            (f = r + '_panel_' + (p + 1)),
            (x = C),
            (v = u),
            m.setAttribute('id', f),
            b(c[0], !0),
            x !== 'none' &&
              typeof parseInt(x) == 'number' &&
              (x <= 1 ? b(c[0], !1) : x - 1 >= c.length ? b(c[c.length - 1], !1) : b(c[x - 1], !1)),
            ((v && x === 'none') || typeof parseInt(x) != 'number') && b(c[0], !1);
      }),
      (t.setupHeadingButton = function (r, c, C) {
        var u, p, m, f, x, v;
        for (v = 0; v < r.length; v++)
          (u = r[v]),
            (p = u.nextElementSibling.id),
            (m = i.getElementById(p).getAttribute('aria-hidden')),
            (f = i.createElement('button')),
            (x = c[v]),
            (u.innerHTML = ''),
            f.setAttribute('type', 'button'),
            f.setAttribute('aria-controls', p),
            f.setAttribute('id', p + '_trigger'),
            f.classList.add(l),
            m === 'false' ? (g(f, !0), _(f, !0), C && f.setAttribute('aria-disabled', 'true')) : (g(f, !1), _(f, !1)),
            u.appendChild(f),
            f.appendChild(i.createTextNode(x));
      }),
      (t.actions = function (r) {
        var c = this.id.replace(/_panel.*$/g, ''),
          C = i.getElementById(this.getAttribute('aria-controls')),
          u;
        i.querySelectorAll('#' + c + '> li').length
          ? (u = i.querySelectorAll('#' + c + ' li > .' + h + ' .' + l))
          : (u = i.querySelectorAll('#' + c + ' > .' + h + ' .' + l)),
          r.preventDefault(),
          t.togglePanel(r, c, C, u);
      }),
      (t.togglePanel = function (r, c, C, u) {
        var p,
          m,
          f = r.target;
        if (
          f.getAttribute('aria-disabled') !== 'true' &&
          ((p = f.getAttribute('aria-controls')),
          _(f, 'true'),
          f.getAttribute('aria-expanded') === 'true'
            ? (g(f, 'false'), b(C, 'true'))
            : (g(f, 'true'), b(C, 'false'), i.getElementById(c).hasAttribute('data-constant') && S(f, 'true')),
          i.getElementById(c).hasAttribute('data-constant') || !i.getElementById(c).hasAttribute('data-multi'))
        )
          for (m = 0; m < u.length; m++)
            f !== u[m] &&
              (_(u[m], 'false'),
              (p = u[m].getAttribute('aria-controls')),
              S(u[m], 'false'),
              g(u[m], 'false'),
              b(i.getElementById(p), 'true'));
      }),
      (t.toggleAllPanels = function (r) {
        var c, C, u;
        let p = r.target,
          m = r.target.nextElementSibling;
        (C = p.getAttribute('data-open')),
          (u = C == 'true' ? 'false' : 'true'),
          i.querySelectorAll('#' + m.id + '> li').length
            ? (c = i.querySelectorAll('#' + m.id + ' li > .' + h + ' .' + l))
            : (c = i.querySelectorAll('#' + m.id + ' > .' + h + ' .' + l));
        for (var f = 0; f < c.length; f++) {
          let x = c[f],
            v = document.getElementById(x.getAttribute('aria-controls'));
          _(x, 'true'), u === 'false' ? (g(x, 'false'), b(v, 'true')) : (g(x, 'true'), b(v, 'false'));
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
            (i.querySelectorAll('#' + p + '> li').length
              ? (m = i.querySelectorAll('#' + p + ' li > .' + h + ' .' + l))
              : (m = i.querySelectorAll('#' + p + ' > .' + h + ' .' + l)),
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
        let r = i.querySelectorAll('.' + M);
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
    var b = function (r, c) {
        r.setAttribute('aria-hidden', c);
      },
      g = function (r, c) {
        r.setAttribute('aria-expanded', c);
      },
      S = function (r, c) {
        r.setAttribute('aria-disabled', c);
      },
      _ = function (r, c) {
        r.setAttribute('data-current', c);
      };
    t.init();
  },
  Jt = ({
    vehicleName: a,
    id: i,
    isOpen: d,
    setIsOpen: o,
    setRemovedVehicleSuccessMsg: t,
    getVehicleName: l,
    setRefreshData: h,
  }) => {
    const { t: s } = ge(),
      { getSession: M } = Ie(),
      [y, b] = n.useState(!1),
      g = () => {
        o(!1), b(!1);
      },
      S = () => {
        t(!1),
          b(!1),
          J.removeAVehicle(i, { params: { session: M() } })
            .then(() => {
              l(a), g(), t(!0), h(!0);
            })
            .catch((_) => {
              b(!0), console.error(_);
            });
      };
    return (
      n.useEffect(() => {
        const _ = (r) => {
          r.key === 'Escape' && g();
        };
        return (
          d && window.addEventListener('keydown', _),
          () => {
            window.removeEventListener('keydown', _);
          }
        );
      }, [d]),
      e.jsx(Ne, {
        id: `modal-remove-vehicle-${i}`,
        title: s('notifications.removeVehicleModal.title'),
        primaryBtnProps: {
          label: s('notifications.removeVehicleModal.primaryButtonLabel'),
          variant: 'critical',
          onClick: S,
        },
        hasSecondaryBtn: !0,
        secondaryBtnProps: { label: s('notifications.removeVehicleModal.secondaryButtonLabel'), onClick: g },
        hasFooter: !0,
        open: d,
        onClose: g,
        children: e.jsxs(e.Fragment, {
          children: [
            y &&
              e.jsx(F, {
                isOpen: y,
                setIsOpen: b,
                variant: 'inPage',
                type: 'critical',
                description: s('errorsMsg.genericErrMsg'),
              }),
            e.jsx('p', {
              children: e.jsx(re, {
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
  Qt = ({
    vehicle: a,
    handleEditCustomNameButtonClick: i,
    setRemovedVehicleSuccessMsg: d,
    getVehicleName: o,
    setRefreshData: t,
  }) => {
    const { t: l } = ge(),
      [h] = Ye(['language']),
      [s, M] = n.useState(!1),
      { colour: y, customName: b, expiryDate: g, make: S, model: _, plate: r, vin: c, year: C, vehicleId: u } = a,
      p = y && C && S && _,
      m = Ze(y, C, S, _),
      f = Vt(y, C, S, _, b),
      x = (N = 'default') => {
        let O;
        return p ? (O = b ? (N === 'fullCustomName' ? f : b) : m) : (O = r), O;
      },
      v = () => {
        M(!0);
      },
      P = p ? {} : { className: 'custom-disabled' };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs('li', {
          className: 'gnb-accordion-container',
          children: [
            e.jsx('div', { className: 'gnb-accordion-heading', children: e.jsx('h3', { children: x() }) }),
            e.jsxs('div', {
              className: 'left gnb-accordion-panel',
              children: [
                !p && e.jsxs('p', { children: [e.jsx(wt, { icon: It }), ' ', l('warningMsg.unavailableVehicle')] }),
                e.jsxs('p', {
                  ...P,
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
                        ` ${it(c)}`,
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
                    at(g, nt, h.language),
                  ],
                }),
                e.jsxs('div', {
                  children: [
                    e.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: e.jsx(Te, {
                        label: l(
                          b
                            ? 'notifications.customNameModal.edit.primaryButtonLabelAccordion'
                            : 'notifications.customNameModal.add.primaryButtonLabel'
                        ),
                        variant: 'secondary',
                        leftIcon: Pt,
                        size: 'small',
                        onClick: () => i(u),
                        disabled: !p,
                      }),
                    }),
                    e.jsx(Te, {
                      label: l('notifications.removeVehicleModal.primaryButtonLabel'),
                      variant: 'critical secondary',
                      leftIcon: Et,
                      size: 'small',
                      onClick: v,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(Jt, {
          vehicleName: x('fullCustomName'),
          id: u,
          isOpen: s,
          setIsOpen: M,
          setRemovedVehicleSuccessMsg: d,
          getVehicleName: o,
          setRefreshData: t,
        }),
      ],
    });
  },
  Xt = ({
    vehicleInfoList: a,
    setRemovedVehicleSuccessMsg: i,
    getVehicleName: d,
    setRefreshData: o,
    handleEditCustomNameButtonClick: t,
  }) => (
    n.useEffect(() => {
      const l = a.map((h) => {
        let s;
        const { colour: M, customName: y, make: b, model: g, year: S, plate: _ } = h,
          r = Ze(M, S, b, g);
        return M && S && b && g ? (s = y || r) : (s = _), s;
      });
      Gt(window, document, void 0, l);
    }),
    e.jsx('div', {
      className: 'gnb-accordion-pane',
      children: e.jsx('ol', {
        className: 'gnb-accordion-cards',
        'data-aria-accordion': !0,
        'data-multi': !0,
        children: a.map((l) =>
          e.jsx(
            Qt,
            {
              vehicle: l,
              setRemovedVehicleSuccessMsg: i,
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
  Yt = ({ label: a, placeholder: i, maxlength: d, onChange: o, className: t, value: l }) =>
    e.jsxs('div', {
      children: [
        e.jsx('label', { className: 'left', htmlFor: a, children: a }),
        e.jsx('textarea', { className: t, name: a, id: a, value: l, placeholder: i, maxLength: d, onChange: o }),
      ],
    }),
  we = '/etc/designs/spa/snb-vrrr-fe/clientlibs/',
  Zt = ({ isFeedbackModalOpen: a, setIsFeedbackModalOpen: i, setFeedbackModalSuccess: d, scrollToTop: o }) => {
    const { t } = ge(),
      { getSession: l } = Ie(),
      [h, s] = n.useState(0),
      [M, y] = n.useState(!1),
      [b, g] = n.useState(!1),
      [S, _] = n.useState(''),
      { state: r, dispatch: c } = Be(),
      { text: C, selectedReaction: u } = r.feedback;
    n.useEffect(() => {
      J.getAccountDetails({ params: { session: l() } })
        .then((N) => {
          _(N.data.account.accountId);
        })
        .catch((N) => {
          console.log(N);
        });
    }, []),
      n.useEffect(() => {
        const N = (O) => {
          O.key === 'Escape' && m();
        };
        return (
          a && window.addEventListener('keydown', N),
          () => {
            window.removeEventListener('keydown', N);
          }
        );
      }, [a]);
    const p = (N) => {
        J.submitFeedback({
          session: { token: l() },
          feedback: { feedbackId: '', feedbackRating: 0, feedbackComments: '', isFeedbackSkipped: !0, accountId: S },
        })
          .then(() => {
            N === 'discarded' && g(!1),
              i(!1),
              c({
                type: k.addFeedback.all_values_changed,
                payload: { addFeedback: { text: '', selectedReaction: 0 } },
              });
          })
          .catch((O) => {
            console.log(O);
          });
      },
      m = () => {
        p('closed');
      },
      f = () => {
        d(!1),
          J.submitFeedback({
            session: { token: l() },
            feedback: { feedbackId: '', feedbackRating: u, feedbackComments: C, isFeedbackSkipped: !1, accountId: S },
          })
            .then(() => {
              b && (d(!0), o()),
                i(!1),
                c({ type: k.addFeedback.selected_reaction_changed, payload: { addFeedback: { selectedReaction: 0 } } });
            })
            .catch((N) => {
              console.log(N);
            });
      },
      x = (N) => {
        N.target.value ? g(!0) : g(!1),
          s(N.target.value.length),
          c({ type: k.addFeedback.text_changed, payload: { addFeedback: { text: N.target.value } } });
      },
      v = (N) => {
        N && g(!0),
          c({ type: k.addFeedback.selected_reaction_changed, payload: { addFeedback: { selectedReaction: N } } });
      },
      P = () => {
        p('discarded');
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Ne, {
          id: 'feedbackModal',
          title: t('notifications.feedbackModal.title'),
          primaryBtnProps: { label: t('notifications.feedbackModal.primaryButton'), onClick: f, disabled: !u },
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
                                src: we + 'images/face-tired-filled.svg',
                                alt: t('notifications.feedbackModal.dissatisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: we + 'images/face-tired.svg',
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
                                src: we + 'images/face-meh-filled.svg',
                                alt: t('notifications.feedbackModal.neutralReaction'),
                              })
                            : e.jsx('img', {
                                src: we + 'images/face-meh.svg',
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
                                src: we + 'images/face-heart-filled.svg',
                                alt: t('notifications.feedbackModal.satisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: we + 'images/face-grin-hearts.svg',
                                alt: t('notifications.feedbackModal.satisfiedReaction'),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(Yt, {
                className: 'feedback-text-area',
                label: t('notifications.feedbackModal.textAreaLabel'),
                placeholder: t('notifications.feedbackModal.textAreaPlaceHolder'),
                maxlength: 200,
                value: C,
                onChange: x,
              }),
              e.jsxs('div', { className: 'counter', children: [h, '/200'] }),
            ],
          }),
        }),
        M && e.jsx(Fe, { isOpen: M, setIsOpen: y, handleDiscardFormChanges: P }),
      ],
    });
  },
  es = ({
    id: a,
    isChecked: i = !1,
    label: d,
    hasOptIn: o = !1,
    error: t,
    useTrans: l,
    disabled: h = !1,
    withoutControlledLabeled: s = !1,
    onChange: M,
    onClick: y,
  }) => {
    const b = t ? { 'aria-labelledby': `${d}-error` } : {};
    return e.jsxs(e.Fragment, {
      children: [
        y && e.jsx('div', { className: ze('pair', 'on-click'), onClick: y ? () => y() : () => {} }),
        e.jsxs('div', {
          className: o ? 'single-option' : 'pair',
          children: [
            e.jsx('input', {
              type: 'checkbox',
              name: a,
              id: a,
              checked: i,
              ...b,
              'aria-invalid': t,
              disabled: h,
              className: h ? 'disabled' : '',
              onChange: M,
            }),
            l
              ? e.jsx('label', {
                  id: s ? '' : dt(d),
                  htmlFor: a,
                  className: h ? 'disabled' : '',
                  children: e.jsx(re, { i18nKey: l[0], components: l[1] }),
                })
              : e.jsx('label', { id: dt(d), htmlFor: a, className: h ? 'disabled' : '', children: d }),
          ],
        }),
      ],
    });
  },
  ht = ({ checkboxOptions: a, disabledArray: i, onChange: d }) => {
    if (i)
      for (let o = 0; o < i.length; o++) {
        const t = i[o];
        a[o].disabled = t;
      }
    return a.map((o) => {
      const { id: t, label: l, disabled: h, isChecked: s, onClick: M, error: y } = o;
      return e.jsx(es, { id: t, label: l, isChecked: s, disabled: h, onChange: d, error: y, onClick: M }, t);
    });
  };
var Me = {},
  tt = {},
  Ae = {},
  mt;
function St() {
  if (mt) return Ae;
  (mt = 1), Object.defineProperty(Ae, '__esModule', { value: !0 }), (Ae.ProfanityOptions = void 0);
  class a {
    constructor() {
      (this.wholeWord = !0), (this.grawlix = '@#$%&!'), (this.grawlixChar = '*');
    }
  }
  return (Ae.ProfanityOptions = a), Ae;
}
var Se = {},
  st = {},
  pt;
function ts() {
  return (
    pt ||
      ((pt = 1),
      (function (a) {
        Object.defineProperty(a, '__esModule', { value: !0 }),
          (a.CensorType = void 0),
          (function (i) {
            (i[(i.Word = 0)] = 'Word'),
              (i[(i.FirstChar = 1)] = 'FirstChar'),
              (i[(i.FirstVowel = 2)] = 'FirstVowel'),
              (i[(i.AllVowels = 3)] = 'AllVowels');
          })(a.CensorType || (a.CensorType = {}));
      })(st)),
    st
  );
}
var Re = {},
  gt;
function ss() {
  if (gt) return Re;
  (gt = 1), Object.defineProperty(Re, '__esModule', { value: !0 }), (Re.List = void 0);
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
  return (Re.List = a), Re;
}
var bt;
function as() {
  return (
    bt ||
      ((bt = 1),
      (function (a) {
        var i =
            (Se && Se.__createBinding) ||
            (Object.create
              ? function (o, t, l, h) {
                  h === void 0 && (h = l);
                  var s = Object.getOwnPropertyDescriptor(t, l);
                  (!s || ('get' in s ? !t.__esModule : s.writable || s.configurable)) &&
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[l];
                      },
                    }),
                    Object.defineProperty(o, h, s);
                }
              : function (o, t, l, h) {
                  h === void 0 && (h = l), (o[h] = t[l]);
                }),
          d =
            (Se && Se.__exportStar) ||
            function (o, t) {
              for (var l in o) l !== 'default' && !Object.prototype.hasOwnProperty.call(t, l) && i(t, o, l);
            };
        Object.defineProperty(a, '__esModule', { value: !0 }), d(ts(), a), d(ss(), a);
      })(Se)),
    Se
  );
}
var Le = {},
  vt;
function is() {
  if (vt) return Le;
  (vt = 1), Object.defineProperty(Le, '__esModule', { value: !0 }), (Le.escapeRegExp = void 0);
  const a = (i) => i.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (Le.escapeRegExp = a), Le;
}
var Ke = {},
  kt;
function ns() {
  return (
    kt ||
      ((kt = 1),
      Object.defineProperty(Ke, '__esModule', { value: !0 }),
      (Ke.default = [
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
    Ke
  );
}
var yt;
function os() {
  return (
    yt ||
      ((yt = 1),
      (function (a) {
        Object.defineProperty(a, '__esModule', { value: !0 }), (a.profanity = a.Profanity = void 0);
        const i = St(),
          d = as(),
          o = is(),
          t = ns();
        class l {
          constructor(s) {
            (this.options = s || new i.ProfanityOptions()),
              (this.whitelist = new d.List(() => this.buildRegex())),
              (this.blacklist = new d.List(() => this.buildRegex())),
              this.blacklist.addWords(t.default);
          }
          exists(s) {
            return (this.regex.lastIndex = 0), this.regex.test(s);
          }
          censor(s, M = d.CensorType.Word) {
            switch (M) {
              case d.CensorType.Word:
                return s.replace(this.regex, this.options.grawlix);
              case d.CensorType.FirstChar: {
                let y = s;
                return (
                  Array.from(s.matchAll(this.regex)).forEach((b) => {
                    const g = b[0],
                      S = this.options.grawlixChar + g.slice(1, g.length);
                    y = y.replace(g, S);
                  }),
                  y
                );
              }
              case d.CensorType.FirstVowel:
              case d.CensorType.AllVowels: {
                const y = new RegExp('[aeiou]', M === d.CensorType.FirstVowel ? 'i' : 'ig');
                let b = s;
                return (
                  Array.from(s.matchAll(this.regex)).forEach((g) => {
                    const S = g[0],
                      _ = S.replace(y, this.options.grawlixChar);
                    b = b.replace(S, _);
                  }),
                  b
                );
              }
              default:
                throw new Error(`Invalid replacement type: "${M}"`);
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
              M = this.whitelist.words.map(o.escapeRegExp),
              y = `${this.options.wholeWord ? '\\b' : ''}(${s.join('|')})${this.options.wholeWord ? '\\b' : ''}`,
              b = this.whitelist.empty ? '' : `(?!${M.join('|')})`;
            this.regex = new RegExp(b + y, 'ig');
          }
        }
        (a.Profanity = l), (a.profanity = new l()), (a.default = a.profanity);
      })(tt)),
    tt
  );
}
var xt;
function rs() {
  return (
    xt ||
      ((xt = 1),
      (function (a) {
        var i =
            (Me && Me.__createBinding) ||
            (Object.create
              ? function (o, t, l, h) {
                  h === void 0 && (h = l);
                  var s = Object.getOwnPropertyDescriptor(t, l);
                  (!s || ('get' in s ? !t.__esModule : s.writable || s.configurable)) &&
                    (s = {
                      enumerable: !0,
                      get: function () {
                        return t[l];
                      },
                    }),
                    Object.defineProperty(o, h, s);
                }
              : function (o, t, l, h) {
                  h === void 0 && (h = l), (o[h] = t[l]);
                }),
          d =
            (Me && Me.__exportStar) ||
            function (o, t) {
              for (var l in o) l !== 'default' && !Object.prototype.hasOwnProperty.call(t, l) && i(t, o, l);
            };
        Object.defineProperty(a, '__esModule', { value: !0 }), d(os(), a), d(St(), a);
      })(Me)),
    Me
  );
}
var Nt = rs();
const _t = ({ listContent: a }) =>
    e.jsx('ul', { children: a.map((i, d) => e.jsx('li', { children: e.jsx('p', { children: i.item }) }, d)) }),
  ls = ({
    isAddVehicleOpen: a,
    setIsAddVehicleOpen: i,
    setAddedVehicleSuccessMsg: d,
    getVehicleName: o,
    vehicleInfoList: t,
    setRefreshData: l,
    setFirstVehicleAdded: h,
  }) => {
    const { t: s } = ge(),
      { getSession: M, logout: y } = Ie(),
      [b] = Ye(['session', 'language']),
      g = b.language,
      [S, _] = n.useState({
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
      [r, c] = n.useState(''),
      [C, u] = n.useState(!1),
      [p, m] = n.useState(!1),
      [f, x] = n.useState(!1),
      [v, P] = n.useState(!1),
      [N, O] = n.useState(!1),
      [Y, U] = n.useState(!0),
      [Q, W] = n.useState(!1),
      [D, H] = n.useState(!1),
      [$, K] = n.useState(!1),
      [L, A] = n.useState(!1),
      [Z, q] = n.useState(!1),
      [ee, te] = n.useState(!1),
      [fe, le] = n.useState(!0),
      { state: oe, dispatch: I } = Be(),
      {
        vin: R,
        licencePlate: T,
        customName: X,
        hasInvalidVin: be,
        hasInvalidLicencePlate: he,
        hasNonRegisteredLicencePlate: Pe,
        hasInvalidCustomName: ce,
      } = oe.addVehicle;
    n.useEffect(() => {
      U(!(R && T)), le(!X);
    }, [R, T, X]),
      n.useEffect(() => {
        r.length > 0 &&
          (m(!0),
          J.getAVehicle(r, { params: { session: M(), lang: g } })
            .then((j) => {
              _(j.data.vehicles), m(!1), A(!1), q(!0);
            })
            .catch((j) => {
              A(!1), j.response?.status === 403 && y();
            }));
      }, [r]),
      n.useEffect(() => {
        S.vehicleId.length > 0 && (q(!0), i(!1));
      }, [S]),
      n.useEffect(() => {
        const j = (B) => {
          B.key === 'Escape' && (f ? i(!0) : D ? (u(!0), i(!0)) : (i(!1), se()));
        };
        return (
          a && (f || !f) && window.addEventListener('keydown', j),
          () => {
            window.removeEventListener('keydown', j);
          }
        );
      }, [a, f, D]),
      n.useEffect(() => {
        const j = (B) => {
          const Oe = B.key;
          Oe === 'Escape' && $ ? (u(!0), q(!0)) : Oe === 'Escape' && !$ && (q(!1), se());
        };
        return (
          Z && window.addEventListener('keydown', j),
          () => {
            window.removeEventListener('keydown', j);
          }
        );
      }, [Z, $]);
    const se = () => {
        I({
          type: k.addVehicle.all_values_and_errors_changed,
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
          U(!0),
          W(!1),
          P(!1),
          te(!1),
          le(!0),
          l(!0),
          O(!1),
          H(!1),
          K(!1);
      },
      w = (j) => t.some((B) => j.trim().toLowerCase() === B.plate.trim().toLowerCase()),
      E = () => {
        R &&
          T &&
          (I({ type: k.addVehicle.vin_error_changed, payload: { addVehicle: { hasInvalidVin: !Je(R) } } }),
          I({
            type: k.addVehicle.invalid_licence_plate_error_changed,
            payload: { addVehicle: { hasInvalidLicencePlate: !Qe(T) } },
          }),
          P(w(T)),
          I({
            type: k.addVehicle.non_registered_licence_plate_error_changed,
            payload: { addVehicle: { hasNonRegisteredLicencePlate: !1 } },
          }),
          Je(R) &&
            Qe(T) &&
            !w(T) &&
            (A(!0),
            I({ type: k.addVehicle.vin_error_changed, payload: { addVehicle: { hasInvalidVin: !1 } } }),
            I({
              type: k.addVehicle.invalid_licence_plate_error_changed,
              payload: { addVehicle: { hasInvalidLicencePlate: !1 } },
            }),
            J.addAVehicle({ session: { token: M() }, vehicle: { plate: T, vin: R }, lang: g })
              .then((j) => {
                c(j.data.vehicleId), W(!1), P(!1), U(!1), A(!1);
              })
              .catch((j) => {
                A(!1),
                  j.response.status === 404
                    ? (I({
                        type: k.addVehicle.non_registered_licence_plate_error_changed,
                        payload: { addVehicle: { hasNonRegisteredLicencePlate: !0 } },
                      }),
                      U(!0))
                    : (O(!0), console.error(j));
              })));
      },
      z = () => {
        const j = Nt.profanity.exists(X);
        X && j
          ? I({
              type: k.addVehicle.invalid_custom_name_error_changed,
              payload: { addVehicle: { hasInvalidCustomName: 'profanity' } },
            })
          : Xe(X)
          ? !j &&
            Xe(X) &&
            S &&
            (I({
              type: k.addVehicle.invalid_custom_name_error_changed,
              payload: { addVehicle: { hasInvalidCustomName: '' } },
            }),
            A(!0),
            J.updateAVehicle({
              session: { token: M() },
              vehicle: { vehicleId: r, plate: T, vin: R, customName: X.trim() },
            })
              .then(() => {
                A(!1), q(!1), o(X.trim()), d(!0), t.length === 0 && h(!0), U(!0), W(!1), se();
              })
              .catch((B) => {
                A(!1), O(!0), console.error(B);
              }))
          : I({
              type: k.addVehicle.invalid_custom_name_error_changed,
              payload: { addVehicle: { hasInvalidCustomName: 'invalid-custom-name' } },
            });
      },
      ie = (j) => {
        d(!1), W(!!j);
      },
      G = () => {
        Q || R || T ? u(!0) : (i(!1), se(), A(!1));
      },
      ve = (j) => {
        const B = Mt(j.target.value);
        ie(B), I({ type: k.addVehicle.vin_changed, payload: { addVehicle: { vin: B } } });
      },
      et = (j) => {
        ie(j.target.value),
          I({ type: k.addVehicle.licence_plate_changed, payload: { addVehicle: { licencePlate: j.target.value } } });
      },
      _e = () => {
        let j;
        return he ? (j = s('errorsMsg.invalidLicence')) : Pe ? (j = s('errorsMsg.nonregisteredLicence')) : (j = ''), j;
      },
      ae = (j) => {
        ke(j.target.value),
          I({ type: k.addVehicle.custom_name_changed, payload: { addVehicle: { customName: j.target.value } } });
      },
      ke = (j) => {
        const B = j.length > 0;
        te(B);
      },
      { colour: ne, make: ye, model: xe, year: je, vin: me, plate: Ee, expiryDate: de } = S,
      qe = Ze(ne, je, ye, xe),
      De = () => {
        o(qe);
      },
      He = () => {
        ee ? u(!0) : (De(), q(!1), se(), A(!1), d(!0), t.length === 0 && h(!0));
      },
      Ue = () => {
        i(!1), q(!1), se(), A(!1), Z && !a && (d(!0), t.length === 0 && h(!0), De());
      },
      We = (j) => {
        const B = j.key;
        B !== 'Escape' && (Q || R || T) ? H(!0) : B !== 'Escape' && !Q && H(!1);
      },
      Ve = (j) => {
        const B = j.key;
        B !== 'Escape' && ee ? K(!0) : B !== 'Escape' && !ee && K(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Ne, {
          id: 'add-vehicle-modal',
          title: s('notifications.addVehicleModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: s('notifications.addVehicleModal.primaryButton.add'),
            onClick: E,
            disabled: Y || L,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('notifications.addVehicleModal.secondaryButton'), onClick: G },
          open: a && !Z,
          onClose: G,
          children:
            L || p
              ? e.jsx(Ge, { inModal: !0, size: 'lg' })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs('p', {
                      children: [e.jsx('span', { className: 'required', children: '*' }), ' ', s('disclaimer')],
                    }),
                    e.jsx('p', { children: s('notifications.addVehicleModal.form.title') }),
                    v &&
                      e.jsx(F, {
                        isOpen: v,
                        setIsOpen: P,
                        variant: 'inPage',
                        type: 'critical',
                        description: s('errorsMsg.duplicatedVehicle'),
                      }),
                    N &&
                      e.jsx(F, {
                        isOpen: N,
                        setIsOpen: O,
                        variant: 'inPage',
                        type: 'critical',
                        description: s('errorsMsg.genericErrMsg'),
                      }),
                    e.jsx(ue, {
                      type: 'text',
                      label: s('notifications.addVehicleModal.form.vinLabelInput'),
                      id: 'vin',
                      required: !0,
                      value: R,
                      maxlength: 6,
                      onChange: ve,
                      error: be ? s('errorsMsg.invalidVin') : '',
                      hasTooltipModal: !0,
                      tooltipBody: e.jsx(_t, {
                        listContent: s('notifications.tooltip.vin.listOne', { returnObjects: !0 }),
                      }),
                      tooltipTitle: s('notifications.tooltip.vin.title'),
                      isTooltipModalOpen: f,
                      setIsTooltipModalOpen: x,
                      onKeyUp: We,
                    }),
                    e.jsx(ue, {
                      type: 'text',
                      label: s('notifications.addVehicleModal.form.licenceLabelInput'),
                      id: 'licence-plate',
                      required: !0,
                      value: T,
                      onChange: et,
                      error: _e(),
                      onKeyUp: We,
                    }),
                  ],
                }),
        }),
        e.jsx(Ne, {
          id: 'add-custom-name-modal',
          title: s('notifications.addVehicleModal.customName.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: s('notifications.addVehicleModal.primaryButton.save'),
            onClick: z,
            disabled: fe || L,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('notifications.addVehicleModal.customName.skip'), onClick: He },
          open: Z && !a,
          onClose: He,
          children: L
            ? e.jsx(Ge, { inModal: !0, size: 'lg' })
            : e.jsxs(e.Fragment, {
                children: [
                  N &&
                    e.jsx(F, {
                      isOpen: N,
                      setIsOpen: O,
                      variant: 'inPage',
                      type: 'critical',
                      description: s('errorsMsg.genericErrMsg'),
                    }),
                  e.jsxs('p', {
                    children: [
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.name'), ':'] }),
                      ` ${qe}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.vin'), ':'] }),
                      ` ${it(me)}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.licence'), ':'] }),
                      ` ${Ee}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.date'), ':'] }),
                      at(de, nt, g),
                    ],
                  }),
                  e.jsx(ue, {
                    type: 'text',
                    label: s('notifications.vehicleInfo.addCustomLabelInput'),
                    helperText: s('notifications.vehicleInfo.helperText'),
                    id: 'custom-name',
                    value: X,
                    onChange: ae,
                    error: ce ? Ct(ce, s('errorsMsg.customNameWithProfanity'), s('errorsMsg.invalidCustomName')) : '',
                    onKeyUp: Ve,
                  }),
                ],
              }),
        }),
        e.jsx(Fe, { isOpen: C, setIsOpen: u, handleDiscardFormChanges: Ue }),
      ],
    });
  },
  cs = ({ isOptOutPaperModalOpen: a, setIsOptOutPaperModalOpen: i, setStopPaperSuccessMsg: d }) => {
    const { t: o } = ge(),
      { getSession: t } = Ie(),
      [l, h] = n.useState(!1),
      [s, M] = n.useState(!1),
      [y, b] = n.useState(!1),
      [g, S] = n.useState(!1),
      [_, r] = n.useState(!0),
      [c, C] = n.useState(!1),
      [u, p] = n.useState(!1),
      [m, f] = n.useState(''),
      [x, v] = n.useState(!1),
      [P, N] = n.useState(!1),
      [O, Y] = n.useState(!1),
      [U, Q] = n.useState(!1),
      { state: W, dispatch: D } = Be(),
      {
        givenNames: H,
        lastName: $,
        vin: K,
        licencePlate: L,
        hasInvalidVin: A,
        hasInvalidLicencePlate: Z,
        hasInvalidGivenNames: q,
        hasInvalidLastName: ee,
      } = W.stopPaperReminder;
    n.useEffect(() => {
      const w = (E) => {
        E.key === 'Escape' && (l ? i(!0) : g ? (M(!0), i(!0)) : te());
      };
      return (
        a && (l || !l) && window.addEventListener('keydown', w),
        () => {
          window.removeEventListener('keydown', w);
        }
      );
    }, [a, l, g]),
      n.useEffect(() => {
        (() => {
          J.getAccountDetails({ params: { session: t() } })
            .then((E) => {
              const z = E?.data?.account?.email;
              f(z);
            })
            .catch((E) => {
              console.error(E);
            });
        })();
      }, [m]),
      n.useEffect(() => {
        I();
      }, [W.stopPaperReminder]);
    const te = () => {
        D({
          type: k.stopPaperReminders.all_values_and_errors_changed,
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
          i(!1),
          b(!1),
          C(!1),
          p(!1),
          Y(!1),
          Q(!1),
          S(!1);
      },
      fe = () => {
        y || H || $ || K || L ? M(!0) : te();
      },
      le = () => {
        d(!1);
        const w = L && Qe(L),
          E = K && Je(K),
          z = H && $e(H),
          ie = $ && $e($);
        D({
          type: k.stopPaperReminders.all_errors_changed,
          payload: {
            stopPaperReminder: {
              hasInvalidLicencePlate: !w,
              hasInvalidVin: !E,
              hasInvalidGivenNames: !z,
              hasInvalidLastName: !ie,
            },
          },
        }),
          N(!0),
          Y(!1),
          Q(!1),
          H &&
            $ &&
            K &&
            L &&
            E &&
            w &&
            z &&
            ie &&
            (v(!0),
            J.stopPaperReminders({ session: { token: t() }, givenNames: H, lastName: $, vin: K, plate: L, email: m })
              .then(() => {
                i(!1), d(!0), te(), v(!1);
              })
              .catch((G) => {
                console.error(G), v(!1), G.response.status === 400 && Q(!0), G.response.status === 500 && Y(!0);
              }));
      },
      oe = (w) => {
        b(!!w);
      },
      I = () => {
        const w = H && $ && K && L;
        r(P ? !(w && !Z && !A && !q && !ee) : !w);
      },
      R = () => {
        C(!0), p(!1);
      },
      T = () => {
        C(!1), p(!0);
      },
      X = (w) => {
        D({
          type: k.stopPaperReminders.given_name_changed,
          payload: { stopPaperReminder: { givenNames: w.target.value } },
        }),
          P &&
            D({
              type: k.stopPaperReminders.given_name_error_changed,
              payload: { stopPaperReminder: { hasInvalidGivenNames: !$e(w.target.value) } },
            }),
          oe(w.target.value);
      },
      be = (w) => {
        D({
          type: k.stopPaperReminders.last_name_changed,
          payload: { stopPaperReminder: { lastName: w.target.value } },
        }),
          P &&
            D({
              type: k.stopPaperReminders.last_name_error_changed,
              payload: { stopPaperReminder: { hasInvalidLastName: !$e(w.target.value) } },
            }),
          oe(w.target.value);
      },
      he = (w) => {
        const E = Mt(w.target.value);
        D({ type: k.stopPaperReminders.vin_changed, payload: { stopPaperReminder: { vin: E } } }),
          P &&
            D({
              type: k.stopPaperReminders.vin_error_changed,
              payload: { stopPaperReminder: { hasInvalidVin: !Je(E) } },
            }),
          oe(E);
      },
      Pe = (w) => {
        D({
          type: k.stopPaperReminders.licence_plate_changed,
          payload: { stopPaperReminder: { licencePlate: w.target.value } },
        }),
          P &&
            D({
              type: k.stopPaperReminders.licence_plate_error_changed,
              payload: { stopPaperReminder: { hasInvalidLicencePlate: !Qe(w.target.value) } },
            }),
          oe(w.target.value);
      },
      ce = (w) => {
        const { givenNames: E, lastName: z, vin: ie, licencePlate: G } = W.stopPaperReminder,
          ve = w.key;
        ve !== 'Escape' && (y || E || z || ie || G) ? S(!0) : ve !== 'Escape' && !y && S(!1);
      },
      se = () => {
        i(!1), te();
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Ne, {
          id: 'opt-out-of-paper-modal',
          title: o('notifications.optOutPaperModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: o('notifications.optOutPaperModal.primaryButtonLabel'),
            onClick: le,
            disabled: _ || x,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: o('notifications.optOutPaperModal.secondaryButtonLabel'), onClick: fe },
          open: a,
          onClose: fe,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', o('disclaimer')],
              }),
              e.jsx('p', { children: o('notifications.optOutPaperModal.form.descriptionOne') }),
              e.jsx('p', { children: o('notifications.optOutPaperModal.form.descriptionTwo') }),
              O &&
                e.jsx(F, {
                  isOpen: O,
                  setIsOpen: Y,
                  variant: 'inPage',
                  type: 'critical',
                  description: o('errorsMsg.genericErrMsg'),
                }),
              U &&
                e.jsx(F, {
                  isOpen: U,
                  setIsOpen: Q,
                  variant: 'inPage',
                  type: 'critical',
                  description: o('errorsMsg.gBizFailErrorMsg'),
                }),
              e.jsx(ue, {
                type: 'text',
                label: o('notifications.optOutPaperModal.form.givenNames.label'),
                id: 'given-name',
                required: !0,
                value: H,
                onChange: X,
                maxlength: ut,
                error: (c || u) && q ? o('errorsMsg.invalidGivenNames') : '',
                onKeyUp: ce,
              }),
              e.jsx(ue, {
                type: 'text',
                label: o('notifications.optOutPaperModal.form.lastName.label'),
                id: 'last-name',
                required: !0,
                value: $,
                onChange: be,
                maxlength: ut,
                error: (c || u) && ee ? o('errorsMsg.invalidLastName') : '',
                onKeyUp: ce,
              }),
              e.jsx(ue, {
                type: 'text',
                label: o('notifications.optOutPaperModal.form.vin.label'),
                id: 'vin-number',
                required: !0,
                value: K,
                maxlength: 6,
                onChange: he,
                error: (c || u) && A ? o('errorsMsg.invalidVin') : '',
                hasTooltipModal: !0,
                tooltipBody: e.jsx(_t, { listContent: o('notifications.tooltip.vin.listOne', { returnObjects: !0 }) }),
                tooltipTitle: o('notifications.tooltip.vin.title'),
                isTooltipModalOpen: l,
                setIsTooltipModalOpen: h,
                onFocus: R,
                onBlur: T,
                onKeyUp: ce,
              }),
              e.jsx(ue, {
                type: 'text',
                label: o('notifications.optOutPaperModal.form.licence.label'),
                id: 'licence-plate',
                required: !0,
                value: L,
                onChange: Pe,
                error: (c || u) && Z ? o('errorsMsg.invalidLicence') : '',
                onFocus: R,
                onBlur: T,
                onKeyUp: ce,
              }),
            ],
          }),
        }),
        e.jsx(Fe, { isOpen: s, setIsOpen: M, handleDiscardFormChanges: se }),
      ],
    });
  },
  ds = ({ isOpen: a, setIsOpen: i, setIsAuthenticateModalOpen: d }) => {
    const { t: o } = ge(),
      [t, l] = n.useState(!0),
      [h, s] = n.useState(''),
      [M, y] = n.useState(!1),
      [b, g] = n.useState(!1),
      [S, _] = n.useState(''),
      [r, c] = n.useState([{ value: '', checked: !1 }]),
      C = () => {
        b ? y(!0) : i(!1);
      },
      u = (f) => {
        Dt(f, l),
          f.target.value ? g(!0) : g(!1),
          s(f.target.value),
          Ht(f.target.value, _, o('errorsMsg.invalidSMSNumber'));
      },
      p = () => {
        i(!1), g(!1);
      },
      m = () => {
        d(!0), i(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Ne, {
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
              e.jsx(ue, {
                type: 'tel',
                label: o('notifications.textMsgRemindersModal.form.label'),
                value: h,
                onChange: u,
                error: S,
                required: !0,
              }),
              e.jsx(Kt, {
                title: '',
                valueArray: ['text-reminder'],
                selectedOptions: r,
                setSelectedOptions: c,
                children: e.jsx(zt, {
                  id: 'text-reminder',
                  label: o('notifications.textMsgRemindersModal.form.checkboxText'),
                }),
              }),
            ],
          }),
        }),
        e.jsx(Fe, { isOpen: M, setIsOpen: y, handleDiscardFormChanges: p }),
      ],
    });
  },
  jt = ({ title: a, children: i, hasOptIn: d, error: o }) =>
    e.jsx('div', {
      className: ze('gnb-form-input', o ? 'error' : ''),
      children: e.jsxs('fieldset', {
        className: ze('gnb-checkboxes', { 'fieldset-container': d }),
        children: [
          e.jsx('legend', { className: ze('left', { 'sr-only': d }), children: a }),
          o && e.jsx(Bt, { error: o }),
          i,
        ],
      }),
    }),
  us = ({
    vehicleId: a,
    isCustomNameModalOpen: i,
    setIsCustomNameModalOpen: d,
    setEditedCustomNameSuccessMsg: o,
    setAddedCustomNameSuccessMsg: t,
    getVehicleName: l,
    setRefreshData: h,
  }) => {
    const { t: s } = ge(),
      { getSession: M } = Ie(),
      [y] = Ye(['session', 'language']),
      [b, g] = n.useState(!1),
      [S, _] = n.useState(!1),
      [r, c] = n.useState(!1),
      [C, u] = n.useState(!0),
      [p, m] = n.useState(!1),
      { state: f, dispatch: x } = Be(),
      { customName: v, hasInvalidCustomName: P } = f.addCustomName,
      { vehicleList: N } = f.common,
      O = Ot(N.find((I) => I.vehicleId === a)),
      { colour: Y, customName: U, expiryDate: Q, make: W, model: D, plate: H, vin: $, year: K } = O,
      L = U ? 'edit' : 'add',
      A = U && L === 'edit' ? U : '',
      Z = Ze(Y, K, W, D);
    n.useEffect(() => {
      x({ type: k.addCustomName.custom_name_changed, payload: { addCustomName: { customName: A } } });
    }, [A]),
      n.useEffect(() => {
        const I = (R) => {
          const T = R.key;
          T === 'Escape' && r ? (g(!0), d(!0)) : T === 'Escape' && !r && q();
        };
        return (
          i && window.addEventListener('keydown', I),
          () => {
            window.removeEventListener('keydown', I);
          }
        );
      }, [i, r]);
    const q = () => {
        d(!1),
          _(!1),
          u(!0),
          m(!1),
          x({
            type: k.addCustomName.all_values_and_errors_changed,
            payload: { addCustomName: { customName: A, hasInvalidCustomName: '' } },
          });
      },
      ee = () => {
        S
          ? g(!0)
          : (d(!1),
            m(!1),
            x({
              type: k.addCustomName.all_values_and_errors_changed,
              payload: { addCustomName: { customName: A, hasInvalidCustomName: '' } },
            }));
      },
      te = () => {
        o(!1),
          t(!1),
          m(!1),
          Nt.profanity.exists(v)
            ? x({
                type: k.addCustomName.invalid_custom_name_error_changed,
                payload: { addCustomName: { hasInvalidCustomName: 'profanity' } },
              })
            : Xe(v)
            ? (x({
                type: k.addCustomName.invalid_custom_name_error_changed,
                payload: { addCustomName: { hasInvalidCustomName: '' } },
              }),
              J.updateAVehicle({
                session: { token: M() },
                vehicle: { vehicleId: a, plate: H, vin: $, customName: v.trim(), expiryDate: Q },
              })
                .then(() => {
                  l(v.trim()), L === 'add' ? t(!0) : o(!0), h(!0), q();
                })
                .catch((R) => {
                  m(!0), console.error(R);
                }))
            : x({
                type: k.addCustomName.invalid_custom_name_error_changed,
                payload: { addCustomName: { hasInvalidCustomName: 'invalid-custom-name' } },
              });
      },
      fe = () => {
        q();
      },
      le = (I) => {
        I.target.value !== A ? (_(!0), (!P || (P && Xe(I.target.value))) && u(!1)) : (_(!1), u(!1)),
          x({ type: k.addCustomName.custom_name_changed, payload: { addCustomName: { customName: I.target.value } } });
      },
      oe = (I) => {
        const R = I.key;
        R !== 'Escape' && S ? c(!0) : R !== 'Escape' && !S && c(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Ne, {
          id: `${L === 'add' ? 'add' : 'edit'}-custom-name-modal-${a}`,
          title: s(
            L === 'add' ? 'notifications.customNameModal.add.title' : 'notifications.customNameModal.edit.title'
          ),
          hasFooter: !0,
          primaryBtnProps: {
            label: s(
              L === 'add'
                ? 'notifications.customNameModal.add.primaryButtonLabel'
                : 'notifications.customNameModal.edit.primaryButtonLabelModal'
            ),
            onClick: te,
            disabled: C,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('notifications.customNameModal.secondaryButtonLabel'), onClick: ee },
          open: i,
          onClose: ee,
          children: e.jsxs(e.Fragment, {
            children: [
              p &&
                e.jsx(F, {
                  isOpen: p,
                  setIsOpen: m,
                  variant: 'inPage',
                  type: 'critical',
                  description: s('errorsMsg.genericErrMsg'),
                }),
              e.jsxs('p', {
                children: [
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.name'), ':'] }),
                  ` ${Z}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.vin'), ':'] }),
                  ` ${it($)}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.licence'), ':'] }),
                  ` ${H}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.date'), ':'] }),
                  at(Q, nt, y.language),
                ],
              }),
              e.jsx(ue, {
                type: 'text',
                label: s(
                  L === 'add'
                    ? 'notifications.vehicleInfo.addCustomLabelInput'
                    : 'notifications.vehicleInfo.editCustomLabelInput'
                ),
                helperText: s('notifications.vehicleInfo.helperText'),
                id: 'custom-name',
                value: v,
                onChange: le,
                error: P ? Ct(P, s('errorsMsg.customNameWithProfanity'), s('errorsMsg.invalidCustomName')) : '',
                maxlength: At,
                onKeyUp: oe,
              }),
            ],
          }),
        }),
        e.jsx(Fe, { isOpen: b, setIsOpen: g, handleDiscardFormChanges: fe }),
      ],
    });
  };
function vs() {
  const { t: a, i18n: i } = ge(),
    d = Rt(),
    { renderMetadata: o } = Ut(),
    { getSession: t, refreshSessionCookie: l, logout: h } = Ie(),
    s = n.useRef(null),
    [M, y] = n.useState(!1),
    [b, g] = n.useState(!1),
    [S, _] = n.useState(!1),
    [r, c] = n.useState(!1),
    [C, u] = n.useState(!1),
    [p, m] = n.useState(!1),
    [f, x] = n.useState(!1),
    [v, P] = n.useState(!1),
    [N, O] = n.useState(!1),
    [Y, U] = n.useState(!0),
    [Q, W] = n.useState(!1),
    [D, H] = n.useState(!1),
    [$, K] = n.useState(!1),
    [L, A] = n.useState(!1),
    [Z, q] = n.useState(!1),
    [ee, te] = n.useState(!1),
    [fe, le] = n.useState(''),
    [oe, I] = n.useState(!1),
    [R, T] = n.useState(!1),
    [X, be] = n.useState(!1),
    [he, Pe] = n.useState(''),
    [ce, se] = n.useState(!0),
    [w, E] = n.useState(!1),
    [z, ie] = n.useState(!0),
    [G, ve] = Ye(['session', 'language', 'sessionExpiry']),
    [et] = Lt(),
    { state: _e, dispatch: ae } = Be(),
    {
      hasEmailReminders: ke,
      hasSMSReminders: ne,
      hasLeadTime2Weeks: ye,
      hasLeadTime4Weeks: xe,
      hasLeadTime6Weeks: je,
      showSaveChangesErrors: me,
    } = _e.notifications,
    { phoneNumber: Ee } = _e.accountSettings,
    { vehicleList: de } = _e.common,
    qe = NaN;
  n.useEffect(() => {
    const V = et.get('l');
    V === 'f'
      ? (i.changeLanguage('fr-CA'), ve('language', 'fr-CA'))
      : V === 'e'
      ? (i.changeLanguage('en-CA'), ve('language', 'en-CA'))
      : Tt(G.language);
  }, []),
    n.useEffect(() => {
      o(), E(!0);
    }, [G.language]),
    n.useEffect(() => {
      w &&
        (E(!1),
        te(ee),
        ft(G)
          ? (J.getAccountDetails({ params: { session: t() } })
              .then((V) => {
                ae({
                  type: k.accountSettings.phone_number_changed,
                  payload: {
                    accountSettings: { phoneNumber: V.data?.account?.smsNumber ? V.data?.account?.smsNumber : '' },
                  },
                }),
                  console.log('Account Details Received', V.data);
              })
              .catch((V) => {
                console.error(V);
              }),
            me
              ? se(!1)
              : J.getReminderDetails({ params: { session: t() } })
                  .then((V) => {
                    l(t()), se(!1);
                    const {
                        isEmailActive: pe,
                        isTextActive: Ce,
                        isLeadTime2wksActive: ot,
                        isLeadTime4wksActive: rt,
                        isLeadTime6wksActive: lt,
                      } = V.data.reminderPreference,
                      ct = !pe && !ot && !rt && !lt;
                    ae({
                      type: k.notification.init_reminder_options,
                      payload: {
                        notification: {
                          hasEmailReminders: !!(ct || pe),
                          hasSMSReminders: !!Ce,
                          hasLeadTime2Weeks: !!(ct || ot),
                          hasLeadTime4Weeks: !!rt,
                          hasLeadTime6Weeks: !!lt,
                        },
                      },
                    });
                  })
                  .catch((V) => {
                    console.log(V), se(!1), q(!0);
                  }),
            ie(!0),
            J.getAllVehicles({ params: { session: t(), lang: G.language } })
              .then((V) => {
                console.log('Vehicle List received', V.data),
                  ie(!1),
                  ae({ type: k.common.vehicle_list_changed, payload: { common: { vehicleList: V.data.vehicles } } });
              })
              .catch((V) => {
                ie(!1), V.response?.status === 403 ? h() : q(!0);
              }))
          : h(!0));
    }, [w]),
    n.useEffect(() => {
      de.length > 0 ? U(!1) : U(!0);
    }, [de]),
    n.useEffect(() => {
      p &&
        S &&
        setTimeout(() => {
          K(!0), _(!1), A(!0);
        }, qe),
        p && (O(!1), x(!1), P(!1));
    }, [p, S, L]),
    n.useEffect(() => {
      N && (m(!1), x(!1), P(!1), A(!1));
    }, [N]),
    n.useEffect(() => {
      f && (m(!1), O(!1), P(!1));
    }, [f]),
    n.useEffect(() => {
      v && (m(!1), O(!1), x(!1));
    }, [v]);
  const De = () => {
      s && s.current && s.current.scrollIntoView({ behavior: 'smooth' });
    },
    He = () => {
      s && s.current && s.current.scrollIntoView({ behavior: 'smooth' });
    },
    Ue = (V) => {
      const {
        target: { name: pe, checked: Ce },
      } = V;
      (({ ..._e.notifications }),
      pe === 'email' &&
        ae({
          type: k.notification.email_reminder_option_changed,
          payload: { notification: { hasEmailReminders: Ce } },
        })),
        pe === 'text-message' &&
          ae({ type: k.notification.text_reminder_option_changed, payload: { notification: { hasSMSReminders: Ce } } }),
        pe === 'two-week' &&
          ae({
            type: k.notification.reminder_freq_2_weeks_option_changed,
            payload: { notification: { hasLeadTime2Weeks: Ce } },
          }),
        pe === 'four-week' &&
          ae({
            type: k.notification.reminder_freq_4_weeks_option_changed,
            payload: { notification: { hasLeadTime4Weeks: Ce } },
          }),
        pe === 'six-week' &&
          ae({
            type: k.notification.reminder_freq_6_weeks_option_changed,
            payload: { notification: { hasLeadTime6Weeks: Ce } },
          }),
        r && g(!1);
    },
    We = () => {
      ft(G) || h(!0),
        c(!1),
        g(!1),
        (ke || ne) && (!ne || (ne && Ee)) && (ye || xe || je) && de.length > 0
          ? (be(!0),
            ae({
              type: k.notification.showSaveChangesErrors,
              payload: { notification: { showSaveChangesErrors: !1 } },
            }),
            J.updateReminderDetails({
              session: { token: t() },
              reminderPreference: {
                isEmailActive: !!ke,
                isTextActive: !!ne,
                isLeadTime2wksActive: !!ye,
                isLeadTime4wksActive: !!xe,
                isLeadTime6wksActive: !!je,
              },
            })
              .then(() => {
                E(!0), g(!0), He();
              })
              .catch((V) => {
                c(!0), console.error(V);
              })
              .finally(() => {
                be(!1);
              }),
            be(!0))
          : ae({
              type: k.notification.showSaveChangesErrors,
              payload: { notification: { showSaveChangesErrors: !0 } },
            });
    },
    Ve = (V) => {
      Pe(V);
    },
    j = () => {
      q(!1), h();
    },
    B = (V) => {
      le(V), I(!0);
    },
    Oe = () => {
      d('/account-settings', { state: { showChangePhoneModal: !0 } });
    };
  return ce
    ? e.jsx('main', { className: 'page-content', children: e.jsx(Ge, { size: 'lg' }) })
    : e.jsxs(e.Fragment, {
        children: [
          e.jsx(Ft, {
            showCart: !1,
            accountOptions: a('mainNavigation.accountOptionsSignIn.options', { returnObjects: !0 }),
            signedIn: !0,
            showSearch: !1,
          }),
          e.jsxs('main', {
            ref: s,
            className: 'page-content',
            children: [
              M &&
                e.jsx(F, {
                  isOpen: M,
                  setIsOpen: y,
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
                    b &&
                      e.jsx(F, {
                        isOpen: b,
                        setIsOpen: g,
                        variant: 'inPage',
                        type: 'success',
                        description: a('notifications.toastMessages.saveChangesSuccess'),
                      }),
                    r &&
                      e.jsx(F, {
                        isOpen: r,
                        setIsOpen: c,
                        variant: 'inPage',
                        type: 'critical',
                        description: a('errorsMsg.genericErrMsg'),
                      }),
                    e.jsx('h1', {
                      className: 'padding-top-md notifications-heading',
                      children: a('notifications.heading'),
                    }),
                    e.jsx('hr', {}),
                    p &&
                      e.jsx(e.Fragment, {
                        children: e.jsx(F, {
                          isOpen: p,
                          setIsOpen: m,
                          variant: 'inPage',
                          type: 'success',
                          description: e.jsx(re, {
                            i18nKey: 'notifications.toastMessages.addVehicleSuccess',
                            components: { strong: e.jsx('strong', {}) },
                            values: { vehicleName: he },
                          }),
                        }),
                      }),
                    f &&
                      e.jsx(F, {
                        isOpen: f,
                        setIsOpen: x,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(re, {
                          i18nKey: 'notifications.toastMessages.editCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: he },
                        }),
                      }),
                    v &&
                      e.jsx(F, {
                        isOpen: v,
                        setIsOpen: P,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(re, {
                          i18nKey: 'notifications.toastMessages.addCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: he },
                        }),
                      }),
                    N &&
                      e.jsx(F, {
                        isOpen: N,
                        setIsOpen: O,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(re, {
                          i18nKey: 'notifications.toastMessages.removeVehicleSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { vehicleName: he },
                        }),
                      }),
                    e.jsx('div', {
                      className: 'padding-bottom-md',
                      children:
                        Y &&
                        !z &&
                        e.jsx(F, {
                          isOpen: Y && !z,
                          setIsOpen: () => {},
                          hasTimeout: !1,
                          variant: 'inPage',
                          type: 'info',
                          description: e.jsx(re, {
                            i18nKey: 'notifications.toastMessages.addVehicleAlert',
                            components: { 1: e.jsx('a', { onClick: () => W(!0) }) },
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
                        e.jsx(Te, { label: a('notifications.subsectionThree.buttonText'), onClick: () => W(!0) }),
                        z && e.jsx(Ge, { size: 'md', inModal: !0 }),
                        !z &&
                          e.jsx('div', {
                            className: 'padding-top-md',
                            children: e.jsx(Xt, {
                              vehicleInfoList: de,
                              setRemovedVehicleSuccessMsg: O,
                              getVehicleName: Ve,
                              setRefreshData: E,
                              handleEditCustomNameButtonClick: B,
                            }),
                          }),
                        e.jsx('hr', {}),
                        e.jsx('h2', { children: a('notifications.subsectionOne.heading') }),
                        e.jsx('p', { children: a('notifications.subsectionOne.subhead') }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionOne.question') }),
                        e.jsx(jt, {
                          title: a('notifications.checkboxHeading'),
                          error: me && !ke && !ne ? a('errorsMsg.noOptionSelected') : '',
                          children: e.jsx(ht, {
                            checkboxOptions: [
                              {
                                id: 'email',
                                label: a('notifications.subsectionOne.questionOne.options.0.label'),
                                isChecked: ke,
                              },
                              {
                                id: 'text-message',
                                label: a('notifications.subsectionOne.questionOne.options.1.label'),
                                isChecked: ne,
                              },
                            ],
                            onChange: Ue,
                          }),
                        }),
                        me &&
                          ne &&
                          !Ee &&
                          e.jsx(F, {
                            isOpen: !0,
                            setIsOpen: () => {},
                            variant: 'inPage',
                            type: 'critical',
                            description: e.jsx(re, {
                              i18nKey: 'errorsMsg.noPhoneAdded',
                              components: {
                                br: e.jsx('br', {}),
                                strong: e.jsx('strong', {}),
                                1: e.jsx('a', { onClick: Oe }),
                              },
                            }),
                            hasTimeout: !1,
                          }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionTwo.question') }),
                        e.jsx(jt, {
                          title: a('notifications.checkboxHeading'),
                          error: me && !ye && !xe && !je ? a('errorsMsg.noOptionSelected') : '',
                          children: e.jsx(ht, {
                            checkboxOptions: [
                              {
                                id: 'two-week',
                                label: a('notifications.subsectionOne.questionTwo.options.0.label'),
                                isChecked: ye,
                              },
                              {
                                id: 'four-week',
                                label: a('notifications.subsectionOne.questionTwo.options.1.label'),
                                isChecked: xe,
                              },
                              {
                                id: 'six-week',
                                label: a('notifications.subsectionOne.questionTwo.options.2.label'),
                                isChecked: je,
                              },
                            ],
                            onChange: Ue,
                          }),
                        }),
                        me &&
                          de.length === 0 &&
                          e.jsx(F, {
                            isOpen: !0,
                            setIsOpen: () => {},
                            variant: 'inPage',
                            type: 'critical',
                            description: e.jsx(re, {
                              i18nKey: 'errorsMsg.noVehicleAdded',
                              components: {
                                br: e.jsx('br', {}),
                                strong: e.jsx('strong', {}),
                                1: e.jsx('a', { onClick: () => W(!0) }),
                              },
                            }),
                            hasTimeout: !1,
                          }),
                        me &&
                          ((!ke && !ne) || (ne && !Ee) || (!ye && !xe && !je) || de.length === 0) &&
                          e.jsx(F, {
                            isOpen: !0,
                            setIsOpen: () => {},
                            variant: 'inPage',
                            type: 'critical',
                            description: e.jsx(re, {
                              i18nKey: 'errorsMsg.missingInformation',
                              components: { br: e.jsx('br', {}), strong: e.jsx('strong', {}) },
                            }),
                            hasTimeout: !1,
                          }),
                        e.jsx(Te, {
                          label: a('notifications.subsectionOne.primaryButtonLabel'),
                          disabled: X,
                          variant: 'secondary',
                          onClick: We,
                        }),
                      ],
                    }),
                    e.jsx('hr', {}),
                    C &&
                      e.jsx('div', {
                        className: 'padding-bottom-md',
                        children: e.jsx(F, {
                          isOpen: C,
                          setIsOpen: u,
                          variant: 'inPage',
                          type: 'success',
                          description: a('notifications.toastMessages.stopPaperSuccess'),
                        }),
                      }),
                    e.jsx('h3', { children: a('notifications.subsectionTwo.heading') }),
                    e.jsx('p', { children: a('notifications.subsectionTwo.subhead') }),
                    e.jsx(Te, {
                      label: a('notifications.subsectionTwo.buttonText'),
                      variant: 'secondary',
                      onClick: () => H(!0),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(qt, { variant: 'dark' }),
          e.jsx(ls, {
            vehicleInfoList: de,
            isAddVehicleOpen: Q,
            setIsAddVehicleOpen: W,
            setAddedVehicleSuccessMsg: m,
            setFirstVehicleAdded: _,
            getVehicleName: Ve,
            setRefreshData: E,
          }),
          e.jsx(us, {
            vehicleId: fe,
            isCustomNameModalOpen: oe,
            setIsCustomNameModalOpen: I,
            setEditedCustomNameSuccessMsg: x,
            setAddedCustomNameSuccessMsg: P,
            getVehicleName: Ve,
            setRefreshData: E,
          }),
          e.jsx(cs, { isOptOutPaperModalOpen: D, setIsOptOutPaperModalOpen: H, setStopPaperSuccessMsg: u }),
          e.jsx(Wt, { isErrorModalOpen: Z, handleErrorModalClose: j }),
          e.jsx('div', {
            className: L ? 'feedback-fade-in' : '',
            children: e.jsx(Zt, {
              isFeedbackModalOpen: $,
              setIsFeedbackModalOpen: K,
              setFeedbackModalSuccess: y,
              scrollToTop: De,
            }),
          }),
          e.jsx(ds, { isOpen: ee, setIsOpen: te, setIsAuthenticateModalOpen: T }),
          R &&
            e.jsx($t, {
              type: 'phone',
              isOpen: R,
              setIsOpen: T,
              session: t(),
              setShowSuccessAlert: g,
              setRefreshData: E,
              setIsAuthenticateSMSNumberModalOpen: T,
            }),
        ],
      });
}
export { vs as default };
