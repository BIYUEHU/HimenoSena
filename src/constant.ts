import type { Metadata } from "./types.ts";

export const IS_PHONE = globalThis.window.innerWidth <= 960;

export const DEFAULT_SETTINGS_AUTOPLAY = true;

export const DEFAULT_SETTINGS_SWITCH_TIME = 60;

export const DEFAULT_SETTINGS_START_DATE = "2023-07-03";

export const METADATA: Metadata = ((globalThis as {
  sena_metadata?: Metadata;
}).sena_metadata) ??
  {
    isPhpEnv: false,
    views: 0,
    isRecorded: false,
    lastChecked: 0,
    lastUpdated: 0,
  };

export const GITHUB_URL = "https://github.com";

export const REPO_URL = `${GITHUB_URL}/biyuehu/HimenoSena`;

export const LEAVE_MESSAGES_DOCS = `${REPO_URL}/blob/main/docs/messages.md`;

export const BACKGROUND_LIST = [
  "https://cdn.hk.huoshen80.top/i/2025/02/12/67ac95d855efa.png",
  "https://cdn.hk.huoshen80.top/i/2025/02/12/67ac95d9601e9.png",
  "https://cdn.hk.huoshen80.top/i/2025/02/12/67ac95d9bdec1.png",
  "https://cdn.hk.huoshen80.top/i/2025/02/12/67ac95dabf616.png",
  "https://cdn.hk.huoshen80.top/i/2025/02/12/67ac95db88a64.png",
  "https://cdn.hk.huoshen80.top/i/2025/02/12/67ac95dccc294.png",
  "https://cdn.hk.huoshen80.top/i/2025/02/12/67ac95dd173bb.png",
  "https://cdn.hk.huoshen80.top/i/2025/02/12/67ac95ded22ca.png",
];

export const BRIGHT_BACKGROUND_LIST = [0, 6, 7].map((index) =>
  BACKGROUND_LIST[index]
);

export const QUOTES_LIST: [string, string?][] = [
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

export const UNIQUE = [
  1392,
  180,
  936,
  72,
  1332,
  84,
  1404,
  132,
  1392,
  120,
  1380,
  96,
  1284,
  108,
  1284,
  168,
  456,
  144,
  1068,
  156,
  1236,
  192,
];
