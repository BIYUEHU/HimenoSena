import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import SenaState from '../data/state.ts'
import I18n from '../utils/i18n.ts'

@customElement('sena-details')
export class SenaDetails extends LitElement {
  @state()
  private accessor details: [string, string, boolean][] = [
    [I18n.t`details.line1.front`, I18n.t`details.line1.back`, false],
    [I18n.t`details.line2.front`, I18n.t`details.line2.back`, false],
    [I18n.t`details.line3.front`, I18n.t`details.line3.back`, false],
    [I18n.t`details.line4.front`, I18n.t`details.line4.back`, false]
  ]

  @state()
  private accessor isPhone = true

  private onMouseEnterFactory(index: number) {
    return () => {
      this.details[index][2] = true
    }
  }

  private onMouseLeaveFactory(index: number) {
    return () => {
      this.details[index][2] = false
    }
  }

  // TODO: fix this
  public override render() {
    return this.isPhone
      ? ''
      : html`
      <link rel="stylesheet" href="./styles.css">
      <div class="details">
      ${this.details.map(
        ([front, back, isHovering], index) =>
          html`<div @mouseenter=${this.onMouseEnterFactory(index)} @mouseleave=${this.onMouseLeaveFactory(
            index
          )}>${isHovering ? back : front}</div>`
      )}
      </div>
    `
  }

  public override firstUpdated() {
    this.isPhone = SenaState.isPhone()
  }
}



