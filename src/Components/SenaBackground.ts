import { html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import { nextTick, sleep } from "../utils/timer.ts";
import { SenaEventsEmmiter } from "../utils/eventsEmiter.ts";
import { SenaState } from "../data/state.ts";
import { BACKGROUND_LIST, BRIGHT_BACKGROUND_LIST } from "../constant.ts";
import "./SenaTextBlock.ts";

@customElement("sena-background")
export class SenaBackground extends LitElement {
  private static getBackground() {
    const result = BACKGROUND_LIST[
      Math.floor(Math.random() * BACKGROUND_LIST.length)
    ];
    SenaState.isBrightBackground = BRIGHT_BACKGROUND_LIST.includes(
      result,
    );
    return result;
  }

  private static preloadImages() {
    const preloadContainer = document.createElement("div");
    preloadContainer.style.display = "none";
    document.body.appendChild(preloadContainer);

    BACKGROUND_LIST.map((imageSrc) => {
      const img = document.createElement("img");
      img.src = imageSrc;
      preloadContainer.appendChild(img);
    });
  }

  private background = SenaBackground.getBackground();

  private get backgroundRef() {
    return (this.shadowRoot!.querySelector("#bg") as HTMLImageElement)!;
  }

  private async updateBackground() {
    const ref = this.backgroundRef;
    ref.style.opacity = "0";
    this.requestUpdate();

    await sleep(1500);
    this.background = SenaBackground.getBackground();
    ref.src = this.background;
    SenaEventsEmmiter.emit(
      "adaptTextColor",
    );
    this.requestUpdate();

    await sleep(100);
    ref.style.opacity = "0.85";
    this.requestUpdate();
  }

  public override render() {
    return html`
    <link rel="stylesheet" href="/styles.css">
    <img id="bg" src="${this.background}" alt="Background Image">
    `;
  }

  public override firstUpdated() {
    nextTick(() => SenaBackground.preloadImages());
    const ref = this.backgroundRef;
    ["touchstart", "contextmenu", "touchmove"].map((eventName) =>
      ref.addEventListener(eventName, (event) => event.preventDefault())
    );
    SenaEventsEmmiter.on("updateContent", () => this.updateBackground());
  }
}
