import {
  b as $e,
  r as s,
  u as et,
  A as tt,
  j as e,
  S as oe,
  h as st,
  k as at,
  l as rt,
  i as nt,
} from './index-COkBmnQs.js';
import { B as it } from './ButtonGroup-CT8cUe_I.js';
import { A as p, B as lt } from './Alert-BfYOY8ZM.js';
import { c as ce, n as ot, i as ct, e as dt, g as ut, h as pt, j as mt } from './helpers-C0u_kQzT.js';
import { T as ft } from './TextInput-CEl78Xxn.js';
import { T as ht, D as xt, R as gt } from './Recaptcha-Bh2fcUjO.js';
import { H as bt } from './index-WhvY4R74.js';
import { E as vt } from './Error-DFdCy2av.js';
import { H as J } from './Helmet-CWIySJt2.js';
import { F as Dt } from './FeedbackModal-BGMbkGbv.js';
import { T as de } from './Trans-BzCee1Be.js';
import './Modal-Cq_LOJT1.js';
const ue = '/etc/designs/spa/snb-dlr-fe/clientlibs/',
  At = () => {
    const Q = $e(),
      a = s.useRef(null),
      { t, i18n: pe } = et(['temporaryDriversLicence']),
      { state: me } = s.useContext(tt),
      {
        recaptchaBypass: fe,
        driverLicenceDetails: he,
        cookies: xe,
        startState: ge,
        resetState: be,
        sessionExpired: W,
      } = me,
      {
        driverLicenceDetailsStates: ve,
        handleDriverlicenceNumberChange: De,
        handleIssuanceDateYearChange: je,
        handleIssuanceDateMonthChange: ye,
        handleIssuanceDateDayChange: Ee,
        handleReCaptchaCheckboxChange: B,
      } = he,
      {
        driverlicenceNumber: g,
        issuanceDateYear: m,
        issuanceDateMonth: f,
        issuanceDateDay: h,
        reCaptchaChecked: X,
      } = ve,
      { languageCookies: Te } = xe,
      [P, Z] = s.useState(''),
      [Ie, $] = s.useState(!1),
      [Le, w] = s.useState(!1),
      [Se, x] = s.useState(!1),
      [H, E] = s.useState(!1),
      [V, T] = s.useState(''),
      [U, I] = s.useState(!1),
      [R, L] = s.useState(''),
      [S, l] = s.useState(!1),
      [ee, o] = s.useState(''),
      [Ce, ke] = s.useState(!1),
      [_, Ne] = s.useState(!1),
      [Fe, D] = s.useState(!1),
      [C, k] = s.useState(!1),
      [N, F] = s.useState(!1),
      [M, Y] = s.useState(!1),
      [A, q] = s.useState(!1),
      [n, Me] = s.useState(!1),
      [Ae, K] = s.useState(!1),
      [Oe, te] = s.useState(!1),
      [Be, Pe] = s.useState(!1),
      [z, we] = s.useState(!1),
      [se, ae] = s.useState(!1),
      [He, Ve] = s.useState(!1),
      [Ue, Re] = s.useState(!1),
      [_e, Ye] = s.useState(!1);
    s.useEffect(() => {
      const r = setInterval(() => {
        Ne(!0), clearInterval(r);
      }, 5e3);
      return () => clearInterval(r);
    }, []),
      s.useEffect(() => {
        (g || m || f || h || X) && x(!1);
      }, [g, m, f, h, X]),
      s.useEffect(() => {
        (H || U || C || N || M || A) && x(!0);
      }, [H, U, C, N, M, A]),
      s.useEffect(() => {
        S && _ && x(!0);
      }, [_, S]),
      s.useEffect(() => {
        W &&
          (k(!1),
          F(!1),
          Y(!1),
          q(!1),
          l(!1),
          o(''),
          I(!1),
          L(''),
          E(!1),
          T(''),
          $(!1),
          w(!1),
          K(!1),
          ae(!1),
          Me(!0),
          Z(''),
          D(!1));
      }, [W]),
      s.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [H, U, V, R]);
    const qe = () => {
        var b, j, d;
        D(!0), k(!1), F(!1), Y(!1), q(!1), E(!1), T(''), I(!1), L(''), l(!1), o('empty');
        const r = nt(g),
          c = ct(m, f, h),
          G = dt(m, f, h);
        let u = !1;
        if (
          (g ? r || (E(!0), T('invalid'), (u = !0)) : (E(!0), T('empty'), (u = !0)),
          Ve(!ut(m)),
          Re(!pt(f)),
          Ye(!mt(h)),
          !m || !f || !h ? (I(!0), L('empty'), (u = !0)) : c || (I(!0), L('invalid'), (u = !0)),
          ((b = a == null ? void 0 : a.current) != null && b.getValue()) || (l(!0), o('empty'), (u = !0)),
          u)
        )
          x(!0), (d = a == null ? void 0 : a.current) == null || d.reset(), B(!1), D(!1);
        else {
          const Ze = (j = a == null ? void 0 : a.current) == null ? void 0 : j.getValue();
          (async () =>
            await bt
              .getReprintTDL({
                recaptchaBypass: fe,
                languageCode: Te,
                licenceNumber: g,
                issuanceDate: G,
                recaptchaToken: Ze,
              })
              .then((i) => {
                var y;
                const O = i == null ? void 0 : i.data,
                  v = i == null ? void 0 : i.data;
                O || (l(!0), o('invalid')),
                  v && v.pdf ? (Z(v.pdf), we(!0), te(!0)) : (k(!0), x(!0)),
                  (y = a == null ? void 0 : a.current) == null || y.reset(),
                  D(!1);
              })
              .catch((i) => {
                var O, v, y, re, ne, ie, le;
                console.error(i),
                  ((O = i.response) == null ? void 0 : O.status) === 400
                    ? F(!0)
                    : ((v = i.response) == null ? void 0 : v.status) === 401
                    ? (l(!0), o('empty'))
                    : ((y = i.response) == null ? void 0 : y.status) === 403
                    ? (l(!0), o('invalid'))
                    : ((re = i.response) == null ? void 0 : re.status) === 404
                    ? F(!0)
                    : ((ne = i.response) == null ? void 0 : ne.status) === 416
                    ? q(!0)
                    : ((ie = i.response) == null ? void 0 : ie.status) === 417
                    ? Y(!0)
                    : k(!0),
                  x(!0),
                  (le = a == null ? void 0 : a.current) == null || le.reset(),
                  D(!1);
              }))();
        }
      },
      Ke = () => {
        Q(t('tdlPageAbout.url'));
      },
      ze = () => {
        w(!0);
      },
      Ge = () => {
        w(!1), document.body.classList.remove('noscroll');
      },
      Je = () => {
        B(!0), l(!1), x(!1), o('');
      },
      Qe = () => {
        B(!1), l(!0), o('expired');
      },
      We = () => {
        ke(!0);
        const r = setInterval(() => {
          var c;
          ((c = a == null ? void 0 : a.current) == null ? void 0 : c.getValue()) === null
            ? a.current.forceUpdate()
            : clearInterval(r);
        }, 3e3);
      },
      Xe = () => {
        var r;
        (r = a == null ? void 0 : a.current) == null || r.forceUpdate();
      };
    return (
      s.useEffect(() => {
        const r = setInterval(() => {
          var c;
          ((c = a == null ? void 0 : a.current) == null ? void 0 : c.getValue()) === null
            ? (l(!0), o('load'))
            : (l(!1), o(''), clearInterval(r));
        }, 1e3);
        return () => clearInterval(r);
      }, []),
      Fe
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsxs(J, {
                children: [
                  e.jsx('title', { children: t('title') }),
                  e.jsx('meta', { name: 'description', content: "{t('tdlPageAbout.pageDescription')}" }),
                  e.jsx('meta', { property: 'og:description', content: "{t('tdlPageAbout.pageDescription')}" }),
                ],
              }),
              e.jsx('h2', { className: 'margin-bottom-xs margin-top-lg', children: t('tdlPageForm.heading') }),
              e.jsx(oe, { size: 'lg' }),
            ],
          })
        : z && P
        ? e.jsxs(e.Fragment, {
            children: [
              se &&
                e.jsx(p, {
                  isOpen: se,
                  variant: 'inPage',
                  type: 'success',
                  description: e.jsxs('div', {
                    children: [
                      e.jsx('h2', { children: t('alerts.feedbackTitle') }),
                      e.jsx('p', { children: t('alerts.feedbackDescription') }),
                    ],
                  }),
                }),
              e.jsxs(J, {
                children: [
                  e.jsx('title', { children: t('title') }),
                  e.jsx('meta', { name: 'description', content: "{t('tdlPageAbout.pageDescription')}" }),
                  e.jsx('meta', { property: 'og:description', content: "{t('tdlPageAbout.pageDescription')}" }),
                ],
              }),
              e.jsx('h2', { className: 'margin-bottom-xs margin-top-lg', children: t('tdlPageConfirmation.heading') }),
              z &&
                !n &&
                e.jsx('div', {
                  className: 'feedback-fade-in',
                  children: e.jsx(p, {
                    isOpen: z && !n,
                    variant: 'inline',
                    type: 'success',
                    description: e.jsx('div', { children: e.jsx('p', { children: t('alerts.retrievedTitle') }) }),
                  }),
                }),
              n &&
                e.jsx('div', {
                  className: 'feedback-fade-in',
                  children: e.jsx(p, {
                    isOpen: n,
                    variant: 'inPage',
                    type: 'critical',
                    description: e.jsx(e.Fragment, {
                      children: e.jsx('p', {
                        children: e.jsx(de, {
                          i18nKey: 'alerts.timeoutMsg',
                          ns: 'temporaryDriversLicence',
                          components: { 1: e.jsx('a', { href: ce(t('tdlPageAbout.url')), children: t('title') }) },
                        }),
                      }),
                    }),
                  }),
                }),
              e.jsxs('div', {
                className: 'padding-top-xxl padding-bottom-xxl row',
                children: [
                  e.jsx('p', { children: t('tdlPageConfirmation.pageDescription') }),
                  e.jsx(lt, {
                    variant: 'primary',
                    id: 'download-drivers-licence',
                    label: t('buttonText.downloadLicenceButton', { ns: 'temporaryDriversLicence' }),
                    disabled: !P || n,
                    onClick: () => {
                      const r = atob(P),
                        c = new Array(r.length);
                      for (let d = 0; d < r.length; d++) c[d] = r.charCodeAt(d);
                      const G = new Uint8Array(c),
                        u = new Blob([G], { type: 'application/pdf' }),
                        b = document.createElement('a'),
                        j = URL.createObjectURL(u);
                      if (
                        ((b.href = j),
                        (b.download = pe.language === 'fr' ? st : at),
                        b.click(),
                        URL.revokeObjectURL(j),
                        !Be)
                      ) {
                        const d = setInterval(() => {
                          K(!0), te(!0), Pe(!0), clearInterval(d);
                        }, rt);
                      }
                    },
                  }),
                ],
              }),
              e.jsx('div', {
                className: Oe ? 'feedback-fade-in' : '',
                children: e.jsx(Dt, {
                  isFeedbackModalOpen: Ae,
                  setIsFeedbackModalOpen: K,
                  setFeedbackModalSuccess: ae,
                  isOnPage: 'retrieval',
                }),
              }),
            ],
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsxs(J, {
                children: [
                  e.jsx('title', { children: t('title') }),
                  e.jsx('meta', { name: 'description', content: "{t('tdlPageAbout.pageDescription')}" }),
                  e.jsx('meta', { property: 'og:description', content: "{t('tdlPageAbout.pageDescription')}" }),
                ],
              }),
              e.jsx('h2', { className: 'margin-bottom-xs margin-top-lg', children: t('tdlPageForm.heading') }),
              e.jsxs('p', {
                children: [
                  e.jsx('span', { className: 'required', children: '*' }),
                  ' ',
                  t('disclaimer', { ns: 'common' }),
                ],
              }),
              n &&
                e.jsx(p, {
                  isOpen: n,
                  variant: 'inPage',
                  type: 'critical',
                  description: e.jsx(e.Fragment, {
                    children: e.jsx('p', {
                      children: e.jsx(de, {
                        i18nKey: 'alerts.timeoutMsg',
                        ns: 'temporaryDriversLicence',
                        components: { 1: e.jsx('a', { href: ce(t('tdlPageAbout.url')), children: t('title') }) },
                      }),
                    }),
                  }),
                }),
              C &&
                e.jsx(p, {
                  isOpen: C,
                  type: 'critical',
                  description: t('systemErrorMsg', { ns: 'common' }),
                  variant: 'inline',
                }),
              N &&
                e.jsx(p, {
                  isOpen: N,
                  type: 'critical',
                  description: e.jsxs('div', {
                    children: [
                      e.jsx('h2', { children: t('alerts.informationErrorTitle') }),
                      e.jsx('p', { children: t('alerts.informationErrorDescription') }),
                    ],
                  }),
                  variant: 'inline',
                }),
              M &&
                e.jsx(p, {
                  isOpen: M,
                  type: 'critical',
                  description: e.jsxs('div', {
                    children: [t('alerts.notFoundErrorTitle'), ' ', t('alerts.notFoundErrorDescription')],
                  }),
                  variant: 'inline',
                }),
              A &&
                e.jsx(p, {
                  isOpen: A,
                  type: 'critical',
                  description: e.jsxs('div', {
                    children: [t('alerts.expiredErrorTitle'), ' ', t('alerts.expiredErrorDescription')],
                  }),
                  variant: 'inline',
                }),
              e.jsxs('div', {
                className: 'padding-top-md padding-bottom-md row' + (n ? ' opacity-dk disabled-form' : ''),
                children: [
                  e.jsx('div', {
                    className: 'dlr-input-container padding-bottom-md',
                    children: e.jsx(ft, {
                      label: t('dln.label', { ns: 'driverLicenceDetails' }),
                      type: 'text',
                      value: g,
                      disabled: n,
                      error: V ? t('dln.errorMsg.' + V, { ns: 'driverLicenceDetails' }) : '',
                      id: 'SNB_D_No',
                      maxlength: 7,
                      onChange: De,
                      required: !0,
                      hasTooltipModal: !0,
                      tooltipTitle: t('modal.dln.title', { ns: 'driverLicenceDetails' }),
                      tooltipBody: e.jsx(ht, {
                        bodyText: t('modal.dln.bodyText', { ns: 'driverLicenceDetails' }),
                        imgOneUrl: ue + 'images/dl-number-new.png',
                        imgOneAltText: t('modal.dln.altText.img1', { ns: 'driverLicenceDetails' }),
                        imgTwoUrl: ue + 'images/dl-number-old.png',
                        imgTwoAltText: t('modal.dln.altText.img2', { ns: 'driverLicenceDetails' }),
                      }),
                      isTooltipModalOpen: Ie,
                      setIsTooltipModalOpen: $,
                      helperText: t('dln.helpText', { ns: 'driverLicenceDetails' }),
                    }),
                  }),
                  e.jsx('div', {
                    className: 'padding-bottom-xl',
                    children: e.jsx(xt, {
                      label: t('issuanceDate.label'),
                      helpText: t('issuanceDate.helpText'),
                      yearLabel: t('issuanceDate.year'),
                      monthLabel: t('issuanceDate.month'),
                      dayLabel: t('issuanceDate.day'),
                      yearInputValue: m,
                      monthInputValue: f,
                      dayInputValue: h,
                      isYearInputError: He,
                      isMonthInputError: Ue,
                      isDayInputError: _e,
                      dateInputError: R ? t('issuanceDate.errorMsg.' + R) : '',
                      isTooltipModalOpen: Le,
                      tooltipTitle: t('modal.issuanceDate.title'),
                      tooltipBody: t('modal.issuanceDate.bodyText'),
                      handleTooltipClose: Ge,
                      handleTooltipClick: ze,
                      handleIssuanceDateYearChange: je,
                      handleIssuanceDateMonthChange: ye,
                      handleIssuanceDateDayChange: Ee,
                      disabled: n,
                    }),
                  }),
                  e.jsxs('div', {
                    className: S ? 'error gnb-form-input margin-bottom-none' : '',
                    children: [
                      !n &&
                        e.jsxs('div', {
                          className: 'dlr-recaptcha',
                          children: [
                            !Ce &&
                              e.jsx('div', { className: 'dlr-recaptcha-spinner', children: e.jsx(oe, { size: 'sm' }) }),
                            e.jsx('div', {
                              className: 'dlr-recaptcha-component',
                              children: e.jsx(gt, {
                                recaptchaRef: a,
                                handleReCaptchaChange: Je,
                                handleRecaptchaErrored: Xe,
                                handleRecaptchaExpired: Qe,
                                handleRecaptchaLoad: We,
                              }),
                            }),
                          ],
                        }),
                      S &&
                        _ &&
                        e.jsx(vt, { error: ee ? t('reCaptcha.errorMsg.' + ee, { ns: 'driverLicenceDetails' }) : '' }),
                    ],
                  }),
                  e.jsx(it, {
                    hasSecondaryBtn: !0,
                    hasLinkBtn: !0,
                    primaryButtonLabel: t('buttonText.continue', { ns: 'temporaryDriversLicence' }),
                    secondaryButtonLabel: t('buttonText.back', { ns: 'common' }),
                    linkButtonLabel: t('buttonText.cancel', { ns: 'common' }),
                    disabledPrimaryBtn: Se || n,
                    disableSecondaryBtn: n,
                    disableLinkBtn: n,
                    handlePrimaryClick: qe,
                    handleSecondaryClick: Ke,
                    handleLinkButtonClick: () => (
                      sessionStorage.removeItem('appState'),
                      be(),
                      ge(),
                      Q(t('tdlPageAbout.url')),
                      ot(t('driversLicenceInfoURL', { ns: 'common' }))
                    ),
                  }),
                ],
              }),
            ],
          })
    );
  };
export { At as default };
