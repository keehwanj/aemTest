import { j as s, c as o } from './index-COkBmnQs.js';
import { f as m } from './helpers-C0u_kQzT.js';
import { E as d } from './Error-DFdCy2av.js';
const p = ({ id: n, isChecked: r, handleCheckboxChange: c, label: a, error: e = '', isRequired: i, disabled: l }) => {
  const t = e ? { 'aria-labelledby': `${a}-error` } : {};
  return s.jsx('div', {
    className: o('gnb-form-input', { error: e }),
    children: s.jsxs('fieldset', {
      className: 'gnb-checkboxes',
      children: [
        s.jsx('legend', { className: 'left sr-only', children: a }),
        s.jsxs('div', {
          className: 'single-option',
          children: [
            s.jsx('input', {
              type: 'checkbox',
              name: n,
              id: n,
              checked: r,
              onChange: c,
              ...t,
              'aria-invalid': !!e,
              disabled: l,
            }),
            s.jsxs('label', {
              id: m(a),
              htmlFor: n,
              children: [
                a,
                i &&
                  s.jsxs(s.Fragment, {
                    children: [
                      s.jsx('span', { className: 'required', children: '*' }),
                      s.jsx('span', { className: 'sr-only', children: 'required' }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e && s.jsx(d, { error: e, classes: 'margin-top-xs' }),
      ],
    }),
  });
};
export { p as C };
