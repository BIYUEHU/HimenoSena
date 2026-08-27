import { HIMENO_SENA_BIRTHDAY } from '../constant.ts'

const PREVIEW_QUERY = 'sena-birthday'

export function isHimenoSenaBirthday(date = new Date()) {
  if (typeof document === 'undefined') return false

  if (globalThis.location?.search) {
    const params = new URLSearchParams(globalThis.location.search)
    if (params.get(PREVIEW_QUERY) === '1') return true
  }

  const [month, day] = HIMENO_SENA_BIRTHDAY
  return date.getMonth() + 1 === month && date.getDate() === day
}
