import { j as s, c as e } from './index-COkBmnQs.js';
import { B as a } from './Alert-BfYOY8ZM.js';
const j = ({
  primaryButtonLabel: r,
  secondaryButtonLabel: t,
  linkButtonLabel: i,
  disabledPrimaryBtn: n,
  disableSecondaryBtn: o = !1,
  disableLinkBtn: m = !1,
  handlePrimaryClick: d,
  handleSecondaryClick: c,
  handleLinkButtonClick: b,
  hasSecondaryBtn: p = !1,
  hasLinkBtn: u = !1,
  isModalFooter: l = !1,
}) =>
  s.jsxs('div', {
    className: e(l ? 'gnb-modal-footer' : 'dlr-button-group'),
    children: [
      s.jsx('span', {
        className: e('padding-right-sm-sm', { 'dlr-primary-button-container': !l }),
        children: s.jsx(a, { type: 'submit', size: 'small', label: r, onClick: d, disabled: n }),
      }),
      p && s.jsx(a, { size: 'small', variant: 'secondary', label: t, onClick: c, disabled: o }),
      u && s.jsx(a, { size: 'small', variant: 'tertiary', label: i, onClick: b, disabled: m }),
    ],
  });
export { j as B };
