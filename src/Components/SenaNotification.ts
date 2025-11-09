import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators'

@customElement('sena-notification')
export class SenaNotification extends LitElement {
  public static readonly styles = css`
    :host {
      position: fixed;
      top: 4rem;
      right: 1rem;
      z-index: 2000;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      pointer-events: none;
    }

    .notification {
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(4px);
      min-width: 220px;
      max-width: 300px;
      font-size: 0.95rem;
      pointer-events: all;
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .notification.show {
      opacity: 1;
      transform: translateY(0);
    }

    .close-btn {
      float: right;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
      margin-left: 0.5rem;
    }
  `

  private content = '222222222'

  public override render() {
    return html`<div class="notification show">${this.content}</div>`
  }
}
