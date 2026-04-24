import { fetchMessageList, postView } from '../http/index.ts'
import { showCatchedError } from '../utils/error.ts'
import SenaEventsEmmiter from '../utils/eventsEmiter.ts'
import { error } from '../utils/logger.ts'

import { betterTimeout } from '../utils/timer.ts'
import { getStorageFiled, StorageKeys, setStorageFiled } from './storage.ts'

let activeTime = 0

function setActiveCounter() {
  const isVisited = getStorageFiled(StorageKeys.STATE_VISITED, false)
  if (!isVisited && activeTime <= 10) {
    activeTime += 1
    betterTimeout(() => setActiveCounter(), 1000)
    return
  }
  postView().then(() => {
    if (!isVisited) setStorageFiled(StorageKeys.STATE_VISITED, true)
  })
}

function initializeMessages() {
  fetchMessageList()
    .then((messages) => SenaEventsEmmiter.emit('loadedMessages', messages))
    .catch((err) => {
      SenaEventsEmmiter.emit('notify', 'Failed to fetch message list, please check your network connection')
      error(`Failed to fetch message list: ${showCatchedError(err)}`)
    })
}

export default {
  initializeMessages,
  setActiveCounter
}
