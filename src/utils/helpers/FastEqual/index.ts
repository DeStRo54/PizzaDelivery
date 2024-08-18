export const FastEqual = (a: Record<string, any>, b: Record<string, any>) =>
  JSON.stringify(a) === JSON.stringify(b);
