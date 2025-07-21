import {
  u as R,
  j as e,
  R as Z,
  b as ee,
  r as t,
  A as ae,
  S as se,
  h as te,
  k as re,
  l as ne,
} from './index-CLFRBv6J.js';
import { A as p, B as ie } from './Alert-Bj5aUEK6.js';
import { H as $ } from './index-Bk6LcBPR.js';
import { P as I } from './index.types-CnoW_BGG.js';
import { u as oe } from './useProgressNavStatus-DD8sWRqk.js';
import { c as q, k as le, r as ce } from './helpers-C_37FuzF.js';
import { F as de } from './FeedbackModal-BsePslq3.js';
import { u as me } from './useRenewBackEndSession-D9G_hgZe.js';
import { T as v } from './Trans-CLlfKgue.js';
import './Modal-BgDk8fPM.js';
import './ButtonGroup-BCYMqWF3.js';
const S = (s) => {
    const { t: d } = R(['common']);
    return d('currency', { val: s, minimumFractionDigits: 2 });
  },
  ue = ({
    itemNumber: s,
    price: d,
    quantity: j,
    itemTotal: g,
    subtotal: k,
    total: N,
    authorizationNum: E,
    dateTime: L,
    hstNum: f,
    paymentMethod: D,
    phone: y,
    reference: o,
  }) => {
    const { t: a } = R(['paymentConfirmation']),
      h = [
        { label: a('orderSummary.reference'), value: o },
        { label: a('orderSummary.dateTime'), value: L },
        { label: a('orderSummary.hst'), value: f },
        { label: a('orderSummary.paymentMethod'), value: D },
        { label: a('orderSummary.authorization'), value: E },
        { label: a('orderSummary.phone'), value: y },
      ],
      b = [
        { label: a('orderSummary.table.item') },
        { label: a('orderSummary.table.name') },
        { label: a('orderSummary.table.price') },
        { label: a('orderSummary.table.quantity') },
        { label: a('orderSummary.table.total') },
      ],
      m = [
        [
          { value: s },
          { value: a('orderSummary.table.itemDescription') },
          { value: S(d) },
          { value: j.toString() },
          { value: S(g) },
        ],
        [{ value: '' }, { value: '' }, { value: '' }, { value: a('orderSummary.table.subtotal') }, { value: S(k) }],
        [
          { value: '' },
          { value: '' },
          { value: '' },
          { value: a('orderSummary.table.total'), bold: !0 },
          { value: S(N), bold: !0 },
        ],
      ];
    return e.jsxs('div', {
      className: 'padding-bottom-xl',
      children: [
        e.jsx('div', {
          className: 'summary-details',
          children: h.map((n, i) =>
            e.jsxs(
              Z.Fragment,
              {
                children: [
                  e.jsx('span', { className: 'bold left-align', children: n.label }),
                  e.jsx('span', { className: 'left-align', children: n.value }),
                ],
              },
              i
            )
          ),
        }),
        e.jsx('p', { className: 'margin-top-lg', children: a('orderSummary.currencyTaxesDisclaimer') }),
        e.jsx('div', {
          className: 'gnb-table-container',
          children: e.jsxs('table', {
            className: 'gnb-table',
            children: [
              e.jsx('caption', { className: 'sr-only', children: a('orderSummary.heading') }),
              e.jsx('thead', {
                children: e.jsx('tr', {
                  children: b.map((n, i) => e.jsx('th', { scope: 'col', children: n.label }, i)),
                }),
              }),
              e.jsx('tbody', {
                children: m.map((n, i) =>
                  e.jsx(
                    'tr',
                    {
                      children: n.map((l, x) =>
                        e.jsx('td', { className: l != null && l.bold ? 'bold' : '', children: l.value }, x)
                      ),
                    },
                    i
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Ne = () => {
    const { t: s, i18n: d } = R(['paymentConfirmation']),
      j = ee(),
      { progressNavList: g } = oe(),
      { state: k } = t.useContext(ae),
      { cookies: N, startState: E, resetState: L, sessionExpired: f } = k,
      { languageCookies: D } = N,
      y = new URLSearchParams(window.location.search),
      o = y.get('status'),
      a = y.get('transactionId'),
      [h, b] = t.useState(!1),
      [m, n] = t.useState(!1),
      [i, l] = t.useState(!1),
      [x, T] = t.useState(),
      [C, M] = t.useState(''),
      [B, F] = t.useState(!1),
      [V, P] = t.useState(!0),
      [z, w] = t.useState(!1),
      [G, U] = t.useState(!1),
      [J, Q] = t.useState(!1),
      [_, H] = t.useState(!1),
      W = me();
    t.useEffect(() => {
      f && (n(!0), b(!1), H(!1), T(null), w(!1), U(!1), M(''), P(!1));
    }, [f]);
    const X = async () => {
      if (a && o === I.SUCCESS) {
        try {
          const r = await $.getPaymentDetails(a);
          if (r && r.status === 200 && r.data) {
            L(), E(), ce(), T(r.data), b(!0);
            try {
              const A = (await $.processDLROrder(a, { languageCode: D ?? 'en' })).data;
              M(A.pdf);
            } catch (u) {
              console.error(u), l(!0);
            }
          } else console.error(r), F(!0);
        } catch (r) {
          console.error(r), String(r).indexOf('401') > -1 ? n(!0) : F(!0);
        }
        P(!1);
      } else
        a && (o === I.ERROR || o === I.DECLINED) ? j(`${g[4].link}?status=${o}&transactionId=${a}`) : (F(!0), P(!1));
    };
    return (
      t.useEffect(() => {
        X();
      }, [o]),
      V
        ? e.jsx(se, {})
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx('h2', { className: 'margin-bottom-xs margin-top-lg', children: s('heading') }),
              e.jsxs('div', {
                className: 'margin-bottom-md',
                children: [
                  _ &&
                    e.jsx('div', {
                      className: 'feedback-fade-in',
                      children: e.jsx(p, {
                        isOpen: _,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsxs('div', {
                          children: [
                            e.jsx('h2', { children: s('successAlertTitle') }),
                            e.jsx('p', { children: s('successAlertDescription') }),
                          ],
                        }),
                      }),
                    }),
                  m &&
                    e.jsx('div', {
                      className: 'feedback-fade-in',
                      children: e.jsx(p, {
                        isOpen: m,
                        type: 'critical',
                        description: e.jsx(v, {
                          i18nKey: 'errors.timeout',
                          ns: 'paymentConfirmation',
                          components: {
                            1: e.jsx('a', {
                              href: q(s('tdlPageAbout.url', { ns: 'temporaryDriversLicence' })),
                              children: s('title', { ns: 'temporaryDriversLicence' }),
                            }),
                          },
                        }),
                        variant: 'inline',
                      }),
                    }),
                  h &&
                    e.jsx('div', {
                      className: 'feedback-fade-in',
                      children: e.jsx(p, {
                        isOpen: h,
                        type: 'success',
                        description: s('success', { ns: 'paymentConfirmation' }),
                        variant: 'inline',
                      }),
                    }),
                  B &&
                    e.jsx('div', {
                      className: 'feedback-fade-in',
                      children: e.jsx(p, {
                        isOpen: B,
                        type: 'critical',
                        description: e.jsx(v, {
                          i18nKey: 'errors.system',
                          ns: 'paymentConfirmation',
                          components: { 1: e.jsx('a', { href: 'tel:18888322762', children: '1-888-832-2762' }) },
                        }),
                        variant: 'inline',
                      }),
                    }),
                  i &&
                    e.jsx('div', {
                      className: 'feedback-fade-in',
                      children: e.jsx(p, {
                        isOpen: i,
                        type: 'critical',
                        description: e.jsx(v, {
                          i18nKey: 'errors.MVSFail',
                          ns: 'paymentConfirmation',
                          components: { 1: e.jsx('a', { href: 'tel:18888322762', children: '1-888-832-2762' }) },
                        }),
                        variant: 'inline',
                      }),
                    }),
                ],
              }),
              e.jsx('p', {
                children: e.jsx(v, {
                  i18nKey: 'description',
                  ns: 'paymentConfirmation',
                  components: {
                    1: e.jsx('a', {
                      href: q(s('tdlPageAbout.url', { ns: 'temporaryDriversLicence' })),
                      children: s('title', { ns: 'temporaryDriversLicence' }),
                    }),
                  },
                }),
              }),
              C &&
                e.jsx(ie, {
                  variant: 'primary',
                  id: 'download-drivers-licence',
                  label: s('downloadLicenceButton'),
                  disabled: !C || m,
                  onClick: () => {
                    const r = atob(C),
                      u = new Array(r.length);
                    for (let c = 0; c < r.length; c++) u[c] = r.charCodeAt(c);
                    const A = new Uint8Array(u),
                      Y = new Blob([A], { type: 'application/pdf' }),
                      O = document.createElement('a'),
                      K = URL.createObjectURL(Y);
                    if (
                      ((O.href = K),
                      (O.download = d.language === 'fr' ? te : re),
                      O.click(),
                      URL.revokeObjectURL(K),
                      !J)
                    ) {
                      const c = setInterval(() => {
                        w(!0), U(!0), Q(!0), clearInterval(c);
                      }, ne);
                    }
                  },
                }),
              x &&
                e.jsxs(e.Fragment, {
                  children: [e.jsx('h3', { children: s('orderSummary.heading') }), e.jsx(ue, { ...le(x) })],
                }),
              a &&
                e.jsx('div', {
                  className: G ? 'feedback-fade-in' : '',
                  children: e.jsx(de, {
                    transactionId: a,
                    isFeedbackModalOpen: z,
                    setIsFeedbackModalOpen: w,
                    setFeedbackModalSuccess: H,
                  }),
                }),
            ],
          })
    );
  };
export { Ne as default };
