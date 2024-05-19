/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-extend-native */
/* eslint-disable @typescript-eslint/method-signature-style */
export {}

declare global {
  interface Array<T> {
    sum(this: number[]): number;
  }
}

Object.defineProperty(Array.prototype, 'sum', {
  value: function(this: number[]): number {
    return this.reduce((sum, current) => sum + current, 0);
  },
});
