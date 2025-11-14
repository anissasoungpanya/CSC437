import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.js";
import headings from "../styles/headings.css.js";

interface LoginFormData {
  username?: string;
  password?: string;
}

export class LoginFormElement extends LitElement {
  @state()
  formData: LoginFormData = {};

  @property()
  api?: string;

  @property()
  redirect: string = "/";

  @state()
  error?: string;

  get canSubmit(): boolean {
    return Boolean(
      this.api && this.formData.username && this.formData.password
    );
  }

  override render() {
    return html`
      <form
        @change=${(e: InputEvent) => this.handleChange(e)}
        @submit=${(e: SubmitEvent) => this.handleSubmit(e)}
      >
        <slot></slot>
        <slot name="button">
          <button ?disabled=${!this.canSubmit} type="submit">Login</button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `;
  }

  static styles = [
    reset.styles,
    headings.styles,
    css`
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      input {
        padding: 0.5rem;
        border: 1px solid var(--color-border, #ccc);
        border-radius: 4px;
        background: var(--color-card, #fff);
        color: var(--color-text, #000);
      }

      button {
        padding: 0.75rem 1.5rem;
        background: var(--color-accent, #38bdf8);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      button:hover:not(:disabled) {
        opacity: 0.9;
      }

      .error:not(:empty) {
        color: var(--color-error, #ef4444);
        border: 1px solid var(--color-error, #ef4444);
        padding: var(--size-spacing-medium, 1rem);
        border-radius: 4px;
        background: rgba(239, 68, 68, 0.1);
      }
    `,
  ];

  handleChange(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const name = target?.name;
    const value = target?.value;
    const prevData = this.formData;

    switch (name) {
      case "username":
        this.formData = { ...prevData, username: value };
        break;
      case "password":
        this.formData = { ...prevData, password: value };
        break;
    }
  }

  handleSubmit(submitEvent: SubmitEvent) {
    submitEvent.preventDefault();

    if (this.canSubmit) {
      fetch(this?.api || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      })
        .then((res) => {
          if (res.status !== 200) throw "Login failed";
          else return res.json();
        })
        .then((json: object) => {
          const { token } = json as { token: string };
          const customEvent = new CustomEvent("auth:message", {
            bubbles: true,
            composed: true,
            detail: ["auth/signin", { token, redirect: this.redirect }],
          });
          console.log("dispatching message", customEvent);
          this.dispatchEvent(customEvent);
        })
        .catch((error: Error) => {
          console.log(error);
          this.error = error.toString();
        });
    }
  }
}
