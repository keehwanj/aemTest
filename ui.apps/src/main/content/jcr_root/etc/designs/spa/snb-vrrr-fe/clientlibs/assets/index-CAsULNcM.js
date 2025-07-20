import {
  u as he,
  r as t,
  j as e,
  a as Re,
  F as Ct,
  f as St,
  b as Mt,
  c as wt,
  d as dt,
  S as Ve,
  e as Nt,
} from './index-BJVeoK1D.js';
import {
  u as ve,
  H as K,
  m as $e,
  d as We,
  D as Ke,
  C as It,
  g as ze,
  B as Se,
  a as Et,
  N as Ye,
  b as Ot,
  i as Ze,
  M as At,
  F as Pt,
} from './Error-DYTFVrcz.js';
import {
  M as be,
  A as U,
  T as de,
  c as ut,
  i as Le,
  a as Be,
  b as Te,
  r as ft,
  d as Ae,
} from './input-helpers-B8rETgnD.js';
import { T as pe, u as Vt } from './useMetadata-Blp6FudJ.js';
import { D as _e } from './DiscardChangesModal-B8ygviCx.js';
import { C as Lt, a as et } from './Checkbox-Bc0ApF2o.js';
const Bt = (a, i, g, c) => {
    var s = {};
    (a.ARIAaccordion = s),
      (s.NS = 'ARIAaccordion'),
      (s.AUTHOR = "Scott O'Hara"),
      (s.VERSION = '3.1.1'),
      (s.LICENSE = 'https://github.com/scottaohara/accessible_accordions/blob/master/LICENSE');
    var u = 'gnb-accordion-trigger',
      d = 'gnb-accordion-heading',
      n = 'gnb-accordion-panel',
      N = 'gnb-accordion-toggleall',
      m = 0;
    (s.create = function () {
      var o,
        r,
        M = 'none',
        l,
        p,
        f,
        h,
        x = i.querySelectorAll('[data-aria-accordion]');
      for (m += 1, h = 0; h < x.length; h++) {
        var b;
        if (
          ((o = x[h]),
          o.hasAttribute('id') || (o.id = 'acc_' + m + '-' + h),
          i.querySelectorAll('#' + o.id + '> li').length
            ? ((r = i.querySelectorAll('#' + o.id + ' li > .' + n)),
              (l = i.querySelectorAll('#' + o.id + ' li > .' + d)))
            : ((r = i.querySelectorAll('#' + o.id + ' > .' + n)), (l = i.querySelectorAll('#' + o.id + ' > .' + d))),
          o.hasAttribute('data-default') && (M = o.getAttribute('data-default')),
          (f = o.hasAttribute('data-constant')),
          o.hasAttribute('data-multi'),
          o.hasAttribute('data-transition'))
        ) {
          var E = o.querySelectorAll('.' + n);
          for (b = 0; b < E.length; b++)
            E[b].setAttribute('style', 'transition: ' + o.getAttribute('data-transition') + 's ease-in-out');
        }
        for (
          s.setupPanels(o.id, r, M, f),
            s.setupHeadingButton(l, c, f),
            i.querySelectorAll('#' + o.id + '> li').length
              ? (p = i.querySelectorAll('#' + o.id + ' li > .' + d + ' .' + u))
              : (p = i.querySelectorAll('#' + o.id + ' > .' + d + ' .' + u)),
            b = 0;
          b < p.length;
          b++
        )
          p[b].addEventListener('click', s.actions), p[b].addEventListener('keydown', s.keytrolls);
      }
    }),
      (s.setupPanels = function (o, r, M, l) {
        var p, f, h, x, b;
        for (p = 0; p < r.length; p++)
          (f = r[p]),
            (h = o + '_panel_' + (p + 1)),
            (x = M),
            (b = l),
            f.setAttribute('id', h),
            v(r[0], !0),
            x !== 'none' &&
              typeof parseInt(x) == 'number' &&
              (x <= 1 ? v(r[0], !1) : x - 1 >= r.length ? v(r[r.length - 1], !1) : v(r[x - 1], !1)),
            ((b && x === 'none') || typeof parseInt(x) != 'number') && v(r[0], !1);
      }),
      (s.setupHeadingButton = function (o, r, M) {
        var l, p, f, h, x, b;
        for (b = 0; b < o.length; b++)
          (l = o[b]),
            (p = l.nextElementSibling.id),
            (f = i.getElementById(p).getAttribute('aria-hidden')),
            (h = i.createElement('button')),
            (x = r[b]),
            (l.innerHTML = ''),
            h.setAttribute('type', 'button'),
            h.setAttribute('aria-controls', p),
            h.setAttribute('id', p + '_trigger'),
            h.classList.add(u),
            f === 'false' ? (y(h, !0), k(h, !0), M && h.setAttribute('aria-disabled', 'true')) : (y(h, !1), k(h, !1)),
            l.appendChild(h),
            h.appendChild(i.createTextNode(x));
      }),
      (s.actions = function (o) {
        var r = this.id.replace(/_panel.*$/g, ''),
          M = i.getElementById(this.getAttribute('aria-controls')),
          l;
        i.querySelectorAll('#' + r + '> li').length
          ? (l = i.querySelectorAll('#' + r + ' li > .' + d + ' .' + u))
          : (l = i.querySelectorAll('#' + r + ' > .' + d + ' .' + u)),
          o.preventDefault(),
          s.togglePanel(o, r, M, l);
      }),
      (s.togglePanel = function (o, r, M, l) {
        var p,
          f,
          h = o.target;
        if (
          h.getAttribute('aria-disabled') !== 'true' &&
          ((p = h.getAttribute('aria-controls')),
          k(h, 'true'),
          h.getAttribute('aria-expanded') === 'true'
            ? (y(h, 'false'), v(M, 'true'))
            : (y(h, 'true'), v(M, 'false'), i.getElementById(r).hasAttribute('data-constant') && S(h, 'true')),
          i.getElementById(r).hasAttribute('data-constant') || !i.getElementById(r).hasAttribute('data-multi'))
        )
          for (f = 0; f < l.length; f++)
            h !== l[f] &&
              (k(l[f], 'false'),
              (p = l[f].getAttribute('aria-controls')),
              S(l[f], 'false'),
              y(l[f], 'false'),
              v(i.getElementById(p), 'true'));
      }),
      (s.toggleAllPanels = function (o) {
        var r, M, l;
        let p = o.target,
          f = o.target.nextElementSibling;
        (M = p.getAttribute('data-open')),
          (l = M == 'true' ? 'false' : 'true'),
          i.querySelectorAll('#' + f.id + '> li').length
            ? (r = i.querySelectorAll('#' + f.id + ' li > .' + d + ' .' + u))
            : (r = i.querySelectorAll('#' + f.id + ' > .' + d + ' .' + u));
        for (var h = 0; h < r.length; h++) {
          let x = r[h],
            b = document.getElementById(x.getAttribute('aria-controls'));
          k(x, 'true'), l === 'false' ? (y(x, 'false'), v(b, 'true')) : (y(x, 'true'), v(b, 'false'));
        }
        p.setAttribute('data-open', l);
      }),
      (s.keytrolls = function (o) {
        if (o.target.classList.contains(u)) {
          var r = o.keyCode || o.which,
            M = 36,
            l = 35,
            p = this.id.replace(/_panel.*$/g, ''),
            f;
          switch (
            (i.querySelectorAll('#' + p + '> li').length
              ? (f = i.querySelectorAll('#' + p + ' li > .' + d + ' .' + u))
              : (f = i.querySelectorAll('#' + p + ' > .' + d + ' .' + u)),
            r)
          ) {
            case l:
              o.preventDefault(), f[f.length - 1].focus();
              break;
            case M:
              o.preventDefault(), f[0].focus();
              break;
          }
        }
      }),
      (s.init = function () {
        s.create();
        let o = i.querySelectorAll('.' + N);
        for (var r = 0; r < o.length; r++)
          o[r].addEventListener('click', function (l) {
            return (
              s.toggleAllPanels(l),
              l.target.innerHTML == 'Open all' ? (l.target.innerHTML = 'Close all') : (l.target.innerHTML = 'Open all'),
              l.preventDefault(),
              !0
            );
          });
      });
    var v = function (o, r) {
        o.setAttribute('aria-hidden', r);
      },
      y = function (o, r) {
        o.setAttribute('aria-expanded', r);
      },
      S = function (o, r) {
        o.setAttribute('aria-disabled', r);
      },
      k = function (o, r) {
        o.setAttribute('data-current', r);
      };
    s.init();
  },
  Tt = ({
    vehicleName: a,
    id: i,
    isOpen: g,
    setIsOpen: c,
    setRemovedVehicleSuccessMsg: s,
    getVehicleName: u,
    setRefreshData: d,
  }) => {
    const { t: n } = he(),
      { getSession: N } = ve(),
      [m, v] = t.useState(!1),
      y = () => {
        c(!1), v(!1);
      },
      S = () => {
        s(!1),
          v(!1),
          K.removeAVehicle(i, { params: { session: N() } })
            .then(() => {
              u(a), y(), s(!0), d(!0);
            })
            .catch((k) => {
              v(!0), console.error(k);
            });
      };
    return (
      t.useEffect(() => {
        const k = (o) => {
          o.key === 'Escape' && y();
        };
        return (
          g && window.addEventListener('keydown', k),
          () => {
            window.removeEventListener('keydown', k);
          }
        );
      }, [g]),
      e.jsx(be, {
        id: `modal-remove-vehicle-${i}`,
        title: n('notifications.removeVehicleModal.title'),
        primaryBtnProps: {
          label: n('notifications.removeVehicleModal.primaryButtonLabel'),
          variant: 'critical',
          onClick: S,
        },
        hasSecondaryBtn: !0,
        secondaryBtnProps: { label: n('notifications.removeVehicleModal.secondaryButtonLabel'), onClick: y },
        hasFooter: !0,
        open: g,
        onClose: y,
        children: e.jsxs(e.Fragment, {
          children: [
            m &&
              e.jsx(U, {
                isOpen: m,
                setIsOpen: v,
                variant: 'inPage',
                type: 'critical',
                description: n('errorsMsg.genericErrMsg'),
              }),
            e.jsx('p', {
              children: e.jsx(pe, {
                i18nKey: 'notifications.removeVehicleModal.message',
                components: { strong: e.jsx('strong', {}) },
                values: { vehicleName: a },
              }),
            }),
          ],
        }),
      })
    );
  };
