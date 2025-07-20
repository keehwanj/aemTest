import { j as e, i as N, r as o, u as b, d as k, a as v, S as L } from './index-BJVeoK1D.js';
/* empty css                        */ import { B as E } from './BackLink-_LqE4RQ_.js';
import {
  h as C,
  j as B,
  u as y,
  b as F,
  i as H,
  H as h,
  f as m,
  k as f,
  M as A,
  B as p,
  F as M,
} from './Error-DYTFVrcz.js';
import { u as O } from './useMetadata-Blp6FudJ.js';
const R = ({ children: s, label: a, expanded: t = !1, error: n, required: c = !1 }) =>
    e.jsxs('div', {
      className: N('gnb-form-input', n ? 'error' : ''),
      children: [
        e.jsxs('fieldset', {
          className: t ? 'gnb-radio-buttons-expanded' : 'gnb-radio-buttons',
          'aria-required': c,
          children: [
            e.jsx('legend', { className: 'left', children: a }),
            n && e.jsx(C, { error: n }),
            t && e.jsx('div', { className: 'set', children: s }),
            !t && s,
          ],
        }),
        t && e.jsx('script', { src: 'gnb-forms-1.0.0.js' }),
      ],
    }),
  x = ({ id: s, label: a, description: t, selected: n, selectedOption: c, setSelectedOption: l }) => {
    o.useEffect(() => {
      n && l(s ?? a);
    }, []);
    const i = s || a;
    return e.jsxs('label', {
      htmlFor: i,
      className: c === i ? 'active' : '',
      children: [
        e.jsx('input', { type: 'radio', id: i, name: B(a), value: i, onChange: () => l(i), checked: c === i }),
        e.jsx('span', { className: 'label-title left', children: a }),
        e.jsx('span', { className: 'label-content left', children: t }),
      ],
    });
  };
function T() {
  const { t: s } = b(),
    a = k(),
    { renderMetadata: t } = O(),
    { getSession: n } = y(),
    [c] = v(['session', 'language']),
    [l, i] = o.useState(''),
    [u, g] = o.useState(''),
    [j, d] = o.useState(!1);
  o.useEffect(() => {
    F(c.language);
  }, []),
    o.useEffect(() => {
      H(c)
        ? (d(!0),
          h
            .getAccountDetails({ params: { session: n() } })
            .then((r) => {
              i(r.data?.account?.email), g(r.data?.account?.preferredLanguage === m ? m : f), d(!1);
            })
            .catch((r) => {
              console.log(r), d(!1);
            }))
        : a('/authentication');
    }, []),
    o.useEffect(() => {
      t();
    }, [c.language]);
  const S = () => {
    d(!0),
      h
        .updateAccountPreferredLanguage({ session: { token: n() }, preferredLanguage: u })
        .then(() => {
          g(u), a('/account-settings', { state: { showSuccessAlert: !0, successMsgType: 'generic-success' } });
        })
        .catch((r) => {
          console.log(r), a('/account-settings', { state: { showErrorAlert: !0 } });
        });
  };
  return e.jsx(e.Fragment, {
    children: j
      ? e.jsx(L, { size: 'lg' })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(A, {
              showCart: !1,
              accountOptions: s('mainNavigation.accountOptionsSignIn.options', { returnObjects: !0 }),
              signedIn: !0,
              showSearch: !1,
            }),
            e.jsx('main', {
              className: 'page-content',
              children: e.jsxs('div', {
                className: 'gnb-form-container left',
                children: [
                  e.jsx(E, { handleBackLinkClick: () => a('/'), text: s('accountSettings.backButton') }),
                  e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: s('notifications.heading') }),
                  e.jsx('hr', {}),
                  e.jsx('h1', { className: 'h2', children: s('accountSettings.editLanguage.pageHeading') }),
                  e.jsxs('div', {
                    className: 'flex-parent-element',
                    children: [
                      e.jsx('h2', { className: 'h3', children: s('accountSettings.email') + ': ' }),
                      e.jsx('p', { children: ` ${l}` }),
                    ],
                  }),
                  e.jsx('h2', { className: 'h3', children: s('accountSettings.language') }),
                  e.jsxs(R, {
                    expanded: !0,
                    label: s('accountSettings.editLanguage.description'),
                    required: !0,
                    children: [
                      e.jsx(x, {
                        label: s('accountSettings.english'),
                        id: m,
                        selected: !1,
                        selectedOption: u,
                        setSelectedOption: g,
                      }),
                      e.jsx(x, {
                        label: s('accountSettings.french'),
                        id: f,
                        selected: !1,
                        selectedOption: u,
                        setSelectedOption: g,
                      }),
                    ],
                  }),
                  e.jsx('span', {
                    className: 'padding-right-sm-sm',
                    children: e.jsx(p, {
                      type: 'button',
                      variant: 'primary',
                      label: s('accountSettings.save'),
                      onClick: () => S(),
                    }),
                  }),
                  e.jsx(p, {
                    type: 'button',
                    variant: 'secondary',
                    label: s('accountSettings.cancel'),
                    onClick: () => a('/account-settings'),
                  }),
                ],
              }),
            }),
            e.jsx(M, { variant: 'dark' }),
          ],
        }),
  });
}
export { T as default };
