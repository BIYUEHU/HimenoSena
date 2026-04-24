import { html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { REPO_URL } from '../constant.ts'
import I18n from '../utils/i18n.ts'
import './SenaTextBlock.ts'
import SenaState from '../data/state.ts'
import type { Message } from '../types.ts'
import { SenaError } from '../utils/error.ts'

@customElement('sena-info')
export class SenaInfo extends LitElement {
  @property({ type: Number })
  private accessor views = 0

  @property({ type: Array })
  private accessor messages!: Message[]

  @state()
  private accessor isPhone = true

  public override render() {
    if (!this.messages) throw new SenaError('sena-info component: messages property is required')
    return html`
    <link rel="stylesheet" href="./styles.css">
    <sena-text-block>
      ${
        this.isPhone
          ? I18n.f`info.line1.phone`(this.views, this.messages.length)
          : I18n.f`info.line1.pc`(this.views, this.messages.length)
      }<br />
    ${this.isPhone ? I18n.t`info.line2.phone` : I18n.t`info.line2.pc`}
    <br />
      Made With Love and Open Sourced on <a target="_blank" href="${REPO_URL}">GitHub</a>.
    </sena-text-block>
    `
  }

  public override firstUpdated(): void {
    this.isPhone = SenaState.isPhone()
  }
}



