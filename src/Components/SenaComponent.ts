import { html, LitElement } from 'lit'
import './SenaBackground.ts'
import './SenaTitle.ts'
import './SenaQuotes.ts'
import './SenaDetails.ts'
import './SenaAbout.ts'
import './SenaMessages.ts'
import './SenaInfo.ts'
import './SenaSoundToggle.ts'
import './SenaModal.ts'
import './SenaNotification.ts'
import { state } from 'lit/decorators.js'
import { fetchMessageList } from '../http/index.ts'
import type { Message } from '../types.ts'
import SenaEventsEmmiter from '../utils/eventsEmiter.ts'
import { error } from '../utils/logger.ts'

export class SenaComponent extends LitElement {
  @state()
  private accessor messages: Message[] = []

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
        <sena-messages .messages=${this.messages}></sena-messages>
        <sena-info .messages=${this.messages}></sena-info>
      </div>
    </div>
    <sena-sound-toggle></sena-sound-toggle>
    <sena-modal></sena-modal>
    <sena-notification></sena-notification>
    `
  }

  public override firstUpdated() {
    fetchMessageList()
      .then((res) => {
        this.messages.push(...res)
      })
      .catch((err) => {
        SenaEventsEmmiter.emit('notify', 'Error: failed to fetch message list, please check your network connection')
        error(`[Sena] Failed to fetch message list: ${err instanceof Error ? err.message : err}`)
      })
  }
}
