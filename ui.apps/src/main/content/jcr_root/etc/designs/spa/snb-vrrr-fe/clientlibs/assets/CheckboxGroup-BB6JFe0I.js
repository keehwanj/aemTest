import { r as d, j as e, k as r, l as f } from './index-Dn_77owJ.js';
import { E as p } from './Error-csTIVor9.js';
import { T as k } from './useMetadata-BpX6cIEt.js';
import { g as h } from './CodeAuthentication-BwhFDNsj.js';
const C = ({
    id: o,
    selected: n = !1,
    label: a,
    hasOptIn: t = !1,
    error: s,
    useTrans: l,
    disabled: c = !1,
    withoutControlledLabeled: i = !1,
    onChange: m,
    onClick: x,
  }) => {
    const [j, u] = d.useState(n),
      b = s ? { 'aria-labelledby': `${a}-error` } : {};
    return e.jsxs(e.Fragment, {
      children: [
        x && e.jsx('div', { className: r('pair', 'on-click'), onClick: x ? () => x() : () => {} }),
        e.jsxs('div', {
          className: t ? 'single-option' : 'pair',
          children: [
            e.jsx('input', {
              type: 'checkbox',
              name: o,
              id: o,
              defaultChecked: n,
              onMouseDown: () => u(!j),
              ...b,
              'aria-invalid': !!s,
              disabled: c,
              className: c ? 'disabled' : '',
              onChange: m ? () => m() : () => {},
            }),
            l
              ? e.jsx('label', {
                  id: i ? '' : f(a),
                  htmlFor: o,
                  className: c ? 'disabled' : '',
                  children: e.jsx(k, { i18nKey: l[0], components: l[1] }),
                })
              : e.jsx('label', { id: f(a), htmlFor: o, className: c ? 'disabled' : '', children: a }),
          ],
        }),
        s &&
          e.jsx('div', { className: r('gnb-form-input', 'pair', s ? 'error' : ''), children: e.jsx(p, { error: s }) }),
      ],
    });
  },
  v = ({ title: o, children: n, hasOptIn: a, error: t, valueArray: s, selectedOptions: l, setSelectedOptions: c }) => {
    let i = [];
    return (
      d.useEffect(() => {
        c(h(s)), (i = Array.from(document.querySelectorAll('input[type=checkbox]')));
      }, []),
      d.useEffect(() => {
        for (const m of i)
          m.addEventListener('click', () => {
            c(h(s));
          });
      }, [l]),
      e.jsx('div', {
        className: r('gnb-form-input', t ? 'error' : ''),
        children: e.jsxs('fieldset', {
          className: r('gnb-checkboxes', { 'fieldset-container': a }),
          children: [
            e.jsx('legend', { className: r('left', { 'sr-only': a }), children: o }),
            t && e.jsx(p, { error: t }),
            n,
          ],
        }),
      })
    );
  };
export { v as C, C as a };
