import { METADATA } from '../constant.ts'
import { getMessagesList, postView } from '../http/index.ts'
import type { Message } from '../types.ts'
import { SenaEventsEmmiter } from '../utils/eventsEmiter.ts'
import { error } from '../utils/logger.ts'
import { betterTimeout } from '../utils/timer.ts'
import { getStorageFiled, StorageKeys, setStorageFiled } from './storage.ts'

export class SenaState {
  public static isBrightBackground = false

  private static get isVisited() {
    return getStorageFiled(StorageKeys.STATE_VISITED, false)
  }

  private static activeTime = 0

  public static setActiveCounter() {
    if (!SenaState.isVisited && SenaState.activeTime <= 10) {
      SenaState.activeTime += 1
      betterTimeout(() => SenaState.setActiveCounter(), 1000)
      return
    }
    if (!SenaState.isVisited) setStorageFiled(StorageKeys.STATE_VISITED, true)
    if (!METADATA.isRecorded) postView()
    return
  }

  public static messagesList: Message[] = [
    {
      msg: '传达之物，皆数传达；何曾无理由修成正果？铅华尽洗，磨难遍历；何曾无理由相信将是回忆过后的美好续篇？不觉间，娇妻久归，笑靥如花，我的世界唯有星空与你。',
      user: 'BIYUEHU',
      name: 'AS'
    }
  ]

  public static setMessagesList() {
    getMessagesList()
      .then((res) => {
        SenaState.messagesList = res
        SenaEventsEmmiter.emit('updateMessages')
      })
      .catch(() => {
        error('[Sena] Failed to fetch messages list')
      })
  }
}
