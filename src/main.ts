import "./Components/SenaComponent.ts";
import { EventsEmmiter } from "./utils/eventsEmiter.ts";
import { betterTimeout } from "./utils/timer.ts";

function eventsLooper() {
  betterTimeout(() => {
    eventsLooper();
    EventsEmmiter.emit("updateContent");
  }, 10000 + 1500 + 100);
}

eventsLooper();
