import {
  u as K,
  a as z,
  r as s,
  j as e,
  E as ge,
  v as V,
  w as Se,
  x as le,
  i as _,
  p as fe,
  y as Me,
  b as ve,
  s as Ee,
  t as xe,
  S as be,
  c as G,
  z as ye,
  e as je,
  A as Ce,
} from './index-BvrgA0VI.js';
/* empty css                        */ import { B as ke } from './BackLink-Ch1aurs2.js';
import { H as $, u as de, M as Ne, B as q, F as Ie } from './Error-DT5UljD3.js';
import { M as W, A as T, T as ue, f as Oe, e as we } from './CodeAuthentication-BY9NKhU3.js';
import { D as J, A as re, E as Ae } from './ErrorModal-Bo5-9uvr.js';
import { T as Pe, u as Be } from './useMetadata-BpahQIeT.js';
const Fe = ({ isOpen: i, setIsOpen: m, setIsAuthenticateModalOpen: C, email: x, setEmail: t }) => {
    const { t: a } = K(),
      { setSessionCookie: l, getSession: F, getRememberMe: n } = z(),
      [w, r] = s.useState(!1),
      [b, S] = s.useState(!1),
      [f, d] = s.useState(!1),
      [y, u] = s.useState(''),
      [k, P] = s.useState(!0),
      [N, p] = s.useState(!1);
    s.useEffect(() => {
      const c = (E) => {
        const A = E.key;
        A === 'Escape' && f ? (r(!0), m(!0)) : A === 'Escape' && !f && v();
      };
      return (
        i && window.addEventListener('keydown', c),
        () => {
          window.removeEventListener('keydown', c);
        }
      );
    }, [i, f]);
    const M = (c) => {
        we(c, P), c.target.value ? S(!0) : S(!1), t(c.target.value);
      },
      v = () => {
        m(!1), t(''), p(!1), u(''), d(!1);
      },
      j = () => {
        b ? r(!0) : v();
      },
      h = () => {
        v(), S(!1);
      },
      I = () => {
        p(!1),
          Oe(x, u, 'invalid-email') &&
            $.createChangeEmailOTP({ session: { token: F() }, email: x })
              .then((E) => {
                l(E.data.token, n()), C(!0), m(!1);
              })
              .catch((E) => {
                p(!0), console.log(E);
              });
      },
      B = (c) => {
        const E = c.key;
        E !== 'Escape' && b ? d(!0) : E !== 'Escape' && !b && d(!1);
      },
      R = y === 'invalid-email' ? a('authentication.emailScreen.errorMsg') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(W, {
          title: a('accountSettings.emailModal.heading'),
          hasFooter: !0,
          primaryBtnProps: { label: a('accountSettings.emailModal.save'), onClick: I, disabled: k },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: a('accountSettings.cancel'), onClick: j },
          id: 'edit-email-modal',
          open: i,
          onClose: j,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', a('disclaimer')],
              }),
              e.jsx('p', { children: a('accountSettings.emailModal.subheading') }),
              N &&
                e.jsx(T, {
                  isOpen: N,
                  setIsOpen: p,
                  variant: 'inPage',
                  type: 'critical',
                  description: a('errorsMsg.genericErrMsg'),
                }),
              e.jsx(ue, {
                label: a('accountSettings.email'),
                type: 'email',
                required: !0,
                value: x,
                placeholder: a('accountSettings.emailModal.emailPlaceholder'),
                onChange: M,
                error: R,
                maxlength: ge,
                onKeyUp: B,
              }),
            ],
          }),
        }),
        w && e.jsx(J, { isOpen: w, setIsOpen: r, handleDiscardFormChanges: h }),
      ],
    });
  },
  Le = ({
    type: i,
    isOpen: m,
    setIsOpen: C,
    setIsAuthenticateModalOpen: x,
    smsNumber: t,
    setSMSNumber: a,
    smsNumberInAccount: l,
    smsLanguage: F,
  }) => {
    const { t: n } = K(),
      { setSessionCookie: w, getSession: r, getRememberMe: b } = z(),
      [S, f] = s.useState(!1),
      [d, y] = s.useState(!1),
      [u, k] = s.useState(!1),
      [P, N] = s.useState(''),
      [p, M] = s.useState(!0),
      [v, j] = s.useState(!1);
    s.useEffect(() => {
      a(i === 'add' ? '' : V(l));
    }, [i]),
      s.useEffect(() => {
        const o = (O) => {
          const L = O.key;
          L === 'Escape' && u ? (f(!0), C(!0)) : L === 'Escape' && !u && h();
        };
        return (
          m && window.addEventListener('keydown', o),
          () => {
            window.removeEventListener('keydown', o);
          }
        );
      }, [m, u]);
    const h = () => {
        a(i === 'add' ? '' : V(l)), C(!1), N(''), k(!1), y(!1), M(!0), j(!1);
      },
      I = () => {
        d ? f(!0) : h();
      },
      B = (o) => {
        le(o.target.value).length === 12 ? M(!1) : M(!0), o.target.value ? y(!0) : y(!1), a(le(o.target.value));
      },
      R = () => {
        h();
      },
      c = () => {
        M(!0),
          $.createChangeSMSNumberOTP({ session: { token: r() }, smsNumber: Se(t), smsLanguage: F })
            .then((o) => {
              w(o.data.token, b()), x(!0), C(!1), N(''), k(!1), y(!1), j(!1);
            })
            .catch((o) => {
              var O, L;
              ((O = o == null ? void 0 : o.response) == null ? void 0 : O.status) === 400 ||
              ((L = o == null ? void 0 : o.response) == null ? void 0 : L.status) === 401
                ? N('invalid-number')
                : j(!0),
                M(!1),
                console.error(o);
            });
      },
      E = (o) => {
        const O = o.key;
        O !== 'Escape' && d ? k(!0) : O !== 'Escape' && !d && k(!1);
      },
      A = P === 'invalid-number' ? n('accountSettings.phoneModal.invalidNumber') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(W, {
          title: n(i === 'edit' ? 'accountSettings.phoneModal.headingEdit' : 'accountSettings.phoneModal.headingAdd'),
          hasFooter: !0,
          primaryBtnProps: { label: n('accountSettings.phoneModal.save'), onClick: c, disabled: p },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: n('accountSettings.cancel'), onClick: I },
          id: i === 'edit' ? 'edit-phone-modal' : 'add-phone-modal',
          open: m,
          onClose: I,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', n('disclaimer')],
              }),
              e.jsxs('p', {
                children: [
                  e.jsx('span', { children: n('accountSettings.phoneModal.subheading1') }),
                  e.jsx('br', {}),
                  e.jsx('span', { children: n('accountSettings.phoneModal.subheading2') }),
                ],
              }),
              v &&
                e.jsx(T, {
                  isOpen: v,
                  setIsOpen: j,
                  variant: 'inPage',
                  type: 'critical',
                  description: n('errorsMsg.genericErrMsg'),
                }),
              e.jsx(ue, {
                label: n('accountSettings.phone'),
                type: 'tel',
                required: !0,
                maxlength: 12,
                value: t,
                onChange: B,
                placeholder: '506-555-5555',
                error: A,
                onKeyUp: E,
              }),
            ],
          }),
        }),
        e.jsx(J, { isOpen: S, setIsOpen: f, handleDiscardFormChanges: R }),
      ],
    });
  },
  De = ({ isOpen: i, setIsOpen: m, smsNumber: C, setShowSuccessAlert: x, setRefreshData: t }) => {
    const { t: a } = K(),
      { getSession: l } = z(),
      [F, n] = s.useState(!1),
      [w, r] = s.useState(!1),
      [b, S] = s.useState(!1),
      [f, d] = s.useState(!1),
      [y, u] = s.useState(!1),
      { state: k, dispatch: P } = de(),
      { hasSMSReminders: N } = k.notifications;
    s.useEffect(() => {
      const h = (I) => {
        const B = I.key;
        B === 'Escape' && b ? (n(!0), m(!0)) : B === 'Escape' && !b && p();
      };
      return (
        i && window.addEventListener('keydown', h),
        () => {
          window.removeEventListener('keydown', h);
        }
      );
    }, [i, b]);
    const p = () => {
        m(!1), S(!1), r(!1), d(!1), u(!1);
      },
      M = () => {
        w ? n(!0) : p();
      },
      v = () => {
        p();
      },
      j = () => {
        d(!0),
          $.removeSMSNumber({ params: { session: l() } })
            .then(() => {
              m(!1),
                S(!1),
                r(!1),
                u(!1),
                x(!0),
                t && t(!0),
                N &&
                  P({
                    type: _.notification.text_reminder_option_changed,
                    payload: { notification: { hasSMSReminders: !1 } },
                  });
            })
            .catch((h) => {
              u(!0), d(!1), console.error(h);
            });
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(W, {
          title: a('accountSettings.phoneModal.headingRemove'),
          hasFooter: !0,
          primaryBtnProps: {
            label: a('accountSettings.phoneModal.remove.primaryButtonLabel'),
            onClick: j,
            disabled: f,
            variant: 'critical',
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: a('accountSettings.phoneModal.remove.secondaryButtonLabel'), onClick: M },
          id: 'remove-phone-modal',
          open: i,
          onClose: M,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                children: e.jsx('span', {
                  children: e.jsx(Pe, {
                    i18nKey: 'accountSettings.phoneModal.remove.message',
                    components: { strong: e.jsx('strong', {}) },
                    values: { smsNumber: C },
                  }),
                }),
              }),
              y &&
                e.jsx(T, {
                  isOpen: y,
                  setIsOpen: u,
                  variant: 'inPage',
                  type: 'critical',
                  description: a('errorsMsg.genericErrMsg'),
                }),
            ],
          }),
        }),
        e.jsx(J, { isOpen: F, setIsOpen: n, handleDiscardFormChanges: v }),
      ],
    });
  },
  Re = '1';
