import { b as u, u as j, r as n, A as g, j as e } from './index-COkBmnQs.js';
import { H as b } from './Helmet-CWIySJt2.js';
import { B as v } from './ButtonGroup-CT8cUe_I.js';
import { c as f, n as y } from './helpers-C0u_kQzT.js';
import { A as r } from './Alert-BfYOY8ZM.js';
import { T as i } from './Trans-BzCee1Be.js';
const E = () => {
  const o = new URLSearchParams(window.location.search).get('bypassRecaptcha'),
    c = u(),
    { t } = j(['temporaryDriversLicence']),
    { state: l } = n.useContext(g),
    { handleRecaptchaBypass: d, startState: m, resetState: p, sessionExpired: a } = l,
    [s, x] = n.useState(!1),
    h = () => {
      c(t('tdlPageForm.url'));
    };
  return (
    n.useEffect(() => {
      o && d();
    }, []),
    n.useEffect(() => {
      a && x(!0);
    }, [a]),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(b, { children: e.jsx('title', { children: t('title') }) }),
        e.jsx('h2', { className: 'margin-bottom-xs margin-top-lg', children: t('tdlPageAbout.heading') }),
        e.jsx('p', { children: t('tdlPageAbout.pageDescription') }),
        s &&
          e.jsx('div', {
            className: 'feedback-fade-in',
            children: e.jsx(r, {
              isOpen: s,
              variant: 'inPage',
              type: 'critical',
              description: e.jsx(e.Fragment, {
                children: e.jsx('p', {
                  children: e.jsx(i, {
                    i18nKey: 'alerts.timeoutMsg',
                    ns: 'temporaryDriversLicence',
                    components: { 1: e.jsx('a', { href: f(t('tdlPageAbout.url')), children: t('title') }) },
                  }),
                }),
              }),
            }),
          }),
        e.jsx(r, {
          isOpen: !0,
          variant: 'inline',
          type: 'estimate',
          description: e.jsxs(e.Fragment, {
            children: [
              e.jsx('div', { children: t('tdlPageAbout.expiryEstimate') }),
              e.jsx('div', { children: t('tdlPageAbout.expiryDescription') }),
            ],
          }),
        }),
        e.jsxs('div', {
          className: 'padding-top-xxs',
          children: [
            e.jsx('h3', { children: t('tdlPageAbout.section.heading') }),
            e.jsx('div', {
              children: e.jsx(i, {
                i18nKey: 'tdlPageAbout.section.listItems',
                ns: 'temporaryDriversLicence',
                components: { unorderedList: e.jsx('ul', {}), listItem: e.jsx('li', {}) },
              }),
            }),
          ],
        }),
        e.jsx('div', {
          className: 'padding-top-lg' + (s ? ' opacity-dk disabled-form' : ''),
          children: e.jsx(v, {
            hasLinkBtn: !0,
            primaryButtonLabel: t('buttonText.continue', { ns: 'common' }),
            linkButtonLabel: t('buttonText.cancel', { ns: 'common' }),
            handlePrimaryClick: h,
            disabledPrimaryBtn: s,
            disableLinkBtn: s,
            handleLinkButtonClick: () => (
              sessionStorage.removeItem('appState'), p(), m(), y(t('driversLicenceInfoURL', { ns: 'common' }))
            ),
          }),
        }),
        e.jsx('hr', {}),
        e.jsxs('div', {
          children: [
            e.jsx('h3', { children: t('sectionFive.heading', { ns: 'aboutTheService' }) }),
            e.jsx('p', {
              className: 'margin-bottom-xxs',
              children: e.jsx(i, {
                i18nKey: 'sectionFive.email',
                ns: 'aboutTheService',
                components: { 1: e.jsx('a', { href: 'mailto:snb@snb.ca', children: 'snb@snb.ca' }) },
              }),
            }),
            e.jsx('p', {
              children: e.jsx(i, {
                i18nKey: 'sectionFive.tollFree',
                ns: 'aboutTheService',
                components: { 1: e.jsx('a', { href: 'tel:18888322762', children: '1-888-832-2762' }) },
              }),
            }),
          ],
        }),
      ],
    })
  );
};
export { E as default };
