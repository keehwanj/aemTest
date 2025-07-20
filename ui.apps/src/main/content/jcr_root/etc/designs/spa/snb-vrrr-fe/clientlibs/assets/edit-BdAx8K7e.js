import { j as e, k as L, r as o, u as E, e as C, a as B, S as y } from './index-D38DftTu.js';
/* empty css                        */ import { B as F } from './BackLink-CNlxF_IM.js';
import {
  h as H,
  j as A,
  u as M,
  b as O,
  i as R,
  H as j,
  f as m,
  k as S,
  M as w,
  B as N,
  F as I,
} from './Error-CCx1isWs.js';
import { u as q } from './useMetadata-DpbrA7pe.js';
const G = ({ children: s, label: a, expanded: t = !1, error: n, required: c = !1 }) =>
    e.jsxs('div', {
      className: L('gnb-form-input', n ? 'error' : ''),
      children: [
        e.jsxs('fieldset', {
          className: t ? 'gnb-radio-buttons-expanded' : 'gnb-radio-buttons',
          'aria-required': c,
          children: [
            e.jsx('legend', { className: 'left', children: a }),
            n && e.jsx(H, { error: n }),
            t && e.jsx('div', { className: 'set', children: s }),
            !t && s,
          ],
        }),
        t && e.jsx('script', { src: 'gnb-forms-1.0.0.js' }),
      ],
    }),
  b = ({ id: s, label: a, description: t, selected: n, selectedOption: c, setSelectedOption: l }) => {
    o.useEffect(() => {
      n && l(s ?? a);
    }, []);
    const i = s || a;
    return e.jsxs('label', {
      htmlFor: i,
      className: c === i ? 'active' : '',
      children: [
        e.jsx('input', { type: 'radio', id: i, name: A(a), value: i, onChange: () => l(i), checked: c === i }),
        e.jsx('span', { className: 'label-title left', children: a }),
        e.jsx('span', { className: 'label-content left', children: t }),
      ],
    });
  };
function $() {
  const { t: s } = E(),
    a = C(),
    { renderMetadata: t } = q(),
    { getSession: n } = M(),
    [c] = B(['session', 'language']),
    [l, i] = o.useState(''),
    [u, g] = o.useState(''),
    [k, d] = o.useState(!1);
  o.useEffect(() => {
    O(c.language);
  }, []),
    o.useEffect(() => {
      R(c)
        ? (d(!0),
          j
            .getAccountDetails({ params: { session: n() } })
            .then((r) => {
              var h, f, p, x;
              i((f = (h = r.data) == null ? void 0 : h.account) == null ? void 0 : f.email),
                g(
                  ((x = (p = r.data) == null ? void 0 : p.account) == null ? void 0 : x.preferredLanguage) === m ? m : S
                ),
                d(!1);
            })
            .catch((r) => {
              console.log(r), d(!1);
            }))
        : a('/authentication');
    }, []),
    o.useEffect(() => {
      t();
    }, [c.language]);
  const v = () => {
    d(!0),
      j
        .updateAccountPreferredLanguage({ session: { token: n() }, preferredLanguage: u })
        .then(() => {
          g(u), a('/account-settings', { state: { showSuccessAlert: !0, successMsgType: 'generic-success' } });
        })
        .catch((r) => {
          console.log(r), a('/account-settings', { state: { showErrorAlert: !0 } });
        });
  };
  return e.jsx(e.Fragment, {
    children: k
      ? e.jsx(y, { size: 'lg' })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(w, {
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
                  e.jsx(F, { handleBackLinkClick: () => a('/'), text: s('accountSettings.backButton') }),
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
                  e.jsxs(G, {
                    expanded: !0,
                    label: s('accountSettings.editLanguage.description'),
                    required: !0,
                    children: [
                      e.jsx(b, {
                        label: s('accountSettings.english'),
                        id: m,
                        selected: !1,
                        selectedOption: u,
                        setSelectedOption: g,
                      }),
                      e.jsx(b, {
                        label: s('accountSettings.french'),
                        id: S,
                        selected: !1,
                        selectedOption: u,
                        setSelectedOption: g,
                      }),
                    ],
                  }),
                  e.jsx('span', {
                    className: 'padding-right-sm-sm',
                    children: e.jsx(N, {
                      type: 'button',
                      variant: 'primary',
                      label: s('accountSettings.save'),
                      onClick: () => v(),
                    }),
                  }),
                  e.jsx(N, {
                    type: 'button',
                    variant: 'secondary',
                    label: s('accountSettings.cancel'),
                    onClick: () => a('/account-settings'),
                  }),
                ],
              }),
            }),
            e.jsx(I, { variant: 'dark' }),
          ],
        }),
  });
}
export { $ as default };
