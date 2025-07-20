import { u as w, j as n, d as B, r as u, i as q } from './index-BJVeoK1D.js';
import { t as V, l as Y, H as b, n as W, h as _, o as z, u as G, c as J } from './Error-DYTFVrcz.js';
import { T as L } from './useMetadata-Blp6FudJ.js';
import { A as $ } from './input-helpers-B8rETgnD.js';
function Q(r, s) {
  const o = V(r);
  if (isNaN(s)) return Y(r, NaN);
  const m = o.getDate(),
    l = Y(r, o.getTime());
  l.setMonth(o.getMonth() + s + 1, 0);
  const p = l.getDate();
  return m >= p ? l : (o.setFullYear(l.getFullYear(), l.getMonth(), m), o);
}
function U(r, s) {
  return Q(r, s * 12);
}
function X({ resendCode: r, type: s }) {
  const { t: o } = w();
  return n.jsxs(n.Fragment, {
    children: [
      n.jsx('p', {
        className: 'margin-bottom-sm',
        children: o(
          s === 'email' ? 'authentication.checkEmailScreen.description1' : 'authentication.phoneCodeScreen.description1'
        ),
      }),
      s === 'phone' &&
        n.jsxs('p', {
          className: 'margin-bottom-sm',
          children: [' ', o('authentication.phoneCodeScreen.description2')],
        }),
      n.jsx(L, {
        i18nKey:
          s === 'email'
            ? 'authentication.checkEmailScreen.description2'
            : 'authentication.phoneCodeScreen.description3',
        components: { 1: n.jsx('a', { href: '#', onClick: r, children: 'Resend Code' }) },
      }),
    ],
  });
}
function Z({
  alignment: r,
  codes: s,
  setCodes: o,
  handleResendCodeClick: m,
  session: l,
  type: p,
  setShowSuccessAlert: S,
  setSuccessMsg: C,
  setRefreshData: d,
  setHasSystemError: N,
  hasInvalidCodeError: g,
  setHasInvalidCodeError: j,
  hasExpiredCodeError: x,
  setHasExpiredCodeError: M,
  validCodes: h,
  setValidCode: k,
  setIsAuthenticateEmailModalOpen: y,
  setIsAuthenticateSMSNumberModalOpen: T,
}) {
  const A = B(),
    { t: v } = w(),
    f = u.useRef([]),
    R = (e, t) => {
      const a = [...s];
      if (isNaN(Number(e.target.value))) {
        a[t] = '';
        return;
      }
      (a[t] = e.target.value), o(a), e.target.value && t < s.length - 1 && f.current[t + 1].focus();
    },
    D = (e, t) => {
      const a = e.key.toLowerCase();
      (a === 'backspace' || a === 'delete') && !s[t] && t > 0 && f.current[t - 1].focus(),
        a === 'enter' && s[t] && t < s.length - 1 && f.current[t + 1].focus();
    },
    E = (e) => {
      e.preventDefault();
      const t = e.clipboardData.getData('text').trim();
      if (t.split('').some((c) => isNaN(Number(c))) || t.length !== s.length) {
        o(Array(6).fill('')), j('invalid-code');
        return;
      }
      o(t.split(''));
    };
  u.useEffect(() => {
    if (!s.some((e) => !e)) {
      const e = s.join('');
      k(e);
    }
  }, [s]);
  const O = n.jsx(L, {
      i18nKey: p === 'updateAccountEmail' ? 'errorsMsg.invalidCodeEmail' : 'errorsMsg.invalidCodeSMS',
      components: { 1: n.jsx('a', { href: '#', onClick: m, children: 'resend code' }) },
    }),
    K = n.jsx(L, {
      i18nKey: p === 'updateAccountEmail' ? 'errorsMsg.expiredCodeEmail' : 'errorsMsg.expiredCodeSMS',
      components: { 1: n.jsx('a', { href: '#', onClick: m, children: 'resend code' }) },
    });
  u.useEffect(() => {
    h && h.length === 6 && (j(''), M(''), P());
  }, [h]);
  const P = () => {
      if ((N(!1), p === 'updateAccountEmail'))
        b.verifyChangeEmailOTP({ session: { token: l }, otp: h })
          .then(() => {
            y && y(!1), S(!0), C && C('generic-success'), d && d(!0);
          })
          .catch((e) => {
            e?.response?.status === 400 ? j('invalid-code') : e?.response?.status === 401 ? M('expired-code') : N(!0),
              console.log(e);
          });
      else if (p === 'updateAccountSMSNumber')
        b.verifyChangeSMSNumberOTP({ session: { token: l }, otp: h })
          .then(() => {
            T && T(!1), S(!0), C && C('phone-success'), d && d(!0);
          })
          .catch((e) => {
            e?.response?.status === 400 ? j('invalid-code') : e?.response?.status === 401 ? M('expired-code') : N(!0),
              console.log(e);
          });
      else {
        const e = W(U(new Date(), 5), z);
        b.verifyOTP({ session: { token: l }, otp: h, expiryDate: e })
          .then(() => {
            A('/');
          })
          .catch((t) => {
            t?.response?.status === 400 ? j('invalid-code') : t?.response?.status === 401 ? M('expired-code') : N(!0),
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
        className: q('inputs', { 'left-align': r === 'left', 'center-align': r === 'center' }),
        children:
          s.length === 6 &&
          s.map((e, t) => {
            const a = `digit-${(t + 1).toString()}`;
            return n.jsxs(
              u.Fragment,
              {
                children: [
                  n.jsx('label', {
                    className: 'sr-only',
                    htmlFor: a,
                    children: `${v('authentication.codeAuthentication.label')} ${t + 1}`,
                  }),
                  n.jsx('input', {
                    className: 'input',
                    type: 'text',
                    id: a,
                    name: a,
                    inputMode: 'numeric',
                    maxLength: 1,
                    value: e,
                    onChange: (c) => R(c, t),
                    onKeyDown: (c) => D(c, t),
                    onPaste: (c) => E(c),
                    ref: (c) => (f.current[t] = c),
                    'aria-invalid': !!(x || g),
                    ...F(),
                  }),
                ],
              },
              a
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
  alignment: r = 'center',
  session: s,
  type: o,
  setShowSuccessAlert: m,
  setSuccessMsg: l,
  setRefreshData: p,
  rememberMeChecked: S,
  length: C,
  email: d,
  setIsAuthenticateEmailModalOpen: N,
  smsNumber: g,
  setIsAuthenticateSMSNumberModalOpen: j,
  smsLanguage: x,
}) => {
  const { setSessionCookie: M, getSession: h } = G(),
    { t: k } = w(),
    y = Array(C).fill(''),
    [T, A] = u.useState(y),
    [v, f] = u.useState(!1),
    [R, D] = u.useState(''),
    [E, O] = u.useState(''),
    [K, P] = u.useState(''),
    [F, e] = u.useState(!1),
    t = (i) => {
      M(i, S), A(y), e(!0);
    },
    a = (i) => {
      f(!0), e(!1), console.log(i);
    },
    c = () => {
      O(''),
        P(''),
        D(''),
        o === 'updateAccountEmail'
          ? b
              .createChangeEmailOTP({ session: { token: h() }, email: d })
              .then((i) => {
                t(i.data.token);
              })
              .catch((i) => {
                a(i);
              })
          : o === 'updateAccountSMSNumber'
          ? g &&
            b
              .createChangeSMSNumberOTP({ session: { token: h() }, smsNumber: J(g), smsLanguage: x })
              .then((i) => {
                t(i.data.token);
              })
              .catch((i) => {
                a(i);
              })
          : b
              .resendOTP({ email: d })
              .then((i) => {
                t(i.data.token);
              })
              .catch((i) => {
                a(i);
              });
    };
  return n.jsxs(n.Fragment, {
    children: [
      n.jsx(X, { resendCode: c, type: d ? 'email' : 'phone' }),
      F &&
        n.jsx($, {
          isOpen: F,
          setIsOpen: e,
          variant: 'inPage',
          type: 'success',
          description: k(
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
              description: k('errorsMsg.genericErrMsg'),
              hasMarginTop: !0,
            }),
          n.jsx(Z, {
            codes: T,
            setCodes: A,
            handleResendCodeClick: c,
            alignment: r,
            session: s,
            type: o,
            setShowSuccessAlert: m,
            setSuccessMsg: l,
            setRefreshData: p,
            setHasSystemError: f,
            hasInvalidCodeError: E,
            setHasInvalidCodeError: O,
            hasExpiredCodeError: K,
            setHasExpiredCodeError: P,
            validCodes: R,
            setValidCode: D,
            rememberMeChecked: S,
            setIsAuthenticateEmailModalOpen: N,
            setIsAuthenticateSMSNumberModalOpen: j,
          }),
        ],
      }),
    ],
  });
};
export { ne as C };
