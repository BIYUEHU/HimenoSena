import { html, LitElement } from "lit";
import { customElement } from "lit/decorators";
import { betterTimeout } from "../utils/timer.ts";
import { getStorageFiled, StorageKeys } from "../data/storage.ts";
import { DEFAULT_SETTINGS_AUTOPLAY } from "../constant.ts";

@customElement("sena-sound-toggle")
export class SenaSoundToggle extends LitElement {
  private get bgmRef() {
    return this.shadowRoot!.querySelector("#bgm") as HTMLAudioElement;
  }

  private get soundButtonRef() {
    return this.shadowRoot!.querySelector("#sound-toggle") as HTMLButtonElement;
  }

  private soundButtonRotate(rotate: number) {
    this.soundButtonRef.style.transform = `rotate(${rotate}deg)`;
    betterTimeout(
      () =>
        this.soundButtonRotate(
          this.soundButtonRef.textContent === "🔇" ? rotate : rotate + 10,
        ),
      200,
    );
  }

  private palySound() {
    const bgm = this.bgmRef;
    bgm.volume = 0.3;
    bgm.play().then(() => {
      this.soundButtonRef.textContent = "🎵";
      this.autoPlayFailed = false;
    }).catch(() => {
      this.pauseSound();
      if (this.autoPlayFailed === undefined) this.autoPlayFailed = true;
    });
  }

  private pauseSound() {
    this.bgmRef.pause();
    this.soundButtonRef.textContent = "🔇";
  }

  private toggleSound() {
    this.bgmRef.paused ? this.palySound() : this.pauseSound();
  }

  private autoPlayFailed?: boolean;

  public override render() {
    return html`
    <link rel="stylesheet" href="/styles.css">
    <audio id="bgm" loop>
      <source src="/assets/audio.mp3" type="audio/mp3">
    </audio>
    <button class="fixed-button-common" id="sound-toggle" @click=${this.toggleSound}>🎵</button>
    `;
  }

  public override firstUpdated() {
    this.soundButtonRotate(0);
    if (
      getStorageFiled(StorageKeys.SETTINGS_AUTOPLAY, DEFAULT_SETTINGS_AUTOPLAY)
    ) {
      this.palySound();
      (["touchstart", "click"] as const).map((eventName) =>
        document.addEventListener(eventName, () => {
          if (this.autoPlayFailed) this.palySound();
        })
      );
    } else {
      this.pauseSound();
    }
  }
}
