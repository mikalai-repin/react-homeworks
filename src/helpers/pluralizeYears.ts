export const pluralizeYears = (value: number): string => {
  const absNumber = Math.abs(value) % 100

  const lastDigit = absNumber % 10

  if (absNumber > 10 && absNumber < 20) {
    return `лет`
  }
  if (lastDigit > 1 && lastDigit < 5) {
    return `года`
  }
  if (lastDigit === 1) {
    return `год`
  }
  return `лет`
}
