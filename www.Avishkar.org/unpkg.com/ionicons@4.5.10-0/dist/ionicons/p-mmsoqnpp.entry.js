import {
  r as t,
  g as e,
  h as i,
  c as s,
  d as n,
  H as o,
} from "./p-8298c877.js";
import { g as r, i as c, b as a, c as l, d as h } from "./p-96c8fdf3.js";
class d {
  constructor(e) {
    t(this, e), (this.mode = m(this)), (this.isVisible = !1), (this.lazy = !1);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      (this.isVisible = !0), this.loadIcon();
    });
  }
  disconnectedCallback() {
    this.io && (this.io.disconnect(), (this.io = void 0));
  }
  waitUntilVisible(t, e, i) {
    if (
      this.lazy &&
      "undefined" != typeof window &&
      window.IntersectionObserver
    ) {
      const s = (this.io = new window.IntersectionObserver(
        (t) => {
          t[0].isIntersecting && (s.disconnect(), (this.io = void 0), i());
        },
        { rootMargin: e }
      ));
      s.observe(t);
    } else i();
  }
  loadIcon() {
    if (this.isVisible) {
      const t = this.getUrl();
      t
        ? v(this.el.ownerDocument, t, "s-ion-icon").then(
            (t) => (this.svgContent = t)
          )
        : console.error("icon was not resolved");
    }
    if (!this.ariaLabel) {
      const t = r(this.getName(), this.mode, this.ios, this.md);
      t &&
        (this.ariaLabel = t
          .replace("ios-", "")
          .replace("md-", "")
          .replace(/\-/g, " "));
    }
  }
  getName() {
    return void 0 !== this.name
      ? this.name
      : this.icon && !c(this.icon)
      ? this.icon
      : void 0;
  }
  getUrl() {
    let t = a(this.src);
    return (
      t ||
      ((t = r(this.getName(), this.mode, this.ios, this.md))
        ? g(t)
        : (t = a(this.icon)) || null)
    );
  }
  render() {
    const t = this.mode || "md",
      e =
        this.flipRtl ||
        (this.ariaLabel &&
          this.ariaLabel.indexOf("arrow") > -1 &&
          !1 !== this.flipRtl);
    return i(
      o,
      {
        role: "img",
        class: Object.assign({ [`${t}`]: !0 }, w(this.color), {
          [`icon-${this.size}`]: !!this.size,
          "flip-rtl": !!e && "rtl" === this.el.ownerDocument.dir,
        }),
      },
      i(
        "div",
        this.svgContent
          ? { class: "icon-inner", innerHTML: this.svgContent }
          : { class: "icon-inner" }
      )
    );
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return s(this);
  }
  static get watchers() {
    return { name: ["loadIcon"], src: ["loadIcon"], icon: ["loadIcon"] };
  }
  static get style() {
    return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}";
  }
}
const m = (t) => e(t) || document.documentElement.getAttribute("mode") || "md",
  g = (t) => {
    return l().get(t) || n(`svg/${t}.svg`);
  },
  u = new Map(),
  v = (t, e, i) => {
    let s = u.get(e);
    return (
      s ||
        ((s = fetch(e, { cache: "force-cache" })
          .then((t) => (f(t.status) ? t.text() : Promise.resolve(null)))
          .then((e) => b(t, e, i))),
        u.set(e, s)),
      s
    );
  },
  f = (t) => t <= 299,
  b = (t, e, i) => {
    if (e) {
      const s = t.createDocumentFragment(),
        n = t.createElement("div");
      (n.innerHTML = e), s.appendChild(n);
      for (let t = n.childNodes.length - 1; t >= 0; t--)
        "svg" !== n.childNodes[t].nodeName.toLowerCase() &&
          n.removeChild(n.childNodes[t]);
      const o = n.firstElementChild;
      if (
        o &&
        "svg" === o.nodeName.toLowerCase() &&
        (i && o.setAttribute("class", i), h(o))
      )
        return n.innerHTML;
    }
    return "";
  },
  w = (t) => (t ? { "ion-color": !0, [`ion-color-${t}`]: !0 } : null);
export { d as ion_icon };
