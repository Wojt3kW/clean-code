/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

import './date.extensions';

// Nazywaj funkcje zgodnie z ich przeznaczeniem
export class BadFunctionName {
  public constructor() {
    const date = new Date();

    // Trudno jest powiedzieć, na podstawie nazwy funkcji, co jest dodawane do daty
    const newDate = this.addToDate(date, 1);
    console.log('BadFunctionName, date:', date, 'new date:', newDate);
  }

  private addToDate(date: Date, valueToAdd: number): Date {
    return new Date(new Date(date).setMonth(date.getMonth() + valueToAdd));
  }
}

const badFunctionName = new BadFunctionName();

export class BetterFunctionName {
  public constructor() {
    const date = new Date();

    // Nazwa funkcji jasno określa, co jest dodawane do daty, dodaje miesiąc do daty
    const newDate = this.addMonthToDate(date, 1);
    console.log('BetterFunctionName, date:', date, 'new date:', newDate);
  }

  private addMonthToDate(date: Date, months: number): Date {
    return new Date(new Date(date).setMonth(date.getMonth() + months));
  }
}

const betterFunctionName = new BetterFunctionName();

export class ExtensionsMethod {
  public constructor() {
    const date = new Date();

    // Rozszerzenie klasy Date o metodę addMonth
    const newDate = date.addMonths(1);
    console.log('ExtensionsMethod, date:', date, 'new date:', newDate);
  }
}

const classWithExtensions = new ExtensionsMethod();
