// src/constant.ts
var IS_PHONE = globalThis.window.innerWidth <= 960;
var DEFAULT_SETTINGS_AUTOPLAY = true;
var DEFAULT_SETTINGS_SWITCH_TIME = 60;
var DEFAULT_SETTINGS_START_DATE = "2023-07-05";
var METADATA = globalThis.sena_metadata ?? {
  isPhpEnv: false,
  views: 0,
  isRecorded: false,
  lastChecked: 0,
  lastUpdated: 0
};
var GITHUB_URL = "https://github.com";
var REPO_URL = `${GITHUB_URL}/biyuehu/HimenoSena`;
var LEAVE_MESSAGES_DOCS = `${REPO_URL}/blob/main/docs/messages.md`;
var BACKGROUND_LIST = [
  "https://img0.huoshen80.top/i/2025/11/11/6912c10fb847c.png",
  "https://img0.huoshen80.top/i/2025/11/11/6912c1307f2b8.png",
  "https://img0.huoshen80.top/i/2025/11/11/6912c16f34120.png",
  "https://img0.huoshen80.top/i/2025/11/11/6912c198278bc.png",
  "https://img0.huoshen80.top/i/2025/11/11/6912c1b1cb865.png",
  "https://img0.huoshen80.top/i/2025/11/11/6912c1b6e7998.png",
  "https://img0.huoshen80.top/i/2025/11/11/6912c1b89c6d3.png"
];
var BRIGHT_BACKGROUND_LIST = [
  0,
  5,
  6
].map((index) => BACKGROUND_LIST[index]);
var QUOTES_LIST = [
  [
    "\u82DF\u5229\u661F\u594F\u751F\u6B7B\u4EE5\uFF0C\u5C82\u56E0\u65B0\u5C9B\u907F\u8D8B\u4E4B"
  ],
  [
    "\u79C1\u306F\u3042\u306A\u305F\u306B\u8A00\u308F\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3053\u3068\u304C\u3042\u308B\u2014\u2014\u3042\u306A\u305F\u304C\u597D\u304D\u3067\u3059\u3002",
    "\u6211\u6709\u4EF6\u4E8B\u5FC5\u987B\u8981\u544A\u8BC9\u5979\u2014\u2014\u6211\u559C\u6B22\u4F60\u3002"
  ],
  [
    "\u3082\u3057\u3082\u3001\u304B\u3064\u3066\u306E\u53EB\u3073\u304C\u8AB0\u306B\u3082\u8FD4\u4E8B\u3092\u3082\u3089\u3048\u306A\u304B\u3063\u305F\u306E\u306A\u3089\u3001\u3082\u3046\u4E00\u5EA6\u53EB\u3093\u3067\u307F\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3057\u3082\u3001\u304B\u3064\u3066\u306E\u544A\u767D\u304C\u8AB0\u306B\u3082\u7B54\u3048\u3089\u308C\u306A\u304B\u3063\u305F\u306E\u306A\u3089\u2026\u3082\u3046\u4E00\u5EA6\u544A\u767D\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",
    "\u5982\u679C\u66FE\u7ECF\u7684\u547C\u558A\u65E0\u4EBA\u56DE\u5E94\uFF0C\u90A3\u5C31\u518D\u547C\u5524\u4E00\u6B21\u5427\u3002\u5982\u679C\u66FE\u7ECF\u7684\u544A\u767D\u65E0\u4EBA\u7B54\u590D\u2026\u2026\u90A3\u5C31\uFF0C\u518D\u544A\u767D\u4E00\u6B21\u5427\u3002"
  ],
  [
    "\u305F\u3060\u3057\u3001\u6B21\u306B\u4F55\u304B\u3092\u66F8\u3053\u3046\u3068\u3059\u308B\u6642\u306F\u3001\u3042\u306A\u305F\u306E\u5FC3\u306B\u5C4A\u304F\u3088\u3046\u306B\u66F8\u304D\u305F\u3044\u3002",
    "\u4E0D\u8FC7\uFF0C\u4E0B\u6B21\u8981\u5199\u4EC0\u4E48\u7684\u65F6\u5019\uFF0C\u60F3\u8981\u4F20\u8FBE\u5230\u4F60\u7684\u5185\u5FC3\u3002"
  ],
  [
    "\u3044\u304F\u3064\u304B\u306E\u98A8\u666F\u306F\u3001\u81EA\u7136\u3068\u8133\u88CF\u306B\u8607\u3063\u3066\u304F\u308B\u3002\u3044\u304F\u3064\u304B\u306E\u8A18\u61B6\u306F\u3001\u307E\u308B\u3067\u821E\u3044\u843D\u3061\u308B\u685C\u306E\u82B1\u3073\u3089\u306E\u3088\u3046\u306B\u3001\u79C1\u306E\u5FC3\u306E\u5965\u5E95\u3067\u7D76\u3048\u305A\u6D6E\u304B\u3073\u4E0A\u304C\u3063\u3066\u304F\u308B\u3002",
    "\u6709\u4E9B\u98CE\u666F\uFF0C\u81EA\u7136\u800C\u7136\u5C31\u5728\u8111\u6D77\u4E2D\u590D\u82CF\u3002\u6709\u4E9B\u8BB0\u5FC6\uFF0C\u5C31\u50CF\u662F\u548C\u98D8\u843D\u7684\u6A31\u82B1\u76F8\u547C\u5E94\u4E00\u6837\u5728\u6211\u5185\u5FC3\u6DF1\u5904\u4E0D\u65AD\u6D6E\u73B0\u3002"
  ],
  [
    "\u305D\u308C\u304C\u79C1\u306E\u521D\u604B\u3060\u3063\u305F\u3002",
    "\u90A3\u4FBF\u662F\u6211\u7684\u521D\u604B\u3002"
  ],
  [
    "\u79C1\u304C\u623B\u3063\u3066\u304D\u305F\u306E\u306F\u306D\u3002 \u3082\u3046\u4E00\u5EA6\u3001\u661F\u306E\u97F3\u3092\u805E\u304F\u305F\u3081\u3060\u3088",
    "\u6211\u8FD9\u6B21\u56DE\u6765\u8FD9\u91CC\u5462\uFF0C\u662F\u4E3A\u4E86\u518D\u4E00\u6B21\uFF0C\u503E\u542C\u661F\u661F\u7684\u58F0\u97F3"
  ]
];
var UNIQUE = [
  1392,
  180,
  936,
  72,
  1332,
  84,
  1404,
  132,
  1392,
  120,
  1380,
  96,
  1284,
  108,
  1284,
  168,
  456,
  144,
  1068,
  156,
  1236,
  192
];
var AUDIOS = [
  "flower -piano arrangement- - \u6C34\u6708\u9675",
  "\u98A8\u306E\u6B62\u307E\u308A\u6728 - \u6C34\u6708\u9675",
  "GLORIOUS_DAYS (Short) - yuiko",
  "\u6771\u306E\u7A7A\u304B\u3089\u59CB\u307E\u308B\u4E16\u754C - yuiko"
];

// deno:https://esm.sh/@lit/reactive-element@2.1.2/es2022/decorators/custom-element.mjs
var s = (e) => (t2, n3) => {
  n3 !== void 0 ? n3.addInitializer(() => {
    customElements.define(e, t2);
  }) : customElements.define(e, t2);
};

