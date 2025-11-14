"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var park_grid_exports = {};
__export(park_grid_exports, {
  ParkGridElement: () => ParkGridElement
});
module.exports = __toCommonJS(park_grid_exports);
var import_lit = require("lit");
var import_decorators = require("lit/decorators.js");
class ParkGridElement extends import_lit.LitElement {
  @((0, import_decorators.property)()) src;
  @((0, import_decorators.state)()) data;
  static styles = import_lit.css`
    section {
      margin-bottom: 2rem;
    }
    .grid {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  `;
  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }
  async hydrate(src) {
    const res = await fetch(src);
    if (!res.ok) return;
    this.data = await res.json();
  }
  renderSection(title, iconId, items) {
    return import_lit.html`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${iconId}"></use>
          </svg>
          ${title}
        </h2>
        <div class="grid">
          ${items.map(
      (it) => import_lit.html`
              <park-card
                href=${it.href}
                subtitle=${it.subtitle ?? ""}
                img-src=${it.imgSrc ?? ""}
              >
                ${it.title}
              </park-card>
            `
    )}
        </div>
      </section>
    `;
  }
  render() {
    if (!this.data) return import_lit.html`<p>Loading...</p>`;
    const { hikes, viewpoints, lodging, activities } = this.data;
    return import_lit.html`
      ${this.renderSection("Top Hikes", "icon-hike", hikes)}
      ${this.renderSection("Top Viewpoints", "icon-view", viewpoints)}
      ${this.renderSection("Top Lodging", "icon-bed", lodging)}
      ${this.renderSection("Top Activities", "icon-activity", activities)}
    `;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ParkGridElement
});
