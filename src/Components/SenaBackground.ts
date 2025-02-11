import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import "./SenaTextBlock.ts";
import { betterTimeout } from "../utils/timer.ts";
import { EventsEmmiter } from "../utils/eventsEmiter.ts";

@customElement("sena-background")
export class SenaBackground extends LitElement {
  public static readonly styles = css`
  #bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.85;
    transition: opacity 1.5s;
  }`;

  private getBackground(): string {
    const prevBackground = this.background;
    const result = `/pics/${Math.floor(Math.random() * 8) + 1}.png`;
    if (prevBackground && prevBackground === result) {
      return this.getBackground();
    }
    return result;
  }

  private static readonly brightBackgroundIdList = [4, 7, 8];

  private background = this.getBackground();

  private updateBackground() {
    const ref = (this.shadowRoot!.querySelector("#bg") as HTMLImageElement)!;
    ref.style.opacity = "0";
    this.requestUpdate();

    betterTimeout(() => {
      this.background = this.getBackground();
      ref.src = this.background;
      EventsEmmiter.emit(
        "adaptTextColor",
        SenaBackground.brightBackgroundIdList.includes(Number(
          this.background.slice(this.background.lastIndexOf("/") + 1).split(
            ".",
          )[0],
        )),
      );
      this.requestUpdate();
      betterTimeout(() => {
        ref.style.opacity = "0.85";
        this.requestUpdate();
      }, 100);
    }, 1500);
  }

  public override render() {
    return html`
    <img id="bg" src="${this.background}" alt="Background Image">
    `;
  }

  public override firstUpdated() {
    EventsEmmiter.on("updateContent", () => this.updateBackground());
  }
}
