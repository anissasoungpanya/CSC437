import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";

export class ParkCardElement extends LitElement {
  @property({ attribute: "img-src" }) imgSrc?: string;
  @property() href?: string;
  @property() subtitle?: string;
  @property({ attribute: "link-label" }) linkLabel?: string;

  static styles = [
    reset.styles,
    css`
      :host {
        display: block;
      }
      article.card {
        border-radius: 1rem;
        overflow: hidden;
        background: var(--color-card, #111827);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      article.card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      }
      article.card img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        background: #0f172a;
      }
      .box {
        padding: 12px;
      }
      h3 {
        font-size: 1rem;
        line-height: 1.3;
        margin-bottom: 4px;
      }
      .title-text {
        color: var(--color-text-header, #f8fafc);
      }
      h3 a {
        color: var(--color-text-header, #f8fafc);
        text-decoration: none;
      }
      h3 a:hover {
        color: var(--color-accent, #38bdf8);
        text-decoration: underline;
      }
      p.meta {
        color: var(--color-muted, #94a3b8);
        font-size: 0.9rem;
      }
      p.cta {
        margin-top: 8px;
      }
      p.cta a {
        color: var(--color-accent, #38bdf8);
        font-weight: 600;
        text-decoration: none;
      }
      p.cta a:hover {
        text-decoration: underline;
      }
    `,
  ];

  override render() {
    const showLinkLabel = Boolean(this.linkLabel && this.href);

    return html`
      <article class="card">
        ${this.imgSrc
          ? html`<img src="${this.imgSrc}" alt="" />`
          : html`<img alt="" />`}
        <div class="box">
          <h3>
            ${showLinkLabel
              ? html`<span class="title-text"><slot></slot></span>`
              : this.href
              ? html`<a href="${this.href}"><slot></slot></a>`
              : html`<slot></slot>`}
          </h3>
          ${this.subtitle ? html`<p class="meta">${this.subtitle}</p>` : null}
          ${showLinkLabel
            ? html`<p class="cta">
                <a href="${this.href}" target="_blank" rel="noopener noreferrer"
                  >${this.linkLabel}</a
                >
              </p>`
            : null}
        </div>
      </article>
    `;
  }
}
