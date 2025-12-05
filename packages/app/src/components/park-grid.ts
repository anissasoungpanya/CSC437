import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { CardItem, ParkData } from "server/models";
import reset from "../styles/reset.css.ts";

export class ParkGridElement extends LitElement {
  @property({ attribute: false })
  park?: ParkData;

  static styles = [
    reset.styles,
    css`
      :host {
        display: block;
      }
      section {
        margin-bottom: 2rem;
      }
      h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      h2 .icon {
        width: 1em;
        height: 1em;
        display: inline-block;
        vertical-align: middle;
      }
      .grid {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      }
    `,
  ];

  private renderSection(
    title: string,
    iconId: string,
    items: CardItem[],
    linkLabel?: string
  ) {
    if (!items?.length) return null;
    return html`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${iconId}"></use>
          </svg>
          ${title}
        </h2>
        <div class="grid">
          ${items.map(
            (it) => html`
              <park-card
                href=${it.href}
                subtitle=${it.subtitle ?? ""}
                img-src=${it.imgSrc ?? ""}
                link-label=${linkLabel ?? ""}
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
    const park = this.park;
    if (!park) return html`<p>Loading park details...</p>`;

    const hikes = park.hikes ?? [];
    const viewpoints = park.viewpoints ?? [];
    const lodging = park.lodging ?? [];
    const activities = park.activities ?? [];

    return html`
      ${this.renderSection("Top Hikes", "icon-hike", hikes)}
      ${this.renderSection("Top Viewpoints", "icon-view", viewpoints)}
      ${this.renderSection("Top Lodging", "icon-bed", lodging, "Book here")}
      ${this.renderSection("Top Activities", "icon-activity", activities)}
    `;
  }
}
