import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { QUOTES_LIST } from '../constant.ts'
import SenaEventsEmmiter from '../utils/eventsEmiter.ts'
import { sleep } from '../utils/timer.ts'

@customElement('sena-quotes')
export class SenaQuotes extends LitElement {
  private getQuote(): [string, string?] {
    const prevQuote = this.currentQuote
    const result = QUOTES_LIST[Math.floor(Math.random() * QUOTES_LIST.length)]
    return prevQuote && prevQuote[0] === result[0] ? this.getQuote() : result
  }

  private currentQuote? = this.getQuote()

  private index: 0 | 1 = 0

  private updateQuote() {
    this.currentQuote = void 0
    this.requestUpdate()
    sleep(800).then(() => {
      this.currentQuote = this.getQuote()
      this.requestUpdate()
    })
  }

  private adaptTextColor(isBrightBackground: boolean) {
    const ref = this.shadowRoot?.querySelector('.quote')
    if (!ref) return
    if (isBrightBackground) {
      ref.classList.add('dark-color')
    } else {
      ref.classList.remove('dark-color')
    }
    this.requestUpdate()
  }

  private onMouseEnter() {
    if (this.currentQuote === void 0 || !this.currentQuote[1]) return
    this.index = 1
    this.requestUpdate()
  }

  private onMouseLeave() {
    if (this.currentQuote === void 0) return
    this.index = 0
    this.requestUpdate()
  }

  public override render() {
    return html`
      <link rel="stylesheet" href="/styles.css">
      <div class="quote ${
        this.currentQuote !== void 0 ? 'visible' : ''
      }" @mouseenter=${this.onMouseEnter} @mouseleave=${this.onMouseLeave}>
          ${this.currentQuote?.[this.index]}
      </div>
    `
  }

  public override firstUpdated() {
    this.adaptTextColor(false)
    SenaEventsEmmiter.on('updateContent', () => this.updateQuote())
    SenaEventsEmmiter.on('adaptTextColor', (isBrightBackground) => this.adaptTextColor(isBrightBackground))
  }
}
