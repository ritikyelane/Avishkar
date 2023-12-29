const t = window,
  e = document,
  n = {
    t: 0,
    s: "",
    raf: (t) => requestAnimationFrame(t),
    ael: (t, e, n, s) => t.addEventListener(e, n, s),
    rel: (t, e, n, s) => t.removeEventListener(e, n, s),
  },
  s = !!e.documentElement.attachShadow,
  o = (() => {
    try {
      return new CSSStyleSheet(), !0;
    } catch (t) {}
    return !1;
  })(),
  l = new WeakMap(),
  c = (t) => l.get(t),
  i = (t, e) => l.set((e.o = t), e),
  r = (t, e) => e in t,
  a = (t) => console.error(t),
  f = new Map(),
  u = t.__stencil_cssshim;
let $ = 0,
  d = !1;
const p = [],
  h = [],
  y = [],
  m = (t) => (e) => {
    t.push(e), d || ((d = !0), n.raf(b));
  },
  w = (t, e) => {
    let n = 0,
      s = 0;
    for (; n < t.length && (s = performance.now()) < e; )
      try {
        t[n++](s);
      } catch (t) {
        a(t);
      }
    n === t.length ? (t.length = 0) : 0 !== n && t.splice(0, n);
  },
  b = () => {
    $++,
      ((t) => {
        for (let e = 0; e < t.length; e++)
          try {
            t[e](performance.now());
          } catch (t) {
            a(t);
          }
        t.length = 0;
      })(p);
    const t =
      2 == (6 & n.t) ? performance.now() + 7 * Math.ceil($ * (1 / 22)) : 1 / 0;
    w(h, t),
      w(y, t),
      h.length > 0 && (y.push(...h), (h.length = 0)),
      (d = p.length + h.length + y.length > 0) ? n.raf(b) : ($ = 0);
  },
  _ = m(h),
  g = {},
  v = (t) => null != t,
  j = (t) => t.toLowerCase(),
  S = (t) => ["object", "function"].includes(typeof t),
  k = () =>
    t.CSS && t.CSS.supports && t.CSS.supports("color", "var(--c)")
      ? Promise.resolve()
      : __sc_import_ionicons("./p-f7ddb189.js"),
  R = async () => {
    {
      const n = Array.from(e.querySelectorAll("script")).find(
          (t) =>
            t.src.includes("/ionicons.esm.js") ||
            "ionicons" === t.getAttribute("data-namespace")
        ),
        s = new URL(
          ".",
          new URL(
            n.getAttribute("data-resources-url") || n.src,
            t.location.href
          )
        );
      return (
        M(s.href),
        window.customElements ||
          (await __sc_import_ionicons("./p-a0c82e31.js")),
        s.href
      );
    }
  },
  M = (n) => {
    const s = `__sc_import_${"ionicons".replace(/\s|-/g, "_")}`;
    try {
      t[s] = new Function("w", "return import(w);");
    } catch (o) {
      const l = new Map();
      t[s] = (o) => {
        const c = new URL(o, n).href;
        let i = l.get(c);
        if (!i) {
          const n = e.createElement("script");
          (n.type = "module"),
            (n.src = URL.createObjectURL(
              new Blob([`import * as m from '${c}'; window.${s}.m = m;`], {
                type: "application/javascript",
              })
            )),
            (i = new Promise((e) => {
              n.onload = () => {
                e(t[s].m), n.remove();
              };
            })),
            l.set(c, i),
            e.head.appendChild(n);
        }
        return i;
      };
    }
  },
  U = new WeakMap(),
  L = (t) => "sc-" + t,
  C = (t, e, ...n) => {
    let s,
      o = null,
      l = !1,
      c = !1,
      i = [];
    const r = (e) => {
      for (let n = 0; n < e.length; n++)
        (o = e[n]),
          Array.isArray(o)
            ? r(o)
            : null != o &&
              "boolean" != typeof o &&
              ((l = "function" != typeof t && !S(o)) && (o = String(o)),
              l && c
                ? (i[i.length - 1].l += o)
                : i.push(l ? { t: 0, l: o } : o),
              (c = l));
    };
    if ((r(n), e)) {
      s = e.key || void 0;
      {
        const t = e.className || e.class;
        t &&
          (e.class =
            "object" != typeof t
              ? t
              : Object.keys(t)
                  .filter((e) => t[e])
                  .join(" "));
      }
    }
    if ("function" == typeof t) return t(e, i, x);
    const a = { t: 0, i: t, u: i.length > 0 ? i : null, $: void 0, p: e };
    return (a.h = s), a;
  },
  O = {},
  x = {
    forEach: (t, e) => t.map(A).forEach(e),
    map: (t, e) => t.map(A).map(e).map(E),
  },
  A = (t) => ({
    vattrs: t.p,
    vchildren: t.u,
    vkey: t.h,
    vname: t._,
    vtag: t.i,
    vtext: t.l,
  }),
  E = (t) => ({
    t: 0,
    p: t.vattrs,
    u: t.vchildren,
    h: t.vkey,
    _: t.vname,
    i: t.vtag,
    l: t.vtext,
  }),
  P = (t, e, s, o, l, c) => {
    if (s !== o)
      if ("class" !== e || l)
        if ("style" === e) {
          for (const e in s)
            (o && null != o[e]) ||
              (e.includes("-") ? t.style.removeProperty(e) : (t.style[e] = ""));
          for (const e in o)
            (s && o[e] === s[e]) ||
              (e.includes("-")
                ? t.style.setProperty(e, o[e])
                : (t.style[e] = o[e]));
        } else if ("key" === e);
        else if ("ref" === e) o && o(t);
        else if (e.startsWith("on") && !r(t, e))
          (e = r(t, j(e)) ? j(e.substring(2)) : j(e[2]) + e.substring(3)),
            s && n.rel(t, e, s, !1),
            o && n.ael(t, e, o, !1);
        else {
          const n = r(t, e),
            s = S(o);
          if ((n || (s && null !== o)) && !l)
            try {
              t[e] = null == o && -1 === t.tagName.indexOf("-") ? "" : o;
            } catch (t) {}
          null == o || !1 === o
            ? t.removeAttribute(e)
            : (!n || 4 & c || l) &&
              !s &&
              ((o = !0 === o ? "" : o.toString()), t.setAttribute(e, o));
        }
      else {
        const e = T(s),
          n = T(t.className).filter((t) => !e.includes(t));
        t.className = n.concat(T(o).filter((t) => !n.includes(t))).join(" ");
      }
  },
  T = (t) => (t ? t.split(" ") : []),
  F = (t, e, n, s) => {
    const o = 11 === e.$.nodeType && e.$.host ? e.$.host : e.$,
      l = (t && t.p) || g,
      c = e.p || g;
    for (s in l) null == c[s] && null != l[s] && P(o, s, l[s], void 0, n, e.t);
    for (s in c) P(o, s, l[s], c[s], n, e.t);
  };
