import { u as b, j as e, r as s, a as se, g as ae } from './index-D38DftTu.js';
import { E as K, B as V, u as ie, b as re, M as oe, F as ce, H as D } from './Error-CCx1isWs.js';
import { a as U, C as N } from './Checkbox-ZvSTE2DX.js';
import { M as le, T as L, v as O } from './input-helpers-CkqBGot3.js';
import { T, u as de } from './useMetadata-DpbrA7pe.js';
import { B as F } from './BackLink-CNlxF_IM.js';
import { C as me } from './CodeAuthentication-Rzm3T_jN.js';
function $() {
  const { t: i } = b();
  return e.jsxs('div', {
    className: 'helpSection',
    children: [
      e.jsx('h2', { children: i('authentication.helpSection.title') }),
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
const _ = ({ isOpen: i, onClose: c }) => {
  const { t: l } = b();
  return (
    s.useEffect(() => {
      const d = (r) => {
        r.key === 'Escape' && c();
      };
      return (
        i && window.addEventListener('keydown', d),
        () => {
          window.removeEventListener('keydown', d);
        }
      );
    }, [i]),
    e.jsx(le, {
      id: 'terms-and-conditions-modal',
      title: l('authentication.termsAndConditions.title'),
      open: i,
      onClose: c,
      children: e.jsx(T, {
        i18nKey: 'authentication.termsAndConditions.content',
        components: { unorderedList: e.jsx('ul', {}), listItem: e.jsx('li', {}) },
      }),
    })
  );
};
function ue({
  emailError: i,
  handleSignInEmailChange: c,
  disableButton: l,
  redirectToSignUpPage: d,
  logIn: r,
  rememberMe: h,
  setRememberMe: j,
  signInEmail: S,
  termsAndConditions: E,
  setTermsAndConditions: o,
}) {
  const { t: a } = b(),
    [m, C] = s.useState(!1),
    g = () => {
      let t;
      return (
        i === 'invalid-email'
          ? (t = `${a('authentication.emailScreen.errorMsg')}`)
          : i === 'system-error' && (t = `${a('errorsMsg.genericErrMsg')}`),
        t
      );
    };
  return e.jsxs('div', {
    className: 'card',
    children: [
      e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: a('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx('h1', { className: 'h2 margin-top-sm', children: a('authentication.emailScreen.title') }),
      e.jsxs('p', { children: [e.jsx('span', { className: 'required', children: '*' }), ' ', a('disclaimer')] }),
      e.jsx('br', {}),
      e.jsx(T, {
        i18nKey: 'authentication.emailScreen.description1',
        components: { 1: e.jsx('a', { href: '#', onClick: () => d(), children: 'create an account.' }) },
      }),
      e.jsx('p', { className: 'topDescription' }),
      e.jsx('p', { children: a('authentication.emailScreen.description2') }),
      e.jsx(L, {
        type: 'email',
        label: `${a('authentication.emailScreen.emailInputLabel')}`,
        required: !0,
        value: S,
        onChange: c,
        placeholder: `${a('authentication.emailScreen.emailPlaceholder')}`,
        error: g(),
        maxlength: K,
      }),
      e.jsx(U, {
        title: '',
        hasOptIn: !0,
        valueArray: ['terms-and-conditions'],
        selectedOptions: E,
        setSelectedOptions: o,
        children: e.jsx(N, {
          id: 'terms-and-conditions',
          label: `${a('authentication.signUpScreen.termsAndConditions')}`,
          useTrans: [
            'authentication.signUpScreen.termsAndConditions',
            { 1: e.jsx('a', { href: '#', onClick: () => C(!0), children: 'terms and conditions.' }) },
          ],
          hasOptIn: !0,
          withoutControlledLabeled: !0,
        }),
      }),
      e.jsx(_, { isOpen: m, onClose: () => C(!1) }),
      e.jsx(U, {
        title: '',
        valueArray: ['remember-me-email'],
        selectedOptions: h,
        setSelectedOptions: j,
        children: e.jsx(N, { id: 'remember-me-email', label: `${a('authentication.emailScreen.checkboxLabel')}` }),
      }),
      e.jsx('div', {
        className: 'primaryButton',
        children: e.jsx(V, {
          variant: 'primary',
          disabled: l,
          type: 'button',
          label: `${a('authentication.emailScreen.primaryButton')}`,
          onClick: () => r(),
        }),
      }),
      e.jsx($, {}),
    ],
  });
}
function he({ setSelectedLogIn: i, session: c, email: l, rememberMeChecked: d }) {
  const { t: r } = b();
  return e.jsxs('div', {
    className: 'card emailCodeScreen',
    children: [
      e.jsx(F, { handleBackLinkClick: () => i(!1), text: r('authentication.phoneCodeScreen.backButton') }),
      e.jsx('div', { className: 'h1', role: 'banner', children: r('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx('h1', { className: 'h2', children: r('authentication.checkEmailScreen.title') }),
      e.jsx(me, {
        session: c,
        email: l,
        type: 'verifyEmailOTP',
        setShowSuccessAlert: () => {},
        setIsAuthenticateEmailModalOpen: () => {},
        rememberMeChecked: d,
        length: 6,
      }),
      e.jsx($, {}),
    ],
  });
}
function pe({
  redirectToSignInPage: i,
  handleSignUpEmailChange: c,
  handleConfirmEmailChange: l,
  emailsMatchError: d,
  emailError: r,
  confirmEmailError: h,
  signUpNext: j,
  isDisabled: S,
  termsAndConditions: E,
  setTermsAndConditions: o,
  signUpEmail: a,
  confirmEmail: m,
}) {
  const [C, g] = s.useState(!1),
    { t } = b(),
    v = () => {
      let M;
      r === 'invalid-email' || h === 'invalid-email'
        ? (M = `${t('authentication.emailScreen.errorMsg')}`)
        : r === 'system-error' && (M = `${t('errorsMsg.genericErrMsg')}`);
      const k = d === 'unmatched-email' && `${t('errorsMsg.unmatchedEmail')}`;
      return k || M;
    };
  return e.jsxs('div', {
    className: 'card sign-up',
    children: [
      e.jsx(F, { handleBackLinkClick: () => i(), text: t('authentication.phoneCodeScreen.backButton') }),
      e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: t('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx('h1', { className: 'h2 margin-top-sm', children: t('authentication.signUpScreen.title') }),
      e.jsxs('p', { children: [e.jsx('span', { className: 'required', children: '*' }), ' ', t('disclaimer')] }),
      e.jsx('p', { children: t('authentication.signUpScreen.description') }),
      e.jsx(L, {
        label: `${t('authentication.signUpScreen.email')}`,
        required: !0,
        type: 'email',
        placeholder: `${t('authentication.signUpScreen.placeHolderText')}`,
        value: a,
        onChange: c,
        error: v(),
        id: 'signup-email',
      }),
      e.jsx(L, {
        label: `${t('authentication.signUpScreen.confirmEmail')}`,
        required: !0,
        type: 'email',
        placeholder: `${t('authentication.signUpScreen.placeHolderText')}`,
        value: m,
        onChange: l,
        error: v(),
        maxlength: K,
      }),
      e.jsx(U, {
        title: '',
        hasOptIn: !0,
        valueArray: ['terms-and-conditions'],
        selectedOptions: E,
        setSelectedOptions: o,
        children: e.jsx(N, {
          id: 'terms-and-conditions',
          label: `${t('authentication.signUpScreen.termsAndConditions')}`,
          useTrans: [
            'authentication.signUpScreen.termsAndConditions',
            { 1: e.jsx('a', { href: '#', onClick: () => g(!0), children: 'terms and conditions.' }) },
          ],
          hasOptIn: !0,
          withoutControlledLabeled: !0,
        }),
      }),
      e.jsx(_, { isOpen: C, onClose: () => g(!1) }),
      e.jsx(V, {
        label: `${t('authentication.signUpScreen.primaryButton')}`,
        variant: 'primary',
        type: 'submit',
        disabled: S,
        onClick: () => j(),
      }),
      e.jsx($, {}),
    ],
  });
}
function be() {
  const { i18n: i } = b(),
    { renderMetadata: c } = de(),
    { setSessionCookie: l, getSession: d } = ie(),
    [r, h] = s.useState(!1),
    [j, S] = s.useState(!1),
    [E, o] = s.useState(!0),
    [a, m] = s.useState(''),
    [C, g] = s.useState(!0),
    [t, v] = s.useState(''),
    [M, k] = s.useState(''),
    [y, G] = s.useState([{ value: '', checked: !1 }]),
    [u, B] = s.useState([{ value: '', checked: !1 }]),
    [x, w] = s.useState(''),
    [f, P] = s.useState(''),
    [A, H] = s.useState(''),
    [q, R] = se(['session', 'language', 'rememberMe']),
    [z] = ae();
  s.useEffect(() => {
    var n;
    x && (n = u[0]) != null && n.checked ? o(!1) : o(!0);
  }, [x, u]),
    s.useEffect(() => {
      var n;
      f && A && (n = u[0]) != null && n.checked ? g(!1) : g(!0);
    }, [f, A, u]),
    s.useEffect(() => {
      const n = z.get('l');
      n === 'f'
        ? (i.changeLanguage('fr-CA'), R('language', 'fr-CA'))
        : n === 'e'
        ? (i.changeLanguage('en-CA'), R('language', 'en-CA'))
        : re(q.language);
    }, []),
    s.useEffect(() => {
      c();
    }, [q.language]);
  function J() {
    var p;
    O(x, m, 'invalid-email') && ((p = u[0]) == null ? void 0 : p.checked)
      ? D.createOTP({ email: x, tncAcknowledged: u[0].checked })
          .then((I) => {
            h(!0), l(I.data.token, y[0].checked);
          })
          .catch((I) => {
            console.log(I), o(!1), m('system-error');
          })
      : o(!0);
  }
  function Q() {
    W(f, A) &&
      O(f, m, 'invalid-email') &&
      O(A, v, 'invalid-email') &&
      D.createOTP({ email: f, tncAcknowledged: u[0].checked })
        .then((p) => {
          h(!0), l(p.data.token, y[0].checked);
        })
        .catch((p) => {
          console.log(p), o(!1), m('system-error');
        });
  }
  function W(n, p) {
    return n === p ? (k(''), !0) : (k('unmatched-email'), !1);
  }
  function X() {
    o(!0), m(''), w(''), S(!0);
  }
  function Y() {
    o(!0), m(''), v(''), k(''), P(''), H(''), S(!1);
  }
  const Z = (n) => {
      n.length > 2 ? o(!1) : o(!0);
    },
    ee = (n) => {
      w(n.target.value), Z(n.target.value);
    },
    ne = (n) => {
      P(n.target.value);
    },
    te = (n) => {
      H(n.target.value);
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(oe, { accountOptions: [] }),
      e.jsxs('div', {
        className: 'page-content',
        children: [
          !r &&
            !j &&
            e.jsx(ue, {
              emailError: a,
              handleSignInEmailChange: ee,
              disableButton: E,
              redirectToSignUpPage: X,
              logIn: J,
              rememberMe: y,
              setRememberMe: G,
              signInEmail: x,
              termsAndConditions: u,
              setTermsAndConditions: B,
            }),
          r && e.jsx(he, { setSelectedLogIn: h, session: d(), email: x || f, rememberMeChecked: y[0].checked }),
          j &&
            !r &&
            e.jsx(pe, {
              redirectToSignInPage: Y,
              handleSignUpEmailChange: ne,
              handleConfirmEmailChange: te,
              emailsMatchError: M,
              emailError: a,
              confirmEmailError: t,
              signUpNext: Q,
              isDisabled: C,
              termsAndConditions: u,
              setTermsAndConditions: B,
              signUpEmail: f,
              confirmEmail: A,
            }),
        ],
      }),
      e.jsx(ce, { variant: 'dark' }),
    ],
  });
}
export { be as default };
