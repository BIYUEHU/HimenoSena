import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'
import { DEFAULT_SETTINGS_AUTOPLAY, DEFAULT_SETTINGS_START_DATE, DEFAULT_SETTINGS_SWITCH_TIME } from '../constant.ts'
import { getStorageFiled, StorageKeys, setStorageFiled } from '../data/storage.ts'
import { SenaEventsEmmiter } from '../utils/eventsEmiter.ts'
import { I18n } from '../utils/i18n.ts'
import { betterTimeout } from '../utils/timer.ts'

@customElement('sena-modal')
export class SenaModal extends LitElement {
  private get modalRef() {
    return this.shadowRoot!.querySelector('.modal') as HTMLDivElement
  }

  private getRef() {
    return [
      this.shadowRoot!.querySelector('#time-input') as HTMLInputElement,
      this.shadowRoot!.querySelector('#date-input') as HTMLInputElement,
      this.shadowRoot!.querySelector('#autoplay-music') as HTMLInputElement
    ]
  }

  public override render() {
    return html`
    <link rel="stylesheet" href="/styles.css">
    <button class="fixed-button-common modal-open" @click=${this.openModal}>⚙</button>
    ${html`
    <div class="modal">
      <div class="modal-content">
        <h2>${I18n.t`modal.title`}</h2>
        <label>${I18n.t`modal.label1`}</label>
        <input type="number" id="time-input" placeholder="${I18n.t`modal.placeholder1`}">
        <br>
        <label>${I18n.t`modal.label2`}</label>
        <input type="date" id="date-input">
        <br>
        <label>${I18n.t`modal.label3`}</label>
        <input type="checkbox" id="autoplay-music">
        <br><br>
        <button @click=${this.closeModal}>${I18n.t`modal.button1`}</button>
        <button @click=${this.handleSubmit}>${I18n.t`modal.button2`}</button>
    </div>
    </div>`}`
  }

  public closeModal() {
    this.modalRef.classList.remove('visible')
    document.body.style.overflow = 'auto'
    this.requestUpdate()
  }

  public openModal() {
    this.modalRef.classList.add('visible')
    document.body.style.overflow = 'hidden'
    this.requestUpdate()
  }

  public handleSubmit() {
    const [{ value: time }, { value: date }, { checked: autoplay }] = this.getRef()
    const timeInt = Number(time)
    if (timeInt < 0) return
    setStorageFiled(StorageKeys.SETTINGS_SWITCH_TIME, timeInt)
    setStorageFiled(StorageKeys.SETTINGS_START_DATE, date)
    setStorageFiled(StorageKeys.SETTINGS_AUTOPLAY, autoplay)
    betterTimeout(() => window.location.reload(), 500)
  }

  public override firstUpdated() {
    const [time, date, autoplay] = this.getRef()
    time.value = getStorageFiled(StorageKeys.SETTINGS_SWITCH_TIME, DEFAULT_SETTINGS_SWITCH_TIME).toString()
    date.value = getStorageFiled(StorageKeys.SETTINGS_START_DATE, DEFAULT_SETTINGS_START_DATE)
    autoplay.checked = getStorageFiled(StorageKeys.SETTINGS_AUTOPLAY, DEFAULT_SETTINGS_AUTOPLAY)
    SenaEventsEmmiter.on('setModal', (isOpen: boolean) => (isOpen ? this.openModal() : this.closeModal()))
  }
}
