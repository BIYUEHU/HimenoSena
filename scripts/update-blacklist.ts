type RawBlacklistRecord = {
  platform: string
  id: string
  summary: string
}

type BlacklistRecord = RawBlacklistRecord & {
  name: string
}

const RAW_BLACKLIST_PATH = 'data/blacklist.raw.json'
const BLACKLIST_PATH = 'data/blacklist.json'

const isBilibili = (platform: string) => platform.trim() === 'bilibili'

export const getBiliUsername = async (uid: number | string) => {
  const res = await fetch(`https://i.arimuraromi.com/api/utils/agent?url=https://space.bilibili.com/${uid}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136.0.0.0 Safari/537.36',
      Referer: 'https://www.bilibili.com/',
      Origin: 'https://www.bilibili.com'
    }
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch Bilibili user ${uid}: HTTP ${res.status}`)
  }

  const match = (await res.text()).match(/<title>(.*?)的个人空间/)

  if (!match?.[1]) {
    throw new Error(`Bilibili user ${uid} not found`)
  }

  return match[1].trim()
}

const readJson = async <T>(path: string): Promise<T> => JSON.parse(await Deno.readTextFile(path))

const normalizeRawRecord = (record: Partial<RawBlacklistRecord>): RawBlacklistRecord => ({
  platform: String(record.platform ?? '').trim(),
  id: String(record.id ?? '').trim(),
  summary: String(record.summary ?? '').trim()
})

const resolveName = async (record: RawBlacklistRecord, previous: BlacklistRecord[]) => {
  const oldRecord = previous.find((item) => item.platform === record.platform && item.id === record.id)

  if (!isBilibili(record.platform)) {
    return oldRecord?.name ?? ''
  }

  try {
    return await getBiliUsername(record.id)
  } catch (error) {
    console.warn(error instanceof Error ? error.message : String(error))
    return oldRecord?.name ?? ''
  }
}

const updateBlacklist = async () => {
  const rawRecords = (await readJson<Partial<RawBlacklistRecord>[]>(RAW_BLACKLIST_PATH)).map(normalizeRawRecord)
  const previousRecords = await readJson<BlacklistRecord[]>(BLACKLIST_PATH).catch(() => [])

  const records: BlacklistRecord[] = []
  for (const rawRecord of rawRecords) {
    records.push({
      ...rawRecord,
      name: await resolveName(rawRecord, previousRecords)
    })
  }

  await Deno.writeTextFile(BLACKLIST_PATH, `${JSON.stringify(records, null, 2)}\n`)
  console.log(`Updated ${BLACKLIST_PATH}`)
}

if (import.meta.main) {
  await updateBlacklist()
}
