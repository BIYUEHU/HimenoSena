import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sena-text-block')
export class SenaTextBlock extends LitElement {
  @property()
  public accessor head = ''

  public override render() {
    return html`
      <link rel="stylesheet" href="./styles.css">
      <div class="text-block">
        ${this.head ? html`<h2>${this.head}</h2>` : ''}
        <div><slot /></div>
      </div>
    `
  }
}



