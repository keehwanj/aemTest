import { u as b, j as e, r as t, a as te, e as se } from './index-BJVeoK1D.js';
import { E as D, B as K, u as ae, b as ie, M as re, F as oe, H as q } from './Error-DYTFVrcz.js';
import { a as O, C as U } from './Checkbox-Bc0ApF2o.js';
import { M as ce, T as L, v as I } from './input-helpers-B8rETgnD.js';
import { T, u as le } from './useMetadata-Blp6FudJ.js';
import { B as V } from './BackLink-_LqE4RQ_.js';
import { C as de } from './CodeAuthentication-BFCvzVUf.js';
function N() {
  const { t: s } = b();
  return e.jsxs('div', {
    className: 'helpSection',
    children: [
      e.jsx('h2', { children: s('authentication.helpSection.title') }),
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
const F = ({ isOpen: s, onClose: c }) => {
  const { t: l } = b();
  return (
    t.useEffect(() => {
      const d = (r) => {
        r.key === 'Escape' && c();
      };
      return (
        s && window.addEventListener('keydown', d),
        () => {
          window.removeEventListener('keydown', d);
        }
      );
    }, [s]),
    e.jsx(ce, {
      id: 'terms-and-conditions-modal',
      title: l('authentication.termsAndConditions.title'),
      open: s,
      onClose: c,
      children: e.jsx(T, {
        i18nKey: 'authentication.termsAndConditions.content',
        components: { unorderedList: e.jsx('ul', {}), listItem: e.jsx('li', {}) },
      }),
    })
  );
};
function me({
  emailError: s,
  handleSignInEmailChange: c,
  disableButton: l,
  redirectToSignUpPage: d,
  logIn: r,
  rememberMe: p,
  setRememberMe: S,
  signInEmail: j,
  termsAndConditions: E,
  setTermsAndConditions: o,
}) {
  const { t: a } = b(),
    [m, C] = t.useState(!1),
    g = () => {
      let n;
      return (
        s === 'invalid-email'
          ? (n = `${a('authentication.emailScreen.errorMsg')}`)
          : s === 'system-error' && (n = `${a('errorsMsg.genericErrMsg')}`),
        n
      );
    };
  return e.jsxs('div', {
    className: 'card',
    children: [
      e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: a('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx('h1', { className: 'h2 margin-top-sm', children: a('authentication.emailScreen.title') }),
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
        value: j,
        onChange: c,
        placeholder: `${a('authentication.emailScreen.emailPlaceholder')}`,
        error: g(),
        maxlength: D,
      }),
      e.jsx(O, {
        title: '',
        hasOptIn: !0,
        valueArray: ['terms-and-conditions'],
        selectedOptions: E,
        setSelectedOptions: o,
        children: e.jsx(U, {
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
      e.jsx(F, { isOpen: m, onClose: () => C(!1) }),
      e.jsx(O, {
        title: '',
        valueArray: ['remember-me-email'],
        selectedOptions: p,
        setSelectedOptions: S,
        children: e.jsx(U, { id: 'remember-me-email', label: `${a('authentication.emailScreen.checkboxLabel')}` }),
      }),
      e.jsx('div', {
        className: 'primaryButton',
        children: e.jsx(K, {
          variant: 'primary',
          disabled: l,
          type: 'button',
          label: `${a('authentication.emailScreen.primaryButton')}`,
          onClick: () => r(),
        }),
      }),
      e.jsx(N, {}),
    ],
  });
}
function ue({ setSelectedLogIn: s, session: c, email: l, rememberMeChecked: d }) {
  const { t: r } = b();
  return e.jsxs('div', {
    className: 'card emailCodeScreen',
    children: [
      e.jsx(V, { handleBackLinkClick: () => s(!1), text: r('authentication.phoneCodeScreen.backButton') }),
      e.jsx('div', { className: 'h1', role: 'banner', children: r('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx('h1', { className: 'h2', children: r('authentication.checkEmailScreen.title') }),
      e.jsx(de, {
        session: c,
        email: l,
        type: 'verifyEmailOTP',
        setShowSuccessAlert: () => {},
        setIsAuthenticateEmailModalOpen: () => {},
        rememberMeChecked: d,
        length: 6,
      }),
      e.jsx(N, {}),
    ],
  });
}
function he({
  redirectToSignInPage: s,
  handleSignUpEmailChange: c,
  handleConfirmEmailChange: l,
  emailsMatchError: d,
  emailError: r,
  confirmEmailError: p,
  signUpNext: S,
  isDisabled: j,
  termsAndConditions: E,
  setTermsAndConditions: o,
  signUpEmail: a,
  confirmEmail: m,
}) {
  const [C, g] = t.useState(!1),
    { t: n } = b(),
    v = () => {
      let M;
      r === 'invalid-email' || p === 'invalid-email'
        ? (M = `${n('authentication.emailScreen.errorMsg')}`)
        : r === 'system-error' && (M = `${n('errorsMsg.genericErrMsg')}`);
      const k = d === 'unmatched-email' && `${n('errorsMsg.unmatchedEmail')}`;
      return k || M;
    };
  return e.jsxs('div', {
    className: 'card sign-up',
    children: [
      e.jsx(V, { handleBackLinkClick: () => s(), text: n('authentication.phoneCodeScreen.backButton') }),
      e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: n('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx('h1', { className: 'h2 margin-top-sm', children: n('authentication.signUpScreen.title') }),
      e.jsx('p', { children: n('authentication.signUpScreen.description') }),
      e.jsx(L, {
        label: `${n('authentication.signUpScreen.email')}`,
        required: !0,
        type: 'email',
        placeholder: `${n('authentication.signUpScreen.placeHolderText')}`,
        value: a,
        onChange: c,
        error: v(),
        id: 'signup-email',
      }),
      e.jsx(L, {
        label: `${n('authentication.signUpScreen.confirmEmail')}`,
        required: !0,
        type: 'email',
        placeholder: `${n('authentication.signUpScreen.placeHolderText')}`,
        value: m,
        onChange: l,
        error: v(),
        maxlength: D,
      }),
      e.jsx(O, {
        title: '',
        hasOptIn: !0,
        valueArray: ['terms-and-conditions'],
        selectedOptions: E,
        setSelectedOptions: o,
        children: e.jsx(U, {
          id: 'terms-and-conditions',
          label: `${n('authentication.signUpScreen.termsAndConditions')}`,
          useTrans: [
            'authentication.signUpScreen.termsAndConditions',
            { 1: e.jsx('a', { href: '#', onClick: () => g(!0), children: 'terms and conditions.' }) },
          ],
          hasOptIn: !0,
          withoutControlledLabeled: !0,
        }),
      }),
      e.jsx(F, { isOpen: C, onClose: () => g(!1) }),
      e.jsx(K, {
        label: `${n('authentication.signUpScreen.primaryButton')}`,
        variant: 'primary',
        type: 'submit',
        disabled: j,
        onClick: () => S(),
      }),
      e.jsx(N, {}),
    ],
  });
}
function ke() {
  const { i18n: s } = b(),
    { renderMetadata: c } = le(),
    { setSessionCookie: l, getSession: d } = ae(),
    [r, p] = t.useState(!1),
    [S, j] = t.useState(!1),
    [E, o] = t.useState(!0),
    [a, m] = t.useState(''),
    [C, g] = t.useState(!0),
    [n, v] = t.useState(''),
    [M, k] = t.useState(''),
    [y, _] = t.useState([{ value: '', checked: !1 }]),
    [u, $] = t.useState([{ value: '', checked: !1 }]),
    [x, B] = t.useState(''),
    [f, w] = t.useState(''),
    [A, P] = t.useState(''),
    [H, R] = te(['session', 'language', 'rememberMe']),
    [G] = se();
  t.useEffect(() => {
    x && u[0]?.checked ? o(!1) : o(!0);
  }, [x, u]),
    t.useEffect(() => {
      f && A && u[0]?.checked ? g(!1) : g(!0);
    }, [f, A, u]),
    t.useEffect(() => {
      const i = G.get('l');
      i === 'f'
        ? (s.changeLanguage('fr-CA'), R('language', 'fr-CA'))
        : i === 'e'
        ? (s.changeLanguage('en-CA'), R('language', 'en-CA'))
        : ie(H.language);
    }, []),
    t.useEffect(() => {
      c();
    }, [H.language]);
  function z() {
    I(x, m, 'invalid-email') && u[0]?.checked
      ? q
          .createOTP({ email: x, tncAcknowledged: u[0].checked })
          .then((h) => {
            p(!0), l(h.data.token, y[0].checked);
          })
          .catch((h) => {
            console.log(h), o(!1), m('system-error');
          })
      : o(!0);
  }
  function J() {
    Q(f, A) &&
      I(f, m, 'invalid-email') &&
      I(A, v, 'invalid-email') &&
      q
        .createOTP({ email: f, tncAcknowledged: u[0].checked })
        .then((h) => {
          p(!0), l(h.data.token, y[0].checked);
        })
        .catch((h) => {
          console.log(h), o(!1), m('system-error');
        });
  }
  function Q(i, h) {
    return i === h ? (k(''), !0) : (k('unmatched-email'), !1);
  }
  function W() {
    o(!0), m(''), B(''), j(!0);
  }
  function X() {
    o(!0), m(''), v(''), k(''), w(''), P(''), j(!1);
  }
  const Y = (i) => {
      i.length > 2 ? o(!1) : o(!0);
    },
    Z = (i) => {
      B(i.target.value), Y(i.target.value);
    },
    ee = (i) => {
      w(i.target.value);
    },
    ne = (i) => {
      P(i.target.value);
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(re, { accountOptions: [] }),
      e.jsxs('div', {
        className: 'page-content',
        children: [
          !r &&
            !S &&
            e.jsx(me, {
              emailError: a,
              handleSignInEmailChange: Z,
              disableButton: E,
              redirectToSignUpPage: W,
              logIn: z,
              rememberMe: y,
              setRememberMe: _,
              signInEmail: x,
              termsAndConditions: u,
              setTermsAndConditions: $,
            }),
          r && e.jsx(ue, { setSelectedLogIn: p, session: d(), email: x || f, rememberMeChecked: y[0].checked }),
          S &&
            !r &&
            e.jsx(he, {
              redirectToSignInPage: X,
              handleSignUpEmailChange: ee,
              handleConfirmEmailChange: ne,
              emailsMatchError: M,
              emailError: a,
              confirmEmailError: n,
              signUpNext: J,
              isDisabled: C,
              termsAndConditions: u,
              setTermsAndConditions: $,
              signUpEmail: f,
              confirmEmail: A,
            }),
        ],
      }),
      e.jsx(oe, { variant: 'dark' }),
    ],
  });
}
export { ke as default };
