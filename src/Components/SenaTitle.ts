import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import "./SenaTextBlock.ts";
import { EventsEmmiter } from "../utils/eventsEmiter.ts";

@customElement("sena-title")
export class SenaTitle extends LitElement {
  public static readonly styles = css`
  .title {
    text-align: center;
    margin: 2rem 0 0rem 0;
    font-family: 'Playfair Display', serif;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.2);
  }

  .dark-title {
    color: #333;
  }

  .title>*:first-child {
    font-size: 4.5rem;
    letter-spacing: 0.05em;
    font-style: italic;
  }

  .title>*:last-child {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 3rem;
    }
  }
  `;

  private generateDynamicTitle(): string {
    const date = new Date();
    return `${date.getDate()}`;
  }

  private adaptTextColor(isBrightBackground: boolean) {
    const ref = this.shadowRoot!.querySelector(".title")!;
    if (isBrightBackground) {
      ref.classList.add("dark-title");
    } else {
      ref.classList.remove("dark-title");
    }
    this.requestUpdate();
  }

  public override render() {
    return html`
    <div class="title">
      <div>Himeno Sena</div>
      <div>The ${this.generateDynamicTitle()} day of love</div>
    </div>
    `;
  }

  public override firstUpdated() {
    EventsEmmiter.on(
      "adaptTextColor",
      (isBrightBackground) => this.adaptTextColor(isBrightBackground),
    );
  }
}
