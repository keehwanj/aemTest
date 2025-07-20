import {
  u as be,
  r as t,
  j as e,
  c as ue,
  a as Be,
  F as gt,
  f as mt,
  b as pt,
  d as bt,
  e as at,
  S as Ae,
  g as kt,
} from './index-D38DftTu.js';
import {
  u as je,
  H as Q,
  m as Ue,
  d as $e,
  D as We,
  C as vt,
  g as Ke,
  B as Ce,
  a as yt,
  N as Ze,
  b as xt,
  i as et,
  M as jt,
  F as Ct,
} from './Error-CCx1isWs.js';
import {
  M as xe,
  A as U,
  T as fe,
  c as it,
  i as Ve,
  a as Pe,
  b as Le,
  r as nt,
  d as Oe,
} from './input-helpers-CkqBGot3.js';
import { T as ye, u as St } from './useMetadata-DpbrA7pe.js';
import { D as Te, E as Mt } from './ErrorModal-CZoq837d.js';
import { C as wt, a as tt } from './Checkbox-ZvSTE2DX.js';
const Nt = (a, i, g, d) => {
    var s = {};
    (a.ARIAaccordion = s),
      (s.NS = 'ARIAaccordion'),
      (s.AUTHOR = "Scott O'Hara"),
      (s.VERSION = '3.1.1'),
      (s.LICENSE = 'https://github.com/scottaohara/accessible_accordions/blob/master/LICENSE');
    var u = 'gnb-accordion-trigger',
      c = 'gnb-accordion-heading',
      n = 'gnb-accordion-panel',
      E = 'gnb-accordion-toggleall',
      m = 0;
    (s.create = function () {
      var o,
        l,
        M = 'none',
        r,
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
            ? ((l = i.querySelectorAll('#' + o.id + ' li > .' + n)),
              (r = i.querySelectorAll('#' + o.id + ' li > .' + c)))
            : ((l = i.querySelectorAll('#' + o.id + ' > .' + n)), (r = i.querySelectorAll('#' + o.id + ' > .' + c))),
          o.hasAttribute('data-default') && (M = o.getAttribute('data-default')),
          (f = o.hasAttribute('data-constant')),
          o.hasAttribute('data-multi'),
          o.hasAttribute('data-transition'))
        ) {
          var I = o.querySelectorAll('.' + n);
          for (b = 0; b < I.length; b++)
            I[b].setAttribute('style', 'transition: ' + o.getAttribute('data-transition') + 's ease-in-out');
        }
        for (
          s.setupPanels(o.id, l, M, f),
            s.setupHeadingButton(r, d, f),
            i.querySelectorAll('#' + o.id + '> li').length
              ? (p = i.querySelectorAll('#' + o.id + ' li > .' + c + ' .' + u))
              : (p = i.querySelectorAll('#' + o.id + ' > .' + c + ' .' + u)),
            b = 0;
          b < p.length;
          b++
        )
          p[b].addEventListener('click', s.actions), p[b].addEventListener('keydown', s.keytrolls);
      }
    }),
      (s.setupPanels = function (o, l, M, r) {
        var p, f, h, x, b;
        for (p = 0; p < l.length; p++)
          (f = l[p]),
            (h = o + '_panel_' + (p + 1)),
            (x = M),
            (b = r),
            f.setAttribute('id', h),
            k(l[0], !0),
            x !== 'none' &&
              typeof parseInt(x) == 'number' &&
              (x <= 1 ? k(l[0], !1) : x - 1 >= l.length ? k(l[l.length - 1], !1) : k(l[x - 1], !1)),
            ((b && x === 'none') || typeof parseInt(x) != 'number') && k(l[0], !1);
      }),
      (s.setupHeadingButton = function (o, l, M) {
        var r, p, f, h, x, b;
        for (b = 0; b < o.length; b++)
          (r = o[b]),
            (p = r.nextElementSibling.id),
            (f = i.getElementById(p).getAttribute('aria-hidden')),
            (h = i.createElement('button')),
            (x = l[b]),
            (r.innerHTML = ''),
            h.setAttribute('type', 'button'),
            h.setAttribute('aria-controls', p),
            h.setAttribute('id', p + '_trigger'),
            h.classList.add(u),
            f === 'false' ? (y(h, !0), v(h, !0), M && h.setAttribute('aria-disabled', 'true')) : (y(h, !1), v(h, !1)),
            r.appendChild(h),
            h.appendChild(i.createTextNode(x));
      }),
      (s.actions = function (o) {
        var l = this.id.replace(/_panel.*$/g, ''),
          M = i.getElementById(this.getAttribute('aria-controls')),
          r;
        i.querySelectorAll('#' + l + '> li').length
          ? (r = i.querySelectorAll('#' + l + ' li > .' + c + ' .' + u))
          : (r = i.querySelectorAll('#' + l + ' > .' + c + ' .' + u)),
          o.preventDefault(),
          s.togglePanel(o, l, M, r);
      }),
      (s.togglePanel = function (o, l, M, r) {
        var p,
          f,
          h = o.target;
        if (
          h.getAttribute('aria-disabled') !== 'true' &&
          ((p = h.getAttribute('aria-controls')),
          v(h, 'true'),
          h.getAttribute('aria-expanded') === 'true'
            ? (y(h, 'false'), k(M, 'true'))
            : (y(h, 'true'), k(M, 'false'), i.getElementById(l).hasAttribute('data-constant') && S(h, 'true')),
          i.getElementById(l).hasAttribute('data-constant') || !i.getElementById(l).hasAttribute('data-multi'))
        )
          for (f = 0; f < r.length; f++)
            h !== r[f] &&
              (v(r[f], 'false'),
              (p = r[f].getAttribute('aria-controls')),
              S(r[f], 'false'),
              y(r[f], 'false'),
              k(i.getElementById(p), 'true'));
      }),
      (s.toggleAllPanels = function (o) {
        var l, M, r;
        let p = o.target,
          f = o.target.nextElementSibling;
        (M = p.getAttribute('data-open')),
          (r = M == 'true' ? 'false' : 'true'),
          i.querySelectorAll('#' + f.id + '> li').length
            ? (l = i.querySelectorAll('#' + f.id + ' li > .' + c + ' .' + u))
            : (l = i.querySelectorAll('#' + f.id + ' > .' + c + ' .' + u));
        for (var h = 0; h < l.length; h++) {
          let x = l[h],
            b = document.getElementById(x.getAttribute('aria-controls'));
          v(x, 'true'), r === 'false' ? (y(x, 'false'), k(b, 'true')) : (y(x, 'true'), k(b, 'false'));
        }
        p.setAttribute('data-open', r);
      }),
      (s.keytrolls = function (o) {
        if (o.target.classList.contains(u)) {
          var l = o.keyCode || o.which,
            M = 36,
            r = 35,
            p = this.id.replace(/_panel.*$/g, ''),
            f;
          switch (
            (i.querySelectorAll('#' + p + '> li').length
              ? (f = i.querySelectorAll('#' + p + ' li > .' + c + ' .' + u))
              : (f = i.querySelectorAll('#' + p + ' > .' + c + ' .' + u)),
            l)
          ) {
            case r:
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
        let o = i.querySelectorAll('.' + E);
        for (var l = 0; l < o.length; l++)
          o[l].addEventListener('click', function (r) {
            return (
              s.toggleAllPanels(r),
              r.target.innerHTML == 'Open all' ? (r.target.innerHTML = 'Close all') : (r.target.innerHTML = 'Open all'),
              r.preventDefault(),
              !0
            );
          });
      });
    var k = function (o, l) {
        o.setAttribute('aria-hidden', l);
      },
      y = function (o, l) {
        o.setAttribute('aria-expanded', l);
      },
      S = function (o, l) {
        o.setAttribute('aria-disabled', l);
      },
      v = function (o, l) {
        o.setAttribute('data-current', l);
      };
    s.init();
  },
  Et = ({
    vehicleName: a,
    id: i,
    isOpen: g,
    setIsOpen: d,
    setRemovedVehicleSuccessMsg: s,
    getVehicleName: u,
    setRefreshData: c,
  }) => {
    const { t: n } = be(),
      { getSession: E } = je(),
      [m, k] = t.useState(!1),
      y = () => {
        d(!1), k(!1);
      },
      S = () => {
        s(!1),
          k(!1),
          Q.removeAVehicle(i, { params: { session: E() } })
            .then(() => {
              u(a), y(), s(!0), c(!0);
            })
            .catch((v) => {
              k(!0), console.error(v);
            });
      };
    return (
      t.useEffect(() => {
        const v = (o) => {
          o.key === 'Escape' && y();
        };
        return (
          g && window.addEventListener('keydown', v),
          () => {
            window.removeEventListener('keydown', v);
          }
        );
      }, [g]),
      e.jsx(xe, {
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
                setIsOpen: k,
                variant: 'inPage',
                type: 'critical',
                description: n('errorsMsg.genericErrMsg'),
              }),
            e.jsx('p', {
              children: e.jsx(ye, {
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
var ze = {},
  ot = {},
  Se = {};
Object.defineProperty(Se, '__esModule', { value: !0 });
Se.ProfanityOptions = void 0;
class It {
  constructor() {
    (this.wholeWord = !0), (this.grawlix = '@#$%&!'), (this.grawlixChar = '*');
  }
}
Se.ProfanityOptions = It;
var lt = {},
  rt = {};
(function (a) {
  Object.defineProperty(a, '__esModule', { value: !0 }),
    (a.CensorType = void 0),
    (function (i) {
      (i[(i.Word = 0)] = 'Word'),
        (i[(i.FirstChar = 1)] = 'FirstChar'),
        (i[(i.FirstVowel = 2)] = 'FirstVowel'),
        (i[(i.AllVowels = 3)] = 'AllVowels');
    })(a.CensorType || (a.CensorType = {}));
})(rt);
var _e = {};
Object.defineProperty(_e, '__esModule', { value: !0 });
_e.List = void 0;
class Ot {
  constructor(i) {
    (this.onListChanged = i), (this.words = []);
  }
  get empty() {
    return !this.words.length;
  }
  removeWords(i) {
    (this.words = this.words.filter((g) => !i.includes(g))), this.onListChanged();
  }
  addWords(i) {
    (this.words = this.words.concat(i)), this.onListChanged();
  }
}
_e.List = Ot;
(function (a) {
  var i =
      (ue && ue.__createBinding) ||
      (Object.create
        ? function (d, s, u, c) {
            c === void 0 && (c = u);
            var n = Object.getOwnPropertyDescriptor(s, u);
            (!n || ('get' in n ? !s.__esModule : n.writable || n.configurable)) &&
              (n = {
                enumerable: !0,
                get: function () {
                  return s[u];
                },
              }),
              Object.defineProperty(d, c, n);
          }
        : function (d, s, u, c) {
            c === void 0 && (c = u), (d[c] = s[u]);
          }),
    g =
      (ue && ue.__exportStar) ||
      function (d, s) {
        for (var u in d) u !== 'default' && !Object.prototype.hasOwnProperty.call(s, u) && i(s, d, u);
      };
  Object.defineProperty(a, '__esModule', { value: !0 }), g(rt, a), g(_e, a);
})(lt);
var Re = {};
Object.defineProperty(Re, '__esModule', { value: !0 });
Re.escapeRegExp = void 0;
const At = (a) => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
Re.escapeRegExp = At;
var Ge = {};
Object.defineProperty(Ge, '__esModule', { value: !0 });
Ge.default = [
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
];
(function (a) {
  Object.defineProperty(a, '__esModule', { value: !0 }), (a.profanity = a.Profanity = void 0);
  const i = Se,
    g = lt,
    d = Re,
    s = Ge;
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
    censor(n, E = g.CensorType.Word) {
      switch (E) {
        case g.CensorType.Word:
          return n.replace(this.regex, this.options.grawlix);
        case g.CensorType.FirstChar: {
          let m = n;
          return (
            Array.from(n.matchAll(this.regex)).forEach((k) => {
              const y = k[0],
                S = this.options.grawlixChar + y.slice(1, y.length);
              m = m.replace(y, S);
            }),
            m
          );
        }
        case g.CensorType.FirstVowel:
        case g.CensorType.AllVowels: {
          const m = new RegExp('[aeiou]', E === g.CensorType.FirstVowel ? 'i' : 'ig');
          let k = n;
          return (
            Array.from(n.matchAll(this.regex)).forEach((y) => {
              const S = y[0],
                v = S.replace(m, this.options.grawlixChar);
              k = k.replace(S, v);
            }),
            k
          );
        }
        default:
          throw new Error(`Invalid replacement type: "${E}"`);
      }
    }
    addWords(n) {
      this.blacklist.addWords(n);
    }
    removeWords(n) {
      this.blacklist.removeWords(n);
    }
    buildRegex() {
      const n = this.blacklist.words.map(d.escapeRegExp),
        E = this.whitelist.words.map(d.escapeRegExp),
        m = `${this.options.wholeWord ? '\\b' : ''}(${n.join('|')})${this.options.wholeWord ? '\\b' : ''}`,
        k = this.whitelist.empty ? '' : `(?!${E.join('|')})`;
      this.regex = new RegExp(k + m, 'ig');
    }
  }
  (a.Profanity = u), (a.profanity = new u()), (a.default = a.profanity);
})(ot);
(function (a) {
  var i =
      (ue && ue.__createBinding) ||
      (Object.create
        ? function (d, s, u, c) {
            c === void 0 && (c = u);
            var n = Object.getOwnPropertyDescriptor(s, u);
            (!n || ('get' in n ? !s.__esModule : n.writable || n.configurable)) &&
              (n = {
                enumerable: !0,
                get: function () {
                  return s[u];
                },
              }),
              Object.defineProperty(d, c, n);
          }
        : function (d, s, u, c) {
            c === void 0 && (c = u), (d[c] = s[u]);
          }),
    g =
      (ue && ue.__exportStar) ||
      function (d, s) {
        for (var u in d) u !== 'default' && !Object.prototype.hasOwnProperty.call(s, u) && i(s, d, u);
      };
  Object.defineProperty(a, '__esModule', { value: !0 }), g(ot, a), g(Se, a);
})(ze);
const Vt = ({
    typeAction: a,
    description: i,
    vehicle: g,
    isCustomNameModalOpen: d,
    setIsCustomNameModalOpen: s,
    setEditedCustomNameSuccessMsg: u,
    setAddedCustomNameSuccessMsg: c,
    getVehicleName: n,
    setRefreshData: E,
  }) => {
    const { t: m } = be(),
      { getSession: k } = je(),
      [y] = Be(['session', 'language']),
      { vin: S, plate: v, expiryDate: o, vehicleId: l, customName: M } = g,
      r = M && a === 'edit' ? M : '',
      [p, f] = t.useState(''),
      [h, x] = t.useState(!1),
      [b, I] = t.useState(!1),
      [C, A] = t.useState(!1),
      [F, _] = t.useState(''),
      [P, V] = t.useState(!0),
      [O, X] = t.useState(!1);
    t.useEffect(() => {
      _(r);
    }, [r]),
      t.useEffect(() => {
        const R = (q) => {
          const z = q.key;
          z === 'Escape' && C ? (x(!0), s(!0)) : z === 'Escape' && !C && W();
        };
        return (
          d && window.addEventListener('keydown', R),
          () => {
            window.removeEventListener('keydown', R);
          }
        );
      }, [d, C]);
    const W = () => {
        s(!1), _(r), I(!1), V(!0), X(!1), f('');
      },
      D = () => {
        b ? x(!0) : (s(!1), _(r), X(!1), f(''));
      },
      ee = () => {
        u(!1),
          c(!1),
          X(!1),
          ze.profanity.exists(F)
            ? f('profanity')
            : Ve(F)
            ? (f(''),
              Q.updateAVehicle({
                session: { token: k() },
                vehicle: { vehicleId: l, plate: v, vin: S, customName: F.trim(), expiryDate: o },
              })
                .then(() => {
                  n(F.trim()), a === 'add' ? c(!0) : u(!0), E(!0), W();
                })
                .catch((q) => {
                  X(!0), console.error(q);
                }))
            : f('invalid-custom-name');
      },
      te = () => {
        W();
      },
      K = (R) => {
        R.target.value !== r ? (I(!0), (!p || (p && Ve(R.target.value))) && V(!1)) : (I(!1), V(!1)), _(R.target.value);
      },
      se = (R) => {
        const q = R.key;
        q !== 'Escape' && b ? A(!0) : q !== 'Escape' && !b && A(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xe, {
          id: `${a === 'add' ? 'add' : 'edit'}-custom-name-modal-${l}`,
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
            onClick: ee,
            disabled: P,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: m('notifications.customNameModal.secondaryButtonLabel'), onClick: D },
          open: d,
          onClose: D,
          children: e.jsxs(e.Fragment, {
            children: [
              O &&
                e.jsx(U, {
                  isOpen: O,
                  setIsOpen: X,
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
                  ` ${Ue(S)}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [m('notifications.vehicleInfo.licence'), ':'] }),
                  ` ${v}`,
                  e.jsx('br', {}),
                  e.jsxs('strong', { children: [m('notifications.vehicleInfo.date'), ':'] }),
                  $e(o, We, y.language),
                ],
              }),
              e.jsx(fe, {
                type: 'text',
                label: m(
                  a === 'add'
                    ? 'notifications.vehicleInfo.addCustomLabelInput'
                    : 'notifications.vehicleInfo.editCustomLabelInput'
                ),
                helperText: m('notifications.vehicleInfo.helperText'),
                id: 'custom-name',
                value: F,
                onChange: K,
                error: p ? it(p, m('errorsMsg.customNameWithProfanity'), m('errorsMsg.invalidCustomName')) : '',
                maxlength: vt,
                onKeyUp: se,
              }),
            ],
          }),
        }),
        e.jsx(Te, { isOpen: h, setIsOpen: x, handleDiscardFormChanges: te }),
      ],
    });
  },
  Pt = ({
    vehicle: a,
    setEditedCustomNameSuccessMsg: i,
    setAddedCustomNameSuccessMsg: g,
    setRemovedVehicleSuccessMsg: d,
    getVehicleName: s,
    setRefreshData: u,
  }) => {
    const { t: c } = be(),
      [n] = Be(['language']),
      [E, m] = t.useState(!1),
      [k, y] = t.useState(!1),
      { colour: S, customName: v, expiryDate: o, make: l, model: M, plate: r, vin: p, year: f, vehicleId: h } = a,
      x = S && f && l && M,
      b = Ke(S, f, l, M),
      I = yt(S, f, l, M, v),
      C = (_ = 'default') => {
        let P;
        return x ? (P = v ? (_ === 'fullCustomName' ? I : v) : b) : (P = r), P;
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
                !x && e.jsxs('p', { children: [e.jsx(gt, { icon: mt }), ' ', c('warningMsg.unavailableVehicle')] }),
                e.jsxs('p', {
                  ...F,
                  children: [
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [c('notifications.vehicleInfo.name'), ':'] }),
                        ` ${x ? b : '-'}`,
                      ],
                    }),
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [c('notifications.vehicleInfo.vin'), ':'] }),
                        ` ${Ue(p)}`,
                      ],
                    }),
                    e.jsxs('span', {
                      style: { display: 'block' },
                      children: [
                        e.jsxs('strong', { children: [c('notifications.vehicleInfo.licence'), ':'] }),
                        ` ${r}`,
                      ],
                    }),
                    e.jsxs('strong', { children: [c('notifications.vehicleInfo.date'), ':'] }),
                    $e(o, We, n.language),
                  ],
                }),
                e.jsxs('div', {
                  children: [
                    e.jsx('span', {
                      className: 'padding-right-sm-sm',
                      children: e.jsx(Ce, {
                        label: c(
                          v
                            ? 'notifications.customNameModal.edit.primaryButtonLabelAccordion'
                            : 'notifications.customNameModal.add.primaryButtonLabel'
                        ),
                        variant: 'secondary',
                        leftIcon: pt,
                        size: 'small',
                        onClick: () => m(!0),
                        disabled: !x,
                      }),
                    }),
                    e.jsx(Ce, {
                      label: c('notifications.removeVehicleModal.primaryButtonLabel'),
                      variant: 'critical secondary',
                      leftIcon: bt,
                      size: 'small',
                      onClick: A,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(Vt, {
          typeAction: v ? 'edit' : 'add',
          description: b,
          vehicle: a,
          isCustomNameModalOpen: E,
          setIsCustomNameModalOpen: m,
          setEditedCustomNameSuccessMsg: i,
          setAddedCustomNameSuccessMsg: g,
          getVehicleName: s,
          setRefreshData: u,
        }),
        e.jsx(Et, {
          vehicleName: C('fullCustomName'),
          id: h,
          isOpen: k,
          setIsOpen: y,
          setRemovedVehicleSuccessMsg: d,
          getVehicleName: s,
          setRefreshData: u,
        }),
      ],
    });
  },
  Lt = ({
    vehicleInfoList: a,
    setEditedCustomNameSuccessMsg: i,
    setAddedCustomNameSuccessMsg: g,
    setRemovedVehicleSuccessMsg: d,
    getVehicleName: s,
    setRefreshData: u,
  }) => (
    t.useEffect(() => {
      const c = a.map((n) => {
        let E;
        const { colour: m, customName: k, make: y, model: S, year: v, plate: o } = n,
          l = Ke(m, v, y, S);
        return m && v && y && S ? (E = k || l) : (E = o), E;
      });
      Nt(window, document, void 0, c);
    }),
    e.jsx('div', {
      className: 'gnb-accordion-pane',
      children: e.jsx('ol', {
        className: 'gnb-accordion-cards',
        'data-aria-accordion': !0,
        'data-multi': !0,
        children: a.map((c) =>
          e.jsx(
            Pt,
            {
              vehicle: c,
              setEditedCustomNameSuccessMsg: i,
              setAddedCustomNameSuccessMsg: g,
              setRemovedVehicleSuccessMsg: d,
              getVehicleName: s,
              setRefreshData: u,
            },
            c.vehicleId
          )
        ),
      }),
    })
  ),
  Bt = ({ label: a, placeholder: i, maxlength: g, onChange: d, className: s, value: u }) =>
    e.jsxs('div', {
      children: [
        e.jsx('label', { className: 'left', htmlFor: a, children: a }),
        e.jsx('textarea', { className: s, name: a, id: a, value: u, placeholder: i, maxLength: g, onChange: d }),
      ],
    }),
  ve = '/etc/designs/spa/snb-vrrr-fe/clientlibs/',
  Tt = ({ isFeedbackModalOpen: a, setIsFeedbackModalOpen: i, setFeedbackModalSuccess: g, scrollToTop: d }) => {
    const { t: s } = be(),
      { getSession: u } = je(),
      [c, n] = t.useState(0),
      [E, m] = t.useState(!1),
      [k, y] = t.useState(!1),
      [S, v] = t.useState(0),
      [o, l] = t.useState(''),
      [M, r] = t.useState('');
    t.useEffect(() => {
      Q.getAccountDetails({ params: { session: u() } })
        .then((C) => {
          r(C.data.account.accountId);
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
        Q.submitFeedback({
          session: { token: u() },
          feedback: { feedbackId: '', feedbackRating: 0, feedbackComments: '', isFeedbackSkipped: !0, accountId: M },
        })
          .then(() => {
            C === 'discarded' && y(!1), i(!1), l(''), v(0);
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
          Q.submitFeedback({
            session: { token: u() },
            feedback: { feedbackId: '', feedbackRating: S, feedbackComments: o, isFeedbackSkipped: !1, accountId: M },
          })
            .then(() => {
              k && (g(!0), d()), i(!1), v(0);
            })
            .catch((C) => {
              console.log(C);
            });
      },
      x = (C) => {
        C.target.value ? y(!0) : y(!1), n(C.target.value.length), l(C.target.value);
      },
      b = (C) => {
        C && y(!0), v(C);
      },
      I = () => {
        p('discarded');
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xe, {
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
                                src: ve + 'images/face-tired-filled.svg',
                                alt: s('notifications.feedbackModal.dissatisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: ve + 'images/face-tired.svg',
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
                                src: ve + 'images/face-meh-filled.svg',
                                alt: s('notifications.feedbackModal.neutralReaction'),
                              })
                            : e.jsx('img', {
                                src: ve + 'images/face-meh.svg',
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
                                src: ve + 'images/face-heart-filled.svg',
                                alt: s('notifications.feedbackModal.satisfiedReaction'),
                              })
                            : e.jsx('img', {
                                src: ve + 'images/face-grin-hearts.svg',
                                alt: s('notifications.feedbackModal.satisfiedReaction'),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(Bt, {
                className: 'feedback-text-area',
                label: s('notifications.feedbackModal.textAreaLabel'),
                placeholder: s('notifications.feedbackModal.textAreaPlaceHolder'),
                maxlength: 200,
                value: o,
                onChange: x,
              }),
              e.jsxs('div', { className: 'counter', children: [c, '/200'] }),
            ],
          }),
        }),
        E && e.jsx(Te, { isOpen: E, setIsOpen: m, handleDiscardFormChanges: I }),
      ],
    });
  },
  st = ({ checkboxOptions: a, disabledArray: i, onChange: g }) => {
    if (i)
      for (let d = 0; d < i.length; d++) {
        const s = i[d];
        a[d].disabled = s;
      }
    return a.map((d) => {
      const { id: s, label: u, isSelected: c, disabled: n } = d;
      return e.jsx(wt, { id: s, label: u, selected: c, disabled: n, onChange: g }, s);
    });
  },
  ct = ({ listContent: a }) =>
    e.jsx('ul', { children: a.map((i, g) => e.jsx('li', { children: e.jsx('p', { children: i.item }) }, g)) }),
  _t = ({
    isAddVehicleOpen: a,
    setIsAddVehicleOpen: i,
    setAddedVehicleSuccessMsg: g,
    getVehicleName: d,
    vehicleInfoList: s,
    setRefreshData: u,
    setFirstVehicleAdded: c,
  }) => {
    const { t: n } = be(),
      E = at(),
      { getSession: m } = je(),
      [k] = Be(['session', 'language']),
      y = k.language,
      [S, v] = t.useState({
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
      [o, l] = t.useState(''),
      [M, r] = t.useState(!1),
      [p, f] = t.useState(!1),
      [h, x] = t.useState(!1),
      [b, I] = t.useState(!1),
      [C, A] = t.useState(!1),
      [F, _] = t.useState(!0),
      [P, V] = t.useState(''),
      [O, X] = t.useState(''),
      [W, D] = t.useState(!1),
      [ee, te] = t.useState(!1),
      [K, se] = t.useState(!1),
      [R, q] = t.useState(!1),
      [z, ae] = t.useState(!1),
      [ce, ie] = t.useState(!1),
      [ne, B] = t.useState(!1),
      [oe, Z] = t.useState(!1),
      [G, ke] = t.useState(''),
      [J, le] = t.useState(!1),
      [w, N] = t.useState(''),
      [re, H] = t.useState(!0);
    t.useEffect(() => {
      _(!(P && O)), H(!G);
    }, [P, O, G]),
      t.useEffect(() => {
        o.length > 0 &&
          (f(!0),
          Q.getAVehicle(o, { params: { session: m(), lang: y } })
            .then((j) => {
              v(j.data.vehicles), f(!1), B(!1), Z(!0);
            })
            .catch((j) => {
              var L;
              B(!1), ((L = j.response) == null ? void 0 : L.status) === 403 && E('/authentication');
            }));
      }, [o]),
      t.useEffect(() => {
        S.vehicleId.length > 0 && (Z(!0), i(!1));
      }, [S]),
      t.useEffect(() => {
        const j = (L) => {
          L.key === 'Escape' && (h ? i(!0) : ee ? (r(!0), i(!0)) : (i(!1), $()));
        };
        return (
          a && (h || !h) && window.addEventListener('keydown', j),
          () => {
            window.removeEventListener('keydown', j);
          }
        );
      }, [a, h, ee]),
      t.useEffect(() => {
        const j = (L) => {
          const He = L.key;
          He === 'Escape' && K ? (r(!0), Z(!0)) : He === 'Escape' && !K && (Z(!1), $());
        };
        return (
          oe && window.addEventListener('keydown', j),
          () => {
            window.removeEventListener('keydown', j);
          }
        );
      }, [oe, K]);
    const $ = () => {
        V(''),
          X(''),
          l(''),
          _(!0),
          D(!1),
          q(!1),
          ae(!1),
          ie(!1),
          I(!1),
          ke(''),
          le(!1),
          N(''),
          H(!0),
          u(!0),
          A(!1),
          te(!1),
          se(!1);
      },
      de = (j) => s.some((L) => j.trim().toLowerCase() === L.plate.trim().toLowerCase()),
      Me = () => {
        P &&
          O &&
          (q(!Pe(P)),
          ae(!Le(O)),
          I(de(O)),
          ie(!1),
          Pe(P) &&
            Le(O) &&
            !de(O) &&
            (B(!0),
            q(!1),
            ae(!1),
            Q.addAVehicle({ session: { token: m() }, vehicle: { plate: O, vin: P }, lang: y })
              .then((j) => {
                l(j.data.vehicleId), D(!1), I(!1), _(!1), B(!1);
              })
              .catch((j) => {
                B(!1), j.response.status === 404 ? (ie(!0), _(!0)) : (A(!0), console.error(j));
              })));
      },
      Fe = () => {
        const j = ze.profanity.exists(G);
        G && j
          ? N('profanity')
          : Ve(G)
          ? !j &&
            Ve(G) &&
            S &&
            (N(''),
            B(!0),
            Q.updateAVehicle({
              session: { token: m() },
              vehicle: { vehicleId: o, plate: O, vin: P, customName: G.trim() },
            })
              .then(() => {
                B(!1), Z(!1), d(G.trim()), g(!0), s.length === 0 && c(!0), _(!0), D(!1), $();
              })
              .catch((L) => {
                B(!1), A(!0), console.error(L);
              }))
          : N('invalid-custom-name');
      },
      we = (j) => {
        g(!1), D(!!j);
      },
      Ne = () => {
        W || P || O ? r(!0) : (i(!1), $(), B(!1));
      },
      Ee = (j) => {
        const L = nt(j.target.value);
        we(L), V(L);
      },
      De = (j) => {
        we(j.target.value), X(j.target.value);
      },
      Ie = () => {
        let j;
        return z ? (j = n('errorsMsg.invalidLicence')) : ce ? (j = n('errorsMsg.nonregisteredLicence')) : (j = ''), j;
      },
      qe = (j) => {
        T(j.target.value), ke(j.target.value);
      },
      T = (j) => {
        const L = j.length > 0;
        le(L);
      },
      { colour: Y, make: he, model: ge, year: me, vin: pe, plate: dt, expiryDate: ut } = S,
      Je = Ke(Y, me, he, ge),
      Qe = () => {
        d(Je);
      },
      Xe = () => {
        J ? r(!0) : (Qe(), Z(!1), $(), B(!1), g(!0), s.length === 0 && c(!0));
      },
      ft = () => {
        i(!1), Z(!1), $(), B(!1), oe && !a && (g(!0), s.length === 0 && c(!0), Qe());
      },
      Ye = (j) => {
        const L = j.key;
        L !== 'Escape' && (W || P || O) ? te(!0) : L !== 'Escape' && !W && te(!1);
      },
      ht = (j) => {
        const L = j.key;
        L !== 'Escape' && J ? se(!0) : L !== 'Escape' && !J && se(!1);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xe, {
          id: 'add-vehicle-modal',
          title: n('notifications.addVehicleModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: n('notifications.addVehicleModal.primaryButton.add'),
            onClick: Me,
            disabled: F || ne,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: n('notifications.addVehicleModal.secondaryButton'), onClick: Ne },
          open: a && !oe,
          onClose: Ne,
          children:
            ne || p
              ? e.jsx(Ae, { inModal: !0, size: 'lg' })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs('p', {
                      children: [e.jsx('span', { className: 'required', children: '*' }), ' ', n('disclaimer')],
                    }),
                    e.jsx('p', { children: n('notifications.addVehicleModal.form.title') }),
                    b &&
                      e.jsx(U, {
                        isOpen: b,
                        setIsOpen: I,
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
                    e.jsx(fe, {
                      type: 'text',
                      label: n('notifications.addVehicleModal.form.vinLabelInput'),
                      id: 'vin',
                      required: !0,
                      value: P,
                      maxlength: 6,
                      onChange: Ee,
                      error: R ? n('errorsMsg.invalidVin') : '',
                      hasTooltipModal: !0,
                      tooltipBody: e.jsx(ct, {
                        listContent: n('notifications.tooltip.vin.listOne', { returnObjects: !0 }),
                      }),
                      tooltipTitle: n('notifications.tooltip.vin.title'),
                      isTooltipModalOpen: h,
                      setIsTooltipModalOpen: x,
                      onKeyUp: Ye,
                    }),
                    e.jsx(fe, {
                      type: 'text',
                      label: n('notifications.addVehicleModal.form.licenceLabelInput'),
                      id: 'licence-plate',
                      required: !0,
                      value: O,
                      onChange: De,
                      error: Ie(),
                      onKeyUp: Ye,
                    }),
                  ],
                }),
        }),
        e.jsx(xe, {
          id: 'add-custom-name-modal',
          title: n('notifications.addVehicleModal.customName.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: n('notifications.addVehicleModal.primaryButton.save'),
            onClick: Fe,
            disabled: re || ne,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: n('notifications.addVehicleModal.customName.skip'), onClick: Xe },
          open: oe && !a,
          onClose: Xe,
          children: ne
            ? e.jsx(Ae, { inModal: !0, size: 'lg' })
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
                      ` ${Je}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [n('notifications.vehicleInfo.vin'), ':'] }),
                      ` ${Ue(pe)}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [n('notifications.vehicleInfo.licence'), ':'] }),
                      ` ${dt}`,
                      e.jsx('br', {}),
                      e.jsxs('strong', { children: [n('notifications.vehicleInfo.date'), ':'] }),
                      $e(ut, We, y),
                    ],
                  }),
                  e.jsx(fe, {
                    type: 'text',
                    label: n('notifications.vehicleInfo.addCustomLabelInput'),
                    helperText: n('notifications.vehicleInfo.helperText'),
                    id: 'custom-name',
                    value: G,
                    onChange: qe,
                    error: w ? it(w, n('errorsMsg.customNameWithProfanity'), n('errorsMsg.invalidCustomName')) : '',
                    onKeyUp: ht,
                  }),
                ],
              }),
        }),
        e.jsx(Te, { isOpen: M, setIsOpen: r, handleDiscardFormChanges: ft }),
      ],
    });
  },
  Rt = ({ isOptOutPaperModalOpen: a, setIsOptOutPaperModalOpen: i, setStopPaperSuccessMsg: g }) => {
    const { t: d } = be(),
      { getSession: s } = je(),
      [u, c] = t.useState(!1),
      [n, E] = t.useState(!1),
      [m, k] = t.useState(!1),
      [y, S] = t.useState(!1),
      [v, o] = t.useState(''),
      [l, M] = t.useState(''),
      [r, p] = t.useState(''),
      [f, h] = t.useState(''),
      [x, b] = t.useState(!0),
      [I, C] = t.useState(!1),
      [A, F] = t.useState(!1),
      [_, P] = t.useState(''),
      [V, O] = t.useState({ invalidVin: !1, invalidLicencePlate: !1, invalidGivenNames: !1, invalidLastName: !1 }),
      [X, W] = t.useState(!1),
      [D, ee] = t.useState(!1),
      [te, K] = t.useState(!1),
      [se, R] = t.useState(!1);
    t.useEffect(() => {
      const w = (N) => {
        N.key === 'Escape' && (u ? i(!0) : y ? (E(!0), i(!0)) : q());
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
          Q.getAccountDetails({ params: { session: s() } })
            .then((N) => {
              var H, $;
              const re =
                ($ = (H = N == null ? void 0 : N.data) == null ? void 0 : H.account) == null ? void 0 : $.email;
              P(re);
            })
            .catch((N) => {
              console.error(N);
            });
        })();
      }, [_]),
      t.useEffect(() => {
        ie();
      }, [r, f, v, V, l]);
    const q = () => {
        o(''),
          M(''),
          p(''),
          O({ invalidLicencePlate: !1, invalidVin: !1, invalidGivenNames: !1, invalidLastName: !1 }),
          h(''),
          ee(!1),
          b(!0),
          i(!1),
          k(!1),
          C(!1),
          F(!1),
          K(!1),
          R(!1),
          S(!1);
      },
      z = () => {
        m || v || l || r || f ? E(!0) : q();
      },
      ae = () => {
        g(!1);
        const w = f && Le(f),
          N = r && Pe(r),
          re = v && Oe(v),
          H = l && Oe(l);
        O({ invalidLicencePlate: !w, invalidVin: !N, invalidGivenNames: !re, invalidLastName: !H }),
          ee(!0),
          K(!1),
          R(!1),
          v &&
            l &&
            r &&
            f &&
            N &&
            w &&
            re &&
            H &&
            (W(!0),
            Q.stopPaperReminders({ session: { token: s() }, givenNames: v, lastName: l, vin: r, plate: f, email: _ })
              .then(() => {
                i(!1), g(!0), q(), W(!1);
              })
              .catch(($) => {
                console.error($), W(!1), $.response.status === 400 && R(!0), $.response.status === 500 && K(!0);
              }));
      },
      ce = (w) => {
        k(!!w);
      },
      ie = () => {
        const w = v && l && r && f,
          N = !V.invalidLicencePlate && !V.invalidVin && !V.invalidGivenNames && !V.invalidLastName;
        b(D ? !(w && N) : !w);
      },
      ne = () => {
        C(!0), F(!1);
      },
      B = () => {
        C(!1), F(!0);
      },
      oe = (w) => {
        o(w.target.value), D && O({ ...V, invalidGivenNames: !Oe(w.target.value) }), ce(w.target.value);
      },
      Z = (w) => {
        M(w.target.value), D && O({ ...V, invalidLastName: !Oe(w.target.value) }), ce(w.target.value);
      },
      G = (w) => {
        const N = nt(w.target.value);
        p(N), D && O({ ...V, invalidVin: !Pe(N) }), ce(N);
      },
      ke = (w) => {
        h(w.target.value), D && O({ ...V, invalidLicencePlate: !Le(w.target.value) }), ce(w.target.value);
      },
      J = (w) => {
        const N = w.key;
        N !== 'Escape' && (m || v || l || r || f) ? S(!0) : N !== 'Escape' && !m && S(!1);
      },
      le = () => {
        i(!1), q();
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(xe, {
          id: 'opt-out-of-paper-modal',
          title: d('notifications.optOutPaperModal.title'),
          hasFooter: !0,
          primaryBtnProps: {
            label: d('notifications.optOutPaperModal.primaryButtonLabel'),
            onClick: ae,
            disabled: x || X,
          },
          hasSecondaryBtn: !0,
          secondaryBtnProps: { label: d('notifications.optOutPaperModal.secondaryButtonLabel'), onClick: z },
          open: a,
          onClose: z,
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs('p', {
                children: [e.jsx('span', { className: 'required', children: '*' }), ' ', d('disclaimer')],
              }),
              e.jsx('p', { children: d('notifications.optOutPaperModal.form.descriptionOne') }),
              e.jsx('p', { children: d('notifications.optOutPaperModal.form.descriptionTwo') }),
              te &&
                e.jsx(U, {
                  isOpen: te,
                  setIsOpen: K,
                  variant: 'inPage',
                  type: 'critical',
                  description: d('errorsMsg.genericErrMsg'),
                }),
              se &&
                e.jsx(U, {
                  isOpen: se,
                  setIsOpen: R,
                  variant: 'inPage',
                  type: 'critical',
                  description: d('errorsMsg.gBizFailErrorMsg'),
                }),
              e.jsx(fe, {
                type: 'text',
                label: d('notifications.optOutPaperModal.form.givenNames.label'),
                id: 'given-name',
                required: !0,
                value: v,
                onChange: oe,
                maxlength: Ze,
                error: (I || A) && V.invalidGivenNames ? d('errorsMsg.invalidGivenNames') : '',
                onKeyUp: J,
              }),
              e.jsx(fe, {
                type: 'text',
                label: d('notifications.optOutPaperModal.form.lastName.label'),
                id: 'last-name',
                required: !0,
                value: l,
                onChange: Z,
                maxlength: Ze,
                error: (I || A) && V.invalidLastName ? d('errorsMsg.invalidLastName') : '',
                onKeyUp: J,
              }),
              e.jsx(fe, {
                type: 'text',
                label: d('notifications.optOutPaperModal.form.vin.label'),
                id: 'vin-number',
                required: !0,
                value: r,
                maxlength: 6,
                onChange: G,
                error: (I || A) && V.invalidVin ? d('errorsMsg.invalidVin') : '',
                hasTooltipModal: !0,
                tooltipBody: e.jsx(ct, { listContent: d('notifications.tooltip.vin.listOne', { returnObjects: !0 }) }),
                tooltipTitle: d('notifications.tooltip.vin.title'),
                isTooltipModalOpen: u,
                setIsTooltipModalOpen: c,
                onFocus: ne,
                onBlur: B,
                onKeyUp: J,
              }),
              e.jsx(fe, {
                type: 'text',
                label: d('notifications.optOutPaperModal.form.licence.label'),
                id: 'licence-plate',
                required: !0,
                value: f,
                onChange: ke,
                error: (I || A) && V.invalidLicencePlate ? d('errorsMsg.invalidLicence') : '',
                onFocus: ne,
                onBlur: B,
                onKeyUp: J,
              }),
            ],
          }),
        }),
        e.jsx(Te, { isOpen: n, setIsOpen: E, handleDiscardFormChanges: le }),
      ],
    });
  };
function Wt() {
  const { t: a, i18n: i } = be(),
    g = at(),
    { renderMetadata: d } = St(),
    { getSession: s, refreshSessionCookie: u } = je(),
    c = t.useRef(null),
    [n, E] = t.useState(!1),
    [m, k] = t.useState(!1),
    [y, S] = t.useState(!1),
    [v, o] = t.useState(!1),
    [l, M] = t.useState(!1),
    [r, p] = t.useState(!1),
    [f, h] = t.useState(!1),
    [x, b] = t.useState(!1),
    [I, C] = t.useState(!1),
    [A, F] = t.useState(!0),
    [_, P] = t.useState(!1),
    [V, O] = t.useState(!1),
    [X, W] = t.useState(!1),
    [D, ee] = t.useState(!1),
    [te, K] = t.useState(!1),
    [se, R] = t.useState(!0),
    [q, z] = t.useState(!0),
    [ae, ce] = t.useState(''),
    [ie, ne] = t.useState([{ value: '', checked: !1 }]),
    [B, oe] = t.useState([{ value: '', checked: !1 }]),
    [Z, G] = t.useState(!0),
    [ke, J] = t.useState(!1),
    [le, w] = t.useState(!0),
    [N, re] = t.useState([]),
    [H, $] = t.useState([]),
    [de, Me] = Be(['session', 'language']),
    [Fe] = kt();
  t.useEffect(() => {
    const T = Fe.get('l');
    T === 'f'
      ? (i.changeLanguage('fr-CA'), Me('language', 'fr-CA'))
      : T === 'e'
      ? (i.changeLanguage('en-CA'), Me('language', 'en-CA'))
      : xt(de.language);
  }, []),
    t.useEffect(() => {
      d(), J(!0);
    }, [de.language]),
    t.useEffect(() => {
      J(!1),
        R(!0),
        et(de)
          ? (Q.getReminderDetails({ params: { session: s() } })
              .then((T) => {
                u(s()), G(!1);
                const {
                    isEmailActive: Y,
                    isLeadTime2wksActive: he,
                    isLeadTime4wksActive: ge,
                    isLeadTime6wksActive: me,
                  } = T.data.reminderPreference,
                  pe = !Y && !he && !ge && !me;
                re([!!(pe || Y), !1, !!(pe || he), !!ge, !!me]), pe && z(!1);
              })
              .catch((T) => {
                console.log(T), G(!1), K(!0);
              }),
            w(!0),
            Q.getAllVehicles({ params: { session: s(), lang: de.language } })
              .then((T) => {
                console.log('Vehicle List received', T.data), w(!1), $(T.data.vehicles);
              })
              .catch((T) => {
                var Y;
                w(!1), ((Y = T.response) == null ? void 0 : Y.status) === 403 ? g('/authentication') : K(!0);
              }))
          : g('/authentication');
    }, [ke]),
    t.useEffect(() => {
      H.length > 0 ? F(!1) : F(!0);
    }, [H]),
    t.useEffect(() => {
      I && H.length === 0 && z(!0);
    }, [H, I]),
    t.useEffect(() => {
      r &&
        y &&
        setTimeout(() => {
          W(!0), S(!1), ee(!0);
        }, 2e3),
        r && (C(!1), h(!1), b(!1));
    }, [r, y, D]),
    t.useEffect(() => {
      I && (p(!1), h(!1), b(!1), ee(!1));
    }, [I]),
    t.useEffect(() => {
      f && (p(!1), C(!1), b(!1));
    }, [f]),
    t.useEffect(() => {
      x && (p(!1), C(!1), h(!1));
    }, [x]);
  const we = () => {
      c && c.current && c.current.scrollIntoView({ behavior: 'smooth' });
    },
    Ne = () => {
      c && c.current && c.current.scrollIntoView({ behavior: 'smooth' });
    },
    Ee = () => {
      const T = B.find((Y) => Y.checked);
      A ? z(!0) : ie[0].checked && T ? (z(!1), k(!1)) : z(!0);
    },
    De = () => {
      var T, Y, he, ge, me;
      et(de) || g('/authentication'),
        o(!1),
        k(!1),
        Q.updateReminderDetails({
          session: { token: s() },
          reminderPreference: {
            isEmailActive: !!((T = ie[0]) != null && T.checked),
            isTextActive: !!((Y = ie[1]) != null && Y.checked),
            isLeadTime2wksActive: !!((he = B[0]) != null && he.checked),
            isLeadTime4wksActive: !!((ge = B[1]) != null && ge.checked),
            isLeadTime6wksActive: !!((me = B[2]) != null && me.checked),
          },
        })
          .then(() => {
            J(!0), k(!0), Ne();
          })
          .catch((pe) => {
            o(!0), console.log(pe);
          }),
        z(!0);
    },
    Ie = (T) => {
      ce(T);
    },
    qe = () => {
      K(!1), g('/authentication');
    };
  return Z
    ? e.jsx('main', { className: 'page-content', children: e.jsx(Ae, { size: 'lg' }) })
    : e.jsxs(e.Fragment, {
        children: [
          e.jsx(jt, {
            showCart: !1,
            accountOptions: a('mainNavigation.accountOptionsSignIn.options', { returnObjects: !0 }),
            signedIn: !0,
            showSearch: !1,
          }),
          e.jsxs('main', {
            ref: c,
            className: 'page-content',
            children: [
              n &&
                e.jsx(U, {
                  isOpen: n,
                  setIsOpen: E,
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
                        setIsOpen: k,
                        variant: 'inPage',
                        type: 'success',
                        description: a('notifications.toastMessages.saveChangesSuccess'),
                      }),
                    v &&
                      e.jsx(U, {
                        isOpen: v,
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
                    r &&
                      e.jsx(e.Fragment, {
                        children: e.jsx(U, {
                          isOpen: r,
                          setIsOpen: p,
                          variant: 'inPage',
                          type: 'success',
                          description: e.jsx(ye, {
                            i18nKey: 'notifications.toastMessages.addVehicleSuccess',
                            components: { strong: e.jsx('strong', {}) },
                            values: { vehicleName: ae },
                          }),
                        }),
                      }),
                    f &&
                      e.jsx(U, {
                        isOpen: f,
                        setIsOpen: h,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(ye, {
                          i18nKey: 'notifications.toastMessages.editCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: ae },
                        }),
                      }),
                    x &&
                      e.jsx(U, {
                        isOpen: x,
                        setIsOpen: b,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(ye, {
                          i18nKey: 'notifications.toastMessages.addCustomNameSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { customName: ae },
                        }),
                      }),
                    I &&
                      e.jsx(U, {
                        isOpen: I,
                        setIsOpen: C,
                        variant: 'inPage',
                        type: 'success',
                        description: e.jsx(ye, {
                          i18nKey: 'notifications.toastMessages.removeVehicleSuccess',
                          components: { strong: e.jsx('strong', {}) },
                          values: { vehicleName: ae },
                        }),
                      }),
                    e.jsx('div', {
                      className: 'padding-bottom-md',
                      children:
                        A &&
                        !le &&
                        e.jsx(U, {
                          isOpen: A && !le,
                          setIsOpen: () => {},
                          hasTimeout: !1,
                          variant: 'inPage',
                          type: 'info',
                          description: e.jsx(ye, {
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
                        e.jsx(Ce, { label: a('notifications.subsectionThree.buttonText'), onClick: () => P(!0) }),
                        le && e.jsx(Ae, { size: 'md', inModal: !0 }),
                        !le &&
                          e.jsx('div', {
                            className: 'padding-top-md',
                            children: e.jsx(Lt, {
                              vehicleInfoList: H,
                              setEditedCustomNameSuccessMsg: h,
                              setAddedCustomNameSuccessMsg: b,
                              setRemovedVehicleSuccessMsg: C,
                              getVehicleName: Ie,
                              setRefreshData: J,
                            }),
                          }),
                        e.jsx('hr', {}),
                        e.jsx('h2', { children: a('notifications.subsectionOne.heading') }),
                        e.jsx('p', { children: a('notifications.subsectionOne.subhead') }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionOne.question') }),
                        e.jsx(tt, {
                          title: a('notifications.checkboxHeading'),
                          valueArray: ['email', 'text-message'],
                          selectedOptions: ie,
                          setSelectedOptions: ne,
                          children: e.jsx(st, {
                            checkboxOptions: [
                              {
                                id: 'email',
                                label: a('notifications.subsectionOne.questionOne.options.0.label'),
                                isSelected: N[0],
                              },
                              {
                                id: 'text-message',
                                label: a('notifications.subsectionOne.questionOne.options.1.label'),
                                isSelected: N[1],
                                disabled: !0,
                              },
                            ],
                            disabledArray: [!1, se],
                            onChange: Ee,
                          }),
                        }),
                        e.jsx('h3', { children: a('notifications.subsectionOne.questionTwo.question') }),
                        e.jsx(tt, {
                          title: a('notifications.checkboxHeading'),
                          valueArray: ['two-week', 'four-week', 'six-week'],
                          selectedOptions: B,
                          setSelectedOptions: oe,
                          children: e.jsx(st, {
                            checkboxOptions: [
                              {
                                id: 'two-week',
                                label: a('notifications.subsectionOne.questionTwo.options.0.label'),
                                isSelected: N[2],
                              },
                              {
                                id: 'four-week',
                                label: a('notifications.subsectionOne.questionTwo.options.1.label'),
                                isSelected: N[3],
                              },
                              {
                                id: 'six-week',
                                label: a('notifications.subsectionOne.questionTwo.options.2.label'),
                                isSelected: N[4],
                              },
                            ],
                            onChange: Ee,
                          }),
                        }),
                        e.jsx(Ce, {
                          label: a('notifications.subsectionOne.primaryButtonLabel'),
                          disabled: q,
                          variant: 'secondary',
                          onClick: De,
                        }),
                      ],
                    }),
                    e.jsx('hr', {}),
                    l &&
                      e.jsx('div', {
                        className: 'padding-bottom-md',
                        children: e.jsx(U, {
                          isOpen: l,
                          setIsOpen: M,
                          variant: 'inPage',
                          type: 'success',
                          description: a('notifications.toastMessages.stopPaperSuccess'),
                        }),
                      }),
                    e.jsx('h3', { children: a('notifications.subsectionTwo.heading') }),
                    e.jsx('p', { children: a('notifications.subsectionTwo.subhead') }),
                    e.jsx(Ce, {
                      label: a('notifications.subsectionTwo.buttonText'),
                      variant: 'secondary',
                      onClick: () => O(!0),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(Ct, { variant: 'dark' }),
          e.jsx(_t, {
            vehicleInfoList: H,
            isAddVehicleOpen: _,
            setIsAddVehicleOpen: P,
            setAddedVehicleSuccessMsg: p,
            setFirstVehicleAdded: S,
            getVehicleName: Ie,
            setRefreshData: J,
          }),
          e.jsx(Rt, { isOptOutPaperModalOpen: V, setIsOptOutPaperModalOpen: O, setStopPaperSuccessMsg: M }),
          e.jsx(Mt, { isErrorModalOpen: te, handleErrorModalClose: qe }),
          e.jsx('div', {
            className: D ? 'feedback-fade-in' : '',
            children: e.jsx(Tt, {
              isFeedbackModalOpen: X,
              setIsFeedbackModalOpen: W,
              setFeedbackModalSuccess: E,
              scrollToTop: we,
            }),
          }),
        ],
      });
}
export { Wt as default };
