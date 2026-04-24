import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import SenaEventsEmmiter from '../utils/eventsEmiter.ts'
import { betterTimeout } from '../utils/timer.ts'

@customElement('sena-notification')
export class SenaNotification extends LitElement {
  @state()
  private accessor content = ''

  public override render() {
    return this.content
      ? html`
      <link rel="stylesheet" href="./styles.css">
      <div class="notification show">${this.content}</div>`
      : html``
  }

  public override firstUpdated() {
    SenaEventsEmmiter.on('notify', (message) => {
      this.content = message
      betterTimeout(() => {
        this.content = ''
      }, 5 * 1000)
    })
  }
}



