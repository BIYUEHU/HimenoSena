import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import "./SenaQuotes.ts";
import "./SenaSoundToggle.ts";
import "./SenaDetails.ts";
import "./SenaAbout.ts";
import "./SenaComments.ts";
import "./SenaCopyright.ts";
import "./SenaBackground.ts";
import "./SenaTitle.ts";

@customElement("sena-component")
export class SenaComponent extends LitElement {
  public static readonly styles = css`
  .container {
    position: relative;
    z-index: 1;
    padding: 2rem;
    width: 1200px;
    max-width: 95vw;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 1rem 0;
  }


  @media (max-width: 768px) {
    .content {
      gap: 2rem;
    }
  }
  `;

  public override render() {
    return html`
      <sena-background></sena-background>
      <div class="container">
        <sena-title></sena-title>
        <sena-quotes></sena-quotes>
        <div class="content">
          <sena-details></sena-details>
          <sena-about></sena-about>
          <sena-comments></sena-comments>
          <sena-copyright></sena-copyright>
        </div>
      </div>
      <sena-sound-toggle></sena-sound-toggle>
    `;
  }
}
