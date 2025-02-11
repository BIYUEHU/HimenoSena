export interface EventsList {
  updateContent(): void;
  adaptTextColor(isBrightBackground: boolean): void;
}

type EventsListMapping = {
  [key in keyof EventsList]?: EventsList[key][];
};

export class EventsEmmiter {
  private static readonly events: EventsListMapping = {};

  public static on<E extends keyof EventsList>(
    event: E,
    listener: EventsList[E],
  ) {
    if (!this.events[event]) {
      this.events[event] = [listener] as EventsListMapping[E];
    } else {
      this.events[event].push(listener);
    }
  }

  public static emit<E extends keyof EventsList>(
    event: E,
    ...args: Parameters<EventsList[E]>
  ) {
    if (this.events[event]) {
      this.events[event].map((listener) =>
        (listener as () => void)(...(args as []))
      );
    }
  }
}
