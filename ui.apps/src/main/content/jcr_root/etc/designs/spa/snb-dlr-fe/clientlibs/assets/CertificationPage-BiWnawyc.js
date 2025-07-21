import { u as P, b as A, r as s, A as q, j as e, S as R } from './index-CLFRBv6J.js';
import { u as w } from './useProgressNavStatus-DD8sWRqk.js';
import { C as H } from './Checkbox-C1AC6eCV.js';
import { B as M } from './ButtonGroup-BCYMqWF3.js';
import { c as O, n as U } from './helpers-C_37FuzF.js';
import { H as F } from './index-Bk6LcBPR.js';
import { A as b } from './Alert-Bj5aUEK6.js';
import { T as g } from './Trans-CLlfKgue.js';
import './Error-iRBmXgUC.js';
const Z = () => {
  const { t } = P(['common', 'certification']),
    r = A(),
    { progressNavList: a } = w(),
    { state: v } = s.useContext(q),
    {
      aboutTheService: S,
      eligibility: p,
      driverLicenceDetails: n,
      certification: j,
      common: k,
      startState: y,
      resetState: L,
      sessionExpired: f,
    } = v;
  s.useEffect(() => {
    f || !S.isChecked
      ? r(a[0].link)
      : p.questionOneAnswer !== '2' || p.questionTwoAnswer !== '4'
      ? r(a[1].link)
      : (!n.driverLicenceDetailsStates.driverlicenceNumber ||
          !n.driverLicenceDetailsStates.issuanceDateYear ||
          !n.driverLicenceDetailsStates.issuanceDateMonth ||
          !n.driverLicenceDetailsStates.issuanceDateDay ||
          !n.driverLicenceDetailsStates.postalCode) &&
        r(a[2].link);
  }, []);
  const { isChecked: o, handleCheckboxChange: C } = j,
    { transactionId: D } = k,
    [E, l] = s.useState(!1),
    [N, c] = s.useState(!1),
    [h, u] = s.useState(!1),
    [i, B] = s.useState(!1),
    [T, m] = s.useState(!1);
  s.useEffect(() => {
    o && (c(!1), l(!1));
  }, [o]),
    s.useEffect(() => {
      f && (B(!0), u(!1), c(!1), m(!1));
    }, [f]);
  const I = () => {
    u(!1),
      o
        ? (l(!1),
          c(!1),
          m(!0),
          F.certifyDLROrder(D, { certify: o })
            .then(() => {
              m(!1), r(a[4].link);
            })
            .catch((d) => {
              var x;
              m(!1), console.error(d), l(!0), ((x = d.response) == null ? void 0 : x.status) === 400 ? c(!0) : u(!0);
            }))
        : (l(!0), c(!0));
  };
  return T
    ? e.jsx(R, { size: 'lg' })
    : e.jsxs(e.Fragment, {
        children: [
          e.jsx('h2', {
            className: 'h2 margin-bottom-xs margin-top-lg',
            children: t('header', { ns: 'certification' }),
          }),
          e.jsxs('p', {
            children: [e.jsx('span', { className: 'required', children: '*' }), ' ', t('disclaimer', { ns: 'common' })],
          }),
          h &&
            e.jsx('div', {
              className: 'padding-bottom-md',
              children: e.jsx(b, {
                isOpen: h,
                type: 'critical',
                description: t('systemErrorMsg', { ns: 'common' }),
                variant: 'inline',
              }),
            }),
          i &&
            e.jsx('div', {
              className: 'feedback-fade-in',
              children: e.jsx(b, {
                isOpen: i,
                variant: 'inPage',
                type: 'critical',
                description: e.jsx(e.Fragment, {
                  children: e.jsx('p', {
                    children: e.jsx(g, {
                      i18nKey: 'timeoutMsg',
                      ns: 'common',
                      components: {
                        1: e.jsx('a', { href: O(t('progressNav.homeUrl', { ns: 'common' })), children: t('header') }),
                      },
                    }),
                  }),
                }),
              }),
            }),
          e.jsx('p', {
            className: 'margin-bottom-lg',
            children: e.jsx(g, {
              i18nKey: 'text',
              ns: 'certification',
              components: { 1: e.jsx('a', { href: 'tel:18888322762', children: '1-888-832-2762' }) },
            }),
          }),
          e.jsx('div', {
            className: 'padding-top-md padding-bottom-md row' + (i ? ' opacity-dk disabled-form' : ''),
            children: e.jsxs('form', {
              onSubmit: (d) => d.preventDefault(),
              children: [
                e.jsx(H, {
                  id: 'certification-checkbox',
                  isChecked: o,
                  label: t('checkboxLabel', { ns: 'certification' }),
                  handleCheckboxChange: C,
                  isRequired: !0,
                  error: N ? t('errorMsg', { ns: 'certification' }) : '',
                  disabled: i,
                }),
                e.jsx(M, {
                  hasLinkBtn: !0,
                  primaryButtonLabel: t('buttonText.continue', { ns: 'common' }),
                  linkButtonLabel: t('buttonText.cancel', { ns: 'common' }),
                  disabledPrimaryBtn: E || i,
                  disableLinkBtn: i,
                  handlePrimaryClick: I,
                  handleLinkButtonClick: () => (
                    sessionStorage.removeItem('appState'),
                    L(),
                    y(),
                    r(a[0].link),
                    U(t('driversLicenceInfoURL', { ns: 'common' }))
                  ),
                }),
              ],
            }),
          }),
        ],
      });
};
export { Z as default };
