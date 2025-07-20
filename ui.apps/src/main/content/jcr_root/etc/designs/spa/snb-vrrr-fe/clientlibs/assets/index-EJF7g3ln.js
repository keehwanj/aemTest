import { u as T, r as t, j as e, d as Z, g as ee, a as te, S as se, h as R } from './index-BJVeoK1D.js';
/* empty css                        */ import { B as ae } from './BackLink-_LqE4RQ_.js';
import {
  u as _,
  E as ne,
  H as $,
  s as q,
  c as oe,
  e as G,
  b as ie,
  i as ce,
  M as le,
  B as K,
  f as re,
  F as de,
} from './Error-DYTFVrcz.js';
import { M as z, A as U, T as J, v as ue, e as he } from './input-helpers-B8rETgnD.js';
import { D as Q } from './DiscardChangesModal-B8ygviCx.js';
import { C as V } from './CodeAuthentication-BFCvzVUf.js';
import { u as ge } from './useMetadata-Blp6FudJ.js';
const me = ({ isOpen: n, setIsOpen: f, setIsAuthenticateModalOpen: S, email: a, setEmail: r }) => {
    const { t: s } = T(),
      { setSessionCookie: C, getSession: j, getRememberMe: o } = _(),
      [d, y] = t.useState(!1),
      [u, E] = t.useState(!1),
      [h, M] = t.useState(!1),
      [g, x] = t.useState(''),
      [m, N] = t.useState(!0),
      [v, I] = t.useState(!1);
    t.useEffect(() => {
      const c = (l) => {
        const w = l.key;
        w === 'Escape' && h ? (y(!0), f(!0)) : w === 'Escape' && !h && O();
      };
      return (
        n && window.addEventListener('keydown', c),
        () => {
          window.removeEventListener('keydown', c);
        }
      );
    }, [n, h]);
    const b = (c) => {
        he(c, N), c.target.value ? E(!0) : E(!1), r(c.target.value);
      },
      O = () => {
        f(!1), r(''), I(!1), x(''), M(!1);
      },
      k = () => {
        u ? y(!0) : O();
      },
      p = () => {
        O(), E(!1);
      },
      F = () => {
        I(!1),
          ue(a, x, 'invalid-email') &&
            $.createChangeEmailOTP({ session: { token: j() }, email: a })
              .then((l) => {
                C(l.data.token, o()), S(!0), f(!1);
              })
              .catch((l) => {
                I(!0), console.log(l);
              });
      },
      B = (c) => {
        const l = c.key;
        l !== 'Escape' && u ? M(!0) : l !== 'Escape' && !u && M(!1);
      },
      P = g === 'invalid-email' ? s('authentication.emailScreen.errorMsg') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(z, {
          title: s('accountSettings.emailModal.heading'),
          hasFooter: !0,
          primaryBtnProps: { label: s('accountSettings.emailModal.save'), onClick: F, disabled: m },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: s('accountSettings.cancel'), onClick: k },
          id: 'edit-email-modal',
          open: n,
          onClose: k,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', { children: s('accountSettings.emailModal.subheading') }),
              v &&
                e.jsx(U, {
                  isOpen: v,
                  setIsOpen: I,
                  variant: 'inPage',
                  type: 'critical',
                  description: s('errorsMsg.genericErrMsg'),
                }),
              e.jsx(J, {
                label: s('accountSettings.email'),
                type: 'email',
                required: !0,
                value: a,
                placeholder: s('accountSettings.emailModal.emailPlaceholder'),
                onChange: b,
                error: P,
                maxlength: ne,
                onKeyUp: B,
              }),
            ],
          }),
        }),
        d && e.jsx(Q, { isOpen: d, setIsOpen: y, handleDiscardFormChanges: p }),
      ],
    });
  },
  pe = ({
    type: n,
    isOpen: f,
    setIsOpen: S,
    setIsAuthenticateModalOpen: a,
    smsNumber: r,
    setSMSNumber: s,
    smsNumberInAccount: C,
    smsLanguage: j,
  }) => {
    const { t: o } = T(),
      { setSessionCookie: d, getSession: y, getRememberMe: u } = _(),
      [E, h] = t.useState(!1),
      [M, g] = t.useState(!1),
      [x, m] = t.useState(!1),
      [N, v] = t.useState(''),
      [I, b] = t.useState(!0),
      [O, k] = t.useState(!1);
    t.useEffect(() => {
      s(n === 'add' ? '' : q(C));
    }, [n]),
      t.useEffect(() => {
        const i = (A) => {
          const D = A.key;
          D === 'Escape' && x ? (h(!0), S(!0)) : D === 'Escape' && !x && p();
        };
        return (
          f && window.addEventListener('keydown', i),
          () => {
            window.removeEventListener('keydown', i);
          }
        );
      }, [f, x]);
    const p = () => {
        s(n === 'add' ? '' : q(C)), S(!1), v(''), m(!1), g(!1), b(!0), k(!1);
      },
      F = () => {
        M ? h(!0) : p();
      },
      B = (i) => {
        G(i.target.value).length === 12 ? b(!1) : b(!0), i.target.value ? g(!0) : g(!1), s(G(i.target.value));
      },
      P = () => {
        p();
      },
      c = () => {
        b(!0),
          $.createChangeSMSNumberOTP({ session: { token: y() }, smsNumber: oe(r), smsLanguage: j })
            .then((i) => {
              d(i.data.token, u()), a(!0), S(!1), v(''), m(!1), g(!1), k(!1);
            })
            .catch((i) => {
              i?.response?.status === 400 || i?.response?.status === 401 ? v('invalid-number') : k(!0), console.log(i);
            });
      },
      l = (i) => {
        const A = i.key;
        A !== 'Escape' && M ? m(!0) : A !== 'Escape' && !M && m(!1);
      },
      w = N === 'invalid-number' ? o('accountSettings.phoneModal.invalidNumber') : '';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(z, {
          title: o(n === 'edit' ? 'accountSettings.phoneModal.headingEdit' : 'accountSettings.phoneModal.headingAdd'),
          hasFooter: !0,
          primaryBtnProps: { label: o('accountSettings.phoneModal.save'), onClick: c, disabled: I },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: o('accountSettings.cancel'), onClick: F },
          id: n === 'edit' ? 'edit-phone-modal' : 'add-phone-modal',
          open: f,
          onClose: F,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [
                  e.jsx('span', { children: o('accountSettings.phoneModal.subheading1') }),
                  e.jsx('br', {}),
                  e.jsx('span', { children: o('accountSettings.phoneModal.subheading2') }),
                ],
              }),
              O &&
                e.jsx(U, {
                  isOpen: O,
                  setIsOpen: k,
                  variant: 'inPage',
                  type: 'critical',
                  description: o('errorsMsg.genericErrMsg'),
                }),
              e.jsx(J, {
                label: o('accountSettings.phone'),
                type: 'tel',
                required: !0,
                maxlength: 12,
                value: r,
                onChange: B,
                placeholder: '506-555-5555',
                error: w,
                onKeyUp: l,
              }),
            ],
          }),
        }),
        e.jsx(Q, { isOpen: E, setIsOpen: h, handleDiscardFormChanges: P }),
      ],
    });
  },
  W = ({
    isOpen: n,
    setIsOpen: f,
    type: S,
    session: a,
    setShowSuccessAlert: r,
    setSuccessMsg: s,
    setRefreshData: C,
    rememberMe: j,
    email: o,
    setEmail: d,
    setIsAuthenticateEmailModalOpen: y,
    smsNumber: u,
    setSMSNumber: E,
    setIsAuthenticateSMSNumberModalOpen: h,
    smsLanguage: M,
  }) => {
    const { t: g } = T();
    t.useEffect(() => {
      const m = (N) => {
        N.key === 'Escape' && x();
      };
      return (
        n && window.addEventListener('keydown', m),
        () => {
          window.removeEventListener('keydown', m);
        }
      );
    }, [n]);
    const x = () => {
      f(!1), o && d && d(''), u && E && E('');
    };
    return e.jsx('div', {
      className: 'modal-width',
      children: e.jsx(z, {
        title: g(S === 'email' ? 'authentication.modal.emailHeading' : 'authentication.modal.phoneHeading'),
        id: 'authenticate-modal',
        open: n,
        onClose: x,
        children:
          S === 'email'
            ? e.jsx(V, {
                alignment: 'left',
                session: a,
                type: 'updateAccountEmail',
                setShowSuccessAlert: r,
                setSuccessMsg: s,
                setRefreshData: C,
                rememberMeChecked: j,
                length: 6,
                email: o,
                setIsAuthenticateEmailModalOpen: y,
              })
            : e.jsx(V, {
                alignment: 'left',
                session: a,
                type: 'updateAccountSMSNumber',
                setShowSuccessAlert: r,
                setSuccessMsg: s,
                setRefreshData: C,
                rememberMeChecked: j,
                length: 6,
                smsNumber: u,
                setIsAuthenticateSMSNumberModalOpen: h,
                smsLanguage: M,
              }),
      }),
    });
  },
  fe = '1';
