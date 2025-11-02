import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'
import { GITHUB_URL, LEAVE_MESSAGES_DOCS } from '../constant.ts'
import { SenaState } from '../data/state.ts'
import type { Message } from '../types.ts'
import { SenaEventsEmmiter } from '../utils/eventsEmiter.ts'
import { I18n } from '../utils/i18n.ts'
import './SenaTextBlock.ts'

@customElement('sena-messages')
export class SenaMessages extends LitElement {
  private static getMessage() {
    return SenaState.messagesList[Math.floor(Math.random() * SenaState.messagesList.length)]
  }

  private message: Message = SenaMessages.getMessage()

  private refreshMessage() {
    this.message = SenaMessages.getMessage()
    this.requestUpdate()
  }

  public override render() {
    return html`
    <link rel="stylesheet" href="/styles.css">
    <sena-text-block title="Messages">
      <p class="messages" @click="${this.refreshMessage}">${this.message.msg}——By <a href="${GITHUB_URL}/${this.message.user}" target="_blank">${this.message.name}</a></p>
      <a href="${LEAVE_MESSAGES_DOCS}" target="_blank">${I18n.t`messages.button`}</a>
    </sena-text-block>
    `
  }

  public override firstUpdated() {
    SenaEventsEmmiter.on('updateMessages', () => this.refreshMessage())
  }
}
