export function multiply(multiplicand: number, multiplier: number): number {
  let product = 0;

  for (let i = 0; i < Math.abs(multiplier); i++) {
    product += multiplicand;
  }

  return multiplier < 0 ? -product : product;
}
