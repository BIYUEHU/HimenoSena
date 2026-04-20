import { METADATA } from '../constant.ts'
import { postView } from '../http/index.ts'
import { betterTimeout } from '../utils/timer.ts'

let activeTime = 0

// function isVisited() {
//   return getStorageFiled(StorageKeys.STATE_VISITED, false)
// }

function setActiveCounter() {
  if (!METADATA.isRecorded && activeTime <= 10) {
    activeTime += 1
    betterTimeout(() => setActiveCounter(), 1000)
    return
  }
  // if (!isVisited) setStorageFiled(StorageKeys.STATE_VISITED, true)
  if (!METADATA.isRecorded) postView()
  return
}

// const messageList: Message[] = []

// function initMessageList() {
//   fetchMessageList()
//     .then((res) => {
//       messageList.push(...res)
//       SenaEventsEmmiter.emit('updateMessages')
//     })
//     .catch((err) => {
//       error(`[Sena] Failed to fetch messages list: ${err instanceof Error ? err.message : err}`)
//     })
// }

// function getMessageList() {
//   return messageList
// }

export default {
  setActiveCounter
  // initMessageList,
  // getMessageList
}
