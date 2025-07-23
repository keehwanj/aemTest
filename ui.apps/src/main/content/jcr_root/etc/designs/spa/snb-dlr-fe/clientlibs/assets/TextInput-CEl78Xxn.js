import { r as N, j as s, c as w } from './index-COkBmnQs.js';
import { f as C } from './helpers-C0u_kQzT.js';
import { E as b } from './Error-DFdCy2av.js';
import { M as D } from './Modal-Cq_LOJT1.js';
const V = ({
  label: t = '',
  type: l,
  helperText: m,
  required: o = !1,
  placeholder: x,
  value: p,
  onChange: h,
  onKeyUp: j,
  error: n,
  valid: E,
  id: e,
  maxlength: v,
  hasTooltipModal: i = !1,
  tooltipBody: y = '',
  tooltipTitle: g = '',
  isTooltipModalOpen: r = !1,
  setIsTooltipModalOpen: f = () => {},
  disabled: c,
}) => {
  const d = C(t) + '-error-id',
    k = n ? { 'aria-labelledby': d } : {},
    u = () => {
      f(!1), document.body.classList.remove('noscroll');
    };
  return (
    N.useEffect(() => {
      const a = (L) => {
        L.key === 'Escape' && u();
      };
      return (
        r && (window.addEventListener('keydown', a), document.body.classList.add('noscroll')),
        () => {
          window.removeEventListener('keydown', a);
        }
      );
    }, [r]),
    s.jsxs(s.Fragment, {
      children: [
        s.jsxs('form', {
          onSubmit: (a) => a.preventDefault(),
          className: w('gnb-form-input', n ? 'error' : '', E ? 'valid' : ''),
          noValidate: !0,
          children: [
            s.jsxs('label', {
              className: 'left',
              htmlFor: e || t,
              children: [
                (!i || c) &&
                  s.jsxs('span', { children: [t, o && s.jsx('span', { className: 'required', children: '*' })] }),
                i &&
                  !c &&
                  s.jsxs('a', {
                    href: '#',
                    tabIndex: 0,
                    'data-target': e || t,
                    'aria-haspopup': 'dialog',
                    'aria-controls': e || t,
                    className: 'modal-button info gnb-tooltip-link',
                    onClick: (a) => {
                      a.preventDefault(), f(!0);
                    },
                    children: [t, o && s.jsx('span', { className: 'required', children: '*' })],
                  }),
              ],
            }),
            m && s.jsx('div', { className: 'gnb-form-helper-text left', children: m }),
            s.jsx('input', {
              type: l,
              name: e || t,
              id: e || t,
              required: o,
              value: p,
              placeholder: x,
              onChange: h,
              ...k,
              'aria-invalid': !!n,
              className: 'text-input',
              maxLength: v,
              onKeyUp: j,
              disabled: c,
            }),
            n && s.jsx(b, { id: d, error: n, classes: l === 'tel' ? 'tel-input' : '' }),
          ],
        }),
        r && s.jsx(D, { id: `tooltip-input-modal-${e || t}`, title: g, open: r, onClose: u, children: y }),
      ],
    })
  );
};
export { V as T };
