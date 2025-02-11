import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators";

@customElement("sena-sound-toggle")
export class SenaSoundToggle extends LitElement {
  public static readonly styles = css`
    #sound-toggle {
      position: fixed;
      top: 2rem;
      right: 2rem;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
      color: #eee;
      cursor: pointer;
      backdrop-filter: blur(4px);
      transition: all 0.3s;
      box-shadow: 0 2px 7px rgba(255, 255, 255, 0.1);
    }

    #sound-toggle:hover {
      transform: scale(1.05);
      background: rgba(0, 0, 0, 0.4);
    }
  `;

  private get bgmRef() {
    return this.shadowRoot!.querySelector("#bgm") as HTMLAudioElement;
  }

  private get soundButtonRef() {
    return this.shadowRoot!.querySelector("#sound-toggle") as HTMLButtonElement;
  }

  private palySound() {
    const bgm = this.bgmRef;
    bgm.volume = 0.3;
    bgm.play().then(() => {
      this.autoPlayFailed = false;
    }).catch(() => {
      if (this.autoPlayFailed === undefined) this.autoPlayFailed = true;
      console.error("Failed to play sound");
    });
    this.soundButtonRef.textContent = "🎵";
  }

  private pauseSound() {
    this.bgmRef.pause();
    this.soundButtonRef.textContent = "🔇";
  }

  private autoPlayFailed?: boolean;

  public override render() {
    return html`
    <audio autoplay id="bgm" loop>
      <source src="/assets/audio.mp3" type="audio/mp3">
    </audio>
    <button id="sound-toggle">🎵</button>
    `;
  }

  public override firstUpdated() {
    this.palySound();
    this.soundButtonRef.addEventListener("click", () => {
      if (this.bgmRef.paused) {
        this.palySound();
      } else {
        this.pauseSound();
      }
    });
    (["touchstart", "click"] as const).map((eventName) =>
      document.addEventListener(eventName, () => {
        if (this.autoPlayFailed) this.palySound();
      })
    );
  }
}
