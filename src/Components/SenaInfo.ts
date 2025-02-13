import { html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import { IS_PHONE, METADATA, REPO_URL } from "../constant.ts";
import { SenaState } from "../data/state.ts";
import { I18n } from "../utils/i18n.ts";
import { SenaEventsEmmiter } from "../utils/eventsEmiter.ts";
import "./SenaTextBlock.ts";

@customElement("sena-info")
export class SenaInfo extends LitElement {
  public override render() {
    return html`
    <link rel="stylesheet" href="/styles.css">
    <sena-text-block>
      ${
      IS_PHONE
        ? I18n.f`info.line1.phone`(
          METADATA.views,
          SenaState.messagesList.length,
        )
        : I18n.f`info.line1.pc`(METADATA.views, SenaState.messagesList.length)
    }<br />
    ${IS_PHONE ? I18n.t`info.line2.phone` : I18n.t`info.line2.pc`}
    <br />
      Made With Love and Open Sourced on <a target="_blank" href="${REPO_URL}">GitHub</a>.
    </sena-text-block>
    `;
  }

  public override firstUpdated() {
    SenaEventsEmmiter.on("updateMessages", () => this.requestUpdate());
  }
}
