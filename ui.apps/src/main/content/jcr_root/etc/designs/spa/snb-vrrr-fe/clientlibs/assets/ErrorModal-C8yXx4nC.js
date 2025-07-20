import { u as c, r as C, j as o } from './index-CO2CUHJY.js';
import { M as h, C as k } from './CodeAuthentication-uT5wwoYc.js';
const B = ({ isOpen: e, setIsOpen: r, handleDiscardFormChanges: t }) => {
    const { t: n } = c(),
      a = () => r(!1),
      d = () => {
        a(), t();
      };
    return (
      C.useEffect(() => {
        const i = (l) => {
          l.key === 'Escape' && a();
        };
        return (
          e && window.addEventListener('keydown', i),
          () => {
            window.removeEventListener('keydown', i);
          }
        );
      }, [e]),
      o.jsx(h, {
        id: 'discard-changes-modal',
        title: n('notifications.discardModal.title'),
        hasFooter: !0,
        primaryBtnProps: { label: n('notifications.discardModal.primaryButtonLabel'), onClick: d },
        secondaryBtnProps: { label: n('notifications.discardModal.secondaryButtonLabel'), onClick: a },
        hasSecondaryBtn: !0,
        open: e,
        onClose: a,
        children: o.jsx('p', { children: n('notifications.discardModal.content') }),
      })
    );
  },
  L = ({
    isOpen: e,
    setIsOpen: r,
    type: t,
    session: n,
    setShowSuccessAlert: a,
    setSuccessMsg: d,
    setRefreshData: i,
    rememberMe: l,
    email: s,
    setEmail: u,
    setIsAuthenticateEmailModalOpen: x,
    smsNumber: m,
    setSMSNumber: f,
    setIsAuthenticateSMSNumberModalOpen: E,
    smsLanguage: w,
  }) => {
    const { t: p } = c();
    C.useEffect(() => {
      const y = (g) => {
        g.key === 'Escape' && M();
      };
      return (
        e && window.addEventListener('keydown', y),
        () => {
          window.removeEventListener('keydown', y);
        }
      );
    }, [e]);
    const M = () => {
      r(!1), s && u && u(''), m && f && f('');
    };
    return o.jsx('div', {
      className: 'modal-width',
      children: o.jsx(h, {
        title: p(t === 'email' ? 'authentication.modal.emailHeading' : 'authentication.modal.phoneHeading'),
        id: 'authenticate-modal',
        open: e,
        onClose: M,
        children:
          t === 'email'
            ? o.jsx(k, {
                alignment: 'left',
                session: n,
                type: 'updateAccountEmail',
                setShowSuccessAlert: a,
                setSuccessMsg: d,
                setRefreshData: i,
                rememberMeChecked: l,
                length: 6,
                email: s,
                setIsAuthenticateEmailModalOpen: x,
              })
            : o.jsx(k, {
                alignment: 'left',
                session: n,
                type: 'updateAccountSMSNumber',
                setShowSuccessAlert: a,
                setSuccessMsg: d,
                setRefreshData: i,
                rememberMeChecked: l,
                length: 6,
                smsNumber: m,
                setIsAuthenticateSMSNumberModalOpen: E,
                smsLanguage: w,
              }),
      }),
    });
  },
  A = ({ isErrorModalOpen: e, handleErrorModalClose: r }) => {
    const { t } = c();
    return o.jsx(o.Fragment, {
      children: o.jsx(h, {
        id: 'errorModal',
        title: t('errorsMsg.errorModal.title'),
        primaryBtnProps: { label: t('errorsMsg.errorModal.buttonText'), onClick: r, variant: 'secondary' },
        hasFooter: !0,
        open: e,
        onClose: r,
        children: t('errorsMsg.errorModal.content'),
      }),
    });
  };
export { L as A, B as D, A as E };
