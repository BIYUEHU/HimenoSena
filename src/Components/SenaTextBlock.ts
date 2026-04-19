import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('sena-text-block')
export class SenaTextBlock extends LitElement {
  public override title = ''

  public override render() {
    return html`
      <link rel="stylesheet" href="/styles.css">
      <div class="text-block">
        ${this.title ? html`<h2>${this.title}</h2>` : ''}
        <div><slot /></div>
      </div>
    `
  }
}
