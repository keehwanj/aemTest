import {
  j as e,
  b as mt,
  u as dt,
  r as a,
  A as ut,
  S as pt,
  F as ht,
  e as ft,
  T as gt,
  E as xt,
  v as yt,
  f as ge,
  g as bt,
} from './index-CLFRBv6J.js';
import { T as S } from './TextInput-H70CAxuG.js';
import { B as Et } from './ButtonGroup-BCYMqWF3.js';
import { C as _t } from './Checkbox-C1AC6eCV.js';
import { u as vt } from './useProgressNavStatus-DD8sWRqk.js';
import { A as ae } from './Alert-Bj5aUEK6.js';
import { r as It, c as jt, n as Bt, a as St } from './helpers-C_37FuzF.js';
import { H as xe } from './index-Bk6LcBPR.js';
import { P as ye } from './index.types-CnoW_BGG.js';
import { u as Ct } from './useRenewBackEndSession-D9G_hgZe.js';
import { T as Nt } from './Trans-CLlfKgue.js';
import './Error-iRBmXgUC.js';
import './Modal-BgDk8fPM.js';
const At = 'https://ph-cp-d.snb.ca/ph-cp/95074049.aspx',
  Tt = () =>
    e.jsxs('form', {
      style: { display: 'none' },
      id: 'frmHostedCheckout',
      name: 'frmHostedCheckout',
      method: 'POST',
      action: At,
      children: [
        e.jsx('input', { type: 'hidden', id: 'gross_amt', name: 'gross_amt' }),
        e.jsx('input', { type: 'hidden', id: 'return_url', name: 'return_url' }),
        e.jsx('input', { type: 'hidden', id: 'customer_first_name', name: 'customer_first_name' }),
        e.jsx('input', { type: 'hidden', id: 'customer_last_name', name: 'customer_last_name' }),
        e.jsx('input', { type: 'hidden', id: 'customer_email', name: 'customer_email' }),
        e.jsx('input', { type: 'hidden', id: 'customer_phone', name: 'customer_phone' }),
        e.jsx('input', { type: 'hidden', id: 'pmt_method', name: 'pmt_method' }),
        e.jsx('input', { type: 'hidden', id: 'reference1', name: 'reference1' }),
        e.jsx('input', { type: 'hidden', id: 'reference2', name: 'reference2' }),
        e.jsx('input', { type: 'hidden', id: 'language', name: 'language' }),
        e.jsx('input', { type: 'hidden', id: 'app_cd', name: 'app_cd' }),
        e.jsx('input', { type: 'hidden', id: 'timestamp', name: 'timestamp' }),
        e.jsx('input', { type: 'hidden', id: 'channel', name: 'channel' }),
        e.jsx('input', { type: 'hidden', id: 'agent', name: 'agent' }),
        e.jsx('input', { type: 'hidden', id: 'receipt', name: 'receipt' }),
        e.jsx('input', { type: 'hidden', id: 'emailreceipt', name: 'emailreceipt' }),
        e.jsx('input', { type: 'hidden', id: 'freight', name: 'freight' }),
        e.jsx('input', { type: 'hidden', id: 'return_url_receipt', name: 'return_url_receipt' }),
        e.jsx('input', { type: 'hidden', id: 'return_url_receipt_text', name: 'return_url_receipt_text' }),
        e.jsx('input', { type: 'hidden', id: 'totaltax', name: 'TotalTax', value: '0.00' }),
        e.jsx('input', { type: 'hidden', id: 'taxxml', name: 'taxxml' }),
        e.jsx('input', { type: 'hidden', id: 'ClientId', name: 'ClientId', value: '0' }),
        e.jsx('input', { type: 'hidden', id: 'ClientId', name: 'ExtClientId', value: '0' }),
        e.jsx('input', { type: 'hidden', id: 'OAConfirm', name: 'OAConfirm', value: 'false' }),
        e.jsx('input', { type: 'hidden', id: 'A3Logon', name: 'A3Logon', value: 'IAM_Test' }),
        e.jsx('input', { type: 'hidden', id: 'Line_item1', name: 'Line_item1' }),
        e.jsx('input', { type: 'input', id: 'HashValue', name: 'HashValue' }),
        e.jsx('button', { type: 'submit', id: 'phub-submit-button', children: 'Submit' }),
      ],
    }),
  zt = () => {
    const m = mt(),
      { t } = dt(['contactInformation', 'common']),
      { progressNavList: d } = vt(),
      { state: be } = a.useContext(ut),
      {
        aboutTheService: Ee,
        eligibility: se,
        driverLicenceDetails: u,
        certification: _e,
        contactInformation: ve,
        common: Ie,
        cookies: je,
        startState: Be,
        resetState: x,
        sessionExpired: C,
      } = be,
      {
        contactInformationFormStates: ie,
        handleFirstNameInputChange: Se,
        handleLastNameInputChange: Ce,
        handleTelephoneInputChange: Ne,
        handleEmailInputChange: Ae,
        handleCheckboxChange: Te,
        setInitialContactInfoStates: ke,
      } = ve,
      { firstName: r, lastName: o, telephone: c, email: l, customerPermissionChecked: re } = ie,
      { languageCookies: Le } = je,
      { transactionId: Pe, updateTransactionId: He } = Ie,
      De = Ct(),
      [Me, y] = a.useState(!1),
      [N, b] = a.useState(!1),
      [Fe, A] = a.useState(''),
      [T, E] = a.useState(!1),
      [Re, k] = a.useState(''),
      [L, P] = a.useState(!1),
      [oe, _] = a.useState(!1),
      [le, v] = a.useState(''),
      [ce, I] = a.useState(!1),
      [me, de] = a.useState(!1),
      [s, ue] = a.useState(!1),
      [pe, j] = a.useState(!1),
      we = r && o && l,
      he = new URLSearchParams(window.location.search),
      fe = he.get('status'),
      p = he.get('transactionId');
    a.useEffect(() => {
      C || !Ee.isChecked
        ? m(d[0].link)
        : se.questionOneAnswer !== '2' || se.questionTwoAnswer !== '4'
        ? m(d[1].link)
        : !u.driverLicenceDetailsStates.driverlicenceNumber ||
          !u.driverLicenceDetailsStates.issuanceDateYear ||
          !u.driverLicenceDetailsStates.issuanceDateMonth ||
          !u.driverLicenceDetailsStates.issuanceDateDay ||
          !u.driverLicenceDetailsStates.postalCode
        ? m(d[2].link)
        : _e.isChecked
        ? p && (He(p), Ve())
        : m(d[3].link);
    }, []);
    const Oe = (n) => (n.length === 0 ? '' : n.slice(0, 3) + '-' + n.slice(3, 6) + '-' + n.slice(6, 10)),
      Ve = async () => {
        if (p)
          try {
            j(!0);
            const n = await xe.getPaymentDetails(p);
            n &&
              n.status === 200 &&
              n.data &&
              (n.data.transactionStatus === 1
                ? (x(), m(d[0].link))
                : (ke({
                    customerPermissionChecked: !!n.data.customerPermissionChecked,
                    firstName: n.data.firstName,
                    lastName: n.data.lastName,
                    telephone: Oe(n.data.phone),
                    email: n.data.email,
                  }),
                  It(),
                  fe === ye.DECLINED ? de(!0) : fe === ye.ERROR && I(!0)),
              j(!1));
          } catch (n) {
            console.error(n), x(), j(!1);
          }
      };
    a.useEffect(() => {
      (r || o || c || l) && y(!1);
    }, [r, o, l, c, ie]),
      a.useEffect(() => {
        (N || T || L || oe) && y(!0);
      }, [N, T, L, oe]),
      a.useEffect(() => {
        C && (ue(!0), b(!1), A(''), E(!1), k(''), _(!1), v(''), P(!1), I(!1), de(!1), j(!1));
      }, [C]);
    const Ue = (n) => {
        const {
            grossAmt: h,
            returnUrl: f,
            customerFirstName: g,
            customerLastName: i,
            customerEmail: B,
            customerPhone: Ge,
            pmtMethod: Ke,
            reference1: Ye,
            reference2: Je,
            language: Qe,
            appCd: We,
            timestamp: Xe,
            channel: Ze,
            agent: $e,
            receipt: et,
            emailReceipt: tt,
            freight: nt,
            returnUrlReceipt: at,
            returnUrlReceiptText: st,
            taxXml: it,
            lineItem1: rt,
            hashValue: ot,
          } = n,
          H = document.getElementById('gross_amt'),
          D = document.getElementById('return_url'),
          M = document.getElementById('customer_first_name'),
          F = document.getElementById('customer_last_name'),
          R = document.getElementById('customer_email'),
          w = document.getElementById('customer_phone'),
          O = document.getElementById('pmt_method'),
          V = document.getElementById('reference1'),
          U = document.getElementById('reference2'),
          q = document.getElementById('language'),
          z = document.getElementById('app_cd'),
          G = document.getElementById('timestamp'),
          K = document.getElementById('channel'),
          Y = document.getElementById('agent'),
          J = document.getElementById('receipt'),
          Q = document.getElementById('emailreceipt'),
          W = document.getElementById('freight'),
          X = document.getElementById('return_url_receipt'),
          Z = document.getElementById('return_url_receipt_text'),
          $ = document.getElementById('taxxml'),
          ee = document.getElementById('Line_item1'),
          te = document.getElementById('HashValue');
        H == null || H.setAttribute('value', h),
          D == null || D.setAttribute('value', f),
          M == null || M.setAttribute('value', g),
          F == null || F.setAttribute('value', i),
          R == null || R.setAttribute('value', B),
          w == null || w.setAttribute('value', Ge),
          O == null || O.setAttribute('value', Ke),
          V == null || V.setAttribute('value', Ye),
          U == null || U.setAttribute('value', Je),
          q == null || q.setAttribute('value', Qe),
          z == null || z.setAttribute('value', We),
          G == null || G.setAttribute('value', Xe),
          K == null || K.setAttribute('value', Ze),
          Y == null || Y.setAttribute('value', $e),
          J == null || J.setAttribute('value', et),
          Q == null || Q.setAttribute('value', tt),
          W == null || W.setAttribute('value', nt),
          X == null || X.setAttribute('value', at),
          Z == null || Z.setAttribute('value', st),
          $ == null || $.setAttribute('value', it),
          ee == null || ee.setAttribute('value', rt),
          te == null || te.setAttribute('value', ot);
        const ne = document.getElementById('phub-submit-button'),
          lt = setInterval(() => {
            const ct = sessionStorage.getItem('startTime');
            St(ct) || y(!1), clearInterval(lt);
          }, 5e3);
        ne == null || ne.click();
      },
      qe = () => {
        I(!1);
        const n = yt(c.split('-').join('')),
          h = bt(l),
          f = ge(r),
          g = ge(o);
        y(!0),
          r ? (r && !f ? (b(!0), A('invalid')) : r && f && b(!1)) : (b(!0), A('empty')),
          o ? (o && !g ? (E(!0), k('invalid')) : o && g && E(!1)) : (E(!0), k('empty')),
          P(c ? !n : !1),
          l && !h ? (_(!0), v('invalid')) : l ? l && h && (v(''), _(!1)) : (v('empty'), _(!0)),
          we &&
            h &&
            f &&
            g &&
            (!c || (c && n)) &&
            xe
              .PHUBIntegration(Pe, {
                languageCode: Le,
                customerFirstName: r,
                customerLastName: o,
                customerPhone: c.split('-').join(''),
                customerEmail: l,
                customerContactPermission: re,
              })
              .then((i) => {
                const B = i == null ? void 0 : i.data;
                Ue({ ...B.phubHashObject, hashValue: B.hash });
              })
              .catch((i) => {
                (i == null ? void 0 : i.status) === 401 ? (ue(!0), x()) : (console.error(i), I(!0));
              });
      },
      ze = () => {
        m(d[3].link);
      };
    return e.jsxs(e.Fragment, {
      children: [
        pe && e.jsx(pt, { size: 'lg' }),
        !pe &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx('h2', {
                className: 'margin-bottom-xs margin-top-lg',
                children: t('heading', { ns: 'contactInformation' }),
              }),
              e.jsxs('p', {
                children: [
                  e.jsx('span', { className: 'required', children: '*' }),
                  ' ',
                  t('disclaimer', { ns: 'common' }),
                ],
              }),
              ce &&
                e.jsx(ae, {
                  isOpen: ce,
                  type: 'critical',
                  description: t('systemErrorMsg', { ns: 'common' }),
                  variant: 'inline',
                }),
              me &&
                e.jsx(ae, {
                  isOpen: me,
                  type: 'critical',
                  description: t('declinedErrorMsg', { ns: 'contactInformation' }),
                  variant: 'inline',
                }),
              s &&
                e.jsx('div', {
                  className: 'feedback-fade-in',
                  children: e.jsx(ae, {
                    isOpen: s,
                    variant: 'inPage',
                    type: 'critical',
                    description: e.jsx(e.Fragment, {
                      children: e.jsx('p', {
                        children: e.jsx(Nt, {
                          i18nKey: 'timeoutMsg',
                          ns: 'common',
                          components: {
                            1: e.jsx('a', {
                              href: jt(t('progressNav.homeUrl', { ns: 'common' })),
                              children: t('header'),
                            }),
                          },
                        }),
                      }),
                    }),
                  }),
                }),
              e.jsxs('div', {
                className: 'padding-top-md padding-bottom-md row' + (s ? ' opacity-dk disabled-form' : ''),
                children: [
                  e.jsxs('div', {
                    className: 'col-lg-8',
                    children: [
                      e.jsx(S, {
                        label: t('form.firstName.label', { ns: 'contactInformation' }),
                        type: 'text',
                        value: r,
                        error: N ? t('form.firstName.errorMsg.' + Fe, { ns: 'contactInformation' }) : '',
                        id: 'SNB_First_Nam',
                        maxlength: ht,
                        onChange: Se,
                        required: !0,
                        disabled: s,
                      }),
                      e.jsx(S, {
                        label: t('form.lastName.label', { ns: 'contactInformation' }),
                        type: 'text',
                        value: o,
                        error: T ? t('form.lastName.errorMsg.' + Re, { ns: 'contactInformation' }) : '',
                        id: 'SNB_Fam_Nam',
                        maxlength: ft,
                        onChange: Ce,
                        required: !0,
                        disabled: s,
                      }),
                      e.jsx(S, {
                        label: t('form.telephone.label', { ns: 'contactInformation' }),
                        type: 'tel',
                        value: c,
                        error: L ? t('form.telephone.errorMsg') : '',
                        id: 'SNB_D_phone',
                        maxlength: gt,
                        onChange: Ne,
                        placeholder: t('form.telephone.placeholder', { ns: 'contactInformation' }),
                        disabled: s,
                      }),
                      e.jsx(S, {
                        label: t('form.email.label', { ns: 'contactInformation' }),
                        type: 'email',
                        value: l,
                        helperText: t('form.email.helpText', { ns: 'contactInformation' }),
                        error: le ? t('form.email.errorMsg.' + le, { ns: 'contactInformation' }) : '',
                        id: 'SNB_Email',
                        maxlength: xt,
                        onChange: Ae,
                        required: !0,
                        placeholder: t('form.email.placeholder', { ns: 'contactInformation' }),
                        disabled: s,
                      }),
                    ],
                  }),
                  e.jsx(_t, {
                    isChecked: re,
                    handleCheckboxChange: Te,
                    label: t('form.checkbox', { ns: 'contactInformation' }),
                    id: 'contact-information-checkbox',
                    disabled: s,
                  }),
                  e.jsx(Et, {
                    hasSecondaryBtn: !0,
                    hasLinkBtn: !0,
                    primaryButtonLabel: t('continueButton', { ns: 'contactInformation' }),
                    secondaryButtonLabel: t('buttonText.back', { ns: 'common' }),
                    linkButtonLabel: t('buttonText.cancel', { ns: 'common' }),
                    disabledPrimaryBtn: Me || s,
                    disableSecondaryBtn: s,
                    disableLinkBtn: s,
                    handlePrimaryClick: qe,
                    handleSecondaryClick: ze,
                    handleLinkButtonClick: () => (
                      sessionStorage.removeItem('appState'),
                      x(),
                      Be(),
                      m(d[0].link),
                      Bt(t('driversLicenceInfoURL', { ns: 'common' }))
                    ),
                  }),
                ],
              }),
            ],
          }),
        e.jsx(Tt, {}),
      ],
    });
  };
export { zt as default };
