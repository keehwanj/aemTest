import { r as d, j as e, l as n, n as f } from './index-BKDzaX2j.js';
import { E as p } from './Error-fngNGqfC.js';
import { T as k } from './useMetadata-D4La1ovT.js';
import { g as h } from './CodeAuthentication-DPeCjX0f.js';
const C = ({
    id: o,
    selected: r = !1,
    label: a,
    hasOptIn: t = !1,
    error: s,
    useTrans: l,
    disabled: c = !1,
    withoutControlledLabeled: i = !1,
    onChange: m,
    onClick: x,
  }) => {
    const [j, u] = d.useState(r),
      b = s ? { 'aria-labelledby': `${a}-error` } : {};
    return e.jsxs(e.Fragment, {
      children: [
        x && e.jsx('div', { className: n('pair', 'on-click'), onClick: x ? () => x() : () => {} }),
        e.jsxs('div', {
          className: t ? 'single-option' : 'pair',
          children: [
            e.jsx('input', {
              type: 'checkbox',
              name: o,
              id: o,
              defaultChecked: r,
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
          e.jsx('div', { className: n('gnb-form-input', 'pair', s ? 'error' : ''), children: e.jsx(p, { error: s }) }),
      ],
    });
  },
  v = ({ title: o, children: r, hasOptIn: a, error: t, valueArray: s, selectedOptions: l, setSelectedOptions: c }) => {
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
        className: n('gnb-form-input', t ? 'error' : ''),
        children: e.jsxs('fieldset', {
          className: n('gnb-checkboxes', { 'fieldset-container': a }),
          children: [
            e.jsx('legend', { className: n('left', { 'sr-only': a }), children: o }),
            t && e.jsx(p, { error: t }),
            r,
          ],
        }),
      })
    );
  };
export { v as C, C as a };
