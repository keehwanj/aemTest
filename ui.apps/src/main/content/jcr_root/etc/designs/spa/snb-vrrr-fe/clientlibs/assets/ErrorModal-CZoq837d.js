import { u as i, r as M, j as e } from './index-D38DftTu.js';
import { M as d } from './input-helpers-CkqBGot3.js';
const f = ({ isOpen: o, setIsOpen: t, handleDiscardFormChanges: r }) => {
    const { t: n } = i(),
      a = () => t(!1),
      l = () => {
        a(), r();
      };
    return (
      M.useEffect(() => {
        const s = (c) => {
          c.key === 'Escape' && a();
        };
        return (
          o && window.addEventListener('keydown', s),
          () => {
            window.removeEventListener('keydown', s);
          }
        );
      }, [o]),
      e.jsx(d, {
        id: 'discard-changes-modal',
        title: n('notifications.discardModal.title'),
        hasFooter: !0,
        primaryBtnProps: { label: n('notifications.discardModal.primaryButtonLabel'), onClick: l },
        secondaryBtnProps: { label: n('notifications.discardModal.secondaryButtonLabel'), onClick: a },
        hasSecondaryBtn: !0,
        open: o,
        onClose: a,
        children: e.jsx('p', { children: n('notifications.discardModal.content') }),
      })
    );
  },
  h = ({ isErrorModalOpen: o, handleErrorModalClose: t }) => {
    const { t: r } = i();
    return e.jsx(e.Fragment, {
      children: e.jsx(d, {
        id: 'errorModal',
        title: r('errorsMsg.errorModal.title'),
        primaryBtnProps: { label: r('errorsMsg.errorModal.buttonText'), onClick: t, variant: 'secondary' },
        hasFooter: !0,
        open: o,
        onClose: t,
        children: r('errorsMsg.errorModal.content'),
      }),
    });
  };
export { f as D, h as E };
