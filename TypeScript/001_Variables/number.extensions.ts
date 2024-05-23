/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-extend-native */
/* eslint-disable @typescript-eslint/method-signature-style */
export {}

declare global {
  interface Number {
    isBetween(left: number, right: number): boolean;
  }
}

Number.prototype.isBetween = function (left: number, right: number): boolean {
  const value = this as number;
  return left <= value && value <= right;
};
