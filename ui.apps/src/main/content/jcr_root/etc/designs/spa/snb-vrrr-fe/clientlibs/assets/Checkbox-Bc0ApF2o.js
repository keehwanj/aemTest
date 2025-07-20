import { r as f, j as e, i as m } from './index-BJVeoK1D.js';
import { h as j, j as x } from './Error-DYTFVrcz.js';
import { g as d } from './input-helpers-B8rETgnD.js';
import { T as k } from './useMetadata-Blp6FudJ.js';
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
            o && e.jsx(j, { error: o }),
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
      b = r ? { 'aria-labelledby': `${s}-error` } : {};
    return e.jsxs('div', {
      className: o ? 'single-option' : 'pair',
      children: [
        e.jsx('input', {
          type: 'checkbox',
          name: c,
          id: c,
          defaultChecked: l,
          onMouseDown: () => p(!h),
          ...b,
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
              children: e.jsx(k, { i18nKey: t[0], components: t[1] }),
            })
          : e.jsx('label', { id: x(s), htmlFor: c, className: a ? 'disabled' : '', children: s }),
      ],
    });
  };
export { E as C, g as a };