function ye() {
  const { getSession: n, refreshSessionCookie: f, getRememberMe: S } = _(),
    { t: a } = T(),
    r = Z(),
    s = ee(),
    { renderMetadata: C } = ge(),
    [j] = te(['session', 'language']),
    [o, d] = t.useState(!1),
    [y, u] = t.useState(''),
    [E, h] = t.useState(!1),
    [M, g] = t.useState(!1),
    [x, m] = t.useState(!1),
    [N, v] = t.useState(!1),
    [I, b] = t.useState(!1),
    [O, k] = t.useState(''),
    [p, F] = t.useState(''),
    [B, P] = t.useState(p),
    [c, l] = t.useState(''),
    [w, i] = t.useState(''),
    [A, D] = t.useState(!1),
    [X, H] = t.useState(!1);
  t.useEffect(() => {
    ie(j.language),
      s.state && s.state.showSuccessAlert && d(s.state.showSuccessAlert),
      s.state && s.state.successMsgType && u(s.state.successMsgType),
      s.state && s.state.showErrorAlert && h(s.state.showErrorAlert),
      H(!0);
  }, []);
  const Y = a(y === 'phone-success' ? 'accountSettings.phoneSuccess' : 'accountSettings.genericSuccess');
  return (
    t.useEffect(() => {
      A && l(''),
        ce(j)
          ? (H(!0),
            $.getAccountDetails({ params: { session: n() } })
              .then((L) => {
                f(n()),
                  k(L.data?.account?.email),
                  F(L.data?.account?.smsNumber ? L.data?.account?.smsNumber : ''),
                  i(L.data?.account?.preferredLanguage),
                  D(!1),
                  H(!1);
              })
              .catch((L) => {
                console.log(L), H(!1), L?.response?.status === 403 && r('/authentication');
              }))
          : r('/authentication');
    }, [A]),
    t.useEffect(() => {
      C();
    }, [j.language]),
    e.jsx(e.Fragment, {
      children: X
        ? e.jsx(se, { size: 'lg' })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx(le, {
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
                    e.jsx(ae, { handleBackLinkClick: () => r('/'), text: a('accountSettings.backButton') }),
                    o && e.jsx(U, { isOpen: o, setIsOpen: d, type: 'success', variant: 'inline', description: Y }),
                    E &&
                      e.jsx(U, {
                        isOpen: E,
                        setIsOpen: h,
                        type: 'critical',
                        variant: 'inline',
                        description: a('errorsMsg.genericErrMsg'),
                      }),
                    e.jsx('div', {
                      className: 'h1 margin-top-sm',
                      role: 'banner',
                      children: a('notifications.heading'),
                    }),
                    e.jsx('hr', {}),
                    e.jsx('h1', { className: 'h2', children: a('accountSettings.heading') }),
                    e.jsxs('div', {
                      className: 'flex-parent-element',
                      children: [
                        e.jsx('h2', { className: 'h5', children: a('accountSettings.email') + ':' }),
                        e.jsx('p', { children: ` ${O}` }),
                      ],
                    }),
                    e.jsx(K, {
                      type: 'button',
                      variant: 'secondary',
                      leftIcon: R,
                      label: a('accountSettings.edit'),
                      onClick: () => g(!0),
                    }),
                    Number(fe) === 1 &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsxs('div', {
                            className: 'flex-parent-element',
                            children: [
                              e.jsx('h2', { className: 'h5', children: a('accountSettings.phone') + ':' }),
                              e.jsxs('p', { children: [' ', ` ${q(p)}`] }),
                            ],
                          }),
                          e.jsx(K, {
                            type: 'button',
                            variant: 'secondary',
                            leftIcon: p ? R : void 0,
                            label: a(p ? 'accountSettings.edit' : 'accountSettings.addPhone'),
                            onClick: () => m(!0),
                          }),
                        ],
                      }),
                    e.jsxs('div', {
                      className: 'flex-parent-element',
                      children: [
                        e.jsx('h2', { className: 'h5', children: a('accountSettings.language') + ':' }),
                        e.jsx('p', { children: w == re ? a('accountSettings.english') : a('accountSettings.french') }),
                      ],
                    }),
                    e.jsx(K, {
                      type: 'button',
                      variant: 'secondary',
                      leftIcon: R,
                      label: a('accountSettings.edit'),
                      onClick: () => r('/account-settings/edit'),
                    }),
                  ],
                }),
              }),
              e.jsx(de, { variant: 'dark' }),
              e.jsx(me, { isOpen: M, setIsOpen: g, setIsAuthenticateModalOpen: v, email: c, setEmail: l }),
              e.jsx(pe, {
                type: p ? 'edit' : 'add',
                isOpen: x,
                setIsOpen: m,
                setIsAuthenticateModalOpen: b,
                smsNumber: B,
                setSMSNumber: P,
                smsNumberInAccount: p,
                smsLanguage: w,
              }),
              e.jsx(W, {
                type: 'email',
                isOpen: N,
                setIsOpen: v,
                session: n(),
                setShowSuccessAlert: d,
                setSuccessMsg: u,
                setRefreshData: D,
                rememberMe: S(),
                email: c,
                setEmail: l,
                setIsAuthenticateEmailModalOpen: v,
              }),
              e.jsx(W, {
                type: 'phone',
                isOpen: I,
                setIsOpen: b,
                session: n(),
                setShowSuccessAlert: d,
                setSuccessMsg: u,
                setRefreshData: D,
                rememberMe: S(),
                smsNumber: B,
                setSMSNumber: P,
                setIsAuthenticateSMSNumberModalOpen: b,
                smsLanguage: w,
              }),
            ],
          }),
    })
  );
}
export { ye as default };
