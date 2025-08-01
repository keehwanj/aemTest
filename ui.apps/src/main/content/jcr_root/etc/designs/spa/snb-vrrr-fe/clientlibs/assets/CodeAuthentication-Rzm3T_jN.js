import { t as B, l as Y, u as w, j as n, e as q, r, m as V, k as W } from './index-D38DftTu.js';
import { H as b, h as _, l as z, u as G, c as J } from './Error-CCx1isWs.js';
import { T as L } from './useMetadata-DpbrA7pe.js';
import { A as $ } from './input-helpers-CkqBGot3.js';
function Q(l, a) {
  const i = B(l);
  if (isNaN(a)) return Y(l, NaN);
  const m = i.getDate(),
    u = Y(l, i.getTime());
  u.setMonth(i.getMonth() + a + 1, 0);
  const p = u.getDate();
  return m >= p ? u : (i.setFullYear(u.getFullYear(), u.getMonth(), m), i);
}
function U(l, a) {
  return Q(l, a * 12);
}
function X({ resendCode: l, type: a }) {
  const { t: i } = w();
  return n.jsxs(n.Fragment, {
    children: [
      n.jsx('p', {
        className: 'margin-bottom-sm',
        children: i(
          a === 'email' ? 'authentication.checkEmailScreen.description1' : 'authentication.phoneCodeScreen.description1'
        ),
      }),
      a === 'phone' &&
        n.jsxs('p', {
          className: 'margin-bottom-sm',
          children: [' ', i('authentication.phoneCodeScreen.description2')],
        }),
      n.jsx(L, {
        i18nKey:
          a === 'email'
            ? 'authentication.checkEmailScreen.description2'
            : 'authentication.phoneCodeScreen.description3',
        components: { 1: n.jsx('a', { href: '#', onClick: l, children: 'Resend Code' }) },
      }),
    ],
  });
}
function Z({
  alignment: l,
  codes: a,
  setCodes: i,
  handleResendCodeClick: m,
  session: u,
  type: p,
  setShowSuccessAlert: k,
  setSuccessMsg: C,
  setRefreshData: d,
  setHasSystemError: N,
  hasInvalidCodeError: g,
  setHasInvalidCodeError: j,
  hasExpiredCodeError: x,
  setHasExpiredCodeError: M,
  validCodes: h,
  setValidCode: S,
  setIsAuthenticateEmailModalOpen: y,
  setIsAuthenticateSMSNumberModalOpen: T,
}) {
  const A = q(),
    { t: v } = w(),
    f = r.useRef([]),
    R = (e, t) => {
      const s = [...a];
      if (isNaN(Number(e.target.value))) {
        s[t] = '';
        return;
      }
      (s[t] = e.target.value), i(s), e.target.value && t < a.length - 1 && f.current[t + 1].focus();
    },
    D = (e, t) => {
      const s = e.key.toLowerCase();
      (s === 'backspace' || s === 'delete') && !a[t] && t > 0 && f.current[t - 1].focus(),
        s === 'enter' && a[t] && t < a.length - 1 && f.current[t + 1].focus();
    },
    E = (e) => {
      e.preventDefault();
      const t = e.clipboardData.getData('text').trim();
      if (t.split('').some((o) => isNaN(Number(o))) || t.length !== a.length) {
        i(Array(6).fill('')), j('invalid-code');
        return;
      }
      i(t.split(''));
    };
  r.useEffect(() => {
    if (!a.some((e) => !e)) {
      const e = a.join('');
      S(e);
    }
  }, [a]);
  const O = n.jsx(L, {
      i18nKey: p === 'updateAccountEmail' ? 'errorsMsg.invalidCodeEmail' : 'errorsMsg.invalidCodeSMS',
      components: { 1: n.jsx('a', { href: '#', onClick: m, children: 'resend code' }) },
    }),
    K = n.jsx(L, {
      i18nKey: p === 'updateAccountEmail' ? 'errorsMsg.expiredCodeEmail' : 'errorsMsg.expiredCodeSMS',
      components: { 1: n.jsx('a', { href: '#', onClick: m, children: 'resend code' }) },
    });
  r.useEffect(() => {
    h && h.length === 6 && (j(''), M(''), P());
  }, [h]);
  const P = () => {
      if ((N(!1), p === 'updateAccountEmail'))
        b.verifyChangeEmailOTP({ session: { token: u }, otp: h })
          .then(() => {
            y && y(!1), k(!0), C && C('generic-success'), d && d(!0);
          })
          .catch((e) => {
            var t, s;
            ((t = e == null ? void 0 : e.response) == null ? void 0 : t.status) === 400
              ? j('invalid-code')
              : ((s = e == null ? void 0 : e.response) == null ? void 0 : s.status) === 401
              ? M('expired-code')
              : N(!0),
              console.log(e);
          });
      else if (p === 'updateAccountSMSNumber')
        b.verifyChangeSMSNumberOTP({ session: { token: u }, otp: h })
          .then(() => {
            T && T(!1), k(!0), C && C('phone-success'), d && d(!0);
          })
          .catch((e) => {
            var t, s;
            ((t = e == null ? void 0 : e.response) == null ? void 0 : t.status) === 400
              ? j('invalid-code')
              : ((s = e == null ? void 0 : e.response) == null ? void 0 : s.status) === 401
              ? M('expired-code')
              : N(!0),
              console.log(e);
          });
      else {
        const e = V(U(new Date(), 5), z);
        b.verifyOTP({ session: { token: u }, otp: h, expiryDate: e })
          .then(() => {
            A('/');
          })
          .catch((t) => {
            var s, o;
            ((s = t == null ? void 0 : t.response) == null ? void 0 : s.status) === 400
              ? j('invalid-code')
              : ((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 401
              ? M('expired-code')
              : N(!0),
              console.log(t);
          });
      }
    },
    F = () => {
      let e;
      return (
        g
          ? (e = { 'aria-labelledby': 'invalid-code-error' })
          : x
          ? (e = { 'aria-labelledby': 'expired-code-error' })
          : (e = {}),
        e
      );
    };
  return n.jsxs('fieldset', {
    className: 'codeContainer',
    children: [
      n.jsx('legend', { className: 'sr-only', children: v('authentication.codeAuthentication.fieldLegend') }),
      n.jsx('div', {
        className: W('inputs', { 'left-align': l === 'left', 'center-align': l === 'center' }),
        children:
          a.length === 6 &&
          a.map((e, t) => {
            const s = `digit-${(t + 1).toString()}`;
            return n.jsxs(
              r.Fragment,
              {
                children: [
                  n.jsx('label', {
                    className: 'sr-only',
                    htmlFor: s,
                    children: `${v('authentication.codeAuthentication.label')} ${t + 1}`,
                  }),
                  n.jsx('input', {
                    className: 'input',
                    type: 'text',
                    id: s,
                    name: s,
                    inputMode: 'numeric',
                    maxLength: 1,
                    value: e,
                    onChange: (o) => R(o, t),
                    onKeyDown: (o) => D(o, t),
                    onPaste: (o) => E(o),
                    ref: (o) => (f.current[t] = o),
                    'aria-invalid': !!(x || g),
                    ...F(),
                  }),
                ],
              },
              s
            );
          }),
      }),
      g &&
        n.jsx('div', {
          className: 'gnb-form-input error',
          children: n.jsx(_, { error: g === 'invalid-code' ? O : '', id: 'invalid-code-error' }),
        }),
      x &&
        n.jsx('div', {
          className: 'gnb-form-input error',
          children: n.jsx(_, { error: x === 'expired-code' ? K : '', id: 'expired-code-error' }),
        }),
    ],
  });
}
const ne = ({
  alignment: l = 'center',
  session: a,
  type: i,
  setShowSuccessAlert: m,
  setSuccessMsg: u,
  setRefreshData: p,
  rememberMeChecked: k,
  length: C,
  email: d,
  setIsAuthenticateEmailModalOpen: N,
  smsNumber: g,
  setIsAuthenticateSMSNumberModalOpen: j,
  smsLanguage: x,
}) => {
  const { setSessionCookie: M, getSession: h } = G(),
    { t: S } = w(),
    y = Array(C).fill(''),
    [T, A] = r.useState(y),
    [v, f] = r.useState(!1),
    [R, D] = r.useState(''),
    [E, O] = r.useState(''),
    [K, P] = r.useState(''),
    [F, e] = r.useState(!1),
    t = (c) => {
      M(c, k), A(y), e(!0);
    },
    s = (c) => {
      f(!0), e(!1), console.log(c);
    },
    o = () => {
      O(''),
        P(''),
        D(''),
        i === 'updateAccountEmail'
          ? b
              .createChangeEmailOTP({ session: { token: h() }, email: d })
              .then((c) => {
                t(c.data.token);
              })
              .catch((c) => {
                s(c);
              })
          : i === 'updateAccountSMSNumber'
          ? g &&
            b
              .createChangeSMSNumberOTP({ session: { token: h() }, smsNumber: J(g), smsLanguage: x })
              .then((c) => {
                t(c.data.token);
              })
              .catch((c) => {
                s(c);
              })
          : b
              .resendOTP({ email: d })
              .then((c) => {
                t(c.data.token);
              })
              .catch((c) => {
                s(c);
              });
    };
  return n.jsxs(n.Fragment, {
    children: [
      n.jsx(X, { resendCode: o, type: d ? 'email' : 'phone' }),
      F &&
        n.jsx($, {
          isOpen: F,
          setIsOpen: e,
          variant: 'inPage',
          type: 'success',
          description: S(
            d ? 'authentication.checkEmailScreen.resendCodeMsg' : 'authentication.phoneCodeScreen.resendCodeMsg'
          ),
          hasMarginTop: !0,
        }),
      n.jsxs('div', {
        className: 'code-inputs',
        children: [
          v &&
            n.jsx($, {
              isOpen: v,
              setIsOpen: f,
              variant: 'inPage',
              type: 'critical',
              description: S('errorsMsg.genericErrMsg'),
              hasMarginTop: !0,
            }),
          n.jsx(Z, {
            codes: T,
            setCodes: A,
            handleResendCodeClick: o,
            alignment: l,
            session: a,
            type: i,
            setShowSuccessAlert: m,
            setSuccessMsg: u,
            setRefreshData: p,
            setHasSystemError: f,
            hasInvalidCodeError: E,
            setHasInvalidCodeError: O,
            hasExpiredCodeError: K,
            setHasExpiredCodeError: P,
            validCodes: R,
            setValidCode: D,
            rememberMeChecked: k,
            setIsAuthenticateEmailModalOpen: N,
            setIsAuthenticateSMSNumberModalOpen: j,
          }),
        ],
      }),
    ],
  });
};
export { ne as C };
