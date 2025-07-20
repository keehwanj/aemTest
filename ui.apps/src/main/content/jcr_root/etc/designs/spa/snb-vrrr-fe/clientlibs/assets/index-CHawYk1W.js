import {
  u as q,
  a as K,
  r as s,
  j as e,
  E as ie,
  t as G,
  v as re,
  w as Z,
  i as R,
  o as ce,
  x as le,
  b as de,
  q as ue,
  s as he,
  S as me,
  c as $,
  y as pe,
  e as ge,
  z as Se,
} from './index-Dw5DrOvU.js';
/* empty css                        */ import { B as fe } from './BackLink-Bv2AApTo.js';
import { H as z, u as se, M as Me, B as T, F as ve } from './Error--vb3sAmR.js';
import { M as V, A as U, T as te, f as Ee, e as xe } from './CodeAuthentication-DdVvuxdz.js';
import { D as W, A as ee, E as be } from './ErrorModal-BUjcGAsN.js';
import { T as ye, u as je } from './useMetadata-CIULtUMN.js';
const Ce = ({ isOpen: o, setIsOpen: m, setIsAuthenticateModalOpen: C, email: E, setEmail: t }) => {
    const { t: a } = q(),
      { setSessionCookie: r, getSession: B, getRememberMe: n } = K(),
      [O, l] = s.useState(!1),
      [x, g] = s.useState(!1),
      [S, d] = s.useState(!1),
      [b, u] = s.useState(''),
      [k, A] = s.useState(!0),
      [N, p] = s.useState(!1);
    s.useEffect(() => {
      const i = (v) => {
        const w = v.key;
        w === 'Escape' && S ? (l(!0), m(!0)) : w === 'Escape' && !S && M();
      };
      return (
        o && window.addEventListener('keydown', i),
        () => {
          window.removeEventListener('keydown', i);
        }
      );
    }, [o, S]);
    const f = (i) => {
        xe(i, A), i.target.value ? g(!0) : g(!1), t(i.target.value);
      },
      M = () => {
        m(!1), t(''), p(!1), u(''), d(!1);
      },
      y = () => {
        x ? l(!0) : M();
      },
      h = () => {
        M(), g(!1);
      },
      I = () => {
        p(!1),
          Ee(E, u, 'invalid-email') &&
            z
              .createChangeEmailOTP({ session: { token: B() }, email: E })
              .then((v) => {
                r(v.data.token, n()), C(!0), m(!1);
              })
              .catch((v) => {
                p(!0), console.log(v);
              });
      },
      P = (i) => {
        const v = i.key;
        v !== 'Escape' && x ? d(!0) : v !== 'Escape' && !x && d(!1);
      },
      D = b === 'invalid-email' ? a('authentication.emailScreen.errorMsg') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(V, {
          title: a('accountSettings.emailModal.heading'),
          hasFooter: !0,
          primaryBtnProps: { label: a('accountSettings.emailModal.save'), onClick: I, disabled: k },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: a('accountSettings.cancel'), onClick: y },
          id: 'edit-email-modal',
          open: o,
          onClose: y,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', a('disclaimer')],
              }),
              e.jsx('p', { children: a('accountSettings.emailModal.subheading') }),
              N &&
                e.jsx(U, {
                  isOpen: N,
                  setIsOpen: p,
                  variant: 'inPage',
                  type: 'critical',
                  description: a('errorsMsg.genericErrMsg'),
                }),
              e.jsx(te, {
                label: a('accountSettings.email'),
                type: 'email',
                required: !0,
                value: E,
                placeholder: a('accountSettings.emailModal.emailPlaceholder'),
                onChange: f,
                error: D,
                maxlength: ie,
                onKeyUp: P,
              }),
            ],
          }),
        }),
        O && e.jsx(W, { isOpen: O, setIsOpen: l, handleDiscardFormChanges: h }),
      ],
    });
  },
  ke = ({
    type: o,
    isOpen: m,
    setIsOpen: C,
    setIsAuthenticateModalOpen: E,
    smsNumber: t,
    setSMSNumber: a,
    smsNumberInAccount: r,
    smsLanguage: B,
  }) => {
    const { t: n } = q(),
      { setSessionCookie: O, getSession: l, getRememberMe: x } = K(),
      [g, S] = s.useState(!1),
      [d, b] = s.useState(!1),
      [u, k] = s.useState(!1),
      [A, N] = s.useState(''),
      [p, f] = s.useState(!0),
      [M, y] = s.useState(!1);
    s.useEffect(() => {
      a(o === 'add' ? '' : G(r));
    }, [o]),
      s.useEffect(() => {
        const c = (F) => {
          const H = F.key;
          H === 'Escape' && u ? (S(!0), C(!0)) : H === 'Escape' && !u && h();
        };
        return (
          m && window.addEventListener('keydown', c),
          () => {
            window.removeEventListener('keydown', c);
          }
        );
      }, [m, u]);
    const h = () => {
        a(o === 'add' ? '' : G(r)), C(!1), N(''), k(!1), b(!1), f(!0), y(!1);
      },
      I = () => {
        d ? S(!0) : h();
      },
      P = (c) => {
        Z(c.target.value).length === 12 ? f(!1) : f(!0), c.target.value ? b(!0) : b(!1), a(Z(c.target.value));
      },
      D = () => {
        h();
      },
      i = () => {
        f(!0),
          z
            .createChangeSMSNumberOTP({ session: { token: l() }, smsNumber: re(t), smsLanguage: B })
            .then((c) => {
              O(c.data.token, x()), E(!0), C(!1), N(''), k(!1), b(!1), y(!1);
            })
            .catch((c) => {
              c?.response?.status === 400 || c?.response?.status === 401 ? N('invalid-number') : y(!0),
                f(!1),
                console.error(c);
            });
      },
      v = (c) => {
        const F = c.key;
        F !== 'Escape' && d ? k(!0) : F !== 'Escape' && !d && k(!1);
      },
      w = A === 'invalid-number' ? n('accountSettings.phoneModal.invalidNumber') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(V, {
          title: n(o === 'edit' ? 'accountSettings.phoneModal.headingEdit' : 'accountSettings.phoneModal.headingAdd'),
          hasFooter: !0,
          primaryBtnProps: { label: n('accountSettings.phoneModal.save'), onClick: i, disabled: p },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: n('accountSettings.cancel'), onClick: I },
          id: o === 'edit' ? 'edit-phone-modal' : 'add-phone-modal',
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
              M &&
                e.jsx(U, {
                  isOpen: M,
                  setIsOpen: y,
                  variant: 'inPage',
                  type: 'critical',
                  description: n('errorsMsg.genericErrMsg'),
                }),
              e.jsx(te, {
                label: n('accountSettings.phone'),
                type: 'tel',
                required: !0,
                maxlength: 12,
                value: t,
                onChange: P,
                placeholder: '506-555-5555',
                error: w,
                onKeyUp: v,
              }),
            ],
          }),
        }),
        e.jsx(W, { isOpen: g, setIsOpen: S, handleDiscardFormChanges: D }),
      ],
    });
  },
  Ne = ({ isOpen: o, setIsOpen: m, smsNumber: C, setShowSuccessAlert: E, setRefreshData: t }) => {
    const { t: a } = q(),
      { getSession: r } = K(),
      [B, n] = s.useState(!1),
      [O, l] = s.useState(!1),
      [x, g] = s.useState(!1),
      [S, d] = s.useState(!1),
      [b, u] = s.useState(!1),
      { state: k, dispatch: A } = se(),
      { hasSMSReminders: N } = k.notifications;
    s.useEffect(() => {
      const h = (I) => {
        const P = I.key;
        P === 'Escape' && x ? (n(!0), m(!0)) : P === 'Escape' && !x && p();
      };
      return (
        o && window.addEventListener('keydown', h),
        () => {
          window.removeEventListener('keydown', h);
        }
      );
    }, [o, x]);
    const p = () => {
        m(!1), g(!1), l(!1), d(!1), u(!1);
      },
      f = () => {
        O ? n(!0) : p();
      },
      M = () => {
        p();
      },
      y = () => {
        d(!0),
          z
            .removeSMSNumber({ params: { session: r() } })
            .then(() => {
              m(!1),
                g(!1),
                l(!1),
                u(!1),
                E(!0),
                t && t(!0),
                N &&
                  A({
                    type: R.notification.text_reminder_option_changed,
                    payload: { notification: { hasSMSReminders: !1 } },
                  });
            })
            .catch((h) => {
              u(!0), d(!1), console.error(h);
            });
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(V, {
          title: a('accountSettings.phoneModal.headingRemove'),
          hasFooter: !0,
          primaryBtnProps: {
            label: a('accountSettings.phoneModal.remove.primaryButtonLabel'),
            onClick: y,
            disabled: S,
            variant: 'critical',
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: a('accountSettings.phoneModal.remove.secondaryButtonLabel'), onClick: f },
          id: 'remove-phone-modal',
          open: o,
          onClose: f,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', {
                children: e.jsx('span', {
                  children: e.jsx(ye, {
                    i18nKey: 'accountSettings.phoneModal.remove.message',
                    components: { strong: e.jsx('strong', {}) },
                    values: { smsNumber: C },
                  }),
                }),
              }),
              b &&
                e.jsx(U, {
                  isOpen: b,
                  setIsOpen: u,
                  variant: 'inPage',
                  type: 'critical',
                  description: a('errorsMsg.genericErrMsg'),
                }),
            ],
          }),
        }),
        e.jsx(W, { isOpen: B, setIsOpen: n, handleDiscardFormChanges: M }),
      ],
    });
  },
  Ie = '0';
