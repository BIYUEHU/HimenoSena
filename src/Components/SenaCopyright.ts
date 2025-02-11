import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import "./SenaTextBlock.ts";

@customElement("sena-copyright")
export class SenaCopyright extends LitElement {
  public static readonly styles = css`
  a {
    color: #fff;
  }
  `;

  public override render() {
    return html`
    <sena-text-block>
      Total number of visitors: ${((globalThis as {
      sena_metadata?: { views?: number };
    }).sena_metadata?.views ?? 0)} | Number of messages: ${1}<br />
      Copyright © 2025 Himeno Sena. All rights reserved.<br />
      Made With Love and Open Sourced on <a target="_blank"
        href="https://github.com/biyuehu/HimenoSena">GitHub</a>.
    </sena-text-block>
    `;
  }
}
