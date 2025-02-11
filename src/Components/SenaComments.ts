import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import "./SenaTextBlock.ts";

@customElement("sena-comments")
export class SenaComments extends LitElement {
  public static readonly styles = css`
  a {
    color: #fff;
  }

  .comments:hover {
    cursor: pointer;
  }
  `;

  public override render() {
    return html`<sena-text-block title="Messages">
      <p class="comments">传达之物，皆数传达；何曾无理由修成正果？铅华尽洗，磨难遍历；何曾无理由相信将是回忆过后的美好续篇？不觉间娇妻久归，笑靥如花，我的世界只有星空与你。</p>
      <a href="#">换一个</a>
      <a href="#" target="_blank">我也要写</a>
    </sena-text-block>
    `;
  }
}
