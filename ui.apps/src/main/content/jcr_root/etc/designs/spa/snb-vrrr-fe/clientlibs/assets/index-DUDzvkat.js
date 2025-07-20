import { u as l, b as u, r as s, j as n } from './index-Dn_77owJ.js';
import { u as p, T as o } from './useMetadata-BpX6cIEt.js';
function m() {
  const { t: e, i18n: a } = l(),
    { renderMetadata: c } = p(),
    [t] = u(['language']),
    [r] = s.useState(t.language);
  s.useEffect(() => {
    a.changeLanguage(r);
  }, []),
    s.useEffect(() => {
      c();
    }, [t.language]);
  const i = t.language === 'fr-CA' ? 'fr' : 'en',
    d =
      t.language === 'fr-CA'
        ? 'https://www2.gnb.ca/content/gnb/fr/recherche.html'
        : 'https://www2.gnb.ca/content/gnb/en/search.html';
  return n.jsxs('div', {
    className: 'left container col-sm-6 padding-top-lg padding-bottom-lg',
    children: [
      n.jsx('h4', { className: 'margin-top-none', children: e('notFound.heading') }),
      n.jsx('p', { children: e('notFound.description1') }),
      n.jsx('p', { children: e('notFound.description2') }),
      n.jsx('p', { children: e('notFound.description3') }),
      n.jsx('p', { children: e('notFound.description4') }),
      n.jsx('p', {
        children: n.jsx(o, {
          i18nKey: 'notFound.description5',
          components: {
            1: n.jsx('a', {
              href: `https://www2.snb.ca/content/snb/${i}.html`,
              children: 'Services New Brunswick Home Page',
            }),
          },
        }),
      }),
      n.jsx('p', {
        children: n.jsx(o, {
          i18nKey: 'notFound.description6',
          components: { 1: n.jsx('a', { href: d, children: 'Government of New Brunswick Search Page' }) },
        }),
      }),
      n.jsx('p', { children: e('notFound.description7') }),
    ],
  });
}
export { m as default };
