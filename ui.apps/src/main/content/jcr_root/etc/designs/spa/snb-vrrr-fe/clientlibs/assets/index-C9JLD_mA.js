import {
  u as v,
  j as e,
  r as s,
  x as se,
  E as V,
  a as ie,
  B as ae,
  b as re,
  p as oe,
  q as ce,
} from './index-BMobvG_m.js';
import { B as D, M as le, F as de, H as K } from './Error-BwEFiWtu.js';
import { C as L, a as U } from './CheckboxGroup-hIsrSMWA.js';
import { M as me, A as ue, T as N, C as he, f as O } from './CodeAuthentication-BSB7Q-06.js';
import { T as y, u as pe } from './useMetadata-CgMSDdGh.js';
import { B as F } from './BackLink-zYT_urVo.js';
function $() {
  const { t: i } = v();
  return e.jsxs('div', {
    className: 'helpSection',
    children: [
      e.jsx('h2', { children: i('authentication.helpSection.title') }),
      e.jsx('div', {
        className: 'helpEmail',
        children: e.jsx(y, {
          i18nKey: 'authentication.helpSection.email',
          components: { 1: e.jsx('a', { href: 'mailto:snb@snb.ca', children: 'snb@snb.ca' }) },
        }),
      }),
      e.jsx('div', {
        children: e.jsx(y, {
          i18nKey: 'authentication.helpSection.phone',
          components: { 1: e.jsx('a', { href: 'tel:18888322762', children: '1-888-832-2762' }) },
        }),
      }),
    ],
  });
}
const _ = ({ isOpen: i, onClose: c }) => {
  const { t: l } = v();
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
    e.jsx(me, {
      id: 'terms-and-conditions-modal',
      title: l('authentication.termsAndConditions.title'),
      open: i,
      onClose: c,
      children: e.jsx(y, {
        i18nKey: 'authentication.termsAndConditions.content',
        components: { unorderedList: e.jsx('ul', {}), listItem: e.jsx('li', {}) },
      }),
    })
  );
};
function ge({
  emailError: i,
  handleSignInEmailChange: c,
  disableButton: l,
  redirectToSignUpPage: d,
  logIn: r,
  rememberMe: p,
  setRememberMe: x,
  signInEmail: S,
  termsAndConditions: C,
  setTermsAndConditions: M,
}) {
  const { t: n } = v(),
    [k, o] = s.useState(!1),
    E = se(),
    t = s.useRef(null),
    b = () => {
      let m;
      return (
        i === 'invalid-email'
          ? (m = `${n('authentication.emailScreen.errorMsg')}`)
          : i === 'system-error' && (m = `${n('errorsMsg.genericErrMsg')}`),
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
      e.jsx(ue, {
        isOpen: E?.state?.sessionExpired,
        setIsOpen: () => {},
        variant: 'inPage',
        type: 'critical',
        description: e.jsx(e.Fragment, {
          children: e.jsx('p', {
            children: e.jsx(y, {
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
      e.jsx(y, {
        i18nKey: 'authentication.emailScreen.description1',
        components: { 1: e.jsx('a', { href: '#', onClick: () => d(), children: 'create an account.' }) },
      }),
      e.jsx('p', { className: 'topDescription' }),
      e.jsx('p', { children: n('authentication.emailScreen.description2') }),
      e.jsx(N, {
        type: 'email',
        label: `${n('authentication.emailScreen.emailInputLabel')}`,
        required: !0,
        value: S,
        onChange: c,
        placeholder: `${n('authentication.emailScreen.emailPlaceholder')}`,
        error: b(),
        maxlength: V,
        setTextInputRef: g,
      }),
      e.jsx(L, {
        title: '',
        hasOptIn: !0,
        valueArray: ['terms-and-conditions'],
        selectedOptions: C,
        setSelectedOptions: M,
        children: e.jsx(U, {
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
      e.jsx(_, { isOpen: k, onClose: () => o(!1) }),
      e.jsx(L, {
        title: '',
        valueArray: ['remember-me-email'],
        selectedOptions: p,
        setSelectedOptions: x,
        children: e.jsx(U, { id: 'remember-me-email', label: `${n('authentication.emailScreen.checkboxLabel')}` }),
      }),
      e.jsx('div', {
        className: 'primaryButton',
        children: e.jsx(D, {
          variant: 'primary',
          disabled: l,
          type: 'button',
          label: `${n('authentication.emailScreen.primaryButton')}`,
          onClick: () => r(),
        }),
      }),
      e.jsx($, {}),
    ],
  });
}
function xe({ setSelectedLogIn: i, session: c, email: l, rememberMeChecked: d }) {
  const { t: r } = v();
  return e.jsxs('div', {
    className: 'card emailCodeScreen',
    children: [
      e.jsx(F, { handleBackLinkClick: () => i(!1), text: r('authentication.phoneCodeScreen.backButton') }),
      e.jsx('div', { className: 'h1', role: 'banner', children: r('notifications.heading') }),
      e.jsx('hr', {}),
      e.jsx('h1', { className: 'h2', children: r('authentication.checkEmailScreen.title') }),
      e.jsx(he, {
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
function fe({
  redirectToSignInPage: i,
  handleSignUpEmailChange: c,
  handleConfirmEmailChange: l,
  emailsMatchError: d,
  emailError: r,
  confirmEmailError: p,
  signUpNext: x,
  isDisabled: S,
  termsAndConditions: C,
  setTermsAndConditions: M,
  signUpEmail: n,
  confirmEmail: k,
}) {
  const [o, E] = s.useState(!1),
    { t } = v(),
    b = () => {
      let g;
      r === 'invalid-email' || p === 'invalid-email'
        ? (g = `${t('authentication.emailScreen.errorMsg')}`)
        : r === 'system-error' && (g = `${t('errorsMsg.genericErrMsg')}`);
      const m = d === 'unmatched-email' && `${t('errorsMsg.unmatchedEmail')}`;
      return m || g;
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
      e.jsx(N, {
        label: `${t('authentication.signUpScreen.email')}`,
        required: !0,
        type: 'email',
        placeholder: `${t('authentication.signUpScreen.placeHolderText')}`,
        value: n,
        onChange: c,
        error: b(),
        id: 'signup-email',
      }),
      e.jsx(N, {
        label: `${t('authentication.signUpScreen.confirmEmail')}`,
        required: !0,
        type: 'email',
        placeholder: `${t('authentication.signUpScreen.placeHolderText')}`,
        value: k,
        onChange: l,
        error: b(),
        maxlength: V,
      }),
      e.jsx(L, {
        title: '',
        hasOptIn: !0,
        valueArray: ['terms-and-conditions'],
        selectedOptions: C,
        setSelectedOptions: M,
        children: e.jsx(U, {
          id: 'terms-and-conditions',
          label: `${t('authentication.signUpScreen.termsAndConditions')}`,
          useTrans: [
            'authentication.signUpScreen.termsAndConditions',
            { 1: e.jsx('a', { href: '#', onClick: () => E(!0), children: 'terms and conditions.' }) },
          ],
          hasOptIn: !0,
          withoutControlledLabeled: !0,
        }),
      }),
      e.jsx(_, { isOpen: o, onClose: () => E(!1) }),
      e.jsx(D, {
        label: `${t('authentication.signUpScreen.primaryButton')}`,
        variant: 'primary',
        type: 'submit',
        disabled: S,
        onClick: () => x(),
      }),
      e.jsx($, {}),
    ],
  });
}
function ve() {
  const { i18n: i } = v(),
    { renderMetadata: c } = pe(),
    { setSessionCookie: l, getSession: d } = ie(),
    [, r] = ae('visited'),
    [p, x] = s.useState(!1),
    [S, C] = s.useState(!1),
    [M, n] = s.useState(!0),
    [k, o] = s.useState(''),
    [E, t] = s.useState(!0),
    [b, g] = s.useState(''),
    [m, I] = s.useState(''),
    [T, G] = s.useState([{ value: '', checked: !1 }]),
    [u, B] = s.useState([{ value: '', checked: !1 }]),
    [f, w] = s.useState(''),
    [j, P] = s.useState(''),
    [A, R] = s.useState(''),
    [q, H] = re(['session', 'language', 'rememberMe']),
    [z] = oe();
  s.useEffect(() => {
    f && u[0]?.checked ? n(!1) : n(!0);
  }, [f, u]),
    s.useEffect(() => {
      j && A && u[0]?.checked ? t(!1) : t(!0);
    }, [j, A, u]),
    s.useEffect(() => {
      const a = z.get('l');
      a === 'f'
        ? (i.changeLanguage('fr-CA'), H('language', 'fr-CA'))
        : a === 'e'
        ? (i.changeLanguage('en-CA'), H('language', 'en-CA'))
        : ce(q.language);
    }, []),
    s.useEffect(() => {
      c();
    }, [q.language]);
  function J() {
    O(f, o, 'invalid-email') && u[0]?.checked
      ? K.createOTP({ email: f, tncAcknowledged: u[0].checked })
          .then((h) => {
            x(!0), l(h.data.token, T[0].checked), r('y');
          })
          .catch((h) => {
            console.error(h), n(!1), o('system-error');
          })
      : n(!0);
  }
  function Q() {
    W(j, A) &&
      O(j, o, 'invalid-email') &&
      O(A, g, 'invalid-email') &&
      K.createOTP({ email: j, tncAcknowledged: u[0].checked })
        .then((h) => {
          x(!0), l(h.data.token, T[0].checked), r('y');
        })
        .catch((h) => {
          console.error(h), n(!1), o('system-error');
        });
  }
  function W(a, h) {
    return a === h ? (I(''), !0) : (I('unmatched-email'), !1);
  }
  function X() {
    n(!0), o(''), w(''), C(!0);
  }
  function Y() {
    n(!0), o(''), g(''), I(''), P(''), R(''), C(!1);
  }
  const Z = (a) => {
      a.length > 2 ? n(!1) : n(!0);
    },
    ee = (a) => {
      w(a.target.value), Z(a.target.value);
    },
    ne = (a) => {
      P(a.target.value);
    },
    te = (a) => {
      R(a.target.value);
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(le, { accountOptions: [] }),
      e.jsxs('div', {
        className: 'page-content',
        children: [
          !p &&
            !S &&
            e.jsx(ge, {
              emailError: k,
              handleSignInEmailChange: ee,
              disableButton: M,
              redirectToSignUpPage: X,
              logIn: J,
              rememberMe: T,
              setRememberMe: G,
              signInEmail: f,
              termsAndConditions: u,
              setTermsAndConditions: B,
            }),
          p && e.jsx(xe, { setSelectedLogIn: x, session: d(), email: f || j, rememberMeChecked: T[0].checked }),
          S &&
            !p &&
            e.jsx(fe, {
              redirectToSignInPage: Y,
              handleSignUpEmailChange: ne,
              handleConfirmEmailChange: te,
              emailsMatchError: m,
              emailError: k,
              confirmEmailError: b,
              signUpNext: Q,
              isDisabled: E,
              termsAndConditions: u,
              setTermsAndConditions: B,
              signUpEmail: j,
              confirmEmail: A,
            }),
        ],
      }),
      e.jsx(de, { variant: 'dark' }),
    ],
  });
}
export { ve as default };
