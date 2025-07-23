import { r as i, A as m, m as d } from './index-COkBmnQs.js';
import { H as u } from './index-WhvY4R74.js';
const f = () => {
  const { state: o } = i.useContext(m),
    { common: a } = o,
    { transactionId: r } = a,
    c = (n) => {
      const t = parseInt(n, 10);
      return (Date.now() - t) / 1e3 >= d;
    };
  return async (n = !1, t = '') => {
    if (!r && !t) return 0;
    const s = sessionStorage.getItem('startTimeBackEnd');
    if (!s) return sessionStorage.setItem('startTimeBackEnd', Date.now().toString()), 1;
    if (c(s) || n) {
      sessionStorage.setItem('startTimeBackEnd', Date.now().toString());
      try {
        const e = await u.renewBackEndSession(t || r);
        return e && (e == null ? void 0 : e.status) === 200 ? 2 : 3;
      } catch (e) {
        return String(e).indexOf('401') > -1 ? 4 : (console.error('could not refresh backend timeout timer', e), 5);
      }
    }
    return 6;
  };
};
export { f as u };
