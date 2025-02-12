export function log(
  message: string,
  color: string = "#FED2E4;",
) {
  console.log(
    `%c[Sena] %c${message}`,
    "color: #E6AD88; font-weight: bold; font-size: 1.2em;",
    `color: ${color}; font-weight: bold; font-size: 1.2em;`,
  );
}

export function error(message: string) {
  console.error(
    `%c[Sena] %c${message}`,
    "color: #E6AD88; font-weight: bold; font-size: 1.2em;",
    "color: #FF4136; font-weight: bold; font-size: 1.2em;",
  );
}