function $e() {
  var ee;
  const { getSession: i, refreshSessionCookie: m, getRememberMe: C, logout: x } = z(),
    { t } = K(),
    a = fe(),
    l = Me(),
    { renderMetadata: F } = Be(),
    [n] = ve(['session', 'language', 'sessionExpiry']),
    [w, r] = s.useState(!1),
    [b, S] = s.useState(''),
    [f, d] = s.useState(!1),
    [y, u] = s.useState(!1),
    [k, P] = s.useState(!!((ee = l.state) != null && ee.showChangePhoneModal)),
    [N, p] = s.useState(!1),
    [M, v] = s.useState(!1),
    [j, h] = s.useState(!1),
    [I, B] = s.useState(''),
    [R, c] = s.useState(!1),
    [E, A] = s.useState(!1),
    [o, O] = s.useState(!1),
    { state: L, dispatch: U } = de(),
    { email: he, phoneNumber: D, updatedEmail: Q, updatedPhoneNumber: X } = L.accountSettings;
  s.useEffect(() => {
    Ee(n.language),
      l.state && l.state.showSuccessAlert && r(l.state.showSuccessAlert),
      l.state && l.state.successMsgType && S(l.state.successMsgType),
      l.state && l.state.showErrorAlert && d(l.state.showErrorAlert),
      A(!0);
  }, []);
  const me = t(b === 'phone-success' ? 'accountSettings.phoneSuccess' : 'accountSettings.genericSuccess');
  s.useEffect(() => {
    R &&
      (c(!1),
      U({ type: _.accountSettings.updated_email_changed, payload: { accountSettings: { updatedEmail: '' } } }),
      xe(n)
        ? (A(!0),
          $.getAccountDetails({ params: { session: i() } })
            .then((g) => {
              var H, se, te, ae, ne, oe, ie, ce;
              m(i()),
                U({
                  type: _.accountSettings.email_changed,
                  payload: {
                    accountSettings: {
                      email: (se = (H = g.data) == null ? void 0 : H.account) == null ? void 0 : se.email,
                    },
                  },
                }),
                U({
                  type: _.accountSettings.phone_number_changed,
                  payload: {
                    accountSettings: {
                      phoneNumber:
                        (ae = (te = g.data) == null ? void 0 : te.account) != null && ae.smsNumber
                          ? (oe = (ne = g.data) == null ? void 0 : ne.account) == null
                            ? void 0
                            : oe.smsNumber
                          : '',
                    },
                  },
                }),
                B((ce = (ie = g.data) == null ? void 0 : ie.account) == null ? void 0 : ce.preferredLanguage),
                c(!1),
                A(!1);
            })
            .catch((g) => {
              var H;
              console.error(g),
                A(!1),
                ((H = g == null ? void 0 : g.response) == null ? void 0 : H.status) === 403 ? x() : O(!0);
            }))
        : x(!0));
  }, [R]),
    s.useEffect(() => {
      F(), c(!0);
    }, [n.language]);
  const pe = () => {
      O(!1), x();
    },
    Y = (g) => {
      U({ type: _.accountSettings.updated_email_changed, payload: { accountSettings: { updatedEmail: g } } });
    },
    Z = (g) => {
      U({
        type: _.accountSettings.updated_phone_number_changed,
        payload: { accountSettings: { updatedPhoneNumber: g } },
      });
    };
  return e.jsx(e.Fragment, {
    children: E
      ? e.jsx(be, { size: 'lg' })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(Ne, {
              showCart: !1,
              accountOptions: t('mainNavigation.accountOptionsSignIn.options', { returnObjects: !0 }),
              signedIn: !0,
              showSearch: !1,
            }),
            e.jsx('main', {
              className: 'page-content',
              children: e.jsxs('div', {
                className: 'gnb-form-container left',
                children: [
                  e.jsx(ke, { handleBackLinkClick: () => a('/'), text: t('accountSettings.backButton') }),
                  w && e.jsx(T, { isOpen: w, setIsOpen: r, type: 'success', variant: 'inline', description: me }),
                  f &&
                    e.jsx(T, {
                      isOpen: f,
                      setIsOpen: d,
                      type: 'critical',
                      variant: 'inline',
                      description: t('errorsMsg.genericErrMsg'),
                    }),
                  e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: t('notifications.heading') }),
                  e.jsx('hr', {}),
                  e.jsx('h1', { className: 'h2', children: t('accountSettings.heading') }),
                  e.jsxs('div', {
                    className: 'flex-parent-element',
                    children: [
                      e.jsx('h2', { className: 'h5', children: t('accountSettings.email') + ':' }),
                      e.jsx('p', { children: ` ${he}` }),
                    ],
                  }),
                  e.jsx(q, {
                    type: 'button',
                    variant: 'secondary',
                    leftIcon: G,
                    label: t('accountSettings.edit'),
                    onClick: () => u(!0),
                  }),
                  Number(Re) === 1 &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs('div', {
                          className: 'flex-parent-element',
                          children: [
                            e.jsx('h2', { className: 'h5', children: t('accountSettings.phone') + ':' }),
                            e.jsxs('p', { children: [' ', ` ${V(D)}`] }),
                          ],
                        }),
                        e.jsx(q, {
                          type: 'button',
                          variant: 'secondary',
                          leftIcon: D ? G : ye,
                          label: t(D ? 'accountSettings.edit' : 'accountSettings.addPhone'),
                          onClick: () => P(!0),
                        }),
                        D &&
                          e.jsx('span', {
                            className: 'padding-left-sm-sm',
                            children: e.jsx(q, {
                              type: 'button',
                              variant: 'critical secondary',
                              leftIcon: je,
                              label: t('accountSettings.remove'),
                              onClick: () => p(!0),
                            }),
                          }),
                      ],
                    }),
                  e.jsxs('div', {
                    className: 'flex-parent-element',
                    children: [
                      e.jsx('h2', { className: 'h5', children: t('accountSettings.language') + ':' }),
                      e.jsx('p', { children: I == Ce ? t('accountSettings.english') : t('accountSettings.french') }),
                    ],
                  }),
                  e.jsx(q, {
                    type: 'button',
                    variant: 'secondary',
                    leftIcon: G,
                    label: t('accountSettings.edit'),
                    onClick: () => a('/account-settings/edit'),
                  }),
                ],
              }),
            }),
            e.jsx(Ie, { variant: 'dark' }),
            e.jsx(Fe, { isOpen: y, setIsOpen: u, setIsAuthenticateModalOpen: v, email: Q, setEmail: Y }),
            e.jsx(Le, {
              type: D ? 'edit' : 'add',
              isOpen: k,
              setIsOpen: P,
              setIsAuthenticateModalOpen: h,
              smsNumber: X,
              setSMSNumber: Z,
              smsNumberInAccount: D,
              smsLanguage: I,
            }),
            e.jsx(De, { isOpen: N, setIsOpen: p, smsNumber: D, setShowSuccessAlert: r, setRefreshData: c }),
            e.jsx(re, {
              type: 'email',
              isOpen: M,
              setIsOpen: v,
              session: i(),
              setShowSuccessAlert: r,
              setSuccessMsg: S,
              setRefreshData: c,
              rememberMe: C(),
              email: Q,
              setEmail: Y,
              setIsAuthenticateEmailModalOpen: v,
            }),
            e.jsx(re, {
              type: 'phone',
              isOpen: j,
              setIsOpen: h,
              session: i(),
              setShowSuccessAlert: r,
              setSuccessMsg: S,
              setRefreshData: c,
              rememberMe: C(),
              smsNumber: X,
              setSMSNumber: Z,
              setIsAuthenticateSMSNumberModalOpen: h,
              smsLanguage: I,
            }),
            e.jsx(Ae, { isErrorModalOpen: o, handleErrorModalClose: pe }),
          ],
        }),
  });
}
export { $e as default };
