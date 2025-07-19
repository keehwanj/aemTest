import {
  j as e,
  l as v,
  r,
  n as E,
  u as L,
  o as y,
  a as C,
  b as A,
  i as B,
  s as F,
  t as H,
  A as p,
  B as f,
  k as m,
  S as _,
} from './index-1zwKKG9V.js';
/* empty css                        */ import { B as M } from './BackLink-DZUAFOh0.js';
import { E as O, H as x, M as R, B as j, F as w } from './Error-GCxiOGMZ.js';
import { u as I } from './useMetadata-wNctgGUD.js';
const q = ({ children: a, label: s, expanded: t = !1, error: n, required: c = !1 }) =>
    e.jsxs('div', {
      className: v('gnb-form-input', n ? 'error' : ''),
      children: [
        e.jsxs('fieldset', {
          className: t ? 'gnb-radio-buttons-expanded' : 'gnb-radio-buttons',
          'aria-required': c,
          children: [
            e.jsx('legend', { className: 'left', children: s }),
            n && e.jsx(O, { error: n }),
            t && e.jsx('div', { className: 'set', children: a }),
            !t && a,
          ],
        }),
        t && e.jsx('script', { src: 'gnb-forms-1.0.0.js' }),
      ],
    }),
  S = ({ id: a, label: s, description: t, selected: n, selectedOption: c, setSelectedOption: l }) => {
    r.useEffect(() => {
      n && l(a ?? s);
    }, []);
    const i = a || s;
    return e.jsxs('label', {
      htmlFor: i,
      className: c === i ? 'active' : '',
      children: [
        e.jsx('input', { type: 'radio', id: i, name: E(s), value: i, onChange: () => l(i), checked: c === i }),
        e.jsx('span', { className: 'label-title left', children: s }),
        e.jsx('span', { className: 'label-content left', children: t }),
      ],
    });
  };
function V() {
  const { t: a } = L(),
    s = y(),
    { renderMetadata: t } = I(),
    { getSession: n } = C(),
    [c] = A(['session', 'language', 'sessionExpiry']),
    [l, i] = r.useState(''),
    [N, u] = r.useState(!1),
    { state: b, dispatch: d } = B(),
    { language: g } = b.accountSettings;
  r.useEffect(() => {
    F(c.language);
  }, []),
    r.useEffect(() => {
      H(c)
        ? (u(!0),
          x
            .getAccountDetails({ params: { session: n() } })
            .then((o) => {
              i(o.data?.account?.email),
                d({
                  type: m.accountSettings.reminder_language_changed,
                  payload: { accountSettings: { language: o.data?.account?.preferredLanguage === p ? p : f } },
                }),
                u(!1);
            })
            .catch((o) => {
              console.log(o), u(!1);
            }))
        : s('/authentication');
    }, []),
    r.useEffect(() => {
      t();
    }, [c.language]);
  const k = () => {
      u(!0),
        x
          .updateAccountPreferredLanguage({ session: { token: n() }, preferredLanguage: g })
          .then(() => {
            d({ type: m.accountSettings.reminder_language_changed, payload: { accountSettings: { language: g } } }),
              s('/account-settings', { state: { showSuccessAlert: !0, successMsgType: 'generic-success' } });
          })
          .catch((o) => {
            console.log(o), s('/account-settings', { state: { showErrorAlert: !0 } });
          });
    },
    h = (o) => {
      d({ type: m.accountSettings.reminder_language_changed, payload: { accountSettings: { language: o } } });
    };
  return e.jsx(e.Fragment, {
    children: N
      ? e.jsx(_, { size: 'lg' })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(R, {
              showCart: !1,
              accountOptions: a('mainNavigation.accountOptionsSignIn.options', { returnObjects: !0 }),
              signedIn: !0,
              showSearch: !1,
            }),
            e.jsx('main', {
              className: 'page-content',
              children: e.jsxs('div', {
                className: 'gnb-form-container left',
                children: [
                  e.jsx(M, { handleBackLinkClick: () => s('/'), text: a('accountSettings.backButton') }),
                  e.jsx('div', { className: 'h1 margin-top-sm', role: 'banner', children: a('notifications.heading') }),
                  e.jsx('hr', {}),
                  e.jsx('h1', { className: 'h2', children: a('accountSettings.editLanguage.pageHeading') }),
                  e.jsxs('div', {
                    className: 'flex-parent-element',
                    children: [
                      e.jsx('h2', { className: 'h3', children: a('accountSettings.email') + ': ' }),
                      e.jsx('p', { children: ` ${l}` }),
                    ],
                  }),
                  e.jsx('h2', { className: 'h3', children: a('accountSettings.language') }),
                  e.jsxs(q, {
                    expanded: !0,
                    label: a('accountSettings.editLanguage.description'),
                    required: !0,
                    children: [
                      e.jsx(S, {
                        label: a('accountSettings.english'),
                        id: p,
                        selected: !1,
                        selectedOption: g,
                        setSelectedOption: h,
                      }),
                      e.jsx(S, {
                        label: a('accountSettings.french'),
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
                      label: a('accountSettings.save'),
                      onClick: () => k(),
                    }),
                  }),
                  e.jsx(j, {
                    type: 'button',
                    variant: 'secondary',
                    label: a('accountSettings.cancel'),
                    onClick: () => s('/account-settings'),
                  }),
                ],
              }),
            }),
            e.jsx(w, { variant: 'dark' }),
          ],
        }),
  });
}
export { V as default };
