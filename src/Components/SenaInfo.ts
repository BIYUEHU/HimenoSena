import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { REPO_URL } from '../constant.ts'
import I18n from '../utils/i18n.ts'
import './SenaTextBlock.ts'
import { getViews } from '../http/index.ts'
import SenaEventsEmmiter from '../utils/eventsEmiter.ts'

@customElement('sena-info')
export class SenaInfo extends LitElement {
  @state()
  private accessor views = 0

  @state()
  private accessor messagesCount = 0

  public override render() {
    return html`
    <link rel="stylesheet" href="/styles.css">
    <sena-text-block>
      <div class="phone-only">
        ${I18n.f`info.line1.phone`(this.views, this.messagesCount)}<br />
        ${I18n.t`info.line2.phone`}
      </div>
      <div class="desktop-only">
        ${I18n.f`info.line1.pc`(this.views, this.messagesCount)}<br />
        ${I18n.t`info.line2.pc`}
      </div>
      Made With Love and Open Sourced on <a target="_blank" href="${REPO_URL}">GitHub</a>.
    </sena-text-block>
    `
  }

  public override firstUpdated() {
    SenaEventsEmmiter.on('loadedMessages', (messages) => {
      this.messagesCount = messages.length
    })
    getViews().then((views) => {
      this.views = views
    })
  }
}
