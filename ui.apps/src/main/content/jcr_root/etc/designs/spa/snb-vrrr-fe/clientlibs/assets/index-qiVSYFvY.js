import { u as R, r as s, j as e, e as de, h as ue, a as he, S as me, i as q } from './index-D38DftTu.js';
/* empty css                        */ import { B as ge } from './BackLink-CNlxF_IM.js';
import {
  u as $,
  E as pe,
  H as z,
  s as _,
  c as fe,
  e as se,
  b as Se,
  i as Ee,
  M as Me,
  B as K,
  f as xe,
  F as ve,
} from './Error-CCx1isWs.js';
import { M as G, A as T, T as ne, v as je, e as be } from './input-helpers-CkqBGot3.js';
import { D as oe, E as Ce } from './ErrorModal-CZoq837d.js';
import { C as te } from './CodeAuthentication-Rzm3T_jN.js';
import { u as ye } from './useMetadata-DpbrA7pe.js';
const ke = ({ isOpen: o, setIsOpen: f, setIsAuthenticateModalOpen: S, email: a, setEmail: c }) => {
    const { t } = R(),
      { setSessionCookie: y, getSession: j, getRememberMe: i } = $(),
      [d, k] = s.useState(!1),
      [u, E] = s.useState(!1),
      [h, M] = s.useState(!1),
      [m, x] = s.useState(''),
      [g, F] = s.useState(!0),
      [v, w] = s.useState(!1);
    s.useEffect(() => {
      const l = (r) => {
        const L = r.key;
        L === 'Escape' && h ? (k(!0), f(!0)) : L === 'Escape' && !h && A();
      };
      return (
        o && window.addEventListener('keydown', l),
        () => {
          window.removeEventListener('keydown', l);
        }
      );
    }, [o, h]);
    const b = (l) => {
        be(l, F), l.target.value ? E(!0) : E(!1), c(l.target.value);
      },
      A = () => {
        f(!1), c(''), w(!1), x(''), M(!1);
      },
      I = () => {
        u ? k(!0) : A();
      },
      p = () => {
        A(), E(!1);
      },
      B = () => {
        w(!1),
          je(a, x, 'invalid-email') &&
            z
              .createChangeEmailOTP({ session: { token: j() }, email: a })
              .then((r) => {
                y(r.data.token, i()), S(!0), f(!1);
              })
              .catch((r) => {
                w(!0), console.log(r);
              });
      },
      P = (l) => {
        const r = l.key;
        r !== 'Escape' && u ? M(!0) : r !== 'Escape' && !u && M(!1);
      },
      D = m === 'invalid-email' ? t('authentication.emailScreen.errorMsg') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(G, {
          title: t('accountSettings.emailModal.heading'),
          hasFooter: !0,
          primaryBtnProps: { label: t('accountSettings.emailModal.save'), onClick: B, disabled: g },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: t('accountSettings.cancel'), onClick: I },
          id: 'edit-email-modal',
          open: o,
          onClose: I,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', t('disclaimer')],
              }),
              e.jsx('p', { children: t('accountSettings.emailModal.subheading') }),
              v &&
                e.jsx(T, {
                  isOpen: v,
                  setIsOpen: w,
                  variant: 'inPage',
                  type: 'critical',
                  description: t('errorsMsg.genericErrMsg'),
                }),
              e.jsx(ne, {
                label: t('accountSettings.email'),
                type: 'email',
                required: !0,
                value: a,
                placeholder: t('accountSettings.emailModal.emailPlaceholder'),
                onChange: b,
                error: D,
                maxlength: pe,
                onKeyUp: P,
              }),
            ],
          }),
        }),
        d && e.jsx(oe, { isOpen: d, setIsOpen: k, handleDiscardFormChanges: p }),
      ],
    });
  },
  Ie = ({
    type: o,
    isOpen: f,
    setIsOpen: S,
    setIsAuthenticateModalOpen: a,
    smsNumber: c,
    setSMSNumber: t,
    smsNumberInAccount: y,
    smsLanguage: j,
  }) => {
    const { t: i } = R(),
      { setSessionCookie: d, getSession: k, getRememberMe: u } = $(),
      [E, h] = s.useState(!1),
      [M, m] = s.useState(!1),
      [x, g] = s.useState(!1),
      [F, v] = s.useState(''),
      [w, b] = s.useState(!0),
      [A, I] = s.useState(!1);
    s.useEffect(() => {
      t(o === 'add' ? '' : _(y));
    }, [o]),
      s.useEffect(() => {
        const n = (C) => {
          const O = C.key;
          O === 'Escape' && x ? (h(!0), S(!0)) : O === 'Escape' && !x && p();
        };
        return (
          f && window.addEventListener('keydown', n),
          () => {
            window.removeEventListener('keydown', n);
          }
        );
      }, [f, x]);
    const p = () => {
        t(o === 'add' ? '' : _(y)), S(!1), v(''), g(!1), m(!1), b(!0), I(!1);
      },
      B = () => {
        M ? h(!0) : p();
      },
      P = (n) => {
        se(n.target.value).length === 12 ? b(!1) : b(!0), n.target.value ? m(!0) : m(!1), t(se(n.target.value));
      },
      D = () => {
        p();
      },
      l = () => {
        b(!0),
          z
            .createChangeSMSNumberOTP({ session: { token: k() }, smsNumber: fe(c), smsLanguage: j })
            .then((n) => {
              d(n.data.token, u()), a(!0), S(!1), v(''), g(!1), m(!1), I(!1);
            })
            .catch((n) => {
              var C, O;
              ((C = n == null ? void 0 : n.response) == null ? void 0 : C.status) === 400 ||
              ((O = n == null ? void 0 : n.response) == null ? void 0 : O.status) === 401
                ? v('invalid-number')
                : I(!0),
                console.log(n);
            });
      },
      r = (n) => {
        const C = n.key;
        C !== 'Escape' && M ? g(!0) : C !== 'Escape' && !M && g(!1);
      },
      L = F === 'invalid-number' ? i('accountSettings.phoneModal.invalidNumber') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(G, {
          title: i(o === 'edit' ? 'accountSettings.phoneModal.headingEdit' : 'accountSettings.phoneModal.headingAdd'),
          hasFooter: !0,
          primaryBtnProps: { label: i('accountSettings.phoneModal.save'), onClick: l, disabled: w },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: i('accountSettings.cancel'), onClick: B },
          id: o === 'edit' ? 'edit-phone-modal' : 'add-phone-modal',
          open: f,
          onClose: B,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', i('disclaimer')],
              }),
              e.jsxs('p', {
                children: [
                  e.jsx('span', { children: i('accountSettings.phoneModal.subheading1') }),
                  e.jsx('br', {}),
                  e.jsx('span', { children: i('accountSettings.phoneModal.subheading2') }),
                ],
              }),
              A &&
                e.jsx(T, {
                  isOpen: A,
                  setIsOpen: I,
                  variant: 'inPage',
                  type: 'critical',
                  description: i('errorsMsg.genericErrMsg'),
                }),
              e.jsx(ne, {
                label: i('accountSettings.phone'),
                type: 'tel',
                required: !0,
                maxlength: 12,
                value: c,
                onChange: P,
                placeholder: '506-555-5555',
                error: L,
                onKeyUp: r,
              }),
            ],
          }),
        }),
        e.jsx(oe, { isOpen: E, setIsOpen: h, handleDiscardFormChanges: D }),
      ],
    });
  },
  ae = ({
    isOpen: o,
    setIsOpen: f,
    type: S,
    session: a,
    setShowSuccessAlert: c,
    setSuccessMsg: t,
    setRefreshData: y,
    rememberMe: j,
    email: i,
    setEmail: d,
    setIsAuthenticateEmailModalOpen: k,
    smsNumber: u,
    setSMSNumber: E,
    setIsAuthenticateSMSNumberModalOpen: h,
    smsLanguage: M,
  }) => {
    const { t: m } = R();
    s.useEffect(() => {
      const g = (F) => {
        F.key === 'Escape' && x();
      };
      return (
        o && window.addEventListener('keydown', g),
        () => {
          window.removeEventListener('keydown', g);
        }
      );
    }, [o]);
    const x = () => {
      f(!1), i && d && d(''), u && E && E('');
    };
    return e.jsx('div', {
      className: 'modal-width',
      children: e.jsx(G, {
        title: m(S === 'email' ? 'authentication.modal.emailHeading' : 'authentication.modal.phoneHeading'),
        id: 'authenticate-modal',
        open: o,
        onClose: x,
        children:
          S === 'email'
            ? e.jsx(te, {
                alignment: 'left',
                session: a,
                type: 'updateAccountEmail',
                setShowSuccessAlert: c,
                setSuccessMsg: t,
                setRefreshData: y,
                rememberMeChecked: j,
                length: 6,
                email: i,
                setIsAuthenticateEmailModalOpen: k,
              })
            : e.jsx(te, {
                alignment: 'left',
                session: a,
                type: 'updateAccountSMSNumber',
                setShowSuccessAlert: c,
                setSuccessMsg: t,
                setRefreshData: y,
                rememberMeChecked: j,
                length: 6,
                smsNumber: u,
                setIsAuthenticateSMSNumberModalOpen: h,
                smsLanguage: M,
              }),
      }),
    });
  },
  Oe = '0';
