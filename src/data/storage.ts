export enum StorageKeys {
  STATE_VISITED = "state_visited",
  SETTINGS_AUTOPLAY = "settings_autoplay",
  SETTINGS_SWITCH_TIME = "settings_switch_time",
  SETTINGS_START_DATE = "settings_start_date",
}

export type GetStorageKeyValueType<K extends StorageKeys> =
  StorageKeys.STATE_VISITED extends K ? boolean
    : StorageKeys.SETTINGS_AUTOPLAY extends K ? boolean
    : StorageKeys.SETTINGS_SWITCH_TIME extends K ? number
    : StorageKeys.SETTINGS_START_DATE extends K ? string
    : never;

export function getStorageFiled<
  K extends StorageKeys,
  D extends GetStorageKeyValueType<K>,
  R extends D,
>(
  key: K,
  defaultValue: R,
): D {
  const value = localStorage.getItem(`sena_${key}`);
  if (!value) {
    localStorage.setItem(key, String(defaultValue));
    return defaultValue;
  }
  if (typeof defaultValue === "number") {
    const result = Number(value);
    if (isNaN(result)) {
      localStorage.setItem(key, String(defaultValue));
      return defaultValue;
    }
    return result as D;
  }
  if (typeof defaultValue === "boolean") {
    return (value === "true") as D;
  }
  if (["", "null", "undefined"].includes(value.trim())) {
    localStorage.setItem(key, String(defaultValue));
    return defaultValue;
  }
  return value as D;
}

export function setStorageFiled<K extends StorageKeys>(
  key: K,
  value: GetStorageKeyValueType<K>,
): void {
  localStorage.setItem(`sena_${key}`, String(value));
}
