import { html, css, LitElement } from "lit";
import { state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";
import reset from "../styles/reset.css.ts";
import headings from "../styles/headings.css.ts";

const THEME_KEY = "parks:theme";

export class ParksHeaderElement extends LitElement {
  @state() private _user?: Auth.User;
  @state() private _theme: "light" | "dark" = "light";
  _authObserver = new Observer<Auth.Model>(this, "parks:auth");

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
    });
    const saved =
      (typeof localStorage !== "undefined" &&
        (localStorage.getItem(THEME_KEY) as "light" | "dark" | null)) ||
      null;
    this.applyTheme(saved || this._theme);
  }

  static styles = [
    reset.styles,
    headings.styles,
    css`
      :host {
        display: block;
        padding: 2rem 1rem;
        background: var(--color-header-bg, #0b1220);
        border-bottom: 1px solid var(--color-border, #1f2937);
      }
      header {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: var(--color-text-header, #f8fafc);
      }
      p {
        color: var(--color-muted, #94a3b8);
        margin-bottom: 1rem;
      }
      .auth-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
      }
      .auth-info a {
        color: var(--color-accent, #38bdf8);
        text-decoration: none;
      }
      .auth-info a:hover {
        text-decoration: underline;
      }
      .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .toggle {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        color: var(--color-muted, #94a3b8);
        font-weight: 600;
      }
      .toggle input {
        width: 1.1rem;
        height: 1.1rem;
        accent-color: var(--color-accent, #38bdf8);
      }
    `,
  ];

  render() {
    return html`
      <header>
        <div class="bar">
          <div>
            <h1>National Parks</h1>
            <p>
              Select a park to explore hikes, viewpoints, lodging, wildlife and
              foliage.
            </p>
            ${this._user?.authenticated
              ? html`
                  <div class="auth-info">
                    <span
                      >Logged in as:
                      ${(this._user as Auth.AuthenticatedUser).username}</span
                    >
                    <a href="/login.html" @click=${this.handleSignOut}
                      >Sign out</a
                    >
                  </div>
                `
              : html`
                  <div class="auth-info">
                    <a href="/login.html">Log in</a>
                  </div>
                `}
          </div>
          <div>
            <label class="toggle">
              <input
                type="checkbox"
                .checked=${this._theme === "dark"}
                @change=${this.handleToggle}
              />
              Dark mode
            </label>
          </div>
        </div>
      </header>
    `;
  }

  private applyTheme(theme: "light" | "dark") {
    this._theme = theme;
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
      document.body.classList.toggle("dark-mode", theme === "dark");
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(THEME_KEY, theme);
    }
  }

  private handleToggle(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.applyTheme(checked ? "dark" : "light");
  }

  handleSignOut(event: Event) {
    event.preventDefault();
    this.dispatchEvent(
      new CustomEvent("auth:message", {
        bubbles: true,
        composed: true,
        detail: ["auth/signout"],
      })
    );
    window.location.href = "/login.html";
  }
}
