import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
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

  @state()
  private accessor currentQuote: [string, string?] = QUOTES_LIST[QUOTES_LIST.length - 1]

  @state()
  private accessor index: 0 | 1 = 0

  private updateQuote() {
    sleep(800).then(() => {
      this.currentQuote = this.getQuote()
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
    if (this.currentQuote === null || !this.currentQuote[1]) return
    this.index = 1
  }

  private onMouseLeave() {
    if (this.currentQuote === void 0) return
    this.index = 0
  }

  public override render() {
    return html`
      <link rel="stylesheet" href="./styles.css">
      <div class="quote dark-color ${
        this.currentQuote !== void 0 ? 'visible' : ''
      }" @mouseenter=${this.onMouseEnter} @mouseleave=${this.onMouseLeave}>
          ${this.currentQuote?.[this.index]}
      </div>
    `
  }

  public override firstUpdated() {
    this.currentQuote = this.getQuote()
    SenaEventsEmmiter.on('updateContent', () => this.updateQuote())
    SenaEventsEmmiter.on('adaptTextColor', (isBrightBackground) => this.adaptTextColor(isBrightBackground))
  }
}



