import { j as i, c as a, r as o } from './index-COkBmnQs.js';
const m = ({ variant: n = 'primary', type: l = 'button', size: e, label: r, disabled: s, onClick: c, id: t }) =>
    i.jsx('button', {
      type: l,
      className: a({
        'gnb-btn': n === 'primary',
        'gnb-btn-secondary': n === 'secondary',
        'gnb-btn-tertiary': n === 'tertiary',
        'gnb-btn-critical': n === 'critical',
        'gnb-btn-critical-secondary': n === 'critical secondary',
        'gnb-btn-sm': e === 'small',
        disabled: s,
      }),
      onClick: c,
      disabled: s,
      id: t,
      children: r,
    }),
  f = ({ variant: n, type: l, description: e, inPageHeading: r, isOpen: s, hasMarginTop: c }) => {
    const [t, g] = o.useState(!1);
    return (
      o.useEffect(() => {
        s && (g(!1), window.scrollTo({ top: 0, behavior: 'smooth' }));
      }, [s]),
      t
        ? null
        : s
        ? i.jsxs(i.Fragment, {
            children: [
              n !== 'global' &&
                i.jsxs('div', {
                  className: a('no-margin-bottom', {
                    'gnb-alert-info-inline': n === 'inline' && l === 'info',
                    'gnb-alert-info-inline gnb-alert-estimate-inline': n === 'inline' && l === 'estimate',
                    'gnb-alert-success-inline': n === 'inline' && l === 'success',
                    'gnb-alert-warning-inline': n === 'inline' && l === 'warning',
                    'gnb-alert-critical-inline': n === 'inline' && l === 'critical',
                    'gnb-alert-info': n === 'inPage' && l === 'info',
                    'gnb-alert-success': n === 'inPage' && l === 'success',
                    'gnb-alert-warning': n === 'inPage' && l === 'warning',
                    'gnb-alert-critical margin-bottom-lg no-margin-top': n === 'inPage' && l === 'critical' && !c,
                    'gnb-alert-critical margin-bottom-xs margin-top-md': n === 'inPage' && l === 'critical' && c,
                  }),
                  role: 'alert',
                  children: [
                    n === 'inPage' && r && i.jsx('h2', { className: 'left', children: r }),
                    i.jsx('div', { className: 'left', children: e }),
                  ],
                }),
              n === 'global' &&
                i.jsx('section', {
                  className: a({
                    'gnb-alert-info-global': l === 'info',
                    'gnb-alert-warning-global': l === 'warning',
                    'gnb-alert-critical-global': l === 'critical',
                  }),
                  children: i.jsxs('div', {
                    className: 'container-fluid',
                    children: [
                      typeof e == 'string' && i.jsx('p', { className: 'left', children: e }),
                      typeof e != 'string' && e,
                    ],
                  }),
                }),
            ],
          })
        : null
    );
  };
export { f as A, m as B };
