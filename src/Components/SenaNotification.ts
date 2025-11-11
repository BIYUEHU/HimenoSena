import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'
import { SenaEventsEmmiter } from '../utils/eventsEmiter.ts'
import { betterTimeout } from '../utils/timer.ts'

@customElement('sena-notification')
export class SenaNotification extends LitElement {
  private content = ''

  public override render() {
    return this.content
      ? html`
      <link rel="stylesheet" href="/styles.css">
      <div class="notification show">${this.content}</div>`
      : html``
  }

  public override firstUpdated() {
    SenaEventsEmmiter.on('notify', (message) => {
      this.content = message
      this.requestUpdate()
      betterTimeout(() => {
        this.content = ''
        this.requestUpdate()
      }, 5 * 1000)
    })
  }
}
