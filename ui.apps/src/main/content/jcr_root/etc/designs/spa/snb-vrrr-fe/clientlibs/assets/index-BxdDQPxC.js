import {
  u as M,
  j as e,
  r as i,
  y as ie,
  E as D,
  a as ae,
  G as re,
  b as oe,
  q as ce,
  s as le,
} from './index-BvrgA0VI.js';
import { B as F, M as de, F as me, H as V } from './Error-DT5UljD3.js';
import { C as U, a as N } from './CheckboxGroup-CS8GFcn8.js';
import { M as ue, A as he, T as $, C as pe, f as L } from './CodeAuthentication-BY9NKhU3.js';
import { T, u as ge } from './useMetadata-BpahQIeT.js';
import { B as G } from './BackLink-Ch1aurs2.js';
function B() {
  const { t: a } = M();
  return e.jsxs('div', {
    className: 'helpSection',
    children: [
      e.jsx('h2', { children: a('authentication.helpSection.title') }),
      e.jsx('div', {
        className: 'helpEmail',
        children: e.jsx(T, {
          i18nKey: 'authentication.helpSection.email',
          components: { 1: e.jsx('a', { href: 'mailto:snb@snb.ca', children: 'snb@snb.ca' }) },
        }),
      }),
      e.jsx('div', {
        children: e.jsx(T, {
          i18nKey: 'authentication.helpSection.phone',
          components: { 1: e.jsx('a', { href: 'tel:18888322762', children: '1-888-832-2762' }) },
        }),
      }),
    ],
  });
}
const _ = ({ isOpen: a, onClose: c }) => {
  const { t: l } = M();
  return (
    i.useEffect(() => {
      const d = (r) => {
        r.key === 'Escape' && c();
      };
      return (
        a && window.addEventListener('keydown', d),
        () => {
          window.removeEventListener('keydown', d);
        }
      );
    }, [a]),
    e.jsx(ue, {
      id: 'terms-and-conditions-modal',
      title: l('authentication.termsAndConditions.title'),
      open: a,
      onClose: c,
      children: e.jsx(T, {
        i18nKey: 'authentication.termsAndConditions.content',
        components: { unorderedList: e.jsx('ul', {}), listItem: e.jsx('li', {}) },
      }),
    })
  );
};
function xe({
  emailError: a,
  handleSignInEmailChange: c,
  disableButton: l,
  redirectToSignUpPage: d,
  logIn: r,
  rememberMe: h,
  setRememberMe: f,
  signInEmail: k,
  termsAndConditions: E,
  setTermsAndConditions: A,
}) {
  var j;
  const { t: n } = M(),
    [b, o] = i.useState(!1),
    p = ie(),
    t = i.useRef(null),
    v = () => {
      let m;
      return (
        a === 'invalid-email'
          ? (m = `${n('authentication.emailScreen.errorMsg')}`)
          : a === 'system-error' && (m = `${n('errorsMsg.genericErrMsg')}`),
        m
      );
    },
    g = (m) => {
      t.current = m;
    };
  return e.jsxs('div', {
    className: 'card',
    children: [
      e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: n('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx(he, {
        isOpen: (j = p == null ? void 0 : p.state) == null ? void 0 : j.sessionExpired,
        setIsOpen: () => {},
        variant: 'inPage',
        type: 'critical',
        description: e.jsx(e.Fragment, {
          children: e.jsx('p', {
            children: e.jsx(T, {
              i18nKey: 'authentication.emailScreen.sessionExpired',
              components: {
                1: e.jsx('a', {
                  onClick: () => {
                    t.current && t.current.focus();
                  },
                }),
              },
            }),
          }),
        }),
        hasTimeout: !1,
      }),
      e.jsx('h1', { className: 'h2 margin-top-sm', children: n('authentication.emailScreen.title') }),
      e.jsxs('p', { children: [e.jsx('span', { className: 'required', children: '*' }), ' ', n('disclaimer')] }),
      e.jsx('br', {}),
      e.jsx(T, {
        i18nKey: 'authentication.emailScreen.description1',
        components: { 1: e.jsx('a', { href: '#', onClick: () => d(), children: 'create an account.' }) },
      }),
      e.jsx('p', { className: 'topDescription' }),
      e.jsx('p', { children: n('authentication.emailScreen.description2') }),
      e.jsx($, {
        type: 'email',
        label: `${n('authentication.emailScreen.emailInputLabel')}`,
        required: !0,
        value: k,
        onChange: c,
        placeholder: `${n('authentication.emailScreen.emailPlaceholder')}`,
        error: v(),
        maxlength: D,
        setTextInputRef: g,
      }),
      e.jsx(U, {
        title: '',
        hasOptIn: !0,
        valueArray: ['terms-and-conditions'],
        selectedOptions: E,
        setSelectedOptions: A,
        children: e.jsx(N, {
          id: 'terms-and-conditions',
          label: `${n('authentication.signUpScreen.termsAndConditions')}`,
          useTrans: [
            'authentication.signUpScreen.termsAndConditions',
            { 1: e.jsx('a', { href: '#', onClick: () => o(!0), children: 'terms and conditions.' }) },
          ],
          hasOptIn: !0,
          withoutControlledLabeled: !0,
        }),
      }),
      e.jsx(_, { isOpen: b, onClose: () => o(!1) }),
      e.jsx(U, {
        title: '',
        valueArray: ['remember-me-email'],
        selectedOptions: h,
        setSelectedOptions: f,
        children: e.jsx(N, { id: 'remember-me-email', label: `${n('authentication.emailScreen.checkboxLabel')}` }),
      }),
      e.jsx('div', {
        className: 'primaryButton',
        children: e.jsx(F, {
          variant: 'primary',
          disabled: l,
          type: 'button',
          label: `${n('authentication.emailScreen.primaryButton')}`,
          onClick: () => r(),
        }),
      }),
      e.jsx(B, {}),
    ],
  });
}
function fe({ setSelectedLogIn: a, session: c, email: l, rememberMeChecked: d }) {
  const { t: r } = M();
  return e.jsxs('div', {
    className: 'card emailCodeScreen',
    children: [
      e.jsx(G, { handleBackLinkClick: () => a(!1), text: r('authentication.phoneCodeScreen.backButton') }),
      e.jsx('div', { className: 'h1', role: 'banner', children: r('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx('h1', { className: 'h2', children: r('authentication.checkEmailScreen.title') }),
      e.jsx(pe, {
        session: c,
        email: l,
        type: 'verifyEmailOTP',
        setShowSuccessAlert: () => {},
        setIsAuthenticateEmailModalOpen: () => {},
        rememberMeChecked: d,
        length: 6,
      }),
      e.jsx(B, {}),
    ],
  });
}
function je({
  redirectToSignInPage: a,
  handleSignUpEmailChange: c,
  handleConfirmEmailChange: l,
  emailsMatchError: d,
  emailError: r,
  confirmEmailError: h,
  signUpNext: f,
  isDisabled: k,
  termsAndConditions: E,
  setTermsAndConditions: A,
  signUpEmail: n,
  confirmEmail: b,
}) {
  const [o, p] = i.useState(!1),
    { t } = M(),
    v = () => {
      let g;
      r === 'invalid-email' || h === 'invalid-email'
        ? (g = `${t('authentication.emailScreen.errorMsg')}`)
        : r === 'system-error' && (g = `${t('errorsMsg.genericErrMsg')}`);
      const j = d === 'unmatched-email' && `${t('errorsMsg.unmatchedEmail')}`;
      return j || g;
    };
  return e.jsxs('div', {
    className: 'card sign-up',
    children: [
      e.jsx(G, { handleBackLinkClick: () => a(), text: t('authentication.phoneCodeScreen.backButton') }),
      e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: t('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx('h1', { className: 'h2 margin-top-sm', children: t('authentication.signUpScreen.title') }),
      e.jsxs('p', { children: [e.jsx('span', { className: 'required', children: '*' }), ' ', t('disclaimer')] }),
      e.jsx('p', { children: t('authentication.signUpScreen.description') }),
      e.jsx($, {
        label: `${t('authentication.signUpScreen.email')}`,
        required: !0,
        type: 'email',
        placeholder: `${t('authentication.signUpScreen.placeHolderText')}`,
        value: n,
        onChange: c,
        error: v(),
        id: 'signup-email',
      }),
      e.jsx($, {
        label: `${t('authentication.signUpScreen.confirmEmail')}`,
        required: !0,
        type: 'email',
        placeholder: `${t('authentication.signUpScreen.placeHolderText')}`,
        value: b,
        onChange: l,
        error: v(),
        maxlength: D,
      }),
      e.jsx(U, {
        title: '',
        hasOptIn: !0,
        valueArray: ['terms-and-conditions'],
        selectedOptions: E,
        setSelectedOptions: A,
        children: e.jsx(N, {
          id: 'terms-and-conditions',
          label: `${t('authentication.signUpScreen.termsAndConditions')}`,
          useTrans: [
            'authentication.signUpScreen.termsAndConditions',
            { 1: e.jsx('a', { href: '#', onClick: () => p(!0), children: 'terms and conditions.' }) },
          ],
          hasOptIn: !0,
          withoutControlledLabeled: !0,
        }),
      }),
      e.jsx(_, { isOpen: o, onClose: () => p(!1) }),
      e.jsx(F, {
        label: `${t('authentication.signUpScreen.primaryButton')}`,
        variant: 'primary',
        type: 'submit',
        disabled: k,
        onClick: () => f(),
      }),
      e.jsx(B, {}),
    ],
  });
}
function Me() {
  const { i18n: a } = M(),
    { renderMetadata: c } = ge(),
    { setSessionCookie: l, getSession: d } = ae(),
    [, r] = re('visited'),
    [h, f] = i.useState(!1),
    [k, E] = i.useState(!1),
    [A, n] = i.useState(!0),
    [b, o] = i.useState(''),
    [p, t] = i.useState(!0),
    [v, g] = i.useState(''),
    [j, m] = i.useState(''),
    [I, z] = i.useState([{ value: '', checked: !1 }]),
    [u, w] = i.useState([{ value: '', checked: !1 }]),
    [S, P] = i.useState(''),
    [C, R] = i.useState(''),
    [y, q] = i.useState(''),
    [H, K] = oe(['session', 'language', 'rememberMe']),
    [J] = ce();
  i.useEffect(() => {
    var s;
    S && (s = u[0]) != null && s.checked ? n(!1) : n(!0);
  }, [S, u]),
    i.useEffect(() => {
      var s;
      C && y && (s = u[0]) != null && s.checked ? t(!1) : t(!0);
    }, [C, y, u]),
    i.useEffect(() => {
      const s = J.get('l');
      s === 'f'
        ? (a.changeLanguage('fr-CA'), K('language', 'fr-CA'))
        : s === 'e'
        ? (a.changeLanguage('en-CA'), K('language', 'en-CA'))
        : le(H.language);
    }, []),
    i.useEffect(() => {
      c();
    }, [H.language]);
  function Q() {
    var x;
    L(S, o, 'invalid-email') && ((x = u[0]) == null ? void 0 : x.checked)
      ? V.createOTP({ email: S, tncAcknowledged: u[0].checked })
          .then((O) => {
            f(!0), l(O.data.token, I[0].checked), r('y');
          })
          .catch((O) => {
            console.error(O), n(!1), o('system-error');
          })
      : n(!0);
  }
  function W() {
    X(C, y) &&
      L(C, o, 'invalid-email') &&
      L(y, g, 'invalid-email') &&
      V.createOTP({ email: C, tncAcknowledged: u[0].checked })
        .then((x) => {
          f(!0), l(x.data.token, I[0].checked), r('y');
        })
        .catch((x) => {
          console.error(x), n(!1), o('system-error');
        });
  }
  function X(s, x) {
    return s === x ? (m(''), !0) : (m('unmatched-email'), !1);
  }
  function Y() {
    n(!0), o(''), P(''), E(!0);
  }
  function Z() {
    n(!0), o(''), g(''), m(''), R(''), q(''), E(!1);
  }
  const ee = (s) => {
      s.length > 2 ? n(!1) : n(!0);
    },
    ne = (s) => {
      P(s.target.value), ee(s.target.value);
    },
    te = (s) => {
      R(s.target.value);
    },
    se = (s) => {
      q(s.target.value);
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(de, { accountOptions: [] }),
      e.jsxs('div', {
        className: 'page-content',
        children: [
          !h &&
            !k &&
            e.jsx(xe, {
              emailError: b,
              handleSignInEmailChange: ne,
              disableButton: A,
              redirectToSignUpPage: Y,
              logIn: Q,
              rememberMe: I,
              setRememberMe: z,
              signInEmail: S,
              termsAndConditions: u,
              setTermsAndConditions: w,
            }),
          h && e.jsx(fe, { setSelectedLogIn: f, session: d(), email: S || C, rememberMeChecked: I[0].checked }),
          k &&
            !h &&
            e.jsx(je, {
              redirectToSignInPage: Z,
              handleSignUpEmailChange: te,
              handleConfirmEmailChange: se,
              emailsMatchError: j,
              emailError: b,
              confirmEmailError: v,
              signUpNext: W,
              isDisabled: p,
              termsAndConditions: u,
              setTermsAndConditions: w,
              signUpEmail: C,
              confirmEmail: y,
            }),
        ],
      }),
      e.jsx(me, { variant: 'dark' }),
    ],
  });
}
export { Me as default };
