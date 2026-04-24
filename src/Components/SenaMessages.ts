import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { DEFAULT_MESSAGE, GITHUB_URL, LEAVE_MESSAGES_DOCS } from '../constant.ts'
import type { Message } from '../types.ts'
import I18n from '../utils/i18n.ts'
import './SenaTextBlock.ts'

import { SenaError } from '../utils/error.ts'
import SenaEventsEmmiter from '../utils/eventsEmiter.ts'

@customElement('sena-messages')
export class SenaMessages extends LitElement {
  private readonly messages: Message[] = []

  @state()
  private accessor message: Message = DEFAULT_MESSAGE

  private refreshMessage() {
    this.message = this.messages[Math.floor(Math.random() * this.messages.length)] ?? DEFAULT_MESSAGE
  }

  public override render() {
    if (!this.messages) throw new SenaError('sena-messages component: messages property is required')
    return html`
    <link rel="stylesheet" href="/styles.css">
    <sena-text-block title="Messages">
      <p class="messages" @click="${this.refreshMessage}">${this.message.msg}——By <a href="${GITHUB_URL}/${this.message.user}" target="_blank">${this.message.name}</a></p>
      <a href="${LEAVE_MESSAGES_DOCS}" target="_blank">${I18n.t`messages.button`}</a>
    </sena-text-block>
    `
  }

  public override firstUpdated() {
    SenaEventsEmmiter.on('loadedMessages', (messages) => {
      this.messages.push(...messages)
      this.refreshMessage()
    })
  }
}