function De() {
  const { getSession: o, refreshSessionCookie: m, getRememberMe: C, logout: E } = K(),
    { t } = q(),
    a = ce(),
    r = le(),
    { renderMetadata: B } = je(),
    [n] = de(['session', 'language', 'sessionExpiry']),
    [O, l] = s.useState(!1),
    [x, g] = s.useState(''),
    [S, d] = s.useState(!1),
    [b, u] = s.useState(!1),
    [k, A] = s.useState(!!r.state?.showChangePhoneModal),
    [N, p] = s.useState(!1),
    [f, M] = s.useState(!1),
    [y, h] = s.useState(!1),
    [I, P] = s.useState(''),
    [D, i] = s.useState(!1),
    [v, w] = s.useState(!1),
    [c, F] = s.useState(!1),
    { state: H, dispatch: _ } = se(),
    { email: ae, phoneNumber: L, updatedEmail: J, updatedPhoneNumber: Q } = H.accountSettings;
  s.useEffect(() => {
    ue(n.language),
      r.state && r.state.showSuccessAlert && l(r.state.showSuccessAlert),
      r.state && r.state.successMsgType && g(r.state.successMsgType),
      r.state && r.state.showErrorAlert && d(r.state.showErrorAlert),
      w(!0);
  }, []);
  const ne = t(x === 'phone-success' ? 'accountSettings.phoneSuccess' : 'accountSettings.genericSuccess');
  s.useEffect(() => {
    D &&
      (i(!1),
      _({ type: R.accountSettings.updated_email_changed, payload: { accountSettings: { updatedEmail: '' } } }),
      he(n)
        ? (w(!0),
          z
            .getAccountDetails({ params: { session: o() } })
            .then((j) => {
              m(o()),
                _({
                  type: R.accountSettings.email_changed,
                  payload: { accountSettings: { email: j.data?.account?.email } },
                }),
                _({
                  type: R.accountSettings.phone_number_changed,
                  payload: {
                    accountSettings: { phoneNumber: j.data?.account?.smsNumber ? j.data?.account?.smsNumber : '' },
                  },
                }),
                P(j.data?.account?.preferredLanguage),
                i(!1),
                w(!1);
            })
            .catch((j) => {
              console.error(j), w(!1), j?.response?.status === 403 ? E() : F(!0);
            }))
        : E(!0));
  }, [D]),
    s.useEffect(() => {
      B(), i(!0);
    }, [n.language]);
  const oe = () => {
      F(!1), E();
    },
    X = (j) => {
      _({ type: R.accountSettings.updated_email_changed, payload: { accountSettings: { updatedEmail: j } } });
    },
    Y = (j) => {
      _({
        type: R.accountSettings.updated_phone_number_changed,
        payload: { accountSettings: { updatedPhoneNumber: j } },
      });
    };
  return e.jsx(e.Fragment, {
    children: v
      ? e.jsx(me, { size: 'lg' })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(Me, {
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
                  e.jsx(fe, { handleBackLinkClick: () => a('/'), text: t('accountSettings.backButton') }),
                  O && e.jsx(U, { isOpen: O, setIsOpen: l, type: 'success', variant: 'inline', description: ne }),
                  S &&
                    e.jsx(U, {
                      isOpen: S,
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
                      e.jsx('p', { children: ` ${ae}` }),
                    ],
                  }),
                  e.jsx(T, {
                    type: 'button',
                    variant: 'secondary',
                    leftIcon: $,
                    label: t('accountSettings.edit'),
                    onClick: () => u(!0),
                  }),
                  Number(Ie) === 1 &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs('div', {
                          className: 'flex-parent-element',
                          children: [
                            e.jsx('h2', { className: 'h5', children: t('accountSettings.phone') + ':' }),
                            e.jsxs('p', { children: [' ', ` ${G(L)}`] }),
                          ],
                        }),
                        e.jsx(T, {
                          type: 'button',
                          variant: 'secondary',
                          leftIcon: L ? $ : pe,
                          label: t(L ? 'accountSettings.edit' : 'accountSettings.addPhone'),
                          onClick: () => A(!0),
                        }),
                        L &&
                          e.jsx('span', {
                            className: 'padding-left-sm-sm',
                            children: e.jsx(T, {
                              type: 'button',
                              variant: 'critical secondary',
                              leftIcon: ge,
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
                      e.jsx('p', { children: I == Se ? t('accountSettings.english') : t('accountSettings.french') }),
                    ],
                  }),
                  e.jsx(T, {
                    type: 'button',
                    variant: 'secondary',
                    leftIcon: $,
                    label: t('accountSettings.edit'),
                    onClick: () => a('/account-settings/edit'),
                  }),
                ],
              }),
            }),
            e.jsx(ve, { variant: 'dark' }),
            e.jsx(Ce, { isOpen: b, setIsOpen: u, setIsAuthenticateModalOpen: M, email: J, setEmail: X }),
            e.jsx(ke, {
              type: L ? 'edit' : 'add',
              isOpen: k,
              setIsOpen: A,
              setIsAuthenticateModalOpen: h,
              smsNumber: Q,
              setSMSNumber: Y,
              smsNumberInAccount: L,
              smsLanguage: I,
            }),
            e.jsx(Ne, { isOpen: N, setIsOpen: p, smsNumber: L, setShowSuccessAlert: l, setRefreshData: i }),
            e.jsx(ee, {
              type: 'email',
              isOpen: f,
              setIsOpen: M,
              session: o(),
              setShowSuccessAlert: l,
              setSuccessMsg: g,
              setRefreshData: i,
              rememberMe: C(),
              email: J,
              setEmail: X,
              setIsAuthenticateEmailModalOpen: M,
            }),
            e.jsx(ee, {
              type: 'phone',
              isOpen: y,
              setIsOpen: h,
              session: o(),
              setShowSuccessAlert: l,
              setSuccessMsg: g,
              setRefreshData: i,
              rememberMe: C(),
              smsNumber: Q,
              setSMSNumber: Y,
              setIsAuthenticateSMSNumberModalOpen: h,
              smsLanguage: I,
            }),
            e.jsx(be, { isErrorModalOpen: c, handleErrorModalClose: oe }),
          ],
        }),
  });
}
export { De as default };
