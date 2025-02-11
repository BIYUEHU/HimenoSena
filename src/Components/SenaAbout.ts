import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import "./SenaTextBlock.ts";

@customElement("sena-about")
export class SenaAbout extends LitElement {
  public static readonly styles = css`
    a {
      color: #fff;
    }
  `;

  public override render() {
    return html`
    <sena-text-block title="About">
      Us:track旗下游戏 <a href="http://ustrack.amusecraft.com/koikake/" target="_blank">「恋×シンアイ彼女」</a> 唯一女主。<br /><br />
      总是在身边软绵绵的她就是最容易攻略的那一个女主角。<br />
      待人亲切温厚老实的性格，因而在班级内不算太显眼那类女生。<br />
      然而因为那总是令周围暖意满满宛如太阳一般纯真的笑颜，暗地里在男生中意外的有人气。<br />
      不过，只有洸太郎总是无法直面那耀眼的笑容。<br />
      转校的经历很多，幼时曾一度居住于御影之丘町这里。
    </sena-text-block>
    `;
  }
}
