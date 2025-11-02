import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'
import { DEFAULT_SETTINGS_START_DATE, UNIQUE } from '../constant.ts'
import { SenaState } from '../data/state.ts'
import { getStorageFiled, StorageKeys } from '../data/storage.ts'
import { daysSince } from '../utils/date.ts'
import { SenaEventsEmmiter } from '../utils/eventsEmiter.ts'
import { I18n } from '../utils/i18n.ts'
import './SenaTextBlock.ts'

@customElement('sena-title')
export class SenaTitle extends LitElement {
  private adaptTextColor() {
    const ref = this.shadowRoot!.querySelector('.title')!
    if (SenaState.isBrightBackground) {
      ref.classList.add('dark-color')
    } else {
      ref.classList.remove('dark-color')
    }
    this.requestUpdate()
  }

  private readonly unique = ((fr) =>
    ((d) =>
      UNIQUE.reduce(
        (acc, cur, index) => (index % 2 === 0 ? [...acc, [cur, UNIQUE[index + 1]] as [number, number]] : acc),
        [] as [number, number][]
      )
        .map(([c, i]) => [d(c), fr(i)] as [string, number])
        .sort(([, i1], [, i2]) => i1 - i2)
        .map(([c]) => c)
        .join(''))((x: number) => String.fromCharCode(fr(x))))((x: number) => x / 12 - 6)

  public override render() {
    return html`
    <link rel="stylesheet" href="/styles.css">
    <div class="title">
      <div>${this.unique}</div>
      <div>${I18n.f`title.day`(
        daysSince(getStorageFiled(StorageKeys.SETTINGS_START_DATE, DEFAULT_SETTINGS_START_DATE)) ?? 1
      )}</div>
    </div>
    `
  }

  public override firstUpdated() {
    this.adaptTextColor()
    SenaEventsEmmiter.on('adaptTextColor', () => this.adaptTextColor())
  }
}
