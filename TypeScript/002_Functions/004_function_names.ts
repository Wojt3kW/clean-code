// Nazywaj funkcje zgodnie z ich przeznaczeniem

export class BadNames {
  public constructor() {
    const date = new Date();

    // Trudno jest powiedzieć, na podstawie nazwy funkcji, co jest dodawane do daty
    const newDate = this.addToDate(date, 1);
    console.log(newDate);
  }

  private addToDate(date: Date, month: number): Date {
    return new Date(date.setMonth(date.getMonth() + month));
  }
}

export class GoodNames {
  public constructor() {
    const date = new Date();

    // Nazwa funkcji jasno określa, co jest dodawane i do daty
    // Dodaje miesiąc do daty
    const newDate = this.addMonthToDate(date, 1);
    console.log(newDate);
  }

  private addMonthToDate(date: Date, month: number): Date {
    return new Date(date.setMonth(date.getMonth() + month));
  }
}
