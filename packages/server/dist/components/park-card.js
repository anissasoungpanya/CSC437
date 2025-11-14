"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var park_card_exports = {};
__export(park_card_exports, {
  ParkCardElement: () => ParkCardElement
});
module.exports = __toCommonJS(park_card_exports);
var import_lit = require("lit");
var import_decorators = require("lit/decorators.js");
var import_reset_css = __toESM(require("./styles/reset.css.ts"));
class ParkCardElement extends import_lit.LitElement {
  @((0, import_decorators.property)({ attribute: "img-src" })) imgSrc;
  @((0, import_decorators.property)()) href;
  @((0, import_decorators.property)()) subtitle;
  static styles = [
    import_reset_css.default.styles,
    import_lit.css`
      :host { display: block; }
      article.card {
        border-radius: 1rem;
        overflow: hidden;
        background: var(--surface, #fff);
        box-shadow: var(--shadow-md, 0 4px 16px rgba(0,0,0,.1));
      }
      .box { padding: 12px; }
      h3 { font-size: 1rem; line-height: 1.3; margin-bottom: 4px; }
      h3 a {
        color: var(--text, #111);
        text-decoration: none;
      }
      h3 a:hover { text-decoration: underline; }
      p.meta {
        color: var(--muted, #666);
        font-size: .9rem;
      }
      /* Let page design tokens flow in; no hard-coded colors needed. */
    `
  ];
  render() {
    return import_lit.html`
      <article class="card">
        ${this.imgSrc ? import_lit.html`<img src="${this.imgSrc}" alt="" />` : import_lit.html`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href ? import_lit.html`<a href="${this.href}"><slot></slot></a>` : import_lit.html`<slot></slot>`}
          </h3>
          ${this.subtitle ? import_lit.html`<p class="meta">${this.subtitle}</p>` : null}
        </div>
      </article>
    `;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ParkCardElement
});
