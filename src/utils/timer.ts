export function betterTimeout(fn: () => void, ms: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      try {
        fn();
        resolve();
      } catch (e) {
        reject(e);
      } finally {
        clearTimeout(timer);
      }
    }, ms);
  });
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    betterTimeout(resolve, ms);
  });
}
