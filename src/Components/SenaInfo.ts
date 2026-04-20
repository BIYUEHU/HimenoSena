import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { IS_PHONE, METADATA, REPO_URL } from '../constant.ts'
import I18n from '../utils/i18n.ts'
import './SenaTextBlock.ts'
import type { Message } from '../types.ts'
import { SenaError } from '../utils/error.ts'

@customElement('sena-info')
export class SenaInfo extends LitElement {
  @property({ type: Array })
  private accessor messages!: Message[]

  public override render() {
    if (!this.messages) throw new SenaError('sena-info component: messages property is required')
    return html`
    <link rel="stylesheet" href="/styles.css">
    <sena-text-block>
      ${
        IS_PHONE
          ? I18n.f`info.line1.phone`(METADATA.views, this.messages.length)
          : I18n.f`info.line1.pc`(METADATA.views, this.messages.length)
      }<br />
    ${IS_PHONE ? I18n.t`info.line2.phone` : I18n.t`info.line2.pc`}
    <br />
      Made With Love and Open Sourced on <a target="_blank" href="${REPO_URL}">GitHub</a>.
    </sena-text-block>
    `
  }
}
