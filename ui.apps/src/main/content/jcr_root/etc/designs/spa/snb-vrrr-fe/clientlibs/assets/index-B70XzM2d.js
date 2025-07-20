import {
  u as ve,
  a as we,
  r as n,
  j as e,
  b as Qe,
  F as kt,
  f as yt,
  d as tt,
  g as Xe,
  m as st,
  D as at,
  c as xt,
  e as jt,
  h as Ct,
  i as k,
  k as $e,
  l as lt,
  n as be,
  S as Ke,
  N as ct,
  o as Mt,
  C as St,
  p as Nt,
  q as _t,
  s as wt,
  t as dt,
} from './index-BvrgA0VI.js';
import { H as X, B as Le, u as Re, E as It, M as Et, F as Pt } from './Error-DT5UljD3.js';
import {
  M as Se,
  A as F,
  T as he,
  c as ht,
  i as ze,
  a as Ge,
  r as mt,
  b as Je,
  d as We,
  e as Vt,
  v as At,
} from './CodeAuthentication-BY9NKhU3.js';
import { T as ce, u as Ot } from './useMetadata-BpahQIeT.js';
import { D as Be, E as Lt, A as Rt } from './ErrorModal-Bo5-9uvr.js';
import { C as Bt, a as Tt } from './CheckboxGroup-CS8GFcn8.js';
const Ft = (a, i, f, r) => {
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
      var o,
        c,
        C = 'none',
        d,
        p,
        m,
        u,
        x = i.querySelectorAll('[data-aria-accordion]');
      for (y += 1, u = 0; u < x.length; u++) {
        var v;
        if (
          ((o = x[u]),
          o.hasAttribute('id') || (o.id = 'acc_' + y + '-' + u),
          i.querySelectorAll('#' + o.id + '> li').length
            ? ((c = i.querySelectorAll('#' + o.id + ' li > .' + s)),
              (d = i.querySelectorAll('#' + o.id + ' li > .' + h)))
            : ((c = i.querySelectorAll('#' + o.id + ' > .' + s)), (d = i.querySelectorAll('#' + o.id + ' > .' + h))),
          o.hasAttribute('data-default') && (C = o.getAttribute('data-default')),
          (m = o.hasAttribute('data-constant')),
          o.hasAttribute('data-multi'),
          o.hasAttribute('data-transition'))
        ) {
          var E = o.querySelectorAll('.' + s);
          for (v = 0; v < E.length; v++)
            E[v].setAttribute('style', 'transition: ' + o.getAttribute('data-transition') + 's ease-in-out');
        }
        for (
          t.setupPanels(o.id, c, C, m),
            t.setupHeadingButton(d, r, m),
            i.querySelectorAll('#' + o.id + '> li').length
              ? (p = i.querySelectorAll('#' + o.id + ' li > .' + h + ' .' + l))
              : (p = i.querySelectorAll('#' + o.id + ' > .' + h + ' .' + l)),
            v = 0;
          v < p.length;
          v++
        )
          p[v].addEventListener('click', t.actions), p[v].addEventListener('keydown', t.keytrolls);
      }
    }),
      (t.setupPanels = function (o, c, C, d) {
        var p, m, u, x, v;
        for (p = 0; p < c.length; p++)
          (m = c[p]),
            (u = o + '_panel_' + (p + 1)),
            (x = C),
            (v = d),
            m.setAttribute('id', u),
            b(c[0], !0),
            x !== 'none' &&
              typeof parseInt(x) == 'number' &&
              (x <= 1 ? b(c[0], !1) : x - 1 >= c.length ? b(c[c.length - 1], !1) : b(c[x - 1], !1)),
            ((v && x === 'none') || typeof parseInt(x) != 'number') && b(c[0], !1);
      }),
      (t.setupHeadingButton = function (o, c, C) {
        var d, p, m, u, x, v;
        for (v = 0; v < o.length; v++)
          (d = o[v]),
            (p = d.nextElementSibling.id),
            (m = i.getElementById(p).getAttribute('aria-hidden')),
            (u = i.createElement('button')),
            (x = c[v]),
            (d.innerHTML = ''),
            u.setAttribute('type', 'button'),
            u.setAttribute('aria-controls', p),
            u.setAttribute('id', p + '_trigger'),
            u.classList.add(l),
            m === 'false' ? (g(u, !0), _(u, !0), C && u.setAttribute('aria-disabled', 'true')) : (g(u, !1), _(u, !1)),
            d.appendChild(u),
            u.appendChild(i.createTextNode(x));
      }),
      (t.actions = function (o) {
        var c = this.id.replace(/_panel.*$/g, ''),
          C = i.getElementById(this.getAttribute('aria-controls')),
          d;
        i.querySelectorAll('#' + c + '> li').length
          ? (d = i.querySelectorAll('#' + c + ' li > .' + h + ' .' + l))
          : (d = i.querySelectorAll('#' + c + ' > .' + h + ' .' + l)),
          o.preventDefault(),
          t.togglePanel(o, c, C, d);
      }),
      (t.togglePanel = function (o, c, C, d) {
        var p,
          m,
          u = o.target;
        if (
          u.getAttribute('aria-disabled') !== 'true' &&
          ((p = u.getAttribute('aria-controls')),
          _(u, 'true'),
          u.getAttribute('aria-expanded') === 'true'
            ? (g(u, 'false'), b(C, 'true'))
            : (g(u, 'true'), b(C, 'false'), i.getElementById(c).hasAttribute('data-constant') && S(u, 'true')),
          i.getElementById(c).hasAttribute('data-constant') || !i.getElementById(c).hasAttribute('data-multi'))
        )
          for (m = 0; m < d.length; m++)
            u !== d[m] &&
              (_(d[m], 'false'),
              (p = d[m].getAttribute('aria-controls')),
              S(d[m], 'false'),
              g(d[m], 'false'),
              b(i.getElementById(p), 'true'));
      }),
      (t.toggleAllPanels = function (o) {
        var c, C, d;
        let p = o.target,
          m = o.target.nextElementSibling;
        (C = p.getAttribute('data-open')),
          (d = C == 'true' ? 'false' : 'true'),
          i.querySelectorAll('#' + m.id + '> li').length
            ? (c = i.querySelectorAll('#' + m.id + ' li > .' + h + ' .' + l))
            : (c = i.querySelectorAll('#' + m.id + ' > .' + h + ' .' + l));
        for (var u = 0; u < c.length; u++) {
          let x = c[u],
            v = document.getElementById(x.getAttribute('aria-controls'));
          _(x, 'true'), d === 'false' ? (g(x, 'false'), b(v, 'true')) : (g(x, 'true'), b(v, 'false'));
        }
        p.setAttribute('data-open', d);
      }),
      (t.keytrolls = function (o) {
        if (o.target.classList.contains(l)) {
          var c = o.keyCode || o.which,
            C = 36,
            d = 35,
            p = this.id.replace(/_panel.*$/g, ''),
            m;
          switch (
            (i.querySelectorAll('#' + p + '> li').length
              ? (m = i.querySelectorAll('#' + p + ' li > .' + h + ' .' + l))
              : (m = i.querySelectorAll('#' + p + ' > .' + h + ' .' + l)),
            c)
          ) {
            case d:
              o.preventDefault(), m[m.length - 1].focus();
              break;
            case C:
              o.preventDefault(), m[0].focus();
              break;
          }
        }
      }),
      (t.init = function () {
        t.create();
        let o = i.querySelectorAll('.' + M);
        for (var c = 0; c < o.length; c++)
          o[c].addEventListener('click', function (d) {
            return (
              t.toggleAllPanels(d),
              d.target.innerHTML == 'Open all' ? (d.target.innerHTML = 'Close all') : (d.target.innerHTML = 'Open all'),
              d.preventDefault(),
              !0
            );
          });
      });
    var b = function (o, c) {
        o.setAttribute('aria-hidden', c);
      },
      g = function (o, c) {
        o.setAttribute('aria-expanded', c);
      },
      S = function (o, c) {
        o.setAttribute('aria-disabled', c);
      },
      _ = function (o, c) {
        o.setAttribute('data-current', c);
      };
    t.init();
  },
  Dt = ({
    vehicleName: a,
    id: i,
    isOpen: f,
    setIsOpen: r,
    setRemovedVehicleSuccessMsg: t,
    getVehicleName: l,
    setRefreshData: h,
  }) => {
    const { t: s } = ve(),
      { getSession: M } = we(),
      [y, b] = n.useState(!1),
      g = () => {
        r(!1), b(!1);
      },
      S = () => {
        t(!1),
          b(!1),
          X.removeAVehicle(i, { params: { session: M() } })
            .then(() => {
              l(a), g(), t(!0), h(!0);
            })
            .catch((_) => {
              b(!0), console.error(_);
            });
      };
    return (
      n.useEffect(() => {
        const _ = (o) => {
          o.key === 'Escape' && g();
        };
        return (
          f && window.addEventListener('keydown', _),
          () => {
            window.removeEventListener('keydown', _);
          }
        );
      }, [f]),
      e.jsx(Se, {
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
        open: f,
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
              children: e.jsx(ce, {
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
  qt = ({
    vehicle: a,
    handleEditCustomNameButtonClick: i,
    setRemovedVehicleSuccessMsg: f,
    getVehicleName: r,
    setRefreshData: t,
  }) => {
    const { t: l } = ve(),
      [h] = Qe(['language']),
      [s, M] = n.useState(!1),
      { colour: y, customName: b, expiryDate: g, make: S, model: _, plate: o, vin: c, year: C, vehicleId: d } = a,
      p = y && C && S && _,
      m = Xe(y, C, S, _),
      u = Ct(y, C, S, _, b),
      x = (N = 'default') => {
        let A;
        return p ? (A = b ? (N === 'fullCustomName' ? u : b) : m) : (A = o), A;
      },
      v = () => {
        M(!0);
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
                !p && e.jsxs('p', { children: [e.jsx(kt, { icon: yt }), ' ', l('warningMsg.unavailableVehicle')] }),
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
                        ` ${st(c)}`,
                      ],
                    }),
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [l('notifications.vehicleInfo.licence'), ':'] }),
                        ` ${o}`,
                      ],
                    }),
                    e.jsxs('strong', { children: [l('notifications.vehicleInfo.date'), ':'] }),
                    tt(g, at, h.language),
                  ],
                }),
                e.jsxs('div', {
                  children: [
                    e.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: e.jsx(Le, {
                        label: l(
                          b
                            ? 'notifications.customNameModal.edit.primaryButtonLabelAccordion'
                            : 'notifications.customNameModal.add.primaryButtonLabel'
                        ),
                        variant: 'secondary',
                        leftIcon: xt,
                        size: 'small',
                        onClick: () => i(d),
                        disabled: !p,
                      }),
                    }),
                    e.jsx(Le, {
                      label: l('notifications.removeVehicleModal.primaryButtonLabel'),
                      variant: 'critical secondary',
                      leftIcon: jt,
                      size: 'small',
                      onClick: v,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(Dt, {
          vehicleName: x('fullCustomName'),
          id: d,
          isOpen: s,
          setIsOpen: M,
          setRemovedVehicleSuccessMsg: f,
          getVehicleName: r,
          setRefreshData: t,
        }),
      ],
    });
  },
  Ht = ({
    vehicleInfoList: a,
    setRemovedVehicleSuccessMsg: i,
    getVehicleName: f,
    setRefreshData: r,
    handleEditCustomNameButtonClick: t,
  }) => (
    n.useEffect(() => {
      const l = a.map((h) => {
        let s;
        const { colour: M, customName: y, make: b, model: g, year: S, plate: _ } = h,
          o = Xe(M, S, b, g);
        return M && S && b && g ? (s = y || o) : (s = _), s;
      });
      Ft(window, document, void 0, l);
    }),
    e.jsx('div', {
      className: 'gnb-accordion-pane',
      children: e.jsx('ol', {
        className: 'gnb-accordion-cards',
        'data-aria-accordion': !0,
        'data-multi': !0,
        children: a.map((l) =>
          e.jsx(
            qt,
            {
              vehicle: l,
              setRemovedVehicleSuccessMsg: i,
              getVehicleName: f,
              setRefreshData: r,
              handleEditCustomNameButtonClick: t,
            },
            l.vehicleId
          )
        ),
      }),
    })
  ),
  Ut = ({ label: a, placeholder: i, maxlength: f, onChange: r, className: t, value: l }) =>
    e.jsxs('div', {
      children: [
        e.jsx('label', { className: 'left', htmlFor: a, children: a }),
        e.jsx('textarea', { className: t, name: a, id: a, value: l, placeholder: i, maxLength: f, onChange: r }),
      ],
    }),
  _e = '/etc/designs/spa/snb-vrrr-fe/clientlibs/',
  Wt = ({ isFeedbackModalOpen: a, setIsFeedbackModalOpen: i, setFeedbackModalSuccess: f, scrollToTop: r }) => {
    const { t } = ve(),
      { getSession: l } = we(),
      [h, s] = n.useState(0),
      [M, y] = n.useState(!1),
      [b, g] = n.useState(!1),
      [S, _] = n.useState(''),
      { state: o, dispatch: c } = Re(),
      { text: C, selectedReaction: d } = o.feedback;
    n.useEffect(() => {
      X.getAccountDetails({ params: { session: l() } })
        .then((N) => {
          _(N.data.account.accountId);
        })
        .catch((N) => {
          console.log(N);
        });
    }, []),
      n.useEffect(() => {
        const N = (A) => {
          A.key === 'Escape' && m();
        };
        return (
          a && window.addEventListener('keydown', N),
          () => {
            window.removeEventListener('keydown', N);
          }
        );
      }, [a]);
    const p = (N) => {
        X.submitFeedback({
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
          .catch((A) => {
            console.log(A);
          });
      },
      m = () => {
        p('closed');
      },
      u = () => {
        f(!1),
          X.submitFeedback({
            session: { token: l() },
            feedback: { feedbackId: '', feedbackRating: d, feedbackComments: C, isFeedbackSkipped: !1, accountId: S },
          })
            .then(() => {
              b && (f(!0), r()),
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
      E = () => {
        p('discarded');
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Se, {
          id: 'feedbackModal',
          title: t('notifications.feedbackModal.title'),
          primaryBtnProps: { label: t('notifications.feedbackModal.primaryButton'), onClick: u, disabled: !d },
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
                          d == 1
                            ? e.jsx('img', {
                                src: _e + 'images/face-tired-filled.svg',
                                alt: t('notifications.feedbackModal.dissatisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: _e + 'images/face-tired.svg',
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
                          d == 2
                            ? e.jsx('img', {
                                src: _e + 'images/face-meh-filled.svg',
                                alt: t('notifications.feedbackModal.neutralReaction'),
                              })
                            : e.jsx('img', {
                                src: _e + 'images/face-meh.svg',
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
                          d == 3
                            ? e.jsx('img', {
                                src: _e + 'images/face-heart-filled.svg',
                                alt: t('notifications.feedbackModal.satisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: _e + 'images/face-grin-hearts.svg',
                                alt: t('notifications.feedbackModal.satisfiedReaction'),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(Ut, {
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
        M && e.jsx(Be, { isOpen: M, setIsOpen: y, handleDiscardFormChanges: E }),
      ],
    });
  },
  $t = ({
    id: a,
    isChecked: i = !1,
    label: f,
    hasOptIn: r = !1,
    error: t,
    useTrans: l,
    disabled: h = !1,
    withoutControlledLabeled: s = !1,
    onChange: M,
    onClick: y,
  }) => {
    const b = t ? { 'aria-labelledby': `${f}-error` } : {};
    return e.jsxs(e.Fragment, {
      children: [
        y && e.jsx('div', { className: $e('pair', 'on-click'), onClick: y ? () => y() : () => {} }),
        e.jsxs('div', {
          className: r ? 'single-option' : 'pair',
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
                  id: s ? '' : lt(f),
                  htmlFor: a,
                  className: h ? 'disabled' : '',
                  children: e.jsx(ce, { i18nKey: l[0], components: l[1] }),
                })
              : e.jsx('label', { id: lt(f), htmlFor: a, className: h ? 'disabled' : '', children: f }),
          ],
        }),
      ],
    });
  },
  ut = ({ checkboxOptions: a, disabledArray: i, onChange: f }) => {
    if (i)
      for (let r = 0; r < i.length; r++) {
        const t = i[r];
        a[r].disabled = t;
      }
    return a.map((r) => {
      const { id: t, label: l, disabled: h, isChecked: s, onClick: M, error: y } = r;
      return e.jsx($t, { id: t, label: l, isChecked: s, disabled: h, onChange: f, error: y, onClick: M }, t);
    });
  };
var it = {},
  pt = {},
  Te = {};
Object.defineProperty(Te, '__esModule', { value: !0 });
Te.ProfanityOptions = void 0;
class Kt {
  constructor() {
    (this.wholeWord = !0), (this.grawlix = '@#$%&!'), (this.grawlixChar = '*');
  }
}
Te.ProfanityOptions = Kt;
var gt = {},
  bt = {};
(function (a) {
  Object.defineProperty(a, '__esModule', { value: !0 }),
    (a.CensorType = void 0),
    (function (i) {
      (i[(i.Word = 0)] = 'Word'),
        (i[(i.FirstChar = 1)] = 'FirstChar'),
        (i[(i.FirstVowel = 2)] = 'FirstVowel'),
        (i[(i.AllVowels = 3)] = 'AllVowels');
    })(a.CensorType || (a.CensorType = {}));
})(bt);
var Ye = {};
Object.defineProperty(Ye, '__esModule', { value: !0 });
Ye.List = void 0;
class zt {
  constructor(i) {
    (this.onListChanged = i), (this.words = []);
  }
  get empty() {
    return !this.words.length;
  }
  removeWords(i) {
    (this.words = this.words.filter((f) => !i.includes(f))), this.onListChanged();
  }
  addWords(i) {
    (this.words = this.words.concat(i)), this.onListChanged();
  }
}
Ye.List = zt;
(function (a) {
  var i =
      (be && be.__createBinding) ||
      (Object.create
        ? function (r, t, l, h) {
            h === void 0 && (h = l);
            var s = Object.getOwnPropertyDescriptor(t, l);
            (!s || ('get' in s ? !t.__esModule : s.writable || s.configurable)) &&
              (s = {
                enumerable: !0,
                get: function () {
                  return t[l];
                },
              }),
              Object.defineProperty(r, h, s);
          }
        : function (r, t, l, h) {
            h === void 0 && (h = l), (r[h] = t[l]);
          }),
    f =
      (be && be.__exportStar) ||
      function (r, t) {
        for (var l in r) l !== 'default' && !Object.prototype.hasOwnProperty.call(t, l) && i(t, r, l);
      };
  Object.defineProperty(a, '__esModule', { value: !0 }), f(bt, a), f(Ye, a);
})(gt);
var Ze = {};
Object.defineProperty(Ze, '__esModule', { value: !0 });
Ze.escapeRegExp = void 0;
const Gt = (a) => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
Ze.escapeRegExp = Gt;
var nt = {};
Object.defineProperty(nt, '__esModule', { value: !0 });
nt.default = [
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
];
(function (a) {
  Object.defineProperty(a, '__esModule', { value: !0 }), (a.profanity = a.Profanity = void 0);
  const i = Te,
    f = gt,
    r = Ze,
    t = nt;
  class l {
    constructor(s) {
      (this.options = s || new i.ProfanityOptions()),
        (this.whitelist = new f.List(() => this.buildRegex())),
        (this.blacklist = new f.List(() => this.buildRegex())),
        this.blacklist.addWords(t.default);
    }
    exists(s) {
      return (this.regex.lastIndex = 0), this.regex.test(s);
    }
    censor(s, M = f.CensorType.Word) {
      switch (M) {
        case f.CensorType.Word:
          return s.replace(this.regex, this.options.grawlix);
        case f.CensorType.FirstChar: {
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
        case f.CensorType.FirstVowel:
        case f.CensorType.AllVowels: {
          const y = new RegExp('[aeiou]', M === f.CensorType.FirstVowel ? 'i' : 'ig');
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
      const s = this.blacklist.words.map(r.escapeRegExp),
        M = this.whitelist.words.map(r.escapeRegExp),
        y = `${this.options.wholeWord ? '\\b' : ''}(${s.join('|')})${this.options.wholeWord ? '\\b' : ''}`,
        b = this.whitelist.empty ? '' : `(?!${M.join('|')})`;
      this.regex = new RegExp(b + y, 'ig');
    }
  }
  (a.Profanity = l), (a.profanity = new l()), (a.default = a.profanity);
})(pt);
(function (a) {
  var i =
      (be && be.__createBinding) ||
      (Object.create
        ? function (r, t, l, h) {
            h === void 0 && (h = l);
            var s = Object.getOwnPropertyDescriptor(t, l);
            (!s || ('get' in s ? !t.__esModule : s.writable || s.configurable)) &&
              (s = {
                enumerable: !0,
                get: function () {
                  return t[l];
                },
              }),
              Object.defineProperty(r, h, s);
          }
        : function (r, t, l, h) {
            h === void 0 && (h = l), (r[h] = t[l]);
          }),
    f =
      (be && be.__exportStar) ||
      function (r, t) {
        for (var l in r) l !== 'default' && !Object.prototype.hasOwnProperty.call(t, l) && i(t, r, l);
      };
  Object.defineProperty(a, '__esModule', { value: !0 }), f(pt, a), f(Te, a);
})(it);
const vt = ({ listContent: a }) =>
    e.jsx('ul', { children: a.map((i, f) => e.jsx('li', { children: e.jsx('p', { children: i.item }) }, f)) }),
  Jt = ({
    isAddVehicleOpen: a,
    setIsAddVehicleOpen: i,
    setAddedVehicleSuccessMsg: f,
    getVehicleName: r,
    vehicleInfoList: t,
    setRefreshData: l,
    setFirstVehicleAdded: h,
  }) => {
    const { t: s } = ve(),
      { getSession: M, logout: y } = we(),
      [b] = Qe(['session', 'language']),
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
      [o, c] = n.useState(''),
      [C, d] = n.useState(!1),
      [p, m] = n.useState(!1),
      [u, x] = n.useState(!1),
      [v, E] = n.useState(!1),
      [N, A] = n.useState(!1),
      [ee, W] = n.useState(!0),
      [Y, $] = n.useState(!1),
      [q, H] = n.useState(!1),
      [K, z] = n.useState(!1),
      [B, O] = n.useState(!1),
      [te, D] = n.useState(!1),
      [se, ae] = n.useState(!1),
      [me, de] = n.useState(!0),
      { state: re, dispatch: I } = Re(),
      {
        vin: L,
        licencePlate: T,
        customName: Z,
        hasInvalidVin: ke,
        hasInvalidLicencePlate: pe,
        hasNonRegisteredLicencePlate: Ie,
        hasInvalidCustomName: ue,
      } = re.addVehicle;
    n.useEffect(() => {
      W(!(L && T)), de(!Z);
    }, [L, T, Z]),
      n.useEffect(() => {
        o.length > 0 &&
          (m(!0),
          X.getAVehicle(o, { params: { session: M(), lang: g } })
            .then((j) => {
              _(j.data.vehicles), m(!1), O(!1), D(!0);
            })
            .catch((j) => {
              var R;
              O(!1), ((R = j.response) == null ? void 0 : R.status) === 403 && y();
            }));
      }, [o]),
      n.useEffect(() => {
        S.vehicleId.length > 0 && (D(!0), i(!1));
      }, [S]),
      n.useEffect(() => {
        const j = (R) => {
          R.key === 'Escape' && (u ? i(!0) : q ? (d(!0), i(!0)) : (i(!1), ie()));
        };
        return (
          a && (u || !u) && window.addEventListener('keydown', j),
          () => {
            window.removeEventListener('keydown', j);
          }
        );
      }, [a, u, q]),
      n.useEffect(() => {
        const j = (R) => {
          const Ve = R.key;
          Ve === 'Escape' && K ? (d(!0), D(!0)) : Ve === 'Escape' && !K && (D(!1), ie());
        };
        return (
          te && window.addEventListener('keydown', j),
          () => {
            window.removeEventListener('keydown', j);
          }
        );
      }, [te, K]);
    const ie = () => {
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
          W(!0),
          $(!1),
          E(!1),
          ae(!1),
          de(!0),
          l(!0),
          A(!1),
          H(!1),
          z(!1);
      },
      w = (j) => t.some((R) => j.trim().toLowerCase() === R.plate.trim().toLowerCase()),
      P = () => {
        L &&
          T &&
          (I({ type: k.addVehicle.vin_error_changed, payload: { addVehicle: { hasInvalidVin: !ze(L) } } }),
          I({
            type: k.addVehicle.invalid_licence_plate_error_changed,
            payload: { addVehicle: { hasInvalidLicencePlate: !Ge(T) } },
          }),
          E(w(T)),
          I({
            type: k.addVehicle.non_registered_licence_plate_error_changed,
            payload: { addVehicle: { hasNonRegisteredLicencePlate: !1 } },
          }),
          ze(L) &&
            Ge(T) &&
            !w(T) &&
            (O(!0),
            I({ type: k.addVehicle.vin_error_changed, payload: { addVehicle: { hasInvalidVin: !1 } } }),
            I({
              type: k.addVehicle.invalid_licence_plate_error_changed,
              payload: { addVehicle: { hasInvalidLicencePlate: !1 } },
            }),
            X.addAVehicle({ session: { token: M() }, vehicle: { plate: T, vin: L }, lang: g })
              .then((j) => {
                c(j.data.vehicleId), $(!1), E(!1), W(!1), O(!1);
              })
              .catch((j) => {
                O(!1),
                  j.response.status === 404
                    ? (I({
                        type: k.addVehicle.non_registered_licence_plate_error_changed,
                        payload: { addVehicle: { hasNonRegisteredLicencePlate: !0 } },
                      }),
                      W(!0))
                    : (A(!0), console.error(j));
              })));
      },
      G = () => {
        const j = it.profanity.exists(Z);
        Z && j
          ? I({
              type: k.addVehicle.invalid_custom_name_error_changed,
              payload: { addVehicle: { hasInvalidCustomName: 'profanity' } },
            })
          : Je(Z)
          ? !j &&
            Je(Z) &&
            S &&
            (I({
              type: k.addVehicle.invalid_custom_name_error_changed,
              payload: { addVehicle: { hasInvalidCustomName: '' } },
            }),
            O(!0),
            X.updateAVehicle({
              session: { token: M() },
              vehicle: { vehicleId: o, plate: T, vin: L, customName: Z.trim() },
            })
              .then(() => {
                O(!1), D(!1), r(Z.trim()), f(!0), t.length === 0 && h(!0), W(!0), $(!1), ie();
              })
              .catch((R) => {
                O(!1), A(!0), console.error(R);
              }))
          : I({
              type: k.addVehicle.invalid_custom_name_error_changed,
              payload: { addVehicle: { hasInvalidCustomName: 'invalid-custom-name' } },
            });
      },
      J = (j) => {
        f(!1), $(!!j);
      },
      U = () => {
        Y || L || T ? d(!0) : (i(!1), ie(), O(!1));
      },
      ye = (j) => {
        const R = mt(j.target.value);
        J(R), I({ type: k.addVehicle.vin_changed, payload: { addVehicle: { vin: R } } });
      },
      et = (j) => {
        J(j.target.value),
          I({ type: k.addVehicle.licence_plate_changed, payload: { addVehicle: { licencePlate: j.target.value } } });
      },
      Ne = () => {
        let j;
        return pe ? (j = s('errorsMsg.invalidLicence')) : Ie ? (j = s('errorsMsg.nonregisteredLicence')) : (j = ''), j;
      },
      ne = (j) => {
        xe(j.target.value),
          I({ type: k.addVehicle.custom_name_changed, payload: { addVehicle: { customName: j.target.value } } });
      },
      xe = (j) => {
        const R = j.length > 0;
        ae(R);
      },
      { colour: oe, make: je, model: Ce, year: Me, vin: ge, plate: Ee, expiryDate: fe } = S,
      Fe = Xe(oe, Me, je, Ce),
      De = () => {
        r(Fe);
      },
      qe = () => {
        se ? d(!0) : (De(), D(!1), ie(), O(!1), f(!0), t.length === 0 && h(!0));
      },
      He = () => {
        i(!1), D(!1), ie(), O(!1), te && !a && (f(!0), t.length === 0 && h(!0), De());
      },
      Ue = (j) => {
        const R = j.key;
        R !== 'Escape' && (Y || L || T) ? H(!0) : R !== 'Escape' && !Y && H(!1);
      },
      Pe = (j) => {
        const R = j.key;
        R !== 'Escape' && se ? z(!0) : R !== 'Escape' && !se && z(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Se, {
          id: 'add-vehicle-modal',
          title: s('notifications.addVehicleModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: s('notifications.addVehicleModal.primaryButton.add'),
            onClick: P,
            disabled: ee || B,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('notifications.addVehicleModal.secondaryButton'), onClick: U },
          open: a && !te,
          onClose: U,
          children:
            B || p
              ? e.jsx(Ke, { inModal: !0, size: 'lg' })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs('p', {
                      children: [e.jsx('span', { className: 'required', children: '*' }), ' ', s('disclaimer')],
                    }),
                    e.jsx('p', { children: s('notifications.addVehicleModal.form.title') }),
                    v &&
                      e.jsx(F, {
                        isOpen: v,
                        setIsOpen: E,
                        variant: 'inPage',
                        type: 'critical',
                        description: s('errorsMsg.duplicatedVehicle'),
                      }),
                    N &&
                      e.jsx(F, {
                        isOpen: N,
                        setIsOpen: A,
                        variant: 'inPage',
                        type: 'critical',
                        description: s('errorsMsg.genericErrMsg'),
                      }),
                    e.jsx(he, {
                      type: 'text',
                      label: s('notifications.addVehicleModal.form.vinLabelInput'),
                      id: 'vin',
                      required: !0,
                      value: L,
                      maxlength: 6,
                      onChange: ye,
                      error: ke ? s('errorsMsg.invalidVin') : '',
                      hasTooltipModal: !0,
                      tooltipBody: e.jsx(vt, {
                        listContent: s('notifications.tooltip.vin.listOne', { returnObjects: !0 }),
                      }),
                      tooltipTitle: s('notifications.tooltip.vin.title'),
                      isTooltipModalOpen: u,
                      setIsTooltipModalOpen: x,
                      onKeyUp: Ue,
                    }),
                    e.jsx(he, {
                      type: 'text',
                      label: s('notifications.addVehicleModal.form.licenceLabelInput'),
                      id: 'licence-plate',
                      required: !0,
                      value: T,
                      onChange: et,
                      error: Ne(),
                      onKeyUp: Ue,
                    }),
                  ],
                }),
        }),
        e.jsx(Se, {
          id: 'add-custom-name-modal',
          title: s('notifications.addVehicleModal.customName.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: s('notifications.addVehicleModal.primaryButton.save'),
            onClick: G,
            disabled: me || B,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('notifications.addVehicleModal.customName.skip'), onClick: qe },
          open: te && !a,
          onClose: qe,
          children: B
            ? e.jsx(Ke, { inModal: !0, size: 'lg' })
            : e.jsxs(e.Fragment, {
                children: [
                  N &&
                    e.jsx(F, {
                      isOpen: N,
                      setIsOpen: A,
                      variant: 'inPage',
                      type: 'critical',
                      description: s('errorsMsg.genericErrMsg'),
                    }),
                  e.jsxs('p', {
                    children: [
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.name'), ':'] }),
                      ` ${Fe}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.vin'), ':'] }),
                      ` ${st(ge)}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.licence'), ':'] }),
                      ` ${Ee}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [s('notifications.vehicleInfo.date'), ':'] }),
                      tt(fe, at, g),
                    ],
                  }),
                  e.jsx(he, {
                    type: 'text',
                    label: s('notifications.vehicleInfo.addCustomLabelInput'),
                    helperText: s('notifications.vehicleInfo.helperText'),
                    id: 'custom-name',
                    value: Z,
                    onChange: ne,
                    error: ue ? ht(ue, s('errorsMsg.customNameWithProfanity'), s('errorsMsg.invalidCustomName')) : '',
                    onKeyUp: Pe,
                  }),
                ],
              }),
        }),
        e.jsx(Be, { isOpen: C, setIsOpen: d, handleDiscardFormChanges: He }),
      ],
    });
  },
  Qt = ({ isOptOutPaperModalOpen: a, setIsOptOutPaperModalOpen: i, setStopPaperSuccessMsg: f }) => {
    const { t: r } = ve(),
      { getSession: t } = we(),
      [l, h] = n.useState(!1),
      [s, M] = n.useState(!1),
      [y, b] = n.useState(!1),
      [g, S] = n.useState(!1),
      [_, o] = n.useState(!0),
      [c, C] = n.useState(!1),
      [d, p] = n.useState(!1),
      [m, u] = n.useState(''),
      [x, v] = n.useState(!1),
      [E, N] = n.useState(!1),
      [A, ee] = n.useState(!1),
      [W, Y] = n.useState(!1),
      { state: $, dispatch: q } = Re(),
      {
        givenNames: H,
        lastName: K,
        vin: z,
        licencePlate: B,
        hasInvalidVin: O,
        hasInvalidLicencePlate: te,
        hasInvalidGivenNames: D,
        hasInvalidLastName: se,
      } = $.stopPaperReminder;
    n.useEffect(() => {
      const w = (P) => {
        P.key === 'Escape' && (l ? i(!0) : g ? (M(!0), i(!0)) : ae());
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
          X.getAccountDetails({ params: { session: t() } })
            .then((P) => {
              var J, U;
              const G = (U = (J = P == null ? void 0 : P.data) == null ? void 0 : J.account) == null ? void 0 : U.email;
              u(G);
            })
            .catch((P) => {
              console.error(P);
            });
        })();
      }, [m]),
      n.useEffect(() => {
        I();
      }, [$.stopPaperReminder]);
    const ae = () => {
        q({
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
          o(!0),
          i(!1),
          b(!1),
          C(!1),
          p(!1),
          ee(!1),
          Y(!1),
          S(!1);
      },
      me = () => {
        y || H || K || z || B ? M(!0) : ae();
      },
      de = () => {
        f(!1);
        const w = B && Ge(B),
          P = z && ze(z),
          G = H && We(H),
          J = K && We(K);
        q({
          type: k.stopPaperReminders.all_errors_changed,
          payload: {
            stopPaperReminder: {
              hasInvalidLicencePlate: !w,
              hasInvalidVin: !P,
              hasInvalidGivenNames: !G,
              hasInvalidLastName: !J,
            },
          },
        }),
          N(!0),
          ee(!1),
          Y(!1),
          H &&
            K &&
            z &&
            B &&
            P &&
            w &&
            G &&
            J &&
            (v(!0),
            X.stopPaperReminders({ session: { token: t() }, givenNames: H, lastName: K, vin: z, plate: B, email: m })
              .then(() => {
                i(!1), f(!0), ae(), v(!1);
              })
              .catch((U) => {
                console.error(U), v(!1), U.response.status === 400 && Y(!0), U.response.status === 500 && ee(!0);
              }));
      },
      re = (w) => {
        b(!!w);
      },
      I = () => {
        const w = H && K && z && B;
        o(E ? !(w && !te && !O && !D && !se) : !w);
      },
      L = () => {
        C(!0), p(!1);
      },
      T = () => {
        C(!1), p(!0);
      },
      Z = (w) => {
        q({
          type: k.stopPaperReminders.given_name_changed,
          payload: { stopPaperReminder: { givenNames: w.target.value } },
        }),
          E &&
            q({
              type: k.stopPaperReminders.given_name_error_changed,
              payload: { stopPaperReminder: { hasInvalidGivenNames: !We(w.target.value) } },
            }),
          re(w.target.value);
      },
      ke = (w) => {
        q({
          type: k.stopPaperReminders.last_name_changed,
          payload: { stopPaperReminder: { lastName: w.target.value } },
        }),
          E &&
            q({
              type: k.stopPaperReminders.last_name_error_changed,
              payload: { stopPaperReminder: { hasInvalidLastName: !We(w.target.value) } },
            }),
          re(w.target.value);
      },
      pe = (w) => {
        const P = mt(w.target.value);
        q({ type: k.stopPaperReminders.vin_changed, payload: { stopPaperReminder: { vin: P } } }),
          E &&
            q({
              type: k.stopPaperReminders.vin_error_changed,
              payload: { stopPaperReminder: { hasInvalidVin: !ze(P) } },
            }),
          re(P);
      },
      Ie = (w) => {
        q({
          type: k.stopPaperReminders.licence_plate_changed,
          payload: { stopPaperReminder: { licencePlate: w.target.value } },
        }),
          E &&
            q({
              type: k.stopPaperReminders.licence_plate_error_changed,
              payload: { stopPaperReminder: { hasInvalidLicencePlate: !Ge(w.target.value) } },
            }),
          re(w.target.value);
      },
      ue = (w) => {
        const { givenNames: P, lastName: G, vin: J, licencePlate: U } = $.stopPaperReminder,
          ye = w.key;
        ye !== 'Escape' && (y || P || G || J || U) ? S(!0) : ye !== 'Escape' && !y && S(!1);
      },
      ie = () => {
        i(!1), ae();
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Se, {
          id: 'opt-out-of-paper-modal',
          title: r('notifications.optOutPaperModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: r('notifications.optOutPaperModal.primaryButtonLabel'),
            onClick: de,
            disabled: _ || x,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: r('notifications.optOutPaperModal.secondaryButtonLabel'), onClick: me },
          open: a,
          onClose: me,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', r('disclaimer')],
              }),
              e.jsx('p', { children: r('notifications.optOutPaperModal.form.descriptionOne') }),
              e.jsx('p', { children: r('notifications.optOutPaperModal.form.descriptionTwo') }),
              A &&
                e.jsx(F, {
                  isOpen: A,
                  setIsOpen: ee,
                  variant: 'inPage',
                  type: 'critical',
                  description: r('errorsMsg.genericErrMsg'),
                }),
              W &&
                e.jsx(F, {
                  isOpen: W,
                  setIsOpen: Y,
                  variant: 'inPage',
                  type: 'critical',
                  description: r('errorsMsg.gBizFailErrorMsg'),
                }),
              e.jsx(he, {
                type: 'text',
                label: r('notifications.optOutPaperModal.form.givenNames.label'),
                id: 'given-name',
                required: !0,
                value: H,
                onChange: Z,
                maxlength: ct,
                error: (c || d) && D ? r('errorsMsg.invalidGivenNames') : '',
                onKeyUp: ue,
              }),
              e.jsx(he, {
                type: 'text',
                label: r('notifications.optOutPaperModal.form.lastName.label'),
                id: 'last-name',
                required: !0,
                value: K,
                onChange: ke,
                maxlength: ct,
                error: (c || d) && se ? r('errorsMsg.invalidLastName') : '',
                onKeyUp: ue,
              }),
              e.jsx(he, {
                type: 'text',
                label: r('notifications.optOutPaperModal.form.vin.label'),
                id: 'vin-number',
                required: !0,
                value: z,
                maxlength: 6,
                onChange: pe,
                error: (c || d) && O ? r('errorsMsg.invalidVin') : '',
                hasTooltipModal: !0,
                tooltipBody: e.jsx(vt, { listContent: r('notifications.tooltip.vin.listOne', { returnObjects: !0 }) }),
                tooltipTitle: r('notifications.tooltip.vin.title'),
                isTooltipModalOpen: l,
                setIsTooltipModalOpen: h,
                onFocus: L,
                onBlur: T,
                onKeyUp: ue,
              }),
              e.jsx(he, {
                type: 'text',
                label: r('notifications.optOutPaperModal.form.licence.label'),
                id: 'licence-plate',
                required: !0,
                value: B,
                onChange: Ie,
                error: (c || d) && te ? r('errorsMsg.invalidLicence') : '',
                onFocus: L,
                onBlur: T,
                onKeyUp: ue,
              }),
            ],
          }),
        }),
        e.jsx(Be, { isOpen: s, setIsOpen: M, handleDiscardFormChanges: ie }),
      ],
    });
  },
  Xt = ({ isOpen: a, setIsOpen: i, setIsAuthenticateModalOpen: f }) => {
    const { t: r } = ve(),
      [t, l] = n.useState(!0),
      [h, s] = n.useState(''),
      [M, y] = n.useState(!1),
      [b, g] = n.useState(!1),
      [S, _] = n.useState(''),
      [o, c] = n.useState([{ value: '', checked: !1 }]),
      C = () => {
        b ? y(!0) : i(!1);
      },
      d = (u) => {
        Vt(u, l),
          u.target.value ? g(!0) : g(!1),
          s(u.target.value),
          At(u.target.value, _, r('errorsMsg.invalidSMSNumber'));
      },
      p = () => {
        i(!1), g(!1);
      },
      m = () => {
        f(!0), i(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Se, {
          id: 'text-message-reminders-modal',
          title: r('notification.textMsgRemindersModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: r('notification.textMsgRemindersModal.form.primaryBtnLabel'),
            onClick: m,
            disabled: t,
          },
          hasLinkBtn: !0,
          linkBtnProps: { label: r('notification.textMsgRemindersModal.form.linkLabel'), onClick: C },
          open: a,
          onClose: C,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', { children: r('notification.textMsgRemindersModal.description1') }),
              e.jsx('p', { children: r('notification.textMsgRemindersModal.description2') }),
              e.jsx(he, {
                type: 'tel',
                label: r('notifications.textMsgRemindersModal.form.label'),
                value: h,
                onChange: d,
                error: S,
                required: !0,
              }),
              e.jsx(Bt, {
                title: '',
                valueArray: ['text-reminder'],
                selectedOptions: o,
                setSelectedOptions: c,
                children: e.jsx(Tt, {
                  id: 'text-reminder',
                  label: r('notifications.textMsgRemindersModal.form.checkboxText'),
                }),
              }),
            ],
          }),
        }),
        e.jsx(Be, { isOpen: M, setIsOpen: y, handleDiscardFormChanges: p }),
      ],
    });
  },
  ft = ({ title: a, children: i, hasOptIn: f, error: r }) =>
    e.jsx('div', {
      className: $e('gnb-form-input', r ? 'error' : ''),
      children: e.jsxs('fieldset', {
        className: $e('gnb-checkboxes', { 'fieldset-container': f }),
        children: [
          e.jsx('legend', { className: $e('left', { 'sr-only': f }), children: a }),
          r && e.jsx(It, { error: r }),
          i,
        ],
      }),
    }),
  Yt = ({
    vehicleId: a,
    isCustomNameModalOpen: i,
    setIsCustomNameModalOpen: f,
    setEditedCustomNameSuccessMsg: r,
    setAddedCustomNameSuccessMsg: t,
    getVehicleName: l,
    setRefreshData: h,
  }) => {
    const { t: s } = ve(),
      { getSession: M } = we(),
      [y] = Qe(['session', 'language']),
      [b, g] = n.useState(!1),
      [S, _] = n.useState(!1),
      [o, c] = n.useState(!1),
      [C, d] = n.useState(!0),
      [p, m] = n.useState(!1),
      { state: u, dispatch: x } = Re(),
      { customName: v, hasInvalidCustomName: E } = u.addCustomName,
      { vehicleList: N } = u.common,
      A = Mt(N.find((I) => I.vehicleId === a)),
      { colour: ee, customName: W, expiryDate: Y, make: $, model: q, plate: H, vin: K, year: z } = A,
      B = W ? 'edit' : 'add',
      O = W && B === 'edit' ? W : '',
      te = Xe(ee, z, $, q);
    n.useEffect(() => {
      x({ type: k.addCustomName.custom_name_changed, payload: { addCustomName: { customName: O } } });
    }, [O]),
      n.useEffect(() => {
        const I = (L) => {
          const T = L.key;
          T === 'Escape' && o ? (g(!0), f(!0)) : T === 'Escape' && !o && D();
        };
        return (
          i && window.addEventListener('keydown', I),
          () => {
            window.removeEventListener('keydown', I);
          }
        );
      }, [i, o]);
    const D = () => {
        f(!1),
          _(!1),
          d(!0),
          m(!1),
          x({
            type: k.addCustomName.all_values_and_errors_changed,
            payload: { addCustomName: { customName: O, hasInvalidCustomName: '' } },
          });
      },
      se = () => {
        S
          ? g(!0)
          : (f(!1),
            m(!1),
            x({
              type: k.addCustomName.all_values_and_errors_changed,
              payload: { addCustomName: { customName: O, hasInvalidCustomName: '' } },
            }));
      },
      ae = () => {
        r(!1),
          t(!1),
          m(!1),
          it.profanity.exists(v)
            ? x({
                type: k.addCustomName.invalid_custom_name_error_changed,
                payload: { addCustomName: { hasInvalidCustomName: 'profanity' } },
              })
            : Je(v)
            ? (x({
                type: k.addCustomName.invalid_custom_name_error_changed,
                payload: { addCustomName: { hasInvalidCustomName: '' } },
              }),
              X.updateAVehicle({
                session: { token: M() },
                vehicle: { vehicleId: a, plate: H, vin: K, customName: v.trim(), expiryDate: Y },
              })
                .then(() => {
                  l(v.trim()), B === 'add' ? t(!0) : r(!0), h(!0), D();
                })
                .catch((L) => {
                  m(!0), console.error(L);
                }))
            : x({
                type: k.addCustomName.invalid_custom_name_error_changed,
                payload: { addCustomName: { hasInvalidCustomName: 'invalid-custom-name' } },
              });
      },
      me = () => {
        D();
      },
      de = (I) => {
        I.target.value !== O ? (_(!0), (!E || (E && Je(I.target.value))) && d(!1)) : (_(!1), d(!1)),
          x({ type: k.addCustomName.custom_name_changed, payload: { addCustomName: { customName: I.target.value } } });
      },
      re = (I) => {
        const L = I.key;
        L !== 'Escape' && S ? c(!0) : L !== 'Escape' && !S && c(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Se, {
          id: `${B === 'add' ? 'add' : 'edit'}-custom-name-modal-${a}`,
          title: s(
            B === 'add' ? 'notifications.customNameModal.add.title' : 'notifications.customNameModal.edit.title'
          ),
          hasFooter: !0,
          primaryBtnProps: {
            label: s(
              B === 'add'
                ? 'notifications.customNameModal.add.primaryButtonLabel'
                : 'notifications.customNameModal.edit.primaryButtonLabelModal'
            ),
            onClick: ae,
            disabled: C,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('notifications.customNameModal.secondaryButtonLabel'), onClick: se },
          open: i,
          onClose: se,
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
                  ` ${te}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.vin'), ':'] }),
                  ` ${st(K)}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.licence'), ':'] }),
                  ` ${H}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [s('notifications.vehicleInfo.date'), ':'] }),
                  tt(Y, at, y.language),
                ],
              }),
              e.jsx(he, {
                type: 'text',
                label: s(
                  B === 'add'
                    ? 'notifications.vehicleInfo.addCustomLabelInput'
                    : 'notifications.vehicleInfo.editCustomLabelInput'
                ),
                helperText: s('notifications.vehicleInfo.helperText'),
                id: 'custom-name',
                value: v,
                onChange: de,
                error: E ? ht(E, s('errorsMsg.customNameWithProfanity'), s('errorsMsg.invalidCustomName')) : '',
                maxlength: St,
                onKeyUp: re,
              }),
            ],
          }),
        }),
        e.jsx(Be, { isOpen: b, setIsOpen: g, handleDiscardFormChanges: me }),
      ],
    });
  };
function ns() {
  const { t: a, i18n: i } = ve(),
    f = Nt(),
    { renderMetadata: r } = Ot(),
    { getSession: t, refreshSessionCookie: l, logout: h } = we(),
    s = n.useRef(null),
    [M, y] = n.useState(!1),
    [b, g] = n.useState(!1),
    [S, _] = n.useState(!1),
    [o, c] = n.useState(!1),
    [C, d] = n.useState(!1),
    [p, m] = n.useState(!1),
    [u, x] = n.useState(!1),
    [v, E] = n.useState(!1),
    [N, A] = n.useState(!1),
    [ee, W] = n.useState(!0),
    [Y, $] = n.useState(!1),
    [q, H] = n.useState(!1),
    [K, z] = n.useState(!1),
    [B, O] = n.useState(!1),
    [te, D] = n.useState(!1),
    [se, ae] = n.useState(!1),
    [me, de] = n.useState(''),
    [re, I] = n.useState(!1),
    [L, T] = n.useState(!1),
    [Z, ke] = n.useState(!1),
    [pe, Ie] = n.useState(''),
    [ue, ie] = n.useState(!0),
    [w, P] = n.useState(!1),
    [G, J] = n.useState(!0),
    [U, ye] = Qe(['session', 'language', 'sessionExpiry']),
    [et] = _t(),
    { state: Ne, dispatch: ne } = Re(),
    {
      hasEmailReminders: xe,
      hasSMSReminders: oe,
      hasLeadTime2Weeks: je,
      hasLeadTime4Weeks: Ce,
      hasLeadTime6Weeks: Me,
      showSaveChangesErrors: ge,
    } = Ne.notifications,
    { phoneNumber: Ee } = Ne.accountSettings,
    { vehicleList: fe } = Ne.common,
    Fe = NaN;
  n.useEffect(() => {
    const V = et.get('l');
    V === 'f'
      ? (i.changeLanguage('fr-CA'), ye('language', 'fr-CA'))
      : V === 'e'
      ? (i.changeLanguage('en-CA'), ye('language', 'en-CA'))
      : wt(U.language);
  }, []),
    n.useEffect(() => {
      r(), P(!0);
    }, [U.language]),
    n.useEffect(() => {
      w &&
        (P(!1),
        ae(se),
        dt(U)
          ? (X.getAccountDetails({ params: { session: t() } })
              .then((V) => {
                var Q, le, Ae, Oe;
                ne({
                  type: k.accountSettings.phone_number_changed,
                  payload: {
                    accountSettings: {
                      phoneNumber:
                        (le = (Q = V.data) == null ? void 0 : Q.account) != null && le.smsNumber
                          ? (Oe = (Ae = V.data) == null ? void 0 : Ae.account) == null
                            ? void 0
                            : Oe.smsNumber
                          : '',
                    },
                  },
                }),
                  console.log('Account Details Received', V.data);
              })
              .catch((V) => {
                console.error(V);
              }),
            ge
              ? ie(!1)
              : X.getReminderDetails({ params: { session: t() } })
                  .then((V) => {
                    l(t()), ie(!1);
                    const {
                        isEmailActive: Q,
                        isTextActive: le,
                        isLeadTime2wksActive: Ae,
                        isLeadTime4wksActive: Oe,
                        isLeadTime6wksActive: ot,
                      } = V.data.reminderPreference,
                      rt = !Q && !Ae && !Oe && !ot;
                    ne({
                      type: k.notification.init_reminder_options,
                      payload: {
                        notification: {
                          hasEmailReminders: !!(rt || Q),
                          hasSMSReminders: !!le,
                          hasLeadTime2Weeks: !!(rt || Ae),
                          hasLeadTime4Weeks: !!Oe,
                          hasLeadTime6Weeks: !!ot,
                        },
                      },
                    });
                  })
                  .catch((V) => {
                    console.log(V), ie(!1), D(!0);
                  }),
            J(!0),
            X.getAllVehicles({ params: { session: t(), lang: U.language } })
              .then((V) => {
                console.log('Vehicle List received', V.data),
                  J(!1),
                  ne({ type: k.common.vehicle_list_changed, payload: { common: { vehicleList: V.data.vehicles } } });
              })
              .catch((V) => {
                var Q;
                J(!1), ((Q = V.response) == null ? void 0 : Q.status) === 403 ? h() : D(!0);
              }))
          : h(!0));
    }, [w]),
    n.useEffect(() => {
      fe.length > 0 ? W(!1) : W(!0);
    }, [fe]),
    n.useEffect(() => {
      p &&
        S &&
        setTimeout(() => {
          z(!0), _(!1), O(!0);
        }, Fe),
        p && (A(!1), x(!1), E(!1));
    }, [p, S, B]),
    n.useEffect(() => {
      N && (m(!1), x(!1), E(!1), O(!1));
    }, [N]),
    n.useEffect(() => {
      u && (m(!1), A(!1), E(!1));
    }, [u]),
    n.useEffect(() => {
      v && (m(!1), A(!1), x(!1));
    }, [v]);
  const De = () => {
      s && s.current && s.current.scrollIntoView({ behavior: 'smooth' });
    },
    qe = () => {
      s && s.current && s.current.scrollIntoView({ behavior: 'smooth' });
    },
    He = (V) => {
      const {
        target: { name: Q, checked: le },
      } = V;
      (({ ...Ne.notifications }),
      Q === 'email' &&
        ne({
          type: k.notification.email_reminder_option_changed,
          payload: { notification: { hasEmailReminders: le } },
        })),
        Q === 'text-message' &&
          ne({ type: k.notification.text_reminder_option_changed, payload: { notification: { hasSMSReminders: le } } }),
        Q === 'two-week' &&
          ne({
            type: k.notification.reminder_freq_2_weeks_option_changed,
            payload: { notification: { hasLeadTime2Weeks: le } },
          }),
        Q === 'four-week' &&
          ne({
            type: k.notification.reminder_freq_4_weeks_option_changed,
            payload: { notification: { hasLeadTime4Weeks: le } },
          }),
        Q === 'six-week' &&
          ne({
            type: k.notification.reminder_freq_6_weeks_option_changed,
            payload: { notification: { hasLeadTime6Weeks: le } },
          }),
        o && g(!1);
    },
    Ue = () => {
      dt(U) || h(!0),
        c(!1),
        g(!1),
        (xe || oe) && (!oe || (oe && Ee)) && (je || Ce || Me) && fe.length > 0
          ? (ke(!0),
            ne({
              type: k.notification.showSaveChangesErrors,
              payload: { notification: { showSaveChangesErrors: !1 } },
            }),
            X.updateReminderDetails({
              session: { token: t() },
              reminderPreference: {
                isEmailActive: !!xe,
                isTextActive: !!oe,
                isLeadTime2wksActive: !!je,
                isLeadTime4wksActive: !!Ce,
                isLeadTime6wksActive: !!Me,
              },
            })
              .then(() => {
                P(!0), g(!0), qe();
              })
              .catch((V) => {
                c(!0), console.error(V);
              })
              .finally(() => {
                ke(!1);
              }),
            ke(!0))
          : ne({
              type: k.notification.showSaveChangesErrors,
              payload: { notification: { showSaveChangesErrors: !0 } },
            });
    },
    Pe = (V) => {
      Ie(V);
    },
    j = () => {
      D(!1), h();
    },
    R = (V) => {
      de(V), I(!0);
    },
    Ve = () => {
      f('/account-settings', { state: { showChangePhoneModal: !0 } });
    };
  return ue
    ? e.jsx('main', { className: 'page-content', children: e.jsx(Ke, { size: 'lg' }) })
    : e.jsxs(e.Fragment, {
        children: [
          e.jsx(Et, {
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
                    o &&
                      e.jsx(F, {
                        isOpen: o,
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
                          description: e.jsx(ce, {
                            i18nKey: 'notifications.toastMessages.addVehicleSuccess',
                            components: { strong: e.jsx('strong', {}) },
                            values: { vehicleName: pe },
                          }),
                        }),
                      }),
                    u &&
                      e.jsx(F, {
                        isOpen: u,
                        setIsOpen: x,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(ce, {
                          i18nKey: 'notifications.toastMessages.editCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: pe },
                        }),
                      }),
                    v &&
                      e.jsx(F, {
                        isOpen: v,
                        setIsOpen: E,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(ce, {
                          i18nKey: 'notifications.toastMessages.addCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: pe },
                        }),
                      }),
                    N &&
                      e.jsx(F, {
                        isOpen: N,
                        setIsOpen: A,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(ce, {
                          i18nKey: 'notifications.toastMessages.removeVehicleSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { vehicleName: pe },
                        }),
                      }),
                    e.jsx('div', {
                      className: 'padding-bottom-md',
                      children:
                        ee &&
                        !G &&
                        e.jsx(F, {
                          isOpen: ee && !G,
                          setIsOpen: () => {},
                          hasTimeout: !1,
                          variant: 'inPage',
                          type: 'info',
                          description: e.jsx(ce, {
                            i18nKey: 'notifications.toastMessages.addVehicleAlert',
                            components: { 1: e.jsx('a', { onClick: () => $(!0) }) },
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
                        e.jsx(Le, { label: a('notifications.subsectionThree.buttonText'), onClick: () => $(!0) }),
                        G && e.jsx(Ke, { size: 'md', inModal: !0 }),
                        !G &&
                          e.jsx('div', {
                            className: 'padding-top-md',
                            children: e.jsx(Ht, {
                              vehicleInfoList: fe,
                              setRemovedVehicleSuccessMsg: A,
                              getVehicleName: Pe,
                              setRefreshData: P,
                              handleEditCustomNameButtonClick: R,
                            }),
                          }),
                        e.jsx('hr', {}),
                        e.jsx('h2', { children: a('notifications.subsectionOne.heading') }),
                        e.jsx('p', { children: a('notifications.subsectionOne.subhead') }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionOne.question') }),
                        e.jsx(ft, {
                          title: a('notifications.checkboxHeading'),
                          error: ge && !xe && !oe ? a('errorsMsg.noOptionSelected') : '',
                          children: e.jsx(ut, {
                            checkboxOptions: [
                              {
                                id: 'email',
                                label: a('notifications.subsectionOne.questionOne.options.0.label'),
                                isChecked: xe,
                              },
                              {
                                id: 'text-message',
                                label: a('notifications.subsectionOne.questionOne.options.1.label'),
                                isChecked: oe,
                              },
                            ],
                            onChange: He,
                          }),
                        }),
                        ge &&
                          oe &&
                          !Ee &&
                          e.jsx(F, {
                            isOpen: !0,
                            setIsOpen: () => {},
                            variant: 'inPage',
                            type: 'critical',
                            description: e.jsx(ce, {
                              i18nKey: 'errorsMsg.noPhoneAdded',
                              components: {
                                br: e.jsx('br', {}),
                                strong: e.jsx('strong', {}),
                                1: e.jsx('a', { onClick: Ve }),
                              },
                            }),
                            hasTimeout: !1,
                          }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionTwo.question') }),
                        e.jsx(ft, {
                          title: a('notifications.checkboxHeading'),
                          error: ge && !je && !Ce && !Me ? a('errorsMsg.noOptionSelected') : '',
                          children: e.jsx(ut, {
                            checkboxOptions: [
                              {
                                id: 'two-week',
                                label: a('notifications.subsectionOne.questionTwo.options.0.label'),
                                isChecked: je,
                              },
                              {
                                id: 'four-week',
                                label: a('notifications.subsectionOne.questionTwo.options.1.label'),
                                isChecked: Ce,
                              },
                              {
                                id: 'six-week',
                                label: a('notifications.subsectionOne.questionTwo.options.2.label'),
                                isChecked: Me,
                              },
                            ],
                            onChange: He,
                          }),
                        }),
                        ge &&
                          fe.length === 0 &&
                          e.jsx(F, {
                            isOpen: !0,
                            setIsOpen: () => {},
                            variant: 'inPage',
                            type: 'critical',
                            description: e.jsx(ce, {
                              i18nKey: 'errorsMsg.noVehicleAdded',
                              components: {
                                br: e.jsx('br', {}),
                                strong: e.jsx('strong', {}),
                                1: e.jsx('a', { onClick: () => $(!0) }),
                              },
                            }),
                            hasTimeout: !1,
                          }),
                        ge &&
                          ((!xe && !oe) || (oe && !Ee) || (!je && !Ce && !Me) || fe.length === 0) &&
                          e.jsx(F, {
                            isOpen: !0,
                            setIsOpen: () => {},
                            variant: 'inPage',
                            type: 'critical',
                            description: e.jsx(ce, {
                              i18nKey: 'errorsMsg.missingInformation',
                              components: { br: e.jsx('br', {}), strong: e.jsx('strong', {}) },
                            }),
                            hasTimeout: !1,
                          }),
                        e.jsx(Le, {
                          label: a('notifications.subsectionOne.primaryButtonLabel'),
                          disabled: Z,
                          variant: 'secondary',
                          onClick: Ue,
                        }),
                      ],
                    }),
                    e.jsx('hr', {}),
                    C &&
                      e.jsx('div', {
                        className: 'padding-bottom-md',
                        children: e.jsx(F, {
                          isOpen: C,
                          setIsOpen: d,
                          variant: 'inPage',
                          type: 'success',
                          description: a('notifications.toastMessages.stopPaperSuccess'),
                        }),
                      }),
                    e.jsx('h3', { children: a('notifications.subsectionTwo.heading') }),
                    e.jsx('p', { children: a('notifications.subsectionTwo.subhead') }),
                    e.jsx(Le, {
                      label: a('notifications.subsectionTwo.buttonText'),
                      variant: 'secondary',
                      onClick: () => H(!0),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(Pt, { variant: 'dark' }),
          e.jsx(Jt, {
            vehicleInfoList: fe,
            isAddVehicleOpen: Y,
            setIsAddVehicleOpen: $,
            setAddedVehicleSuccessMsg: m,
            setFirstVehicleAdded: _,
            getVehicleName: Pe,
            setRefreshData: P,
          }),
          e.jsx(Yt, {
            vehicleId: me,
            isCustomNameModalOpen: re,
            setIsCustomNameModalOpen: I,
            setEditedCustomNameSuccessMsg: x,
            setAddedCustomNameSuccessMsg: E,
            getVehicleName: Pe,
            setRefreshData: P,
          }),
          e.jsx(Qt, { isOptOutPaperModalOpen: q, setIsOptOutPaperModalOpen: H, setStopPaperSuccessMsg: d }),
          e.jsx(Lt, { isErrorModalOpen: te, handleErrorModalClose: j }),
          e.jsx('div', {
            className: B ? 'feedback-fade-in' : '',
            children: e.jsx(Wt, {
              isFeedbackModalOpen: K,
              setIsFeedbackModalOpen: z,
              setFeedbackModalSuccess: y,
              scrollToTop: De,
            }),
          }),
          e.jsx(Xt, { isOpen: se, setIsOpen: ae, setIsAuthenticateModalOpen: T }),
          L &&
            e.jsx(Rt, {
              type: 'phone',
              isOpen: L,
              setIsOpen: T,
              session: t(),
              setShowSuccessAlert: g,
              setRefreshData: P,
              setIsAuthenticateSMSNumberModalOpen: T,
            }),
        ],
      });
}
export { ns as default };