var ue = {},
  He = {},
  xe = {},
  tt;
function ht() {
  if (tt) return xe;
  (tt = 1), Object.defineProperty(xe, '__esModule', { value: !0 }), (xe.ProfanityOptions = void 0);
  class a {
    constructor() {
      (this.wholeWord = !0), (this.grawlix = '@#$%&!'), (this.grawlixChar = '*');
    }
  }
  return (xe.ProfanityOptions = a), xe;
}
var fe = {},
  Ue = {},
  st;
function Rt() {
  return (
    st ||
      ((st = 1),
      (function (a) {
        Object.defineProperty(a, '__esModule', { value: !0 }),
          (a.CensorType = void 0),
          (function (i) {
            (i[(i.Word = 0)] = 'Word'),
              (i[(i.FirstChar = 1)] = 'FirstChar'),
              (i[(i.FirstVowel = 2)] = 'FirstVowel'),
              (i[(i.AllVowels = 3)] = 'AllVowels');
          })(a.CensorType || (a.CensorType = {}));
      })(Ue)),
    Ue
  );
}
var je = {},
  at;
function _t() {
  if (at) return je;
  (at = 1), Object.defineProperty(je, '__esModule', { value: !0 }), (je.List = void 0);
  class a {
    constructor(g) {
      (this.onListChanged = g), (this.words = []);
    }
    get empty() {
      return !this.words.length;
    }
    removeWords(g) {
      (this.words = this.words.filter((c) => !g.includes(c))), this.onListChanged();
    }
    addWords(g) {
      (this.words = this.words.concat(g)), this.onListChanged();
    }
  }
  return (je.List = a), je;
}
var it;
function Ft() {
  return (
    it ||
      ((it = 1),
      (function (a) {
        var i =
            (fe && fe.__createBinding) ||
            (Object.create
              ? function (c, s, u, d) {
                  d === void 0 && (d = u);
                  var n = Object.getOwnPropertyDescriptor(s, u);
                  (!n || ('get' in n ? !s.__esModule : n.writable || n.configurable)) &&
                    (n = {
                      enumerable: !0,
                      get: function () {
                        return s[u];
                      },
                    }),
                    Object.defineProperty(c, d, n);
                }
              : function (c, s, u, d) {
                  d === void 0 && (d = u), (c[d] = s[u]);
                }),
          g =
            (fe && fe.__exportStar) ||
            function (c, s) {
              for (var u in c) u !== 'default' && !Object.prototype.hasOwnProperty.call(s, u) && i(s, c, u);
            };
        Object.defineProperty(a, '__esModule', { value: !0 }), g(Rt(), a), g(_t(), a);
      })(fe)),
    fe
  );
}
var Ce = {},
  nt;
function qt() {
  if (nt) return Ce;
  (nt = 1), Object.defineProperty(Ce, '__esModule', { value: !0 }), (Ce.escapeRegExp = void 0);
  const a = (i) => i.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (Ce.escapeRegExp = a), Ce;
}
var Pe = {},
  ot;
