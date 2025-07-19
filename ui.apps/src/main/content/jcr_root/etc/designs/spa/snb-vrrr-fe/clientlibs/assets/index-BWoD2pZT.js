import {
  u as H,
  a as T,
  r as s,
  j as e,
  E as ie,
  v as $,
  w as re,
  x as Z,
  o as ce,
  y as le,
  b as de,
  i as ue,
  s as he,
  k as K,
  t as me,
  S as pe,
  c as z,
  z as ge,
  e as Se,
  A as fe,
} from './index-1zwKKG9V.js';
/* empty css                        */ import { B as Me } from './BackLink-DZUAFOh0.js';
import { H as _, M as Ee, B as U, F as ve } from './Error-GCxiOGMZ.js';
import { M as G, A as R, T as se, f as xe, e as be } from './CodeAuthentication-DFVHru3D.js';
import { D as V, A as ee, E as je } from './ErrorModal-DxFtPxnh.js';
import { T as ye, u as Ce } from './useMetadata-wNctgGUD.js';
const ke = ({ isOpen: i, setIsOpen: u, setIsAuthenticateModalOpen: y, email: a, setEmail: l }) => {
    const { t } = H(),
      { setSessionCookie: O, getSession: I, getRememberMe: n } = T(),
      [S, C] = s.useState(!1),
      [h, v] = s.useState(!1),
      [f, m] = s.useState(!1),
      [M, p] = s.useState(''),
      [g, w] = s.useState(!0),
      [x, k] = s.useState(!1);
    s.useEffect(() => {
      const c = (E) => {
        const B = E.key;
        B === 'Escape' && f ? (C(!0), u(!0)) : B === 'Escape' && !f && N();
      };
      return (
        i && window.addEventListener('keydown', c),
        () => {
          window.removeEventListener('keydown', c);
        }
      );
    }, [i, f]);
    const r = (c) => {
        be(c, w), c.target.value ? v(!0) : v(!1), l(c.target.value);
      },
      N = () => {
        u(!1), l(''), k(!1), p(''), m(!1);
      },
      d = () => {
        h ? C(!0) : N();
      },
      A = () => {
        N(), v(!1);
      },
      F = () => {
        k(!1),
          xe(a, p, 'invalid-email') &&
            _.createChangeEmailOTP({ session: { token: I() }, email: a })
              .then((E) => {
                O(E.data.token, n()), y(!0), u(!1);
              })
              .catch((E) => {
                k(!0), console.log(E);
              });
      },
      b = (c) => {
        const E = c.key;
        E !== 'Escape' && h ? m(!0) : E !== 'Escape' && !h && m(!1);
      },
      D = M === 'invalid-email' ? t('authentication.emailScreen.errorMsg') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(G, {
          title: t('accountSettings.emailModal.heading'),
          hasFooter: !0,
          primaryBtnProps: { label: t('accountSettings.emailModal.save'), onClick: F, disabled: g },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: t('accountSettings.cancel'), onClick: d },
          id: 'edit-email-modal',
          open: i,
          onClose: d,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', t('disclaimer')],
              }),
              e.jsx('p', { children: t('accountSettings.emailModal.subheading') }),
              x &&
                e.jsx(R, {
                  isOpen: x,
                  setIsOpen: k,
                  variant: 'inPage',
                  type: 'critical',
                  description: t('errorsMsg.genericErrMsg'),
                }),
              e.jsx(se, {
                label: t('accountSettings.email'),
                type: 'email',
                required: !0,
                value: a,
                placeholder: t('accountSettings.emailModal.emailPlaceholder'),
                onChange: r,
                error: D,
                maxlength: ie,
                onKeyUp: b,
              }),
            ],
          }),
        }),
        S && e.jsx(V, { isOpen: S, setIsOpen: C, handleDiscardFormChanges: A }),
      ],
    });
  },
  Ne = ({
    type: i,
    isOpen: u,
    setIsOpen: y,
    setIsAuthenticateModalOpen: a,
    smsNumber: l,
    setSMSNumber: t,
    smsNumberInAccount: O,
    smsLanguage: I,
  }) => {
    const { t: n } = H(),
      { setSessionCookie: S, getSession: C, getRememberMe: h } = T(),
      [v, f] = s.useState(!1),
      [m, M] = s.useState(!1),
      [p, g] = s.useState(!1),
      [w, x] = s.useState(''),
      [k, r] = s.useState(!0),
      [N, d] = s.useState(!1);
    s.useEffect(() => {
      t(i === 'add' ? '' : $(O));
    }, [i]),
      s.useEffect(() => {
        const o = (L) => {
          const P = L.key;
          P === 'Escape' && p ? (f(!0), y(!0)) : P === 'Escape' && !p && A();
        };
        return (
          u && window.addEventListener('keydown', o),
          () => {
            window.removeEventListener('keydown', o);
          }
        );
      }, [u, p]);
    const A = () => {
        t(i === 'add' ? '' : $(O)), y(!1), x(''), g(!1), M(!1), r(!0), d(!1);
      },
      F = () => {
        m ? f(!0) : A();
      },
      b = (o) => {
        Z(o.target.value).length === 12 ? r(!1) : r(!0), o.target.value ? M(!0) : M(!1), t(Z(o.target.value));
      },
      D = () => {
        A();
      },
      c = () => {
        r(!0),
          _.createChangeSMSNumberOTP({ session: { token: C() }, smsNumber: re(l), smsLanguage: I })
            .then((o) => {
              S(o.data.token, h()), a(!0), y(!1), x(''), g(!1), M(!1), d(!1);
            })
            .catch((o) => {
              o?.response?.status === 400 || o?.response?.status === 401 ? x('invalid-number') : d(!0),
                r(!1),
                console.error(o);
            });
      },
      E = (o) => {
        const L = o.key;
        L !== 'Escape' && m ? g(!0) : L !== 'Escape' && !m && g(!1);
      },
      B = w === 'invalid-number' ? n('accountSettings.phoneModal.invalidNumber') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(G, {
          title: n(i === 'edit' ? 'accountSettings.phoneModal.headingEdit' : 'accountSettings.phoneModal.headingAdd'),
          hasFooter: !0,
          primaryBtnProps: { label: n('accountSettings.phoneModal.save'), onClick: c, disabled: k },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: n('accountSettings.cancel'), onClick: F },
          id: i === 'edit' ? 'edit-phone-modal' : 'add-phone-modal',
          open: u,
          onClose: F,
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
              N &&
                e.jsx(R, {
                  isOpen: N,
                  setIsOpen: d,
                  variant: 'inPage',
                  type: 'critical',
                  description: n('errorsMsg.genericErrMsg'),
                }),
              e.jsx(se, {
                label: n('accountSettings.phone'),
                type: 'tel',
                required: !0,
                maxlength: 12,
                value: l,
                onChange: b,
                placeholder: '506-555-5555',
                error: B,
                onKeyUp: E,
              }),
            ],
          }),
        }),
        e.jsx(V, { isOpen: v, setIsOpen: f, handleDiscardFormChanges: D }),
      ],
    });
  },
  Ie = ({ isOpen: i, setIsOpen: u, smsNumber: y, setShowSuccessAlert: a, setRefreshData: l }) => {
    const { t } = H(),
      { getSession: O } = T(),
      [I, n] = s.useState(!1),
      [S, C] = s.useState(!1),
      [h, v] = s.useState(!1),
      [f, m] = s.useState(!1),
      [M, p] = s.useState(!1);
    s.useEffect(() => {
      const r = (N) => {
        const d = N.key;
        d === 'Escape' && h ? (n(!0), u(!0)) : d === 'Escape' && !h && g();
      };
      return (
        i && window.addEventListener('keydown', r),
        () => {
          window.removeEventListener('keydown', r);
        }
      );
    }, [i, h]);
    const g = () => {
        u(!1), v(!1), C(!1), m(!1), p(!1);
      },
      w = () => {
        S ? n(!0) : g();
      },
      x = () => {
        g();
      },
      k = () => {
        m(!0),
          _.removeSMSNumber({ params: { session: O() } })
            .then(() => {
              u(!1), v(!1), C(!1), p(!1), a(!0), l && l(!0);
            })
            .catch((r) => {
              p(!0), m(!1), console.error(r);
            });
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(G, {
          title: t('accountSettings.phoneModal.headingRemove'),
          hasFooter: !0,
          primaryBtnProps: {
            label: t('accountSettings.phoneModal.remove.primaryButtonLabel'),
            onClick: k,
            disabled: f,
            variant: 'critical',
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: t('accountSettings.phoneModal.remove.secondaryButtonLabel'), onClick: w },
          id: 'remove-phone-modal',
          open: i,
          onClose: w,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                children: e.jsx('span', {
                  children: e.jsx(ye, {
                    i18nKey: 'accountSettings.phoneModal.remove.message',
                    components: { strong: e.jsx('strong', {}) },
                    values: { smsNumber: y },
                  }),
                }),
              }),
              M &&
                e.jsx(R, {
                  isOpen: M,
                  setIsOpen: p,
                  variant: 'inPage',
                  type: 'critical',
                  description: t('errorsMsg.genericErrMsg'),
                }),
            ],
          }),
        }),
        e.jsx(V, { isOpen: I, setIsOpen: n, handleDiscardFormChanges: x }),
      ],
    });
  },
  Oe = '0';
