import { METADATA } from "../constant.ts";
import type { Message } from "../types.ts";
import { error } from "../utils/logger.ts";

export function postView() {
  if (!METADATA.isPhpEnv) return;
  return fetch("/view.php").then(() => {
    METADATA.isRecorded = true;
  }).catch((err) => error(`Failed to post view: ${err}`));
}

export function getMessagesList(): Promise<Message[]> {
  return fetch("/messages.json").then((res) => res.json()).catch((err) =>
    error(`Failed to get messages: ${err}`)
  );
}
