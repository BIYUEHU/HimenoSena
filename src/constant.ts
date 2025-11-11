import type { Metadata } from './types.ts'

export const IS_PHONE = globalThis.window.innerWidth <= 960

export const DEFAULT_SETTINGS_AUTOPLAY = true

export const DEFAULT_SETTINGS_SWITCH_TIME = 60

export const DEFAULT_SETTINGS_START_DATE = '2023-07-05'

export const METADATA: Metadata = (
  globalThis as {
    sena_metadata?: Metadata
  }
).sena_metadata ?? {
  isPhpEnv: false,
  views: 0,
  isRecorded: false,
  lastChecked: 0,
  lastUpdated: 0
}

export const GITHUB_URL = 'https://github.com'

export const REPO_URL = `${GITHUB_URL}/biyuehu/HimenoSena`

export const LEAVE_MESSAGES_DOCS = `${REPO_URL}/blob/main/docs/messages.md`

export const BACKGROUND_LIST = [
  'https://cdn.img.huoshen80.top/i/2025/11/11/6912c10fb847c.png',
  'https://cdn.img.huoshen80.top/i/2025/11/11/6912c1307f2b8.png',
  'https://cdn.img.huoshen80.top/i/2025/11/11/6912c16f34120.png',
  'https://cdn.img.huoshen80.top/i/2025/11/11/6912c198278bc.png',
  'https://cdn.img.huoshen80.top/i/2025/11/11/6912c1b1cb865.png',
  'https://cdn.img.huoshen80.top/i/2025/11/11/6912c1b6e7998.png',
  'https://cdn.img.huoshen80.top/i/2025/11/11/6912c1b89c6d3.png'
]

export const BRIGHT_BACKGROUND_LIST = [0, 5, 6].map((index) => BACKGROUND_LIST[index])

export const QUOTES_LIST: [string, string?][] = [
  ['苟利星奏生死以，岂因新岛避趋之'],
  ['私はあなたに言わなければならないことがある——あなたが好きです。', '我有件事必须要告诉她——我喜欢你。'],
  [
    'もしも、かつての叫びが誰にも返事をもらえなかったのなら、もう一度叫んでみてください。もしも、かつての告白が誰にも答えられなかったのなら…もう一度告白してみてください。',
    '如果曾经的呼喊无人回应，那就再呼唤一次吧。如果曾经的告白无人答复……那就，再告白一次吧。'
  ],
  [
    'ただし、次に何かを書こうとする時は、あなたの心に届くように書きたい。',
    '不过，下次要写什么的时候，想要传达到你的内心。'
  ],
  [
    'いくつかの風景は、自然と脳裏に蘇ってくる。いくつかの記憶は、まるで舞い落ちる桜の花びらのように、私の心の奥底で絶えず浮かび上がってくる。',
    '有些风景，自然而然就在脑海中复苏。有些记忆，就像是和飘落的樱花相呼应一样在我内心深处不断浮现。'
  ],
  ['それが私の初恋だった。', '那便是我的初恋。'],
  ['私が戻ってきたのはね。 もう一度、星の音を聞くためだよ', '我这次回来这里呢，是为了再一次，倾听星星的声音']
]

export const UNIQUE = [
  1392, 180, 936, 72, 1332, 84, 1404, 132, 1392, 120, 1380, 96, 1284, 108, 1284, 168, 456, 144, 1068, 156, 1236, 192
]

export const AUDIOS = [
  'flower -piano arrangement- - 水月陵',
  '風の止まり木 - 水月陵',
  'GLORIOUS_DAYS (Short) - yuiko',
  '東の空から始まる世界 - yuiko'
]
