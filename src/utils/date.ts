export type DateArray = [number, number, number]

export function validateDate<
  T extends string,
  A = T extends `${infer Y extends number}-${infer M extends number}-${infer D extends number}` ? [Y, M, D] : null,
  R = A extends DateArray ? A : null
>(dateString: T): R {
  const regex = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
  const match = dateString.match(regex)
  if (!match) return null as R

  const year = parseInt(match[1], 10)
  const month = parseInt(match[2], 10)
  const day = parseInt(match[3], 10)

  if (month < 1 || month > 12) return null as R

  const daysInMonth = new Date(year, month, 0).getDate()
  if (day < 1 || day > daysInMonth) {
    return null as R
  }

  return [year, month, day] as R
}

export function daysSince<T extends string, R = ReturnType<typeof validateDate<T>> extends DateArray ? number : null>(
  dateString: T
): R {
  const dateArray = validateDate(dateString)
  if (!dateArray) return null as R

  const [year, month, day] = dateArray
  const date = new Date(year, month - 1, day)

  const today = new Date()
  const timeDifference = today.getTime() - date.getTime()

  return Math.floor(timeDifference / (1000 * 3600 * 24)) as R
}
