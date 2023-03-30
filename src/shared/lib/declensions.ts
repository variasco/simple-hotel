export const declensions = (n: number, variants: string[]): string => {
  n = Math.floor(Math.abs(n)) % 100;
  const m = n % 10;

  if (10 <= n && n <= 20) {
    return variants[2];
  }
  if (m === 1) {
    return variants[0];
  }
  if (2 <= m && m <= 4) {
    return variants[1];
  }
  return variants[2];
};
