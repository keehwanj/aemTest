import {
  j as e,
  k as E,
  r as l,
  l as L,
  u as y,
  o as C,
  a as A,
  b as B,
  q as F,
  s as H,
  z as p,
  A as f,
  i as m,
  S as _,
} from './index-D08Q4-XL.js';
/* empty css                        */ import { B as M } from './BackLink-B7A8aD99.js';
import { E as O, u as R, H as x, M as q, B as j, F as w } from './Error-B3WcaCJh.js';
import { u as I } from './useMetadata-BArgd0e8.js';
const z = ({ children: s, label: a, expanded: t = !1, error: n, required: o = !1 }) =>
    e.jsxs('div', {
      className: E('gnb-form-input', n ? 'error' : ''),
      children: [
        e.jsxs('fieldset', {
          className: t ? 'gnb-radio-buttons-expanded' : 'gnb-radio-buttons',
          'aria-required': o,
          children: [
            e.jsx('legend', { className: 'left', children: a }),
            n && e.jsx(O, { error: n }),
            t && e.jsx('div', { className: 'set', children: s }),
            !t && s,
          ],
        }),
        t && e.jsx('script', { src: 'gnb-forms-1.0.0.js' }),
      ],
    }),
  S = ({ id: s, label: a, description: t, selected: n, selectedOption: o, setSelectedOption: r }) => {
    l.useEffect(() => {
      n && r(s ?? a);
    }, []);
    const c = s || a;
    return e.jsxs('label', {
      htmlFor: c,
      className: o === c ? 'active' : '',
      children: [
        e.jsx('input', { type: 'radio', id: c, name: L(a), value: c, onChange: () => r(c), checked: o === c }),
        e.jsx('span', { className: 'label-title left', children: a }),
        e.jsx('span', { className: 'label-content left', children: t }),
      ],
    });
  };
function $() {
  const { t: s } = y(),
    a = C(),
    { renderMetadata: t } = I(),
    { getSession: n, logout: o } = A(),
    [r] = B(['session', 'language', 'sessionExpiry']),
    [c, N] = l.useState(''),
    [b, u] = l.useState(!1),
    { state: k, dispatch: d } = R(),
    { language: g } = k.accountSettings;
  l.useEffect(() => {
    F(r.language);
  }, []),
    l.useEffect(() => {
      H(r)
        ? (u(!0),
          x
            .getAccountDetails({ params: { session: n() } })
            .then((i) => {
              N(i.data?.account?.email),
                d({
                  type: m.accountSettings.reminder_language_changed,
                  payload: { accountSettings: { language: i.data?.account?.preferredLanguage === p ? p : f } },
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
  const v = () => {
      u(!0),
        x
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
    children: b
      ? e.jsx(_, { size: 'lg' })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(q, {
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
                  e.jsx(M, { handleBackLinkClick: () => a('/'), text: s('accountSettings.backButton') }),
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
                  e.jsxs(z, {
                    expanded: !0,
                    label: s('accountSettings.editLanguage.description'),
                    required: !0,
                    children: [
                      e.jsx(S, {
                        label: s('accountSettings.english'),
                        id: p,
                        selected: !1,
                        selectedOption: g,
                        setSelectedOption: h,
                      }),
                      e.jsx(S, {
                        label: s('accountSettings.french'),
                        id: f,
                        selected: !1,
                        selectedOption: g,
                        setSelectedOption: h,
                      }),
                    ],
                  }),
                  e.jsx('span', {
                    className: 'padding-right-sm-sm',
                    children: e.jsx(j, {
                      type: 'button',
                      variant: 'primary',
                      label: s('accountSettings.save'),
                      onClick: () => v(),
                    }),
                  }),
                  e.jsx(j, {
                    type: 'button',
                    variant: 'secondary',
                    label: s('accountSettings.cancel'),
                    onClick: () => a('/account-settings'),
                  }),
                ],
              }),
            }),
            e.jsx(w, { variant: 'dark' }),
          ],
        }),
  });
}
export { $ as default };
