import { postView } from '../http/index.ts'
import { betterTimeout } from '../utils/timer.ts'
import { getStorageFiled, StorageKeys } from './storage.ts'

let activeTime = 0

function setActiveCounter() {
  const isVisited = getStorageFiled(StorageKeys.STATE_VISITED, false)
  if (!isVisited && activeTime <= 10) {
    activeTime += 1
    betterTimeout(() => setActiveCounter(), 1000)
    return
  }
  postView().then(() => {
    if (!isVisited) getStorageFiled(StorageKeys.STATE_VISITED, true)
  })
}

function isPhone() {
  return typeof globalThis.window === 'object' ? globalThis.window.innerWidth <= 960 : true
}

export default {
  setActiveCounter,
  isPhone
}
