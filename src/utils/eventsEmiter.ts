import { DEFAULT_SETTINGS_SWITCH_TIME } from '../constant.ts'
import { getStorageFiled, StorageKeys } from '../data/storage.ts'
import { betterTimeout } from './timer.ts'

export interface EventsList {
  updateContent(): void
  adaptTextColor(): void
  setModal(isOpen: boolean): void
  updateMessages(): void
  notify(message: string): void
}

type EventsListMapping = {
  [key in keyof EventsList]?: EventsList[key][]
}

export class SenaEventsEmmiter {
  private static readonly events: EventsListMapping = {}

  public static on<E extends keyof EventsList>(event: E, listener: EventsList[E]) {
    if (!SenaEventsEmmiter.events[event]) {
      SenaEventsEmmiter.events[event] = [listener] as EventsListMapping[E]
    } else {
      SenaEventsEmmiter.events[event].push(listener)
    }
  }

  public static emit<E extends keyof EventsList>(event: E, ...args: Parameters<EventsList[E]>) {
    if (SenaEventsEmmiter.events[event]) {
      SenaEventsEmmiter.events[event].map((listener) => (listener as () => void)(...(args as [])))
    }
  }
}

export function eventsLooper() {
  const switchTime = getStorageFiled(StorageKeys.SETTINGS_SWITCH_TIME, DEFAULT_SETTINGS_SWITCH_TIME)
  if (switchTime === 0) return
  betterTimeout(
    () => {
      eventsLooper()
      SenaEventsEmmiter.emit('updateContent')
    },
    switchTime * 1000 + 1500 + 100
  )
}
