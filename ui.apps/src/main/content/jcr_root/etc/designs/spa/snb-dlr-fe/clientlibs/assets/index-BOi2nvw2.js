import { u as i, j as n } from './index-CLFRBv6J.js';
import { T as s } from './Trans-CLlfKgue.js';
function c() {
  const { t: e } = i(['notFound']);
  return n.jsxs('div', {
    className: 'left container col-sm-6 padding-top-lg padding-bottom-lg',
    children: [
      n.jsx('h4', { className: 'margin-top-none', children: e('heading') }),
      n.jsx('p', { children: e('description1') }),
      n.jsx('p', { children: e('description2') }),
      n.jsx('p', { children: e('description3') }),
      n.jsx('p', { children: e('description4') }),
      n.jsx('p', {
        children: n.jsx(s, {
          i18nKey: 'description5',
          ns: 'notFound',
          components: { 1: n.jsx('a', { href: e('snbHomePageLink'), children: 'Services New Brunswick Home Page' }) },
        }),
      }),
      n.jsx('p', {
        children: n.jsx(s, {
          i18nKey: 'description6',
          ns: 'notFound',
          components: { 1: n.jsx('a', { href: e('searchLink'), children: 'Government of New Brunswick Search Page' }) },
        }),
      }),
      n.jsx('p', { children: e('description7') }),
    ],
  });
}
export { c as default };
