(() => {
  var t = {
      757: (t, e, n) => {
        t.exports = n(666);
      },
      666: (t) => {
        var e = (function (t) {
          "use strict";
          var e,
            n = Object.prototype,
            r = n.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function s(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (t) {
            s = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function u(t, e, n, r) {
            var o = e && e.prototype instanceof g ? e : g,
              i = Object.create(o.prototype),
              a = new k(r || []);
            return (
              (i._invoke = (function (t, e, n) {
                var r = f;
                return function (o, i) {
                  if (r === d) throw new Error("Generator is already running");
                  if (r === p) {
                    if ("throw" === o) throw i;
                    return D();
                  }
                  for (n.method = o, n.arg = i; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var c = x(a, n);
                      if (c) {
                        if (c === v) continue;
                        return c;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === f) throw ((r = p), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = d;
                    var s = l(t, e, n);
                    if ("normal" === s.type) {
                      if (((r = n.done ? p : h), s.arg === v)) continue;
                      return { value: s.arg, done: n.done };
                    }
                    "throw" === s.type &&
                      ((r = p), (n.method = "throw"), (n.arg = s.arg));
                  }
                };
              })(t, n, a)),
              i
            );
          }
          function l(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = u;
          var f = "suspendedStart",
            h = "suspendedYield",
            d = "executing",
            p = "completed",
            v = {};
          function g() {}
          function y() {}
          function m() {}
          var w = {};
          s(w, i, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            _ = b && b(b(I([])));
          _ && _ !== n && r.call(_, i) && (w = _);
          var E = (m.prototype = g.prototype = Object.create(w));
          function L(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function j(t, e) {
            function n(o, i, a, c) {
              var s = l(t[o], t, i);
              if ("throw" !== s.type) {
                var u = s.arg,
                  f = u.value;
                return f && "object" == typeof f && r.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        n("next", t, a, c);
                      },
                      function (t) {
                        n("throw", t, a, c);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (u.value = t), a(u);
                      },
                      function (t) {
                        return n("throw", t, a, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            this._invoke = function (t, r) {
              function i() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function x(t, n) {
            var r = t.iterator[n.method];
            if (r === e) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  x(t, n),
                  "throw" === n.method)
                )
                  return v;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return v;
            }
            var o = l(r, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[t.resultName] = i.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  v)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function S(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function P(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function k(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(S, this),
              this.reset(!0);
          }
          function I(t) {
            if (t) {
              var n = t[i];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  a = function n() {
                    for (; ++o < t.length; )
                      if (r.call(t, o))
                        return (n.value = t[o]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (a.next = a);
              }
            }
            return { next: D };
          }
          function D() {
            return { value: e, done: !0 };
          }
          return (
            (y.prototype = m),
            s(E, "constructor", m),
            s(m, "constructor", y),
            (y.displayName = s(m, c, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === y || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, m)
                  : ((t.__proto__ = m), s(t, c, "GeneratorFunction")),
                (t.prototype = Object.create(E)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            L(j.prototype),
            s(j.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = j),
            (t.async = function (e, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new j(u(e, n, r, o), i);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            L(E),
            s(E, c, "Generator"),
            s(E, i, function () {
              return this;
            }),
            s(E, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = [];
              for (var n in t) e.push(n);
              return (
                e.reverse(),
                function n() {
                  for (; e.length; ) {
                    var r = e.pop();
                    if (r in t) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (t.values = I),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(P),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function o(r, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = r),
                    o && ((n.method = "next"), (n.arg = e)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var s = r.call(a, "catchLoc"),
                      u = r.call(a, "finallyLoc");
                    if (s && u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (
                    o.tryLoc <= this.prev &&
                    r.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  v
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), P(n), v;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      P(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: I(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  v
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = e)
            : Function("r", "regeneratorRuntime = r")(e);
        }
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      try {
        self["workbox:window:6.5.2"] && _();
      } catch (t) {}
      function t(t, e) {
        return new Promise(function (n) {
          var r = new MessageChannel();
          (r.port1.onmessage = function (t) {
            n(t.data);
          }),
            t.postMessage(e, [r.port2]);
        });
      }
      function e(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function r(t, n) {
        var r;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (r = (function (t, n) {
              if (t) {
                if ("string" == typeof t) return e(t, n);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(t)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? e(t, n)
                    : void 0
                );
              }
            })(t)) ||
            (n && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var o = 0;
            return function () {
              return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (r = t[Symbol.iterator]()).next.bind(r);
      }
      try {
        self["workbox:core:6.5.2"] && _();
      } catch (t) {}
      var o = function () {
        var t = this;
        this.promise = new Promise(function (e, n) {
          (t.resolve = e), (t.reject = n);
        });
      };
      function i(t, e) {
        var n = location.href;
        return new URL(t, n).href === new URL(e, n).href;
      }
      var a = function (t, e) {
        (this.type = t), Object.assign(this, e);
      };
      function c(t, e, n) {
        return n
          ? e
            ? e(t)
            : t
          : ((t && t.then) || (t = Promise.resolve(t)), e ? t.then(e) : t);
      }
      function s() {}
      var u = { type: "SKIP_WAITING" };
      function l(t, e) {
        if (!e) return t && t.then ? t.then(s) : Promise.resolve();
      }
      var f = (function (e) {
        var n, r;
        function s(t, n) {
          var r, s;
          return (
            void 0 === n && (n = {}),
            ((r = e.call(this) || this).nn = {}),
            (r.tn = 0),
            (r.rn = new o()),
            (r.en = new o()),
            (r.on = new o()),
            (r.un = 0),
            (r.an = new Set()),
            (r.cn = function () {
              var t = r.fn,
                e = t.installing;
              r.tn > 0 ||
              !i(e.scriptURL, r.sn.toString()) ||
              performance.now() > r.un + 6e4
                ? ((r.vn = e), t.removeEventListener("updatefound", r.cn))
                : ((r.hn = e), r.an.add(e), r.rn.resolve(e)),
                ++r.tn,
                e.addEventListener("statechange", r.ln);
            }),
            (r.ln = function (t) {
              var e = r.fn,
                n = t.target,
                o = n.state,
                i = n === r.vn,
                c = { sw: n, isExternal: i, originalEvent: t };
              !i && r.mn && (c.isUpdate = !0),
                r.dispatchEvent(new a(o, c)),
                "installed" === o
                  ? (r.wn = self.setTimeout(function () {
                      "installed" === o &&
                        e.waiting === n &&
                        r.dispatchEvent(new a("waiting", c));
                    }, 200))
                  : "activating" === o &&
                    (clearTimeout(r.wn), i || r.en.resolve(n));
            }),
            (r.dn = function (t) {
              var e = r.hn,
                n = e !== navigator.serviceWorker.controller;
              r.dispatchEvent(
                new a("controlling", {
                  isExternal: n,
                  originalEvent: t,
                  sw: e,
                  isUpdate: r.mn,
                })
              ),
                n || r.on.resolve(e);
            }),
            (r.gn =
              ((s = function (t) {
                var e = t.data,
                  n = t.ports,
                  o = t.source;
                return c(r.getSW(), function () {
                  r.an.has(o) &&
                    r.dispatchEvent(
                      new a("message", {
                        data: e,
                        originalEvent: t,
                        ports: n,
                        sw: o,
                      })
                    );
                });
              }),
              function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                try {
                  return Promise.resolve(s.apply(this, t));
                } catch (t) {
                  return Promise.reject(t);
                }
              })),
            (r.sn = t),
            (r.nn = n),
            navigator.serviceWorker.addEventListener("message", r.gn),
            r
          );
        }
        (r = e),
          ((n = s).prototype = Object.create(r.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = r);
        var f,
          h = s.prototype;
        return (
          (h.register = function (t) {
            var e = (void 0 === t ? {} : t).immediate,
              n = void 0 !== e && e;
            try {
              var r = this;
              return (function (t, e) {
                var n = t();
                return n && n.then ? n.then(e) : e();
              })(
                function () {
                  if (!n && "complete" !== document.readyState)
                    return l(
                      new Promise(function (t) {
                        return window.addEventListener("load", t);
                      })
                    );
                },
                function () {
                  return (
                    (r.mn = Boolean(navigator.serviceWorker.controller)),
                    (r.yn = r.pn()),
                    c(r.bn(), function (t) {
                      (r.fn = t),
                        r.yn &&
                          ((r.hn = r.yn),
                          r.en.resolve(r.yn),
                          r.on.resolve(r.yn),
                          r.yn.addEventListener("statechange", r.ln, {
                            once: !0,
                          }));
                      var e = r.fn.waiting;
                      return (
                        e &&
                          i(e.scriptURL, r.sn.toString()) &&
                          ((r.hn = e),
                          Promise.resolve()
                            .then(function () {
                              r.dispatchEvent(
                                new a("waiting", {
                                  sw: e,
                                  wasWaitingBeforeRegister: !0,
                                })
                              );
                            })
                            .then(function () {})),
                        r.hn && (r.rn.resolve(r.hn), r.an.add(r.hn)),
                        r.fn.addEventListener("updatefound", r.cn),
                        navigator.serviceWorker.addEventListener(
                          "controllerchange",
                          r.dn
                        ),
                        r.fn
                      );
                    })
                  );
                }
              );
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (h.update = function () {
            try {
              return this.fn ? l(this.fn.update()) : void 0;
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (h.getSW = function () {
            return void 0 !== this.hn
              ? Promise.resolve(this.hn)
              : this.rn.promise;
          }),
          (h.messageSW = function (e) {
            try {
              return c(this.getSW(), function (n) {
                return t(n, e);
              });
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (h.messageSkipWaiting = function () {
            this.fn && this.fn.waiting && t(this.fn.waiting, u);
          }),
          (h.pn = function () {
            var t = navigator.serviceWorker.controller;
            return t && i(t.scriptURL, this.sn.toString()) ? t : void 0;
          }),
          (h.bn = function () {
            try {
              var t = this;
              return (function (t, e) {
                try {
                  var n = t();
                } catch (t) {
                  return e(t);
                }
                return n && n.then ? n.then(void 0, e) : n;
              })(
                function () {
                  return c(
                    navigator.serviceWorker.register(t.sn, t.nn),
                    function (e) {
                      return (t.un = performance.now()), e;
                    }
                  );
                },
                function (t) {
                  throw t;
                }
              );
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (f = [
            {
              key: "active",
              get: function () {
                return this.en.promise;
              },
            },
            {
              key: "controlling",
              get: function () {
                return this.on.promise;
              },
            },
          ]) &&
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            })(s.prototype, f),
          s
        );
      })(
        (function () {
          function t() {
            this.Pn = new Map();
          }
          var e = t.prototype;
          return (
            (e.addEventListener = function (t, e) {
              this.Sn(t).add(e);
            }),
            (e.removeEventListener = function (t, e) {
              this.Sn(t).delete(e);
            }),
            (e.dispatchEvent = function (t) {
              t.target = this;
              for (var e, n = r(this.Sn(t.type)); !(e = n()).done; )
                (0, e.value)(t);
            }),
            (e.Sn = function (t) {
              return (
                this.Pn.has(t) || this.Pn.set(t, new Set()), this.Pn.get(t)
              );
            }),
            t
          );
        })()
      );
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function d(t, e, n) {
        return (
          e && h(t.prototype, e),
          n && h(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function p(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            s = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(s) : Promise.resolve(s).then(r, o);
      }
      function v(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              p(i, r, o, a, c, "next", t);
            }
            function c(t) {
              p(i, r, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      var g = n(757),
        y = n.n(g);
      let m, w;
      const b = new WeakMap(),
        E = new WeakMap(),
        L = new WeakMap(),
        j = new WeakMap(),
        x = new WeakMap();
      let S = {
        get(t, e, n) {
          if (t instanceof IDBTransaction) {
            if ("done" === e) return E.get(t);
            if ("objectStoreNames" === e) return t.objectStoreNames || L.get(t);
            if ("store" === e)
              return n.objectStoreNames[1]
                ? void 0
                : n.objectStore(n.objectStoreNames[0]);
          }
          return k(t[e]);
        },
        set: (t, e, n) => ((t[e] = n), !0),
        has: (t, e) =>
          (t instanceof IDBTransaction && ("done" === e || "store" === e)) ||
          e in t,
      };
      function P(t) {
        return "function" == typeof t
          ? (e = t) !== IDBDatabase.prototype.transaction ||
            "objectStoreNames" in IDBTransaction.prototype
            ? (
                w ||
                (w = [
                  IDBCursor.prototype.advance,
                  IDBCursor.prototype.continue,
                  IDBCursor.prototype.continuePrimaryKey,
                ])
              ).includes(e)
              ? function (...t) {
                  return e.apply(I(this), t), k(b.get(this));
                }
              : function (...t) {
                  return k(e.apply(I(this), t));
                }
            : function (t, ...n) {
                const r = e.call(I(this), t, ...n);
                return L.set(r, t.sort ? t.sort() : [t]), k(r);
              }
          : (t instanceof IDBTransaction &&
              (function (t) {
                if (E.has(t)) return;
                const e = new Promise((e, n) => {
                  const r = () => {
                      t.removeEventListener("complete", o),
                        t.removeEventListener("error", i),
                        t.removeEventListener("abort", i);
                    },
                    o = () => {
                      e(), r();
                    },
                    i = () => {
                      n(
                        t.error || new DOMException("AbortError", "AbortError")
                      ),
                        r();
                    };
                  t.addEventListener("complete", o),
                    t.addEventListener("error", i),
                    t.addEventListener("abort", i);
                });
                E.set(t, e);
              })(t),
            (n = t),
            (
              m ||
              (m = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
            ).some((t) => n instanceof t)
              ? new Proxy(t, S)
              : t);
        var e, n;
      }
      function k(t) {
        if (t instanceof IDBRequest)
          return (function (t) {
            const e = new Promise((e, n) => {
              const r = () => {
                  t.removeEventListener("success", o),
                    t.removeEventListener("error", i);
                },
                o = () => {
                  e(k(t.result)), r();
                },
                i = () => {
                  n(t.error), r();
                };
              t.addEventListener("success", o), t.addEventListener("error", i);
            });
            return (
              e
                .then((e) => {
                  e instanceof IDBCursor && b.set(e, t);
                })
                .catch(() => {}),
              x.set(e, t),
              e
            );
          })(t);
        if (j.has(t)) return j.get(t);
        const e = P(t);
        return e !== t && (j.set(t, e), x.set(e, t)), e;
      }
      const I = (t) => x.get(t);
      function D(
        t,
        e,
        { blocked: n, upgrade: r, blocking: o, terminated: i } = {}
      ) {
        const a = indexedDB.open(t, e),
          c = k(a);
        return (
          r &&
            a.addEventListener("upgradeneeded", (t) => {
              r(k(a.result), t.oldVersion, t.newVersion, k(a.transaction));
            }),
          n && a.addEventListener("blocked", () => n()),
          c
            .then((t) => {
              i && t.addEventListener("close", () => i()),
                o && t.addEventListener("versionchange", () => o());
            })
            .catch(() => {}),
          c
        );
      }
      const O = ["get", "getKey", "getAll", "getAllKeys", "count"],
        B = ["put", "add", "delete", "clear"],
        T = new Map();
      function W(t, e) {
        if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e)
          return;
        if (T.get(e)) return T.get(e);
        const n = e.replace(/FromIndex$/, ""),
          r = e !== n,
          o = B.includes(n);
        if (
          !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
          (!o && !O.includes(n))
        )
          return;
        const i = async function (t, ...e) {
          const i = this.transaction(t, o ? "readwrite" : "readonly");
          let a = i.store;
          return (
            r && (a = a.index(e.shift())),
            (await Promise.all([a[n](...e), o && i.done]))[0]
          );
        };
        return T.set(e, i), i;
      }
      var M;
      (M = S),
        (S = {
          ...M,
          get: (t, e, n) => W(t, e) || M.get(t, e, n),
          has: (t, e) => !!W(t, e) || M.has(t, e),
        });
      var N = (function () {
          var t = v(
            y().mark(function t() {
              return y().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        D("jate", 1, {
                          upgrade: function (t) {
                            t.objectStoreNames.contains("jate")
                              ? console.log("jate database already exists")
                              : (t.createObjectStore("jate", {
                                  keyPath: "id",
                                  autoIncrement: !0,
                                }),
                                console.log("jate database created"));
                          },
                        })
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        A = (function () {
          var t = v(
            y().mark(function t(e) {
              var n, r, o, i, a;
              return y().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          console.log("Updating the DB"),
                          (t.next = 4),
                          D("jate", 1)
                        );
                      case 4:
                        return (
                          (n = t.sent),
                          (r = n.transaction("jate", "readwrite")),
                          (o = r.objectStore("jate")),
                          (i = o.put({ id: 1, data: e })),
                          (t.next = 10),
                          i
                        );
                      case 10:
                        return (
                          (a = t.sent),
                          console.log("Updated Key:", a),
                          t.abrupt("return", a)
                        );
                      case 15:
                        (t.prev = 15), (t.t0 = t.catch(0)), console.error(t.t0);
                      case 18:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 15]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        C = (function () {
          var t = v(
            y().mark(function t() {
              var e, n, r, o, i;
              return y().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          console.log("Getting all content"),
                          (t.next = 4),
                          D("jate", 1)
                        );
                      case 4:
                        return (
                          (e = t.sent),
                          (n = e.transaction("jate", "readonly")),
                          (r = n.objectStore("jate")),
                          (o = r.get({ id: 1 })),
                          console.log(o),
                          (t.next = 12),
                          o
                        );
                      case 12:
                        return (
                          (i = t.sent),
                          console.log("All Data", i),
                          t.abrupt("return", i)
                        );
                      case 17:
                        (t.prev = 17), (t.t0 = t.catch(0)), console.error(t.t0);
                      case 20:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 17]]
              );
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
      N();
      var U,
        G = d(function t() {
          var e = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = localStorage.getItem("content");
          if ("undefined" == typeof CodeMirror)
            throw new Error("CodeMirror is not loaded");
          (this.editor = CodeMirror(document.querySelector("#main"), {
            value: "",
            mode: "javascript",
            theme: "monokai",
            lineNumbers: !0,
            lineWrapping: !0,
            autofocus: !0,
            indentUnit: 2,
            tabSize: 2,
          })),
            C().then(function (t) {
              console.info("Loaded data from IndexedDB, injecting into editor"),
                e.editor.setValue(
                  t ||
                    n ||
                    "\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n"
                );
            }),
            this.editor.on("change", function () {
              localStorage.setItem("content", e.editor.getValue());
            }),
            this.editor.on("blur", function () {
              console.log("The editor has lost focus"),
                A(localStorage.getItem("content"));
            });
        }),
        R = document.querySelector("#main");
      (R.innerHTML = ""),
        void 0 === new G() &&
          ((U = document.createElement("div")).classList.add("spinner"),
          (U.innerHTML =
            '\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  '),
          R.appendChild(U)),
        "serviceWorker" in navigator
          ? new f("/src-sw.js").register()
          : console.error("Service workers are not supported in this browser.");
    })();
})();
