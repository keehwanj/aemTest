import { u as c, r as l, j as t } from './index-BJVeoK1D.js';
import { M as f } from './input-helpers-B8rETgnD.js';
const h = ({ isOpen: e, setIsOpen: s, handleDiscardFormChanges: r }) => {
  const { t: o } = c(),
    a = () => s(!1),
    i = () => {
      a(), r();
    };
  return (
    l.useEffect(() => {
      const n = (d) => {
        d.key === 'Escape' && a();
      };
      return (
        e && window.addEventListener('keydown', n),
        () => {
          window.removeEventListener('keydown', n);
        }
      );
    }, [e]),
    t.jsx(f, {
      id: 'discard-changes-modal',
      title: o('notifications.discardModal.title'),
      hasFooter: !0,
      primaryBtnProps: { label: o('notifications.discardModal.primaryButtonLabel'), onClick: i },
      secondaryBtnProps: { label: o('notifications.discardModal.secondaryButtonLabel'), onClick: a },
      hasSecondaryBtn: !0,
      open: e,
      onClose: a,
      children: t.jsx('p', { children: o('notifications.discardModal.content') }),
    })
  );
};
export { h as D };
