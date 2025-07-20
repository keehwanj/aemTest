import { r as f, j as e, k as m } from './index-D38DftTu.js';
import { h as b, j as x } from './Error-CCx1isWs.js';
import { g as d } from './input-helpers-CkqBGot3.js';
import { T as j } from './useMetadata-DpbrA7pe.js';
const g = ({
    title: c,
    children: l,
    hasOptIn: s,
    error: o,
    valueArray: r,
    selectedOptions: t,
    setSelectedOptions: a,
  }) => {
    let n = [];
    return (
      f.useEffect(() => {
        a(d(r)), (n = Array.from(document.querySelectorAll('input[type=checkbox]')));
      }, []),
      f.useEffect(() => {
        for (const i of n)
          i.addEventListener('click', () => {
            a(d(r));
          });
      }, [t]),
      e.jsx('div', {
        className: m('gnb-form-input', o ? 'error' : ''),
        children: e.jsxs('fieldset', {
          className: m('gnb-checkboxes', { 'fieldset-container': s }),
          children: [
            e.jsx('legend', { className: m('left', { 'sr-only': s }), children: c }),
            o && e.jsx(b, { error: o }),
            l,
          ],
        }),
      })
    );
  },
  E = ({
    id: c,
    selected: l = !1,
    label: s,
    hasOptIn: o = !1,
    error: r = !1,
    useTrans: t,
    disabled: a = !1,
    withoutControlledLabeled: n = !1,
    onChange: i,
  }) => {
    const [h, p] = f.useState(l),
      k = r ? { 'aria-labelledby': `${s}-error` } : {};
    return e.jsxs('div', {
      className: o ? 'single-option' : 'pair',
      children: [
        e.jsx('input', {
          type: 'checkbox',
          name: c,
          id: c,
          defaultChecked: l,
          onMouseDown: () => p(!h),
          ...k,
          'aria-invalid': r,
          disabled: a,
          className: a ? 'disabled' : '',
          onChange: i ? () => i() : () => {},
        }),
        t
          ? e.jsx('label', {
              id: n ? '' : x(s),
              htmlFor: c,
              className: a ? 'disabled' : '',
              children: e.jsx(j, { i18nKey: t[0], components: t[1] }),
            })
          : e.jsx('label', { id: x(s), htmlFor: c, className: a ? 'disabled' : '', children: s }),
      ],
    });
  };
export { E as C, g as a };