function Dt() {
  return (
    ot ||
      ((ot = 1),
      Object.defineProperty(Pe, '__esModule', { value: !0 }),
      (Pe.default = [
        '4r5e',
        '5h1t',
        '5hit',
        'a55',
        'anal',
        'anus',
        'ar5e',
        'arrse',
        'arse',
        'arses',
        'ass',
        'ass-fucker',
        'asses',
        'assfucker',
        'assfukka',
        'asshole',
        'assholes',
        'asswhole',
        'a_s_s',
        'a$$',
        'as$',
        'a$s',
        'b!tch',
        'b00bs',
        'b17ch',
        'b1tch',
        'ballbag',
        'balls',
        'ballsack',
        'bastard',
        'beastial',
        'beastiality',
        'bellend',
        'bestial',
        'bestiality',
        'bi+ch',
        'biatch',
        'bitch',
        'bitchboy',
        'bitcher',
        'bitchers',
        'bitches',
        'bitchin',
        'bitching',
        'bloody',
        'blow job',
        'blowjob',
        'blowjobs',
        'boiolas',
        'bollock',
        'bollok',
        'boner',
        'boob',
        'boobs',
        'booobs',
        'boooobs',
        'booooobs',
        'booooooobs',
        'breasts',
        'buceta',
        'bugger',
        'bullshit',
        'bum',
        'butt',
        'butts',
        'butthole',
        'buttmuch',
        'buttplug',
        'c0ck',
        'c0cksucker',
        'carpet muncher',
        'cawk',
        'chink',
        'cipa',
        'cl1t',
        'clit',
        'clitoris',
        'clits',
        'cnut',
        'cock',
        'cock-sucker',
        'cockface',
        'cockhead',
        'cockmunch',
        'cockmuncher',
        'cocks',
        'cocksuck',
        'cocksucked',
        'cocksucker',
        'cocksucking',
        'cocksucks',
        'cocksuka',
        'cocksukka',
        'cok',
        'cokmuncher',
        'coksucka',
        'coon',
        'cox',
        'crap',
        'cum',
        'cummer',
        'cumming',
        'cums',
        'cumshot',
        'cunilingus',
        'cunillingus',
        'cunnilingus',
        'cunt',
        'cuntlick',
        'cuntlicker',
        'cuntlicking',
        'cunts',
        'cyalis',
        'cyberfuc',
        'cyberfuck',
        'cyberfucked',
        'cyberfucker',
        'cyberfuckers',
        'cyberfucking',
        'd1ck',
        'damn',
        'dick',
        'dickhead',
        'dildo',
        'dildos',
        'dink',
        'dinks',
        'dirsa',
        'dlck',
        'dog-fucker',
        'doggin',
        'dogging',
        'donkeyribber',
        'doosh',
        'duche',
        'dyke',
        'ejaculate',
        'ejaculated',
        'ejaculates',
        'ejaculating',
        'ejaculatings',
        'ejaculation',
        'ejakulate',
        'f u c k',
        'f u c k e r',
        'f4nny',
        'fag',
        'fagging',
        'faggitt',
        'faggot',
        'faggs',
        'fagot',
        'fagots',
        'fags',
        'fanny',
        'fannyflaps',
        'fannyfucker',
        'fanyy',
        'fatass',
        'fcuk',
        'fcuker',
        'fcuking',
        'feck',
        'fecker',
        'felching',
        'fellate',
        'fellatio',
        'fingerfuck',
        'fingerfucked',
        'fingerfucker',
        'fingerfuckers',
        'fingerfucking',
        'fingerfucks',
        'fistfuck',
        'fistfucked',
        'fistfucker',
        'fistfuckers',
        'fistfucking',
        'fistfuckings',
        'fistfucks',
        'flange',
        'fook',
        'fooker',
        'fuck',
        'fucka',
        'fucked',
        'fucker',
        'fuckers',
        'fuckhead',
        'fuckheads',
        'fuckin',
        'fucking',
        'fuckings',
        'fuckingshitmotherfucker',
        'fuckme',
        'fucks',
        'fuckwhit',
        'fuckwit',
        'fudge packer',
        'fudgepacker',
        'fuk',
        'fuker',
        'fukker',
        'fukkin',
        'fuks',
        'fukwhit',
        'fukwit',
        'fux',
        'fux0r',
        'f_u_c_k',
        'gangbang',
        'gangbanged',
        'gangbangs',
        'gaylord',
        'gaysex',
        'goatse',
        'god-dam',
        'god-damned',
        'goddamn',
        'goddamned',
        'hardcoresex',
        'headass',
        'hoar',
        'hoare',
        'hoer',
        'hoes',
        'homo',
        'hore',
        'horniest',
        'horny',
        'hotsex',
        'jack-off',
        'jackoff',
        'jap',
        'jerk-off',
        'jism',
        'jiz',
        'jizm',
        'jizz',
        'kawk',
        'knobead',
        'knobed',
        'knobend',
        'knobhead',
        'knobjocky',
        'knobjokey',
        'kock',
        'kondum',
        'kondums',
        'kum',
        'kummer',
        'kumming',
        'kums',
        'kunilingus',
        'l3i+ch',
        'l3itch',
        'labia',
        'lust',
        'lusting',
        'm0f0',
        'm0fo',
        'm45terbate',
        'ma5terb8',
        'ma5terbate',
        'masochist',
        'master-bate',
        'masterb8',
        'masterbat*',
        'masterbat3',
        'masterbate',
        'masterbation',
        'masterbations',
        'masturbate',
        'mo-fo',
        'mof0',
        'mofo',
        'mothafuck',
        'mothafucka',
        'mothafuckas',
        'mothafuckaz',
        'mothafucked',
        'mothafucker',
        'mothafuckers',
        'mothafuckin',
        'mothafucking',
        'mothafuckings',
        'mothafucks',
        'motherfuck',
        'motherfucked',
        'motherfucker',
        'motherfuckers',
        'motherfuckin',
        'motherfucking',
        'motherfuckings',
        'motherfuckka',
        'motherfucks',
        'muff',
        'muthafecker',
        'muthafuckker',
        'mutherfucker',
        'n1gga',
        'n1gger',
        'nazi',
        'nigg3r',
        'nigg4h',
        'nigga',
        'niggah',
        'niggas',
        'niggaz',
        'nigger',
        'niggers',
        'nob',
        'nob jokey',
        'nobhead',
        'nobjocky',
        'nobjokey',
        'numbnuts',
        'nutsack',
        'orgasim',
        'orgasims',
        'orgasm',
        'orgasms',
        'p0rn',
        'pawn',
        'pecker',
        'penis',
        'penisfucker',
        'phonesex',
        'phuck',
        'phuk',
        'phuked',
        'phuking',
        'phukked',
        'phukking',
        'phuks',
        'phuq',
        'pigfucker',
        'pimpis',
        'piss',
        'pissed',
        'pisser',
        'pissers',
        'pisses',
        'pissflaps',
        'pissin',
        'pissing',
        'pissoff',
        'poop',
        'porn',
        'porno',
        'pornography',
        'pornos',
        'prick',
        'pricks',
        'pron',
        'pube',
        'pusse',
        'pussi',
        'pussies',
        'pussy',
        'pussys',
        'rectum',
        'retard',
        'rimjaw',
        'rimming',
        's hit',
        's.o.b.',
        'sadist',
        'schlong',
        'screwing',
        'scroat',
        'scrote',
        'scrotum',
        'semen',
        'sex',
        'sh!+',
        'sh!t',
        'sh1t',
        'shag',
        'shagger',
        'shaggin',
        'shagging',
        'shemale',
        'shi+',
        'shit',
        'shitdick',
        'shite',
        'shited',
        'shitey',
        'shitfuck',
        'shitfull',
        'shithead',
        'shiting',
        'shitings',
        'shits',
        'shitted',
        'shitter',
        'shitters',
        'shitting',
        'shittings',
        'shitty',
        'skank',
        'slut',
        'sluts',
        'smegma',
        'smut',
        'snatch',
        'son-of-a-bitch',
        'spac',
        'spunk',
        's_h_i_t',
        't1tt1e5',
        't1tties',
        'teets',
        'teez',
        'testical',
        'testicle',
        'tit',
        'titfuck',
        'tits',
        'titt',
        'tittie5',
        'tittiefucker',
        'titties',
        'tittyfuck',
        'tittywank',
        'titwank',
        'tosser',
        'turd',
        'tw4t',
        'twat',
        'twathead',
        'twatty',
        'twunt',
        'twunter',
        'v14gra',
        'v1gra',
        'vagina',
        'viagra',
        'vulva',
        'w00se',
        'wang',
        'wank',
        'wanker',
        'wanky',
        'whoar',
        'whore',
        'willies',
        'willy',
      ])),
    Pe
  );
}
var rt;
function Ht() {
  return (
    rt ||
      ((rt = 1),
      (function (a) {
        Object.defineProperty(a, '__esModule', { value: !0 }), (a.profanity = a.Profanity = void 0);
        const i = ht(),
          g = Ft(),
          c = qt(),
          s = Dt();
        class u {
          constructor(n) {
            (this.options = n || new i.ProfanityOptions()),
              (this.whitelist = new g.List(() => this.buildRegex())),
              (this.blacklist = new g.List(() => this.buildRegex())),
              this.blacklist.addWords(s.default);
          }
          exists(n) {
            return (this.regex.lastIndex = 0), this.regex.test(n);
          }
          censor(n, N = g.CensorType.Word) {
            switch (N) {
              case g.CensorType.Word:
                return n.replace(this.regex, this.options.grawlix);
              case g.CensorType.FirstChar: {
                let m = n;
                return (
                  Array.from(n.matchAll(this.regex)).forEach((v) => {
                    const y = v[0],
                      S = this.options.grawlixChar + y.slice(1, y.length);
                    m = m.replace(y, S);
                  }),
                  m
                );
              }
              case g.CensorType.FirstVowel:
              case g.CensorType.AllVowels: {
                const m = new RegExp('[aeiou]', N === g.CensorType.FirstVowel ? 'i' : 'ig');
                let v = n;
                return (
                  Array.from(n.matchAll(this.regex)).forEach((y) => {
                    const S = y[0],
                      k = S.replace(m, this.options.grawlixChar);
                    v = v.replace(S, k);
                  }),
                  v
                );
              }
              default:
                throw new Error(`Invalid replacement type: "${N}"`);
            }
          }
          addWords(n) {
            this.blacklist.addWords(n);
          }
          removeWords(n) {
            this.blacklist.removeWords(n);
          }
          buildRegex() {
            const n = this.blacklist.words.map(c.escapeRegExp),
              N = this.whitelist.words.map(c.escapeRegExp),
              m = `${this.options.wholeWord ? '\\b' : ''}(${n.join('|')})${this.options.wholeWord ? '\\b' : ''}`,
              v = this.whitelist.empty ? '' : `(?!${N.join('|')})`;
            this.regex = new RegExp(v + m, 'ig');
          }
        }
        (a.Profanity = u), (a.profanity = new u()), (a.default = a.profanity);
      })(He)),
    He
  );
}
var lt;
function Ut() {
  return (
    lt ||
      ((lt = 1),
      (function (a) {
        var i =
            (ue && ue.__createBinding) ||
            (Object.create
              ? function (c, s, u, d) {
                  d === void 0 && (d = u);
                  var n = Object.getOwnPropertyDescriptor(s, u);
                  (!n || ('get' in n ? !s.__esModule : n.writable || n.configurable)) &&
                    (n = {
                      enumerable: !0,
                      get: function () {
                        return s[u];
                      },
                    }),
                    Object.defineProperty(c, d, n);
                }
              : function (c, s, u, d) {
                  d === void 0 && (d = u), (c[d] = s[u]);
                }),
          g =
            (ue && ue.__exportStar) ||
            function (c, s) {
              for (var u in c) u !== 'default' && !Object.prototype.hasOwnProperty.call(s, u) && i(s, c, u);
            };
        Object.defineProperty(a, '__esModule', { value: !0 }), g(Ht(), a), g(ht(), a);
      })(ue)),
    ue
  );
}
var gt = Ut();
const $t = ({
    typeAction: a,
    description: i,
    vehicle: g,
    isCustomNameModalOpen: c,
    setIsCustomNameModalOpen: s,
    setEditedCustomNameSuccessMsg: u,
    setAddedCustomNameSuccessMsg: d,
    getVehicleName: n,
    setRefreshData: N,
  }) => {
    const { t: m } = he(),
      { getSession: v } = ve(),
      [y] = Re(['session', 'language']),
      { vin: S, plate: k, expiryDate: o, vehicleId: r, customName: M } = g,
      l = M && a === 'edit' ? M : '',
      [p, f] = t.useState(''),
      [h, x] = t.useState(!1),
      [b, E] = t.useState(!1),
      [C, A] = t.useState(!1),
      [F, R] = t.useState(''),
      [L, V] = t.useState(!0),
      [O, z] = t.useState(!1);
    t.useEffect(() => {
      R(l);
    }, [l]),
      t.useEffect(() => {
        const P = (B) => {
          const ne = B.key;
          ne === 'Escape' && C ? (x(!0), s(!0)) : ne === 'Escape' && !C && $();
        };
        return (
          c && window.addEventListener('keydown', P),
          () => {
            window.removeEventListener('keydown', P);
          }
        );
      }, [c, C]);
    const $ = () => {
        s(!1), R(l), E(!1), V(!0), z(!1), f('');
      },
      q = () => {
        b ? x(!0) : (s(!1), R(l), z(!1), f(''));
      },
      Z = () => {
        u(!1),
          d(!1),
          z(!1),
          gt.profanity.exists(F)
            ? f('profanity')
            : Le(F)
            ? (f(''),
              K.updateAVehicle({
                session: { token: v() },
                vehicle: { vehicleId: r, plate: k, vin: S, customName: F.trim(), expiryDate: o },
              })
                .then(() => {
                  n(F.trim()), a === 'add' ? d(!0) : u(!0), N(!0), $();
                })
                .catch((B) => {
                  z(!0), console.error(B);
                }))
            : f('invalid-custom-name');
      },
      ee = () => {
        $();
      },
      G = (P) => {
        P.target.value !== l ? (E(!0), (!p || (p && Le(P.target.value))) && V(!1)) : (E(!1), V(!1)), R(P.target.value);
      },
      te = (P) => {
        const B = P.key;
        B !== 'Escape' && b ? A(!0) : B !== 'Escape' && !b && A(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(be, {
          id: `${a === 'add' ? 'add' : 'edit'}-custom-name-modal-${r}`,
          title: m(
            a === 'add' ? 'notifications.customNameModal.add.title' : 'notifications.customNameModal.edit.title'
          ),
          hasFooter: !0,
          primaryBtnProps: {
            label: m(
              a === 'add'
                ? 'notifications.customNameModal.add.primaryButtonLabel'
                : 'notifications.customNameModal.edit.primaryButtonLabelModal'
            ),
            onClick: Z,
            disabled: L,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: m('notifications.customNameModal.secondaryButtonLabel'), onClick: q },
          open: c,
          onClose: q,
          children: e.jsxs(e.Fragment, {
            children: [
              O &&
                e.jsx(U, {
                  isOpen: O,
                  setIsOpen: z,
                  variant: 'inPage',
                  type: 'critical',
                  description: m('errorsMsg.genericErrMsg'),
                }),
              e.jsxs('p', {
                children: [
                  e.jsxs('strong', { children: [m('notifications.vehicleInfo.name'), ':'] }),
                  ` ${i}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [m('notifications.vehicleInfo.vin'), ':'] }),
                  ` ${$e(S)}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [m('notifications.vehicleInfo.licence'), ':'] }),
                  ` ${k}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [m('notifications.vehicleInfo.date'), ':'] }),
                  We(o, Ke, y.language),
                ],
              }),
              e.jsx(de, {
                type: 'text',
                label: m(
                  a === 'add'
                    ? 'notifications.vehicleInfo.addCustomLabelInput'
                    : 'notifications.vehicleInfo.editCustomLabelInput'
                ),
                helperText: m('notifications.vehicleInfo.helperText'),
                id: 'custom-name',
                value: F,
                onChange: G,
                error: p ? ut(p, m('errorsMsg.customNameWithProfanity'), m('errorsMsg.invalidCustomName')) : '',
                maxlength: It,
                onKeyUp: te,
              }),
            ],
          }),
        }),
        e.jsx(_e, { isOpen: h, setIsOpen: x, handleDiscardFormChanges: ee }),
      ],
    });
  },
  Wt = ({
    vehicle: a,
    setEditedCustomNameSuccessMsg: i,
    setAddedCustomNameSuccessMsg: g,
    setRemovedVehicleSuccessMsg: c,
    getVehicleName: s,
    setRefreshData: u,
  }) => {
    const { t: d } = he(),
      [n] = Re(['language']),
      [N, m] = t.useState(!1),
      [v, y] = t.useState(!1),
      { colour: S, customName: k, expiryDate: o, make: r, model: M, plate: l, vin: p, year: f, vehicleId: h } = a,
      x = S && f && r && M,
      b = ze(S, f, r, M),
      E = Et(S, f, r, M, k),
      C = (R = 'default') => {
        let L;
        return x ? (L = k ? (R === 'fullCustomName' ? E : k) : b) : (L = l), L;
      },
      A = () => {
        y(!0);
      },
      F = x ? {} : { className: 'custom-disabled' };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs('li', {
          className: 'gnb-accordion-container',
          children: [
            e.jsx('div', { className: 'gnb-accordion-heading', children: e.jsx('h3', { children: C() }) }),
            e.jsxs('div', {
              className: 'left gnb-accordion-panel',
              children: [
                !x && e.jsxs('p', { children: [e.jsx(Ct, { icon: St }), ' ', d('warningMsg.unavailableVehicle')] }),
                e.jsxs('p', {
                  ...F,
                  children: [
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [d('notifications.vehicleInfo.name'), ':'] }),
                        ` ${x ? b : '-'}`,
                      ],
                    }),
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [d('notifications.vehicleInfo.vin'), ':'] }),
                        ` ${$e(p)}`,
                      ],
                    }),
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [d('notifications.vehicleInfo.licence'), ':'] }),
                        ` ${l}`,
                      ],
                    }),
                    e.jsxs('strong', { children: [d('notifications.vehicleInfo.date'), ':'] }),
                    We(o, Ke, n.language),
                  ],
                }),
                e.jsxs('div', {
                  children: [
                    e.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: e.jsx(Se, {
                        label: d(
                          k
                            ? 'notifications.customNameModal.edit.primaryButtonLabelAccordion'
                            : 'notifications.customNameModal.add.primaryButtonLabel'
                        ),
                        variant: 'secondary',
                        leftIcon: Mt,
                        size: 'small',
                        onClick: () => m(!0),
                        disabled: !x,
                      }),
                    }),
                    e.jsx(Se, {
                      label: d('notifications.removeVehicleModal.primaryButtonLabel'),
                      variant: 'critical secondary',
                      leftIcon: wt,
                      size: 'small',
                      onClick: A,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx($t, {
          typeAction: k ? 'edit' : 'add',
          description: b,
          vehicle: a,
          isCustomNameModalOpen: N,
          setIsCustomNameModalOpen: m,
          setEditedCustomNameSuccessMsg: i,
          setAddedCustomNameSuccessMsg: g,
          getVehicleName: s,
          setRefreshData: u,
        }),
        e.jsx(Tt, {
          vehicleName: C('fullCustomName'),
          id: h,
          isOpen: v,
          setIsOpen: y,
          setRemovedVehicleSuccessMsg: c,
          getVehicleName: s,
          setRefreshData: u,
        }),
      ],
    });
  },
  Kt = ({
    vehicleInfoList: a,
    setEditedCustomNameSuccessMsg: i,
    setAddedCustomNameSuccessMsg: g,
    setRemovedVehicleSuccessMsg: c,
    getVehicleName: s,
    setRefreshData: u,
  }) => (
    t.useEffect(() => {
      const d = a.map((n) => {
        let N;
        const { colour: m, customName: v, make: y, model: S, year: k, plate: o } = n,
          r = ze(m, k, y, S);
        return m && k && y && S ? (N = v || r) : (N = o), N;
      });
      Bt(window, document, void 0, d);
    }),
    e.jsx('div', {
      className: 'gnb-accordion-pane',
      children: e.jsx('ol', {
        className: 'gnb-accordion-cards',
        'data-aria-accordion': !0,
        'data-multi': !0,
        children: a.map((d) =>
          e.jsx(
            Wt,
            {
              vehicle: d,
              setEditedCustomNameSuccessMsg: i,
              setAddedCustomNameSuccessMsg: g,
              setRemovedVehicleSuccessMsg: c,
              getVehicleName: s,
              setRefreshData: u,
            },
            d.vehicleId
          )
        ),
      }),
    })
  ),
  zt = ({ label: a, placeholder: i, maxlength: g, onChange: c, className: s, value: u }) =>
    e.jsxs('div', {
      children: [
        e.jsx('label', { className: 'left', htmlFor: a, children: a }),
        e.jsx('textarea', { className: s, name: a, id: a, value: u, placeholder: i, maxLength: g, onChange: c }),
      ],
    }),
  me = '/etc/designs/spa/snb-vrrr-fe/clientlibs/',
  Gt = ({ isFeedbackModalOpen: a, setIsFeedbackModalOpen: i, setFeedbackModalSuccess: g, scrollToTop: c }) => {
    const { t: s } = he(),
      { getSession: u } = ve(),
      [d, n] = t.useState(0),
      [N, m] = t.useState(!1),
      [v, y] = t.useState(!1),
      [S, k] = t.useState(0),
      [o, r] = t.useState(''),
      [M, l] = t.useState('');
    t.useEffect(() => {
      K.getAccountDetails({ params: { session: u() } })
        .then((C) => {
          l(C.data.account.accountId);
        })
        .catch((C) => {
          console.log(C);
        });
    }, []),
      t.useEffect(() => {
        const C = (A) => {
          A.key === 'Escape' && f();
        };
        return (
          a && window.addEventListener('keydown', C),
          () => {
            window.removeEventListener('keydown', C);
          }
        );
      }, [a]);
    const p = (C) => {
        K.submitFeedback({
          session: { token: u() },
          feedback: { feedbackId: '', feedbackRating: 0, feedbackComments: '', isFeedbackSkipped: !0, accountId: M },
        })
          .then(() => {
            C === 'discarded' && y(!1), i(!1), r(''), k(0);
          })
          .catch((A) => {
            console.log(A);
          });
      },
      f = () => {
        p('closed');
      },
      h = () => {
        g(!1),
          K.submitFeedback({
            session: { token: u() },
            feedback: { feedbackId: '', feedbackRating: S, feedbackComments: o, isFeedbackSkipped: !1, accountId: M },
          })
            .then(() => {
              v && (g(!0), c()), i(!1), k(0);
            })
            .catch((C) => {
              console.log(C);
            });
      },
      x = (C) => {
        C.target.value ? y(!0) : y(!1), n(C.target.value.length), r(C.target.value);
      },
      b = (C) => {
        C && y(!0), k(C);
      },
      E = () => {
        p('discarded');
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(be, {
          id: 'feedbackModal',
          title: s('notifications.feedbackModal.title'),
          primaryBtnProps: { label: s('notifications.feedbackModal.primaryButton'), onClick: h, disabled: !S },
          linkBtnProps: { label: s('notifications.feedbackModal.tertiaryButton'), onClick: f },
          hasLinkBtn: !0,
          hasFooter: !0,
          open: a,
          onClose: f,
          children: e.jsxs('form', {
            children: [
              e.jsxs('p', {
                children: [
                  s('notifications.feedbackModal.description'),
                  e.jsx('span', { className: 'required', children: '*' }),
                  e.jsx('span', { className: 'sr-only', children: 'required' }),
                ],
              }),
              e.jsxs('fieldset', {
                className: 'feedback-fieldset',
                children: [
                  e.jsx('legend', { className: 'sr-only', children: s('notifications.feedbackModal.description') }),
                  e.jsxs('div', {
                    className: 'img-section',
                    children: [
                      e.jsx('input', {
                        id: s('notifications.feedbackModal.dissatisfiedReaction'),
                        type: 'radio',
                        value: s('notifications.feedbackModal.dissatisfiedReaction'),
                        className: 'sr-only',
                        onClick: () => b(1),
                      }),
                      e.jsxs('label', {
                        htmlFor: s('notifications.feedbackModal.dissatisfiedReaction'),
                        children: [
                          e.jsx('span', {
                            className: 'sr-only',
                            'aria-describedby': s('notifications.feedbackModal.dissatisfiedReaction'),
                            children: s('notifications.feedbackModal.dissatisfiedReaction'),
                          }),
                          S == 1
                            ? e.jsx('img', {
                                src: me + 'images/face-tired-filled.svg',
                                alt: s('notifications.feedbackModal.dissatisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: me + 'images/face-tired.svg',
                                alt: s('notifications.feedbackModal.dissatisfiedReaction'),
                              }),
                        ],
                      }),
                      e.jsx('input', {
                        id: s('notifications.feedbackModal.neutralReaction'),
                        type: 'radio',
                        value: s('notifications.feedbackModal.neutralReaction'),
                        className: 'sr-only',
                        onClick: () => b(2),
                      }),
                      e.jsxs('label', {
                        htmlFor: s('notifications.feedbackModal.neutralReaction'),
                        children: [
                          e.jsx('span', {
                            className: 'sr-only',
                            'aria-describedby': s('notifications.feedbackModal.neutralReaction'),
                            children: s('notifications.feedbackModal.neutralReaction'),
                          }),
                          S == 2
                            ? e.jsx('img', {
                                src: me + 'images/face-meh-filled.svg',
                                alt: s('notifications.feedbackModal.neutralReaction'),
                              })
                            : e.jsx('img', {
                                src: me + 'images/face-meh.svg',
                                alt: s('notifications.feedbackModal.neutralReaction'),
                              }),
                        ],
                      }),
                      e.jsx('input', {
                        id: s('notifications.feedbackModal.satisfiedReaction'),
                        type: 'radio',
                        value: s('notifications.feedbackModal.satisfiedReaction'),
                        className: 'sr-only',
                        onClick: () => b(3),
                      }),
                      e.jsxs('label', {
                        htmlFor: s('notifications.feedbackModal.satisfiedReaction'),
                        children: [
                          e.jsx('span', {
                            className: 'sr-only',
                            'aria-describedby': s('notifications.feedbackModal.satisfiedReaction'),
                            children: s('notifications.feedbackModal.satisfiedReaction'),
                          }),
                          S == 3
                            ? e.jsx('img', {
                                src: me + 'images/face-heart-filled.svg',
                                alt: s('notifications.feedbackModal.satisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: me + 'images/face-grin-hearts.svg',
                                alt: s('notifications.feedbackModal.satisfiedReaction'),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(zt, {
                className: 'feedback-text-area',
                label: s('notifications.feedbackModal.textAreaLabel'),
                placeholder: s('notifications.feedbackModal.textAreaPlaceHolder'),
                maxlength: 200,
                value: o,
                onChange: x,
              }),
              e.jsxs('div', { className: 'counter', children: [d, '/200'] }),
            ],
          }),
        }),
        N && e.jsx(_e, { isOpen: N, setIsOpen: m, handleDiscardFormChanges: E }),
      ],
    });
  },
  ct = ({ checkboxOptions: a, disabledArray: i, onChange: g }) => {
    if (i)
      for (let c = 0; c < i.length; c++) {
        const s = i[c];
        a[c].disabled = s;
      }
    return a.map((c) => {
      const { id: s, label: u, isSelected: d, disabled: n } = c;
      return e.jsx(Lt, { id: s, label: u, selected: d, disabled: n, onChange: g }, s);
    });
  },
  mt = ({ listContent: a }) =>
    e.jsx('ul', { children: a.map((i, g) => e.jsx('li', { children: e.jsx('p', { children: i.item }) }, g)) }),
  Jt = ({
    isAddVehicleOpen: a,
    setIsAddVehicleOpen: i,
    setAddedVehicleSuccessMsg: g,
    getVehicleName: c,
    vehicleInfoList: s,
    setRefreshData: u,
    setFirstVehicleAdded: d,
  }) => {
    const { t: n } = he(),
      N = dt(),
      { getSession: m } = ve(),
      [v] = Re(['session', 'language']),
      y = v.language,
      [S, k] = t.useState({
        bodyType: '',
        colour: '',
        customName: '',
        expiryDate: '',
        make: '',
        model: '',
        plate: '',
        vehicleId: '',
        vin: '',
        year: '',
      }),
      [o, r] = t.useState(''),
      [M, l] = t.useState(!1),
      [p, f] = t.useState(!1),
      [h, x] = t.useState(!1),
      [b, E] = t.useState(!1),
      [C, A] = t.useState(!1),
      [F, R] = t.useState(!0),
      [L, V] = t.useState(''),
      [O, z] = t.useState(''),
      [$, q] = t.useState(!1),
      [Z, ee] = t.useState(!1),
      [G, te] = t.useState(!1),
      [P, B] = t.useState(!1),
      [ne, se] = t.useState(!1),
      [ce, X] = t.useState(!1),
      [oe, H] = t.useState(!1),
      [ae, Y] = t.useState(!1),
      [D, re] = t.useState(''),
      [J, ie] = t.useState(!1),
      [w, I] = t.useState(''),
      [le, Q] = t.useState(!0);
    t.useEffect(() => {
      R(!(L && O)), Q(!D);
    }, [L, O, D]),
      t.useEffect(() => {
        o.length > 0 &&
          (f(!0),
          K.getAVehicle(o, { params: { session: m(), lang: y } })
            .then((j) => {
              k(j.data.vehicles), f(!1), H(!1), Y(!0);
            })
            .catch((j) => {
              H(!1), j.response?.status === 403 && N('/authentication');
            }));
      }, [o]),
      t.useEffect(() => {
        S.vehicleId.length > 0 && (Y(!0), i(!1));
      }, [S]),
      t.useEffect(() => {
        const j = (_) => {
          _.key === 'Escape' && (h ? i(!0) : Z ? (l(!0), i(!0)) : (i(!1), W()));
        };
        return (
          a && (h || !h) && window.addEventListener('keydown', j),
          () => {
            window.removeEventListener('keydown', j);
          }
        );
      }, [a, h, Z]),
      t.useEffect(() => {
        const j = (_) => {
          const De = _.key;
          De === 'Escape' && G ? (l(!0), Y(!0)) : De === 'Escape' && !G && (Y(!1), W());
        };
        return (
          ae && window.addEventListener('keydown', j),
          () => {
            window.removeEventListener('keydown', j);
          }
        );
      }, [ae, G]);
    const W = () => {
        V(''),
          z(''),
          r(''),
          R(!0),
          q(!1),
          B(!1),
          se(!1),
          X(!1),
          E(!1),
          re(''),
          ie(!1),
          I(''),
          Q(!0),
          u(!0),
          A(!1),
          ee(!1),
          te(!1);
      },
      Me = (j) => s.some((_) => j.trim().toLowerCase() === _.plate.trim().toLowerCase()),
      Fe = () => {
        L &&
          O &&
          (B(!Be(L)),
          se(!Te(O)),
          E(Me(O)),
          X(!1),
          Be(L) &&
            Te(O) &&
            !Me(O) &&
            (H(!0),
            B(!1),
            se(!1),
            K.addAVehicle({ session: { token: m() }, vehicle: { plate: O, vin: L }, lang: y })
              .then((j) => {
                r(j.data.vehicleId), q(!1), E(!1), R(!1), H(!1);
              })
              .catch((j) => {
                H(!1), j.response.status === 404 ? (X(!0), R(!0)) : (A(!0), console.error(j));
              })));
      },
      qe = () => {
        const j = gt.profanity.exists(D);
        D && j
          ? I('profanity')
          : Le(D)
          ? !j &&
            Le(D) &&
            S &&
            (I(''),
            H(!0),
            K.updateAVehicle({
              session: { token: m() },
              vehicle: { vehicleId: o, plate: O, vin: L, customName: D.trim() },
            })
              .then(() => {
                H(!1), Y(!1), c(D.trim()), g(!0), s.length === 0 && d(!0), R(!0), q(!1), W();
              })
              .catch((_) => {
                H(!1), A(!0), console.error(_);
              }))
          : I('invalid-custom-name');
      },
      ke = (j) => {
        g(!1), q(!!j);
      },
      we = () => {
        $ || L || O ? l(!0) : (i(!1), W(), H(!1));
      },
      Ne = (j) => {
        const _ = ft(j.target.value);
        ke(_), V(_);
      },
      T = (j) => {
        ke(j.target.value), z(j.target.value);
      },
      ge = () => {
        let j;
        return ne ? (j = n('errorsMsg.invalidLicence')) : ce ? (j = n('errorsMsg.nonregisteredLicence')) : (j = ''), j;
      },
      Ie = (j) => {
        Ee(j.target.value), re(j.target.value);
      },
      Ee = (j) => {
        const _ = j.length > 0;
        ie(_);
      },
      { colour: Oe, make: ye, model: pt, year: bt, vin: vt, plate: kt, expiryDate: yt } = S,
      Ge = ze(Oe, bt, ye, pt),
      Je = () => {
        c(Ge);
      },
      Qe = () => {
        J ? l(!0) : (Je(), Y(!1), W(), H(!1), g(!0), s.length === 0 && d(!0));
      },
      xt = () => {
        i(!1), Y(!1), W(), H(!1), ae && !a && (g(!0), s.length === 0 && d(!0), Je());
      },
      Xe = (j) => {
        const _ = j.key;
        _ !== 'Escape' && ($ || L || O) ? ee(!0) : _ !== 'Escape' && !$ && ee(!1);
      },
      jt = (j) => {
        const _ = j.key;
        _ !== 'Escape' && J ? te(!0) : _ !== 'Escape' && !J && te(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(be, {
          id: 'add-vehicle-modal',
          title: n('notifications.addVehicleModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: n('notifications.addVehicleModal.primaryButton.add'),
            onClick: Fe,
            disabled: F || oe,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: n('notifications.addVehicleModal.secondaryButton'), onClick: we },
          open: a && !ae,
          onClose: we,
          children:
            oe || p
              ? e.jsx(Ve, { inModal: !0, size: 'lg' })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx('p', { children: n('notifications.addVehicleModal.form.title') }),
                    b &&
                      e.jsx(U, {
                        isOpen: b,
                        setIsOpen: E,
                        variant: 'inPage',
                        type: 'critical',
                        description: n('errorsMsg.duplicatedVehicle'),
                      }),
                    C &&
                      e.jsx(U, {
                        isOpen: C,
                        setIsOpen: A,
                        variant: 'inPage',
                        type: 'critical',
                        description: n('errorsMsg.genericErrMsg'),
                      }),
                    e.jsx(de, {
                      type: 'text',
                      label: n('notifications.addVehicleModal.form.vinLabelInput'),
                      id: 'vin',
                      required: !0,
                      value: L,
                      maxlength: 6,
                      onChange: Ne,
                      error: P ? n('errorsMsg.invalidVin') : '',
                      hasTooltipModal: !0,
                      tooltipBody: e.jsx(mt, {
                        listContent: n('notifications.tooltip.vin.listOne', { returnObjects: !0 }),
                      }),
                      tooltipTitle: n('notifications.tooltip.vin.title'),
                      isTooltipModalOpen: h,
                      setIsTooltipModalOpen: x,
                      onKeyUp: Xe,
                    }),
                    e.jsx(de, {
                      type: 'text',
                      label: n('notifications.addVehicleModal.form.licenceLabelInput'),
                      id: 'licence-plate',
                      required: !0,
                      value: O,
                      onChange: T,
                      error: ge(),
                      onKeyUp: Xe,
                    }),
                  ],
                }),
        }),
        e.jsx(be, {
          id: 'add-custom-name-modal',
          title: n('notifications.addVehicleModal.customName.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: n('notifications.addVehicleModal.primaryButton.save'),
            onClick: qe,
            disabled: le || oe,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: n('notifications.addVehicleModal.customName.skip'), onClick: Qe },
          open: ae && !a,
          onClose: Qe,
          children: oe
            ? e.jsx(Ve, { inModal: !0, size: 'lg' })
            : e.jsxs(e.Fragment, {
                children: [
                  C &&
                    e.jsx(U, {
                      isOpen: C,
                      setIsOpen: A,
                      variant: 'inPage',
                      type: 'critical',
                      description: n('errorsMsg.genericErrMsg'),
                    }),
                  e.jsxs('p', {
                    children: [
                      e.jsxs('strong', { children: [n('notifications.vehicleInfo.name'), ':'] }),
                      ` ${Ge}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [n('notifications.vehicleInfo.vin'), ':'] }),
                      ` ${$e(vt)}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [n('notifications.vehicleInfo.licence'), ':'] }),
                      ` ${kt}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [n('notifications.vehicleInfo.date'), ':'] }),
                      We(yt, Ke, y),
                    ],
                  }),
                  e.jsx(de, {
                    type: 'text',
                    label: n('notifications.vehicleInfo.addCustomLabelInput'),
                    helperText: n('notifications.vehicleInfo.helperText'),
                    id: 'custom-name',
                    value: D,
                    onChange: Ie,
                    error: w ? ut(w, n('errorsMsg.customNameWithProfanity'), n('errorsMsg.invalidCustomName')) : '',
                    onKeyUp: jt,
                  }),
                ],
              }),
        }),
        e.jsx(_e, { isOpen: M, setIsOpen: l, handleDiscardFormChanges: xt }),
      ],
    });
  },
  Qt = ({ isOptOutPaperModalOpen: a, setIsOptOutPaperModalOpen: i, setStopPaperSuccessMsg: g }) => {
    const { t: c } = he(),
      { getSession: s } = ve(),
      [u, d] = t.useState(!1),
      [n, N] = t.useState(!1),
      [m, v] = t.useState(!1),
      [y, S] = t.useState(!1),
      [k, o] = t.useState(''),
      [r, M] = t.useState(''),
      [l, p] = t.useState(''),
      [f, h] = t.useState(''),
      [x, b] = t.useState(!0),
      [E, C] = t.useState(!1),
      [A, F] = t.useState(!1),
      [R, L] = t.useState(''),
      [V, O] = t.useState({ invalidVin: !1, invalidLicencePlate: !1, invalidGivenNames: !1, invalidLastName: !1 }),
      [z, $] = t.useState(!1),
      [q, Z] = t.useState(!1),
      [ee, G] = t.useState(!1),
      [te, P] = t.useState(!1);
    t.useEffect(() => {
      const w = (I) => {
        I.key === 'Escape' && (u ? i(!0) : y ? (N(!0), i(!0)) : B());
      };
      return (
        a && (u || !u) && window.addEventListener('keydown', w),
        () => {
          window.removeEventListener('keydown', w);
        }
      );
    }, [a, u, y]),
      t.useEffect(() => {
        (() => {
          K.getAccountDetails({ params: { session: s() } })
            .then((I) => {
              const le = I?.data?.account?.email;
              L(le);
            })
            .catch((I) => {
              console.error(I);
            });
        })();
      }, [R]),
      t.useEffect(() => {
        X();
      }, [l, f, k, V, r]);
    const B = () => {
        o(''),
          M(''),
          p(''),
          O({ invalidLicencePlate: !1, invalidVin: !1, invalidGivenNames: !1, invalidLastName: !1 }),
          h(''),
          Z(!1),
          b(!0),
          i(!1),
          v(!1),
          C(!1),
          F(!1),
          G(!1),
          P(!1),
          S(!1);
      },
      ne = () => {
        m || k || r || l || f ? N(!0) : B();
      },
      se = () => {
        g(!1);
        const w = f && Te(f),
          I = l && Be(l),
          le = k && Ae(k),
          Q = r && Ae(r);
        O({ invalidLicencePlate: !w, invalidVin: !I, invalidGivenNames: !le, invalidLastName: !Q }),
          Z(!0),
          G(!1),
          P(!1),
          k &&
            r &&
            l &&
            f &&
            I &&
            w &&
            le &&
            Q &&
            ($(!0),
            K.stopPaperReminders({ session: { token: s() }, givenNames: k, lastName: r, vin: l, plate: f, email: R })
              .then(() => {
                i(!1), g(!0), B(), $(!1);
              })
              .catch((W) => {
                console.error(W), $(!1), W.response.status === 400 && P(!0), W.response.status === 500 && G(!0);
              }));
      },
      ce = (w) => {
        v(!!w);
      },
      X = () => {
        const w = k && r && l && f,
          I = !V.invalidLicencePlate && !V.invalidVin && !V.invalidGivenNames && !V.invalidLastName;
        b(q ? !(w && I) : !w);
      },
      oe = () => {
        C(!0), F(!1);
      },
      H = () => {
        C(!1), F(!0);
      },
      ae = (w) => {
        o(w.target.value), q && O({ ...V, invalidGivenNames: !Ae(w.target.value) }), ce(w.target.value);
      },
      Y = (w) => {
        M(w.target.value), q && O({ ...V, invalidLastName: !Ae(w.target.value) }), ce(w.target.value);
      },
      D = (w) => {
        const I = ft(w.target.value);
        p(I), q && O({ ...V, invalidVin: !Be(I) }), ce(I);
      },
      re = (w) => {
        h(w.target.value), q && O({ ...V, invalidLicencePlate: !Te(w.target.value) }), ce(w.target.value);
      },
      J = (w) => {
        const I = w.key;
        I !== 'Escape' && (m || k || r || l || f) ? S(!0) : I !== 'Escape' && !m && S(!1);
      },
      ie = () => {
        i(!1), B();
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(be, {
          id: 'opt-out-of-paper-modal',
          title: c('notifications.optOutPaperModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: c('notifications.optOutPaperModal.primaryButtonLabel'),
            onClick: se,
            disabled: x || z,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: c('notifications.optOutPaperModal.secondaryButtonLabel'), onClick: ne },
          open: a,
          onClose: ne,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx('p', { children: c('notifications.optOutPaperModal.form.descriptionOne') }),
              e.jsx('p', { children: c('notifications.optOutPaperModal.form.descriptionTwo') }),
              ee &&
                e.jsx(U, {
                  isOpen: ee,
                  setIsOpen: G,
                  variant: 'inPage',
                  type: 'critical',
                  description: c('errorsMsg.genericErrMsg'),
                }),
              te &&
                e.jsx(U, {
                  isOpen: te,
                  setIsOpen: P,
                  variant: 'inPage',
                  type: 'critical',
                  description: c('errorsMsg.gBizFailErrorMsg'),
                }),
              e.jsx(de, {
                type: 'text',
                label: c('notifications.optOutPaperModal.form.givenNames.label'),
                id: 'given-name',
                required: !0,
                value: k,
                onChange: ae,
                maxlength: Ye,
                error: (E || A) && V.invalidGivenNames ? c('errorsMsg.invalidGivenNames') : '',
                onKeyUp: J,
              }),
              e.jsx(de, {
                type: 'text',
                label: c('notifications.optOutPaperModal.form.lastName.label'),
                id: 'last-name',
                required: !0,
                value: r,
                onChange: Y,
                maxlength: Ye,
                error: (E || A) && V.invalidLastName ? c('errorsMsg.invalidLastName') : '',
                onKeyUp: J,
              }),
              e.jsx(de, {
                type: 'text',
                label: c('notifications.optOutPaperModal.form.vin.label'),
                id: 'vin-number',
                required: !0,
                value: l,
                maxlength: 6,
                onChange: D,
                error: (E || A) && V.invalidVin ? c('errorsMsg.invalidVin') : '',
                hasTooltipModal: !0,
                tooltipBody: e.jsx(mt, { listContent: c('notifications.tooltip.vin.listOne', { returnObjects: !0 }) }),
                tooltipTitle: c('notifications.tooltip.vin.title'),
                isTooltipModalOpen: u,
                setIsTooltipModalOpen: d,
                onFocus: oe,
                onBlur: H,
                onKeyUp: J,
              }),
              e.jsx(de, {
                type: 'text',
                label: c('notifications.optOutPaperModal.form.licence.label'),
                id: 'licence-plate',
                required: !0,
                value: f,
                onChange: re,
                error: (E || A) && V.invalidLicencePlate ? c('errorsMsg.invalidLicence') : '',
                onFocus: oe,
                onBlur: H,
                onKeyUp: J,
              }),
            ],
          }),
        }),
        e.jsx(_e, { isOpen: n, setIsOpen: N, handleDiscardFormChanges: ie }),
      ],
    });
  };
