/**START of jsapi.js**/
if (!window["googleLT_"]) {
  window["googleLT_"] = new Date().getTime();
}
if (!window["google"]) {
  window["google"] = {};
}
if (!window["google"]["loader"]) {
  window["google"]["loader"] = {};
  google.loader.ServiceBase = "http://www.google.com/uds";
  google.loader.GoogleApisBase = "http://ajax.googleapis.com/ajax";
  google.loader.ApiKey = "notsupplied";
  google.loader.KeyVerified = true;
  google.loader.LoadFailure = false;
  google.loader.Secure = false;
  google.loader.GoogleLocale = "www.google.com";
  google.loader.ClientLocation = {
    latitude: 45.95,
    longitude: -66.667,
    address: {
      city: "Fredericton",
      region: "NB",
      country: "Canada",
      country_code: "CA",
    },
  };
  google.loader.AdditionalParams = "";
  (function () {
    var d = encodeURIComponent,
      g = window,
      h = document;
    function l(a, b) {
      return (a.load = b);
    }
    var m = "replace",
      n = "charAt",
      q = "getTime",
      r = "setTimeout",
      t = "push",
      u = "indexOf",
      v = "ServiceBase",
      w = "name",
      x = "length",
      y = "prototype",
      z = "loader",
      A = "substring",
      B = "join",
      C = "toLowerCase";
    function D(a) {
      return a in E ? E[a] : (E[a] = -1 != navigator.userAgent[C]()[u](a));
    }
    var E = {};
    function F(a, b) {
      var c = function () {};
      c.prototype = b[y];
      a.U = b[y];
      a.prototype = new c();
    }
    function G(a, b, c) {
      var e = Array[y].slice.call(arguments, 2) || [];
      return function () {
        return a.apply(b, e.concat(Array[y].slice.call(arguments)));
      };
    }
    function H(a) {
      a = Error(a);
      a.toString = function () {
        return this.message;
      };
      return a;
    }
    function I(a, b) {
      for (var c = a.split(/\./), e = g, f = 0; f < c[x] - 1; f++)
        e[c[f]] || (e[c[f]] = {}), (e = e[c[f]]);
      e[c[c[x] - 1]] = b;
    }
    function J(a, b, c) {
      a[b] = c;
    }
    if (!K) var K = I;
    if (!L) var L = J;
    google[z].v = {};
    K("google.loader.callbacks", google[z].v);
    var M = {},
      N = {};
    google[z].eval = {};
    K("google.loader.eval", google[z].eval);
    l(google, function (a, b, c) {
      function e(a) {
        var b = a.split(".");
        if (2 < b[x]) throw H("Module: '" + a + "' not found!");
        "undefined" != typeof b[1] &&
          ((f = b[0]), (c.packages = c.packages || []), c.packages[t](b[1]));
      }
      var f = a;
      c = c || {};
      if (
        a instanceof Array ||
        (a &&
          "object" == typeof a &&
          "function" == typeof a[B] &&
          "function" == typeof a.reverse)
      )
        for (var k = 0; k < a[x]; k++) e(a[k]);
      else e(a);
      if ((a = M[":" + f])) {
        c && !c.language && c.locale && (c.language = c.locale);
        c &&
          "string" == typeof c.callback &&
          ((k = c.callback),
          k.match(/^[[\]A-Za-z0-9._]+$/) &&
            ((k = g.eval(k)), (c.callback = k)));
        if ((k = c && null != c.callback) && !a.s(b))
          throw H("Module: '" + f + "' must be loaded before DOM onLoad!");
        k
          ? a.m(b, c)
            ? g[r](c.callback, 0)
            : a.load(b, c)
          : a.m(b, c) || a.load(b, c);
      } else throw H("Module: '" + f + "' not found!");
    });
    K("google.load", google.load);
    google.T = function (a, b) {
      b
        ? (0 == O[x] &&
            (P(g, "load", Q),
            (!D("msie") && !D("safari") && !D("konqueror") && D("mozilla")) ||
            g.opera
              ? g.addEventListener("DOMContentLoaded", Q, !1)
              : D("msie")
              ? h.write(
                  "<script defer onreadystatechange='google.loader.domReady()' src=//:>\x3c/script>"
                )
              : (D("safari") || D("konqueror")) && g[r](S, 10)),
          O[t](a))
        : P(g, "load", a);
    };
    K("google.setOnLoadCallback", google.T);
    function P(a, b, c) {
      if (a.addEventListener) a.addEventListener(b, c, !1);
      else if (a.attachEvent) a.attachEvent("on" + b, c);
      else {
        var e = a["on" + b];
        a["on" + b] = null != e ? aa([c, e]) : c;
      }
    }
    function aa(a) {
      return function () {
        for (var b = 0; b < a[x]; b++) a[b]();
      };
    }
    var O = [];
    google[z].P = function () {
      var a = g.event.srcElement;
      "complete" == a.readyState &&
        ((a.onreadystatechange = null), a.parentNode.removeChild(a), Q());
    };
    K("google.loader.domReady", google[z].P);
    var ba = { loaded: !0, complete: !0 };
    function S() {
      ba[h.readyState] ? Q() : 0 < O[x] && g[r](S, 10);
    }
    function Q() {
      for (var a = 0; a < O[x]; a++) O[a]();
      O.length = 0;
    }
    google[z].d = function (a, b, c) {
      if (c) {
        var e;
        "script" == a
          ? ((e = h.createElement("script")),
            (e.type = "text/javascript"),
            (e.src = b))
          : "css" == a &&
            ((e = h.createElement("link")),
            (e.type = "text/css"),
            (e.href = b),
            (e.rel = "stylesheet"));
        (a = h.getElementsByTagName("head")[0]) ||
          (a = h.body.parentNode.appendChild(h.createElement("head")));
        a.appendChild(e);
      } else
        "script" == a
          ? h.write(
              '<script src="' + b + '" type="text/javascript">\x3c/script>'
            )
          : "css" == a &&
            h.write(
              '<link href="' + b + '" type="text/css" rel="stylesheet"></link>'
            );
    };
    K("google.loader.writeLoadTag", google[z].d);
    google[z].Q = function (a) {
      N = a;
    };
    K("google.loader.rfm", google[z].Q);
    google[z].S = function (a) {
      for (var b in a)
        "string" == typeof b &&
          b &&
          ":" == b[n](0) &&
          !M[b] &&
          (M[b] = new T(b[A](1), a[b]));
    };
    K("google.loader.rpl", google[z].S);
    google[z].R = function (a) {
      if ((a = a.specs) && a[x])
        for (var b = 0; b < a[x]; ++b) {
          var c = a[b];
          "string" == typeof c
            ? (M[":" + c] = new U(c))
            : ((c = new V(c[w], c.baseSpec, c.customSpecs)),
              (M[":" + c[w]] = c));
        }
    };
    K("google.loader.rm", google[z].R);
    google[z].loaded = function (a) {
      M[":" + a.module].l(a);
    };
    K("google.loader.loaded", google[z].loaded);
    google[z].O = function () {
      return (
        "qid=" +
        (new Date()[q]().toString(16) +
          Math.floor(1e7 * Math.random()).toString(16))
      );
    };
    K("google.loader.createGuidArg_", google[z].O);
    I("google_exportSymbol", I);
    I("google_exportProperty", J);
    google[z].a = {};
    K("google.loader.themes", google[z].a);
    google[z].a.I = "//www.google.com/cse/style/look/bubblegum.css";
    L(google[z].a, "BUBBLEGUM", google[z].a.I);
    google[z].a.K = "//www.google.com/cse/style/look/greensky.css";
    L(google[z].a, "GREENSKY", google[z].a.K);
    google[z].a.J = "//www.google.com/cse/style/look/espresso.css";
    L(google[z].a, "ESPRESSO", google[z].a.J);
    google[z].a.M = "//www.google.com/cse/style/look/shiny.css";
    L(google[z].a, "SHINY", google[z].a.M);
    google[z].a.L = "//www.google.com/cse/style/look/minimalist.css";
    L(google[z].a, "MINIMALIST", google[z].a.L);
    google[z].a.N = "//www.google.com/cse/style/look/v2/default.css";
    L(google[z].a, "V2_DEFAULT", google[z].a.N);
    function U(a) {
      this.b = a;
      this.o = [];
      this.n = {};
      this.e = {};
      this.f = {};
      this.j = !0;
      this.c = -1;
    }
    U[y].g = function (a, b) {
      var c = "";
      void 0 != b &&
        (void 0 != b.language && (c += "&hl=" + d(b.language)),
        void 0 != b.nocss && (c += "&output=" + d("nocss=" + b.nocss)),
        void 0 != b.nooldnames && (c += "&nooldnames=" + d(b.nooldnames)),
        void 0 != b.packages && (c += "&packages=" + d(b.packages)),
        null != b.callback && (c += "&async=2"),
        void 0 != b.style && (c += "&style=" + d(b.style)),
        void 0 != b.noexp && (c += "&noexp=true"),
        void 0 != b.other_params && (c += "&" + b.other_params));
      if (!this.j) {
        google[this.b] &&
          google[this.b].JSHash &&
          (c += "&sig=" + d(google[this.b].JSHash));
        var e = [],
          f;
        for (f in this.n) ":" == f[n](0) && e[t](f[A](1));
        for (f in this.e) ":" == f[n](0) && this.e[f] && e[t](f[A](1));
        c += "&have=" + d(e[B](","));
      }
      return (
        google[z][v] +
        "/?file=" +
        this.b +
        "&v=" +
        a +
        google[z].AdditionalParams +
        c
      );
    };
    U[y].t = function (a) {
      var b = null;
      a && (b = a.packages);
      var c = null;
      if (b)
        if ("string" == typeof b) c = [a.packages];
        else if (b[x])
          for (c = [], a = 0; a < b[x]; a++)
            "string" == typeof b[a] && c[t](b[a][m](/^\s*|\s*$/, "")[C]());
      c || (c = ["default"]);
      b = [];
      for (a = 0; a < c[x]; a++) this.n[":" + c[a]] || b[t](c[a]);
      return b;
    };
    l(U[y], function (a, b) {
      var c = this.t(b),
        e = b && null != b.callback;
      if (e) var f = new W(b.callback);
      for (var k = [], p = c[x] - 1; 0 <= p; p--) {
        var s = c[p];
        e && f.B(s);
        if (this.e[":" + s]) c.splice(p, 1), e && this.f[":" + s][t](f);
        else k[t](s);
      }
      if (c[x]) {
        b && b.packages && (b.packages = c.sort()[B](","));
        for (p = 0; p < k[x]; p++)
          (s = k[p]), (this.f[":" + s] = []), e && this.f[":" + s][t](f);
        if (
          b ||
          null == N[":" + this.b] ||
          null == N[":" + this.b].versions[":" + a] ||
          google[z].AdditionalParams ||
          !this.j
        )
          (b && b.autoloaded) || google[z].d("script", this.g(a, b), e);
        else {
          c = N[":" + this.b];
          google[this.b] = google[this.b] || {};
          for (var R in c.properties)
            R && ":" == R[n](0) && (google[this.b][R[A](1)] = c.properties[R]);
          google[z].d("script", google[z][v] + c.path + c.js, e);
          c.css && google[z].d("css", google[z][v] + c.path + c.css, e);
        }
        this.j &&
          ((this.j = !1),
          (this.c = new Date()[q]()),
          1 != this.c % 100 && (this.c = -1));
        for (p = 0; p < k[x]; p++) (s = k[p]), (this.e[":" + s] = !0);
      }
    });
    U[y].l = function (a) {
      -1 != this.c &&
        (X("al_" + this.b, "jl." + (new Date()[q]() - this.c), !0),
        (this.c = -1));
      this.o = this.o.concat(a.components);
      google[z][this.b] || (google[z][this.b] = {});
      google[z][this.b].packages = this.o.slice(0);
      for (var b = 0; b < a.components[x]; b++) {
        this.n[":" + a.components[b]] = !0;
        this.e[":" + a.components[b]] = !1;
        var c = this.f[":" + a.components[b]];
        if (c) {
          for (var e = 0; e < c[x]; e++) c[e].C(a.components[b]);
          delete this.f[":" + a.components[b]];
        }
      }
    };
    U[y].m = function (a, b) {
      return 0 == this.t(b)[x];
    };
    U[y].s = function () {
      return !0;
    };
    function W(a) {
      this.F = a;
      this.q = {};
      this.r = 0;
    }
    W[y].B = function (a) {
      this.r++;
      this.q[":" + a] = !0;
    };
    W[y].C = function (a) {
      this.q[":" + a] &&
        ((this.q[":" + a] = !1), this.r--, 0 == this.r && g[r](this.F, 0));
    };
    function V(a, b, c) {
      this.name = a;
      this.D = b;
      this.p = c;
      this.u = this.h = !1;
      this.k = [];
      google[z].v[this[w]] = G(this.l, this);
    }
    F(V, U);
    l(V[y], function (a, b) {
      var c = b && null != b.callback;
      c
        ? (this.k[t](b.callback),
          (b.callback = "google.loader.callbacks." + this[w]))
        : (this.h = !0);
      (b && b.autoloaded) || google[z].d("script", this.g(a, b), c);
    });
    V[y].m = function (a, b) {
      return b && null != b.callback ? this.u : this.h;
    };
    V[y].l = function () {
      this.u = !0;
      for (var a = 0; a < this.k[x]; a++) g[r](this.k[a], 0);
      this.k = [];
    };
    var Y = function (a, b) {
      return a.string
        ? d(a.string) + "=" + d(b)
        : a.regex
        ? b[m](/(^.*$)/, a.regex)
        : "";
    };
    V[y].g = function (a, b) {
      return this.G(this.w(a), a, b);
    };
    V[y].G = function (a, b, c) {
      var e = "";
      a.key && (e += "&" + Y(a.key, google[z].ApiKey));
      a.version && (e += "&" + Y(a.version, b));
      b = google[z].Secure && a.ssl ? a.ssl : a.uri;
      if (null != c)
        for (var f in c)
          a.params[f]
            ? (e += "&" + Y(a.params[f], c[f]))
            : "other_params" == f
            ? (e += "&" + c[f])
            : "base_domain" == f &&
              (b = "http://" + c[f] + a.uri[A](a.uri[u]("/", 7)));
      google[this[w]] = {};
      -1 == b[u]("?") && e && (e = "?" + e[A](1));
      return b + e;
    };
    V[y].s = function (a) {
      return this.w(a).deferred;
    };
    V[y].w = function (a) {
      if (this.p)
        for (var b = 0; b < this.p[x]; ++b) {
          var c = this.p[b];
          if (new RegExp(c.pattern).test(a)) return c;
        }
      return this.D;
    };
    function T(a, b) {
      this.b = a;
      this.i = b;
      this.h = !1;
    }
    F(T, U);
    l(T[y], function (a, b) {
      this.h = !0;
      google[z].d("script", this.g(a, b), !1);
    });
    T[y].m = function () {
      return this.h;
    };
    T[y].l = function () {};
    T[y].g = function (a, b) {
      if (!this.i.versions[":" + a]) {
        if (this.i.aliases) {
          var c = this.i.aliases[":" + a];
          c && (a = c);
        }
        if (!this.i.versions[":" + a])
          throw H(
            "Module: '" + this.b + "' with version '" + a + "' not found!"
          );
      }
      return (
        google[z].GoogleApisBase +
        "/libs/" +
        this.b +
        "/" +
        a +
        "/" +
        this.i.versions[":" + a][
          b && b.uncompressed ? "uncompressed" : "compressed"
        ]
      );
    };
    T[y].s = function () {
      return !1;
    };
    var ca = !1,
      Z = [],
      da = new Date()[q](),
      fa = function () {
        ca || (P(g, "unload", ea), (ca = !0));
      },
      ga = function (a, b) {
        fa();
        if (
          !(
            google[z].Secure ||
            (google[z].Options && !1 !== google[z].Options.csi)
          )
        ) {
          for (var c = 0; c < a[x]; c++)
            a[c] = d(a[c][C]()[m](/[^a-z0-9_.]+/g, "_"));
          for (c = 0; c < b[x]; c++)
            b[c] = d(b[c][C]()[m](/[^a-z0-9_.]+/g, "_"));
          g[r](
            G(
              $,
              null,
              "//gg.google.com/csi?s=uds&v=2&action=" +
                a[B](",") +
                "&it=" +
                b[B](",")
            ),
            1e4
          );
        }
      },
      X = function (a, b, c) {
        c
          ? ga([a], [b])
          : (fa(),
            Z[t]("r" + Z[x] + "=" + d(a + (b ? "|" + b : ""))),
            g[r](ea, 5 < Z[x] ? 0 : 15e3));
      },
      ea = function () {
        if (Z[x]) {
          var a = google[z][v];
          0 == a[u]("http:") && (a = a[m](/^http:/, "https:"));
          $(
            a +
              "/stats?" +
              Z[B]("&") +
              "&nc=" +
              new Date()[q]() +
              "_" +
              (new Date()[q]() - da)
          );
          Z.length = 0;
        }
      },
      $ = function (a) {
        var b = new Image(),
          c = $.H++;
        $.A[c] = b;
        b.onload = b.onerror = function () {
          delete $.A[c];
        };
        b.src = a;
        b = null;
      };
    $.A = {};
    $.H = 0;
    I("google.loader.recordCsiStat", ga);
    I("google.loader.recordStat", X);
    I("google.loader.createImageForLogging", $);
  })();
  google.loader.rm({
    specs: [
      {
        name: "books",
        baseSpec: {
          uri: "http://books.google.com/books/api.js",
          ssl: "https://encrypted.google.com/books/api.js",
          key: { string: "key" },
          version: { string: "v" },
          deferred: true,
          params: {
            callback: { string: "callback" },
            language: { string: "hl" },
          },
        },
      },
      "feeds",
      {
        name: "friendconnect",
        baseSpec: {
          uri: "http://www.google.com/friendconnect/script/friendconnect.js",
          ssl: "https://www.google.com/friendconnect/script/friendconnect.js",
          key: { string: "key" },
          version: { string: "v" },
          deferred: false,
          params: {},
        },
      },
      "spreadsheets",
      "identitytoolkit",
      "gdata",
      "ima",
      "visualization",
      {
        name: "sharing",
        baseSpec: {
          uri: "http://www.google.com/s2/sharing/js",
          ssl: null,
          key: { string: "key" },
          version: { string: "v" },
          deferred: false,
          params: { language: { string: "hl" } },
        },
      },
      {
        name: "maps",
        baseSpec: {
          uri: "http://maps.google.com/maps?file\u003dgoogleapi",
          ssl: "https://maps-api-ssl.google.com/maps?file\u003dgoogleapi",
          key: { string: "key" },
          version: { string: "v" },
          deferred: true,
          params: {
            callback: { regex: "callback\u003d$1\u0026async\u003d2" },
            language: { string: "hl" },
          },
        },
        customSpecs: [
          {
            uri: "http://maps.googleapis.com/maps/api/js",
            ssl: "https://maps.googleapis.com/maps/api/js",
            version: { string: "v" },
            deferred: true,
            params: {
              callback: { string: "callback" },
              language: { string: "hl" },
            },
            pattern: "^(3|3..*)$",
          },
        ],
      },
      "search",
      "annotations_v2",
      "payments",
      "wave",
      "orkut",
      {
        name: "annotations",
        baseSpec: {
          uri: "http://www.google.com/reviews/scripts/annotations_bootstrap.js",
          ssl: null,
          key: { string: "key" },
          version: { string: "v" },
          deferred: true,
          params: {
            callback: { string: "callback" },
            language: { string: "hl" },
            country: { string: "gl" },
          },
        },
      },
      "language",
      "earth",
      "picker",
      "ads",
      "elements",
    ],
  });
  google.loader.rfm({
    ":search": {
      versions: { ":1": "1", ":1.0": "1" },
      path: "/api/search/1.0/28ae2b20598e87432c64a154583c2fc6/",
      js: "default+en.I.js",
      css: "default+en.css",
      properties: {
        ":JSHash": "28ae2b20598e87432c64a154583c2fc6",
        ":NoOldNames": false,
        ":Version": "1.0",
      },
    },
    ":language": {
      versions: { ":1": "1", ":1.0": "1" },
      path: "/api/language/1.0/7b15944f20c0d2d7b2d2d87406a8916b/",
      js: "default+en.I.js",
      properties: {
        ":JSHash": "7b15944f20c0d2d7b2d2d87406a8916b",
        ":Version": "1.0",
      },
    },
    ":feeds": {
      versions: { ":1": "1", ":1.0": "1" },
      path: "/api/feeds/1.0/482f2817cdf8982edf2e5669f9e3a627/",
      js: "default+en.I.js",
      css: "default+en.css",
      properties: {
        ":JSHash": "482f2817cdf8982edf2e5669f9e3a627",
        ":Version": "1.0",
      },
    },
    ":spreadsheets": {
      versions: { ":0": "1", ":0.4": "1" },
      path: "/api/spreadsheets/0.4/87ff7219e9f8a8164006cbf28d5e911a/",
      js: "default.I.js",
      properties: {
        ":JSHash": "87ff7219e9f8a8164006cbf28d5e911a",
        ":Version": "0.4",
      },
    },
    ":ima": {
      versions: { ":3": "1", ":3.0": "1" },
      path: "/api/ima/3.0/28a914332232c9a8ac0ae8da68b1006e/",
      js: "default.I.js",
      properties: {
        ":JSHash": "28a914332232c9a8ac0ae8da68b1006e",
        ":Version": "3.0",
      },
    },
    ":wave": {
      versions: { ":1": "1", ":1.0": "1" },
      path: "/api/wave/1.0/3b6f7573ff78da6602dda5e09c9025bf/",
      js: "default.I.js",
      properties: {
        ":JSHash": "3b6f7573ff78da6602dda5e09c9025bf",
        ":Version": "1.0",
      },
    },
    ":annotations": {
      versions: { ":1": "1", ":1.0": "1" },
      path: "/api/annotations/1.0/ee29f1a32c343fea662c6e1b58ec6d0d/",
      js: "default+en.I.js",
      properties: {
        ":JSHash": "ee29f1a32c343fea662c6e1b58ec6d0d",
        ":Version": "1.0",
      },
    },
    ":earth": {
      versions: { ":1": "1", ":1.0": "1" },
      path: "/api/earth/1.0/db22e5693e0a8de1f62f3536f5a8d7d3/",
      js: "default.I.js",
      properties: {
        ":JSHash": "db22e5693e0a8de1f62f3536f5a8d7d3",
        ":Version": "1.0",
      },
    },
    ":picker": {
      versions: { ":1": "1", ":1.0": "1" },
      path: "/api/picker/1.0/1c635e91b9d0c082c660a42091913907/",
      js: "default.I.js",
      css: "default.css",
      properties: {
        ":JSHash": "1c635e91b9d0c082c660a42091913907",
        ":Version": "1.0",
      },
    },
  });
  google.loader.rpl({
    ":scriptaculous": {
      versions: {
        ":1.8.3": {
          uncompressed: "scriptaculous.js",
          compressed: "scriptaculous.js",
        },
        ":1.9.0": {
          uncompressed: "scriptaculous.js",
          compressed: "scriptaculous.js",
        },
        ":1.8.2": {
          uncompressed: "scriptaculous.js",
          compressed: "scriptaculous.js",
        },
        ":1.8.1": {
          uncompressed: "scriptaculous.js",
          compressed: "scriptaculous.js",
        },
      },
      aliases: { ":1.8": "1.8.3", ":1": "1.9.0", ":1.9": "1.9.0" },
    },
    ":yui": {
      versions: {
        ":2.6.0": {
          uncompressed: "build/yuiloader/yuiloader.js",
          compressed: "build/yuiloader/yuiloader-min.js",
        },
        ":2.9.0": {
          uncompressed: "build/yuiloader/yuiloader.js",
          compressed: "build/yuiloader/yuiloader-min.js",
        },
        ":2.7.0": {
          uncompressed: "build/yuiloader/yuiloader.js",
          compressed: "build/yuiloader/yuiloader-min.js",
        },
        ":2.8.0r4": {
          uncompressed: "build/yuiloader/yuiloader.js",
          compressed: "build/yuiloader/yuiloader-min.js",
        },
        ":2.8.2r1": {
          uncompressed: "build/yuiloader/yuiloader.js",
          compressed: "build/yuiloader/yuiloader-min.js",
        },
        ":2.8.1": {
          uncompressed: "build/yuiloader/yuiloader.js",
          compressed: "build/yuiloader/yuiloader-min.js",
        },
        ":3.3.0": {
          uncompressed: "build/yui/yui.js",
          compressed: "build/yui/yui-min.js",
        },
      },
      aliases: {
        ":3": "3.3.0",
        ":2": "2.9.0",
        ":2.7": "2.7.0",
        ":2.8.2": "2.8.2r1",
        ":2.6": "2.6.0",
        ":2.9": "2.9.0",
        ":2.8": "2.8.2r1",
        ":2.8.0": "2.8.0r4",
        ":3.3": "3.3.0",
      },
    },
    ":swfobject": {
      versions: {
        ":2.1": {
          uncompressed: "swfobject_src.js",
          compressed: "swfobject.js",
        },
        ":2.2": {
          uncompressed: "swfobject_src.js",
          compressed: "swfobject.js",
        },
      },
      aliases: { ":2": "2.2" },
    },
    ":ext-core": {
      versions: {
        ":3.1.0": {
          uncompressed: "ext-core-debug.js",
          compressed: "ext-core.js",
        },
        ":3.0.0": {
          uncompressed: "ext-core-debug.js",
          compressed: "ext-core.js",
        },
      },
      aliases: { ":3": "3.1.0", ":3.0": "3.0.0", ":3.1": "3.1.0" },
    },
    ":webfont": {
      versions: {
        ":1.0.28": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.27": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.29": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.12": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.13": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.14": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.15": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.10": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.11": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.2": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.1": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.0": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.6": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.19": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.5": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.18": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.4": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.17": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.16": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.3": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.9": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.21": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.22": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.25": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.26": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.23": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
        ":1.0.24": {
          uncompressed: "webfont_debug.js",
          compressed: "webfont.js",
        },
      },
      aliases: { ":1": "1.0.29", ":1.0": "1.0.29" },
    },
    ":mootools": {
      versions: {
        ":1.3.1": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.1.1": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.3.0": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.3.2": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.1.2": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.2.3": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.2.4": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.2.1": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.2.2": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.2.5": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.4.0": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.4.1": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
        ":1.4.2": {
          uncompressed: "mootools.js",
          compressed: "mootools-yui-compressed.js",
        },
      },
      aliases: {
        ":1": "1.1.2",
        ":1.11": "1.1.1",
        ":1.4": "1.4.2",
        ":1.3": "1.3.2",
        ":1.2": "1.2.5",
        ":1.1": "1.1.2",
      },
    },
    ":jqueryui": {
      versions: {
        ":1.6.0": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.0": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.2": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.1": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.9": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.15": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.14": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.7": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.13": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.8": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.12": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.7.2": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.5": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.11": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.7.3": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.10": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.6": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.7.0": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.7.1": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.4": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.5.3": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.5.2": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.17": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
        ":1.8.16": {
          uncompressed: "jquery-ui.js",
          compressed: "jquery-ui.min.js",
        },
      },
      aliases: {
        ":1.8": "1.8.17",
        ":1.7": "1.7.3",
        ":1.6": "1.6.0",
        ":1": "1.8.17",
        ":1.5": "1.5.3",
        ":1.8.3": "1.8.4",
      },
    },
    ":chrome-frame": {
      versions: {
        ":1.0.2": {
          uncompressed: "CFInstall.js",
          compressed: "CFInstall.min.js",
        },
        ":1.0.1": {
          uncompressed: "CFInstall.js",
          compressed: "CFInstall.min.js",
        },
        ":1.0.0": {
          uncompressed: "CFInstall.js",
          compressed: "CFInstall.min.js",
        },
      },
      aliases: { ":1": "1.0.2", ":1.0": "1.0.2" },
    },
    ":dojo": {
      versions: {
        ":1.3.1": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.6.1": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.3.0": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.1.1": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.3.2": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.6.0": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.2.3": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.7.2": {
          uncompressed: "dojo/dojo.js.uncompressed.js",
          compressed: "dojo/dojo.js",
        },
        ":1.7.0": {
          uncompressed: "dojo/dojo.js.uncompressed.js",
          compressed: "dojo/dojo.js",
        },
        ":1.7.1": {
          uncompressed: "dojo/dojo.js.uncompressed.js",
          compressed: "dojo/dojo.js",
        },
        ":1.4.3": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.5.1": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.5.0": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.2.0": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.4.0": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
        ":1.4.1": {
          uncompressed: "dojo/dojo.xd.js.uncompressed.js",
          compressed: "dojo/dojo.xd.js",
        },
      },
      aliases: {
        ":1.7": "1.7.2",
        ":1": "1.6.1",
        ":1.6": "1.6.1",
        ":1.5": "1.5.1",
        ":1.4": "1.4.3",
        ":1.3": "1.3.2",
        ":1.2": "1.2.3",
        ":1.1": "1.1.1",
      },
    },
    ":jquery": {
      versions: {
        ":1.6.2": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.3.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.6.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.3.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.6.4": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.6.3": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.3.2": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.6.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.2.3": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.7.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.7.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.2.6": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.4.3": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.4.4": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.5.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.5.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.4.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.5.2": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.4.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
        ":1.4.2": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
      },
      aliases: {
        ":1.7": "1.7.1",
        ":1.6": "1.6.4",
        ":1": "1.7.1",
        ":1.5": "1.5.2",
        ":1.4": "1.4.4",
        ":1.3": "1.3.2",
        ":1.2": "1.2.6",
      },
    },
    ":prototype": {
      versions: {
        ":1.7.0.0": {
          uncompressed: "prototype.js",
          compressed: "prototype.js",
        },
        ":1.6.0.2": {
          uncompressed: "prototype.js",
          compressed: "prototype.js",
        },
        ":1.6.1.0": {
          uncompressed: "prototype.js",
          compressed: "prototype.js",
        },
        ":1.6.0.3": {
          uncompressed: "prototype.js",
          compressed: "prototype.js",
        },
      },
      aliases: {
        ":1.7": "1.7.0.0",
        ":1.6.1": "1.6.1.0",
        ":1": "1.7.0.0",
        ":1.6": "1.6.1.0",
        ":1.7.0": "1.7.0.0",
        ":1.6.0": "1.6.0.3",
      },
    },
  });
}
/**END of jsapi.js**/
