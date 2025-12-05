import { define, Form, History, View } from "@calpoly/mustang";
import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { ParkData } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";
import reset from "../styles/reset.css.ts";
import headings from "../styles/headings.css.ts";

export class ParkEditViewElement extends View<Model, Msg> {
  static uses = define({
    "mu-form": Form.Element,
  });

  @property({ attribute: "park-id" }) parkId?: string;

  @state()
  get park(): ParkData | undefined {
    return this.model.park;
  }

  constructor() {
    super("parks:model");
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === "park-id" && newVal && newVal !== oldVal) {
      this.dispatchMessage(["park/request", { parkId: newVal }]);
    }
  }

  handleSubmit(event: Form.SubmitEvent<Partial<ParkData>>) {
    if (!this.parkId) return;
    this.dispatchMessage([
      "park/save",
      { parkId: this.parkId, park: event.detail },
      {
        onSuccess: () =>
          History.dispatch(this, "history/navigate", {
            href: `/app/park/${this.parkId}`,
          }),
        onFailure: (err: Error) => console.error("Save failed:", err.message),
      },
    ]);
  }

  render() {
    if (!this.parkId) return html`<p>No park specified</p>`;
    return html`
      <main>
        <h1>Edit ${this.parkId}</h1>
        <mu-form
          .init=${this.park}
          @mu-form:submit=${this.handleSubmit}
          class="card"
        >
          <label>
            <span>Park Name</span>
            <input name="name" .value=${this.park?.name ?? ""} />
          </label>
          <label>
            <span>Park Id (read-only)</span>
            <input name="parkId" .value=${this.parkId} readonly />
          </label>
          <button type="submit">Save</button>
        </mu-form>
      </main>
    `;
  }

  static styles = [
    reset.styles,
    headings.styles,
    css`
      main {
        max-width: 720px;
        margin: 0 auto;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.25rem;
        background: var(--color-card, #0b1220);
        border: 1px solid var(--color-border, #1f2937);
        border-radius: 8px;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      input {
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid var(--color-border, #1f2937);
        background: var(--color-card, #0b1220);
        color: var(--color-text, #e5e7eb);
      }
      button {
        padding: 0.75rem 1.5rem;
        background: var(--color-accent, #38bdf8);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 700;
      }
      button:hover {
        opacity: 0.9;
      }
    `,
  ];
}
