let e;
const o = () => {
    if (!e) {
      const o = window;
      (o.Ionicons = o.Ionicons || {}),
        (e = o.Ionicons.map = o.Ionicons.map || new Map());
    }
    return e;
  },
  t = (e) => {
    const t = o();
    Object.keys(e).forEach((o) => {
      t.set(o, e[o]);
    });
  },
  s = (e, o, t, s) => (
    (o = "ios" === (o = (o || "md").toLowerCase()) ? "ios" : "md"),
    t && "ios" === o
      ? (e = t.toLowerCase())
      : s && "md" === o
      ? (e = s.toLowerCase())
      : e &&
        ((e = e.toLowerCase()),
        /^md-|^ios-|^logo-/.test(e) || (e = `${o}-${e}`)),
    "string" != typeof e || "" === e.trim()
      ? null
      : "" !== e.replace(/[a-z]|-|\d/gi, "")
      ? null
      : e
  ),
  n = (e) => ("string" == typeof e && ((e = e.trim()), r(e)) ? e : null),
  r = (e) => e.length > 0 && /(\/|\.)/.test(e),
  i = (e) => {
    if (1 === e.nodeType) {
      if ("script" === e.nodeName.toLowerCase()) return !1;
      for (let o = 0; o < e.attributes.length; o++) {
        const t = e.attributes[o].value;
        if ("string" == typeof t && 0 === t.toLowerCase().indexOf("on"))
          return !1;
      }
      for (let o = 0; o < e.childNodes.length; o++)
        if (!i(e.childNodes[o])) return !1;
    }
    return !0;
  };
export { t as a, n as b, o as c, i as d, s as g, r as i };
