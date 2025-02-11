// @ts-nocheck: fucking deno
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";

@customElement("sena-text-block")
export class SenaTextBlock extends LitElement {
  public static readonly styles = css`
    .text-block {
      background: rgba(0, 0, 0, 0.2);
      padding: 1.5rem 2.0rem;
      border-radius: 1rem;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(4px);
      width: 900px;
      margin: 0 auto;
      max-width: 90%;
    }

    .text-block:hover {
      box-shadow: 0 8px 18px rgba(255, 255, 255, 0.3);
    }

    .text-block>h2 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      border-bottom: 2px solid rgba(44, 62, 80, 0.2);
      padding-bottom: 0.5rem;
    }

    .text-block>div {
      font-size: 1.1rem;
      text-align: justify;
    }

    @media (max-width: 768px) {
      .text-block {
        padding: 1.5rem;
      }
      .text-block>div {
        font-size: 1rem;
      }
    }
  `;

  @property({ type: String })
  public title = "";

  public override render() {
    return html`
      <div class="text-block">
        ${this.title ? html`<h2>${this.title}</h2>` : ""}
        <div><slot /></div>
      </div>
    `;
  }
}
