import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";
import headings from "../styles/headings.css.ts";

interface RegisterFormData {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export class RegisterFormElement extends LitElement {
  @state()
  formData: RegisterFormData = {};

  @property()
  api?: string;

  @property()
  redirect: string = "/app";

  @state()
  error?: string;

  get canSubmit(): boolean {
    return Boolean(
      this.api &&
        this.formData.username &&
        this.formData.password &&
        this.formData.confirmPassword &&
        this.formData.password === this.formData.confirmPassword
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
          <button ?disabled=${!this.canSubmit} type="submit" id="signup-button">
            Sign Up
          </button>
        </slot>
        <p class="error">${this.error || ""}</p>
      </form>
    `;
  }

  static styles = [
    reset.styles,
    headings.styles,
    css`
      :host {
        display: block;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: relative;
      }

      div {
        width: 100%;
        margin-top: 1.5rem;
      }

      #signup-button {
        padding: 0.75rem 1.5rem !important;
        background: #38bdf8 !important;
        color: white !important;
        border: none !important;
        border-radius: 4px !important;
        cursor: pointer !important;
        font-weight: 600 !important;
        width: 100% !important;
        display: block !important;
        min-height: 44px !important;
        visibility: visible !important;
        opacity: 1 !important;
        box-sizing: border-box !important;
      }

      #signup-button:disabled {
        background: #94a3b8 !important;
        opacity: 0.6 !important;
        cursor: not-allowed !important;
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
        padding: 0.75rem 1.5rem !important;
        background: var(--color-accent, #38bdf8) !important;
        color: white !important;
        border: 2px solid var(--color-accent, #38bdf8) !important;
        border-radius: 4px !important;
        cursor: pointer !important;
        font-weight: 600 !important;
        font-size: 1rem !important;
        margin-top: 1.5rem !important;
        margin-bottom: 0 !important;
        width: 100% !important;
        display: block !important;
        min-height: 44px !important;
        visibility: visible !important;
        opacity: 1 !important;
        position: static !important;
        z-index: 1 !important;
        box-sizing: border-box !important;
        order: 999 !important;
      }

      button:disabled {
        opacity: 0.6 !important;
        cursor: not-allowed !important;
        background: var(--color-muted, #94a3b8) !important;
        border-color: var(--color-muted, #94a3b8) !important;
        visibility: visible !important;
        display: block !important;
        color: white !important;
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
        margin-bottom: 0.5rem;
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
      case "confirmPassword":
        this.formData = { ...prevData, confirmPassword: value };
        break;
    }

    if (this.error) {
      this.error = undefined;
    }

    // check passwrd match
    if (name === "confirmPassword" && this.formData.password !== value) {
      this.error = "Passwords do not match";
    } else if (
      name === "confirmPassword" &&
      this.formData.password === value &&
      this.error === "Passwords do not match"
    ) {
      this.error = undefined;
    }
  }

  handleSubmit(submitEvent: SubmitEvent) {
    submitEvent.preventDefault();

    if (!this.canSubmit) {
      if (this.formData.password !== this.formData.confirmPassword) {
        this.error = "Passwords do not match";
      }
      return;
    }

    fetch(this?.api || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.formData.username,
        password: this.formData.password,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else if (res.status === 409) {
          return res.json().then((json) => {
            throw new Error(json.error || "Username already exists");
          });
        } else {
          throw new Error("Registration failed");
        }
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
        this.error = error.message || error.toString();
      });
  }
}
