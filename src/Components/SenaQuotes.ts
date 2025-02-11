import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import { EventsEmmiter } from "../utils/eventsEmiter.ts";
import { sleep } from "../utils/timer.ts";

@customElement("sena-quotes")
export class SenaQuotes extends LitElement {
  public static readonly styles = css`
    .quote {
      font-size: 1.3rem;
      text-align: center;
      margin: 1.5rem auto;
      max-width: 800px;
      min-height: 60px;
      opacity: 0;
      transition: opacity 0.8s, transform 0.8s;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    }

    .dark-quote {
      color: #333;
    }

    .visible {
      opacity: 1;
    }
  `;

  private static readonly quotes: [string, string?][] = [
    [
      "苟利星奏生死以，岂因新岛避趋之",
    ],
    ["私は、彼女を好きです。", "我有件事必须要告诉她——我喜欢你。"],
    [
      "もし、あの呼びかけが、誰にも応えられなかったなら、また、呼びかけをするのです。もし、あの言葉が、誰にも答えられなかったなら、また、言葉を言うのです。",
      "如果曾经的呼喊无人回应，那就再呼唤一次吧。如果曾经的告白无人答复……那就，再告白一次吧。",
    ],
    [
      "ただ、あなたの心に、何かを伝えたいだけです。",
      "不过，下次要写什么的时候，想要传达到你的内心。",
    ],
    [
      "いくつかの景色は、自然に、自分の頭脳に再び現れる。いくつかの思い出は、樱花が落ちてくるときに、私の心に浮かぶものだ。",
      "有些风景，自然而然就在脑海中复苏。有些记忆，就像是和飘落的樱花相呼应一样在我内心深处不断浮现。",
    ],
    ["初恋は、いつか終わる。", "那便是我的初恋。"],
    [
      "私が戻ってきたのはね。 もう一度、星の音を聞くためだよ",
      "我这次回来这里呢，是为了再一次，倾听星星的声音",
    ],
  ];

  private getQuote(): [string, string?] {
    const prevQuote = this.currentQuote;
    const result = SenaQuotes
      .quotes[Math.floor(Math.random() * SenaQuotes.quotes.length)];
    if (prevQuote && prevQuote[0] === result[0]) return this.getQuote();
    return result;
  }

  public currentQuote? = this.getQuote();

  private updateQuote() {
    this.currentQuote = undefined;
    this.requestUpdate();
    sleep(800).then(() => {
      this.currentQuote = this.getQuote();
      this.requestUpdate();
    });
  }

  private adaptTextColor(isBrightBackground: boolean) {
    const ref = this.shadowRoot!.querySelector(".quote")!;
    if (isBrightBackground) {
      ref.classList.add("dark-quote");
    } else {
      ref.classList.remove("dark-quote");
    }
    this.requestUpdate();
  }

  private onMouseEnter() {
    if (this.currentQuote === undefined || !this.currentQuote[1]) return;
    this.shadowRoot!.querySelector("div")!.textContent = this.currentQuote[1];
  }

  private onMouseLeave() {
    if (this.currentQuote === undefined) return;
    this.shadowRoot!.querySelector("div")!.textContent = this.currentQuote[0];
  }

  public override render() {
    return html`
      <div class="quote ${
      this.currentQuote !== undefined ? "visible" : ""
    }" @mouseenter=${this.onMouseEnter} @mouseleave=${this.onMouseLeave}>
          ${this.currentQuote?.[0]}
      </div>
    `;
  }

  public override firstUpdated() {
    EventsEmmiter.on("updateContent", () => this.updateQuote());
    EventsEmmiter.on(
      "adaptTextColor",
      (isBrightBackground) => this.adaptTextColor(isBrightBackground),
    );
  }
}
