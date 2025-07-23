import { b as is, r as a, u as ls, A as os, j as s, S as ce, i as cs, d as ds } from './index-COkBmnQs.js';
import { B as us } from './ButtonGroup-CT8cUe_I.js';
import { c as ms, b as ps, d as fs, n as gs, i as vs, e as hs, g as Ds, h as xs, j as Ls } from './helpers-C0u_kQzT.js';
import { u as Ts } from './useProgressNavStatus-672YTHrA.js';
import { T as de } from './TextInput-CEl78Xxn.js';
import { T as ue, D as Es, R as bs } from './Recaptcha-Bh2fcUjO.js';
import { H as ys } from './index-WhvY4R74.js';
import { A as R } from './Alert-BfYOY8ZM.js';
import { E as Ss } from './Error-DFdCy2av.js';
import { T as me } from './Trans-BzCee1Be.js';
import './Modal-Cq_LOJT1.js';
const H = '/etc/designs/spa/snb-dlr-fe/clientlibs/',
  ws = () => {
    const x = is(),
      r = a.useRef(null),
      { t: e } = ls(['driverLicenceDetails', 'common']),
      { progressNavList: L } = Ts(),
      { state: pe } = a.useContext(os),
      {
        recaptchaBypass: fe,
        eligibility: J,
        driverLicenceDetails: ge,
        common: ve,
        cookies: he,
        aboutTheService: Q,
        startState: De,
        resetState: xe,
        sessionExpired: q,
      } = pe,
      {
        driverLicenceDetailsStates: Le,
        handleDriverlicenceNumberChange: Te,
        handleIssuanceDateYearChange: Ee,
        handleIssuanceDateMonthChange: be,
        handleIssuanceDateDayChange: ye,
        handlePostalCodeChange: Se,
        handleReCaptchaCheckboxChange: b,
      } = ge,
      {
        driverlicenceNumber: g,
        issuanceDateYear: u,
        issuanceDateMonth: m,
        issuanceDateDay: p,
        postalCode: v,
        reCaptchaChecked: X,
      } = Le,
      { updateTransactionId: Ie, updateOrderGuid: Ce } = ve,
      { languageCookies: Ne } = he,
      { isChecked: je } = Q,
      [Me, Z] = a.useState(!1),
      [ke, F] = a.useState(!1),
      [Be, h] = a.useState(!1),
      [Y, y] = a.useState(!1),
      [_, S] = a.useState(''),
      [G, I] = a.useState(!1),
      [$, C] = a.useState(''),
      [ee, N] = a.useState(!1),
      [se, j] = a.useState(''),
      [M, o] = a.useState(!1),
      [te, c] = a.useState(''),
      [Oe, Ae] = a.useState(!1),
      [z, Pe] = a.useState(!1),
      [k, B] = a.useState(!1),
      [Ve, n] = a.useState(''),
      [ae, K] = a.useState(!1),
      [we, D] = a.useState(''),
      [O, W] = a.useState(!1),
      [l, Ue] = a.useState(!1),
      [Re, T] = a.useState(!1),
      [He, qe] = a.useState(!1),
      [Fe, Ye] = a.useState(!1),
      [_e, Ge] = a.useState(!1);
    a.useEffect(() => {
      q || !Q.isChecked ? x(L[0].link) : (J.questionOneAnswer !== '2' || J.questionTwoAnswer !== '4') && x(L[1].link);
      const t = setInterval(() => {
        var f;
        ((f = r == null ? void 0 : r.current) == null ? void 0 : f.getValue()) === null
          ? (o(!0), c('load'))
          : (o(!1), c(''), clearInterval(t));
      }, 1e3);
      return () => clearInterval(t);
    }, []),
      a.useEffect(() => {
        const t = setInterval(() => {
          Pe(!0), clearInterval(t);
        }, 5e3);
        return () => clearInterval(t);
      }, []),
      a.useEffect(() => {
        (g || u || m || p || v || X) && h(!1);
      }, [g, u, m, p, v, X]),
      a.useEffect(() => {
        (Y || G || ee || O || k) && h(!0);
      }, [Y, G, ee, O, k]),
      a.useEffect(() => {
        M && z && h(!0);
      }, [z, M]),
      a.useEffect(() => {
        q &&
          (Ue(!0),
          K(!1),
          D(''),
          B(!1),
          n(''),
          W(!1),
          o(!1),
          c(''),
          y(!1),
          S(''),
          I(!1),
          C(''),
          N(!1),
          j(''),
          Z(!1),
          F(!1),
          T(!1));
      }, [q]),
      a.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [Y, G, _, $]);
    const $e = (t) =>
        s.jsx(me, {
          i18nKey: `errorMsg.${t}`,
          ns: 'driverLicenceDetails',
          components: { 1: s.jsx('a', { href: 'tel:18888322762', children: '1-888-832-2762' }) },
        }),
      ze = (t) => {
        K(!0),
          t === 'SNB-DLR-001'
            ? D('mvad-001')
            : t === 'SNB-DLR-003'
            ? D('mvad-003')
            : t === 'SNB-DLR-004'
            ? D('mvad-004')
            : t === 'SNB-CUSTOM-006'
            ? D('custom-006')
            : (D(t), console.log(`handleCreateOrderAPIErrors: Could not handle error type: ${t}`));
      },
      Ke = (t) => {
        B(!0),
          t === 'SNB-DLR-001'
            ? n('mvad-001')
            : t === 'SNB-DLR-002' || t === 'SNB-DLR-006'
            ? n('mvad-002')
            : t === 'SNB-DLR-003'
            ? n('mvad-003')
            : t === 'SNB-DLR-004'
            ? n('mvad-004')
            : t === 'SNB-DLR-005'
            ? n('mvad-005')
            : t === 'SNB-DLR-007'
            ? n('mvad-007')
            : t === 'SNB-DLR-008'
            ? n('mvad-008')
            : t === 'SNB-CUSTOM-006'
            ? n('custom-006')
            : (n(t), console.log(`handleIsEligibleAPIErrors: Could not handle error type: ${t}`));
      },
      We = () => {
        var re, ne, ie, le;
        T(!0), K(!1), B(!1), W(!1), y(!1), S(''), I(!1), C(''), N(!1), j(''), o(!1), c('');
        const t = cs(g),
          f = vs(u, m, p),
          as = ds(v),
          rs = hs(u, m, p);
        let d = !1;
        if (
          (g ? t || (y(!0), S('invalid'), (d = !0)) : (y(!0), S('empty'), (d = !0)),
          qe(!Ds(u)),
          Ye(!xs(m)),
          Ge(!Ls(p)),
          !u || !m || !p ? (I(!0), C('empty'), (d = !0)) : f || (I(!0), C('invalid'), (d = !0)),
          v ? as || (N(!0), j('invalid'), (d = !0)) : (N(!0), j('empty'), (d = !0)),
          (!((re = r == null ? void 0 : r.current) != null && re.getValue()) ||
            String((ne = r == null ? void 0 : r.current) == null ? void 0 : ne.getValue()) === '') &&
            (o(!0), c('empty'), (d = !0)),
          d)
        )
          h(!0), (le = r == null ? void 0 : r.current) == null || le.reset(), b(!1), T(!1);
        else {
          const ns = (ie = r == null ? void 0 : r.current) == null ? void 0 : ie.getValue();
          (async () =>
            await ys
              .isEligibleForDLR({
                recaptchaBypass: fe,
                recaptchaToken: ns,
                languageCode: Ne,
                licenceNumber: g,
                issuanceDate: rs,
                postalCode: v.toUpperCase(),
                tncAcknowledged: je,
              })
              .then((i) => {
                var E;
                const A = i == null ? void 0 : i.data,
                  { recaptchaResponse: P, eligible: V, transactionId: w, orderGuid: U } = A;
                P && V && (Ie(w), Ce(U), x(L[3].link), h(!0)),
                  (E = r == null ? void 0 : r.current) == null || E.reset(),
                  T(!1);
              })
              .catch((i) => {
                var A, P, V, w, U, E, oe;
                console.error(i),
                  ((A = i.response) == null ? void 0 : A.status) === 400
                    ? ze((P = i.response) == null ? void 0 : P.data)
                    : ((V = i.response) == null ? void 0 : V.status) === 401
                    ? (B(!0), n('mvad-001'))
                    : ((w = i.response) == null ? void 0 : w.status) === 402
                    ? Ke((U = i.response) == null ? void 0 : U.data)
                    : ((E = i.response) == null ? void 0 : E.status) === 403
                    ? (o(!0), c('invalid'))
                    : W(!0),
                  (oe = r == null ? void 0 : r.current) == null || oe.reset(),
                  b(!1),
                  T(!1);
              }))();
        }
      },
      Je = () => {
        x(L[1].link);
      },
      Qe = () => {
        F(!0);
      },
      Xe = () => {
        F(!1), document.body.classList.remove('noscroll');
      },
      Ze = () => {
        b(!0), o(!1), h(!1), c('');
      },
      es = () => {
        b(!1), o(!0), c('expired');
      },
      ss = () => {
        Ae(!0);
        const t = setInterval(() => {
          var f;
          ((f = r == null ? void 0 : r.current) == null ? void 0 : f.getValue()) === null
            ? r.current.forceUpdate()
            : clearInterval(t);
        }, 3e3);
      },
      ts = () => {
        var t;
        (t = r == null ? void 0 : r.current) == null || t.forceUpdate();
      };
    return Re
      ? s.jsxs(s.Fragment, {
          children: [
            s.jsx('h2', { className: 'margin-bottom-xs margin-top-lg', children: e('heading') }),
            s.jsx(ce, { size: 'lg' }),
          ],
        })
      : s.jsxs(s.Fragment, {
          children: [
            s.jsx('h2', { className: 'margin-bottom-xs margin-top-lg', children: e('heading') }),
            s.jsxs('p', {
              children: [
                s.jsx('span', { className: 'required', children: '*' }),
                ' ',
                e('disclaimer', { ns: 'common' }),
              ],
            }),
            l &&
              s.jsx('div', {
                className: 'feedback-fade-in',
                children: s.jsx(R, {
                  isOpen: l,
                  variant: 'inPage',
                  type: 'critical',
                  description: s.jsx(s.Fragment, {
                    children: s.jsx('p', {
                      children: s.jsx(me, {
                        i18nKey: 'timeoutMsg',
                        ns: 'common',
                        components: {
                          1: s.jsx('a', {
                            href: ms(e('progressNav.homeUrl', { ns: 'common' })),
                            children: e('header'),
                          }),
                        },
                      }),
                    }),
                  }),
                }),
              }),
            O &&
              s.jsx('div', {
                className: 'feedback-fade-in',
                children: s.jsx(R, {
                  isOpen: O,
                  type: 'critical',
                  description: e('systemErrorMsg', { ns: 'common' }),
                  variant: 'inline',
                }),
              }),
            k &&
              s.jsx('div', {
                className: 'feedback-fade-in',
                children: s.jsx(R, {
                  isOpen: k,
                  type: 'critical',
                  description: ps(
                    Ve,
                    e('errorMsg.mvad001', { ns: 'driverLicenceDetails' }),
                    $e('mvad002'),
                    e('systemErrorMsg', { ns: 'common' }),
                    e('errorMsg.mvad004', { ns: 'driverLicenceDetails' }),
                    e('errorMsg.mvad005', { ns: 'driverLicenceDetails' }),
                    e('errorMsg.mvad007', { ns: 'driverLicenceDetails' }),
                    e('errorMsg.mvad008', { ns: 'driverLicenceDetails' }),
                    e('errorMsg.custom006', { ns: 'driverLicenceDetails' }),
                    e('systemErrorMsg', { ns: 'common' })
                  ),
                  variant: 'inline',
                }),
              }),
            ae &&
              s.jsx('div', {
                className: 'feedback-fade-in',
                children: s.jsx(R, {
                  isOpen: ae,
                  type: 'critical',
                  description: fs(
                    we,
                    e('errorMsg.mvad001', { ns: 'driverLicenceDetails' }),
                    e('systemErrorMsg', { ns: 'common' }),
                    e('errorMsg.custom006', { ns: 'driverLicenceDetails' }),
                    e('systemErrorMsg', { ns: 'common' })
                  ),
                  variant: 'inline',
                }),
              }),
            s.jsxs('div', {
              className: 'padding-top-md padding-bottom-md row' + (l ? ' opacity-dk disabled-form' : ''),
              children: [
                s.jsx('div', {
                  className: 'dlr-input-container',
                  children: s.jsx(de, {
                    label: e('dln.label', { ns: 'driverLicenceDetails' }),
                    type: 'text',
                    value: g,
                    error: _ ? e('dln.errorMsg.' + _, { ns: 'driverLicenceDetails' }) : '',
                    id: 'SNB_D_No',
                    maxlength: 7,
                    onChange: Te,
                    required: !0,
                    hasTooltipModal: !0,
                    tooltipTitle: e('modal.dln.title', { ns: 'driverLicenceDetails' }),
                    tooltipBody: s.jsx(ue, {
                      bodyText: e('modal.dln.bodyText', { ns: 'driverLicenceDetails' }),
                      imgOneUrl: H + 'images/dl-number-new.png',
                      imgOneAltText: e('modal.dln.altText.img1', { ns: 'driverLicenceDetails' }),
                      imgTwoUrl: H + 'images/dl-number-old.png',
                      imgTwoAltText: e('modal.dln.altText.img2', { ns: 'driverLicenceDetails' }),
                    }),
                    isTooltipModalOpen: Me,
                    setIsTooltipModalOpen: Z,
                    helperText: e('dln.helpText', { ns: 'driverLicenceDetails' }),
                    disabled: l,
                  }),
                }),
                s.jsx('div', {
                  className: 'padding-top-sm',
                  children: s.jsx(Es, {
                    label: e('issuanceDate.label', { ns: 'driverLicenceDetails' }),
                    helpText: e('issuanceDate.helpText', { ns: 'driverLicenceDetails' }),
                    yearLabel: e('issuanceDate.year', { ns: 'driverLicenceDetails' }),
                    monthLabel: e('issuanceDate.month', { ns: 'driverLicenceDetails' }),
                    dayLabel: e('issuanceDate.day', { ns: 'driverLicenceDetails' }),
                    yearInputValue: u,
                    monthInputValue: m,
                    dayInputValue: p,
                    isYearInputError: He,
                    isMonthInputError: Fe,
                    isDayInputError: _e,
                    dateInputError: $ ? e('issuanceDate.errorMsg.' + $, { ns: 'driverLicenceDetails' }) : '',
                    isTooltipModalOpen: ke,
                    tooltipTitle: e('modal.issuanceDate.title', { ns: 'driverLicenceDetails' }),
                    tooltipBody: s.jsx(ue, {
                      bodyText: e('modal.issuanceDate.bodyText', { ns: 'driverLicenceDetails' }),
                      imgOneUrl: H + 'images/dl-issuance-date-new.png',
                      imgOneAltText: e('modal.issuanceDate.altText.img1', { ns: 'driverLicenceDetails' }),
                      imgTwoUrl: H + 'images/dl-issuance-date-old.png',
                      imgTwoAltText: e('modal.issuanceDate.altText.img1', { ns: 'driverLicenceDetails' }),
                    }),
                    handleTooltipClose: Xe,
                    handleTooltipClick: Qe,
                    handleIssuanceDateYearChange: Ee,
                    handleIssuanceDateMonthChange: be,
                    handleIssuanceDateDayChange: ye,
                    disabled: l,
                  }),
                }),
                s.jsx('div', {
                  className: 'padding-top-md dlr-input-container',
                  children: s.jsx(de, {
                    label: e('postalCode.label', { ns: 'driverLicenceDetails' }),
                    type: 'text',
                    value: v,
                    helperText: e('postalCode.helpText', { ns: 'driverLicenceDetails' }),
                    placeholder: 'A2A2A2',
                    error: se ? e('postalCode.errorMsg.' + se, { ns: 'driverLicenceDetails' }) : '',
                    id: 'SNB_M_P_Code',
                    maxlength: 6,
                    onChange: Se,
                    required: !0,
                    disabled: l,
                  }),
                }),
                s.jsxs('div', {
                  className: M ? 'error gnb-form-input margin-bottom-none' : '',
                  children: [
                    !l &&
                      s.jsxs('div', {
                        className: 'dlr-recaptcha',
                        children: [
                          !Oe &&
                            s.jsx('div', { className: 'dlr-recaptcha-spinner', children: s.jsx(ce, { size: 'sm' }) }),
                          s.jsx('div', {
                            className: 'dlr-recaptcha-component',
                            children: s.jsx(bs, {
                              recaptchaRef: r,
                              handleReCaptchaChange: Ze,
                              handleRecaptchaErrored: ts,
                              handleRecaptchaExpired: es,
                              handleRecaptchaLoad: ss,
                            }),
                          }),
                        ],
                      }),
                    M &&
                      z &&
                      s.jsx(Ss, { error: te ? e('reCaptcha.errorMsg.' + te, { ns: 'driverLicenceDetails' }) : '' }),
                  ],
                }),
                s.jsx(us, {
                  hasSecondaryBtn: !0,
                  hasLinkBtn: !0,
                  primaryButtonLabel: e('buttonText.continue', { ns: 'common' }),
                  secondaryButtonLabel: e('buttonText.back', { ns: 'common' }),
                  linkButtonLabel: e('buttonText.cancel', { ns: 'common' }),
                  disabledPrimaryBtn: Be || l,
                  disableSecondaryBtn: l,
                  disableLinkBtn: l,
                  handlePrimaryClick: We,
                  handleSecondaryClick: Je,
                  handleLinkButtonClick: () => (
                    sessionStorage.removeItem('appState'),
                    xe(),
                    De(),
                    x(L[0].link),
                    gs(e('driversLicenceInfoURL', { ns: 'common' }))
                  ),
                }),
              ],
            }),
          ],
        });
  };
export { ws as default };
