import {
  j as e,
  k as A,
  r as l,
  l as B,
  u as F,
  p as H,
  a as _,
  b as M,
  s as O,
  t as R,
  A as p,
  B as N,
  i as m,
  S as w,
} from './index-B0gZ8dVn.js';
/* empty css                        */ import { B as I } from './BackLink-IZL3K4ex.js';
import { E as q, u as G, H as b, M as P, B as k, F as T } from './Error-46B2bSsF.js';
import { u as z } from './useMetadata-YkuU4LQg.js';
const D = ({ children: s, label: a, expanded: t = !1, error: n, required: o = !1 }) =>
    e.jsxs('div', {
      className: A('gnb-form-input', n ? 'error' : ''),
      children: [
        e.jsxs('fieldset', {
          className: t ? 'gnb-radio-buttons-expanded' : 'gnb-radio-buttons',
          'aria-required': o,
          children: [
            e.jsx('legend', { className: 'left', children: a }),
            n && e.jsx(q, { error: n }),
            t && e.jsx('div', { className: 'set', children: s }),
            !t && s,
          ],
        }),
        t && e.jsx('script', { src: 'gnb-forms-1.0.0.js' }),
      ],
    }),
  v = ({ id: s, label: a, description: t, selected: n, selectedOption: o, setSelectedOption: r }) => {
    l.useEffect(() => {
      n && r(s ?? a);
    }, []);
    const c = s || a;
    return e.jsxs('label', {
      htmlFor: c,
      className: o === c ? 'active' : '',
      children: [
        e.jsx('input', { type: 'radio', id: c, name: B(a), value: c, onChange: () => r(c), checked: o === c }),
        e.jsx('span', { className: 'label-title left', children: a }),
        e.jsx('span', { className: 'label-content left', children: t }),
      ],
    });
  };
function U() {
  const { t: s } = F(),
    a = H(),
    { renderMetadata: t } = z(),
    { getSession: n, logout: o } = _(),
    [r] = M(['session', 'language', 'sessionExpiry']),
    [c, E] = l.useState(''),
    [L, u] = l.useState(!1),
    { state: y, dispatch: d } = G(),
    { language: g } = y.accountSettings;
  l.useEffect(() => {
    O(r.language);
  }, []),
    l.useEffect(() => {
      R(r)
        ? (u(!0),
          b
            .getAccountDetails({ params: { session: n() } })
            .then((i) => {
              var f, x, j, S;
              E((x = (f = i.data) == null ? void 0 : f.account) == null ? void 0 : x.email),
                d({
                  type: m.accountSettings.reminder_language_changed,
                  payload: {
                    accountSettings: {
                      language:
                        ((S = (j = i.data) == null ? void 0 : j.account) == null ? void 0 : S.preferredLanguage) === p
                          ? p
                          : N,
                    },
                  },
                }),
                u(!1);
            })
            .catch((i) => {
              console.log(i), u(!1);
            }))
        : o(!0);
    }, []),
    l.useEffect(() => {
      t();
    }, [r.language]);
  const C = () => {
      u(!0),
        b
          .updateAccountPreferredLanguage({ session: { token: n() }, preferredLanguage: g })
          .then(() => {
            d({ type: m.accountSettings.reminder_language_changed, payload: { accountSettings: { language: g } } }),
              a('/account-settings', { state: { showSuccessAlert: !0, successMsgType: 'generic-success' } });
          })
          .catch((i) => {
            console.log(i), a('/account-settings', { state: { showErrorAlert: !0 } });
          });
    },
    h = (i) => {
      d({ type: m.accountSettings.reminder_language_changed, payload: { accountSettings: { language: i } } });
    };
  return e.jsx(e.Fragment, {
    children: L
      ? e.jsx(w, { size: 'lg' })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(P, {
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
                  e.jsx(I, { handleBackLinkClick: () => a('/'), text: s('accountSettings.backButton') }),
                  e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: s('notifications.heading') }),
                  e.jsx('hr', {}),
                  e.jsx('h1', { className: 'h2', children: s('accountSettings.editLanguage.pageHeading') }),
                  e.jsxs('div', {
                    className: 'flex-parent-element',
                    children: [
                      e.jsx('h2', { className: 'h3', children: s('accountSettings.email') + ': ' }),
                      e.jsx('p', { children: ` ${c}` }),
                    ],
                  }),
                  e.jsx('h2', { className: 'h3', children: s('accountSettings.language') }),
                  e.jsxs(D, {
                    expanded: !0,
                    label: s('accountSettings.editLanguage.description'),
                    required: !0,
                    children: [
                      e.jsx(v, {
                        label: s('accountSettings.english'),
                        id: p,
                        selected: !1,
                        selectedOption: g,
                        setSelectedOption: h,
                      }),
                      e.jsx(v, {
                        label: s('accountSettings.french'),
                        id: N,
                        selected: !1,
                        selectedOption: g,
                        setSelectedOption: h,
                      }),
                    ],
                  }),
                  e.jsx('span', {
                    className: 'padding-right-sm-sm',
                    children: e.jsx(k, {
                      type: 'button',
                      variant: 'primary',
                      label: s('accountSettings.save'),
                      onClick: () => C(),
                    }),
                  }),
                  e.jsx(k, {
                    type: 'button',
                    variant: 'secondary',
                    label: s('accountSettings.cancel'),
                    onClick: () => a('/account-settings'),
                  }),
                ],
              }),
            }),
            e.jsx(T, { variant: 'dark' }),
          ],
        }),
  });
}
export { U as default };
