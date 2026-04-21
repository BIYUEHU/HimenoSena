export class SenaError extends Error {}

export function showCatchedError(err: unknown) {
  return err instanceof SenaError ? err.message : String(err)
}