// deno:https://esm.sh/@lit/reactive-element@2.1.2/es2022/css-tag.mjs
var r = globalThis;
var a = r.ShadowRoot && (r.ShadyCSS === void 0 || r.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var i = Symbol();
var l = /* @__PURE__ */ new WeakMap();
var c = class {
  constructor(s3, t2, o) {
    if (this._$cssResult$ = true, o !== i) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = s3, this.t = t2;
  }
  get styleSheet() {
    let s3 = this.o, t2 = this.t;
    if (a && s3 === void 0) {
      let o = t2 !== void 0 && t2.length === 1;
      o && (s3 = l.get(t2)), s3 === void 0 && ((this.o = s3 = new CSSStyleSheet()).replaceSync(this.cssText), o && l.set(t2, s3));
    }
    return s3;
  }
  toString() {
    return this.cssText;
  }
};
var h = (e) => new c(typeof e == "string" ? e : e + "", void 0, i);
var d = (e, s3) => {
  if (a) e.adoptedStyleSheets = s3.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (let t2 of s3) {
    let o = document.createElement("style"), S2 = r.litNonce;
    S2 !== void 0 && o.setAttribute("nonce", S2), o.textContent = t2.cssText, e.appendChild(o);
  }
};
var y = a ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((s3) => {
  let t2 = "";
  for (let o of s3.cssRules) t2 += o.cssText;
  return h(t2);
})(e) : e;

// deno:https://esm.sh/@lit/reactive-element@2.1.2/es2022/reactive-element.mjs
var { is: $, defineProperty: m, getOwnPropertyDescriptor: y2, getOwnPropertyNames: g, getOwnPropertySymbols: b, getPrototypeOf: P } = Object;
var c2 = globalThis;
var u = c2.trustedTypes;
var v = u ? u.emptyScript : "";
var w = c2.reactiveElementPolyfillSupport;
var p2 = (o, t2) => o;
var l2 = {
  toAttribute(o, t2) {
    switch (t2) {
      case Boolean:
        o = o ? v : null;
        break;
      case Object:
      case Array:
        o = o == null ? o : JSON.stringify(o);
    }
    return o;
  },
  fromAttribute(o, t2) {
    let e = o;
    switch (t2) {
      case Boolean:
        e = o !== null;
        break;
      case Number:
        e = o === null ? null : Number(o);
        break;
      case Object:
      case Array:
        try {
          e = JSON.parse(o);
        } catch {
          e = null;
        }
    }
    return e;
  }
};
var E = (o, t2) => !$(o, t2);
var f = {
  attribute: true,
  type: String,
  converter: l2,
  reflect: false,
  useDefault: false,
  hasChanged: E
};
Symbol.metadata ??= Symbol("metadata"), c2.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var h2 = class extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [
      ...this._$Eh.keys()
    ];
  }
  static createProperty(t2, e = f) {
    if (e.state && (e.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((e = Object.create(e)).wrapped = true), this.elementProperties.set(t2, e), !e.noAccessor) {
      let s3 = Symbol(), i3 = this.getPropertyDescriptor(t2, s3, e);
      i3 !== void 0 && m(this.prototype, t2, i3);
    }
  }
  static getPropertyDescriptor(t2, e, s3) {
    let { get: i3, set: r4 } = y2(this.prototype, t2) ?? {
      get() {
        return this[e];
      },
      set(n3) {
        this[e] = n3;
      }
    };
    return {
      get: i3,
      set(n3) {
        let a4 = i3?.call(this);
        r4?.call(this, n3), this.requestUpdate(t2, a4, s3);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? f;
  }
  static _$Ei() {
    if (this.hasOwnProperty(p2("elementProperties"))) return;
    let t2 = P(this);
    t2.finalize(), t2.l !== void 0 && (this.l = [
      ...t2.l
    ]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(p2("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(p2("properties"))) {
      let e = this.properties, s3 = [
        ...g(e),
        ...b(e)
      ];
      for (let i3 of s3) this.createProperty(i3, e[i3]);
    }
    let t2 = this[Symbol.metadata];
    if (t2 !== null) {
      let e = litPropertyMetadata.get(t2);
      if (e !== void 0) for (let [s3, i3] of e) this.elementProperties.set(s3, i3);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (let [e, s3] of this.elementProperties) {
      let i3 = this._$Eu(e, s3);
      i3 !== void 0 && this._$Eh.set(i3, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t2) {
    let e = [];
    if (Array.isArray(t2)) {
      let s3 = new Set(t2.flat(1 / 0).reverse());
      for (let i3 of s3) e.unshift(y(i3));
    } else t2 !== void 0 && e.push(y(t2));
    return e;
  }
  static _$Eu(t2, e) {
    let s3 = e.attribute;
    return s3 === false ? void 0 : typeof s3 == "string" ? s3 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t2) => t2(this));
  }
  addController(t2) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t2), this.renderRoot !== void 0 && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$EO?.delete(t2);
  }
  _$E_() {
    let t2 = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (let s3 of e.keys()) this.hasOwnProperty(s3) && (t2.set(s3, this[s3]), delete this[s3]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    let t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return d(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t2) => t2.hostConnected?.());
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t2) => t2.hostDisconnected?.());
  }
  attributeChangedCallback(t2, e, s3) {
    this._$AK(t2, s3);
  }
  _$ET(t2, e) {
    let s3 = this.constructor.elementProperties.get(t2), i3 = this.constructor._$Eu(t2, s3);
    if (i3 !== void 0 && s3.reflect === true) {
      let r4 = (s3.converter?.toAttribute !== void 0 ? s3.converter : l2).toAttribute(e, s3.type);
      this._$Em = t2, r4 == null ? this.removeAttribute(i3) : this.setAttribute(i3, r4), this._$Em = null;
    }
  }
  _$AK(t2, e) {
    let s3 = this.constructor, i3 = s3._$Eh.get(t2);
    if (i3 !== void 0 && this._$Em !== i3) {
      let r4 = s3.getPropertyOptions(i3), n3 = typeof r4.converter == "function" ? {
        fromAttribute: r4.converter
      } : r4.converter?.fromAttribute !== void 0 ? r4.converter : l2;
      this._$Em = i3;
      let a4 = n3.fromAttribute(e, r4.type);
      this[i3] = a4 ?? this._$Ej?.get(i3) ?? a4, this._$Em = null;
    }
  }
  requestUpdate(t2, e, s3, i3 = false, r4) {
    if (t2 !== void 0) {
      let n3 = this.constructor;
      if (i3 === false && (r4 = this[t2]), s3 ??= n3.getPropertyOptions(t2), !((s3.hasChanged ?? E)(r4, e) || s3.useDefault && s3.reflect && r4 === this._$Ej?.get(t2) && !this.hasAttribute(n3._$Eu(t2, s3)))) return;
      this.C(t2, e, s3);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(t2, e, { useDefault: s3, reflect: i3, wrapped: r4 }, n3) {
    s3 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t2) && (this._$Ej.set(t2, n3 ?? e ?? this[t2]), r4 !== true || n3 !== void 0) || (this._$AL.has(t2) || (this.hasUpdated || s3 || (e = void 0), this._$AL.set(t2, e)), i3 === true && this._$Em !== t2 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    let t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (let [i3, r4] of this._$Ep) this[i3] = r4;
        this._$Ep = void 0;
      }
      let s3 = this.constructor.elementProperties;
      if (s3.size > 0) for (let [i3, r4] of s3) {
        let { wrapped: n3 } = r4, a4 = this[i3];
        n3 !== true || this._$AL.has(i3) || a4 === void 0 || this.C(i3, void 0, r4, a4);
      }
    }
    let t2 = false, e = this._$AL;
    try {
      t2 = this.shouldUpdate(e), t2 ? (this.willUpdate(e), this._$EO?.forEach((s3) => s3.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(e);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
h2.elementStyles = [], h2.shadowRootOptions = {
  mode: "open"
}, h2[p2("elementProperties")] = /* @__PURE__ */ new Map(), h2[p2("finalized")] = /* @__PURE__ */ new Map(), w?.({
  ReactiveElement: h2
}), (c2.reactiveElementVersions ??= []).push("2.1.2");

// deno:https://esm.sh/@lit/reactive-element@2.1.2/es2022/decorators/property.mjs
var l3 = {
  attribute: true,
  type: String,
  converter: l2,
  reflect: false,
  hasChanged: E
};
var u2 = (t2 = l3, n3, r4) => {
  let { kind: s3, metadata: i3 } = r4, o = globalThis.litPropertyMetadata.get(i3);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i3, o = /* @__PURE__ */ new Map()), s3 === "setter" && ((t2 = Object.create(t2)).wrapped = true), o.set(r4.name, t2), s3 === "accessor") {
    let { name: a4 } = r4;
    return {
      set(e) {
        let c5 = n3.get.call(this);
        n3.set.call(this, e), this.requestUpdate(a4, c5, t2, true, e);
      },
      init(e) {
        return e !== void 0 && this.C(a4, void 0, t2, e), e;
      }
    };
  }
  if (s3 === "setter") {
    let { name: a4 } = r4;
    return function(e) {
      let c5 = this[a4];
      n3.call(this, e), this.requestUpdate(a4, c5, t2, true, e);
    };
  }
  throw Error("Unsupported decorator location: " + s3);
};
function y3(t2) {
  return (n3, r4) => typeof r4 == "object" ? u2(t2, n3, r4) : ((s3, i3, o) => {
    let a4 = i3.hasOwnProperty(o);
    return i3.constructor.createProperty(o, s3), a4 ? Object.getOwnPropertyDescriptor(i3, o) : void 0;
  })(t2, n3, r4);
}

// deno:https://esm.sh/@lit/reactive-element@2.1.2/denonext/css-tag.mjs
var r3 = globalThis;
var a2 = r3.ShadowRoot && (r3.ShadyCSS === void 0 || r3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var i2 = Symbol();
var l4 = /* @__PURE__ */ new WeakMap();
var c3 = class {
  constructor(s3, t2, o) {
    if (this._$cssResult$ = true, o !== i2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = s3, this.t = t2;
  }
  get styleSheet() {
    let s3 = this.o, t2 = this.t;
    if (a2 && s3 === void 0) {
      let o = t2 !== void 0 && t2.length === 1;
      o && (s3 = l4.get(t2)), s3 === void 0 && ((this.o = s3 = new CSSStyleSheet()).replaceSync(this.cssText), o && l4.set(t2, s3));
    }
    return s3;
  }
  toString() {
    return this.cssText;
  }
};
var h3 = (e) => new c3(typeof e == "string" ? e : e + "", void 0, i2);
var d2 = (e, s3) => {
  if (a2) e.adoptedStyleSheets = s3.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (let t2 of s3) {
    let o = document.createElement("style"), S2 = r3.litNonce;
    S2 !== void 0 && o.setAttribute("nonce", S2), o.textContent = t2.cssText, e.appendChild(o);
  }
};
var y4 = a2 ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((s3) => {
  let t2 = "";
  for (let o of s3.cssRules) t2 += o.cssText;
  return h3(t2);
})(e) : e;

// deno:https://esm.sh/@lit/reactive-element@2.1.2/denonext/reactive-element.mjs
var { is: $2, defineProperty: m2, getOwnPropertyDescriptor: y5, getOwnPropertyNames: g2, getOwnPropertySymbols: b2, getPrototypeOf: P2 } = Object;
var c4 = globalThis;
var u3 = c4.trustedTypes;
var v2 = u3 ? u3.emptyScript : "";
var w2 = c4.reactiveElementPolyfillSupport;
var p4 = (o, t2) => o;
var l5 = {
  toAttribute(o, t2) {
    switch (t2) {
      case Boolean:
        o = o ? v2 : null;
        break;
      case Object:
      case Array:
        o = o == null ? o : JSON.stringify(o);
    }
    return o;
  },
  fromAttribute(o, t2) {
    let e = o;
    switch (t2) {
      case Boolean:
        e = o !== null;
        break;
      case Number:
        e = o === null ? null : Number(o);
        break;
      case Object:
      case Array:
        try {
          e = JSON.parse(o);
        } catch {
          e = null;
        }
    }
    return e;
  }
};
var E2 = (o, t2) => !$2(o, t2);
var f2 = {
  attribute: true,
  type: String,
  converter: l5,
  reflect: false,
  useDefault: false,
  hasChanged: E2
};
Symbol.metadata ??= Symbol("metadata"), c4.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var h4 = class extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [
      ...this._$Eh.keys()
    ];
  }
  static createProperty(t2, e = f2) {
    if (e.state && (e.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((e = Object.create(e)).wrapped = true), this.elementProperties.set(t2, e), !e.noAccessor) {
      let s3 = Symbol(), i3 = this.getPropertyDescriptor(t2, s3, e);
      i3 !== void 0 && m2(this.prototype, t2, i3);
    }
  }
  static getPropertyDescriptor(t2, e, s3) {
    let { get: i3, set: r4 } = y5(this.prototype, t2) ?? {
      get() {
        return this[e];
      },
      set(n3) {
        this[e] = n3;
      }
    };
    return {
      get: i3,
      set(n3) {
        let a4 = i3?.call(this);
        r4?.call(this, n3), this.requestUpdate(t2, a4, s3);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? f2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(p4("elementProperties"))) return;
    let t2 = P2(this);
    t2.finalize(), t2.l !== void 0 && (this.l = [
      ...t2.l
    ]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(p4("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(p4("properties"))) {
      let e = this.properties, s3 = [
        ...g2(e),
        ...b2(e)
      ];
      for (let i3 of s3) this.createProperty(i3, e[i3]);
    }
    let t2 = this[Symbol.metadata];
    if (t2 !== null) {
      let e = litPropertyMetadata.get(t2);
      if (e !== void 0) for (let [s3, i3] of e) this.elementProperties.set(s3, i3);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (let [e, s3] of this.elementProperties) {
      let i3 = this._$Eu(e, s3);
      i3 !== void 0 && this._$Eh.set(i3, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t2) {
    let e = [];
    if (Array.isArray(t2)) {
      let s3 = new Set(t2.flat(1 / 0).reverse());
      for (let i3 of s3) e.unshift(y4(i3));
    } else t2 !== void 0 && e.push(y4(t2));
    return e;
  }
  static _$Eu(t2, e) {
    let s3 = e.attribute;
    return s3 === false ? void 0 : typeof s3 == "string" ? s3 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t2) => t2(this));
  }
  addController(t2) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t2), this.renderRoot !== void 0 && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$EO?.delete(t2);
  }
  _$E_() {
    let t2 = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (let s3 of e.keys()) this.hasOwnProperty(s3) && (t2.set(s3, this[s3]), delete this[s3]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    let t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return d2(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t2) => t2.hostConnected?.());
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t2) => t2.hostDisconnected?.());
  }
  attributeChangedCallback(t2, e, s3) {
    this._$AK(t2, s3);
  }
  _$ET(t2, e) {
    let s3 = this.constructor.elementProperties.get(t2), i3 = this.constructor._$Eu(t2, s3);
    if (i3 !== void 0 && s3.reflect === true) {
      let r4 = (s3.converter?.toAttribute !== void 0 ? s3.converter : l5).toAttribute(e, s3.type);
      this._$Em = t2, r4 == null ? this.removeAttribute(i3) : this.setAttribute(i3, r4), this._$Em = null;
    }
  }
  _$AK(t2, e) {
    let s3 = this.constructor, i3 = s3._$Eh.get(t2);
    if (i3 !== void 0 && this._$Em !== i3) {
      let r4 = s3.getPropertyOptions(i3), n3 = typeof r4.converter == "function" ? {
        fromAttribute: r4.converter
      } : r4.converter?.fromAttribute !== void 0 ? r4.converter : l5;
      this._$Em = i3;
      let a4 = n3.fromAttribute(e, r4.type);
      this[i3] = a4 ?? this._$Ej?.get(i3) ?? a4, this._$Em = null;
    }
  }
  requestUpdate(t2, e, s3, i3 = false, r4) {
    if (t2 !== void 0) {
      let n3 = this.constructor;
      if (i3 === false && (r4 = this[t2]), s3 ??= n3.getPropertyOptions(t2), !((s3.hasChanged ?? E2)(r4, e) || s3.useDefault && s3.reflect && r4 === this._$Ej?.get(t2) && !this.hasAttribute(n3._$Eu(t2, s3)))) return;
      this.C(t2, e, s3);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(t2, e, { useDefault: s3, reflect: i3, wrapped: r4 }, n3) {
    s3 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t2) && (this._$Ej.set(t2, n3 ?? e ?? this[t2]), r4 !== true || n3 !== void 0) || (this._$AL.has(t2) || (this.hasUpdated || s3 || (e = void 0), this._$AL.set(t2, e)), i3 === true && this._$Em !== t2 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    let t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (let [i3, r4] of this._$Ep) this[i3] = r4;
        this._$Ep = void 0;
      }
      let s3 = this.constructor.elementProperties;
      if (s3.size > 0) for (let [i3, r4] of s3) {
        let { wrapped: n3 } = r4, a4 = this[i3];
        n3 !== true || this._$AL.has(i3) || a4 === void 0 || this.C(i3, void 0, r4, a4);
      }
    }
    let t2 = false, e = this._$AL;
    try {
      t2 = this.shouldUpdate(e), t2 ? (this.willUpdate(e), this._$EO?.forEach((s3) => s3.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(e);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
h4.elementStyles = [], h4.shadowRootOptions = {
  mode: "open"
}, h4[p4("elementProperties")] = /* @__PURE__ */ new Map(), h4[p4("finalized")] = /* @__PURE__ */ new Map(), w2?.({
  ReactiveElement: h4
}), (c4.reactiveElementVersions ??= []).push("2.1.2");

// deno:https://esm.sh/lit-html@3.3.2/denonext/lit-html.mjs
var U = globalThis;
var R = (n3) => n3;
var M = U.trustedTypes;
var V = M ? M.createPolicy("lit-html", {
  createHTML: (n3) => n3
}) : void 0;
var O = "$lit$";
var d3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var j = "?" + d3;
var Q = `<${j}>`;
var m3 = document;
var H = () => m3.createComment("");
var N = (n3) => n3 === null || typeof n3 != "object" && typeof n3 != "function";
var D = Array.isArray;
var q = (n3) => D(n3) || typeof n3?.[Symbol.iterator] == "function";
var P3 = `[ 	
\f\r]`;
var x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var W = /-->/g;
var k = />/g;
var u4 = RegExp(`>|${P3}(?:([^\\s"'>=/]+)(${P3}*=${P3}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var F = /'/g;
var z = /"/g;
var G = /^(?:script|style|textarea|title)$/i;
var L = (n3) => (t2, ...s3) => ({
  _$litType$: n3,
  strings: t2,
  values: s3
});
var Y = L(1);
var tt = L(2);
var et = L(3);
var T = Symbol.for("lit-noChange");
var a3 = Symbol.for("lit-nothing");
var Z = /* @__PURE__ */ new WeakMap();
var g3 = m3.createTreeWalker(m3, 129);
function J(n3, t2) {
  if (!D(n3) || !n3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return V !== void 0 ? V.createHTML(t2) : t2;
}
var K = (n3, t2) => {
  let s3 = n3.length - 1, e = [], i3, o = t2 === 2 ? "<svg>" : t2 === 3 ? "<math>" : "", r4 = x;
  for (let _ = 0; _ < s3; _++) {
    let h5 = n3[_], $3, A, l7 = -1, c5 = 0;
    for (; c5 < h5.length && (r4.lastIndex = c5, A = r4.exec(h5), A !== null); ) c5 = r4.lastIndex, r4 === x ? A[1] === "!--" ? r4 = W : A[1] !== void 0 ? r4 = k : A[2] !== void 0 ? (G.test(A[2]) && (i3 = RegExp("</" + A[2], "g")), r4 = u4) : A[3] !== void 0 && (r4 = u4) : r4 === u4 ? A[0] === ">" ? (r4 = i3 ?? x, l7 = -1) : A[1] === void 0 ? l7 = -2 : (l7 = r4.lastIndex - A[2].length, $3 = A[1], r4 = A[3] === void 0 ? u4 : A[3] === '"' ? z : F) : r4 === z || r4 === F ? r4 = u4 : r4 === W || r4 === k ? r4 = x : (r4 = u4, i3 = void 0);
    let p5 = r4 === u4 && n3[_ + 1].startsWith("/>") ? " " : "";
    o += r4 === x ? h5 + Q : l7 >= 0 ? (e.push($3), h5.slice(0, l7) + O + h5.slice(l7) + d3 + p5) : h5 + d3 + (l7 === -2 ? _ : p5);
  }
  return [
    J(n3, o + (n3[s3] || "<?>") + (t2 === 2 ? "</svg>" : t2 === 3 ? "</math>" : "")),
    e
  ];
};
var b3 = class n {
  constructor({ strings: t2, _$litType$: s3 }, e) {
    let i3;
    this.parts = [];
    let o = 0, r4 = 0, _ = t2.length - 1, h5 = this.parts, [$3, A] = K(t2, s3);
    if (this.el = n.createElement($3, e), g3.currentNode = this.el.content, s3 === 2 || s3 === 3) {
      let l7 = this.el.content.firstChild;
      l7.replaceWith(...l7.childNodes);
    }
    for (; (i3 = g3.nextNode()) !== null && h5.length < _; ) {
      if (i3.nodeType === 1) {
        if (i3.hasAttributes()) for (let l7 of i3.getAttributeNames()) if (l7.endsWith(O)) {
          let c5 = A[r4++], p5 = i3.getAttribute(l7).split(d3), C = /([.?@])?(.*)/.exec(c5);
          h5.push({
            type: 1,
            index: o,
            name: C[2],
            strings: p5,
            ctor: C[1] === "." ? E3 : C[1] === "?" ? S : C[1] === "@" ? B : f3
          }), i3.removeAttribute(l7);
        } else l7.startsWith(d3) && (h5.push({
          type: 6,
          index: o
        }), i3.removeAttribute(l7));
        if (G.test(i3.tagName)) {
          let l7 = i3.textContent.split(d3), c5 = l7.length - 1;
          if (c5 > 0) {
            i3.textContent = M ? M.emptyScript : "";
            for (let p5 = 0; p5 < c5; p5++) i3.append(l7[p5], H()), g3.nextNode(), h5.push({
              type: 2,
              index: ++o
            });
            i3.append(l7[c5], H());
          }
        }
      } else if (i3.nodeType === 8) if (i3.data === j) h5.push({
        type: 2,
        index: o
      });
      else {
        let l7 = -1;
        for (; (l7 = i3.data.indexOf(d3, l7 + 1)) !== -1; ) h5.push({
          type: 7,
          index: o
        }), l7 += d3.length - 1;
      }
      o++;
    }
  }
  static createElement(t2, s3) {
    let e = m3.createElement("template");
    return e.innerHTML = t2, e;
  }
};
function v3(n3, t2, s3 = n3, e) {
  if (t2 === T) return t2;
  let i3 = e !== void 0 ? s3._$Co?.[e] : s3._$Cl, o = N(t2) ? void 0 : t2._$litDirective$;
  return i3?.constructor !== o && (i3?._$AO?.(false), o === void 0 ? i3 = void 0 : (i3 = new o(n3), i3._$AT(n3, s3, e)), e !== void 0 ? (s3._$Co ??= [])[e] = i3 : s3._$Cl = i3), i3 !== void 0 && (t2 = v3(n3, i3._$AS(n3, t2.values), i3, e)), t2;
}
var w3 = class {
  constructor(t2, s3) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = s3;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    let { el: { content: s3 }, parts: e } = this._$AD, i3 = (t2?.creationScope ?? m3).importNode(s3, true);
    g3.currentNode = i3;
    let o = g3.nextNode(), r4 = 0, _ = 0, h5 = e[0];
    for (; h5 !== void 0; ) {
      if (r4 === h5.index) {
        let $3;
        h5.type === 2 ? $3 = new y6(o, o.nextSibling, this, t2) : h5.type === 1 ? $3 = new h5.ctor(o, h5.name, h5.strings, this, t2) : h5.type === 6 && ($3 = new I(o, this, t2)), this._$AV.push($3), h5 = e[++_];
      }
      r4 !== h5?.index && (o = g3.nextNode(), r4++);
    }
    return g3.currentNode = m3, i3;
  }
  p(t2) {
    let s3 = 0;
    for (let e of this._$AV) e !== void 0 && (e.strings !== void 0 ? (e._$AI(t2, e, s3), s3 += e.strings.length - 2) : e._$AI(t2[s3])), s3++;
  }
};
var y6 = class n2 {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t2, s3, e, i3) {
    this.type = 2, this._$AH = a3, this._$AN = void 0, this._$AA = t2, this._$AB = s3, this._$AM = e, this.options = i3, this._$Cv = i3?.isConnected ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode, s3 = this._$AM;
    return s3 !== void 0 && t2?.nodeType === 11 && (t2 = s3.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, s3 = this) {
    t2 = v3(this, t2, s3), N(t2) ? t2 === a3 || t2 == null || t2 === "" ? (this._$AH !== a3 && this._$AR(), this._$AH = a3) : t2 !== this._$AH && t2 !== T && this._(t2) : t2._$litType$ !== void 0 ? this.$(t2) : t2.nodeType !== void 0 ? this.T(t2) : q(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== a3 && N(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(m3.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    let { values: s3, _$litType$: e } = t2, i3 = typeof e == "number" ? this._$AC(t2) : (e.el === void 0 && (e.el = b3.createElement(J(e.h, e.h[0]), this.options)), e);
    if (this._$AH?._$AD === i3) this._$AH.p(s3);
    else {
      let o = new w3(i3, this), r4 = o.u(this.options);
      o.p(s3), this.T(r4), this._$AH = o;
    }
  }
  _$AC(t2) {
    let s3 = Z.get(t2.strings);
    return s3 === void 0 && Z.set(t2.strings, s3 = new b3(t2)), s3;
  }
  k(t2) {
    D(this._$AH) || (this._$AH = [], this._$AR());
    let s3 = this._$AH, e, i3 = 0;
    for (let o of t2) i3 === s3.length ? s3.push(e = new n2(this.O(H()), this.O(H()), this, this.options)) : e = s3[i3], e._$AI(o), i3++;
    i3 < s3.length && (this._$AR(e && e._$AB.nextSibling, i3), s3.length = i3);
  }
  _$AR(t2 = this._$AA.nextSibling, s3) {
    for (this._$AP?.(false, true, s3); t2 !== this._$AB; ) {
      let e = R(t2).nextSibling;
      R(t2).remove(), t2 = e;
    }
  }
  setConnected(t2) {
    this._$AM === void 0 && (this._$Cv = t2, this._$AP?.(t2));
  }
};
var f3 = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, s3, e, i3, o) {
    this.type = 1, this._$AH = a3, this._$AN = void 0, this.element = t2, this.name = s3, this._$AM = i3, this.options = o, e.length > 2 || e[0] !== "" || e[1] !== "" ? (this._$AH = Array(e.length - 1).fill(new String()), this.strings = e) : this._$AH = a3;
  }
  _$AI(t2, s3 = this, e, i3) {
    let o = this.strings, r4 = false;
    if (o === void 0) t2 = v3(this, t2, s3, 0), r4 = !N(t2) || t2 !== this._$AH && t2 !== T, r4 && (this._$AH = t2);
    else {
      let _ = t2, h5, $3;
      for (t2 = o[0], h5 = 0; h5 < o.length - 1; h5++) $3 = v3(this, _[e + h5], s3, h5), $3 === T && ($3 = this._$AH[h5]), r4 ||= !N($3) || $3 !== this._$AH[h5], $3 === a3 ? t2 = a3 : t2 !== a3 && (t2 += ($3 ?? "") + o[h5 + 1]), this._$AH[h5] = $3;
    }
    r4 && !i3 && this.j(t2);
  }
  j(t2) {
    t2 === a3 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
};
var E3 = class extends f3 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === a3 ? void 0 : t2;
  }
};
var S = class extends f3 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== a3);
  }
};
var B = class extends f3 {
  constructor(t2, s3, e, i3, o) {
    super(t2, s3, e, i3, o), this.type = 5;
  }
  _$AI(t2, s3 = this) {
    if ((t2 = v3(this, t2, s3, 0) ?? a3) === T) return;
    let e = this._$AH, i3 = t2 === a3 && e !== a3 || t2.capture !== e.capture || t2.once !== e.once || t2.passive !== e.passive, o = t2 !== a3 && (e === a3 || i3);
    i3 && this.element.removeEventListener(this.name, this, e), o && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
};
var I = class {
  constructor(t2, s3, e) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = s3, this.options = e;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    v3(this, t2);
  }
};
var X = U.litHtmlPolyfillSupport;
X?.(b3, y6), (U.litHtmlVersions ??= []).push("3.3.2");
var it = (n3, t2, s3) => {
  let e = s3?.renderBefore ?? t2, i3 = e._$litPart$;
  if (i3 === void 0) {
    let o = s3?.renderBefore ?? null;
    e._$litPart$ = i3 = new y6(t2.insertBefore(H(), o), o, void 0, s3 ?? {});
  }
  return i3._$AI(n3), i3;
};

// deno:https://esm.sh/lit-element@4.2.2/denonext/__lit-element.mjs
var s2 = globalThis;
var t = class extends h4 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    let e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    let r4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = it(r4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return T;
  }
};
t._$litElement$ = true, t.finalized = true, s2.litElementHydrateSupport?.({
  LitElement: t
});
var l6 = s2.litElementPolyfillSupport;
l6?.({
  LitElement: t
});
(s2.litElementVersions ??= []).push("4.2.2");

// src/utils/logger.ts
function log(message, color = "#FED2E4;") {
  console.log(`%c[Sena] %c${message}`, "color: #E6AD88; font-weight: bold; font-size: 1.2em;", `color: ${color}; font-weight: bold; font-size: 1.2em;`);
}
function error(message) {
  console.error(`%c[Sena] %c${message}`, "color: #E6AD88; font-weight: bold; font-size: 1.2em;", "color: #FF4136; font-weight: bold; font-size: 1.2em;");
}

// src/http/index.ts
function postView() {
  if (!METADATA.isPhpEnv) return;
  return fetch("/view.php").then(() => {
    METADATA.isRecorded = true;
  }).catch((err) => error(`Failed to post view: ${err}`));
}
function getMessagesList() {
  return fetch("/messages.json").then((res) => res.json()).catch((err) => error(`Failed to get messages: ${err}`));
}

// src/data/storage.ts
var StorageKeys = /* @__PURE__ */ function(StorageKeys2) {
  StorageKeys2["STATE_VISITED"] = "state_visited";
  StorageKeys2["SETTINGS_AUTOPLAY"] = "settings_autoplay";
  StorageKeys2["SETTINGS_SWITCH_TIME"] = "settings_switch_time";
  StorageKeys2["SETTINGS_START_DATE"] = "settings_start_date";
  return StorageKeys2;
}({});
function getStorageFiled(key, defaultValue) {
  const value = localStorage.getItem(`sena_${key}`);
  if (!value) {
    localStorage.setItem(key, String(defaultValue));
    return defaultValue;
  }
  if (typeof defaultValue === "number") {
    const result = Number(value);
    if (Number.isNaN(result)) {
      localStorage.setItem(key, String(defaultValue));
      return defaultValue;
    }
    return result;
  }
  if (typeof defaultValue === "boolean") {
    return value === "true";
  }
  if ([
    "",
    "null",
    "undefined"
  ].includes(value.trim())) {
    localStorage.setItem(key, String(defaultValue));
    return defaultValue;
  }
  return value;
}
function setStorageFiled(key, value) {
  localStorage.setItem(`sena_${key}`, String(value));
}

// src/utils/timer.ts
function betterTimeout(fn, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      try {
        fn();
        resolve();
      } catch (e) {
        reject(e);
      } finally {
        clearTimeout(timer);
      }
    }, ms);
  });
}
function sleep(ms) {
  return betterTimeout(() => {
  }, ms);
}
function nextTick(fn = () => {
}) {
  return betterTimeout(fn, 0);
}

// src/utils/eventsEmiter.ts
var SenaEventsEmmiter = class _SenaEventsEmmiter {
  static events = {};
  static on(event, listener) {
    if (!_SenaEventsEmmiter.events[event]) {
      _SenaEventsEmmiter.events[event] = [
        listener
      ];
    } else {
      _SenaEventsEmmiter.events[event].push(listener);
    }
  }
  static emit(event, ...args) {
    if (_SenaEventsEmmiter.events[event]) {
      _SenaEventsEmmiter.events[event].map((listener) => listener(...args));
    }
  }
};
function eventsLooper() {
  const switchTime = getStorageFiled(StorageKeys.SETTINGS_SWITCH_TIME, DEFAULT_SETTINGS_SWITCH_TIME);
  if (switchTime === 0) return;
  betterTimeout(() => {
    eventsLooper();
    SenaEventsEmmiter.emit("updateContent");
  }, switchTime * 1e3 + 1500 + 100);
}

// src/data/state.ts
var SenaState = class _SenaState {
  static isBrightBackground = false;
  static get isVisited() {
    return getStorageFiled(StorageKeys.STATE_VISITED, false);
  }
  static activeTime = 0;
  static setActiveCounter() {
    if (!_SenaState.isVisited && _SenaState.activeTime <= 10) {
      _SenaState.activeTime += 1;
      betterTimeout(() => _SenaState.setActiveCounter(), 1e3);
      return;
    }
    if (!_SenaState.isVisited) setStorageFiled(StorageKeys.STATE_VISITED, true);
    if (!METADATA.isRecorded) postView();
    return;
  }
  static messagesList = [
    {
      msg: "\u4F20\u8FBE\u4E4B\u7269\uFF0C\u7686\u6570\u4F20\u8FBE\uFF1B\u4F55\u66FE\u65E0\u7406\u7531\u4FEE\u6210\u6B63\u679C\uFF1F\u94C5\u534E\u5C3D\u6D17\uFF0C\u78E8\u96BE\u904D\u5386\uFF1B\u4F55\u66FE\u65E0\u7406\u7531\u76F8\u4FE1\u5C06\u662F\u56DE\u5FC6\u8FC7\u540E\u7684\u7F8E\u597D\u7EED\u7BC7\uFF1F\u4E0D\u89C9\u95F4\uFF0C\u5A07\u59BB\u4E45\u5F52\uFF0C\u7B11\u9765\u5982\u82B1\uFF0C\u6211\u7684\u4E16\u754C\u552F\u6709\u661F\u7A7A\u4E0E\u4F60\u3002",
      user: "BIYUEHU",
      name: "AS"
    }
  ];
  static setMessagesList() {
    getMessagesList().then((res) => {
      _SenaState.messagesList = res;
      SenaEventsEmmiter.emit("updateMessages");
    }).catch(() => {
      error("[Sena] Failed to fetch messages list");
    });
  }
};

// src/Components/SenaTextBlock.ts
function applyDecs2203RFactory() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r = applyDecs2203RFactory())(targetClass, memberDecs, classDecs, parentClass);
}
var _dec;
var _initClass;
var _LitElement;
var _dec1;
var _init_title;
var _SenaTextBlock;
_dec = s("sena-text-block"), _dec1 = y3({
  type: String
});
var SenaTextBlock = class extends (_LitElement = t) {
  static {
    ({ e: [_init_title], c: [_SenaTextBlock, _initClass] } = _apply_decs_2203_r(this, [
      [
        _dec1,
        0,
        "title"
      ]
    ], [
      _dec
    ], _LitElement));
  }
  title = _init_title(this, "");
  render() {
    return Y`
      <link rel="stylesheet" href="/styles.css">
      <div class="text-block">
        ${this.title ? Y`<h2>${this.title}</h2>` : ""}
        <div><slot /></div>
      </div>
    `;
  }
  static {
    _initClass();
  }
};

// src/Components/SenaBackground.ts
function applyDecs2203RFactory2() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r2(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r2 = applyDecs2203RFactory2())(targetClass, memberDecs, classDecs, parentClass);
}
function _identity(x2) {
  return x2;
}
var _dec2;
var _initClass2;
var _LitElement2;
var _SenaBackground;
_dec2 = s("sena-background");
new class extends _identity {
  constructor() {
    super(_SenaBackground), _initClass2();
  }
  static {
    class SenaBackground extends (_LitElement2 = t) {
      static {
        ({ c: [_SenaBackground, _initClass2] } = _apply_decs_2203_r2(this, [], [
          _dec2
        ], _LitElement2));
      }
      static getBackground() {
        const result = BACKGROUND_LIST[Math.floor(Math.random() * BACKGROUND_LIST.length)];
        SenaState.isBrightBackground = BRIGHT_BACKGROUND_LIST.includes(result);
        return result;
      }
      static preloadImages() {
        const preloadContainer = document.createElement("div");
        preloadContainer.style.display = "none";
        document.body.appendChild(preloadContainer);
        for (const imageSrc of BACKGROUND_LIST) {
          const img = document.createElement("img");
          img.src = imageSrc;
          preloadContainer.appendChild(img);
        }
      }
      background = _SenaBackground.getBackground();
      get backgroundRef() {
        return this.shadowRoot.querySelector("#bg");
      }
      async updateBackground() {
        const ref = this.backgroundRef;
        ref.style.opacity = "0";
        this.requestUpdate();
        await sleep(1500);
        this.background = SenaBackground.getBackground();
        ref.src = this.background;
        SenaEventsEmmiter.emit("adaptTextColor");
        this.requestUpdate();
        await sleep(100);
        ref.style.opacity = "0.85";
        this.requestUpdate();
      }
      render() {
        return Y`
    <link rel="stylesheet" href="/styles.css">
    <img id="bg" src="${this.background}" alt="Background Image">
    `;
      }
      firstUpdated() {
        nextTick(() => SenaBackground.preloadImages());
        const ref = this.backgroundRef;
        [
          "touchstart",
          "contextmenu",
          "touchmove"
        ].map((eventName) => ref.addEventListener(eventName, (event) => event.preventDefault()));
        SenaEventsEmmiter.on("updateContent", () => this.updateBackground());
      }
    }
  }
}();

// src/utils/date.ts
function validateDate(dateString) {
  const regex = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
  const match = dateString.match(regex);
  if (!match) return null;
  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);
  if (month < 1 || month > 12) return null;
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return null;
  }
  return [
    year,
    month,
    day
  ];
}
function daysSince(dateString) {
  const dateArray = validateDate(dateString);
  if (!dateArray) return null;
  const [year, month, day] = dateArray;
  const date = new Date(year, month - 1, day);
  const today = /* @__PURE__ */ new Date();
  const timeDifference = today.getTime() - date.getTime();
  return Math.floor(timeDifference / (1e3 * 3600 * 24));
}

// src/i18n/locale.ts
var locale_default = {
  "messages.button": "I'll write too",
  "info.line1.phone": "Visitors: {0} | Messages: {1}",
  "info.line1.pc": "Total number of visitors: {0} | Number of messages: {1}",
  "info.line2.phone": "Copyright \xA9 2025 Himeno Sena.",
  "info.line2.pc": "Copyright \xA9 2025 Himeno Sena. All rights reserved.",
  "info.line3": (
    /* html */
    ``
  ),
  "details.line1.front": "B:85 W:52 H:91",
  "details.line1.back": "Measurements",
  "details.line2.front": "Gemini",
  "details.line2.back": "Constellation",
  "details.line3.front": "12 June",
  "details.line3.back": "Birthday",
  "details.line4.front": "Type A",
  "details.line4.back": "Blood Type",
  "modal.title": "Settings",
  "modal.placeholder1": "Enter time in seconds",
  "modal.label1": "Switch Time:",
  "modal.label2": "Initial Date:",
  "modal.label3": "Auto Play Music:",
  "modal.button1": "Cancel",
  "modal.button2": "Submit",
  "title.day": "The {0} day of love"
};

// src/utils/i18n.ts
var I18n = class _I18n {
  static locales = new Map(Object.entries(locale_default));
  static t(locale) {
    return _I18n.locales.get(locale[0]) ?? locale[0];
  }
  static f(locale) {
    return (...args) => args.reduce((acc, cur, index) => acc.replaceAll(`{${index}}`, cur.toString()), _I18n.t(locale));
  }
};

// src/Components/SenaTitle.ts
function applyDecs2203RFactory3() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r3(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r3 = applyDecs2203RFactory3())(targetClass, memberDecs, classDecs, parentClass);
}
var _dec3;
var _initClass3;
var _LitElement3;
var _SenaTitle;
_dec3 = s("sena-title");
var SenaTitle = class extends (_LitElement3 = t) {
  static {
    ({ c: [_SenaTitle, _initClass3] } = _apply_decs_2203_r3(this, [], [
      _dec3
    ], _LitElement3));
  }
  adaptTextColor() {
    const ref = this.shadowRoot.querySelector(".title");
    if (SenaState.isBrightBackground) {
      ref.classList.add("dark-color");
    } else {
      ref.classList.remove("dark-color");
    }
    this.requestUpdate();
  }
  unique = ((fr) => ((d4) => UNIQUE.reduce((acc, cur, index) => index % 2 === 0 ? [
    ...acc,
    [
      cur,
      UNIQUE[index + 1]
    ]
  ] : acc, []).map(([c5, i3]) => [
    d4(c5),
    fr(i3)
  ]).sort(([, i1], [, i22]) => i1 - i22).map(([c5]) => c5).join(""))((x2) => String.fromCharCode(fr(x2))))((x2) => x2 / 12 - 6);
  render() {
    return Y`
    <link rel="stylesheet" href="/styles.css">
    <div class="title">
      <div>${this.unique}</div>
      <div>${I18n.f`title.day`(daysSince(getStorageFiled(StorageKeys.SETTINGS_START_DATE, DEFAULT_SETTINGS_START_DATE)) ?? 1)}</div>
    </div>
    `;
  }
  firstUpdated() {
    this.adaptTextColor();
    SenaEventsEmmiter.on("adaptTextColor", () => this.adaptTextColor());
  }
  static {
    _initClass3();
  }
};

// src/Components/SenaQuotes.ts
function applyDecs2203RFactory4() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r4(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r4 = applyDecs2203RFactory4())(targetClass, memberDecs, classDecs, parentClass);
}
var _dec4;
var _initClass4;
var _LitElement4;
var _SenaQuotes;
_dec4 = s("sena-quotes");
var SenaQuotes = class extends (_LitElement4 = t) {
  static {
    ({ c: [_SenaQuotes, _initClass4] } = _apply_decs_2203_r4(this, [], [
      _dec4
    ], _LitElement4));
  }
  getQuote() {
    const prevQuote = this.currentQuote;
    const result = QUOTES_LIST[Math.floor(Math.random() * QUOTES_LIST.length)];
    return prevQuote && prevQuote[0] === result[0] ? this.getQuote() : result;
  }
  currentQuote = this.getQuote();
  index = 0;
  updateQuote() {
    this.currentQuote = void 0;
    this.requestUpdate();
    sleep(800).then(() => {
      this.currentQuote = this.getQuote();
      this.requestUpdate();
    });
  }
  adaptTextColor() {
    const ref = this.shadowRoot.querySelector(".quote");
    if (SenaState.isBrightBackground) {
      ref.classList.add("dark-color");
    } else {
      ref.classList.remove("dark-color");
    }
    this.requestUpdate();
  }
  onMouseEnter() {
    if (this.currentQuote === void 0 || !this.currentQuote[1]) return;
    this.index = 1;
    this.requestUpdate();
  }
  onMouseLeave() {
    if (this.currentQuote === void 0) return;
    this.index = 0;
    this.requestUpdate();
  }
  render() {
    return Y`
      <link rel="stylesheet" href="/styles.css">
      <div class="quote ${this.currentQuote !== void 0 ? "visible" : ""}" @mouseenter=${this.onMouseEnter} @mouseleave=${this.onMouseLeave}>
          ${this.currentQuote?.[this.index]}
      </div>
    `;
  }
  firstUpdated() {
    this.adaptTextColor();
    SenaEventsEmmiter.on("updateContent", () => this.updateQuote());
    SenaEventsEmmiter.on("adaptTextColor", () => this.adaptTextColor());
  }
  static {
    _initClass4();
  }
};

// src/Components/SenaDetails.ts
function applyDecs2203RFactory5() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r5(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r5 = applyDecs2203RFactory5())(targetClass, memberDecs, classDecs, parentClass);
}
var _dec5;
var _initClass5;
var _LitElement5;
var _SenaDetails;
_dec5 = s("sena-details");
var SenaDetails = class extends (_LitElement5 = t) {
  static {
    ({ c: [_SenaDetails, _initClass5] } = _apply_decs_2203_r5(this, [], [
      _dec5
    ], _LitElement5));
  }
  details = [
    [
      I18n.t`details.line1.front`,
      I18n.t`details.line1.back`,
      false
    ],
    [
      I18n.t`details.line2.front`,
      I18n.t`details.line2.back`,
      false
    ],
    [
      I18n.t`details.line3.front`,
      I18n.t`details.line3.back`,
      false
    ],
    [
      I18n.t`details.line4.front`,
      I18n.t`details.line4.back`,
      false
    ]
  ];
  onMouseEnterFactory(index) {
    return () => {
      this.details[index][2] = true;
      this.requestUpdate();
    };
  }
  onMouseLeaveFactory(index) {
    return () => {
      this.details[index][2] = false;
      this.requestUpdate();
    };
  }
  render() {
    return IS_PHONE ? "" : Y`
      <link rel="stylesheet" href="/styles.css">
      <div class="details">
      ${this.details.map(([front, back, isHovering], index) => Y`<div @mouseenter=${this.onMouseEnterFactory(index)} @mouseleave=${this.onMouseLeaveFactory(index)}>${isHovering ? back : front}</div>`)}
      </div>
    `;
  }
  static {
    _initClass5();
  }
};

// src/Components/SenaAbout.ts
function applyDecs2203RFactory6() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r6(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r6 = applyDecs2203RFactory6())(targetClass, memberDecs, classDecs, parentClass);
}
var _dec6;
var _initClass6;
var _LitElement6;
var _SenaAbout;
_dec6 = s("sena-about");
var SenaAbout = class extends (_LitElement6 = t) {
  static {
    ({ c: [_SenaAbout, _initClass6] } = _apply_decs_2203_r6(this, [], [
      _dec6
    ], _LitElement6));
  }
  isHovering = false;
  onMouseEnter() {
    this.isHovering = true;
    this.requestUpdate();
  }
  onMouseLeave() {
    this.isHovering = false;
    this.requestUpdate();
  }
  render() {
    return Y`
    <link rel="stylesheet" href="/styles.css">
    <sena-text-block title="About" @mouseenter=${this.onMouseEnter} @mouseleave=${this.onMouseLeave}>${this.isHovering ? Y`Us:track 旗下游戏 <a href="http://ustrack.amusecraft.com/koikake/" target="_blank">「恋×シンアイ彼女」</a> 唯一女主。<br /><br />
    总是在身边软绵绵的她就是最容易攻略的那一个女主角。<br />
    待人亲切温厚老实的性格，因而在班级内不算太显眼那类女生。<br />
    然而因为那总是令周围暖意满满宛如太阳一般纯真的笑颜，暗地里在男生中意外的有人气。<br />
    不过，只有洸太郎总是无法直面那耀眼的笑容。<br />
    转校的经历很多，幼时曾一度居住于御影之丘町这里。` : Y`Us:trackの<a href="http://ustrack.amusecraft.com/koikake/" target="_blank">「恋×シンアイ彼女」</a>に登場する唯一の女性主人公。 <br /><br />いつも隣にいる気の抜けた彼女は ゆるカワちょろイン<br />
        人当たりは良いけどおとなしく、クラスではあまり目立たない女の子。<br />
        だけど笑顔で周囲を和ませてくれるため、密かに男子から人気がある。<br />
        洸太郎だけは彼女の笑顔をまっすぐ見られない。<br />
        転校が多く、幼少の頃に一時期 御影ヶ丘町に住んでいたことがある。`}</sena-text-block>
    `;
  }
  static {
    _initClass6();
  }
};

// src/Components/SenaMessages.ts
function applyDecs2203RFactory7() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r7(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r7 = applyDecs2203RFactory7())(targetClass, memberDecs, classDecs, parentClass);
}
function _identity2(x2) {
  return x2;
}
var _dec7;
var _initClass7;
var _LitElement7;
var _SenaMessages;
_dec7 = s("sena-messages");
new class extends _identity2 {
  constructor() {
    super(_SenaMessages), _initClass7();
  }
  static {
    class SenaMessages extends (_LitElement7 = t) {
      static {
        ({ c: [_SenaMessages, _initClass7] } = _apply_decs_2203_r7(this, [], [
          _dec7
        ], _LitElement7));
      }
      static getMessage() {
        return SenaState.messagesList[Math.floor(Math.random() * SenaState.messagesList.length)];
      }
      message = _SenaMessages.getMessage();
      refreshMessage() {
        this.message = SenaMessages.getMessage();
        this.requestUpdate();
      }
      render() {
        return Y`
    <link rel="stylesheet" href="/styles.css">
    <sena-text-block title="Messages">
      <p class="messages" @click="${this.refreshMessage}">${this.message.msg}——By <a href="${GITHUB_URL}/${this.message.user}" target="_blank">${this.message.name}</a></p>
      <a href="${LEAVE_MESSAGES_DOCS}" target="_blank">${I18n.t`messages.button`}</a>
    </sena-text-block>
    `;
      }
      firstUpdated() {
        SenaEventsEmmiter.on("updateMessages", () => this.refreshMessage());
      }
    }
  }
}();

// src/Components/SenaInfo.ts
function applyDecs2203RFactory8() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r8(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r8 = applyDecs2203RFactory8())(targetClass, memberDecs, classDecs, parentClass);
}
var _dec8;
var _initClass8;
var _LitElement8;
var _SenaInfo;
_dec8 = s("sena-info");
var SenaInfo = class extends (_LitElement8 = t) {
  static {
    ({ c: [_SenaInfo, _initClass8] } = _apply_decs_2203_r8(this, [], [
      _dec8
    ], _LitElement8));
  }
  render() {
    return Y`
    <link rel="stylesheet" href="/styles.css">
    <sena-text-block>
      ${IS_PHONE ? I18n.f`info.line1.phone`(METADATA.views, SenaState.messagesList.length) : I18n.f`info.line1.pc`(METADATA.views, SenaState.messagesList.length)}<br />
    ${IS_PHONE ? I18n.t`info.line2.phone` : I18n.t`info.line2.pc`}
    <br />
      Made With Love and Open Sourced on <a target="_blank" href="${REPO_URL}">GitHub</a>.
    </sena-text-block>
    `;
  }
  firstUpdated() {
    SenaEventsEmmiter.on("updateMessages", () => this.requestUpdate());
  }
  static {
    _initClass8();
  }
};

// src/Components/SenaSoundToggle.ts
function applyDecs2203RFactory9() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r9(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r9 = applyDecs2203RFactory9())(targetClass, memberDecs, classDecs, parentClass);
}
var _dec9;
var _initClass9;
var _LitElement9;
var _SenaSoundToggle;
_dec9 = s("sena-sound-toggle");
var SenaSoundToggle = class extends (_LitElement9 = t) {
  static {
    ({ c: [_SenaSoundToggle, _initClass9] } = _apply_decs_2203_r9(this, [], [
      _dec9
    ], _LitElement9));
  }
  audioIndex = Math.floor(Math.random() * AUDIOS.length);
  isFirstPlaySuccess = true;
  get bgmRef() {
    return this.shadowRoot.querySelector("#bgm");
  }
  get soundButtonRef() {
    return this.shadowRoot.querySelector("#sound-toggle");
  }
  soundButtonRotate(rotate) {
    this.soundButtonRef.style.transform = `rotate(${rotate}deg)`;
    betterTimeout(() => this.soundButtonRotate(this.soundButtonRef.textContent === "\u{1F507}" ? rotate : rotate + 10), 200);
  }
  palySound() {
    const bgm = this.bgmRef;
    bgm.volume = 0.3;
    bgm.play().then(() => {
      this.soundButtonRef.textContent = "\u{1F3B5}";
      this.autoPlayFailed = false;
      if (!this.isFirstPlaySuccess) return;
      SenaEventsEmmiter.emit("notify", `Playing ${AUDIOS[this.audioIndex]}`);
      this.isFirstPlaySuccess = false;
    }).catch(() => {
      this.pauseSound();
      if (this.autoPlayFailed === void 0) this.autoPlayFailed = true;
    });
  }
  pauseSound() {
    this.bgmRef.pause();
    this.soundButtonRef.textContent = "\u{1F507}";
  }
  toggleSound() {
    this.bgmRef.paused ? this.palySound() : this.pauseSound();
  }
  autoPlayFailed;
  render() {
    return Y`
    <link rel="stylesheet" href="/styles.css">
    <audio id="bgm" loop>
      <source src="/assets/${this.audioIndex + 1}.mp3" type="audio/mp3">
    </audio>
    <button class="fixed-button-common" id="sound-toggle" @click=${this.toggleSound}>🎵</button>
    `;
  }
  firstUpdated() {
    this.soundButtonRotate(0);
    if (getStorageFiled(StorageKeys.SETTINGS_AUTOPLAY, DEFAULT_SETTINGS_AUTOPLAY)) {
      this.palySound();
      [
        "touchstart",
        "click"
      ].map((eventName) => document.addEventListener(eventName, () => {
        if (this.autoPlayFailed) this.palySound();
      }));
    } else {
      this.pauseSound();
    }
  }
  static {
    _initClass9();
  }
};

// src/Components/SenaModal.ts
function applyDecs2203RFactory10() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r10(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r10 = applyDecs2203RFactory10())(targetClass, memberDecs, classDecs, parentClass);
}
var _dec10;
var _initClass10;
var _LitElement10;
var _SenaModal;
_dec10 = s("sena-modal");
var SenaModal = class extends (_LitElement10 = t) {
  static {
    ({ c: [_SenaModal, _initClass10] } = _apply_decs_2203_r10(this, [], [
      _dec10
    ], _LitElement10));
  }
  get modalRef() {
    return this.shadowRoot.querySelector(".modal");
  }
  getRef() {
    return [
      this.shadowRoot.querySelector("#time-input"),
      this.shadowRoot.querySelector("#date-input"),
      this.shadowRoot.querySelector("#autoplay-music")
    ];
  }
  render() {
    return Y`
    <link rel="stylesheet" href="/styles.css">
    <button class="fixed-button-common modal-open" @click=${this.openModal}>⚙</button>
    ${Y`
    <div class="modal">
      <div class="modal-content">
        <h2>${I18n.t`modal.title`}</h2>
        <label>${I18n.t`modal.label1`}</label>
        <input type="number" id="time-input" placeholder="${I18n.t`modal.placeholder1`}">
        <br>
        <label>${I18n.t`modal.label2`}</label>
        <input type="date" id="date-input">
        <br>
        <label>${I18n.t`modal.label3`}</label>
        <input type="checkbox" id="autoplay-music">
        <br><br>
        <button @click=${this.closeModal}>${I18n.t`modal.button1`}</button>
        <button @click=${this.handleSubmit}>${I18n.t`modal.button2`}</button>
    </div>
    </div>`}`;
  }
  closeModal() {
    this.modalRef.classList.remove("visible");
    document.body.style.overflow = "auto";
    this.requestUpdate();
  }
  openModal() {
    this.modalRef.classList.add("visible");
    document.body.style.overflow = "hidden";
    this.requestUpdate();
  }
  handleSubmit() {
    const [{ value: time }, { value: date }, { checked: autoplay }] = this.getRef();
    const timeInt = Number(time);
    if (timeInt < 0) return;
    setStorageFiled(StorageKeys.SETTINGS_SWITCH_TIME, timeInt);
    setStorageFiled(StorageKeys.SETTINGS_START_DATE, date);
    setStorageFiled(StorageKeys.SETTINGS_AUTOPLAY, autoplay);
    betterTimeout(() => window.location.reload(), 500);
  }
  firstUpdated() {
    const [time, date, autoplay] = this.getRef();
    time.value = getStorageFiled(StorageKeys.SETTINGS_SWITCH_TIME, DEFAULT_SETTINGS_SWITCH_TIME).toString();
    date.value = getStorageFiled(StorageKeys.SETTINGS_START_DATE, DEFAULT_SETTINGS_START_DATE);
    autoplay.checked = getStorageFiled(StorageKeys.SETTINGS_AUTOPLAY, DEFAULT_SETTINGS_AUTOPLAY);
    SenaEventsEmmiter.on("setModal", (isOpen) => isOpen ? this.openModal() : this.closeModal());
  }
  static {
    _initClass10();
  }
};

// src/Components/SenaNotification.ts
function applyDecs2203RFactory11() {
  function createAddInitializerMethod(initializers, decoratorFinishedRef) {
    return function addInitializer(initializer) {
      assertNotFinished(decoratorFinishedRef, "addInitializer");
      assertCallable(initializer, "An initializer");
      initializers.push(initializer);
    };
  }
  function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
    var kindStr;
    switch (kind) {
      case 1:
        kindStr = "accessor";
        break;
      case 2:
        kindStr = "method";
        break;
      case 3:
        kindStr = "getter";
        break;
      case 4:
        kindStr = "setter";
        break;
      default:
        kindStr = "field";
    }
    var ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      static: isStatic,
      private: isPrivate,
      metadata
    };
    var decoratorFinishedRef = {
      v: false
    };
    ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
    var get, set;
    if (kind === 0) {
      if (isPrivate) {
        get = desc.get;
        set = desc.set;
      } else {
        get = function() {
          return this[name];
        };
        set = function(v4) {
          this[name] = v4;
        };
      }
    } else if (kind === 2) {
      get = function() {
        return desc.value;
      };
    } else {
      if (kind === 1 || kind === 3) {
        get = function() {
          return desc.get.call(this);
        };
      }
      if (kind === 1 || kind === 4) {
        set = function(v4) {
          desc.set.call(this, v4);
        };
      }
    }
    ctx.access = get && set ? {
      get,
      set
    } : get ? {
      get
    } : {
      set
    };
    try {
      return dec(value, ctx);
    } finally {
      decoratorFinishedRef.v = true;
    }
  }
  function assertNotFinished(decoratorFinishedRef, fnName) {
    if (decoratorFinishedRef.v) {
      throw new Error("attempted to call " + fnName + " after decoration was finished");
    }
  }
  function assertCallable(fn, hint) {
    if (typeof fn !== "function") {
      throw new TypeError(hint + " must be a function");
    }
  }
  function assertValidReturnValue(kind, value) {
    var type = typeof value;
    if (kind === 1) {
      if (type !== "object" || value === null) {
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      }
      if (value.get !== void 0) {
        assertCallable(value.get, "accessor.get");
      }
      if (value.set !== void 0) {
        assertCallable(value.set, "accessor.set");
      }
      if (value.init !== void 0) {
        assertCallable(value.init, "accessor.init");
      }
    } else if (type !== "function") {
      var hint;
      if (kind === 0) {
        hint = "field";
      } else if (kind === 10) {
        hint = "class";
      } else {
        hint = "method";
      }
      throw new TypeError(hint + " decorators must return a function or void 0");
    }
  }
  function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
    var decs = decInfo[0];
    var desc, init, value;
    if (isPrivate) {
      if (kind === 0 || kind === 1) {
        desc = {
          get: decInfo[3],
          set: decInfo[4]
        };
      } else if (kind === 3) {
        desc = {
          get: decInfo[3]
        };
      } else if (kind === 4) {
        desc = {
          set: decInfo[3]
        };
      } else {
        desc = {
          value: decInfo[3]
        };
      }
    } else if (kind !== 0) {
      desc = Object.getOwnPropertyDescriptor(base, name);
    }
    if (kind === 1) {
      value = {
        get: desc.get,
        set: desc.set
      };
    } else if (kind === 2) {
      value = desc.value;
    } else if (kind === 3) {
      value = desc.get;
    } else if (kind === 4) {
      value = desc.set;
    }
    var newValue, get, set;
    if (typeof decs === "function") {
      newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
      if (newValue !== void 0) {
        assertValidReturnValue(kind, newValue);
        if (kind === 0) {
          init = newValue;
        } else if (kind === 1) {
          init = newValue.init;
          get = newValue.get || value.get;
          set = newValue.set || value.set;
          value = {
            get,
            set
          };
        } else {
          value = newValue;
        }
      }
    } else {
      for (var i3 = decs.length - 1; i3 >= 0; i3--) {
        var dec = decs[i3];
        newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
        if (newValue !== void 0) {
          assertValidReturnValue(kind, newValue);
          var newInit;
          if (kind === 0) {
            newInit = newValue;
          } else if (kind === 1) {
            newInit = newValue.init;
            get = newValue.get || value.get;
            set = newValue.set || value.set;
            value = {
              get,
              set
            };
          } else {
            value = newValue;
          }
          if (newInit !== void 0) {
            if (init === void 0) {
              init = newInit;
            } else if (typeof init === "function") {
              init = [
                init,
                newInit
              ];
            } else {
              init.push(newInit);
            }
          }
        }
      }
    }
    if (kind === 0 || kind === 1) {
      if (init === void 0) {
        init = function(instance, init2) {
          return init2;
        };
      } else if (typeof init !== "function") {
        var ownInitializers = init;
        init = function(instance, init2) {
          var value2 = init2;
          for (var i4 = 0; i4 < ownInitializers.length; i4++) {
            value2 = ownInitializers[i4].call(instance, value2);
          }
          return value2;
        };
      } else {
        var originalInitializer = init;
        init = function(instance, init2) {
          return originalInitializer.call(instance, init2);
        };
      }
      ret.push(init);
    }
    if (kind !== 0) {
      if (kind === 1) {
        desc.get = value.get;
        desc.set = value.set;
      } else if (kind === 2) {
        desc.value = value;
      } else if (kind === 3) {
        desc.get = value;
      } else if (kind === 4) {
        desc.set = value;
      }
      if (isPrivate) {
        if (kind === 1) {
          ret.push(function(instance, args) {
            return value.get.call(instance, args);
          });
          ret.push(function(instance, args) {
            return value.set.call(instance, args);
          });
        } else if (kind === 2) {
          ret.push(value);
        } else {
          ret.push(function(instance, args) {
            return value.call(instance, args);
          });
        }
      } else {
        Object.defineProperty(base, name, desc);
      }
    }
  }
  function applyMemberDecs(Class, decInfos, metadata) {
    var ret = [];
    var protoInitializers;
    var staticInitializers;
    var existingProtoNonFields = /* @__PURE__ */ new Map();
    var existingStaticNonFields = /* @__PURE__ */ new Map();
    for (var i3 = 0; i3 < decInfos.length; i3++) {
      var decInfo = decInfos[i3];
      if (!Array.isArray(decInfo)) continue;
      var kind = decInfo[1];
      var name = decInfo[2];
      var isPrivate = decInfo.length > 3;
      var isStatic = kind >= 5;
      var base;
      var initializers;
      if (isStatic) {
        base = Class;
        kind = kind - 5;
        staticInitializers = staticInitializers || [];
        initializers = staticInitializers;
      } else {
        base = Class.prototype;
        protoInitializers = protoInitializers || [];
        initializers = protoInitializers;
      }
      if (kind !== 0 && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
        var existingKind = existingNonFields.get(name) || 0;
        if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
          throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        } else if (!existingKind && kind > 2) {
          existingNonFields.set(name, kind);
        } else {
          existingNonFields.set(name, true);
        }
      }
      applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
    }
    pushInitializers(ret, protoInitializers);
    pushInitializers(ret, staticInitializers);
    return ret;
  }
  function pushInitializers(ret, initializers) {
    if (initializers) {
      ret.push(function(instance) {
        for (var i3 = 0; i3 < initializers.length; i3++) {
          initializers[i3].call(instance);
        }
        return instance;
      });
    }
  }
  function applyClassDecs(targetClass, classDecs, metadata) {
    if (classDecs.length > 0) {
      var initializers = [];
      var newClass = targetClass;
      var name = targetClass.name;
      for (var i3 = classDecs.length - 1; i3 >= 0; i3--) {
        var decoratorFinishedRef = {
          v: false
        };
        try {
          var nextNewClass = classDecs[i3](newClass, {
            kind: "class",
            name,
            addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
            metadata
          });
        } finally {
          decoratorFinishedRef.v = true;
        }
        if (nextNewClass !== void 0) {
          assertValidReturnValue(10, nextNewClass);
          newClass = nextNewClass;
        }
      }
      return [
        defineMetadata(newClass, metadata),
        function() {
          for (var i4 = 0; i4 < initializers.length; i4++) {
            initializers[i4].call(newClass);
          }
        }
      ];
    }
  }
  function defineMetadata(Class, metadata) {
    return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: metadata
    });
  }
  return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
    if (parentClass !== void 0) {
      var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
    }
    var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
    var e = applyMemberDecs(targetClass, memberDecs, metadata);
    if (!classDecs.length) defineMetadata(targetClass, metadata);
    return {
      e,
      get c() {
        return applyClassDecs(targetClass, classDecs, metadata);
      }
    };
  };
}
function _apply_decs_2203_r11(targetClass, memberDecs, classDecs, parentClass) {
  return (_apply_decs_2203_r11 = applyDecs2203RFactory11())(targetClass, memberDecs, classDecs, parentClass);
}
var _dec11;
var _initClass11;
var _LitElement11;
var _SenaNotification;
_dec11 = s("sena-notification");
var SenaNotification = class extends (_LitElement11 = t) {
  static {
    ({ c: [_SenaNotification, _initClass11] } = _apply_decs_2203_r11(this, [], [
      _dec11
    ], _LitElement11));
  }
  content = "";
  render() {
    return this.content ? Y`
      <link rel="stylesheet" href="/styles.css">
      <div class="notification show">${this.content}</div>` : Y``;
  }
  firstUpdated() {
    SenaEventsEmmiter.on("notify", (message) => {
      this.content = message;
      this.requestUpdate();
      betterTimeout(() => {
        this.content = "";
        this.requestUpdate();
      }, 5 * 1e3);
    });
  }
  static {
    _initClass11();
  }
};

// src/Components/SenaComponent.ts
var SenaComponent = class extends t {
  render() {
    return Y`
    <link rel="stylesheet" href="/styles.css">
    <sena-background></sena-background>
    <div class="container">
      <sena-title></sena-title>
      <sena-quotes></sena-quotes>
      <div class="content">
        <sena-details></sena-details>
        <sena-about></sena-about>
        <sena-messages></sena-messages>
        <sena-info></sena-info>
      </div>
    </div>
    <sena-sound-toggle></sena-sound-toggle>
    <sena-modal></sena-modal>
    <sena-notification></sena-notification>
    `;
  }
};

// src/utils/error.ts
var SenaError = class extends Error {
};

// src/index.ts
function main() {
  s("sena-component")(SenaComponent);
  eventsLooper();
  SenaState.setActiveCounter();
  SenaState.setMessagesList();
}
function bootstrap(key) {
  return new Promise((resolve, reject) => {
    if (key.split("").reduce((acc, curr) => acc + curr.charCodeAt(0), 0) !== 252929) {
      reject(new SenaError("Invalid key"));
      return;
    }
    try {
      main();
      resolve(void 0);
    } catch (e) {
      reject(new SenaError("Failed to initialize app", e));
    }
  });
}

// src/main.ts
bootstrap("\u59EB\u91CE\u661F\u594F\u3001\u6700\u9AD8\uFF01").then(() => {
  log("Hello from himenosena's lover!");
  log("If you like this, please give me a star on GitHub~: https://github.com/biyuehu/HimenoSena");
  log(`Messages list last updated at ${METADATA.lastUpdated ? new Date(METADATA.lastUpdated).toLocaleString() : "Unknown"}`);
}).catch((err) => {
  error(err.message);
});
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