let H, W;
const q = (t, n, s) => {
    let o,
      l,
      c = n.u[s],
      i = 0;
    if (v(c.l)) c.$ = e.createTextNode(c.l);
    else if (
      ((o = c.$ = e.createElement(c.i)),
      F(null, c, !1),
      v(H) && o["s-si"] !== H && o.classList.add((o["s-si"] = H)),
      c.u)
    )
      for (i = 0; i < c.u.length; ++i) (l = q(t, c, i)) && o.appendChild(l);
    return c.$;
  },
  B = (t, e, n, s, o, l) => {
    let c,
      i = t;
    for (i.shadowRoot && j(i.tagName) === W && (i = i.shadowRoot); o <= l; ++o)
      s[o] && (c = q(null, n, o)) && ((s[o].$ = c), i.insertBefore(c, e));
  },
  N = (t, e, n, s) => {
    for (; e <= n; ++e) v(t[e]) && ((s = t[e].$), D(t[e], !0), s.remove());
  },
  V = (t, e) => t.i === e.i && t.h === e.h,
  z = (t, e) => {
    const n = (e.$ = t.$),
      s = t.u,
      o = e.u;
    v(e.l)
      ? t.l !== e.l && (n.textContent = e.l)
      : (F(t, e, !1),
        v(s) && v(o)
          ? ((t, e, n, s) => {
              let o,
                l,
                c = 0,
                i = 0,
                r = 0,
                a = 0,
                f = e.length - 1,
                u = e[0],
                $ = e[f],
                d = s.length - 1,
                p = s[0],
                h = s[d];
              for (; c <= f && i <= d; )
                if (null == u) u = e[++c];
                else if (null == $) $ = e[--f];
                else if (null == p) p = s[++i];
                else if (null == h) h = s[--d];
                else if (V(u, p)) z(u, p), (u = e[++c]), (p = s[++i]);
                else if (V($, h)) z($, h), ($ = e[--f]), (h = s[--d]);
                else if (V(u, h))
                  z(u, h),
                    t.insertBefore(u.$, $.$.nextSibling),
                    (u = e[++c]),
                    (h = s[--d]);
                else if (V($, p))
                  z($, p), t.insertBefore($.$, u.$), ($ = e[--f]), (p = s[++i]);
                else {
                  for (r = -1, a = c; a <= f; ++a)
                    if (e[a] && v(e[a].h) && e[a].h === p.h) {
                      r = a;
                      break;
                    }
                  r >= 0
                    ? ((l = e[r]).i !== p.i
                        ? (o = q(e && e[i], n, r))
                        : (z(l, p), (e[r] = void 0), (o = l.$)),
                      (p = s[++i]))
                    : ((o = q(e && e[i], n, i)), (p = s[++i])),
                    o && u.$.parentNode.insertBefore(o, u.$);
                }
              c > f
                ? B(t, null == s[d + 1] ? null : s[d + 1].$, n, s, i, d)
                : i > d && N(e, c, f);
            })(n, s, e, o)
          : v(o)
          ? (v(t.l) && (n.textContent = ""), B(n, null, e, o, 0, o.length - 1))
          : v(s) && N(s, 0, s.length - 1));
  },
  D = (t, e) => {
    t &&
      (t.p && t.p.ref && t.p.ref(e ? null : t.$),
      t.u &&
        t.u.forEach((t) => {
          D(t, e);
        }));
  },
  G = async (t, e) => {
    if (t && t[e])
      try {
        await t[e]();
      } catch (t) {
        a(t);
      }
  },
  I = async (t, e, n, s) => {
    e.t |= 16;
    const o = e.o;
    _(() => J(t, e, n, o, s));
  },
  J = (t, n, o, l, c) => {
    (n.t &= -17),
      c &&
        ((t, n) => {
          const o = ((t, s, o, l) => {
            let c = L(n.g),
              i = f.get(c);
            if (((t = 11 === t.nodeType ? t : e), i))
              if ("string" == typeof i) {
                let n,
                  s = U.get((t = t.head || t));
                if ((s || U.set(t, (s = new Set())), !s.has(c))) {
                  if (u) {
                    const t = (n = u.createHostStyle(l, c, i))["s-sc"];
                    t && ((c = t), (s = null));
                  } else (n = e.createElement("style")).innerHTML = i;
                  t.appendChild(n), s && s.add(c);
                }
              } else
                t.adoptedStyleSheets.includes(i) ||
                  (t.adoptedStyleSheets = [...t.adoptedStyleSheets, i]);
            return c;
          })(s && t.shadowRoot ? t.shadowRoot : t.getRootNode(), 0, 0, t);
          10 & n.t && ((t["s-sc"] = o), t.classList.add(o + "-h"));
        })(t, o),
      (n.t |= 4);
    try {
      ((t, e, n, s) => {
        const o = e.v || { t: 0 };
        (W = j(t.tagName)),
          ((t) => t && t.i === O)(s) ? (s.i = null) : (s = C(null, null, s)),
          n.j && ((s.p = s.p || {}), n.j.forEach(([e, n]) => (s.p[n] = t[e]))),
          (s.t |= 4),
          (e.v = s),
          (s.$ = o.$ = t.shadowRoot || t),
          (H = t["s-sc"]),
          z(o, s);
      })(t, n, o, l.render());
    } catch (t) {
      a(t);
    }
    (n.t &= -5), u && u.updateHost(t), (n.t |= 2), K(t, n);
  },
  K = (t, s) => {
    if (!t["s-al"]) {
      const o = s.S;
      512 & s.t ||
        ((s.t |= 512),
        t.classList.add("hydrated"),
        s.k(t),
        o ||
          (e.documentElement.classList.add("hydrated"),
          setTimeout(() => (n.t |= 2), 999)));
    }
  },
  Q = (t, e, n) => {
    if (e.R) {
      t.watchers && (e.M = t.watchers);
      const s = Object.entries(e.R),
        o = t.prototype;
      if (
        (s.forEach(([t, [s]]) => {
          (31 & s || (2 & n && 32 & s)) &&
            Object.defineProperty(o, t, {
              get() {
                return ((t, e) => c(t).U.get(e))(this, t);
              },
              set(n) {
                ((t, e, n, s) => {
                  const o = c(this),
                    l = o.L,
                    i = o.U.get(e),
                    r = o.t;
                  if (
                    !(
                      (n = ((t, e) =>
                        null == t || S(t)
                          ? t
                          : 4 & e
                          ? "false" !== t && ("" === t || !!t)
                          : 1 & e
                          ? String(t)
                          : t)(n, s.R[e][0])) === i ||
                      (8 & r && void 0 !== i)
                    ) &&
                    (o.U.set(e, n), o.o)
                  ) {
                    if (s.M && 1 == (9 & r)) {
                      const t = s.M[e];
                      t &&
                        t.forEach((t) => {
                          try {
                            o.o[t].call(o.o, n, i, e);
                          } catch (t) {
                            a(t);
                          }
                        });
                    }
                    2 == (22 & r) && I(l, o, s, !1);
                  }
                })(0, t, n, e);
              },
              configurable: !0,
              enumerable: !0,
            });
        }),
        1 & n)
      ) {
        const n = new Map();
        (o.attributeChangedCallback = function (t, e, s) {
          const o = n.get(t);
          this[o] = (null !== s || "boolean" != typeof this[o]) && s;
        }),
          (t.observedAttributes = s
            .filter(([t, e]) => 15 & e[0])
            .map(([t, s]) => {
              const o = s[1] || t;
              return n.set(o, t), 512 & s[0] && e.j.push([t, o]), o;
            }));
      }
    }
    return t;
  },
  X = (t) => c(t).C,
  Y = (t) => {
    G(t, "connectedCallback");
  },
  Z = (i, r = {}) => {
    const $ = [],
      d = r.exclude || [],
      p = e.head,
      h = t.customElements,
      y = p.querySelector("meta[charset]"),
      m = e.createElement("style");
    Object.assign(n, r),
      (n.s = new URL(r.resourcesUrl || "/", t.location.href).href),
      r.syncQueue && (n.t |= 4),
      i.forEach((t) =>
        t[1].forEach((e) => {
          const i = { t: e[0], g: e[1], R: e[2], O: e[3], j: [], M: {} };
          !s && 1 & i.t && (i.t |= 8);
          const r = i.g;
          (i.A = t[0]),
            d.includes(r) ||
              h.get(r) ||
              ($.push(r),
              h.define(
                r,
                Q(
                  class extends HTMLElement {
                    constructor(t) {
                      super(t),
                        ((t) => {
                          {
                            const e = { t: 0, L: t, U: new Map() };
                            (e.P = new Promise((t) => (e.k = t))), l.set(t, e);
                          }
                        })((t = this)),
                        1 & i.t &&
                          (s
                            ? t.attachShadow({ mode: "open" })
                            : "shadowRoot" in t || (t.shadowRoot = t));
                    }
                    connectedCallback() {
                      ((t, e) => {
                        if (0 == (1 & n.t)) {
                          const n = c(t);
                          1 & n.t ||
                            ((n.t |= 1),
                            e.R &&
                              Object.entries(e.R).forEach(([e, [n]]) => {
                                if (31 & n && t.hasOwnProperty(e)) {
                                  const n = t[e];
                                  delete t[e], (t[e] = n);
                                }
                              }),
                            (async (t, e, n, s, l) => {
                              if (0 == (256 & e.t)) {
                                (e.t |= 256),
                                  (l = await ((t) =>
                                    __sc_import_ionicons(
                                      `./${t.A}.entry.js`
                                    ).then(
                                      (e) => e[t.g.replace(/-/g, "_")],
                                      a
                                    ))(n)).isProxied ||
                                    ((n.M = l.watchers),
                                    Q(l, n, 2),
                                    (l.isProxied = !0)),
                                  (e.t |= 8);
                                try {
                                  new l(e);
                                } catch (t) {
                                  a(t);
                                }
                                if (
                                  ((e.t &= -9),
                                  Y(e.o),
                                  !l.isStyleRegistered && l.style)
                                ) {
                                  let t = l.style,
                                    e = L(n.g);
                                  8 & n.t &&
                                    (t = await __sc_import_ionicons(
                                      "./p-549b16dd.js"
                                    ).then((n) => n.scopeCss(t, e, !1))),
                                    ((t, e) => {
                                      let n = f.get(t);
                                      o
                                        ? (n =
                                            n || new CSSStyleSheet()).replace(e)
                                        : (n = e),
                                        f.set(t, n);
                                    })(e, t),
                                    (l.isStyleRegistered = !0);
                                }
                              }
                              I(t, e, n, !0);
                            })(t, n, e)),
                            Y(n.o);
                        }
                      })(this, i);
                    }
                    disconnectedCallback() {
                      ((t) => {
                        if (0 == (1 & n.t)) {
                          const e = c(t);
                          u && u.removeHost(t), G(e.o, "disconnectedCallback");
                        }
                      })(this);
                    }
                    "s-init"() {
                      const t = c(this);
                      t.o && K(this, t);
                    }
                    "s-hmr"(t) {}
                    forceUpdate() {
                      I(this, c(this), i, !1);
                    }
                    componentOnReady() {
                      return c(this).P;
                    }
                  },
                  i,
                  1
                )
              ));
        })
      ),
      (m.innerHTML = $ + "{visibility:hidden}.hydrated{visibility:inherit}"),
      m.setAttribute("data-styles", ""),
      p.insertBefore(m, y ? y.nextSibling : p.firstChild);
  },
  tt = (e) => {
    const s = new URL(e, n.s);
    return s.origin !== t.location.origin ? s.href : s.pathname;
  },
  et = (t) => c(t).L;
export {
  O as H,
  k as a,
  Z as b,
  et as c,
  tt as d,
  X as g,
  C as h,
  R as p,
  i as r,
};
