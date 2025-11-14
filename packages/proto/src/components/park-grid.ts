import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";

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

  _authObserver = new Observer<Auth.Model>(this, "parks:auth");
  _user?: Auth.User;

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      // Re-fetch data when auth state changes
      if (this.src && this._user?.authenticated) {
        this.hydrate(this.src);
      }
    });
    if (this.src) this.hydrate(this.src);
  }

  get authorization() {
    return (
      this._user?.authenticated && {
        Authorization: `Bearer ${(this._user as Auth.AuthenticatedUser).token}`,
      }
    );
  }

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

  async hydrate(src: string) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...this.authorization,
    };
    const res = await fetch(src, { headers });
    if (!res.ok) {
      if (res.status === 401) {
        console.error("Unauthorized - please log in");
      }
      return;
    }
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
