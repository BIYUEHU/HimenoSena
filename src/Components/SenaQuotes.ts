import { html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import { SenaEventsEmmiter } from "../utils/eventsEmiter.ts";
import { sleep } from "../utils/timer.ts";
import { SenaState } from "../data/state.ts";
import { QUOTES_LIST } from "../constant.ts";

@customElement("sena-quotes")
export class SenaQuotes extends LitElement {
  private getQuote(): [string, string?] {
    const prevQuote = this.currentQuote;
    const result = QUOTES_LIST[Math.floor(Math.random() * QUOTES_LIST.length)];
    return prevQuote && prevQuote[0] === result[0] ? this.getQuote() : result;
  }

  private currentQuote? = this.getQuote();

  private index: 0 | 1 = 0;

  private updateQuote() {
    this.currentQuote = undefined;
    this.requestUpdate();
    sleep(800).then(() => {
      this.currentQuote = this.getQuote();
      this.requestUpdate();
    });
  }

  private adaptTextColor() {
    const ref = this.shadowRoot!.querySelector(".quote")!;
    if (SenaState.isBrightBackground) {
      ref.classList.add("dark-color");
    } else {
      ref.classList.remove("dark-color");
    }
    this.requestUpdate();
  }

  private onMouseEnter() {
    if (this.currentQuote === undefined || !this.currentQuote[1]) return;
    this.index = 1;
    this.requestUpdate();
  }

  private onMouseLeave() {
    if (this.currentQuote === undefined) return;
    this.index = 0;
    this.requestUpdate();
  }

  public override render() {
    return html`
      <link rel="stylesheet" href="/styles.css">
      <div class="quote ${
      this.currentQuote !== undefined ? "visible" : ""
    }" @mouseenter=${this.onMouseEnter} @mouseleave=${this.onMouseLeave}>
          ${this.currentQuote?.[this.index]}
      </div>
    `;
  }

  public override firstUpdated() {
    this.adaptTextColor();
    SenaEventsEmmiter.on("updateContent", () => this.updateQuote());
    SenaEventsEmmiter.on("adaptTextColor", () => this.adaptTextColor());
  }
}
