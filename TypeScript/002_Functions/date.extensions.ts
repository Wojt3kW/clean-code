/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-extend-native */
/* eslint-disable @typescript-eslint/method-signature-style */
export {}

declare global {
  interface Date {
    addMonths(months: number): Date;
  }
}

Date.prototype.addMonths = function (months: number): Date {
  if (!(months > 0)) {
    return this;
  }
  const date = this as Date;
  return new Date(new Date(date).setMonth(date.getMonth() + months));
};