function He() {
  const { getSession: o, refreshSessionCookie: f, getRememberMe: S } = $(),
    { t: a } = R(),
    c = de(),
    t = ue(),
    { renderMetadata: y } = ye(),
    [j] = he(['session', 'language']),
    [i, d] = s.useState(!1),
    [k, u] = s.useState(''),
    [E, h] = s.useState(!1),
    [M, m] = s.useState(!1),
    [x, g] = s.useState(!1),
    [F, v] = s.useState(!1),
    [w, b] = s.useState(!1),
    [A, I] = s.useState(''),
    [p, B] = s.useState(''),
    [P, D] = s.useState(p),
    [l, r] = s.useState(''),
    [L, n] = s.useState(''),
    [C, O] = s.useState(!1),
    [ie, U] = s.useState(!1),
    [ce, V] = s.useState(!1);
  s.useEffect(() => {
    Se(j.language),
      t.state && t.state.showSuccessAlert && d(t.state.showSuccessAlert),
      t.state && t.state.successMsgType && u(t.state.successMsgType),
      t.state && t.state.showErrorAlert && h(t.state.showErrorAlert),
      U(!0);
  }, []);
  const le = a(k === 'phone-success' ? 'accountSettings.phoneSuccess' : 'accountSettings.genericSuccess');
  s.useEffect(() => {
    C && r(''),
      Ee(j)
        ? (U(!0),
          z
            .getAccountDetails({ params: { session: o() } })
            .then((N) => {
              var H, W, J, Q, X, Y, Z, ee;
              f(o()),
                I((W = (H = N.data) == null ? void 0 : H.account) == null ? void 0 : W.email),
                B(
                  (Q = (J = N.data) == null ? void 0 : J.account) != null && Q.smsNumber
                    ? (Y = (X = N.data) == null ? void 0 : X.account) == null
                      ? void 0
                      : Y.smsNumber
                    : ''
                ),
                n((ee = (Z = N.data) == null ? void 0 : Z.account) == null ? void 0 : ee.preferredLanguage),
                O(!1),
                U(!1);
            })
            .catch((N) => {
              var H;
              console.log(N),
                U(!1),
                ((H = N == null ? void 0 : N.response) == null ? void 0 : H.status) === 403
                  ? c('/authentication')
                  : V(!0);
            }))
        : c('/authentication');
  }, [C]),
    s.useEffect(() => {
      y();
    }, [j.language]);
  const re = () => {
    V(!1), c('/authentication');
  };
  return e.jsx(e.Fragment, {
    children: ie
      ? e.jsx(me, { size: 'lg' })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(Me, {
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
                  e.jsx(ge, { handleBackLinkClick: () => c('/'), text: a('accountSettings.backButton') }),
                  i && e.jsx(T, { isOpen: i, setIsOpen: d, type: 'success', variant: 'inline', description: le }),
                  E &&
                    e.jsx(T, {
                      isOpen: E,
                      setIsOpen: h,
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
                  e.jsx(K, {
                    type: 'button',
                    variant: 'secondary',
                    leftIcon: q,
                    label: a('accountSettings.edit'),
                    onClick: () => m(!0),
                  }),
                  Number(Oe) === 1 &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs('div', {
                          className: 'flex-parent-element',
                          children: [
                            e.jsx('h2', { className: 'h5', children: a('accountSettings.phone') + ':' }),
                            e.jsxs('p', { children: [' ', ` ${_(p)}`] }),
                          ],
                        }),
                        e.jsx(K, {
                          type: 'button',
                          variant: 'secondary',
                          leftIcon: p ? q : void 0,
                          label: a(p ? 'accountSettings.edit' : 'accountSettings.addPhone'),
                          onClick: () => g(!0),
                        }),
                      ],
                    }),
                  e.jsxs('div', {
                    className: 'flex-parent-element',
                    children: [
                      e.jsx('h2', { className: 'h5', children: a('accountSettings.language') + ':' }),
                      e.jsx('p', { children: L == xe ? a('accountSettings.english') : a('accountSettings.french') }),
                    ],
                  }),
                  e.jsx(K, {
                    type: 'button',
                    variant: 'secondary',
                    leftIcon: q,
                    label: a('accountSettings.edit'),
                    onClick: () => c('/account-settings/edit'),
                  }),
                ],
              }),
            }),
            e.jsx(ve, { variant: 'dark' }),
            e.jsx(ke, { isOpen: M, setIsOpen: m, setIsAuthenticateModalOpen: v, email: l, setEmail: r }),
            e.jsx(Ie, {
              type: p ? 'edit' : 'add',
              isOpen: x,
              setIsOpen: g,
              setIsAuthenticateModalOpen: b,
              smsNumber: P,
              setSMSNumber: D,
              smsNumberInAccount: p,
              smsLanguage: L,
            }),
            e.jsx(ae, {
              type: 'email',
              isOpen: F,
              setIsOpen: v,
              session: o(),
              setShowSuccessAlert: d,
              setSuccessMsg: u,
              setRefreshData: O,
              rememberMe: S(),
              email: l,
              setEmail: r,
              setIsAuthenticateEmailModalOpen: v,
            }),
            e.jsx(ae, {
              type: 'phone',
              isOpen: w,
              setIsOpen: b,
              session: o(),
              setShowSuccessAlert: d,
              setSuccessMsg: u,
              setRefreshData: O,
              rememberMe: S(),
              smsNumber: P,
              setSMSNumber: D,
              setIsAuthenticateSMSNumberModalOpen: b,
              smsLanguage: L,
            }),
            e.jsx(Ce, { isErrorModalOpen: ce, handleErrorModalClose: re }),
          ],
        }),
  });
}
export { He as default };
