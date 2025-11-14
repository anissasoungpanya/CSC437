import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";

type CardItem = {
  title: string;
  href: string;
  subtitle?: string;
  imgSrc?: string;
};

type ParkData = {
  hikes: CardItem[];
  viewpoints: CardItem[];
  lodging: CardItem[];
  activities: CardItem[];
};

export class ParkGridElement extends LitElement {
  @property() src?: string;
  @state() private data?: ParkData;

  static styles = css`
    section {
      margin-bottom: 2rem;
    }
    h2 {
      text-align: left;
      display: flex;
      align-items: center;
      gap: 0.5rem;
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
  `;

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  async hydrate(src: string) {
    const res = await fetch(src);
    if (!res.ok) return;
    this.data = await res.json();
  }

  renderSection(title: string, iconId: string, items: CardItem[]) {
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
    if (!this.data) return html`<p>Loading...</p>`;
    const { hikes, viewpoints, lodging, activities } = this.data;
    return html`
      ${this.renderSection("Top Hikes", "icon-hike", hikes)}
      ${this.renderSection("Top Viewpoints", "icon-view", viewpoints)}
      ${this.renderSection("Top Lodging", "icon-bed", lodging)}
      ${this.renderSection("Top Activities", "icon-activity", activities)}
    `;
  }
}
