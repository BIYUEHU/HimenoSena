import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { isHimenoSenaBirthday } from '../utils/birthday.ts'
import SenaEventsEmmiter from '../utils/eventsEmiter.ts'

@customElement('sena-birthday')
export class SenaBirthday extends LitElement {
  private isBirthday = false

  private previousTitle = ''

  private readonly petals = Array.from({ length: 34 }, (_, index) => index)

  private getPetalStyle(index: number) {
    const left = (index * 37 + 9) % 100
    const drift = ((index % 7) - 3) * 34
    const size = 9 + (index % 4) * 2
    const duration = 9 + (index % 6) * 1.2
    return `--birthday-left: ${left}vw; --birthday-drift: ${drift}px; --birthday-size: ${size}px; --birthday-duration: ${duration}s; --birthday-delay: -${index * 0.36}s`
  }

  public override render() {
    if (!this.isBirthday) return html``

    return html`
      <link rel="stylesheet" href="./styles.css">
      <div class="birthday-layer" aria-hidden="true">
        <div class="birthday-glow"></div>
        ${this.petals.map((index) => html`<span class="birthday-petal" style=${this.getPetalStyle(index)}></span>`)}
      </div>
      <div class="birthday-note">
        <div>Happy Birthday</div>
        <strong>Himeno Sena</strong>
        <span>星の音が、今日だけ少し近くに聞こえる。</span>
      </div>
    `
  }

  public override connectedCallback() {
    super.connectedCallback()
  }

  public override disconnectedCallback() {
    super.disconnectedCallback()
    if (!this.isBirthday || typeof document === 'undefined') return
    document.documentElement.classList.remove('birthday-mode')
    document.title = this.previousTitle
  }

  public override firstUpdated() {
    if (typeof document === 'undefined') return
    this.isBirthday = isHimenoSenaBirthday()
    if (!this.isBirthday) return
    this.previousTitle = document.title
    document.documentElement.classList.add('birthday-mode')
    document.title = 'Happy Birthday, Himeno Sena!'
    SenaEventsEmmiter.emit('notify', '今日は姫野星奏の誕生日。星奏、誕生日おめでとう。')
    this.requestUpdate()
  }


}
