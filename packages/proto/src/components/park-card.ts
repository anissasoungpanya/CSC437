import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";

export class ParkCardElement extends LitElement {
  @property({ attribute: "img-src" }) imgSrc?: string;
  @property() href?: string;
  @property() subtitle?: string;

  static styles = [
    reset.styles,
    css`
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

  override render() {
    return html`
      <article class="card">
        ${this.imgSrc
          ? html`<img src="${this.imgSrc}" alt="" />`
          : html`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href
              ? html`<a href="${this.href}"><slot></slot></a>`
              : html`<slot></slot>`}
          </h3>
          ${this.subtitle
            ? html`<p class="meta">${this.subtitle}</p>`
            : null}
        </div>
      </article>
    `;
  }
}
