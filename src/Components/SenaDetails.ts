import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";

@customElement("sena-details")
export class SenaDetails extends LitElement {
  public static readonly styles = css`
  .details {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .details>div {
    background: rgba(0, 0, 0, 0.2);
    padding: 1rem 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(4px);
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
  }

  .details>div:hover {
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  }
  `;

  public override render() {
    return html`
      <div class="details">
        <div>B:85 W:52 H:91</div>
        <div>Gemini</div>
        <div>12 June</div>
        <div>Type A</div>
      </div>
    `;
  }
}
