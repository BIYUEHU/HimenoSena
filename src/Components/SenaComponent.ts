import { html, LitElement } from "lit";
import "./SenaBackground.ts";
import "./SenaTitle.ts";
import "./SenaQuotes.ts";
import "./SenaDetails.ts";
import "./SenaAbout.ts";
import "./SenaMessages.ts";
import "./SenaInfo.ts";
import "./SenaSoundToggle.ts";
import "./SenaModal.ts";

export class SenaComponent extends LitElement {
  public override render() {
    return html`
    <link rel="stylesheet" href="/styles.css">
    <sena-background></sena-background>
    <div class="container">
      <sena-title></sena-title>
      <sena-quotes></sena-quotes>
      <div class="content">
        <sena-details></sena-details>
        <sena-about></sena-about>
        <sena-messages></sena-messages>
        <sena-info></sena-info>
      </div>
    </div>
    <sena-sound-toggle></sena-sound-toggle>
    <sena-modal></sena-modal>
    `;
  }
}
