import { DEFAULT_SETTINGS_SWITCH_TIME } from '../constant.ts'
import { getStorageFiled, StorageKeys } from '../data/storage.ts'
import { betterTimeout } from './timer.ts'

export interface EventsList {
  updateContent(): void
  adaptTextColor(isBrightBackground: boolean): void
  setModal(isOpen: boolean): void
  updateMessages(): void
  notify(message: string): void
}

type EventsListMapping = {
  [key in keyof EventsList]?: EventsList[key][]
}

const EVENTS: EventsListMapping = {}

function on<E extends keyof EventsList>(event: E, listener: EventsList[E]) {
  if (!EVENTS[event]) {
    EVENTS[event] = [listener] as EventsListMapping[E]
  } else {
    EVENTS[event].push(listener)
  }
}

function emit<E extends keyof EventsList>(event: E, ...args: Parameters<EventsList[E]>) {
  if (EVENTS[event]) {
    EVENTS[event].map((listener) => (listener as () => void)(...(args as [])))
  }
}

export function eventsLooper() {
  const switchTime = getStorageFiled(StorageKeys.SETTINGS_SWITCH_TIME, DEFAULT_SETTINGS_SWITCH_TIME)
  if (switchTime === 0) return
  betterTimeout(
    () => {
      eventsLooper()
      emit('updateContent')
    },
    switchTime * 1000 + 1500 + 100
  )
}

export default {
  on,
  emit
}
