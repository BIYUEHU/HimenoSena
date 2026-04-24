import { html, LitElement } from 'lit'
import { BACKGROUND_LIST, BRIGHT_BACKGROUND_LIST } from '../constant.ts'
import SenaEventsEmmiter from '../utils/eventsEmiter.ts'
import { nextTick, sleep } from '../utils/timer.ts'
import './SenaTextBlock.ts'
import { customElement, state } from 'lit/decorators.js'

@customElement('sena-background')
export class SenaBackground extends LitElement {
  private static getBackground(fixed = false) {
    const result =
      BACKGROUND_LIST[fixed ? BACKGROUND_LIST.length - 1 : Math.floor(Math.random() * BACKGROUND_LIST.length)]
    SenaEventsEmmiter.emit('adaptTextColor', BRIGHT_BACKGROUND_LIST.includes(result))
    return result
  }

  private static preloadImages() {
    const preloadContainer = document.createElement('div')
    preloadContainer.style.display = 'none'
    document.body.appendChild(preloadContainer)

    for (const imageSrc of BACKGROUND_LIST) {
      const img = document.createElement('img')
      img.src = imageSrc
      preloadContainer.appendChild(img)
    }
  }

  @state()
  private accessor background: string = SenaBackground.getBackground(true)

  private get backgroundRef() {
    return this.shadowRoot?.querySelector('#bg') as HTMLImageElement
  }

  private async updateBackground() {
    const ref = this.backgroundRef
    ref.style.opacity = '0'
    this.requestUpdate()

    await sleep(1500)
    this.background = SenaBackground.getBackground()
    ref.src = this.background
    this.requestUpdate()

    await sleep(100)
    ref.style.opacity = '0.85'
    this.requestUpdate()
  }

  public override render() {
    return html`
    <link rel="stylesheet" href="./styles.css">
    <img id="bg" src="${this.background}" alt="Background Image">
    `
  }

  public override firstUpdated() {
    nextTick(() => (this.background = SenaBackground.getBackground()))
    nextTick(() => SenaBackground.preloadImages())
    const ref = this.backgroundRef
    ;['touchstart', 'contextmenu', 'touchmove'].map((eventName) =>
      ref.addEventListener(eventName, (event) => event.preventDefault())
    )
    SenaEventsEmmiter.on('updateContent', () => this.updateBackground())
  }
}



