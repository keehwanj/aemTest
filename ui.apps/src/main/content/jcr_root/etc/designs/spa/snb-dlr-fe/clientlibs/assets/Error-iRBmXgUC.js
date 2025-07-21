import { j as r, c as i } from './index-CLFRBv6J.js';
const o = ({ error: a, classes: e = '', id: s = 'error-id' }) =>
  r.jsx('div', {
    className: i('gnb-form-validation left', e),
    role: 'alert',
    'aria-live': 'assertive',
    'aria-atomic': 'true',
    children: r.jsx('span', { id: s, className: 'margin-left-xs', children: a }),
  });
export { o as E };
