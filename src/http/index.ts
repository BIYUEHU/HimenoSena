import type { Message } from '../types.ts'
import { showCatchedError } from '../utils/error.ts'
import SenaEventsEmmiter from '../utils/eventsEmiter.ts'
import { error } from '../utils/logger.ts'

export async function getViews(): Promise<number> {
  if (!('isPhpEnv' in globalThis)) return 0
  return (
    (
      await fetch('./views.php').catch((err) => {
        const content = `Failed to get views: ${showCatchedError(err)}`
        error(content)
        SenaEventsEmmiter.emit('notify', content)
      })
    )
      ?.text()
      .then((value) => {
        const num = Number.parseInt(value, 10)
        if (!Number.isNaN(num)) return num
        throw new Error()
      }) || 0
  )
}

export async function postView() {
  if (!('isPhpEnv' in globalThis)) return
  await fetch('./view.php', { method: 'POST' }).catch((err) => {
    const content = `Failed to post view: ${showCatchedError(err)}`
    error(content)
    SenaEventsEmmiter.emit('notify', content)
  })
}

export function fetchMessageList(): Promise<Message[]> {
  return fetch('https://cdn.jsdelivr.net/gh/biyuehu/himenosena/public/messages.json').then((res) => res.json())
}