function as() {
  const { t: a, i18n: i } = he(),
    g = dt(),
    { renderMetadata: c } = Vt(),
    { getSession: s, refreshSessionCookie: u } = ve(),
    d = t.useRef(null),
    [n, N] = t.useState(!1),
    [m, v] = t.useState(!1),
    [y, S] = t.useState(!1),
    [k, o] = t.useState(!1),
    [r, M] = t.useState(!1),
    [l, p] = t.useState(!1),
    [f, h] = t.useState(!1),
    [x, b] = t.useState(!1),
    [E, C] = t.useState(!1),
    [A, F] = t.useState(!0),
    [R, L] = t.useState(!1),
    [V, O] = t.useState(!1),
    [z, $] = t.useState(!1),
    [q, Z] = t.useState(!1),
    [ee, G] = t.useState(!0),
    [te, P] = t.useState(!0),
    [B, ne] = t.useState(''),
    [se, ce] = t.useState([{ value: '', checked: !1 }]),
    [X, oe] = t.useState([{ value: '', checked: !1 }]),
    [H, ae] = t.useState(!0),
    [Y, D] = t.useState(!1),
    [re, J] = t.useState(!0),
    [ie, w] = t.useState([]),
    [I, le] = t.useState([]),
    [Q, W] = Re(['session', 'language']),
    [Me] = Nt();
  t.useEffect(() => {
    const T = Me.get('l');
    T === 'f'
      ? (i.changeLanguage('fr-CA'), W('language', 'fr-CA'))
      : T === 'e'
      ? (i.changeLanguage('en-CA'), W('language', 'en-CA'))
      : Ot(Q.language);
  }, []),
    t.useEffect(() => {
      c(), D(!0);
    }, [Q.language]),
    t.useEffect(() => {
      D(!1),
        G(!0),
        Ze(Q)
          ? (K.getReminderDetails({ params: { session: s() } })
              .then((T) => {
                u(s()), ae(!1);
                const {
                    isEmailActive: ge,
                    isLeadTime2wksActive: Ie,
                    isLeadTime4wksActive: Ee,
                    isLeadTime6wksActive: Oe,
                  } = T.data.reminderPreference,
                  ye = !ge && !Ie && !Ee && !Oe;
                w([!!(ye || ge), !1, !!(ye || Ie), !!Ee, !!Oe]), ye && P(!1);
              })
              .catch((T) => {
                console.log(T), ae(!1);
              }),
            J(!0),
            K.getAllVehicles({ params: { session: s(), lang: Q.language } })
              .then((T) => {
                console.log('Vehicle List received', T.data), J(!1), le(T.data.vehicles);
              })
              .catch((T) => {
                T.response?.status === 403 && g('/authentication'), J(!1);
              }))
          : g('/authentication');
    }, [Y]),
    t.useEffect(() => {
      I.length > 0 ? F(!1) : F(!0);
    }, [I]),
    t.useEffect(() => {
      E && I.length === 0 && P(!0);
    }, [I, E]),
    t.useEffect(() => {
      l &&
        y &&
        setTimeout(() => {
          $(!0), S(!1), Z(!0);
        }, 2e3),
        l && (C(!1), h(!1), b(!1));
    }, [l, y, q]),
    t.useEffect(() => {
      E && (p(!1), h(!1), b(!1), Z(!1));
    }, [E]),
    t.useEffect(() => {
      f && (p(!1), C(!1), b(!1));
    }, [f]),
    t.useEffect(() => {
      x && (p(!1), C(!1), h(!1));
    }, [x]);
  const Fe = () => {
      d && d.current && d.current.scrollIntoView({ behavior: 'smooth' });
    },
    qe = () => {
      d && d.current && d.current.scrollIntoView({ behavior: 'smooth' });
    },
    ke = () => {
      const T = X.find((ge) => ge.checked);
      A ? P(!0) : se[0].checked && T ? (P(!1), v(!1)) : P(!0);
    },
    we = () => {
      Ze(Q) || g('/authentication'),
        o(!1),
        v(!1),
        K.updateReminderDetails({
          session: { token: s() },
          reminderPreference: {
            isEmailActive: !!se[0]?.checked,
            isTextActive: !!se[1]?.checked,
            isLeadTime2wksActive: !!X[0]?.checked,
            isLeadTime4wksActive: !!X[1]?.checked,
            isLeadTime6wksActive: !!X[2]?.checked,
          },
        })
          .then(() => {
            D(!0), v(!0), qe();
          })
          .catch((T) => {
            o(!0), console.log(T);
          }),
        P(!0);
    },
    Ne = (T) => {
      ne(T);
    };
  return H
    ? e.jsx('main', { className: 'page-content', children: e.jsx(Ve, { size: 'lg' }) })
    : e.jsxs(e.Fragment, {
        children: [
          e.jsx(At, {
            showCart: !1,
            accountOptions: a('mainNavigation.accountOptionsSignIn.options', { returnObjects: !0 }),
            signedIn: !0,
            showSearch: !1,
          }),
          e.jsxs('main', {
            ref: d,
            className: 'page-content',
            children: [
              n &&
                e.jsx(U, {
                  isOpen: n,
                  setIsOpen: N,
                  variant: 'inPage',
                  type: 'success',
                  description: e.jsxs('div', {
                    children: [
                      e.jsx('h2', { children: a('notifications.feedbackModal.successAlertTitle') }),
                      e.jsx('p', { children: a('notifications.feedbackModal.successAlertDescription') }),
                    ],
                  }),
                }),
              e.jsx('section', {
                className: 'left',
                children: e.jsxs('div', {
                  className: 'gnb-form-container',
                  children: [
                    m &&
                      e.jsx(U, {
                        isOpen: m,
                        setIsOpen: v,
                        variant: 'inPage',
                        type: 'success',
                        description: a('notifications.toastMessages.saveChangesSuccess'),
                      }),
                    k &&
                      e.jsx(U, {
                        isOpen: k,
                        setIsOpen: o,
                        variant: 'inPage',
                        type: 'critical',
                        description: a('errorsMsg.genericErrMsg'),
                      }),
                    e.jsx('h1', {
                      className: 'padding-top-md notifications-heading',
                      children: a('notifications.heading'),
                    }),
                    e.jsx('hr', {}),
                    l &&
                      e.jsx(e.Fragment, {
                        children: e.jsx(U, {
                          isOpen: l,
                          setIsOpen: p,
                          variant: 'inPage',
                          type: 'success',
                          description: e.jsx(pe, {
                            i18nKey: 'notifications.toastMessages.addVehicleSuccess',
                            components: { strong: e.jsx('strong', {}) },
                            values: { vehicleName: B },
                          }),
                        }),
                      }),
                    f &&
                      e.jsx(U, {
                        isOpen: f,
                        setIsOpen: h,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(pe, {
                          i18nKey: 'notifications.toastMessages.editCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: B },
                        }),
                      }),
                    x &&
                      e.jsx(U, {
                        isOpen: x,
                        setIsOpen: b,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(pe, {
                          i18nKey: 'notifications.toastMessages.addCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: B },
                        }),
                      }),
                    E &&
                      e.jsx(U, {
                        isOpen: E,
                        setIsOpen: C,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(pe, {
                          i18nKey: 'notifications.toastMessages.removeVehicleSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { vehicleName: B },
                        }),
                      }),
                    e.jsx('div', {
                      className: 'padding-bottom-md',
                      children:
                        A &&
                        !re &&
                        e.jsx(U, {
                          isOpen: A && !re,
                          setIsOpen: () => {},
                          hasTimeout: !1,
                          variant: 'inPage',
                          type: 'info',
                          description: e.jsx(pe, {
                            i18nKey: 'notifications.toastMessages.addVehicleAlert',
                            components: { 1: e.jsx('a', { href: '#your-active-reminders' }) },
                          }),
                        }),
                    }),
                    e.jsxs('form', {
                      children: [
                        e.jsx('h3', {
                          id: 'your-active-reminders',
                          children: a('notifications.subsectionThree.heading'),
                        }),
                        e.jsx('p', { children: a('notifications.subsectionThree.subhead') }),
                        e.jsx(Se, { label: a('notifications.subsectionThree.buttonText'), onClick: () => L(!0) }),
                        re && e.jsx(Ve, { size: 'md', inModal: !0 }),
                        !re &&
                          e.jsx('div', {
                            className: 'padding-top-md',
                            children: e.jsx(Kt, {
                              vehicleInfoList: I,
                              setEditedCustomNameSuccessMsg: h,
                              setAddedCustomNameSuccessMsg: b,
                              setRemovedVehicleSuccessMsg: C,
                              getVehicleName: Ne,
                              setRefreshData: D,
                            }),
                          }),
                        e.jsx('hr', {}),
                        e.jsx('h2', { children: a('notifications.subsectionOne.heading') }),
                        e.jsx('p', { children: a('notifications.subsectionOne.subhead') }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionOne.question') }),
                        e.jsx(et, {
                          title: a('notifications.checkboxHeading'),
                          valueArray: ['email', 'text-message'],
                          selectedOptions: se,
                          setSelectedOptions: ce,
                          children: e.jsx(ct, {
                            checkboxOptions: [
                              {
                                id: 'email',
                                label: a('notifications.subsectionOne.questionOne.options.0.label'),
                                isSelected: ie[0],
                              },
                              {
                                id: 'text-message',
                                label: a('notifications.subsectionOne.questionOne.options.1.label'),
                                isSelected: ie[1],
                                disabled: !0,
                              },
                            ],
                            disabledArray: [!1, ee],
                            onChange: ke,
                          }),
                        }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionTwo.question') }),
                        e.jsx(et, {
                          title: a('notifications.checkboxHeading'),
                          valueArray: ['two-week', 'four-week', 'six-week'],
                          selectedOptions: X,
                          setSelectedOptions: oe,
                          children: e.jsx(ct, {
                            checkboxOptions: [
                              {
                                id: 'two-week',
                                label: a('notifications.subsectionOne.questionTwo.options.0.label'),
                                isSelected: ie[2],
                              },
                              {
                                id: 'four-week',
                                label: a('notifications.subsectionOne.questionTwo.options.1.label'),
                                isSelected: ie[3],
                              },
                              {
                                id: 'six-week',
                                label: a('notifications.subsectionOne.questionTwo.options.2.label'),
                                isSelected: ie[4],
                              },
                            ],
                            onChange: ke,
                          }),
                        }),
                        e.jsx(Se, {
                          label: a('notifications.subsectionOne.primaryButtonLabel'),
                          disabled: te,
                          variant: 'secondary',
                          onClick: we,
                        }),
                      ],
                    }),
                    e.jsx('hr', {}),
                    r &&
                      e.jsx('div', {
                        className: 'padding-bottom-md',
                        children: e.jsx(U, {
                          isOpen: r,
                          setIsOpen: M,
                          variant: 'inPage',
                          type: 'success',
                          description: a('notifications.toastMessages.stopPaperSuccess'),
                        }),
                      }),
                    e.jsx('h3', { children: a('notifications.subsectionTwo.heading') }),
                    e.jsx('p', { children: a('notifications.subsectionTwo.subhead') }),
                    e.jsx(Se, {
                      label: a('notifications.subsectionTwo.buttonText'),
                      variant: 'secondary',
                      onClick: () => O(!0),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(Pt, { variant: 'dark' }),
          e.jsx(Jt, {
            vehicleInfoList: I,
            isAddVehicleOpen: R,
            setIsAddVehicleOpen: L,
            setAddedVehicleSuccessMsg: p,
            setFirstVehicleAdded: S,
            getVehicleName: Ne,
            setRefreshData: D,
          }),
          e.jsx(Qt, { isOptOutPaperModalOpen: V, setIsOptOutPaperModalOpen: O, setStopPaperSuccessMsg: M }),
          e.jsx('div', {
            className: q ? 'feedback-fade-in' : '',
            children: e.jsx(Gt, {
              isFeedbackModalOpen: z,
              setIsFeedbackModalOpen: $,
              setFeedbackModalSuccess: N,
              scrollToTop: Fe,
            }),
          }),
        ],
      });
}
export { as as default };