function Re() {
  const { getSession: i, refreshSessionCookie: u, getRememberMe: y } = T(),
    { t: a } = H(),
    l = ce(),
    t = le(),
    { renderMetadata: O } = Ce(),
    [I] = de(['session', 'language', 'sessionExpiry']),
    [n, S] = s.useState(!1),
    [C, h] = s.useState(''),
    [v, f] = s.useState(!1),
    [m, M] = s.useState(!1),
    [p, g] = s.useState(!1),
    [w, x] = s.useState(!1),
    [k, r] = s.useState(!1),
    [N, d] = s.useState(!1),
    [A, F] = s.useState(''),
    [b, D] = s.useState(''),
    [c, E] = s.useState(''),
    [B, o] = s.useState(!1),
    [L, P] = s.useState(!1),
    [te, W] = s.useState(!1),
    { state: ae, dispatch: q } = ue(),
    { updatedEmail: J, updatedPhoneNumber: Q } = ae.accountSettings;
  s.useEffect(() => {
    he(I.language),
      t.state && t.state.showSuccessAlert && S(t.state.showSuccessAlert),
      t.state && t.state.successMsgType && h(t.state.successMsgType),
      t.state && t.state.showErrorAlert && f(t.state.showErrorAlert),
      P(!0);
  }, []);
  const ne = a(C === 'phone-success' ? 'accountSettings.phoneSuccess' : 'accountSettings.genericSuccess');
  s.useEffect(() => {
    B && q({ type: K.accountSettings.email_changed, payload: { accountSettings: { updatedEmail: '' } } }),
      me(I)
        ? (P(!0),
          _.getAccountDetails({ params: { session: i() } })
            .then((j) => {
              u(i()),
                F(j.data?.account?.email),
                D(j.data?.account?.smsNumber ? j.data?.account?.smsNumber : ''),
                E(j.data?.account?.preferredLanguage),
                o(!1),
                P(!1);
            })
            .catch((j) => {
              console.error(j), P(!1), j?.response?.status === 403 ? l('/authentication') : W(!0);
            }))
        : l('/authentication');
  }, [B]),
    s.useEffect(() => {
      O();
    }, [I.language]);
  const oe = () => {
      W(!1), l('/authentication');
    },
    X = (j) => {
      q({ type: K.accountSettings.email_changed, payload: { accountSettings: { updatedEmail: j } } });
    },
    Y = (j) => {
      q({ type: K.accountSettings.phone_number_changed, payload: { accountSettings: { updatedPhoneNumber: j } } });
    };
  return e.jsx(e.Fragment, {
    children: L
      ? e.jsx(pe, { size: 'lg' })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(Ee, {
              showCart: !1,
              accountOptions: a('mainNavigation.accountOptionsSignIn.options', { returnObjects: !0 }),
              signedIn: !0,
              showSearch: !1,
            }),
            e.jsx('main', {
              className: 'page-content',
              children: e.jsxs('div', {
                className: 'gnb-form-container left',
                children: [
                  e.jsx(Me, { handleBackLinkClick: () => l('/'), text: a('accountSettings.backButton') }),
                  n && e.jsx(R, { isOpen: n, setIsOpen: S, type: 'success', variant: 'inline', description: ne }),
                  v &&
                    e.jsx(R, {
                      isOpen: v,
                      setIsOpen: f,
                      type: 'critical',
                      variant: 'inline',
                      description: a('errorsMsg.genericErrMsg'),
                    }),
                  e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: a('notifications.heading') }),
                  e.jsx('hr', {}),
                  e.jsx('h1', { className: 'h2', children: a('accountSettings.heading') }),
                  e.jsxs('div', {
                    className: 'flex-parent-element',
                    children: [
                      e.jsx('h2', { className: 'h5', children: a('accountSettings.email') + ':' }),
                      e.jsx('p', { children: ` ${A}` }),
                    ],
                  }),
                  e.jsx(U, {
                    type: 'button',
                    variant: 'secondary',
                    leftIcon: z,
                    label: a('accountSettings.edit'),
                    onClick: () => M(!0),
                  }),
                  Number(Oe) === 1 &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs('div', {
                          className: 'flex-parent-element',
                          children: [
                            e.jsx('h2', { className: 'h5', children: a('accountSettings.phone') + ':' }),
                            e.jsxs('p', { children: [' ', ` ${$(b)}`] }),
                          ],
                        }),
                        e.jsx(U, {
                          type: 'button',
                          variant: 'secondary',
                          leftIcon: b ? z : ge,
                          label: a(b ? 'accountSettings.edit' : 'accountSettings.addPhone'),
                          onClick: () => g(!0),
                        }),
                        b &&
                          e.jsx('span', {
                            className: 'padding-left-sm-sm',
                            children: e.jsx(U, {
                              type: 'button',
                              variant: 'critical secondary',
                              leftIcon: Se,
                              label: a('accountSettings.remove'),
                              onClick: () => x(!0),
                            }),
                          }),
                      ],
                    }),
                  e.jsxs('div', {
                    className: 'flex-parent-element',
                    children: [
                      e.jsx('h2', { className: 'h5', children: a('accountSettings.language') + ':' }),
                      e.jsx('p', { children: c == fe ? a('accountSettings.english') : a('accountSettings.french') }),
                    ],
                  }),
                  e.jsx(U, {
                    type: 'button',
                    variant: 'secondary',
                    leftIcon: z,
                    label: a('accountSettings.edit'),
                    onClick: () => l('/account-settings/edit'),
                  }),
                ],
              }),
            }),
            e.jsx(ve, { variant: 'dark' }),
            e.jsx(ke, { isOpen: m, setIsOpen: M, setIsAuthenticateModalOpen: r, email: J, setEmail: X }),
            e.jsx(Ne, {
              type: b ? 'edit' : 'add',
              isOpen: p,
              setIsOpen: g,
              setIsAuthenticateModalOpen: d,
              smsNumber: Q,
              setSMSNumber: Y,
              smsNumberInAccount: b,
              smsLanguage: c,
            }),
            e.jsx(Ie, { isOpen: w, setIsOpen: x, smsNumber: b, setShowSuccessAlert: S, setRefreshData: o }),
            e.jsx(ee, {
              type: 'email',
              isOpen: k,
              setIsOpen: r,
              session: i(),
              setShowSuccessAlert: S,
              setSuccessMsg: h,
              setRefreshData: o,
              rememberMe: y(),
              email: J,
              setEmail: X,
              setIsAuthenticateEmailModalOpen: r,
            }),
            e.jsx(ee, {
              type: 'phone',
              isOpen: N,
              setIsOpen: d,
              session: i(),
              setShowSuccessAlert: S,
              setSuccessMsg: h,
              setRefreshData: o,
              rememberMe: y(),
              smsNumber: Q,
              setSMSNumber: Y,
              setIsAuthenticateSMSNumberModalOpen: d,
              smsLanguage: c,
            }),
            e.jsx(je, { isErrorModalOpen: te, handleErrorModalClose: oe }),
          ],
        }),
  });
}
export { Re as default };
